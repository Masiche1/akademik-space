import type { MarkLevel } from "../../../types.ts";

/** Builds a five-level holistic scheme whose top band equals the marks available. */
export function bands(top: number, focus: string, part?: string): MarkLevel[] {
  const descriptors = [
    `Simple, limited ${focus}; few relevant references.`,
    `Some ${focus}; some relevant references.`,
    `Clear, relevant ${focus}; appropriate references.`,
    `Thorough, well-developed ${focus}; well-chosen references.`,
    `Perceptive, discriminating ${focus}; assured, precisely chosen references.`,
  ];
  return descriptors
    .map((descriptor, i) => {
      const hi = Math.round((top * (i + 1)) / 5);
      const lo = i === 0 ? 1 : Math.round((top * i) / 5) + 1;
      return { level: `Level ${i + 1}`, marks: lo >= hi ? String(hi) : `${lo}-${hi}`, descriptor, ...(part ? { part } : {}) };
    })
    .reverse();
}
