import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "cimg-u2-lesson-2-1",
  code: "2-1",
  title: "Expressions and Equations",
  goal: "I CAN simplify expressions and solve linear equations.",
  standards: ["Cambridge IGCSE Mathematics 0580 Core: algebra"],
  vocabulary: [
    { term: "Expression", definition: "A mathematical phrase without an equals sign." },
    { term: "Equation", definition: "A statement that two expressions are equal." },
    { term: "Like terms", definition: "Terms with the same variable and power." },
    { term: "Coefficient", definition: "The number multiplying a variable." },
    { term: "Subject", definition: "The variable isolated on one side of a formula." },
  ],
  concepts: [
    {
      id: "cimg-u2-s1-expressions",
      title: "Simplifying expressions",
      skill: "Collect like terms and expand brackets.",
      lesson: {
        sections: [
          {
            heading: "Like terms",
            body: "Only terms with the same variable and power can be combined. $3x + 2x = 5x$ but $3x + 2y$ cannot be simplified. Constants combine separately: $3x + 4 + 2x - 1 = 5x + 3$.",
          },
          {
            heading: "Expanding brackets",
            body: "Multiply each term inside by the factor outside: $3(x + 2) = 3x + 6$. For two brackets: $(x + 2)(x + 3) = x^2 + 5x + 6$.",
          },
        ],
        keyFormulas: [
          { name: "Expanding", statement: "$a(b + c) = ab + ac$" },
        ],
        workedExample: {
          problem: "Simplify $4(2x - 3) + 5x$.",
          solution: "$8x - 12 + 5x = 13x - 12$.",
        },
      },
      questions: [
        {
          id: "cimg-u2-s1-ex-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $3x + 2x$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$5x$" }, { id: "b", text: "$6x$" }, { id: "c", text: "$x^5$" }, { id: "d", text: "$5x^2$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Like terms", statement: "Add coefficients." }],
            steps: [{ reasoning: "$3x + 2x = 5x$.", marks: 1, markCode: "A" }],
            finalAnswer: "$5x$",
          },
        },
        {
          id: "cimg-u2-s1-ex-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Expand $5(x + 3)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Expanding", statement: "Multiply each term." }],
            steps: [
              { reasoning: "$5 \\times x = 5x$; $5 \\times 3 = 15$.", marks: 1, markCode: "M" },
              { reasoning: "$5(x + 3) = 5x + 15$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5x + 15$",
          },
        },
        {
          id: "cimg-u2-s1-ex-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Simplify $2(3x + 1) - 4x + 5$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Expand and simplify", statement: "Expand then collect." }],
            steps: [
              { reasoning: "$6x + 2 - 4x + 5$.", marks: 1, markCode: "M" },
              { reasoning: "$2x + 7$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $2x + 7$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2x + 7$",
          },
        },
        {
          id: "cimg-u2-s1-ex-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Expand $(x + 4)(x - 2)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Double brackets", statement: "FOIL method." }],
            steps: [
              { reasoning: "$x \\times x = x^2$; $x \\times -2 = -2x$; $4 \\times x = 4x$; $4 \\times -2 = -8$.", marks: 1, markCode: "M" },
              { reasoning: "$x^2 - 2x + 4x - 8 = x^2 + 2x - 8$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x^2 + 2x - 8$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^2 + 2x - 8$",
          },
        },
      ],
    },
    {
      id: "cimg-u2-s1-equations",
      title: "Solving linear equations",
      skill: "Solve linear equations at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Solving equations",
            body: "Keep the equation balanced — do the same to both sides. $3x + 5 = 14$ → subtract 5: $3x = 9$ → divide by 3: $x = 3$.",
          },
          {
            heading: "Equations with brackets",
            body: "Expand first, then solve. $2(x - 3) = 8$ → $2x - 6 = 8$ → $2x = 14$ → $x = 7$.",
          },
        ],
        keyFormulas: [
          { name: "Solving", statement: "Same operation both sides." },
        ],
        workedExample: {
          problem: "Solve $5x - 3 = 2x + 9$.",
          solution: "$5x - 2x = 9 + 3$ → $3x = 12$ → $x = 4$.",
        },
      },
      questions: [
        {
          id: "cimg-u2-s1-eq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $x + 7 = 12$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "5" }, { id: "b", text: "19" }, { id: "c", text: "-5" }, { id: "d", text: "4" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Solving", statement: "Subtract 7." }],
            steps: [{ reasoning: "$x = 12 - 7 = 5$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x = 5$",
          },
        },
        {
          id: "cimg-u2-s1-eq-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $3x = 21$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Solving", statement: "Divide by 3." }],
            steps: [
              { reasoning: "$x = 21 \\div 3 = 7$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x = 7$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 7$",
          },
        },
        {
          id: "cimg-u2-s1-eq-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $4x - 6 = 2x + 10$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 8 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Solving", statement: "Collect x terms." }],
            steps: [
              { reasoning: "$4x - 2x = 10 + 6$ → $2x = 16$.", marks: 1, markCode: "M" },
              { reasoning: "$x = 8$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x = 8$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 8$",
          },
        },
        {
          id: "cimg-u2-s1-eq-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Solve $2(x + 3) = 5x - 6$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Solving with brackets", statement: "Expand first." }],
            steps: [
              { reasoning: "$2x + 6 = 5x - 6$.", marks: 1, markCode: "M" },
              { reasoning: "$6 + 6 = 5x - 2x$ → $12 = 3x$.", marks: 1, markCode: "M" },
              { reasoning: "$x = 4$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x = 4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 4$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cimg-u2-s1-alg-notes",
      title: "Expressions and equations — revision notes",
      summary: "Like terms, expanding, solving linear equations.",
      sections: [
        { heading: "Simplifying", body: "Collect like terms. Expand brackets: $a(b+c) = ab+ac$. For two brackets use FOIL." },
        { heading: "Equations", body: "Balance both sides. Collect x terms on one side, constants on other. Expand brackets first." },
      ],
    },
  ],
};
