import { v } from "convex/values";
import { paginationOptsValidator } from "convex/server";
import { query } from "../_generated/server";
import { ORG_KIND } from "../schema.ts";
import { requireAdmin } from "../lib/admin.ts";
import { userNames } from "../lib/teach.ts";

/** Every tutor practice, school and district, newest first. */
export const list = query({
  args: { kind: v.union(ORG_KIND, v.literal("all")), search: v.string(), paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const search = args.search.trim();
    const kind = args.kind;
    const orgs = ctx.db.query("organizations");
    const result = search.length > 0
      ? await orgs.withSearchIndex("search_name", (q) => (kind === "all" ? q.search("name", search) : q.search("name", search).eq("kind", kind))).paginate(args.paginationOpts)
      : kind === "all"
        ? await orgs.order("desc").paginate(args.paginationOpts)
        : await orgs.withIndex("by_kind", (q) => q.eq("kind", kind)).order("desc").paginate(args.paginationOpts);
    const creators = await userNames(ctx, result.page.map((o) => o.createdBy));
    return {
      ...result,
      page: result.page.map((o) => ({
        orgId: o._id,
        name: o.name,
        kind: o.kind,
        studentCount: o.studentCount,
        staffCount: o.staffCount,
        createdAt: new Date(o._creationTime).toISOString(),
        createdBy: { userId: o.createdBy, name: creators.get(o.createdBy)?.name ?? "Unknown" },
      })),
    };
  },
});

/** One organisation's members, staff first. */
export const members = query({
  args: { orgId: v.id("organizations"), role: v.union(v.literal("staff"), v.literal("student")), paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const base = ctx.db.query("memberships");
    const result = args.role === "student"
      ? await base.withIndex("by_org_and_role", (q) => q.eq("orgId", args.orgId).eq("role", "student")).paginate(args.paginationOpts)
      // Staff are owner, admin or teacher; filtering before paginate keeps pages complete.
      : await base.withIndex("by_org_and_role", (q) => q.eq("orgId", args.orgId)).filter((q) => q.neq(q.field("role"), "student")).paginate(args.paginationOpts);
    const names = await userNames(ctx, result.page.map((m) => m.userId));
    return {
      ...result,
      page: result.page.map((m) => ({
        membershipId: m._id,
        userId: m.userId,
        name: names.get(m.userId)?.name ?? "Unknown",
        email: names.get(m.userId)?.email ?? null,
        role: m.role,
        joinedAt: m.joinedAt,
      })),
    };
  },
});
