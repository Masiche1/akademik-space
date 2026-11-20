import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import { GraduationCap, Presentation } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { SignInButton } from "@/components/ui/signin.tsx";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty.tsx";
import { useAccount } from "@/hooks/use-account.ts";

export function PortalSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-12 w-72" />
      <div className="grid gap-4 md:grid-cols-3">{Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className="h-36" />)}</div>
      <Skeleton className="h-64 w-full" />
    </div>
  );
}

function EducatorOnly({ children }: { children: ReactNode }) {
  const account = useAccount();
  if (account === undefined) return <PortalSkeleton />;
  if (account === null) return null;
  if (account.accountType !== "educator") {
    return (
      <Empty className="rounded-2xl border bg-card">
        <EmptyHeader>
          <EmptyMedia variant="icon"><GraduationCap /></EmptyMedia>
          <EmptyTitle>The teacher portal is for educators</EmptyTitle>
          <EmptyDescription>Switch your account to educator to run classes for your tutor practice, school or district.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent><Button size="sm" asChild><Link to="/account" className="cursor-pointer">Go to My account</Link></Button></EmptyContent>
      </Empty>
    );
  }
  return <>{children}</>;
}

/** Wraps every teacher portal page: handles loading, signed-out and learner accounts. */
export default function TeachGate({ children }: { children: ReactNode }) {
  return (
    <>
      <AuthLoading><PortalSkeleton /></AuthLoading>
      <Unauthenticated>
        <Empty className="rounded-2xl border bg-card">
          <EmptyHeader>
            <EmptyMedia variant="icon"><Presentation /></EmptyMedia>
            <EmptyTitle>Sign in to open the teacher portal</EmptyTitle>
            <EmptyDescription>Manage your classes, learners and the courses you set.</EmptyDescription>
          </EmptyHeader>
          <EmptyContent><SignInButton size="sm" signInText="Sign in" /></EmptyContent>
        </Empty>
      </Unauthenticated>
      <Authenticated><EducatorOnly>{children}</EducatorOnly></Authenticated>
    </>
  );
}
