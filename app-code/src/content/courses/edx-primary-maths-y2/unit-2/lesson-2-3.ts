import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "edpm2-u2-lesson-2-3",
  code: "2-3",
  title: "Multiplication and Division Problems",
  goal: "I CAN solve word problems using multiplication and division with 2, 5 and 10.",
  standards: ["Year 2 Multiplication and division"],
  vocabulary: [
    {
      term: "Word problem",
      definition: "A maths problem told as a story or situation.",
    },
    {
      term: "Altogether",
      definition:
        "The total when amounts are combined — signals addition or multiplication.",
    },
    {
      term: "Each",
      definition: "Per group — signals multiplication or division.",
    },
    {
      term: "Share equally",
      definition: "Split into equal groups — signals division.",
    },
    {
      term: "Left over",
      definition: "Items remaining when they can't be grouped exactly.",
    },
  ],
  concepts: [
    {
      id: "edpm2-u2-mult-problems",
      title: "Multiplication word problems",
      skill: "Solve problems involving equal groups using multiplication.",
      lesson: {
        sections: [
          {
            heading: "Spotting multiplication",
            body: "Look for **equal groups**: 'each', 'every', 'altogether', 'in total'. 4 bags with 5 marbles each → 4 × 5 = 20. The groups must be equal — if amounts differ, you must add instead.",
          },
          {
            heading: "Two-step problems",
            body: "Some problems need two operations. 'There are 3 boxes of 10 pencils. 5 pencils are broken.' Total pencils = 3 × 10 = 30, then broken = 30 − 5 = 25 still good. Read carefully — 'altogether' might come first or last.",
          },
          {
            heading: "Checking with division",
            body: "After multiplying, check by dividing: 4 × 5 = 20, so 20 ÷ 4 = 5 should give the group size. If the check works, your answer is likely right.",
          },
        ],
        keyFormulas: [
          { name: "Equal groups", statement: "groups × size = total" },
          {
            name: "Keywords",
            statement:
              "each/every → multiply or divide; altogether → add or multiply",
          },
        ],
        workedExample: {
          problem:
            "There are 5 packs of cards. Each pack has 10 cards. How many cards altogether?",
          solution: "5 × 10 = 50 cards. Check: 50 ÷ 5 = 10 per pack. Correct.",
        },
      },
      questions: [
        {
          id: "edpm2-u2-mp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "There are 4 egg boxes. Each box holds 6 eggs. How many eggs altogether?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10" },
              { id: "b", text: "24" },
              { id: "c", text: "46" },
              { id: "d", text: "64" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Equal groups",
                statement: "4 × 6 = 24.",
              },
            ],
            steps: [
              { reasoning: "4 groups of 6 = 24.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 24",
            commonErrors: ["Adding 4 + 6 = 10."],
          },
        },
        {
          id: "edpm2-u2-mp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A bus has 5 rows with 4 seats in each row. How many seats?",
          response: {
            type: "numeric",
            parts: [{ label: "Total seats", answer: 20, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Equal groups",
                statement: "5 × 4 = 20.",
              },
            ],
            steps: [
              { reasoning: "5 rows of 4 = 5 × 4.", marks: 1, markCode: "M" },
              { reasoning: "5 × 4 = 20.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 20 seats.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20",
            commonErrors: ["Answering 9 — adding instead of multiplying."],
          },
        },
        {
          id: "edpm2-u2-mp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "There are 6 jars with 5 biscuits in each jar. 8 biscuits are eaten. How many biscuits are left?",
          response: {
            type: "numeric",
            parts: [{ label: "Biscuits left", answer: 22, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Two-step",
                statement: "6 × 5 = 30, 30 − 8 = 22.",
              },
            ],
            steps: [
              {
                reasoning: "Total biscuits = 6 × 5 = 30.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Left = 30 − 8 = 22.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 22 biscuits.", marks: 1, markCode: "A" },
              { reasoning: "Both steps shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "22 biscuits",
            commonErrors: ["Subtracting 8 from 6 or 5 instead of the total."],
          },
        },
        {
          id: "edpm2-u2-mp-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A shop sells pencils in packs of 10. Packs cost £1 each.",
          parts: [
            {
              label: "a",
              prompt: "How many pencils are in 3 packs?",
              marks: 2,
            },
            { label: "b", prompt: "How much do 3 packs cost?", marks: 2 },
            {
              label: "c",
              prompt:
                "If Tom buys 5 packs and gives away 2 packs, how many pencils does he have left?",
              marks: 6,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multi-step problems",
                statement: "Track totals through each operation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "3 × 10 = 30 pencils.",
                marks: 1,
                markCode: "B",
              },
              { part: "a", reasoning: "Answer: 30.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "3 × £1 = £3.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Answer: £3.", marks: 1, markCode: "B" },
              {
                part: "c",
                reasoning: "5 packs bought = 5 × 10 = 50 pencils.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "2 packs given = 2 × 10 = 20 pencils.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Left = 50 − 20 = 30.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Or 3 packs × 10 = 30.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Answer: 30 pencils.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Method clear.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "30; £3; 30 pencils",
            commonErrors: [
              "Forgetting to convert packs to pencils in part (c).",
            ],
          },
        },
      ],
    },
    {
      id: "edpm2-u2-div-problems",
      title: "Division word problems",
      skill: "Solve problems involving sharing and grouping using division.",
      lesson: {
        sections: [
          {
            heading: "Spotting division",
            body: "Look for **share equally**, **how many each**, **how many groups**, **left over**. 20 sweets shared between 5 children → 20 ÷ 5 = 4 each. 20 sweets in bags of 5 → 20 ÷ 5 = 4 bags. Same numbers, different meanings.",
          },
          {
            heading: "Remainders in context",
            body: "Sometimes division leaves a remainder. 23 children in cars of 4 → 5 cars with 3 children left over. In real life, you often need one more car (6 cars) or accept the leftover. Think about what the remainder means in the story.",
          },
          {
            heading: "Two-step division problems",
            body: "'There are 30 children. They stand in rows of 5. How many rows?' → 30 ÷ 5 = 6 rows. 'If 2 rows leave, how many children remain?' → 6 − 2 = 4 rows, 4 × 5 = 20 children. Combine division and multiplication carefully.",
          },
        ],
        keyFormulas: [
          { name: "Share", statement: "total ÷ groups = each" },
          { name: "Group", statement: "total ÷ size = number of groups" },
          {
            name: "Remainder",
            statement: "total = (groups × each) + leftover",
          },
        ],
        workedExample: {
          problem: "28 children share 28 stickers equally. How many each?",
          solution:
            "28 ÷ 4 = 7 each (if 4 children). Or if shared among the 28 children themselves: 28 ÷ 28 = 1 each. Read the question carefully.",
        },
      },
      questions: [
        {
          id: "edpm2-u2-dp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "18 children share 18 stickers equally. If there are 3 children, how many stickers each?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3" },
              { id: "b", text: "6" },
              { id: "c", text: "9" },
              { id: "d", text: "15" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sharing", statement: "18 ÷ 3 = 6." },
            ],
            steps: [
              {
                reasoning: "3 × 6 = 18, so each gets 6.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 6",
            commonErrors: ["Dividing by 18 instead of 3."],
          },
        },
        {
          id: "edpm2-u2-dp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "25 pencils are put into pots of 5. How many pots?",
          response: {
            type: "numeric",
            parts: [{ label: "Number of pots", answer: 5, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Grouping",
                statement: "25 ÷ 5 = 5 pots.",
              },
            ],
            steps: [
              { reasoning: "How many 5s in 25?", marks: 1, markCode: "M" },
              { reasoning: "5 × 5 = 25, so 5 pots.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5 pots.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 pots",
            commonErrors: ["Answering 20 — subtracting instead of dividing."],
          },
        },
        {
          id: "edpm2-u2-dp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "22 children need cars. Each car holds 5 children. How many cars are needed?",
          response: {
            type: "numeric",
            parts: [{ label: "Cars needed", answer: 5, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Remainder in context",
                statement: "22 ÷ 5 = 4 remainder 2 → need 5 cars.",
              },
            ],
            steps: [
              {
                reasoning: "22 ÷ 5 = 4 with 2 left over.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "4 cars hold 20, leaving 2 children.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Need 1 more car for the 2 left → 5 cars.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Answer: 5 cars.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 cars",
            commonErrors: ["Answering 4 — ignoring the 2 children left over."],
          },
        },
        {
          id: "edpm2-u2-dp-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "There are 45 children going on a trip. Each minibus holds 8 children.",
          parts: [
            { label: "a", prompt: "How many minibuses are needed?", marks: 4 },
            {
              label: "b",
              prompt:
                "How many children are in the last minibus if all others are full?",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "If a bigger bus holds 15 children, how many buses are needed?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Division with remainders",
                statement: "Round up when all must fit; check last group.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "45 ÷ 8 = 5 remainder 5.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "5 full buses hold 40, leaving 5 children.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Need 6th bus → 6 minibuses.",
                marks: 1,
                markCode: "A",
              },
              { part: "a", reasoning: "Answer: 6.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Last bus has 5 children.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Check: 5 × 8 + 5 = 45.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: 5 children.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "45 ÷ 15 = 3 exactly.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "3 buses needed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Answer: 3 buses.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6; 5; 3",
            commonErrors: [
              "Answering 5 buses for part (a) — forgetting the leftover children.",
            ],
          },
        },
      ],
    },
  ],
};
