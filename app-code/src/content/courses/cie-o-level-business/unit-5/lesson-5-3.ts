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
            { id: "a", text: "Gross profit minus expenses" },
            { id: "b", text: "Sales minus cost of sales" },
            { id: "c", text: "Assets minus liabilities" },
            { id: "d", text: "Revenue minus tax" },
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
        {
          id: "olbus-u5-pl-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Gross profit equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sales minus cost of sales" },
            { id: "b", text: "Assets minus liabilities" },
            { id: "c", text: "Sales minus all expenses" },
            { id: "d", text: "Revenue minus tax" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Gross profit", statement: "Sales - CoS." }], steps: [{ reasoning: "Correct formula.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u5-pl-q6", difficulty: "foundation", totalMarks: 1,
          stem: "The first item shown on a profit and loss account is usually…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Capital employed" },
            { id: "b", text: "Net profit" },
            { id: "c", text: "Revenue (sales)" },
            { id: "d", text: "Fixed assets" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "P&L structure", statement: "Revenue first." }], steps: [{ reasoning: "P&L starts with revenue.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olbus-u5-pl-q7", difficulty: "core", totalMarks: 1,
          stem: "Which of the following is an expense deducted to find net profit?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Rent" },
            { id: "b", text: "Cost of sales" },
            { id: "c", text: "Total assets" },
            { id: "d", text: "Sales revenue" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "P&L items", statement: "Expenses reduce NP." }], steps: [{ reasoning: "Rent is an expense.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u5-pl-q8", difficulty: "core", totalMarks: 1,
          stem: "If net profit is negative, the business has made…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A gross profit" },
            { id: "b", text: "Higher capital" },
            { id: "c", text: "Break-even" },
            { id: "d", text: "A loss" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Net profit", statement: "Negative = loss." }], steps: [{ reasoning: "Negative NP = loss.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olbus-u5-pl-q9", difficulty: "core", totalMarks: 1,
          stem: "A rising net profit margin over several years generally suggests…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Falling sales" },
            { id: "b", text: "Increasing debt" },
            { id: "c", text: "Improving profitability and efficiency" },
            { id: "d", text: "Higher fixed costs only" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Margins", statement: "Efficiency indicator." }], steps: [{ reasoning: "Higher margin = better performance.", marks: 1, markCode: "AO2" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olbus-u5-pl-q10", difficulty: "core", totalMarks: 2,
          stem: "Sales are $120,000 and cost of sales is $70,000. Calculate the gross profit.",
          response: { type: "numeric", parts: [{ label: "a", answer: 50000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Gross profit", statement: "Sales - CoS." }], steps: [
            { part: "a", reasoning: "GP = 120000 - 70000 = 50000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Gross profit = 50000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 50000" },
        },
        {
          id: "olbus-u5-pl-q11", difficulty: "core", totalMarks: 2,
          stem: "Sales are $90,000, gross profit is $45,000 and expenses are $30,000. Calculate net profit.",
          response: { type: "numeric", parts: [{ label: "a", answer: 15000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Net profit", statement: "GP - expenses." }], steps: [
            { part: "a", reasoning: "NP = 45000 - 30000 = 15000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Net profit = 15000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 15000" },
        },
        {
          id: "olbus-u5-pl-q12", difficulty: "challenge", totalMarks: 2,
          stem: "Sales are $200,000 and gross profit is $80,000. Calculate the gross profit margin as a percentage.",
          response: { type: "numeric", parts: [{ label: "a", answer: 40 }] },
          markscheme: { principles: [{ kind: "principle", name: "GP margin", statement: "GP/Sales x 100." }], steps: [
            { part: "a", reasoning: "GP margin = 80000/200000 x 100 = 40%.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Gross margin = 40%.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 40" },
        },
        {
          id: "olbus-u5-pl-q13", difficulty: "challenge", totalMarks: 2,
          stem: "Sales are $150,000 and net profit is $30,000. Calculate the net profit margin as a percentage.",
          response: { type: "numeric", parts: [{ label: "a", answer: 20 }] },
          markscheme: { principles: [{ kind: "principle", name: "NP margin", statement: "NP/Sales x 100." }], steps: [
            { part: "a", reasoning: "NP margin = 30000/150000 x 100 = 20%.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Net margin = 20%.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 20" },
        },
        {
          id: "olbus-u5-pl-q14", difficulty: "core", totalMarks: 2,
          stem: "Explain the difference between gross profit and net profit.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "GP vs NP", statement: "Different expense coverage." }], steps: [
            { reasoning: "GP = sales - cost of sales only.", marks: 1, markCode: "AO1" },
            { reasoning: "NP = GP minus all other expenses.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "GP covers direct costs; NP covers all expenses." },
        },
        {
          id: "olbus-u5-pl-q15", difficulty: "challenge", totalMarks: 4,
          stem: "A business's gross profit margin rose but its net profit margin fell over the same period. Explain one possible reason.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Margin analysis", statement: "Expense impact." }], steps: [
            { reasoning: "Expenses rose faster than gross profit (e.g. wages, rent, marketing).", marks: 1, markCode: "AO2" },
            { reasoning: "Or sales grew but overheads grew more.", marks: 1, markCode: "AO2" },
            { reasoning: "NP = GP - expenses so rising expenses cut NP margin.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Rising expenses reduced net profit despite stronger gross margin." },
        },
        {
          id: "olbus-u5-pl-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Profit and loss account review.",
          parts: [
            { label: "a", prompt: "Name the three main sections of a P&L account in order.", marks: 2 },
            { label: "b", prompt: "Define cost of sales.", marks: 1 },
            { label: "c", prompt: "Give two examples of expenses.", marks: 2 },
            { label: "d", prompt: "Sales $160k, CoS $90k, expenses $40k. Calculate GP and NP.", marks: 2 },
            { label: "e", prompt: "What does a low net profit margin indicate?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "P&L", statement: "Structure, calculation, analysis." },
          ], steps: [
            { part: "a", reasoning: "Revenue, cost of sales/gross profit, expenses/net profit.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Correct order stated.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Direct costs of producing goods sold.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Rent, wages, marketing, utilities — any two.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "GP = 70000; NP = 30000.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Both correct.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "High expenses relative to sales / inefficiency.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear interpretation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) rev→GP→NP (b) direct costs (c) 2 expenses (d) 70k/30k (e) inefficiency" },
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
            { id: "a", text: "Only sales" },
            { id: "b", text: "Only profits" },
            { id: "c", text: "Assets, liabilities and capital" },
            { id: "d", text: "Only expenses" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Balance sheet", statement: "A = L + C." }], steps: [{ reasoning: "Three elements.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
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
        {
          id: "olbus-u5-bs-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which of the following is a current asset?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Long-term loans" },
            { id: "b", text: "Delivery vans" },
            { id: "c", text: "Stock" },
            { id: "d", text: "Factory buildings" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Current assets", statement: "Short-term resources." }], steps: [{ reasoning: "Stock is a current asset.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olbus-u5-bs-q6", difficulty: "foundation", totalMarks: 1,
          stem: "The accounting equation is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Assets = Liabilities + Capital" },
            { id: "b", text: "Capital = Assets + Liabilities" },
            { id: "c", text: "Assets = Liabilities - Capital" },
            { id: "d", text: "Profit = Sales - Costs" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Accounting equation", statement: "A = L + C." }], steps: [{ reasoning: "Correct equation.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u5-bs-q7", difficulty: "core", totalMarks: 1,
          stem: "A current ratio above 1 suggests that the business…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Is highly geared" },
            { id: "b", text: "Can cover its short-term debts" },
            { id: "c", text: "Is making a loss" },
            { id: "d", text: "Has no assets" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Current ratio", statement: "Liquidity measure." }], steps: [{ reasoning: "Ratio > 1 = liquid.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olbus-u5-bs-q8", difficulty: "core", totalMarks: 1,
          stem: "Gearing measures…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The proportion of debt versus equity financing" },
            { id: "b", text: "Total sales" },
            { id: "c", text: "The profit margin" },
            { id: "d", text: "The current ratio" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Gearing", statement: "Debt/equity mix." }], steps: [{ reasoning: "Gearing = leverage measure.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u5-bs-q9", difficulty: "core", totalMarks: 1,
          stem: "A balance sheet is prepared…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Every day" },
            { id: "b", text: "Only after liquidation" },
            { id: "c", text: "Over a whole year only" },
            { id: "d", text: "At a particular point in time" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Balance sheet", statement: "Snapshot in time." }], steps: [{ reasoning: "BS shows position at one date.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olbus-u5-bs-q10", difficulty: "core", totalMarks: 2,
          stem: "Current assets are $45,000 and current liabilities are $15,000. Calculate the current ratio.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "principle", name: "Current ratio", statement: "CA/CL." }], steps: [
            { part: "a", reasoning: "Current ratio = 45000/15000 = 3.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Current ratio = 3:1.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 3" },
        },
        {
          id: "olbus-u5-bs-q11", difficulty: "challenge", totalMarks: 2,
          stem: "Total debt is $30,000 and equity (capital) is $70,000. Calculate gearing as a percentage.",
          response: { type: "numeric", parts: [{ label: "a", answer: 30 }] },
          markscheme: { principles: [{ kind: "principle", name: "Gearing", statement: "Debt/(debt+equity)." }], steps: [
            { part: "a", reasoning: "Gearing = 30000/(30000+70000) x 100 = 30%.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Gearing = 30%.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 30" },
        },
        {
          id: "olbus-u5-bs-q12", difficulty: "challenge", totalMarks: 2,
          stem: "Current assets are $20,000 and current liabilities are $40,000. Calculate the current ratio.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.5 }] },
          markscheme: { principles: [{ kind: "principle", name: "Current ratio", statement: "CA/CL." }], steps: [
            { part: "a", reasoning: "Current ratio = 20000/40000 = 0.5.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Current ratio = 0.5:1 (illiquid).", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 0.5" },
        },
        {
          id: "olbus-u5-bs-q13", difficulty: "challenge", totalMarks: 2,
          stem: "Total assets are $100,000 and total liabilities are $40,000. Calculate capital using the accounting equation.",
          response: { type: "numeric", parts: [{ label: "a", answer: 60000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Accounting equation", statement: "C = A - L." }], steps: [
            { part: "a", reasoning: "Capital = 100000 - 40000 = 60000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Capital = 60000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 60000" },
        },
        {
          id: "olbus-u5-bs-q14", difficulty: "core", totalMarks: 2,
          stem: "Distinguish between fixed assets and current assets.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Asset types", statement: "Fixed vs current." }], steps: [
            { reasoning: "Fixed: long-term (property, equipment).", marks: 1, markCode: "AO1" },
            { reasoning: "Current: short-term (stock, cash, receivables).", marks: 1, markCode: "AO1" },
          ], finalAnswer: "Fixed = long-term; current = short-term." },
        },
        {
          id: "olbus-u5-bs-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a very high current ratio is not always better for a business.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Liquidity", statement: "Too much vs too little." }], steps: [
            { reasoning: "Excess current assets may be idle — cash not earning returns.", marks: 1, markCode: "AO2" },
            { reasoning: "Overstocking ties up cash unnecessarily.", marks: 1, markCode: "AO2" },
            { reasoning: "Could indicate poor asset management.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Too much liquidity wastes resources; balance needed." },
        },
        {
          id: "olbus-u5-bs-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Balance sheet review.",
          parts: [
            { label: "a", prompt: "State the accounting equation.", marks: 1 },
            { label: "b", prompt: "Name two fixed assets.", marks: 2 },
            { label: "c", prompt: "Name two current liabilities.", marks: 2 },
            { label: "d", prompt: "Current assets $60k, current liabilities $20k. Calculate the current ratio.", marks: 2 },
            { label: "e", prompt: "What does a low current ratio indicate?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Balance sheet", statement: "Equation, items, ratios." },
          ], steps: [
            { part: "a", reasoning: "Assets = Liabilities + Capital.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Property, equipment, vehicles — any two.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Trade creditors, overdraft, wages payable — any two.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Current ratio = 60000/20000 = 3.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "May struggle to pay short-term debts / insolvency risk.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear interpretation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) A=L+C (b) 2 fixed (c) 2 current liab (d) 3 (e) liquidity risk" },
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
