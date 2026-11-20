import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "edpm5-u1-lesson-1-2",
  code: "1-2",
  title: "Multiplication and Division of Larger Numbers",
  goal: "I CAN multiply 4-digit by 1-digit numbers and divide with remainders using efficient methods.",
  standards: ["Year 5 Multiplication and division"],
  vocabulary: [
    {
      term: "Expanded multiplication",
      definition: "Multiplying each place value part then adding.",
    },
    {
      term: "Formal multiplication",
      definition: "Written column method for large numbers.",
    },
    {
      term: "Long division",
      definition: "Written method dividing by larger numbers.",
    },
    {
      term: "Remainder",
      definition: "What's left after division — must be less than the divisor.",
    },
  ],
  concepts: [
    {
      id: "edpm5-u1-mult",
      title: "Multiplying larger numbers",
      skill: "Multiply 4-digit by 1-digit and multi-digit numbers efficiently.",
      lesson: {
        sections: [
          {
            heading: "4-digit × 1-digit",
            body: "Use column multiplication with carrying. 3 456 × 4: ones 6×4=24 write 4 carry 2; tens 5×4+2=22 write 2 carry 2; hundreds 4×4+2=18 write 8 carry 1; thousands 3×4+1=13 → 13 824. Or partition: 3 000×4 + 400×4 + 50×4 + 6×4.",
          },
          {
            heading: "Multi-digit × multi-digit",
            body: "For 3-digit × 2-digit, use partitioning: 234 × 26 = 234×20 + 234×6 = 4 680 + 1 404 = 6 084. Or formal grid method. Always estimate first to check.",
          },
        ],
        keyFormulas: [
          {
            name: "Column method",
            statement: "Multiply digit by digit, carry, add",
          },
          { name: "Partitioning", statement: "a × (b+c) = a×b + a×c" },
        ],
        workedExample: {
          problem: "Calculate 3 456 × 4.",
          solution:
            "Ones 24→4 c2; tens 22→2 c2; hundreds 18→8 c1; thousands 13. Answer: 13 824.",
        },
      },
      questions: [
        {
          id: "edpm5-u1-mu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 2 345 × 3?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6 035" },
              { id: "b", text: "7 035" },
              { id: "c", text: "6 925" },
              { id: "d", text: "9 235" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Column multiplication",
                statement: "2 345 × 3 = 7 035.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Partition: 2 000×3 + 300×3 + 40×3 + 5×3 = 6 000+900+120+15 = 7 035.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 7 035",
            commonErrors: ["Forgetting to multiply each place correctly."],
          },
        },
        {
          id: "edpm5-u1-mu-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate 1 234 × 5.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 6170, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Column multiplication",
                statement: "1 234 × 5 = 6 170.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ones 4×5=20→0 c2; tens 3×5+2=17→7 c1; hundreds 2×5+1=11→1 c1; thousands 1×5+1=6.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 6170.", marks: 1, markCode: "A" },
              { reasoning: "Method shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6170",
            commonErrors: ["Answering 617 — dropping a digit."],
          },
        },
        {
          id: "edpm5-u1-mu-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate 234 × 26 using partitioning.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 6084, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Partitioning",
                statement: "234×20=4 680; 234×6=1 404; total 6 084.",
              },
            ],
            steps: [
              { reasoning: "234 × 20 = 4 680.", marks: 1, markCode: "M" },
              { reasoning: "234 × 6 = 1 404.", marks: 1, markCode: "M" },
              { reasoning: "4 680 + 1 404 = 6 084.", marks: 1, markCode: "A" },
              { reasoning: "Method shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6084",
            commonErrors: ["Multiplying 234×2 then ×6 without place value."],
          },
        },
        {
          id: "edpm5-u1-mu-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A school has 48 classes. Each class has 32 pupils.",
          parts: [
            { label: "a", prompt: "How many pupils are there?", marks: 3 },
            {
              label: "b",
              prompt:
                "If each pupil needs 2 exercise books at £1.25 each, what is the total cost?",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Estimate the total cost first — is your answer sensible?",
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
                  "48×32=1 536; books=1 536×2=3 072; cost=3 072×£1.25=£3 840.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "48 × 32 = 48×30 + 48×2 = 1 440 + 96 = 1 536.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: 1 536 pupils.",
                marks: 1,
                markCode: "A",
              },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Books needed = 1 536 × 2 = 3 072.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "3 072 × £1.25 = £3 840.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: £3 840.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Unit included.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Estimate: ~1 500 pupils × 2 = 3 000 books × ~£1 = ~£3 000+.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "£3 840 is close to estimate — sensible.",
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
            finalAnswer: "1 536; £3 840; estimate ~£3 000+ — sensible",
            commonErrors: ["Forgetting to double for 2 books per pupil."],
          },
        },
      ],
    },
    {
      id: "edpm5-u1-div",
      title: "Division with larger numbers",
      skill: "Divide using long division and solve problems with remainders.",
      lesson: {
        sections: [
          {
            heading: "Long division",
            body: "Divide left to right, one digit at a time. 96 ÷ 4 = 24; 456 ÷ 6: 4<6 so 45÷6=7 r3, bring down 6 → 36÷6=6 → 76. With remainder: 457 ÷ 6 = 76 r1. Always check: quotient × divisor + remainder = dividend.",
          },
          {
            heading: "Division problems",
            body: "Remainders in context need interpretation: '452 children in coaches of 40' → 11 r12 → need 12 coaches (round up). '452 sweets shared between 40 children' → 11 each with 12 left. Decide based on the question.",
          },
        ],
        keyFormulas: [
          {
            name: "Long division",
            statement: "Divide digit by digit, bring down remainders",
          },
          {
            name: "Check",
            statement: "quotient × divisor + remainder = dividend",
          },
        ],
        workedExample: {
          problem: "Calculate 456 ÷ 6.",
          solution: "45÷6=7 r3; 36÷6=6. Answer: 76. Check: 76×6=456.",
        },
      },
      questions: [
        {
          id: "edpm5-u1-dv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 456 ÷ 6?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "66" },
              { id: "b", text: "76" },
              { id: "c", text: "86" },
              { id: "d", text: "70" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Long division",
                statement: "456 ÷ 6 = 76.",
              },
            ],
            steps: [{ reasoning: "6 × 76 = 456.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 76",
            commonErrors: ["Dividing digits separately."],
          },
        },
        {
          id: "edpm5-u1-dv-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate 457 ÷ 6.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Division with remainder",
                statement: "457 ÷ 6 = 76 r1.",
              },
            ],
            steps: [
              {
                reasoning: "6 × 76 = 456, remainder 1.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 76 r1.", marks: 1, markCode: "A" },
              {
                reasoning: "Check: 76 × 6 + 1 = 457.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "76 r1",
            commonErrors: ["Answering 77 — rounding up."],
          },
        },
        {
          id: "edpm5-u1-dv-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate 1 000 ÷ 8.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 125, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Long division",
                statement: "1 000 ÷ 8 = 125.",
              },
            ],
            steps: [
              {
                reasoning: "8 × 100 = 800; 200 left.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "8 × 25 = 200; total 125.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 125.", marks: 1, markCode: "A" },
              { reasoning: "Check: 125 × 8 = 1 000.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "125",
            commonErrors: ["Answering 12.5 — confusing with decimal."],
          },
        },
        {
          id: "edpm5-u1-dv-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "452 children are going on a trip. Each coach holds 40 children.",
          parts: [
            {
              label: "a",
              prompt: "How many full coaches are needed?",
              marks: 3,
            },
            {
              label: "b",
              prompt: "How many children are in the last coach?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "How many coaches must be booked?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Division in context",
                statement: "452 ÷ 40 = 11 r12; round up for transport.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "452 ÷ 40 = 11 remainder 12.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "11 full coaches.",
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
                reasoning: "Last coach: 12 children.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Or 452 − 440 = 12.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Answer: 12.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Need 12 coaches — all children must travel.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Remainder requires extra coach.",
                marks: 1,
                markCode: "R",
              },
              { part: "c", reasoning: "Answer: 12.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Justification given.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "11 full + 12 spare; 12 in last; 12 coaches booked",
            commonErrors: ["Booking 11 — leaving 12 children behind."],
          },
        },
      ],
    },
  ],
};
