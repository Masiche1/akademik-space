import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edpm4-u1-lesson-1-1",
  code: "1-1",
  title: "Place Value to 10 000 and Rounding",
  goal: "I CAN read, write and order numbers to 10 000 and round to the nearest 10, 100 and 1000.",
  standards: ["Year 4 Number"],
  vocabulary: [
    {
      term: "Ten thousand",
      definition: "10 000 — the next place after thousands.",
    },
    {
      term: "Round",
      definition: "Approximate a number to the nearest 10, 100 or 1000.",
    },
    {
      term: "Estimate",
      definition: "A sensible guess close to the real answer.",
    },
    {
      term: "Digit",
      definition: "A single number 0–9; its value depends on its place.",
    },
  ],
  concepts: [
    {
      id: "edpm4-u1-place-value",
      title: "Place value to 10 000",
      skill: "Read, write and order numbers up to 10 000 using place value.",
      lesson: {
        sections: [
          {
            heading: "Ten thousands place",
            body: "Numbers now go to **10 000**: ten-thousands, thousands, hundreds, tens, ones. 7 432 = 7 thousands + 4 hundreds + 3 tens + 2 ones. Write with spaces or commas: 7 432 or 7,432. Read: 'seven thousand four hundred and thirty-two'.",
          },
          {
            heading: "Ordering and comparing",
            body: "Compare digit by digit from the left. 8 450 > 7 999 because 8 thousands > 7 thousands. 9 999 < 10 000. Use >, <, = symbols. Order lists smallest to largest by checking the highest place first.",
          },
        ],
        keyFormulas: [
          { name: "Place values", statement: "10 000s, 1000s, 100s, 10s, 1s" },
          {
            name: "Comparing",
            statement: "Compare left to right, highest place first",
          },
        ],
        workedExample: {
          problem: "Write 6 508 in words.",
          solution: "Six thousand five hundred and eight.",
        },
      },
      questions: [
        {
          id: "edpm4-u1-pv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of the 4 in 5 432?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4000" },
              { id: "b", text: "40" },
              { id: "c", text: "4" },
              { id: "d", text: "400" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Place value",
                statement: "4 is in the hundreds place = 400.",
              },
            ],
            steps: [
              {
                reasoning: "5 432: 5 thousands, 4 hundreds, 3 tens, 2 ones.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** 400",
            commonErrors: ["Reading digit value instead of place value."],
          },
        },
        {
          id: "edpm4-u1-pv-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is bigger: 8 999 or 9 001?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparing",
                statement: "9 thousands > 8 thousands.",
              },
            ],
            steps: [
              {
                reasoning: "Compare thousands: 9 > 8.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "9 001 > 8 999.", marks: 1, markCode: "A" },
              { reasoning: "Answer: 9 001.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9 001",
            commonErrors: ["Comparing last digits instead of first."],
          },
        },
        {
          id: "edpm4-u1-pv-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write the number 'four thousand two hundred and six' in digits.",
          response: {
            type: "numeric",
            parts: [{ label: "Number", answer: 4206, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reading numbers",
                statement: "4 thousands, 2 hundreds, 0 tens, 6 ones.",
              },
            ],
            steps: [
              { reasoning: "Thousands: 4.", marks: 1, markCode: "M" },
              {
                reasoning: "Hundreds: 2; tens: none; ones: 6.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 4206.", marks: 1, markCode: "A" },
              { reasoning: "Zero placeholder used.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4206",
            commonErrors: ["Writing 426 — forgetting the zero for tens."],
          },
        },
        {
          id: "edpm4-u1-pv-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Order these numbers smallest to largest: 6 789, 9 876, 6 879, 9 786.",
          parts: [
            {
              label: "a",
              prompt: "Which number is smallest? Explain how you know.",
              marks: 3,
            },
            { label: "b", prompt: "Write all four in order.", marks: 4 },
            {
              label: "c",
              prompt: "Which two numbers have the same thousands digit?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ordering",
                statement: "Compare highest place first, then next.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Smallest = 6 789.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "6 thousands < 9 thousands.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "a",
                reasoning: "Between 6 789 and 6 879, hundreds digit decides.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning: "Order: 6 789, 6 879, 9 786, 9 876.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "9 786 < 9 876 (hundreds 7 < 8).",
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
                reasoning: "All four placed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "6 789 and 6 879 both have 6 thousands.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "9 786 and 9 876 both have 9 thousands.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Both pairs identified.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "6 789, 6 879, 9 786, 9 876; pairs: (6789, 6879) and (9786, 9876)",
            commonErrors: [
              "Ordering 9 786 before 9 876 by reading digits right-to-left.",
            ],
          },
        },
      ],
    },
    {
      id: "edpm4-u1-rounding",
      title: "Rounding and estimating",
      skill:
        "Round numbers to the nearest 10, 100 and 1000 and use rounding to estimate.",
      lesson: {
        sections: [
          {
            heading: "Rounding rules",
            body: "Look at the digit **one place to the right** of where you're rounding. 5 or more → round up; 4 or less → round down. 347 to nearest 10: look at 7 (ones) → round up to 350. To nearest 100: look at 4 (tens) → round down to 300.",
          },
          {
            heading: "Rounding bigger numbers",
            body: "6 780 to nearest 1000: look at hundreds digit 7 → round up to 7 000. 4 320 to nearest 100: look at tens 2 → round down to 4 300. 9 999 to nearest 1000 → 10 000 (cascade up).",
          },
          {
            heading: "Estimating",
            body: "Round each number first, then calculate — the answer is close to the real one. 487 + 312 ≈ 500 + 300 = 800 (real: 799). Useful for checking answers make sense.",
          },
        ],
        keyFormulas: [
          {
            name: "Rounding",
            statement: "Digit right of target ≥5 → up; <5 → down",
          },
          {
            name: "Estimating",
            statement: "Round then calculate for approximate answers",
          },
        ],
        workedExample: {
          problem: "Round 6 480 to the nearest 1000.",
          solution: "Look at hundreds digit: 4 < 5 → round down to 6 000.",
        },
      },
      questions: [
        {
          id: "edpm4-u1-rd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Round 47 to the nearest 10.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "100" },
              { id: "b", text: "40" },
              { id: "c", text: "50" },
              { id: "d", text: "45" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rounding",
                statement: "7 ≥ 5 → round up to 50.",
              },
            ],
            steps: [
              { reasoning: "47 → nearest 10 is 50.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 50",
            commonErrors: [
              "Rounding to 40 — looking at tens digit instead of ones.",
            ],
          },
        },
        {
          id: "edpm4-u1-rd-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Round 6 780 to the nearest 100.",
          response: {
            type: "numeric",
            parts: [{ label: "Rounded", answer: 6800, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rounding",
                statement: "Tens digit 8 ≥ 5 → 6 800.",
              },
            ],
            steps: [
              {
                reasoning: "Target 100s; look at tens: 8.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "8 ≥ 5 → round hundreds up: 6 800.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 6800.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6800",
            commonErrors: ["Rounding to 7000 — looking at wrong digit."],
          },
        },
        {
          id: "edpm4-u1-rd-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Round 9 960 to the nearest 1000.",
          response: {
            type: "numeric",
            parts: [{ label: "Rounded", answer: 10000, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rounding cascade",
                statement:
                  "Hundreds 9 ≥ 5 → thousands round up; 9 000 + 1 000 = 10 000.",
              },
            ],
            steps: [
              {
                reasoning: "Look at hundreds digit: 9.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "9 ≥ 5 → round up from 9 000 to 10 000.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 10000.", marks: 1, markCode: "A" },
              { reasoning: "Cascade handled.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10000",
            commonErrors: ["Answering 9000 — not carrying into ten-thousands."],
          },
        },
        {
          id: "edpm4-u1-rd-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Estimate 487 + 312 by rounding each number to the nearest 100.",
          parts: [
            { label: "a", prompt: "Round each number.", marks: 3 },
            { label: "b", prompt: "Add the rounded numbers.", marks: 3 },
            {
              label: "c",
              prompt: "Calculate the exact answer and compare.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Estimating",
                statement: "Round to nearest 100 then add.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "487 → 500; 312 → 300.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Both rounded correctly.",
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
                reasoning: "500 + 300 = 800.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Estimate: 800.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Answer clear.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Exact: 487 + 312 = 799.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "799 is very close to 800 — estimate is good.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Comparison made.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Conclusion stated.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "500 + 300 = 800; exact 799 — estimate good",
            commonErrors: ["Rounding 312 to 400 — looking at ones not tens."],
          },
        },
      ],
    },
  ],
};
