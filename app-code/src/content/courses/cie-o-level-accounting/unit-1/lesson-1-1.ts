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
            { id: "a", text: "Only typing letters" },
            { id: "b", text: "Selling products" },
            { id: "c", text: "Designing buildings" },
            { id: "d", text: "Recording, classifying and reporting financial data" },
          ], correctChoiceId: "d" },
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
        {
          id: "olacc-u1-na-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which user would study accounting information to decide whether to lend money to a business?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A bank manager" },
            { id: "b", text: "Nobody outside the business" },
            { id: "c", text: "A passer-by" },
            { id: "d", text: "A passing customer" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Users", statement: "Stakeholders use accounting information." }], steps: [{ reasoning: "Banks check repayment ability before lending.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Bank manager" },
        },
        {
          id: "olacc-u1-na-q6", difficulty: "core", totalMarks: 2,
          stem: "A business has six interested parties: the owner, a manager, a bank, two suppliers and the tax office. Enter (a) the number of internal users, (b) the number of external users.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 2 }, { label: "(b)", answer: 4 }] },
          markscheme: { principles: [{ kind: "definition", name: "Internal vs external users", statement: "Inside the business vs outside." }], steps: [
            { reasoning: "Owner and manager are internal.", marks: 1, markCode: "M" },
            { reasoning: "Bank, suppliers and tax office are external.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 2 (b) 4" },
        },
        {
          id: "olacc-u1-na-q7", difficulty: "core", totalMarks: 2,
          stem: "Give two reasons why a business keeps accounting records.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Purpose", statement: "Record + inform." }], steps: [
            { reasoning: "Records transactions systematically.", marks: 1, markCode: "M" },
            { reasoning: "Shows profit/position for decisions.", marks: 1, markCode: "A" },
          ], finalAnswer: "To record transactions systematically and to provide information showing profit and financial position." },
        },
        {
          id: "olacc-u1-na-q8", difficulty: "foundation", totalMarks: 1,
          stem: "Bookkeeping is best described as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Recording financial transactions systematically" },
            { id: "b", text: "Auditing accounts" },
            { id: "c", text: "Analysing profit trends" },
            { id: "d", text: "Setting selling prices" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Bookkeeping", statement: "Day-to-day recording." }], steps: [{ reasoning: "Bookkeeping records transactions.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Recording transactions" },
        },
        {
          id: "olacc-u1-na-q9", difficulty: "core", totalMarks: 2,
          stem: "A sole trader invests $6,000 capital and the business owes $2,500 to creditors. Enter (a) the minimum total assets, (b) the capital.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 8500 }, { label: "(b)", answer: 6000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Equation", statement: "Assets = Capital + Liabilities." }], steps: [
            { reasoning: "$6,000 + $2,500 = $8,500 assets.", marks: 1, markCode: "M" },
            { reasoning: "Capital is the $6,000 invested.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $8,500 (b) $6,000" },
        },
        {
          id: "olacc-u1-na-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why the owner and the bank manager may read the same financial statements but look for different information.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Users", statement: "Different needs." }], steps: [
            { reasoning: "Owner wants profit and business health.", marks: 1, markCode: "M" },
            { reasoning: "Bank wants repayment ability — liquidity and gearing.", marks: 1, markCode: "M" },
            { reasoning: "Different figures are extracted for each purpose.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "The owner focuses on profit and returns while the bank focuses on whether the business can repay its debts." },
        },
        {
          id: "olacc-u1-na-q11", difficulty: "core", totalMarks: 2,
          stem: "Which of the following is an asset?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cash in hand" },
            { id: "b", text: "Money owed to suppliers" },
            { id: "c", text: "Capital invested" },
            { id: "d", text: "Sales for the year" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Asset", statement: "Resource owned by the business." }], steps: [
            { reasoning: "Cash in hand is owned by the business.", marks: 1, markCode: "M" },
            { reasoning: "Others are liabilities, capital or income.", marks: 1, markCode: "A" },
          ], finalAnswer: "**(b)** Cash in hand" },
        },
        {
          id: "olacc-u1-na-q12", difficulty: "core", totalMarks: 3,
          stem: "A business has cash $2,000, stock $3,000, equipment $10,000, owes suppliers $4,000 and has a bank loan of $6,000. Enter (a) total assets, (b) total liabilities, (c) capital.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 15000 }, { label: "(b)", answer: 10000 }, { label: "(c)", answer: 5000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Equation", statement: "Assets = Capital + Liabilities." }], steps: [
            { reasoning: "$2,000 + $3,000 + $10,000 = $15,000.", marks: 1, markCode: "M" },
            { reasoning: "$4,000 + $6,000 = $10,000 liabilities.", marks: 1, markCode: "M" },
            { reasoning: "$15,000 - $10,000 = $5,000 capital.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $15,000 (b) $10,000 (c) $5,000" },
        },
        {
          id: "olacc-u1-na-q13", difficulty: "core", totalMarks: 2,
          stem: "What is a financial statement? Give one example.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Financial statement", statement: "Summary of finances." }], steps: [
            { reasoning: "A summary of financial position or performance.", marks: 1, markCode: "M" },
            { reasoning: "E.g. balance sheet or income statement.", marks: 1, markCode: "A" },
          ], finalAnswer: "A summary of a business's financial position or performance — e.g. the balance sheet." },
        },
        {
          id: "olacc-u1-na-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Which is NOT a purpose of accounting information?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Guaranteeing business success" },
            { id: "b", text: "Recording transactions" },
            { id: "c", text: "Helping with decisions" },
            { id: "d", text: "Showing profit or loss" },
          ], aorrectChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Purpose", statement: "Inform, not guarantee." }], steps: [{ reasoning: "Accounting informs; it cannot guarantee success.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Guaranteeing business success" },
        },
        {
          id: "olacc-u1-na-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two ways accounting information helps a manager run a business.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Purpose", statement: "Performance + planning." }], steps: [
            { reasoning: "Shows whether the business is profitable.", marks: 1, markCode: "M" },
            { reasoning: "Shows costs and spending patterns.", marks: 1, markCode: "M" },
            { reasoning: "Supports planning and control decisions.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "It reveals profitability and cost patterns, supporting planning and control." },
        },
        {
          id: "olacc-u1-na-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Nature of accounting review.",
          parts: [
            { label: "a", prompt: "Define accounting.", marks: 2 },
            { label: "b", prompt: "Distinguish bookkeeping from accounting.", marks: 2 },
            { label: "c", prompt: "Name two stakeholders and state what each needs.", marks: 2 },
            { label: "d", prompt: "State whether each is an asset or a liability: bank loan, cash in hand, money owed to suppliers.", marks: 3 },
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
            { part: "c", reasoning: "Bank: repayment ability.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Bank loan + suppliers owed = liabilities.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Cash in hand = asset.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "All three correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) record+classify+report (b) record vs analyse (c) owner+bank (d) L/L/A" },
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
            { id: "a", text: "A ledger page" },
            { id: "b", text: "Evidence of a transaction" },
            { id: "c", text: "A bank account" },
            { id: "d", text: "A financial statement" },
          ], correctChoiceId: "b" },
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
        {
          id: "olacc-u1-sd-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which document does a business send to a customer to request payment for goods supplied on credit?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Credit note" },
            { id: "b", text: "Receipt" },
            { id: "c", text: "Pay-in slip" },
            { id: "d", text: "Invoice" },
          ], dorrectChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Invoice", statement: "Bill to customer." }], steps: [{ reasoning: "Invoice requests payment for credit sales.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Invoice" },
        },
        {
          id: "olacc-u1-sd-q6", difficulty: "core", totalMarks: 2,
          stem: "A customer owes $1,200 on credit. Goods worth $200 are returned and a credit note is issued. Enter (a) the amount of the credit note, (b) the new amount owed.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 200 }, { label: "(b)", answer: 1000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Credit note", statement: "Reduces amount owed." }], steps: [
            { reasoning: "Credit note equals returned goods $200.", marks: 1, markCode: "M" },
            { reasoning: "$1,200 - $200 = $1,000 owed.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $200 (b) $1,000" },
        },
        {
          id: "olacc-u1-sd-q7", difficulty: "core", totalMarks: 2,
          stem: "What is a receipt used for?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Receipt", statement: "Proof of payment." }], steps: [
            { reasoning: "Proof that payment was received.", marks: 1, markCode: "M" },
            { reasoning: "Evidence of the transaction.", marks: 1, markCode: "A" },
          ], finalAnswer: "A receipt is proof that money was received for a transaction." },
        },
        {
          id: "olacc-u1-sd-q8", difficulty: "foundation", totalMarks: 1,
          stem: "A pay-in slip is used to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Pay money into a bank account" },
            { id: "b", text: "Return goods to a supplier" },
            { id: "c", text: "Withdraw money from the bank" },
            { id: "d", text: "Write an order to pay" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Pay-in slip", statement: "Bank deposit evidence." }], steps: [{ reasoning: "Pay-in slip pays money into the bank.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Pay money into bank" },
        },
        {
          id: "olacc-u1-sd-q9", difficulty: "core", totalMarks: 2,
          stem: "A supplier's invoice totals $950 and a credit note of $150 is issued. Enter (a) the credit note value, (b) the balance still owed.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 150 }, { label: "(b)", answer: 800 }] },
          markscheme: { principles: [{ kind: "principle", name: "Credit note", statement: "Reduces amount owed." }], steps: [
            { reasoning: "Credit note is $150.", marks: 1, markCode: "M" },
            { reasoning: "$950 - $150 = $800 owed.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $150 (b) $800" },
        },
        {
          id: "olacc-u1-sd-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why every recorded transaction should be supported by a source document.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Source docs", statement: "Evidence and accuracy." }], steps: [
            { reasoning: "Provides proof of the transaction.", marks: 1, markCode: "M" },
            { reasoning: "Supports audit verification.", marks: 1, markCode: "M" },
            { reasoning: "Prevents disputes and errors.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Source documents evidence transactions, support audits and prevent disputes." },
        },
        {
          id: "olacc-u1-sd-q11", difficulty: "core", totalMarks: 2,
          stem: "A debit note is used to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Pay money into the bank" },
            { id: "b", text: "Reduce the amount owed" },
            { id: "c", text: "Record a cash sale" },
            { id: "d", text: "Increase the amount owed" },
          ], dorrectChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Debit note", statement: "Increases amount owed." }], steps: [
            { reasoning: "Debit note increases what is owed.", marks: 1, markCode: "M" },
            { reasoning: "Opposite of a credit note.", marks: 1, markCode: "A" },
          ], finalAnswer: "**(c)** Increase the amount owed" },
        },
        {
          id: "olacc-u1-sd-q12", difficulty: "core", totalMarks: 3,
          stem: "A business buys goods on credit: invoice $1,000 and returns $150 of goods. Enter (a) the invoice value, (b) the returns value, (c) the net amount owed.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 1000 }, { label: "(b)", answer: 150 }, { label: "(c)", answer: 850 }] },
          markscheme: { principles: [{ kind: "principle", name: "Credit purchases", statement: "Invoice less returns." }], steps: [
            { reasoning: "Invoice is $1,000.", marks: 1, markCode: "M" },
            { reasoning: "Returns are $150.", marks: 1, markCode: "M" },
            { reasoning: "$1,000 - $150 = $850 owed.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $1,000 (b) $150 (c) $850" },
        },
        {
          id: "olacc-u1-sd-q13", difficulty: "core", totalMarks: 2,
          stem: "Distinguish a receipt from a cheque.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Receipt vs cheque", statement: "Proof vs order." }], steps: [
            { reasoning: "Receipt proves money was received.", marks: 1, markCode: "M" },
            { reasoning: "Cheque is an order to the bank to pay.", marks: 1, markCode: "A" },
          ], finalAnswer: "A receipt is proof of payment received; a cheque is a written order for the bank to pay." },
        },
        {
          id: "olacc-u1-sd-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Which of these is NOT a source document?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Credit note" },
            { id: "b", text: "Receipt" },
            { id: "c", text: "Invoice" },
            { id: "d", text: "Ledger account" },
          ], dorrectChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Source document", statement: "Transaction evidence." }], steps: [{ reasoning: "A ledger account is a book of account, not evidence.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Ledger account" },
        },
        {
          id: "olacc-u1-sd-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two problems that can arise when transactions are recorded without source documents.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Source docs", statement: "Evidence needed." }], steps: [
            { reasoning: "Transactions cannot be verified or audited.", marks: 1, markCode: "M" },
            { reasoning: "Disputes with customers or suppliers may arise.", marks: 1, markCode: "M" },
            { reasoning: "Errors and fraud are harder to detect.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Without documents, transactions cannot be verified and disputes or errors go undetected." },
        },
        {
          id: "olacc-u1-sd-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Source documents review.",
          parts: [
            { label: "a", prompt: "Define a source document.", marks: 2 },
            { label: "b", prompt: "What is an invoice?", marks: 1 },
            { label: "c", prompt: "Distinguish a credit note from a debit note.", marks: 2 },
            { label: "d", prompt: "State two uses of source documents.", marks: 2 },
            { label: "e", prompt: "Why should source documents be kept?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Source docs", statement: "Evidence, invoice, notes, uses." },
          ], steps: [
            { part: "a", reasoning: "Evidence of a transaction.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Bill sent to customer.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Credit: reduces debt.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Debit: increases debt.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Proof for audit.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Prevents disputes.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Verify transactions.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Support accurate records.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) evidence (b) bill (c) reduce vs increase (d) audit+disputes (e) verification" },
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
