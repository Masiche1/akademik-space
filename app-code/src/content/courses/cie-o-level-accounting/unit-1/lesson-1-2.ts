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
            { id: "a", text: "Assets = Revenue - Expenses" },
            { id: "b", text: "Debits = Credits" },
            { id: "c", text: "Profit = Sales - Costs" },
            { id: "d", text: "Assets = Capital + Liabilities" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Accounting equation", statement: "A = C + L." }], steps: [{ reasoning: "Correct equation.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Assets = Capital + Liabilities" },
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
        {
          id: "olacc-u1-eq-q5", difficulty: "foundation", totalMarks: 1,
          stem: "If a business's assets increase and its liabilities stay the same, capital will…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Increase" },
            { id: "b", text: "Decrease" },
            { id: "c", text: "Become a liability" },
            { id: "d", text: "Stay the same" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Equation", statement: "A = C + L." }], steps: [{ reasoning: "Capital = Assets - Liabilities, so it rises.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Increase" },
        },
        {
          id: "olacc-u1-eq-q6", difficulty: "core", totalMarks: 2,
          stem: "A business has assets of $20,000 and liabilities of $8,000. Enter (a) capital, (b) capital if liabilities then rise by $2,000 with assets unchanged.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 12000 }, { label: "(b)", answer: 10000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Equation", statement: "C = A - L." }], steps: [
            { reasoning: "$20,000 - $8,000 = $12,000.", marks: 1, markCode: "M" },
            { reasoning: "$20,000 - $10,000 = $10,000.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $12,000 (b) $10,000" },
        },
        {
          id: "olacc-u1-eq-q7", difficulty: "core", totalMarks: 2,
          stem: "State the accounting equation and briefly define each of its three elements.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Equation", statement: "A = C + L." }], steps: [
            { reasoning: "Assets = Capital + Liabilities.", marks: 1, markCode: "M" },
            { reasoning: "Assets owned; capital owner's stake; liabilities owed.", marks: 1, markCode: "A" },
          ], finalAnswer: "Assets = Capital + Liabilities: what is owned equals owner's stake plus what's owed." },
        },
        {
          id: "olacc-u1-eq-q8", difficulty: "foundation", totalMarks: 1,
          stem: "Buying stock for cash affects the accounting equation by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Changing only the composition of assets" },
            { id: "b", text: "Increasing liabilities" },
            { id: "c", text: "Decreasing capital" },
            { id: "d", text: "Increasing total assets" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Equation effect", statement: "Asset swap." }], steps: [{ reasoning: "Cash falls, stock rises — total assets unchanged.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Only the composition of assets changes" },
        },
        {
          id: "olacc-u1-eq-q9", difficulty: "core", totalMarks: 3,
          stem: "An owner invests $5,000 cash and the business buys equipment for $2,000 cash. Enter (a) total assets, (b) capital, (c) liabilities.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 5000 }, { label: "(b)", answer: 5000 }, { label: "(c)", answer: 0 }] },
          markscheme: { principles: [{ kind: "principle", name: "Equation", statement: "A = C + L." }], steps: [
            { reasoning: "Cash $3,000 + equipment $2,000 = $5,000.", marks: 1, markCode: "M" },
            { reasoning: "Capital remains $5,000.", marks: 1, markCode: "M" },
            { reasoning: "No liabilities.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $5,000 (b) $5,000 (c) $0" },
        },
        {
          id: "olacc-u1-eq-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the effect on the accounting equation when the business pays $300 cash for expenses.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Equation effect", statement: "Both sides adjust." }], steps: [
            { reasoning: "Cash (asset) decreases by $300.", marks: 1, markCode: "M" },
            { reasoning: "Expenses reduce capital by $300.", marks: 1, markCode: "M" },
            { reasoning: "Equation stays balanced.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Assets fall $300 (cash) and capital falls $300 (expenses) — the equation remains balanced." },
        },
        {
          id: "olacc-u1-eq-q11", difficulty: "core", totalMarks: 2,
          stem: "A business has assets of $9,000, capital of $5,000 and liabilities of $4,000. What does the equation show?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Capital is too high" },
            { id: "b", text: "The equation is balanced" },
            { id: "c", text: "The equation does not balance" },
            { id: "d", text: "Liabilities are negative" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Equation", statement: "A = C + L." }], steps: [
            { reasoning: "$5,000 + $4,000 = $9,000.", marks: 1, markCode: "M" },
            { reasoning: "Both sides equal — balanced.", marks: 1, markCode: "A" },
          ], finalAnswer: "**(b)** The equation is balanced" },
        },
        {
          id: "olacc-u1-eq-q12", difficulty: "core", totalMarks: 3,
          stem: "A business has cash $3,000, stock $4,000, debtors $2,000 and owes creditors $5,000. Enter (a) total assets, (b) total liabilities, (c) capital.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 9000 }, { label: "(b)", answer: 5000 }, { label: "(c)", answer: 4000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Equation", statement: "A = C + L." }], steps: [
            { reasoning: "$3,000 + $4,000 + $2,000 = $9,000.", marks: 1, markCode: "M" },
            { reasoning: "Liabilities are $5,000.", marks: 1, markCode: "M" },
            { reasoning: "$9,000 - $5,000 = $4,000 capital.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $9,000 (b) $5,000 (c) $4,000" },
        },
        {
          id: "olacc-u1-eq-q13", difficulty: "challenge", totalMarks: 3,
          stem: "Explain why the accounting equation must always balance.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Equation", statement: "Always balances." }], steps: [
            { reasoning: "Every transaction has two equal effects.", marks: 1, markCode: "M" },
            { reasoning: "Assets are funded by capital or liabilities.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Assets are always financed by the owner's capital or by liabilities, so the equation must balance." },
        },
        {
          id: "olacc-u1-eq-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Which of the following is a liability?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cash in hand" },
            { id: "b", text: "Money owed to the business" },
            { id: "c", text: "Stock of goods" },
            { id: "d", text: "Bank overdraft" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Liability", statement: "Amount owed by the business." }], steps: [{ reasoning: "An overdraft is money owed to the bank.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Bank overdraft" },
        },
        {
          id: "olacc-u1-eq-q15", difficulty: "core", totalMarks: 2,
          stem: "A business has assets of $14,000 and capital of $10,000. The owner then draws $1,000 cash. Enter (a) liabilities, (b) capital after the drawings.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 4000 }, { label: "(b)", answer: 9000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Equation", statement: "C = A - L; drawings reduce capital." }], steps: [
            { reasoning: "$14,000 - $10,000 = $4,000 liabilities.", marks: 1, markCode: "M" },
            { reasoning: "$10,000 - $1,000 = $9,000 capital.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $4,000 (b) $9,000" },
        },
        {
          id: "olacc-u1-eq-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Accounting equation review.",
          parts: [
            { label: "a", prompt: "State the accounting equation.", marks: 1 },
            { label: "b", prompt: "Define assets, capital and liabilities.", marks: 3 },
            { label: "c", prompt: "Assets $12,000, liabilities $5,000. Find capital.", marks: 2 },
            { label: "d", prompt: "Explain the effect on the equation of buying stock on credit.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Equation", statement: "A = C + L." },
          ], steps: [
            { part: "a", reasoning: "Assets = Capital + Liabilities.", marks: 1, markCode: "B" },
            { part: "b", reasoning: "Assets: owned; capital: owner's stake; liabilities: owed.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct definitions.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "All three defined.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$12,000 - $5,000 = $7,000.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct capital.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Assets increase by stock value.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Liabilities increase by same amount.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Equation stays balanced.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) A=C+L (b) owned/owner/owed (c) 7000 (d) A+L equally" },
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
            { id: "a", text: "One entry only" },
            { id: "b", text: "Two credits" },
            { id: "c", text: "One debit and one credit" },
            { id: "d", text: "Two debits" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Double entry", statement: "Dr + Cr equal." }], steps: [{ reasoning: "Dr and Cr.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Dr + Cr" },
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
        {
          id: "olacc-u1-de-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which type of account increases on the credit side?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cash" },
            { id: "b", text: "Expenses" },
            { id: "c", text: "Liabilities" },
            { id: "d", text: "Stock" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Debit/credit rule", statement: "Liabilities up on credit." }], steps: [{ reasoning: "Liabilities increase on credit.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Liabilities" },
        },
        {
          id: "olacc-u1-de-q6", difficulty: "core", totalMarks: 2,
          stem: "A bookkeeper records transactions totalling $4,500 in debits and $4,300 in credits. Enter (a) the difference, (b) the corrected credit total if $200 was omitted.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 200 }, { label: "(b)", answer: 4500 }] },
          markscheme: { principles: [{ kind: "principle", name: "Double entry", statement: "Debits = credits." }], steps: [
            { reasoning: "$4,500 - $4,300 = $200 difference.", marks: 1, markCode: "M" },
            { reasoning: "$4,300 + $200 = $4,500 credits.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $200 (b) $4,500" },
        },
        {
          id: "olacc-u1-de-q7", difficulty: "core", totalMarks: 2,
          stem: "State the debit and credit rule for assets and expenses.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Debit rule", statement: "Assets + expenses debit." }], steps: [
            { reasoning: "Assets increase on debit.", marks: 1, markCode: "M" },
            { reasoning: "Expenses increase on debit.", marks: 1, markCode: "A" },
          ], finalAnswer: "Assets and expenses increase on the debit side." },
        },
        {
          id: "olacc-u1-de-q8", difficulty: "foundation", totalMarks: 1,
          stem: "The business receives $200 cash from a debtor. Which account is debited?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cash" },
            { id: "b", text: "Sales" },
            { id: "c", text: "Capital" },
            { id: "d", text: "Debtors" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Double entry", statement: "Cash up = debit." }], steps: [{ reasoning: "Cash increases, so cash is debited.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Cash" },
        },
        {
          id: "olacc-u1-de-q9", difficulty: "core", totalMarks: 2,
          stem: "A business records 8 transactions, each with one debit and one credit entry. Enter (a) the total number of entries, (b) the total debits if all entries are $300 each.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 16 }, { label: "(b)", answer: 2400 }] },
          markscheme: { principles: [{ kind: "principle", name: "Double entry", statement: "Two entries per transaction." }], steps: [
            { reasoning: "8 transactions × 2 entries = 16.", marks: 1, markCode: "M" },
            { reasoning: "8 debits × $300 = $2,400.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 16 (b) $2,400" },
        },
        {
          id: "olacc-u1-de-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why double entry helps detect bookkeeping errors.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Double entry", statement: "Checkable system." }], steps: [
            { reasoning: "Every transaction has two equal entries.", marks: 1, markCode: "M" },
            { reasoning: "Total debits must equal total credits.", marks: 1, markCode: "M" },
            { reasoning: "A difference reveals an error.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Equal debits and credits mean any discrepancy exposes an error in recording." },
        },
        {
          id: "olacc-u1-de-q11", difficulty: "core", totalMarks: 2,
          stem: "The capital account increases on…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Both sides equally" },
            { id: "b", text: "The credit side" },
            { id: "c", text: "Neither side" },
            { id: "d", text: "The debit side" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Debit/credit rule", statement: "Capital up on credit." }], steps: [{ reasoning: "Capital is a credit-balance account.", marks: 1, markCode: "M" }, { reasoning: "Increases on credit.", marks: 1, markCode: "A" }], finalAnswer: "**(b)** The credit side" },
        },
        {
          id: "olacc-u1-de-q12", difficulty: "core", totalMarks: 2,
          stem: "Goods worth $900 are bought on credit from a supplier. Enter (a) the debit amount, (b) the credit amount.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 900 }, { label: "(b)", answer: 900 }] },
          markscheme: { principles: [{ kind: "principle", name: "Double entry", statement: "Equal amounts." }], steps: [
            { reasoning: "Purchases debited $900.", marks: 1, markCode: "M" },
            { reasoning: "Creditors credited $900.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $900 (b) $900" },
        },
        {
          id: "olacc-u1-de-q13", difficulty: "challenge", totalMarks: 3,
          stem: "Explain the difference between the debit and credit sides of a ledger account.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "T-account", statement: "Dr left, Cr right." }], steps: [
            { reasoning: "Debit side is on the left.", marks: 1, markCode: "M" },
            { reasoning: "Credit side is on the right.", marks: 1, markCode: "M" },
            { reasoning: "Which side increases depends on account type.", marks: 1, markCode: "A" },
          ], finalAnswer: "Debits are recorded on the left and credits on the right; the balance shows which side is larger." },
        },
        {
          id: "olacc-u1-de-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Which account type increases on the debit side?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Expenses" },
            { id: "b", text: "Capital" },
            { id: "c", text: "Income" },
            { id: "d", text: "Liabilities" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Debit rule", statement: "Expenses debit." }], steps: [{ reasoning: "Expenses increase on debit.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Expenses" },
        },
        {
          id: "olacc-u1-de-q15", difficulty: "core", totalMarks: 2,
          stem: "A cash account shows receipts of $800 and payments of $300, then another payment of $100. Enter (a) the balance after the first payments, (b) the balance after the second payment.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 500 }, { label: "(b)", answer: 400 }] },
          markscheme: { principles: [{ kind: "principle", name: "Cash account", statement: "Receipts - payments." }], steps: [
            { reasoning: "$800 - $300 = $500.", marks: 1, markCode: "M" },
            { reasoning: "$500 - $100 = $400.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $500 (b) $400" },
        },
        {
          id: "olacc-u1-de-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Double entry review.",
          parts: [
            { label: "a", prompt: "What is double entry bookkeeping?", marks: 2 },
            { label: "b", prompt: "State the debit rule.", marks: 2 },
            { label: "c", prompt: "State the credit rule.", marks: 2 },
            { label: "d", prompt: "Record: bought stock for $600 cash.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Double entry", statement: "Dr/Cr rules." },
          ], steps: [
            { part: "a", reasoning: "Two equal entries per transaction.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Assets and expenses debit.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Capital, income, liabilities credit.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Debit stock $600.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Credit cash $600.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct entry.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) dr+cr (b) assets+expenses (c) capital+income+liab (d) Dr stock Cr cash" },
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
