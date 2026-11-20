import { useState } from "react";
import { useMutation } from "convex/react";
import { Check, Download } from "lucide-react";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api.js";
import type { Id } from "@/convex/_generated/dataModel.d.ts";
import { Button } from "@/components/ui/button.tsx";
import { Spinner } from "@/components/ui/spinner.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { useDebouncedCallback } from "@/hooks/use-debounce.ts";
import { errorMessage } from "@/lib/errors.ts";
import { cn } from "@/lib/utils.ts";

const MAX_COMMENT = 1500;

type SaveState = "idle" | "saving" | "saved";

/** One student's row: their comment (saved automatically) and a PDF download. */
export default function StudentCommentRow({
  reportId, userId, name, initial, canEdit, busy, onDownload,
}: {
  reportId: Id<"termReports">;
  userId: Id<"users">;
  name: string;
  initial: string;
  canEdit: boolean;
  busy: boolean;
  onDownload: () => void;
}) {
  const save = useMutation(api.termReports.saveComment);
  const [text, setText] = useState(initial);
  const [state, setState] = useState<SaveState>("idle");

  const persist = useDebouncedCallback(async (comment: string) => {
    setState("saving");
    try {
      await save({ reportId, userId, comment });
      setState("saved");
    } catch (error) {
      setState("idle");
      toast.error(errorMessage(error, `Could not save the comment for ${name}`));
    }
  }, 800);

  return (
    <div className="grid gap-3 p-4 md:grid-cols-[12rem_minmax(0,1fr)_auto] md:items-start">
      <div className="min-w-0">
        <p className="truncate font-medium">{name}</p>
        <p className={cn("flex h-5 items-center gap-1 text-xs text-muted-foreground", state === "saved" && "text-chart-3")}>
          {state === "saving" && <><Spinner className="size-3" /> Saving</>}
          {state === "saved" && <><Check className="size-3" /> Saved</>}
          {state === "idle" && (text.trim() ? "Comment added" : "No comment yet")}
        </p>
      </div>
      {canEdit ? (
        <div className="space-y-1">
          <Textarea
            value={text}
            maxLength={MAX_COMMENT}
            rows={3}
            placeholder={`How ${name.split(" ")[0]} has done this term, and what to focus on next`}
            onChange={(e) => {
              setText(e.target.value);
              setState("idle");
              void persist(e.target.value);
            }}
            onBlur={() => void persist.flush()}
          />
          <p className="text-right text-xs text-muted-foreground">{text.length}/{MAX_COMMENT}</p>
        </div>
      ) : (
        <p className="whitespace-pre-wrap text-sm text-muted-foreground">{text || "No comment."}</p>
      )}
      <Button size="sm" variant="secondary" disabled={busy || state === "saving"} onClick={() => { void persist.flush(); onDownload(); }}>
        {busy ? <Spinner /> : <Download className="size-4" />} PDF
      </Button>
    </div>
  );
}
