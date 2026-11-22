import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "cieiacct-u2-lesson-2-1",
  code: "2-1",
  title: "Books of prime entry",
  goal: "I CAN record transactions in the correct book of prime entry before posting to the ledger.",
  standards: [
    "Cambridge IGCSE Accounting 0452",
    "Section 2: The accounting system",
  ],
  vocabulary: [
    {
      term: "Book of prime entry",
      definition:
        "The first record of a transaction — day books and the cash book.",
    },
    {
      term: "Day book",
      definition:
        "A book recording one type of transaction, e.g. sales day book, purchases day book.",
    },
    {
      term: "Cash book",
      definition:
        "Records all cash and bank transactions; acts as both book of prime entry and ledger account.",
    },
    {
      term: "Sales day book",
      definition: "Records credit sales to customers.",
    },
    {
      term: "Purchases day book",
      definition: "Records credit purchases from suppliers.",
    },
    {
      term: "Returns day books",
      definition:
        "Record sales returns (inwards) and purchases returns (outwards).",
    },
  ],
  concepts: [
    {
      id: "cieiacct-u2-bpe",
      title: "Recording in books of prime entry",
      skill:
        "Choose the correct book of prime entry for each type of transaction.",
      lesson: {
        sections: [
          {
            heading: "Why books of prime entry?",
            body: "Transactions arrive in many forms — cash sales, credit purchases, returns, expenses. Recording each type in a **separate book of prime entry** keeps the records organised and makes errors easier to trace. Entries are then posted to the ledger in summary form.",
          },
          {
            heading: "The main books",
            body: "**Sales day book**: credit sales to customers. **Purchases day book**: credit purchases from suppliers. **Sales returns day book**: goods returned by customers (sales returns inwards). **Purchases returns day book**: goods returned to suppliers (returns outwards). **Cash book**: all cash and cheque/bank receipts and payments — it doubles as the cash and bank ledger accounts.",
          },
          {
            heading: "Other day books",
            body: "**General journal** records non-routine entries: opening balances, corrections, transfers, and dishonoured cheques. **Petty cash book** records small cash expenses. The rule: routine transactions of one type go to their day book; anything unusual goes to the journal.",
          },
        ],
        keyFormulas: [
          {
            name: "Routing rule",
            statement:
              "Credit sales → sales day book; credit purchases → purchases day book; returns → returns day books; cash/bank → cash book; unusual → journal",
          },
          {
            name: "Cash book dual role",
            statement:
              "Book of prime entry AND ledger account for cash and bank",
          },
        ],
        workedExample: {
          problem:
            "Where is each recorded: (a) goods sold on credit, (b) cash paid for wages, (c) goods returned by a customer, (d) correction of an error?",
          solution:
            "(a) Sales day book; (b) Cash book (payments side); (c) Sales returns day book; (d) General journal.",
        },
      },
      questions: [
        {
          id: "cieiacct-u2-bpe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Credit sales to customers are first recorded in the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "General journal" },
              { id: "b", text: "Sales day book" },
              { id: "c", text: "Cash book" },
              { id: "d", text: "Purchases day book" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Sales day book",
                statement: "Records credit sales to customers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Credit sales go to the sales day book; purchases go to the purchases day book.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Sales day book.",
            commonErrors: ["Mixing up sales and purchases day books."],
          },
        },
        {
          id: "cieiacct-u2-bpe-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State the correct book of prime entry for each: (a) goods returned by a customer, (b) cash received from a debtor, (c) rent paid by cheque.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Book routing",
                statement:
                  "Each transaction type has a designated book of prime entry.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Sales returns day book — goods returned by customers are sales returns inwards.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Cash book — receipts side; the cash book records all cash and bank receipts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Cash book — payments side; cheques are bank payments.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Sales returns day book; (b) cash book receipts; (c) cash book payments.",
            commonErrors: [
              "Putting customer returns in the purchases returns book — that is for goods returned TO suppliers.",
            ],
          },
        },
        {
          id: "cieiacct-u2-bpe-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the cash book is described as both a book of prime entry and a ledger account.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cash book dual role",
                statement:
                  "It is where cash transactions are first recorded AND it holds the running cash/bank balances.",
              },
            ],
            steps: [
              {
                reasoning:
                  "As a book of prime entry, it is the first record of cash and bank transactions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Unlike other day books, it also maintains balances — the cash and bank accounts are kept inside it.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Therefore no separate posting to cash/bank ledger accounts is needed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "It first records cash transactions and also keeps the cash and bank balances, so it functions as both.",
            commonErrors: [
              "Saying the cash book must be posted to a ledger — it is not.",
            ],
          },
        },
        {
          id: "cieiacct-u2-bpe-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Discuss the advantages of using separate books of prime entry rather than recording everything directly in the ledger.",
          parts: [
            {
              label: "a",
              prompt: "Explain two advantages of day books.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain one disadvantage or extra step this system creates.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Books of prime entry",
                statement:
                  "Organisation and error detection vs extra posting work.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Organisation: transactions of one type are grouped, making records easier to follow and audit.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Error detection: totals are checked before posting; mistakes are easier to trace to a source.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Division of labour: different staff can keep different books.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Extra work: entries must be posted again to the ledger — double handling of every transaction.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Posting errors can occur in the second stage (omissions, wrong amounts, transpositions).",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: the benefits of control outweigh the extra effort for most businesses.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Organisation, error detection, division of labour. (b) Extra posting work and posting errors.",
            commonErrors: ["Listing only advantages or only disadvantages."],
          },
        },
        {
          id: "cieiacct-u2-bpe-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Goods returned to a supplier are first recorded in the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "General journal" },
              { id: "b", text: "Purchases day book" },
              { id: "c", text: "Sales returns day book" },
              { id: "d", text: "Purchases returns day book" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Returns day books",
                statement:
                  "Sales returns (inwards) go to the sales returns day book; purchases returns (outwards) go to the purchases returns day book.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Goods sent back to a supplier are returns outwards, recorded in the purchases returns day book.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Purchases returns day book.",
            commonErrors: [
              "Confusing returns inwards (from customers) with returns outwards (to suppliers).",
            ],
          },
        },
        {
          id: "cieiacct-u2-bpe-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "State the correct book of prime entry for each: (a) goods bought on credit from a supplier, (b) goods returned by a customer, (c) a correction of an error discovered in the ledger.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Book routing",
                statement:
                  "Routine transactions go to their day book; unusual items go to the general journal.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Purchases day book — credit purchases from suppliers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Sales returns day book — returns inwards from customers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) General journal — corrections and other non-routine entries.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Purchases day book; (b) sales returns day book; (c) general journal.",
          },
        },
        {
          id: "cieiacct-u2-bpe-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Credit purchases from suppliers are first recorded in the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Petty cash book" },
              { id: "b", text: "Purchases returns day book" },
              { id: "c", text: "Purchases day book" },
              { id: "d", text: "Sales day book" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Purchases day book",
                statement: "Records credit purchases from suppliers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Credit purchases are routine supplier transactions recorded in the purchases day book.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(c) Purchases day book.",
          },
        },
        {
          id: "cieiacct-u2-bpe-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A sales day book contains credit invoices totalling \\$24,500 for the month, with one invoice of \\$300 cancelled before posting. Calculate the total to be posted to the sales ledger.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total posted to sales ledger", answer: 24200, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Day book totals",
                statement:
                  "The day book total (net of cancellations) is posted to the ledger.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Subtract the cancelled invoice from the day book total before posting.",
                working: "24500 - 300 = 24200",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "\\$24,200 is debited to the sales ledger control / total debtors and credited to sales.",
                working: "\\$24,200",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$24,200",
            commonErrors: [
              "Posting the gross total including the cancelled invoice.",
            ],
          },
        },
        {
          id: "cieiacct-u2-bpe-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why a petty cash book is needed and what it records.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Petty cash",
                statement:
                  "Small cash expenses need a simple, controlled record.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It records small cash payments (stationery, postage) that would be too trivial for the main cash book or bank.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It is controlled by an imprest system: a fixed float is topped up, and total payments are checked against vouchers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "It records small cash expenses simply and is controlled through the imprest system.",
          },
        },
        {
          id: "cieiacct-u2-bpe-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following would be recorded in the general journal rather than a day book or cash book?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rent paid by cheque" },
              { id: "b", text: "Goods returned by a customer" },
              { id: "c", text: "Correction of an error in a ledger account" },
              { id: "d", text: "A credit sale to a customer" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "General journal",
                statement:
                  "Records non-routine entries: corrections, opening balances, transfers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Corrections are unusual transactions, so they go to the general journal; the others have their own day books or the cash book.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(c) Correction of an error in a ledger account.",
          },
        },
        {
          id: "cieiacct-u2-bpe-q11",
          difficulty: "challenge",
          totalMarks: 5,
          parts: [
            {
              label: "a",
              prompt:
                "Name the book of prime entry for each: (i) a credit purchase, (ii) cash received from a debtor, (iii) goods returned to a supplier, (iv) depreciation charge at year end.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Explain the rule that decides whether an entry goes to a day book or the general journal.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Book routing",
                statement:
                  "Routine transactions of one type go to their day book; anything unusual goes to the journal.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "(i) Purchases day book; (ii) cash book (receipts); (iii) purchases returns day book; (iv) general journal.",
                marks: 4,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Routine, high-volume transactions of one type have a designated day book; irregular entries go to the journal.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Purchases day book; cash book; purchases returns day book; general journal. (b) Routine → day book; unusual → journal.",
          },
        },
        {
          id: "cieiacct-u2-bpe-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how entries in the day books reach the ledger accounts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Posting",
                statement:
                  "Day book totals are posted to ledger accounts, usually in summary form.",
              },
            ],
            steps: [
              {
                reasoning:
                  "At the end of the period, the day book totals are calculated and checked.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "These totals are posted to the ledger — e.g. total credit sales are debited to debtors/sales ledger control and credited to sales.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Individual customer/supplier accounts are updated with their own invoice amounts, not just totals.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Day book totals are posted to the ledger in summary form, while personal accounts receive individual amounts.",
          },
        },
        {
          id: "cieiacct-u2-bpe-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A purchases returns day book totals \\$1,850 for the month. State the effect on the purchases ledger control account and on the purchases account.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Returns outwards",
                statement:
                  "Returns to suppliers reduce amounts owed and are treated as a deduction from purchases.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Returns outwards reduce what the business owes suppliers, so the purchases ledger control account is debited \\$1,850.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "In the purchases account, returns outwards are deducted (shown on the credit side) to reduce net purchases.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Debit purchases ledger control \\$1,850; deduct \\$1,850 from purchases in the trading account.",
          },
        },
        {
          id: "cieiacct-u2-bpe-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Goods sold to a customer for cash are recorded in the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sales returns day book" },
              { id: "b", text: "Cash book" },
              { id: "c", text: "Sales day book" },
              { id: "d", text: "General journal" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Cash book",
                statement: "Records all cash and bank receipts and payments.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A cash sale involves a cash receipt, so it is recorded in the cash book, not the sales day book (which is for credit sales).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Cash book.",
            commonErrors: ["Putting cash sales in the sales day book."],
          },
        },
        {
          id: "cieiacct-u2-bpe-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two reasons why a business uses books of prime entry before posting to the ledger, and identify one risk introduced by the posting stage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Books of prime entry",
                statement:
                  "Organisation and checking before ledger posting, at the cost of extra handling.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reason 1: transactions of one type are grouped, so records are organised and easy to follow.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reason 2: totals can be checked before posting, and errors traced back to a source document or day book.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Risk: posting errors (omissions, wrong amounts, transposition) can occur in the second stage.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "These are later detected by the trial balance or verification checks.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Organisation and error detection before posting; posting errors are the added risk.",
          },
        },
        {
          id: "cieiacct-u2-bpe-q16",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "A business receives \\$800 cash from a debtor. State the book of prime entry and the ledger account affected.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "The same business sells goods on credit for \\$1,200. State the book of prime entry and where the credit side is ultimately posted.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "The business discovers it posted a \\$50 payment to the wrong supplier last month. State where the correction is recorded and the two ledger entries needed.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Books of prime entry",
                statement:
                  "Each transaction type has a designated first record; corrections go through the journal.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Cash book (receipts side); the receipt reduces the debtor's balance — credited in the sales ledger.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Sales day book; the credit side posts to the sales account (total sales credited).",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Recorded in the general journal as a correction.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Entries: debit the correct supplier \\$50, credit the wrongly credited supplier \\$50 (reverse the error).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Cash book → credit debtor. (b) Sales day book → credit sales. (c) General journal → Dr correct supplier, Cr wrong supplier \\$50.",
          },
        },
      ],
    },
  ],
};
