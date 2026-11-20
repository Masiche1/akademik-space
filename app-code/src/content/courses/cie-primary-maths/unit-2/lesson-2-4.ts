import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "cipm-u2-lesson-2-4",
  code: "2-4",
  title: "Stage 6 — Position, Direction and Handling Data",
  goal: "I CAN use coordinates, describe position and interpret data displays.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 6: position, direction and data",
  "Cambridge Primary Mathematics 0096 framework substrands: 6Gp, 6Ss"],
  stage: 6,
  vocabulary: [
    { term: "Coordinate", definition: "Pair (x, y) locating a point on a grid." },
    { term: "Translation", definition: "Sliding a shape without turning or flipping it." },
    { term: "Reflection", definition: "Flipping a shape in a mirror line." },
    { term: "Mean", definition: "Average: total ÷ count." },
    { term: "Bar chart", definition: "Graph using bars to compare quantities." },
  ],
  concepts: [
    {
      id: "cipm-u2-s4-position",
      title: "Position, direction and data at Stage 6",
      skill: "Use coordinates and transformations; interpret data displays.",
      lesson: {
        sections: [
          {
            heading: "Coordinates and transformations",
            body: "A point is written (x, y): across first, then up. Translations slide shapes by a vector like (3, −2); reflections flip in a mirror line; rotations turn about a point. Describe the movement precisely using direction and distance.",
          },
          {
            heading: "Handling data",
            body: "Bar charts compare categories; pictograms use symbols; pie charts show parts of a whole. Calculate the mean as total ÷ number of values. Read scales carefully — they may not start at zero.",
          },
        ],
        keyFormulas: [
          { name: "Coordinate", statement: "(x, y): across then up" },
          { name: "Mean", statement: "$\\frac{\\text{total}}{\\text{count}}$" },
        ],
        workedExample: {
          problem: "Find the mean of 12, 18, 15, 21.",
          solution: "Total $= 66$; mean $= 66 \\div 4 = 16.5$.",
        },
      },
      questions: [
        {
          id: "cipm-u2-pd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the coordinates of a point 3 across and 5 up from the origin?",
          response: { type: "mcq", choices: [
            { id: "a", text: "(3, 5)" }, { id: "b", text: "(5, 3)" }, { id: "c", text: "(3, -5)" }, { id: "d", text: "(8, 8)" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "convention", name: "Coordinates", statement: "(x, y): across then up." }],
            steps: [{ reasoning: "x = 3 (across), y = 5 (up) ⇒ (3, 5).", marks: 1, markCode: "A" }],
            finalAnswer: "(3, 5)",
          },
        },
        {
          id: "cipm-u2-pd-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A shape is slid 4 squares right and 1 square down. Describe this transformation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Translation", statement: "Slide without turning." }],
            steps: [
              { reasoning: "A translation of (4, −1).", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Translation (4, −1)",
          },
        },
        {
          id: "cipm-u2-pd-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the mean of 8, 12, 10, 14, 16.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Mean", statement: "Total ÷ count." }],
            steps: [
              { reasoning: "Total $= 8+12+10+14+16 = 60$.", marks: 1, markCode: "M" },
              { reasoning: "Mean $= 60 \\div 5 = 12$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 12.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12",
          },
        },
        {
          id: "cipm-u2-pd-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "A bar chart shows Monday 20, Tuesday 35, Wednesday 25 sales. On which day were sales highest, and how many more than Monday?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Reading bar charts", statement: "Compare bar heights; subtract." }],
            steps: [
              { reasoning: "Tuesday's bar is highest (35).", marks: 1, markCode: "M" },
              { reasoning: "$35 - 20 = 15$.", marks: 1, markCode: "M" },
              { reasoning: "Correct comparison.", marks: 1, markCode: "M" },
              { reasoning: "Answer: Tuesday, 15 more.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tuesday, by 15",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u2-pd-notes",
      title: "Position, direction and data — revision notes",
      summary: "Coordinates (x,y); translations/reflections; mean; bar charts.",
      sections: [
        { heading: "Position", body: "(x, y) = across, up. Translation slides; reflection flips; rotation turns." },
        { heading: "Data", body: "Mean = total ÷ count. Bar charts compare; check the scale starts at zero." },
      ],
    },
  ],
};
