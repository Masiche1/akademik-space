import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "esc7-u1-lesson-1-2",
  code: "1-2",
  title: "Ecosystems and Food Chains",
  goal: "I CAN describe ecosystems, food chains and the flow of energy and matter.",
  standards: ["Edexcel KS3 Science — Biology"],
  vocabulary: [
    {
      term: "Ecosystem",
      definition:
        "A community of organisms interacting with each other and their physical environment.",
    },
    {
      term: "Food chain",
      definition:
        "A sequence showing how energy passes from one organism to another.",
    },
    {
      term: "Producer",
      definition:
        "An organism that makes its own food — usually plants via photosynthesis.",
    },
    {
      term: "Consumer",
      definition: "An organism that obtains energy by eating other organisms.",
    },
  ],
  concepts: [
    {
      id: "esc7-u1-ecosystem",
      title: "Ecosystems and Energy Flow",
      skill: "Describe how energy flows through food chains and food webs.",
      lesson: {
        sections: [
          {
            heading: "Food chains",
            body: "**Producers** (plants, algae) capture sunlight via photosynthesis — the ultimate energy source for almost all ecosystems. **Primary consumers** (herbivores) eat producers; **secondary consumers** (carnivores) eat herbivores; **tertiary consumers** eat secondary consumers. **Decomposers** (bacteria, fungi) break down dead matter, recycling nutrients.\n\nArrows in food chains point **toward the eater** — showing energy flow: grass → rabbit → fox means energy flows grass→rabbit→fox. Only ~10% of energy transfers between levels; the rest is lost as heat.",
          },
          {
            heading: "Food webs and balance",
            body: "Real ecosystems are **food webs** — interconnected chains. Removing one species affects many: fewer foxes → more rabbits → less grass → soil erosion. **Keystone species** have disproportionate impact (e.g. sea otters controlling urchins).\n\n**Abiotic factors**: temperature, light, water, pH, soil — non-living components affecting all organisms. **Biotic factors**: living components — competition, predation, disease. Ecosystems are dynamic balances, not static states.",
          },
        ],
        keyFormulas: [
          {
            name: "Food chain",
            statement:
              "Producer → primary consumer → secondary consumer → decomposers.",
          },
          {
            name: "Energy transfer",
            statement: "~10% energy passes to next level; rest lost as heat.",
          },
        ],
        workedExample: {
          problem:
            "Draw a food chain: grass is eaten by rabbits, rabbits by foxes, dead organisms by bacteria.",
          solution:
            "Grass → rabbit → fox; dead matter → bacteria (decomposer).",
        },
      },
      questions: [
        {
          id: "esc7-u1-ecosystem-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a food chain 'grass → rabbit → fox', what does the arrow represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Size comparison" },
              { id: "b", text: "Time sequence" },
              { id: "c", text: "Direction of energy flow" },
              { id: "d", text: "Who eats whom" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Food chain arrows",
                statement: "Arrows show energy flow toward the consumer.",
              },
            ],
            steps: [
              {
                reasoning: "Arrows = energy transfer direction.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Direction of energy flow",
            commonErrors: ["Confusing with predation direction."],
          },
        },
        {
          id: "esc7-u1-ecosystem-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why are producers essential to almost all ecosystems?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Producers",
                statement:
                  "Producers capture solar energy via photosynthesis — the base of food chains.",
              },
            ],
            steps: [
              {
                reasoning: "Capture sunlight as chemical energy.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Base of all food chains.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Without producers, consumers starve.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Producers convert sunlight to food energy — the foundation supporting all other trophic levels.",
            commonErrors: ["Only 'they're plants'.", "No energy role."],
          },
        },
        {
          id: "esc7-u1-ecosystem-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why only about 10% of energy transfers between trophic levels.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy transfer efficiency",
                statement:
                  "Most energy is lost as heat, used for life processes, or in waste.",
              },
            ],
            steps: [
              {
                reasoning: "Energy used for movement, respiration, growth.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Energy lost as heat.", marks: 1, markCode: "AO2" },
              {
                reasoning: "Energy in waste/not eaten.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Only small fraction reaches next level.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Most energy is used for life processes, lost as heat or in waste — only ~10% reaches the next consumer.",
            commonErrors: ["Energy destroyed view.", "No loss mechanisms."],
          },
        },
        {
          id: "esc7-u1-ecosystem-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A farmer sprays pesticide that kills insects in a field.",
          parts: [
            {
              label: "a",
              prompt: "Predict two effects on the local food web.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain how removing one species affects others.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Suggest why ecosystems are called 'webs' not 'chains'.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ecosystem interdependence",
                statement:
                  "Species removal cascades through interconnected food relationships.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Insect-eating birds lose food source.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Insect population crashes → plants overgrow OR predators starve.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Cascade effect predicted.",
                marks: 1,
                markCode: "AO3",
                part: "a",
              },
              {
                reasoning:
                  "(b) Food web links species — removing one affects many.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Predator/prey imbalance.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Multiple interconnected chains.",
                marks: 2,
                markCode: "AO1",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) birds starve, plants overgrow (b) interdependence causes cascade (c) species participate in multiple chains",
            commonErrors: ["Single-chain thinking.", "No cascade predicted."],
          },
        },
      ],
    },
    {
      id: "esc7-u1-adaptation",
      title: "Adaptation and Interdependence",
      skill:
        "Explain how organisms are adapted to their environments and how species depend on each other.",
      lesson: {
        sections: [
          {
            heading: "Adaptations",
            body: "**Structural adaptations**: physical features — camel's hump (fat storage), polar bear's thick fur, cactus spines (reduce water loss). **Behavioural adaptations**: actions — hibernation, migration, nocturnal hunting. **Physiological adaptations**: internal processes — venom production, antifreeze proteins in fish.\n\nAdaptations arise through **natural selection** over generations: individuals with advantageous traits survive and reproduce more. An adaptation is 'fit for purpose' — it improves survival in a specific environment.",
          },
          {
            heading: "Interdependence",
            body: "Species depend on each other: **pollinators** (bees) and **flowers** (mutualism — both benefit); **predator-prey** relationships keep populations balanced; **decomposers** recycle nutrients for producers. Remove one partner and both suffer.\n\n**Habitat destruction** breaks these relationships — deforestation removes pollinators, fragmenting ecosystems. Conservation means protecting whole ecosystems, not just individual species. Biodiversity (variety of life) makes ecosystems resilient — diverse systems recover better from disturbances.",
          },
        ],
        keyFormulas: [
          {
            name: "Adaptation types",
            statement:
              "Structural (body), behavioural (actions), physiological (processes).",
          },
          {
            name: "Interdependence",
            statement:
              "Species rely on each other — pollination, predation, decomposition.",
          },
        ],
        workedExample: {
          problem: "Why do cacti have spines instead of leaves?",
          solution:
            "Spines reduce surface area for water loss — adaptation to arid environments; leaves would lose too much water through transpiration.",
        },
      },
      questions: [
        {
          id: "esc7-u1-adaptation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an adaptation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A feature that improves survival in a specific environment",
              },
              { id: "b", text: "A mutation" },
              { id: "c", text: "A learned behaviour" },
              { id: "d", text: "Any random trait" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Adaptation",
                statement:
                  "Feature improving survival/reproduction in an environment.",
              },
            ],
            steps: [
              {
                reasoning: "Adaptation = survival advantage in environment.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Feature improving survival in environment",
            commonErrors: ["Confusing with any trait."],
          },
        },
        {
          id: "esc7-u1-adaptation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give one example each of a structural and behavioural adaptation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Adaptation types",
                statement: "Structural=body features; behavioural=actions.",
              },
            ],
            steps: [
              {
                reasoning: "Structural example given.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Behavioural example given.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Both correctly classified.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "e.g. structural: polar bear fur; behavioural: bear hibernation or bird migration.",
            commonErrors: ["Same type twice.", "Wrong classification."],
          },
        },
        {
          id: "esc7-u1-adaptation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how pollination shows interdependence between species.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mutualism",
                statement:
                  "Both species benefit — flowers get pollination, pollinators get food.",
              },
            ],
            steps: [
              {
                reasoning: "Flowers provide nectar/pollen (food).",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Pollinators transfer pollen (reproduction).",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Both benefit — mutualism.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Loss of either affects both.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Flowers provide food; pollinators enable reproduction — mutual benefit; losing either harms both.",
            commonErrors: ["One-sided benefit view.", "No mutualism term."],
          },
        },
        {
          id: "esc7-u1-adaptation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A desert environment has very little water and extreme temperatures.",
          parts: [
            {
              label: "a",
              prompt: "Suggest two structural adaptations a plant might have.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Suggest one behavioural adaptation an animal might have.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Explain why these adaptations are necessary.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Desert adaptations",
                statement:
                  "Adaptations reduce water loss and manage temperature extremes.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Two valid structural adaptations.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) e.g. spines, deep roots, waxy coating.",
                marks: 1,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(b) Valid behavioural adaptation.",
                marks: 2,
                markCode: "AO1",
                part: "b",
              },
              {
                reasoning: "(c) Adaptations address water loss/heat.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning: "(c) Survival without them impossible.",
                marks: 1,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) spines/deep roots/waxy coating (b) nocturnal activity/hibernation (c) reduce water loss/manage heat",
            commonErrors: [
              "Adaptations not desert-specific.",
              "No necessity link.",
            ],
          },
        },
      ],
    },
  ],
};
