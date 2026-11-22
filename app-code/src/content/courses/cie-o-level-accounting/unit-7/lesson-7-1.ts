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
            { id: "a", text: "Cheques received but not paid" },
            { id: "b", text: "Bank charges" },
            { id: "c", text: "Direct debits" },
            { id: "d", text: "Cheques paid but not yet on bank statement" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Unpresented cheques", statement: "Timing difference." }], steps: [{ reasoning: "Paid in CB, not yet on statement.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Correct" },
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
        {
          id: "olacc-u7-br-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Uncredited deposits require which adjustment to the bank statement balance?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Deduct it from the cash book" },
            { id: "b", text: "Deduct the amount" },
            { id: "c", text: "No adjustment is needed" },
            { id: "d", text: "Add the amount" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Uncredited deposits", statement: "In cash book, not yet on statement — add to bank statement balance." }], steps: [{ reasoning: "Deposits not yet credited by the bank are added.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Add the amount" },
        },
        {
          id: "olacc-u7-br-q6", difficulty: "core", totalMarks: 2,
          stem: "Bank statement balance is $7,200 Cr. There are unpresented cheques of $450, uncredited deposits of $260 and bank charges of $70. Enter the reconciled cash book balance.",
          response: { type: "numeric", parts: [{ label: "Reconciled cash book balance ($)", answer: 6940 }] },
          markscheme: { principles: [{ kind: "principle", name: "Reconciliation", statement: "Adjust bank statement balance for reconciling items." }], steps: [
            { reasoning: "$7200 - $450 + $260 - $70.", working: "7200-450+260-70", marks: 1, markCode: "M" },
            { reasoning: "Reconciled balance $6,940.", marks: 1, markCode: "A" },
          ], finalAnswer: "$6,940" },
        },
        {
          id: "olacc-u7-br-q7", difficulty: "core", totalMarks: 2,
          stem: "Bank statement shows $1,800 Cr. Unpresented cheques $240, uncredited deposits $130, bank charges $25. Reconcile the accounts.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Reconciliation", statement: "Adjust statement to cash book." }], steps: [
            { reasoning: "$1800 - $240 + $130 - $25 = $1,665.", marks: 1, markCode: "M" },
            { reasoning: "Correct items and answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "$1,665" },
        },
        {
          id: "olacc-u7-br-q8", difficulty: "core", totalMarks: 2,
          stem: "Bank statement balance $9,000 Cr; uncredited deposits $500; unpresented cheques $750; interest received by the bank $120 not yet recorded in the cash book. Enter the reconciled cash book balance.",
          response: { type: "numeric", parts: [{ label: "Reconciled cash book balance ($)", answer: 8870 }] },
          markscheme: { principles: [{ kind: "principle", name: "Reconciliation", statement: "All timing items including interest." }], steps: [
            { reasoning: "$9000 + $500 - $750 + $120.", working: "9000+500-750+120", marks: 1, markCode: "M" },
            { reasoning: "Reconciled balance $8,870.", marks: 1, markCode: "A" },
          ], finalAnswer: "$8,870" },
        },
        {
          id: "olacc-u7-br-q9", difficulty: "foundation", totalMarks: 1,
          stem: "Bank charges first appear in which record?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The cash book" },
            { id: "b", text: "The trial balance" },
            { id: "c", text: "The bank statement" },
            { id: "d", text: "The sales day book" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Bank charges", statement: "Deducted by the bank — appear on the bank statement first." }], steps: [{ reasoning: "Bank deducts charges, shown on statement.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** The bank statement" },
        },
        {
          id: "olacc-u7-br-q10", difficulty: "core", totalMarks: 3,
          stem: "A cheque for $300 was paid in the cash book but the bank later returned it unpaid. Explain the effect on the bank reconciliation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Unpaid cheque", statement: "No longer a timing difference — it is an error." }], steps: [
            { reasoning: "Remove $300 from unpresented cheques.", marks: 1, markCode: "M" },
            { reasoning: "Cash book must be corrected: Dr Bank $300.", marks: 1, markCode: "M" },
            { reasoning: "Re-reconcile — balances should now agree.", marks: 1, markCode: "A" },
          ], finalAnswer: "Delete the $300 from unpresented cheques and correct the cash book (Dr Bank $300), then re-reconcile." },
        },
        {
          id: "olacc-u7-br-q11", difficulty: "challenge", totalMarks: 3,
          stem: "Bank statement balance $6,000 Cr; unpresented cheques $350; uncredited deposits $420; bank charges $85; interest received $40. Enter the reconciled cash book balance.",
          response: { type: "numeric", parts: [{ label: "Reconciled cash book balance ($)", answer: 6025 }] },
          markscheme: { principles: [{ kind: "principle", name: "Reconciliation", statement: "All reconciling items." }], steps: [
            { reasoning: "Correct items: $6000 - $350 + $420 - $85 + $40.", working: "6000-350+420-85+40", marks: 1, markCode: "M" },
            { reasoning: "All items included correctly.", marks: 1, markCode: "M" },
            { reasoning: "Reconciled balance $6,025.", marks: 1, markCode: "A" },
          ], finalAnswer: "$6,025" },
        },
        {
          id: "olacc-u7-br-q12", difficulty: "challenge", totalMarks: 4,
          stem: "After full reconciliation the adjusted balance is $5,200 but the cash book shows $5,150. Explain what this means and what should be done.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Remaining difference", statement: "Must be an error." }], steps: [
            { reasoning: "A $50 difference remains after all timing items.", marks: 1, markCode: "M" },
            { reasoning: "This indicates an error in the cash book or bank statement.", marks: 1, markCode: "M" },
            { reasoning: "Compare individual transactions to locate the $50 error.", marks: 1, markCode: "M" },
            { reasoning: "Correct the error and re-reconcile.", marks: 1, markCode: "A" },
          ], finalAnswer: "An error of $50 exists; locate it by comparing transactions, correct it, and re-reconcile." },
        },
        {
          id: "olacc-u7-br-q13", difficulty: "core", totalMarks: 1,
          stem: "Before any adjustment, an uncredited deposit causes the bank statement balance to be…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Correct" },
            { id: "b", text: "Too low" },
            { id: "c", text: "Unrelated to deposits" },
            { id: "d", text: "Too high" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Uncredited deposits", statement: "Missing from statement → statement balance understated." }], steps: [{ reasoning: "Deposit in cash book but not credited by bank.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Too low" },
        },
        {
          id: "olacc-u7-br-q14", difficulty: "challenge", totalMarks: 4,
          stem: "The bank statement shows an overdraft of $2,000 Dr. Unpresented cheques are $300, uncredited deposits $150 and bank charges $40. Prepare the reconciliation and state the adjusted balance.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Reconciliation", statement: "Overdraft treated as negative balance." }], steps: [
            { reasoning: "Start with $2000 Dr (overdraft).", marks: 1, markCode: "M" },
            { reasoning: "$2000 + $300 - $150 + $40 = $2,190 Dr.", working: "2000+300-150+40", marks: 1, markCode: "M" },
            { reasoning: "Correct direction of adjustments.", marks: 1, markCode: "M" },
            { reasoning: "Adjusted overdraft $2,190 Dr.", marks: 1, markCode: "A" },
          ], finalAnswer: "Adjusted balance: $2,190 Dr (overdraft)." },
        },
        {
          id: "olacc-u7-br-q15", difficulty: "challenge", totalMarks: 3,
          stem: "Bank statement balance $11,000 Cr; unpresented cheques $620; uncredited deposits $480; bank charges $95; interest received $60. Enter the reconciled cash book balance.",
          response: { type: "numeric", parts: [{ label: "Reconciled cash book balance ($)", answer: 10825 }] },
          markscheme: { principles: [{ kind: "principle", name: "Reconciliation", statement: "All reconciling items." }], steps: [
            { reasoning: "$11000 - $620 + $480 - $95 + $60.", working: "11000-620+480-95+60", marks: 1, markCode: "M" },
            { reasoning: "Correct items and signs.", marks: 1, markCode: "M" },
            { reasoning: "Reconciled balance $10,825.", marks: 1, markCode: "A" },
          ], finalAnswer: "$10,825" },
        },
        {
          id: "olacc-u7-br-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Bank reconciliation — full review.",
          parts: [
            { label: "a", prompt: "Define unpresented cheques.", marks: 1 },
            { label: "b", prompt: "Define uncredited deposits.", marks: 1 },
            { label: "c", prompt: "BS $5,500 Cr, UPC $300, UCD $250, charges $45. Reconciled balance?", marks: 3 },
            { label: "d", prompt: "Why are bank charges deducted in the reconciliation?", marks: 2 },
            { label: "e", prompt: "Why is a reconciliation prepared?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Bank reconciliation", statement: "Items, calculation and purpose." },
          ], steps: [
            { part: "a", reasoning: "Paid in cash book, not yet on bank statement.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Deposited in cash book, not yet credited by bank.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$5500 - $300 + $250 - $45 = $5,405.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct items.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct answer.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Charges reduced bank balance but are not in cash book.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct explanation.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "To verify the cash book balance.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Identify errors and timing differences.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) pending cheques (b) pending deposits (c) 5405 (d) charges not in cash book (e) verify cash book" },
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
            { id: "a", text: "Bank charges" },
            { id: "b", text: "Normal" },
            { id: "c", text: "An error" },
            { id: "d", text: "A timing item" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Remaining diff", statement: "= error." }], steps: [{ reasoning: "Only errors remain.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** An error" },
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
        {
          id: "olacc-u7-be-q5", difficulty: "foundation", totalMarks: 1,
          stem: "An error in the business's own cash book is corrected by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The auditor" },
            { id: "b", text: "The business" },
            { id: "c", text: "The customer" },
            { id: "d", text: "The bank" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Correction", statement: "Business fixes its own records." }], steps: [{ reasoning: "Cash book is the business's record.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** The business" },
        },
        {
          id: "olacc-u7-be-q6", difficulty: "core", totalMarks: 2,
          stem: "A payment of $250 was entered in the cash book as $25. Enter the amount by which the cash book bank balance is overstated.",
          response: { type: "numeric", parts: [{ label: "Overstatement ($)", answer: 225 }] },
          markscheme: { principles: [{ kind: "principle", name: "Error effect", statement: "Payment understated → bank balance overstated." }], steps: [
            { reasoning: "$250 - $25 = $225.", working: "250-25", marks: 1, markCode: "M" },
            { reasoning: "Cash book balance overstated by $225.", marks: 1, markCode: "A" },
          ], finalAnswer: "$225" },
        },
        {
          id: "olacc-u7-be-q7", difficulty: "core", totalMarks: 2,
          stem: "A $400 payment was wrongly entered on the receipts side of the cash book instead of the payments side. What is the effect on the cash book bank balance?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Wrong side", statement: "Payment recorded as receipt doubles the error." }], steps: [
            { reasoning: "Should reduce bank by $400 but instead increases it by $400.", marks: 1, markCode: "M" },
            { reasoning: "Cash book balance overstated by $800.", marks: 1, markCode: "A" },
          ], finalAnswer: "Overstated by $800." },
        },
        {
          id: "olacc-u7-be-q8", difficulty: "core", totalMarks: 2,
          stem: "A cheque for $180 was entered twice in the cash book. Enter the amount of the correcting entry needed.",
          response: { type: "numeric", parts: [{ label: "Correcting entry amount ($)", answer: 180 }] },
          markscheme: { principles: [{ kind: "principle", name: "Duplicate entry", statement: "Reverse the duplicate." }], steps: [
            { reasoning: "Duplicate payment of $180 → reverse $180.", working: "180", marks: 1, markCode: "M" },
            { reasoning: "Dr Bank $180; Cr the paid account $180.", marks: 1, markCode: "A" },
          ], finalAnswer: "$180" },
        },
        {
          id: "olacc-u7-be-q9", difficulty: "foundation", totalMarks: 1,
          stem: "Errors made by the bank itself are corrected by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Ignoring them" },
            { id: "b", text: "Recording them as drawings" },
            { id: "c", text: "Notifying the bank" },
            { id: "d", text: "Amending the cash book only" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Bank errors", statement: "Reported to the bank for correction." }], steps: [{ reasoning: "Bank corrects its own records.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Notifying the bank" },
        },
        {
          id: "olacc-u7-be-q10", difficulty: "core", totalMarks: 3,
          stem: "A $75 difference remains after adjusting the bank statement for all timing items. Describe how the error could be located.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Locating errors", statement: "Compare transactions." }], steps: [
            { reasoning: "Compare each cash book entry with the bank statement items.", marks: 1, markCode: "M" },
            { reasoning: "Look for amounts, dates or sides that differ.", marks: 1, markCode: "M" },
            { reasoning: "The transaction(s) explaining $75 is the error.", marks: 1, markCode: "A" },
          ], finalAnswer: "Compare cash book and bank statement transactions to find the $75 discrepancy." },
        },
        {
          id: "olacc-u7-be-q11", difficulty: "challenge", totalMarks: 3,
          stem: "A $1,000 deposit was recorded as $100, and a $30 payment was recorded as $60. Enter the total amount by which the cash book bank balance is misstated.",
          response: { type: "numeric", parts: [{ label: "Total misstatement ($)", answer: 930 }] },
          markscheme: { principles: [{ kind: "principle", name: "Multiple errors", statement: "Combine the effects." }], steps: [
            { reasoning: "Deposit understated by $900 and payment overstated by $30, both reducing the bank balance.", working: "900+30", marks: 1, markCode: "M" },
            { reasoning: "Total understatement $930.", marks: 1, markCode: "M" },
            { reasoning: "Total $930.", marks: 1, markCode: "A" },
          ], finalAnswer: "$930" },
        },
        {
          id: "olacc-u7-be-q12", difficulty: "challenge", totalMarks: 4,
          stem: "A cash purchase of $500 was wrongly recorded in the cash book as a payment of $50. Give the correcting journal entry and state the effect on the cash book balance.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Correction entry", statement: "Fix the difference." }], steps: [
            { reasoning: "Payment understated by $450 → bank balance overstated by $450.", marks: 1, markCode: "M" },
            { reasoning: "Dr Purchases/Expenses $450.", marks: 1, markCode: "M" },
            { reasoning: "Cr Bank $450.", marks: 1, markCode: "M" },
            { reasoning: "Cash book balance corrected downward by $450.", marks: 1, markCode: "A" },
          ], finalAnswer: "Dr Purchases $450; Cr Bank $450 — cash book balance reduced by $450." },
        },
        {
          id: "olacc-u7-be-q13", difficulty: "core", totalMarks: 1,
          stem: "An entry recorded on the wrong side of the cash book affects the balance by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Half the amount" },
            { id: "b", text: "Twice the amount" },
            { id: "c", text: "Nothing" },
            { id: "d", text: "The same amount only" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Wrong side", statement: "Reverses the effect." }], steps: [{ reasoning: "$400 payment as receipt: +400 instead of -400 → error of $800.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Twice the amount" },
        },
        {
          id: "olacc-u7-be-q14", difficulty: "challenge", totalMarks: 4,
          stem: "The bank statement shows a deposit of $600 but the business only deposited $500. Explain how this error is handled.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Bank error", statement: "Notify bank; check cash book." }], steps: [
            { reasoning: "This is a bank error — the bank credited $100 too much.", marks: 1, markCode: "M" },
            { reasoning: "Notify the bank in writing to correct the statement.", marks: 1, markCode: "M" },
            { reasoning: "Check the cash book shows only $500 deposited.", marks: 1, markCode: "M" },
            { reasoning: "Re-reconcile once the bank corrects it.", marks: 1, markCode: "A" },
          ], finalAnswer: "Report the $100 bank error to the bank, verify the cash book, then re-reconcile." },
        },
        {
          id: "olacc-u7-be-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A deposit of $640 was recorded in the cash book as $460. Enter the amount by which the cash book bank balance is understated.",
          response: { type: "numeric", parts: [{ label: "Understatement ($)", answer: 180 }] },
          markscheme: { principles: [{ kind: "principle", name: "Error effect", statement: "Deposit understated → balance understated." }], steps: [
            { reasoning: "$640 - $460 = $180.", working: "640-460", marks: 1, markCode: "M" },
            { reasoning: "Direction: balance too low.", marks: 1, markCode: "M" },
            { reasoning: "Understated by $180.", marks: 1, markCode: "A" },
          ], finalAnswer: "$180" },
        },
        {
          id: "olacc-u7-be-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Bank reconciliation errors — full review.",
          parts: [
            { label: "a", prompt: "What does a remaining difference after reconciliation indicate?", marks: 1 },
            { label: "b", prompt: "Who corrects a cash book error?", marks: 1 },
            { label: "c", prompt: "Who corrects a bank error?", marks: 1 },
            { label: "d", prompt: "$300 payment recorded as $30. By how much is the cash book balance misstated?", marks: 2 },
            { label: "e", prompt: "Give the correcting entry for (d).", marks: 2 },
            { label: "f", prompt: "Why must the reconciliation be updated after correction?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Bank rec errors", statement: "Detection and correction." },
          ], steps: [
            { part: "a", reasoning: "An error exists.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "The business.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "The bank (after notification).", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Understated by $270.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct amount.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Dr Expense $270, Cr Bank $270.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Correct entry.", marks: 1, markCode: "A" },
            { part: "f", reasoning: "To confirm balances now agree.", marks: 1, markCode: "M" },
            { part: "f", reasoning: "Clear reason.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) error (b) business (c) bank (d) 270 understated (e) Dr270/Cr270 (f) confirm agreement" },
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
