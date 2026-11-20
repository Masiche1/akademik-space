import { Link } from "react-router-dom";
import { useMutation } from "convex/react";
import { formatDistanceToNow } from "date-fns";
import { UserMinus } from "lucide-react";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api.js";
import { Button } from "@/components/ui/button.tsx";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.tsx";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip.tsx";
import { countQuestions, getCourse } from "@/content/catalog.ts";
import { MASTERY_STYLE, markPercent, masteryLevel } from "@/lib/mastery.ts";
import { errorMessage } from "@/lib/errors.ts";
import { cn } from "@/lib/utils.ts";
import { learnerPath, type ClassDetail, type RosterRow } from "../../_lib/teach.ts";

type Progress = RosterRow["progress"][string];

function ProgressCell({ progress, totalQuestions }: { progress: Progress; totalQuestions: number }) {
  if (!progress) return <span className="text-xs text-muted-foreground">Not started</span>;
  const pct = markPercent(progress.marksEarned, progress.marksAvailable);
  const style = MASTERY_STYLE[masteryLevel(pct, progress.questionsAttempted)];
  return (
    <div className="w-32 space-y-1">
      <p className="flex items-baseline justify-between text-xs">
        <span className={cn("font-mono font-semibold", style.text)}>{pct}%</span>
        <span className="text-muted-foreground">{progress.questionsAttempted}/{totalQuestions}</span>
      </p>
      <div className="h-1 overflow-hidden rounded-full bg-muted">
        <div className={cn("h-full rounded-full", style.bar)} style={{ width: `${Math.min(100, (progress.questionsAttempted / Math.max(totalQuestions, 1)) * 100)}%` }} />
      </div>
    </div>
  );
}

const lastActive = (row: RosterRow) =>
  Object.values(row.progress).reduce<string | null>((latest, p) => (p && (!latest || p.lastAttemptAt > latest) ? p.lastAttemptAt : latest), null);

/** Students down the side, assigned courses across the top: best marks and questions attempted. */
export default function RosterTable({ detail }: { detail: ClassDetail }) {
  const removeStudent = useMutation(api.teach.removeStudent);
  const courses = detail.courseIds.flatMap((id) => getCourse(id) ?? []);

  const remove = async (row: RosterRow) => {
    try {
      await removeStudent({ classId: detail._id, userId: row.userId });
      toast.success(`${row.name} removed from the class`);
    } catch (e) {
      toast.error(errorMessage(e, "Could not remove the student"));
    }
  };

  return (
    <div className="overflow-x-auto rounded-2xl border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-44">Student</TableHead>
            {courses.map((c) => <TableHead key={c.id} className="min-w-36 whitespace-normal">{c.title}</TableHead>)}
            <TableHead className="min-w-28">Last active</TableHead>
            {detail.canEdit && <TableHead className="w-10"><span className="sr-only">Remove</span></TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {detail.roster.map((row) => {
            const last = lastActive(row);
            return (
              <TableRow key={row.userId}>
                <TableCell>
                  <Link to={learnerPath(detail.orgId, row.userId)} className="block max-w-56 hover:text-chart-1 cursor-pointer">
                    <span className="block truncate font-medium">{row.name}</span>
                    {row.email && <span className="block truncate text-xs text-muted-foreground">{row.email}</span>}
                  </Link>
                </TableCell>
                {courses.map((c) => (
                  <TableCell key={c.id}><ProgressCell progress={row.progress[c.id] ?? null} totalQuestions={countQuestions(c)} /></TableCell>
                ))}
                <TableCell className="text-xs text-muted-foreground">{last ? formatDistanceToNow(new Date(last), { addSuffix: true }) : "No activity"}</TableCell>
                {detail.canEdit && (
                  <TableCell>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" variant="ghost" onClick={() => void remove(row)} aria-label={`Remove ${row.name}`}><UserMinus className="size-4" /></Button>
                      </TooltipTrigger>
                      <TooltipContent>Remove from class</TooltipContent>
                    </Tooltip>
                  </TableCell>
                )}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
