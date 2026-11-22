import type { Lesson } from "../../../types.ts";

export const lesson217: Lesson = {
  id: "cips-u2-lesson-2-17",
  code: "2-17",
  title: "Stage 3 — Animal Groups, Food Chains and Magnetism",
  goal: "I CAN classify animals, describe simple food chains and explain magnetic poles.",
  standards: ["Cambridge Primary Science 0097 Stage 3: biology and physics",
  "Cambridge Primary Science 0097 framework substrands: 3Bs, 3Be, 3Pe"],
  stage: 3,
  vocabulary: [
    { term: "Vertebrate", definition: "Animal with a backbone." },
    { term: "Invertebrate", definition: "Animal without a backbone." },
    { term: "Producer", definition: "Organism making its own food: plants." },
    { term: "Consumer", definition: "Organism eating others: herbivore, carnivore, omnivore." },
    { term: "Magnetic pole", definition: "North or south end of a magnet." },
  ],
  concepts: [
    {
      id: "cips-u2-s17-animals-magnets",
      title: "Animal groups, food chains and magnetism",
      skill: "Classify vertebrates/invertebrates, describe food chains and explain magnetic attraction/repulsion at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "Animal groups and food chains",
            body: "Vertebrates have backbones — mammals, birds, reptiles, amphibians, fish. Invertebrates don't — insects, worms, spiders, snails. Food chains show energy flow: producer (plant) → herbivore (plant-eater) → carnivore (meat-eater). Omnivores eat both plants and animals.",
          },
          {
            heading: "Magnetism",
            body: "Magnets have north and south poles. Like poles repel (push apart), unlike poles attract (pull together). Only certain materials are magnetic — iron, steel, nickel, cobalt. The magnetic force acts at a distance — you can feel attraction before the magnet touches.",
          },
        ],
        keyFormulas: [
          { name: "Classification", statement: "vertebrate = backbone; invertebrate = no backbone" },
          { name: "Food chain", statement: "producer → herbivore → carnivore" },
          { name: "Magnets", statement: "like poles repel, unlike attract" },
        ],
        workedExample: {
          problem: "Is a butterfly a vertebrate or invertebrate? What does it eat?",
          solution: "Invertebrate (no backbone); herbivore (eats plant nectar).",
        },
      },
      questions: [
        {
          id: "cips-u2-am-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which animal is a vertebrate?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Earthworm" },
            { id: "b", text: "Spider" },
            { id: "c", text: "Snail" },
            { id: "d", text: "Frog" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Vertebrate", statement: "Has backbone." }],
            steps: [{ reasoning: "Frog has a backbone; others don't.", marks: 1, markCode: "A" }],
            finalAnswer: "Frog",
          },
        },
        {
          id: "cips-u2-am-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a herbivore eat?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Herbivore", statement: "Plant-eater." }],
            steps: [
              { reasoning: "Plants only.", marks: 1, markCode: "M" },
              { reasoning: "Answer: plants.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Plants",
          },
        },
        {
          id: "cips-u2-am-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two north poles of magnets are brought close. What happens and why?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Magnetic poles", statement: "Like repel, unlike attract." }],
            steps: [
              { reasoning: "They repel — push apart.", marks: 1, markCode: "M" },
              { reasoning: "Like poles repel each other.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "They repel — like poles push apart",
          },
        },
        {
          id: "cips-u2-am-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Classify: lion, ant, eagle, worm — vertebrate or invertebrate? (b) Build a food chain: grass → rabbit → fox. Identify producer, herbivore, carnivore. (c) Explain why a magnet picks up a paperclip but not a plastic ruler. Show reasoning.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Classification, food chains, magnetism", statement: "Sort + chain + magnetic materials." }],
            steps: [
              { reasoning: "(a) Vertebrates: lion, eagle; invertebrates: ant, worm.", marks: 1, markCode: "M" },
              { reasoning: "(b) Producer: grass; herbivore: rabbit; carnivore: fox.", marks: 1, markCode: "M" },
              { reasoning: "(b) Energy flows grass→rabbit→fox.", marks: 1, markCode: "M" },
              { reasoning: "(c) Paperclip is metal (magnetic); plastic isn't.", marks: 1, markCode: "M" },
              { reasoning: "Classification complete.", marks: 1, markCode: "M" },
              { reasoning: "Food chain correctly ordered.", marks: 1, markCode: "M" },
              { reasoning: "All parts attempted.", marks: 1, markCode: "M" },
              { reasoning: "All answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) lion/eagle=vertebrates, ant/worm=invertebrates (b) grass=producer, rabbit=herbivore, fox=carnivore (c) paperclip is magnetic metal",
          },
        },
        {
          id: "cips-u2-am-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which animal is an INVERTEBRATE?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Ant" },
            { id: "b", text: "Dog" },
            { id: "c", text: "Bird" },
            { id: "d", text: "Fish" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Invertebrate", statement: "No backbone." }],
            steps: [{ reasoning: "Ant has no backbone — it is an invertebrate.", marks: 1, markCode: "A" }],
            finalAnswer: "Ant",
          },
        },
        {
          id: "cips-u2-am-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a carnivore eat?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Nothing" },
            { id: "b", text: "Both plants and animals" },
            { id: "c", text: "Meat/other animals" },
            { id: "d", text: "Plants only" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Carnivore", statement: "Meat-eater." }],
            steps: [{ reasoning: "A carnivore eats other animals.", marks: 1, markCode: "A" }],
            finalAnswer: "Meat/other animals",
          },
        },
        {
          id: "cips-u2-am-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many magnetic pole types does a magnet have: north and south?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2, unit: "poles" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Magnetic poles", statement: "North and south." }],
            steps: [{ reasoning: "There are 2 poles: north and south.", marks: 1, markCode: "M" }],
            finalAnswer: "2",
          },
        },
        {
          id: "cips-u2-am-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a survey of 8 animals, 5 are vertebrates and 3 are invertebrates. How many invertebrates were found?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3, unit: "animals" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Classification", statement: "Count invertebrates." }],
            steps: [
              { reasoning: "3 animals are invertebrates.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cips-u2-am-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What happens when a north pole meets a south pole of another magnet?",
          response: { type: "mcq", choices: [
            { id: "a", text: "They repel" },
            { id: "b", text: "They explode" },
            { id: "c", text: "Nothing happens" },
            { id: "d", text: "They attract" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Magnetic poles", statement: "Unlike poles attract." }],
            steps: [{ reasoning: "North + south = unlike poles → attract.", marks: 1, markCode: "A" }],
            finalAnswer: "They attract",
          },
        },
        {
          id: "cips-u2-am-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two materials that magnets attract and two they do not.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Magnetic materials", statement: "Iron, steel, nickel, cobalt." }],
            steps: [
              { reasoning: "Two magnetic (e.g. iron, steel).", marks: 1, markCode: "M" },
              { reasoning: "Two non-magnetic (e.g. plastic, wood).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. iron/steel; plastic/wood",
          },
        },
        {
          id: "cips-u2-am-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Order this food chain: eagle, grass, grasshopper, snake.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Food chain", statement: "Producer first, top predator last." }],
            steps: [
              { reasoning: "Grass (producer) first.", marks: 1, markCode: "M" },
              { reasoning: "Grasshopper eats grass; snake eats grasshopper; eagle eats snake.", marks: 1, markCode: "M" },
              { reasoning: "Chain: grass → grasshopper → snake → eagle.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "grass → grasshopper → snake → eagle",
          },
        },
        {
          id: "cips-u2-am-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Can a magnet attract a piece of paper through a table?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only at night" },
            { id: "b", text: "No — magnets need touch" },
            { id: "c", text: "Yes — magnetic force acts at a distance" },
            { id: "d", text: "Only through glass" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Magnetic force", statement: "Acts at a distance." }],
            steps: [{ reasoning: "Magnetic force acts at a distance — attraction can pass through thin materials.", marks: 1, markCode: "A" }],
            finalAnswer: "Yes — magnetic force acts at a distance",
          },
        },
        {
          id: "cips-u2-am-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a class pet survey, 6 pets are vertebrates and 4 are invertebrates. What is the total number of pets surveyed?",
          response: { type: "numeric", parts: [{ label: "a", answer: 10, unit: "pets" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Classification", statement: "Add vertebrates + invertebrates." }],
            steps: [
              { reasoning: "$6 + 4 = 10$.", marks: 1, markCode: "M" },
              { reasoning: "Total = 10 pets.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "cips-u2-am-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why a steel paperclip is attracted to a magnet but a plastic one is not.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Magnetic materials", statement: "Only certain metals are magnetic." }],
            steps: [
              { reasoning: "Steel contains iron — a magnetic material.", marks: 1, markCode: "M" },
              { reasoning: "Plastic is not magnetic — magnets only attract certain materials.", marks: 1, markCode: "M" },
              { reasoning: "So steel is attracted, plastic is not.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Steel is magnetic metal; plastic is not",
          },
        },
        {
          id: "cips-u2-am-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is an OMNIVORE?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Eats meat only" },
            { id: "b", text: "Eats both plants and animals" },
            { id: "c", text: "Makes own food" },
            { id: "d", text: "Eats plants only" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Omnivore", statement: "Eats plants and animals." }],
            steps: [{ reasoning: "An omnivore eats both plants and animals.", marks: 1, markCode: "A" }],
            finalAnswer: "Eats both plants and animals",
          },
        },
        {
          id: "cips-u2-am-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define vertebrate and invertebrate with two examples each. (b) Define producer, herbivore, carnivore and omnivore. (c) Build a food chain from: fox, grass, mouse. (d) Name two magnetic materials and two non-magnetic ones. (e) What happens when like poles meet? (f) What happens when unlike poles meet? (g) Give an example of an omnivore. (h) Explain why magnets attract some objects but not others.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Animals, food chains, magnetism", statement: "Integrated Stage 3 answer." }],
            steps: [
              { reasoning: "(a) Vertebrate=backbone (frog, dog); invertebrate=no backbone (ant, worm).", marks: 1, markCode: "M" },
              { reasoning: "(b) Producer=plants; herbivore=plants; carnivore=meat; omnivore=both.", marks: 1, markCode: "M" },
              { reasoning: "(c) grass → mouse → fox.", marks: 1, markCode: "M" },
              { reasoning: "(d) Magnetic: iron, steel; non: plastic, wood.", marks: 1, markCode: "M" },
              { reasoning: "(e) Like poles repel.", marks: 1, markCode: "M" },
              { reasoning: "(f) Unlike poles attract.", marks: 1, markCode: "M" },
              { reasoning: "(g) e.g. bear, human.", marks: 1, markCode: "M" },
              { reasoning: "(h) Only certain materials (iron/steel/nickel/cobalt) are magnetic.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vertebrate/invertebrate defs, consumer types, food chain, magnetic materials, pole rules, omnivore, attraction limits.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u2-am-notes",
      title: "Animals and magnets — notes",
      summary: "Vertebrate=backbone; food chain producer→herbivore→carnivore; like poles repel.",
      sections: [
        { heading: "Classification", body: "Mammals/birds/reptiles/amphibians/fish have backbones; insects/worms don't." },
        { heading: "Magnetism", body: "Only iron/steel/nickel/cobalt magnetic; like poles repel, unlike attract." },
      ],
    },
  ],
};
