import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "olam-u5-lesson-5-3",
  code: "5-3",
  title: "Straight-Line Graphs",
  goal: "I CAN linearise curves and interpret straight-line graphs.",
  standards: ["Cambridge O Level Additional Mathematics 4037: straight-line graphs"],
  vocabulary: [
    { term: "Linearise", definition: "Rewrite a non-linear relation so it graphs as a straight line." },
    { term: "Gradient", definition: "Steepness of a straight line; rise over run." },
    { term: "y-intercept", definition: "Where the line crosses the y-axis." },
    { term: "Log-log graph", definition: "Graph of log y against log x revealing power laws." },
  ],
  concepts: [
    {
      id: "olam-u5-s3-linear",
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
          id: "olam-u5-lg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To linearise $y = 2x^3 + 5$, what should be plotted on the horizontal axis?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x^3$" },
            { id: "b", text: "$\\log x$" },
            { id: "c", text: "$x$" },
            { id: "d", text: "$x^2$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Linearising", statement: "Match the power of x." }],
            steps: [{ reasoning: "Coefficient of $x^3$ ⇒ plot $y$ vs $x^3$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x^3$",
          },
        },
        {
          id: "olam-u5-lg-q2",
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
          id: "olam-u5-lg-q3",
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
          id: "olam-u5-lg-q4",
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
        {
          id: "olam-u5-lg-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To get a straight line from $y = 5x^2 - 3$, plot $y$ against…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\log x$" },
            { id: "b", text: "$x^2$" },
            { id: "c", text: "$x$" },
            { id: "d", text: "$x^3$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Linearising", statement: "Match the power of $x$." }],
            steps: [{ reasoning: "$x^2$ term ⇒ plot $y$ vs $x^2$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x^2$",
          },
        },
        {
          id: "olam-u5-lg-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The graph of $y$ against $x^2$ is a straight line with gradient $4$ and intercept $1$. Find the value of $y$ when $x = 2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 17 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Reverse linearising", statement: "$y = 4x^2 + 1$." }],
            steps: [
              { reasoning: "$y = 4x^2 + 1$; at $x=2$: $y = 4(4)+1 = 17$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 17.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "17",
          },
        },
        {
          id: "olam-u5-lg-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "For $y = kx^n$, the gradient of the $\\log y$ vs $\\log x$ graph gives…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$n$" },
            { id: "b", text: "$k$" },
            { id: "c", text: "$\\log k$" },
            { id: "d", text: "$n+k$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "Log-log", statement: "$\\log y = n\\log x + \\log k$." }],
            steps: [{ reasoning: "Gradient $= n$; intercept $= \\log k$.", marks: 1, markCode: "A" }],
            finalAnswer: "$n$",
          },
        },
        {
          id: "olam-u5-lg-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "A straight-line graph of $y$ against $x^3$ has gradient $-2$ and intercept $5$. Find the equation relating $y$ and $x$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Reverse linearising", statement: "Read constants then substitute back." }],
            steps: [
              { reasoning: "Straight line: $y = -2x^3 + 5$.", marks: 1, markCode: "M" },
              { reasoning: "Gradient $-2$ = coefficient of $x^3$; intercept $5$ = constant.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $y = -2x^3 + 5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = -2x^3 + 5$",
          },
        },
        {
          id: "olam-u5-lg-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $y = kx^n$, a $\\log y$ vs $\\log x$ graph has intercept $0.477$. Find $k$ to 3 s.f.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Log-log", statement: "Intercept $= \\log k$." }],
            steps: [
              { reasoning: "$\\log k = 0.477$ → $k = 10^{0.477} \\approx 3.00$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $k \\approx 3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k \\approx 3$",
          },
        },
        {
          id: "olam-u5-lg-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "To linearise $y = \\frac{4}{x} + 1$, the horizontal axis should be…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x^2$" },
            { id: "b", text: "$x$" },
            { id: "c", text: "$\\frac{1}{x}$" },
            { id: "d", text: "$\\log x$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Linearising", statement: "Rewrite as $y = 4(\\frac1x)+1$." }],
            steps: [{ reasoning: "$\\frac1x$ is the variable power ⇒ plot $y$ vs $\\frac1x$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{1}{x}$",
          },
        },
        {
          id: "olam-u5-lg-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $y = kx^n$, plotting $\\log y$ against $\\log x$ gives gradient $3$ and intercept $0.602$. Find $n$ and $k$ to 3 s.f.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Log-log", statement: "$\\log y = n\\log x + \\log k$." }],
            steps: [
              { reasoning: "Gradient $= n = 3$.", marks: 1, markCode: "M" },
              { reasoning: "Intercept $= \\log k = 0.602$.", marks: 1, markCode: "M" },
              { reasoning: "$k = 10^{0.602} \\approx 4.00$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $n=3$, $k \\approx 4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n = 3$, $k \\approx 4$",
          },
        },
        {
          id: "olam-u5-lg-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The graph of $y$ against $x^2$ is a straight line with gradient $-1$ and y-intercept $7$. State the gradient and intercept of this line.",
          response: { type: "numeric", parts: [
            { label: "a", answer: -1 }, { label: "b", answer: 7 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "y = mx + c", statement: "Gradient and intercept read directly." }],
            steps: [
              { reasoning: "Gradient $= -1$, intercept $= 7$ by definition.", marks: 1, markCode: "M" },
              { reasoning: "Answers: $-1$ and $7$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gradient $-1$, intercept $7$",
          },
        },
        {
          id: "olam-u5-lg-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "On a straight-line graph of $y$ against $x^2$, the y-intercept represents…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The constant term in $y = ax^2 + b$" },
            { id: "b", text: "$\\log k$" },
            { id: "c", text: "The value of $x$ when $y=0$" },
            { id: "d", text: "The coefficient of $x^2$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Linearising", statement: "$y = ax^2 + b$: intercept $= b$." }],
            steps: [{ reasoning: "Intercept is the constant $b$; gradient is $a$.", marks: 1, markCode: "A" }],
            finalAnswer: "The constant term $b$",
          },
        },
        {
          id: "olam-u5-lg-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $y = ax^2 + b$, the graph of $y$ against $x^2$ has gradient $6$ and passes through $(4, 30)$. Find $a$ and $b$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Reverse linearising", statement: "Gradient $= a$; use point for $b$." }],
            steps: [
              { reasoning: "Gradient $= a = 6$, so $y = 6x^2 + b$.", marks: 1, markCode: "M" },
              { reasoning: "At $x=4$, $x^2=16$, $y=30$: $30 = 6(16) + b$ → $b = -66$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $a=6$, $b=-66$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a = 6$, $b = -66$",
          },
        },
        {
          id: "olam-u5-lg-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "The graph of $y$ against $x^2$ is a straight line with gradient $-1$ and intercept $5$. Find $y$ when $x = 3$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -4 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Reverse linearising", statement: "$y = -x^2 + 5$." }],
            steps: [
              { reasoning: "$y = -x^2 + 5$; at $x=3$: $y = -9 + 5 = -4$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $-4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-4$",
          },
        },
        {
          id: "olam-u5-lg-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "$y = kx^n$ is linearised by plotting $\\log y$ against $\\log x$. The line passes through $(0.301, 0.903)$ and $(0.602, 1.204)$. Find $n$ and $k$ to 3 s.f.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Log-log gradient", statement: "$n = \\frac{\\Delta\\log y}{\\Delta\\log x}$, intercept $= \\log k$." }],
            steps: [
              { reasoning: "Gradient $n = \\frac{1.204-0.903}{0.602-0.301} = \\frac{0.301}{0.301} = 1$.", marks: 1, markCode: "M" },
              { reasoning: "Intercept: $\\log k = 0.903 - 1(0.301) = 0.602$.", marks: 1, markCode: "M" },
              { reasoning: "$k = 10^{0.602} \\approx 4.00$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $n=1$, $k \\approx 4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n = 1$, $k \\approx 4$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olam-u5-lg-notes",
      title: "Straight-line graphs — revision notes",
      summary: "y vs xⁿ; log-log for power laws.",
      sections: [
        { heading: "Linearising", body: "$y = ax^n + b$ → plot $y$ vs $x^n$; gradient = a, intercept = b." },
        { heading: "Power laws", body: "$y = kx^n$ → plot $\\log y$ vs $\\log x$; gradient = n, intercept = log k." },
      ],
    },
  ],
};
