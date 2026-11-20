module.exports = [
  {
    file: "lesson-4-1.ts", exportName: "lesson401",
    lesson: {
      id: "ciealbus-u4-lesson-4-1", code: "4-1",
      title: "Protectionism and Trade Policy",
      goal: "I CAN explain protectionist measures and their effects.",
      standards: ["Cambridge A Level Business 9707", "Paper 4: trade policy"],
      vocabulary: [
        { term: "Protectionism", definition: "Policies protecting domestic industry from foreign competition." },
        { term: "Tariff", definition: "Tax on imported goods." },
        { term: "Quota", definition: "Limit on import quantities." },
        { term: "Subsidy", definition: "Government financial support to domestic industry." },
        { term: "Embargo", definition: "Complete ban on trade with a country." },
        { term: "Free trade", definition: "Unrestricted trade between countries." },
      ],
      concept: {
        id: "ciealbus-u4-s1-prot", title: "Protectionism",
        skill: "Analyse trade protection measures.",
        sections: [
          { heading: "Protectionist measures", body: "Tariffs make imports expensive. Quotas limit quantities. Subsidies give domestic firms cost advantage. Embargoes ban trade entirely. All protect domestic industry but may invite retaliation." },
          { heading: "Arguments for protectionism", body: "Protect jobs, infant industries, national security, unfair competition. Against: higher prices, reduced efficiency, trade wars, consumer harm." },
        ],
        keyFormulas: [
          { name: "Protectionism", statement: "protect domestic industry" },
          { name: "Tariff", statement: "import tax" },
          { name: "Quota", statement: "import limit" },
        ],
        workedExample: {
          problem: "Why might a government impose tariffs on steel imports?",
          solution: "Protect domestic steel industry from cheaper foreign competition, preserve jobs, national security. But raises costs for steel users and invites retaliation.",
        },
        questions: [
          {
            id: "ciealbus-u4-pr-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is protectionism?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Policies protecting domestic industry" }, { id: "b", text: "Free trade" }, { id: "c", text: "A type of tax" }, { id: "d", text: "A business structure" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Protectionism", statement: "Domestic protection." }],
              steps: [{ reasoning: "Protectionism = protecting domestic industry.", marks: 1, markCode: "M" }],
              finalAnswer: "Domestic protection",
            },
          },
          {
            id: "ciealbus-u4-pr-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a quota?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Quota", statement: "Import limit." }],
              steps: [
                { reasoning: "Limit on quantity of imports.", marks: 1, markCode: "M" },
                { reasoning: "Directly restricts foreign competition.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Import limit",
            },
          },
          {
            id: "ciealbus-u4-pr-q3", difficulty: "core", totalMarks: 3,
            stem: "What are arguments for and against protectionism?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Protectionism", statement: "Pros vs cons." }],
              steps: [
                { reasoning: "For: protect jobs, infant industries, security.", marks: 1, markCode: "M" },
                { reasoning: "Against: higher prices, inefficiency, trade wars.", marks: 1, markCode: "M" },
                { reasoning: "Complex trade-offs.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Pros vs cons",
            },
          },
          {
            id: "ciealbus-u4-pr-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define protectionism, tariff, quota, subsidy, embargo, free trade. (b) What is protectionism? (c) What is a tariff? (d) What is a quota? (e) What is a subsidy? (f) What are arguments for protectionism? (g) What are arguments against? (h) Evaluate whether protectionism benefits or harms an economy.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Protectionism", statement: "Measures, effects." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Domestic protection.", marks: 1, markCode: "M" },
                { reasoning: "(c) Import tax.", marks: 1, markCode: "M" },
                { reasoning: "(d) Import limit.", marks: 1, markCode: "M" },
                { reasoning: "(e) Government support.", marks: 1, markCode: "M" },
                { reasoning: "(f) Jobs, infant industries, security.", marks: 1, markCode: "M" },
                { reasoning: "(g) Prices, efficiency, trade wars.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Protectionism analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealbus-u4-pr-notes", title: "Protectionism — notes",
      summary: "Tariffs, quotas, subsidies, embargoes protect domestic industry. Trade-offs complex.",
      sections: [
        { heading: "Key idea", body: "Protectionism shields domestic firms but may reduce efficiency and invite retaliation." },
        { heading: "Free trade", body: "Opposite approach — unrestricted trade promotes efficiency but may hurt vulnerable industries." },
      ],
    },
  },
  {
    file: "lesson-4-2.ts", exportName: "lesson402",
    lesson: {
      id: "ciealbus-u4-lesson-4-2", code: "4-2",
      title: "Multinational Corporations and Global Business",
      goal: "I CAN analyse MNC strategies and their impact on host and home countries.",
      standards: ["Cambridge A Level Business 9707", "Paper 4: MNCs"],
      vocabulary: [
        { term: "MNC", definition: "Company operating in multiple countries." },
        { term: "FDI", definition: "Foreign direct investment." },
        { term: "Transfer pricing", definition: "Pricing between MNC subsidiaries." },
        { term: "Offshoring", definition: "Moving production to lower-cost countries." },
        { term: "Global supply chain", definition: "International network of suppliers." },
        { term: "Tax haven", definition: "Country with low/no taxes attracting MNCs." },
      ],
      concept: {
        id: "ciealbus-u4-s2-mnc", title: "Multinational corporations",
        skill: "Analyse MNC impact and strategies.",
        sections: [
          { heading: "MNC strategies", body: "Market-seeking: access new customers. Resource-seeking: cheaper inputs/labour. Efficiency-seeking: lower costs. Strategic asset-seeking: acquire technology/brands." },
          { heading: "Impact on host countries", body: "Positive: jobs, technology transfer, tax revenue, infrastructure. Negative: profit repatriation, exploitation, environmental damage, crowding out local firms." },
          { heading: "Impact on home countries", body: "Positive: market access, profits. Negative: job losses from offshoring, tax avoidance." },
        ],
        keyFormulas: [
          { name: "MNC", statement: "multinational corporation" },
          { name: "FDI", statement: "foreign direct investment" },
          { name: "Offshoring", statement: "production abroad" },
        ],
        workedExample: {
          problem: "A clothing brand moves production to Bangladesh. Impacts?",
          solution: "Host: jobs but low wages/poor conditions. Home: cheaper goods but job losses. Consumer: lower prices. Complex trade-offs.",
        },
        questions: [
          {
            id: "ciealbus-u4-mnc-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is an MNC?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Company operating in multiple countries" }, { id: "b", text: "A type of tax" }, { id: "c", text: "A trade barrier" }, { id: "d", text: "A market structure" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "MNC", statement: "Multinational." }],
              steps: [{ reasoning: "MNC = operates in multiple countries.", marks: 1, markCode: "M" }],
              finalAnswer: "Multinational corporation",
            },
          },
          {
            id: "ciealbus-u4-mnc-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is FDI?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "FDI", statement: "Foreign investment." }],
              steps: [
                { reasoning: "Investment in foreign business operations.", marks: 1, markCode: "M" },
                { reasoning: "Includes building factories, buying companies.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Foreign direct investment",
            },
          },
          {
            id: "ciealbus-u4-mnc-q3", difficulty: "core", totalMarks: 3,
            stem: "What are the impacts of MNCs on host countries?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "MNC impact", statement: "Host country effects." }],
              steps: [
                { reasoning: "Positive: jobs, technology, tax revenue.", marks: 1, markCode: "M" },
                { reasoning: "Negative: exploitation, profit repatriation, environment.", marks: 1, markCode: "M" },
                { reasoning: "Net impact depends on regulation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Host country impacts",
            },
          },
          {
            id: "ciealbus-u4-mnc-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define MNC, FDI, transfer pricing, offshoring, global supply chain, tax haven. (b) What is an MNC? (c) What is FDI? (d) What are MNC strategies? (e) What are impacts on host countries? (f) What are impacts on home countries? (g) What is offshoring? (h) Evaluate whether MNCs benefit or harm developing countries.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "MNCs", statement: "Impact analysis." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Multinational corporation.", marks: 1, markCode: "M" },
                { reasoning: "(c) Foreign direct investment.", marks: 1, markCode: "M" },
                { reasoning: "(d) Market, resource, efficiency seeking.", marks: 1, markCode: "M" },
                { reasoning: "(e) Jobs vs exploitation.", marks: 1, markCode: "M" },
                { reasoning: "(f) Profits vs job losses.", marks: 1, markCode: "M" },
                { reasoning: "(g) Production abroad.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "MNC impact analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealbus-u4-mnc-notes", title: "MNCs — notes",
      summary: "MNCs seek markets/resources/efficiency. Host: jobs+technology vs exploitation+environment.",
      sections: [
        { heading: "Key idea", body: "MNCs create complex economic and social impacts — regulation matters." },
        { heading: "Strategies", body: "Market-seeking, resource-seeking, efficiency-seeking, strategic asset-seeking." },
      ],
    },
  },
  {
    file: "lesson-4-3.ts", exportName: "lesson403",
    lesson: {
      id: "ciealbus-u4-lesson-4-3", code: "4-3",
      title: "International Trade Agreements and Bodies",
      goal: "I CAN explain WTO, regional trade agreements and their implications.",
      standards: ["Cambridge A Level Business 9707", "Paper 4: trade agreements"],
      vocabulary: [
        { term: "WTO", definition: "World Trade Organization — global trade rules." },
        { term: "FTA", definition: "Free trade agreement between countries." },
        { term: "Customs union", definition: "FTA + common external tariff." },
        { term: "Single market", definition: "FTA + free movement of goods/services/capital/labour." },
        { term: "Most favoured nation", definition: "WTO principle of equal treatment." },
        { term: "Trade dispute", definition: "Conflict between trading nations." },
      ],
      concept: {
        id: "ciealbus-u4-s3-trade", title: "Trade agreements",
        skill: "Understand international trade frameworks.",
        sections: [
          { heading: "WTO", body: "Global body promoting free trade. Sets rules, resolves disputes. Most favoured nation principle — equal treatment. Can authorise sanctions." },
          { heading: "Regional agreements", body: "FTA: reduce/eliminate tariffs between members. Customs union: FTA + common external tariff. Single market: + free movement of factors. EU is most advanced example." },
        ],
        keyFormulas: [
          { name: "WTO", statement: "World Trade Organization" },
          { name: "FTA", statement: "Free trade agreement" },
          { name: "Single market", statement: "Full economic integration" },
        ],
        workedExample: {
          problem: "How does EU single market benefit businesses?",
          solution: "Free movement of goods, services, capital, labour — no tariffs, no border checks, wider market access.",
        },
        questions: [
          {
            id: "ciealbus-u4-ta-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is the WTO?",
            response: { type: "mcq", choices: [
              { id: "a", text: "World Trade Organization — global trade rules" }, { id: "b", text: "A type of tax" }, { id: "c", text: "A trade barrier" }, { id: "d", text: "A business structure" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "WTO", statement: "Trade rules body." }],
              steps: [{ reasoning: "WTO = global trade rules.", marks: 1, markCode: "M" }],
              finalAnswer: "Global trade rules",
            },
          },
          {
            id: "ciealbus-u4-ta-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a free trade agreement?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "FTA", statement: "Trade agreement." }],
              steps: [
                { reasoning: "Agreement between countries to reduce/eliminate tariffs.", marks: 1, markCode: "M" },
                { reasoning: "Increases trade between members.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Tariff reduction agreement",
            },
          },
          {
            id: "ciealbus-u4-ta-q3", difficulty: "core", totalMarks: 3,
            stem: "What is the difference between FTA and single market?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Trade agreements", statement: "FTA vs single market." }],
              steps: [
                { reasoning: "FTA: reduce tariffs on goods.", marks: 1, markCode: "M" },
                { reasoning: "Single market: + free movement of services/capital/labour.", marks: 1, markCode: "M" },
                { reasoning: "Single market deeper integration.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "FTA vs single market",
            },
          },
          {
            id: "ciealbus-u4-ta-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define WTO, FTA, customs union, single market, most favoured nation, trade dispute. (b) What is WTO? (c) What is FTA? (d) What is a single market? (e) What is most favoured nation? (f) What are benefits of trade agreements? (g) What are drawbacks? (h) Evaluate whether trade agreements benefit businesses.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Trade agreements", statement: "Frameworks, effects." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Global trade rules.", marks: 1, markCode: "M" },
                { reasoning: "(c) Tariff reduction.", marks: 1, markCode: "M" },
                { reasoning: "(d) Full economic integration.", marks: 1, markCode: "M" },
                { reasoning: "(e) Equal treatment principle.", marks: 1, markCode: "M" },
                { reasoning: "(f) Market access, efficiency.", marks: 1, markCode: "M" },
                { reasoning: "(g) Job losses, sovereignty loss.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Trade agreements analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealbus-u4-ta-notes", title: "Trade agreements — notes",
      summary: "WTO global rules. FTA→customs union→single market increasing integration.",
      sections: [
        { heading: "Key idea", body: "Trade agreements reduce barriers but create winners and losers." },
        { heading: "EU example", body: "Single market allows free movement of goods, services, capital, labour." },
      ],
    },
  },
  {
    file: "lesson-4-4.ts", exportName: "lesson404",
    lesson: {
      id: "ciealbus-u4-lesson-4-4", code: "4-4",
      title: "Global Business Strategy and Evaluation",
      goal: "I CAN evaluate global business strategies and their implications.",
      standards: ["Cambridge A Level Business 9707", "Paper 4: global strategy"],
      vocabulary: [
        { term: "Global strategy", definition: "Standardised approach across markets." },
        { term: "Multi-domestic strategy", definition: "Adapted approach per market." },
        { term: "Transnational strategy", definition: "Balance global efficiency and local responsiveness." },
        { term: "Economies of scale", definition: "Cost advantages from size." },
        { term: "Cultural distance", definition: "Differences between home and host cultures." },
        { term: "Political risk", definition: "Risk from government actions/political instability." },
      ],
      concept: {
        id: "ciealbus-u4-s4-gbs", title: "Global business strategy",
        skill: "Evaluate international strategy choices.",
        sections: [
          { heading: "Strategy spectrum", body: "Global: standardised everywhere — economies of scale but ignores local needs. Multi-domestic: fully adapted — responsive but loses scale. Transnational: balance both — complex but flexible." },
          { heading: "Entry and risk", body: "Entry modes: exporting→licensing→franchising→joint venture→wholly-owned. Risks: political, currency, cultural, operational." },
        ],
        keyFormulas: [
          { name: "Global", statement: "standardised" },
          { name: "Multi-domestic", statement: "adapted" },
          { name: "Transnational", statement: "balanced" },
        ],
        workedExample: {
          problem: "A fast-food chain wants to enter India. Which strategy?",
          solution: "Multi-domestic or transnational — adapt menu to local tastes (vegetarian options), respect cultural norms, balance with global brand consistency.",
        },
        questions: [
          {
            id: "ciealbus-u4-gs-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a global strategy?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Standardised approach across markets" }, { id: "b", text: "Adapted per market" }, { id: "c", text: "A type of tax" }, { id: "d", text: "A trade barrier" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Global strategy", statement: "Standardised." }],
              steps: [{ reasoning: "Global = standardised across markets.", marks: 1, markCode: "M" }],
              finalAnswer: "Standardised approach",
            },
          },
          {
            id: "ciealbus-u4-gs-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a multi-domestic strategy?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Multi-domestic", statement: "Adapted." }],
              steps: [
                { reasoning: "Adapted approach per market.", marks: 1, markCode: "M" },
                { reasoning: "Responsive to local needs but loses scale.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Adapted per market",
            },
          },
          {
            id: "ciealbus-u4-gs-q3", difficulty: "core", totalMarks: 3,
            stem: "Compare global and multi-domestic strategies.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Strategy comparison", statement: "Global vs multi-domestic." }],
              steps: [
                { reasoning: "Global: standardised, economies of scale.", marks: 1, markCode: "M" },
                { reasoning: "Multi-domestic: adapted, local responsiveness.", marks: 1, markCode: "M" },
                { reasoning: "Trade-off between efficiency and responsiveness.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Global vs multi-domestic",
            },
          },
          {
            id: "ciealbus-u4-gs-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define global strategy, multi-domestic strategy, transnational strategy, economies of scale, cultural distance, political risk. (b) What is global strategy? (c) What is multi-domestic? (d) What is transnational? (e) What are entry modes? (f) What is cultural distance? (g) What is political risk? (h) Evaluate which strategy suits a company entering emerging markets.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Global strategy", statement: "Evaluation." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Standardised.", marks: 1, markCode: "M" },
                { reasoning: "(c) Adapted.", marks: 1, markCode: "M" },
                { reasoning: "(d) Balanced.", marks: 1, markCode: "M" },
                { reasoning: "(e) Exporting→licensing→JV→wholly-owned.", marks: 1, markCode: "M" },
                { reasoning: "(f) Cultural differences.", marks: 1, markCode: "M" },
                { reasoning: "(g) Government/political instability.", marks: 1, markCode: "M" },
                { reasoning: "(h) Context-dependent evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Global business strategy.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealbus-u4-gs-notes", title: "Global strategy — notes",
      summary: "Global=standardised, multi-domestic=adapted, transnational=balanced. Entry modes and risks vary.",
      sections: [
        { heading: "Key idea", body: "Strategy depends on market similarity, resources, risk tolerance." },
        { heading: "Entry modes", body: "Exporting→licensing→franchising→JV→wholly-owned — increasing commitment/risk." },
      ],
    },
  },
];
