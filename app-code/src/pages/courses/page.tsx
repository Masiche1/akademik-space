import { Link, useParams } from "react-router-dom";
import { ArrowRight, BookA, ChevronRight, Layers, Target } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import MathText from "@/components/math-text.tsx";
import { firstQuestionId, getCourse } from "@/content/catalog.ts";
import { curriculumForCourse, curriculumPath } from "@/content/curricula.ts";
import { IB_SUBJECT_NAME, ibHasWrittenPapers, paperLabel } from "@/content/ib.ts";
import { isTiered } from "@/content/edexcel.ts";
import TierToggle from "@/components/tier-toggle.tsx";
import { matchesTier, useTier } from "@/hooks/use-tier.ts";
import type { Course, IbPaper, Lesson, Question } from "@/content/types.ts";
import NotFound from "../NotFound.tsx";
import { clampDescription, usePageMeta } from "@/lib/seo.ts";
import MasteryMeter from "@/components/mastery-meter.tsx";
import CourseMasterySummary from "@/components/course-mastery-summary.tsx";
import { useCourseProgress } from "@/hooks/use-progress.ts";
import { conceptMastery, type SavedQuestion } from "@/lib/mastery.ts";

/** IB courses: exam papers covered, and for HL the SL core courses studied alongside. */
function IbPanel({ course }: { course: Course }) {
  const ib = course.ib;
  if (!ib) return null;
  const hasPapers = ibHasWrittenPapers(ib.subject);
  const papers: IbPaper[] = ib.level === "hl" ? ["1", "2", "3"] : ["1", "2"];
  const core = (ib.coreCourseIds ?? []).map(getCourse).filter((c): c is Course => !!c);
  return (
    <div className={`grid gap-4 pt-8${hasPapers ? " md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]" : ""}`}>
      {hasPapers && (
      <div className="rounded-xl border bg-card p-4">
        <p className="pb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Exam papers practised</p>
        <div className="flex flex-wrap gap-2">
          {papers.map((p) => {
            const l = paperLabel(p, ib.subject);
            return (
              <div key={p} className="rounded-lg border bg-background px-3 py-2">
                <p className="font-mono text-sm font-semibold">{l.title}</p>
                <p className="text-xs text-muted-foreground">{l.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
      )}
      {ib.level === "hl" && (
        <div className="rounded-xl border bg-card p-4">
          <p className="flex items-center gap-1.5 pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Layers className="size-3.5" /> Higher level extension
          </p>
          <p className="text-sm text-muted-foreground">
            This course covers the additional higher level content. HL students also study the SL core:
          </p>
          <div className="flex flex-wrap gap-2 pt-3">
            {core.map((c) => (
              <Button key={c.id} size="sm" variant="secondary" asChild>
                <Link to={`/courses/${c.id}`} className="cursor-pointer">{c.title} <ArrowRight className="size-3.5" /></Link>
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function LessonCard({ lesson, include, saved }: { lesson: Lesson; include: (q: Question) => boolean; saved?: ReadonlyMap<string, SavedQuestion> }) {
  const first = lesson.concepts[0] && firstQuestionId(lesson.concepts[0], include);
  return (
    <div className="grid gap-6 rounded-xl border bg-card p-5 lg:grid-cols-[1fr_280px]">
      <div className="min-w-0 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="font-mono text-xs text-chart-1">Lesson {lesson.code}</p>
            <h3 className="font-serif text-xl font-semibold">{lesson.title}</h3>
          </div>
          {first && (
            <Button size="sm" asChild>
              <Link to={`/practice/${first}`} className="cursor-pointer">Practice lesson <ArrowRight className="size-4" /></Link>
            </Button>
          )}
        </div>
        <div className="flex gap-2 rounded-lg bg-muted/60 p-3 text-sm">
          <Target className="mt-0.5 size-4 shrink-0 text-chart-1" />
          <MathText text={lesson.goal} />
        </div>
        <div className="space-y-2">
          {lesson.concepts.map((c) => (
            <Link key={c.id} to={`/practice/${firstQuestionId(c, include) ?? ""}`}
              className="group flex items-center gap-3 rounded-lg border bg-background p-3 transition-colors hover:border-chart-1/60 cursor-pointer">
              <div className="min-w-0 flex-1">
                <p className="font-medium">{c.title}</p>
                <MathText className="text-sm text-muted-foreground" text={c.skill} />
              </div>
              <span className="shrink-0 text-xs text-muted-foreground">{c.questions.filter(include).length} Qs</span>
              {saved && saved.size > 0 && <MasteryMeter mastery={conceptMastery(c, saved)} className="hidden sm:block" />}
              <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-chart-1" />
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {lesson.standards.map((s) => <Badge key={s} variant="secondary" className="font-mono text-[11px]">{s}</Badge>)}
        </div>
      </div>
      <aside className="space-y-2 lg:border-l lg:pl-6">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <BookA className="size-3.5" /> Vocabulary
        </p>
        <dl className="space-y-2 text-sm">
          {lesson.vocabulary.map((v) => (
            <div key={v.term}>
              <dt className="font-medium"><MathText text={v.term} /></dt>
              <dd className="text-muted-foreground"><MathText text={v.definition} /></dd>
            </div>
          ))}
        </dl>
      </aside>
    </div>
  );
}

export default function CoursePage() {
  const { courseId = "" } = useParams();
  const course = getCourse(courseId);
  const [tier] = useTier();
  const saved = useCourseProgress(courseId);
  usePageMeta({
    title: course ? `${course.title} (${course.framework.replace(/^Pearson Edexcel International GCSE/, "Edexcel IGCSE")})` : "Course not found",
    description: course ? clampDescription(course.description) : undefined,
    path: `/courses/${courseId}`,
  });
  if (!course) return <NotFound />;
  const include = (q: Question) => matchesTier(q, tier);
  const curriculum = curriculumForCourse(course.id);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      {curriculum && (
        <nav className="flex items-center gap-1 pb-4 text-xs text-muted-foreground" aria-label="Breadcrumb">
          <Link to={curriculumPath(curriculum)} className="hover:text-foreground cursor-pointer">{curriculum.navLabel}</Link>
          <ChevronRight className="size-3" />
          <span className="text-foreground">{course.title}</span>
        </nav>
      )}
      <p className="font-mono text-xs text-muted-foreground">
        {course.ib ? `${IB_SUBJECT_NAME[course.ib.subject]} ${course.ib.level.toUpperCase()} / ` : ""}{course.grade} / {course.framework}
      </p>
      <h1 className="pt-2 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">{course.title}</h1>
      <p className="max-w-2xl pt-3 text-muted-foreground">{course.description}</p>
      <IbPanel course={course} />
      {saved && saved.size > 0 && <CourseMasterySummary course={course} saved={saved} />}
      {isTiered(course) && (
        <div className="flex flex-wrap items-center gap-3 pt-6">
          <span className="text-sm font-medium">Practise at</span>
          <TierToggle />
          <span className="text-sm text-muted-foreground">Foundation: grades 1-5. Higher: grades 4-9.</span>
        </div>
      )}

      <Accordion type="multiple" defaultValue={[course.units[0]?.id ?? ""]} className="space-y-4 pt-10">
        {course.units.map((unit) => (
          <AccordionItem key={unit.id} value={unit.id} className="rounded-2xl border bg-background px-5 last:border-b">
            <AccordionTrigger className="cursor-pointer py-5 hover:no-underline">
              <div className="flex items-baseline gap-4 text-left">
                <span className="font-serif text-3xl font-semibold text-chart-1">{unit.code}</span>
                <div>
                  <p className="text-lg font-semibold">{unit.title}</p>
                  <p className="text-sm font-normal text-muted-foreground">{unit.description}</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pb-5">
              {unit.lessons.map((l) => <LessonCard key={l.id} lesson={l} include={include} saved={saved} />)}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
