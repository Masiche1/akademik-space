import type { Lesson } from "../../../types.ts";

export const lesson29: Lesson = {
  id: "cips-u2-lesson-2-9",
  code: "2-9",
  title: "Stage 5 — Plant Reproduction and Life Cycles",
  goal: "I CAN describe how flowering plants reproduce and their life cycle.",
  standards: ["Cambridge Primary Science 0097 Stage 5: plants",
  "Cambridge Primary Science 0097 framework substrands: 5Bp"],
  stage: 5,
  vocabulary: [
    { term: "Pollination", definition: "Transfer of pollen from male to female flower parts." },
    { term: "Fertilisation", definition: "When a male pollen cell joins the female ovule to make a seed." },
    { term: "Seed dispersal", definition: "Seeds spread away from the parent plant." },
    { term: "Germination", definition: "Seed starts growing into a seedling." },
    { term: "Life cycle", definition: "The stages a living thing goes through." },
  ],
  concepts: [
    {
      id: "cips-u2-s9-plant-reproduction",
      title: "Flowering plant reproduction",
      skill: "Describe pollination, fertilisation, seed dispersal and the plant life cycle at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "From flower to seed",
            body: "Flowers have male parts (stamens with pollen) and female parts (carpel with ovule). Pollination moves pollen to the female part — by wind, insects or other animals. Fertilisation joins pollen with ovule to form a seed inside the fruit. Seeds are then dispersed by wind, water, animals or explosive pods.",
          },
          {
            heading: "The life cycle",
            body: "The flowering plant cycle: seed → germination → seedling → adult plant → flower → pollination → fertilisation → seed → dispersal → germination again. Some plants (e.g. bamboo) flower rarely; others flower yearly. Understanding the cycle shows how plants reproduce without animals' help (self-pollination) or with helpers (insect pollination).",
          },
        ],
        keyFormulas: [
          { name: "Reproduction", statement: "pollination → fertilisation → seed → dispersal" },
          { name: "Life cycle", statement: "seed → seedling → adult → flower → seed" },
        ],
        workedExample: {
          problem: "How do dandelion seeds travel to new places?",
          solution: "By wind dispersal — the feathery 'parachutes' carry seeds on air currents.",
        },
      },
      questions: [
        {
          id: "cips-u2-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is pollination?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Leaves falling" },
            { id: "b", text: "Pollen moving to the female part of a flower" },
            { id: "c", text: "Watering a plant" },
            { id: "d", text: "A seed growing" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Pollination", statement: "Pollen transfer to female parts." }],
            steps: [{ reasoning: "Pollination = pollen reaches the female part.", marks: 1, markCode: "A" }],
            finalAnswer: "Pollen moving to the female part",
          },
        },
        {
          id: "cips-u2-pr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two ways seeds can be dispersed.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Seed dispersal", statement: "Wind, water, animals, explosion." }],
            steps: [
              { reasoning: "Any two: wind, water, animals, explosive pods.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. wind and animals",
          },
        },
        {
          id: "cips-u2-pr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Put these stages in order: seed dispersal, flower, germination, fertilisation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Life cycle order", statement: "Flower → fertilisation → dispersal → germination." }],
            steps: [
              { reasoning: "Flower comes first.", marks: 1, markCode: "M" },
              { reasoning: "Then fertilisation, then dispersal.", marks: 1, markCode: "M" },
              { reasoning: "Order: flower → fertilisation → dispersal → germination.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "flower → fertilisation → seed dispersal → germination",
          },
        },
        {
          id: "cips-u2-pr-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Why do some flowers have bright colours and sweet smells?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Pollination adaptations", statement: "Attract pollinating animals." }],
            steps: [
              { reasoning: "Bright colours attract insects/birds.", marks: 1, markCode: "M" },
              { reasoning: "Sweet smell attracts them too.", marks: 1, markCode: "M" },
              { reasoning: "Animals carry pollen between flowers = pollination.", marks: 1, markCode: "M" },
              { reasoning: "Answer explains the adaptation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "To attract pollinating animals that carry pollen",
          },
        },
        {
          id: "cips-u2-pr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which flower part produces pollen?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The carpel" },
            { id: "b", text: "The roots" },
            { id: "c", text: "The stamen" },
            { id: "d", text: "The petals" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Stamen", statement: "Male part with pollen." }],
            steps: [{ reasoning: "Stamens produce pollen.", marks: 1, markCode: "A" }],
            finalAnswer: "The stamen",
          },
        },
        {
          id: "cips-u2-pr-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is fertilisation?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Pollen joining with the ovule to make a seed" },
            { id: "b", text: "Seeds falling off" },
            { id: "c", text: "Pollen reaching the flower" },
            { id: "d", text: "Leaves growing" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Fertilisation", statement: "Pollen + ovule → seed." }],
            steps: [{ reasoning: "Fertilisation joins pollen with the ovule to form a seed.", marks: 1, markCode: "A" }],
            finalAnswer: "Pollen joining with the ovule to make a seed",
          },
        },
        {
          id: "cips-u2-pr-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many main stages are in the flowering plant life cycle shown: seed, germination, seedling, adult plant, flower, pollination, fertilisation, dispersal?",
          response: { type: "numeric", parts: [{ label: "a", answer: 8, unit: "stages" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Life cycle", statement: "Count the stages." }],
            steps: [{ reasoning: "There are 8 stages listed.", marks: 1, markCode: "M" }],
            finalAnswer: "8",
          },
        },
        {
          id: "cips-u2-pr-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A garden has 12 flowering plants. 7 are pollinated by insects and 5 by wind. What is the total number of pollinated plants?",
          response: { type: "numeric", parts: [{ label: "a", answer: 12, unit: "plants" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Pollination", statement: "Add pollinated plants." }],
            steps: [
              { reasoning: "$7 + 5 = 12$.", marks: 1, markCode: "M" },
              { reasoning: "Total pollinated = 12 plants.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12",
          },
        },
        {
          id: "cips-u2-pr-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which part of the flower is the FEMALE part?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The carpel" },
            { id: "b", text: "The stem" },
            { id: "c", text: "The stamen" },
            { id: "d", text: "The anther" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Carpel", statement: "Female part containing the ovule." }],
            steps: [{ reasoning: "The carpel is the female part.", marks: 1, markCode: "A" }],
            finalAnswer: "The carpel",
          },
        },
        {
          id: "cips-u2-pr-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two ways dandelion seeds are dispersed and why they travel well.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Seed dispersal", statement: "Wind carries feathery seeds." }],
            steps: [
              { reasoning: "By wind — feathery parachutes catch air.", marks: 1, markCode: "M" },
              { reasoning: "This carries them far from the parent plant.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Wind dispersal via feathery parachutes",
          },
        },
        {
          id: "cips-u2-pr-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between pollination and fertilisation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Pollination vs fertilisation", statement: "Transfer vs joining." }],
            steps: [
              { reasoning: "Pollination = pollen moves to the female part of the flower.", marks: 1, markCode: "M" },
              { reasoning: "Fertilisation = pollen joins with the ovule inside the flower.", marks: 1, markCode: "M" },
              { reasoning: "Pollination happens first; fertilisation follows to make a seed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pollination=transfer pollen; fertilisation=pollen+ovule→seed",
          },
        },
        {
          id: "cips-u2-pr-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why do some flowers produce nectar?",
          response: { type: "mcq", choices: [
            { id: "a", text: "To attract pollinating animals" },
            { id: "b", text: "To make seeds directly" },
            { id: "c", text: "To store water" },
            { id: "d", text: "To make the flower heavier" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Pollination adaptations", statement: "Nectar attracts pollinators." }],
            steps: [{ reasoning: "Nectar attracts insects/birds that carry pollen.", marks: 1, markCode: "A" }],
            finalAnswer: "To attract pollinating animals",
          },
        },
        {
          id: "cips-u2-pr-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a seed dispersal survey, 8 seeds travel by wind and 6 by animals. What is the total number of dispersed seeds?",
          response: { type: "numeric", parts: [{ label: "a", answer: 14, unit: "seeds" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Seed dispersal", statement: "Add dispersed seeds." }],
            steps: [
              { reasoning: "$8 + 6 = 14$.", marks: 1, markCode: "M" },
              { reasoning: "Total dispersed = 14 seeds.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "14",
          },
        },
        {
          id: "cips-u2-pr-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why seed dispersal is important for plants.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Seed dispersal", statement: "Seeds need space and resources." }],
            steps: [
              { reasoning: "Seeds spread away from the parent plant.", marks: 1, markCode: "M" },
              { reasoning: "This gives seedlings space, light, water and nutrients.", marks: 1, markCode: "M" },
              { reasoning: "Prevents overcrowding so more seeds survive.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Spreads seeds to new areas with resources",
          },
        },
        {
          id: "cips-u2-pr-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which flower part contains the ovule?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The stamen" },
            { id: "b", text: "The petal" },
            { id: "c", text: "The carpel" },
            { id: "d", text: "The sepal" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Carpel", statement: "Contains the ovule." }],
            steps: [{ reasoning: "The carpel contains the ovule.", marks: 1, markCode: "A" }],
            finalAnswer: "The carpel",
          },
        },
        {
          id: "cips-u2-pr-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Name the male and female flower parts and their jobs. (b) Define pollination and fertilisation. (c) Name three ways pollination happens. (d) Name three ways seeds are dispersed with examples. (e) Why do flowers have bright colours and smells? (f) Put these in order: seed, germination, flower, pollination. (g) What is germination? (h) Why is seed dispersal important?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Plant reproduction", statement: "Integrated Stage 5 reproduction answer." }],
            steps: [
              { reasoning: "(a) Stamen=male, makes pollen; carpel=female, contains ovule.", marks: 1, markCode: "M" },
              { reasoning: "(b) Pollination=pollen→female part; fertilisation=pollen+ovule→seed.", marks: 1, markCode: "M" },
              { reasoning: "(c) Wind, insects/animals, self-pollination.", marks: 1, markCode: "M" },
              { reasoning: "(d) Wind (dandelion), water (coconut), animals (burdock hooks).", marks: 1, markCode: "M" },
              { reasoning: "(e) Attract pollinating animals.", marks: 1, markCode: "M" },
              { reasoning: "(f) seed → germination → flower → pollination.", marks: 1, markCode: "M" },
              { reasoning: "(g) Seed starts growing into a seedling.", marks: 1, markCode: "M" },
              { reasoning: "(h) Spreads seeds to new areas with space and resources.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Flower parts, pollination/fertilisation defs, pollinators, dispersal methods, flower adaptations, order, germination, dispersal importance.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u2-pr-notes",
      title: "Plant reproduction — revision notes",
      summary: "Pollination→fertilisation→seed→dispersal→germination; bright flowers attract pollinators.",
      sections: [
        { heading: "Process", body: "Male pollen → female ovule = fertilisation; seed dispersed by wind/water/animals." },
        { heading: "Adaptations", body: "Bright colours and scent attract insects; sticky pollen for animal transfer." },
      ],
    },
  ],
};
