import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery } from "convex/react";
import { format, formatDistanceToNow } from "date-fns";
import { Ban, ShieldCheck, ShieldOff, UserCheck, UserX, UserRound } from "lucide-react";
import { api } from "@/convex/_generated/api.js";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty.tsx";
import { ORG_KIND_META, ROLE_LABEL } from "@/lib/orgs.ts";
import AdminGate, { AdminSkeleton } from "../_components/admin-gate.tsx";
import AdminCrumbs from "../_components/admin-crumbs.tsx";
import ConfirmButton from "../_components/confirm-button.tsx";
import UserBadges from "../_components/user-badges.tsx";
import AuditEntry from "../_components/audit-entry.tsx";
import { adminTabPath, initial, type UserDetail } from "../_lib/admin.ts";

function AccessActions({ user }: { user: UserDetail }) {
  const setSuspended = useMutation(api.admin.users.setSuspended);
  const setAdmin = useMutation(api.admin.users.setPlatformAdmin);
  const name = user.name ?? user.email ?? "this account";
  if (user.isSelf) return <p className="text-sm text-muted-foreground">This is your account. Another admin must change your access.</p>;
  return (
    <div className="flex flex-wrap gap-2">
      {user.isPlatformAdmin ? (
        <ConfirmButton label={<><ShieldOff className="size-4" /> Remove admin access</>} title={`Remove admin access from ${name}?`}
          description="They lose the admin portal straight away. Their learner or educator account is unchanged."
          confirmLabel="Remove access" success="Admin access removed" onConfirm={() => setAdmin({ userId: user.userId, isPlatformAdmin: false })} />
      ) : !user.suspended && (
        <ConfirmButton label={<><ShieldCheck className="size-4" /> Make platform admin</>} title={`Make ${name} a platform admin?`}
          description="They can manage every account, organisation and content report on the platform."
          confirmLabel="Make admin" success="Admin access granted" onConfirm={() => setAdmin({ userId: user.userId, isPlatformAdmin: true })} />
      )}
      {user.suspended ? (
        <ConfirmButton label={<><UserCheck className="size-4" /> Restore account</>} title={`Restore ${name}?`}
          description="They can sign in and use the platform again, with their enrolments and progress intact."
          confirmLabel="Restore" success="Account restored" onConfirm={() => setSuspended({ userId: user.userId, suspended: false })} />
      ) : !user.isPlatformAdmin && (
        <ConfirmButton variant="destructive" destructive label={<><Ban className="size-4" /> Suspend account</>} title={`Suspend ${name}?`}
          description="They are treated as signed out everywhere until you restore them. Nothing is deleted."
          confirmLabel="Suspend" success="Account suspended" onConfirm={() => setSuspended({ userId: user.userId, suspended: true })} />
      )}
    </div>
  );
}

function Memberships({ user }: { user: UserDetail }) {
  const remove = useMutation(api.admin.users.removeFromOrg);
  const setRole = useMutation(api.admin.users.setStaffRole);
  if (user.memberships.length === 0) return <p className="text-sm text-muted-foreground">Not enrolled with any tutor, school or district. They practise independently.</p>;
  return (
    <ul className="divide-y rounded-2xl border bg-card">
      {user.memberships.map((m) => {
        const meta = ORG_KIND_META[m.orgKind];
        const canChangeRole = m.orgKind !== "tutor" && !m.isCreator && (m.role === "admin" || m.role === "teacher");
        const next = m.role === "admin" ? "teacher" : "admin";
        return (
          <li key={m.membershipId} className="flex flex-wrap items-center gap-3 px-4 py-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-secondary"><meta.icon className="size-4 text-chart-1" /></span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{m.orgName}</p>
              <p className="text-xs text-muted-foreground">{meta.label}, joined {format(new Date(m.joinedAt), "d MMM yyyy")}</p>
            </div>
            <Badge variant="secondary">{ROLE_LABEL[m.role]}{m.isCreator && " (creator)"}</Badge>
            {!m.isCreator && (
              <div className="flex gap-2">
                {canChangeRole && (
                  <ConfirmButton variant="ghost" label={next === "admin" ? "Make administrator" : "Make teacher"} title={`Change role at ${m.orgName}?`}
                    description={next === "admin" ? "Administrators can see every class and student and manage join codes." : "Teachers only see their own classes."}
                    confirmLabel="Change role" success="Role changed" onConfirm={() => setRole({ membershipId: m.membershipId, role: next })} />
                )}
                <ConfirmButton variant="ghost" label={<><UserX className="size-4" /> Remove</>} title={`Remove from ${m.orgName}?`}
                  description={m.role === "student" ? "They are taken off every class roster there. Their own practice progress is kept." : "Teachers who still run classes must have them handed over first."}
                  confirmLabel="Remove" destructive success="Removed from organisation" onConfirm={() => remove({ membershipId: m.membershipId })} />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function AccessHistory({ userId }: { userId: UserDetail["userId"] }) {
  const entries = useQuery(api.admin.insights.auditForUser, { userId });
  if (entries === undefined) return <Skeleton className="h-24 w-full" />;
  if (entries.length === 0) return <p className="text-sm text-muted-foreground">No access changes recorded for this account.</p>;
  return <ul className="divide-y rounded-2xl border bg-card">{entries.map((e) => <AuditEntry key={e.entryId} entry={e} />)}</ul>;
}

function UserView({ userId }: { userId: string }) {
  const user = useQuery(api.admin.users.get, { userId });
  if (user === undefined) return <AdminSkeleton />;
  if (user === null) {
    return (
      <Empty className="rounded-2xl border bg-card">
        <EmptyHeader>
          <EmptyMedia variant="icon"><UserRound /></EmptyMedia>
          <EmptyTitle>Account not found</EmptyTitle>
          <EmptyDescription>It may have been removed, or the link is wrong.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent><Button size="sm" asChild><Link to={adminTabPath("users")} className="cursor-pointer">Back to users</Link></Button></EmptyContent>
      </Empty>
    );
  }
  return (
    <div className="space-y-8">
      <AdminCrumbs items={[{ label: "Users and access", to: adminTabPath("users") }, { label: user.name ?? user.email ?? "Account" }]} />
      <header className="flex flex-wrap items-center gap-4">
        <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary font-serif text-2xl font-semibold text-primary-foreground">{initial(user.name ?? user.email)}</span>
        <div className="min-w-0 flex-1 space-y-1">
          <h1 className="truncate font-serif text-3xl font-semibold">{user.name ?? "Unnamed account"}</h1>
          <p className="truncate text-sm text-muted-foreground">{user.email ?? "No email"} · joined {format(new Date(user.joinedAt), "d MMM yyyy")}</p>
          <UserBadges user={user} />
        </div>
      </header>

      <section className="space-y-3 rounded-2xl border bg-card p-5">
        <h2 className="font-serif text-xl font-semibold">Access</h2>
        <AccessActions user={user} />
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-xl font-semibold">Enrolments</h2>
        <Memberships user={user} />
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-xl font-semibold">Practice</h2>
        {user.courses.length === 0 ? (
          <p className="text-sm text-muted-foreground">No practice saved yet.</p>
        ) : (
          <ul className="grid gap-3 sm:grid-cols-2">
            {user.courses.map((c) => (
              <li key={c.courseId} className="rounded-2xl border bg-card p-4">
                <p className="truncate text-sm font-medium">{c.title}</p>
                <p className="pt-1 text-xs text-muted-foreground">
                  {c.questionsAttempted} questions tried, {c.questionsSecure} secure · last {formatDistanceToNow(new Date(c.lastAttemptAt), { addSuffix: true })}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="space-y-3">
        <h2 className="font-serif text-xl font-semibold">Access history</h2>
        <AccessHistory userId={user.userId} />
      </section>
    </div>
  );
}

export default function AdminUserPage() {
  const { userId = "" } = useParams();
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <AdminGate><UserView userId={userId} /></AdminGate>
    </div>
  );
}
