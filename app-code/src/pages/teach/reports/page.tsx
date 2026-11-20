import { useParams, useSearchParams } from "react-router-dom";
import { useQuery } from "convex/react";
import { ChartColumn } from "lucide-react";
import { api } from "@/convex/_generated/api.js";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";
import TeachGate, { PortalSkeleton } from "../_components/teach-gate.tsx";
import TeachCrumbs from "../_components/teach-crumbs.tsx";
import { classPath } from "../_lib/teach.ts";
import ConceptReportSection from "./_components/concept-report.tsx";
import SetsReportSection from "./_components/sets-report.tsx";
import TermReportsSection from "./_components/term-reports.tsx";

function ReportsView({ classId }: { classId: string }) {
  const [params, setParams] = useSearchParams();
  const tab = params.get("tab") ?? "concepts";
  const detail = useQuery(api.teach.classDetail, { classId });
  if (detail === undefined) return <PortalSkeleton />;
  if (detail === null) {
    return (
      <Empty className="rounded-2xl border bg-card">
        <EmptyHeader>
          <EmptyMedia variant="icon"><ChartColumn /></EmptyMedia>
          <EmptyTitle>Class not found</EmptyTitle>
          <EmptyDescription>It may have been deleted, or it belongs to another teacher.</EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }
  return (
    <>
      <TeachCrumbs items={[{ label: detail.orgName, to: `/teach?org=${detail.orgId}` }, { label: detail.name, to: classPath(detail._id) }, { label: "Reports" }]} />
      <div className="pb-8">
        <h1 className="font-serif text-4xl font-semibold tracking-tight">{detail.name} reports</h1>
        <p className="pt-2 text-muted-foreground">Where the class is secure, where it is struggling, and how it is doing on set work.</p>
      </div>
      <Tabs value={tab} onValueChange={(t) => setParams({ tab: t }, { replace: true })} className="gap-6">
        <TabsList className="max-w-full overflow-x-auto">
          <TabsTrigger value="concepts" className="cursor-pointer">By concept</TabsTrigger>
          <TabsTrigger value="sets" className="cursor-pointer">Assignments and exams</TabsTrigger>
          <TabsTrigger value="terms" className="cursor-pointer">Term reports</TabsTrigger>
        </TabsList>
        <TabsContent value="concepts"><ConceptReportSection classId={detail._id} courseIds={detail.courseIds} className={detail.name} /></TabsContent>
        <TabsContent value="sets"><SetsReportSection classId={detail._id} className={detail.name} /></TabsContent>
        <TabsContent value="terms"><TermReportsSection classId={detail._id} /></TabsContent>
      </Tabs>
    </>
  );
}

export default function ClassReportsPage() {
  const { classId = "" } = useParams();
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <TeachGate><ReportsView classId={classId} /></TeachGate>
    </div>
  );
}
