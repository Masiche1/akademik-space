import { ChevronsDown, PenLine } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import type { SketchState } from "../_hooks/use-sketch.ts";

/** Working space below the question: graph paper for maths, lined paper for English planning. */
export function WorkspaceArea({ height, lined = false }: { height: number; lined?: boolean }) {
  return (
    <div aria-hidden className="mt-6 rounded-xl border border-dashed bg-background/60"
      style={{
        height,
        backgroundImage: lined
          ? "linear-gradient(to bottom, var(--border) 1px, transparent 1px)"
          : "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
        backgroundSize: lined ? "100% 32px" : "24px 24px",
        backgroundPosition: "-1px -1px",
      }}>
      <p className="select-none px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground/80">
        {lined ? "Planning space" : "Working space"}
      </p>
    </div>
  );
}

export function WorkspaceFooter({ sketch, drawing, onStartDrawing }: { sketch: SketchState; drawing: boolean; onStartDrawing: () => void }) {
  return (
    <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-muted-foreground">
      {drawing ? (
        <span>Drawing on. Press <kbd className="rounded border bg-muted px-1 font-mono">Esc</kbd> or choose the pointer to answer.</span>
      ) : (
        <button type="button" onClick={onStartDrawing} className="flex items-center gap-1 hover:text-foreground cursor-pointer">
          <PenLine className="size-3.5" /> Pick up the pen to annotate the question or show working
        </button>
      )}
      <Button type="button" variant="ghost" size="sm" className="ml-auto h-7 text-xs" disabled={!sketch.canExtend} onClick={sketch.extendWorkspace}>
        <ChevronsDown className="size-3.5" /> Extend working space
      </Button>
    </div>
  );
}
