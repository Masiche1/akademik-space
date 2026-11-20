import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "olacc-u3-lesson-3-1",
  code: "3-1",
  title: "The Income Statement",
  goal: "I CAN prepare an income statement showing gross profit and net profit.",
  standards: ["7706 3.1"],
  vocabulary: [
    { term: "Income statement", definition: "Statement showing revenue, costs and profit for a period." },
    { term: "Revenue/Sales", definition: "Income from selling goods or services." },
    { term: "Cost of sales", definition: "Direct costs of goods sold — opening stock + purchases - closing stock." },
    { term: "Gross profit", definition: "Sales - cost of sales." },
    { term: "Expenses", definition: "Running costs — rent, wages, utilities." },
    { term: "Net profit", definition: "Gross profit - expenses." },
    { term: "Trading account", definition: "First part of income statement calculating gross profit." },
  ],
  concepts: [
    {
      id: "olacc-u3-income",
      title: "Preparing an income statement",
      skill: "Calculate cost of sales, gross profit and net profit.",
      lesson: {
        sections: [
          { heading: "Structure", body: "```\nSales revenue\n  less: Cost of sales\n        = Gross profit\n  less: Expenses\n        = Net profit\n```\nCost of sales = opening stock + purchases - closing stock + carriage inward." },
          { heading: "Key figures", body: "- **Gross profit**: sales minus direct costs of goods sold — shows trading efficiency.\n- **Net profit**: after ALL expenses — the real bottom line." },
          { heading: "Adjustments", body: "Returns reduce sales/purchases; carriage inward adds to cost; carriage outward adds to expenses." },
        ],
        keyFormulas: [
          { name: "Gross profit", statement: "Sales - Cost of sales" },
          { name: "Net profit", statement: "Gross profit - Expenses" },
          { name: "Cost of sales", statement: "Opening stock + Purchases - Closing stock" },
        ],
        workedExample: {
          problem: "Sales $10,000; opening stock $500; purchases $6,000; closing stock $800; expenses $1,500. Find gross and net profit.",
          solution: "CoS = 500+6000-800 = 5700. GP = 10000-5700 = 4300. NP = 4300-1500 = 2800.",
        },
      },
      questions: [
        {
          id: "olacc-u3-is-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Gross profit equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sales - cost of sales" }, { id: "b", text: "Sales - expenses" }, { id: "c", text: "Revenue - tax" }, { id: "d", text: "Assets - liabilities" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Gross profit", statement: "Sales - CoS." }], steps: [{ reasoning: "Correct formula.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Sales - CoS" },
        },
        {
          id: "olacc-u3-is-q2", difficulty: "core", totalMarks: 2,
          stem: "Calculate cost of sales: opening stock $400, purchases $5,000, closing stock $600.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "CoS", statement: "OS + P - CS." }], steps: [
            { reasoning: "$400 + $5,000 - $600 = $4,800.", marks: 1, markCode: "M" },
            { reasoning: "Correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "$4,800" },
        },
        {
          id: "olacc-u3-is-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between gross profit and net profit.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "GP vs NP", statement: "Trading vs final profit." }], steps: [
            { reasoning: "GP = sales - direct costs only.", marks: 1, markCode: "M" },
            { reasoning: "NP = GP - all expenses.", marks: 1, markCode: "M" },
            { reasoning: "NP is the true bottom line.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Gross profit measures trading efficiency; net profit is after all expenses — the real result." },
        },
        {
          id: "olacc-u3-is-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Income statement review.",
          parts: [
            { label: "a", prompt: "State the income statement structure.", marks: 3 },
            { label: "b", prompt: "Cost of sales formula?", marks: 2 },
            { label: "c", prompt: "Sales $8000, CoS $5000, expenses $1500. GP and NP?", marks: 2 },
            { label: "d", prompt: "What does carriage inward add to?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Income statement", statement: "Structure and calculations." },
          ], steps: [
            { part: "a", reasoning: "Sales - CoS = GP - expenses = NP.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct structure.", marks: 1, markCode: "A" },
            { part: "a", reasoning: "All steps.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "OS + Purchases - CS.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "GP = 3000.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "NP = 1500.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Cost of sales.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) sales→GP→NP (b) OS+P-CS (c) 3000/1500 (d) CoS" },
        },
      ],
    },
    {
      id: "olacc-u3-adjustments",
      title: "Adjustments and other income",
      skill: "Include returns, discounts, other income and accruals/prepayments in the income statement.",
      lesson: {
        sections: [
          { heading: "Returns and discounts", body: "- **Sales returns**: deducted from sales revenue.\n- **Purchases returns**: deducted from purchases (reduces CoS).\n- **Trade discount**: not recorded at all (it's just a reduced price).\n- **Cash discount**: recorded as discount received/allowed expense." },
          { heading: "Other income", body: "Income not from main trading — rent received, interest earned, commission received. Added below gross profit." },
          { heading: "Accruals and prepayments", body: "- **Accrued expense** (e.g. wages owed): add to expenses.\n- **Prepaid expense**: only the used portion counts as expense.\n- **Accrued income/prepaid income**: adjust other income similarly." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Sales $10,000, sales returns $500, rent received $300. Show the adjusted sales figure.",
          solution: "Net sales = 10,000 - 500 = 9,500. Rent received $300 goes in other income.",
        },
      },
      questions: [
        {
          id: "olacc-u3-adj-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Sales returns are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Deducted from sales revenue" }, { id: "b", text: "Added to expenses" }, { id: "c", text: "Ignored" }, { id: "d", text: "Added to sales" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Sales returns", statement: "Reduce sales." }], steps: [{ reasoning: "Deducted from sales.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Deducted from sales" },
        },
        {
          id: "olacc-u3-adj-q2", difficulty: "core", totalMarks: 2,
          stem: "What is other income in an income statement?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Other income", statement: "Non-trading income." }], steps: [
            { reasoning: "Income not from main sales — rent, interest.", marks: 1, markCode: "M" },
            { reasoning: "Shown below gross profit.", marks: 1, markCode: "A" },
          ], finalAnswer: "Non-trading income (rent received, interest) shown below gross profit." },
        },
        {
          id: "olacc-u3-adj-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between trade discount and cash discount.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Discounts", statement: "Trade vs cash." }], steps: [
            { reasoning: "Trade discount: deducted before invoice — not recorded.", marks: 1, markCode: "M" },
            { reasoning: "Cash discount: for prompt payment — recorded as expense/income.", marks: 1, markCode: "M" },
            { reasoning: "Clear distinction.", marks: 1, markCode: "M" },
            { reasoning: "Complete answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "Trade discount reduces the invoice price (never recorded); cash discount rewards early payment (recorded)." },
        },
        {
          id: "olacc-u3-adj-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Adjustments review.",
          parts: [
            { label: "a", prompt: "How are sales returns treated?", marks: 1 },
            { label: "b", prompt: "What is other income? Give two examples.", marks: 2 },
            { label: "c", prompt: "Distinguish trade from cash discount.", marks: 2 },
            { label: "d", prompt: "What is an accrued expense?", marks: 2 },
            { label: "e", prompt: "Why adjust for prepayments?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Adjustments", statement: "Returns, income, discounts, accruals." },
          ], steps: [
            { part: "a", reasoning: "Deducted from sales.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Non-trading income.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Rent/interest examples.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Trade: not recorded.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Cash: recorded discount.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Expense owed but not yet paid.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Added to expenses.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Only used portion is expense.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Matches to correct period.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) deduct (b) non-trade inc (c) unrecorded vs recorded (d) owed expense (e) period matching" },
        },
      ],
    },
  ],
  notes: [
    { id: "olacc-u3-3-1-notes", title: "Income statement — notes", summary: "Structure, cost of sales, gross/net profit and adjustments.",
      sections: [
        { heading: "Statement", body: "Sales - CoS = GP - expenses = NP. CoS = OS + purchases - CS." },
        { heading: "Adjustments", body: "Returns reduce sales; other income below GP; accruals/prepayments match expenses to period." },
      ] },
  ],
};
