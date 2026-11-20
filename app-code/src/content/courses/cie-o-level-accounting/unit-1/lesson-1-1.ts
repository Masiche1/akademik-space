import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "olacc-u1-lesson-1-1",
  code: "1-1",
  title: "Nature and Purpose of Accounting",
  goal: "I CAN explain what accounting is, why it is needed and its purpose.",
  standards: ["7706 1.1"],
  vocabulary: [
    { term: "Accounting", definition: "System of recording, classifying and summarising financial transactions." },
    { term: "Bookkeeping", definition: "Recording day-to-day financial transactions." },
    { term: "Financial statement", definition: "Summary of financial position or performance." },
    { term: "Stakeholder", definition: "Person with interest in the business — owner, manager, creditor, tax authority." },
    { term: "Assets", definition: "Resources owned by the business." },
    { term: "Liabilities", definition: "Amounts owed by the business." },
  ],
  concepts: [
    {
      id: "olacc-u1-nature",
      title: "What is accounting?",
      skill: "Explain the nature, purpose and users of accounting information.",
      lesson: {
        sections: [
          { heading: "Accounting vs bookkeeping", body: "**Bookkeeping** = recording transactions day by day. **Accounting** = broader — records, classifies, analyses and reports. Bookkeeping is part of accounting." },
          { heading: "Purpose", body: "- Record transactions systematically.\n- Show profit/loss for a period.\n- Show financial position at a date.\n- Provide information for decisions." },
          { heading: "Users", body: "Owners (profit?), managers (performance?), lenders (ability to repay?), tax authorities (tax due?), customers/suppliers (stability?)." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does a bank manager need accounting information?",
          solution: "To assess whether the business is profitable and can repay loans — checks income statement and balance sheet.",
        },
      },
      questions: [
        {
          id: "olacc-u1-na-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Accounting involves…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Recording, classifying and reporting financial data" }, { id: "b", text: "Only typing letters" }, { id: "c", text: "Selling products" }, { id: "d", text: "Designing buildings" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Accounting", statement: "Record, classify, report." }], steps: [{ reasoning: "Correct description.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Recording, classifying, reporting" },
        },
        {
          id: "olacc-u1-na-q2", difficulty: "core", totalMarks: 2,
          stem: "Distinguish bookkeeping from accounting.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Bookkeeping vs accounting", statement: "Recording vs broader system." }], steps: [
            { reasoning: "Bookkeeping = recording transactions.", marks: 1, markCode: "M" },
            { reasoning: "Accounting = records + classifies + analyses + reports.", marks: 1, markCode: "A" },
          ], finalAnswer: "Bookkeeping records transactions; accounting also classifies, analyses and reports them." },
        },
        {
          id: "olacc-u1-na-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two purposes of accounting information for a business owner.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Purpose", statement: "Profit + position + decisions." }], steps: [
            { reasoning: "Shows whether business is profitable.", marks: 1, markCode: "M" },
            { reasoning: "Shows financial position (assets vs debts).", marks: 1, markCode: "M" },
            { reasoning: "Aids decisions on pricing, spending, growth.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Reveals profitability and financial position, supporting business decisions." },
        },
        {
          id: "olacc-u1-na-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Accounting basics review.",
          parts: [
            { label: "a", prompt: "Define accounting.", marks: 2 },
            { label: "b", prompt: "Distinguish bookkeeping from accounting.", marks: 2 },
            { label: "c", prompt: "Name two stakeholders and what they need.", marks: 3 },
            { label: "d", prompt: "Define assets and liabilities.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Accounting basics", statement: "Definition, users, elements." },
          ], steps: [
            { part: "a", reasoning: "Records/classifies/reports finances.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Bookkeeping: records only.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Accounting: broader analysis.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Owner: profit.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Bank: repayment ability.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Two valid stakeholders.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Assets: owned; liabilities: owed.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct definitions.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) record+classify+report (b) record vs analyse (c) owner+bank (d) owned vs owed" },
        },
      ],
    },
    {
      id: "olacc-u1-docs",
      title: "Source documents",
      skill: "Identify source documents and explain their role in recording transactions.",
      lesson: {
        sections: [
          { heading: "What are source documents?", body: "Original evidence of a transaction — invoice, receipt, cheque, credit note. Every recorded transaction should have a source document as proof." },
          { heading: "Common documents", body: "- **Invoice**: bill sent to customer for goods/services.\n- **Receipt**: proof of payment received.\n- **Credit note**: reduces amount owed (returns/discounts).\n- **Debit note**: increases amount owed.\n- **Cheque**: written order to pay from bank account.\n- **Pay-in slip**: paying money into bank." },
          { heading: "Why they matter", body: "Provide evidence for audit, prevent disputes, ensure accurate recording — no document, questionable entry." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A customer returns goods worth $50. Which document is issued?",
          solution: "Credit note — reduces the amount the customer owes by $50.",
        },
      },
      questions: [
        {
          id: "olacc-u1-sd-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A source document is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Evidence of a transaction" }, { id: "b", text: "A financial statement" }, { id: "c", text: "A bank account" }, { id: "d", text: "A ledger page" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Source document", statement: "Transaction evidence." }], steps: [{ reasoning: "Source doc = evidence.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Evidence of transaction" },
        },
        {
          id: "olacc-u1-sd-q2", difficulty: "core", totalMarks: 2,
          stem: "What is a credit note used for?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Credit note", statement: "Reduces amount owed." }], steps: [
            { reasoning: "Issued when goods returned or discount given.", marks: 1, markCode: "M" },
            { reasoning: "Reduces customer's debt.", marks: 1, markCode: "A" },
          ], finalAnswer: "Document reducing the amount a customer owes — for returns or allowances." },
        },
        {
          id: "olacc-u1-sd-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why source documents are important in accounting.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Source docs", statement: "Evidence and accuracy." }], steps: [
            { reasoning: "Provide proof of transactions.", marks: 1, markCode: "M" },
            { reasoning: "Support audit verification.", marks: 1, markCode: "M" },
            { reasoning: "Prevent disputes/errors.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "They evidence transactions, support audits and prevent disputes." },
        },
        {
          id: "olacc-u1-sd-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Source documents review.",
          parts: [
            { label: "a", prompt: "Define source document.", marks: 2 },
            { label: "b", prompt: "What is an invoice?", marks: 2 },
            { label: "c", prompt: "Distinguish credit note from debit note.", marks: 2 },
            { label: "d", prompt: "Why keep source documents?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Source docs", statement: "Evidence, invoice, notes, purpose." },
          ], steps: [
            { part: "a", reasoning: "Evidence of transaction.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Bill to customer.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Credit: reduces debt.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Debit: increases debt.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Proof for audit.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Prevents disputes.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Clear reason.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) evidence (b) bill (c) reduce vs increase (d) proof+audit" },
        },
      ],
    },
  ],
  notes: [
    { id: "olacc-u1-1-1-notes", title: "Introduction to accounting — notes", summary: "Nature, purpose, users and source documents.",
      sections: [
        { heading: "Accounting", body: "Records, classifies, analyses and reports financial transactions for stakeholders." },
        { heading: "Documents", body: "Invoices, receipts, credit/debit notes provide transaction evidence." },
      ] },
  ],
};
