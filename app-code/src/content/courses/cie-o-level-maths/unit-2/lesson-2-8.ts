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
            { id: "a", text: "Thick" },
            { id: "b", text: "Dotted" },
            { id: "c", text: "Solid" },
            { id: "d", text: "Dashed" },
          ], correctChoiceId: "d" },
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
        {
          id: "olm-u2-s8-gr-q5", difficulty: "foundation", totalMarks: 1,
          stem: "For $y\\geq x$, the boundary line should be…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Dashed" },
            { id: "b", text: "Solid" },
            { id: "c", text: "Not drawn" },
            { id: "d", text: "Dotted" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "convention", name: "Inclusive inequality", statement: "Solid boundary." }], steps: [{ reasoning: "$\\geq$ or $\\leq$ → solid.", marks: 1, markCode: "A" }], finalAnswer: "Solid" },
        },
        {
          id: "olm-u2-s8-gr-q6", difficulty: "foundation", totalMarks: 2,
          stem: "For the region $y>x+1$, is the origin included?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Test point", statement: "Substitute $(0,0)$." }], steps: [
            { reasoning: "$0>0+1$? $0>1$ is false → origin not in region.", marks: 1, markCode: "M" },
            { reasoning: "Answer: no.", marks: 1, markCode: "A" },
          ], finalAnswer: "No" },
        },
        {
          id: "olm-u2-s8-gr-q7", difficulty: "foundation", totalMarks: 1,
          stem: "For $x<3$, the region is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Below $y=3$" },
            { id: "b", text: "Left of the vertical line $x=3$" },
            { id: "c", text: "Above $y=3$" },
            { id: "d", text: "Right of the vertical line $x=3$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Vertical inequality", statement: "$x<h$ → left." }], steps: [{ reasoning: "$x<3$ → left of $x=3$.", marks: 1, markCode: "A" }], finalAnswer: "Left of $x=3$" },
        },
        {
          id: "olm-u2-s8-gr-q8", difficulty: "foundation", totalMarks: 2,
          stem: "Find the y-intercept of the boundary line $y=3x-4$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Intercept", statement: "Set $x=0$." }], steps: [
            { reasoning: "At $x=0$: $y=-4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-4$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-4$" },
        },
        {
          id: "olm-u2-s8-gr-q9", difficulty: "core", totalMarks: 1,
          stem: "The feasible region for $x>0$ and $y>0$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The whole plane" },
            { id: "b", text: "The first quadrant, excluding the axes" },
            { id: "c", text: "The third quadrant" },
            { id: "d", text: "The second quadrant" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Feasible region", statement: "Intersection of half-planes." }], steps: [{ reasoning: "$x>0,y>0$ → first quadrant minus axes.", marks: 1, markCode: "A" }], finalAnswer: "First quadrant" },
        },
        {
          id: "olm-u2-s8-gr-q10", difficulty: "core", totalMarks: 2,
          stem: "For the region $1<x<5$, how many integers satisfy the inequality?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Compound inequality", statement: "List integers." }], steps: [
            { reasoning: "Integers: $2,3,4$ — three values.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olm-u2-s8-gr-q11", difficulty: "core", totalMarks: 2,
          stem: "The feasible region defined by $x\\geq0$, $y\\geq0$, $x+y\\leq6$ has how many vertices?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Vertices", statement: "Count boundary intersections." }], steps: [
            { reasoning: "Vertices: $(0,0),(6,0),(0,6)$ — three vertices.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olm-u2-s8-gr-q12", difficulty: "core", totalMarks: 1,
          stem: "For the inequality $2x+y\\leq6$, testing the origin gives $0\\leq6$, which is true. This means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The inequality has no solution" },
            { id: "b", text: "The origin is in the shaded region" },
            { id: "c", text: "The origin is outside the region" },
            { id: "d", text: "The origin is on the boundary only" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Test point", statement: "True → point included." }], steps: [{ reasoning: "Origin satisfies → in region.", marks: 1, markCode: "A" }], finalAnswer: "Origin included" },
        },
        {
          id: "olm-u2-s8-gr-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Find the vertices of the feasible region defined by $x\\geq0$, $y\\geq0$, $x+y\\leq8$ and $x\\leq5$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Vertices", statement: "Boundary intersections." }], steps: [
            { reasoning: "Boundaries: $x=0$, $y=0$, $x+y=8$, $x=5$.", marks: 1, markCode: "M" },
            { reasoning: "Pairwise intersections that satisfy all inequalities.", marks: 1, markCode: "M" },
            { reasoning: "Vertices: $(0,0)$, $(5,0)$, $(5,3)$, $(0,8)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(0,0),(5,0),(5,3),(0,8)$" },
        },
        {
          id: "olm-u2-s8-gr-q14", difficulty: "challenge", totalMarks: 2,
          stem: "In the region $x\\geq1$, $y\\geq2$, $x+y\\leq9$, find the maximum possible value of $y$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 8 }] },
          markscheme: { principles: [{ kind: "technique", name: "Optimisation", statement: "Corner point." }], steps: [
            { reasoning: "Max $y$ at smallest $x$: $x=1$ → $y\\leq8$ → max $y=8$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 8.", marks: 1, markCode: "A" },
          ], finalAnswer: "8" },
        },
        {
          id: "olm-u2-s8-gr-q15", difficulty: "challenge", totalMarks: 1,
          stem: "For $y\\geq-x+2$, the boundary line has gradient…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-1$" },
            { id: "b", text: "1" },
            { id: "c", text: "2" },
            { id: "d", text: "$-2$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Gradient", statement: "Coefficient of $x$." }], steps: [{ reasoning: "$m=-1$.", marks: 1, markCode: "A" }], finalAnswer: "$-1$" },
        },
        {
          id: "olm-u2-s8-gr-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Find the vertices of the feasible region defined by $x\\geq0$, $y\\geq0$, $2x+y\\leq8$ and $x+y\\leq6$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Vertices", statement: "Boundary intersections." }], steps: [
            { reasoning: "Boundaries: $x=0$, $y=0$, $2x+y=8$, $x+y=6$.", marks: 1, markCode: "M" },
            { reasoning: "$2x+y=8$ meets $x+y=6$ at $(2,4)$; meets $y=0$ at $(4,0)$.", marks: 1, markCode: "M" },
            { reasoning: "$x+y=6$ meets $x=0$ at $(0,6)$; axes meet at $(0,0)$. Check $(0,8)$ and $(6,0)$ are excluded.", marks: 1, markCode: "M" },
            { reasoning: "Vertices: $(0,0),(4,0),(2,4),(0,6)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(0,0),(4,0),(2,4),(0,6)$" },
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
            { id: "a", text: "Inside the parabola" },
            { id: "b", text: "Below the parabola" },
            { id: "c", text: "Outside only" },
            { id: "d", text: "Above the parabola" },
          ], correctChoiceId: "d" },
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
        {
          id: "olm-u2-s8-so-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The solutions of $x^2-25=0$ are the x-coordinates where $y=x^2-25$ meets…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The y-axis" },
            { id: "b", text: "$y=25$" },
            { id: "c", text: "$y=x$" },
            { id: "d", text: "The x-axis" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Roots", statement: "$y=0$ intercepts." }], steps: [{ reasoning: "Setting expression = 0 means $y=0$, the x-axis.", marks: 1, markCode: "A" }], finalAnswer: "The x-axis" },
        },
        {
          id: "olm-u2-s8-so-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $x-5>0$. Write down the smallest integer solution.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: { principles: [{ kind: "technique", name: "Linear inequality", statement: "Solve then read off." }], steps: [
            { reasoning: "$x>5$ → smallest integer is 6.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 6.", marks: 1, markCode: "A" },
          ], finalAnswer: "6" },
        },
        {
          id: "olm-u2-s8-so-q7", difficulty: "foundation", totalMarks: 1,
          stem: "The solution of $3x+2\\leq11$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x\\geq3$" },
            { id: "b", text: "$x\\geq-3$" },
            { id: "c", text: "$x\\leq9$" },
            { id: "d", text: "$x\\leq3$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Linear inequality", statement: "Inverse ops." }], steps: [{ reasoning: "$3x\\leq9$ → $x\\leq3$.", marks: 1, markCode: "A" }], finalAnswer: "$x\\leq3$" },
        },
        {
          id: "olm-u2-s8-so-q8", difficulty: "foundation", totalMarks: 1,
          stem: "For $y<x^2$, the region is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "To the left only" },
            { id: "b", text: "Above the parabola" },
            { id: "c", text: "Below the parabola" },
            { id: "d", text: "Inside the parabola" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Inequality region", statement: "Below for $<$." }], steps: [{ reasoning: "$y<f(x)$ → below curve.", marks: 1, markCode: "A" }], finalAnswer: "Below parabola" },
        },
        {
          id: "olm-u2-s8-so-q9", difficulty: "core", totalMarks: 2,
          stem: "Solve $2x-7<5$. Give the largest integer solution.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "technique", name: "Linear inequality", statement: "Solve then read off." }], steps: [
            { reasoning: "$2x<12$ → $x<6$ → largest integer 5.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
        },
        {
          id: "olm-u2-s8-so-q10", difficulty: "core", totalMarks: 3,
          stem: "Solve $x^2-5x+6<0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic inequality", statement: "Between roots." }], steps: [
            { reasoning: "$(x-2)(x-3)=0$ → roots $2,3$.", marks: 1, markCode: "M" },
            { reasoning: "Parabola opens up; negative between roots.", marks: 1, markCode: "M" },
            { reasoning: "Solution: $2<x<3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$2<x<3$" },
        },
        {
          id: "olm-u2-s8-so-q11", difficulty: "core", totalMarks: 1,
          stem: "The equation $x^2+4=0$ has…",
          response: { type: "mcq", choices: [
            { id: "a", text: "No real solutions" },
            { id: "b", text: "Two solutions" },
            { id: "c", text: "One solution" },
            { id: "d", text: "Infinitely many solutions" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "No real roots", statement: "Always positive." }], steps: [{ reasoning: "$x^2+4\\geq4>0$ → never zero.", marks: 1, markCode: "A" }], finalAnswer: "No real solutions" },
        },
        {
          id: "olm-u2-s8-so-q12", difficulty: "core", totalMarks: 2,
          stem: "Solve $x^2-2x-3<0$ and state how many integers satisfy the inequality.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic inequality", statement: "Between roots." }], steps: [
            { reasoning: "Roots $-1,3$; negative between → $-1<x<3$ → integers $0,1,2$ (three).", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3 integers.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olm-u2-s8-so-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Solve $x^2+x-6\\geq0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic inequality", statement: "Outside roots." }], steps: [
            { reasoning: "$(x+3)(x-2)=0$ → roots $-3,2$.", marks: 1, markCode: "M" },
            { reasoning: "Parabola opens up; $\\geq0$ outside roots (inclusive).", marks: 1, markCode: "M" },
            { reasoning: "Solution: $x\\leq-3$ or $x\\geq2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x\\leq-3$ or $x\\geq2$" },
        },
        {
          id: "olm-u2-s8-so-q14", difficulty: "challenge", totalMarks: 2,
          stem: "Solve $\\frac{x}{2}+1>4$. Give the smallest integer solution.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: { principles: [{ kind: "technique", name: "Linear inequality", statement: "Solve then read off." }], steps: [
            { reasoning: "$\\frac{x}{2}>3$ → $x>6$ → smallest integer 7.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 7.", marks: 1, markCode: "A" },
          ], finalAnswer: "7" },
        },
        {
          id: "olm-u2-s8-so-q15", difficulty: "challenge", totalMarks: 1,
          stem: "The graphs of $y=x^2$ and $y=4$ intersect at $x=$",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=\\pm2$" },
            { id: "b", text: "$x=\\pm4$" },
            { id: "c", text: "$x=16$" },
            { id: "d", text: "$x=2$ only" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Intersection", statement: "$x^2=4$." }], steps: [{ reasoning: "$x^2=4$ → $x=\\pm2$.", marks: 1, markCode: "A" }], finalAnswer: "$x=\\pm2$" },
        },
        {
          id: "olm-u2-s8-so-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Use the graph of $y=x^2-4x$ to solve $x^2-4x=-3$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Graphical solution", statement: "Intersections with $y=-3$." }], steps: [
            { reasoning: "Rewrite: $x^2-4x+3=0$ → $(x-1)(x-3)=0$.", marks: 1, markCode: "M" },
            { reasoning: "Curve meets $y=-3$ where $x=1$ and $x=3$.", marks: 1, markCode: "M" },
            { reasoning: "Solutions: $x=1,3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=1,3$" },
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
