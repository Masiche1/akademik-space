import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "convex/react";
import { format } from "date-fns";
import { ChartColumn, UserRound } from "lucide-react";
import { api } from "@/convex/_generated/api.js";
import type { Doc, Id } from "@/convex/_generated/dataModel.d.ts";
import { Badge } from "@/components/ui/badge.tsx";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty.tsx";
import CourseProgressCard from "@/components/course-progress-card.tsx";
import RecentAttempts from "@/components/recent-attempts.tsx";
import { COURSES } from "@/content/catalog.ts";
import { markPercent } from "@/lib/mastery.ts";
import TeachGate, { PortalSkeleton } from "../_components/teach-gate.tsx";
import TeachCrumbs from "../_components/teach-crumbs.tsx";
import { classPath } from "../_lib/teach.ts";
import LearnerSets from "./_components/learner-sets.tsx";

/** A course card that loads this learner's saved questions for concept mastery. */
function LearnerCourseCard({ orgId, userId, row }: { orgId: Id<"organizations">; userId: Id<"users">; row: Doc<"courseProgress"> }) {
  const rows = useQuery(api.teach.learnerCourse, { orgId, userId, courseId: row.courseId });
  const saved = useMemo(() => (rows ? new Map(rows.map((r) => [r.questionId, r])) : undefined), [rows]);
  return <CourseProgressCard row={row} saved={saved} />;
}

function LearnerView({ orgId, userId }: { orgId: string; userId: string }) {
  const data = useQuery(api.teach.learner, { orgId, userId });
  if (data === undefined) return <PortalSkeleton />;
  if (data === null) {
    return (
      <Empty className="rounded-2xl border bg-card">
        <EmptyHeader>
          <EmptyMedia variant="icon"><UserRound /></EmptyMedia>
          <EmptyTitle>You cannot view this learner</EmptyTitle>
          <EmptyDescription>Teachers can see students in their own classes. Administrators can see every enrolled student.</EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }
  const courses = data.courses.filter((c) => COURSES.some((k) => k.id === c.courseId));
  const totals = courses.reduce((t, c) => ({ attempted: t.attempted + c.questionsAttempted, secure: t.secure + c.questionsSecure, earned: t.earned + c.marksEarned, available: t.available + c.marksAvailable }),
    { attempted: 0, secure: 0, earned: 0, available: 0 });
  const stats = [
    { label: "Questions attempted", value: totals.attempted },
    { label: "Questions secure", value: totals.secure },
    { label: "Best marks", value: `${markPercent(totals.earned, totals.available)}%` },
  ];

  return (
    <>
      <TeachCrumbs items={[{ label: data.orgName, to: `/teach?org=${data.orgId}` }, { label: data.name }]} />
      <div className="flex flex-wrap items-center gap-4 pb-8">
        <span className="flex size-14 items-center justify-center rounded-full bg-secondary font-serif text-2xl font-semibold">{data.name.charAt(0).toUpperCase()}</span>
        <div className="min-w-0 flex-1">
          <h1 className="truncate font-serif text-3xl font-semibold tracking-tight sm:text-4xl">{data.name}</h1>
          <p className="truncate text-sm text-muted-foreground">
            {data.email ?? "No email"}{data.joinedAt && ` / joined ${format(new Date(data.joinedAt), "d MMM yyyy")}`}
          </p>
        </div>
      </div>
      {data.classes.length > 0 && (
        <div className="flex flex-wrap gap-2 pb-8">
          {data.classes.map((c) => (
            <Badge key={c._id} variant="secondary" asChild><Link to={classPath(c._id)} className="cursor-pointer">{c.name}</Link></Badge>
          ))}
        </div>
      )}

      {courses.length === 0 ? (
        <Empty className="rounded-2xl border bg-card">
          <EmptyHeader>
            <EmptyMedia variant="icon"><ChartColumn /></EmptyMedia>
            <EmptyTitle>No practice saved yet</EmptyTitle>
            <EmptyDescription>{data.name}'s marks and concept mastery appear here once they answer questions.</EmptyDescription>
          </EmptyHeader>
        </Empty>
      ) : (
        <div className="space-y-10">
          <dl className="grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border bg-card p-4">
                <dd className="font-serif text-3xl font-semibold">{s.value}</dd>
                <dt className="text-xs text-muted-foreground sm:text-sm">{s.label}</dt>
              </div>
            ))}
          </dl>
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-semibold">Courses</h2>
            <div className="grid grid-cols-[minmax(0,1fr)] gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              {courses.map((c) => <LearnerCourseCard key={c._id} orgId={data.orgId} userId={data.userId} row={c} />)}
            </div>
          </section>
          {data.recent.length > 0 && (
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-semibold">Recent attempts</h2>
              <RecentAttempts rows={data.recent} />
            </section>
          )}
        </div>
      )}
      <div className="pt-10"><LearnerSets orgId={data.orgId} userId={data.userId} /></div>
    </>
  );
}

export default function LearnerPage() {
  const { orgId = "", userId = "" } = useParams();
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <TeachGate><LearnerView orgId={orgId} userId={userId} /></TeachGate>
    </div>
  );
}
