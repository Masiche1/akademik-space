import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "cieids-u2-lesson-2-1",
  code: "2-1",
  title: "Trade and globalisation",
  goal: "I CAN explain how trade and globalisation affect development.",
  standards: [
    "Cambridge IGCSE Development Studies 0453",
    "Section 2: Development strategies",
  ],
  vocabulary: [
    {
      term: "Globalisation",
      definition:
        "The growing interconnectedness of economies, cultures and societies worldwide.",
    },
    {
      term: "Free trade",
      definition: "Trade without tariffs or barriers between countries.",
    },
    {
      term: "Protectionism",
      definition:
        "Government policies restricting imports to protect domestic industries.",
    },
    {
      term: "Export-led growth",
      definition:
        "A development strategy based on producing goods for export markets.",
    },
    {
      term: "Fair trade",
      definition:
        "Trade ensuring producers in poor countries receive fair prices.",
    },
    { term: "Tariff", definition: "A tax on imported goods." },
  ],
  concepts: [
    {
      id: "cieids-u2-trade",
      title: "Trade, protectionism and globalisation",
      skill: "Explain how trade policies and globalisation shape development.",
      lesson: {
        sections: [
          {
            heading: "Trade and development",
            body: "International trade can drive development — **exports** earn foreign currency for imports and investment. **Export-led growth** (e.g. East Asian economies) uses manufacturing exports to industrialise. However, many poor countries export only **primary products** (coffee, minerals) whose prices are volatile and low-value — limiting earnings.",
          },
          {
            heading: "Protectionism vs free trade",
            body: "**Free trade** removes barriers, letting countries specialise — efficient but may harm weak domestic industries. **Protectionism** (tariffs, quotas, subsidies) shields domestic producers but raises prices and can provoke retaliation. Rich countries often protect their own farmers while demanding poor countries open markets — a double standard criticised by developing nations.",
          },
          {
            heading: "Globalisation's effects",
            body: "Globalisation brings investment, technology and markets to developing countries — enabling outsourcing and growth (e.g. India's IT sector). But it also exposes them to global shocks, allows TNCs to dominate, and can widen inequality between those connected to global markets and those left behind.",
          },
        ],
        keyFormulas: [
          {
            name: "Trade benefit",
            statement: "Exports earn foreign currency + attract investment",
          },
          {
            name: "Primary trap",
            statement: "Low-value, volatile exports limit development",
          },
        ],
        workedExample: {
          problem:
            "Why do coffee-exporting countries struggle to develop despite high export volumes?",
          solution:
            "Coffee is a primary product with volatile low prices; most value is added by roasters and brands abroad — exporters capture little, so earnings don't fund development.",
        },
      },
      questions: [
        {
          id: "cieids-u2-trade-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A tariff is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A subsidy for exporters" },
              { id: "b", text: "A tax on imported goods" },
              { id: "c", text: "A quota on exports" },
              { id: "d", text: "A free-trade agreement" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tariff",
                statement:
                  "A tax on imported goods used to protect domestic producers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Tariffs raise the price of imports, protecting domestic industries — they are a protectionist tool.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) A tax on imported goods.",
            commonErrors: ["Confusing tariffs with quotas or subsidies."],
          },
        },
        {
          id: "cieids-u2-trade-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain one benefit and one drawback of free trade for developing countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Free trade effects",
                statement:
                  "Market access and efficiency vs vulnerability to competition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Benefit: access to larger markets and foreign investment; countries can specialise in what they produce best.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Drawback: weak domestic industries may be destroyed by cheaper imports before they can compete.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Also vulnerable to global price shocks and dependent on export prices set elsewhere.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Benefit: market access/investment. Drawback: vulnerable domestic industries and price dependence.",
            commonErrors: [
              "Listing effects without explanation or evaluation.",
            ],
          },
        },
        {
          id: "cieids-u2-trade-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how globalisation can benefit developing countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Globalisation benefits",
                statement: "Investment, technology transfer, market access.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Foreign direct investment brings capital, jobs and technology to developing economies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Access to global markets lets countries export manufactured goods, not just raw materials.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Technology and knowledge transfer raise productivity — e.g. mobile phones leapfrogging landlines.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Investment, technology transfer and export market access can drive development.",
            commonErrors: [
              "Only listing benefits without explaining the mechanism.",
            ],
          },
        },
        {
          id: "cieids-u2-trade-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the claim that free trade is the best strategy for developing countries.",
          parts: [
            {
              label: "a",
              prompt: "Explain two arguments for free trade.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Evaluate free trade's limitations for developing countries.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Trade strategy debate",
                statement:
                  "Efficiency gains vs structural vulnerability of poor economies.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Efficiency: free trade lets countries specialise and compete, raising productivity and incomes.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Market access: exports earn foreign currency for essential imports and investment.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Competition forces efficiency and attracts foreign investment.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Vulnerability: developing economies with weak industries are exposed to cheaper imports and dumping.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Unfair playing field: rich countries protect agriculture while demanding poor countries liberalise.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Judgement: free trade can help but needs managed opening — infant industries may need temporary protection first.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Efficiency + market access. (b) Vulnerability + unfair field — needs managed, not instant, liberalisation.",
            commonErrors: ["One-sided argument for or against free trade."],
          },
        },
      ],
    },
  ],
};
