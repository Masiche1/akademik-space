import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "edm7-u2-lesson-2-3",
  code: "2-3",
  title: "Percentages",
  goal: "I CAN convert between fractions, decimals and percentages, and calculate percentages of amounts.",
  standards: ["Edexcel KS3 Maths — Percentages"],
  vocabulary: [
    {
      term: "Percentage",
      definition: "A fraction out of 100 — $50\\% = \\frac{50}{100} = 0.5$.",
    },
    {
      term: "Percentage of",
      definition: "Finding a part of a quantity — $20\\%$ of $80 = 16$.",
    },
    {
      term: "Percentage change",
      definition: "The increase or decrease as a percentage of the original.",
    },
    {
      term: "Multiplier",
      definition:
        "The decimal you multiply by for percentage change — e.g. $1.2$ for $+20\\%$.",
    },
  ],
  concepts: [
    {
      id: "edm7-u2-percent-convert",
      title: "Converting Percentages",
      skill: "Convert fluently between fractions, decimals and percentages.",
      lesson: {
        sections: [
          {
            heading: "The conversion triangle",
            body: "Percentages, decimals and fractions are the same value in different forms. **Fraction → percentage**: convert to decimal (divide), multiply by 100. $\\frac{3}{4} = 0.75 = 75\\%$. **Percentage → fraction**: divide by 100, simplify. $60\\% = \\frac{60}{100} = \\frac{3}{5}$.\n\n**Key equivalents to memorise**: $\\frac{1}{2} = 50\\%$, $\\frac{1}{4} = 25\\%$, $\\frac{3}{4} = 75\\%$, $\\frac{1}{5} = 20\\%$, $\\frac{1}{10} = 10\\%$, $\\frac{1}{8} = 12.5\\%$. These appear constantly.",
          },
          {
            heading: "Percentage increase and decrease",
            body: "**Percentage change** = change ÷ original × 100. A price rises £40 → £50: change £10, $\\frac{10}{40} = 25\\%$ increase.\n\n**Multipliers** shortcut: $+25\\%$ → multiply by $1.25$; $-20\\%$ → multiply by $0.8$. £50 × 1.25 = £62.50. Watch direction — always divide by ORIGINAL amount for the percentage.",
          },
        ],
        keyFormulas: [
          {
            name: "Conversion",
            statement:
              "Fraction → decimal (÷) → percentage (×100); reverse for % → fraction.",
          },
          {
            name: "Percentage change",
            statement:
              "$\\frac{\\text{change}}{\\text{original}} \\times 100\\%$.",
          },
        ],
        workedExample: {
          problem:
            "Convert $\\frac{5}{8}$ to a percentage and find $15\\%$ of 200.",
          solution:
            "$\\frac{5}{8} = 0.625 = 62.5\\%$. $15\\%$ of 200 $= 0.15 \\times 200 = 30$.",
        },
      },
      questions: [
        {
          id: "edm7-u2-percent-convert-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write $\\frac{3}{5}$ as a percentage.",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage", answer: 60 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Fraction → percentage",
                statement: "Divide then × 100: $3 \\div 5 = 0.6 = 60\\%$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{3}{5} = 0.6 = 60\\%$.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "$60\\%$",
            commonErrors: ["Answering 35 — adding instead of converting."],
          },
        },
        {
          id: "edm7-u2-percent-convert-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write $45\\%$ as a fraction in its simplest form.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Percentage → fraction",
                statement: "$45\\% = \\frac{45}{100}$, simplify by HCF 5.",
              },
            ],
            steps: [
              {
                reasoning: "$45\\% = \\frac{45}{100}$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Divide by HCF 5.", marks: 1, markCode: "M" },
              { reasoning: "$= \\frac{9}{20}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{9}{20}$",
            commonErrors: ["Leaving $\\frac{45}{100}$ unsimplified."],
          },
        },
        {
          id: "edm7-u2-percent-convert-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A jacket costs £80 and is reduced by 25%. Find the sale price.",
          response: {
            type: "numeric",
            parts: [{ label: "Sale price in £", answer: 60 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Percentage decrease",
                statement:
                  "Multiplier method: $1 - 0.25 = 0.75$; £80 × 0.75 = £60.",
              },
            ],
            steps: [
              {
                reasoning: "$25\\%$ off → pay $75\\%$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiplier $0.75$ or $1 - 0.25$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$£80 \\times 0.75$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= £60$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$£60$",
            commonErrors: [
              "Finding 25% then adding instead of subtracting.",
              "Answering £20 (the discount, not price).",
            ],
          },
        },
        {
          id: "edm7-u2-percent-convert-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A phone's price increased from £200 to £230.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the increase in pounds.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the percentage increase.",
              marks: 4,
            },
            {
              label: "c",
              prompt: "Explain why we divide by the original price.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Percentage change",
                statement:
                  "$\\frac{\\text{change}}{\\text{original}} \\times 100\\%$ — original is the base.",
              },
            ],
            steps: [
              {
                reasoning: "$£230 - £200 = £30$ increase.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$\\frac{30}{200} \\times 100$.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              { reasoning: "$= 15\\%$.", marks: 1, markCode: "M", part: "b" },
              {
                reasoning: "Divide by 200 (original) not 230.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Correct answer 15%.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "Percentage is relative to starting value.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Original is the reference/base amount.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "(a) £30 (b) 15% (c) percentage relative to original",
            commonErrors: ["Dividing by new price.", "Subtraction errors."],
          },
        },
      ],
    },
    {
      id: "edm7-u2-percent-calc",
      title: "Calculating Percentages of Amounts",
      skill: "Find percentages of quantities and solve percentage problems.",
      lesson: {
        sections: [
          {
            heading: "Methods for percentage of",
            body: "Three methods: **decimal** — convert % to decimal, multiply ($20\\%$ of $85 = 0.2 \\times 85 = 17$). **Fraction** — $25\\% = \\frac{1}{4}$, divide by 4. **10% method** — find 10%, then scale: $30\\%$ of $60$: 10% = 6, so 30% = 18.\n\nChoose the easiest — 10% method great for mental maths; decimal method most reliable; fraction method when % is a nice fraction.",
          },
          {
            heading: "Percentage problems",
            body: "**Finding the whole**: if $20\\%$ of a number is 15, the number is $15 \\div 0.2 = 75$ — reverse the process. **Percentage increase**: new = original × (1 + %). **Successive changes**: apply sequentially — $+10\\%$ then $-10\\%$ doesn't return to start ($\\times 1.1 \\times 0.9 = \\times 0.99$).",
          },
        ],
        keyFormulas: [
          {
            name: "Percentage of",
            statement:
              "$x\\%$ of $N = \\frac{x}{100} \\times N$ or $0.0x \\times N$.",
          },
          {
            name: "Reverse percentage",
            statement: "Whole = part ÷ percentage as decimal.",
          },
        ],
        workedExample: {
          problem: "Find 35% of 240.",
          solution:
            "10% method: 10% = 24, 30% = 72, 5% = 12 → 72 + 12 = 84. Check: $0.35 \\times 240 = 84$.",
        },
      },
      questions: [
        {
          id: "edm7-u2-percent-calc-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find 20% of 150.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 30 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Percentage of",
                statement:
                  "$0.2 \\times 150 = 30$ or $\\frac{1}{5} \\times 150$.",
              },
            ],
            steps: [
              {
                reasoning: "$0.2 \\times 150 = 30$.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "$30$",
            commonErrors: ["Answering 20 — forgetting 'of'."],
          },
        },
        {
          id: "edm7-u2-percent-calc-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "30% of a number is 45. Find the number.",
          response: {
            type: "numeric",
            parts: [{ label: "The number", answer: 150 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Reverse percentage",
                statement: "Whole = part ÷ decimal: $45 \\div 0.3 = 150$.",
              },
            ],
            steps: [
              {
                reasoning: "$45 \\div 0.3$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= 150$.", marks: 1, markCode: "M" },
              {
                reasoning: "Check: $0.3 \\times 150 = 45$ ✓.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$150$",
            commonErrors: ["Multiplying $45 \\times 0.3$ instead of dividing."],
          },
        },
        {
          id: "edm7-u2-percent-calc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A £240 coat is increased by 15%, then decreased by 15%. What is the final price?",
          response: {
            type: "numeric",
            parts: [{ label: "Final price in £", answer: 234.6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Successive percentages",
                statement:
                  "Apply sequentially — not symmetric: $\\times 1.15 \\times 0.85 = \\times 0.9775$.",
              },
            ],
            steps: [
              {
                reasoning: "$£240 \\times 1.15 = £276$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$£276 \\times 0.85$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= £234.60$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Less than £240 — successive % aren't symmetric.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$£234.60$",
            commonErrors: [
              "Assuming returns to £240.",
              "Applying both % to original.",
            ],
          },
        },
        {
          id: "edm7-u2-percent-calc-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "In a school of 600 students, 45% are girls. 30% of the girls play sport.",
          parts: [
            { label: "a", prompt: "How many girls are there?", marks: 2 },
            { label: "b", prompt: "How many girls play sport?", marks: 3 },
            {
              label: "c",
              prompt:
                "What percentage of ALL students are girls who play sport?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Multi-step percentages",
                statement:
                  "Apply percentages sequentially; express final as % of whole.",
              },
            ],
            steps: [
              {
                reasoning: "$0.45 \\times 600 = 270$ girls.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$0.30 \\times 270 = 81$ girls play sport.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Correct number.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "$81 \\div 600 \\times 100$ or $0.45 \\times 0.30 \\times 100$.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              { reasoning: "$= 13.5\\%$.", marks: 1, markCode: "A", part: "c" },
            ],
            finalAnswer: "(a) 270 (b) 81 (c) 13.5%",
            commonErrors: [
              "Applying 30% to 600 instead of girls.",
              "Percentage of wrong base.",
            ],
          },
        },
      ],
    },
  ],
};
