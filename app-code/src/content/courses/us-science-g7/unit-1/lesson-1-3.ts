import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "s7-u1-lesson-1-3",
  code: "1-3",
  title: "Ecosystems",
  goal: "I CAN model energy flow in food chains, webs and pyramids using the 10% rule, and explain how competition, predation, symbiosis and limiting factors affect populations.",
  standards: [
    "MS-LS2-3",
    "MS-LS2-1",
    "MS-LS2-2",
    "SEP: Analyzing and Interpreting Data",
    "SEP: Engaging in Argument from Evidence",
  ],
  vocabulary: [
    {
      term: "Producer",
      definition:
        "An organism, such as a plant, that makes its own food using light energy.",
    },
    {
      term: "Consumer",
      definition: "An organism that gets energy by eating other organisms.",
    },
    {
      term: "Decomposer",
      definition:
        "An organism that breaks down dead matter and returns nutrients to the environment.",
    },
    {
      term: "Trophic level",
      definition:
        "The position of an organism in a food chain, based on how it gets energy.",
    },
    {
      term: "Limiting factor",
      definition:
        "A resource or condition that restricts the size of a population.",
    },
    {
      term: "Carrying capacity",
      definition:
        "The largest population an environment can support over time.",
    },
    {
      term: "Symbiosis",
      definition:
        "A close, long-term relationship between two different species.",
    },
  ],
  concepts: [
    {
      id: "s7-u1-food-webs-energy",
      title: "Food chains, food webs and energy pyramids",
      skill:
        "Interpret food chains and webs and calculate energy transfer using the 10% rule.",
      lesson: {
        sections: [
          {
            heading: "Food chains and food webs",
            body: "A **food chain** shows how energy and matter move from one organism to the next. Arrows point in the direction of energy flow: from the organism that is eaten to the organism that eats it.\n\ngrass $\\rightarrow$ grasshopper $\\rightarrow$ frog $\\rightarrow$ snake\n\n**Producers** begin every chain. **Primary consumers** eat producers, **secondary consumers** eat primary consumers, and so on. **Decomposers** break down dead organisms and return nutrients to the soil. A **food web** joins many food chains together and shows that most organisms eat, and are eaten by, more than one species.",
          },
          {
            heading: "Energy pyramids and the 10% rule",
            body: "At each step, only about **10%** of the energy in one trophic level is stored in the bodies of organisms at the next level. The rest is used for life processes or lost as heat.\n\n$$\\text{energy at next level}\\approx0.10\\times\\text{energy at current level}$$\n\nBecause energy decreases at each level, an energy pyramid gets narrower toward the top, and food chains rarely have more than four or five levels.",
          },
        ],
        keyFormulas: [
          {
            name: "10% rule",
            statement:
              "Energy at next level $\\approx0.10\\times$ energy at the level below",
          },
          {
            name: "Direction of arrows",
            statement: "Arrows point from the food to the feeder",
          },
        ],
        workedExample: {
          problem:
            "Producers in a meadow contain 20 000 kJ of energy. Estimate the energy available to secondary consumers.",
          solution:
            "Primary consumers receive $0.10\\times20\\,000=2000$ kJ. Secondary consumers receive $0.10\\times2000=200$ kJ.",
        },
      },
      questions: [
        {
          id: "s7-u1-food-webs-energy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the food chain algae $\\rightarrow$ shrimp $\\rightarrow$ fish, which organism is the producer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shrimp" },
              { id: "b", text: "Fish" },
              { id: "c", text: "There is no producer" },
              { id: "d", text: "Algae" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Producer",
                statement:
                  "A producer makes its own food, so it starts the food chain.",
              },
            ],
            steps: [
              {
                reasoning: "Algae photosynthesize and start the chain.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** Algae",
            commonErrors: [
              "Choosing the fish because it is at the end of the arrows.",
            ],
            examinerNote: "B1 for algae.",
          },
        },
        {
          id: "s7-u1-food-webs-energy-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A food chain is: grass $\\rightarrow$ mouse $\\rightarrow$ snake $\\rightarrow$ hawk. The grass contains 50 000 kJ of energy. Use the 10% rule.\n\nCalculate the energy, in kJ, available to the hawk.",
          response: {
            type: "numeric",
            parts: [{ label: "Energy to the hawk", answer: 50, unit: "kJ" }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "10% rule",
                statement:
                  "About 10% of energy passes to the next trophic level.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The hawk is three transfers above the grass, so multiply by 0.10 three times.",
                working: "50\\,000\\times0.10^3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Mouse 5000 kJ, snake 500 kJ.",
                working: "50\\,000\\rightarrow5000\\rightarrow500",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Hawk receives 10% of 500 kJ.",
                working: "0.10\\times500=50\\text{ kJ}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$50\\text{ kJ}$",
            commonErrors: [
              "Applying the rule only once or twice (giving 5000 or 500 kJ).",
            ],
            examinerNote:
              "M1 for correct number of 10% steps (3). M1 for intermediate values. A1 for 50 kJ.",
          },
        },
        {
          id: "s7-u1-food-webs-energy-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a food chain usually has no more than four or five trophic levels, and why there are many more plants than lions in a savanna.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "10% rule",
                statement:
                  "Only about 10% of the energy at one level is stored at the next; the rest is used or lost as heat.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Only about 10% of the energy passes to the next level.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "The rest is used for life processes (movement, respiration, keeping warm) and lost as heat, or is not eaten.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "After four or five levels there is too little energy left to support another level.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Top consumers such as lions receive the least energy, so the environment can support only a small number of them compared with plants.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Energy decreases by about 90% at each level, so little remains at the top; the savanna can support many producers but few top consumers.",
            commonErrors: [
              "Saying the energy is destroyed; it is transferred as heat.",
            ],
            examinerNote:
              "Allow 'energy is lost as heat to the surroundings'. Reject 'energy is used up' without detail.",
          },
        },
        {
          id: "s7-u1-food-webs-energy-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "In a pond food web, algae are eaten by water fleas and by tadpoles. Water fleas are eaten by small fish. Tadpoles are eaten by small fish and by herons. Small fish are eaten by herons. Algae contain 100 000 kJ per year.",
          parts: [
            {
              label: "a",
              prompt:
                "Write one food chain from this web that has four organisms.",
              marks: 1,
            },
            {
              label: "b",
              prompt:
                "Use the 10% rule to calculate the energy available to the herons in your chain from (a).",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Predict what happens to the number of small fish if the water fleas die from a disease, and explain.",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "Construct an explanation for why the energy available to small fish is less than the energy in the algae.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "10% rule",
                statement:
                  "About 10% of energy passes to the next trophic level.",
              },
              {
                kind: "principle",
                name: "Food web interdependence",
                statement:
                  "A change in one population affects the populations that eat it or compete for its food.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Algae to water flea to small fish to heron, or algae to tadpole to small fish to heron, with arrows in the correct direction.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Three transfers: 100 000 to 10 000 to 1000 to 100 kJ.",
                working: "100\\,000\\times0.10^3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "100\\text{ kJ}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Prediction: the number of small fish decreases, but not to zero.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Less food is available because the water fleas are gone.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Small fish can still eat tadpoles, so the decrease is limited; the herons may eat more tadpoles.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Only some of the algae is eaten; the rest dies and is decomposed.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Much of the energy eaten is used in life processes such as respiration and movement and is transferred to the environment as heat.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Only about 10% is stored in body tissue passed to the next level.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Algae, water flea, small fish, heron (b) 100 kJ (c) Fish decrease because less food, but tadpoles provide an alternative (d) Energy lost as heat and used in life processes; only about 10% passes on.",
            commonErrors: [
              "Arrows drawn backward in (a).",
              "In (c) predicting that all the small fish will die.",
            ],
            examinerNote:
              "(a) Both chains with four organisms are acceptable; the food chain with tadpoles gives the same answer in (b). (b) Allow ecf for the chain length.",
          },
        },
      ],
    },
    {
      id: "s7-u1-population-interactions",
      title: "Competition, predation, symbiosis and limiting factors",
      skill:
        "Explain how interactions and resource availability affect populations in an ecosystem.",
      lesson: {
        sections: [
          {
            heading: "Interactions between organisms",
            body: "- **Competition**: organisms use the same limited resource, such as food, water, light or space.\n- **Predation**: a predator hunts and eats prey. Predator and prey populations often rise and fall in linked cycles.\n- **Symbiosis**: a close relationship between species. In **mutualism** both benefit (bees and flowers). In **commensalism** one benefits and the other is unaffected. In **parasitism** one benefits and the other is harmed (ticks on a deer).",
          },
          {
            heading: "Limiting factors and carrying capacity",
            body: "A **limiting factor** such as food, water, space, predators or disease restricts the size of a population. The **carrying capacity** is the largest population the environment can support over time. If a population grows above it, resources run short and the population falls.\n\nWhen reading population graphs, look for the trend, the highest and lowest values, and whether the line levels off.",
          },
        ],
        keyFormulas: [
          { name: "Mutualism", statement: "Both species benefit" },
          {
            name: "Parasitism",
            statement: "One species benefits and the other is harmed",
          },
          {
            name: "Carrying capacity",
            statement:
              "Maximum population an environment can support over time",
          },
        ],
        workedExample: {
          problem:
            "A flock of 40 birds shares a lake that can supply food for about 100 birds. After a new flock of 80 birds arrives, many birds starve. Explain why.",
          solution:
            "The lake's carrying capacity is about 100 birds. With 40 + 80 = 120 birds, the population is above this limit, so the food supply (the limiting factor) is not enough and competition causes some birds to starve.",
        },
      },
      questions: [
        {
          id: "s7-u1-population-interactions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A tick feeds on the blood of a deer and the deer is harmed. What type of relationship is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Predation by a producer" },
              { id: "b", text: "Commensalism" },
              { id: "c", text: "Parasitism" },
              { id: "d", text: "Mutualism" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Parasitism",
                statement:
                  "One species benefits and the other is harmed, usually without being killed quickly.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The tick benefits and the deer is harmed, which is parasitism.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Parasitism",
            commonErrors: [
              "Choosing mutualism because the two species live closely together.",
            ],
            examinerNote: "B1 for parasitism.",
          },
        },
        {
          id: "s7-u1-population-interactions-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The graph of a rabbit population on an island shows it rising quickly, then leveling off at about 500 rabbits for many years.\n\nIdentify what the 500 value represents and state one limiting factor that could cause it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Carrying capacity",
                statement:
                  "The largest population an environment can support over time.",
              },
            ],
            steps: [
              {
                reasoning:
                  "500 is the carrying capacity of the island for rabbits.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Any valid limiting factor: food (grass), space, water, predators, disease.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Carrying capacity; for example, the limited food supply.",
            commonErrors: [
              "Saying 500 is the starting population.",
              "Naming a non-limiting factor such as the island's size in square kilometers without linking it to resources.",
            ],
            examinerNote: "B1 carrying capacity. B1 a valid limiting factor.",
          },
        },
        {
          id: "s7-u1-population-interactions-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a forest, the number of hares rises, followed by a rise in the number of lynx. Then the hare population falls, followed by a fall in the lynx population. This pattern repeats.\n\nUse evidence from the pattern to construct an explanation for the cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Predator-prey cycle",
                statement:
                  "Predator numbers depend on prey availability, and prey numbers are limited by predation and food.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Claim: the predator population is controlled by prey numbers, and the prey population is partly controlled by predators.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Evidence: when hares increase, lynx increase afterward because more food is available.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Evidence: when lynx increase, hares decrease because more are eaten.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Reasoning: with fewer hares, lynx starve and decrease, allowing hares to recover, so the cycle repeats.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "More hares support more lynx; more lynx eat more hares so hares fall; fewer hares mean lynx fall; hares then recover and the cycle repeats.",
            commonErrors: [
              "Saying the lynx population changes first.",
              "Not linking the change in one population to the other.",
            ],
            examinerNote:
              "Allow a clear claim-evidence-reasoning structure in any order.",
          },
        },
        {
          id: "s7-u1-population-interactions-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A researcher studies a pond. The number of fish was about 200 for several years. A new species of larger fish was introduced. Over three years the original fish fell to 60 and the new species rose to 150, then leveled off.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify the type of interaction between the two fish species, assuming they eat the same food.",
              marks: 1,
            },
            {
              label: "b",
              prompt:
                "Calculate the percent decrease in the original fish population.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Explain why the new species leveled off at 150.",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "Evaluate one way the researcher could test the claim that competition for food caused the decrease in the original fish.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Competition",
                statement:
                  "Organisms compete when they use the same limited resource.",
              },
              {
                kind: "definition",
                name: "Limiting factor",
                statement:
                  "A resource or condition that restricts population size.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Competition.", marks: 1, markCode: "B" },
              {
                part: "b",
                reasoning:
                  "Decrease = 200 - 60 = 140; divide by the original and multiply by 100.",
                working: "\\frac{200-60}{200}\\times100",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "70\\%",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "It reached the carrying capacity of the pond for that species.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "A limiting factor, such as food supply or space, restricted further growth.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Births equaled deaths once resources were fully used.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Compare the pond with similar ponds that have no new species, measuring the original fish population over time.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Measure the amount of food available or the stomach contents to show both species eat the same food.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Evaluation: the evidence supports the claim only if other factors, such as disease or temperature, are ruled out or controlled.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Competition (b) 70% decrease (c) Carrying capacity reached; a limiting factor such as food restricted growth (d) Compare with control ponds and measure food use, controlling other factors.",
            commonErrors: [
              "In (b) dividing by 60 (233%).",
              "In (b) giving the decrease as 140 without a percent.",
            ],
            examinerNote:
              "(b) Full marks for 70 or 70%. (d) Allow other valid designs, such as removing the new fish from one pond.",
          },
        },
      ],
    },
  ],
};
