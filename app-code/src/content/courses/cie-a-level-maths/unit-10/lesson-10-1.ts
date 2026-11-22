import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "cial-m-u10-lesson-10-1",
  code: "10-1",
  title: "Iterative Methods and Sign Changes",
  goal: "I CAN solve equations numerically using iteration and sign-change methods.",
  standards: ["Cambridge A Level Mathematics 9709: numerical methods"],
  vocabulary: [
    { term: "Iteration", definition: "Repeated substitution $x_{n+1} = g(x_n)$ to approach a root." },
    { term: "Sign change", definition: "f(x) changes sign between a and b ⇒ a root lies between." },
    { term: "Convergence", definition: "Iterates approaching a fixed value." },
    { term: "Root", definition: "Value of x where f(x) = 0." },
  ],
  concepts: [
    {
      id: "cial-m-u10-iteration",
      title: "Iteration and the sign-change method",
      skill: "Apply iterative and bracket methods to find roots.",
      lesson: {
        sections: [
          {
            heading: "Iterative method",
            body: "Rewrite $f(x)=0$ as $x = g(x)$ and iterate $x_{n+1} = g(x_n)$ from a starting value. The iterates converge to the root if $|g'(x)| < 1$ near the root. Stop when successive values agree to required accuracy. Always verify by substitution.",
          },
          {
            heading: "Sign-change method",
            body: "Evaluate f at two values a and b. If $f(a)$ and $f(b)$ have opposite signs, a root exists in $(a,b)$ by the intermediate value theorem. Narrow the interval (bisection) until the root is located to required accuracy.",
          },
        ],
        keyFormulas: [
          { name: "Iteration", statement: "$x_{n+1} = g(x_n)$" },
          { name: "Sign change", statement: "$f(a)f(b) < 0 \\Rightarrow$ root in $(a,b)$" },
        ],
        workedExample: {
          problem: "Solve $x^3 - x - 4 = 0$ by iteration using $x_{n+1} = (x_n + 4)^{1/3}$, $x_0 = 2$.",
          solution: "$x_1 = 6^{1/3} \\approx 1.817$, $x_2 \\approx 1.797$, $x_3 \\approx 1.795$ — converging to ≈ 1.796.",
        },
      },
      questions: [
        {
          id: "cial-m-u10-it-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $f(2) = -3$ and $f(3) = 5$, what does this tell you?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A root lies between 2 and 3" },
            { id: "b", text: "The root is exactly 2.5" },
            { id: "c", text: "f is constant" },
            { id: "d", text: "No root exists" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Sign change", statement: "Opposite signs ⇒ root between." }],
            steps: [{ reasoning: "Sign change between 2 and 3 implies a root in that interval.", marks: 1, markCode: "A" }],
            finalAnswer: "Root in (2, 3)",
          },
        },
        {
          id: "cial-m-u10-it-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Using $x_{n+1} = \\sqrt{x_n + 2}$ with $x_0 = 1$, find $x_1$ and $x_2$ (3 s.f.).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Iteration", statement: "Substitute repeatedly." }],
            steps: [
              { reasoning: "$x_1 = \\sqrt{3} \\approx 1.73$.", marks: 1, markCode: "M" },
              { reasoning: "$x_2 = \\sqrt{3.73} \\approx 1.93$.", marks: 1, markCode: "M" },
              { reasoning: "Answers given.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x_1 \\approx 1.73$, $x_2 \\approx 1.93$",
          },
        },
        {
          id: "cial-m-u10-it-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "For $f(x) = x^3 - 3x - 5$, show a root lies between x = 2 and x = 3.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Sign change", statement: "Evaluate both ends." }],
            steps: [
              { reasoning: "$f(2) = 8 - 6 - 5 = -3$.", marks: 1, markCode: "M" },
              { reasoning: "$f(3) = 27 - 9 - 5 = 13$.", marks: 1, markCode: "M" },
              { reasoning: "Signs differ ⇒ root in (2, 3).", marks: 1, markCode: "M" },
              { reasoning: "Conclusion stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Root in (2, 3)",
          },
        },
        {
          id: "cial-m-u10-it-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "The equation $x = \\cos x$ is solved by iterating $x_{n+1} = \\cos x_n$ from $x_0 = 0.5$. Given $x_1 \\approx 0.878$, $x_2 \\approx 0.639$, $x_3 \\approx 0.803$, $x_4 \\approx 0.695$, state whether the iteration is converging and estimate the root.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Convergence", statement: "Iterates approaching a fixed value." }],
            steps: [
              { reasoning: "Values oscillate but the spread decreases: 0.378 → 0.239 → 0.164 → 0.108.", marks: 2, markCode: "M" },
              { reasoning: "Converging to a value near 0.74–0.75.", marks: 1, markCode: "M" },
              { reasoning: "Further iterations would refine it; root ≈ 0.739.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Converging; root ≈ 0.739",
          },
        },
        {
          id: "cial-m-u10-it-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The equation $x^3 = x + 6$ is rewritten for iteration as $x_{n+1} = (x_n + 6)^{1/3}$. Starting from $x_0 = 1$, which value is $x_1$ (3 s.f.)?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$7.00$" },
            { id: "b", text: "$1.50$" },
            { id: "c", text: "$2.33$" },
            { id: "d", text: "$1.91$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Iteration", statement: "Substitute x₀ into g(x)." }],
            steps: [{ reasoning: "$x_1 = (1+6)^{1/3} = 7^{1/3} \\approx 1.91$.", marks: 1, markCode: "M" }],
            finalAnswer: "**(d)** $x_1 \\approx 1.91$",
          },
        },
        {
          id: "cial-m-u10-it-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Using $x_{n+1} = \\sqrt{x_n + 3}$ with $x_0 = 1$, find $x_1$ and $x_2$ (3 s.f.).",
          response: { type: "numeric", parts: [
            { label: "x1", answer: 2 },
            { label: "x2", answer: 2.236 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Iteration", statement: "Substitute repeatedly." }],
            steps: [
              { reasoning: "$x_1 = \\sqrt{1+3} = 2$.", marks: 1, markCode: "M" },
              { reasoning: "$x_2 = \\sqrt{2+3} = \\sqrt{5} \\approx 2.236$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x_1 = 2$, $x_2 \\approx 2.236$",
          },
        },
        {
          id: "cial-m-u10-it-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "To solve $x^2 = 2x + 5$ by iteration $x_{n+1} = g(x_n)$ for the positive root, which is a suitable $g(x)$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$g(x) = \\sqrt{2x + 5}$" },
            { id: "b", text: "$g(x) = 2x + 5$" },
            { id: "c", text: "$g(x) = x^2 - 2x - 5$" },
            { id: "d", text: "$g(x) = \\frac{x^2 - 5}{2}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rearrangement", statement: "Isolate x as a function of x." }],
            steps: [{ reasoning: "$x = \\sqrt{2x+5}$ rearranges the equation and keeps x isolated on the left.", marks: 1, markCode: "M" }],
            finalAnswer: "**(a)** $g(x) = \\sqrt{2x+5}$",
          },
        },
        {
          id: "cial-m-u10-it-q8",
          difficulty: "core",
          totalMarks: 4,
          stem: "For $f(x) = x^2 - 2x - 5$, show that a root lies between x = 3 and x = 4.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Sign change", statement: "Evaluate both ends." }],
            steps: [
              { reasoning: "$f(3) = 9 - 6 - 5 = -2$.", marks: 1, markCode: "M" },
              { reasoning: "$f(4) = 16 - 8 - 5 = 3$.", marks: 1, markCode: "M" },
              { reasoning: "Signs differ ⇒ a root lies in (3, 4).", marks: 1, markCode: "M" },
              { reasoning: "Conclusion stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Root in (3, 4)",
          },
        },
        {
          id: "cial-m-u10-it-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The iteration $x_{n+1} = 1 + \\frac{1}{x_n}$ is started from $x_0 = 1$, giving iterates $1, 2, 1.5, 1.333\\ldots, 1.25, \\ldots$ What do these values indicate?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The iteration is diverging to infinity" },
            { id: "b", text: "The iteration is converging to a value close to $1.62$" },
            { id: "c", text: "The iterates are constant" },
            { id: "d", text: "The iteration converges to exactly $2$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Convergence", statement: "Successive iterates approach a fixed value." }],
            steps: [
              { reasoning: "The differences between successive iterates shrink: $1 \\to 0.5 \\to 0.167 \\to 0.083 \\to \\cdots$", marks: 1, markCode: "M" },
              { reasoning: "Converging to the golden ratio $\\approx 1.618$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Converging to $\\approx 1.62$",
          },
        },
        {
          id: "cial-m-u10-it-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "The equation $f(x) = x^3 + x - 1 = 0$ has a sign change on $(0, 1)$. Using bisection, find the first midpoint and the value of $f$ there.",
          response: { type: "numeric", parts: [
            { label: "midpoint", answer: 0.5 },
            { label: "f(0.5)", answer: -0.375 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Bisection", statement: "Halve the interval each step." }],
            steps: [
              { reasoning: "Midpoint $= \\frac{0+1}{2} = 0.5$.", marks: 1, markCode: "M" },
              { reasoning: "$f(0.5) = 0.125 + 0.5 - 1 = -0.375$, so the root is in $(0.5, 1)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Midpoint $0.5$; $f(0.5) = -0.375$; root in $(0.5, 1)$",
          },
        },
        {
          id: "cial-m-u10-it-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $f(2) = 4$ and $f(3) = 9$ (both positive), what can be concluded?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A root may still exist — a sign change is sufficient but not necessary" },
            { id: "b", text: "The root is exactly $2.5$" },
            { id: "c", text: "There is definitely no root in $(2, 3)$" },
            { id: "d", text: "$f$ must be increasing on $(2, 3)$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Sign change", statement: "Same signs do not rule out a root." }],
            steps: [{ reasoning: "Without a sign change we cannot guarantee a root, but none is excluded either.", marks: 1, markCode: "M" }],
            finalAnswer: "**(a)** A root may still exist",
          },
        },
        {
          id: "cial-m-u10-it-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The equation $x^3 = 2x + 5$ is solved by iterating $x_{n+1} = (2x_n + 5)^{1/3}$ from $x_0 = 2$. Find $x_1$ and $x_2$ (3 s.f.).",
          response: { type: "numeric", parts: [
            { label: "x1", answer: 2.08 },
            { label: "x2", answer: 2.092 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Iteration", statement: "Substitute repeatedly." }],
            steps: [
              { reasoning: "$x_1 = (4 + 5)^{1/3} = 9^{1/3} \\approx 2.080$.", marks: 1, markCode: "M" },
              { reasoning: "$x_2 = (2 \\times 2.080 + 5)^{1/3} = (9.160)^{1/3}$.", marks: 1, markCode: "M" },
              { reasoning: "$x_2 \\approx 2.092$; converging towards the root near $2.09$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x_1 \\approx 2.080$, $x_2 \\approx 2.092$",
          },
        },
        {
          id: "cial-m-u10-it-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which condition suggests that the iteration $x_{n+1} = g(x_n)$ will converge to a fixed point?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$|g'(x)| < 1$ near the fixed point" },
            { id: "b", text: "$|g'(x)| > 1$ near the fixed point" },
            { id: "c", text: "$f$ is a linear function" },
            { id: "d", text: "$g'(x) = 0$ everywhere" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Convergence condition", statement: "Contractive g gives convergence." }],
            steps: [
              { reasoning: "If $|g'(x)| < 1$ near the root, each step shrinks the error.", marks: 1, markCode: "M" },
              { reasoning: "$|g'|>1$ typically causes divergence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $|g'(x)| < 1$ near the fixed point",
          },
        },
        {
          id: "cial-m-u10-it-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "For $f(x) = x^2 - 2x - 5$, a sign change lies on $(3, 4)$. Using one step of bisection, find the midpoint, evaluate $f$ there, and state the reduced interval containing the root.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Bisection", statement: "Halve the interval, keep the half with the sign change." }],
            steps: [
              { reasoning: "Midpoint $= 3.5$.", marks: 1, markCode: "M" },
              { reasoning: "$f(3.5) = 12.25 - 7 - 5 = 0.25 > 0$.", marks: 1, markCode: "M" },
              { reasoning: "Same sign as $f(4)$, so discard $(3.5, 4)$.", marks: 1, markCode: "M" },
              { reasoning: "Root lies in $(3, 3.5)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Midpoint $3.5$; $f(3.5)=0.25$; root in $(3, 3.5)$",
          },
        },
        {
          id: "cial-m-u10-it-q15",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "To solve $x^2 = 2$, the iteration $x_{n+1} = \\frac{1}{2}\\left(x_n + \\frac{2}{x_n}\\right)$ is used with $x_0 = 1$. Find $x_1$ and $x_2$ (4 s.f.).",
          response: { type: "numeric", parts: [
            { label: "x1", answer: 1.5 },
            { label: "x2", answer: 1.4167 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Iteration", statement: "Substitute repeatedly." }],
            steps: [
              { reasoning: "$x_1 = \\frac{1}{2}(1 + 2) = 1.5$.", marks: 1, markCode: "M" },
              { reasoning: "$x_2 = \\frac{1}{2}(1.5 + \\frac{2}{1.5}) = \\frac{1}{2}(1.5 + 1.3333) \\approx 1.4167$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x_1 = 1.5$, $x_2 \\approx 1.4167$",
          },
        },
        {
          id: "cial-m-u10-it-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "The equation $x^3 - x - 2 = 0$ is solved by iterating $x_{n+1} = (x_n + 2)^{1/3}$ from $x_0 = 1.5$. Calculate $x_1$ and $x_2$ (4 s.f.), comment on convergence, and verify the root by substitution.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Iteration", statement: "Substitute, observe, verify." }],
            steps: [
              { reasoning: "$x_1 = (1.5 + 2)^{1/3} = 3.5^{1/3} \\approx 1.518$.", marks: 1, markCode: "M" },
              { reasoning: "$x_2 = (1.518 + 2)^{1/3} = 3.518^{1/3} \\approx 1.521$.", marks: 1, markCode: "M" },
              { reasoning: "Successive iterates are approaching a fixed value near $1.521$ — converging.", marks: 1, markCode: "M" },
              { reasoning: "Check: $1.521^3 - 1.521 - 2 \\approx 0$, confirming the root.", marks: 1, markCode: "M" },
              { reasoning: "Root $\\approx 1.521$ stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Converging; root $\\approx 1.521$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-m-u10-iteration-notes",
      title: "Iterative methods — revision notes",
      summary: "x_{n+1}=g(x_n); sign change brackets roots.",
      sections: [
        { heading: "Iteration", body: "Rewrite f(x)=0 as x=g(x); iterate until values agree. Verify by substitution." },
        { heading: "Sign change", body: "$f(a)f(b)<0$ ⇒ root in (a,b). Narrow by bisection." },
      ],
    },
  ],
};
