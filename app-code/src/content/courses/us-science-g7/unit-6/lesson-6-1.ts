import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "s7-u6-lesson-6-1",
  code: "6-1",
  title: "Energy Flow in Ecosystems",
  goal: "I CAN explain how energy flows through food chains and food webs, construct food chains, and describe the roles of producers, consumers and decomposers.",
  standards: [
    "MS-LS2-1",
    "MS-LS2-2",
    "SEP: Developing and Using Models",
    "SEP: Analyzing and Interpreting Data",
  ],
  vocabulary: [
    {
      term: "Producer",
      definition:
        "An organism that makes its own food through photosynthesis, such as plants and algae.",
    },
    {
      term: "Consumer",
      definition: "An organism that obtains energy by eating other organisms.",
    },
    {
      term: "Decomposer",
      definition:
        "An organism that breaks down dead matter and recycles nutrients.",
    },
    {
      term: "Food chain",
      definition: "A sequence showing who eats whom in an ecosystem.",
    },
    {
      term: "Food web",
      definition: "A network of interconnected food chains in an ecosystem.",
    },
    {
      term: "Trophic level",
      definition:
        "A position in a food chain: producer, primary consumer, secondary consumer, etc.",
    },
    {
      term: "Energy pyramid",
      definition:
        "A diagram showing that only about 10% of energy passes to the next trophic level.",
    },
  ],
  concepts: [
    {
      id: "s7-u6-trophic-levels",
      title: "Trophic levels and food chains",
      skill:
        "Identify producers, consumers and decomposers and construct food chains.",
      lesson: {
        sections: [
          {
            heading: "Producers, consumers and decomposers",
            body: "Every ecosystem depends on three groups of organisms:\n\n- **Producers** (autotrophs): plants, algae and some bacteria make their own food through photosynthesis. They capture energy from sunlight.\n- **Consumers** (heterotrophs): herbivores eat plants; carnivores eat animals; omnivores eat both.\n- **Decomposers**: fungi and bacteria break down dead organisms and waste, returning nutrients to the soil for producers to reuse.",
          },
          {
            heading: "Trophic levels in a food chain",
            body: "A food chain shows energy transfer:\n\n$$\text{grass} \rightarrow \text{rabbit} \rightarrow \text{fox}$$\n\n- **Level 1**: Producers (grass)\n- **Level 2**: Primary consumers (herbivores like rabbit)\n- **Level 3**: Secondary consumers (carnivores like fox)\n- **Level 4+**: Tertiary consumers (top predators)\n\nDecomposers break down organisms at every level, recycling nutrients back to producers.",
          },
        ],
        keyFormulas: [
          {
            name: "Trophic levels",
            statement:
              "Producer → primary consumer → secondary consumer → tertiary consumer.",
          },
          {
            name: "Food chain",
            statement: "Shows who eats whom; arrows point from food to eater.",
          },
          {
            name: "Decomposers",
            statement: "Recycle nutrients from dead matter to producers.",
          },
        ],
        workedExample: {
          problem:
            "Identify the trophic level of each organism in: algae → shrimp → fish → heron.",
          solution:
            "Algae = producer (level 1), shrimp = primary consumer (level 2), fish = secondary consumer (level 3), heron = tertiary consumer (level 4).",
        },
      },
      questions: [
        {
          id: "s7-u6-trophic-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organism is a producer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rabbit" },
              { id: "b", text: "Grass" },
              { id: "c", text: "Fox" },
              { id: "d", text: "Fungus" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Producer",
                statement: "Makes its own food through photosynthesis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Grass is a plant that photosynthesizes; it is a producer.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Grass.",
            commonErrors: [
              "Choosing (d): fungus is a decomposer, not a producer.",
            ],
          },
        },
        {
          id: "s7-u6-trophic-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Construct a food chain from: eagle, snake, grass, mouse, grasshopper.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Food chain",
                statement:
                  "Sequence showing energy flow from producer to consumers.",
              },
            ],
            steps: [
              {
                reasoning: "Grass is the producer; grasshopper eats grass.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Mouse eats grasshopper; snake eats mouse.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Eagle eats snake — chain: grass → grasshopper → mouse → snake → eagle.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "Grass → grasshopper → mouse → snake → eagle.",
            commonErrors: [
              "Putting the eagle at the bottom or reversing arrows.",
            ],
          },
        },
        {
          id: "s7-u6-trophic-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the role of decomposers in an ecosystem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Decomposer",
                statement: "Breaks down dead matter and recycles nutrients.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Decomposers (fungi, bacteria) break down dead organisms and waste.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "They release nutrients (nitrogen, phosphorus, etc.) back into soil and water.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Producers use these nutrients to grow, completing the nutrient cycle.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Without decomposers, nutrients would be locked in dead matter and ecosystems would collapse.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Decomposers recycle nutrients from dead matter to producers; essential for ecosystem sustainability.",
            commonErrors: [
              "Saying decomposers produce energy; they recycle nutrients.",
            ],
          },
        },
        {
          id: "s7-u6-trophic-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "In a pond ecosystem: algae → water flea → small fish → heron → decomposers.",
          parts: [
            {
              label: "a",
              prompt: "Identify the producer and all consumer levels.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "If algae disappear, predict the effect on the heron.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Explain the role of decomposers in this ecosystem.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Why are there usually fewer herons than small fish?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Energy pyramid",
                statement: "Only ~10% of energy passes to next trophic level.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Producer: algae. Primary: water flea. Secondary: small fish. Tertiary: heron.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Heron population would decline because its food source (small fish) would starve without algae.",
                marks: 2,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Decomposers break down dead organisms, recycling nutrients to algae.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Energy loss at each level means less energy for top predators; fewer individuals can be supported.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Algae producer; flea primary, fish secondary, heron tertiary (b) Heron declines (c) Recycle nutrients (d) Energy loss limits top predator numbers.",
            commonErrors: ["Saying herons eat algae directly."],
          },
        },
      ],
    },
    {
      id: "s7-u6-energy-pyramid",
      title: "Energy pyramids and the 10% rule",
      skill:
        "Explain why energy decreases at each trophic level and calculate approximate energy transfer.",
      lesson: {
        sections: [
          {
            heading: "The 10% rule",
            body: "Only about **10% of the energy** at one trophic level is transferred to the next. The rest is lost as:\n\n- **Heat** from metabolic processes (most loss)\n- **Waste** (feces, urine)\n- **Unused energy** (not all food is eaten or digested)\n\nThis is why food chains rarely exceed 4-5 trophic levels — there isn't enough energy to support more.",
          },
          {
            heading: "Energy pyramid",
            body: "An **energy pyramid** shows the decreasing energy at each level:\n\n$$1000\text{ kcal} \rightarrow 100\text{ kcal} \rightarrow 10\text{ kcal} \rightarrow 1\text{ kcal}$$\n\nThe wide base represents producers with the most energy; the narrow top represents top predators with the least. This explains why there are always more producers than herbivores, and more herbivores than carnivores.",
          },
        ],
        keyFormulas: [
          {
            name: "10% rule",
            statement: "Only ~10% of energy transfers to next trophic level.",
          },
          {
            name: "Energy losses",
            statement: "Heat, waste, and unused energy account for 90% loss.",
          },
          {
            name: "Energy pyramid",
            statement: "Wide base = producers; narrow top = top predators.",
          },
        ],
        workedExample: {
          problem:
            "If producers capture 10,000 kcal of energy, how much reaches secondary consumers?",
          solution:
            "10,000 × 10% = 1,000 kcal to primary consumers; 1,000 × 10% = 100 kcal to secondary consumers.",
        },
      },
      questions: [
        {
          id: "s7-u6-energy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What percentage of energy typically transfers to the next trophic level?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "100%" },
              { id: "b", text: "50%" },
              { id: "c", text: "10%" },
              { id: "d", text: "1%" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "10% rule",
                statement: "~10% of energy transfers to next trophic level.",
              },
            ],
            steps: [
              {
                reasoning:
                  "About 10% of energy is transferred; 90% is lost as heat, waste, and unused energy.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** 10%.",
            commonErrors: ["Thinking all energy is transferred."],
          },
        },
        {
          id: "s7-u6-energy-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Where does the 'lost' energy go?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Energy loss",
                statement:
                  "Heat, waste, and unused energy account for 90% loss.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Most energy is lost as heat from metabolic processes.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Some energy is lost in waste (feces, urine) and uneaten food parts.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Only a small fraction is used for growth, reproduction and stored for the next level.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Heat (most), waste, and unused energy account for the 90% loss.",
            commonErrors: [
              "Saying energy is destroyed; it is transformed to heat.",
            ],
          },
        },
        {
          id: "s7-u6-energy-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why are food chains rarely longer than 4-5 trophic levels?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "10% rule",
                statement: "Energy decreases by ~90% each level.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each level loses ~90% of energy as heat, waste and unused energy.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "After 4-5 levels, too little energy remains to support another trophic level.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "There wouldn't be enough energy for organisms to survive, grow and reproduce.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "This is why top predators are rare and food chains are short.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Energy loss at each level means insufficient energy remains to support more trophic levels.",
            commonErrors: [
              "Saying predators run out of food; it's energy, not just food.",
            ],
          },
        },
        {
          id: "s7-u6-energy-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A grassland ecosystem has producers capturing 100,000 kcal of solar energy.",
          parts: [
            {
              label: "a",
              prompt: "How much energy reaches primary consumers?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How much reaches secondary consumers?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "How much reaches tertiary consumers?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Why can't there be a fifth trophic level?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "10% rule",
                statement: "Energy × 0.1 at each level.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "100,000 × 10% = 10,000 kcal to primary consumers.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "10,000 × 10% = 1,000 kcal to secondary consumers.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "1,000 × 10% = 100 kcal to tertiary consumers.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Only 10 kcal would remain — insufficient to support a viable population.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) 10,000 kcal (b) 1,000 kcal (c) 100 kcal (d) Only 10 kcal remains — too little.",
            commonErrors: [
              "Applying 10% incorrectly or forgetting compounding.",
            ],
          },
        },
      ],
    },
    {
      id: "s7-u6-food-webs",
      title: "Food webs and ecosystem stability",
      skill:
        "Explain how food webs differ from food chains and how they contribute to ecosystem stability.",
      lesson: {
        sections: [
          {
            heading: "Food webs vs food chains",
            body: "A **food chain** is a single linear sequence. Real ecosystems have **food webs** — interconnected food chains where organisms eat and are eaten by multiple species.\n\nExample: A grasshopper eats grass; it is eaten by a mouse, a bird and a spider. Each of those is eaten by different predators. This complexity provides stability.",
          },
          {
            heading: "Ecosystem stability",
            body: "Food webs contribute to stability because:\n\n- If one prey species declines, predators can switch to other food sources.\n- If one predator disappears, prey populations may be controlled by other predators.\n- Diversity of feeding relationships buffers against disturbances.\n\nIn contrast, a simple food chain is fragile: remove one species and the whole chain can collapse.",
          },
        ],
        keyFormulas: [
          {
            name: "Food web",
            statement:
              "Network of interconnected food chains showing multiple feeding relationships.",
          },
          {
            name: "Stability",
            statement:
              "Diverse food webs resist disturbance better than simple chains.",
          },
          {
            name: "Redundancy",
            statement:
              "Multiple food sources provide backup if one species declines.",
          },
        ],
        workedExample: {
          problem: "Why is a food web more stable than a food chain?",
          solution:
            "Organisms have multiple food sources and predators, so the loss of one species doesn't collapse the entire system.",
        },
      },
      questions: [
        {
          id: "s7-u6-web-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How does a food web differ from a food chain?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Food webs show only producers; food chains show all levels",
              },
              {
                id: "b",
                text: "Food webs show multiple interconnected feeding relationships; food chains show one linear sequence",
              },
              { id: "c", text: "Food webs are shorter than food chains" },
              { id: "d", text: "They are the same thing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Food web",
                statement: "Network of interconnected food chains.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Food webs show multiple feeding relationships; food chains show a single sequence.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "**(b)** Food webs show multiple interconnected feeding relationships.",
            commonErrors: ["Thinking food webs are just longer food chains."],
          },
        },
        {
          id: "s7-u6-web-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two ways food webs contribute to ecosystem stability.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Ecosystem stability",
                statement:
                  "Diverse feeding relationships buffer against disturbance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "If one prey species declines, predators can switch to other food sources.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "If one predator disappears, prey are still controlled by other predators.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Diversity of feeding relationships makes the system resilient to changes.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Multiple food sources and predators provide redundancy and resilience.",
            commonErrors: [
              "Saying food webs are always stable regardless of diversity.",
            ],
          },
        },
        {
          id: "s7-u6-web-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A pesticide kills all the insects in a grassland ecosystem. Predict two effects on the food web.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Trophic cascade",
                statement: "Loss of one group affects all connected levels.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Insect-eating birds and animals lose a food source and may decline or die.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Predators that eat those birds lose food and may decline.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Plants may increase if herbivorous insects are gone, changing the ecosystem.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "The food web is disrupted at multiple levels, showing interconnectedness.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Insect predators decline; their predators decline; plants may increase — cascading effects.",
            commonErrors: ["Saying only insects are affected."],
          },
        },
        {
          id: "s7-u6-web-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare a simple food chain and a complex food web in terms of stability.",
          parts: [
            { label: "a", prompt: "Define each term.", marks: 2 },
            {
              label: "b",
              prompt: "Which is more stable? Explain why.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Give an example of what happens if the top predator is removed from each.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Food chain vs web",
                statement: "Chain = linear; web = interconnected network.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Food chain: single linear sequence. Food web: multiple interconnected chains.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Food web is more stable due to redundancy and multiple food sources.",
                marks: 3,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Food chain: removing top predator causes prey overpopulation, ecosystem imbalance.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Food web: other predators may control prey; system adjusts.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Chain = linear; web = network (b) Web more stable — redundancy (c) Chain collapses; web adjusts.",
            commonErrors: ["Saying food chains are always more stable."],
          },
        },
      ],
    },
  ],
};
