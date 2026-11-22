import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "ecn11-u1-lesson-1-3",
  code: "1-3",
  title: "Macroeconomic Objectives and Conflicts",
  goal: "I CAN evaluate economic objectives and their conflicts.",
  standards: ["Edexcel IGCSE Economics 4EC1 — Macroeconomics"],
  vocabulary: [
    {
      term: "Macroeconomic objectives",
      definition:
        "Growth, low unemployment, low inflation, balance of payments.",
    },
    {
      term: "Phillips curve",
      definition: "Trade-off between inflation and unemployment.",
    },
    {
      term: "Balance of payments",
      definition: "Record of international transactions.",
    },
    {
      term: "Exchange rate",
      definition: "Value of currency relative to others.",
    },
    {
      term: "Policy conflict",
      definition: "Aims competing — can't achieve all.",
    },
  ],
  concepts: [
    {
      id: "ecn11-u1-objectives",
      title: "Macroeconomic Objectives",
      skill: "Identify objectives and evaluate policy trade-offs.",
      lesson: {
        sections: [
          {
            heading: "The four objectives",
            body: "**Economic growth**: rising real GDP — living standards. **Low unemployment**: full employment — resources used. **Low inflation**: stable prices — purchasing power. **Balance of payments**: sustainable international position.\n\n**Conflicts**: growth vs inflation (fast growth → demand-pull), low unemployment vs low inflation (tight labour market → wage inflation), growth vs environment, short-term vs long-term.",
          },
          {
            heading: "Phillips curve",
            body: "**Original Phillips curve**: inverse relationship — low unemployment → high inflation. **Long-run**: no trade-off — unemployment returns to natural rate regardless of inflation. **Expectations-augmented**: only unexpected inflation reduces unemployment.\n\n**Policy dilemma**: stimulate economy → growth/jobs but inflation risk; tighten → control inflation but slow growth/unemployment.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Government cuts interest rates to boost growth. What conflict may arise?",
          solution:
            "Growth vs inflation — more spending may cause demand-pull inflation.",
        },
      },
      questions: [
        {
          id: "ecn11-u1-objectives-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two macroeconomic objectives.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "High taxes and low spending" },
              { id: "b", text: "Growth and low unemployment" },
              { id: "c", text: "Growth and high inflation" },
              { id: "d", text: "Imports and exports" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Objectives",
                statement: "Growth, low unemployment, low inflation, BoP.",
              },
            ],
            steps: [
              {
                reasoning: "Growth + low unemployment = objectives.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Growth and low unemployment",
            commonErrors: ["Inflation as objective — it's to be low."],
          },
        },
        {
          id: "ecn11-u1-objectives-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain one conflict between macroeconomic objectives.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Objective conflict",
                statement: "Can't achieve all simultaneously.",
              },
            ],
            steps: [
              {
                reasoning: "Growth vs inflation — fast growth → demand-pull.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Low unemployment vs low inflation — tight labour market → wage inflation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Short-term vs long-term trade-offs.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Growth vs inflation, or unemployment vs inflation.",
            commonErrors: ["No conflict.", "Only one aim."],
          },
        },
        {
          id: "ecn11-u1-objectives-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the Phillips curve trade-off.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Phillips curve",
                statement: "Low unemployment ↔ high inflation.",
              },
            ],
            steps: [
              {
                reasoning: "Tight labour market → wages rise.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Higher wages → higher costs → higher prices.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "So low unemployment → high inflation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Policy choice: jobs or price stability.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Low unemployment → wage inflation; can't have both fully.",
            commonErrors: ["No mechanism.", "No trade-off."],
          },
        },
        {
          id: "ecn11-u1-objectives-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Economy has 6% unemployment and 1% inflation.",
          parts: [
            {
              label: "a",
              prompt: "Which objective is being prioritised?",
              marks: 3,
            },
            {
              label: "b",
              prompt: "What policy might government use?",
              marks: 3,
            },
            { label: "c", prompt: "What conflict might result?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Policy trade-off",
                statement: "Stimulus for jobs vs inflation risk.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Low inflation prioritised — 1% is below target.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Or balanced — low inflation but high unemployment.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Expansionary fiscal/monetary — stimulus.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Lower rates, more spending.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Growth/inflation conflict — stimulus may cause inflation.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) inflation priority (b) stimulus (c) inflation risk",
            commonErrors: ["Wrong priority.", "No conflict."],
          },
        },
      ],
    },
    {
      id: "ecn11-u1-policy",
      title: "Policy Evaluation",
      skill: "Evaluate fiscal, monetary and supply-side policies.",
      lesson: {
        sections: [
          {
            heading: "Policy toolkit",
            body: "**Fiscal**: government spending + taxation — direct, fast, but may cause debt/inflation. **Monetary**: interest rates + money supply — indirect, central bank independent, but slow. **Supply-side**: education, deregulation, infrastructure — long-term growth, slow to work.\n\n**Evaluation criteria**: effectiveness, time lags, side effects, equity, sustainability.",
          },
          {
            heading: "Evaluation framework",
            body: "**Strengths**: clear objectives, measurable outcomes, addresses specific problems. **Weaknesses**: time lags (monetary ~18 months), unintended consequences, political constraints, may not work in all conditions.\n\n**Example**: fiscal stimulus works in recession but causes inflation in boom — context matters.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Should government use fiscal or monetary policy to boost growth?",
          solution:
            "Depends — fiscal faster but debt risk; monetary slower but independent.",
        },
      },
      questions: [
        {
          id: "ecn11-u1-policy-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main difference between fiscal and monetary policy?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Fiscal = government spending/tax; monetary = interest rates",
              },
              { id: "b", text: "Both use interest rates" },
              { id: "c", text: "Both are the same" },
              { id: "d", text: "Fiscal is faster always" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fiscal vs monetary",
                statement: "Govt spending vs interest rates.",
              },
            ],
            steps: [
              {
                reasoning: "Fiscal = spending/tax; monetary = rates.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Spending/tax vs rates",
            commonErrors: ["Same confused."],
          },
        },
        {
          id: "ecn11-u1-policy-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give one strength and one weakness of fiscal policy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fiscal evaluation",
                statement: "Direct/fast vs debt/inflation.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: direct, fast impact.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Strength: targets specific areas.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Weakness: budget deficit/debt, inflation risk.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Strength: direct/fast. Weakness: debt/inflation.",
            commonErrors: ["Only one side.", "No example."],
          },
        },
        {
          id: "ecn11-u1-policy-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why supply-side policies take time to work.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Supply-side lags",
                statement: "Education/infrastructure take years.",
              },
            ],
            steps: [
              {
                reasoning: "Education/training takes years to improve skills.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Infrastructure projects take time to build.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Workers need time to learn/apply skills.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "But effects are long-lasting and sustainable.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Skills/infrastructure take years — but long-lasting benefits.",
            commonErrors: ["Instant assumed.", "No reason."],
          },
        },
        {
          id: "ecn11-u1-policy-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Economy in recession — government must choose policy.",
          parts: [
            {
              label: "a",
              prompt: "Compare fiscal vs monetary stimulus.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Recommend one with justification.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Policy choice",
                statement: "Match policy to situation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Fiscal: direct spending, fast, but debt.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Monetary: rates, indirect, slower, independent.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Recommend based on context — e.g., fiscal if urgent, monetary if debt concern.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(b) Justification: speed vs sustainability.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) fiscal=fast+debt vs monetary=slower+independent (b) context-dependent",
            commonErrors: ["Same policy.", "No justification."],
          },
        },
      ],
    },
  ],
};
