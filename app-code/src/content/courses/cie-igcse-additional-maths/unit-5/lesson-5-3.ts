import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "ciam-u5-lesson-5-3",
  code: "5-3",
  title: "Straight-Line Graphs",
  goal: "I CAN linearise curves and interpret straight-line graphs.",
  standards: ["Cambridge IGCSE Additional Mathematics 0606: straight-line graphs"],
  vocabulary: [
    { term: "Linearise", definition: "Rewrite a non-linear relation so it graphs as a straight line." },
    { term: "Gradient", definition: "Steepness of a straight line; rise over run." },
    { term: "y-intercept", definition: "Where the line crosses the y-axis." },
    { term: "Log-log graph", definition: "Graph of log y against log x revealing power laws." },
  ],
  concepts: [
    {
      id: "ciam-u5-s3-linear",
      title: "Linearising and interpreting straight-line graphs",
      skill: "Transform equations into straight-line form and extract constants.",
      lesson: {
        sections: [
          {
            heading: "Why linearise",
            body: "$y = mx + c$ graphs as a straight line — gradients and intercepts give constants directly. Many non-linear equations can be rearranged into this form by choosing axes cleverly: e.g. $y = ax^2 + b$ becomes straight when plotting $y$ against $x^2$.",
          },
          {
            heading: "Common linear forms",
            body: "$y = mx + c$: plot $y$ vs $x$. $y = ax^n + b$: plot $y$ vs $x^n$. $y = a + bx^2$: plot $y$ vs $x^2$. $y = kx^n$ (power law): plot $\\log y$ vs $\\log x$ — gradient is $n$, intercept is $\\log k$. Once straight, read off constants from gradient and intercept.",
          },
        ],
        keyFormulas: [
          { name: "Linear form", statement: "$y = mx + c$" },
          { name: "Power law", statement: "$\\log y = n\\log x + \\log k$" },
        ],
        workedExample: {
          problem: "$y = 3x^2 - 4$. What should you plot to get a straight line, and what are its gradient and intercept?",
          solution: "Plot $y$ against $x^2$: gradient $= 3$, intercept $= -4$.",
        },
      },
      questions: [
        {
          id: "ciam-u5-lg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To linearise $y = 2x^3 + 5$, what should be plotted on the horizontal axis?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x^3$" }, { id: "b", text: "$x^2$" }, { id: "c", text: "$\\log x$" }, { id: "d", text: "$x$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Linearising", statement: "Match the power of x." }],
            steps: [{ reasoning: "Coefficient of $x^3$ ⇒ plot $y$ vs $x^3$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x^3$",
          },
        },
        {
          id: "ciam-u5-lg-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "$y = 4x + 7$ is plotted. State the gradient and y-intercept.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "y = mx + c", statement: "m = gradient, c = intercept." }],
            steps: [
              { reasoning: "Gradient $= 4$, intercept $= 7$.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gradient 4, intercept 7",
          },
        },
        {
          id: "ciam-u5-lg-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "The graph of $y$ against $x^2$ is a straight line with gradient 5 and intercept −2. Find the equation relating y and x.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Reverse linearising", statement: "Read constants then substitute back." }],
            steps: [
              { reasoning: "Straight line: $y = 5x^2 - 2$.", marks: 1, markCode: "M" },
              { reasoning: "Gradient 5 = coefficient of $x^2$.", marks: 1, markCode: "M" },
              { reasoning: "Intercept −2 = constant term.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = 5x^2 - 2$",
          },
        },
        {
          id: "ciam-u5-lg-q4",
          difficulty: "core",
          totalMarks: 5,
          stem: "For $y = kx^n$, plotting $\\log y$ against $\\log x$ gives a line with gradient 2 and intercept 0.301. Find n and k (to 3 s.f.).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Log-log", statement: "$\\log y = n\\log x + \\log k$." }],
            steps: [
              { reasoning: "Gradient = n = 2.", marks: 1, markCode: "M" },
              { reasoning: "Intercept = $\\log k = 0.301$.", marks: 1, markCode: "M" },
              { reasoning: "$k = 10^{0.301} \\approx 2.00$.", marks: 1, markCode: "M" },
              { reasoning: "Using $\\log_{10}$ convention.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $n=2$, $k\\approx 2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n = 2$, $k \\approx 2$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciam-u5-lg-notes",
      title: "Straight-line graphs — revision notes",
      summary: "y vs xⁿ; log-log for power laws.",
      sections: [
        { heading: "Linearising", body: "$y = ax^n + b$ → plot $y$ vs $x^n$; gradient = a, intercept = b." },
        { heading: "Power laws", body: "$y = kx^n$ → plot $\\log y$ vs $\\log x$; gradient = n, intercept = log k." },
      ],
    },
  ],
};
