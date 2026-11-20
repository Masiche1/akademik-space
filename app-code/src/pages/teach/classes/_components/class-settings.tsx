import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "convex/react";
import { Settings2, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api.js";
import type { Id } from "@/convex/_generated/dataModel.d.ts";
import { Button } from "@/components/ui/button.tsx";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog.tsx";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { Spinner } from "@/components/ui/spinner.tsx";
import { errorMessage } from "@/lib/errors.ts";
import { ROLE_LABEL } from "@/lib/orgs.ts";
import type { ClassDetail } from "../../_lib/teach.ts";

function TeacherSelect({ detail }: { detail: ClassDetail }) {
  const staff = useQuery(api.teach.staff, { orgId: detail.orgId });
  const setTeacher = useMutation(api.teach.setTeacher);
  // Empty for non-managers: the select is hidden.
  if (!staff || staff.length === 0) return null;
  const change = async (teacherId: string) => {
    try {
      await setTeacher({ classId: detail._id, teacherId: teacherId as Id<"users"> });
      toast.success("Teacher updated");
    } catch (e) {
      toast.error(errorMessage(e, "Could not change the teacher"));
    }
  };
  return (
    <div className="space-y-2">
      <Label>Teacher</Label>
      <Select value={detail.teacherId} onValueChange={(v) => void change(v)}>
        <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
        <SelectContent>
          {staff.map((s) => <SelectItem key={s.userId} value={s.userId}>{s.name} ({ROLE_LABEL[s.role]})</SelectItem>)}
        </SelectContent>
      </Select>
    </div>
  );
}

/** Rename, hand over (administrators) or delete a class. */
export default function ClassSettings({ detail, canManage }: { detail: ClassDetail; canManage: boolean }) {
  const rename = useMutation(api.teach.renameClass);
  const remove = useMutation(api.teach.deleteClass);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(detail.name);
  const [saving, setSaving] = useState(false);

  const save = async () => {
    setSaving(true);
    try {
      await rename({ classId: detail._id, name });
      toast.success("Class renamed");
    } catch (e) {
      toast.error(errorMessage(e, "Could not rename the class"));
    } finally {
      setSaving(false);
    }
  };
  const destroy = async () => {
    try {
      await remove({ classId: detail._id });
      toast.success(`${detail.name} deleted`);
      void navigate("/teach");
    } catch (e) {
      toast.error(errorMessage(e, "Could not delete the class"));
    }
  };

  return (
    <Dialog open={open} onOpenChange={(o) => { setOpen(o); if (o) setName(detail.name); }}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm"><Settings2 className="size-4" /> Settings</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-serif">Class settings</DialogTitle>
          <DialogDescription>{detail.orgName}</DialogDescription>
        </DialogHeader>
        <form className="space-y-2" onSubmit={(e) => { e.preventDefault(); void save(); }}>
          <Label htmlFor="class-name">Class name</Label>
          <div className="flex gap-2">
            <Input id="class-name" value={name} maxLength={60} onChange={(e) => setName(e.target.value)} />
            <Button type="submit" disabled={saving || name.trim().length === 0 || name.trim() === detail.name}>{saving && <Spinner />} Save</Button>
          </div>
        </form>
        {canManage && <TeacherSelect detail={detail} />}
        <Separator />
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="ghost" className="self-start text-destructive hover:text-destructive"><Trash2 className="size-4" /> Delete class</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete {detail.name}?</AlertDialogTitle>
              <AlertDialogDescription>The roster and course list are removed. Students stay enrolled and keep all their own progress.</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => void destroy()} className="bg-destructive text-white hover:bg-destructive/90">Delete class</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </DialogContent>
    </Dialog>
  );
}
