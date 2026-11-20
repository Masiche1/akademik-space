import { ConvexError } from "convex/values";
import type { QueryCtx } from "../_generated/server";
import type { Doc } from "../_generated/dataModel.d.ts";
import { currentUser } from "./auth.ts";

export const MAX_REVIEW_NOTE = 1000;
export const MAX_ADMINS = 50;
/** Upper bound for open reports read at once (overview counts and per-course tallies). */
export const MAX_OPEN_REPORTS = 500;

/** The signed-in platform admin, or null. */
export async function adminUser(ctx: QueryCtx): Promise<Doc<"users"> | null> {
  const user = await currentUser(ctx);
  return user?.isPlatformAdmin === true ? user : null;
}

/** The signed-in platform admin, or throws. Every admin function starts here. */
export async function requireAdmin(ctx: QueryCtx): Promise<Doc<"users">> {
  const user = await currentUser(ctx);
  if (!user) throw new ConvexError({ code: "UNAUTHENTICATED", message: "Please sign in first" });
  if (user.isPlatformAdmin !== true) throw new ConvexError({ code: "FORBIDDEN", message: "Only platform admins can do this" });
  return user;
}

export function validateReviewNote(raw: string | undefined): string | undefined {
  const note = raw?.trim();
  if (!note) return undefined;
  if (note.length > MAX_REVIEW_NOTE) throw new ConvexError({ code: "BAD_REQUEST", message: `Notes must be ${MAX_REVIEW_NOTE} characters or fewer` });
  return note;
}

/** Admins cannot lock themselves out, and the platform always keeps one admin. */
export function adminChangeError(actor: Doc<"users">, target: Doc<"users">, change: "suspend" | "revokeAdmin", adminCount: number): string | null {
  if (actor._id === target._id) return change === "suspend" ? "You cannot suspend your own account" : "You cannot remove your own admin access";
  if (change === "suspend" && target.isPlatformAdmin) return "Remove admin access before suspending this account";
  if (change === "revokeAdmin" && adminCount <= 1) return "The platform needs at least one admin";
  return null;
}
