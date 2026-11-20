import { Link } from "react-router-dom";
import BrandMark from "@/components/brand-mark.tsx";
import { VISIBLE_CURRICULA, curriculumPath } from "@/content/curricula.ts";
import { BRAND } from "@/lib/brand.ts";

/** Parent items only; curriculum pages hold the course detail. */
const COLUMNS = [
  { title: "Curricula", links: VISIBLE_CURRICULA.map((c) => ({ to: curriculumPath(c), label: c.navLabel })) },
  {
    title: "Platform",
    links: [
      { to: "/", label: "Home" },
      { to: "/progress", label: "My progress" },
      { to: "/account", label: "My account" },
      { to: "/sign-in", label: "Sign in" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t bg-card/40">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-12 sm:px-6 md:flex-row md:justify-between">
        <div className="max-w-sm space-y-3">
          <BrandMark showSlogan />
          <p className="text-sm text-muted-foreground">
            Curriculum-aligned practice with examiner-style markschemes for US Grades 7-12, the IB Middle Years and Diploma Programmes and Pearson Edexcel.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-16 gap-y-8">
          {COLUMNS.map((col) => (
            <div key={col.title} className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{col.title}</p>
              <ul className="grid gap-2 text-sm">
                {col.links.map((l) => (
                  <li key={l.to}><Link to={l.to} className="text-muted-foreground hover:text-foreground cursor-pointer">{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-muted-foreground sm:px-6">
          {`\u00A9 ${new Date().getFullYear()} ${BRAND.name}. All rights reserved. Powered by ${BRAND.parent}.`}
        </p>
      </div>
    </footer>
  );
}
