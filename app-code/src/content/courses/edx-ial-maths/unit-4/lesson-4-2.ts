import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "edial-maths-u4-lesson-4-2",
  code: "4-2",
  title: "Polar Coordinates and Parametric Equations",
  goal: "I CAN convert between Cartesian and polar coordinates, find areas using polar integration and work with parametric curves including tangents and areas.",
  standards: ["WMA14 P4", "Polar coordinates", "Parametric equations"],
  vocabulary: [
    { term: "Polar coordinates", definition: "Point described by $(r,\\theta)$: distance $r$ from the pole and angle $\\theta$ from the positive $x$-axis." },
    { term: "Cartesian-polar conversion", definition: "$x=r\\cos\\theta$, $y=r\\sin\\theta$, $r^2=x^2+y^2$, $\\tan\\theta=\\frac{y}{x}$." },
    { term: "Parametric equations", definition: "Curve defined by $x=f(t)$, $y=g(t)$ with parameter $t$; eliminate $t$ for Cartesian form." },
    { term: "Area in polar form", definition: "$A=\\frac12\\int_\\alpha^\\beta r^2\\,d\\theta$ for the region swept by the radius vector." },
    { term: "Arc length", definition: "$s=\\int\\sqrt{\\left(\\frac{dx}{dt}\\right)^2+\\left(\\frac{dy}{dt}\\right)^2}\\,dt$ for parametric curves." },
  ],
  concepts: [
    {
      id: "edial-maths-u4-polar",
      title: "Polar coordinates",
      skill: "Convert between coordinate systems, sketch polar curves and find enclosed areas using $\\frac12\\int r^2\\,d\\theta$.",
      lesson: {
        sections: [
          {
            heading: "Conversions",
            body: "$x=r\\cos\\theta$ and $y=r\\sin\\theta$ convert polar to Cartesian; $r=\\sqrt{x^2+y^2}$ and $\\theta=\\arctan(\\frac{y}{x})$ (adjusting for quadrant) go back. Lines through the pole have constant $\\theta$; circles centred at the pole have constant $r$.",
          },
          {
            heading: "Area in polar form",
            body: "The area swept by the radius vector from $\\theta=\\alpha$ to $\\beta$ is $A=\\frac12\\int_\\alpha^\\beta r^2\\,d\\theta$. For a full curve like $r=a\\cos\\theta$ (a circle through the pole), integrate over the appropriate range, often $-\\frac{\\pi}{2}$ to $\\frac{\\pi}{2}$ or $0$ to $\\pi$ depending on the curve.",
          },
          {
            heading: "Intersections",
            body: "To find where two polar curves meet, solve $r_1(\\theta)=r_2(\\theta)$ — but also check the pole itself, which lies on many curves regardless of $\\theta$.",
          },
        ],
        keyFormulas: [
          { name: "Polar area", statement: "$A=\\frac12\\int_\\alpha^\\beta r^2\\,d\\theta$" },
          { name: "Conversions", statement: "$x=r\\cos\\theta$, $y=r\\sin\\theta$" },
        ],
        workedExample: {
          problem: "Find the area enclosed by $r=2\\cos\\theta$.",
          solution: "The curve is a circle of diameter 2 through the pole. $A=\\frac12\\int_{-\\pi/2}^{\\pi/2}(2\\cos\\theta)^2d\\theta=2\\int_{-\\pi/2}^{\\pi/2}\\cos^2\\theta\\,d\\theta=2\\cdot\\frac{\\pi}{2}=\\pi$.",
        },
      },
      questions: [
        {
          id: "edial-maths-u4-polar-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The point with polar coordinates $(2, \\frac{\\pi}{3})$ has Cartesian coordinates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(1, \\sqrt{3})$" },
              { id: "b", text: "$(\\sqrt{3}, 1)$" },
              { id: "c", text: "$(2, 0)$" },
              { id: "d", text: "$(0, 2)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Conversion", statement: "$x=r\\cos\\theta$, $y=r\\sin\\theta$." },
            ],
            steps: [
              { reasoning: "$x=2\\cos60^\\circ=1$, $y=2\\sin60^\\circ=\\sqrt3$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $(1,\\sqrt3)$",
            commonErrors: ["Swapping $\\sin$ and $\\cos$."],
          },
        },
        {
          id: "edial-maths-u4-polar-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Convert $r=3\\sin\\theta$ to Cartesian form.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Conversions", statement: "$r\\sin\\theta=y$, $r^2=x^2+y^2$." },
            ],
            steps: [
              { reasoning: "Multiply by $r$: $r^2=3r\\sin\\theta$.", working: "r^2=3y", marks: 1, markCode: "M" },
              { reasoning: "Replace $r^2=x^2+y^2$ and $r\\sin\\theta=y$.", working: "x^2+y^2=3y", marks: 1, markCode: "M" },
              { reasoning: "State Cartesian form (optionally complete the square: $x^2+(y-\\frac32)^2=\\frac94$).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^2+y^2=3y$ (circle centre $(0,\\frac32)$, radius $\\frac32$)",
            commonErrors: ["Forgetting to multiply by $r$ first."],
          },
        },
        {
          id: "edial-maths-u4-polar-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the area enclosed by the curve $r=1+\\cos\\theta$ for $-\\pi\\le\\theta\\le\\pi$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Polar area", statement: "$A=\\frac12\\int r^2\\,d\\theta$." },
            ],
            steps: [
              { reasoning: "$r^2=(1+\\cos\\theta)^2=1+2\\cos\\theta+\\cos^2\\theta$.", working: "expand", marks: 1, markCode: "M" },
              { reasoning: "Use $\\cos^2\\theta=\\frac{1+\\cos2\\theta}{2}$: integral becomes $\\frac12\\int_{-\\pi}^{\\pi}\\left(\\frac32+2\\cos\\theta+\\frac{\\cos2\\theta}{2}\\right)d\\theta$.", working: "integrand", marks: 1, markCode: "M" },
              { reasoning: "Integrate: $\\frac12\\left[\\frac{3\\theta}{2}+2\\sin\\theta+\\frac{\\sin2\\theta}{4}\\right]_{-\\pi}^{\\pi}=\\frac12\\cdot\\frac{3\\pi}{2}\\cdot2=\\frac{3\\pi}{2}$.", working: "A=\\frac{3\\pi}{2}", marks: 1, markCode: "M" },
              { reasoning: "State area $\\frac{3\\pi}{2}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$A=\\frac{3\\pi}{2}$",
            commonErrors: ["Wrong limits; missing factor $\\frac12$."],
            examinerNote: "Accept $4.71$ approx.",
          },
        },
        {
          id: "edial-maths-u4-polar-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The curve $C$ has polar equation $r=2\\sin\\theta$, $0\\le\\theta\\le\\pi$.",
          parts: [
            { label: "a", prompt: "Show that $C$ is a circle and state its centre and radius.", marks: 3 },
            { label: "b", prompt: "Find the area enclosed by $C$ using polar integration.", marks: 4 },
            { label: "c", prompt: "Find the polar coordinates of the points where $C$ intersects the line $y=x$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Polar area", statement: "$A=\\frac12\\int r^2d\\theta$." },
              { kind: "formula", name: "Line in polar", statement: "$y=x\\Rightarrow\\tan\\theta=1$ or use $r\\sin\\theta=r\\cos\\theta$." },
            ],
            steps: [
              { part: "a", reasoning: "$r=2\\sin\\theta\\Rightarrow r^2=2r\\sin\\theta\\Rightarrow x^2+y^2=2y$.", working: "x^2+y^2=2y", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete the square: $x^2+(y-1)^2=1$ — circle centre $(0,1)$, radius $1$.", working: "centre (0,1), r=1", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State circle details.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$A=\\frac12\\int_0^\\pi(2\\sin\\theta)^2d\\theta=2\\int_0^\\pi\\sin^2\\theta\\,d\\theta$.", working: "2\\int\\sin^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$\\sin^2\\theta=\\frac{1-\\cos2\\theta}{2}$; integral $=2\\cdot\\frac{\\pi}{2}=\\pi$.", working: "A=\\pi", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Verify against circle area $\\pi r^2=\\pi$ ✓.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "State area $\\pi$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "On $y=x$: $r\\sin\\theta=r\\cos\\theta$, so $\\tan\\theta=1$, $\\theta=\\frac{\\pi}{4}$ or $\\frac{5\\pi}{4}$; only $\\frac{\\pi}{4}$ in range $[0,\\pi]$ with $r>0$. Also check pole.", working: "\\theta=\\pi/4", marks: 1, markCode: "M" },
              { part: "c", reasoning: "At $\\theta=\\frac{\\pi}{4}$: $r=2\\sin\\frac{\\pi}{4}=\\sqrt2$; point $(\\sqrt2,\\frac{\\pi}{4})$.", working: "(\\sqrt2,\\pi/4)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State intersection(s); the pole is also on both (excluded as $r=0$ boundary).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) circle centre $(0,1)$ radius $1$ (b) $A=\\pi$ (c) $(\\sqrt2,\\frac{\\pi}{4})$",
            commonErrors: ["Using wrong $\\theta$ range.", "Missing the pole as an intersection."],
          },
        },
      ],
    },
    {
      id: "edial-maths-u4-parametric",
      title: "Parametric equations",
      skill: "Differentiate parametric curves, find tangents and normals, and compute arc lengths and areas.",
      lesson: {
        sections: [
          {
            heading: "Differentiation",
            body: "For $x=f(t)$, $y=g(t)$: $\\frac{dy}{dx}=\\frac{dy/dt}{dx/dt}=\\frac{g'(t)}{f'(t)}$. The second derivative is $\\frac{d^2y}{dx^2}=\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)\\Big/\\frac{dx}{dt}$.",
          },
          {
            heading: "Tangents and normals",
            body: "At parameter $t=t_1$, gradient $m=\\frac{g'(t_1)}{f'(t_1)}$. Tangent: $y-y_1=m(x-x_1)$; normal gradient $-1/m$. Find stationary points where $\\frac{dy}{dx}=0$ (i.e. $g'(t)=0$).",
          },
          {
            heading: "Arc length and area",
            body: "Arc length $s=\\int\\sqrt{(dx/dt)^2+(dy/dt)^2}\\,dt$. Area between curve and $x$-axis: $A=\\int y\\,\\frac{dx}{dt}\\,dt=\\int g(t)f'(t)\\,dt$ between appropriate limits.",
          },
        ],
        keyFormulas: [
          { name: "dy/dx", statement: "$\\frac{dy}{dx}=\\frac{dy/dt}{dx/dt}$" },
          { name: "Arc length", statement: "$s=\\int\\sqrt{\\dot x^2+\\dot y^2}\\,dt$" },
        ],
        workedExample: {
          problem: "For $x=t^2$, $y=t^3$, find $\\frac{dy}{dx}$ and the tangent at $t=1$.",
          solution: "$\\frac{dy}{dx}=\\frac{3t^2}{2t}=\\frac{3t}{2}$; at $t=1$, point $(1,1)$, gradient $\\frac32$. Tangent: $y-1=\\frac32(x-1)$.",
        },
      },
      questions: [
        {
          id: "edial-maths-u4-param-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For the parametric curve $x=t^2$, $y=2t$, what is $\\frac{dy}{dx}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{t}$" },
              { id: "b", text: "$t$" },
              { id: "c", text: "$2t$" },
              { id: "d", text: "$\\frac{2}{t}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Parametric derivative", statement: "$\\frac{dy}{dx}=\\frac{dy/dt}{dx/dt}=\\frac{2}{2t}$." },
            ],
            steps: [
              { reasoning: "$\\frac{2}{2t}=\\frac{1}{t}$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\frac{1}{t}$",
            commonErrors: ["Inverting the ratio."],
          },
        },
        {
          id: "edial-maths-u4-param-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $x=\\cos t$, $y=\\sin t$, $0\\le t\\le\\pi$, find the Cartesian equation and the area enclosed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pythagoras", statement: "$\\cos^2t+\\sin^2t=1$." },
            ],
            steps: [
              { reasoning: "$x^2+y^2=\\cos^2t+\\sin^2t=1$ — unit circle; upper half since $y=\\sin t\\ge0$.", working: "x^2+y^2=1", marks: 1, markCode: "M" },
              { reasoning: "Area $=\\int_0^\\pi y\\frac{dx}{dt}dt=\\int_0^\\pi\\sin t(-\\sin t)dt=-\\int_0^\\pi\\sin^2t\\,dt$.", working: "-\\int\\sin^2", marks: 1, markCode: "M" },
              { reasoning: "$=-\\frac{\\pi}{2}$ — take absolute value: area $=\\frac{\\pi}{2}$.", working: "A=\\pi/2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^2+y^2=1$ (upper semicircle); area $\\frac{\\pi}{2}$",
            commonErrors: ["Sign error in $dx/dt$; forgetting absolute value."],
          },
        },
        {
          id: "edial-maths-u4-param-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For the curve $x=t+\\frac{1}{t}$, $y=t-\\frac{1}{t}$ ($t>0$), find $\\frac{dy}{dx}$ in terms of $t$ and hence the Cartesian equation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Parametric derivative", statement: "$\\frac{dy}{dx}=\\frac{dy/dt}{dx/dt}$." },
            ],
            steps: [
              { reasoning: "$\\frac{dx}{dt}=1-\\frac{1}{t^2}$, $\\frac{dy}{dt}=1+\\frac{1}{t^2}$.", working: "dx/dt,dy/dt", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{dy}{dx}=\\frac{1+t^{-2}}{1-t^{-2}}=\\frac{t^2+1}{t^2-1}$.", working: "(t^2+1)/(t^2-1)", marks: 1, markCode: "M" },
              { reasoning: "Cartesian: $x^2-y^2=(t+t^{-1})^2-(t-t^{-1})^2=4$ — rectangular hyperbola.", working: "x^2-y^2=4", marks: 1, markCode: "M" },
              { reasoning: "State $\\frac{dy}{dx}$ and $x^2-y^2=4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{dy}{dx}=\\frac{t^2+1}{t^2-1}$; $x^2-y^2=4$",
            commonErrors: ["Algebra slips eliminating $t$."],
          },
        },
        {
          id: "edial-maths-u4-param-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The curve $C$ is defined parametrically by $x=t^2-2t$, $y=t^3-3t^2+2$ for $0\\le t\\le3$.",
          parts: [
            { label: "a", prompt: "Find $\\frac{dy}{dx}$ in terms of $t$.", marks: 3 },
            { label: "b", prompt: "Find the coordinates of the point where the tangent is horizontal.", marks: 4 },
            { label: "c", prompt: "Find the length of the arc from $t=0$ to $t=1$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Parametric derivative", statement: "$\\frac{dy}{dx}=\\frac{dy/dt}{dx/dt}$." },
              { kind: "formula", name: "Arc length", statement: "$s=\\int\\sqrt{\\dot x^2+\\dot y^2}\\,dt$." },
            ],
            steps: [
              { part: "a", reasoning: "$\\frac{dx}{dt}=2t-2$, $\\frac{dy}{dt}=3t^2-6t$.", working: "2t-2,\\ 3t^2-6t", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$\\frac{dy}{dx}=\\frac{3t^2-6t}{2t-2}=\\frac{3t(t-2)}{2(t-1)}$.", working: "3t(t-2)/(2(t-1))", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State result.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Horizontal tangent when $\\frac{dy}{dx}=0$, i.e. $3t(t-2)=0$: $t=0$ or $t=2$.", working: "t=0,2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "At $t=0$: $(0,2)$; at $t=2$: $(0,-2)$.", working: "(0,2),(0,-2)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Check $t=1$ gives $dx/dt=0$ (vertical tangent) — exclude.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "State both points.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\dot x=2t-2$, $\\dot y=3t^2-6t$; $\\dot x^2+\\dot y^2=(2t-2)^2+(3t^2-6t)^2$.", working: "sum of squares", marks: 1, markCode: "M" },
              { part: "c", reasoning: "At general $t$: $(2t-2)^2=4(t-1)^2$; $(3t^2-6t)^2=9t^2(t-2)^2$ — no simple simplification; set up integral $s=\\int_0^1\\sqrt{4(t-1)^2+9t^2(t-2)^2}\\,dt$.", working: "integral", marks: 1, markCode: "M" },
              { part: "c", reasoning: "This requires numerical methods; estimate $\\approx1.9$ (accept numerical answer with method shown).", working: "s\\approx1.9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac{3t(t-2)}{2(t-1)}$ (b) $(0,2)$ and $(0,-2)$ (c) $s\\approx1.9$ (numerical)",
            commonErrors: ["Missing that $t=1$ gives vertical tangent.", "Attempting arc length without calculator."],
            examinerNote: "Arc length is not expressible in elementary functions here; GDC/numerical answer accepted.",
          },
        },
      ],
    },
  ],
};
