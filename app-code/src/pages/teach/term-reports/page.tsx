import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "convex/react";
import type { FunctionReturnType } from "convex/server";
import { format } from "date-fns";
import { Download, FileText, Trash2, Users } from "lucide-react";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api.js";
import type { Id } from "@/convex/_generated/dataModel.d.ts";
import { Button } from "@/components/ui/button.tsx";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog.tsx";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty.tsx";
import { Spinner } from "@/components/ui/spinner.tsx";
import { errorMessage } from "@/lib/errors.ts";
import TeachGate, { PortalSkeleton } from "../_components/teach-gate.tsx";
import TeachCrumbs from "../_components/teach-crumbs.tsx";
import { classPath, classReportsPath } from "../_lib/teach.ts";
import { TERM_KIND_LABEL, parseDay } from "../reports/_lib/term-report.ts";
import { useTermPdf } from "../reports/_hooks/use-term-pdf.ts";
import StudentCommentRow from "./_components/student-comment-row.tsx";

function DeleteReport({ reportId, classId }: { reportId: Id<"termReports">; classId: string }) {
  const remove = useMutation(api.termReports.remove);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const confirm = async () => {
    setBusy(true);
    try {
      await remove({ reportId });
      toast.success("Report deleted");
      navigate(`${classReportsPath(classId)}?tab=terms`);
    } catch (error) {
      toast.error(errorMessage(error, "Could not delete the report"));
      setBusy(false);
    }
  };
  return (
    <>
      <Button size="sm" variant="ghost" className="text-destructive" onClick={() => setOpen(true)}><Trash2 className="size-4" /> Delete</Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete this report?</DialogTitle>
            <DialogDescription>Every comment on it is deleted too. Students' marks and progress are not affected.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="destructive" disabled={busy} onClick={confirm}>{busy && <Spinner />} Delete report</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

function ReportView({ reportId }: { reportId: string }) {
  const report = useQuery(api.termReports.get, { reportId });
  if (report === undefined) return <PortalSkeleton />;
  if (report === null) {
    return (
      <Empty className="rounded-2xl border bg-card">
        <EmptyHeader>
          <EmptyMedia variant="icon"><FileText /></EmptyMedia>
          <EmptyTitle>Report not found</EmptyTitle>
          <EmptyDescription>It may have been deleted, or it belongs to another teacher's class.</EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }
  return <ReportBody report={report} />;
}

type Report = NonNullable<FunctionReturnType<typeof api.termReports.get>>;

function ReportBody({ report }: { report: Report }) {
  const { busy, download } = useTermPdf(report._id);
  const commented = report.students.filter((s) => s.comment.trim()).length;

  return (
    <>
      <TeachCrumbs items={[
        { label: report.orgName, to: `/teach?org=${report.orgId}` },
        { label: report.className, to: classPath(report.classId) },
        { label: "Reports", to: `${classReportsPath(report.classId)}?tab=terms` },
        { label: report.title },
      ]} />
      <div className="flex flex-wrap items-end justify-between gap-4 pb-8">
        <div>
          <p className="text-sm font-medium text-chart-1">{TERM_KIND_LABEL[report.kind]}</p>
          <h1 className="font-serif text-4xl font-semibold tracking-tight">{report.title}</h1>
          <p className="pt-2 text-muted-foreground">
            {report.className} / {format(parseDay(report.startDate), "d MMM")} - {format(parseDay(report.endDate), "d MMM yyyy")}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {report.canEdit && <DeleteReport reportId={report._id} classId={report.classId} />}
          <Button disabled={busy !== null || report.students.length === 0} onClick={() => void download(report.students, "all", `${report.className}-${report.title}`)}>
            {busy === "all" ? <Spinner /> : <Download className="size-4" />} Download all ({report.students.length})
          </Button>
        </div>
      </div>

      {report.students.length === 0 ? (
        <Empty className="rounded-2xl border bg-card">
          <EmptyHeader>
            <EmptyMedia variant="icon"><Users /></EmptyMedia>
            <EmptyTitle>No students in this class</EmptyTitle>
            <EmptyDescription>Add students to the class to write their reports.</EmptyDescription>
          </EmptyHeader>
        </Empty>
      ) : (
        <section className="space-y-3">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="font-serif text-2xl font-semibold">Comments</h2>
            <p className="text-sm text-muted-foreground">{commented} of {report.students.length} written. Comments save as you type.</p>
          </div>
          <div className="divide-y rounded-2xl border bg-card">
            {report.students.map((s) => (
              <StudentCommentRow
                key={s.userId}
                reportId={report._id}
                userId={s.userId}
                name={s.name}
                initial={s.comment}
                canEdit={report.canEdit}
                busy={busy === s.userId}
                onDownload={() => void download([s], s.userId, `${s.name}-${report.title}`)}
              />
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            Each PDF shows course and unit mastery, strengths and next steps, assignment and exam scores set during the term, and your comment.
          </p>
        </section>
      )}
    </>
  );
}

export default function TermReportPage() {
  const { reportId = "" } = useParams();
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <TeachGate><ReportView reportId={reportId} /></TeachGate>
    </div>
  );
}
