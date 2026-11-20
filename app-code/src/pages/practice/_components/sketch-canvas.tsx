import { useCallback, useEffect, useRef, type PointerEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils.ts";
import { drawStroke, hitsStroke, type DrawTool, type Point, type SketchTool, type Stroke } from "../_lib/sketch.ts";
import type { SketchState } from "../_hooks/use-sketch.ts";

const ERASER_RADIUS = 10;

type Props = {
  sketch: SketchState;
  tool: SketchTool;
  color: string;
  size: number;
  /** The question content to annotate. The canvas covers it plus the workspace below. */
  children: ReactNode;
  workspace: ReactNode;
};

/**
 * Transparent drawing layer over the question and its working space.
 * In pointer mode the layer ignores input so students can answer normally.
 */
export default function SketchCanvas({ sketch, tool, color, size, children, workspace }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const liveRef = useRef<Stroke | null>(null);
  const eraserPath = useRef<Point[]>([]);
  const frame = useRef(0);
  const drawing = tool !== "pointer";

  const redraw = useCallback(() => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !container || !ctx) return;
      const dpr = window.devicePixelRatio || 1;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const ink = getComputedStyle(container).color;
      const erasing = eraserPath.current;
      for (const s of sketch.strokes) {
        // While erasing, hide touched strokes immediately; they are removed on release.
        if (erasing.length && erasing.some((p) => hitsStroke(s, p, ERASER_RADIUS))) continue;
        drawStroke(ctx, s, ink);
      }
      if (liveRef.current) drawStroke(ctx, liveRef.current, ink);
    });
  }, [sketch.strokes]);

  // Keep the canvas bitmap matched to the annotated area's size (it grows with the workspace).
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(container.clientWidth * dpr);
      canvas.height = Math.round(container.clientHeight * dpr);
      redraw();
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    // Re-render ink color when the light/dark theme changes.
    const themeObserver = new MutationObserver(redraw);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => {
      observer.disconnect();
      themeObserver.disconnect();
      cancelAnimationFrame(frame.current);
    };
  }, [redraw]);

  const pointFrom = (e: PointerEvent<HTMLCanvasElement>): Point => {
    const rect = e.currentTarget.getBoundingClientRect();
    return [Math.round((e.clientX - rect.left) * 10) / 10, Math.round((e.clientY - rect.top) * 10) / 10];
  };

  const onPointerDown = (e: PointerEvent<HTMLCanvasElement>) => {
    if (!drawing || (e.pointerType === "mouse" && e.button !== 0)) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    const p = pointFrom(e);
    if (tool === "eraser") eraserPath.current = [p];
    else liveRef.current = { tool: tool as DrawTool, color, size, points: [p] };
    redraw();
  };

  const onPointerMove = (e: PointerEvent<HTMLCanvasElement>) => {
    const p = pointFrom(e);
    if (tool === "eraser" && eraserPath.current.length) {
      eraserPath.current.push(p);
      redraw();
      return;
    }
    const live = liveRef.current;
    if (!live) return;
    if (live.tool === "line") live.points = [live.points[0] ?? p, p];
    else {
      const last = live.points[live.points.length - 1];
      // Skip sub-pixel moves to keep strokes compact.
      if (!last || Math.hypot(p[0] - last[0], p[1] - last[1]) >= 1.5) live.points.push(p);
    }
    redraw();
  };

  const finish = () => {
    if (eraserPath.current.length) {
      sketch.eraseAlong(eraserPath.current, ERASER_RADIUS);
      eraserPath.current = [];
    }
    const live = liveRef.current;
    if (live) {
      liveRef.current = null;
      sketch.addStroke(live);
    }
    redraw();
  };

  const cursor = tool === "eraser" ? "cursor-cell" : drawing ? "cursor-crosshair" : "";

  return (
    <div ref={containerRef} className="relative text-foreground">
      {children}
      {workspace}
      <canvas
        ref={canvasRef}
        aria-label="Annotation layer"
        className={cn("absolute inset-0 z-10 size-full", drawing ? "touch-none" : "pointer-events-none", cursor)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={finish}
        onPointerCancel={finish}
      />
    </div>
  );
}
