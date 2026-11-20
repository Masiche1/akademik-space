import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "olacc-u4-lesson-4-2",
  code: "4-2",
  title: "Sales and Purchases Returns",
  goal: "I CAN record sales returns and purchases returns in day books and ledgers.",
  standards: ["7706 4.2"],
  vocabulary: [
    { term: "Sales returns", definition: "Goods returned by customers — reduces sales." },
    { term: "Purchases returns", definition: "Goods returned to suppliers — reduces purchases." },
    { term: "Sales returns day book", definition: "Records goods returned by customers." },
    { term: "Purchases returns day book", definition: "Records goods returned to suppliers." },
    { term: "Credit note", definition: "Document reducing amount customer owes for returns." },
    { term: "Debit note", definition: "Document increasing amount owed for returns to supplier." },
  ],
  concepts: [
    {
      id: "olacc-u4-returns",
      title: "Recording returns",
      skill: "Record sales and purchases returns in day books and ledger accounts.",
      lesson: {
        sections: [
          { heading: "Sales returns", body: "Customer returns goods → issue **credit note** → record in sales returns day book → post to Sales Returns account (debit) and customer's account (credit). Reduces net sales." },
          { heading: "Purchases returns", body: "Business returns goods to supplier → issue **debit note** → record in purchases returns day book → post to Purchases Returns account (credit) and supplier's account (debit). Reduces purchases." },
          { heading: "Effect on statements", body: "Sales returns deducted from sales; purchases returns deducted from purchases — both reduce profit." },
        ],
        keyFormulas: [
          { name: "Returns", statement: "Sales returns ↓ sales; purchases returns ↓ purchases" },
        ],
        workedExample: {
          problem: "Customer returns $200 of goods. Show the ledger entries.",
          solution: "Debit Sales Returns $200; Credit Debtor (customer) $200.",
        },
      },
      questions: [
        {
          id: "olacc-u4-ret-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Sales returns reduce…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sales revenue" }, { id: "b", text: "Purchases" }, { id: "c", text: "Expenses" }, { id: "d", text: "Capital" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Sales returns", statement: "Reduce sales." }], steps: [{ reasoning: "Reduces sales.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Sales revenue" },
        },
        {
          id: "olacc-u4-ret-q2", difficulty: "core", totalMarks: 2,
          stem: "What document is issued when goods are returned to a supplier?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Debit note", statement: "For supplier returns." }], steps: [
            { reasoning: "Debit note.", marks: 1, markCode: "M" },
            { reasoning: "Increases amount owed to supplier... reduces it actually — correct: debit note to supplier.", marks: 1, markCode: "A" },
          ], finalAnswer: "Debit note — sent to the supplier for goods returned." },
        },
        {
          id: "olacc-u4-ret-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the ledger entries for $300 of sales returns.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Returns entries", statement: "Dr returns, Cr debtor." }], steps: [
            { reasoning: "Debit Sales Returns $300.", marks: 1, markCode: "M" },
            { reasoning: "Credit customer/debtor $300.", marks: 1, markCode: "M" },
            { reasoning: "Reduces net sales.", marks: 1, markCode: "M" },
            { reasoning: "Correct entries.", marks: 1, markCode: "A" },
          ], finalAnswer: "Dr Sales Returns $300; Cr Debtor $300 — reduces net sales." },
        },
        {
          id: "olacc-u4-ret-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Returns review.",
          parts: [
            { label: "a", prompt: "Define sales returns.", marks: 1 },
            { label: "b", prompt: "Define purchases returns.", marks: 1 },
            { label: "c", prompt: "Credit note vs debit note?", marks: 2 },
            { label: "d", prompt: "Ledger entries for $150 purchases returns?", marks: 2 },
            { label: "e", prompt: "How do returns affect profit?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Returns", statement: "Types, documents, entries, profit." },
          ], steps: [
            { part: "a", reasoning: "Goods back from customers.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Goods back to suppliers.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Credit: customer; debit: supplier.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct distinction.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Dr supplier, Cr purchases returns.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Reduce sales and purchases.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Both reduce profit.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) cust returns (b) supp returns (c) credit vs debit (d) Dr supp Cr ret (e) ↓profit" },
        },
      ],
    },
    {
      id: "olacc-u4-return-books",
      title: "Returns day books",
      skill: "Use returns day books and post totals to ledger accounts.",
      lesson: {
        sections: [
          { heading: "Returns day books", body: "Sales returns day book records each credit note issued; purchases returns day book records each debit note. Columns: date, document number, name, amount, analysis." },
          { heading: "Posting", body: "Totals post periodically: sales returns total → Sales Returns account (debit) and debtors' control; purchases returns → Purchases Returns (credit) and creditors' control." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Sales returns day book total $450. What posts to the ledger?",
          solution: "Dr Sales Returns $450; Cr Debtors (individual customers' accounts) $450.",
        },
      },
      questions: [
        {
          id: "olacc-u4-rb-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The sales returns day book records…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Credit notes issued to customers" }, { id: "b", text: "Cash sales" }, { id: "c", text: "Purchases made" }, { id: "d", text: "Bank payments" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "SR day book", statement: "Credit notes." }], steps: [{ reasoning: "Credit notes.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Credit notes" },
        },
        {
          id: "olacc-u4-rb-q2", difficulty: "core", totalMarks: 2,
          stem: "What is posted from the purchases returns day book?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "PR posting", statement: "To returns + creditors." }], steps: [
            { reasoning: "Total to Purchases Returns (credit).", marks: 1, markCode: "M" },
            { reasoning: "Individual amounts to suppliers' accounts.", marks: 1, markCode: "A" },
          ], finalAnswer: "Total → Purchases Returns account; individual → suppliers' accounts." },
        },
        {
          id: "olacc-u4-rb-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why returns are recorded in separate day books rather than the main sales/purchases day books.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Returns books", statement: "Separate tracking." }], steps: [
            { reasoning: "Keeps returns distinct from original transactions.", marks: 1, markCode: "M" },
            { reasoning: "Allows monitoring return rates.", marks: 1, markCode: "M" },
            { reasoning: "Simplifies posting to returns accounts.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Separate day books track returns distinctly, enabling monitoring and clean posting to returns accounts." },
        },
        {
          id: "olacc-u4-rb-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Returns day books review.",
          parts: [
            { label: "a", prompt: "What does the SR day book record?", marks: 1 },
            { label: "b", prompt: "What does the PR day book record?", marks: 1 },
            { label: "c", prompt: "Where does SR total post?", marks: 2 },
            { label: "d", prompt: "Where does PR total post?", marks: 2 },
            { label: "e", prompt: "Why separate returns from main day books?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Returns books", statement: "Records and posting." },
          ], steps: [
            { part: "a", reasoning: "Credit notes to customers.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Debit notes to suppliers.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Dr Sales Returns, Cr debtors.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Cr Purchases Returns, Dr creditors.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Distinct tracking/monitoring.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Clean posting.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Clear reason.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) credit notes (b) debit notes (c) Dr SR Cr debtors (d) Cr PR Dr cred (e) tracking" },
        },
      ],
    },
  ],
  notes: [
    { id: "olacc-u4-4-2-notes", title: "Returns — notes", summary: "Sales/purchases returns, credit/debit notes and day books.",
      sections: [
        { heading: "Returns", body: "Sales returns ↓ sales; purchases returns ↓ purchases. Credit note to customer; debit note to supplier." },
        { heading: "Books", body: "Separate returns day books post totals to returns accounts and personal accounts." },
      ] },
  ],
};
