import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import CourseMasterySummary from "@/components/course-mastery-summary.tsx";
import { countQuestions, getCourse } from "@/content/catalog.ts";
import { conceptMastery, markPercent, type SavedQuestion } from "@/lib/mastery.ts";

export type CourseTotals = {
  courseId: string;
  questionsAttempted: number;
  questionsSecure: number;
  marksEarned: number;
  marksAvailable: number;
};

/** One practised course: totals, concept mastery, and optionally where to go next. */
export default function CourseProgressCard({ row, saved, showNext = false }: {
  row: CourseTotals;
  /** Saved questions for concept mastery; undefined while loading. */
  saved: ReadonlyMap<string, SavedQuestion> | undefined;
  showNext?: boolean;
}) {
  const course = getCourse(row.courseId);
  if (!course) return null;
  const total = countQuestions(course);

  // Weakest attempted concept first, so the student knows where to go next.
  const weakest = showNext && saved
    ? course.units
        .flatMap((u) => u.lessons.flatMap((l) => l.concepts))
        .map((concept) => ({ concept, m: conceptMastery(concept, saved) }))
        .filter(({ m }) => m.attempted > 0 && m.level !== "secure")
        .sort((a, b) => a.m.percent - b.m.percent)[0]
    : undefined;
  const nextQuestion = weakest && (weakest.concept.questions.find((q) => !saved?.has(q.id)) ?? weakest.concept.questions[0]);

  return (
    <article className="flex min-w-0 flex-col gap-4 rounded-2xl border bg-card p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-mono text-xs text-muted-foreground">{course.grade} / {course.framework}</p>
          <h3 className="font-serif text-xl font-semibold leading-tight">{course.title}</h3>
        </div>
        <Button size="sm" variant="secondary" asChild>
          <Link to={`/courses/${course.id}`} className="cursor-pointer">Course <ArrowRight className="size-3.5" /></Link>
        </Button>
      </div>
      <dl className="grid grid-cols-3 gap-2 text-center">
        {[
          { label: "Attempted", value: `${row.questionsAttempted}/${total}` },
          { label: "Secure", value: row.questionsSecure },
          { label: "Best marks", value: `${markPercent(row.marksEarned, row.marksAvailable)}%` },
        ].map((s) => (
          <div key={s.label} className="rounded-lg bg-muted/60 px-2 py-2.5">
            <dd className="font-mono text-lg font-semibold">{s.value}</dd>
            <dt className="text-xs text-muted-foreground">{s.label}</dt>
          </div>
        ))}
      </dl>
      {saved ? <CourseMasterySummary course={course} saved={saved} compact /> : <Skeleton className="h-10 w-full" />}
      {weakest && nextQuestion && (
        <Link to={`/practice/${nextQuestion.id}`}
          className="group mt-auto flex items-center gap-3 rounded-lg border bg-background p-3 transition-colors hover:border-chart-1/60 cursor-pointer">
          <div className="min-w-0 flex-1">
            <p className="text-xs text-muted-foreground">Revisit next</p>
            <p className="truncate font-medium">{weakest.concept.title}</p>
          </div>
          <span className="font-mono text-xs text-muted-foreground">{weakest.m.percent}%</span>
          <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </article>
  );
}
