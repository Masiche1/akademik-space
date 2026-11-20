module.exports = [
  {
    file: "lesson-2-1.ts", exportName: "lesson521",
    lesson: {
      id: "ciealgeo-u2-lesson-2-1", code: "2-1",
      title: "Development and Inequality",
      goal: "I CAN explain development indicators, inequality and development theories.",
      standards: ["Cambridge A Level Geography 9696", "Paper 2: human"],
      vocabulary: [
        { term: "Development", definition: "Improvement in living standards and wellbeing." },
        { term: "HDI", definition: "Human Development Index." },
        { term: "Gini coefficient", definition: "Measure of income inequality." },
        { term: "Core-periphery model", definition: "Developed core exploits developing periphery." },
        { term: "Dependency theory", definition: "Developing countries dependent on developed." },
        { term: "Modernisation theory", definition: "Development through economic growth." },
      ],
      concept: {
        id: "ciealgeo-u2-s1-dev", title: "Development",
        skill: "Analyse development and inequality.",
        sections: [
          { heading: "Development measures", body: "GDP per capita, HDI, poverty rates, infant mortality, access to services. Development is multidimensional." },
          { heading: "Inequality", body: "Gini coefficient measures income distribution. Spatial inequality: urban vs rural, core vs periphery. Within-country inequality increasing." },
          { heading: "Development theories", body: "Modernisation: linear progression through stages. Dependency: underdevelopment caused by exploitation. World systems: core, semi-periphery, periphery." },
        ],
        keyFormulas: [
          { name: "HDI", statement: "health+education+income" },
          { name: "Gini", statement: "inequality measure" },
          { name: "Core-periphery", statement: "exploitation model" },
        ],
        workedExample: {
          problem: "Why do some countries remain poor despite resources?",
          solution: "Dependency theory: colonial exploitation, unequal trade, debt burden → structural underdevelopment.",
        },
        questions: [
          {
            id: "ciealgeo-u2-dev-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is HDI?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Human Development Index" }, { id: "b", text: "GDP measure" }, { id: "c", text: "Population" }, { id: "d", text: "Inequality measure" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "HDI", statement: "Development measure." }],
              steps: [{ reasoning: "HDI = health+education+income.", marks: 1, markCode: "M" }],
              finalAnswer: "Development measure",
            },
          },
          {
            id: "ciealgeo-u2-dev-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the Gini coefficient?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Gini", statement: "Inequality measure." }],
              steps: [
                { reasoning: "Measures income inequality.", marks: 1, markCode: "M" },
                { reasoning: "0 = perfect equality, 1 = perfect inequality.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Inequality measure",
            },
          },
          {
            id: "ciealgeo-u2-dev-q3", difficulty: "core", totalMarks: 3,
            stem: "What is dependency theory?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Dependency", statement: "Underdevelopment cause." }],
              steps: [
                { reasoning: "Developing countries dependent on developed.", marks: 1, markCode: "M" },
                { reasoning: "Unequal trade, debt, exploitation.", marks: 1, markCode: "M" },
                { reasoning: "Structural underdevelopment.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Dependency model",
            },
          },
          {
            id: "ciealgeo-u2-dev-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define development, HDI, Gini coefficient, core-periphery, dependency theory, modernisation. (b) What is HDI? (c) What is Gini? (d) What is dependency theory? (e) What is core-periphery? (f) What are development indicators? (g) What causes inequality? (h) Evaluate whether development theories explain global inequality.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Development", statement: "Inequality, theories." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Health+education+income.", marks: 1, markCode: "M" },
                { reasoning: "(c) Inequality measure.", marks: 1, markCode: "M" },
                { reasoning: "(d) Developing reliance.", marks: 1, markCode: "M" },
                { reasoning: "(e) Exploitation model.", marks: 1, markCode: "M" },
                { reasoning: "(f) GDP, HDI, poverty, health.", marks: 1, markCode: "M" },
                { reasoning: "(g) Colonialism, trade, institutions.", marks: 1, markCode: "M" },
                { reasoning: "(h) Theories partial — multiple factors.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Development and inequality.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealgeo-u2-dev-notes", title: "Development — notes",
      summary: "HDI, Gini measure development/inequality. Dependency theory explains underdevelopment.",
      sections: [
        { heading: "Key idea", body: "Development is multidimensional — not just income." },
        { heading: "Inequality", body: "Spatial and income inequality persist despite global growth." },
      ],
    },
  },
  {
    file: "lesson-2-2.ts", exportName: "lesson522",
    lesson: {
      id: "ciealgeo-u2-lesson-2-2", code: "2-2",
      title: "Population and Migration",
      goal: "I CAN explain population dynamics, migration patterns and impacts.",
      standards: ["Cambridge A Level Geography 9696", "Paper 2: human"],
      vocabulary: [
        { term: "Demographic transition model", definition: "Stages of population change." },
        { term: "Push factors", definition: "Reasons for leaving place of origin." },
        { term: "Pull factors", definition: "Reasons for moving to destination." },
        { term: "Refugee", definition: "Person fleeing persecution/war." },
        { term: "Economic migrant", definition: "Person moving for better opportunities." },
        { term: "Remittances", definition: "Money sent by migrants to home." },
      ],
      concept: {
        id: "ciealgeo-u2-s2-pop", title: "Population and migration",
        skill: "Analyse population dynamics and migration.",
        sections: [
          { heading: "Demographic transition", body: "Stage 1: high birth/death. Stage 2: death rate falls. Stage 3: birth rate falls. Stage 4: low birth/death. Stage 5: declining population." },
          { heading: "Migration types", body: "Internal vs international. Forced vs voluntary. Economic vs political refugees. Brain drain vs brain gain." },
          { heading: "Impacts", body: "Origin: loss of workers, brain drain, remittances. Destination: labour supply, cultural diversity, pressure on services. Remittances significant income source." },
        ],
        keyFormulas: [
          { name: "DTM", statement: "population stages" },
          { name: "Push/pull", statement: "migration factors" },
          { name: "Remittances", statement: "migrant money" },
        ],
        workedExample: {
          problem: "Why do workers migrate from rural to urban areas?",
          solution: "Push: rural poverty, few jobs. Pull: urban jobs, better services, higher wages.",
        },
        questions: [
          {
            id: "ciealgeo-u2-pop-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is the demographic transition model?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Stages of population change" }, { id: "b", text: "A type of migration" }, { id: "c", text: "A climate model" }, { id: "d", text: "A development index" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "DTM", statement: "Population stages." }],
              steps: [{ reasoning: "DTM = population change stages.", marks: 1, markCode: "M" }],
              finalAnswer: "Population stages",
            },
          },
          {
            id: "ciealgeo-u2-pop-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What are push and pull factors?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Push/pull", statement: "Migration factors." }],
              steps: [
                { reasoning: "Push: reasons for leaving.", marks: 1, markCode: "M" },
                { reasoning: "Pull: reasons for moving to.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Leaving vs moving to",
            },
          },
          {
            id: "ciealgeo-u2-pop-q3", difficulty: "core", totalMarks: 3,
            stem: "What is the difference between a refugee and an economic migrant?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Refugee vs migrant", statement: "Migration types." }],
              steps: [
                { reasoning: "Refugee: fleeing persecution/war.", marks: 1, markCode: "M" },
                { reasoning: "Economic migrant: seeking better opportunities.", marks: 1, markCode: "M" },
                { reasoning: "Different legal status/protection.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Forced vs voluntary",
            },
          },
          {
            id: "ciealgeo-u2-pop-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define DTM, push factors, pull factors, refugee, economic migrant, remittances. (b) What is DTM? (c) What are push/pull factors? (d) What is a refugee? (e) What is economic migrant? (f) What are migration impacts on origin? (g) What are impacts on destination? (h) Evaluate whether migration benefits or harms sending countries.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Population/migration", statement: "Analysis." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Population stages.", marks: 1, markCode: "M" },
                { reasoning: "(c) Leaving vs moving to.", marks: 1, markCode: "M" },
                { reasoning: "(d) Fleeing persecution.", marks: 1, markCode: "M" },
                { reasoning: "(e) Seeking opportunities.", marks: 1, markCode: "M" },
                { reasoning: "(f) Brain drain, remittances.", marks: 1, markCode: "M" },
                { reasoning: "(g) Labour, diversity, pressure.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Population and migration.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealgeo-u2-pop-notes", title: "Population/migration — notes",
      summary: "DTM stages population change. Push/pull factors drive migration. Remittances significant.",
      sections: [
        { heading: "Key idea", body: "Migration driven by economic, social, political factors." },
        { heading: "Impacts", body: "Origin loses workers but gains remittances; destination gains labour but faces pressures." },
      ],
    },
  },
  {
    file: "lesson-2-3.ts", exportName: "lesson523",
    lesson: {
      id: "ciealgeo-u2-lesson-2-3", code: "2-3",
      title: "Urbanisation and Urban Issues",
      goal: "I CAN explain urbanisation patterns, challenges and management.",
      standards: ["Cambridge A Level Geography 9696", "Paper 2: urban"],
      vocabulary: [
        { term: "Urbanisation", definition: "Increasing proportion living in urban areas." },
        { term: "Megacity", definition: "City with 10+ million population." },
        { term: "Urban sprawl", definition: "Uncontrolled outward expansion." },
        { term: "Informal settlement", definition: "Unplanned housing (slums)." },
        { term: "Gentrification", definition: "Wealthy people moving into poor areas." },
        { term: "Urban primacy", definition: "One city dominates country." },
      ],
      concept: {
        id: "ciealgeo-u2-s3-urb", title: "Urbanisation",
        skill: "Analyse urban issues.",
        sections: [
          { heading: "Urbanisation patterns", body: "Developed countries: slow growth, suburbanisation, counterurbanisation. Developing: rapid growth, megacities, informal settlements." },
          { heading: "Urban challenges", body: "Housing shortage, informal settlements, traffic congestion, pollution, crime, inequality, infrastructure strain." },
          { heading: "Management", body: "Planning, public transport, affordable housing, slum upgrading, green belts. Success varies." },
        ],
        keyFormulas: [
          { name: "Urbanisation", statement: "urban population growth" },
          { name: "Megacity", statement: "10M+ population" },
          { name: "Informal settlement", statement: "slums" },
        ],
        workedExample: {
          problem: "Why do megacities face housing challenges?",
          solution: "Rapid population growth outpaces housing supply → informal settlements, slums, overcrowding.",
        },
        questions: [
          {
            id: "ciealgeo-u2-urb-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is urbanisation?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Increasing proportion living in urban areas" }, { id: "b", text: "City building" }, { id: "c", text: "Rural decline" }, { id: "d", text: "A type of migration" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Urbanisation", statement: "Urban growth." }],
              steps: [{ reasoning: "Urbanisation = urban population increase.", marks: 1, markCode: "M" }],
              finalAnswer: "Urban population growth",
            },
          },
          {
            id: "ciealgeo-u2-urb-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a megacity? Give an example.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Megacity", statement: "10M+ city." }],
              steps: [
                { reasoning: "City with 10+ million population.", marks: 1, markCode: "M" },
                { reasoning: "Examples: Tokyo, Delhi, Shanghai.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "10M+ city example",
            },
          },
          {
            id: "ciealgeo-u2-urb-q3", difficulty: "core", totalMarks: 3,
            stem: "What are the main urban challenges in developing countries?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Urban challenges", statement: "Problems." }],
              steps: [
                { reasoning: "Informal settlements, housing shortage.", marks: 1, markCode: "M" },
                { reasoning: "Traffic, pollution, crime, inequality.", marks: 1, markCode: "M" },
                { reasoning: "Infrastructure strain.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Housing, traffic, inequality",
            },
          },
          {
            id: "ciealgeo-u2-urb-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define urbanisation, megacity, urban sprawl, informal settlement, gentrification, urban primacy. (b) What is urbanisation? (c) What is megacity? (d) What are urban challenges? (e) What is informal settlement? (f) What is gentrification? (g) What is urban primacy? (h) Evaluate urban management strategies.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Urban", statement: "Challenges, management." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Urban population growth.", marks: 1, markCode: "M" },
                { reasoning: "(c) 10M+ city.", marks: 1, markCode: "M" },
                { reasoning: "(d) Housing, traffic, inequality.", marks: 1, markCode: "M" },
                { reasoning: "(e) Slums.", marks: 1, markCode: "M" },
                { reasoning: "(f) Wealthy move in.", marks: 1, markCode: "M" },
                { reasoning: "(g) One city dominates.", marks: 1, markCode: "M" },
                { reasoning: "(h) Planning, transport, housing mixed success.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Urbanisation analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealgeo-u2-urb-notes", title: "Urbanisation — notes",
      summary: "Rapid urban growth → megacities, informal settlements, infrastructure strain.",
      sections: [
        { heading: "Key idea", body: "Urbanisation creates opportunities and challenges." },
        { heading: "Management", body: "Planning, transport, affordable housing key to sustainable cities." },
      ],
    },
  },
  {
    file: "lesson-2-4.ts", exportName: "lesson524",
    lesson: {
      id: "ciealgeo-u2-lesson-2-4", code: "2-4",
      title: "Resource Issues and Sustainability",
      goal: "I CAN explain resource scarcity, sustainability and management.",
      standards: ["Cambridge A Level Geography 9696", "Paper 2: resources"],
      vocabulary: [
        { term: "Renewable resources", definition: "Resources that regenerate." },
        { term: "Non-renewable resources", definition: "Finite resources." },
        { term: "Carrying capacity", definition: "Max population environment supports." },
        { term: "Sustainability", definition: "Meeting needs without compromising future." },
        { term: "Tragedy of commons", definition: "Overuse of shared resources." },
        { term: "Resource curse", definition: "Resource wealth harming development." },
      ],
      concept: {
        id: "ciealgeo-u2-s4-res", title: "Resources",
        skill: "Analyse resource issues.",
        sections: [
          { heading: "Resource types", body: "Renewable: solar, wind, water, forests (if managed). Non-renewable: fossil fuels, minerals. Some resources renewable but overexploited → effectively non-renewable." },
          { heading: "Resource challenges", body: "Scarcity, degradation, pollution, conflict over resources. Water stress, soil erosion, deforestation." },
          { heading: "Management", body: "Sustainable use, efficiency, substitution, recycling, protected areas. Resource curse: abundance can harm governance/development." },
        ],
        keyFormulas: [
          { name: "Renewable", statement: "regenerate" },
          { name: "Non-renewable", statement: "finite" },
          { name: "Tragedy", statement: "overuse" },
        ],
        workedExample: {
          problem: "Why do some resource-rich countries remain poor?",
          solution: "Resource curse: Dutch disease (currency appreciation), corruption, conflict, lack of diversification.",
        },
        questions: [
          {
            id: "ciealgeo-u2-res-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is the difference between renewable and non-renewable resources?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Renewable regenerates, non-renewable is finite" }, { id: "b", text: "Same thing" }, { id: "c", text: "Renewable is cheaper" }, { id: "d", text: "Non-renewable is cleaner" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Resources", statement: "Types." }],
              steps: [{ reasoning: "Renewable regenerates, non-renewable finite.", marks: 1, markCode: "M" }],
              finalAnswer: "Regenerate vs finite",
            },
          },
          {
            id: "ciealgeo-u2-res-q2", difficulty: "foundation", totalMarks: 2,
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
            id: "ciealgeo-u2-res-q3", difficulty: "core", totalMarks: 3,
            stem: "What is the resource curse?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Resource curse", statement: "Wealth harm." }],
              steps: [
                { reasoning: "Resource abundance harms development.", marks: 1, markCode: "M" },
                { reasoning: "Dutch disease, corruption, conflict.", marks: 1, markCode: "M" },
                { reasoning: "Lack of diversification.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Resource wealth harm",
            },
          },
          {
            id: "ciealgeo-u2-res-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define renewable, non-renewable, carrying capacity, sustainability, tragedy of commons, resource curse. (b) What is renewable? (c) What is non-renewable? (d) What is tragedy of commons? (e) What is resource curse? (f) What are resource challenges? (g) What are management strategies? (h) Evaluate whether resource scarcity is a major development barrier.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Resources", statement: "Sustainability." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Regenerate.", marks: 1, markCode: "M" },
                { reasoning: "(c) Finite.", marks: 1, markCode: "M" },
                { reasoning: "(d) Overuse shared.", marks: 1, markCode: "M" },
                { reasoning: "(e) Wealth harm.", marks: 1, markCode: "M" },
                { reasoning: "(f) Scarcity, degradation, conflict.", marks: 1, markCode: "M" },
                { reasoning: "(g) Efficiency, substitution, recycling.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Resource issues analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealgeo-u2-res-notes", title: "Resources — notes",
      summary: "Renewable vs non-renewable. Tragedy of commons. Resource curse paradox.",
      sections: [
        { heading: "Key idea", body: "Resource management crucial for sustainable development." },
        { heading: "Resource curse", body: "Abundance can harm development through corruption/dependency." },
      ],
    },
  },
];
