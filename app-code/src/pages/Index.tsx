import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, BookOpenCheck, ClipboardCheck, Compass, Globe, GraduationCap, Landmark, ListTree, PenLine, School, Sparkles, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import MathText from "@/components/math-text.tsx";
import WhoBenefitsSection from "@/components/who-benefits-section.tsx";
import { countQuestions } from "@/content/catalog.ts";
import { VISIBLE_CURRICULA, curriculumPath, type Curriculum } from "@/content/curricula.ts";
import { BRAND } from "@/lib/brand.ts";
import { usePageMeta } from "@/lib/seo.ts";

const CURRICULUM_ICON: Record<Curriculum["id"], LucideIcon> = { us: Landmark, ib: GraduationCap, myp: Compass, edexcel: School, cie: Globe };

const FEATURES = [
  { icon: ListTree, title: "Granular concepts", body: "Every unit is broken into lessons, and every lesson into the specific skills your teacher assesses." },
  { icon: ClipboardCheck, title: "Examiner markschemes", body: "Each solution opens with the formulas, laws and definitions it relies on, then awards method and accuracy marks step by step." },
  { icon: BookOpenCheck, title: "Lesson on demand", body: "Stuck? Open the concept lesson beside the question, with key formulas and a worked example." },
  { icon: PenLine, title: "Sketch pad and tools", body: "Annotate the question, show working on graph paper, and reach for a scientific calculator or formula sheet." },
  { icon: Sparkles, title: "Ariela AI practice", body: "Generate fresh questions just like the one you are working on, with full markschemes." },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Index() {
  usePageMeta({ path: "/" });
  return (
    <div className="relative overflow-hidden">
      {/* Graph-paper atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-16 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:pt-24">
        <div className="space-y-7">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-chart-1" /> Built by Scholars for Scholars!
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08, ease }}
            className="text-balance font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Practice the way <em className="font-normal text-chart-1">examiners</em> mark.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.16, ease }}
            className="max-w-xl text-lg text-muted-foreground">
            Concept-by-concept questions for US Grades 7-12 Math, Science and ELA, IB MYP 1-5 Mathematics and Sciences, plus IB Analysis and Approaches and
            Applications and Interpretation at SL and HL, and Pearson Edexcel Maths, English and Science for Years 8-11. Every answer comes with a
            full markscheme that shows not just what to write, but why it is true.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.24, ease }}
            className="flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <a href="#courses" className="cursor-pointer">Choose a curriculum <ArrowRight className="size-4" /></a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/practice/alg2-3a-rvf-q2" className="cursor-pointer">Try a question</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 24, rotate: 1.5 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: 0.9, delay: 0.2, ease }}
          className="relative rounded-2xl border bg-card p-6 shadow-xl shadow-primary/5">
          <div className="mb-4 flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-mono">Algebra 2 / 3-1 Domain and Range</span>
            <span className="rounded-md bg-accent px-2 py-0.5 font-medium text-accent-foreground">3 marks</span>
          </div>
          <MathText className="text-base" text="Find the domain of $g(x) = \sqrt{12 - 3x}$." />
          <div className="mt-5 space-y-3 rounded-xl bg-muted/60 p-4 text-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Markscheme</p>
            <div className="flex gap-2"><span className="rounded bg-primary/10 px-1.5 text-xs font-medium text-primary">Property</span>
              <MathText text="$\sqrt{u}$ is real only when $u \ge 0$." /></div>
            <div className="flex gap-2"><span className="rounded bg-primary/10 px-1.5 text-xs font-medium text-primary">Law</span>
              <MathText text="Dividing by a negative reverses the inequality." /></div>
            <div className="border-t pt-3">
              <MathText text="$12 - 3x \ge 0 \Rightarrow x \le 4$, so the domain is $(-\infty, 4]$." />
              <p className="pt-1 font-mono text-xs text-chart-1">M1 A1 A1</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section aria-labelledby="features-heading" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <h2 id="features-heading" className="sr-only">Why learners use {BRAND.name}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {FEATURES.map((f, i) => (
          <motion.div key={f.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06, ease }} className="rounded-xl border bg-card p-5">
            <f.icon className="mb-3 size-5 text-chart-1" />
            <h3 className="font-semibold">{f.title}</h3>
            <p className="pt-1 text-sm text-muted-foreground">{f.body}</p>
          </motion.div>
        ))}
        </div>
      </section>

      <section id="courses" className="border-t bg-card/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <p className="font-mono text-xs text-chart-1">{BRAND.slogan}</p>
          <h2 className="pt-2 font-serif text-3xl font-semibold tracking-tight">Choose your curriculum</h2>
          <p className="max-w-2xl pt-2 text-muted-foreground">Each curriculum page lists its subjects, years and levels.</p>
          <div className="grid grid-cols-[minmax(0,1fr)] gap-4 pt-8 md:grid-cols-2 xl:grid-cols-4">
            {VISIBLE_CURRICULA.map((cur, i) => {
              const courses = cur.groups.flatMap((g) => g.courses);
              const Icon = CURRICULUM_ICON[cur.id];
              return (
                <motion.div key={cur.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease }}>
                  <Link to={curriculumPath(cur)}
                    className="group flex h-full min-w-0 flex-col rounded-2xl border bg-background p-6 transition-all hover:-translate-y-0.5 hover:border-chart-1/60 hover:shadow-lg cursor-pointer">
                    <Icon className="size-6 text-chart-1" />
                    <span className="pt-4 font-mono text-xs text-muted-foreground">{cur.eyebrow}</span>
                    <h3 className="pt-1 font-serif text-2xl font-semibold">{cur.title}</h3>
                    <p className="flex-1 pt-2 text-sm text-muted-foreground">{cur.summary}</p>
                    <div className="flex items-center justify-between pt-6 text-sm">
                      <span className="text-muted-foreground">{courses.length} courses, {courses.reduce((n, c) => n + countQuestions(c), 0).toLocaleString()} questions</span>
                      <ArrowRight className="size-4 text-chart-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <WhoBenefitsSection />
    </div>
  );
}
