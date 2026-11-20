import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "convex/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format, subDays } from "date-fns";
import { ChevronRight, FileText, Plus } from "lucide-react";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api.js";
import type { Id } from "@/convex/_generated/dataModel.d.ts";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog.tsx";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty.tsx";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { Spinner } from "@/components/ui/spinner.tsx";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group.tsx";
import { errorMessage } from "@/lib/errors.ts";
import { TERM_KIND_LABEL, localDay, parseDay, termReportPath, termWindow } from "../_lib/term-report.ts";

const schema = z
  .object({
    title: z.string().trim().min(1, "Give the report a title").max(80, "Titles must be 80 characters or fewer"),
    kind: z.enum(["midterm", "endterm"]),
    startDate: z.string().min(1, "Pick a start date"),
    endDate: z.string().min(1, "Pick an end date"),
  })
  .refine((v) => v.endDate >= v.startDate, { path: ["endDate"], message: "The term must end after it starts" });
type Values = z.infer<typeof schema>;

function NewReportDialog({ classId, open, onOpenChange }: { classId: Id<"classes">; open: boolean; onOpenChange: (o: boolean) => void }) {
  const create = useMutation(api.termReports.create);
  const navigate = useNavigate();
  const today = new Date();
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { title: `Autumn ${today.getFullYear()} mid-term`, kind: "midterm", startDate: localDay(subDays(today, 56)), endDate: localDay(today) },
  });

  const onSubmit = async (values: Values) => {
    try {
      const id = await create({ classId, ...values, ...termWindow(values.startDate, values.endDate) });
      toast.success("Report created. Add a comment for each student.");
      navigate(termReportPath(id));
    } catch (error) {
      toast.error(errorMessage(error, "Could not create the report"));
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New term report</DialogTitle>
          <DialogDescription>Covers concept mastery, plus assignments and exams set between these dates.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField control={form.control} name="kind" render={({ field }) => (
              <FormItem>
                <FormLabel>Type</FormLabel>
                <FormControl>
                  <ToggleGroup type="single" variant="outline" value={field.value} onValueChange={(v) => v && field.onChange(v)} className="w-full">
                    <ToggleGroupItem value="midterm" className="flex-1 cursor-pointer">Mid-term</ToggleGroupItem>
                    <ToggleGroupItem value="endterm" className="flex-1 cursor-pointer">End of term</ToggleGroupItem>
                  </ToggleGroup>
                </FormControl>
              </FormItem>
            )} />
            <FormField control={form.control} name="title" render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl><Input placeholder="Autumn term 2026" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField control={form.control} name="startDate" render={({ field }) => (
                <FormItem>
                  <FormLabel>Term starts</FormLabel>
                  <FormControl><Input type="date" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="endDate" render={({ field }) => (
                <FormItem>
                  <FormLabel>Term ends</FormLabel>
                  <FormControl><Input type="date" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
            <DialogFooter>
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting && <Spinner />} Create report
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

/** Mid-term and end-of-term reports for the class, to share with parents. */
export default function TermReportsSection({ classId }: { classId: Id<"classes"> }) {
  const data = useQuery(api.termReports.list, { classId });
  const [open, setOpen] = useState(false);

  if (data === null) return null;
  if (data === undefined) return <div className="space-y-3">{Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className="h-16" />)}</div>;

  const dialog = data.canEdit && <NewReportDialog classId={classId} open={open} onOpenChange={setOpen} />;
  if (data.reports.length === 0) {
    return (
      <>
        <Empty className="rounded-2xl border bg-card">
          <EmptyHeader>
            <EmptyMedia variant="icon"><FileText /></EmptyMedia>
            <EmptyTitle>No term reports yet</EmptyTitle>
            <EmptyDescription>Create a mid-term or end-of-term report, add a comment for each student, and download a PDF for their parents.</EmptyDescription>
          </EmptyHeader>
          {data.canEdit && (
            <EmptyContent><Button size="sm" onClick={() => setOpen(true)}><Plus className="size-4" /> New term report</Button></EmptyContent>
          )}
        </Empty>
        {dialog}
      </>
    );
  }

  return (
    <div className="space-y-4">
      {data.canEdit && (
        <div className="flex justify-end">
          <Button size="sm" onClick={() => setOpen(true)}><Plus className="size-4" /> New term report</Button>
        </div>
      )}
      <div className="divide-y rounded-2xl border bg-card">
        {data.reports.map((r) => (
          <Link key={r._id} to={termReportPath(r._id)} className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/50 cursor-pointer">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground"><FileText className="size-5" /></div>
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium">{r.title}</p>
              <p className="text-xs text-muted-foreground">
                {format(parseDay(r.startDate), "d MMM")} - {format(parseDay(r.endDate), "d MMM yyyy")}
              </p>
            </div>
            <Badge variant="secondary" className="hidden sm:inline-flex">{TERM_KIND_LABEL[r.kind]}</Badge>
            <ChevronRight className="size-4 text-muted-foreground" />
          </Link>
        ))}
      </div>
    </div>
  );
}
