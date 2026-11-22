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
            { id: "a", text: "Sales / gross profit × 100" },
            { id: "b", text: "Gross profit / sales × 100" },
            { id: "c", text: "Capital / profit × 100" },
            { id: "d", text: "Net profit / sales × 100" },
          ], correctChoiceId: "b" },
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
        {
          id: "olacc-u7-rp-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Net profit margin is calculated as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Capital / net profit × 100" },
            { id: "b", text: "Net profit / sales × 100" },
            { id: "c", text: "Gross profit / sales × 100" },
            { id: "d", text: "Sales / net profit × 100" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "NP margin", statement: "NP/Sales × 100." }], steps: [{ reasoning: "Correct formula.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Net profit / sales × 100" },
        },
        {
          id: "olacc-u7-rp-q6", difficulty: "core", totalMarks: 2,
          stem: "Sales $90,000, gross profit $27,000. Enter the gross profit margin.",
          response: { type: "numeric", parts: [{ label: "GP margin (%)", answer: 30 }] },
          markscheme: { principles: [{ kind: "principle", name: "Margin calc", statement: "GP/Sales × 100." }], steps: [
            { reasoning: "$27000/$90000 × 100 = 30%.", working: "27000/90000*100", marks: 1, markCode: "M" },
            { reasoning: "GP margin 30%.", marks: 1, markCode: "A" },
          ], finalAnswer: "30%" },
        },
        {
          id: "olacc-u7-rp-q7", difficulty: "core", totalMarks: 2,
          stem: "Sales $120,000, net profit $18,000. Calculate the net profit margin.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Margin calc", statement: "NP/Sales × 100." }], steps: [
            { reasoning: "$18000/$120000 × 100 = 15%.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "15%" },
        },
        {
          id: "olacc-u7-rp-q8", difficulty: "core", totalMarks: 2,
          stem: "Sales $60,000, net profit $9,000, capital employed $45,000. Enter the return on capital employed.",
          response: { type: "numeric", parts: [{ label: "ROC (%)", answer: 20 }] },
          markscheme: { principles: [{ kind: "principle", name: "ROC", statement: "NP/Capital × 100." }], steps: [
            { reasoning: "$9000/$45000 × 100 = 20%.", working: "9000/45000*100", marks: 1, markCode: "M" },
            { reasoning: "ROC 20%.", marks: 1, markCode: "A" },
          ], finalAnswer: "20%" },
        },
        {
          id: "olacc-u7-rp-q9", difficulty: "foundation", totalMarks: 1,
          stem: "Return on capital employed measures…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Net profit as a percentage of capital invested" },
            { id: "b", text: "Current assets as a percentage of current liabilities" },
            { id: "c", text: "Gross profit as a percentage of stock" },
            { id: "d", text: "Sales as a percentage of assets" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "ROC", statement: "NP/Capital — return on owner's investment." }], steps: [{ reasoning: "Measures profit generated per dollar of capital.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olacc-u7-rp-q10", difficulty: "core", totalMarks: 3,
          stem: "A business's gross profit margin rose from 25% to 32% but its net profit margin fell from 14% to 9%. Suggest one possible explanation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Interpretation", statement: "Margins can diverge." }], steps: [
            { reasoning: "Buying/selling improved (GP margin up).", marks: 1, markCode: "M" },
            { reasoning: "But expenses rose faster than gross profit.", marks: 1, markCode: "M" },
            { reasoning: "e.g. higher overheads or one-off costs reduced NP margin.", marks: 1, markCode: "A" },
          ], finalAnswer: "Gross margin improved but expenses increased, squeezing net profit." },
        },
        {
          id: "olacc-u7-rp-q11", difficulty: "challenge", totalMarks: 2,
          stem: "Sales $75,000, gross profit $30,000. Enter the gross profit margin.",
          response: { type: "numeric", parts: [{ label: "GP margin (%)", answer: 40 }] },
          markscheme: { principles: [{ kind: "principle", name: "Margin calc", statement: "GP/Sales × 100." }], steps: [
            { reasoning: "$30000/$75000 × 100 = 40%.", working: "30000/75000*100", marks: 1, markCode: "M" },
            { reasoning: "GP margin 40%.", marks: 1, markCode: "A" },
          ], finalAnswer: "40%" },
        },
        {
          id: "olacc-u7-rp-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Sales $100,000, gross profit $35,000, net profit $14,000, capital $70,000. Calculate the gross margin, net margin and return on capital.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "All ratios", statement: "Three calculations." }], steps: [
            { reasoning: "GP margin = $35000/$100000 = 35%.", marks: 1, markCode: "M" },
            { reasoning: "NP margin = $14000/$100000 = 14%.", marks: 1, markCode: "M" },
            { reasoning: "ROC = $14000/$70000 = 20%.", marks: 1, markCode: "M" },
            { reasoning: "All three correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "GP margin 35%; NP margin 14%; ROC 20%." },
        },
        {
          id: "olacc-u7-rp-q13", difficulty: "core", totalMarks: 1,
          stem: "A rising net profit margin with unchanged sales most likely indicates…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The business is overtrading" },
            { id: "b", text: "Expenses are being controlled better" },
            { id: "c", text: "Prices are rising faster than costs" },
            { id: "d", text: "Sales are falling" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Interpretation", statement: "Higher NP margin = better cost control." }], steps: [{ reasoning: "More profit per dollar of sales.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Expenses controlled better" },
        },
        {
          id: "olacc-u7-rp-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Business A has GP margin 40%, NP margin 12%, ROC 15%. Business B has GP margin 28%, NP margin 16%, ROC 22%. Briefly compare their performance.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Comparison", statement: "Use ratios to compare." }], steps: [
            { reasoning: "A has higher gross margin — better buying/selling.", marks: 1, markCode: "M" },
            { reasoning: "B has higher net margin and ROC — better overall profitability and use of capital.", marks: 1, markCode: "M" },
            { reasoning: "B likely controls expenses better despite lower GP margin.", marks: 1, markCode: "M" },
            { reasoning: "Reasoned comparison.", marks: 1, markCode: "A" },
          ], finalAnswer: "A is more efficient at gross level; B converts profit better and earns more on capital." },
        },
        {
          id: "olacc-u7-rp-q15", difficulty: "challenge", totalMarks: 2,
          stem: "Sales $250,000, net profit $50,000, capital employed $200,000. Enter the return on capital employed.",
          response: { type: "numeric", parts: [{ label: "ROC (%)", answer: 25 }] },
          markscheme: { principles: [{ kind: "principle", name: "ROC", statement: "NP/Capital × 100." }], steps: [
            { reasoning: "$50000/$200000 × 100 = 25%.", working: "50000/200000*100", marks: 1, markCode: "M" },
            { reasoning: "ROC 25%.", marks: 1, markCode: "A" },
          ], finalAnswer: "25%" },
        },
        {
          id: "olacc-u7-rp-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Profitability ratios — full review.",
          parts: [
            { label: "a", prompt: "State the gross profit margin formula.", marks: 1 },
            { label: "b", prompt: "State the net profit margin formula.", marks: 1 },
            { label: "c", prompt: "State the return on capital formula.", marks: 1 },
            { label: "d", prompt: "Sales $80k, GP $24k. GP margin?", marks: 1 },
            { label: "e", prompt: "Sales $80k, NP $10k, capital $50k. NP margin and ROC?", marks: 2 },
            { label: "f", prompt: "What does a falling GP margin suggest?", marks: 1 },
            { label: "g", prompt: "Why is ROC useful to an owner?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Profitability ratios", statement: "Formulas and interpretation." },
          ], steps: [
            { part: "a", reasoning: "GP/Sales × 100.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "NP/Sales × 100.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "NP/Capital × 100.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "30%.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "12.5% margin.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "20% ROC.", marks: 1, markCode: "A" },
            { part: "f", reasoning: "Weaker buying/selling efficiency or price competition.", marks: 1, markCode: "A" },
            { part: "g", reasoning: "Shows return on the owner's investment.", marks: 1, markCode: "M" },
            { part: "g", reasoning: "Comparable across periods/businesses.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) GP/S (b) NP/S (c) NP/C (d) 30% (e) 12.5%/20% (f) weaker efficiency (g) return on investment" },
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
            { id: "a", text: "Cash / sales" },
            { id: "b", text: "Stock / sales" },
            { id: "c", text: "Total assets / total liabilities" },
            { id: "d", text: "Current assets / current liabilities" },
          ], correctChoiceId: "d" },
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
        {
          id: "olacc-u7-lq-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The liquid ratio is calculated as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cash / sales × 100" },
            { id: "b", text: "(Cash + receivables) / current liabilities" },
            { id: "c", text: "Stock / current liabilities" },
            { id: "d", text: "Current assets / current liabilities" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Liquid ratio", statement: "Quick assets over current liabilities." }], steps: [{ reasoning: "Correct formula.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olacc-u7-lq-q6", difficulty: "core", totalMarks: 2,
          stem: "Current assets $30,000, current liabilities $12,000. Enter the current ratio.",
          response: { type: "numeric", parts: [{ label: "Current ratio", answer: 2.5 }] },
          markscheme: { principles: [{ kind: "principle", name: "Current ratio", statement: "CA/CL." }], steps: [
            { reasoning: "$30000/$12000 = 2.5.", working: "30000/12000", marks: 1, markCode: "M" },
            { reasoning: "Current ratio 2.5 (or 2.5:1).", marks: 1, markCode: "A" },
          ], finalAnswer: "2.5:1" },
        },
        {
          id: "olacc-u7-lq-q7", difficulty: "core", totalMarks: 2,
          stem: "Current assets $25,000 (cash $5,000, receivables $9,000, stock $11,000), current liabilities $10,000. Calculate the liquid ratio.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Liquid ratio", statement: "(Cash + receivables)/CL." }], steps: [
            { reasoning: "($5000 + $9000)/$10000 = $14000/$10000 = 1.4.", marks: 1, markCode: "M" },
            { reasoning: "Liquid ratio 1.4:1.", marks: 1, markCode: "A" },
          ], finalAnswer: "1.4:1" },
        },
        {
          id: "olacc-u7-lq-q8", difficulty: "core", totalMarks: 2,
          stem: "Cash $4,000, receivables $6,000, current liabilities $10,000. Enter the liquid ratio.",
          response: { type: "numeric", parts: [{ label: "Liquid ratio", answer: 1 }] },
          markscheme: { principles: [{ kind: "principle", name: "Liquid ratio", statement: "(Cash + receivables)/CL." }], steps: [
            { reasoning: "($4000 + $6000)/$10000 = 1.0.", working: "(4000+6000)/10000", marks: 1, markCode: "M" },
            { reasoning: "Liquid ratio 1:1.", marks: 1, markCode: "A" },
          ], finalAnswer: "1:1" },
        },
        {
          id: "olacc-u7-lq-q9", difficulty: "foundation", totalMarks: 1,
          stem: "A current ratio greater than 1 generally indicates that…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The business is overtrading" },
            { id: "b", text: "The business can cover short-term debts from current assets" },
            { id: "c", text: "The business has no liabilities" },
            { id: "d", text: "Stock is selling slowly" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Current ratio", statement: "CA > CL means short-term solvency." }], steps: [{ reasoning: "Current assets exceed current liabilities.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olacc-u7-lq-q10", difficulty: "core", totalMarks: 3,
          stem: "Explain why stock is excluded from the liquid ratio.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Liquid ratio", statement: "Only quick assets counted." }], steps: [
            { reasoning: "Stock may take time to sell at full value.", marks: 1, markCode: "M" },
            { reasoning: "It may need to be sold below cost in a hurry.", marks: 1, markCode: "M" },
            { reasoning: "So it is not a reliable source of quick funds.", marks: 1, markCode: "A" },
          ], finalAnswer: "Stock is slow to convert to cash and may sell below cost, so it is excluded." },
        },
        {
          id: "olacc-u7-lq-q11", difficulty: "challenge", totalMarks: 2,
          stem: "Current assets $24,000, current liabilities $8,000. Enter the current ratio.",
          response: { type: "numeric", parts: [{ label: "Current ratio", answer: 3 }] },
          markscheme: { principles: [{ kind: "principle", name: "Current ratio", statement: "CA/CL." }], steps: [
            { reasoning: "$24000/$8000 = 3.", working: "24000/8000", marks: 1, markCode: "M" },
            { reasoning: "Current ratio 3:1.", marks: 1, markCode: "A" },
          ], finalAnswer: "3:1" },
        },
        {
          id: "olacc-u7-lq-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Current assets $20,000 (stock $9,000, cash $2,500, receivables $8,500), current liabilities $8,000. Calculate both liquidity ratios and comment briefly.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Liquidity", statement: "Current and liquid ratios." }], steps: [
            { reasoning: "Current = $20000/$8000 = 2.5:1.", marks: 1, markCode: "M" },
            { reasoning: "Liquid = ($2500 + $8500)/$8000 ≈ 1.38:1.", marks: 1, markCode: "M" },
            { reasoning: "Both calculations correct.", marks: 1, markCode: "M" },
            { reasoning: "Comment: healthy liquidity, quick assets cover debts.", marks: 1, markCode: "A" },
          ], finalAnswer: "Current 2.5:1; liquid ≈ 1.38:1 — adequate liquidity." },
        },
        {
          id: "olacc-u7-lq-q13", difficulty: "core", totalMarks: 1,
          stem: "A business has a current ratio of 3:1 but a liquid ratio of only 0.5:1. This suggests…",
          response: { type: "mcq", choices: [
            { id: "a", text: "It is over-liquid" },
            { id: "b", text: "Much of its current assets are held in stock" },
            { id: "c", text: "It has no debts" },
            { id: "d", text: "Its receivables are very high" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Interpretation", statement: "Gap between ratios = stock level." }], steps: [{ reasoning: "Low liquid ratio means few quick assets — stock-heavy.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olacc-u7-lq-q14", difficulty: "challenge", totalMarks: 4,
          stem: "A firm's liquid ratio fell from 1.2:1 to 0.6:1 over two years while its current ratio stayed at about 2:1. What does this indicate and what action might be needed?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Trend analysis", statement: "Falling liquid ratio = risk." }], steps: [
            { reasoning: "Quick assets have fallen relative to current liabilities.", marks: 1, markCode: "M" },
            { reasoning: "Stock may have risen, absorbing cash.", marks: 1, markCode: "M" },
            { reasoning: "Risk of difficulty paying short-term debts.", marks: 1, markCode: "M" },
            { reasoning: "Action: collect receivables faster, reduce stock or arrange finance.", marks: 1, markCode: "A" },
          ], finalAnswer: "Liquidity weakening — likely stock build-up; improve collections or reduce stock." },
        },
        {
          id: "olacc-u7-lq-q15", difficulty: "challenge", totalMarks: 2,
          stem: "Cash $3,000, receivables $5,000, current liabilities $12,000. Enter the liquid ratio (to 2 decimal places).",
          response: { type: "numeric", parts: [{ label: "Liquid ratio", answer: 0.67, tolerance: 0.01 }] },
          markscheme: { principles: [{ kind: "principle", name: "Liquid ratio", statement: "(Cash + receivables)/CL." }], steps: [
            { reasoning: "($3000 + $5000)/$12000 = $8000/$12000 ≈ 0.67.", working: "8000/12000", marks: 1, markCode: "M" },
            { reasoning: "Liquid ratio ≈ 0.67:1.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.67:1" },
        },
        {
          id: "olacc-u7-lq-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Liquidity ratios — full review.",
          parts: [
            { label: "a", prompt: "State the current ratio formula.", marks: 1 },
            { label: "b", prompt: "State the liquid ratio formula.", marks: 1 },
            { label: "c", prompt: "CA $21k, CL $7k. Current ratio?", marks: 1 },
            { label: "d", prompt: "CA $21k (stock $8k, cash $3k, rec $4k), CL $7k. Liquid ratio?", marks: 2 },
            { label: "e", prompt: "What does a current ratio below 1 suggest?", marks: 1 },
            { label: "f", prompt: "Why might a very high current ratio be inefficient?", marks: 2 },
            { label: "g", prompt: "Name one use of liquidity ratios for a manager.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Liquidity ratios", statement: "Formulas and interpretation." },
          ], steps: [
            { part: "a", reasoning: "CA/CL.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "(Cash + receivables)/CL.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "3:1.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "($3000 + $4000)/$7000 = $7000/$7000 = 1:1.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "May struggle to pay short-term debts.", marks: 1, markCode: "A" },
            { part: "f", reasoning: "Excess cash/stock ties up funds that could earn returns.", marks: 1, markCode: "M" },
            { part: "f", reasoning: "Correct point.", marks: 1, markCode: "A" },
            { part: "g", reasoning: "Assess ability to pay debts / plan cash needs.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) CA/CL (b) (C+R)/CL (c) 3:1 (d) 1:1 (e) debt risk (f) idle funds (g) assess solvency" },
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
