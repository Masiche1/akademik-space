import MathText from "@/components/math-text.tsx";
import ExtractPanel from "@/components/extract-panel.tsx";
import type { Question } from "@/content/types.ts";

/** The extract, stem and numbered parts of a question. */
export default function QuestionBody({ question }: { question: Question }) {
  return (
    <div className="space-y-5">
      {question.extract && <ExtractPanel extract={question.extract} />}
      <MathText className="text-[17px]" text={question.stem} />
      {question.parts && (
        <ol className="space-y-4">
          {question.parts.map((p) => (
            <li key={p.label} className="flex gap-3">
              <span className="shrink-0 pt-0.5 font-serif text-base font-semibold">({p.label})</span>
              <MathText className="min-w-0 flex-1 text-[16px]" text={p.prompt} />
              <span className="shrink-0 pt-1 font-mono text-xs text-muted-foreground">[{p.marks}]</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
