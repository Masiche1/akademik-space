import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "edpm6-u2-lesson-2-3",
  code: "2-3",
  title: "Problem Solving with Fractions, Decimals and Percentages",
  goal: "I CAN solve multi-step problems mixing fractions, decimals, percentages and BIDMAS.",
  standards: ["Year 6 Problem solving"],
  vocabulary: [
    {
      term: "Multi-step problem",
      definition: "A question needing several calculations in sequence.",
    },
    {
      term: "Of",
      definition:
        "Means multiply or divide depending on context: 'half of 20' = 10.",
    },
    {
      term: "Increase/decrease",
      definition: "Add or subtract a percentage/fraction of an amount.",
    },
    {
      term: "Remaining",
      definition: "What's left after removing a fraction or percentage.",
    },
  ],
  concepts: [
    {
      id: "edpm6-u2-problem-solving",
      title: "Multi-step problems",
      skill: "Solve problems combining fractions, decimals and percentages.",
      lesson: {
        sections: [
          {
            heading: "Reading carefully",
            body: "Break problems into steps. 'Half of the class of 28, then a quarter of those leave' → 28÷2=14, 14÷4=3.5? Not whole — check numbers. 'Two thirds of 45 sweets are eaten, then half the remainder' → 30 eaten, 15 left, half of 15 = 7.5? Check again — use clean numbers.",
          },
          {
            heading: "Mixing operations",
            body: "Combine BIDMAS with fractions: 1/2 of (20 + 8) = 1/2 × 28 = 14. Percentage of fraction: 25% of 3/4 = 0.25 × 0.75 = 0.1875? At primary level, find fraction first then percentage of result.",
          },
        ],
        keyFormulas: [
          {
            name: "Multi-step",
            statement: "Break into steps; use BIDMAS for expressions",
          },
          {
            name: "Remaining",
            statement:
              "remaining = total − used; then find fraction of remaining",
          },
        ],
        workedExample: {
          problem:
            "A pizza has 12 slices. Half are eaten. Of the remainder, a third are eaten. How many slices left?",
          solution: "12÷2=6 eaten; 6 left; 6÷3=2 eaten; 6−2=4 left.",
        },
      },
      questions: [
        {
          id: "edpm6-u2-ps-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A class of 24 children: half are boys. How many boys?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8" },
              { id: "b", text: "48" },
              { id: "c", text: "6" },
              { id: "d", text: "12" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fraction of amount",
                statement: "24 ÷ 2 = 12.",
              },
            ],
            steps: [{ reasoning: "Half of 24 = 12.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** 12",
            commonErrors: ["Multiplying 24 × 2."],
          },
        },
        {
          id: "edpm6-u2-ps-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A shop has 80 apples. It sells 3/4 of them. How many are left?",
          response: {
            type: "numeric",
            parts: [{ label: "Left", answer: 20, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fraction remaining",
                statement: "Sold 60; left 20.",
              },
            ],
            steps: [
              { reasoning: "3/4 of 80 = 60 sold.", marks: 1, markCode: "M" },
              { reasoning: "80 − 60 = 20 left.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 20.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20",
            commonErrors: ["Answering 60 — that's sold not left."],
          },
        },
        {
          id: "edpm6-u2-ps-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A jacket costs £80. It is reduced by 25%, then the sale price is reduced by a further £10.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Successive reductions",
                statement: "25% of £80=£20; £60−£10=£50.",
              },
            ],
            steps: [
              {
                reasoning: "25% of £80 = £20 off → £60.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "£60 − £10 = £50.", marks: 1, markCode: "M" },
              { reasoning: "Answer: £50.", marks: 1, markCode: "A" },
              { reasoning: "Two steps handled.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "£50",
            commonErrors: [
              "Adding £20 + £10 = £30 off original — wrong order.",
            ],
          },
        },
        {
          id: "edpm6-u2-ps-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A tank holds 120 litres. It is 3/4 full. 30 litres are poured out, then it is filled to 5/6 full.",
          parts: [
            {
              label: "a",
              prompt: "How many litres were in the tank initially?",
              marks: 3,
            },
            {
              label: "b",
              prompt: "How many litres remain after pouring out?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "How many litres are added to reach 5/6 full?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fraction problems",
                statement: "3/4 of 120=90; 90−30=60; 5/6 of 120=100; add 40.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "3/4 of 120 = 90 litres.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: 90 litres.",
                marks: 1,
                markCode: "A",
              },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "90 − 30 = 60 litres.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: 60 litres.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "5/6 of 120 = 100 litres needed.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Add = 100 − 60 = 40 litres.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: 40 litres.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Reasoning shown.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "90; 60; 40",
            commonErrors: [
              "For part (c): comparing to 3/4 instead of finding 5/6 target.",
            ],
          },
        },
      ],
    },
    {
      id: "edpm6-u2-algebra",
      title: "Algebra: expressions and equations",
      skill:
        "Write and evaluate algebraic expressions and solve one-step equations.",
      lesson: {
        sections: [
          {
            heading: "Expressions",
            body: "Algebra uses letters for unknowns: 3x means 3 × x. x + 5 is 'x plus 5'. Substitute values: if x=4, then 3x+5 = 12+5 = 17. Simplify: 2x + 3x = 5x; x + x = 2x.",
          },
          {
            heading: "One-step equations",
            body: "Solve by doing the inverse: x + 7 = 12 → x = 5; 3x = 15 → x = 5; x − 4 = 9 → x = 13; x ÷ 3 = 7 → x = 21. Check by substituting back.",
          },
        ],
        keyFormulas: [
          { name: "Expression", statement: "Letters + numbers + operations" },
          {
            name: "Solve",
            statement: "Do the inverse operation to both sides",
          },
        ],
        workedExample: {
          problem: "Solve 4x = 28.",
          solution: "x = 28 ÷ 4 = 7. Check: 4 × 7 = 28. ✓",
        },
      },
      questions: [
        {
          id: "edpm6-u2-al-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If x = 5, what is 2x + 3?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "16" },
              { id: "b", text: "10" },
              { id: "c", text: "25" },
              { id: "d", text: "13" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Substitution",
                statement: "2×5+3 = 10+3 = 13.",
              },
            ],
            steps: [{ reasoning: "Substitute x=5.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 13",
            commonErrors: [
              "Calculating 2+5+3=10 — not substituting correctly.",
            ],
          },
        },
        {
          id: "edpm6-u2-al-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve x + 9 = 15.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "One-step equation",
                statement: "x = 15 − 9 = 6.",
              },
            ],
            steps: [
              {
                reasoning: "Subtract 9 from both sides.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "x = 6.", marks: 1, markCode: "A" },
              { reasoning: "Check: 6 + 9 = 15. ✓", marks: 1, markCode: "A" },
            ],
            finalAnswer: "x = 6",
            commonErrors: ["Adding 9 instead of subtracting."],
          },
        },
        {
          id: "edpm6-u2-al-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve 3x = 21.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "One-step equation",
                statement: "x = 21 ÷ 3 = 7.",
              },
            ],
            steps: [
              { reasoning: "Divide both sides by 3.", marks: 1, markCode: "M" },
              { reasoning: "x = 7.", marks: 1, markCode: "A" },
              { reasoning: "Check: 3 × 7 = 21. ✓", marks: 1, markCode: "A" },
              { reasoning: "Reasoning shown.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "x = 7",
            commonErrors: ["Subtracting 3 instead of dividing."],
          },
        },
        {
          id: "edpm6-u2-al-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A number doubled plus 5 equals 21.",
          parts: [
            { label: "a", prompt: "Write this as an equation.", marks: 3 },
            { label: "b", prompt: "Solve the equation.", marks: 4 },
            { label: "c", prompt: "Check your answer.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Algebraic equations",
                statement: "2x + 5 = 21 → 2x = 16 → x = 8.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Let number = x; equation: 2x + 5 = 21.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Correct equation.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Reasoning shown.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning: "2x = 21 − 5 = 16.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "x = 16 ÷ 2 = 8.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: x = 8.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Method shown.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Check: 2×8 + 5 = 16 + 5 = 21. ✓",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Matches original equation.",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "Verified.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "2x + 5 = 21; x = 8; check 16+5=21 ✓",
            commonErrors: [
              "For part (b): dividing 21 by 2 directly instead of isolating 2x first.",
            ],
          },
        },
      ],
    },
  ],
};
