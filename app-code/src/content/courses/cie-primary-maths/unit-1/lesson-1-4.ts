import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "cipm-u1-lesson-1-4",
  code: "1-4",
  title: "Stage 3 — Geometry, Position and Data",
  goal: "I CAN recognise shapes, use position words and read simple data.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 3: geometry, position and data",
  "Cambridge Primary Mathematics 0096 framework substrands: 3Gg, 3Gp, 3Ss"],
  stage: 3,
  vocabulary: [
    { term: "2D shape", definition: "Flat shape like a square or triangle." },
    { term: "3D shape", definition: "Solid shape like a cube or sphere." },
    { term: "Symmetry", definition: "When a shape can be folded into matching halves." },
    { term: "Position", definition: "Where something is: left, right, above, below." },
    { term: "Data", definition: "Information collected and counted." },
  ],
  concepts: [
    {
      id: "cipm-u1-s4-geometry",
      title: "Shapes, position and simple data",
      skill: "Identify shapes, describe position and interpret simple data at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "Shapes and symmetry",
            body: "2D shapes have sides and vertices; 3D shapes have faces, edges and vertices. A shape has symmetry if a line divides it into matching halves. Regular shapes have all sides and angles equal.",
          },
          {
            heading: "Position and data",
            body: "Describe position using words (left of, above, between) and simple directions. Data is information you can count and compare — tally charts and block graphs show it clearly.",
          },
        ],
        keyFormulas: [
          { name: "Symmetry", statement: "Fold into matching halves" },
          { name: "Position", statement: "left/right/above/below/between" },
        ],
        workedExample: {
          problem: "How many lines of symmetry does a square have?",
          solution: "4 — vertical, horizontal and both diagonals.",
        },
      },
      questions: [
        {
          id: "cipm-u1-gp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a 3D shape?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Rectangle" },
            { id: "b", text: "Cube" },
            { id: "c", text: "Circle" },
            { id: "d", text: "Triangle" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "3D shape", statement: "Solid with faces, edges, vertices." }],
            steps: [{ reasoning: "A cube is solid; the others are flat 2D shapes.", marks: 1, markCode: "A" }],
            finalAnswer: "Cube",
          },
        },
        {
          id: "cipm-u1-gp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A shape has 4 equal sides and 4 right angles. Name it.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Square", statement: "4 equal sides, 4 right angles." }],
            steps: [
              { reasoning: "Equal sides + right angles ⇒ square.", marks: 1, markCode: "M" },
              { reasoning: "Answer: square.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Square",
          },
        },
        {
          id: "cipm-u1-gp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "The letter A has one line of symmetry. Which letter has NO line of symmetry?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Symmetry", statement: "Check if folding gives matching halves." }],
            steps: [
              { reasoning: "Test each letter by imagining a mirror line.", marks: 1, markCode: "M" },
              { reasoning: "E.g. R cannot be folded into matching halves.", marks: 1, markCode: "M" },
              { reasoning: "Answer: a letter like R or F.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. R",
          },
        },
        {
          id: "cipm-u1-gp-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "A tally chart shows: red 7, blue 5, green 9. Which colour is most popular and by how much does it beat blue?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Reading data", statement: "Compare tallies; subtract." }],
            steps: [
              { reasoning: "Green has the highest tally (9).", marks: 1, markCode: "M" },
              { reasoning: "$9 - 5 = 4$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: green, by 4.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Green, by 4",
          },
        },
        {
          id: "cipm-u1-gp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which 2D shape has 3 sides?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Triangle" },
            { id: "b", text: "Square" },
            { id: "c", text: "Pentagon" },
            { id: "d", text: "Rectangle" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Triangle", statement: "3 sides, 3 vertices." }],
            steps: [{ reasoning: "A triangle has 3 sides.", marks: 1, markCode: "A" }],
            finalAnswer: "Triangle",
          },
        },
        {
          id: "cipm-u1-gp-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many lines of symmetry does a rectangle have? (Do not count a square.)",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Symmetry", statement: "Fold to check matching halves." }],
            steps: [
              { reasoning: "A rectangle folds in half vertically and horizontally only.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2 lines of symmetry.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cipm-u1-gp-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A sphere is best described as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "a shape with 4 faces" },
            { id: "b", text: "a line of symmetry" },
            { id: "c", text: "a flat 2D shape" },
            { id: "d", text: "a 3D shape with no flat faces" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Sphere", statement: "Round 3D solid, no flat faces." }],
            steps: [{ reasoning: "A sphere is a 3D shape with a curved surface and no flat faces.", marks: 1, markCode: "A" }],
            finalAnswer: "a 3D shape with no flat faces",
          },
        },
        {
          id: "cipm-u1-gp-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "On a grid, a star is in the square 2 across and 3 up. How many squares across and up is that position?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 2 },
            { label: "b", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Position", statement: "Coordinates give across then up." }],
            steps: [
              { reasoning: "Across = 2, up = 3.", marks: 1, markCode: "M" },
              { reasoning: "Answers: 2 across, 3 up.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 across, 3 up",
          },
        },
        {
          id: "cipm-u1-gp-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these shapes is regular?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A square" },
            { id: "b", text: "A rectangle that is not a square" },
            { id: "c", text: "A kite" },
            { id: "d", text: "A triangle with sides 3 cm, 4 cm and 5 cm" },
          ], aorrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Regular shape", statement: "All sides and angles equal." }],
            steps: [{ reasoning: "A square has all sides and angles equal.", marks: 1, markCode: "A" }],
            finalAnswer: "A square",
          },
        },
        {
          id: "cipm-u1-gp-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A block graph shows favourite sports: football 8, swimming 5, athletics 7, tennis 4. (a) Which sport is most popular? (b) How many children were asked altogether? Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Reading data", statement: "Compare blocks; add for total." }],
            steps: [
              { reasoning: "(a) Football has the tallest block (8).", marks: 1, markCode: "M" },
              { reasoning: "(b) 8 + 5 + 7 + 4 = 24.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 24 children.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) football (b) 24",
          },
        },
        {
          id: "cipm-u1-gp-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cube has how many faces, edges and vertices? Write the three numbers.",
          response: { type: "numeric", parts: [
            { label: "faces", answer: 6 },
            { label: "edges", answer: 12 },
            { label: "vertices", answer: 8 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Cube properties", statement: "6 faces, 12 edges, 8 vertices." }],
            steps: [
              { reasoning: "A cube has 6 square faces.", marks: 1, markCode: "M" },
              { reasoning: "12 edges and 8 vertices.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 faces, 12 edges, 8 vertices",
          },
        },
        {
          id: "cipm-u1-gp-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which statement about symmetry is correct?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A square has only 2 lines of symmetry" },
            { id: "b", text: "An isosceles triangle has exactly 1 line of symmetry" },
            { id: "c", text: "A circle has no lines of symmetry" },
            { id: "d", text: "A scalene triangle has 3 lines of symmetry" },
          ], borrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Symmetry", statement: "Check fold lines carefully." }],
            steps: [{ reasoning: "An isosceles triangle folds into matching halves along one line only.", marks: 1, markCode: "A" }],
            finalAnswer: "An isosceles triangle has exactly 1 line of symmetry",
          },
        },
        {
          id: "cipm-u1-gp-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "A tally chart shows eye colour: brown 12, blue 7, green 4, other 2. (a) How many children have green eyes? (b) How many more have brown eyes than blue eyes? (c) How many children are in the class? Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Reading data", statement: "Read tallies; subtract and add." }],
            steps: [
              { reasoning: "(a) Green eyes = 4.", marks: 1, markCode: "M" },
              { reasoning: "(b) 12 − 7 = 5 more.", marks: 1, markCode: "M" },
              { reasoning: "(c) 12 + 7 + 4 + 2 = 25.", marks: 1, markCode: "M" },
              { reasoning: "All answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 4 (b) 5 (c) 25",
          },
        },
        {
          id: "cipm-u1-gp-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word best describes where the ball is if it sits directly underneath the table?",
          response: { type: "mcq", choices: [
            { id: "a", text: "above the table" },
            { id: "b", text: "inside the table" },
            { id: "c", text: "left of the table" },
            { id: "d", text: "below the table" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Position", statement: "Underneath = below." }],
            steps: [{ reasoning: "Underneath means below.", marks: 1, markCode: "A" }],
            finalAnswer: "below the table",
          },
        },
        {
          id: "cipm-u1-gp-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A rectangular garden is 8 m long and 5 m wide. How many metres of fencing are needed to go all the way around it?",
          response: { type: "numeric", parts: [{ label: "a", answer: 26, unit: "m" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Perimeter", statement: "Add all four sides." }],
            steps: [
              { reasoning: "8 + 5 + 8 + 5 = 26 m.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 26 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "26 m",
          },
        },
        {
          id: "cipm-u1-gp-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Name a 3D shape with 4 triangular faces. (b) A square has 4 lines of symmetry — explain why. (c) In a pictogram, one star = 4 pencils. If there are 9 stars, how many pencils? (d) Put these position words in order from top to bottom on a shelf: under, on, above. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Shapes, symmetry and data", statement: "Shape properties, symmetry reasoning, pictogram key." }],
            steps: [
              { reasoning: "(a) A square-based pyramid (or tetrahedron).", marks: 1, markCode: "M" },
              { reasoning: "(b) Folds along vertical, horizontal and both diagonals give matching halves.", marks: 1, markCode: "M" },
              { reasoning: "(c) 9 × 4 = 36 pencils.", marks: 1, markCode: "M" },
              { reasoning: "(d) above, on, under.", marks: 1, markCode: "M" },
              { reasoning: "Working shown and units correct.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) pyramid/tetrahedron (b) 4 fold lines (c) 36 (d) above, on, under",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u1-gp-notes",
      title: "Geometry, position and data — revision notes",
      summary: "Shapes, symmetry, position words, tally charts.",
      sections: [
        { heading: "Shapes", body: "2D flat, 3D solid. Symmetry = matching halves on folding." },
        { heading: "Data", body: "Tally charts count; block graphs compare. Position words: left/right/above/below." },
      ],
    },
  ],
};
