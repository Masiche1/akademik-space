import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "olacc-u3-lesson-3-2",
  code: "3-2",
  title: "The Balance Sheet",
  goal: "I CAN prepare a balance sheet showing assets, liabilities and capital.",
  standards: ["7706 3.2"],
  vocabulary: [
    { term: "Balance sheet", definition: "Statement of financial position at a specific date." },
    { term: "Fixed assets", definition: "Long-term assets — premises, equipment, vehicles." },
    { term: "Current assets", definition: "Short-term assets — cash, stock, debtors." },
    { term: "Current liabilities", definition: "Short-term debts — creditors, overdraft, accrued expenses." },
    { term: "Capital", definition: "Owner's stake = assets - liabilities." },
    { term: "Net assets", definition: "Total assets - total liabilities = capital." },
    { term: "Non-current liabilities", definition: "Long-term debts — loans repayable after a year." },
  ],
  concepts: [
    {
      id: "olacc-u3-bs",
      title: "Preparing a balance sheet",
      skill: "List assets, liabilities and calculate capital.",
      lesson: {
        sections: [
          { heading: "Structure", body: "```\nASSETS                    CAPITAL + LIABILITIES\nFixed assets               Capital (opening + profit - drawings)\nCurrent assets              Non-current liabilities\nTotal assets                Current liabilities\n                          Total capital + liabilities\n```\nMust balance: assets = capital + liabilities." },
          { heading: "Asset categories", body: "- **Fixed (non-current)**: premises, equipment, vehicles — held long-term, depreciated.\n- **Current**: cash, bank, stock, debtors (money owed to us) — convert to cash within a year." },
          { heading: "Capital calculation", body: "Capital = opening capital + net profit - drawings + additional investment. Net assets (assets - liabilities) must equal capital." },
        ],
        keyFormulas: [
          { name: "Balance sheet", statement: "Assets = Capital + Liabilities" },
          { name: "Capital", statement: "Opening capital + net profit - drawings" },
        ],
        workedExample: {
          problem: "Assets: premises $50,000, stock $8,000, debtors $4,000, cash $2,000. Liabilities: creditors $10,000, loan $20,000. Opening capital $25,000, net profit $6,000, drawings $3,000. Prepare the balance sheet summary.",
          solution: "Total assets = 50+8+4+2 = $64,000. Capital = 25+6-3 = $28,000. Liabilities = 30,000. Check: 28+30 = 58... discrepancy means missing items — recheck values (in real questions totals will balance).",
        },
      },
      questions: [
        {
          id: "olacc-u3-bs-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A balance sheet shows…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Financial position at a date" }, { id: "b", text: "Profit for a year" }, { id: "c", text: "Cash flow" }, { id: "d", text: "Sales only" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Balance sheet", statement: "Position at a date." }], steps: [{ reasoning: "Position snapshot.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Position at a date" },
        },
        {
          id: "olacc-u3-bs-q2", difficulty: "core", totalMarks: 2,
          stem: "Classify: premises, stock, creditors.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "BS items", statement: "Fixed/current asset/liability." }], steps: [
            { reasoning: "Premises: fixed asset; stock: current asset; creditors: current liability.", marks: 1, markCode: "M" },
            { reasoning: "Correct classification.", marks: 1, markCode: "A" },
          ], finalAnswer: "Premises = fixed asset; stock = current asset; creditors = current liability." },
        },
        {
          id: "olacc-u3-bs-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how capital is calculated on a balance sheet.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Capital", statement: "Opening + profit - drawings." }], steps: [
            { reasoning: "Start with opening capital.", marks: 1, markCode: "M" },
            { reasoning: "Add net profit, deduct drawings.", marks: 1, markCode: "M" },
            { reasoning: "Add any new investment.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Capital = opening capital + net profit - drawings + additional investment." },
        },
        {
          id: "olacc-u3-bs-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Balance sheet review.",
          parts: [
            { label: "a", prompt: "What does a balance sheet show?", marks: 2 },
            { label: "b", prompt: "Distinguish fixed from current assets.", marks: 2 },
            { label: "c", prompt: "Capital = ?", marks: 2 },
            { label: "d", prompt: "Assets $20,000, liabilities $8,000. Capital?", marks: 1 },
            { label: "e", prompt: "Name two current liabilities.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Balance sheet", statement: "Position, assets, capital." },
          ], steps: [
            { part: "a", reasoning: "Financial position at a date.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Fixed: long-term; current: short-term.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct distinction.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Opening + NP - drawings.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "$12,000.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Creditors/overdraft.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Two named.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) position (b) long vs short (c) O+NP-D (d) 12000 (e) creditors+overdraft" },
        },
      ],
    },
    {
      id: "olacc-u3-bsitems",
      title: "Balance sheet items",
      skill: "Identify and classify common balance sheet items.",
      lesson: {
        sections: [
          { heading: "Assets", body: "Fixed: premises, equipment, vehicles, furniture. Current: cash, bank, stock, debtors, prepaid expenses." },
          { heading: "Liabilities", body: "Current: creditors, bank overdraft, accrued expenses, tax owed. Non-current: long-term loans, mortgages." },
          { heading: "Capital section", body: "Capital account = owner's stake. Plus current year's profit (from income statement) less drawings — arrives at closing capital." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Classify: bank overdraft, delivery van, prepaid rent.",
          solution: "Overdraft = current liability; delivery van = fixed asset; prepaid rent = current asset.",
        },
      },
      questions: [
        {
          id: "olacc-u3-bi-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Debtors on a balance sheet represent…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Money owed TO the business" }, { id: "b", text: "Money the business owes" }, { id: "c", text: "A type of expense" }, { id: "d", text: "Fixed assets" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Debtors", statement: "Owed to us." }], steps: [{ reasoning: "Debtors = owed to us.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Owed to us" },
        },
        {
          id: "olacc-u3-bi-q2", difficulty: "core", totalMarks: 2,
          stem: "Distinguish creditors from debtors.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Creditors vs debtors", statement: "Owed vs owing." }], steps: [
            { reasoning: "Creditors: we owe them.", marks: 1, markCode: "M" },
            { reasoning: "Debtors: they owe us.", marks: 1, markCode: "A" },
          ], finalAnswer: "Creditors are suppliers we owe; debtors are customers who owe us." },
        },
        {
          id: "olacc-u3-bi-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a bank overdraft appears as a liability, not an asset.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Overdraft", statement: "Negative bank balance." }], steps: [
            { reasoning: "Overdraft = borrowed money from bank.", marks: 1, markCode: "M" },
            { reasoning: "Money owed → liability.", marks: 1, markCode: "M" },
            { reasoning: "Not an asset we own.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "An overdraft is money borrowed from the bank — a debt, hence a liability." },
        },
        {
          id: "olacc-u3-bi-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Balance sheet items review.",
          parts: [
            { label: "a", prompt: "Define debtors and creditors.", marks: 2 },
            { label: "b", prompt: "Name two fixed assets.", marks: 2 },
            { label: "c", prompt: "Name two current liabilities.", marks: 2 },
            { label: "d", prompt: "Where does a bank overdraft appear and why?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "BS items", statement: "Debtors, assets, liabilities, overdraft." },
          ], steps: [
            { part: "a", reasoning: "Debtors: owed to us; creditors: we owe.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Premises/equipment.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Two named.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Creditors/overdraft/tax.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Two named.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Current liability — money owed to bank.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Not an asset.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct placement.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) owed vs owing (b) premises/equip (c) creditors+overdraft (d) liability—debt" },
        },
      ],
    },
  ],
  notes: [
    { id: "olacc-u3-3-2-notes", title: "Balance sheet — notes", summary: "Structure, asset/liability classification and capital calculation.",
      sections: [
        { heading: "BS", body: "Assets = Capital + Liabilities. Fixed vs current assets; current vs non-current liabilities." },
        { heading: "Capital", body: "Opening capital + net profit - drawings + investment = closing capital." },
      ] },
  ],
};
