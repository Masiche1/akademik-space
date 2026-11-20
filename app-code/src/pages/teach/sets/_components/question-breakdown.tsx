import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import type { Id } from "@/convex/_generated/dataModel.d.ts";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { getQuestion, plainPreview } from "@/content/catalog.ts";
import { MASTERY_STYLE, markPercent, masteryLevel } from "@/lib/mastery.ts";
import { cn } from "@/lib/utils.ts";

/** Which questions the class found hardest, across every student who has handed in. */
export default function QuestionBreakdown({ assignmentId }: { assignmentId: Id<"assignments"> }) {
  const data = useQuery(api.teachReports.setQuestions, { assignmentId });
  if (data === null) return null;
  if (data === undefined) return <Skeleton className="h-48" />;
  if (data.sittings === 0) {
    return <p className="rounded-2xl border border-dashed p-5 text-sm text-muted-foreground">The question breakdown appears once students hand in.</p>;
  }
  return (
    <ol className="divide-y rounded-2xl border bg-card">
      {data.questions.map((q, i) => {
        const loc = getQuestion(q.questionId);
        // Students who handed in without answering count as zero.
        const pct = markPercent(q.marksEarned, q.marked > 0 ? q.totalMarks * (q.marked + (data.sittings - q.answered)) : 0);
        const style = MASTERY_STYLE[masteryLevel(pct, q.marked)];
        return (
          <li key={q.questionId} className="grid grid-cols-[2rem_minmax(0,1fr)_auto] items-center gap-3 p-4">
            <span className="font-mono text-sm text-muted-foreground">Q{i + 1}</span>
            <div className="min-w-0 space-y-1.5">
              <p className="truncate text-sm">{loc ? plainPreview(loc.question.stem, 90) : "Question removed"}</p>
              <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                <div className={cn("h-full rounded-full", style.bar)} style={{ width: `${pct}%` }} />
              </div>
              <p className="text-xs text-muted-foreground">
                {q.fullMarks} of {data.sittings} full marks / {data.sittings - q.answered} left blank
                {q.pending > 0 && ` / ${q.pending} to mark`}
              </p>
            </div>
            <span className={cn("font-mono text-sm font-semibold", q.marked > 0 ? style.text : "text-muted-foreground")}>{q.marked > 0 ? `${pct}%` : "-"}</span>
          </li>
        );
      })}
    </ol>
  );
}
