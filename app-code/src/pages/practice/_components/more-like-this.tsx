import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge.tsx";
import { plainPreview, type QuestionLocation } from "@/content/catalog.ts";
import { DIFFICULTY_STYLE } from "../_lib/difficulty.ts";
import { cn } from "@/lib/utils.ts";

export default function MoreLikeThis({ items, title = "More like this" }: { items: QuestionLocation[]; title?: string }) {
  if (items.length === 0) return null;
  return (
    <section className="space-y-3">
      <h2 className="font-serif text-xl font-semibold">{title}</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <Link key={it.question.id} to={`/practice/${it.question.id}`}
            className="group flex min-w-0 flex-col gap-2 rounded-xl border bg-card p-4 transition-colors hover:border-chart-1/60 cursor-pointer">
            <div className="flex items-center justify-between gap-2">
              <span className="truncate text-xs text-muted-foreground">{it.concept.title}</span>
              <Badge variant="secondary" className={cn("shrink-0 capitalize", DIFFICULTY_STYLE[it.question.difficulty])}>{it.question.difficulty}</Badge>
            </div>
            <p className="line-clamp-3 flex-1 break-words text-sm">{plainPreview(it.question.stem)}</p>
            <span className="flex items-center gap-1 text-xs font-medium text-chart-1">
              Practice <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
