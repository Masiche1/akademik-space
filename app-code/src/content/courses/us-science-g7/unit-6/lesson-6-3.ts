import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "s7-u6-lesson-6-3",
  code: "6-3",
  title: "Populations and Ecosystem Interactions",
  goal: "I CAN describe how populations change over time, identify different types of species interactions, and explain how disturbances affect ecosystems.",
  standards: [
    "MS-LS2-1",
    "MS-LS2-2",
    "SEP: Analyzing and Interpreting Data",
    "SEP: Constructing Explanations",
  ],
  vocabulary: [
    {
      term: "Population",
      definition:
        "A group of organisms of the same species living in the same area.",
    },
    {
      term: "Community",
      definition:
        "All the different populations of organisms living in the same area.",
    },
    {
      term: "Ecosystem",
      definition: "A community of organisms plus their physical environment.",
    },
    {
      term: "Symbiosis",
      definition: "A close, long-term interaction between different species.",
    },
    {
      term: "Competition",
      definition:
        "When organisms compete for limited resources like food, water or space.",
    },
    {
      term: "Carrying capacity",
      definition: "The maximum population size an environment can support.",
    },
    {
      term: "Disturbance",
      definition:
        "An event that changes an ecosystem, such as fire, flood or invasive species.",
    },
  ],
  concepts: [
    {
      id: "s7-u6-populations",
      title: "Populations and carrying capacity",
      skill:
        "Describe how populations grow and stabilize at carrying capacity.",
      lesson: {
        sections: [
          {
            heading: "Population growth",
            body: "A **population** is a group of the same species in an area. Populations grow when birth rate exceeds death rate and resources are abundant. Growth is often exponential at first, then slows as resources become limited.",
          },
          {
            heading: "Carrying capacity",
            body: "The **carrying capacity** is the maximum population an environment can sustain. When a population exceeds it, resources (food, water, space) become scarce, death rate increases or reproduction decreases, and the population stabilizes or declines.\n\nExample: Deer introduced to an island may initially multiply rapidly, but once they exceed carrying capacity, starvation and disease bring numbers down.",
          },
        ],
        keyFormulas: [
          {
            name: "Population",
            statement: "Group of same species in an area.",
          },
          {
            name: "Carrying capacity",
            statement: "Maximum population environment can support.",
          },
          {
            name: "Population growth",
            statement:
              "Exponential when resources abundant; limited by carrying capacity.",
          },
        ],
        workedExample: {
          problem:
            "A lake has 100 fish. They reproduce rapidly but the lake can only support 500. Predict what happens.",
          solution:
            "Population grows rapidly until ~500, then food becomes limited; death rate increases and population stabilizes around carrying capacity.",
        },
      },
      questions: [
        {
          id: "s7-u6-pop-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is carrying capacity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The total number of species in an ecosystem" },
              {
                id: "b",
                text: "The maximum population an environment can support",
              },
              { id: "c", text: "The rate of population growth" },
              { id: "d", text: "The number of predators in an area" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Carrying capacity",
                statement: "Maximum population environment can support.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Carrying capacity is the maximum sustainable population size.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Maximum population environment can support.",
            commonErrors: ["Confusing with total species count."],
          },
        },
        {
          id: "s7-u6-pop-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a population cannot grow indefinitely.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Limiting factors",
                statement: "Resources like food, water, space limit growth.",
              },
            ],
            steps: [
              {
                reasoning: "As population grows, resources become scarce.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Competition for food, water and space increases.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Birth rate decreases or death rate increases, stabilizing the population.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Limited resources cause competition, reducing growth and stabilizing the population.",
            commonErrors: ["Saying populations grow forever."],
          },
        },
        {
          id: "s7-u6-pop-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A disease kills half the deer population in a forest. Predict two effects on the ecosystem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Population dynamics",
                statement:
                  "Changes in one population affect connected species.",
              },
            ],
            steps: [
              {
                reasoning:
                  "With fewer deer, plants they eat may increase (less grazing).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Predators that eat deer may decline due to less food.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Scavengers and decomposers may temporarily increase from more carrion.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "The ecosystem adjusts to the new population balance.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Plants increase, deer predators decline, scavengers may increase — cascading effects.",
            commonErrors: ["Saying only deer are affected."],
          },
        },
        {
          id: "s7-u6-pop-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A city introduces deer to a park. Initially, 10 deer are released.",
          parts: [
            {
              label: "a",
              prompt: "Predict the population growth pattern over time.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "What factors might limit the population?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "How might the deer affect other species in the park?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "What management strategies could control the population?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Population dynamics",
                statement: "Growth limited by resources and interactions.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Rapid exponential growth initially, then slows and stabilizes at carrying capacity.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Food availability, space, predators, disease, human activity.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Deer may overgraze plants, affecting other herbivores and the food web.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Hunting, contraception, habitat management, introducing predators.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Exponential then stable (b) Food, space, predators (c) Overgrazing affects food web (d) Hunting, contraception, management.",
            commonErrors: ["Saying population grows indefinitely."],
          },
        },
      ],
    },
    {
      id: "s7-u6-interactions",
      title: "Species interactions",
      skill:
        "Identify and explain competition, predation, symbiosis (mutualism, commensalism, parasitism) in ecosystems.",
      lesson: {
        sections: [
          {
            heading: "Types of interactions",
            body: "Organisms interact in several ways:\n\n- **Competition**: both species are harmed as they compete for limited resources.\n- **Predation**: one organism (predator) kills and eats another (prey).\n- **Symbiosis**: close long-term interactions between species:\n  - **Mutualism**: both benefit (e.g., bees and flowers).\n  - **Commensalism**: one benefits, the other is unaffected (e.g., barnacles on whales).\n  - **Parasitism**: one benefits at the expense of the other (e.g., ticks on mammals).",
          },
          {
            heading: "Effects on populations",
            body: "These interactions shape populations and communities. Predation controls prey populations; competition limits species that use the same resources; mutualism supports both partners; parasitism can harm hosts but rarely kills them (parasites depend on hosts surviving).",
          },
        ],
        keyFormulas: [
          { name: "Competition", statement: "Both harmed; limited resources." },
          { name: "Predation", statement: "Predator kills and eats prey." },
          {
            name: "Symbiosis types",
            statement:
              "Mutualism (both benefit), commensalism (one benefits), parasitism (one harmed).",
          },
        ],
        workedExample: {
          problem: "Classify: a tick feeding on a dog's blood.",
          solution:
            "Parasitism — the tick benefits by feeding; the dog is harmed (loses blood, may get disease).",
        },
      },
      questions: [
        {
          id: "s7-u6-interact-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is mutualism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One organism benefits, the other is harmed" },
              { id: "b", text: "Both organisms benefit" },
              { id: "c", text: "One benefits, the other is unaffected" },
              { id: "d", text: "Both are harmed" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mutualism",
                statement: "Both species benefit from the interaction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mutualism means both partners benefit, like bees pollinating flowers while getting nectar.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Both organisms benefit.",
            commonErrors: ["Confusing with commensalism or parasitism."],
          },
        },
        {
          id: "s7-u6-interact-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Classify each interaction: (a) lions hunting zebras, (b) bees collecting nectar from flowers, (c) ticks on a deer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Interaction types",
                statement: "Predation, mutualism, parasitism.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Predation — lion kills and eats zebra.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "(b) Mutualism — bee gets nectar, flower gets pollinated.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "(c) Parasitism — tick benefits, deer is harmed.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) Predation (b) Mutualism (c) Parasitism.",
            commonErrors: ["Classifying mutualism as commensalism."],
          },
        },
        {
          id: "s7-u6-interact-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how competition affects species in an ecosystem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Competition",
                statement: "Organisms compete for limited resources.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Competition occurs when resources (food, water, space) are limited.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Both competitors are harmed — less food means less growth or survival.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Competition can drive species to occupy different niches or locations.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Over time, competition shapes community structure and biodiversity.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Competition for limited resources harms both species and shapes community structure.",
            commonErrors: ["Saying competition only harms one species."],
          },
        },
        {
          id: "s7-u6-interact-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Analyze a coral reef ecosystem with these interactions: clownfish live in anemones, sharks eat fish, algae grow on coral.",
          parts: [
            {
              label: "a",
              prompt: "Classify the clownfish-anemone relationship.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Classify the shark-fish relationship.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain the benefit to each partner in the clownfish-anemone relationship.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Predict what happens if sharks are removed.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Symbiosis and predation",
                statement:
                  "Clownfish-anemone = mutualism; shark-fish = predation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Mutualism — both benefit.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Predation — shark kills and eats fish.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Clownfish gets protection from predators; anemone gets cleaned and may get food scraps.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Fish populations may increase, overgrazing algae and coral, destabilizing the reef.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Mutualism (b) Predation (c) Clownfish protected, anemone cleaned (d) Fish overpopulate, reef degrades.",
            commonErrors: ["Saying clownfish harm anemones."],
          },
        },
      ],
    },
    {
      id: "s7-u6-disturbances",
      title: "Disturbances and ecosystem resilience",
      skill:
        "Explain how natural and human-caused disturbances affect ecosystems and how ecosystems recover.",
      lesson: {
        sections: [
          {
            heading: "Types of disturbances",
            body: "A **disturbance** is an event that disrupts an ecosystem:\n\n- **Natural**: wildfires, floods, droughts, hurricanes, volcanic eruptions.\n- **Human-caused**: deforestation, pollution, overfishing, invasive species, climate change.\n\nSome ecosystems are adapted to frequent disturbances (e.g., fire-adapted forests); others are vulnerable.",
          },
          {
            heading: "Resilience and succession",
            body: "**Resilience** is the ability of an ecosystem to recover after disturbance. After a disturbance, **ecological succession** occurs: pioneer species (like lichens and grasses) colonize first, followed by shrubs, then trees.\n\n- **Primary succession**: starts on bare rock or new land (no soil).\n- **Secondary succession**: starts on disturbed but soil-bearing land (after fire or flood).\n\nHealthy, diverse ecosystems recover faster and more completely.",
          },
        ],
        keyFormulas: [
          {
            name: "Disturbance",
            statement:
              "Event that disrupts ecosystem (natural or human-caused).",
          },
          {
            name: "Resilience",
            statement: "Ability to recover after disturbance.",
          },
          {
            name: "Succession",
            statement: "Pioneer species → shrubs → trees over time.",
          },
        ],
        workedExample: {
          problem: "After a forest fire, what happens?",
          solution:
            "Grasses and wildflowers grow first (pioneers), then shrubs, then trees — secondary succession restores the forest over decades.",
        },
      },
      questions: [
        {
          id: "s7-u6-disturb-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is ecological succession?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The extinction of species" },
              {
                id: "b",
                text: "The gradual change in species composition after a disturbance",
              },
              { id: "c", text: "The migration of animals" },
              { id: "d", text: "The formation of new species" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Succession",
                statement: "Gradual change in species after disturbance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Succession is the predictable sequence of species changes as an ecosystem recovers.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "**(b)** Gradual change in species composition after disturbance.",
            commonErrors: ["Confusing with extinction or evolution."],
          },
        },
        {
          id: "s7-u6-disturb-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between primary and secondary succession.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary succession",
                statement: "Starts on bare rock or new land without soil.",
              },
              {
                kind: "definition",
                name: "Secondary succession",
                statement: "Starts on disturbed land that still has soil.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Primary succession: starts where no soil exists (e.g., new volcanic island).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Secondary succession: starts on disturbed soil-bearing land (e.g., after fire).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Secondary succession is faster because soil and seeds are already present.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Primary: no soil (bare rock). Secondary: soil present (after fire/flood). Secondary is faster.",
            commonErrors: ["Reversing the two types."],
          },
        },
        {
          id: "s7-u6-disturb-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why some ecosystems recover quickly from disturbance while others do not.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Resilience",
                statement:
                  "Diverse ecosystems with intact soil recover faster.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ecosystems with high biodiversity have more species to fill roles.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Intact soil provides a seed bank and nutrients for regrowth.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Ecosystems adapted to disturbance (fire-adapted forests) recover faster.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Degraded ecosystems (soil erosion, invasive species) recover slowly or not at all.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Biodiversity, intact soil, and adaptation to disturbance determine recovery speed.",
            commonErrors: ["Saying all ecosystems recover at the same rate."],
          },
        },
        {
          id: "s7-u6-disturb-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A wetland is drained for development, then later restored.",
          parts: [
            {
              label: "a",
              prompt: "What immediate effects does draining have?",
              marks: 2,
            },
            { label: "b", prompt: "What species are lost first?", marks: 2 },
            {
              label: "c",
              prompt: "What happens during restoration?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Why might full recovery take decades?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Wetland ecology",
                statement: "Draining destroys habitat and nutrient cycling.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Water-dependent species lose habitat; nutrient cycling disrupted; flooding control lost.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Amphibians, waterfowl, aquatic plants — species requiring standing water.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Water is restored; pioneer species colonize; succession begins.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Soil chemistry, seed banks, and species recolonization take time; some species may not return.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Habitat loss, disrupted cycling (b) Water-dependent species (c) Water restored, succession begins (d) Slow soil/species recovery.",
            commonErrors: ["Saying restoration is instant."],
          },
        },
      ],
    },
  ],
};
