import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "olam-u7-lesson-7-1",
  code: "7-1",
  title: "Remainder and Factor Theorems",
  goal: "I CAN use the remainder and factor theorems for polynomials.",
  standards: ["Cambridge O Level Additional Mathematics 4037: factors of polynomials"],
  vocabulary: [
    { term: "Polynomial", definition: "Expression of the form $a_nx^n + \\cdots + a_0$." },
    { term: "Remainder theorem", definition: "Remainder on division by $(x-a)$ is $f(a)$." },
    { term: "Factor theorem", definition: "$(x-a)$ is a factor iff $f(a) = 0$." },
    { term: "Factorisation", definition: "Writing a polynomial as a product of simpler factors." },
  ],
  concepts: [
    {
      id: "olam-u7-s1-remainder",
      title: "Remainder and factor theorems",
      skill: "Apply the theorems to find remainders, factors and unknown coefficients.",
      lesson: {
        sections: [
          {
            heading: "Remainder theorem",
            body: "When $f(x)$ is divided by $(x - a)$, the remainder is $f(a)$ — just substitute. E.g. $f(x) = x^3 - 2x + 1$ divided by $(x-2)$: remainder $= f(2) = 8 - 4 + 1 = 5$. No division needed.",
          },
          {
            heading: "Factor theorem and factorising",
            body: "$(x - a)$ is a factor of $f(x)$ iff $f(a) = 0$. To factorise a cubic: test small integer values (±1, ±2, …) for a zero, divide out the linear factor (by inspection or algebraic division), then factorise the quadratic. Once one root is found, the other two come from the quadratic.",
          },
        ],
        keyFormulas: [
          { name: "Remainder", statement: "$f(x) \\div (x-a)$ has remainder $f(a)$" },
          { name: "Factor", statement: "$(x-a)$ factor iff $f(a)=0$" },
        ],
        workedExample: {
          problem: "Find the remainder when $x^3 + 2x^2 - 5x + 1$ is divided by $(x + 1)$.",
          solution: "$(x+1) = (x-(-1))$, so remainder $= f(-1) = -1 + 2 + 5 + 1 = 7$.",
        },
      },
      questions: [
        {
          id: "olam-u7-rf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the remainder when $f(x) = x^2 + 3x - 4$ is divided by $(x - 2)$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "6" }, { id: "b", text: "2" }, { id: "c", text: "10" }, { id: "d", text: "-4" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Remainder theorem", statement: "Remainder = f(a)." }],
            steps: [{ reasoning: "$f(2) = 4 + 6 - 4 = 6$.", marks: 1, markCode: "A" }],
            finalAnswer: "6",
          },
        },
        {
          id: "olam-u7-rf-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Is $(x - 3)$ a factor of $f(x) = x^3 - 7x + 6$?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Factor theorem", statement: "Factor iff f(a)=0." }],
            steps: [
              { reasoning: "$f(3) = 27 - 21 + 6 = 12 \\neq 0$.", marks: 1, markCode: "M" },
              { reasoning: "Not a factor.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No",
          },
        },
        {
          id: "olam-u7-rf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Show that $(x + 2)$ is a factor of $x^3 + 4x^2 + x - 6$ and find the other factor(s).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Factor theorem", statement: "f(−2)=0 then divide." }],
            steps: [
              { reasoning: "$f(-2) = -8 + 16 - 2 - 6 = 0$ ⇒ factor.", marks: 1, markCode: "M" },
              { reasoning: "$x^3 + 4x^2 + x - 6 = (x+2)(x^2 + 2x - 3)$.", marks: 1, markCode: "M" },
              { reasoning: "$= (x+2)(x+3)(x-1)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(x+2)(x+3)(x-1)$",
          },
        },
        {
          id: "olam-u7-rf-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "The remainder when $x^3 + ax + b$ is divided by $(x-1)$ is 5, and by $(x+2)$ is -7. Find a and b.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Simultaneous equations", statement: "f(1)=5, f(−2)=−7." }],
            steps: [
              { reasoning: "$f(1) = 1 + a + b = 5 \\Rightarrow a + b = 4$.", marks: 1, markCode: "M" },
              { reasoning: "$f(-2) = -8 - 2a + b = -7 \\Rightarrow -2a + b = 1$.", marks: 1, markCode: "M" },
              { reasoning: "Subtracting: $3a = 3 \\Rightarrow a = 1$, $b = 3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $a=1$, $b=3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a=1$, $b=3$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olam-u7-rf-notes",
      title: "Remainder and factor theorems — revision notes",
      summary: "f(a) gives remainder; f(a)=0 means factor.",
      sections: [
        { heading: "Theorems", body: "Remainder on ÷(x−a) = f(a). (x−a) is a factor iff f(a)=0." },
        { heading: "Factorising", body: "Test small integers for f(a)=0; divide out linear factor; factorise the quadratic." },
      ],
    },
  ],
};
