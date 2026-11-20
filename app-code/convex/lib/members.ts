import type { MutationCtx } from "../_generated/server";
import type { Doc } from "../_generated/dataModel.d.ts";
import { fail, removeFromOrgClasses, runsClasses } from "./teach.ts";
import { isStaffRole, type MemberRole } from "./orgs.ts";

/** Keeps the denormalised member counts in step with membership rows. */
export async function adjustCount(ctx: MutationCtx, org: Doc<"organizations">, role: MemberRole, by: 1 | -1) {
  if (isStaffRole(role)) await ctx.db.patch("organizations", org._id, { staffCount: Math.max(0, org.staffCount + by) });
  else await ctx.db.patch("organizations", org._id, { studentCount: Math.max(0, org.studentCount + by) });
}

/** Removes one membership, used when a member leaves and when a platform admin removes them. */
export async function removeMembership(ctx: MutationCtx, org: Doc<"organizations">, membership: Doc<"memberships">, self: boolean) {
  if (membership.role === "owner" || org.createdBy === membership.userId) {
    throw fail("FORBIDDEN", self ? "You created this organisation, so you cannot leave it" : "The creator of an organisation cannot be removed from it");
  }
  if (isStaffRole(membership.role) && (await runsClasses(ctx, org._id, membership.userId))) {
    throw fail("CONFLICT", self
      ? "Hand over or delete your classes in the teacher portal before leaving"
      : "This teacher still runs classes. Their administrator must hand the classes over first");
  }
  if (membership.role === "student") await removeFromOrgClasses(ctx, org._id, membership.userId);
  await ctx.db.delete("memberships", membership._id);
  await adjustCount(ctx, org, membership.role, -1);
}
