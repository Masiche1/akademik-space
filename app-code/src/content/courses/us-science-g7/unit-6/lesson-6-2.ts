import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "s7-u6-lesson-6-2",
  code: "6-2",
  title: "Matter Cycling in Ecosystems",
  goal: "I CAN describe how carbon, nitrogen and water cycle through ecosystems, and explain the role of photosynthesis, respiration and decomposition in these cycles.",
  standards: [
    "MS-LS2-3",
    "MS-LS2-4",
    "SEP: Developing and Using Models",
    "SEP: Constructing Explanations",
  ],
  vocabulary: [
    {
      term: "Carbon cycle",
      definition:
        "The movement of carbon among the atmosphere, organisms and Earth through photosynthesis, respiration and decomposition.",
    },
    {
      term: "Nitrogen cycle",
      definition:
        "The movement of nitrogen among the atmosphere, soil, organisms and water.",
    },
    {
      term: "Water cycle",
      definition:
        "The continuous movement of water through evaporation, condensation, precipitation and collection.",
    },
    {
      term: "Photosynthesis",
      definition:
        "The process by which plants use light energy to convert CO2 and water into glucose and oxygen.",
    },
    {
      term: "Cellular respiration",
      definition:
        "The process by which cells break down glucose to release energy, producing CO2 and water.",
    },
    {
      term: "Nitrogen fixation",
      definition:
        "The conversion of atmospheric nitrogen into forms usable by living things.",
    },
    {
      term: "Decomposition",
      definition:
        "The breakdown of dead organic matter by decomposers, releasing nutrients.",
    },
  ],
  concepts: [
    {
      id: "s7-u6-carbon-cycle",
      title: "The carbon cycle",
      skill:
        "Describe how carbon moves through photosynthesis, respiration, decomposition and combustion.",
      lesson: {
        sections: [
          {
            heading: "Carbon in the atmosphere",
            body: "Carbon exists in the atmosphere as **carbon dioxide (CO2)** and in organisms as organic molecules (carbohydrates, proteins, fats). The carbon cycle moves carbon between these reservoirs.",
          },
          {
            heading: "Key processes",
            body: "- **Photosynthesis**: plants take in CO2 and use light energy to make glucose, storing carbon in organic molecules and releasing oxygen.\n- **Cellular respiration**: all organisms (including plants) break down glucose, releasing CO2 back to the atmosphere.\n- **Decomposition**: decomposers break down dead matter, releasing CO2 and returning carbon to soil.\n- **Combustion**: burning fossil fuels and biomass releases stored carbon as CO2.\n\nThese processes keep carbon cycling between atmosphere, organisms and Earth.",
          },
        ],
        keyFormulas: [
          {
            name: "Photosynthesis",
            statement:
              "CO2 + water + light → glucose + O2 (stores carbon in organisms).",
          },
          {
            name: "Respiration",
            statement:
              "Glucose + O2 → CO2 + water + energy (releases carbon to atmosphere).",
          },
          {
            name: "Carbon reservoirs",
            statement:
              "Atmosphere (CO2), organisms (organic molecules), fossil fuels, soil.",
          },
        ],
        workedExample: {
          problem:
            "A plant grows, then is eaten by a rabbit, which respires. Trace the carbon.",
          solution:
            "CO2 enters plant via photosynthesis → stored as glucose → rabbit eats plant → rabbit respires, releasing CO2 back to atmosphere.",
        },
      },
      questions: [
        {
          id: "s7-u6-carbon-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which process removes CO2 from the atmosphere?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cellular respiration" },
              { id: "b", text: "Photosynthesis" },
              { id: "c", text: "Decomposition" },
              { id: "d", text: "Combustion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Photosynthesis",
                statement:
                  "Uses CO2 to make glucose, removing it from atmosphere.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Photosynthesis takes in CO2 and stores carbon in glucose.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Photosynthesis.",
            commonErrors: [
              "Choosing (a): respiration releases CO2, not removes it.",
            ],
          },
        },
        {
          id: "s7-u6-carbon-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two processes that release CO2 to the atmosphere.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Respiration",
                statement: "Releases CO2 from glucose breakdown.",
              },
              {
                kind: "formula",
                name: "Combustion",
                statement: "Burning releases stored carbon as CO2.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cellular respiration: organisms break down glucose, releasing CO2.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Combustion: burning fossil fuels or biomass releases stored carbon as CO2.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Decomposition also releases CO2 as decomposers break down organic matter.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Respiration and combustion (also decomposition) release CO2.",
            commonErrors: ["Listing only one process."],
          },
        },
        {
          id: "s7-u6-carbon-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how human activities affect the carbon cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Human impact",
                statement:
                  "Burning fossil fuels releases stored carbon rapidly.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Burning fossil fuels releases carbon stored for millions of years as CO2.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Deforestation removes photosynthetic organisms that absorb CO2.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "These activities increase atmospheric CO2 faster than natural cycles can balance.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Result: enhanced greenhouse effect and climate change.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Fossil fuel burning and deforestation increase CO2, disrupting the natural carbon balance.",
            commonErrors: [
              "Saying humans create carbon; they release stored carbon.",
            ],
          },
        },
        {
          id: "s7-u6-carbon-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Trace carbon through a forest ecosystem.",
          parts: [
            { label: "a", prompt: "How does carbon enter a tree?", marks: 2 },
            {
              label: "b",
              prompt: "How does carbon move from tree to deer?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "How does carbon return to the atmosphere?",
              marks: 2,
            },
            { label: "d", prompt: "What role do decomposers play?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Carbon cycle",
                statement:
                  "Photosynthesis → consumption → respiration/decomposition → CO2.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Tree takes in CO2 via photosynthesis, storing carbon in glucose and other molecules.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Deer eats tree (leaves, bark); carbon moves into deer as organic molecules.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Deer respires, releasing CO2; also decomposers break down dead matter releasing CO2.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Decomposers break down dead trees and animals, releasing CO2 and nutrients to soil.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) Photosynthesis (b) Deer eats tree (c) Respiration/decomposition (d) Break down dead matter, recycle nutrients.",
            commonErrors: ["Saying carbon is destroyed; it cycles."],
          },
        },
      ],
    },
    {
      id: "s7-u6-nitrogen-cycle",
      title: "The nitrogen cycle",
      skill:
        "Describe how nitrogen moves through fixation, nitrification, assimilation and denitrification.",
      lesson: {
        sections: [
          {
            heading: "Nitrogen in the environment",
            body: "Nitrogen makes up about 78% of the atmosphere as **N2** gas, but most organisms cannot use it directly. Nitrogen must be 'fixed' into forms like ammonia (NH3), nitrate (NO3-) and nitrite (NO2-) that plants and animals can use.",
          },
          {
            heading: "Key processes",
            body: "- **Nitrogen fixation**: bacteria (in roots of legumes or free-living) convert N2 to ammonia. Lightning also fixes nitrogen.\n- **Nitrification**: bacteria convert ammonia to nitrite, then nitrate — forms plants can absorb.\n- **Assimilation**: plants take up nitrate/ammonia to build proteins; animals get nitrogen by eating plants or other animals.\n- **Denitrification**: bacteria convert nitrate back to N2 gas, returning it to the atmosphere.\n\nThis cycle keeps nitrogen available for life while preventing toxic buildup.",
          },
        ],
        keyFormulas: [
          {
            name: "Nitrogen fixation",
            statement: "N2 → ammonia (by bacteria or lightning).",
          },
          {
            name: "Nitrification",
            statement: "Ammonia → nitrite → nitrate (by bacteria).",
          },
          {
            name: "Denitrification",
            statement: "Nitrate → N2 gas (by bacteria).",
          },
        ],
        workedExample: {
          problem: "Why do farmers plant legumes?",
          solution:
            "Legumes host nitrogen-fixing bacteria in root nodules, converting atmospheric N2 to ammonia that fertilizes the soil.",
        },
      },
      questions: [
        {
          id: "s7-u6-nitrogen-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What percentage of the atmosphere is nitrogen gas?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "21%" },
              { id: "b", text: "50%" },
              { id: "c", text: "78%" },
              { id: "d", text: "99%" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Atmospheric composition",
                statement: "Nitrogen gas is ~78% of the atmosphere.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Nitrogen gas makes up about 78% of Earth's atmosphere.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** 78%.",
            commonErrors: ["Confusing with oxygen (21%)."],
          },
        },
        {
          id: "s7-u6-nitrogen-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why can't plants use atmospheric N2 directly?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Nitrogen fixation",
                statement:
                  "N2 must be converted to ammonia/nitrate before use.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The N≡N triple bond in N2 is extremely strong and hard to break.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Plants can only absorb nitrogen as ammonia or nitrate ions.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Nitrogen-fixing bacteria or lightning must convert N2 to usable forms first.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "N2's strong triple bond requires fixation by bacteria/lightning to become usable forms.",
            commonErrors: ["Saying plants can't absorb nitrogen at all."],
          },
        },
        {
          id: "s7-u6-nitrogen-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the role of decomposers in the nitrogen cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Decomposition",
                statement:
                  "Breaks down organic matter, releasing nitrogen compounds.",
              },
            ],
            steps: [
              {
                reasoning: "Decomposers break down dead organisms and waste.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "They convert proteins in dead matter back to ammonia.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Ammonia is then nitrified to nitrite/nitrate for plant uptake.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "This returns nitrogen to the soil for reuse by plants.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Decomposers break down organic matter to ammonia, which is nitrified for plant uptake.",
            commonErrors: [
              "Saying decomposers fix nitrogen; they release it from organic matter.",
            ],
          },
        },
        {
          id: "s7-u6-nitrogen-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Trace nitrogen through a farm ecosystem with legumes, corn and decomposers.",
          parts: [
            {
              label: "a",
              prompt: "How does N2 become usable by plants?",
              marks: 2,
            },
            { label: "b", prompt: "How does corn get nitrogen?", marks: 2 },
            {
              label: "c",
              prompt: "How does nitrogen return to the soil after harvest?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Why is crop rotation with legumes beneficial?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Nitrogen cycle",
                statement:
                  "Fixation → nitrification → assimilation → denitrification.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Nitrogen-fixing bacteria in legume roots convert N2 to ammonia.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Corn absorbs nitrate/ammonia from soil; gets nitrogen from decomposed legumes or fertilizer.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Decomposers break down dead corn and roots, releasing nitrogen compounds to soil.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Legumes replenish soil nitrogen naturally, reducing fertilizer need.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Bacteria fix N2 (b) Corn absorbs nitrate (c) Decomposers release N (d) Legumes replenish soil N.",
            commonErrors: ["Saying corn fixes its own nitrogen."],
          },
        },
      ],
    },
    {
      id: "s7-u6-water-cycle",
      title: "The water cycle",
      skill:
        "Describe the processes of evaporation, condensation, precipitation and collection in the water cycle.",
      lesson: {
        sections: [
          {
            heading: "The continuous cycle",
            body: "The **water cycle** moves water continuously between Earth's surface and atmosphere:\n\n- **Evaporation**: water changes from liquid to vapor, rising into the atmosphere (also **transpiration** from plants).\n- **Condensation**: water vapor cools and forms clouds (liquid droplets or ice crystals).\n- **Precipitation**: water falls as rain, snow, sleet or hail.\n- **Collection**: water gathers in oceans, lakes, rivers and groundwater, ready to evaporate again.",
          },
          {
            heading: "Energy and matter",
            body: "The water cycle is driven by **solar energy** (evaporation) and **gravity** (precipitation and runoff). Water is not created or destroyed — it cycles continuously. The same water that dinosaurs drank may be in your glass today.",
          },
        ],
        keyFormulas: [
          {
            name: "Evaporation",
            statement: "Liquid water → water vapor (driven by solar energy).",
          },
          {
            name: "Condensation",
            statement: "Water vapor → liquid droplets or ice (forms clouds).",
          },
          {
            name: "Precipitation",
            statement: "Water falls as rain, snow, sleet or hail.",
          },
        ],
        workedExample: {
          problem:
            "Trace a drop of water from ocean to cloud to rain to river.",
          solution:
            "Evaporation from ocean → condensation in clouds → precipitation as rain → runoff to river → back to ocean.",
        },
      },
      questions: [
        {
          id: "s7-u6-water-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which process changes water vapor into liquid droplets?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Evaporation" },
              { id: "b", text: "Condensation" },
              { id: "c", text: "Precipitation" },
              { id: "d", text: "Collection" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Condensation",
                statement: "Water vapor cools and forms liquid droplets.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Condensation is the change from gas to liquid, forming clouds.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Condensation.",
            commonErrors: ["Confusing with evaporation (opposite process)."],
          },
        },
        {
          id: "s7-u6-water-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the role of the sun in the water cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Solar energy",
                statement: "Drives evaporation and transpiration.",
              },
            ],
            steps: [
              {
                reasoning: "The sun's energy heats water, causing evaporation.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Solar energy also drives transpiration from plants.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Without solar energy, the water cycle would stop.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Solar energy drives evaporation and transpiration, powering the water cycle.",
            commonErrors: [
              "Saying the sun creates water; it drives the cycle.",
            ],
          },
        },
        {
          id: "s7-u6-water-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how deforestation affects the water cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Transpiration",
                statement:
                  "Trees release water vapor; deforestation reduces this.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Trees transpire water vapor through leaves, contributing to atmospheric moisture.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Deforestation reduces transpiration, decreasing atmospheric moisture.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Less moisture may reduce rainfall in the region.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Reduced tree cover also increases runoff and soil erosion.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Deforestation reduces transpiration and rainfall, increasing runoff and erosion.",
            commonErrors: [
              "Saying deforestation stops the water cycle entirely.",
            ],
          },
        },
        {
          id: "s7-u6-water-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A city experiences a drought.",
          parts: [
            {
              label: "a",
              prompt: "Which water cycle processes are affected?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain why precipitation decreases.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "How does reduced soil moisture affect plants?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "What human activities could worsen a drought?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Drought",
                statement: "Prolonged lack of precipitation and soil moisture.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Precipitation decreases; evaporation may increase; soil moisture declines.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Less evaporation/transpiration means less water vapor for cloud formation.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Plants wilt, photosynthesis slows, growth stops; some may die.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Overuse of water for irrigation, deforestation, urbanization reducing infiltration.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Precipitation down, evaporation up (b) Less vapor for clouds (c) Plants wilt/die (d) Overuse, deforestation.",
            commonErrors: ["Saying drought only affects precipitation."],
          },
        },
      ],
    },
  ],
};
