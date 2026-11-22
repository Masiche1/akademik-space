import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "eiasacct-u1-lesson-1-2",
  code: "1-2",
  title: "Bookkeeping Basics",
  goal: "I CAN record transactions using double-entry bookkeeping.",
  standards: [
    "Edexcel IAS Accounting 9AC01 Unit 1 — Introduction to Accounting",
  ],
  vocabulary: [
    {
      term: "Double-entry",
      definition: "Every transaction affects two accounts — debit and credit.",
    },
    {
      term: "Debit",
      definition:
        "Left side of account — increases assets/expenses, decreases liabilities/equity/income.",
    },
    {
      term: "Credit",
      definition:
        "Right side of account — increases liabilities/equity/income, decreases assets/expenses.",
    },
    {
      term: "Ledger",
      definition: "Book of accounts — records all transactions.",
    },
    {
      term: "Journal",
      definition: "Book of original entry — first record of transactions.",
    },
    {
      term: "Trial balance",
      definition:
        "List of all accounts with balances — checks debits = credits.",
    },
  ],
  concepts: [
    {
      id: "eiasacct-u1-doubleentry",
      title: "Double-Entry Bookkeeping",
      skill: "Record transactions using debits and credits.",
      lesson: {
        sections: [
          {
            heading: "Double-entry principle",
            body: "**Every transaction** affects two or more accounts — total debits = total credits. **Debit**: left side — increases assets, expenses; decreases liabilities, equity, income. **Credit**: right side — increases liabilities, equity, income; decreases assets, expenses.\n\n**Example**: buy stock £500 cash → Debit Stock £500, Credit Cash £500. **Buy on credit** → Debit Stock £500, Credit Payables £500.",
          },
          {
            heading: "Account types",
            body: "**Assets**: debit balance — cash, inventory, equipment. **Liabilities**: credit balance — payables, loans. **Equity**: credit balance — capital, retained earnings. **Income**: credit balance — sales, revenue. **Expenses**: debit balance — purchases, rent, wages.\n\n**Normal balances**: assets/expenses debit; liabilities/equity/income credit.",
          },
        ],
        keyFormulas: [
          {
            name: "Debits = Credits",
            statement: "Double-entry always balances",
          },
        ],
        workedExample: {
          problem: "Receive £1,000 cash for services. Debit and credit?",
          solution: "Debit Cash £1,000, Credit Income £1,000.",
        },
      },
      questions: [
        {
          id: "eiasacct-u1-de-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is double-entry bookkeeping?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Single record" },
              { id: "b", text: "Cash only" },
              { id: "c", text: "Year-end only" },
              { id: "d", text: "Every transaction affects two accounts" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Double-entry",
                statement: "Two accounts.",
              },
            ],
            steps: [
              {
                reasoning: "Double-entry = two accounts.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Two accounts",
            commonErrors: ["Single entry confused."],
          },
        },
        {
          id: "eiasacct-u1-de-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two account types and their normal balances.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Account balances",
                statement: "Debit vs credit.",
              },
            ],
            steps: [
              {
                reasoning: "Assets — debit balance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Liabilities — credit balance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Expenses — debit; Income — credit.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Assets/expenses debit, liabilities/equity/income credit.",
            commonErrors: ["Wrong balance.", "Only one."],
          },
        },
        {
          id: "eiasacct-u1-de-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why debits equal credits.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Balance",
                statement: "Accounting equation.",
              },
            ],
            steps: [
              {
                reasoning: "Every transaction affects equation — two sides.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Debit increases assets/expenses — one side.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Credit increases liabilities/equity/income — other side.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Equation must balance — debits = credits.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Equation balance → debits=credits.",
            commonErrors: ["Coincidence.", "No reason."],
          },
        },
        {
          id: "eiasacct-u1-de-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Record: buy equipment £3,000 on credit.",
          parts: [
            { label: "a", prompt: "Identify accounts affected.", marks: 4 },
            { label: "b", prompt: "Show debit and credit.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Recording", statement: "Debit+credit." },
            ],
            steps: [
              {
                reasoning: "(a) Equipment (asset) increases.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Payables (liability) increases — owe supplier.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Debit Equipment £3,000.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Credit Payables £3,000.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) equipment+payables (b) Dr equip, Cr payables",
            commonErrors: ["Wrong accounts.", "Wrong sides."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u1-ledger",
      title: "Ledger Accounts and Journals",
      skill: "Post transactions to ledger accounts.",
      lesson: {
        sections: [
          {
            heading: "Books of accounting",
            body: "**Journal**: book of original entry — first record, chronological. **Ledger**: book of final entry — classified by account. **Cash book**: records cash transactions. **Sales/purchase books**: record credit transactions.\n\n**Posting**: transfer from journal to ledger — debit to debit, credit to credit.",
          },
          {
            heading: "Ledger account format",
            body: "**Left side**: debits — date, description, amount. **Right side**: credits — date, description, amount. **Balance**: difference between debits and credits — brought down or carried down.\n\n**Example**: Cash account — debits (money in), credits (money out), balance = cash remaining.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Transaction recorded first in journal, then ledger. Why?",
          solution: "Journal=chronological, ledger=classified.",
        },
      },
      questions: [
        {
          id: "eiasacct-u1-led-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the ledger?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Trial balance" },
              { id: "b", text: "Cash book" },
              { id: "c", text: "Book of final entry — classified accounts" },
              { id: "d", text: "First record" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ledger",
                statement: "Classified accounts.",
              },
            ],
            steps: [
              { reasoning: "Ledger = classified.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Classified",
            commonErrors: ["Journal confused."],
          },
        },
        {
          id: "eiasacct-u1-led-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two books of accounting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Books",
                statement: "Journal, ledger, cash book.",
              },
            ],
            steps: [
              {
                reasoning: "Journal — first record.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Ledger — classified accounts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Cash book — cash transactions.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Journal, ledger, cash book, sales book.",
            commonErrors: ["Only one.", "Wrong book."],
          },
        },
        {
          id: "eiasacct-u1-led-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain difference between journal and ledger.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Journal vs ledger",
                statement: "Chronological vs classified.",
              },
            ],
            steps: [
              {
                reasoning: "Journal: chronological — order of transactions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Ledger: classified — grouped by account.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Journal first, ledger second — posting.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Purpose: journal=audit trail, ledger=balances.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Chronological vs classified.",
            commonErrors: ["Same.", "No difference."],
          },
        },
        {
          id: "eiasacct-u1-led-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Cash account shows £500 debit, £200 credit.",
          parts: [
            { label: "a", prompt: "What does debit represent?", marks: 4 },
            { label: "b", prompt: "Calculate balance.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ledger balance",
                statement: "Debits-credits.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Debit = money in — cash received.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Credit = money out — cash paid.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Balance = 500 - 200 = £300 debit (cash remaining).",
                marks: 3,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Debit balance — asset account.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) debit=in, credit=out (b) £300 debit",
            commonErrors: ["Wrong sides.", "Wrong balance."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u1-trialbalance",
      title: "Trial Balance",
      skill: "Prepare and interpret trial balance.",
      lesson: {
        sections: [
          {
            heading: "Trial balance",
            body: "**Purpose**: check debits = credits — arithmetic accuracy. **Format**: list all ledger accounts with debit or credit balances. **Not proof**: errors can still exist — compensating errors, wrong accounts.\n\n**Preparation**: list all accounts, calculate balances, total debits and credits — should be equal.",
          },
          {
            heading: "Errors not detected",
            body: "**Errors trial balance can't find**: omission (both sides), commission (wrong account, same amount), principle (wrong classification), original entry (wrong amount both sides), reversal (debit/credit swapped).\n\n**Suspense account**: temporary account for errors — cleared when found.",
          },
        ],
        keyFormulas: [
          { name: "Trial balance", statement: "Total debits = Total credits" },
        ],
        workedExample: {
          problem: "Trial balance doesn't balance — what does it mean?",
          solution: "Arithmetic error somewhere — find and correct.",
        },
      },
      questions: [
        {
          id: "eiasacct-u1-tb-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a trial balance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Journal" },
              { id: "b", text: "Ledger" },
              { id: "c", text: "List of account balances" },
              { id: "d", text: "Financial statement" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Trial balance",
                statement: "Account balances.",
              },
            ],
            steps: [
              {
                reasoning: "TB = account balances.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Account balances",
            commonErrors: ["Statement confused."],
          },
        },
        {
          id: "eiasacct-u1-tb-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What does trial balance check?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "TB purpose",
                statement: "Debits=credits.",
              },
            ],
            steps: [
              {
                reasoning: "Checks debits = credits — arithmetic.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Doesn't prove accuracy — errors can remain.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Finds some errors — wrong amounts, omissions.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Debits=credits check, not proof.",
            commonErrors: ["Proof of accuracy.", "No errors."],
          },
        },
        {
          id: "eiasacct-u1-tb-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two errors trial balance can't detect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Undetected errors",
                statement: "Omission, commission.",
              },
            ],
            steps: [
              {
                reasoning: "Omission — transaction not recorded at all.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Commission — wrong account, same amount.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Both sides omitted — debits=credits still.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Wrong classification — debit/credit swapped.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Omission, commission, reversal.",
            commonErrors: ["No errors.", "Wrong error."],
          },
        },
        {
          id: "eiasacct-u1-tb-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Trial balance: debits £15,000, credits £14,500.",
          parts: [
            { label: "a", prompt: "Does it balance?", marks: 4 },
            { label: "b", prompt: "What to do?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "TB imbalance",
                statement: "Find error.",
              },
            ],
            steps: [
              {
                reasoning: "(a) No — debits £15,000 ≠ credits £14,500.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Difference = £500 — error exists.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Check ledger postings — find error.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Correct error — re-balance trial balance.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) no, £500 diff (b) find+correct",
            commonErrors: ["Balances.", "No action."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u1-summary",
      title: "Introduction to Accounting Summary",
      skill: "Summarise accounting basics.",
      lesson: {
        sections: [
          {
            heading: "Summary",
            body: "**Accounting**: record, classify, summarise, report financial transactions. **Equation**: Assets = Liabilities + Equity. **Double-entry**: debits=credits. **Books**: journal, ledger, trial balance. **Types**: financial (external) vs management (internal). **Standards**: accruals, prudence, consistency.\n\n**Key idea**: accounting provides information for decisions — internal and external users.",
          },
          {
            heading: "Exam preparation",
            body: "**Apply**: record transactions, calculate balances, prepare trial balance. **Evaluate**: accounting types, principles, user needs. **Analyse**: errors, transaction effects, equation changes.\n\n**Key concepts**: double-entry, debits/credits, ledger, trial balance, accounting equation.",
          },
        ],
        keyFormulas: [
          { name: "Accounting equation", statement: "A = L + OE" },
          { name: "Debits = Credits", statement: "Double-entry balance" },
        ],
        workedExample: {
          problem: "All transactions recorded. Accounting type?",
          solution: "Financial or management — depends on user.",
        },
      },
      questions: [
        {
          id: "eiasacct-u1-sum-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does the accounting equation show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Revenue" },
              { id: "b", text: "Cash flow" },
              { id: "c", text: "Assets = Liabilities + Equity" },
              { id: "d", text: "Profit" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Equation", statement: "A=L+OE." },
            ],
            steps: [
              { reasoning: "Equation = A=L+OE.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** A=L+OE",
            commonErrors: ["Profit confused."],
          },
        },
        {
          id: "eiasacct-u1-sum-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two accounting principles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Principles",
                statement: "Accruals, prudence.",
              },
            ],
            steps: [
              {
                reasoning: "Accruals — record when earned.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Prudence — don't overstate.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Consistency — same methods.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Accruals, prudence, consistency, materiality.",
            commonErrors: ["Only one.", "Wrong principle."],
          },
        },
        {
          id: "eiasacct-u1-sum-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why trial balance might not balance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "TB imbalance",
                statement: "Error exists.",
              },
            ],
            steps: [
              {
                reasoning: "Arithmetic error — wrong addition.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Posting error — wrong amount.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Omission — one side only.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Find and correct — re-check entries.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Arithmetic+posting+omission errors.",
            commonErrors: ["No reason.", "One error."],
          },
        },
        {
          id: "eiasacct-u1-sum-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate financial vs management accounting.",
          parts: [
            { label: "a", prompt: "Compare purposes.", marks: 4 },
            { label: "b", prompt: "Recommend for business.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Accounting types",
                statement: "External vs internal.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Financial — report to external users.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Management — help internal decisions.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Both needed — financial for compliance, management for decisions.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Integrate — use same data for both.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) external vs internal (b) both needed",
            commonErrors: ["One only.", "No recommendation."],
          },
        },
      ],
    },
  ],
};
