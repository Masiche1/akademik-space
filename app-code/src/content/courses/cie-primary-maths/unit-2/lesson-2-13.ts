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
            { id: "a", text: "x = 5" },
            { id: "b", text: "x = 16" },
            { id: "c", text: "x = 4" },
            { id: "d", text: "x = 80" },
          ], correctChoiceId: "a" },
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
        {
          id: "cipm-u2-eq-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve: 6x = 42.",
          response: { type: "mcq", choices: [
            { id: "a", text: "x = 7" },
            { id: "b", text: "x = 8" },
            { id: "c", text: "x = 36" },
            { id: "d", text: "x = 6" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Inverse operations", statement: "Divide both sides by 6." }],
            steps: [{ reasoning: "x = 42 ÷ 6 = 7.", marks: 1, markCode: "A" }],
            finalAnswer: "x = 7",
          },
        },
        {
          id: "cipm-u2-eq-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the sum of interior angles in a pentagon?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Angle sums", statement: "Pentagon = 540°." }],
            steps: [
              { reasoning: "Pentagon sum = 540°.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 540°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "540°",
          },
        },
        {
          id: "cipm-u2-eq-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A regular hexagon has 6 equal angles. The angle sum is 720°, so each angle is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "120°" },
            { id: "b", text: "100°" },
            { id: "c", text: "720°" },
            { id: "d", text: "108°" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Regular polygon", statement: "Divide sum by number of sides." }],
            steps: [{ reasoning: "$720 \\div 6 = 120°$.", marks: 1, markCode: "A" }],
            finalAnswer: "120°",
          },
        },
        {
          id: "cipm-u2-eq-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve: x + 8 = 19.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Inverse operations", statement: "Subtract 8 from both sides." }],
            steps: [
              { reasoning: "x = 19 − 8 = 11.", marks: 1, markCode: "M" },
              { reasoning: "Check: $11 + 8 = 19$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "x = 11",
          },
        },
        {
          id: "cipm-u2-eq-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The median of a data set is found by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "finding the middle value in ordered data" },
            { id: "b", text: "finding the most common value" },
            { id: "c", text: "subtracting smallest from largest" },
            { id: "d", text: "adding all values and dividing" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Median", statement: "Middle value of ordered data." }],
            steps: [{ reasoning: "Median = middle value after ordering.", marks: 1, markCode: "A" }],
            finalAnswer: "finding the middle value in ordered data",
          },
        },
        {
          id: "cipm-u2-eq-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the mean of 4, 6, 8, 10, 12.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Mean", statement: "sum ÷ count." }],
            steps: [
              { reasoning: "Sum $= 40$; count $= 5$.", marks: 1, markCode: "M" },
              { reasoning: "$40 \\div 5 = 8$.", marks: 1, markCode: "M" },
              { reasoning: "Mean = 8.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8",
          },
        },
        {
          id: "cipm-u2-eq-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A quadrilateral has three angles of 80°, 95° and 110°. What is the fourth angle?",
          response: { type: "mcq", choices: [
            { id: "a", text: "75°" },
            { id: "b", text: "65°" },
            { id: "c", text: "85°" },
            { id: "d", text: "285°" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Angle sums", statement: "Quadrilateral = 360°." }],
            steps: [{ reasoning: "$360 - (80 + 95 + 110) = 360 - 285 = 75°$.", marks: 1, markCode: "A" }],
            finalAnswer: "75°",
          },
        },
        {
          id: "cipm-u2-eq-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve: 7x = 56.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Inverse operations", statement: "Divide both sides by 7." }],
            steps: [
              { reasoning: "x = 56 ÷ 7 = 8.", marks: 1, markCode: "M" },
              { reasoning: "Check: $7 \\times 8 = 56$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "x = 8",
          },
        },
        {
          id: "cipm-u2-eq-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "(a) Find each interior angle of a regular octagon (angle sum 1080°). (b) Data: 3, 5, 5, 9 — find the median and mode. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Polygon angles and averages", statement: "Divide by sides; order data for median." }],
            steps: [
              { reasoning: "(a) $1080 \\div 8 = 135°$.", marks: 1, markCode: "M" },
              { reasoning: "(b) Ordered: 3,5,5,9; median $= (5+5) \\div 2 = 5$.", marks: 1, markCode: "M" },
              { reasoning: "Mode = 5 (appears twice).", marks: 1, markCode: "M" },
              { reasoning: "Answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 135° (b) median 5, mode 5",
          },
        },
        {
          id: "cipm-u2-eq-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To solve an equation you should…",
          response: { type: "mcq", choices: [
            { id: "a", text: "only change one side" },
            { id: "b", text: "guess the answer" },
            { id: "c", text: "always add 10" },
            { id: "d", text: "do the same operation to both sides" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Solving equations", statement: "Balance both sides." }],
            steps: [{ reasoning: "Whatever you do to one side, do to the other to keep balance.", marks: 1, markCode: "A" }],
            finalAnswer: "do the same operation to both sides",
          },
        },
        {
          id: "cipm-u2-eq-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve: x − 12 = 8.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Inverse operations", statement: "Add 12 to both sides." }],
            steps: [
              { reasoning: "x = 8 + 12 = 20.", marks: 1, markCode: "M" },
              { reasoning: "Check: $20 - 12 = 8$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "x = 20",
          },
        },
        {
          id: "cipm-u2-eq-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Solve 4x = 36. (b) A triangle has angles 50° and 70° — find the third. (c) Find the mean, median and mode of 2, 4, 4, 8. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Equations, angles, averages", statement: "Inverse ops; triangle sum; mean/median/mode." }],
            steps: [
              { reasoning: "(a) x = 36 ÷ 4 = 9.", marks: 1, markCode: "M" },
              { reasoning: "(b) $180 - 50 - 70 = 60°$.", marks: 1, markCode: "M" },
              { reasoning: "(c) Sum $= 18$; mean $= 18 \\div 4 = 4.5$; ordered → median $= (4+4)/2 = 4$; mode = 4.", marks: 1, markCode: "M" },
              { reasoning: "Working shown for each part.", marks: 1, markCode: "M" },
              { reasoning: "Answers correct.", marks: 1, markCode: "M" },
              { reasoning: "Units correct (° for angles).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) x = 9 (b) 60° (c) mean 4.5, median 4, mode 4",
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
