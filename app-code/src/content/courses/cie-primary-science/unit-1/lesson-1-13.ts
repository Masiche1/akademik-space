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
            { id: "a", text: "It floats" },
            { id: "b", text: "It is transparent" },
            { id: "c", text: "It bends easily" },
            { id: "d", text: "It is soft" },
          ], correctChoiceId: "b" },
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
        {
          id: "cips-u1-mc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which property makes rubber suitable for tyres?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It is flexible and waterproof" },
            { id: "b", text: "It is transparent" },
            { id: "c", text: "It is hard" },
            { id: "d", text: "It conducts heat" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Property-use link", statement: "Choose material for the job." }],
            steps: [{ reasoning: "Tyres need flexibility and waterproofing → rubber.", marks: 1, markCode: "M" }],
            finalAnswer: "Flexible and waterproof",
          },
        },
        {
          id: "cips-u1-mc-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a MANUFACTURED material?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Wood" },
            { id: "b", text: "Stone" },
            { id: "c", text: "Plastic" },
            { id: "d", text: "Wool" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Manufactured material", statement: "Made by people." }],
            steps: [{ reasoning: "Plastic is made by people; wood, wool, stone are natural.", marks: 1, markCode: "A" }],
            finalAnswer: "Plastic",
          },
        },
        {
          id: "cips-u1-mc-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "You test 6 materials for hardness. 4 scratch easily and 2 do not scratch. How many materials resisted scratching?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2, unit: "materials" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Testing properties", statement: "Count materials that resist scratching." }],
            steps: [{ reasoning: "2 materials did not scratch.", marks: 1, markCode: "M" }],
            finalAnswer: "2",
          },
        },
        {
          id: "cips-u1-mc-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Five materials are tested for waterproofing: 3 soak through and 2 bead up water. What is the total number of waterproof materials found?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2, unit: "materials" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Waterproof test", statement: "Waterproof materials bead up water." }],
            steps: [
              { reasoning: "2 materials bead up water = waterproof.", marks: 1, markCode: "M" },
              { reasoning: "Total waterproof = 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cips-u1-mc-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which material is best for a frying pan because it conducts heat well?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Paper" },
            { id: "b", text: "Plastic" },
            { id: "c", text: "Wood" },
            { id: "d", text: "Metal" },
          ], dorrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Conductivity", statement: "Metals conduct heat well." }],
            steps: [{ reasoning: "Metal conducts heat → good for pans.", marks: 1, markCode: "A" }],
            finalAnswer: "Metal",
          },
        },
        {
          id: "cips-u1-mc-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two changes that only change a material's shape, not the material itself.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Shape change", statement: "Bending, stretching, tearing — material stays the same." }],
            steps: [
              { reasoning: "First shape change (e.g. bending a paperclip).", marks: 1, markCode: "M" },
              { reasoning: "Second shape change (e.g. stretching elastic).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. bending a paperclip and stretching elastic",
          },
        },
        {
          id: "cips-u1-mc-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Is melting chocolate into a mould a change to the material or just a change of shape? Explain your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Types of change", statement: "Shape changes are reversible; material changes are not." }],
            steps: [
              { reasoning: "It is still chocolate — same material.", marks: 1, markCode: "M" },
              { reasoning: "It can be melted and reshaped back — shape change only.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: change of shape, not a new material.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Shape change — still chocolate, can be reshaped",
          },
        },
        {
          id: "cips-u1-mc-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which change makes a NEW material?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Stretching elastic" },
            { id: "b", text: "Burning wood" },
            { id: "c", text: "Tearing paper" },
            { id: "d", text: "Bending a ruler" },
          ], borrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "New material", statement: "Burning/cooking can make a different material." }],
            steps: [{ reasoning: "Burning wood makes ash — a new material; others only change shape.", marks: 1, markCode: "A" }],
            finalAnswer: "Burning wood",
          },
        },
        {
          id: "cips-u1-mc-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "You test 4 fabrics for waterproofing and 3 of them soak through. How many fabrics are NOT waterproof?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3, unit: "fabrics" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Testing properties", statement: "Soaking through = not waterproof." }],
            steps: [
              { reasoning: "3 fabrics soak through.", marks: 1, markCode: "M" },
              { reasoning: "So they are not waterproof → 3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cips-u1-mc-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why is glass chosen for a window rather than wood? Link the property to the use.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Property-use link", statement: "Transparency lets light through." }],
            steps: [
              { reasoning: "A window must let light through.", marks: 1, markCode: "M" },
              { reasoning: "Glass is transparent — you can see through it.", marks: 1, markCode: "M" },
              { reasoning: "Wood is opaque and blocks light, so it is unsuitable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Glass is transparent; wood blocks light",
          },
        },
        {
          id: "cips-u1-mc-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a property of a material?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Being red" },
            { id: "b", text: "Being old" },
            { id: "c", text: "Being bendy" },
            { id: "d", text: "Being in a shop" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Property", statement: "A characteristic like hardness or flexibility." }],
            steps: [{ reasoning: "Bendy describes how the material behaves — a property.", marks: 1, markCode: "A" }],
            finalAnswer: "Being bendy",
          },
        },
        {
          id: "cips-u1-mc-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Name three properties a school bag material needs and explain why. (b) Name one natural and one manufactured material suitable for a bag. (c) Describe a test to check if a material is waterproof. (d) Is tearing a piece of cloth a change to the material or just shape? Explain. (e) Is cooking rice a change to the material or just shape? Explain. (f) Why might a material be chosen for being flexible? Give an example. (g) Why might a material be chosen for being transparent? (h) Describe one simple test to compare the hardness of two materials.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Materials — properties, uses, changes", statement: "Integrated Stage 2 materials answer." }],
            steps: [
              { reasoning: "(a) e.g. strong, waterproof, light — reasons linked to use.", marks: 1, markCode: "M" },
              { reasoning: "(b) e.g. canvas (natural) and nylon (manufactured).", marks: 1, markCode: "M" },
              { reasoning: "(c) Place water drops on it — waterproof beads up, others soak in.", marks: 1, markCode: "M" },
              { reasoning: "(d) Shape change only — cloth is still cloth.", marks: 1, markCode: "M" },
              { reasoning: "(e) New material — cooked rice cannot become raw rice again.", marks: 1, markCode: "M" },
              { reasoning: "(f) e.g. rubber for grips — bends without breaking.", marks: 1, markCode: "M" },
              { reasoning: "(g) e.g. glass for windows — lets light through.", marks: 1, markCode: "M" },
              { reasoning: "(h) Scratch test: try to scratch each with the same object; harder resists.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bag properties, natural/manufactured, waterproof test, tearing=shape, cooking=new material, flexible/transparent uses, hardness test.",
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
