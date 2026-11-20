import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { toast } from "sonner";
import { CheckCircle2, XCircle } from "lucide-react";
import { api } from "@/convex/_generated/api.js";
import { Button } from "@/components/ui/button.tsx";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Spinner } from "@/components/ui/spinner.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { errorMessage } from "@/lib/errors.ts";
import type { ReportRow } from "../_lib/admin.ts";

const MAX_NOTE = 1000;
const COPY = {
  resolved: { label: "Resolve", title: "Resolve this report", hint: "What did you fix? e.g. Corrected the final answer to x = 4", done: "Report resolved", icon: CheckCircle2 },
  dismissed: { label: "Dismiss", title: "Dismiss this report", hint: "Why is no change needed? e.g. The answer is correct as written", done: "Report dismissed", icon: XCircle },
} as const;

/** Resolve or dismiss a report with an optional note, and optionally close the question's other open reports. */
export default function ReviewDialog({ report, outcome }: { report: ReportRow; outcome: keyof typeof COPY }) {
  const copy = COPY[outcome];
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState("");
  const [applyAll, setApplyAll] = useState(true);
  const [busy, setBusy] = useState(false);
  const review = useMutation(api.admin.content.review);
  // Only counted while the dialog is open.
  const openCount = useQuery(api.admin.content.openForQuestion, open ? { questionId: report.questionId } : "skip");
  const others = Math.max(0, (openCount ?? 1) - 1);

  const submit = async () => {
    setBusy(true);
    try {
      const res = await review({ reportId: report.reportId, status: outcome, note, applyToQuestion: others > 0 && applyAll });
      toast.success(res.also > 0 ? `${copy.done}, with ${res.also} more on this question` : copy.done);
      setOpen(false);
      setNote("");
    } catch (e) {
      toast.error(errorMessage(e));
    } finally {
      setBusy(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant={outcome === "resolved" ? "default" : "secondary"}><copy.icon className="size-4" /> {copy.label}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{copy.title}</DialogTitle>
          <DialogDescription>Your note is kept with the report so other admins can see what happened.</DialogDescription>
        </DialogHeader>
        <Textarea value={note} onChange={(e) => setNote(e.target.value)} maxLength={MAX_NOTE} rows={4} placeholder={copy.hint} aria-label="Review note" />
        {others > 0 && (
          <Label className="flex cursor-pointer items-start gap-3 rounded-lg border p-3 font-normal">
            <Checkbox checked={applyAll} onCheckedChange={(v) => setApplyAll(v === true)} className="mt-0.5" />
            <span>Also close the other {others} open {others === 1 ? "report" : "reports"} on this question</span>
          </Label>
        )}
        <DialogFooter>
          <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={submit} disabled={busy}>{busy && <Spinner />} {copy.label}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
