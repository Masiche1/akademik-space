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
              { id: "a", text: "Profits are never calculated" },
              {
                id: "b",
                text: "The business's accounts are kept separate from the owner's personal finances",
              },
              { id: "c", text: "Only cash transactions are recorded" },
              { id: "d", text: "All assets are recorded at market value" },
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
        {
          id: "cieiacct-u1-cnc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Under the money measurement concept, which of the following would NOT appear in a business's accounts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rent owed to the landlord of \\$1,200" },
              { id: "b", text: "A delivery van costing \\$8,000" },
              { id: "c", text: "The owner's reputation in the local community" },
              { id: "d", text: "Cash in the bank of \\$3,500" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Money measurement",
                statement:
                  "Only items that can be measured in money are recorded.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reputation has no reliable money value, so it is excluded; the van, rent and cash are all money-measurable.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(c) The owner's reputation cannot be measured in money.",
          },
        },
        {
          id: "cieiacct-u1-cnc-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the going concern concept and state how it affects the valuation of a business's non-current assets.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Going concern",
                statement:
                  "The business is expected to continue trading for the foreseeable future.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Going concern assumes the business will keep operating, not be closed or sold up.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Assets are therefore valued on a going-concern basis — at cost less depreciation — rather than at realisable (sale) value.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "If the business were not a going concern, assets would be valued at the amounts expected from sale instead.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Assets are kept at cost less depreciation because the business is assumed to keep trading, not be liquidated.",
            commonErrors: [
              "Confusing going concern with accruals or money measurement.",
            ],
          },
        },
        {
          id: "cieiacct-u1-cnc-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Under the accruals (matching) concept, revenue is recorded in the accounts:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "When the invoice is issued" },
              { id: "b", text: "When the goods are delivered to the customer" },
              { id: "c", text: "When the cash is actually received" },
              { id: "d", text: "When the year end is reached" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Accruals concept",
                statement:
                  "Revenue is recognised when earned, not when cash changes hands.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Revenue is earned when goods are delivered or services performed, even if payment arrives later.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) When the goods are delivered (revenue earned).",
          },
        },
        {
          id: "cieiacct-u1-cnc-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Rent of \\$18,000 is paid in advance on 1 October covering 12 months. The financial year ends on 31 December. Applying the accruals concept, calculate the prepaid rent balance at 31 December.",
          response: {
            type: "numeric",
            parts: [
              { label: "Prepaid rent", answer: 13500, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Prepayment",
                statement:
                  "Prepayment = amount paid × months relating to next period ÷ total months.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Three months (Jan–Mar next year) of the 12-month payment relate to the next period.",
                working: "3 / 12 = 0.25",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Prepayment = 25% × \\$18,000 = \\$13,500.",
                working: "18000 * 0.25 = 13500",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "\\$13,500",
            commonErrors: [
              "Charging all \\$18,000 to this year's rent instead of spreading it.",
            ],
          },
        },
        {
          id: "cieiacct-u1-cnc-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the duality (double entry) concept and state what it requires for every transaction recorded.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Duality",
                statement:
                  "Every transaction has two equal and opposite effects.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Duality means every transaction affects two accounts equally — one is debited, one is credited.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The amounts on both sides must be equal, so debits always equal credits in total.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This is what allows the trial balance to prove the books are arithmetically correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Each transaction needs an equal debit and credit — this keeps total debits equal to total credits.",
          },
        },
        {
          id: "cieiacct-u1-cnc-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A sole trader uses the business bank account to pay for a family holiday costing \\$2,000, and uses her own car for business deliveries without recording anything. For each situation, state which accounting concept is being broken and explain why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Entity concept",
                statement:
                  "Business and owner finances must be kept separate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The holiday payment breaks the business entity concept — personal spending must not enter business records.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning:
                  "The car use relates to money measurement / completeness — if the business uses the asset, any cost or benefit should be measured in money.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Recording nothing means the accounts do not give a true picture of the business's resources.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Holiday = breach of business entity concept; unrecorded car use = breach of money measurement/completeness.",
            commonErrors: [
              "Naming the wrong concept for each situation.",
            ],
          },
        },
        {
          id: "cieiacct-u1-cnc-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement best describes the prudence concept?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Use the same accounting methods every year",
              },
              {
                id: "b",
                text: "Ignore small amounts that do not affect decisions",
              },
              {
                id: "c",
                text: "Anticipate no profits but provide for all possible losses",
              },
              {
                id: "d",
                text: "Record every possible profit as soon as it might arise",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Prudence",
                statement:
                  "Do not anticipate profits, but do provide for all foreseeable losses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Prudence is the cautious convention: no expected profits, but all possible losses must be provided for.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Anticipate no profits but provide for all possible losses.",
          },
        },
        {
          id: "cieiacct-u1-cnc-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why accounting concepts are necessary for the accounts of two different businesses to be compared.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparability",
                statement:
                  "Common rules make figures from different businesses comparable.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Concepts are common rules every accountant follows, so similar transactions are treated identically.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Without them, each business could choose its own methods and produce figures that cannot be meaningfully compared.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Consistency adds year-on-year comparability within a business, while common concepts give comparability between businesses.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Shared concepts ensure similar transactions are recorded the same way, making figures comparable across businesses and over time.",
          },
        },
        {
          id: "cieiacct-u1-cnc-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "The materiality concept allows a business to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Change accounting methods whenever convenient",
              },
              {
                id: "b",
                text: "Record only transactions above \\$1,000",
              },
              {
                id: "c",
                text: "Treat insignificant items simply because they cannot affect decisions",
              },
              {
                id: "d",
                text: "Ignore all expenses below a fixed amount permanently",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Materiality",
                statement:
                  "Items too small to influence users' decisions need not be treated precisely.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Materiality permits simplified treatment of insignificant items — it does not permit ignoring them entirely or changing methods.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) Treat insignificant items simply because they cannot affect decisions.",
          },
        },
        {
          id: "cieiacct-u1-cnc-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "At 31 December, electricity of \\$1,500 has been used but not yet paid. Applying the accruals concept, state the amount of accrued expense and the adjusting entry required.",
          response: {
            type: "numeric",
            parts: [
              { label: "Accrued expense", answer: 1500, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Accruals concept",
                statement:
                  "Expenses are recorded when incurred, even if not yet paid.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The \\$1,500 of electricity used belongs to this period, so it must be accrued.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Entry: Dr electricity expense \\$1,500, Cr accrued expenses (creditor) \\$1,500.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Accrued expense \\$1,500 — Dr electricity \\$1,500, Cr accrued expenses \\$1,500.",
            commonErrors: [
              "Waiting until payment is made, which breaks the matching concept.",
            ],
          },
        },
        {
          id: "cieiacct-u1-cnc-q15",
          difficulty: "challenge",
          totalMarks: 5,
          parts: [
            {
              label: "a",
              prompt:
                "Explain how the accruals concept applies differently to accrued income and prepaid expenses.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Give one example of a transaction where the money measurement concept would prevent recording in the accounts.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Accruals & money measurement",
                statement:
                  "Match income/expenses to the period; only money-measurable items are recorded.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Accrued income (earned, not received) is recorded as a debit asset and credit income in the current period.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Prepaid expenses (paid, not yet used) are recorded as an asset and only the used portion is expensed this period.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Both adjustments match amounts to the correct period, giving a true profit figure.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Example: the value of the owner's personal reputation or staff morale — important but not money-measurable.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Because it cannot be reliably measured in money, it is excluded from the accounts.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Accrued income is earned-not-received (asset); prepaid expenses are paid-not-used (asset). Both match amounts to the right period. (b) Non-money items like reputation are excluded.",
          },
        },
        {
          id: "cieiacct-u1-cnc-q16",
          difficulty: "challenge",
          totalMarks: 6,
          parts: [
            {
              label: "a",
              prompt:
                "A business has been making losses for three years and may close next year. State which concept is now questionable and what change it would cause in the accounts.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "A firm changes from straight-line to reducing-balance depreciation this year, doubling last year's depreciation charge. Explain the impact on comparability and which concept addresses it.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Going concern & consistency",
                statement:
                  "Going concern assumes continued trading; consistency requires same methods yearly.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The going concern concept is questionable — continued trading can no longer be assumed.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Assets would then be valued at realisable (net realisable sale) values rather than cost less depreciation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Profits and the balance sheet would need re-measurement on a break-up basis.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Changing depreciation methods breaks consistency, so this year's profit cannot be fairly compared with last year's.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Users cannot tell whether the profit change reflects performance or the new method.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "A change of method should be disclosed and applied consistently from then on.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Going concern fails — assets valued at realisable values. (b) Consistency broken — comparison distorted; change must be disclosed and kept consistent.",
            commonErrors: [
              "Confusing the two concepts — going concern affects valuation, consistency affects method choice.",
            ],
          },
        },
      ],
    },
  ],
};
