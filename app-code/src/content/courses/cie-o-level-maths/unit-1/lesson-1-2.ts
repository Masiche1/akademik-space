import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "olm-u1-lesson-1-2",
  code: "1-2",
  title: "Fractions, Decimals and Percentages",
  goal: "I CAN convert between fractions, decimals and percentages and apply percentage change.",
  standards: ["4024: number"],
  vocabulary: [
    { term: "Percentage", definition: "Parts per hundred; $1\\%=\\frac1{100}=0.01$." },
    { term: "Percentage change", definition: "$\\frac{\\text{change}}{\\text{original}}\\times100\\%$." },
    { term: "Multiplier", definition: "Factor for percentage change: increase by $r\\%$ → $\\times(1+\\frac r{100})$." },
    { term: "Recurring decimal", definition: "Decimal with repeating digits, e.g. $0.\\dot{3}$." },
  ],
  concepts: [
    {
      id: "olm-u1-s2-convert",
      title: "Converting between forms",
      skill: "Convert fractions, decimals and percentages at O Level.",
      lesson: {
        sections: [
          { heading: "The conversions", body: "Fraction → decimal: divide numerator by denominator ($\\frac58=0.625$). Decimal → fraction: write as tenths/hundredths etc. and simplify ($0.625=\\frac{625}{1000}=\\frac58$). Decimal → percentage: multiply by 100 ($0.625=62.5\\%$). Percentage → decimal: divide by 100 ($62.5\\%=0.625$). Percentage → fraction: divide by 100 and simplify ($62.5\\%=\\frac{62.5}{100}=\\frac58$)." },
          { heading: "Recurring decimals", body: "Recurring decimals like $0.\\dot{3}$ or $0.\\dot{1}\\dot{6}$ convert to fractions by the 'let $x=$' method: set $x$ equal to the decimal, multiply by a power of 10 to align the recurring part, subtract, and solve. For $0.\\dot{3}$: $10x-x=3$ gives $x=\\frac13$. For two-digit repeats like $0.\\dot{1}\\dot{6}$ use $100x-x$ after one-step shifting first." },
        ],
        keyFormulas: [
          { name: "Percentage", statement: "$\\% = \\times100$ from decimal; $\\div100$ to decimal" },
          { name: "Recurring", statement: "Let $x=$ decimal; align and subtract" },
        ],
        workedExample: { problem: "Convert $0.\\dot{4}\\dot{5}$ to a fraction.", solution: "$x=0.454545\\ldots$; $100x=45.4545\\ldots$; subtract: $99x=45$ → $x=\\frac{45}{99}=\\frac{5}{11}$. Check: $\\frac5{11}=0.454545\\ldots$ ✓." },
      },
      questions: [
        {
          id: "olm-u1-s2-co-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$0.375$ as a percentage is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "3.75%" },
            { id: "b", text: "0.375%" },
            { id: "c", text: "375%" },
            { id: "d", text: "37.5%" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Decimal to %", statement: "×100." }], steps: [{ reasoning: "$0.375\\times100=37.5\\%$.", marks: 1, markCode: "A" }], finalAnswer: "37.5%" },
        },
        {
          id: "olm-u1-s2-co-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Convert $\\frac{3}{8}$ to a decimal and a percentage.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Conversion", statement: "Divide then ×100." }], steps: [
            { reasoning: "$\\frac38=0.375$; $0.375\\times100=37.5\\%$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.375 and 37.5%.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.375, 37.5%" },
        },
        {
          id: "olm-u1-s2-co-q3", difficulty: "core", totalMarks: 3,
          stem: "Express $0.\\dot{2}\\dot{7}$ as a fraction in lowest terms.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Recurring decimal", statement: "Let x, subtract." }], steps: [
            { reasoning: "$x=0.272727\\ldots$; $100x=27.2727\\ldots$; $99x=27$ → $x=\\frac{27}{99}=\\frac3{11}$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $\\frac3{11}=0.272727\\ldots$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac3{11}$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac3{11}$" },
        },
        {
          id: "olm-u1-s2-co-q4", difficulty: "core", totalMarks: 4,
          stem: "Arrange in ascending order: $0.65$, $\\frac{11}{16}$, $68\\%$, $\\frac23$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Common form", statement: "Convert all to decimals." }], steps: [
            { reasoning: "$0.65$; $\\frac{11}{16}=0.6875$; $68\\%=0.68$; $\\frac23=0.666\\ldots$.", marks: 1, markCode: "M" },
            { reasoning: "Order: $0.65 < 0.6667 < 0.68 < 0.6875$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $0.65, \\frac23, 68\\%, \\frac{11}{16}$.", marks: 1, markCode: "M" },
            { reasoning: "Verify each conversion. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$0.65, \\frac23, 68\\%, \\frac{11}{16}$" },
        },
        {
          id: "olm-u1-s2-co-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$\\frac58$ as a percentage is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "58%" },
            { id: "b", text: "0.625%" },
            { id: "c", text: "62.5%" },
            { id: "d", text: "5.8%" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Fraction to percentage", statement: "Convert to decimal then $\\times100$." }], steps: [{ reasoning: "$\\frac58=0.625$; $0.625\\times100=62.5\\%$.", marks: 1, markCode: "A" }], finalAnswer: "62.5%" },
        },
        {
          id: "olm-u1-s2-co-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Write $35\\%$ as a decimal.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.35 }] },
          markscheme: { principles: [{ kind: "technique", name: "Percentage to decimal", statement: "Divide by 100." }], steps: [
            { reasoning: "$35\\div100=0.35$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.35.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.35" },
        },
        {
          id: "olm-u1-s2-co-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Convert 0.125 to a percentage.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Decimal to percentage", statement: "Multiply by 100." }], steps: [
            { reasoning: "$0.125\\times100=12.5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 12.5%.", marks: 1, markCode: "A" },
          ], finalAnswer: "12.5%" },
        },
        {
          id: "olm-u1-s2-co-q8", difficulty: "core", totalMarks: 1,
          stem: "Which of these decimals is recurring?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$0.125$" },
            { id: "b", text: "$0.5$" },
            { id: "c", text: "$0.666\\ldots$" },
            { id: "d", text: "$0.375$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Recurring decimal", statement: "Digits repeat forever." }], steps: [{ reasoning: "$0.666\ldots$ has the digit 6 repeating; the others terminate.", marks: 1, markCode: "A" }], finalAnswer: "$0.666\ldots$" },
        },
        {
          id: "olm-u1-s2-co-q9", difficulty: "core", totalMarks: 3,
          stem: "Write $\\frac56$ as a decimal.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Fraction to decimal", statement: "Divide numerator by denominator." }], steps: [
            { reasoning: "$5\\div6=0.8333\ldots$.", marks: 1, markCode: "M" },
            { reasoning: "The remainder 5 keeps producing digit 3, so the 3 recurs.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $0.\\dot{8}\\dot{3}$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$0.\\dot{8}\\dot{3}$" },
        },
        {
          id: "olm-u1-s2-co-q10", difficulty: "core", totalMarks: 1,
          stem: "What is $\\frac{9}{16}$ as a decimal?",
          response: { type: "mcq", choices: [
            { id: "a", text: "0.56" },
            { id: "b", text: "0.625" },
            { id: "c", text: "0.69" },
            { id: "d", text: "0.5625" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Fraction to decimal", statement: "Divide numerator by denominator." }], steps: [{ reasoning: "$9\\div16=0.5625$.", marks: 1, markCode: "A" }], finalAnswer: "0.5625" },
        },
        {
          id: "olm-u1-s2-co-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Express $0.1\\dot{6}$ as a fraction in lowest terms.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Recurring decimal", statement: "Let $x=$, multiply by 10, subtract." }], steps: [
            { reasoning: "Let $x=0.1666\ldots$; then $10x=1.666\ldots$.", marks: 1, markCode: "M" },
            { reasoning: "Subtract: $9x=1.5$, so $x=\\frac{1.5}{9}=\\frac{15}{90}$.", marks: 1, markCode: "M" },
            { reasoning: "Simplify: $\\frac{15}{90}=\\frac16$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac16$; check $\\frac16=0.1666\ldots$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac16$" },
        },
        {
          id: "olm-u1-s2-co-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Express $1.\\dot{3}$ as a fraction in lowest terms.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Recurring decimal", statement: "Let $x=$, multiply by 10, subtract." }], steps: [
            { reasoning: "Let $x=1.333\ldots$; then $10x=13.333\ldots$.", marks: 1, markCode: "M" },
            { reasoning: "Subtract: $9x=12$, so $x=\\frac{12}{9}$.", marks: 1, markCode: "M" },
            { reasoning: "Simplify: $\\frac{12}{9}=\\frac43$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac43$; check $\\frac43=1.333\ldots$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac43$" },
        },
        {
          id: "olm-u1-s2-co-q13", difficulty: "challenge", totalMarks: 1,
          stem: "Which fraction is equal to $0.\\dot{3}$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac1{30}$" },
            { id: "b", text: "$\\frac13$" },
            { id: "c", text: "$3$" },
            { id: "d", text: "$\\frac{3}{10}$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Recurring decimal", statement: "Let $x=$, multiply by 10, subtract." }], steps: [{ reasoning: "$x=0.333\ldots$; $9x=3$ gives $x=\\frac13$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac13$" },
        },
        {
          id: "olm-u1-s2-co-q14", difficulty: "foundation", totalMarks: 3,
          stem: "Write $\\frac{3}{40}$ as a decimal.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.075 }] },
          markscheme: { principles: [{ kind: "technique", name: "Fraction to decimal", statement: "Divide numerator by denominator." }], steps: [
            { reasoning: "$3\\div40=0.075$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $0.075\\times40=3$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.075.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.075" },
        },
        {
          id: "olm-u1-s2-co-q15", difficulty: "core", totalMarks: 4,
          stem: "Write $\\frac{7}{12}$ as a decimal, correct to 3 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.583 }] },
          markscheme: { principles: [{ kind: "technique", name: "Fraction to decimal", statement: "Divide then round." }], steps: [
            { reasoning: "$7\\div12=0.58333\ldots$.", marks: 1, markCode: "M" },
            { reasoning: "The 4th decimal digit is 3, so round down: $0.583$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $0.583\\times12=6.996\\approx7$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.583.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.583" },
        },
        {
          id: "olm-u1-s2-co-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Calculate $0.\\dot{6}-0.\\dot{3}$, giving your answer as a decimal.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.333333 }] },
          markscheme: { principles: [{ kind: "technique", name: "Recurring decimals", statement: "Convert to fractions first." }], steps: [
            { reasoning: "$0.\\dot{6}=\\frac23$ and $0.\\dot{3}=\\frac13$.", marks: 1, markCode: "M" },
            { reasoning: "$\\frac23-\\frac13=\\frac13$.", marks: 1, markCode: "M" },
            { reasoning: "$\\frac13=0.3333\ldots$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.3333….", marks: 1, markCode: "A" },
          ], finalAnswer: "$0.\\dot{3}$" },
        },
      ],
    },
    {
      id: "olm-u1-s2-percent",
      title: "Percentage change",
      skill: "Calculate percentage increase, decrease and reverse percentages at O Level.",
      lesson: {
        sections: [
          { heading: "Percentage change", body: "Percentage change $=\\frac{\\text{new}-\\text{old}}{\\text{old}}\\times100\\%$. For 'increase by $r\\%$' multiply by $1+\\frac{r}{100}$; for 'decrease by $r\\%$' multiply by $1-\\frac{r}{100}$. Successive changes multiply: a 10% increase then a 10% decrease gives $1.1\\times0.9=0.99$, a net 1% decrease — not zero, a classic trap." },
          { heading: "Reverse percentages", body: "If a price rises 20% to $\\$60$, the original was $60\\div1.2=\\$50$ — divide by the multiplier, don't subtract 20% of 60. Similarly 'after a 15% discount the price is $\\$85$' means original $=85\\div0.85=\\$100$. The divisor is the multiplier applied, never the final value." },
        ],
        keyFormulas: [
          { name: "Multiplier", statement: "$\\times(1\\pm\\frac{r}{100})$" },
          { name: "Reverse", statement: "Original $=\\text{final}\\div\\text{multiplier}$" },
        ],
        workedExample: { problem: "A phone costs $\\$240$ after a 20% discount. Find the original price.", solution: "Discounted price is 80% of original: $240=0.8\\times\\text{original}$ → original $=\\frac{240}{0.8}=\\$300$. Check: 20% off 300 = 60 off → 240 ✓." },
      },
      questions: [
        {
          id: "olm-u1-s2-pe-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Increase 80 by 25% gives…",
          response: { type: "mcq", choices: [
            { id: "a", text: "105" },
            { id: "b", text: "20" },
            { id: "c", text: "120" },
            { id: "d", text: "100" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Percentage increase", statement: "Multiplier method." }], steps: [{ reasoning: "$80\\times1.25=100$.", marks: 1, markCode: "A" }], finalAnswer: "100" },
        },
        {
          id: "olm-u1-s2-pe-q2", difficulty: "foundation", totalMarks: 2,
          stem: "A jacket priced $\\$45$ is reduced by 20%. Find the sale price.",
          response: { type: "numeric", parts: [{ label: "a", answer: 36 }] },
          markscheme: { principles: [{ kind: "technique", name: "Percentage decrease", statement: "×0.8." }], steps: [
            { reasoning: "$45\\times0.8=36$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\$36$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\$36$" },
        },
        {
          id: "olm-u1-s2-pe-q3", difficulty: "core", totalMarks: 3,
          stem: "A price increases by 10% then decreases by 10%. Find the overall percentage change.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Successive change", statement: "Multiply multipliers." }], steps: [
            { reasoning: "$1.1\\times0.9=0.99$ → net factor 0.99.", marks: 1, markCode: "M" },
            { reasoning: "Overall change: $-1\\%$ (a decrease).", marks: 1, markCode: "M" },
            { reasoning: "Answer: 1% decrease.", marks: 1, markCode: "A" },
          ], finalAnswer: "1% decrease" },
        },
        {
          id: "olm-u1-s2-pe-q4", difficulty: "core", totalMarks: 4,
          stem: "After a 15% discount a bag costs $\\$76.50$. Find the original price.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Reverse percentage", statement: "Divide by multiplier." }], steps: [
            { reasoning: "Multiplied by $0.85$: original $=\\frac{76.50}{0.85}$.", marks: 1, markCode: "M" },
            { reasoning: "$\\frac{76.50}{0.85}=90$.", marks: 1, markCode: "M" },
            { reasoning: "Check: 15% off 90 = 13.50 → 76.50 ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\$90$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\$90$" },
        },
        {
          id: "olm-u1-s2-pe-q5", difficulty: "foundation", totalMarks: 1,
          stem: "20% of 150 is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "20" },
            { id: "b", text: "7.5" },
            { id: "c", text: "30" },
            { id: "d", text: "300" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Percentage of", statement: "Multiply by the percentage as a decimal." }], steps: [{ reasoning: "$0.2\\times150=30$.", marks: 1, markCode: "A" }], finalAnswer: "30" },
        },
        {
          id: "olm-u1-s2-pe-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Increase 60 by 15%.",
          response: { type: "numeric", parts: [{ label: "a", answer: 69 }] },
          markscheme: { principles: [{ kind: "technique", name: "Percentage increase", statement: "Multiplier $1.15$." }], steps: [
            { reasoning: "$60\\times1.15=69$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 69.", marks: 1, markCode: "A" },
          ], finalAnswer: "69" },
        },
        {
          id: "olm-u1-s2-pe-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Decrease 200 by 35%.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Percentage decrease", statement: "Multiplier $0.65$." }], steps: [
            { reasoning: "$200\\times0.65=130$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 130.", marks: 1, markCode: "A" },
          ], finalAnswer: "130" },
        },
        {
          id: "olm-u1-s2-pe-q8", difficulty: "core", totalMarks: 1,
          stem: "A price of $\\$80$ is increased by 10%. The new price is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\$90$" },
            { id: "b", text: "$\\$88$" },
            { id: "c", text: "$\\$8$" },
            { id: "d", text: "$\\$72$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Percentage increase", statement: "Multiplier method." }], steps: [{ reasoning: "$80\\times1.1=88$.", marks: 1, markCode: "A" }], finalAnswer: "$\\$88$" },
        },
        {
          id: "olm-u1-s2-pe-q9", difficulty: "core", totalMarks: 3,
          stem: "Find 12.5% of 240.",
          response: { type: "numeric", parts: [{ label: "a", answer: 30 }] },
          markscheme: { principles: [{ kind: "technique", name: "Percentage of", statement: "Convert to decimal first." }], steps: [
            { reasoning: "$12.5\\%=0.125$.", marks: 1, markCode: "M" },
            { reasoning: "$0.125\\times240=30$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 30.", marks: 1, markCode: "A" },
          ], finalAnswer: "30" },
        },
        {
          id: "olm-u1-s2-pe-q10", difficulty: "core", totalMarks: 3,
          stem: "A price is increased by 25% to give $\\$120$. Find the original price.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Reverse percentage", statement: "Divide by multiplier." }], steps: [
            { reasoning: "The new price is $1.25$ times the original.", marks: 1, markCode: "M" },
            { reasoning: "Original $=\\frac{120}{1.25}=96$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\$96$; check $96\\times1.25=120$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\$96$" },
        },
        {
          id: "olm-u1-s2-pe-q11", difficulty: "challenge", totalMarks: 4,
          stem: "A shop buys an item for $\\$50$, marks it up by 40%, then gives a 10% discount on the marked price. Find the selling price.",
          response: { type: "numeric", parts: [{ label: "a", answer: 63 }] },
          markscheme: { principles: [{ kind: "technique", name: "Successive change", statement: "Multiply multipliers." }], steps: [
            { reasoning: "Marked price: $50\\times1.4=70$.", marks: 1, markCode: "M" },
            { reasoning: "After 10% discount: $70\\times0.9=63$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $50\\times1.4\\times0.9=50\\times1.26=63$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\$63$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\$63$" },
        },
        {
          id: "olm-u1-s2-pe-q12", difficulty: "challenge", totalMarks: 4,
          stem: "After two successive increases of 10%, a price is $\\$133.10$. Find the original price.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Reverse percentage", statement: "Divide by combined multiplier." }], steps: [
            { reasoning: "Combined multiplier: $1.1\\times1.1=1.21$.", marks: 1, markCode: "M" },
            { reasoning: "Original $=\\frac{133.10}{1.21}=110$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $110\\times1.21=133.10$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\$110$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\$110$" },
        },
        {
          id: "olm-u1-s2-pe-q13", difficulty: "challenge", totalMarks: 1,
          stem: "A $\\$50$ item is reduced by 20%, then the sale price is reduced by a further 10%. The total percentage discount is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "28%" },
            { id: "b", text: "25%" },
            { id: "c", text: "20%" },
            { id: "d", text: "30%" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Successive change", statement: "Combined multiplier $0.8\\times0.9=0.72$." }], steps: [{ reasoning: "Final price $50\\times0.72=36$; discount $=\\frac{14}{50}\\times100=28\\%$.", marks: 1, markCode: "A" }], finalAnswer: "28%" },
        },
        {
          id: "olm-u1-s2-pe-q14", difficulty: "foundation", totalMarks: 3,
          stem: "What is 7.5% of 400?",
          response: { type: "numeric", parts: [{ label: "a", answer: 30 }] },
          markscheme: { principles: [{ kind: "technique", name: "Percentage of", statement: "Find 1% then scale." }], steps: [
            { reasoning: "1% of 400 is 4, so 7.5% is $7.5\\times4$.", marks: 1, markCode: "M" },
            { reasoning: "$7.5\\times4=30$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 30.", marks: 1, markCode: "A" },
          ], finalAnswer: "30" },
        },
        {
          id: "olm-u1-s2-pe-q15", difficulty: "core", totalMarks: 4,
          stem: "A salary of $\\$3200$ is increased by 4%, and then a bonus of $\\$200$ is added. Find the new total.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3528 }] },
          markscheme: { principles: [{ kind: "technique", name: "Percentage increase", statement: "Apply multiplier then add bonus." }], steps: [
            { reasoning: "After 4% increase: $3200\\times1.04=3328$.", marks: 1, markCode: "M" },
            { reasoning: "Add bonus: $3328+200=3528$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $3328+200=3528$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\$3528$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\$3528$" },
        },
        {
          id: "olm-u1-s2-pe-q16", difficulty: "challenge", totalMarks: 4,
          stem: "A trader buys goods for $\\$75$ and sells them for $\\$90$. Find the percentage profit.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Percentage change", statement: "Profit as % of cost." }], steps: [
            { reasoning: "Profit $=90-75=15$.", marks: 1, markCode: "M" },
            { reasoning: "Percentage profit $=\\frac{15}{75}\\times100=0.2\\times100$.", marks: 1, markCode: "M" },
            { reasoning: "$=20\\%$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 20%.", marks: 1, markCode: "A" },
          ], finalAnswer: "20%" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u1-s2-fdp-notes", title: "Fractions, decimals, percentages — notes", summary: "Conversions and percentage change.",
      sections: [
        { heading: "Conversions", body: "$\\% \\leftrightarrow$ decimal: $\\times100$ or $\\div100$; fraction↔decimal by division; recurring decimals via let-x method." },
        { heading: "Change", body: "Multiplier $1\\pm r/100$; successive changes multiply; reverse by dividing by multiplier." },
      ] },
  ],
};
