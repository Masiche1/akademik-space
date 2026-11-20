import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "cieiacct-u2-lesson-2-2",
  code: "2-2",
  title: "The ledger and double entry",
  goal: "I CAN post transactions to ledger accounts using the rules of double entry.",
  standards: [
    "Cambridge IGCSE Accounting 0452",
    "Section 2: The accounting system",
  ],
  vocabulary: [
    {
      term: "Ledger",
      definition:
        "The collection of accounts summarising all transactions by type.",
    },
    {
      term: "Double entry",
      definition:
        "Every transaction is recorded with equal debit and credit entries.",
    },
    {
      term: "Debit",
      definition:
        "The left-hand side of an account; increases assets and expenses, decreases liabilities and income.",
    },
    {
      term: "Credit",
      definition:
        "The right-hand side of an account; increases liabilities and income, decreases assets and expenses.",
    },
    {
      term: "Personal account",
      definition:
        "Accounts for people/businesses — debtors (receivables), creditors (payables), capital.",
    },
    {
      term: "Impersonal account",
      definition:
        "Accounts for things — cash, inventory, sales, purchases, expenses.",
    },
  ],
  concepts: [
    {
      id: "cieiacct-u2-ledger",
      title: "Ledger accounts and double entry",
      skill:
        "Apply debit and credit rules to post transactions to ledger accounts.",
      lesson: {
        sections: [
          {
            heading: "The ledger",
            body: "Day books are summarised and **posted** to the ledger — a set of accounts grouped by type: personal accounts (debtors, creditors, capital), impersonal accounts (cash, inventory, sales, purchases) and nominal accounts (expenses, income). Each account has a debit (left) and credit (right) side.",
          },
          {
            heading: "Rules of double entry",
            body: "**Debit** what comes in and what is taken; **credit** what goes out and what is given. In account terms: debit increases assets and expenses; credit increases liabilities, capital and income. Every transaction has equal debits and credits — this is the **dual aspect** concept and it is why the trial balance must agree.",
          },
          {
            heading: "Common entries",
            body: "Credit sale: debit debtor, credit sales. Credit purchase: debit purchases, credit creditor. Cash sale: debit cash, credit sales. Payment to creditor: debit creditor, credit cash. Capital introduced: debit cash, credit capital. The pattern: find what is received (debit) and what is given (credit).",
          },
        ],
        keyFormulas: [
          {
            name: "DEAD/CLOD",
            statement:
              "Debits: Expenses, Assets, Drawings. Credits: Liabilities, Owners' capital, Income",
          },
          {
            name: "Duality",
            statement:
              "Every transaction = equal debit and credit — totals must balance",
          },
        ],
        workedExample: {
          problem: "A business buys goods for cash 500. Show the double entry.",
          solution:
            "Debit purchases account 500 (expense/asset up); credit cash account 500 (asset down). Totals: debit 500 = credit 500.",
        },
      },
      questions: [
        {
          id: "cieiacct-u2-ldg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In double entry bookkeeping, a credit entry:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Always increases an asset" },
              {
                id: "b",
                text: "Is entered on the right-hand side of an account",
              },
              { id: "c", text: "Must always be larger than the debit" },
              { id: "d", text: "Is only used for cash transactions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Credit side",
                statement: "Credits are entered on the right of an account.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Credits go on the right-hand side; debits on the left. Credits increase liabilities, capital and income.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Entered on the right-hand side.",
            commonErrors: [
              "Thinking credits always increase assets — they decrease them.",
            ],
          },
        },
        {
          id: "cieiacct-u2-ldg-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For each transaction state the debit and credit accounts: (a) cash sale 200, (b) owner introduces capital 1 000 in cash, (c) pays rent 300 by cheque.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Double entry",
                statement: "Debit what is received; credit what is given.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Debit cash 200; credit sales 200.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Debit cash 1 000; credit capital 1 000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Debit rent (expense) 300; credit bank 300.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Dr cash / Cr sales; (b) Dr cash / Cr capital; (c) Dr rent / Cr bank.",
            commonErrors: [
              "Crediting capital for a cash sale — capital is only for owner investments.",
            ],
          },
        },
        {
          id: "cieiacct-u2-ldg-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why every transaction must have both a debit and a credit entry of equal amount.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Duality",
                statement:
                  "Every transaction has two equal effects — this is the basis of the accounting equation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each transaction affects two accounts equally — one receives value, one gives it.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Equal debits and credits keep the accounting equation (assets = capital + liabilities) in balance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It also allows errors to be detected via the trial balance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Duality keeps the books balanced and enables error detection through the trial balance.",
            commonErrors: [
              "Saying it is just 'a rule' without the balancing/equation reason.",
            ],
          },
        },
        {
          id: "cieiacct-u2-ldg-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A business pays a supplier 400 by cheque for goods bought on credit last month. Explain and record the entries needed this month.",
          parts: [
            {
              label: "a",
              prompt:
                "State what happened in the previous month when the goods were bought.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Record this month's payment in double entry.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain why both entries are needed across the two months.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Two-stage credit transaction",
                statement:
                  "Purchase on credit creates the debt; payment settles it — separate events.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Last month: debit purchases 400, credit creditor (payable) 400 — the debt was recorded then.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "The purchase was recognised when goods were received, not when paid (accruals).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "This month: debit creditor 400 (settle the liability), credit bank 400 (cash leaves).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Both sides equal 400 — duality preserved.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Buying and paying are separate transactions in separate periods; each needs its own double entry.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Recording them together would misstate expenses and liabilities in both periods.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Last month Dr purchases / Cr creditor; this month Dr creditor / Cr bank.",
            commonErrors: [
              "Recording the purchase again this month — it was already recorded when goods were received.",
            ],
          },
        },
      ],
    },
  ],
};
