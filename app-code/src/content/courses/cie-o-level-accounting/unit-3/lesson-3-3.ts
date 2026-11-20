import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "olacc-u3-lesson-3-3",
  code: "3-3",
  title: "Interpreting Financial Statements",
  goal: "I CAN use ratios to analyse profitability and liquidity from financial statements.",
  standards: ["7706 3.3"],
  vocabulary: [
    { term: "Gross profit margin", definition: "Gross profit as % of sales — trading efficiency." },
    { term: "Net profit margin", definition: "Net profit as % of sales — overall profitability." },
    { term: "Current ratio", definition: "Current assets / current liabilities — liquidity measure." },
    { term: "Return on capital employed (ROCE)", definition: "Net profit as % of capital employed — returns to owners." },
    { term: "Gearing", definition: "Proportion of business financed by debt vs capital." },
    { term: "Liquidity", definition: "Ability to meet short-term debts." },
  ],
  concepts: [
    {
      id: "olacc-u3-ratios",
      title: "Key accounting ratios",
      skill: "Calculate and interpret profitability and liquidity ratios.",
      lesson: {
        sections: [
          { heading: "Profitability ratios", body: "- **Gross profit margin** = GP ÷ sales × 100 — how much profit per dollar of sales before expenses.\n- **Net profit margin** = NP ÷ sales × 100 — final profit per dollar.\n- **ROCE** = NP ÷ capital employed × 100 — return on owners' investment." },
          { heading: "Liquidity ratios", body: "- **Current ratio** = current assets ÷ current liabilities. Above 1 means assets exceed short-term debts; 1.5-2 is healthy.\n- **Acid test** = (current assets - stock) ÷ current liabilities — stricter liquidity check." },
          { heading: "Interpreting", body: "Compare ratios to previous years, competitors, industry averages. A falling margin may mean rising costs or price pressure." },
        ],
        keyFormulas: [
          { name: "GP margin", statement: "Gross profit / Sales × 100" },
          { name: "NP margin", statement: "Net profit / Sales × 100" },
          { name: "Current ratio", statement: "Current assets / Current liabilities" },
        ],
        workedExample: {
          problem: "Sales $20,000, GP $8,000, NP $4,000, current assets $9,000, current liabilities $6,000. Calculate margins and current ratio.",
          solution: "GP margin = 8000/20000 = 40%. NP margin = 4000/20000 = 20%. Current ratio = 9000/6000 = 1.5.",
        },
      },
      questions: [
        {
          id: "olacc-u3-rt-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The current ratio measures…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Liquidity" }, { id: "b", text: "Profitability" }, { id: "c", text: "Gearing" }, { id: "d", text: "Growth" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Current ratio", statement: "Liquidity measure." }], steps: [{ reasoning: "Liquidity.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Liquidity" },
        },
        {
          id: "olacc-u3-rt-q2", difficulty: "core", totalMarks: 2,
          stem: "Calculate net profit margin: sales $15,000, net profit $3,000.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "NP margin", statement: "NP/Sales ×100." }], steps: [
            { reasoning: "$3,000/$15,000 × 100 = 20%.", marks: 1, markCode: "M" },
            { reasoning: "Correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "20%" },
        },
        {
          id: "olacc-u3-rt-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain what a current ratio of 0.8 tells you about a business.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Current ratio", statement: "Below 1 = risk." }], steps: [
            { reasoning: "Current assets < current liabilities.", marks: 1, markCode: "M" },
            { reasoning: "May struggle to pay short-term debts.", marks: 1, markCode: "M" },
            { reasoning: "Liquidity risk — needs attention.", marks: 1, markCode: "M" },
            { reasoning: "Clear interpretation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Below 1 — the business may not have enough short-term assets to cover its debts." },
        },
        {
          id: "olacc-u3-rt-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Ratios review.",
          parts: [
            { label: "a", prompt: "Gross profit margin formula?", marks: 1 },
            { label: "b", prompt: "Current ratio formula?", marks: 1 },
            { label: "c", prompt: "Sales $10k, GP $4k. GP margin?", marks: 2 },
            { label: "d", prompt: "CA $12k, CL $8k. Current ratio?", marks: 1 },
            { label: "e", prompt: "What does ROCE measure?", marks: 2 },
            { label: "f", prompt: "Why compare ratios over time?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Ratios", statement: "Formulas, calculation, interpretation." },
          ], steps: [
            { part: "a", reasoning: "GP/Sales ×100.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "CA/CL.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "40%.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "1.5.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Return on capital employed.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Owner's return %.", marks: 1, markCode: "A" },
            { part: "f", reasoning: "Shows trends/improvement.", marks: 1, markCode: "M" },
            { part: "f", reasoning: "Identifies problems early.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) GP/S (b) CA/CL (c) 40% (d) 1.5 (e) owner return (f) trends" },
        },
      ],
    },
    {
      id: "olacc-u3-users",
      title: "Users of financial statements",
      skill: "Explain who uses financial statements and what they look for.",
      lesson: {
        sections: [
          { heading: "Internal users", body: "- **Owner**: profit, return on investment, business health.\n- **Manager**: performance, costs, efficiency, planning." },
          { heading: "External users", body: "- **Lenders/banks**: ability to repay — liquidity and gearing.\n- **Suppliers**: creditworthiness — will they pay?\n- **Government/tax**: taxable profit.\n- **Investors**: future returns and risk." },
          { heading: "Different needs", body: "Each user extracts different info: owner wants profit; bank wants security; supplier wants payment likelihood." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does a bank manager study a company's balance sheet before lending?",
          solution: "To check liquidity (can it pay debts?) and gearing (how much is borrowed?) — assessing repayment risk.",
        },
      },
      questions: [
        {
          id: "olacc-u3-us-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A bank lending to a business mainly examines…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Liquidity and gearing" }, { id: "b", text: "Only sales" }, { id: "c", text: "Only drawings" }, { id: "d", text: "Only stock levels" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Users", statement: "Bank: repayment ability." }], steps: [{ reasoning: "Liquidity+gearing.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Liquidity and gearing" },
        },
        {
          id: "olacc-u3-us-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two internal and two external users of financial statements.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Users", statement: "Internal vs external." }], steps: [
            { reasoning: "Internal: owner/manager.", marks: 1, markCode: "M" },
            { reasoning: "External: bank/supplier/tax.", marks: 1, markCode: "A" },
          ], finalAnswer: "Internal: owner, manager. External: bank, supplier, government, investors." },
        },
        {
          id: "olacc-u3-us-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why different users need different information from financial statements.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Users", statement: "Different needs." }], steps: [
            { reasoning: "Owner wants profit/returns.", marks: 1, markCode: "M" },
            { reasoning: "Bank wants repayment security.", marks: 1, markCode: "M" },
            { reasoning: "Supplier wants payment likelihood.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Each user has different goals — profit, security, payment — so they extract different figures." },
        },
        {
          id: "olacc-u3-us-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Users of statements review.",
          parts: [
            { label: "a", prompt: "Two internal users?", marks: 2 },
            { label: "b", prompt: "Two external users?", marks: 2 },
            { label: "c", prompt: "What does an owner look for?", marks: 2 },
            { label: "d", prompt: "What does a supplier look for?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Users", statement: "Internal/external needs." },
          ], steps: [
            { part: "a", reasoning: "Owner/manager.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Bank/supplier/tax.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Profit and return.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Creditworthiness — will they pay?", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Liquidity/profitability checks.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Clear answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) owner+manager (b) bank+supplier (c) profit+return (d) payment ability" },
        },
      ],
    },
  ],
  notes: [
    { id: "olacc-u3-3-3-notes", title: "Interpreting statements — notes", summary: "Profitability/liquidity ratios and users of financial statements.",
      sections: [
        { heading: "Ratios", body: "GP/NP margins = profitability; current ratio = liquidity; ROCE = owner return." },
        { heading: "Users", body: "Owner→profit; manager→performance; bank→repayment; supplier→payment; government→tax." },
      ] },
  ],
};
