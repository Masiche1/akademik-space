import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "edpm2-u2-lesson-2-1",
  code: "2-1",
  title: "Multiplication and Division Facts",
  goal: "I CAN recall and use multiplication and division facts for 2, 5 and 10.",
  standards: ["Year 2 Multiplication and division"],
  vocabulary: [
    {
      term: "Times table",
      definition:
        "A set of multiplication facts, e.g. the 5 times table: 5, 10, 15, 20...",
    },
    { term: "Product", definition: "The answer to a multiplication." },
    { term: "Quotient", definition: "The answer to a division." },
    {
      term: "Inverse",
      definition: "Division undoes multiplication: 5 × 4 = 20 so 20 ÷ 5 = 4.",
    },
    {
      term: "Fact family",
      definition: "Related × and ÷ facts from the same numbers, e.g. 5, 4, 20.",
    },
  ],
  concepts: [
    {
      id: "edpm2-u2-mult",
      title: "Multiplication facts to 10 × 10",
      skill: "Recall multiplication facts for 2, 5 and 10 up to 10 × 10 = 100.",
      lesson: {
        sections: [
          {
            heading: "The 2, 5 and 10 times tables",
            body: "Learn them off by heart: 2s go up to 20, 5s up to 50, 10s up to 100. Counting in 5s: 5, 10, 15, 20, 25, 30, 35, 40, 45, 50. Counting in 10s: 10, 20, 30 ... 100. Each is the previous +5 or +10.",
          },
          {
            heading: "Multiplication as equal groups",
            body: "3 × 5 means 3 groups of 5 = 15. Or 5 groups of 3 = 15 — same answer. Draw an array (rows and columns) to see it: 3 rows of 5 dots = 15 dots total.",
          },
          {
            heading: "Fact families",
            body: "Every multiplication has a fact family. From 4, 5, 20: 4 × 5 = 20, 5 × 4 = 20, 20 ÷ 4 = 5, 20 ÷ 5 = 4. Learning one fact gives you all four.",
          },
        ],
        keyFormulas: [
          { name: "Times tables", statement: "2s→20, 5s→50, 10s→100" },
          {
            name: "Fact family",
            statement: "a × b = p gives p ÷ a = b and p ÷ b = a",
          },
        ],
        workedExample: {
          problem: "What is 7 × 5? Write the fact family.",
          solution:
            "7 × 5 = 35. Family: 7 × 5 = 35, 5 × 7 = 35, 35 ÷ 7 = 5, 35 ÷ 5 = 7.",
        },
      },
      questions: [
        {
          id: "edpm2-u2-mult-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 6 × 5?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "35" },
              { id: "b", text: "30" },
              { id: "c", text: "11" },
              { id: "d", text: "25" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "5 times table",
                statement: "6 × 5 = 30.",
              },
            ],
            steps: [
              {
                reasoning: "Count in 5s six times: 5,10,15,20,25,30.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 30",
            commonErrors: ["Adding 6 + 5 = 11."],
          },
        },
        {
          id: "edpm2-u2-mult-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is 9 × 2?",
          response: {
            type: "numeric",
            parts: [{ label: "9 × 2", answer: 18, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "2 times table",
                statement: "9 × 2 = 18 (double 9).",
              },
            ],
            steps: [
              { reasoning: "9 + 9 = 18.", marks: 1, markCode: "M" },
              {
                reasoning: "Or 9th even number = 18.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 18.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "18",
            commonErrors: ["Answering 11 — adding instead of doubling."],
          },
        },
        {
          id: "edpm2-u2-mult-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A cinema has 8 rows with 5 seats in each row. How many seats altogether?",
          response: {
            type: "numeric",
            parts: [{ label: "Total seats", answer: 40, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Equal groups",
                statement: "8 × 5 = 40.",
              },
            ],
            steps: [
              { reasoning: "8 rows of 5 = 8 × 5.", marks: 1, markCode: "M" },
              { reasoning: "8 × 5 = 40.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 40 seats.", marks: 1, markCode: "A" },
              { reasoning: "Units included.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "40 seats",
            commonErrors: ["Answering 13 — adding 8 + 5."],
          },
        },
        {
          id: "edpm2-u2-mult-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "There are 6 boxes of 10 pencils each.",
          parts: [
            { label: "a", prompt: "How many pencils altogether?", marks: 2 },
            {
              label: "b",
              prompt:
                "If 2 boxes are opened and used, how many pencils are left?",
              marks: 4,
            },
            {
              label: "c",
              prompt: "Write the fact family for 6 × 10.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "10 times table",
                statement: "6 × 10 = 60; fact family includes division.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "6 × 10 = 60 pencils.",
                marks: 1,
                markCode: "B",
              },
              { part: "a", reasoning: "Answer: 60.", marks: 1, markCode: "B" },
              {
                part: "b",
                reasoning: "2 boxes = 2 × 10 = 20 used.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "60 − 20 = 40 left.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Or 4 × 10 = 40.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Answer: 40 pencils.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "6 × 10 = 60 and 10 × 6 = 60.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "60 ÷ 6 = 10 and 60 ÷ 10 = 6.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "All four facts correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Facts linked to the multiplication.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "60; 40; 6×10=60, 10×6=60, 60÷6=10, 60÷10=6",
            commonErrors: ["Forgetting the division facts in the family."],
          },
        },
      ],
    },
    {
      id: "edpm2-u2-division",
      title: "Division facts",
      skill: "Use division as the inverse of multiplication for 2, 5 and 10.",
      lesson: {
        sections: [
          {
            heading: "Division as sharing",
            body: "Division can mean sharing equally: 20 sweets shared between 5 children = 4 each, because 5 × 4 = 20. 'How many in each' → divide by the number of groups.",
          },
          {
            heading: "Division as grouping",
            body: "Division can mean grouping: 20 sweets in bags of 5 = 4 bags, because 5 × 4 = 20. 'How many groups' → divide by the group size. Both give the same answer when the numbers match.",
          },
          {
            heading: "Using times tables to divide",
            body: "Division is the inverse of multiplication. To find 45 ÷ 5, ask: 5 × __ = 45. Count in 5s: 5,10,15...45 — that's 9 steps. So 45 ÷ 5 = 9. Knowing times tables makes division instant.",
          },
        ],
        keyFormulas: [
          { name: "Sharing", statement: "total ÷ groups = each" },
          {
            name: "Grouping",
            statement: "total ÷ group size = number of groups",
          },
          { name: "Inverse", statement: "If a × b = p then p ÷ a = b" },
        ],
        workedExample: {
          problem: "Work out 60 ÷ 10.",
          solution: "10 × 6 = 60, so 60 ÷ 10 = 6.",
        },
      },
      questions: [
        {
          id: "edpm2-u2-div-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 20 ÷ 5?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "15" },
              { id: "b", text: "4" },
              { id: "c", text: "25" },
              { id: "d", text: "5" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Division inverse",
                statement: "5 × 4 = 20, so 20 ÷ 5 = 4.",
              },
            ],
            steps: [{ reasoning: "5 × 4 = 20.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 4",
            commonErrors: ["Answering 5 — using the divisor not the quotient."],
          },
        },
        {
          id: "edpm2-u2-div-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is 50 ÷ 5?",
          response: {
            type: "numeric",
            parts: [{ label: "50 ÷ 5", answer: 10, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "5 times table inverse",
                statement: "5 × 10 = 50.",
              },
            ],
            steps: [
              { reasoning: "5 × 10 = 50.", marks: 1, markCode: "B" },
              { reasoning: "So 50 ÷ 5 = 10.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 10.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
            commonErrors: ["Answering 45 — subtracting instead of dividing."],
          },
        },
        {
          id: "edpm2-u2-div-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "36 children stand in rows of 4. How many rows are there?",
          response: {
            type: "numeric",
            parts: [{ label: "Number of rows", answer: 9, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Grouping",
                statement: "36 ÷ 4 = 9 rows.",
              },
            ],
            steps: [
              {
                reasoning: "Rows of 4 = groups of 4.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "4 × 9 = 36, so 9 rows.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 9 rows.", marks: 1, markCode: "A" },
              { reasoning: "Units included.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9 rows",
            commonErrors: ["Answering 32 — subtracting instead of dividing."],
          },
        },
        {
          id: "edpm2-u2-div-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "There are 40 sweets to share between 5 children equally.",
          parts: [
            {
              label: "a",
              prompt: "How many sweets does each child get?",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "If each child gives 2 sweets back to the pot, how many sweets are in the pot?",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "How many sweets would each child get if the pot's sweets were shared between 4 children instead?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Division problems",
                statement: "Share equally = divide; track changes carefully.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "40 ÷ 5 = 8 each.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "5 × 8 = 40. Check passes.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: 8 each.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "5 children × 2 = 10 returned.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Pot = 10 sweets.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: 10 sweets.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "40 ÷ 4 = 10 each.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "4 × 10 = 40. Check passes.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: 10 each.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Reasoning clear.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "8; 10; 10",
            commonErrors: [
              "Using the returned sweets count for part (c) instead of original 40.",
            ],
          },
        },
      ],
    },
  ],
};
