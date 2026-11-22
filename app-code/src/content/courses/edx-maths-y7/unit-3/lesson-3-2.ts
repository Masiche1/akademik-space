import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "edm7-u3-lesson-3-2",
  code: "3-2",
  title: "Simple Equations",
  goal: "I CAN solve one-step and two-step linear equations.",
  standards: ["Edexcel KS3 Maths — Algebra"],
  vocabulary: [
    {
      term: "Equation",
      definition:
        "A statement that two expressions are equal — e.g. $2x + 3 = 11$.",
    },
    {
      term: "Unknown",
      definition: "The variable whose value we're finding — usually $x$.",
    },
    {
      term: "Inverse operation",
      definition:
        "The operation that undoes another — addition↔subtraction, multiplication↔division.",
    },
    {
      term: "Solution",
      definition: "The value of the variable that makes the equation true.",
    },
  ],
  concepts: [
    {
      id: "edm7-u3-onestep",
      title: "One-Step Equations",
      skill: "Solve equations of the form $x + a = b$ and $ax = b$.",
      lesson: {
        sections: [
          {
            heading: "Balancing the equation",
            body: "An equation is a balance — whatever you do to one side, do to the other. To solve, **isolate the variable** using inverse operations: undo addition with subtraction, undo multiplication with division.\n\n$x + 5 = 12$ → subtract 5 from both sides → $x = 7$. $3x = 21$ → divide both sides by 3 → $x = 7$. Always check by substituting back.",
          },
          {
            heading: "Negative solutions",
            body: "Equations can have negative answers: $x - 8 = -3$ → $x = 5$. $-2x = 10$ → $x = -5$. Fractions too: $\\frac{x}{4} = 6$ → $x = 24$.\n\n**Checking**: substitute your answer back — $3(7) = 21$ ✓. If it doesn't work, recheck each step — most errors are sign or arithmetic slips.",
          },
        ],
        keyFormulas: [
          {
            name: "Inverse operations",
            statement: "Undo + with −, × with ÷, on BOTH sides.",
          },
          {
            name: "Check",
            statement: "Substitute solution back into original equation.",
          },
        ],
        workedExample: {
          problem: "Solve $x + 7 = -2$.",
          solution: "Subtract 7: $x = -2 - 7 = -9$. Check: $-9 + 7 = -2$ ✓.",
        },
      },
      questions: [
        {
          id: "edm7-u3-onestep-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $x + 5 = 12$.",
          response: {
            type: "numeric",
            parts: [{ label: "x", answer: 7 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Inverse operation",
                statement: "Subtract 5 from both sides.",
              },
            ],
            steps: [
              {
                reasoning: "$x = 12 - 5 = 7$.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "$x = 7$",
            commonErrors: ["$x = 17$ — adding instead of subtracting."],
          },
        },
        {
          id: "edm7-u3-onestep-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $4x = 36$.",
          response: {
            type: "numeric",
            parts: [{ label: "x", answer: 9 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Inverse operation",
                statement: "Divide both sides by 4.",
              },
            ],
            steps: [
              {
                reasoning: "$x = 36 \\div 4$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= 9$.", marks: 1, markCode: "M" },
              {
                reasoning: "Check: $4 \\times 9 = 36$ ✓.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 9$",
            commonErrors: ["$x = 144$ — multiplying instead of dividing."],
          },
        },
        {
          id: "edm7-u3-onestep-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $x - 8 = -3$.",
          response: {
            type: "numeric",
            parts: [{ label: "x", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Negative solutions",
                statement: "Add 8 to both sides: $x = -3 + 8 = 5$.",
              },
            ],
            steps: [
              {
                reasoning: "Add 8 to both sides.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x = -3 + 8$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= 5$.", marks: 1, markCode: "M" },
              {
                reasoning: "Check: $5 - 8 = -3$ ✓.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 5$",
            commonErrors: ["$x = -11$ — subtracting instead of adding."],
          },
        },
        {
          id: "edm7-u3-onestep-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each equation.",
          parts: [
            { label: "a", prompt: "Solve $3x = -18$.", marks: 2 },
            { label: "b", prompt: "Solve $x + (-4) = 7$.", marks: 2 },
            { label: "c", prompt: "Solve $\\frac{x}{5} = -6$.", marks: 2 },
            { label: "d", prompt: "Solve $-2x = 14$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Equation solving",
                statement: "Inverse operations on both sides; watch signs.",
              },
            ],
            steps: [
              {
                reasoning: "(a) $x = -6$.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) $x = 11$ — add 4.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) $x = -30$ — multiply by 5.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "(d) $x = -7$ — divide by $-2$.",
                marks: 2,
                markCode: "M",
                part: "d",
              },
            ],
            finalAnswer: "(a) $-6$ (b) $11$ (c) $-30$ (d) $-7$",
            commonErrors: [
              "Sign errors throughout.",
              "Wrong inverse operation.",
            ],
          },
        },
      ],
    },
    {
      id: "edm7-u3-twostep",
      title: "Two-Step Equations",
      skill:
        "Solve equations requiring two inverse operations, with expressions on both sides.",
      lesson: {
        sections: [
          {
            heading: "Two-step equations",
            body: "Undo operations in **reverse BIDMAS order** — deal with addition/subtraction first, then multiplication/division: $2x + 5 = 13$ → subtract 5 → $2x = 8$ → divide by 2 → $x = 4$.\n\n**Expressions on both sides**: $3x + 2 = x + 10$ → collect x terms: subtract x from both sides → $2x + 2 = 10$ → $2x = 8$ → $x = 4$. Move all x to one side, numbers to the other.",
          },
          {
            heading: "Common pitfalls",
            body: "**Order matters**: in $2x + 5$, the +5 was applied last — undo it first. In $2(x + 5)$, expand first or divide by 2 first. **Fractions**: clear denominators by multiplying both sides.\n\n**Always check**: substitute back into the ORIGINAL equation. $2(4) + 5 = 13$ ✓. If wrong, retrace — usually an order or sign error.",
          },
        ],
        keyFormulas: [
          {
            name: "Two-step method",
            statement: "Undo +/− first, then ×/÷ — reverse BIDMAS.",
          },
          {
            name: "Both sides",
            statement:
              "Collect variable terms on one side, constants on other.",
          },
        ],
        workedExample: {
          problem: "Solve $3x - 4 = 11$.",
          solution:
            "Add 4: $3x = 15$; divide by 3: $x = 5$. Check: $3(5) - 4 = 11$ ✓.",
        },
      },
      questions: [
        {
          id: "edm7-u3-twostep-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $2x + 3 = 11$.",
          response: {
            type: "numeric",
            parts: [{ label: "x", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Two-step",
                statement: "Subtract 3, then divide by 2.",
              },
            ],
            steps: [
              {
                reasoning: "$2x = 8$, $x = 4$.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "$x = 4$",
            commonErrors: ["Dividing first — getting $x = 7$."],
          },
        },
        {
          id: "edm7-u3-twostep-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $5x - 7 = 18$.",
          response: {
            type: "numeric",
            parts: [{ label: "x", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Two-step",
                statement: "Add 7 then divide by 5.",
              },
            ],
            steps: [
              { reasoning: "$5x = 25$.", marks: 1, markCode: "M" },
              { reasoning: "$x = 5$.", marks: 1, markCode: "M" },
              {
                reasoning: "Check: $5(5) - 7 = 18$ ✓.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 5$",
            commonErrors: ["Subtracting 7 instead of adding."],
          },
        },
        {
          id: "edm7-u3-twostep-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $4x + 3 = 2x + 15$.",
          response: {
            type: "numeric",
            parts: [{ label: "x", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Both sides",
                statement: "Collect x terms and constants separately.",
              },
            ],
            steps: [
              {
                reasoning: "Subtract $2x$: $2x + 3 = 15$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subtract 3: $2x = 12$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$x = 6$.", marks: 1, markCode: "M" },
              {
                reasoning: "Check: $24 + 3 = 27$, $12 + 15 = 27$ ✓.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 6$",
            commonErrors: ["Not collecting like terms properly."],
          },
        },
        {
          id: "edm7-u3-twostep-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A number is doubled and 5 is added to give 21.",
          parts: [
            { label: "a", prompt: "Write this as an equation.", marks: 2 },
            { label: "b", prompt: "Solve the equation.", marks: 4 },
            { label: "c", prompt: "State the original number.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Word problems to equations",
                statement: "Translate words to algebra, solve, interpret.",
              },
            ],
            steps: [
              {
                reasoning: "$2x + 5 = 21$.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Subtract 5: $2x = 16$.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Divide by 2: $x = 8$.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Check: $2(8) + 5 = 21$ ✓.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Correct answer.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "Original number = 8.",
                marks: 2,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "(a) $2x + 5 = 21$ (b) $x = 8$ (c) 8",
            commonErrors: [
              "Wrong equation — $2(x+5)$ instead of $2x+5$.",
              "Forgetting to answer the question.",
            ],
          },
        },
      ],
    },
  ],
};
