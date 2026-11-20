import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "olacc-u1-lesson-1-2",
  code: "1-2",
  title: "The Accounting Equation",
  goal: "I CAN apply the accounting equation Assets = Capital + Liabilities and analyse transactions.",
  standards: ["7706 1.2"],
  vocabulary: [
    { term: "Accounting equation", definition: "Assets = Capital + Liabilities — always balances." },
    { term: "Capital", definition: "Owner's investment in the business." },
    { term: "Assets", definition: "What the business owns — cash, stock, equipment, receivables." },
    { term: "Liabilities", definition: "What the business owes — payables, loans, overdraft." },
    { term: "Double entry", definition: "Every transaction affects two accounts equally." },
    { term: "Debit and credit", definition: "The two sides of every account entry." },
  ],
  concepts: [
    {
      id: "olacc-u1-equation",
      title: "The accounting equation",
      skill: "Apply Assets = Capital + Liabilities to transactions.",
      lesson: {
        sections: [
          { heading: "The equation", body: "**Assets = Capital + Liabilities**\n\nWhat the business OWNS (assets) equals what the OWNER put in plus what's OWED to outsiders (liabilities)." },
          { heading: "Transaction effects", body: "Every transaction keeps the equation balanced:\n- Owner invests $1000 cash → Assets +1000, Capital +1000.\n- Buy stock $400 cash → Assets: cash -400, stock +400 (no change total).\n- Buy on credit $200 → Assets +200, Liabilities +200.\n- Pay creditor $200 → Assets -200, Liabilities -200." },
          { heading: "Assets and liabilities detail", body: "Assets: cash, bank, stock, equipment, money owed TO us (receivables). Liabilities: money owed BY us — suppliers (payables), loans, bank overdraft." },
        ],
        keyFormulas: [
          { name: "Equation", statement: "Assets = Capital + Liabilities" },
        ],
        workedExample: {
          problem: "Ali starts a business with $5000 capital. He buys equipment for $2000 cash. What are assets, capital, liabilities?",
          solution: "Assets: cash 3000 + equipment 2000 = 5000. Capital = 5000. Liabilities = 0. 5000 = 5000 + 0 ✓",
        },
      },
      questions: [
        {
          id: "olacc-u1-eq-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The accounting equation is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Assets = Capital + Liabilities" }, { id: "b", text: "Assets = Revenue - Expenses" }, { id: "c", text: "Profit = Sales - Costs" }, { id: "d", text: "Debits = Credits" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Accounting equation", statement: "A = C + L." }], steps: [{ reasoning: "Correct equation.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Assets = Capital + Liabilities" },
        },
        {
          id: "olacc-u1-eq-q2", difficulty: "core", totalMarks: 2,
          stem: "A business has assets of $10,000 and liabilities of $4,000. Find capital.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Equation", statement: "C = A - L." }], steps: [
            { reasoning: "$10,000 - $4,000 = $6,000.", marks: 1, markCode: "M" },
            { reasoning: "Correct capital.", marks: 1, markCode: "A" },
          ], finalAnswer: "$6,000" },
        },
        {
          id: "olacc-u1-eq-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the effect on the equation when the owner invests $2000 cash.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Equation effect", statement: "Both sides rise equally." }], steps: [
            { reasoning: "Assets increase by $2000 (cash).", marks: 1, markCode: "M" },
            { reasoning: "Capital increases by $2000.", marks: 1, markCode: "M" },
            { reasoning: "Equation stays balanced.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Assets +2000, Capital +2000 — equation remains balanced." },
        },
        {
          id: "olacc-u1-eq-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Accounting equation review.",
          parts: [
            { label: "a", prompt: "State the accounting equation.", marks: 1 },
            { label: "b", prompt: "Define assets, capital, liabilities.", marks: 3 },
            { label: "c", prompt: "Assets $8000, capital $5000. Find liabilities.", marks: 2 },
            { label: "d", prompt: "Explain effect of buying stock on credit.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Equation", statement: "A = C + L." },
          ], steps: [
            { part: "a", reasoning: "Assets = Capital + Liabilities.", marks: 1, markCode: "B" },
            { part: "b", reasoning: "Assets: owned; capital: owner's stake; liabilities: owed.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct definitions.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "All three defined.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$8000 - $5000 = $3000.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct liabilities.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Assets +stock amount.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Liabilities +same amount.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Balanced explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) A=C+L (b) owned/owner/owed (c) 3000 (d) A+L equally" },
        },
      ],
    },
    {
      id: "olacc-u1-doubleentry",
      title: "Double Entry Bookkeeping",
      skill: "Explain debit and credit rules for different account types.",
      lesson: {
        sections: [
          { heading: "The rule", body: "Every transaction is recorded twice: once as a **debit** and once as a **credit** — in different accounts, equal amounts. Total debits always equal total credits." },
          { heading: "Debit/credit rules", body: "- **Assets and expenses**: increase on DEBIT.\n- **Capital, income, liabilities**: increase on CREDIT.\n\nMnemonic: DEBIT what comes IN (assets/expenses); CREDIT what goes OUT (capital/income/liabilities)." },
          { heading: "Example", body: "Buy stock $300 cash: Debit Stock $300 (asset up); Credit Cash $300 (asset down)." },
        ],
        keyFormulas: [
          { name: "Rule", statement: "Assets/expenses ↑ debit; capital/income/liabilities ↑ credit" },
        ],
        workedExample: {
          problem: "Record: received $500 cash from a credit customer.",
          solution: "Debit Cash $500; Credit Debtors (receivables) $500.",
        },
      },
      questions: [
        {
          id: "olacc-u1-de-q1", difficulty: "foundation", totalMarks: 1,
          stem: "In double entry, every transaction is recorded as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "One debit and one credit" }, { id: "b", text: "Two debits" }, { id: "c", text: "Two credits" }, { id: "d", text: "One entry only" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Double entry", statement: "Dr + Cr equal." }], steps: [{ reasoning: "Dr and Cr.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Dr + Cr" },
        },
        {
          id: "olacc-u1-de-q2", difficulty: "core", totalMarks: 2,
          stem: "Which accounts increase on debit?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Debit rule", statement: "Assets + expenses." }], steps: [
            { reasoning: "Assets.", marks: 1, markCode: "M" },
            { reasoning: "Expenses.", marks: 1, markCode: "A" },
          ], finalAnswer: "Assets and expenses increase on debit." },
        },
        {
          id: "olacc-u1-de-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why debits must equal credits.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Double entry", statement: "Every transaction affects two sides." }], steps: [
            { reasoning: "Each transaction has two effects.", marks: 1, markCode: "M" },
            { reasoning: "One account debited, another credited equally.", marks: 1, markCode: "M" },
            { reasoning: "Keeps records balanced/checkable.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Every transaction affects two accounts equally — debits and credits must match." },
        },
        {
          id: "olacc-u1-de-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Double entry review.",
          parts: [
            { label: "a", prompt: "What is double entry?", marks: 2 },
            { label: "b", prompt: "Which accounts increase on debit?", marks: 2 },
            { label: "c", prompt: "Which accounts increase on credit?", marks: 2 },
            { label: "d", prompt: "Record: paid $300 cash for expenses.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Double entry", statement: "Dr/Cr rules." },
          ], steps: [
            { part: "a", reasoning: "Two equal entries per transaction.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Assets and expenses.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Capital, income, liabilities.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Debit expenses $300.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Credit cash $300.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct entry.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) dr+cr (b) assets+expenses (c) capital+income+liab (d) Dr exp, Cr cash" },
        },
      ],
    },
  ],
  notes: [
    { id: "olacc-u1-1-2-notes", title: "Accounting equation — notes", summary: "A = C + L, transaction effects, double entry rules.",
      sections: [
        { heading: "Equation", body: "Assets = Capital + Liabilities always balances; every transaction affects both sides equally." },
        { heading: "Double entry", body: "Assets/expenses ↑ debit; capital/income/liabilities ↑ credit." },
      ] },
  ],
};
