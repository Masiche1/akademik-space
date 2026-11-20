import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "cilm-u1-lesson-1-3",
  code: "1-3",
  title: "Operations with fractions and decimals",
  goal: "I CAN add, subtract, multiply and divide fractions and decimals, including mixed numbers, accurately.",
  standards: ["0862 Number: operations with fractions and decimals"],
  vocabulary: [
    { term: "Mixed number", definition: "A whole number plus a fraction, e.g. $1\\frac{1}{2}$." },
    { term: "Improper fraction", definition: "A fraction where the numerator is bigger than the denominator, e.g. $\\frac{7}{4}$." },
    { term: "Common denominator", definition: "A shared denominator used to add or subtract fractions." },
    { term: "Reciprocal", definition: "The 'flip' of a fraction — $\\frac{3}{4}$ becomes $\\frac{4}{3}$. Used in division." },
    { term: "Terminating decimal", definition: "A decimal that ends, e.g. $0.375$ — easy to convert back to a fraction." },
    { term: "Order of operations", definition: "BIDMAS/PEMDAS: brackets, indices, division/multiplication, addition/subtraction." },
  ],
  concepts: [
    {
      id: "cilm-u1-fraction-ops",
      title: "Adding, subtracting and multiplying fractions",
      skill: "Add, subtract and multiply fractions and mixed numbers using common denominators and simplification.",
      lesson: {
        sections: [
          {
            heading: "Adding and subtracting",
            body: "1. Find a **common denominator** (LCM of denominators).\n2. Convert each fraction.\n3. Add or subtract numerators.\n4. Simplify.\n\n$\\frac{1}{4}+\\frac{1}{6}$: LCM $=12$, so $\\frac{3}{12}+\\frac{2}{12}=\\frac{5}{12}$.",
          },
          {
            heading: "Multiplying",
            body: "Multiply numerators, multiply denominators, simplify — simplify **before** multiplying when possible:\n\n$\\frac{2}{3} \\times \\frac{9}{10} = \\frac{2}{1} \\times \\frac{3}{10} = \\frac{6}{10} = \\frac{3}{5}$ (cancel $3$ into $9$ first).",
          },
          {
            heading: "Mixed numbers",
            body: "Convert to improper fractions first:\n\n$1\\frac{1}{2}+2\\frac{1}{3} = \\frac{3}{2}+\\frac{7}{3} = \\frac{9}{6}+\\frac{14}{6}=\\frac{23}{6}=3\\frac{5}{6}$.",
          },
        ],
        keyFormulas: [
          { name: "Add/subtract", statement: "Common denominator → combine numerators → simplify." },
          { name: "Multiply", statement: "$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{ac}{bd}$; cancel before multiplying." },
        ],
        workedExample: {
          problem: "Calculate $\\frac{3}{4} - \\frac{1}{6}$.",
          solution: "LCM of $4$ and $6$ is $12$: $\\frac{9}{12}-\\frac{2}{12}=\\frac{7}{12}$.",
        },
      },
      questions: [
        {
          id: "cilm-u1-fo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Calculate $\\frac{1}{2}+\\frac{1}{4}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{2}{6}=\\frac{1}{3}$" },
              { id: "b", text: "$\\frac{2}{4}=\\frac{1}{2}$" },
              { id: "c", text: "$\\frac{3}{4}$" },
              { id: "d", text: "$\\frac{1}{6}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Common denominator", statement: "Denominators add only after conversion to a common denominator." },
            ],
            steps: [
              { reasoning: "$\\frac{1}{2}=\\frac{2}{4}$, so $\\frac{2}{4}+\\frac{1}{4}=\\frac{3}{4}$ — you cannot add denominators.", working: "\\frac{2}{4}+\\frac{1}{4}=\\frac{3}{4}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$\\frac{3}{4}$",
            commonErrors: ["Choosing (a) — adding numerators AND denominators gives $\\frac{2}{6}$, which is wrong."],
          },
        },
        {
          id: "cilm-u1-fo-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate $\\frac{2}{3} \\times \\frac{9}{10}$, giving your answer in simplest form.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Multiplying fractions", statement: "Multiply numerators and denominators; cancel first to simplify." },
            ],
            steps: [
              { reasoning: "Cancel $9$ and $3$: $9\\div3=3$, $3\\div3=1$. So $\\frac{2}{1}\\times\\frac{3}{10}=\\frac{6}{10}$.", working: "\\frac{2 \\times 3}{1 \\times 10}=\\frac{6}{10}", marks: 1, markCode: "M" },
              { reasoning: "Simplify: $\\frac{6}{10}=\\frac{3}{5}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{3}{5}$",
            commonErrors: ["$\\frac{18}{30}$ unsimplified — always simplify, or cancel first."],
          },
        },
        {
          id: "cilm-u1-fo-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate $1\\frac{2}{3} + \\frac{3}{4}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Mixed numbers", statement: "Convert mixed numbers to improper fractions before operating." },
            ],
            steps: [
              { reasoning: "$1\\frac{2}{3}=\\frac{5}{3}$.", working: "\\frac{5}{3}", marks: 1, markCode: "M" },
              { reasoning: "Common denominator $12$: $\\frac{20}{12}+\\frac{9}{12}=\\frac{29}{12}$.", working: "\\frac{20}{12}+\\frac{9}{12}=\\frac{29}{12}", marks: 1, markCode: "M" },
              { reasoning: "Convert back: $\\frac{29}{12}=2\\frac{5}{12}$.", marks: 1, markCode: "M" },
              { reasoning: "Check: $2\\frac{5}{12}$ is between $2$ and $3$ — sensible since $1\\frac{2}{3}\\approx1.67$ and sum $\\approx2.42$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\frac{5}{12}$ (or $\\frac{29}{12}$)",
            commonErrors: ["Adding wholes and fractions separately: $1+0=1$, $\\frac{2}{3}+\\frac{3}{4}$ — works only if you carry correctly; improper-fraction method is safer."],
          },
        },
        {
          id: "cilm-u1-fo-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A recipe needs $\\frac{3}{4}\\ \\text{cup}$ of flour and $\\frac{2}{3}\\ \\text{cup}$ of sugar. A cook doubles the recipe.",
          parts: [
            { label: "a", prompt: "Find the doubled amounts of flour and sugar.", marks: 3 },
            { label: "b", prompt: "The cook has only $1\\frac{1}{2}\\ \\text{cups}$ of flour. Is it enough? Show working.", marks: 3 },
            { label: "c", prompt: "Total flour needed for the doubled recipe — express as an improper fraction and mixed number.", marks: 1 },
            { label: "d", prompt: "Explain why multiplying by 2 is easier than adding the fraction to itself.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fraction application", statement: "Doubling = multiplying by 2; compare with $\\times$ not addition of wholes." },
            ],
            steps: [
              { part: "a", reasoning: "Flour: $\\frac{3}{4}\\times2=\\frac{6}{4}=1\\frac{1}{2}$ cups.", working: "\\frac{3}{4}\\times2=\\frac{6}{4}=1\\frac{1}{2}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Sugar: $\\frac{2}{3}\\times2=\\frac{4}{3}=1\\frac{1}{3}$ cups.", working: "\\frac{2}{3}\\times2=\\frac{4}{3}=1\\frac{1}{3}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Needs $1\\frac{1}{2}$ cups; has $1\\frac{1}{2}$ — exactly enough.", working: "1\\frac{1}{2} = 1\\frac{1}{2}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Comparison made via common form.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Conclusion correct — exactly enough.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\frac{6}{4}=\\frac{3}{2}=1\\frac{1}{2}$ cups.", working: "\\frac{3}{2}=1\\frac{1}{2}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Multiplication is a single operation; repeated addition risks errors with mixed numbers.", working: "\\times 2 \\text{ vs } + +", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear reasoning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1\\frac{1}{2}$ cups flour, $1\\frac{1}{3}$ cups sugar (b) Yes — exactly enough (c) $\\frac{3}{2}=1\\frac{1}{2}$ cups (d) single operation is safer",
            levels: [
              { level: "Level 2", marks: "2-3", descriptor: "Both doubled amounts correct.", part: "a" },
              { level: "Level 1", marks: "0-1", descriptor: "Errors.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Comparison with working.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Reason explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["In (a) writing $\\frac{6}{4}$ without simplifying to $1\\frac{1}{2}$."],
          },
        },
      ],
    },
    {
      id: "cilm-u1-decimal-division",
      title: "Dividing with decimals and order of operations",
      skill: "Divide decimals accurately, and apply BIDMAS correctly in multi-step calculations.",
      lesson: {
        sections: [
          {
            heading: "Dividing decimals",
            body: "Make the divisor a whole number by multiplying both numbers by a power of 10:\n\n$4.8 \\div 0.6 = 48 \\div 6 = 8$\n\n$2.5 \\div 0.04 = 250 \\div 4 = 62.5$",
          },
          {
            heading: "Order of operations (BIDMAS)",
            body: "**B**rackets → **I**ndices → **D**ivision/**M**ultiplication (left to right) → **A**ddition/**S**ubtraction (left to right).\n\n$3 + 4 \\times 2 = 3 + 8 = 11$, NOT $14$.\n\n$20 - 3 \\times 4 = 20 - 12 = 8$, NOT $68$.",
          },
          {
            heading: "Checking",
            body: "Division can be checked by multiplying back: $8 \\times 0.6 = 4.8$ ✓. For BIDMAS, estimate first: $3 + 4 \\times 2$ is about $3 + 8 = 11$, not $14$.",
          },
        ],
        keyFormulas: [
          { name: "Decimal division", statement: "Multiply both numbers by $10^n$ to make the divisor whole." },
          { name: "BIDMAS", statement: "Brackets, Indices, Division/Multiplication, Addition/Subtraction." },
        ],
        workedExample: {
          problem: "Calculate $3 + 4 \\times 2$ and $18 \\div 0.5$.",
          solution: "$3 + 4 \\times 2 = 3 + 8 = 11$ (multiply before add). $18 \\div 0.5 = 180 \\div 5 = 36$.",
        },
      },
      questions: [
        {
          id: "cilm-u1-dd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Calculate $3 + 4 \\times 2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$14$" },
              { id: "b", text: "$11$" },
              { id: "c", text: "$10$" },
              { id: "d", text: "$24$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "BIDMAS", statement: "Multiplication before addition." },
            ],
            steps: [
              { reasoning: "$4 \\times 2 = 8$ first, then $3 + 8 = 11$.", working: "3 + 8 = 11", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $11$",
            commonErrors: ["Choosing (a) — $(3+4)\\times2=14$ ignores BIDMAS."],
          },
        },
        {
          id: "cilm-u1-dd-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate $4.8 \\div 0.6$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Decimal division", statement: "Scale both numbers to remove the decimal in the divisor." },
            ],
            steps: [
              { reasoning: "Multiply by 10: $48 \\div 6$.", working: "48 \\div 6", marks: 1, markCode: "M" },
              { reasoning: "$=8$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$",
            commonErrors: ["$4.8 \\div 6 = 0.8$ — forgetting to scale the dividend too."],
          },
        },
        {
          id: "cilm-u1-dd-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate $2 + 3 \\times 4 - 6 \\div 2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "BIDMAS", statement: "Division/multiplication before addition/subtraction; same-level ops go left to right." },
            ],
            steps: [
              { reasoning: "$3 \\times 4 = 12$ and $6 \\div 2 = 3$ first.", working: "3\\times4=12;\\ 6\\div2=3", marks: 1, markCode: "M" },
              { reasoning: "Expression becomes $2 + 12 - 3$.", working: "2+12-3", marks: 1, markCode: "M" },
              { reasoning: "Left to right: $2+12=14$, $14-3=11$.", working: "14-3=11", marks: 1, markCode: "M" },
              { reasoning: "Answer: $11$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$11$",
            commonErrors: ["Doing $2+3=5$ first — addition does not come before multiplication."],
          },
        },
        {
          id: "cilm-u1-dd-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A delivery company charges by formula.",
          parts: [
            { label: "a", prompt: "Cost $C = 3 + 2n$ where $n$ is parcels. Find the cost of 5 parcels.", marks: 2 },
            { label: "b", prompt: "Calculate $8.4 \\div 0.7$.", marks: 2 },
            { label: "c", prompt: "Calculate $\\frac{1}{2} + \\frac{1}{3} \\times \\frac{1}{4}$ — careful with order.", marks: 3 },
            { label: "d", prompt: "Explain why $\\frac{1}{2} + \\frac{1}{3} \\times \\frac{1}{4} \\ne \\left(\\frac{1}{2}+\\frac{1}{3}\\right)\\times\\frac{1}{4}$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Order of operations", statement: "Multiplication/division before addition/subtraction, always." },
            ],
            steps: [
              { part: "a", reasoning: "$C = 3 + 2(5) = 3 + 10 = 13$.", working: "3+2\\times5=13", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$\\pounds13$ (or 13 units).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$8.4 \\div 0.7 = 84 \\div 7 = 12$.", working: "84 \\div 7 = 12", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "First $\\frac{1}{3}\\times\\frac{1}{4}=\\frac{1}{12}$; then $\\frac{1}{2}+\\frac{1}{12}=\\frac{7}{12}$.", working: "\\frac{1}{3}\\times\\frac{1}{4}=\\frac{1}{12};\\ \\frac{6}{12}+\\frac{1}{12}=\\frac{7}{12}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Multiplication done before addition.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Final answer correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Without brackets, multiplication binds tighter; brackets force the addition first.", working: "\\times \\text{ before } +", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $13$ (b) $12$ (c) $\\frac{7}{12}$ (d) multiplication before addition unless brackets",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Cost correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Division correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Order of operations applied.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "BIDMAS explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["In (c) adding first: $\\frac{1}{2}+\\frac{1}{3}=\\frac{5}{6}$, then $\\times\\frac{1}{4}=\\frac{5}{24}$ — wrong order."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u1-ops-notes",
      title: "Fraction and decimal operations — revision notes",
      summary: "Adding, subtracting, multiplying fractions; decimal division; BIDMAS.",
      sections: [
        {
          heading: "Fractions",
          body: "Add/subtract: common denominator first. Multiply: numerators and denominators, cancel first. Mixed numbers: convert to improper fractions first.",
        },
        {
          heading: "Decimals",
          body: "Division: scale both numbers so the divisor is whole — $4.8 \\div 0.6 = 48 \\div 6 = 8$.",
        },
        {
          heading: "BIDMAS",
          body: "Brackets → Indices → Division/Multiplication → Addition/Subtraction. Same level = left to right. $3 + 4 \\times 2 = 11$, not $14$.",
        },
      ],
    },
  ],
};
