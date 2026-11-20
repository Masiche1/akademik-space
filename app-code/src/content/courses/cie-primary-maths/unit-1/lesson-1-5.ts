import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "cipm-u1-lesson-1-5",
  code: "1-5",
  title: "Stage 2 — Times Tables and Measurement",
  goal: "I CAN recall times tables and measure length, mass and capacity.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 2: multiplication and measures",
  "Cambridge Primary Mathematics 0096 framework substrands: 2Ni, 2Gg"],
  stage: 2,
  vocabulary: [
    { term: "Times table", definition: "A list of multiplication facts for one number." },
    { term: "Length", definition: "How long something is; measured in cm or m." },
    { term: "Mass", definition: "How heavy something is; measured in grams or kilograms." },
    { term: "Capacity", definition: "How much a container holds; measured in ml or litres." },
    { term: "Ruler", definition: "Tool for measuring length in centimetres." },
  ],
  concepts: [
    {
      id: "cipm-u1-s5-times-measure",
      title: "Times tables and measuring amounts",
      skill: "Use ×2, ×5 and ×10 facts and compare measurements at Stage 2 level.",
      lesson: {
        sections: [
          {
            heading: "Times tables",
            body: "Stage 2 focuses on the 2, 5 and 10 times tables. The 10 times table is the easiest — just add a zero. The 2 times table is doubling, and the 5 times table ends in 5 or 0. Knowing these facts helps with division too: 20 ÷ 5 = 4 because 5 × 4 = 20.",
          },
          {
            heading: "Measuring",
            body: "Length uses cm/m with a ruler; mass uses g/kg with scales; capacity uses ml/l with jugs. Always line up the zero end of the ruler with the start of the object, and read at eye level. Compare measurements using more than, less than and equal to.",
          },
        ],
        keyFormulas: [
          { name: "Times tables", statement: "×2 = double; ×10 = add zero" },
          { name: "Units", statement: "length: cm/m; mass: g/kg; capacity: ml/l" },
        ],
        workedExample: {
          problem: "A pencil is 14 cm long. Is it longer or shorter than a 20 cm ruler?",
          solution: "14 cm is less than 20 cm, so the pencil is shorter than the ruler.",
        },
      },
      questions: [
        {
          id: "cipm-u1-tm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 5 × 6?",
          response: { type: "mcq", choices: [
            { id: "a", text: "25" }, { id: "b", text: "30" }, { id: "c", text: "35" }, { id: "d", text: "11" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "5 times table", statement: "5 × 6 = 30." }],
            steps: [{ reasoning: "5 × 6 = 30.", marks: 1, markCode: "A" }],
            finalAnswer: "30",
          },
        },
        {
          id: "cipm-u1-tm-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which unit would you use to measure the mass of a bag of sugar?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Mass units", statement: "Mass is measured in grams or kilograms." }],
            steps: [
              { reasoning: "Mass is measured with scales in g or kg.", marks: 1, markCode: "M" },
              { reasoning: "Answer: grams or kilograms.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Grams or kilograms",
          },
        },
        {
          id: "cipm-u1-tm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "There are 5 apples in each of 4 bags. How many apples altogether?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Multiplication as groups", statement: "4 groups of 5 = 4 × 5." }],
            steps: [
              { reasoning: "4 bags × 5 apples = 20.", marks: 1, markCode: "M" },
              { reasoning: "Or count in fives: 5, 10, 15, 20.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 20 apples.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20",
          },
        },
        {
          id: "cipm-u1-tm-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "A jug holds 750 ml and is half full. How much water is in it?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Half of a capacity", statement: "Half of 750 ml = 375 ml." }],
            steps: [
              { reasoning: "Half means divide by 2.", marks: 1, markCode: "M" },
              { reasoning: "750 ÷ 2 = 375.", marks: 1, markCode: "M" },
              { reasoning: "Units stay in ml.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 375 ml.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "375 ml",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u1-tm-notes",
      title: "Times tables and measurement — revision notes",
      summary: "×2 double, ×5 ends 0/5, ×10 add zero; cm/m, g/kg, ml/l.",
      sections: [
        { heading: "Tables", body: "Learn 2, 5, 10 tables; use them for matching division facts." },
        { heading: "Measuring", body: "Line up zero; read at eye level; match unit to what you measure." },
      ],
    },
  ],
};
