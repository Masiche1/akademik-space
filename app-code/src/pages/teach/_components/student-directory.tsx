import { Link } from "react-router-dom";
import { usePaginatedQuery } from "convex/react";
import { format } from "date-fns";
import { ChevronRight, UserPlus } from "lucide-react";
import { api } from "@/convex/_generated/api.js";
import { Button } from "@/components/ui/button.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty.tsx";
import { learnerPath, type PortalOrg } from "../_lib/teach.ts";

const PAGE = 25;

/** Every student enrolled in the organisation. Managers can open anyone; teachers open their own students. */
export default function StudentDirectory({ org }: { org: PortalOrg }) {
  const { results, status, loadMore } = usePaginatedQuery(api.teach.students, { orgId: org.orgId }, { initialNumItems: PAGE });

  if (status === "LoadingFirstPage") {
    return <div className="space-y-2">{Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-14 w-full" />)}</div>;
  }
  if (status === "Exhausted" && results.length === 0) {
    return (
      <Empty className="rounded-2xl border bg-card">
        <EmptyHeader>
          <EmptyMedia variant="icon"><UserPlus /></EmptyMedia>
          <EmptyTitle>No students enrolled yet</EmptyTitle>
          <EmptyDescription>
            {org.canManage ? "Share the student code from My account. Learners who join appear here." : "Ask your administrator to share the student code."}
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }
  return (
    <div className="space-y-3">
      <ul className="divide-y rounded-2xl border bg-card">
        {results.map((s) => (
          <li key={s.userId}>
            <Link to={learnerPath(org.orgId, s.userId)} className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-muted/50 cursor-pointer">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary font-semibold">{s.name.charAt(0).toUpperCase()}</span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{s.name}</p>
                {s.email && <p className="truncate text-xs text-muted-foreground">{s.email}</p>}
              </div>
              <span className="hidden shrink-0 text-xs text-muted-foreground sm:block">Joined {format(new Date(s.joinedAt), "d MMM yyyy")}</span>
              <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
            </Link>
          </li>
        ))}
      </ul>
      {status === "CanLoadMore" && <Button variant="secondary" size="sm" onClick={() => loadMore(PAGE)}>Load more</Button>}
      {status === "LoadingMore" && <Skeleton className="h-8 w-28" />}
      {!org.canManage && <p className="text-xs text-muted-foreground">You can open the progress of students in your own classes.</p>}
    </div>
  );
}
