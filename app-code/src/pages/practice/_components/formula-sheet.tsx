import MathText from "@/components/math-text.tsx";
import { ScrollArea } from "@/components/ui/scroll-area.tsx";

/** Reference sheet modelled on the formulas typically provided on US high school math assessments. */
const SHEETS: { course: string; items: { name: string; tex: string }[] }[] = [
  {
    course: "Algebra",
    items: [
      { name: "Slope", tex: "m = \\dfrac{y_2 - y_1}{x_2 - x_1}" },
      { name: "Slope-intercept form", tex: "y = mx + b" },
      { name: "Point-slope form", tex: "y - y_1 = m(x - x_1)" },
      { name: "Quadratic formula", tex: "x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}" },
      { name: "Vertex", tex: "x = -\\dfrac{b}{2a}" },
      { name: "Arithmetic sequence", tex: "a_n = a_1 + (n - 1)d" },
      { name: "Geometric sequence", tex: "a_n = a_1 r^{\\,n-1}" },
      { name: "Exponential model", tex: "y = a(1 + r)^t" },
    ],
  },
  {
    course: "Geometry",
    items: [
      { name: "Pythagorean Theorem", tex: "a^2 + b^2 = c^2" },
      { name: "Distance", tex: "d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}" },
      { name: "Midpoint", tex: "M = \\left(\\tfrac{x_1 + x_2}{2}, \\tfrac{y_1 + y_2}{2}\\right)" },
      { name: "Circle", tex: "(x - h)^2 + (y - k)^2 = r^2" },
      { name: "Arc length", tex: "s = \\dfrac{\\theta}{360^\\circ} \\cdot 2\\pi r = r\\theta_{\\text{rad}}" },
      { name: "Sector area", tex: "A = \\dfrac{\\theta}{360^\\circ} \\cdot \\pi r^2" },
      { name: "SOH CAH TOA", tex: "\\sin\\theta = \\tfrac{\\text{opp}}{\\text{hyp}},\\ \\cos\\theta = \\tfrac{\\text{adj}}{\\text{hyp}},\\ \\tan\\theta = \\tfrac{\\text{opp}}{\\text{adj}}" },
      { name: "Cylinder / cone", tex: "V = \\pi r^2 h, \\quad V = \\tfrac13 \\pi r^2 h" },
      { name: "Sphere", tex: "V = \\tfrac43 \\pi r^3, \\quad S = 4\\pi r^2" },
      { name: "Pyramid", tex: "V = \\tfrac13 Bh" },
    ],
  },
  {
    course: "Algebra 2 and Precalculus",
    items: [
      { name: "Compound interest", tex: "A = P\\left(1 + \\tfrac{r}{n}\\right)^{nt}" },
      { name: "Continuous growth", tex: "A = Pe^{rt}" },
      { name: "Logarithm laws", tex: "\\log_b(xy) = \\log_b x + \\log_b y, \\ \\log_b x^k = k\\log_b x" },
      { name: "Change of base", tex: "\\log_b x = \\dfrac{\\ln x}{\\ln b}" },
      { name: "Finite geometric series", tex: "S_n = \\dfrac{a_1(1 - r^n)}{1 - r}" },
      { name: "Infinite geometric series", tex: "S = \\dfrac{a_1}{1 - r}, \\ |r| < 1" },
      { name: "Pythagorean identity", tex: "\\sin^2\\theta + \\cos^2\\theta = 1" },
      { name: "Law of sines", tex: "\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B} = \\dfrac{c}{\\sin C}" },
      { name: "Law of cosines", tex: "c^2 = a^2 + b^2 - 2ab\\cos C" },
      { name: "z-score", tex: "z = \\dfrac{x - \\mu}{\\sigma}" },
    ],
  },
];

export default function FormulaSheet() {
  return (
    <div className="w-[min(340px,calc(100vw-2rem))]">
      <p className="pb-2 text-sm font-semibold">Formula reference sheet</p>
      <ScrollArea className="h-[380px] pr-3">
        <div className="space-y-4">
          {SHEETS.map((s) => (
            <section key={s.course} className="space-y-1.5">
              <h4 className="text-[11px] font-semibold uppercase tracking-wider text-chart-1">{s.course}</h4>
              {s.items.map((f) => (
                <div key={f.name} className="rounded-md border bg-background px-2.5 py-1.5">
                  <p className="text-[11px] text-muted-foreground">{f.name}</p>
                  <MathText className="text-sm" text={`$${f.tex}$`} />
                </div>
              ))}
            </section>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
