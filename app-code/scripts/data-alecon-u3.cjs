module.exports = [
  {
    file: "lesson-3-1.ts", exportName: "lesson431",
    lesson: {
      id: "ciealecon-u3-lesson-3-1", code: "3-1",
      title: "International Trade Theory",
      goal: "I CAN explain comparative advantage, absolute advantage and trade gains.",
      standards: ["Cambridge A Level Economics 9708", "Paper 3: international"],
      vocabulary: [
        { term: "Absolute advantage", definition: "Ability to produce more with same resources." },
        { term: "Comparative advantage", definition: "Lower opportunity cost of production." },
        { term: "Terms of trade", definition: "Ratio of export prices to import prices." },
        { term: "Free trade", definition: "Unrestricted international trade." },
        { term: "Protectionism", definition: "Policies restricting free trade." },
        { term: "Trade creation", definition: "New trade from lower barriers." },
      ],
      concept: {
        id: "ciealecon-u3-s1-trade", title: "Trade theory",
        skill: "Analyse gains from trade.",
        sections: [
          { heading: "Absolute advantage", body: "Country can produce more output with same inputs. Ricardo showed trade beneficial even without absolute advantage." },
          { heading: "Comparative advantage", body: "Country has lower opportunity cost. Specialisation and trade → both countries gain. Basis for free trade arguments." },
          { heading: "Terms of trade", body: "Ratio of export prices to import prices. Improving terms = exports rise faster than imports. Affects national income." },
        ],
        keyFormulas: [
          { name: "Absolute advantage", statement: "more output, same inputs" },
          { name: "Comparative advantage", statement: "lower opportunity cost" },
          { name: "Terms of trade", statement: "export/import price ratio" },
        ],
        workedExample: {
          problem: "Country A: 10 wheat OR 5 cars. Country B: 8 wheat OR 4 cars. Who has comparative advantage in wheat?",
          solution: "A: 1 car = 2 wheat. B: 1 car = 2 wheat. Equal opportunity cost — no comparative advantage in wheat. Check cars: A: 1 wheat = 0.5 cars. B: 1 wheat = 0.5 cars. Identical — no gains from trade.",
        },
        questions: [
          {
            id: "ciealecon-u3-ta-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is comparative advantage?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Lower opportunity cost of production" }, { id: "b", text: "More output with same inputs" }, { id: "c", text: "Highest productivity" }, { id: "d", text: "Largest economy" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Comparative advantage", statement: "Lower opportunity cost." }],
              steps: [{ reasoning: "Comparative = lower opportunity cost.", marks: 1, markCode: "M" }],
              finalAnswer: "Lower opportunity cost",
            },
          },
          {
            id: "ciealecon-u3-ta-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is absolute advantage?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Absolute advantage", statement: "More output." }],
              steps: [
                { reasoning: "Ability to produce more with same resources.", marks: 1, markCode: "M" },
                { reasoning: "Doesn't guarantee trade benefits.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "More output same inputs",
            },
          },
          {
            id: "ciealecon-u3-ta-q3", difficulty: "core", totalMarks: 3,
            stem: "Why does trade benefit both countries even without absolute advantage?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Trade gains", statement: "Comparative advantage." }],
              steps: [
                { reasoning: "Comparative advantage → specialisation.", marks: 1, markCode: "M" },
                { reasoning: "Both countries gain from trade.", marks: 1, markCode: "M" },
                { reasoning: "Increased total output/consumption.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Specialisation gains",
            },
          },
          {
            id: "ciealecon-u3-ta-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define absolute advantage, comparative advantage, terms of trade, free trade, protectionism, trade creation. (b) What is absolute advantage? (c) What is comparative advantage? (d) What are terms of trade? (e) Why does trade benefit both countries? (f) What is protectionism? (g) What is trade creation? (h) Evaluate whether free trade always benefits all countries.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Trade theory", statement: "Analysis." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) More output same inputs.", marks: 1, markCode: "M" },
                { reasoning: "(c) Lower opportunity cost.", marks: 1, markCode: "M" },
                { reasoning: "(d) Export/import price ratio.", marks: 1, markCode: "M" },
                { reasoning: "(e) Comparative advantage gains.", marks: 1, markCode: "M" },
                { reasoning: "(f) Trade restrictions.", marks: 1, markCode: "M" },
                { reasoning: "(g) New trade from lower barriers.", marks: 1, markCode: "M" },
                { reasoning: "(h) Winners/losers — not always equal.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "International trade theory.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealecon-u3-ta-notes", title: "Trade theory — notes",
      summary: "Comparative advantage → specialisation → mutual gains. Free trade vs protectionism debate.",
      sections: [
        { heading: "Key idea", body: "Trade based on comparative advantage benefits all participants." },
        { heading: "Reality", body: "Not all countries benefit equally — distribution matters." },
      ],
    },
  },
  {
    file: "lesson-3-2.ts", exportName: "lesson432",
    lesson: {
      id: "ciealecon-u3-lesson-3-2", code: "3-2",
      title: "Exchange Rates and Balance of Payments",
      goal: "I CAN explain exchange rate determination, effects and balance of payments.",
      standards: ["Cambridge A Level Economics 9708", "Paper 3: exchange rates"],
      vocabulary: [
        { term: "Exchange rate", definition: "Price of one currency in terms of another." },
        { term: "Floating exchange rate", definition: "Rate determined by market forces." },
        { term: "Fixed exchange rate", definition: "Rate pegged to another currency/commodity." },
        { term: "Appreciation", definition: "Currency value increases." },
        { term: "Depreciation", definition: "Currency value decreases." },
        { term: "Balance of payments", definition: "Record of all international transactions." },
      ],
      concept: {
        id: "ciealecon-u3-s2-fx", title: "Exchange rates",
        skill: "Analyse exchange rate effects.",
        sections: [
          { heading: "Exchange rate systems", body: "Floating: determined by demand/supply. Fixed: pegged, requires reserves to maintain. Managed float: central bank intervenes occasionally." },
          { heading: "Effects", body: "Appreciation: exports expensive, imports cheap → trade deficit risk. Depreciation: exports cheap, imports expensive → trade surplus possible but inflation risk." },
          { heading: "Balance of payments", body: "Current account: trade in goods/services + income transfers. Capital account: investment flows. Overall balance must equal zero." },
        ],
        keyFormulas: [
          { name: "Exchange rate", statement: "currency price" },
          { name: "Appreciation", statement: "currency strengthens" },
          { name: "Balance of payments", statement: "international transactions" },
        ],
        workedExample: {
          problem: "Currency depreciates 20%. Effect on exports and inflation?",
          solution: "Exports cheaper → more competitive, exports↑. Imports expensive → import costs↑ → inflationary pressure.",
        },
        questions: [
          {
            id: "ciealecon-u3-fx-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a floating exchange rate?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Rate determined by market forces" }, { id: "b", text: "Fixed rate" }, { id: "c", text: "Pegged rate" }, { id: "d", text: "Government-set rate" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Floating rate", statement: "Market determined." }],
              steps: [{ reasoning: "Floating = market forces determine.", marks: 1, markCode: "M" }],
              finalAnswer: "Market determined",
            },
          },
          {
            id: "ciealecon-u3-fx-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between appreciation and depreciation?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Appreciation vs depreciation", statement: "Currency movement." }],
              steps: [
                { reasoning: "Appreciation: currency value increases.", marks: 1, markCode: "M" },
                { reasoning: "Depreciation: currency value decreases.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Up vs down currency",
            },
          },
          {
            id: "ciealecon-u3-fx-q3", difficulty: "core", totalMarks: 3,
            stem: "What are the components of the balance of payments?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Balance of payments", statement: "Components." }],
              steps: [
                { reasoning: "Current account: trade, income.", marks: 1, markCode: "M" },
                { reasoning: "Capital account: investment.", marks: 1, markCode: "M" },
                { reasoning: "Overall must balance.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Current + capital accounts",
            },
          },
          {
            id: "ciealecon-u3-fx-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define exchange rate, floating, fixed, appreciation, depreciation, balance of payments. (b) What is exchange rate? (c) What is floating vs fixed? (d) What is appreciation? (e) What is depreciation? (f) What are BOP components? (g) How does depreciation affect exports? (h) Evaluate whether countries should fix or float exchange rates.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Exchange rates", statement: "Analysis." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Currency price.", marks: 1, markCode: "M" },
                { reasoning: "(c) Market vs pegged.", marks: 1, markCode: "M" },
                { reasoning: "(d) Currency strengthens.", marks: 1, markCode: "M" },
                { reasoning: "(e) Currency weakens.", marks: 1, markCode: "M" },
                { reasoning: "(f) Current + capital.", marks: 1, markCode: "M" },
                { reasoning: "(g) Cheaper exports.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Exchange rates and BOP.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealecon-u3-fx-notes", title: "Exchange rates — notes",
      summary: "Floating vs fixed rates. Appreciation/depreciation affect trade competitiveness.",
      sections: [
        { heading: "Key idea", body: "Exchange rates significantly impact international competitiveness." },
        { heading: "BOP", body: "Current account (trade) vs capital account (investment) must balance." },
      ],
    },
  },
  {
    file: "lesson-3-3.ts", exportName: "lesson433",
    lesson: {
      id: "ciealecon-u3-lesson-3-3", code: "3-3",
      title: "Globalisation and International Institutions",
      goal: "I CAN explain globalisation drivers, institutions and implications.",
      standards: ["Cambridge A Level Economics 9708", "Paper 3: globalisation"],
      vocabulary: [
        { term: "Globalisation", definition: "Increasing interconnectedness of world economies." },
        { term: "WTO", definition: "World Trade Organization." },
        { term: "IMF", definition: "International Monetary Fund." },
        { term: "World Bank", definition: "International development lender." },
        { term: "Multinational corporation", definition: "Company operating in multiple countries." },
        { term: "Foreign direct investment", definition: "Investment in foreign operations." },
      ],
      concept: {
        id: "ciealecon-u3-s3-glob", title: "Globalisation",
        skill: "Analyse globalisation and institutions.",
        sections: [
          { heading: "Drivers", body: "Technology (internet, transport), trade liberalisation, financial deregulation, MNC expansion. Reduces barriers, increases interdependence." },
          { heading: "Institutions", body: "WTO: trade rules. IMF: balance of payments support, surveillance. World Bank: development lending. Regional: EU, ASEAN, NAFTA." },
          { heading: "Implications", body: "Benefits: efficiency, growth, poverty reduction. Costs: inequality, job losses, environmental damage, loss of sovereignty." },
        ],
        keyFormulas: [
          { name: "Globalisation", statement: "world integration" },
          { name: "WTO", statement: "trade rules" },
          { name: "IMF", statement: "BOP support" },
        ],
        workedExample: {
          problem: "How does globalisation affect developing countries?",
          solution: "Positive: market access, FDI, technology. Negative: exploitation, environmental damage, dependency on volatile markets.",
        },
        questions: [
          {
            id: "ciealecon-u3-gl-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is globalisation?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Increasing interconnectedness of world economies" }, { id: "b", text: "A type of tax" }, { id: "c", text: "A trade barrier" }, { id: "d", text: "A business structure" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Globalisation", statement: "World integration." }],
              steps: [{ reasoning: "Globalisation = interconnected economies.", marks: 1, markCode: "M" }],
              finalAnswer: "World integration",
            },
          },
          {
            id: "ciealecon-u3-gl-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the WTO?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "WTO", statement: "Trade rules." }],
              steps: [
                { reasoning: "World Trade Organization.", marks: 1, markCode: "M" },
                { reasoning: "Sets trade rules, resolves disputes.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Trade rules body",
            },
          },
          {
            id: "ciealecon-u3-gl-q3", difficulty: "core", totalMarks: 3,
            stem: "What are the drivers of globalisation?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Globalisation drivers", statement: "Causes." }],
              steps: [
                { reasoning: "Technology, trade liberalisation.", marks: 1, markCode: "M" },
                { reasoning: "Financial deregulation, MNCs.", marks: 1, markCode: "M" },
                { reasoning: "Reduced barriers.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Technology, liberalisation",
            },
          },
          {
            id: "ciealecon-u3-gl-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define globalisation, WTO, IMF, World Bank, MNC, FDI. (b) What is globalisation? (c) What is WTO? (d) What is IMF? (e) What are globalisation drivers? (f) What are benefits? (g) What are costs? (h) Evaluate whether globalisation benefits developing countries.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Globalisation", statement: "Analysis." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) World integration.", marks: 1, markCode: "M" },
                { reasoning: "(c) Trade rules.", marks: 1, markCode: "M" },
                { reasoning: "(d) BOP support.", marks: 1, markCode: "M" },
                { reasoning: "(e) Technology, liberalisation.", marks: 1, markCode: "M" },
                { reasoning: "(f) Efficiency, growth, poverty reduction.", marks: 1, markCode: "M" },
                { reasoning: "(g) Inequality, job losses, environment.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Globalisation analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealecon-u3-gl-notes", title: "Globalisation — notes",
      summary: "Technology+liberalisation→globalisation. WTO/IMF/World Bank shape rules.",
      sections: [
        { heading: "Key idea", body: "Globalisation integrates economies but creates winners and losers." },
        { heading: "Institutions", body: "WTO (trade), IMF (BOP), World Bank (development)." },
      ],
    },
  },
  {
    file: "lesson-3-4.ts", exportName: "lesson434",
    lesson: {
      id: "ciealecon-u3-lesson-3-4", code: "3-4",
      title: "Protectionism and Trade Policy",
      goal: "I CAN evaluate protectionist measures and their economic effects.",
      standards: ["Cambridge A Level Economics 9708", "Paper 3: protectionism"],
      vocabulary: [
        { term: "Tariff", definition: "Tax on imported goods." },
        { term: "Quota", definition: "Limit on import quantity." },
        { term: "Subsidy", definition: "Government payment to domestic producers." },
        { term: "Embargo", definition: "Complete trade ban." },
        { term: "Voluntary export restraint", definition: "Exporter limits shipments." },
        { term: "Trade war", definition: "Retaliatory trade restrictions." },
      ],
      concept: {
        id: "ciealecon-u3-s4-prot", title: "Protectionism",
        skill: "Evaluate protectionist policies.",
        sections: [
          { heading: "Protectionist measures", body: "Tariffs: raise import prices. Quotas: limit quantities. Subsidies: lower domestic costs. Embargoes: complete ban. All reduce competition." },
          { heading: "Arguments for", body: "Protect jobs, infant industries, national security, unfair competition (dumping). Against: higher prices, inefficiency, retaliation, consumer harm." },
        ],
        keyFormulas: [
          { name: "Tariff", statement: "import tax" },
          { name: "Quota", statement: "import limit" },
          { name: "Subsidy", statement: "producer support" },
        ],
        workedExample: {
          problem: "Why might a government impose tariffs on steel imports?",
          solution: "Protect domestic steel industry, preserve jobs, national security. But raises costs for users and invites retaliation.",
        },
        questions: [
          {
            id: "ciealecon-u3-pr-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a tariff?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Tax on imported goods" }, { id: "b", text: "A subsidy" }, { id: "c", text: "A quota" }, { id: "d", text: "A trade agreement" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Tariff", statement: "Import tax." }],
              steps: [{ reasoning: "Tariff = tax on imports.", marks: 1, markCode: "M" }],
              finalAnswer: "Import tax",
            },
          },
          {
            id: "ciealecon-u3-pr-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a quota?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Quota", statement: "Import limit." }],
              steps: [
                { reasoning: "Limit on import quantity.", marks: 1, markCode: "M" },
                { reasoning: "Directly restricts foreign competition.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Import limit",
            },
          },
          {
            id: "ciealecon-u3-pr-q3", difficulty: "core", totalMarks: 3,
            stem: "What are arguments for and against protectionism?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Protectionism", statement: "Pros vs cons." }],
              steps: [
                { reasoning: "For: jobs, infant industries, security.", marks: 1, markCode: "M" },
                { reasoning: "Against: prices, inefficiency, trade wars.", marks: 1, markCode: "M" },
                { reasoning: "Complex trade-offs.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Pros vs cons",
            },
          },
          {
            id: "ciealecon-u3-pr-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define tariff, quota, subsidy, embargo, VER, trade war. (b) What is a tariff? (c) What is a quota? (d) What is a subsidy? (e) What are arguments for protectionism? (f) What are arguments against? (g) What is a trade war? (h) Evaluate whether protectionism benefits or harms an economy.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Protectionism", statement: "Analysis." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Import tax.", marks: 1, markCode: "M" },
                { reasoning: "(c) Import limit.", marks: 1, markCode: "M" },
                { reasoning: "(d) Producer support.", marks: 1, markCode: "M" },
                { reasoning: "(e) Jobs, industries, security.", marks: 1, markCode: "M" },
                { reasoning: "(f) Prices, efficiency, retaliation.", marks: 1, markCode: "M" },
                { reasoning: "(g) Retaliatory restrictions.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Protectionism analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealecon-u3-pr-notes", title: "Protectionism — notes",
      summary: "Tariffs, quotas, subsidies protect domestic industry. Trade-offs complex.",
      sections: [
        { heading: "Key idea", body: "Protectionism shields domestic firms but may reduce efficiency and invite retaliation." },
        { heading: "Trade war", body: "Retaliation can escalate — all parties lose." },
      ],
    },
  },
];
