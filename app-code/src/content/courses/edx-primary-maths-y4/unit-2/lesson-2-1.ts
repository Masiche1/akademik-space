import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "edpm4-u2-lesson-2-1",
  code: "2-1",
  title: "Multiplication and Division Methods",
  goal: "I CAN multiply and divide using efficient methods including formal written multiplication.",
  standards: ["Year 4 Multiplication and division"],
  vocabulary: [
    {
      term: "Formal multiplication",
      definition: "Written column method for multiplying larger numbers.",
    },
    {
      term: "Partitioning",
      definition: "Breaking numbers into place value parts to multiply.",
    },
    {
      term: "Short division",
      definition: "Written method dividing by a single digit.",
    },
    {
      term: "Inverse",
      definition: "Division checks multiplication and vice versa.",
    },
  ],
  concepts: [
    {
      id: "edpm4-u2-mult-methods",
      title: "Multiplication methods",
      skill:
        "Multiply 2-digit by 1-digit and larger numbers using partitioning and column methods.",
      lesson: {
        sections: [
          {
            heading: "Partitioning",
            body: "Break the number: 34 × 6 = (30 × 6) + (4 × 6) = 180 + 24 = 204. Or 56 × 4 = (50 × 4) + (6 × 4) = 200 + 24 = 224. Useful for mental maths and checking.",
          },
          {
            heading: "Formal column multiplication",
            body: "Multiply ones first, then tens, then add. 23 × 4: 3×4=12 write 2 carry 1; 2×4+1=9 → 92. For 2-digit × 2-digit: 34 × 25 = 34×20 + 34×5 = 680 + 170 = 850. Or full grid method.",
          },
        ],
        keyFormulas: [
          { name: "Partitioning", statement: "a×b = (tens×b) + (ones×b)" },
          {
            name: "Column method",
            statement: "Multiply digit by digit, carry, then add rows",
          },
        ],
        workedExample: {
          problem: "Calculate 45 × 6.",
          solution:
            "Partition: 40 × 6 = 240; 5 × 6 = 30; total 270. Check: 45 × 6 = 270.",
        },
      },
      questions: [
        {
          id: "edpm4-u2-mm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 34 × 6?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "184" },
              { id: "b", text: "204" },
              { id: "c", text: "214" },
              { id: "d", text: "24" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Partitioning",
                statement: "30×6=180 + 4×6=24 = 204.",
              },
            ],
            steps: [{ reasoning: "180 + 24 = 204.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 204",
            commonErrors: [
              "Multiplying digits separately without place value.",
            ],
          },
        },
        {
          id: "edpm4-u2-mm-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate 56 × 4.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 224, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Partitioning",
                statement: "50×4=200 + 6×4=24 = 224.",
              },
            ],
            steps: [
              { reasoning: "50 × 4 = 200.", marks: 1, markCode: "M" },
              { reasoning: "6 × 4 = 24; total 224.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 224.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "224",
            commonErrors: ["Answering 2240 — place value error."],
          },
        },
        {
          id: "edpm4-u2-mm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate 34 × 25 using partitioning.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 850, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Partitioning",
                statement: "34×20=680 + 34×5=170 = 850.",
              },
            ],
            steps: [
              { reasoning: "34 × 20 = 680.", marks: 1, markCode: "M" },
              { reasoning: "34 × 5 = 170.", marks: 1, markCode: "M" },
              { reasoning: "680 + 170 = 850.", marks: 1, markCode: "A" },
              { reasoning: "Method shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "850",
            commonErrors: ["Adding instead of multiplying partial products."],
          },
        },
        {
          id: "edpm4-u2-mm-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A school orders 24 packs of pencils. Each pack has 35 pencils.",
          parts: [
            { label: "a", prompt: "How many pencils are ordered?", marks: 4 },
            {
              label: "b",
              prompt: "If each pack costs £3, what is the total cost?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "If 250 pencils are used, how many remain?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multiplication problems",
                statement:
                  "packs × per pack; cost = packs × price; subtract used.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "24 × 35 = 24×30 + 24×5 = 720 + 120 = 840.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: 840 pencils.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Method shown.",
                marks: 1,
                markCode: "A",
              },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "24 × £3 = £72.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Answer: £72.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Unit included.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "840 − 250 = 590.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: 590 pencils.",
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
            finalAnswer: "840; £72; 590",
            commonErrors: ["Multiplying 24 × 350 instead of 35."],
          },
        },
      ],
    },
    {
      id: "edpm4-u2-div-methods",
      title: "Division methods and remainders",
      skill: "Divide using short division and solve problems with remainders.",
      lesson: {
        sections: [
          {
            heading: "Short division",
            body: "Divide digit by digit from left. 96 ÷ 4: 9÷4=2 r1; bring down 6 → 16÷4=4. Answer 24. With remainder: 97 ÷ 4 = 24 r1 (4×24=96, remainder 1). Check: quotient × divisor + remainder = dividend.",
          },
          {
            heading: "Remainders in context",
            body: "Decide if remainder rounds up or down. '45 children in vans of 8' → 45÷8=5 r5, need **6 vans** (round up — every child needs a seat). '45 sweets shared between 8 children' → 5 each with 5 left over.",
          },
        ],
        keyFormulas: [
          {
            name: "Short division",
            statement: "Divide left to right, bring down digits",
          },
          {
            name: "Check",
            statement: "quotient × divisor + remainder = dividend",
          },
        ],
        workedExample: {
          problem: "Calculate 86 ÷ 5.",
          solution: "8÷5=1 r3; 36÷5=7 r1. Answer: 17 r1. Check: 17×5+1 = 86.",
        },
      },
      questions: [
        {
          id: "edpm4-u2-dm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 96 ÷ 4?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "22" },
              { id: "b", text: "24" },
              { id: "c", text: "26" },
              { id: "d", text: "18" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Short division",
                statement: "96 ÷ 4 = 24.",
              },
            ],
            steps: [{ reasoning: "4 × 24 = 96.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 24",
            commonErrors: ["Dividing digits separately: 9÷4 and 6÷4."],
          },
        },
        {
          id: "edpm4-u2-dm-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate 86 ÷ 5.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Division with remainder",
                statement: "86 ÷ 5 = 17 r1.",
              },
            ],
            steps: [
              {
                reasoning: "5 × 17 = 85, remainder 1.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 17 remainder 1.", marks: 1, markCode: "A" },
              { reasoning: "Check: 17 × 5 + 1 = 86.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "17 r1",
            commonErrors: ["Answering 18 — rounding up incorrectly."],
          },
        },
        {
          id: "edpm4-u2-dm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate 97 ÷ 4.",
          response: {
            type: "numeric",
            parts: [
              { label: "Quotient", answer: 24, tolerance: 0 },
              { label: "Remainder", answer: 1, tolerance: 0 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Division with remainder",
                statement: "4 × 24 = 96, remainder 1.",
              },
            ],
            steps: [
              { reasoning: "97 ÷ 4: 4 × 24 = 96.", marks: 1, markCode: "M" },
              {
                reasoning: "Quotient 24, remainder 97 − 96 = 1.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answers: 24 r1.", marks: 1, markCode: "A" },
              { reasoning: "Check: 24 × 4 + 1 = 97.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "24 r1",
            commonErrors: [
              "Saying remainder is 4 — remainder must be less than divisor.",
            ],
          },
        },
        {
          id: "edpm4-u2-dm-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "45 children need to travel in minibuses. Each minibus holds 8 children.",
          parts: [
            {
              label: "a",
              prompt: "How many full minibuses are needed?",
              marks: 3,
            },
            {
              label: "b",
              prompt: "How many children are in the last minibus?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "How many minibuses must be booked? Explain.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Division in context",
                statement: "45 ÷ 8 = 5 r5; must round up for transport.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "45 ÷ 8 = 5 remainder 5.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "5 full minibuses.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Answer clear.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Last minibus has 5 children.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Or 45 − 40 = 5.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Answer: 5.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Need 6 minibuses — all children must travel.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Remainder means extra minibus required.",
                marks: 1,
                markCode: "R",
              },
              { part: "c", reasoning: "Answer: 6.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Justification given.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "5 full + 5 spare; 5 in last; 6 minibuses booked",
            commonErrors: ["Booking only 5 — leaving 5 children behind."],
          },
        },
      ],
    },
  ],
};
