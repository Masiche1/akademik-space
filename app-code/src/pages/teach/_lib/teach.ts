import type { FunctionReturnType } from "convex/server";
import type { api } from "@/convex/_generated/api.js";

export type Portal = NonNullable<FunctionReturnType<typeof api.teach.portal>>;
export type PortalOrg = Portal["orgs"][number];
export type PortalClass = PortalOrg["classes"][number];
export type ClassDetail = NonNullable<FunctionReturnType<typeof api.teach.classDetail>>;
export type RosterRow = ClassDetail["roster"][number];

export const classPath = (classId: string) => `/teach/classes/${classId}`;
export const classReportsPath = (classId: string) => `/teach/classes/${classId}/reports`;
export const learnerPath = (orgId: string, userId: string) => `/teach/${orgId}/learners/${userId}`;
