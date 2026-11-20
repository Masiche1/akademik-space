import { useState } from "react";
import { useConvex } from "convex/react";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api.js";
import type { Id } from "@/convex/_generated/dataModel.d.ts";
import { errorMessage } from "@/lib/errors.ts";
import { safeFilename } from "../_lib/report.ts";
import type { TermStudentData } from "../_lib/term-report.ts";

/** Fetches report data and saves a PDF. The PDF library is loaded only when a teacher first downloads. */
export function useTermPdf(reportId: Id<"termReports">) {
  const convex = useConvex();
  const [busy, setBusy] = useState<string | null>(null);

  const download = async (students: { userId: Id<"users">; name: string }[], key: string, filename: string) => {
    setBusy(key);
    try {
      const rows: TermStudentData[] = [];
      for (const s of students) {
        const data = await convex.query(api.termReports.student, { reportId, userId: s.userId });
        if (data) rows.push(data);
      }
      if (rows.length === 0) {
        toast.error("Nothing to download. The student may have left the class.");
        return;
      }
      const { buildTermPdf } = await import("../_lib/term-pdf.ts");
      buildTermPdf(rows).save(`${safeFilename(filename)}.pdf`);
    } catch (error) {
      toast.error(errorMessage(error, "Could not create the PDF"));
    } finally {
      setBusy(null);
    }
  };

  return { busy, download };
}
