import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "edpm4-u4-lesson-4-2",
  code: "4-2",
  title: "Geometry and Angles",
  goal: "I CAN identify angles and use them in problems.",
  standards: ["Year 4 Geometry"],
  vocabulary: [
    {
      term: "Angle",
      definition: "The amount of turn between two lines or directions.",
    },
    { term: "Right angle", definition: "A square corner — 90 degrees." },
    { term: "Acute angle", definition: "An angle smaller than 90 degrees." },
    {
      term: "Obtuse angle",
      definition: "An angle between 90 and 180 degrees.",
    },
  ],
  concepts: [
    {
      id: "edpm4-u4-angles",
      title: "Types of Angles",
      skill: "Identify acute, right, obtuse and straight angles.",
      lesson: {
        sections: [
          {
            heading: "Angle types",
            body: "Angles are measured in degrees (°). An acute angle is less than 90° (sharp). A right angle is exactly 90° (square corner). An obtuse angle is between 90° and 180° (wide). A straight angle is 180° (a straight line). A reflex angle is more than 180°.",
          },
          {
            heading: "Angles in shapes",
            body: "Triangles have 3 angles that add to 180°. Squares and rectangles have 4 right angles (90° each). Pentagons have 5 angles; hexagons have 6. Angles around a point always add to 360°. Angles on a straight line add to 180°.",
          },
        ],
        keyFormulas: [
          { name: "Angles around a point", statement: "Sum to 360°" },
          { name: "Angles on a line", statement: "Sum to 180°" },
          { name: "Triangle angles", statement: "Sum to 180°" },
        ],
        workedExample: {
          problem:
            "Two angles on a line are 60° and 120°. Do they add to 180°?",
          solution: "60 + 120 = 180. Yes.",
        },
      },
      questions: [
        {
          id: "edpm4-u4-an-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a right angle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Less than 90°" },
              { id: "b", text: "Exactly 90°" },
              { id: "c", text: "Between 90° and 180°" },
              { id: "d", text: "180°" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Right angle",
                statement: "90 degrees.",
              },
            ],
            steps: [
              { reasoning: "Right angle = 90°.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 90°",
            commonErrors: ["Wrong angle."],
          },
        },
        {
          id: "edpm4-u4-an-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An angle measures 120°. What type is it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Acute" },
              { id: "b", text: "Right" },
              { id: "c", text: "Obtuse" },
              { id: "d", text: "Straight" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Angle types",
                statement: "90-180 = obtuse.",
              },
            ],
            steps: [{ reasoning: "120° is obtuse.", marks: 2, markCode: "B" }],
            finalAnswer: "**(c)** Obtuse",
            commonErrors: ["Wrong type."],
          },
        },
        {
          id: "edpm4-u4-an-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two angles on a straight line are 75° and x°. Find x.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Angles on a line",
                statement: "180 - 75 = 105.",
              },
            ],
            steps: [
              {
                reasoning: "Angles on line sum to 180°.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "x = 180 - 75 = 105°.", marks: 1, markCode: "M" },
              { reasoning: "x = 105°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "105°",
            commonErrors: ["Wrong calculation."],
          },
        },
        {
          id: "edpm4-u4-an-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Three angles around a point are 90°, 120° and x°. Find x.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Angles around a point",
                statement: "360 - 210 = 150.",
              },
            ],
            steps: [
              {
                reasoning: "Angles around point sum to 360°.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "90 + 120 = 210.", marks: 1, markCode: "M" },
              { reasoning: "x = 360 - 210 = 150°.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "150°",
            commonErrors: ["Wrong total."],
          },
        },
      ],
    },
    {
      id: "edpm4-u4-shapes",
      title: "Shape Properties",
      skill: "Describe and classify shapes by their properties.",
      lesson: {
        sections: [
          {
            heading: "Classifying shapes",
            body: "Shapes are classified by sides, angles and symmetry. Quadrilaterals have 4 sides; triangles have 3. Special quadrilaterals: square (4 equal sides, 4 right angles), rectangle (opposite sides equal, 4 right angles), rhombus (4 equal sides), parallelogram (opposite sides parallel).",
          },
          {
            heading: "Symmetry",
            body: "A shape has symmetry if a line divides it into two matching halves. Squares have 4 lines of symmetry; rectangles have 2; equilateral triangles have 3; circles have infinite. Count lines of symmetry to describe shapes.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How many lines of symmetry does a square have?",
          solution: "4.",
        },
      },
      questions: [
        {
          id: "edpm4-u4-sh-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many sides does a hexagon have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "5" },
              { id: "c", text: "6" },
              { id: "d", text: "8" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Shapes", statement: "Hexagon = 6." },
            ],
            steps: [
              { reasoning: "Hexagon = 6 sides.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 6",
            commonErrors: ["Wrong count."],
          },
        },
        {
          id: "edpm4-u4-sh-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a parallelogram?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A shape with 3 sides" },
              { id: "b", text: "A quadrilateral with opposite sides parallel" },
              { id: "c", text: "A circle" },
              { id: "d", text: "A triangle" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Parallelogram",
                statement: "Opposite sides parallel.",
              },
            ],
            steps: [
              {
                reasoning: "Parallelogram = parallel sides.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Opposite sides parallel",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edpm4-u4-sh-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three properties of a square.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Square properties",
                statement: "4 equal sides, 4 right angles, 4 symmetry lines.",
              },
            ],
            steps: [
              { reasoning: "4 equal sides.", marks: 1, markCode: "M" },
              { reasoning: "4 right angles.", marks: 1, markCode: "M" },
              { reasoning: "4 lines of symmetry.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Equal sides+right angles+symmetry",
            commonErrors: ["Wrong properties."],
          },
        },
        {
          id: "edpm4-u4-sh-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A shape has 4 sides, opposite sides parallel, but no right angles. What could it be? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Shape classification",
                statement: "Parallelogram or rhombus.",
              },
            ],
            steps: [
              {
                reasoning: "4 sides + parallel = parallelogram or rhombus.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "No right angles rules out rectangle/square.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: parallelogram or rhombus.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Parallelogram or rhombus",
            commonErrors: ["Wrong shape."],
          },
        },
      ],
    },
    {
      id: "edpm4-u4-measure",
      title: "Measurement Problems",
      skill: "Solve problems involving perimeter, area and measurement.",
      lesson: {
        sections: [
          {
            heading: "Perimeter and area",
            body: "Perimeter is the distance around a shape; area is the space inside. Rectangle: perimeter = 2(l + w), area = l × w. Square: perimeter = 4s, area = s². For irregular shapes, break into rectangles or add/subtract known shapes.",
          },
          {
            heading: "Units",
            body: "Length: mm, cm, m, km. Area: cm², m². Volume: cm³, m³. Perimeter uses length units; area uses square units; volume uses cubic units. Convert carefully: 1 m = 100 cm; 1 m² = 10,000 cm².",
          },
        ],
        keyFormulas: [
          { name: "Rectangle", statement: "P = 2(l+w); A = l×w" },
          { name: "Square", statement: "P = 4s; A = s²" },
        ],
        workedExample: {
          problem: "Find the area of a rectangle 9 cm by 6 cm.",
          solution: "9 × 6 = 54 cm².",
        },
      },
      questions: [
        {
          id: "edpm4-u4-ms-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the area of a square with side 7 cm?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "14 cm²" },
              { id: "b", text: "28 cm²" },
              { id: "c", text: "49 cm²" },
              { id: "d", text: "42 cm²" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Area", statement: "7² = 49 cm²." },
            ],
            steps: [{ reasoning: "7 × 7 = 49.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** 49 cm²",
            commonErrors: ["Wrong formula."],
          },
        },
        {
          id: "edpm4-u4-ms-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the perimeter of a rectangle 10 cm by 5 cm?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "15 cm" },
              { id: "b", text: "30 cm" },
              { id: "c", text: "50 cm" },
              { id: "d", text: "25 cm" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Perimeter",
                statement: "2(10+5) = 30 cm.",
              },
            ],
            steps: [{ reasoning: "2 × 15 = 30 cm.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** 30 cm",
            commonErrors: ["Wrong formula."],
          },
        },
        {
          id: "edpm4-u4-ms-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the area of a rectangle 12 m by 8 m.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Area", statement: "12 × 8 = 96 m²." },
            ],
            steps: [
              { reasoning: "Area = length × width.", marks: 1, markCode: "M" },
              { reasoning: "12 × 8 = 96.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 96 m².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "96 m²",
            commonErrors: ["Wrong units or calculation."],
          },
        },
        {
          id: "edpm4-u4-ms-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A garden is 15 m by 10 m with a 2 m wide path around it. What is the area of the path?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Composite area",
                statement: "Outer - inner = path.",
              },
            ],
            steps: [
              {
                reasoning: "Outer: 19 × 14 = 266 m².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Inner: 15 × 10 = 150 m².",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Path: 266 - 150 = 116 m².",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "116 m²",
            commonErrors: ["Wrong dimensions."],
          },
        },
      ],
    },
  ],
};
