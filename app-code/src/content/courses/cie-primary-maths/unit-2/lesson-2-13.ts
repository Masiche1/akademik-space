import type { Lesson } from "../../../types.ts";

export const lesson213: Lesson = {
  id: "cipm-u2-lesson-2-13",
  code: "2-13",
  title: "Stage 6 — Equations, Angles in Polygons and Averages",
  goal: "I CAN solve equations, find polygon angles and calculate averages.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 6: algebra, geometry and handling data",
  "Cambridge Primary Mathematics 0096 framework substrands: 6Gg, 6Ss, 6Ni"],
  stage: 6,
  vocabulary: [
    { term: "Variable", definition: "Letter standing for an unknown number." },
    { term: "Polygon angle sum", definition: "Total of interior angles in a shape." },
    { term: "Regular polygon", definition: "Shape with all sides and angles equal." },
    { term: "Mean", definition: "Sum of values ÷ count." },
    { term: "Median", definition: "Middle value in ordered data." },
  ],
  concepts: [
    {
      id: "cipm-u2-s13-equations-averages",
      title: "Equations, polygon angles and averages",
      skill: "Solve simple equations, use angle sums for polygons and find averages at Stage 6 level.",
      lesson: {
        sections: [
          {
            heading: "Equations",
            body: "An equation balances two sides. To solve, undo operations: 3x = 15 → x = 15 ÷ 3 = 5. For x − 4 = 10 → x = 14. Always check by substituting back: 3 × 5 = 15 ✓. Balance both sides equally — what you do to one side, do to the other.",
          },
          {
            heading: "Polygon angles and averages",
            body: "Angle sums: triangle 180°, quadrilateral 360°, pentagon 540° — each extra side adds 180°. For regular polygons, divide by the number of sides for each angle (square = 90°). Mean = sum ÷ count; median = middle value when data is ordered; mode = most frequent.",
          },
        ],
        keyFormulas: [
          { name: "Angle sums", statement: "triangle 180°, quad 360°, pentagon 540°" },
          { name: "Solving", statement: "undo operations both sides; check by substitution" },
          { name: "Averages", statement: "mean = sum ÷ n; median = middle" },
        ],
        workedExample: {
          problem: "A regular pentagon — find each interior angle.",
          solution: "Pentagon sum = 540°; regular ⇒ 540 ÷ 5 = 108°.",
        },
      },
      questions: [
        {
          id: "cipm-u2-eq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve: 4x = 20.",
          response: { type: "mcq", choices: [
            { id: "a", text: "x = 4" }, { id: "b", text: "x = 5" }, { id: "c", text: "x = 16" }, { id: "d", text: "x = 80" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Inverse operations", statement: "Divide both sides by 4." }],
            steps: [{ reasoning: "x = 20 ÷ 4 = 5.", marks: 1, markCode: "A" }],
            finalAnswer: "x = 5",
          },
        },
        {
          id: "cipm-u2-eq-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the sum of interior angles in a quadrilateral?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Angle sums", statement: "Quad = 360°." }],
            steps: [
              { reasoning: "Quadrilateral sum = 360°.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 360°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "360°",
          },
        },
        {
          id: "cipm-u2-eq-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the mean of 6, 10, 14, 18, 22.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mean", statement: "sum ÷ count." }],
            steps: [
              { reasoning: "Sum = 6+10+14+18+22 = 70.", marks: 1, markCode: "M" },
              { reasoning: "Count = 5; 70 ÷ 5.", marks: 1, markCode: "M" },
              { reasoning: "Mean = 14.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "14",
          },
        },
        {
          id: "cipm-u2-eq-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "A regular hexagon and a data set: angles question + averages. (a) Find each interior angle of a regular hexagon. (b) Data: 4, 8, 8, 12, 20 — find mean, median and mode. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Polygon angles + averages", statement: "Hexagon sum 720°; mean/median/mode." }],
            steps: [
              { reasoning: "(a) Hexagon sum = 180×4 = 720° (6 sides → (6−2)×180).", marks: 1, markCode: "M" },
              { reasoning: "Regular ⇒ 720 ÷ 6 = 120°.", marks: 1, markCode: "M" },
              { reasoning: "(b) Sum = 4+8+8+12+20 = 52; mean = 52 ÷ 5 = 10.4.", marks: 1, markCode: "M" },
              { reasoning: "Ordered data already: 4,8,8,12,20; median = 3rd = 8.", marks: 1, markCode: "M" },
              { reasoning: "Mode = 8 (appears twice).", marks: 1, markCode: "M" },
              { reasoning: "Check sum again: 4+8=12, +8=20, +12=32, +20=52. ✓", marks: 1, markCode: "M" },
              { reasoning: "Units and ordering verified.", marks: 1, markCode: "M" },
              { reasoning: "Answers: 120°; mean 10.4, median 8, mode 8.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 120°; (b) mean 10.4, median 8, mode 8",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u2-eq-notes",
      title: "Equations, polygons, averages — notes",
      summary: "Undo ops to solve; angle sum = (n−2)×180°; mean=sum÷n.",
      sections: [
        { heading: "Equations", body: "Same operation both sides; verify by substitution." },
        { heading: "Data", body: "Mean uses all values; median needs ordering; mode = most frequent." },
      ],
    },
  ],
};
