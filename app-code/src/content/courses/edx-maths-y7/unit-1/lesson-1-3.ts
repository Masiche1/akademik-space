import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "edm7-u1-lesson-1-3",
  code: "1-3",
  title: "Number Problems and Contexts",
  goal: "I CAN solve multi-step number problems involving integers, factors and operations in real contexts.",
  standards: ["Edexcel KS3 Maths — Number"],
  vocabulary: [
    {
      term: "Index notation",
      definition:
        "Writing repeated multiplication as a power — e.g. $3^4 = 3 \\times 3 \\times 3 \\times 3 = 81$.",
    },
    {
      term: "Square number",
      definition: "A number multiplied by itself — e.g. $7^2 = 49$.",
    },
    {
      term: "Cube number",
      definition:
        "A number multiplied by itself three times — e.g. $4^3 = 64$.",
    },
    {
      term: "Order of magnitude",
      definition: "Rough size of a number — powers of 10 used for estimation.",
    },
  ],
  concepts: [
    {
      id: "edm7-u1-indices",
      title: "Indices and Powers",
      skill: "Calculate with indices, square numbers and cube numbers.",
      lesson: {
        sections: [
          {
            heading: "Indices",
            body: "An **index** (power/superscript) shows repeated multiplication: $3^4 = 3 \\times 3 \\times 3 \\times 3$. The base is the number being multiplied; the index counts how many times. $5^3 = 125$.\n\n**Square numbers**: $n^2 = n \\times n$ — $1, 4, 9, 16, 25, 36, 49, 64, 81, 100, \\ldots$ **Cube numbers**: $n^3$ — $1, 8, 27, 64, 125, \\ldots$ Knowing these helps factorising and estimation. $2^{10} = 1024$ — powers grow fast.",
          },
          {
            heading: "Using powers",
            body: "Indices combine with operations via BIDMAS — indices before ×/÷. $2^3 + 4 = 8 + 4 = 12$. $(2 + 3)^2 = 25$ — brackets change everything.\n\n**Squares and cubes of negatives**: $(-3)^2 = 9$ (positive — two negatives multiply), $(-3)^3 = -27$ (negative — three negatives). Square roots reverse squares: $\\sqrt{49} = 7$ (principal root).",
          },
        ],
        keyFormulas: [
          {
            name: "Index",
            statement: "$a^n$ = $a$ multiplied by itself $n$ times.",
          },
          {
            name: "Sign of powers",
            statement:
              "Even power of negative = positive; odd power = negative.",
          },
        ],
        workedExample: {
          problem: "Evaluate $(-2)^4$ and $(-2)^3$.",
          solution:
            "$(-2)^4 = 16$ (even → positive), $(-2)^3 = -8$ (odd → negative).",
        },
      },
      questions: [
        {
          id: "edm7-u1-indices-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is $4^3$?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 64 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Index",
                statement: "$4^3 = 4 \\times 4 \\times 4$.",
              },
            ],
            steps: [
              {
                reasoning: "$4 \\times 4 \\times 4 = 64$.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "$64$",
            commonErrors: ["Answering 12 — adding instead of multiplying."],
          },
        },
        {
          id: "edm7-u1-indices-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which of these is a square number: 18, 25, 30, 42?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "18" },
              { id: "b", text: "30" },
              { id: "c", text: "42" },
              { id: "d", text: "25" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Square number",
                statement: "$n^2 = n \\times n$ — 25 = $5^2$.",
              },
            ],
            steps: [
              {
                reasoning: "$5 \\times 5 = 25$ — only 25 is a perfect square.",
                marks: 3,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** 25",
            commonErrors: ["Choosing 18 — even isn't square."],
          },
        },
        {
          id: "edm7-u1-indices-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate $(-3)^2$ and $(-3)^3$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sign of powers",
                statement: "Even index → positive; odd index → negative.",
              },
            ],
            steps: [
              {
                reasoning: "$(-3)^2 = (-3) \\times (-3) = 9$.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "$(-3)^3 = (-3) \\times (-3) \\times (-3) = -27$.",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "$9$ and $-27$",
            commonErrors: [
              "Both negative — forgetting even power is positive.",
            ],
          },
        },
        {
          id: "edm7-u1-indices-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A computer virus doubles the number of infected files every hour. Starting from 1 file:",
          parts: [
            {
              label: "a",
              prompt: "How many files are infected after 4 hours?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Express this using index notation.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "After how many hours will there be 64 infected files?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exponential growth",
                statement:
                  "Doubling = powers of 2: $2^n$ files after $n$ hours.",
              },
            ],
            steps: [
              {
                reasoning: "$2^4 = 16$ files.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$2^4$ or $2^n$ notation.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Index explained as hours.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "$2^6 = 64$ → 6 hours.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Recognises powers of 2.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Correct answer 6 hours.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "(a) 16 (b) $2^4$ (c) 6 hours",
            commonErrors: ["Linear thinking (4→8 files).", "Wrong power."],
          },
        },
      ],
    },
    {
      id: "edm7-u1-problems",
      title: "Multi-Step Number Problems",
      skill:
        "Solve problems combining integers, factors, indices and BIDMAS in contexts.",
      lesson: {
        sections: [
          {
            heading: "Reading problems",
            body: "KS3 problems combine several skills: identify what's being asked, list given values, choose operations, check units. Key phrases: 'how much more' → subtraction, 'shared equally' → division, 'product of' → multiplication, 'sum of' → addition.\n\n**Negative contexts**: temperature changes, bank balances, elevation below sea level, golf scores. **Factor contexts**: tiling, grouping, packaging — HCF finds equal groups, LCM finds when events coincide.",
          },
          {
            heading: "Structured problem solving",
            body: "Break problems into steps: 1) Understand — what's given/asked? 2) Plan — which operations/order? 3) Solve — show working. 4) Check — does the answer make sense? Units? Reasonable size?\n\n**Estimation first**: approximate the answer mentally — if exact answer is wildly different, recheck. This catches most errors.",
          },
        ],
        keyFormulas: [
          {
            name: "Problem keywords",
            statement: "Sum=+, difference=−, product=×, quotient=÷.",
          },
          {
            name: "Check step",
            statement: "Does the answer make sense? Units? Reasonable size?",
          },
        ],
        workedExample: {
          problem:
            "A diver is at $-12$ m. She ascends 7 m, descends 15 m, then ascends 4 m. Final depth?",
          solution: "$-12 + 7 - 15 + 4 = -16$ m — 16 m below surface.",
        },
      },
      questions: [
        {
          id: "edm7-u1-problems-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the product of $-4$ and $9$?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: -36 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Product",
                statement: "Product = result of multiplication.",
              },
            ],
            steps: [
              {
                reasoning: "$-4 \\times 9 = -36$ (different signs → negative).",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "$-36$",
            commonErrors: ["Answering 36 — forgetting sign."],
          },
        },
        {
          id: "edm7-u1-problems-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A shop has a promotion: buy 3 get 1 free. How many items must you buy to get 16 free?",
          response: {
            type: "numeric",
            parts: [{ label: "Items to buy", answer: 48 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Ratio reasoning",
                statement:
                  "3 paid → 1 free; 16 free needs $16 \\times 3$ paid items.",
              },
            ],
            steps: [
              {
                reasoning: "Each group of 4 gives 1 free.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "16 free groups need 16 sets of 3 paid.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$16 \\times 3 = 48$ items.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$48$ items",
            commonErrors: ["Answering 64 — confusing paid/free counts."],
          },
        },
        {
          id: "edm7-u1-problems-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate $-5 \\times 4 + 3 \\times -2$.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: -26 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "BIDMAS with negatives",
                statement: "Multiplications first, then add.",
              },
            ],
            steps: [
              {
                reasoning: "$-5 \\times 4 = -20$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$3 \\times -2 = -6$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$-20 + (-6) = -26$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Final answer $-26$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-26$",
            commonErrors: [
              "Wrong sign somewhere.",
              "Adding before multiplying.",
            ],
          },
        },
        {
          id: "edm7-u1-problems-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Three friends share £90 in the ratio 2 : 3 : 4.",
          parts: [
            {
              label: "a",
              prompt: "Find the total number of shares.",
              marks: 2,
            },
            { label: "b", prompt: "Calculate each person's share.", marks: 4 },
            { label: "c", prompt: "Check your answer.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Sharing in ratio",
                statement:
                  "Total parts = sum of ratio; each share = total ÷ parts × ratio term.",
              },
            ],
            steps: [
              {
                reasoning: "$2 + 3 + 4 = 9$ shares.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$90 \\div 9 = £10$ per share.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning:
                  "Shares: $2 \\times 10 = £20$, $3 \\times 10 = £30$, $4 \\times 10 = £40$.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "All three shares calculated.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Correct values.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "$20 + 30 + 40 = £90$ — sums correctly.",
                marks: 2,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "(a) 9 shares (b) £20, £30, £40 (c) sums to £90",
            commonErrors: [
              "Not dividing by total parts.",
              "Multiplying wrong ratio terms.",
            ],
          },
        },
      ],
    },
  ],
};
