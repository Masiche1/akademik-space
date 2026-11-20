import type { MutationCtx } from "../_generated/server";
import type { Id } from "../_generated/dataModel.d.ts";
import { DAILY_FIELDS } from "../schema.ts";

export type DailyField = (typeof DAILY_FIELDS)[number];
export type DailyCounts = Record<DailyField, number>;

export const ANALYTICS_RANGES = [7, 30, 90] as const;
export type AnalyticsRange = (typeof ANALYTICS_RANGES)[number];
const DAY_MS = 86_400_000;

/** The UTC calendar day of an instant, as YYYY-MM-DD. */
export const utcDay = (ms: number) => new Date(ms).toISOString().slice(0, 10);

export const emptyCounts = (): DailyCounts => ({ signups: 0, activeLearners: 0, attempts: 0, setsSubmitted: 0, reports: 0, orgsCreated: 0 });

/** The days in a range ending today, oldest first. */
export function dayRange(endMs: number, days: number): string[] {
  return Array.from({ length: days }, (_, i) => utcDay(endMs - (days - 1 - i) * DAY_MS));
}

/** One point per day in the range, with zeros for days that had no activity. */
export function fillSeries(rows: ({ day: string } & DailyCounts)[], endMs: number, days: number) {
  const byDay = new Map(rows.map((r) => [r.day, r]));
  return dayRange(endMs, days).map((day) => {
    const row = byDay.get(day);
    const counts = emptyCounts();
    if (row) for (const f of DAILY_FIELDS) counts[f] = row[f];
    return { day, ...counts };
  });
}

export function sumSeries(series: DailyCounts[]): DailyCounts {
  const total = emptyCounts();
  for (const point of series) for (const f of DAILY_FIELDS) total[f] += point[f];
  return total;
}

/** Adds to today's counters. */
export async function bumpDaily(ctx: MutationCtx, field: DailyField, by = 1) {
  const day = utcDay(Date.now());
  const row = await ctx.db.query("dailyStats").withIndex("by_day", (q) => q.eq("day", day)).unique();
  const counts = emptyCounts();
  if (row) for (const f of DAILY_FIELDS) counts[f] = row[f];
  counts[field] += by;
  if (row) await ctx.db.patch("dailyStats", row._id, counts);
  else await ctx.db.insert("dailyStats", { day, ...counts });
}

/** Counts the learner as active today, once per day. */
export async function markActive(ctx: MutationCtx, userId: Id<"users">) {
  const day = utcDay(Date.now());
  const seen = await ctx.db.query("dailyActive").withIndex("by_day_and_user", (q) => q.eq("day", day).eq("userId", userId)).unique();
  if (seen) return;
  await ctx.db.insert("dailyActive", { day, userId });
  await bumpDaily(ctx, "activeLearners");
}

/** Adds an attempt to a course's totals; newLearner when this is the student's first work on the course. */
export async function bumpCourse(ctx: MutationCtx, courseId: string, newLearner: boolean) {
  const row = await ctx.db.query("courseStats").withIndex("by_courseId", (q) => q.eq("courseId", courseId)).unique();
  if (row) await ctx.db.patch("courseStats", row._id, { attempts: row.attempts + 1, learners: row.learners + (newLearner ? 1 : 0) });
  else await ctx.db.insert("courseStats", { courseId, attempts: 1, learners: newLearner ? 1 : 0 });
}
