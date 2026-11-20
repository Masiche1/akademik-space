module.exports = [
  {
    file: "lesson-3-1.ts", exportName: "lesson531",
    lesson: {
      id: "ciealgeo-u3-lesson-3-1", code: "3-1",
      title: "Economic Geography: Agriculture and Food Systems",
      goal: "I CAN explain agricultural systems, food production and sustainability.",
      standards: ["Cambridge A Level Geography 9696", "Paper 2: economic"],
      vocabulary: [
        { term: "Subsistence agriculture", definition: "Farming for own consumption." },
        { term: "Commercial agriculture", definition: "Farming for profit." },
        { term: "Intensive agriculture", definition: "High inputs per hectare." },
        { term: "Extensive agriculture", definition: "Low inputs per hectare." },
        { term: "Green revolution", definition: "Technology boosting food production." },
        { term: "Food security", definition: "Reliable access to sufficient food." },
      ],
      concept: {
        id: "ciealgeo-u3-s1-agri", title: "Agriculture",
        skill: "Analyse agricultural systems.",
        sections: [
          { heading: "Agricultural systems", body: "Subsistence: family farms, low technology. Commercial: large-scale, mechanised. Intensive: high yield/hectare (rice paddies). Extensive: low yield/hectare (ranching)." },
          { heading: "Green revolution", body: "High-yield varieties, fertilisers, irrigation, pesticides. Increased production but environmental costs, dependency on inputs." },
          { heading: "Food security", body: "Availability, access, utilisation, stability. Challenges: climate change, population growth, inequality, waste." },
        ],
        keyFormulas: [
          { name: "Subsistence", statement: "own consumption" },
          { name: "Commercial", statement: "for profit" },
          { name: "Green revolution", statement: "tech boost" },
        ],
        workedExample: {
          problem: "How did the Green Revolution affect agriculture?",
          solution: "Increased yields dramatically but caused environmental degradation, soil depletion, pesticide resistance, dependency on chemical inputs.",
        },
        questions: [
          {
            id: "ciealgeo-u3-ag-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is subsistence agriculture?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Farming for own consumption" }, { id: "b", text: "Farming for profit" }, { id: "c", text: "Large-scale farming" }, { id: "d", text: "A type of industry" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Subsistence", statement: "Own consumption." }],
              steps: [{ reasoning: "Subsistence = farming for self.", marks: 1, markCode: "M" }],
              finalAnswer: "Own consumption",
            },
          },
          {
            id: "ciealgeo-u3-ag-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between intensive and extensive agriculture?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Intensive vs extensive", statement: "Input levels." }],
              steps: [
                { reasoning: "Intensive: high inputs/hectare.", marks: 1, markCode: "M" },
                { reasoning: "Extensive: low inputs/hectare.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "High vs low inputs",
            },
          },
          {
            id: "ciealgeo-u3-ag-q3", difficulty: "core", totalMarks: 3,
            stem: "What was the Green Revolution? What were its impacts?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Green Revolution", statement: "Tech boost." }],
              steps: [
                { reasoning: "High-yield varieties, fertilisers, irrigation.", marks: 1, markCode: "M" },
                { reasoning: "Increased production massively.", marks: 1, markCode: "M" },
                { reasoning: "Environmental costs, dependency.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Tech boost production",
            },
          },
          {
            id: "ciealgeo-u3-ag-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define subsistence, commercial, intensive, extensive, Green Revolution, food security. (b) What is subsistence? (c) What is intensive? (d) What was Green Revolution? (e) What is food security? (f) What are agricultural challenges? (g) What are sustainable practices? (h) Evaluate whether Green Revolution was beneficial.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Agriculture", statement: "Systems, sustainability." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Own consumption.", marks: 1, markCode: "M" },
                { reasoning: "(c) High inputs.", marks: 1, markCode: "M" },
                { reasoning: "(d) Tech boost.", marks: 1, markCode: "M" },
                { reasoning: "(e) Reliable food access.", marks: 1, markCode: "M" },
                { reasoning: "(f) Climate, population, inequality.", marks: 1, markCode: "M" },
                { reasoning: "(g) Organic, permaculture, conservation.", marks: 1, markCode: "M" },
                { reasoning: "(h) Production up but environmental costs.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Agricultural systems analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealgeo-u3-ag-notes", title: "Agriculture — notes",
      summary: "Subsistence vs commercial. Green Revolution boosted production but environmental costs.",
      sections: [
        { heading: "Key idea", body: "Modern agriculture balances productivity with sustainability." },
        { heading: "Food security", body: "Availability + access + utilisation + stability needed." },
      ],
    },
  },
  {
    file: "lesson-3-2.ts", exportName: "lesson532",
    lesson: {
      id: "ciealgeo-u3-lesson-3-2", code: "3-2",
      title: "Industrialisation and Economic Change",
      goal: "I CAN explain industrial location, deindustrialisation and economic restructuring.",
      standards: ["Cambridge A Level Geography 9696", "Paper 2: economic"],
      vocabulary: [
        { term: "Industrialisation", definition: "Shift from agriculture to manufacturing." },
        { term: "Deindustrialisation", definition: "Decline of manufacturing sector." },
        { term: "Footloose industry", definition: "Industry not tied to location." },
        { term: "Agglomeration", definition: "Clustering of industries." },
        { term: "Globalisation", definition: "Increasing economic interconnectedness." },
        { term: "Post-industrial economy", definition: "Service-dominated economy." },
      ],
      concept: {
        id: "ciealgeo-u3-s2-ind", title: "Industrialisation",
        skill: "Analyse industrial change.",
        sections: [
          { heading: "Industrial location", body: "Factors: raw materials, labour, transport, markets, agglomeration economies, government incentives. Footloose industries seek low costs." },
          { heading: "Deindustrialisation", body: "Manufacturing decline in developed countries — automation, competition from low-cost countries, service sector growth." },
          { heading: "Globalisation", body: "Production fragmented globally. Supply chains span countries. MNCs locate where costs lowest." },
        ],
        keyFormulas: [
          { name: "Industrialisation", statement: "agriculture→manufacturing" },
          { name: "Deindustrialisation", statement: "manufacturing decline" },
          { name: "Footloose", statement: "location flexible" },
        ],
        workedExample: {
          problem: "Why did manufacturing decline in UK/US?",
          solution: "Automation reduced labour needs, competition from Asia, service sector growth, globalisation shifted production.",
        },
        questions: [
          {
            id: "ciealgeo-u3-ind-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is deindustrialisation?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Decline of manufacturing sector" }, { id: "b", text: "Increase in manufacturing" }, { id: "c", text: "A type of trade" }, { id: "d", text: "Population growth" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Deindustrialisation", statement: "Manufacturing decline." }],
              steps: [{ reasoning: "Deindustrialisation = manufacturing decline.", marks: 1, markCode: "M" }],
              finalAnswer: "Manufacturing decline",
            },
          },
          {
            id: "ciealgeo-u3-ind-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a footloose industry?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Footloose", statement: "Location flexible." }],
              steps: [
                { reasoning: "Industry not tied to specific location.", marks: 1, markCode: "M" },
                { reasoning: "Seeks low costs, incentives.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Location flexible",
            },
          },
          {
            id: "ciealgeo-u3-ind-q3", difficulty: "core", totalMarks: 3,
            stem: "What factors influence industrial location?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Location", statement: "Factors." }],
              steps: [
                { reasoning: "Raw materials, labour, transport.", marks: 1, markCode: "M" },
                { reasoning: "Markets, agglomeration, incentives.", marks: 1, markCode: "M" },
                { reasoning: "Globalisation changes calculus.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Location factors",
            },
          },
          {
            id: "ciealgeo-u3-ind-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define industrialisation, deindustrialisation, footloose industry, agglomeration, globalisation, post-industrial. (b) What is industrialisation? (c) What is deindustrialisation? (d) What is footloose? (e) What factors influence location? (f) What causes deindustrialisation? (g) What is post-industrial economy? (h) Evaluate whether deindustrialisation is positive or negative.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Industrialisation", statement: "Change." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Agriculture→manufacturing.", marks: 1, markCode: "M" },
                { reasoning: "(c) Manufacturing decline.", marks: 1, markCode: "M" },
                { reasoning: "(d) Location flexible.", marks: 1, markCode: "M" },
                { reasoning: "(e) Materials, labour, transport, markets.", marks: 1, markCode: "M" },
                { reasoning: "(f) Automation, competition, globalisation.", marks: 1, markCode: "M" },
                { reasoning: "(g) Service-dominated.", marks: 1, markCode: "M" },
                { reasoning: "(h) Jobs lost but efficiency gained.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Industrial change analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealgeo-u3-ind-notes", title: "Industrialisation — notes",
      summary: "Deindustrialisation=manufacturing decline. Footloose industries seek low costs.",
      sections: [
        { heading: "Key idea", body: "Economic restructuring shifts from manufacturing to services." },
        { heading: "Globalisation", body: "Production fragmented — supply chains span countries." },
      ],
    },
  },
  {
    file: "lesson-3-3.ts", exportName: "lesson533",
    lesson: {
      id: "ciealgeo-u3-lesson-3-3", code: "3-3",
      title: "Tourism and Services",
      goal: "I CAN explain tourism impacts, sustainability and management.",
      standards: ["Cambridge A Level Geography 9696", "Paper 2: tourism"],
      vocabulary: [
        { term: "Mass tourism", definition: "Large-scale tourism development." },
        { term: "Eco-tourism", definition: "Responsible tourism to natural areas." },
        { term: "Tourism multiplier", definition: "Tourism spending → wider economic benefits." },
        { term: "Seasonality", definition: "Variation in tourism demand by season." },
        { term: "Carrying capacity", definition: "Max visitors environment can sustain." },
        { term: "Leakage", definition: "Tourism revenue lost to imports." },
      ],
      concept: {
        id: "ciealgeo-u3-s3-tour", title: "Tourism",
        skill: "Analyse tourism impacts.",
        sections: [
          { heading: "Tourism impacts", body: "Economic: jobs, revenue, multiplier effect. Social: cultural exchange, but can cause tension. Environmental: pollution, habitat loss, but can fund conservation." },
          { heading: "Sustainability", body: "Mass tourism vs eco-tourism. Carrying capacity limits. Seasonality challenges. Leakage reduces local benefits." },
        ],
        keyFormulas: [
          { name: "Mass tourism", statement: "large-scale" },
          { name: "Eco-tourism", statement: "responsible" },
          { name: "Carrying capacity", statement: "visitor limit" },
        ],
        workedExample: {
          problem: "Why is mass tourism problematic for some destinations?",
          solution: "Environmental degradation, cultural commodification, infrastructure strain, seasonal unemployment, leakage reduces benefits.",
        },
        questions: [
          {
            id: "ciealgeo-u3-tour-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is eco-tourism?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Responsible tourism to natural areas" }, { id: "b", text: "Mass tourism" }, { id: "c", text: "A type of hotel" }, { id: "d", text: "A travel agency" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Eco-tourism", statement: "Responsible tourism." }],
              steps: [{ reasoning: "Eco-tourism = responsible natural tourism.", marks: 1, markCode: "M" }],
              finalAnswer: "Responsible tourism",
            },
          },
          {
            id: "ciealgeo-u3-tour-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the tourism multiplier effect?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Multiplier", statement: "Economic benefit." }],
              steps: [
                { reasoning: "Tourism spending → wider economic benefits.", marks: 1, markCode: "M" },
                { reasoning: "Revenue circulates through local economy.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Economic benefit",
            },
          },
          {
            id: "ciealgeo-u3-tour-q3", difficulty: "core", totalMarks: 3,
            stem: "What are the environmental impacts of tourism?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Tourism impact", statement: "Environment." }],
              steps: [
                { reasoning: "Pollution, habitat loss, resource use.", marks: 1, markCode: "M" },
                { reasoning: "Can also fund conservation.", marks: 1, markCode: "M" },
                { reasoning: "Carrying capacity limits needed.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Pollution, habitat loss",
            },
          },
          {
            id: "ciealgeo-u3-tour-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define mass tourism, eco-tourism, multiplier, seasonality, carrying capacity, leakage. (b) What is eco-tourism? (c) What is multiplier? (d) What are tourism impacts? (e) What is seasonality? (f) What is leakage? (g) What is carrying capacity? (h) Evaluate whether tourism benefits or harms destinations.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Tourism", statement: "Impacts." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Responsible tourism.", marks: 1, markCode: "M" },
                { reasoning: "(c) Economic benefit.", marks: 1, markCode: "M" },
                { reasoning: "(d) Economic, social, environmental.", marks: 1, markCode: "M" },
                { reasoning: "(e) Seasonal demand.", marks: 1, markCode: "M" },
                { reasoning: "(f) Revenue lost to imports.", marks: 1, markCode: "M" },
                { reasoning: "(g) Visitor limit.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Tourism analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealgeo-u3-tour-notes", title: "Tourism — notes",
      summary: "Mass vs eco-tourism. Multiplier effect, seasonality, leakage challenges.",
      sections: [
        { heading: "Key idea", body: "Tourism can benefit or harm depending on management." },
        { heading: "Sustainability", body: "Carrying capacity, eco-tourism, local ownership key." },
      ],
    },
  },
  {
    file: "lesson-3-4.ts", exportName: "lesson534",
    lesson: {
      id: "ciealgeo-u3-lesson-3-4", code: "3-4",
      title: "Global Trade and Economic Integration",
      goal: "I CAN explain trade patterns, economic blocs and globalisation impacts.",
      standards: ["Cambridge A Level Geography 9696", "Paper 2: trade"],
      vocabulary: [
        { term: "Trade bloc", definition: "Group of countries with preferential trade." },
        { term: "FTA", definition: "Free trade agreement." },
        { term: "Customs union", definition: "FTA + common external tariff." },
        { term: "Single market", definition: "FTA + free movement of factors." },
        { term: "Globalisation", definition: "Increasing economic interconnectedness." },
        { term: "Offshoring", definition: "Moving production to lower-cost countries." },
      ],
      concept: {
        id: "ciealgeo-u3-s4-trade", title: "Global trade",
        skill: "Analyse trade patterns and integration.",
        sections: [
          { heading: "Trade blocs", body: "FTA: reduce tariffs. Customs union: + common external tariff. Single market: + free movement of goods/services/capital/labour. EU most advanced." },
          { heading: "Globalisation impacts", body: "Benefits: efficiency, growth, market access. Costs: job losses, inequality, environmental damage, loss of sovereignty." },
        ],
        keyFormulas: [
          { name: "FTA", statement: "tariff reduction" },
          { name: "Customs union", statement: "+common tariff" },
          { name: "Single market", statement: "+free movement" },
        ],
        workedExample: {
          problem: "How does EU single market benefit businesses?",
          solution: "Free movement of goods, services, capital, labour — no tariffs, wider market access, economies of scale.",
        },
        questions: [
          {
            id: "ciealgeo-u3-tr-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a free trade agreement?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Agreement to reduce/eliminate tariffs" }, { id: "b", text: "A type of tax" }, { id: "c", text: "A trade barrier" }, { id: "d", text: "A business structure" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "FTA", statement: "Tariff reduction." }],
              steps: [{ reasoning: "FTA = tariff reduction agreement.", marks: 1, markCode: "M" }],
              finalAnswer: "Tariff reduction",
            },
          },
          {
            id: "ciealgeo-u3-tr-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between FTA and single market?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "FTA vs single market", statement: "Integration levels." }],
              steps: [
                { reasoning: "FTA: reduce tariffs on goods.", marks: 1, markCode: "M" },
                { reasoning: "Single market: + free movement of services/capital/labour.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "FTA vs single market",
            },
          },
          {
            id: "ciealgeo-u3-tr-q3", difficulty: "core", totalMarks: 3,
            stem: "What are the impacts of globalisation?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Globalisation", statement: "Impacts." }],
              steps: [
                { reasoning: "Benefits: efficiency, growth, access.", marks: 1, markCode: "M" },
                { reasoning: "Costs: jobs, inequality, environment.", marks: 1, markCode: "M" },
                { reasoning: "Complex trade-offs.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Benefits vs costs",
            },
          },
          {
            id: "ciealgeo-u3-tr-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define trade bloc, FTA, customs union, single market, globalisation, offshoring. (b) What is FTA? (c) What is single market? (d) What are trade blocs? (e) What are globalisation impacts? (f) What is offshoring? (g) What are benefits of trade agreements? (h) Evaluate whether globalisation benefits or harms developing countries.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Global trade", statement: "Analysis." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Tariff reduction.", marks: 1, markCode: "M" },
                { reasoning: "(c) Free movement.", marks: 1, markCode: "M" },
                { reasoning: "(d) Trade groups.", marks: 1, markCode: "M" },
                { reasoning: "(e) Efficiency vs inequality.", marks: 1, markCode: "M" },
                { reasoning: "(f) Production abroad.", marks: 1, markCode: "M" },
                { reasoning: "(g) Market access, efficiency.", marks: 1, markCode: "M" },
                { reasoning: "(h) Winners/losers — not equal.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Global trade analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealgeo-u3-tr-notes", title: "Global trade — notes",
      summary: "FTA→customs union→single market increasing integration. Globalisation complex.",
      sections: [
        { heading: "Key idea", body: "Trade agreements reduce barriers but create winners/losers." },
        { heading: "Globalisation", body: "Integrates economies but inequality and environmental costs." },
      ],
    },
  },
];
