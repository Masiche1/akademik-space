import { useState } from "react";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { Check, CloudCheck, Save } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Spinner } from "@/components/ui/spinner.tsx";
import { SignInButton } from "@/components/ui/signin.tsx";
import { cn } from "@/lib/utils.ts";
import { saveErrorMessage } from "../_lib/save-error.ts";

type SelfMarkProps = {
  totalMarks: number;
  onSave: (marks: number) => Promise<void>;
};

/** Self-assessment: the student awards themselves marks against the markscheme. */
function SelfMarkForm({ totalMarks, onSave }: SelfMarkProps) {
  const [marks, setMarks] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState<number | null>(null);

  const save = async () => {
    if (marks === null) return;
    setSaving(true);
    try {
      await onSave(marks);
      setSaved(marks);
    } catch (error) {
      toast.error(saveErrorMessage(error));
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-3">
      <p className="text-sm">
        <span className="font-semibold">Mark yourself.</span>{" "}
        <span className="text-muted-foreground">Use the markscheme below, then pick the marks you earned.</span>
      </p>
      <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label="Marks awarded">
        {Array.from({ length: totalMarks + 1 }, (_, m) => (
          <button key={m} type="button" role="radio" aria-checked={marks === m} onClick={() => setMarks(m)}
            className={cn("flex size-9 items-center justify-center rounded-md border font-mono text-sm transition-colors cursor-pointer",
              marks === m ? "border-primary bg-primary text-primary-foreground" : "bg-background hover:border-primary/50")}>
            {m}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button size="sm" onClick={save} disabled={marks === null || saving || marks === saved}>
          {saving ? <Spinner /> : <Save className="size-4" />} Save {marks ?? "?"} / {totalMarks}
        </Button>
        {saved !== null && (
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-1 text-sm text-chart-3">
            <Check className="size-4" /> Saved to your progress
          </motion.span>
        )}
      </div>
    </div>
  );
}

type Props = {
  /** Null for self-assessed answers. */
  autoMarks: number | null;
  autoSaved: "saving" | "saved" | "error" | null;
} & SelfMarkProps;

/** Shown under the result: saves the attempt, or asks signed-out students to sign in. */
export default function AttemptSaver({ autoMarks, autoSaved, totalMarks, onSave }: Props) {
  return (
    <div className="mt-3 rounded-xl border bg-background p-4">
      <Unauthenticated>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">Sign in to save attempts and track mastery for each concept.</p>
          <SignInButton size="sm" signInText="Sign in to save" />
        </div>
      </Unauthenticated>
      <AuthLoading><Spinner /></AuthLoading>
      <Authenticated>
        {autoMarks === null ? (
          <SelfMarkForm totalMarks={totalMarks} onSave={onSave} />
        ) : (
          <p className="flex items-center gap-2 text-sm">
            {autoSaved === "saving" && <><Spinner /> Saving your attempt...</>}
            {autoSaved === "saved" && (
              <><CloudCheck className="size-4 text-chart-3" /> Saved: <span className="font-mono font-semibold">{autoMarks} / {totalMarks}</span> marks</>
            )}
            {autoSaved === "error" && <span className="text-destructive">This attempt was not saved. Try again to save it.</span>}
          </p>
        )}
      </Authenticated>
    </div>
  );
}
