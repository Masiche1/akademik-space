import type { Lesson } from "../../../types.ts";

export const lesson29: Lesson = {
  id: "cipm-u2-lesson-2-9",
  code: "2-9",
  title: "Stage 5 — Angles, Area and Volume",
  goal: "I CAN calculate with angles, areas and volumes.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 5: geometry and measures",
  "Cambridge Primary Mathematics 0096 framework substrands: 5Gg, 5Nf"],
  stage: 5,
  vocabulary: [
    { term: "Angle sum", definition: "Total of angles inside a shape." },
    { term: "Area", definition: "Space inside a 2D shape in square units." },
    { term: "Volume", definition: "Space inside a 3D solid in cubic units." },
    { term: "Parallel lines", definition: "Lines that never meet." },
    { term: "Perpendicular", definition: "Lines meeting at a right angle (90°)." },
  ],
  concepts: [
    {
      id: "cipm-u2-s9-angles-measures",
      title: "Angles, areas and volumes",
      skill: "Use angle facts, find areas and volumes at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "Angle facts",
            body: "Angles on a straight line add to 180°; angles around a point add to 360°. In a triangle, angles add to 180°. Parallel lines create equal angles (corresponding and alternate). Perpendicular lines meet at 90° — buildings and corners are often perpendicular.",
          },
          {
            heading: "Area and volume",
            body: "Area of a rectangle = length × width; of a triangle = ½ × base × height; of a parallelogram = base × height. Volume of a cuboid = length × width × height (count cubes on grid). Perimeter still = distance around the outside.",
          },
        ],
        keyFormulas: [
          { name: "Angle sums", statement: "line 180°, point 360°, triangle 180°" },
          { name: "Area/Volume", statement: "rect area = l×w; triangle = ½bh; cuboid vol = l×w×h" },
        ],
        workedExample: {
          problem: "A triangle has angles 50° and 60°. Find the third angle.",
          solution: "180 − 50 − 60 = 70°.",
        },
      },
      questions: [
        {
          id: "cipm-u2-av-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Angles on a straight line add up to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "90°" }, { id: "b", text: "180°" }, { id: "c", text: "360°" }, { id: "d", text: "270°" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Straight line", statement: "Angles on a line = 180°." }],
            steps: [{ reasoning: "Straight line = 180°.", marks: 1, markCode: "A" }],
            finalAnswer: "180°",
          },
        },
        {
          id: "cipm-u2-av-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the area of a rectangle 9 cm by 4 cm.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Area", statement: "length × width." }],
            steps: [
              { reasoning: "9 × 4 = 36.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 36 cm².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "36 cm²",
          },
        },
        {
          id: "cipm-u2-av-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A triangle has angles 45° and 55°. Find the third angle.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Triangle sum", statement: "Angles in a triangle = 180°." }],
            steps: [
              { reasoning: "180 − 45 − 55.", marks: 1, markCode: "M" },
              { reasoning: "= 80°.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 80°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "80°",
          },
        },
        {
          id: "cipm-u2-av-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "A cuboid is 5 cm × 3 cm × 2 cm. Find its volume.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Volume", statement: "l × w × h." }],
            steps: [
              { reasoning: "5 × 3 × 2.", marks: 1, markCode: "M" },
              { reasoning: "5 × 3 = 15; 15 × 2 = 30.", marks: 1, markCode: "M" },
              { reasoning: "Units cm³.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 30 cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30 cm³",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u2-av-notes",
      title: "Angles, area, volume — revision notes",
      summary: "line 180°, point 360°, triangle 180°; area l×w; volume l×w×h.",
      sections: [
        { heading: "Angles", body: "Use angle sums to find missing angles; parallel lines give equal angles." },
        { heading: "Measures", body: "Area in cm², volume in cm³ — don't confuse the units." },
      ],
    },
  ],
};
