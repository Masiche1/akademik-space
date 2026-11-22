import type { Lesson } from "../../../types.ts";

export const lesson114: Lesson = {
  id: "ecn11-u3-lesson-6-1",
  code: "6-1",
  title: "Sustainable Development",
  goal: "I CAN explain sustainable development and its three pillars.",
  standards: ["Edexcel IGCSE Economics 4EC1 — The Global Economy"],
  vocabulary: [
    {
      term: "Sustainable development",
      definition: "Meeting present needs without compromising future.",
    },
    {
      term: "Economic pillar",
      definition: "Growth, jobs, income — sustainable economy.",
    },
    {
      term: "Social pillar",
      definition: "Health, education, equity, wellbeing.",
    },
    {
      term: "Environmental pillar",
      definition: "Resource conservation, pollution control.",
    },
    {
      term: "Tragedy of the commons",
      definition: "Shared resources overexploited.",
    },
  ],
  concepts: [
    {
      id: "ecn11-u3-sustain",
      title: "Three Pillars of Sustainability",
      skill: "Understand economic, social and environmental sustainability.",
      lesson: {
        sections: [
          {
            heading: "The three pillars",
            body: "**Economic**: sustainable growth — jobs, income, stable economy, without debt/dependency. **Social**: health, education, equity, gender equality, human rights — development benefits all. **Environmental**: resource conservation, pollution control, biodiversity, climate action — don't exhaust resources.\n\n**Balance needed**: all three must be addressed — economic growth at environmental cost isn't sustainable; social progress without economic base is fragile.",
          },
          {
            heading: "Environmental challenges",
            body: "**Climate change**: greenhouse gases, global warming — affects all countries. **Resource depletion**: fossil fuels, fisheries, forests. **Pollution**: air, water, soil. **Biodiversity loss**: species extinction.\n\n**Common goods problem**: atmosphere, oceans — shared resources, no single owner → overexploitation (tragedy of the commons).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Country cuts forests for agriculture income. Sustainable?",
          solution:
            "No — economic gain but environmental loss; not sustainable.",
        },
      },
      questions: [
        {
          id: "ecn11-u3-sustain-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are the three pillars of sustainable development?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Economic, social, environmental" },
              { id: "b", text: "Money, power, land" },
              { id: "c", text: "North, South, East" },
              { id: "d", text: "Rich, poor, middle" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Three pillars",
                statement: "Economic, social, environmental.",
              },
            ],
            steps: [
              {
                reasoning: "Three pillars = E, S, E.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Economic, social, environmental",
            commonErrors: ["Wrong list."],
          },
        },
        {
          id: "ecn11-u3-sustain-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give one example of unsustainable economic activity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Unsustainable",
                statement: "Depletes resources or causes lasting harm.",
              },
            ],
            steps: [
              {
                reasoning: "Overfishing — fish stocks collapse.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Deforestation for short-term profit.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Fossil fuel extraction — climate damage.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Overfishing, deforestation, fossil fuels.",
            commonErrors: ["Sustainable example.", "Only one."],
          },
        },
        {
          id: "ecn11-u3-sustain-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the tragedy of the commons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tragedy of commons",
                statement: "Shared resource overexploited.",
              },
            ],
            steps: [
              {
                reasoning: "Resource shared — no single owner.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Each user has incentive to exploit more.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Collectively overexploits — resource degrades.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: overfishing, deforestation, pollution.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Shared resource → individual incentives → collective overuse.",
            commonErrors: ["No mechanism.", "Private goods."],
          },
        },
        {
          id: "ecn11-u3-sustain-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Country wants to develop but protect environment.",
          parts: [
            {
              label: "a",
              prompt: "Suggest two sustainable policies.",
              marks: 4,
            },
            { label: "b", prompt: "Explain why balance is hard.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sustainability balance",
                statement: "Growth vs environment tension.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Invest in renewable energy/green tech.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Sustainable farming/forestry practices.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Growth pressures → environment sacrificed.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Short-term gains vs long-term costs.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) renewables+sustainable practices (b) short-term vs long-term tension",
            commonErrors: ["Only one pillar.", "No tension."],
          },
        },
      ],
    },
    {
      id: "ecn11-u3-global3",
      title: "International Organisations",
      skill: "Understand roles of WTO, IMF and World Bank.",
      lesson: {
        sections: [
          {
            heading: "WTO",
            body: "**World Trade Organisation**: promotes free trade — rules, dispute resolution, trade liberalisation. **Members** negotiate tariff reductions, resolve disputes. **Criticism**: may favour rich countries, weak enforcement for developing nations.\n\n**Role**: sets trade rules, prevents protectionism (mostly), provides forum for negotiations.",
          },
          {
            heading: "IMF and World Bank",
            body: "**IMF**: promotes monetary cooperation, financial stability — lends to countries in balance-of-payments crisis, conditions attached (austerity). **World Bank**: development finance — loans/grants for infrastructure, poverty reduction, development projects.\n\n**Criticism**: structural adjustment conditions may harm poor countries; conditionality controversial.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Country in debt crisis needs help. Which organisation?",
          solution: "IMF — lends for balance-of-payments problems.",
        },
      },
      questions: [
        {
          id: "ecn11-u3-global3-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main role of the WTO?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Set interest rates" },
              { id: "b", text: "Provide emergency aid" },
              { id: "c", text: "Promote free trade and resolve disputes" },
              { id: "d", text: "Lend money to poor countries" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "WTO",
                statement: "Free trade rules + disputes.",
              },
            ],
            steps: [
              { reasoning: "WTO = trade rules.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Free trade/disputes",
            commonErrors: ["IMF confused."],
          },
        },
        {
          id: "ecn11-u3-global3-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "When does the IMF typically lend?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "IMF role",
                statement: "Balance-of-payments crises.",
              },
            ],
            steps: [
              {
                reasoning: "Countries with BoP deficits.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Currency crises — can't pay debts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Lends with conditions — austerity, reforms.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "BoP/currency crises — with conditionality.",
            commonErrors: ["Development loans.", "Free money."],
          },
        },
        {
          id: "ecn11-u3-global3-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain one criticism of IMF/World Bank conditionality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conditionality criticism",
                statement: "Austerity may harm poor.",
              },
            ],
            steps: [
              {
                reasoning: "Conditions require spending cuts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Cuts hit health, education — poorest suffer.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "May worsen recession in short term.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Critics say one-size-fits-all approach.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Austerity conditions harm poorest; one-size-fits-all.",
            commonErrors: ["No criticism.", "Benefits only."],
          },
        },
        {
          id: "ecn11-u3-global3-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare WTO, IMF and World Bank roles.",
          parts: [
            { label: "a", prompt: "State WTO's main function.", marks: 3 },
            { label: "b", prompt: "State IMF's main function.", marks: 3 },
            {
              label: "c",
              prompt: "State World Bank's main function.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "IO roles",
                statement: "Trade vs monetary vs development.",
              },
            ],
            steps: [
              {
                reasoning: "(a) WTO: trade rules, disputes, liberalisation.",
                marks: 2,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(a) Members negotiate, enforce agreements.",
                marks: 1,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning:
                  "(b) IMF: monetary stability, BoP lending, conditions.",
                marks: 2,
                markCode: "AO1",
                part: "b",
              },
              {
                reasoning: "(b) Crisis support with conditionality.",
                marks: 1,
                markCode: "AO1",
                part: "b",
              },
              {
                reasoning:
                  "(c) World Bank: development finance, poverty reduction.",
                marks: 2,
                markCode: "AO1",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) trade rules (b) monetary/BoP (c) development finance",
            commonErrors: ["Confused roles.", "No distinction."],
          },
        },
      ],
    },
  ],
};
