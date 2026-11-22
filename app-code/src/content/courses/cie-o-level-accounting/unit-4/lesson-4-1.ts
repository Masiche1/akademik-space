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
            { id: "a", text: "Salary payments" },
            { id: "b", text: "Small everyday expenses" },
            { id: "c", text: "Large purchases" },
            { id: "d", text: "Bank transfers" },
          ], correctChoiceId: "b" },
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
        {
          id: "olacc-u4-pc-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Under the imprest system, the petty cash float is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Paid directly to suppliers" },
            { id: "b", text: "Allowed to grow with profits" },
            { id: "c", text: "Kept at a fixed amount and topped up to it" },
            { id: "d", text: "Held in the bank account" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Imprest", statement: "Fixed float topped up." }], steps: [{ reasoning: "Fixed amount maintained.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Fixed float topped up" },
        },
        {
          id: "olacc-u4-pc-q6", difficulty: "core", totalMarks: 2,
          stem: "Petty cash float $250. Payments: repairs $60, postage $45, refreshments $25. What top-up is needed?",
          response: { type: "numeric", parts: [{ label: "Top-up ($)", answer: 130 }] },
          markscheme: { principles: [{ kind: "principle", name: "Imprest", statement: "Top-up = total payments." }], steps: [
            { reasoning: "$60 + $45 + $25 = $130.", marks: 1, markCode: "M" },
            { reasoning: "Top up $130 to restore the $250 float.", marks: 1, markCode: "A" },
          ], finalAnswer: "$130" },
        },
        {
          id: "olacc-u4-pc-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Payments in the petty cash book are recorded on the ___ side.",
          response: { type: "mcq", choices: [
            { id: "a", text: "Credit" },
            { id: "b", text: "Debit" },
            { id: "c", text: "Both" },
            { id: "d", text: "Neither" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Petty cash book", statement: "Payments = credit." }], steps: [{ reasoning: "Payments reduce cash = credit side.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Credit" },
        },
        {
          id: "olacc-u4-pc-q8", difficulty: "core", totalMarks: 2,
          stem: "Petty cash float $180. Payments total $95 before the top-up. How much cash remains in the tin?",
          response: { type: "numeric", parts: [{ label: "Cash remaining ($)", answer: 85 }] },
          markscheme: { principles: [{ kind: "principle", name: "Imprest", statement: "Float minus payments." }], steps: [
            { reasoning: "$180 - $95 = $85.", marks: 1, markCode: "M" },
            { reasoning: "$85 remains.", marks: 1, markCode: "A" },
          ], finalAnswer: "$85" },
        },
        {
          id: "olacc-u4-pc-q9", difficulty: "core", totalMarks: 1,
          stem: "Which is NOT typically paid from petty cash?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A supplier's large monthly invoice" },
            { id: "b", text: "Postage stamps" },
            { id: "c", text: "Staff refreshments" },
            { id: "d", text: "Small office repairs" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Petty cash", statement: "Minor expenses only." }], steps: [{ reasoning: "Large invoices are paid by cheque/bank, not petty cash.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Large supplier invoice" },
        },
        {
          id: "olacc-u4-pc-q10", difficulty: "challenge", totalMarks: 2,
          stem: "Week 1 petty cash payments $60; week 2 payments $90. Float $200. Total top-ups needed for the month?",
          response: { type: "numeric", parts: [{ label: "Total top-ups ($)", answer: 150 }] },
          markscheme: { principles: [{ kind: "principle", name: "Imprest", statement: "Each period topped up to float." }], steps: [
            { reasoning: "$60 + $90 = $150 total payments.", marks: 1, markCode: "M" },
            { reasoning: "Top up $150 across the two weeks.", marks: 1, markCode: "A" },
          ], finalAnswer: "$150" },
        },
        {
          id: "olacc-u4-pc-q11", difficulty: "challenge", totalMarks: 1,
          stem: "The main control benefit of keeping a fixed imprest float is that…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Interest is earned on the cash" },
            { id: "b", text: "The bank never needs updating" },
            { id: "c", text: "Spending is easy to monitor against a fixed amount" },
            { id: "d", text: "No receipts need to be recorded" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Imprest control", statement: "Fixed float aids control." }], steps: [{ reasoning: "Fixed amount makes discrepancies easy to spot.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Easy to monitor" },
        },
        {
          id: "olacc-u4-pc-q12", difficulty: "foundation", totalMarks: 1,
          stem: "Petty cash float $500. Expenses paid $180. Balance in the tin before top-up?",
          response: { type: "numeric", parts: [{ label: "Balance ($)", answer: 320 }] },
          markscheme: { principles: [{ kind: "principle", name: "Imprest", statement: "Float minus payments." }], steps: [{ reasoning: "$500 - $180 = $320.", marks: 1, markCode: "M" }], finalAnswer: "$320" },
        },
        {
          id: "olacc-u4-pc-q13", difficulty: "core", totalMarks: 1,
          stem: "The analysis column in a petty cash book is used to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Record the float total" },
            { id: "b", text: "Classify each payment by type of expense" },
            { id: "c", text: "Calculate bank interest" },
            { id: "d", text: "List debtors' balances" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Analysis column", statement: "Classifies expenses." }], steps: [{ reasoning: "Shows the type of each expense.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Classifies expenses" },
        },
        {
          id: "olacc-u4-pc-q14", difficulty: "core", totalMarks: 1,
          stem: "Petty cash payments: stationery $22, tea $8, cleaning $15, postage $30. Total payments?",
          response: { type: "numeric", parts: [{ label: "Total payments ($)", answer: 75 }] },
          markscheme: { principles: [{ kind: "principle", name: "Imprest", statement: "Top-up = total payments." }], steps: [{ reasoning: "$22 + $8 + $15 + $30 = $75.", marks: 1, markCode: "M" }], finalAnswer: "$75" },
        },
        {
          id: "olacc-u4-pc-q15", difficulty: "challenge", totalMarks: 1,
          stem: "The bank top-up for petty cash is recorded as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A credit note" },
            { id: "b", text: "A payment in the cash/bank book" },
            { id: "c", text: "A sales invoice" },
            { id: "d", text: "A debit note" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Top-up", statement: "Bank funds the float." }], steps: [{ reasoning: "Money leaves the bank to restore the float.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** A payment in the cash book" },
        },
        {
          id: "olacc-u4-pc-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Petty cash review.",
          parts: [
            { label: "a", prompt: "What is the imprest system?", marks: 2 },
            { label: "b", prompt: "Float $400; payments: stationery $110, postage $60, sundries $30. Top-up?", marks: 2 },
            { label: "c", prompt: "Name two analysis columns used in a petty cash book.", marks: 2 },
            { label: "d", prompt: "Explain one reason businesses use petty cash rather than paying everything by cheque.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Petty cash", statement: "Imprest, analysis, control." },
          ], steps: [
            { part: "a", reasoning: "Fixed float topped up to original amount.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "$110 + $60 + $30 = $200.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Top up $200.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Any two expense-type columns, e.g. postage, stationery.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Convenient for small amounts.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Avoids cheque/bank administration.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Clear reason.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) fixed float topped up (b) 200 (c) any two expense columns (d) efficient for small payments" },
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
            { id: "a", text: "The sales account" },
            { id: "b", text: "Their respective expense accounts" },
            { id: "c", text: "Only the cash account" },
            { id: "d", text: "Only the bank account" },
          ], correctChoiceId: "b" },
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
        {
          id: "olacc-u4-pp-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The total of all petty cash payments is withdrawn from…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The bank account" },
            { id: "b", text: "The debtors ledger" },
            { id: "c", text: "The sales account" },
            { id: "d", text: "The purchases journal" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Top-up", statement: "Bank funds the float." }], steps: [{ reasoning: "Bank replenishes petty cash.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Bank account" },
        },
        {
          id: "olacc-u4-pp-q6", difficulty: "core", totalMarks: 2,
          stem: "Analysis column totals: postage $70, stationery $45, sundries $15. Amount to withdraw from the bank?",
          response: { type: "numeric", parts: [{ label: "Withdrawal ($)", answer: 130 }] },
          markscheme: { principles: [{ kind: "principle", name: "Imprest", statement: "Top-up = total payments." }], steps: [
            { reasoning: "$70 + $45 + $15 = $130.", marks: 1, markCode: "M" },
            { reasoning: "Withdraw $130.", marks: 1, markCode: "A" },
          ], finalAnswer: "$130" },
        },
        {
          id: "olacc-u4-pp-q7", difficulty: "foundation", totalMarks: 1,
          stem: "A postage column total of $55 posts as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Dr Postage account $55" },
            { id: "b", text: "Dr Bank account $55" },
            { id: "c", text: "Cr Postage account $55" },
            { id: "d", text: "Cr Sales account $55" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Posting", statement: "Expenses debited." }], steps: [{ reasoning: "Expense totals are debited to expense accounts.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Dr Postage $55" },
        },
        {
          id: "olacc-u4-pp-q8", difficulty: "core", totalMarks: 2,
          stem: "Analysis columns show cleaning $25 and refreshments $35. State the amounts posted to each expense account.",
          response: { type: "numeric", parts: [
            { label: "Cleaning ($)", answer: 25 },
            { label: "Refreshments ($)", answer: 35 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Posting", statement: "Totals to matching accounts." }], steps: [
            { reasoning: "$25 posts to Cleaning expenses.", marks: 1, markCode: "M" },
            { reasoning: "$35 posts to Refreshments/welfare account.", marks: 1, markCode: "A" },
          ], finalAnswer: "Cleaning $25; Refreshments $35." },
        },
        {
          id: "olacc-u4-pp-q9", difficulty: "core", totalMarks: 1,
          stem: "When petty cash is topped up from the bank, the bank account is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Credited" },
            { id: "b", text: "Debited" },
            { id: "c", text: "Closed" },
            { id: "d", text: "Unchanged" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Top-up entry", statement: "Bank credited." }], steps: [{ reasoning: "Money leaves the bank = credit.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Credited" },
        },
        {
          id: "olacc-u4-pp-q10", difficulty: "challenge", totalMarks: 2,
          stem: "Petty cash analysis totals $260 and the float is $400. How much cash remains in the tin before the top-up?",
          response: { type: "numeric", parts: [{ label: "Cash remaining ($)", answer: 140 }] },
          markscheme: { principles: [{ kind: "principle", name: "Imprest", statement: "Float minus payments." }], steps: [
            { reasoning: "$400 - $260 = $140.", marks: 1, markCode: "M" },
            { reasoning: "$140 remains.", marks: 1, markCode: "A" },
          ], finalAnswer: "$140" },
        },
        {
          id: "olacc-u4-pp-q11", difficulty: "challenge", totalMarks: 1,
          stem: "Posting only column totals to the ledger is efficient because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "It removes double entry" },
            { id: "b", text: "It eliminates all errors" },
            { id: "c", text: "Analysis columns already classify each expense type" },
            { id: "d", text: "The bank requires it" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Posting efficiency", statement: "Totals suffice." }], steps: [{ reasoning: "Analysis columns provide the classification needed.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Analysis already classifies" },
        },
        {
          id: "olacc-u4-pp-q12", difficulty: "foundation", totalMarks: 1,
          stem: "Stationery $18 and postage $27 posted from petty cash. Total posted to expense accounts?",
          response: { type: "numeric", parts: [{ label: "Total ($)", answer: 45 }] },
          markscheme: { principles: [{ kind: "principle", name: "Posting", statement: "Totals to accounts." }], steps: [{ reasoning: "$18 + $27 = $45.", marks: 1, markCode: "M" }], finalAnswer: "$45" },
        },
        {
          id: "olacc-u4-pp-q13", difficulty: "core", totalMarks: 1,
          stem: "The credit entry for the petty cash top-up is recorded in…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The sales returns day book" },
            { id: "b", text: "The debtors ledger" },
            { id: "c", text: "The three-column cash book" },
            { id: "d", text: "The purchases journal" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Cash book", statement: "Bank payments recorded there." }], steps: [{ reasoning: "Top-up is a bank payment in the cash book.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Three-column cash book" },
        },
        {
          id: "olacc-u4-pp-q14", difficulty: "core", totalMarks: 1,
          stem: "Total petty cash payments $95. Bank top-up amount?",
          response: { type: "numeric", parts: [{ label: "Top-up ($)", answer: 95 }] },
          markscheme: { principles: [{ kind: "principle", name: "Imprest", statement: "Top-up = total payments." }], steps: [{ reasoning: "Top up equals total spent.", marks: 1, markCode: "M" }], finalAnswer: "$95" },
        },
        {
          id: "olacc-u4-pp-q15", difficulty: "challenge", totalMarks: 1,
          stem: "If one analysis column entry is omitted, the effect is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The float increases" },
            { id: "b", text: "Sales are overstated" },
            { id: "c", text: "That expense account is understated" },
            { id: "d", text: "No effect at all" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Analysis errors", statement: "Omission understates expense." }], steps: [{ reasoning: "Missing entry means missing posting to that account.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Expense account understated" },
        },
        {
          id: "olacc-u4-pp-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Petty cash posting review.",
          parts: [
            { label: "a", prompt: "Where do analysis column totals post?", marks: 2 },
            { label: "b", prompt: "State the postings for postage $80 and sundries $20.", marks: 2 },
            { label: "c", prompt: "Explain how the petty cash book connects to the bank account.", marks: 2 },
            { label: "d", prompt: "Why is the imprest float useful for cash control?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Petty cash posting", statement: "Expense accounts, bank link, control." },
          ], steps: [
            { part: "a", reasoning: "To the respective expense accounts.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Dr Postage $80, Dr Sundries $20.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Total payments are reimbursed from the bank.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Restores the fixed float.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Fixed float makes spending verifiable.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Top-up equals spending, easy to check.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Clear reason.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) expense accounts (b) Dr Postage 80, Dr Sundries 20 (c) bank reimburses total (d) fixed float aids control" },
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
