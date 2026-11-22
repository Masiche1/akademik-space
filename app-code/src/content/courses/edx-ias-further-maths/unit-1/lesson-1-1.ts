import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "edxifm-u1-lesson-1-1",
  code: "1-1",
  title: "Complex Numbers",
  goal: "I CAN represent complex numbers in Cartesian and polar form, find modulus and argument, sketch loci and apply De Moivre's theorem.",
  standards: ["WFM01 FP1", "Complex numbers"],
  vocabulary: [
    { term: "Complex number", definition: "$z=x+iy$ where $x,y\\in\\mathbb{R}$ and $i^2=-1$; $x$ is the real part, $y$ the imaginary part." },
    { term: "Modulus", definition: "$|z|=\\sqrt{x^2+y^2}$ — the distance from the origin on an Argand diagram." },
    { term: "Argument", definition: "$\\arg z=\\arctan(\\frac{y}{x})$ adjusted for quadrant, the angle from the positive real axis." },
    { term: "Polar form", definition: "$z=r(\\cos\\theta+i\\sin\\theta)=re^{i\\theta}$ where $r=|z|$, $\\theta=\\arg z$." },
    { term: "De Moivre's theorem", definition: "$[r(\\cos\\theta+i\\sin\\theta)]^n=r^n(\\cos n\\theta+i\\sin n\\theta)$." },
  ],
  concepts: [
    {
      id: "edxifm-u1-cx-polar",
      title: "Modulus, argument and polar form",
      skill: "Convert between Cartesian and polar form, compute modulus and argument, and sketch complex loci.",
      lesson: {
        sections: [
          {
            heading: "Cartesian and polar forms",
            body: "Cartesian: $z=x+iy$. Polar: $z=r(\\cos\\theta+i\\sin\\theta)$ with $r=|z|=\\sqrt{x^2+y^2}$ and $\\theta=\\arg z$. Convert using $x=r\\cos\\theta$, $y=r\\sin\\theta$. The argument must be chosen in the correct quadrant — check the signs of $x$ and $y$.",
          },
          {
            heading: "Loci on the Argand diagram",
            body: "$|z-a|=k$ is a circle centred at $a$ radius $k$. $|z-a|=|z-b|$ is the perpendicular bisector of $AB$. $\\arg(z-a)=\\theta$ is a half-line from $a$ at angle $\\theta$. $|z|=k$ is a circle centred at the origin.",
          },
          {
            heading: "Arithmetic in polar form",
            body: "Multiplication: multiply moduli, add arguments. Division: divide moduli, subtract arguments. These are much easier in polar form than Cartesian.",
          },
        ],
        keyFormulas: [
          { name: "Modulus-argument", statement: "$z=r(\\cos\\theta+i\\sin\\theta)$, $r=\\sqrt{x^2+y^2}$" },
          { name: "Argand loci", statement: "$|z-a|=k$ circle; $\\arg(z-a)=\\theta$ half-line" },
        ],
        workedExample: {
          problem: "Write $z=1+i\\sqrt3$ in polar form and find $z^4$.",
          solution: "$|z|=\\sqrt{1+3}=2$, $\\arg z=\\arctan\\sqrt3=\\frac{\\pi}{3}$. So $z=2\\left(\\cos\\frac{\\pi}{3}+i\\sin\\frac{\\pi}{3}\\right)$. By De Moivre, $z^4=16\\left(\\cos\\frac{4\\pi}{3}+i\\sin\\frac{4\\pi}{3}\\right)=16\\left(-\\frac12-i\\frac{\\sqrt3}{2}\\right)=-8-8i\\sqrt3$.",
        },
      },
      questions: [
        {
          id: "edxifm-cx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $|3-4i|$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$25$" },
              { id: "b", text: "$7$" },
              { id: "c", text: "$5$" },
              { id: "d", text: "$\\sqrt7$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Modulus", statement: "$|z|=\\sqrt{x^2+y^2}$." }],
            steps: [{ reasoning: "$\\sqrt{9+16}=5$.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $5$",
            commonErrors: ["Adding $3+4$ instead of using Pythagoras."],
          },
        },
        {
          id: "edxifm-cx-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Express $z=-1+i$ in polar form, giving the argument in radians.",
          response: {
            type: "numeric",
            parts: [
              { label: "modulus", answer: 1.41421, tolerance: 0.001 },
              { label: "argument", answer: 2.35619, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Polar form", statement: "$r=\\sqrt{x^2+y^2}$, $\\theta=\\arg z$ in correct quadrant." }],
            steps: [
              { reasoning: "$r=\\sqrt{1+1}=\\sqrt2\\approx1.414$.", working: "r=\\sqrt2", marks: 1, markCode: "M" },
              { reasoning: "$\\arg z$ is in the second quadrant: $\\pi-\\arctan(1)=\\frac{3\\pi}{4}\\approx2.356$ rad.", working: "\\theta=3\\pi/4", marks: 1, markCode: "M" },
              { reasoning: "State $z=\\sqrt2\\left(\\cos\\frac{3\\pi}{4}+i\\sin\\frac{3\\pi}{4}\\right)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$r=\\sqrt2$, $\\theta=\\frac{3\\pi}{4}$ rad",
            commonErrors: ["Using $\\arctan(1)=\\frac{\\pi}{4}$ without adjusting quadrant."],
          },
        },
        {
          id: "edxifm-cx-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the locus of points $z$ satisfying $|z-2i|=3$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Circular locus", statement: "$|z-a|=k$ is a circle centre $a$, radius $k$." }],
            steps: [
              { reasoning: "Identify centre $a=2i$ i.e. $(0,2)$.", marks: 1, markCode: "M" },
              { reasoning: "Radius $k=3$.", marks: 1, markCode: "M" },
              { reasoning: "Sketch or describe: circle through $(0,-1)$ and $(0,5)$.", marks: 1, markCode: "A" },
              { reasoning: "State it does not include the origin since $|{-2i}|=2\\ne3$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Circle centre $(0,2)$, radius $3$",
            commonErrors: ["Confusing $|z-a|$ with $|z|-a$."],
          },
        },
        {
          id: "edxifm-cx-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Let $z_1=2\\left(\\cos\\frac{\\pi}{6}+i\\sin\\frac{\\pi}{6}\\right)$ and $z_2=3\\left(\\cos\\frac{\\pi}{3}+i\\sin\\frac{\\pi}{3}\\right)$.",
          parts: [
            { label: "a", prompt: "Find $z_1z_2$ in polar form.", marks: 3 },
            { label: "b", prompt: "Find $\\frac{z_1}{z_2}$ in polar form.", marks: 3 },
            { label: "c", prompt: "Use De Moivre's theorem to find $z_1^3$ in Cartesian form.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "De Moivre", statement: "$z^n=r^n(\\cos n\\theta+i\\sin n\\theta)$." },
            ],
            steps: [
              { part: "a", reasoning: "Multiply moduli: $2\\times3=6$; add arguments: $\\frac{\\pi}{6}+\\frac{\\pi}{3}=\\frac{\\pi}{2}$.", working: "6cis(\\pi/2)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State $z_1z_2=6\\left(\\cos\\frac{\\pi}{2}+i\\sin\\frac{\\pi}{2}\\right)=6i$.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Verify $6i$ is correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide moduli: $\\frac23$; subtract arguments: $\\frac{\\pi}{6}-\\frac{\\pi}{3}=-\\frac{\\pi}{6}$.", working: "(2/3)cis(-\\pi/6)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State result.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Equivalent positive-argument form $\\frac23\\left(\\cos\\frac{11\\pi}{6}+i\\sin\\frac{11\\pi}{6}\\right)$ accepted.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$z_1^3=2^3\\left(\\cos\\frac{\\pi}{2}+i\\sin\\frac{\\pi}{2}\\right)=8i$.", working: "8i", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Convert: $\\cos\\frac{\\pi}{2}=0$, $\\sin\\frac{\\pi}{2}=1$.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State $z_1^3=8i$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Check: $z_1=\\sqrt3+i$, cube should have modulus 8 and argument $\\frac{\\pi}{2}$ ✓.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $6i$ (b) $\\frac23\\left(\\cos\\frac{\\pi}{6}-i\\sin\\frac{\\pi}{6}\\right)$ (c) $8i$",
            commonErrors: ["Adding instead of multiplying moduli.", "Subtracting arguments in the wrong order."],
          },
        },
      ],
    },
    {
      id: "edxifm-u1-cx-roots",
      title: "Roots of complex equations and loci",
      skill: "Find roots of equations like $z^n=w$ using De Moivre and describe loci including perpendicular bisectors.",
      lesson: {
        sections: [
          {
            heading: "nth roots",
            body: "To solve $z^n=w$: write $w$ in polar form $Re^{i\\phi}$, then $z=r(\\cos\\theta+i\\sin\\theta)$ with $r^n=R$ and $n\\theta=\\phi+2k\\pi$, giving $n$ distinct roots spaced $\\frac{2\\pi}{n}$ apart.",
          },
          {
            heading: "Sum of roots",
            body: "The $n$ roots of $z^n=w$ form a regular $n$-gon on a circle centred at the origin. Their sum is $0$ (for $n\\ge2$), and they are equally spaced in argument.",
          },
          {
            heading: "More loci",
            body: "$\\arg\\left(\\frac{z-a}{z-b}\\right)=\\theta$ is an arc of a circle through $a$ and $b$. $|z-a|+|z-b|=k$ is an ellipse with foci $a,b$.",
          },
        ],
        keyFormulas: [
          { name: "nth roots", statement: "$z=R^{1/n}\\left(\\cos\\frac{\\phi+2k\\pi}{n}+i\\sin\\frac{\\phi+2k\\pi}{n}\\right)$, $k=0,1,\\ldots,n-1$" },
        ],
        workedExample: {
          problem: "Solve $z^4=-4$.",
          solution: "$-4=4(\\cos\\pi+i\\sin\\pi)$. Roots: $\\sqrt2\\left(\\cos\\frac{\\pi+2k\\pi}{4}+i\\sin\\frac{\\pi+2k\\pi}{4}\\right)$ for $k=0,1,2,3$: arguments $\\frac{\\pi}{4},\\frac{3\\pi}{4},\\frac{5\\pi}{4},\\frac{7\\pi}{4}$. Roots: $1+i$, $-1+i$, $-1-i$, $1-i$.",
        },
      },
      questions: [
        {
          id: "edxifm-cxr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many distinct solutions does $z^3=8$ have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6$" },
              { id: "b", text: "$3$" },
              { id: "c", text: "$2$" },
              { id: "d", text: "$1$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "theorem", name: "nth roots", statement: "$z^n=w$ has exactly $n$ distinct roots." }],
            steps: [{ reasoning: "Cubic has three cube roots.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $3$",
          },
        },
        {
          id: "edxifm-cxr-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the cube roots of $-8i$, giving answers in Cartesian form.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "theorem", name: "nth roots", statement: "Roots of $z^3=w$ spaced $\\frac{2\\pi}{3}$ apart." }],
            steps: [
              { reasoning: "$-8i=8\\left(\\cos\\frac{3\\pi}{2}+i\\sin\\frac{3\\pi}{2}\\right)$ or $8e^{-i\\pi/2}$.", working: "8cis(-\\pi/2)", marks: 1, markCode: "M" },
              { reasoning: "Roots have modulus $2$ and arguments $\\frac{-\\pi/2+2k\\pi}{3}$: $-\\frac{\\pi}{6}$, $\\frac{\\pi}{2}$, $\\frac{7\\pi}{6}$.", working: "args", marks: 1, markCode: "M" },
              { reasoning: "Roots: $2\\left(\\cos(-\\frac{\\pi}{6})+i\\sin(-\\frac{\\pi}{6})\\right)=\\sqrt3-i$; $2i$; $-\\sqrt3-i$.", working: "\\sqrt3-i,\\ 2i,\\ -\\sqrt3-i", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\sqrt3-i$, $2i$, $-\\sqrt3-i$",
            commonErrors: ["Using degrees; missing roots."],
          },
        },
        {
          id: "edxifm-cxr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Sketch and describe the locus $|z-1|=|z+1|$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Perpendicular bisector", statement: "$|z-a|=|z-b|$ is the perpendicular bisector of $AB$." }],
            steps: [
              { reasoning: "Points equidistant from $1$ and $-1$ on the real axis.", marks: 1, markCode: "M" },
              { reasoning: "Locus is the imaginary axis ($x=0$).", working: "x=0", marks: 1, markCode: "M" },
              { reasoning: "Describe: vertical line through origin.", marks: 1, markCode: "A" },
              { reasoning: "Verify: $z=iy$ gives $|iy-1|=|iy+1|=\\sqrt{1+y^2}$ ✓.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The imaginary axis",
            commonErrors: ["Drawing a circle instead of a line."],
          },
        },
        {
          id: "edxifm-cxr-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The complex number $w$ satisfies $w^3=8i$.",
          parts: [
            { label: "a", prompt: "Find the three cube roots of $8i$ in polar form.", marks: 4 },
            { label: "b", prompt: "Show that the roots form an equilateral triangle and find its area.", marks: 4 },
            { label: "c", prompt: "Find the product of the three roots.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "nth roots", statement: "$n$ roots equally spaced on circle of radius $R^{1/n}$." },
            ],
            steps: [
              { part: "a", reasoning: "$8i=8\\left(\\cos\\frac{\\pi}{2}+i\\sin\\frac{\\pi}{2}\\right)$; modulus $2$, arguments $\\frac{\\pi}{6}$, $\\frac{5\\pi}{6}$, $\\frac{3\\pi}{2}$.", working: "args", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Roots: $2\\left(\\cos\\frac{\\pi}{6}+i\\sin\\frac{\\pi}{6}\\right)=\\sqrt3+i$; $2\\left(\\cos\\frac{5\\pi}{6}+i\\sin\\frac{5\\pi}{6}\\right)=-\\sqrt3+i$; $2\\left(\\cos\\frac{3\\pi}{2}+i\\sin\\frac{3\\pi}{2}\\right)=-2i$.", working: "3 roots", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State polar forms.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Verify each cubes to $8i$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Roots on circle radius 2, arguments differ by $\\frac{2\\pi}{3}$ — equilateral triangle inscribed in circle.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Side length $=2\\sqrt3$ (chord subtending $120^\\circ$).", working: "s=2\\sqrt3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Area $=\\frac{\\sqrt3}{4}s^2=\\frac{\\sqrt3}{4}(12)=3\\sqrt3$.", working: "3\\sqrt3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State area $3\\sqrt3\\approx5.20$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Product of roots of $z^3-8i=0$ is $-(-8i)=8i$? For $z^3+c=0$ product $=-c$; here product $=8i$.", working: "8i", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Verify: $(\\sqrt3+i)(-\\sqrt3+i)(-2i)=(-2)(-2i)=4i$? Compute: $(\\sqrt3+i)(-\\sqrt3+i)=-(\\sqrt3)^2+i^2+\\ldots=-3-1=-4$? Recheck: $(\\sqrt3+i)(-\\sqrt3+i)=-3+\\sqrt3 i-\\sqrt3 i+i^2=-3-1=-4$; times $-2i$ gives $8i$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2\\text{cis}\\frac{\\pi}{6}$, $2\\text{cis}\\frac{5\\pi}{6}$, $2\\text{cis}\\frac{3\\pi}{2}$ (b) equilateral triangle, area $3\\sqrt3$ (c) $8i$",
            commonErrors: ["Wrong arguments; forgetting $k$ ranges over all integers."],
            examinerNote: "Accept area $\\approx5.20$.",
          },
        },
      ],
    },
  ],
};
