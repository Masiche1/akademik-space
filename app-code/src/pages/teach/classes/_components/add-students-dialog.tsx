import { useState } from "react";
import { useMutation, usePaginatedQuery } from "convex/react";
import { UserPlus } from "lucide-react";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api.js";
import type { Id } from "@/convex/_generated/dataModel.d.ts";
import { Button } from "@/components/ui/button.tsx";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog.tsx";
import { ScrollArea } from "@/components/ui/scroll-area.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { Spinner } from "@/components/ui/spinner.tsx";
import { errorMessage } from "@/lib/errors.ts";

const PAGE = 50;
const MAX_PICK = 50;

function StudentChooser({ orgId, classId, already, onDone }: {
  orgId: Id<"organizations">; classId: Id<"classes">; already: Set<string>; onDone: () => void;
}) {
  const { results, status, loadMore } = usePaginatedQuery(api.teach.students, { orgId }, { initialNumItems: PAGE });
  const addStudents = useMutation(api.teach.addStudents);
  const [picked, setPicked] = useState<Set<Id<"users">>>(new Set());
  const [saving, setSaving] = useState(false);
  const available = results.filter((s) => !already.has(s.userId));

  const toggle = (id: Id<"users">) => setPicked((prev) => {
    const next = new Set(prev);
    if (next.has(id)) next.delete(id);
    else if (next.size < MAX_PICK) next.add(id);
    return next;
  });

  const save = async () => {
    setSaving(true);
    try {
      const { added } = await addStudents({ classId, userIds: [...picked] });
      toast.success(`Added ${added} ${added === 1 ? "student" : "students"}`);
      onDone();
    } catch (e) {
      toast.error(errorMessage(e, "Could not add students"));
    } finally {
      setSaving(false);
    }
  };

  if (status === "LoadingFirstPage") return <div className="space-y-2">{Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-11" />)}</div>;
  return (
    <>
      {available.length === 0 && status === "Exhausted" ? (
        <p className="rounded-xl bg-muted/60 p-4 text-sm text-muted-foreground">
          Every enrolled student is already in this class. New learners appear here once they join with the student code.
        </p>
      ) : (
        <ScrollArea className="max-h-[50vh] pr-3">
          <ul className="space-y-1">
            {available.map((s) => (
              <li key={s.userId}>
                <label className="flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-muted/60 cursor-pointer">
                  <Checkbox checked={picked.has(s.userId)} onCheckedChange={() => toggle(s.userId)} />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium">{s.name}</span>
                    {s.email && <span className="block truncate text-xs text-muted-foreground">{s.email}</span>}
                  </span>
                </label>
              </li>
            ))}
          </ul>
          {status === "CanLoadMore" && <Button variant="ghost" size="sm" className="mt-2" onClick={() => loadMore(PAGE)}>Load more students</Button>}
        </ScrollArea>
      )}
      <DialogFooter>
        <Button onClick={() => void save()} disabled={picked.size === 0 || saving}>
          {saving && <Spinner />} Add {picked.size > 0 ? picked.size : ""} {picked.size === 1 ? "student" : "students"}
        </Button>
      </DialogFooter>
    </>
  );
}

/** Pick enrolled students to put in a class. */
export default function AddStudentsDialog({ orgId, classId, roster }: { orgId: Id<"organizations">; classId: Id<"classes">; roster: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm"><UserPlus className="size-4" /> Add students</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-serif">Add students</DialogTitle>
          <DialogDescription>Choose from students enrolled in your organisation. Up to {MAX_PICK} at a time.</DialogDescription>
        </DialogHeader>
        {open && <StudentChooser orgId={orgId} classId={classId} already={new Set(roster)} onDone={() => setOpen(false)} />}
      </DialogContent>
    </Dialog>
  );
}
