import { Link } from "react-router-dom";
import { Authenticated, AuthLoading, Unauthenticated, useQuery } from "convex/react";
import { motion } from "motion/react";
import { ChartColumn, LineChart, Target, Trophy } from "lucide-react";
import { api } from "@/convex/_generated/api.js";
import { Button } from "@/components/ui/button.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { SignInButton } from "@/components/ui/signin.tsx";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty.tsx";
import { COURSES } from "@/content/catalog.ts";
import { usePageMeta } from "@/lib/seo.ts";
import CourseProgressCard from "./_components/course-progress-card.tsx";
import RecentAttempts from "@/components/recent-attempts.tsx";
import MyClasses from "./_components/my-classes.tsx";
import MySets from "./_components/my-sets.tsx";

function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">{Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className="h-24" />)}</div>
      <div className="grid gap-4 md:grid-cols-2">{Array.from({ length: 2 }).map((_, i) => <Skeleton key={i} className="h-64" />)}</div>
    </div>
  );
}

function Dashboard() {
  const data = useQuery(api.progress.dashboard, {});
  if (data === undefined) return <DashboardSkeleton />;
  const courses = data.courses.filter((c) => COURSES.some((k) => k.id === c.courseId));

  if (courses.length === 0) {
    return (
      <Empty className="rounded-2xl border bg-card">
        <EmptyHeader>
          <EmptyMedia variant="icon"><ChartColumn /></EmptyMedia>
          <EmptyTitle>No attempts saved yet</EmptyTitle>
          <EmptyDescription>Answer a question and your marks will appear here, with mastery for every concept.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="sm" asChild><Link to="/" className="cursor-pointer">Choose a course</Link></Button>
        </EmptyContent>
      </Empty>
    );
  }

  const totals = courses.reduce(
    (t, c) => ({
      attempted: t.attempted + c.questionsAttempted,
      secure: t.secure + c.questionsSecure,
      earned: t.earned + c.marksEarned,
      available: t.available + c.marksAvailable,
    }),
    { attempted: 0, secure: 0, earned: 0, available: 0 },
  );
  const stats = [
    { icon: LineChart, label: "Questions attempted", value: totals.attempted },
    { icon: Trophy, label: "Questions secure", value: totals.secure, hint: "80% or more of the marks" },
    { icon: Target, label: "Best marks earned", value: `${totals.available ? Math.round((totals.earned / totals.available) * 100) : 0}%`, hint: `${totals.earned} of ${totals.available} marks` },
  ];

  return (
    <div className="space-y-10">
      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.3, ease: "easeOut" }} className="rounded-2xl border bg-card p-5">
            <s.icon className="size-5 text-chart-1" />
            <p className="pt-3 font-serif text-4xl font-semibold">{s.value}</p>
            <p className="text-sm font-medium">{s.label}</p>
            {s.hint && <p className="text-xs text-muted-foreground">{s.hint}</p>}
          </motion.div>
        ))}
      </div>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-semibold">Your courses</h2>
        <div className="grid grid-cols-[minmax(0,1fr)] gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          {courses.map((c) => <CourseProgressCard key={c._id} row={c} />)}
        </div>
      </section>

      {data.recent.length > 0 && (
        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold">Recent attempts</h2>
          <RecentAttempts rows={data.recent} />
        </section>
      )}
    </div>
  );
}

export default function ProgressPage() {
  usePageMeta({
    title: "My progress",
    description: "Track your best mark on every practice question and how secure you are on each concept across US, IB and Edexcel courses.",
    path: "/progress",
    noindex: true,
  });
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p className="font-mono text-xs text-chart-1">Progress</p>
      <h1 className="pt-2 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">My progress</h1>
      <p className="max-w-2xl pt-3 pb-8 text-muted-foreground">
        Your best mark on every question you have tried, and how secure you are on each concept.
      </p>
      <AuthLoading><DashboardSkeleton /></AuthLoading>
      <Unauthenticated>
        <Empty className="rounded-2xl border bg-card">
          <EmptyHeader>
            <EmptyMedia variant="icon"><ChartColumn /></EmptyMedia>
            <EmptyTitle>Sign in to track your progress</EmptyTitle>
            <EmptyDescription>Your attempts and concept mastery are saved to your account.</EmptyDescription>
          </EmptyHeader>
          <EmptyContent><SignInButton size="sm" /></EmptyContent>
        </Empty>
      </Unauthenticated>
      <Authenticated><MySets /><MyClasses /><Dashboard /></Authenticated>
    </div>
  );
}
