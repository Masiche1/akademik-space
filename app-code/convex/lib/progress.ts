/** A question counts as secure once the student's best score reaches this share of its marks. */
export const SECURE_RATIO = 0.8;

export type AttemptStatus = "correct" | "partial" | "incorrect" | "self";

export type QuestionTotals = { bestMarks: number; totalMarks: number };

export function isSecure({ bestMarks, totalMarks }: QuestionTotals): boolean {
  return totalMarks > 0 && bestMarks / totalMarks >= SECURE_RATIO;
}

export type CourseDelta = {
  questionsAttempted: number;
  questionsSecure: number;
  marksEarned: number;
  marksAvailable: number;
};

/**
 * Applies one attempt to a question's saved totals and returns the change to the course totals.
 * Course totals only count each question's best score, so retries never double-count.
 */
export function applyAttempt(
  existing: QuestionTotals | null,
  marks: number,
  totalMarks: number,
): { bestMarks: number; delta: CourseDelta } {
  const before = existing ?? { bestMarks: 0, totalMarks };
  const bestMarks = Math.max(before.bestMarks, marks);
  const after = { bestMarks, totalMarks: before.totalMarks };
  return {
    bestMarks,
    delta: {
      questionsAttempted: existing ? 0 : 1,
      questionsSecure: Number(isSecure(after)) - Number(existing ? isSecure(existing) : false),
      marksEarned: bestMarks - before.bestMarks,
      marksAvailable: existing ? 0 : totalMarks,
    },
  };
}

/** Returns an error message when the attempt's numbers are invalid, otherwise null. */
export function validateAttempt(marks: number, totalMarks: number): string | null {
  if (!Number.isInteger(totalMarks) || totalMarks < 1 || totalMarks > 100) return "Invalid question marks";
  if (!Number.isInteger(marks) || marks < 0 || marks > totalMarks) return `Marks must be a whole number from 0 to ${totalMarks}`;
  return null;
}
