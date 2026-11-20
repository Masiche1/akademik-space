import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Authenticated, AuthLoading, Unauthenticated, useQuery } from "convex/react";
import { ShieldAlert, ShieldCheck } from "lucide-react";
import { api } from "@/convex/_generated/api.js";
import { Button } from "@/components/ui/button.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { SignInButton } from "@/components/ui/signin.tsx";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty.tsx";

export function AdminSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-10 w-80" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-28" />)}</div>
      <Skeleton className="h-72 w-full" />
    </div>
  );
}

function AdminsOnly({ children }: { children: ReactNode }) {
  const isAdmin = useQuery(api.admin.users.isAdmin, {});
  if (isAdmin === undefined) return <AdminSkeleton />;
  if (!isAdmin) {
    return (
      <Empty className="rounded-2xl border bg-card">
        <EmptyHeader>
          <EmptyMedia variant="icon"><ShieldAlert /></EmptyMedia>
          <EmptyTitle>The admin portal is for platform admins</EmptyTitle>
          <EmptyDescription>Ask an existing admin to give your account access.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent><Button size="sm" asChild><Link to="/" className="cursor-pointer">Back to home</Link></Button></EmptyContent>
      </Empty>
    );
  }
  return <>{children}</>;
}

/** Wraps every admin page: loading, signed-out and non-admin states. The server checks access on every call too. */
export default function AdminGate({ children }: { children: ReactNode }) {
  return (
    <>
      <AuthLoading><AdminSkeleton /></AuthLoading>
      <Unauthenticated>
        <Empty className="rounded-2xl border bg-card">
          <EmptyHeader>
            <EmptyMedia variant="icon"><ShieldCheck /></EmptyMedia>
            <EmptyTitle>Sign in to open the admin portal</EmptyTitle>
            <EmptyDescription>Manage accounts, organisations and content reports.</EmptyDescription>
          </EmptyHeader>
          <EmptyContent><SignInButton size="sm" signInText="Sign in" /></EmptyContent>
        </Empty>
      </Unauthenticated>
      <Authenticated><AdminsOnly>{children}</AdminsOnly></Authenticated>
    </>
  );
}
