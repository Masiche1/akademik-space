import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "olbus-u5-lesson-5-3",
  code: "5-3",
  title: "Financial Statements",
  goal: "I CAN interpret profit and loss accounts and balance sheets for business decisions.",
  standards: ["7100 5.3"],
  vocabulary: [
    { term: "Profit and loss account", definition: "Statement showing revenue, costs and profit for a period." },
    { term: "Balance sheet", definition: "Statement of assets, liabilities and capital at a point in time." },
    { term: "Gross profit", definition: "Sales minus cost of sales." },
    { term: "Net profit", definition: "Gross profit minus all expenses." },
    { term: "Assets", definition: "Resources owned by the business." },
    { term: "Liabilities", definition: "Debts owed by the business." },
    { term: "Capital", definition: "Owner's investment plus retained profits." },
  ],
  concepts: [
    {
      id: "olbus-u5-pl",
      title: "Profit and loss account",
      skill: "Interpret a profit and loss account to assess performance.",
      lesson: {
        sections: [
          { heading: "Structure", body: "Revenue (sales) → less cost of sales = **gross profit** → less expenses (rent, wages, marketing) = **net profit** (or loss)." },
          { heading: "Analysis", body: "Compare gross and net margins; identify high expense areas; track trends over time; benchmark against competitors." },
          { heading: "Key ratios", body: "Gross margin = GP/Sales; Net margin = NP/Sales. Higher margins = more efficient." },
        ],
        keyFormulas: [
          { name: "Margins", statement: "GP margin = GP/Sales; NP margin = NP/Sales" },
        ],
        workedExample: {
          problem: "Sales $100k, cost of sales $60k, expenses $25k. Calculate gross and net profit.",
          solution: "GP = 100k-60k = $40k. NP = 40k-25k = $15k. GP margin = 40%, NP margin = 15%.",
        },
      },
      questions: [
        {
          id: "olbus-u5-pl-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Net profit equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Gross profit minus expenses" }, { id: "b", text: "Sales minus cost of sales" }, { id: "c", text: "Revenue minus tax" }, { id: "d", text: "Assets minus liabilities" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Net profit", statement: "GP - expenses." }], steps: [{ reasoning: "Correct formula.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u5-pl-q2", difficulty: "core", totalMarks: 2,
          stem: "Sales $80k, CoS $50k, expenses $20k. Gross and net profit?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Profit calc", statement: "GP and NP." }], steps: [
            { reasoning: "GP = 30000; NP = 10000.", marks: 1, markCode: "AO2" },
            { reasoning: "Both correct.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "GP $30,000; NP $10,000" },
        },
        {
          id: "olbus-u5-pl-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a business might have high gross profit but low net profit.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Profit analysis", statement: "Expense impact." }], steps: [
            { reasoning: "High GP but high expenses eat into profit.", marks: 1, markCode: "AO2" },
            { reasoning: "E.g. high rent, wages, marketing costs.", marks: 1, markCode: "AO2" },
            { reasoning: "NP = GP - expenses.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "High expenses reduce net profit despite good gross margin." },
        },
        {
          id: "olbus-u5-pl-q4", difficulty: "challenge", totalMarks: 9,
          stem: "P&L review.",
          parts: [
            { label: "a", prompt: "Structure of P&L?", marks: 2 },
            { label: "b", prompt: "GP formula?", marks: 1 },
            { label: "c", prompt: "NP formula?", marks: 1 },
            { label: "d", prompt: "Sales $200k, CoS $120k, exp $50k. GP & NP?", marks: 2 },
            { label: "e", prompt: "What does low NP margin indicate?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "P&L", statement: "Structure and analysis." },
          ], steps: [
            { part: "a", reasoning: "Revenue → GP → NP.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Clear structure.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Sales - CoS.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "GP - expenses.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "GP=80k, NP=30k.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Both correct.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "High expenses relative to sales.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Inefficiency concern.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear interpretation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) structure (b) GP=S-CoS (c) NP=GP-E (d) 80k/30k (e) high expenses" },
        },
      ],
    },
    {
      id: "olbus-u5-bs",
      title: "Balance Sheet",
      skill: "Interpret a balance sheet to assess financial position.",
      lesson: {
        sections: [
          { heading: "Structure", body: "Assets (what business owns) = Liabilities (what it owes) + Capital (owner's stake). Fixed assets: property, equipment. Current assets: stock, cash, receivables. Current liabilities: creditors, overdraft." },
          { heading: "Analysis", body: "Liquidity: can it pay short-term debts? Solvency: can it meet long-term obligations? Gearing: proportion of debt vs equity financing." },
          { heading: "Key ratios", body: "Current ratio = current assets/current liabilities (>1 = liquid). Gearing = debt/(debt+equity) — high gearing = more risk." },
        ],
        keyFormulas: [
          { name: "Current ratio", statement: "Current assets / Current liabilities" },
        ],
        workedExample: {
          problem: "Current assets $50k, current liabilities $25k, total debt $40k, equity $60k. Calculate ratios.",
          solution: "Current ratio = 2:1 (liquid). Gearing = 40/(40+60) = 40%.",
        },
      },
      questions: [
        {
          id: "olbus-u5-bs-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A balance sheet shows…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Assets, liabilities and capital" }, { id: "b", text: "Only profits" }, { id: "c", text: "Only sales" }, { id: "d", text: "Only expenses" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Balance sheet", statement: "A = L + C." }], steps: [{ reasoning: "Three elements.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u5-bs-q2", difficulty: "core", totalMarks: 2,
          stem: "Current assets $30k, current liabilities $15k. Current ratio?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Current ratio", statement: "CA/CL." }], steps: [
            { reasoning: "$30000/$15000 = 2:1.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "2:1" },
        },
        {
          id: "olbus-u5-bs-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain what high gearing means for a business.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Gearing", statement: "Debt risk." }], steps: [
            { reasoning: "High proportion of debt financing.", marks: 1, markCode: "AO2" },
            { reasoning: "Higher interest payments and risk.", marks: 1, markCode: "AO2" },
            { reasoning: "More vulnerable to downturns.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "High gearing = more debt, higher risk and interest burden." },
        },
        {
          id: "olbus-u5-bs-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Balance sheet review.",
          parts: [
            { label: "a", prompt: "What does balance sheet show?", marks: 1 },
            { label: "b", prompt: "Accounting equation?", marks: 1 },
            { label: "c", prompt: "Two current assets?", marks: 2 },
            { label: "d", prompt: "Current ratio meaning?", marks: 2 },
            { label: "e", prompt: "Why is low current ratio risky?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Balance sheet", statement: "Structure and analysis." },
          ], steps: [
            { part: "a", reasoning: "Assets, liabilities, capital at a point in time.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Assets = Liabilities + Capital.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Stock, cash, receivables — any two.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Ability to pay short-term debts.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Clear meaning.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "May not have enough liquid assets.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Risk of insolvency.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear risk.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) A/L/C (b) A=L+C (c) 2 assets (d) liquidity (e) insolvency risk" },
        },
      ],
    },
  ],
  notes: [
    { id: "olbus-u5-5-3-notes", title: "Financial statements — notes", summary: "P&L and balance sheet interpretation.",
      sections: [
        { heading: "P&L", body: "Revenue → GP → NP; margins show efficiency." },
        { heading: "Balance sheet", body: "Assets = Liabilities + Capital; current ratio = liquidity; gearing = debt risk." },
      ] },
  ],
};
