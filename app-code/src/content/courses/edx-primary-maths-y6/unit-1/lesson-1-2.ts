import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "edpm6-u1-lesson-1-2",
  code: "1-2",
  title: "Formal Multiplication and Division",
  goal: "I CAN multiply 4-digit by 2-digit numbers and divide using short and long division.",
  standards: ["Year 6 Multiplication and division"],
  vocabulary: [
    {
      term: "Formal multiplication",
      definition: "Written column method for multi-digit numbers.",
    },
    {
      term: "Grid method",
      definition: "Multiplying by splitting numbers into tens and ones.",
    },
    {
      term: "Short division",
      definition: "Dividing by a single digit efficiently.",
    },
    {
      term: "Long division",
      definition: "Dividing by larger numbers using a formal written method.",
    },
  ],
  concepts: [
    {
      id: "edpm6-u1-multiplication",
      title: "Multiplication methods",
      skill: "Multiply larger numbers using formal and grid methods.",
      lesson: {
        sections: [
          {
            heading: "Grid method",
            body: "Split both numbers: 34 × 26 = (30 + 4) × (20 + 6). Multiply each part: 30×20=600, 30×6=180, 4×20=80, 4×6=24. Add all: 600+180+80+24 = 884.",
          },
          {
            heading: "Formal column method",
            body: "Multiply the bottom number by each digit of the top, line up by place value, then add. 123 × 45: 123×5=615; 123×40=4 920; total 5 535. Always estimate first.",
          },
        ],
        keyFormulas: [
          {
            name: "Grid method",
            statement: "Split into tens/ones, multiply parts, add",
          },
          {
            name: "Column method",
            statement: "Multiply by each digit, add results",
          },
        ],
        workedExample: {
          problem: "Calculate 56 × 34 using the grid method.",
          solution:
            "(50+6)×(30+4): 50×30=1500, 50×4=200, 6×30=180, 6×4=24. Total 1904.",
        },
      },
      questions: [
        {
          id: "edpm6-u1-mu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 45 × 23?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1035" },
              { id: "b", text: "915" },
              { id: "c", text: "1 035" },
              { id: "d", text: "935" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Grid method",
                statement: "45×23 = 45×20 + 45×3 = 900 + 135 = 1035.",
              },
            ],
            steps: [
              { reasoning: "900 + 135 = 1035.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 1 035",
            commonErrors: ["Missing the zero when multiplying by 20."],
          },
        },
        {
          id: "edpm6-u1-mu-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate 67 × 42.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 2814, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Grid/column method",
                statement: "67×40=2680; 67×2=134; total 2814.",
              },
            ],
            steps: [
              { reasoning: "67 × 40 = 2 680.", marks: 1, markCode: "M" },
              {
                reasoning: "67 × 2 = 134; 2 680 + 134 = 2 814.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 2814.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2814",
            commonErrors: ["Adding 2680 + 134 incorrectly."],
          },
        },
        {
          id: "edpm6-u1-mu-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate 123 × 45 using the grid method.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 5535, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Grid method",
                statement: "123×40=4920; 123×5=615; total 5535.",
              },
            ],
            steps: [
              { reasoning: "Split: 123 × (40 + 5).", marks: 1, markCode: "M" },
              {
                reasoning: "123 × 40 = 4 920; 123 × 5 = 615.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "4 920 + 615 = 5 535.", marks: 1, markCode: "A" },
              { reasoning: "Method shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5535",
            commonErrors: ["Multiplying 123 × 45 as 123 × 4 × 5 — wrong."],
          },
        },
        {
          id: "edpm6-u1-mu-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A stadium has 78 rows with 56 seats in each row.",
          parts: [
            { label: "a", prompt: "How many seats are there?", marks: 3 },
            {
              label: "b",
              prompt: "If each ticket costs £24, what is the maximum revenue?",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Estimate the number of seats first — is your answer sensible?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multiplication problems",
                statement: "78×56=4368 seats; revenue 4368×24=£104 832.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "78 × 56 = 78×50 + 78×6 = 3 900 + 468 = 4 368.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: 4 368 seats.",
                marks: 1,
                markCode: "A",
              },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning:
                  "4 368 × 24 = 4 368×20 + 4 368×4 = 87 360 + 17 472 = 104 832.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: £104 832.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Unit included.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning:
                  "Estimate: ~80×50 = ~4 000 seats; ~4 000×~25 = ~£100 000.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "£104 832 is close — sensible.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Reasoning shown.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4 368; £104 832; estimate ~£100k — sensible",
            commonErrors: ["Multiplying 78 × 560 instead of 56."],
          },
        },
      ],
    },
    {
      id: "edpm6-u1-division",
      title: "Division methods",
      skill: "Divide using short and long division with remainders.",
      lesson: {
        sections: [
          {
            heading: "Short division",
            body: "Divide digit by digit, carrying remainders: 96 ÷ 4 = 24; 789 ÷ 3: 7÷3=2 r1, 18÷3=6, 9÷3=3 → 263. For larger divisors use long division or chunking.",
          },
          {
            heading: "Long division",
            body: "Divide, multiply, subtract, bring down — repeat. 1 472 ÷ 16: 14÷16=0, 147÷16=9 r3, 32÷16=2, 0 → 92. Check: 92×16=1 472. With remainders: 1 475÷16=92 r3.",
          },
        ],
        keyFormulas: [
          {
            name: "Short division",
            statement: "Divide each digit, bring down remainder",
          },
          {
            name: "Long division",
            statement: "Divide-multiply-subtract-bring down",
          },
        ],
        workedExample: {
          problem: "Calculate 1 472 ÷ 16.",
          solution: "147÷16=9 r3; 32÷16=2; 0÷16=0 → 92.",
        },
      },
      questions: [
        {
          id: "edpm6-u1-dv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 789 ÷ 3?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "263" },
              { id: "b", text: "273" },
              { id: "c", text: "233" },
              { id: "d", text: "253" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Short division",
                statement: "789 ÷ 3 = 263.",
              },
            ],
            steps: [
              {
                reasoning: "7÷3=2 r1; 18÷3=6; 9÷3=3 → 263.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** 263",
            commonErrors: ["Dividing digits separately."],
          },
        },
        {
          id: "edpm6-u1-dv-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate 1 472 ÷ 16.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 92, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Long division",
                statement: "1 472 ÷ 16 = 92.",
              },
            ],
            steps: [
              {
                reasoning: "147 ÷ 16 = 9 r3; bring down 2 → 32.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "32 ÷ 16 = 2; bring down 0 → 0.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 92. Check: 92×16=1472.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "92",
            commonErrors: [
              "Stopping division too early — must bring down all digits.",
            ],
          },
        },
        {
          id: "edpm6-u1-dv-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate 2 015 ÷ 31.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Long division",
                statement: "2 015 ÷ 31 = 65 exactly? 31×65=2015. ✓",
              },
            ],
            steps: [
              { reasoning: "Estimate: 2000÷30 ≈ 66.", marks: 1, markCode: "M" },
              { reasoning: "31 × 65 = 2 015.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: 65 exactly (no remainder).",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Check: 65 × 31 = 2 015. ✓",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "65",
            commonErrors: ["Leaving a remainder — 31 × 65 divides exactly."],
          },
        },
        {
          id: "edpm6-u1-dv-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A charity wants to share £2 016 equally between 24 schools.",
          parts: [
            { label: "a", prompt: "How much does each school get?", marks: 3 },
            {
              label: "b",
              prompt:
                "If one school is removed, how much does each remaining school get?",
              marks: 4,
            },
            {
              label: "c",
              prompt: "Explain why the amount per school increases.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Division problems",
                statement:
                  "2016÷24=84; 2016÷23=87 r15 → ~87.74 each or 87 r15.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "2 016 ÷ 24 = 84.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: £84 each.",
                marks: 1,
                markCode: "A",
              },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "2 016 ÷ 23 = 87 remainder 15 (23×87=2001).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Each gets £87 with £15 left over, OR £87.65 each if split exactly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Answer: ~£87.65 (or £87 r15).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Remainder recognised.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Same total shared among fewer schools → larger share each.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Inverse relationship explained.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Clear explanation.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "£84; ~£87.65 (87 r15); fewer schools → bigger share",
            commonErrors: [
              "For part (b): 2016÷23 is not exact — must handle remainder.",
            ],
          },
        },
      ],
    },
  ],
};
