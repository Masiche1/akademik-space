import { useState, type FormEvent } from "react";
import { useMutation } from "convex/react";
import { KeyRound } from "lucide-react";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api.js";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Spinner } from "@/components/ui/spinner.tsx";
import { errorMessage } from "@/lib/errors.ts";
import { ORG_KIND_META, ROLE_LABEL } from "@/lib/orgs.ts";

export default function JoinWithCode({ isEducator }: { isEducator: boolean }) {
  const join = useMutation(api.account.joinWithCode);
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (code.replace(/[\s-]/g, "").length < 4) {
      setError("Enter the code your tutor or school gave you");
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const res = await join({ code });
      toast.success(`Joined ${res.name}`, { description: `${ORG_KIND_META[res.kind].label}, as ${ROLE_LABEL[res.role].toLowerCase()}` });
      setCode("");
    } catch (err) {
      setError(errorMessage(err, "Could not join with that code"));
    } finally {
      setBusy(false);
    }
  };

  return (
    <form onSubmit={submit} className="rounded-2xl border bg-card p-5">
      <div className="flex items-center gap-2">
        <KeyRound className="size-4 text-chart-1" />
        <Label htmlFor="join-code" className="font-semibold">Join with a code</Label>
      </div>
      <p className="pt-1 text-sm text-muted-foreground">
        {isEducator ? "Enter a school or district staff code to join as a teacher, or a student code to enrol." : "Enter the code from your tutor, school or district."}
      </p>
      <div className="flex gap-2 pt-4">
        <Input id="join-code" value={code} onChange={(e) => setCode(e.target.value)} placeholder="ABC-D234" maxLength={20}
          autoComplete="off" className="font-mono uppercase tracking-widest" aria-invalid={error !== null} />
        <Button type="submit" disabled={busy}>{busy && <Spinner />} Join</Button>
      </div>
      {error && <p className="pt-2 text-sm text-destructive" role="alert">{error}</p>}
    </form>
  );
}
