import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "edpm1-u3-lesson-3-1",
  code: "3-1",
  title: "Multiplication: Equal Groups",
  goal: "I CAN use multiplication to find totals in equal groups, counting in 2s, 5s and 10s.",
  standards: ["Year 1 Multiplication and division"],
  vocabulary: [
    {
      term: "Multiply",
      definition:
        "Find the total when groups are equal, e.g. 3 bags of 4 = 12.",
    },
    {
      term: "Equal groups",
      definition: "Groups that all have the same number of items.",
    },
    {
      term: "Times",
      definition: "Another word for multiply: 3 times 4 means 3 groups of 4.",
    },
    {
      term: "Skip count",
      definition: "Count in steps of 2, 5 or 10 instead of 1.",
    },
    {
      term: "Total",
      definition: "The whole amount when all groups are combined.",
    },
  ],
  concepts: [
    {
      id: "edpm1-u3-multiplication",
      title: "Multiplication as equal groups",
      skill:
        "Use multiplication to find totals of equal groups, counting in 2s, 5s and 10s.",
      lesson: {
        sections: [
          {
            heading: "Equal groups",
            body: "Multiplication finds the total of **equal groups**. 3 bags with 4 apples in each = 3 × 4 = 12 apples. The groups must be equal — if one bag has 5 apples, you can't use multiplication, you must add: 4 + 4 + 5 = 13.",
          },
          {
            heading: "Counting in 2s, 5s and 10s",
            body: "Multiplication is repeated addition. 4 × 3 = 3 + 3 + 3 + 3 = 12, or count in 3s four times. For groups of 2: 5 × 2 = 10. For groups of 5: 3 × 5 = 15. For groups of 10: 4 × 10 = 40. Skip counting makes it quick.",
          },
          {
            heading: "Arrays and arrays",
            body: "Draw objects in rows and columns to see multiplication. 3 rows of 4 dots = 3 × 4 = 12 dots. The array shows both 3 × 4 and 4 × 3 give the same total — this is called the commutative property.",
          },
        ],
        keyFormulas: [
          {
            name: "Multiplication",
            statement: "groups × in each = total, e.g. 3 × 4 = 12",
          },
          {
            name: "Skip counting",
            statement: "2s: 2,4,6,8...; 5s: 5,10,15,20...; 10s: 10,20,30...",
          },
        ],
        workedExample: {
          problem:
            "There are 4 baskets. Each basket has 5 eggs. How many eggs altogether?",
          solution:
            "4 equal groups of 5 → 4 × 5 = 20 eggs. Count in 5s: 5, 10, 15, 20.",
        },
      },
      questions: [
        {
          id: "edpm1-u3-mult-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "There are 3 bags with 4 sweets in each bag. How many sweets altogether?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "64" },
              { id: "b", text: "7" },
              { id: "c", text: "16" },
              { id: "d", text: "12" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Equal groups",
                statement: "3 × 4 = 12.",
              },
            ],
            steps: [
              {
                reasoning: "3 groups of 4: 4 + 4 + 4 = 12.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** 12",
            commonErrors: [
              "Adding 3 + 4 = 7 — groups must be multiplied, not added.",
            ],
          },
        },
        {
          id: "edpm1-u3-mult-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is 5 × 2?",
          response: {
            type: "numeric",
            parts: [{ label: "5 × 2", answer: 10, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Times 2",
                statement: "5 × 2 = 10 (double 5).",
              },
            ],
            steps: [
              {
                reasoning: "5 groups of 2 = 2 + 2 + 2 + 2 + 2 = 10.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Or double 5 = 10.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 10.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
            commonErrors: ["Answering 7 — adding instead of multiplying."],
          },
        },
        {
          id: "edpm1-u3-mult-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A car has 4 wheels. How many wheels do 3 cars have?",
          response: {
            type: "numeric",
            parts: [{ label: "Total wheels", answer: 12, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Real multiplication",
                statement: "3 × 4 = 12.",
              },
            ],
            steps: [
              {
                reasoning: "3 equal groups of 4 wheels.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "3 × 4 = 12.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 12 wheels.", marks: 1, markCode: "A" },
              { reasoning: "Units included.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12 wheels",
            commonErrors: ["Answering 7 — adding 3 + 4."],
          },
        },
        {
          id: "edpm1-u3-mult-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "There are 5 pencils in each pot. There are 4 pots.",
          parts: [
            { label: "a", prompt: "How many pencils altogether?", marks: 3 },
            {
              label: "b",
              prompt:
                "If you swap the numbers (4 × 5), do you get the same answer? Explain why.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "If 2 more pots are added, how many pencils are there now?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multiplication properties",
                statement: "a × b = b × a; adding groups increases total.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "5 × 4 = 20 pencils.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "5 + 5 + 5 + 5 = 20.",
                marks: 1,
                markCode: "M",
              },
              { part: "a", reasoning: "Answer: 20.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "4 × 5 = 20 — same answer.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Multiplication is commutative: order doesn't matter.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Explanation clear.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "2 more pots = 2 × 5 = 10 more pencils.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Total = 20 + 10 = 30.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Or 6 × 5 = 30.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Answer: 30 pencils.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "20; yes, same because multiplication is commutative; 30",
            commonErrors: ["Adding 2 + 5 instead of 2 × 5 for part (c)."],
          },
        },
      ],
    },
    {
      id: "edpm1-u3-times-tables",
      title: "Times tables: 2s, 5s and 10s",
      skill: "Recall and use the 2, 5 and 10 times tables to multiply quickly.",
      lesson: {
        sections: [
          {
            heading: "The 2 times table",
            body: "Counting in 2s: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20. These are all the even numbers. 2 × 1 = 2, 2 × 2 = 4, 2 × 3 = 6 ... up to 2 × 10 = 20. Learn them — they are the foundation for doubling.",
          },
          {
            heading: "The 5 times table",
            body: "Counting in 5s: 5, 10, 15, 20, 25, 30, 35, 40, 45, 50. All end in 0 or 5. 5 × 1 = 5, 5 × 2 = 10, 5 × 3 = 15 ... 5 × 10 = 50. The 5 times table is half of the 10 times table.",
          },
          {
            heading: "The 10 times table",
            body: "Counting in 10s: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100. Each is 10 more than the last. 10 × 1 = 10, 10 × 2 = 20 ... 10 × 10 = 100. Add a zero to the multiplier: 10 × 4 = 40.",
          },
        ],
        keyFormulas: [
          { name: "2 times table", statement: "2,4,6,8,10,12,14,16,18,20" },
          { name: "5 times table", statement: "5,10,15,20,25,30,35,40,45,50" },
          {
            name: "10 times table",
            statement: "10,20,30,40,50,60,70,80,90,100",
          },
        ],
        workedExample: {
          problem: "What is 5 × 6?",
          solution: "Count in 5s six times: 5, 10, 15, 20, 25, 30. Answer: 30.",
        },
      },
      questions: [
        {
          id: "edpm1-u3-tt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 2 × 6?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8" },
              { id: "b", text: "14" },
              { id: "c", text: "12" },
              { id: "d", text: "10" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "2 times table",
                statement: "2 × 6 = 12.",
              },
            ],
            steps: [
              {
                reasoning: "6th even number: 2,4,6,8,10,12.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** 12",
            commonErrors: ["Counting one step too far."],
          },
        },
        {
          id: "edpm1-u3-tt-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is 10 × 7?",
          response: {
            type: "numeric",
            parts: [{ label: "10 × 7", answer: 70, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "10 times table",
                statement: "10 × 7 = 70 (7 with a zero).",
              },
            ],
            steps: [
              { reasoning: "10 × 7 = 70.", marks: 1, markCode: "B" },
              { reasoning: "Add zero to 7 → 70.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 70.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "70",
            commonErrors: ["Answering 17 — adding instead of multiplying."],
          },
        },
        {
          id: "edpm1-u3-tt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A shop sells stickers in packs of 5. How many stickers are in 4 packs?",
          response: {
            type: "numeric",
            parts: [{ label: "Stickers", answer: 20, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "5 times table in context",
                statement: "4 × 5 = 20.",
              },
            ],
            steps: [
              { reasoning: "4 packs of 5 = 4 × 5.", marks: 1, markCode: "M" },
              { reasoning: "4 × 5 = 20.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 20 stickers.", marks: 1, markCode: "A" },
              { reasoning: "Units included.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 stickers",
            commonErrors: ["Answering 9 — adding 4 + 5."],
          },
        },
        {
          id: "edpm1-u3-tt-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Complete the pattern: 5, 10, 15, 20, __, __, 35.",
          parts: [
            {
              label: "a",
              prompt: "What is the rule for this pattern?",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Fill in the two missing numbers.",
              marks: 4,
            },
            {
              label: "c",
              prompt: "What number comes 2 steps after 35?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Counting in 5s",
                statement: "Each number is 5 more than the last.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Rule: counting in 5s / add 5 each time.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Or: multiples of 5.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Rule stated clearly.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning: "After 20 comes 25.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Then 30.", marks: 1, markCode: "M" },
              {
                part: "b",
                reasoning: "Both missing numbers correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Pattern continues to 35 correctly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "2 steps after 35: 40, 45.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Answer: 45.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Reasoning shown.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Counting in 5s; 25, 30; 45",
            commonErrors: ["Writing 26 instead of 25 — adding 1 not 5."],
          },
        },
      ],
    },
  ],
};
