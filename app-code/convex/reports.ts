import { ConvexError, v } from "convex/values";
import { mutation } from "./_generated/server";
import { currentUser } from "./lib/auth.ts";
import { bumpDaily } from "./lib/analytics.ts";

export const REPORT_REASON = v.union(
  v.literal("incorrect_answer"),
  v.literal("markscheme_error"),
  v.literal("unclear_wording"),
  v.literal("typo_or_formatting"),
  v.literal("other"),
);

/** Anyone can report a question; signed-in reporters are linked for follow-up. */
export const create = mutation({
  args: {
    questionId: v.string(),
    reason: REPORT_REASON,
    details: v.string(),
  },
  handler: async (ctx, args) => {
    const details = args.details.trim();
    if (details.length > 2000) {
      throw new ConvexError({ code: "BAD_REQUEST", message: "Details must be under 2000 characters" });
    }
    if (args.questionId.length === 0 || args.questionId.length > 200) {
      throw new ConvexError({ code: "BAD_REQUEST", message: "Invalid question" });
    }
    const reporter = await currentUser(ctx);
    await ctx.db.insert("questionReports", {
      questionId: args.questionId,
      reason: args.reason,
      details,
      reporterId: reporter?._id,
      status: "open",
    });
    await bumpDaily(ctx, "reports");
    return null;
  },
});
