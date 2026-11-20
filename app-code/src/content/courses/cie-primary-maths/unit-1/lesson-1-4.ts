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
            { id: "a", text: "Cube" }, { id: "b", text: "Triangle" }, { id: "c", text: "Circle" }, { id: "d", text: "Rectangle" },
          ], correctChoiceId: "a" },
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
