import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "convex/react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ClipboardList, EyeOff, Timer, Users, X } from "lucide-react";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api.js";
import { Button } from "@/components/ui/button.tsx";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty.tsx";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Spinner } from "@/components/ui/spinner.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group.tsx";
import { getQuestion, plainPreview } from "@/content/catalog.ts";
import { errorMessage } from "@/lib/errors.ts";
import { localDateTimeValue, setResultsPath } from "@/lib/sets.ts";
import TeachGate, { PortalSkeleton } from "../../_components/teach-gate.tsx";
import TeachCrumbs from "../../_components/teach-crumbs.tsx";
import { classPath, type ClassDetail } from "../../_lib/teach.ts";
import QuestionPicker from "../_components/question-picker.tsx";

const MAX_QUESTIONS = 40;

const schema = z
  .object({
    title: z.string().trim().min(1, "Give the set a title").max(80, "80 characters or fewer"),
    kind: z.enum(["assignment", "exam"]),
    instructions: z.string().max(2000, "2000 characters or fewer"),
    dueAt: z.string(),
    timeLimit: z.string(),
  })
  .superRefine((v, ctx) => {
    if (v.timeLimit !== "") {
      const n = Number(v.timeLimit);
      if (!Number.isInteger(n) || n < 5 || n > 300) ctx.addIssue({ code: "custom", path: ["timeLimit"], message: "5 to 300 minutes" });
    } else if (v.kind === "exam") {
      ctx.addIssue({ code: "custom", path: ["timeLimit"], message: "Exams need a time limit" });
    }
    if (v.dueAt !== "" && new Date(v.dueAt).getTime() <= Date.now()) {
      ctx.addIssue({ code: "custom", path: ["dueAt"], message: "Pick a time in the future" });
    }
  });
type Values = z.infer<typeof schema>;

function NewSetForm({ detail }: { detail: ClassDetail }) {
  const create = useMutation(api.assignments.create);
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>([]);
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { title: "", kind: "assignment", instructions: "", dueAt: "", timeLimit: "" },
  });
  const kind = useWatch({ control: form.control, name: "kind" });
  const totalMarks = selected.reduce((s, id) => s + (getQuestion(id)?.question.totalMarks ?? 0), 0);

  const toggle = (id: string) => setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  const addMany = (ids: string[]) => setSelected((s) => {
    const next = [...s, ...ids.filter((id) => !s.includes(id))];
    if (next.length > MAX_QUESTIONS) toast.error(`A set can have up to ${MAX_QUESTIONS} questions`);
    return next.slice(0, MAX_QUESTIONS);
  });

  const onSubmit = async (v: Values) => {
    if (selected.length === 0) {
      toast.error("Add at least one question");
      return;
    }
    if (selected.length > MAX_QUESTIONS) {
      toast.error(`A set can have up to ${MAX_QUESTIONS} questions`);
      return;
    }
    try {
      const id = await create({
        classId: detail._id,
        title: v.title,
        kind: v.kind,
        instructions: v.instructions.trim() || undefined,
        questionIds: selected,
        dueAt: v.dueAt ? new Date(v.dueAt).toISOString() : undefined,
        timeLimitMinutes: v.timeLimit ? Number(v.timeLimit) : undefined,
      });
      toast.success(`${v.title.trim()} set for ${detail.name}`);
      void navigate(setResultsPath(id));
    } catch (e) {
      toast.error(errorMessage(e, "Could not create the set"));
    }
  };

  return (
    <>
      <TeachCrumbs items={[
        { label: detail.orgName, to: `/teach?org=${detail.orgId}` },
        { label: detail.name, to: classPath(detail._id) },
        { label: "New set" },
      ]} />
      <h1 className="font-serif text-4xl font-semibold tracking-tight">New set for {detail.name}</h1>
      <p className="max-w-2xl pt-2 pb-8 text-muted-foreground">
        Pick questions from any course. Students answer them in one sitting with "Reveal solution" hidden, and auto-marked answers are scored for you.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="min-w-0 space-y-6">
            <div className="space-y-5 rounded-2xl border bg-card p-5">
              <FormField control={form.control} name="kind" render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <ToggleGroup type="single" variant="outline" value={field.value}
                    onValueChange={(val) => { if (val) field.onChange(val); }} className="w-full sm:w-auto">
                    <ToggleGroupItem value="assignment" className="cursor-pointer px-4"><ClipboardList className="size-4" /> Assignment</ToggleGroupItem>
                    <ToggleGroupItem value="exam" className="cursor-pointer px-4"><Timer className="size-4" /> Exam</ToggleGroupItem>
                  </ToggleGroup>
                  <FormDescription>
                    {kind === "exam" ? "Timed, one sitting. The clock starts when the student opens it." : "Homework or classwork. Add a time limit if you want one."}
                  </FormDescription>
                </FormItem>
              )} />
              <FormField control={form.control} name="title" render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl><Input placeholder={kind === "exam" ? "Unit 1 test" : "Fractions homework"} {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField control={form.control} name="dueAt" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Due (optional)</FormLabel>
                    <FormControl><Input type="datetime-local" min={localDateTimeValue(new Date())} {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="timeLimit" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Time limit in minutes{kind === "exam" ? "" : " (optional)"}</FormLabel>
                    <FormControl><Input type="number" inputMode="numeric" min={5} max={300} placeholder="45" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <FormField control={form.control} name="instructions" render={({ field }) => (
                <FormItem>
                  <FormLabel>Instructions (optional)</FormLabel>
                  <FormControl><Textarea rows={3} placeholder="Show all your working. Calculators allowed." {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>

            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-semibold">Choose questions</h2>
              <QuestionPicker classCourseIds={detail.courseIds} selected={selected} onToggle={toggle} onAddMany={addMany} />
            </section>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="space-y-4 rounded-2xl border bg-card p-5">
              <div className="flex items-baseline justify-between">
                <p className="font-serif text-lg font-semibold">In this set</p>
                <p className="font-mono text-xs text-muted-foreground">{selected.length}/{MAX_QUESTIONS} / {totalMarks} marks</p>
              </div>
              {selected.length === 0 ? (
                <p className="rounded-lg border border-dashed p-4 text-sm text-muted-foreground">Tick questions on the left to add them.</p>
              ) : (
                <ol className="max-h-[45vh] space-y-1.5 overflow-auto">
                  {selected.map((id, i) => {
                    const loc = getQuestion(id);
                    return (
                      <li key={id} className="flex items-start gap-2 rounded-lg bg-background p-2 text-sm">
                        <span className="w-5 shrink-0 font-mono text-xs text-muted-foreground">{i + 1}.</span>
                        <span className="min-w-0 flex-1 truncate">{loc ? plainPreview(loc.question.stem, 60) : id}</span>
                        <button type="button" onClick={() => toggle(id)} aria-label="Remove question"
                          className="shrink-0 text-muted-foreground hover:text-foreground cursor-pointer"><X className="size-4" /></button>
                      </li>
                    );
                  })}
                </ol>
              )}
              <p className="flex gap-2 text-xs text-muted-foreground">
                <EyeOff className="mt-0.5 size-3.5 shrink-0" /> Solutions stay hidden. You can release them after students hand in.
              </p>
              <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting && <Spinner />} Set for {detail.roster.length} {detail.roster.length === 1 ? "student" : "students"}
              </Button>
            </div>
          </aside>
        </form>
      </Form>
    </>
  );
}

function NewSetView({ classId }: { classId: string }) {
  const detail = useQuery(api.teach.classDetail, { classId });
  if (detail === undefined) return <PortalSkeleton />;
  if (detail === null || !detail.canEdit) {
    return (
      <Empty className="rounded-2xl border bg-card">
        <EmptyHeader>
          <EmptyMedia variant="icon"><Users /></EmptyMedia>
          <EmptyTitle>Class not found</EmptyTitle>
          <EmptyDescription>Only the class teacher or an administrator can set work for this class.</EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }
  return <NewSetForm detail={detail} />;
}

export default function NewSetPage() {
  const { classId = "" } = useParams();
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <TeachGate><NewSetView classId={classId} /></TeachGate>
    </div>
  );
}
