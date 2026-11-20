import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "cimg-u4-lesson-4-1",
  code: "4-1",
  title: "Angles and Polygons",
  goal: "I CAN calculate angles using polygon rules and parallel lines.",
  standards: ["Cambridge IGCSE Mathematics 0580 Core: geometry"],
  vocabulary: [
    { term: "Angle", definition: "The amount of turn between two lines." },
    { term: "Interior angle", definition: "Angle inside a polygon." },
    { term: "Exterior angle", definition: "Angle outside a polygon at a vertex." },
    { term: "Parallel lines", definition: "Lines that never meet." },
    { term: "Corresponding angles", definition: "Angles in the same position at each intersection." },
  ],
  concepts: [
    {
      id: "cimg-u4-s1-angles",
      title: "Angles and parallel lines",
      skill: "Calculate angles using parallel line rules at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Parallel lines",
            body: "Corresponding angles are equal. Alternate angles are equal. Co-interior angles sum to 180°. Vertically opposite angles are equal.",
          },
          {
            heading: "Triangles",
            body: "Angles in a triangle sum to 180°. Angles on a straight line sum to 180°. Angles around a point sum to 360°.",
          },
        ],
        keyFormulas: [
          { name: "Triangle sum", statement: "$180°$" },
          { name: "Straight line", statement: "$180°$" },
          { name: "Around a point", statement: "$360°$" },
        ],
        workedExample: {
          problem: "Two angles in a triangle are 50° and 70°. Find the third.",
          solution: "$180° - 50° - 70° = 60°$.",
        },
      },
      questions: [
        {
          id: "cimg-u4-s1-an-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two angles in a triangle are 40° and 60°. What is the third?",
          response: { type: "mcq", choices: [
            { id: "a", text: "80°" }, { id: "b", text: "90°" }, { id: "c", text: "70°" }, { id: "d", text: "100°" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "law", name: "Triangle sum", statement: "$180°$." }],
            steps: [{ reasoning: "$180 - 40 - 60 = 80°$.", marks: 1, markCode: "A" }],
            finalAnswer: "80°",
          },
        },
        {
          id: "cimg-u4-s1-an-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Angles on a straight line are 110° and x. Find x.",
          response: { type: "numeric", parts: [{ label: "a", answer: 70 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Straight line", statement: "$180°$." }],
            steps: [
              { reasoning: "$x = 180 - 110 = 70°$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 70°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "70°",
          },
        },
        {
          id: "cimg-u4-s1-an-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two parallel lines are cut by a transversal. One angle is 65°. Find the corresponding angle on the other line.",
          response: { type: "numeric", parts: [{ label: "a", answer: 65 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Corresponding angles", statement: "Equal." }],
            steps: [
              { reasoning: "Corresponding angles are equal.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 65°.", marks: 1, markCode: "A" },
              { reasoning: "Reason: parallel lines.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "65°",
          },
        },
        {
          id: "cimg-u4-s1-an-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "°.",
          response: { type: "numeric", parts: [{ label: "a", answer: 40 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Algebraic angles", statement: "Sum to 180°." }],
            steps: [
              { reasoning: "$x + 2x + 60 = 180$.", marks: 1, markCode: "M" },
              { reasoning: "$3x = 120$ → $x = 40$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x = 40°$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "40°",
          },
        },
      ],
    },
    {
      id: "cimg-u4-s1-polygons",
      title: "Polygons",
      skill: "Calculate interior and exterior angles of polygons at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Interior angles",
            body: "Sum of interior angles of an n-sided polygon $= (n - 2) \\times 180°$. For a regular polygon, each interior angle $= \\frac{(n-2) \\times 180°}{n}$.",
          },
          {
            heading: "Exterior angles",
            body: "Exterior angles of any polygon sum to 360°. For regular polygons, each exterior angle $= \\frac{360°}{n}$. Interior + exterior = 180°.",
          },
        ],
        keyFormulas: [
          { name: "Interior sum", statement: "$(n - 2) \\times 180°$" },
          { name: "Exterior sum", statement: "$360°$" },
        ],
        workedExample: {
          problem: "Find each interior angle of a regular hexagon.",
          solution: "$\\frac{(6-2) \\times 180°}{6} = \\frac{720°}{6} = 120°$.",
        },
      },
      questions: [
        {
          id: "cimg-u4-s1-po-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the sum of interior angles of a pentagon?",
          response: { type: "mcq", choices: [
            { id: "a", text: "540°" }, { id: "b", text: "360°" }, { id: "c", text: "720°" }, { id: "d", text: "900°" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "Interior sum", statement: "$(n-2) \\times 180°$." }],
            steps: [{ reasoning: "$(5-2) \\times 180 = 540°$.", marks: 1, markCode: "A" }],
            finalAnswer: "540°",
          },
        },
        {
          id: "cimg-u4-s1-po-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Each exterior angle of a regular polygon is 40°. How many sides?",
          response: { type: "numeric", parts: [{ label: "a", answer: 9 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Exterior angles", statement: "$360° / n$." }],
            steps: [
              { reasoning: "$n = 360 \\div 40 = 9$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 9 sides (nonagon).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9",
          },
        },
        {
          id: "cimg-u4-s1-po-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find each interior angle of a regular octagon.",
          response: { type: "numeric", parts: [{ label: "a", answer: 135 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Interior angle", statement: "Use exterior first." }],
            steps: [
              { reasoning: "Exterior $= 360 \\div 8 = 45°$.", marks: 1, markCode: "M" },
              { reasoning: "Interior $= 180 - 45 = 135°$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 135°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "135°",
          },
        },
        {
          id: "cimg-u4-s1-po-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "The interior angles of a pentagon are $x$, $x + 20$, $x + 40$, $x + 60$ and $x + 80$ degrees. Find $x$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 80 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Pentagon sum", statement: "540° total." }],
            steps: [
              { reasoning: "Sum of pentagon angles $= 540°$.", marks: 1, markCode: "M" },
              { reasoning: "$x + (x+20) + (x+40) + (x+60) + (x+80) = 540$ → $5x + 200 = 540$ → $5x = 340$.", marks: 1, markCode: "M" },
              { reasoning: "$x = 68$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x = 68°$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "68°",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cimg-u4-s1-geo-notes",
      title: "Angles and polygons — revision notes",
      summary: "Angle rules, interior/exterior angles, polygons.",
      sections: [
        { heading: "Angles", body: "Triangle 180°, straight line 180°, point 360°. Corresponding/alternate equal; co-interior sum 180°." },
        { heading: "Polygons", body: "Interior sum $(n-2) \\times 180°$. Exterior sum 360°. Regular polygon: divide by n." },
      ],
    },
  ],
};
