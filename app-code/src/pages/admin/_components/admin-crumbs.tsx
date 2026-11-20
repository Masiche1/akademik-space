import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Fragment } from "react";

/** Breadcrumb trail starting at the admin portal. */
export default function AdminCrumbs({ items }: { items: { label: string; to?: string }[] }) {
  const all = [{ label: "Admin portal", to: "/admin" }, ...items];
  return (
    <nav className="flex min-w-0 flex-wrap items-center gap-1 pb-6 text-xs text-muted-foreground" aria-label="Breadcrumb">
      {all.map((item, i) => (
        <Fragment key={`${item.label}-${i}`}>
          {i > 0 && <ChevronRight className="size-3 shrink-0" />}
          {item.to ? <Link to={item.to} className="truncate hover:text-foreground cursor-pointer">{item.label}</Link> : <span className="truncate text-foreground">{item.label}</span>}
        </Fragment>
      ))}
    </nav>
  );
}
