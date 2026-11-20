import { Link } from "react-router-dom";
import { useQuery } from "convex/react";
import { BookOpen, Users } from "lucide-react";
import { api } from "@/convex/_generated/api.js";
import { Badge } from "@/components/ui/badge.tsx";
import { getCourse } from "@/content/catalog.ts";

/** Classes the student's teachers have put them in, with the courses set. Hidden when there are none. */
export default function MyClasses() {
  const classes = useQuery(api.teach.myClasses, {});
  if (!classes || classes.length === 0) return null;
  return (
    <section className="space-y-4 pb-10">
      <h2 className="font-serif text-2xl font-semibold">My classes</h2>
      <div className="grid grid-cols-[minmax(0,1fr)] gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        {classes.map((c) => {
          const courses = c.courseIds.flatMap((id) => getCourse(id) ?? []);
          return (
            <article key={c._id} className="min-w-0 space-y-3 rounded-2xl border bg-card p-5">
              <div className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary"><Users className="size-5 text-chart-1" /></span>
                <div className="min-w-0">
                  <p className="truncate font-serif text-lg font-semibold">{c.name}</p>
                  <p className="truncate text-sm text-muted-foreground">{c.teacherName} / {c.orgName}</p>
                </div>
              </div>
              {courses.length === 0 ? (
                <p className="text-sm text-muted-foreground">No courses set yet.</p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {courses.map((course) => (
                    <Badge key={course.id} variant="secondary" asChild>
                      <Link to={`/courses/${course.id}`} className="cursor-pointer"><BookOpen className="size-3" /> {course.title}</Link>
                    </Badge>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
