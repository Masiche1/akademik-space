import { Link } from "react-router-dom";
import { useQuery } from "convex/react";
import { ArrowRight, Ban, Building2, Flag, GraduationCap, Presentation, ShieldCheck, Users, type LucideIcon } from "lucide-react";
import { api } from "@/convex/_generated/api.js";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { adminTabPath, formatCount, type AdminTab, type Overview } from "../_lib/admin.ts";

type Tile = { key: keyof Overview; label: string; icon: LucideIcon; tab: AdminTab; accent?: boolean };

const TILES: Tile[] = [
  { key: "users", label: "Accounts", icon: Users, tab: "users" },
  { key: "learners", label: "Learners", icon: GraduationCap, tab: "users" },
  { key: "educators", label: "Educators", icon: Presentation, tab: "users" },
  { key: "orgs", label: "Organisations", icon: Building2, tab: "organisations" },
  { key: "openReports", label: "Open content reports", icon: Flag, tab: "content", accent: true },
  { key: "admins", label: "Platform admins", icon: ShieldCheck, tab: "users" },
  { key: "suspended", label: "Suspended accounts", icon: Ban, tab: "users" },
];

function ReportHotspots() {
  const data = useQuery(api.admin.content.openByCourse, {});
  if (data === undefined) return <Skeleton className="h-48 w-full" />;
  const max = Math.max(1, ...data.courses.map((c) => c.open));
  return (
    <section className="rounded-2xl border bg-card p-5">
      <div className="flex items-center justify-between gap-3 pb-4">
        <h2 className="font-serif text-xl font-semibold">Where reports cluster</h2>
        <Link to={adminTabPath("content")} className="flex items-center gap-1 text-sm text-chart-1 hover:underline cursor-pointer">Review <ArrowRight className="size-3.5" /></Link>
      </div>
      {data.courses.length === 0 ? (
        <p className="text-sm text-muted-foreground">No open reports. Every reported question has been reviewed.</p>
      ) : (
        <ul className="space-y-3">
          {data.courses.map((c) => (
            <li key={c.courseId} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-1">
              <span className="truncate text-sm">{c.title}</span>
              <span className="font-mono text-sm">{c.open}</span>
              <div className="col-span-2 h-1.5 overflow-hidden rounded-full bg-muted">
                <div className="h-full rounded-full bg-chart-1" style={{ width: `${(c.open / max) * 100}%` }} />
              </div>
            </li>
          ))}
        </ul>
      )}
      {data.unknown > 0 && <p className="pt-3 text-xs text-muted-foreground">{data.unknown} reports point at questions no longer in the catalog.</p>}
    </section>
  );
}

export default function OverviewTab() {
  const overview = useQuery(api.admin.users.overview, {});
  return (
    <div className="space-y-6">
      {overview === undefined ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{Array.from({ length: 7 }).map((_, i) => <Skeleton key={i} className="h-28" />)}</div>
      ) : (
        <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {TILES.map((t) => (
            <Link key={t.key} to={adminTabPath(t.tab)}
              className={`group rounded-2xl border p-4 transition-colors hover:border-chart-1/60 cursor-pointer ${t.accent ? "bg-accent" : "bg-card"}`}>
              <t.icon className={`size-4 ${t.accent ? "text-accent-foreground" : "text-chart-1"}`} />
              <dd className="pt-3 font-serif text-3xl font-semibold">{formatCount(overview[t.key])}</dd>
              <dt className="text-xs text-muted-foreground sm:text-sm">{t.label}</dt>
            </Link>
          ))}
        </dl>
      )}
      <ReportHotspots />
    </div>
  );
}
