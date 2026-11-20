import type { MutationCtx } from "../_generated/server";
import type { Id } from "../_generated/dataModel.d.ts";
import { MAX_STUDENTS_PER_CLASS, fail } from "./teach.ts";

export const MAX_TERM_REPORTS_PER_CLASS = 40;
export const MAX_COMMENT = 1500;
/** Comments can outlive a student's place on the roster, so deletes read a little past the roster limit. */
export const MAX_COMMENTS_PER_REPORT = MAX_STUDENTS_PER_CLASS * 2;
const MAX_TERM_DAYS = 400;
const DAY_RE = /^\d{4}-\d{2}-\d{2}$/;

export type TermInput = { title: string; startDate: string; endDate: string; startsAt: string; endsAt: string };

/** Throws a readable error for a bad title or date range. Returns the trimmed title. */
export function validateTerm(args: TermInput): string {
  const title = args.title.trim();
  if (title.length < 1) throw fail("BAD_REQUEST", "Give the report a title");
  if (title.length > 80) throw fail("BAD_REQUEST", "Titles must be 80 characters or fewer");
  if (!DAY_RE.test(args.startDate) || !DAY_RE.test(args.endDate)) throw fail("BAD_REQUEST", "Invalid term dates");
  if (args.endDate < args.startDate) throw fail("BAD_REQUEST", "The term must end after it starts");
  const starts = Date.parse(args.startsAt);
  const ends = Date.parse(args.endsAt);
  if (Number.isNaN(starts) || Number.isNaN(ends) || ends <= starts) throw fail("BAD_REQUEST", "Invalid term dates");
  if (ends - starts > MAX_TERM_DAYS * 86_400_000) throw fail("BAD_REQUEST", `A term can be at most ${MAX_TERM_DAYS} days long`);
  return title;
}

export function validateComment(raw: string): string {
  const comment = raw.trim();
  if (comment.length > MAX_COMMENT) throw fail("BAD_REQUEST", `Comments must be ${MAX_COMMENT} characters or fewer`);
  return comment;
}

/** True when an ISO instant falls inside the term window (inclusive). ISO strings in UTC sort lexicographically. */
export const inTerm = (iso: string, term: { startsAt: string; endsAt: string }) => iso >= term.startsAt && iso <= term.endsAt;

export async function deleteTermReport(ctx: MutationCtx, reportId: Id<"termReports">) {
  const comments = await ctx.db.query("termReportComments").withIndex("by_report_and_user", (q) => q.eq("reportId", reportId)).take(MAX_COMMENTS_PER_REPORT);
  await Promise.all(comments.map((c) => ctx.db.delete("termReportComments", c._id)));
  await ctx.db.delete("termReports", reportId);
}
