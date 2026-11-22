import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "oleg-u2-lesson-2-1",
  code: "2-1",
  title: "Population and Settlement",
  goal: "I CAN describe population distribution, density and settlement patterns.",
  standards: ["2217: Human geography — population and settlement"],
  vocabulary: [
    {
      term: "Population density",
      definition: "Number of people per unit area.",
    },
    {
      term: "Birth rate",
      definition: "Live births per 1000 population per year.",
    },
    { term: "Death rate", definition: "Deaths per 1000 population per year." },
    { term: "Natural increase", definition: "Birth rate minus death rate." },
    {
      term: "Urbanisation",
      definition: "Movement of people from rural to urban areas.",
    },
    {
      term: "Settlement pattern",
      definition:
        "Spatial arrangement of buildings — nucleated, linear, dispersed.",
    },
  ],
  concepts: [
    {
      id: "oleg-u2-population",
      title: "Population distribution and change",
      skill: "Explain population density, growth and distribution.",
      lesson: {
        sections: [
          {
            heading: "Population distribution",
            body: "Uneven globally — concentrated in Asia, Europe, North America. Factors: climate (temperate favoured), water, fertile land, resources, economic opportunities. Sparsely populated: deserts, tundra, mountains.",
          },
          {
            heading: "Population change",
            body: "Birth rate, death rate, migration determine population. Natural increase = births - deaths. Population pyramid shows age/sex structure — wide base = young population, narrow = ageing. DTM stages: high birth/death → declining death → low birth/death.",
          },
          {
            heading: "Overpopulation and underpopulation",
            body: "Overpopulation: more people than resources can support — pressure on food, water, housing. Underpopulation: too few people for resources — e.g. some rural areas. Both can cause problems.",
          },
        ],
        keyFormulas: [
          {
            name: "Population",
            statement: "Density=people/area; Growth=births-deaths+migration.",
          },
        ],
        workedExample: {
          problem: "Why is population concentrated in certain areas?",
          solution:
            "Favourable climate, water, fertile land, resources and economic opportunities attract people.",
        },
      },
      questions: [
        {
          id: "oleg-u2-pop-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is population density?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Birth rate" },
              { id: "b", text: "Total population size" },
              { id: "c", text: "Number of people per unit area" },
              { id: "d", text: "Migration rate" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Density",
                statement: "People per unit area.",
              },
            ],
            steps: [
              {
                reasoning: "Density = people/area.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** People per unit area",
            commonErrors: ["Confusing with total population."],
          },
        },
        {
          id: "oleg-u2-pop-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is natural increase?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Natural increase",
                statement: "Birth rate minus death rate.",
              },
            ],
            steps: [
              { reasoning: "Births - deaths.", marks: 1, markCode: "AO1" },
              { reasoning: "Excludes migration.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Birth rate minus death rate.",
            commonErrors: ["Including migration."],
          },
        },
        {
          id: "oleg-u2-pop-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain factors affecting population distribution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Distribution",
                statement: "Climate, water, resources, economy.",
              },
            ],
            steps: [
              {
                reasoning: "Physical factors: climate, water, land.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Human factors: jobs, resources.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Explain concentration.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Climate+water+resources+economy determine distribution.",
            commonErrors: ["Only physical factors."],
          },
        },
        {
          id: "oleg-u2-pop-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Population.",
          parts: [
            { label: "a", prompt: "Define density.", marks: 1 },
            { label: "b", prompt: "Define natural increase.", marks: 2 },
            {
              label: "c",
              prompt: "Two factors affecting distribution?",
              marks: 2,
            },
            { label: "d", prompt: "What is overpopulation?", marks: 2 },
            { label: "e", prompt: "What is a population pyramid?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Population",
                statement: "Definitions+factors+concepts.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "People/area.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Births - deaths.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Excludes migration.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Any two factors.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Explained.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Too many for resources.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Pressure on resources.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Age/sex structure.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Shows population profile.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) density (b) natural increase (c) factors (d) overpopulation (e) pyramid",
          },
        },
        { id: "oleg-u2-pop-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Birth rate is measured as...",
          response: { type: "mcq", choices: [ { id: "a", text: "deaths per 1000 people" }, { id: "b", text: "live births per 1000 population per year" }, { id: "c", text: "total births in a country" }, { id: "d", text: "people per square kilometre" } ], correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "definition", name: "Birth rate", statement: "Births per 1000 population per year." } ], steps: [ { reasoning: "Birth rate uses births per 1000 per year.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(b)** live births per 1000 population per year", commonErrors: ["Confusing births with deaths or density."] } },
        { id: "oleg-u2-pop-q6", difficulty: "core", totalMarks: 2,
          stem: "A town has a population of 240 000 and an area of 120 km². Calculate the population density.",
          response: { type: "numeric", parts: [ { label: "Density", answer: 2000, unit: "people/km²" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Population density", statement: "Density = people per unit area." } ], steps: [ { reasoning: "240 000 / 120 = 2000 people/km².", marks: 2, markCode: "AO1" } ], finalAnswer: "2000 people/km²", commonErrors: ["Using wrong units or dividing backwards."] } },
        { id: "oleg-u2-pop-q7", difficulty: "core", totalMarks: 1,
          stem: "Natural increase is calculated as...",
          response: { type: "mcq", choices: [ { id: "a", text: "birth rate plus migration" }, { id: "b", text: "population divided by area" }, { id: "c", text: "birth rate minus death rate" }, { id: "d", text: "death rate minus birth rate" } ], correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "definition", name: "Natural increase", statement: "Births minus deaths, excluding migration." } ], steps: [ { reasoning: "Natural increase excludes migration.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(c)** birth rate minus death rate", commonErrors: ["Including migration in natural increase."] } },
        { id: "oleg-u2-pop-q8", difficulty: "core", totalMarks: 2,
          stem: "A country has a birth rate of 28 per 1000 and a death rate of 15 per 1000. Calculate the natural increase per 1000.",
          response: { type: "numeric", parts: [ { label: "Natural increase", answer: 13, unit: "per 1000" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Natural increase", statement: "Natural increase = birth rate - death rate." } ], steps: [ { reasoning: "28 - 15 = 13 per 1000.", marks: 2, markCode: "AO1" } ], finalAnswer: "13 per 1000", commonErrors: ["Adding instead of subtracting."] } },
        { id: "oleg-u2-pop-q9", difficulty: "core", totalMarks: 3,
          stem: "Explain two physical factors that influence population distribution.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "principle", name: "Population distribution", statement: "Physical conditions shape where people live." } ], steps: [ { reasoning: "Name two factors such as climate, water, fertile land or relief.", marks: 1, markCode: "AO1" }, { reasoning: "Explain how each attracts or repels settlement.", marks: 1, markCode: "AO2" }, { reasoning: "Link to concentrated or sparse population.", marks: 1, markCode: "AO3" } ], finalAnswer: "Favourable climate/water/soil attract people, while deserts, mountains and cold areas are sparsely populated.", commonErrors: ["Only listing human factors."] } },
        { id: "oleg-u2-pop-q10", difficulty: "core", totalMarks: 1,
          stem: "A population pyramid with a very wide base usually indicates...",
          response: { type: "mcq", choices: [ { id: "a", text: "an ageing population" }, { id: "b", text: "very low life expectancy" }, { id: "c", text: "a young population with high birth rate" }, { id: "d", text: "mass emigration only" } ], correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "property", name: "Population pyramid", statement: "Wide base = many young people/high birth rate." } ], steps: [ { reasoning: "A wide base shows many young dependants.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(c)** a young population with high birth rate", commonErrors: ["Reading the pyramid upside down."] } },
        { id: "oleg-u2-pop-q11", difficulty: "core", totalMarks: 2,
          stem: "A city's population grows from 800 000 to 920 000 in one year. Calculate the percentage increase.",
          response: { type: "numeric", parts: [ { label: "Increase", answer: 15, unit: "%" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Population growth", statement: "Percentage increase = increase/original x 100." } ], steps: [ { reasoning: "(920 000 - 800 000) / 800 000 x 100 = 15%.", marks: 2, markCode: "AO1" } ], finalAnswer: "15 %", commonErrors: ["Using the new population as denominator."] } },
        { id: "oleg-u2-pop-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Which area is most likely to be sparsely populated?",
          response: { type: "mcq", choices: [ { id: "a", text: "Temperate coastal plain" }, { id: "b", text: "Hot desert with little water" }, { id: "c", text: "Fertile river valley" }, { id: "d", text: "Area with jobs and services" } ], correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "principle", name: "Population distribution", statement: "Harsh physical environments limit settlement." } ], steps: [ { reasoning: "Deserts have little water and harsh conditions.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(b)** Hot desert with little water", commonErrors: ["Choosing a favourable environment."] } },
        { id: "oleg-u2-pop-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how a population pyramid can show the stage of a country's demographic transition.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "principle", name: "Demographic transition", statement: "Pyramid shape reflects birth/death rate stages." } ], steps: [ { reasoning: "Describe a wide base for high birth rates.", marks: 1, markCode: "AO1" }, { reasoning: "Describe a narrow base for low birth rates/ageing.", marks: 1, markCode: "AO1" }, { reasoning: "Link shape to birth and death rate changes.", marks: 1, markCode: "AO2" }, { reasoning: "Give a clear conclusion.", marks: 1, markCode: "AO3" } ], finalAnswer: "Wide base suggests high birth rate; narrowing base suggests falling births and ageing.", commonErrors: ["Describing the pyramid without linking to rates."] } },
        { id: "oleg-u2-pop-q14", difficulty: "core", totalMarks: 1,
          stem: "Overpopulation occurs when...",
          response: { type: "mcq", choices: [ { id: "a", text: "land area increases" }, { id: "b", text: "people move to cities" }, { id: "c", text: "birth rate equals death rate" }, { id: "d", text: "population exceeds the resources available" } ], correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "definition", name: "Overpopulation", statement: "More people than resources can support." } ], steps: [ { reasoning: "Overpopulation means demand exceeds resources.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(d)** population exceeds the resources available", commonErrors: ["Confusing overpopulation with urbanisation."] } },
        { id: "oleg-u2-pop-q15", difficulty: "core", totalMarks: 2,
          stem: "A region has 1 200 000 people and 600 km² of land. Calculate the population density.",
          response: { type: "numeric", parts: [ { label: "Density", answer: 2000, unit: "people/km²" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Population density", statement: "People per unit area." } ], steps: [ { reasoning: "1 200 000 / 600 = 2000 people/km².", marks: 2, markCode: "AO1" } ], finalAnswer: "2000 people/km²", commonErrors: ["Unit or division errors."] } },
        { id: "oleg-u2-pop-q16", difficulty: "foundation", totalMarks: 1,
          stem: "Migration is best described as...",
          response: { type: "mcq", choices: [ { id: "a", text: "death rate only" }, { id: "b", text: "birth rate only" }, { id: "c", text: "movement of people from one place to another" }, { id: "d", text: "natural increase" } ], correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "definition", name: "Migration", statement: "Movement of people between places." } ], steps: [ { reasoning: "Migration is movement, not natural change.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(c)** movement of people from one place to another", commonErrors: ["Confusing migration with natural change."] } },
      ],
    },
    {
      id: "oleg-u2-settlement",
      title: "Settlement patterns and urbanisation",
      skill: "Describe settlement patterns and the urbanisation process.",
      lesson: {
        sections: [
          {
            heading: "Settlement patterns",
            body: "Nucleated: buildings clustered around centre — farming communities. Linear: along road/river — transport routes. Dispersed: scattered — upland farming. Site: where settlement is; situation: why it's there.",
          },
          {
            heading: "Urbanisation",
            body: "Movement from rural to urban areas — driven by job opportunities, services, better living. Creates cities and towns. Urban growth can cause problems: overcrowding, pollution, housing shortages.",
          },
          {
            heading: "Settlement functions",
            body: "Rural: agriculture, primary industry. Urban: secondary/tertiary industry, services. Functions determine size and growth. Settlement hierarchy: village < town < city < metropolis.",
          },
        ],
        keyFormulas: [
          {
            name: "Settlement",
            statement: "Nucleated/linear/dispersed; Urbanisation=rural→urban.",
          },
        ],
        workedExample: {
          problem: "Why do settlements develop at river crossings?",
          solution:
            "Water supply, transport route, trade opportunity — favourable site and situation.",
        },
      },
      questions: [
        {
          id: "oleg-u2-se-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is urbanisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Building new cities" },
              { id: "b", text: "Movement of people from rural to urban areas" },
              { id: "c", text: "Population decline" },
              { id: "d", text: "Rural farming" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Urbanisation",
                statement: "Rural→urban movement.",
              },
            ],
            steps: [
              {
                reasoning: "Urbanisation = rural to urban.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Rural→urban",
            commonErrors: ["Confusing with suburbanisation."],
          },
        },
        {
          id: "oleg-u2-se-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two settlement patterns.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Settlement patterns",
                statement: "Nucleated, linear, dispersed.",
              },
            ],
            steps: [
              { reasoning: "Any two patterns.", marks: 1, markCode: "AO1" },
              { reasoning: "Correctly named.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Nucleated, linear, dispersed.",
            commonErrors: ["Saying 'urban/rural'."],
          },
        },
        {
          id: "oleg-u2-se-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain causes of urbanisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Urbanisation causes",
                statement: "Jobs, services, better living.",
              },
            ],
            steps: [
              {
                reasoning: "Job opportunities in cities.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Better services/education/health.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Rural decline pushes people.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Jobs+services+lifestyle pull rural→urban.",
            commonErrors: ["Only push factors."],
          },
        },
        {
          id: "oleg-u2-se-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Settlement.",
          parts: [
            { label: "a", prompt: "Define urbanisation.", marks: 1 },
            { label: "b", prompt: "Two settlement patterns?", marks: 2 },
            { label: "c", prompt: "Causes of urbanisation?", marks: 3 },
            { label: "d", prompt: "Problems of urban growth?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Settlement",
                statement: "Definitions+patterns+causes+problems.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Rural→urban.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Any two.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning: "Jobs/services/lifestyle.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Pull factors.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Push factors.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Overcrowding/pollution/housing.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Any two problems.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "(a) urbanisation (b) patterns (c) causes (d) problems",
          },
        },
        { id: "oleg-u2-se-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A nucleated settlement pattern is best described as...",
          response: { type: "mcq", choices: [ { id: "a", text: "houses scattered across farmland" }, { id: "b", text: "buildings clustered around a central point" }, { id: "c", text: "a single isolated farm" }, { id: "d", text: "buildings along a road only" } ], correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "definition", name: "Nucleated settlement", statement: "Buildings clustered around a centre." } ], steps: [ { reasoning: "Nucleated means clustered around a nucleus/centre.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(b)** buildings clustered around a central point", commonErrors: ["Confusing nucleated with dispersed."] } },
        { id: "oleg-u2-se-q6", difficulty: "core", totalMarks: 2,
          stem: "A village has 4 800 people and a town has 24 000 people. Calculate how many times larger the town's population is.",
          response: { type: "numeric", parts: [ { label: "Ratio", answer: 5, unit: "times" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Population comparison", statement: "Ratio = larger/smaller." } ], steps: [ { reasoning: "24 000 / 4 800 = 5 times.", marks: 2, markCode: "AO1" } ], finalAnswer: "5 times", commonErrors: ["Subtracting instead of dividing."] } },
        { id: "oleg-u2-se-q7", difficulty: "core", totalMarks: 1,
          stem: "The 'site' of a settlement refers to...",
          response: { type: "mcq", choices: [ { id: "a", text: "its main industry" }, { id: "b", text: "why it developed there" }, { id: "c", text: "its population size" }, { id: "d", text: "the actual physical location chosen" } ], correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "definition", name: "Site", statement: "Site = where the settlement is physically located." } ], steps: [ { reasoning: "Site is the physical place; situation is why.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(d)** the actual physical location chosen", commonErrors: ["Confusing site with situation."] } },
        { id: "oleg-u2-se-q8", difficulty: "foundation", totalMarks: 2,
          stem: "On a map with scale 1:50 000, two settlements are 6 cm apart. Calculate the real distance in km.",
          response: { type: "numeric", parts: [ { label: "Distance", answer: 3, unit: "km" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Map scale", statement: "Real distance = map distance x scale denominator." } ], steps: [ { reasoning: "6 cm x 50 000 = 300 000 cm = 3 km.", marks: 2, markCode: "AO1" } ], finalAnswer: "3 km", commonErrors: ["Forgetting to convert cm to km."] } },
        { id: "oleg-u2-se-q9", difficulty: "core", totalMarks: 4,
          stem: "Explain two reasons why people move from rural areas to urban areas.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "principle", name: "Urbanisation causes", statement: "Pull and push factors drive rural-urban migration." } ], steps: [ { reasoning: "Name pull factors such as jobs or services.", marks: 1, markCode: "AO1" }, { reasoning: "Name push factors such as limited rural opportunities.", marks: 1, markCode: "AO1" }, { reasoning: "Explain how these cause urbanisation.", marks: 1, markCode: "AO2" }, { reasoning: "Give a clear conclusion.", marks: 1, markCode: "AO3" } ], finalAnswer: "Jobs and services pull people to towns/cities while limited rural opportunities push them away.", commonErrors: ["Only naming factors without explanation."] } },
        { id: "oleg-u2-se-q10", difficulty: "core", totalMarks: 1,
          stem: "Which settlement pattern is most likely along a railway line or river?",
          response: { type: "mcq", choices: [ { id: "a", text: "Linear" }, { id: "b", text: "Concentric" }, { id: "c", text: "Nucleated" }, { id: "d", text: "Dispersed" } ], correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "definition", name: "Linear settlement", statement: "Linear patterns follow transport routes or rivers." } ], steps: [ { reasoning: "Linear settlements follow routes such as roads, railways and rivers.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** Linear", commonErrors: ["Confusing with nucleated pattern."] } },
        { id: "oleg-u2-se-q11", difficulty: "core", totalMarks: 2,
          stem: "A city has 2 400 000 people and an area of 600 km². Calculate its population density.",
          response: { type: "numeric", parts: [ { label: "Density", answer: 4000, unit: "people/km²" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Population density", statement: "People per km²." } ], steps: [ { reasoning: "2 400 000 / 600 = 4000 people/km².", marks: 2, markCode: "AO1" } ], finalAnswer: "4000 people/km²", commonErrors: ["Incorrect division."] } },
        { id: "oleg-u2-se-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Which statement best describes the settlement hierarchy?",
          response: { type: "mcq", choices: [ { id: "a", text: "metropolis < city < town < village" }, { id: "b", text: "city = village in size" }, { id: "c", text: "village < town < city < metropolis" }, { id: "d", text: "hierarchy depends only on height" } ], correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "property", name: "Settlement hierarchy", statement: "Settlements ranked by size/functions." } ], steps: [ { reasoning: "Hierarchy runs village, town, city, metropolis.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(c)** village < town < city < metropolis", commonErrors: ["Reversing the order."] } },
        { id: "oleg-u2-se-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Evaluate two problems caused by rapid urban growth.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "principle", name: "Urban problems", statement: "Rapid growth strains housing, services and environment." } ], steps: [ { reasoning: "Name two problems such as overcrowding or pollution.", marks: 1, markCode: "AO1" }, { reasoning: "Explain how each results from urban growth.", marks: 1, markCode: "AO2" }, { reasoning: "Link to pressure on services/infrastructure.", marks: 1, markCode: "AO2" }, { reasoning: "Give a balanced judgement.", marks: 1, markCode: "AO3" } ], finalAnswer: "Overcrowding and pollution result when urban growth outpaces housing, services and waste management.", commonErrors: ["Listing problems without causes."] } },
        { id: "oleg-u2-se-q14", difficulty: "core", totalMarks: 1,
          stem: "Dispersed settlement is most common in...",
          response: { type: "mcq", choices: [ { id: "a", text: "dense city centres" }, { id: "b", text: "port areas only" }, { id: "c", text: "industrial estates" }, { id: "d", text: "upland farming areas" } ], correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "definition", name: "Dispersed settlement", statement: "Scattered farms typical of upland/agricultural areas." } ], steps: [ { reasoning: "Dispersed patterns suit scattered upland farms.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(d)** upland farming areas", commonErrors: ["Confusing with nucleated."] } },
        { id: "oleg-u2-se-q15", difficulty: "foundation", totalMarks: 2,
          stem: "A town's population increases from 50 000 to 55 000. Calculate the percentage increase.",
          response: { type: "numeric", parts: [ { label: "Increase", answer: 10, unit: "%" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Percentage increase", statement: "Change/original x 100." } ], steps: [ { reasoning: "(55 000 - 50 000) / 50 000 x 100 = 10%.", marks: 2, markCode: "AO1" } ], finalAnswer: "10 %", commonErrors: ["Using new population as base."] } },
        { id: "oleg-u2-se-q16", difficulty: "foundation", totalMarks: 1,
          stem: "Urbanisation is the movement of people from...",
          response: { type: "mcq", choices: [ { id: "a", text: "country to country only" }, { id: "b", text: "north to south only" }, { id: "c", text: "rural to urban areas" }, { id: "d", text: "urban to rural areas" } ], correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "definition", name: "Urbanisation", statement: "Rural-to-urban population movement." } ], steps: [ { reasoning: "Urbanisation moves people from rural to urban areas.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(c)** rural to urban areas", commonErrors: ["Reversing the direction."] } },
      ],
    },
  ],
  notes: [
    {
      id: "oleg-u2-2-1-notes",
      title: "Population and settlement — notes",
      summary:
        "Population distribution/change; settlement patterns and urbanisation.",
      sections: [
        {
          heading: "Population",
          body: "Density=people/area; growth=births-deaths+migration; pyramid=age/sex structure.",
        },
        {
          heading: "Settlement",
          body: "Nucleated/linear/dispersed; urbanisation=rural→urban; problems=overcrowding+pollution.",
        },
      ],
    },
  ],
};
