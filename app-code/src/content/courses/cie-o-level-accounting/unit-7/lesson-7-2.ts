import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "olacc-u7-lesson-7-2",
  code: "7-2",
  title: "Interpreting Financial Statements",
  goal: "I CAN calculate and interpret key accounting ratios for business performance.",
  standards: ["7706 7.2"],
  vocabulary: [
    { term: "Gross profit margin", definition: "Gross profit as % of sales." },
    { term: "Net profit margin", definition: "Net profit as % of sales." },
    { term: "Current ratio", definition: "Current assets / current liabilities." },
    { term: "Liquid assets", definition: "Cash + receivables — quick-available assets." },
    { term: "Return on capital", definition: "Net profit as % of owner's capital." },
    { term: "Ratio analysis", definition: "Using financial ratios to assess performance." },
  ],
  concepts: [
    {
      id: "olacc-u7-ratios",
      title: "Profitability ratios",
      skill: "Calculate gross margin, net margin and return on capital.",
      lesson: {
        sections: [
          { heading: "Gross profit margin", body: "GP / Sales × 100. Measures how much profit before expenses per dollar of sales. Higher = better buying/selling." },
          { heading: "Net profit margin", body: "NP / Sales × 100. Measures overall profitability after all expenses." },
          { heading: "Return on capital employed", body: "NP / Capital × 100. Measures how well the owner's investment is generating profit. Compare across periods or businesses." },
        ],
        keyFormulas: [
          { name: "Margins", statement: "GP margin = GP/Sales; NP margin = NP/Sales; ROC = NP/Capital" },
        ],
        workedExample: {
          problem: "Sales $50,000, GP $15,000, NP $6,000, capital $30,000. Calculate margins and ROC.",
          solution: "GP margin = 15000/50000 = 30%. NP margin = 6000/50000 = 12%. ROC = 6000/30000 = 20%.",
        },
      },
      questions: [
        {
          id: "olacc-u7-rp-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Gross profit margin is calculated as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Gross profit / sales × 100" }, { id: "b", text: "Net profit / sales × 100" }, { id: "c", text: "Sales / gross profit × 100" }, { id: "d", text: "Capital / profit × 100" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "GP margin", statement: "GP/Sales." }], steps: [{ reasoning: "Correct formula.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olacc-u7-rp-q2", difficulty: "core", totalMarks: 2,
          stem: "Sales $40,000, GP $10,000. GP margin?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Margin calc", statement: "GP/Sales." }], steps: [
            { reasoning: "$10000/$40000 = 25%.", marks: 1, markCode: "M" },
            { reasoning: "Correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "25%" },
        },
        {
          id: "olacc-u7-rp-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Sales $80,000, NP $12,000, capital $60,000. Calculate NP margin and ROC.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Ratios", statement: "Margins + ROC." }], steps: [
            { reasoning: "NP margin = 12000/80000 = 15%.", marks: 1, markCode: "M" },
            { reasoning: "ROC = 12000/60000 = 20%.", marks: 1, markCode: "M" },
            { reasoning: "Correct calcs.", marks: 1, markCode: "M" },
            { reasoning: "Both correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "NP margin 15%; ROC 20%." },
        },
        {
          id: "olacc-u7-rp-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Profitability ratios review.",
          parts: [
            { label: "a", prompt: "GP margin formula?", marks: 1 },
            { label: "b", prompt: "NP margin formula?", marks: 1 },
            { label: "c", prompt: "ROC formula?", marks: 1 },
            { label: "d", prompt: "Sales $60k, GP $18k. GP margin?", marks: 1 },
            { label: "e", prompt: "NP $9k, sales $60k, capital $45k. NP margin & ROC?", marks: 2 },
            { label: "f", prompt: "What does rising GP margin indicate?", marks: 2 },
            { label: "g", prompt: "Why compare ratios across years?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Profitability ratios", statement: "Formulas and interpretation." },
          ], steps: [
            { part: "a", reasoning: "GP/Sales.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "NP/Sales.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "NP/Capital.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "30%.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "15% margin, 20% ROC.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "f", reasoning: "Better buying/selling efficiency.", marks: 1, markCode: "M" },
            { part: "f", reasoning: "Correct interpretation.", marks: 1, markCode: "A" },
            { part: "g", reasoning: "Shows performance trend.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) GP/S (b) NP/S (c) NP/C (d) 30% (e) 15%/20% (f) efficiency (g) trend" },
        },
      ],
    },
    {
      id: "olacc-u7-liquidity",
      title: "Liquidity ratios",
      skill: "Calculate current ratio and liquid ratio to assess ability to pay debts.",
      lesson: {
        sections: [
          { heading: "Current ratio", body: "Current assets / current liabilities. Measures ability to pay short-term debts. Generally >1 means solvent; ideal varies by industry." },
          { heading: "Liquid ratio", body: "(Cash + receivables) / current liabilities. Stricter measure excluding stock — tests quick liquidity." },
          { heading: "Interpretation", body: "High ratio = very liquid but maybe inefficient (excess cash/stock). Low ratio = liquidity risk. Compare with previous years and similar businesses." },
        ],
        keyFormulas: [
          { name: "Ratios", statement: "Current = CA/CL; Liquid = (Cash+Receivables)/CL" },
        ],
        workedExample: {
          problem: "Current assets $20,000, current liabilities $10,000, stock $8,000, cash $2,000, receivables $5,000. Calculate ratios.",
          solution: "Current ratio = 20000/10000 = 2:1. Liquid ratio = (2000+5000)/10000 = 0.7:1.",
        },
      },
      questions: [
        {
          id: "olacc-u7-lq-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Current ratio is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Current assets / current liabilities" }, { id: "b", text: "Total assets / total liabilities" }, { id: "c", text: "Cash / sales" }, { id: "d", text: "Stock / sales" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Current ratio", statement: "CA/CL." }], steps: [{ reasoning: "Correct formula.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olacc-u7-lq-q2", difficulty: "core", totalMarks: 2,
          stem: "CA $15,000, CL $5,000. Current ratio?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Current ratio", statement: "CA/CL." }], steps: [
            { reasoning: "$15000/$5000 = 3:1.", marks: 1, markCode: "M" },
            { reasoning: "Correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "3:1" },
        },
        {
          id: "olacc-u7-lq-q3", difficulty: "challenge", totalMarks: 4,
          stem: "CA $25,000 (incl. stock $10k, cash $3k, receivables $7k), CL $12,000. Current and liquid ratios?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Liquidity", statement: "Current + liquid." }], steps: [
            { reasoning: "Current = 25000/12000 ≈ 2.08:1.", marks: 1, markCode: "M" },
            { reasoning: "Liquid = (3000+7000)/12000 ≈ 0.83:1.", marks: 1, markCode: "M" },
            { reasoning: "Correct calcs.", marks: 1, markCode: "M" },
            { reasoning: "Both correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "Current ≈ 2.08:1; Liquid ≈ 0.83:1." },
        },
        {
          id: "olacc-u7-lq-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Liquidity ratios review.",
          parts: [
            { label: "a", prompt: "Current ratio formula?", marks: 1 },
            { label: "b", prompt: "Liquid ratio formula?", marks: 1 },
            { label: "c", prompt: "CA $18k, CL $9k. Current ratio?", marks: 1 },
            { label: "d", prompt: "CA $18k (stock $6k, cash $4k, rec $3k), CL $9k. Liquid?", marks: 2 },
            { label: "e", prompt: "What does a very high current ratio suggest?", marks: 1 },
            { label: "f", prompt: "What does low liquid ratio risk?", marks: 2 },
            { label: "g", prompt: "Why exclude stock from liquid ratio?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Liquidity ratios", statement: "Formulas and interpretation." },
          ], steps: [
            { part: "a", reasoning: "CA/CL.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "(Cash+Receivables)/CL.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "2:1.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "(4000+3000)/9000 ≈ 0.78:1.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Excess liquidity / inefficiency.", marks: 1, markCode: "A" },
            { part: "f", reasoning: "Inability to pay short-term debts.", marks: 1, markCode: "M" },
            { part: "f", reasoning: "Correct risk.", marks: 1, markCode: "A" },
            { part: "g", reasoning: "Stock may not sell quickly.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) CA/CL (b) (C+R)/CL (c) 2:1 (d) 0.78:1 (e) inefficiency (f) liquidity risk (g) slow to convert" },
        },
      ],
    },
  ],
  notes: [
    { id: "olacc-u7-7-2-notes", title: "Interpreting accounts — notes", summary: "Profitability and liquidity ratios.",
      sections: [
        { heading: "Profitability", body: "GP margin, NP margin, ROC — measure earning performance." },
        { heading: "Liquidity", body: "Current ratio (CA/CL) and liquid ratio ((cash+receivables)/CL) — measure ability to pay debts." },
      ] },
  ],
};
