import { useState } from "react";
import { usePaginatedQuery } from "convex/react";
import { Flag } from "lucide-react";
import { api } from "@/convex/_generated/api.js";
import { Button } from "@/components/ui/button.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty.tsx";
import ReportCard from "./report-card.tsx";
import { REPORT_STATUS_LABEL, type ReportStatus } from "../_lib/admin.ts";

const PAGE = 15;
const STATUSES: ReportStatus[] = ["open", "resolved", "dismissed"];
const EMPTY: Record<ReportStatus, string> = {
  open: "Nothing waiting for review. Reports from the Report button on any question land here.",
  resolved: "Reports you fix will be kept here with your notes.",
  dismissed: "Reports that needed no change will be kept here.",
};

function ReportList({ status }: { status: ReportStatus }) {
  const { results, status: page, loadMore } = usePaginatedQuery(api.admin.content.reports, { status }, { initialNumItems: PAGE });
  if (page === "LoadingFirstPage") return <div className="space-y-3">{Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className="h-52 w-full" />)}</div>;
  if (page === "Exhausted" && results.length === 0) {
    return (
      <Empty className="rounded-2xl border bg-card">
        <EmptyHeader>
          <EmptyMedia variant="icon"><Flag /></EmptyMedia>
          <EmptyTitle>No {REPORT_STATUS_LABEL[status].toLowerCase()} reports</EmptyTitle>
          <EmptyDescription>{EMPTY[status]}</EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }
  return (
    <div className="space-y-3">
      {results.map((r) => <ReportCard key={r.reportId} report={r} />)}
      {page === "CanLoadMore" && <Button variant="secondary" size="sm" onClick={() => loadMore(PAGE)}>Load more</Button>}
      {page === "LoadingMore" && <Skeleton className="h-8 w-28" />}
    </div>
  );
}

/** Question reports from learners and teachers, reviewed by platform admins. */
export default function ContentTab() {
  const [status, setStatus] = useState<ReportStatus>("open");
  return (
    <div className="space-y-4">
      <Tabs value={status} onValueChange={(v) => setStatus(STATUSES.find((s) => s === v) ?? "open")}>
        <TabsList>
          {STATUSES.map((s) => <TabsTrigger key={s} value={s} className="cursor-pointer">{REPORT_STATUS_LABEL[s]}</TabsTrigger>)}
        </TabsList>
      </Tabs>
      <ReportList key={status} status={status} />
    </div>
  );
}
