import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Authenticated, AuthLoading, Unauthenticated, useMutation, useQuery } from "convex/react";
import { ClipboardList, EyeOff, Play, Send, Timer } from "lucide-react";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api.js";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { SignInButton } from "@/components/ui/signin.tsx";
import { Spinner } from "@/components/ui/spinner.tsx";
import type { FunctionReturnType } from "convex/server";
import { getQuestion } from "@/content/catalog.ts";
import { useNow } from "@/hooks/use-now.ts";
import { errorMessage } from "@/lib/errors.ts";
import { markPercent } from "@/lib/mastery.ts";
import { SET_KIND_LABEL, dueHint, formatCountdown, formatDue, formatMinutes } from "@/lib/sets.ts";
import { cn } from "@/lib/utils.ts";
import SetQuestion from "./_components/set-question.tsx";

type Sitting = NonNullable<FunctionReturnType<typeof api.assignments.sitting>>;

function SetSkeleton() {
  return <div className="space-y-4"><Skeleton className="h-28" />{Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className="h-48" />)}</div>;
}

function Countdown({ deadlineAt }: { deadlineAt: string }) {
  const now = useNow();
  const left = Date.parse(deadlineAt) - now;
  return (
    <span className={cn("flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-sm font-semibold",
      left < 5 * 60_000 ? "bg-destructive/15 text-destructive" : "bg-secondary")}>
      <Timer className="size-4" /> {left > 0 ? formatCountdown(left) : "Time is up"}
    </span>
  );
}

function StartCard({ data, now }: { data: Sitting; now: number }) {
  const start = useMutation(api.assignments.start);
  const [starting, setStarting] = useState(false);
  const pastDue = data.dueAt !== null && Date.parse(data.dueAt) < now;
  const onStart = async () => {
    setStarting(true);
    try {
      await start({ assignmentId: data._id });
    } catch (e) {
      toast.error(errorMessage(e, "Could not start"));
    } finally {
      setStarting(false);
    }
  };
  return (
    <div className="space-y-4 rounded-2xl border bg-card p-6">
      <ul className="space-y-2 text-sm">
        <li className="flex gap-2"><ClipboardList className="size-4 shrink-0 text-chart-1" /> {data.questionCount} questions, {data.totalMarks} marks</li>
        {data.timeLimitMinutes !== null && (
          <li className="flex gap-2"><Timer className="size-4 shrink-0 text-chart-1" /> {formatMinutes(data.timeLimitMinutes)} from when you start. The timer keeps running if you leave.</li>
        )}
        <li className="flex gap-2"><EyeOff className="size-4 shrink-0 text-chart-1" /> Solutions stay hidden until your teacher releases them.</li>
      </ul>
      {data.instructions && <p className="whitespace-pre-line rounded-xl bg-muted/60 p-3 text-sm">{data.instructions}</p>}
      {pastDue ? (
        <p className="text-sm text-destructive">This set was due {formatDue(data.dueAt ?? "")}, so it can no longer be started.</p>
      ) : (
        <Button onClick={onStart} disabled={starting}>{starting ? <Spinner /> : <Play className="size-4" />} Start {data.kind === "exam" ? "exam" : "assignment"}</Button>
      )}
    </div>
  );
}

function HandIn({ data }: { data: Sitting }) {
  const submit = useMutation(api.assignments.submit);
  const [sending, setSending] = useState(false);
  const sitting = data.sitting;
  if (!sitting) return null;
  const left = data.questions.length - data.answers.length;
  const onSubmit = async () => {
    setSending(true);
    try {
      await submit({ submissionId: sitting._id });
      toast.success("Handed in");
    } catch (e) {
      toast.error(errorMessage(e, "Could not hand in"));
    } finally {
      setSending(false);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button disabled={sending}>{sending ? <Spinner /> : <Send className="size-4" />} Hand in</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Hand in {data.title}?</AlertDialogTitle>
          <AlertDialogDescription>
            {left > 0 ? `You have ${left} unanswered ${left === 1 ? "question" : "questions"}. ` : ""}You can't change your answers afterwards.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep working</AlertDialogCancel>
          <AlertDialogAction onClick={onSubmit}>Hand in</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function SetView({ assignmentId }: { assignmentId: string }) {
  const data = useQuery(api.assignments.sitting, { assignmentId });
  const now = useNow(15_000);
  if (data === undefined) return <SetSkeleton />;
  if (data === null) {
    return (
      <Empty className="rounded-2xl border bg-card">
        <EmptyHeader>
          <EmptyMedia variant="icon"><ClipboardList /></EmptyMedia>
          <EmptyTitle>Set not found</EmptyTitle>
          <EmptyDescription>It may have been deleted, or it was set for a class you are not in.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent><Button size="sm" asChild><Link to="/progress" className="cursor-pointer">Back to My progress</Link></Button></EmptyContent>
      </Empty>
    );
  }
  const s = data.sitting;
  // The server decides when time is up; the local clock just updates the screen without waiting for a refresh.
  const closed = s !== null && (s.closed || (s.deadlineAt !== null && Date.parse(s.deadlineAt) < now - 30_000));
  const answers = new Map(data.answers.map((a) => [a.questionId, a]));

  return (
    <>
      <div className="sticky top-[4.5rem] z-30 -mx-4 mb-6 flex flex-wrap items-center gap-3 border-b bg-background/90 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6">
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs text-muted-foreground">{data.className} / {SET_KIND_LABEL[data.kind]}</p>
          <h1 className="truncate font-serif text-2xl font-semibold">{data.title}</h1>
        </div>
        {s && !closed && s.deadlineAt && <Countdown deadlineAt={s.deadlineAt} />}
        {s && !closed && <span className="font-mono text-xs text-muted-foreground">{data.answers.length}/{data.questions.length} saved</span>}
        {s && !closed && <HandIn data={data} />}
        {closed && s?.marks !== null && s && (
          <span className="rounded-full bg-secondary px-3 py-1 font-mono text-sm font-semibold">
            {s.marks}/{data.totalMarks} <span className="font-sans font-normal text-muted-foreground">{markPercent(s.marks ?? 0, data.totalMarks)}%</span>
          </span>
        )}
      </div>

      {!s && (
        <>
          {data.dueAt && <p className="pb-4 text-sm text-muted-foreground">{dueHint(data.dueAt, now)} ({formatDue(data.dueAt)})</p>}
          <StartCard data={data} now={now} />
        </>
      )}

      {s && closed && (
        <div className="mb-6 rounded-2xl border bg-card p-5 text-sm">
          <p className="font-semibold">{s.submittedAt ? "Handed in." : "Time ran out, so your saved answers were handed in."}</p>
          <p className="text-muted-foreground">
            {(s.pendingCount ?? 0) > 0 ? `Your teacher still has ${s.pendingCount} written ${s.pendingCount === 1 ? "answer" : "answers"} to mark. ` : ""}
            {data.showSolutions ? "Your teacher has released the solutions." : "Solutions appear here if your teacher releases them."}
          </p>
        </div>
      )}

      {s && (
        <div className="space-y-6">
          {data.questions.map((q, i) => {
            const loc = getQuestion(q.questionId);
            if (!loc) return null;
            const saved = answers.get(q.questionId);
            return (
              <SetQuestion key={q.questionId} index={i} loc={loc} submissionId={s._id} closed={closed} showSolutions={data.showSolutions}
                saved={saved ? { answer: saved.answer, marks: saved.marks, feedback: saved.feedback } : undefined} />
            );
          })}
          {!closed && <div className="flex justify-end"><HandIn data={data} /></div>}
        </div>
      )}
    </>
  );
}

export default function SetPage() {
  const { assignmentId = "" } = useParams();
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <AuthLoading><SetSkeleton /></AuthLoading>
      <Unauthenticated>
        <Empty className="rounded-2xl border bg-card">
          <EmptyHeader>
            <EmptyMedia variant="icon"><ClipboardList /></EmptyMedia>
            <EmptyTitle>Sign in to open this set</EmptyTitle>
            <EmptyDescription>Assignments and exams are for students in your teacher's class.</EmptyDescription>
          </EmptyHeader>
          <EmptyContent><SignInButton size="sm" /></EmptyContent>
        </Empty>
      </Unauthenticated>
      <Authenticated><SetView assignmentId={assignmentId} /></Authenticated>
    </div>
  );
}
