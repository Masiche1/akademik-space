import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import type { Doc } from "@/convex/_generated/dataModel.d.ts";
import { getQuestion, plainPreview } from "@/content/catalog.ts";
import { questionSecure } from "@/lib/mastery.ts";
import { cn } from "@/lib/utils.ts";

/** The student's latest attempts, newest first. */
export default function RecentAttempts({ rows }: { rows: Doc<"questionProgress">[] }) {
  return (
    <ul className="divide-y rounded-2xl border bg-card">
      {rows.map((r) => {
        const loc = getQuestion(r.questionId);
        if (!loc) return null;
        const secure = questionSecure(r);
        return (
          <li key={r._id}>
            <Link to={`/practice/${r.questionId}`} className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-muted/50 cursor-pointer">
              <span className={cn("flex h-8 w-14 shrink-0 items-center justify-center rounded-md font-mono text-xs font-semibold",
                secure ? "bg-chart-3/15 text-chart-3" : "bg-chart-1/15 text-chart-1")}>
                {r.lastMarks}/{r.totalMarks}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{loc.concept.title}</p>
                <p className="truncate text-xs text-muted-foreground">{loc.course.title} / {plainPreview(loc.question.stem, 70)}</p>
              </div>
              <span className="hidden shrink-0 text-xs text-muted-foreground sm:block">
                {formatDistanceToNow(new Date(r.lastAttemptAt), { addSuffix: true })}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
