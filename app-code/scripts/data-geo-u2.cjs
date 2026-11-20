module.exports = [
  {
    file: "lesson-2-1.ts", exportName: "lesson311",
    lesson: {
      id: "cieigeo-u2-lesson-2-1", code: "2-1",
      title: "Population: Distribution and Change",
      goal: "I CAN describe population distribution, density and change over time.",
      standards: ["Cambridge IGCSE Geography 0460", "Paper 2: human geography"],
      vocabulary: [
        { term: "Population distribution", definition: "Pattern of where people live." },
        { term: "Population density", definition: "Number of people per unit area." },
        { term: "Birth rate", definition: "Live births per 1000 population per year." },
        { term: "Death rate", definition: "Deaths per 1000 population per year." },
        { term: "Natural increase", definition: "Birth rate minus death rate." },
        { term: "Migration", definition: "Movement of people between areas." },
      ],
      concept: {
        id: "cieigeo-u2-s1-pop", title: "Population",
        skill: "Understand population patterns and change.",
        sections: [
          { heading: "Population distribution", body: "Uneven — concentrated in urban areas, fertile land, coastal regions. Sparse in deserts, mountains, cold climates. Density = population/area." },
          { heading: "Population change", body: "Birth rate, death rate, migration determine change. Natural increase = births - deaths. Developed countries: low birth/death rates, aging population. Developing: high birth rates, young population." },
        ],
        keyFormulas: [
          { name: "Density", statement: "population ÷ area" },
          { name: "Natural increase", statement: "birth rate - death rate" },
          { name: "Population change", statement: "natural increase + migration" },
        ],
        workedExample: {
          problem: "Country A: birth rate 15, death rate 10, migration +50,000. Calculate natural increase and population change.",
          solution: "Natural increase = 15-10 = 5 per 1000. Population change = natural increase + migration.",
        },
        questions: [
          {
            id: "cieigeo-u2-pd-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is population density?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Number of people per unit area" }, { id: "b", text: "Total population" }, { id: "c", text: "Population growth rate" }, { id: "d", text: "A type of migration" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Density", statement: "People per area." }],
              steps: [{ reasoning: "Density = population ÷ area.", marks: 1, markCode: "M" }],
              finalAnswer: "People per unit area",
            },
          },
          {
            id: "cieigeo-u2-pd-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is natural increase?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Natural increase", statement: "Births - deaths." }],
              steps: [
                { reasoning: "Birth rate minus death rate.", marks: 1, markCode: "M" },
                { reasoning: "Excludes migration.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Births minus deaths",
            },
          },
          {
            id: "cieigeo-u2-pd-q3", difficulty: "core", totalMarks: 3,
            stem: "Why is population distribution uneven?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Population distribution", statement: "Factors affecting distribution." }],
              steps: [
                { reasoning: "People cluster where resources/opportunities exist.", marks: 1, markCode: "M" },
                { reasoning: "Avoid harsh environments (deserts, mountains).", marks: 1, markCode: "M" },
                { reasoning: "Urban areas offer jobs/services.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Resources, climate, opportunities",
            },
          },
          {
            id: "cieigeo-u2-pd-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define population distribution, population density, birth rate, death rate, natural increase, migration. (b) What is population density? (c) What is natural increase? (d) Why is population distribution uneven? (e) What factors affect population change? (f) How does migration affect population? (g) Compare population patterns in developed vs developing countries. (h) Explain how population change affects development.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Population", statement: "Distribution, change." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) People per unit area.", marks: 1, markCode: "M" },
                { reasoning: "(c) Births minus deaths.", marks: 1, markCode: "M" },
                { reasoning: "(d) Resources, climate, opportunities.", marks: 1, markCode: "M" },
                { reasoning: "(e) Births, deaths, migration.", marks: 1, markCode: "M" },
                { reasoning: "(f) Increases/decreases population.", marks: 1, markCode: "M" },
                { reasoning: "(g) Developed: aging, low growth; developing: young, high growth.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid development impact explanation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Population distribution and change.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieigeo-u2-pd-notes", title: "Population — notes",
      summary: "Density=pop/area. Natural increase=births-deaths. Distribution uneven — urban concentration.",
      sections: [
        { heading: "Key idea", body: "Population patterns reflect economic opportunities and environmental constraints." },
        { heading: "Change", body: "Births, deaths, migration determine population dynamics." },
      ],
    },
  },
  {
    file: "lesson-2-2.ts", exportName: "lesson312",
    lesson: {
      id: "cieigeo-u2-lesson-2-2", code: "2-2",
      title: "Settlement and Urbanisation",
      goal: "I CAN describe settlement patterns and the urbanisation process.",
      standards: ["Cambridge IGCSE Geography 0460", "Paper 2: settlement"],
      vocabulary: [
        { term: "Settlement", definition: "Place where people live — village, town, city." },
        { term: "Urbanisation", definition: "Increasing proportion of population in urban areas." },
        { term: "Rural area", definition: "Countryside — low population density." },
        { term: "Urban area", definition: "Town/city — high population density." },
        { term: "Counter-urbanisation", definition: "Movement from urban to rural areas." },
        { term: "Settlement hierarchy", definition: "Ranking of settlements by size/function." },
      ],
      concept: {
        id: "cieigeo-u2-s2-set", title: "Settlement and urbanisation",
        skill: "Understand settlement patterns and urban growth.",
        sections: [
          { heading: "Settlement patterns", body: "Nucleated (clustered), dispersed (spread out), linear (along route). Influenced by water, transport, defence, resources." },
          { heading: "Urbanisation", body: "Rural→urban migration driven by jobs, services, education. Most rapid in developing countries. Creates megacities (>10 million). Challenges: housing, pollution, infrastructure." },
          { heading: "Counter-urbanisation", body: "Movement back to rural areas — retirement, cheaper housing, telecommuting, quality of life." },
        ],
        keyFormulas: [
          { name: "Urbanisation", statement: "rural→urban shift" },
          { name: "Counter-urbanisation", statement: "urban→rural" },
          { name: "Megacity", statement: ">10 million people" },
        ],
        workedExample: {
          problem: "Why are most megacities in developing countries?",
          solution: "Rapid industrialisation + rural poverty → massive rural-urban migration without adequate planning.",
        },
        questions: [
          {
            id: "cieigeo-u2-st-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is urbanisation?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Increasing proportion of population in urban areas" }, { id: "b", text: "Movement to countryside" }, { id: "c", text: "A type of migration" }, { id: "d", text: "A weather pattern" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Urbanisation", statement: "Rural→urban shift." }],
              steps: [{ reasoning: "Urbanisation = increasing urban population share.", marks: 1, markCode: "M" }],
              finalAnswer: "Increasing urban population",
            },
          },
          {
            id: "cieigeo-u2-st-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is counter-urbanisation?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Counter-urbanisation", statement: "Urban→rural movement." }],
              steps: [
                { reasoning: "Movement from urban to rural areas.", marks: 1, markCode: "M" },
                { reasoning: "Driven by retirement, housing costs, lifestyle.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Urban→rural movement",
            },
          },
          {
            id: "cieigeo-u2-st-q3", difficulty: "core", totalMarks: 3,
            stem: "What drives urbanisation?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Urbanisation drivers", statement: "Push/pull factors." }],
              steps: [
                { reasoning: "Pull: jobs, services, education in cities.", marks: 1, markCode: "M" },
                { reasoning: "Push: rural poverty, lack of opportunities.", marks: 1, markCode: "M" },
                { reasoning: "Both factors interact.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Jobs/services pull, rural poverty push",
            },
          },
          {
            id: "cieigeo-u2-st-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define settlement, urbanisation, rural area, urban area, counter-urbanisation, settlement hierarchy. (b) What is urbanisation? (c) What is counter-urbanisation? (d) What drives urbanisation? (e) What challenges do cities face? (f) What is a megacity? (g) What is a settlement hierarchy? (h) Evaluate whether urbanisation is beneficial or problematic.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Settlement", statement: "Urbanisation, patterns." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Increasing urban population.", marks: 1, markCode: "M" },
                { reasoning: "(c) Urban→rural movement.", marks: 1, markCode: "M" },
                { reasoning: "(d) Jobs, services, rural poverty.", marks: 1, markCode: "M" },
                { reasoning: "(e) Housing, pollution, infrastructure.", marks: 1, markCode: "M" },
                { reasoning: "(f) >10 million people.", marks: 1, markCode: "M" },
                { reasoning: "(g) Settlement ranking by size/function.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Settlement and urbanisation.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieigeo-u2-st-notes", title: "Settlement — notes",
      summary: "Urbanisation=rural→urban; counter-urbanisation=reverse. Driven by jobs/services vs rural poverty.",
      sections: [
        { heading: "Key idea", body: "Urbanisation concentrates people but creates challenges in housing/infrastructure." },
        { heading: "Patterns", body: "Nucleated, dispersed, linear settlements based on geography." },
      ],
    },
  },
  {
    file: "lesson-2-3.ts", exportName: "lesson313",
    lesson: {
      id: "cieigeo-u2-lesson-2-3", code: "2-3",
      title: "Development and Inequality",
      goal: "I CAN measure development and explain global inequalities.",
      standards: ["Cambridge IGCSE Geography 0460", "Paper 2: development"],
      vocabulary: [
        { term: "Development", definition: "Improvement in living standards/wellbeing." },
        { term: "Developed country", definition: "High income, industrialised economy." },
        { term: "Developing country", definition: "Low income, less industrialised." },
        { term: "Human Development Index (HDI)", definition: "Composite measure of development." },
        { term: "North-South divide", definition: "Economic divide between developed/developing." },
        { term: "Inequality", definition: "Unequal distribution of resources/opportunities." },
      ],
      concept: {
        id: "cieigeo-u2-s3-dev", title: "Development and inequality",
        skill: "Measure and explain development differences.",
        sections: [
          { heading: "Measuring development", body: "HDI: income, education, life expectancy. Other indicators: literacy, infant mortality, access to clean water, electricity. GDP per capita: income only." },
          { heading: "Inequalities", body: "North-South divide: developed countries (north) vs developing (south). Within-country inequality: urban/rural, rich/poor. Causes: colonial history, trade patterns, corruption, geography." },
        ],
        keyFormulas: [
          { name: "HDI", statement: "income+education+health" },
          { name: "North-South", statement: "developed vs developing" },
        ],
        workedExample: {
          problem: "Why is HDI better than GDP for measuring development?",
          solution: "HDI includes education and health — captures wellbeing beyond income. GDP can be high despite poor living conditions.",
        },
        questions: [
          {
            id: "cieigeo-u2-dv-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is the Human Development Index?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Composite measure of development" }, { id: "b", text: "GDP measure" }, { id: "c", text: "Population density" }, { id: "d", text: "A type of migration" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "HDI", statement: "Development measure." }],
              steps: [{ reasoning: "HDI combines income, education, health.", marks: 1, markCode: "M" }],
              finalAnswer: "Composite development measure",
            },
          },
          {
            id: "cieigeo-u2-dv-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the North-South divide?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "North-South", statement: "Development divide." }],
              steps: [
                { reasoning: "Economic divide between developed/developing countries.", marks: 1, markCode: "M" },
                { reasoning: "Named for geographic distribution.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Developed vs developing divide",
            },
          },
          {
            id: "cieigeo-u2-dv-q3", difficulty: "core", totalMarks: 3,
            stem: "What causes global inequality?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Inequality causes", statement: "Development gaps." }],
              steps: [
                { reasoning: "Colonial history, trade patterns.", marks: 1, markCode: "M" },
                { reasoning: "Corruption, political instability, geography.", marks: 1, markCode: "M" },
                { reasoning: "Access to resources/education.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "History, trade, governance, geography",
            },
          },
          {
            id: "cieigeo-u2-dv-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define development, developed country, developing country, HDI, North-South divide, inequality. (b) What is development? (c) What is HDI? (d) What is the North-South divide? (e) What causes global inequality? (f) How is HDI calculated? (g) What are indicators of development? (h) Evaluate whether development can be measured accurately.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Development", statement: "Measurement, inequality." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Improvement in living standards.", marks: 1, markCode: "M" },
                { reasoning: "(c) Income+education+health measure.", marks: 1, markCode: "M" },
                { reasoning: "(d) Developed vs developing divide.", marks: 1, markCode: "M" },
                { reasoning: "(e) History, trade, governance, geography.", marks: 1, markCode: "M" },
                { reasoning: "(f) Composite of three indicators.", marks: 1, markCode: "M" },
                { reasoning: "(g) Literacy, infant mortality, clean water.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Development and inequality.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieigeo-u2-dv-notes", title: "Development — notes",
      summary: "HDI=income+education+health. North-South divide=global inequality. Causes: history, trade, governance.",
      sections: [
        { heading: "Key idea", body: "Development is multidimensional — income alone insufficient." },
        { heading: "Inequality", body: "Global and within-country inequalities persist due to structural factors." },
      ],
    },
  },
  {
    file: "lesson-2-4.ts", exportName: "lesson314",
    lesson: {
      id: "cieigeo-u2-lesson-2-4", code: "2-4",
      title: "Globalisation and TNCs",
      goal: "I CAN explain globalisation and the role of transnational corporations.",
      standards: ["Cambridge IGCSE Geography 0460", "Paper 2: globalisation"],
      vocabulary: [
        { term: "Globalisation", definition: "Increasing interconnectedness of world economies/societies." },
        { term: "Transnational corporation (TNC)", definition: "Company operating in multiple countries." },
        { term: "Outsourcing", definition: "Contracting production/services to external providers." },
        { term: "Free trade", definition: "Trade without government restrictions." },
        { term: "Cultural diffusion", definition: "Spread of cultural practices between societies." },
        { term: "Economic integration", definition: "Countries linking economies through trade/investment." },
      ],
      concept: {
        id: "cieigeo-u2-s4-glob", title: "Globalisation",
        skill: "Understand globalisation and TNC impacts.",
        sections: [
          { heading: "Globalisation", body: "Increased international trade, investment, communication, migration. Driven by technology, transport, trade agreements. Creates opportunities and challenges." },
          { heading: "TNCs", body: "Large companies operating globally: Apple, Nike, Coca-Cola. Benefits: jobs, investment, technology transfer. Concerns: exploitation, environmental damage, tax avoidance, cultural homogenisation." },
        ],
        keyFormulas: [
          { name: "Globalisation", statement: "world economic integration" },
          { name: "TNC", statement: "multi-country company" },
        ],
        workedExample: {
          problem: "A TNC builds a factory in a developing country. What are the impacts?",
          solution: "Positive: jobs, investment, skills. Negative: exploitation, environmental damage, profit repatriation.",
        },
        questions: [
          {
            id: "cieigeo-u2-gb-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is globalisation?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Increasing interconnectedness of world economies" }, { id: "b", text: "A type of migration" }, { id: "c", text: "A weather pattern" }, { id: "d", text: "A landform" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Globalisation", statement: "World integration." }],
              steps: [{ reasoning: "Globalisation = increasing world interconnectedness.", marks: 1, markCode: "M" }],
              finalAnswer: "World economic integration",
            },
          },
          {
            id: "cieigeo-u2-gb-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a transnational corporation?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "TNC", statement: "Multi-country company." }],
              steps: [
                { reasoning: "Company operating in multiple countries.", marks: 1, markCode: "M" },
                { reasoning: "e.g. Apple, Nike, Coca-Cola.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Multi-country company",
            },
          },
          {
            id: "cieigeo-u2-gb-q3", difficulty: "core", totalMarks: 3,
            stem: "What are benefits of TNCs for developing countries?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "TNC benefits", statement: "Positive impacts." }],
              steps: [
                { reasoning: "Jobs, investment, technology transfer.", marks: 1, markCode: "M" },
                { reasoning: "Skills development, infrastructure.", marks: 1, markCode: "M" },
                { reasoning: "Economic growth stimulation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Jobs, investment, technology",
            },
          },
          {
            id: "cieigeo-u2-gb-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define globalisation, TNC, outsourcing, free trade, cultural diffusion, economic integration. (b) What is globalisation? (c) What is a TNC? Give an example. (d) What are benefits of TNCs? (e) What are drawbacks of TNCs? (f) What is outsourcing? (g) What drives globalisation? (h) Evaluate whether globalisation benefits all countries equally.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Globalisation", statement: "TNCs, impacts." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) World integration.", marks: 1, markCode: "M" },
                { reasoning: "(c) Multi-country company; valid example.", marks: 1, markCode: "M" },
                { reasoning: "(d) Jobs, investment, technology.", marks: 1, markCode: "M" },
                { reasoning: "(e) Exploitation, environmental damage, profit repatriation.", marks: 1, markCode: "M" },
                { reasoning: "(f) Contracting to external providers.", marks: 1, markCode: "M" },
                { reasoning: "(g) Technology, transport, trade agreements.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Globalisation and TNCs.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieigeo-u2-gb-notes", title: "Globalisation — notes",
      summary: "Globalisation=world integration. TNCs bring investment/jobs but also exploitation/environmental concerns.",
      sections: [
        { heading: "Key idea", body: "Globalisation creates winners and losers — benefits unevenly distributed." },
        { heading: "TNCs", body: "Large companies drive globalisation but raise ethical concerns." },
      ],
    },
  },
  {
    file: "lesson-2-5.ts", exportName: "lesson315",
    lesson: {
      id: "cieigeo-u2-lesson-2-5", code: "2-5",
      title: "Migration and Population Dynamics",
      goal: "I CAN explain migration types, causes and impacts.",
      standards: ["Cambridge IGCSE Geography 0460", "Paper 2: migration"],
      vocabulary: [
        { term: "Migration", definition: "Movement of people between areas." },
        { term: "Emigration", definition: "Leaving one's country." },
        { term: "Immigration", definition: "Moving into a country." },
        { term: "Push factors", definition: "Reasons for leaving." },
        { term: "Pull factors", definition: "Reasons for moving to destination." },
        { term: "Refugee", definition: "Person forced to flee due to persecution/conflict." },
      ],
      concept: {
        id: "cieigeo-u2-s5-mig", title: "Migration",
        skill: "Understand migration causes and impacts.",
        sections: [
          { heading: "Migration types", body: "Internal (within country), international (between countries), forced (refugees), economic (work), retirement, family reunion." },
          { heading: "Push/pull factors", body: "Push: poverty, conflict, unemployment, persecution. Pull: jobs, higher wages, safety, better services, family." },
          { heading: "Impacts", body: "Sending country: brain drain, remittances. Receiving country: labour supply, cultural diversity, pressure on services/housing." },
        ],
        keyFormulas: [
          { name: "Push", statement: "reasons for leaving" },
          { name: "Pull", statement: "reasons for moving" },
          { name: "Refugee", statement: "forced to flee" },
        ],
        workedExample: {
          problem: "A person moves from rural village to city for work. What type of migration?",
          solution: "Internal economic migration — push (rural poverty) + pull (urban jobs).",
        },
        questions: [
          {
            id: "cieigeo-u2-mg-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is migration?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Movement of people between areas" }, { id: "b", text: "Movement of goods" }, { id: "c", text: "A weather pattern" }, { id: "d", text: "A landform" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Migration", statement: "People movement." }],
              steps: [{ reasoning: "Migration = movement of people.", marks: 1, markCode: "M" }],
              finalAnswer: "People movement",
            },
          },
          {
            id: "cieigeo-u2-mg-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between push and pull factors?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Push/pull", statement: "Leave vs attract." }],
              steps: [
                { reasoning: "Push = reasons for leaving.", marks: 1, markCode: "M" },
                { reasoning: "Pull = reasons for moving to destination.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Leave vs attract",
            },
          },
          {
            id: "cieigeo-u2-mg-q3", difficulty: "core", totalMarks: 3,
            stem: "What are impacts of migration on the sending country?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Migration impacts", statement: "Sending country effects." }],
              steps: [
                { reasoning: "Brain drain — loss of skilled workers.", marks: 1, markCode: "M" },
                { reasoning: "Remittances — money sent back.", marks: 1, markCode: "M" },
                { reasoning: "Reduced population pressure.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Brain drain, remittances",
            },
          },
          {
            id: "cieigeo-u2-mg-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define migration, emigration, immigration, push factors, pull factors, refugee. (b) What is migration? (c) What is emigration? (d) What are push factors? Give 2 examples. (e) What are pull factors? Give 2 examples. (f) What is a refugee? (g) What are impacts on sending country? (h) Evaluate whether migration benefits or harms economies.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Migration", statement: "Types, causes, impacts." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) People movement.", marks: 1, markCode: "M" },
                { reasoning: "(c) Leaving one's country.", marks: 1, markCode: "M" },
                { reasoning: "(d) Two valid push examples.", marks: 1, markCode: "M" },
                { reasoning: "(e) Two valid pull examples.", marks: 1, markCode: "M" },
                { reasoning: "(f) Forced to flee persecution/conflict.", marks: 1, markCode: "M" },
                { reasoning: "(g) Brain drain, remittances.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Migration causes and impacts.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieigeo-u2-mg-notes", title: "Migration — notes",
      summary: "Push=leave reasons; pull=attract reasons. Impacts: brain drain, remittances, labour supply.",
      sections: [
        { heading: "Key idea", body: "Migration driven by economic, social, political factors." },
        { heading: "Impacts", body: "Both sending and receiving countries affected — mixed outcomes." },
      ],
    },
  },
];
