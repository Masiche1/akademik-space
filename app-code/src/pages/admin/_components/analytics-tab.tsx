import { useState } from "react";
import { useQuery } from "convex/react";
import { format, parseISO } from "date-fns";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ArrowDownRight, ArrowUpRight, BarChart3, Download } from "lucide-react";
import { api } from "@/convex/_generated/api.js";
import { Button } from "@/components/ui/button.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart.tsx";
import { cn } from "@/lib/utils.ts";
import { downloadCsv } from "@/pages/teach/reports/_lib/report.ts";
import { ANALYTICS_DAYS, ANALYTICS_METRICS, changePercent, type Analytics, type AnalyticsDays, type AnalyticsMetric } from "../_lib/admin.ts";

// Days are UTC calendar days; parse as a local date so labels never shift by a day.
const dayLabel = (day: string) => format(parseISO(day), "d MMM");

function Change({ current, previous }: { current: number; previous: number }) {
  const pct = changePercent(current, previous);
  if (pct === null) return <span className="text-xs text-muted-foreground">{current > 0 ? "New this period" : "No activity yet"}</span>;
  const up = pct >= 0;
  const Icon = up ? ArrowUpRight : ArrowDownRight;
  return (
    <span className={cn("flex items-center gap-0.5 text-xs", up ? "text-chart-3" : "text-destructive")}>
      <Icon className="size-3.5" /> {Math.abs(pct)}% vs previous period
    </span>
  );
}

function MetricChart({ data, metric, days }: { data: Analytics; metric: AnalyticsMetric; days: AnalyticsDays }) {
  const meta = ANALYTICS_METRICS.find((m) => m.key === metric) ?? ANALYTICS_METRICS[0];
  const config = { value: { label: meta.label, color: "var(--chart-1)" } } satisfies ChartConfig;
  const points = data.series.map((p) => ({ day: p.day, value: p[metric] }));
  return (
    <section className="rounded-2xl border bg-card p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2 pb-4">
        <h2 className="font-serif text-xl font-semibold">{meta.label}</h2>
        <p className="text-xs text-muted-foreground">{meta.hint}, last {days} days (UTC)</p>
      </div>
      <ChartContainer config={config} className="h-64 w-full">
        <AreaChart data={points} margin={{ left: -20, right: 8, top: 4 }}>
          <defs>
            <linearGradient id="admin-metric-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-value)" stopOpacity={0.35} />
              <stop offset="100%" stopColor="var(--color-value)" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="day" tickLine={false} axisLine={false} minTickGap={24} tickFormatter={dayLabel} tick={{ fontSize: 11 }} />
          <YAxis allowDecimals={false} tickLine={false} axisLine={false} width={44} />
          <ChartTooltip content={<ChartTooltipContent labelFormatter={(l) => (typeof l === "string" ? dayLabel(l) : "")} />} />
          <Area dataKey="value" type="monotone" stroke="var(--color-value)" strokeWidth={2} fill="url(#admin-metric-fill)" />
        </AreaChart>
      </ChartContainer>
    </section>
  );
}

function TopCourses({ courses }: { courses: Analytics["courses"] }) {
  const max = Math.max(1, ...courses.map((c) => c.attempts));
  return (
    <section className="rounded-2xl border bg-card p-5">
      <h2 className="pb-1 font-serif text-xl font-semibold">Most practised courses</h2>
      <p className="pb-4 text-xs text-muted-foreground">All time, by questions answered</p>
      {courses.length === 0 ? (
        <p className="text-sm text-muted-foreground">No practice recorded yet. Courses appear here as learners answer questions.</p>
      ) : (
        <ul className="space-y-3">
          {courses.map((c) => (
            <li key={c.courseId} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-1">
              <span className="truncate text-sm">{c.title}</span>
              <span className="font-mono text-xs text-muted-foreground">{c.attempts} answers · {c.learners} learners</span>
              <div className="col-span-2 h-1.5 overflow-hidden rounded-full bg-muted">
                <div className="h-full rounded-full bg-chart-2" style={{ width: `${(c.attempts / max) * 100}%` }} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

/** Platform usage over time, counted as activity happens. */
export default function AnalyticsTab() {
  const [days, setDays] = useState<AnalyticsDays>(30);
  const [metric, setMetric] = useState<AnalyticsMetric>("activeLearners");
  const data = useQuery(api.admin.insights.analytics, { days });

  const exportCsv = () => {
    if (!data) return;
    downloadCsv(`akademik-usage-${days}d.csv`, [
      ["Day (UTC)", ...ANALYTICS_METRICS.map((m) => m.label)],
      ...data.series.map((p) => [p.day, ...ANALYTICS_METRICS.map((m) => p[m.key])]),
    ]);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Tabs value={String(days)} onValueChange={(v) => setDays(ANALYTICS_DAYS.find((d) => String(d) === v) ?? 30)}>
          <TabsList>
            {ANALYTICS_DAYS.map((d) => <TabsTrigger key={d} value={String(d)} className="cursor-pointer">{d} days</TabsTrigger>)}
          </TabsList>
        </Tabs>
        <Button size="sm" variant="secondary" onClick={exportCsv} disabled={!data}><Download className="size-4" /> Export CSV</Button>
      </div>

      {data === undefined ? (
        <>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">{Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} className="h-28" />)}</div>
          <Skeleton className="h-80 w-full" />
        </>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
            {ANALYTICS_METRICS.map((m) => (
              <button key={m.key} type="button" onClick={() => setMetric(m.key)} aria-pressed={metric === m.key}
                className={cn("rounded-2xl border p-4 text-left transition-colors cursor-pointer hover:border-chart-1/60",
                  metric === m.key ? "border-chart-1 bg-accent" : "bg-card")}>
                <p className="text-xs text-muted-foreground sm:text-sm">{m.label}</p>
                <p className="pt-1 font-serif text-3xl font-semibold">{data.totals[m.key].toLocaleString()}</p>
                <Change current={data.totals[m.key]} previous={data.previous[m.key]} />
              </button>
            ))}
          </div>
          <MetricChart data={data} metric={metric} days={days} />
          <TopCourses courses={data.courses} />
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <BarChart3 className="size-3.5" /> Active learners add up each day&apos;s distinct learners, so one person active on three days counts three times.
          </p>
        </>
      )}
    </div>
  );
}
