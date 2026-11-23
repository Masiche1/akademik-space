import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "ess9-u8-lesson-8-1",
  code: "8-1",
  title: "Natural Resources and Human Impact",
  goal: "I CAN analyze resource distribution and human impacts on Earth systems.",
  standards: [
    "HS-ESS3-1",
    "HS-ESS3-2",
    "HS-ESS3-3",
    "SEP: Constructing Explanations",
    "SEP: Obtaining, Evaluating, and Communicating Information",
  ],
  vocabulary: [
    {
      term: "Natural resource",
      definition: "Material or energy source from nature.",
    },
    {
      term: "Renewable resource",
      definition: "Replenished naturally: water, forests, solar.",
    },
    {
      term: "Nonrenewable resource",
      definition: "Finite: fossil fuels, minerals.",
    },
    { term: "Resource reserve", definition: "Known extractable amount." },
    {
      term: "Sustainable use",
      definition: "Using resources without depleting them.",
    },
    {
      term: "Overexploitation",
      definition: "Using resources faster than they renew.",
    },
    {
      term: "Human impact",
      definition: "Environmental change from human activity.",
    },
  ],
  concepts: [
    {
      id: "ess9-u8-resources",
      title: "Resource types and distribution",
      skill: "Classify resources and analyze their distribution.",
      lesson: {
        sections: [
          {
            heading: "Resource classification",
            body: "- **Renewable**: solar, wind, water, forests — replenished naturally.\n- **Nonrenewable**: fossil fuels, minerals — finite.\n- **Energy resources**: coal, oil, gas, nuclear, renewables.",
          },
          {
            heading: "Distribution",
            body: "Resources unevenly distributed:\n- Fossil fuels: concentrated deposits.\n- Minerals: geologically specific locations.\n- Water: uneven precipitation patterns.",
          },
        ],
        keyFormulas: [
          { name: "Renewable", statement: "Replenished naturally" },
          { name: "Nonrenewable", statement: "Finite supply" },
          { name: "Distribution", statement: "Uneven geographically" },
        ],
        workedExample: {
          problem: "Is solar energy renewable or nonrenewable?",
          solution: "Renewable — continuously available.",
        },
      },
      questions: [
        {
          id: "ess9-u8-resources-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a renewable resource?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Coal" },
              { id: "b", text: "Solar energy" },
              { id: "c", text: "Oil" },
              { id: "d", text: "Natural gas" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Renewable",
                statement: "Replenished naturally.",
              },
            ],
            steps: [
              { reasoning: "Solar = renewable.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Solar energy",
            commonErrors: ["Coal."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u8-resources-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why are fossil fuels nonrenewable?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Fossil fuels",
                statement: "Finite formation time.",
              },
            ],
            steps: [
              {
                reasoning: "Formed over millions of years → finite.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Formed over millions of years → finite.",
            commonErrors: ["Renewable."],
            examinerNote: "A1 for explanation.",
          },
        },
        {
          id: "ess9-u8-resources-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How are resources distributed geographically?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Distribution", statement: "Uneven." },
            ],
            steps: [
              {
                reasoning: "Fossil fuels: concentrated deposits.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Minerals: geologically specific.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Water: uneven precipitation.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: geographically uneven.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Uneven — concentrated deposits.",
            commonErrors: ["Even distribution."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u8-resources-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare renewable and nonrenewable resources.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Resources",
                statement: "Different characteristics.",
              },
            ],
            steps: [
              {
                reasoning: "Renewable: replenished, unlimited.",
                marks: 3,
                markCode: "B",
              },
              {
                reasoning: "Nonrenewable: finite, depletable.",
                marks: 3,
                markCode: "B",
              },
              {
                reasoning: "Answer: replenishment vs depletion.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Renewable = replenished; nonrenewable = finite.",
            commonErrors: ["Same."],
            examinerNote: "B3 for each + A1.",
          },
        },
      ],
    },
    {
      id: "ess9-u8-sustainability",
      title: "Resource use and sustainability",
      skill: "Analyze sustainable resource use and human impact.",
      lesson: {
        sections: [
          {
            heading: "Sustainable use",
            body: "- **Renewable resources**: use rate ≤ regeneration rate.\n- **Nonrenewable**: conserve, recycle, substitute.\n- **Efficiency**: reduce waste, improve technology.",
          },
          {
            heading: "Human impacts",
            body: "- **Deforestation**: habitat loss, soil erosion.\n- **Overfishing**: fishery collapse.\n- **Pollution**: water, air, soil contamination.\n- **Climate change**: resource stress.",
          },
        ],
        keyFormulas: [
          { name: "Sustainable", statement: "Use ≤ regeneration" },
          { name: "Impacts", statement: "Deforestation, pollution" },
          { name: "Efficiency", statement: "Reduce waste" },
        ],
        workedExample: {
          problem: "What's sustainable forestry?",
          solution: "Harvest rate ≤ tree growth rate.",
        },
      },
      questions: [
        {
          id: "ess9-u8-sustain-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does sustainable resource use mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Use as much as possible" },
              { id: "b", text: "Use without depleting" },
              { id: "c", text: "Stop using resources" },
              { id: "d", text: "Only use nonrenewables" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sustainable",
                statement: "Without depletion.",
              },
            ],
            steps: [
              {
                reasoning: "Sustainable = without depletion.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Use without depleting",
            commonErrors: ["Maximize use."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u8-sustain-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two human impacts on resources.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Impacts",
                statement: "Multiple effects.",
              },
            ],
            steps: [
              {
                reasoning: "Deforestation, overfishing, pollution.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Deforestation, overfishing, pollution.",
            commonErrors: ["One impact."],
            examinerNote: "A1 for two.",
          },
        },
        {
          id: "ess9-u8-sustain-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does overfishing affect fish populations?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Overfishing",
                statement: "Population collapse.",
              },
            ],
            steps: [
              {
                reasoning: "Catch rate exceeds reproduction.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Population declines → collapse.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Ecosystem disruption.", marks: 1, markCode: "R" },
              {
                reasoning: "Answer: unsustainable harvest.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Overfishing → population collapse.",
            commonErrors: ["No effect."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u8-sustain-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe sustainable management strategies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Management",
                statement: "Multiple approaches.",
              },
            ],
            steps: [
              {
                reasoning: "Renewable: limit harvest rate.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Nonrenewable: conserve, recycle, substitute.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Efficiency: reduce waste.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Answer: multiple strategies.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Limit harvest, conserve, recycle, efficiency.",
            commonErrors: ["One strategy."],
            examinerNote: "B2 for each + A1.",
          },
        },
      ],
    },
    {
      id: "ess9-u8-hazards",
      title: "Natural hazards",
      skill: "Describe types and causes of natural hazards.",
      lesson: {
        sections: [
          {
            heading: "Hazard types",
            body: "- **Geological**: earthquakes, volcanoes, tsunamis, landslides.\n- **Atmospheric**: hurricanes, tornadoes, droughts, floods.\n- **Hydrological**: floods, droughts.",
          },
          {
            heading: "Causes",
            body: "- Earthquakes: plate boundaries, fault movement.\n- Volcanoes: magma rising.\n- Hurricanes: warm ocean water + atmospheric conditions.\n- Tsunamis: underwater earthquakes/landslides.",
          },
        ],
        keyFormulas: [
          { name: "Geological", statement: "Earthquakes, volcanoes" },
          { name: "Atmospheric", statement: "Hurricanes, tornadoes" },
          { name: "Causes", statement: "Plate tectonics, weather" },
        ],
        workedExample: {
          problem: "What causes most earthquakes?",
          solution: "Plate boundary movement.",
        },
      },
      questions: [
        {
          id: "ess9-u8-hazards-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes most earthquakes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Volcanoes" },
              { id: "b", text: "Plate boundary movement" },
              { id: "c", text: "Weather" },
              { id: "d", text: "Erosion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Earthquakes",
                statement: "Plate boundaries.",
              },
            ],
            steps: [
              {
                reasoning: "Plate movement = earthquakes.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Plate boundary movement",
            commonErrors: ["Volcanoes."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u8-hazards-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two types of natural hazards.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Hazards",
                statement: "Multiple types.",
              },
            ],
            steps: [
              {
                reasoning: "Geological, atmospheric, hydrological.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Geological, atmospheric, hydrological.",
            commonErrors: ["One type."],
            examinerNote: "A1 for two.",
          },
        },
        {
          id: "ess9-u8-hazards-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How are hurricanes formed?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Hurricanes",
                statement: "Warm ocean + atmosphere.",
              },
            ],
            steps: [
              {
                reasoning: "Warm ocean water evaporates.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Condensation releases heat → storm.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Earth rotation organizes spiral.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: warm water + rotation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Warm ocean + rotation → hurricane.",
            commonErrors: ["Cold water."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u8-hazards-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe geological hazards.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Geological",
                statement: "Multiple hazards.",
              },
            ],
            steps: [
              {
                reasoning: "Earthquakes: plate movement.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Volcanoes: magma eruption.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Tsunamis: underwater events.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Landslides: slope failure.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "Earthquakes, volcanoes, tsunamis, landslides.",
            commonErrors: ["One hazard."],
            examinerNote: "B2 for each hazard.",
          },
        },
      ],
    },
    {
      id: "ess9-u8-mitigation",
      title: "Hazard mitigation and preparedness",
      skill: "Describe strategies to reduce hazard risks.",
      lesson: {
        sections: [
          {
            heading: "Mitigation strategies",
            body: "- **Engineering**: earthquake-resistant buildings, levees.\n- **Planning**: evacuation routes, emergency supplies.\n- **Early warning**: seismic networks, weather alerts.\n- **Land use**: avoid floodplains, hazard zones.",
          },
          {
            heading: "Preparedness",
            body: "- Emergency kits.\n- Communication plans.\n- Community training.\n- Insurance.",
          },
        ],
        keyFormulas: [
          { name: "Engineering", statement: "Resistant buildings" },
          { name: "Planning", statement: "Evacuation routes" },
          { name: "Warning", statement: "Early alerts" },
        ],
        workedExample: {
          problem: "How do buildings resist earthquakes?",
          solution: "Flexible design absorbs energy.",
        },
      },
      questions: [
        {
          id: "ess9-u8-mitigation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What's hazard mitigation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Causing hazards" },
              { id: "b", text: "Reducing hazard risks" },
              { id: "c", text: "Ignoring hazards" },
              { id: "d", text: "Predicting exact timing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mitigation",
                statement: "Reduce risks.",
              },
            ],
            steps: [
              {
                reasoning: "Mitigation = reduce risks.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Reducing hazard risks",
            commonErrors: ["Causing."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u8-mitigation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two hazard mitigation strategies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Mitigation",
                statement: "Multiple approaches.",
              },
            ],
            steps: [
              {
                reasoning: "Engineering, planning, early warning.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Engineering, planning, early warning.",
            commonErrors: ["One strategy."],
            examinerNote: "A1 for two.",
          },
        },
        {
          id: "ess9-u8-mitigation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do early warning systems help?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Warning",
                statement: "Advance notice.",
              },
            ],
            steps: [
              { reasoning: "Detect hazards early.", marks: 1, markCode: "R" },
              {
                reasoning: "Alert population in advance.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Allow evacuation/preparation.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: advance notice saves lives.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Early detection → advance warning → evacuation.",
            commonErrors: ["No benefit."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u8-mitigation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe engineering vs planning mitigation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Approaches",
                statement: "Different strategies.",
              },
            ],
            steps: [
              {
                reasoning: "Engineering: resistant buildings, levees.",
                marks: 3,
                markCode: "B",
              },
              {
                reasoning: "Planning: evacuation, land use, supplies.",
                marks: 3,
                markCode: "B",
              },
              {
                reasoning: "Answer: physical vs procedural.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Engineering = physical; planning = procedural.",
            commonErrors: ["Same."],
            examinerNote: "B3 for each + A1.",
          },
        },
      ],
    },
    {
      id: "ess9-u8-human",
      title: "Human activity and Earth systems",
      skill: "Analyze how human activities affect Earth systems.",
      lesson: {
        sections: [
          {
            heading: "Human impacts",
            body: "- **Land use**: deforestation, urbanization, agriculture.\n- **Water use**: pollution, over-extraction.\n- **Air pollution**: emissions, acid rain.\n- **Climate change**: greenhouse gases.",
          },
          {
            heading: "System interactions",
            body: "Human activities affect multiple systems simultaneously:\n- Deforestation → less CO₂ absorption + soil erosion.\n- Pollution → water + air + soil contamination.",
          },
        ],
        keyFormulas: [
          { name: "Land", statement: "Deforestation, urbanization" },
          { name: "Water", statement: "Pollution, extraction" },
          { name: "Air", statement: "Emissions, acid rain" },
        ],
        workedExample: {
          problem: "How does deforestation affect climate?",
          solution: "Less CO₂ absorption + releases stored carbon.",
        },
      },
      questions: [
        {
          id: "ess9-u8-human-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How does deforestation affect climate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cools climate" },
              { id: "b", text: "Reduces CO₂ absorption" },
              { id: "c", text: "No effect" },
              { id: "d", text: "Releases oxygen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Deforestation",
                statement: "Less CO₂ absorption.",
              },
            ],
            steps: [
              {
                reasoning: "Less trees → less CO₂ absorption.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Reduces CO₂ absorption",
            commonErrors: ["Cools."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u8-human-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two human impacts on Earth systems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Impacts",
                statement: "Multiple effects.",
              },
            ],
            steps: [
              {
                reasoning: "Land use, water pollution, air pollution.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Land use, water pollution, air pollution.",
            commonErrors: ["One impact."],
            examinerNote: "A1 for two.",
          },
        },
        {
          id: "ess9-u8-human-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do human activities affect multiple Earth systems?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Systems",
                statement: "Multiple affected.",
              },
            ],
            steps: [
              {
                reasoning: "Deforestation → atmosphere + biosphere + soil.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Pollution → water + air + soil.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Climate change → all systems.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: interconnected effects.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Human activities affect multiple systems.",
            commonErrors: ["One system."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u8-human-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe human impacts on each Earth system.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Systems",
                statement: "Multiple impacts.",
              },
            ],
            steps: [
              {
                reasoning: "Atmosphere: emissions, pollution.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Hydrosphere: water pollution, extraction.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Geosphere: mining, land use.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Biosphere: habitat loss, extinction.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "All systems affected: atmosphere, water, land, biosphere.",
            commonErrors: ["One system."],
            examinerNote: "B2 for each system.",
          },
        },
      ],
    },
  ],
};
