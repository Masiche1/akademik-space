import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "edxpg-u3-lesson-3-3",
  code: "3-3",
  title: "Physical Features of the World",
  goal: "I CAN identify and describe major physical features worldwide.",
  standards: ["Y5-Y6 Geography", "Physical features"],
  vocabulary: [
    { term: "Mountain range", definition: "A series of connected mountains." },
    {
      term: "River",
      definition: "A natural flow of water from high ground to the sea.",
    },
    { term: "Desert", definition: "A dry region with very little rainfall." },
    {
      term: "Volcano",
      definition: "An opening in the Earth's crust where lava and ash erupt.",
    },
  ],
  concepts: [
    {
      id: "edxpg-u3-mountains",
      title: "Mountains and Volcanoes",
      skill: "Describe major mountain ranges and volcanoes worldwide.",
      lesson: {
        sections: [
          {
            heading: "Major mountain ranges",
            body: "The Himalayas in Asia include Mount Everest — the highest mountain on Earth at 8,849 metres. The Andes run along South America's west coast — the longest mountain range on land. The Alps are in Europe — popular for skiing. The Rocky Mountains are in North America. Mountains form when tectonic plates collide or through volcanic activity.",
          },
          {
            heading: "Volcanoes and earthquakes",
            body: "Volcanoes are openings where molten rock (magma) erupts — famous ones include Mount Vesuvius (Italy, destroyed Pompeii), Mount Etna (Sicily), and Mount Fuji (Japan). Earthquakes happen when tectonic plates slip — measured on the Richter scale. The 'Ring of Fire' around the Pacific Ocean has many volcanoes and earthquakes.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What is the highest mountain on Earth?",
          solution: "Mount Everest in the Himalayas, 8,849 m.",
        },
      },
      questions: [
        {
          id: "edxpg-u3-mtn-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the highest mountain on Earth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Kilimanjaro" },
              { id: "b", text: "Mount Everest" },
              { id: "c", text: "Mont Blanc" },
              { id: "d", text: "Mount Fuji" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Everest",
                statement: "Highest mountain, 8,849m.",
              },
            ],
            steps: [
              { reasoning: "Everest = highest.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Everest",
            commonErrors: ["Wrong mountain."],
          },
        },
        {
          id: "edxpg-u3-mtn-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a volcano?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of mountain" },
              { id: "b", text: "An opening where lava erupts" },
              { id: "c", text: "A type of river" },
              { id: "d", text: "A desert feature" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Volcano",
                statement: "Eruption of magma.",
              },
            ],
            steps: [
              {
                reasoning: "Volcano = lava eruption.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Lava eruption",
            commonErrors: ["Confusing with mountain."],
          },
        },
        {
          id: "edxpg-u3-mtn-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two major mountain ranges and the continents they are in.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mountain ranges",
                statement: "Himalayas-Asia, Andes-South America.",
              },
            ],
            steps: [
              {
                reasoning: "Range 1, e.g. Himalayas — Asia.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Range 2, e.g. Andes — South America.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both correctly paired.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. Himalayas-Asia, Andes-S.America",
            commonErrors: ["Wrong pairings."],
          },
        },
        {
          id: "edxpg-u3-mtn-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why volcanoes and earthquakes often happen in the same places.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Plate tectonics",
                statement: "Both caused by plate movement.",
              },
            ],
            steps: [
              {
                reasoning: "Earth's crust is split into tectonic plates.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Plate boundaries cause both — collisions make mountains/volcanoes; slips cause earthquakes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ring of Fire — Pacific plate boundary has both.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Plate boundaries cause both",
            commonErrors: ["No plate link."],
          },
        },
      ],
    },
    {
      id: "edxpg-u3-rivers",
      title: "Rivers and Deserts",
      skill: "Describe major world rivers and desert regions.",
      lesson: {
        sections: [
          {
            heading: "Major rivers",
            body: "The Nile in Africa is often called the longest river (~6,650 km) — flows through Egypt to the Mediterranean. The Amazon in South America carries the most water — the largest river by volume, through the rainforest. The Yangtze is Asia's longest river — through China. Rivers provide water for drinking, farming and transport; they shaped early civilisations (Nile → Egypt, Tigris/Euphrates → Mesopotamia).",
          },
          {
            heading: "Deserts",
            body: "Deserts cover about one-third of Earth's land. The Sahara is the largest hot desert — North Africa, ~9 million km². The Arabian Desert is in the Middle East. The Gobi is in Asia — cold desert. Antarctica is technically a desert (very little precipitation). Deserts are hot by day, cold by night; plants and animals are adapted to survive with little water.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Name the longest river and the largest desert.",
          solution: "Nile (longest); Sahara (largest hot desert).",
        },
      },
      questions: [
        {
          id: "edxpg-u3-riv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the longest river in the world?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Amazon" },
              { id: "b", text: "Nile" },
              { id: "c", text: "Yangtze" },
              { id: "d", text: "Mississippi" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rivers",
                statement: "Nile longest.",
              },
            ],
            steps: [{ reasoning: "Nile = longest.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Nile",
            commonErrors: ["Confusing with Amazon volume."],
          },
        },
        {
          id: "edxpg-u3-riv-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Where is the Sahara?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "South America" },
              { id: "b", text: "North Africa" },
              { id: "c", text: "Asia" },
              { id: "d", text: "Australia" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sahara",
                statement: "North Africa.",
              },
            ],
            steps: [
              { reasoning: "Sahara = N. Africa.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** North Africa",
            commonErrors: ["Wrong location."],
          },
        },
        {
          id: "edxpg-u3-riv-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways rivers are important to people.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "River importance",
                statement: "Water, transport, food.",
              },
            ],
            steps: [
              {
                reasoning: "Water for drinking and farming.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Transport routes for trade.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Food — fish, fertile soil for crops.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Water+transport+food",
            commonErrors: ["Only one reason."],
          },
        },
        {
          id: "edxpg-u3-riv-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is the Amazon river important for the whole planet?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Amazon importance",
                statement: "Climate regulation, biodiversity, oxygen.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Amazon rainforest absorbs CO2 — helps fight climate change.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Huge biodiversity — millions of species.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Produces oxygen / influences global rainfall patterns.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "CO2 absorption + biodiversity + oxygen",
            commonErrors: ["Only local importance."],
          },
        },
      ],
    },
    {
      id: "edxpg-u3-biomes",
      title: "Biomes and Ecosystems",
      skill: "Describe the main biomes of the world and their features.",
      lesson: {
        sections: [
          {
            heading: "Major biomes",
            body: "Biomes are large regions with similar climate and ecosystems: Tropical rainforest (hot, wet — Amazon, Congo), Desert (dry — Sahara, Gobi), Grassland/savanna (warm, seasonal rain — African savanna), Temperate forest (four seasons — Europe, North America), Tundra (cold, treeless — Arctic), and Polar ice caps. Each biome has plants and animals adapted to its conditions.",
          },
          {
            heading: "Biodiversity and threats",
            body: "Rainforests have the most biodiversity — up to half of all species live there. Deforestation (cutting down forests) threatens this — for farming, logging, and development. Climate change affects all biomes — melting ice, shifting rain patterns, species extinction. Conservation protects habitats; national parks preserve wilderness areas.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Which biome has the most species?",
          solution: "Tropical rainforest.",
        },
      },
      questions: [
        {
          id: "edxpg-u3-bio-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a biome?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of animal" },
              {
                id: "b",
                text: "A large region with similar climate and ecosystems",
              },
              { id: "c", text: "A mountain range" },
              { id: "d", text: "A river system" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Biome",
                statement: "Large similar ecosystem region.",
              },
            ],
            steps: [
              {
                reasoning: "Biome = ecosystem region.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Ecosystem region",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edxpg-u3-bio-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which biome is the Amazon rainforest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Desert" },
              { id: "b", text: "Tropical rainforest" },
              { id: "c", text: "Tundra" },
              { id: "d", text: "Grassland" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Biomes",
                statement: "Amazon = tropical rainforest.",
              },
            ],
            steps: [
              { reasoning: "Amazon = rainforest.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Tropical rainforest",
            commonErrors: ["Wrong biome."],
          },
        },
        {
          id: "edxpg-u3-bio-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three biomes and one feature of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Biomes",
                statement: "Rainforest, desert, tundra, etc.",
              },
            ],
            steps: [
              {
                reasoning: "Biome 1, e.g. rainforest — hot, wet, dense.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Biome 2, e.g. desert — dry, sparse plants.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Biome 3, e.g. tundra — cold, treeless.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "e.g. rainforest+desert+tundra",
            commonErrors: ["No features."],
          },
        },
        {
          id: "edxpg-u3-bio-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why deforestation is a problem and what can be done about it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deforestation",
                statement: "Threat + solutions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Problems — species loss, CO2 release, climate change.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Causes — farming, logging, development.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Solutions — reforestation, protected areas, sustainable farming.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Problems+causes+solutions",
            commonErrors: ["No solutions."],
          },
        },
      ],
    },
  ],
};
