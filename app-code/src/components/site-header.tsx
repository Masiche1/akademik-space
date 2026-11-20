import { Link } from "react-router-dom";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import { BookOpen, ChartColumn, LogIn, LogOut, Menu, Presentation, ShieldCheck, UserPlus, UserRound } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import BrandMark from "@/components/brand-mark.tsx";
import { useAuth } from "@/hooks/use-auth.ts";
import { useAccount } from "@/hooks/use-account.ts";
import { VISIBLE_CURRICULA, curriculumPath } from "@/content/curricula.ts";

/** Parent items only: each curriculum page lists its own courses. */
const NAV_ITEMS = VISIBLE_CURRICULA.map((c) => ({ to: curriculumPath(c), label: c.navLabel }));
const USER_ITEMS = [
  { to: "/progress", label: "My progress", icon: ChartColumn },
  { to: "/account", label: "My account", icon: UserRound },
];
const TEACH_ITEM = { to: "/teach", label: "Teacher portal", icon: Presentation };
const ADMIN_ITEM = { to: "/admin", label: "Admin portal", icon: ShieldCheck };
const sectionLabel = "text-xs font-semibold uppercase tracking-wider text-muted-foreground";

/** Educators also get the teacher portal; platform admins get the admin portal. */
function useUserItems() {
  const account = useAccount();
  return [
    ...(account?.isPlatformAdmin ? [ADMIN_ITEM] : []),
    ...(account?.accountType === "educator" ? [TEACH_ITEM] : []),
    ...USER_ITEMS,
  ];
}

/** Dot shown until a new user picks learner or educator. */
function useNeedsSetup() {
  const account = useAccount();
  return account !== undefined && account !== null && account.accountType === null;
}

function SignedInItems() {
  const { user, signout } = useAuth();
  const needsSetup = useNeedsSetup();
  const userItems = useUserItems();
  return (
    <>
      <DropdownMenuSeparator />
      <DropdownMenuLabel className="truncate">{user?.profile.name ?? "Your account"}</DropdownMenuLabel>
      {userItems.map((n) => (
        <DropdownMenuItem key={n.to} asChild className="cursor-pointer">
          <Link to={n.to}><n.icon className="size-4" /> {n.label}{n.to === "/account" && needsSetup && <span className="ml-auto text-xs text-chart-1">Set up</span>}</Link>
        </DropdownMenuItem>
      ))}
      <DropdownMenuSeparator />
      <DropdownMenuItem className="cursor-pointer" onSelect={() => void signout()}><LogOut className="size-4" /> Sign out</DropdownMenuItem>
    </>
  );
}

/** Sign up sits directly under the curricula list for signed-out visitors. */
function SignedOutItems() {
  return (
    <div className="grid gap-2 border-t p-2 pt-3 mt-1">
      <DropdownMenuItem asChild className="cursor-pointer justify-center bg-primary font-medium text-primary-foreground focus:bg-primary/90 focus:text-primary-foreground">
        <Link to="/sign-in"><UserPlus className="size-4 text-primary-foreground" /> Sign up free</Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild className="cursor-pointer justify-center">
        <Link to="/sign-in"><LogIn className="size-4" /> Sign in</Link>
      </DropdownMenuItem>
    </div>
  );
}

function SiteMenu() {
  const needsSetup = useNeedsSetup();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="sm" className="relative cursor-pointer" aria-label="Open menu">
          <Menu className="size-4" /> Menu
          {needsSetup && <span className="absolute right-1 top-1 size-2 rounded-full bg-chart-1" aria-label="Finish setting up your account" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        <DropdownMenuLabel className={sectionLabel}>Curricula</DropdownMenuLabel>
        {NAV_ITEMS.map((n) => (
          <DropdownMenuItem key={n.to} asChild className="cursor-pointer">
            <Link to={n.to}><BookOpen className="size-4" /> {n.label}</Link>
          </DropdownMenuItem>
        ))}
        <Authenticated><SignedInItems /></Authenticated>
        <Unauthenticated><SignedOutItems /></Unauthenticated>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-2 px-4 sm:px-6">
        <BrandMark />
        <div className="ml-auto flex items-center">
          <AuthLoading><Skeleton className="h-8 w-24" /></AuthLoading>
          <Authenticated><SiteMenu /></Authenticated>
          <Unauthenticated><SiteMenu /></Unauthenticated>
        </div>
      </div>
    </header>
  );
}
