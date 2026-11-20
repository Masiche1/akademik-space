import { useState } from "react";
import { useMutation } from "convex/react";
import { ConvexError } from "convex/values";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api.js";
import { Button } from "@/components/ui/button.tsx";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog.tsx";
import { Label } from "@/components/ui/label.tsx";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Spinner } from "@/components/ui/spinner.tsx";

const REASONS = [
  { value: "incorrect_answer", label: "The answer is wrong" },
  { value: "markscheme_error", label: "Error in the markscheme" },
  { value: "unclear_wording", label: "Question is unclear" },
  { value: "typo_or_formatting", label: "Typo or math display issue" },
  { value: "other", label: "Something else" },
] as const;

type Reason = (typeof REASONS)[number]["value"];

type Props = { open: boolean; onOpenChange: (open: boolean) => void; questionId: string };

export default function ReportDialog({ open, onOpenChange, questionId }: Props) {
  const createReport = useMutation(api.reports.create);
  const [reason, setReason] = useState<Reason>("incorrect_answer");
  const [details, setDetails] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const submit = async () => {
    setSubmitting(true);
    try {
      await createReport({ questionId, reason, details });
      toast.success("Thanks, our content team will review this question.");
      setDetails("");
      onOpenChange(false);
    } catch (error) {
      const message = error instanceof ConvexError ? (error.data as { message: string }).message : "Could not send report";
      toast.error(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Report this question</DialogTitle>
          <DialogDescription>Tell us what is wrong so we can fix it quickly.</DialogDescription>
        </DialogHeader>
        <RadioGroup value={reason} onValueChange={(v) => setReason(v as Reason)} className="gap-2">
          {REASONS.map((r) => (
            <Label key={r.value} className="flex cursor-pointer items-center gap-3 rounded-lg border p-3 font-normal">
              <RadioGroupItem value={r.value} /> {r.label}
            </Label>
          ))}
        </RadioGroup>
        <Textarea placeholder="Optional: describe the issue (e.g. step 2 should be x = 4)" value={details}
          maxLength={2000} onChange={(e) => setDetails(e.target.value)} />
        <DialogFooter>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button onClick={submit} disabled={submitting}>{submitting && <Spinner />} Send report</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
