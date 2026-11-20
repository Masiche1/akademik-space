import { useTier, type TierFilter } from "@/hooks/use-tier.ts";
import { cn } from "@/lib/utils.ts";

const OPTIONS: { value: TierFilter; label: string }[] = [
  { value: "all", label: "Both tiers" },
  { value: "foundation", label: "Foundation" },
  { value: "higher", label: "Higher" },
];

/** Segmented control for choosing an International GCSE tier. */
export default function TierToggle({ className }: { className?: string }) {
  const [tier, setTier] = useTier();
  return (
    <div role="radiogroup" aria-label="Exam tier" className={cn("inline-flex rounded-lg border bg-background p-0.5", className)}>
      {OPTIONS.map((o) => (
        <button key={o.value} type="button" role="radio" aria-checked={tier === o.value} onClick={() => setTier(o.value)}
          className={cn("cursor-pointer rounded-md px-3 py-1 text-sm transition-colors",
            tier === o.value ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground")}>
          {o.label}
        </button>
      ))}
    </div>
  );
}
