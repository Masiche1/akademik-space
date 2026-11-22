import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "edpm2-u1-lesson-1-1",
  code: "1-1",
  title: "Counting in Steps and Place Value to 100",
  goal: "I CAN count in 2s, 5s and 10s, count in 3s and 4s, and partition two-digit numbers into tens and ones.",
  standards: ["Year 2 Number", "Place value", "Counting"],
  vocabulary: [
    {
      term: "Count in steps",
      definition: "Count forwards or backwards in groups of 2, 3, 4, 5 or 10.",
    },
    {
      term: "Place value",
      definition:
        "The value of a digit by its position — the 7 in 72 is worth 70.",
    },
    {
      term: "Partition",
      definition: "Split a number into tens and ones, e.g. 83 = 80 + 3.",
    },
    {
      term: "Multiple",
      definition:
        "A number in a counting sequence, e.g. 12 is a multiple of 2 and of 3.",
    },
    { term: "Hundred", definition: "The number 100 — ten tens." },
  ],
  concepts: [
    {
      id: "edpm2-u1-counting",
      title: "Counting in steps to 100",
      skill: "Count forwards and backwards in 2s, 5s, 10s, 3s and 4s to 100.",
      lesson: {
        sections: [
          {
            heading: "Counting in 2s, 5s and 10s",
            body: "Practise skip counting: in 2s — 2, 4, 6, 8, 10 ... to 100; in 5s — 5, 10, 15, 20 ... to 100; in 10s — 10, 20, 30 ... to 100. These are all **multiples**. Counting backwards works too: from 50 in 10s gives 50, 40, 30, 20, 10.",
          },
          {
            heading: "Counting in 3s and 4s",
            body: "In 3s: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30 — the times tables of 3. In 4s: 4, 8, 12, 16, 20, 24, 28, 32. Look for the pattern: each step adds the same amount. A number sequence like 12, 16, 20, 24 counts in 4s.",
          },
          {
            heading: "Finding the step",
            body: "To find what step a sequence uses, subtract two neighbouring numbers: 14 → 22 is +8, so it counts in 8s. To continue, keep adding the same step. To find a missing number, count on or back by the step.",
          },
        ],
        keyFormulas: [
          {
            name: "Skip counting",
            statement: "Each step adds the same amount (2, 3, 4, 5 or 10)",
          },
          {
            name: "Step size",
            statement: "step = difference between neighbouring terms",
          },
        ],
        workedExample: {
          problem: "Continue the sequence: 15, 20, 25, __, 35.",
          solution: "Step is +5 (counting in 5s). Missing number = 30.",
        },
      },
      questions: [
        {
          id: "edpm2-u1-count-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What comes next: 30, 40, 50, __?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "55" },
              { id: "b", text: "51" },
              { id: "c", text: "100" },
              { id: "d", text: "60" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Counting in 10s",
                statement: "Each step adds 10.",
              },
            ],
            steps: [{ reasoning: "50 + 10 = 60.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** 60",
            commonErrors: ["Adding 1 or 5 instead of 10."],
          },
        },
        {
          id: "edpm2-u1-count-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Continue counting in 4s: 8, 12, 16, __, 24.",
          response: {
            type: "numeric",
            parts: [{ label: "Missing number", answer: 20, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Counting in 4s",
                statement: "Each step adds 4.",
              },
            ],
            steps: [
              { reasoning: "16 + 4 = 20.", marks: 1, markCode: "M" },
              {
                reasoning: "Check: 20 + 4 = 24. Correct.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 20.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20",
            commonErrors: ["Writing 18 — adding 2 not 4."],
          },
        },
        {
          id: "edpm2-u1-count-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A sequence counts in 5s backwards from 50. What is the 4th number?",
          response: {
            type: "numeric",
            parts: [{ label: "4th number", answer: 35, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Counting back in steps",
                statement: "50, 45, 40, 35.",
              },
            ],
            steps: [
              {
                reasoning: "Sequence: 50, 45, 40, 35, 30...",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "4th number is 35.", marks: 1, markCode: "M" },
              {
                reasoning: "Check: 35 + 5 = 40 (previous term).",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Answer: 35.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "35",
            commonErrors: [
              "Counting 50 as the first number and miscounting positions.",
            ],
          },
        },
        {
          id: "edpm2-u1-count-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Look at this sequence: 6, 12, 18, 24, __, 36.",
          parts: [
            { label: "a", prompt: "What is the step size?", marks: 2 },
            { label: "b", prompt: "Fill in the missing number.", marks: 3 },
            {
              label: "c",
              prompt: "What would the 8th number in the sequence be?",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sequences",
                statement:
                  "Find step by subtracting neighbours; continue the rule.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "12 − 6 = 6; each step adds 6.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Step = 6 (counting in 6s).",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "24 + 6 = 30.", marks: 1, markCode: "M" },
              {
                part: "b",
                reasoning: "Check: 30 + 6 = 36. Correct.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Answer: 30.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Sequence: 6,12,18,24,30,36,42,48.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "8th number = 48 (8 × 6).",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Answer: 48.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Reasoning via multiplication or repeated addition.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Clear method.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Step 6; 30; 48",
            commonErrors: ["Miscounting which term is the 8th."],
          },
        },
      ],
    },
    {
      id: "edpm2-u1-place-value",
      title: "Tens and ones to 100",
      skill:
        "Partition two-digit numbers into tens and ones and compare numbers to 100.",
      lesson: {
        sections: [
          {
            heading: "Place value to 100",
            body: "Two-digit numbers have a tens digit and a ones digit. 58 = 5 tens and 8 ones = 50 + 8. The tens digit tells the big value: 90 has 9 tens = 90. One hundred is 10 tens.",
          },
          {
            heading: "Partitioning in different ways",
            body: "You can partition a number in many ways: 67 = 60 + 7, but also 67 = 50 + 17 or 40 + 27. For place value work, always use tens and ones: 67 = 60 + 7. To make a number, combine tens and ones: 4 tens and 6 ones = 46.",
          },
          {
            heading: "Comparing numbers to 100",
            body: "Compare two-digit numbers by tens first, then ones: 82 > 79 because 8 tens beats 7 tens. 85 > 83 because tens are equal and 5 ones beats 3 ones. Use >, < and =. 100 is greater than any two-digit number.",
          },
        ],
        keyFormulas: [
          {
            name: "Partition",
            statement: "n = (tens × 10) + ones, e.g. 58 = 50 + 8",
          },
          { name: "Comparing", statement: "Tens first, then ones" },
        ],
        workedExample: {
          problem: "Partition 74 and compare it with 47.",
          solution: "74 = 70 + 4. 74 > 47 because 7 tens > 4 tens.",
        },
      },
      questions: [
        {
          id: "edpm2-u1-pv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of the digit 6 in 63?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "60" },
              { id: "b", text: "600" },
              { id: "c", text: "6" },
              { id: "d", text: "63" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Place value",
                statement: "6 is in the tens place = 60.",
              },
            ],
            steps: [{ reasoning: "6 tens = 60.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 60",
            commonErrors: ["Answering 6 — ignoring place value."],
          },
        },
        {
          id: "edpm2-u1-pv-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Partition 92 into tens and ones.",
          response: {
            type: "numeric",
            parts: [
              { label: "Tens part", answer: 90, tolerance: 0 },
              { label: "Ones part", answer: 2, tolerance: 0 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Partition",
                statement: "92 = 90 + 2.",
              },
            ],
            steps: [
              { reasoning: "9 tens = 90.", marks: 1, markCode: "M" },
              { reasoning: "2 ones = 2.", marks: 1, markCode: "M" },
              { reasoning: "90 + 2 = 92. Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "90 + 2",
            commonErrors: ["Writing 9 + 2 — forgetting place value."],
          },
        },
        {
          id: "edpm2-u1-pv-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Which is greater: 5 tens and 9 ones, or 6 tens and 1 one? Show your reasoning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparing",
                statement: "Tens decide first: 59 vs 61.",
              },
            ],
            steps: [
              { reasoning: "5 tens and 9 ones = 59.", marks: 1, markCode: "M" },
              { reasoning: "6 tens and 1 one = 61.", marks: 1, markCode: "M" },
              {
                reasoning: "61 > 59 because 6 tens > 5 tens.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Reasoning uses place value.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "61 is greater (6 tens beats 5 tens)",
            commonErrors: ["Choosing 59 because 9 > 1 — comparing ones first."],
          },
        },
        {
          id: "edpm2-u1-pv-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A football team scored 47 goals this season. Last season they scored 74 goals.",
          parts: [
            {
              label: "a",
              prompt: "Partition 74 into tens and ones.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Which season had more goals? By how many?",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Write the two scores as numbers made of tens and ones (e.g. '4 tens and 7 ones').",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Place value in context",
                statement: "Partition and compare using tens then ones.",
              },
            ],
            steps: [
              { part: "a", reasoning: "74 = 70 + 4.", marks: 1, markCode: "M" },
              {
                part: "a",
                reasoning: "7 tens and 4 ones.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "74 > 47 because 7 tens > 4 tens.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "74 − 47 = 27 more goals.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Last season had more.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Difference correct: 27.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "47 = 4 tens and 7 ones.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "74 = 7 tens and 4 ones.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Both correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Format matches the example.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "70 + 4; last season by 27; 4 tens 7 ones and 7 tens 4 ones",
            commonErrors: ["Swapping tens and ones when writing in words."],
          },
        },
      ],
    },
  ],
};
