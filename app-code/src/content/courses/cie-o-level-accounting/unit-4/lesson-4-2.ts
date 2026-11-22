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
            { id: "a", text: "Purchases" },
            { id: "b", text: "Expenses" },
            { id: "c", text: "Capital" },
            { id: "d", text: "Sales revenue" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Sales returns", statement: "Reduce sales." }], steps: [{ reasoning: "Reduces sales.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Sales revenue" },
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
        {
          id: "olacc-u4-ret-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A credit note is issued when…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The business buys stock" },
            { id: "b", text: "Cash is received" },
            { id: "c", text: "A customer returns goods" },
            { id: "d", text: "A supplier returns goods" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Credit note", statement: "For customer returns." }], steps: [{ reasoning: "A credit note reduces what the customer owes after returning goods.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** A customer returns goods" },
        },
        {
          id: "olacc-u4-ret-q6", difficulty: "core", totalMarks: 1,
          stem: "Goods returned to a supplier are first recorded in the…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cash book" },
            { id: "b", text: "Purchases returns day book" },
            { id: "c", text: "Sales day book" },
            { id: "d", text: "Sales returns day book" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Purchases returns day book", statement: "Goods back to suppliers." }], steps: [{ reasoning: "Returns to suppliers go in the purchases returns day book.", marks: 1, markCode: "M" }], finalAnswer: "**(b)** Purchases returns day book" },
        },
        {
          id: "olacc-u4-ret-q7", difficulty: "core", totalMarks: 2,
          stem: "Sales are $10,000, sales returns are $500, purchases are $6,000 and purchases returns are $300. Enter (a) net sales, (b) net purchases.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 9500 }, { label: "(b)", answer: 5700 }] },
          markscheme: { principles: [{ kind: "principle", name: "Net figures", statement: "Gross minus returns." }], steps: [
            { reasoning: "$10,000 - $500 = $9,500 net sales.", marks: 1, markCode: "M" },
            { reasoning: "$6,000 - $300 = $5,700 net purchases.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $9,500 (b) $5,700" },
        },
        {
          id: "olacc-u4-ret-q8", difficulty: "core", totalMarks: 2,
          stem: "What is the effect of sales returns on the income statement?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Sales returns", statement: "Reduce sales." }], steps: [
            { reasoning: "Sales returns are deducted from sales revenue.", marks: 1, markCode: "M" },
            { reasoning: "This reduces gross profit and net profit.", marks: 1, markCode: "A" },
          ], finalAnswer: "Sales returns reduce net sales, which lowers gross profit and net profit." },
        },
        {
          id: "olacc-u4-ret-q9", difficulty: "foundation", totalMarks: 1,
          stem: "When the business returns goods to a supplier, it issues a…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Invoice" },
            { id: "b", text: "Debit note" },
            { id: "c", text: "Credit note" },
            { id: "d", text: "Receipt" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Debit note", statement: "For supplier returns." }], steps: [{ reasoning: "A debit note is sent to the supplier for goods returned.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Debit note" },
        },
        {
          id: "olacc-u4-ret-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the ledger entries for purchases returns of $400.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Purchases returns entries", statement: "Dr supplier, Cr returns." }], steps: [
            { reasoning: "Debit the supplier's account $400 — reducing what we owe.", marks: 1, markCode: "M" },
            { reasoning: "Credit the Purchases Returns account $400.", marks: 1, markCode: "M" },
            { reasoning: "The returns are recorded in the purchases returns day book first.", marks: 1, markCode: "M" },
            { reasoning: "Correct entries.", marks: 1, markCode: "A" },
          ], finalAnswer: "Dr Supplier $400; Cr Purchases Returns $400 — reduces purchases and the amount owed." },
        },
        {
          id: "olacc-u4-ret-q11", difficulty: "core", totalMarks: 2,
          stem: "Sales returns of $600 are recorded. Enter (a) the amount debited to Sales Returns, (b) the amount credited to debtors.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 600 }, { label: "(b)", answer: 600 }] },
          markscheme: { principles: [{ kind: "principle", name: "Sales returns entries", statement: "Dr returns, Cr debtor." }], steps: [
            { reasoning: "Sales Returns is debited $600.", marks: 1, markCode: "M" },
            { reasoning: "Debtors (customer accounts) are credited $600.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $600 (b) $600" },
        },
        {
          id: "olacc-u4-ret-q12", difficulty: "core", totalMarks: 2,
          stem: "Why does a business issue a credit note to a customer who returns goods?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Credit note", statement: "Formal record of return." }], steps: [
            { reasoning: "It formally acknowledges the return and the amount refunded or credited.", marks: 1, markCode: "M" },
            { reasoning: "It provides the document needed to record the sales return in the books.", marks: 1, markCode: "A" },
          ], finalAnswer: "To document the return and the reduction in what the customer owes, providing the record for bookkeeping." },
        },
        {
          id: "olacc-u4-ret-q13", difficulty: "challenge", totalMarks: 1,
          stem: "The total of the sales returns day book is posted to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cash account only" },
            { id: "b", text: "Purchases Returns and creditors" },
            { id: "c", text: "Sales account and debtors" },
            { id: "d", text: "Sales Returns account (debit) and debtors' accounts (credit)" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "SR posting", statement: "Dr returns, Cr debtors." }], steps: [{ reasoning: "Sales returns debit Sales Returns and credit customers' accounts.", marks: 1, markCode: "M" }], finalAnswer: "**(d)** Sales Returns Dr, debtors Cr" },
        },
        {
          id: "olacc-u4-ret-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how sales returns and purchases returns affect the income statement.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Returns and IS", statement: "Both reduce figures." }], steps: [
            { reasoning: "Sales returns are deducted from sales revenue, reducing gross profit.", marks: 1, markCode: "M" },
            { reasoning: "Purchases returns are deducted from purchases, reducing cost of sales.", marks: 1, markCode: "M" },
            { reasoning: "High returns may indicate poor quality or customer dissatisfaction, hurting overall profit.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Sales returns cut revenue and purchases returns cut cost of sales — both adjust the trading figures and can signal problems affecting profit." },
        },
        {
          id: "olacc-u4-ret-q15", difficulty: "challenge", totalMarks: 2,
          stem: "A sales returns day book lists entries of $200, $350 and $450. Enter (a) the total sales returns, (b) the number of entries.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 1000 }, { label: "(b)", answer: 3 }] },
          markscheme: { principles: [{ kind: "principle", name: "Day book totals", statement: "Sum the entries." }], steps: [
            { reasoning: "$200 + $350 + $450 = $1,000.", marks: 1, markCode: "M" },
            { reasoning: "Three returns were recorded.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $1,000 (b) 3" },
        },
        {
          id: "olacc-u4-ret-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Returns review.",
          parts: [
            { label: "a", prompt: "Define sales returns.", marks: 1 },
            { label: "b", prompt: "Define purchases returns.", marks: 1 },
            { label: "c", prompt: "Distinguish a credit note from a debit note.", marks: 2 },
            { label: "d", prompt: "Give the ledger entries for $150 of sales returns.", marks: 2 },
            { label: "e", prompt: "Explain how returns affect profit.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Returns", statement: "Types, notes, entries, profit." },
          ], steps: [
            { part: "a", reasoning: "Goods returned by customers.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Goods returned to suppliers.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Credit note → customer; debit note → supplier.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct distinction.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Dr Sales Returns $150.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Cr Debtor $150.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Reduce sales and purchases.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Affect gross profit.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) cust returns (b) supp returns (c) credit vs debit (d) Dr SR Cr debtor (e) ↓profit" },
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
            { id: "a", text: "Cash sales" },
            { id: "b", text: "Credit notes issued to customers" },
            { id: "c", text: "Purchases made" },
            { id: "d", text: "Bank payments" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "SR day book", statement: "Credit notes." }], steps: [{ reasoning: "Credit notes.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Credit notes" },
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
        {
          id: "olacc-u4-rb-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The purchases returns day book records…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cash sales" },
            { id: "b", text: "Bank payments" },
            { id: "c", text: "Debit notes issued to suppliers" },
            { id: "d", text: "Credit notes issued to customers" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "PR day book", statement: "Debit notes to suppliers." }], steps: [{ reasoning: "The purchases returns day book records debit notes sent to suppliers.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Debit notes to suppliers" },
        },
        {
          id: "olacc-u4-rb-q6", difficulty: "core", totalMarks: 1,
          stem: "A returns day book typically includes columns for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only the total" },
            { id: "b", text: "Bank balance only" },
            { id: "c", text: "Date, document number, name and amount" },
            { id: "d", text: "Profit and loss" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Day book columns", statement: "Chronological detail." }], steps: [{ reasoning: "Each entry records date, document number, name and amount.", marks: 1, markCode: "M" }], finalAnswer: "**(c)** Date, document number, name, amount" },
        },
        {
          id: "olacc-u4-rb-q7", difficulty: "core", totalMarks: 2,
          stem: "The sales returns day book totals $1,200 and the purchases returns day book totals $800. Enter (a) the amount debited to Sales Returns, (b) the amount credited to Purchases Returns.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 1200 }, { label: "(b)", answer: 800 }] },
          markscheme: { principles: [{ kind: "principle", name: "Returns posting", statement: "Totals to returns accounts." }], steps: [
            { reasoning: "Sales Returns is debited with the $1,200 total.", marks: 1, markCode: "M" },
            { reasoning: "Purchases Returns is credited with the $800 total.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $1,200 (b) $800" },
        },
        {
          id: "olacc-u4-rb-q8", difficulty: "core", totalMarks: 2,
          stem: "How are the totals from returns day books posted to the ledger?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Returns posting", statement: "Total + individual amounts." }], steps: [
            { reasoning: "The day book total posts to the Sales Returns or Purchases Returns account.", marks: 1, markCode: "M" },
            { reasoning: "Individual amounts post to each customer's or supplier's account.", marks: 1, markCode: "A" },
          ], finalAnswer: "Totals go to the returns accounts; individual amounts go to the personal accounts of customers/suppliers." },
        },
        {
          id: "olacc-u4-rb-q9", difficulty: "core", totalMarks: 1,
          stem: "Returns are recorded in separate day books mainly to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Save paper" },
            { id: "b", text: "Track returns distinctly and monitor return rates" },
            { id: "c", text: "Increase sales" },
            { id: "d", text: "Avoid the cash book" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Returns books", statement: "Separate tracking." }], steps: [{ reasoning: "Separate books allow monitoring of returns and clean posting to returns accounts.", marks: 1, markCode: "M" }], finalAnswer: "**(b)** Track returns and monitor rates" },
        },
        {
          id: "olacc-u4-rb-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the posting process from the sales and purchases returns day books to the ledger accounts.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Returns posting", statement: "Totals and individuals." }], steps: [
            { reasoning: "Sales returns total is debited to Sales Returns and credited to debtors.", marks: 1, markCode: "M" },
            { reasoning: "Purchases returns total is credited to Purchases Returns and debited to creditors.", marks: 1, markCode: "M" },
            { reasoning: "Individual entries post to each customer's or supplier's account.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "SR total: Dr Sales Returns, Cr debtors. PR total: Cr Purchases Returns, Dr creditors — plus individual postings." },
        },
        {
          id: "olacc-u4-rb-q11", difficulty: "foundation", totalMarks: 2,
          stem: "A sales returns day book lists entries of $150, $250 and $400; a purchases returns day book lists $100 and $200. Enter (a) total sales returns, (b) total purchases returns.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 800 }, { label: "(b)", answer: 300 }] },
          markscheme: { principles: [{ kind: "principle", name: "Day book totals", statement: "Sum entries." }], steps: [
            { reasoning: "$150 + $250 + $400 = $800 sales returns.", marks: 1, markCode: "M" },
            { reasoning: "$100 + $200 = $300 purchases returns.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $800 (b) $300" },
        },
        {
          id: "olacc-u4-rb-q12", difficulty: "core", totalMarks: 2,
          stem: "In the context of returns, what is the difference between a credit note and a debit note?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Credit vs debit note", statement: "Customer vs supplier." }], steps: [
            { reasoning: "A credit note is issued to a customer for goods they returned.", marks: 1, markCode: "M" },
            { reasoning: "A debit note is sent to a supplier for goods the business returned.", marks: 1, markCode: "A" },
          ], finalAnswer: "Credit note goes to the customer (sales returns); debit note goes to the supplier (purchases returns)." },
        },
        {
          id: "olacc-u4-rb-q13", difficulty: "foundation", totalMarks: 1,
          stem: "Sales returns reduce…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Expenses" },
            { id: "b", text: "Purchases" },
            { id: "c", text: "Capital" },
            { id: "d", text: "Sales revenue" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Sales returns", statement: "Reduce sales." }], steps: [{ reasoning: "Sales returns are deducted from sales revenue.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Sales revenue" },
        },
        {
          id: "olacc-u4-rb-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why the purchases returns day book total is credited to the Purchases Returns account.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "PR posting", statement: "Credit returns account." }], steps: [
            { reasoning: "Purchases Returns is a nominal account recording goods sent back.", marks: 1, markCode: "M" },
            { reasoning: "It is credited because it reduces the purchases figure in cost of sales.", marks: 1, markCode: "M" },
            { reasoning: "The corresponding debit goes to suppliers' accounts, reducing what is owed.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Crediting Purchases Returns reduces purchases — it is the counterpart debit to suppliers' accounts." },
        },
        {
          id: "olacc-u4-rb-q15", difficulty: "challenge", totalMarks: 2,
          stem: "The sales returns day book total is $950. Enter (a) the debit to Sales Returns, (b) the credit to debtors.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 950 }, { label: "(b)", answer: 950 }] },
          markscheme: { principles: [{ kind: "principle", name: "SR posting", statement: "Dr returns, Cr debtors." }], steps: [
            { reasoning: "Sales Returns is debited $950.", marks: 1, markCode: "M" },
            { reasoning: "Debtors are credited $950.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $950 (b) $950" },
        },
        {
          id: "olacc-u4-rb-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Returns day books review.",
          parts: [
            { label: "a", prompt: "What does the sales returns day book record?", marks: 1 },
            { label: "b", prompt: "What does the purchases returns day book record?", marks: 1 },
            { label: "c", prompt: "Where does the sales returns total post?", marks: 2 },
            { label: "d", prompt: "Where does the purchases returns total post?", marks: 2 },
            { label: "e", prompt: "Why are returns kept in separate day books?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Returns books", statement: "Records, posting, purpose." },
          ], steps: [
            { part: "a", reasoning: "Credit notes issued to customers.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Debit notes sent to suppliers.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Dr Sales Returns, Cr debtors.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Cr Purchases Returns, Dr creditors.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Distinct tracking and monitoring of returns.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Simplifies posting to returns accounts.", marks: 1, markCode: "M" },
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
