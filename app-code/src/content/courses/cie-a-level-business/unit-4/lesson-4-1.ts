import type { Lesson } from "../../../types.ts";

export const lesson401: Lesson = {
  id: "ciealbus-u4-lesson-4-1",
  code: "4-1",
  title: "Protectionism and Trade Policy",
  goal: "I CAN explain protectionist measures and their effects.",
  standards: ["Cambridge A Level Business 9707", "Paper 4: trade policy"],

  vocabulary: [
    {
      term: "Protectionism",
      definition:
        "Policies protecting domestic industry from foreign competition.",
    },
    { term: "Tariff", definition: "Tax on imported goods." },
    { term: "Quota", definition: "Limit on import quantities." },
    {
      term: "Subsidy",
      definition: "Government financial support to domestic industry.",
    },
    { term: "Embargo", definition: "Complete ban on trade with a country." },
    { term: "Free trade", definition: "Unrestricted trade between countries." },
  ],
  concepts: [
    {
      id: "ciealbus-u4-s1-prot",
      title: "Protectionism",
      skill: "Analyse trade protection measures.",
      lesson: {
        sections: [
          {
            heading: "Protectionist measures",
            body: "Tariffs make imports expensive. Quotas limit quantities. Subsidies give domestic firms cost advantage. Embargoes ban trade entirely. All protect domestic industry but may invite retaliation.",
          },
          {
            heading: "Arguments for protectionism",
            body: "Protect jobs, infant industries, national security, unfair competition. Against: higher prices, reduced efficiency, trade wars, consumer harm.",
          },
        ],
        keyFormulas: [
          { name: "Protectionism", statement: "protect domestic industry" },
          { name: "Tariff", statement: "import tax" },
          { name: "Quota", statement: "import limit" },
        ],
        workedExample: {
          problem: "Why might a government impose tariffs on steel imports?",
          solution:
            "Protect domestic steel industry from cheaper foreign competition, preserve jobs, national security. But raises costs for steel users and invites retaliation.",
        },
      },
      questions: [
        {
          id: "ciealbus-u4-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is protectionism?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A business structure",
              },
              {
                id: "b",
                text: "Policies protecting domestic industry",
              },
              {
                id: "c",
                text: "Free trade",
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
                name: "Protectionism",
                statement: "Domestic protection.",
              },
            ],
            steps: [
              {
                reasoning: "Protectionism = protecting domestic industry.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Domestic protection",
          },
        },
        {
          id: "ciealbus-u4-pr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a quota?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quota",
                statement: "Import limit.",
              },
            ],
            steps: [
              {
                reasoning: "Limit on quantity of imports.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Directly restricts foreign competition.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Import limit",
          },
        },
        {
          id: "ciealbus-u4-pr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are arguments for and against protectionism?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Protectionism",
                statement: "Pros vs cons.",
              },
            ],
            steps: [
              {
                reasoning: "For: protect jobs, infant industries, security.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Against: higher prices, inefficiency, trade wars.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Complex trade-offs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Pros vs cons",
          },
        },
        {
          id: "ciealbus-u4-pr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define protectionism, tariff, quota, subsidy, embargo, free trade. (b) What is protectionism? (c) What is a tariff? (d) What is a quota? (e) What is a subsidy? (f) What are arguments for protectionism? (g) What are arguments against? (h) Evaluate whether protectionism benefits or harms an economy.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Protectionism",
                statement: "Measures, effects.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Domestic protection.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Import tax.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Import limit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Government support.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Jobs, infant industries, security.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Prices, efficiency, trade wars.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Balanced evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Protectionism analysis.",
          },
        },
        {
          id: "ciealbus-u4-pr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a tariff?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A tax on imported goods",
              },
              {
                id: "b",
                text: "Government financial support to domestic firms",
              },
              {
                id: "c",
                text: "A complete ban on trade with a country",
              },
              {
                id: "d",
                text: "A limit on the quantity of imports",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tariff",
                statement: "Import tax.",
              },
            ],
            steps: [
              {
                reasoning: "A tariff is a tax on imported goods.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** A tax on imported goods",
          },
        },
        {
          id: "ciealbus-u4-pr-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An imported bicycle costs $80 before tax. The government imposes a 10% tariff. (a) Calculate the tariff amount per bicycle. (b) Calculate the price a consumer pays for the bicycle.",
          parts: [
            { label: "a", prompt: "Tariff amount per bicycle", marks: 1 },
            { label: "b", prompt: "Price paid by consumer", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8, unit: "$" },
              { label: "b", answer: 88, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tariff calculation",
                statement: "Apply percentage tariff to import price.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Tariff = 10% of 80 = 8.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Price paid = 80 + 8 = 88.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "a = $8; b = $88",
          },
        },
        {
          id: "ciealbus-u4-pr-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a subsidy, and how can it help a domestic industry compete with imports?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subsidy",
                statement: "Government financial support.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Subsidy = government financial support to domestic firms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It lowers costs or raises revenue, helping domestic firms compete with cheaper imports.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Government support that lowers costs and improves competitiveness",
          },
        },
        {
          id: "ciealbus-u4-pr-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is NOT a protectionist measure?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Quota",
              },
              {
                id: "b",
                text: "Free trade agreement",
              },
              {
                id: "c",
                text: "Embargo",
              },
              {
                id: "d",
                text: "Tariff",
              },
            ],
            correctChoiceIb: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Protectionist measures",
                statement:
                  "Tariffs, quotas, embargoes, subsidies protect; FTAs liberalise.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A free trade agreement reduces barriers — the opposite of protectionism.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(d)** Free trade agreement",
          },
        },
        {
          id: "ciealbus-u4-pr-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A government imposes a quota allowing only 500 imported televisions into the country. The quota causes the domestic price of imported sets to rise by $2 per unit. Each imported set sells for $300. (a) Calculate the extra amount consumers spend on the 500 imported sets because of the price rise. (b) Calculate the total consumer spending on the 500 imported sets at the higher price. (c) State one other protectionist measure the government could use instead.",
          parts: [
            { label: "a", prompt: "Extra spending from price rise", marks: 1 },
            { label: "b", prompt: "Total consumer spending", marks: 1 },
            {
              label: "c",
              prompt: "Alternative protectionist measure",
              marks: 1,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1000, unit: "$" },
              { label: "b", answer: 151000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Quota effects",
                statement: "Quotas raise prices and restrict quantities.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Extra spending = 500 × 2 = 1000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Higher price = 302; total = 500 × 302 = 151000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Any valid measure: tariff, subsidy or embargo.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "a = $1000; b = $151000; c = tariff/subsidy/embargo",
          },
        },
        {
          id: "ciealbus-u4-pr-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two effects of a tariff on a domestic steel industry and on steel consumers.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tariff effects",
                statement: "Industry vs consumer impacts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Domestic steel producers benefit from reduced foreign competition — jobs and output may rise.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Consumers and steel users face higher prices and input costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Trading partners may retaliate, risking a trade war that harms all sides.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Industry gains protection; consumers pay more; retaliation risk",
          },
        },
        {
          id: "ciealbus-u4-pr-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Country A imposes tariffs on Country B's cars. Country B responds with tariffs on Country A's wine. This situation is best described as:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Transfer pricing",
              },
              {
                id: "b",
                text: "A retaliatory trade war",
              },
              {
                id: "c",
                text: "Economies of scale",
              },
              {
                id: "d",
                text: "Trade creation",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Retaliation",
                statement: "Protection can trigger counter-measures.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mutual imposition of tariffs in response to each other is a trade war.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** A retaliatory trade war",
          },
        },
        {
          id: "ciealbus-u4-pr-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A domestic producer's unit cost is $20 and a foreign rival's is $18. The government grants a subsidy of $5 per unit to the domestic producer, which sells 4,000 units a year. (a) Calculate the producer's effective unit cost after the subsidy. (b) Calculate the total annual subsidy received. (c) State whether the subsidised domestic cost is below the foreign rival's cost, answering 1 for yes and 0 for no.",
          parts: [
            {
              label: "a",
              prompt: "Effective unit cost after subsidy",
              marks: 1,
            },
            { label: "b", prompt: "Total annual subsidy", marks: 1 },
            {
              label: "c",
              prompt: "Is subsidised cost below rival's? (1 = yes, 0 = no)",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 15, unit: "$" },
              { label: "b", answer: 20000, unit: "$" },
              { label: "c", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Subsidy calculation",
                statement:
                  "Subsidies reduce effective cost and give cost advantage.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Effective cost = 20 - 5 = 15.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Total subsidy = 5 × 4000 = 20000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "15 < 18, so yes — answer 1.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Without subsidy the domestic firm (20) loses to the foreign rival (18); the subsidy reverses the cost disadvantage.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a = $15; b = $20000; c = 1",
          },
        },
        {
          id: "ciealbus-u4-pr-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is an embargo?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A government subsidy to exporters",
              },
              {
                id: "b",
                text: "A limit on the quantity of imports",
              },
              {
                id: "c",
                text: "A tax on imported goods",
              },
              {
                id: "d",
                text: "A complete ban on trade with a country",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Embargo",
                statement: "Complete trade ban.",
              },
            ],
            steps: [
              {
                reasoning: "An embargo bans all trade with a country.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** A complete ban on trade with a country",
          },
        },
        {
          id: "ciealbus-u4-pr-q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A $120 imported laptop faces a 25% ad valorem tariff. (a) Calculate the tariff amount. (b) Calculate the total cost of the laptop once the tariff is applied.",
          parts: [
            { label: "a", prompt: "Tariff amount", marks: 1 },
            { label: "b", prompt: "Total cost including tariff", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 30, unit: "$" },
              { label: "b", answer: 150, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ad valorem tariff",
                statement: "Tariff calculated as percentage of import value.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Tariff = 25% of 120 = 30.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Total cost = 120 + 30 = 150.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "a = $30; b = $150",
          },
        },
        {
          id: "ciealbus-u4-pr-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which argument is most likely to justify protectionism for a newly established domestic industry?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It lowers consumer prices",
              },
              {
                id: "b",
                text: "It reduces government spending",
              },
              {
                id: "c",
                text: "It increases the country's export earnings",
              },
              {
                id: "d",
                text: "It protects an infant industry until it can compete internationally",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Infant industry argument",
                statement: "New industries may need temporary protection.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The infant industry argument supports temporary protection so new firms can develop and become competitive.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** It protects an infant industry until it can compete internationally",
          },
        },
        {
          id: "ciealbus-u4-pr-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A country imposes a 25% tariff on imported steel to protect its domestic steel industry. (a) Explain how the tariff affects domestic steel producers. (b) Explain how it affects steel users and consumers. (c) Identify two possible responses by trading partners. (d) Evaluate whether the tariff benefits the economy overall.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Tariff evaluation",
                statement:
                  "Effects on producers, consumers, trade partners and economy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Domestic producers face less foreign competition — output, jobs and profits may rise.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Steel users and consumers pay higher prices; downstream industries may lose competitiveness.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Trading partners may impose retaliatory tariffs, quotas or embargoes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Short-run protection of jobs and output versus long-run higher prices, inefficiency and trade war risk.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Overall judgement: benefits depend on industry importance, retaliation and whether protection is temporary.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Tariff protects domestic industry but raises prices and risks retaliation — net benefit uncertain",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u4-pr-notes",
      title: "Protectionism — notes",
      summary:
        "Tariffs, quotas, subsidies, embargoes protect domestic industry. Trade-offs complex.",
      sections: [
        {
          heading: "Key idea",
          body: "Protectionism shields domestic firms but may reduce efficiency and invite retaliation.",
        },
        {
          heading: "Free trade",
          body: "Opposite approach — unrestricted trade promotes efficiency but may hurt vulnerable industries.",
        },
      ],
    },
  ],
};
