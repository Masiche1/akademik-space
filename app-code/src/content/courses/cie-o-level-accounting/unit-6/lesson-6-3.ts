import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "olacc-u6-lesson-6-3",
  code: "6-3",
  title: "Reconciling Control Accounts",
  goal: "I CAN reconcile control accounts and identify errors in subsidiary ledgers.",
  standards: ["7706 6.3"],
  vocabulary: [
    { term: "List of balances", definition: "Schedule of all subsidiary account balances." },
    { term: "Control account reconciliation", definition: "Comparing control account balance to list of balances total." },
    { term: "Unpresented items", definition: "Transactions recorded in one book but not yet in the other." },
    { term: "Suspense account", definition: "Temporary account holding errors until located." },
    { term: "Correction of errors", definition: "Rectifying entries to fix ledger mistakes." },
  ],
  concepts: [
    {
      id: "olacc-u6-recon",
      title: "Reconciling control accounts",
      skill: "Compare control account balances with list of balances and locate discrepancies.",
      lesson: {
        sections: [
          { heading: "The check", body: "At period end, total the individual balances in the list of balances for each subsidiary ledger. This total MUST equal the control account's balance. Any difference means an error exists somewhere." },
          { heading: "Locating errors", body: "Common causes: an entry posted to wrong account, a total posted instead of individual amounts, a transaction omitted, or a posting to wrong side. Compare individual account balances to source documents to find it." },
          { heading: "Suspense accounts", body: "If the error can't be found immediately, the difference goes to a suspense account pending investigation." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Debtors control shows $5,000 Dr but list of balances totals $4,800. What does this mean?",
          solution: "An error of $200 exists — either in the control account or one/more debtor accounts. Investigate postings and source documents.",
        },
      },
      questions: [
        {
          id: "olacc-u6-rec-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The control account balance must equal…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The total of the list of balances" }, { id: "b", text: "The trial balance" }, { id: "c", text: "The bank statement" }, { id: "d", text: "The sales journal" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Reconciliation", statement: "Must agree." }], steps: [{ reasoning: "List of balances total.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** List of balances" },
        },
        {
          id: "olacc-u6-rec-q2", difficulty: "core", totalMarks: 2,
          stem: "What does a difference between control account and list of balances indicate?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Discrepancy", statement: "Error exists." }], steps: [
            { reasoning: "An error in recording/posting.", marks: 1, markCode: "M" },
            { reasoning: "Must be investigated and corrected.", marks: 1, markCode: "A" },
          ], finalAnswer: "An error exists in the subsidiary ledger or control account." },
        },
        {
          id: "olacc-u6-rec-q3", difficulty: "challenge", totalMarks: 4,
          stem: "List three common causes of control account discrepancies.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Error causes", statement: "Common mistakes." }], steps: [
            { reasoning: "Entry posted to wrong account.", marks: 1, markCode: "M" },
            { reasoning: "Transaction omitted or total posted instead of items.", marks: 1, markCode: "M" },
            { reasoning: "Posting to wrong side.", marks: 1, markCode: "M" },
            { reasoning: "Three causes listed.", marks: 1, markCode: "A" },
          ], finalAnswer: "Wrong account; omitted transaction/total-only posting; wrong side." },
        },
        {
          id: "olacc-u6-rec-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Control reconciliation review.",
          parts: [
            { label: "a", prompt: "What must agree with control account?", marks: 1 },
            { label: "b", prompt: "What does a difference mean?", marks: 1 },
            { label: "c", prompt: "Name three error causes.", marks: 3 },
            { label: "d", prompt: "What is a suspense account?", marks: 2 },
            { label: "e", prompt: "Control $6000, list totals $5800. Action?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Reconciliation", statement: "Agreement, errors, suspense." },
          ], steps: [
            { part: "a", reasoning: "List of balances total.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Error exists.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Wrong account/omitted/total posted/wrong side — any three.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Second cause.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Third cause.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Temporary account for unresolved differences.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Investigate $200 difference.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Find and correct error.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) list totals (b) error (c) 3 causes (d) temp account (e) investigate 200" },
        },
      ],
    },
    {
      id: "olacc-u6-corrections",
      title: "Correcting errors",
      skill: "Prepare correcting entries for common ledger errors.",
      lesson: {
        sections: [
          { heading: "Error types", body: "- Error of omission: transaction not recorded.\n- Error of commission: wrong account or wrong amount.\n- Error of principle: wrong classification (e.g. capital vs expense).\n- Error of original entry: wrong amount in both debit and credit.\n- Error of reversal: entries debited/credited the wrong way." },
          { heading: "Correcting entries", body: "Reverse the wrong entry and post the correct one. For an error of commission where the wrong account was debited: credit the wrong account, debit the correct account." },
          { heading: "Effect on profit", body: "Some errors affect profit (e.g. expenses treated as drawings), others don't (e.g. transposition within same account type). Only profit-affecting errors change the profit figure." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A $500 credit sale was entered as $50. Correct the error.",
          solution: "Dr Debtor $450 (shortfall); Cr Sales $450 (original entry understated sales by $450).",
        },
      },
      questions: [
        {
          id: "olacc-u6-corr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "An error of commission is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Wrong account or wrong amount used" }, { id: "b", text: "Transaction not recorded" }, { id: "c", text: "Entries reversed" }, { id: "d", text: "Capital vs expense confusion" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Error of commission", statement: "Wrong account/amount." }], steps: [{ reasoning: "Wrong account or amount.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Wrong account/amount" },
        },
        {
          id: "olacc-u6-corr-q2", difficulty: "core", totalMarks: 2,
          stem: "A $2000 sale was recorded as $200. What is the correcting entry?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Correction", statement: "Post difference." }], steps: [
            { reasoning: "Dr Debtor $1800, Cr Sales $1800.", marks: 1, markCode: "M" },
            { reasoning: "Correct amounts.", marks: 1, markCode: "A" },
          ], finalAnswer: "Dr Debtor $1,800; Cr Sales $1,800." },
        },
        {
          id: "olacc-u6-corr-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between an error of omission and an error of commission.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Error types", statement: "Omission vs commission." }], steps: [
            { reasoning: "Omission: not recorded at all.", marks: 1, markCode: "M" },
            { reasoning: "Commission: recorded but wrong account/amount.", marks: 1, markCode: "M" },
            { reasoning: "Clear distinction.", marks: 1, markCode: "M" },
            { reasoning: "Correct explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Omission = missing entirely; commission = recorded incorrectly." },
        },
        {
          id: "olacc-u6-corr-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Error correction review.",
          parts: [
            { label: "a", prompt: "Define error of omission.", marks: 1 },
            { label: "b", prompt: "Define error of commission.", marks: 1 },
            { label: "c", prompt: "Define error of principle.", marks: 1 },
            { label: "d", prompt: "Purchase $800 entered as $80. Correction?", marks: 2 },
            { label: "e", prompt: "Which errors affect profit?", marks: 2 },
            { label: "f", prompt: "Why use suspense accounts?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Error correction", statement: "Types, entries, profit effect." },
          ], steps: [
            { part: "a", reasoning: "Not recorded.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Wrong account/amount.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Wrong classification.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Dr Purchases/Cr Creditor $720.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Those affecting income/expense classification.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Correct explanation.", marks: 1, markCode: "A" },
            { part: "f", reasoning: "Hold difference pending investigation.", marks: 1, markCode: "M" },
            { part: "f", reasoning: "Correct reason.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) missing (b) wrong acct (c) wrong class (d) 720Dr/Cr (e) income/expense (f) pending" },
        },
      ],
    },
  ],
  notes: [
    { id: "olacc-u6-6-3-notes", title: "Reconciling control accounts — notes", summary: "List of balances check, error causes and corrections.",
      sections: [
        { heading: "Reconciliation", body: "Control account balance must equal list of balances total; differences indicate errors." },
        { heading: "Corrections", body: "Omission = missing; commission = wrong account/amount; principle = wrong classification. Post correcting entries." },
      ] },
  ],
};
