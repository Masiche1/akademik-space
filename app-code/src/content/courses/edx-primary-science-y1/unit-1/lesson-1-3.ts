import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "edps1-u1-lesson-1-3",
  code: "1-3",
  title: "Animals and Plants",
  goal: "I CAN describe animals and plants and what they need to live.",
  standards: ["Year 1 Science: Living things"],
  vocabulary: [
    {
      term: "Living thing",
      definition: "Something that grows, needs food/water, and can reproduce.",
    },
    {
      term: "Non-living",
      definition: "Something that doesn't grow or need food: rock, chair.",
    },
    { term: "Habitat", definition: "The natural home of an animal or plant." },
    {
      term: "Needs",
      definition: "What living things require: food, water, air, shelter.",
    },
  ],
  concepts: [
    {
      id: "edps1-u1-living",
      title: "Living vs non-living",
      skill: "Identify living things and what they need.",
      lesson: {
        sections: [
          {
            heading: "Living things",
            body: "Living things: animals, plants, humans, insects, fish. They grow, need food and water, breathe, reproduce, and respond to their environment.",
          },
          {
            heading: "Non-living things",
            body: "Non-living: rocks, chairs, toys, water, air. They don't grow, don't need food, don't reproduce. Some were once living (wood from trees).",
          },
        ],
        keyFormulas: [
          { name: "Living", statement: "Grow, need food/water, reproduce" },
          { name: "Non-living", statement: "Don't grow or need food" },
          { name: "Needs", statement: "Food, water, air, shelter" },
        ],
        workedExample: {
          problem: "Is a teddy bear living or non-living?",
          solution:
            "Non-living — it doesn't grow, eat or breathe (though it represents a living bear).",
        },
      },
      questions: [
        {
          id: "edps1-u1-lv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a living thing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rock" },
              { id: "b", text: "Flower" },
              { id: "c", text: "Chair" },
              { id: "d", text: "Toy car" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Living thing",
                statement: "Grows, needs food.",
              },
            ],
            steps: [
              { reasoning: "Flower is living.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Flower",
            commonErrors: ["Choosing non-living."],
          },
        },
        {
          id: "edps1-u1-lv-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What do all living things need?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only food" },
              { id: "b", text: "Food, water and air" },
              { id: "c", text: "Only water" },
              { id: "d", text: "Toys" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Needs",
                statement: "Food, water, air.",
              },
            ],
            steps: [
              { reasoning: "Basic needs identified.", marks: 1, markCode: "M" },
              { reasoning: "Answer: food/water/air.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Food, water and air",
            commonErrors: ["Incomplete needs."],
          },
        },
        {
          id: "edps1-u1-lv-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two things a plant needs to grow.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Plant needs",
                statement: "Sunlight, water, soil, air.",
              },
            ],
            steps: [
              { reasoning: "Need 1 given.", marks: 1, markCode: "A" },
              { reasoning: "Need 2 given.", marks: 1, markCode: "A" },
              { reasoning: "Both valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'Sunlight; water'",
            commonErrors: ["Invalid or only one."],
          },
        },
        {
          id: "edps1-u1-lv-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Sort these into living and non-living: dog, stone, tree, bicycle, fish, book.",
          parts: [
            { label: "a", prompt: "Living things", marks: 1 },
            { label: "b", prompt: "Non-living things", marks: 1 },
            { label: "c", prompt: "Rule used", marks: 1 },
            { label: "d", prompt: "Explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Living vs non-living",
                statement:
                  "dog/tree/fish living; stone/bicycle/book non-living.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Living correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Non-living correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Rule identified.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Explained.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Living: dog, tree, fish; non-living: stone, bicycle, book",
            commonErrors: ["Wrong classification."],
          },
        },
      ],
    },
    {
      id: "edps1-u1-habitat",
      title: "Habitats and animal needs",
      skill: "Describe where animals live and what they need.",
      lesson: {
        sections: [
          {
            heading: "Habitats",
            body: "Different animals live in different places: **forest** (deer, birds), **ocean** (fish, whales), **desert** (camels, lizards), **pond** (frogs, ducks). A habitat provides food, water, shelter and space.",
          },
          {
            heading: "Animal needs",
            body: "Animals need: food (what they eat), water, air, shelter (home), and space. Different animals have different diets: carnivore (meat), herbivore (plants), omnivore (both).",
          },
        ],
        keyFormulas: [
          { name: "Habitat", statement: "Natural home providing needs" },
          { name: "Carnivore", statement: "Eats meat" },
          { name: "Herbivore", statement: "Eats plants" },
        ],
        workedExample: {
          problem: "Where does a fish live and what does it need?",
          solution: "Water (pond/sea/ocean); needs water, food, oxygen.",
        },
      },
      questions: [
        {
          id: "edps1-u1-ha-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a habitat?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A house" },
              { id: "b", text: "An animal's natural home" },
              { id: "c", text: "A zoo" },
              { id: "d", text: "A food shop" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Habitat",
                statement: "Natural home.",
              },
            ],
            steps: [
              { reasoning: "Habitat = natural home.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** An animal's natural home",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edps1-u1-ha-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which animal lives in water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lion" },
              { id: "b", text: "Fish" },
              { id: "c", text: "Eagle" },
              { id: "d", text: "Rabbit" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Habitats",
                statement: "Fish live in water.",
              },
            ],
            steps: [
              { reasoning: "Match habitat.", marks: 1, markCode: "M" },
              { reasoning: "Answer: fish.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Fish",
            commonErrors: ["Wrong habitat match."],
          },
        },
        {
          id: "edps1-u1-ha-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is a herbivore? Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Herbivore",
                statement: "Eats plants; e.g. rabbit, cow, deer.",
              },
            ],
            steps: [
              { reasoning: "Definition given.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Eats plants; e.g. rabbit",
            commonErrors: ["Wrong definition or example."],
          },
        },
        {
          id: "edps1-u1-ha-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Match each animal to its habitat: camel, penguin, frog, eagle.",
          parts: [
            { label: "a", prompt: "Camel", marks: 1 },
            { label: "b", prompt: "Penguin", marks: 1 },
            { label: "c", prompt: "Frog", marks: 1 },
            { label: "d", prompt: "Eagle", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Habitats",
                statement:
                  "camel=desert; penguin=Antarctic/ocean; frog=pond; eagle=mountains/forest.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Desert.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Cold ocean/ice.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Pond/wetland.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Mountains/forest.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "camel=desert, penguin=ice/ocean, frog=pond, eagle=mountains",
            commonErrors: ["Wrong habitat matches."],
          },
        },
      ],
    },
  ],
};
