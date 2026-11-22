import type { Lesson } from "../../../types.ts";

export const lesson133: Lesson = {
  id: "edps3-u1-lesson-1-3",
  code: "1-3",
  title: "Habitats and Food Chains",
  goal: "I CAN describe habitats and construct simple food chains.",
  standards: ["Year 3 Science: Habitats and food chains"],
  vocabulary: [
    { term: "Habitat", definition: "The place where an organism lives." },
    { term: "Food chain", definition: "Sequence showing who eats whom." },
    {
      term: "Producer/consumer",
      definition: "Makes own food / eats other organisms.",
    },
    { term: "Predator/prey", definition: "Hunts / is hunted." },
  ],
  concepts: [
    {
      id: "edps3-u1-habitat",
      title: "Habitats and adaptations",
      skill: "Describe habitats and how organisms are adapted to them.",
      lesson: {
        sections: [
          {
            heading: "Habitats",
            body: "A **habitat** provides food, water, shelter and space. Different habitats: pond, woodland, desert, ocean, garden. Each supports different animals and plants suited to its conditions.",
          },
          {
            heading: "Adaptations",
            body: "**Adaptations** are features that help survival: camel's hump stores fat for desert; penguin's feathers insulate in cold; cactus stores water. Camouflage helps hide from predators.",
          },
        ],
        keyFormulas: [
          { name: "Habitat", statement: "Food, water, shelter, space" },
          { name: "Adaptation", statement: "Feature for survival" },
          { name: "Camouflage", statement: "Blending to hide" },
        ],
        workedExample: {
          problem: "Why do polar bears have thick fur?",
          solution: "Insulation adaptation for cold Arctic habitat.",
        },
      },
      questions: [
        {
          id: "edps3-u1-ha-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a habitat provide?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Food, water, shelter and space" },
              { id: "b", text: "Only food" },
              { id: "c", text: "Only water" },
              { id: "d", text: "Toys" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Habitat",
                statement: "Provides all survival needs.",
              },
            ],
            steps: [
              {
                reasoning: "Habitat needs identified.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Food, water, shelter and space",
            commonErrors: ["Partial answer."],
          },
        },
        {
          id: "edps3-u1-ha-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is an adaptation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A habitat" },
              { id: "b", text: "A predator" },
              { id: "c", text: "A feature helping survival" },
              { id: "d", text: "A type of food" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Adaptation",
                statement: "Survival feature.",
              },
            ],
            steps: [
              { reasoning: "Recall definition.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: survival feature.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** A feature helping survival",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edps3-u1-ha-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give an example of an adaptation and explain how it helps.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Adaptation",
                statement: "Feature matched to environment.",
              },
            ],
            steps: [
              { reasoning: "Example given.", marks: 1, markCode: "A" },
              { reasoning: "Benefit explained.", marks: 1, markCode: "A" },
              { reasoning: "Clear link.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. 'Camels store fat in humps to survive desert without water'",
            commonErrors: ["No benefit explained."],
          },
        },
        {
          id: "edps3-u1-ha-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Predict: what adaptations would an animal in a snowy habitat need? Explain each.",
          parts: [
            { label: "a", prompt: "Adaptation 1", marks: 1 },
            { label: "b", prompt: "Adaptation 2", marks: 1 },
            { label: "c", prompt: "Adaptation 3", marks: 1 },
            { label: "d", prompt: "All explained", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cold adaptations",
                statement: "Thick fur, fat layer, small ears.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Valid adaptation.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Valid adaptation.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Valid adaptation.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Each explained.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "e.g. 'Thick fur for warmth; layer of fat for insulation; small ears to reduce heat loss'",
            commonErrors: ["Adaptations don't fit cold."],
          },
        },
      ],
    },
    {
      id: "edps3-u1-foodchain",
      title: "Food chains",
      skill: "Construct and interpret simple food chains.",
      lesson: {
        sections: [
          {
            heading: "Food chains",
            body: "A **food chain** shows energy flow: **producer → primary consumer → secondary consumer → top predator**. Arrows point towards the eater (show energy flow). Producers (plants) make their own food via photosynthesis.",
          },
          {
            heading: "Decomposers",
            body: "**Decomposers** (fungi, bacteria, worms) break down dead matter, returning nutrients to soil. Without them, dead plants/animals would pile up.",
          },
        ],
        keyFormulas: [
          { name: "Food chain", statement: "Producer → consumer → predator" },
          { name: "Arrow direction", statement: "Shows energy flow" },
          { name: "Decomposer", statement: "Breaks down dead matter" },
        ],
        workedExample: {
          problem: "Order: grass → rabbit → fox → (nothing eats fox).",
          solution: "Grass (producer) → rabbit (herbivore) → fox (carnivore).",
        },
      },
      questions: [
        {
          id: "edps3-u1-fc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a producer in a food chain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A plant that makes its own food" },
              { id: "b", text: "An animal that eats plants" },
              { id: "c", text: "A decomposer" },
              { id: "d", text: "A predator" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Producer",
                statement: "Makes own food (plants).",
              },
            ],
            steps: [
              { reasoning: "Producer = plant.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A plant that makes its own food",
            commonErrors: ["Confused with consumer."],
          },
        },
        {
          id: "edps3-u1-fc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "In grass → rabbit → fox, what is the fox?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Producer" },
              { id: "b", text: "Secondary consumer" },
              { id: "c", text: "Primary consumer" },
              { id: "d", text: "Decomposer" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Food chain",
                statement: "Fox eats rabbit = secondary consumer.",
              },
            ],
            steps: [
              { reasoning: "Identify position.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: secondary consumer.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Secondary consumer",
            commonErrors: ["Wrong trophic level."],
          },
        },
        {
          id: "edps3-u1-fc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Put in order: owl, grass, mouse, snake (who eats whom).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Food chain order",
                statement: "Grass→mouse→snake→owl.",
              },
            ],
            steps: [
              { reasoning: "Producer first.", marks: 1, markCode: "A" },
              { reasoning: "Consumers ordered.", marks: 1, markCode: "A" },
              { reasoning: "Correct chain.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Grass → mouse → snake → owl",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edps3-u1-fc-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What would happen if all the foxes in a food chain disappeared? Predict and explain.",
          parts: [
            { label: "a", prompt: "Effect on prey", marks: 1 },
            { label: "b", prompt: "Knock-on effect", marks: 1 },
            { label: "c", prompt: "Chain imbalance", marks: 1 },
            { label: "d", prompt: "Full prediction", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Food chains",
                statement: "Removing predator → prey population rises.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Prey effect stated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Knock-on noted.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Imbalance explained.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Rabbit population would rise without foxes; grass would be eaten more; ecosystem imbalances",
            commonErrors: ["No chain reasoning."],
          },
        },
      ],
    },
  ],
};
