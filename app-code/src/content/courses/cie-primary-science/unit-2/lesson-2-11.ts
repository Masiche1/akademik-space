import type { Lesson } from "../../../types.ts";

export const lesson211: Lesson = {
  id: "cips-u2-lesson-2-11",
  code: "2-11",
  title: "Stage 6 — Food Chains and Energy",
  goal: "I CAN build food chains and explain energy transfer.",
  standards: ["Cambridge Primary Science 0097 Stage 6: biology and energy",
  "Cambridge Primary Science 0097 framework substrands: 6Be, 6Pf, 6TWSm"],
  stage: 6,
  vocabulary: [
    { term: "Food chain", definition: "Sequence showing who eats whom: plant → rabbit → fox." },
    { term: "Producer", definition: "Organism that makes its own food — plants." },
    { term: "Consumer", definition: "Organism that eats other organisms." },
    { term: "Predator", definition: "Animal that hunts and eats other animals." },
    { term: "Energy transfer", definition: "Energy passing from food to the eater." },
  ],
  concepts: [
    {
      id: "cips-u2-s11-food-chains",
      title: "Food chains and energy flow",
      skill: "Construct food chains/webs and explain energy transfer at Stage 6 level.",
      lesson: {
        sections: [
          {
            heading: "Food chains",
            body: "A food chain shows energy flow: producers (plants) → primary consumers (herbivores) → secondary consumers (carnivores) → top predators. Arrows point from food to eater, showing energy direction. Real ecosystems have food webs — many interconnected chains.",
          },
          {
            heading: "Energy and balance",
            body: "Energy enters the chain from sunlight via producers. Each step transfers only some energy (~10%) — most is lost as heat and movement, which is why chains are short and top predators are few. Removing one species affects the whole web: fewer rabbits means more grass but fewer foxes.",
          },
        ],
        keyFormulas: [
          { name: "Food chain", statement: "producer → herbivore → carnivore → top predator" },
          { name: "Energy", statement: "~10% transferred each step; rest lost as heat" },
        ],
        workedExample: {
          problem: "Build a food chain: grass, grasshopper, frog, snake, eagle.",
          solution: "grass → grasshopper → frog → snake → eagle.",
        },
      },
      questions: [
        {
          id: "cips-u2-fc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a food chain, arrows point…",
          response: { type: "mcq", choices: [
            { id: "a", text: "from eater to food" }, { id: "b", text: "from food to eater (energy flow)" }, { id: "c", text: "both ways" }, { id: "d", text: "nowhere" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Food chain arrows", statement: "Arrows show energy direction." }],
            steps: [{ reasoning: "Arrows point from food source to the eater.", marks: 1, markCode: "A" }],
            finalAnswer: "From food to eater",
          },
        },
        {
          id: "cips-u2-fc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a producer?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Producer", statement: "Makes own food — plants." }],
            steps: [
              { reasoning: "Plants produce their own food via photosynthesis.", marks: 1, markCode: "M" },
              { reasoning: "Answer: plant/producer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "An organism that makes its own food (plants)",
          },
        },
        {
          id: "cips-u2-fc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Order this food chain: eagle, grass, snake, mouse, fox.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Food chain order", statement: "Producer first, top predator last." }],
            steps: [
              { reasoning: "Grass (producer) first.", marks: 1, markCode: "M" },
              { reasoning: "Mouse eats grass; snake eats mouse; fox eats mouse/snake; eagle top.", marks: 1, markCode: "M" },
              { reasoning: "One valid chain: grass→mouse→snake→eagle or grass→mouse→fox.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "grass → mouse → snake → eagle (or similar)",
          },
        },
        {
          id: "cips-u2-fc-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Why are there fewer top predators than plants in an ecosystem?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Energy pyramid", statement: "Energy lost at each step." }],
            steps: [
              { reasoning: "Only ~10% of energy passes to the next level.", marks: 1, markCode: "M" },
              { reasoning: "Most energy is lost as heat/movement.", marks: 1, markCode: "M" },
              { reasoning: "Less energy = fewer organisms can be supported.", marks: 1, markCode: "M" },
              { reasoning: "Answer explains energy loss.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Energy is lost at each step, so less is available for top predators",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u2-fc-notes",
      title: "Food chains — revision notes",
      summary: "producer→herbivore→carnivore; arrows = energy flow; ~10% per level.",
      sections: [
        { heading: "Chains", body: "Arrows point food→eater; webs are many linked chains." },
        { heading: "Energy", body: "Sunlight → producers; ~10% transfers per step; rest lost as heat." },
      ],
    },
  ],
};
