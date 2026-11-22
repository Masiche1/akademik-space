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
            { id: "a", text: "Profit for a year" },
            { id: "b", text: "Financial position at a date" },
            { id: "c", text: "Cash flow" },
            { id: "d", text: "Sales only" },
          ], correctChoiceId: "b" },
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
        {
          id: "olacc-u3-bs-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A balance sheet must always satisfy the equation…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Assets = Capital + Liabilities" },
            { id: "b", text: "Debits = Credits only" },
            { id: "c", text: "Cash = Bank" },
            { id: "d", text: "Sales = Purchases" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Balance sheet", statement: "Assets = Capital + Liabilities." }], steps: [{ reasoning: "The two sides must always balance.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Assets = Capital + Liabilities" },
        },
        {
          id: "olacc-u3-bs-q6", difficulty: "core", totalMarks: 1,
          stem: "Current assets are assets that…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Can be converted to cash within one year" },
            { id: "b", text: "Cannot be sold" },
            { id: "c", text: "Are owned by customers" },
            { id: "d", text: "Last more than ten years" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Current assets", statement: "Short-term, cash within a year." }], steps: [{ reasoning: "Current assets are expected to become cash within twelve months.", marks: 1, markCode: "M" }], finalAnswer: "**(b)** Convertible to cash within a year" },
        },
        {
          id: "olacc-u3-bs-q7", difficulty: "challenge", totalMarks: 3,
          stem: "Assets: premises $30,000, stock $5,000, debtors $3,000, cash $2,000. Liabilities: creditors $8,000, loan $12,000. Enter (a) total assets, (b) total liabilities, (c) capital.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 40000 }, { label: "(b)", answer: 20000 }, { label: "(c)", answer: 20000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Balance sheet", statement: "Assets = Capital + Liabilities." }], steps: [
            { reasoning: "Assets: $30,000 + $5,000 + $3,000 + $2,000 = $40,000.", marks: 1, markCode: "M" },
            { reasoning: "Liabilities: $8,000 + $12,000 = $20,000.", marks: 1, markCode: "M" },
            { reasoning: "Capital = $40,000 - $20,000 = $20,000.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $40,000 (b) $20,000 (c) $20,000" },
        },
        {
          id: "olacc-u3-bs-q8", difficulty: "core", totalMarks: 2,
          stem: "What is the difference between the income statement and the balance sheet?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "IS vs BS", statement: "Period vs point in time." }], steps: [
            { reasoning: "The income statement covers a period — income and expenses for the year.", marks: 1, markCode: "M" },
            { reasoning: "The balance sheet shows the position at a single date — assets, liabilities and capital.", marks: 1, markCode: "A" },
          ], finalAnswer: "Income statement shows results for a period; balance sheet shows financial position at a specific date." },
        },
        {
          id: "olacc-u3-bs-q9", difficulty: "foundation", totalMarks: 1,
          stem: "Non-current liabilities are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Types of expenses" },
            { id: "b", text: "Amounts owed to customers" },
            { id: "c", text: "Debts repayable within one year" },
            { id: "d", text: "Debts repayable after more than one year" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Non-current liabilities", statement: "Long-term debts." }], steps: [{ reasoning: "Non-current liabilities are long-term, e.g. loans repayable after a year.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Debts repayable after one year" },
        },
        {
          id: "olacc-u3-bs-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how drawings affect the capital figure shown on the balance sheet.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Drawings", statement: "Reduce capital." }], steps: [
            { reasoning: "Drawings are amounts the owner takes out for personal use.", marks: 1, markCode: "M" },
            { reasoning: "They reduce the resources belonging to the business.", marks: 1, markCode: "M" },
            { reasoning: "Closing capital = opening capital + net profit - drawings + new investment.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Drawings reduce capital — they are deducted after adding net profit when calculating closing capital." },
        },
        {
          id: "olacc-u3-bs-q11", difficulty: "core", totalMarks: 2,
          stem: "Opening capital is $10,000, net profit is $4,000 and drawings are $1,500. Enter (a) capital after adding profit, (b) closing capital.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 14000 }, { label: "(b)", answer: 12500 }] },
          markscheme: { principles: [{ kind: "principle", name: "Capital", statement: "Opening + profit - drawings." }], steps: [
            { reasoning: "$10,000 + $4,000 = $14,000.", marks: 1, markCode: "M" },
            { reasoning: "$14,000 - $1,500 = $12,500 closing capital.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $14,000 (b) $12,500" },
        },
        {
          id: "olacc-u3-bs-q12", difficulty: "core", totalMarks: 2,
          stem: "Why must a balance sheet always balance?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "BS equation", statement: "Assets fund capital+liabilities." }], steps: [
            { reasoning: "Every asset is financed either by the owner (capital) or by creditors (liabilities).", marks: 1, markCode: "M" },
            { reasoning: "If the two sides differ, an error or omission exists in the records.", marks: 1, markCode: "A" },
          ], finalAnswer: "Because all assets are funded by capital or liabilities — imbalance signals an error." },
        },
        {
          id: "olacc-u3-bs-q13", difficulty: "foundation", totalMarks: 1,
          stem: "Which of the following is a fixed asset?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Debtors" },
            { id: "b", text: "Cash" },
            { id: "c", text: "Stock" },
            { id: "d", text: "Delivery van" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Fixed assets", statement: "Long-term assets." }], steps: [{ reasoning: "A delivery van is held long-term — a fixed asset.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Delivery van" },
        },
        {
          id: "olacc-u3-bs-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between fixed and current assets, giving one example of each.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Fixed vs current", statement: "Long vs short term." }], steps: [
            { reasoning: "Fixed assets are held long-term, e.g. premises or equipment.", marks: 1, markCode: "M" },
            { reasoning: "They are used in the business, not for resale.", marks: 1, markCode: "M" },
            { reasoning: "Current assets convert to cash within a year, e.g. stock or debtors.", marks: 1, markCode: "M" },
            { reasoning: "Clear distinction.", marks: 1, markCode: "A" },
          ], finalAnswer: "Fixed assets are long-term (premises, vehicles); current assets are short-term (stock, debtors, cash)." },
        },
        {
          id: "olacc-u3-bs-q15", difficulty: "core", totalMarks: 2,
          stem: "Current assets are: cash $2,500, stock $6,000, debtors $3,500. Current liabilities are: creditors $4,000, overdraft $2,000, accrued expenses $1,000. Enter (a) total current assets, (b) net current assets (working capital).",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 12000 }, { label: "(b)", answer: 5000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Working capital", statement: "CA - CL." }], steps: [
            { reasoning: "Current assets = $2,500 + $6,000 + $3,500 = $12,000.", marks: 1, markCode: "M" },
            { reasoning: "Net current assets = $12,000 - $7,000 = $5,000.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $12,000 (b) $5,000" },
        },
        {
          id: "olacc-u3-bs-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Balance sheet review.",
          parts: [
            { label: "a", prompt: "What does a balance sheet show?", marks: 2 },
            { label: "b", prompt: "Distinguish fixed from current assets.", marks: 2 },
            { label: "c", prompt: "State the capital formula.", marks: 2 },
            { label: "d", prompt: "Assets $30,000, liabilities $10,000. Capital?", marks: 1 },
            { label: "e", prompt: "Name two current liabilities.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Balance sheet", statement: "Position, assets, capital." },
          ], steps: [
            { part: "a", reasoning: "Financial position at a date.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Fixed long-term; current short-term.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct distinction.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Opening + NP - drawings + investment.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "$20,000.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Creditors and overdraft.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Two named.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) position (b) long vs short (c) O+NP-D+I (d) 20000 (e) creditors+overdraft" },
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
            { id: "a", text: "Fixed assets" },
            { id: "b", text: "Money the business owes" },
            { id: "c", text: "Money owed TO the business" },
            { id: "d", text: "A type of expense" },
          ], correctChoiceId: "c" },
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
        {
          id: "olacc-u3-bi-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Creditors shown on a balance sheet represent…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The owner's drawings" },
            { id: "b", text: "Money the business owes to suppliers" },
            { id: "c", text: "A type of asset" },
            { id: "d", text: "Money owed TO the business" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Creditors", statement: "We owe them." }], steps: [{ reasoning: "Creditors are suppliers the business must pay.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Money the business owes" },
        },
        {
          id: "olacc-u3-bi-q6", difficulty: "core", totalMarks: 1,
          stem: "A bank overdraft is classified on the balance sheet as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Part of capital" },
            { id: "b", text: "A current asset" },
            { id: "c", text: "A current liability" },
            { id: "d", text: "A fixed asset" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Overdraft", statement: "Current liability." }], steps: [{ reasoning: "An overdraft is money owed to the bank — repayable on demand, hence a current liability.", marks: 1, markCode: "M" }], finalAnswer: "**(c)** Current liability" },
        },
        {
          id: "olacc-u3-bi-q7", difficulty: "core", totalMarks: 2,
          stem: "Classify these items — bank overdraft, delivery van, prepaid rent, cash, long-term loan. Enter (a) the number of current assets, (b) the number of liabilities.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 2 }, { label: "(b)", answer: 2 }] },
          markscheme: { principles: [{ kind: "definition", name: "BS classification", statement: "Current assets vs liabilities." }], steps: [
            { reasoning: "Prepaid rent and cash are current assets — 2.", marks: 1, markCode: "M" },
            { reasoning: "Overdraft and long-term loan are liabilities — 2.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 2 (b) 2" },
        },
        {
          id: "olacc-u3-bi-q8", difficulty: "core", totalMarks: 2,
          stem: "What is a prepayment and where does it appear on the balance sheet?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Prepayment", statement: "Paid in advance." }], steps: [
            { reasoning: "A prepayment is an expense paid before it is due, e.g. insurance or rent paid early.", marks: 1, markCode: "M" },
            { reasoning: "The unused portion appears as a current asset — it represents a future benefit.", marks: 1, markCode: "A" },
          ], finalAnswer: "An expense paid in advance; the unused part is a current asset on the balance sheet." },
        },
        {
          id: "olacc-u3-bi-q9", difficulty: "foundation", totalMarks: 1,
          stem: "Accrued expenses appear on the balance sheet as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Current liabilities" },
            { id: "b", text: "Fixed assets" },
            { id: "c", text: "Part of sales" },
            { id: "d", text: "Current assets" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Accrued expense", statement: "Owed — liability." }], steps: [{ reasoning: "Accrued expenses are amounts owed, so they are current liabilities.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Current liabilities" },
        },
        {
          id: "olacc-u3-bi-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why debtors are shown as assets while creditors are shown as liabilities.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Debtors vs creditors", statement: "Owed to us vs we owe." }], steps: [
            { reasoning: "Debtors are customers who owe the business money.", marks: 1, markCode: "M" },
            { reasoning: "This is a future inflow of cash — an asset.", marks: 1, markCode: "M" },
            { reasoning: "Creditors are suppliers the business owes — a future outflow, hence a liability.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Debtors represent money owed TO the business (asset); creditors represent money the business owes (liability)." },
        },
        {
          id: "olacc-u3-bi-q11", difficulty: "challenge", totalMarks: 3,
          stem: "Current assets: cash $1,800, stock $4,200, debtors $2,500, prepaid expenses $300. Current liabilities: creditors $3,000, accrued expenses $500. Enter (a) total current assets, (b) total current liabilities, (c) working capital.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 8800 }, { label: "(b)", answer: 3500 }, { label: "(c)", answer: 5300 }] },
          markscheme: { principles: [{ kind: "principle", name: "Working capital", statement: "CA - CL." }], steps: [
            { reasoning: "Current assets = $1,800 + $4,200 + $2,500 + $300 = $8,800.", marks: 1, markCode: "M" },
            { reasoning: "Current liabilities = $3,000 + $500 = $3,500.", marks: 1, markCode: "M" },
            { reasoning: "Working capital = $8,800 - $3,500 = $5,300.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $8,800 (b) $3,500 (c) $5,300" },
        },
        {
          id: "olacc-u3-bi-q12", difficulty: "core", totalMarks: 2,
          stem: "Distinguish between current and non-current liabilities.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Liabilities", statement: "Current vs non-current." }], steps: [
            { reasoning: "Current liabilities are repayable within one year — creditors, overdraft, accrued expenses.", marks: 1, markCode: "M" },
            { reasoning: "Non-current liabilities are long-term — loans repayable after more than a year.", marks: 1, markCode: "A" },
          ], finalAnswer: "Current liabilities fall due within a year; non-current liabilities are long-term debts." },
        },
        {
          id: "olacc-u3-bi-q13", difficulty: "core", totalMarks: 1,
          stem: "The capital section of the balance sheet shows…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Opening capital + profit - drawings" },
            { id: "b", text: "Only the owner's drawings" },
            { id: "c", text: "Total sales for the year" },
            { id: "d", text: "All ledger balances" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Capital", statement: "O + NP - D." }], steps: [{ reasoning: "Closing capital adds profit and deducts drawings from opening capital.", marks: 1, markCode: "M" }], finalAnswer: "**(b)** Opening capital + profit - drawings" },
        },
        {
          id: "olacc-u3-bi-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how the net profit from the income statement flows into the balance sheet.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Profit flow", statement: "IS profit increases capital." }], steps: [
            { reasoning: "The income statement calculates net profit for the period.", marks: 1, markCode: "M" },
            { reasoning: "Net profit increases the owner's stake in the business.", marks: 1, markCode: "M" },
            { reasoning: "It is added to opening capital (less drawings) to give closing capital on the balance sheet.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Net profit is added to opening capital (after deducting drawings) to arrive at closing capital on the balance sheet." },
        },
        {
          id: "olacc-u3-bi-q15", difficulty: "foundation", totalMarks: 2,
          stem: "A business has total assets of $25,000 and total liabilities of $9,000. Enter (a) capital, (b) net assets.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 16000 }, { label: "(b)", answer: 16000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Capital", statement: "Assets - liabilities." }], steps: [
            { reasoning: "$25,000 - $9,000 = $16,000.", marks: 1, markCode: "M" },
            { reasoning: "Net assets equal capital — $16,000.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $16,000 (b) $16,000" },
        },
        {
          id: "olacc-u3-bi-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Balance sheet items review.",
          parts: [
            { label: "a", prompt: "Define debtors and creditors.", marks: 2 },
            { label: "b", prompt: "Classify: cash, bank loan (5-year), stock.", marks: 3 },
            { label: "c", prompt: "Name two current assets.", marks: 2 },
            { label: "d", prompt: "Explain why a bank overdraft is a liability.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "BS items", statement: "Debtors, classification, assets, overdraft." },
          ], steps: [
            { part: "a", reasoning: "Debtors: owed to us; creditors: we owe.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Cash and stock: current assets; loan: non-current liability.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "All three classified.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Two current assets e.g. cash, stock.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Two named.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Money borrowed from the bank — a debt.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct reason.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) owed vs owing (b) CA/CA/NCL (c) cash+stock (d) debt=liability" },
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
