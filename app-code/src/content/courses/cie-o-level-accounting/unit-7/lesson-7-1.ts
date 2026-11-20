import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "olacc-u7-lesson-7-1",
  code: "7-1",
  title: "Bank Reconciliation Statements",
  goal: "I CAN prepare a bank reconciliation statement from cash book and bank statement balances.",
  standards: ["7706 7.1"],
  vocabulary: [
    { term: "Bank reconciliation", definition: "Statement reconciling cash book balance to bank statement balance." },
    { term: "Unpresented cheques", definition: "Cheques paid in cash book but not yet deducted by bank." },
    { term: "Uncredited deposits", definition: "Deposits in cash book but not yet on bank statement." },
    { term: "Bank charges", definition: "Fees deducted by bank not yet in cash book." },
    { term: "Bank errors", definition: "Mistakes made by the bank." },
    { term: "Cash book errors", definition: "Mistakes in the business's own records." },
  ],
  concepts: [
    {
      id: "olacc-u7-brec",
      title: "Preparing a bank reconciliation",
      skill: "Adjust bank statement balance to cash book balance using reconciling items.",
      lesson: {
        sections: [
          { heading: "Why reconcile?", body: "The cash book balance and bank statement balance rarely agree because of timing differences and errors. A bank reconciliation explains the difference." },
          { heading: "Reconciling items", body: "- **Unpresented cheques**: paid in cash book, not yet on statement → deduct from bank statement balance (or add to cash book? They're already deducted in cash book, so bank statement is higher → deduct).\n- **Uncredited deposits**: in cash book, not yet on statement → add to bank statement balance.\n- **Bank charges/interest**: on statement, not in cash book → deduct/add accordingly.\n- **Errors**: correct whichever side is wrong." },
          { heading: "Method", body: "Start with bank statement balance, adjust for items not in cash book → arrive at adjusted cash book balance. Then compare with cash book balance; any remaining difference is an error." },
        ],
        keyFormulas: [
          { name: "Reconciliation", statement: "Bank statement balance ± reconciling items = cash book balance" },
        ],
        workedExample: {
          problem: "Bank statement shows $4,000 Cr. Unpresented cheques $600, uncredited deposits $300, bank charges $50 (not in cash book). Find reconciled cash book balance.",
          solution: "4000 - 600 + 300 - 50 = $3,650. This should equal cash book balance (plus/minus errors).",
        },
      },
      questions: [
        {
          id: "olacc-u7-br-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Unpresented cheques are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cheques paid but not yet on bank statement" }, { id: "b", text: "Cheques received but not paid" }, { id: "c", text: "Bank charges" }, { id: "d", text: "Direct debits" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Unpresented cheques", statement: "Timing difference." }], steps: [{ reasoning: "Paid in CB, not yet on statement.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olacc-u7-br-q2", difficulty: "core", totalMarks: 2,
          stem: "Bank statement $5000 Cr, unpresented cheques $400, uncredited deposits $200. Reconciled balance?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Reconciliation", statement: "Adjust statement." }], steps: [
            { reasoning: "$5000 - $400 + $200 = $4800.", marks: 1, markCode: "M" },
            { reasoning: "Correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "$4,800" },
        },
        {
          id: "olacc-u7-br-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Bank statement $3000 Dr, unpresented cheques $250, uncredited deposits $150, bank charges $30. Reconciled balance?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Reconciliation", statement: "All adjustments." }], steps: [
            { reasoning: "$3000 - $250 + $150 - $30 = $2870.", marks: 1, markCode: "M" },
            { reasoning: "Correct items.", marks: 1, markCode: "M" },
            { reasoning: "Correct calculation.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "$2,870" },
        },
        {
          id: "olacc-u7-br-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Bank reconciliation review.",
          parts: [
            { label: "a", prompt: "Define unpresented cheques.", marks: 1 },
            { label: "b", prompt: "Define uncredited deposits.", marks: 1 },
            { label: "c", prompt: "BS $6000 Cr, UPC $500, UCD $400, charges $50. Reconciled?", marks: 3 },
            { label: "d", prompt: "What if balances still differ?", marks: 2 },
            { label: "e", prompt: "Why prepare reconciliation?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Bank reconciliation", statement: "Items, calculation, purpose." },
          ], steps: [
            { part: "a", reasoning: "Paid in CB, not yet on statement.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Deposited in CB, not yet on statement.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$6000 - $500 + $400 - $50 = $5850.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct items.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct answer.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Error in cash book or bank statement.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Must be corrected.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Verify cash book accuracy.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Identify errors/timing.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) cheques pending (b) deposits pending (c) 5850 (d) error exists (e) verify records" },
        },
      ],
    },
    {
      id: "olacc-u7-brec-errors",
      title: "Errors in bank reconciliation",
      skill: "Identify and correct errors found during bank reconciliation.",
      lesson: {
        sections: [
          { heading: "Types of errors", body: "- Cash book errors: wrong amount, wrong side, omitted entry.\n- Bank errors: wrong amount credited/debited, omitted transaction." },
          { heading: "Detection", body: "After adjusting for timing differences, any remaining difference must be an error. Compare individual transactions to locate it." },
          { heading: "Correction", body: "Correct the cash book (or notify bank) with a journal entry. Update the reconciliation once corrected." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Reconciliation shows $100 difference. You find a $100 cheque was entered twice in cash book. Fix?",
          solution: "Dr Bank $100 (reverse duplicate payment), then re-reconcile — balances should agree.",
        },
      },
      questions: [
        {
          id: "olacc-u7-be-q1", difficulty: "foundation", totalMarks: 1,
          stem: "After adjusting for timing differences, a remaining difference is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "An error" }, { id: "b", text: "Normal" }, { id: "c", text: "A timing item" }, { id: "d", text: "Bank charges" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Remaining diff", statement: "= error." }], steps: [{ reasoning: "Only errors remain.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** An error" },
        },
        {
          id: "olacc-u7-be-q2", difficulty: "core", totalMarks: 2,
          stem: "Who corrects a cash book error found in reconciliation?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Correction", statement: "Business fixes own records." }], steps: [
            { reasoning: "The business corrects its cash book.", marks: 1, markCode: "M" },
            { reasoning: "Bank errors → notify bank.", marks: 1, markCode: "A" },
          ], finalAnswer: "The business corrects the cash book; bank errors are reported to the bank." },
        },
        {
          id: "olacc-u7-be-q3", difficulty: "challenge", totalMarks: 4,
          stem: "A $75 payment was entered as $57 in cash book. Cash book balance is understated by $18. Correcting entry?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Correction", statement: "Fix difference." }], steps: [
            { reasoning: "Payment understated → cash book balance too high by $18? Payment was $75 but recorded $57 → expense understated $18, bank balance overstated $18.", marks: 1, markCode: "M" },
            { reasoning: "Dr Expense $18, Cr Bank $18.", marks: 1, markCode: "M" },
            { reasoning: "Correct reasoning.", marks: 1, markCode: "M" },
            { reasoning: "Correct entry.", marks: 1, markCode: "A" },
          ], finalAnswer: "Dr Expense $18; Cr Bank $18." },
        },
        {
          id: "olacc-u7-be-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Bank reconciliation errors review.",
          parts: [
            { label: "a", prompt: "What does remaining difference mean?", marks: 1 },
            { label: "b", prompt: "Who fixes cash book errors?", marks: 1 },
            { label: "c", prompt: "Who fixes bank errors?", marks: 1 },
            { label: "d", prompt: "$100 deposit entered as $10. CB balance?", marks: 2 },
            { label: "e", prompt: "Correcting entry for (d)?", marks: 2 },
            { label: "f", prompt: "Why update reconciliation after correction?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Bank rec errors", statement: "Detection and correction." },
          ], steps: [
            { part: "a", reasoning: "Error exists.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "The business.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "The bank (notify).", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Overstated by $90.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Dr Bank $90, Cr Sales/Debtor $90.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "f", reasoning: "Confirm balances now agree.", marks: 1, markCode: "M" },
            { part: "f", reasoning: "Clear reason.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) error (b) business (c) bank (d) +90 overstated (e) Dr90/Cr90 (f) confirm agreement" },
        },
      ],
    },
  ],
  notes: [
    { id: "olacc-u7-7-1-notes", title: "Bank reconciliation — notes", summary: "Timing differences and error correction.",
      sections: [
        { heading: "Items", body: "Unpresented cheques ↓, uncredited deposits ↑, bank charges ↓ from bank statement balance." },
        { heading: "Errors", body: "Remaining difference = error; business corrects cash book, bank errors reported to bank." },
      ] },
  ],
};
