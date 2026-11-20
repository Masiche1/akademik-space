import { differenceInMinutes, format, formatDistanceToNowStrict } from "date-fns";

export type SetKind = "assignment" | "exam";

export const SET_KIND_LABEL: Record<SetKind, string> = { assignment: "Assignment", exam: "Exam" };

export const setPath = (assignmentId: string) => `/sets/${assignmentId}`;
export const newSetPath = (classId: string) => `/teach/classes/${classId}/sets/new`;
export const setResultsPath = (assignmentId: string) => `/teach/sets/${assignmentId}`;

/** "Due Fri 14 Nov, 17:00" in the viewer's own time zone. */
export const formatDue = (iso: string) => format(new Date(iso), "EEE d MMM, HH:mm");

export const formatMinutes = (minutes: number) =>
  minutes < 60 ? `${minutes} min` : `${Math.floor(minutes / 60)} h${minutes % 60 ? ` ${minutes % 60} min` : ""}`;

/** "12:05" style countdown from milliseconds left. */
export function formatCountdown(ms: number): string {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
}

export type SittingStatus = "not-started" | "in-progress" | "marking" | "marked" | "missed";

export const SITTING_LABEL: Record<SittingStatus, string> = {
  "not-started": "Not started",
  "in-progress": "In progress",
  marking: "Awaiting marking",
  marked: "Marked",
  missed: "Missed",
};

/** Where a student is with a set. */
export function sittingStatus(
  sitting: { closed: boolean; pendingCount: number | null } | null,
  dueAt: string | null,
  now: number,
): SittingStatus {
  if (!sitting) return dueAt && Date.parse(dueAt) < now ? "missed" : "not-started";
  if (!sitting.closed) return "in-progress";
  return (sitting.pendingCount ?? 0) > 0 ? "marking" : "marked";
}

/** "Due in 3 days" or "Was due 2 hours ago". */
export function dueHint(dueAt: string, now: number): string {
  const due = new Date(dueAt);
  const rel = formatDistanceToNowStrict(due, { addSuffix: true });
  return due.getTime() > now ? `Due ${rel}` : `Was due ${rel}`;
}

export const minutesBetween = (fromIso: string, toIso: string) => Math.max(0, differenceInMinutes(new Date(toIso), new Date(fromIso)));

/** Minimum for a datetime-local input: now, in local time. */
export function localDateTimeValue(date: Date): string {
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}
