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
            { id: "a", text: "nowhere" },
            { id: "b", text: "both ways" },
            { id: "c", text: "from eater to food" },
            { id: "d", text: "from food to eater (energy flow)" },
          ], correctChoiceId: "d" },
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
        {
          id: "cips-u2-fc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organism is a PRODUCER in a food chain?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A fox" },
            { id: "b", text: "An eagle" },
            { id: "c", text: "Grass" },
            { id: "d", text: "A rabbit" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Producer", statement: "Makes own food — plants." }],
            steps: [{ reasoning: "Grass is a producer; it makes its own food.", marks: 1, markCode: "A" }],
            finalAnswer: "Grass",
          },
        },
        {
          id: "cips-u2-fc-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A rabbit in a food chain is called what?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A decomposer" },
            { id: "b", text: "A consumer" },
            { id: "c", text: "A producer" },
            { id: "d", text: "A plant" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Consumer", statement: "Eats other organisms." }],
            steps: [{ reasoning: "A rabbit eats plants — it is a consumer.", marks: 1, markCode: "A" }],
            finalAnswer: "A consumer",
          },
        },
        {
          id: "cips-u2-fc-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many trophic levels are in this food chain: grass → rabbit → fox?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3, unit: "levels" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Food chain", statement: "Count organisms in the chain." }],
            steps: [{ reasoning: "Grass, rabbit, fox = 3 levels.", marks: 1, markCode: "M" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cips-u2-fc-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "If 100 units of energy enter grass, about how much reaches the rabbit that eats it (at ~10% transfer)?",
          response: { type: "numeric", parts: [{ label: "a", answer: 10, unit: "units" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Energy transfer", statement: "~10% transfers each step." }],
            steps: [
              { reasoning: "$100 \\times 0.1 = 10$ (or $100 \\div 10 = 10$).", marks: 1, markCode: "M" },
              { reasoning: "About 10 units reach the rabbit.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "cips-u2-fc-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Where does the energy in a food chain originally come from?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sunlight" },
            { id: "b", text: "Rain" },
            { id: "c", text: "The soil" },
            { id: "d", text: "The animals" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Energy", statement: "Sunlight → producers." }],
            steps: [{ reasoning: "Energy enters via sunlight through producers.", marks: 1, markCode: "A" }],
            finalAnswer: "Sunlight",
          },
        },
        {
          id: "cips-u2-fc-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the four steps in this food chain: plant, herbivore, carnivore, top predator.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Food chain", statement: "Producer → consumer levels." }],
            steps: [
              { reasoning: "Plant (producer) first.", marks: 1, markCode: "M" },
              { reasoning: "Herbivore, carnivore, top predator in order.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Producer → herbivore → carnivore → top predator",
          },
        },
        {
          id: "cips-u2-fc-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what happens to the food web if all the rabbits in a grassland disappear.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Food web balance", statement: "Removing a species affects others." }],
            steps: [
              { reasoning: "Foxes lose a food source — fewer foxes.", marks: 1, markCode: "M" },
              { reasoning: "Grass grows more without rabbits eating it.", marks: 1, markCode: "M" },
              { reasoning: "Other animals may eat more grass to replace rabbits.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Foxes decline; grass increases; other herbivores may rise",
          },
        },
        {
          id: "cips-u2-fc-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is a TOP PREDATOR in a food chain?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A rabbit" },
            { id: "b", text: "Grass" },
            { id: "c", text: "A grasshopper" },
            { id: "d", text: "An eagle" },
          ], dorrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Top predator", statement: "Last in chain, eats others." }],
            steps: [{ reasoning: "The eagle is the top predator.", marks: 1, markCode: "A" }],
            finalAnswer: "An eagle",
          },
        },
        {
          id: "cips-u2-fc-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A food chain has 4 levels. If 1000 units of energy start at the producer, about how much reaches level 3 (~10% per step)?",
          response: { type: "numeric", parts: [{ label: "a", answer: 10, unit: "units" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Energy transfer", statement: "~10% each step." }],
            steps: [
              { reasoning: "$1000 \\times 0.1 \\times 0.1 = 10$.", marks: 1, markCode: "M" },
              { reasoning: "About 10 units reach level 3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "cips-u2-fc-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why are food chains usually short (3–5 links) rather than very long?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Energy pyramid", statement: "Energy lost each step limits chain length." }],
            steps: [
              { reasoning: "Only ~10% of energy passes to each level.", marks: 1, markCode: "M" },
              { reasoning: "After several steps too little energy remains.", marks: 1, markCode: "M" },
              { reasoning: "So there isn't enough energy to support more levels.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Energy runs out after a few steps",
          },
        },
        {
          id: "cips-u2-fc-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a food WEB?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A type of plant" },
            { id: "b", text: "Many interconnected food chains" },
            { id: "c", text: "A single food chain" },
            { id: "d", text: "A spider's home" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Food web", statement: "Interconnected chains." }],
            steps: [{ reasoning: "A food web is many linked food chains.", marks: 1, markCode: "A" }],
            finalAnswer: "Many interconnected food chains",
          },
        },
        {
          id: "cips-u2-fc-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define food chain and food web. (b) Name the four levels in a food chain. (c) Where does energy come from? (d) What happens to energy at each step? (e) Why are there fewer top predators? (f) Build a chain: grass, grasshopper, frog, snake, eagle. (g) What happens if rabbits disappear? (h) Why are food chains short?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Food chains and energy", statement: "Integrated Stage 6 ecology answer." }],
            steps: [
              { reasoning: "(a) Chain=who eats whom; web=many linked chains.", marks: 1, markCode: "M" },
              { reasoning: "(b) Producer → herbivore → carnivore → top predator.", marks: 1, markCode: "M" },
              { reasoning: "(c) Sunlight via producers.", marks: 1, markCode: "M" },
              { reasoning: "(d) ~10% transfers; rest lost as heat/movement.", marks: 1, markCode: "M" },
              { reasoning: "(e) Less energy available at top levels.", marks: 1, markCode: "M" },
              { reasoning: "(f) grass → grasshopper → frog → snake → eagle.", marks: 1, markCode: "M" },
              { reasoning: "(g) Foxes decline; grass increases; other herbivores rise.", marks: 1, markCode: "M" },
              { reasoning: "(h) Energy lost each step — not enough for more levels.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Chain/web defs, levels, energy source, energy loss, fewer predators, chain order, rabbit removal, short chains.",
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
