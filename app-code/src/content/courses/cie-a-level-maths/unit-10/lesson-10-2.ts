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
