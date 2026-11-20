import { useState, type ReactNode } from "react";
import { toast } from "sonner";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Spinner } from "@/components/ui/spinner.tsx";
import { errorMessage } from "@/lib/errors.ts";

type Props = {
  label: ReactNode;
  title: string;
  description: string;
  confirmLabel: string;
  success: string;
  onConfirm: () => Promise<unknown>;
  variant?: "default" | "secondary" | "destructive" | "ghost";
  size?: "sm" | "default";
  destructive?: boolean;
};

/** A button that asks before running an admin action, then reports the result. */
export default function ConfirmButton({ label, title, description, confirmLabel, success, onConfirm, variant = "secondary", size = "sm", destructive }: Props) {
  const [busy, setBusy] = useState(false);
  const run = async () => {
    setBusy(true);
    try {
      await onConfirm();
      toast.success(success);
    } catch (e) {
      toast.error(errorMessage(e));
    } finally {
      setBusy(false);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={variant} size={size} disabled={busy}>{busy && <Spinner />}{label}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={run} className={destructive ? "bg-destructive text-white hover:bg-destructive/90" : undefined}>{confirmLabel}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
