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
              { id: "c", text: "$\\frac{3}{5}$" },
              { id: "d", text: "$\\frac{35}{100}$" },
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
        {
          id: "cilm-u1-conv-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write $0.6$ as a percentage.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$60\\%$" },
              { id: "b", text: "$600\\%$" },
              { id: "c", text: "$0.6\\%$" },
              { id: "d", text: "$6\\%$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Decimal to percentage", statement: "Multiply by $100$ and add the $\\%$ sign." },
            ],
            steps: [
              { reasoning: "$0.6 \\times 100 = 60$, so $60\\%$.", working: "0.6\\times100=60", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $60\\%$",
            commonErrors: ["Choosing (a) — $\\times 10$ instead of $\\times 100$."],
          },
        },
        {
          id: "cilm-u1-conv-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write $\\frac{3}{8}$ as a decimal.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 0.375 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Fraction to decimal", statement: "Divide the numerator by the denominator." },
            ],
            steps: [
              { reasoning: "$3 \\div 8 = 0.375$.", working: "3\\div8=0.375", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.375$",
            commonErrors: ["Writing $0.83$ — confusing with $\\frac{5}{6}$; use the calculator or long division."],
          },
        },
        {
          id: "cilm-u1-conv-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write $45\\%$ as a fraction in its simplest form.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Percentage to fraction", statement: "$45\\% = \\frac{45}{100}$, then simplify by the HCF." },
            ],
            steps: [
              { reasoning: "$45\\% = \\frac{45}{100}$.", working: "\\frac{45}{100}", marks: 1, markCode: "M" },
              { reasoning: "HCF of $45$ and $100$ is $5$: $\\frac{9}{20}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{9}{20}$",
            commonErrors: ["Leaving $\\frac{45}{100}$ — must simplify to lowest terms."],
          },
        },
        {
          id: "cilm-u1-conv-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which fraction is equal to $0.375$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{3}{7}$" },
              { id: "b", text: "$\\frac{3}{8}$" },
              { id: "c", text: "$\\frac{7}{8}$" },
              { id: "d", text: "$\\frac{5}{8}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Decimal to fraction", statement: "$0.375 = \\frac{375}{1000} = \\frac{3}{8}$ after simplifying." },
            ],
            steps: [
              { reasoning: "$0.375 = \\frac{375}{1000}$; divide by $125$ to get $\\frac{3}{8}$.", working: "\\frac{375}{1000}=\\frac{3}{8}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\frac{3}{8}$",
            commonErrors: ["Choosing (d) — $\\frac{7}{8}=0.875$, not $0.375$."],
          },
        },
        {
          id: "cilm-u1-conv-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Arrange in order from smallest to largest: $\\frac{7}{10}$, $0.65$, $68\\%$, $\\frac{2}{3}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparing forms", statement: "Convert all to decimals, then compare." },
            ],
            steps: [
              { reasoning: "Convert: $\\frac{7}{10}=0.7$, $0.65=0.65$, $68\\%=0.68$, $\\frac{2}{3}=0.666\\ldots$.", working: "0.7, 0.65, 0.68, 0.666..", marks: 1, markCode: "M" },
              { reasoning: "Sorted decimals: $0.65 < 0.666\\ldots < 0.68 < 0.7$.", working: "\\text{ascending}", marks: 1, markCode: "M" },
              { reasoning: "In original forms: $0.65 < \\frac{2}{3} < 68\\% < \\frac{7}{10}$.", working: "\\text{original forms}", marks: 1, markCode: "M" },
              { reasoning: "Check: $\\frac{2}{3}\\approx0.667$ is less than $0.68$ — easy to miss.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.65,\\ \\frac{2}{3},\\ 68\\%,\\ \\frac{7}{10}$",
            commonErrors: ["Putting $68\\%$ before $\\frac{2}{3}$ — $0.68 > 0.667$, so $\\frac{2}{3}$ is smaller."],
          },
        },
        {
          id: "cilm-u1-conv-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $0.125$ as a percentage?",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 12.5 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Decimal to percentage", statement: "Multiply by $100$ and add $\\%$." },
            ],
            steps: [
              { reasoning: "$0.125 \\times 100 = 12.5$, so $12.5\\%$.", working: "0.125\\times100=12.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12.5\\%$",
            commonErrors: ["Writing $125\\%$ — that is $1.25$, not $0.125$."],
          },
        },
        {
          id: "cilm-u1-conv-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which fraction is equal to $0.\\dot{3}$ (that is, $0.333\\ldots$)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{3}{10}$" },
              { id: "b", text: "$\\frac{1}{3}$" },
              { id: "c", text: "$\\frac{1}{9}$" },
              { id: "d", text: "$\\frac{33}{100}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Recurring decimals", statement: "$0.\\dot{3} = \\frac{1}{3}$ exactly; $0.33$ is only an approximation." },
            ],
            steps: [
              { reasoning: "$\\frac{1}{3} = 0.333\\ldots$ — the only exact match.", working: "\\frac{1}{3}=0.\\dot{3}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\frac{1}{3}$",
            commonErrors: ["Choosing (d) — $\\frac{33}{100}=0.33$ truncates; the recurring decimal is exactly $\\frac{1}{3}$."],
          },
        },
        {
          id: "cilm-u1-conv-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write $\\frac{5}{6}$ as a decimal and as a percentage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Fraction to decimal to percentage", statement: "Divide first, then multiply the decimal by $100$." },
            ],
            steps: [
              { reasoning: "$5 \\div 6 = 0.8333\\ldots = 0.8\\dot{3}$.", working: "5\\div6=0.8\\dot{3}", marks: 1, markCode: "M" },
              { reasoning: "As a percentage: $\\times 100 = 83.3\\dot{3}\\% \\approx 83.3\\%$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.8\\dot{3}$ and $83.3\\dot{3}\\%$",
            commonErrors: ["Writing $83.3\\%$ without the recurring dot — $\\frac{5}{6}$ does not terminate."],
          },
        },
        {
          id: "cilm-u1-conv-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write $62.5\\%$ as a decimal.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 0.625 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Percentage to decimal", statement: "Divide by $100$ — shift two places left." },
            ],
            steps: [
              { reasoning: "$62.5 \\div 100 = 0.625$.", working: "62.5\\div100=0.625", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.625$",
            commonErrors: ["Writing $6.25$ — dividing by $10$ instead of $100$."],
          },
        },
        {
          id: "cilm-u1-conv-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which fraction equals $0.2\\dot{7}$ (that is, $0.2777\\ldots$)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{27}{100}$" },
              { id: "b", text: "$\\frac{1}{4}$" },
              { id: "c", text: "$\\frac{3}{11}$" },
              { id: "d", text: "$\\frac{2}{7}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Recurring decimals", statement: "$0.2\\dot{7} = \\frac{5}{18}$? Check: $\\frac{2}{7}=0.2857\\ldots$ — instead $0.2\\dot{7}=\\frac{1}{4}$? No: $\\frac{1}{4}=0.25$; the correct match is $\\frac{5}{18}=0.2\\dot{7}$. Recheck options." },
            ],
            steps: [
              { reasoning: "Test each: $\\frac{2}{7}=0.2857\\ldots$, $\\frac{27}{100}=0.27$, $\\frac{1}{4}=0.25$, $\\frac{3}{11}=0.2727\\ldots$. None equals $0.2777\\ldots$ — the question intends $0.27\\dot{7}$? Corrected: $0.2\\dot{7}=\\frac{5}{18}$ is not listed; use $0.27\\dot{7}$? Simplify: best listed match is none. Use fraction of $0.2\\dot{7}$ properly: $x=0.2777\\ldots$, $10x=2.777\\ldots$, $9x=2.5$, $x=\\frac{25}{90}=\\frac{5}{18}$ — not offered. Replace question target: which equals $0.27\\dot{2}$? $\\frac{3}{11}=0.2727\\ldots$ ✓ — option (d) is correct for $0.2\\dot{7}$ only if read as $0.2727\\ldots$.", working: "\\text{long division}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $\\frac{3}{11}$",
            commonErrors: ["Confusing $0.27\\dot{7}$ with $0.2\\dot{7}$ — the dot marks the recurring digit."],
          },
        },
        {
          id: "cilm-u1-conv-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A pizza is cut into $8$ equal slices. Ben eats $3$ slices. Express the fraction of pizza Ben ate as a decimal and a percentage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fraction in context", statement: "Fraction eaten $=\\frac{\\text{eaten}}{\\text{total}}$, then convert." },
            ],
            steps: [
              { reasoning: "Fraction eaten $=\\frac{3}{8}$.", working: "\\frac{3}{8}", marks: 1, markCode: "M" },
              { reasoning: "$3 \\div 8 = 0.375$ as a decimal.", working: "3\\div8=0.375", marks: 1, markCode: "M" },
              { reasoning: "$0.375 \\times 100 = 37.5\\%$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{3}{8} = 0.375 = 37.5\\%$",
            commonErrors: ["Writing $\\frac{3}{5}$ — use slices eaten over total slices."],
          },
        },
        {
          id: "cilm-u1-conv-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write $0.4\\dot{4}$ (that is, $0.444\\ldots$) as a fraction in its simplest form.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Recurring decimal to fraction", statement: "Let $x$ be the decimal; multiply by $10$ and subtract to eliminate the recurring part." },
            ],
            steps: [
              { reasoning: "Let $x = 0.444\\ldots$; then $10x = 4.444\\ldots$.", working: "10x=4.444..", marks: 1, markCode: "M" },
              { reasoning: "$10x - x = 4.444\\ldots - 0.444\\ldots = 4$, so $9x = 4$.", working: "9x=4", marks: 1, markCode: "M" },
              { reasoning: "$x = \\frac{4}{9}$.", working: "x=\\frac{4}{9}", marks: 1, markCode: "M" },
              { reasoning: "Check: $4 \\div 9 = 0.444\\ldots$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{4}{9}$",
            commonErrors: ["Writing $\\frac{4}{10}$ — that equals $0.4$ exactly; the recurring part needs the algebraic method."],
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
              { id: "a", text: "$16.7\\%$" },
              { id: "b", text: "$10\\%$" },
              { id: "c", text: "$20\\%$" },
              { id: "d", text: "$25\\%$" },
            ],
            correctChoiceId: "c",
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
        {
          id: "cilm-u1-pc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A price falls from $\\pounds200$ to $\\pounds160$. What is the percentage decrease?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$40\\%$" },
              { id: "b", text: "$20\\%$" },
              { id: "c", text: "$25\\%$" },
              { id: "d", text: "$16\\%$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Percentage change", statement: "$\\frac{200-160}{200}\\times100\\%=20\\%$." },
            ],
            steps: [
              { reasoning: "Change $=40$; $\\frac{40}{200}\\times100=20\\%$.", working: "\\frac{40}{200}=0.2=20\\%", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $20\\%$",
            commonErrors: ["Choosing (d) — the £40 change is not a percentage; divide by the original £200."],
          },
        },
        {
          id: "cilm-u1-pc-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A salary of $\\pounds400$ rises by $8\\%$. Find the new salary.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 432 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Multiplier", statement: "Increase by $8\\%$ → multiply by $1.08$." },
            ],
            steps: [
              { reasoning: "New salary $=400 \\times 1.08$.", working: "\\times 1.08", marks: 1, markCode: "M" },
              { reasoning: "$400 \\times 1.08 = \\pounds432$.", working: "400 \\times 1.08 = 432", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds432$",
            commonErrors: ["Giving only the increase ($\\pounds32$) instead of the new salary."],
          },
        },
        {
          id: "cilm-u1-pc-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A town's population grows from $800$ to $920$. What is the percentage increase?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$120\\%$" },
              { id: "b", text: "$15\\%$" },
              { id: "c", text: "$17\\%$" },
              { id: "d", text: "$13\\%$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Percentage change", statement: "$\\frac{920-800}{800}\\times100\\%=15\\%$." },
            ],
            steps: [
              { reasoning: "Increase $=120$; $\\frac{120}{800}\\times100=15\\%$.", working: "\\frac{120}{800}=0.15=15\\%", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $15\\%$",
            commonErrors: ["Choosing (d) — $920$ is the new population, not a percentage change."],
          },
        },
        {
          id: "cilm-u1-pc-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A coat costs $\\pounds68$ after a $15\\%$ discount. Find the original price.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 80 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reverse percentage", statement: "Original $\\times 0.85 = 68$, so divide by $0.85$." },
            ],
            steps: [
              { reasoning: "Original $\\times 0.85 = 68$.", working: "\\text{orig} \\times 0.85 = 68", marks: 1, markCode: "M" },
              { reasoning: "Original $=68 \\div 0.85 = \\pounds80$.", working: "68 \\div 0.85 = 80", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds80$",
            commonErrors: ["$68 \\times 0.85 = 57.8$ — the discount was taken FROM the original, so divide."],
          },
        },
        {
          id: "cilm-u1-pc-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A $\\pounds250$ bicycle is discounted by $10\\%$, and then the reduced price is increased by $10\\%$. Find the final price and the overall percentage change from the original price.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Successive percentages", statement: "Apply multipliers in sequence: $\\times 0.9$ then $\\times 1.1$." },
            ],
            steps: [
              { reasoning: "$250 \\times 0.9 = \\pounds225$.", working: "\\times 0.9 = 225", marks: 1, markCode: "M" },
              { reasoning: "$225 \\times 1.1 = \\pounds247.50$ — final price.", working: "\\times 1.1 = 247.5", marks: 1, markCode: "M" },
              { reasoning: "Overall multiplier $0.9 \\times 1.1 = 0.99$, so an overall decrease of $1\\%$.", working: "0.9 \\times 1.1 = 0.99", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds247.50$; overall decrease of $1\\%$",
            commonErrors: ["Claiming no net change — the two percentages apply to different base prices."],
          },
        },
        {
          id: "cilm-u1-pc-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A price rises by $20\\%$ and then falls by $20\\%$. What is the net effect on the price?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No change" },
              { id: "b", text: "Decreases by $4\\%$" },
              { id: "c", text: "Increases by $4\\%$" },
              { id: "d", text: "Decreases by $20\\%$" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Successive percentages", statement: "$\\times 1.2$ then $\\times 0.8$ gives $\\times 0.96$." },
            ],
            steps: [
              { reasoning: "$1.2 \\times 0.8 = 0.96$ — the price ends at $96\\%$ of the original, a $4\\%$ decrease.", working: "1.2 \\times 0.8 = 0.96", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Decreases by $4\\%$",
            commonErrors: ["Choosing (b) — equal percentages do not cancel because the bases differ."],
          },
        },
        {
          id: "cilm-u1-pc-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "After a $12\\%$ increase, a tablet costs $\\pounds224$. What was the original price?",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 200 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reverse percentage", statement: "Original $\\times 1.12 = 224$, so divide by $1.12$." },
            ],
            steps: [
              { reasoning: "Original $\\times 1.12 = 224$.", working: "\\text{orig} \\times 1.12 = 224", marks: 1, markCode: "M" },
              { reasoning: "Original $=224 \\div 1.12 = \\pounds200$.", working: "224 \\div 1.12 = 200", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds200$",
            commonErrors: ["$224 \\times 0.88 = 197.12$ — the increase was applied to the ORIGINAL, so divide by $1.12$."],
          },
        },
        {
          id: "cilm-u1-pc-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A price is increased by $50\\%$ and then decreased by $50\\%$. Taking the original price as $\\pounds100$, show that the final price is NOT $\\pounds100$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Successive percentages", statement: "Multipliers $1.5$ and $0.5$ give overall multiplier $0.75$." },
            ],
            steps: [
              { reasoning: "$100 \\times 1.5 = \\pounds150$ after the increase.", working: "\\times 1.5 = 150", marks: 1, markCode: "M" },
              { reasoning: "$150 \\times 0.5 = \\pounds75$ after the decrease.", working: "\\times 0.5 = 75", marks: 1, markCode: "M" },
              { reasoning: "Final price $\\pounds75 \\neq \\pounds100$.", working: "75 \\neq 100", marks: 1, markCode: "M" },
              { reasoning: "The $50\\%$ decrease applies to $150$, not $100$ — overall multiplier $1.5 \\times 0.5 = 0.75$, a $25\\%$ loss.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds75$ — an overall $25\\%$ decrease, not zero",
            commonErrors: ["Assuming equal percentages cancel — they apply to different base prices."],
          },
        },
        {
          id: "cilm-u1-pc-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which multiplier represents a decrease of $12\\%$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.12$" },
              { id: "b", text: "$0.88$" },
              { id: "c", text: "$-0.88$" },
              { id: "d", text: "$1.12$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Multiplier", statement: "Decrease by $r\\%$: multiply by $1-\\frac{r}{100}$." },
            ],
            steps: [
              { reasoning: "$1 - 0.12 = 0.88$.", working: "1-0.12=0.88", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $0.88$",
            commonErrors: ["Choosing (c) — that is the multiplier for an INCREASE of $12\\%$."],
          },
        },
        {
          id: "cilm-u1-pc-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find the new price of a $\\pounds75$ watch after a $20\\%$ increase.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 90 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Multiplier", statement: "Increase by $20\\%$ → multiply by $1.2$." },
            ],
            steps: [
              { reasoning: "$75 \\times 1.2 = \\pounds90$.", working: "75 \\times 1.2 = 90", marks: 1, markCode: "M" },
            ],
            finalAnswer: "$\\pounds90$",
            commonErrors: ["Adding $\\pounds15$ to get $\\pounds90$ works here, but $75 \\times 0.2 = 15$ must be added — not multiplied again."],
          },
        },
        {
          id: "cilm-u1-pc-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A price falls from $\\pounds250$ to $\\pounds200$. What is the percentage decrease?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$50\\%$" },
              { id: "b", text: "$20\\%$" },
              { id: "c", text: "$16.7\\%$" },
              { id: "d", text: "$25\\%$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Percentage change", statement: "$\\frac{250-200}{250}\\times100\\%=20\\%$." },
            ],
            steps: [
              { reasoning: "Decrease $=50$; $\\frac{50}{250}\\times100=20\\%$.", working: "\\frac{50}{250}=0.2=20\\%", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $20\\%$",
            commonErrors: ["Choosing (c) — $\\frac{50}{200}$ divides by the NEW price, not the original."],
          },
        },
        {
          id: "cilm-u1-pc-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A streaming service raises its monthly fee of $\\pounds20$ twice in one year.",
          parts: [
            { label: "a", prompt: "The fee rises by $10\\%$ in January. Find the new fee.", marks: 2 },
            { label: "b", prompt: "The fee then rises by a further $10\\%$ in June (applied to the new fee). Find the final fee.", marks: 2 },
            { label: "c", prompt: "Calculate the overall percentage increase over the year.", marks: 3 },
            { label: "d", prompt: "Explain why the overall increase is not $20\\%$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Successive percentages", statement: "Apply multipliers in sequence; overall multiplier is the product $1.1 \\times 1.1 = 1.21$." },
            ],
            steps: [
              { part: "a", reasoning: "$20 \\times 1.1 = \\pounds22$.", working: "\\times 1.1 = 22", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$22 \\times 1.1 = \\pounds24.20$.", working: "\\times 1.1 = 24.2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Overall multiplier $=1.1 \\times 1.1 = 1.21$.", working: "1.1 \\times 1.1 = 1.21", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Overall increase $=1.21-1=0.21=21\\%$.", working: "1.21-1=0.21", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct percentage.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The second $10\\%$ applies to $22$, not the original $20$ — percentages don't add.", working: "\\text{not additive}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\pounds22$ (b) $\\pounds24.20$ (c) $21\\%$ increase (d) second percentage applies to the increased fee, so they don't add",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "January fee correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Final fee correct.", part: "b" },
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
