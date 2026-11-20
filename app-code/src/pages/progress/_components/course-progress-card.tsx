import type { Doc } from "@/convex/_generated/dataModel.d.ts";
import CourseProgressCard from "@/components/course-progress-card.tsx";
import { useCourseProgress } from "@/hooks/use-progress.ts";

/** The signed-in student's own course card, with a "revisit next" suggestion. */
export default function MyCourseProgressCard({ row }: { row: Doc<"courseProgress"> }) {
  const saved = useCourseProgress(row.courseId);
  return <CourseProgressCard row={row} saved={saved} showNext />;
}
