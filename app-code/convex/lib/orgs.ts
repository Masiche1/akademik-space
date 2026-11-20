import type { Doc } from "../_generated/dataModel.d.ts";

export type OrgKind = Doc<"organizations">["kind"];
export type MemberRole = Doc<"memberships">["role"];

/** No 0/O or 1/I/L, so codes read cleanly off a whiteboard. */
const CODE_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
export const CODE_LENGTH = 7;
export const MAX_ORGS_PER_USER = 20;
export const MAX_MEMBERSHIPS_PER_USER = 50;

export function generateCode(random: () => number = Math.random): string {
  let code = "";
  for (let i = 0; i < CODE_LENGTH; i++) code += CODE_ALPHABET[Math.floor(random() * CODE_ALPHABET.length)];
  return code;
}

/** Uppercases and strips spaces and dashes so "abc-12 34" matches "ABC1234". */
export const normalizeCode = (raw: string) => raw.toUpperCase().replace(/[\s-]/g, "");

export function validateOrgName(raw: string): string | null {
  const name = raw.trim();
  if (name.length < 2) return "Name must be at least 2 characters";
  if (name.length > 80) return "Name must be 80 characters or fewer";
  return null;
}

/** The role a creator gets: tutors own their practice; schools and districts are run by admins. */
export const creatorRole = (kind: OrgKind): MemberRole => (kind === "tutor" ? "owner" : "admin");

/** Owners and admins manage codes and, later, members. */
export const canManage = (role: MemberRole) => role === "owner" || role === "admin";

export const isStaffRole = (role: MemberRole) => role !== "student";

/** Learners can join anything; only educators may use a staff code. */
export function joinError(accountType: Doc<"users">["accountType"], viaStaffCode: boolean): string | null {
  if (viaStaffCode && accountType !== "educator") return "Staff codes are for educator accounts";
  return null;
}
