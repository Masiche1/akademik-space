import { AlertTriangle, CheckCircle2, GraduationCap, Quote } from "lucide-react";
import MathText, { DisplayMath } from "@/components/math-text.tsx";
import type { MarkLevel, Markscheme, MarkPrinciple } from "@/content/types.ts";

const KIND_LABEL: Record<MarkPrinciple["kind"], string> = {
  formula: "Formula",
  law: "Law",
  theorem: "Theorem",
  definition: "Definition",
  principle: "Principle",
  property: "Property",
  technique: "Technique",
  convention: "Convention",
  context: "Context",
  skill: "Exam skill",
  method: "Method",
  comparison: "Comparison",
};

const MARK_CODE_HELP = "M = method, A = accuracy, B = independent, R = reasoning";

type Props = {
  markscheme: Markscheme;
  totalMarks: number;
  /** English courses: assessment objective key shown instead of the maths mark codes. */
  aoHelp?: string;
};

function LevelTable({ levels }: { levels: MarkLevel[] }) {
  return (
    <div className="overflow-hidden rounded-lg border">
      {levels.map((l, i) => (
        <div key={`${l.part ?? ""}-${l.level}`} className={i > 0 ? "grid grid-cols-[6.5rem_minmax(0,1fr)] border-t" : "grid grid-cols-[6.5rem_minmax(0,1fr)]"}>
          <div className="bg-muted/60 p-3">
            <p className="text-sm font-semibold">{l.level}</p>
            <p className="font-mono text-xs text-muted-foreground">{l.marks} marks</p>
          </div>
          <MathText className="p-3 text-sm" text={l.descriptor} />
        </div>
      ))}
    </div>
  );
}

export default function MarkschemePanel({ markscheme, totalMarks, aoHelp }: Props) {
  const english = aoHelp !== undefined;
  const levels = markscheme.levels ?? [];
  const levelsFor = (part?: string) => levels.filter((l) => l.part === part);
  const unpartedLevels = levelsFor(undefined);

  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {english ? "Techniques, conventions and skills assessed" : "Formulas, laws and principles used"}
        </h3>
        <div className="grid gap-2 sm:grid-cols-2">
          {markscheme.principles.map((p) => (
            <div key={p.name} className="rounded-lg border bg-background p-3">
              <div className="flex items-center gap-2 pb-1">
                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[11px] font-medium text-primary">{KIND_LABEL[p.kind]}</span>
                <span className="text-sm font-semibold">{p.name}</span>
              </div>
              <MathText className="text-sm text-muted-foreground" text={p.statement} />
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {english ? "Indicative content and marks" : "Working and mark allocation"}
          </h3>
          <span className="text-[11px] text-muted-foreground">{aoHelp ?? MARK_CODE_HELP}</span>
        </div>
        <ol className="space-y-3">
          {markscheme.steps.map((s, i) => {
            const newPart = s.part && s.part !== markscheme.steps[i - 1]?.part;
            const partEnds = s.part && s.part !== markscheme.steps[i + 1]?.part;
            const partLevels = s.part ? levelsFor(s.part) : [];
            return (
              <li key={i} className="space-y-3">
                {newPart && <p className="pt-2 font-serif text-base font-semibold">Part ({s.part})</p>}
                <div className="flex gap-3 rounded-lg border bg-background p-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-muted font-mono text-xs">{i + 1}</span>
                  <div className="min-w-0 flex-1 space-y-2">
                    <MathText className="text-sm" text={s.reasoning} />
                    {s.evidence && (
                      <blockquote className="flex gap-2 border-l-2 border-chart-1/60 pl-3 font-serif text-sm italic text-muted-foreground">
                        <Quote className="mt-0.5 size-3.5 shrink-0 text-chart-1" />
                        <span>{s.evidence}</span>
                      </blockquote>
                    )}
                    {s.working && <DisplayMath tex={s.working} className="text-sm" />}
                  </div>
                  <span className="shrink-0 self-start rounded-md bg-accent px-2 py-0.5 font-mono text-xs font-semibold text-accent-foreground">
                    {english ? `${s.markCode} [${s.marks}]` : `${s.markCode}${s.marks}`}
                  </span>
                </div>
                {partEnds && partLevels.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Part ({s.part}) level descriptors</p>
                    <LevelTable levels={partLevels} />
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </section>

      {unpartedLevels.length > 0 && (
        <section className="space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Level descriptors</h3>
          <p className="text-sm text-muted-foreground">
            Examiners mark extended answers as a whole: find the level that best fits, then the mark within it.
          </p>
          <LevelTable levels={unpartedLevels} />
        </section>
      )}

      <section className="rounded-lg border-2 border-chart-3/40 bg-chart-3/5 p-4">
        <p className="flex items-center gap-2 pb-1 text-sm font-semibold">
          <CheckCircle2 className="size-4 text-chart-3" /> {english ? "Model answer" : "Final answer"}
          <span className="ml-auto font-mono text-xs text-muted-foreground">[{totalMarks} marks]</span>
        </p>
        <MathText text={markscheme.finalAnswer} />
      </section>

      {markscheme.commonErrors && markscheme.commonErrors.length > 0 && (
        <section className="space-y-2">
          <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <AlertTriangle className="size-3.5 text-chart-1" /> Common errors
          </h3>
          <ul className="space-y-1.5 text-sm">
            {markscheme.commonErrors.map((e) => (
              <li key={e} className="flex gap-2"><span className="pt-2"><span className="block size-1.5 rounded-full bg-chart-1" /></span><MathText text={e} /></li>
            ))}
          </ul>
        </section>
      )}

      {markscheme.examinerNote && (
        <section className="flex gap-3 rounded-lg bg-muted/60 p-3 text-sm">
          <GraduationCap className="mt-0.5 size-4 shrink-0 text-primary" />
          <div><p className="font-semibold">Examiner note</p><MathText className="text-muted-foreground" text={markscheme.examinerNote} /></div>
        </section>
      )}
    </div>
  );
}
