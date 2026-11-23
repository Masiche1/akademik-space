import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "ess9-u5-lesson-5-3",
  code: "5-3",
  title: "Hydrosphere and Water Cycle",
  goal: "I CAN describe Earth's water distribution and the water cycle processes.",
  standards: [
    "HS-ESS2-4",
    "HS-ESS2-5",
    "SEP: Developing and Using Models",
    "CCC: Systems and System Models",
  ],
  vocabulary: [
    { term: "Hydrosphere", definition: "All water on Earth." },
    { term: "Evaporation", definition: "Liquid → gas phase change." },
    { term: "Condensation", definition: "Gas → liquid phase change." },
    { term: "Precipitation", definition: "Water falling: rain, snow, hail." },
    { term: "Runoff", definition: "Surface water flowing to rivers/oceans." },
    { term: "Infiltration", definition: "Water soaking into ground." },
    { term: "Groundwater", definition: "Water stored in soil/rock pores." },
  ],
  concepts: [
    {
      id: "ess9-u5-hydrosphere",
      title: "Hydrosphere distribution",
      skill: "Describe Earth's water distribution and availability.",
      lesson: {
        sections: [
          {
            heading: "Water distribution",
            body: "- **Oceans**: 97% (salt water)\n- **Ice caps/glaciers**: 2%\n- **Freshwater**: 1% (lakes, rivers, groundwater)\n- **Atmosphere**: <0.01%",
          },
          {
            heading: "Freshwater challenge",
            body: "Only ~0.3% of Earth's water is accessible freshwater.\nMost freshwater is locked in ice sheets.\nGroundwater is major freshwater source.",
          },
        ],
        keyFormulas: [
          { name: "Oceans", statement: "97%" },
          { name: "Ice", statement: "2%" },
          { name: "Freshwater", statement: "1%" },
        ],
        workedExample: {
          problem: "What percentage of Earth's water is fresh?",
          solution: "~1% (including ice). Accessible fresh ~0.3%.",
        },
      },
      questions: [
        {
          id: "ess9-u5-hydro-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What percentage of Earth's water is in oceans?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "50%" },
              { id: "b", text: "75%" },
              { id: "c", text: "97%" },
              { id: "d", text: "99%" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "fact", name: "Oceans", statement: "97%." }],
            steps: [{ reasoning: "Oceans = 97%.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** 97%",
            commonErrors: ["50%."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "ess9-u5-hydro-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What percentage of Earth's water is fresh?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Freshwater",
                statement: "~1% (0.3% accessible).",
              },
            ],
            steps: [
              {
                reasoning: "Freshwater ~1%, accessible ~0.3%.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "~1% (0.3% accessible).",
            commonErrors: ["50%."],
            examinerNote: "A1 for ~1%.",
          },
        },
        {
          id: "ess9-u5-hydro-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is freshwater a limited resource?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Freshwater",
                statement: "Only 1% of water; uneven distribution.",
              },
            ],
            steps: [
              {
                reasoning: "Only ~1% of Earth's water is fresh.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Most fresh is locked in ice.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Distribution is uneven globally.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: scarcity + uneven distribution.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Only 1% fresh; uneven distribution.",
            commonErrors: ["Abundant."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u5-hydro-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe Earth's water distribution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Distribution",
                statement: "97% ocean, 2% ice, 1% fresh.",
              },
            ],
            steps: [
              { reasoning: "Oceans: 97% salt water.", marks: 2, markCode: "B" },
              { reasoning: "Ice caps: 2%.", marks: 2, markCode: "B" },
              {
                reasoning: "Freshwater: 1% (lakes, rivers, groundwater).",
                marks: 2,
                markCode: "B",
              },
              { reasoning: "Atmosphere: <0.01%.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "97% ocean, 2% ice, 1% fresh, <0.01% atmosphere.",
            commonErrors: ["Wrong percentages."],
            examinerNote: "B2 for each category.",
          },
        },
      ],
    },
    {
      id: "ess9-u5-watercycle",
      title: "Water cycle processes",
      skill: "Describe water cycle processes and their connections.",
      lesson: {
        sections: [
          {
            heading: "Water cycle processes",
            body: "1. **Evaporation**: liquid → gas (sun heats water).\n2. **Condensation**: gas → liquid (clouds form).\n3. **Precipitation**: water falls (rain, snow).\n4. **Runoff/Infiltration**: surface vs groundwater.",
          },
          {
            heading: "Water cycle connections",
            body: "Water cycle connects hydrosphere, atmosphere, geosphere, biosphere.\nPlants transpire water → atmosphere.\nGroundwater feeds rivers → oceans.",
          },
        ],
        keyFormulas: [
          { name: "Evaporation", statement: "Liquid → gas" },
          { name: "Condensation", statement: "Gas → liquid" },
          { name: "Precipitation", statement: "Rain, snow, hail" },
        ],
        workedExample: {
          problem: "What are the main water cycle processes?",
          solution:
            "Evaporation, condensation, precipitation, runoff/infiltration.",
        },
      },
      questions: [
        {
          id: "ess9-u5-cycle-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is evaporation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gas → liquid" },
              { id: "b", text: "Liquid → gas" },
              { id: "c", text: "Solid → gas" },
              { id: "d", text: "Liquid → solid" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evaporation",
                statement: "Liquid → gas.",
              },
            ],
            steps: [
              {
                reasoning: "Evaporation = liquid → gas.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Liquid → gas",
            commonErrors: ["Gas → liquid."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u5-cycle-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the four main water cycle processes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Processes",
                statement: "Evaporation, condensation, precipitation, runoff.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evaporation, condensation, precipitation, runoff/infiltration.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Evaporation, condensation, precipitation, runoff.",
            commonErrors: ["Missing one."],
            examinerNote: "A1 for all four.",
          },
        },
        {
          id: "ess9-u5-cycle-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does the water cycle connect Earth's systems?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Connections",
                statement: "All four systems.",
              },
            ],
            steps: [
              {
                reasoning: "Hydrosphere: water source.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Atmosphere: evaporation, clouds.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Geosphere: runoff, infiltration, groundwater.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Biosphere: plant transpiration.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Connects all four systems.",
            commonErrors: ["One system."],
            examinerNote: "B1 for each + A1.",
          },
        },
        {
          id: "ess9-u5-cycle-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe the water cycle step by step.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Cycle",
                statement: "Continuous process.",
              },
            ],
            steps: [
              {
                reasoning: "Evaporation: sun heats water → gas.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Condensation: gas → clouds.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Precipitation: rain/snow falls.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Runoff/infiltration: surface or groundwater.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "Evaporation → condensation → precipitation → runoff.",
            commonErrors: ["Incomplete cycle."],
            examinerNote: "B2 for each step.",
          },
        },
      ],
    },
    {
      id: "ess9-u5-groundwater",
      title: "Groundwater and water resources",
      skill: "Describe groundwater systems and water resource challenges.",
      lesson: {
        sections: [
          {
            heading: "Groundwater",
            body: "Water stored in soil/rock pores and fractures.\n- **Aquifer**: underground water-bearing layer.\n- **Water table**: top of saturated zone.\n- Wells tap into aquifers.",
          },
          {
            heading: "Water resources",
            body: "Challenges:\n- Over-extraction → depletion.\n- Pollution → contamination.\n- Climate change → drought.\n- Uneven distribution → scarcity.",
          },
        ],
        keyFormulas: [
          { name: "Aquifer", statement: "Water-bearing layer" },
          { name: "Water table", statement: "Top of saturated zone" },
          { name: "Challenges", statement: "Depletion, pollution, drought" },
        ],
        workedExample: {
          problem: "What is an aquifer?",
          solution: "Underground layer of water-bearing rock/soil.",
        },
      },
      questions: [
        {
          id: "ess9-u5-gw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an aquifer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "River" },
              { id: "b", text: "Underground water-bearing layer" },
              { id: "c", text: "Lake" },
              { id: "d", text: "Ocean" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Aquifer",
                statement: "Underground water layer.",
              },
            ],
            steps: [
              {
                reasoning: "Aquifer = underground water.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Underground water-bearing layer",
            commonErrors: ["River."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u5-gw-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the water table?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Water table",
                statement: "Top of saturated zone.",
              },
            ],
            steps: [
              {
                reasoning: "Water table = top of saturated zone.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Top of saturated zone.",
            commonErrors: ["Surface."],
            examinerNote: "A1 for correct definition.",
          },
        },
        {
          id: "ess9-u5-gw-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What are major water resource challenges?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Challenges",
                statement: "Multiple threats.",
              },
            ],
            steps: [
              {
                reasoning: "Over-extraction → depletion.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Pollution → contamination.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Climate change → drought.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Answer: multiple challenges.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Depletion, pollution, drought, uneven distribution.",
            commonErrors: ["No challenges."],
            examinerNote: "B1 for each + A1.",
          },
        },
        {
          id: "ess9-u5-gw-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Explain how groundwater systems work.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Groundwater",
                statement: "Aquifer system.",
              },
            ],
            steps: [
              {
                reasoning: "Water infiltrates soil → groundwater.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Aquifer stores water in pores/fractures.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Water table = top of saturated zone.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Wells tap into aquifers.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "Infiltration → aquifer → water table → wells.",
            commonErrors: ["Surface only."],
            examinerNote: "B2 for each step.",
          },
        },
      ],
    },
  ],
};
