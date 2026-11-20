import { useState } from "react";
import { useMutation } from "convex/react";
import { BookPlus, Check } from "lucide-react";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api.js";
import type { Id } from "@/convex/_generated/dataModel.d.ts";
import { Button } from "@/components/ui/button.tsx";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog.tsx";
import { ScrollArea } from "@/components/ui/scroll-area.tsx";
import { VISIBLE_CURRICULA } from "@/content/curricula.ts";
import { errorMessage } from "@/lib/errors.ts";
import { cn } from "@/lib/utils.ts";

/** Toggle courses on and off for a class, grouped by curriculum. Each toggle saves straight away. */
export default function CoursePicker({ classId, assigned }: { classId: Id<"classes">; assigned: string[] }) {
  const setCourse = useMutation(api.teach.setCourse);
  const [pending, setPending] = useState<string | null>(null);
  const on = new Set(assigned);

  const toggle = async (courseId: string) => {
    setPending(courseId);
    try {
      await setCourse({ classId, courseId, assigned: !on.has(courseId) });
    } catch (e) {
      toast.error(errorMessage(e, "Could not update the courses"));
    } finally {
      setPending(null);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" size="sm"><BookPlus className="size-4" /> Set courses</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-serif">Courses for this class</DialogTitle>
          <DialogDescription>Students see these on their progress page. Changes save as you tap.</DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-3">
          <div className="space-y-6">
            {VISIBLE_CURRICULA.map((cur) => (
              <section key={cur.id} className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{cur.title}</p>
                {cur.groups.filter((g) => g.courses.length > 0).map((g) => (
                  <div key={`${g.section ?? ""}:${g.heading}`} className="space-y-2">
                    <p className="text-sm font-medium">
                      {g.section ? <span className="text-muted-foreground">{g.section} · </span> : null}
                      {g.heading}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {g.courses.map((c) => {
                        const active = on.has(c.id);
                        return (
                          <button key={c.id} type="button" disabled={pending !== null} onClick={() => void toggle(c.id)} aria-pressed={active}
                            className={cn("flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors hover:border-chart-1/60 disabled:opacity-60",
                              active && "border-chart-1 bg-accent/50 text-accent-foreground")}>
                            {active && <Check className="size-3.5" />} {g.label(c)}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </section>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
