import type { Lesson } from "../../../types.ts";

export const lesson402: Lesson = {
  id: "ciealbus-u4-lesson-4-2",
  code: "4-2",
  title: "Multinational Corporations and Global Business",
  goal: "I CAN analyse MNC strategies and their impact on host and home countries.",
  standards: ["Cambridge A Level Business 9707", "Paper 4: MNCs"],

  vocabulary: [
    { term: "MNC", definition: "Company operating in multiple countries." },
    { term: "FDI", definition: "Foreign direct investment." },
    {
      term: "Transfer pricing",
      definition: "Pricing between MNC subsidiaries.",
    },
    {
      term: "Offshoring",
      definition: "Moving production to lower-cost countries.",
    },
    {
      term: "Global supply chain",
      definition: "International network of suppliers.",
    },
    {
      term: "Tax haven",
      definition: "Country with low/no taxes attracting MNCs.",
    },
  ],
  concepts: [
    {
      id: "ciealbus-u4-s2-mnc",
      title: "Multinational corporations",
      skill: "Analyse MNC impact and strategies.",
      lesson: {
        sections: [
          {
            heading: "MNC strategies",
            body: "Market-seeking: access new customers. Resource-seeking: cheaper inputs/labour. Efficiency-seeking: lower costs. Strategic asset-seeking: acquire technology/brands.",
          },
          {
            heading: "Impact on host countries",
            body: "Positive: jobs, technology transfer, tax revenue, infrastructure. Negative: profit repatriation, exploitation, environmental damage, crowding out local firms.",
          },
          {
            heading: "Impact on home countries",
            body: "Positive: market access, profits. Negative: job losses from offshoring, tax avoidance.",
          },
        ],
        keyFormulas: [
          { name: "MNC", statement: "multinational corporation" },
          { name: "FDI", statement: "foreign direct investment" },
          { name: "Offshoring", statement: "production abroad" },
        ],
        workedExample: {
          problem: "A clothing brand moves production to Bangladesh. Impacts?",
          solution:
            "Host: jobs but low wages/poor conditions. Home: cheaper goods but job losses. Consumer: lower prices. Complex trade-offs.",
        },
      },
      questions: [
        {
          id: "ciealbus-u4-mnc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an MNC?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A trade barrier",
              },
              {
                id: "b",
                text: "A type of tax",
              },
              {
                id: "c",
                text: "A market structure",
              },
              {
                id: "d",
                text: "Company operating in multiple countries",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "MNC",
                statement: "Multinational.",
              },
            ],
            steps: [
              {
                reasoning: "MNC = operates in multiple countries.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Multinational corporation",
          },
        },
        {
          id: "ciealbus-u4-mnc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is FDI?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "FDI",
                statement: "Foreign investment.",
              },
            ],
            steps: [
              {
                reasoning: "Investment in foreign business operations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Includes building factories, buying companies.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Foreign direct investment",
          },
        },
        {
          id: "ciealbus-u4-mnc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the impacts of MNCs on host countries?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "MNC impact",
                statement: "Host country effects.",
              },
            ],
            steps: [
              {
                reasoning: "Positive: jobs, technology, tax revenue.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Negative: exploitation, profit repatriation, environment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Net impact depends on regulation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Host country impacts",
          },
        },
        {
          id: "ciealbus-u4-mnc-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define MNC, FDI, transfer pricing, offshoring, global supply chain, tax haven. (b) What is an MNC? (c) What is FDI? (d) What are MNC strategies? (e) What are impacts on host countries? (f) What are impacts on home countries? (g) What is offshoring? (h) Evaluate whether MNCs benefit or harm developing countries.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "MNCs",
                statement: "Impact analysis.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Multinational corporation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Foreign direct investment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Market, resource, efficiency seeking.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Jobs vs exploitation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Profits vs job losses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Production abroad.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Balanced evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "MNC impact analysis.",
          },
        },
        {
          id: "ciealbus-u4-mnc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement best defines a multinational corporation (MNC)?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A company that only exports finished goods abroad",
              },
              {
                id: "b",
                text: "A company that sells its products only in its home country",
              },
              {
                id: "c",
                text: "A company that owns or controls operations in more than one country",
              },
              {
                id: "d",
                text: "A company that is wholly owned by a foreign government",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "MNC",
                statement: "Operates across borders.",
              },
            ],
            steps: [
              {
                reasoning:
                  "An MNC operates/owns operations in multiple countries.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** A company that owns or controls operations in more than one country",
          },
        },
        {
          id: "ciealbus-u4-mnc-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An MNC builds a plant abroad producing 8,000 units a year sold at $60 each. (a) Calculate the annual revenue from this plant. (b) State whether this illustrates market-seeking or efficiency-seeking FDI.",
          parts: [
            { label: "a", prompt: "Annual revenue", marks: 1 },
            { label: "b", prompt: "Type of FDI motive", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 480000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "MNC motives",
                statement: "Market-seeking vs efficiency-seeking.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Revenue = 8000 × 60 = 480000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Selling output in the host market to access customers = market-seeking (accept market-seeking or efficiency-seeking with justification).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "a = $480000; b = market-seeking",
          },
        },
        {
          id: "ciealbus-u4-mnc-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is offshoring, and why do firms do it?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Offshoring",
                statement: "Moving production abroad.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Offshoring = moving production/operations to another, usually lower-cost, country.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Done to cut labour/input costs, gain efficiency or access new markets.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Moving production abroad to reduce costs",
          },
        },
        {
          id: "ciealbus-u4-mnc-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A mining company builds a copper mine in Chile mainly to secure cheap raw materials. This is an example of:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Resource-seeking FDI",
              },
              {
                id: "b",
                text: "Market-seeking FDI",
              },
              {
                id: "c",
                text: "Exporting",
              },
              {
                id: "d",
                text: "Strategic asset-seeking FDI",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "FDI motives",
                statement: "Resource-seeking targets cheaper inputs.",
              },
            ],
            steps: [
              {
                reasoning: "Securing cheap raw materials = resource-seeking.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Resource-seeking FDI",
          },
        },
        {
          id: "ciealbus-u4-mnc-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A subsidiary in Country X sells 50,000 components a year to another subsidiary in Country Y at a transfer price of $35 each. (a) Calculate the annual value of these intra-company sales. (b) If Country X's tax rate is 30% and Country Y's is 15%, state which country gains from booking the profit in Country Y. (c) Identify the name of this practice of pricing between MNC subsidiaries.",
          parts: [
            {
              label: "a",
              prompt: "Annual value of intra-company sales",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Country gaining from lower-tax booking",
              marks: 1,
            },
            { label: "c", prompt: "Name of the practice", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1750000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Transfer pricing",
                statement:
                  "Internal MNC pricing can shift profits to low-tax countries.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Value = 50000 × 35 = 1750000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Country Y has the lower tax rate (15%), so booking profit there reduces tax paid.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Transfer pricing.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "a = $1750000; b = Country Y; c = transfer pricing",
          },
        },
        {
          id: "ciealbus-u4-mnc-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two impacts of MNC offshoring on the home country.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Home country impact",
                statement: "Offshoring effects on home economy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Negative: job losses in home manufacturing as production moves abroad.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Positive: lower input costs may cut prices for consumers and raise competitiveness.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Possible tax revenue loss if profits are shifted to low-tax jurisdictions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Job losses and possible tax loss versus lower prices and competitiveness",
          },
        },
        {
          id: "ciealbus-u4-mnc-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A country with very low or zero corporate taxes that attracts MNCs to locate profits there is called a:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Customs union",
              },
              {
                id: "b",
                text: "Tax haven",
              },
              {
                id: "c",
                text: "Free trade zone",
              },
              {
                id: "d",
                text: "Single market",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tax haven",
                statement: "Low/no-tax jurisdiction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A tax haven offers low or no taxes, attracting profit booking by MNCs.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Tax haven",
          },
        },
        {
          id: "ciealbus-u4-mnc-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A firm currently employs 3 workers at home at $18 per hour for 2,000 hours a year each. It considers offshoring to a country where the same workers cost $6 per hour for the same hours. (a) Calculate the current annual labour cost. (b) Calculate the new annual labour cost abroad. (c) Calculate the annual labour cost saving. (d) State one non-cost risk the firm should consider before offshoring.",
          parts: [
            { label: "a", prompt: "Current annual labour cost", marks: 1 },
            { label: "b", prompt: "New annual labour cost abroad", marks: 1 },
            { label: "c", prompt: "Annual labour cost saving", marks: 1 },
            { label: "d", prompt: "One non-cost risk", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 108000, unit: "$" },
              { label: "b", answer: 36000, unit: "$" },
              { label: "c", answer: 72000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Offshoring cost analysis",
                statement: "Compare labour costs across locations.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Current cost = 3 × 18 × 2000 = 108000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "New cost = 3 × 6 × 2000 = 36000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Saving = 108000 - 36000 = 72000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Any valid risk: quality control, political instability, currency risk, reputational damage from poor working conditions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "a = $108000; b = $36000; c = $72000; d = e.g. quality/reputational risk",
          },
        },
        {
          id: "ciealbus-u4-mnc-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a global supply chain?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A government tax on imports",
              },
              {
                id: "b",
                text: "An international network of suppliers and producers",
              },
              {
                id: "c",
                text: "A single domestic factory",
              },
              {
                id: "d",
                text: "A type of trade agreement",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Global supply chain",
                statement: "International supplier network.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A global supply chain links suppliers and producers across countries.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** An international network of suppliers and producers",
          },
        },
        {
          id: "ciealbus-u4-mnc-q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An MNC invests $5 million building a factory abroad. The factory produces 50,000 units a year. (a) Calculate the capital cost per unit produced. (b) State one benefit the host country may gain from this investment.",
          parts: [
            { label: "a", prompt: "Capital cost per unit", marks: 1 },
            { label: "b", prompt: "One benefit to the host country", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "FDI calculation",
                statement: "Cost per unit = investment / output.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Cost per unit = 5000000 / 50000 = 100.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Any valid benefit: jobs, tax revenue, technology transfer, infrastructure.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "a = $100; b = e.g. jobs/tax revenue/technology transfer",
          },
        },
        {
          id: "ciealbus-u4-mnc-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A pharmaceutical firm acquires a foreign biotech company mainly to obtain its patents and research expertise. This is an example of:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Strategic asset-seeking FDI",
              },
              {
                id: "b",
                text: "Market-seeking FDI",
              },
              {
                id: "c",
                text: "Licensing",
              },
              {
                id: "d",
                text: "Efficiency-seeking FDI",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "FDI motives",
                statement: "Strategic asset-seeking targets technology/brands.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Acquiring patents and expertise = strategic asset-seeking.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Strategic asset-seeking FDI",
          },
        },
        {
          id: "ciealbus-u4-mnc-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A clothing MNC opens a factory in a low-income country, employing 5,000 workers at low wages. (a) Identify two benefits the factory provides to the host country. (b) Identify two negative impacts on the host country. (c) Explain one impact on the MNC's home country. (d) Evaluate whether the MNC's presence benefits or harms the host country overall.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "MNC impact evaluation",
                statement: "Host and home country effects of MNC activity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Benefits: jobs, tax revenue, technology transfer, infrastructure, export earnings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Negatives: low wages/poor conditions, profit repatriation, environmental damage, crowding out local firms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Home country: cheaper goods/lower input costs but possible job losses from offshoring.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Balanced points: employment and investment versus exploitation and dependency concerns.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Overall judgement: net benefit depends on host government regulation, labour standards enforcement and whether profits are reinvested locally.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "MNCs bring jobs and investment but risk exploitation and profit leakage — net effect depends on regulation",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u4-mnc-notes",
      title: "MNCs — notes",
      summary:
        "MNCs seek markets/resources/efficiency. Host: jobs+technology vs exploitation+environment.",
      sections: [
        {
          heading: "Key idea",
          body: "MNCs create complex economic and social impacts — regulation matters.",
        },
        {
          heading: "Strategies",
          body: "Market-seeking, resource-seeking, efficiency-seeking, strategic asset-seeking.",
        },
      ],
    },
  ],
};
