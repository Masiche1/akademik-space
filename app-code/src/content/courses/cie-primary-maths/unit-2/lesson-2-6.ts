import type { Lesson } from "../../../types.ts";

export const lesson26: Lesson = {
  id: "cipm-u2-lesson-2-6",
  code: "2-6",
  title: "Stage 4 — Perimeter, Area, Time and Data",
  goal: "I CAN find perimeter and area and read charts and clocks.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 4: measures and handling data",
  "Cambridge Primary Mathematics 0096 framework substrands: 4Gg, 4Gt, 4Ss"],
  stage: 4,
  vocabulary: [
    { term: "Perimeter", definition: "Distance all the way around a shape." },
    { term: "Area", definition: "Space inside a shape, counted in squares." },
    { term: "O'clock", definition: "Exactly on the hour when the long hand points to 12." },
    { term: "Pictogram", definition: "Chart using pictures where each picture stands for a number." },
    { term: "Bar chart", definition: "Chart with bars whose heights show amounts." },
  ],
  concepts: [
    {
      id: "cipm-u2-s6-measure-data",
      title: "Perimeter, area, time and charts",
      skill: "Calculate perimeter/area, tell time and interpret charts at Stage 4 level.",
      lesson: {
        sections: [
          {
            heading: "Perimeter and area",
            body: "Perimeter is the distance around — add all the side lengths. Area is the space inside — for rectangles, multiply length by width, or count the squares on grid paper. Both use different units: cm for perimeter, cm² for area.",
          },
          {
            heading: "Time and data",
            body: "On an analogue clock the short hand shows hours and the long hand minutes — 'half past' means the long hand points to 6. Pictograms use a key (e.g. each 🍎 = 2 children); bar charts show amounts by bar height. Read the scale and key carefully before answering.",
          },
        ],
        keyFormulas: [
          { name: "Perimeter", statement: "Add all side lengths" },
          { name: "Area (rectangle)", statement: "length × width" },
        ],
        workedExample: {
          problem: "A rectangle is 5 cm by 3 cm. Find its perimeter and area.",
          solution: "Perimeter = 2(5+3) = 16 cm. Area = 5 × 3 = 15 cm².",
        },
      },
      questions: [
        {
          id: "cipm-u2-me-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the perimeter of a square with sides of 4 cm?",
          response: { type: "mcq", choices: [
            { id: "a", text: "8 cm" }, { id: "b", text: "16 cm" }, { id: "c", text: "12 cm" }, { id: "d", text: "4 cm" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Perimeter", statement: "Add all sides: 4+4+4+4." }],
            steps: [{ reasoning: "4 × 4 = 16 cm.", marks: 1, markCode: "A" }],
            finalAnswer: "16 cm",
          },
        },
        {
          id: "cipm-u2-me-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When the long hand of a clock points to 6, what does the time say?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Half past", statement: "Long hand on 6 = 30 minutes." }],
            steps: [
              { reasoning: "Long hand on 6 means half past the hour.", marks: 1, markCode: "M" },
              { reasoning: "Answer: half past (the hour shown by short hand).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Half past",
          },
        },
        {
          id: "cipm-u2-me-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A rectangle is 7 cm long and 2 cm wide. Find its area.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Area", statement: "length × width." }],
            steps: [
              { reasoning: "Area = 7 × 2.", marks: 1, markCode: "M" },
              { reasoning: "= 14.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 14 cm².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "14 cm²",
          },
        },
        {
          id: "cipm-u2-me-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "In a pictogram each star = 3 pets. There are 5 stars for dogs. How many children have dogs?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Pictogram key", statement: "Multiply symbols by key value." }],
            steps: [
              { reasoning: "Each star stands for 3.", marks: 1, markCode: "M" },
              { reasoning: "5 × 3 = 15.", marks: 1, markCode: "M" },
              { reasoning: "Units: children.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 15 children.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u2-me-notes",
      title: "Measures and data — revision notes",
      summary: "perimeter = add sides; area = l×w; half past = long hand on 6; read chart keys.",
      sections: [
        { heading: "Measures", body: "Perimeter in cm, area in cm² — don't mix the units." },
        { heading: "Data", body: "Always check the key/scale first; multiply symbols by their value." },
      ],
    },
  ],
};
