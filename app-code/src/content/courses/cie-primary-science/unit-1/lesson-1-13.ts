import type { Lesson } from "../../../types.ts";

export const lesson113: Lesson = {
  id: "cips-u1-lesson-1-13",
  code: "1-13",
  title: "Stage 2 — Materials: Properties and Changes",
  goal: "I CAN describe materials and their properties, explain why materials are chosen for purposes, and identify simple changes to materials.",
  standards: ["Cambridge Primary Science 0097 Stage 2: chemistry",
  "Cambridge Primary Science 0097 framework substrands: 2Cm, 2Cp, 2Cc"],
  stage: 2,
  vocabulary: [
    { term: "Material", definition: "What an object is made from — wood, metal, plastic, glass." },
    { term: "Property", definition: "A characteristic of a material, e.g. hard, bendy, waterproof." },
    { term: "Natural material", definition: "Found in nature — wood, stone, wool." },
    { term: "Manufactured material", definition: "Made by people — plastic, glass, metal." },
    { term: "Change", definition: "When a material is altered — stretched, bent, cut, heated." },
    { term: "Suitability", definition: "How well a material's properties match its job." },
  ],
  concepts: [
    {
      id: "cips-u1-s13-materials",
      title: "Material properties, uses and changes",
      skill: "Describe properties, link them to uses and identify changes at Stage 2 level.",
      lesson: {
        sections: [
          {
            heading: "Properties and purposes",
            body: "Materials have properties: hardness, flexibility, transparency, waterproofing, conductivity. We choose materials because of these — glass for windows (transparent), rubber for tyres (flexible + waterproof), metal for pans (conducts heat). Some materials occur naturally (wood, wool); others are manufactured (plastic, glass).",
          },
          {
            heading: "Changes to materials",
            body: "Some changes turn a material into a different material: burning wood makes ash, cooking an egg makes it solid. Others just change shape: stretching elastic, bending wire, tearing paper. Test properties by simple experiments — bend, squeeze, drop water on, try to scratch.",
          },
        ],
        keyFormulas: [
          { name: "Property → use", statement: "choose material for the job based on its properties" },
          { name: "Change", statement: "some changes make new materials; others only change shape" },
        ],
        workedExample: {
          problem: "Why is a raincoat made of plastic rather than paper? Describe one test you could do to check plastic is waterproof.",
          solution: "Plastic is waterproof and doesn't tear easily; paper absorbs water and tears. Test: place a few drops of water on each — plastic beads up, paper soaks through.",
        },
      },
      questions: [
        {
          id: "cips-u1-mc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which property makes glass suitable for windows?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It is transparent" }, { id: "b", text: "It is soft" }, { id: "c", text: "It bends easily" }, { id: "d", text: "It floats" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Property-use link", statement: "Transparency lets light through." }],
            steps: [{ reasoning: "Windows need to let light in → transparent glass.", marks: 1, markCode: "M" }],
            finalAnswer: "It is transparent",
          },
        },
        {
          id: "cips-u1-mc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name one natural and one manufactured material.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Natural vs manufactured", statement: "Found vs made." }],
            steps: [
              { reasoning: "e.g. wood (natural).", marks: 1, markCode: "M" },
              { reasoning: "e.g. plastic (manufactured).", marks: 1, markCode: "M" },
            ],
            finalAnswer: "e.g. wood and plastic",
          },
        },
        {
          id: "cips-u1-mc-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Is cooking an egg a change to the material or just a change of shape? Explain. Give one more example of each type.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Types of change", statement: "New material vs shape change." }],
            steps: [
              { reasoning: "Cooking egg → new material (can't turn back to runny egg).", marks: 1, markCode: "M" },
              { reasoning: "Change of shape example: bending a paperclip.", marks: 1, markCode: "M" },
              { reasoning: "New material example: burning wood → ash.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "New material; e.g. bending paperclip, burning wood",
          },
        },
        {
          id: "cips-u1-mc-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "A school wants to choose a material for new lunchboxes. (a) Name three properties a lunchbox material needs. (b) For each property, name a suitable material and explain why. (c) Describe a simple test to check if a material is waterproof. (d) Is denting a lunchbox a change to the material or just shape? Explain. (e) Why might plastic be chosen over glass? (f) Identify one natural and one manufactured option.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Material selection", statement: "Properties → uses → tests → change types." }],
            steps: [
              { reasoning: "(a) Three valid properties (lightweight, waterproof, durable).", marks: 1, markCode: "M" },
              { reasoning: "(b) Material + property link for each.", marks: 1, markCode: "M" },
              { reasoning: "(c) Water drop test described.", marks: 1, markCode: "M" },
              { reasoning: "(d) Shape change only — material unchanged.", marks: 1, markCode: "M" },
              { reasoning: "(e) Plastic: lighter, shatterproof vs glass.", marks: 1, markCode: "M" },
              { reasoning: "(f) Natural e.g. wood; manufactured e.g. plastic.", marks: 1, markCode: "M" },
              { reasoning: "Reasoning links properties to decisions.", marks: 1, markCode: "M" },
              { reasoning: "All parts addressed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Properties→material links, waterproof test, dent=shape change, plastic vs glass, natural/manufactured.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u1-mc-notes",
      title: "Materials — notes",
      summary: "Property → purpose. Some changes make new materials; others only change shape. Test properties with simple experiments.",
      sections: [
        { heading: "Properties", body: "Hardness, flexibility, waterproof, transparency — match to the job." },
        { heading: "Changes", body: "Bending/stretching = shape; burning/cooking = new material." },
      ],
    },
  ],
};
