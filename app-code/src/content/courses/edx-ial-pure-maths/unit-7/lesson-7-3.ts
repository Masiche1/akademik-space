import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "edialpm-u7-lesson-7-3",
  code: "3-3",
  title: "Vector Geometry and Modulus-Argument Loci",
  goal: "I CAN find intersections of lines and planes, compute shortest distances, and solve complex problems involving modulus and argument.",
  standards: ["WFM03 FP3", "Vector geometry"],
  vocabulary: [
    { term: "Vector equation of a line", definition: "$\\mathbf{r}=\\mathbf{a}+t\\mathbf{d}$ where $\\mathbf{a}$ is a point and $\\mathbf{d}$ the direction." },
    { term: "Vector equation of a plane", definition: "$\\mathbf{r}\\cdot\\mathbf{n}=p$ (scalar product form) or $n_1x+n_2y+n_3z=d$ (Cartesian)." },
    { term: "Shortest distance", definition: "Perpendicular distance from a point to a line/plane; line-plane distance uses $\\frac{|\\mathbf{n}\\cdot(\\mathbf{a}-\\mathbf{p})|}{|\\mathbf{n}|}$." },
    { term: "Argument condition", definition: "$\\arg(z-a)=\\theta$ gives a ray; combined with $|z-a|=r$ gives points on that ray." },
  ],
  concepts: [
    {
      id: "edialpm-u7-line-plane",
      title: "Intersections and distances",
      skill: "Find where a line meets a plane, where two lines meet, and perpendicular distances.",
      lesson: {
        sections: [
          {
            heading: "Line meets plane",
            body: "Substitute $\\mathbf{r}=\\mathbf{a}+t\\mathbf{d}$ into the plane equation $\\mathbf{r}\\cdot\\mathbf{n}=p$ and solve for $t$; the point is $\\mathbf{a}+t\\mathbf{d}$. If $\\mathbf{d}\\cdot\\mathbf{n}=0$ the line is parallel to the plane (no intersection unless it lies in it).",
          },
          {
            heading: "Two lines",
            body: "Equate $\\mathbf{a}_1+t\\mathbf{d}_1=\\mathbf{a}_2+s\\mathbf{d}_2$ componentwise to get three equations in $t,s$; solve any two and check the third. If inconsistent, lines are skew.",
          },
          {
            heading: "Shortest distance point-to-plane",
            body: "$d=\\frac{|n_1x_0+n_2y_0+n_3z_0-d|}{\\sqrt{n_1^2+n_2^2+n_3^2}}$. For point-to-line, minimise $|\\mathbf{a}+t\\mathbf{d}-\\mathbf{p}|^2$ or use the cross-product formula.",
          },
        ],
        keyFormulas: [
          { name: "Line-plane intersection", statement: "$t=\\frac{p-\\mathbf{a}\\cdot\\mathbf{n}}{\\mathbf{d}\\cdot\\mathbf{n}}$" },
          { name: "Point-plane distance", statement: "$\\frac{|\\mathbf{n}\\cdot(\\mathbf{p}-\\mathbf{a})|}{|\\mathbf{n}|}$" },
        ],
        workedExample: {
          problem: "Find where the line $\\mathbf{r}=\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}+t\\begin{pmatrix}1\\\\1\\\\1\\end{pmatrix}$ meets the plane $x+y+z=3$.",
          solution: "$(1+t)+(t)+(t)=3\\Rightarrow1+3t=3\\Rightarrow t=\\frac23$; point $(\\frac53,\\frac23,\\frac23)$.",
        },
      },
      questions: [
        {
          id: "edialpm-lp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A line meets a plane when substituting $\\mathbf{r}=\\mathbf{a}+t\\mathbf{d}$ gives:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No value of $t$" },
              { id: "b", text: "A unique value of $t$" },
              { id: "c", text: "Infinitely many $t$" },
              { id: "d", text: "$t=0$ always" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Intersection", statement: "Linear equation in $t$ gives unique solution unless parallel." }],
            steps: [{ reasoning: "Plane equation linear in $t$.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** unique $t$",
          },
        },
        {
          id: "edialpm-lp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the distance from the point $(1,2,3)$ to the plane $2x-y+2z=5$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Distance", statement: "$\\frac{|ax_0+by_0+cz_0-d|}{\\sqrt{a^2+b^2+c^2}}$." }],
            steps: [
              { reasoning: "Numerator: $|2(1)-2+2(3)-5|=|2-2+6-5|=1$.", working: "1", marks: 1, markCode: "M" },
              { reasoning: "Denominator: $\\sqrt{4+1+4}=3$.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Distance $=\\frac13$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac13$",
            commonErrors: ["Forgetting absolute value or square root."],
          },
        },
        {
          id: "edialpm-lp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the point of intersection of the line $\\mathbf{r}=\\begin{pmatrix}2\\\\1\\\\0\\end{pmatrix}+t\\begin{pmatrix}1\\\\-1\\\\2\\end{pmatrix}$ and the plane $x+2y-z=1$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Line-plane", statement: "Substitute parametric form." }],
            steps: [
              { reasoning: "Point on line: $(2+t,1-t,2t)$.", working: "point", marks: 1, markCode: "M" },
              { reasoning: "Substitute: $(2+t)+2(1-t)-(2t)=1\\Rightarrow2+t+2-2t-2t=1\\Rightarrow4-3t=1\\Rightarrow t=1$.", working: "t=1", marks: 1, markCode: "M" },
              { reasoning: "Point: $(3,0,2)$.", working: "(3,0,2)", marks: 1, markCode: "M" },
              { reasoning: "State intersection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(3,0,2)$",
            commonErrors: ["Substitution errors."],
          },
        },
        {
          id: "edialpm-lp-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Line $L_1$: $\\mathbf{r}=\\begin{pmatrix}1\\\\0\\\\1\\end{pmatrix}+t\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}$; plane $\\Pi$: $x-y+z=2$.",
          parts: [
            { label: "a", prompt: "Find where $L_1$ meets $\\Pi$.", marks: 3 },
            { label: "b", prompt: "Find the angle between $L_1$ and $\\Pi$.", marks: 4 },
            { label: "c", prompt: "Find the distance from $(0,0,0)$ to $\\Pi$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Line-plane angle", statement: "$\\sin\\theta=\\frac{|\\mathbf{d}\\cdot\\mathbf{n}|}{|\\mathbf{d}||\\mathbf{n}|}$." },
            ],
            steps: [
              { part: "a", reasoning: "Point $(1+t,t,1)$; substitute: $(1+t)-t+1=2\\Rightarrow2=2$ — identically true! Line lies in plane? Check: $x-y+z=(1+t)-t+1=2$ for all $t$, so $L_1$ lies entirely in $\\Pi$.", working: "in plane", marks: 1, markCode: "M" },
              { part: "a", reasoning: "No unique intersection — line contained in plane.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "State result.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Since line lies in plane, angle $=0$.", working: "0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Alternatively $\\mathbf{d}\\cdot\\mathbf{n}=1-1+0=0$ confirms parallel/in-plane.", working: "d.n=0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State angle $0$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Conclude.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$d=\\frac{|0-0+0-2|}{\\sqrt{1+1+1}}=\\frac{2}{\\sqrt3}=\\frac{2\\sqrt3}{3}$.", working: "2sqrt3/3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State distance.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) line lies in plane (b) angle $0$ (c) $\\frac{2\\sqrt3}{3}$",
            commonErrors: ["Not checking if line is contained in plane."],
            examinerNote: "The line-plane containment is the key insight tested.",
          },
        },
      ],
    },
    {
      id: "edialpm-u7-modarg",
      title: "Modulus-Argument Problems",
      skill: "Solve complex equations and locus problems combining modulus and argument conditions.",
      lesson: {
        sections: [
          {
            heading: "Combined conditions",
            body: "$|z-a|=r$ gives a circle; $\\arg(z-a)=\\theta$ gives a ray from $a$. Their intersection is a single point (or segment). Problems like $|z|=|z-2|$ with $\\arg z=\\frac{\\pi}{4}$ require solving simultaneously.",
          },
          {
            heading: "Algebraic approach",
            body: "Write $z=x+iy$; modulus conditions become circle equations, argument conditions give $\\frac{y-y_0}{x-x_0}=\\tan\\theta$ (with quadrant check). Solve the resulting linear/circular system.",
          },
          {
            heading: "Loci intersections",
            body: "Common exam task: find $z$ satisfying two locus conditions, e.g. intersection of a circle and perpendicular bisector — solve geometrically then convert back to $z=x+iy$.",
          },
        ],
        keyFormulas: [
          { name: "Argument as slope", statement: "$\\arg(z-a)=\\theta\\iff\\frac{y-y_0}{x-x_0}=\\tan\\theta$" },
        ],
        workedExample: {
          problem: "Find $z$ with $|z|=2$ and $\\arg z=\\frac{\\pi}{6}$.",
          solution: "$z=2\\text{cis}\\frac{\\pi}{6}=2(\\frac{\\sqrt3}{2}+\\frac{i}{2})=\\sqrt3+i$.",
        },
      },
      questions: [
        {
          id: "edialpm-ma-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The locus $\\arg z=\\frac{\\pi}{2}$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The positive imaginary axis" },
              { id: "b", text: "The negative imaginary axis" },
              { id: "c", text: "The positive real axis" },
              { id: "d", text: "A circle" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Argument locus", statement: "$\\arg z=\\theta$ is a ray from origin." }],
            steps: [{ reasoning: "$\\frac{\\pi}{2}$ is straight up — positive imaginary axis.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** positive imaginary axis",
          },
        },
        {
          id: "edialpm-ma-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Determine whether any complex number $z$ satisfies both $|z-1|=1$ and $\\arg z=\\frac{\\pi}{2}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Intersection", statement: "Circle meets imaginary axis." }],
            steps: [
              { reasoning: "$\\arg z=\\frac{\\pi}{2}$ means $z=iy$, $y>0$.", working: "z=iy", marks: 1, markCode: "M" },
              { reasoning: "$|iy-1|=1\\Rightarrow1+y^2=1\\Rightarrow y=0$ — only origin, but $y>0$ excludes it; no intersection? Check: $|iy-1|=\\sqrt{1+y^2}=1\\Rightarrow y=0$.", working: "y=0", marks: 1, markCode: "M" },
              { reasoning: "So no point satisfies both (origin has undefined argument).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No solution",
            commonErrors: ["Accepting $y=0$ which fails $\\arg$ condition."],
          },
        },
        {
          id: "edialpm-ma-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the complex number $z$ such that $|z|=\\sqrt2$ and $\\arg z=\\frac{3\\pi}{4}$, giving exact form.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Polar form", statement: "$z=r\\text{cis}\\theta$." }],
            steps: [
              { reasoning: "$z=\\sqrt2\\left(\\cos\\frac{3\\pi}{4}+i\\sin\\frac{3\\pi}{4}\\right)=\\sqrt2\\left(-\\frac{\\sqrt2}{2}+\\frac{i\\sqrt2}{2}\\right)=-1+i$.", working: "-1+i", marks: 1, markCode: "M" },
              { reasoning: "Check $|z|=\\sqrt{1+1}=\\sqrt2$ ✓.", marks: 1, markCode: "M" },
              { reasoning: "Check $\\arg(-1+i)=\\frac{3\\pi}{4}$ (second quadrant) ✓.", marks: 1, markCode: "M" },
              { reasoning: "State $z=-1+i$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$z=-1+i$",
            commonErrors: ["Wrong quadrant for argument."],
          },
        },
        {
          id: "edialpm-ma-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Find all complex numbers $z$ such that $|z-1|=|z+1|$ and $|z-i|=\\sqrt2$.",
          parts: [
            { label: "a", prompt: "Identify the locus $|z-1|=|z+1|$.", marks: 3 },
            { label: "b", prompt: "Write the Cartesian equation of $|z-i|=\\sqrt2$.", marks: 3 },
            { label: "c", prompt: "Find the intersection points.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Bisector", statement: "$|z-1|=|z+1|$ is perpendicular bisector of $-1$ and $1$ → imaginary axis." },
              { kind: "technique", name: "Circle equation", statement: "$|z-i|=\\sqrt2\\Rightarrow x^2+(y-1)^2=2$." },
            ],
            steps: [
              { part: "a", reasoning: "Equidistant from $1$ and $-1$: perpendicular bisector of segment on real axis — the imaginary axis $x=0$.", working: "x=0", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State locus.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Verify: $|iy-1|=|iy+1|=\\sqrt{1+y^2}$ ✓.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$z=x+iy$: $x^2+(y-1)^2=2$.", working: "circle eq", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Centre $(0,1)$ radius $\\sqrt2$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "State equation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set $x=0$: $(y-1)^2=2\\Rightarrow y=1\\pm\\sqrt2$.", working: "y values", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Points: $z=i(1+\\sqrt2)$ and $z=i(1-\\sqrt2)$.", working: "z values", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State both solutions.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$z=i(1+\\sqrt2)$ and $z=i(1-\\sqrt2)$",
            commonErrors: ["Missing one intersection; wrong centre."],
          },
        },
      ],
    },
  ],
};
