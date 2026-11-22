import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "edpm3-u2-lesson-2-1",
  code: "2-1",
  title: "Times Tables to 12 × 12",
  goal: "I CAN recall and use all multiplication facts up to 12 × 12 = 144.",
  standards: ["Year 3 Multiplication and division"],
  vocabulary: [
    {
      term: "Times table",
      definition: "A set of multiplication facts for one number.",
    },
    { term: "Product", definition: "The answer to a multiplication." },
    {
      term: "Factor",
      definition:
        "A number being multiplied, e.g. in 6 × 7 the factors are 6 and 7.",
    },
    { term: "Commutative", definition: "Order doesn't matter: 6 × 7 = 7 × 6." },
    { term: "Inverse", definition: "Division undoes multiplication." },
  ],
  concepts: [
    {
      id: "edpm3-u2-times-tables",
      title: "All times tables",
      skill: "Recall multiplication facts for all tables to 12 × 12.",
      lesson: {
        sections: [
          {
            heading: "The remaining tables",
            body: "You know 2s, 5s and 10s. Now learn 3s, 4s, 6s, 7s, 8s, 9s, 11s and 12s. Counting in 3s: 3,6,9,12...36. In 4s: 4,8,12...48. In 12s: 12,24,36...144. Each table has a pattern — learn the tricky ones (7s, 8s, 9s) with songs or flashcards.",
          },
          {
            heading: "Tricks for hard tables",
            body: "**9 times table**: digits add to 9 — 9×4=36 (3+6=9), 9×7=63 (6+3=9). **11 times table**: 11×n = n written twice for n<10 — 11×4=44. For two digits: 11×12=132 (12 + 12×10). **12 times table**: 12×n = 10×n + 2×n — 12×6 = 60 + 12 = 72.",
          },
          {
            heading: "Commutative and inverse",
            body: "Multiplication is commutative: 7 × 8 = 8 × 7 = 56 — learn half the facts. Division is inverse: 56 ÷ 7 = 8 because 7 × 8 = 56. Every × fact gives a ÷ fact.",
          },
        ],
        keyFormulas: [
          { name: "9 times trick", statement: "9 × n: digits sum to 9" },
          { name: "12 times trick", statement: "12 × n = 10n + 2n" },
          { name: "Commutative", statement: "a × b = b × a" },
        ],
        workedExample: {
          problem: "What is 8 × 7? Use a trick if you can.",
          solution:
            "8 × 7 = 56. Or 7 × 8: double 7 = 14, double again = 28, double again = 56.",
        },
      },
      questions: [
        {
          id: "edpm3-u2-tt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 7 × 8?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "48" },
              { id: "b", text: "63" },
              { id: "c", text: "54" },
              { id: "d", text: "56" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Times tables",
                statement: "7 × 8 = 56.",
              },
            ],
            steps: [
              {
                reasoning: "7 × 8 = 56 (memorised fact).",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** 56",
            commonErrors: ["Confusing with 7 × 9 = 63 or 6 × 8 = 48."],
          },
        },
        {
          id: "edpm3-u2-tt-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is 9 × 6? Use the digit trick to check.",
          response: {
            type: "numeric",
            parts: [{ label: "9 × 6", answer: 54, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "9 times table",
                statement: "9 × 6 = 54; 5 + 4 = 9.",
              },
            ],
            steps: [
              { reasoning: "9 × 6 = 54.", marks: 1, markCode: "B" },
              {
                reasoning: "Check: 5 + 4 = 9. Correct.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 54.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "54",
            commonErrors: ["Answering 63 — that's 9 × 7."],
          },
        },
        {
          id: "edpm3-u2-tt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is 12 × 9?",
          response: {
            type: "numeric",
            parts: [{ label: "12 × 9", answer: 108, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "12 times table",
                statement: "12 × 9 = 108.",
              },
            ],
            steps: [
              {
                reasoning: "12 × 9 = 10 × 9 + 2 × 9 = 90 + 18.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "90 + 18 = 108.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 108.", marks: 1, markCode: "A" },
              { reasoning: "Method shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "108",
            commonErrors: ["Answering 96 — that's 12 × 8."],
          },
        },
        {
          id: "edpm3-u2-tt-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Complete the pattern: 8, 16, 24, __, 40, __.",
          parts: [
            { label: "a", prompt: "What is the rule?", marks: 2 },
            {
              label: "b",
              prompt: "Fill in the two missing numbers.",
              marks: 4,
            },
            {
              label: "c",
              prompt: "What is the 12th number in this pattern?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Times table patterns",
                statement: "8s: each term is 8 more; 8 × n = term.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Rule: counting in 8s / multiples of 8.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Or 8 times table.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "After 24 comes 32.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Then 40, then 48.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Missing: 32 and 48.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Pattern continues correctly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "12th term = 8 × 12 = 96.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Or count: 8,16,...,96.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Answer: 96.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Reasoning clear.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Counting in 8s; 32 and 48; 96",
            commonErrors: ["Confusing the 8 times table with 8 + n."],
          },
        },
      ],
    },
    {
      id: "edpm3-u2-times-problems",
      title: "Multiplication and division problems",
      skill:
        "Solve word problems using times tables and division with remainders.",
      lesson: {
        sections: [
          {
            heading: "Multiplication in context",
            body: "'Each' and 'every' signal multiplication: 7 boxes of 6 apples = 7 × 6 = 42. 'Altogether' after equal groups also means multiply. Check groups are equal before multiplying.",
          },
          {
            heading: "Division with larger numbers",
            body: "Division uses times tables: 96 ÷ 8 = 12 because 8 × 12 = 96. For remainders: 100 ÷ 8 = 12 remainder 4 (8 × 12 = 96, 100 − 96 = 4). In context, decide if you round up (need more groups) or down.",
          },
          {
            heading: "Two-step problems",
            body: "'There are 9 bags of 8 marbles. 15 are lost.' Total = 9 × 8 = 72, left = 72 − 15 = 57. Read carefully — sometimes you multiply then divide, or divide then multiply.",
          },
        ],
        keyFormulas: [
          { name: "Equal groups", statement: "groups × size = total" },
          {
            name: "Division inverse",
            statement: "total ÷ size = groups (check with ×)",
          },
          {
            name: "Remainder",
            statement: "total = (groups × size) + leftover",
          },
        ],
        workedExample: {
          problem:
            "48 children need minibus seats. Each minibus holds 8. How many minibuses?",
          solution: "48 ÷ 8 = 6 minibuses exactly. Check: 6 × 8 = 48.",
        },
      },
      questions: [
        {
          id: "edpm3-u2-mp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "There are 8 crates with 7 apples in each. How many apples?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "48" },
              { id: "b", text: "15" },
              { id: "c", text: "54" },
              { id: "d", text: "56" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Equal groups",
                statement: "8 × 7 = 56.",
              },
            ],
            steps: [
              { reasoning: "8 groups of 7 = 56.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** 56",
            commonErrors: ["Adding 8 + 7 = 15."],
          },
        },
        {
          id: "edpm3-u2-mp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is 84 ÷ 7?",
          response: {
            type: "numeric",
            parts: [{ label: "84 ÷ 7", answer: 12, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Division inverse",
                statement: "7 × 12 = 84.",
              },
            ],
            steps: [
              { reasoning: "7 × 12 = 84.", marks: 1, markCode: "B" },
              { reasoning: "So 84 ÷ 7 = 12.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 12.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12",
            commonErrors: ["Answering 77 — subtracting instead of dividing."],
          },
        },
        {
          id: "edpm3-u2-mp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "100 sweets are shared equally between 8 children. How many does each get, and how many are left over?",
          response: {
            type: "numeric",
            parts: [
              { label: "Each child gets", answer: 12, tolerance: 0 },
              { label: "Left over", answer: 4, tolerance: 0 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Division with remainder",
                statement: "100 = (8 × 12) + 4.",
              },
            ],
            steps: [
              {
                reasoning: "8 × 12 = 96, remainder 4.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Each gets 12.", marks: 1, markCode: "M" },
              {
                reasoning: "Left over = 100 − 96 = 4.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Both answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12 each, 4 left over",
            commonErrors: ["Answering 13 each — ignoring the remainder."],
          },
        },
        {
          id: "edpm3-u2-mp-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A school hall has 120 chairs. They are arranged in rows of 12.",
          parts: [
            { label: "a", prompt: "How many rows are there?", marks: 2 },
            {
              label: "b",
              prompt:
                "If 3 rows are removed for a stage, how many chairs remain?",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "If the remaining chairs are rearranged into rows of 10, how many rows?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multi-step problems",
                statement: "Divide for rows; subtract removed; re-divide.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "120 ÷ 12 = 10 rows.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "a",
                reasoning: "Answer: 10 rows.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "3 rows = 3 × 12 = 36 chairs removed.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Remaining = 120 − 36 = 84.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Or 7 rows × 12 = 84.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Answer: 84 chairs.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "84 ÷ 10 = 8 remainder 4.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "8 full rows of 10 with 4 left over.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: 8 full rows (+4 spare).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Remainder recognised.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "10; 84; 8 rows + 4 left",
            commonErrors: ["Forgetting the remainder in part (c)."],
          },
        },
      ],
    },
  ],
};
