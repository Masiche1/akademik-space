import { useState } from "react";
import { useMutation } from "convex/react";
import { Copy, LogOut, RotateCcw, Users } from "lucide-react";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api.js";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog.tsx";
import { errorMessage } from "@/lib/errors.ts";
import { ORG_KIND_META, ROLE_LABEL, formatCode } from "@/lib/orgs.ts";
import type { Enrollment } from "@/hooks/use-account.ts";

function CodeRow({ label, hint, code, onRegenerate }: { label: string; hint: string; code: string; onRegenerate: () => Promise<void> }) {
  const [busy, setBusy] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      toast.success("Code copied");
    } catch {
      toast.error("Could not copy. Select the code and copy it manually.");
    }
  };
  const regenerate = async () => {
    setBusy(true);
    await onRegenerate();
    setBusy(false);
  };
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-xl bg-muted/60 p-3">
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="select-all font-mono text-xl font-semibold tracking-[0.2em]">{formatCode(code)}</p>
        <p className="text-xs text-muted-foreground">{hint}</p>
      </div>
      <div className="flex gap-1">
        <Button size="icon" variant="ghost" onClick={copy} aria-label={`Copy ${label.toLowerCase()}`}><Copy className="size-4" /></Button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button size="icon" variant="ghost" disabled={busy} aria-label={`Replace ${label.toLowerCase()}`}><RotateCcw className="size-4" /></Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Replace this code?</AlertDialogTitle>
              <AlertDialogDescription>The old code stops working straight away. People who already joined stay enrolled.</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={regenerate}>Replace code</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

export default function EnrollmentCard({ enrollment: e }: { enrollment: Enrollment }) {
  const regenerate = useMutation(api.account.regenerateCode);
  const leave = useMutation(api.account.leave);
  const meta = ORG_KIND_META[e.kind];
  const isCreator = e.role === "owner" || e.role === "admin";

  const replace = (which: "student" | "staff") => async () => {
    try {
      await regenerate({ orgId: e.orgId, which });
      toast.success("New code ready");
    } catch (err) {
      toast.error(errorMessage(err, "Could not replace the code"));
    }
  };
  const onLeave = async () => {
    try {
      await leave({ orgId: e.orgId });
      toast.success(`You left ${e.name}`);
    } catch (err) {
      toast.error(errorMessage(err, "Could not leave"));
    }
  };

  return (
    <div className="flex min-w-0 flex-col gap-4 rounded-2xl border bg-card p-5">
      <div className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary"><meta.icon className="size-5 text-chart-1" /></span>
        <div className="min-w-0 flex-1">
          <p className="truncate font-serif text-lg font-semibold">{e.name}</p>
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <Badge variant="secondary">{meta.label}</Badge>
            <Badge>{ROLE_LABEL[e.role]}</Badge>
          </div>
        </div>
      </div>
      {isCreator && (
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Users className="size-4" /> {e.studentCount} {e.studentCount === 1 ? "student" : "students"}
          {e.kind !== "tutor" && `, ${e.staffCount} staff`}
        </p>
      )}
      {e.studentCode && <CodeRow label="Student code" hint="Learners enter this to enrol." code={e.studentCode} onRegenerate={replace("student")} />}
      {e.staffCode && <CodeRow label="Staff code" hint="Teachers with educator accounts enter this to join as staff." code={e.staffCode} onRegenerate={replace("staff")} />}
      {!isCreator && (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="ghost" size="sm" className="self-start text-muted-foreground"><LogOut className="size-4" /> Leave</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Leave {e.name}?</AlertDialogTitle>
              <AlertDialogDescription>Your own practice and progress stay with your account. You can rejoin later with a code.</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={onLeave}>Leave</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
}
