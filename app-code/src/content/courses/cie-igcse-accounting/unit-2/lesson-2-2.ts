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
              {
                id: "a",
                text: "Is entered on the right-hand side of an account",
              },
              { id: "b", text: "Must always be larger than the debit" },
              { id: "c", text: "Always increases an asset" },
              { id: "d", text: "Is only used for cash transactions" },
            ],
            correctChoiceId: "a",
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
        {
          id: "cieiacct-u2-ldg-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Goods bought on credit for $800 are recorded by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Debit cash, credit sales" },
              { id: "b", text: "Debit creditor, credit purchases" },
              { id: "c", text: "Debit purchases, credit creditor" },
              { id: "d", text: "Debit purchases, credit cash" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Double entry",
                statement:
                  "Debit what is received (purchases), credit what is given (creditor).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Purchases increase (debit); the supplier's account increases as a liability (credit).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Debit purchases, credit creditor.",
          },
        },
        {
          id: "cieiacct-u2-ldg-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an impersonal account?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Capital account" },
              { id: "b", text: "Creditor — Mrs Ali" },
              { id: "c", text: "Debtor — Mr Khan" },
              { id: "d", text: "Sales account" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Impersonal account",
                statement:
                  "Accounts for things — cash, inventory, sales, purchases, expenses — not people or capital.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sales is an impersonal (nominal) account; the others are personal accounts.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Sales account.",
          },
        },
        {
          id: "cieiacct-u2-ldg-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A business receives $1,200 in cash from a debtor and pays $450 rent in cash. What is the total of all debit entries made for these two transactions?",
          response: {
            type: "numeric",
            parts: [{ label: "Total debits", answer: 1650, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Double entry",
                statement:
                  "Receipt from debtor: Dr cash; rent paid: Dr rent expense.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Debit entries: cash $1,200 and rent $450.",
                working: "1200 + 450",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total debits = $1,650.",
                working: "1200 + 450 = 1650",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1,650",
          },
        },
        {
          id: "cieiacct-u2-ldg-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "State the double entry for each of the following: (i) the owner takes $300 cash as drawings; (ii) the business pays insurance of $150 by cheque.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Double entry",
                statement:
                  "Drawings reduce owner's equity; expenses increase when incurred.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(i) Debit drawings $300; credit cash $300.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(ii) Debit insurance $150; credit bank $150.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each transaction has equal debits and credits — totals $300 and $150 on both sides.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(i) Dr drawings / Cr cash $300. (ii) Dr insurance / Cr bank $150.",
          },
        },
        {
          id: "cieiacct-u2-ldg-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Goods returned by a credit customer are recorded by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Debit purchases, credit the creditor's account" },
              {
                id: "b",
                text: "Debit sales returns, credit the debtor's account",
              },
              { id: "c", text: "Debit the debtor's account, credit sales" },
              { id: "d", text: "Debit cash, credit sales returns" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sales returns",
                statement:
                  "Returns reduce sales (debit returns account) and reduce what the customer owes (credit debtor).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sales returns is debited; the customer's account is credited, reducing the debt.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Debit sales returns, credit debtor.",
          },
        },
        {
          id: "cieiacct-u2-ldg-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "During the month a business made credit sales totalling $4,600 and received $3,800 from debtors. By how much did the total amount owed by debtors increase?",
          response: {
            type: "numeric",
            parts: [{ label: "Increase in debtors", answer: 800, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Debtor movement",
                statement: "Increase in debtors = credit sales − receipts from debtors.",
              },
            ],
            steps: [
              {
                reasoning: "Increase = credit sales − cash received.",
                working: "4600 - 3800",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Increase = $800.",
                working: "4600 - 3800 = 800",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$800",
          },
        },
        {
          id: "cieiacct-u2-ldg-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why drawings are debited to a drawings account and credited from cash when the owner takes money out of the business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Drawings",
                statement:
                  "Drawings reduce the owner's capital, so they are treated like a reduction of equity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Drawings represent the owner taking assets (cash) for personal use, reducing what the business owes the owner.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The drawings account is debited because it records the reduction in the owner's stake (like an expense of the business).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cash is credited because an asset is leaving the business — debits and credits remain equal.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Drawings reduce owner's equity (debit drawings); cash leaves the business (credit cash).",
          },
        },
        {
          id: "cieiacct-u2-ldg-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of the following is a correctly balanced double entry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Debit cash $500 only" },
              { id: "b", text: "Debit capital $200 / Credit sales $200" },
              { id: "c", text: "Credit rent $300 / Credit cash $300" },
              { id: "d", text: "Debit cash $500 / Credit sales $500" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Duality",
                statement:
                  "Every transaction needs equal debit and credit entries on the correct sides.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Only (a) has equal debits and credits with correct account types.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Debit cash / Credit sales $500.",
          },
        },
        {
          id: "cieiacct-u2-ldg-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A business records these transactions: cash sales of $500 and $700; goods bought on credit for $900; payment to the creditor of $400 in cash. What is the total of all credit entries?",
          response: {
            type: "numeric",
            parts: [{ label: "Total credits", answer: 2500, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Double entry",
                statement:
                  "Credit sales, credit purchases and cash payments each produce credit entries.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Credit entries: sales $500 + $700; creditor $900 (purchase on credit); cash $400 (payment).",
                working: "500 + 700 + 900 + 400",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sales credits total $1,200.",
                working: "500 + 700 = 1200",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total credits = $2,500.",
                working: "1200 + 900 + 400 = 2500",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2,500",
          },
        },
        {
          id: "cieiacct-u2-ldg-q14",
          difficulty: "challenge",
          totalMarks: 4,
          parts: [
            {
              label: "a",
              prompt: "Record the purchase of goods on credit for $1,000.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Record payment of $500 to the creditor in cash.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "State the balance on the creditor's account after both entries.",
              marks: 1,
            },
          ],
          stem: "A business buys goods on credit and later pays part of the bill.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Creditor account",
                statement:
                  "Credit purchases increase the liability; payments reduce it.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Debit purchases $1,000; credit creditor $1,000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Debit creditor $500; credit cash $500.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Both sides equal $500 — duality preserved.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Creditor balance = $1,000 − $500 = $500 credit (still owed).",
                working: "1000 - 500 = 500",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Dr purchases / Cr creditor $1,000. (b) Dr creditor / Cr cash $500. (c) $500 credit balance.",
            commonErrors: [
              "Recording the payment as a new purchase instead of reducing the creditor's account.",
            ],
          },
        },
        {
          id: "cieiacct-u2-ldg-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A business receives a $2,000 loan in cash from a friend (not the owner). The correct entry is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Debit loan $2,000 / Credit cash $2,000" },
              { id: "b", text: "Debit capital $2,000 / Credit cash $2,000" },
              { id: "c", text: "Debit cash $2,000 / Credit capital $2,000" },
              { id: "d", text: "Debit cash $2,000 / Credit loan $2,000" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Loans vs capital",
                statement:
                  "A loan from anyone other than the owner is a liability, not capital.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cash increases (debit); the loan is a liability owed to the friend (credit loan account).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Debit cash / Credit loan $2,000.",
          },
        },
        {
          id: "cieiacct-u2-ldg-q16",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "State the two rules that decide which side of an account a transaction is entered on.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Record: (i) credit sale $900 to Mr Jones; (ii) payment of $250 wages in cash; (iii) owner introduces $5,000 by cheque.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "State the total debits and total credits for part (b).",
              marks: 1,
            },
          ],
          stem: "A business records its transactions in the ledger.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Double entry",
                statement:
                  "Debit what comes in / is received; credit what goes out / is given.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Debit increases assets and expenses; credit increases liabilities, capital and income.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Debits are on the left, credits on the right of each account.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "(i) Dr debtor (Mr Jones) $900; Cr sales $900.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "(ii) Dr wages $250; Cr cash $250.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "(iii) Dr bank $5,000; Cr capital $5,000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Total debits = 900 + 250 + 5,000 = $6,150; total credits = $6,150.",
                working: "900 + 250 + 5000 = 6150",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Debit what is received/assets up; credit what is given/liabilities and income up. (b) See entries. (c) Debits $6,150 = credits $6,150.",
            commonErrors: [
              "Crediting the debtor for a credit sale — the customer owes more, so the debtor is debited.",
            ],
          },
        },
      ],
    },
  ],
};
