import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "s7-u8-lesson-8-2",
  code: "8-2",
  title: "Earth's Systems and Interactions",
  goal: "I CAN describe Earth's four major systems (geosphere, hydrosphere, atmosphere, biosphere) and explain how they interact and exchange matter and energy.",
  standards: [
    "MS-ESS2-1",
    "MS-ESS2-2",
    "SEP: Developing and Using Models",
    "SEP: Constructing Explanations",
  ],
  vocabulary: [
    {
      term: "Geosphere",
      definition: "The solid Earth: crust, mantle, core; rocks and landforms.",
    },
    {
      term: "Hydrosphere",
      definition:
        "All water on Earth: oceans, lakes, rivers, groundwater, ice.",
    },
    { term: "Atmosphere", definition: "The layer of gases surrounding Earth." },
    {
      term: "Biosphere",
      definition:
        "All living things and their interactions with the environment.",
    },
    {
      term: "Earth system",
      definition: "The interacting systems that make up our planet.",
    },
    {
      term: "Matter cycle",
      definition: "The movement of matter among Earth's systems.",
    },
    {
      term: "Energy flow",
      definition:
        "The movement of energy from the Sun through Earth's systems.",
    },
  ],
  concepts: [
    {
      id: "s7-u8-four-systems",
      title: "Earth's four major systems",
      skill: "Describe the geosphere, hydrosphere, atmosphere and biosphere.",
      lesson: {
        sections: [
          {
            heading: "The four spheres",
            body: "Earth consists of four major interacting systems:\n\n- **Geosphere**: the solid Earth — crust, mantle, core, rocks, mountains, ocean basins.\n- **Hydrosphere**: all water — oceans (~97%), ice caps, lakes, rivers, groundwater, water vapor.\n- **Atmosphere**: the gaseous envelope — ~78% nitrogen, ~21% oxygen, ~1% other gases.\n- **Biosphere**: all living organisms — from deep-sea vents to mountain tops.",
          },
          {
            heading: "Scale of each system",
            body: "- Geosphere: extends from surface to center (~6,371 km radius).\n- Hydrosphere: covers ~71% of surface; oceans dominate.\n- Atmosphere: extends ~100 km up (most mass in lowest 10 km).\n- Biosphere: thin layer where life exists — surface to deep ocean vents.",
          },
        ],
        keyFormulas: [
          {
            name: "Four systems",
            statement:
              "Geosphere (solid), hydrosphere (water), atmosphere (gas), biosphere (life).",
          },
          {
            name: "Hydrosphere coverage",
            statement: "~71% of Earth's surface is water.",
          },
          {
            name: "Atmosphere composition",
            statement: "~78% N2, ~21% O2, ~1% other gases.",
          },
        ],
        workedExample: {
          problem: "Classify: a mountain, the ocean, air, a tree.",
          solution:
            "Mountain = geosphere; ocean = hydrosphere; air = atmosphere; tree = biosphere.",
        },
      },
      questions: [
        {
          id: "s7-u8-systems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which system includes all living things?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Geosphere" },
              { id: "b", text: "Hydrosphere" },
              { id: "c", text: "Atmosphere" },
              { id: "d", text: "Biosphere" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Biosphere",
                statement: "All living organisms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The biosphere includes all living things and their interactions.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** Biosphere.",
            commonErrors: [
              "Choosing (a): geosphere is non-living solid Earth.",
            ],
          },
        },
        {
          id: "s7-u8-systems-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the four major systems of Earth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Earth systems",
                statement: "Geosphere, hydrosphere, atmosphere, biosphere.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Geosphere: solid Earth — crust, mantle, core, rocks.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Hydrosphere: all water — oceans, ice, groundwater, vapor.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Atmosphere: gaseous envelope; biosphere: all living things.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Geosphere (solid), hydrosphere (water), atmosphere (gas), biosphere (life).",
            commonErrors: ["Missing one system or mixing them up."],
          },
        },
        {
          id: "s7-u8-systems-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the hydrosphere and atmosphere interact.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Water cycle",
                statement: "Water moves between hydrosphere and atmosphere.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evaporation: water moves from hydrosphere to atmosphere as vapor.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Condensation: vapor forms clouds in atmosphere.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Precipitation: water returns to hydrosphere as rain/snow.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "This continuous exchange drives weather and climate.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Water evaporates to atmosphere, condenses into clouds, returns as precipitation — water cycle.",
            commonErrors: ["Saying water is only in one system."],
          },
        },
        {
          id: "s7-u8-systems-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A forest ecosystem involves all four Earth systems.",
          parts: [
            {
              label: "a",
              prompt: "Give an example of the geosphere in a forest.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Give an example of the hydrosphere.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Give an example of the atmosphere.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Give an example of the biosphere.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "System interactions",
                statement: "All systems interact in ecosystems.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Soil, rocks, tree roots in ground — geosphere.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Rain, soil moisture, streams — hydrosphere.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Air, oxygen, CO2, wind — atmosphere.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "Trees, animals, fungi, bacteria — biosphere.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) Soil/rocks (b) Rain/streams (c) Air/CO2 (d) Trees/animals/fungi.",
            commonErrors: ["Confusing hydrosphere and atmosphere examples."],
          },
        },
      ],
    },
    {
      id: "s7-u8-interactions",
      title: "Interactions Between Systems",
      skill:
        "Explain how matter and energy move among Earth's systems and how human activities affect these interactions.",
      lesson: {
        sections: [
          {
            heading: "Matter cycling",
            body: "Matter moves continuously among Earth's systems:\n\n- **Carbon**: atmosphere (CO2) → biosphere (photosynthesis) → organisms → back to atmosphere (respiration).\n- **Water**: hydrosphere → atmosphere (evaporation) → hydrosphere (precipitation).\n- **Nitrogen**: atmosphere (N2) → soil (fixation) → plants → animals → decomposers → atmosphere.",
          },
          {
            heading: "Energy flow",
            body: "Energy flows one way through Earth's systems:\n\n- **Solar energy** enters atmosphere and warms Earth's surface.\n- **Producers** capture solar energy through photosynthesis.\n- **Consumers** get energy by eating producers or other consumers.\n- **Heat** is released back to atmosphere and space.\n\nUnlike matter, energy is not recycled — it flows through and is lost as heat.",
          },
          {
            heading: "Human impact",
            body: "Human activities disrupt these cycles:\n\n- Burning fossil fuels adds CO2 to atmosphere.\n- Deforestation reduces photosynthesis and increases CO2.\n- Pollution contaminates hydrosphere and atmosphere.\n- Overuse of resources depletes them faster than they cycle.",
          },
        ],
        keyFormulas: [
          {
            name: "Matter cycles",
            statement: "Carbon, water, nitrogen cycle among systems.",
          },
          {
            name: "Energy flows",
            statement: "Solar → producers → consumers → heat; not recycled.",
          },
          {
            name: "Human impact",
            statement: "Fossil fuels, deforestation, pollution disrupt cycles.",
          },
        ],
        workedExample: {
          problem: "How does burning fossil fuels affect the carbon cycle?",
          solution:
            "It releases stored carbon as CO2 to atmosphere, increasing greenhouse gases and disrupting the natural balance.",
        },
      },
      questions: [
        {
          id: "s7-u8-interact-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which resource is recycled through Earth's systems?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Energy" },
              { id: "b", text: "Carbon" },
              { id: "c", text: "Heat" },
              { id: "d", text: "Sunlight" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Matter vs energy",
                statement: "Matter cycles; energy flows and is lost.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Carbon is recycled through the carbon cycle; energy flows one way and is lost as heat.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Carbon.",
            commonErrors: ["Choosing (a): energy flows, doesn't cycle."],
          },
        },
        {
          id: "s7-u8-interact-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between matter cycling and energy flow in Earth's systems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Matter vs energy",
                statement: "Matter cycles; energy flows one way.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Matter (carbon, water, nitrogen) cycles among systems and is reused.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Energy flows from Sun through organisms and is lost as heat.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Energy is not recycled — it enters as sunlight and exits as heat.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Matter cycles and is reused; energy flows one way and is lost as heat.",
            commonErrors: ["Saying energy is recycled."],
          },
        },
        {
          id: "s7-u8-interact-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how deforestation affects multiple Earth systems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Human impact",
                statement:
                  "Deforestation affects atmosphere, hydrosphere, biosphere, geosphere.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Biosphere: loses habitat and biodiversity; animals lose homes.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Atmosphere: less photosynthesis → more CO2; less transpiration → less rain.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Hydrosphere: reduced transpiration affects water cycle; soil erosion increases runoff.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Geosphere: soil erosion removes nutrients and degrades land.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Deforestation affects all systems: less photosynthesis, reduced rainfall, soil erosion, habitat loss.",
            commonErrors: ["Saying it only affects the biosphere."],
          },
        },
        {
          id: "s7-u8-interact-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Trace energy flow through a forest ecosystem.",
          parts: [
            {
              label: "a",
              prompt: "Where does energy enter the ecosystem?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How does energy reach consumers?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "What happens to energy at each level?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Why can't energy be recycled like matter?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Energy flow",
                statement:
                  "Solar → producers → consumers → heat; not recycled.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Solar energy enters and is captured by plants via photosynthesis.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Herbivores eat plants; carnivores eat herbivores — energy passes up the food chain.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "~90% lost as heat at each level; only ~10% transferred.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Energy degrades to heat (less usable form) and is lost to space; cannot be reused.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Solar energy (b) Through food chain (c) 90% lost as heat (d) Energy degrades to heat, not recycled.",
            commonErrors: ["Saying energy is recycled."],
          },
        },
      ],
    },
    {
      id: "s7-u8-climate-weather",
      title: "Weather and Climate",
      skill:
        "Distinguish between weather and climate, describe factors affecting climate, and explain how Earth's systems influence both.",
      lesson: {
        sections: [
          {
            heading: "Weather vs climate",
            body: "- **Weather**: short-term atmospheric conditions (minutes to days) — temperature, precipitation, wind, humidity.\n- **Climate**: long-term average weather patterns over decades to centuries for a region.\n\nExample: 'It's raining today' = weather; 'This region has wet winters' = climate.",
          },
          {
            heading: "Factors affecting climate",
            body: "Climate is influenced by:\n\n- **Latitude**: distance from equator (equator = warm, poles = cold).\n- **Altitude**: higher elevation = colder.\n- **Proximity to water**: oceans moderate temperatures.\n- **Ocean currents**: warm/cold currents affect coastal climates.\n- **Greenhouse gases**: trap heat, warming the planet.",
          },
          {
            heading: "Earth's systems and climate",
            body: "The atmosphere, hydrosphere and biosphere interact to shape climate:\n\n- Ocean currents distribute heat.\n- The water cycle moves moisture and energy.\n- Vegetation affects albedo (reflectivity) and transpiration.\n- Human activities (burning fossil fuels, deforestation) are changing climate.",
          },
        ],
        keyFormulas: [
          { name: "Weather", statement: "Short-term atmospheric conditions." },
          { name: "Climate", statement: "Long-term average weather patterns." },
          {
            name: "Climate factors",
            statement:
              "Latitude, altitude, water proximity, currents, greenhouse gases.",
          },
        ],
        workedExample: {
          problem: "Why is it colder at higher elevations?",
          solution:
            "Air pressure decreases with altitude; less air means less heat retention, so temperatures drop.",
        },
      },
      questions: [
        {
          id: "s7-u8-climate-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is climate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Today's weather" },
              { id: "b", text: "Long-term average weather patterns" },
              { id: "c", text: "A single storm" },
              { id: "d", text: "The temperature right now" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Climate",
                statement: "Long-term average weather patterns.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Climate is the average of weather over decades to centuries.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Long-term average weather patterns.",
            commonErrors: ["Confusing with weather."],
          },
        },
        {
          id: "s7-u8-climate-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two factors that affect climate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Climate factors",
                statement:
                  "Latitude, altitude, water proximity, currents, greenhouse gases.",
              },
            ],
            steps: [
              {
                reasoning: "Latitude: equator warm, poles cold.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Altitude: higher = colder.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Proximity to water: oceans moderate temperatures.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Latitude, altitude, water proximity, currents, greenhouse gases.",
            commonErrors: ["Listing only one factor."],
          },
        },
        {
          id: "s7-u8-climate-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how ocean currents affect coastal climates.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Ocean currents",
                statement:
                  "Currents distribute heat, affecting coastal temperatures.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Warm currents bring warm water and air to coasts, warming them.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Cold currents bring cold water and air, cooling coasts.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "This creates different climates for coasts at similar latitudes.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Example: Gulf Stream warms NW Europe; California Current cools west coast US.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Warm currents warm coasts; cold currents cool them — creating different climates.",
            commonErrors: ["Saying currents don't affect climate."],
          },
        },
        {
          id: "s7-u8-climate-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Human activities are changing Earth's climate.",
          parts: [
            {
              label: "a",
              prompt: "Name two human activities that affect climate.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how burning fossil fuels affects the atmosphere.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Explain how deforestation affects climate.",
              marks: 2,
            },
            { label: "d", prompt: "What is the greenhouse effect?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Climate change",
                statement: "Human activities increase greenhouse gases.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Burning fossil fuels; deforestation.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Releases CO2 to atmosphere, enhancing greenhouse effect.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Reduces photosynthesis (less CO2 absorbed) and transpiration (less cooling).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Atmosphere traps heat like a greenhouse; more CO2 = more trapping = warming.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Fossil fuels, deforestation (b) More CO2 (c) Less photosynthesis (d) Atmosphere traps heat.",
            commonErrors: [
              "Saying greenhouse effect is only bad; it's natural but enhanced.",
            ],
          },
        },
      ],
    },
  ],
};
