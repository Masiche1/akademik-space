import type { Lesson } from "../../../types.ts";

export const lesson210: Lesson = {
  id: "cips-u2-lesson-2-10",
  code: "2-10",
  title: "Stage 6 — Rocks, Soil and the Rock Cycle",
  goal: "I CAN classify rocks, describe soils and explain the rock cycle.",
  standards: ["Cambridge Primary Science 0097 Stage 6: Earth and space",
  "Cambridge Primary Science 0097 framework substrands: 6ESp, 6ESc"],
  stage: 6,
  vocabulary: [
    { term: "Igneous rock", definition: "Rock formed from cooled molten lava or magma." },
    { term: "Sedimentary rock", definition: "Rock formed from layers of sediment pressed together." },
    { term: "Metamorphic rock", definition: "Rock changed by heat and pressure." },
    { term: "Soil", definition: "Layer of weathered rock, organic matter and minerals." },
    { term: "Rock cycle", definition: "Continuous process forming and changing rocks." },
  ],
  concepts: [
    {
      id: "cips-u2-s10-rocks-soil",
      title: "Rocks, soil and the rock cycle",
      skill: "Classify rock types, describe soil and explain the rock cycle at Stage 6 level.",
      lesson: {
        sections: [
          {
            heading: "Three rock types",
            body: "Igneous rocks form when molten rock cools — granite, basalt; they often have crystals. Sedimentary rocks form from layers of sediment (sand, mud, shells) pressed over time — sandstone, limestone; they may contain fossils. Metamorphic rocks form when existing rocks are changed by heat and pressure — marble, slate; they are often hard and layered.",
          },
          {
            heading: "Soil and the rock cycle",
            body: "Soil forms when rocks weather (break down by wind, water, temperature) and mix with decayed plants and animals. Different soils have different clay, sand and organic content — good soil supports plant growth. The rock cycle: igneous rocks weather to sediment → sedimentary rocks; heat/pressure → metamorphic; melting → magma → igneous again.",
          },
        ],
        keyFormulas: [
          { name: "Rock types", statement: "igneous (cooled melt), sedimentary (layers), metamorphic (heat/pressure)" },
          { name: "Soil", statement: "weathered rock + organic matter" },
        ],
        workedExample: {
          problem: "Limestone contains fossils. Which rock type is it and how did it form?",
          solution: "Sedimentary — formed from compressed layers of sediment including shells.",
        },
      },
      questions: [
        {
          id: "cips-u2-rs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which rock type forms from cooled molten rock?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sedimentary" }, { id: "b", text: "Metamorphic" }, { id: "c", text: "Igneous" }, { id: "d", text: "All of them" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Igneous", statement: "Formed from cooled magma/lava." }],
            steps: [{ reasoning: "Molten rock cooling = igneous.", marks: 1, markCode: "A" }],
            finalAnswer: "Igneous",
          },
        },
        {
          id: "cips-u2-rs-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What two main things make up soil?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Soil", statement: "Weathered rock + organic matter." }],
            steps: [
              { reasoning: "Weathered rock/minerals.", marks: 1, markCode: "M" },
              { reasoning: "Organic matter (decayed plants/animals).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Weathered rock and organic matter",
          },
        },
        {
          id: "cips-u2-rs-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How are metamorphic rocks formed?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Metamorphic", statement: "Heat + pressure change existing rock." }],
            steps: [
              { reasoning: "Existing rock is buried deep.", marks: 1, markCode: "M" },
              { reasoning: "Heat and pressure change its structure.", marks: 1, markCode: "M" },
              { reasoning: "Answer: heat and pressure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "By heat and pressure acting on existing rock",
          },
        },
        {
          id: "cips-u2-rs-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe one way the rock cycle could turn an igneous rock into a sedimentary rock.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rock cycle", statement: "Weathering → sediment → compaction." }],
            steps: [
              { reasoning: "Igneous rock weathers/breaks down.", marks: 1, markCode: "M" },
              { reasoning: "Sediment is deposited in layers.", marks: 1, markCode: "M" },
              { reasoning: "Layers are compressed into sedimentary rock.", marks: 1, markCode: "M" },
              { reasoning: "Sequence explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Igneous rock weathered → sediment deposited → compressed into sedimentary rock",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u2-rs-notes",
      title: "Rocks and soil — revision notes",
      summary: "Igneous=cool melt; sedimentary=layers; metamorphic=heat/pressure; soil=rock+organic.",
      sections: [
        { heading: "Rock types", body: "Identify by formation: crystals→igneous, layers/fossils→sedimentary, changed→metamorphic." },
        { heading: "Soil", body: "Weathered rock + decayed matter; clay/sand/organic content varies." },
      ],
    },
  ],
};
