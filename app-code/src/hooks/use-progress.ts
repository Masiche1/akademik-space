import { useMemo } from "react";
import { useConvexAuth, useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import type { SavedQuestion } from "@/lib/mastery.ts";

/** The student's saved questions for a course, keyed by question id. Undefined while loading. */
export function useCourseProgress(courseId: string): ReadonlyMap<string, SavedQuestion> | undefined {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const rows = useQuery(api.progress.forCourse, isAuthenticated ? { courseId } : "skip");
  return useMemo(() => {
    if (!isAuthenticated) return isLoading ? undefined : new Map();
    return rows ? new Map(rows.map((r) => [r.questionId, r])) : undefined;
  }, [rows, isAuthenticated, isLoading]);
}

export function useQuestionProgress(questionId: string) {
  const { isAuthenticated } = useConvexAuth();
  return useQuery(api.progress.forQuestion, isAuthenticated ? { questionId } : "skip");
}

export function useRecordAttempt() {
  return useMutation(api.progress.record);
}

/** True while this question is in a class set the student has not finished, so practice must not reveal it. */
export function useQuestionLocked(questionId: string): boolean {
  const { isAuthenticated } = useConvexAuth();
  const locked = useQuery(api.assignments.lockedQuestions, isAuthenticated ? {} : "skip");
  return locked?.includes(questionId) ?? false;
}
