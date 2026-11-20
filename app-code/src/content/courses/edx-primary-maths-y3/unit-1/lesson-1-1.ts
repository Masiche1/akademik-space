import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "edpm3-u1-lesson-1-1",
  code: "1-1",
  title: "Place Value to 1000",
  goal: "I CAN read, write and partition numbers to 1000 into hundreds, tens and ones.",
  standards: ["Year 3 Number", "Place value"],
  vocabulary: [
    {
      term: "Hundreds",
      definition: "The third digit from the right — the 4 in 437 is worth 400.",
    },
    {
      term: "Partition",
      definition:
        "Split a number into hundreds, tens and ones, e.g. 365 = 300 + 60 + 5.",
    },
    { term: "Thousand", definition: "1000 = 10 hundreds." },
    {
      term: "Compare",
      definition: "Find which number is greater using place value.",
    },
    {
      term: "Order",
      definition: "Arrange numbers from smallest to largest or vice versa.",
    },
  ],
  concepts: [
    {
      id: "edpm3-u1-place-value",
      title: "Hundreds, tens and ones",
      skill:
        "Read, write and partition three-digit numbers into hundreds, tens and ones.",
      lesson: {
        sections: [
          {
            heading: "Three-digit numbers",
            body: "Every three-digit number has hundreds, tens and ones. In 437: 4 hundreds = 400, 3 tens = 30, 7 ones = 7. So 437 = 400 + 30 + 7. The hundreds digit is the most important — it decides which number is bigger.",
          },
          {
            heading: "Partitioning",
            body: "Partition into hundreds, tens and ones: 582 = 500 + 80 + 2. You can also partition differently: 582 = 400 + 182, or 500 + 70 + 12. For place value, always use hundreds-tens-ones. To build a number, combine: 6 hundreds, 2 tens, 9 ones = 629.",
          },
          {
            heading: "Comparing and ordering",
            body: "Compare hundreds first: 437 < 512 because 4 hundreds < 5 hundreds. If hundreds equal, compare tens: 465 < 472. If both equal, compare ones. To order a set, compare pair by pair and arrange smallest to largest.",
          },
        ],
        keyFormulas: [
          {
            name: "Partition",
            statement: "n = (hundreds × 100) + (tens × 10) + ones",
          },
          {
            name: "Comparing",
            statement: "Hundreds first, then tens, then ones",
          },
        ],
        workedExample: {
          problem: "Partition 706 and compare it with 670.",
          solution:
            "706 = 700 + 0 + 6 (7 hundreds, 0 tens, 6 ones). Compare with 670: hundreds are equal (7), tens 0 < 7, so 670 is greater than 706.",
        },
      },
      questions: [
        {
          id: "edpm3-u1-pv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of the digit 8 in 856?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8" },
              { id: "b", text: "80" },
              { id: "c", text: "800" },
              { id: "d", text: "8000" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Place value",
                statement: "8 is in the hundreds place = 800.",
              },
            ],
            steps: [
              { reasoning: "8 hundreds = 800.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 800",
            commonErrors: ["Answering 80 — misreading the place."],
          },
        },
        {
          id: "edpm3-u1-pv-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Partition 943 into hundreds, tens and ones.",
          response: {
            type: "numeric",
            parts: [
              { label: "Hundreds part", answer: 900, tolerance: 0 },
              { label: "Tens part", answer: 40, tolerance: 0 },
              { label: "Ones part", answer: 3, tolerance: 0 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Partition",
                statement: "943 = 900 + 40 + 3.",
              },
            ],
            steps: [
              { reasoning: "9 hundreds = 900.", marks: 1, markCode: "M" },
              {
                reasoning: "4 tens = 40, 3 ones = 3.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "900 + 40 + 3 = 943. Correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "900 + 40 + 3",
            commonErrors: ["Writing 9 + 40 + 3 — forgetting place value."],
          },
        },
        {
          id: "edpm3-u1-pv-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Order these numbers from smallest to largest: 508, 580, 850, 805.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ordering",
                statement: "Compare hundreds first, then tens, then ones.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Hundreds: 508 and 580 have 5 hundreds; 850 and 805 have 8 hundreds.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "5-hundreds group: 508 < 580 (0 tens < 8 tens).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "8-hundreds group: 805 < 850 (0 tens < 5 tens).",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Order: 508, 580, 805, 850.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "508, 580, 805, 850",
            commonErrors: ["Ordering by ones digit instead of place value."],
          },
        },
        {
          id: "edpm3-u1-pv-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A school has 615 pupils. Another school has 651 pupils.",
          parts: [
            {
              label: "a",
              prompt: "Partition both numbers into hundreds, tens and ones.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Which school has more pupils? By how many?",
              marks: 4,
            },
            { label: "c", prompt: "Write each number in words.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Place value in context",
                statement: "Partition and compare using hundreds-tens-ones.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "615 = 600 + 10 + 5; 651 = 600 + 50 + 1.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Both correct partitions.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Format consistent.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "651 > 615 because tens 5 > 1.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Difference = 651 − 615 = 36.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Second school has more.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Difference correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "615 = six hundred and fifteen.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "651 = six hundred and fifty-one.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Both correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "615=600+10+5, 651=600+50+1; 651 school by 36; six hundred fifteen / fifty-one",
            commonErrors: [
              "Writing 'six hundred fifty one' without 'and' or hyphen issues — accept both.",
            ],
          },
        },
      ],
    },
    {
      id: "edpm3-u1-place-more",
      title: "Numbers near 1000 and counting",
      skill:
        "Count in hundreds, tens and ones and work with numbers near 1000.",
      lesson: {
        sections: [
          {
            heading: "Counting in hundreds",
            body: "Counting in 100s: 100, 200, 300 ... 1000. Each step adds 100. 400 + 300 = 700. 900 + 200 = 1100 — that's over a thousand! When counting past 999, you reach 1000.",
          },
          {
            heading: "Numbers near 1000",
            body: "999 + 1 = 1000. 998 + 5 = 1003. Numbers just over 1000 are written with four digits: 1001, 1010, 1100. The thousands digit is the new place value.",
          },
          {
            heading: "Partitioning near 1000",
            body: "1005 = 1000 + 0 + 5. 1042 = 1000 + 40 + 2. 1099 = 1000 + 90 + 9. Numbers like 1000 have all zeros after the 1. Numbers like 1100 = 1000 + 100 + 0 + 0.",
          },
        ],
        keyFormulas: [
          { name: "Counting in 100s", statement: "100, 200, 300 ... 1000" },
          {
            name: "Near 1000",
            statement: "999 + 1 = 1000; four-digit numbers start",
          },
        ],
        workedExample: {
          problem: "What is 995 + 10?",
          solution: "995 + 5 = 1000, then 1000 + 5 = 1005.",
        },
      },
      questions: [
        {
          id: "edpm3-u1-pm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 999 + 1?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1000" },
              { id: "b", text: "1001" },
              { id: "c", text: "990" },
              { id: "d", text: "1999" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Near 1000",
                statement: "999 + 1 = 1000.",
              },
            ],
            steps: [
              {
                reasoning: "999 + 1 crosses to 1000.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 1000",
            commonErrors: ["Writing 1001 — adding 2 instead of 1."],
          },
        },
        {
          id: "edpm3-u1-pm-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Partition 1047 into thousands, hundreds, tens and ones.",
          response: {
            type: "numeric",
            parts: [
              { label: "Thousands", answer: 1000, tolerance: 0 },
              { label: "Hundreds", answer: 0, tolerance: 0 },
              { label: "Tens", answer: 40, tolerance: 0 },
              { label: "Ones", answer: 7, tolerance: 0 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Four-digit partition",
                statement: "1047 = 1000 + 0 + 40 + 7.",
              },
            ],
            steps: [
              { reasoning: "1 thousand = 1000.", marks: 1, markCode: "M" },
              {
                reasoning: "0 hundreds, 4 tens = 40, 7 ones = 7.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "1000 + 0 + 40 + 7 = 1047.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1000 + 0 + 40 + 7",
            commonErrors: [
              "Writing 1000 + 400 + 7 — misreading the 0 in hundreds place.",
            ],
          },
        },
        {
          id: "edpm3-u1-pm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Count on in hundreds from 400: what is the 5th number?",
          response: {
            type: "numeric",
            parts: [{ label: "5th number", answer: 800, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Counting in 100s",
                statement: "400, 500, 600, 700, 800.",
              },
            ],
            steps: [
              {
                reasoning: "Sequence: 400, 500, 600, 700, 800.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "5th number = 800.", marks: 1, markCode: "M" },
              {
                reasoning: "Check: 400 + 4 × 100 = 800.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Answer: 800.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "800",
            commonErrors: [
              "Counting 400 as first gives 800 for 5th — correct.",
            ],
          },
        },
        {
          id: "edpm3-u1-pm-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A marathon has 42,000 entrants. 38,500 have registered so far.",
          parts: [
            {
              label: "a",
              prompt: "How many more entrants can still register?",
              marks: 4,
            },
            {
              label: "b",
              prompt: "If 1,000 more register, how many is that?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Will the race reach its 42,000 target? Explain.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Large numbers",
                statement: "Subtract within thousands; track totals.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "42,000 − 38,500 = 3,500.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "38,500 + 3,500 = 42,000. Check passes.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: 3,500 more.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Calculation clear.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "38,500 + 1,000 = 39,500.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: 39,500.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Unit/context clear.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "39,500 < 42,000, so not yet.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Still 2,500 short.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: No, 2,500 short.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3,500; 39,500; no, 2,500 short",
            commonErrors: ["Misaligning digits in subtraction."],
          },
        },
      ],
    },
  ],
};
