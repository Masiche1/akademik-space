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
            { id: "a", text: "Pollen moving to the female part of a flower" }, { id: "b", text: "A seed growing" }, { id: "c", text: "Watering a plant" }, { id: "d", text: "Leaves falling" },
          ], correctChoiceId: "a" },
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
