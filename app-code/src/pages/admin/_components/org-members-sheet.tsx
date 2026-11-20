import { useState } from "react";
import { Link } from "react-router-dom";
import { usePaginatedQuery } from "convex/react";
import { ChevronRight, Users } from "lucide-react";
import { api } from "@/convex/_generated/api.js";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet.tsx";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";
import { ORG_KIND_META, ROLE_LABEL } from "@/lib/orgs.ts";
import { adminUserPath, initial, type OrgRow } from "../_lib/admin.ts";

const PAGE = 30;
type Group = "staff" | "student";

function MemberList({ org, role }: { org: OrgRow; role: Group }) {
  const { results, status, loadMore } = usePaginatedQuery(api.admin.orgs.members, { orgId: org.orgId, role }, { initialNumItems: PAGE });
  if (status === "LoadingFirstPage") return <div className="space-y-2">{Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-12" />)}</div>;
  if (status === "Exhausted" && results.length === 0) {
    return <p className="flex items-center gap-2 py-6 text-sm text-muted-foreground"><Users className="size-4" /> No {role === "staff" ? "staff" : "students"} yet.</p>;
  }
  return (
    <div className="space-y-3">
      <ul className="divide-y rounded-xl border">
        {results.map((m) => (
          <li key={m.membershipId}>
            <Link to={adminUserPath(m.userId)} className="flex items-center gap-3 px-3 py-2.5 transition-colors hover:bg-muted/50 cursor-pointer">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-semibold">{initial(m.name)}</span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{m.name}</p>
                {m.email && <p className="truncate text-xs text-muted-foreground">{m.email}</p>}
              </div>
              {role === "staff" && <Badge variant="secondary">{ROLE_LABEL[m.role]}</Badge>}
              <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
            </Link>
          </li>
        ))}
      </ul>
      {status === "CanLoadMore" && <Button variant="secondary" size="sm" onClick={() => loadMore(PAGE)}>Load more</Button>}
    </div>
  );
}

/** Side panel listing an organisation's staff and students. Members load only while it is open. */
export default function OrgMembersSheet({ org, onClose }: { org: OrgRow | null; onClose: () => void }) {
  const [group, setGroup] = useState<Group>("staff");
  return (
    <Sheet open={org !== null} onOpenChange={(open) => { if (!open) onClose(); }}>
      <SheetContent className="w-full overflow-y-auto sm:max-w-md">
        {org && (
          <>
            <SheetHeader>
              <SheetTitle className="font-serif text-xl">{org.name}</SheetTitle>
              <SheetDescription>{ORG_KIND_META[org.kind].label} created by {org.createdBy.name}</SheetDescription>
            </SheetHeader>
            <div className="space-y-4 px-4 pb-6">
              <Tabs value={group} onValueChange={(v) => setGroup(v === "student" ? "student" : "staff")}>
                <TabsList>
                  <TabsTrigger value="staff" className="cursor-pointer">Staff ({org.staffCount})</TabsTrigger>
                  <TabsTrigger value="student" className="cursor-pointer">Students ({org.studentCount})</TabsTrigger>
                </TabsList>
              </Tabs>
              <MemberList key={`${org.orgId}-${group}`} org={org} role={group} />
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
