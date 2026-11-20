import { useConvexAuth, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import type { FunctionReturnType } from "convex/server";

export type Account = NonNullable<FunctionReturnType<typeof api.account.me>>;
export type Enrollment = Account["enrollments"][number];

/** The signed-in account with enrolments. undefined while loading, null when signed out. */
export function useAccount(): Account | null | undefined {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const me = useQuery(api.account.me, isAuthenticated ? {} : "skip");
  if (isLoading) return undefined;
  if (!isAuthenticated) return null;
  return me;
}
