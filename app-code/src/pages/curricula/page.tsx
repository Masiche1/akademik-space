import { Link, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import CourseCard from "@/components/course-card.tsx";
import { countQuestions } from "@/content/catalog.ts";
import { getCurriculum, type CourseGroup } from "@/content/curricula.ts";
import { clampDescription, usePageMeta } from "@/lib/seo.ts";
import NotFound from "../NotFound.tsx";

export default function CurriculumPage() {
  const { slug = "" } = useParams();
  const curriculum = getCurriculum(slug);
  usePageMeta({
    title: curriculum?.title ?? "Curriculum not found",
    description: curriculum ? clampDescription(`${curriculum.summary} ${curriculum.description}`) : undefined,
    path: `/curricula/${slug}`,
  });
  if (!curriculum) return <NotFound />;

  const groups = curriculum.groups.filter((g) => g.courses.length > 0);
  const courses = groups.flatMap((g) => g.courses);
  // Group consecutive groups that share a programme section (e.g. MYP vs DP on the IB page).
  const sections = groups.reduce<{ name?: string; groups: CourseGroup[] }[]>((acc, g) => {
    const last = acc[acc.length - 1];
    if (g.section !== undefined && last?.name !== g.section) acc.push({ name: g.section, groups: [g] });
    else if (last) last.groups.push(g);
    else acc.push({ groups: [g] });
    return acc;
  }, []);
  const stats = [
    { label: "Courses", value: courses.length },
    { label: "Units", value: courses.reduce((n, c) => n + c.units.length, 0) },
    { label: "Questions", value: courses.reduce((n, c) => n + countQuestions(c), 0) },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <nav className="flex items-center gap-1 text-xs text-muted-foreground" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-foreground cursor-pointer">Home</Link>
        <ChevronRight className="size-3" />
        <span className="text-foreground">{curriculum.navLabel}</span>
      </nav>
      <p className="pt-6 font-mono text-xs text-chart-1">{curriculum.eyebrow}</p>
      <h1 className="text-balance pt-2 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">{curriculum.title}</h1>
      <p className="max-w-2xl pt-3 text-muted-foreground">{curriculum.description}</p>
      <dl className="flex flex-wrap gap-8 pt-6">
        {stats.map((s) => (
          <div key={s.label}>
            <dt className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</dt>
            <dd className="font-serif text-3xl font-semibold">{s.value.toLocaleString()}</dd>
          </div>
        ))}
      </dl>

      <div className="space-y-16 pt-12">
        {sections.map((sec, i) => (
          <div key={sec.name ?? i} className="space-y-12">
            {sec.name && (
              <h2 className="font-serif text-3xl font-semibold tracking-tight">{sec.name}</h2>
            )}
            {sec.groups.map((g) => {
              const GroupHeading = sec.name ? "h3" : "h2";
              return (
                <section key={g.heading}>
                  <GroupHeading className="font-serif text-2xl font-semibold">{g.heading}</GroupHeading>
                  <div className="grid grid-cols-[minmax(0,1fr)] gap-4 pt-5 sm:grid-cols-2 lg:grid-cols-4">
                    {g.courses.map((c) => <CourseCard key={c.id} course={c} title={g.label(c)} />)}
                  </div>
                </section>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
