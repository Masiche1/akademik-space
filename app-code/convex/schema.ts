import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export const ATTEMPT_STATUS = v.union(
  v.literal("correct"),
  v.literal("partial"),
  v.literal("incorrect"),
  v.literal("self"),
);

export const ACCOUNT_TYPE = v.union(v.literal("learner"), v.literal("educator"));
export const ORG_KIND = v.union(v.literal("tutor"), v.literal("school"), v.literal("district"));
/** owner: created it. admin: runs a school or district. teacher: staff. student: enrolled learner. */
export const MEMBER_ROLE = v.union(v.literal("owner"), v.literal("admin"), v.literal("teacher"), v.literal("student"));

export const REPORT_STATUS = v.union(v.literal("open"), v.literal("resolved"), v.literal("dismissed"));
export const TERM_REPORT_KIND = v.union(v.literal("midterm"), v.literal("endterm"));
export const SET_KIND = v.union(v.literal("assignment"), v.literal("exam"));
/** Sensitive actions recorded in the admin audit log. */
export const AUDIT_ACTION = v.union(
  v.literal("admin_granted"),
  v.literal("admin_revoked"),
  v.literal("account_suspended"),
  v.literal("account_restored"),
  v.literal("member_removed"),
  v.literal("staff_role_changed"),
  v.literal("report_reviewed"),
  v.literal("org_created"),
  v.literal("join_code_reset"),
  v.literal("class_deleted"),
);
/** Counters kept per UTC day in dailyStats. */
export const DAILY_FIELDS = ["signups", "activeLearners", "attempts", "setsSubmitted", "reports", "orgsCreated"] as const;
/** A student's answer to one question in a set. Mirrors the Answer type in src/lib/grading.ts. */
export const SET_ANSWER = v.union(
  v.object({ type: v.literal("mcq"), choiceId: v.string() }),
  v.object({ type: v.literal("numeric"), values: v.array(v.string()) }),
  v.object({ type: v.literal("open"), text: v.string() }),
);

export default defineSchema({
  users: defineTable({
    tokenIdentifier: v.string(),
    name: v.optional(v.string()),
    email: v.optional(v.string()),
    /** Chosen on first visit to My account; unset until then. */
    accountType: v.optional(ACCOUNT_TYPE),
    /** Platform administrators can open the admin portal. Granted only by an internal function. */
    isPlatformAdmin: v.optional(v.boolean()),
    /** Suspended accounts are treated as signed out by every function. Set from the admin portal. */
    suspended: v.optional(v.boolean()),
  })
    .index("by_token", ["tokenIdentifier"])
    .index("by_isPlatformAdmin", ["isPlatformAdmin"])
    .index("by_email", ["email"])
    .index("by_suspended", ["suspended"])
    .index("by_accountType", ["accountType"])
    .searchIndex("search_name", { searchField: "name" }),

  /** A tutor practice, school or district that learners enrol in. */
  organizations: defineTable({
    name: v.string(),
    kind: ORG_KIND,
    createdBy: v.id("users"),
    /** Learners join with this code. */
    studentCode: v.string(),
    /** Teachers join schools and districts with this code. Tutor practices have none. */
    staffCode: v.optional(v.string()),
    studentCount: v.number(),
    staffCount: v.number(),
  })
    .index("by_studentCode", ["studentCode"])
    .index("by_staffCode", ["staffCode"])
    .index("by_createdBy", ["createdBy"])
    .index("by_kind", ["kind"])
    .searchIndex("search_name", { searchField: "name", filterFields: ["kind"] }),

  memberships: defineTable({
    orgId: v.id("organizations"),
    userId: v.id("users"),
    role: MEMBER_ROLE,
    joinedAt: v.string(),
  })
    .index("by_user", ["userId"])
    .index("by_org_and_user", ["orgId", "userId"])
    .index("by_org_and_role", ["orgId", "role"]),

  /** A teaching group inside an organisation, run by one teacher. */
  classes: defineTable({
    orgId: v.id("organizations"),
    name: v.string(),
    teacherId: v.id("users"),
    studentCount: v.number(),
    courseCount: v.number(),
  })
    .index("by_org", ["orgId"])
    .index("by_org_and_teacher", ["orgId", "teacherId"]),

  /** A student on a class roster. The student must be enrolled in the class's organisation. */
  classMembers: defineTable({
    classId: v.id("classes"),
    orgId: v.id("organizations"),
    userId: v.id("users"),
    addedAt: v.string(),
  })
    .index("by_class", ["classId"])
    .index("by_class_and_user", ["classId", "userId"])
    .index("by_user_and_org", ["userId", "orgId"]),

  /** A course the teacher has set for a class. courseId refers to the content catalog. */
  classCourses: defineTable({
    classId: v.id("classes"),
    courseId: v.string(),
    addedAt: v.string(),
  })
    .index("by_class", ["classId"])
    .index("by_class_and_course", ["classId", "courseId"]),

  /** A curated assignment or timed exam set for a class. Reveal solution is never shown while it is being sat. */
  assignments: defineTable({
    orgId: v.id("organizations"),
    classId: v.id("classes"),
    createdBy: v.id("users"),
    title: v.string(),
    kind: SET_KIND,
    instructions: v.optional(v.string()),
    /** Bounded by MAX_SET_QUESTIONS. Marks come from the content catalog at creation. */
    questions: v.array(v.object({ questionId: v.string(), totalMarks: v.number(), teacherMarked: v.boolean() })),
    totalMarks: v.number(),
    dueAt: v.optional(v.string()),
    timeLimitMinutes: v.optional(v.number()),
    /** When true, students who have handed in can see the markscheme for each question. */
    solutionsReleased: v.boolean(),
    /** Denormalised so class lists never scan submissions. */
    submittedCount: v.number(),
    createdAt: v.string(),
  }).index("by_class", ["classId"]),

  /** One student's sitting of an assignment. */
  assignmentSubmissions: defineTable({
    assignmentId: v.id("assignments"),
    classId: v.id("classes"),
    userId: v.id("users"),
    startedAt: v.string(),
    /** The earlier of the time limit and the due date. Answers are refused after it. */
    deadlineAt: v.optional(v.string()),
    submittedAt: v.optional(v.string()),
    marks: v.number(),
    answeredCount: v.number(),
    /** Written answers still waiting for the teacher to mark them. */
    pendingCount: v.number(),
  })
    .index("by_assignment", ["assignmentId"])
    .index("by_assignment_and_user", ["assignmentId", "userId"])
    .index("by_user_and_submittedAt", ["userId", "submittedAt"]),

  assignmentAnswers: defineTable({
    submissionId: v.id("assignmentSubmissions"),
    questionId: v.string(),
    answer: SET_ANSWER,
    /** Null until the teacher marks a written answer. */
    marks: v.union(v.number(), v.null()),
    feedback: v.optional(v.string()),
    savedAt: v.string(),
  })
    .index("by_submission", ["submissionId"])
    .index("by_submission_and_question", ["submissionId", "questionId"]),

  /** A mid-term or end-of-term report for a class, shared with parents as one PDF per student. */
  termReports: defineTable({
    orgId: v.id("organizations"),
    classId: v.id("classes"),
    createdBy: v.id("users"),
    title: v.string(),
    kind: TERM_REPORT_KIND,
    /** Calendar days (YYYY-MM-DD) shown on the report. */
    startDate: v.string(),
    endDate: v.string(),
    /** UTC instants for the start of startDate and end of endDate in the teacher's timezone, used to filter work. */
    startsAt: v.string(),
    endsAt: v.string(),
    createdAt: v.string(),
  }).index("by_class", ["classId"]),

  /** The teacher's comment for one student on one term report. */
  termReportComments: defineTable({
    reportId: v.id("termReports"),
    userId: v.id("users"),
    comment: v.string(),
    updatedAt: v.string(),
  }).index("by_report_and_user", ["reportId", "userId"]),

  questionReports: defineTable({
    questionId: v.string(),
    reason: v.union(
      v.literal("incorrect_answer"),
      v.literal("markscheme_error"),
      v.literal("unclear_wording"),
      v.literal("typo_or_formatting"),
      v.literal("other"),
    ),
    details: v.string(),
    reporterId: v.optional(v.id("users")),
    status: REPORT_STATUS,
    /** Set when a platform admin resolves or dismisses the report. */
    reviewedBy: v.optional(v.id("users")),
    reviewedAt: v.optional(v.string()),
    reviewNote: v.optional(v.string()),
  })
    .index("by_question", ["questionId"])
    .index("by_status", ["status"])
    .index("by_question_and_status", ["questionId", "status"]),

  /** Platform usage per UTC day (YYYY-MM-DD), incremented as activity happens so analytics never scan. */
  dailyStats: defineTable({
    day: v.string(),
    signups: v.number(),
    activeLearners: v.number(),
    attempts: v.number(),
    setsSubmitted: v.number(),
    reports: v.number(),
    orgsCreated: v.number(),
  }).index("by_day", ["day"]),

  /** Marks a user as active on a UTC day, so activeLearners counts each person once. */
  dailyActive: defineTable({
    day: v.string(),
    userId: v.id("users"),
  }).index("by_day_and_user", ["day", "userId"]),

  /** All-time usage per catalog course. */
  courseStats: defineTable({
    courseId: v.string(),
    attempts: v.number(),
    learners: v.number(),
  }).index("by_courseId", ["courseId"]),

  /** Append-only record of sensitive actions, newest read first. */
  auditLog: defineTable({
    action: AUDIT_ACTION,
    /** Undefined when run from the dashboard rather than by a signed-in person. */
    actorId: v.optional(v.id("users")),
    targetUserId: v.optional(v.id("users")),
    orgId: v.optional(v.id("organizations")),
    /** A readable summary captured at the time, so it survives later renames and deletions. */
    summary: v.string(),
  })
    .index("by_action", ["action"])
    .index("by_actorId", ["actorId"])
    .index("by_targetUserId", ["targetUserId"]),

  /** One row per student per question: their saved attempts on it. */
  questionProgress: defineTable({
    userId: v.id("users"),
    courseId: v.string(),
    conceptId: v.string(),
    questionId: v.string(),
    totalMarks: v.number(),
    bestMarks: v.number(),
    lastMarks: v.number(),
    lastStatus: ATTEMPT_STATUS,
    attemptCount: v.number(),
    lastAttemptAt: v.string(),
  })
    .index("by_user_and_question", ["userId", "questionId"])
    .index("by_user_and_course", ["userId", "courseId"])
    .index("by_user_and_lastAttemptAt", ["userId", "lastAttemptAt"]),

  /** Per-course totals, kept in sync by progress.record so the dashboard never scans questions. */
  courseProgress: defineTable({
    userId: v.id("users"),
    courseId: v.string(),
    questionsAttempted: v.number(),
    questionsSecure: v.number(),
    marksEarned: v.number(),
    marksAvailable: v.number(),
    lastAttemptAt: v.string(),
  })
    .index("by_user_and_course", ["userId", "courseId"])
    .index("by_user_and_lastAttemptAt", ["userId", "lastAttemptAt"]),
});
