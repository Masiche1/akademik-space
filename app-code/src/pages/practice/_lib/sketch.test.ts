import { describe, expect, it } from "vitest";
import { hitsStroke, type Stroke } from "./sketch.ts";

const pen = (points: Stroke["points"], size = 2): Stroke => ({ tool: "pen", color: "ink", size, points });

describe("hitsStroke", () => {
  it("detects an eraser touching the middle of a segment", () => {
    expect(hitsStroke(pen([[0, 0], [100, 0]]), [50, 5], 6)).toBe(true);
    expect(hitsStroke(pen([[0, 0], [100, 0]]), [50, 20], 6)).toBe(false);
  });

  it("does not extend past segment end points", () => {
    expect(hitsStroke(pen([[0, 0], [100, 0]]), [130, 0], 6)).toBe(false);
  });

  it("treats a line stroke as its two end points only", () => {
    const line: Stroke = { tool: "line", color: "ink", size: 2, points: [[0, 0], [50, 80], [100, 0]] };
    expect(hitsStroke(line, [50, 0], 4)).toBe(true);
    expect(hitsStroke(line, [50, 80], 4)).toBe(false);
  });

  it("accounts for highlighter width and single-point dots", () => {
    const hl: Stroke = { tool: "highlighter", color: "#facc15", size: 4, points: [[0, 0], [100, 0]] };
    expect(hitsStroke(hl, [50, 12], 2)).toBe(true);
    expect(hitsStroke(pen([[10, 10]]), [12, 12], 4)).toBe(true);
  });
});
