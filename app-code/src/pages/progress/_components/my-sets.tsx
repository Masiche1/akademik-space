import { Link } from "react-router-dom";
import { useQuery } from "convex/react";
import { ChevronRight, ClipboardList, Timer } from "lucide-react";
import { api } from "@/convex/_generated/api.js";
import { Badge } from "@/components/ui/badge.tsx";
import { useNow } from "@/hooks/use-now.ts";
import { SET_KIND_LABEL, SITTING_LABEL, dueHint, formatMinutes, setPath, sittingStatus, type SittingStatus } from "@/lib/sets.ts";
import { cn } from "@/lib/utils.ts";

const STATUS_STYLE: Record<SittingStatus, string> = {
  "not-started": "bg-chart-1/15 text-chart-1",
  "in-progress": "bg-chart-2/15 text-chart-2",
  marking: "bg-muted text-muted-foreground",
  marked: "bg-chart-3/15 text-chart-3",
  missed: "bg-destructive/10 text-destructive",
};

/** Sets from the student's teachers, to-do first. Hidden when there are none. */
export default function MySets() {
  const sets = useQuery(api.assignments.mine, {});
  const now = useNow(60_000);
  if (!sets || sets.length === 0) return null;
  const rows = sets.map((s) => ({ ...s, status: sittingStatus(s.sitting, s.dueAt, now) }));
  const todo = (st: SittingStatus) => st === "not-started" || st === "in-progress";
  rows.sort((a, b) => Number(todo(b.status)) - Number(todo(a.status)));

  return (
    <section className="space-y-4 pb-10">
      <h2 className="font-serif text-2xl font-semibold">Assignments and exams</h2>
      <ul className="divide-y rounded-2xl border bg-card">
        {rows.map((s) => {
          const Icon = s.kind === "exam" ? Timer : ClipboardList;
          const score = s.sitting?.marks;
          return (
            <li key={s._id}>
              <Link to={setPath(s._id)} className="flex items-center gap-3 p-4 transition-colors hover:bg-muted/50 cursor-pointer">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary"><Icon className="size-4 text-chart-1" /></span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold">{s.title}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {s.className} / {SET_KIND_LABEL[s.kind]} / {s.questionCount} questions
                    {s.timeLimitMinutes !== null && ` / ${formatMinutes(s.timeLimitMinutes)}`}
                    {s.dueAt && todo(s.status) && ` / ${dueHint(s.dueAt, now)}`}
                  </p>
                </div>
                {score !== null && score !== undefined && <span className="hidden font-mono text-sm sm:inline">{score}/{s.totalMarks}</span>}
                <Badge className={cn("shrink-0", STATUS_STYLE[s.status])}>{SITTING_LABEL[s.status]}</Badge>
                <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
