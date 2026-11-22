import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "edpm1-u3-lesson-3-2",
  code: "3-2",
  title: "Division: Sharing and Grouping",
  goal: "I CAN divide by sharing equally into groups or finding how many groups.",
  standards: ["Year 1 Multiplication and division"],
  vocabulary: [
    {
      term: "Divide",
      definition: "Split into equal groups or find how many groups.",
    },
    {
      term: "Share",
      definition: "Split a total into equal groups, one at a time.",
    },
    { term: "Group", definition: "Put items into sets of a given size." },
    {
      term: "Equal groups",
      definition: "Groups with the same number of items in each.",
    },
    {
      term: "Left over",
      definition: "Items remaining when they can't be shared equally.",
    },
  ],
  concepts: [
    {
      id: "edpm1-u3-division",
      title: "Sharing and grouping",
      skill: "Divide by sharing equally between groups or grouping into sets.",
      lesson: {
        sections: [
          {
            heading: "Sharing equally",
            body: "Division can mean **sharing equally**. 12 sweets shared between 3 children = 4 each, because 4 + 4 + 4 = 12. Deal them out one at a time until they're gone — each child gets the same.",
          },
          {
            heading: "Grouping",
            body: "Division can also mean **grouping**. 12 sweets in bags of 4 = 3 bags, because 4 + 4 + 4 = 12. How many groups of 4 fit into 12? That's division too. Sharing and grouping are inverse ways of thinking about the same total.",
          },
          {
            heading: "Division as the inverse of multiplication",
            body: "Division undoes multiplication. If 3 × 4 = 12, then 12 ÷ 3 = 4 and 12 ÷ 4 = 3. Knowing times tables helps you divide quickly. 20 ÷ 5 = 4 because 5 × 4 = 20.",
          },
        ],
        keyFormulas: [
          {
            name: "Sharing",
            statement: "total ÷ number of groups = amount in each",
          },
          {
            name: "Grouping",
            statement: "total ÷ group size = number of groups",
          },
          { name: "Inverse", statement: "If a × b = T then T ÷ a = b" },
        ],
        workedExample: {
          problem: "Share 18 grapes equally between 3 children. How many each?",
          solution:
            "18 ÷ 3 = 6, because 6 + 6 + 6 = 18. Each child gets 6 grapes.",
        },
      },
      questions: [
        {
          id: "edpm1-u3-div-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "12 sweets are shared equally between 3 children. How many does each child get?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3" },
              { id: "b", text: "6" },
              { id: "c", text: "9" },
              { id: "d", text: "4" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sharing", statement: "12 ÷ 3 = 4." },
            ],
            steps: [
              {
                reasoning: "4 + 4 + 4 = 12, so each gets 4.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 4",
            commonErrors: ["Answering 3 — confusing groups with amount each."],
          },
        },
        {
          id: "edpm1-u3-div-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "20 counters are put into bags of 5. How many bags are needed?",
          response: {
            type: "numeric",
            parts: [{ label: "Number of bags", answer: 4, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Grouping",
                statement: "20 ÷ 5 = 4 bags.",
              },
            ],
            steps: [
              { reasoning: "How many 5s in 20?", marks: 1, markCode: "M" },
              { reasoning: "5 × 4 = 20, so 4 bags.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 4 bags.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 bags",
            commonErrors: ["Answering 15 — subtracting instead of grouping."],
          },
        },
        {
          id: "edpm1-u3-div-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "15 children stand in rows of 5. How many rows are there?",
          response: {
            type: "numeric",
            parts: [{ label: "Number of rows", answer: 3, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Grouping in context",
                statement: "15 ÷ 5 = 3 rows.",
              },
            ],
            steps: [
              {
                reasoning: "Rows of 5 = groups of 5.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "15 ÷ 5 = 3.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3 rows.", marks: 1, markCode: "A" },
              { reasoning: "Units included.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 rows",
            commonErrors: ["Answering 10 — adding instead of dividing."],
          },
        },
        {
          id: "edpm1-u3-div-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "There are 16 eggs in a box.",
          parts: [
            {
              label: "a",
              prompt:
                "The eggs are shared equally into 4 cartons. How many eggs in each carton?",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "If the eggs are put into boxes of 4, how many boxes are needed?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain why both answers are the same number.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inverse division",
                statement:
                  "Sharing and grouping give inverse results when numbers match.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "16 ÷ 4 = 4 eggs per carton.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "4 + 4 + 4 + 4 = 16.",
                marks: 1,
                markCode: "M",
              },
              { part: "a", reasoning: "Answer: 4.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "16 ÷ 4 = 4 boxes.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "4 × 4 = 16.", marks: 1, markCode: "M" },
              {
                part: "b",
                reasoning: "Answer: 4 boxes.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Both use ÷ 4 and 4 × 4 = 16.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Sharing into 4 groups and grouping into 4s are inverse operations.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Explains the connection clearly.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Reasoning about inverse relationship.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "4 eggs; 4 boxes; same because 4 × 4 = 16 and division is inverse of multiplication",
            commonErrors: [
              "Not seeing the connection between sharing and grouping.",
            ],
          },
        },
      ],
    },
    {
      id: "edpm1-u3-div-real",
      title: "Division in real life",
      skill:
        "Solve real-life problems involving sharing equally and finding remainders.",
      lesson: {
        sections: [
          {
            heading: "Sharing problems",
            body: "'Share equally' means divide. 20 biscuits shared between 4 children = 5 each. 'How many in each' → divide by the number of groups. Draw a picture or use counters to check.",
          },
          {
            heading: "Grouping problems",
            body: "'How many groups of X' means divide. 20 biscuits in bags of 5 = 4 bags. 'How many bags needed' → divide by the group size. Check by multiplying back.",
          },
          {
            heading: "Left over",
            body: "Sometimes items can't be shared equally — there's a **remainder**. 17 sweets shared between 4 children: each gets 4, with 1 left over (4 × 4 = 16, 17 − 16 = 1). The leftover can't be shared equally.",
          },
        ],
        keyFormulas: [
          { name: "Share equally", statement: "total ÷ groups = each" },
          {
            name: "Group size",
            statement: "total ÷ group size = number of groups",
          },
          {
            name: "Remainder",
            statement: "total = (groups × each) + leftover",
          },
        ],
        workedExample: {
          problem:
            "Share 17 counters between 4 children. How many each and how many left over?",
          solution:
            "17 ÷ 4 = 4 each with 1 left over. Check: 4 × 4 = 16, 16 + 1 = 17.",
        },
      },
      questions: [
        {
          id: "edpm1-u3-dr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "There are 10 apples shared equally between 2 children. How many each?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "12" },
              { id: "b", text: "5" },
              { id: "c", text: "2" },
              { id: "d", text: "8" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sharing", statement: "10 ÷ 2 = 5." },
            ],
            steps: [
              { reasoning: "Half of 10 = 5 each.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 5",
            commonErrors: [
              "Answering 2 — using the number of children not the share.",
            ],
          },
        },
        {
          id: "edpm1-u3-dr-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "14 pencils are put into pots of 7. How many pots are needed?",
          response: {
            type: "numeric",
            parts: [{ label: "Number of pots", answer: 2, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Grouping",
                statement: "14 ÷ 7 = 2 pots.",
              },
            ],
            steps: [
              { reasoning: "How many 7s in 14?", marks: 1, markCode: "M" },
              { reasoning: "7 × 2 = 14, so 2 pots.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2 pots.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 pots",
            commonErrors: [
              "Answering 7 — using the pot size not the number of pots.",
            ],
          },
        },
        {
          id: "edpm1-u3-dr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "19 sweets are shared equally between 4 children. How many sweets are left over?",
          response: {
            type: "numeric",
            parts: [{ label: "Left over", answer: 3, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Remainder",
                statement: "19 = (4 × 4) + 3.",
              },
            ],
            steps: [
              {
                reasoning: "Each child gets 4 (4 × 4 = 16).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "19 − 16 = 3 left over.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3 left over.", marks: 1, markCode: "A" },
              { reasoning: "Reasoning checked.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 sweets",
            commonErrors: ["Answering 4 — forgetting the remainder."],
          },
        },
        {
          id: "edpm1-u3-dr-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A farmer has 18 eggs.",
          parts: [
            {
              label: "a",
              prompt:
                "He packs them into boxes of 6. How many boxes does he fill?",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "He shares them equally between 3 market stalls. How many eggs at each stall?",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "If he packs them into boxes of 5, how many full boxes and how many eggs left over?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Division in context",
                statement: "Grouping vs sharing; remainders when not exact.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "18 ÷ 6 = 3 boxes.",
                marks: 1,
                markCode: "M",
              },
              { part: "a", reasoning: "6 × 3 = 18.", marks: 1, markCode: "M" },
              {
                part: "a",
                reasoning: "Answer: 3 boxes.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "18 ÷ 3 = 6 eggs each.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "6 + 6 + 6 = 18.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: 6 eggs.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "18 ÷ 5 = 3 full boxes (15 eggs).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "18 − 15 = 3 left over.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "3 full boxes, 3 eggs left.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Remainder identified correctly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3 boxes; 6 eggs; 3 full boxes + 3 left",
            commonErrors: ["Rounding up to 4 boxes for part (c)."],
          },
        },
      ],
    },
  ],
};
