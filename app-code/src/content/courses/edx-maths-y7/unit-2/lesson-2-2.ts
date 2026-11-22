import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "edm7-u2-lesson-2-2",
  code: "2-2",
  title: "Multiplying Fractions and Decimals",
  goal: "I CAN multiply fractions by whole numbers and fractions, and convert between fractions and decimals.",
  standards: ["Edexcel KS3 Maths — Fractions"],
  vocabulary: [
    { term: "Product", definition: "The result of multiplication." },
    {
      term: "Reciprocal",
      definition:
        "The fraction flipped upside down — e.g. reciprocal of $\\frac{3}{4}$ is $\\frac{4}{3}$.",
    },
    {
      term: "Terminating decimal",
      definition: "A decimal that ends — e.g. $0.5$, $0.75$.",
    },
    {
      term: "Recurring decimal",
      definition:
        "A decimal with a repeating pattern — e.g. $0.333\\ldots = \\frac{1}{3}$.",
    },
  ],
  concepts: [
    {
      id: "edm7-u2-multiply",
      title: "Multiplying Fractions",
      skill:
        "Multiply fractions by whole numbers and by other fractions, including mixed numbers.",
      lesson: {
        sections: [
          {
            heading: "Fraction × whole number",
            body: "Multiply the numerator by the whole number, keep the denominator: $\\frac{2}{5} \\times 3 = \\frac{6}{5} = 1\\frac{1}{5}$. Equivalently, multiply then simplify — or simplify first if possible.\n\n**Mixed numbers**: convert to improper first — $2\\frac{1}{3} \\times 3 = \\frac{7}{3} \\times 3 = 7$. Or multiply wholes and fractions separately: $2 \\times 3 = 6$, $\\frac{1}{3} \\times 3 = 1$, total $7$.",
          },
          {
            heading: "Fraction × fraction",
            body: "Multiply numerators together, denominators together — **no common denominator needed**: $\\frac{2}{3} \\times \\frac{4}{5} = \\frac{8}{15}$. This works because you're finding a fraction of a fraction.\n\n**Cancel before multiplying** to simplify: $\\frac{3}{4} \\times \\frac{8}{9} = \\frac{1}{4} \\times \\frac{8}{3} = \\frac{8}{12} = \\frac{2}{3}$ — cross-cancel 3 and 9, 8 and 4. Answer should always be simplified.",
          },
        ],
        keyFormulas: [
          {
            name: "Fraction multiplication",
            statement:
              "$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{ac}{bd}$ — no common denominator needed.",
          },
          {
            name: "Cancel first",
            statement: "Simplify before multiplying for easier working.",
          },
        ],
        workedExample: {
          problem: "Calculate $\\frac{3}{8} \\times \\frac{4}{9}$.",
          solution:
            "Cross-cancel: $\\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{6}$. Or direct: $\\frac{12}{72} = \\frac{1}{6}$.",
        },
      },
      questions: [
        {
          id: "edm7-u2-multiply-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Calculate $\\frac{3}{5} \\times 4$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Fraction × whole",
                statement: "Multiply numerator by whole number.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{12}{5} = 2\\frac{2}{5}$.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "$2\\frac{2}{5}$",
            commonErrors: ["Multiplying denominator too — $\\frac{12}{20}$."],
          },
        },
        {
          id: "edm7-u2-multiply-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate $\\frac{2}{3} \\times \\frac{3}{4}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Fraction × fraction",
                statement:
                  "Numerators × numerators, denominators × denominators, then simplify.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\frac{2 \\times 3}{3 \\times 4} = \\frac{6}{12}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify: $\\frac{6}{12} = \\frac{1}{2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Final answer $\\frac{1}{2}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{1}{2}$",
            commonErrors: ["Not simplifying — leaving $\\frac{6}{12}$."],
          },
        },
        {
          id: "edm7-u2-multiply-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate $1\\frac{1}{2} \\times \\frac{2}{3}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Mixed × fraction",
                statement: "Convert mixed to improper first.",
              },
            ],
            steps: [
              {
                reasoning: "$1\\frac{1}{2} = \\frac{3}{2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\frac{3}{2} \\times \\frac{2}{3} = \\frac{6}{6} = 1$.",
                marks: 2,
                markCode: "M",
              },
              { reasoning: "Final answer $1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1$",
            commonErrors: [
              "Multiplying wholes and fractions separately incorrectly.",
            ],
          },
        },
        {
          id: "edm7-u2-multiply-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A baker makes $\\frac{3}{4}$ kg of dough per batch. She makes $2\\frac{2}{3}$ batches for an order.",
          parts: [
            {
              label: "a",
              prompt: "Write $2\\frac{2}{3}$ as an improper fraction.",
              marks: 2,
            },
            { label: "b", prompt: "Calculate total dough needed.", marks: 4 },
            {
              label: "c",
              prompt: "Is this more or less than 2 kg? Explain.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Fraction multiplication in context",
                statement: "Convert mixed to improper, multiply, simplify.",
              },
            ],
            steps: [
              {
                reasoning: "$2\\frac{2}{3} = \\frac{8}{3}$.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$\\frac{3}{4} \\times \\frac{8}{3}$.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning:
                  "Cross-cancel: $\\frac{1}{4} \\times \\frac{8}{1} = \\frac{8}{4} = 2$.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Total = 2 kg.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "Exactly 2 kg — neither more nor less.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Reason: product equals exactly 2.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "(a) $\\frac{8}{3}$ (b) 2 kg (c) exactly 2 kg",
            commonErrors: ["Wrong improper conversion.", "Not simplifying."],
          },
        },
      ],
    },
    {
      id: "edm7-u2-decimals",
      title: "Fractions and Decimals",
      skill:
        "Convert between fractions and decimals, including recurring decimals.",
      lesson: {
        sections: [
          {
            heading: "Fraction → decimal",
            body: "Divide numerator by denominator: $\\frac{3}{4} = 3 \\div 4 = 0.75$. **Terminating** decimals end exactly ($\\frac{1}{2} = 0.5$, $\\frac{3}{8} = 0.375$). **Recurring** decimals repeat forever: $\\frac{1}{3} = 0.333\\ldots$, $\\frac{2}{3} = 0.666\\ldots$, $\\frac{1}{6} = 0.1666\\ldots$.\n\n**Decimal → fraction**: terminating decimals read as tenths/hundredths — $0.75 = \\frac{75}{100} = \\frac{3}{4}$. Recurring need algebra: $x = 0.333\\ldots$, $10x = 3.333\\ldots$, $9x = 3$, $x = \\frac{1}{3}$.",
          },
          {
            heading: "Converting in context",
            body: "Decimals are easier for money and measurement; fractions for exact ratios. **Percentage** is a fraction out of 100 — $\\frac{1}{4} = 25\\%$, $0.3 = 30\\%$, $\\frac{3}{5} = 60\\%$.\n\n**Equivalent forms**: $\\frac{1}{2} = 0.5 = 50\\%$ — same value, three representations. Choose the most convenient for the problem.",
          },
        ],
        keyFormulas: [
          {
            name: "Fraction → decimal",
            statement: "Divide numerator by denominator.",
          },
          {
            name: "Decimal → fraction",
            statement:
              "Read decimal places: $0.75 = \\frac{75}{100} = \\frac{3}{4}$.",
          },
        ],
        workedExample: {
          problem: "Convert $\\frac{5}{8}$ to a decimal and percentage.",
          solution: "$5 \\div 8 = 0.625 = 62.5\\%$.",
        },
      },
      questions: [
        {
          id: "edm7-u2-decimals-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write $\\frac{3}{4}$ as a decimal.",
          response: {
            type: "numeric",
            parts: [{ label: "Decimal", answer: 0.75 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Fraction → decimal",
                statement: "Divide numerator by denominator.",
              },
            ],
            steps: [
              {
                reasoning: "$3 \\div 4 = 0.75$.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "$0.75$",
            commonErrors: [
              "Answering 0.34 — reading digits instead of dividing.",
            ],
          },
        },
        {
          id: "edm7-u2-decimals-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write $0.6$ as a fraction in its simplest form.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Decimal → fraction",
                statement: "$0.6 = \\frac{6}{10} = \\frac{3}{5}$.",
              },
            ],
            steps: [
              { reasoning: "$0.6 = \\frac{6}{10}$.", marks: 1, markCode: "M" },
              { reasoning: "Simplify by HCF 2.", marks: 1, markCode: "M" },
              { reasoning: "$= \\frac{3}{5}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{3}{5}$",
            commonErrors: ["Leaving $\\frac{6}{10}$ unsimplified."],
          },
        },
        {
          id: "edm7-u2-decimals-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Express $\\frac{2}{3}$ as a recurring decimal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Recurring decimal",
                statement: "$\\frac{2}{3} = 0.666\\ldots$ — 6 repeats forever.",
              },
            ],
            steps: [
              {
                reasoning: "$2 \\div 3 = 0.666\\ldots$.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "Recognise recurring pattern.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Write as $0.\\dot{6}$ or $0.666\\ldots$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.666\\ldots$ (or $0.\\dot{6}$)",
            commonErrors: ["Rounding to 0.67 — losing exactness."],
          },
        },
        {
          id: "edm7-u2-decimals-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Three students scored $\\frac{7}{10}$, $0.75$ and $72\\%$ on a test.",
          parts: [
            {
              label: "a",
              prompt: "Convert all three to percentages.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Rank them from highest to lowest.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Explain why converting helps comparison.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Equivalent forms",
                statement:
                  "Convert to common form (percentages) for easy comparison.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{7}{10} = 70\\%$.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$0.75 = 75\\%$.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "$72\\%$ stays.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "All three converted correctly.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "$75\\% > 72\\% > 70\\%$ — ranking correct.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "0.75 first, then 72%, then 70%.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "Common form makes comparison instant.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Avoids mental conversion errors.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) 70%, 75%, 72% (b) 0.75 > 72% > 70% (c) common form",
            commonErrors: [
              "Wrong conversions.",
              "Comparing different forms directly.",
            ],
          },
        },
      ],
    },
  ],
};
