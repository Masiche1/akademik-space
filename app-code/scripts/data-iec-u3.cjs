module.exports = [
  {
    file: "lesson-3-1.ts", exportName: "lesson291",
    lesson: {
      id: "cieiec-u3-lesson-3-1", code: "3-1",
      title: "International Trade and Exchange Rates",
      goal: "I CAN explain international trade, exchange rates and their effects.",
      standards: ["Cambridge IGCSE Economics 0455", "Paper 6: international trade"],
      vocabulary: [
        { term: "International trade", definition: "Exchange of goods/services between countries." },
        { term: "Exchange rate", definition: "Value of one currency in terms of another." },
        { term: "Appreciation", definition: "Increase in currency value." },
        { term: "Depreciation", definition: "Decrease in currency value." },
        { term: "Balance of payments", definition: "Record of all transactions with other countries." },
        { term: "Trade deficit", definition: "Imports exceed exports." },
      ],
      concept: {
        id: "cieiec-u3-s1-trade", title: "International trade",
        skill: "Understand trade and exchange rates.",
        sections: [
          { heading: "International trade", body: "Countries specialise and trade based on comparative advantage. Benefits: access to more goods, economies of scale, competition. Risks: dependency, exchange rate volatility." },
          { heading: "Exchange rates", body: "Currency value affects trade. Appreciation: exports more expensive, imports cheaper — may reduce exports. Depreciation: exports cheaper, imports expensive — may boost exports." },
          { heading: "Balance of payments", body: "Current account: trade in goods/services. Capital account: investments. Overall balance shows whether country is net lender or borrower." },
        ],
        keyFormulas: [
          { name: "Exchange rate", statement: "currency value" },
          { name: "Appreciation", statement: "currency value↑" },
          { name: "Depreciation", statement: "currency value↓" },
        ],
        workedExample: {
          problem: "A country's currency depreciates. How does this affect exports and imports?",
          solution: "Exports become cheaper for foreign buyers → exports increase. Imports become more expensive → imports decrease.",
        },
        questions: [
          {
            id: "cieiec-u3-tr-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is international trade?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Exchange of goods/services between countries" }, { id: "b", text: "Domestic trade" }, { id: "c", text: "A type of tax" }, { id: "d", text: "A market structure" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "International trade", statement: "Cross-border exchange." }],
              steps: [{ reasoning: "Trade between countries.", marks: 1, markCode: "M" }],
              finalAnswer: "Cross-border exchange",
            },
          },
          {
            id: "cieiec-u3-tr-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is an exchange rate?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Exchange rate", statement: "Currency value." }],
              steps: [
                { reasoning: "Value of one currency in another.", marks: 1, markCode: "M" },
                { reasoning: "Determines import/export prices.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Currency value",
            },
          },
          {
            id: "cieiec-u3-tr-q3", difficulty: "core", totalMarks: 3,
            stem: "How does currency depreciation affect exports?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Depreciation", statement: "Export impact." }],
              steps: [
                { reasoning: "Exports become cheaper for foreign buyers.", marks: 1, markCode: "M" },
                { reasoning: "Exports increase.", marks: 1, markCode: "M" },
                { reasoning: "Imports become more expensive.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Cheaper exports → increase",
            },
          },
          {
            id: "cieiec-u3-tr-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define international trade, exchange rate, appreciation, depreciation, balance of payments, trade deficit. (b) What is international trade? (c) What is an exchange rate? (d) What is depreciation? (e) How does depreciation affect exports? (f) How does appreciation affect exports? (g) What is the balance of payments? (h) Evaluate benefits and risks of international trade.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "International trade", statement: "Trade, exchange rates." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Cross-border exchange.", marks: 1, markCode: "M" },
                { reasoning: "(c) Currency value.", marks: 1, markCode: "M" },
                { reasoning: "(d) Currency value decrease.", marks: 1, markCode: "M" },
                { reasoning: "(e) Cheaper exports → increase.", marks: 1, markCode: "M" },
                { reasoning: "(f) More expensive exports → decrease.", marks: 1, markCode: "M" },
                { reasoning: "(g) Record of international transactions.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "International trade and exchange rates.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieiec-u3-tr-notes", title: "International trade — notes",
      summary: "Trade based on comparative advantage. Exchange rates affect export/import competitiveness.",
      sections: [
        { heading: "Key idea", body: "Exchange rate changes have significant impact on trade balances." },
        { heading: "Balance of payments", body: "Records all international transactions — trade, investment, transfers." },
      ],
    },
  },
  {
    file: "lesson-3-2.ts", exportName: "lesson292",
    lesson: {
      id: "cieiec-u3-lesson-3-2", code: "3-2",
      title: "Protectionism and Free Trade",
      goal: "I CAN explain protectionist policies and evaluate free trade vs protectionism.",
      standards: ["Cambridge IGCSE Economics 0455", "Paper 6: trade policy"],
      vocabulary: [
        { term: "Protectionism", definition: "Government policies restricting free trade." },
        { term: "Tariff", definition: "Tax on imported goods." },
        { term: "Quota", definition: "Limit on quantity of imports." },
        { term: "Subsidy", definition: "Government support to domestic producers." },
        { term: "Free trade", definition: "Trade without government restrictions." },
        { term: "Trade bloc", definition: "Group of countries with trade agreements." },
      ],
      concept: {
        id: "cieiec-u3-s2-prot", title: "Protectionism",
        skill: "Understand trade policies and their effects.",
        sections: [
          { heading: "Protectionist measures", body: "Tariffs: tax on imports — raises price, protects domestic industry. Quotas: limit import quantity. Subsidies: support domestic producers. Non-tariff barriers: regulations, standards." },
          { heading: "Arguments for/against", body: "For: protect infant industries, save jobs, national security. Against: higher prices, reduced efficiency, trade wars, consumer harm." },
        ],
        keyFormulas: [
          { name: "Tariff", statement: "tax on imports" },
          { name: "Quota", statement: "import limit" },
          { name: "Free trade", statement: "no restrictions" },
        ],
        workedExample: {
          problem: "A country imposes a tariff on imported cars. What are the effects?",
          solution: "Domestic car prices rise, domestic producers benefit, consumers pay more, government gains tariff revenue.",
        },
        questions: [
          {
            id: "cieiec-u3-pt-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a tariff?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Tax on imported goods" }, { id: "b", text: "Import limit" }, { id: "c", text: "Government subsidy" }, { id: "d", text: "Trade agreement" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Tariff", statement: "Import tax." }],
              steps: [{ reasoning: "Tariff = tax on imported goods.", marks: 1, markCode: "M" }],
              finalAnswer: "Tax on imports",
            },
          },
          {
            id: "cieiec-u3-pt-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is protectionism?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Protectionism", statement: "Trade restrictions." }],
              steps: [
                { reasoning: "Government policies restricting free trade.", marks: 1, markCode: "M" },
                { reasoning: "Includes tariffs, quotas, subsidies.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Trade restrictions",
            },
          },
          {
            id: "cieiec-u3-pt-q3", difficulty: "core", totalMarks: 3,
            stem: "What is the difference between a tariff and a quota?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Trade policies", statement: "Tariff vs quota." }],
              steps: [
                { reasoning: "Tariff = tax on imports (price effect).", marks: 1, markCode: "M" },
                { reasoning: "Quota = quantity limit (quantity effect).", marks: 1, markCode: "M" },
                { reasoning: "Both protect domestic industry.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Price vs quantity restriction",
            },
          },
          {
            id: "cieiec-u3-pt-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define protectionism, tariff, quota, subsidy, free trade, trade bloc. (b) What is protectionism? (c) What is a tariff? (d) What is a quota? (e) What are arguments for protectionism? (f) What are arguments against protectionism? (g) What is free trade? (h) Evaluate whether countries should use protectionist policies.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Protectionism", statement: "Policies, evaluation." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Trade restrictions.", marks: 1, markCode: "M" },
                { reasoning: "(c) Import tax.", marks: 1, markCode: "M" },
                { reasoning: "(d) Import quantity limit.", marks: 1, markCode: "M" },
                { reasoning: "(e) Protect jobs, infant industries, security.", marks: 1, markCode: "M" },
                { reasoning: "(f) Higher prices, inefficiency, trade wars.", marks: 1, markCode: "M" },
                { reasoning: "(g) Trade without restrictions.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Protectionism and free trade.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieiec-u3-pt-notes", title: "Protectionism — notes",
      summary: "Tariffs=tax, quotas=limits, subsidies=support. Protectionism protects domestic but raises prices/reduces efficiency.",
      sections: [
        { heading: "Key idea", body: "Trade policy involves balancing protection vs free trade benefits." },
        { heading: "Trade blocs", body: "Groups like EU, USMCA reduce barriers between members." },
      ],
    },
  },
  {
    file: "lesson-3-3.ts", exportName: "lesson293",
    lesson: {
      id: "cieiec-u3-lesson-3-3", code: "3-3",
      title: "Development and Emerging Economies",
      goal: "I CAN explain development indicators and challenges facing developing economies.",
      standards: ["Cambridge IGCSE Economics 0455", "Paper 6: development"],
      vocabulary: [
        { term: "Developing economy", definition: "Economy with low income/industrialisation." },
        { term: "Developed economy", definition: "High income, industrialised economy." },
        { term: "GDP per capita", definition: "Economic output per person." },
        { term: "Human Development Index (HDI)", definition: "Measure of development beyond income." },
        { term: "Poverty", definition: "Lack of basic necessities." },
        { term: "Debt burden", definition: "Heavy foreign debt obligations." },
      ],
      concept: {
        id: "cieiec-u3-s3-dev", title: "Development",
        skill: "Understand development indicators and challenges.",
        sections: [
          { heading: "Development indicators", body: "GDP per capita: income measure. HDI: combines income, education, life expectancy. Other indicators: literacy rate, infant mortality, access to clean water, electricity." },
          { heading: "Challenges", body: "Poverty, debt burden, poor infrastructure, corruption, political instability, dependence on primary products, population growth." },
          { heading: "Development strategies", body: "Trade liberalisation, foreign investment, aid, education, infrastructure, microfinance." },
        ],
        keyFormulas: [
          { name: "GDP per capita", statement: "output per person" },
          { name: "HDI", statement: "income+education+health" },
        ],
        workedExample: {
          problem: "Country A has high GDP but low HDI. What does this mean?",
          solution: "High income but poor education/health — development is imbalanced. HDI reveals inequality that GDP hides.",
        },
        questions: [
          {
            id: "cieiec-u3-dv-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is GDP per capita?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Economic output per person" }, { id: "b", text: "Total GDP" }, { id: "c", text: "Population size" }, { id: "d", text: "A type of tax" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "GDP per capita", statement: "Output per person." }],
              steps: [{ reasoning: "GDP per capita = economic output per person.", marks: 1, markCode: "M" }],
              finalAnswer: "Output per person",
            },
          },
          {
            id: "cieiec-u3-dv-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the Human Development Index?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "HDI", statement: "Development measure." }],
              steps: [
                { reasoning: "Combines income, education, life expectancy.", marks: 1, markCode: "M" },
                { reasoning: "Broader than GDP alone.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Income+education+health",
            },
          },
          {
            id: "cieiec-u3-dv-q3", difficulty: "core", totalMarks: 3,
            stem: "What are challenges facing developing economies?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Development challenges", statement: "Obstacles to growth." }],
              steps: [
                { reasoning: "Poverty, debt burden, poor infrastructure.", marks: 1, markCode: "M" },
                { reasoning: "Corruption, political instability, dependence on primary products.", marks: 1, markCode: "M" },
                { reasoning: "Population growth pressures.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Poverty, debt, infrastructure, instability",
            },
          },
          {
            id: "cieiec-u3-dv-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define developing economy, developed economy, GDP per capita, HDI, poverty, debt burden. (b) What is GDP per capita? (c) What is HDI? (d) What is a developing economy? (e) What challenges do developing economies face? (f) How can countries develop? (g) Why is GDP alone insufficient? (h) Evaluate aid vs trade for development.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Development", statement: "Indicators, challenges." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Output per person.", marks: 1, markCode: "M" },
                { reasoning: "(c) Income+education+health.", marks: 1, markCode: "M" },
                { reasoning: "(d) Low income/industrialisation.", marks: 1, markCode: "M" },
                { reasoning: "(e) Three valid challenges.", marks: 1, markCode: "M" },
                { reasoning: "(f) Trade, investment, aid, education.", marks: 1, markCode: "M" },
                { reasoning: "(g) Ignores inequality, health, education.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Development indicators and challenges.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieiec-u3-dv-notes", title: "Development — notes",
      summary: "GDP per capita=income measure; HDI=broader development. Challenges: poverty, debt, infrastructure.",
      sections: [
        { heading: "Key idea", body: "Development requires more than income — education, health, opportunity." },
        { heading: "Strategies", body: "Trade, investment, aid, education, infrastructure development." },
      ],
    },
  },
];
