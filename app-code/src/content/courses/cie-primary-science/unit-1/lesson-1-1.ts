import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "cips-u1-lesson-1-1",
  code: "1-1",
  title: "Stage 1 — Plants and Animals",
  goal: "I CAN identify living things and what plants and animals need.",
  standards: ["Cambridge Primary Science 0097 Stage 1: living things",
  "Cambridge Primary Science 0097 framework substrands: 1Bs, 1Bp"],
  stage: 1,
  vocabulary: [
    { term: "Living thing", definition: "Something that grows, needs food and water, and can reproduce." },
    { term: "Plant", definition: "A living thing that makes its own food from sunlight." },
    { term: "Animal", definition: "A living thing that eats plants or other animals." },
    { term: "Non-living", definition: "Something that does not grow, need food or reproduce." },
    { term: "Seed", definition: "The part of a plant that can grow into a new plant." },
  ],
  concepts: [
    {
      id: "cips-u1-s1-living",
      title: "Living and non-living things",
      skill: "Identify living things at Stage 1 level.",
      lesson: {
        sections: [
          {
            heading: "What makes something living?",
            body: "Living things grow, need food and water, move or respond, and can have babies or seeds. A rock does not do these things, so it is non-living.",
          },
          {
            heading: "Plants and animals",
            body: "Plants make their own food using sunlight. Animals must eat plants or other animals to get food.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Is a car alive? Why or why not?",
          solution: "No — a car does not grow, need food, or reproduce.",
        },
      },
      questions: [
        {
          id: "cips-u1-s1-lv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a living thing?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A stone" }, { id: "b", text: "A tree" }, { id: "c", text: "A toy car" }, { id: "d", text: "A pencil" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Living thing", statement: "Grows, needs food and water, can reproduce." }],
            steps: [{ reasoning: "A tree grows, needs water and sunlight, and produces seeds.", marks: 1, markCode: "B" }],
            finalAnswer: "A tree",
          },
        },
        {
          id: "cips-u1-s1-lv-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two things all living things need.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Needs of living things", statement: "Food, water, air, shelter." }],
            steps: [
              { reasoning: "All living things need food and water.", marks: 1, markCode: "B" },
              { reasoning: "They also need air and shelter.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Food and water",
          },
        },
        {
          id: "cips-u1-s1-lv-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Is a bicycle a living thing? Explain your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Living thing", statement: "Must grow, need food, reproduce." }],
            steps: [
              { reasoning: "A bicycle does not grow or need food.", marks: 1, markCode: "B" },
              { reasoning: "It cannot reproduce, so it is non-living.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "No, it is non-living",
          },
        },
        {
          id: "cips-u1-s1-lv-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give one example of a living thing and one example of a non-living thing.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Living/non-living", statement: "Correct classification." }],
            steps: [
              { reasoning: "Living example: any plant or animal (e.g. dog, flower).", marks: 1, markCode: "B" },
              { reasoning: "Non-living example: any object (e.g. chair, book).", marks: 1, markCode: "B" },
              { reasoning: "Both examples are correct classifications.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "e.g. dog (living), chair (non-living)",
          },
        },
        {
          id: "cips-u1-s1-lv-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a non-living thing?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A dog" }, { id: "b", text: "A flower" }, { id: "c", text: "A car" }, { id: "d", text: "A bird" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Living thing", statement: "Grows, needs food and water, can reproduce." }],
            steps: [{ reasoning: "A car does not grow, need food or reproduce.", marks: 1, markCode: "B" }],
            finalAnswer: "A car",
          },
        },
        {
          id: "cips-u1-s1-lv-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two things that all living things need to survive.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Needs of living things", statement: "Food, water, air, shelter." }],
            steps: [
              { reasoning: "All living things need food and water.", marks: 1, markCode: "B" },
              { reasoning: "They also need air and shelter.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "e.g. food and water",
          },
        },
        {
          id: "cips-u1-s1-lv-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a seed?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A part of a plant that can grow into a new plant" }, { id: "b", text: "A type of animal" }, { id: "c", text: "A rock" }, { id: "d", text: "A toy" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Seed", statement: "The part of a plant that can grow into a new plant." }],
            steps: [{ reasoning: "A seed can grow into a new plant.", marks: 1, markCode: "B" }],
            finalAnswer: "A part of a plant that can grow into a new plant",
          },
        },
        {
          id: "cips-u1-s1-lv-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is a pet dog a living thing? Give two reasons.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Living thing", statement: "Grows, needs food and water, can reproduce." }],
            steps: [
              { reasoning: "A dog grows and needs food and water.", marks: 1, markCode: "B" },
              { reasoning: "It can have puppies (reproduce).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "It grows, needs food and can have puppies",
          },
        },
        {
          id: "cips-u1-s1-lv-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which living things must eat food to get their energy?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Plants" }, { id: "b", text: "Animals" }, { id: "c", text: "Neither plants nor animals" }, { id: "d", text: "Both plants and animals" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Plants and animals", statement: "Plants make their own food; animals must eat." }],
            steps: [{ reasoning: "Animals must eat plants or other animals for food.", marks: 1, markCode: "B" }],
            finalAnswer: "Animals",
          },
        },
        {
          id: "cips-u1-s1-lv-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Your friend says a toy robot is alive because it moves. Is she right? Explain your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Living thing", statement: "Must grow, need food, reproduce." }],
            steps: [
              { reasoning: "A robot does not grow.", marks: 1, markCode: "B" },
              { reasoning: "It does not need food or water and cannot reproduce.", marks: 1, markCode: "B" },
              { reasoning: "So it is non-living even though it can move.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "No — it does not grow, need food or reproduce",
          },
        },
        {
          id: "cips-u1-s1-lv-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two examples of non-living things and say why they are non-living.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Non-living", statement: "Does not grow, need food or reproduce." }],
            steps: [
              { reasoning: "Two correct non-living examples (e.g. chair, book, toy).", marks: 1, markCode: "B" },
              { reasoning: "Reason: they do not grow, need food or reproduce.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "e.g. chair and book — they do not grow or need food",
          },
        },
        {
          id: "cips-u1-s1-lv-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a plant?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A cat" }, { id: "b", text: "A rose bush" }, { id: "c", text: "A ball" }, { id: "d", text: "A cup" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Plant", statement: "A living thing that makes its own food from sunlight." }],
            steps: [{ reasoning: "A rose bush is a plant.", marks: 1, markCode: "B" }],
            finalAnswer: "A rose bush",
          },
        },
        {
          id: "cips-u1-s1-lv-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Sort these into living and non-living: snail, stone, sunflower, bicycle, fish, pencil. Explain how you sorted them.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sorting living things", statement: "Use the features of living things." }],
            steps: [
              { reasoning: "Living: snail, sunflower, fish.", marks: 1, markCode: "B" },
              { reasoning: "Non-living: stone, bicycle, pencil.", marks: 1, markCode: "B" },
              { reasoning: "Explanation uses grow/food/reproduce features.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Living: snail, sunflower, fish; non-living: stone, bicycle, pencil",
          },
        },
        {
          id: "cips-u1-s1-lv-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a plant is a living thing even though it cannot move from place to place.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Living thing", statement: "Grows, needs food and water, can reproduce." }],
            steps: [
              { reasoning: "A plant grows from a seed into an adult.", marks: 1, markCode: "B" },
              { reasoning: "It needs water, air and sunlight to make food.", marks: 1, markCode: "B" },
              { reasoning: "It makes seeds so it can reproduce.", marks: 1, markCode: "B" },
              { reasoning: "Moving is not needed to be living — plants respond to light instead.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "It grows, needs water/sunlight and makes seeds",
          },
        },
        {
          id: "cips-u1-s1-lv-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What do ALL living things do?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Grow and can reproduce" }, { id: "b", text: "Fly" }, { id: "c", text: "Have fur" }, { id: "d", text: "Live in water" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Living thing", statement: "Grows, needs food and water, can reproduce." }],
            steps: [{ reasoning: "All living things grow and can reproduce.", marks: 1, markCode: "B" }],
            finalAnswer: "Grow and can reproduce",
          },
        },
        {
          id: "cips-u1-s1-lv-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A baby plant grows from a seed. Describe what it needs at each stage of its life to stay alive.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Plant needs", statement: "Water, sunlight, air, nutrients." }],
            steps: [
              { reasoning: "The seed needs water and warmth to germinate.", marks: 1, markCode: "B" },
              { reasoning: "The seedling needs sunlight, water and nutrients from soil.", marks: 1, markCode: "B" },
              { reasoning: "The adult plant keeps needing these to grow and make seeds.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Water, sunlight and nutrients at every stage",
          },
        },
      ],
    },
    {
      id: "cips-u1-s1-plants",
      title: "What plants need",
      skill: "Understand what plants need to grow at Stage 1 level.",
      lesson: {
        sections: [
          {
            heading: "Plant needs",
            body: "Plants need sunlight, water, air and nutrients from soil to grow. Without these, plants cannot survive.",
          },
          {
            heading: "Plant parts",
            body: "Roots take in water from soil. The stem carries water to leaves. Leaves use sunlight to make food. Flowers make seeds.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What would happen to a plant if it got no water?",
          solution: "The plant would wilt and eventually die because roots cannot take in water.",
        },
      },
      questions: [
        {
          id: "cips-u1-s1-pl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do plants need to grow?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only sunlight" }, { id: "b", text: "Water and sunlight" }, { id: "c", text: "Only soil" }, { id: "d", text: "Only air" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Plant needs", statement: "Water, sunlight, air, nutrients." }],
            steps: [{ reasoning: "Plants need water and sunlight (plus air and nutrients).", marks: 1, markCode: "B" }],
            finalAnswer: "Water and sunlight",
          },
        },
        {
          id: "cips-u1-s1-pl-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What part of a plant takes in water from the soil?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Leaves" }, { id: "b", text: "Flowers" }, { id: "c", text: "Roots" }, { id: "d", text: "Stem" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Roots", statement: "Roots absorb water and nutrients." }],
            steps: [{ reasoning: "Roots take in water from the soil.", marks: 1, markCode: "B" }],
            finalAnswer: "Roots",
          },
        },
        {
          id: "cips-u1-s1-pl-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do plants need sunlight?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Photosynthesis", statement: "Plants use sunlight to make food." }],
            steps: [
              { reasoning: "Plants use sunlight to make their own food.", marks: 1, markCode: "B" },
              { reasoning: "Without sunlight they cannot grow properly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "To make food",
          },
        },
        {
          id: "cips-u1-s1-pl-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "A plant is not growing well. Give two possible reasons why.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Plant health", statement: "Check water, sunlight, nutrients." }],
            steps: [
              { reasoning: "It may not be getting enough water.", marks: 1, markCode: "B" },
              { reasoning: "It may not be getting enough sunlight.", marks: 1, markCode: "B" },
              { reasoning: "The soil may lack nutrients.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "e.g. not enough water or sunlight",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u1-s1-plants-notes",
      title: "Stage 1 plants and animals — revision notes",
      summary: "Living things, plant needs, plant parts.",
      sections: [
        { heading: "Living things", body: "Grow, need food/water/air, can reproduce. Plants make food from sunlight; animals must eat." },
        { heading: "Plant parts", body: "Roots absorb water; stem carries it; leaves make food; flowers make seeds." },
      ],
    },
  ],
};
