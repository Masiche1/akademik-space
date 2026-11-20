import { ConvexError } from "convex/values";
import type { MutationCtx, QueryCtx } from "../_generated/server";
import type { Doc, Id } from "../_generated/dataModel.d.ts";
import { canManage, isStaffRole, type MemberRole } from "./orgs.ts";
import { currentUser } from "./auth.ts";

export const MAX_CLASSES_PER_ORG = 300;
export const MAX_CLASSES_PER_TEACHER = 50;
export const MAX_STUDENTS_PER_CLASS = 150;
export const MAX_COURSES_PER_CLASS = 12;
export const MAX_ADD_AT_ONCE = 50;
/** A student can be in at most this many classes per organisation; keeps teacher access checks bounded. */
export const MAX_CLASSES_PER_STUDENT = 30;

export const fail = (code: string, message: string) => new ConvexError({ code, message });

export function validateClassName(raw: string): string | null {
  const name = raw.trim();
  if (name.length < 1) return "Give the class a name";
  if (name.length > 60) return "Class names must be 60 characters or fewer";
  return null;
}

/** Owners and admins can edit every class; teachers only the classes they run. */
export const canEditClass = (role: MemberRole, isClassTeacher: boolean) => canManage(role) || (role === "teacher" && isClassTeacher);

export async function membershipOf(ctx: QueryCtx, orgId: Id<"organizations">, userId: Id<"users">) {
  return await ctx.db.query("memberships").withIndex("by_org_and_user", (q) => q.eq("orgId", orgId).eq("userId", userId)).unique();
}

export type StaffAccess = { user: Doc<"users">; membership: Doc<"memberships">; org: Doc<"organizations"> };

/** The signed-in user's staff seat in an organisation, or null. Never throws, for queries. */
export async function staffAccess(ctx: QueryCtx, orgId: Id<"organizations">): Promise<StaffAccess | null> {
  const user = await currentUser(ctx);
  if (!user || user.accountType !== "educator") return null;
  const membership = await membershipOf(ctx, orgId, user._id);
  if (!membership || !isStaffRole(membership.role)) return null;
  const org = await ctx.db.get("organizations", orgId);
  return org ? { user, membership, org } : null;
}

export async function requireStaff(ctx: QueryCtx, orgId: Id<"organizations">): Promise<StaffAccess> {
  const access = await staffAccess(ctx, orgId);
  if (!access) throw fail("FORBIDDEN", "You are not on the staff of this organisation");
  return access;
}

/** Loads a class the signed-in user may edit, or throws. */
export async function requireEditableClass(ctx: QueryCtx, classId: Id<"classes">) {
  const cls = await ctx.db.get("classes", classId);
  if (!cls) throw fail("NOT_FOUND", "Class not found");
  const access = await requireStaff(ctx, cls.orgId);
  if (!canEditClass(access.membership.role, cls.teacherId === access.user._id)) {
    throw fail("FORBIDDEN", "Only the class teacher or an administrator can change this class");
  }
  return { cls, ...access };
}

/** Loads a class the signed-in user may view (its teacher or an org manager), or null. */
export async function viewableClass(ctx: QueryCtx, classId: Id<"classes">) {
  const cls = await ctx.db.get("classes", classId);
  if (!cls) return null;
  const access = await staffAccess(ctx, cls.orgId);
  if (!access) return null;
  const isTeacher = cls.teacherId === access.user._id;
  if (!isTeacher && !canManage(access.membership.role)) return null;
  return { cls, ...access, canEdit: canEditClass(access.membership.role, isTeacher) };
}

/** Owners and admins can see every student; teachers only students in one of their classes. */
export async function canViewLearner(ctx: QueryCtx, access: StaffAccess, studentId: Id<"users">): Promise<boolean> {
  const seat = await membershipOf(ctx, access.org._id, studentId);
  if (!seat || seat.role !== "student") return false;
  if (canManage(access.membership.role)) return true;
  const rows = await ctx.db
    .query("classMembers")
    .withIndex("by_user_and_org", (q) => q.eq("userId", studentId).eq("orgId", access.org._id))
    .take(MAX_CLASSES_PER_STUDENT);
  const classes = await Promise.all(rows.map((r) => ctx.db.get("classes", r.classId)));
  return classes.some((c) => c?.teacherId === access.user._id);
}

/** Display names for a set of users, batched. */
export async function userNames(ctx: QueryCtx, ids: Id<"users">[]) {
  const unique = [...new Set(ids)];
  const users = await Promise.all(unique.map((id) => ctx.db.get("users", id)));
  const map = new Map<Id<"users">, { name: string; email: string | null }>();
  users.forEach((u, i) => map.set(unique[i], { name: u?.name ?? u?.email ?? "Unnamed learner", email: u?.email ?? null }));
  return map;
}

/** Used when a student leaves: drops them from every class in the organisation. */
export async function removeFromOrgClasses(ctx: MutationCtx, orgId: Id<"organizations">, userId: Id<"users">) {
  const rows = await ctx.db.query("classMembers").withIndex("by_user_and_org", (q) => q.eq("userId", userId).eq("orgId", orgId)).take(MAX_CLASSES_PER_STUDENT + 10);
  for (const r of rows) {
    const cls = await ctx.db.get("classes", r.classId);
    await ctx.db.delete("classMembers", r._id);
    if (cls) await ctx.db.patch("classes", cls._id, { studentCount: Math.max(0, cls.studentCount - 1) });
  }
}

/** Used when staff leave: a teacher must hand over or delete their classes first. */
export async function runsClasses(ctx: QueryCtx, orgId: Id<"organizations">, userId: Id<"users">) {
  return (await ctx.db.query("classes").withIndex("by_org_and_teacher", (q) => q.eq("orgId", orgId).eq("teacherId", userId)).first()) !== null;
}

export const checkCourseId = (courseId: string) => {
  if (courseId.length === 0 || courseId.length > 200) throw fail("BAD_REQUEST", "Invalid course");
};
