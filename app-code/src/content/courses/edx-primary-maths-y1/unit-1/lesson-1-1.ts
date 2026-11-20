import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "edpm1-u1-lesson-1-1",
  code: "1-1",
  title: "Counting, Ordering and Place Value to 100",
  goal: "I CAN count forwards and backwards to 100, order numbers, and partition two-digit numbers into tens and ones.",
  standards: ["Year 1 Number", "Counting", "Place value"],
  vocabulary: [
    {
      term: "Count on",
      definition: "Say the next number in the counting sequence.",
    },
    { term: "Count back", definition: "Say the number before a given number." },
    {
      term: "Place value",
      definition:
        "The value of a digit depending on its position, e.g. the 4 in 47 is worth 40.",
    },
    {
      term: "Partition",
      definition: "Split a number into tens and ones, e.g. 56 = 50 + 6.",
    },
    {
      term: "Number line",
      definition:
        "A line showing numbers in order, used for counting and comparing.",
    },
  ],
  concepts: [
    {
      id: "edpm1-u1-counting",
      title: "Counting and ordering to 100",
      skill:
        "Count forwards and backwards, find missing numbers and order numbers to 100.",
      lesson: {
        sections: [
          {
            heading: "Counting forwards and backwards",
            body: "Count forwards in ones from any number up to 100: after 47 comes 48, then 49, then 50. Count backwards in ones: before 60 comes 59, then 58. Practise starting from any number, not just 1. When crossing a ten, remember the pattern: ... 58, 59, 60, 61 ...",
          },
          {
            heading: "Finding missing numbers",
            body: "To find a missing number, count on or count back from the numbers you know. If the numbers are 34, 35, __, 37, the missing number is 36 — count on from 35. For a missing number at the start, count back from the first number you know.",
          },
          {
            heading: "Ordering numbers",
            body: "To order numbers from smallest to largest, compare the tens digit first. 34 comes before 42 because 3 tens is less than 4 tens. When tens digits are equal, compare the ones digits: 45 comes before 48 because 5 ones is less than 8 ones.",
          },
        ],
        keyFormulas: [
          {
            name: "Counting on",
            statement: "Next number = count forward one step",
          },
          {
            name: "Comparing two-digit numbers",
            statement: "Compare tens first, then ones",
          },
        ],
        workedExample: {
          problem: "Count backwards from 72: what are the next three numbers?",
          solution:
            "71, 70, 69. Crossing the ten boundary: after 70 comes 69 (not 71 again).",
        },
      },
      questions: [
        {
          id: "edpm1-u1-count-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What number comes immediately after 69?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "68" },
              { id: "b", text: "70" },
              { id: "c", text: "71" },
              { id: "d", text: "80" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Count on",
                statement: "The next number after 69 is 70.",
              },
            ],
            steps: [
              {
                reasoning: "69, then 70 — crossing into the seventies.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 70",
            commonErrors: ["Saying 71 — skipping the ten boundary."],
          },
        },
        {
          id: "edpm1-u1-count-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Fill in the missing numbers: 46, 47, __, 49, __, 51.",
          response: {
            type: "numeric",
            parts: [
              { label: "First missing number", answer: 48, tolerance: 0 },
              { label: "Second missing number", answer: 50, tolerance: 0 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Missing numbers",
                statement: "Count on from the known numbers.",
              },
            ],
            steps: [
              { reasoning: "After 47 comes 48.", marks: 1, markCode: "M" },
              { reasoning: "After 49 comes 50.", marks: 1, markCode: "M" },
              { reasoning: "Both answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "48 and 50",
            commonErrors: [
              "Writing 50 for the first gap and 51 for the second — not counting carefully.",
            ],
          },
        },
        {
          id: "edpm1-u1-count-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A child counts backwards from 83 and stops at 76. How many numbers did they say?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Counting back",
                statement: "Count the numbers said, including both endpoints.",
              },
            ],
            steps: [
              {
                reasoning: "Numbers said: 83, 82, 81, 80, 79, 78, 77, 76.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Count them: 8 numbers.", marks: 1, markCode: "M" },
              {
                reasoning:
                  "Check by counting forwards from 76 to 83 also gives 8.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Answer: 8 numbers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8 numbers",
            commonErrors: ["Answering 7 by not counting both endpoints."],
          },
        },
        {
          id: "edpm1-u1-count-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "These numbers are mixed up: 57, 38, 64, 29, 71.",
          parts: [
            {
              label: "a",
              prompt: "Put the numbers in order from smallest to largest.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Which number is exactly halfway between 38 and 48?",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Write the number that is 10 more than 57 and 10 less than 29.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ordering",
                statement: "Compare tens then ones; count on/back in tens.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Smallest tens digit first: 29 (2 tens), then 38 (3 tens).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Then 57 (5 tens), 64 (6 tens), 71 (7 tens).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Order: 29, 38, 57, 64, 71.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "All five in correct positions.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Count on from 38: 39, 40, 41 ... halfway to 48.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "38 + 5 = 43 and 48 − 5 = 43.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Halfway number is 43.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "10 more than 57 = 67.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "10 less than 29 = 19.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Both correct — 67 and 19.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "29, 38, 57, 64, 71; 43; 67 and 19",
            commonErrors: ["Ordering by ones digit instead of tens."],
          },
        },
      ],
    },
    {
      id: "edpm1-u1-place-value",
      title: "Tens and ones",
      skill:
        "Partition two-digit numbers into tens and ones and use place value to compare numbers.",
      lesson: {
        sections: [
          {
            heading: "Tens and ones",
            body: "Every two-digit number is made of tens and ones. In 63, the 6 is in the tens place so it is worth 60, and the 3 is in the ones place so it is worth 3. We write 63 = 60 + 3, or partition it as 6 tens and 3 ones.",
          },
          {
            heading: "Partitioning numbers",
            body: "To partition a number, look at each digit's place. 48 = 40 + 8. 91 = 90 + 1. You can also partition in other ways: 48 = 30 + 18 or 20 + 28. The tens-and-ones partition is the most useful for place value.",
          },
          {
            heading: "Comparing with place value",
            body: "The tens digit tells you which number is bigger. 72 > 68 because 7 tens beats 6 tens. If tens are equal, the ones decide: 55 > 52 because 5 ones beats 2 ones. Symbols: > means greater than, < means less than, = means equal.",
          },
        ],
        keyFormulas: [
          {
            name: "Partition",
            statement: "Two-digit number = tens + ones, e.g. 63 = 60 + 3",
          },
          { name: "Comparing", statement: "Compare tens first, then ones" },
        ],
        workedExample: {
          problem: "Partition 85 into tens and ones, then compare it with 78.",
          solution:
            "85 = 80 + 5, so 8 tens and 5 ones. 85 > 78 because 8 tens is more than 7 tens.",
        },
      },
      questions: [
        {
          id: "edpm1-u1-place-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the number 47, what is the value of the digit 4?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "40" },
              { id: "c", text: "47" },
              { id: "d", text: "400" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Place value",
                statement: "The 4 is in the tens place, worth 40.",
              },
            ],
            steps: [{ reasoning: "4 tens = 40.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 40",
            commonErrors: ["Answering 4 — ignoring place value."],
          },
        },
        {
          id: "edpm1-u1-place-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Partition 76 into tens and ones.",
          response: {
            type: "numeric",
            parts: [
              { label: "Tens part", answer: 70, tolerance: 0 },
              { label: "Ones part", answer: 6, tolerance: 0 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Partition", statement: "76 = 70 + 6." },
            ],
            steps: [
              {
                reasoning: "7 in the tens place = 70.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "6 in the ones place = 6.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "70 + 6 = 76 — correct partition.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "70 + 6",
            commonErrors: ["Writing 7 + 6 = 13 — forgetting place value."],
          },
        },
        {
          id: "edpm1-u1-place-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Use >, < or = to compare: 83 ___ 38 and 55 ___ 55.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparing",
                statement: "Compare tens, then ones.",
              },
            ],
            steps: [
              {
                reasoning: "83 has 8 tens, 38 has 3 tens, so 83 > 38.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "55 and 55 are identical, so 55 = 55.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both symbols correct.", marks: 1, markCode: "A" },
              {
                reasoning: "Symbols used correctly (not words).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "83 > 38; 55 = 55",
            commonErrors: ["Reversing the symbols."],
          },
        },
        {
          id: "edpm1-u1-place-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A shop sells pencils in packs of 10 and single pencils.",
          parts: [
            {
              label: "a",
              prompt: "Write 64 in words and partition it into tens and ones.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "How many tens and how many ones are in 90?",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Which is greater: 6 tens and 9 ones, or 7 tens and 2 ones? Explain.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Place value",
                statement: "Tens digit decides first comparison.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "64 in words: sixty-four.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Partition: 60 + 4.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "6 tens and 4 ones.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "90 = 9 tens and 0 ones.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "9 tens, 0 ones.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "6 tens and 9 ones = 69.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "7 tens and 2 ones = 72.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "72 > 69 because 7 tens beats 6 tens.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Explanation uses place value, not just the ones digits.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Clear conclusion: 72 is greater.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Sixty-four = 60 + 4; 9 tens 0 ones; 72 > 69 because 7 tens > 6 tens",
            commonErrors: [
              "Comparing only the ones digits (9 > 2 → wrong answer).",
            ],
          },
        },
      ],
    },
  ],
};
