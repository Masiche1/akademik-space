import { convexTest } from "convex-test";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { api } from "./_generated/api";
import schema from "./schema";
import { modules } from "./test.setup";
import type { Id } from "./_generated/dataModel";
import { COURSES } from "../src/content/catalog";
import type { Question } from "../src/content/types";
import { buildQuestions, isClosed, markAnswer, sittingDeadline } from "./lib/assignments";
import { conceptTotals, questionBreakdown } from "./teachReports";
import { sittingResult } from "./termReports";
import { validateComment, validateTerm } from "./lib/termReports";

const PAGE = { numItems: 50, cursor: null };
const COURSE = COURSES.find((c) => c.id === "edx-maths-y10");
const ALL = COURSE?.units.flatMap((u) => u.lessons.flatMap((l) => l.concepts.flatMap((k) => k.questions))) ?? [];
const pick = (type: Question["response"]["type"]) => {
  const q = ALL.find((x) => x.response.type === type);
  if (!q) throw new Error(`No ${type} question in the test course`);
  return q;
};
const MCQ = pick("mcq");
const OPEN = pick("open");
const correctChoice = MCQ.response.type === "mcq" ? MCQ.response.correctChoiceId : "";
const wrongChoice = MCQ.response.type === "mcq" ? (MCQ.response.choices.find((c) => c.id !== correctChoice)?.id ?? "") : "";

/** A school with one teacher, a class of two students and an outsider. */
async function classroom() {
  const t = convexTest(schema, modules);
  const as = (key: string, name: string) => t.withIdentity({ tokenIdentifier: `iss|${key}`, name });
  const teacher = as("ta", "Tara Teacher");
  const other = as("tb", "Ben Teacher");
  const sam = as("sam", "Sam Student");
  const zoe = as("zoe", "Zoe Student");
  const outsider = as("out", "Olly Outsider");
  for (const u of [teacher, other]) await u.mutation(api.account.setAccountType, { accountType: "educator" });
  const orgId = await teacher.mutation(api.account.createOrganization, { name: "Northside High", kind: "school" });
  const org = (await teacher.query(api.account.me, {}))?.enrollments[0];
  await other.mutation(api.account.joinWithCode, { code: org?.staffCode ?? "" });
  await sam.mutation(api.account.joinWithCode, { code: org?.studentCode ?? "" });
  await zoe.mutation(api.account.joinWithCode, { code: org?.studentCode ?? "" });
  const dir = await teacher.query(api.teach.students, { orgId, paginationOpts: PAGE });
  const ids = dir.page.map((s) => s.userId as Id<"users">);
  const classId = await teacher.mutation(api.teach.createClass, { orgId, name: "10B Maths" });
  await teacher.mutation(api.teach.addStudents, { classId, userIds: ids });
  return { t, teacher, other, sam, zoe, outsider, classId };
}

describe("assignment helpers", () => {
  test("marks come from the catalog, not the client", () => {
    const [q] = buildQuestions([MCQ.id, MCQ.id]);
    expect(q).toEqual({ questionId: MCQ.id, totalMarks: MCQ.totalMarks, teacherMarked: false });
    expect(buildQuestions([OPEN.id])[0]?.teacherMarked).toBe(true);
    expect(() => buildQuestions(["not-a-question"])).toThrow(/no longer exists/);
    expect(() => buildQuestions([])).toThrow(/at least one/);
  });

  test("server marking", () => {
    expect(markAnswer(MCQ.id, { type: "mcq", choiceId: correctChoice })).toBe(MCQ.totalMarks);
    expect(markAnswer(MCQ.id, { type: "mcq", choiceId: wrongChoice })).toBe(0);
    // A mismatched answer shape earns nothing.
    expect(markAnswer(MCQ.id, { type: "open", text: "hi" })).toBe(0);
    expect(markAnswer(OPEN.id, { type: "open", text: "My proof" })).toBeNull();
  });

  test("a sitting ends at the time limit or the due date, whichever is first", () => {
    const start = Date.parse("2026-01-01T10:00:00Z");
    expect(sittingDeadline(start, 30)).toBe("2026-01-01T10:30:00.000Z");
    expect(sittingDeadline(start, 30, "2026-01-01T10:10:00Z")).toBe("2026-01-01T10:10:00.000Z");
    expect(sittingDeadline(start)).toBeUndefined();
    expect(isClosed({ deadlineAt: "2026-01-01T10:30:00.000Z" }, Date.parse("2026-01-01T10:30:20Z"))).toBe(false); // grace period
    expect(isClosed({ deadlineAt: "2026-01-01T10:30:00.000Z" }, Date.parse("2026-01-01T10:31:00Z"))).toBe(true);
  });
});

describe("assignments and exams", () => {
  beforeEach(() => { vi.useFakeTimers(); });
  afterEach(() => { vi.useRealTimers(); });

  test("only the class teacher can set work; exams need a time limit", async () => {
    const { other, sam, teacher, classId } = await classroom();
    const args = { classId, title: "Test", kind: "exam" as const, questionIds: [MCQ.id] };
    await expect(teacher.mutation(api.assignments.create, args)).rejects.toThrow(/time limit/);
    await expect(other.mutation(api.assignments.create, { ...args, timeLimitMinutes: 30 })).rejects.toThrow(/class teacher/);
    await expect(sam.mutation(api.assignments.create, { ...args, timeLimitMinutes: 30 })).rejects.toThrow(/staff/);
    expect(await other.query(api.assignments.forClass, { classId })).toEqual([]);
  });

  test("questions are hidden until start, scores until hand-in, solutions until released", async () => {
    const { t, teacher, sam, outsider, classId } = await classroom();
    const id = await teacher.mutation(api.assignments.create, { classId, title: "Homework", kind: "assignment", questionIds: [MCQ.id, OPEN.id] });

    expect(await outsider.query(api.assignments.sitting, { assignmentId: id })).toBeNull();
    const before = await sam.query(api.assignments.sitting, { assignmentId: id });
    expect(before?.questions).toEqual([]);
    expect(await sam.query(api.assignments.lockedQuestions, {})).toEqual(expect.arrayContaining([MCQ.id, OPEN.id]));

    const subId = await sam.mutation(api.assignments.start, { assignmentId: id });
    await sam.mutation(api.assignments.saveAnswer, { submissionId: subId, questionId: MCQ.id, answer: { type: "mcq", choiceId: correctChoice } });
    await sam.mutation(api.assignments.saveAnswer, { submissionId: subId, questionId: OPEN.id, answer: { type: "open", text: "Working" } });
    await expect(sam.mutation(api.assignments.saveAnswer, { submissionId: subId, questionId: "elsewhere", answer: { type: "open", text: "x" } }))
      .rejects.toThrow(/not in this set/);

    const during = await sam.query(api.assignments.sitting, { assignmentId: id });
    expect(during?.sitting?.marks).toBeNull();
    expect(during?.answers.every((a) => a.marks === null)).toBe(true);
    await expect(teacher.mutation(api.assignments.markWritten, { submissionId: subId, questionId: OPEN.id, marks: 1 })).rejects.toThrow(/handed in/);

    await sam.mutation(api.assignments.submit, { submissionId: subId });
    const after = await sam.query(api.assignments.sitting, { assignmentId: id });
    expect(after?.sitting).toMatchObject({ closed: true, marks: MCQ.totalMarks, pendingCount: 1 });
    expect(after?.showSolutions).toBe(false);
    await expect(sam.mutation(api.assignments.saveAnswer, { submissionId: subId, questionId: MCQ.id, answer: { type: "mcq", choiceId: wrongChoice } }))
      .rejects.toThrow(/already handed/);

    await expect(teacher.mutation(api.assignments.markWritten, { submissionId: subId, questionId: OPEN.id, marks: OPEN.totalMarks + 1 })).rejects.toThrow(/whole number/);
    await teacher.mutation(api.assignments.markWritten, { submissionId: subId, questionId: OPEN.id, marks: 1, feedback: "Good start" });
    await teacher.mutation(api.assignments.setSolutionsReleased, { assignmentId: id, released: true });
    const marked = await sam.query(api.assignments.sitting, { assignmentId: id });
    expect(marked?.sitting).toMatchObject({ marks: MCQ.totalMarks + 1, pendingCount: 0 });
    expect(marked?.showSolutions).toBe(true);
    expect(marked?.answers.find((a) => a.questionId === OPEN.id)?.feedback).toBe("Good start");
    expect(await sam.query(api.assignments.lockedQuestions, {})).toEqual([]);

    // Marked answers feed the student's course progress.
    const progress = await t.run((ctx) => ctx.db.query("courseProgress").collect());
    expect(progress[0]).toMatchObject({ courseId: "edx-maths-y10", questionsAttempted: 2, marksEarned: MCQ.totalMarks + 1 });
    const results = await teacher.query(api.assignments.results, { assignmentId: id });
    expect(results?.students.find((s) => s.name === "Sam Student")?.submission).toMatchObject({ closed: true, pendingCount: 0 });
    expect((await teacher.query(api.assignments.forClass, { classId }))[0]?.submittedCount).toBe(1);
  });

  test("answers are refused once an exam's time is up", async () => {
    const { teacher, zoe, sam, classId } = await classroom();
    const id = await teacher.mutation(api.assignments.create, { classId, title: "Unit test", kind: "exam", questionIds: [MCQ.id], timeLimitMinutes: 10 });
    const subId = await zoe.mutation(api.assignments.start, { assignmentId: id });
    // Another student's sitting can't be touched.
    await expect(sam.mutation(api.assignments.submit, { submissionId: subId })).rejects.toThrow(/not found/);
    vi.advanceTimersByTime(11 * 60_000);
    await expect(zoe.mutation(api.assignments.saveAnswer, { submissionId: subId, questionId: MCQ.id, answer: { type: "mcq", choiceId: correctChoice } }))
      .rejects.toThrow(/Time is up/);
    const view = await zoe.query(api.assignments.sitting, { assignmentId: id });
    expect(view?.sitting).toMatchObject({ closed: true, marks: 0 });
  });

  test("deleting a class removes its sets", async () => {
    const { t, teacher, sam, classId } = await classroom();
    const id = await teacher.mutation(api.assignments.create, { classId, title: "Homework", kind: "assignment", questionIds: [MCQ.id] });
    await sam.mutation(api.assignments.start, { assignmentId: id });
    await teacher.mutation(api.teach.deleteClass, { classId });
    await t.finishAllScheduledFunctions(vi.runAllTimers);
    const left = await t.run(async (ctx) => [
      ...(await ctx.db.query("assignments").collect()),
      ...(await ctx.db.query("assignmentSubmissions").collect()),
    ]);
    expect(left).toEqual([]);
  });
});

describe("teacher reports", () => {
  beforeEach(() => { vi.useFakeTimers(); });
  afterEach(() => { vi.useRealTimers(); });

  test("question breakdown counts unanswered and unmarked answers correctly", () => {
    const questions = [{ questionId: "a", totalMarks: 2, teacherMarked: false }, { questionId: "b", totalMarks: 4, teacherMarked: true }];
    const rows = questionBreakdown(questions, [
      { questionId: "a", marks: 2 }, { questionId: "a", marks: 1 }, { questionId: "b", marks: null },
    ]);
    expect(rows[0]).toMatchObject({ answered: 2, marked: 2, fullMarks: 1, marksEarned: 3, pending: 0 });
    expect(rows[1]).toMatchObject({ answered: 1, marked: 0, pending: 1, marksEarned: 0 });
    expect(conceptTotals([
      { conceptId: "c1", bestMarks: 5, totalMarks: 3 }, { conceptId: "c1", bestMarks: 1, totalMarks: 2 },
    ])).toEqual([{ conceptId: "c1", earned: 4, attempted: 2 }]);
  });

  test("only the class teacher and managers see a class's reports", async () => {
    const { teacher, other, sam, zoe, classId } = await classroom();
    await teacher.mutation(api.teach.setCourse, { classId, courseId: "edx-maths-y10", assigned: true });
    const id = await teacher.mutation(api.assignments.create, { classId, title: "Homework", kind: "assignment", questionIds: [MCQ.id, OPEN.id] });
    const subId = await sam.mutation(api.assignments.start, { assignmentId: id });
    await sam.mutation(api.assignments.saveAnswer, { submissionId: subId, questionId: MCQ.id, answer: { type: "mcq", choiceId: correctChoice } });
    // Zoe is still sitting it: her answers must not appear in the breakdown yet.
    const zoeSub = await zoe.mutation(api.assignments.start, { assignmentId: id });
    await zoe.mutation(api.assignments.saveAnswer, { submissionId: zoeSub, questionId: MCQ.id, answer: { type: "mcq", choiceId: wrongChoice } });
    await sam.mutation(api.assignments.submit, { submissionId: subId });

    const sets = await teacher.query(api.teachReports.classSets, { classId });
    expect(sets?.sets[0]).toMatchObject({ started: 2, closed: 1, averagePercent: Math.round((MCQ.totalMarks / (MCQ.totalMarks + OPEN.totalMarks)) * 100), pending: 0 });
    const breakdown = await teacher.query(api.teachReports.setQuestions, { assignmentId: id });
    expect(breakdown?.sittings).toBe(1);
    expect(breakdown?.questions[0]).toMatchObject({ answered: 1, fullMarks: 1 });
    expect(breakdown?.questions[1]).toMatchObject({ answered: 0 });

    const course = await teacher.query(api.teachReports.classCourse, { classId, courseId: "edx-maths-y10" });
    const samRow = course?.students.find((s) => s.name === "Sam Student");
    expect(samRow?.concepts).toEqual([{ conceptId: expect.any(String), earned: MCQ.totalMarks, attempted: 1 }]);

    // Another teacher, and students, see nothing.
    expect(await other.query(api.teachReports.classSets, { classId })).toBeNull();
    expect(await other.query(api.teachReports.classCourse, { classId, courseId: "edx-maths-y10" })).toBeNull();
    expect(await sam.query(api.teachReports.setQuestions, { assignmentId: id })).toBeNull();

    const orgId = (await teacher.query(api.account.me, {}))?.enrollments[0]?.orgId;
    if (!orgId) throw new Error("No organisation");
    const samId = samRow?.userId;
    if (!samId) throw new Error("No student");
    const history = await teacher.query(api.teachReports.learnerSets, { orgId, userId: samId });
    expect(history).toHaveLength(1);
    expect(history[0]).toMatchObject({ title: "Homework", closed: true, marks: MCQ.totalMarks });
    expect(await other.query(api.teachReports.learnerSets, { orgId, userId: samId })).toEqual([]);
  });
});

describe("term reports", () => {
  beforeEach(() => { vi.useFakeTimers(); });
  afterEach(() => { vi.useRealTimers(); });

  const TERM = { title: "Autumn mid-term", kind: "midterm" as const, startDate: "2026-09-01", endDate: "2026-10-31", startsAt: "2026-09-01T00:00:00.000Z", endsAt: "2026-10-31T23:59:59.999Z" };

  test("date range and comment rules", () => {
    expect(validateTerm(TERM)).toBe("Autumn mid-term");
    expect(() => validateTerm({ ...TERM, title: "  " })).toThrow(/title/);
    expect(() => validateTerm({ ...TERM, endDate: "2026-08-01" })).toThrow(/end after/);
    expect(() => validateTerm({ ...TERM, endsAt: "2028-01-01T00:00:00.000Z" })).toThrow(/at most/);
    expect(() => validateComment("x".repeat(1501))).toThrow(/1500/);
    expect(sittingResult(null, { dueAt: "2026-01-01T00:00:00.000Z" }, Date.parse("2026-02-01"))).toEqual({ status: "not-done", marks: null });
    expect(sittingResult({ submittedAt: undefined, deadlineAt: undefined, marks: 3, pendingCount: 0 }, {}, 0)).toEqual({ status: "in-progress", marks: null });
    expect(sittingResult({ submittedAt: "x", deadlineAt: undefined, marks: 3, pendingCount: 1 }, {}, 0)).toEqual({ status: "marking", marks: 3 });
  });

  test("only the class teacher writes comments, and set scores follow the term window", async () => {
    vi.setSystemTime(new Date("2026-09-15T10:00:00Z"));
    const { teacher, other, sam, classId } = await classroom();
    const inTermSet = await teacher.mutation(api.assignments.create, { classId, title: "In term", kind: "assignment", questionIds: [MCQ.id] });
    const subId = await sam.mutation(api.assignments.start, { assignmentId: inTermSet });
    await sam.mutation(api.assignments.saveAnswer, { submissionId: subId, questionId: MCQ.id, answer: { type: "mcq", choiceId: correctChoice } });
    await sam.mutation(api.assignments.submit, { submissionId: subId });
    vi.setSystemTime(new Date("2026-11-15T10:00:00Z"));
    await teacher.mutation(api.assignments.create, { classId, title: "After term", kind: "assignment", questionIds: [MCQ.id] });

    const reportId = await teacher.mutation(api.termReports.create, { classId, ...TERM });
    const report = await teacher.query(api.termReports.get, { reportId });
    const samId = report?.students.find((s) => s.name === "Sam Student")?.userId;
    if (!samId) throw new Error("No student");

    await teacher.mutation(api.termReports.saveComment, { reportId, userId: samId, comment: "  Great effort.  " });
    await expect(other.mutation(api.termReports.saveComment, { reportId, userId: samId, comment: "Hi" })).rejects.toThrow(/class teacher/);
    expect(await other.query(api.termReports.get, { reportId })).toBeNull();
    expect(await sam.query(api.termReports.student, { reportId, userId: samId })).toBeNull();

    const data = await teacher.query(api.termReports.student, { reportId, userId: samId });
    expect(data?.comment).toBe("Great effort.");
    expect(data?.sets.map((s) => s.title)).toEqual(["In term"]);
    expect(data?.sets[0]).toMatchObject({ status: "marked", marks: MCQ.totalMarks });

    // Clearing a comment deletes it; deleting the report removes it from the list.
    await teacher.mutation(api.termReports.saveComment, { reportId, userId: samId, comment: "" });
    expect((await teacher.query(api.termReports.get, { reportId }))?.students.every((s) => s.comment === "")).toBe(true);
    await teacher.mutation(api.termReports.remove, { reportId });
    expect((await teacher.query(api.termReports.list, { classId }))?.reports).toEqual([]);
  });
});
