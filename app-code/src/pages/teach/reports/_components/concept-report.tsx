import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "convex/react";
import { Download, Target } from "lucide-react";
import { api } from "@/convex/_generated/api.js";
import type { Id } from "@/convex/_generated/dataModel.d.ts";
import { Button } from "@/components/ui/button.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.tsx";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip.tsx";
import { getCourse } from "@/content/catalog.ts";
import type { Course } from "@/content/types.ts";
import { MASTERY_LABEL, MASTERY_STYLE, type MasteryLevel } from "@/lib/mastery.ts";
import { cn } from "@/lib/utils.ts";
import { learnerPath } from "../../_lib/teach.ts";
import { buildConceptReport, downloadCsv, safeFilename, type ConceptReport } from "../_lib/report.ts";

const LEVELS: MasteryLevel[] = ["secure", "developing", "learning", "not-started"];

function MasteryBar({ counts, total }: { counts: Record<MasteryLevel, number>; total: number }) {
  return (
    <div className="flex h-2 w-full overflow-hidden rounded-full bg-muted">
      {LEVELS.map((l) => counts[l] > 0 && (
        <div key={l} className={MASTERY_STYLE[l].bar} style={{ width: `${(counts[l] / Math.max(total, 1)) * 100}%` }} />
      ))}
    </div>
  );
}

function Legend() {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
      {LEVELS.map((l) => (
        <span key={l} className="flex items-center gap-1.5"><span className={cn("size-2.5 rounded-sm", MASTERY_STYLE[l].bar)} />{MASTERY_LABEL[l]}</span>
      ))}
    </div>
  );
}

type Students = { userId: string; name: string }[];

function ConceptTable({ report, studentCount }: { report: ConceptReport; studentCount: number }) {
  return (
    <div className="divide-y rounded-2xl border bg-card">
      {report.concepts.map((c) => (
        <div key={c.conceptId} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-2 p-4 sm:grid-cols-[minmax(0,1fr)_12rem_3.5rem]">
          <div className="min-w-0">
            <p className="truncate font-medium">{c.title}</p>
            <p className="truncate text-xs text-muted-foreground">{c.lessonCode} {c.lessonTitle}</p>
          </div>
          <span className="font-mono text-sm font-semibold sm:order-last sm:text-right">{c.classPercent}%</span>
          <div className="col-span-2 space-y-1 sm:col-span-1">
            <MasteryBar counts={c.counts} total={studentCount} />
            <p className="text-xs text-muted-foreground">{c.counts.secure} secure / {c.counts["not-started"]} not started</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Students down the side, concepts across: each cell is one student's mastery of one concept. */
function Heatmap({ report, students, orgId }: { report: ConceptReport; students: Students; orgId: string }) {
  return (
    <div className="overflow-x-auto rounded-2xl border bg-card p-4">
      <table className="border-separate border-spacing-1 text-xs">
        <thead>
          <tr>
            <th className="min-w-36 text-left font-medium text-muted-foreground">Student</th>
            {report.concepts.map((c, i) => (
              <th key={c.conceptId} className="w-7 font-mono font-normal text-muted-foreground">
                <Tooltip>
                  <TooltipTrigger className="cursor-default">{i + 1}</TooltipTrigger>
                  <TooltipContent>{c.lessonCode} {c.title}</TooltipContent>
                </Tooltip>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map((s, si) => (
            <tr key={s.userId}>
              <td className="max-w-44 truncate pr-2">
                <Link to={learnerPath(orgId, s.userId)} className="hover:text-chart-1 cursor-pointer">{s.name}</Link>
              </td>
              {report.cells[si].map((cell, ci) => (
                <td key={report.concepts[ci].conceptId}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className={cn("size-6 rounded", cell.level === "not-started" ? "bg-muted" : MASTERY_STYLE[cell.level].bar, cell.level === "developing" && "opacity-80")} />
                    </TooltipTrigger>
                    <TooltipContent>
                      {s.name}: {report.concepts[ci].title} / {cell.attempted === 0 ? "not started" : `${cell.percent}% (${MASTERY_LABEL[cell.level]})`}
                    </TooltipContent>
                  </Tooltip>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CourseReport({ classId, course, className }: { classId: Id<"classes">; course: Course; className: string }) {
  const data = useQuery(api.teachReports.classCourse, { classId, courseId: course.id });
  const report = useMemo(() => (data ? buildConceptReport(course, data.students) : null), [data, course]);

  if (data === null) return null;
  if (data === undefined || !report) {
    return <div className="space-y-3">{Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-16" />)}</div>;
  }
  if (data.students.length === 0) {
    return <p className="rounded-2xl border border-dashed p-5 text-sm text-muted-foreground">Add students to this class to see their concept mastery.</p>;
  }

  const reteach = report.concepts
    .map((c) => ({ c, started: data.students.length - c.counts["not-started"] }))
    .filter(({ c, started }) => started > 0 && c.counts.learning > 0)
    .sort((a, b) => b.c.counts.learning - a.c.counts.learning || a.c.classPercent - b.c.classPercent)
    .slice(0, 3);

  const exportCsv = () => {
    downloadCsv(`${safeFilename(className)}-${safeFilename(course.title)}-concepts.csv`, [
      ["Student", ...report.concepts.map((c) => `${c.lessonCode} ${c.title}`)],
      ...data.students.map((s, i) => [s.name, ...report.cells[i].map((cell) => (cell.attempted === 0 ? "" : cell.percent))]),
      ["Class average", ...report.concepts.map((c) => c.classPercent)],
    ]);
  };

  return (
    <div className="space-y-8">
      {reteach.length > 0 && (
        <div className="grid gap-3 md:grid-cols-3">
          {reteach.map(({ c }) => (
            <div key={c.conceptId} className="rounded-2xl border border-destructive/30 bg-destructive/5 p-4">
              <p className="flex items-center gap-1.5 text-xs font-medium text-destructive"><Target className="size-3.5" /> Worth reteaching</p>
              <p className="truncate pt-1 font-semibold">{c.title}</p>
              <p className="text-xs text-muted-foreground">{c.counts.learning} of {data.students.length} still learning / class {c.classPercent}%</p>
            </div>
          ))}
        </div>
      )}

      <section className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-serif text-xl font-semibold">Every concept</h3>
          <Legend />
        </div>
        <ConceptTable report={report} studentCount={data.students.length} />
      </section>

      <section className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-serif text-xl font-semibold">Student by concept</h3>
          <Button size="sm" variant="secondary" onClick={exportCsv}><Download className="size-4" /> Export CSV</Button>
        </div>
        <Heatmap report={report} students={data.students} orgId={data.orgId} />
        <p className="text-xs text-muted-foreground">Numbers match the concept order above. Hover a square for details.</p>
      </section>
    </div>
  );
}

/** Concept mastery across the class for one of its courses. */
export default function ConceptReportSection({ classId, courseIds, className }: { classId: Id<"classes">; courseIds: string[]; className: string }) {
  const courses = courseIds.flatMap((id) => getCourse(id) ?? []);
  const [picked, setPicked] = useState<string | null>(null);
  const course = courses.find((c) => c.id === picked) ?? courses[0];

  if (!course) {
    return <p className="rounded-2xl border border-dashed p-5 text-sm text-muted-foreground">Set a course for this class to see concept reports.</p>;
  }
  return (
    <div className="space-y-6">
      {courses.length > 1 && (
        <Select value={course.id} onValueChange={setPicked}>
          <SelectTrigger className="w-full cursor-pointer sm:w-80"><SelectValue /></SelectTrigger>
          <SelectContent>
            {courses.map((c) => <SelectItem key={c.id} value={c.id} className="cursor-pointer">{c.title}</SelectItem>)}
          </SelectContent>
        </Select>
      )}
      <CourseReport key={course.id} classId={classId} course={course} className={className} />
    </div>
  );
}
