import { Building2, GraduationCap, School, type LucideIcon } from "lucide-react";
import type { Enrollment } from "@/hooks/use-account.ts";

export type OrgKind = Enrollment["kind"];
export type MemberRole = Enrollment["role"];

export const ORG_KIND_META: Record<OrgKind, { label: string; icon: LucideIcon; blurb: string }> = {
  tutor: { label: "Tutor practice", icon: GraduationCap, blurb: "Private tutoring for your own students." },
  school: { label: "School", icon: School, blurb: "Teachers and students at one school." },
  district: { label: "District", icon: Building2, blurb: "Every school and teacher in a district." },
};

export const ROLE_LABEL: Record<MemberRole, string> = {
  owner: "Owner",
  admin: "Administrator",
  teacher: "Teacher",
  student: "Student",
};

/** Owners and admins run the organisation (mirrors the backend rule). */
export const canManageRole = (role: MemberRole) => role === "owner" || role === "admin";

/** Shows codes as ABC-DEFG for easier reading. */
export const formatCode = (code: string) => (code.length > 3 ? `${code.slice(0, 3)}-${code.slice(3)}` : code);
