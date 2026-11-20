import { CircleCheck, CircleDashed, CircleDot, CircleGauge } from "lucide-react";
import { MASTERY_LABEL, MASTERY_STYLE, type Mastery, type MasteryLevel } from "@/lib/mastery.ts";
import { cn } from "@/lib/utils.ts";

const ICON: Record<MasteryLevel, typeof CircleDashed> = {
  "not-started": CircleDashed,
  learning: CircleDot,
  developing: CircleGauge,
  secure: CircleCheck,
};

/** Compact mastery readout: icon, level and a thin bar of best marks earned. */
export default function MasteryMeter({ mastery, className }: { mastery: Mastery; className?: string }) {
  const Icon = ICON[mastery.level];
  const style = MASTERY_STYLE[mastery.level];
  return (
    <div className={cn("w-28 shrink-0 space-y-1", className)} title={`${mastery.attempted} of ${mastery.total} questions attempted`}>
      <p className={cn("flex items-center gap-1 text-xs font-medium", style.text)}>
        <Icon className="size-3.5" /> {MASTERY_LABEL[mastery.level]}
        {mastery.attempted > 0 && <span className="ml-auto font-mono text-muted-foreground">{mastery.percent}%</span>}
      </p>
      <div className="h-1 overflow-hidden rounded-full bg-muted">
        <div className={cn("h-full rounded-full transition-all", style.bar)} style={{ width: `${mastery.percent}%` }} />
      </div>
    </div>
  );
}
