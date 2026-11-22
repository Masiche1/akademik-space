import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "eiasacct-u2-lesson-2-1",
  code: "2-1",
  title: "Sources of Accounting Information",
  goal: "I CAN identify sources of accounting data and their reliability.",
  standards: [
    "Edexcel IAS Accounting 9AC01 Unit 2 — Sources and Recording of Data",
  ],
  vocabulary: [
    {
      term: "Source document",
      definition: "Original record of transaction — invoice, receipt.",
    },
    {
      term: "Invoice",
      definition: "Document requesting payment for goods/services.",
    },
    { term: "Receipt", definition: "Proof of payment received." },
    { term: "Credit note", definition: "Document reducing amount owed." },
    {
      term: "Bank statement",
      definition: "Record of bank account transactions.",
    },
    { term: "Till roll", definition: "Record of cash transactions." },
  ],
  concepts: [
    {
      id: "eiasacct-u2-sources",
      title: "Source Documents",
      skill: "Identify and use source documents for recording.",
      lesson: {
        sections: [
          {
            heading: "Source documents",
            body: "**Invoice**: seller to buyer — amount owed, details. **Receipt**: proof of payment — cash/bank received. **Credit note**: reduces amount owed — returns, discounts. **Debit note**: increases amount owed — additional charges. **Till roll**: cash register record — daily takings.\n\n**Purpose**: evidence for transactions — audit trail, verification, dispute resolution.",
          },
          {
            heading: "Document flow",
            body: "**Purchase**: invoice received → enter in books → pay → receipt. **Sale**: invoice sent → enter in books → receive payment → receipt. **Returns**: credit note issued → reduces amount owed.\n\n**Reliability**: original documents more reliable than secondary records — always check source.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Customer returns goods. Document?",
          solution: "Credit note.",
        },
      },
      questions: [
        {
          id: "eiasacct-u2-src-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a source document?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ledger" },
              { id: "b", text: "Financial statement" },
              { id: "c", text: "Journal" },
              { id: "d", text: "Original record of transaction" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Source document",
                statement: "Original record.",
              },
            ],
            steps: [
              { reasoning: "Source = original.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Original record",
            commonErrors: ["Statement confused."],
          },
        },
        {
          id: "eiasacct-u2-src-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two source documents.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Source documents",
                statement: "Invoice, receipt.",
              },
            ],
            steps: [
              {
                reasoning: "Invoice — request payment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Receipt — proof of payment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Credit note — reduces amount owed.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Invoice, receipt, credit note, debit note.",
            commonErrors: ["Only one.", "Wrong document."],
          },
        },
        {
          id: "eiasacct-u2-src-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why source documents are important.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Source importance",
                statement: "Evidence+audit.",
              },
            ],
            steps: [
              {
                reasoning: "Evidence — proof transaction occurred.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Audit trail — trace transactions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Verification — check accuracy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Dispute resolution — settle disagreements.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Evidence+audit+verify+dispute.",
            commonErrors: ["Not needed.", "One reason."],
          },
        },
        {
          id: "eiasacct-u2-src-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Customer returns £500 of goods.",
          parts: [
            { label: "a", prompt: "Which document?", marks: 4 },
            { label: "b", prompt: "Effect on accounts?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Returns", statement: "Credit note." },
            ],
            steps: [
              {
                reasoning: "(a) Credit note — reduces amount owed.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Issued by seller to buyer.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Sales returns account debited £500.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Receivables credited £500 — reduce owed.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) credit note (b) returns+receivables",
            commonErrors: ["Wrong document.", "Wrong accounts."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u2-recording",
      title: "Recording Transactions",
      skill: "Record transactions accurately in books.",
      lesson: {
        sections: [
          {
            heading: "Recording process",
            body: "**Verify**: check source document — correct amount, date, parties. **Classify**: determine account type — asset, liability, income, expense. **Record**: enter in journal — debit and credit. **Post**: transfer to ledger — update balances.\n\n**Accuracy**: double-check amounts, dates, account codes — errors cause imbalance.",
          },
          {
            heading: "Common transactions",
            body: "**Cash sales**: debit cash, credit sales. **Credit sales**: debit receivables, credit sales. **Cash purchases**: debit purchases, credit cash. **Credit purchases**: debit purchases, credit payables. **Expenses**: debit expense, credit cash/payables.\n\n**Returns**: debit sales returns, credit receivables; debit payables, credit purchases returns.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Sell goods £800 on credit. Record?",
          solution: "Debit Receivables £800, Credit Sales £800.",
        },
      },
      questions: [
        {
          id: "eiasacct-u2-rec-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the first step in recording a transaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Calculate balance" },
              { id: "b", text: "Post to ledger" },
              { id: "c", text: "Prepare statements" },
              { id: "d", text: "Verify source document" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Recording", statement: "Verify first." },
            ],
            steps: [
              { reasoning: "Verify source first.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Verify",
            commonErrors: ["Ledger first."],
          },
        },
        {
          id: "eiasacct-u2-rec-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Record: cash sale £500.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Cash sale",
                statement: "Dr cash, Cr sales.",
              },
            ],
            steps: [
              {
                reasoning: "Debit Cash £500 — money received.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Credit Sales £500 — revenue earned.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Check: debits = credits.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Dr Cash £500, Cr Sales £500.",
            commonErrors: ["Wrong accounts.", "Wrong sides."],
          },
        },
        {
          id: "eiasacct-u2-rec-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why credit purchases use payables account.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Payables",
                statement: "Amount owed.",
              },
            ],
            steps: [
              {
                reasoning: "Credit purchase — owe supplier, not paid yet.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Payables = liability — amount owed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Credit Payables — increases liability.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "When paid — debit payables, credit cash.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Owe supplier → liability account.",
            commonErrors: ["Cash used.", "No liability."],
          },
        },
        {
          id: "eiasacct-u2-rec-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Record: buy stock £2,000 on credit, pay £500 cash deposit.",
          parts: [
            { label: "a", prompt: "Initial entry.", marks: 4 },
            { label: "b", prompt: "Payment entry.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Partial payment",
                statement: "Credit+deposit.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Debit Purchases £2,000, Credit Payables £2,000.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Full credit amount recorded.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Debit Payables £500, Credit Cash £500.",
                marks: 3,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Remaining payable = £1,500.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) Dr purch, Cr payables £2k (b) Dr payables, Cr cash £500",
            commonErrors: ["Partial credit.", "Wrong payment."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u2-adjustments",
      title: "Adjustments and Accruals",
      skill: "Make adjusting entries for accruals and prepayments.",
      lesson: {
        sections: [
          {
            heading: "Adjusting entries",
            body: "**Accruals**: expenses incurred but not paid — wages owed, interest accrued. **Prepayments**: expenses paid in advance — insurance, rent. **Depreciation**: allocate cost of asset over useful life. **Bad debts**: uncollectable receivables.\n\n**Purpose**: match revenues and expenses to correct period — accruals basis.",
          },
          {
            heading: "Adjusting examples",
            body: "**Accrued wages**: debit wages expense, credit accrued wages. **Prepaid insurance**: debit prepaid insurance, credit insurance expense (adjust). **Depreciation**: debit depreciation expense, credit accumulated depreciation.\n\n**Year-end**: adjust before preparing financial statements — ensure accurate profit.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Insurance paid £1,200 for 12 months, 3 months used. Prepaid?",
          solution: "£900 prepaid (9 months remaining).",
        },
      },
      questions: [
        {
          id: "eiasacct-u2-adj-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an accrual?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Expense incurred but not paid" },
              { id: "b", text: "Cash received" },
              { id: "c", text: "Asset purchase" },
              { id: "d", text: "Payment in advance" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Accrual",
                statement: "Incurred not paid.",
              },
            ],
            steps: [
              { reasoning: "Accrual = incurred.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Incurred not paid",
            commonErrors: ["Prepayment confused."],
          },
        },
        {
          id: "eiasacct-u2-adj-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two adjusting entries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Adjustments",
                statement: "Accruals, prepayments, depreciation.",
              },
            ],
            steps: [
              {
                reasoning: "Accrued expenses — wages owed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Prepaid expenses — insurance advance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Depreciation — allocate asset cost.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Accruals, prepayments, depreciation, bad debts.",
            commonErrors: ["Only one.", "Wrong adjustment."],
          },
        },
        {
          id: "eiasacct-u2-adj-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why adjustments are needed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Adjustment purpose",
                statement: "Match revenues+expenses.",
              },
            ],
            steps: [
              {
                reasoning: "Accruals basis — match to period incurred.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Accruals — include expenses not yet paid.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Prepayments — exclude expenses not yet used.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Accurate profit — true and fair view.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Match revenues+expenses to period.",
            commonErrors: ["Not needed.", "Cash basis."],
          },
        },
        {
          id: "eiasacct-u2-adj-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Insurance £1,200 paid, only 6 months used.",
          parts: [
            { label: "a", prompt: "Calculate expense and prepaid.", marks: 4 },
            { label: "b", prompt: "Show adjusting entry.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Prepayment", statement: "Split cost." },
            ],
            steps: [
              {
                reasoning: "(a) Used 6/12 = £600 expense; prepaid 6/12 = £600.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Expense this period = £600 only.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Debit Prepaid Insurance £600, Credit Insurance Expense £600.",
                marks: 3,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Moves unused portion to asset.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) £600 exp, £600 prepaid (b) Dr prepaid, Cr expense",
            commonErrors: ["All expense.", "Wrong entry."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u2-errors",
      title: "Errors and Suspense Accounts",
      skill: "Identify and correct bookkeeping errors.",
      lesson: {
        sections: [
          {
            heading: "Error types",
            body: "**Omission**: transaction not recorded. **Commission**: wrong account, same amount. **Original entry**: wrong amount both sides. **Reversal**: debit/credit swapped. **Principle**: wrong classification — capital vs revenue. **Compensating**: two errors cancel out.\n\n**Suspense account**: temporary account — holds errors until found, then cleared.",
          },
          {
            heading: "Finding errors",
            body: "**Trial balance**: finds arithmetic errors. **Suspense**: balance difference placed here. **Investigation**: check journal, ledger, source documents — find discrepancy.\n\n**Correction**: reverse wrong entry, post correct entry — clear suspense account.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Trial balance off by £100. Where to look?",
          solution: "Suspense account — investigate postings.",
        },
      },
      questions: [
        {
          id: "eiasacct-u2-err-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a suspense account?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Asset account" },
              { id: "b", text: "Permanent account" },
              { id: "c", text: "Temporary account for errors" },
              { id: "d", text: "Revenue account" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Suspense",
                statement: "Temporary error account.",
              },
            ],
            steps: [
              { reasoning: "Suspense = temporary.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Temporary",
            commonErrors: ["Permanent confused."],
          },
        },
        {
          id: "eiasacct-u2-err-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two error types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Error types",
                statement: "Omission, commission, reversal.",
              },
            ],
            steps: [
              {
                reasoning: "Omission — not recorded.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Commission — wrong account.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reversal — debit/credit swapped.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Omission, commission, reversal, principle.",
            commonErrors: ["Only one.", "Wrong error."],
          },
        },
        {
          id: "eiasacct-u2-err-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why trial balance might balance despite errors.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hidden errors",
                statement: "Compensating.",
              },
            ],
            steps: [
              {
                reasoning: "Omission — both sides missing.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Commission — wrong account, same amount.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Compensating — two errors cancel out.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Trial balance only checks arithmetic — not accuracy.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Omission+commission+compensating.",
            commonErrors: ["No errors.", "One error."],
          },
        },
        {
          id: "eiasacct-u2-err-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Trial balance off by £250 — suspense account used.",
          parts: [
            { label: "a", prompt: "What does suspense show?", marks: 4 },
            { label: "b", prompt: "How to correct?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Suspense correction",
                statement: "Find+clear.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Suspense shows £250 imbalance — error exists.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Temporary — must be cleared before statements.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Investigate — check journal, ledger, documents.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Correct error — reverse wrong, post correct, clear suspense.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) £250 error (b) investigate+correct+clear",
            commonErrors: ["Ignore.", "No correction."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u2-summary",
      title: "Recording Data Summary",
      skill: "Summarise sources and recording.",
      lesson: {
        sections: [
          {
            heading: "Summary",
            body: "**Source documents**: invoices, receipts, credit notes — evidence. **Recording**: verify, classify, record, post. **Adjustments**: accruals, prepayments, depreciation. **Errors**: omission, commission, reversal — suspense account.\n\n**Key idea**: accurate recording is foundation — errors propagate to statements.",
          },
          {
            heading: "Exam preparation",
            body: "**Apply**: record transactions, make adjustments, correct errors. **Evaluate**: source reliability, error impact, adjustment necessity. **Analyse**: transaction types, document flow, error detection.\n\n**Key concepts**: source documents, double-entry, accruals, prepayments, suspense.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "All transactions recorded accurately. Result?",
          solution: "Reliable financial statements.",
        },
      },
      questions: [
        {
          id: "eiasacct-u2-sum-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the purpose of source documents?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Marketing" },
              { id: "b", text: "Evidence of transactions" },
              { id: "c", text: "Legal only" },
              { id: "d", text: "Decoration" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Source purpose",
                statement: "Evidence.",
              },
            ],
            steps: [
              { reasoning: "Source = evidence.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Evidence",
            commonErrors: ["Decoration confused."],
          },
        },
        {
          id: "eiasacct-u2-sum-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two adjusting entries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Adjustments",
                statement: "Accruals+prepayments.",
              },
            ],
            steps: [
              {
                reasoning: "Accrued expenses — wages owed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Prepaid expenses — insurance advance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Depreciation — asset cost allocation.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Accruals, prepayments, depreciation.",
            commonErrors: ["Only one.", "Wrong adjustment."],
          },
        },
        {
          id: "eiasacct-u2-sum-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why accurate recording matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Recording importance",
                statement: "Foundation.",
              },
            ],
            steps: [
              {
                reasoning: "Errors propagate — affect statements.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Decisions based on data — accurate data needed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Compliance — legal requirements.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Trust — stakeholders rely on accuracy.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Errors+decisions+compliance+trust.",
            commonErrors: ["Not important.", "One reason."],
          },
        },
        {
          id: "eiasacct-u2-sum-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate importance of adjustments.",
          parts: [
            { label: "a", prompt: "Why needed?", marks: 4 },
            { label: "b", prompt: "Impact if skipped?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Adjustments",
                statement: "Accurate profit.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Match revenues+expenses to period.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Accruals basis — not cash basis.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Profit overstated/understated — misleading.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Tax wrong — overpay or underpay.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) match+accruals (b) profit+tax wrong",
            commonErrors: ["Not needed.", "No impact."],
          },
        },
      ],
    },
  ],
};
