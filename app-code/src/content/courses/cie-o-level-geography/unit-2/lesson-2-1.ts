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
              { id: "a", text: "Number of people per unit area" },
              { id: "b", text: "Total population size" },
              { id: "c", text: "Birth rate" },
              { id: "d", text: "Migration rate" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** People per unit area",
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
              { id: "a", text: "Movement of people from rural to urban areas" },
              { id: "b", text: "Building new cities" },
              { id: "c", text: "Population decline" },
              { id: "d", text: "Rural farming" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** Rural→urban",
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
