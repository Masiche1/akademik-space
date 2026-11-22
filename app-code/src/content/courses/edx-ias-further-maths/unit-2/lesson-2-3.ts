import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "edxifm-u2-lesson-2-3",
  code: "2-3",
  title: "Areas and Arc Lengths in Polar Form",
  goal: "I CAN find areas enclosed by polar curves and the lengths of polar arcs using integration.",
  standards: ["WFM02 FP2", "Polar integration"],
  vocabulary: [
    { term: "Polar area element", definition: "The area swept by the radius vector as $\\theta$ increases by $d\\theta$ is $\\frac12r^2d\\theta$; area $=\\frac12\\int_\\alpha^\\beta r^2\\,d\\theta$." },
    { term: "Area between curves", definition: "For $r_1>r_2$ over a range, area $=\\frac12\\int(r_1^2-r_2^2)\\,d\\theta$." },
    { term: "Arc length element", definition: "Length of polar arc $=\\int\\sqrt{r^2+\\left(\\frac{dr}{d\\theta}\\right)^2}\\,d\\theta$." },
    { term: "Full loop", definition: "A complete traversal of a polar curve; find $\\theta$-range giving one loop before integrating." },
  ],
  concepts: [
    {
      id: "edxifm-u2-polar-areas",
      title: "Areas enclosed by polar curves",
      skill: "Apply $A=\\frac12\\int r^2\\,d\\theta$ to standard curves and regions between curves.",
      lesson: {
        sections: [
          {
            heading: "The sector formula",
            body: "The area of a sector with radius $r$ and angle $d\\theta$ is $\\frac12r^2d\\theta$. For a polar curve $r=f(\\theta)$, the area swept from $\\theta=\\alpha$ to $\\beta$ is $A=\\frac12\\int_\\alpha^\\beta [f(\\theta)]^2\\,d\\theta$. Determine the correct $\\theta$-range first (e.g. $0$ to $2\\pi$ for a full curve, or the range of one petal/loop).",
          },
          {
            heading: "Areas between two curves",
            body: "If $r_1\\ge r_2$ on $[\\alpha,\\beta]$, the area between them is $\\frac12\\int_\\alpha^\\beta(r_1^2-r_2^2)\\,d\\theta$. Find intersection $\\theta$ values to set the limits.",
          },
          {
            heading: "Worked pattern",
            body: "For $r=a\\cos\\theta$ (circle through pole), the curve is traced as $\\theta$ runs $-\\frac{\\pi}{2}$ to $\\frac{\\pi}{2}$; area $=\\frac12\\int_{-\\pi/2}^{\\pi/2}a^2\\cos^2\\theta\\,d\\theta=\\frac{\\pi a^2}{4}$ — half the circle's area $\\pi a^2$? Check: circle radius $\\frac{a}{2}$? $r=a\\cos\\theta$ is circle diameter $a$ radius $\\frac{a}{2}$, area $\\frac{\\pi a^2}{4}$ ✓.",
          },
        ],
        keyFormulas: [
          { name: "Area", statement: "$A=\\frac12\\int_\\alpha^\\beta r^2\\,d\\theta$" },
          { name: "Between curves", statement: "$A=\\frac12\\int_\\alpha^\\beta(r_1^2-r_2^2)\\,d\\theta$" },
        ],
        workedExample: {
          problem: "Find the area enclosed by $r=a\\sin2\\theta$ (one petal).",
          solution: "Petal occurs for $\\theta\\in[0,\\frac{\\pi}{2}]$ where $\\sin2\\theta\\ge0$. $A=\\frac12\\int_0^{\\pi/2}a^2\\sin^22\\theta\\,d\\theta=\\frac{a^2}{2}\\cdot\\frac{\\pi}{4}=\\frac{\\pi a^2}{8}$.",
        },
      },
      questions: [
        {
          id: "edxifm-pola2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The area swept out by the radius vector of a polar curve is given by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\int r\\,d\\theta$" },
              { id: "b", text: "$\\int r^2\\,d\\theta$" },
              { id: "c", text: "$\\frac12\\int r^2\\,d\\theta$" },
              { id: "d", text: "$\\frac12\\int r\\,d\\theta$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Polar area", statement: "$A=\\frac12\\int r^2\\,d\\theta$." }],
            steps: [{ reasoning: "Sector area $\\frac12r^2d\\theta$ integrated.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** $\\frac12\\int r^2\\,d\\theta$",
          },
        },
        {
          id: "edxifm-pola2-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the area enclosed by the circle $r=2a\\cos\\theta$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Area", statement: "$A=\\frac12\\int_{-\\pi/2}^{\\pi/2}4a^2\\cos^2\\theta\\,d\\theta=\\pi a^2$" }],
            steps: [
              { reasoning: "Curve traced for $\\theta\\in[-\\frac{\\pi}{2},\\frac{\\pi}{2}]$; circle radius $a$ so area $=\\pi a^2$.", working: "pi a^2", marks: 1, markCode: "M" },
              { reasoning: "Verify: $\\frac12\\cdot4a^2\\cdot\\frac{\\pi}{2}=\\pi a^2$ ✓.", working: "check", marks: 1, markCode: "M" },
              { reasoning: "State area $\\pi a^2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pi a^2$",
            commonErrors: ["Using $0$ to $2\\pi$ which doubles the area."],
          },
        },
        {
          id: "edxifm-pola2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the area common to $r=a\\cos\\theta$ and $r=a\\sin\\theta$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Intersection limits", statement: "Curves meet at $\\theta=\\frac{\\pi}{4}$; common region is the smaller sector." }],
            steps: [
              { reasoning: "Curves meet at $\\theta=\\frac{\\pi}{4}$ and at the pole; by symmetry there are two congruent lens-shaped regions, each bounded by arcs of both circles.", working: "two regions", marks: 1, markCode: "M" },
              { reasoning: "Each circle has radius $\\frac{a}{2}$ with centres $(\\frac{a}{2},0)$ and $(0,\\frac{a}{2})$, distance $d=\\frac{a}{\\sqrt2}$ apart. Lens area $=2r^2\\cos^{-1}\\frac{d}{2r}-\\frac{d}{2}\\sqrt{4r^2-d^2}=\\frac{a^2}{2}\\cdot\\frac{\\pi}{4}-\\frac{a}{2\\sqrt2}\\cdot\\frac{a}{\\sqrt2}=\\frac{\\pi a^2}{8}-\\frac{a^2}{4}$.", working: "pi a^2/8 - a^2/4", marks: 1, markCode: "M" },
              { reasoning: "Total common area $=\\frac{a^2}{4}\\left(\\frac{\\pi}{2}-1\\right)\\approx0.143a^2$.", working: "0.143a^2", marks: 1, markCode: "M" },
              { reasoning: "State answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{a^2}{4}\\left(\\frac{\\pi}{2}-1\\right)\\approx0.143a^2$",
            commonErrors: ["Wrong limits; forgetting factor $\\frac12$."],
            examinerNote: "Accept equivalent forms; method marks for correct setup.",
          },
        },
        {
          id: "edxifm-pola2-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Find the area enclosed by one loop of the four-petalled rose $r=a\\cos2\\theta$.",
          parts: [
            { label: "a", prompt: "Determine the $\\theta$-range for one petal.", marks: 3 },
            { label: "b", prompt: "Set up and evaluate the area integral for one petal.", marks: 4 },
            { label: "c", prompt: "Hence find the total area of the rose.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Petal range", statement: "Petals where $\\cos2\\theta$ has constant sign; use symmetry." }],
            steps: [
              { part: "a", reasoning: "One petal: $\\theta\\in[-\\frac{\\pi}{4},\\frac{\\pi}{4}]$ where $\\cos2\\theta\\ge0$.", working: "[-pi/4,pi/4]", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Four petals total by symmetry.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "State range.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$A_{\\text{petal}}=\\frac12\\int_{-\\pi/4}^{\\pi/4}a^2\\cos^22\\theta\\,d\\theta$.", working: "integral", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$\\cos^22\\theta=\\frac{1+\\cos4\\theta}{2}$; integral $=\\frac{a^2}{2}\\left[\\frac{\\theta}{2}+\\frac{\\sin4\\theta}{8}\\right]_{-\\pi/4}^{\\pi/4}=\\frac{a^2}{2}\\cdot\\frac{\\pi}{4}=\\frac{\\pi a^2}{8}$.", working: "pi a^2/8", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State petal area.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Double-check limits/even integrand.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Total $=4\\times\\frac{\\pi a^2}{8}=\\frac{\\pi a^2}{2}$.", working: "pi a^2/2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State total.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Petal $\\frac{\\pi a^2}{8}$; total $\\frac{\\pi a^2}{2}$",
            commonErrors: ["Using full $0$ to $2\\pi$ range incorrectly.", "Factor of $\\frac12$ omitted."],
          },
        },
      ],
    },
    {
      id: "edxifm-u2-polar-arclen",
      title: "Arc length in polar form",
      skill: "Apply $L=\\int\\sqrt{r^2+r'^2}\\,d\\theta$ to find lengths of polar curves.",
      lesson: {
        sections: [
          {
            heading: "The arc length formula",
            body: "An infinitesimal arc has Cartesian displacement $ds=\\sqrt{(\\frac{dx}{d\\theta})^2+(\\frac{dy}{d\\theta})^2}\\,d\\theta=\\sqrt{r^2+\\left(\\frac{dr}{d\\theta}\\right)^2}\\,d\\theta$. Integrate over the appropriate $\\theta$-range for the required arc.",
          },
          {
            heading: "Choosing limits",
            body: "The curve $r=a\\cos\\theta$ is traced once for $\\theta\\in[-\\frac{\\pi}{2},\\frac{\\pi}{2}]$; a full circle $r=a$ needs $0$ to $2\\pi$. Check for retracing when $r$ changes sign.",
          },
          {
            heading: "Typical integrals",
            body: "For circles $r=a$: $L=\\int_0^{2\\pi}a\\,d\\theta=2\\pi a$ — recovers circumference. For spirals the integrand rarely simplifies; leave in exact form or evaluate numerically.",
          },
        ],
        keyFormulas: [
          { name: "Arc length", statement: "$L=\\int_\\alpha^\\beta\\sqrt{r^2+\\left(\\frac{dr}{d\\theta}\\right)^2}\\,d\\theta$" },
        ],
        workedExample: {
          problem: "Find the length of the curve $r=a\\cos\\theta$.",
          solution: "$r'=-a\\sin\\theta$; integrand $\\sqrt{a^2\\cos^2\\theta+a^2\\sin^2\\theta}=a$. $L=a\\int_{-\\pi/2}^{\\pi/2}d\\theta=\\pi a$ — the circumference of circle radius $\\frac{a}{2}$ is $\\pi a$ ✓.",
        },
      },
      questions: [
        {
          id: "edxifm-arcl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The arc length element in polar form is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\sqrt{r^2+\\left(\\frac{dr}{d\\theta}\\right)^2}\\,d\\theta$" },
              { id: "b", text: "$\\sqrt{r^2-\\left(\\frac{dr}{d\\theta}\\right)^2}\\,d\\theta$" },
              { id: "c", text: "$\\frac{dr}{d\\theta}\\,d\\theta$" },
              { id: "d", text: "$r\\,d\\theta$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Arc length", statement: "$ds=\\sqrt{r^2+r'^2}\\,d\\theta$." }],
            steps: [{ reasoning: "From $x=r\\cos\\theta,y=r\\sin\\theta$ differentiation.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $\\sqrt{r^2+r'^2}\\,d\\theta$",
          },
        },
        {
          id: "edxifm-arcl-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the length of the circle $r=a$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Arc length", statement: "$L=\\int_0^{2\\pi}\\sqrt{a^2+0}\\,d\\theta=2\\pi a$." }],
            steps: [
              { reasoning: "$r'=0$, integrand $=a$.", working: "integrand=a", marks: 1, markCode: "M" },
              { reasoning: "$L=a\\int_0^{2\\pi}d\\theta=2\\pi a$.", working: "2 pi a", marks: 1, markCode: "M" },
              { reasoning: "State $2\\pi a$ — matches circumference.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\pi a$",
            commonErrors: ["Wrong $\\theta$ range."],
          },
        },
        {
          id: "edxifm-arcl-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Show that the length of one petal of $r=a\\sin2\\theta$ is $\\int_{-\\pi/4}^{\\pi/4}\\sqrt{a^2\\sin^22\\theta+4a^2\\cos^22\\theta}\\,d\\theta$ and evaluate the integrand at $\\theta=0$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Arc length", statement: "$L=\\int\\sqrt{r^2+r'^2}\\,d\\theta$." }],
            steps: [
              { reasoning: "$r=a\\sin2\\theta$, $r'=2a\\cos2\\theta$; integrand $\\sqrt{a^2\\sin^22\\theta+4a^2\\cos^22\\theta}$.", working: "integrand", marks: 1, markCode: "M" },
              { reasoning: "Petal range $\\theta\\in[-\\frac{\\pi}{4},\\frac{\\pi}{4}]$.", working: "range", marks: 1, markCode: "M" },
              { reasoning: "At $\\theta=0$: integrand $=\\sqrt{0+4a^2}=2a$.", working: "2a", marks: 1, markCode: "M" },
              { reasoning: "State setup and value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "At $\\theta=0$ integrand $=2a$; integral as stated",
            commonErrors: ["Wrong derivative $r'$."],
          },
        },
        {
          id: "edxifm-arcl-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Find the total length of the cardioid $r=a(1+\\cos\\theta)$.",
          parts: [
            { label: "a", prompt: "Find $\\frac{dr}{d\\theta}$ and write down the arc length integrand.", marks: 3 },
            { label: "b", prompt: "Simplify the integrand using a half-angle identity.", marks: 4 },
            { label: "c", prompt: "Evaluate the integral to find the total length.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cardioid length", statement: "Use $1+\\cos\\theta=2\\cos^2\\frac{\\theta}{2}$." }],
            steps: [
              { part: "a", reasoning: "$r'=-a\\sin\\theta$.", working: "r'=-asin(t)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Integrand: $\\sqrt{a^2(1+\\cos\\theta)^2+a^2\\sin^2\\theta}=a\\sqrt{1+2\\cos\\theta+\\cos^2\\theta+\\sin^2\\theta}=a\\sqrt{2+2\\cos\\theta}$.", working: "a sqrt(2+2cos t)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State integrand.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$2+2\\cos\\theta=4\\cos^2\\frac{\\theta}{2}$, so integrand $=2a\\left|\\cos\\frac{\\theta}{2}\\right|$.", working: "2a cos(t/2)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "For $\\theta\\in[0,2\\pi]$, $\\cos\\frac{\\theta}{2}\\ge0$ so absolute value can be dropped.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State simplified form.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Verify algebra.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$L=2a\\int_0^{2\\pi}\\cos\\frac{\\theta}{2}\\,d\\theta=2a\\left[2\\sin\\frac{\\theta}{2}\\right]_0^{2\\pi}=2a(2-0)=8a$.", working: "8a", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State length.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude $L=8a$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$L=8a$",
            commonErrors: ["Sign of absolute value; wrong half-angle identity."],
          },
        },
      ],
    },
  ],
};
