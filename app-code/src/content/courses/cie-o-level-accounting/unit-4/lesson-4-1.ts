import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "olacc-u4-lesson-4-1",
  code: "4-1",
  title: "The Petty Cash Book",
  goal: "I CAN maintain a petty cash book with imprest system and record expenses.",
  standards: ["7706 4.1"],
  vocabulary: [
    { term: "Petty cash", definition: "Small amount of cash for minor expenses." },
    { term: "Imprest system", definition: "Fixed float topped up to original amount each period." },
    { term: "Petty cash book", definition: "Record of small cash receipts and payments." },
    { term: "Analysis column", definition: "Columns classifying each expense by type." },
    { term: "Float", definition: "The fixed amount of petty cash held." },
    { term: "Top-up", definition: "Replenishing petty cash back to the float amount." },
  ],
  concepts: [
    {
      id: "olacc-u4-petty",
      title: "Petty cash and the imprest system",
      skill: "Record petty cash payments and maintain the imprest float.",
      lesson: {
        sections: [
          { heading: "What is petty cash", body: "Small cash float (e.g. $100) for minor expenses — stamps, tea, small repairs — avoiding many cheques for tiny amounts." },
          { heading: "Imprest system", body: "Start with fixed float. Payments reduce the cash; the total spent is periodically reimbursed from the bank to restore the float. The book shows receipts (top-ups) and payments with analysis columns classifying each expense." },
          { heading: "Recording", body: "Each payment: date, details, amount, analysis column (stationery, postage, etc.). Total payments = amount to top up." },
        ],
        keyFormulas: [
          { name: "Imprest", statement: "Top-up = total payments made" },
        ],
        workedExample: {
          problem: "Petty cash float $100. Payments: stamps $20, stationery $15, tea $10. How much to top up?",
          solution: "Total payments = $45. Top up $45 from bank to restore $100 float.",
        },
      },
      questions: [
        {
          id: "olacc-u4-pc-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Petty cash is used for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Small everyday expenses" }, { id: "b", text: "Large purchases" }, { id: "c", text: "Salary payments" }, { id: "d", text: "Bank transfers" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Petty cash", statement: "Minor expenses." }], steps: [{ reasoning: "Small expenses.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Small expenses" },
        },
        {
          id: "olacc-u4-pc-q2", difficulty: "core", totalMarks: 2,
          stem: "What is the imprest system?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Imprest", statement: "Fixed float topped up." }], steps: [
            { reasoning: "Fixed float amount maintained.", marks: 1, markCode: "M" },
            { reasoning: "Topped up by amount spent each period.", marks: 1, markCode: "A" },
          ], finalAnswer: "A fixed cash float replenished to its original amount by the total spent." },
        },
        {
          id: "olacc-u4-pc-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Petty cash float $200. Payments: postage $30, cleaning $25, printing $45. Calculate the top-up.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Imprest", statement: "Top-up = total payments." }], steps: [
            { reasoning: "$30 + $25 + $45 = $100.", marks: 1, markCode: "M" },
            { reasoning: "Top up $100.", marks: 1, markCode: "M" },
            { reasoning: "Restores $200 float.", marks: 1, markCode: "M" },
            { reasoning: "Correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "$100 top-up restores the $200 float." },
        },
        {
          id: "olacc-u4-pc-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Petty cash review.",
          parts: [
            { label: "a", prompt: "What is petty cash for?", marks: 1 },
            { label: "b", prompt: "What is the imprest system?", marks: 2 },
            { label: "c", prompt: "Float $150; payments $60. Top-up?", marks: 1 },
            { label: "d", prompt: "What is an analysis column?", marks: 2 },
            { label: "e", prompt: "Why use petty cash instead of cheques?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Petty cash", statement: "Float, imprest, analysis." },
          ], steps: [
            { part: "a", reasoning: "Minor expenses.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Fixed float topped up.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$60.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Classifies expenses by type.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Faster/simpler for small amounts.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Avoids cheque admin.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Clear reason.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) minor costs (b) fixed float (c) 60 (d) expense types (e) efficient" },
        },
      ],
    },
    {
      id: "olacc-u4-petty-post",
      title: "Posting from the petty cash book",
      skill: "Post petty cash expenses to ledger accounts.",
      lesson: {
        sections: [
          { heading: "Posting", body: "Each expense total posts to its ledger account: postage total → Postage account; stationery total → Stationery account. The cash book's payment side handles the bank top-up." },
          { heading: "Example", body: "Analysis column totals: postage $50, stationery $30, sundries $20. Post $50 to Postage, $30 to Stationery, $20 to Sundry expenses; the $100 total is the bank top-up." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Petty cash analysis: cleaning $40, tea $15. Where do these post?",
          solution: "Cleaning $40 → Cleaning expenses account; tea $15 → Staff welfare/refreshments account.",
        },
      },
      questions: [
        {
          id: "olacc-u4-pp-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Petty cash expenses post to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Their respective expense accounts" }, { id: "b", text: "Only the cash account" }, { id: "c", text: "Only the bank account" }, { id: "d", text: "The sales account" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Posting", statement: "To expense accounts." }], steps: [{ reasoning: "Post to expense accounts.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Expense accounts" },
        },
        {
          id: "olacc-u4-pp-q2", difficulty: "core", totalMarks: 2,
          stem: "Analysis column shows postage $60, stationery $40. What is posted where?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Posting", statement: "Totals to accounts." }], steps: [
            { reasoning: "$60 to Postage, $40 to Stationery.", marks: 1, markCode: "M" },
            { reasoning: "Correct posting.", marks: 1, markCode: "A" },
          ], finalAnswer: "$60 → Postage account; $40 → Stationery account." },
        },
        {
          id: "olacc-u4-pp-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how the petty cash book connects to the bank account.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Petty cash link", statement: "Top-up from bank." }], steps: [
            { reasoning: "Payments reduce petty cash float.", marks: 1, markCode: "M" },
            { reasoning: "Total spent is withdrawn from bank.", marks: 1, markCode: "M" },
            { reasoning: "Restores float to original amount.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Total petty cash payments are reimbursed from the bank account to restore the float." },
        },
        {
          id: "olacc-u4-pp-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Petty cash posting review.",
          parts: [
            { label: "a", prompt: "Where do petty cash expenses post?", marks: 1 },
            { label: "b", prompt: "What does the analysis column show?", marks: 2 },
            { label: "c", prompt: "Postage $50, sundries $30. Journal entry for top-up?", marks: 3 },
            { label: "d", prompt: "Why analyse expenses by type?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Petty cash posting", statement: "Expense accounts, analysis purpose." },
          ], steps: [
            { part: "a", reasoning: "Expense accounts.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Expense categories per payment.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Dr Postage 50, Dr Sundries 30.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Cr Bank/Petty cash 80.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct entry.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Shows spending by category.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Aids control/budgeting.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Clear reason.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) expense accts (b) categories (c) Dr 80 Cr bank (d) spending control" },
        },
      ],
    },
  ],
  notes: [
    { id: "olacc-u4-4-1-notes", title: "Petty cash — notes", summary: "Imprest float, analysis columns and posting expenses.",
      sections: [
        { heading: "Imprest", body: "Fixed float; top-up = total payments; analysis column classifies each expense." },
        { heading: "Posting", body: "Expense totals post to their ledger accounts; bank funds the top-up." },
      ] },
  ],
};
