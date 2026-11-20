import type { Lesson } from "../../../types.ts";

export const lesson26: Lesson = {
  id: "cips-u2-lesson-2-6",
  code: "2-6",
  title: "Stage 4 — Grouping and Testing Materials",
  goal: "I CAN group materials by properties and test them fairly.",
  standards: ["Cambridge Primary Science 0097 Stage 4: materials and working scientifically",
  "Cambridge Primary Science 0097 framework substrands: 4Cm, 4Cp, 4TWSp, 4TWSc, 4TWSa, 4TWSm"],
  stage: 4,
  vocabulary: [
    { term: "Property", definition: "A feature of a material, like hardness or whether it bends." },
    { term: "Transparent", definition: "Lets light through so you can see clearly, like glass." },
    { term: "Opaque", definition: "Blocks light so you cannot see through, like wood." },
    { term: "Flexible", definition: "Can bend without breaking, like rubber." },
    { term: "Fair test", definition: "An investigation where only one thing is changed." },
  ],
  concepts: [
    {
      id: "cips-u2-s6-materials-test",
      title: "Material properties and fair testing",
      skill: "Group materials by observable properties and plan simple fair tests at Stage 4 level.",
      lesson: {
        sections: [
          {
            heading: "Grouping by properties",
            body: "Materials can be grouped by properties you can test: hard or soft, flexible or stiff, transparent or opaque, magnetic or not, soluble or insoluble. A key lists the property and the group each material belongs to — wood is hard and opaque, rubber is flexible, glass is transparent.",
          },
          {
            heading: "Fair testing",
            body: "A fair test changes only one variable at a time. To test which material is strongest, use identical strips of each, same length, same force — only the material differs. Repeat the test and record results in a table to see which material performed best.",
          },
        ],
        keyFormulas: [
          { name: "Properties", statement: "hard/soft, flexible/stiff, transparent/opaque, magnetic" },
          { name: "Fair test", statement: "Change one variable only; keep others the same" },
        ],
        workedExample: {
          problem: "How would you fairly test which of two papers is stronger?",
          solution: "Cut identical strips, hang the same weight from each, see which tears — only the paper type changes.",
        },
      },
      questions: [
        {
          id: "cips-u2-mt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which material is transparent?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Glass" }, { id: "b", text: "Wood" }, { id: "c", text: "Brick" }, { id: "d", text: "Metal sheet" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Transparent", statement: "Lets light through clearly." }],
            steps: [{ reasoning: "Glass lets light through; the others block it.", marks: 1, markCode: "A" }],
            finalAnswer: "Glass",
          },
        },
        {
          id: "cips-u2-mt-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name one property of rubber.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Property", statement: "Observable feature like flexibility." }],
            steps: [
              { reasoning: "Rubber is flexible/stretchy.", marks: 1, markCode: "M" },
              { reasoning: "Answer: flexible (or stretchy/elastic).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Flexible",
          },
        },
        {
          id: "cips-u2-mt-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is a 'fair test'?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Fair test", statement: "Only one variable changes." }],
            steps: [
              { reasoning: "Only one thing is changed at a time.", marks: 1, markCode: "M" },
              { reasoning: "Everything else is kept the same.", marks: 1, markCode: "M" },
              { reasoning: "This makes results comparable and fair.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Change one variable, keep the rest the same",
          },
        },
        {
          id: "cips-u2-mt-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "You want to test which material soaks up water fastest: sponge, paper or cloth. Describe a fair test.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Planning fair tests", statement: "Control all variables except material." }],
            steps: [
              { reasoning: "Use identical-sized pieces of each material.", marks: 1, markCode: "M" },
              { reasoning: "Same amount of water, same container, same time.", marks: 1, markCode: "M" },
              { reasoning: "Only the material changes.", marks: 1, markCode: "M" },
              { reasoning: "Measure/observe water absorbed; repeat for reliability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Same size pieces, same water, same time — only material differs",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u2-mt-notes",
      title: "Materials and fair tests — revision notes",
      summary: "Group by hard/soft, flexible, transparent; fair test = one variable.",
      sections: [
        { heading: "Properties", body: "Test hardness, flexibility, transparency, magnetism — build a key." },
        { heading: "Fair tests", body: "Same size, same amount, same time — change only the material." },
      ],
    },
  ],
};
