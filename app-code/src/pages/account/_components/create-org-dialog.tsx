import { useState } from "react";
import { useMutation } from "convex/react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api.js";
import { Button } from "@/components/ui/button.tsx";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog.tsx";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Spinner } from "@/components/ui/spinner.tsx";
import { errorMessage } from "@/lib/errors.ts";
import { ORG_KIND_META, type OrgKind } from "@/lib/orgs.ts";
import { cn } from "@/lib/utils.ts";

const KINDS: OrgKind[] = ["tutor", "school", "district"];

const schema = z.object({
  name: z.string().trim().min(2, "At least 2 characters").max(80, "80 characters or fewer"),
  kind: z.enum(["tutor", "school", "district"]),
});
type Values = z.infer<typeof schema>;

export default function CreateOrgDialog() {
  const create = useMutation(api.account.createOrganization);
  const [open, setOpen] = useState(false);
  const form = useForm<Values>({ resolver: zodResolver(schema), defaultValues: { name: "", kind: "tutor" } });
  const kind = useWatch({ control: form.control, name: "kind" });

  const onSubmit = async (values: Values) => {
    try {
      await create(values);
      toast.success(`${values.name.trim()} is ready`, { description: "Share its join code with your students." });
      form.reset();
      setOpen(false);
    } catch (e) {
      toast.error(errorMessage(e, "Could not create the organisation"));
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button><Plus className="size-4" /> New organisation</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-serif">Create an organisation</DialogTitle>
          <DialogDescription>You will get a code to share. Schools and districts also get a separate staff code for teachers.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid gap-2 sm:grid-cols-3" role="radiogroup" aria-label="Organisation type">
              {KINDS.map((k) => {
                const meta = ORG_KIND_META[k];
                return (
                  <button key={k} type="button" role="radio" aria-checked={kind === k} onClick={() => form.setValue("kind", k)}
                    className={cn("rounded-xl border p-3 text-left transition-colors hover:border-chart-1/60", kind === k && "border-chart-1 bg-accent/40")}>
                    <meta.icon className="size-4 text-chart-1" />
                    <span className="block pt-2 text-sm font-semibold">{meta.label}</span>
                    <span className="block text-xs text-muted-foreground">{meta.blurb}</span>
                  </button>
                );
              })}
            </div>
            <FormField control={form.control} name="name" render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl><Input placeholder={kind === "tutor" ? "Jane Smith Tutoring" : kind === "school" ? "Northside High School" : "Riverside Unified District"} {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <DialogFooter>
              <Button type="submit" disabled={form.formState.isSubmitting}>{form.formState.isSubmitting && <Spinner />} Create</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
