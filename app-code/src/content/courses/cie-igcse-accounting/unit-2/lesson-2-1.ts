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
              { id: "a", text: "Purchases day book" },
              { id: "b", text: "Sales day book" },
              { id: "c", text: "Cash book" },
              { id: "d", text: "General journal" },
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
      ],
    },
  ],
};
