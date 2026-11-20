import { Lightbulb } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet.tsx";
import { ScrollArea } from "@/components/ui/scroll-area.tsx";
import MathText from "@/components/math-text.tsx";
import type { Concept, Lesson } from "@/content/types.ts";

type Props = {
  open: boolean; onOpenChange: (open: boolean) => void; concept: Concept; lesson: Lesson;
  /** Heading for the key formulas box ("Key terms and techniques" in English). */
  keyHeading?: string;
};

export default function ConceptLessonSheet({ open, onOpenChange, concept, lesson, keyHeading = "Key formulas" }: Props) {
  const { sections, keyFormulas, workedExample } = concept.lesson;
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full gap-0 sm:max-w-xl">
        <SheetHeader className="border-b">
          <p className="font-mono text-xs text-chart-1">Lesson {lesson.code} / {lesson.title}</p>
          <SheetTitle className="font-serif text-2xl">{concept.title}</SheetTitle>
          <SheetDescription asChild><div><MathText text={concept.skill} /></div></SheetDescription>
        </SheetHeader>
        <ScrollArea className="min-h-0 flex-1">
          <div className="space-y-6 p-4">
            {sections.map((s) => (
              <section key={s.heading} className="space-y-2">
                <h3 className="font-serif text-lg font-semibold">{s.heading}</h3>
                <MathText className="text-sm" text={s.body} />
              </section>
            ))}
            {keyFormulas && keyFormulas.length > 0 && (
              <section className="space-y-2 rounded-xl border bg-muted/50 p-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{keyHeading}</h3>
                {keyFormulas.map((f) => (
                  <div key={f.name} className="text-sm">
                    <p className="font-medium">{f.name}</p>
                    <MathText className="text-muted-foreground" text={f.statement} />
                  </div>
                ))}
              </section>
            )}
            {workedExample && (
              <section className="space-y-3 rounded-xl border-2 border-chart-1/30 p-4">
                <h3 className="flex items-center gap-2 text-sm font-semibold"><Lightbulb className="size-4 text-chart-1" /> Worked example</h3>
                <MathText className="text-sm font-medium" text={workedExample.problem} />
                <div className="border-t pt-3"><MathText className="text-sm" text={workedExample.solution} /></div>
              </section>
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
