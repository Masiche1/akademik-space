import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "cieiacct-u1-lesson-1-3",
  code: "1-3",
  title: "Accounting concepts and conventions",
  goal: "I CAN explain the fundamental accounting concepts and apply them when recording transactions.",
  standards: [
    "Cambridge IGCSE Accounting 0452",
    "Section 1: The purpose of accounting",
  ],
  vocabulary: [
    {
      term: "Business entity concept",
      definition:
        "Business finances are kept separate from the owner's personal finances.",
    },
    {
      term: "Going concern",
      definition:
        "The business will continue trading for the foreseeable future.",
    },
    {
      term: "Money measurement",
      definition:
        "Only items measurable in money are recorded in the accounts.",
    },
    {
      term: "Accruals concept",
      definition:
        "Income and expenses are recorded when earned or incurred, not when cash changes hands.",
    },
    {
      term: "Prudence",
      definition: "Anticipate no profits but provide for all possible losses.",
    },
    {
      term: "Consistency",
      definition: "The same accounting methods are used from year to year.",
    },
  ],
  concepts: [
    {
      id: "cieiacct-u1-concepts",
      title: "Fundamental accounting concepts",
      skill:
        "Apply accounting concepts to decide how transactions should be recorded.",
      lesson: {
        sections: [
          {
            heading: "Core concepts",
            body: "**Business entity**: the firm's accounts exclude the owner's personal transactions. **Going concern**: assets are valued on the assumption the business keeps trading. **Money measurement**: only items with a money value appear — the owner's reputation or staff skill are not recorded. **Accruals (matching)**: revenue is matched with the expenses that earned it in the same period.",
          },
          {
            heading: "Conventions for objectivity",
            body: "**Prudence**: do not anticipate profits, but do provide for foreseeable losses — e.g. create a provision for doubtful debts. **Consistency**: use the same methods each year so results are comparable. **Materiality**: only items significant enough to affect decisions need careful treatment. **Duality (double entry)**: every transaction has two equal effects — a debit and a credit.",
          },
          {
            heading: "Why concepts matter",
            body: "Without these rules, two accountants could produce completely different figures for the same business. Concepts make accounting **objective, comparable and verifiable** — which is what gives stakeholders confidence in the numbers.",
          },
        ],
        keyFormulas: [
          {
            name: "Entity boundary",
            statement:
              "Only business transactions enter the books — never personal ones",
          },
          {
            name: "Match & prudence",
            statement:
              "Match revenue to expenses; anticipate losses, not profits",
          },
        ],
        workedExample: {
          problem:
            "A trader uses his own car for deliveries and sometimes buys groceries from the business account. Which concept is broken?",
          solution:
            "The business entity concept — personal and business finances must be kept separate; private purchases should not appear in business records.",
        },
      },
      questions: [
        {
          id: "cieiacct-u1-cnc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The business entity concept requires that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only cash transactions are recorded" },
              {
                id: "b",
                text: "The business's accounts are kept separate from the owner's personal finances",
              },
              { id: "c", text: "All assets are recorded at market value" },
              { id: "d", text: "Profits are never calculated" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Business entity",
                statement: "Business and owner finances are separate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The entity concept keeps business transactions apart from the owner's personal ones.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) Business and personal finances are kept separate.",
            commonErrors: ["Confusing entity concept with money measurement."],
          },
        },
        {
          id: "cieiacct-u1-cnc-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what the accruals (matching) concept means and give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Accruals concept",
                statement:
                  "Revenue and expenses are matched in the period they are earned or incurred.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Revenue is recorded when earned, not when cash is received; expenses when incurred, not when paid.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: rent paid in advance is matched against the months it covers, not all in one period.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This gives a true picture of profit for the period.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Match revenue and expenses to the period earned/incurred — e.g. spread prepaid rent over its months.",
            commonErrors: [
              "Saying accruals means 'record everything immediately' without the matching idea.",
            ],
          },
        },
        {
          id: "cieiacct-u1-cnc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A business is owed money by a customer who has gone bankrupt. Applying prudence, what should the accountant do?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prudence",
                statement:
                  "Anticipate no profits but provide for all possible losses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Prudence requires providing for foreseeable losses rather than hoping for recovery.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Create (or increase) a provision for doubtful debts, or write off the amount if recovery is impossible.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "This avoids overstating assets and profit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Provide for the debt (provision for doubtful debts or write-off) so losses are not overstated.",
            commonErrors: [
              "Ignoring the debt until the customer formally defaults.",
            ],
          },
        },
        {
          id: "cieiacct-u1-cnc-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain how consistency and materiality concepts affect the preparation of accounts.",
          parts: [
            { label: "a", prompt: "Define each concept.", marks: 2 },
            {
              label: "b",
              prompt:
                "Explain one problem that arises if a business changes its depreciation method every year.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Give an example where materiality allows a simplified treatment.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Consistency & materiality",
                statement:
                  "Same methods yearly for comparability; insignificant items may be treated simply.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Consistency: use the same methods from year to year.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Materiality: items too small to influence decisions need not be treated precisely.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Changing methods makes year-to-year comparison meaningless and can be used to manipulate profit.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Users cannot tell whether changes reflect performance or accounting policy.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Example: a small stationery expense may be recorded as incurred rather than prepaid/apportioned precisely.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Because the amount cannot affect any user's decision, precision would waste effort.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Consistency = same methods yearly; materiality = insignificant items need simple treatment. (b) Comparability lost. (c) Small expenses treated simply.",
            commonErrors: [
              "Confusing materiality with 'unimportant, ignore completely'.",
            ],
          },
        },
      ],
    },
  ],
};
