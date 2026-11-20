import { Link } from "react-router-dom";
import { useQuery } from "convex/react";
import { format } from "date-fns";
import { api } from "@/convex/_generated/api.js";
import type { Id } from "@/convex/_generated/dataModel.d.ts";
import { Badge } from "@/components/ui/badge.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.tsx";
import { markPercent } from "@/lib/mastery.ts";
import { SET_KIND_LABEL, setResultsPath } from "@/lib/sets.ts";

/** Every assignment and exam this learner has started, in classes the viewer can see. */
export default function LearnerSets({ orgId, userId }: { orgId: Id<"organizations">; userId: Id<"users"> }) {
  const rows = useQuery(api.teachReports.learnerSets, { orgId, userId });
  if (rows === undefined) return <Skeleton className="h-32" />;
  if (rows.length === 0) return null;
  const marked = rows.filter((r) => r.closed && r.pendingCount === 0);
  const average = marked.length > 0 ? Math.round(marked.reduce((n, r) => n + markPercent(r.marks, r.totalMarks), 0) / marked.length) : null;

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-serif text-2xl font-semibold">Assignments and exams</h2>
        {average !== null && <p className="text-sm text-muted-foreground">Average on marked sets: <span className="font-mono font-semibold text-foreground">{average}%</span></p>}
      </div>
      <div className="overflow-x-auto rounded-2xl border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-48">Set</TableHead>
              <TableHead>Handed in</TableHead>
              <TableHead className="text-right">Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((r) => (
              <TableRow key={r.submissionId}>
                <TableCell>
                  <Link to={setResultsPath(r.assignmentId)} className="block hover:text-chart-1 cursor-pointer">
                    <span className="block truncate font-medium">{r.title}</span>
                    <span className="text-xs text-muted-foreground">{SET_KIND_LABEL[r.kind]} / {r.className}</span>
                  </Link>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {r.submittedAt ? format(new Date(r.submittedAt), "d MMM, HH:mm") : r.closed ? "Time ran out" : "In progress"}
                </TableCell>
                <TableCell className="text-right">
                  {!r.closed ? <span className="text-muted-foreground">-</span> : (
                    <span className="font-mono text-sm">
                      {r.marks}/{r.totalMarks} <span className="pl-1 text-muted-foreground">{markPercent(r.marks, r.totalMarks)}%</span>
                      {r.pendingCount > 0 && <Badge className="ml-2 bg-chart-1/15 text-chart-1">{r.pendingCount} to mark</Badge>}
                    </span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
