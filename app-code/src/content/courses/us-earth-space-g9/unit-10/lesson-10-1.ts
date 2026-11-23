import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "ess9-u10-lesson-10-1",
  code: "10-1",
  title: "Integrated Earth Systems Review",
  goal: "I CAN synthesize Earth's systems, hazards, resources, climate, and history.",
  standards: [
    "HS-ESS1-1",
    "HS-ESS2-1",
    "HS-ESS3-1",
    "SEP: Constructing Explanations",
    "SEP: Obtaining, Evaluating, and Communicating Information",
  ],
  vocabulary: [
    {
      term: "Earth system",
      definition:
        "Interconnected spheres: atmosphere, hydrosphere, geosphere, biosphere.",
    },
    {
      term: "Feedback",
      definition: "Process that amplifies or dampens change.",
    },
    {
      term: "System interaction",
      definition: "How Earth spheres affect each other.",
    },
    { term: "Synthesis", definition: "Combining knowledge across topics." },
    {
      term: "Integrated model",
      definition: "Model showing multiple Earth systems together.",
    },
    {
      term: "Human-Earth system",
      definition: "Earth systems modified by human activity.",
    },
    { term: "Capstone", definition: "Final integrated assessment." },
  ],
  concepts: [
    {
      id: "ess9-u10-systems",
      title: "Earth systems integration",
      skill: "Synthesize interactions among Earth's spheres.",
      lesson: {
        sections: [
          {
            heading: "Earth spheres",
            body: "- **Atmosphere**: gases, weather, climate.\n- **Hydrosphere**: water, oceans, water cycle.\n- **Geosphere**: rocks, mantle, plate tectonics.\n- **Biosphere**: life, ecosystems.",
          },
          {
            heading: "Interactions",
            body: "- Plate tectonics → mountain building → weather.\n- Water cycle connects atmosphere + hydrosphere + geosphere.\n- Biosphere depends on all other spheres.",
          },
        ],
        keyFormulas: [
          {
            name: "Spheres",
            statement: "Atmosphere, hydrosphere, geosphere, biosphere",
          },
          { name: "Interactions", statement: "Plate tectonics → weather" },
          { name: "Water cycle", statement: "Connects three spheres" },
        ],
        workedExample: {
          problem: "How do Earth's spheres interact?",
          solution:
            "Plate tectonics affects atmosphere (weather) and hydrosphere (oceans).",
        },
      },
      questions: [
        {
          id: "ess9-u10-systems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are Earth's four spheres?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Air, water, land, fire" },
              {
                id: "b",
                text: "Atmosphere, hydrosphere, geosphere, biosphere",
              },
              { id: "c", text: "Solid, liquid, gas, plasma" },
              { id: "d", text: "North, south, east, west" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Spheres", statement: "Four spheres." },
            ],
            steps: [
              {
                reasoning:
                  "Four spheres: atmosphere, hydrosphere, geosphere, biosphere.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "**(b)** Atmosphere, hydrosphere, geosphere, biosphere",
            commonErrors: ["Air/water/land/fire."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u10-systems-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How do Earth's spheres interact?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Interactions",
                statement: "Multiple connections.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Plate tectonics → weather; water cycle connects spheres.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Plate tectonics → weather; water cycle connects.",
            commonErrors: ["Independent."],
            examinerNote: "A1 for interaction.",
          },
        },
        {
          id: "ess9-u10-systems-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does plate tectonics affect other Earth spheres?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Plate tectonics",
                statement: "Affects multiple spheres.",
              },
            ],
            steps: [
              {
                reasoning: "Geosphere: mountain building, earthquakes.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Atmosphere: weather patterns via mountains.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Hydrosphere: ocean currents, tsunamis.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: affects all spheres.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Affects geosphere, atmosphere, hydrosphere.",
            commonErrors: ["One sphere."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u10-systems-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe interactions among Earth's spheres.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Interactions",
                statement: "Multiple connections.",
              },
            ],
            steps: [
              {
                reasoning: "Atmosphere ↔ hydrosphere: water cycle.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Geosphere → atmosphere: mountains affect weather.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Biosphere depends on all spheres.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Answer: interconnected systems.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "All spheres interconnected.",
            commonErrors: ["Independent."],
            examinerNote: "B2 for each interaction.",
          },
        },
      ],
    },
    {
      id: "ess9-u10-hazards",
      title: "Hazards and Earth systems",
      skill: "Synthesize how hazards relate to Earth systems.",
      lesson: {
        sections: [
          {
            heading: "Hazard-systems link",
            body: "- Earthquakes: geosphere → atmosphere (tsunamis).\n- Volcanoes: geosphere → atmosphere (ash, climate).\n- Hurricanes: hydrosphere + atmosphere.\n- Hazards cross multiple spheres.",
          },
          {
            heading: "Human vulnerability",
            body: "Population density + hazard exposure → risk.\nMitigation reduces risk.",
          },
        ],
        keyFormulas: [
          { name: "Earthquakes", statement: "Geosphere → atmosphere" },
          { name: "Volcanoes", statement: "Geosphere → atmosphere" },
          { name: "Hurricanes", statement: "Hydrosphere + atmosphere" },
        ],
        workedExample: {
          problem: "How do volcanoes affect Earth's systems?",
          solution: "Geosphere → atmosphere (ash) → climate cooling.",
        },
      },
      questions: [
        {
          id: "ess9-u10-hazards-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How do volcanoes affect Earth's systems?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only geosphere" },
              { id: "b", text: "Geosphere → atmosphere → climate" },
              { id: "c", text: "Only atmosphere" },
              { id: "d", text: "No effect" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Volcanoes",
                statement: "Cross-sphere effects.",
              },
            ],
            steps: [
              {
                reasoning: "Volcanoes affect multiple spheres.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Geosphere → atmosphere → climate",
            commonErrors: ["Only geosphere."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u10-hazards-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How do hazards cross Earth systems?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Hazards",
                statement: "Cross-sphere effects.",
              },
            ],
            steps: [
              {
                reasoning: "Earthquakes → tsunamis; volcanoes → climate.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Hazards affect multiple spheres.",
            commonErrors: ["One sphere."],
            examinerNote: "A1 for example.",
          },
        },
        {
          id: "ess9-u10-hazards-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do hurricanes involve multiple Earth spheres?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Hurricanes",
                statement: "Atmosphere + hydrosphere.",
              },
            ],
            steps: [
              {
                reasoning: "Hydrosphere: warm ocean water.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Atmosphere: air circulation, rotation.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: ocean + atmosphere.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Ocean (hydrosphere) + atmosphere.",
            commonErrors: ["One sphere."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "ess9-u10-hazards-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe how hazards affect multiple Earth systems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Hazards",
                statement: "Cross-sphere effects.",
              },
            ],
            steps: [
              {
                reasoning: "Earthquakes: geosphere → atmosphere (tsunamis).",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Volcanoes: geosphere → atmosphere → climate.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Hurricanes: hydrosphere + atmosphere.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Answer: hazards cross systems.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Hazards affect multiple spheres.",
            commonErrors: ["One sphere."],
            examinerNote: "B2 for each hazard.",
          },
        },
      ],
    },
    {
      id: "ess9-u10-climate",
      title: "Climate and Earth systems",
      skill: "Synthesize climate change effects on Earth systems.",
      lesson: {
        sections: [
          {
            heading: "Climate systems",
            body: "- Atmosphere: temperature, precipitation.\n- Hydrosphere: ocean warming, sea level.\n- Geosphere: ice melt, permafrost.\n- Biosphere: habitat change.",
          },
          {
            heading: "Feedbacks",
            body: "- Ice-albedo feedback: less ice → more warming.\n- Water vapor feedback: warmer → more vapor → more warming.",
          },
        ],
        keyFormulas: [
          { name: "Atmosphere", statement: "Temperature, precipitation" },
          { name: "Hydrosphere", statement: "Ocean warming, sea level" },
          { name: "Feedback", statement: "Ice-albedo, water vapor" },
        ],
        workedExample: {
          problem: "What's ice-albedo feedback?",
          solution: "Less ice → less reflection → more warming.",
        },
      },
      questions: [
        {
          id: "ess9-u10-climate-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is ice-albedo feedback?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ice reflects heat" },
              { id: "b", text: "Less ice → more warming" },
              { id: "c", text: "Ice melts slowly" },
              { id: "d", text: "Albedo increases" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ice-albedo",
                statement: "Less ice → warming.",
              },
            ],
            steps: [
              {
                reasoning: "Less ice → less reflection → warming.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Less ice → more warming",
            commonErrors: ["Ice reflects."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u10-climate-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does climate change affect Earth's spheres?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Climate",
                statement: "Affects all spheres.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Atmosphere, hydrosphere, geosphere, biosphere all affected.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "All spheres affected.",
            commonErrors: ["One sphere."],
            examinerNote: "A1 for answer.",
          },
        },
        {
          id: "ess9-u10-climate-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is water vapor feedback?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Water vapor",
                statement: "Amplifying feedback.",
              },
            ],
            steps: [
              {
                reasoning: "Warmer → more evaporation.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "More vapor → more greenhouse effect.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: amplifying feedback.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Warmer → more vapor → more warming.",
            commonErrors: ["Dampening."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "ess9-u10-climate-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe climate change effects on Earth systems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Climate",
                statement: "Multiple effects.",
              },
            ],
            steps: [
              {
                reasoning: "Atmosphere: temperature, weather.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Hydrosphere: ocean warming, sea level.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Biosphere: habitat change.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Answer: all spheres affected.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "All spheres affected by climate change.",
            commonErrors: ["One sphere."],
            examinerNote: "B2 for each sphere.",
          },
        },
      ],
    },
    {
      id: "ess9-u10-history",
      title: "Earth history and systems",
      skill: "Synthesize Earth's history with current systems.",
      lesson: {
        sections: [
          {
            heading: "Deep time",
            body: "- Earth's history spans 4.5 billion years.\n- Plate tectonics shaped continents.\n- Climate changed dramatically over time.",
          },
          {
            heading: "Modern context",
            body: "- Human activity now dominant force.\n- Understanding history informs future.",
          },
        ],
        keyFormulas: [
          { name: "Deep time", statement: "4.5 billion years" },
          { name: "Tectonics", statement: "Shaped continents" },
          { name: "Human", statement: "Dominant force now" },
        ],
        workedExample: {
          problem: "How does Earth's history inform present?",
          solution: "Past climate changes show system sensitivity.",
        },
      },
      questions: [
        {
          id: "ess9-u10-history-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How old is Earth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1 million years" },
              { id: "b", text: "4.5 billion years" },
              { id: "c", text: "10,000 years" },
              { id: "d", text: "100 million years" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Earth age",
                statement: "4.5 billion years.",
              },
            ],
            steps: [
              {
                reasoning: "Earth = 4.5 billion years.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 4.5 billion years",
            commonErrors: ["1 million."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u10-history-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does Earth's history inform present understanding?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "History",
                statement: "Informs present.",
              },
            ],
            steps: [
              {
                reasoning: "Past climate changes show system sensitivity.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Past changes inform present.",
            commonErrors: ["No connection."],
            examinerNote: "A1 for answer.",
          },
        },
        {
          id: "ess9-u10-history-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How has plate tectonics shaped Earth's history?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Tectonics",
                statement: "Continental formation.",
              },
            ],
            steps: [
              {
                reasoning: "Continents formed/moved over time.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Affected climate and life.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: shaped continents + climate.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Continental formation → climate + life.",
            commonErrors: ["No effect."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "ess9-u10-history-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe Earth's history timeline.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Timeline", statement: "Major events." },
            ],
            steps: [
              { reasoning: "4.5 Ga: Earth forms.", marks: 2, markCode: "B" },
              { reasoning: "~3.5 Ga: first life.", marks: 2, markCode: "B" },
              {
                reasoning: "541 Ma: Cambrian explosion.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "66 Ma: dinosaur extinction.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "Formation → life → Cambrian → extinction.",
            commonErrors: ["One event."],
            examinerNote: "B2 for each event.",
          },
        },
      ],
    },
  ],
};
