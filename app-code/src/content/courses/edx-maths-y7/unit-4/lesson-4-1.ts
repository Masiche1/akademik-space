import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edm7-u4-lesson-4-1",
  code: "4-1",
  title: "Angles and Shape Properties",
  goal: "I CAN identify angle types, use angle facts and describe properties of 2D shapes.",
  standards: ["Edexcel KS3 Maths — Geometry"],
  vocabulary: [
    {
      term: "Acute angle",
      definition: "An angle between $0^\\circ$ and $90^\\circ$.",
    },
    {
      term: "Obtuse angle",
      definition: "An angle between $90^\\circ$ and $180^\\circ$.",
    },
    {
      term: "Reflex angle",
      definition: "An angle between $180^\\circ$ and $360^\\circ$.",
    },
    {
      term: "Parallel lines",
      definition: "Lines that never meet, always the same distance apart.",
    },
  ],
  concepts: [
    {
      id: "edm7-u4-angles",
      title: "Angle Types and Facts",
      skill:
        "Identify angle types and apply angle facts to find missing angles.",
      lesson: {
        sections: [
          {
            heading: "Angle types",
            body: "**Acute** $< 90^\\circ$, **right** $= 90^\\circ$, **obtuse** $90^\\circ < \\theta < 180^\\circ$, **straight** $= 180^\\circ$, **reflex** $> 180^\\circ$, **full turn** $= 360^\\circ$. Angles measured in degrees with a protractor.\n\n**Angle facts**: angles on a straight line sum to $180^\\circ$; angles around a point sum to $360^\\circ$; vertically opposite angles are equal; angles in a triangle sum to $180^\\circ$; angles in a quadrilateral sum to $360^\\circ$.",
          },
          {
            heading: "Parallel lines",
            body: "When a transversal crosses parallel lines: **corresponding angles** are equal (same position), **alternate angles** are equal (Z shape), **co-interior (allied) angles** sum to $180^\\circ$ (C shape).\n\nThese facts let you find missing angles without measuring — essential for geometry proofs and real problems like ramps, roofs, navigation.",
          },
        ],
        keyFormulas: [
          {
            name: "Angle sums",
            statement:
              "Straight line $180^\\circ$; point $360^\\circ$; triangle $180^\\circ$; quadrilateral $360^\\circ$.",
          },
          {
            name: "Parallel lines",
            statement:
              "Corresponding/alternate equal; co-interior sum to $180^\\circ$.",
          },
        ],
        workedExample: {
          problem:
            "Two angles on a straight line are $x$ and $110^\\circ$. Find $x$.",
          solution: "$x + 110 = 180$ → $x = 70^\\circ$.",
        },
      },
      questions: [
        {
          id: "edm7-u4-angles-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An angle of $125^\\circ$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Acute" },
              { id: "b", text: "Reflex" },
              { id: "c", text: "Right" },
              { id: "d", text: "Obtuse" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Obtuse",
                statement: "$90^\\circ < \\theta < 180^\\circ$.",
              },
            ],
            steps: [
              {
                reasoning: "$125^\\circ$ is between 90 and 180 — obtuse.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** Obtuse",
            commonErrors: ["Choosing reflex — 125 < 180."],
          },
        },
        {
          id: "edm7-u4-angles-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two angles on a straight line are $x^\\circ$ and $64^\\circ$. Find $x$.",
          response: {
            type: "numeric",
            parts: [{ label: "x", answer: 116 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Angles on a line",
                statement: "Sum to $180^\\circ$.",
              },
            ],
            steps: [
              {
                reasoning: "$x + 64 = 180$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x = 180 - 64$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x = 116^\\circ$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 116^\\circ$",
            commonErrors: [
              "$x = 244$ — adding instead of subtracting from 180.",
            ],
          },
        },
        {
          id: "edm7-u4-angles-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A triangle has angles $55^\\circ$ and $65^\\circ$. Find the third angle.",
          response: {
            type: "numeric",
            parts: [{ label: "Third angle", answer: 60 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Triangle angles",
                statement: "Sum to $180^\\circ$.",
              },
            ],
            steps: [
              {
                reasoning: "$55 + 65 = 120$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$180 - 120$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 60^\\circ$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check: $55 + 65 + 60 = 180$ ✓.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$60^\\circ$",
            commonErrors: ["Using 360 instead of 180."],
          },
        },
        {
          id: "edm7-u4-angles-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two parallel lines are cut by a transversal. One angle is $72^\\circ$.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify the type of angle relationship for corresponding angles.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "State the value of the corresponding angle.",
              marks: 2,
            },
            { label: "c", prompt: "Find the co-interior angle.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Parallel line angles",
                statement:
                  "Corresponding/alternate equal; co-interior sum to 180.",
              },
            ],
            steps: [
              {
                reasoning: "Corresponding angles are equal.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Corresponding = $72^\\circ$.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Co-interior: $180 - 72$.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "$= 108^\\circ$.",
                marks: 2,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "(a) equal (b) $72^\\circ$ (c) $108^\\circ$",
            commonErrors: ["Confusing angle types.", "Using wrong sum."],
          },
        },
      ],
    },
    {
      id: "edm7-u4-shapes",
      title: "Properties of 2D Shapes",
      skill:
        "Describe properties of triangles, quadrilaterals and other polygons.",
      lesson: {
        sections: [
          {
            heading: "Triangles",
            body: "Classified by sides: **equilateral** (3 equal sides, 3 equal $60^\\circ$ angles), **isosceles** (2 equal sides, 2 equal angles), **scalene** (no equal sides). By angles: **acute**, **right-angled** (one $90^\\circ$), **obtuse**.\n\n**Key facts**: angles sum to $180^\\circ$; longest side opposite largest angle; triangle inequality — sum of any two sides > third.",
          },
          {
            heading: "Quadrilaterals and polygons",
            body: "**Square**: 4 equal sides, 4 right angles. **Rectangle**: opposite sides equal, 4 right angles. **Rhombus**: 4 equal sides, opposite angles equal. **Parallelogram**: opposite sides parallel and equal. **Trapezium**: one pair of parallel sides. **Kite**: two pairs of adjacent equal sides.\n\n**Regular polygons**: all sides and angles equal — interior angle $= \\frac{(n-2) \\times 180}{n}$. Pentagon $108^\\circ$, hexagon $120^\\circ$, octagon $135^\\circ$.",
          },
        ],
        keyFormulas: [
          {
            name: "Polygon interior angle",
            statement: "$\\frac{(n-2) \\times 180}{n}$ for regular n-gon.",
          },
          {
            name: "Quadrilateral sum",
            statement: "Interior angles sum to $360^\\circ$.",
          },
        ],
        workedExample: {
          problem: "Find the interior angle of a regular hexagon.",
          solution:
            "$\\frac{(6-2) \\times 180}{6} = \\frac{720}{6} = 120^\\circ$.",
        },
      },
      questions: [
        {
          id: "edm7-u4-shapes-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A triangle with all sides equal is called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Scalene" },
              { id: "b", text: "Isosceles" },
              { id: "c", text: "Right-angled" },
              { id: "d", text: "Equilateral" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Equilateral",
                statement: "All three sides equal.",
              },
            ],
            steps: [
              {
                reasoning: "Equilateral = equal sides.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** Equilateral",
            commonErrors: ["Confusing with isosceles (2 equal)."],
          },
        },
        {
          id: "edm7-u4-shapes-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the interior angle of a regular pentagon.",
          response: {
            type: "numeric",
            parts: [{ label: "Angle in °", answer: 108 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Regular polygon angle",
                statement: "$\\frac{(n-2) \\times 180}{n}$ with $n = 5$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\frac{(5-2) \\times 180}{5} = \\frac{540}{5}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 108^\\circ$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct calculation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$108^\\circ$",
            commonErrors: ["Using wrong formula — 360/5 etc."],
          },
        },
        {
          id: "edm7-u4-shapes-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A quadrilateral has angles $80^\\circ$, $95^\\circ$, $110^\\circ$ and $x^\\circ$. Find $x$.",
          response: {
            type: "numeric",
            parts: [{ label: "x", answer: 75 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Quadrilateral angles",
                statement: "Sum to $360^\\circ$.",
              },
            ],
            steps: [
              {
                reasoning: "$80 + 95 + 110 = 285$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$360 - 285$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 75^\\circ$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check sum = 360 ✓.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 75^\\circ$",
            commonErrors: ["Using 180 instead of 360."],
          },
        },
        {
          id: "edm7-u4-shapes-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Identify the quadrilateral from its properties.",
          parts: [
            {
              label: "a",
              prompt: "4 equal sides and 4 right angles — name it.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Opposite sides equal and parallel, no right angles — name it.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Exactly one pair of parallel sides — name it.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "4 equal sides but angles not necessarily 90° — name it.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quadrilateral properties",
                statement:
                  "Each quadrilateral defined by side/angle properties.",
              },
            ],
            steps: [
              { reasoning: "(a) Square.", marks: 2, markCode: "B", part: "a" },
              {
                reasoning:
                  "(b) Parallelogram (or rectangle — but no right angles excludes rectangle; could be rhombus too — accept parallelogram/rhombus).",
                marks: 2,
                markCode: "B",
                part: "b",
              },
              {
                reasoning: "(c) Trapezium.",
                marks: 2,
                markCode: "B",
                part: "c",
              },
              { reasoning: "(d) Rhombus.", marks: 2, markCode: "B", part: "d" },
            ],
            finalAnswer:
              "(a) Square (b) Parallelogram/Rhombus (c) Trapezium (d) Rhombus",
            commonErrors: [
              "Confusing similar shapes.",
              "Missing property distinctions.",
            ],
          },
        },
      ],
    },
  ],
};
