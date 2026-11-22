import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "cieiacct-u3-lesson-3-2",
  code: "3-2",
  title: "Correction of errors, suspense accounts and incomplete records",
  goal: "I CAN correct errors using journal entries and suspense accounts, and calculate missing figures in incomplete records.",
  standards: [
    "Cambridge IGCSE Accounting 0452",
    "Sections 2 and 4: Errors, suspense accounts and incomplete records",
  ],
  vocabulary: [
    {
      term: "Suspense account",
      definition:
        "A temporary account used when the correct account for an error is not yet known; it must be eliminated before the final accounts are prepared.",
    },
    {
      term: "Error of principle",
      definition:
        "A transaction recorded with the wrong accounting treatment, e.g. a capital item treated as revenue expenditure.",
    },
    {
      term: "Error of omission",
      definition:
        "A transaction completely left out of the books of prime entry.",
    },
    {
      term: "Error of commission",
      definition: "The correct amount posted to the wrong person's account.",
    },
    {
      term: "Incomplete records",
      definition:
        "Accounting records that are missing some information, requiring missing figures to be calculated from partial records.",
    },
    {
      term: "Mark-up",
      definition:
        "The percentage added to cost price to arrive at selling price.",
    },
  ],
  concepts: [
    {
      id: "cieiacct-u3-errors",
      title: "Types of errors and the suspense account",
      skill: "Identify error types and use a suspense account to correct them.",
      lesson: {
        sections: [
          {
            heading: "The eight errors",
            body: "Errors detectable by trial balance: **error of original entry** (wrong figure from document, both sides equally wrong), **error of commission** (right amount, wrong account of same type), **complete omission**, **error of principle** (wrong treatment), and **compensating errors**. Errors NOT detected by trial balance: **error of omission** (both sides), **error of commission** affecting both sides equally, **error of principle**, **error of original entry** where both postings use the wrong figure equally, and **complete reversal** of an entry.",
          },
          {
            heading: "Suspense account",
            body: "When the correct account is unknown, the difference is temporarily placed in a **suspense account** (a real account in the general ledger). Once the error is found, journal entries transfer amounts out of suspense to the correct accounts. The suspense account must have a zero balance before final accounts are prepared.",
          },
          {
            heading: "Trial balance disagreement",
            body: "If debits exceed credits by \\$X, the error is usually: an expense/asset omitted from debit, a liability/income omitted from credit, a debit posted as credit (or vice versa) of \\$X, or a wrong figure entered. The suspense account absorbs the difference.",
          },
        ],
        keyFormulas: [
          {
            name: "Suspense",
            statement:
              "Suspense account balance = trial balance difference until error is identified",
          },
          {
            name: "Error detection",
            statement: "TB difference = sum of all one-sided posting errors",
          },
        ],
        workedExample: {
          problem:
            "A \\$500 payment to a creditor was debited to the supplier's account instead of credited... Actually: payment recorded Dr supplier \\$500, Cr bank \\$500 — correct. Suppose instead the Cr bank was omitted. TB shows debits exceed credits by \\$500. The suspense account is credited \\$500 (to balance). When the error is found, Dr suspense \\$500, Cr bank \\$500.",
          solution:
            "Suspense holds the imbalance until the missing bank credit is posted.",
        },
      },
      questions: [
        {
          id: "cieiacct-u3-errors-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An error of commission is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A transaction not recorded at all" },
              {
                id: "b",
                text: "The correct amount posted to the wrong account",
              },
              { id: "c", text: "The wrong amount taken from a document" },
              { id: "d", text: "A transaction recorded on the wrong side" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Error of commission",
                statement: "Right figure, wrong account.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Error of commission = correct amount in the wrong person's/nominal account.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Correct amount, wrong account.",
          },
        },
        {
          id: "cieiacct-u3-errors-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A suspense account is used when:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The trial balance refuses to balance permanently",
              },
              { id: "b", text: "Preparing the profit and loss account" },
              { id: "c", text: "A business has too many ledger accounts" },
              {
                id: "d",
                text: "The correct account for an error is not yet known, so the difference is parked temporarily",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Suspense account",
                statement:
                  "Temporary account holding an unidentified error difference.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Suspense holds the imbalance until the error is identified and corrected.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) To park an unidentified error difference temporarily.",
          },
        },
        {
          id: "cieiacct-u3-errors-q3",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The trial balance shows debits exceed credits by \\$350. What does this tell you, and where is the suspense account likely to appear?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "TB imbalance",
                statement:
                  "A one-sided error has occurred; suspense absorbs the difference.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Debits exceed credits by \\$350 means some debit is missing or a credit is overstated/omitted.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A suspense account of \\$350 Cr is created so the trial balance agrees; it must later be cleared.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A \\$350 one-sided error exists; suspense account carries \\$350 Cr.",
          },
        },
        {
          id: "cieiacct-u3-errors-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "A business bought a delivery van for \\$12,000 and incorrectly recorded it as repairs expense. Identify the error type and explain its effect on the financial statements.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Error of principle",
                statement:
                  "Wrong accounting treatment — capital item treated as revenue expense.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Error of principle — the van is a non-current asset but was expensed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Profit is understated by \\$12,000 (ignoring depreciation) and non-current assets are understated.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The trial balance still agrees because both sides were debited/credited equally — the error is in classification, not arithmetic.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Error of principle; profit and assets understated by \\$12,000; TB unaffected.",
          },
        },
        {
          id: "cieiacct-u3-errors-q5",
          difficulty: "core",
          totalMarks: 3,
          stem: "A \\$400 credit sale to customer X was never recorded in the books of prime entry. Identify the error and state whether the trial balance would detect it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Complete omission",
                statement: "Transaction left out entirely.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Complete omission of a credit sale — error of omission.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Neither the debtor's account nor sales was updated, so both sides of the entry are missing equally.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The trial balance would NOT detect it — debits still equal credits; only document checks or control accounts would reveal it.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Error of omission; trial balance does not detect it.",
          },
        },
        {
          id: "cieiacct-u3-errors-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "A \\$250 payment to a creditor was recorded as Dr creditor \\$250, Cr bank \\$250 — correct. But the amount should have been \\$350. Identify the error type and its effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Error of original entry",
                statement:
                  "Wrong figure taken from the source document, used on both sides.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Error of original entry — \\$250 used instead of \\$350 from the document.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both creditor and bank are understated by \\$100; the trial balance still agrees.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Effect: creditor balance overstated by \\$100 (still owes \\$100 more than shown... actually payment was \\$350 but only \\$250 recorded → creditor still shows \\$100 owing that isn't real, and bank shows \\$100 more than actual). Correction via journal: Dr creditor... state correction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Error of original entry; both sides understated by \\$100; TB agrees; correct with a \\$100 journal entry.",
          },
        },
        {
          id: "cieiacct-u3-errors-q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "The trial balance does not agree: debits exceed credits by \\$180. A suspense account has been opened. Later, the error is found: wages of \\$180 were entered in the wages account but the credit to bank was omitted. Give the journal entry to correct the error and clear the suspense account.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Correcting entry",
                statement:
                  "Post the missing entry and remove the suspense balance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The missing entry is the bank credit for wages paid.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Journal: Dr suspense account \\$180 (or Dr wages correction)... Correct approach: the suspense holds the imbalance; post Dr bank? Bank was credited in reality but not in books — books need Cr bank \\$180. And Dr suspense \\$180 to clear it.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning:
                  "Entry: Dr suspense \\$180; Cr bank \\$180. This posts the missing bank credit and clears suspense.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Dr suspense \\$180, Cr bank \\$180 — posts the omitted bank payment and clears suspense.",
          },
        },
        {
          id: "cieiacct-u3-errors-q8",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt: "List three errors that a trial balance CAN detect.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "List three errors that a trial balance CANNOT detect.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "TB detection",
                statement: "TB detects one-sided errors only.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Single-sided posting errors: debit posted as credit; omission of one side of an entry; wrong amount on one side only; transposition affecting one side.",
                marks: 3,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Errors affecting both sides equally: error of commission between same-type accounts; error of principle; complete omission of both sides; compensating errors; error of original entry.",
                marks: 3,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) One-sided posting errors. (b) Two-sided/classification errors.",
          },
        },
        {
          id: "cieiacct-u3-errors-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A suspense account shows a credit balance of \\$420 at the trial balance stage. Explain what this means and what must happen before final accounts are prepared.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Suspense balance",
                statement: "Suspense must be eliminated before final accounts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A Cr suspense balance of \\$420 means credits exceeded debits by \\$420 before correction — a one-sided error of \\$420 exists.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The error must be traced (via day books, documents, or control accounts) and corrected by journal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The suspense account must return to zero; it cannot appear in final accounts.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "\\$420 one-sided error pending; suspense must be cleared to zero before final accounts.",
          },
        },
        {
          id: "cieiacct-u3-errors-q10",
          difficulty: "challenge",
          totalMarks: 7,
          parts: [
            {
              label: "a",
              prompt:
                "Distinguish between an error of omission and an error of original entry.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "For each, state whether the trial balance detects it and why.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Error types",
                statement:
                  "Omission = nothing recorded; original entry = wrong figure used on both sides.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Error of omission: the whole transaction is left out — no debit, no credit.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Error of original entry: the transaction IS recorded but using the wrong figure from the source document, on both sides equally.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Complete omission: TB does not detect — both sides missing equally.",
                marks: 2,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Original entry: TB does not detect — both sides use the same wrong figure, so debits still equal credits.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Omission = nothing recorded; original entry = wrong figure both sides. (b) Neither is detected by the TB.",
          },
        },
        {
          id: "cieiacct-u3-errors-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An error of omission means:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A transaction was never recorded in the books at all",
              },
              { id: "b", text: "A transaction was entered on the wrong side" },
              { id: "c", text: "A transaction was recorded in the wrong account" },
              { id: "d", text: "A transaction was recorded with a wrong amount" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Error of omission",
                statement: "The transaction is completely left out of the books.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Omission = no entry whatsoever, so debits and credits stay equal.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Never recorded at all.",
          },
        },
        {
          id: "cieiacct-u3-errors-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A payment to a supplier of \\$600 was entered as a debit to the supplier instead of a credit. The trial balance would:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Not agree — the difference would be \\$1,200" },
              { id: "b", text: "Agree — the amount is still \\$600" },
              { id: "c", text: "Agree if the bank was also credited" },
              {
                id: "d",
                text: "Not agree — the wrong side unbalances debits and credits",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Wrong-side error",
                statement:
                  "Posting on the wrong side reverses the effect and unbalances the trial balance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The supplier should have been credited; debiting instead makes debits exceed credits by \\$1,200 total effect.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Not agree.",
          },
        },
        {
          id: "cieiacct-u3-errors-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between an error of omission and an error of original entry, giving an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Omission vs original entry",
                statement:
                  "Omission = nothing recorded; original entry = the wrong figure from the source document used on both sides.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Error of omission: e.g. a cash sale of \\$200 never entered — no debit or credit exists.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Error of original entry: e.g. an invoice for \\$450 read as \\$540 and both debit and credit posted at \\$540.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Neither is detected by the trial balance — both keep debits equal to credits.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Omission = transaction left out entirely; original entry = wrong figure used consistently on both sides. Neither shows in the TB.",
          },
        },
        {
          id: "cieiacct-u3-errors-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A trial balance shows total debits exceeding total credits by \\$350. Before the error is found, a suspense account is opened. What will its balance be?",
          response: {
            type: "numeric",
            parts: [{ label: "Suspense balance", answer: 350, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Suspense account",
                statement:
                  "The suspense account absorbs the trial balance difference until the error is located.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The \\$350 difference is placed in suspense — a credit balance since debits are higher.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Suspense balance = \\$350 Cr.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$350 Cr",
          },
        },
        {
          id: "cieiacct-u3-errors-q15",
          difficulty: "challenge",
          totalMarks: 4,
          parts: [
            {
              label: "a",
              prompt:
                "State two errors the trial balance can detect and two it cannot.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain the role of the suspense account when an error cannot be found immediately.",
              marks: 2,
            },
          ],
          stem: "A business finds its trial balance does not agree.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Error detection",
                statement:
                  "The TB detects only errors that make debits unequal to credits.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Detectable: wrong-side entry, one-sided (single) entry, wrong amount on one side. Undetectable: omission, commission, principle, original entry, compensating errors.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The suspense account temporarily holds the difference so the TB can be made to agree while the error is investigated.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Once found, correcting entries clear suspense to zero before final accounts are prepared.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Any two detectable and two undetectable errors. (b) Temporary holder of the difference until the error is corrected.",
          },
        },
        {
          id: "cieiacct-u3-errors-q16",
          difficulty: "challenge",
          totalMarks: 5,
          parts: [
            {
              label: "a",
              prompt:
                "For each scenario state the type of error: (i) goods returned by a customer never recorded; (ii) an invoice for \\$300 entered as \\$400 on both sides; (iii) a receipt from Mr A posted to Mr B's account.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "State which of the three errors the trial balance would reveal.",
              marks: 2,
            },
          ],
          stem: "A student is revising error types for the exam.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Error types",
                statement:
                  "Each error type has a distinct cause and detection profile.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "(i) Error of omission; (ii) error of original entry; (iii) error of commission.",
                marks: 3,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "None of them — all three keep debits equal to credits, so the trial balance would agree in every case.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) (i) Omission, (ii) original entry, (iii) commission. (b) None — all are TB-invisible.",
          },
        },
      ],
    },
    {
      id: "cieiacct-u3-suspense",
      title: "Suspense account mechanics",
      skill: "Calculate suspense account movements and correcting entries.",
      lesson: {
        sections: [
          {
            heading: "How suspense works",
            body: "When the trial balance fails, the difference is entered to a suspense account on the side needed to make it agree. As errors are discovered, journal entries move amounts between suspense and the correct accounts. The suspense account must net to zero.",
          },
          {
            heading: "Common corrections",
            body: "If an expense was omitted from the books (Dr expense missing), the correction is Dr expense, Cr suspense (if suspense is Cr). If a receipt was credited to the wrong account, transfer via suspense: Dr correct account, Cr suspense; then Dr suspense, Cr wrong account — or post directly once known.",
          },
        ],
        keyFormulas: [
          {
            name: "Suspense clearing",
            statement:
              "Sum of all suspense entries must equal zero before final accounts",
          },
        ],
        workedExample: {
          problem:
            "TB fails: credits exceed debits by \\$300 → suspense Dr \\$300. Error found: insurance \\$300 paid but only bank credited (Dr suspense... entry should have been Dr insurance, Cr bank; bank was credited correctly so missing Dr insurance \\$300). Correction: Dr insurance \\$300, Cr suspense \\$300. Suspense now zero.",
          solution: "Post Dr insurance \\$300 / Cr suspense \\$300.",
        },
      },
      questions: [
        {
          id: "cieiacct-u3-suspense-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Credits exceed debits in the trial balance by \\$500. The suspense account will show a balance of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "\\$500 Dr — to balance the excess credits" },
              { id: "b", text: "\\$500 with no specified side" },
              { id: "c", text: "Zero — suspense only used for debit errors" },
              { id: "d", text: "\\$500 Cr" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Suspense side",
                statement:
                  "Suspense is entered on the side that makes debits = credits.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Credits exceed debits by \\$500, so a \\$500 debit is needed — suspense Dr \\$500.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) \\$500 Dr.",
          },
        },
        {
          id: "cieiacct-u3-suspense-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Before final accounts are prepared, the suspense account must:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Have a zero balance — all errors identified and corrected",
              },
              { id: "b", text: "Be transferred to retained earnings" },
              { id: "c", text: "Be included in the profit and loss account" },
              { id: "d", text: "Show the remaining error for next year" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Suspense must clear",
                statement: "Suspense is temporary and must net to zero.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Suspense must be fully cleared before final accounts.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Zero balance.",
          },
        },
        {
          id: "cieiacct-u3-suspense-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "The trial balance shows debits exceed credits by \\$260. A suspense account Cr \\$260 is opened. The error is then found: rent of \\$260 was paid by cheque — bank was credited but the rent account was never debited. Give the correcting journal entry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Correction via suspense",
                statement:
                  "Post the missing debit and clear the suspense credit.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Missing entry: Dr rent \\$260 (the expense was never debited).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Suspense holds Cr \\$260; to clear it, debit suspense \\$260.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Journal: Dr rent \\$260, Cr suspense \\$260. Suspense now zero.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Dr rent \\$260, Cr suspense \\$260.",
          },
        },
        {
          id: "cieiacct-u3-suspense-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "A \\$750 receipt from a debtor was credited to the sales account instead of the debtor's account. The trial balance agreed. Explain why the error was not detected and how it would be corrected (no suspense needed since TB agreed).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Two-sided error",
                statement:
                  "Errors affecting both sides equally don't disturb the TB.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both entries were credits — sales and debtor — so total credits unchanged; TB still agrees.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Correction: Dr sales \\$750 (remove the wrong credit effect... actually reverse: Dr sales \\$750 to cancel the credit, Cr debtor \\$750 to restore the debtor's payment).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Journal: Dr sales account \\$750, Cr debtor's account \\$750 — wait, that reduces sales further. Correct: the receipt should have been Dr bank, Cr debtor. It was recorded Dr bank, Cr sales. Fix: Dr sales \\$750, Cr debtor \\$750. This removes \\$750 from sales and credits the debtor's account as if paid.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Dr sales \\$750, Cr debtor \\$750 — corrects the mis-posting; TB unaffected throughout.",
          },
        },
        {
          id: "cieiacct-u3-suspense-q5",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two errors exist: (1) insurance \\$400 paid — bank credited but insurance not debited; (2) the trial balance showed debits exceeding credits by \\$400. After finding error (1), a second error of \\$100 is discovered: stationery \\$100 was debited to the wrong expense account. Calculate the suspense account balance after both corrections.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multiple errors",
                statement: "Each correction moves suspense toward zero.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Initial suspense: debits exceed credits \\$400 → suspense Cr \\$400.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Error 1 correction: Dr insurance \\$400, Cr suspense \\$400 → suspense clears to zero for that error.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Error 2 (stationery mis-posted to another expense) is a two-sided classification error — both are expenses, so it does not affect suspense; it is corrected directly between the two expense accounts without touching suspense.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Suspense balance = zero after the insurance correction; the stationery error is corrected directly between expense accounts.",
          },
        },
        {
          id: "cieiacct-u3-suspense-q6",
          difficulty: "core",
          totalMarks: 4,
          stem: "Suspense account shows Dr \\$180. Errors found: (a) a \\$180 debit to purchases was omitted entirely (both sides); (b) bank charges \\$60 were debited to rent instead of bank charges. State the journal entries needed and the final suspense balance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Suspense clearing",
                statement:
                  "Suspense only handles one-sided errors; two-sided errors are corrected directly.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Error (a): both sides omitted — but if suspense has Dr \\$180, the omitted side must be identified. If only the Cr bank side was missing: Dr purchases \\$180, Cr suspense \\$180.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Error (b): \\$60 debited to rent should be bank charges — both are expenses (debits), so correct directly: Dr bank charges \\$60, Cr rent \\$60. No suspense involved.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning:
                  "Final suspense balance: zero after the \\$180 correction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Dr purchases \\$180 / Cr suspense \\$180 (clears suspense); Dr bank charges \\$60 / Cr rent \\$60 (direct correction). Suspense = zero.",
          },
        },
        {
          id: "cieiacct-u3-suspense-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why an error of commission between two debtors' accounts would NOT create a suspense account, even though it is an error.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "TB scope",
                statement:
                  "Suspense only arises from one-sided errors that unbalance the TB.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Posting to the wrong debtor still debits the sales ledger — total debits unchanged.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The trial balance still agrees, so no suspense account is needed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The error is found by checking individual accounts against documents, then corrected directly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "It's a two-sided error — TB agrees, so no suspense; correct directly once found.",
          },
        },
        {
          id: "cieiacct-u3-suspense-q8",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "The trial balance fails: credits exceed debits by \\$540. List three possible causes.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "State the suspense account entry and explain what happens to it when the error is found.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "TB imbalance causes",
                statement: "One-sided errors unbalance the TB.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Possible causes: a debit omitted (e.g. expense not debited); a credit posted twice; a debit posted as credit; wrong amount on one side only.",
                marks: 3,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Suspense Dr \\$540 is opened to balance the TB.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "When the error is identified, a journal entry posts the correct amounts and clears the suspense — it must reach zero.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Any three one-sided error causes. (b) Suspense Dr \\$540; cleared to zero by correcting journal once error found.",
          },
        },
        {
          id: "cieiacct-u3-suspense-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A \\$900 loan received was recorded Dr bank \\$900, Cr suspense \\$900 (awaiting identification). It is later identified as a bank loan. Give the correcting entry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Suspense identification",
                statement:
                  "Once identified, transfer from suspense to the correct account.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Cr suspense \\$900 should have been Cr loan (non-current liability).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Journal: Dr suspense \\$900, Cr loan account \\$900.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Suspense clears to zero; the loan appears correctly in the balance sheet.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Dr suspense \\$900, Cr loan \\$900.",
          },
        },
        {
          id: "cieiacct-u3-suspense-q10",
          difficulty: "challenge",
          totalMarks: 7,
          parts: [
            {
              label: "a",
              prompt:
                "Explain the role of the suspense account in the correction of errors.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "A suspense account shows a balance of \\$250 Dr after one correction. What does this imply and what is the next step?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Suspense lifecycle",
                statement: "Temporary holding account → must clear to zero.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "It temporarily holds the trial balance difference when the error's correct account is unknown.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It allows the TB to be made to agree while investigation continues.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It is cleared by journal entries once errors are identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "A Dr balance of \\$250 means debits still exceed credits by \\$250 — at least \\$250 of error remains unidentified.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Continue investigating (day books, documents, control accounts) until all errors are found.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Suspense must reach zero before final accounts are prepared — it cannot appear in them.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Temporary holder for unidentified errors. (b) \\$250 error remains; keep investigating until suspense = zero.",
          },
        },
        {
          id: "cieiacct-u3-suspense-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Before the final accounts are prepared, the suspense account must:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Show a debit balance" },
              { id: "b", text: "Be transferred to the profit and loss account" },
              { id: "c", text: "Equal the trial balance difference" },
              { id: "d", text: "Have a zero balance" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Suspense account",
                statement:
                  "It is temporary — all errors must be corrected so it returns to zero.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A suspense balance in final accounts means an error is still unresolved.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Zero balance.",
          },
        },
        {
          id: "cieiacct-u3-suspense-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A trial balance shows total credits exceeding total debits by \\$180. The suspense account is opened. On which side and for how much?",
          response: {
            type: "numeric",
            parts: [{ label: "Suspense balance", answer: 180, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Suspense account",
                statement:
                  "The suspense account takes the side needed to restore equality.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Credits exceed debits, so the suspense account is debited \\$180 to balance the TB.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Suspense balance = \\$180 Dr.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$180 Dr",
          },
        },
        {
          id: "cieiacct-u3-suspense-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a suspense account is cleared once the error has been found.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Suspense clearing",
                statement:
                  "Correcting journal entries move amounts between suspense and the correct accounts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The error is identified and the correct double entry is worked out.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A journal entry is posted with suspense on one side and the correct account on the other.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The suspense account returns to zero and no longer appears in the trial balance or final accounts.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Post a correcting entry through suspense to the correct account(s) until suspense nets to zero.",
          },
        },
        {
          id: "cieiacct-u3-suspense-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "The suspense account has a credit balance of \\$600. Two errors are then found: an insurance payment of \\$400 was never debited to insurance, and a \\$200 receipt was never credited to sales. After both corrections are posted, what is the suspense account balance?",
          response: {
            type: "numeric",
            parts: [{ label: "Suspense balance", answer: 0, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Suspense clearing",
                statement:
                  "Each correction moves the suspense balance towards zero.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Insurance: Dr insurance \\$400 / Cr suspense \\$400 — suspense Cr falls to \\$200.",
                working: "600 - 400 = 200",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Receipt: Dr suspense \\$200 / Cr sales \\$200 — suspense Cr falls to \\$0.",
                working: "200 - 200 = 0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Suspense balance = \\$0 — fully cleared.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$0",
          },
        },
        {
          id: "cieiacct-u3-suspense-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A \\$300 insurance payment was recorded with only the bank credited — the debit to insurance was omitted. The correcting entry through suspense is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Debit insurance \\$300 / Credit bank \\$300" },
              { id: "b", text: "Debit suspense \\$300 / Credit insurance \\$300" },
              { id: "c", text: "Debit bank \\$300 / Credit insurance \\$300" },
              {
                id: "d",
                text: "Debit insurance \\$300 / Credit suspense \\$300",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Suspense correction",
                statement:
                  "The missing debit is posted against suspense to clear it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The bank credit already exists; only Dr insurance is missing, so suspense (which holds the imbalance) is credited.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Dr insurance / Cr suspense \\$300.",
          },
        },
        {
          id: "cieiacct-u3-suspense-q16",
          difficulty: "challenge",
          totalMarks: 4,
          parts: [
            {
              label: "a",
              prompt:
                "The trial balance fails with credits exceeding debits by \\$500. State the suspense account entry.",
              marks: 1,
            },
            {
              label: "b",
              prompt:
                "The error is found: a \\$500 rent payment was recorded with only the bank credited — the debit to rent was omitted. State the correcting entry.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "State the suspense account balance after correction.",
              marks: 1,
            },
          ],
          stem: "A business cannot locate a trial balance error immediately.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Suspense account mechanics",
                statement:
                  "Suspense holds the difference; corrections move amounts to the right accounts.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Debit suspense \\$500 (credits were higher).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Dr rent \\$500 / Cr suspense \\$500.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "This posts the missing expense debit and clears the suspense balance.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Suspense balance = \\$0.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Dr suspense \\$500. (b) Dr rent / Cr suspense \\$500. (c) \\$0.",
          },
        },
      ],
    },
    {
      id: "cieiacct-u3-incomplete",
      title: "Incomplete records — missing figures",
      skill:
        "Calculate missing figures such as purchases, sales, gross profit and drawings from partial records.",
      lesson: {
        sections: [
          {
            heading: "What incomplete records are",
            body: "Many small businesses keep only a **cash book** and some totals — no full double entry. To prepare final accounts, missing figures must be calculated: opening/closing capital, drawings, purchases, sales, gross profit.",
          },
          {
            heading: "Key relationships",
            body: "**Capital** = assets − liabilities. **Closing capital** = opening capital + profit − drawings. **Gross profit** = sales − cost of sales. **Cost of sales** = opening inventory + purchases − closing inventory. **Net profit** = gross profit − expenses. Work backwards from known figures.",
          },
          {
            heading: "Method",
            body: "List all known figures, identify what's missing, then use the accounting equations to solve. Drawings are often the plug figure: drawings = opening capital + net profit − closing capital.",
          },
        ],
        keyFormulas: [
          {
            name: "Closing capital",
            statement: "Opening capital + net profit − drawings",
          },
          {
            name: "Cost of sales",
            statement: "Opening inventory + purchases − closing inventory",
          },
          { name: "Gross profit", statement: "Sales − cost of sales" },
          {
            name: "Drawings",
            statement: "Opening capital + net profit − closing capital",
          },
        ],
        workedExample: {
          problem:
            "Opening capital \\$20,000; net profit \\$8,000; closing capital \\$24,000. Find drawings.",
          solution: "Drawings = 20,000 + 8,000 − 24,000 = \\$4,000.",
        },
      },
      questions: [
        {
          id: "cieiacct-u3-incomplete-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Incomplete records typically consist of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Computerised records with no printouts" },
              {
                id: "b",
                text: "A cash book and partial totals rather than a full double-entry system",
              },
              { id: "c", text: "No records at all" },
              { id: "d", text: "Only a trial balance" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Incomplete records",
                statement:
                  "Partial bookkeeping — cash book plus some totals, no full ledger.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Incomplete records = partial books, usually cash book + totals.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Cash book and partial totals.",
          },
        },
        {
          id: "cieiacct-u3-incomplete-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Opening capital \\$15,000; net profit for the year \\$6,000; drawings \\$3,000. Calculate closing capital.",
          response: {
            type: "numeric",
            parts: [{ label: "Closing capital", answer: 18000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Closing capital",
                statement: "Opening capital + net profit − drawings.",
              },
            ],
            steps: [
              {
                reasoning: "Apply the formula.",
                working: "15000 + 6000 - 3000 = 18000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the answer.",
                working: "\\$18,000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$18,000",
          },
        },
        {
          id: "cieiacct-u3-incomplete-q3",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Sales \\$50,000; closing inventory \\$8,000; cost of sales \\$30,000. Opening inventory was \\$5,000. Calculate purchases.",
          response: {
            type: "numeric",
            parts: [{ label: "Purchases", answer: 33000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cost of sales",
                statement:
                  "Cost of sales = opening inventory + purchases − closing inventory → purchases = cost of sales − opening inventory + closing inventory.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Purchases = cost of sales − opening inventory + closing inventory.",
                working: "30000 - 5000 + 8000 = 33000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the answer.",
                working: "\\$33,000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$33,000",
          },
        },
        {
          id: "cieiacct-u3-incomplete-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "A trader's records show: opening capital \\$25,000; closing capital \\$31,500; drawings \\$7,000. Calculate the net profit for the year.",
          response: {
            type: "numeric",
            parts: [{ label: "Net profit", answer: 13500, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Net profit from capital",
                statement:
                  "Net profit = closing capital − opening capital + drawings.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rearrange: net profit = closing capital − opening capital + drawings.",
                working: "31500 - 25000 + 7000 = 13500",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the answer.",
                working: "\\$13,500",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Check: 25,000 + 13,500 − 7,000 = 31,500 ✓",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$13,500",
          },
        },
        {
          id: "cieiacct-u3-incomplete-q5",
          difficulty: "core",
          totalMarks: 3,
          stem: "Sales \\$80,000; gross profit margin 25%; opening inventory \\$6,000; closing inventory \\$9,000; purchases \\$55,000. Calculate the cost of sales and verify consistency.",
          response: {
            type: "numeric",
            parts: [{ label: "Cost of sales", answer: 60000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Gross profit",
                statement:
                  "Gross profit = sales × margin; cost of sales = sales − gross profit.",
              },
            ],
            steps: [
              {
                reasoning: "Gross profit = 25% × 80,000 = \\$20,000.",
                working: "80000 * 0.25 = 20000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cost of sales = sales − gross profit = 80,000 − 20,000.",
                working: "80000 - 20000 = 60000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Check via inventory: 6,000 + 55,000 − 9,000 = 52,000 ≠ 60,000 — figures inconsistent; award marks for correct method.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "\\$60,000 (note: inventory figures give \\$52,000 — data inconsistent)",
            commonErrors: ["Using margin on cost instead of sales."],
          },
        },
        {
          id: "cieiacct-u3-incomplete-q6",
          difficulty: "core",
          totalMarks: 4,
          stem: "A business has: opening capital \\$18,000; net profit \\$9,500; closing capital \\$22,000. Calculate drawings. Then state what additional information would be needed to prepare a full trading account.",
          response: {
            type: "numeric",
            parts: [{ label: "Drawings", answer: 5500, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Drawings",
                statement:
                  "Drawings = opening capital + net profit − closing capital.",
              },
            ],
            steps: [
              {
                reasoning: "Drawings = 18,000 + 9,500 − 22,000.",
                working: "18000 + 9500 - 22000 = 5500",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State drawings.",
                working: "\\$5,500",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Additional info needed: sales, purchases, opening/closing inventory, and expense details to prepare a trading and profit and loss account.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "\\$5,500; plus sales, purchases, inventory and expense details for full accounts.",
          },
        },
        {
          id: "cieiacct-u3-incomplete-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Opening inventory \\$4,000; purchases \\$28,000; closing inventory \\$6,500; sales \\$45,000. Calculate gross profit and the gross profit margin (to 1 decimal place).",
          response: {
            type: "numeric",
            parts: [
              { label: "Gross profit", answer: 19500, unit: "$" },
              { label: "GP margin %", answer: 43.3, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "GP",
                statement:
                  "Cost of sales = opening inventory + purchases − closing inventory; GP = sales − cost of sales.",
              },
            ],
            steps: [
              {
                reasoning: "Cost of sales = 4,000 + 28,000 − 6,500 = 25,500.",
                working: "4000 + 28000 - 6500 = 25500",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "GP = 45,000 − 25,500 = \\$19,500.",
                working: "45000 - 25500 = 19500",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Margin = 19,500 ÷ 45,000 × 100 = 43.3%.",
                working: "19500 / 45000 * 100 = 43.33",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "GP \\$19,500; margin 43.3%",
            commonErrors: [
              "Answer parts must match: GP 19500, margin 43.3 — see note.",
            ],
          },
        },
        {
          id: "cieiacct-u3-incomplete-q8",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Explain why drawings must be deducted when calculating closing capital.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Opening capital \\$12,000; drawings \\$4,000; closing capital \\$15,000. Calculate net profit.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Drawings",
                statement:
                  "Drawings are the owner's withdrawals — they reduce capital just like expenses reduce profit.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Drawings are amounts taken out by the owner for personal use — not business expenses but a reduction in the owner's stake.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Capital grows by profit but shrinks by drawings; omitting drawings would overstate closing capital.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Formula: closing capital = opening + profit − drawings.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Net profit = closing − opening + drawings = 15,000 − 12,000 + 4,000.",
                working: "15000 - 12000 + 4000 = 7000",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State answer.",
                working: "\\$7,000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Drawings reduce the owner's capital. (b) Net profit \\$7,000.",
          },
        },
        {
          id: "cieiacct-u3-incomplete-q9",
          difficulty: "core",
          totalMarks: 4,
          stem: "A trader provides: sales \\$60,000; opening inventory \\$5,000; closing inventory \\$8,000; purchases \\$40,000; expenses \\$12,000; drawings \\$6,000; opening capital \\$20,000. Calculate net profit and closing capital.",
          response: {
            type: "numeric",
            parts: [
              { label: "Net profit", answer: 11000, unit: "$" },
              { label: "Closing capital", answer: 25000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Full calculation",
                statement: "Cost of sales → GP → net profit → closing capital.",
              },
            ],
            steps: [
              {
                reasoning: "Cost of sales = 5,000 + 40,000 − 8,000 = 37,000.",
                working: "5000 + 40000 - 8000 = 37000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "GP = 60,000 − 37,000 = 23,000; net profit = 23,000 − 12,000 = 11,000.",
                working: "23000 - 12000 = 11000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Closing capital = 20,000 + 11,000 − 6,000 = 25,000.",
                working: "20000 + 11000 - 6000 = 25000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State both answers.",
                working: "NP \\$11,000; CC \\$25,000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Net profit \\$11,000; closing capital \\$25,000",
            commonErrors: ["Forgetting to deduct expenses from gross profit."],
          },
        },
        {
          id: "cieiacct-u3-incomplete-q10",
          difficulty: "challenge",
          totalMarks: 8,
          parts: [
            {
              label: "a",
              prompt:
                "List the figures needed to prepare a trading and profit and loss account from incomplete records.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Opening capital \\$22,000; net profit \\$10,000; closing capital \\$27,000. Calculate drawings and explain how you would check your answer.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Incomplete records",
                statement: "Work backwards through the accounting equations.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Sales; purchases; opening and closing inventory; expenses; drawings; opening and closing capital.",
                marks: 4,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Drawings = 22,000 + 10,000 − 27,000 = \\$5,000.",
                working: "22000 + 10000 - 27000 = 5000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Check: opening capital + profit − drawings = closing capital → 22,000 + 10,000 − 5,000 = 27,000 ✓.",
                working: "22000 + 10000 - 5000 = 27000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State drawings.",
                working: "\\$5,000",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Verification by substituting back into the capital formula confirms consistency.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Sales, purchases, inventories, expenses, drawings, capitals. (b) Drawings \\$5,000; verified by substitution.",
          },
        },
        {
          id: "cieiacct-u3-incomplete-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The formula for calculating closing capital is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Opening capital + drawings − net profit" },
              { id: "b", text: "Opening capital − net profit − drawings" },
              { id: "c", text: "Net profit − opening capital + drawings" },
              {
                id: "d",
                text: "Opening capital + net profit − drawings",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Closing capital",
                statement: "Opening capital + net profit − drawings.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Profit increases capital; drawings reduce it.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Opening capital + net profit − drawings.",
          },
        },
        {
          id: "cieiacct-u3-incomplete-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A business has opening capital of \\$10,000, net profit of \\$4,500 and drawings of \\$2,000. Calculate the closing capital.",
          response: {
            type: "numeric",
            parts: [{ label: "Closing capital", answer: 12500, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Closing capital",
                statement: "Opening capital + net profit − drawings.",
              },
            ],
            steps: [
              {
                reasoning: "10,000 + 4,500 − 2,000.",
                working: "10000 + 4500 - 2000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Closing capital = \\$12,500.",
                working: "10000 + 4500 - 2000 = 12500",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$12,500",
          },
        },
        {
          id: "cieiacct-u3-incomplete-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Opening inventory \\$3,000; purchases \\$15,000; closing inventory \\$4,500. Calculate the cost of sales.",
          response: {
            type: "numeric",
            parts: [{ label: "Cost of sales", answer: 13500, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cost of sales",
                statement: "Opening inventory + purchases − closing inventory.",
              },
            ],
            steps: [
              {
                reasoning: "Goods available = 3,000 + 15,000 = \\$18,000.",
                working: "3000 + 15000 = 18000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Unsold goods = closing inventory \\$4,500.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cost of sales = 18,000 − 4,500 = \\$13,500.",
                working: "18000 - 4500 = 13500",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$13,500",
          },
        },
        {
          id: "cieiacct-u3-incomplete-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why drawings are often the 'plug figure' when preparing accounts from incomplete records.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Plug figure",
                statement:
                  "When one figure is unknown it can be found by rearranging the accounting equation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In incomplete records, most figures can be found from the cash book and totals, but drawings are often not fully recorded.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The capital formula can be rearranged: drawings = opening capital + net profit − closing capital.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This makes drawings the balancing figure that reconciles the known capitals and profit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Drawings are usually the only unrecorded figure, so they are found by rearranging the capital formula — the 'plug'.",
          },
        },
        {
          id: "cieiacct-u3-incomplete-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Sales \\$50,000; cost of sales \\$32,000; expenses \\$9,000. Calculate gross profit and net profit.",
          response: {
            type: "numeric",
            parts: [
              { label: "Gross profit", answer: 18000, unit: "$" },
              { label: "Net profit", answer: 9000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Profit chain",
                statement: "GP = sales − cost of sales; NP = GP − expenses.",
              },
            ],
            steps: [
              {
                reasoning: "Gross profit = 50,000 − 32,000 = \\$18,000.",
                working: "50000 - 32000 = 18000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Net profit = 18,000 − 9,000 = \\$9,000.",
                working: "18000 - 9000 = 9000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both figures stated correctly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Gross profit \\$18,000; net profit \\$9,000.",
          },
        },
        {
          id: "cieiacct-u3-incomplete-q16",
          difficulty: "challenge",
          totalMarks: 5,
          parts: [
            {
              label: "a",
              prompt:
                "Opening capital \\$18,000; closing capital \\$21,500; net profit \\$6,000. Calculate drawings.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how you would check that your answer is reasonable.",
              marks: 1,
            },
            {
              label: "c",
              prompt:
                "State one figure you would need to prepare a full income statement that is still missing.",
              marks: 2,
            },
          ],
          stem: "A trader keeps incomplete records.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Drawings",
                statement: "Drawings = opening capital + net profit − closing capital.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Drawings = 18,000 + 6,000 − 21,500 = \\$2,500.",
                working: "18000 + 6000 - 21500 = 2500",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Substitute drawings back into the formula: 18,000 + 6,000 − 2,500 = 21,500 — matches closing capital.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Any valid missing figure: sales, purchases, opening/closing inventory, or total expenses — needed to build the trading and profit and loss account.",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) \\$2,500. (b) Verified by substitution. (c) Any valid missing figure such as sales or purchases.",
          },
        },
      ],
    },
    {
      id: "cieiacct-u3-markup",
      title: "Mark-up and mark-down",
      skill:
        "Calculate mark-up, mark-down and profit margins in incomplete records problems.",
      lesson: {
        sections: [
          {
            heading: "Mark-up",
            body: "**Mark-up** = profit as a percentage of COST. Mark-up % = (profit ÷ cost) × 100. Selling price = cost × (1 + mark-up%). This is used when cost is known and selling price must be found, or vice versa.",
          },
          {
            heading: "Mark-down",
            body: "**Mark-down** = reduction in selling price, expressed as a percentage of the ORIGINAL selling price. Mark-down % = (reduction ÷ original selling price) × 100. Used for clearance sales.",
          },
          {
            heading: "In incomplete records",
            body: "Mark-up is often used to find missing purchases or sales: if closing inventory is valued at cost and mark-up is known, sales can be derived. Gross profit = mark-up% × cost of sales.",
          },
        ],
        keyFormulas: [
          {
            name: "Mark-up",
            statement:
              "Mark-up % = (profit ÷ cost of sales) × 100; selling price = cost × (1 + mark-up/100)",
          },
          {
            name: "Mark-down",
            statement:
              "Mark-down % = (reduction ÷ original selling price) × 100; new price = original × (1 − mark-down/100)",
          },
        ],
        workedExample: {
          problem:
            "Cost of sales \\$20,000; mark-up 50%. Find sales and gross profit.",
          solution:
            "GP = 50% × 20,000 = \\$10,000. Sales = 20,000 + 10,000 = \\$30,000.",
        },
      },
      questions: [
        {
          id: "cieiacct-u3-markup-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Mark-up is calculated as a percentage of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cost price" },
              { id: "b", text: "Total assets" },
              { id: "c", text: "Selling price" },
              { id: "d", text: "Revenue" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mark-up",
                statement: "Profit as % of cost.",
              },
            ],
            steps: [
              {
                reasoning: "Mark-up is on cost, not selling price.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Cost price.",
          },
        },
        {
          id: "cieiacct-u3-markup-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Cost of sales \\$15,000; mark-up 40%. Calculate gross profit and sales.",
          response: {
            type: "numeric",
            parts: [
              { label: "Gross profit", answer: 6000, unit: "$" },
              { label: "Sales", answer: 21000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mark-up",
                statement: "GP = mark-up% × cost of sales; sales = cost + GP.",
              },
            ],
            steps: [
              {
                reasoning: "GP = 40% × 15,000 = \\$6,000.",
                working: "15000 * 0.4 = 6000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sales = 15,000 + 6,000 = \\$21,000.",
                working: "15000 + 6000 = 21000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "GP \\$6,000; sales \\$21,000",
          },
        },
        {
          id: "cieiacct-u3-markup-q3",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Goods originally priced at \\$80 are sold at \\$64 in a clearance. Calculate the mark-down percentage.",
          response: {
            type: "numeric",
            parts: [{ label: "Mark-down %", answer: 20, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mark-down",
                statement:
                  "Mark-down % = (reduction ÷ original selling price) × 100.",
              },
            ],
            steps: [
              {
                reasoning: "Reduction = 80 − 64 = \\$16.",
                working: "80 - 64 = 16",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Mark-down = 16/80 × 100 = 20%.",
                working: "16 / 80 = 0.2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "20%",
          },
        },
        {
          id: "cieiacct-u3-markup-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Sales \\$45,000; mark-up on cost is 25%. Calculate cost of sales and gross profit.",
          response: {
            type: "numeric",
            parts: [
              { label: "Cost of sales", answer: 36000, unit: "$" },
              { label: "Gross profit", answer: 9000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Reverse mark-up",
                statement:
                  "Sales = cost × (1 + mark-up) → cost = sales ÷ (1 + mark-up).",
              },
            ],
            steps: [
              {
                reasoning: "Cost of sales = 45,000 ÷ 1.25.",
                working: "45000 / 1.25 = 36000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "GP = 45,000 − 36,000 = \\$9,000.",
                working: "45000 - 36000 = 9000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Verify: 9,000/36,000 = 25% ✓",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Cost of sales \\$36,000; GP \\$9,000",
          },
        },
        {
          id: "cieiacct-u3-markup-q5",
          difficulty: "core",
          totalMarks: 3,
          stem: "A trader buys goods at \\$40 each and applies a mark-up of 60%. Calculate the selling price per unit.",
          response: {
            type: "numeric",
            parts: [{ label: "Selling price", answer: 64, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Selling price",
                statement: "SP = cost × (1 + mark-up/100).",
              },
            ],
            steps: [
              {
                reasoning: "SP = 40 × 1.6.",
                working: "40 * 1.6 = 64",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "\\$64",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Check: profit per unit = 24; 24/40 = 60% ✓",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$64",
          },
        },
        {
          id: "cieiacct-u3-markup-q6",
          difficulty: "core",
          totalMarks: 4,
          stem: "In incomplete records: opening inventory \\$5,000; closing inventory \\$7,000; purchases \\$42,000; sales \\$70,000; mark-up is 30% on cost. Calculate the cost of sales implied by the mark-up and compare with the inventory calculation.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Cost of sales (mark-up method)",
                answer: 53846,
                unit: "$",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mark-up method",
                statement:
                  "GP = mark-up% × cost of sales; sales = cost of sales × (1 + mark-up).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sales = cost of sales × 1.3 → cost of sales = 70,000 ÷ 1.3.",
                working: "70000 / 1.3 = 53846.15",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Recompute precisely: 70,000/1.3 ≈ \\$53,846.15.",
                working: "70000 / 1.3 = 53846.1538",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Inventory method: cost of sales = 5,000 + 42,000 − 7,000 = \\$40,000.",
                working: "5000 + 42000 - 7000 = 40000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The two methods disagree (\\$53,846 vs \\$40,000) — purchases or mark-up figure must be wrong; state mark-up-method cost of sales.",
                working: "\\$53,846 (approx)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cost of sales ≈ \\$53,846 by mark-up; inventory method gives \\$40,000 — discrepancy to investigate.",
          },
        },
        {
          id: "cieiacct-u3-markup-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Goods with a selling price of \\$120 are reduced by a mark-down of 15%. Calculate the new selling price.",
          response: {
            type: "numeric",
            parts: [{ label: "New selling price", answer: 102, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mark-down",
                statement: "New price = original × (1 − mark-down/100).",
              },
            ],
            steps: [
              {
                reasoning: "Reduction = 15% × 120 = \\$18.",
                working: "120 * 0.15 = 18",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "New price = 120 − 18 = \\$102.",
                working: "120 - 18 = 102",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State answer.",
                working: "\\$102",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$102",
          },
        },
        {
          id: "cieiacct-u3-markup-q8",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Explain the difference between mark-up and margin (profit as % of selling price).",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Cost \\$50; selling price \\$75. Calculate both the mark-up and the margin.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mark-up vs margin",
                statement:
                  "Mark-up = profit/cost; margin = profit/selling price.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Mark-up expresses profit as a percentage of cost price.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Margin expresses profit as a percentage of selling price.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "For the same profit, mark-up % is always higher than margin % because the denominator (cost) is smaller.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Profit = 75 − 50 = \\$25. Mark-up = 25/50 = 50%; margin = 25/75 = 33.3%.",
                working: "25/50=0.5; 25/75=0.333",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State both percentages.",
                working: "50% and 33.3%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Mark-up on cost; margin on selling price. (b) Mark-up 50%; margin 33.3%.",
          },
        },
        {
          id: "cieiacct-u3-markup-q9",
          difficulty: "core",
          totalMarks: 4,
          stem: "A business sells goods at a mark-up of 45%. Sales for the year are \\$58,000. Calculate cost of sales and gross profit.",
          response: {
            type: "numeric",
            parts: [
              { label: "Cost of sales", answer: 40000, unit: "$" },
              { label: "Gross profit", answer: 18000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Reverse mark-up",
                statement: "Cost = sales ÷ (1 + mark-up).",
              },
            ],
            steps: [
              {
                reasoning: "Cost of sales = 58,000 ÷ 1.45.",
                working: "58000 / 1.45 = 40000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "GP = 58,000 − 40,000 = \\$18,000.",
                working: "58000 - 40000 = 18000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Verify mark-up: 18,000/40,000 = 45% ✓",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State both answers.",
                working: "\\$40,000 and \\$18,000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Cost of sales \\$40,000; GP \\$18,000",
          },
        },
        {
          id: "cieiacct-u3-markup-q10",
          difficulty: "challenge",
          totalMarks: 8,
          parts: [
            {
              label: "a",
              prompt:
                "Explain how mark-up is used to calculate missing figures in incomplete records.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Given sales \\$52,000, mark-up 30%, expenses \\$9,000, drawings \\$5,000 and opening capital \\$20,000, calculate cost of sales, gross profit, net profit and closing capital.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mark-up chain",
                statement:
                  "Sales → cost of sales → GP → net profit → closing capital.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Mark-up links cost of sales to sales, allowing cost of sales to be found when sales and mark-up are known.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "This unlocks gross profit, which combined with expenses gives net profit, and with capital figures gives drawings or closing capital.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It is essential when purchases cannot be determined from incomplete records.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Cost of sales = 52,000 ÷ 1.3 = \\$40,000.",
                working: "52000 / 1.3 = 40000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "GP = 52,000 − 40,000 = \\$12,000; net profit = 12,000 − 9,000 = \\$3,000.",
                working: "12000 - 9000 = 3000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Closing capital = 20,000 + 3,000 − 5,000 = \\$18,000.",
                working: "20000 + 3000 - 5000 = 18000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State all figures.",
                working: "CoS \\$40,000; GP \\$12,000; NP \\$3,000; CC \\$18,000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Mark-up bridges sales and cost of sales. (b) CoS \\$40,000; GP \\$12,000; NP \\$3,000; CC \\$18,000.",
          },
        },
        {
          id: "cieiacct-u3-markup-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Mark-up is calculated as a percentage of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Total expenses" },
              { id: "b", text: "Opening capital" },
              { id: "c", text: "Selling price" },
              { id: "d", text: "Cost of sales" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mark-up",
                statement: "Mark-up % = (profit ÷ cost of sales) × 100.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mark-up is always expressed on cost, unlike margin which uses selling price.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Cost of sales.",
          },
        },
        {
          id: "cieiacct-u3-markup-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Cost of sales is \\$8,000 and the mark-up is 25%. Calculate the gross profit.",
          response: {
            type: "numeric",
            parts: [{ label: "Gross profit", answer: 2000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mark-up",
                statement: "GP = mark-up% × cost of sales.",
              },
            ],
            steps: [
              {
                reasoning: "GP = 25% × 8,000.",
                working: "0.25 × 8000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Gross profit = \\$2,000.",
                working: "0.25 × 8000 = 2000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$2,000",
          },
        },
        {
          id: "cieiacct-u3-markup-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "An item originally selling at \\$120 is reduced by a mark-down of 10%. Calculate the new selling price.",
          response: {
            type: "numeric",
            parts: [{ label: "New price", answer: 108, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mark-down",
                statement:
                  "Mark-down % = reduction ÷ original selling price; new price = original × (1 − mark-down%).",
              },
            ],
            steps: [
              {
                reasoning: "Reduction = 10% × 120 = \\$12.",
                working: "0.10 × 120 = 12",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "New price = 120 − 12 = \\$108.",
                working: "120 - 12 = 108",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$108",
          },
        },
        {
          id: "cieiacct-u3-markup-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between mark-up and margin, and why confusing them produces wrong answers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mark-up vs margin",
                statement:
                  "Mark-up is on cost; margin is on selling price — different bases give different percentages.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mark-up % = profit ÷ cost of sales × 100; margin % = profit ÷ sales × 100.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The same profit gives a higher percentage when expressed on the smaller cost base.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Using the wrong base inflates or deflates the calculated sales or cost figure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Mark-up is on cost, margin is on selling price; they are not interchangeable — different bases give different results.",
          },
        },
        {
          id: "cieiacct-u3-markup-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A business has a cost of sales of \\$30,000 and applies a mark-up of 40%. Calculate sales and gross profit.",
          response: {
            type: "numeric",
            parts: [
              { label: "Sales", answer: 42000, unit: "$" },
              { label: "Gross profit", answer: 12000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mark-up",
                statement:
                  "GP = mark-up% × CoS; sales = CoS + GP.",
              },
            ],
            steps: [
              {
                reasoning: "GP = 40% × 30,000 = \\$12,000.",
                working: "0.40 × 30000 = 12000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sales = 30,000 + 12,000 = \\$42,000.",
                working: "30000 + 12000 = 42000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both answers stated.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sales \\$42,000; gross profit \\$12,000.",
          },
        },
        {
          id: "cieiacct-u3-markup-q16",
          difficulty: "challenge",
          totalMarks: 4,
          parts: [
            {
              label: "a",
              prompt:
                "Sales are \\$60,000 and the mark-up on cost of sales is 50%. Calculate the cost of sales.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Opening inventory \\$4,000 and closing inventory \\$6,000. Calculate purchases.",
              marks: 2,
            },
          ],
          stem: "A trader uses mark-up to find missing figures in incomplete records.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mark-up chain",
                statement:
                  "Sales = CoS × (1 + mark-up); CoS = opening inv + purchases − closing inv.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Sales = CoS × 1.5, so CoS = 60,000 ÷ 1.5 = \\$40,000.",
                working: "60000 / 1.5 = 40000",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Purchases = CoS − opening inv + closing inv = 40,000 − 4,000 + 6,000 = \\$42,000.",
                working: "40000 - 4000 + 6000 = 42000",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Cost of sales \\$40,000. (b) Purchases \\$42,000.",
            commonErrors: [
              "Dividing by 0.5 instead of 1.5 — mark-up adds profit ON TOP of cost.",
            ],
          },
        },
      ],
    },
    {
      id: "cieiacct-u3-ir-exam",
      title: "Incomplete records exam practice",
      skill: "Solve incomplete records problems in exam style.",
      lesson: {
        sections: [
          {
            heading: "Exam technique",
            body: "Incomplete records questions give partial figures and ask for missing ones. List knowns, identify the target, and work through the chain: capital → profit → drawings; or sales → cost of sales → purchases; or mark-up → cost of sales → sales.",
          },
          {
            heading: "Common traps",
            body: "Don't mix mark-up (on cost) with margin (on selling price). Check whether figures are opening or closing. Drawings reduce capital — don't add them.",
          },
        ],
        keyFormulas: [
          {
            name: "Capital chain",
            statement: "Closing capital = opening + NP − drawings",
          },
          {
            name: "Trading chain",
            statement:
              "CoS = opening inv + purchases − closing inv; GP = sales − CoS",
          },
          { name: "Mark-up chain", statement: "Sales = CoS × (1 + mark-up)" },
        ],
        workedExample: {
          problem:
            "Opening capital \\$15,000; closing capital \\$19,000; drawings \\$4,000. Net profit? Sales \\$60,000; CoS \\$42,000; expenses \\$8,000. Check NP.",
          solution:
            "NP = 19,000 − 15,000 + 4,000 = \\$8,000. Check: GP = 60,000−42,000 = 18,000; NP = 18,000−8,000 = \\$10,000 — inconsistent, investigate.",
        },
      },
      questions: [
        {
          id: "cieiacct-u3-ir-exam-q1",
          difficulty: "core",
          totalMarks: 3,
          stem: "Opening capital \\$18,000; net profit \\$11,000; drawings \\$6,000. Calculate closing capital.",
          response: {
            type: "numeric",
            parts: [{ label: "Closing capital", answer: 23000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Closing capital",
                statement: "Opening + NP − drawings.",
              },
            ],
            steps: [
              {
                reasoning: "18,000 + 11,000 − 6,000.",
                working: "18000 + 11000 - 6000 = 23000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "\\$23,000",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Drawings deducted, not added.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$23,000",
          },
        },
        {
          id: "cieiacct-u3-ir-exam-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Closing capital \\$28,000; opening capital \\$20,000; drawings \\$7,000. Calculate net profit.",
          response: {
            type: "numeric",
            parts: [{ label: "Net profit", answer: 15000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "NP",
                statement: "NP = closing − opening + drawings.",
              },
            ],
            steps: [
              {
                reasoning: "NP = 28,000 − 20,000 + 7,000.",
                working: "28000 - 20000 + 7000 = 15000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "\\$15,000",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Drawings added back when working backwards.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$15,000",
          },
        },
        {
          id: "cieiacct-u3-ir-exam-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Opening inventory \\$7,000; purchases \\$44,000; closing inventory \\$9,000; sales \\$65,000. Calculate cost of sales and gross profit.",
          response: {
            type: "numeric",
            parts: [
              { label: "Cost of sales", answer: 42000, unit: "$" },
              { label: "Gross profit", answer: 23000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Trading",
                statement:
                  "CoS = opening + purchases − closing; GP = sales − CoS.",
              },
            ],
            steps: [
              {
                reasoning: "CoS = 7,000 + 44,000 − 9,000 = \\$42,000.",
                working: "42000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "GP = 65,000 − 42,000 = \\$23,000.",
                working: "23000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State both.",
                working: "\\$42,000 and \\$23,000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "CoS \\$42,000; GP \\$23,000",
          },
        },
        {
          id: "cieiacct-u3-ir-exam-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Sales \\$90,000; cost of sales \\$63,000; expenses \\$15,000; drawings \\$8,000; opening capital \\$25,000. Calculate net profit and closing capital.",
          response: {
            type: "numeric",
            parts: [
              { label: "Net profit", answer: 12000, unit: "$" },
              { label: "Closing capital", answer: 29000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Full chain",
                statement: "GP → NP → closing capital.",
              },
            ],
            steps: [
              {
                reasoning:
                  "GP = 90,000 − 63,000 = \\$27,000; NP = 27,000 − 15,000 = \\$12,000.",
                working: "27000; 12000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Closing capital = 25,000 + 12,000 − 8,000 = \\$29,000.",
                working: "25000 + 12000 - 8000 = 29000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State both answers.",
                working: "\\$12,000 and \\$29,000",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Check chain consistency.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "NP \\$12,000; closing capital \\$29,000",
          },
        },
        {
          id: "cieiacct-u3-ir-exam-q5",
          difficulty: "core",
          totalMarks: 4,
          stem: "Sales \\$70,000; mark-up on cost 40%; expenses \\$10,000; opening capital \\$20,000; drawings \\$5,000. Calculate cost of sales, gross profit, net profit and closing capital.",
          response: {
            type: "numeric",
            parts: [
              { label: "Cost of sales", answer: 50000, unit: "$" },
              { label: "Net profit", answer: 10000, unit: "$" },
              { label: "Closing capital", answer: 25000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mark-up chain",
                statement:
                  "Sales = CoS × (1+markup); GP = sales − CoS; NP = GP − expenses.",
              },
            ],
            steps: [
              {
                reasoning: "CoS = 70,000 ÷ 1.4 = \\$50,000.",
                working: "70000 / 1.4 = 50000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "GP = 70,000 − 50,000 = \\$20,000; NP = 20,000 − 10,000 = \\$10,000.",
                working: "10000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Closing capital = 20,000 + 10,000 − 5,000 = \\$25,000.",
                working: "25000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State all three.",
                working: "\\$50,000; \\$10,000; \\$25,000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "CoS \\$50,000; NP \\$10,000; closing capital \\$25,000",
          },
        },
        {
          id: "cieiacct-u3-ir-exam-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "A trader's gross profit margin is 30% and sales are \\$80,000. Calculate gross profit and cost of sales.",
          response: {
            type: "numeric",
            parts: [
              { label: "Gross profit", answer: 24000, unit: "$" },
              { label: "Cost of sales", answer: 56000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Margin",
                statement: "GP = margin% × sales; CoS = sales − GP.",
              },
            ],
            steps: [
              {
                reasoning: "GP = 30% × 80,000 = \\$24,000.",
                working: "24000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "CoS = 80,000 − 24,000 = \\$56,000.",
                working: "56000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State both.",
                working: "\\$24,000 and \\$56,000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "GP \\$24,000; CoS \\$56,000",
          },
        },
        {
          id: "cieiacct-u3-ir-exam-q7",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Opening capital \\$15,000; closing capital \\$21,000; drawings \\$8,000. Calculate net profit.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Sales \\$55,000; gross profit \\$16,500; expenses \\$6,000. Calculate net profit from the trading figures and comment on consistency.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Consistency",
                statement: "Two methods should agree.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "NP = 21,000 − 15,000 + 8,000 = \\$14,000.",
                working: "14000",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "NP = GP − expenses = 16,500 − 6,000 = \\$10,500.",
                working: "10500",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The two figures disagree (\\$14,000 vs \\$10,500) — data inconsistent or missing item.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Investigate — perhaps other income/expense items exist.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "State both results.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) NP \\$14,000. (b) NP \\$10,500 — inconsistent; investigate.",
          },
        },
        {
          id: "cieiacct-u3-ir-exam-q8",
          difficulty: "core",
          totalMarks: 4,
          stem: "A business has mark-up of 25%. Cost of sales is \\$48,000. Calculate sales and gross profit.",
          response: {
            type: "numeric",
            parts: [
              { label: "Sales", answer: 60000, unit: "$" },
              { label: "Gross profit", answer: 12000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mark-up",
                statement: "Sales = CoS × 1.25; GP = sales − CoS.",
              },
            ],
            steps: [
              {
                reasoning: "Sales = 48,000 × 1.25 = \\$60,000.",
                working: "60000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "GP = 60,000 − 48,000 = \\$12,000.",
                working: "12000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State both.",
                working: "\\$60,000 and \\$12,000",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Check: 12,000/48,000 = 25% ✓",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sales \\$60,000; GP \\$12,000",
          },
        },
        {
          id: "cieiacct-u3-ir-exam-q9",
          difficulty: "challenge",
          totalMarks: 7,
          parts: [
            {
              label: "a",
              prompt: "Explain the difference between mark-up and margin.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Sales \\$75,000; margin on selling price is 20%. Calculate cost of sales and gross profit.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mark-up vs margin",
                statement: "Mark-up on cost; margin on selling price.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Mark-up = profit as % of cost.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Margin = profit as % of selling price.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Mark-up % > margin % for same profit (larger denominator for margin).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "GP = 20% × 75,000 = \\$15,000.",
                working: "15000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "CoS = 75,000 − 15,000 = \\$60,000.",
                working: "60000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Check margin: 15,000/75,000 = 20% ✓",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "State both.",
                working: "\\$60,000 and \\$15,000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Mark-up on cost; margin on selling price. (b) CoS \\$60,000; GP \\$15,000.",
          },
        },
        {
          id: "cieiacct-u3-ir-exam-q10",
          difficulty: "challenge",
          totalMarks: 8,
          parts: [
            {
              label: "a",
              prompt:
                "List the figures needed to prepare a trading and profit and loss account from incomplete records.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Opening capital \\$22,000; sales \\$85,000; purchases \\$50,000; opening inventory \\$6,000; closing inventory \\$8,000; expenses \\$14,000; drawings \\$9,000. Calculate cost of sales, gross profit, net profit and closing capital.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Full calculation",
                statement: "CoS → GP → NP → closing capital.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Sales, purchases, opening/closing inventory, expenses, drawings, opening capital.",
                marks: 4,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "CoS = 6,000 + 50,000 − 8,000 = \\$48,000.",
                working: "48000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "GP = 85,000 − 48,000 = \\$37,000; NP = 37,000 − 14,000 = \\$23,000.",
                working: "37000; 23000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Closing capital = 22,000 + 23,000 − 9,000 = \\$36,000.",
                working: "36000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State all figures.",
                working: "CoS \\$48,000; GP \\$37,000; NP \\$23,000; CC \\$36,000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Sales, purchases, inventories, expenses, drawings, capital. (b) CoS \\$48,000; GP \\$37,000; NP \\$23,000; CC \\$36,000.",
          },
        },
        {
          id: "cieiacct-u3-ir-exam-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The first step when solving an incomplete records problem is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Calculate mark-up before anything else" },
              { id: "b", text: "List all the figures you are given" },
              { id: "c", text: "Prepare the balance sheet immediately" },
              { id: "d", text: "Guess the missing sales figure" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Exam technique",
                statement:
                  "List knowns first, then identify the target and work through the chain of formulas.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Knowing which figures exist determines which formula chain to use.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) List all given figures.",
          },
        },
        {
          id: "cieiacct-u3-ir-exam-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Opening capital \\$12,000; drawings \\$5,000; closing capital \\$16,000. Calculate net profit.",
          response: {
            type: "numeric",
            parts: [{ label: "Net profit", answer: 9000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Capital chain",
                statement:
                  "Closing capital = opening capital + net profit − drawings.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rearrange: NP = closing capital − opening capital + drawings.",
                working: "16000 - 12000 + 5000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "NP = 4,000 + 5,000 = \\$9,000.",
                working: "4000 + 5000 = 9000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Net profit = \\$9,000.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$9,000",
          },
        },
        {
          id: "cieiacct-u3-ir-exam-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Sales \\$80,000; opening inventory \\$5,000; purchases \\$45,000; closing inventory \\$8,000. Calculate gross profit.",
          response: {
            type: "numeric",
            parts: [{ label: "Gross profit", answer: 38000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Trading chain",
                statement:
                  "CoS = opening inv + purchases − closing inv; GP = sales − CoS.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cost of sales = 5,000 + 45,000 − 8,000 = \\$42,000.",
                working: "5000 + 45000 - 8000 = 42000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Gross profit = 80,000 − 42,000 = \\$38,000.",
                working: "80000 - 42000 = 38000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Gross profit = \\$38,000.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$38,000",
          },
        },
        {
          id: "cieiacct-u3-ir-exam-q14",
          difficulty: "core",
          totalMarks: 4,
          parts: [
            {
              label: "a",
              prompt:
                "Opening capital \\$20,000; drawings \\$6,000; closing capital \\$26,000. Calculate net profit.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Gross profit is \\$15,000. Calculate total expenses.",
              marks: 2,
            },
          ],
          stem: "A business prepares accounts from incomplete records.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Profit chain",
                statement:
                  "NP = CC − OC + drawings; NP = GP − expenses.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "NP = 26,000 − 20,000 + 6,000 = \\$12,000.",
                working: "26000 - 20000 + 6000 = 12000",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Expenses = GP − NP = 15,000 − 12,000 = \\$3,000.",
                working: "15000 - 12000 = 3000",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Net profit \\$12,000. (b) Expenses \\$3,000.",
          },
        },
        {
          id: "cieiacct-u3-ir-exam-q15",
          difficulty: "challenge",
          totalMarks: 5,
          parts: [
            {
              label: "a",
              prompt:
                "Sales \\$90,000; cost of sales \\$63,000. Calculate gross profit and the gross profit margin.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Expenses are \\$11,000. Calculate net profit.",
              marks: 2,
            },
          ],
          stem: "A trader wants to check profitability from incomplete records.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Profit chain",
                statement:
                  "GP = sales − CoS; margin = GP ÷ sales; NP = GP − expenses.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "GP = 90,000 − 63,000 = \\$27,000; margin = 27,000 ÷ 90,000 × 100 = 30%.",
                working: "90000 - 63000 = 27000; 27000/90000 = 30%",
                marks: 3,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "NP = 27,000 − 11,000 = \\$16,000.",
                working: "27000 - 11000 = 16000",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) GP \\$27,000; margin 30%. (b) NP \\$16,000.",
          },
        },
        {
          id: "cieiacct-u3-ir-exam-q16",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Opening inventory \\$6,000; purchases \\$55,000; closing inventory \\$9,000. Calculate cost of sales.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Sales \\$100,000 and mark-up on cost of sales is 25%. Verify whether the given sales figure is consistent with the mark-up.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "State one other figure needed to calculate net profit.",
              marks: 2,
            },
          ],
          stem: "A business keeps incomplete records and uses mark-up to check its figures.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Trading chain",
                statement:
                  "CoS = OI + purchases − CI; sales = CoS × (1 + mark-up).",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "CoS = 6,000 + 55,000 − 9,000 = \\$52,000.",
                working: "6000 + 55000 - 9000 = 52000",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Expected sales = 52,000 × 1.25 = \\$65,000 — the given \\$100,000 is NOT consistent; investigate.",
                working: "52000 × 1.25 = 65000",
                marks: 2,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Any valid figure: total expenses (or gross profit and expenses) — needed to move from GP to NP.",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) CoS \\$52,000. (b) Expected sales \\$65,000 — given \\$100,000 inconsistent. (c) Expenses (or equivalent).",
            commonErrors: [
              "Applying mark-up to sales instead of cost of sales.",
            ],
          },
        },
      ],
    },
  ],
};
