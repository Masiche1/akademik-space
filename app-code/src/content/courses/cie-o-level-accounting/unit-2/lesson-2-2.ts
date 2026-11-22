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
            { id: "a", text: "Only cash balances" },
            { id: "b", text: "Only year-end figures" },
            { id: "c", text: "Only sales totals" },
            { id: "d", text: "All ledger account balances" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Trial balance", statement: "All balances." }], steps: [{ reasoning: "All account balances.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** All balances" },
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
        {
          id: "olacc-u2-tb-q5", difficulty: "foundation", totalMarks: 1,
          stem: "In a trial balance, expenses appear in the…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Neither column" },
            { id: "b", text: "Debit column" },
            { id: "c", text: "Both columns" },
            { id: "d", text: "Credit column" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Trial balance", statement: "Assets+expenses debit." }], steps: [{ reasoning: "Expenses have debit balances so appear in the debit column.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Debit column" },
        },
        {
          id: "olacc-u2-tb-q6", difficulty: "core", totalMarks: 1,
          stem: "For a trial balance to agree, it must satisfy…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sales = purchases" },
            { id: "b", text: "Total assets = total liabilities" },
            { id: "c", text: "Cash = bank" },
            { id: "d", text: "Total debits = total credits" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "TB agreement", statement: "Dr = Cr." }], steps: [{ reasoning: "Agreement means debit and credit totals are equal.", marks: 1, markCode: "M" }], finalAnswer: "**(d)** Total debits = total credits" },
        },
        {
          id: "olacc-u2-tb-q7", difficulty: "core", totalMarks: 2,
          stem: "A trial balance shows total debits of $24,000 and total credits of $23,500. Enter (a) the debit total, (b) the difference between the columns.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 24000 }, { label: "(b)", answer: 500 }] },
          markscheme: { principles: [{ kind: "principle", name: "TB discrepancy", statement: "Difference between columns." }], steps: [
            { reasoning: "Debit total is $24,000.", marks: 1, markCode: "M" },
            { reasoning: "$24,000 - $23,500 = $500 difference.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $24,000 (b) $500" },
        },
        {
          id: "olacc-u2-tb-q8", difficulty: "core", totalMarks: 2,
          stem: "What is the main purpose of preparing a trial balance?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "TB purpose", statement: "Check double entry." }], steps: [
            { reasoning: "It lists all ledger balances at a point in time.", marks: 1, markCode: "M" },
            { reasoning: "It checks that total debits equal total credits, revealing many errors.", marks: 1, markCode: "A" },
          ], finalAnswer: "To check that the double-entry system is arithmetically consistent — total debits must equal total credits." },
        },
        {
          id: "olacc-u2-tb-q9", difficulty: "challenge", totalMarks: 1,
          stem: "Which of the following errors would a trial balance detect?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Error of commission" },
            { id: "b", text: "Error of principle" },
            { id: "c", text: "Error of omission" },
            { id: "d", text: "Compensating error" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "TB detection", statement: "Detects one-sided errors." }], steps: [{ reasoning: "An omission unbalances one side, so the TB detects it; the others affect both sides equally.", marks: 1, markCode: "M" }], finalAnswer: "**(c)** Error of omission" },
        },
        {
          id: "olacc-u2-tb-q10", difficulty: "challenge", totalMarks: 4,
          stem: "A trial balance agrees (total debits = total credits). Explain why this does not prove the books are free from errors.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "TB limits", statement: "Agreement ≠ accuracy." }], steps: [
            { reasoning: "The TB only checks that totals are equal, not that entries are correct.", marks: 1, markCode: "M" },
            { reasoning: "Errors of commission, principle and compensating errors affect both sides equally.", marks: 1, markCode: "M" },
            { reasoning: "Wrong amounts posted to both sides can also cancel out.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Agreement only proves arithmetic consistency; errors affecting both sides equally can still exist undetected." },
        },
        {
          id: "olacc-u2-tb-q11", difficulty: "challenge", totalMarks: 3,
          stem: "A trial balance lists: debits — cash $2,000, stock $3,000, debtors $4,000, equipment $10,000; credits — capital $9,000, loan $5,000, creditors $2,000, sales $3,000. Enter (a) total debits, (b) total credits, (c) the difference.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 19000 }, { label: "(b)", answer: 19000 }, { label: "(c)", answer: 0 }] },
          markscheme: { principles: [{ kind: "principle", name: "TB totals", statement: "Sum each column." }], steps: [
            { reasoning: "Debits: $2,000 + $3,000 + $4,000 + $10,000 = $19,000.", marks: 1, markCode: "M" },
            { reasoning: "Credits: $9,000 + $5,000 + $2,000 + $3,000 = $19,000.", marks: 1, markCode: "M" },
            { reasoning: "The columns agree — difference is nil.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $19,000 (b) $19,000 (c) $0" },
        },
        {
          id: "olacc-u2-tb-q12", difficulty: "core", totalMarks: 2,
          stem: "Where does a suspense account appear in the trial balance and why?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Suspense", statement: "Temporary TB account." }], steps: [
            { reasoning: "It appears on whichever side is needed to make the TB agree.", marks: 1, markCode: "M" },
            { reasoning: "It holds the unexplained difference pending investigation.", marks: 1, markCode: "A" },
          ], finalAnswer: "On the side needed to balance the columns — it temporarily holds the unexplained difference." },
        },
        {
          id: "olacc-u2-tb-q13", difficulty: "foundation", totalMarks: 1,
          stem: "A trial balance is normally prepared…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only when the business makes a loss" },
            { id: "b", text: "At the end of an accounting period from ledger balances" },
            { id: "c", text: "Instead of the ledger" },
            { id: "d", text: "Before any transactions occur" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "TB timing", statement: "From ledger balances." }], steps: [{ reasoning: "It is drawn up from ledger account balances at a point in time.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** From ledger balances at period end" },
        },
        {
          id: "olacc-u2-tb-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the role of the suspense account when a trial balance does not agree.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Suspense account", statement: "Temporary holder." }], steps: [
            { reasoning: "The difference between debit and credit totals is posted to suspense.", marks: 1, markCode: "M" },
            { reasoning: "This makes the trial balance agree so statements can proceed.", marks: 1, markCode: "M" },
            { reasoning: "The error is investigated and corrected via the journal.", marks: 1, markCode: "M" },
            { reasoning: "Once cleared, the suspense account returns to nil.", marks: 1, markCode: "A" },
          ], finalAnswer: "Suspense holds the unexplained difference so the TB agrees, pending investigation and correction." },
        },
        {
          id: "olacc-u2-tb-q15", difficulty: "core", totalMarks: 2,
          stem: "A trial balance shows total debits of $18,200 and total credits of $17,450. Enter (a) the debit total and (b) the difference between the columns.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 18200 }, { label: "(b)", answer: 750 }] },
          markscheme: { principles: [{ kind: "principle", name: "TB discrepancy", statement: "Difference between columns." }], steps: [
            { reasoning: "Debit total is $18,200.", marks: 1, markCode: "M" },
            { reasoning: "$18,200 - $17,450 = $750 difference.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $18,200 (b) $750" },
        },
        {
          id: "olacc-u2-tb-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Trial balance review.",
          parts: [
            { label: "a", prompt: "What is a trial balance?", marks: 2 },
            { label: "b", prompt: "What must its column totals show?", marks: 1 },
            { label: "c", prompt: "Name two types of account in the debit column.", marks: 2 },
            { label: "d", prompt: "Name two errors a TB cannot detect.", marks: 2 },
            { label: "e", prompt: "What is the purpose of a suspense account?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Trial balance", statement: "Purpose, format, limits, suspense." },
          ], steps: [
            { part: "a", reasoning: "List of all ledger balances at a date.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Debits = credits.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Assets and expenses.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Two named.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Errors affecting both sides e.g. commission, compensating.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Two named.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Temporary account for unexplained differences.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Makes TB agree pending correction.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) all balances (b) dr=cr (c) assets+expenses (d) commission+compensating (e) temp holder" },
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
            { id: "a", text: "A balance error" },
            { id: "b", text: "Posting to the wrong account" },
            { id: "c", text: "Missing an entry" },
            { id: "d", text: "Wrong total" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Commission", statement: "Wrong account." }], steps: [{ reasoning: "Commission = wrong account.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Wrong account" },
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
        {
          id: "olacc-u2-er-q5", difficulty: "foundation", totalMarks: 1,
          stem: "An error of omission is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Recording a wrong amount" },
            { id: "b", text: "A transaction left out of the books completely" },
            { id: "c", text: "Swapping two digits" },
            { id: "d", text: "Posting to the wrong account" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Omission", statement: "Entry missed." }], steps: [{ reasoning: "Omission means the transaction was never recorded.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Transaction not recorded" },
        },
        {
          id: "olacc-u2-er-q6", difficulty: "core", totalMarks: 1,
          stem: "Posting a $100 payment to Rent instead of Rates is an error of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Original entry" },
            { id: "b", text: "Commission" },
            { id: "c", text: "Omission" },
            { id: "d", text: "Principle" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Commission", statement: "Wrong account." }], steps: [{ reasoning: "The wrong account was used — an error of commission.", marks: 1, markCode: "M" }], finalAnswer: "**(b)** Commission" },
        },
        {
          id: "olacc-u2-er-q7", difficulty: "core", totalMarks: 2,
          stem: "A credit sale of $500 was recorded as $50. Enter (a) the correct amount of the sale, (b) the difference between the correct and recorded amounts.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 500 }, { label: "(b)", answer: 450 }] },
          markscheme: { principles: [{ kind: "principle", name: "Original entry error", statement: "Wrong amount recorded." }], steps: [
            { reasoning: "Correct sale is $500.", marks: 1, markCode: "M" },
            { reasoning: "$500 - $50 = $450 difference.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $500 (b) $450" },
        },
        {
          id: "olacc-u2-er-q8", difficulty: "core", totalMarks: 2,
          stem: "Define an error of principle and give one example.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Principle", statement: "Wrong classification." }], steps: [
            { reasoning: "An error of principle records a transaction in the wrong type of account.", marks: 1, markCode: "M" },
            { reasoning: "Example: a loan treated as a purchase, or an expense treated as an asset.", marks: 1, markCode: "A" },
          ], finalAnswer: "Recording a transaction under the wrong category — e.g. treating an expense as an asset." },
        },
        {
          id: "olacc-u2-er-q9", difficulty: "challenge", totalMarks: 1,
          stem: "Which error is NOT detected by an agreed trial balance?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Error of commission" },
            { id: "b", text: "Posting to only one side" },
            { id: "c", text: "Wrong total in one account" },
            { id: "d", text: "Error of omission" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "TB limits", statement: "Both-sides errors." }], steps: [{ reasoning: "Commission affects both debit and credit equally, so the TB still agrees.", marks: 1, markCode: "M" }], finalAnswer: "**(a)** Error of commission" },
        },
        {
          id: "olacc-u2-er-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how the journal is used to correct an error of commission.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Correction", statement: "Reverse and repost." }], steps: [
            { reasoning: "Identify the wrongly posted account and the correct account.", marks: 1, markCode: "M" },
            { reasoning: "Debit the correct account and credit the wrong account for the amount.", marks: 1, markCode: "M" },
            { reasoning: "This reverses the error and posts the entry correctly.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Journal: debit the correct account, credit the wrong account — reversing and reposting the entry." },
        },
        {
          id: "olacc-u2-er-q11", difficulty: "foundation", totalMarks: 2,
          stem: "A $300 credit purchase was completely omitted from the books. Enter (a) the amount by which purchases is understated, (b) the amount by which creditors is understated.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 300 }, { label: "(b)", answer: 300 }] },
          markscheme: { principles: [{ kind: "principle", name: "Omission effect", statement: "Both sides understated." }], steps: [
            { reasoning: "Purchases is understated by $300.", marks: 1, markCode: "M" },
            { reasoning: "Creditors is also understated by $300 — both sides missed.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $300 (b) $300" },
        },
        {
          id: "olacc-u2-er-q12", difficulty: "core", totalMarks: 2,
          stem: "What is a compensating error? Give an example.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Compensating", statement: "Two errors cancel." }], steps: [
            { reasoning: "Two or more errors that cancel each other out so the TB still agrees.", marks: 1, markCode: "M" },
            { reasoning: "Example: one omission of $200 and another of $200 on opposite sides.", marks: 1, markCode: "A" },
          ], finalAnswer: "Errors that offset each other — e.g. a $200 omission on the debit side cancelled by a $200 omission on the credit side." },
        },
        {
          id: "olacc-u2-er-q13", difficulty: "foundation", totalMarks: 1,
          stem: "While investigating why a trial balance does not agree, the unexplained difference is placed in a…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Suspense account" },
            { id: "b", text: "Capital account" },
            { id: "c", text: "Journal only" },
            { id: "d", text: "Sales account" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Suspense", statement: "Temporary account." }], steps: [{ reasoning: "The suspense account holds the unexplained difference.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Suspense account" },
        },
        {
          id: "olacc-u2-er-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why errors that affect both the debit and credit sides equally are not detected by the trial balance.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "TB limits", statement: "Equal effects cancel." }], steps: [
            { reasoning: "The TB only checks that total debits equal total credits.", marks: 1, markCode: "M" },
            { reasoning: "If both sides change by the same amount, the totals still agree.", marks: 1, markCode: "M" },
            { reasoning: "Examples: commission, principle, compensating and some original-entry errors.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Because both sides change equally, the totals remain balanced — the TB cannot reveal them." },
        },
        {
          id: "olacc-u2-er-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A credit sale of $750 was incorrectly recorded as $75. Enter (a) the amount by which sales is understated, (b) the amount by which debtors is understated, (c) the correct sales figure.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 675 }, { label: "(b)", answer: 675 }, { label: "(c)", answer: 750 }] },
          markscheme: { principles: [{ kind: "principle", name: "Original entry", statement: "Both sides wrong equally." }], steps: [
            { reasoning: "$750 - $75 = $675 understatement on sales.", marks: 1, markCode: "M" },
            { reasoning: "Debtors is also understated by $675.", marks: 1, markCode: "M" },
            { reasoning: "Correct figure is $750.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $675 (b) $675 (c) $750" },
        },
        {
          id: "olacc-u2-er-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Errors review.",
          parts: [
            { label: "a", prompt: "Give an example of an error of omission.", marks: 1 },
            { label: "b", prompt: "Give an example of an error of commission.", marks: 1 },
            { label: "c", prompt: "Explain an error of principle with an example.", marks: 2 },
            { label: "d", prompt: "Which errors does the TB fail to detect?", marks: 2 },
            { label: "e", prompt: "Explain the role of the journal and suspense account in correction.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Errors", statement: "Types, detection, correction." },
          ], steps: [
            { part: "a", reasoning: "A valid omission example e.g. missed invoice.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "A valid commission example e.g. posted to wrong account.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Wrong classification.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Valid example e.g. expense as asset.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Errors affecting both sides equally.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct identification.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Journal reverses/reposts errors.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Suspense holds unexplained differences.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Cleared once error found.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) missed entry (b) wrong account (c) wrong class (d) both-sides (e) journal+suspense" },
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
