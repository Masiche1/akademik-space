import { Link } from "react-router-dom";
import { useMutation } from "convex/react";
import { formatDistanceToNow } from "date-fns";
import { ExternalLink, RotateCcw } from "lucide-react";
import { api } from "@/convex/_generated/api.js";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import ConfirmButton from "./confirm-button.tsx";
import ReviewDialog from "./review-dialog.tsx";
import { REPORT_REASON_LABEL, practicePath, type ReportRow } from "../_lib/admin.ts";

export default function ReportCard({ report }: { report: ReportRow }) {
  const review = useMutation(api.admin.content.review);
  const q = report.question;
  return (
    <article className="space-y-4 rounded-2xl border bg-card p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="bg-accent text-accent-foreground">{REPORT_REASON_LABEL[report.reason]}</Badge>
            <span className="text-xs text-muted-foreground">
              {report.reporter ?? "Anonymous visitor"}, {formatDistanceToNow(new Date(report.reportedAt), { addSuffix: true })}
            </span>
          </div>
          {q ? (
            <p className="truncate text-xs text-muted-foreground">{q.courseTitle} / {q.unitTitle} / {q.conceptTitle}</p>
          ) : (
            <p className="text-xs text-destructive">This question is no longer in the catalog</p>
          )}
        </div>
        <span className="font-mono text-[11px] text-muted-foreground">{report.questionId}</span>
      </div>

      {q && (
        <div className="rounded-xl border-l-4 border-chart-1 bg-muted/50 px-4 py-3 text-sm">
          <p className="break-words">{q.preview}</p>
          <p className="pt-1 text-xs text-muted-foreground">{q.totalMarks} {q.totalMarks === 1 ? "mark" : "marks"}</p>
        </div>
      )}

      <p className="whitespace-pre-wrap break-words text-sm">{report.details || <span className="text-muted-foreground">No details given.</span>}</p>

      {report.status !== "open" && (
        <div className="rounded-xl bg-secondary px-4 py-3 text-sm">
          <p className="text-xs text-muted-foreground">
            {report.status === "resolved" ? "Resolved" : "Dismissed"} by {report.reviewer ?? "an admin"}
            {report.reviewedAt && `, ${formatDistanceToNow(new Date(report.reviewedAt), { addSuffix: true })}`}
          </p>
          {report.reviewNote && <p className="whitespace-pre-wrap break-words pt-1">{report.reviewNote}</p>}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {q && (
          <Button size="sm" variant="ghost" asChild>
            <Link to={practicePath(report.questionId)} target="_blank" rel="noreferrer" className="cursor-pointer"><ExternalLink className="size-4" /> Open question</Link>
          </Button>
        )}
        <div className="ml-auto flex flex-wrap gap-2">
          {report.status === "open" ? (
            <>
              <ReviewDialog report={report} outcome="dismissed" />
              <ReviewDialog report={report} outcome="resolved" />
            </>
          ) : (
            <ConfirmButton
              label={<><RotateCcw className="size-4" /> Reopen</>}
              title="Reopen this report?"
              description="It moves back to the open queue and the review note is cleared."
              confirmLabel="Reopen"
              success="Report reopened"
              onConfirm={() => review({ reportId: report.reportId, status: "open" })}
            />
          )}
        </div>
      </div>
    </article>
  );
}
