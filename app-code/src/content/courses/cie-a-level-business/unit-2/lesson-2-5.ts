import type { Lesson } from "../../../types.ts";

export const lesson385: Lesson = {
  id: "ciealbus-u2-lesson-2-5",
  code: "2-5",
  title: "Globalisation and International Business",
  goal: "I CAN explain globalisation drivers and international business strategies.",
  standards: ["Cambridge A Level Business 9707", "Paper 2: international"],

  vocabulary: [
    {
      term: "Globalisation",
      definition: "Increasing interconnectedness of world economies.",
    },
    {
      term: "Multinational corporation (MNC)",
      definition: "Company operating in multiple countries.",
    },
    {
      term: "Foreign direct investment (FDI)",
      definition: "Investment in foreign business operations.",
    },
    {
      term: "Outsourcing",
      definition: "Contracting work to external providers.",
    },
    {
      term: "Offshoring",
      definition: "Moving production to lower-cost countries.",
    },
    {
      term: "Supply chain",
      definition: "Global network of suppliers/producers.",
    },
  ],
  concepts: [
    {
      id: "ciealbus-u2-s5-glob",
      title: "Globalisation",
      skill: "Understand global business drivers and strategies.",
      lesson: {
        sections: [
          {
            heading: "Globalisation drivers",
            body: "Technology (internet, transport), trade liberalisation, MNC expansion, economic integration. Reduces barriers, increases interdependence.",
          },
          {
            heading: "International strategies",
            body: "Exporting, licensing, franchising, joint ventures, wholly-owned subsidiaries. MNCs seek markets, resources, cost advantages.",
          },
          {
            heading: "Implications",
            body: "Benefits: economies of scale, market access, technology transfer. Costs: job losses in home country, exploitation in developing countries, environmental damage.",
          },
        ],
        keyFormulas: [
          { name: "Globalisation", statement: "world economic integration" },
          { name: "MNC", statement: "multinational corporation" },
          { name: "FDI", statement: "foreign direct investment" },
        ],
        workedExample: {
          problem: "Why do companies offshore production?",
          solution:
            "Lower labour costs, weaker regulations, access to resources/markets. But risks: quality control, ethical concerns, supply chain disruption.",
        },
      },
      questions: [
        {
          id: "ciealbus-u2-gb-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is globalisation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A trade barrier",
              },
              {
                id: "b",
                text: "Increasing interconnectedness of world economies",
              },
              {
                id: "c",
                text: "A business structure",
              },
              {
                id: "d",
                text: "A type of tax",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Globalisation",
                statement: "World integration.",
              },
            ],
            steps: [
              {
                reasoning: "Globalisation = interconnected world economies.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "World integration",
          },
        },
        {
          id: "ciealbus-u2-gb-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an MNC? Give an example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "MNC",
                statement: "Multinational corporation.",
              },
            ],
            steps: [
              {
                reasoning: "Company operating in multiple countries.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example: Coca-Cola, McDonald's, Toyota.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Multinational corporation example",
          },
        },
        {
          id: "ciealbus-u2-gb-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the benefits and costs of globalisation?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Globalisation",
                statement: "Benefits vs costs.",
              },
            ],
            steps: [
              {
                reasoning: "Benefits: economies of scale, market access.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Costs: job losses, exploitation, environment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Complex trade-offs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Benefits vs costs",
          },
        },
        {
          id: "ciealbus-u2-gb-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define globalisation, MNC, FDI, outsourcing, offshoring, supply chain. (b) What is globalisation? (c) What is an MNC? (d) What is FDI? (e) What are globalisation drivers? (f) What are international business strategies? (g) What are benefits of globalisation? (h) Evaluate whether globalisation benefits or harms developing countries.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Globalisation",
                statement: "Drivers, strategies.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) World integration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Multinational corporation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Foreign direct investment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Technology, trade liberalisation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Exporting, licensing, FDI.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Scale, markets, technology.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Balanced evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Globalisation and international business.",
          },
        },
        {
          id: "ciealbus-u2-gb-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Foreign direct investment (FDI) refers to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "a limit on the quantity of imports",
              },
              {
                id: "b",
                text: "a tax on imported goods",
              },
              {
                id: "c",
                text: "a loan from a domestic bank",
              },
              {
                id: "d",
                text: "investment in business operations in a foreign country",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "FDI",
                statement: "Foreign direct investment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "FDI means investing directly in business operations abroad — building plants, buying subsidiaries or acquiring foreign firms.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** investment in business operations in a foreign country",
          },
        },
        {
          id: "ciealbus-u2-gb-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A UK firm pays $12 per labour hour domestically and $4 per hour offshore. It needs 10,000 labour hours per year. (a) Calculate the annual labour cost saving from offshoring before extra costs. (b) If offshoring adds $1.50 per hour in transport costs, calculate the net annual saving.",
          parts: [
            { label: "a", prompt: "Gross annual saving", marks: 1 },
            { label: "b", prompt: "Net annual saving", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 80000, unit: "$" },
              { label: "b", answer: 65000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Offshoring cost comparison",
                statement: "Compare total costs, not just wages.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Saving per hour = 12 - 4 = 8; annual = 8 × 10000 = 80000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Extra cost = 1.50 × 10000 = 15000; net saving = 80000 - 15000 = 65000.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "a = $80000; b = $65000",
          },
        },
        {
          id: "ciealbus-u2-gb-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is offshoring, and how does it differ from outsourcing?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Offshoring vs outsourcing",
                statement: "Location vs provider.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Offshoring means moving production or operations to a lower-cost foreign country.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Outsourcing means contracting work to an external provider — it may be domestic or abroad; offshoring specifically involves relocating abroad.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Offshoring = moving abroad; outsourcing = external provider",
          },
        },
        {
          id: "ciealbus-u2-gb-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is a driver of globalisation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Increased transport costs",
              },
              {
                id: "b",
                text: "Stricter quotas on imports",
              },
              {
                id: "c",
                text: "Trade liberalisation and technological advances",
              },
              {
                id: "d",
                text: "Higher import tariffs",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Globalisation drivers",
                statement: "Technology, trade liberalisation, MNC expansion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Falling trade barriers and improved technology reduce the cost and difficulty of international business, driving globalisation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** Trade liberalisation and technological advances",
          },
        },
        {
          id: "ciealbus-u2-gb-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "An MNC's sales are split: 40% in its home country, 30% in Country B and 30% in Country C. Total revenue is $50 million. (a) Calculate the percentage of sales outside the home country. (b) Calculate revenue from foreign markets. (c) State one reason firms seek foreign direct investment.",
          parts: [
            { label: "a", prompt: "Foreign sales share (%)", marks: 1 },
            { label: "b", prompt: "Foreign revenue ($m)", marks: 1 },
            { label: "c", prompt: "One reason for FDI", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 60, unit: "%" },
              { label: "b", answer: 30, unit: "$m" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "MNC analysis",
                statement:
                  "MNCs seek markets, resources and cost advantages abroad.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Foreign share = 30 + 30 = 60%.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Foreign revenue = 60% × 50 = $30 million.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Any valid reason: access to new markets, lower costs, resources or avoiding trade barriers.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "a = 60%; b = $30m; c = market access / lower costs / resources",
          },
        },
        {
          id: "ciealbus-u2-gb-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two benefits and one cost of globalisation for a developing country.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Globalisation impacts",
                statement: "Benefits vs costs for developing countries.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Benefits: access to foreign investment, technology transfer and larger export markets.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Another benefit: jobs and skills from MNC operations and infrastructure development.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cost: exploitation of cheap labour, environmental damage and vulnerability to global economic shocks.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "FDI, technology and jobs gained; exploitation and environmental costs",
          },
        },
        {
          id: "ciealbus-u2-gb-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A firm grants a foreign company the right to use its brand and processes in return for royalties. This international strategy is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "a joint venture",
              },
              {
                id: "b",
                text: "licensing",
              },
              {
                id: "c",
                text: "a wholly-owned subsidiary",
              },
              {
                id: "d",
                text: "exporting",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "International strategies",
                statement: "Licensing earns royalties with limited control.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Licensing lets a foreign firm use the brand/IP for a fee (royalties) while the licensor keeps limited control.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** licensing",
          },
        },
        {
          id: "ciealbus-u2-gb-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A firm needs 20,000 labour hours per year. Domestic wages are $15 per hour; offshore wages are $5 per hour, plus $2 per hour in transport. (a) Calculate the total offshore hourly cost. (b) Calculate the total annual offshore cost. (c) Calculate the annual saving versus domestic production, showing unit cost then total saving.",
          parts: [
            { label: "a", prompt: "Total offshore hourly cost", marks: 1 },
            { label: "b", prompt: "Total annual offshore cost", marks: 1 },
            { label: "c", prompt: "Annual saving versus domestic", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 7, unit: "$" },
              { label: "b", answer: 140000, unit: "$" },
              { label: "c", answer: 160000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Offshoring comparison",
                statement: "Include all costs when comparing locations.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Offshore hourly cost = 5 + 2 = 7.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Annual offshore cost = 7 × 20000 = 140000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Domestic annual cost = 15 × 20000 = 300000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Annual saving = 300000 - 140000 = 160000.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a = $7; b = $140000; c = $160000",
          },
        },
        {
          id: "ciealbus-u2-gb-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which international market-entry strategy gives the parent firm the most control over operations abroad?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Franchising",
              },
              {
                id: "b",
                text: "Wholly-owned subsidiary",
              },
              {
                id: "c",
                text: "Licensing",
              },
              {
                id: "d",
                text: "Indirect exporting",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Entry strategies",
                statement: "Wholly-owned gives maximum control and risk.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A wholly-owned subsidiary is fully controlled by the parent, unlike licensing, franchising or joint ventures.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Wholly-owned subsidiary",
          },
        },
        {
          id: "ciealbus-u2-gb-q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An imported component costs $60 before tax and the government imposes a 15% tariff. (a) Calculate the tariff amount. (b) Calculate the total cost of the component once the tariff is applied.",
          parts: [
            { label: "a", prompt: "Tariff amount", marks: 1 },
            { label: "b", prompt: "Total cost including tariff", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 9, unit: "$" },
              { label: "b", answer: 69, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tariff calculation",
                statement: "Tariff = percentage of import price.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Tariff = 15% of 60 = 9.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Total cost = 60 + 9 = 69.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "a = $9; b = $69",
          },
        },
        {
          id: "ciealbus-u2-gb-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is most likely to be a disadvantage of globalisation for workers in the home country?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "access to cheaper imported goods",
              },
              {
                id: "b",
                text: "greater choice of products",
              },
              {
                id: "c",
                text: "technology transfer from abroad",
              },
              {
                id: "d",
                text: "job losses as production moves to lower-cost countries",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Globalisation costs",
                statement: "Offshoring can displace home-country jobs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Offshoring production to lower-cost countries can reduce employment in the home country, particularly in manufacturing.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** job losses as production moves to lower-cost countries",
          },
        },
        {
          id: "ciealbus-u2-gb-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Explain two ways globalisation can benefit a business. (b) Explain two risks a business faces from operating internationally. (c) Identify one factor that determines whether globalisation benefits or harms a developing country. (d) Evaluate whether globalisation is overall beneficial for businesses.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Globalisation evaluation",
                statement: "Benefits and risks of international operations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Benefits: access to larger markets, economies of scale and lower production costs abroad.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Risks: exchange rate volatility, political instability and exploitation/reputation damage in supply chains.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Factor: strength of institutions, labour laws and whether FDI transfers skills and technology.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Benefit depends on the firm's ability to manage international risks and on host-country conditions.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "(d) Overall judgement: globalisation offers scale and market access but rewards well-managed firms and can harm vulnerable economies and workers.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Globalisation brings scale and markets but also exchange rate, political and ethical risks",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u2-gb-notes",
      title: "Globalisation — notes",
      summary:
        "Technology+trade liberalisation→globalisation. MNCs seek markets/resources. Benefits vs costs complex.",
      sections: [
        {
          heading: "Key idea",
          body: "Globalisation integrates economies but creates winners and losers.",
        },
        {
          heading: "Strategies",
          body: "Exporting→licensing→joint ventures→wholly-owned subsidiaries.",
        },
      ],
    },
  ],
};
