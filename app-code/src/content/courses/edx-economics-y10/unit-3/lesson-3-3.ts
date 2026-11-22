import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "ecn10-u3-lesson-3-3",
  code: "3-3",
  title: "International Trade",
  goal: "I CAN explain trade, comparative advantage and trade policy.",
  standards: ["Edexcel IGCSE Economics 4EC1 — The Global Economy"],
  vocabulary: [
    {
      term: "International trade",
      definition: "Exchange of goods/services between countries.",
    },
    {
      term: "Comparative advantage",
      definition: "Lower opportunity cost of production.",
    },
    {
      term: "Absolute advantage",
      definition: "Can produce more with same resources.",
    },
    { term: "Tariff", definition: "Tax on imported goods." },
    { term: "Quota", definition: "Limit on quantity of imports." },
    {
      term: "Free trade",
      definition: "Trade without barriers — no tariffs/quotas.",
    },
  ],
  concepts: [
    {
      id: "ecn10-u3-trade",
      title: "Trade and Comparative Advantage",
      skill: "Explain why countries trade and benefit from specialisation.",
      lesson: {
        sections: [
          {
            heading: "Why trade?",
            body: "Countries trade because of **comparative advantage** — they specialise in what they produce at lowest opportunity cost. Even if one country is better at everything, both benefit from specialising and trading.\n\n**Benefits**: more variety, lower prices, efficiency gains, higher living standards, economies of scale. **Absolute advantage**: can produce more with same resources — but comparative advantage matters more.",
          },
          {
            heading: "Trade barriers",
            body: "**Tariffs**: tax on imports — raises price, protects domestic industry, reduces imports. **Quotas**: limit import quantity — similar effect. **Non-tariff barriers**: regulations, standards, bureaucracy — harder to detect.\n\n**Arguments for protection**: save jobs, protect infant industries, national security, prevent dumping. **Arguments against**: higher prices, retaliation, inefficiency, less choice.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Country A produces cars cheaper than B, but B produces phones cheaper. Should they trade?",
          solution:
            "Yes — each specialises in comparative advantage and trades.",
        },
      },
      questions: [
        {
          id: "ecn10-u3-trade-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is comparative advantage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Largest economy" },
              { id: "b", text: "Producing more with same resources" },
              { id: "c", text: "Lower opportunity cost of production" },
              { id: "d", text: "Cheapest labour" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comparative advantage",
                statement: "Lowest opportunity cost.",
              },
            ],
            steps: [
              {
                reasoning: "Comparative = lowest opportunity cost.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Lowest opportunity cost",
            commonErrors: ["Absolute confused."],
          },
        },
        {
          id: "ecn10-u3-trade-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of international trade.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trade benefits",
                statement: "Variety, prices, efficiency.",
              },
            ],
            steps: [
              {
                reasoning: "Greater variety of goods for consumers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Lower prices — competition and efficiency.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Specialisation gains — comparative advantage.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Variety, lower prices, specialisation efficiency.",
            commonErrors: ["Only one.", "Protection benefits."],
          },
        },
        {
          id: "ecn10-u3-trade-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain one argument for and one against trade protection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Protection debate",
                statement: "Jobs vs prices/efficiency.",
              },
            ],
            steps: [
              {
                reasoning: "For: protects domestic jobs/industries.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "For: infant industries need protection.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Against: higher prices for consumers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Against: inefficiency, retaliation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "For: jobs/infant industries. Against: prices/inefficiency/retaliation.",
            commonErrors: ["Only one side.", "No reasoning."],
          },
        },
        {
          id: "ecn10-u3-trade-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Country X is more efficient at producing both wheat and steel than Country Y.",
          parts: [
            { label: "a", prompt: "Define absolute advantage.", marks: 2 },
            {
              label: "b",
              prompt: "Explain why they might still trade.",
              marks: 4,
            },
            {
              label: "c",
              prompt: "What determines who specialises in what?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparative advantage",
                statement: "Trade based on opportunity cost, not absolute.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Absolute advantage = more output with same resources.",
                marks: 2,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning:
                  "(b) Comparative advantage — lower opportunity cost in one.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Specialise + trade → both better off.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Opportunity cost — who gives up least.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) more output same resources (b) comparative advantage (c) opportunity cost",
            commonErrors: ["Absolute=comparative.", "No trade reason."],
          },
        },
      ],
    },
    {
      id: "ecn10-u3-global",
      title: "Global Economy and Development",
      skill: "Understand economic development and global institutions.",
      lesson: {
        sections: [
          {
            heading: "Economic development",
            body: "**Developing countries**: low income, low HDI, reliance on primary sector, poor infrastructure. **Developed countries**: high income, high HDI, service-based, advanced infrastructure.\n\n**Development measures**: GDP per capita, HDI (health, education, income), poverty rates, life expectancy. **Barriers to development**: debt, corruption, conflict, lack of infrastructure, overpopulation.",
          },
          {
            heading: "Global institutions",
            body: "**IMF**: lends to countries in financial crisis, promotes stability. **World Bank**: development loans and grants. **WTO**: trade rules, dispute resolution, promotes free trade. **EU/UN**: regional cooperation, development aid.\n\n**Globalisation**: increased interconnectedness — trade, investment, migration, information. **Benefits**: growth, efficiency, technology transfer. **Drawbacks**: inequality, job losses, cultural homogenisation.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Country has low GDP per capita but high life expectancy. What's its HDI likely?",
          solution:
            "Mixed — income low but health good; HDI combines all three.",
        },
      },
      questions: [
        {
          id: "ecn10-u3-global-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does HDI measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only GDP" },
              { id: "b", text: "Only life expectancy" },
              { id: "c", text: "Only income" },
              { id: "d", text: "Health, education and income" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "HDI",
                statement: "Health, education, income.",
              },
            ],
            steps: [
              {
                reasoning: "HDI = health+education+income.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Health, education, income",
            commonErrors: ["GDP only confused."],
          },
        },
        {
          id: "ecn10-u3-global-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two barriers to economic development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Development barriers",
                statement: "Debt, corruption, infrastructure, conflict.",
              },
            ],
            steps: [
              {
                reasoning: "Debt burden — repayments exceed resources.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Corruption — resources misused.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Lack of infrastructure/education.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Debt, corruption, infrastructure, conflict.",
            commonErrors: ["Only one.", "Developed country issues."],
          },
        },
        {
          id: "ecn10-u3-global-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain one benefit and one drawback of globalisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Globalisation",
                statement: "Growth vs inequality.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Benefit: economic growth, efficiency, technology transfer.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Benefit: more trade, investment, jobs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Drawback: inequality, job losses in developed countries.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Drawback: cultural homogenisation, exploitation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Benefit: growth/efficiency. Drawback: inequality/job losses.",
            commonErrors: ["Only one side.", "No examples."],
          },
        },
        {
          id: "ecn10-u3-global-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A developing country seeks to improve its economy.",
          parts: [
            {
              label: "a",
              prompt: "Suggest two development strategies.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Identify one role of international institutions.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Development strategy",
                statement: "Investment+institutions vs aid+trade.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Invest in education and infrastructure.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Attract foreign investment / develop exports.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) IMF/World Bank provide loans and advice.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) WTO promotes trade — market access.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) education/infrastructure/FDI (b) IMF/WTO support",
            commonErrors: ["No strategy.", "No institution."],
          },
        },
      ],
    },
  ],
};
