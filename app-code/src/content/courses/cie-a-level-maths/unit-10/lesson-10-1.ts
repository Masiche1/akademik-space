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
            { id: "a", text: "A root lies between 2 and 3" }, { id: "b", text: "No root exists" }, { id: "c", text: "The root is exactly 2.5" }, { id: "d", text: "f is constant" },
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
