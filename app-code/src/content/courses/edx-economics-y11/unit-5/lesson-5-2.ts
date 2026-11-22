import type { Lesson } from "../../../types.ts";

export const lesson112: Lesson = {
  id: "ecn11-u2-lesson-5-2",
  code: "5-2",
  title: "International Trade and Protection",
  goal: "I CAN evaluate free trade vs protectionism.",
  standards: ["Edexcel IGCSE Economics 4EC1 — The Global Economy"],
  vocabulary: [
    {
      term: "Free trade",
      definition: "Trade without barriers — no tariffs/quotas.",
    },
    {
      term: "Protectionism",
      definition: "Restricting imports to protect domestic industry.",
    },
    { term: "Tariff", definition: "Tax on imported goods." },
    { term: "Quota", definition: "Limit on import quantity." },
    {
      term: "Dumping",
      definition: "Selling below cost abroad to gain market share.",
    },
  ],
  concepts: [
    {
      id: "ecn11-u2-protection",
      title: "Trade Protection Methods",
      skill: "Understand tariffs, quotas and other protectionist measures.",
      lesson: {
        sections: [
          {
            heading: "Tariffs and quotas",
            body: "**Tariff**: tax on imports — raises price, reduces quantity, protects domestic producers. Revenue goes to government. **Quota**: limit on import quantity — similar price effect but no revenue (unless licences sold).\n\n**Non-tariff barriers**: regulations, standards, subsidies to domestic firms, bureaucratic delays, voluntary export restraints.",
          },
          {
            heading: "Arguments for protection",
            body: "**Protect jobs**: save domestic industries/employment. **Infant industries**: protect new industries until competitive. **National security**: essential industries (defence, food). **Prevent dumping**: stop below-cost imports destroying domestic firms. **Fair competition**: counter foreign subsidies.\n\n**Arguments against**: higher prices for consumers, inefficiency, retaliation, reduced choice, can protect inefficient firms.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Government puts 20% tariff on imported steel. Effect?",
          solution:
            "Steel imports cost more → domestic steel demand rises → domestic producers protected.",
        },
      },
      questions: [
        {
          id: "ecn11-u2-protection-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a tariff?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Free trade agreement" },
              { id: "b", text: "Government subsidy" },
              { id: "c", text: "Limit on import quantity" },
              { id: "d", text: "Tax on imported goods" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tariff",
                statement: "Tax on imports.",
              },
            ],
            steps: [
              { reasoning: "Tariff = import tax.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Import tax",
            commonErrors: ["Quota confused."],
          },
        },
        {
          id: "ecn11-u2-protection-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does a tariff protect domestic producers?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tariff effect",
                statement: "Raises import price → domestic demand shifts.",
              },
            ],
            steps: [
              {
                reasoning: "Import price rises — less competitive.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Consumers switch to domestic goods.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Domestic producers sell more — protected.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Import price up → domestic demand up → producers protected.",
            commonErrors: ["No mechanism.", "Free trade."],
          },
        },
        {
          id: "ecn11-u2-protection-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Give two arguments against trade protection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Against protection",
                statement: "Prices, efficiency, retaliation.",
              },
            ],
            steps: [
              {
                reasoning: "Higher prices for consumers — less choice.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Protects inefficient firms — no innovation incentive.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Retaliation — trading partners impose barriers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reduces economic growth/efficiency.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Higher prices, inefficiency, retaliation.",
            commonErrors: ["Only benefits.", "Only one."],
          },
        },
        {
          id: "ecn11-u2-protection-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Government considers tariffs on imported cars to save domestic jobs.",
          parts: [
            {
              label: "a",
              prompt: "Explain the argument for tariffs.",
              marks: 3,
            },
            { label: "b", prompt: "Explain two arguments against.", marks: 3 },
            { label: "c", prompt: "Suggest alternative policy.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Protection evaluation",
                statement: "Jobs vs prices/efficiency.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Tariffs protect domestic car industry/jobs.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Prevents foreign competition overwhelming market.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Consumers pay more — less choice.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Retaliation — other countries tariff UK exports.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Retrain workers / support industry competitiveness.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) protect jobs (b) prices+retaliation (c) retraining/support",
            commonErrors: ["Only one side.", "No alternative."],
          },
        },
      ],
    },
    {
      id: "ecn11-u2-global2",
      title: "Globalisation and Multinationals",
      skill: "Understand globalisation, MNCs and their impacts.",
      lesson: {
        sections: [
          {
            heading: "Multinational corporations",
            body: "**MNCs**: companies operating in multiple countries — e.g., Nike, Apple, Toyota. **Benefits for host country**: jobs, investment, technology transfer, tax revenue, exports. **Drawbacks**: profit repatriation, exploitation, environmental damage, crowding out local firms.\n\n**Globalisation**: increased interconnectedness — trade, investment, migration, information, culture. **Drivers**: technology, trade liberalisation, containerisation, internet.",
          },
          {
            heading: "Impacts of globalisation",
            body: "**Benefits**: economic growth, lower prices, more choice, technology transfer, cultural exchange. **Drawbacks**: job losses in developed countries, inequality, environmental damage, cultural homogenisation, exploitation in developing countries.\n\n**Evaluation**: winners and losers — depends on country, industry, policies.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Nike manufactures in Vietnam, sells globally. Is it an MNC?",
          solution: "Yes — operates across multiple countries.",
        },
      },
      questions: [
        {
          id: "ecn11-u2-global2-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a multinational corporation (MNC)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Company in one country" },
              { id: "b", text: "Government-owned company" },
              { id: "c", text: "Company operating in multiple countries" },
              { id: "d", text: "Small local business" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "MNC",
                statement: "Operates in multiple countries.",
              },
            ],
            steps: [
              {
                reasoning: "MNC = multi-country operations.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Multiple countries",
            commonErrors: ["Domestic confused."],
          },
        },
        {
          id: "ecn11-u2-global2-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of MNCs for host countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "MNC benefits",
                statement: "Jobs, investment, technology.",
              },
            ],
            steps: [
              {
                reasoning: "Create jobs — employment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Investment — capital inflows.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Technology transfer — skills, processes.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Jobs, investment, technology transfer.",
            commonErrors: ["Drawbacks only.", "Only one."],
          },
        },
        {
          id: "ecn11-u2-global2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain one drawback of globalisation for developed countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Globalisation costs",
                statement: "Job losses, inequality.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Job losses — manufacturing moves to cheaper countries.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Inequality — winners/losers from trade.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Wage pressure — competition from low-cost labour.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Cultural homogenisation — loss of local identity.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Job losses, inequality, wage pressure.",
            commonErrors: ["Only benefits.", "No mechanism."],
          },
        },
        {
          id: "ecn11-u2-global2-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A developing country attracts an MNC to build a factory.",
          parts: [
            {
              label: "a",
              prompt: "Suggest two benefits for the country.",
              marks: 4,
            },
            { label: "b", prompt: "Identify two risks.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "MNC evaluation",
                statement: "Jobs+investment vs exploitation+profit drain.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Jobs created — employment.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Investment + technology transfer.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Profit repatriation — money leaves country.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Low wages/exploitation risk.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) jobs+investment (b) profit drain+exploitation",
            commonErrors: ["Only benefits.", "No risks."],
          },
        },
      ],
    },
  ],
};
