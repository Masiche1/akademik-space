import { ConvexError, v } from "convex/values";
import { paginationOptsValidator } from "convex/server";
import { mutation, query, type QueryCtx } from "../_generated/server";
import type { Doc, Id } from "../_generated/dataModel.d.ts";
import { adminUser, adminChangeError, MAX_ADMINS, MAX_OPEN_REPORTS, requireAdmin } from "../lib/admin.ts";
import { MAX_MEMBERSHIPS_PER_USER } from "../lib/orgs.ts";
import { removeMembership } from "../lib/members.ts";
import { userByEmail } from "../lib/auth.ts";
import { logAudit, who } from "../lib/audit.ts";
import { getCourse } from "../../src/content/catalog.ts";

const fail = (code: string, message: string) => new ConvexError({ code, message });
/** Counts on the overview stop here and show as "1000+". */
const COUNT_CAP = 1000;
const MAX_COURSES_SHOWN = 30;

export const USER_FILTER = v.union(v.literal("all"), v.literal("admins"), v.literal("suspended"), v.literal("educators"), v.literal("learners"));

const summary = (u: Doc<"users">) => ({
  userId: u._id,
  name: u.name ?? null,
  email: u.email ?? null,
  accountType: u.accountType ?? null,
  isPlatformAdmin: u.isPlatformAdmin === true,
  suspended: u.suspended === true,
  joinedAt: new Date(u._creationTime).toISOString(),
});

async function countAdmins(ctx: QueryCtx) {
  return (await ctx.db.query("users").withIndex("by_isPlatformAdmin", (q) => q.eq("isPlatformAdmin", true)).take(MAX_ADMINS)).length;
}

/** True when the signed-in user is a platform admin. Used to show the portal link. */
export const isAdmin = query({
  args: {},
  handler: async (ctx) => (await adminUser(ctx)) !== null,
});

/** Headline numbers for the admin overview. Bounded reads; large totals show as capped. */
export const overview = query({
  args: {},
  handler: async (ctx) => {
    await requireAdmin(ctx);
    const capped = async (rows: Promise<unknown[]>, cap: number) => {
      const n = (await rows).length;
      return { value: Math.min(n, cap), capped: n > cap };
    };
    const [users, educators, learners, suspended, admins, orgs, openReports] = await Promise.all([
      capped(ctx.db.query("users").take(COUNT_CAP + 1), COUNT_CAP),
      capped(ctx.db.query("users").withIndex("by_accountType", (q) => q.eq("accountType", "educator")).take(COUNT_CAP + 1), COUNT_CAP),
      capped(ctx.db.query("users").withIndex("by_accountType", (q) => q.eq("accountType", "learner")).take(COUNT_CAP + 1), COUNT_CAP),
      capped(ctx.db.query("users").withIndex("by_suspended", (q) => q.eq("suspended", true)).take(COUNT_CAP + 1), COUNT_CAP),
      capped(ctx.db.query("users").withIndex("by_isPlatformAdmin", (q) => q.eq("isPlatformAdmin", true)).take(MAX_ADMINS + 1), MAX_ADMINS),
      capped(ctx.db.query("organizations").take(COUNT_CAP + 1), COUNT_CAP),
      capped(ctx.db.query("questionReports").withIndex("by_status", (q) => q.eq("status", "open")).take(MAX_OPEN_REPORTS + 1), MAX_OPEN_REPORTS),
    ]);
    return { users, educators, learners, suspended, admins, orgs, openReports };
  },
});

/** Every account, newest first, narrowed by a filter or a name or email search. */
export const list = query({
  args: { filter: USER_FILTER, search: v.string(), paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const search = args.search.trim();
    if (search.includes("@")) {
      // Emails are matched exactly; the page is at most one account.
      const user = await userByEmail(ctx, search);
      return { page: user ? [summary(user)] : [], isDone: true, continueCursor: "" };
    }
    const users = ctx.db.query("users");
    const result = search.length > 0
      ? await users.withSearchIndex("search_name", (q) => q.search("name", search)).paginate(args.paginationOpts)
      : args.filter === "admins"
        ? await users.withIndex("by_isPlatformAdmin", (q) => q.eq("isPlatformAdmin", true)).order("desc").paginate(args.paginationOpts)
        : args.filter === "suspended"
          ? await users.withIndex("by_suspended", (q) => q.eq("suspended", true)).order("desc").paginate(args.paginationOpts)
          : args.filter === "educators" || args.filter === "learners"
            ? await users.withIndex("by_accountType", (q) => q.eq("accountType", args.filter === "educators" ? "educator" : "learner")).order("desc").paginate(args.paginationOpts)
            : await users.order("desc").paginate(args.paginationOpts);
    return { ...result, page: result.page.map(summary) };
  },
});

/** One account with its enrolments and practice summary. Null for an unknown id. */
export const get = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    const admin = await requireAdmin(ctx);
    const id = ctx.db.normalizeId("users", args.userId);
    const user = id ? await ctx.db.get("users", id) : null;
    if (!user) return null;
    const memberships = await ctx.db.query("memberships").withIndex("by_user", (q) => q.eq("userId", user._id)).take(MAX_MEMBERSHIPS_PER_USER);
    const orgs = await Promise.all(memberships.map((m) => ctx.db.get("organizations", m.orgId)));
    const courses = await ctx.db.query("courseProgress").withIndex("by_user_and_lastAttemptAt", (q) => q.eq("userId", user._id)).order("desc").take(MAX_COURSES_SHOWN);
    return {
      ...summary(user),
      isSelf: user._id === admin._id,
      memberships: memberships.flatMap((m, i) => {
        const org = orgs[i];
        if (!org) return [];
        return [{ membershipId: m._id, orgId: org._id, orgName: org.name, orgKind: org.kind, role: m.role, joinedAt: m.joinedAt, isCreator: org.createdBy === user._id }];
      }),
      courses: courses.map((c) => ({
        courseId: c.courseId,
        title: getCourse(c.courseId)?.title ?? c.courseId,
        questionsAttempted: c.questionsAttempted,
        questionsSecure: c.questionsSecure,
        lastAttemptAt: c.lastAttemptAt,
      })),
    };
  },
});

async function loadTarget(ctx: QueryCtx, userId: Id<"users">) {
  const user = await ctx.db.get("users", userId);
  if (!user) throw fail("NOT_FOUND", "Account not found");
  return user;
}

/** Suspends or restores an account. Suspended accounts are treated as signed out everywhere. */
export const setSuspended = mutation({
  args: { userId: v.id("users"), suspended: v.boolean() },
  handler: async (ctx, args) => {
    const admin = await requireAdmin(ctx);
    const target = await loadTarget(ctx, args.userId);
    if (args.suspended) {
      const error = adminChangeError(admin, target, "suspend", await countAdmins(ctx));
      if (error) throw fail("FORBIDDEN", error);
    }
    await ctx.db.patch("users", target._id, { suspended: args.suspended });
    await logAudit(ctx, {
      action: args.suspended ? "account_suspended" : "account_restored",
      actorId: admin._id,
      targetUserId: target._id,
      summary: `${who(admin)} ${args.suspended ? "suspended" : "restored"} ${who(target)}`,
    });
    return null;
  },
});

/** Grants or removes platform admin access. */
export const setPlatformAdmin = mutation({
  args: { userId: v.id("users"), isPlatformAdmin: v.boolean() },
  handler: async (ctx, args) => {
    const admin = await requireAdmin(ctx);
    const target = await loadTarget(ctx, args.userId);
    if (args.isPlatformAdmin) {
      if (target.suspended) throw fail("BAD_REQUEST", "Restore this account before making it an admin");
      if ((await countAdmins(ctx)) >= MAX_ADMINS) throw fail("CONFLICT", `The platform can have up to ${MAX_ADMINS} admins`);
    } else {
      const error = adminChangeError(admin, target, "revokeAdmin", await countAdmins(ctx));
      if (error) throw fail("FORBIDDEN", error);
    }
    await ctx.db.patch("users", target._id, { isPlatformAdmin: args.isPlatformAdmin });
    await logAudit(ctx, {
      action: args.isPlatformAdmin ? "admin_granted" : "admin_revoked",
      actorId: admin._id,
      targetUserId: target._id,
      summary: `${who(admin)} ${args.isPlatformAdmin ? "made" : "removed"} ${who(target)} ${args.isPlatformAdmin ? "a platform admin" : "as a platform admin"}`,
    });
    return null;
  },
});

/** Removes an account from an organisation, with the same safeguards as leaving. */
export const removeFromOrg = mutation({
  args: { membershipId: v.id("memberships") },
  handler: async (ctx, args) => {
    const admin = await requireAdmin(ctx);
    const membership = await ctx.db.get("memberships", args.membershipId);
    if (!membership) throw fail("NOT_FOUND", "Enrolment not found");
    const org = await ctx.db.get("organizations", membership.orgId);
    if (!org) throw fail("NOT_FOUND", "Organisation not found");
    await removeMembership(ctx, org, membership, false);
    const target = await ctx.db.get("users", membership.userId);
    await logAudit(ctx, {
      action: "member_removed",
      actorId: admin._id,
      targetUserId: membership.userId,
      orgId: org._id,
      summary: `${who(admin)} removed ${who(target)} from "${org.name}"`,
    });
    return null;
  },
});

/** Promotes a teacher to administrator or back, in a school or district. */
export const setStaffRole = mutation({
  args: { membershipId: v.id("memberships"), role: v.union(v.literal("admin"), v.literal("teacher")) },
  handler: async (ctx, args) => {
    const admin = await requireAdmin(ctx);
    const membership = await ctx.db.get("memberships", args.membershipId);
    if (!membership) throw fail("NOT_FOUND", "Enrolment not found");
    const org = await ctx.db.get("organizations", membership.orgId);
    if (!org) throw fail("NOT_FOUND", "Organisation not found");
    if (org.kind === "tutor") throw fail("BAD_REQUEST", "Tutor practices have no staff roles");
    if (membership.role !== "admin" && membership.role !== "teacher") throw fail("BAD_REQUEST", "Only staff roles can be changed");
    if (org.createdBy === membership.userId) throw fail("FORBIDDEN", "The creator of an organisation stays its administrator");
    if (membership.role === args.role) return null;
    await ctx.db.patch("memberships", membership._id, { role: args.role });
    const target = await ctx.db.get("users", membership.userId);
    await logAudit(ctx, {
      action: "staff_role_changed",
      actorId: admin._id,
      targetUserId: membership.userId,
      orgId: org._id,
      summary: `${who(admin)} made ${who(target)} ${args.role === "admin" ? "an administrator" : "a teacher"} at "${org.name}"`,
    });
    return null;
  },
});
