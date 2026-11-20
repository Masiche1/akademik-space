import { Link } from "react-router-dom";
import { useQuery } from "convex/react";
import { ClipboardList, Plus, Timer } from "lucide-react";
import { api } from "@/convex/_generated/api.js";
import type { Id } from "@/convex/_generated/dataModel.d.ts";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { SET_KIND_LABEL, formatDue, formatMinutes, newSetPath, setResultsPath } from "@/lib/sets.ts";

type Props = { classId: Id<"classes">; canEdit: boolean; studentCount: number };

/** Assignments and exams set for a class, with hand-in counts. */
export default function ClassSets({ classId, canEdit, studentCount }: Props) {
  const sets = useQuery(api.assignments.forClass, { classId });
  return (
    <section className="space-y-3 pb-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-serif text-2xl font-semibold">Assignments and exams</h2>
        {canEdit && (
          <Button size="sm" asChild><Link to={newSetPath(classId)} className="cursor-pointer"><Plus className="size-4" /> New set</Link></Button>
        )}
      </div>
      {sets === undefined ? (
        <div className="space-y-2">{Array.from({ length: 2 }).map((_, i) => <Skeleton key={i} className="h-16" />)}</div>
      ) : sets.length === 0 ? (
        <p className="rounded-2xl border border-dashed p-5 text-sm text-muted-foreground">
          No sets yet. Build an assignment or a timed exam from questions in any course.
        </p>
      ) : (
        <ul className="divide-y rounded-2xl border bg-card">
          {sets.map((s) => {
            const Icon = s.kind === "exam" ? Timer : ClipboardList;
            return (
              <li key={s._id}>
                <Link to={setResultsPath(s._id)} className="flex flex-wrap items-center gap-3 p-4 transition-colors hover:bg-muted/50 cursor-pointer">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary"><Icon className="size-4 text-chart-1" /></span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold">{s.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {SET_KIND_LABEL[s.kind]} / {s.questionCount} questions / {s.totalMarks} marks
                      {s.timeLimitMinutes !== null && ` / ${formatMinutes(s.timeLimitMinutes)}`}
                      {s.dueAt && ` / due ${formatDue(s.dueAt)}`}
                    </p>
                  </div>
                  <Badge variant="secondary" className="font-mono">{s.submittedCount}/{studentCount} handed in</Badge>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
