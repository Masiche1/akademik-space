import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Authenticated, Unauthenticated } from "convex/react";
import { ArrowRight, Building2, CheckCircle2, GraduationCap, School, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { BRAND } from "@/lib/brand.ts";

const AUDIENCES = [
  { icon: UserRound, title: "Independent learners", body: "Practise any course on your own and track your mastery." },
  { icon: GraduationCap, title: "Tutors and their students", body: "Join with your tutor's enrolment code to get set work." },
  { icon: School, title: "Schools", body: "Classes, assignments and exams set by your teachers." },
  { icon: Building2, title: "Districts", body: "District-wide access for every school you oversee." },
];

const PROMISES = ["Free to start", "Examiner-style markschemes", "Progress saved across devices"];

const ease = [0.22, 1, 0.36, 1] as const;

/** Home page audience section followed by the sign-up call to action. */
export default function WhoBenefitsSection() {
  return (
    <section aria-labelledby="who-benefits-heading" className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <p className="font-mono text-xs text-chart-1">One account for every way you learn</p>
        <h2 id="who-benefits-heading" className="pt-2 font-serif text-3xl font-semibold tracking-tight">Who benefits?</h2>
        <div className="grid gap-4 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCES.map((a, i) => (
            <motion.div key={a.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease }} className="rounded-xl border bg-card p-5">
              <a.icon className="mb-3 size-5 text-chart-1" />
              <h3 className="font-semibold">{a.title}</h3>
              <p className="pt-1 text-sm text-muted-foreground">{a.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}
          className="relative mt-12 overflow-hidden rounded-3xl border border-[oklch(0.86_0.03_80)] bg-[oklch(0.95_0.03_85)] px-6 py-12 text-[oklch(0.22_0.04_265)] shadow-xl shadow-primary/5 sm:px-12">
          {/* Cream panel stays cream in both modes, so text colours are fixed rather than theme-driven */}
          <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-[oklch(0.78_0.14_60)]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 size-72 rounded-full bg-[oklch(0.33_0.11_265)]/10 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                Start practising the way examiners mark.
              </h2>
              <p className="max-w-xl pt-3 text-[oklch(0.42_0.03_265)]">
                Create your free {BRAND.name} account to save your progress, join your classes and get set work from your teachers.
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-5 text-sm">
                {PROMISES.map((p) => (
                  <li key={p} className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[oklch(0.6_0.17_50)]" />{p}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
              <Unauthenticated>
                <Button size="lg" asChild className="bg-[oklch(0.33_0.11_265)] text-[oklch(0.98_0.01_85)] hover:bg-[oklch(0.28_0.1_265)] lg:w-64">
                  <Link to="/sign-in" className="cursor-pointer">Create your free account <ArrowRight className="size-4" /></Link>
                </Button>
              </Unauthenticated>
              <Authenticated>
                <Button size="lg" asChild className="bg-[oklch(0.33_0.11_265)] text-[oklch(0.98_0.01_85)] hover:bg-[oklch(0.28_0.1_265)] lg:w-64">
                  <Link to="/progress" className="cursor-pointer">Continue learning <ArrowRight className="size-4" /></Link>
                </Button>
              </Authenticated>
              <Button size="lg" variant="ghost" asChild className="text-[oklch(0.22_0.04_265)] hover:bg-[oklch(0.33_0.11_265)]/10 hover:text-[oklch(0.22_0.04_265)] lg:w-64">
                <a href="#courses" className="cursor-pointer">Browse curricula</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
