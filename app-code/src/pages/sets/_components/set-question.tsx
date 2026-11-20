import { useState } from "react";
import { useMutation } from "convex/react";
import { CheckCircle2, Clock, CloudCheck, MessageSquare, Save } from "lucide-react";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api.js";
import type { Id } from "@/convex/_generated/dataModel.d.ts";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Spinner } from "@/components/ui/spinner.tsx";
import AnswerInput from "@/components/answer-input.tsx";
import MarkschemePanel from "@/components/markscheme-panel.tsx";
import QuestionBody from "@/components/question-body.tsx";
import { aoHelpFor, isEnglish } from "@/content/edexcel.ts";
import type { QuestionLocation } from "@/content/catalog.ts";
import { errorMessage } from "@/lib/errors.ts";
import { isAnswerComplete, type Answer } from "@/lib/grading.ts";
import { cn } from "@/lib/utils.ts";

type Saved = { answer: Answer; marks: number | null; feedback: string | null } | undefined;

type Props = {
  index: number;
  loc: QuestionLocation;
  submissionId: Id<"assignmentSubmissions">;
  saved: Saved;
  closed: boolean;
  showSolutions: boolean;
};

const sameAnswer = (a: Answer | null, b: Answer | undefined) => JSON.stringify(a) === JSON.stringify(b ?? null);

/** One question in a set: answer and save while open, then the mark and feedback once closed. Never reveals solutions while open. */
export default function SetQuestion({ index, loc, submissionId, saved, closed, showSolutions }: Props) {
  const { question, course } = loc;
  const english = isEnglish(course);
  const saveAnswer = useMutation(api.assignments.saveAnswer);
  const [draft, setDraft] = useState<Answer | null>(saved?.answer ?? null);
  const [saving, setSaving] = useState(false);
  const unsaved = !sameAnswer(draft, saved?.answer);

  const save = async () => {
    if (!draft) return;
    setSaving(true);
    try {
      await saveAnswer({ submissionId, questionId: question.id, answer: draft });
    } catch (e) {
      toast.error(errorMessage(e, "Your answer was not saved. Try again."));
    } finally {
      setSaving(false);
    }
  };

  return (
    <article id={`q-${index + 1}`} className="scroll-mt-28 space-y-5 rounded-2xl border bg-card p-5 sm:p-7">
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-serif text-xl font-semibold">Question {index + 1}</span>
        <span className="text-sm text-muted-foreground">{loc.concept.title}</span>
        <span className="ml-auto rounded-md bg-accent px-2 py-0.5 font-mono text-xs font-semibold text-accent-foreground">[{question.totalMarks} marks]</span>
      </div>
      <QuestionBody question={question} />
      <AnswerInput response={question.response} answer={closed ? saved?.answer ?? null : draft} onChange={setDraft}
        result={null} revealed={closed && showSolutions} readOnly={closed} essay={english}
        openHint={closed ? "Your written answer." : "Written answer: your teacher marks this after you hand in."} />

      {closed ? (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            {!saved ? <Badge variant="secondary">Not answered: 0/{question.totalMarks}</Badge>
              : saved.marks === null ? <Badge className="gap-1 bg-chart-1/15 text-chart-1"><Clock className="size-3" /> Waiting for your teacher to mark</Badge>
              : <Badge className={cn("gap-1", saved.marks === question.totalMarks ? "bg-chart-3/15 text-chart-3" : "bg-secondary text-secondary-foreground")}>
                  <CheckCircle2 className="size-3" /> {saved.marks}/{question.totalMarks} marks
                </Badge>}
          </div>
          {saved?.feedback && (
            <p className="flex gap-2 rounded-xl bg-muted/60 p-3 text-sm">
              <MessageSquare className="mt-0.5 size-4 shrink-0 text-primary" /> <span><span className="font-semibold">Teacher feedback:</span> {saved.feedback}</span>
            </p>
          )}
          {showSolutions && (
            <div className="border-t pt-5">
              <h3 className="pb-4 font-serif text-lg font-semibold">{english ? "Markscheme and model answer" : "Solution and markscheme"}</h3>
              <MarkschemePanel markscheme={question.markscheme} totalMarks={question.totalMarks} aoHelp={aoHelpFor(course)} />
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-wrap items-center gap-3 border-t pt-4">
          <Button size="sm" onClick={save} disabled={saving || !unsaved || !isAnswerComplete(question.response, draft)}>
            {saving ? <Spinner /> : <Save className="size-4" />} Save answer
          </Button>
          {saved && !unsaved && <span className="flex items-center gap-1 text-sm text-chart-3"><CloudCheck className="size-4" /> Saved</span>}
          {saved && unsaved && <span className="text-sm text-muted-foreground">Unsaved changes</span>}
        </div>
      )}
    </article>
  );
}
