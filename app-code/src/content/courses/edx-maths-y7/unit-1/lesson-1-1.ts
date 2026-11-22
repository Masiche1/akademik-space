import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "edm7-u1-lesson-1-1",
  code: "1-1",
  title: "Integers and Negative Numbers",
  goal: "I CAN order and calculate with positive and negative integers, including temperature and money contexts.",
  standards: ["Edexcel KS3 Maths — Number"],
  vocabulary: [
    {
      term: "Integer",
      definition:
        "A whole number — positive, negative or zero, with no decimal or fraction part.",
    },
    {
      term: "Negative number",
      definition:
        "A number less than zero, written with a minus sign, e.g. $-5$.",
    },
    {
      term: "Number line",
      definition:
        "A line showing numbers in order, with negatives to the left of zero.",
    },
    {
      term: "Absolute value",
      definition:
        "The distance of a number from zero — always positive, e.g. $|-5| = 5$.",
    },
  ],
  concepts: [
    {
      id: "edm7-u1-integers",
      title: "Ordering and Comparing Integers",
      skill: "Order, compare and represent integers on a number line.",
      lesson: {
        sections: [
          {
            heading: "What are integers?",
            body: "**Integers** are whole numbers: $\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots$ On a number line, numbers increase to the right. Negatives are less than zero; the further left, the smaller the number.\n\n**Comparing**: $-7 < -2$ because $-7$ is further left. A common mistake is thinking $-7 > -2$ because $7 > 2$ — the minus sign reverses the order. **Absolute value** $|n|$ gives distance from zero: $|-5| = 5$.",
          },
          {
            heading: "Real contexts",
            body: "Negatives appear everywhere: **temperature** ($-3\\,^\\circ\\text{C}$ is colder than $2\\,^\\circ\\text{C}$), **money** (overdrawn account $-£50$), **floors** (basement level $-1$), **golf scores** relative to par.\n\nOrdering temperatures from coldest to warmest is the same as ordering the numbers: $-10 < -5 < 0 < 8$.",
          },
        ],
        keyFormulas: [
          {
            name: "Ordering integers",
            statement: "On a number line, further left = smaller.",
          },
          {
            name: "Absolute value",
            statement: "$|n|$ is the distance from zero — always positive.",
          },
        ],
        workedExample: {
          problem: "Order $-4, 3, -1, 0$ from smallest to largest.",
          solution:
            "Smallest to largest: $-4 < -1 < 0 < 3$. Check on a number line: $-4$ is furthest left.",
        },
      },
      questions: [
        {
          id: "edm7-u1-integers-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is the smallest number: $-6$, $-2$, $0$, $4$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-6$" },
              { id: "b", text: "$4$" },
              { id: "c", text: "$0$" },
              { id: "d", text: "$-2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Number line order",
                statement: "Further left on number line = smaller number.",
              },
            ],
            steps: [
              {
                reasoning: "$-6$ is furthest left = smallest.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** $-6$",
            commonErrors: [
              "Choosing $-2$ — thinking closer to zero is smaller.",
            ],
          },
        },
        {
          id: "edm7-u1-integers-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "The temperature is $-8\\,^\\circ\\text{C}$ at night and $5\\,^\\circ\\text{C}$ in the afternoon. How much warmer is the afternoon?",
          response: {
            type: "numeric",
            parts: [{ label: "Temperature difference in °C", answer: 13 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Difference across zero",
                statement:
                  "From $-8$ to $0$ is 8, then $0$ to $5$ is 5 — total 13.",
              },
            ],
            steps: [
              {
                reasoning: "$-8$ to $0$: 8 degrees.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$0$ to $5$: 5 degrees.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$8 + 5 = 13\\,^\\circ\\text{C}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$13\\,^\\circ\\text{C}$",
            commonErrors: [
              "Answering $-3$ by subtracting $5 - (-8)$ incorrectly as $5 - 8$.",
            ],
          },
        },
        {
          id: "edm7-u1-integers-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A bank account has balance $-£25$. After a deposit of £40, what is the new balance?",
          response: {
            type: "numeric",
            parts: [{ label: "New balance in £", answer: 15 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Adding to negative",
                statement:
                  "Adding £40 moves 40 units right on the number line from $-25$.",
              },
            ],
            steps: [
              {
                reasoning: "Start at $-25$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$-25 + 40$: move 40 right.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$-25 + 40 = 15$ — crosses zero.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "New balance $£15$ (positive).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$£15$",
            commonErrors: [
              "Answering $-£65$ — adding magnitudes instead of moving right.",
            ],
          },
        },
        {
          id: "edm7-u1-integers-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Five cities record overnight temperatures.",
          parts: [
            {
              label: "a",
              prompt:
                "Order the temperatures $-12, 3, -5, 0, -1$ from coldest to warmest.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Find the difference between the warmest and coldest.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Explain what a temperature of $0$ means in this context.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Integer ordering",
                statement:
                  "Order on number line; difference = warmest minus coldest across zero.",
              },
            ],
            steps: [
              {
                reasoning: "$-12, -5, -1, 0, 3$ correct order.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "All five listed.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Correct coldest-to-warmest direction.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "$3 - (-12) = 3 + 12$.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Difference = $15\\,^\\circ\\text{C}$.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Correct method across zero.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "$0\\,^\\circ\\text{C}$ = freezing point of water.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning:
                  "It is the boundary between negative and positive temps.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) $-12, -5, -1, 0, 3$ (b) $15\\,^\\circ\\text{C}$ (c) freezing point",
            commonErrors: [
              "Wrong order direction.",
              "$3 - 12 = -9$ mistake in (b).",
            ],
          },
        },
      ],
    },
    {
      id: "edm7-u1-operations",
      title: "Calculating with Negative Numbers",
      skill:
        "Add, subtract, multiply and divide positive and negative integers.",
      lesson: {
        sections: [
          {
            heading: "Addition and subtraction",
            body: "**Adding**: same signs → add magnitudes, keep sign ($-3 + -4 = -7$). Different signs → subtract smaller magnitude from larger, keep the larger's sign ($-3 + 7 = 4$). Think of the number line: $-3 + 7$ moves 7 right from $-3$.\n\n**Subtracting**: $a - b = a + (-b)$ — change the sign and add. $5 - (-3) = 5 + 3 = 8$. $-4 - 6 = -4 + (-6) = -10$. The minus sign 'flips' the second number's direction.",
          },
          {
            heading: "Multiplication and division",
            body: "**Multiplication**: same signs → positive ($-3 \\times -4 = 12$); different signs → negative ($-3 \\times 4 = -12$). Pattern: an even number of negatives gives positive, odd gives negative.\n\n**Division**: same sign rules as multiplication — $-12 \\div 3 = -4$, $-12 \\div -3 = 4$. **Order of operations** (BIDMAS) still applies: brackets, indices, division/multiplication, addition/subtraction — left to right within each level.",
          },
        ],
        keyFormulas: [
          {
            name: "Sign rules",
            statement:
              "Same signs → positive; different signs → negative (× and ÷).",
          },
          {
            name: "Subtracting",
            statement: "$a - b = a + (-b)$ — flip the sign and add.",
          },
        ],
        workedExample: {
          problem: "Calculate $-7 + 12$ and $-5 \\times -3$.",
          solution:
            "$-7 + 12 = 5$ (different signs, larger magnitude wins). $-5 \\times -3 = 15$ (same signs → positive).",
        },
      },
      questions: [
        {
          id: "edm7-u1-operations-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Calculate $-6 + 10$.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Add different signs",
                statement: "Subtract magnitudes, keep sign of larger.",
              },
            ],
            steps: [
              {
                reasoning: "$10 - 6 = 4$, sign of $+10$ → $4$.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "$4$",
            commonErrors: ["Answering $-4$ — keeping the negative sign."],
          },
        },
        {
          id: "edm7-u1-operations-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate $-4 - 9$.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: -13 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Subtract = add negative",
                statement: "$-4 - 9 = -4 + (-9)$ — same signs, add magnitudes.",
              },
            ],
            steps: [
              {
                reasoning: "Rewrite as $-4 + (-9)$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Same signs → add magnitudes: $4 + 9 = 13$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Keep negative sign: $-13$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-13$",
            commonErrors: ["Answering $5$ — treating as $-4 + 9$."],
          },
        },
        {
          id: "edm7-u1-operations-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate $-6 \\times -4$.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 24 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sign rules for multiplication",
                statement: "Same signs → positive result.",
              },
            ],
            steps: [
              {
                reasoning: "Identify operation: multiplication.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both negative → same signs → positive.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$6 \\times 4 = 24$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Result $+24$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$24$",
            commonErrors: ["Answering $-24$ — sign rule error."],
          },
        },
        {
          id: "edm7-u1-operations-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate each expression.",
          parts: [
            { label: "a", prompt: "Calculate $-8 + 5$.", marks: 2 },
            { label: "b", prompt: "Calculate $-3 \\times 7$.", marks: 2 },
            { label: "c", prompt: "Calculate $-15 \\div -3$.", marks: 2 },
            { label: "d", prompt: "Calculate $2 \\times -6 + 10$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Mixed operations",
                statement: "Apply sign rules and BIDMAS order.",
              },
            ],
            steps: [
              {
                reasoning: "(a) $-8 + 5 = -3$.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) different signs → $-21$.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) same signs → $5$.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "(d) $-12 + 10 = -2$ — multiplication first.",
                marks: 2,
                markCode: "M",
                part: "d",
              },
            ],
            finalAnswer: "(a) $-3$ (b) $-21$ (c) $5$ (d) $-2$",
            commonErrors: ["Sign errors.", "Wrong order in (d)."],
          },
        },
      ],
    },
  ],
};
