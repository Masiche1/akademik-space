import { Link } from "react-router-dom";
import { useQuery } from "convex/react";
import { format } from "date-fns";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Download } from "lucide-react";
import { api } from "@/convex/_generated/api.js";
import type { Id } from "@/convex/_generated/dataModel.d.ts";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.tsx";
import { SET_KIND_LABEL, setResultsPath } from "@/lib/sets.ts";
import { downloadCsv, safeFilename } from "../_lib/report.ts";

const chartConfig = { average: { label: "Class average", color: "var(--chart-1)" } } satisfies ChartConfig;

/** Hand-in rate, average and marking backlog for the class's recent assignments and exams. */
export default function SetsReportSection({ classId, className }: { classId: Id<"classes">; className: string }) {
  const data = useQuery(api.teachReports.classSets, { classId });
  if (data === null) return null;
  if (data === undefined) return <div className="space-y-3"><Skeleton className="h-56" /><Skeleton className="h-40" /></div>;
  if (data.sets.length === 0) {
    return <p className="rounded-2xl border border-dashed p-5 text-sm text-muted-foreground">No assignments or exams yet. Their results appear here once students hand in.</p>;
  }

  // Oldest first, so the chart reads left to right over time.
  const chart = [...data.sets].reverse().filter((s) => s.averagePercent !== null).map((s) => ({ title: s.title, average: s.averagePercent ?? 0 }));
  const exportCsv = () => {
    downloadCsv(`${safeFilename(className)}-sets.csv`, [
      ["Set", "Type", "Set on", "Handed in", "Students", "Average %", "Answers to mark"],
      ...data.sets.map((s) => [s.title, SET_KIND_LABEL[s.kind], format(new Date(s.createdAt), "yyyy-MM-dd"), s.closed, data.studentCount, s.averagePercent ?? "", s.pending]),
    ]);
  };

  return (
    <div className="space-y-6">
      {chart.length > 0 && (
        <div className="rounded-2xl border bg-card p-4">
          <p className="pb-3 text-sm font-medium">Class average by set</p>
          <ChartContainer config={chartConfig} className="h-56 w-full">
            <BarChart data={chart} margin={{ left: -16, right: 8 }}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="title" tickLine={false} axisLine={false} interval={0} tick={{ fontSize: 11 }}
                tickFormatter={(t: string) => (t.length > 12 ? `${t.slice(0, 11)}...` : t)} />
              <YAxis domain={[0, 100]} tickLine={false} axisLine={false} tickFormatter={(v: number) => `${v}%`} width={48} />
              <ChartTooltip content={<ChartTooltipContent formatter={(v) => `${String(v)}%`} />} />
              <Bar dataKey="average" fill="var(--color-average)" radius={6} />
            </BarChart>
          </ChartContainer>
        </div>
      )}
      <div className="flex justify-end">
        <Button size="sm" variant="secondary" onClick={exportCsv}><Download className="size-4" /> Export CSV</Button>
      </div>
      <div className="overflow-x-auto rounded-2xl border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-48">Set</TableHead>
              <TableHead className="text-right">Handed in</TableHead>
              <TableHead className="text-right">Average</TableHead>
              <TableHead className="text-right">To mark</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.sets.map((s) => (
              <TableRow key={s._id}>
                <TableCell>
                  <Link to={setResultsPath(s._id)} className="block hover:text-chart-1 cursor-pointer">
                    <span className="block truncate font-medium">{s.title}</span>
                    <span className="text-xs text-muted-foreground">{SET_KIND_LABEL[s.kind]} / set {format(new Date(s.createdAt), "d MMM")}</span>
                  </Link>
                </TableCell>
                <TableCell className="text-right font-mono text-sm">{s.closed}/{data.studentCount}</TableCell>
                <TableCell className="text-right font-mono text-sm">{s.averagePercent === null ? "-" : `${s.averagePercent}%`}</TableCell>
                <TableCell className="text-right">
                  {s.pending > 0 ? <Badge className="bg-chart-1/15 text-chart-1">{s.pending}</Badge> : <span className="font-mono text-sm text-muted-foreground">0</span>}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <p className="text-xs text-muted-foreground">Showing the 20 most recent sets. Averages include only students who have handed in.</p>
    </div>
  );
}
