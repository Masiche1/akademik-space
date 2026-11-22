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
            { id: "a", text: "The total of the list of balances" },
            { id: "b", text: "The trial balance" },
            { id: "c", text: "The sales journal" },
            { id: "d", text: "The bank statement" },
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
        {
          id: "olacc-u6-rec-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A suspense account is used when…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sales are made" },
            { id: "b", text: "The trial balance agrees" },
            { id: "c", text: "Stock is valued" },
            { id: "d", text: "An error cannot be located immediately" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Suspense account", statement: "Temporary holding." }], steps: [{ reasoning: "Holds difference pending investigation.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Error not yet found" },
        },
        {
          id: "olacc-u6-rec-q6", difficulty: "core", totalMarks: 2,
          stem: "Creditors control shows $6,000 Cr but the list of balances totals $5,800 Cr. Enter the difference.",
          response: { type: "numeric", parts: [{ label: "Difference ($)", answer: 200 }] },
          markscheme: { principles: [{ kind: "principle", name: "Reconciliation", statement: "Must agree." }], steps: [
            { reasoning: "$6000 - $5800 = $200$.", working: "6000-5800", marks: 1, markCode: "M" },
            { reasoning: "Difference is $200.", marks: 1, markCode: "A" },
          ], finalAnswer: "$200" },
        },
        {
          id: "olacc-u6-rec-q7", difficulty: "core", totalMarks: 2,
          stem: "Control account $7,500 vs list of balances $7,200. Enter (a) the difference and (b) the list total that should agree if the control is correct.",
          response: { type: "numeric", parts: [
            { label: "(a) Difference ($)", answer: 300 },
            { label: "(b) Correct list total ($)", answer: 7500 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Reconciliation", statement: "Must agree." }], steps: [
            { reasoning: "$7500 - $7200 = $300$.", working: "7500-7200", marks: 1, markCode: "M" },
            { reasoning: "List should total $7,500.", working: "7500", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $300 (b) $7,500" },
        },
        {
          id: "olacc-u6-rec-q8", difficulty: "core", totalMarks: 1,
          stem: "A common cause of control account discrepancies is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A bank deposit" },
            { id: "b", text: "An entry posted to the wrong account" },
            { id: "c", text: "Rising sales" },
            { id: "d", text: "Correct double-entry posting" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Error causes", statement: "Posting mistakes." }], steps: [{ reasoning: "Wrong account creates a difference.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Wrong account" },
        },
        {
          id: "olacc-u6-rec-q9", difficulty: "challenge", totalMarks: 2,
          stem: "Debtors control $8,000 vs list $7,750; creditors control $5,000 vs list $5,150. Enter (a) debtors difference and (b) creditors difference.",
          response: { type: "numeric", parts: [
            { label: "(a) Debtors difference ($)", answer: 250 },
            { label: "(b) Creditors difference ($)", answer: 150 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Reconciliation", statement: "Differences indicate errors." }], steps: [
            { reasoning: "$8000 - $7750 = $250$; $5150 - $5000 = $150$.", working: "8000-7750; 5150-5000", marks: 1, markCode: "M" },
            { reasoning: "Both differences correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $250 (b) $150" },
        },
        {
          id: "olacc-u6-rec-q10", difficulty: "core", totalMarks: 2,
          stem: "What is the purpose of the list of balances?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "List of balances", statement: "Schedule of balances." }], steps: [
            { reasoning: "Lists all subsidiary account balances at period end.", marks: 1, markCode: "M" },
            { reasoning: "Its total is compared with the control account.", marks: 1, markCode: "A" },
          ], finalAnswer: "Schedule of subsidiary balances used to check control accounts." },
        },
        {
          id: "olacc-u6-rec-q11", difficulty: "challenge", totalMarks: 3,
          stem: "A $450 transaction was posted to the control account but omitted from one debtor's account. Enter (a) the difference and (b) the corrected debtor balance if that debtor's balance was $2,000.",
          response: { type: "numeric", parts: [
            { label: "(a) Difference ($)", answer: 450 },
            { label: "(b) Corrected debtor balance ($)", answer: 2450 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Omission error", statement: "Missing posting." }], steps: [
            { reasoning: "Omitted $450 → difference of $450.", working: "450", marks: 1, markCode: "M" },
            { reasoning: "Debtor balance = $2000 + $450 = $2450$.", working: "2000+450", marks: 1, markCode: "M" },
            { reasoning: "Both correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $450 (b) $2,450" },
        },
        {
          id: "olacc-u6-rec-q12", difficulty: "challenge", totalMarks: 1,
          stem: "A suspense account is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A permanent part of the trial balance" },
            { id: "b", text: "A temporary account holding an unexplained difference" },
            { id: "c", text: "A debtor's account" },
            { id: "d", text: "A type of bank account" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Suspense account", statement: "Temporary." }], steps: [{ reasoning: "Holds difference until error found.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Temporary account" },
        },
        {
          id: "olacc-u6-rec-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Describe the steps taken to locate an error found during control account reconciliation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "method", name: "Locating errors", statement: "Investigation steps." }], steps: [
            { reasoning: "Note the amount of the difference.", marks: 1, markCode: "M" },
            { reasoning: "Check individual account balances against source documents.", marks: 1, markCode: "M" },
            { reasoning: "If found, post correcting entries; if not, use suspense account.", marks: 1, markCode: "M" },
            { reasoning: "Clear description.", marks: 1, markCode: "A" },
          ], finalAnswer: "Identify difference, check accounts vs documents, correct or suspend." },
        },
        {
          id: "olacc-u6-rec-q14", difficulty: "core", totalMarks: 2,
          stem: "Cash book control $4,200 vs cash book balances $4,050. Enter the difference.",
          response: { type: "numeric", parts: [{ label: "Difference ($)", answer: 150 }] },
          markscheme: { principles: [{ kind: "principle", name: "Reconciliation", statement: "Must agree." }], steps: [
            { reasoning: "$4200 - $4050 = $150$.", working: "4200-4050", marks: 1, markCode: "M" },
            { reasoning: "Difference is $150.", marks: 1, markCode: "A" },
          ], finalAnswer: "$150" },
        },
        {
          id: "olacc-u6-rec-q15", difficulty: "challenge", totalMarks: 1,
          stem: "Which of the following is NOT a typical cause of control account discrepancies?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Entry posted to wrong account" },
            { id: "b", text: "Posting to wrong side" },
            { id: "c", text: "Transaction omitted" },
            { id: "d", text: "Correctly balanced subsidiary accounts" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Error causes", statement: "Common mistakes." }], steps: [{ reasoning: "Balanced accounts produce agreement, not difference.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Balanced accounts" },
        },
        {
          id: "olacc-u6-rec-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Control account reconciliation — extended review.",
          parts: [
            { label: "a", prompt: "What must agree with the control account?", marks: 1 },
            { label: "b", prompt: "What does a difference mean?", marks: 1 },
            { label: "c", prompt: "Control $9,000 vs list $8,600. Difference?", marks: 1 },
            { label: "d", prompt: "Name two error causes.", marks: 2 },
            { label: "e", prompt: "What is a suspense account?", marks: 2 },
            { label: "f", prompt: "What is the first step in locating an error?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Reconciliation", statement: "Agreement, errors, suspense." },
          ], steps: [
            { part: "a", reasoning: "List of balances total.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "An error exists.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$400$.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Wrong account; omitted transaction (or other valid).", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Second cause.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Temporary account for unresolved differences.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "f", reasoning: "Compare individual balances to source documents.", marks: 1, markCode: "M" },
            { part: "f", reasoning: "Correct first step.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) list totals (b) error (c) 400 (d) 2 causes (e) temp acct (f) check docs" },
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
            { id: "a", text: "Entries reversed" },
            { id: "b", text: "Capital vs expense confusion" },
            { id: "c", text: "Wrong account or wrong amount used" },
            { id: "d", text: "Transaction not recorded" },
          ], correctChoiceId: "c" },
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
        {
          id: "olacc-u6-corr-q5", difficulty: "foundation", totalMarks: 1,
          stem: "An error of omission occurs when…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A transaction is not recorded at all" },
            { id: "b", text: "Entries are reversed" },
            { id: "c", text: "The wrong account is used" },
            { id: "d", text: "The wrong amount is entered" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Error of omission", statement: "Not recorded." }], steps: [{ reasoning: "Transaction completely missing.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Not recorded" },
        },
        {
          id: "olacc-u6-corr-q6", difficulty: "core", totalMarks: 2,
          stem: "A $3,000 credit sale was entered as $300. Enter the amount of the correcting entry.",
          response: { type: "numeric", parts: [{ label: "Correction ($)", answer: 2700 }] },
          markscheme: { principles: [{ kind: "principle", name: "Correction", statement: "Post difference." }], steps: [
            { reasoning: "$3000 - $300 = $2700$.", working: "3000-300", marks: 1, markCode: "M" },
            { reasoning: "Dr Debtor $2,700; Cr Sales $2,700.", marks: 1, markCode: "A" },
          ], finalAnswer: "$2,700" },
        },
        {
          id: "olacc-u6-corr-q7", difficulty: "core", totalMarks: 2,
          stem: "A $3,000 credit sale was entered as $300; recorded sales total $4,000. Enter (a) the correcting entry amount and (b) corrected total sales.",
          response: { type: "numeric", parts: [
            { label: "(a) Correction ($)", answer: 2700 },
            { label: "(b) Corrected sales ($)", answer: 6700 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Correction", statement: "Post difference." }], steps: [
            { reasoning: "Correction = $2700$; sales = $4000 + $2700 = $6700$.", working: "3000-300; 4000+2700", marks: 1, markCode: "M" },
            { reasoning: "Both correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $2,700 (b) $6,700" },
        },
        {
          id: "olacc-u6-corr-q8", difficulty: "core", totalMarks: 1,
          stem: "An error of principle is illustrated by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Failing to record a sale" },
            { id: "b", text: "Writing $50 as $500" },
            { id: "c", text: "Posting to the wrong side" },
            { id: "d", text: "Treating a business expense as drawings" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Error of principle", statement: "Wrong classification." }], steps: [{ reasoning: "Expense vs drawings is misclassification.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Expense as drawings" },
        },
        {
          id: "olacc-u6-corr-q9", difficulty: "challenge", totalMarks: 2,
          stem: "A credit purchase of $1,200 was entered as $120. Enter the amount of the correcting entry.",
          response: { type: "numeric", parts: [{ label: "Correction ($)", answer: 1080 }] },
          markscheme: { principles: [{ kind: "principle", name: "Correction", statement: "Post difference." }], steps: [
            { reasoning: "$1200 - $120 = $1080$.", working: "1200-120", marks: 1, markCode: "M" },
            { reasoning: "Dr Purchases $1,080; Cr Creditor $1,080.", marks: 1, markCode: "A" },
          ], finalAnswer: "$1,080" },
        },
        {
          id: "olacc-u6-corr-q10", difficulty: "core", totalMarks: 2,
          stem: "List the four main types of accounting errors.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Error types", statement: "Four types." }], steps: [
            { reasoning: "Omission, commission, principle, original entry (and reversal).", marks: 1, markCode: "M" },
            { reasoning: "Four named.", marks: 1, markCode: "A" },
          ], finalAnswer: "Omission; commission; principle; original entry/reversal." },
        },
        {
          id: "olacc-u6-corr-q11", difficulty: "challenge", totalMarks: 3,
          stem: "A $800 credit sale was not recorded, and a $500 purchase was entered as $50. Enter (a) the correction for the sale and (b) the correction for the purchase.",
          response: { type: "numeric", parts: [
            { label: "(a) Sale correction ($)", answer: 800 },
            { label: "(b) Purchase correction ($)", answer: 450 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Corrections", statement: "Post full/partial amounts." }], steps: [
            { reasoning: "Omission: post full $800$.", working: "800", marks: 1, markCode: "M" },
            { reasoning: "Purchase: $500 - $50 = $450$.", working: "500-50", marks: 1, markCode: "M" },
            { reasoning: "Both correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $800 (b) $450" },
        },
        {
          id: "olacc-u6-corr-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Which error is most likely to affect reported profit?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A total posted instead of items" },
            { id: "b", text: "A business expense recorded as drawings" },
            { id: "c", text: "A sale entered in the wrong debtor's account" },
            { id: "d", text: "A transposition within one account" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Profit effect", statement: "Classification matters." }], steps: [{ reasoning: "Expense vs drawings changes profit.", marks: 1, markCode: "M" }], finalAnswer: "**(a)** Expense as drawings" },
        },
        {
          id: "olacc-u6-corr-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how to prepare a correcting entry for an error of commission.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "method", name: "Correcting entries", statement: "Reverse and repost." }], steps: [
            { reasoning: "Identify the wrong account and amount.", marks: 1, markCode: "M" },
            { reasoning: "Credit the wrongly debited account (or debit the wrongly credited).", marks: 1, markCode: "M" },
            { reasoning: "Post the correct entry to the right account.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Reverse the wrong posting and enter the correct account." },
        },
        {
          id: "olacc-u6-corr-q14", difficulty: "core", totalMarks: 2,
          stem: "A credit sale of $2,500 was entered as $250. Enter the correcting entry amount.",
          response: { type: "numeric", parts: [{ label: "Correction ($)", answer: 2250 }] },
          markscheme: { principles: [{ kind: "principle", name: "Correction", statement: "Post difference." }], steps: [
            { reasoning: "$2500 - $250 = $2250$.", working: "2500-250", marks: 1, markCode: "M" },
            { reasoning: "Dr Debtor $2,250; Cr Sales $2,250.", marks: 1, markCode: "A" },
          ], finalAnswer: "$2,250" },
        },
        {
          id: "olacc-u6-corr-q15", difficulty: "foundation", totalMarks: 1,
          stem: "An error of reversal is when…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A transaction is missing" },
            { id: "b", text: "Debit and credit are swapped" },
            { id: "c", text: "The wrong amount is entered" },
            { id: "d", text: "The wrong account is used" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Error of reversal", statement: "Sides swapped." }], steps: [{ reasoning: "Entries posted the wrong way round.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Sides swapped" },
        },
        {
          id: "olacc-u6-corr-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Error correction — extended review.",
          parts: [
            { label: "a", prompt: "Define error of omission.", marks: 1 },
            { label: "b", prompt: "Define error of commission.", marks: 1 },
            { label: "c", prompt: "Sale $4,000 entered as $400. Correction?", marks: 2 },
            { label: "d", prompt: "Purchase $900 not recorded. Correction?", marks: 1 },
            { label: "e", prompt: "Which errors affect profit?", marks: 2 },
            { label: "f", prompt: "What is a suspense account for?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Error correction", statement: "Types, entries, profit effect." },
          ], steps: [
            { part: "a", reasoning: "Not recorded.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Wrong account/amount.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$3600$ Dr Debtor/Cr Sales.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Dr Purchases $900/Cr Creditor $900.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Errors affecting income/expense classification.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "f", reasoning: "Holds unexplained differences temporarily.", marks: 1, markCode: "M" },
            { part: "f", reasoning: "Correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) missing (b) wrong acct (c) 3600 (d) 900 (e) income/expense (f) temp hold" },
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
