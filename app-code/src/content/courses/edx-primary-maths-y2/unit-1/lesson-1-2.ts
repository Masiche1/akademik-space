import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "edpm2-u1-lesson-1-2",
  code: "1-2",
  title: "Addition within 100",
  goal: "I CAN add two-digit numbers, including crossing a ten, using partitioning and number bonds.",
  standards: ["Year 2 Addition and subtraction"],
  vocabulary: [
    { term: "Add", definition: "Combine amounts to find a total." },
    {
      term: "Partition",
      definition: "Split a number into tens and ones to add more easily.",
    },
    {
      term: "Crossing ten",
      definition:
        "When an addition goes past a multiple of ten, e.g. 28 + 5 crosses 30.",
    },
    {
      term: "Number bond",
      definition: "Pairs that add to a total, e.g. 7 + 3 = 10.",
    },
    { term: "Total", definition: "The whole amount after adding." },
  ],
  concepts: [
    {
      id: "edpm2-u1-addition",
      title: "Adding within 100",
      skill:
        "Add two-digit numbers using partitioning, including crossing a ten.",
      lesson: {
        sections: [
          {
            heading: "Adding tens and ones",
            body: "Split both numbers into tens and ones, add the tens, add the ones, then combine. 34 + 25 = (30 + 20) + (4 + 5) = 50 + 9 = 59. This works for any two-digit addition.",
          },
          {
            heading: "Crossing ten",
            body: "When the ones add past 10, you 'cross a ten'. 47 + 8: add the ones first — 7 + 8 = 15. That's 1 ten and 5 ones. So 47 + 8 = 40 + 15 = 55. Or use bonds: 47 + 3 = 50, then 50 + 5 = 55.",
          },
          {
            heading: "Using number bonds",
            body: "Number bonds to 10 make crossing ten quick. For 56 + 7: split 7 into 4 + 3. 56 + 4 = 60 (a bond to 60... actually 56 + 4 = 60). Then 60 + 3 = 63. Look for the bond that lands on the next ten.",
          },
        ],
        keyFormulas: [
          { name: "Partition add", statement: "(tens + tens) + (ones + ones)" },
          {
            name: "Crossing ten",
            statement: "Split the smaller number to land on the next ten first",
          },
        ],
        workedExample: {
          problem: "Work out 38 + 25.",
          solution:
            "38 = 30 + 8, 25 = 20 + 5. Tens: 30 + 20 = 50. Ones: 8 + 5 = 13. Total: 50 + 13 = 63.",
        },
      },
      questions: [
        {
          id: "edpm2-u1-add-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 23 + 14.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "37" },
              { id: "b", text: "47" },
              { id: "c", text: "57" },
              { id: "d", text: "33" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Partition add",
                statement: "20+10=30, 3+4=7, total 37.",
              },
            ],
            steps: [
              { reasoning: "23 + 14 = 30 + 7 = 37.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 37",
            commonErrors: [
              "Adding digits separately: 2+1=3, 3+4=7 → 37 is right, but check method.",
            ],
          },
        },
        {
          id: "edpm2-u1-add-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Work out 46 + 27.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 73, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Partition add",
                statement: "40+20=60, 6+7=13, total 73.",
              },
            ],
            steps: [
              { reasoning: "Tens: 40 + 20 = 60.", marks: 1, markCode: "M" },
              { reasoning: "Ones: 6 + 7 = 13.", marks: 1, markCode: "M" },
              { reasoning: "60 + 13 = 73.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "73",
            commonErrors: [
              "Writing 60 + 3 = 63 — forgetting the extra ten from ones.",
            ],
          },
        },
        {
          id: "edpm2-u1-add-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Work out 58 + 6 using a number bond to cross ten.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 64, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Crossing ten",
                statement: "58 + 2 = 60, 60 + 4 = 64.",
              },
            ],
            steps: [
              { reasoning: "Split 6 into 2 + 4.", marks: 1, markCode: "M" },
              { reasoning: "58 + 2 = 60.", marks: 1, markCode: "M" },
              { reasoning: "60 + 4 = 64.", marks: 1, markCode: "A" },
              { reasoning: "Answer: 64.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "64",
            commonErrors: ["Answering 514 — carrying the ten incorrectly."],
          },
        },
        {
          id: "edpm2-u1-add-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A school has 67 children in Year 2 and 28 children in Year 3.",
          parts: [
            {
              label: "a",
              prompt:
                "How many children are there in Years 2 and 3 altogether?",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "If 15 more children join Year 3, how many children are in Year 3 now?",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "How many children would be in Years 2 and 3 altogether after the 15 join?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Addition in context",
                statement: "Altogether = add; new total = old total + joiners.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "67 + 28: tens 60 + 20 = 80, ones 7 + 8 = 15.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "80 + 15 = 95.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: 95 children.",
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
                reasoning: "28 + 15 = 43.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Tens 20+10=30, ones 8+5=13, 30+13=43.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: 43 children.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "95 + 15 = 110.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Or 67 + 43 = 110.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: 110 children.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "95; 43; 110",
            commonErrors: [
              "Forgetting to add the 15 joiners to the total in part (c).",
            ],
          },
        },
      ],
    },
    {
      id: "edpm2-u1-add-more",
      title: "Adding across ten and near 100",
      skill: "Add numbers that cross ten boundaries and totals near 100.",
      lesson: {
        sections: [
          {
            heading: "Crossing ten both ways",
            body: "When both numbers have ones that add past 10, split the total: 76 + 19 = 76 + 20 − 1 = 96 − 1 = 95. Or partition: 70 + 10 = 80, 6 + 9 = 15, 80 + 15 = 95. Both methods work — choose the easier.",
          },
          {
            heading: "Adding near 100",
            body: "For numbers near 100, use the next hundred as a stepping stone: 98 + 7 = 100 + 5 = 105 (since 98 + 2 = 100, then +5). 97 + 8 = 100 + 5 = 105. This 'compensation' method is quick for totals just over 100.",
          },
          {
            heading: "Checking your answer",
            body: "Always check: does your answer make sense? 45 + 38 can't be less than 80 (both numbers are in the 40s and 30s). Estimate first — round each number to the nearest ten, add, then check your exact answer is close.",
          },
        ],
        keyFormulas: [
          { name: "Compensation", statement: "98 + 7 = 100 + 5 = 105" },
          {
            name: "Estimate",
            statement: "Round to nearest ten, add, check exact answer is near",
          },
        ],
        workedExample: {
          problem: "Work out 89 + 15.",
          solution:
            "89 + 11 = 100, then 100 + 4 = 104. Or partition: 80 + 10 = 90, 9 + 5 = 14, 90 + 14 = 104.",
        },
      },
      questions: [
        {
          id: "edpm2-u1-am-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 95 + 8.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "103" },
              { id: "b", text: "913" },
              { id: "c", text: "93" },
              { id: "d", text: "105" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Near 100",
                statement: "95 + 5 = 100, 100 + 3 = 103.",
              },
            ],
            steps: [
              { reasoning: "95 + 5 = 100, +3 = 103.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 103",
            commonErrors: ["Writing 913 — not crossing the hundred correctly."],
          },
        },
        {
          id: "edpm2-u1-am-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Work out 67 + 26.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 93, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Partition add",
                statement: "60+20=80, 7+6=13, total 93.",
              },
            ],
            steps: [
              { reasoning: "Tens: 60 + 20 = 80.", marks: 1, markCode: "M" },
              { reasoning: "Ones: 7 + 6 = 13.", marks: 1, markCode: "M" },
              { reasoning: "80 + 13 = 93.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "93",
            commonErrors: ["Writing 96 — adding ones only once."],
          },
        },
        {
          id: "edpm2-u1-am-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Work out 88 + 9 by first making 100.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 97, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Splitting to add",
                statement: "Split 9 into 2 + 7: 88 + 2 = 90, 90 + 7 = 97.",
              },
            ],
            steps: [
              {
                reasoning: "88 + 9: split 9 into 2 + 7.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "88 + 2 = 90, then 90 + 7 = 97.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 97.", marks: 1, markCode: "A" },
              {
                reasoning: "Check: 97 − 88 = 9. Correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "97",
            commonErrors: ["Answering 177 — not understanding place value."],
          },
        },
        {
          id: "edpm2-u1-am-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "There are 89 marbles in a jar. Tom adds 17 more.",
          parts: [
            { label: "a", prompt: "How many marbles are there now?", marks: 3 },
            {
              label: "b",
              prompt:
                "Estimate the answer by rounding 89 and 17 to the nearest ten first.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Is your exact answer close to your estimate? Explain.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Estimating",
                statement: "Round to nearest ten for a quick check.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "89 + 17 = 106.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "80 + 10 = 90, 9 + 7 = 16, 90 + 16 = 106.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: 106 marbles.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "89 ≈ 90, 17 ≈ 20.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "90 + 20 = 110.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Estimate: about 110.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "106 is close to 110 (difference of 4).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Exact answer within a reasonable range of estimate.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Explains the comparison.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Conclusion clear.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "106; estimate 110; yes, close (within 4)",
            commonErrors: ["Estimate far off — rounding incorrectly."],
          },
        },
      ],
    },
  ],
};
