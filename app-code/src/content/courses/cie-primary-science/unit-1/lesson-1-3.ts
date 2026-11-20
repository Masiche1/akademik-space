import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "cips-u1-lesson-1-3",
  code: "1-3",
  title: "Stage 3 — Life Cycles and Habitats",
  goal: "I CAN describe life cycles and identify habitats.",
  standards: ["Cambridge Primary Science 0097 Stage 3: living things",
  "Cambridge Primary Science 0097 framework substrands: 3Bp, 3Be"],
  stage: 3,
  vocabulary: [
    { term: "Life cycle", definition: "The stages a living thing goes through from birth to reproduction." },
    { term: "Habitat", definition: "The natural home of a plant or animal." },
    { term: "Metamorphosis", definition: "A change in body form during a life cycle, like caterpillar to butterfly." },
    { term: "Predator", definition: "An animal that hunts other animals for food." },
    { term: "Prey", definition: "An animal that is hunted by predators." },
  ],
  concepts: [
    {
      id: "cips-u1-s3-lifecycle",
      title: "Life cycles",
      skill: "Describe life cycles of plants and animals at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "Animal life cycles",
            body: "Most animals are born, grow, reproduce and die. Some change form: a butterfly goes egg → caterpillar → chrysalis → adult butterfly.",
          },
          {
            heading: "Plant life cycles",
            body: "Plants grow from seeds, flower, make seeds and die (annuals) or live for years (perennials).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Order the butterfly life cycle: adult, egg, chrysalis, caterpillar.",
          solution: "Egg → caterpillar → chrysalis → adult butterfly.",
        },
      },
      questions: [
        {
          id: "cips-u1-s3-lc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a life cycle?",
          response: { type: "mcq", choices: [
            { id: "a", text: "How long an animal lives" }, { id: "b", text: "The stages from birth to reproduction" }, { id: "c", text: "Where an animal lives" }, { id: "d", text: "What an animal eats" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Life cycle", statement: "Stages from birth to reproduction." }],
            steps: [{ reasoning: "A life cycle describes the stages of development.", marks: 1, markCode: "B" }],
            finalAnswer: "Stages of development",
          },
        },
        {
          id: "cips-u1-s3-lc-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What comes first in a plant's life cycle: seed, flower, or seedling?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Flower" }, { id: "b", text: "Seed" }, { id: "c", text: "Seedling" }, { id: "d", text: "Fruit" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Plant life cycle", statement: "Seed → seedling → adult → flower → seed." }],
            steps: [{ reasoning: "Plants start as seeds.", marks: 1, markCode: "B" }],
            finalAnswer: "Seed",
          },
        },
        {
          id: "cips-u1-s3-lc-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Put these in order: chrysalis, egg, adult butterfly, caterpillar.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Butterfly life cycle", statement: "Egg → caterpillar → chrysalis → adult." }],
            steps: [
              { reasoning: "Egg comes first.", marks: 1, markCode: "B" },
              { reasoning: "Then caterpillar, chrysalis, adult.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Egg, caterpillar, chrysalis, adult",
          },
        },
        {
          id: "cips-u1-s3-lc-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "How is a plant's life cycle different from a butterfly's?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Comparing life cycles", statement: "Identify differences." }],
            steps: [
              { reasoning: "Plants grow from seeds and do not change body form.", marks: 1, markCode: "B" },
              { reasoning: "Butterflies undergo metamorphosis (change form).", marks: 1, markCode: "B" },
              { reasoning: "Both reproduce to continue the cycle.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Plants don't change form; butterflies do",
          },
        },
      ],
    },
    {
      id: "cips-u1-s3-habitat",
      title: "Habitats and food chains",
      skill: "Identify habitats and describe food chains at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "Habitats",
            body: "A habitat is where a plant or animal lives. Different habitats support different life: a pond has fish and frogs; a desert has cacti and camels.",
          },
          {
            heading: "Food chains",
            body: "A food chain shows who eats whom. Grass → rabbit → fox. Arrows point from food to eater.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What is the habitat of a frog?",
          solution: "A pond or wetland — frogs need water to live and breed.",
        },
      },
      questions: [
        {
          id: "cips-u1-s3-ha-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a habitat?",
          response: { type: "mcq", choices: [
            { id: "a", text: "What an animal eats" }, { id: "b", text: "Where a plant or animal lives" }, { id: "c", text: "How an animal moves" }, { id: "d", text: "When an animal sleeps" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Habitat", statement: "Natural home of a living thing." }],
            steps: [{ reasoning: "A habitat is the natural home.", marks: 1, markCode: "B" }],
            finalAnswer: "Natural home",
          },
        },
        {
          id: "cips-u1-s3-ha-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Name a habitat where you might find a polar bear.",
          response: { type: "mcq", choices: [
            { id: "a", text: "Desert" }, { id: "b", text: "Arctic" }, { id: "c", text: "Rainforest" }, { id: "d", text: "Pond" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Habitat", statement: "Polar bears live in cold Arctic regions." }],
            steps: [{ reasoning: "Polar bears live in the Arctic.", marks: 1, markCode: "B" }],
            finalAnswer: "Arctic",
          },
        },
        {
          id: "cips-u1-s3-ha-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "In the food chain grass → rabbit → fox, what does the fox eat?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Food chain", statement: "Arrows point from food to eater." }],
            steps: [
              { reasoning: "The arrow points from rabbit to fox.", marks: 1, markCode: "B" },
              { reasoning: "The fox eats the rabbit.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "The rabbit",
          },
        },
        {
          id: "cips-u1-s3-ha-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "What might happen to a habitat if all the plants died?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Food chains", statement: "Plants support the whole chain." }],
            steps: [
              { reasoning: "Animals that eat plants would lose food.", marks: 1, markCode: "B" },
              { reasoning: "Predators would also lose food.", marks: 1, markCode: "B" },
              { reasoning: "The whole habitat would be affected.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Animals would lose food and struggle",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u1-s3-life-notes",
      title: "Stage 3 life cycles and habitats — revision notes",
      summary: "Life cycles, habitats, food chains, predator and prey.",
      sections: [
        { heading: "Life cycles", body: "Plants: seed → seedling → adult → flower → seed. Butterflies: egg → caterpillar → chrysalis → adult." },
        { heading: "Food chains", body: "Arrows point from food to eater. Plants are always at the start of a food chain." },
      ],
    },
  ],
};
