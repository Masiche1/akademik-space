import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "edpm6-u3-lesson-3-1",
  code: "3-1",
  title: "Area of Triangles and Parallelograms",
  goal: "I CAN calculate area of triangles, parallelograms and compound shapes.",
  standards: ["Year 6 Measurement"],
  vocabulary: [
    {
      term: "Base",
      definition: "The bottom side of a shape used for area calculations.",
    },
    {
      term: "Perpendicular height",
      definition: "The shortest distance from base to top, at 90°.",
    },
    {
      term: "Parallelogram",
      definition: "A quadrilateral with opposite sides parallel.",
    },
    {
      term: "Compound shape",
      definition: "A shape made of two or more simple shapes.",
    },
  ],
  concepts: [
    {
      id: "edpm6-u3-area",
      title: "Area formulas",
      skill:
        "Calculate area of triangles, parallelograms, trapeziums and compound shapes.",
      lesson: {
        sections: [
          {
            heading: "Triangle and parallelogram",
            body: "**Triangle**: A = ½ × base × height. **Parallelogram**: A = base × height (same as rectangle but slanted). **Trapezium**: A = ½ × (a + b) × h where a,b are parallel sides. Height must be **perpendicular** to base.",
          },
          {
            heading: "Compound shapes",
            body: "Split into simple shapes, calculate each area, add (or subtract for cut-outs). For perimeter, trace outer edges. Draw a diagram and label dimensions first.",
          },
        ],
        keyFormulas: [
          { name: "Triangle", statement: "A = ½ × b × h" },
          { name: "Parallelogram", statement: "A = b × h" },
          { name: "Trapezium", statement: "A = ½ × (a + b) × h" },
        ],
        workedExample: {
          problem:
            "Find the area of a triangle with base 10 cm and height 6 cm.",
          solution: "A = ½ × 10 × 6 = 30 cm².",
        },
      },
      questions: [
        {
          id: "edpm6-u3-ar-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the area of a triangle with base 8 cm and height 5 cm?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "20 cm²" },
              { id: "b", text: "40 cm²" },
              { id: "c", text: "13 cm²" },
              { id: "d", text: "26 cm²" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Triangle area",
                statement: "½ × 8 × 5 = 20 cm².",
              },
            ],
            steps: [{ reasoning: "½ × 8 × 5 = 20.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 20 cm²",
            commonErrors: ["Forgetting the ½ — answering 40."],
          },
        },
        {
          id: "edpm6-u3-ar-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A parallelogram has base 12 cm and height 7 cm. What is its area?",
          response: {
            type: "numeric",
            parts: [{ label: "Area", answer: 84, tolerance: 0, unit: "cm²" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Parallelogram area",
                statement: "12 × 7 = 84 cm².",
              },
            ],
            steps: [
              { reasoning: "Area = base × height.", marks: 1, markCode: "M" },
              { reasoning: "12 × 7 = 84.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 84 cm².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "84 cm²",
            commonErrors: [
              "Using side length instead of perpendicular height.",
            ],
          },
        },
        {
          id: "edpm6-u3-ar-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A trapezium has parallel sides 8 cm and 12 cm, height 5 cm. What is its area?",
          response: {
            type: "numeric",
            parts: [{ label: "Area", answer: 50, tolerance: 0, unit: "cm²" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Trapezium area",
                statement: "½ × (8+12) × 5 = ½ × 20 × 5 = 50 cm².",
              },
            ],
            steps: [
              { reasoning: "a + b = 8 + 12 = 20.", marks: 1, markCode: "M" },
              { reasoning: "½ × 20 × 5 = 50.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 50 cm².", marks: 1, markCode: "A" },
              { reasoning: "Method shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50 cm²",
            commonErrors: ["Forgetting the ½ factor."],
          },
        },
        {
          id: "edpm6-u3-ar-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A shape is made of a rectangle 10 cm × 6 cm with a triangle (base 10 cm, height 4 cm) on top.",
          parts: [
            { label: "a", prompt: "Find the area of the rectangle.", marks: 2 },
            { label: "b", prompt: "Find the area of the triangle.", marks: 3 },
            {
              label: "c",
              prompt: "Find the total area of the compound shape.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Compound area",
                statement: "Rectangle 60; triangle 20; total 80 cm².",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "10 × 6 = 60 cm².",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: 60 cm².",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "½ × 10 × 4 = 20 cm².",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: 20 cm².",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "½ factor used.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Total = 60 + 20 = 80 cm².",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: 80 cm².",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Areas added correctly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Method clear.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Diagram-based reasoning.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "60 cm²; 20 cm²; 80 cm²",
            commonErrors: ["Forgetting the triangle's ½ in part (b)."],
          },
        },
      ],
    },
    {
      id: "edpm6-u3-angles",
      title: "Angles in shapes",
      skill: "Find missing angles in triangles and quadrilaterals.",
      lesson: {
        sections: [
          {
            heading: "Angles in triangles",
            body: "Angles in a triangle sum to **180°**. If two angles are 50° and 60°, the third = 180 − 110 = 70°. In an equilateral triangle all are 60°; isosceles has two equal.",
          },
          {
            heading: "Angles in quadrilaterals",
            body: "Angles in any quadrilateral sum to **360°**. Rectangle: all 90° (sum 360). Parallelogram: opposite angles equal. Find missing: 360 − known angles.",
          },
        ],
        keyFormulas: [
          { name: "Triangle", statement: "Angles sum to 180°" },
          { name: "Quadrilateral", statement: "Angles sum to 360°" },
        ],
        workedExample: {
          problem: "A triangle has angles 45° and 65°. Find the third.",
          solution: "180 − 45 − 65 = 70°.",
        },
      },
      questions: [
        {
          id: "edpm6-u3-an-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the sum of angles in a triangle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "90°" },
              { id: "b", text: "180°" },
              { id: "c", text: "270°" },
              { id: "d", text: "360°" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Triangle angles",
                statement: "Sum = 180°.",
              },
            ],
            steps: [
              { reasoning: "Triangle angles = 180°.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 180°",
            commonErrors: ["Confusing with quadrilateral 360°."],
          },
        },
        {
          id: "edpm6-u3-an-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A triangle has angles 50° and 70°. What is the third angle?",
          response: {
            type: "numeric",
            parts: [{ label: "Angle", answer: 60, tolerance: 0, unit: "°" }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Triangle angles",
                statement: "180 − 50 − 70 = 60°.",
              },
            ],
            steps: [
              { reasoning: "50 + 70 = 120.", marks: 1, markCode: "M" },
              { reasoning: "180 − 120 = 60°.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 60°.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60°",
            commonErrors: ["Adding all three as 200 — must equal 180."],
          },
        },
        {
          id: "edpm6-u3-an-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A quadrilateral has angles 80°, 100°, 90°. What is the fourth?",
          response: {
            type: "numeric",
            parts: [{ label: "Angle", answer: 90, tolerance: 0, unit: "°" }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quadrilateral angles",
                statement: "360 − 80 − 100 − 90 = 90°.",
              },
            ],
            steps: [
              { reasoning: "80 + 100 + 90 = 270.", marks: 1, markCode: "M" },
              { reasoning: "360 − 270 = 90°.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 90°.", marks: 1, markCode: "A" },
              { reasoning: "Method shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "90°",
            commonErrors: ["Using 180 instead of 360 for quadrilateral."],
          },
        },
        {
          id: "edpm6-u3-an-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A triangle has one angle of 90° and the other two angles in the ratio 2:3.",
          parts: [
            {
              label: "a",
              prompt: "How many degrees do the other two angles sum to?",
              marks: 2,
            },
            { label: "b", prompt: "Find each of the two angles.", marks: 5 },
            { label: "c", prompt: "What type of triangle is this?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Angles and ratio",
                statement:
                  "Remaining = 90°; ratio 2:3 → 36° and 54°; right-angled triangle.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "180 − 90 = 90° for the other two.",
                marks: 1,
                markCode: "M",
              },
              { part: "a", reasoning: "Answer: 90°.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Ratio 2:3 = 5 parts; 90 ÷ 5 = 18 per part.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Angles: 2×18=36°, 3×18=54°.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answers: 36° and 54°.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Check: 36+54=90. ✓",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Method shown.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Has a 90° angle → right-angled triangle.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Also scalene (all sides different).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Correct identification.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "90°; 36° and 54°; right-angled (scalene)",
            commonErrors: ["Splitting 90° equally — ratio is 2:3 not 1:1."],
          },
        },
      ],
    },
  ],
};
