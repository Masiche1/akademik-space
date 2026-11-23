import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { countQuestions } from "@/content/catalog.ts";
import { EDEXCEL_STAGE_NAME } from "@/content/edexcel.ts";
import { IB_SUBJECT_NAME } from "@/content/ib.ts";
import { isUsElementary, isUsMiddleSchool, isUsPreK, type Course } from "@/content/types.ts";

const eyebrowFor = (c: Course) => {
  if (c.ib) return `IB DP · ${IB_SUBJECT_NAME[c.ib.subject]}`;
  if (c.edexcel) return EDEXCEL_STAGE_NAME[c.edexcel.stage];
  if (c.us) {
    if (isUsPreK(c.us)) return "Pre-K";
    if (isUsElementary(c.us)) return "Elementary";
    if (isUsMiddleSchool(c.us)) return "Middle school";
    return `High school, ${c.grade}`;
  }
  if (c.myp) {
    if (c.myp.subject === "maths-standard") return `Standard, ${c.grade}`;
    if (c.myp.subject === "maths-extended") return `Extended, ${c.grade}`;
    if (c.myp.subject === "language-lit") return `Language & Literature, ${c.grade}`;
    if (c.myp.subject === "language-acq") return `Language Acquisition, ${c.grade}`;
    return `IB Middle Years, ${c.grade}`;
  }
  if (c.pyp) return "IB Primary Years Programme";
  return c.grade;
};

/** Course tile linking to the course page. */
export default function CourseCard({ course, title }: { course: Course; title: string }) {
  return (
    <Link to={`/courses/${course.id}`}
      className="group flex min-w-0 flex-col rounded-xl border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-chart-1/60 hover:shadow-lg cursor-pointer">
      <span className="font-mono text-xs text-muted-foreground">{eyebrowFor(course)}</span>
      <h3 className="pt-2 font-serif text-xl font-semibold">{title}</h3>
      <p className="flex-1 pt-2 text-sm text-muted-foreground">{course.description}</p>
      <div className="flex items-center justify-between pt-5 text-sm">
        <span className="text-muted-foreground">{course.units.length} units, {countQuestions(course)} questions</span>
        <ArrowRight className="size-4 text-chart-1 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
