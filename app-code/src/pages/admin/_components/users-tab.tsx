import { useState } from "react";
import { Link } from "react-router-dom";
import { usePaginatedQuery } from "convex/react";
import { format } from "date-fns";
import { ChevronRight, Search, Users } from "lucide-react";
import { api } from "@/convex/_generated/api.js";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.tsx";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty.tsx";
import { useDebounce } from "@/hooks/use-debounce.ts";
import UserBadges from "./user-badges.tsx";
import { USER_FILTERS, adminUserPath, initial, type UserFilter } from "../_lib/admin.ts";

const PAGE = 25;

export default function UsersTab() {
  const [filter, setFilter] = useState<UserFilter>("all");
  const [search, setSearch] = useState("");
  const [debounced] = useDebounce(search, 300);
  const { results, status, loadMore } = usePaginatedQuery(api.admin.users.list, { filter, search: debounced }, { initialNumItems: PAGE });
  const searching = debounced.trim().length > 0;

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name, or an exact email like jane@school.org" className="pl-9" aria-label="Search accounts" />
        </div>
        <Select value={filter} onValueChange={(v) => setFilter(USER_FILTERS.find((f) => f.value === v)?.value ?? "all")} disabled={searching}>
          <SelectTrigger className="w-full sm:w-48" aria-label="Filter accounts"><SelectValue /></SelectTrigger>
          <SelectContent>{USER_FILTERS.map((f) => <SelectItem key={f.value} value={f.value}>{f.label}</SelectItem>)}</SelectContent>
        </Select>
      </div>
      {searching && filter !== "all" && <p className="text-xs text-muted-foreground">Search looks across every account; the filter is paused.</p>}

      {status === "LoadingFirstPage" ? (
        <div className="space-y-2">{Array.from({ length: 5 }).map((_, i) => <Skeleton key={i} className="h-16 w-full" />)}</div>
      ) : status === "Exhausted" && results.length === 0 ? (
        <Empty className="rounded-2xl border bg-card">
          <EmptyHeader>
            <EmptyMedia variant="icon"><Users /></EmptyMedia>
            <EmptyTitle>No accounts found</EmptyTitle>
            <EmptyDescription>{searching ? "Try a different name, or the full email address." : "No accounts match this filter."}</EmptyDescription>
          </EmptyHeader>
        </Empty>
      ) : (
        <ul className="divide-y rounded-2xl border bg-card">
          {results.map((u) => (
            <li key={u.userId}>
              <Link to={adminUserPath(u.userId)} className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-muted/50 cursor-pointer">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary font-semibold">{initial(u.name ?? u.email)}</span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{u.name ?? "Unnamed account"}</p>
                  {u.email && <p className="truncate text-xs text-muted-foreground">{u.email}</p>}
                </div>
                <div className="hidden md:block"><UserBadges user={u} /></div>
                <span className="hidden shrink-0 text-xs text-muted-foreground lg:block">Joined {format(new Date(u.joinedAt), "d MMM yyyy")}</span>
                <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
              </Link>
            </li>
          ))}
        </ul>
      )}
      {status === "CanLoadMore" && <Button variant="secondary" size="sm" onClick={() => loadMore(PAGE)}>Load more</Button>}
      {status === "LoadingMore" && <Skeleton className="h-8 w-28" />}
    </div>
  );
}
