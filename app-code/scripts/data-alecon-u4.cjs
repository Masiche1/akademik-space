module.exports = [
  {
    file: "lesson-4-1.ts", exportName: "lesson441",
    lesson: {
      id: "ciealecon-u4-lesson-4-1", code: "4-1",
      title: "Economic Development and Measurement",
      goal: "I CAN explain development indicators and challenges.",
      standards: ["Cambridge A Level Economics 9708", "Paper 4: development"],
      vocabulary: [
        { term: "Development", definition: "Improvement in living standards and wellbeing." },
        { term: "GDP per capita", definition: "GDP divided by population." },
        { term: "HDI", definition: "Human Development Index — health, education, income." },
        { term: "Poverty", definition: "Lack of basic necessities." },
        { term: "Absolute poverty", definition: "Below minimum subsistence level." },
        { term: "Relative poverty", definition: "Below average income in society." },
      ],
      concept: {
        id: "ciealecon-u4-s1-dev", title: "Development measurement",
        skill: "Analyse development indicators.",
        sections: [
          { heading: "Development measures", body: "GDP per capita: income level. HDI: combines health (life expectancy), education (literacy), income. Other: poverty rates, infant mortality, access to services." },
          { heading: "Development challenges", body: "Low income, poor infrastructure, corruption, disease, conflict, inequality. Development is multidimensional — not just income." },
        ],
        keyFormulas: [
          { name: "HDI", statement: "health+education+income" },
          { name: "GDP per capita", statement: "income measure" },
          { name: "Poverty", statement: "below subsistence" },
        ],
        workedExample: {
          problem: "Country A: high GDP but low HDI. What does this indicate?",
          solution: "Income concentrated among few, poor health/education access. Development requires more than GDP growth.",
        },
        questions: [
          {
            id: "ciealecon-u4-dev-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is HDI?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Human Development Index — health, education, income" }, { id: "b", text: "GDP measure" }, { id: "c", text: "Poverty rate" }, { id: "d", text: "Population" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "HDI", statement: "Development measure." }],
              steps: [{ reasoning: "HDI = health+education+income.", marks: 1, markCode: "M" }],
              finalAnswer: "Health+education+income",
            },
          },
          {
            id: "ciealecon-u4-dev-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between absolute and relative poverty?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Poverty types", statement: "Absolute vs relative." }],
              steps: [
                { reasoning: "Absolute: below subsistence.", marks: 1, markCode: "M" },
                { reasoning: "Relative: below average.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Subsistence vs average",
            },
          },
          {
            id: "ciealecon-u4-dev-q3", difficulty: "core", totalMarks: 3,
            stem: "Why is GDP per capita insufficient for measuring development?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Development", statement: "Measurement limits." }],
              steps: [
                { reasoning: "Doesn't capture inequality/distribution.", marks: 1, markCode: "M" },
                { reasoning: "Ignores health, education, environment.", marks: 1, markCode: "M" },
                { reasoning: "Development is multidimensional.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Multidimensional development",
            },
          },
          {
            id: "ciealecon-u4-dev-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define development, GDP per capita, HDI, poverty, absolute poverty, relative poverty. (b) What is development? (c) What is HDI? (d) What is absolute poverty? (e) Why is GDP insufficient? (f) What are development challenges? (g) What is relative poverty? (h) Evaluate whether HDI is better than GDP for measuring development.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Development", statement: "Measurement." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Improved living standards.", marks: 1, markCode: "M" },
                { reasoning: "(c) Health+education+income.", marks: 1, markCode: "M" },
                { reasoning: "(d) Below subsistence.", marks: 1, markCode: "M" },
                { reasoning: "(e) Ignores inequality, wellbeing.", marks: 1, markCode: "M" },
                { reasoning: "(f) Low income, disease, conflict.", marks: 1, markCode: "M" },
                { reasoning: "(g) Below average.", marks: 1, markCode: "M" },
                { reasoning: "(h) More comprehensive but still limited.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Development measurement.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealecon-u4-dev-notes", title: "Development — notes",
      summary: "HDI=health+education+income. GDP insufficient — development multidimensional.",
      sections: [
        { heading: "Key idea", body: "Development requires more than income growth — health, education, equality." },
        { heading: "Challenges", body: "Poverty, disease, conflict, inequality, weak institutions." },
      ],
    },
  },
  {
    file: "lesson-4-2.ts", exportName: "lesson442",
    lesson: {
      id: "ciealecon-u4-lesson-4-2", code: "4-2",
      title: "Causes of Underdevelopment",
      goal: "I CAN explain causes of poverty and underdevelopment.",
      standards: ["Cambridge A Level Economics 9708", "Paper 4: causes"],
      vocabulary: [
        { term: "Vicious circle of poverty", definition: "Poverty → low savings → low investment → low productivity → poverty." },
        { term: "Malthusian trap", definition: "Population growth outpaces resources." },
        { term: "Colonialism", definition: "Historical exploitation by colonial powers." },
        { term: "Dependency theory", definition: "Developing countries dependent on developed." },
        { term: "Structural adjustment", definition: "IMF/World Bank reform conditions." },
        { term: "Debt trap", definition: "Unable to repay loans, interest compounds." },
      ],
      concept: {
        id: "ciealecon-u4-s2-cause", title: "Causes of underdevelopment",
        skill: "Analyse development barriers.",
        sections: [
          { heading: "Economic causes", body: "Low savings → low investment → low productivity → low income. Vicious circle. Limited capital, technology, infrastructure." },
          { heading: "Social causes", body: "Poor education, health, gender inequality, population growth. Human capital deficiency." },
          { heading: "Political/institutional", body: "Corruption, weak governance, conflict, colonial legacy. Dependency on primary products." },
        ],
        keyFormulas: [
          { name: "Vicious circle", statement: "poverty cycle" },
          { name: "Dependency", statement: "reliance on developed" },
          { name: "Debt trap", statement: "loan burden" },
        ],
        workedExample: {
          problem: "Why do poor countries stay poor?",
          solution: "Low income → low savings → low investment → low productivity → low income. Vicious circle persists.",
        },
        questions: [
          {
            id: "ciealecon-u4-cause-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is the vicious circle of poverty?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Poverty → low savings → low investment → low productivity → poverty" }, { id: "b", text: "A type of tax" }, { id: "c", text: "A trade barrier" }, { id: "d", text: "A business cycle" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Vicious circle", statement: "Poverty cycle." }],
              steps: [{ reasoning: "Poverty cycle: low income→low savings→low investment→low productivity.", marks: 1, markCode: "M" }],
              finalAnswer: "Poverty cycle",
            },
          },
          {
            id: "ciealecon-u4-cause-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is dependency theory?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Dependency", statement: "Developing reliance." }],
              steps: [
                { reasoning: "Developing countries dependent on developed.", marks: 1, markCode: "M" },
                { reasoning: "Unequal trade relationships.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Developing reliance",
            },
          },
          {
            id: "ciealecon-u4-cause-q3", difficulty: "core", totalMarks: 3,
            stem: "What are the main causes of underdevelopment?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Underdevelopment", statement: "Causes." }],
              steps: [
                { reasoning: "Economic: low savings, investment.", marks: 1, markCode: "M" },
                { reasoning: "Social: poor education/health.", marks: 1, markCode: "M" },
                { reasoning: "Political: corruption, conflict, colonial legacy.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Economic, social, political causes",
            },
          },
          {
            id: "ciealecon-u4-cause-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define vicious circle, Malthusian trap, colonialism, dependency theory, structural adjustment, debt trap. (b) What is vicious circle? (c) What is dependency theory? (d) What are economic causes? (e) What are social causes? (f) What are political causes? (g) What is debt trap? (h) Evaluate whether poverty is primarily economic or political.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Underdevelopment", statement: "Causes." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Poverty cycle.", marks: 1, markCode: "M" },
                { reasoning: "(c) Developing reliance.", marks: 1, markCode: "M" },
                { reasoning: "(d) Low savings, investment.", marks: 1, markCode: "M" },
                { reasoning: "(e) Education, health.", marks: 1, markCode: "M" },
                { reasoning: "(f) Corruption, conflict.", marks: 1, markCode: "M" },
                { reasoning: "(g) Loan burden.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Causes of underdevelopment.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealecon-u4-cause-notes", title: "Underdevelopment — notes",
      summary: "Vicious circle, dependency, colonialism, corruption → persistent poverty.",
      sections: [
        { heading: "Key idea", body: "Underdevelopment has economic, social, political dimensions." },
        { heading: "Cycle", body: "Low income→low investment→low productivity→low income." },
      ],
    },
  },
  {
    file: "lesson-4-3.ts", exportName: "lesson443",
    lesson: {
      id: "ciealecon-u4-lesson-4-3", code: "4-3",
      title: "Development Policies",
      goal: "I CAN explain development strategies and aid effectiveness.",
      standards: ["Cambridge A Level Economics 9708", "Paper 4: development policy"],
      vocabulary: [
        { term: "ODA", definition: "Official Development Assistance." },
        { term: "Remittances", definition: "Money sent by migrants to home country." },
        { term: "Microfinance", definition: "Small loans to poor entrepreneurs." },
        { term: "Fair trade", definition: "Trading ensuring fair prices for producers." },
        { term: "Capacity building", definition: "Developing skills/institutions." },
        { term: "Conditionality", definition: "IMF/World Bank loan conditions." },
      ],
      concept: {
        id: "ciealecon-u4-s3-pol", title: "Development policies",
        skill: "Evaluate development strategies.",
        sections: [
          { heading: "Aid types", body: "ODA: government aid. Private investment: FDI. Remittances: migrant money. Trade: market access. Each has benefits/limitations." },
          { heading: "Microfinance", body: "Small loans to poor — Yunus Nobel Prize. Empowers entrepreneurship but may not reach poorest or create sustainable businesses." },
          { heading: "Fair trade", body: "Ensures minimum prices, premiums for development. Limited reach but improves producer incomes." },
        ],
        keyFormulas: [
          { name: "ODA", statement: "official aid" },
          { name: "Remittances", statement: "migrant money" },
          { name: "Microfinance", statement: "small loans" },
        ],
        workedExample: {
          problem: "Does aid help development? Evaluate.",
          solution: "Can fund infrastructure/education but may create dependency, corruption, misallocation. Effectiveness depends on governance and design.",
        },
        questions: [
          {
            id: "ciealecon-u4-pol-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is microfinance?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Small loans to poor entrepreneurs" }, { id: "b", text: "Government aid" }, { id: "c", text: "Large infrastructure projects" }, { id: "d", text: "Trade agreements" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Microfinance", statement: "Small loans." }],
              steps: [{ reasoning: "Microfinance = small loans to poor.", marks: 1, markCode: "M" }],
              finalAnswer: "Small loans",
            },
          },
          {
            id: "ciealecon-u4-pol-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What are remittances?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Remittances", statement: "Migrant money." }],
              steps: [
                { reasoning: "Money sent by migrants to home country.", marks: 1, markCode: "M" },
                { reasoning: "Significant income source for many countries.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Migrant money",
            },
          },
          {
            id: "ciealecon-u4-pol-q3", difficulty: "core", totalMarks: 3,
            stem: "What are the benefits and limitations of aid?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Aid", statement: "Benefits vs limits." }],
              steps: [
                { reasoning: "Benefits: infrastructure, education, emergency relief.", marks: 1, markCode: "M" },
                { reasoning: "Limitations: dependency, corruption, misallocation.", marks: 1, markCode: "M" },
                { reasoning: "Effectiveness depends on governance.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Benefits vs limitations",
            },
          },
          {
            id: "ciealecon-u4-pol-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define ODA, remittances, microfinance, fair trade, capacity building, conditionality. (b) What is ODA? (c) What is microfinance? (d) What are remittances? (e) What are benefits of aid? (f) What are limitations? (g) What is fair trade? (h) Evaluate whether aid helps or hinders development.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Development policy", statement: "Evaluation." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Official aid.", marks: 1, markCode: "M" },
                { reasoning: "(c) Small loans.", marks: 1, markCode: "M" },
                { reasoning: "(d) Migrant money.", marks: 1, markCode: "M" },
                { reasoning: "(e) Infrastructure, education.", marks: 1, markCode: "M" },
                { reasoning: "(f) Dependency, corruption.", marks: 1, markCode: "M" },
                { reasoning: "(g) Fair producer prices.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Development policies.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealecon-u4-pol-notes", title: "Development policy — notes",
      summary: "ODA, remittances, microfinance, fair trade. Aid effectiveness depends on governance.",
      sections: [
        { heading: "Key idea", body: "Multiple approaches to development — effectiveness varies by context." },
        { heading: "Conditionality", body: "IMF/World Bank loans require reforms — controversial." },
      ],
    },
  },
  {
    file: "lesson-4-4.ts", exportName: "lesson444",
    lesson: {
      id: "ciealecon-u4-lesson-4-4", code: "4-4",
      title: "Sustainable Development",
      goal: "I CAN explain sustainable development and environmental challenges.",
      standards: ["Cambridge A Level Economics 9708", "Paper 4: sustainability"],
      vocabulary: [
        { term: "Sustainable development", definition: "Meeting present needs without compromising future." },
        { term: "Tragedy of the commons", definition: "Overuse of shared resources." },
        { term: "Externality", definition: "Cost/benefit affecting third parties." },
        { term: "Carbon footprint", definition: "Total greenhouse gas emissions." },
        { term: "Renewable resources", definition: "Resources that regenerate." },
        { term: "Non-renewable resources", definition: "Finite resources (fossil fuels)." },
      ],
      concept: {
        id: "ciealecon-u4-s4-sus", title: "Sustainable development",
        skill: "Analyse environmental economics.",
        sections: [
          { heading: "Environmental problems", body: "Climate change, deforestation, pollution, resource depletion. Often externalities — costs not borne by producers." },
          { heading: "Tragedy of commons", body: "Shared resources overused because individual benefits exceed individual costs. Fisheries, forests, atmosphere." },
          { heading: "Solutions", body: "Carbon taxes, emissions trading, subsidies for renewables, regulation, international agreements (Paris)." },
        ],
        keyFormulas: [
          { name: "Sustainable", statement: "future preserved" },
          { name: "Tragedy of commons", statement: "overuse" },
          { name: "Carbon tax", statement: "emissions price" },
        ],
        workedExample: {
          problem: "Why is climate change a market failure?",
          solution: "Negative externality — greenhouse gas emissions harm third parties. Producers don't bear full social cost → overproduction of polluting goods.",
        },
        questions: [
          {
            id: "ciealecon-u4-sus-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is sustainable development?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Meeting present needs without compromising future" }, { id: "b", text: "Maximum growth" }, { id: "c", text: "A type of tax" }, { id: "d", text: "A trade agreement" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Sustainable", statement: "Future preserved." }],
              steps: [{ reasoning: "Sustainable = present needs without future compromise.", marks: 1, markCode: "M" }],
              finalAnswer: "Future preserved",
            },
          },
          {
            id: "ciealecon-u4-sus-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the tragedy of the commons?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Tragedy", statement: "Overuse." }],
              steps: [
                { reasoning: "Overuse of shared resources.", marks: 1, markCode: "M" },
                { reasoning: "Individual benefits exceed individual costs.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Shared resource overuse",
            },
          },
          {
            id: "ciealecon-u4-sus-q3", difficulty: "core", totalMarks: 3,
            stem: "Why is climate change a market failure?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Climate", statement: "Externality." }],
              steps: [
                { reasoning: "Negative externality — emissions harm third parties.", marks: 1, markCode: "M" },
                { reasoning: "Producers don't bear full social cost.", marks: 1, markCode: "M" },
                { reasoning: "Overproduction of polluting goods.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Negative externality",
            },
          },
          {
            id: "ciealecon-u4-sus-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define sustainable development, tragedy of commons, externality, carbon footprint, renewable, non-renewable. (b) What is sustainable development? (c) What is tragedy of commons? (d) Why is climate change market failure? (e) What are environmental problems? (f) What are solutions? (g) What is carbon tax? (h) Evaluate whether economic growth and environmental protection can coexist.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Sustainability", statement: "Environment." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Future preserved.", marks: 1, markCode: "M" },
                { reasoning: "(c) Overuse shared resources.", marks: 1, markCode: "M" },
                { reasoning: "(d) Negative externality.", marks: 1, markCode: "M" },
                { reasoning: "(e) Climate, deforestation, pollution.", marks: 1, markCode: "M" },
                { reasoning: "(f) Carbon tax, renewables, regulation.", marks: 1, markCode: "M" },
                { reasoning: "(g) Emissions price.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Sustainable development.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealecon-u4-sus-notes", title: "Sustainability — notes",
      summary: "Tragedy of commons→resource depletion. Carbon tax/renewables address externalities.",
      sections: [
        { heading: "Key idea", body: "Environmental problems are market failures requiring intervention." },
        { heading: "Solutions", body: "Carbon pricing, renewable subsidies, international agreements." },
      ],
    },
  },
];
