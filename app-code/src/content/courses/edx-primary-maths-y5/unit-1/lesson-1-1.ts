import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "edpm5-u1-lesson-1-1",
  code: "1-1",
  title: "Place Value to 1 000 000 and Negative Numbers",
  goal: "I CAN read, write and order numbers to 1 000 000 and use negative numbers.",
  standards: ["Year 5 Number"],
  vocabulary: [
    {
      term: "Hundred thousand",
      definition: "100 000 — the place after ten-thousands.",
    },
    { term: "Million", definition: "1 000 000 — one thousand thousands." },
    {
      term: "Negative number",
      definition: "A number below zero, written with a minus sign.",
    },
    {
      term: "Integer",
      definition:
        "A whole number including negatives: ..., -2, -1, 0, 1, 2, ...",
    },
  ],
  concepts: [
    {
      id: "edpm5-u1-place-value",
      title: "Place value to a million",
      skill: "Read, write and order numbers up to 1 000 000.",
      lesson: {
        sections: [
          {
            heading: "Up to a million",
            body: "New places: **hundred thousands** and **millions**. 483 920 = 4 hundred-thousands + 8 ten-thousands + 3 thousands + 9 hundreds + 2 tens. Read in groups of three: 'four hundred and eighty-three thousand, nine hundred and twenty'. 1 000 000 = one million.",
          },
          {
            heading: "Ordering big numbers",
            body: "Compare from the highest place. 999 999 < 1 000 000. 512 000 > 501 999 (ten-thousands 1 > 0). Write numbers with commas every three digits for clarity.",
          },
        ],
        keyFormulas: [
          {
            name: "Places",
            statement:
              "millions, hundred-thousands, ten-thousands, thousands, hundreds, tens, ones",
          },
          {
            name: "Grouping",
            statement: "Read/write in groups of three digits",
          },
        ],
        workedExample: {
          problem:
            "Write 'two hundred and five thousand, six hundred' in digits.",
          solution: "205 600.",
        },
      },
      questions: [
        {
          id: "edpm5-u1-pv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of the 7 in 375 204?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7" },
              { id: "b", text: "70" },
              { id: "c", text: "700" },
              { id: "d", text: "70 000" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Place value",
                statement: "7 is in the ten-thousands place = 70 000.",
              },
            ],
            steps: [
              {
                reasoning: "375 204: 3 hundred-thousands, 7 ten-thousands...",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** 70 000",
            commonErrors: ["Reading digit value instead of place value."],
          },
        },
        {
          id: "edpm5-u1-pv-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is bigger: 688 000 or 680 800?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparing",
                statement: "Hundred-thousands equal; ten-thousands 8 > 0.",
              },
            ],
            steps: [
              {
                reasoning: "Compare digit by digit: 688 000 vs 680 800.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ten-thousands: 8 > 0 → 688 000 bigger.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 688 000.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "688 000",
            commonErrors: ["Comparing last digits first."],
          },
        },
        {
          id: "edpm5-u1-pv-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write 'nine hundred and ninety-nine thousand, nine hundred and ninety-nine' in digits.",
          response: {
            type: "numeric",
            parts: [{ label: "Number", answer: 999999, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Writing numbers",
                statement: "999 thousands + 999 = 999 999.",
              },
            ],
            steps: [
              {
                reasoning: "Nine hundred and ninety-nine thousand = 999 000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Plus nine hundred and ninety-nine = 999.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Total: 999 999.", marks: 1, markCode: "A" },
              { reasoning: "Correct grouping.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "999999",
            commonErrors: ["Writing 9999 99 or missing a digit."],
          },
        },
        {
          id: "edpm5-u1-pv-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Order these numbers smallest to largest: 1 000 000, 999 999, 100 001, 999 000, 100 000.",
          parts: [
            { label: "a", prompt: "Which is the smallest?", marks: 2 },
            { label: "b", prompt: "Write all five in order.", marks: 5 },
            {
              label: "c",
              prompt:
                "What is the difference between the largest and smallest?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ordering",
                statement:
                  "Compare highest places; difference = largest − smallest.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Smallest = 100 000.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Fewest digits/smallest hundred-thousands.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Order: 100 000, 100 001, 999 000, 999 999, 1 000 000.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "100 001 after 100 000 (ones 1 > 0).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "999 000 < 999 999 < 1 000 000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct full order.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "All five placed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Largest 1 000 000 − smallest 100 000 = 900 000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: 900 000.",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "100 000, 100 001, 999 000, 999 999, 1 000 000; difference 900 000",
            commonErrors: ["Putting 1 000 000 before 999 999."],
          },
        },
      ],
    },
    {
      id: "edpm5-u1-negative",
      title: "Negative numbers",
      skill: "Understand and order negative numbers on a number line.",
      lesson: {
        sections: [
          {
            heading: "Below zero",
            body: "Negative numbers are below 0: -1, -2, -3... Used for temperatures below freezing, bank overdrafts, depths below sea level. On a number line they go left of 0. **-5 < -2** because -5 is further below zero — the 'bigger' the digits, the smaller the value when negative.",
          },
          {
            heading: "Ordering negatives",
            body: "Order: -10 < -7 < -3 < 0 < 2 < 9. Temperature example: -3°C is colder than 2°C. Difference: from -5 to 3 is 8 (count through zero).",
          },
        ],
        keyFormulas: [
          {
            name: "Negative order",
            statement: "More negative = smaller; -10 < -2 < 0",
          },
          { name: "Difference", statement: "Count through zero: -5 to 3 = 8" },
        ],
        workedExample: {
          problem: "Order: -4, 1, -9, 0, -1.",
          solution: "-9, -4, -1, 0, 1.",
        },
      },
      questions: [
        {
          id: "edpm5-u1-neg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is smaller: -3 or -7?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "-3" },
              { id: "b", text: "-7" },
              { id: "c", text: "They are equal" },
              { id: "d", text: "Cannot tell" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Negative order",
                statement: "-7 is further below zero → smaller.",
              },
            ],
            steps: [{ reasoning: "-7 < -3.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** -7",
            commonErrors: ["Thinking -3 < -7 because 3 < 7."],
          },
        },
        {
          id: "edpm5-u1-neg-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "The temperature is -5°C at night and 4°C in the afternoon. What is the difference?",
          response: {
            type: "numeric",
            parts: [
              { label: "Difference", answer: 9, tolerance: 0, unit: "°C" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Difference through zero",
                statement: "-5 → 0 = 5; 0 → 4 = 4; total 9.",
              },
            ],
            steps: [
              { reasoning: "-5 to 0 is 5 degrees.", marks: 1, markCode: "M" },
              { reasoning: "0 to 4 is 4 degrees.", marks: 1, markCode: "M" },
              { reasoning: "Total: 9°C.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9°C",
            commonErrors: ["Answering 1 — subtracting -5 - 4 incorrectly."],
          },
        },
        {
          id: "edpm5-u1-neg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Order from smallest to largest: -2, 3, -8, 0, -5.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ordering integers",
                statement:
                  "Negatives first (most negative first), then 0, then positives.",
              },
            ],
            steps: [
              { reasoning: "Negatives: -8, -5, -2.", marks: 1, markCode: "M" },
              {
                reasoning: "Then 0, then positives: 3.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Order: -8, -5, -2, 0, 3.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "All five placed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "-8, -5, -2, 0, 3",
            commonErrors: ["Putting -2 before -5 — wrong negative order."],
          },
        },
        {
          id: "edpm5-u1-neg-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A diver is at -12 m. She rises 5 m, then sinks 8 m, then rises 15 m.",
          parts: [
            {
              label: "a",
              prompt: "How deep is she after the first move?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How deep is she after the second move?",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Is she above or below sea level after the third move? By how much?",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Negative numbers in context",
                statement: "Track position step by step through zero.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "-12 + 5 = -7 m.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: 7 m below.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "-7 − 8 = -15 m.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: 15 m below.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "-15 + 15 = 0 m.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "She is exactly at sea level.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Neither above nor below.",
                marks: 1,
                markCode: "R",
              },
              { part: "c", reasoning: "By 0 m.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Reasoning clear.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "-7 m; -15 m; exactly at sea level (0 m)",
            commonErrors: [
              "Thinking she ends above sea level — -15 + 15 = 0 exactly.",
            ],
          },
        },
      ],
    },
  ],
};
