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
            { id: "a", text: "Replaces the trial balance" },
            { id: "b", text: "Records every transaction" },
            { id: "c", text: "Summarizes a group of subsidiary accounts" },
            { id: "d", text: "Is kept by each customer" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Control account", statement: "Summary of group." }], steps: [{ reasoning: "Summarizes subsidiary accounts.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Summarizes a group" },
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
        {
          id: "olacc-u6-int-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Subsidiary ledgers contain…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The trial balance" },
            { id: "b", text: "Bank statements" },
            { id: "c", text: "Only control accounts" },
            { id: "d", text: "Individual personal accounts" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Subsidiary ledger", statement: "Personal accounts." }], steps: [{ reasoning: "Sales/purchases ledgers hold personal accounts.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Personal accounts" },
        },
        {
          id: "olacc-u6-int-q6", difficulty: "core", totalMarks: 2,
          stem: "Debtors control shows $8,000 but the list of balances totals $7,600. Enter the difference.",
          response: { type: "numeric", parts: [{ label: "Difference ($)", answer: 400 }] },
          markscheme: { principles: [{ kind: "principle", name: "Reconciliation", statement: "Must agree." }], steps: [
            { reasoning: "$8000 - $7600 = $400$.", working: "8000-7600", marks: 1, markCode: "M" },
            { reasoning: "Difference is $400 — an error exists.", marks: 1, markCode: "A" },
          ], finalAnswer: "$400" },
        },
        {
          id: "olacc-u6-int-q7", difficulty: "core", totalMarks: 1,
          stem: "Creditors control account summarizes which accounts?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Bank accounts" },
            { id: "b", text: "Supplier accounts" },
            { id: "c", text: "Expense accounts" },
            { id: "d", text: "Customer accounts" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Creditors control", statement: "Suppliers." }], steps: [{ reasoning: "Purchases ledger = suppliers.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Suppliers" },
        },
        {
          id: "olacc-u6-int-q8", difficulty: "core", totalMarks: 2,
          stem: "State two benefits of using control accounts.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Benefits", statement: "Check and error location." }], steps: [
            { reasoning: "Provides a check on the trial balance/subsidiary ledgers.", marks: 1, markCode: "M" },
            { reasoning: "Enables quick location of errors via the list of balances.", marks: 1, markCode: "A" },
          ], finalAnswer: "Checks ledger accuracy and locates errors quickly." },
        },
        {
          id: "olacc-u6-int-q9", difficulty: "challenge", totalMarks: 2,
          stem: "Creditors control shows $5,500 Cr but the list of balances totals $5,200 Cr. Enter (a) the difference and (b) the list total that should agree if the control account is correct.",
          response: { type: "numeric", parts: [
            { label: "(a) Difference ($)", answer: 300 },
            { label: "(b) Correct list total ($)", answer: 5500 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Reconciliation", statement: "Must agree." }], steps: [
            { reasoning: "$5500 - $5200 = $300$.", working: "5500-5200", marks: 1, markCode: "M" },
            { reasoning: "List should total $5,500.", working: "5500", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $300 (b) $5,500" },
        },
        {
          id: "olacc-u6-int-q10", difficulty: "challenge", totalMarks: 1,
          stem: "Control accounts are kept in the…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Purchases ledger only" },
            { id: "b", text: "Cash book" },
            { id: "c", text: "Sales ledger only" },
            { id: "d", text: "General ledger" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Control account", statement: "In general ledger." }], steps: [{ reasoning: "Control accounts sit in the GL.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** General ledger" },
        },
        {
          id: "olacc-u6-int-q11", difficulty: "challenge", totalMarks: 2,
          stem: "Debtors control $9,000 vs list $8,700; creditors control $4,500 vs list $4,650. Enter (a) debtors difference and (b) creditors difference.",
          response: { type: "numeric", parts: [
            { label: "(a) Debtors difference ($)", answer: 300 },
            { label: "(b) Creditors difference ($)", answer: 150 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Reconciliation", statement: "Differences indicate errors." }], steps: [
            { reasoning: "$9000 - $8700 = $300$; $4650 - $4500 = $150$.", working: "9000-8700; 4650-4500", marks: 1, markCode: "M" },
            { reasoning: "Both differences correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $300 (b) $150" },
        },
        {
          id: "olacc-u6-int-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how control accounts help locate errors in the subsidiary ledgers.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Error location", statement: "Comparison process." }], steps: [
            { reasoning: "Control account total is compared with list of balances.", marks: 1, markCode: "M" },
            { reasoning: "A difference shows an error exists somewhere.", marks: 1, markCode: "M" },
            { reasoning: "Individual account balances are checked against source documents.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Compare totals, find difference, check individual accounts to locate error." },
        },
        {
          id: "olacc-u6-int-q13", difficulty: "foundation", totalMarks: 1,
          stem: "Agreement between a control account and the list of balances indicates that…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sales have increased" },
            { id: "b", text: "The trial balance is wrong" },
            { id: "c", text: "The subsidiary ledger is accurate" },
            { id: "d", text: "The business is profitable" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Reconciliation", statement: "Agreement = accuracy." }], steps: [{ reasoning: "Agreement proves the check is satisfied.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Ledger is accurate" },
        },
        {
          id: "olacc-u6-int-q14", difficulty: "core", totalMarks: 2,
          stem: "List of balances totals $6,500 but the control account shows $6,200. Enter (a) the difference and (b) the control balance that should appear if the list is correct.",
          response: { type: "numeric", parts: [
            { label: "(a) Difference ($)", answer: 300 },
            { label: "(b) Correct control balance ($)", answer: 6500 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Reconciliation", statement: "Must agree." }], steps: [
            { reasoning: "$6500 - $6200 = $300$.", working: "6500-6200", marks: 1, markCode: "M" },
            { reasoning: "Control should show $6,500.", working: "6500", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $300 (b) $6,500" },
        },
        {
          id: "olacc-u6-int-q15", difficulty: "challenge", totalMarks: 1,
          stem: "Which of the following is NOT one of the three main control accounts?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Creditors control" },
            { id: "b", text: "Debtors control" },
            { id: "c", text: "Cash book control" },
            { id: "d", text: "Stock control" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Control accounts", statement: "Three types." }], steps: [{ reasoning: "Only debtors, creditors and cash book control exist here.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Stock control" },
        },
        {
          id: "olacc-u6-int-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Control accounts — extended review.",
          parts: [
            { label: "a", prompt: "Define a control account.", marks: 1 },
            { label: "b", prompt: "Name the three main control accounts.", marks: 2 },
            { label: "c", prompt: "What is a subsidiary ledger?", marks: 1 },
            { label: "d", prompt: "Control $7,000 vs list $6,800. Difference?", marks: 1 },
            { label: "e", prompt: "What does a difference indicate?", marks: 1 },
            { label: "f", prompt: "How are errors located?", marks: 2 },
            { label: "g", prompt: "Give one benefit of control accounts.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Control accounts", statement: "Purpose, types, checking." },
          ], steps: [
            { part: "a", reasoning: "Summary of subsidiary accounts.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Debtors, creditors, cash book.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "All three.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Ledger of personal accounts.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "$200$.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "An error exists.", marks: 1, markCode: "A" },
            { part: "f", reasoning: "Compare individual balances to source documents.", marks: 1, markCode: "M" },
            { part: "f", reasoning: "Correct method.", marks: 1, markCode: "A" },
            { part: "g", reasoning: "Checks accuracy / locates errors.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) summary (b) 3 named (c) personal accts (d) 200 (e) error (f) compare docs (g) check" },
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
            { id: "a", text: "Both" },
            { id: "b", text: "Debit" },
            { id: "c", text: "Credit" },
            { id: "d", text: "Neither" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Debtors control", statement: "Sales = debit." }], steps: [{ reasoning: "Increases debtors = debit.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Debit" },
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
        {
          id: "olacc-u6-dc-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Payments received from debtors appear on the ___ side of debtors control.",
          response: { type: "mcq", choices: [
            { id: "a", text: "Debit" },
            { id: "b", text: "Both" },
            { id: "c", text: "Credit" },
            { id: "d", text: "Neither" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Debtors control", statement: "Receipts reduce debtors." }], steps: [{ reasoning: "Receipts decrease the asset — credit.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Credit" },
        },
        {
          id: "olacc-u6-dc-q6", difficulty: "core", totalMarks: 2,
          stem: "OB $500, credit sales $12,000, receipts $9,000, sales returns $400, irrecoverable debts $200. Enter the closing balance.",
          response: { type: "numeric", parts: [{ label: "Closing balance ($)", answer: 3300 }] },
          markscheme: { principles: [{ kind: "principle", name: "Debtors control", statement: "Debits - credits." }], steps: [
            { reasoning: "Dr $12900 vs Cr $9600 → CB $3300$ debit.", working: "500+12000+400-9000-400-200", marks: 1, markCode: "M" },
            { reasoning: "Closing balance is $3,300 debit.", marks: 1, markCode: "A" },
          ], finalAnswer: "$3,300 debit" },
        },
        {
          id: "olacc-u6-dc-q7", difficulty: "core", totalMarks: 2,
          stem: "OB $2,000, credit sales $15,000, receipts $12,000, sales returns $500, irrecoverable debts $200. Enter the total debits.",
          response: { type: "numeric", parts: [{ label: "Total debits ($)", answer: 17500 }] },
          markscheme: { principles: [{ kind: "principle", name: "Debtors control", statement: "Debit items." }], steps: [
            { reasoning: "$2000 + $15000 + $500 = $17500$.", working: "2000+15000+500", marks: 1, markCode: "M" },
            { reasoning: "Total debits are $17,500.", marks: 1, markCode: "A" },
          ], finalAnswer: "$17,500" },
        },
        {
          id: "olacc-u6-dc-q8", difficulty: "core", totalMarks: 1,
          stem: "Sales returns are entered on the ___ side of debtors control.",
          response: { type: "mcq", choices: [
            { id: "a", text: "Both sides" },
            { id: "b", text: "Credit" },
            { id: "c", text: "Neither side" },
            { id: "d", text: "Debit" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Debtors control", statement: "Returns inwards on debit." }], steps: [{ reasoning: "Returns reduce sales — debited in control account.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Debit" },
        },
        {
          id: "olacc-u6-dc-q9", difficulty: "challenge", totalMarks: 2,
          stem: "OB $1,500, credit sales $18,000, receipts $14,000, sales returns $600, irrecoverable debts $400. Enter (a) closing balance and (b) total debits.",
          response: { type: "numeric", parts: [
            { label: "(a) Closing balance ($)", answer: 5100 },
            { label: "(b) Total debits ($)", answer: 20100 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Debtors control", statement: "Debits - credits." }], steps: [
            { reasoning: "Dr $20100 vs Cr $15000 → CB $5100$ debit.", working: "1500+18000+600-14000-600-400", marks: 1, markCode: "M" },
            { reasoning: "Debits = $1500+$18000+$600 = $20100$.", working: "1500+18000+600", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $5,100 Dr (b) $20,100" },
        },
        {
          id: "olacc-u6-dc-q10", difficulty: "core", totalMarks: 2,
          stem: "List the items that appear on the debit side of debtors control.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Debit side", statement: "Increases debtors." }], steps: [
            { reasoning: "Opening balance, credit sales, sales returns.", marks: 1, markCode: "M" },
            { reasoning: "All three listed.", marks: 1, markCode: "A" },
          ], finalAnswer: "Opening balance; credit sales; sales returns." },
        },
        {
          id: "olacc-u6-dc-q11", difficulty: "challenge", totalMarks: 3,
          stem: "OB $800, credit sales $25,000, receipts $20,000, sales returns $1,000, irrecoverable debts $500, allowance for doubtful debts $300. Enter (a) total debits, (b) total credits and (c) closing balance.",
          response: { type: "numeric", parts: [
            { label: "(a) Total debits ($)", answer: 26800 },
            { label: "(b) Total credits ($)", answer: 21800 },
            { label: "(c) Closing balance ($)", answer: 5000 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Debtors control", statement: "Full balancing." }], steps: [
            { reasoning: "Dr = $800+$25000+$1000 = $26800$.", working: "800+25000+1000", marks: 1, markCode: "M" },
            { reasoning: "Cr = $20000+$1000+$500+$300 = $21800$.", working: "20000+1000+500+300", marks: 1, markCode: "M" },
            { reasoning: "CB = $26800-$21800 = $5000$ debit.", working: "26800-21800", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $26,800 (b) $21,800 (c) $5,000 Dr" },
        },
        {
          id: "olacc-u6-dc-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Irrecoverable debts are entered on the ___ side of debtors control.",
          response: { type: "mcq", choices: [
            { id: "a", text: "Credit" },
            { id: "b", text: "Both" },
            { id: "c", text: "Neither" },
            { id: "d", text: "Debit" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Debtors control", statement: "Bad debts reduce debtors." }], steps: [{ reasoning: "Written-off debts decrease the asset.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Credit" },
        },
        {
          id: "olacc-u6-dc-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how to balance a debtors control account at period end.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "method", name: "Balancing", statement: "Totals compared." }], steps: [
            { reasoning: "Total all debit-side items.", marks: 1, markCode: "M" },
            { reasoning: "Total all credit-side items.", marks: 1, markCode: "M" },
            { reasoning: "Compare totals — difference is the closing balance.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Total each side; the difference is the closing balance." },
        },
        {
          id: "olacc-u6-dc-q14", difficulty: "core", totalMarks: 2,
          stem: "OB $3,000, credit sales $22,000, receipts $19,000, sales returns $700, irrecoverable debts $300. Enter the closing balance.",
          response: { type: "numeric", parts: [{ label: "Closing balance ($)", answer: 5700 }] },
          markscheme: { principles: [{ kind: "principle", name: "Debtors control", statement: "Debits - credits." }], steps: [
            { reasoning: "Dr $25700 vs Cr $20000 → CB $5700$ debit.", working: "3000+22000+700-19000-700-300", marks: 1, markCode: "M" },
            { reasoning: "Closing balance is $5,700 debit.", marks: 1, markCode: "A" },
          ], finalAnswer: "$5,700 debit" },
        },
        {
          id: "olacc-u6-dc-q15", difficulty: "foundation", totalMarks: 1,
          stem: "Which item increases the debtors control account balance?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Receipts from debtors" },
            { id: "b", text: "Sales returns" },
            { id: "c", text: "Credit sales" },
            { id: "d", text: "Irrecoverable debts" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Debtors control", statement: "Sales increase debtors." }], steps: [{ reasoning: "Credit sales are the main increase.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Credit sales" },
        },
        {
          id: "olacc-u6-dc-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Debtors control — extended review.",
          parts: [
            { label: "a", prompt: "Debit side items?", marks: 2 },
            { label: "b", prompt: "Credit side items?", marks: 2 },
            { label: "c", prompt: "OB $1,000, sales $10,000, receipts $7,000, returns $300, irrecoverable $200. CB?", marks: 2 },
            { label: "d", prompt: "What does the closing balance represent?", marks: 1 },
            { label: "e", prompt: "How is it checked?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Debtors control", statement: "Items, balance, check." },
          ], steps: [
            { part: "a", reasoning: "Opening bal, credit sales, sales returns.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "All three.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Receipts, sales returns, irrecoverable/allowances.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "All listed.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Dr $11300 vs Cr $7500 → CB $3800$ debit.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Total owed by debtors.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Compare with list of balances total.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Correct check.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) OB+sales+returns (b) receipts+returns+irrecoverable (c) 3800Dr (d) owed by debtors (e) vs list" },
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
