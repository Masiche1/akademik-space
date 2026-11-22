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
            { id: "a", text: "Only sales records" },
            { id: "b", text: "Only year-end totals" },
            { id: "c", text: "Only cash records" },
            { id: "d", text: "Accounts for each item" },
          ], correctChoiceId: "d" },
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
        {
          id: "olacc-u2-ld-q5", difficulty: "foundation", totalMarks: 1,
          stem: "In a T-account, credits are recorded on the…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Credit/right side" },
            { id: "b", text: "Debit/left side" },
            { id: "c", text: "Bottom of the account" },
            { id: "d", text: "Top of the account" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "T-account", statement: "Dr left, Cr right." }], steps: [{ reasoning: "Credits always go on the right side.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Credit/right side" },
        },
        {
          id: "olacc-u2-ld-q6", difficulty: "core", totalMarks: 1,
          stem: "An account where total credits exceed total debits has a…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Credit balance" },
            { id: "b", text: "Nil balance" },
            { id: "c", text: "Suspense balance" },
            { id: "d", text: "Debit balance" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Balancing", statement: "Larger side decides balance." }], steps: [{ reasoning: "Credits larger means a credit balance.", marks: 1, markCode: "M" }], finalAnswer: "**(b)** Credit balance" },
        },
        {
          id: "olacc-u2-ld-q7", difficulty: "core", totalMarks: 2,
          stem: "Account A has debits of $2,000 and credits of $1,200; Account B has debits of $900 and credits of $1,500. Enter (a) the balance of Account A, (b) the balance of Account B.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 800 }, { label: "(b)", answer: 600 }] },
          markscheme: { principles: [{ kind: "principle", name: "Balancing", statement: "Larger side minus smaller side." }], steps: [
            { reasoning: "$2,000 - $1,200 = $800 debit balance.", marks: 1, markCode: "M" },
            { reasoning: "$1,500 - $900 = $600 credit balance.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $800 debit (b) $600 credit" },
        },
        {
          id: "olacc-u2-ld-q8", difficulty: "core", totalMarks: 2,
          stem: "What is the difference between 'balance b/d' and 'balance c/d'?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "b/d vs c/d", statement: "Opening vs closing balance." }], steps: [
            { reasoning: "Balance b/d is brought down from the previous period — the opening balance.", marks: 1, markCode: "M" },
            { reasoning: "Balance c/d is carried down to the next period — the closing balance.", marks: 1, markCode: "A" },
          ], finalAnswer: "b/d is the opening balance from last period; c/d is the closing balance carried forward." },
        },
        {
          id: "olacc-u2-ld-q9", difficulty: "challenge", totalMarks: 1,
          stem: "Posting in bookkeeping means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Writing the trial balance" },
            { id: "b", text: "Issuing invoices to customers" },
            { id: "c", text: "Transferring entries from books of prime entry to ledger accounts" },
            { id: "d", text: "Preparing the income statement" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Posting", statement: "Prime entry to ledger." }], steps: [{ reasoning: "Posting transfers recorded transactions into the ledger.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Transferring entries to ledger accounts" },
        },
        {
          id: "olacc-u2-ld-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the steps used to balance a T-account at the end of an accounting period.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Balancing", statement: "Total sides, insert difference." }], steps: [
            { reasoning: "Total all debit entries on the left side.", marks: 1, markCode: "M" },
            { reasoning: "Total all credit entries on the right side.", marks: 1, markCode: "M" },
            { reasoning: "Find the difference and enter it on the smaller side to make both sides equal.", marks: 1, markCode: "M" },
            { reasoning: "Label the balance and bring it down or carry it down.", marks: 1, markCode: "A" },
          ], finalAnswer: "Total both sides, insert the difference on the smaller side, and bring/carry the balance forward." },
        },
        {
          id: "olacc-u2-ld-q11", difficulty: "challenge", totalMarks: 3,
          stem: "A cash account has balance b/d of $300 (debit), cash receipts of $1,800 and cash payments of $950. Enter (a) total debits, (b) total credits, (c) the closing balance.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 2100 }, { label: "(b)", answer: 950 }, { label: "(c)", answer: 1150 }] },
          markscheme: { principles: [{ kind: "principle", name: "Account balancing", statement: "b/d counts as a debit." }], steps: [
            { reasoning: "Debits: $300 + $1,800 = $2,100.", marks: 1, markCode: "M" },
            { reasoning: "Credits: $950.", marks: 1, markCode: "M" },
            { reasoning: "$2,100 - $950 = $1,150 debit balance c/d.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $2,100 (b) $950 (c) $1,150 debit" },
        },
        {
          id: "olacc-u2-ld-q12", difficulty: "core", totalMarks: 2,
          stem: "Why are ledger accounts drawn in the T-format?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "T-account", statement: "Layout aids double entry." }], steps: [
            { reasoning: "It clearly separates debits (left) from credits (right).", marks: 1, markCode: "M" },
            { reasoning: "It makes balancing and checking totals easy.", marks: 1, markCode: "A" },
          ], finalAnswer: "The T-format separates debit and credit sides clearly, making posting, balancing and checking straightforward." },
        },
        {
          id: "olacc-u2-ld-q13", difficulty: "foundation", totalMarks: 1,
          stem: "The ledger is best described as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A single account for cash" },
            { id: "b", text: "A book of sales invoices" },
            { id: "c", text: "A collection of accounts for each item" },
            { id: "d", text: "A list of year-end totals only" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Ledger", statement: "All accounts." }], steps: [{ reasoning: "The ledger holds every account in the business.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** A collection of accounts" },
        },
        {
          id: "olacc-u2-ld-q14", difficulty: "challenge", totalMarks: 4,
          stem: "A debtor's account shows total debits of $5,000 and total credits of $3,500. Explain what the resulting balance tells you about that customer.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Personal accounts", statement: "Balance = amount owed." }], steps: [
            { reasoning: "Debits exceed credits by $1,500.", marks: 1, markCode: "M" },
            { reasoning: "The balance is on the debit side.", marks: 1, markCode: "M" },
            { reasoning: "A debit balance on a debtor's account means the customer still owes the business $1,500.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "The customer owes the business $1,500 — the debit balance represents the outstanding amount due." },
        },
        {
          id: "olacc-u2-ld-q15", difficulty: "core", totalMarks: 2,
          stem: "The Sales account has credits of $6,000 and debits of $400; the Purchases account has debits of $4,000 and credits of $300. Enter (a) the Sales balance, (b) the Purchases balance.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 5600 }, { label: "(b)", answer: 3700 }] },
          markscheme: { principles: [{ kind: "principle", name: "Balancing", statement: "Larger side minus smaller." }], steps: [
            { reasoning: "$6,000 - $400 = $5,600 credit balance on Sales.", marks: 1, markCode: "M" },
            { reasoning: "$4,000 - $300 = $3,700 debit balance on Purchases.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $5,600 credit (b) $3,700 debit" },
        },
        {
          id: "olacc-u2-ld-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Ledger accounts review.",
          parts: [
            { label: "a", prompt: "What is the ledger?", marks: 1 },
            { label: "b", prompt: "Describe the T-account layout.", marks: 2 },
            { label: "c", prompt: "Debits $1,500, credits $900. Balance?", marks: 2 },
            { label: "d", prompt: "Name two real accounts.", marks: 2 },
            { label: "e", prompt: "Why do asset accounts normally show debit balances?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Ledger", statement: "Accounts, layout, balances, real accounts." },
          ], steps: [
            { part: "a", reasoning: "Collection of all accounts.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Dr left, Cr right.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$600 debit balance.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Two real accounts e.g. premises, bank.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Two named.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Assets increase on the debit side.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Clear reason.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) all accounts (b) dr/cr sides (c) 600 Dr (d) premises+bank (e) assets debit" },
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
            { id: "a", text: "A cash account" },
            { id: "b", text: "A type of expense" },
            { id: "c", text: "A supplier the business owes" },
            { id: "d", text: "A customer who owes the business" },
          ], correctChoiceId: "d" },
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
        {
          id: "olacc-u2-at-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A creditor is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A supplier the business owes money to" },
            { id: "b", text: "A customer who owes the business" },
            { id: "c", text: "A type of income" },
            { id: "d", text: "An expense account" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Creditor", statement: "We owe them." }], steps: [{ reasoning: "Creditors are suppliers the business must pay.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Supplier we owe" },
        },
        {
          id: "olacc-u2-at-q6", difficulty: "core", totalMarks: 1,
          stem: "The sales account is classified as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Personal nominal" },
            { id: "b", text: "Personal real" },
            { id: "c", text: "Impersonal real" },
            { id: "d", text: "Impersonal nominal" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Account types", statement: "Sales = impersonal nominal." }], steps: [{ reasoning: "Sales is an item account (impersonal) and temporary income (nominal).", marks: 1, markCode: "M" }], finalAnswer: "**(b)** Impersonal nominal" },
        },
        {
          id: "olacc-u2-at-q7", difficulty: "core", totalMarks: 2,
          stem: "A business keeps accounts for Ahmed (a customer), cash, rent, bank and a supplier. Enter (a) the number of personal accounts, (b) the number of impersonal accounts.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 2 }, { label: "(b)", answer: 3 }] },
          markscheme: { principles: [{ kind: "definition", name: "Personal vs impersonal", statement: "People vs things." }], steps: [
            { reasoning: "Ahmed and the supplier are personal — 2 accounts.", marks: 1, markCode: "M" },
            { reasoning: "Cash, rent and bank are impersonal — 3 accounts.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 2 (b) 3" },
        },
        {
          id: "olacc-u2-at-q8", difficulty: "core", totalMarks: 2,
          stem: "Distinguish between personal and impersonal accounts.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Personal vs impersonal", statement: "People vs things." }], steps: [
            { reasoning: "Personal accounts belong to people/organisations — debtors and creditors.", marks: 1, markCode: "M" },
            { reasoning: "Impersonal accounts are for things — cash, stock, sales, expenses.", marks: 1, markCode: "A" },
          ], finalAnswer: "Personal accounts record dealings with people (debtors/creditors); impersonal accounts record items like cash, stock and expenses." },
        },
        {
          id: "olacc-u2-at-q9", difficulty: "challenge", totalMarks: 1,
          stem: "Which of the following is a real account?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Premises" },
            { id: "b", text: "Wages expense" },
            { id: "c", text: "Sales" },
            { id: "d", text: "Rent expense" },
          ], aorrectChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Real accounts", statement: "Permanent — assets, liabilities, capital." }], steps: [{ reasoning: "Premises is a permanent asset — a real account.", marks: 1, markCode: "M" }], finalAnswer: "**(c)** Premises" },
        },
        {
          id: "olacc-u2-at-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why nominal accounts are closed at the year end but real accounts are not.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Real vs nominal", statement: "Temporary vs permanent." }], steps: [
            { reasoning: "Nominal accounts record income and expenses for one period only.", marks: 1, markCode: "M" },
            { reasoning: "Their balances are transferred to the income statement to calculate profit.", marks: 1, markCode: "M" },
            { reasoning: "Real accounts (assets, liabilities, capital) continue from year to year.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Nominal accounts are temporary — closed to profit/loss each year; real accounts are permanent and carry forward." },
        },
        {
          id: "olacc-u2-at-q11", difficulty: "challenge", totalMarks: 3,
          stem: "From this list — premises, sales, rent, loan payable, bank — enter (a) the number of real accounts, (b) the number of nominal accounts, (c) the number of personal accounts.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 3 }, { label: "(b)", answer: 2 }, { label: "(c)", answer: 0 }] },
          markscheme: { principles: [{ kind: "definition", name: "Account types", statement: "Real, nominal, personal." }], steps: [
            { reasoning: "Premises, loan payable and bank are real — 3.", marks: 1, markCode: "M" },
            { reasoning: "Sales and rent are nominal — 2.", marks: 1, markCode: "M" },
            { reasoning: "None are personal accounts.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 3 (b) 2 (c) 0" },
        },
        {
          id: "olacc-u2-at-q12", difficulty: "core", totalMarks: 2,
          stem: "What is a nominal account? Give two examples.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Nominal accounts", statement: "Temporary income/expense." }], steps: [
            { reasoning: "A nominal account records income or expenses for a single period.", marks: 1, markCode: "M" },
            { reasoning: "Examples: sales, purchases, rent, wages.", marks: 1, markCode: "A" },
          ], finalAnswer: "Nominal accounts are temporary accounts for income and expenses — e.g. sales and rent." },
        },
        {
          id: "olacc-u2-at-q13", difficulty: "foundation", totalMarks: 1,
          stem: "Debtors and creditors are examples of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Real accounts only" },
            { id: "b", text: "Personal accounts" },
            { id: "c", text: "Nominal accounts" },
            { id: "d", text: "Impersonal accounts" },
          ], borrectChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Personal accounts", statement: "Debtors and creditors." }], steps: [{ reasoning: "Both relate to people the business deals with.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Personal accounts" },
        },
        {
          id: "olacc-u2-at-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between an asset and an expense, and why both normally have debit balances.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Assets vs expenses", statement: "Both debit-nature." }], steps: [
            { reasoning: "An asset is a resource owned by the business lasting more than a period.", marks: 1, markCode: "M" },
            { reasoning: "An expense is a cost consumed within the period.", marks: 1, markCode: "M" },
            { reasoning: "Both increase on the debit side, so both carry debit balances.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Assets are owned resources; expenses are period costs. Both are debit-nature items, so both show debit balances." },
        },
        {
          id: "olacc-u2-at-q15", difficulty: "core", totalMarks: 2,
          stem: "A business keeps accounts for cash, sales, purchases, rent, one customer and one supplier. Enter (a) the number of personal accounts, (b) the number of impersonal accounts.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 2 }, { label: "(b)", answer: 4 }] },
          markscheme: { principles: [{ kind: "definition", name: "Personal vs impersonal", statement: "People vs things." }], steps: [
            { reasoning: "Customer and supplier are personal — 2.", marks: 1, markCode: "M" },
            { reasoning: "Cash, sales, purchases and rent are impersonal — 4.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 2 (b) 4" },
        },
        {
          id: "olacc-u2-at-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Account types review.",
          parts: [
            { label: "a", prompt: "What is a personal account?", marks: 1 },
            { label: "b", prompt: "What is an impersonal account?", marks: 1 },
            { label: "c", prompt: "Name two real accounts.", marks: 2 },
            { label: "d", prompt: "Name two nominal accounts.", marks: 2 },
            { label: "e", prompt: "Classify: customer, bank, sales.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Account types", statement: "Personal, impersonal, real, nominal." },
          ], steps: [
            { part: "a", reasoning: "Account of a person/organisation dealt with.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Account of a thing/item.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Two real accounts e.g. premises, bank.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Two named.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Two nominal accounts e.g. sales, rent.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Two named.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Customer: personal debtor.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Bank: impersonal real; sales: impersonal nominal.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "All classified.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) people (b) things (c) premises+bank (d) sales+rent (e) pers/real/nominal" },
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
