import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "edpm2-u1-lesson-1-3",
  code: "1-3",
  title: "Subtraction within 100",
  goal: "I CAN subtract two-digit numbers, including crossing a ten, using partitioning and number bonds.",
  standards: ["Year 2 Addition and subtraction"],
  vocabulary: [
    {
      term: "Subtract",
      definition: "Find the difference between two numbers.",
    },
    {
      term: "Partition",
      definition: "Split a number into tens and ones to subtract more easily.",
    },
    {
      term: "Crossing ten",
      definition:
        "When subtraction needs to borrow from the tens, e.g. 52 − 8.",
    },
    {
      term: "Difference",
      definition: "How much one number is bigger than another.",
    },
    {
      term: "Inverse",
      definition: "The opposite operation — subtraction undoes addition.",
    },
  ],
  concepts: [
    {
      id: "edpm2-u1-subtraction",
      title: "Subtracting within 100",
      skill:
        "Subtract two-digit numbers using partitioning, including crossing a ten.",
      lesson: {
        sections: [
          {
            heading: "Subtracting tens and ones",
            body: "Split both numbers into tens and ones, subtract the tens, subtract the ones, combine. 65 − 32 = (60 − 30) − (5 − 2) = 30 − 3 = 27. This works when the ones don't need borrowing.",
          },
          {
            heading: "Crossing ten (borrowing)",
            body: "When the ones digit of the first number is smaller, borrow a ten. 52 − 8: you can't do 2 − 8, so break a ten — 52 becomes 40 + 12. Then 12 − 8 = 4 and 40 − 0 = 40, answer 44. Or use bonds: 52 − 2 = 50, 50 − 6 = 44.",
          },
          {
            heading: "Using inverse to check",
            body: "Subtraction is the inverse of addition. Check 65 − 32 = 33 by adding back: 33 + 32 = 65. If the check works, your subtraction is correct. This is a great habit for all subtraction.",
          },
        ],
        keyFormulas: [
          {
            name: "Partition subtract",
            statement: "(tens − tens) − (ones − ones)",
          },
          {
            name: "Borrowing",
            statement: "Break a ten into ten ones when needed",
          },
        ],
        workedExample: {
          problem: "Work out 73 − 28.",
          solution:
            "Borrow: 73 = 60 + 13. 13 − 8 = 5, 60 − 20 = 40. Answer: 45. Check: 45 + 28 = 73.",
        },
      },
      questions: [
        {
          id: "edpm2-u1-sub-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 45 − 23.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "68" },
              { id: "b", text: "22" },
              { id: "c", text: "32" },
              { id: "d", text: "18" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Partition subtract",
                statement: "40−20=20, 5−3=2, total 22.",
              },
            ],
            steps: [{ reasoning: "45 − 23 = 22.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 22",
            commonErrors: [
              "Subtracting smaller from larger in each column wrongly.",
            ],
          },
        },
        {
          id: "edpm2-u1-sub-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Work out 64 − 37.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 27, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Borrowing",
                statement: "64 = 50 + 14; 14 − 7 = 7; 50 − 30 = 20; total 27.",
              },
            ],
            steps: [
              {
                reasoning: "Borrow a ten: 64 = 50 + 14.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "14 − 7 = 7 and 50 − 30 = 20.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "20 + 7 = 27.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "27",
            commonErrors: [
              "Answering 33 — subtracting 7 − 4 instead of borrowing.",
            ],
          },
        },
        {
          id: "edpm2-u1-sub-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Work out 90 − 46 using bonds.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 44, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bond method",
                statement: "90 − 40 = 50, 50 − 6 = 44.",
              },
            ],
            steps: [
              { reasoning: "Split 46 into 40 + 6.", marks: 1, markCode: "M" },
              { reasoning: "90 − 40 = 50.", marks: 1, markCode: "M" },
              { reasoning: "50 − 6 = 44.", marks: 1, markCode: "A" },
              { reasoning: "Check: 44 + 46 = 90.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "44",
            commonErrors: ["Answering 56 — subtracting digits separately."],
          },
        },
        {
          id: "edpm2-u1-sub-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "There were 85 children on the playground. 37 went inside.",
          parts: [
            {
              label: "a",
              prompt: "How many children are still outside?",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Check your answer by adding back.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "If 12 more children come outside, how many are outside now?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Subtraction in context",
                statement: "Left = start − went; check by adding back.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "85 − 37: borrow, 85 = 70 + 15.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "15 − 7 = 8, 70 − 30 = 40.",
                marks: 1,
                markCode: "M",
              },
              { part: "a", reasoning: "40 + 8 = 48.", marks: 1, markCode: "A" },
              {
                part: "a",
                reasoning: "Answer: 48 children.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Check: 48 + 37 = 85.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "40 + 30 = 70, 8 + 7 = 15, 70 + 15 = 85.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Check confirms answer.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "48 + 12 = 60.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "8 + 2 = 10, 40 + 10 = 50, 50 + 10 = 60.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: 60 children.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "48; check 48 + 37 = 85; 60",
            commonErrors: [
              "Subtracting 12 from 37 instead of the remaining children.",
            ],
          },
        },
      ],
    },
    {
      id: "edpm2-u1-sub-more",
      title: "Subtracting across ten and near 100",
      skill: "Subtract numbers requiring multiple borrows and totals near 100.",
      lesson: {
        sections: [
          {
            heading: "Subtracting with multiple borrows",
            body: "Sometimes you need to borrow twice. 63 − 28: 63 = 50 + 13, 28 = 20 + 8. 13 − 8 = 5, 50 − 20 = 30, answer 35. Check: 35 + 28 = 63. Always check with the inverse.",
          },
          {
            heading: "Subtracting near 100",
            body: "For numbers just under 100, count up to 100 first. 100 − 37: think 37 + __ = 100. 37 + 3 = 40, 40 + 60 = 100, so 63. Or partition: 100 − 30 = 70, 70 − 7 = 63. For 96 − 58, count up: 96 → 100 is 4, then 100 − 58 = 42, total 46.",
          },
          {
            heading: "Finding differences",
            body: "'How many more' means subtract. If Team A scored 78 and Team B scored 45, the difference is 78 − 45 = 33. Always subtract the smaller from the larger. Draw a bar model or number line to see the gap.",
          },
        ],
        keyFormulas: [
          { name: "Count up to 100", statement: "100 − n: find n + __ = 100" },
          { name: "Difference", statement: "larger − smaller = how many more" },
        ],
        workedExample: {
          problem: "Work out 100 − 64.",
          solution:
            "64 + 36 = 100? Check: 64 + 30 = 94, 94 + 6 = 100. So 100 − 64 = 36.",
        },
      },
      questions: [
        {
          id: "edpm2-u1-sm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 100 − 30.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7" },
              { id: "b", text: "70" },
              { id: "c", text: "90" },
              { id: "d", text: "130" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Near 100",
                statement: "100 − 30 = 70.",
              },
            ],
            steps: [
              {
                reasoning: "30 + 70 = 100, so 100 − 30 = 70.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 70",
            commonErrors: ["Answering 130 — adding instead of subtracting."],
          },
        },
        {
          id: "edpm2-u1-sm-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Work out 82 − 47.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 35, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Borrowing",
                statement: "82 = 70 + 12; 12 − 7 = 5; 70 − 40 = 30; total 35.",
              },
            ],
            steps: [
              { reasoning: "Borrow: 82 = 70 + 12.", marks: 1, markCode: "M" },
              {
                reasoning: "12 − 7 = 5, 70 − 40 = 30.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "30 + 5 = 35.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "35",
            commonErrors: ["Answering 45 — not borrowing correctly."],
          },
        },
        {
          id: "edpm2-u1-sm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Work out 100 − 58 using the count-up method.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 42, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Count up",
                statement: "58 + 2 = 60, 60 + 40 = 100, total 42.",
              },
            ],
            steps: [
              {
                reasoning: "58 + 2 = 60 (easy step).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "60 + 40 = 100.", marks: 1, markCode: "M" },
              { reasoning: "2 + 40 = 42.", marks: 1, markCode: "A" },
              { reasoning: "Answer: 42.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "42",
            commonErrors: ["Answering 58 — confusing the method."],
          },
        },
        {
          id: "edpm2-u1-sm-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A library has 100 books. 63 are borrowed.",
          parts: [
            {
              label: "a",
              prompt: "How many books are left in the library?",
              marks: 3,
            },
            {
              label: "b",
              prompt: "If 25 books are returned, how many are borrowed now?",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "How many more books were borrowed than are left (before the returns)?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Subtraction problems",
                statement:
                  "Left = total − borrowed; returned reduces borrowed.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "100 − 63 = 37.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "63 + 37 = 100. Check passes.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: 37 books.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "63 − 25 = 38 borrowed.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "60 − 20 = 40, 3 − 5 needs borrow → 38.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: 38 books.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Borrowed 63, left 37.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Difference = 63 − 37 = 26.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: 26 more.",
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
            finalAnswer: "37; 38; 26 more",
            commonErrors: [
              "Adding 25 to 63 instead of subtracting for part (b).",
            ],
          },
        },
      ],
    },
  ],
};
