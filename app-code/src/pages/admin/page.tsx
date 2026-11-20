import { useSearchParams } from "react-router-dom";
import { BarChart3, Building2, Flag, LayoutDashboard, ScrollText, ShieldCheck, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";
import AdminGate from "./_components/admin-gate.tsx";
import OverviewTab from "./_components/overview-tab.tsx";
import AnalyticsTab from "./_components/analytics-tab.tsx";
import UsersTab from "./_components/users-tab.tsx";
import OrgsTab from "./_components/orgs-tab.tsx";
import ContentTab from "./_components/content-tab.tsx";
import AuditTab from "./_components/audit-tab.tsx";
import { isAdminTab, type AdminTab } from "./_lib/admin.ts";

const TABS: { value: AdminTab; label: string; icon: typeof Users }[] = [
  { value: "overview", label: "Overview", icon: LayoutDashboard },
  { value: "analytics", label: "Analytics", icon: BarChart3 },
  { value: "users", label: "Users and access", icon: Users },
  { value: "organisations", label: "Organisations", icon: Building2 },
  { value: "content", label: "Content review", icon: Flag },
  { value: "audit", label: "Audit log", icon: ScrollText },
];

function Portal() {
  const [params, setParams] = useSearchParams();
  const raw = params.get("tab");
  const tab: AdminTab = isAdminTab(raw) ? raw : "overview";
  return (
    <Tabs value={tab} onValueChange={(v) => setParams(isAdminTab(v) && v !== "overview" ? { tab: v } : {})}>
      <div className="-mx-4 overflow-x-auto overflow-y-hidden px-4 py-0.5 [scrollbar-width:none] sm:mx-0 sm:px-0">
        <TabsList>
          {TABS.map((t) => <TabsTrigger key={t.value} value={t.value} className="cursor-pointer"><t.icon className="size-4" /> {t.label}</TabsTrigger>)}
        </TabsList>
      </div>
      {/* Only the active tab mounts, so inactive tabs hold no subscriptions. */}
      <TabsContent value={tab} className="pt-6">
        {tab === "overview" && <OverviewTab />}
        {tab === "analytics" && <AnalyticsTab />}
        {tab === "users" && <UsersTab />}
        {tab === "organisations" && <OrgsTab />}
        {tab === "content" && <ContentTab />}
        {tab === "audit" && <AuditTab />}
      </TabsContent>
    </Tabs>
  );
}

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p className="flex items-center gap-1.5 font-mono text-xs text-chart-1"><ShieldCheck className="size-3.5" /> Admin portal</p>
      <h1 className="pt-2 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">Run the platform</h1>
      <p className="max-w-2xl pb-8 pt-3 text-muted-foreground">Manage accounts and access, look after organisations, review reported questions and follow platform usage and the audit trail.</p>
      <AdminGate><Portal /></AdminGate>
    </div>
  );
}
