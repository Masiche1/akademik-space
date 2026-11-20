import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "cilm-u1-lesson-1-2",
  code: "1-2",
  title: "Fractions, decimals and percentages",
  goal: "I CAN convert between fractions, decimals and percentages, and calculate with them confidently.",
  standards: ["0862 Number: fractions, decimals, percentages"],
  vocabulary: [
    { term: "Equivalent fractions", definition: "Fractions with the same value, e.g. $\\frac{1}{2}=\\frac{2}{4}=\\frac{5}{10}$." },
    { term: "Simplifying", definition: "Writing a fraction in its lowest terms by dividing top and bottom by the HCF." },
    { term: "Terminating decimal", definition: "A decimal that ends, e.g. $0.75$ — always converts to a fraction with denominator $10, 100, 1000, \\ldots$" },
    { term: "Percentage", definition: "'Per hundred' — $35\\% = \\frac{35}{100} = 0.35$." },
    { term: "Of", definition: "In maths, 'of' usually means multiply — $20\\%$ of $80 = 0.2 \\times 80 = 16$." },
    { term: "Percentage change", definition: "The change expressed as a percentage of the original: $\\frac{\\text{change}}{\\text{original}} \\times 100\\%$." },
  ],
  concepts: [
    {
      id: "cilm-u1-fdp-conversions",
      title: "Converting between fractions, decimals and percentages",
      skill: "Convert accurately in all directions using division and multiplication by 100.",
      lesson: {
        sections: [
          {
            heading: "The conversion triangle",
            body: "- **Fraction → decimal**: divide numerator by denominator. $\\frac{3}{8}=3\\div8=0.375$.\n- **Decimal → fraction**: write over powers of 10 and simplify. $0.45=\\frac{45}{100}=\\frac{9}{20}$.\n- **Percentage → decimal**: divide by 100. $45\\%=0.45$.\n- **Decimal → percentage**: multiply by 100. $0.45=45\\%$.\n- **Fraction → percentage**: convert to decimal first, then $\\times100$. $\\frac{3}{8}=0.375=37.5\\%$.",
          },
          {
            heading: "Recurring decimals",
            body: "$\\frac{1}{3}=0.333\\ldots$ — write as $0.\\dot{3}$ or $0.3$ with a bar. To convert back, use algebra: $x=0.\\dot{3}$, $10x=3.333\\ldots$, $9x=3$, $x=\\frac{1}{3}$.",
          },
          {
            heading: "Choosing the best form",
            body: "- Comparisons: percentages or decimals are easier than fractions.\n- Exact answers: keep fractions ($\\frac{1}{3}$ is exact; $0.33$ is not).\n- Real contexts: percentages for discounts, decimals for money.",
          },
        ],
        keyFormulas: [
          { name: "Conversion", statement: "Fraction $\\to$ decimal: divide. Decimal $\\to$ percentage: $\\times 100$. Percentage $\\to$ decimal: $\\div 100$." },
        ],
        workedExample: {
          problem: "Write $\\frac{5}{12}$ as a decimal and a percentage.",
          solution: "$5 \\div 12 = 0.41666\\ldots = 0.41\\dot{6}$. As a percentage: $\\times 100 = 41.6\\dot{6}\\% \\approx 41.7\\%$.",
        },
      },
      questions: [
        {
          id: "cilm-u1-conv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write $0.35$ as a fraction in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{35}{10}$" },
              { id: "b", text: "$\\frac{7}{20}$" },
              { id: "c", text: "$\\frac{35}{100}$" },
              { id: "d", text: "$\\frac{3}{5}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Decimal to fraction", statement: "$0.35=\\frac{35}{100}$, simplify by HCF $5$." },
            ],
            steps: [
              { reasoning: "$0.35=\\frac{35}{100}=\\frac{7}{20}$.", working: "\\frac{35}{100}=\\frac{7}{20}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$\\frac{7}{20}$",
            commonErrors: ["Choosing (c) — correct but not simplified; simplest form divides by HCF."],
          },
        },
        {
          id: "cilm-u1-conv-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write $\\frac{3}{8}$ as a percentage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Fraction to percentage", statement: "Divide to get decimal, then multiply by 100." },
            ],
            steps: [
              { reasoning: "$3 \\div 8 = 0.375$.", working: "3 \\div 8 = 0.375", marks: 1, markCode: "M" },
              { reasoning: "$0.375 \\times 100 = 37.5\\%$.", working: "\\times 100 = 37.5\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$37.5\\%$",
            commonErrors: ["Writing $0.375\\%$ — forget the $\\times 100$ step."],
          },
        },
        {
          id: "cilm-u1-conv-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Arrange in order from smallest to largest: $\\frac{2}{3}$, $0.66$, $65\\%$, $\\frac{13}{20}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparing forms", statement: "Convert all to the same form — decimals or percentages — then compare." },
            ],
            steps: [
              { reasoning: "Convert: $\\frac{2}{3}=0.666\\ldots$, $0.66=0.66$, $65\\%=0.65$, $\\frac{13}{20}=0.65$.", working: "0.666.., 0.66, 0.65, 0.65", marks: 1, markCode: "M" },
              { reasoning: "Note $65\\%$ and $\\frac{13}{20}$ are equal.", working: "65\\% = \\frac{13}{20}", marks: 1, markCode: "M" },
              { reasoning: "Order: $0.65, 0.65, 0.66, 0.666\\ldots$.", working: "\\text{ascending}", marks: 1, markCode: "M" },
              { reasoning: "In original forms: $65\\% = \\frac{13}{20} < 0.66 < \\frac{2}{3}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$65\\% = \\frac{13}{20},\\ 0.66,\\ \\frac{2}{3}$",
            commonErrors: ["Comparing $\\frac{2}{3}$ and $0.66$ by numerator/denominator — convert to decimals first."],
          },
        },
        {
          id: "cilm-u1-conv-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A shop offers three discount vouchers.",
          parts: [
            { label: "a", prompt: "Voucher A: $\\frac{1}{4}$ off. Convert to a percentage.", marks: 2 },
            { label: "b", prompt: "Voucher B: $0.3$ off as a fraction. Simplify.", marks: 2 },
            { label: "c", prompt: "Voucher C: $35\\%$ off. Convert to a decimal.", marks: 1 },
            { label: "d", prompt: "Which voucher gives the biggest discount? Justify.", marks: 2 },
            { label: "e", prompt: "A $\\pounds80$ item uses voucher B. Calculate the sale price.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Percentage application", statement: "Convert all to percentages for comparison; multiply by decimal for discount." },
            ],
            steps: [
              { part: "a", reasoning: "$\\frac{1}{4}=0.25=25\\%$.", working: "\\frac{1}{4}=25\\%", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$0.3=\\frac{30}{100}=\\frac{3}{10}$.", working: "\\frac{3}{10}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplified correctly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$35\\%=0.35$.", working: "0.35", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Compare $25\\%, 30\\%, 35\\%$ — C is biggest.", working: "35\\% > 30\\% > 25\\%", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Justification uses converted values.", marks: 1, markCode: "A" },
              { part: "e", reasoning: "$30\\%$ of $80 = 0.3 \\times 80 = 24$; sale price $=80-24=\\pounds56$.", working: "0.3 \\times 80 = 24;\\ 80-24=56", marks: 1, markCode: "M" },
              { part: "e", reasoning: "$\\pounds56$ correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $25\\%$ (b) $\\frac{3}{10}$ (c) $0.35$ (d) Voucher C — $35\\%$ is largest (e) $\\pounds56$",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Conversions correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Simplified correctly.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Comparison justified.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong choice.", part: "d" },
              { level: "Level 2", marks: "1-2", descriptor: "Sale price correct.", part: "e" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "e" },
            ],
            commonErrors: ["In (e) giving the discount ($\\pounds24$) instead of the sale price ($\\pounds56$)."],
          },
        },
      ],
    },
    {
      id: "cilm-u1-percentage-change",
      title: "Percentage change",
      skill: "Calculate percentage increase, decrease and reverse percentages.",
      lesson: {
        sections: [
          {
            heading: "Percentage change",
            body: "$$\\text{Percentage change} = \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$$\n\nIncrease: result positive. Decrease: result negative — report as a decrease. Always divide by the **original** value.",
          },
          {
            heading: "Reverse percentages",
            body: "If a price rises $20\\%$ to $\\pounds60$, the original was NOT $\\pounds48$ — solve: original $\\times 1.2 = 60$, so original $= 60 \\div 1.2 = \\pounds50$. The multiplier is $1 + \\frac{\\text{\\%}}{100}$ for increase, $1 - \\frac{\\text{\\%}}{100}$ for decrease.",
          },
          {
            heading: "Multiplier method",
            body: "- Increase by $15\\%$: multiply by $1.15$.\n- Decrease by $30\\%$: multiply by $0.70$.\n- Successive changes multiply the multipliers: $\\times1.1$ then $\\times0.9$.",
          },
        ],
        keyFormulas: [
          { name: "Percentage change", statement: "$\\frac{\\text{change}}{\\text{original}} \\times 100\\%$" },
          { name: "Multiplier", statement: "Increase by $r\\%$: $\\times(1+\\frac{r}{100})$. Decrease by $r\\%$: $\\times(1-\\frac{r}{100})$." },
        ],
        workedExample: {
          problem: "A phone costs $\\pounds240$. Its price increases by $15\\%$. Find the new price.",
          solution: "Multiplier $=1.15$. New price $=240 \\times 1.15 = \\pounds276$.",
        },
      },
      questions: [
        {
          id: "cilm-u1-pc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A price rises from $\\pounds50$ to $\\pounds60$. What is the percentage increase?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$10\\%$" },
              { id: "b", text: "$20\\%$" },
              { id: "c", text: "$25\\%$" },
              { id: "d", text: "$16.7\\%$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Percentage change", statement: "$\\frac{60-50}{50}\\times100\\%=20\\%$." },
            ],
            steps: [
              { reasoning: "Change $=10$; $\\frac{10}{50}\\times100=20\\%$.", working: "\\frac{10}{50}=0.2=20\\%", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $20\\%$",
            commonErrors: ["Choosing (d) — that divides by the NEW price $60$, not the original $50$."],
          },
        },
        {
          id: "cilm-u1-pc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A jacket priced at $\\pounds80$ is reduced by $25\\%$. Find the sale price.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Multiplier", statement: "Decrease by $25\\%$ → multiply by $0.75$." },
            ],
            steps: [
              { reasoning: "Multiplier $=1-0.25=0.75$.", working: "\\times 0.75", marks: 1, markCode: "M" },
              { reasoning: "Sale price $=80 \\times 0.75 = \\pounds60$.", working: "80 \\times 0.75 = 60", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds60$",
            commonErrors: ["Finding the discount ($\\pounds20$) and stopping — the question asks for the sale price."],
          },
        },
        {
          id: "cilm-u1-pc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "After a $20\\%$ increase, a bicycle costs $\\pounds180$. What was the original price?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reverse percentage", statement: "Divide by the multiplier $1.2$, not subtract $20\\%$ of $180$." },
            ],
            steps: [
              { reasoning: "New price $=$ original $\\times 1.2 = 180$.", working: "\\text{orig} \\times 1.2 = 180", marks: 1, markCode: "M" },
              { reasoning: "Original $=180 \\div 1.2 = \\pounds150$.", working: "180 \\div 1.2 = 150", marks: 1, markCode: "M" },
              { reasoning: "Check: $150 \\times 1.2 = 180$ ✓ and increase is $\\pounds30 = 20\\%$ of $150$.", marks: 1, markCode: "M" },
              { reasoning: "Common wrong answer $\\pounds144$ comes from subtracting $20\\%$ of $180$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds150$",
            commonErrors: ["$180 \\times 0.8 = 144$ — the percentage applies to the ORIGINAL, not the new price."],
          },
        },
        {
          id: "cilm-u1-pc-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A shop runs two successive sales on a $\\pounds200$ coat.",
          parts: [
            { label: "a", prompt: "Price drops $10\\%$ in the first sale. Find the intermediate price.", marks: 2 },
            { label: "b", prompt: "The second sale takes $15\\%$ off the intermediate price. Find the final price.", marks: 2 },
            { label: "c", prompt: "Calculate the overall percentage decrease.", marks: 3 },
            { label: "d", prompt: "Explain why the overall decrease is not $25\\%$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Successive percentages", statement: "Apply multipliers in sequence; overall multiplier is the product." },
            ],
            steps: [
              { part: "a", reasoning: "$200 \\times 0.9 = \\pounds180$.", working: "\\times 0.9 = 180", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$180 \\times 0.85 = \\pounds153$.", working: "\\times 0.85 = 153", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Overall multiplier $=0.9 \\times 0.85 = 0.765$.", working: "0.9 \\times 0.85 = 0.765", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Overall decrease $=1-0.765=0.235=23.5\\%$.", working: "1-0.765 = 0.235", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct percentage.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The second $15\\%$ applies to $180$, not the original $200$ — percentages don't add.", working: "\\text{not additive}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\pounds180$ (b) $\\pounds153$ (c) $23.5\\%$ decrease (d) second percentage applies to reduced price, so they don't add",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Intermediate price correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Final price correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Overall percentage correct via multipliers.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Non-additivity explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["In (d) saying 'percentages never add' — they CAN add when applied to the same base."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u1-fdp-notes",
      title: "Fractions, decimals and percentages — revision notes",
      summary: "Conversions, percentage change, multipliers and reverse percentages.",
      sections: [
        {
          heading: "Conversions",
          body: "Fraction $\\to$ decimal: divide. Decimal $\\to$ percentage: $\\times 100$. Percentage $\\to$ decimal: $\\div 100$. Keep exact fractions where possible.",
        },
        {
          heading: "Percentage change",
          body: "$\\frac{\\text{change}}{\\text{original}} \\times 100\\%$. Multiplier for increase by $r\\%$ is $1+\\frac{r}{100}$; decrease is $1-\\frac{r}{100}$. Successive changes multiply.",
        },
        {
          heading: "Reverse percentages",
          body: "Divide by the multiplier — e.g. after $20\\%$ increase, original $=$ new $\\div 1.2$, NOT new $\\times 0.8$.",
        },
      ],
    },
  ],
};
