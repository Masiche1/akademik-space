import type { Lesson } from "../../../types.ts";

export const lesson403: Lesson = {
  id: "ciealbus-u4-lesson-4-3",
  code: "4-3",
  title: "International Trade Agreements and Bodies",
  goal: "I CAN explain WTO, regional trade agreements and their implications.",
  standards: ["Cambridge A Level Business 9707", "Paper 4: trade agreements"],

  vocabulary: [
    {
      term: "WTO",
      definition: "World Trade Organization — global trade rules.",
    },
    { term: "FTA", definition: "Free trade agreement between countries." },
    { term: "Customs union", definition: "FTA + common external tariff." },
    {
      term: "Single market",
      definition: "FTA + free movement of goods/services/capital/labour.",
    },
    {
      term: "Most favoured nation",
      definition: "WTO principle of equal treatment.",
    },
    { term: "Trade dispute", definition: "Conflict between trading nations." },
  ],
  concepts: [
    {
      id: "ciealbus-u4-s3-trade",
      title: "Trade agreements",
      skill: "Understand international trade frameworks.",
      lesson: {
        sections: [
          {
            heading: "WTO",
            body: "Global body promoting free trade. Sets rules, resolves disputes. Most favoured nation principle — equal treatment. Can authorise sanctions.",
          },
          {
            heading: "Regional agreements",
            body: "FTA: reduce/eliminate tariffs between members. Customs union: FTA + common external tariff. Single market: + free movement of factors. EU is most advanced example.",
          },
        ],
        keyFormulas: [
          { name: "WTO", statement: "World Trade Organization" },
          { name: "FTA", statement: "Free trade agreement" },
          { name: "Single market", statement: "Full economic integration" },
        ],
        workedExample: {
          problem: "How does EU single market benefit businesses?",
          solution:
            "Free movement of goods, services, capital, labour — no tariffs, no border checks, wider market access.",
        },
      },
      questions: [
        {
          id: "ciealbus-u4-ta-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the WTO?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of tax",
              },
              {
                id: "b",
                text: "A trade barrier",
              },
              {
                id: "c",
                text: "World Trade Organization — global trade rules",
              },
              {
                id: "d",
                text: "A business structure",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "WTO",
                statement: "Trade rules body.",
              },
            ],
            steps: [
              {
                reasoning: "WTO = global trade rules.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Global trade rules",
          },
        },
        {
          id: "ciealbus-u4-ta-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a free trade agreement?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "FTA",
                statement: "Trade agreement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Agreement between countries to reduce/eliminate tariffs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Increases trade between members.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Tariff reduction agreement",
          },
        },
        {
          id: "ciealbus-u4-ta-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between FTA and single market?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Trade agreements",
                statement: "FTA vs single market.",
              },
            ],
            steps: [
              {
                reasoning: "FTA: reduce tariffs on goods.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Single market: + free movement of services/capital/labour.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Single market deeper integration.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "FTA vs single market",
          },
        },
        {
          id: "ciealbus-u4-ta-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define WTO, FTA, customs union, single market, most favoured nation, trade dispute. (b) What is WTO? (c) What is FTA? (d) What is a single market? (e) What is most favoured nation? (f) What are benefits of trade agreements? (g) What are drawbacks? (h) Evaluate whether trade agreements benefit businesses.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Trade agreements",
                statement: "Frameworks, effects.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Global trade rules.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Tariff reduction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Full economic integration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Equal treatment principle.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Market access, efficiency.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Job losses, sovereignty loss.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Balanced evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Trade agreements analysis.",
          },
        },
        {
          id: "ciealbus-u4-ta-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main role of the World Trade Organization (WTO)?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "To impose tariffs on all imports",
              },
              {
                id: "b",
                text: "To set global trade rules and resolve trade disputes",
              },
              {
                id: "c",
                text: "To manage a single currency for member states",
              },
              {
                id: "d",
                text: "To protect domestic industries from foreign competition",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "WTO",
                statement: "Global trade rules body.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The WTO promotes free trade by setting rules and resolving disputes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** To set global trade rules and resolve trade disputes",
          },
        },
        {
          id: "ciealbus-u4-ta-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An imported product costs $200 and currently faces a 15% tariff. (a) Calculate the tariff amount. (b) If a free trade agreement eliminates the tariff, calculate the new price paid by the importer.",
          parts: [
            { label: "a", prompt: "Tariff amount", marks: 1 },
            {
              label: "b",
              prompt: "New price after tariff elimination",
              marks: 1,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 30, unit: "$" },
              { label: "b", answer: 200, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tariff elimination",
                statement: "FTA removes tariffs, lowering import prices.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Tariff = 15% of 200 = 30.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "New price = 200 + 0 = 200.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "a = $30; b = $200",
          },
        },
        {
          id: "ciealbus-u4-ta-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a customs union, and how does it differ from a free trade area?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Customs union",
                statement: "FTA plus common external tariff.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A customs union is an FTA with a common external tariff on non-members.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Unlike an FTA, member states cannot set their own tariffs on outside countries.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "FTA plus common external tariff on non-members",
          },
        },
        {
          id: "ciealbus-u4-ta-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "The WTO's 'most favoured nation' principle requires that:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Members may set any tariff they wish on imports",
              },
              {
                id: "b",
                text: "Members must treat all trading partners equally",
              },
              {
                id: "c",
                text: "Only developed countries may join the WTO",
              },
              {
                id: "d",
                text: "Members must give preferential treatment to their closest allies",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Most favoured nation",
                statement: "Equal treatment principle.",
              },
            ],
            steps: [
              {
                reasoning:
                  "MFN means trade concessions granted to one member must extend to all members.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** Members must treat all trading partners equally",
          },
        },
        {
          id: "ciealbus-u4-ta-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Country A signs an FTA with Country B but not Country C. Before the FTA, both B and C faced a 10% tariff on a $100 product. (a) Calculate the tariff B's exporters no longer pay. (b) Calculate the price advantage B's product now has over C's identical product. (c) State one way C might respond to losing this market share.",
          parts: [
            { label: "a", prompt: "Tariff eliminated for B", marks: 1 },
            { label: "b", prompt: "Price advantage over C", marks: 1 },
            { label: "c", prompt: "Possible response by C", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10, unit: "$" },
              { label: "b", answer: 10, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "FTA price effects",
                statement:
                  "Tariff elimination creates price advantage for member exporters.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Tariff removed = 10% of 100 = 10.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "B's price advantage = 10 (C's product still includes the tariff).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "C could negotiate its own FTA, cut prices, or complain to the WTO.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "a = $10; b = $10; c = e.g. negotiate own FTA or cut prices",
          },
        },
        {
          id: "ciealbus-u4-ta-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two benefits and one drawback of belonging to a single market for a business.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Single market",
                statement: "Free movement of goods, services, capital, labour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Benefits: access to a much larger market, no border checks/tariffs on goods, free movement of labour and capital.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Benefit: easier to set up operations and recruit workers across member states.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Drawback: intense competition from firms in other member states; loss of policy autonomy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Larger market and free factor movement versus fiercer competition and less autonomy",
          },
        },
        {
          id: "ciealbus-u4-ta-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "When two WTO members have a trade dispute, the WTO's first step is typically to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Require both sides to negotiate and attempt a settlement through the dispute process",
              },
              {
                id: "b",
                text: "Expel both countries from the WTO",
              },
              {
                id: "c",
                text: "Ignore the dispute",
              },
              {
                id: "d",
                text: "Immediately impose sanctions on both countries",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "WTO dispute settlement",
                statement: "Negotiation before sanctions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The WTO dispute settlement process starts with consultations; sanctions are a last resort.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** Require both sides to negotiate and attempt a settlement through the dispute process",
          },
        },
        {
          id: "ciealbus-u4-ta-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A customs union of two countries agrees a common external tariff of $8 per unit on imported steel. Each member imports 10,000 units a year. (a) Calculate the total tariff revenue collected by each member. (b) Calculate the combined tariff revenue for the union. (c) State one advantage of a common external tariff over separate member tariffs. (d) State one disadvantage of losing independent trade policy.",
          parts: [
            { label: "a", prompt: "Tariff revenue per member", marks: 1 },
            { label: "b", prompt: "Combined union revenue", marks: 1 },
            {
              label: "c",
              prompt: "One advantage of a common external tariff",
              marks: 1,
            },
            {
              label: "d",
              prompt: "One disadvantage of losing independent trade policy",
              marks: 1,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 80000, unit: "$" },
              { label: "b", answer: 160000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Customs union",
                statement:
                  "Common external tariff generates revenue and prevents tariff arbitrage.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Revenue per member = 8 × 10000 = 80000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Combined = 2 × 80000 = 160000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Prevents tariff shopping between members and gives negotiating power as a bloc.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Members cannot tailor tariffs to their own economic needs; must accept union decisions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "a = $80000; b = $160000; c/d = trade policy autonomy trade-off",
          },
        },
        {
          id: "ciealbus-u4-ta-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Trade diversion occurs when:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Exporters increase production for new markets",
              },
              {
                id: "b",
                text: "A country bans all imports",
              },
              {
                id: "c",
                text: "The WTO imposes sanctions",
              },
              {
                id: "d",
                text: "Trade shifts from a low-cost non-member to a higher-cost member because tariffs favour the member",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Trade diversion",
                statement:
                  "FTA can shift trade to less efficient member suppliers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Trade diversion = inefficient shift of trade towards member countries due to preferential tariffs.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** Trade shifts from a low-cost non-member to a higher-cost member because tariffs favour the member",
          },
        },
        {
          id: "ciealbus-u4-ta-q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A country's exports to FTA partners rise from $500 million to $575 million after the agreement. (a) Calculate the increase in exports. (b) Calculate the percentage increase.",
          parts: [
            { label: "a", prompt: "Increase in exports", marks: 1 },
            { label: "b", prompt: "Percentage increase", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 75, unit: "$m" },
              { label: "b", answer: 15, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Trade growth calculation",
                statement: "FTA members typically see export growth.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Increase = 575 - 500 = 75.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Percentage = 75 / 500 × 100 = 15%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "a = $75m; b = 15%",
          },
        },
        {
          id: "ciealbus-u4-ta-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A small economy heavily dependent on agriculture is choosing between joining a customs union and a deeper single market. Which is likely to be more beneficial, and why?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Single market, because free movement of labour and capital can help absorb surplus farm workers and attract investment",
              },
              {
                id: "b",
                text: "Both are identical in their effects",
              },
              {
                id: "c",
                text: "Neither — trade agreements always harm small economies",
              },
              {
                id: "d",
                text: "Customs union, because it allows free movement of labour into the country",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integration choice",
                statement:
                  "Deeper integration offers factor mobility benefits.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A single market allows labour and capital to move freely, helping a labour-surplus agricultural economy adjust and attract investment.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Single market, because free movement of labour and capital can help absorb surplus farm workers and attract investment",
          },
        },
        {
          id: "ciealbus-u4-ta-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A developing country is deciding whether to join a regional free trade agreement. (a) Define a free trade agreement. (b) Identify two benefits the country may gain. (c) Identify two drawbacks it may face. (d) Evaluate whether joining the FTA is likely to benefit its businesses overall.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "FTA evaluation",
                statement:
                  "Benefits, drawbacks and overall judgement on joining an FTA.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) FTA = agreement to reduce or eliminate tariffs and other barriers on trade between members.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Benefits: larger export markets, lower input prices, economies of scale, investment attraction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Drawbacks: competition from cheaper imports may hurt domestic firms; loss of tariff revenue; trade diversion; adjustment costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Balanced consideration: competitive industries gain market access while vulnerable industries face import competition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Overall judgement: depends on the structure of the economy, competitiveness of firms and ability to manage adjustment — support with reasoned conclusion.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "FTA offers market access and efficiency gains but threatens vulnerable industries — net benefit depends on competitiveness",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u4-ta-notes",
      title: "Trade agreements — notes",
      summary:
        "WTO global rules. FTA→customs union→single market increasing integration.",
      sections: [
        {
          heading: "Key idea",
          body: "Trade agreements reduce barriers but create winners and losers.",
        },
        {
          heading: "EU example",
          body: "Single market allows free movement of goods, services, capital, labour.",
        },
      ],
    },
  ],
};
