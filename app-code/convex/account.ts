import { ConvexError, v } from "convex/values";
import { internalMutation, mutation, query, type MutationCtx } from "./_generated/server";
import type { Id } from "./_generated/dataModel.d.ts";
import { ACCOUNT_TYPE, ORG_KIND } from "./schema.ts";
import { identityUser, requireUser, userByEmail } from "./lib/auth.ts";
import { adjustCount, removeMembership } from "./lib/members.ts";
import { bumpDaily } from "./lib/analytics.ts";
import { logAudit, who } from "./lib/audit.ts";
import {
  MAX_MEMBERSHIPS_PER_USER, MAX_ORGS_PER_USER, canManage, creatorRole, generateCode, isStaffRole, joinError, normalizeCode, validateOrgName,
  type MemberRole,
} from "./lib/orgs.ts";

const fail = (code: string, message: string) => new ConvexError({ code, message });

/** Generates a code no organisation is using for either students or staff. */
async function uniqueCode(ctx: MutationCtx): Promise<string> {
  for (let i = 0; i < 10; i++) {
    const code = generateCode();
    const asStudent = await ctx.db.query("organizations").withIndex("by_studentCode", (q) => q.eq("studentCode", code)).first();
    const asStaff = await ctx.db.query("organizations").withIndex("by_staffCode", (q) => q.eq("staffCode", code)).first();
    if (!asStudent && !asStaff) return code;
  }
  throw fail("CONFLICT", "Could not create a join code, please try again");
}

async function membershipOf(ctx: MutationCtx, orgId: Id<"organizations">, userId: Id<"users">) {
  return await ctx.db.query("memberships").withIndex("by_org_and_user", (q) => q.eq("orgId", orgId).eq("userId", userId)).unique();
}

async function countMemberships(ctx: MutationCtx, userId: Id<"users">) {
  return (await ctx.db.query("memberships").withIndex("by_user", (q) => q.eq("userId", userId)).take(MAX_MEMBERSHIPS_PER_USER)).length;
}

/** The signed-in user's account and every organisation they belong to. */
export const me = query({
  args: {},
  handler: async (ctx) => {
    const user = await identityUser(ctx);
    if (!user) return null;
    if (user.suspended) {
      return { name: user.name ?? null, email: user.email ?? null, accountType: user.accountType ?? null, isPlatformAdmin: false, suspended: true, enrollments: [] };
    }
    const memberships = await ctx.db.query("memberships").withIndex("by_user", (q) => q.eq("userId", user._id)).take(MAX_MEMBERSHIPS_PER_USER);
    const orgs = await Promise.all(memberships.map((m) => ctx.db.get("organizations", m.orgId)));
    const enrollments = memberships.flatMap((m, i) => {
      const org = orgs[i];
      if (!org) return [];
      const manage = canManage(m.role);
      return [{
        membershipId: m._id,
        orgId: org._id,
        name: org.name,
        kind: org.kind,
        role: m.role,
        joinedAt: m.joinedAt,
        studentCount: org.studentCount,
        staffCount: org.staffCount,
        // Codes are only shown to people who run the organisation.
        studentCode: manage ? org.studentCode : null,
        staffCode: manage ? (org.staffCode ?? null) : null,
      }];
    });
    return {
      name: user.name ?? null,
      email: user.email ?? null,
      accountType: user.accountType ?? null,
      isPlatformAdmin: user.isPlatformAdmin === true,
      suspended: false,
      enrollments,
    };
  },
});

export const setAccountType = mutation({
  args: { accountType: ACCOUNT_TYPE },
  handler: async (ctx, args) => {
    const user = await requireUser(ctx);
    if (user.accountType === args.accountType) return null;
    if (args.accountType === "learner") {
      // Switching back to learner would leave staff seats behind, so require leaving them first.
      const memberships = await ctx.db.query("memberships").withIndex("by_user", (q) => q.eq("userId", user._id)).take(MAX_MEMBERSHIPS_PER_USER);
      if (memberships.some((m) => isStaffRole(m.role))) {
        throw fail("CONFLICT", "Leave your teaching organisations before switching to a learner account");
      }
    }
    await ctx.db.patch("users", user._id, { accountType: args.accountType });
    return null;
  },
});

export const createOrganization = mutation({
  args: { name: v.string(), kind: ORG_KIND },
  handler: async (ctx, args) => {
    const user = await requireUser(ctx);
    if (user.accountType !== "educator") throw fail("FORBIDDEN", "Only educator accounts can create a tutor practice, school or district");
    const nameError = validateOrgName(args.name);
    if (nameError) throw fail("BAD_REQUEST", nameError);
    const owned = await ctx.db.query("organizations").withIndex("by_createdBy", (q) => q.eq("createdBy", user._id)).take(MAX_ORGS_PER_USER);
    if (owned.length >= MAX_ORGS_PER_USER) throw fail("CONFLICT", `You can create up to ${MAX_ORGS_PER_USER} organisations`);
    if ((await countMemberships(ctx, user._id)) >= MAX_MEMBERSHIPS_PER_USER) throw fail("CONFLICT", "You have reached the membership limit");

    const studentCode = await uniqueCode(ctx);
    const staffCode = args.kind === "tutor" ? undefined : await uniqueCode(ctx);
    const orgId = await ctx.db.insert("organizations", {
      name: args.name.trim(), kind: args.kind, createdBy: user._id, studentCode, staffCode, studentCount: 0, staffCount: 1,
    });
    await ctx.db.insert("memberships", { orgId, userId: user._id, role: creatorRole(args.kind), joinedAt: new Date().toISOString() });
    await bumpDaily(ctx, "orgsCreated");
    await logAudit(ctx, { action: "org_created", actorId: user._id, orgId, summary: `${who(user)} created the ${args.kind === "tutor" ? "tutor practice" : args.kind} "${args.name.trim()}"` });
    return orgId;
  },
});

/** Joins with a student code (as a learner) or a staff code (as a teacher). */
export const joinWithCode = mutation({
  args: { code: v.string() },
  handler: async (ctx, args) => {
    const user = await requireUser(ctx);
    const code = normalizeCode(args.code);
    if (code.length === 0 || code.length > 20) throw fail("BAD_REQUEST", "Enter a valid join code");

    const byStudent = await ctx.db.query("organizations").withIndex("by_studentCode", (q) => q.eq("studentCode", code)).unique();
    const byStaff = byStudent ? null : await ctx.db.query("organizations").withIndex("by_staffCode", (q) => q.eq("staffCode", code)).unique();
    const org = byStudent ?? byStaff;
    if (!org) throw fail("NOT_FOUND", "No organisation uses that code. Check it with your tutor or school");

    const viaStaff = byStaff !== null;
    const roleError = joinError(user.accountType, viaStaff);
    if (roleError) throw fail("FORBIDDEN", roleError);
    if (await membershipOf(ctx, org._id, user._id)) throw fail("CONFLICT", `You are already a member of ${org.name}`);
    if ((await countMemberships(ctx, user._id)) >= MAX_MEMBERSHIPS_PER_USER) throw fail("CONFLICT", "You have reached the membership limit");

    const role: MemberRole = viaStaff ? "teacher" : "student";
    await ctx.db.insert("memberships", { orgId: org._id, userId: user._id, role, joinedAt: new Date().toISOString() });
    await adjustCount(ctx, org, role, 1);
    return { name: org.name, kind: org.kind, role };
  },
});

export const leave = mutation({
  args: { orgId: v.id("organizations") },
  handler: async (ctx, args) => {
    const user = await requireUser(ctx);
    const membership = await membershipOf(ctx, args.orgId, user._id);
    const org = await ctx.db.get("organizations", args.orgId);
    if (!membership || !org) throw fail("NOT_FOUND", "You are not a member of this organisation");
    await removeMembership(ctx, org, membership, true);
    return null;
  },
});

/** Replaces a join code, e.g. after it was shared too widely. Existing members stay enrolled. */
export const regenerateCode = mutation({
  args: { orgId: v.id("organizations"), which: v.union(v.literal("student"), v.literal("staff")) },
  handler: async (ctx, args) => {
    const user = await requireUser(ctx);
    const membership = await membershipOf(ctx, args.orgId, user._id);
    const org = await ctx.db.get("organizations", args.orgId);
    if (!membership || !org || !canManage(membership.role)) throw fail("FORBIDDEN", "Only the people who run this organisation can change its codes");
    if (args.which === "staff" && org.kind === "tutor") throw fail("BAD_REQUEST", "Tutor practices have no staff code");
    const code = await uniqueCode(ctx);
    await ctx.db.patch("organizations", org._id, args.which === "student" ? { studentCode: code } : { staffCode: code });
    await logAudit(ctx, { action: "join_code_reset", actorId: user._id, orgId: org._id, summary: `${who(user)} reset the ${args.which} join code for "${org.name}"` });
    return code;
  },
});

/** Grants or removes platform admin. Run from the dashboard only; never exposed to the app. */
export const setPlatformAdmin = internalMutation({
  args: { email: v.string(), isPlatformAdmin: v.boolean() },
  handler: async (ctx, args) => {
    const user = await userByEmail(ctx, args.email);
    if (!user) throw fail("NOT_FOUND", `No user with email ${args.email}`);
    await ctx.db.patch("users", user._id, { isPlatformAdmin: args.isPlatformAdmin });
    await logAudit(ctx, {
      action: args.isPlatformAdmin ? "admin_granted" : "admin_revoked",
      targetUserId: user._id,
      summary: `Admin access ${args.isPlatformAdmin ? "granted to" : "removed from"} ${who(user)} from the dashboard`,
    });
    return user._id;
  },
});
