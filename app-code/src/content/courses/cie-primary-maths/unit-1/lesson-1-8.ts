import type { Lesson } from "../../../types.ts";

export const lesson18: Lesson = {
  id: "cipm-u1-lesson-1-8",
  code: "1-8",
  title: "Stage 2 — Shapes, Position and Data Displays",
  goal: "I CAN describe shapes, use position words and read pictograms.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 2: geometry, position and handling data",
  "Cambridge Primary Mathematics 0096 framework substrands: 2Gg, 2Gp, 2Ss"],
  stage: 2,
  vocabulary: [
    { term: "Side", definition: "One straight edge of a flat shape." },
    { term: "Vertex", definition: "Corner point where sides meet." },
    { term: "Position", definition: "Where something is: above, below, left, right, between." },
    { term: "Pictogram", definition: "Chart using pictures; a key shows what each picture means." },
    { term: "Symmetry", definition: "When a shape folds into two matching halves." },
  ],
  concepts: [
    {
      id: "cipm-u1-s8-shapes-data",
      title: "Shape properties, position and pictograms",
      skill: "Describe 2D/3D shapes, describe position and interpret pictograms at Stage 2 level.",
      lesson: {
        sections: [
          {
            heading: "Shape properties",
            body: "2D shapes are described by sides and vertices: a triangle has 3, a rectangle 4, a pentagon 5. 3D shapes have faces, edges and vertices: a cube has 6 square faces. Some shapes have lines of symmetry — a square has 4, a rectangle has 2.",
          },
          {
            heading: "Position and pictograms",
            body: "Describe position precisely: 'the ball is between the two boxes' or 'above the chair'. Pictograms show data with pictures — always read the key first (e.g. each picture = 2). Count whole pictures and half pictures carefully.",
          },
        ],
        keyFormulas: [
          { name: "Sides", statement: "triangle 3, rectangle 4, pentagon 5" },
          { name: "Pictogram", statement: "count pictures × key value" },
        ],
        workedExample: {
          problem: "A pictogram shows 4 whole stars and 1 half star for pets; key = 1 star means 2 pets. How many pets?",
          solution: "4 × 2 + 1 = 9 pets.",
        },
      },
      questions: [
        {
          id: "cipm-u1-sd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many sides does a pentagon have?",
          response: { type: "mcq", choices: [
            { id: "a", text: "3" }, { id: "b", text: "4" }, { id: "c", text: "5" }, { id: "d", text: "6" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Pentagon", statement: "5 sides." }],
            steps: [{ reasoning: "Pent- means five.", marks: 1, markCode: "A" }],
            finalAnswer: "5",
          },
        },
        {
          id: "cipm-u1-sd-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many lines of symmetry does a rectangle have?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Symmetry", statement: "Fold into matching halves." }],
            steps: [
              { reasoning: "Vertical and horizontal folds match — 2 lines.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cipm-u1-sd-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Where is the book if it is 'between the pencil and the ruler' on the desk?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Position", statement: "Between = in the middle of two things." }],
            steps: [
              { reasoning: "Between means with the pencil on one side and ruler on the other.", marks: 1, markCode: "M" },
              { reasoning: "Picture/description matches.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "In the middle of the pencil and ruler",
          },
        },
        {
          id: "cipm-u1-sd-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "A pictogram: each 🍎 = 3 children. Row shows 3 whole apples and 1 half apple. How many children?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Pictogram halves", statement: "Whole pictures × key; halves count as 0.5." }],
            steps: [
              { reasoning: "3 whole = 3 × 3 = 9.", marks: 1, markCode: "M" },
              { reasoning: "Half = 1.5.", marks: 1, markCode: "M" },
              { reasoning: "Total = 9 + 1.5 = 10.5 — or if half not allowed, 9–10.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 10.5 (accept 10 or 11 depending on convention).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10.5",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u1-sd-notes",
      title: "Shapes, position, data — revision notes",
      summary: "Sides/vertices; symmetry lines; position words; pictogram key × pictures.",
      sections: [
        { heading: "Shapes", body: "Count sides and vertices; symmetry = foldable halves." },
        { heading: "Data", body: "Read the pictogram key first; halves count as half a picture." },
      ],
    },
  ],
};
