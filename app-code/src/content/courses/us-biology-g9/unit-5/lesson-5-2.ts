import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "bio9-u5-lesson-5-2",
  code: "5-2",
  title: "Capstone: Populations, Biodiversity and Data",
  goal: "I CAN interpret population and biodiversity data, calculate simple population parameters, and explain how human activity affects ecosystems.",
  standards: ["HS-LS2-1", "HS-LS2-2", "HS-LS2-6", "HS-LS4-6"],
  vocabulary: [
    {
      term: "Population",
      definition:
        "A group of individuals of the same species living in the same area at the same time.",
    },
    {
      term: "Population density",
      definition: "The number of individuals per unit area.",
    },
    {
      term: "Carrying capacity",
      definition:
        "The maximum population size an environment can sustain given resources.",
    },
    {
      term: "Biodiversity",
      definition:
        "The variety of species, genes and ecosystems in a given area.",
    },
    {
      term: "Species richness",
      definition: "The number of different species in an area.",
    },
    {
      term: "Eutrophication",
      definition:
        "Excess nutrients causing algal blooms that deplete oxygen and kill aquatic life.",
    },
    {
      term: "Habitat loss",
      definition:
        "Destruction or fragmentation of the places species need to live.",
    },
    {
      term: "Sustainable yield",
      definition:
        "Harvesting at a rate the population can replace, keeping it stable.",
    },
  ],
  concepts: [
    {
      id: "bio9-u5-population-data",
      title: "Population parameters",
      skill:
        "Calculate population density, growth rates and interpret population data.",
      lesson: {
        sections: [
          {
            heading: "Measuring populations",
            body: "Population density = individuals ÷ area. Growth rate can be estimated from repeated counts over time. Populations grow exponentially at first (J-curve) but slow as they approach **carrying capacity** (S-curve), limited by food, space, disease and predators.",
          },
          {
            heading: "Reading population graphs",
            body: "An exponential curve means resources are abundant; a leveling curve means the population has hit limits. A sudden drop indicates a crash — disease, disaster, or overhunting. Steep declines can take years to recover even after the cause is removed.",
          },
          {
            heading: "Biodiversity measures",
            body: "**Species richness** (number of species) and **evenness** (how equally abundant they are) together describe biodiversity. More diverse ecosystems tend to be more stable — they have backup species if one fails.",
          },
        ],
        keyFormulas: [
          {
            name: "Density",
            statement: "Population density = number of individuals / area",
          },
          {
            name: "Carrying capacity",
            statement: "Maximum sustainable population size",
          },
        ],
        workedExample: {
          problem:
            "A lake has 450 fish in 1.5 km². What is the population density?",
          solution: "450 ÷ 1.5 = 300 fish per km².",
        },
      },
      questions: [
        {
          id: "bio9-u5-population-data-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is carrying capacity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The largest population ever recorded" },
              {
                id: "b",
                text: "The maximum population an environment can sustain",
              },
              { id: "c", text: "The speed at which populations grow" },
              { id: "d", text: "The number of predators in an area" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Carrying capacity",
                statement: "Maximum sustainable population given resources.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Carrying capacity is set by available resources — food, water, space.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Maximum sustainable population",
            commonErrors: ["Confusing with population size."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "bio9-u5-population-data-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A deer population grows from 200 to 260 in one year, then levels off. What does the leveling suggest?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Limiting factors",
                statement: "Population growth slows near carrying capacity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Initial growth (200→260) suggests resources were sufficient.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Leveling off suggests the population is approaching carrying capacity.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Limiting factors (food, space, disease) are now constraining growth.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Approaching carrying capacity; limiting factors constrain growth.",
            commonErrors: ["Thinking leveling means extinction."],
            examinerNote: "B1, R1, A1.",
          },
        },
        {
          id: "bio9-u5-population-data-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate: a meadow has 18 species of plants in 500 m². Another meadow has 9 species in the same area. Which has higher species richness and why does this matter for stability?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Species richness",
                statement: "Number of species in an area.",
              },
              {
                kind: "principle",
                name: "Stability",
                statement: "More diverse ecosystems have backup species.",
              },
            ],
            steps: [
              {
                reasoning: "First meadow: 18 species — higher richness.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Same area, so comparison is fair; richness = species count.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Higher diversity provides functional redundancy — if one species fails, others can fill its role.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "More diverse meadows resist disturbance (drought, disease) better.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "18-species meadow; higher diversity → greater stability.",
            commonErrors: ["Comparing raw counts without same area."],
            examinerNote: "B2, R1, A1.",
          },
        },
        {
          id: "bio9-u5-population-data-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A fishery manager must set a harvest limit for a fish population.",
          parts: [
            {
              label: "a",
              prompt:
                "What data would the manager need to estimate the population?",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain what 'sustainable yield' means and why harvesting above it is dangerous.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "The population crashed from 50,000 to 5,000 in three years after overharvesting. Explain the slow recovery even if fishing stops.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Population estimation",
                statement: "Mark-recapture, counts, growth rates.",
              },
              {
                kind: "principle",
                name: "Sustainable yield",
                statement: "Harvest at replacement rate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Population size estimates (mark-recapture or survey counts).",
                marks: 1,
                markCode: "B",
                part: "a",
              },
              {
                reasoning: "Growth/reproduction rate data.",
                marks: 1,
                markCode: "B",
                part: "a",
              },
              {
                reasoning: "Age structure and carrying capacity estimates.",
                marks: 1,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Sustainable yield = harvest rate the population can replace through reproduction.",
                marks: 1,
                markCode: "B",
                part: "b",
              },
              {
                reasoning:
                  "Above it, harvest exceeds reproduction → population declines.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Below it, population can grow but yield is wasted.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Recovery is slow because few breeding adults remain.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Low genetic diversity in survivors may reduce fitness.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Ecosystem changes during decline (prey/predator shifts) may persist.",
                marks: 1,
                markCode: "B",
                part: "c",
              },
              {
                reasoning:
                  "The population may have fallen below minimum viable population.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) size, growth rate, age structure (b) sustainable = replacement rate (c) few breeders, low diversity, possible Allee effect.",
            commonErrors: ["Thinking recovery is instant once fishing stops."],
            examinerNote: "3+3+4 = 10.",
          },
        },
      ],
    },
    {
      id: "bio9-u5-human-impact",
      title: "Human impact and stewardship",
      skill:
        "Explain major human impacts on ecosystems and evaluate conservation strategies.",
      lesson: {
        sections: [
          {
            heading: "Major impacts",
            body: "- **Habitat loss**: agriculture, urbanization and logging destroy or fragment habitats — the leading cause of species decline\n- **Eutrophication**: fertilizer runoff adds nutrients → algal blooms → oxygen depletion → dead zones\n- **Climate change**: rising temperatures shift habitats faster than species can adapt\n- **Invasive species**: non-native species outcompete natives (e.g., zebra mussels)\n- **Overexploitation**: hunting/fishing beyond sustainable yield",
          },
          {
            heading: "Conservation strategies",
            body: "- **Protected areas**: national parks, reserves\n- **Sustainable practices**: quotas, rotation, organic farming\n- **Restoration**: reforestation, wetland rebuilding\n- **Captive breeding**: zoos, seed banks\n- **Policy**: endangered species acts, emissions limits",
          },
          {
            heading: "Individual action",
            body: "Individual choices matter: reducing waste, choosing sustainable products, supporting conservation organizations, and understanding ecological footprints.",
          },
        ],
        keyFormulas: [
          {
            name: "Eutrophication",
            statement: "Nutrient overload → algal bloom → oxygen depletion.",
          },
          {
            name: "Habitat loss",
            statement: "Leading cause of biodiversity decline.",
          },
        ],
        workedExample: {
          problem:
            "A lake suddenly has massive algal blooms every summer. What is the likely cause and consequence?",
          solution:
            "Fertilizer runoff adds nitrogen/phosphorus → eutrophication. Algae die and decompose, consuming oxygen → fish kills (dead zone).",
        },
      },
      questions: [
        {
          id: "bio9-u5-human-impact-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the leading cause of species decline worldwide?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Climate change" },
              { id: "b", text: "Habitat loss" },
              { id: "c", text: "Invasive species" },
              { id: "d", text: "Poaching" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Habitat loss",
                statement:
                  "Destruction/fragmentation is the top driver of decline.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Habitat loss from agriculture, urbanization and logging is the primary threat.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Habitat loss",
            commonErrors: [
              "Choosing climate change — significant but not the leading cause.",
            ],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "bio9-u5-human-impact-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the process of eutrophication in a lake.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Eutrophication",
                statement:
                  "Nutrients → algal bloom → decomposition → oxygen depletion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fertilizer runoff adds nitrogen and phosphorus to the lake.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Algae bloom rapidly, then die and decompose.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Decomposition consumes dissolved oxygen → fish and other organisms die.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Nutrient runoff → algal bloom → decomposition depletes oxygen → dead zone.",
            commonErrors: [
              "Stopping at the bloom without the oxygen consequence.",
            ],
            examinerNote: "B2, R1.",
          },
        },
        {
          id: "bio9-u5-human-impact-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare two conservation strategies — protected areas vs sustainable harvesting — for a fishery. Which is more effective and under what conditions?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Protected areas",
                statement: "No-take zones allow populations to recover.",
              },
              {
                kind: "principle",
                name: "Sustainable yield",
                statement: "Harvest at replacement rate maintains population.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Protected areas work best when populations are depleted — they allow recovery without fishing pressure.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Sustainable harvesting works when the population is healthy and quotas are enforced.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Protected areas alone can't help if surrounding habitat is destroyed.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Combination is often best: protected breeding grounds + sustainable harvest outside.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Protected areas for recovery; sustainable harvest for healthy stocks; often combined.",
            commonErrors: ["Assuming one strategy fits all situations."],
            examinerNote: "R2, B1, A1.",
          },
        },
        {
          id: "bio9-u5-human-impact-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A coastal city wants to develop a wetland for housing. Environmental groups oppose it.",
          parts: [
            {
              label: "a",
              prompt: "List three ecological services the wetland provides.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain two ways development could harm the ecosystem.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Propose two compromise solutions that address both housing needs and conservation.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ecosystem services",
                statement:
                  "Wetlands filter water, buffer storms, support biodiversity.",
              },
              {
                kind: "principle",
                name: "Trade-offs",
                statement:
                  "Development and conservation require balancing competing needs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Water filtration — wetland plants absorb pollutants.",
                marks: 1,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Storm buffer — absorbs floodwaters, reduces damage.",
                marks: 1,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Biodiversity/nursery habitat — supports fish, birds, plants.",
                marks: 1,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "Harm 1: habitat destruction removes species and breeding grounds.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Harm 2: increased runoff/pollution degrades remaining water quality.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Harm 3: fragmentation isolates populations, reducing genetic diversity.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Compromise 1: build on part of site, preserve core wetland as reserve.",
                marks: 1,
                markCode: "B",
                part: "c",
              },
              {
                reasoning:
                  "Compromise 2: restore/create equivalent wetland elsewhere (mitigation banking).",
                marks: 1,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Compromise 3: higher-density housing on smaller footprint.",
                marks: 1,
                markCode: "B",
                part: "c",
              },
              {
                reasoning:
                  "Compromise 4: green infrastructure — permeable surfaces, rain gardens.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) filtration, storm buffer, habitat (b) habitat loss, pollution, fragmentation (c) partial development + mitigation.",
            commonErrors: [
              "Framing as all-or-nothing; ignoring compromise options.",
            ],
            examinerNote: "3+3+4 = 10.",
          },
        },
      ],
    },
  ],
};
