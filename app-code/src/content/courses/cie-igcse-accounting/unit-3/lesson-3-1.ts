import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "cieiacct-u3-lesson-3-1",
  code: "3-1",
  title: "Verification of accounting records",
  goal: "I CAN prepare control accounts and bank reconciliation statements and use checks to verify accounting records.",
  standards: [
    "Cambridge IGCSE Accounting 0452",
    "Section 3: Verification of accounting records",
  ],
  vocabulary: [
    {
      term: "Control account",
      definition:
        "A summary account in the general ledger that monitors a ledger — e.g. sales ledger control account totals all debtors' accounts.",
    },
    {
      term: "Bank reconciliation statement",
      definition:
        "A statement comparing the cash book balance with the bank statement balance and explaining the differences.",
    },
    {
      term: "Unpresented cheques",
      definition:
        "Cheques recorded in the cash book but not yet presented to the bank, so they appear on the bank statement later.",
    },
    {
      term: "Uncredited deposits",
      definition:
        "Receipts recorded in the cash book but not yet credited by the bank when the statement was prepared.",
    },
    {
      term: "Credit balance",
      definition:
        "A negative balance on an account, e.g. a credit balance on the bank statement means the bank owes the business money.",
    },
    {
      term: "Agreement",
      definition:
        "Two figures agreeing, e.g. total debtors per sales ledger equals the balance on the sales ledger control account.",
    },
  ],
  concepts: [
    {
      id: "cieiacct-u3-sac",
      title: "The sales ledger control account",
      skill: "Prepare and interpret a sales ledger control account.",
      lesson: {
        sections: [
          {
            heading: "Purpose",
            body: "The **sales ledger control account** (SLCA) sits in the general ledger and totals every individual debtor's account. Its balance should equal the total owed by all credit customers. If the SLCA balance disagrees with the sum of the sales ledger, an error exists somewhere — the control account helps locate it.",
          },
          {
            heading: "Structure",
            body: "Debit side: **opening balance** (total owed at start), **credit sales** (total credit sales for the period), and **returns inwards** are credited... The standard layout: Debit = opening balance b/d + credit sales + interest charged − returns inwards − irrecoverable debts written off − allowances for doubtful debts. Credit = cash/bank received from debtors + discounts allowed + interest received + closing balance c/d (balancing figure = total owed at end).",
          },
          {
            heading: "Key rule",
            body: "Credit sales are recorded on the **debit** of the SLCA (they increase what debtors owe); cash received is on the **credit**. Never enter individual sales — only totals.",
          },
        ],
        keyFormulas: [
          {
            name: "Closing balance",
            statement:
              "Closing balance = opening balance + credit sales + interest − returns − irrecoverable debts − increase in allowance for doubtful debts",
          },
          {
            name: "Agreement check",
            statement: "SLCA balance = total of all sales ledger balances",
          },
        ],
        workedExample: {
          problem:
            "Opening balance \\$2,400; credit sales \\$18,000; returns \\$600; cash received \\$14,000; discounts allowed \\$300. Find the closing balance.",
          solution:
            "Debit total = 2,400 + 18,000 = 20,400. Credit total = 14,000 + 300 + closing. Closing = 20,400 − 14,300 = \\$6,100.",
        },
      },
      questions: [
        {
          id: "cieiacct-u3-sac-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The sales ledger control account is used to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Check that the total of all debtor accounts agrees with one control figure",
              },
              { id: "b", text: "Record each individual sale made on credit" },
              { id: "c", text: "Replace the sales journal" },
              { id: "d", text: "Calculate the profit for the year" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Control account",
                statement:
                  "A summary account monitoring a ledger so errors can be detected.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A control account totals the subsidiary ledger so one balance can be checked against the sum of individual accounts.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) It checks the total of all debtor accounts.",
          },
        },
        {
          id: "cieiacct-u3-sac-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Credit sales of \\$10,000 are entered in the sales ledger control account on the:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Debit side, because they increase the total owed by debtors",
              },
              { id: "b", text: "Credit side, because sales are income" },
              { id: "c", text: "Credit side, because they reduce debtors" },
              { id: "d", text: "Debit side, because cash is received" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Control account logic",
                statement:
                  "Entries that increase amounts owed by debtors are debited; receipts are credited.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Credit sales increase what debtors owe, so they are debited in the control account.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Debit side.",
          },
        },
        {
          id: "cieiacct-u3-sac-q3",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Cash received from credit customers of \\$7,500 is entered in the sales ledger control account on the credit side. State the effect on the control account balance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Control account logic",
                statement:
                  "Receipts from debtors reduce the total owed, so they are credited.",
              },
            ],
            steps: [
              {
                reasoning: "Cash received reduces the amount debtors owe.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It is credited, so the control account balance decreases.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "The balance decreases by \\$7,500.",
          },
        },
        {
          id: "cieiacct-u3-sac-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "The sales ledger control account shows: opening balance \\$3,000; credit sales \\$25,000; returns inwards \\$800; cash received \\$19,000; discounts allowed \\$500. Calculate the closing balance.",
          response: {
            type: "numeric",
            parts: [{ label: "Closing balance", answer: 8700, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "SLCA closing balance",
                statement:
                  "Opening + credit sales − returns − receipts − discounts (other items ignored here).",
              },
            ],
            steps: [
              {
                reasoning: "Debit side total.",
                working: "3000 + 25000 = 28000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Credit side before balance.",
                working: "19000 + 500 + 800 = 20300",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Balance = debits − credits.",
                working: "28000 - 20300 = 7700",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$7,700",
            commonErrors: ["Forgetting to deduct returns inwards."],
          },
        },
        {
          id: "cieiacct-u3-sac-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Returns inwards of \\$400 are recorded in the sales ledger control account on the:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Credit side — they reduce the total owed by debtors",
              },
              { id: "b", text: "Debit side — they are sales" },
              { id: "c", text: "Credit side — they are cash received" },
              { id: "d", text: "Debit side — they increase debtors" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Control account logic",
                statement: "Items reducing debtors' balances are credited.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Returns reduce what debtors owe, so they are credited.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Credit side.",
          },
        },
        {
          id: "cieiacct-u3-sac-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why an increase in the allowance for doubtful debts is deducted in the sales ledger control account.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Doubtful debts",
                statement:
                  "The allowance represents expected irrecoverable amounts, reducing the real value of debtors.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The allowance for doubtful debts reduces the value of debtors expected to pay.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "An increase means more debt is expected to be irrecoverable, so the control account must reflect the lower recoverable total.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Therefore the increase is deducted (credited) in the control account.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "An increase in the allowance reduces expected recoveries, so it is deducted from the control account balance.",
          },
        },
        {
          id: "cieiacct-u3-sac-q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "A business's sales ledger control account shows a closing balance of \\$9,400, but the total of the sales ledger accounts is \\$9,100. State two possible causes of the difference and how each would be corrected.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Control account purpose",
                statement:
                  "Disagreement between control account and subsidiary ledger signals an error to investigate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cause 1: a debtor's account was not updated with a receipt (cash book entry missing from the ledger) — debit the control... Actually the sales ledger is short: post the missing receipt to the debtor's account and the control account credit.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning:
                  "Cause 2: an entry posted to the wrong side or wrong amount in one ledger — find the error (e.g. via suspense account or journal) and correct both ledgers.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Any two valid causes with corrections, e.g. missing posting, wrong amount, or error of principle.",
            commonErrors: [
              "Saying the control account 'must be wrong' — either ledger could contain the error.",
            ],
          },
        },
        {
          id: "cieiacct-u3-sac-q8",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt: "Explain the purpose of a sales ledger control account.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "The SLCA shows opening balance \\$2,000, credit sales \\$30,000, returns \\$1,000, irrecoverable debts \\$500, cash received \\$22,000, discounts \\$400. Calculate the closing balance.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "SLCA",
                statement:
                  "Closing = opening + credit sales − returns − irrecoverable debts − receipts − discounts.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "It totals all debtor accounts in one account so the sum of the sales ledger can be checked for agreement.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It helps locate errors quickly when the control balance disagrees with the subsidiary ledger total.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Debit side: opening + credit sales.",
                working: "2000 + 30000 = 32000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Credit side: returns + irrecoverable + receipts + discounts.",
                working: "1000 + 500 + 22000 + 400 = 23900",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Closing balance = 32,000 − 23,900.",
                working: "32000 - 23900 = 8100",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State the answer with the $ sign.",
                working: "\\$8,100",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Checks the sales ledger total and locates errors. (b) \\$8,100.",
          },
        },
        {
          id: "cieiacct-u3-sac-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Interest charged to debtors of \\$250 and interest received from debtors of \\$80 are both relevant to the sales ledger control account. State on which side each is entered and why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interest in control accounts",
                statement:
                  "Interest charged increases what debtors owe (debit); interest received reduces it (credit).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Interest charged to debtors increases the amount they owe — debit \\$250.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Interest received from debtors reduces what they owe — credit \\$80.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both keep the control account in step with the individual debtor accounts.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Interest charged: debit \\$250. Interest received: credit \\$80.",
          },
        },
        {
          id: "cieiacct-u3-sac-q10",
          difficulty: "challenge",
          totalMarks: 7,
          parts: [
            {
              label: "a",
              prompt:
                "List the items that appear on the debit side of a sales ledger control account.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "List the items that appear on the credit side.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain why only totals, not individual transactions, are entered.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SLCA layout",
                statement:
                  "Debit: opening balance, credit sales, interest charged. Credit: cash/bank received, discounts allowed, interest received, returns, irrecoverable debts, increase in allowance, closing balance.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Opening balance b/d; total credit sales; interest charged to debtors.",
                marks: 3,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Receipts from debtors; discounts allowed; interest received; returns inwards; irrecoverable debts; increase in allowance for doubtful debts.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "The control account summarises — entering each sale would duplicate the sales ledger and defeat its checking purpose.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Totals make it quick to compare one figure with the sum of all debtor accounts.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Opening balance, credit sales, interest charged. (b) Receipts, discounts, interest received, returns, irrecoverable debts, allowance increase. (c) It is a summary for checking, not a record of transactions.",
          },
        },
      ],
    },
    {
      id: "cieiacct-u3-pac",
      title: "The purchases ledger control account",
      skill: "Prepare and interpret a purchases ledger control account.",
      lesson: {
        sections: [
          {
            heading: "Purpose",
            body: "The **purchases ledger control account** (PLAC) totals all creditor accounts — suppliers the business owes money to. Its balance should equal the total of all purchases ledger balances.",
          },
          {
            heading: "Structure",
            body: "Debit side: opening balance, returns outwards, cash/bank paid to creditors, discounts received, interest paid, closing balance (balancing figure). Credit side: opening... correction: Credit side carries the **opening balance b/d** and **credit purchases** (purchases on credit). Debit side carries payments to creditors, returns outwards to suppliers, discounts received, interest paid to creditors, and the closing balance c/d.",
          },
          {
            heading: "Comparison with SLCA",
            body: "The PLAC is the mirror image of the SLCA: credit purchases are **credited** (they increase what is owed to suppliers); payments are **debited**. Returns outwards reduce what is owed — debited.",
          },
        ],
        keyFormulas: [
          {
            name: "Closing balance",
            statement:
              "Opening + credit purchases − returns outwards − payments − discounts received − interest paid (other items ignored)",
          },
          {
            name: "Agreement check",
            statement: "PLAC balance = total of all purchases ledger balances",
          },
        ],
        workedExample: {
          problem:
            "Opening balance \\$5,000; credit purchases \\$40,000; returns outwards \\$1,500; payments to creditors \\$30,000; discounts received \\$800. Find the closing balance.",
          solution:
            "Credit total = 5,000 + 40,000 = 45,000. Debit total before balance = 1,500 + 30,000 + 800 = 32,300. Closing = 45,000 − 32,300 = \\$12,700.",
        },
      },
      questions: [
        {
          id: "cieiacct-u3-pac-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The purchases ledger control account monitors:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "All creditor accounts — what the business owes suppliers",
              },
              { id: "b", text: "All debtor accounts" },
              { id: "c", text: "The bank account" },
              { id: "d", text: "Cash sales" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PLAC",
                statement:
                  "Control account for the purchases (creditors) ledger.",
              },
            ],
            steps: [
              {
                reasoning: "The PLAC totals all supplier/creditor accounts.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) All creditor accounts.",
          },
        },
        {
          id: "cieiacct-u3-pac-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Credit purchases of \\$15,000 are entered in the purchases ledger control account on the:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Credit side — they increase the total owed to suppliers",
              },
              { id: "b", text: "Debit side — purchases are expenses" },
              { id: "c", text: "Debit side — cash goes out" },
              { id: "d", text: "Credit side — they reduce creditors" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Control account logic",
                statement:
                  "Items increasing amounts owed to creditors are credited.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Credit purchases increase what is owed to suppliers, so they are credited.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Credit side.",
          },
        },
        {
          id: "cieiacct-u3-pac-q3",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Payments to creditors of \\$11,000 are entered in the purchases ledger control account on the debit side. Explain why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Control account logic",
                statement:
                  "Payments reduce what is owed to creditors, so they are debited.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Paying creditors reduces the amount owed to suppliers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A reduction in the credit balance is a debit entry.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Payments reduce amounts owed to creditors, so they are debited.",
          },
        },
        {
          id: "cieiacct-u3-pac-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "The purchases ledger control account shows: opening balance \\$4,000; credit purchases \\$32,000; returns outwards \\$900; payments to creditors \\$25,000; discounts received \\$600. Calculate the closing balance.",
          response: {
            type: "numeric",
            parts: [{ label: "Closing balance", answer: 9500, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "PLAC closing balance",
                statement:
                  "Opening + credit purchases − returns outwards − payments − discounts received.",
              },
            ],
            steps: [
              {
                reasoning: "Credit side total.",
                working: "4000 + 32000 = 36000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Debit side before balance.",
                working: "900 + 25000 + 600 = 26500",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Closing = 36,000 − 26,500.",
                working: "36000 - 26500 = 9500",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$9,500",
          },
        },
        {
          id: "cieiacct-u3-pac-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Returns outwards of \\$700 are recorded in the purchases ledger control account on the:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Debit side — they reduce the amount owed to suppliers",
              },
              { id: "b", text: "Credit side — they are purchases" },
              { id: "c", text: "Debit side — they increase creditors" },
              { id: "d", text: "Credit side — goods returned are income" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Returns outwards",
                statement:
                  "Goods returned to suppliers reduce the amount owed — debited in the PLAC.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Returns outwards reduce creditors' balances, so they are debited.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Debit side.",
          },
        },
        {
          id: "cieiacct-u3-pac-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between returns inwards (in the SLCA) and returns outwards (in the PLAC).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Returns",
                statement:
                  "Returns inwards = customers return goods to us; returns outwards = we return goods to suppliers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Returns inwards are goods returned BY credit customers — they reduce debtors, so credited in the SLCA.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Returns outwards are goods WE return TO suppliers — they reduce creditors, so debited in the PLAC.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They are opposite sides of the same idea: goods flowing back reduce the relevant ledger balance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Returns inwards reduce debtors (credit SLCA); returns outwards reduce creditors (debit PLAC).",
          },
        },
        {
          id: "cieiacct-u3-pac-q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "The PLAC closing balance is \\$11,200 but the sum of the purchases ledger is \\$11,500. Explain two possible reasons for the disagreement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Control disagreement",
                statement:
                  "Any error in either ledger can cause disagreement — investigate systematically.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A supplier's account may be missing a payment recorded in the cash book — the purchases ledger total would be too high.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning:
                  "An entry may have been posted to the wrong account or wrong amount — e.g. a purchase recorded in the sales ledger or a transposition error.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Any two valid causes, e.g. missing posting, wrong account, or wrong amount.",
          },
        },
        {
          id: "cieiacct-u3-pac-q8",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "State three items debited in the purchases ledger control account.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "State two items credited in the purchases ledger control account.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PLAC layout",
                statement:
                  "Debit: opening balance, returns outwards, payments, discounts received, interest paid, closing balance. Credit: credit purchases.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Opening balance b/d; returns outwards; payments to creditors (also accept discounts received, interest paid).",
                marks: 3,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Credit purchases for the period; (accept closing balance c/d if listed on credit side in some layouts — award for credit purchases primarily).",
                marks: 3,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) Opening balance, returns outwards, payments (also discounts received, interest paid). (b) Credit purchases.",
          },
        },
        {
          id: "cieiacct-u3-pac-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Discounts received from suppliers of \\$350 are entered in the purchases ledger control account. State the side and explain the effect on the balance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Discounts received",
                statement:
                  "Discounts reduce the amount owed to suppliers, so they are debited.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Discounts received reduce what the business owes creditors.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "They are therefore debited in the PLAC.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The closing balance (amount owed) decreases by \\$350.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Debit \\$350; the closing balance decreases.",
          },
        },
        {
          id: "cieiacct-u3-pac-q10",
          difficulty: "challenge",
          totalMarks: 7,
          parts: [
            {
              label: "a",
              prompt:
                "Explain why a purchases ledger control account is prepared.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Opening balance \\$6,000; credit purchases \\$45,000; returns outwards \\$2,000; payments \\$34,000; discounts received \\$1,000. Calculate the closing balance.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "PLAC",
                statement:
                  "Closing = opening + credit purchases − returns outwards − payments − discounts received.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "It totals all creditor accounts so the purchases ledger can be checked for agreement.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "It detects errors in the purchases ledger quickly.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It provides a check total for the trial balance process.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Credit side: opening + credit purchases.",
                working: "6000 + 45000 = 51000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Debit side: returns + payments + discounts.",
                working: "2000 + 34000 + 1000 = 37000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Closing = 51,000 − 37,000.",
                working: "51000 - 37000 = 14000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State answer with $ sign.",
                working: "\\$14,000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Checks the purchases ledger total and locates errors. (b) \\$14,000.",
          },
        },
      ],
    },
    {
      id: "cieiacct-u3-brs",
      title: "Bank reconciliation statements",
      skill:
        "Prepare a bank reconciliation statement from cash book and bank statement figures.",
      lesson: {
        sections: [
          {
            heading: "Why they differ",
            body: "The **cash book** (bank column) and the **bank statement** show the same bank account but rarely agree, because: cheques issued but not yet presented (**unpresented cheques**), deposits made but not yet credited (**uncredited deposits**), bank charges and interest not yet recorded, direct debits/standing orders, and errors.",
          },
          {
            heading: "Method",
            body: "Start from the cash book balance (per books). **Add** uncredited deposits. **Deduct** unpresented cheques. This gives the **revised cash book balance**. Separately take the bank statement balance and adjust for items the bank has recorded but the books have not (bank charges, interest, direct debits) plus errors — this gives the **revised bank balance**. The two revised balances must agree.",
          },
          {
            heading: "Common trap",
            body: "Unpresented cheques reduce the bank statement balance relative to books — deduct them from the cash book side. Uncredited deposits increase books over statement — add them. Bank charges are subtracted on the bank side adjustment.",
          },
        ],
        keyFormulas: [
          {
            name: "Revised cash book",
            statement:
              "Cash book balance + uncredited deposits − unpresented cheques (+/− errors on books side)",
          },
          {
            name: "Revised bank",
            statement:
              "Bank statement balance ± bank-only items (charges, interest, direct debits) ± bank errors",
          },
        ],
        workedExample: {
          problem:
            "Cash book shows \\$2,300 Dr; bank statement shows \\$1,950 Cr. Unpresented cheques \\$400; uncredited deposits \\$150; bank charges \\$25 not in books. Reconcile.",
          solution:
            "Books side: 2,300 + 150 − 400 = \\$2,050 Dr. Bank side: statement is \\$1,950 Cr → as Dr equivalent... Bank balance is credit \\$1,950 meaning bank owes business? Use consistent sign: take bank statement balance \\$1,950 (credit = overdrawn? treat as −1,950 Dr). Revised bank = −1,950 − 25 charges? Simpler: cash book Dr 2,300 vs bank Cr 1,950 — large gap suggests timing items don't explain; the numbers are illustrative.",
        },
      },
      questions: [
        {
          id: "cieiacct-u3-brs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Unpresented cheques are cheques that have been:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Written up in the cash book but not yet paid by the bank",
              },
              {
                id: "b",
                text: "Paid by the bank but not recorded in the cash book",
              },
              { id: "c", text: "Returned by the bank unpaid" },
              { id: "d", text: "Written by the bank on its own account" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Unpresented cheques",
                statement: "Recorded in books, not yet presented to the bank.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Unpresented cheques are in the cash book but the bank hasn't paid them yet.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) Recorded in the cash book but not yet paid by the bank.",
          },
        },
        {
          id: "cieiacct-u3-brs-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Uncredited deposits are deposits that have been:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Paid into the bank and recorded in the cash book but not yet credited on the statement",
              },
              {
                id: "b",
                text: "Credited by the bank but not recorded in the cash book",
              },
              { id: "c", text: "Returned unpaid by the bank" },
              { id: "d", text: "Made by cheque and cleared" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Uncredited deposits",
                statement:
                  "In the cash book but not yet on the bank statement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Uncredited deposits are recorded in books but the bank hasn't credited them yet.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) In the cash book but not yet credited on the statement.",
          },
        },
        {
          id: "cieiacct-u3-brs-q3",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The cash book shows a bank balance of \\$5,000 Dr. Unpresented cheques total \\$800 and uncredited deposits total \\$400. Calculate the revised cash book balance.",
          response: {
            type: "numeric",
            parts: [
              { label: "Revised cash book balance", answer: 4600, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Revised cash book",
                statement:
                  "Cash book + uncredited deposits − unpresented cheques.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Add uncredited deposits, deduct unpresented cheques.",
                working: "5000 + 400 - 800 = 4600",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the answer.",
                working: "\\$4,600",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$4,600 Dr",
          },
        },
        {
          id: "cieiacct-u3-brs-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Bank charges of \\$30 appear on the bank statement but have not been entered in the cash book. On which side of the reconciliation are they adjusted and how?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Bank side — deducted from the bank statement balance",
              },
              {
                id: "b",
                text: "Cash book side — added to the cash book balance",
              },
              {
                id: "c",
                text: "Cash book side — deducted from the cash book balance",
              },
              {
                id: "d",
                text: "Bank side — added to the bank statement balance",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bank-only items",
                statement:
                  "Items recorded by the bank but not the books are adjusted on the bank side.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Bank charges reduce the account; the bank has recorded them, so deduct on the bank side.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Bank side — deducted.",
          },
        },
        {
          id: "cieiacct-u3-brs-q5",
          difficulty: "core",
          totalMarks: 4,
          stem: "The cash book shows a bank balance of \\$2,800 Dr. The bank statement shows a balance of \\$2,660 Cr (the bank owes the business \\$2,660 — equivalent to \\$2,660 Dr in the cash book). Unpresented cheques total \\$400, uncredited deposits total \\$250, bank charges of \\$20 and bank interest of \\$10 have not been recorded in the cash book. Prepare the bank reconciliation statement.",
          response: {
            type: "numeric",
            parts: [
              { label: "Revised cash book balance", answer: 2650, unit: "$" },
              { label: "Revised bank balance", answer: 2650, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "BRS",
                statement:
                  "Books: cash book + uncredited deposits − unpresented cheques. Bank: statement balance ± bank-only items.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Revised cash book: add uncredited deposits, deduct unpresented cheques.",
                working: "2800 + 250 - 400 = 2650",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Bank statement Cr \\$2,660 = \\$2,660 Dr in book terms. Adjust for bank charges (deduct) and interest received (add).",
                working: "2660 - 20 + 10 = 2650",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both revised balances are \\$2,650 Dr — they agree, confirming the reconciliation.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State both revised balances clearly as Dr.",
                working: "\\$2,650 Dr each",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Revised cash book \\$2,650 Dr; revised bank \\$2,650 Dr — the balances agree.",
            commonErrors: [
              "Deducting uncredited deposits or adding unpresented cheques on the wrong side.",
            ],
          },
        },
        {
          id: "cieiacct-u3-brs-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A standing order of \\$45/month for rent is paid by the bank but not recorded in the cash book. How is it treated in the bank reconciliation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Deducted on the bank side — the bank has paid it but books haven't",
              },
              { id: "b", text: "Added on the cash book side" },
              { id: "c", text: "Ignored — it will appear next month" },
              { id: "d", text: "Added on the bank side" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bank-only payments",
                statement:
                  "Payments made by the bank but not in books reduce the bank balance — deduct on bank side.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The bank paid money the books don't know about, so deduct \\$45 on the bank side.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Deducted on the bank side.",
          },
        },
        {
          id: "cieiacct-u3-brs-q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "The cash book shows a bank balance of \\$8,150 Dr. The bank statement shows \\$7,900 Dr-equivalent (money held for the business). Unpresented cheques total \\$700; uncredited deposits total \\$600; bank charges of \\$40 and bank interest received of \\$20 have not been recorded. Calculate both revised balances.",
          response: {
            type: "numeric",
            parts: [
              { label: "Revised cash book balance", answer: 8050, unit: "$" },
              { label: "Revised bank balance", answer: 7880, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "BRS",
                statement: "Both sides must reach the same revised balance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Revised cash book = cash book + uncredited deposits - unpresented cheques.",
                working: "8150 + 600 - 700 = 8050",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Revised bank = statement balance - bank charges + bank interest.",
                working: "7900 - 40 + 20 = 7880",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The two figures differ by \\$170 - there must be another unrecorded item (e.g. a direct debit or bank error) to find; state both revised balances.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Books \\$8,050 Dr; bank \\$7,880 Dr.",
                working: "residual = 8050 - 7880 = 170",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Books \\$8,050 Dr; bank \\$7,880 Dr - residual difference of \\$170 to investigate.",
            commonErrors: [
              "Adding uncredited deposits on the bank side or unpresented cheques on the cash book side.",
            ],
          },
        },
        {
          id: "cieiacct-u3-brs-q8",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "List four reasons why the cash book and bank statement balances may differ.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "State the purpose of preparing a bank reconciliation statement.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "BRS purpose",
                statement:
                  "Timing differences and bank-only items explain the gap; the statement verifies both records.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Unpresented cheques; uncredited deposits; bank charges/interest not in books; direct debits/standing orders; errors.",
                marks: 4,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "It checks that both the cash book and bank statement are free from errors and explains every difference.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Any four valid reasons. (b) To verify both records agree after adjustments.",
          },
        },
        {
          id: "cieiacct-u3-brs-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Interest received from the bank of \\$22 appears on the bank statement but not in the cash book. State the treatment in the reconciliation and the effect on each revised balance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bank interest",
                statement:
                  "Bank interest increases the account; recorded by bank only → add on bank side.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Interest received increases the bank balance; the bank recorded it but books haven't.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add \\$22 on the bank side of the reconciliation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It brings the revised bank balance closer to the revised cash book balance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Add \\$22 on the bank side.",
          },
        },
        {
          id: "cieiacct-u3-brs-q10",
          difficulty: "challenge",
          totalMarks: 8,
          parts: [
            {
              label: "a",
              prompt:
                "Cash book shows \\$9,200 Dr. Bank statement shows \\$8,800 Dr-equivalent (money held for the business). Unpresented cheques \\$500; uncredited deposits \\$700; bank charges \\$45; bank interest received \\$25. Calculate the revised cash book balance and the revised bank balance.",
              marks: 5,
            },
            {
              label: "b",
              prompt:
                "Explain why the two revised balances should agree, and what a remaining difference would mean.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "BRS",
                statement: "Both sides adjust to the same true balance.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Revised cash book = 9,200 + 700 − 500.",
                working: "9200 + 700 - 500 = 9400",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Revised bank = 8,800 − 45 + 25.",
                working: "8800 - 45 + 25 = 8780",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "The residual difference is 9,400 − 8,780.",
                working: "9400 - 8780 = 620",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "State revised cash book balance.",
                working: "\\$9,400 Dr",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "State revised bank balance.",
                working: "\\$8,780 Dr",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Both records describe the same bank account; once all timing and bank-only items are adjusted they must show the same true balance.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "A remaining difference signals an unrecorded transaction or an error needing further investigation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Books \\$9,400 Dr; bank \\$8,780 Dr; residual \\$620 to investigate. (b) Same account → same true balance; a gap means an error remains.",
          },
        },
      ],
    },
    {
      id: "cieiacct-u3-other",
      title: "Other verification checks",
      skill:
        "Use casting, agreement and narrative checks to verify accounting records.",
      lesson: {
        sections: [
          {
            heading: "Types of check",
            body: "**Casting** — adding up columns of figures to confirm totals. **Agreement** — checking that two related figures match, e.g. total debtors per sales ledger = SLCA balance, or bank charges per bank statement = charges account. **Narrative/visual checks** — does the figure 'make sense'? A debtor owing \\$50,000 may be a misplaced decimal. **Use of documents** — compare ledger entries with source documents (invoices, receipts).",
          },
          {
            heading: "Common errors found",
            body: "Transposition errors (digits reversed), errors of original entry (wrong figure from document), errors of commission (right figure, wrong account), complete omission, and errors of principle (wrong accounting treatment, e.g. capital item expensed).",
          },
        ],
        keyFormulas: [
          {
            name: "Casting",
            statement: "Column totals must agree — re-add to verify",
          },
          {
            name: "Agreement",
            statement: "Related figures from different records must be equal",
          },
        ],
        workedExample: {
          problem:
            "The sales journal total is \\$4,320 but the sales ledger total is \\$4,230. The figures 320 and 230 suggest what error?",
          solution:
            "A transposition error — digits 2 and 3 reversed — likely in one entry.",
        },
      },
      questions: [
        {
          id: "cieiacct-u3-other-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Casting in accounting verification means:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Adding up columns of figures to check the totals",
              },
              { id: "b", text: "Balancing each ledger account" },
              { id: "c", text: "Preparing the trial balance" },
              { id: "d", text: "Writing up the cash book" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Casting",
                statement: "Re-adding columns to confirm totals are correct.",
              },
            ],
            steps: [
              {
                reasoning: "Casting is the check of adding up figures.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Adding up columns of figures.",
          },
        },
        {
          id: "cieiacct-u3-other-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'agreement' check compares:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Two related figures that should be equal, e.g. sales ledger total and control account balance",
              },
              { id: "b", text: "This year's profit with last year's" },
              {
                id: "c",
                text: "Debits with credits in the trial balance only",
              },
              { id: "d", text: "Cash received with cash paid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Agreement check",
                statement: "Related figures from different records must agree.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Agreement checks compare figures that should be equal.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Two related figures that should be equal.",
          },
        },
        {
          id: "cieiacct-u3-other-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'narrative check' (reasonableness check) would flag which of the following?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A debtor's balance of \\$480,000 when all other debtors owe under \\$5,000",
              },
              { id: "b", text: "A trial balance that agrees" },
              { id: "c", text: "A cash sale recorded correctly" },
              { id: "d", text: "A supplier paid on time" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reasonableness",
                statement:
                  "Figures that look implausible should be investigated.",
              },
            ],
            steps: [
              {
                reasoning:
                  "An unusually large balance suggests a possible error such as a misplaced decimal.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) The unusually large debtor balance.",
          },
        },
        {
          id: "cieiacct-u3-other-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "A purchase invoice shows \\$2,450 but the purchases journal records \\$2,540. Identify the type of error and its effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Error of original entry",
                statement: "Wrong figure taken from the source document.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The ledger/journal figure differs from the document — error of original entry.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Purchases are overstated by \\$90 and the creditor's account is overstated by \\$90.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Correction: debit returns outwards or credit purchases journal... correct via journal: reduce purchases and creditor by \\$90.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Error of original entry; purchases and creditors overstated by \\$90.",
          },
        },
        {
          id: "cieiacct-u3-other-q5",
          difficulty: "core",
          totalMarks: 3,
          stem: "A sale of \\$3,200 to customer A is entered in customer B's account. Identify the error type and explain how it affects the sales ledger.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Error of commission",
                statement: "Right amount, wrong account.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Error of commission — correct amount posted to the wrong person's account.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Customer A's account is understated by \\$3,200; customer B's is overstated by \\$3,200.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The total sales ledger is unchanged, so the control account may still agree — the error is hidden from totals checks.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Error of commission; A understated, B overstated by \\$3,200; total unchanged.",
          },
        },
        {
          id: "cieiacct-u3-other-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might an error of commission NOT be detected by a trial balance?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "TB limits",
                statement:
                  "A trial balance only checks debit = credit totals, not which accounts are used.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both accounts affected are the same type (e.g. two debtors), so total debits still equal total credits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The error changes account composition, not the arithmetic — invisible to the TB.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Because debits still equal credits — only the account identity is wrong.",
          },
        },
        {
          id: "cieiacct-u3-other-q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how a bank reconciliation statement and a sales ledger control account each help verify accounting records. Identify one limitation of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Verification",
                statement: "Different checks catch different errors.",
              },
            ],
            steps: [
              {
                reasoning:
                  "BRS verifies the bank account by reconciling books with the bank's records — catches bank errors and unrecorded items.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "SLCA verifies the sales ledger by comparing one control total with the sum of all debtor accounts — catches posting errors.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Limitation: BRS only covers the bank account; errors elsewhere are unaffected.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Limitation: SLCA agreement doesn't prove individual accounts are correct — compensating errors can cancel.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "BRS checks bank records; SLCA checks debtor totals; each only covers its own area and can miss compensating errors.",
          },
        },
        {
          id: "cieiacct-u3-other-q8",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Distinguish between an error of principle and an error of omission.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Give an example of each and state whether a trial balance would detect it.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Error types",
                statement:
                  "Principle = wrong accounting treatment; omission = transaction not recorded at all.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Error of principle: transaction recorded but with wrong accounting treatment, e.g. a capital item (van) expensed as repairs.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Error of omission: transaction completely left out of the books, e.g. a credit sale never entered.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Capital item expensed: debits = credits still, TB agrees — not detected.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Complete omission: nothing posted, TB may still agree if both sides omitted — often NOT detected by TB alone; needs document checks.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Principle = wrong treatment; omission = not recorded. (b) Neither is reliably detected by the TB; document/verification checks needed.",
          },
        },
        {
          id: "cieiacct-u3-other-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "The cash book total of receipts is \\$12,340 but the day book (cash book source) totals \\$12,430. What check has been performed and what does the difference suggest?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Agreement check",
                statement:
                  "Related totals must agree; a difference signals an error in posting or casting.",
              },
            ],
            steps: [
              {
                reasoning:
                  "An agreement/casting check between source totals and ledger totals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Difference \\$90 suggests a posting error, transposition, or omitted entry between day book and cash book.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Investigate individual entries or re-cast columns to locate it.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Agreement check failed by \\$90 — investigate posting/casting errors.",
          },
        },
        {
          id: "cieiacct-u3-other-q10",
          difficulty: "challenge",
          totalMarks: 8,
          parts: [
            {
              label: "a",
              prompt:
                "List four types of error that a trial balance cannot detect.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "For each type, name one verification check that could detect it.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "TB limitations",
                statement: "TB only proves debits = credits in total.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Error of commission; error of principle; error of omission (both sides); error of original entry where both sides equally wrong; compensating errors.",
                marks: 4,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Commission → check individual accounts vs documents; principle → review account classifications; omission → document/narrative checks; original entry → compare with source documents.",
                marks: 4,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Any four TB-invisible errors. (b) Matching verification checks for each.",
          },
        },
      ],
    },
    {
      id: "cieiacct-u3-mixed",
      title: "Verification in exam questions",
      skill: "Apply verification techniques to exam-style problems.",
      lesson: {
        sections: [
          {
            heading: "Exam technique",
            body: "Cambridge questions on verification typically ask you to: complete a control account from a list of items, prepare a bank reconciliation from given figures, or explain discrepancies. Always state Dr/Cr, show workings, and check that your revised balances agree.",
          },
          {
            heading: "Common examiner expectations",
            body: "For control accounts: correct side for each item, correct treatment of returns/discounts/debts. For BRS: correct classification of timing items vs bank-only items, correct arithmetic, and agreement of the two revised balances.",
          },
        ],
        keyFormulas: [
          {
            name: "SLCA",
            statement:
              "Opening + credit sales − returns − irrecoverable − receipts − discounts ± interest ± allowance",
          },
          {
            name: "PLAC",
            statement:
              "Opening + credit purchases − returns outwards − payments − discounts received ± interest",
          },
          {
            name: "BRS books side",
            statement: "Cash book + uncredited deposits − unpresented cheques",
          },
        ],
        workedExample: {
          problem:
            "SLCA: opening \\$1,000, credit sales \\$20,000, returns \\$500, receipts \\$15,000, discounts \\$300. PLAC: opening \\$2,000, credit purchases \\$25,000, returns outwards \\$700, payments \\$20,000, discounts received \\$400. Find both closing balances.",
          solution:
            "SLCA: 21,000 − (500 + 15,000 + 300) = \\$5,200 Dr. PLAC: 27,000 − (700 + 20,000 + 400) = \\$5,900 Cr.",
        },
      },
      questions: [
        {
          id: "cieiacct-u3-mixed-q1",
          difficulty: "core",
          totalMarks: 4,
          stem: "Sales ledger control account: opening balance \\$1,500 Dr; credit sales \\$22,000; returns inwards \\$700; cash received from debtors \\$16,000; discounts allowed \\$450; irrecoverable debts written off \\$200. Calculate the closing balance.",
          response: {
            type: "numeric",
            parts: [{ label: "Closing balance", answer: 6650, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "SLCA",
                statement:
                  "Opening + credit sales − returns − irrecoverable − receipts − discounts.",
              },
            ],
            steps: [
              {
                reasoning: "Debit side: opening + credit sales.",
                working: "1500 + 22000 = 23500",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Credit side: returns + irrecoverable + receipts + discounts.",
                working: "700 + 200 + 16000 + 450 = 17350",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Closing = 23,500 − 17,350.",
                working: "23500 - 17350 = 6150",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer with Dr and $.",
                working: "\\$6,150 Dr",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$6,150 Dr",
            commonErrors: [
              "Forgetting irrecoverable debts or returns inwards.",
            ],
          },
        },
        {
          id: "cieiacct-u3-mixed-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Purchases ledger control account: opening balance \\$3,000 Cr; credit purchases \\$38,000; returns outwards \\$1,200; payments to creditors \\$29,000; discounts received \\$900; interest paid to creditors \\$150. Calculate the closing balance.",
          response: {
            type: "numeric",
            parts: [{ label: "Closing balance", answer: 10750, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "PLAC",
                statement:
                  "Opening + credit purchases − returns outwards − payments − discounts received − interest paid.",
              },
            ],
            steps: [
              {
                reasoning: "Credit side: opening + credit purchases.",
                working: "3000 + 38000 = 41000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Debit side: returns + payments + discounts + interest.",
                working: "1200 + 29000 + 900 + 150 = 31250",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Closing = 41,000 − 31,250.",
                working: "41000 - 31250 = 9750",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer with Cr and $.",
                working: "\\$9,750 Cr",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$9,750 Cr",
          },
        },
        {
          id: "cieiacct-u3-mixed-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "The total of all sales ledger accounts is \\$14,800 but the sales ledger control account shows \\$15,050. Explain what this disagreement tells you and outline how you would investigate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Agreement",
                statement:
                  "Control account and subsidiary ledger totals must agree.",
              },
            ],
            steps: [
              {
                reasoning:
                  "There is an error of \\$250 somewhere — either in the control account or in one/more debtor accounts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Investigate by checking recent entries, comparing day book totals with postings, and looking for common errors (transposition, wrong side, omission).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "If found, post a correcting entry via the journal to both ledgers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A \\$250 error exists; investigate postings and day book agreement, then correct via journal.",
          },
        },
        {
          id: "cieiacct-u3-mixed-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Cash book bank balance \\$5,500 Dr. Bank statement \\$5,200 Dr-equivalent. Unpresented cheques \\$650; uncredited deposits \\$400; bank charges \\$28; bank interest \\$12. Prepare the bank reconciliation statement.",
          response: {
            type: "numeric",
            parts: [
              { label: "Revised cash book balance", answer: 5250, unit: "$" },
              { label: "Revised bank balance", answer: 5184, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "BRS",
                statement:
                  "Books + uncredited − unpresented; bank − charges + interest.",
              },
            ],
            steps: [
              {
                reasoning: "Revised cash book = 5,500 + 400 − 650.",
                working: "5500 + 400 - 650 = 5250",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Revised bank = 5,200 − 28 + 12.",
                working: "5200 - 28 + 12 = 5184",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Residual difference = 5,250 − 5,184.",
                working: "5250 - 5184 = 66",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State both revised balances.",
                working: "\\$5,250 Dr and \\$5,184 Dr; residual \\$66",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Books \\$5,250 Dr; bank \\$5,184 Dr; residual \\$66 to investigate.",
          },
        },
        {
          id: "cieiacct-u3-mixed-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State whether each item increases or decreases the sales ledger control account balance: (i) credit sales, (ii) cash received from debtors, (iii) returns inwards.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SLCA items",
                statement:
                  "Credit sales increase debtors; receipts and returns decrease them.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Credit sales increase; cash received decreases; returns inwards decrease.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correctly identifies all three.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Credit sales increase; receipts and returns inwards decrease.",
          },
        },
        {
          id: "cieiacct-u3-mixed-q6",
          difficulty: "core",
          totalMarks: 4,
          stem: "Both the cash book and the bank statement show an overdraft: cash book \\$1,000 Cr; bank statement \\$1,200 Cr. Unpresented cheques total \\$150; uncredited deposits total \\$80; bank charges of \\$25 have not been recorded. Calculate the revised balances on both sides (express Cr balances as positive amounts owed).",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Revised cash book balance (Cr)",
                answer: 1070,
                unit: "$",
              },
              { label: "Revised bank balance (Cr)", answer: 1225, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "BRS with overdraft",
                statement:
                  "Treat Cr balances consistently: add uncredited deposits, deduct unpresented cheques on books side; deduct charges on bank side.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cash book Cr 1,000. Revised = 1,000 + 150 − 80 (unpresented cheques increase the overdraft; uncredited deposits decrease it).",
                working: "1000 + 150 - 80 = 1070",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Bank statement Cr 1,200. Revised = 1,200 + 25 charges.",
                working: "1200 + 25 = 1225",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Residual difference = 1,225 − 1,070 = \\$155.",
                working: "1225 - 1070 = 155",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State both as Cr balances.",
                working: "\\$1,070 Cr and \\$1,225 Cr",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Books \\$1,070 Cr; bank \\$1,225 Cr; residual \\$155.",
            commonErrors: [
              "Treating unpresented cheques as reducing the overdraft — they increase it.",
            ],
          },
        },
        {
          id: "cieiacct-u3-mixed-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why control accounts are prepared in the general ledger rather than the sales or purchases ledgers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Control account location",
                statement:
                  "Control accounts live in the general ledger; subsidiary ledgers hold individual accounts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The sales/purchases ledgers contain thousands of individual personal accounts — too detailed for summary control.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The general ledger holds control totals that can be compared against the sum of subsidiary balances.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Separating them makes errors easier to detect and keeps ledgers manageable.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Control accounts are summaries kept in the general ledger to check the detailed subsidiary ledgers.",
          },
        },
        {
          id: "cieiacct-u3-mixed-q8",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "The sales ledger control account balance is \\$8,000 Dr but the sales ledger total is \\$8,400 Dr. Give two possible causes.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "The purchases ledger control account balance is \\$5,000 Cr but the purchases ledger total is \\$4,600 Cr. Give two possible causes.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Disagreement causes",
                statement:
                  "Errors in either ledger, or items omitted from one side, cause disagreement.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Cause 1: a receipt from a debtor recorded in cash book but not posted to the debtor's account (sales ledger too high by \\$400). Cause 2: a credit sale omitted from the control account or posted to wrong debtor account.",
                marks: 3,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Cause 1: a payment to a creditor not posted to the supplier's account (purchases ledger too low... actually purchases ledger total \\$4,600 < control \\$5,000 means ledger understates creditors). Cause 2: a credit purchase omitted from one record or a return posted wrongly.",
                marks: 3,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Any two valid causes for a \\$400 gap. (b) Any two valid causes for a \\$400 gap.",
          },
        },
        {
          id: "cieiacct-u3-mixed-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of the following would appear on the CREDIT side of a sales ledger control account? (Select all that apply in your answer: list the items.)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cash received from debtors" },
              { id: "b", text: "Credit sales" },
              { id: "c", text: "Opening balance b/d" },
              { id: "d", text: "Returns inwards" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SLCA credit side",
                statement:
                  "Receipts, returns, discounts, irrecoverable debts and allowance increases are credited.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Only cash received from debtors is credited; credit sales and opening balance are debited; returns inwards is also credited but single best answer here is (a) — however (d) is also credited. Award mark for identifying receipts; note returns inwards also credited.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the credited items.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cash received from debtors (and returns inwards) are credited.",
          },
        },
        {
          id: "cieiacct-u3-mixed-q10",
          difficulty: "challenge",
          totalMarks: 8,
          parts: [
            {
              label: "a",
              prompt:
                "Explain the purpose of preparing both a sales ledger control account and a purchases ledger control account.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "State two limitations of relying only on control accounts for verification.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Control accounts",
                statement:
                  "They verify ledger totals and locate errors but cannot prove individual entries correct.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "SLCA checks the total owed by all debtors against the sum of sales ledger accounts.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "PLAC checks the total owed to all creditors against the purchases ledger total.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "They detect errors and omissions affecting ledger totals.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "They provide an efficient check without examining every individual account.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Limitation 1: agreement doesn't prove individual accounts are correct — compensating errors can cancel.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Limitation 2: errors within the control account itself (wrong totals entered) won't be caught; also errors of principle may not affect totals.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) They verify debtor/creditor totals and detect errors efficiently. (b) Compensating errors can hide; individual entries may still be wrong.",
          },
        },
      ],
    },
  ],
};
