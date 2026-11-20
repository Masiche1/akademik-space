import { MASTERY_LABEL, MASTERY_STYLE, courseMastery, type MasteryLevel, type SavedQuestion } from "@/lib/mastery.ts";
import type { Course } from "@/content/types.ts";
import { cn } from "@/lib/utils.ts";

const ORDER: MasteryLevel[] = ["secure", "developing", "learning", "not-started"];

/** Stacked bar of how many concepts in a course sit at each mastery level. */
export default function CourseMasterySummary({ course, saved, compact = false }: {
  course: Course;
  saved: ReadonlyMap<string, SavedQuestion>;
  compact?: boolean;
}) {
  const counts = courseMastery(course, saved);
  const total = ORDER.reduce((s, l) => s + counts[l], 0);
  return (
    <div className={cn(!compact && "mt-8 rounded-xl border bg-card p-4")}>
      {!compact && (
        <p className="pb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Your concept mastery</p>
      )}
      <div className="flex h-2.5 overflow-hidden rounded-full bg-muted">
        {ORDER.filter((l) => l !== "not-started").map((l) => (
          <div key={l} className={MASTERY_STYLE[l].bar} style={{ width: `${(counts[l] / Math.max(total, 1)) * 100}%` }} />
        ))}
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1 pt-2.5">
        {ORDER.map((l) => (
          <span key={l} className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className={cn("size-2 rounded-full", MASTERY_STYLE[l].bar)} />
            <span className="font-mono font-semibold text-foreground">{counts[l]}</span> {MASTERY_LABEL[l]}
          </span>
        ))}
      </div>
    </div>
  );
}
