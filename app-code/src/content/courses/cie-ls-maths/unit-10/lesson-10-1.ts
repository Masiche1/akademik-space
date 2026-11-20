import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "cilm-u10-lesson-10-1",
  code: "10-1",
  title: "Stage 7 Checkpoint — Number and Operations",
  goal: "I CAN apply place value, factors, fractions and percentages at Stage 7 checkpoint standard.",
  standards: ["Cambridge Lower Secondary Checkpoint Stage 7: number"],
  stage: 7,
  vocabulary: [
    {
      term: "Place value",
      definition: "Value of a digit based on its position.",
    },
    {
      term: "Prime number",
      definition: "Number with exactly two factors: 1 and itself.",
    },
    {
      term: "Highest common factor",
      definition: "Largest number dividing two numbers exactly.",
    },
    {
      term: "Lowest common multiple",
      definition: "Smallest number divisible by two numbers.",
    },
    { term: "Percentage", definition: "Part per hundred." },
  ],
  concepts: [
    {
      id: "cilm-u10-s7-number",
      title: "Stage 7 number checkpoint",
      skill: "Apply number skills at Stage 7 standard.",
      lesson: {
        sections: [
          {
            heading: "Core skills",
            body: "Stage 7 covers place value to millions, factors and multiples, fractions, decimals, percentages and order of operations. Checkpoint questions mix these in short exam-style items.",
          },
        ],
        keyFormulas: [
          {
            name: "HCF/LCM",
            statement:
              "HCF = largest common factor; LCM = smallest common multiple",
          },
          {
            name: "Percentage",
            statement:
              "$\\% = \\frac{\\text{part}}{\\text{whole}} \\times 100$",
          },
        ],
        workedExample: {
          problem: "Find HCF and LCM of 12 and 18.",
          solution:
            "Factors of 12: 1,2,3,4,6,12; of 18: 1,2,3,6,9,18. HCF = 6. LCM = 36.",
        },
      },
      questions: [
        {
          id: "cilm-u10-s7-n-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the HCF of 8 and 12?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "2" },
              { id: "c", text: "24" },
              { id: "d", text: "8" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "HCF",
                statement: "Largest common factor.",
              },
            ],
            steps: [
              {
                reasoning: "Common factors of 8 and 12: 1,2,4; largest is 4.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cilm-u10-s7-n-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write $\\frac{3}{4}$ as a decimal and a percentage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Conversion",
                statement: "Fraction → decimal → percentage.",
              },
            ],
            steps: [
              { reasoning: "$3 \\div 4 = 0.75$.", marks: 1, markCode: "M" },
              { reasoning: "$0.75 = 75\\%$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.75$, $75\\%$",
          },
        },
        {
          id: "cilm-u10-s7-n-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A shirt costs $40 and is reduced by 25%. Find the sale price.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Percentage",
                statement: "Discount = percentage of original.",
              },
            ],
            steps: [
              {
                reasoning: "Discount $= 0.25 \\times 40 = 10$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sale price $= 40 - 10 = 30$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\$30$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$30$",
          },
        },
        {
          id: "cilm-u10-s7-n-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate $3 + 4 \\times (10 - 6) \\div 2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "BIDMAS",
                statement:
                  "Brackets, Indices, Division, Multiplication, Addition, Subtraction.",
              },
            ],
            steps: [
              { reasoning: "Brackets: $10 - 6 = 4$.", marks: 1, markCode: "M" },
              {
                reasoning:
                  "Division/multiplication: $4 \\times 4 \\div 2 = 8$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Addition: $3 + 8 = 11$.", marks: 1, markCode: "M" },
              { reasoning: "Answer $11$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "11",
          },
        },
      ],
    },
    {
      id: "cilm-u10-s7-fractions",
      title: "Stage 7 fractions and ratios",
      skill:
        "Simplify fractions, add fractions and solve simple ratio problems.",
      lesson: {
        sections: [
          {
            heading: "Fractions",
            body: "Equivalent fractions, simplifying by common factors, adding with common denominators. Ratios compare quantities — simplify like fractions.",
          },
        ],
        keyFormulas: [
          {
            name: "Fraction addition",
            statement: "$\\frac{a}{c} + \\frac{b}{c} = \\frac{a+b}{c}$",
          },
          { name: "Ratio", statement: "Simplify by dividing by common factor" },
        ],
        workedExample: {
          problem:
            "Simplify $\\frac{12}{18}$ and add $\\frac{1}{4} + \\frac{1}{6}$.",
          solution:
            "$\\frac{12}{18} = \\frac{2}{3}$. $\\frac{1}{4} + \\frac{1}{6} = \\frac{3}{12} + \\frac{2}{12} = \\frac{5}{12}$.",
        },
      },
      questions: [
        {
          id: "cilm-u10-s7-f-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $\\frac{15}{25}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{3}{5}$" },
              { id: "b", text: "$\\frac{5}{3}$" },
              { id: "c", text: "$\\frac{1}{5}$" },
              { id: "d", text: "$\\frac{3}{15}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Simplify",
                statement: "Divide numerator and denominator by HCF.",
              },
            ],
            steps: [
              {
                reasoning: "HCF of 15 and 25 is 5: $15/5 \\div 25/5 = 3/5$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{3}{5}$",
          },
        },
        {
          id: "cilm-u10-s7-f-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate $\\frac{2}{3} + \\frac{1}{6}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Common denominator",
                statement: "Convert to same denominator before adding.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{4}{6} + \\frac{1}{6} = \\frac{5}{6}$.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{5}{6}$",
          },
        },
        {
          id: "cilm-u10-s7-f-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Divide $60 in the ratio 2:3.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Ratio",
                statement: "Total parts = 5; each part = $60/5 = 12$.",
              },
            ],
            steps: [
              {
                reasoning: "Total parts $= 2 + 3 = 5$; one part $= 12$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Shares: $2 \\times 12 = 24$ and $3 \\times 12 = 36$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\$24$ and $\\$36$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$24$, $\\$36$",
          },
        },
        {
          id: "cilm-u10-s7-f-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A recipe uses flour and sugar in ratio 5:2. For 350 g flour, how much sugar?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Ratio scaling",
                statement: "Scale ratio parts proportionally.",
              },
            ],
            steps: [
              {
                reasoning: "5 parts = 350 g → 1 part = 70 g.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sugar = 2 parts = 140 g.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Check: 350:140 = 5:2.", marks: 1, markCode: "B" },
              { reasoning: "$140\\ g$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$140\\ g$",
          },
        },
      ],
    },
    {
      id: "cilm-u10-s7-mx",
      title: "Stage 7 mixed checkpoint",
      skill: "Apply number, fraction, ratio and percentage skills together.",
      lesson: {
        sections: [
          {
            heading: "Mixed practice",
            body: "Checkpoint questions combine place value, fractions, ratios and percentages in multi-step problems. Read carefully and show each step.",
          },
        ],
        keyFormulas: [
          {
            name: "Percentage change",
            statement:
              "$\\text{change} = \\text{rate} \\times \\text{original}$",
          },
          {
            name: "Ratio sharing",
            statement:
              "Divide total by sum of parts, then multiply by each part",
          },
        ],
        workedExample: {
          problem: "Increase $50 by 20% then decrease the result by 10%.",
          solution: "$50 \\times 1.2 = 60$; then $60 \\times 0.9 = 54$.",
        },
      },
      questions: [
        {
          id: "cilm-u10-s7-mx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $15\\%$ of $200$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "20" },
              { id: "b", text: "30" },
              { id: "c", text: "15" },
              { id: "d", text: "25" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Percentage of",
                statement: "Multiply by percentage as decimal.",
              },
            ],
            steps: [
              {
                reasoning: "$0.15 \\times 200 = 30$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "30",
          },
        },
        {
          id: "cilm-u10-s7-mx-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $\\frac{2}{3} \\times 48$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Fraction of quantity",
                statement: "Divide by denominator, multiply by numerator.",
              },
            ],
            steps: [
              { reasoning: "$48 \\div 3 = 16$.", marks: 1, markCode: "M" },
              { reasoning: "$16 \\times 2 = 32$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "32",
          },
        },
        {
          id: "cilm-u10-s7-mx-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Red and blue pens are in the ratio $4:5$. There are 36 pens in total. How many are blue?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Ratio sharing",
                statement: "Find value of one part, then multiply.",
              },
            ],
            steps: [
              {
                reasoning: "Total parts $= 4 + 5 = 9$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "One part $= 36 \\div 9 = 4$ pens.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Blue pens $= 5 \\times 4 = 20$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "20",
          },
        },
        {
          id: "cilm-u10-s7-mx-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A jacket costs $\\$60$. It is reduced by $20\\%$, then the sale price is increased by $10\\%$. Find the final price.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Successive percentages",
                statement: "Apply each percentage change to the new price.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Discount $= 0.20 \\times 60 = 12$, so sale price $= 48$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Increase $= 0.10 \\times 48 = 4.80$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Final price $= 48 + 4.80 = 52.80$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\$52.80$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$52.80$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u10-stage7-number-notes",
      title: "Stage 7 checkpoint number — revision notes",
      summary:
        "Place value, HCF/LCM, fractions, decimals, percentages, BIDMAS.",
      sections: [
        {
          heading: "Key skills",
          body: "HCF/LCM via factor lists; fractions need common denominators; percentages = parts per hundred; BIDMAS for order of operations.",
        },
        {
          heading: "Exam tips",
          body: "Show working for multi-step problems; check answers are in simplest form.",
        },
      ],
    },
  ],
};
