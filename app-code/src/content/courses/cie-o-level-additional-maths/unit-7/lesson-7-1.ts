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
            { id: "a", text: "-4" },
            { id: "b", text: "2" },
            { id: "c", text: "6" },
            { id: "d", text: "10" },
          ], correctChoiceId: "c" },
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
        {
          id: "olam-u7-rf-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the remainder when $f(x) = x^2 - 5x + 6$ is divided by $(x - 1)$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "6" },
            { id: "b", text: "0" },
            { id: "c", text: "2" },
            { id: "d", text: "-2" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Remainder theorem", statement: "Remainder = f(a)." }],
            steps: [{ reasoning: "$f(1) = 1 - 5 + 6 = 2$.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "olam-u7-rf-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the remainder when $x^3 + 2x^2 - 3x + 1$ is divided by $(x + 1)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "theorem", name: "Remainder theorem", statement: "Remainder = f(−1)." }],
            steps: [
              { reasoning: "$f(-1) = -1 + 2 + 3 + 1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "olam-u7-rf-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Show that $(x - 2)$ is a factor of $x^3 - x^2 - 4x + 4$ and hence factorise completely.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Factor theorem", statement: "f(2)=0 then divide." }],
            steps: [
              { reasoning: "$f(2) = 8 - 4 - 8 + 4 = 0$ ⇒ $(x-2)$ is a factor.", marks: 1, markCode: "M" },
              { reasoning: "$x^3 - x^2 - 4x + 4 = (x-2)(x^2 + x - 2)$.", marks: 1, markCode: "M" },
              { reasoning: "$= (x-2)(x+2)(x-1)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(x-1)(x-2)(x+2)$",
          },
        },
        {
          id: "olam-u7-rf-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "For what value of $k$ is $(x - 3)$ a factor of $x^3 + kx - 12$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$4$" },
            { id: "b", text: "$-4$" },
            { id: "c", text: "$5$" },
            { id: "d", text: "$-5$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Factor theorem", statement: "f(3)=0." }],
            steps: [{ reasoning: "$f(3) = 27 + 3k - 12 = 0 \\Rightarrow k = -5$.", marks: 1, markCode: "A" }],
            finalAnswer: "$-5$",
          },
        },
        {
          id: "olam-u7-rf-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "When $x^2 + kx + 3$ is divided by $(x - 1)$, the remainder is 7. Find $k$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "theorem", name: "Remainder theorem", statement: "f(1)=7." }],
            steps: [
              { reasoning: "$f(1) = 1 + k + 3 = 7 \\Rightarrow k = 3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $k=3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=3$",
          },
        },
        {
          id: "olam-u7-rf-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Factorise $x^3 - 3x^2 - 9x + 27$ completely.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Factor theorem", statement: "Find a root, divide, factorise the quadratic." }],
            steps: [
              { reasoning: "$f(3) = 27 - 27 - 27 + 27 = 0$ ⇒ $(x-3)$ factor.", marks: 1, markCode: "M" },
              { reasoning: "$x^3 - 3x^2 - 9x + 27 = (x-3)(x^2 - 9)$.", marks: 1, markCode: "M" },
              { reasoning: "$x^2 - 9 = (x-3)(x+3)$.", marks: 1, markCode: "M" },
              { reasoning: "$= (x-3)^2(x+3)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(x-3)^2(x+3)$",
          },
        },
        {
          id: "olam-u7-rf-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "When $x^3 + ax + b$ is divided by $(x - 1)$ the remainder is 2, and when divided by $(x - 2)$ the remainder is 9. Find $a$ and $b$.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 0 }, { label: "b", answer: 1 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Simultaneous equations", statement: "f(1)=2, f(2)=9." }],
            steps: [
              { reasoning: "$f(1) = 1 + a + b = 2 \\Rightarrow a + b = 1$.", marks: 1, markCode: "M" },
              { reasoning: "$f(2) = 8 + 2a + b = 9 \\Rightarrow 2a + b = 1$.", marks: 1, markCode: "M" },
              { reasoning: "Subtracting: $a = 0$, then $b = 1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $a=0$, $b=1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a=0$, $b=1$",
          },
        },
        {
          id: "olam-u7-rf-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the remainder when $x^3 - 2x + 5$ is divided by $(x + 1)$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "-4" },
            { id: "b", text: "4" },
            { id: "c", text: "2" },
            { id: "d", text: "6" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Remainder theorem", statement: "Remainder = f(−1)." }],
            steps: [{ reasoning: "$f(-1) = -1 + 2 + 5 = 6$.", marks: 1, markCode: "A" }],
            finalAnswer: "6",
          },
        },
        {
          id: "olam-u7-rf-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Given that $(x - 1)$ is a factor of $x^3 + ax^2 + bx + 2$, and the remainder when the polynomial is divided by $(x + 1)$ is $-10$, find $a$ and $b$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Simultaneous equations", statement: "f(1)=0 and f(−1)=−10." }],
            steps: [
              { reasoning: "$f(1) = 1 + a + b + 2 = 0 \\Rightarrow a + b = -3$.", marks: 1, markCode: "M" },
              { reasoning: "$f(-1) = -1 + a - b + 2 = -10 \\Rightarrow a - b = -11$.", marks: 1, markCode: "M" },
              { reasoning: "Adding: $2a = -14 \\Rightarrow a = -7$; then $b = 4$.", marks: 1, markCode: "M" },
              { reasoning: "Check: $f(-1) = -1 - 7 - 4 + 2 = -10$ ✓.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $a=-7$, $b=4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a=-7$, $b=4$",
          },
        },
        {
          id: "olam-u7-rf-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the remainder when $x^2 + 5x + 6$ is divided by $(x + 2)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0 }] },
          markscheme: {
            principles: [{ kind: "theorem", name: "Remainder theorem", statement: "Remainder = f(−2)." }],
            steps: [{ reasoning: "$f(-2) = 4 - 10 + 6 = 0$.", marks: 1, markCode: "A" }],
            finalAnswer: "0",
          },
        },
        {
          id: "olam-u7-rf-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "For what value of $k$ is $(x + 2)$ a factor of $x^3 + 2x^2 + kx + 4$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "2" },
            { id: "b", text: "-2" },
            { id: "c", text: "-4" },
            { id: "d", text: "4" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Factor theorem", statement: "f(−2)=0." }],
            steps: [
              { reasoning: "$f(-2) = -8 + 8 - 2k + 4 = 4 - 2k = 0$.", marks: 1, markCode: "M" },
              { reasoning: "$k = 2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "olam-u7-rf-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "When $x^3 + ax^2 - 7x + b$ is divided by $(x - 2)$ there is no remainder, and division by $(x + 1)$ gives a remainder of $-6$. Find $a$ and $b$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Simultaneous equations", statement: "f(2)=0 and f(−1)=−6." }],
            steps: [
              { reasoning: "$f(2) = 8 + 4a - 14 + b = 0 \\Rightarrow 4a + b = 6$.", marks: 1, markCode: "M" },
              { reasoning: "$f(-1) = -1 + a + 7 + b = -6 \\Rightarrow a + b = -12$.", marks: 1, markCode: "M" },
              { reasoning: "Subtracting: $3a = 18 \\Rightarrow a = 6$; then $b = -18$.", marks: 1, markCode: "M" },
              { reasoning: "Check: $f(2) = 8 + 24 - 14 - 18 = 0$ ✓ and $f(-1) = -6$ ✓.", marks: 1, markCode: "M" },
              { reasoning: "Answer confirmed.", marks: 1, markCode: "A" },
              { reasoning: "$a = 6$, $b = -18$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a=6$, $b=-18$",
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
