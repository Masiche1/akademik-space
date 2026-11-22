import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "edpm5-u2-lesson-2-3",
  code: "2-3",
  title: "Fractions of Amounts and Mixed Numbers",
  goal: "I CAN find fractions of amounts and convert between mixed numbers and improper fractions.",
  standards: ["Year 5 Fractions"],
  vocabulary: [
    { term: "Mixed number", definition: "Whole number plus fraction: 2 3/4." },
    {
      term: "Improper fraction",
      definition: "Numerator bigger than denominator: 11/4.",
    },
    { term: "Unit fraction", definition: "1 on top: 1/4, 1/5, 1/8." },
    { term: "Non-unit fraction", definition: "More than 1 on top: 3/4, 5/8." },
  ],
  concepts: [
    {
      id: "edpm5-u2-mixed",
      title: "Mixed numbers and improper fractions",
      skill: "Convert between mixed numbers and improper fractions.",
      lesson: {
        sections: [
          {
            heading: "Improper to mixed",
            body: "Divide numerator by denominator: 11/4 = 2 remainder 3 → 2 3/4. The quotient is the whole number, remainder is the new numerator. 17/5 = 3 remainder 2 → 3 2/5.",
          },
          {
            heading: "Mixed to improper",
            body: "Multiply whole by denominator, add numerator: 2 3/4 = (2×4 + 3)/4 = 11/4. 3 2/5 = (3×5 + 2)/5 = 17/5. Useful for adding/subtracting fractions.",
          },
        ],
        keyFormulas: [
          {
            name: "Improper → mixed",
            statement: "Divide: quotient = whole, remainder = numerator",
          },
          {
            name: "Mixed → improper",
            statement: "(whole × denom) + numerator over denom",
          },
        ],
        workedExample: {
          problem: "Convert 3 1/6 to an improper fraction.",
          solution: "(3 × 6) + 1 = 19 → 19/6.",
        },
      },
      questions: [
        {
          id: "edpm5-u2-mx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Convert 7/4 to a mixed number.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1 4/3" },
              { id: "b", text: "1 3/4" },
              { id: "c", text: "7 1/4" },
              { id: "d", text: "1 1/4" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Improper to mixed",
                statement: "7 ÷ 4 = 1 r3 → 1 3/4.",
              },
            ],
            steps: [
              { reasoning: "7/4 = 1 whole + 3/4.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 1 3/4",
            commonErrors: [
              "Writing 1 4/3 — remainder can't exceed denominator.",
            ],
          },
        },
        {
          id: "edpm5-u2-mx-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Convert 2 3/5 to an improper fraction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mixed to improper",
                statement: "(2×5)+3 = 13 → 13/5.",
              },
            ],
            steps: [
              { reasoning: "2 × 5 = 10.", marks: 1, markCode: "M" },
              { reasoning: "10 + 3 = 13 → 13/5.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 13/5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "13/5",
            commonErrors: [
              "Writing 23/5 — adding instead of multiplying first.",
            ],
          },
        },
        {
          id: "edpm5-u2-mx-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Convert 19/6 to a mixed number.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Improper to mixed",
                statement: "19 ÷ 6 = 3 r1 → 3 1/6.",
              },
            ],
            steps: [
              { reasoning: "19 ÷ 6 = 3 remainder 1.", marks: 1, markCode: "M" },
              {
                reasoning: "Whole = 3, fraction = 1/6.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 3 1/6.", marks: 1, markCode: "A" },
              { reasoning: "Reasoning shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 1/6",
            commonErrors: [
              "Writing 3 6/1 — swapping numerator and denominator.",
            ],
          },
        },
        {
          id: "edpm5-u2-mx-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Convert these and order smallest to largest: 1 1/2, 7/4, 1 3/4.",
          parts: [
            {
              label: "a",
              prompt: "Convert all to improper fractions.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Convert all to mixed numbers (if needed).",
              marks: 3,
            },
            { label: "c", prompt: "Write the order.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mixed/improper conversion",
                statement:
                  "1 1/2=3/2, 7/4, 1 3/4=7/4. Order: 1 1/2 < 1 3/4 = 7/4.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "1 1/2 = 3/2; 7/4 stays; 1 3/4 = 7/4.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "All three converted correctly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Method shown.",
                marks: 1,
                markCode: "A",
              },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "3/2 = 1 1/2; 7/4 = 1 3/4 (×2 both).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Both correct as mixed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "7/4 = 1 3/4 shown.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "1 1/2 < 1 3/4 (since 3/2 = 6/4 < 7/4).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Order: 1 1/2, 1 3/4, 7/4 — but 1 3/4 = 7/4 equal!",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Answer: 1 1/2 smallest; 1 3/4 = 7/4 equal largest.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3/2, 7/4, 7/4; order: 1 1/2 < 1 3/4 = 7/4",
            commonErrors: ["Not recognising 1 3/4 and 7/4 are the same value."],
          },
        },
      ],
    },
    {
      id: "edpm5-u2-amounts",
      title: "Fractions of amounts",
      skill: "Find unit and non-unit fractions of quantities in real contexts.",
      lesson: {
        sections: [
          {
            heading: "Unit fractions of amounts",
            body: "One fifth of 45 = 45 ÷ 5 = 9. One eighth of 64 = 64 ÷ 8 = 8. Always divide by the denominator.",
          },
          {
            heading: "Non-unit fractions",
            body: "Two fifths of 45 = (45 ÷ 5) × 2 = 9 × 2 = 18. Three quarters of 48 = (48 ÷ 4) × 3 = 12 × 3 = 36. For awkward amounts, find the unit fraction first then multiply.",
          },
        ],
        keyFormulas: [
          { name: "Unit fraction", statement: "1/n of amount = amount ÷ n" },
          { name: "Non-unit", statement: "a/n of amount = (amount ÷ n) × a" },
        ],
        workedExample: {
          problem: "Find three eighths of 48.",
          solution: "Eighth of 48 = 6; three eighths = 6 × 3 = 18.",
        },
      },
      questions: [
        {
          id: "edpm5-u2-am-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is one fifth of 45?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9" },
              { id: "b", text: "10" },
              { id: "c", text: "5" },
              { id: "d", text: "40" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Unit fraction",
                statement: "45 ÷ 5 = 9.",
              },
            ],
            steps: [
              { reasoning: "Divide by denominator.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 9",
            commonErrors: ["Multiplying instead of dividing."],
          },
        },
        {
          id: "edpm5-u2-am-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is three quarters of 48?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 36, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Non-unit fraction",
                statement: "48 ÷ 4 = 12; 12 × 3 = 36.",
              },
            ],
            steps: [
              { reasoning: "Quarter of 48 = 12.", marks: 1, markCode: "M" },
              {
                reasoning: "Three quarters = 12 × 3 = 36.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 36.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "36",
            commonErrors: ["Answering 12 — one quarter not three quarters."],
          },
        },
        {
          id: "edpm5-u2-am-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A class of 32 children: five eighths walk to school. How many walk?",
          response: {
            type: "numeric",
            parts: [{ label: "Walk", answer: 20, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fraction of amount",
                statement: "32 ÷ 8 = 4; 4 × 5 = 20.",
              },
            ],
            steps: [
              { reasoning: "Eighth of 32 = 4.", marks: 1, markCode: "M" },
              {
                reasoning: "Five eighths = 4 × 5 = 20.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 20 children.", marks: 1, markCode: "A" },
              { reasoning: "Check: 20 + 12 = 32. ✓", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20",
            commonErrors: ["Using wrong denominator — 32 ÷ 5 doesn't work."],
          },
        },
        {
          id: "edpm5-u2-am-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A farmer has 96 sheep. He sells two thirds of them.",
          parts: [
            { label: "a", prompt: "How many sheep does he sell?", marks: 3 },
            { label: "b", prompt: "How many sheep does he keep?", marks: 3 },
            {
              label: "c",
              prompt:
                "If he buys 18 more sheep, what fraction of his new total are the original kept sheep?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fraction problems",
                statement:
                  "2/3 of 96 = 64 sold; 32 kept; new total 50; 32/50 = 16/25.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Third of 96 = 32; two thirds = 64.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: 64 sheep sold.",
                marks: 1,
                markCode: "A",
              },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Kept = 96 − 64 = 32.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: 32 sheep.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Or one third of 96 = 32.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "New total = 32 + 18 = 50.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Fraction = 32/50.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Simplify: 32/50 = 16/25.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Answer: 16/25.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "64 sold; 32 kept; 16/25",
            commonErrors: [
              "For part (c): using 32/18 or forgetting to simplify.",
            ],
          },
        },
      ],
    },
  ],
};
