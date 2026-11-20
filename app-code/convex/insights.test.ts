import { convexTest } from "convex-test";
import { describe, expect, test } from "vitest";
import { api, internal } from "./_generated/api";
import schema from "./schema";
import { modules } from "./test.setup";
import { COURSES } from "../src/content/catalog";
import { dayRange, fillSeries, sumSeries, emptyCounts } from "./lib/analytics";

const course = COURSES[0];
const concept = course.units[0].lessons[0].concepts[0];
const question = concept.questions[0];
const page = { numItems: 50, cursor: null };

async function setup() {
  const t = convexTest(schema, modules);
  const admin = t.withIdentity({ tokenIdentifier: "iss|admin", name: "Ada Admin", email: "ada@example.com" });
  const sam = t.withIdentity({ tokenIdentifier: "iss|sam", name: "Sam Student", email: "sam@example.com" });
  await admin.mutation(api.account.setAccountType, { accountType: "learner" });
  await sam.mutation(api.account.setAccountType, { accountType: "learner" });
  await t.mutation(internal.account.setPlatformAdmin, { email: "ada@example.com", isPlatformAdmin: true });
  return { t, admin, sam };
}

const attempt = { courseId: course.id, conceptId: concept.id, questionId: question.id, marks: 0, totalMarks: question.totalMarks, status: "incorrect" as const };

describe("analytics helpers", () => {
  test("fills missing days with zeros, oldest first", () => {
    const end = Date.UTC(2026, 10, 7, 12);
    expect(dayRange(end, 3)).toEqual(["2026-11-05", "2026-11-06", "2026-11-07"]);
    const series = fillSeries([{ day: "2026-11-06", ...emptyCounts(), attempts: 4 }], end, 3);
    expect(series.map((p) => p.attempts)).toEqual([0, 4, 0]);
    expect(sumSeries(series).attempts).toBe(4);
  });
});

describe("platform analytics", () => {
  test("counts signups, attempts, distinct active learners and course usage", async () => {
    const { admin, sam } = await setup();
    await sam.mutation(api.progress.record, attempt);
    await sam.mutation(api.progress.record, attempt);
    await admin.mutation(api.progress.record, attempt);
    await sam.mutation(api.reports.create, { questionId: question.id, reason: "other", details: "" });

    const data = await admin.query(api.admin.insights.analytics, { days: 7 });
    expect(data.series).toHaveLength(7);
    expect(data.totals).toMatchObject({ signups: 2, attempts: 3, activeLearners: 2, reports: 1 });
    expect(data.previous.attempts).toBe(0);
    expect(data.courses).toEqual([{ courseId: course.id, title: course.title, attempts: 3, learners: 2 }]);
  });

  test("only admins can read analytics or the audit log", async () => {
    const { sam } = await setup();
    await expect(sam.query(api.admin.insights.analytics, { days: 30 })).rejects.toThrow(/platform admins/);
    await expect(sam.query(api.admin.insights.auditLog, { action: "all", paginationOpts: page })).rejects.toThrow(/platform admins/);
  });
});

describe("audit log", () => {
  test("records sensitive actions with who did them", async () => {
    const { admin, sam } = await setup();
    const samId = (await admin.query(api.admin.users.list, { filter: "all", search: "sam@example.com", paginationOpts: page })).page[0].userId;
    await admin.mutation(api.admin.users.setSuspended, { userId: samId, suspended: true });
    await admin.mutation(api.admin.users.setSuspended, { userId: samId, suspended: false });
    await expect(sam.mutation(api.admin.users.setSuspended, { userId: samId, suspended: true })).rejects.toThrow();

    const log = await admin.query(api.admin.insights.auditLog, { action: "all", paginationOpts: page });
    expect(log.page.map((e) => e.action)).toEqual(["account_restored", "account_suspended", "admin_granted"]);
    expect(log.page[0]).toMatchObject({ actorName: "Ada Admin", summary: "Ada Admin restored Sam Student" });
    // The dashboard grant has no signed-in actor.
    expect(log.page[2].actorName).toBeNull();

    const suspensions = await admin.query(api.admin.insights.auditLog, { action: "account_suspended", paginationOpts: page });
    expect(suspensions.page).toHaveLength(1);
    expect(await admin.query(api.admin.insights.auditForUser, { userId: samId })).toHaveLength(2);
  });

  test("logs organisation creation and report reviews, but not failed changes", async () => {
    const { t, admin } = await setup();
    const tess = t.withIdentity({ tokenIdentifier: "iss|tess", name: "Tess Teacher", email: "tess@example.com" });
    await tess.mutation(api.account.setAccountType, { accountType: "educator" });
    await tess.mutation(api.account.createOrganization, { name: "Hill School", kind: "school" });
    await t.mutation(api.reports.create, { questionId: question.id, reason: "other", details: "" });
    const open = await admin.query(api.admin.content.reports, { status: "open", paginationOpts: page });
    await admin.mutation(api.admin.content.review, { reportId: open.page[0].reportId, status: "dismissed" });
    const adaId = (await admin.query(api.admin.users.list, { filter: "admins", search: "", paginationOpts: page })).page[0].userId;
    await expect(admin.mutation(api.admin.users.setSuspended, { userId: adaId, suspended: true })).rejects.toThrow();

    const log = await admin.query(api.admin.insights.auditLog, { action: "all", paginationOpts: page });
    expect(log.page.map((e) => e.action)).toEqual(["report_reviewed", "org_created", "admin_granted"]);
    expect(log.page[1].summary).toBe('Tess Teacher created the school "Hill School"');
    expect(log.page[0].summary).toContain("dismissed a report");
  });
});
