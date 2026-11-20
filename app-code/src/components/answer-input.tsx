import { Check, X } from "lucide-react";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import MathText from "@/components/math-text.tsx";
import type { QuestionResponse } from "@/content/types.ts";
import type { Answer, CheckResult } from "@/lib/grading.ts";
import { cn } from "@/lib/utils.ts";

type Props = {
  response: QuestionResponse;
  answer: Answer | null;
  onChange: (answer: Answer) => void;
  result: CheckResult | null;
  revealed: boolean;
  /** English: a larger essay box with writing-focused guidance. */
  essay?: boolean;
  /** Locks the input without showing which answer is correct (closed sets with solutions withheld). */
  readOnly?: boolean;
  /** Replaces the self-assessment hint under written answers. */
  openHint?: string;
};

export default function AnswerInput({ response, answer, onChange, result, revealed, essay = false, readOnly = false, openHint }: Props) {
  const marked = result !== null;
  const locked = marked || readOnly;

  if (response.type === "mcq") {
    const selected = answer?.type === "mcq" ? answer.choiceId : null;
    return (
      <div className="grid gap-2" role="radiogroup">
        {response.choices.map((c) => {
          const isSelected = selected === c.id;
          const isCorrect = c.id === response.correctChoiceId;
          const showCorrect = (marked || revealed) && isCorrect;
          const showWrong = marked && isSelected && !isCorrect;
          return (
            <button key={c.id} type="button" role="radio" aria-checked={isSelected} disabled={locked}
              onClick={() => onChange({ type: "mcq", choiceId: c.id })}
              className={cn(
                "flex items-center gap-3 rounded-xl border bg-background p-3 text-left transition-colors cursor-pointer disabled:cursor-default",
                !locked && "hover:border-primary/50",
                isSelected && !marked && "border-primary ring-2 ring-primary/20",
                showCorrect && "border-chart-3 bg-chart-3/10",
                showWrong && "border-destructive bg-destructive/10",
              )}>
              <span className={cn("flex size-7 shrink-0 items-center justify-center rounded-full border font-mono text-sm uppercase",
                isSelected && "border-primary bg-primary text-primary-foreground",
                showCorrect && "border-chart-3 bg-chart-3 text-white",
                showWrong && "border-destructive bg-destructive text-white")}>
                {showCorrect ? <Check className="size-4" /> : showWrong ? <X className="size-4" /> : c.id}
              </span>
              <MathText text={c.text} className="min-w-0 flex-1" />
            </button>
          );
        })}
      </div>
    );
  }

  if (response.type === "numeric") {
    const values = answer?.type === "numeric" ? answer.values : response.parts.map(() => "");
    return (
      <div className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          {response.parts.map((p, i) => {
            const partOk = result?.partResults?.[i];
            return (
              <label key={p.label} className="space-y-1.5">
                <MathText className="text-sm font-medium" text={p.label} />
                <div className="flex items-center gap-2">
                  <Input inputMode="decimal" placeholder="e.g. -3 or 3/4" value={values[i] ?? ""} disabled={locked}
                    onChange={(e) => {
                      const next = [...values];
                      next[i] = e.target.value;
                      onChange({ type: "numeric", values: next });
                    }}
                    className={cn("font-mono", partOk === true && "border-chart-3", partOk === false && "border-destructive")} />
                  {p.unit && <span className="text-sm text-muted-foreground">{p.unit}</span>}
                  {partOk === true && <Check className="size-4 shrink-0 text-chart-3" />}
                  {partOk === false && <X className="size-4 shrink-0 text-destructive" />}
                </div>
              </label>
            );
          })}
        </div>
        <p className="text-xs text-muted-foreground">
          Enter integers, decimals or fractions like 3/4.{response.unordered ? " Values may be entered in any order." : ""}
        </p>
      </div>
    );
  }

  const text = answer?.type === "open" ? answer.text : "";
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  return (
    <div className="space-y-2">
      <Textarea rows={essay ? 12 : 6} disabled={locked}
        className={cn(essay && "min-h-64 font-serif text-[16px] leading-relaxed")}
        placeholder={essay
          ? "Write your answer here. Make a point, support it with a short quotation, then explain its effect."
          : "Write your full working or proof here, then submit to compare it with the solution."}
        value={text} onChange={(e) => onChange({ type: "open", text: e.target.value })} />
      <p className="flex flex-wrap justify-between gap-2 text-xs text-muted-foreground">
        <span>{openHint ?? `Written response: you will self-assess against the ${essay ? "level descriptors and indicative content" : "solution and markscheme"}.`}</span>
        {essay && <span className="font-mono">{words} words</span>}
      </p>
    </div>
  );
}
