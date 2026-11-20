import { paginationOptsValidator } from "convex/server";
import { v } from "convex/values";
import { mutation, query, type MutationCtx } from "./_generated/server";
import type { Doc, Id } from "./_generated/dataModel.d.ts";
import { currentUser } from "./lib/auth.ts";
import { MAX_MEMBERSHIPS_PER_USER, canManage, isStaffRole } from "./lib/orgs.ts";
import {
  MAX_ADD_AT_ONCE, MAX_CLASSES_PER_ORG, MAX_CLASSES_PER_STUDENT, MAX_CLASSES_PER_TEACHER, MAX_COURSES_PER_CLASS, MAX_STUDENTS_PER_CLASS,
  canEditClass, canViewLearner, checkCourseId, fail, membershipOf, requireEditableClass, requireStaff, staffAccess, userNames, validateClassName,
} from "./lib/teach.ts";
import { MAX_ASSIGNMENTS_PER_CLASS } from "./lib/assignments.ts";
import { deleteAssignment } from "./assignments.ts";
import { MAX_TERM_REPORTS_PER_CLASS, deleteTermReport } from "./lib/termReports.ts";
import { logAudit, who } from "./lib/audit.ts";

const MAX_STAFF_LISTED = 200;

/** Every organisation the user teaches in, with the classes they can see. */
export const portal = query({
  args: {},
  handler: async (ctx) => {
    const user = await currentUser(ctx);
    if (!user || user.accountType !== "educator") return null;
    const seats = (await ctx.db.query("memberships").withIndex("by_user", (q) => q.eq("userId", user._id)).take(MAX_MEMBERSHIPS_PER_USER))
      .filter((m) => isStaffRole(m.role));
    const orgs = await Promise.all(seats.map(async (seat) => {
      const org = await ctx.db.get("organizations", seat.orgId);
      if (!org) return null;
      const manage = canManage(seat.role);
      const classes = manage
        ? await ctx.db.query("classes").withIndex("by_org", (q) => q.eq("orgId", org._id)).take(MAX_CLASSES_PER_ORG)
        : await ctx.db.query("classes").withIndex("by_org_and_teacher", (q) => q.eq("orgId", org._id).eq("teacherId", user._id)).take(MAX_CLASSES_PER_TEACHER);
      const names = await userNames(ctx, classes.map((c) => c.teacherId));
      return {
        orgId: org._id,
        name: org.name,
        kind: org.kind,
        role: seat.role,
        canManage: manage,
        studentCount: org.studentCount,
        staffCount: org.staffCount,
        classes: classes.map((c) => ({
          _id: c._id,
          name: c.name,
          teacherName: names.get(c.teacherId)?.name ?? "Unknown",
          isMine: c.teacherId === user._id,
          studentCount: c.studentCount,
          courseCount: c.courseCount,
        })),
      };
    }));
    return { userId: user._id, orgs: orgs.filter((o) => o !== null) };
  },
});

/** Staff who can be put in charge of a class. Managers only. */
export const staff = query({
  args: { orgId: v.id("organizations") },
  handler: async (ctx, args) => {
    const access = await staffAccess(ctx, args.orgId);
    if (!access || !canManage(access.membership.role)) return [];
    const rows = (await Promise.all((["owner", "admin", "teacher"] as const).map((role) =>
      ctx.db.query("memberships").withIndex("by_org_and_role", (q) => q.eq("orgId", args.orgId).eq("role", role)).take(MAX_STAFF_LISTED),
    ))).flat();
    const names = await userNames(ctx, rows.map((r) => r.userId));
    return rows.map((r) => ({ userId: r.userId, role: r.role, name: names.get(r.userId)?.name ?? "Unknown" }));
  },
});

/** Students enrolled in an organisation, newest first. Any staff member can see the directory. */
export const students = query({
  args: { orgId: v.id("organizations"), paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    const access = await staffAccess(ctx, args.orgId);
    if (!access) return { page: [], isDone: true, continueCursor: "" };
    const result = await ctx.db
      .query("memberships")
      .withIndex("by_org_and_role", (q) => q.eq("orgId", args.orgId).eq("role", "student"))
      .order("desc")
      .paginate(args.paginationOpts);
    const names = await userNames(ctx, result.page.map((m) => m.userId));
    return {
      ...result,
      page: result.page.map((m) => ({
        userId: m.userId,
        joinedAt: m.joinedAt,
        name: names.get(m.userId)?.name ?? "Unnamed learner",
        email: names.get(m.userId)?.email ?? null,
      })),
    };
  },
});

type ProgressSummary = Pick<Doc<"courseProgress">, "questionsAttempted" | "questionsSecure" | "marksEarned" | "marksAvailable" | "lastAttemptAt">;

/** A class with its roster and each student's totals on every assigned course. Null when missing or not visible. */
export const classDetail = query({
  args: { classId: v.string() },
  handler: async (ctx, args) => {
    const classId = ctx.db.normalizeId("classes", args.classId);
    if (!classId) return null;
    const cls = await ctx.db.get("classes", classId);
    if (!cls) return null;
    const access = await staffAccess(ctx, cls.orgId);
    if (!access) return null;
    const isTeacher = cls.teacherId === access.user._id;
    // Teachers see only their own classes; managers see all.
    if (!isTeacher && !canManage(access.membership.role)) return null;

    const [members, courses, teacherNames] = await Promise.all([
      ctx.db.query("classMembers").withIndex("by_class", (q) => q.eq("classId", classId)).take(MAX_STUDENTS_PER_CLASS),
      ctx.db.query("classCourses").withIndex("by_class", (q) => q.eq("classId", classId)).take(MAX_COURSES_PER_CLASS),
      userNames(ctx, [cls.teacherId]),
    ]);
    const names = await userNames(ctx, members.map((m) => m.userId));
    const roster = await Promise.all(members.map(async (m) => {
      const progress: Record<string, ProgressSummary | null> = {};
      await Promise.all(courses.map(async (c) => {
        const row = await ctx.db
          .query("courseProgress")
          .withIndex("by_user_and_course", (q) => q.eq("userId", m.userId).eq("courseId", c.courseId))
          .unique();
        progress[c.courseId] = row
          ? { questionsAttempted: row.questionsAttempted, questionsSecure: row.questionsSecure, marksEarned: row.marksEarned, marksAvailable: row.marksAvailable, lastAttemptAt: row.lastAttemptAt }
          : null;
      }));
      return { userId: m.userId, addedAt: m.addedAt, name: names.get(m.userId)?.name ?? "Unnamed learner", email: names.get(m.userId)?.email ?? null, progress };
    }));
    return {
      _id: cls._id,
      name: cls.name,
      orgId: cls.orgId,
      orgName: access.org.name,
      teacherId: cls.teacherId,
      teacherName: teacherNames.get(cls.teacherId)?.name ?? "Unknown",
      canEdit: canEditClass(access.membership.role, isTeacher),
      courseIds: courses.map((c) => c.courseId),
      roster: roster.sort((a, b) => a.name.localeCompare(b.name)),
    };
  },
});

/** One learner's progress, for staff allowed to see it. Null when missing or not visible. */
export const learner = query({
  args: { orgId: v.string(), userId: v.string() },
  handler: async (ctx, args) => {
    const orgId = ctx.db.normalizeId("organizations", args.orgId);
    const userId = ctx.db.normalizeId("users", args.userId);
    if (!orgId || !userId) return null;
    const access = await staffAccess(ctx, orgId);
    if (!access || !(await canViewLearner(ctx, access, userId))) return null;
    const [student, seat, classRows, courses, recent] = await Promise.all([
      ctx.db.get("users", userId),
      membershipOf(ctx, orgId, userId),
      ctx.db.query("classMembers").withIndex("by_user_and_org", (q) => q.eq("userId", userId).eq("orgId", orgId)).take(MAX_CLASSES_PER_STUDENT),
      ctx.db.query("courseProgress").withIndex("by_user_and_lastAttemptAt", (q) => q.eq("userId", userId)).order("desc").take(50),
      ctx.db.query("questionProgress").withIndex("by_user_and_lastAttemptAt", (q) => q.eq("userId", userId)).order("desc").take(12),
    ]);
    const classes = (await Promise.all(classRows.map((r) => ctx.db.get("classes", r.classId))))
      .flatMap((c) => (c ? [{ _id: c._id, name: c.name }] : []));
    return {
      userId,
      orgId,
      orgName: access.org.name,
      name: student?.name ?? student?.email ?? "Unnamed learner",
      email: student?.email ?? null,
      joinedAt: seat?.joinedAt ?? null,
      classes,
      courses,
      recent,
    };
  },
});

/** One learner's saved questions in a course, for concept mastery. */
export const learnerCourse = query({
  args: { orgId: v.id("organizations"), userId: v.id("users"), courseId: v.string() },
  handler: async (ctx, args) => {
    const access = await staffAccess(ctx, args.orgId);
    if (!access || !(await canViewLearner(ctx, access, args.userId))) return [];
    return await ctx.db
      .query("questionProgress")
      .withIndex("by_user_and_course", (q) => q.eq("userId", args.userId).eq("courseId", args.courseId))
      .take(500);
  },
});

/** Classes the signed-in student is in, with the courses set for each. */
export const myClasses = query({
  args: {},
  handler: async (ctx) => {
    const user = await currentUser(ctx);
    if (!user) return [];
    const rows = await ctx.db.query("classMembers").withIndex("by_user_and_org", (q) => q.eq("userId", user._id)).take(50);
    const result = await Promise.all(rows.map(async (r) => {
      const [cls, org] = await Promise.all([ctx.db.get("classes", r.classId), ctx.db.get("organizations", r.orgId)]);
      if (!cls || !org) return null;
      const [courses, teacher] = await Promise.all([
        ctx.db.query("classCourses").withIndex("by_class", (q) => q.eq("classId", cls._id)).take(MAX_COURSES_PER_CLASS),
        userNames(ctx, [cls.teacherId]),
      ]);
      return { _id: cls._id, name: cls.name, orgName: org.name, teacherName: teacher.get(cls.teacherId)?.name ?? "Your teacher", courseIds: courses.map((c) => c.courseId) };
    }));
    return result.filter((c) => c !== null);
  },
});

// ---------- Mutations ----------

export const createClass = mutation({
  args: { orgId: v.id("organizations"), name: v.string(), teacherId: v.optional(v.id("users")) },
  handler: async (ctx, args) => {
    const access = await requireStaff(ctx, args.orgId);
    const nameError = validateClassName(args.name);
    if (nameError) throw fail("BAD_REQUEST", nameError);
    const teacherId = args.teacherId ?? access.user._id;
    if (teacherId !== access.user._id) {
      if (!canManage(access.membership.role)) throw fail("FORBIDDEN", "Only administrators can create classes for other teachers");
      const seat = await membershipOf(ctx, args.orgId, teacherId);
      if (!seat || !isStaffRole(seat.role)) throw fail("BAD_REQUEST", "That person is not on the staff of this organisation");
    }
    const orgClasses = await ctx.db.query("classes").withIndex("by_org", (q) => q.eq("orgId", args.orgId)).take(MAX_CLASSES_PER_ORG);
    if (orgClasses.length >= MAX_CLASSES_PER_ORG) throw fail("CONFLICT", `An organisation can have up to ${MAX_CLASSES_PER_ORG} classes`);
    if (orgClasses.filter((c) => c.teacherId === teacherId).length >= MAX_CLASSES_PER_TEACHER) {
      throw fail("CONFLICT", `A teacher can run up to ${MAX_CLASSES_PER_TEACHER} classes`);
    }
    return await ctx.db.insert("classes", { orgId: args.orgId, name: args.name.trim(), teacherId, studentCount: 0, courseCount: 0 });
  },
});

export const renameClass = mutation({
  args: { classId: v.id("classes"), name: v.string() },
  handler: async (ctx, args) => {
    const { cls } = await requireEditableClass(ctx, args.classId);
    const nameError = validateClassName(args.name);
    if (nameError) throw fail("BAD_REQUEST", nameError);
    await ctx.db.patch("classes", cls._id, { name: args.name.trim() });
    return null;
  },
});

/** Hands a class to another staff member. Administrators only. */
export const setTeacher = mutation({
  args: { classId: v.id("classes"), teacherId: v.id("users") },
  handler: async (ctx, args) => {
    const cls = await ctx.db.get("classes", args.classId);
    if (!cls) throw fail("NOT_FOUND", "Class not found");
    const access = await requireStaff(ctx, cls.orgId);
    if (!canManage(access.membership.role)) throw fail("FORBIDDEN", "Only administrators can change a class's teacher");
    const seat = await membershipOf(ctx, cls.orgId, args.teacherId);
    if (!seat || !isStaffRole(seat.role)) throw fail("BAD_REQUEST", "That person is not on the staff of this organisation");
    const theirs = await ctx.db.query("classes").withIndex("by_org_and_teacher", (q) => q.eq("orgId", cls.orgId).eq("teacherId", args.teacherId)).take(MAX_CLASSES_PER_TEACHER);
    if (theirs.length >= MAX_CLASSES_PER_TEACHER) throw fail("CONFLICT", `A teacher can run up to ${MAX_CLASSES_PER_TEACHER} classes`);
    await ctx.db.patch("classes", cls._id, { teacherId: args.teacherId });
    return null;
  },
});

/** Deletes a class and its roster and course list. Students keep their own progress. */
export const deleteClass = mutation({
  args: { classId: v.id("classes") },
  handler: async (ctx, args) => {
    const { cls, user } = await requireEditableClass(ctx, args.classId);
    await deleteClassRows(ctx, cls._id);
    await ctx.db.delete("classes", cls._id);
    await logAudit(ctx, { action: "class_deleted", actorId: user._id, orgId: cls.orgId, summary: `${who(user)} deleted the class "${cls.name}"` });
    return null;
  },
});

async function deleteClassRows(ctx: MutationCtx, classId: Id<"classes">) {
  const members = await ctx.db.query("classMembers").withIndex("by_class", (q) => q.eq("classId", classId)).take(MAX_STUDENTS_PER_CLASS + 50);
  const courses = await ctx.db.query("classCourses").withIndex("by_class", (q) => q.eq("classId", classId)).take(MAX_COURSES_PER_CLASS + 50);
  const sets = await ctx.db.query("assignments").withIndex("by_class", (q) => q.eq("classId", classId)).take(MAX_ASSIGNMENTS_PER_CLASS + 50);
  await Promise.all([
    ...members.map((m) => ctx.db.delete("classMembers", m._id)),
    ...courses.map((c) => ctx.db.delete("classCourses", c._id)),
  ]);
  for (const a of sets) await deleteAssignment(ctx, a._id);
  const terms = await ctx.db.query("termReports").withIndex("by_class", (q) => q.eq("classId", classId)).take(MAX_TERM_REPORTS_PER_CLASS + 10);
  for (const r of terms) await deleteTermReport(ctx, r._id);
}

/** Adds enrolled students to a class. Already-added students are skipped. */
export const addStudents = mutation({
  args: { classId: v.id("classes"), userIds: v.array(v.id("users")) },
  handler: async (ctx, args) => {
    const { cls } = await requireEditableClass(ctx, args.classId);
    const ids = [...new Set(args.userIds)];
    if (ids.length === 0) throw fail("BAD_REQUEST", "Choose at least one student");
    if (ids.length > MAX_ADD_AT_ONCE) throw fail("BAD_REQUEST", `Add up to ${MAX_ADD_AT_ONCE} students at a time`);

    let added = 0;
    for (const userId of ids) {
      const seat = await membershipOf(ctx, cls.orgId, userId);
      if (!seat || seat.role !== "student") throw fail("BAD_REQUEST", "Only students enrolled in this organisation can join its classes");
      const existing = await ctx.db.query("classMembers").withIndex("by_class_and_user", (q) => q.eq("classId", cls._id).eq("userId", userId)).unique();
      if (existing) continue;
      const theirs = await ctx.db.query("classMembers").withIndex("by_user_and_org", (q) => q.eq("userId", userId).eq("orgId", cls.orgId)).take(MAX_CLASSES_PER_STUDENT);
      if (theirs.length >= MAX_CLASSES_PER_STUDENT) throw fail("CONFLICT", `A student can be in up to ${MAX_CLASSES_PER_STUDENT} classes`);
      await ctx.db.insert("classMembers", { classId: cls._id, orgId: cls.orgId, userId, addedAt: new Date().toISOString() });
      added += 1;
    }
    if (cls.studentCount + added > MAX_STUDENTS_PER_CLASS) throw fail("CONFLICT", `A class can have up to ${MAX_STUDENTS_PER_CLASS} students`);
    await ctx.db.patch("classes", cls._id, { studentCount: cls.studentCount + added });
    return { added };
  },
});

export const removeStudent = mutation({
  args: { classId: v.id("classes"), userId: v.id("users") },
  handler: async (ctx, args) => {
    const { cls } = await requireEditableClass(ctx, args.classId);
    const row = await ctx.db.query("classMembers").withIndex("by_class_and_user", (q) => q.eq("classId", cls._id).eq("userId", args.userId)).unique();
    if (!row) return null;
    await ctx.db.delete("classMembers", row._id);
    await ctx.db.patch("classes", cls._id, { studentCount: Math.max(0, cls.studentCount - 1) });
    return null;
  },
});

/** Sets or unsets a course for a class. */
export const setCourse = mutation({
  args: { classId: v.id("classes"), courseId: v.string(), assigned: v.boolean() },
  handler: async (ctx, args) => {
    checkCourseId(args.courseId);
    const { cls } = await requireEditableClass(ctx, args.classId);
    const existing = await ctx.db.query("classCourses").withIndex("by_class_and_course", (q) => q.eq("classId", cls._id).eq("courseId", args.courseId)).unique();
    if (args.assigned && !existing) {
      if (cls.courseCount >= MAX_COURSES_PER_CLASS) throw fail("CONFLICT", `A class can have up to ${MAX_COURSES_PER_CLASS} courses`);
      await ctx.db.insert("classCourses", { classId: cls._id, courseId: args.courseId, addedAt: new Date().toISOString() });
      await ctx.db.patch("classes", cls._id, { courseCount: cls.courseCount + 1 });
    } else if (!args.assigned && existing) {
      await ctx.db.delete("classCourses", existing._id);
      await ctx.db.patch("classes", cls._id, { courseCount: Math.max(0, cls.courseCount - 1) });
    }
    return null;
  },
});
