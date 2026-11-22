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
            { id: "a", text: "$5x^2$" },
            { id: "b", text: "$5x$" },
            { id: "c", text: "$6x$" },
            { id: "d", text: "$x^5$" },
          ], correctChoiceId: "b" },
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
        {
          id: "cimg-u2-s1-ex-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $7x - 3x$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x$" },
            { id: "b", text: "$4x$" },
            { id: "c", text: "$4x^2$" },
            { id: "d", text: "$10x$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Like terms", statement: "Subtract coefficients." }],
            steps: [{ reasoning: "$7x - 3x = 4x$.", marks: 1, markCode: "A" }],
            finalAnswer: "$4x$",
          },
        },
        {
          id: "cimg-u2-s1-ex-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Expand $4(x - 2)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Expanding", statement: "Multiply each term." }],
            steps: [
              { reasoning: "$4 \\times x = 4x$; $4 \\times (-2) = -8$.", marks: 1, markCode: "M" },
              { reasoning: "$4(x - 2) = 4x - 8$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4x - 8$",
          },
        },
        {
          id: "cimg-u2-s1-ex-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $3x + 4y + 2x$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$5x + 4y$" },
            { id: "b", text: "$9xy$" },
            { id: "c", text: "$9x + y$" },
            { id: "d", text: "$5x + y$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Like terms", statement: "Collect $x$ terms only." }],
            steps: [{ reasoning: "$3x + 2x = 5x$; $4y$ unchanged: $5x + 4y$.", marks: 1, markCode: "A" }],
            finalAnswer: "$5x + 4y$",
          },
        },
        {
          id: "cimg-u2-s1-ex-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Simplify $5x - 2y - 3x + y$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$8x - y$" },
            { id: "b", text: "$2x - 3y$" },
            { id: "c", text: "$2x + y$" },
            { id: "d", text: "$2x - y$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Like terms", statement: "Collect $x$ and $y$ separately." }],
            steps: [{ reasoning: "$5x - 3x = 2x$; $-2y + y = -y$: $2x - y$.", marks: 1, markCode: "A" }],
            finalAnswer: "$2x - y$",
          },
        },
        {
          id: "cimg-u2-s1-ex-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Simplify $3(x - 4) + 2(2x + 1)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Expand and simplify", statement: "Expand each bracket then collect." }],
            steps: [
              { reasoning: "$3x - 12 + 4x + 2$.", marks: 1, markCode: "M" },
              { reasoning: "$7x - 10$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $7x - 10$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7x - 10$",
          },
        },
        {
          id: "cimg-u2-s1-ex-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Expand and simplify $(x + 3)(x - 2) + 4x$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Double brackets", statement: "FOIL then collect." }],
            steps: [
              { reasoning: "$(x + 3)(x - 2) = x^2 - 2x + 3x - 6 = x^2 + x - 6$.", marks: 1, markCode: "M" },
              { reasoning: "$x^2 + x - 6 + 4x = x^2 + 5x - 6$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x^2 + 5x - 6$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^2 + 5x - 6$",
          },
        },
        {
          id: "cimg-u2-s1-ex-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Expand $(2x - 1)(x + 4)$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2x^2 + 7x - 4$" },
            { id: "b", text: "$2x^2 - 7x - 4$" },
            { id: "c", text: "$2x^2 + 7x + 4$" },
            { id: "d", text: "$2x^2 + 9x - 4$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Double brackets", statement: "FOIL method." }],
            steps: [{ reasoning: "$2x^2 + 8x - x - 4 = 2x^2 + 7x - 4$.", marks: 1, markCode: "A" }],
            finalAnswer: "$2x^2 + 7x - 4$",
          },
        },
        {
          id: "cimg-u2-s1-ex-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Simplify $2(3x - 4) + 5x$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x - 8$" },
            { id: "b", text: "$11x + 8$" },
            { id: "c", text: "$11x - 8$" },
            { id: "d", text: "$6x - 8$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Expand and simplify", statement: "Expand then collect." }],
            steps: [{ reasoning: "$6x - 8 + 5x = 11x - 8$.", marks: 1, markCode: "A" }],
            finalAnswer: "$11x - 8$",
          },
        },
        {
          id: "cimg-u2-s1-ex-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Expand $(x + 2)^2$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Squaring a binomial", statement: "$(x + a)^2 = x^2 + 2ax + a^2$." }],
            steps: [
              { reasoning: "$(x + 2)^2 = (x + 2)(x + 2)$.", marks: 1, markCode: "M" },
              { reasoning: "$x \\times x = x^2$; $x \\times 2 = 2x$; $2 \\times x = 2x$; $2 \\times 2 = 4$.", marks: 1, markCode: "M" },
              { reasoning: "$x^2 + 2x + 2x + 4 = x^2 + 4x + 4$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x^2 + 4x + 4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^2 + 4x + 4$",
          },
        },
        {
          id: "cimg-u2-s1-ex-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Simplify $2(3x + 1) - 6x$ and write down the result.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Expand and simplify", statement: "The $x$ terms may cancel." }],
            steps: [
              { reasoning: "$6x + 2 - 6x$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cimg-u2-s1-ex-q15",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Expand $-3(x + 4)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Expanding", statement: "Multiply each term by $-3$." }],
            steps: [
              { reasoning: "$-3 \\times x = -3x$; $-3 \\times 4 = -12$.", marks: 1, markCode: "M" },
              { reasoning: "$-3(x + 4) = -3x - 12$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-3x - 12$",
          },
        },
        {
          id: "cimg-u2-s1-ex-q16",
          difficulty: "core",
          totalMarks: 4,
          stem: "Simplify $(x - 3)(x + 4) - x^2$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Double brackets", statement: "Expand then subtract $x^2$." }],
            steps: [
              { reasoning: "$(x - 3)(x + 4) = x^2 + 4x - 3x - 12 = x^2 + x - 12$.", marks: 1, markCode: "M" },
              { reasoning: "$x^2 + x - 12 - x^2$.", marks: 1, markCode: "M" },
              { reasoning: "$= x - 12$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x - 12$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x - 12$",
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
            { id: "a", text: "4" },
            { id: "b", text: "19" },
            { id: "c", text: "5" },
            { id: "d", text: "-5" },
          ], correctChoiceId: "c" },
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
        {
          id: "cimg-u2-s1-eq-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $x - 4 = 9$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "9" },
            { id: "b", text: "5" },
            { id: "c", text: "-5" },
            { id: "d", text: "13" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Solving", statement: "Add 4 to both sides." }],
            steps: [{ reasoning: "$x = 9 + 4 = 13$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x = 13$",
          },
        },
        {
          id: "cimg-u2-s1-eq-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $5x = 30$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Solving", statement: "Divide by 5." }],
            steps: [
              { reasoning: "$x = 30 \\div 5 = 6$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x = 6$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 6$",
          },
        },
        {
          id: "cimg-u2-s1-eq-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $\\frac{x}{3} = 4$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "24" },
            { id: "b", text: "7" },
            { id: "c", text: "12" },
            { id: "d", text: "1.3" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Solving", statement: "Multiply both sides by 3." }],
            steps: [{ reasoning: "$x = 4 \\times 3 = 12$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x = 12$",
          },
        },
        {
          id: "cimg-u2-s1-eq-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $2x + 3 = 11$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "5" },
            { id: "b", text: "4" },
            { id: "c", text: "7" },
            { id: "d", text: "-4" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Solving", statement: "Subtract 3, divide by 2." }],
            steps: [{ reasoning: "$2x = 8$ → $x = 4$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x = 4$",
          },
        },
        {
          id: "cimg-u2-s1-eq-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $6x + 4 = 2x + 20$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Solving", statement: "Collect $x$ terms on one side." }],
            steps: [
              { reasoning: "$6x - 2x = 20 - 4$ → $4x = 16$.", marks: 1, markCode: "M" },
              { reasoning: "$x = 4$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x = 4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 4$",
          },
        },
        {
          id: "cimg-u2-s1-eq-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Solve $4(x - 1) = 20$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Solving with brackets", statement: "Expand then solve." }],
            steps: [
              { reasoning: "$4x - 4 = 20$.", marks: 1, markCode: "M" },
              { reasoning: "$4x = 24$.", marks: 1, markCode: "M" },
              { reasoning: "$x = 6$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x = 6$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 6$",
          },
        },
        {
          id: "cimg-u2-s1-eq-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $\\frac{x}{4} + 3 = 7$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 16 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Solving", statement: "Subtract 3, then multiply by 4." }],
            steps: [
              { reasoning: "$\\frac{x}{4} = 4$.", marks: 1, markCode: "M" },
              { reasoning: "$x = 4 \\times 4 = 16$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x = 16$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 16$",
          },
        },
        {
          id: "cimg-u2-s1-eq-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $5x - 3(x - 2) = 22$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 8 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Solving with brackets", statement: "Expand the bracket carefully — the minus sign." }],
            steps: [
              { reasoning: "$5x - 3x + 6 = 22$.", marks: 1, markCode: "M" },
              { reasoning: "$2x + 6 = 22$ → $2x = 16$.", marks: 1, markCode: "M" },
              { reasoning: "$x = 8$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x = 8$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 8$",
          },
        },
        {
          id: "cimg-u2-s1-eq-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $\\frac{x + 3}{2} = 7$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Solving with fractions", statement: "Multiply both sides to clear the fraction." }],
            steps: [
              { reasoning: "$x + 3 = 7 \\times 2 = 14$.", marks: 1, markCode: "M" },
              { reasoning: "$x = 14 - 3$.", marks: 1, markCode: "M" },
              { reasoning: "$x = 11$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x = 11$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 11$",
          },
        },
        {
          id: "cimg-u2-s1-eq-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the solution of $3x - 7 = 2x + 5$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "-2" },
            { id: "b", text: "12" },
            { id: "c", text: "-12" },
            { id: "d", text: "2" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Solving", statement: "Collect $x$ terms on one side." }],
            steps: [{ reasoning: "$3x - 2x = 5 + 7$ → $x = 12$.", marks: 1, markCode: "A" }],
            finalAnswer: "$x = 12$",
          },
        },
        {
          id: "cimg-u2-s1-eq-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $2x - 5 = 3x + 7$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Solving", statement: "Collect terms; answer may be negative." }],
            steps: [
              { reasoning: "$2x - 3x = 7 + 5$ → $-x = 12$.", marks: 1, markCode: "M" },
              { reasoning: "$x = -12$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x = -12$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = -12$",
          },
        },
        {
          id: "cimg-u2-s1-eq-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Solve $x + 3 = 2x - 1$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "-4" },
            { id: "b", text: "4" },
            { id: "c", text: "1" },
            { id: "d", text: "2" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Solving", statement: "Collect $x$ terms on one side." }],
            steps: [{ reasoning: "$3 + 1 = 2x - x$ → $x = 4$.", marks: 1, markCode: "A" }],
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
