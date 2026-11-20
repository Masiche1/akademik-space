import { useState } from "react";
import { usePaginatedQuery } from "convex/react";
import { ScrollText } from "lucide-react";
import { api } from "@/convex/_generated/api.js";
import { Button } from "@/components/ui/button.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.tsx";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty.tsx";
import AuditEntry from "./audit-entry.tsx";
import { AUDIT_FILTERS, type AuditFilter } from "../_lib/admin.ts";

const PAGE = 30;

/** Every sensitive change on the platform, newest first. Entries cannot be edited or deleted. */
export default function AuditTab() {
  const [action, setAction] = useState<AuditFilter>("all");
  const { results, status, loadMore } = usePaginatedQuery(api.admin.insights.auditLog, { action }, { initialNumItems: PAGE });
  return (
    <div className="space-y-4">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <p className="text-sm text-muted-foreground">A permanent record of access changes, removals and reviews. Entries cannot be edited.</p>
        <Select value={action} onValueChange={(v) => setAction(AUDIT_FILTERS.find((f) => f.value === v)?.value ?? "all")}>
          <SelectTrigger className="w-full sm:w-56" aria-label="Filter by action"><SelectValue /></SelectTrigger>
          <SelectContent>{AUDIT_FILTERS.map((f) => <SelectItem key={f.value} value={f.value}>{f.label}</SelectItem>)}</SelectContent>
        </Select>
      </div>
      {status === "LoadingFirstPage" ? (
        <div className="space-y-2">{Array.from({ length: 5 }).map((_, i) => <Skeleton key={i} className="h-16 w-full" />)}</div>
      ) : status === "Exhausted" && results.length === 0 ? (
        <Empty className="rounded-2xl border bg-card">
          <EmptyHeader>
            <EmptyMedia variant="icon"><ScrollText /></EmptyMedia>
            <EmptyTitle>Nothing logged yet</EmptyTitle>
            <EmptyDescription>{action === "all" ? "Sensitive actions such as suspensions and role changes are recorded here from now on." : "No entries of this kind yet."}</EmptyDescription>
          </EmptyHeader>
        </Empty>
      ) : (
        <>
          <ul className="divide-y rounded-2xl border bg-card">{results.map((e) => <AuditEntry key={e.entryId} entry={e} />)}</ul>
          {status === "CanLoadMore" && <Button variant="secondary" size="sm" onClick={() => loadMore(PAGE)}>Load more</Button>}
          {status === "LoadingMore" && <Skeleton className="h-8 w-28" />}
        </>
      )}
    </div>
  );
}
