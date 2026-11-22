import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "edpm6-u1-lesson-1-1",
  code: "1-1",
  title: "Place Value to 10 Million and Order of Operations",
  goal: "I CAN work with numbers to 10 000 000 and apply BIDMAS correctly.",
  standards: ["Year 6 Number"],
  vocabulary: [
    {
      term: "Ten million",
      definition: "10 000 000 — the largest common primary place value.",
    },
    {
      term: "Order of operations",
      definition:
        "The rule for which calculation to do first: Brackets, Indices, Division/Multiplication, Addition/Subtraction (BIDMAS).",
    },
    { term: "Bracket", definition: "() — always do inside brackets first." },
    {
      term: "Index",
      definition:
        "A small raised number showing repeated multiplication: 3² = 3 × 3 = 9.",
    },
  ],
  concepts: [
    {
      id: "edpm6-u1-place-value",
      title: "Place value to 10 million",
      skill: "Read, write and order numbers up to 10 000 000.",
      lesson: {
        sections: [
          {
            heading: "Ten millions",
            body: "New place: **millions** (up to 9) and **ten-millions**. 7 452 318 = 7 million + 4 hundred-thousand + 5 ten-thousand + 2 thousand + 3 hundred + 1 ten + 8. Read in groups of three: 'seven million, four hundred and fifty-two thousand, three hundred and eighteen'.",
          },
          {
            heading: "Comparing and rounding",
            body: "Compare digit by digit from the left. Round to nearest million, hundred-thousand etc. — look at the digit one place right: 7 452 318 to nearest million = 7 000 000 (4 < 5); to nearest 100 000 = 7 500 000 (5 ≥ 5 rounds up).",
          },
        ],
        keyFormulas: [
          {
            name: "Places",
            statement: "ten-millions, millions, hundred-thousands, ...",
          },
          { name: "Rounding", statement: "Digit right of target ≥5 → up" },
        ],
        workedExample: {
          problem:
            "Write 'six million, two hundred and thirty-four thousand, five hundred' in digits.",
          solution: "6 234 500.",
        },
      },
      questions: [
        {
          id: "edpm6-u1-pv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of the 8 in 8 345 219?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "80" },
              { id: "b", text: "800" },
              { id: "c", text: "8 000 000" },
              { id: "d", text: "8" },
            ],
            correctChoiceIc: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Place value",
                statement: "8 is in the millions place = 8 000 000.",
              },
            ],
            steps: [
              {
                reasoning: "8 345 219: 8 millions, 3 hundred-thousands...",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** 8 000 000",
            commonErrors: ["Reading digit value instead of place value."],
          },
        },
        {
          id: "edpm6-u1-pv-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Round 7 452 318 to the nearest million.",
          response: {
            type: "numeric",
            parts: [{ label: "Rounded", answer: 7000000, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rounding",
                statement:
                  "Hundred-thousands digit 4 < 5 → round down to 7 000 000.",
              },
            ],
            steps: [
              {
                reasoning: "Look at hundred-thousands digit: 4.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "4 < 5 → 7 000 000.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 7000000.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7000000",
            commonErrors: ["Rounding to 7 500 000 — looking at wrong digit."],
          },
        },
        {
          id: "edpm6-u1-pv-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write 'nine million, nine hundred and ninety-nine thousand, nine hundred and ninety-nine' in digits.",
          response: {
            type: "numeric",
            parts: [{ label: "Number", answer: 9999999, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Writing numbers",
                statement: "9 million + 999 thousand + 999 = 9 999 999.",
              },
            ],
            steps: [
              {
                reasoning: "Nine million = 9 000 000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Nine hundred and ninety-nine thousand = 999 000.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Plus 999 → 9 999 999.", marks: 1, markCode: "A" },
              { reasoning: "Correct grouping.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9999999",
            commonErrors: ["Misplacing a digit — check each group of three."],
          },
        },
        {
          id: "edpm6-u1-pv-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Order these numbers smallest to largest: 9 999 999, 10 000 000, 9 000 001, 10 000 001, 9 999 000.",
          parts: [
            { label: "a", prompt: "Which is smallest?", marks: 2 },
            { label: "b", prompt: "Write all five in order.", marks: 5 },
            {
              label: "c",
              prompt: "What is the difference between largest and smallest?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ordering",
                statement: "Compare millions first; difference = subtract.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Smallest = 9 000 001.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "9 million < 10 million.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Order: 9 000 001, 9 999 000, 9 999 999, 10 000 000, 10 000 001.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Within 9-millions: 000 001 < 999 000 < 999 999.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "10-millions after 9-millions.",
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
                reasoning: "10 000 001 − 9 000 001 = 1 000 000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: 1 000 000.",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "9 000 001, 9 999 000, 9 999 999, 10 000 000, 10 000 001; difference 1 000 000",
            commonErrors: ["Ordering 10 000 000 before 9 999 999."],
          },
        },
      ],
    },
    {
      id: "edpm6-u1-bidmas",
      title: "Order of operations (BIDMAS)",
      skill:
        "Evaluate expressions using brackets, indices, division, multiplication, addition and subtraction in the correct order.",
      lesson: {
        sections: [
          {
            heading: "BIDMAS order",
            body: "**B**rackets first, then **I**ndices (squares/cubes), then **D**ivision and **M**ultiplication (left to right), then **A**ddition and **S**ubtraction (left to right). 2 + 3 × 4 = 14 (multiply first), not 20. (2 + 3) × 4 = 20.",
          },
          {
            heading: "Examples",
            body: "3² + 4 = 9 + 4 = 13. 20 − 6 ÷ 2 = 20 − 3 = 17. 2 × (5 + 3) = 2 × 8 = 16. 4 + 3² × 2 = 4 + 9 × 2 = 4 + 18 = 22.",
          },
        ],
        keyFormulas: [
          {
            name: "BIDMAS",
            statement:
              "Brackets → Indices → Division/Multiplication → Addition/Subtraction",
          },
          { name: "Same level", statement: "Work left to right" },
        ],
        workedExample: {
          problem: "Calculate 5 + 3 × 2².",
          solution: "2² = 4; 3 × 4 = 12; 5 + 12 = 17.",
        },
      },
      questions: [
        {
          id: "edpm6-u1-bi-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 2 + 3 × 4?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "24" },
              { id: "b", text: "14" },
              { id: "c", text: "20" },
              { id: "d", text: "9" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "BIDMAS",
                statement: "Multiply before add: 3×4=12, +2=14.",
              },
            ],
            steps: [
              {
                reasoning: "3 × 4 = 12; 12 + 2 = 14.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 14",
            commonErrors: ["Adding first: (2+3)×4=20 — wrong order."],
          },
        },
        {
          id: "edpm6-u1-bi-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate 20 − 6 ÷ 2.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 17, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "BIDMAS",
                statement: "Divide first: 6÷2=3; 20−3=17.",
              },
            ],
            steps: [
              { reasoning: "6 ÷ 2 = 3.", marks: 1, markCode: "M" },
              { reasoning: "20 − 3 = 17.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 17.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "17",
            commonErrors: ["Doing (20−6)÷2=7 — wrong order."],
          },
        },
        {
          id: "edpm6-u1-bi-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate 3² + 4 × 2.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 17, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "BIDMAS",
                statement: "3²=9; 4×2=8; 9+8=17.",
              },
            ],
            steps: [
              { reasoning: "Index first: 3² = 9.", marks: 1, markCode: "M" },
              {
                reasoning: "Multiplication: 4 × 2 = 8.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "9 + 8 = 17.", marks: 1, markCode: "A" },
              { reasoning: "Correct order.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "17",
            commonErrors: ["Doing 3²+4 first then ×2 — wrong order."],
          },
        },
        {
          id: "edpm6-u1-bi-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Insert brackets to make each statement true: (a) 2 + 3 __ 4 = 20; (b) 12 + 6 __ 3 = 6.",
          parts: [
            { label: "a", prompt: "Where do brackets go in (a)?", marks: 3 },
            { label: "b", prompt: "Where do brackets go in (b)?", marks: 4 },
            {
              label: "c",
              prompt: "Explain why brackets change the answer.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "BIDMAS and brackets",
                statement: "Brackets override order of operations.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "(2 + 3) × 4 = 5 × 4 = 20. ✓",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Brackets around '2 + 3'.",
                marks: 1,
                markCode: "A",
              },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "(12 + 6) ÷ 3 = 18 ÷ 3 = 6. ✓",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Brackets around '12 + 6'.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Check: 18 ÷ 3 = 6. ✓",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning:
                  "Brackets force calculation inside first, overriding BIDMAS.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Without brackets, × and ÷ happen before +.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Explanation clear.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) (2 + 3) × 4; (b) (12 + 6) ÷ 3; brackets override order",
            commonErrors: [
              "Putting brackets around just one number — need whole expression.",
            ],
          },
        },
      ],
    },
  ],
};
