import type { Lesson } from "../../../types.ts";

export const lesson28: Lesson = {
  id: "olm-u2-lesson-2-8",
  code: "2-8",
  title: "Graphical Inequalities",
  goal: "I CAN represent and solve inequalities graphically.",
  standards: ["4024: algebra"],
  vocabulary: [
    { term: "Inequality region", definition: "Area on graph satisfying an inequality." },
    { term: "Boundary line", definition: "Line representing equality in inequality." },
    { term: "Solid/dashed line", definition: "Solid=include boundary; dashed=exclude." },
    { term: "Feasible region", definition: "Region satisfying all inequalities simultaneously." },
  ],
  concepts: [
    {
      id: "olm-u2-s8-graph",
      title: "Graphing inequalities",
      skill: "Represent inequalities on graphs at O Level.",
      lesson: {
        sections: [
          { heading: "Single inequality", body: "For $y<mx+c$: draw boundary line $y=mx+c$ dashed (strict < or >) or solid (≤ or ≥). Shade the region satisfying the inequality — test a point (usually origin) to decide which side. For $y>x$: shade above; $y<x$: below; $x>h$: right of vertical; $x<h$: left." },
          { heading: "Simultaneous inequalities", body: "For multiple inequalities, shade each region — the feasible region is where ALL shadings overlap. Draw all boundary lines first, then shade carefully. The intersection points of boundary lines are critical — they're the vertices of the feasible region, often needed for optimization problems." },
        ],
        keyFormulas: [
          { name: "Boundary", statement: "Solid for ≤/≥, dashed for </>" },
          { name: "Test point", statement: "Origin usually easiest" },
        ],
        workedExample: { problem: "Shade region for $y>2x+1$ and $y<5$.", solution: "Line $y=2x+1$ dashed, shade above; line $y=5$ dashed, shade below; feasible region is between them." },
      },
      questions: [
        {
          id: "olm-u2-s8-gr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "For $y<x+2$, the boundary line should be…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Dashed" }, { id: "b", text: "Solid" }, { id: "c", text: "Dotted" }, { id: "d", text: "Thick" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "convention", name: "Strict inequality", statement: "Dashed boundary." }], steps: [{ reasoning: "< or > → dashed.", marks: 1, markCode: "A" }], finalAnswer: "Dashed" },
        },
        {
          id: "olm-u2-s8-gr-q2", difficulty: "foundation", totalMarks: 2,
          stem: "For $y\\geq3x$, is the origin in the region?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Test point", statement: "Substitute origin." }], steps: [
            { reasoning: "$0\\geq0$ → yes, origin is on boundary (included since ≥).", marks: 1, markCode: "M" },
            { reasoning: "Answer: yes.", marks: 1, markCode: "A" },
          ], finalAnswer: "Yes" },
        },
        {
          id: "olm-u2-s8-gr-q3", difficulty: "core", totalMarks: 3,
          stem: "Describe the region satisfying $x>2$ and $y<4$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Feasible region", statement: "Intersection." }], steps: [
            { reasoning: "$x>2$: right of vertical line $x=2$ (dashed).", marks: 1, markCode: "M" },
            { reasoning: "$y<4$: below horizontal line $y=4$ (dashed).", marks: 1, markCode: "M" },
            { reasoning: "Feasible region: bottom-right quadrant area.", marks: 1, markCode: "A" },
          ], finalAnswer: "Right of x=2, below y=4" },
        },
        {
          id: "olm-u2-s8-gr-q4", difficulty: "core", totalMarks: 4,
          stem: "Find the vertices of the feasible region for $x\\geq0$, $y\\geq0$, $x+y\\leq6$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Vertices", statement: "Boundary intersections." }], steps: [
            { reasoning: "Boundaries: $x=0$, $y=0$, $x+y=6$.", marks: 1, markCode: "M" },
            { reasoning: "Intersections: $(0,0)$, $(6,0)$, $(0,6)$.", marks: 1, markCode: "M" },
            { reasoning: "Feasible region is triangle with these vertices.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $(0,0),(6,0),(0,6)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(0,0),(6,0),(0,6)$" },
        },
      ],
    },
    {
      id: "olm-u2-s8-solve",
      title: "Solving inequalities graphically",
      skill: "Use graphs to solve inequalities at O Level.",
      lesson: {
        sections: [
          { heading: "From graph to inequality", body: "Given a graph with a shaded region, write the inequality by identifying boundary lines and which side is shaded. For a line $y=mx+c$: if shaded above → $y>mx+c$ or $\\geq$ depending on solid/dashed; below → $y<mx+c$ or $\\leq$. Vertical lines $x=h$: right → $x>h$; left → $x<h$." },
          { heading: "From inequality to solution", body: "For $f(x)>g(x)$: find where graph of $f$ is above graph of $g$ — the x-values at intersection points are critical. For quadratic inequalities like $x^2-4<0$: factorise, find roots $\\pm2$, determine sign in each interval — negative between roots → $-2<x<2$. Always check endpoints inclusion." },
        ],
        keyFormulas: [
          { name: "Above/below", statement: "Above line → $>$; below → $<$" },
        ],
        workedExample: { problem: "Solve $x^2-4<0$.", solution: "Roots $\\pm2$; parabola opens up; negative between roots → $-2<x<2$." },
      },
      questions: [
        {
          id: "olm-u2-s8-so-q1", difficulty: "foundation", totalMarks: 1,
          stem: "For $y>x^2$, the region is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Above the parabola" }, { id: "b", text: "Below the parabola" }, { id: "c", text: "Inside the parabola" }, { id: "d", text: "Outside only" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Inequality region", statement: "Above for >." }], steps: [{ reasoning: "$y>f(x)$ → above curve.", marks: 1, markCode: "A" }], finalAnswer: "Above parabola" },
        },
        {
          id: "olm-u2-s8-so-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $x>3$ and $x<7$ simultaneously.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Compound inequality", statement: "Intersection." }], steps: [
            { reasoning: "$3<x<7$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$3<x<7$" },
        },
        {
          id: "olm-u2-s8-so-q3", difficulty: "core", totalMarks: 3,
          stem: "Solve $x^2-9>0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic inequality", statement: "Outside roots." }], steps: [
            { reasoning: "Roots $\\pm3$; parabola opens up; positive outside roots.", marks: 1, markCode: "M" },
            { reasoning: "Solution: $x<-3$ or $x>3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x<-3$ or $x>3$" },
        },
        {
          id: "olm-u2-s8-so-q4", difficulty: "core", totalMarks: 4,
          stem: "Solve $2x-3\\leq5$ and $x+1>0$ simultaneously, giving integer solutions.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Compound", statement: "Solve each then intersect." }], steps: [
            { reasoning: "$2x\\leq8$ → $x\\leq4$; $x>-1$.", marks: 1, markCode: "M" },
            { reasoning: "Intersection: $-1<x\\leq4$.", marks: 1, markCode: "M" },
            { reasoning: "Integers: $0,1,2,3,4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=0,1,2,3,4$" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u2-s8-ineq-notes", title: "Graphical inequalities — notes", summary: "Regions and solutions.",
      sections: [
        { heading: "Graphing", body: "Solid=≤/≥, dashed=</>; test origin; feasible region = overlap." },
        { heading: "Solving", body: "Quadratic: find roots, determine sign regions; compound: intersect solutions." },
      ] },
  ],
};
