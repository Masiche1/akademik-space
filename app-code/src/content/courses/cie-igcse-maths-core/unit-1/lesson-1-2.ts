import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "cimg-u1-lesson-1-2",
  code: "1-2",
  title: "Fractions, Decimals and Percentages",
  goal: "I CAN convert between fractions, decimals and percentages and calculate with them.",
  standards: ["Cambridge IGCSE Mathematics 0580 Core: fractions"],
  vocabulary: [
    { term: "Equivalent fraction", definition: "A fraction equal to another, e.g. $\\frac{1}{2} = \\frac{2}{4}$." },
    { term: "Recurring decimal", definition: "A decimal with a repeating pattern, e.g. $0.333\\ldots = \\frac{1}{3}$." },
    { term: "Percentage", definition: "Parts per hundred." },
    { term: "Terminating decimal", definition: "A decimal that ends, e.g. $0.25$." },
    { term: "Percentage change", definition: "Increase or decrease as a percentage of the original." },
  ],
  concepts: [
    {
      id: "cimg-u1-s2-convert",
      title: "Converting between forms",
      skill: "Convert fractions, decimals and percentages at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Fraction to decimal",
            body: "Divide numerator by denominator. $\\frac{1}{4} = 0.25$. Some give recurring decimals: $\\frac{1}{3} = 0.333\\ldots$.",
          },
          {
            heading: "To percentage",
            body: "Multiply the decimal by 100 or find an equivalent fraction with denominator 100. $\\frac{3}{5} = \\frac{60}{100} = 60\\%$.",
          },
        ],
        keyFormulas: [
          { name: "Fraction to decimal", statement: "$\\frac{a}{b} = a \\div b$" },
          { name: "Decimal to percentage", statement: "$\\times 100$" },
        ],
        workedExample: {
          problem: "Convert $\\frac{7}{8}$ to a decimal and percentage.",
          solution: "$7 \\div 8 = 0.875 = 87.5\\%$.",
        },
      },
      questions: [
        {
          id: "cimg-u1-s2-co-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write $0.4$ as a fraction in its simplest form.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{4}{10}$" }, { id: "b", text: "$\\frac{2}{5}$" }, { id: "c", text: "$\\frac{1}{4}$" }, { id: "d", text: "$\\frac{4}{100}$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Decimal to fraction", statement: "Simplify." }],
            steps: [{ reasoning: "$0.4 = \\frac{4}{10} = \\frac{2}{5}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{2}{5}$",
          },
        },
        {
          id: "cimg-u1-s2-co-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write $\\frac{5}{8}$ as a decimal.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.625 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Fraction to decimal", statement: "Divide numerator by denominator." }],
            steps: [
              { reasoning: "$5 \\div 8 = 0.625$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $0.625$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.625$",
          },
        },
        {
          id: "cimg-u1-s2-co-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write $0.375$ as a fraction in its simplest form.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Decimal to fraction", statement: "Use place value then simplify." }],
            steps: [
              { reasoning: "$0.375 = \\frac{375}{1000}$.", marks: 1, markCode: "M" },
              { reasoning: "Simplify: divide by 125 → $\\frac{3}{8}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{3}{8}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{3}{8}$",
          },
        },
        {
          id: "cimg-u1-s2-co-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "A shirt costs $\\$45$ and is reduced by $20\\%$. Find the sale price.",
          response: { type: "numeric", parts: [{ label: "a", answer: 36 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Percentage discount", statement: "Find discount then subtract." }],
            steps: [
              { reasoning: "Discount $= 0.20 \\times 45 = 9$.", marks: 1, markCode: "M" },
              { reasoning: "Sale price $= 45 - 9 = 36$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\$36$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$36$",
          },
        },
      ],
    },
    {
      id: "cimg-u1-s2-calculations",
      title: "Calculating with fractions and percentages",
      skill: "Add, subtract, multiply and divide fractions and find percentages of amounts.",
      lesson: {
        sections: [
          {
            heading: "Fraction operations",
            body: "Add/subtract: common denominator first. Multiply: top × top, bottom × bottom. Divide: multiply by reciprocal. Simplify answers.",
          },
          {
            heading: "Percentage of amount",
            body: "Find $10\\%$ by dividing by 10, then scale. $15\\%$ of 80: $10\\% = 8$, $5\\% = 4$, so $15\\% = 12$.",
          },
        ],
        keyFormulas: [
          { name: "Fraction of amount", statement: "$\\frac{a}{b}$ of $N = \\frac{a \\times N}{b}$" },
        ],
        workedExample: {
          problem: "Work out $\\frac{2}{3} + \\frac{1}{4}$.",
          solution: "Common denominator 12: $\\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}$.",
        },
      },
      questions: [
        {
          id: "cimg-u1-s2-ca-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out $\\frac{1}{2} + \\frac{1}{4}$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{2}{6}$" }, { id: "b", text: "$\\frac{3}{4}$" }, { id: "c", text: "$\\frac{1}{6}$" }, { id: "d", text: "$\\frac{2}{4}$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Adding fractions", statement: "Common denominator." }],
            steps: [{ reasoning: "$\\frac{1}{2} + \\frac{1}{4} = \\frac{2}{4} + \\frac{1}{4} = \\frac{3}{4}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{3}{4}$",
          },
        },
        {
          id: "cimg-u1-s2-ca-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find $25\\%$ of 60.",
          response: { type: "numeric", parts: [{ label: "a", answer: 15 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Percentage", statement: "$25\\% = \\frac{1}{4}$." }],
            steps: [
              { reasoning: "$60 \\div 4 = 15$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 15.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15",
          },
        },
        {
          id: "cimg-u1-s2-ca-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Work out $\\frac{3}{4} \\times \\frac{2}{5}$, giving your answer in simplest form.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Multiplying fractions", statement: "Top×top, bottom×bottom." }],
            steps: [
              { reasoning: "$\\frac{3 \\times 2}{4 \\times 5} = \\frac{6}{20}$.", marks: 1, markCode: "M" },
              { reasoning: "Simplify: $\\frac{3}{10}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{3}{10}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{3}{10}$",
          },
        },
        {
          id: "cimg-u1-s2-ca-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "A recipe uses $\\frac{2}{3}$ cup of flour. You need to make $\\frac{3}{4}$ of the recipe. How much flour do you need?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Fraction of fraction", statement: "Multiply." }],
            steps: [
              { reasoning: "Multiply: $\\frac{2}{3} \\times \\frac{3}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{2 \\times 3}{3 \\times 4} = \\frac{6}{12} = \\frac{1}{2}$.", marks: 1, markCode: "M" },
              { reasoning: "You need $\\frac{1}{2}$ cup.", marks: 1, markCode: "A" },
              { reasoning: "Units correct (cups).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{2}$ cup",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cimg-u1-s2-fdp-notes",
      title: "Fractions, decimals, percentages — revision notes",
      summary: "Conversions, operations, percentages of amounts.",
      sections: [
        { heading: "Converting", body: "Fraction → decimal: divide. Decimal → percentage: ×100. Always simplify fractions." },
        { heading: "Operations", body: "Add/subtract: common denominator. Multiply: top×top/bottom×bottom. Percentages: find 10% then scale." },
      ],
    },
  ],
};
