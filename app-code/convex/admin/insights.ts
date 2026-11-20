import { v } from "convex/values";
import { paginationOptsValidator } from "convex/server";
import { query } from "../_generated/server";
import type { Doc } from "../_generated/dataModel.d.ts";
import { AUDIT_ACTION } from "../schema.ts";
import { requireAdmin } from "../lib/admin.ts";
import { dayRange, fillSeries, sumSeries } from "../lib/analytics.ts";
import { userNames } from "../lib/teach.ts";
import { COURSES, getCourse } from "../../src/content/catalog.ts";

const RANGE = v.union(v.literal(7), v.literal(30), v.literal(90));
const MAX_USER_ENTRIES = 20;

/** Daily usage for the range, totals compared with the period before, and the busiest courses. */
export const analytics = query({
  args: { days: RANGE },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const now = Date.now();
    // Two periods back to back, so the overview can show the change from the previous period.
    const from = dayRange(now, args.days * 2)[0];
    const rows = await ctx.db.query("dailyStats").withIndex("by_day", (q) => q.gte("day", from)).take(args.days * 2 + 1);
    const both = fillSeries(rows, now, args.days * 2);
    const previous = both.slice(0, args.days);
    const series = both.slice(args.days);
    // One row per catalog course at most, so this read stays small.
    const courseRows = await ctx.db.query("courseStats").take(COURSES.length + 20);
    const courses = courseRows
      .flatMap((c) => {
        const course = getCourse(c.courseId);
        return course ? [{ courseId: c.courseId, title: course.title, attempts: c.attempts, learners: c.learners }] : [];
      })
      .sort((a, b) => b.attempts - a.attempts)
      .slice(0, 10);
    return { series, totals: sumSeries(series), previous: sumSeries(previous), courses };
  },
});

async function withNames(ctx: Parameters<typeof userNames>[0], rows: Doc<"auditLog">[]) {
  const people = await userNames(ctx, rows.flatMap((r) => [r.actorId, r.targetUserId].filter((id) => id !== undefined)));
  return rows.map((r) => ({
    entryId: r._id,
    action: r.action,
    summary: r.summary,
    at: new Date(r._creationTime).toISOString(),
    actorId: r.actorId ?? null,
    actorName: r.actorId ? (people.get(r.actorId)?.name ?? "Unknown") : null,
    targetUserId: r.targetUserId ?? null,
  }));
}

/** The audit log, newest first, optionally narrowed to one kind of action. */
export const auditLog = query({
  args: { action: v.union(AUDIT_ACTION, v.literal("all")), paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const action = args.action;
    const result = action === "all"
      ? await ctx.db.query("auditLog").order("desc").paginate(args.paginationOpts)
      : await ctx.db.query("auditLog").withIndex("by_action", (q) => q.eq("action", action)).order("desc").paginate(args.paginationOpts);
    return { ...result, page: await withNames(ctx, result.page) };
  },
});

/** Audit entries recorded so far; the log starts when this feature shipped. */
export const auditForUser = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const rows = await ctx.db.query("auditLog").withIndex("by_targetUserId", (q) => q.eq("targetUserId", args.userId)).order("desc").take(MAX_USER_ENTRIES);
    return await withNames(ctx, rows);
  },
});
