import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "edxifm-u2-lesson-2-2",
  code: "2-2",
  title: "Polar Coordinates",
  goal: "I CAN convert between Cartesian and polar coordinates, sketch polar curves, and find equations of tangents and intersections in polar form.",
  standards: ["WFM02 FP2", "Polar coordinates"],
  vocabulary: [
    { term: "Polar coordinates", definition: "Point given by $(r,\\theta)$ where $r$ is distance from pole and $\\theta$ angle from the initial line; $x=r\\cos\\theta$, $y=r\\sin\\theta$." },
    { term: "Pole", definition: "The origin of the polar system, equivalent to $(0,0)$ in Cartesian." },
    { term: "Polar curve", definition: "A curve defined by $r=f(\\theta)$, e.g. $r=a\\cos\\theta$ (circle) or $r=a\\theta$ (spiral)." },
    { term: "Limaçon", definition: "Curve $r=a+b\\cos\\theta$; when $a=b$ it is a cardioid with a cusp at the pole." },
    { term: "Rose curve", definition: "$r=a\\cos(n\\theta)$ or $r=a\\sin(n\\theta)$; $n$ odd gives $n$ petals, $n$ even gives $2n$ petals." },
  ],
  concepts: [
    {
      id: "edxifm-u2-polar-basics",
      title: "Conversion and standard curves",
      skill: "Convert between coordinate systems and recognise/plot standard polar curves.",
      lesson: {
        sections: [
          {
            heading: "Conversion formulas",
            body: "$x=r\\cos\\theta$, $y=r\\sin\\theta$, $r^2=x^2+y^2$, $\\tan\\theta=\\frac{y}{x}$. Cartesian equations convert by substituting these; e.g. $x^2+y^2=2ax$ becomes $r=2a\\cos\\theta$ — a circle through the pole.",
          },
          {
            heading: "Standard curves",
            body: "$r=a\\cos\\theta$ and $r=a\\sin\\theta$ are circles of diameter $a$ through the pole. $r=a$ is a circle centred at the pole. $r=a\\theta$ is the Archimedean spiral. $r=a\\cos2\\theta$ is a four-petalled rose.",
          },
          {
            heading: "Sketching strategy",
            body: "Tabulate $r$ at key $\\theta$ values ($0,\\frac{\\pi}{4},\\frac{\\pi}{2},\\ldots$), note where $r=0$ (curve through pole) and where $r<0$ (plot in opposite direction), then join smoothly.",
          },
        ],
        keyFormulas: [
          { name: "Conversion", statement: "$x=r\\cos\\theta$, $y=r\\sin\\theta$, $r^2=x^2+y^2$" },
          { name: "Circle through pole", statement: "$x^2+y^2=2ax\\iff r=2a\\cos\\theta$" },
        ],
        workedExample: {
          problem: "Convert $r=2\\cos\\theta$ to Cartesian form.",
          solution: "Multiply by $r$: $r^2=2r\\cos\\theta\\Rightarrow x^2+y^2=2x$, a circle centre $(1,0)$ radius $1$.",
        },
      },
      questions: [
        {
          id: "edxifm-pol-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The polar curve $r=a\\cos\\theta$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A circle through the pole" },
              { id: "b", text: "A straight line" },
              { id: "c", text: "A spiral" },
              { id: "d", text: "A cardioid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Standard curve", statement: "$r=a\\cos\\theta$ converts to $x^2+y^2=ax$, a circle." }],
            steps: [{ reasoning: "$r^2=ar\\cos\\theta\\Rightarrow x^2+y^2=ax$ — circle diameter $a$ through the pole.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** circle through pole",
          },
        },
        {
          id: "edxifm-pol-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Convert the polar equation $r=3\\sin\\theta$ to Cartesian form and identify the curve.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Conversion", statement: "$r^2=x^2+y^2$, $r\\sin\\theta=y$." }],
            steps: [
              { reasoning: "Multiply by $r$: $r^2=3r\\sin\\theta$.", working: "r^2=3rsin(t)", marks: 1, markCode: "M" },
              { reasoning: "$x^2+y^2=3y$, i.e. $x^2+(y-\\frac32)^2=\\frac94$.", working: "x^2+(y-1.5)^2=2.25", marks: 1, markCode: "M" },
              { reasoning: "Circle centre $(0,\\frac32)$, radius $\\frac32$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Circle centre $(0,\\frac32)$ radius $\\frac32$",
            commonErrors: ["Forgetting to multiply by $r$."],
          },
        },
        {
          id: "edxifm-pol-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the polar equation of the circle $x^2+y^2=4x$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Conversion", statement: "$x=r\\cos\\theta$, $y=r\\sin\\theta$." }],
            steps: [
              { reasoning: "Substitute: $r^2\\cos^2\\theta+r^2\\sin^2\\theta=4r\\cos\\theta$, so $r^2=4r\\cos\\theta$.", working: "r^2=4rcos(t)", marks: 1, markCode: "M" },
              { reasoning: "Divide by $r$ ($r\\ne0$): $r=4\\cos\\theta$.", working: "r=4cos(t)", marks: 1, markCode: "M" },
              { reasoning: "State equation; note $r=0$ at pole is included.", marks: 1, markCode: "A" },
              { reasoning: "Circle centre $(2,0)$ radius $2$ through pole.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$r=4\\cos\\theta$",
            commonErrors: ["Dividing by $r$ without noting pole."],
          },
        },
        {
          id: "edxifm-pol-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The cardioid is $r=a(1+\\cos\\theta)$.",
          parts: [
            { label: "a", prompt: "Find the Cartesian equation of the cardioid.", marks: 4 },
            { label: "b", prompt: "Determine the values of $\\theta$ where the curve passes through the pole.", marks: 3 },
            { label: "c", prompt: "Find the maximum value of $r$ and where it occurs.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Conversion", statement: "$x=r\\cos\\theta$, $y=r\\sin\\theta$." }],
            steps: [
              { part: "a", reasoning: "$r=a(1+\\cos\\theta)=a+ar\\cos\\theta/a\\cdot$? Write $r-ar\\cos\\theta=a$? Since $r\\cos\\theta=x$: $r-a x/a$? Careful: $r=a(1+\\cos\\theta)\\Rightarrow r-ar\\cos\\theta=a$? $r\\cos\\theta=x$ so $r(1-\\frac{x}{r}\\cdot\\frac{a}{a})$... redo: $r=a+ar\\cos\\theta/a$? $r=a+a\\cos\\theta$? No: $r=a(1+\\cos\\theta)=a+a\\cos\\theta$ is wrong dimensionally — it's $r=a(1+\\cos\\theta)$ so $r=ar\\cos\\theta/a$? Correct: $r-a\\cdot\\frac{x}{1}$? Since $\\cos\\theta=\\frac{x}{r}$, $r=a(1+\\frac{x}{r})=a+\\frac{ax}{r}$, so $r^2=ar+ax$.", working: "r^2=ar+ax", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$r=\\sqrt{x^2+y^2}$: $x^2+y^2=a\\sqrt{x^2+y^2}+ax$.", working: "cartesian", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the implicit Cartesian equation.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Could isolate: $x^2+y^2-ax=a\\sqrt{x^2+y^2}$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Through pole when $r=0$: $1+\\cos\\theta=0\\Rightarrow\\cos\\theta=-1\\Rightarrow\\theta=\\pi$.", working: "theta=pi", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Only at $\\theta=\\pi$ (the cusp).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "State value.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$r$ max when $\\cos\\theta=1$, i.e. $\\theta=0$.", working: "theta=0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$r_{\\max}=a(1+1)=2a$.", working: "2a", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State max at $\\theta=0$, $r=2a$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x^2+y^2-ax=a\\sqrt{x^2+y^2}$ (b) $\\theta=\\pi$ (c) $r_{\\max}=2a$ at $\\theta=0$",
            commonErrors: ["Forgetting $\\cos\\theta=x/r$ needs $r$ substitution.", "Wrong pole condition."],
            examinerNote: "Accept unsimplified implicit Cartesian form.",
          },
        },
      ],
    },
    {
      id: "edxifm-u2-polar-adv",
      title: "Tangents and intersections in polar form",
      skill: "Find tangents to polar curves, angles between curves, and intersection points.",
      lesson: {
        sections: [
          {
            heading: "Gradient in polar form",
            body: "For $r=f(\\theta)$, write $x=r\\cos\\theta$, $y=r\\sin\\theta$ and use $\\frac{dy}{dx}=\\frac{\\frac{dy}{d\\theta}}{\\frac{dx}{d\\theta}}=\\frac{r'\\sin\\theta+r\\cos\\theta}{r'\\cos\\theta-r\\sin\\theta}$. The angle $\\psi$ between the curve and the radius vector satisfies $\\tan\\psi=\\frac{r}{dr/d\\theta}=\\frac{r}{r'}$.",
          },
          {
            heading: "Tangents",
            body: "Tangent is perpendicular to the radius vector when $\\frac{dr}{d\\theta}=0$ (e.g. max/min of $r$). Otherwise find gradient via the formula above and apply $y-y_1=m(x-x_1)$ in Cartesian coordinates.",
          },
          {
            heading: "Intersections",
            body: "Solve $f(\\theta)=g(\\theta)$ for common $\\theta$; also check the pole (where both curves pass through origin with different $\\theta$) and possible negative-$r$ coincidences.",
          },
        ],
        keyFormulas: [
          { name: "Polar gradient", statement: "$\\frac{dy}{dx}=\\frac{r'\\sin\\theta+r\\cos\\theta}{r'\\cos\\theta-r\\sin\\theta}$" },
          { name: "Angle with radius", statement: "$\\tan\\psi=\\frac{r}{r'}$" },
        ],
        workedExample: {
          problem: "Find the angle between the curve $r=2a\\sin\\theta$ and the initial line at $\\theta=\\frac{\\pi}{3}$.",
          solution: "$r'=2a\\cos\\theta$; at $\\theta=\\frac{\\pi}{3}$, $r=\\sqrt3a$, $r'=a$. $\\tan\\psi=\\frac{r}{r'}=\\sqrt3$, so $\\psi=\\frac{\\pi}{3}$.",
        },
      },
      questions: [
        {
          id: "edxifm-pola-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For a polar curve $r=f(\\theta)$, the tangent is perpendicular to the radius vector when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{dr}{d\\theta}=0$" },
              { id: "b", text: "$r=0$" },
              { id: "c", text: "$\\theta=0$" },
              { id: "d", text: "$\\frac{dr}{d\\theta}=1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Tangent condition", statement: "Stationary $r$ gives perpendicular tangent." }],
            steps: [{ reasoning: "$\\tan\\psi=\\frac{r}{r'}$; $r'=0\\Rightarrow\\psi=\\frac{\\pi}{2}$.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $\\frac{dr}{d\\theta}=0$",
          },
        },
        {
          id: "edxifm-pola-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $r=a\\sin2\\theta$, find the value of $\\theta$ in $(0,\\frac{\\pi}{2})$ where $r$ is stationary.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Stationary $r$", statement: "Set $\\frac{dr}{d\\theta}=0$." }],
            steps: [
              { reasoning: "$\\frac{dr}{d\\theta}=2a\\cos2\\theta$.", working: "2acos(2t)", marks: 1, markCode: "M" },
              { reasoning: "$\\cos2\\theta=0\\Rightarrow2\\theta=\\frac{\\pi}{2}\\Rightarrow\\theta=\\frac{\\pi}{4}$.", working: "pi/4", marks: 1, markCode: "M" },
              { reasoning: "State value (in range).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\theta=\\frac{\\pi}{4}$",
            commonErrors: ["Solving $\\sin2\\theta=0$ instead."],
          },
        },
        {
          id: "edxifm-pola-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the gradient of $r=a(1+\\cos\\theta)$ at $\\theta=\\frac{\\pi}{2}$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Polar gradient", statement: "$\\frac{dy}{dx}=\\frac{r'\\sin\\theta+r\\cos\\theta}{r'\\cos\\theta-r\\sin\\theta}$." }],
            steps: [
              { reasoning: "$r'= -a\\sin\\theta$; at $\\theta=\\frac{\\pi}{2}$: $r=a$, $r'=-a$.", working: "r=a,r'=-a", marks: 1, markCode: "M" },
              { reasoning: "Numerator: $(-a)(1)+a(0)=-a$; denominator: $(-a)(0)-a(1)=-a$.", working: "num=-a,den=-a", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{dy}{dx}=\\frac{-a}{-a}=1$.", working: "1", marks: 1, markCode: "M" },
              { reasoning: "State gradient $1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{dy}{dx}=1$",
            commonErrors: ["Sign errors in numerator/denominator."],
          },
        },
        {
          id: "edxifm-pola-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Find the points of intersection of $r=a\\cos\\theta$ and $r=a\\sin\\theta$.",
          parts: [
            { label: "a", prompt: "Solve $a\\cos\\theta=a\\sin\\theta$ for $\\theta$.", marks: 3 },
            { label: "b", prompt: "Find the corresponding points in Cartesian coordinates.", marks: 4 },
            { label: "c", prompt: "Check whether the pole is also an intersection point.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Intersection", statement: "Equate $r$ values; check pole separately." }],
            steps: [
              { part: "a", reasoning: "$\\cos\\theta=\\sin\\theta\\Rightarrow\\tan\\theta=1$.", working: "tan=1", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$\\theta=\\frac{\\pi}{4}$ or $\\frac{5\\pi}{4}$ (in $[0,2\\pi)$).", working: "pi/4,5pi/4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State solutions.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "At $\\theta=\\frac{\\pi}{4}$: $r=a\\cos\\frac{\\pi}{4}=\\frac{a}{\\sqrt2}$; then $x=r\\cos\\frac{\\pi}{4}=\\frac{a}{2}$, $y=r\\sin\\frac{\\pi}{4}=\\frac{a}{2}$.", working: "(a/2,a/2)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "At $\\theta=\\frac{5\\pi}{4}$: $r=-\\frac{a}{\\sqrt2}<0$, so the point is plotted at $\\theta=\\frac{\\pi}{4}$ with $r=\\frac{a}{\\sqrt2}$ — the same point again.", working: "same point", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Only one distinct Cartesian point: $\\left(\\frac{a}{2},\\frac{a}{2}\\right)$.", working: "point", marks: 1, markCode: "A" },
              { part: "b", reasoning: "State result, noting the duplicate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Circle $r=a\\cos\\theta$ passes through pole when $\\cos\\theta=0$, $\\theta=\\frac{\\pi}{2}$; circle $r=a\\sin\\theta$ at $\\theta=0,\\pi$ — both pass through pole but at different $\\theta$.", working: "pole check", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Pole is a common point since both curves include $r=0$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "So intersections are pole and $(\\frac{a}{2},\\frac{a}{2})$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Intersections: pole and $\\left(\\frac{a}{2},\\frac{a}{2}\\right)$",
            commonErrors: ["Missing the pole intersection.", "Not handling negative $r$."],
          },
        },
      ],
    },
  ],
};
