import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "olacc-u6-lesson-6-1",
  code: "6-1",
  title: "Introduction to Control Accounts",
  goal: "I CAN explain the purpose of control accounts in a ledger system.",
  standards: ["7706 6.1"],
  vocabulary: [
    { term: "Control account", definition: "Summary account in general ledger controlling a group of subsidiary accounts." },
    { term: "Subsidiary ledger", definition: "Ledger containing individual personal accounts (debtors/creditors)." },
    { term: "General ledger", definition: "Ledger containing control accounts and nominal accounts." },
    { term: "Debtors control", definition: "Control account for customers' accounts." },
    { term: "Creditors control", definition: "Control account for suppliers' accounts." },
    { term: "Cash book control", definition: "Control account reconciling cash book to general ledger." },
  ],
  concepts: [
    {
      id: "olacc-u6-intro",
      title: "Why control accounts?",
      skill: "Explain how control accounts summarize and check subsidiary ledgers.",
      lesson: {
        sections: [
          { heading: "The problem", body: "A business may have hundreds of customer and supplier accounts. Checking each against the trial balance is impractical. Control accounts solve this by summarizing all personal accounts into one account in the general ledger." },
          { heading: "How it works", body: "- Sales ledger (debtor accounts) → summarized in **Debtors Control Account**.\n- Purchases ledger (creditor accounts) → summarized in **Creditors Control Account**.\n- Cash book → summarized in **Cash Book Control Account**.\nEach control account is checked against the trial balance balance — agreement proves the subsidiary ledgers are accurate." },
          { heading: "Benefits", body: "Errors in individual accounts are located by comparing control account to the list of balances; provides a check on the trial balance; gives management totals without examining every account." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does a business with 500 customers need a debtors control account?",
          solution: "To summarize all customer balances in one account, check against trial balance, and locate errors efficiently.",
        },
      },
      questions: [
        {
          id: "olacc-u6-int-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A control account…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Summarizes a group of subsidiary accounts" }, { id: "b", text: "Replaces the trial balance" }, { id: "c", text: "Records every transaction" }, { id: "d", text: "Is kept by each customer" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Control account", statement: "Summary of group." }], steps: [{ reasoning: "Summarizes subsidiary accounts.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Summarizes a group" },
        },
        {
          id: "olacc-u6-int-q2", difficulty: "core", totalMarks: 2,
          stem: "Name the three main control accounts.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Control accounts", statement: "Three types." }], steps: [
            { reasoning: "Debtors, Creditors, Cash Book.", marks: 1, markCode: "M" },
            { reasoning: "All three named.", marks: 1, markCode: "A" },
          ], finalAnswer: "Debtors control, Creditors control, Cash book control." },
        },
        {
          id: "olacc-u6-int-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two benefits of using control accounts.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Benefits", statement: "Check + locate errors." }], steps: [
            { reasoning: "Check subsidiary ledger against trial balance.", marks: 1, markCode: "M" },
            { reasoning: "Locate errors quickly via comparison.", marks: 1, markCode: "M" },
            { reasoning: "Reduces workload vs checking each account.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Provides a check on ledger accuracy and enables quick location of errors." },
        },
        {
          id: "olacc-u6-int-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Control accounts intro review.",
          parts: [
            { label: "a", prompt: "Define control account.", marks: 1 },
            { label: "b", prompt: "Which accounts does debtors control summarize?", marks: 1 },
            { label: "c", prompt: "Name all three control accounts.", marks: 2 },
            { label: "d", prompt: "How is control checked?", marks: 2 },
            { label: "e", prompt: "Give two benefits.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Control accounts", statement: "Definition, types, checking, benefits." },
          ], steps: [
            { part: "a", reasoning: "Summary of subsidiary accounts.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Customer accounts.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Debtors, Creditors, Cash Book.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "All three.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Compare with trial balance/list of balances.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct method.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Check accuracy.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Locate errors fast.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Clear benefits.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) summary (b) customers (c) 3 named (d) vs TB (e) check+locate" },
        },
      ],
    },
    {
      id: "olacc-u6-debtors",
      title: "Debtors control account",
      skill: "Prepare a debtors control account from sales ledger transactions.",
      lesson: {
        sections: [
          { heading: "Debit side", body: "Opening balance (debit), credit sales (debit), returns inwards (debit)." },
          { heading: "Credit side", body: "Receipts from debtors (credit), sales returns (credit), irrecoverable debts (credit), allowances for doubtful debts (credit), closing balance (credit)." },
          { heading: "Balancing", body: "The control account totals must equal the sum of all individual debtor balances in the list of balances." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Debtors control: opening $2000, credit sales $15000, receipts $12000, sales returns $500, irrecoverable $200. Find closing balance.",
          solution: "Closing = (2000+15000+500) - (12000+500+200) = $1800 debit balance.",
        },
      },
      questions: [
        {
          id: "olacc-u6-dc-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Credit sales appear on the ___ side of debtors control.",
          response: { type: "mcq", choices: [
            { id: "a", text: "Debit" }, { id: "b", text: "Credit" }, { id: "c", text: "Both" }, { id: "d", text: "Neither" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Debtors control", statement: "Sales = debit." }], steps: [{ reasoning: "Increases debtors = debit.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Debit" },
        },
        {
          id: "olacc-u6-dc-q2", difficulty: "core", totalMarks: 2,
          stem: "List three items on the credit side of debtors control.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Credit side", statement: "Reductions." }], steps: [
            { reasoning: "Receipts, sales returns, irrecoverable debts (or allowances).", marks: 1, markCode: "M" },
            { reasoning: "Three listed.", marks: 1, markCode: "A" },
          ], finalAnswer: "Receipts from debtors; sales returns; irrecoverable debts/allowances." },
        },
        {
          id: "olacc-u6-dc-q3", difficulty: "challenge", totalMarks: 4,
          stem: "OB $1000, credit sales $20000, receipts $17000, returns $800, irrecoverable $300. Find closing balance.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Debtors control", statement: "Debits - credits." }], steps: [
            { reasoning: "Debits: 1000+20000+800 = $21800.", marks: 1, markCode: "M" },
            { reasoning: "Credits: 17000+800+300 = $18100.", marks: 1, markCode: "M" },
            { reasoning: "Balance = $3700 debit.", marks: 1, markCode: "M" },
            { reasoning: "Correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "$3,700 debit balance" },
        },
        {
          id: "olacc-u6-dc-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Debtors control review.",
          parts: [
            { label: "a", prompt: "Debit side items?", marks: 3 },
            { label: "b", prompt: "Credit side items?", marks: 3 },
            { label: "c", prompt: "OB $500, sales $10000, receipts $8000, returns $400, irrecoverable $100. CB?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Debtors control", statement: "Items and balance." },
          ], steps: [
            { part: "a", reasoning: "Opening bal, credit sales, sales returns.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "All three.", marks: 1, markCode: "A" },
            { part: "a", reasoning: "Correct items.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Receipts, sales returns, irrecoverable/allowances.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "All listed.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Correct items.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Dr 10900 vs Cr 8500 → CB $2400 debit.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct totals.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) OB+sales+returns (b) receipts+returns+irrecoverable (c) 2400Dr" },
        },
      ],
    },
  ],
  notes: [
    { id: "olacc-u6-6-1-notes", title: "Control accounts — notes", summary: "Purpose of control accounts and debtors control.",
      sections: [
        { heading: "Purpose", body: "Summarize subsidiary ledgers and check against trial balance; locate errors quickly." },
        { heading: "Debtors control", body: "Dr: opening bal, credit sales, sales returns. Cr: receipts, returns, irrecoverable debts." },
      ] },
  ],
};
