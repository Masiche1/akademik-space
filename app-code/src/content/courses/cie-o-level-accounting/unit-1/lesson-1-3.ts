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
            { id: "a", text: "Only cash sales" },
            { id: "b", text: "Only bank transactions" },
            { id: "c", text: "Only year-end adjustments" },
            { id: "d", text: "Credit transactions chronologically" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Day book", statement: "Chronological credit records." }], steps: [{ reasoning: "Credit transactions in order.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Credit transactions" },
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
        {
          id: "olacc-u1-db-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which day book records goods returned by customers?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sales returns day book" },
            { id: "b", text: "Purchases day book" },
            { id: "c", text: "Purchases returns day book" },
            { id: "d", text: "Sales day book" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Sales returns day book", statement: "Records goods returned by customers." }], steps: [{ reasoning: "Customer returns are recorded in the sales returns day book.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Sales returns day book" },
        },
        {
          id: "olacc-u1-db-q6", difficulty: "core", totalMarks: 1,
          stem: "A credit sale of goods is first recorded in the…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Purchases returns day book" },
            { id: "b", text: "Journal" },
            { id: "c", text: "Sales day book" },
            { id: "d", text: "Cash book" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Sales day book", statement: "First record of credit sales." }], steps: [{ reasoning: "Credit sales enter the sales day book before posting to the ledger.", marks: 1, markCode: "M" }], finalAnswer: "**(c)** Sales day book" },
        },
        {
          id: "olacc-u1-db-q7", difficulty: "core", totalMarks: 2,
          stem: "A sales day book shows credit sales of $1,200 on Monday, $800 on Wednesday and $2,500 on Friday. Enter (a) the week's total sales, (b) the number of entries recorded.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 4500 }, { label: "(b)", answer: 3 }] },
          markscheme: { principles: [{ kind: "principle", name: "Day book totals", statement: "Sum entries chronologically." }], steps: [
            { reasoning: "$1,200 + $800 + $2,500 = $4,500.", marks: 1, markCode: "M" },
            { reasoning: "Three sales were recorded.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $4,500 (b) 3" },
        },
        {
          id: "olacc-u1-db-q8", difficulty: "core", totalMarks: 2,
          stem: "State two items of information typically recorded for each transaction in a day book.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Day book columns", statement: "Date, name, document, amount." }], steps: [
            { reasoning: "Date and name of customer/supplier.", marks: 1, markCode: "M" },
            { reasoning: "Invoice/document number and amount.", marks: 1, markCode: "A" },
          ], finalAnswer: "Date, name of the person, document number and amount." },
        },
        {
          id: "olacc-u1-db-q9", difficulty: "core", totalMarks: 1,
          stem: "The total of the purchases returns day book is posted to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Purchases account and debtors" },
            { id: "b", text: "Sales Returns account and debtors" },
            { id: "c", text: "Purchases Returns account and creditors" },
            { id: "d", text: "Sales account and debtors" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Returns posting", statement: "PR total to Purchases Returns + creditors." }], steps: [{ reasoning: "Purchases returns credit Purchases Returns and debit suppliers' accounts.", marks: 1, markCode: "M" }], finalAnswer: "**(c)** Purchases Returns account and creditors" },
        },
        {
          id: "olacc-u1-db-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how credit sales pass from the sales day book to the ledger accounts.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Day book posting", statement: "Record then post totals." }], steps: [
            { reasoning: "Each credit sale is entered in the sales day book chronologically.", marks: 1, markCode: "M" },
            { reasoning: "At period end the day book is totalled.", marks: 1, markCode: "M" },
            { reasoning: "The total is posted to the Sales account (credit) and to each debtor's account (debit).", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation of the flow.", marks: 1, markCode: "A" },
          ], finalAnswer: "Sales are recorded in the day book, totalled, then posted to Sales (credit) and individual debtors' accounts (debit)." },
        },
        {
          id: "olacc-u1-db-q11", difficulty: "foundation", totalMarks: 2,
          stem: "A purchases day book total is $5,000 and the purchases returns day book total is $750. Enter (a) total credit purchases, (b) net purchases.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 5000 }, { label: "(b)", answer: 4250 }] },
          markscheme: { principles: [{ kind: "principle", name: "Net purchases", statement: "Purchases minus purchases returns." }], steps: [
            { reasoning: "Purchases day book total is $5,000.", marks: 1, markCode: "M" },
            { reasoning: "$5,000 - $750 = $4,250 net purchases.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $5,000 (b) $4,250" },
        },
        {
          id: "olacc-u1-db-q12", difficulty: "core", totalMarks: 2,
          stem: "Why is the journal not normally used to record ordinary credit sales?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Division of books", statement: "Each book has its own transactions." }], steps: [
            { reasoning: "Credit sales fit the sales day book, which is designed for them.", marks: 1, markCode: "M" },
            { reasoning: "The journal is reserved for non-routine entries.", marks: 1, markCode: "A" },
          ], finalAnswer: "Credit sales belong in the sales day book; the journal is for transactions that do not fit the day books or cash book." },
        },
        {
          id: "olacc-u1-db-q13", difficulty: "foundation", totalMarks: 1,
          stem: "Which of the following is NOT a day book?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sales returns day book" },
            { id: "b", text: "Purchases day book" },
            { id: "c", text: "Sales day book" },
            { id: "d", text: "Cash book" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Day books", statement: "Sales, purchases and returns books." }], steps: [{ reasoning: "The cash book records cash and bank transactions, not credit sales/purchases.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Cash book" },
        },
        {
          id: "olacc-u1-db-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Distinguish between a sales return and a purchases return, including the document issued for each.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Returns", statement: "Sales vs purchases returns and notes." }], steps: [
            { reasoning: "Sales return: goods come back from a customer; a credit note is issued.", marks: 1, markCode: "M" },
            { reasoning: "Purchases return: goods go back to a supplier; a debit note is issued.", marks: 1, markCode: "M" },
            { reasoning: "Sales returns reduce sales; purchases returns reduce purchases.", marks: 1, markCode: "M" },
            { reasoning: "Clear distinction.", marks: 1, markCode: "A" },
          ], finalAnswer: "Sales return = customer returns goods, credit note issued, reduces sales. Purchases return = goods returned to supplier, debit note issued, reduces purchases." },
        },
        {
          id: "olacc-u1-db-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A business records credit sales of $12,000, sales returns of $900, credit purchases of $8,000 and purchases returns of $400. Enter (a) net sales, (b) net purchases, (c) total returns.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 11100 }, { label: "(b)", answer: 7600 }, { label: "(c)", answer: 1300 }] },
          markscheme: { principles: [{ kind: "principle", name: "Net figures", statement: "Gross minus returns." }], steps: [
            { reasoning: "$12,000 - $900 = $11,100 net sales.", marks: 1, markCode: "M" },
            { reasoning: "$8,000 - $400 = $7,600 net purchases.", marks: 1, markCode: "M" },
            { reasoning: "$900 + $400 = $1,300 total returns.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $11,100 (b) $7,600 (c) $1,300" },
        },
        {
          id: "olacc-u1-db-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Books of prime entry review.",
          parts: [
            { label: "a", prompt: "What is a book of prime entry?", marks: 2 },
            { label: "b", prompt: "Name the four day books.", marks: 2 },
            { label: "c", prompt: "State two uses of the journal.", marks: 2 },
            { label: "d", prompt: "Where is a credit purchase first recorded?", marks: 1 },
            { label: "e", prompt: "Why are day books kept in date order?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Prime entry", statement: "Purpose, day books, journal." },
          ], steps: [
            { part: "a", reasoning: "First record of transactions.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Sales, purchases, sales returns, purchases returns day books.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "All four named.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Opening entries and corrections/transfers.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Two valid uses.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Purchases day book.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Chronological order aids checking and posting.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Clear reason.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) first record (b) 4 day books (c) opening+corrections (d) purchases DB (e) chronological" },
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
            { id: "a", text: "Cash and bank transactions" },
            { id: "b", text: "Only purchases" },
            { id: "c", text: "Only year-end entries" },
            { id: "d", text: "Only credit sales" },
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
        {
          id: "olacc-u1-cb-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The cash book is used to record…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only journal entries" },
            { id: "b", text: "Only credit sales" },
            { id: "c", text: "Only year-end adjustments" },
            { id: "d", text: "Cash and bank transactions" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Cash book", statement: "All cash and bank transactions." }], steps: [{ reasoning: "Cash book covers cash and bank receipts/payments.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Cash and bank transactions" },
        },
        {
          id: "olacc-u1-cb-q6", difficulty: "core", totalMarks: 1,
          stem: "Opening balances at the start of a business are recorded in the…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Purchases returns day book" },
            { id: "b", text: "Journal" },
            { id: "c", text: "Cash book only" },
            { id: "d", text: "Sales day book" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Journal", statement: "Opening entries." }], steps: [{ reasoning: "Opening balances are non-routine and go in the journal.", marks: 1, markCode: "M" }], finalAnswer: "**(b)** Journal" },
        },
        {
          id: "olacc-u1-cb-q7", difficulty: "core", totalMarks: 2,
          stem: "A cash book shows cash receipts of $3,000 and cash payments of $1,800; bank receipts of $5,000 and bank payments of $4,700. Enter (a) the cash balance, (b) the bank balance.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 1200 }, { label: "(b)", answer: 300 }] },
          markscheme: { principles: [{ kind: "principle", name: "Cash book balances", statement: "Receipts minus payments per column." }], steps: [
            { reasoning: "$3,000 - $1,800 = $1,200 cash balance.", marks: 1, markCode: "M" },
            { reasoning: "$5,000 - $4,700 = $300 bank balance.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $1,200 (b) $300" },
        },
        {
          id: "olacc-u1-cb-q8", difficulty: "core", totalMarks: 2,
          stem: "Why can the cash book act as both a book of prime entry and a ledger account?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Cash book", statement: "Prime entry + ledger." }], steps: [
            { reasoning: "It is the first record of cash/bank transactions.", marks: 1, markCode: "M" },
            { reasoning: "Its balances are the cash and bank ledger balances — no separate posting needed.", marks: 1, markCode: "A" },
          ], finalAnswer: "It records transactions first (prime entry) and its column balances serve directly as the cash and bank ledger accounts." },
        },
        {
          id: "olacc-u1-cb-q9", difficulty: "core", totalMarks: 1,
          stem: "A dishonoured cheque received from a customer is recorded in the…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Purchases returns day book" },
            { id: "b", text: "Sales day book" },
            { id: "c", text: "Sales returns day book" },
            { id: "d", text: "Journal" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Journal", statement: "Non-routine entries incl. dishonoured cheques." }], steps: [{ reasoning: "Dishonoured cheques are non-routine and recorded in the journal.", marks: 1, markCode: "M" }], finalAnswer: "**(d)** Journal" },
        },
        {
          id: "olacc-u1-cb-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the layout of the cash book — why receipts are on the left and payments on the right.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Cash book layout", statement: "Dr receipts left, Cr payments right." }], steps: [
            { reasoning: "Receipts increase cash — debit side on the left.", marks: 1, markCode: "M" },
            { reasoning: "Payments decrease cash — credit side on the right.", marks: 1, markCode: "M" },
            { reasoning: "Balances are found by comparing the two sides.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Receipts (debit) sit left and payments (credit) right, matching the T-account convention so balances show the cash position." },
        },
        {
          id: "olacc-u1-cb-q11", difficulty: "foundation", totalMarks: 2,
          stem: "A cash book shows cash receipts of $4,000 and cash payments of $2,600; bank receipts of $8,000 and bank payments of $9,500. Enter (a) the cash balance, (b) the bank overdraft.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 1400 }, { label: "(b)", answer: 1500 }] },
          markscheme: { principles: [{ kind: "principle", name: "Cash book balances", statement: "Receipts minus payments per column." }], steps: [
            { reasoning: "Cash: $4,000 - $2,600 = $1,400 debit balance.", marks: 1, markCode: "M" },
            { reasoning: "Bank payments exceed receipts by $1,500 — a credit balance, i.e. overdraft.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $1,400 debit (b) $1,500 overdraft" },
        },
        {
          id: "olacc-u1-cb-q12", difficulty: "core", totalMarks: 2,
          stem: "Give two examples of transactions recorded in the journal.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Journal", statement: "Non-routine entries." }], steps: [
            { reasoning: "Opening balances or corrections.", marks: 1, markCode: "M" },
            { reasoning: "Transfers between accounts or dishonoured cheques.", marks: 1, markCode: "A" },
          ], finalAnswer: "Opening entries, corrections of errors, transfers between accounts and dishonoured cheques." },
        },
        {
          id: "olacc-u1-cb-q13", difficulty: "foundation", totalMarks: 1,
          stem: "In the cash book, payments are recorded on the…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Neither side" },
            { id: "b", text: "Debit/left side" },
            { id: "c", text: "Both sides equally" },
            { id: "d", text: "Credit/right side" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Cash book", statement: "Dr receipts, Cr payments." }], steps: [{ reasoning: "Payments reduce cash so they go on the credit (right) side.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Credit/right side" },
        },
        {
          id: "olacc-u1-cb-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how the cash book is balanced at the end of an accounting period.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Balancing", statement: "Total sides, find difference." }], steps: [
            { reasoning: "Total the receipts side and the payments side.", marks: 1, markCode: "M" },
            { reasoning: "The smaller side is balanced by the difference.", marks: 1, markCode: "M" },
            { reasoning: "The balance is brought down (b/d) to the next period.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Total each side, enter the difference on the smaller side, and bring the balance down to the next period." },
        },
        {
          id: "olacc-u1-cb-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A three-column cash book shows: receipts — cash $10,000, bank $15,000; payments — cash $8,000, bank $12,000. Enter (a) the cash balance, (b) the bank balance, (c) total receipts across both columns.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 2000 }, { label: "(b)", answer: 3000 }, { label: "(c)", answer: 25000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Cash book balancing", statement: "Per-column differences." }], steps: [
            { reasoning: "Cash: $10,000 - $8,000 = $2,000.", marks: 1, markCode: "M" },
            { reasoning: "Bank: $15,000 - $12,000 = $3,000.", marks: 1, markCode: "M" },
            { reasoning: "$10,000 + $15,000 = $25,000 total receipts.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $2,000 (b) $3,000 (c) $25,000" },
        },
        {
          id: "olacc-u1-cb-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Cash book and journal review.",
          parts: [
            { label: "a", prompt: "What does the cash book record?", marks: 2 },
            { label: "b", prompt: "Name two uses of the journal.", marks: 2 },
            { label: "c", prompt: "Where is an opening capital balance recorded?", marks: 1 },
            { label: "d", prompt: "Cash receipts $5,000, cash payments $3,500. Cash balance?", marks: 2 },
            { label: "e", prompt: "Why is the journal needed for unusual transactions?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Prime entry", statement: "Cash book, journal, balances." },
          ], steps: [
            { part: "a", reasoning: "All cash and bank transactions.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Opening entries and corrections/transfers.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Two valid uses.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Journal.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "$5,000 - $3,500 = $1,500 debit balance.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct side and amount.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "They do not fit day books or cash book.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Clear reason.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) cash+bank (b) opening/corrections (c) journal (d) 1500 Dr (e) non-routine" },
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
