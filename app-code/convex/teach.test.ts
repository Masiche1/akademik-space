import { convexTest } from "convex-test";
import { describe, expect, test } from "vitest";
import { api } from "./_generated/api";
import schema from "./schema";
import { modules } from "./test.setup";
import { canEditClass, validateClassName } from "./lib/teach";
import type { Id } from "./_generated/dataModel";

const PAGE = { numItems: 50, cursor: null };

/** A school with an admin, two teachers and two students. */
async function school() {
  const t = convexTest(schema, modules);
  const as = (key: string, name: string) => t.withIdentity({ tokenIdentifier: `iss|${key}`, name });
  const admin = as("admin", "Ada Admin");
  const teacherA = as("ta", "Tara Teacher");
  const teacherB = as("tb", "Ben Teacher");
  const sam = as("sam", "Sam Student");
  const zoe = as("zoe", "Zoe Student");
  const outsider = as("out", "Olly Outsider");

  for (const u of [admin, teacherA, teacherB]) await u.mutation(api.account.setAccountType, { accountType: "educator" });
  const orgId = await admin.mutation(api.account.createOrganization, { name: "Northside High", kind: "school" });
  const org = (await admin.query(api.account.me, {}))?.enrollments[0];
  await teacherA.mutation(api.account.joinWithCode, { code: org?.staffCode ?? "" });
  await teacherB.mutation(api.account.joinWithCode, { code: org?.staffCode ?? "" });
  await sam.mutation(api.account.joinWithCode, { code: org?.studentCode ?? "" });
  await zoe.mutation(api.account.joinWithCode, { code: org?.studentCode ?? "" });

  const directory = await admin.query(api.teach.students, { orgId, paginationOpts: PAGE });
  const idOf = (name: string) => directory.page.find((s) => s.name === name)?.userId as Id<"users">;
  return { t, admin, teacherA, teacherB, sam, zoe, outsider, orgId, samId: idOf("Sam Student"), zoeId: idOf("Zoe Student") };
}

describe("teach helpers", () => {
  test("class names", () => {
    expect(validateClassName("  ")).not.toBeNull();
    expect(validateClassName("x".repeat(61))).not.toBeNull();
    expect(validateClassName("10B Maths")).toBeNull();
  });
  test("who can edit a class", () => {
    expect(canEditClass("admin", false)).toBe(true);
    expect(canEditClass("owner", false)).toBe(true);
    expect(canEditClass("teacher", true)).toBe(true);
    expect(canEditClass("teacher", false)).toBe(false);
    expect(canEditClass("student", true)).toBe(false);
  });
});

describe("teacher portal", () => {
  test("students and outsiders get no portal or directory", async () => {
    const { sam, outsider, orgId } = await school();
    expect(await sam.query(api.teach.portal, {})).toBeNull();
    expect((await outsider.query(api.teach.students, { orgId, paginationOpts: PAGE })).page).toHaveLength(0);
    await expect(sam.mutation(api.teach.createClass, { orgId, name: "Hack" })).rejects.toThrow(/staff/);
  });

  test("a teacher builds a class; only enrolled students can be added", async () => {
    const { teacherA, orgId, samId } = await school();
    const classId = await teacherA.mutation(api.teach.createClass, { orgId, name: "10B Maths" });
    expect((await teacherA.mutation(api.teach.addStudents, { classId, userIds: [samId, samId] })).added).toBe(1);
    // Adding again is a no-op.
    expect((await teacherA.mutation(api.teach.addStudents, { classId, userIds: [samId] })).added).toBe(0);
    await teacherA.mutation(api.teach.setCourse, { classId, courseId: "edx-maths-y10", assigned: true });

    const detail = await teacherA.query(api.teach.classDetail, { classId });
    expect(detail?.roster.map((r) => r.name)).toEqual(["Sam Student"]);
    expect(detail?.courseIds).toEqual(["edx-maths-y10"]);
    const portal = await teacherA.query(api.teach.portal, {});
    expect(portal?.orgs[0]?.classes[0]).toMatchObject({ studentCount: 1, courseCount: 1, isMine: true });
  });

  test("rejects users who are not students of the organisation", async () => {
    const { teacherA, teacherB, orgId } = await school();
    const classId = await teacherA.mutation(api.teach.createClass, { orgId, name: "10B Maths" });
    const staff = await teacherA.query(api.teach.staff, { orgId });
    expect(staff).toEqual([]); // teachers cannot list staff
    const portalB = await teacherB.query(api.teach.portal, {});
    expect(portalB?.orgs[0]?.classes).toHaveLength(0);
    // A teacher's own id is not a student seat.
    const tbId = (await teacherA.query(api.teach.classDetail, { classId }))?.teacherId as Id<"users">;
    await expect(teacherA.mutation(api.teach.addStudents, { classId, userIds: [tbId] })).rejects.toThrow(/enrolled/);
  });

  test("teachers cannot see or edit another teacher's class or learners", async () => {
    const { admin, teacherA, teacherB, orgId, samId, zoeId } = await school();
    const classId = await teacherA.mutation(api.teach.createClass, { orgId, name: "10B Maths" });
    await teacherA.mutation(api.teach.addStudents, { classId, userIds: [samId] });

    expect(await teacherB.query(api.teach.classDetail, { classId })).toBeNull();
    await expect(teacherB.mutation(api.teach.renameClass, { classId, name: "Mine" })).rejects.toThrow(/class teacher/);
    expect(await teacherB.query(api.teach.learner, { orgId, userId: samId })).toBeNull();
    // Teacher A sees Sam (in their class) but not Zoe (in none of their classes).
    expect((await teacherA.query(api.teach.learner, { orgId, userId: samId }))?.name).toBe("Sam Student");
    expect(await teacherA.query(api.teach.learner, { orgId, userId: zoeId })).toBeNull();
    // Admins see every learner and class.
    expect((await admin.query(api.teach.learner, { orgId, userId: zoeId }))?.name).toBe("Zoe Student");
    expect(await admin.query(api.teach.classDetail, { classId })).not.toBeNull();
  });

  test("malformed ids return null instead of throwing", async () => {
    const { admin, orgId } = await school();
    expect(await admin.query(api.teach.classDetail, { classId: "nope" })).toBeNull();
    expect(await admin.query(api.teach.learner, { orgId, userId: "nope" })).toBeNull();
  });

  test("admins can hand a class over; teachers with classes cannot leave", async () => {
    const { admin, teacherA, teacherB, orgId } = await school();
    const classId = await teacherA.mutation(api.teach.createClass, { orgId, name: "10B Maths" });
    await expect(teacherA.mutation(api.account.leave, { orgId })).rejects.toThrow(/Hand over/);
    const staff = await admin.query(api.teach.staff, { orgId });
    const ben = staff.find((s) => s.name === "Ben Teacher");
    await expect(teacherA.mutation(api.teach.setTeacher, { classId, teacherId: ben!.userId })).rejects.toThrow(/administrators/);
    await admin.mutation(api.teach.setTeacher, { classId, teacherId: ben!.userId });
    expect((await teacherB.query(api.teach.classDetail, { classId }))?.canEdit).toBe(true);
    await teacherA.mutation(api.account.leave, { orgId });
  });

  test("a student who leaves is removed from classes and counts stay right", async () => {
    const { teacherA, sam, orgId, samId } = await school();
    const classId = await teacherA.mutation(api.teach.createClass, { orgId, name: "10B Maths" });
    await teacherA.mutation(api.teach.addStudents, { classId, userIds: [samId] });
    expect(await sam.query(api.teach.myClasses, {})).toHaveLength(1);
    await sam.mutation(api.account.leave, { orgId });
    expect(await sam.query(api.teach.myClasses, {})).toHaveLength(0);
    const detail = await teacherA.query(api.teach.classDetail, { classId });
    expect(detail?.roster).toHaveLength(0);
    expect((await teacherA.query(api.teach.portal, {}))?.orgs[0]?.classes[0]?.studentCount).toBe(0);
  });

  test("class progress shows each student's totals on assigned courses", async () => {
    const { teacherA, sam, orgId, samId } = await school();
    const classId = await teacherA.mutation(api.teach.createClass, { orgId, name: "10B Maths" });
    await teacherA.mutation(api.teach.addStudents, { classId, userIds: [samId] });
    await teacherA.mutation(api.teach.setCourse, { classId, courseId: "c1", assigned: true });
    await sam.mutation(api.progress.record, { courseId: "c1", conceptId: "k1", questionId: "q1", marks: 3, totalMarks: 4, status: "partial" });
    const row = (await teacherA.query(api.teach.classDetail, { classId }))?.roster[0];
    expect(row?.progress.c1).toMatchObject({ questionsAttempted: 1, marksEarned: 3, marksAvailable: 4 });
    expect((await teacherA.query(api.teach.learnerCourse, { orgId, userId: samId, courseId: "c1" }))).toHaveLength(1);
  });
});
