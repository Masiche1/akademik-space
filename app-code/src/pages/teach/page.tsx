import { useQuery } from "convex/react";
import { useSearchParams, Link } from "react-router-dom";
import { Presentation, School, Users } from "lucide-react";
import { api } from "@/convex/_generated/api.js";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.tsx";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty.tsx";
import { ORG_KIND_META, ROLE_LABEL } from "@/lib/orgs.ts";
import TeachGate, { PortalSkeleton } from "./_components/teach-gate.tsx";
import ClassCard from "./_components/class-card.tsx";
import CreateClassDialog from "./_components/create-class-dialog.tsx";
import StudentDirectory from "./_components/student-directory.tsx";
import type { PortalOrg } from "./_lib/teach.ts";

function OrgView({ org }: { org: PortalOrg }) {
  const meta = ORG_KIND_META[org.kind];
  const stats = [
    { label: "Classes", value: org.classes.length },
    { label: "Students enrolled", value: org.studentCount },
    { label: "Staff", value: org.staffCount },
  ];
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3">
        <span className="flex size-11 items-center justify-center rounded-xl bg-secondary"><meta.icon className="size-5 text-chart-1" /></span>
        <div className="min-w-0 flex-1">
          <p className="truncate font-serif text-2xl font-semibold">{org.name}</p>
          <div className="flex flex-wrap gap-2 pt-1"><Badge variant="secondary">{meta.label}</Badge><Badge>{ROLE_LABEL[org.role]}</Badge></div>
        </div>
        <CreateClassDialog org={org} />
      </div>
      <dl className="grid grid-cols-3 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border bg-card p-4">
            <dd className="font-serif text-3xl font-semibold">{s.value}</dd>
            <dt className="text-xs text-muted-foreground sm:text-sm">{s.label}</dt>
          </div>
        ))}
      </dl>
      <Tabs defaultValue="classes">
        <TabsList>
          <TabsTrigger value="classes" className="cursor-pointer">{org.canManage ? "All classes" : "My classes"}</TabsTrigger>
          <TabsTrigger value="students" className="cursor-pointer">Students</TabsTrigger>
        </TabsList>
        <TabsContent value="classes" className="pt-4">
          {org.classes.length === 0 ? (
            <Empty className="rounded-2xl border bg-card">
              <EmptyHeader>
                <EmptyMedia variant="icon"><Users /></EmptyMedia>
                <EmptyTitle>No classes yet</EmptyTitle>
                <EmptyDescription>Create a class, add enrolled students and set the courses they should work on.</EmptyDescription>
              </EmptyHeader>
              <EmptyContent><CreateClassDialog org={org} /></EmptyContent>
            </Empty>
          ) : (
            <div className="grid grid-cols-[minmax(0,1fr)] gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:grid-cols-[repeat(3,minmax(0,1fr))]">
              {org.classes.map((c, i) => <ClassCard key={c._id} cls={c} index={i} showTeacher={org.canManage && org.kind !== "tutor"} />)}
            </div>
          )}
        </TabsContent>
        <TabsContent value="students" className="pt-4"><StudentDirectory org={org} /></TabsContent>
      </Tabs>
    </div>
  );
}

function Portal() {
  const portal = useQuery(api.teach.portal, {});
  const [params, setParams] = useSearchParams();
  if (portal === undefined) return <PortalSkeleton />;
  if (portal === null || portal.orgs.length === 0) {
    return (
      <Empty className="rounded-2xl border bg-card">
        <EmptyHeader>
          <EmptyMedia variant="icon"><School /></EmptyMedia>
          <EmptyTitle>You are not teaching anywhere yet</EmptyTitle>
          <EmptyDescription>Create a tutor practice, school or district, or join one with a staff code.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent><Button size="sm" asChild><Link to="/account" className="cursor-pointer">Go to My account</Link></Button></EmptyContent>
      </Empty>
    );
  }
  const selected = portal.orgs.find((o) => o.orgId === params.get("org")) ?? portal.orgs[0];
  return (
    <div className="space-y-6">
      {portal.orgs.length > 1 && (
        <Select value={selected.orgId} onValueChange={(org) => setParams({ org })}>
          <SelectTrigger className="w-full sm:w-80" aria-label="Organisation"><SelectValue /></SelectTrigger>
          <SelectContent>
            {portal.orgs.map((o) => <SelectItem key={o.orgId} value={o.orgId}>{o.name}</SelectItem>)}
          </SelectContent>
        </Select>
      )}
      <OrgView key={selected.orgId} org={selected} />
    </div>
  );
}

export default function TeachPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p className="flex items-center gap-1.5 font-mono text-xs text-chart-1"><Presentation className="size-3.5" /> Teacher portal</p>
      <h1 className="pt-2 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">Learners and classes</h1>
      <p className="max-w-2xl pb-8 pt-3 text-muted-foreground">Group your students into classes, set the courses they work on and follow their progress.</p>
      <TeachGate><Portal /></TeachGate>
    </div>
  );
}
