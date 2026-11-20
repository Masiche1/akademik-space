import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "olacc-u2-lesson-2-2",
  code: "2-2",
  title: "The Trial Balance",
  goal: "I CAN prepare a trial balance and explain its purpose.",
  standards: ["7706 2.3"],
  vocabulary: [
    { term: "Trial balance", definition: "List of all ledger account balances at a date." },
    { term: "Debit balances", definition: "Accounts with debit balances — assets, expenses." },
    { term: "Credit balances", definition: "Accounts with credit balances — capital, income, liabilities." },
    { term: "Compensating errors", definition: "Two errors cancelling each other out." },
    { term: "Suspense account", definition: "Temporary account used to make trial balance agree." },
  ],
  concepts: [
    {
      id: "olacc-u2-tb",
      title: "Preparing a trial balance",
      skill: "List account balances and check debits equal credits.",
      lesson: {
        sections: [
          { heading: "Purpose", body: "The trial balance lists every ledger account's balance at a point in time. It checks that total debits equal total credits — catching many (not all) errors." },
          { heading: "Format", body: "Columns: account name | debit | credit. Debit-balance accounts (assets, expenses) go in the debit column; credit-balance accounts (capital, income, liabilities) in the credit column. Totals must agree." },
          { heading: "What it proves", body: "If debits = credits, the double-entry system is arithmetically consistent — but errors can still exist (errors of principle, compensating errors, both sides wrong)." },
        ],
        keyFormulas: [
          { name: "Trial balance", statement: "Total debits = Total credits" },
        ],
        workedExample: {
          problem: "Trial balance totals: debits $45,000, credits $44,800. What does this show?",
          solution: "A $200 discrepancy — an error exists somewhere; find and correct it.",
        },
      },
      questions: [
        {
          id: "olacc-u2-tb-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A trial balance lists…",
          response: { type: "mcq", choices: [
            { id: "a", text: "All ledger account balances" }, { id: "b", text: "Only cash balances" }, { id: "c", text: "Only sales totals" }, { id: "d", text: "Only year-end figures" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Trial balance", statement: "All balances." }], steps: [{ reasoning: "All account balances.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** All balances" },
        },
        {
          id: "olacc-u2-tb-q2", difficulty: "core", totalMarks: 2,
          stem: "Which accounts appear in the debit column of a trial balance?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Trial balance", statement: "Assets+expenses debit." }], steps: [
            { reasoning: "Assets (cash, stock, equipment).", marks: 1, markCode: "M" },
            { reasoning: "Expenses.", marks: 1, markCode: "A" },
          ], finalAnswer: "Assets and expenses — debit-balance accounts." },
        },
        {
          id: "olacc-u2-tb-q3", difficulty: "challenge", totalMarks: 4,
          stem: "A trial balance agrees (debits = credits). Does this guarantee no errors? Explain.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "TB limits", statement: "Agrees ≠ error-free." }], steps: [
            { reasoning: "Only catches errors affecting one side.", marks: 1, markCode: "M" },
            { reasoning: "Errors of principle/omission both sides can agree.", marks: 1, markCode: "M" },
            { reasoning: "Compensating errors cancel out.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "No — it only checks totals; errors on both sides or cancelling errors can still exist." },
        },
        {
          id: "olacc-u2-tb-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Trial balance review.",
          parts: [
            { label: "a", prompt: "What is a trial balance?", marks: 2 },
            { label: "b", prompt: "What must its totals show?", marks: 1 },
            { label: "c", prompt: "Name two account types in debit column.", marks: 2 },
            { label: "d", prompt: "Why might an agreeing TB still hide errors?", marks: 2 },
            { label: "e", prompt: "What is a suspense account used for?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Trial balance", statement: "Purpose, limits, suspense." },
          ], steps: [
            { part: "a", reasoning: "Lists all account balances.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Debits = credits.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Assets.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Expenses.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Both-sides errors agree.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Compensating errors.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Temporary account for discrepancies.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Makes TB agree pending investigation.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) all balances (b) dr=cr (c) assets+expenses (d) hidden errors (e) temp discrepancy" },
        },
      ],
    },
    {
      id: "olacc-u2-errors",
      title: "Errors and correction",
      skill: "Identify common bookkeeping errors and their effect on the trial balance.",
      lesson: {
        sections: [
          { heading: "Errors the TB catches", body: "- **Omission**: entry missed entirely.\n- **Commission**: wrong account used.\n- **Principle**: wrong classification (e.g. expense as asset).\n- **Original entry**: wrong amount recorded.\n- **Compensating**: two errors cancelling." },
          { heading: "Errors the TB can't catch", body: "Errors affecting BOTH debit and credit equally — commission, principle, compensating, original entry (if both sides wrong same way)." },
          { heading: "Correction", body: "Journal entries reverse wrong postings and post correct ones; suspense account absorbs unexplained differences pending investigation." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A $50 sale was posted to Purchases instead of Sales. Which error?",
          solution: "Error of commission — wrong account; both sides wrong so TB may still agree.",
        },
      },
      questions: [
        {
          id: "olacc-u2-er-q1", difficulty: "foundation", totalMarks: 1,
          stem: "An error of commission is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Posting to the wrong account" }, { id: "b", text: "Missing an entry" }, { id: "c", text: "Wrong total" }, { id: "d", text: "A balance error" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Commission", statement: "Wrong account." }], steps: [{ reasoning: "Commission = wrong account.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Wrong account" },
        },
        {
          id: "olacc-u2-er-q2", difficulty: "core", totalMarks: 2,
          stem: "Which errors does a trial balance fail to detect?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "TB limits", statement: "Both-sides errors." }], steps: [
            { reasoning: "Errors affecting both sides equally.", marks: 1, markCode: "M" },
            { reasoning: "E.g. commission, principle, compensating.", marks: 1, markCode: "A" },
          ], finalAnswer: "Errors where both debit and credit are wrong equally — commission, principle, compensating." },
        },
        {
          id: "olacc-u2-er-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain what a suspense account is used for.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Suspense", statement: "Temporary balance." }], steps: [
            { reasoning: "Absorbs unexplained TB difference.", marks: 1, markCode: "M" },
            { reasoning: "Makes trial balance agree.", marks: 1, markCode: "M" },
            { reasoning: "Removed once error found and corrected.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Temporary account holding unexplained differences until the error is found and corrected." },
        },
        {
          id: "olacc-u2-er-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Errors review.",
          parts: [
            { label: "a", prompt: "Define error of omission.", marks: 1 },
            { label: "b", prompt: "Define error of commission.", marks: 1 },
            { label: "c", prompt: "Define error of principle.", marks: 2 },
            { label: "d", prompt: "Which errors does TB detect?", marks: 2 },
            { label: "e", prompt: "What is a suspense account?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Errors", statement: "Types and TB detection." },
          ], steps: [
            { part: "a", reasoning: "Entry completely missed.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Wrong account used.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Wrong classification.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "E.g. expense as asset.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "One-side errors.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct identification.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Temp account for discrepancies.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Makes TB agree.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Removed after correction.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) missed (b) wrong account (c) wrong class (d) one-side (e) temp account" },
        },
      ],
    },
  ],
  notes: [
    { id: "olacc-u2-2-2-notes", title: "Trial balance — notes", summary: "TB purpose, format, limits and common errors.",
      sections: [
        { heading: "Trial balance", body: "Lists all balances; debits must equal credits — catches one-sided errors only." },
        { heading: "Errors", body: "Omission, commission, principle, original entry, compensating; suspense account holds discrepancies." },
      ] },
  ],
};
