import type { Infer } from "convex/values";
import type { MutationCtx } from "../_generated/server";
import type { Doc, Id } from "../_generated/dataModel.d.ts";
import type { AUDIT_ACTION } from "../schema.ts";

export type AuditAction = Infer<typeof AUDIT_ACTION>;

export type AuditEntry = {
  action: AuditAction;
  actorId?: Id<"users">;
  targetUserId?: Id<"users">;
  orgId?: Id<"organizations">;
  summary: string;
};

/** How a person is named in audit summaries: name, then email, then a placeholder. */
export const who = (u: Pick<Doc<"users">, "name" | "email"> | null | undefined) => u?.name ?? u?.email ?? "an unnamed account";

/** Appends one entry. Called inside the mutation that made the change, so the log and the change commit together. */
export async function logAudit(ctx: MutationCtx, entry: AuditEntry) {
  await ctx.db.insert("auditLog", { ...entry, summary: entry.summary.slice(0, 500) });
}
