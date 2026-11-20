import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "edialpm-u3-lesson-3-1",
  code: "3-1",
  title: "Trigonometric Identities and Equations",
  goal: "I CAN use trigonometric identities including double-angle and $R\\sin(\\theta+\\alpha)$ forms, and solve trigonometric equations in radians.",
  standards: ["WMA13 P3", "Trigonometry"],
  vocabulary: [
    { term: "Trigonometric identity", definition: "An equation true for all values of the variable, e.g. $\\sin^2\\theta+\\cos^2\\theta=1$." },
    { term: "Double-angle formulae", definition: "$\\sin2\\theta=2\\sin\\theta\\cos\\theta$, $\\cos2\\theta=\\cos^2\\theta-\\sin^2\\theta=2\\cos^2\\theta-1=1-2\\sin^2\\theta$." },
    { term: "Compound angle form", definition: "$R\\sin(\\theta+\\alpha)=R\\sin\\theta\\cos\\alpha+R\\cos\\theta\\sin\\alpha$; used to write $a\\sin\\theta+b\\cos\\theta$ as a single sine." },
    { term: "Principal value", definition: "The first/in-range solution of a trig equation, found using inverse trig functions or the unit circle." },
  ],
  concepts: [
    {
      id: "edialpm-u3-trig-identities",
      title: "Identities and the compound angle form",
      skill: "Apply the Pythagorean, double-angle and compound-angle identities, and express $a\\sin\\theta+b\\cos\\theta$ in the form $R\\sin(\\theta+\\alpha)$ or $R\\cos(\\theta-\\alpha)$.",
      lesson: {
        sections: [
          {
            heading: "Key identities",
            body: "The Pythagorean identity $\\sin^2\\theta+\\cos^2\\theta=1$ generates the double-angle formulae for $\\cos2\\theta$. The compound angle formulae expand $\\sin(\\theta\\pm\\alpha)$ and $\\cos(\\theta\\pm\\alpha)$; rearranged they give $\\sin\\theta\\cos\\alpha\\pm\\cos\\theta\\sin\\alpha$.",
          },
          {
            heading: "Writing as $R\\sin(\\theta+\\alpha)$",
            body: "For $a\\sin\\theta+b\\cos\\theta$, set $R=\\sqrt{a^2+b^2}$ and $\\tan\\alpha=\\frac{b}{a}$ with $\\alpha$ in the correct quadrant. Then $a\\sin\\theta+b\\cos\\theta=R\\sin(\\theta+\\alpha)$. This is used to find maxima/minima and to solve equations.",
          },
          {
            heading: "Choosing $\\alpha$",
            body: "Check signs carefully: $\\sin\\alpha=\\frac{b}{R}$ and $\\cos\\alpha=\\frac{a}{R}$ determine the quadrant of $\\alpha$. For $a\\sin\\theta-b\\cos\\theta$ use $R\\sin(\\theta-\\alpha)$.",
          },
        ],
        keyFormulas: [
          { name: "Double angle", statement: "$\\sin2\\theta=2\\sin\\theta\\cos\\theta$; $\\cos2\\theta=2\\cos^2\\theta-1=1-2\\sin^2\\theta$" },
          { name: "Compound form", statement: "$a\\sin\\theta+b\\cos\\theta=R\\sin(\\theta+\\alpha)$, $R=\\sqrt{a^2+b^2}$, $\\tan\\alpha=\\frac{b}{a}$" },
        ],
        workedExample: {
          problem: "Express $3\\sin\\theta+4\\cos\\theta$ in the form $R\\sin(\\theta+\\alpha)$.",
          solution: "$R=\\sqrt{9+16}=5$, $\\tan\\alpha=\\frac{4}{3}$ with $\\alpha$ acute, so $\\alpha=\\arctan(\\frac43)\\approx0.927$ rad. Result: $5\\sin(\\theta+0.927)$.",
        },
      },
      questions: [
        {
          id: "edialpm-u3-trig-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of $\\sin^2 30^\\circ+\\cos^2 30^\\circ$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$" },
              { id: "b", text: "$0.5$" },
              { id: "c", text: "$0.75$" },
              { id: "d", text: "$2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pythagorean identity", statement: "$\\sin^2\\theta+\\cos^2\\theta=1$ for all $\\theta$." },
            ],
            steps: [
              { reasoning: "The identity holds for every angle.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $1$",
            commonErrors: ["Thinking the value depends on the angle."],
          },
        },
        {
          id: "edialpm-u3-trig-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Express $\\sin 2\\theta$ in terms of $\\sin\\theta$ only.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Double angle", statement: "$\\sin2\\theta=2\\sin\\theta\\cos\\theta$ and $\\cos\\theta=\\sqrt{1-\\sin^2\\theta}$." },
            ],
            steps: [
              { reasoning: "Start from the double-angle formula.", working: "\\sin2\\theta=2\\sin\\theta\\cos\\theta", marks: 1, markCode: "M" },
              { reasoning: "Substitute $\\cos\\theta=\\sqrt{1-\\sin^2\\theta}$.", working: "=2\\sin\\theta\\sqrt{1-\\sin^2\\theta}", marks: 1, markCode: "M" },
              { reasoning: "State the result.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\sin2\\theta=2\\sin\\theta\\sqrt{1-\\sin^2\\theta}$",
            commonErrors: ["Dropping the square root or sign."],
          },
        },
        {
          id: "edialpm-u3-trig-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write $5\\sin\\theta-12\\cos\\theta$ in the form $R\\sin(\\theta-\\alpha)$, giving $R$ and $\\alpha$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compound form", statement: "$a\\sin\\theta+b\\cos\\theta=R\\sin(\\theta+\\alpha)$ with $\\tan\\alpha=\\frac{b}{a}$." },
            ],
            steps: [
              { reasoning: "$R=\\sqrt{25+144}=13$.", working: "R=13", marks: 1, markCode: "M" },
              { reasoning: "Write as $R\\sin(\\theta-\\alpha)$: $\\sin(\\theta-\\alpha)=\\sin\\theta\\cos\\alpha-\\cos\\theta\\sin\\alpha$, so $R\\cos\\alpha=5$, $R\\sin\\alpha=12$.", working: "\\cos\\alpha=\\tfrac{5}{13},\\ \\sin\\alpha=\\tfrac{12}{13}", marks: 1, markCode: "M" },
              { reasoning: "$\\alpha=\\arctan(\\frac{12}{5})\\approx1.176$ rad (first quadrant).", working: "\\alpha\\approx1.176", marks: 1, markCode: "M" },
              { reasoning: "State the result.", working: "13\\sin(\\theta-1.176)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$13\\sin(\\theta-1.176)$ with $R=13$, $\\alpha\\approx1.176$ rad",
            commonErrors: ["Wrong sign in $\\alpha$.", "Using $\\arctan(\\frac{5}{12})$."],
          },
        },
        {
          id: "edialpm-u3-trig-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Consider $f(\\theta)=2\\sin\\theta+3\\cos\\theta$ for $0\\le\\theta<2\\pi$.",
          parts: [
            { label: "a", prompt: "Express $f(\\theta)$ in the form $R\\sin(\\theta+\\alpha)$.", marks: 3 },
            { label: "b", prompt: "Hence write down the maximum value of $f$ and the value of $\\theta$ at which it occurs.", marks: 3 },
            { label: "c", prompt: "Solve $f(\\theta)=2$ for $0\\le\\theta<2\\pi$, giving answers to 3 significant figures.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compound form", statement: "$R=\\sqrt{a^2+b^2}$, $\\tan\\alpha=\\frac{b}{a}$." },
              { kind: "property", name: "Range of sine", statement: "$-R\\le R\\sin(\\theta+\\alpha)\\le R$." },
            ],
            steps: [
              { part: "a", reasoning: "$R=\\sqrt{4+9}=\\sqrt{13}\\approx3.61$; $\\tan\\alpha=\\frac{3}{2}$, $\\alpha\\approx0.983$ rad.", working: "R=\\sqrt{13},\\ \\alpha=0.983", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Verify $\\cos\\alpha=\\frac{2}{\\sqrt{13}}$, $\\sin\\alpha=\\frac{3}{\\sqrt{13}}$ — correct quadrant.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State $f(\\theta)=\\sqrt{13}\\sin(\\theta+0.983)$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Maximum value is $R=\\sqrt{13}\\approx3.61$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Maximum when $\\sin(\\theta+\\alpha)=1$, i.e. $\\theta+\\alpha=\\frac{\\pi}{2}$, so $\\theta=\\frac{\\pi}{2}-0.983\\approx0.588$ rad.", working: "\\theta\\approx0.588", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State max and location.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Solve $\\sqrt{13}\\sin(\\theta+0.983)=2$: $\\sin(\\theta+0.983)=\\frac{2}{\\sqrt{13}}=0.555$.", working: "\\sin(\\theta+\\alpha)=0.555", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$\\theta+\\alpha=0.588$ or $\\pi-0.588=2.554$; subtract $\\alpha=0.983$.", working: "\\theta=-0.395\\text{ or }1.571", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Add $2\\pi$ to the negative solution: $\\theta=5.888$ or $1.571$ rad (3 s.f.).", working: "\\theta=1.57,\\ 5.89", marks: 1, markCode: "A" },
              { part: "c", reasoning: "State both solutions in range.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\sqrt{13}\\sin(\\theta+0.983)$ (b) max $\\sqrt{13}\\approx3.61$ at $\\theta\\approx0.588$ (c) $\\theta\\approx1.57$ or $5.89$ rad",
            commonErrors: ["Wrong quadrant for $\\alpha$.", "Forgetting to add $2\\pi$ for negative angles.", "Using degrees."],
            examinerNote: "Accept $\\theta=1.6$ and $5.9$ at 2 s.f.; radians required.",
          },
        },
      ],
    },
    {
      id: "edialpm-u3-trig-equations",
      title: "Solving trigonometric equations",
      skill: "Solve equations involving sine, cosine and tangent in radians, including quadratics in trig functions and equations requiring identities first.",
      lesson: {
        sections: [
          {
            heading: "Basic strategy",
            body: "Isolate the trig function, find the principal value with the inverse function, then use the unit circle / graph to find all solutions in the required interval. For $\\sin\\theta=k$ solutions are $\\theta=\\arcsin k$ and $\\pi-\\arcsin k$ (plus period multiples); for $\\cos\\theta=k$ they are $\\pm\\arccos k$; for $\\tan\\theta=k$ just $\\arctan k$ plus $\\pi$.",
          },
          {
            heading: "Quadratics in trig functions",
            body: "Equations like $2\\sin^2\\theta-\\sin\\theta-1=0$ are solved by substituting $u=\\sin\\theta$, solving the quadratic, then solving each resulting trig equation. Reject solutions outside $[-1,1]$ for $\\sin$/$\\cos$.",
          },
          {
            heading: "Using identities first",
            body: "Equations mixing $\\sin2\\theta$ and $\\sin\\theta$ (or $\\cos2\\theta$) need an identity to reduce to a single function — usually the double-angle formulae — then factorise or solve the quadratic.",
          },
        ],
        keyFormulas: [
          { name: "Sine solutions", statement: "$\\sin\\theta=k$: $\\theta=\\arcsin k$ or $\\pi-\\arcsin k$" },
          { name: "Cosine solutions", statement: "$\\cos\\theta=k$: $\\theta=\\pm\\arccos k$" },
        ],
        workedExample: {
          problem: "Solve $2\\cos^2\\theta-\\sin\\theta=1$ for $0\\le\\theta<2\\pi$.",
          solution: "Use $\\cos^2\\theta=1-\\sin^2\\theta$: $2(1-\\sin^2\\theta)-\\sin\\theta=1$, so $2\\sin^2\\theta+\\sin\\theta-1=0$. Factorise: $(2\\sin\\theta-1)(\\sin\\theta+1)=0$. $\\sin\\theta=\\frac12$ gives $\\theta=\\frac{\\pi}{6},\\frac{5\\pi}{6}$; $\\sin\\theta=-1$ gives $\\theta=\\frac{3\\pi}{2}$.",
        },
      },
      questions: [
        {
          id: "edialpm-u3-trigeq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many solutions does $\\sin\\theta=0.5$ have in $0\\le\\theta<2\\pi$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "$1$" },
              { id: "c", text: "$4$" },
              { id: "d", text: "$3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sine graph", statement: "In one period, $\\sin\\theta=k$ has two solutions for $|k|<1$." },
            ],
            steps: [
              { reasoning: "$\\sin\\theta=0.5$ at $\\frac{\\pi}{6}$ and $\\frac{5\\pi}{6}$ — two solutions.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $2$",
            commonErrors: ["Forgetting the second quadrant solution."],
          },
        },
        {
          id: "edialpm-u3-trigeq-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $\\cos\\theta=-\\frac{\\sqrt{3}}{2}$ for $0\\le\\theta<2\\pi$, giving exact answers.",
          response: {
            type: "numeric",
            parts: [
              { label: "first solution", answer: 2.618, tolerance: 0.001 },
              { label: "second solution", answer: 3.665, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Cosine solutions", statement: "$\\cos\\theta=k$: $\\theta=\\pm\\arccos k$ plus period multiples." },
            ],
            steps: [
              { reasoning: "Principal value: $\\arccos(-\\frac{\\sqrt3}{2})=\\frac{5\\pi}{6}\\approx2.618$ rad.", working: "2.618", marks: 1, markCode: "M" },
              { reasoning: "Second solution from symmetry: $2\\pi-2.618=3.665$ rad, i.e. $\\frac{7\\pi}{6}$.", working: "3.665", marks: 1, markCode: "M" },
              { reasoning: "State both solutions in $[0,2\\pi)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\theta=\\frac{5\\pi}{6}$ or $\\frac{7\\pi}{6}$ ($2.62$, $3.67$ rad)",
            commonErrors: ["Sign error in arccos.", "Missing the negative-angle solution."],
          },
        },
        {
          id: "edialpm-u3-trigeq-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $2\\sin^2\\theta+\\cos\\theta=1$ for $0\\le\\theta<2\\pi$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pythagorean", statement: "$\\sin^2\\theta=1-\\cos^2\\theta$." },
            ],
            steps: [
              { reasoning: "Substitute $\\sin^2\\theta=1-\\cos^2\\theta$: $2(1-\\cos^2\\theta)+\\cos\\theta=1$.", working: "2-2\\cos^2\\theta+\\cos\\theta=1", marks: 1, markCode: "M" },
              { reasoning: "Rearrange: $2\\cos^2\\theta-\\cos\\theta-1=0$; factorise $(2\\cos\\theta+1)(\\cos\\theta-1)=0$.", working: "\\cos\\theta=-\\tfrac12\\text{ or }1", marks: 1, markCode: "M" },
              { reasoning: "$\\cos\\theta=1\\Rightarrow\\theta=0$; $\\cos\\theta=-\\frac12\\Rightarrow\\theta=\\frac{2\\pi}{3},\\frac{4\\pi}{3}$.", working: "0,\\ 2.094,\\ 4.189", marks: 1, markCode: "M" },
              { reasoning: "State all three solutions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\theta=0,\\ \\frac{2\\pi}{3},\\ \\frac{4\\pi}{3}$",
            commonErrors: ["Substituting the wrong identity.", "Losing the $\\cos\\theta=1$ solution."],
          },
        },
        {
          id: "edialpm-u3-trigeq-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Solve $\\sin2\\theta=\\cos\\theta$ for $0\\le\\theta<2\\pi$.",
          parts: [
            { label: "a", prompt: "Use a double-angle identity to rewrite the equation in terms of $\\sin\\theta$ and $\\cos\\theta$ only.", marks: 2 },
            { label: "b", prompt: "Factorise and solve, giving exact answers.", marks: 5 },
            { label: "c", prompt: "Verify your solutions satisfy the original equation.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Double angle", statement: "$\\sin2\\theta=2\\sin\\theta\\cos\\theta$." },
            ],
            steps: [
              { part: "a", reasoning: "$2\\sin\\theta\\cos\\theta=\\cos\\theta$.", working: "2\\sin\\theta\\cos\\theta=\\cos\\theta", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State rewritten equation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rearrange: $\\cos\\theta(2\\sin\\theta-1)=0$.", working: "\\cos\\theta(2\\sin\\theta-1)=0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$\\cos\\theta=0$: $\\theta=\\frac{\\pi}{2},\\frac{3\\pi}{2}$.", working: "1.571,\\ 4.712", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$\\sin\\theta=\\frac12$: $\\theta=\\frac{\\pi}{6},\\frac{5\\pi}{6}$.", working: "0.524,\\ 2.618", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Collect all four solutions in $[0,2\\pi)$.", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Check $\\theta=\\frac{\\pi}{2}$: $\\sin\\pi=0$, $\\cos\\frac{\\pi}{2}=0$ ✓; $\\theta=\\frac{3\\pi}{2}$: $\\sin3\\pi=0$, $\\cos\\frac{3\\pi}{2}=0$ ✓.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Check $\\theta=\\frac{\\pi}{6}$: $\\sin\\frac{\\pi}{3}=\\frac{\\sqrt3}{2}$, $\\cos\\frac{\\pi}{6}=\\frac{\\sqrt3}{2}$ ✓; similarly $\\frac{5\\pi}{6}$ gives $\\sin\\frac{5\\pi}{3}=-\\frac{\\sqrt3}{2}$, $\\cos\\frac{5\\pi}{6}=-\\frac{\\sqrt3}{2}$ ✓.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State verification complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\theta=\\frac{\\pi}{6},\\frac{\\pi}{2},\\frac{5\\pi}{6},\\frac{3\\pi}{2}$",
            commonErrors: ["Dividing by $\\cos\\theta$ and losing solutions.", "Missing solutions in $[0,2\\pi)$."],
            examinerNote: "Do NOT divide both sides by $\\cos\\theta$ — factorise instead.",
          },
        },
      ],
    },
  ],
};
