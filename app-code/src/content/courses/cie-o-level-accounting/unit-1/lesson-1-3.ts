import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "olacc-u1-lesson-1-3",
  code: "1-3",
  title: "Books of Prime Entry",
  goal: "I CAN use day books and cash book to record transactions before posting to ledgers.",
  standards: ["7706 1.3"],
  vocabulary: [
    { term: "Book of prime entry", definition: "First record of transactions — day book, cash book, journal." },
    { term: "Day book", definition: "Chronological record of credit transactions — sales, purchases, returns." },
    { term: "Sales day book", definition: "Records credit sales." },
    { term: "Purchases day book", definition: "Records credit purchases." },
    { term: "Returns day books", definition: "Record sales returns and purchases returns." },
    { term: "Cash book", definition: "Records all cash and bank transactions." },
    { term: "Journal", definition: "Records non-cash/non-credit transactions — opening entries, corrections." },
  ],
  concepts: [
    {
      id: "olacc-u1-daybooks",
      title: "Day books",
      skill: "Record credit sales and purchases in day books.",
      lesson: {
        sections: [
          { heading: "Why day books?", body: "Credit transactions are numerous — recording each in detail would bloat ledgers. Day books group them chronologically for efficient posting." },
          { heading: "Sales day book", body: "Records all credit sales: date, invoice number, customer name, amount. Total posted periodically to Sales account and individual debtors' accounts." },
          { heading: "Purchases day book", body: "Records all credit purchases similarly — posted to Purchases account and individual creditors' accounts." },
          { heading: "Returns day books", body: "Sales returns day book (goods returned by customers) and purchases returns day book (goods returned to suppliers) — recorded as reductions." },
        ],
        keyFormulas: [
          { name: "Day books", statement: "Sales, purchases, sales returns, purchases returns" },
        ],
        workedExample: {
          problem: "A business makes 50 credit sales in a month. Why use a sales day book?",
          solution: "Records all 50 chronologically in one place; totals post once to Sales and debtors' accounts — efficient and organised.",
        },
      },
      questions: [
        {
          id: "olacc-u1-db-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A day book records…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Credit transactions chronologically" }, { id: "b", text: "Only cash sales" }, { id: "c", text: "Only bank transactions" }, { id: "d", text: "Only year-end adjustments" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Day book", statement: "Chronological credit records." }], steps: [{ reasoning: "Credit transactions in order.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Credit transactions" },
        },
        {
          id: "olacc-u1-db-q2", difficulty: "core", totalMarks: 2,
          stem: "What does a sales day book record?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Sales day book", statement: "Credit sales." }], steps: [
            { reasoning: "All credit sales chronologically.", marks: 1, markCode: "M" },
            { reasoning: "Posted to Sales and debtors' accounts.", marks: 1, markCode: "A" },
          ], finalAnswer: "All credit sales in date order — posted to Sales and customers' accounts." },
        },
        {
          id: "olacc-u1-db-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why day books are used instead of posting every transaction directly to ledgers.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Day books", statement: "Efficiency." }], steps: [
            { reasoning: "Credit transactions are numerous.", marks: 1, markCode: "M" },
            { reasoning: "Day books group them for easier posting.", marks: 1, markCode: "M" },
            { reasoning: "Reduces ledger clutter/errors.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Day books batch credit transactions chronologically for efficient, organised posting to ledgers." },
        },
        {
          id: "olacc-u1-db-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Day books review.",
          parts: [
            { label: "a", prompt: "What is a book of prime entry?", marks: 2 },
            { label: "b", prompt: "Name the four day books.", marks: 4 },
            { label: "c", prompt: "What does a purchases day book record?", marks: 1 },
            { label: "d", prompt: "Why use day books?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Day books", statement: "Prime entry, four types, purpose." },
          ], steps: [
            { part: "a", reasoning: "First record of transactions.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Sales day book.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Purchases day book.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Sales returns + purchases returns.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "All four.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Credit purchases.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Efficient posting.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Organised records.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) first record (b) sales/purch/returns×2 (c) credit purchases (d) efficiency" },
        },
      ],
    },
    {
      id: "olacc-u1-cashbook",
      title: "Cash Book and Journal",
      skill: "Use the cash book for cash/bank transactions and the journal for non-routine entries.",
      lesson: {
        sections: [
          { heading: "Cash book", body: "Records ALL cash and bank receipts/payments in one place. Two-sided layout: **receipts (debit)** on left, **payments (credit)** on right. Can serve as both book of prime entry AND ledger account for cash/bank." },
          { heading: "Journal", body: "For transactions not fitting day books: opening entries (starting balances), corrections, transfers between accounts, dishonoured cheques. Records debit, credit, narration — the 'book of original entry' for unusual items." },
          { heading: "Posting", body: "Cash book entries post directly to ledger accounts (it's already a ledger). Journal entries post to the named accounts." },
        ],
        keyFormulas: [
          { name: "Cash book", statement: "Receipts (Dr) left | Payments (Cr) right" },
        ],
        workedExample: {
          problem: "Where is recorded: (a) cash sale, (b) opening capital, (c) bank transfer to supplier?",
          solution: "(a) Cash book receipts. (b) Journal (opening entry). (c) Cash book payments.",
        },
      },
      questions: [
        {
          id: "olacc-u1-cb-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The cash book records…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cash and bank transactions" }, { id: "b", text: "Only credit sales" }, { id: "c", text: "Only purchases" }, { id: "d", text: "Only year-end entries" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Cash book", statement: "Cash+bank records." }], steps: [{ reasoning: "Cash and bank.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Cash and bank" },
        },
        {
          id: "olacc-u1-cb-q2", difficulty: "core", totalMarks: 2,
          stem: "When is the journal used?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Journal", statement: "Non-routine entries." }], steps: [
            { reasoning: "Opening entries, corrections, transfers.", marks: 1, markCode: "M" },
            { reasoning: "Transactions not fitting day books.", marks: 1, markCode: "A" },
          ], finalAnswer: "For non-routine transactions — opening balances, corrections, transfers, dishonoured cheques." },
        },
        {
          id: "olacc-u1-cb-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why the cash book has receipts on the left and payments on the right.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Cash book layout", statement: "Dr receipts, Cr payments." }], steps: [
            { reasoning: "Receipts increase cash — debit side.", marks: 1, markCode: "M" },
            { reasoning: "Payments decrease cash — credit side.", marks: 1, markCode: "M" },
            { reasoning: "Balances show cash position.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Receipts (debit) increase cash on the left; payments (credit) decrease it on the right." },
        },
        {
          id: "olacc-u1-cb-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Books of prime entry review.",
          parts: [
            { label: "a", prompt: "What does the cash book record?", marks: 2 },
            { label: "b", prompt: "Name two uses of the journal.", marks: 2 },
            { label: "c", prompt: "Distinguish day book from cash book.", marks: 2 },
            { label: "d", prompt: "Where would an opening balance be recorded?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Prime entry", statement: "Cash book, journal, day books." },
          ], steps: [
            { part: "a", reasoning: "Cash and bank transactions.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Opening entries/corrections.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Transfers/dishonoured cheques.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Day book: credit transactions.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Cash book: cash/bank.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Journal.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Non-routine entry.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) cash+bank (b) opening/corrections (c) credit vs cash (d) journal" },
        },
      ],
    },
  ],
  notes: [
    { id: "olacc-u1-1-3-notes", title: "Books of prime entry — notes", summary: "Day books, cash book and journal for recording transactions.",
      sections: [
        { heading: "Day books", body: "Sales, purchases, sales returns, purchases returns — chronological credit records." },
        { heading: "Cash book & journal", body: "Cash book: all cash/bank transactions. Journal: opening entries, corrections, transfers." },
      ] },
  ],
};
