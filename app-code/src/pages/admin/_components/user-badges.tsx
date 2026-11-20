import { Ban, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge.tsx";
import { ACCOUNT_TYPE_LABEL, type UserRow } from "../_lib/admin.ts";

/** Account type, admin and suspended badges for a user. */
export default function UserBadges({ user }: { user: Pick<UserRow, "accountType" | "isPlatformAdmin" | "suspended"> }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {user.suspended && <Badge variant="destructive"><Ban className="size-3" /> Suspended</Badge>}
      {user.isPlatformAdmin && <Badge><ShieldCheck className="size-3" /> Admin</Badge>}
      <Badge variant="secondary">{user.accountType ? ACCOUNT_TYPE_LABEL[user.accountType] : "Not set up"}</Badge>
    </div>
  );
}
