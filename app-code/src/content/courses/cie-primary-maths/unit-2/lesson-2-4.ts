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
            { id: "a", text: "(5, 3)" },
            { id: "b", text: "(3, -5)" },
            { id: "c", text: "(8, 8)" },
            { id: "d", text: "(3, 5)" },
          ], correctChoiceId: "d" },
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
        {
          id: "cipm-u2-pd-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the coordinates of a point 6 across and 2 up from the origin?",
          response: { type: "mcq", choices: [
            { id: "a", text: "(2, 6)" },
            { id: "b", text: "(6, 2)" },
            { id: "c", text: "(8, 8)" },
            { id: "d", text: "(6, -2)" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "convention", name: "Coordinates", statement: "(x, y): across then up." }],
            steps: [{ reasoning: "x = 6 (across), y = 2 (up) ⇒ (6, 2).", marks: 1, markCode: "A" }],
            finalAnswer: "(6, 2)",
          },
        },
        {
          id: "cipm-u2-pd-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A shape is reflected in a mirror line. What happens to the shape?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Reflection", statement: "Flip in a mirror line." }],
            steps: [
              { reasoning: "The shape flips to the other side of the mirror line.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "It flips to the other side of the mirror line",
          },
        },
        {
          id: "cipm-u2-pd-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In coordinates $(x, y)$, the $x$ value tells you…",
          response: { type: "mcq", choices: [
            { id: "a", text: "the direction of travel" },
            { id: "b", text: "the area" },
            { id: "c", text: "how far up" },
            { id: "d", text: "how far across" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "convention", name: "Coordinates", statement: "x first = across." }],
            steps: [{ reasoning: "x gives the across position.", marks: 1, markCode: "A" }],
            finalAnswer: "how far across",
          },
        },
        {
          id: "cipm-u2-pd-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the mean of 6, 10, 14.",
          response: { type: "numeric", parts: [{ label: "a", answer: 10 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Mean", statement: "Total ÷ count." }],
            steps: [
              { reasoning: "Total $= 30$; $30 \\div 3 = 10$.", marks: 1, markCode: "M" },
              { reasoning: "Mean is 10.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "cipm-u2-pd-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A shape is turned a quarter turn clockwise about a point. This is a…",
          response: { type: "mcq", choices: [
            { id: "a", text: "rotation" },
            { id: "b", text: "reflection" },
            { id: "c", text: "enlargement" },
            { id: "d", text: "translation" },
          ], aorrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Rotation", statement: "Turn about a point." }],
            steps: [{ reasoning: "Turning is a rotation.", marks: 1, markCode: "A" }],
            finalAnswer: "rotation",
          },
        },
        {
          id: "cipm-u2-pd-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A point is at $(2, 7)$. It is translated by $(3, -2)$. What is the new $x$-coordinate?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Translation", statement: "Add the vector to the coordinates." }],
            steps: [
              { reasoning: "New $x = 2 + 3 = 5$ (new $y = 7 - 2 = 5$).", marks: 1, markCode: "M" },
              { reasoning: "New coordinates are $(5, 5)$, so the $x$-coordinate is 5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cipm-u2-pd-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A pie chart is best used to show…",
          response: { type: "mcq", choices: [
            { id: "a", text: "the order of events" },
            { id: "b", text: "parts of a whole" },
            { id: "c", text: "changes over time" },
            { id: "d", text: "exact values only" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Pie chart", statement: "Slices show shares of a whole." }],
            steps: [{ reasoning: "A pie chart shows parts of a whole.", marks: 1, markCode: "A" }],
            finalAnswer: "parts of a whole",
          },
        },
        {
          id: "cipm-u2-pd-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which transformation keeps the shape exactly the same size and shape?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Enlargement" },
            { id: "b", text: "Reflection only" },
            { id: "c", text: "Translation, reflection and rotation" },
            { id: "d", text: "Stretching" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Isometries", statement: "Translations, reflections, rotations preserve size and shape." }],
            steps: [{ reasoning: "Translation, reflection and rotation are congruent transformations.", marks: 1, markCode: "A" }],
            finalAnswer: "Translation, reflection and rotation",
          },
        },
        {
          id: "cipm-u2-pd-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "(a) A bar chart shows ice creams sold: Mon 30, Tue 45, Wed 25. What is the total? (b) Find the mean per day. (c) On which day were the fewest sold? Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Reading data and mean", statement: "Add values; total ÷ count." }],
            steps: [
              { reasoning: "(a) $30 + 45 + 25 = 100$.", marks: 1, markCode: "M" },
              { reasoning: "(b) $100 \\div 3 = 33.3$ (accept 33.3 or $33\\frac{1}{3}$).", marks: 1, markCode: "M" },
              { reasoning: "(c) Wednesday (25).", marks: 1, markCode: "M" },
              { reasoning: "Answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 100 (b) $33.3$ (c) Wednesday",
          },
        },
        {
          id: "cipm-u2-pd-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A translation moves a shape by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "enlarging it" },
            { id: "b", text: "turning it" },
            { id: "c", text: "sliding it" },
            { id: "d", text: "flipping it" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Translation", statement: "Slide without turning or flipping." }],
            steps: [{ reasoning: "A translation slides the shape.", marks: 1, markCode: "A" }],
            finalAnswer: "sliding it",
          },
        },
        {
          id: "cipm-u2-pd-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the mean of 4, 8, 12, 16, 20.",
          response: { type: "numeric", parts: [{ label: "a", answer: 12 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Mean", statement: "Total ÷ count." }],
            steps: [
              { reasoning: "Total $= 60$; $60 \\div 5 = 12$.", marks: 1, markCode: "M" },
              { reasoning: "Mean is 12.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12",
          },
        },
        {
          id: "cipm-u2-pd-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Point A is at $(1, 2)$ and point B is at $(1, 6)$. How far apart are they vertically? (b) Describe the transformation that maps A onto B. (c) A bar chart scale starts at 10, not 0 — why is this important when reading it? (d) Find the mean of 7, 11, 13. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Coordinates, transformations and data", statement: "Compare coordinates; describe movement; read scales." }],
            steps: [
              { reasoning: "(a) $6 - 2 = 4$ units apart.", marks: 1, markCode: "M" },
              { reasoning: "(b) A translation 4 units up, $(0, 4)$.", marks: 1, markCode: "M" },
              { reasoning: "(c) Bars look longer than they are; differences between bars are still correct but absolute lengths mislead.", marks: 1, markCode: "M" },
              { reasoning: "(d) Total $= 31$; $31 \\div 3 = 10.3$ (accept $10\\frac{1}{3}$).", marks: 1, markCode: "M" },
              { reasoning: "Working shown for each part.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 4 (b) translation $(0,4)$ (c) bars exaggerated (d) $10.3$",
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
