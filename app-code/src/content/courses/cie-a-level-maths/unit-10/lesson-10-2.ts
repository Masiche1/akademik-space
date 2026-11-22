import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "cial-m-u10-lesson-10-2",
  code: "10-2",
  title: "Newton-Raphson and the Trapezium Rule",
  goal: "I CAN apply Newton-Raphson iteration and numerical integration.",
  standards: ["Cambridge A Level Mathematics 9709: numerical methods"],
  vocabulary: [
    { term: "Newton-Raphson", definition: "Iteration $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$ converging fast to a root." },
    { term: "Trapezium rule", definition: "Approximate $\\int_a^b f(x)dx$ using trapezia of width h." },
    { term: "Strip", definition: "One trapezium in a numerical integration." },
    { term: "Stationary point", definition: "Where $\\frac{dy}{dx} = 0$; Newton-Raphson fails here." },
  ],
  concepts: [
    {
      id: "cial-m-u10-newton",
      title: "Newton-Raphson method",
      skill: "Use Newton-Raphson iteration to find roots.",
      lesson: {
        sections: [
          {
            heading: "The formula",
            body: "$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$. Each iterate uses the tangent at $(x_n, f(x_n))$ to jump to the x-axis — much faster convergence than simple iteration. Needs $f'(x) \\neq 0$ near the root; fails or stalls at stationary points where $f'(x)=0$.",
          },
          {
            heading: "Trapezium rule",
            body: "Divide $[a,b]$ into n equal strips of width $h = \\frac{b-a}{n}$. Approximate: $\\int_a^b f(x)\\,dx \\approx \\frac{h}{2}\\left[f(x_0) + f(x_n) + 2\\sum_{i=1}^{n-1} f(x_i)\\right]$ — endpoints count once, interior points twice. More strips ⇒ better accuracy.",
          },
        ],
        keyFormulas: [
          { name: "Newton-Raphson", statement: "$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$" },
          { name: "Trapezium rule", statement: "$\\frac{h}{2}[y_0 + y_n + 2(y_1+\\cdots+y_{n-1})]$" },
        ],
        workedExample: {
          problem: "Use Newton-Raphson on $f(x) = x^3 - 2x - 5$, $x_0 = 2$, to find the root.",
          solution: "$f'(x)=3x^2-2$. $x_1 = 2 - \\frac{-1}{10} = 2.1$; $x_2 \\approx 2.0946$; converges to ≈ 2.0946.",
        },
      },
      questions: [
        {
          id: "cial-m-u10-nr-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write down the Newton-Raphson iteration formula.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Newton-Raphson", statement: "x − f/f′." }],
            steps: [
              { reasoning: "$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$.", marks: 1, markCode: "M" },
              { reasoning: "Correct formula.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$",
          },
        },
        {
          id: "cial-m-u10-nr-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "For $f(x) = x^2 - 3$ with $x_0 = 2$, find $x_1$ using Newton-Raphson.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Newton-Raphson", statement: "Evaluate f and f′ at x₀." }],
            steps: [
              { reasoning: "$f(2) = 1$, $f'(x) = 2x$, $f'(2) = 4$.", marks: 1, markCode: "M" },
              { reasoning: "$x_1 = 2 - \\frac{1}{4} = 1.75$.", marks: 1, markCode: "M" },
              { reasoning: "Iteration applied correctly.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1.75.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x_1 = 1.75$",
          },
        },
        {
          id: "cial-m-u10-nr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Estimate $\\int_0^2 x^2\\,dx$ using the trapezium rule with 4 strips (h = 0.5). Values: f(0)=0, f(0.5)=0.25, f(1)=1, f(1.5)=2.25, f(2)=4.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Trapezium rule", statement: "h/2[endpoints + 2×interior]." }],
            steps: [
              { reasoning: "$\\frac{0.5}{2}[0 + 4 + 2(0.25+1+2.25)] = 0.25 \\times 10 = 2.5$.", marks: 1, markCode: "M" },
              { reasoning: "Bracket and arithmetic correct.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2.5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2.5",
          },
        },
        {
          id: "cial-m-u10-nr-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why Newton-Raphson may fail when solving $f(x) = x^3 - 3x + 1 = 0$ near a stationary point, and how the trapezium rule's accuracy depends on n.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Limitations", statement: "f′=0 stalls NR; more strips ⇒ better trapezium." }],
            steps: [
              { reasoning: "At a stationary point $f'(x)=0$, so the correction term $f/f'$ is undefined or huge.", marks: 2, markCode: "M" },
              { reasoning: "Iterates can cycle or diverge instead of converging.", marks: 1, markCode: "M" },
              { reasoning: "Trapezium error shrinks as h decreases (more strips n).", marks: 1, markCode: "M" },
              { reasoning: "Answer explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "NR fails at f′=0; trapezium improves with more strips",
          },
        },
        {
          id: "cial-m-u10-nr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To apply one step of Newton-Raphson to $f(x) = 0$, what must be evaluated at $x_n$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only $f(x_n)$" },
            { id: "b", text: "Only $f''(x_n)$" },
            { id: "c", text: "Both $f(x_n)$ and $f'(x_n)$" },
            { id: "d", text: "Only $f'(x_n)$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "formula", name: "Newton-Raphson", statement: "Needs f and f′." }],
            steps: [{ reasoning: "The formula $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$ requires both values.", marks: 1, markCode: "M" }],
            finalAnswer: "**(a)** Both $f(x_n)$ and $f'(x_n)$",
          },
        },
        {
          id: "cial-m-u10-nr-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Estimate $\\int_0^1 x^2\\,dx$ using the trapezium rule with 2 strips (h = 0.5). Values: f(0)=0, f(0.5)=0.25, f(1)=1.",
          response: { type: "numeric", parts: [
            { label: "estimate", answer: 0.375 },
          ] },
          markscheme: {
            principles: [{ kind: "formula", name: "Trapezium rule", statement: "h/2[endpoints + 2×interior]." }],
            steps: [
              { reasoning: "$\\frac{0.5}{2}[0 + 1 + 2(0.25)] = 0.25 \\times 1.5$.", marks: 1, markCode: "M" },
              { reasoning: "Estimate $= 0.375$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.375",
          },
        },
        {
          id: "cial-m-u10-nr-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "For $f(x) = x^3 - 2x - 5$ with $x_0 = 2$, we have $f(2) = -1$ and $f'(2) = 10$. What is $x_1$ from Newton-Raphson?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$1.9$" },
            { id: "b", text: "$2.01$" },
            { id: "c", text: "$2.5$" },
            { id: "d", text: "$2.1$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Newton-Raphson", statement: "x₁ = x₀ − f/f′." }],
            steps: [{ reasoning: "$x_1 = 2 - \\frac{-1}{10} = 2.1$.", marks: 1, markCode: "M" }],
            finalAnswer: "**(a)** $x_1 = 2.1$",
          },
        },
        {
          id: "cial-m-u10-nr-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $f(x) = x^2 - 3$ with $x_0 = 1.5$, find $x_1$ using Newton-Raphson.",
          response: { type: "numeric", parts: [
            { label: "x1", answer: 1.75 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Newton-Raphson", statement: "Evaluate f and f′ at x₀." }],
            steps: [
              { reasoning: "$f(1.5) = 2.25 - 3 = -0.75$ and $f'(x)=2x$ gives $f'(1.5)=3$.", marks: 1, markCode: "M" },
              { reasoning: "$x_1 = 1.5 - \\frac{-0.75}{3} = 1.5 + 0.25$.", marks: 1, markCode: "M" },
              { reasoning: "$x_1 = 1.75$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x_1 = 1.75$",
          },
        },
        {
          id: "cial-m-u10-nr-q9",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Newton-Raphson applied to $f(x) = e^x - 3$ from $x_0 = 1$ gives $x_1 \\approx 1.1036$ and $x_2 \\approx 1.0985$. Comment on the convergence and estimate the root, explaining how you know the iteration is working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Convergence", statement: "Quadratic convergence near a simple root." }],
            steps: [
              { reasoning: "$x_1 \\approx 1.1036$ and $x_2 \\approx 1.0985$ differ by only $\\approx 0.005$.", marks: 1, markCode: "M" },
              { reasoning: "The correction term $\\frac{f(x_n)}{f'(x_n)}$ is shrinking rapidly — typical of Newton-Raphson near a simple root.", marks: 1, markCode: "M" },
              { reasoning: "Iterates are converging to a value close to $1.0986$ (indeed $\\ln 3$).", marks: 1, markCode: "M" },
              { reasoning: "Further iteration would give $x \\approx 1.09861$ to 5 s.f.", marks: 1, markCode: "M" },
              { reasoning: "Root $\\approx 1.099$ stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Converging rapidly; root $\\approx 1.0986$",
          },
        },
        {
          id: "cial-m-u10-nr-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which expression gives the trapezium-rule estimate of $\\int_a^b f(x)\\,dx$ with n strips of width h?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$h[y_0 + y_n + 2(y_1 + \\cdots + y_{n-1})]$" },
            { id: "b", text: "$\\frac{h}{2}[y_0 + y_n + 2(y_1 + \\cdots + y_{n-1})]$" },
            { id: "c", text: "$\\frac{h}{2}[y_0 + y_n + (y_1 + \\cdots + y_{n-1})]$" },
            { id: "d", text: "$\\frac{b-a}{n}\\sum_{i=0}^{n} y_i$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "Trapezium rule", statement: "h/2[endpoints once, interior twice]." }],
            steps: [{ reasoning: "Endpoints counted once, interior ordinates counted twice, all scaled by h/2.", marks: 1, markCode: "M" }],
            finalAnswer: "**(a)** $\\frac{h}{2}[y_0 + y_n + 2\\sum y_i]$",
          },
        },
        {
          id: "cial-m-u10-nr-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Estimate $\\int_0^3 x\\,dx$ using the trapezium rule with 3 strips (h = 1). Values: f(0)=0, f(1)=1, f(2)=2, f(3)=3.",
          response: { type: "numeric", parts: [
            { label: "estimate", answer: 4.5 },
          ] },
          markscheme: {
            principles: [{ kind: "formula", name: "Trapezium rule", statement: "h/2[endpoints + 2×interior]." }],
            steps: [
              { reasoning: "Interior sum: $1 + 2 = 3$; bracket $= 0 + 3 + 2(3) = 9$.", marks: 1, markCode: "M" },
              { reasoning: "Multiply by $\\frac{h}{2} = 0.5$: $0.5 \\times 9$.", marks: 1, markCode: "M" },
              { reasoning: "Estimate $= 4.5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4.5",
          },
        },
        {
          id: "cial-m-u10-nr-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why might a Newton-Raphson step produce an undefined $x_{n+1}$ when solving $f(x) = x^3 - 3x + 1 = 0$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "If $x_n$ is negative the formula breaks down" },
            { id: "b", text: "If $f'(x_n) = 0$ at a stationary point, the correction $\\frac{f(x_n)}{f'(x_n)}$ is undefined" },
            { id: "c", text: "If $f(x_n) = 0$ the division fails" },
            { id: "d", text: "Newton-Raphson cannot be used on cubic equations" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Limitations", statement: "f′=0 makes the correction undefined." }],
            steps: [
              { reasoning: "Division by $f'(x_n)=0$ is undefined, so $x_{n+1}$ cannot be computed.", marks: 1, markCode: "M" },
              { reasoning: "Near a stationary point the tangent is horizontal, so the iterate can jump far away or stall.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $f'(x_n)=0$ makes the step undefined",
          },
        },
        {
          id: "cial-m-u10-nr-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Estimate $\\int_0^4 x^2\\,dx$ using the trapezium rule with 4 strips (h = 1). Values: f(0)=0, f(1)=1, f(2)=4, f(3)=9, f(4)=16.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Trapezium rule", statement: "h/2[endpoints + 2×interior]." }],
            steps: [
              { reasoning: "Interior sum: $1 + 4 + 9 = 14$.", marks: 1, markCode: "M" },
              { reasoning: "Bracket: $0 + 16 + 2(14) = 44$.", marks: 1, markCode: "M" },
              { reasoning: "Multiply by $\\frac{1}{2}$: estimate $= 22$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 22 (exact value $\\frac{64}{3} \\approx 21.33$).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "22",
          },
        },
        {
          id: "cial-m-u10-nr-q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For $f(x) = x^2 - 2$ with $x_0 = 2$, find $x_1$ using Newton-Raphson.",
          response: { type: "numeric", parts: [
            { label: "x1", answer: 1.5 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Newton-Raphson", statement: "Evaluate f and f′ at x₀." }],
            steps: [
              { reasoning: "$f(2)=2$, $f'(x)=2x$, $f'(2)=4$; $x_1 = 2 - \\frac{2}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "$x_1 = 1.5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x_1 = 1.5$",
          },
        },
        {
          id: "cial-m-u10-nr-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "When estimating an integral with the trapezium rule, what is the effect of increasing the number of strips n?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The estimate is unchanged because f is the same" },
            { id: "b", text: "The rule becomes exact for any n" },
            { id: "c", text: "h increases, so the estimate becomes less accurate" },
            { id: "d", text: "h decreases, so the estimate generally becomes more accurate" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "property", name: "Trapezium accuracy", statement: "Smaller h ⇒ smaller error." }],
            steps: [
              { reasoning: "$h = \\frac{b-a}{n}$ shrinks as n grows, refining the approximation.", marks: 1, markCode: "M" },
              { reasoning: "More strips ⇒ the estimate approaches the true integral.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** More strips ⇒ more accurate",
          },
        },
        {
          id: "cial-m-u10-nr-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Use Newton-Raphson on $f(x) = x^3 - x - 1$ with $x_0 = 1$ to find the root. Given $x_1 = 1.5$ and $x_2 \\approx 1.3478$, compute $x_3$, state the root to 3 s.f., and verify by evaluating $f$ at your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Newton-Raphson", statement: "Iterate x − f/f′ until stable." }],
            steps: [
              { reasoning: "$f'(x) = 3x^2 - 1$; $f'(1.3478) \\approx 4.45$ and $f(1.3478) \\approx 0.102$.", marks: 1, markCode: "M" },
              { reasoning: "$x_3 = 1.3478 - \\frac{0.102}{4.45} \\approx 1.325$.", marks: 1, markCode: "M" },
              { reasoning: "Iterates stabilise near $1.3247$; root $\\approx 1.325$ to 3 s.f.", marks: 1, markCode: "M" },
              { reasoning: "Verify: $1.325^3 - 1.325 - 1 \\approx 2.325 - 2.325 \\approx 0$.", marks: 1, markCode: "M" },
              { reasoning: "Root stated as $1.325$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Root $\\approx 1.325$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-m-u10-nr-notes",
      title: "Newton-Raphson and trapezium — revision notes",
      summary: "x − f/f′; h/2[endpoints + 2×interior].",
      sections: [
        { heading: "Newton-Raphson", body: "$x_{n+1}=x_n-f(x_n)/f'(x_n)$. Fails when $f'=0$." },
        { heading: "Trapezium", body: "$\\frac{h}{2}[y_0+y_n+2\\sum y_i]$. Accuracy improves with more strips." },
      ],
    },
  ],
};
