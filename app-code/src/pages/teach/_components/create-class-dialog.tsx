import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api.js";
import type { Id } from "@/convex/_generated/dataModel.d.ts";
import { Button } from "@/components/ui/button.tsx";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog.tsx";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.tsx";
import { Spinner } from "@/components/ui/spinner.tsx";
import { errorMessage } from "@/lib/errors.ts";
import { ROLE_LABEL } from "@/lib/orgs.ts";
import { classPath, type PortalOrg } from "../_lib/teach.ts";

const ME = "me";
const schema = z.object({
  name: z.string().trim().min(1, "Give the class a name").max(60, "60 characters or fewer"),
  teacher: z.string(),
});
type Values = z.infer<typeof schema>;

export default function CreateClassDialog({ org }: { org: PortalOrg }) {
  const create = useMutation(api.teach.createClass);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  // Only administrators choose a teacher; skip the staff list otherwise or while closed.
  const staff = useQuery(api.teach.staff, open && org.canManage ? { orgId: org.orgId } : "skip");
  const form = useForm<Values>({ resolver: zodResolver(schema), defaultValues: { name: "", teacher: ME } });

  const onSubmit = async (values: Values) => {
    try {
      const classId = await create({
        orgId: org.orgId,
        name: values.name,
        teacherId: values.teacher === ME ? undefined : (values.teacher as Id<"users">),
      });
      toast.success(`${values.name.trim()} created`, { description: "Add students and set courses next." });
      form.reset();
      setOpen(false);
      void navigate(classPath(classId));
    } catch (e) {
      toast.error(errorMessage(e, "Could not create the class"));
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button><Plus className="size-4" /> New class</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-serif">New class in {org.name}</DialogTitle>
          <DialogDescription>A class groups enrolled students so you can set courses and follow their progress.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField control={form.control} name="name" render={({ field }) => (
              <FormItem>
                <FormLabel>Class name</FormLabel>
                <FormControl><Input placeholder="Year 10 Maths, Set 2" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            {org.canManage && (
              <FormField control={form.control} name="teacher" render={({ field }) => (
                <FormItem>
                  <FormLabel>Teacher</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl><SelectTrigger className="w-full"><SelectValue /></SelectTrigger></FormControl>
                    <SelectContent>
                      <SelectItem value={ME}>Me</SelectItem>
                      {(staff ?? []).filter((s) => s.role === "teacher").map((s) => (
                        <SelectItem key={s.userId} value={s.userId}>{s.name} ({ROLE_LABEL[s.role]})</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />
            )}
            <DialogFooter>
              <Button type="submit" disabled={form.formState.isSubmitting}>{form.formState.isSubmitting && <Spinner />} Create class</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
