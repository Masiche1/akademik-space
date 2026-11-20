import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { getMoreLikeThis, getQuestion, type QuestionLocation } from "@/content/catalog.ts";
import { isTiered } from "@/content/edexcel.ts";
import TierToggle from "@/components/tier-toggle.tsx";
import { matchesTier, useTier } from "@/hooks/use-tier.ts";
import { cn } from "@/lib/utils.ts";
import MasteryMeter from "@/components/mastery-meter.tsx";
import { useCourseProgress } from "@/hooks/use-progress.ts";
import { conceptMastery, questionSecure } from "@/lib/mastery.ts";
import NotFound from "../NotFound.tsx";
import { clampDescription, usePageMeta } from "@/lib/seo.ts";
import QuestionPlayer from "./_components/question-player.tsx";
import MoreLikeThis from "./_components/more-like-this.tsx";

/** Lesson outline: every concept and question in the current lesson. */
function LessonOutline({ loc }: { loc: QuestionLocation }) {
  const [tier] = useTier();
  const tiered = isTiered(loc.course);
  const saved = useCourseProgress(loc.course.id);
  return (
    <nav className="space-y-4">
      <div>
        <p className="font-mono text-xs text-chart-1">Lesson {loc.lesson.code}</p>
        <p className="font-serif text-lg font-semibold leading-tight">{loc.lesson.title}</p>
      </div>
      {tiered && <TierToggle className="w-full [&>button]:flex-1 [&>button]:px-1.5 [&>button]:text-xs" />}
      {loc.lesson.concepts.map((c) => (
        <div key={c.id} className="space-y-1">
          <p className={cn("text-sm font-medium", c.id === loc.concept.id ? "text-foreground" : "text-muted-foreground")}>{c.title}</p>
          {saved && saved.size > 0 && <MasteryMeter mastery={conceptMastery(c, saved)} className="w-full" />}
          <div className="flex gap-1.5">
            {c.questions.map((q, i) => {
              const s = saved?.get(q.id);
              return (
              <Link key={q.id} to={`/practice/${q.id}`} aria-label={`${c.title} question ${i + 1}`}
                className={cn("flex size-8 items-center justify-center rounded-md border font-mono text-xs transition-colors cursor-pointer",
                  q.id === loc.question.id ? "border-primary bg-primary text-primary-foreground" : "hover:border-primary/50",
                  q.id !== loc.question.id && s && (questionSecure(s) ? "border-chart-3/60 bg-chart-3/15" : "border-chart-1/60 bg-chart-1/10"),
                  q.id !== loc.question.id && !matchesTier(q, tier) && "opacity-35")}>
                {i + 1}
                {tiered && q.tier && <sup className="pl-px text-[9px]">{q.tier === "higher" ? "H" : "F"}</sup>}
              </Link>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
}

export default function PracticePage() {
  const { questionId = "" } = useParams();
  const loc = getQuestion(questionId);
  const moreRef = useRef<HTMLDivElement>(null);
  usePageMeta({
    title: loc ? `${loc.concept.title} question: ${loc.course.title}` : "Question not found",
    description: loc ? clampDescription(`Practise ${loc.concept.title.toLowerCase()} for ${loc.course.title} with a full examiner-style markscheme. ${loc.concept.skill}`) : undefined,
    path: `/practice/${questionId}`,
  });
  if (!loc) return <NotFound />;

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[240px_minmax(0,1fr)]">
      <aside className="hidden lg:block">
        <div className="sticky top-24"><LessonOutline loc={loc} /></div>
      </aside>
      <div className="min-w-0 space-y-10">
        <h1 className="sr-only">{loc.concept.title}: {loc.course.title} practice question</h1>
        {/* key resets answer state whenever the question changes */}
        <QuestionPlayer key={loc.question.id} loc={loc}
          onShowMoreLikeThis={() => moreRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })} />
        <div ref={moreRef} className="scroll-mt-24">
          <MoreLikeThis items={getMoreLikeThis(loc)} />
        </div>
        <div className="rounded-xl border bg-card p-4 lg:hidden"><LessonOutline loc={loc} /></div>
      </div>
    </div>
  );
}
