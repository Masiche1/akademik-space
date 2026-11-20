import { convexTest } from "convex-test";
import { describe, expect, test } from "vitest";
import { api, internal } from "./_generated/api";
import schema from "./schema";
import { modules } from "./test.setup";
import { COURSES } from "../src/content/catalog";

const firstQuestionId = COURSES[0].units[0].lessons[0].concepts[0].questions[0].id;

async function setup() {
  const t = convexTest(schema, modules);
  const admin = t.withIdentity({ tokenIdentifier: "iss|admin", name: "Ada Admin", email: "ada@example.com" });
  const sam = t.withIdentity({ tokenIdentifier: "iss|sam", name: "Sam Student", email: "sam@example.com" });
  const tess = t.withIdentity({ tokenIdentifier: "iss|tess", name: "Tess Teacher", email: "tess@example.com" });
  await admin.mutation(api.account.setAccountType, { accountType: "learner" });
  await sam.mutation(api.account.setAccountType, { accountType: "learner" });
  await tess.mutation(api.account.setAccountType, { accountType: "educator" });
  await t.mutation(internal.account.setPlatformAdmin, { email: "ada@example.com", isPlatformAdmin: true });
  const page = { numItems: 20, cursor: null };
  const users = await admin.query(api.admin.users.list, { filter: "all", search: "", paginationOpts: page });
  const idOf = (name: string) => {
    const u = users.page.find((p) => p.name === name);
    if (!u) throw new Error(`missing ${name}`);
    return u.userId;
  };
  return { t, admin, sam, tess, page, adaId: idOf("Ada Admin"), samId: idOf("Sam Student"), tessId: idOf("Tess Teacher") };
}

describe("admin access", () => {
  test("non-admins cannot read or change anything", async () => {
    const { sam, page, tessId } = await setup();
    expect(await sam.query(api.admin.users.isAdmin, {})).toBe(false);
    await expect(sam.query(api.admin.users.overview, {})).rejects.toThrow(/platform admins/);
    await expect(sam.query(api.admin.users.list, { filter: "all", search: "", paginationOpts: page })).rejects.toThrow(/platform admins/);
    await expect(sam.query(api.admin.content.reports, { status: "open", paginationOpts: page })).rejects.toThrow(/platform admins/);
    await expect(sam.mutation(api.admin.users.setSuspended, { userId: tessId, suspended: true })).rejects.toThrow(/platform admins/);
    await expect(sam.mutation(api.admin.users.setPlatformAdmin, { userId: tessId, isPlatformAdmin: true })).rejects.toThrow(/platform admins/);
  });

  test("lists, filters and searches accounts", async () => {
    const { admin, page } = await setup();
    expect(await admin.query(api.admin.users.isAdmin, {})).toBe(true);
    const overview = await admin.query(api.admin.users.overview, {});
    expect(overview.users.value).toBe(3);
    expect(overview.educators.value).toBe(1);
    expect(overview.admins.value).toBe(1);
    const educators = await admin.query(api.admin.users.list, { filter: "educators", search: "", paginationOpts: page });
    expect(educators.page.map((u) => u.name)).toEqual(["Tess Teacher"]);
    const byEmail = await admin.query(api.admin.users.list, { filter: "all", search: "sam@example.com", paginationOpts: page });
    expect(byEmail.page.map((u) => u.name)).toEqual(["Sam Student"]);
    expect(await admin.query(api.admin.users.get, { userId: "not-an-id" })).toBeNull();
  });

  test("suspended accounts lose access and cannot write", async () => {
    const { admin, sam, samId } = await setup();
    await admin.mutation(api.admin.users.setSuspended, { userId: samId, suspended: true });
    const me = await sam.query(api.account.me, {});
    expect(me?.suspended).toBe(true);
    expect(me?.enrollments).toEqual([]);
    await expect(sam.mutation(api.account.joinWithCode, { code: "ABCDEFG" })).rejects.toThrow(/suspended/);
    await admin.mutation(api.admin.users.setSuspended, { userId: samId, suspended: false });
    expect((await sam.query(api.account.me, {}))?.suspended).toBe(false);
  });

  test("a suspended admin loses the portal", async () => {
    const { admin, sam, samId } = await setup();
    await admin.mutation(api.admin.users.setPlatformAdmin, { userId: samId, isPlatformAdmin: true });
    expect(await sam.query(api.admin.users.isAdmin, {})).toBe(true);
    // Admins must be demoted before suspension.
    await expect(admin.mutation(api.admin.users.setSuspended, { userId: samId, suspended: true })).rejects.toThrow(/Remove admin access/);
    await admin.mutation(api.admin.users.setPlatformAdmin, { userId: samId, isPlatformAdmin: false });
    await admin.mutation(api.admin.users.setSuspended, { userId: samId, suspended: true });
    expect(await sam.query(api.admin.users.isAdmin, {})).toBe(false);
  });

  test("admins cannot lock themselves out or remove the last admin", async () => {
    const { admin, adaId } = await setup();
    await expect(admin.mutation(api.admin.users.setSuspended, { userId: adaId, suspended: true })).rejects.toThrow(/your own/);
    await expect(admin.mutation(api.admin.users.setPlatformAdmin, { userId: adaId, isPlatformAdmin: false })).rejects.toThrow(/your own/);
  });

  test("removes members and changes staff roles, protecting creators", async () => {
    const { admin, tess, sam, page, tessId } = await setup();
    const orgId = await tess.mutation(api.account.createOrganization, { name: "Hill School", kind: "school" });
    const tessView = await tess.query(api.account.me, {});
    const code = tessView?.enrollments[0].studentCode ?? "";
    await sam.mutation(api.account.joinWithCode, { code });

    const orgs = await admin.query(api.admin.orgs.list, { kind: "all", search: "", paginationOpts: page });
    expect(orgs.page[0]).toMatchObject({ name: "Hill School", studentCount: 1, staffCount: 1 });
    const staff = await admin.query(api.admin.orgs.members, { orgId, role: "staff", paginationOpts: page });
    expect(staff.page.map((m) => m.name)).toEqual(["Tess Teacher"]);
    const students = await admin.query(api.admin.orgs.members, { orgId, role: "student", paginationOpts: page });
    expect(students.page.map((m) => m.name)).toEqual(["Sam Student"]);

    const creator = await admin.query(api.admin.users.get, { userId: tessId });
    const creatorSeat = creator?.memberships[0].membershipId;
    if (!creatorSeat) throw new Error("missing seat");
    await expect(admin.mutation(api.admin.users.removeFromOrg, { membershipId: creatorSeat })).rejects.toThrow(/creator/);
    await expect(admin.mutation(api.admin.users.setStaffRole, { membershipId: creatorSeat, role: "teacher" })).rejects.toThrow(/creator/);

    await admin.mutation(api.admin.users.removeFromOrg, { membershipId: students.page[0].membershipId });
    const after = await admin.query(api.admin.orgs.list, { kind: "school", search: "", paginationOpts: page });
    expect(after.page[0].studentCount).toBe(0);
  });
});

describe("content review", () => {
  test("reports are reviewed, grouped by course and closed together", async () => {
    const { t, admin, sam, page } = await setup();
    await sam.mutation(api.reports.create, { questionId: firstQuestionId, reason: "incorrect_answer", details: "Answer should be 4" });
    await t.mutation(api.reports.create, { questionId: firstQuestionId, reason: "typo_or_formatting", details: "" });

    const open = await admin.query(api.admin.content.reports, { status: "open", paginationOpts: page });
    expect(open.page).toHaveLength(2);
    expect(open.page.find((r) => r.reporter === "Sam Student")?.question?.courseId).toBe(COURSES[0].id);
    const byCourse = await admin.query(api.admin.content.openByCourse, {});
    expect(byCourse.courses).toEqual([{ courseId: COURSES[0].id, title: COURSES[0].title, open: 2 }]);
    expect(await admin.query(api.admin.content.openForQuestion, { questionId: firstQuestionId })).toBe(2);

    await expect(admin.mutation(api.admin.content.review, { reportId: open.page[0].reportId, status: "resolved", note: "x".repeat(1001) })).rejects.toThrow(/1000/);
    const res = await admin.mutation(api.admin.content.review, { reportId: open.page[0].reportId, status: "resolved", note: "Fixed step 2", applyToQuestion: true });
    expect(res.also).toBe(1);
    const resolved = await admin.query(api.admin.content.reports, { status: "resolved", paginationOpts: page });
    expect(resolved.page).toHaveLength(2);
    expect(resolved.page[0]).toMatchObject({ reviewer: "Ada Admin", reviewNote: "Fixed step 2" });

    await admin.mutation(api.admin.content.review, { reportId: resolved.page[0].reportId, status: "open" });
    const reopened = await admin.query(api.admin.content.reports, { status: "open", paginationOpts: page });
    expect(reopened.page[0]).toMatchObject({ reviewer: null, reviewNote: null });
  });
});
