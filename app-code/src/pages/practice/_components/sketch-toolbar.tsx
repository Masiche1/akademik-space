import { useEffect, type ReactNode } from "react";
import { Calculator, Eraser, Highlighter, Minus, MousePointer2, PenLine, Redo2, Sigma, Trash2, Undo2 } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover.tsx";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { cn } from "@/lib/utils.ts";
import { HIGHLIGHT_COLORS, INK, PEN_COLORS, SIZES, type SketchTool } from "../_lib/sketch.ts";
import type { SketchState } from "../_hooks/use-sketch.ts";
import CalculatorPanel from "./calculator-panel.tsx";
import FormulaSheet from "./formula-sheet.tsx";

const TOOLS: { id: SketchTool; label: string; icon: typeof PenLine; shortcut: string }[] = [
  { id: "pointer", label: "Select and answer", icon: MousePointer2, shortcut: "V" },
  { id: "pen", label: "Pen", icon: PenLine, shortcut: "P" },
  { id: "highlighter", label: "Highlighter", icon: Highlighter, shortcut: "H" },
  { id: "line", label: "Straight line", icon: Minus, shortcut: "L" },
  { id: "eraser", label: "Eraser", icon: Eraser, shortcut: "E" },
];

type Props = {
  sketch: SketchState;
  tool: SketchTool;
  onToolChange: (tool: SketchTool) => void;
  color: string;
  onColorChange: (color: string) => void;
  size: number;
  onSizeChange: (size: number) => void;
  /** Show the calculator and formula sheet (maths courses only). */
  mathsTools?: boolean;
};

function ToolButton({ label, active, disabled, onClick, children }: {
  label: string; active?: boolean; disabled?: boolean; onClick?: () => void; children: ReactNode;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button type="button" aria-label={label} aria-pressed={active} disabled={disabled} onClick={onClick}
          className={cn("flex size-7 shrink-0 items-center sm:size-9 justify-center rounded-lg transition-colors cursor-pointer disabled:cursor-default disabled:opacity-35",
            active ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-muted hover:text-foreground")}>
          {children}
        </button>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  );
}

function Swatch({ color, label, active, onClick }: { color: string; label: string; active: boolean; onClick: () => void }) {
  return (
    <button type="button" aria-label={label} aria-pressed={active} onClick={onClick} title={label}
      className={cn("flex size-7 shrink-0 items-center justify-center rounded-full border-2 transition-transform cursor-pointer",
        active ? "border-foreground scale-110" : "border-transparent hover:scale-105")}>
      <span className={cn("size-4 rounded-full", color === INK && "bg-foreground")} style={color === INK ? undefined : { backgroundColor: color }} />
    </button>
  );
}

const isTyping = (el: EventTarget | null) =>
  el instanceof HTMLElement && (el.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName));

/** Toolbar shown above the question: annotation tools, undo/redo, calculator and formula sheet. */
export default function SketchToolbar({ sketch, tool, onToolChange, color, onColorChange, size, onSizeChange, mathsTools = true }: Props) {
  const colors = tool === "highlighter" ? HIGHLIGHT_COLORS : PEN_COLORS;
  const showStyle = tool === "pen" || tool === "highlighter" || tool === "line";

  const selectTool = (t: SketchTool) => {
    onToolChange(t);
    // Switching between highlighter and pen should pick a color that suits the tool.
    if (t === "highlighter" && !HIGHLIGHT_COLORS.some((c) => c.value === color)) onColorChange(HIGHLIGHT_COLORS[0].value);
    if ((t === "pen" || t === "line") && !PEN_COLORS.some((c) => c.value === color)) onColorChange(INK);
  };

  // Keyboard shortcuts (a browser event subscription, so useEffect is appropriate).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (isTyping(e.target)) return;
      const mod = e.metaKey || e.ctrlKey;
      if (mod && e.key.toLowerCase() === "z") {
        e.preventDefault();
        if (e.shiftKey) sketch.redo();
        else sketch.undo();
        return;
      }
      if (mod || e.altKey) return;
      const match = TOOLS.find((t) => t.shortcut.toLowerCase() === e.key.toLowerCase());
      if (match) selectTool(match.id);
      if (e.key === "Escape") onToolChange("pointer");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <div className="flex items-center gap-0.5 overflow-x-auto rounded-xl border bg-card/95 p-1 sm:gap-1 sm:p-1.5 shadow-sm backdrop-blur [scrollbar-width:none]">
      <div className="flex shrink-0 items-center gap-0.5" role="toolbar" aria-label="Annotation tools">
        {TOOLS.map((t) => (
          <ToolButton key={t.id} label={`${t.label} (${t.shortcut})`} active={tool === t.id} onClick={() => selectTool(t.id)}>
            <t.icon className="size-4" />
          </ToolButton>
        ))}
      </div>

      {showStyle && (
        <>
          <Separator orientation="vertical" className="mx-0 !h-6 shrink-0 sm:mx-1" />
          <div className="flex shrink-0 items-center gap-0.5">
            {colors.map((c) => (
              <Swatch key={c.value} color={c.value} label={c.label} active={color === c.value} onClick={() => onColorChange(c.value)} />
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-0.5 pl-1">
            {SIZES.map((s) => (
              <ToolButton key={s.value} label={s.label} active={size === s.value} onClick={() => onSizeChange(s.value)}>
                <span className="rounded-full bg-current" style={{ width: s.value + 3, height: s.value + 3 }} />
              </ToolButton>
            ))}
          </div>
        </>
      )}

      <Separator orientation="vertical" className="mx-0 !h-6 shrink-0 sm:mx-1" />
      <div className="flex shrink-0 items-center gap-0.5">
        <ToolButton label="Undo (Ctrl+Z)" disabled={!sketch.canUndo} onClick={sketch.undo}><Undo2 className="size-4" /></ToolButton>
        <ToolButton label="Redo (Ctrl+Shift+Z)" disabled={!sketch.canRedo} onClick={sketch.redo}><Redo2 className="size-4" /></ToolButton>
        <ToolButton label="Clear all annotations" disabled={sketch.strokes.length === 0} onClick={sketch.clear}><Trash2 className="size-4" /></ToolButton>
      </div>

      {mathsTools && <div className="ml-auto flex shrink-0 items-center gap-0.5">
        <Popover>
          <Tooltip>
            <TooltipTrigger asChild>
              <PopoverTrigger asChild>
                <button type="button" aria-label="Calculator"
                  className="flex h-7 shrink-0 items-center gap-1.5 rounded-lg px-1.5 sm:h-9 sm:px-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer">
                  <Calculator className="size-4" /><span className="hidden sm:inline">Calculator</span>
                </button>
              </PopoverTrigger>
            </TooltipTrigger>
            <TooltipContent>Scientific calculator</TooltipContent>
          </Tooltip>
          <PopoverContent align="end" className="w-auto">
            <CalculatorPanel />
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <button type="button" aria-label="Formula sheet"
              className="flex h-7 shrink-0 items-center gap-1.5 rounded-lg px-1.5 sm:h-9 sm:px-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer">
              <Sigma className="size-4" /><span className="hidden sm:inline">Formulas</span>
            </button>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-auto">
            <FormulaSheet />
          </PopoverContent>
        </Popover>
      </div>}
    </div>
  );
}
