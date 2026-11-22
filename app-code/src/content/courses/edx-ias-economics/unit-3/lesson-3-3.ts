import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "eias-econ-u3-lesson-3-3",
  code: "3-3",
  title: "Macroeconomic Objectives and Trade-offs",
  goal: "I CAN explain government macroeconomic objectives and their conflicts.",
  standards: ["Edexcel IAS Economics 9EC01 Unit 3 — Macroeconomic Performance"],
  vocabulary: [
    {
      term: "Macroeconomic objectives",
      definition:
        "Government goals — growth, low unemployment, low inflation, BoP.",
    },
    {
      term: "Trade-off",
      definition: "Conflict between objectives — can't maximise all.",
    },
    {
      term: "Phillips curve",
      definition: "Inverse relationship between inflation and unemployment.",
    },
    {
      term: "NAIRU",
      definition: "Non-accelerating inflation rate of unemployment.",
    },
    {
      term: "Automatic stabilisers",
      definition:
        "Policies that automatically smooth cycles — taxes, benefits.",
    },
    {
      term: "Demand management",
      definition: "Fiscal and monetary policy to manage AD.",
    },
  ],
  concepts: [
    {
      id: "eias-econ-u3-objectives",
      title: "Government Macroeconomic Objectives",
      skill: "Explain objectives and their trade-offs.",
      lesson: {
        sections: [
          {
            heading: "The objectives",
            body: "**Sustainable growth**: steady real GDP increase. **Low unemployment**: full employment — frictional+structural only. **Low stable inflation**: ~2% target — price stability. **BoP equilibrium**: manageable current account.\n\n**Trade-offs**: growth vs inflation (too fast → demand-pull), unemployment vs inflation (Phillips curve), growth vs environment, equity vs efficiency.",
          },
          {
            heading: "Phillips curve",
            body: "Short-run: lower unemployment → higher inflation (wage-price spiral). Long-run: vertical at NAIRU — no permanent trade-off.\n\n**Example**: stimulus reduces unemployment but may raise inflation — government must balance.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Government cuts interest rates to boost growth. Risk?",
          solution: "Higher inflation if demand overheats.",
        },
      },
      questions: [
        {
          id: "eias-econ-u3-obj-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are the main macroeconomic objectives?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only inflation" },
              { id: "b", text: "Only growth" },
              { id: "c", text: "Only employment" },
              { id: "d", text: "Growth, low unemployment, low inflation, BoP" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Objectives",
                statement: "Multiple goals.",
              },
            ],
            steps: [
              {
                reasoning: "Objectives = growth, jobs, prices, BoP.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Multiple goals",
            commonErrors: ["Single objective."],
          },
        },
        {
          id: "eias-econ-u3-obj-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the growth-inflation trade-off.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trade-off",
                statement: "Can't maximise both.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Faster growth → more demand → demand-pull inflation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Slower growth → less demand → lower inflation but higher unemployment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Government must choose — can't have both maximum.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Growth↑ → inflation↑ — trade-off.",
            commonErrors: ["No trade-off.", "Only one."],
          },
        },
        {
          id: "eias-econ-u3-obj-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the Phillips curve relationship.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Phillips curve",
                statement: "Inflation-unemployment.",
              },
            ],
            steps: [
              {
                reasoning: "Short-run: lower unemployment → higher inflation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Mechanism: tight labour market → wage demands → costs → prices.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Long-run: vertical at NAIRU — no permanent trade-off.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Expectations adjust — can't permanently trade inflation for jobs.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "SR trade-off, LR vertical at NAIRU.",
            commonErrors: ["Permanent trade-off.", "No mechanism."],
          },
        },
        {
          id: "eias-econ-u3-obj-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Government wants to reduce unemployment but inflation is already 6%.",
          parts: [
            { label: "a", prompt: "Explain the dilemma.", marks: 4 },
            { label: "b", prompt: "Suggest a balanced approach.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Policy trade-off",
                statement: "Balance needed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Stimulus to cut unemployment → more demand → inflation worse.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Tightening to cut inflation → unemployment rises.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Supply-side policies — improve productivity, reduce structural unemployment.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Gradual approach — small stimulus while controlling inflation.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) stimulus vs tightening (b) supply-side+gradual",
            commonErrors: ["Ignore inflation.", "No balance."],
          },
        },
      ],
    },
    {
      id: "eias-econ-u3-stabilisers",
      title: "Automatic Stabilizers and Demand Management",
      skill: "Explain fiscal and monetary policy tools.",
      lesson: {
        sections: [
          {
            heading: "Automatic stabilizers",
            body: "**Progressive taxes**: income falls → tax revenue falls proportionally more. **Welfare benefits**: unemployment rises → benefit payments rise. Both smooth business cycle automatically.\n\n**Discretionary policy**: deliberate fiscal (gov spending/tax) and monetary (interest rates, money supply) actions.",
          },
          {
            heading: "Demand management",
            body: "**Expansionary**: cut taxes, increase spending, lower interest rates — boost AD, growth, jobs. **Contractionary**: raise taxes, cut spending, raise rates — reduce inflation.\n\n**Evaluation**: fiscal policy flexible but slow (legislation); monetary policy fast but may not reach all sectors.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Recession hits — benefits automatically rise, taxes fall. Effect?",
          solution: "Automatic stabiliser — cushions the downturn.",
        },
      },
      questions: [
        {
          id: "eias-econ-u3-as-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are automatic stabilizers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Central bank rates" },
              { id: "b", text: "Deliberate policy" },
              {
                id: "c",
                text: "Policies that automatically smooth business cycles",
              },
              { id: "d", text: "Government spending" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Automatic stabilizers",
                statement: "Built-in smoothing.",
              },
            ],
            steps: [
              {
                reasoning: "Auto stabilizers = automatic fiscal response.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Automatic smoothing",
            commonErrors: ["Discretionary confused."],
          },
        },
        {
          id: "eias-econ-u3-as-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of automatic stabilizers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stabilizers",
                statement: "Taxes + benefits.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Progressive income tax — falls automatically in recession.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Unemployment benefits — rise automatically when jobs lost.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Corporation tax — falls with profits.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Progressive tax, benefits, corp tax.",
            commonErrors: ["Deliberate policy.", "Only one."],
          },
        },
        {
          id: "eias-econ-u3-as-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare fiscal and monetary policy for demand management.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Policy tools",
                statement: "Speed vs reach.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fiscal: government spending/tax — direct AD impact but slow.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Monetary: interest rates/money supply — fast but indirect.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Fiscal can target sectors; monetary affects all borrowing.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Monetary independent of politics; fiscal politically influenced.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Fiscal=direct/slow; monetary=indirect/fast.",
            commonErrors: ["Same thing.", "No comparison."],
          },
        },
        {
          id: "eias-econ-u3-as-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Economy in recession with 8% unemployment.",
          parts: [
            { label: "a", prompt: "Suggest fiscal response.", marks: 4 },
            { label: "b", prompt: "Suggest monetary response.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Expansionary policy",
                statement: "Boost AD.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Cut taxes — increase disposable income, boost consumption.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Increase government spending — infrastructure, public services.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Lower interest rates — cheaper borrowing, more investment.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Quantitative easing — increase money supply if rates at zero.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) tax cut+spending (b) rate cut+QE",
            commonErrors: ["Contractionary.", "One tool only."],
          },
        },
      ],
    },
  ],
};
