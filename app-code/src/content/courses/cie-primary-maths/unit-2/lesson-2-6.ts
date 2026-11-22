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
            { id: "a", text: "4 cm" },
            { id: "b", text: "8 cm" },
            { id: "c", text: "12 cm" },
            { id: "d", text: "16 cm" },
          ], correctChoiceId: "d" },
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
        {
          id: "cipm-u2-me-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the perimeter of a rectangle 6 cm by 4 cm?",
          response: { type: "mcq", choices: [
            { id: "a", text: "20 cm" },
            { id: "b", text: "24 cm" },
            { id: "c", text: "10 cm" },
            { id: "d", text: "48 cm" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Perimeter", statement: "Add all side lengths." }],
            steps: [{ reasoning: "$2(6+4) = 20$ cm.", marks: 1, markCode: "A" }],
            finalAnswer: "20 cm",
          },
        },
        {
          id: "cipm-u2-me-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the area of a rectangle 8 cm by 5 cm.",
          response: { type: "numeric", parts: [{ label: "a", answer: 40, unit: "cm²" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Area", statement: "length × width." }],
            steps: [
              { reasoning: "$8 \\times 5 = 40$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 40 cm².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "40 cm²",
          },
        },
        {
          id: "cipm-u2-me-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When the long hand points to 12 and the short hand points to 3, the time is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "half past three" },
            { id: "b", text: "quarter to three" },
            { id: "c", text: "3 o'clock" },
            { id: "d", text: "quarter past three" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "O'clock", statement: "Long hand on 12 = o'clock." }],
            steps: [{ reasoning: "Long hand on 12 → 3 o'clock.", marks: 1, markCode: "A" }],
            finalAnswer: "3 o'clock",
          },
        },
        {
          id: "cipm-u2-me-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A pictogram uses 1 picture = 4 books. A row shows 7 pictures. How many books?",
          response: { type: "numeric", parts: [{ label: "a", answer: 28 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Pictogram key", statement: "pictures × key value." }],
            steps: [
              { reasoning: "$7 \\times 4 = 28$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 28 books.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "28",
          },
        },
        {
          id: "cipm-u2-me-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the correct unit for area?",
          response: { type: "mcq", choices: [
            { id: "a", text: "ml" },
            { id: "b", text: "cm³" },
            { id: "c", text: "cm²" },
            { id: "d", text: "cm" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Area units", statement: "Square units." }],
            steps: [{ reasoning: "Area is measured in square units like cm².", marks: 1, markCode: "A" }],
            finalAnswer: "cm²",
          },
        },
        {
          id: "cipm-u2-me-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A bar chart shows goals: Team A = 12, Team B = 18, Team C = 9. (a) Which team scored most? (b) How many goals did all teams score? Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Reading bar charts", statement: "Compare heights; add values." }],
            steps: [
              { reasoning: "(a) Team B has the tallest bar (18).", marks: 1, markCode: "M" },
              { reasoning: "(b) $12 + 18 + 9 = 39$ goals.", marks: 1, markCode: "M" },
              { reasoning: "Answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Team B (b) 39",
          },
        },
        {
          id: "cipm-u2-me-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A rectangle is 10 cm by 6 cm. Which has the greater value: its perimeter or its area?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cannot tell" },
            { id: "b", text: "They are equal" },
            { id: "c", text: "Perimeter (32)" },
            { id: "d", text: "Area (60)" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Perimeter vs area", statement: "Compute both: $P = 32$, $A = 60$." }],
            steps: [{ reasoning: "$P = 2(10+6) = 32$ cm; $A = 10 \\times 6 = 60\\ \\text{cm}^2$ — area value is bigger.", marks: 1, markCode: "A" }],
            finalAnswer: "Area (60)",
          },
        },
        {
          id: "cipm-u2-me-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "The short hand points to 8 and the long hand to 6. The time is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "half past six" },
            { id: "b", text: "half past eight" },
            { id: "c", text: "8 o'clock" },
            { id: "d", text: "quarter past eight" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Half past", statement: "Long hand on 6 = :30." }],
            steps: [{ reasoning: "Long hand on 6 → half past eight.", marks: 1, markCode: "A" }],
            finalAnswer: "half past eight",
          },
        },
        {
          id: "cipm-u2-me-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "(a) Find the perimeter of a rectangle 9 cm by 3 cm. (b) Find its area. (c) A clock shows the long hand on 3 — what time is it? Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Measures and time", statement: "$P = 2(l+w)$; $A = l \\times w$; long hand on 3 = quarter past." }],
            steps: [
              { reasoning: "(a) $P = 2(9+3) = 24$ cm.", marks: 1, markCode: "M" },
              { reasoning: "(b) $A = 9 \\times 3 = 27\\ \\text{cm}^2$.", marks: 1, markCode: "M" },
              { reasoning: "(c) Quarter past the hour.", marks: 1, markCode: "M" },
              { reasoning: "Answers correct with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 24 cm (b) 27 cm² (c) quarter past",
          },
        },
        {
          id: "cipm-u2-me-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A pictogram's key tells you…",
          response: { type: "mcq", choices: [
            { id: "a", text: "what each picture stands for" },
            { id: "b", text: "the colours used" },
            { id: "c", text: "the names of the categories" },
            { id: "d", text: "the total number of items" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Pictogram key", statement: "Key gives value per symbol." }],
            steps: [{ reasoning: "The key shows what one picture represents.", marks: 1, markCode: "A" }],
            finalAnswer: "what each picture stands for",
          },
        },
        {
          id: "cipm-u2-me-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the perimeter of a square with side 9 cm.",
          response: { type: "numeric", parts: [{ label: "a", answer: 36, unit: "cm" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Perimeter", statement: "Add all four sides." }],
            steps: [
              { reasoning: "$4 \\times 9 = 36$ cm.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 36 cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "36 cm",
          },
        },
        {
          id: "cipm-u2-me-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) A rectangle is 12 cm by 5 cm — find perimeter and area. (b) A pictogram: 1 car = 6 cars sold; row shows 4 whole and 1 half car — how many sold? (c) The long hand points to 9 — what time is it? Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Measures, data and time", statement: "$P = 2(l+w)$; $A = l \\times w$; pictogram halves; clock hands." }],
            steps: [
              { reasoning: "(a) $P = 2(12+5) = 34$ cm; $A = 12 \\times 5 = 60\\ \\text{cm}^2$.", marks: 1, markCode: "M" },
              { reasoning: "(b) $4 \\times 6 = 24$ + 3 = 27 cars.", marks: 1, markCode: "M" },
              { reasoning: "(c) Quarter to the hour.", marks: 1, markCode: "M" },
              { reasoning: "Working shown for each part.", marks: 1, markCode: "M" },
              { reasoning: "Units correct.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 34 cm, $60\\ \\text{cm}^2$ (b) 27 (c) quarter to",
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
