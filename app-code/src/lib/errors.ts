import { ConvexError } from "convex/values";

/** The server's message from a ConvexError, or a fallback. */
export function errorMessage(error: unknown, fallback = "Something went wrong. Please try again."): string {
  return error instanceof ConvexError && typeof error.data?.message === "string" ? error.data.message : fallback;
}
