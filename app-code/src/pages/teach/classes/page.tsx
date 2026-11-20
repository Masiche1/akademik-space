import { Link, useParams } from "react-router-dom";
import { useQuery } from "convex/react";
import { BookOpen, ChartColumn, Users } from "lucide-react";
import { api } from "@/convex/_generated/api.js";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty.tsx";
import { getCourse } from "@/content/catalog.ts";
import { useAccount } from "@/hooks/use-account.ts";
import { canManageRole } from "@/lib/orgs.ts";
import TeachGate, { PortalSkeleton } from "../_components/teach-gate.tsx";
import TeachCrumbs from "../_components/teach-crumbs.tsx";
import { classReportsPath } from "../_lib/teach.ts";
import CoursePicker from "./_components/course-picker.tsx";
import AddStudentsDialog from "./_components/add-students-dialog.tsx";
import RosterTable from "./_components/roster-table.tsx";
import ClassSettings from "./_components/class-settings.tsx";
import ClassSets from "./_components/class-sets.tsx";

function ClassView({ classId }: { classId: string }) {
  const detail = useQuery(api.teach.classDetail, { classId });
  const account = useAccount();
  if (detail === undefined) return <PortalSkeleton />;
  if (detail === null) {
    return (
      <Empty className="rounded-2xl border bg-card">
        <EmptyHeader>
          <EmptyMedia variant="icon"><Users /></EmptyMedia>
          <EmptyTitle>Class not found</EmptyTitle>
          <EmptyDescription>It may have been deleted, or it belongs to another teacher.</EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }
  const seat = account?.enrollments.find((e) => e.orgId === detail.orgId);
  const canManage = seat ? canManageRole(seat.role) : false;
  const courses = detail.courseIds.flatMap((id) => getCourse(id) ?? []);

  return (
    <>
      <TeachCrumbs items={[{ label: detail.orgName, to: `/teach?org=${detail.orgId}` }, { label: detail.name }]} />
      <div className="flex flex-wrap items-end gap-4 pb-8">
        <div className="min-w-0 flex-1">
          <h1 className="truncate font-serif text-4xl font-semibold tracking-tight">{detail.name}</h1>
          <p className="pt-2 text-muted-foreground">{detail.teacherName} / {detail.roster.length} {detail.roster.length === 1 ? "student" : "students"}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm" variant="secondary" asChild>
            <Link to={classReportsPath(detail._id)} className="cursor-pointer"><ChartColumn className="size-4" /> Reports</Link>
          </Button>
          {detail.canEdit && <ClassSettings detail={detail} canManage={canManage} />}
        </div>
      </div>

      <section className="space-y-3 pb-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-serif text-2xl font-semibold">Courses set</h2>
          {detail.canEdit && <CoursePicker classId={detail._id} assigned={detail.courseIds} />}
        </div>
        {courses.length === 0 ? (
          <p className="rounded-2xl border border-dashed p-5 text-sm text-muted-foreground">
            No courses yet. Set one or more and every student's progress on them appears below.
          </p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {courses.map((c) => <Badge key={c.id} variant="secondary" className="px-3 py-1 text-sm"><BookOpen className="size-3.5" /> {c.title}</Badge>)}
          </div>
        )}
      </section>

      <ClassSets classId={detail._id} canEdit={detail.canEdit} studentCount={detail.roster.length} />

      <section className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-serif text-2xl font-semibold">Students</h2>
          {detail.canEdit && <AddStudentsDialog orgId={detail.orgId} classId={detail._id} roster={detail.roster.map((r) => r.userId)} />}
        </div>
        {detail.roster.length === 0 ? (
          <Empty className="rounded-2xl border bg-card">
            <EmptyHeader>
              <EmptyMedia variant="icon"><Users /></EmptyMedia>
              <EmptyTitle>No students in this class</EmptyTitle>
              <EmptyDescription>Add students who have enrolled in {detail.orgName} with its student code.</EmptyDescription>
            </EmptyHeader>
            {detail.canEdit && (
              <EmptyContent><AddStudentsDialog orgId={detail.orgId} classId={detail._id} roster={[]} /></EmptyContent>
            )}
          </Empty>
        ) : (
          <RosterTable detail={detail} />
        )}
      </section>
    </>
  );
}

export default function ClassPage() {
  const { classId = "" } = useParams();
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <TeachGate><ClassView classId={classId} /></TeachGate>
    </div>
  );
}
