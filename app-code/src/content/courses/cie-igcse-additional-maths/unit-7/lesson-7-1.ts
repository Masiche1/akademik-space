import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "ciam-u7-lesson-7-1",
  code: "7-1",
  title: "Remainder and Factor Theorems",
  goal: "I CAN use the remainder and factor theorems for polynomials.",
  standards: ["Cambridge IGCSE Additional Mathematics 0606: factors of polynomials"],
  vocabulary: [
    { term: "Polynomial", definition: "Expression of the form $a_nx^n + \\cdots + a_0$." },
    { term: "Remainder theorem", definition: "Remainder on division by $(x-a)$ is $f(a)$." },
    { term: "Factor theorem", definition: "$(x-a)$ is a factor iff $f(a) = 0$." },
    { term: "Factorisation", definition: "Writing a polynomial as a product of simpler factors." },
  ],
  concepts: [
    {
      id: "ciam-u7-s1-remainder",
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
          id: "ciam-u7-rf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the remainder when $f(x) = x^2 + 3x - 4$ is divided by $(x - 2)$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "6" },
            { id: "b", text: "-4" },
            { id: "c", text: "2" },
            { id: "d", text: "10" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Remainder theorem", statement: "Remainder = f(a)." }],
            steps: [{ reasoning: "$f(2) = 4 + 6 - 4 = 6$.", marks: 1, markCode: "A" }],
            finalAnswer: "6",
          },
        },
        {
          id: "ciam-u7-rf-q2",
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
          id: "ciam-u7-rf-q3",
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
          id: "ciam-u7-rf-q4",
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
          id: "ciam-u7-rf-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the remainder when $f(x) = 2x^2 - 3x + 1$ is divided by $(x - 2)$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "1" },
            { id: "b", text: "6" },
            { id: "c", text: "3" },
            { id: "d", text: "$-1$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Remainder theorem", statement: "Remainder = f(a)." }],
            steps: [{ reasoning: "$f(2) = 2(4) - 3(2) + 1 = 8 - 6 + 1 = 3$.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "ciam-u7-rf-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the remainder when $x^3 + x + 2$ is divided by $(x + 1)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0 }] },
          markscheme: {
            principles: [{ kind: "theorem", name: "Remainder theorem", statement: "Remainder = f(a)." }],
            steps: [
              { reasoning: "$f(-1) = -1 - 1 + 2 = 0$.", marks: 1, markCode: "M" },
              { reasoning: "Remainder is 0.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0",
          },
        },
        {
          id: "ciam-u7-rf-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Is $(x + 1)$ a factor of $f(x) = x^3 + x^2 - 4$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "No" },
            { id: "b", text: "Cannot be determined" },
            { id: "c", text: "Yes" },
            { id: "d", text: "Only if $x=0$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Factor theorem", statement: "Factor iff f(a)=0." }],
            steps: [{ reasoning: "$f(-1) = -1 + 1 - 4 = -4 \\neq 0$, so not a factor.", marks: 1, markCode: "A" }],
            finalAnswer: "No",
          },
        },
        {
          id: "ciam-u7-rf-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find the remainder when $x^3 - 4x + 3$ is divided by $(x - 1)$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-2$" },
            { id: "b", text: "2" },
            { id: "c", text: "3" },
            { id: "d", text: "0" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Remainder theorem", statement: "Remainder = f(a)." }],
            steps: [{ reasoning: "$f(1) = 1 - 4 + 3 = 0$.", marks: 1, markCode: "A" }],
            finalAnswer: "0",
          },
        },
        {
          id: "ciam-u7-rf-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "$f(x) = x^2 + px + 3$ leaves remainder 5 when divided by $(x - 1)$. What is the value of $p$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "3" },
            { id: "b", text: "1" },
            { id: "c", text: "5" },
            { id: "d", text: "2" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Remainder theorem", statement: "f(1) = 5." }],
            steps: [{ reasoning: "$f(1) = 1 + p + 3 = 5 \\Rightarrow p = 1$.", marks: 1, markCode: "A" }],
            finalAnswer: "1",
          },
        },
        {
          id: "ciam-u7-rf-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Show that $(x + 1)$ is a factor of $x^3 + 3x^2 - x - 3$ and find the other factor(s).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Factor theorem", statement: "f(−1)=0 then divide." }],
            steps: [
              { reasoning: "$f(-1) = -1 + 3 + 1 - 3 = 0$ ⇒ factor.", marks: 1, markCode: "M" },
              { reasoning: "$x^3 + 3x^2 - x - 3 = (x+1)(x^2 + 2x - 3)$.", marks: 1, markCode: "M" },
              { reasoning: "$= (x+1)(x+3)(x-1)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(x+1)(x+3)(x-1)$",
          },
        },
        {
          id: "ciam-u7-rf-q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "When $x^3 + 2x^2 + ax - 3$ is divided by $(x - 1)$ and by $(x + 2)$, the remainders are equal. Find $a$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -1 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Simultaneous equations", statement: "f(1) = f(−2)." }],
            steps: [
              { reasoning: "$f(1) = 1 + 2 + a - 3 = a$.", marks: 1, markCode: "M" },
              { reasoning: "$f(-2) = -8 + 8 - 2a - 3 = -2a - 3$.", marks: 1, markCode: "M" },
              { reasoning: "$a = -2a - 3 \\Rightarrow 3a = -3 \\Rightarrow a = -1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $a = -1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a=-1$",
          },
        },
        {
          id: "ciam-u7-rf-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Find the remainder when $x^3 - 2x^2 + 3$ is divided by $(x + 2)$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-5$" },
            { id: "b", text: "5" },
            { id: "c", text: "13" },
            { id: "d", text: "$-13$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Remainder theorem", statement: "Remainder = f(a)." }],
            steps: [{ reasoning: "$f(-2) = -8 - 8 + 3 = -13$.", marks: 1, markCode: "A" }],
            finalAnswer: "$-13$",
          },
        },
        {
          id: "ciam-u7-rf-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the remainder when $x^3 - 2x^2 + x - 4$ is divided by $(x - 3)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 8 }] },
          markscheme: {
            principles: [{ kind: "theorem", name: "Remainder theorem", statement: "Remainder = f(a)." }],
            steps: [
              { reasoning: "$f(3) = 27 - 18 + 3 - 4 = 8$.", marks: 1, markCode: "M" },
              { reasoning: "Remainder is 8.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8",
          },
        },
        {
          id: "ciam-u7-rf-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "$2x^2 - 3x + c$ leaves remainder 4 when divided by $(x - 2)$. Find $c$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "theorem", name: "Remainder theorem", statement: "f(2) = 4." }],
            steps: [
              { reasoning: "$f(2) = 8 - 6 + c = 2 + c = 4 \\Rightarrow c = 2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $c = 2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$c=2$",
          },
        },
        {
          id: "ciam-u7-rf-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "$f(x) = x^3 + ax^2 + bx - 6$ leaves remainder $-2$ when divided by $(x - 1)$ and remainder $4$ when divided by $(x + 1)$. Find $a$ and $b$.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 7 },
            { label: "b", answer: -4 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Simultaneous equations", statement: "f(1)=−2, f(−1)=4." }],
            steps: [
              { reasoning: "$f(1) = a + b - 5 = -2 \\Rightarrow a + b = 3$.", marks: 1, markCode: "M" },
              { reasoning: "$f(-1) = a - b - 7 = 4 \\Rightarrow a - b = 11$.", marks: 1, markCode: "M" },
              { reasoning: "Adding: $2a = 14 \\Rightarrow a = 7$, then $b = -4$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $a = 7$, $b = -4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a=7$, $b=-4$",
          },
        },
        {
          id: "ciam-u7-rf-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "When $x^3 + ax + b$ is divided by $(x - 1)$ the remainder is 4, and when divided by $(x + 2)$ the remainder is $-2$. Find $a$ and $b$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Simultaneous equations", statement: "f(1)=4, f(−2)=−2." }],
            steps: [
              { reasoning: "$f(1) = 1 + a + b = 4 \\Rightarrow a + b = 3$.", marks: 1, markCode: "M" },
              { reasoning: "$f(-2) = -8 - 2a + b = -2 \\Rightarrow -2a + b = 6$.", marks: 1, markCode: "M" },
              { reasoning: "Subtracting: $3a = -3 \\Rightarrow a = -1$, $b = 4$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $a=-1$, $b=4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a=-1$, $b=4$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciam-u7-rf-notes",
      title: "Remainder and factor theorems — revision notes",
      summary: "f(a) gives remainder; f(a)=0 means factor.",
      sections: [
        { heading: "Theorems", body: "Remainder on ÷(x−a) = f(a). (x−a) is a factor iff f(a)=0." },
        { heading: "Factorising", body: "Test small integers for f(a)=0; divide out linear factor; factorise the quadratic." },
      ],
    },
  ],
};
