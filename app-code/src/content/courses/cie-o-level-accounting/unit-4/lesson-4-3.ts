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
            { id: "a", text: "Cash, bank, discount" }, { id: "b", text: "Sales, purchases, stock" }, { id: "c", text: "Debit, credit, balance" }, { id: "d", text: "Income, expense, capital" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "Bank overdraft" }, { id: "b", text: "Cash in hand" }, { id: "c", text: "Profit" }, { id: "d", text: "A loan asset" },
          ], correctChoiceId: "a" },
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
