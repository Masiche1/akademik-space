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
              { id: "a", text: "Total debits equal to total credits" },
              { id: "b", text: "Total debits greater than total credits" },
              { id: "c", text: "Only credit balances" },
              { id: "d", text: "Every account with a debit balance" },
            ],
            correctChoiceId: "a",
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
        {
          id: "cieiacct-u2-tb-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following errors would be revealed by a trial balance that does not agree?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the debit side of a transaction was entered" },
              { id: "b", text: "A transaction was never recorded at all" },
              { id: "c", text: "A sale was posted to the wrong customer's account" },
              { id: "d", text: "A machine was wrongly recorded as an expense" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Detectable errors",
                statement:
                  "Errors that make debits unequal to credits are revealed; equal-sided errors are not.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A missing half-entry unbalances debits and credits; the others keep them equal.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Only one side entered.",
          },
        },
        {
          id: "cieiacct-u2-tb-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An error of omission (a transaction never entered in the books) would be detected by the trial balance:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only if the amount was over $100" },
              { id: "b", text: "Only at year end" },
              { id: "c", text: "Never — no debit or credit was made, so totals still agree" },
              { id: "d", text: "Always — every error unbalances the books" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Error of omission",
                statement: "No entry at all — debits and credits remain equal.",
              },
            ],
            steps: [
              {
                reasoning:
                  "With no entry on either side, the trial balance still agrees.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Never.",
          },
        },
        {
          id: "cieiacct-u2-tb-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A trial balance shows total debits of $8,500 and total credits of $8,300. What is the difference between the two sides?",
          response: {
            type: "numeric",
            parts: [{ label: "Difference", answer: 200, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "TB difference",
                statement: "Difference = total debits − total credits.",
              },
            ],
            steps: [
              {
                reasoning: "8500 - 8300.",
                working: "8500 - 8300",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Difference = $200 (debits exceed credits).",
                working: "8500 - 8300 = 200",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$200",
          },
        },
        {
          id: "cieiacct-u2-tb-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "A business debited the motor expenses account instead of the motor vehicles account for a $6,000 van purchase. State whether the trial balance would agree and explain your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Error of principle",
                statement:
                  "Recording a capital item as revenue/expense keeps debits and credits equal.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The trial balance would agree — both sides are still $6,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The error is one of principle: a non-current asset was treated as an expense.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Only the account classification is wrong, not the amounts, so totals still balance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Yes, it would agree — equal amounts on both sides hide the wrong account type.",
          },
        },
        {
          id: "cieiacct-u2-tb-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "An amount of $450 was entered in the books as $540. The trial balance would:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Not agree — the difference would be $90" },
              { id: "b", text: "Agree — the amount is still recorded" },
              { id: "c", text: "Agree if both sides used $540" },
              { id: "d", text: "Not agree — the difference would be $450" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Incorrect amount",
                statement:
                  "A wrong amount on one side unbalances the trial balance by the difference.",
              },
            ],
            steps: [
              {
                reasoning:
                  "540 − 450 = 90, so debits and credits differ by $90.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Not agree — difference $90.",
          },
        },
        {
          id: "cieiacct-u2-tb-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "The trial balance shows total debits exceeding total credits by $250. A suspense account is opened. What will the balance on the suspense account be?",
          response: {
            type: "numeric",
            parts: [{ label: "Suspense balance", answer: 250, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Suspense account",
                statement:
                  "The suspense account takes the amount of the unexplained difference.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The suspense account absorbs the $250 difference to make the trial balance agree.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Balance = $250 (credit side, since debits are higher).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$250 credit",
          },
        },
        {
          id: "cieiacct-u2-tb-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between an error of commission and an error of principle, giving an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Commission vs principle",
                statement:
                  "Commission = wrong account of the same type; principle = wrong type of account.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Error of commission: right type of account but wrong one — e.g. debit Mr A's account instead of Mr B's for a receipt.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Error of principle: an item recorded in the wrong category — e.g. a motor vehicle recorded as motor expenses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both keep debits equal to credits, so neither is detected by the trial balance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Commission = wrong account of same type (Mr A vs Mr B); principle = wrong category (asset as expense). Both hide from the TB.",
          },
        },
        {
          id: "cieiacct-u2-tb-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Two errors occurred: one understated sales by $400 and another overstated purchases by $400. The trial balance would:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Agree — the errors compensate each other" },
              { id: "b", text: "Agree only if both were on the debit side" },
              { id: "c", text: "Not agree — the difference would be $800" },
              { id: "d", text: "Not agree — any two errors must unbalance it" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Compensating errors",
                statement:
                  "Two errors of equal amount can cancel out, leaving the trial balance in agreement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Equal and opposite effects cancel — the trial balance cannot reveal compensating errors.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Agree — compensating errors.",
          },
        },
        {
          id: "cieiacct-u2-tb-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two errors are found in the books: credits were understated by $180 (a missing credit entry) and debits were overstated by $120 (a wrong amount). By how much did the trial balance disagree before correction?",
          response: {
            type: "numeric",
            parts: [{ label: "Difference", answer: 300, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Combined effect",
                statement:
                  "The TB difference equals the sum of errors pushing debits above credits.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Credits understated by $180 means debits exceed credits by $180; debits overstated by $120 adds another $120.",
                working: "180 + 120",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both errors push the same direction — debits higher than credits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total difference = $300.",
                working: "180 + 120 = 300",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$300",
          },
        },
        {
          id: "cieiacct-u2-tb-q14",
          difficulty: "challenge",
          totalMarks: 4,
          parts: [
            {
              label: "a",
              prompt:
                "State two errors that a trial balance CAN detect.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "State two errors that a trial balance CANNOT detect.",
              marks: 2,
            },
          ],
          stem: "A student claims a trial balance detects every bookkeeping error.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "TB limitations",
                statement:
                  "The TB only checks that debits equal credits — it cannot check account accuracy.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Any two of: single-entry (missing half), wrong-side entry, incorrect amount on one side, transposition.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Any two of: omission, commission, principle, compensating errors, original error.",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) Single-entry, wrong-side, wrong amount, transposition. (b) Omission, commission, principle, compensating, original.",
          },
        },
        {
          id: "cieiacct-u2-tb-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of the following would cause a trial balance to disagree?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A van wrongly recorded as an expense" },
              { id: "b", text: "A receipt posted to the wrong debtor's account" },
              { id: "c", text: "A $300 payment entered on the wrong side of an account" },
              { id: "d", text: "An invoice never entered in the books" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Wrong-side entry",
                statement:
                  "Entering on the wrong side reverses the effect and unbalances debits and credits.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Options b, c and d all keep debits equal to credits; only the wrong-side entry unbalances the TB.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Wrong-side entry.",
          },
        },
        {
          id: "cieiacct-u2-tb-q16",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "Explain why a trial balance is prepared before the financial statements.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "The trial balance disagrees by $480 and the error cannot be found at once. Describe how the suspense account is used.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "State what must be true of the suspense account before financial statements are prepared.",
              marks: 2,
            },
          ],
          stem: "A business is preparing its year-end accounts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Suspense account",
                statement:
                  "Temporary account absorbing the TB difference until the error is located and corrected.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "It is an arithmetical check that debits equal credits before figures are used in the statements.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "If it disagrees, an error must be found or suspended before accurate statements can be prepared.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The $480 difference is entered to the suspense account so the trial balance can be made to agree while the search continues.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Once the error is found, a correcting entry is posted through the suspense account to clear it.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "The suspense account must have a zero balance — it is temporary and must not appear in the final accounts.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "If a balance remains, the error is still unresolved and the accounts cannot be finalised.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) It verifies the books arithmetically before statements are drawn up. (b) Difference parked in suspense until error found. (c) Must be zero before final accounts.",
            commonErrors: [
              "Including the suspense balance in the income statement — it must be eliminated first.",
            ],
          },
        },
      ],
    },
  ],
};
