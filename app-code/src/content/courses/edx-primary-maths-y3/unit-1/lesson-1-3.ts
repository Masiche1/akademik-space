import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "edpm3-u1-lesson-1-3",
  code: "1-3",
  title: "Subtraction to 1000",
  goal: "I CAN subtract three-digit numbers using partitioning, counting up and inverse checking.",
  standards: ["Year 3 Addition and subtraction"],
  vocabulary: [
    {
      term: "Subtract",
      definition: "Find the difference between two numbers.",
    },
    {
      term: "Partition",
      definition: "Split numbers into hundreds, tens and ones to subtract.",
    },
    {
      term: "Count up",
      definition:
        "Find the difference by counting from the smaller to the larger number.",
    },
    {
      term: "Borrow",
      definition: "Take a ten or hundred from the next place when needed.",
    },
    {
      term: "Difference",
      definition: "How much one number is bigger than another.",
    },
  ],
  concepts: [
    {
      id: "edpm3-u1-subtraction",
      title: "Subtracting three-digit numbers",
      skill: "Subtract numbers to 1000 using partitioning and counting up.",
      lesson: {
        sections: [
          {
            heading: "Partition method",
            body: "Split both numbers into hundreds, tens and ones. Subtract hundreds, tens and ones separately. 634 − 217 = (600 − 200) − (30 − 10) − (4 − 7)... but 4 − 7 doesn't work, so borrow. 634 = 500 + 130 + 4? Simpler: 634 − 200 = 434, 434 − 17 = 417.",
          },
          {
            heading: "Counting up method",
            body: "To find 634 − 217, count up from 217 to 634: 217 → 220 (+3), 220 → 300 (+80), 300 → 634 (+334). Total: 3 + 80 + 334 = 417. Counting up through friendly numbers is often quicker than borrowing.",
          },
          {
            heading: "Checking with addition",
            body: "Always check subtraction by adding back: if 634 − 217 = 417, then 417 + 217 should = 634. 417 + 200 = 617, 617 + 17 = 634. Check passes! This catches most errors.",
          },
        ],
        keyFormulas: [
          {
            name: "Partition subtract",
            statement: "Split into H/T/O; borrow when needed",
          },
          {
            name: "Count up",
            statement: "smaller → friendly numbers → larger; add the steps",
          },
        ],
        workedExample: {
          problem: "Work out 542 − 268.",
          solution:
            "Count up: 268 → 300 is 32, 300 → 542 is 242. Total: 32 + 242 = 274. Check: 274 + 268 = 542.",
        },
      },
      questions: [
        {
          id: "edpm3-u1-sub-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 456 − 234.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "122" },
              { id: "b", text: "222" },
              { id: "c", text: "690" },
              { id: "d", text: "232" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Partition subtract",
                statement: "400−200=200, 50−30=20, 6−4=2 → 222.",
              },
            ],
            steps: [{ reasoning: "456 − 234 = 222.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 222",
            commonErrors: [
              "Subtracting smaller digit from larger in each column.",
            ],
          },
        },
        {
          id: "edpm3-u1-sub-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Work out 531 − 278.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 253, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Count up",
                statement: "278 → 300 is 22, 300 → 531 is 231, total 253.",
              },
            ],
            steps: [
              {
                reasoning: "531 − 278: count up from 278.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "278 + 22 = 300; 300 + 231 = 531.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "22 + 231 = 253.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "253",
            commonErrors: ["Answering 747 — adding instead of subtracting."],
          },
        },
        {
          id: "edpm3-u1-sub-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Work out 700 − 365 using counting up.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 335, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Count up to 1000",
                statement: "365 → 400 is 35, 400 → 700 is 300, total 335.",
              },
            ],
            steps: [
              { reasoning: "365 + 35 = 400.", marks: 1, markCode: "M" },
              { reasoning: "400 + 300 = 700.", marks: 1, markCode: "M" },
              { reasoning: "35 + 300 = 335.", marks: 1, markCode: "A" },
              { reasoning: "Answer: 335.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "335",
            commonErrors: ["Answering 435 — miscounting the steps."],
          },
        },
        {
          id: "edpm3-u1-sub-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A library has 800 books. 467 are borrowed.",
          parts: [
            {
              label: "a",
              prompt: "How many books are left in the library?",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Check your answer by adding back.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "If 150 books are returned, how many are borrowed now?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Subtraction problems",
                statement:
                  "Left = total − borrowed; check by adding; returns reduce borrowed.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "800 − 467 = 333.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Count up: 467 → 500 is 33, 500 → 800 is 300, total 333.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: 333 books.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Method clear.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Check: 333 + 467 = 800.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "300 + 400 = 700, 33 + 67 = 100, 700 + 100 = 800.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Check passes.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "467 − 150 = 317 borrowed.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "400 − 100 = 300, 67 − 50 = 17, 300 + 17 = 317.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: 317 books.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "333; check 333 + 467 = 800; 317",
            commonErrors: [
              "Adding 150 to 467 instead of subtracting for part (c).",
            ],
          },
        },
      ],
    },
    {
      id: "edpm3-u1-sub-more",
      title: "Subtracting across 1000",
      skill:
        "Subtract numbers where the result is a four-digit number or requires careful borrowing.",
      lesson: {
        sections: [
          {
            heading: "Subtraction with borrowing across places",
            body: "When multiple borrows are needed, work carefully. 503 − 178: can't do 3 − 8, borrow from tens — but tens is 0, so borrow from hundreds: 503 = 400 + 90 + 13. Then 13 − 8 = 5, 90 − 70 = 20, 400 − 100 = 300. Total: 300 + 20 + 5 = 325.",
          },
          {
            heading: "Subtraction near 1000",
            body: "For numbers near 1000, count up to 1000 first. 1000 − 456: 456 → 500 is 44, 500 → 1000 is 500, total 544. Or partition: 1000 − 400 = 600, 600 − 56 = 544. For 1005 − 678, count up: 678 → 700 is 22, 700 → 1005 is 305, total 327.",
          },
          {
            heading: "Finding differences in context",
            body: "'How many more' means subtract the smaller from the larger. If Year 3 has 156 pupils and Year 4 has 203, difference = 203 − 156 = 47. Always check: larger − smaller = positive answer.",
          },
        ],
        keyFormulas: [
          {
            name: "Multiple borrows",
            statement: "Break hundreds into tens, tens into ones as needed",
          },
          {
            name: "Count up",
            statement: "smaller → 1000 or friendly number → larger",
          },
        ],
        workedExample: {
          problem: "Work out 1000 − 347.",
          solution:
            "Count up: 347 → 400 is 53, 400 → 1000 is 600. Total: 53 + 600 = 653. Check: 653 + 347 = 1000.",
        },
      },
      questions: [
        {
          id: "edpm3-u1-sm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 1000 − 500.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1500" },
              { id: "b", text: "500" },
              { id: "c", text: "499" },
              { id: "d", text: "50" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Near 1000",
                statement: "1000 − 500 = 500.",
              },
            ],
            steps: [
              {
                reasoning: "500 + 500 = 1000, so 1000 − 500 = 500.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 500",
            commonErrors: ["Answering 1500 — adding instead of subtracting."],
          },
        },
        {
          id: "edpm3-u1-sm-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Work out 612 − 389.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 223, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Count up",
                statement: "389 → 400 is 11, 400 → 612 is 212, total 223.",
              },
            ],
            steps: [
              { reasoning: "389 + 11 = 400.", marks: 1, markCode: "M" },
              { reasoning: "400 + 212 = 612.", marks: 1, markCode: "M" },
              { reasoning: "11 + 212 = 223.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "223",
            commonErrors: ["Answering 301 — borrowing incorrectly."],
          },
        },
        {
          id: "edpm3-u1-sm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Work out 805 − 467 using counting up.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 338, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Count up",
                statement: "467 → 500 is 33, 500 → 805 is 305, total 338.",
              },
            ],
            steps: [
              { reasoning: "467 + 33 = 500.", marks: 1, markCode: "M" },
              { reasoning: "500 + 305 = 805.", marks: 1, markCode: "M" },
              { reasoning: "33 + 305 = 338.", marks: 1, markCode: "A" },
              { reasoning: "Answer: 338.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "338",
            commonErrors: ["Answering 438 — miscounting steps."],
          },
        },
        {
          id: "edpm3-u1-sm-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A factory makes 1,000 toys. 678 are packed.",
          parts: [
            {
              label: "a",
              prompt: "How many toys are still unpacked?",
              marks: 3,
            },
            {
              label: "b",
              prompt: "If 250 more are packed, how many remain unpacked?",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "How many more toys were packed than unpacked (before the extra 250)?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Subtraction problems",
                statement: "Unpacked = total − packed; track changes; compare.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "1,000 − 678 = 322.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Count up: 678 → 700 is 22, 700 → 1000 is 300, total 322.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: 322 toys.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Packed now = 678 + 250 = 928.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Unpacked = 1,000 − 928 = 72.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: 72 toys.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Packed 678, unpacked 322.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Difference = 678 − 322 = 356.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: 356 more packed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Reasoning clear.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "322; 72; 356 more packed",
            commonErrors: [
              "Using post-250 numbers for part (c) — it says 'before'.",
            ],
          },
        },
      ],
    },
  ],
};
