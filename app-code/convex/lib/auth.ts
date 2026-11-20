import { ConvexError } from "convex/values";
import type { MutationCtx, QueryCtx } from "../_generated/server";
import type { Doc } from "../_generated/dataModel.d.ts";
import { bumpDaily } from "./analytics.ts";

/** The signed-in user's row, including suspended accounts. Only account.me and requireUser need this. */
export async function identityUser(ctx: QueryCtx): Promise<Doc<"users"> | null> {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) return null;
  return await ctx.db
    .query("users")
    .withIndex("by_token", (q) => q.eq("tokenIdentifier", identity.tokenIdentifier))
    .unique();
}

/** The signed-in user's row, or null when signed out, not yet synced or suspended. */
export async function currentUser(ctx: QueryCtx): Promise<Doc<"users"> | null> {
  const user = await identityUser(ctx);
  return user && !user.suspended ? user : null;
}

/** The signed-in user's row, creating it if the sign-in sync has not run yet. Suspended accounts are refused. */
export async function requireUser(ctx: MutationCtx, message = "Please sign in first"): Promise<Doc<"users">> {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) throw new ConvexError({ code: "UNAUTHENTICATED", message });
  const user = await identityUser(ctx);
  if (user?.suspended) throw new ConvexError({ code: "FORBIDDEN", message: "Your account has been suspended. Contact support for help" });
  if (user) return user;
  const id = await ctx.db.insert("users", {
    tokenIdentifier: identity.tokenIdentifier,
    name: identity.name,
    email: identity.email,
  });
  await bumpDaily(ctx, "signups");
  const created = await ctx.db.get("users", id);
  if (!created) throw new ConvexError({ code: "NOT_FOUND", message: "User not found" });
  return created;
}

/** Finds an account by email: exact match first, then the lowercased form most providers store. */
export async function userByEmail(ctx: QueryCtx, raw: string): Promise<Doc<"users"> | null> {
  const email = raw.trim();
  if (email.length === 0) return null;
  const exact = await ctx.db.query("users").withIndex("by_email", (q) => q.eq("email", email)).first();
  if (exact || email === email.toLowerCase()) return exact;
  return await ctx.db.query("users").withIndex("by_email", (q) => q.eq("email", email.toLowerCase())).first();
}
