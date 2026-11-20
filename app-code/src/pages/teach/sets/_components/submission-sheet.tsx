import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { Check, CheckCircle2, Clock, Save } from "lucide-react";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api.js";
import type { Id } from "@/convex/_generated/dataModel.d.ts";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { Spinner } from "@/components/ui/spinner.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion.tsx";
import AnswerInput from "@/components/answer-input.tsx";
import MarkschemePanel from "@/components/markscheme-panel.tsx";
import QuestionBody from "@/components/question-body.tsx";
import { getQuestion } from "@/content/catalog.ts";
import { errorMessage } from "@/lib/errors.ts";
import { cn } from "@/lib/utils.ts";

type Props = {
  submissionId: Id<"assignmentSubmissions"> | null;
  canEdit: boolean;
  questions: { questionId: string; totalMarks: number; teacherMarked: boolean }[];
  onClose: () => void;
};

function MarkForm({ submissionId, questionId, totalMarks, current, feedback }: {
  submissionId: Id<"assignmentSubmissions">; questionId: string; totalMarks: number; current: number | null; feedback: string | null;
}) {
  const mark = useMutation(api.assignments.markWritten);
  const [marks, setMarks] = useState<number | null>(current);
  const [note, setNote] = useState(feedback ?? "");
  const [saving, setSaving] = useState(false);
  const dirty = marks !== current || note.trim() !== (feedback ?? "");

  const save = async () => {
    if (marks === null) return;
    setSaving(true);
    try {
      await mark({ submissionId, questionId, marks, feedback: note.trim() || undefined });
      toast.success("Mark saved");
    } catch (e) {
      toast.error(errorMessage(e, "Could not save the mark"));
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-3 rounded-xl border bg-accent/30 p-4">
      <p className="text-sm font-semibold">Award marks</p>
      <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label="Marks awarded">
        {Array.from({ length: totalMarks + 1 }, (_, m) => (
          <button key={m} type="button" role="radio" aria-checked={marks === m} onClick={() => setMarks(m)}
            className={cn("flex size-9 items-center justify-center rounded-md border font-mono text-sm transition-colors cursor-pointer",
              marks === m ? "border-primary bg-primary text-primary-foreground" : "bg-background hover:border-primary/50")}>
            {m}
          </button>
        ))}
      </div>
      <Textarea rows={2} placeholder="Feedback for the student (optional)" value={note} onChange={(e) => setNote(e.target.value)} />
      <Button size="sm" onClick={save} disabled={marks === null || saving || !dirty}>
        {saving ? <Spinner /> : <Save className="size-4" />} Save mark
      </Button>
    </div>
  );
}

/** One student's answers, question by question, with marking for written responses. */
export default function SubmissionSheet({ submissionId, canEdit, questions, onClose }: Props) {
  const sub = useQuery(api.assignments.submission, submissionId ? { submissionId } : "skip");
  const answers = new Map((sub?.answers ?? []).map((a) => [a.questionId, a]));

  return (
    <Sheet open={submissionId !== null} onOpenChange={(o) => { if (!o) onClose(); }}>
      <SheetContent className="w-full overflow-y-auto sm:max-w-2xl">
        <SheetHeader>
          <SheetTitle className="font-serif text-2xl">{sub?.name ?? "Submission"}</SheetTitle>
          <SheetDescription>
            {sub && (sub.closed
              ? `${sub.marks} marks so far${sub.pendingCount > 0 ? `, ${sub.pendingCount} written ${sub.pendingCount === 1 ? "answer" : "answers"} to mark` : ""}`
              : "Still sitting. You can mark written answers once they hand in.")}
          </SheetDescription>
        </SheetHeader>
        {sub === undefined ? (
          <div className="space-y-3 px-4">{Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className="h-32" />)}</div>
        ) : sub === null ? (
          <p className="px-4 text-sm text-muted-foreground">This submission is no longer available.</p>
        ) : (
          <ol className="space-y-6 px-4 pb-8">
            {questions.map((q, i) => {
              const loc = getQuestion(q.questionId);
              const a = answers.get(q.questionId);
              if (!loc) return null;
              return (
                <li key={q.questionId} className="space-y-4 rounded-2xl border bg-card p-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-serif text-lg font-semibold">Question {i + 1}</span>
                    {!a ? <Badge variant="secondary">Not answered</Badge>
                      : a.marks === null ? <Badge className="gap-1 bg-chart-1/15 text-chart-1"><Clock className="size-3" /> To mark</Badge>
                      : <Badge className="gap-1 bg-chart-3/15 text-chart-3"><CheckCircle2 className="size-3" /> {a.marks}/{q.totalMarks}</Badge>}
                    {q.teacherMarked && <Badge variant="secondary">Written</Badge>}
                  </div>
                  <QuestionBody question={loc.question} />
                  {a && (
                    <AnswerInput response={loc.question.response} answer={a.answer} onChange={() => undefined}
                      result={null} revealed readOnly openHint="The student's written answer." />
                  )}
                  {a && q.teacherMarked && canEdit && sub.closed && (
                    <MarkForm key={`${a.marks}-${a.feedback}`} submissionId={sub._id} questionId={q.questionId}
                      totalMarks={q.totalMarks} current={a.marks} feedback={a.feedback} />
                  )}
                  {a?.feedback && !canEdit && <p className="text-sm"><Check className="inline size-4 text-chart-3" /> {a.feedback}</p>}
                  <Accordion type="single" collapsible>
                    <AccordionItem value="ms" className="border-none">
                      <AccordionTrigger className="cursor-pointer py-1 text-sm">Markscheme</AccordionTrigger>
                      <AccordionContent className="pt-3">
                        <MarkschemePanel markscheme={loc.question.markscheme} totalMarks={q.totalMarks} />
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </li>
              );
            })}
          </ol>
        )}
      </SheetContent>
    </Sheet>
  );
}
