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
            { id: "a", text: "$\\frac{1}{4}$" },
            { id: "b", text: "$\\frac{2}{5}$" },
            { id: "c", text: "$\\frac{4}{100}$" },
            { id: "d", text: "$\\frac{4}{10}$" },
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
        {
          id: "cimg-u1-s2-co-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write $0.75$ as a percentage.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$750\\%$" },
            { id: "b", text: "$75\\%$" },
            { id: "c", text: "$0.75\\%$" },
            { id: "d", text: "$7.5\\%$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Decimal to percentage", statement: "Multiply by 100." }],
            steps: [{ reasoning: "$0.75 \\times 100 = 75\\%$.", marks: 1, markCode: "A" }],
            finalAnswer: "$75\\%$",
          },
        },
        {
          id: "cimg-u1-s2-co-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write $\\frac{3}{5}$ as a decimal.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.6 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Fraction to decimal", statement: "Divide numerator by denominator." }],
            steps: [
              { reasoning: "$3 \\div 5 = 0.6$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $0.6$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.6$",
          },
        },
        {
          id: "cimg-u1-s2-co-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write $0.45$ as a fraction in its simplest form.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Decimal to fraction", statement: "Use place value then simplify." }],
            steps: [
              { reasoning: "$0.45 = \\frac{45}{100}$.", marks: 1, markCode: "M" },
              { reasoning: "Simplify: divide by 5 → $\\frac{9}{20}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{9}{20}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{9}{20}$",
          },
        },
        {
          id: "cimg-u1-s2-co-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which fraction is equal to $40\\%$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{2}{5}$" },
            { id: "b", text: "$\\frac{1}{4}$" },
            { id: "c", text: "$\\frac{3}{8}$" },
            { id: "d", text: "$\\frac{5}{8}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Percentage to fraction", statement: "Denominator 100 then simplify." }],
            steps: [{ reasoning: "$40\\% = \\frac{40}{100} = \\frac{2}{5}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{2}{5}$",
          },
        },
        {
          id: "cimg-u1-s2-co-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write $\\frac{5}{16}$ as a decimal.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.3125 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Fraction to decimal", statement: "Divide numerator by denominator." }],
            steps: [
              { reasoning: "$5 \\div 16 = 0.3125$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $0.3125$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.3125$",
          },
        },
        {
          id: "cimg-u1-s2-co-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write $\\frac{2}{3}$ as a decimal, giving your answer correct to 3 decimal places.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Recurring decimal", statement: "Divide and round." }],
            steps: [
              { reasoning: "$2 \\div 3 = 0.6666\\ldots$", marks: 1, markCode: "M" },
              { reasoning: "Round to 3 dp: $0.667$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $0.667$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.667$",
          },
        },
        {
          id: "cimg-u1-s2-co-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Write $35\\%$ as a fraction in its simplest form.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{7}{20}$" },
            { id: "b", text: "$\\frac{35}{100}$" },
            { id: "c", text: "$\\frac{3}{5}$" },
            { id: "d", text: "$\\frac{7}{10}$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Percentage to fraction", statement: "Simplify fully." }],
            steps: [{ reasoning: "$35\\% = \\frac{35}{100} = \\frac{7}{20}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{7}{20}$",
          },
        },
        {
          id: "cimg-u1-s2-co-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Write $\\frac{3}{8}$ as a decimal.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.375 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Fraction to decimal", statement: "Divide or use equivalent fraction." }],
            steps: [
              { reasoning: "$\\frac{3}{8} = \\frac{375}{1000}$ or $3 \\div 8$.", marks: 1, markCode: "M" },
              { reasoning: "$3 \\div 8 = 0.375$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $0.375$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.375$",
          },
        },
        {
          id: "cimg-u1-s2-co-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write $0.2$ as a percentage.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$20\\%$" },
            { id: "b", text: "$0.2\\%$" },
            { id: "c", text: "$2\\%$" },
            { id: "d", text: "$200\\%$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Decimal to percentage", statement: "Multiply by 100." }],
            steps: [{ reasoning: "$0.2 \\times 100 = 20\\%$.", marks: 1, markCode: "A" }],
            finalAnswer: "$20\\%$",
          },
        },
        {
          id: "cimg-u1-s2-co-q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write $\\frac{7}{20}$ as a percentage.",
          response: { type: "numeric", parts: [{ label: "a", answer: 35 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Fraction to percentage", statement: "Equivalent fraction with denominator 100." }],
            steps: [
              { reasoning: "$\\frac{7}{20} = \\frac{35}{100}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $35\\%$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$35\\%$",
          },
        },
        {
          id: "cimg-u1-s2-co-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write $45\\%$ as a fraction in its simplest form.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Percentage to fraction", statement: "Over 100 then simplify." }],
            steps: [
              { reasoning: "$45\\% = \\frac{45}{100}$.", marks: 1, markCode: "M" },
              { reasoning: "Simplify: divide by 5 → $\\frac{9}{20}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{9}{20}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{9}{20}$",
          },
        },
        {
          id: "cimg-u1-s2-co-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write $\\frac{5}{6}$ as a decimal, giving your answer correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.83 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Recurring decimal", statement: "Divide and round carefully." }],
            steps: [
              { reasoning: "$5 \\div 6 = 0.8333\\ldots$", marks: 1, markCode: "M" },
              { reasoning: "Third decimal is 3, so rounds down → $0.83$.", marks: 1, markCode: "M" },
              { reasoning: "Check: $\\frac{5}{6} \\approx 0.833$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $0.83$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.83$",
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
            { id: "a", text: "$\\frac{2}{6}$" },
            { id: "b", text: "$\\frac{2}{4}$" },
            { id: "c", text: "$\\frac{3}{4}$" },
            { id: "d", text: "$\\frac{1}{6}$" },
          ], correctChoiceId: "c" },
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
        {
          id: "cimg-u1-s2-ca-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out $\\frac{1}{3} + \\frac{1}{6}$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{2}{9}$" },
            { id: "b", text: "$\\frac{1}{2}$" },
            { id: "c", text: "$\\frac{1}{9}$" },
            { id: "d", text: "$\\frac{2}{6}$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Adding fractions", statement: "Common denominator." }],
            steps: [{ reasoning: "$\\frac{1}{3} + \\frac{1}{6} = \\frac{2}{6} + \\frac{1}{6} = \\frac{3}{6} = \\frac{1}{2}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{1}{2}$",
          },
        },
        {
          id: "cimg-u1-s2-ca-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find $20\\%$ of 45.",
          response: { type: "numeric", parts: [{ label: "a", answer: 9 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Percentage", statement: "$20\\% = \\frac{1}{5}$." }],
            steps: [
              { reasoning: "$45 \\div 5 = 9$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 9.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9",
          },
        },
        {
          id: "cimg-u1-s2-ca-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find $\\frac{5}{6}$ of 42.",
          response: { type: "numeric", parts: [{ label: "a", answer: 35 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Fraction of amount", statement: "Multiply then divide." }],
            steps: [
              { reasoning: "$42 \\div 6 = 7$; $7 \\times 5 = 35$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 35.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "35",
          },
        },
        {
          id: "cimg-u1-s2-ca-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Work out $\\frac{2}{3} \\div \\frac{4}{5}$, giving your answer in simplest form.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Dividing fractions", statement: "Multiply by reciprocal." }],
            steps: [
              { reasoning: "$\\frac{2}{3} \\times \\frac{5}{4} = \\frac{10}{12}$.", marks: 1, markCode: "M" },
              { reasoning: "Simplify: $\\frac{5}{6}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{5}{6}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{5}{6}$",
          },
        },
        {
          id: "cimg-u1-s2-ca-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find $15\\%$ of 200.",
          response: { type: "mcq", choices: [
            { id: "a", text: "300" },
            { id: "b", text: "30" },
            { id: "c", text: "15" },
            { id: "d", text: "45" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Percentage", statement: "Find 10% then scale." }],
            steps: [{ reasoning: "$10\\% = 20$; $5\\% = 10$; $15\\% = 30$.", marks: 1, markCode: "A" }],
            finalAnswer: "30",
          },
        },
        {
          id: "cimg-u1-s2-ca-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Increase 80 by $12.5\\%$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 90 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Percentage increase", statement: "Find increase then add." }],
            steps: [
              { reasoning: "$12.5\\%$ of 80 $= 10$ (since $12.5\\% = \\frac{1}{8}$).", marks: 1, markCode: "M" },
              { reasoning: "$80 + 10$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 90.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "90",
          },
        },
        {
          id: "cimg-u1-s2-ca-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Work out $\\left(\\frac{2}{5} + \\frac{1}{3}\\right) \\times 30$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Order of operations", statement: "Bracket first, then multiply." }],
            steps: [
              { reasoning: "$\\frac{2}{5} + \\frac{1}{3} = \\frac{6}{15} + \\frac{5}{15} = \\frac{11}{15}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{11}{15} \\times 30 = \\frac{11 \\times 30}{15}$.", marks: 1, markCode: "M" },
              { reasoning: "$= 11 \\times 2 = 22$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 22.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "22",
          },
        },
        {
          id: "cimg-u1-s2-ca-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out $\\frac{3}{4} \\times 8$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "24" },
            { id: "b", text: "4" },
            { id: "c", text: "6" },
            { id: "d", text: "11" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Fraction of amount", statement: "Divide then multiply." }],
            steps: [{ reasoning: "$8 \\div 4 = 2$; $2 \\times 3 = 6$.", marks: 1, markCode: "A" }],
            finalAnswer: "6",
          },
        },
        {
          id: "cimg-u1-s2-ca-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find $12.5\\%$ of 96.",
          response: { type: "numeric", parts: [{ label: "a", answer: 12 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Percentage", statement: "$12.5\\% = \\frac{1}{8}$." }],
            steps: [
              { reasoning: "$12.5\\%$ of 96: find $\\frac{1}{8}$ of 96.", marks: 1, markCode: "M" },
              { reasoning: "$96 \\div 8 = 12$.", marks: 1, markCode: "M" },
              { reasoning: "Check: $0.125 \\times 96 = 12$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 12.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12",
          },
        },
        {
          id: "cimg-u1-s2-ca-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is the largest?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$44\\%$" },
            { id: "b", text: "$\\frac{5}{12}$" },
            { id: "c", text: "$0.45$" },
            { id: "d", text: "$\\frac{4}{9}$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Comparison", statement: "Convert to decimals." }],
            steps: [{ reasoning: "$\\frac{5}{12} \\approx 0.417$; $44\\% = 0.44$; $\\frac{4}{9} \\approx 0.444$; $0.45$ is largest.", marks: 1, markCode: "A" }],
            finalAnswer: "$0.45$",
          },
        },
        {
          id: "cimg-u1-s2-ca-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Work out $1\\frac{1}{4} \\div \\frac{5}{8}$, giving your answer in simplest form.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mixed numbers and division", statement: "Convert then multiply by reciprocal." }],
            steps: [
              { reasoning: "$1\\frac{1}{4} = \\frac{5}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{5}{4} \\times \\frac{8}{5} = \\frac{40}{20} = 2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
          },
        },
        {
          id: "cimg-u1-s2-ca-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find $18\\%$ of 250.",
          response: { type: "numeric", parts: [{ label: "a", answer: 45 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Percentage", statement: "Break into 10% and 8%." }],
            steps: [
              { reasoning: "$10\\% = 25$; $8\\% = 20$; $25 + 20 = 45$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 45.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "45",
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
