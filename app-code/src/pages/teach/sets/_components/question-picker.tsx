import { useState } from "react";
import { Check, Plus } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select.tsx";
import { COURSES, getCourse, plainPreview } from "@/content/catalog.ts";
import { VISIBLE_CURRICULA } from "@/content/curricula.ts";
import type { Lesson } from "@/content/types.ts";
import { cn } from "@/lib/utils.ts";

type Props = {
  /** Courses set for the class, listed first. */
  classCourseIds: string[];
  selected: string[];
  onToggle: (questionId: string) => void;
  onAddMany: (questionIds: string[]) => void;
};

const lessonQuestionIds = (lesson: Lesson) => lesson.concepts.flatMap((c) => c.questions.map((q) => q.id));

/** Browse a course by unit and lesson and tick questions to add to the set. */
export default function QuestionPicker({ classCourseIds, selected, onToggle, onAddMany }: Props) {
  const [courseId, setCourseId] = useState(classCourseIds[0] ?? COURSES[0]?.id ?? "");
  const course = getCourse(courseId);
  const chosen = new Set(selected);
  const classCourses = classCourseIds.flatMap((id) => getCourse(id) ?? []);

  return (
    <div className="space-y-4">
      <Select value={courseId} onValueChange={setCourseId}>
        <SelectTrigger className="w-full sm:w-96"><SelectValue placeholder="Choose a course" /></SelectTrigger>
        <SelectContent>
          {classCourses.length > 0 && (
            <SelectGroup>
              <SelectLabel>Set for this class</SelectLabel>
              {classCourses.map((c) => <SelectItem key={`class-${c.id}`} value={c.id}>{c.title}</SelectItem>)}
            </SelectGroup>
          )}
          {VISIBLE_CURRICULA.map((cur) => (
            <SelectGroup key={cur.slug}>
              <SelectLabel>{cur.navLabel}</SelectLabel>
              {cur.groups.flatMap((g) => g.courses)
                .filter((c) => !classCourseIds.includes(c.id))
                .map((c) => <SelectItem key={c.id} value={c.id}>{c.title}</SelectItem>)}
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>

      {course && (
        <Accordion type="multiple" className="rounded-2xl border bg-card px-4">
          {course.units.map((unit) => (
            <AccordionItem key={unit.id} value={unit.id}>
              <AccordionTrigger className="cursor-pointer text-left">
                <span className="min-w-0"><span className="font-mono text-xs text-chart-1">Unit {unit.code}</span> <span className="font-semibold">{unit.title}</span></span>
              </AccordionTrigger>
              <AccordionContent className="space-y-5">
                {unit.lessons.map((lesson) => {
                  const ids = lessonQuestionIds(lesson);
                  const allIn = ids.every((id) => chosen.has(id));
                  return (
                    <div key={lesson.id} className="space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-sm font-semibold">{lesson.code} {lesson.title}</p>
                        <Button variant="ghost" size="sm" disabled={allIn} onClick={() => onAddMany(ids)}>
                          <Plus className="size-4" /> {allIn ? "All added" : "Add all"}
                        </Button>
                      </div>
                      <ul className="space-y-1.5">
                        {lesson.concepts.flatMap((concept) => concept.questions.map((q) => {
                          const on = chosen.has(q.id);
                          return (
                            <li key={q.id}>
                              <button type="button" onClick={() => onToggle(q.id)} aria-pressed={on}
                                className={cn("flex w-full items-start gap-3 rounded-lg border bg-background p-2.5 text-left transition-colors cursor-pointer",
                                  on ? "border-primary bg-primary/5" : "hover:border-primary/40")}>
                                <span className={cn("mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border",
                                  on && "border-primary bg-primary text-primary-foreground")}>
                                  {on && <Check className="size-3.5" />}
                                </span>
                                <span className="min-w-0 flex-1">
                                  <span className="block text-xs text-muted-foreground">{concept.title}</span>
                                  <span className="block text-sm">{plainPreview(q.stem)}</span>
                                </span>
                                <span className="flex shrink-0 flex-col items-end gap-1">
                                  <span className="font-mono text-xs">[{q.totalMarks}]</span>
                                  {q.response.type === "open" && <Badge variant="secondary" className="text-[10px]">Written</Badge>}
                                </span>
                              </button>
                            </li>
                          );
                        }))}
                      </ul>
                    </div>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
}
