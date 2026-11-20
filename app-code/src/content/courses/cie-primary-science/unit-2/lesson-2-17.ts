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
            { id: "a", text: "Earthworm" }, { id: "b", text: "Spider" }, { id: "c", text: "Frog" }, { id: "d", text: "Snail" },
          ], correctChoiceId: "c" },
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
