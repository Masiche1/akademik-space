import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "olacc-u2-lesson-2-3",
  code: "2-3",
  title: "Trial Balance Practice",
  goal: "I CAN prepare trial balances from ledger balances and identify errors.",
  standards: ["7706 2.3", "7706 2.4"],
  vocabulary: [
    { term: "Trial balance list", definition: "Working list of account balances before formal TB." },
    { term: "Balance extraction", definition: "Taking balances from ledgers for the TB." },
    { term: "Credit balance", definition: "Account where credits exceed debits." },
    { term: "Debit balance", definition: "Account where debits exceed credits." },
    { term: "Suspense account", definition: "Temporary account for TB discrepancies." },
  ],
  concepts: [
    {
      id: "olacc-u2-tbpractice",
      title: "Extracting balances",
      skill: "Take balances from ledger accounts and place them in a trial balance.",
      lesson: {
        sections: [
          { heading: "Steps", body: "1. Balance every ledger account (total debits vs credits).\n2. Note each balance's side (Dr or Cr).\n3. List debit balances in debit column, credit balances in credit column.\n4. Total both columns — they must agree." },
          { heading: "Common balances", body: "Debit: cash, bank, stock, equipment, debtors, expenses. Credit: capital, sales, income, creditors, loans." },
          { heading: "If they don't agree", body: "Find the error: check postings, transpositions (digits swapped), or post a suspense account pending investigation." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Cash Dr balance $3000, Sales Cr balance $8000, Rent Dr $500, Capital Cr $2500. Do the totals agree?",
          solution: "Debits: 3000+500 = 3500. Credits: 8000+2500 = 10500. Difference $7000 — an error or missing accounts exist.",
        },
      },
      questions: [
        {
          id: "olacc-u2-tp-q1", difficulty: "foundation", totalMarks: 1,
          stem: "To prepare a trial balance you first…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Balance all ledger accounts" }, { id: "b", text: "Write the income statement" }, { id: "c", text: "Close the accounts" }, { id: "d", text: "Issue invoices" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "TB steps", statement: "Balance accounts first." }], steps: [{ reasoning: "Balance ledgers first.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Balance accounts" },
        },
        {
          id: "olacc-u2-tp-q2", difficulty: "core", totalMarks: 2,
          stem: "A ledger account shows total debits $700 and credits $900. What balance appears in the TB?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Balance", statement: "Larger minus smaller." }], steps: [
            { reasoning: "$200 credit balance.", marks: 1, markCode: "M" },
            { reasoning: "Credits larger → credit column.", marks: 1, markCode: "A" },
          ], finalAnswer: "$200 in the credit column." },
        },
        {
          id: "olacc-u2-tp-q3", difficulty: "challenge", totalMarks: 4,
          stem: "List the steps to prepare a trial balance.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "TB steps", statement: "Balance, list, total." }], steps: [
            { reasoning: "Balance each ledger account.", marks: 1, markCode: "M" },
            { reasoning: "Place Dr balances in debit column.", marks: 1, markCode: "M" },
            { reasoning: "Place Cr balances in credit column.", marks: 1, markCode: "M" },
            { reasoning: "Total and check agreement.", marks: 1, markCode: "A" },
          ], finalAnswer: "Balance accounts → debit column for Dr balances → credit column for Cr balances → total and verify." },
        },
        {
          id: "olacc-u2-tp-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Trial balance practice.",
          parts: [
            { label: "a", prompt: "Steps to prepare a TB?", marks: 3 },
            { label: "b", prompt: "Account: debits $1200, credits $1200. Balance?", marks: 1 },
            { label: "c", prompt: "Name two debit-balance account types.", marks: 2 },
            { label: "d", prompt: "TB totals disagree by $300. What next?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "TB practice", statement: "Steps, balances, discrepancy." },
          ], steps: [
            { part: "a", reasoning: "Balance accounts.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "List Dr/Cr columns.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Total and verify.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "No balance.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Assets.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Expenses.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Find the error.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Post suspense account.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Investigate and correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) balance+list+total (b) nil (c) assets+expenses (d) find+fix+suspense" },
        },
      ],
    },
    {
      id: "olacc-u2-correction",
      title: "Correcting errors",
      skill: "Use journal entries to correct bookkeeping errors.",
      lesson: {
        sections: [
          { heading: "Correction method", body: "Errors are corrected via the **journal**: debit/credit entries reverse the wrong posting and post the correct one. Example: $100 posted to Rent instead of Rates → debit Rates $100, credit Rent $100." },
          { heading: "Suspense accounts", body: "If the TB doesn't agree and the error isn't immediately found, post the difference to a **suspense account** — a temporary holding account. Once the error is found, correct both the real accounts and remove the suspense balance." },
          { heading: "Common corrections", body: "- Wrong account → reverse and repost correctly.\n- Wrong amount → adjust difference.\n- Omission → post the missing entry." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A $200 credit sale was posted to the wrong customer. How to correct?",
          solution: "Journal: debit correct customer $200, credit wrong customer $200 — transfers the balance.",
        },
      },
      questions: [
        {
          id: "olacc-u2-ce-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Errors are corrected through…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Journal entries" }, { id: "b", text: "New invoices only" }, { id: "c", text: "Erasing entries" }, { id: "d", text: "Trial balance only" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Correction", statement: "Journal entries." }], steps: [{ reasoning: "Journal corrects.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Journal entries" },
        },
        {
          id: "olacc-u2-ce-q2", difficulty: "core", totalMarks: 2,
          stem: "A $100 expense was posted to the wrong expense account. Describe the correction.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Correction", statement: "Reverse + repost." }], steps: [
            { reasoning: "Debit correct account $100.", marks: 1, markCode: "M" },
            { reasoning: "Credit wrong account $100.", marks: 1, markCode: "A" },
          ], finalAnswer: "Journal: debit correct expense $100, credit wrong expense $100." },
        },
        {
          id: "olacc-u2-ce-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the purpose of a suspense account in error correction.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Suspense", statement: "Temporary holder." }], steps: [
            { reasoning: "Holds unexplained TB difference.", marks: 1, markCode: "M" },
            { reasoning: "Allows TB to agree meanwhile.", marks: 1, markCode: "M" },
            { reasoning: "Cleared when error found.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Temporary account holding discrepancies until the underlying error is found and corrected." },
        },
        {
          id: "olacc-u2-ce-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Error correction review.",
          parts: [
            { label: "a", prompt: "How are errors corrected?", marks: 2 },
            { label: "b", prompt: "Give an example correction entry.", marks: 2 },
            { label: "c", prompt: "What is a suspense account?", marks: 2 },
            { label: "d", prompt: "Why must suspense accounts be cleared?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Correction", statement: "Journal, suspense, clearing." },
          ], steps: [
            { part: "a", reasoning: "Journal reversing/reposting entries.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct method.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Dr correct, Cr wrong account.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Valid example.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Temp account for discrepancies.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Not a real account.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Must not appear in statements.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Clear reason.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) journal entries (b) Dr/Cr swap (c) temp holder (d) not real account" },
        },
      ],
    },
  ],
  notes: [
    { id: "olacc-u2-2-3-notes", title: "TB practice — notes", summary: "Extracting balances and correcting errors via journal/suspense.",
      sections: [
        { heading: "TB", body: "Balance accounts → list Dr/Cr → total and verify." },
        { heading: "Errors", body: "Correct via journal; suspense account holds discrepancies until resolved." },
      ] },
  ],
};
