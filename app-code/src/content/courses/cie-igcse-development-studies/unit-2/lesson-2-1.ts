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
              { id: "a", text: "A tax on imported goods" },
              { id: "b", text: "A quota on exports" },
              { id: "c", text: "A free-trade agreement" },
              { id: "d", text: "A subsidy for exporters" },
            ],
            correctChoiceId: "a",
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
        {
          id: "cieids-u2-trade-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Free trade is best described as trade:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Limited to primary products" },
            { id: "b", text: "With high tariffs on all imports" },
            { id: "c", text: "Without tariffs or other barriers" },
            { id: "d", text: "Controlled by one world government" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Free trade", statement: "Trade without tariffs or barriers between countries." }],
            steps: [{ reasoning: "Free trade removes tariffs, quotas and other restrictions so countries can trade openly.", marks: 1, markCode: "M" }],
            finalAnswer: "**(b)** Without tariffs or other barriers.",
            commonErrors: ["Confusing free trade with fair trade."],
          },
        },
        {
          id: "cieids-u2-trade-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Protectionism is most likely to involve:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Lowering export taxes to zero" },
            { id: "b", text: "Tariffs, quotas or subsidies protecting domestic producers" },
            { id: "c", text: "Opening markets to all competitors" },
            { id: "d", text: "Removing all import quotas" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Protectionism", statement: "Policies that restrict imports to shield domestic industries." }],
            steps: [{ reasoning: "Tariffs, quotas and subsidies make imports less competitive and protect home producers.", marks: 1, markCode: "M" }],
            finalAnswer: "**(b)** Tariffs, quotas or subsidies protecting domestic producers.",
            commonErrors: ["Thinking protectionism only means tariffs."],
          },
        },
        {
          id: "cieids-u2-trade-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Export-led growth is a strategy based on:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Borrowing to fund consumption" },
            { id: "b", text: "Replacing all imports with local goods" },
            { id: "c", text: "Keeping wages permanently low" },
            { id: "d", text: "Producing goods mainly for export markets" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Export-led growth", statement: "Development driven by producing goods for export markets." }],
            steps: [{ reasoning: "Countries such as East Asian economies industrialised by expanding manufactured exports.", marks: 1, markCode: "M" }],
            finalAnswer: "**(a)** Producing goods mainly for export markets.",
            commonErrors: ["Confusing export-led growth with import substitution."],
          },
        },
        {
          id: "cieids-u2-trade-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'primary trap' describes countries that depend on exports that are:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Services sold to tourists only" },
            { id: "b", text: "Government bonds" },
            { id: "c", text: "High-value manufactured goods" },
            { id: "d", text: "Low-value and price-volatile raw materials" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "context", name: "Primary trap", statement: "Low-value, volatile primary exports limit development." }],
            steps: [{ reasoning: "Raw-material exports earn little and prices fluctuate, restricting funds for development.", marks: 1, markCode: "M" }],
            finalAnswer: "**(b)** Low-value and price-volatile raw materials.",
            commonErrors: ["Assuming more export volume alone solves low prices."],
          },
        },
        {
          id: "cieids-u2-trade-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Globalisation can benefit developing countries by bringing:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Guaranteed equal incomes" },
            { id: "b", text: "Investment, technology and export markets" },
            { id: "c", text: "Protection from all price shocks" },
            { id: "d", text: "Automatic poverty reduction" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "context", name: "Globalisation benefits", statement: "Investment, technology transfer and market access." }],
            steps: [{ reasoning: "FDI, technology and access to global markets can raise productivity and incomes.", marks: 1, markCode: "M" }],
            finalAnswer: "**(a)** Investment, technology and export markets.",
            commonErrors: ["Claiming globalisation benefits every country equally."],
          },
        },
        {
          id: "cieids-u2-trade-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A major criticism of globalisation for developing countries is that it can:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Force every country to industrialise" },
            { id: "b", text: "Stop foreign investment completely" },
            { id: "c", text: "Increase exposure to shocks and widen inequality" },
            { id: "d", text: "Remove all inequalities instantly" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Globalisation drawbacks", statement: "Global shocks, TNC dominance and uneven gains." }],
            steps: [{ reasoning: "Connected economies face global price and financial shocks, while benefits may concentrate in some regions and sectors.", marks: 1, markCode: "R" }],
            finalAnswer: "**(b)** Increase exposure to shocks and widen inequality.",
            commonErrors: ["Ignoring the uneven distribution of globalisation's gains."],
          },
        },
        {
          id: "cieids-u2-trade-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "An imported good costs $100$ before duty. A tariff of $20$% is applied. Calculate the landed price.",
          response: { type: "numeric", parts: [{ label: "Landed price", answer: 120, unit: "USD" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Tariff", statement: "A tax on imported goods that raises the import price." }],
            steps: [
              { reasoning: "Calculate the tariff amount: $20$% of $100$ is $20$.", marks: 1, markCode: "M" },
              { reasoning: "Add the tariff to the original price: $100 + 20 = 120$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "120 USD",
            commonErrors: ["Adding 20 dollars instead of 20 percent."],
          },
        },
        {
          id: "cieids-u2-trade-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A country exports $500000$ units at $4$ each. The export price rises to $5$. Calculate the increase in export earnings.",
          response: { type: "numeric", parts: [{ label: "Increase", answer: 500000, unit: "USD" }] },
          markscheme: {
            principles: [{ kind: "context", name: "Export earnings", statement: "Earnings = quantity × export price." }],
            steps: [
              { reasoning: "Find the price increase: $5 - 4 = 1$ per unit.", marks: 1, markCode: "M" },
              { reasoning: "Multiply by quantity: $500000 \\times 1 = 500000$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "500000 USD",
            commonErrors: ["Calculating the new total earnings instead of the increase."],
          },
        },
        {
          id: "cieids-u2-trade-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A government imports $200000$ units and charges a tariff of $3$ per unit. Calculate the tariff revenue.",
          response: { type: "numeric", parts: [{ label: "Tariff revenue", answer: 600000, unit: "USD" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Tariff revenue", statement: "Tariff per unit × number of units imported." }],
            steps: [
              { reasoning: "Use the formula: tariff per unit multiplied by units imported.", marks: 1, markCode: "M" },
              { reasoning: "Calculate: $200000 \\times 3 = 600000$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "600000 USD",
            commonErrors: ["Using the total import value instead of units."],
          },
        },
        {
          id: "cieids-u2-trade-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A fair-trade cooperative receives $1.20$ per kg while the market price is $1.00$ per kg. Calculate the premium as a percentage of the market price.",
          response: { type: "numeric", parts: [{ label: "Premium", answer: 20, unit: "%" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Fair trade", statement: "Trade that guarantees producers a fair price above the market minimum." }],
            steps: [
              { reasoning: "Find the price difference: $1.20 - 1.00 = 0.20$ per kg.", marks: 1, markCode: "M" },
              { reasoning: "Express as a percentage of market price: $0.20 / 1.00 \\times 100 = 20$%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20%",
            commonErrors: ["Using $1.20$ as the denominator instead of the market price."],
          },
        },
        {
          id: "cieids-u2-trade-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A country earns $100$ billion from exports, of which $70$ billion comes from primary products. Calculate the primary export share.",
          response: { type: "numeric", parts: [{ label: "Primary share", answer: 70, unit: "%" }] },
          markscheme: {
            principles: [{ kind: "context", name: "Export composition", statement: "Primary share shows dependence on raw-material exports." }],
            steps: [
              { reasoning: "Identify the relevant figures: primary exports $70$ billion out of total exports $100$ billion.", marks: 1, markCode: "M" },
              { reasoning: "Divide primary exports by total exports: $70 / 100 = 0.70$.", marks: 1, markCode: "M" },
              { reasoning: "Convert to a percentage: $0.70 \\times 100 = 70$%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "70%",
            commonErrors: ["Dividing total exports by primary exports."],
          },
        },
        {
          id: "cieids-u2-trade-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate whether protectionism can help developing countries industrialise.",
          parts: [
            { label: "a", prompt: "Explain the infant-industry argument for protection.", marks: 3 },
            { label: "b", prompt: "Evaluate the risks and overall case for protectionism.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Protectionism debate", statement: "Temporary shelter for new industries versus higher prices and retaliation." }],
            steps: [
              { part: "a", reasoning: "New industries may be too weak to compete with established foreign firms without temporary protection.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Tariffs or quotas can give domestic firms time to learn, invest and become efficient.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "If successful, infant industries can diversify exports and reduce dependence on primary products.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Protection raises prices for consumers and can shelter inefficient firms that never become competitive.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Trading partners may retaliate, reducing export markets and inviting trade disputes.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Judgement: limited, temporary protection may help selected industries, but prolonged protectionism usually harms development.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Infant industries need shelter to grow. (b) Risks include higher prices, inefficiency and retaliation; use only selectively and temporarily.",
            commonErrors: ["Treating protectionism as either always beneficial or always harmful."],
          },
        },
      ],
    },
  ],
};
