import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "convex/react";
import { format } from "date-fns";
import { ClipboardList, Eye, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api.js";
import type { Id } from "@/convex/_generated/dataModel.d.ts";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Switch } from "@/components/ui/switch.tsx";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.tsx";
import { errorMessage } from "@/lib/errors.ts";
import { useNow } from "@/hooks/use-now.ts";
import { markPercent } from "@/lib/mastery.ts";
import { SET_KIND_LABEL, SITTING_LABEL, formatDue, formatMinutes, sittingStatus, type SittingStatus } from "@/lib/sets.ts";
import { cn } from "@/lib/utils.ts";
import TeachGate, { PortalSkeleton } from "../_components/teach-gate.tsx";
import TeachCrumbs from "../_components/teach-crumbs.tsx";
import { classPath } from "../_lib/teach.ts";
import SubmissionSheet from "./_components/submission-sheet.tsx";
import QuestionBreakdown from "./_components/question-breakdown.tsx";

const STATUS_STYLE: Record<SittingStatus, string> = {
  "not-started": "bg-muted text-muted-foreground",
  "in-progress": "bg-chart-2/15 text-chart-2",
  marking: "bg-chart-1/15 text-chart-1",
  marked: "bg-chart-3/15 text-chart-3",
  missed: "bg-destructive/10 text-destructive",
};

function ResultsView({ assignmentId }: { assignmentId: string }) {
  const data = useQuery(api.assignments.results, { assignmentId });
  const release = useMutation(api.assignments.setSolutionsReleased);
  const remove = useMutation(api.assignments.remove);
  const navigate = useNavigate();
  const [open, setOpen] = useState<Id<"assignmentSubmissions"> | null>(null);
  const clock = useNow(60_000);

  if (data === undefined) return <PortalSkeleton />;
  if (data === null) {
    return (
      <Empty className="rounded-2xl border bg-card">
        <EmptyHeader>
          <EmptyMedia variant="icon"><ClipboardList /></EmptyMedia>
          <EmptyTitle>Set not found</EmptyTitle>
          <EmptyDescription>It may have been deleted, or it belongs to another teacher's class.</EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }

  const now = clock;
  const handedIn = data.students.filter((s) => s.submission?.closed);
  const toMark = handedIn.reduce((n, s) => n + (s.submission?.pendingCount ?? 0), 0);
  const average = handedIn.length > 0
    ? Math.round(handedIn.reduce((n, s) => n + markPercent(s.submission?.marks ?? 0, data.totalMarks), 0) / handedIn.length)
    : null;
  const stats = [
    { label: "Handed in", value: `${handedIn.length}/${data.students.length}` },
    { label: "Average so far", value: average === null ? "-" : `${average}%` },
    { label: "Written answers to mark", value: toMark },
  ];

  const onRelease = async (released: boolean) => {
    try {
      await release({ assignmentId: data._id, released });
      toast.success(released ? "Solutions released to students who have handed in" : "Solutions hidden again");
    } catch (e) {
      toast.error(errorMessage(e, "Could not update the set"));
    }
  };

  const onDelete = async () => {
    try {
      await remove({ assignmentId: data._id });
      toast.success(`${data.title} deleted`);
      void navigate(classPath(data.classId));
    } catch (e) {
      toast.error(errorMessage(e, "Could not delete the set"));
    }
  };

  return (
    <>
      <TeachCrumbs items={[{ label: data.className, to: classPath(data.classId) }, { label: data.title }]} />
      <div className="flex flex-wrap items-end gap-4 pb-8">
        <div className="min-w-0 flex-1">
          <Badge variant="secondary" className="mb-2">{SET_KIND_LABEL[data.kind]}</Badge>
          <h1 className="font-serif text-4xl font-semibold tracking-tight">{data.title}</h1>
          <p className="pt-2 text-muted-foreground">
            {data.questionCount} questions / {data.totalMarks} marks
            {data.timeLimitMinutes !== null && ` / ${formatMinutes(data.timeLimitMinutes)}`}
            {data.dueAt ? ` / due ${formatDue(data.dueAt)}` : " / no due date"}
          </p>
        </div>
        {data.canEdit && (
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Switch id="release" checked={data.solutionsReleased} onCheckedChange={onRelease} className="cursor-pointer" />
              <Label htmlFor="release" className="cursor-pointer"><Eye className="size-4" /> Release solutions</Label>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive"><Trash2 className="size-4" /> Delete</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete {data.title}?</AlertDialogTitle>
                  <AlertDialogDescription>Every student's answers to this set are deleted too. Marks already added to their progress stay.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={onDelete}>Delete set</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        )}
      </div>

      {data.instructions && <p className="mb-8 whitespace-pre-line rounded-2xl border bg-card p-4 text-sm">{data.instructions}</p>}

      <div className="grid gap-4 pb-8 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border bg-card p-5">
            <p className="font-serif text-3xl font-semibold">{s.value}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      {data.students.length === 0 ? (
        <p className="rounded-2xl border border-dashed p-5 text-sm text-muted-foreground">This class has no students yet.</p>
      ) : (
        <div className="overflow-x-auto rounded-2xl border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Answered</TableHead>
                <TableHead className="text-right">Score</TableHead>
                <TableHead>Handed in</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.students.map((s) => {
                const sub = s.submission;
                const status = sittingStatus(sub, data.dueAt, now);
                return (
                  <TableRow key={s.userId} onClick={sub ? () => setOpen(sub._id) : undefined}
                    className={cn(sub && "cursor-pointer")}>
                    <TableCell className="font-medium">{s.name}</TableCell>
                    <TableCell><Badge className={STATUS_STYLE[status]}>{SITTING_LABEL[status]}</Badge></TableCell>
                    <TableCell className="text-right font-mono text-sm">{sub ? `${sub.answeredCount}/${data.questionCount}` : "-"}</TableCell>
                    <TableCell className="text-right font-mono text-sm">
                      {sub?.closed ? `${sub.marks}/${data.totalMarks}` : "-"}
                      {sub?.closed && <span className="pl-2 text-muted-foreground">{markPercent(sub.marks, data.totalMarks)}%</span>}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">{sub?.submittedAt ? format(new Date(sub.submittedAt), "d MMM, HH:mm") : sub?.closed ? "Time ran out" : "-"}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      )}
      <p className="pt-3 text-xs text-muted-foreground">Open a row to see that student's answers and mark written responses.</p>

      <section className="space-y-3 pt-10">
        <h2 className="font-serif text-2xl font-semibold">Question by question</h2>
        <QuestionBreakdown assignmentId={data._id} />
      </section>

      <SubmissionSheet submissionId={open} canEdit={data.canEdit} questions={data.questions} onClose={() => setOpen(null)} />
    </>
  );
}

export default function SetResultsPage() {
  const { assignmentId = "" } = useParams();
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <TeachGate><ResultsView assignmentId={assignmentId} /></TeachGate>
    </div>
  );
}
