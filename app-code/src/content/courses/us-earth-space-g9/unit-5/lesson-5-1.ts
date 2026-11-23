import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "ess9-u5-lesson-5-1",
  code: "5-1",
  title: "Earth's Systems Interactions",
  goal: "I CAN describe Earth's interconnected systems and how they interact.",
  standards: [
    "HS-ESS2-4",
    "SEP: Developing and Using Models",
    "CCC: Systems and System Models",
  ],
  vocabulary: [
    {
      term: "Earth system",
      definition:
        "Interconnected components: geosphere, hydrosphere, atmosphere, biosphere.",
    },
    { term: "Geosphere", definition: "Solid Earth: rocks, soil, minerals." },
    {
      term: "Hydrosphere",
      definition: "All water: oceans, lakes, rivers, groundwater, ice.",
    },
    { term: "Atmosphere", definition: "Gaseous envelope surrounding Earth." },
    { term: "Biosphere", definition: "All living organisms." },
    {
      term: "Feedback loop",
      definition: "Process where output affects input.",
    },
    {
      term: "System boundary",
      definition: "Defined limit of system analysis.",
    },
  ],
  concepts: [
    {
      id: "ess9-u5-systems",
      title: "Earth's systems",
      skill: "Describe the four major Earth systems and their interactions.",
      lesson: {
        sections: [
          {
            heading: "Four Earth systems",
            body: "- **Geosphere**: solid Earth — rocks, soil, minerals, landforms.\n- **Hydrosphere**: all water — oceans (97%), ice, groundwater, atmosphere water.\n- **Atmosphere**: gaseous envelope — 78% N₂, 21% O₂, trace gases.\n- **Biosphere**: all life — from bacteria to humans.",
          },
          {
            heading: "System interactions",
            body: "Systems are interconnected:\n- Water cycle connects hydrosphere, atmosphere, geosphere.\n- Carbon cycle connects all four.\n- Plate tectonics affects climate, oceans, life.",
          },
        ],
        keyFormulas: [
          { name: "Geosphere", statement: "Solid Earth" },
          { name: "Hydrosphere", statement: "All water" },
          { name: "Atmosphere", statement: "Gaseous envelope" },
          { name: "Biosphere", statement: "All life" },
        ],
        workedExample: {
          problem: "How does the water cycle connect Earth's systems?",
          solution:
            "Evaporation (hydrosphere→atmosphere), condensation, precipitation (atmosphere→geosphere/hydrosphere).",
        },
      },
      questions: [
        {
          id: "ess9-u5-systems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are Earth's four major systems?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Land, water, air, fire" },
              {
                id: "b",
                text: "Geosphere, hydrosphere, atmosphere, biosphere",
              },
              { id: "c", text: "Solid, liquid, gas, plasma" },
              { id: "d", text: "Core, mantle, crust, surface" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Systems",
                statement: "Geosphere, hydrosphere, atmosphere, biosphere.",
              },
            ],
            steps: [
              {
                reasoning: "Four systems: geo, hydro, atmo, bio.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "**(b)** Geosphere, hydrosphere, atmosphere, biosphere",
            commonErrors: ["Land/water/air/fire."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u5-systems-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What percentage of Earth's water is in oceans?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Ocean water", statement: "~97%." },
            ],
            steps: [
              {
                reasoning: "Oceans contain ~97% of Earth's water.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "~97%.",
            commonErrors: ["50%."],
            examinerNote: "A1 for ~97%.",
          },
        },
        {
          id: "ess9-u5-systems-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does the water cycle connect Earth's systems?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Water cycle",
                statement: "Connects hydrosphere, atmosphere, geosphere.",
              },
            ],
            steps: [
              {
                reasoning: "Evaporation: hydrosphere → atmosphere.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Condensation/precipitation: atmosphere → surface.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Runoff/groundwater: surface → hydrosphere.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: connects all systems.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Water cycle connects hydrosphere, atmosphere, geosphere.",
            commonErrors: ["One system only."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u5-systems-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe Earth's four systems and give one example of interaction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Systems",
                statement: "Four interconnected systems.",
              },
            ],
            steps: [
              {
                reasoning: "Geosphere: solid Earth (rocks, soil).",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Hydrosphere: all water (oceans, ice).",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Atmosphere: gases (N₂, O₂).",
                marks: 2,
                markCode: "B",
              },
              { reasoning: "Biosphere: all life.", marks: 1, markCode: "B" },
              {
                reasoning: "Interaction example: water cycle or carbon cycle.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Four systems + interaction example.",
            commonErrors: ["No interaction."],
            examinerNote: "B2 for each system + A1 for interaction.",
          },
        },
      ],
    },
    {
      id: "ess9-u5-feedback",
      title: "Feedback loops and system dynamics",
      skill: "Explain feedback mechanisms in Earth systems.",
      lesson: {
        sections: [
          {
            heading: "Feedback loops",
            body: "**Positive feedback**: amplifies change (ice-albedo effect).\n**Negative feedback**: stabilizes system (carbon cycle regulation).",
          },
          {
            heading: "Examples",
            body: "- **Ice-albedo**: warming → less ice → less reflection → more warming (positive).\n- **Carbon cycle**: more CO₂ → more plant growth → more CO₂ absorption (negative).\n- **Thermostat**: Earth's systems maintain equilibrium.",
          },
        ],
        keyFormulas: [
          { name: "Positive", statement: "Amplifies" },
          { name: "Negative", statement: "Stabilizes" },
          { name: "Ice-albedo", statement: "Positive feedback" },
        ],
        workedExample: {
          problem: "Is ice-albedo positive or negative feedback?",
          solution:
            "Positive — warming reduces ice, reducing reflection, causing more warming.",
        },
      },
      questions: [
        {
          id: "ess9-u5-feedback-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is positive feedback?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stabilizes system" },
              { id: "b", text: "Amplifies change" },
              { id: "c", text: "Prevents change" },
              { id: "d", text: "Random" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Positive feedback",
                statement: "Amplifies change.",
              },
            ],
            steps: [
              { reasoning: "Positive = amplifies.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Amplifies change",
            commonErrors: ["Stabilizes."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u5-feedback-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Is ice-albedo positive or negative feedback?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Ice-albedo",
                statement: "Positive feedback.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Warming → less ice → less reflection → more warming.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Positive feedback.",
            commonErrors: ["Negative."],
            examinerNote: "A1 for positive.",
          },
        },
        {
          id: "ess9-u5-feedback-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Give an example of negative feedback in Earth's systems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Negative feedback",
                statement: "Stabilizes system.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Carbon cycle: more CO₂ → more plants → more absorption.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Cloud formation: warming → more clouds → cooling.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Ocean heat absorption: warming → more heat uptake.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Answer: stabilizing mechanisms.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Carbon cycle, clouds, ocean heat — stabilizing.",
            commonErrors: ["Positive feedback."],
            examinerNote: "B1 for each + A1.",
          },
        },
        {
          id: "ess9-u5-feedback-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Explain positive vs negative feedback with examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Positive",
                statement: "Amplifies change.",
              },
              {
                kind: "property",
                name: "Negative",
                statement: "Stabilizes system.",
              },
            ],
            steps: [
              {
                reasoning: "Positive: ice-albedo, amplifies warming.",
                marks: 3,
                markCode: "B",
              },
              {
                reasoning: "Negative: carbon cycle, stabilizes climate.",
                marks: 3,
                markCode: "B",
              },
              {
                reasoning: "Answer: positive amplifies, negative stabilizes.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Positive amplifies (ice-albedo); negative stabilizes (carbon cycle).",
            commonErrors: ["Swapped."],
            examinerNote: "B3 for each + A1.",
          },
        },
      ],
    },
    {
      id: "ess9-u5-cycles",
      title: "Earth's cycles",
      skill: "Describe major cycles connecting Earth's systems.",
      lesson: {
        sections: [
          {
            heading: "Major cycles",
            body: "- **Water cycle**: evaporation, condensation, precipitation, runoff.\n- **Carbon cycle**: photosynthesis, respiration, combustion, ocean absorption.\n- **Rock cycle**: igneous, sedimentary, metamorphic rocks.\n- **Nitrogen cycle**: fixation, nitrification, denitrification.",
          },
          {
            heading: "Cycle connections",
            body: "Cycles connect all four systems.\nWater cycle: atmosphere ↔ hydrosphere ↔ geosphere.\nCarbon cycle: atmosphere ↔ biosphere ↔ geosphere.\nRock cycle: geosphere processes.",
          },
        ],
        keyFormulas: [
          {
            name: "Water",
            statement: "Evaporation, condensation, precipitation",
          },
          {
            name: "Carbon",
            statement: "Photosynthesis, respiration, combustion",
          },
          { name: "Rock", statement: "Igneous, sedimentary, metamorphic" },
        ],
        workedExample: {
          problem: "Which cycle involves all four systems?",
          solution:
            "Carbon cycle — atmosphere (CO₂), biosphere (plants), geosphere (fossil fuels), hydrosphere (ocean).",
        },
      },
      questions: [
        {
          id: "ess9-u5-cycles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are Earth's major cycles?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Day/night only" },
              { id: "b", text: "Water, carbon, rock, nitrogen" },
              { id: "c", text: "Seasons only" },
              { id: "d", text: "Tides only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Cycles",
                statement: "Water, carbon, rock, nitrogen.",
              },
            ],
            steps: [
              { reasoning: "Four major cycles.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Water, carbon, rock, nitrogen",
            commonErrors: ["Day/night."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u5-cycles-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which cycle involves all four Earth systems?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Carbon cycle",
                statement: "All four systems.",
              },
            ],
            steps: [
              {
                reasoning: "Carbon cycle connects all four.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Carbon cycle.",
            commonErrors: ["Water cycle."],
            examinerNote: "A1 for carbon.",
          },
        },
        {
          id: "ess9-u5-cycles-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the rock cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Rock cycle",
                statement: "Igneous → sedimentary → metamorphic → igneous.",
              },
            ],
            steps: [
              { reasoning: "Igneous: cooled magma.", marks: 1, markCode: "B" },
              {
                reasoning: "Sedimentary: compacted sediments.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Metamorphic: heat/pressure changed.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Answer: continuous rock transformation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Igneous → sedimentary → metamorphic → igneous.",
            commonErrors: ["One type only."],
            examinerNote: "B1 for each + A1.",
          },
        },
        {
          id: "ess9-u5-cycles-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Name and describe two Earth cycles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Cycles",
                statement: "Multiple cycles.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Water cycle: evaporation → condensation → precipitation.",
                marks: 3,
                markCode: "B",
              },
              {
                reasoning:
                  "Carbon cycle: photosynthesis → respiration → combustion.",
                marks: 3,
                markCode: "B",
              },
              {
                reasoning: "Answer: two complete cycles described.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Water cycle + carbon cycle (or rock/nitrogen).",
            commonErrors: ["Incomplete descriptions."],
            examinerNote: "B3 for each + A1.",
          },
        },
      ],
    },
  ],
};
