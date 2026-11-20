import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "olacc-u6-lesson-6-2",
  code: "6-2",
  title: "Creditors and Cash Book Control",
  goal: "I CAN prepare creditors control and cash book control accounts.",
  standards: ["7706 6.2"],
  vocabulary: [
    { term: "Creditors control", definition: "Control account for suppliers' accounts." },
    { term: "Credit purchases", definition: "Purchases on credit — increases amounts owed." },
    { term: "Cash book control", definition: "Control account checking cash book against general ledger." },
    { term: "Bank balance", definition: "Balance per bank statement vs cash book." },
    { term: "Unpresented cheques", definition: "Cheques paid but not yet on bank statement." },
  ],
  concepts: [
    {
      id: "olacc-u6-creditors",
      title: "Creditors control account",
      skill: "Prepare creditors control from purchases ledger transactions.",
      lesson: {
        sections: [
          { heading: "Debit side", body: "Payments to creditors (debit), purchases returns (debit), closing balance (debit). An opening debit balance would also appear here." },
          { heading: "Credit side", body: "Credit purchases (credit) and the opening credit balance." },
          { heading: "Normal balance", body: "Creditors control works in reverse to debtors control: credit purchases increase the liability; payments and returns decrease it. The account normally has a credit balance." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Creditors control: opening $3000 Cr, credit purchases $25000, payments $22000, purchases returns $1000. Find closing balance.",
          solution: "Credits: 3000+25000 = $28000. Debits: 22000+1000 = $23000. Closing = $5000 credit balance.",
        },
      },
      questions: [
        {
          id: "olacc-u6-cc-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Credit purchases appear on the ___ side of creditors control.",
          response: { type: "mcq", choices: [
            { id: "a", text: "Credit" }, { id: "b", text: "Debit" }, { id: "c", text: "Both" }, { id: "d", text: "Neither" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Creditors control", statement: "Purchases = credit." }], steps: [{ reasoning: "Increases liability = credit.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Credit" },
        },
        {
          id: "olacc-u6-cc-q2", difficulty: "core", totalMarks: 2,
          stem: "List three items on the debit side of creditors control.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Debit side", statement: "Reductions." }], steps: [
            { reasoning: "Payments to creditors, purchases returns, closing balance.", marks: 1, markCode: "M" },
            { reasoning: "All listed.", marks: 1, markCode: "A" },
          ], finalAnswer: "Payments to creditors; purchases returns; closing balance." },
        },
        {
          id: "olacc-u6-cc-q3", difficulty: "challenge", totalMarks: 4,
          stem: "OB $2000 Cr, credit purchases $18000, payments $15000, returns $600. Find closing balance.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Creditors control", statement: "Credits - debits." }], steps: [
            { reasoning: "Credits: 2000+18000 = $20000.", marks: 1, markCode: "M" },
            { reasoning: "Debits: 15000+600 = $15600.", marks: 1, markCode: "M" },
            { reasoning: "CB = $4400 credit.", marks: 1, markCode: "M" },
            { reasoning: "Correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "$4,400 credit balance" },
        },
        {
          id: "olacc-u6-cc-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Creditors control review.",
          parts: [
            { label: "a", prompt: "Debit side items?", marks: 3 },
            { label: "b", prompt: "Credit side items?", marks: 2 },
            { label: "c", prompt: "OB $4000 Cr, purchases $12000, payments $9000, returns $500. CB?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Creditors control", statement: "Items and balance." },
          ], steps: [
            { part: "a", reasoning: "Payments, returns, closing balance.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "All listed.", marks: 1, markCode: "A" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Opening bal, credit purchases.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Cr 16000 vs Dr 9500 → CB $6500 Cr.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct totals.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct balance.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct side.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) payments/returns/CB (b) OB+purchases (c) 6500Cr" },
        },
      ],
    },
    {
      id: "olacc-u6-cbc",
      title: "Cash book control account",
      skill: "Prepare cash book control account and understand its purpose.",
      lesson: {
        sections: [
          { heading: "Purpose", body: "The cash book is part of the ledger but often kept separately. The cash book control account in the general ledger summarizes all cash/bank transactions to check the cash book balances." },
          { heading: "How it works", body: "The control account mirrors the cash book's totals: receipts and payments posted from the cash book appear on the control account, and the resulting balance should equal the cash book's cash plus bank balances. Any difference signals an error." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Cash book shows debit balance $1500 (cash) and $3000 (bank). What should cash book control show?",
          solution: "Cash book control should show a debit balance of $4500 representing total cash and bank assets.",
        },
      },
      questions: [
        {
          id: "olacc-u6-cbc-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Cash book control account checks…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cash book balances against general ledger" }, { id: "b", text: "Customer accounts" }, { id: "c", text: "Supplier accounts" }, { id: "d", text: "Stock valuation" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Cash book control", statement: "Checks cash book." }], steps: [{ reasoning: "Verifies cash/bank balances.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Cash book vs GL" },
        },
        {
          id: "olacc-u6-cbc-q2", difficulty: "core", totalMarks: 2,
          stem: "What balance does cash book control normally have?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "CBC balance", statement: "Debit asset." }], steps: [
            { reasoning: "Debit balance (asset).", marks: 1, markCode: "M" },
            { reasoning: "Representing cash + bank.", marks: 1, markCode: "A" },
          ], finalAnswer: "Debit balance — cash and bank are assets." },
        },
        {
          id: "olacc-u6-cbc-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why cash book control is needed even though the cash book is part of the ledger.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "CBC purpose", statement: "Independent check." }], steps: [
            { reasoning: "Cash book kept separately from other ledgers.", marks: 1, markCode: "M" },
            { reasoning: "Control account checks for errors/completeness.", marks: 1, markCode: "M" },
            { reasoning: "Verifies total cash/bank position.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Provides an independent check that all cash transactions are correctly recorded." },
        },
        {
          id: "olacc-u6-cbc-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Cash book control review.",
          parts: [
            { label: "a", prompt: "What does it check?", marks: 2 },
            { label: "b", prompt: "Normal balance?", marks: 1 },
            { label: "c", prompt: "Cash $1000 Dr, bank $4000 Dr. Control balance?", marks: 2 },
            { label: "d", prompt: "Bank overdraft effect?", marks: 2 },
            { label: "e", prompt: "Why is it needed?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Cash book control", statement: "Purpose and balance." },
          ], steps: [
            { part: "a", reasoning: "Cash/bank balances vs GL.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Debit (asset).", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$5000 Dr.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Overdraft reduces asset / may create credit balance.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct effect.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Independent check on cash records.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Clear reason.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) checks cash book (b) Dr (c) 5000Dr (d) reduces asset (e) verification" },
        },
      ],
    },
  ],
  notes: [
    { id: "olacc-u6-6-2-notes", title: "Creditors & cash book control — notes", summary: "Creditors control entries and cash book control purpose.",
      sections: [
        { heading: "Creditors control", body: "Cr: opening bal + credit purchases. Dr: payments + returns + closing bal. Normally credit balance." },
        { heading: "Cash book control", body: "Checks cash book balances; normally debit balance representing cash + bank assets." },
      ] },
  ],
};
