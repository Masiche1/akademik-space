import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { useConvexAuth } from "convex/react";
import { toast } from "sonner";
import {
  BookOpen, CircleSlash2, ClipboardList, CheckCircle2, ChevronLeft, ChevronRight, Eye, EyeOff, Flag, History, Layers, ListOrdered, RotateCcw, Send, Sparkles, XCircle,
} from "lucide-react";
import { useQuestionLocked, useQuestionProgress, useRecordAttempt } from "@/hooks/use-progress.ts";
import { autoMarks, questionSecure } from "@/lib/mastery.ts";
import AttemptSaver from "./attempt-saver.tsx";
import { saveErrorMessage } from "../_lib/save-error.ts";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Progress } from "@/components/ui/progress.tsx";
import MathText from "@/components/math-text.tsx";
import { getNeighbors, type QuestionLocation } from "@/content/catalog.ts";
import { paperLabel } from "@/content/ib.ts";
import { TIER_LABEL, aoHelpFor, isEnglish } from "@/content/edexcel.ts";
import { matchesTier, useTier } from "@/hooks/use-tier.ts";
import { checkAnswer, isAnswerComplete, type Answer, type CheckResult } from "@/lib/grading.ts";
import { cn } from "@/lib/utils.ts";
import AnswerInput from "@/components/answer-input.tsx";
import QuestionBody from "@/components/question-body.tsx";
import MarkschemePanel from "@/components/markscheme-panel.tsx";
import ConceptLessonSheet from "./concept-lesson-sheet.tsx";
import ReportDialog from "./report-dialog.tsx";
import SketchToolbar from "./sketch-toolbar.tsx";
import SketchCanvas from "./sketch-canvas.tsx";
import { WorkspaceArea, WorkspaceFooter } from "./workspace.tsx";
import { DIFFICULTY_STYLE } from "../_lib/difficulty.ts";
import { INK, type SketchTool } from "../_lib/sketch.ts";
import { useSketch } from "../_hooks/use-sketch.ts";

const RESULT_COPY: Record<CheckResult["status"], { title: string; body: string }> = {
  correct: { title: "Correct", body: "Review the solution to confirm your method earns every mark." },
  partial: { title: "Partly correct", body: "Some parts are right. Compare your working with the solution." },
  incorrect: { title: "Not quite", body: "Open the solution to see where the reasoning differs, or try again." },
  self: { title: "Response submitted", body: "Compare your working with each step of the solution to award yourself marks." },
};

type Props = { loc: QuestionLocation; onShowMoreLikeThis: () => void };

export default function QuestionPlayer({ loc, onShowMoreLikeThis }: Props) {
  const { question, concept, lesson, unit, course } = loc;
  const [tier] = useTier();
  const { prev, next, position, total } = getNeighbors(loc, (q) => matchesTier(q, tier));
  const [answer, setAnswer] = useState<Answer | null>(null);
  const [result, setResult] = useState<CheckResult | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [lessonOpen, setLessonOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const sketch = useSketch(question.id);
  const [tool, setTool] = useState<SketchTool>("pointer");
  const [color, setColor] = useState<string>(INK);
  const [size, setSize] = useState(2);
  const english = isEnglish(course);
  const aoHelp = aoHelpFor(course);

  const { isAuthenticated } = useConvexAuth();
  const recordAttempt = useRecordAttempt();
  const saved = useQuestionProgress(question.id);
  // Questions in an unfinished class set can't be answered or revealed here.
  const locked = useQuestionLocked(question.id);
  const [autoSaved, setAutoSaved] = useState<"saving" | "saved" | "error" | null>(null);

  const save = (marks: number, status: CheckResult["status"]) =>
    recordAttempt({ courseId: course.id, conceptId: concept.id, questionId: question.id, marks, totalMarks: question.totalMarks, status })
      .then(() => undefined);

  const submit = async () => {
    if (!answer) return;
    const r = checkAnswer(question.response, answer);
    setResult(r);
    if (r.status === "self") setRevealed(true);
    const marks = autoMarks(question.response, r, question.totalMarks);
    if (marks === null || !isAuthenticated) return;
    setAutoSaved("saving");
    try {
      await save(marks, r.status);
      setAutoSaved("saved");
    } catch (error) {
      setAutoSaved("error");
      toast.error(saveErrorMessage(error));
    }
  };

  const retry = () => {
    setResult(null);
    setAnswer(null);
    setRevealed(false);
    setAutoSaved(null);
  };

  const ResultIcon = result?.status === "correct" ? CheckCircle2 : result?.status === "self" ? Eye : XCircle;

  return (
    <div className="space-y-5">
      {/* Breadcrumb + progress */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
          <Link to={`/courses/${course.id}`} className="hover:text-foreground cursor-pointer">{course.title}</Link>
          <span>/</span><span>Unit {unit.code}</span><span>/</span>
          <span>{lesson.code} {lesson.title}</span>
        </div>
        <div className="flex items-center gap-3">
          <Progress value={(position / Math.max(total, 1)) * 100} className="h-1.5" />
          <span className="shrink-0 font-mono text-xs text-muted-foreground">{position} / {total}</span>
        </div>
      </div>

      {/* Tools sit above the question and stay in reach while scrolling through the workspace */}
      <div className="sticky top-[4.5rem] z-30">
        <SketchToolbar sketch={sketch} tool={tool} onToolChange={setTool} color={color} onColorChange={setColor}
          size={size} onSizeChange={setSize} mathsTools={!english} />
      </div>

      {/* Question card */}
      <motion.article key={question.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }} className="rounded-2xl border bg-card p-5 shadow-sm sm:p-7">
        {/* Annotation layer covers the question, answer area and working space */}
        <SketchCanvas sketch={sketch} tool={tool} color={color} size={size}
          workspace={<WorkspaceArea height={sketch.workspace} lined={english} />}>
          <div className="flex flex-wrap items-center gap-2 pb-4">
            <span className="text-sm font-medium">{concept.title}</span>
            <Badge variant="secondary" className={cn("capitalize", DIFFICULTY_STYLE[question.difficulty])}>{question.difficulty}</Badge>
            {question.parts && (
              <Badge variant="secondary" className="gap-1"><ListOrdered className="size-3" /> Structured</Badge>
            )}
            {question.paper && course.ib && (
              <Badge variant="secondary" className="gap-1 font-mono">
                {question.paper === "1" && course.ib.subject === "aa" && <CircleSlash2 className="size-3" />}
                {paperLabel(question.paper, course.ib.subject).title}
                <span className="font-sans font-normal text-muted-foreground">{paperLabel(question.paper, course.ib.subject).detail}</span>
              </Badge>
            )}
            {question.tier && (
              <Badge variant="secondary" className="gap-1">
                {TIER_LABEL[question.tier].title} tier
                <span className="font-normal text-muted-foreground">{TIER_LABEL[question.tier].detail}</span>
              </Badge>
            )}
            {saved && (
              <Badge variant="secondary" className={cn("gap-1", questionSecure(saved) && "bg-chart-3/15 text-chart-3")}>
                <History className="size-3" /> Best {saved.bestMarks}/{saved.totalMarks}
                <span className="font-normal text-muted-foreground">
                  {saved.attemptCount} {saved.attemptCount === 1 ? "attempt" : "attempts"}
                </span>
              </Badge>
            )}
            <span className="ml-auto rounded-md bg-accent px-2 py-0.5 font-mono text-xs font-semibold text-accent-foreground">
              [{question.totalMarks} marks]
            </span>
          </div>
          <QuestionBody question={question} />

          <div className="pt-6">
            <AnswerInput response={question.response} answer={answer} onChange={setAnswer} result={result} revealed={revealed} essay={english} />
          </div>
        </SketchCanvas>
        <WorkspaceFooter sketch={sketch} drawing={tool !== "pointer"} onStartDrawing={() => setTool("pen")} />

        <AnimatePresence>
          {result && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden">
              <div className={cn("mt-5 flex gap-3 rounded-xl p-4",
                result.status === "correct" && "bg-chart-3/10",
                (result.status === "incorrect" || result.status === "partial") && "bg-destructive/10",
                result.status === "self" && "bg-muted")}>
                <ResultIcon className={cn("mt-0.5 size-5 shrink-0",
                  result.status === "correct" ? "text-chart-3" : result.status === "self" ? "text-primary" : "text-destructive")} />
                <div>
                  <p className="font-semibold">{RESULT_COPY[result.status].title}</p>
                  <p className="text-sm text-muted-foreground">{RESULT_COPY[result.status].body}</p>
                </div>
              </div>
              <AttemptSaver autoMarks={autoMarks(question.response, result, question.totalMarks)} autoSaved={autoSaved}
                totalMarks={question.totalMarks} onSave={(m) => save(m, "self")} />
            </motion.div>
          )}
        </AnimatePresence>

        {locked && (
          <div className="mt-5 flex gap-3 rounded-xl bg-accent/60 p-4 text-sm">
            <ClipboardList className="mt-0.5 size-5 shrink-0 text-accent-foreground" />
            <p>
              <span className="font-semibold">This question is in one of your class sets.</span>{" "}
              <span className="text-muted-foreground">Answer it from <Link to="/progress" className="underline cursor-pointer">My progress</Link>. The solution unlocks once your teacher releases it.</span>
            </p>
          </div>
        )}

        {/* Primary actions */}
        <div className="mt-6 flex flex-wrap items-center gap-2 border-t pt-5">
          {locked ? null : result ? (
            <Button variant="secondary" onClick={retry}><RotateCcw className="size-4" /> Try again</Button>
          ) : (
            <Button onClick={submit} disabled={!isAnswerComplete(question.response, answer)}>
              <Send className="size-4" /> Submit answer
            </Button>
          )}
          {!locked && (
            <Button variant="secondary" onClick={() => setRevealed((r) => !r)}>
              {revealed ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              {revealed ? "Hide solution" : "Reveal solution"}
            </Button>
          )}
          <div className="ml-auto flex gap-2">
            <Button variant="ghost" size="icon" disabled={!prev} asChild={!!prev} aria-label="Previous question">
              {prev ? <Link to={`/practice/${prev}`} className="cursor-pointer"><ChevronLeft className="size-4" /></Link> : <ChevronLeft className="size-4" />}
            </Button>
            <Button disabled={!next} asChild={!!next}>
              {next ? <Link to={`/practice/${next}`} className="cursor-pointer">Next <ChevronRight className="size-4" /></Link> : <span>Next <ChevronRight className="size-4" /></span>}
            </Button>
          </div>
        </div>

        {/* Secondary actions */}
        <div className="flex flex-wrap gap-1 pt-3">
          <Button variant="ghost" size="sm" onClick={() => setLessonOpen(true)}><BookOpen className="size-4" /> Concept lesson</Button>
          <Button variant="ghost" size="sm" onClick={onShowMoreLikeThis}><Layers className="size-4" /> More like this</Button>
          <Button variant="ghost" size="sm" className="text-chart-1 hover:text-chart-1"
            onClick={() => toast("Ariela AI practice generation is coming soon in a future milestone!")}>
            <Sparkles className="size-4" /> Generate with Ariela AI
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground" onClick={() => setReportOpen(true)}>
            <Flag className="size-4" /> Report
          </Button>
        </div>
      </motion.article>

      <AnimatePresence>
        {revealed && !locked && (
          <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
            className="rounded-2xl border bg-card p-5 sm:p-7">
            <h2 className="pb-5 font-serif text-2xl font-semibold">{english ? "Markscheme and model answer" : "Solution and markscheme"}</h2>
            <MarkschemePanel markscheme={question.markscheme} totalMarks={question.totalMarks} aoHelp={aoHelp} />
          </motion.section>
        )}
      </AnimatePresence>

      <ConceptLessonSheet open={lessonOpen} onOpenChange={setLessonOpen} concept={concept} lesson={lesson}
        keyHeading={english ? "Key terms and techniques" : undefined} />
      <ReportDialog open={reportOpen} onOpenChange={setReportOpen} questionId={question.id} />
    </div>
  );
}
