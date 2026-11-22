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
            { id: "a", text: "100°" },
            { id: "b", text: "80°" },
            { id: "c", text: "90°" },
            { id: "d", text: "70°" },
          ], correctChoiceId: "b" },
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
        {
          id: "cimg-u4-s1-an-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two angles around a point are 95° and 120°. What is the third angle?",
          response: { type: "mcq", choices: [
            { id: "a", text: "155°" },
            { id: "b", text: "125°" },
            { id: "c", text: "215°" },
            { id: "d", text: "145°" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "law", name: "Angles at a point", statement: "$360°$." }],
            steps: [{ reasoning: "$360 - 95 - 120 = 145°$.", marks: 1, markCode: "A" }],
            finalAnswer: "145°",
          },
        },
        {
          id: "cimg-u4-s1-an-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Angles on a straight line are 128° and x. Find x.",
          response: { type: "numeric", parts: [{ label: "a", answer: 52 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Straight line", statement: "$180°$." }],
            steps: [
              { reasoning: "$x = 180 - 128 = 52°$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 52°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "52°",
          },
        },
        {
          id: "cimg-u4-s1-an-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two parallel lines are cut by a transversal. An angle of 74° is marked. Find the alternate angle.",
          response: { type: "numeric", parts: [{ label: "a", answer: 74 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Alternate angles", statement: "Equal." }],
            steps: [
              { reasoning: "Alternate angles are equal.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 74°.", marks: 1, markCode: "M" },
              { reasoning: "Reason: parallel lines.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "74°",
          },
        },
        {
          id: "cimg-u4-s1-an-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Parallel lines are cut by a transversal. One co-interior angle is 118°. Find the other co-interior angle.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Co-interior angles", statement: "Sum to $180°$." }],
            steps: [
              { reasoning: "Co-interior angles add to 180°.", marks: 1, markCode: "M" },
              { reasoning: "$180 - 118 = 62°$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 62°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "62°",
          },
        },
        {
          id: "cimg-u4-s1-an-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "An angle is 63°. What is the size of the vertically opposite angle?",
          response: { type: "mcq", choices: [
            { id: "a", text: "126°" },
            { id: "b", text: "117°" },
            { id: "c", text: "27°" },
            { id: "d", text: "63°" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "law", name: "Vertically opposite", statement: "Equal." }],
            steps: [{ reasoning: "Vertically opposite angles are equal: 63°.", marks: 1, markCode: "A" }],
            finalAnswer: "63°",
          },
        },
        {
          id: "cimg-u4-s1-an-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "The three angles of a triangle are x°, 2x° and 3x°. Find the largest angle.",
          response: { type: "numeric", parts: [{ label: "a", answer: 90 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Triangle sum", statement: "$180°$." }],
            steps: [
              { reasoning: "$x + 2x + 3x = 180$ → $6x = 180$ → $x = 30$.", marks: 1, markCode: "M" },
              { reasoning: "Largest angle $= 3x = 90°$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 90°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "90°",
          },
        },
        {
          id: "cimg-u4-s1-an-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two angles on a straight line are $(3x + 20)°$ and $(2x + 30)°$. Find x.",
          response: { type: "numeric", parts: [{ label: "a", answer: 26 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Straight line", statement: "$180°$." }],
            steps: [
              { reasoning: "$3x + 20 + 2x + 30 = 180$ → $5x + 50 = 180$ → $5x = 130$.", marks: 1, markCode: "M" },
              { reasoning: "$x = 26$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x = 26$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "26",
          },
        },
        {
          id: "cimg-u4-s1-an-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Three angles share a point. Two of them are 70° and 90°. Describe how to find the third angle and give its value.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Angles at a point", statement: "$360°$." }],
            steps: [
              { reasoning: "Angles at a point sum to 360°.", marks: 1, markCode: "M" },
              { reasoning: "$360 - 70 - 90 = 200°$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "200°",
          },
        },
        {
          id: "cimg-u4-s1-an-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Three angles around a point are 80°, 100° and x°. What is x?",
          response: { type: "mcq", choices: [
            { id: "a", text: "200°" },
            { id: "b", text: "160°" },
            { id: "c", text: "90°" },
            { id: "d", text: "180°" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "law", name: "Angles at a point", statement: "$360°$." }],
            steps: [{ reasoning: "$x = 360 - 80 - 100 = 180°$.", marks: 1, markCode: "A" }],
            finalAnswer: "180°",
          },
        },
        {
          id: "cimg-u4-s1-an-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In a triangle, angles A and B are equal and angle C is 50°. What is angle A?",
          response: { type: "mcq", choices: [
            { id: "a", text: "65°" },
            { id: "b", text: "50°" },
            { id: "c", text: "55°" },
            { id: "d", text: "130°" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "law", name: "Triangle sum", statement: "$180°$." }],
            steps: [{ reasoning: "$A + A + 50 = 180$ → $2A = 130$ → $A = 65°$.", marks: 1, markCode: "A" }],
            finalAnswer: "65°",
          },
        },
        {
          id: "cimg-u4-s1-an-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two parallel lines are cut by a transversal. The co-interior angles are $3x°$ and $(x + 60)°$. Find x.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Co-interior angles", statement: "Sum to $180°$." }],
            steps: [
              { reasoning: "$3x + (x + 60) = 180$ → $4x = 120$.", marks: 1, markCode: "M" },
              { reasoning: "$x = 30$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x = 30$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30",
          },
        },
        {
          id: "cimg-u4-s1-an-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two lines intersect. One angle is 110°. What is the angle vertically opposite to it?",
          response: { type: "mcq", choices: [
            { id: "a", text: "70°" },
            { id: "b", text: "90°" },
            { id: "c", text: "110°" },
            { id: "d", text: "220°" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "law", name: "Vertically opposite", statement: "Equal." }],
            steps: [{ reasoning: "Vertically opposite angles are equal: 110°.", marks: 1, markCode: "A" }],
            finalAnswer: "110°",
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
            { id: "a", text: "360°" },
            { id: "b", text: "540°" },
            { id: "c", text: "720°" },
            { id: "d", text: "900°" },
          ], correctChoiceId: "b" },
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
        {
          id: "cimg-u4-s1-po-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the sum of the interior angles of a hexagon?",
          response: { type: "mcq", choices: [
            { id: "a", text: "720°" },
            { id: "b", text: "360°" },
            { id: "c", text: "900°" },
            { id: "d", text: "540°" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "Interior sum", statement: "$(n-2) \\times 180°$." }],
            steps: [{ reasoning: "$(6-2) \\times 180 = 720°$.", marks: 1, markCode: "A" }],
            finalAnswer: "720°",
          },
        },
        {
          id: "cimg-u4-s1-po-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Each exterior angle of a regular pentagon is…",
          response: { type: "numeric", parts: [{ label: "a", answer: 72 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Exterior angles", statement: "$360° / n$." }],
            steps: [
              { reasoning: "$360 \\div 5 = 72°$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 72°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "72°",
          },
        },
        {
          id: "cimg-u4-s1-po-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find each interior angle of a regular pentagon.",
          response: { type: "numeric", parts: [{ label: "a", answer: 108 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Interior angle", statement: "Exterior first." }],
            steps: [
              { reasoning: "Exterior $= 360 \\div 5 = 72°$.", marks: 1, markCode: "M" },
              { reasoning: "Interior $= 180 - 72 = 108°$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 108°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "108°",
          },
        },
        {
          id: "cimg-u4-s1-po-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "A regular polygon has each exterior angle equal to 30°. Find the number of sides.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Exterior angles", statement: "$360° / n$." }],
            steps: [
              { reasoning: "$n = 360 \\div 30$.", marks: 1, markCode: "M" },
              { reasoning: "$n = 12$ (dodecagon).", marks: 1, markCode: "M" },
              { reasoning: "Answer: 12 sides.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12",
          },
        },
        {
          id: "cimg-u4-s1-po-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Each interior angle of a regular octagon is 135°. What is each exterior angle?",
          response: { type: "mcq", choices: [
            { id: "a", text: "90°" },
            { id: "b", text: "55°" },
            { id: "c", text: "135°" },
            { id: "d", text: "45°" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "law", name: "Interior + exterior", statement: "$180°$." }],
            steps: [{ reasoning: "$180 - 135 = 45°$.", marks: 1, markCode: "A" }],
            finalAnswer: "45°",
          },
        },
        {
          id: "cimg-u4-s1-po-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The sum of the interior angles of a polygon is 1260°. How many sides does it have?",
          response: { type: "numeric", parts: [{ label: "a", answer: 9 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Interior sum", statement: "$(n-2) \\times 180°$." }],
            steps: [
              { reasoning: "$(n - 2) \\times 180 = 1260$ → $n - 2 = 7$.", marks: 1, markCode: "M" },
              { reasoning: "$n = 9$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 9 sides (nonagon).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9",
          },
        },
        {
          id: "cimg-u4-s1-po-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the sum of the interior angles of a quadrilateral?",
          response: { type: "mcq", choices: [
            { id: "a", text: "720°" },
            { id: "b", text: "360°" },
            { id: "c", text: "540°" },
            { id: "d", text: "180°" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "Interior sum", statement: "$(n-2) \\times 180°$." }],
            steps: [{ reasoning: "$(4-2) \\times 180 = 360°$.", marks: 1, markCode: "A" }],
            finalAnswer: "360°",
          },
        },
        {
          id: "cimg-u4-s1-po-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find each interior angle of a regular hexagon.",
          response: { type: "numeric", parts: [{ label: "a", answer: 120 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Interior angle", statement: "Exterior first." }],
            steps: [
              { reasoning: "Exterior $= 360 \\div 6 = 60°$; interior $= 180 - 60 = 120°$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 120°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "120°",
          },
        },
        {
          id: "cimg-u4-s1-po-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Each exterior angle of a regular polygon is 24°. Find the number of sides.",
          response: { type: "numeric", parts: [{ label: "a", answer: 15 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Exterior angles", statement: "$360° / n$." }],
            steps: [
              { reasoning: "$n = 360 \\div 24$.", marks: 1, markCode: "M" },
              { reasoning: "$n = 15$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 15 sides.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15",
          },
        },
        {
          id: "cimg-u4-s1-po-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Each interior angle of a regular decagon is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "150°" },
            { id: "b", text: "144°" },
            { id: "c", text: "120°" },
            { id: "d", text: "108°" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "Interior angle", statement: "$\\frac{(n-2) \\times 180°}{n}$." }],
            steps: [{ reasoning: "$\\frac{8 \\times 180°}{10} = 144°$ (or exterior $36°$, interior $180 - 36 = 144°$).", marks: 1, markCode: "A" }],
            finalAnswer: "144°",
          },
        },
        {
          id: "cimg-u4-s1-po-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "The interior angles of a quadrilateral are 80°, 95°, 110° and x°. Find x.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Quadrilateral sum", statement: "$360°$." }],
            steps: [
              { reasoning: "Interior angles of a quadrilateral sum to 360°.", marks: 1, markCode: "M" },
              { reasoning: "$x = 360 - 80 - 95 - 110 = 75°$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $x = 75°$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "75°",
          },
        },
        {
          id: "cimg-u4-s1-po-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The sum of the interior angles of a polygon is 1800°. How many sides does it have?",
          response: { type: "numeric", parts: [{ label: "a", answer: 12 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Interior sum", statement: "$(n-2) \\times 180°$." }],
            steps: [
              { reasoning: "$(n - 2) \\times 180 = 1800$ → $n - 2 = 10$.", marks: 1, markCode: "M" },
              { reasoning: "$n = 12$ (dodecagon).", marks: 1, markCode: "M" },
              { reasoning: "Answer: 12 sides.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12",
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
