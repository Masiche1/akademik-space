import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "eias-econ-u4-lesson-4-1",
  code: "4-1",
  title: "Fiscal Policy",
  goal: "I CAN explain fiscal policy tools and evaluate their effectiveness.",
  standards: [
    "Edexcel IAS Economics 9EC01 Unit 4 — Government Macroeconomic Policy",
  ],
  vocabulary: [
    {
      term: "Fiscal policy",
      definition: "Government spending and taxation decisions.",
    },
    {
      term: "Expansionary fiscal",
      definition: "Cut taxes, increase spending — boost AD.",
    },
    {
      term: "Contractionary fiscal",
      definition: "Raise taxes, cut spending — reduce AD.",
    },
    {
      term: "Budget deficit",
      definition: "Government spending exceeds tax revenue.",
    },
    {
      term: "Budget surplus",
      definition: "Tax revenue exceeds government spending.",
    },
    {
      term: "Multiplier effect",
      definition: "Initial spending creates larger total income.",
    },
  ],
  concepts: [
    {
      id: "eias-econ-u4-fiscal",
      title: "Fiscal Policy Tools",
      skill: "Explain expansionary and contractionary fiscal policy.",
      lesson: {
        sections: [
          {
            heading: "Fiscal tools",
            body: "**Government spending**: infrastructure, public services, transfers — direct AD injection. **Taxation**: income tax, corporation tax, VAT — affects disposable income and spending.\n\n**Expansionary**: cut taxes (more disposable income) + increase spending (direct injection) → AD rises → growth, jobs. **Contractionary**: raise taxes + cut spending → AD falls → inflation controlled.",
          },
          {
            heading: "Multiplier effect",
            body: "Initial spending → recipients spend → further spending → total income rises by more than initial injection. **Multiplier** = 1 ÷ (1 − MPC). Higher MPC → larger multiplier.\n\n**Leakages**: savings, taxes, imports reduce multiplier — money leaves circular flow.",
          },
        ],
        keyFormulas: [
          {
            name: "Multiplier",
            statement: "1 ÷ (1 − marginal propensity to consume).",
          },
        ],
        workedExample: {
          problem: "Government spends £1bn, MPC = 0.8. Total income increase?",
          solution: "Multiplier = 1 ÷ (1−0.8) = 5 → £5bn.",
        },
      },
      questions: [
        {
          id: "eias-econ-u4-fis-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is fiscal policy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Money supply" },
              { id: "b", text: "Government spending and taxation" },
              { id: "c", text: "Interest rates" },
              { id: "d", text: "Exchange rates" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fiscal policy",
                statement: "Spending + tax.",
              },
            ],
            steps: [
              {
                reasoning: "Fiscal = gov spending/taxation.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Spending + tax",
            commonErrors: ["Monetary confused."],
          },
        },
        {
          id: "eias-econ-u4-fis-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two tools of expansionary fiscal policy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Expansionary fiscal",
                statement: "Boost AD.",
              },
            ],
            steps: [
              {
                reasoning: "Cut taxes — increase disposable income.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Increase government spending — infrastructure, services.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Both increase AD → growth and jobs.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Tax cuts + spending increases.",
            commonErrors: ["Contractionary.", "Only one."],
          },
        },
        {
          id: "eias-econ-u4-fis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the multiplier effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multiplier",
                statement: "Spending cascade.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Initial injection → recipients spend part of income.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Each round of spending creates further income.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Total income increase > initial injection.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Leakages (saving, tax, imports) reduce multiplier.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Injection → spending rounds → amplified income.",
            commonErrors: ["1:1 only.", "No leakages."],
          },
        },
        {
          id: "eias-econ-u4-fis-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Government wants to boost growth without worsening inflation.",
          parts: [
            { label: "a", prompt: "Suggest fiscal policy.", marks: 4 },
            { label: "b", prompt: "Explain the inflation risk.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fiscal evaluation",
                statement: "Growth vs inflation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Targeted spending — infrastructure, training (supply-side boost).",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Tax cuts for investment — encourage capital formation.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) If AD rises too fast → demand-pull inflation.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Timing critical — stimulus when economy below capacity.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer: "(a) targeted fiscal (b) demand-pull risk",
            commonErrors: ["Untargeted.", "No risk."],
          },
        },
      ],
    },
    {
      id: "eias-econ-u4-fiscal-eval",
      title: "Fiscal Policy Evaluation",
      skill: "Evaluate fiscal policy strengths and weaknesses.",
      lesson: {
        sections: [
          {
            heading: "Strengths",
            body: "**Direct impact**: government spending directly creates jobs/output. **Targeted**: can aim at specific sectors/groups. **Multiplier**: amplifies initial injection. **Automatic stabilizers**: progressive tax + benefits smooth cycles.\n\n**Progressive taxation**: redistributes income — reduces inequality.",
          },
          {
            heading: "Weaknesses",
            body: "**Time lags**: recognition → decision → implementation → impact — slow. **Crowding out**: government borrowing raises interest rates → private investment falls. **Budget deficit**: persistent deficits → rising debt → interest burden. **Political bias**: governments may overspend before elections.\n\n**Ricardian equivalence**: consumers save tax cuts expecting future taxes — reduces stimulus effect.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Government borrows heavily for stimulus. Risk?",
          solution: "Crowding out — higher rates reduce private investment.",
        },
      },
      questions: [
        {
          id: "eias-econ-u4-fiseval-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is crowding out?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "More private investment" },
              { id: "b", text: "Lower taxes" },
              {
                id: "c",
                text: "Government spending reduces private investment",
              },
              { id: "d", text: "Higher savings" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Crowding out",
                statement: "Gov displaces private.",
              },
            ],
            steps: [
              {
                reasoning: "Crowding out = private investment falls.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Private displaced",
            commonErrors: ["More investment confused."],
          },
        },
        {
          id: "eias-econ-u4-fiseval-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two weaknesses of fiscal policy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fiscal weaknesses",
                statement: "Lags + deficits.",
              },
            ],
            steps: [
              {
                reasoning: "Time lags — policy impact delayed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Crowding out — higher rates reduce private investment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Budget deficit — persistent borrowing raises debt.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Lags, crowding out, deficits.",
            commonErrors: ["Strength.", "Only one."],
          },
        },
        {
          id: "eias-econ-u4-fiseval-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain Ricardian equivalence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ricardian equivalence",
                statement: "Tax cuts saved.",
              },
            ],
            steps: [
              {
                reasoning: "Consumers expect tax cuts → future tax rises.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Save rather than spend — anticipate higher future taxes.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Fiscal stimulus less effective — consumption unchanged.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Criticised — assumes perfect foresight, unrealistic.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Tax cuts saved for future taxes → less stimulus.",
            commonErrors: ["Spend immediately.", "No critique."],
          },
        },
        {
          id: "eias-econ-u4-fiseval-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A government faces high debt and rising inflation.",
          parts: [
            {
              label: "a",
              prompt: "Explain why expansionary fiscal is risky.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Suggest appropriate fiscal stance.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fiscal constraints",
                statement: "Debt + inflation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) More borrowing → debt rises → interest burden grows.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Stimulus → demand-pull inflation worse.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Contractionary — raise taxes, cut spending to reduce AD.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Or targeted supply-side spending — improve capacity without demand surge.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) debt+inflation risk (b) contractionary/targeted",
            commonErrors: ["Stimulate anyway.", "No stance."],
          },
        },
      ],
    },
  ],
};
