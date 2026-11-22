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
            { id: "a", text: "Both" },
            { id: "b", text: "Debit" },
            { id: "c", text: "Credit" },
            { id: "d", text: "Neither" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Creditors control", statement: "Purchases = credit." }], steps: [{ reasoning: "Increases liability = credit.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Credit" },
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
        {
          id: "olacc-u6-cc-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Payments made to creditors appear on the ___ side of creditors control.",
          response: { type: "mcq", choices: [
            { id: "a", text: "Credit" },
            { id: "b", text: "Debit" },
            { id: "c", text: "Both" },
            { id: "d", text: "Neither" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Creditors control", statement: "Payments reduce liability." }], steps: [{ reasoning: "Payments decrease amounts owed — debit.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Debit" },
        },
        {
          id: "olacc-u6-cc-q6", difficulty: "core", totalMarks: 2,
          stem: "OB $3,000 Cr, credit purchases $20,000, payments $17,000, purchases returns $800. Enter the closing balance.",
          response: { type: "numeric", parts: [{ label: "Closing balance ($)", answer: 5200 }] },
          markscheme: { principles: [{ kind: "principle", name: "Creditors control", statement: "Credits - debits." }], steps: [
            { reasoning: "Cr $23000 vs Dr $17800 → CB $5200$ credit.", working: "3000+20000-17000-800", marks: 1, markCode: "M" },
            { reasoning: "Closing balance is $5,200 credit.", marks: 1, markCode: "A" },
          ], finalAnswer: "$5,200 credit" },
        },
        {
          id: "olacc-u6-cc-q7", difficulty: "core", totalMarks: 2,
          stem: "OB $4,000 Cr, credit purchases $12,000. Enter the total credits.",
          response: { type: "numeric", parts: [{ label: "Total credits ($)", answer: 16000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Creditors control", statement: "Credit items." }], steps: [
            { reasoning: "$4000 + $12000 = $16000$.", working: "4000+12000", marks: 1, markCode: "M" },
            { reasoning: "Total credits are $16,000.", marks: 1, markCode: "A" },
          ], finalAnswer: "$16,000" },
        },
        {
          id: "olacc-u6-cc-q8", difficulty: "core", totalMarks: 1,
          stem: "Purchases returns are entered on the ___ side of creditors control.",
          response: { type: "mcq", choices: [
            { id: "a", text: "Credit" },
            { id: "b", text: "Neither" },
            { id: "c", text: "Debit" },
            { id: "d", text: "Both" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Creditors control", statement: "Returns reduce liability." }], steps: [{ reasoning: "Goods returned to suppliers decrease debt.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Debit" },
        },
        {
          id: "olacc-u6-cc-q9", difficulty: "challenge", totalMarks: 2,
          stem: "OB $1,000 Cr, credit purchases $15,000, payments $11,000, purchases returns $400. Enter (a) closing balance and (b) total debits.",
          response: { type: "numeric", parts: [
            { label: "(a) Closing balance ($)", answer: 4600 },
            { label: "(b) Total debits ($)", answer: 11400 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Creditors control", statement: "Credits - debits." }], steps: [
            { reasoning: "Cr $16000 vs Dr $11400 → CB $4600$ credit.", working: "1000+15000-11000-400", marks: 1, markCode: "M" },
            { reasoning: "Debits = $11000 + $400 = $11400$.", working: "11000+400", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $4,600 Cr (b) $11,400" },
        },
        {
          id: "olacc-u6-cc-q10", difficulty: "core", totalMarks: 2,
          stem: "List the items on the debit side of creditors control.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Debit side", statement: "Reductions." }], steps: [
            { reasoning: "Payments to creditors, purchases returns, closing balance.", marks: 1, markCode: "M" },
            { reasoning: "All listed.", marks: 1, markCode: "A" },
          ], finalAnswer: "Payments to creditors; purchases returns; closing balance." },
        },
        {
          id: "olacc-u6-cc-q11", difficulty: "challenge", totalMarks: 3,
          stem: "OB $2,500 Cr, credit purchases $30,000, payments $25,000, purchases returns $1,500. Enter (a) total credits, (b) total debits and (c) closing balance.",
          response: { type: "numeric", parts: [
            { label: "(a) Total credits ($)", answer: 32500 },
            { label: "(b) Total debits ($)", answer: 26500 },
            { label: "(c) Closing balance ($)", answer: 6000 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Creditors control", statement: "Full balancing." }], steps: [
            { reasoning: "Cr = $2500+$30000 = $32500$.", working: "2500+30000", marks: 1, markCode: "M" },
            { reasoning: "Dr = $25000+$1500 = $26500$.", working: "25000+1500", marks: 1, markCode: "M" },
            { reasoning: "CB = $32500-$26500 = $6000$ credit.", working: "32500-26500", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $32,500 (b) $26,500 (c) $6,000 Cr" },
        },
        {
          id: "olacc-u6-cc-q12", difficulty: "challenge", totalMarks: 1,
          stem: "An opening DEBIT balance on creditors control would appear on the ___ side.",
          response: { type: "mcq", choices: [
            { id: "a", text: "Debit" },
            { id: "b", text: "Both" },
            { id: "c", text: "Neither" },
            { id: "d", text: "Credit" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Creditors control", statement: "Opening balance side." }], steps: [{ reasoning: "Debit balance stays on debit side.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Debit" },
        },
        {
          id: "olacc-u6-cc-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why creditors control normally shows a credit balance.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Normal balance", statement: "Credit = liability." }], steps: [
            { reasoning: "Credit purchases and opening balance are liabilities.", marks: 1, markCode: "M" },
            { reasoning: "Payments and returns reduce the liability.", marks: 1, markCode: "M" },
            { reasoning: "Normally purchases exceed payments → credit balance remains.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "It represents amounts owed to suppliers — a liability with a credit balance." },
        },
        {
          id: "olacc-u6-cc-q14", difficulty: "core", totalMarks: 2,
          stem: "OB $5,000 Cr, credit purchases $8,000, payments $9,000, purchases returns $500. Enter the closing balance.",
          response: { type: "numeric", parts: [{ label: "Closing balance ($)", answer: 3500 }] },
          markscheme: { principles: [{ kind: "principle", name: "Creditors control", statement: "Credits - debits." }], steps: [
            { reasoning: "Cr $13000 vs Dr $9500 → CB $3500$ credit.", working: "5000+8000-9000-500", marks: 1, markCode: "M" },
            { reasoning: "Closing balance is $3,500 credit.", marks: 1, markCode: "A" },
          ], finalAnswer: "$3,500 credit" },
        },
        {
          id: "olacc-u6-cc-q15", difficulty: "foundation", totalMarks: 1,
          stem: "Which item decreases the creditors control balance?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Payments to creditors" },
            { id: "b", text: "Credit purchases" },
            { id: "c", text: "Goods bought on credit" },
            { id: "d", text: "Opening credit balance" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Creditors control", statement: "Payments reduce debt." }], steps: [{ reasoning: "Payments are debited — decrease liability.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Payments" },
        },
        {
          id: "olacc-u6-cc-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Creditors control — extended review.",
          parts: [
            { label: "a", prompt: "Debit side items?", marks: 2 },
            { label: "b", prompt: "Credit side items?", marks: 1 },
            { label: "c", prompt: "OB $4,000 Cr, purchases $14,000, payments $10,000, returns $1,000. CB?", marks: 4 },
            { label: "d", prompt: "What does the closing balance represent?", marks: 1 },
            { label: "e", prompt: "How is it checked?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Creditors control", statement: "Items, balance, check." },
          ], steps: [
            { part: "a", reasoning: "Payments, purchases returns, closing balance.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "All listed.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Opening balance, credit purchases.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Cr $18000 vs Dr $11000 → CB $7000$ credit.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct totals.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct balance.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct side.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Total owed to suppliers.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Compare with list of balances.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) payments/returns/CB (b) OB+purchases (c) 7000Cr (d) owed to suppliers (e) vs list" },
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
            { id: "a", text: "Customer accounts" },
            { id: "b", text: "Cash book balances against general ledger" },
            { id: "c", text: "Supplier accounts" },
            { id: "d", text: "Stock valuation" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Cash book control", statement: "Checks cash book." }], steps: [{ reasoning: "Verifies cash/bank balances.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Cash book vs GL" },
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
        {
          id: "olacc-u6-cbc-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Cash book control account is used to verify…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Customer accounts only" },
            { id: "b", text: "Supplier accounts only" },
            { id: "c", text: "Cash and bank balances" },
            { id: "d", text: "Stock values" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Cash book control", statement: "Checks cash/bank." }], steps: [{ reasoning: "Verifies the cash position.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Cash and bank" },
        },
        {
          id: "olacc-u6-cbc-q6", difficulty: "core", totalMarks: 2,
          stem: "Cash book shows cash $1,200 Dr and bank $4,800 Dr. Enter the cash book control balance.",
          response: { type: "numeric", parts: [{ label: "Control balance ($)", answer: 6000 }] },
          markscheme: { principles: [{ kind: "principle", name: "CBC balance", statement: "Cash + bank." }], steps: [
            { reasoning: "$1200 + $4800 = $6000$ debit.", working: "1200+4800", marks: 1, markCode: "M" },
            { reasoning: "Control balance is $6,000 debit.", marks: 1, markCode: "A" },
          ], finalAnswer: "$6,000 debit" },
        },
        {
          id: "olacc-u6-cbc-q7", difficulty: "core", totalMarks: 2,
          stem: "Cash $500 Dr and bank overdraft $2,000. Enter the cash book control balance (debit positive).",
          response: { type: "numeric", parts: [{ label: "Balance ($)", answer: -1500 }] },
          markscheme: { principles: [{ kind: "principle", name: "CBC balance", statement: "Cash + bank, overdraft negative." }], steps: [
            { reasoning: "$500 - $2000 = -$1500$ (credit balance).", working: "500-2000", marks: 1, markCode: "M" },
            { reasoning: "Balance is $1,500 credit.", marks: 1, markCode: "A" },
          ], finalAnswer: "$1,500 credit" },
        },
        {
          id: "olacc-u6-cbc-q8", difficulty: "core", totalMarks: 1,
          stem: "Cash book control is needed because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "It replaces the trial balance" },
            { id: "b", text: "Bank charges require it" },
            { id: "c", text: "The cash book is kept separately from the general ledger" },
            { id: "d", text: "Customers require it" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "CBC purpose", statement: "Independent check." }], steps: [{ reasoning: "Separate record needs verification.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Kept separately" },
        },
        {
          id: "olacc-u6-cbc-q9", difficulty: "challenge", totalMarks: 2,
          stem: "Cash $900 Dr and bank $4,100 Dr. Enter (a) the control balance and (b) the control balance if the bank account were a $600 overdraft instead.",
          response: { type: "numeric", parts: [
            { label: "(a) Control balance ($)", answer: 5000 },
            { label: "(b) Control balance, overdraft ($)", answer: 300 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "CBC balance", statement: "Cash + bank." }], steps: [
            { reasoning: "$900 + $4100 = $5000$ debit.", working: "900+4100", marks: 1, markCode: "M" },
            { reasoning: "$900 - $600 = $300$ debit.", working: "900-600", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $5,000 Dr (b) $300 Dr" },
        },
        {
          id: "olacc-u6-cbc-q10", difficulty: "core", totalMarks: 2,
          stem: "Explain how the cash book control account works.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "method", name: "CBC method", statement: "Mirror totals." }], steps: [
            { reasoning: "Cash book receipts/payments are posted to the control account.", marks: 1, markCode: "M" },
            { reasoning: "Resulting balance should equal cash + bank balances.", marks: 1, markCode: "A" },
          ], finalAnswer: "Control account mirrors cash book; balance must equal cash + bank." },
        },
        {
          id: "olacc-u6-cbc-q11", difficulty: "challenge", totalMarks: 3,
          stem: "Cash book shows cash $1,500 Dr and bank $3,500 Dr. Enter (a) the control balance and (b) the control balance if $800 moves from bank to cash.",
          response: { type: "numeric", parts: [
            { label: "(a) Control balance ($)", answer: 5000 },
            { label: "(b) Control balance after transfer ($)", answer: 5000 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "CBC balance", statement: "Total cash position." }], steps: [
            { reasoning: "$1500 + $3500 = $5000$.", working: "1500+3500", marks: 1, markCode: "M" },
            { reasoning: "Transfer between cash and bank doesn't change total.", marks: 1, markCode: "M" },
            { reasoning: "Both answers correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $5,000 (b) $5,000" },
        },
        {
          id: "olacc-u6-cbc-q12", difficulty: "challenge", totalMarks: 1,
          stem: "If the bank account is overdrawn, cash book control may show…",
          response: { type: "mcq", choices: [
            { id: "a", text: "No balance" },
            { id: "b", text: "Always a debit balance" },
            { id: "c", text: "A credit balance" },
            { id: "d", text: "A nil balance" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "CBC balance", statement: "Overdraft effect." }], steps: [{ reasoning: "Overdraft is a liability — credit.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Credit balance" },
        },
        {
          id: "olacc-u6-cbc-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the purpose of the cash book control account.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "CBC purpose", statement: "Verification." }], steps: [
            { reasoning: "Cash book is kept separately from other ledgers.", marks: 1, markCode: "M" },
            { reasoning: "Control account checks all cash transactions are recorded.", marks: 1, markCode: "M" },
            { reasoning: "Verifies total cash and bank position.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Provides an independent check on cash and bank records." },
        },
        {
          id: "olacc-u6-cbc-q14", difficulty: "core", totalMarks: 2,
          stem: "Cash $900 Dr, bank $2,600 Dr. Enter the cash book control balance.",
          response: { type: "numeric", parts: [{ label: "Control balance ($)", answer: 3500 }] },
          markscheme: { principles: [{ kind: "principle", name: "CBC balance", statement: "Cash + bank." }], steps: [
            { reasoning: "$900 + $2600 = $3500$ debit.", working: "900+2600", marks: 1, markCode: "M" },
            { reasoning: "Control balance is $3,500 debit.", marks: 1, markCode: "A" },
          ], finalAnswer: "$3,500 debit" },
        },
        {
          id: "olacc-u6-cbc-q15", difficulty: "foundation", totalMarks: 1,
          stem: "Cash book control account checks the cash book against…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The sales ledger only" },
            { id: "b", text: "The general ledger" },
            { id: "c", text: "The purchases ledger only" },
            { id: "d", text: "The bank statement only" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "CBC", statement: "vs general ledger." }], steps: [{ reasoning: "Control account sits in the GL.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** General ledger" },
        },
        {
          id: "olacc-u6-cbc-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Cash book control — extended review.",
          parts: [
            { label: "a", prompt: "What does CBC check?", marks: 1 },
            { label: "b", prompt: "Normal balance?", marks: 1 },
            { label: "c", prompt: "Cash $2,000 Dr, bank $8,000 Dr. Control balance?", marks: 3 },
            { label: "d", prompt: "Bank overdraft effect?", marks: 2 },
            { label: "e", prompt: "Why is it needed?", marks: 1 },
            { label: "f", prompt: "What does a difference indicate?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Cash book control", statement: "Purpose and balance." },
          ], steps: [
            { part: "a", reasoning: "Cash/bank balances vs GL.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Debit (asset).", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$10000$.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct method.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Reduces asset / may create credit balance.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct effect.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Independent check on cash records.", marks: 1, markCode: "A" },
            { part: "f", reasoning: "An error exists.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) checks cash (b) Dr (c) 10000Dr (d) credit bal (e) verification (f) error" },
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
