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
            { id: "a", text: "180°" },
            { id: "b", text: "360°" },
            { id: "c", text: "90°" },
            { id: "d", text: "270°" },
          ], correctChoiceId: "a" },
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
        {
          id: "cipm-u2-av-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Angles around a point add up to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "180°" },
            { id: "b", text: "90°" },
            { id: "c", text: "270°" },
            { id: "d", text: "360°" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Angles around a point", statement: "Sum = 360°." }],
            steps: [{ reasoning: "Angles around a point total 360°.", marks: 1, markCode: "A" }],
            finalAnswer: "360°",
          },
        },
        {
          id: "cipm-u2-av-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the area of a rectangle 12 cm by 7 cm.",
          response: { type: "numeric", parts: [{ label: "a", answer: 84, unit: "cm²" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Area", statement: "length × width." }],
            steps: [
              { reasoning: "$12 \\times 7 = 84$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 84 cm².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "84 cm²",
          },
        },
        {
          id: "cipm-u2-av-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Perpendicular lines meet at an angle of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "90°" },
            { id: "b", text: "45°" },
            { id: "c", text: "360°" },
            { id: "d", text: "180°" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Perpendicular", statement: "Meet at 90°." }],
            steps: [{ reasoning: "Perpendicular lines meet at a right angle, 90°.", marks: 1, markCode: "A" }],
            finalAnswer: "90°",
          },
        },
        {
          id: "cipm-u2-av-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A triangle has angles 65° and 75°. Find the third angle.",
          response: { type: "numeric", parts: [{ label: "a", answer: 40, unit: "°" }] },
          markscheme: {
            principles: [{ kind: "theorem", name: "Triangle sum", statement: "Angles in a triangle = 180°." }],
            steps: [
              { reasoning: "$180 - 65 - 75 = 40$.", marks: 1, markCode: "M" },
              { reasoning: "Third angle is 40°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "40°",
          },
        },
        {
          id: "cipm-u2-av-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Parallel lines…",
          response: { type: "mcq", choices: [
            { id: "a", text: "form a triangle" },
            { id: "b", text: "always cross" },
            { id: "c", text: "never meet" },
            { id: "d", text: "meet at a point" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Parallel lines", statement: "Never meet." }],
            steps: [{ reasoning: "Parallel lines stay the same distance apart and never meet.", marks: 1, markCode: "A" }],
            finalAnswer: "never meet",
          },
        },
        {
          id: "cipm-u2-av-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A cuboid is 4 cm × 5 cm × 3 cm. Find its volume.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Volume", statement: "l × w × h." }],
            steps: [
              { reasoning: "$4 \\times 5 \\times 3$.", marks: 1, markCode: "M" },
              { reasoning: "$4 \\times 5 = 20$; $20 \\times 3 = 60$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 60 cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60 cm³",
          },
        },
        {
          id: "cipm-u2-av-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Angles on a straight line: one angle is 110°. What is the other angle?",
          response: { type: "mcq", choices: [
            { id: "a", text: "90°" },
            { id: "b", text: "250°" },
            { id: "c", text: "70°" },
            { id: "d", text: "110°" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Straight line", statement: "Angles sum to 180°." }],
            steps: [{ reasoning: "$180 - 110 = 70°$.", marks: 1, markCode: "A" }],
            finalAnswer: "70°",
          },
        },
        {
          id: "cipm-u2-av-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Angles around a point: three angles are 100°, 120° and 90°. Find the fourth angle.",
          response: { type: "numeric", parts: [{ label: "a", answer: 50, unit: "°" }] },
          markscheme: {
            principles: [{ kind: "theorem", name: "Angles around a point", statement: "Sum = 360°." }],
            steps: [
              { reasoning: "$360 - (100 + 120 + 90) = 360 - 310 = 50$.", marks: 1, markCode: "M" },
              { reasoning: "Fourth angle is 50°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50°",
          },
        },
        {
          id: "cipm-u2-av-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "(a) A rectangle is 11 cm by 6 cm — find its area. (b) A cuboid is 3 cm × 3 cm × 3 cm — find its volume. Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Area and volume", statement: "$A = l \\times w$; $V = l \\times w \\times h$." }],
            steps: [
              { reasoning: "(a) $11 \\times 6 = 66\\ \\text{cm}^2$.", marks: 1, markCode: "M" },
              { reasoning: "(b) $3 \\times 3 \\times 3 = 27\\ \\text{cm}^3$.", marks: 1, markCode: "M" },
              { reasoning: "Units: cm² for area, cm³ for volume.", marks: 1, markCode: "M" },
              { reasoning: "Answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 66 cm² (b) 27 cm³",
          },
        },
        {
          id: "cipm-u2-av-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The angles in a triangle always add up to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "90°" },
            { id: "b", text: "270°" },
            { id: "c", text: "360°" },
            { id: "d", text: "180°" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "theorem", name: "Triangle sum", statement: "Angles in a triangle = 180°." }],
            steps: [{ reasoning: "Triangle angles total 180°.", marks: 1, markCode: "A" }],
            finalAnswer: "180°",
          },
        },
        {
          id: "cipm-u2-av-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the area of a triangle with base 10 cm and height 6 cm.",
          response: { type: "numeric", parts: [{ label: "a", answer: 30, unit: "cm²" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Triangle area", statement: "$A = \\frac{1}{2} \\times \\text{base} \\times \\text{height}$." }],
            steps: [
              { reasoning: "$\\frac{1}{2} \\times 10 \\times 6 = 30$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 30 cm².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30 cm²",
          },
        },
        {
          id: "cipm-u2-av-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) A triangle has angles 30° and 60° — find the third angle. (b) A cuboid is 6 cm × 2 cm × 4 cm — find its volume. (c) Two angles on a straight line are equal — what is each? Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Angles and volume", statement: "Triangle sum 180°; straight line 180°; $V = l \\times w \\times h$." }],
            steps: [
              { reasoning: "(a) $180 - 30 - 60 = 90°$.", marks: 1, markCode: "M" },
              { reasoning: "(b) $6 \\times 2 \\times 4 = 48\\ \\text{cm}^3$.", marks: 1, markCode: "M" },
              { reasoning: "(c) $180 \\div 2 = 90°$ each.", marks: 1, markCode: "M" },
              { reasoning: "Working shown for each part.", marks: 1, markCode: "M" },
              { reasoning: "Units correct.", marks: 1, markCode: "M" },
              { reasoning: "All parts correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 90° (b) 48 cm³ (c) 90° each",
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
