import type { MarkLevel } from "../../../types.ts";

const LEVEL_TEXT = [
  "Simple, limited response; little relevant reference to the text.",
  "Some understanding; some relevant references, but comment is often general.",
  "Clear, relevant response; appropriate references and some analysis of the writer's methods.",
  "Thorough, developed analysis; well-chosen references and clear focus on effects.",
  "Perceptive, discriminating and assured analysis; precisely chosen, judicious references.",
];

/** Builds level descriptors (highest first) whose top band equals the marks available. */
export function levels(top: number, part?: string): MarkLevel[] {
  const step = top > 10 ? 3 : 2;
  const count = Math.ceil(top / step);
  const out: MarkLevel[] = [];
  for (let i = count; i >= 1; i--) {
    const hi = Math.min(i * step, top);
    const lo = (i - 1) * step + 1;
    const idx = count === 1 ? 0 : Math.round(((i - 1) * 4) / (count - 1));
    out.push({
      level: `Level ${i}`,
      marks: lo === hi ? `${lo}` : `${lo}-${hi}`,
      descriptor: LEVEL_TEXT[idx] ?? "",
      ...(part ? { part } : {}),
    });
  }
  return out;
}
