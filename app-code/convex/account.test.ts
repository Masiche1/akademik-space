import { convexTest } from "convex-test";
import { describe, expect, test } from "vitest";
import { api, internal } from "./_generated/api";
import schema from "./schema";
import { modules } from "./test.setup";
import { generateCode, joinError, normalizeCode, validateOrgName } from "./lib/orgs";

const setup = () => {
  const t = convexTest(schema, modules);
  const tutor = t.withIdentity({ tokenIdentifier: "iss|tutor", name: "Tess Tutor", email: "tess@example.com" });
  const student = t.withIdentity({ tokenIdentifier: "iss|student", name: "Sam" });
  const teacher = t.withIdentity({ tokenIdentifier: "iss|teacher", name: "Tom" });
  return { t, tutor, student, teacher };
};

describe("org helpers", () => {
  test("codes use the unambiguous alphabet", () => {
    expect(generateCode()).toMatch(/^[A-HJKMNP-Z2-9]{7}$/);
  });
  test("normalises typed codes", () => expect(normalizeCode(" abc-12 34 ")).toBe("ABC1234"));
  test("validates names", () => {
    expect(validateOrgName(" a ")).not.toBeNull();
    expect(validateOrgName("x".repeat(81))).not.toBeNull();
    expect(validateOrgName("Northside High")).toBeNull();
  });
  test("only educators may use staff codes", () => {
    expect(joinError("learner", true)).not.toBeNull();
    expect(joinError(undefined, true)).not.toBeNull();
    expect(joinError("educator", true)).toBeNull();
    expect(joinError(undefined, false)).toBeNull();
  });
});

describe("account functions", () => {
  test("signed-out users see nothing and cannot join", async () => {
    const { t } = setup();
    expect(await t.query(api.account.me, {})).toBeNull();
    await expect(t.mutation(api.account.joinWithCode, { code: "ABCDEFG" })).rejects.toThrow(/sign in/i);
  });

  test("learners cannot create organisations", async () => {
    const { student } = setup();
    await student.mutation(api.account.setAccountType, { accountType: "learner" });
    await expect(student.mutation(api.account.createOrganization, { name: "My School", kind: "school" })).rejects.toThrow(/educator/);
  });

  test("a student enrols with a tutor's code and cannot see the code", async () => {
    const { tutor, student } = setup();
    await tutor.mutation(api.account.setAccountType, { accountType: "educator" });
    await tutor.mutation(api.account.createOrganization, { name: "Tess Tutoring", kind: "tutor" });
    const owner = await tutor.query(api.account.me, {});
    const org = owner?.enrollments[0];
    expect(org?.role).toBe("owner");
    expect(org?.staffCode).toBeNull();
    const code = org?.studentCode ?? "";

    const joined = await student.mutation(api.account.joinWithCode, { code: code.toLowerCase() });
    expect(joined).toMatchObject({ name: "Tess Tutoring", role: "student" });
    const view = await student.query(api.account.me, {});
    expect(view?.enrollments[0]).toMatchObject({ role: "student", studentCode: null, studentCount: 1 });
    await expect(student.mutation(api.account.joinWithCode, { code })).rejects.toThrow(/already/);
  });

  test("staff codes need an educator account and make the user a teacher", async () => {
    const { tutor, teacher, student } = setup();
    await tutor.mutation(api.account.setAccountType, { accountType: "educator" });
    await tutor.mutation(api.account.createOrganization, { name: "Northside High", kind: "school" });
    const staffCode = (await tutor.query(api.account.me, {}))?.enrollments[0]?.staffCode ?? "";
    expect(staffCode).toHaveLength(7);

    await expect(student.mutation(api.account.joinWithCode, { code: staffCode })).rejects.toThrow(/educator/);
    await teacher.mutation(api.account.setAccountType, { accountType: "educator" });
    expect((await teacher.mutation(api.account.joinWithCode, { code: staffCode })).role).toBe("teacher");
    // A teacher cannot see or change codes.
    const seen = (await teacher.query(api.account.me, {}))?.enrollments[0];
    expect(seen?.staffCode).toBeNull();
    await expect(teacher.mutation(api.account.regenerateCode, { orgId: seen!.orgId, which: "student" })).rejects.toThrow(/run this/);
  });

  test("regenerated codes stop the old one working; leaving updates counts; creators cannot leave", async () => {
    const { tutor, student } = setup();
    await tutor.mutation(api.account.setAccountType, { accountType: "educator" });
    const orgId = await tutor.mutation(api.account.createOrganization, { name: "Tess Tutoring", kind: "tutor" });
    const oldCode = (await tutor.query(api.account.me, {}))?.enrollments[0]?.studentCode ?? "";
    const newCode = await tutor.mutation(api.account.regenerateCode, { orgId, which: "student" });
    expect(newCode).not.toBe(oldCode);
    await expect(student.mutation(api.account.joinWithCode, { code: oldCode })).rejects.toThrow(/No organisation/);

    await student.mutation(api.account.joinWithCode, { code: newCode });
    await student.mutation(api.account.leave, { orgId });
    expect((await tutor.query(api.account.me, {}))?.enrollments[0]?.studentCount).toBe(0);
    await expect(tutor.mutation(api.account.leave, { orgId })).rejects.toThrow(/created/);
  });

  test("educators in a staff role cannot switch back to learner", async () => {
    const { tutor } = setup();
    await tutor.mutation(api.account.setAccountType, { accountType: "educator" });
    await tutor.mutation(api.account.createOrganization, { name: "Tess Tutoring", kind: "tutor" });
    await expect(tutor.mutation(api.account.setAccountType, { accountType: "learner" })).rejects.toThrow(/Leave/);
  });

  test("platform admin is granted only internally", async () => {
    const { t, tutor } = setup();
    await tutor.mutation(api.account.setAccountType, { accountType: "educator" });
    expect((await tutor.query(api.account.me, {}))?.isPlatformAdmin).toBe(false);
    await t.mutation(internal.account.setPlatformAdmin, { email: "TESS@example.com", isPlatformAdmin: true });
    expect((await tutor.query(api.account.me, {}))?.isPlatformAdmin).toBe(true);
  });
});
