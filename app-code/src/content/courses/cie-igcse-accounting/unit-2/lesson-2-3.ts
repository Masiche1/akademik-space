import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "cieiacct-u2-lesson-2-3",
  code: "2-3",
  title: "The trial balance and error correction",
  goal: "I CAN extract a trial balance and identify errors it can and cannot detect.",
  standards: [
    "Cambridge IGCSE Accounting 0452",
    "Section 2: The accounting system",
  ],
  vocabulary: [
    {
      term: "Trial balance",
      definition:
        "A list of all ledger account balances at a point in time, with debit and credit totals.",
    },
    {
      term: "Balance",
      definition:
        "The difference between total debits and credits in an account.",
    },
    {
      term: "Suspense account",
      definition:
        "A temporary account used when an error cannot be located immediately.",
    },
    {
      term: "Error of omission",
      definition: "A transaction not recorded at all.",
    },
    {
      term: "Error of commission",
      definition: "Recording in the wrong account, e.g. debit to wrong name.",
    },
    {
      term: "Error of principle",
      definition:
        "Recording a transaction of the wrong type, e.g. capital item as expense.",
    },
  ],
  concepts: [
    {
      id: "cieiacct-u2-tb",
      title: "Trial balance and errors",
      skill:
        "Prepare a trial balance and diagnose which errors it reveals and which it cannot.",
      lesson: {
        sections: [
          {
            heading: "What a trial balance shows",
            body: "Each ledger account's **balance** is listed — debit balances on the left, credit balances on the right. If double entry has been applied correctly, total debits equal total credits. The trial balance is checked **before** preparing financial statements.",
          },
          {
            heading: "Errors the trial balance detects",
            body: "It catches errors that make debits ≠ credits: **single-entry errors** (one side missing), **wrong-side entries**, **incorrect amounts** on one side, and **transposition errors** where digits are swapped unequally. If totals disagree, an error exists somewhere.",
          },
          {
            heading: "Errors it cannot detect",
            body: "The trial balance does NOT catch: **errors of omission** (transaction never entered), **errors of commission** (wrong account but equal debit/credit), **errors of principle** (wrong type, e.g. treating a machine as an expense), **compensating errors** (two mistakes cancelling out), or **original errors** (wrong figure entered consistently). These need care, review and audit.",
          },
        ],
        keyFormulas: [
          {
            name: "TB rule",
            statement:
              "Total debits = total credits IF all entries are double and correct-sided",
          },
          {
            name: "Undetectable errors",
            statement:
              "Omission, commission, principle, compensating, original — equal debits/credits hide them",
          },
        ],
        workedExample: {
          problem:
            "A trial balance shows debits 10 000, credits 9 800. What does this tell you?",
          solution:
            "There is an error — debits exceed credits by 200. Likely a missing credit or wrong-sided entry; check recent postings or use a suspense account while investigating.",
        },
      },
      questions: [
        {
          id: "cieiacct-u2-tb-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A correctly prepared trial balance should show:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Total debits greater than total credits" },
              { id: "b", text: "Total debits equal to total credits" },
              { id: "c", text: "Only credit balances" },
              { id: "d", text: "Every account with a debit balance" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trial balance",
                statement:
                  "If double entry is correct, debit totals equal credit totals.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Equal totals confirm the books are arithmetically consistent.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Total debits equal to total credits.",
            commonErrors: [
              "Thinking an unequal trial balance always means the business is loss-making.",
            ],
          },
        },
        {
          id: "cieiacct-u2-tb-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A cash sale of 150 was recorded only as a debit to cash — the credit to sales was forgotten. State whether the trial balance would agree and why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Single-entry error",
                statement:
                  "A missing half-entry makes debits exceed credits by the amount.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The trial balance would NOT agree — debits exceed credits by 150.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The debit to cash was entered but the equal credit to sales was omitted.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This is a detectable error because debits and credits no longer balance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "No — debits exceed credits by 150 because the credit to sales is missing.",
            commonErrors: [
              "Saying the trial balance would still agree because 'it's just one transaction'.",
            ],
          },
        },
        {
          id: "cieiacct-u2-tb-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why an error of commission (posting to the wrong personal account) would NOT be revealed by the trial balance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Error of commission",
                statement:
                  "Equal debit and credit to wrong accounts keeps totals balanced.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The transaction still has equal debit and credit amounts — only the account names are wrong.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Trial balance totals therefore still agree, hiding the error.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It is found only when checking individual ledger accounts or during audit/reconciliation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Equal amounts in wrong accounts keep totals balanced, so the trial balance cannot reveal it.",
            commonErrors: [
              "Claiming all errors make the trial balance disagree.",
            ],
          },
        },
        {
          id: "cieiacct-u2-tb-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "The trial balance disagrees by 360 and the error is not immediately found. Explain how a suspense account is used and what its balance tells you.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain what a suspense account is and when it is opened.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Describe how the suspense account is cleared once the error is found.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "State one rule for deciding which side of the suspense account to use.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Suspense account",
                statement:
                  "Temporary account absorbing the trial balance difference until the error is located.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "A suspense account is a temporary account opened when an error cannot be found immediately.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "The difference (360) is placed in it so the trial balance can be made to agree while investigation continues.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "When the error is found, the correcting entry is posted and the suspense account is cleared to zero.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "If the suspense balance equals the error amount, locating it becomes easier.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "If debits exceed credits, the suspense account takes a credit (or debit, depending on convention) — the side that restores equality.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "The suspense account must return to zero before financial statements are prepared.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Temporary account for the unexplained difference. (b) Cleared by the correcting entry. (c) Used on the side that restores balance; must reach zero.",
            commonErrors: [
              "Leaving a suspense balance in the final accounts — it must be eliminated.",
            ],
          },
        },
      ],
    },
  ],
};
