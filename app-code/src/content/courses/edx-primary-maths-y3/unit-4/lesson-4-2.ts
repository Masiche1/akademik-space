import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "edpm3-u4-lesson-4-2",
  code: "4-2",
  title: "Equations and Missing Numbers",
  goal: "I CAN solve equations with one unknown using inverse operations.",
  standards: ["Year 3 Algebra"],
  vocabulary: [
    {
      term: "Inverse operation",
      definition: "The opposite operation: add/subtract, multiply/divide.",
    },
    { term: "Balance", definition: "An equation where both sides are equal." },
    { term: "Solve", definition: "Find the value of the unknown." },
    { term: "Check", definition: "Substitute the answer back to verify." },
  ],
  concepts: [
    {
      id: "edpm3-u4-eq",
      title: "Solving Simple Equations",
      skill: "Use inverse operations to find unknown values.",
      lesson: {
        sections: [
          {
            heading: "Inverse operations",
            body: "To solve an equation, undo the operation: if the equation adds, subtract; if it multiplies, divide. For x + 7 = 15, subtract 7: x = 15 - 7 = 8. For 4x = 20, divide by 4: x = 5. Always check by substituting back.",
          },
          {
            heading: "Missing numbers",
            body: "Missing number problems are equations in disguise: 6 + ? = 14 means x + 6 = 14, so x = 8. ? × 3 = 18 means 3x = 18, so x = 6. Write the equation first, then solve it.",
          },
        ],
        keyFormulas: [
          { name: "Inverse", statement: "Add↔subtract, multiply↔divide" },
        ],
        workedExample: {
          problem: "Solve: x - 9 = 4",
          solution: "x = 4 + 9 = 13.",
        },
      },
      questions: [
        {
          id: "edpm3-u4-eq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the inverse of addition?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Multiplication" },
              { id: "b", text: "Subtraction" },
              { id: "c", text: "Division" },
              { id: "d", text: "Doubling" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inverse operations",
                statement: "Add↔subtract.",
              },
            ],
            steps: [
              {
                reasoning: "Subtraction undoes addition.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Subtraction",
            commonErrors: ["Wrong inverse."],
          },
        },
        {
          id: "edpm3-u4-eq-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve: x + 11 = 20",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9" },
              { id: "b", text: "10" },
              { id: "c", text: "11" },
              { id: "d", text: "31" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Equations",
                statement: "x = 20 - 11 = 9.",
              },
            ],
            steps: [{ reasoning: "20 - 11 = 9.", marks: 2, markCode: "B" }],
            finalAnswer: "**(a)** 9",
            commonErrors: ["Wrong subtraction."],
          },
        },
        {
          id: "edpm3-u4-eq-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve: 5x = 35",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Equations", statement: "x = 7." },
            ],
            steps: [
              { reasoning: "5 × x = 35.", marks: 1, markCode: "M" },
              { reasoning: "35 ÷ 5 = 7.", marks: 1, markCode: "M" },
              { reasoning: "x = 7.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "x = 7",
            commonErrors: ["Wrong operation."],
          },
        },
        {
          id: "edpm3-u4-eq-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve: x - 8 = 14. Check your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Equations", statement: "x = 22." },
            ],
            steps: [
              { reasoning: "x = 14 + 8 = 22.", marks: 1, markCode: "M" },
              {
                reasoning: "Check: 22 - 8 = 14. Correct.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "x = 22.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "x = 22",
            commonErrors: ["No check."],
          },
        },
      ],
    },
    {
      id: "edpm3-u4-patterns",
      title: "Patterns and Rules",
      skill: "Describe and create patterns using rules.",
      lesson: {
        sections: [
          {
            heading: "Pattern rules",
            body: "Patterns follow rules. Number patterns: add/subtract a constant, multiply, or use square numbers. Shape patterns: repeat shapes or grow each time. To describe a rule, say what happens each step: 'add 4', 'double', 'add one more dot each time'.",
          },
          {
            heading: "Creating patterns",
            body: "To create a pattern, choose a rule and apply it repeatedly. Rule 'add 3' starting at 2: 2, 5, 8, 11, 14. Rule 'double' starting at 1: 1, 2, 4, 8, 16. The same rule can create different patterns depending on the starting number.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Create a pattern with rule 'add 5' starting at 3.",
          solution: "3, 8, 13, 18, 23.",
        },
      },
      questions: [
        {
          id: "edpm3-u4-pt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the rule in 4, 8, 12, 16?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Add 2" },
              { id: "b", text: "Add 4" },
              { id: "c", text: "Double" },
              { id: "d", text: "Add 8" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Patterns",
                statement: "Add 4 each time.",
              },
            ],
            steps: [
              { reasoning: "Adds 4 each step.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Add 4",
            commonErrors: ["Wrong rule."],
          },
        },
        {
          id: "edpm3-u4-pt-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What comes next: 1, 2, 4, 8, ?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10" },
              { id: "b", text: "12" },
              { id: "c", text: "16" },
              { id: "d", text: "20" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Patterns",
                statement: "Double each time.",
              },
            ],
            steps: [{ reasoning: "8 × 2 = 16.", marks: 2, markCode: "B" }],
            finalAnswer: "**(c)** 16",
            commonErrors: ["Wrong rule."],
          },
        },
        {
          id: "edpm3-u4-pt-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Create a number pattern with rule 'add 6' starting at 5. Write the first five terms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Pattern creation",
                statement: "5, 11, 17, 23, 29.",
              },
            ],
            steps: [
              { reasoning: "Start at 5.", marks: 1, markCode: "M" },
              { reasoning: "Add 6 each time.", marks: 1, markCode: "M" },
              { reasoning: "5, 11, 17, 23, 29.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5, 11, 17, 23, 29",
            commonErrors: ["Wrong numbers."],
          },
        },
        {
          id: "edpm3-u4-pt-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two patterns: A starts at 2 and adds 3; B starts at 5 and adds 3. What is the 4th term of each?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Pattern analysis",
                statement: "A: 11; B: 14.",
              },
            ],
            steps: [
              {
                reasoning: "A: 2, 5, 8, 11 — 4th = 11.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "B: 5, 8, 11, 14 — 4th = 14.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both correct.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "A=11, B=14",
            commonErrors: ["Wrong terms."],
          },
        },
      ],
    },
    {
      id: "edpm3-u4-fractions",
      title: "Fractions of Quantities",
      skill: "Find fractions of amounts and solve fraction problems.",
      lesson: {
        sections: [
          {
            heading: "Fraction of a number",
            body: "To find a fraction of a quantity, divide by the denominator and multiply by the numerator. Half of 20 = 20 ÷ 2 = 10. A third of 15 = 15 ÷ 3 = 5. A quarter of 24 = 24 ÷ 4 = 6. For 2/5 of 20: 20 ÷ 5 = 4, then 4 × 2 = 8.",
          },
          {
            heading: "Fraction problems",
            body: "Problems like 'What is 3/4 of 12?' need two steps: divide by 4 (denominator) = 3, then multiply by 3 (numerator) = 9. Or think: 3/4 means 3 out of every 4 equal parts.",
          },
        ],
        keyFormulas: [
          {
            name: "Fraction of quantity",
            statement: "Divide by denominator, multiply by numerator",
          },
        ],
        workedExample: {
          problem: "What is 2/5 of 20?",
          solution: "20 ÷ 5 = 4; 4 × 2 = 8.",
        },
      },
      questions: [
        {
          id: "edpm3-u4-fr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a third of 18?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3" },
              { id: "b", text: "6" },
              { id: "c", text: "9" },
              { id: "d", text: "12" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fractions", statement: "18 ÷ 3 = 6." },
            ],
            steps: [{ reasoning: "18 ÷ 3 = 6.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 6",
            commonErrors: ["Wrong division."],
          },
        },
        {
          id: "edpm3-u4-fr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 2/5 of 20?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "8" },
              { id: "c", text: "10" },
              { id: "d", text: "12" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fractions", statement: "20÷5=4, ×2=8." },
            ],
            steps: [
              { reasoning: "20 ÷ 5 = 4; 4 × 2 = 8.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** 8",
            commonErrors: ["Wrong calculation."],
          },
        },
        {
          id: "edpm3-u4-fr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is 3/4 of 16? Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fractions", statement: "16÷4=4, ×3=12." },
            ],
            steps: [
              { reasoning: "16 ÷ 4 = 4.", marks: 1, markCode: "M" },
              { reasoning: "4 × 3 = 12.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 12.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12",
            commonErrors: ["Wrong steps."],
          },
        },
        {
          id: "edpm3-u4-fr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A bag has 24 sweets. 3/8 of them are red. How many red sweets?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fractions", statement: "24÷8=3, ×3=9." },
            ],
            steps: [
              { reasoning: "24 ÷ 8 = 3.", marks: 1, markCode: "M" },
              { reasoning: "3 × 3 = 9.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 9 red sweets.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "9",
            commonErrors: ["Wrong fraction method."],
          },
        },
      ],
    },
    {
      id: "edpm3-u4-mixed",
      title: "Mixed Year 3 Practice",
      skill: "Apply all Year 3 skills together.",
      lesson: {
        sections: [
          {
            heading: "Year 3 topics",
            body: "Place value to 1000, addition/subtraction, multiplication/division (times tables), fractions, shape, measure, time, money, data handling, algebra introduction.",
          },
          {
            heading: "Problem-solving approach",
            body: "Identify the operation needed, estimate the answer, calculate step by step, and check. For algebra, write the equation first. For fractions, divide by denominator first.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Solve: 4 × 7 + 6",
          solution: "28 + 6 = 34.",
        },
      },
      questions: [
        {
          id: "edpm3-u4-mx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 9 × 7?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "56" },
              { id: "b", text: "63" },
              { id: "c", text: "72" },
              { id: "d", text: "81" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Times tables", statement: "9 × 7 = 63." },
            ],
            steps: [{ reasoning: "9 × 7 = 63.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 63",
            commonErrors: ["Wrong product."],
          },
        },
        {
          id: "edpm3-u4-mx-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a fifth of 25?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "5" },
              { id: "c", text: "6" },
              { id: "d", text: "10" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fractions", statement: "25 ÷ 5 = 5." },
            ],
            steps: [{ reasoning: "25 ÷ 5 = 5.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** 5",
            commonErrors: ["Wrong division."],
          },
        },
        {
          id: "edpm3-u4-mx-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A rectangle has length 12 cm and width 5 cm. What is its perimeter?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Perimeter",
                statement: "2×(12+5) = 34 cm.",
              },
            ],
            steps: [
              {
                reasoning: "Perimeter = 2×(length + width).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "12 + 5 = 17; 17 × 2 = 34 cm.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 34 cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "34 cm",
            commonErrors: ["Wrong formula."],
          },
        },
        {
          id: "edpm3-u4-mx-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve: 3x + 5 = 20",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Equations", statement: "x = 5." },
            ],
            steps: [
              { reasoning: "3x = 20 - 5 = 15.", marks: 1, markCode: "M" },
              { reasoning: "x = 15 ÷ 3 = 5.", marks: 1, markCode: "M" },
              { reasoning: "x = 5.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "x = 5",
            commonErrors: ["Wrong order."],
          },
        },
      ],
    },
  ],
};
