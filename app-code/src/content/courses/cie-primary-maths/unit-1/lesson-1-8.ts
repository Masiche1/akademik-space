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
            { id: "a", text: "4" },
            { id: "b", text: "3" },
            { id: "c", text: "5" },
            { id: "d", text: "6" },
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
        {
          id: "cipm-u1-sd-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many sides does a hexagon have?",
          response: { type: "mcq", choices: [
            { id: "a", text: "8" },
            { id: "b", text: "7" },
            { id: "c", text: "6" },
            { id: "d", text: "5" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Hexagon", statement: "6 sides." }],
            steps: [{ reasoning: "Hex- means six.", marks: 1, markCode: "A" }],
            finalAnswer: "6",
          },
        },
        {
          id: "cipm-u1-sd-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many lines of symmetry does a square have?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Symmetry", statement: "Vertical, horizontal and both diagonals." }],
            steps: [
              { reasoning: "A square folds into matching halves along 4 lines.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cipm-u1-sd-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The cup is to the left of the plate and the plate is above the table. Where is the cup relative to the table?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Above the table" },
            { id: "b", text: "Under the plate" },
            { id: "c", text: "On the table, to the left of the plate" },
            { id: "d", text: "Below the table" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Position", statement: "Combine position words." }],
            steps: [{ reasoning: "The cup is on the table (since the plate is above it and the cup is beside the plate), to the left of the plate.", marks: 1, markCode: "A" }],
            finalAnswer: "On the table, to the left of the plate",
          },
        },
        {
          id: "cipm-u1-sd-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A pictogram shows goals scored: each ball = 4 goals. A team has 2 whole balls and 1 half ball. How many goals?",
          response: { type: "numeric", parts: [{ label: "a", answer: 10 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Pictogram halves", statement: "Whole × key + half × key." }],
            steps: [
              { reasoning: "$2 \\times 4 = 8$ plus half of 4 = 2 → $8 + 2 = 10$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 10 goals.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "cipm-u1-sd-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many faces does a cube have?",
          response: { type: "mcq", choices: [
            { id: "a", text: "8" },
            { id: "b", text: "5" },
            { id: "c", text: "4" },
            { id: "d", text: "6" },
          ], dorrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Cube", statement: "6 square faces." }],
            steps: [{ reasoning: "A cube has 6 faces.", marks: 1, markCode: "A" }],
            finalAnswer: "6",
          },
        },
        {
          id: "cipm-u1-sd-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "(a) How many vertices does a triangle have? (b) Describe the position of the door if it is 'between two windows' on a wall. (c) A pictogram uses 1 car = 5 cars sold; a row shows 4 cars — how many sold? Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Shape, position, pictogram", statement: "Count vertices; position words; key × pictures." }],
            steps: [
              { reasoning: "(a) 3 vertices.", marks: 1, markCode: "M" },
              { reasoning: "(b) One window on each side, door in the middle.", marks: 1, markCode: "M" },
              { reasoning: "(c) 4 × 5 = 20 cars sold.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 3 (b) middle of the two windows (c) 20",
          },
        },
        {
          id: "cipm-u1-sd-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many vertices does a rectangle have?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Rectangle", statement: "4 corners." }],
            steps: [
              { reasoning: "A rectangle has 4 corners (vertices).", marks: 1, markCode: "M" },
              { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "cipm-u1-sd-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which shape has exactly 4 lines of symmetry?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A square" },
            { id: "b", text: "An equilateral triangle" },
            { id: "c", text: "A rectangle (not a square)" },
            { id: "d", text: "A circle" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Symmetry", statement: "Count fold lines." }],
            steps: [{ reasoning: "A square has 4 lines of symmetry; a circle has infinitely many; others have fewer.", marks: 1, markCode: "A" }],
            finalAnswer: "A square",
          },
        },
        {
          id: "cipm-u1-sd-q13",
          difficulty: "core",
          totalMarks: 5,
          stem: "(a) Name the shape with 6 sides. (b) The cat is under the chair and the chair is next to the table — describe where the cat is relative to the table. (c) A pictogram: 1 star = 6 votes; a candidate has 3 whole stars and 1 half star — how many votes? Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Shapes, position, pictograms", statement: "Name by sides; combine position words; halves in pictograms." }],
            steps: [
              { reasoning: "(a) Hexagon.", marks: 1, markCode: "M" },
              { reasoning: "(b) Under/near the table (accept: beside or under the table area).", marks: 1, markCode: "M" },
              { reasoning: "(c) $3 \\times 6 = 18$ + half of 6 = 3 → 21 votes.", marks: 1, markCode: "M" },
              { reasoning: "Working shown for the pictogram.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) hexagon (b) under/beside the table (c) 21",
          },
        },
        {
          id: "cipm-u1-sd-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a pictogram, the key tells you…",
          response: { type: "mcq", choices: [
            { id: "a", text: "the colour of the pictures" },
            { id: "b", text: "what each picture stands for" },
            { id: "c", text: "how many pictures there are" },
            { id: "d", text: "the name of the chart" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Pictogram key", statement: "Key gives value per picture." }],
            steps: [{ reasoning: "The key shows what one picture represents.", marks: 1, markCode: "A" }],
            finalAnswer: "what each picture stands for",
          },
        },
        {
          id: "cipm-u1-sd-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A pictogram shows pets: each dog picture = 2 pets. A row has 3 whole pictures and 2 half pictures. How many pets?",
          response: { type: "numeric", parts: [{ label: "a", answer: 8 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Pictogram halves", statement: "3×2 + 2×1 = 8." }],
            steps: [
              { reasoning: "$3 \\times 2 = 6$; two halves = $2 \\times 1 = 2$.", marks: 1, markCode: "M" },
              { reasoning: "Total = 8 pets.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8",
          },
        },
        {
          id: "cipm-u1-sd-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) How many edges does a cube have? (b) A rectangle has 2 lines of symmetry — name them. (c) The apple is above the plate and the plate is on the table — where is the apple? (d) Pictogram: 1 flag = 4 points; a team scores 5 whole flags and 1 half flag — total points? Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Shape properties, position, pictograms", statement: "Edges, symmetry lines, position words, key × pictures." }],
            steps: [
              { reasoning: "(a) 12 edges.", marks: 1, markCode: "M" },
              { reasoning: "(b) Vertical and horizontal lines through the middle.", marks: 1, markCode: "M" },
              { reasoning: "(c) Above the plate (which is on the table) → above the table area/on the table.", marks: 1, markCode: "M" },
              { reasoning: "(d) $5 \\times 4 = 20$ + 2 = 22 points.", marks: 1, markCode: "M" },
              { reasoning: "Working shown for each part.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 12 (b) vertical and horizontal (c) above the plate/on the table (d) 22",
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
