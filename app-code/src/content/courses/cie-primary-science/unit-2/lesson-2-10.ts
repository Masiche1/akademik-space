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
            { id: "a", text: "Igneous" },
            { id: "b", text: "All of them" },
            { id: "c", text: "Sedimentary" },
            { id: "d", text: "Metamorphic" },
          ], correctChoiceId: "a" },
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
        {
          id: "cips-u2-rs-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which rock type forms from layers of sediment?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Metamorphic" },
            { id: "b", text: "Igneous" },
            { id: "c", text: "All of them" },
            { id: "d", text: "Sedimentary" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Sedimentary", statement: "Formed from compressed layers." }],
            steps: [{ reasoning: "Layers of sediment → sedimentary rock.", marks: 1, markCode: "A" }],
            finalAnswer: "Sedimentary",
          },
        },
        {
          id: "cips-u2-rs-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which rock often contains fossils?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Basalt" },
            { id: "b", text: "Marble" },
            { id: "c", text: "Limestone" },
            { id: "d", text: "Granite" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Sedimentary", statement: "May contain fossils." }],
            steps: [{ reasoning: "Limestone is sedimentary and may contain fossils.", marks: 1, markCode: "A" }],
            finalAnswer: "Limestone",
          },
        },
        {
          id: "cips-u2-rs-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many main rock types are there?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3, unit: "types" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Rock types", statement: "Igneous, sedimentary, metamorphic." }],
            steps: [{ reasoning: "There are 3 rock types.", marks: 1, markCode: "M" }],
            finalAnswer: "3",
          },
        },
        {
          id: "cips-u2-rs-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A rock sample shows crystals inside it. Which rock type is it most likely to be?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Igneous", statement: "Often has crystals from cooling." }],
            steps: [
              { reasoning: "Crystals suggest cooled molten rock.", marks: 1, markCode: "M" },
              { reasoning: "Answer: igneous rock.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Igneous",
          },
        },
        {
          id: "cips-u2-rs-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What changes existing rock into metamorphic rock?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Heat and pressure" },
            { id: "b", text: "Water only" },
            { id: "c", text: "Wind only" },
            { id: "d", text: "Sunlight only" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Metamorphic", statement: "Heat + pressure change rock." }],
            steps: [{ reasoning: "Heat and pressure form metamorphic rocks.", marks: 1, markCode: "A" }],
            finalAnswer: "Heat and pressure",
          },
        },
        {
          id: "cips-u2-rs-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two things that help break rocks down to form soil.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Weathering", statement: "Wind, water, temperature break rocks." }],
            steps: [
              { reasoning: "First weathering agent (e.g. water).", marks: 1, markCode: "M" },
              { reasoning: "Second (e.g. wind or temperature change).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. water and wind",
          },
        },
        {
          id: "cips-u2-rs-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how soil is formed from rocks.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Soil formation", statement: "Weathered rock + organic matter." }],
            steps: [
              { reasoning: "Rocks weather — break down by wind, water, temperature.", marks: 1, markCode: "M" },
              { reasoning: "Broken rock mixes with decayed plants and animals.", marks: 1, markCode: "M" },
              { reasoning: "The mixture becomes soil.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rocks weather and mix with organic matter → soil",
          },
        },
        {
          id: "cips-u2-rs-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which rock forms when magma cools underground?",
          response: { type: "mcq", choices: [
            { id: "a", text: "None" },
            { id: "b", text: "Metamorphic" },
            { id: "c", text: "Sedimentary" },
            { id: "d", text: "Igneous" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Igneous", statement: "Forms from cooled magma or lava." }],
            steps: [{ reasoning: "Cooled magma → igneous rock.", marks: 1, markCode: "A" }],
            finalAnswer: "Igneous",
          },
        },
        {
          id: "cips-u2-rs-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a rock cycle model, 3 igneous rocks weather to sediment and 2 sedimentary rocks form. What is the total number of rocks involved?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5, unit: "rocks" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Rock cycle", statement: "Add rocks in the cycle." }],
            steps: [
              { reasoning: "$3 + 2 = 5$.", marks: 1, markCode: "M" },
              { reasoning: "Total rocks = 5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cips-u2-rs-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A rock has layers and contains shell fossils. Identify its type and explain your reasoning.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rock identification", statement: "Layers + fossils = sedimentary." }],
            steps: [
              { reasoning: "Layers suggest sedimentary formation.", marks: 1, markCode: "M" },
              { reasoning: "Shells are sediment — fossils preserved in sedimentary rock.", marks: 1, markCode: "M" },
              { reasoning: "Answer: sedimentary rock.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sedimentary — layers and fossils",
          },
        },
        {
          id: "cips-u2-rs-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What makes good soil for growing plants?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A mix of clay, sand and organic matter" },
            { id: "b", text: "Only water" },
            { id: "c", text: "Only sand" },
            { id: "d", text: "Pure rock" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Soil", statement: "Clay, sand, organic content varies." }],
            steps: [{ reasoning: "Good soil has a mix of clay, sand and organic matter.", marks: 1, markCode: "A" }],
            finalAnswer: "Mix of clay, sand and organic matter",
          },
        },
        {
          id: "cips-u2-rs-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Name the three rock types and how each forms. (b) Give one example of each rock type. (c) What two things make up soil? (d) How does weathering help form soil? (e) How can you identify a sedimentary rock? (f) Describe the rock cycle: igneous → ? → ? . (g) Why do sedimentary rocks often contain fossils? (h) What happens if a rock is heated and pressed deep underground?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rocks, soil, rock cycle", statement: "Integrated Stage 6 Earth answer." }],
            steps: [
              { reasoning: "(a) Igneous=cooled melt; sedimentary=layers of sediment; metamorphic=heat/pressure.", marks: 1, markCode: "M" },
              { reasoning: "(b) e.g. granite/basalt; sandstone/limestone; marble/slate.", marks: 1, markCode: "M" },
              { reasoning: "(c) Weathered rock and organic matter.", marks: 1, markCode: "M" },
              { reasoning: "(d) Rocks break down and mix with decayed material.", marks: 1, markCode: "M" },
              { reasoning: "(e) Layers and possibly fossils.", marks: 1, markCode: "M" },
              { reasoning: "(f) Igneous → weathering → sediment → sedimentary → metamorphic → melt → igneous.", marks: 1, markCode: "M" },
              { reasoning: "(g) Shells/skeletons are sediment trapped in layers.", marks: 1, markCode: "M" },
              { reasoning: "(h) It becomes metamorphic rock.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rock types/formations, examples, soil parts, weathering, sedimentary ID, rock cycle, fossils, metamorphism.",
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
