import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "olacc-u2-lesson-2-1",
  code: "2-1",
  title: "Ledger Accounts",
  goal: "I CAN post transactions to ledger accounts and balance them.",
  standards: ["7706 2.1", "7706 2.2"],
  vocabulary: [
    { term: "Ledger", definition: "Collection of accounts showing each item's transactions." },
    { term: "T-account", definition: "Account drawn as T: debit left, credit right." },
    { term: "Debit side", definition: "Left side of an account — increases assets/expenses." },
    { term: "Credit side", definition: "Right side — increases capital/income/liabilities." },
    { term: "Balance", definition: "Difference between total debits and credits." },
    { term: "Balance b/d", definition: "Balance brought down from previous period." },
    { term: "Balance c/d", definition: "Balance carried down to next period." },
  ],
  concepts: [
    {
      id: "olacc-u2-ledger",
      title: "Posting to ledger accounts",
      skill: "Post transactions to T-accounts and find balances.",
      lesson: {
        sections: [
          { heading: "The ledger", body: "The **ledger** holds all accounts — one per item (cash, sales, each customer, each supplier). Transactions from books of prime entry are **posted** here." },
          { heading: "T-account layout", body: "```\nAccount Name          |\n-----------------------|\nDebit (left)           | Credit (right)\n```\nDebits on the left, credits on the right. If debits exceed credits, the balance is on the debit side (and vice versa)." },
          { heading: "Balancing", body: "At period end, total each side; the smaller side's difference is entered to balance (marked 'c/d' or 'b/d' as appropriate). The balance shows the account's position." },
        ],
        keyFormulas: [
          { name: "Balance", statement: "Larger side minus smaller side" },
        ],
        workedExample: {
          problem: "Cash account: debits $1000, credits $600. Find the balance.",
          solution: "Debits exceed credits by $400 → balance $400 on debit side (cash in hand).",
        },
      },
      questions: [
        {
          id: "olacc-u2-ld-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The ledger contains…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Accounts for each item" }, { id: "b", text: "Only sales records" }, { id: "c", text: "Only cash records" }, { id: "d", text: "Only year-end totals" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Ledger", statement: "All accounts." }], steps: [{ reasoning: "Ledger = all accounts.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Accounts for each item" },
        },
        {
          id: "olacc-u2-ld-q2", difficulty: "core", totalMarks: 2,
          stem: "In a T-account, debits go on the…",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "T-account", statement: "Dr left, Cr right." }], steps: [
            { reasoning: "Left side.", marks: 1, markCode: "M" },
            { reasoning: "Credits on right.", marks: 1, markCode: "A" },
          ], finalAnswer: "Left (debit) side; credits on the right." },
        },
        {
          id: "olacc-u2-ld-q3", difficulty: "challenge", totalMarks: 4,
          stem: "An account has total debits $1500 and total credits $900. Find the balance and its side.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Balancing", statement: "Difference to smaller side." }], steps: [
            { reasoning: "$1500 - $900 = $600.", marks: 1, markCode: "M" },
            { reasoning: "Debits larger → debit balance.", marks: 1, markCode: "M" },
            { reasoning: "Balance $600 debit.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "$600 on the debit side." },
        },
        {
          id: "olacc-u2-ld-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Ledger review.",
          parts: [
            { label: "a", prompt: "What is the ledger?", marks: 2 },
            { label: "b", prompt: "Describe T-account layout.", marks: 2 },
            { label: "c", prompt: "Debits $800, credits $1200. Balance?", marks: 2 },
            { label: "d", prompt: "What is 'balance b/d'?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Ledger", statement: "Accounts, layout, balances." },
          ], steps: [
            { part: "a", reasoning: "Collection of all accounts.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Dr left, Cr right.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$400 credit.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct side.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Balance from previous period.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Opening balance.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct definition.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) all accounts (b) dr left cr right (c) 400 Cr (d) opening balance" },
        },
      ],
    },
    {
      id: "olacc-u2-account-types",
      title: "Types of ledger accounts",
      skill: "Identify personal, impersonal, real and nominal accounts.",
      lesson: {
        sections: [
          { heading: "Personal accounts", body: "Accounts of people/organisations we deal with — debtors (customers who owe us) and creditors (suppliers we owe). Show who owes/owes what." },
          { heading: "Impersonal accounts", body: "Accounts of things — cash, bank, stock, equipment, sales, purchases, expenses, income. Named for the item itself." },
          { heading: "Real vs nominal", body: "**Real accounts**: permanent — assets, liabilities, capital (balance brought forward). **Nominal accounts**: temporary — income and expenses (closed to profit/loss at year end)." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Classify: Ahmed (customer), cash, rent expense.",
          solution: "Ahmed = personal (debtor); cash = impersonal real; rent = impersonal nominal (expense).",
        },
      },
      questions: [
        {
          id: "olacc-u2-at-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A debtor's account is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A customer who owes the business" }, { id: "b", text: "A supplier the business owes" }, { id: "c", text: "A type of expense" }, { id: "d", text: "A cash account" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Debtor", statement: "Owes us." }], steps: [{ reasoning: "Debtor owes us.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Customer who owes" },
        },
        {
          id: "olacc-u2-at-q2", difficulty: "core", totalMarks: 2,
          stem: "Distinguish real from nominal accounts.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Real vs nominal", statement: "Permanent vs temporary." }], steps: [
            { reasoning: "Real: assets/liabilities/capital — permanent.", marks: 1, markCode: "M" },
            { reasoning: "Nominal: income/expenses — closed yearly.", marks: 1, markCode: "A" },
          ], finalAnswer: "Real accounts are permanent (assets/liabilities); nominal are temporary (income/expenses)." },
        },
        {
          id: "olacc-u2-at-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Classify these accounts: supplier account, bank account, sales account.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Account types", statement: "Personal, impersonal, real/nominal." }], steps: [
            { reasoning: "Supplier: personal (creditor).", marks: 1, markCode: "M" },
            { reasoning: "Bank: impersonal real.", marks: 1, markCode: "M" },
            { reasoning: "Sales: impersonal nominal.", marks: 1, markCode: "M" },
            { reasoning: "All classified.", marks: 1, markCode: "A" },
          ], finalAnswer: "Supplier = personal creditor; bank = impersonal real; sales = impersonal nominal." },
        },
        {
          id: "olacc-u2-at-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Account types review.",
          parts: [
            { label: "a", prompt: "What is a personal account?", marks: 2 },
            { label: "b", prompt: "What is an impersonal account?", marks: 2 },
            { label: "c", prompt: "Distinguish real from nominal.", marks: 2 },
            { label: "d", prompt: "Classify: rent, customer, loan payable.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Account types", statement: "Personal, impersonal, real/nominal." },
          ], steps: [
            { part: "a", reasoning: "People/orgs we deal with.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Things — cash, stock, expenses.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Real: permanent; nominal: temporary.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Rent: nominal expense.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Customer: personal debtor; loan: real liability.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "All classified.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) people (b) things (c) permanent vs temp (d) exp/pers/real" },
        },
      ],
    },
  ],
  notes: [
    { id: "olacc-u2-2-1-notes", title: "Ledger accounts — notes", summary: "T-accounts, balancing, personal/impersonal, real/nominal.",
      sections: [
        { heading: "Ledger", body: "All accounts in T-format: debit left, credit right; balance = larger minus smaller side." },
        { heading: "Types", body: "Personal (people), impersonal (things); real (permanent) vs nominal (temporary)." },
      ] },
  ],
};
