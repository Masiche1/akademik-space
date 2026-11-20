import { useState } from "react";
import { usePaginatedQuery } from "convex/react";
import { format } from "date-fns";
import { Building2, ChevronRight, Search } from "lucide-react";
import { api } from "@/convex/_generated/api.js";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.tsx";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty.tsx";
import { useDebounce } from "@/hooks/use-debounce.ts";
import { ORG_KIND_META, type OrgKind } from "@/lib/orgs.ts";
import OrgMembersSheet from "./org-members-sheet.tsx";
import type { OrgRow } from "../_lib/admin.ts";

const PAGE = 25;
type KindFilter = OrgKind | "all";
const KIND_FILTERS: { value: KindFilter; label: string }[] = [
  { value: "all", label: "All kinds" },
  { value: "tutor", label: "Tutor practices" },
  { value: "school", label: "Schools" },
  { value: "district", label: "Districts" },
];

export default function OrgsTab() {
  const [kind, setKind] = useState<KindFilter>("all");
  const [search, setSearch] = useState("");
  const [debounced] = useDebounce(search, 300);
  const [open, setOpen] = useState<OrgRow | null>(null);
  const { results, status, loadMore } = usePaginatedQuery(api.admin.orgs.list, { kind, search: debounced }, { initialNumItems: PAGE });

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search organisations by name" className="pl-9" aria-label="Search organisations" />
        </div>
        <Select value={kind} onValueChange={(v) => setKind(KIND_FILTERS.find((k) => k.value === v)?.value ?? "all")}>
          <SelectTrigger className="w-full sm:w-48" aria-label="Filter by kind"><SelectValue /></SelectTrigger>
          <SelectContent>{KIND_FILTERS.map((k) => <SelectItem key={k.value} value={k.value}>{k.label}</SelectItem>)}</SelectContent>
        </Select>
      </div>

      {status === "LoadingFirstPage" ? (
        <div className="space-y-2">{Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-16 w-full" />)}</div>
      ) : status === "Exhausted" && results.length === 0 ? (
        <Empty className="rounded-2xl border bg-card">
          <EmptyHeader>
            <EmptyMedia variant="icon"><Building2 /></EmptyMedia>
            <EmptyTitle>No organisations yet</EmptyTitle>
            <EmptyDescription>Tutor practices, schools and districts appear here when educators create them from My account.</EmptyDescription>
          </EmptyHeader>
        </Empty>
      ) : (
        <ul className="divide-y rounded-2xl border bg-card">
          {results.map((o) => {
            const meta = ORG_KIND_META[o.kind];
            return (
              <li key={o.orgId}>
                <button type="button" onClick={() => setOpen(o)} className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-muted/50 cursor-pointer">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-secondary"><meta.icon className="size-4 text-chart-1" /></span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{o.name}</p>
                    <p className="truncate text-xs text-muted-foreground">By {o.createdBy.name} on {format(new Date(o.createdAt), "d MMM yyyy")}</p>
                  </div>
                  <Badge variant="secondary" className="hidden sm:inline-flex">{meta.label}</Badge>
                  <span className="hidden w-32 shrink-0 text-right text-xs text-muted-foreground md:block">{o.studentCount} students, {o.staffCount} staff</span>
                  <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
                </button>
              </li>
            );
          })}
        </ul>
      )}
      {status === "CanLoadMore" && <Button variant="secondary" size="sm" onClick={() => loadMore(PAGE)}>Load more</Button>}
      {status === "LoadingMore" && <Skeleton className="h-8 w-28" />}
      <OrgMembersSheet org={open} onClose={() => setOpen(null)} />
    </div>
  );
}
