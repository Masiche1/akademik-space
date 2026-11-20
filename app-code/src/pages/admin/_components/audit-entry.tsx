import { Link } from "react-router-dom";
import { format, formatDistanceToNow } from "date-fns";
import { Ban, Building2, Flag, KeyRound, ShieldCheck, ShieldOff, Trash2, UserCheck, UserCog, UserX, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils.ts";
import { AUDIT_ACTION_LABEL, adminUserPath, type AuditAction, type AuditRow } from "../_lib/admin.ts";

const ICON: Record<AuditAction, { icon: LucideIcon; tone: string }> = {
  admin_granted: { icon: ShieldCheck, tone: "text-chart-1" },
  admin_revoked: { icon: ShieldOff, tone: "text-chart-1" },
  account_suspended: { icon: Ban, tone: "text-destructive" },
  account_restored: { icon: UserCheck, tone: "text-chart-3" },
  member_removed: { icon: UserX, tone: "text-destructive" },
  staff_role_changed: { icon: UserCog, tone: "text-chart-2" },
  report_reviewed: { icon: Flag, tone: "text-chart-4" },
  org_created: { icon: Building2, tone: "text-chart-3" },
  join_code_reset: { icon: KeyRound, tone: "text-chart-2" },
  class_deleted: { icon: Trash2, tone: "text-destructive" },
};

/** One row of the audit log, used on the Audit log tab and each user's page. */
export default function AuditEntry({ entry }: { entry: AuditRow }) {
  const meta = ICON[entry.action];
  const at = new Date(entry.at);
  return (
    <li className="flex gap-3 px-4 py-3">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-secondary"><meta.icon className={cn("size-4", meta.tone)} /></span>
      <div className="min-w-0 flex-1">
        <p className="break-words text-sm">{entry.summary}</p>
        <p className="flex flex-wrap gap-x-2 pt-0.5 text-xs text-muted-foreground">
          <span>{AUDIT_ACTION_LABEL[entry.action]}</span>
          <span title={format(at, "d MMM yyyy, HH:mm")}>{formatDistanceToNow(at, { addSuffix: true })}</span>
          {entry.actorId ? (
            <Link to={adminUserPath(entry.actorId)} className="hover:text-foreground hover:underline cursor-pointer">by {entry.actorName}</Link>
          ) : <span>from the dashboard</span>}
        </p>
      </div>
    </li>
  );
}
