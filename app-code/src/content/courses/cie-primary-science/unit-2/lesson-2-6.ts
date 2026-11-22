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
            { id: "a", text: "Brick" },
            { id: "b", text: "Metal sheet" },
            { id: "c", text: "Wood" },
            { id: "d", text: "Glass" },
          ], correctChoiceId: "d" },
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
        {
          id: "cips-u2-mt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which material is OPAQUE?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Wood" },
            { id: "b", text: "Clear plastic" },
            { id: "c", text: "Water" },
            { id: "d", text: "Glass" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Opaque", statement: "Blocks light." }],
            steps: [{ reasoning: "Wood blocks light — opaque.", marks: 1, markCode: "A" }],
            finalAnswer: "Wood",
          },
        },
        {
          id: "cips-u2-mt-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which material is FLEXIBLE?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A ruler" },
            { id: "b", text: "A brick" },
            { id: "c", text: "Glass" },
            { id: "d", text: "Rubber" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Flexible", statement: "Bends without breaking." }],
            steps: [{ reasoning: "Rubber bends easily — flexible.", marks: 1, markCode: "A" }],
            finalAnswer: "Rubber",
          },
        },
        {
          id: "cips-u2-mt-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many material properties are listed: hard/soft, flexible/stiff, transparent/opaque, magnetic?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4, unit: "properties" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Property", statement: "Observable features of materials." }],
            steps: [{ reasoning: "There are 4 property groups.", marks: 1, markCode: "M" }],
            finalAnswer: "4",
          },
        },
        {
          id: "cips-u2-mt-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "You test 5 materials for hardness. 3 resist scratching and 2 scratch easily. What is the total number of hard materials found?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3, unit: "materials" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Testing properties", statement: "Resists scratching = hard." }],
            steps: [
              { reasoning: "3 materials resist scratching.", marks: 1, markCode: "M" },
              { reasoning: "Total hard = 3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cips-u2-mt-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a fair test, how many variables should you change?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only one" },
            { id: "b", text: "All of them" },
            { id: "c", text: "Two" },
            { id: "d", text: "None" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Fair test", statement: "One variable changes." }],
            steps: [{ reasoning: "A fair test changes only one variable.", marks: 1, markCode: "A" }],
            finalAnswer: "Only one",
          },
        },
        {
          id: "cips-u2-mt-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two properties you could test on a piece of fabric.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Material properties", statement: "Testable features like texture, flexibility." }],
            steps: [
              { reasoning: "First property (e.g. rough/smooth texture).", marks: 1, markCode: "M" },
              { reasoning: "Second property (e.g. flexible or waterproof).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. texture and flexibility",
          },
        },
        {
          id: "cips-u2-mt-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student tests which paper is stronger by tearing each sheet by hand with different forces. Explain why this is NOT a fair test.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Fair test", statement: "Only one variable should change." }],
            steps: [
              { reasoning: "The force used differs each time — not controlled.", marks: 1, markCode: "M" },
              { reasoning: "Different sheet sizes may also differ.", marks: 1, markCode: "M" },
              { reasoning: "Results cannot be compared fairly; must use same force and size.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Force not controlled — unfair comparison",
          },
        },
        {
          id: "cips-u2-mt-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which material is magnetic?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Glass" },
            { id: "b", text: "Wood" },
            { id: "c", text: "Steel" },
            { id: "d", text: "Plastic" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Magnetic", statement: "Iron and steel are magnetic." }],
            steps: [{ reasoning: "Steel is magnetic.", marks: 1, markCode: "A" }],
            finalAnswer: "Steel",
          },
        },
        {
          id: "cips-u2-mt-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "In three repeats of a strength test, a material holds 2 kg, 3 kg and 2 kg before tearing. What is the total weight held across all three tries?",
          response: { type: "numeric", parts: [{ label: "a", answer: 7, unit: "kg" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Repeating tests", statement: "Add all results." }],
            steps: [
              { reasoning: "$2 + 3 + 2 = 7$.", marks: 1, markCode: "M" },
              { reasoning: "Total = 7 kg.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7",
          },
        },
        {
          id: "cips-u2-mt-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why it is important to repeat a material test several times.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Reliability", statement: "Repeats check results are consistent." }],
            steps: [
              { reasoning: "One test might be a mistake or fluke.", marks: 1, markCode: "M" },
              { reasoning: "Repeating shows whether results are consistent.", marks: 1, markCode: "M" },
              { reasoning: "Consistent results are more trustworthy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Repeats make results reliable",
          },
        },
        {
          id: "cips-u2-mt-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which pair correctly groups materials?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Rubber and plastic — both flexible" },
            { id: "b", text: "Glass and wood — both transparent" },
            { id: "c", text: "Sand and salt — both soluble" },
            { id: "d", text: "Metal and wood — both magnetic" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Grouping materials", statement: "Group by shared properties." }],
            steps: [{ reasoning: "Rubber and plastic are both flexible — correct group.", marks: 1, markCode: "A" }],
            finalAnswer: "Rubber and plastic — both flexible",
          },
        },
        {
          id: "cips-u2-mt-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define 'property' and name four material properties. (b) Classify: glass, wood, rubber, steel by transparent/opaque and flexible/stiff. (c) What is a fair test? (d) Describe a fair test for which of two papers is stronger. (e) What should stay the same in that test? (f) What is the one variable? (g) Why repeat the test? (h) How should results be recorded?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Materials and fair tests", statement: "Integrated Stage 4 answer." }],
            steps: [
              { reasoning: "(a) Observable feature; hard/soft, flexible, transparent, magnetic.", marks: 1, markCode: "M" },
              { reasoning: "(b) Glass=transparent/stiff; wood=opaque/stiff; rubber=opaque/flexible; steel=opaque/stiff.", marks: 1, markCode: "M" },
              { reasoning: "(c) Only one variable changes; rest stay same.", marks: 1, markCode: "M" },
              { reasoning: "(d) Identical strips, hang same weight, see which tears.", marks: 1, markCode: "M" },
              { reasoning: "(e) Strip size, weight, hanging method.", marks: 1, markCode: "M" },
              { reasoning: "(f) The paper type/material.", marks: 1, markCode: "M" },
              { reasoning: "(g) To check results are reliable.", marks: 1, markCode: "M" },
              { reasoning: "(h) In a table — material vs result for each repeat.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Properties, classification, fair test def, paper test, controls, variable, repeats, recording.",
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
