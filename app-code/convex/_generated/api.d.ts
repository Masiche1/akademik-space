/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as account from "../account.js";
import type * as admin_content from "../admin/content.js";
import type * as admin_insights from "../admin/insights.js";
import type * as admin_orgs from "../admin/orgs.js";
import type * as admin_users from "../admin/users.js";
import type * as assignments from "../assignments.js";
import type * as lib_admin from "../lib/admin.js";
import type * as lib_analytics from "../lib/analytics.js";
import type * as lib_assignments from "../lib/assignments.js";
import type * as lib_attempts from "../lib/attempts.js";
import type * as lib_audit from "../lib/audit.js";
import type * as lib_auth from "../lib/auth.js";
import type * as lib_members from "../lib/members.js";
import type * as lib_orgs from "../lib/orgs.js";
import type * as lib_progress from "../lib/progress.js";
import type * as lib_teach from "../lib/teach.js";
import type * as lib_termReports from "../lib/termReports.js";
import type * as progress from "../progress.js";
import type * as reports from "../reports.js";
import type * as teach from "../teach.js";
import type * as teachReports from "../teachReports.js";
import type * as termReports from "../termReports.js";
import type * as users from "../users.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  account: typeof account;
  "admin/content": typeof admin_content;
  "admin/insights": typeof admin_insights;
  "admin/orgs": typeof admin_orgs;
  "admin/users": typeof admin_users;
  assignments: typeof assignments;
  "lib/admin": typeof lib_admin;
  "lib/analytics": typeof lib_analytics;
  "lib/assignments": typeof lib_assignments;
  "lib/attempts": typeof lib_attempts;
  "lib/audit": typeof lib_audit;
  "lib/auth": typeof lib_auth;
  "lib/members": typeof lib_members;
  "lib/orgs": typeof lib_orgs;
  "lib/progress": typeof lib_progress;
  "lib/teach": typeof lib_teach;
  "lib/termReports": typeof lib_termReports;
  progress: typeof progress;
  reports: typeof reports;
  teach: typeof teach;
  teachReports: typeof teachReports;
  termReports: typeof termReports;
  users: typeof users;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
