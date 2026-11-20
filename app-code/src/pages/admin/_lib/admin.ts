import type { FunctionArgs, FunctionReturnType } from "convex/server";
import type { api } from "@/convex/_generated/api.js";

export type UserFilter = FunctionArgs<typeof api.admin.users.list>["filter"];
export type UserRow = FunctionReturnType<typeof api.admin.users.list>["page"][number];
export type UserDetail = NonNullable<FunctionReturnType<typeof api.admin.users.get>>;
export type OrgRow = FunctionReturnType<typeof api.admin.orgs.list>["page"][number];
export type ReportStatus = FunctionArgs<typeof api.admin.content.reports>["status"];
export type ReportRow = FunctionReturnType<typeof api.admin.content.reports>["page"][number];
export type Overview = FunctionReturnType<typeof api.admin.users.overview>;
export type Analytics = FunctionReturnType<typeof api.admin.insights.analytics>;
export type AnalyticsDays = FunctionArgs<typeof api.admin.insights.analytics>["days"];
export type AuditFilter = FunctionArgs<typeof api.admin.insights.auditLog>["action"];
export type AuditAction = Exclude<AuditFilter, "all">;
export type AuditRow = FunctionReturnType<typeof api.admin.insights.auditLog>["page"][number];

export const ADMIN_TABS = ["overview", "analytics", "users", "organisations", "content", "audit"] as const;
export type AdminTab = (typeof ADMIN_TABS)[number];
export const isAdminTab = (raw: string | null): raw is AdminTab => ADMIN_TABS.some((t) => t === raw);

export const adminUserPath = (userId: string) => `/admin/users/${userId}`;
export const adminTabPath = (tab: AdminTab) => `/admin?tab=${tab}`;
export const practicePath = (questionId: string) => `/practice/${questionId}`;

export const USER_FILTERS: { value: UserFilter; label: string }[] = [
  { value: "all", label: "Everyone" },
  { value: "educators", label: "Educators" },
  { value: "learners", label: "Learners" },
  { value: "admins", label: "Platform admins" },
  { value: "suspended", label: "Suspended" },
];

export const REPORT_REASON_LABEL: Record<ReportRow["reason"], string> = {
  incorrect_answer: "Wrong answer",
  markscheme_error: "Markscheme error",
  unclear_wording: "Unclear wording",
  typo_or_formatting: "Typo or display",
  other: "Something else",
};

export const REPORT_STATUS_LABEL: Record<ReportStatus, string> = {
  open: "Open",
  resolved: "Resolved",
  dismissed: "Dismissed",
};

export const ACCOUNT_TYPE_LABEL = { learner: "Learner", educator: "Educator" } as const;

export const ANALYTICS_DAYS: AnalyticsDays[] = [7, 30, 90];

export type AnalyticsMetric = "activeLearners" | "attempts" | "signups" | "setsSubmitted" | "reports" | "orgsCreated";
export const ANALYTICS_METRICS: { key: AnalyticsMetric; label: string; hint: string }[] = [
  { key: "activeLearners", label: "Active learners", hint: "Distinct learners each day" },
  { key: "attempts", label: "Questions answered", hint: "Practice and marked set answers" },
  { key: "signups", label: "New accounts", hint: "First sign-ins" },
  { key: "setsSubmitted", label: "Sets handed in", hint: "Assignments and exams" },
  { key: "reports", label: "Content reports", hint: "Raised on questions" },
  { key: "orgsCreated", label: "New organisations", hint: "Tutors, schools and districts" },
];

/** Percentage change from the previous period, or null when there is nothing to compare with. */
export function changePercent(current: number, previous: number): number | null {
  if (previous === 0) return null;
  return Math.round(((current - previous) / previous) * 100);
}

export const AUDIT_ACTION_LABEL: Record<AuditAction, string> = {
  admin_granted: "Admin granted",
  admin_revoked: "Admin removed",
  account_suspended: "Account suspended",
  account_restored: "Account restored",
  member_removed: "Member removed",
  staff_role_changed: "Staff role changed",
  report_reviewed: "Report reviewed",
  org_created: "Organisation created",
  join_code_reset: "Join code reset",
  class_deleted: "Class deleted",
};

const AUDIT_ACTIONS: AuditAction[] = [
  "admin_granted", "admin_revoked", "account_suspended", "account_restored", "member_removed",
  "staff_role_changed", "report_reviewed", "org_created", "join_code_reset", "class_deleted",
];

export const AUDIT_FILTERS: { value: AuditFilter; label: string }[] = [
  { value: "all", label: "Every action" },
  ...AUDIT_ACTIONS.map((a) => ({ value: a, label: AUDIT_ACTION_LABEL[a] })),
];

/** "1000+" when a server count hit its cap. */
export const formatCount = (c: { value: number; capped: boolean }) => `${c.value}${c.capped ? "+" : ""}`;

export const initial = (name: string | null) => (name ?? "?").trim().charAt(0).toUpperCase() || "?";
