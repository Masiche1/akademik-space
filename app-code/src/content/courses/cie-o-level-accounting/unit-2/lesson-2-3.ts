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
            { id: "a", text: "Write the income statement" },
            { id: "b", text: "Balance all ledger accounts" },
            { id: "c", text: "Close the accounts" },
            { id: "d", text: "Issue invoices" },
          ], correctChoiceId: "b" },
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
        {
          id: "olacc-u2-tp-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The first step in preparing a trial balance is to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Write the income statement" },
            { id: "b", text: "Close the nominal accounts" },
            { id: "c", text: "Prepare the balance sheet" },
            { id: "d", text: "Balance every ledger account" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "TB steps", statement: "Balance accounts first." }], steps: [{ reasoning: "Ledger accounts must be balanced before their balances can be listed.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Balance every ledger account" },
        },
        {
          id: "olacc-u2-tp-q6", difficulty: "core", totalMarks: 1,
          stem: "An account shows total debits of $900 and total credits of $700. Its balance is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Nil" },
            { id: "b", text: "$200 debit" },
            { id: "c", text: "$1,600 debit" },
            { id: "d", text: "$200 credit" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Balance", statement: "Larger minus smaller." }], steps: [{ reasoning: "$900 - $700 = $200, and debits are larger so it is a debit balance.", marks: 1, markCode: "M" }], finalAnswer: "**(a)** $200 debit" },
        },
        {
          id: "olacc-u2-tp-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Ledger balances to be extracted: cash Dr $3,000, sales Cr $8,000, rent Dr $500, capital Cr $2,500. Enter (a) the total debit balances, (b) the total credit balances.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 3500 }, { label: "(b)", answer: 10500 }] },
          markscheme: { principles: [{ kind: "principle", name: "TB extraction", statement: "Group by balance side." }], steps: [
            { reasoning: "Debits: $3,000 + $500 = $3,500.", marks: 1, markCode: "M" },
            { reasoning: "Credits: $8,000 + $2,500 = $10,500.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $3,500 (b) $10,500" },
        },
        {
          id: "olacc-u2-tp-q8", difficulty: "core", totalMarks: 2,
          stem: "List the steps used to prepare a trial balance.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "TB steps", statement: "Balance, list, total." }], steps: [
            { reasoning: "Balance each ledger account and note the side of each balance.", marks: 1, markCode: "M" },
            { reasoning: "List debit balances in the debit column, credit balances in the credit column, then total and check agreement.", marks: 1, markCode: "A" },
          ], finalAnswer: "Balance accounts → list Dr/Cr balances in columns → total and verify agreement." },
        },
        {
          id: "olacc-u2-tp-q9", difficulty: "core", totalMarks: 1,
          stem: "The trial balance totals do not agree. The first action should be to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Ignore it if small" },
            { id: "b", text: "Rewrite all ledgers" },
            { id: "c", text: "Post the difference to suspense immediately" },
            { id: "d", text: "Check the ledger postings and workings for the error" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "TB discrepancy", statement: "Investigate first." }], steps: [{ reasoning: "The error should be found first; suspense is only a temporary measure.", marks: 1, markCode: "M" }], finalAnswer: "**(b)** Check postings and workings" },
        },
        {
          id: "olacc-u2-tp-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how a transposition error affects the trial balance and how it might be detected.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Transposition", statement: "Digits swapped." }], steps: [
            { reasoning: "A transposition swaps two digits, e.g. $540 written as $450.", marks: 1, markCode: "M" },
            { reasoning: "The error creates a difference of nine times the place value ($90 here).", marks: 1, markCode: "M" },
            { reasoning: "Dividing the TB difference by 9 can reveal a transposition.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Swapped digits create a discrepancy often divisible by 9 — a clue to the error." },
        },
        {
          id: "olacc-u2-tp-q11", difficulty: "core", totalMarks: 2,
          stem: "Account X has debits of $1,500 and credits of $1,200; Account Y has debits of $800 and credits of $950. Enter (a) the balance of X, (b) the balance of Y.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 300 }, { label: "(b)", answer: 150 }] },
          markscheme: { principles: [{ kind: "principle", name: "Balance", statement: "Larger minus smaller." }], steps: [
            { reasoning: "$1,500 - $1,200 = $300 debit balance on X.", marks: 1, markCode: "M" },
            { reasoning: "$950 - $800 = $150 credit balance on Y.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $300 debit (b) $150 credit" },
        },
        {
          id: "olacc-u2-tp-q12", difficulty: "core", totalMarks: 2,
          stem: "What is meant by 'balance extraction'?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Balance extraction", statement: "Taking ledger balances." }], steps: [
            { reasoning: "It is the process of taking each ledger account's balance after balancing.", marks: 1, markCode: "M" },
            { reasoning: "The extracted balances are then listed in the trial balance columns.", marks: 1, markCode: "A" },
          ], finalAnswer: "Taking the final balance of each ledger account to list in the trial balance." },
        },
        {
          id: "olacc-u2-tp-q13", difficulty: "foundation", totalMarks: 1,
          stem: "Which accounts normally show credit balances in a trial balance?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Purchases and wages" },
            { id: "b", text: "Capital, sales and liabilities" },
            { id: "c", text: "Cash and expenses" },
            { id: "d", text: "Stock and debtors" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "TB columns", statement: "Capital/income/liabilities credit." }], steps: [{ reasoning: "Capital, income and liabilities are credit-balance items.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Capital, sales and liabilities" },
        },
        {
          id: "olacc-u2-tp-q14", difficulty: "challenge", totalMarks: 4,
          stem: "A trial balance disagrees by $200. Explain the use of a suspense account while the error is investigated.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Suspense", statement: "Temporary account." }], steps: [
            { reasoning: "Post the $200 difference to a suspense account to make the TB agree.", marks: 1, markCode: "M" },
            { reasoning: "This allows the financial statements to be prepared meanwhile.", marks: 1, markCode: "M" },
            { reasoning: "The ledgers and workings are checked to locate the error.", marks: 1, markCode: "M" },
            { reasoning: "Once corrected, the suspense balance is cleared.", marks: 1, markCode: "A" },
          ], finalAnswer: "Suspense temporarily holds the $200 difference so the TB agrees, pending finding and correcting the error." },
        },
        {
          id: "olacc-u2-tp-q15", difficulty: "challenge", totalMarks: 3,
          stem: "Debit balances: cash $4,500, bank $2,200, stock $1,800, debtors $3,200. Credit balances: capital $5,000, loan $3,000, creditors $1,500, sales $2,200. Enter (a) total debits, (b) total credits, (c) the difference.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 11700 }, { label: "(b)", answer: 11700 }, { label: "(c)", answer: 0 }] },
          markscheme: { principles: [{ kind: "principle", name: "TB totals", statement: "Sum each column." }], steps: [
            { reasoning: "Debits: $4,500 + $2,200 + $1,800 + $3,200 = $11,700.", marks: 1, markCode: "M" },
            { reasoning: "Credits: $5,000 + $3,000 + $1,500 + $2,200 = $11,700.", marks: 1, markCode: "M" },
            { reasoning: "Columns agree — no difference.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $11,700 (b) $11,700 (c) $0" },
        },
        {
          id: "olacc-u2-tp-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Trial balance practice review.",
          parts: [
            { label: "a", prompt: "List the steps to prepare a trial balance.", marks: 3 },
            { label: "b", prompt: "An account has equal debits and credits. Its balance?", marks: 1 },
            { label: "c", prompt: "Name two types of account with debit balances.", marks: 2 },
            { label: "d", prompt: "The TB disagrees by $300. What should be done?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "TB practice", statement: "Steps, balances, discrepancy." },
          ], steps: [
            { part: "a", reasoning: "Balance each ledger account.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "List Dr/Cr balances in columns.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Total and check agreement.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Nil balance.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Assets and expenses.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Two named.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Find the error first.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Use suspense pending investigation.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct via journal and clear suspense.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) balance+list+total (b) nil (c) assets+expenses (d) find+suspense+correct" },
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
            { id: "a", text: "New invoices only" },
            { id: "b", text: "Journal entries" },
            { id: "c", text: "Erasing entries" },
            { id: "d", text: "Trial balance only" },
          ], correctChoiceId: "b" },
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
        {
          id: "olacc-u2-ce-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Bookkeeping errors are corrected through…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A new invoice only" },
            { id: "b", text: "Erasing the wrong entry" },
            { id: "c", text: "Journal entries" },
            { id: "d", text: "Ignoring small errors" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Correction", statement: "Journal entries." }], steps: [{ reasoning: "Corrections are made by journal debit/credit entries.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Journal entries" },
        },
        {
          id: "olacc-u2-ce-q6", difficulty: "core", totalMarks: 1,
          stem: "A $100 expense was posted to the wrong expense account. The correcting journal entry is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Dr both accounts $100" },
            { id: "b", text: "Dr wrong account $100, Cr correct account $100" },
            { id: "c", text: "Dr correct account $100, Cr wrong account $100" },
            { id: "d", text: "No entry needed" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Correction", statement: "Dr correct, Cr wrong." }], steps: [{ reasoning: "The correct account is debited and the wrongly used account credited.", marks: 1, markCode: "M" }], finalAnswer: "**(b)** Dr correct, Cr wrong" },
        },
        {
          id: "olacc-u2-ce-q7", difficulty: "core", totalMarks: 2,
          stem: "An expense of $250 was posted as $25. Enter (a) the difference that must be corrected, (b) the correct expense amount.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 225 }, { label: "(b)", answer: 250 }] },
          markscheme: { principles: [{ kind: "principle", name: "Wrong amount", statement: "Adjust the difference." }], steps: [
            { reasoning: "$250 - $25 = $225 to be added.", marks: 1, markCode: "M" },
            { reasoning: "Correct expense is $250.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $225 (b) $250" },
        },
        {
          id: "olacc-u2-ce-q8", difficulty: "core", totalMarks: 2,
          stem: "How is an error of omission corrected?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Omission correction", statement: "Post the missing entry." }], steps: [
            { reasoning: "The omitted transaction is identified.", marks: 1, markCode: "M" },
            { reasoning: "A journal entry posts the missing debit and credit as if it had been recorded.", marks: 1, markCode: "A" },
          ], finalAnswer: "Post the missing entry through the journal — debit and credit the correct accounts." },
        },
        {
          id: "olacc-u2-ce-q9", difficulty: "challenge", totalMarks: 1,
          stem: "A suspense account is best described as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A type of day book" },
            { id: "b", text: "A temporary account holding unexplained differences" },
            { id: "c", text: "Part of the income statement" },
            { id: "d", text: "A permanent ledger account" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Suspense", statement: "Temporary holder." }], steps: [{ reasoning: "Suspense temporarily holds TB discrepancies.", marks: 1, markCode: "M" }], finalAnswer: "**(b)** Temporary account for differences" },
        },
        {
          id: "olacc-u2-ce-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the steps taken to correct an error after a suspense account has been used.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Suspense clearing", statement: "Find, correct, clear." }], steps: [
            { reasoning: "Investigate the ledger accounts and workings to find the error.", marks: 1, markCode: "M" },
            { reasoning: "Post a journal entry to correct the real accounts.", marks: 1, markCode: "M" },
            { reasoning: "Post a journal entry to clear the suspense account balance.", marks: 1, markCode: "M" },
            { reasoning: "The suspense account then shows a nil balance.", marks: 1, markCode: "A" },
          ], finalAnswer: "Find the error, correct the accounts via journal, and clear the suspense balance — returning it to nil." },
        },
        {
          id: "olacc-u2-ce-q11", difficulty: "foundation", totalMarks: 2,
          stem: "A $400 credit sale was posted to the wrong customer. The correction debits the correct customer and credits the wrong customer. Enter (a) the amount debited, (b) the amount credited.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 400 }, { label: "(b)", answer: 400 }] },
          markscheme: { principles: [{ kind: "principle", name: "Transfer correction", statement: "Move balance between accounts." }], steps: [
            { reasoning: "Correct customer is debited $400.", marks: 1, markCode: "M" },
            { reasoning: "Wrong customer is credited $400.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $400 (b) $400" },
        },
        {
          id: "olacc-u2-ce-q12", difficulty: "core", totalMarks: 2,
          stem: "Why should errors not be corrected by erasing or overwriting the original entry?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Audit trail", statement: "Keep original record." }], steps: [
            { reasoning: "The books must show a complete and accurate history of transactions.", marks: 1, markCode: "M" },
            { reasoning: "Erasing destroys the audit trail and hides that an error occurred.", marks: 1, markCode: "A" },
          ], finalAnswer: "To preserve the audit trail — corrections via journal keep the original entry visible and show the adjustment." },
        },
        {
          id: "olacc-u2-ce-q13", difficulty: "foundation", totalMarks: 1,
          stem: "A credit sale of $400 was never recorded. The correcting journal entry is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Dr Cash $400, Cr Sales $400" },
            { id: "b", text: "Dr Debtor $400, Cr Sales $400" },
            { id: "c", text: "No entry needed" },
            { id: "d", text: "Dr Sales $400, Cr Debtor $400" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Omission correction", statement: "Dr debtor, Cr sales." }], steps: [{ reasoning: "The customer owes us — debit the debtor; sales income is credited.", marks: 1, markCode: "M" }], finalAnswer: "**(b)** Dr Debtor $400, Cr Sales $400" },
        },
        {
          id: "olacc-u2-ce-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between correcting an error of commission and an error of omission.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Correction types", statement: "Repost vs post missing." }], steps: [
            { reasoning: "Commission: entry exists but in the wrong account — reverse it and repost correctly.", marks: 1, markCode: "M" },
            { reasoning: "Omission: no entry exists — post the missing transaction in full.", marks: 1, markCode: "M" },
            { reasoning: "Both use the journal but differ in whether an entry is reversed or added.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Commission is corrected by reversing/reposting; omission by posting the missing entry." },
        },
        {
          id: "olacc-u2-ce-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A credit purchase of $750 was entered as $75. Enter (a) the amount purchases is understated, (b) the amount creditors is understated, (c) the correct purchase figure.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 675 }, { label: "(b)", answer: 675 }, { label: "(c)", answer: 750 }] },
          markscheme: { principles: [{ kind: "principle", name: "Wrong amount", statement: "Both sides understated equally." }], steps: [
            { reasoning: "$750 - $75 = $675 understatement on purchases.", marks: 1, markCode: "M" },
            { reasoning: "Creditors is likewise understated by $675.", marks: 1, markCode: "M" },
            { reasoning: "Correct figure is $750.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $675 (b) $675 (c) $750" },
        },
        {
          id: "olacc-u2-ce-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Error correction review.",
          parts: [
            { label: "a", prompt: "How are bookkeeping errors corrected?", marks: 2 },
            { label: "b", prompt: "Give an example correction for a wrong amount.", marks: 2 },
            { label: "c", prompt: "What is a suspense account used for?", marks: 2 },
            { label: "d", prompt: "Describe the steps after the error behind a suspense balance is found.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Correction", statement: "Journal, suspense, clearing." },
          ], steps: [
            { part: "a", reasoning: "Journal debit/credit entries.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct method.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Adjust by the difference via journal.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Valid example.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Temporary account for discrepancies.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Correct the real accounts via journal.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Clear the suspense balance.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Suspense returns to nil.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) journal entries (b) adjust difference (c) temp holder (d) correct+clear" },
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
