import { useState } from "react";
import { useMutation } from "convex/react";
import { BookOpen, Presentation } from "lucide-react";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api.js";
import { Spinner } from "@/components/ui/spinner.tsx";
import { errorMessage } from "@/lib/errors.ts";
import { cn } from "@/lib/utils.ts";
import type { Account } from "@/hooks/use-account.ts";

type AccountType = NonNullable<Account["accountType"]>;

const OPTIONS: { value: AccountType; icon: typeof BookOpen; title: string; body: string }[] = [
  { value: "learner", icon: BookOpen, title: "I am a learner", body: "Practise on your own, or join your tutor, school or district with a code." },
  { value: "educator", icon: Presentation, title: "I am an educator", body: "Tutors, teachers and school or district administrators. Set up an organisation or join one as staff." },
];

/** Account type cards. Used as first-run onboarding and as a switch later. */
export default function AccountTypePicker({ current }: { current: Account["accountType"] }) {
  const setType = useMutation(api.account.setAccountType);
  const [pending, setPending] = useState<AccountType | null>(null);

  const choose = async (value: AccountType) => {
    if (value === current) return;
    setPending(value);
    try {
      await setType({ accountType: value });
      toast.success(value === "educator" ? "Educator account ready" : "Learner account ready");
    } catch (e) {
      toast.error(errorMessage(e, "Could not update your account type"));
    } finally {
      setPending(null);
    }
  };

  return (
    <div className="grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-2">
      {OPTIONS.map((o) => {
        const active = current === o.value;
        return (
          <button key={o.value} type="button" onClick={() => choose(o.value)} disabled={pending !== null} aria-pressed={active}
            className={cn("flex min-w-0 items-start gap-4 rounded-2xl border bg-card p-5 text-left transition-all hover:border-chart-1/60 disabled:opacity-70",
              active && "border-chart-1 ring-2 ring-chart-1/30")}>
            <span className={cn("flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary", active && "bg-chart-1 text-primary-foreground")}>
              {pending === o.value ? <Spinner /> : <o.icon className="size-5" />}
            </span>
            <span className="min-w-0">
              <span className="block font-semibold">{o.title}</span>
              <span className="block pt-1 text-sm text-muted-foreground">{o.body}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
