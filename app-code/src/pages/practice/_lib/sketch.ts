/** Sketch pad model and canvas rendering. Coordinates are CSS pixels relative to the annotated area. */

export type SketchTool = "pointer" | "pen" | "highlighter" | "line" | "eraser";
export type DrawTool = Exclude<SketchTool, "pointer" | "eraser">;
export type Point = [number, number];

export type Stroke = {
  tool: DrawTool;
  /** A CSS color, or INK for the theme's foreground color (adapts to light/dark mode). */
  color: string;
  size: number;
  points: Point[];
};

export const INK = "ink";

export const PEN_COLORS = [
  { value: INK, label: "Ink" },
  { value: "#2563eb", label: "Blue" },
  { value: "#dc2626", label: "Red" },
  { value: "#16a34a", label: "Green" },
  { value: "#ea580c", label: "Orange" },
] as const;

export const HIGHLIGHT_COLORS = [
  { value: "#facc15", label: "Yellow" },
  { value: "#4ade80", label: "Green" },
  { value: "#f472b6", label: "Pink" },
  { value: "#60a5fa", label: "Blue" },
] as const;

export const SIZES = [
  { value: 2, label: "Fine" },
  { value: 4, label: "Medium" },
  { value: 7, label: "Bold" },
] as const;

const HIGHLIGHT_SCALE = 5;

export function strokeWidth(stroke: Pick<Stroke, "tool" | "size">): number {
  return stroke.tool === "highlighter" ? stroke.size * HIGHLIGHT_SCALE : stroke.size;
}

function tracePath(ctx: CanvasRenderingContext2D, points: Point[]) {
  const [first, ...rest] = points;
  if (!first) return;
  ctx.beginPath();
  ctx.moveTo(first[0], first[1]);
  if (rest.length === 0) {
    // A tap draws a dot.
    ctx.lineTo(first[0] + 0.01, first[1] + 0.01);
    return;
  }
  // Smooth freehand lines through segment midpoints.
  for (let i = 0; i < rest.length - 1; i++) {
    const p = rest[i] as Point;
    const q = rest[i + 1] as Point;
    ctx.quadraticCurveTo(p[0], p[1], (p[0] + q[0]) / 2, (p[1] + q[1]) / 2);
  }
  const last = rest[rest.length - 1] as Point;
  ctx.lineTo(last[0], last[1]);
}

export function drawStroke(ctx: CanvasRenderingContext2D, stroke: Stroke, inkColor: string) {
  ctx.save();
  ctx.lineCap = stroke.tool === "highlighter" ? "butt" : "round";
  ctx.lineJoin = "round";
  ctx.lineWidth = strokeWidth(stroke);
  ctx.strokeStyle = stroke.color === INK ? inkColor : stroke.color;
  if (stroke.tool === "highlighter") {
    // Plain transparency keeps highlights visible on both light and dark backgrounds.
    ctx.globalAlpha = 0.35;
  }
  const points = stroke.tool === "line" ? [stroke.points[0], stroke.points[stroke.points.length - 1]].filter((p): p is Point => !!p) : stroke.points;
  tracePath(ctx, points);
  ctx.stroke();
  ctx.restore();
}

function distanceToSegment(p: Point, a: Point, b: Point): number {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const lenSq = dx * dx + dy * dy;
  const t = lenSq === 0 ? 0 : Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / lenSq));
  return Math.hypot(p[0] - (a[0] + t * dx), p[1] - (a[1] + t * dy));
}

/** Whether an eraser at point p with the given radius touches the stroke. */
export function hitsStroke(stroke: Stroke, p: Point, radius: number): boolean {
  const reach = radius + strokeWidth(stroke) / 2;
  const pts = stroke.tool === "line" ? [stroke.points[0], stroke.points[stroke.points.length - 1]].filter((q): q is Point => !!q) : stroke.points;
  if (pts.length === 1) return Math.hypot(p[0] - (pts[0] as Point)[0], p[1] - (pts[0] as Point)[1]) <= reach;
  for (let i = 0; i < pts.length - 1; i++) {
    if (distanceToSegment(p, pts[i] as Point, pts[i + 1] as Point) <= reach) return true;
  }
  return false;
}
