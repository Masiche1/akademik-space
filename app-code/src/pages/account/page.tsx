import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import { Link } from "react-router-dom";
import { Ban, Compass, Presentation, ShieldCheck, UserRound, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { SignInButton } from "@/components/ui/signin.tsx";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty.tsx";
import { useAccount } from "@/hooks/use-account.ts";
import AccountTypePicker from "./_components/account-type-picker.tsx";
import JoinWithCode from "./_components/join-with-code.tsx";
import CreateOrgDialog from "./_components/create-org-dialog.tsx";
import EnrollmentCard from "./_components/enrollment-card.tsx";

function AccountSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-28 w-full" />
      <div className="grid gap-4 md:grid-cols-2">{Array.from({ length: 2 }).map((_, i) => <Skeleton key={i} className="h-44" />)}</div>
    </div>
  );
}

function AccountBody() {
  const account = useAccount();
  if (account === undefined) return <AccountSkeleton />;
  if (account === null) return null;

  if (account.suspended) {
    return (
      <Empty className="rounded-2xl border bg-card">
        <EmptyHeader>
          <EmptyMedia variant="icon"><Ban /></EmptyMedia>
          <EmptyTitle>Your account is suspended</EmptyTitle>
          <EmptyDescription>A platform admin has paused this account. Your progress is kept. Contact your school or support to restore access.</EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }

  if (!account.accountType) {
    return (
      <section className="space-y-4">
        <div>
          <h2 className="font-serif text-2xl font-semibold">How will you use the platform?</h2>
          <p className="pt-1 text-sm text-muted-foreground">You can change this later.</p>
        </div>
        <AccountTypePicker current={null} />
      </section>
    );
  }

  const isEducator = account.accountType === "educator";
  return (
    <div className="space-y-10">
      <section className="flex flex-wrap items-center gap-4 rounded-2xl border bg-card p-5">
        <span className="flex size-12 items-center justify-center rounded-full bg-secondary"><UserRound className="size-6" /></span>
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold">{account.name ?? "Your account"}</p>
          {account.email && <p className="truncate text-sm text-muted-foreground">{account.email}</p>}
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{isEducator ? "Educator" : "Learner"}</Badge>
          {account.isPlatformAdmin && <Badge><ShieldCheck className="size-3" /> Platform admin</Badge>}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-serif text-2xl font-semibold">Enrolments</h2>
            <p className="pt-1 text-sm text-muted-foreground">
              {isEducator ? "Organisations you run or teach in." : "Your tutors, schools and districts. You can always practise independently too."}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {isEducator && account.enrollments.length > 0 && (
              <Button variant="secondary" asChild><Link to="/teach" className="cursor-pointer"><Presentation className="size-4" /> Teacher portal</Link></Button>
            )}
            {isEducator && <CreateOrgDialog />}
          </div>
        </div>
        <JoinWithCode isEducator={isEducator} />
        {account.enrollments.length === 0 ? (
          <Empty className="rounded-2xl border bg-card">
            <EmptyHeader>
              <EmptyMedia variant="icon">{isEducator ? <Users /> : <Compass />}</EmptyMedia>
              <EmptyTitle>{isEducator ? "No organisations yet" : "Learning independently"}</EmptyTitle>
              <EmptyDescription>
                {isEducator
                  ? "Create a tutor practice, school or district, or join one with a staff code."
                  : "Every course is open to you. Join with a code when your tutor or school sets you work."}
              </EmptyDescription>
            </EmptyHeader>
            {!isEducator && (
              <EmptyContent><Button size="sm" asChild><Link to="/" className="cursor-pointer">Browse curricula</Link></Button></EmptyContent>
            )}
          </Empty>
        ) : (
          <div className="grid grid-cols-[minmax(0,1fr)] gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            {account.enrollments.map((e) => <EnrollmentCard key={e.membershipId} enrollment={e} />)}
          </div>
        )}
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="font-serif text-2xl font-semibold">Account type</h2>
          <p className="pt-1 text-sm text-muted-foreground">Educators can create organisations and join as staff.</p>
        </div>
        <AccountTypePicker current={account.accountType} />
      </section>
    </div>
  );
}

export default function AccountPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <p className="font-mono text-xs text-chart-1">Account</p>
      <h1 className="pt-2 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">My account</h1>
      <p className="max-w-2xl pb-8 pt-3 text-muted-foreground">Your account type and the tutors, schools and districts you belong to.</p>
      <AuthLoading><AccountSkeleton /></AuthLoading>
      <Unauthenticated>
        <Empty className="rounded-2xl border bg-card">
          <EmptyHeader>
            <EmptyMedia variant="icon"><UserRound /></EmptyMedia>
            <EmptyTitle>Sign in to manage your account</EmptyTitle>
            <EmptyDescription>Join your tutor, school or district, or set up your own.</EmptyDescription>
          </EmptyHeader>
          <EmptyContent><SignInButton size="sm" signInText="Sign in" /></EmptyContent>
        </Empty>
      </Unauthenticated>
      <Authenticated><AccountBody /></Authenticated>
    </div>
  );
}
