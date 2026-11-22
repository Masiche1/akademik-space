import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "olacc-u4-lesson-4-3",
  code: "4-3",
  title: "The Three-Column Cash Book",
  goal: "I CAN use a three-column cash book with discount columns for cash and bank transactions.",
  standards: ["7706 4.3"],
  vocabulary: [
    { term: "Three-column cash book", definition: "Cash book with cash, bank and discount columns." },
    { term: "Discount allowed", definition: "Discount given to customers for prompt payment — expense." },
    { term: "Discount received", definition: "Discount received from suppliers — income." },
    { term: "Cash column", definition: "Records cash receipts and payments." },
    { term: "Bank column", definition: "Records bank receipts and payments." },
    { term: "Discount columns", definition: "Record discount allowed and received." },
  ],
  concepts: [
    {
      id: "olacc-u4-cashbook3",
      title: "Three-column cash book",
      skill: "Record cash, bank and discount transactions in a three-column cash book.",
      lesson: {
        sections: [
          { heading: "Layout", body: "Receipts side (debit): date | details | cash | bank | discount allowed. Payments side (credit): date | details | cash | bank | discount received. The discount column records the discount portion of transactions." },
          { heading: "Recording discounts", body: "When a customer pays $95 for a $100 invoice with $5 discount: debit Bank $95, debit Discount Allowed $5, credit Debtor $100. When receiving $95 from a $100 supplier invoice: debit Creditor $100, credit Bank $95, credit Discount Received $5." },
          { heading: "Balancing", body: "Total each column; the smaller side's difference balances the account. Cash and bank balances appear separately." },
        ],
        keyFormulas: [
          { name: "Discount entry", statement: "Dr Bank (net) + Dr/Cr Discount = Cr/Dr Debtor/Creditor (gross)" },
        ],
        workedExample: {
          problem: "Customer pays $900 cash against $1000 invoice with $100 discount. Record in cash book.",
          solution: "Receipts: Dr Cash $900, Dr Discount Allowed $100; Cr Debtor $1000.",
        },
      },
      questions: [
        {
          id: "olacc-u4-cb3-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The three columns in a three-column cash book are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Debit, credit, balance" },
            { id: "b", text: "Income, expense, capital" },
            { id: "c", text: "Cash, bank, discount" },
            { id: "d", text: "Sales, purchases, stock" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "3-col cash book", statement: "Cash+bank+discount." }], steps: [{ reasoning: "Cash, bank, discount.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Cash, bank, discount" },
        },
        {
          id: "olacc-u4-cb3-q2", difficulty: "core", totalMarks: 2,
          stem: "What is discount allowed?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Discount allowed", statement: "To customers." }], steps: [
            { reasoning: "Discount given to customers for prompt payment.", marks: 1, markCode: "M" },
            { reasoning: "Recorded as an expense.", marks: 1, markCode: "A" },
          ], finalAnswer: "Discount given to customers for paying promptly — an expense." },
        },
        {
          id: "olacc-u4-cb3-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Record: supplier invoice $800 paid $760 cash + $40 discount received.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Cash book entry", statement: "Net cash + discount = gross." }], steps: [
            { reasoning: "Dr Creditor $800.", marks: 1, markCode: "M" },
            { reasoning: "Cr Cash $760.", marks: 1, markCode: "M" },
            { reasoning: "Cr Discount Received $40.", marks: 1, markCode: "M" },
            { reasoning: "Correct entry.", marks: 1, markCode: "A" },
          ], finalAnswer: "Dr Creditor $800; Cr Cash $760; Cr Discount Received $40." },
        },
        {
          id: "olacc-u4-cb3-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Three-column cash book review.",
          parts: [
            { label: "a", prompt: "Name the three columns.", marks: 3 },
            { label: "b", prompt: "Define discount allowed.", marks: 1 },
            { label: "c", prompt: "Define discount received.", marks: 1 },
            { label: "d", prompt: "Customer pays $450 bank on $500 invoice ($50 discount). Entries?", marks: 2 },
            { label: "e", prompt: "Why separate discount columns?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "3-col cash book", statement: "Columns, discounts, purpose." },
          ], steps: [
            { part: "a", reasoning: "Cash, bank, discount.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "All three.", marks: 1, markCode: "A" },
            { part: "a", reasoning: "Correct names.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Discount to customers.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Discount from suppliers.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Dr Bank 450 + Dr Discount Allowed 50.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Cr Debtor 500.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Track discount income/expense separately.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Clear reason.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) cash/bank/disc (b) to customers (c) from supps (d) Dr 500 Cr 450+50 (e) track separately" },
        },
        {
          id: "olacc-u4-cb3-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Discount allowed is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Discount received from suppliers" },
            { id: "b", text: "Discount given to customers — an expense" },
            { id: "c", text: "Interest earned" },
            { id: "d", text: "A type of sales return" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Discount allowed", statement: "To customers — expense." }], steps: [{ reasoning: "Discount allowed is given to customers for prompt payment and is an expense.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Discount to customers — expense" },
        },
        {
          id: "olacc-u4-cb3-q6", difficulty: "core", totalMarks: 1,
          stem: "Discount received is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Discount received from suppliers — income" },
            { id: "b", text: "A cash payment" },
            { id: "c", text: "Discount given to customers" },
            { id: "d", text: "An accrued expense" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Discount received", statement: "From suppliers — income." }], steps: [{ reasoning: "Discount received comes from suppliers for prompt payment and is income.", marks: 1, markCode: "M" }], finalAnswer: "**(b)** Discount from suppliers — income" },
        },
        {
          id: "olacc-u4-cb3-q7", difficulty: "core", totalMarks: 2,
          stem: "A customer pays $480 by bank against a $500 invoice with $20 discount allowed. Enter (a) the amount debited to Bank, (b) the amount debited to Discount Allowed.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 480 }, { label: "(b)", answer: 20 }] },
          markscheme: { principles: [{ kind: "principle", name: "Discount entry", statement: "Net cash + discount = gross." }], steps: [
            { reasoning: "Bank is debited with the amount actually received — $480.", marks: 1, markCode: "M" },
            { reasoning: "Discount Allowed is debited $20.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $480 (b) $20" },
        },
        {
          id: "olacc-u4-cb3-q8", difficulty: "core", totalMarks: 2,
          stem: "Describe the layout of the three-column cash book.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "3-col cash book", statement: "Cash, bank, discount." }], steps: [
            { reasoning: "Receipts side (debit): date, details, cash, bank, discount allowed columns.", marks: 1, markCode: "M" },
            { reasoning: "Payments side (credit): date, details, cash, bank, discount received columns.", marks: 1, markCode: "A" },
          ], finalAnswer: "Receipts side has cash, bank and discount allowed columns; payments side has cash, bank and discount received." },
        },
        {
          id: "olacc-u4-cb3-q9", difficulty: "foundation", totalMarks: 1,
          stem: "The discount columns in a three-column cash book are used to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Replace the ledger" },
            { id: "b", text: "Calculate interest" },
            { id: "c", text: "Record only cash sales" },
            { id: "d", text: "Record the discount portion of transactions" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Discount columns", statement: "Discount portion." }], steps: [{ reasoning: "They isolate the discount element of receipts and payments.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Record the discount portion" },
        },
        {
          id: "olacc-u4-cb3-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the ledger/cash book entries when a $1,000 supplier invoice is settled with $50 discount received.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Discount entry", statement: "Dr creditor gross, Cr net + discount." }], steps: [
            { reasoning: "Debit the supplier's account $1,000 — settling the full invoice.", marks: 1, markCode: "M" },
            { reasoning: "Credit Cash or Bank $950 — the amount actually paid.", marks: 1, markCode: "M" },
            { reasoning: "Credit Discount Received $50 — the discount earned.", marks: 1, markCode: "M" },
            { reasoning: "Correct entries.", marks: 1, markCode: "A" },
          ], finalAnswer: "Dr Creditor $1,000; Cr Cash/Bank $950; Cr Discount Received $50." },
        },
        {
          id: "olacc-u4-cb3-q11", difficulty: "core", totalMarks: 2,
          stem: "A $2,000 supplier invoice is paid with $1,900 in cash and $100 discount received. Enter (a) the amount credited to Cash, (b) the amount credited to Discount Received.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 1900 }, { label: "(b)", answer: 100 }] },
          markscheme: { principles: [{ kind: "principle", name: "Discount entry", statement: "Net cash + discount = gross." }], steps: [
            { reasoning: "Cash is credited with $1,900 paid.", marks: 1, markCode: "M" },
            { reasoning: "Discount Received is credited $100.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $1,900 (b) $100" },
        },
        {
          id: "olacc-u4-cb3-q12", difficulty: "core", totalMarks: 2,
          stem: "Why are cash and bank transactions recorded in separate columns?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Separate columns", statement: "Distinct balances." }], steps: [
            { reasoning: "Cash in hand and money in the bank are different assets.", marks: 1, markCode: "M" },
            { reasoning: "Separate columns allow each balance to be found and checked independently.", marks: 1, markCode: "A" },
          ], finalAnswer: "They are different assets — separate columns give separate balances for cash in hand and the bank account." },
        },
        {
          id: "olacc-u4-cb3-q13", difficulty: "challenge", totalMarks: 1,
          stem: "A customer pays $95 cash against a $100 invoice with $5 discount allowed. The correct entries are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Dr Cash $100, Cr Debtor $100" },
            { id: "b", text: "Dr Cash $95, Dr Discount Allowed $5, Cr Debtor $100" },
            { id: "c", text: "Dr Cash $95, Cr Debtor $95" },
            { id: "d", text: "Dr Debtor $100, Cr Cash $95, Cr Discount Allowed $5" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Discount entry", statement: "Net + discount = gross." }], steps: [{ reasoning: "Cash received $95 plus discount $5 settles the $100 debt.", marks: 1, markCode: "M" }], finalAnswer: "**(b)** Dr Cash 95 + Dr Discount Allowed 5, Cr Debtor 100" },
        },
        {
          id: "olacc-u4-cb3-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between discount allowed and discount received and where each appears in the income statement.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Discounts", statement: "Expense vs income." }], steps: [
            { reasoning: "Discount allowed is given to customers — recorded as an expense.", marks: 1, markCode: "M" },
            { reasoning: "It reduces net profit in the income statement.", marks: 1, markCode: "M" },
            { reasoning: "Discount received is gained from suppliers — recorded as other income.", marks: 1, markCode: "M" },
            { reasoning: "It increases net profit.", marks: 1, markCode: "A" },
          ], finalAnswer: "Discount allowed is an expense (reduces profit); discount received is other income (increases profit)." },
        },
        {
          id: "olacc-u4-cb3-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A customer pays $450 by bank against a $500 invoice ($50 discount allowed); the business pays a supplier $800 cash against a $1,000 invoice ($200 discount received). Enter (a) total discount allowed, (b) total discount received, (c) total of both discount columns.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 50 }, { label: "(b)", answer: 200 }, { label: "(c)", answer: 250 }] },
          markscheme: { principles: [{ kind: "principle", name: "Discount columns", statement: "Sum each side." }], steps: [
            { reasoning: "Discount allowed = $50.", marks: 1, markCode: "M" },
            { reasoning: "Discount received = $200.", marks: 1, markCode: "M" },
            { reasoning: "Total = $50 + $200 = $250.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $50 (b) $200 (c) $250" },
        },
        {
          id: "olacc-u4-cb3-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Three-column cash book review.",
          parts: [
            { label: "a", prompt: "Name the three columns.", marks: 2 },
            { label: "b", prompt: "Define discount allowed.", marks: 1 },
            { label: "c", prompt: "Define discount received.", marks: 1 },
            { label: "d", prompt: "Customer pays $450 bank on a $500 invoice ($50 discount). Entries?", marks: 2 },
            { label: "e", prompt: "Why are separate discount columns used?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "3-col cash book", statement: "Columns, discounts, purpose." },
          ], steps: [
            { part: "a", reasoning: "Cash, bank, discount.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "All three.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Discount to customers — expense.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Discount from suppliers — income.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Dr Bank $450, Dr Discount Allowed $50, Cr Debtor $500.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Tracks discount income/expense separately.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Allows posting to correct accounts.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Clear reason.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) cash/bank/disc (b) to customers (c) from supps (d) Dr 450+50 Cr 500 (e) separate tracking" },
        },
      ],
    },
    {
      id: "olacc-u4-cashbook3-bal",
      title: "Balancing the three-column cash book",
      skill: "Balance cash, bank and discount columns correctly.",
      lesson: {
        sections: [
          { heading: "Balancing", body: "Total each column on both sides. Cash column balance = cash in hand; bank column balance = bank balance (or overdraft if payments exceed receipts); discount columns total to Discount Allowed/Received accounts." },
          { heading: "Bank overdraft", body: "If bank payments exceed receipts, the bank column has a credit balance — a bank overdraft, shown as a liability on the balance sheet." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Cash book: cash receipts $5000, payments $4200; bank receipts $8000, payments $9500. Find balances.",
          solution: "Cash: $800 debit balance. Bank: $1500 credit balance = bank overdraft.",
        },
      },
      questions: [
        {
          id: "olacc-u4-cb3b-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A credit balance in the bank column means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A loan asset" },
            { id: "b", text: "Profit" },
            { id: "c", text: "Cash in hand" },
            { id: "d", text: "Bank overdraft" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Overdraft", statement: "Credit bank balance." }], steps: [{ reasoning: "Credit balance = overdraft.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Bank overdraft" },
        },
        {
          id: "olacc-u4-cb3b-q2", difficulty: "core", totalMarks: 2,
          stem: "Cash receipts $3000, payments $3500. What is the cash balance?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Balancing", statement: "Difference." }], steps: [
            { reasoning: "$500 debit balance (payments exceeded receipts).", marks: 1, markCode: "M" },
            { reasoning: "Correct side.", marks: 1, markCode: "A" },
          ], finalAnswer: "$500 debit balance — wait, payments > receipts means credit balance $500." },
        },
        {
          id: "olacc-u4-cb3b-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how a bank overdraft appears in the cash book and balance sheet.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Overdraft", statement: "Credit balance → liability." }], steps: [
            { reasoning: "Bank payments exceed receipts.", marks: 1, markCode: "M" },
            { reasoning: "Credit balance in bank column.", marks: 1, markCode: "M" },
            { reasoning: "Shown as current liability on BS.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Credit balance in bank column = overdraft, a current liability on the balance sheet." },
        },
        {
          id: "olacc-u4-cb3b-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Cash book balancing review.",
          parts: [
            { label: "a", prompt: "How is the cash column balanced?", marks: 2 },
            { label: "b", prompt: "What does a bank credit balance mean?", marks: 1 },
            { label: "c", prompt: "Where does overdraft appear on BS?", marks: 1 },
            { label: "d", prompt: "Discount columns total to which accounts?", marks: 2 },
            { label: "e", prompt: "Receipts: cash $2000, bank $5000; payments: cash $1500, bank $6000. Balances?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Balancing", statement: "Columns, overdraft, discount accounts." },
          ], steps: [
            { part: "a", reasoning: "Total both sides, find difference.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct method.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Overdraft.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Current liability.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Discount Allowed/Received.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct accounts.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Cash Dr $500.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Bank Cr $1000 overdraft.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Correct balances.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) total sides (b) overdraft (c) current liab (d) disc allowed/received (e) cash 500Dr, bank 1000Cr" },
        },
        {
          id: "olacc-u4-cb3b-q5", difficulty: "foundation", totalMarks: 1,
          stem: "If bank payments exceed bank receipts in the cash book, the bank column shows…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A debit balance" },
            { id: "b", text: "Nil balance" },
            { id: "c", text: "A credit balance — a bank overdraft" },
            { id: "d", text: "Cash in hand" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Overdraft", statement: "Credit bank balance." }], steps: [{ reasoning: "Payments exceeding receipts leave a credit balance — an overdraft.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Credit balance — overdraft" },
        },
        {
          id: "olacc-u4-cb3b-q6", difficulty: "core", totalMarks: 1,
          stem: "A debit balance in the cash column of the cash book represents…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A loss" },
            { id: "b", text: "Cash in hand" },
            { id: "c", text: "A bank overdraft" },
            { id: "d", text: "Money owed to suppliers" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Cash balance", statement: "Debit = cash in hand." }], steps: [{ reasoning: "Receipts exceeding payments leaves cash physically held — a debit balance.", marks: 1, markCode: "M" }], finalAnswer: "**(b)** Cash in hand" },
        },
        {
          id: "olacc-u4-cb3b-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Cash receipts are $6,000 and cash payments are $4,500; bank receipts are $9,000 and bank payments are $11,000. Enter (a) the cash balance, (b) the bank overdraft.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 1500 }, { label: "(b)", answer: 2000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Balancing", statement: "Difference per column." }], steps: [
            { reasoning: "Cash: $6,000 - $4,500 = $1,500 debit balance.", marks: 1, markCode: "M" },
            { reasoning: "Bank: $11,000 - $9,000 = $2,000 credit balance — overdraft.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $1,500 debit (b) $2,000 overdraft" },
        },
        {
          id: "olacc-u4-cb3b-q8", difficulty: "core", totalMarks: 2,
          stem: "How is each column of the three-column cash book balanced at period end?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Balancing", statement: "Total sides per column." }], steps: [
            { reasoning: "Total the receipts and payments for each column separately.", marks: 1, markCode: "M" },
            { reasoning: "The difference on each column is brought down — cash balance, bank balance or overdraft.", marks: 1, markCode: "A" },
          ], finalAnswer: "Each column is totalled on both sides; the difference is brought down as that column's balance." },
        },
        {
          id: "olacc-u4-cb3b-q9", difficulty: "core", totalMarks: 1,
          stem: "The discount columns of the cash book are totalled and posted to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The capital account" },
            { id: "b", text: "Sales and Purchases accounts" },
            { id: "c", text: "Discount Allowed and Discount Received accounts" },
            { id: "d", text: "The suspense account" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Discount posting", statement: "To discount accounts." }], steps: [{ reasoning: "Discount allowed and received totals post to their respective ledger accounts.", marks: 1, markCode: "M" }], finalAnswer: "**(b)** Discount Allowed and Discount Received" },
        },
        {
          id: "olacc-u4-cb3b-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how a bank overdraft appears in the cash book and on the balance sheet.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Overdraft", statement: "Credit balance → liability." }], steps: [
            { reasoning: "Bank payments exceed receipts, leaving a credit balance in the bank column.", marks: 1, markCode: "M" },
            { reasoning: "This credit balance represents money owed to the bank.", marks: 1, markCode: "M" },
            { reasoning: "On the balance sheet it appears as a current liability.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Credit balance in the bank column = overdraft, shown as a current liability on the balance sheet." },
        },
        {
          id: "olacc-u4-cb3b-q11", difficulty: "core", totalMarks: 2,
          stem: "Receipts: cash $3,500, bank $7,000. Payments: cash $2,000, bank $8,000. Enter (a) the cash balance, (b) the bank balance.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 1500 }, { label: "(b)", answer: 1000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Balancing", statement: "Difference per column." }], steps: [
            { reasoning: "Cash: $3,500 - $2,000 = $1,500 debit balance.", marks: 1, markCode: "M" },
            { reasoning: "Bank: $8,000 - $7,000 = $1,000 credit balance (overdraft).", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $1,500 debit (b) $1,000 credit/overdraft" },
        },
        {
          id: "olacc-u4-cb3b-q12", difficulty: "core", totalMarks: 2,
          stem: "What does a credit balance on the bank column of the cash book indicate?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Bank overdraft", statement: "Credit balance." }], steps: [
            { reasoning: "The business has paid more from the bank than it received.", marks: 1, markCode: "M" },
            { reasoning: "It owes the bank money — a bank overdraft, a liability.", marks: 1, markCode: "A" },
          ], finalAnswer: "A bank overdraft — the business owes the bank, shown as a liability." },
        },
        {
          id: "olacc-u4-cb3b-q13", difficulty: "foundation", totalMarks: 1,
          stem: "The bank column balance of the cash book is transferred to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The cash account" },
            { id: "b", text: "The trial balance only" },
            { id: "c", text: "The bank account in the ledger" },
            { id: "d", text: "The sales account" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Cash book posting", statement: "Balances to ledger." }], steps: [{ reasoning: "The bank column balance posts to the bank ledger account.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** The bank account" },
        },
        {
          id: "olacc-u4-cb3b-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why the cash and bank balances in the three-column cash book are found separately.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Separate balances", statement: "Distinct assets." }], steps: [
            { reasoning: "Cash in hand and bank deposits are different assets.", marks: 1, markCode: "M" },
            { reasoning: "Each has its own receipts and payments to total.", marks: 1, markCode: "M" },
            { reasoning: "Separate balances allow each to be checked and posted to its own ledger account.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "They are separate assets with separate columns, so each balance is found and posted independently." },
        },
        {
          id: "olacc-u4-cb3b-q15", difficulty: "challenge", totalMarks: 2,
          stem: "Cash receipts are $4,500 and cash payments are $3,000; bank receipts are $12,000 and bank payments are $9,500. Enter (a) the cash balance, (b) the bank balance.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 1500 }, { label: "(b)", answer: 2500 }] },
          markscheme: { principles: [{ kind: "principle", name: "Balancing", statement: "Difference per column." }], steps: [
            { reasoning: "Cash: $4,500 - $3,000 = $1,500 debit balance.", marks: 1, markCode: "M" },
            { reasoning: "Bank: $12,000 - $9,500 = $2,500 debit balance.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $1,500 debit (b) $2,500 debit" },
        },
        {
          id: "olacc-u4-cb3b-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Cash book balancing review.",
          parts: [
            { label: "a", prompt: "How is the cash column balanced?", marks: 2 },
            { label: "b", prompt: "What does a credit balance on the bank column mean?", marks: 1 },
            { label: "c", prompt: "Where does a bank overdraft appear on the balance sheet?", marks: 1 },
            { label: "d", prompt: "The discount columns are totalled to which accounts?", marks: 2 },
            { label: "e", prompt: "Receipts cash $2,000, bank $6,000; payments cash $1,200, bank $7,500. Balances?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Balancing", statement: "Columns, overdraft, discount accounts." },
          ], steps: [
            { part: "a", reasoning: "Total both sides; difference is the cash balance.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct method.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Bank overdraft.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Current liability.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Discount Allowed/Received accounts.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct accounts.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Cash Dr $800.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Bank Cr $1,500 overdraft.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Correct balances.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) total sides (b) overdraft (c) current liab (d) disc accs (e) 800Dr, 1500Cr" },
        },
      ],
    },
  ],
  notes: [
    { id: "olacc-u4-4-3-notes", title: "Three-column cash book — notes", summary: "Cash/bank/discount columns and balancing.",
      sections: [
        { heading: "Columns", body: "Cash, bank, discount allowed (receipts) and discount received (payments)." },
        { heading: "Balancing", body: "Total each column; bank credit balance = overdraft (liability)." },
      ] },
  ],
};
