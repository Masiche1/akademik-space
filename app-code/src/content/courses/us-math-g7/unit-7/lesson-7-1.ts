import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "m7-u7-lesson-7-1",
  code: "7-1",
  title: "Circles and Angles: Measurement and Reasoning",
  goal: "I CAN measure and reason about angles in circles and polygons, applying theorems to solve problems.",
  standards: ["7.G.A.1", "7.G.A.2", "7.G.A.3", "7.G.B.4", "7.G.B.5", "7.G.B.6"],
  vocabulary: [
    {
      term: "Central angle",
      definition:
        "An angle whose vertex is at the center of a circle; its measure equals the measure of its intercepted arc.",
    },
    {
      term: "Inscribed angle",
      definition:
        "An angle whose vertex is on the circle; its measure is half the measure of its intercepted arc.",
    },
    {
      term: "Arc",
      definition:
        "A portion of the circumference of a circle between two points.",
    },
    {
      term: "Chord",
      definition: "A line segment connecting two points on a circle.",
    },
    {
      term: "Radius",
      definition:
        "A line segment from the center of a circle to a point on the circle.",
    },
    {
      term: "Diameter",
      definition: "A chord that passes through the center; twice the radius.",
    },
  ],
  concepts: [
    {
      id: "m7-u7-circle-measurements",
      title: "Circle measurements: circumference and area",
      skill:
        "Calculate circumference and area of circles using $\\pi$ and radius/diameter.",
      lesson: {
        sections: [
          {
            heading: "Circumference",
            body: "The **circumference** is the distance around a circle: $C = 2\\pi r$ or $C = \\pi d$ (since $d = 2r$). For a circle with radius $5$ cm: $C = 2\\pi(5) = 10\\pi \\approx 31.4$ cm. For diameter $8$ m: $C = \\pi(8) = 8\\pi \\approx 25.1$ m.",
          },
          {
            heading: "Area",
            body: "The **area** of a circle is $A = \\pi r^2$. For radius $3$ m: $A = \\pi(9) = 9\\pi \\approx 28.3$ m². Note that area uses radius squared, not diameter. If given diameter, divide by $2$ first: diameter $10$ cm → radius $5$ cm → $A = \\pi(25) = 25\\pi \\approx 78.5$ cm².",
          },
          {
            heading: "Using $\\pi$",
            body: "$\\pi \\approx 3.14159$; use $3.14$ for calculations. Leave answers in terms of $\\pi$ when exact: $10\\pi$ cm is exact, $31.4$ cm is approximate. Always include units: cm for circumference, cm² for area.",
          },
        ],
        keyFormulas: [
          { name: "Circumference", statement: "$C = 2\\pi r = \\pi d$" },
          { name: "Area", statement: "$A = \\pi r^2$" },
          { name: "Diameter", statement: "$d = 2r$" },
        ],
        workedExample: {
          problem:
            "Find the circumference and area of a circle with diameter $12$ cm.",
          solution:
            "Radius = $6$ cm. Circumference = $2\\pi(6) = 12\\pi \\approx 37.7$ cm. Area = $\\pi(6^2) = 36\\pi \\approx 113.1$ cm².",
        },
      },
      questions: [
        {
          id: "m7-u7-circle-measurements-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the circumference of a circle with radius $4$ cm? (Use $\\pi \\approx 3.14$)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8\\pi$ cm" },
              { id: "b", text: "$16\\pi$ cm" },
              { id: "c", text: "$4\\pi$ cm" },
              { id: "d", text: "$\\pi$ cm" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Circumference",
                statement: "$C = 2\\pi r$",
              },
            ],
            steps: [
              {
                reasoning: "$C = 2\\pi r = 2\\pi(4) = 8\\pi$ cm.",
                working: "2 \\times \\pi \\times 4 = 8\\pi",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $8\\pi$ cm",
            commonErrors: ["Using $\\pi r$ instead of $2\\pi r$."],
          },
        },
        {
          id: "m7-u7-circle-measurements-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the area of a circle with diameter $10$ m? (Leave in terms of $\\pi$)",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Area",
                statement: "$A = \\pi r^2$; radius = diameter $\\div 2$.",
              },
            ],
            steps: [
              {
                reasoning: "Diameter $= 10$ m, so radius $= 5$ m.",
                working: "r = 5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Area = $\\pi(5^2) = 25\\pi$ m².",
                working: "A = 25\\pi",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$25\\pi$ m²",
            commonErrors: [
              "Using diameter instead of radius: $\\pi(10^2) = 100\\pi$ (incorrect).",
            ],
          },
        },
        {
          id: "m7-u7-circle-measurements-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A circular garden has radius $8$ m. A path surrounds it with width $2$ m. What is the area of the path?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Composite figures",
                statement:
                  "Area of path = area of outer circle - area of inner circle.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Inner radius = $8$ m; outer radius = $8 + 2 = 10$ m.",
                working: "r_{inner} = 8, r_{outer} = 10",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Outer area = $\\pi(10^2) = 100\\pi$; inner area = $\\pi(8^2) = 64\\pi$.",
                working: "100\\pi - 64\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Path area = $36\\pi \\approx 113.1$ m².",
                working: "36\\pi",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$36\\pi \\approx 113.1$ m²",
            commonErrors: [
              "Adding areas instead of subtracting.",
              "Using $8 + 2 = 10$ as radius but forgetting to square.",
            ],
          },
        },
        {
          id: "m7-u7-circle-measurements-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "Find the circumference of a circle with diameter $14$ cm. (Use $\\pi \\approx 3.14$)",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Find the area of a circle with radius $6$ m. (Leave in terms of $\\pi$)",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "A circular track has radius $50$ m. How far does a runner travel in one lap? (Use $\\pi \\approx 3.14$)",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "If the circumference of a circle is $20\\pi$ cm, what is its area?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Circumference (cm)", answer: 43.96 },
              { label: "(b) Area ($\\pi$ m²)", answer: 36 },
              { label: "(c) Distance (m)", answer: 314 },
              { label: "(d) Area ($\\pi$ cm²)", answer: 100 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Circumference",
                statement: "$C = \\pi d = 2\\pi r$",
              },
              { kind: "formula", name: "Area", statement: "$A = \\pi r^2$" },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$C = \\pi(14) = 14\\pi \\approx 43.96$ cm.",
                working: "14 \\times 3.14 = 43.96",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$A = \\pi(6^2) = 36\\pi$ m².",
                working: "36\\pi",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "One lap = circumference = $2\\pi(50) = 100\\pi \\approx 314$ m.",
                working: "100 \\times 3.14 = 314",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "$C = 2\\pi r = 20\\pi$ → $r = 10$; $A = \\pi(10^2) = 100\\pi$ cm².",
                working: "100\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "State answer.",
                working: "100\\pi",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $43.96$ cm (b) $36\\pi$ m² (c) $314$ m (d) $100\\pi$ cm²",
            commonErrors: ["In (d), using $20$ as radius instead of $10$."],
          },
        },
      ],
    },
    {
      id: "m7-u7-angles-circles",
      title: "Angles in circles",
      skill:
        "Apply central and inscribed angle theorems to find missing angle measures.",
      lesson: {
        sections: [
          {
            heading: "Central angles",
            body: "A **central angle** has its vertex at the center of the circle. Its measure equals the measure of its intercepted arc. If a central angle intercepts an arc of $120^\\circ$, the angle measures $120^\\circ$.",
          },
          {
            heading: "Inscribed angles",
            body: "An **inscribed angle** has its vertex on the circle. Its measure is half the measure of its intercepted arc. If an inscribed angle intercepts an arc of $100^\\circ$, the angle measures $50^\\circ$. The intercepted arc is the arc 'across' from the angle, not containing the vertex.",
          },
          {
            heading: "Key relationships",
            body: "Angles in the same segment are equal. An angle inscribed in a semicircle is a right angle ($90^\\circ$). Opposite angles of a cyclic quadrilateral sum to $180^\\circ$. The measure of an arc equals the measure of its central angle.",
          },
        ],
        keyFormulas: [
          { name: "Central angle", statement: "Measure = intercepted arc" },
          {
            name: "Inscribed angle",
            statement: "Measure = $\\frac{1}{2} \\times$ intercepted arc",
          },
          { name: "Semicircle", statement: "Inscribed angle = $90^\\circ$" },
        ],
        workedExample: {
          problem:
            "An inscribed angle intercepts an arc of $140^\\circ$. What is the measure of the angle?",
          solution:
            "Inscribed angle = $\\frac{1}{2} \\times 140^\\circ = 70^\\circ$.",
        },
      },
      questions: [
        {
          id: "m7-u7-angles-circles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A central angle intercepts an arc of $75^\\circ$. What is the measure of the central angle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$37.5^\\circ$" },
              { id: "b", text: "$75^\\circ$" },
              { id: "c", text: "$150^\\circ$" },
              { id: "d", text: "$105^\\circ$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "Central angle",
                statement: "Measure equals intercepted arc.",
              },
            ],
            steps: [
              {
                reasoning: "Central angle = intercepted arc = $75^\\circ$.",
                working: "75^\\circ",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** $75^\\circ$",
            commonErrors: ["Halving the arc (confusing with inscribed angle)."],
          },
        },
        {
          id: "m7-u7-angles-circles-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "An inscribed angle intercepts an arc of $160^\\circ$. What is the measure of the inscribed angle?",
          response: {
            type: "numeric",
            parts: [{ label: "Angle ($^\\circ$)", answer: 80 }],
          },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "Inscribed angle",
                statement: "Measure = half the intercepted arc.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Inscribed angle = $\\frac{1}{2} \\times 160^\\circ = 80^\\circ$.",
                working: "\\frac{160}{2} = 80",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "80^\\circ",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$80^\\circ$",
            commonErrors: ["Not halving the arc."],
          },
        },
        {
          id: "m7-u7-angles-circles-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "An angle is inscribed in a semicircle. What is its measure? Explain why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "Semicircle theorem",
                statement:
                  "An angle inscribed in a semicircle is a right angle.",
              },
            ],
            steps: [
              {
                reasoning: "A semicircle is an arc of $180^\\circ$.",
                working: "180^\\circ",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Inscribed angle = half the arc = $\\frac{180}{2} = 90^\\circ$.",
                working: "90^\\circ",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Therefore the angle is $90^\\circ$ (a right angle).",
                working: "90^\\circ",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$90^\\circ$ (right angle), because it intercepts a semicircle ($180^\\circ$ arc).",
            commonErrors: ["Not recognizing the semicircle is $180^\\circ$."],
          },
        },
        {
          id: "m7-u7-angles-circles-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "A central angle intercepts an arc of $200^\\circ$. What is the measure of the arc?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "An inscribed angle intercepts an arc of $96^\\circ$. What is the measure of the angle?",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "If a central angle measures $110^\\circ$, what is the measure of an inscribed angle intercepting the same arc?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "In a cyclic quadrilateral, one angle measures $110^\\circ$. What is the measure of the opposite angle?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Arc ($^\\circ$)", answer: 200 },
              { label: "(b) Angle ($^\\circ$)", answer: 48 },
              { label: "(c) Inscribed angle ($^\\circ$)", answer: 55 },
              { label: "(d) Opposite angle ($^\\circ$)", answer: 70 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "Central angle",
                statement: "Measure equals arc.",
              },
              {
                kind: "theorem",
                name: "Inscribed angle",
                statement: "Measure = half the arc.",
              },
              {
                kind: "theorem",
                name: "Cyclic quadrilateral",
                statement: "Opposite angles sum to $180^\\circ$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Central angle = arc, so arc = $200^\\circ$.",
                working: "200^\\circ",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Inscribed angle = $\\frac{96}{2} = 48^\\circ$.",
                working: "48^\\circ",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Central angle = $110^\\circ$ = arc; inscribed = $\\frac{110}{2} = 55^\\circ$.",
                working: "55^\\circ",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State answer.",
                working: "55^\\circ",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Opposite angles sum to $180^\\circ$: $180 - 110 = 70^\\circ$.",
                working: "70^\\circ",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $200^\\circ$ (b) $48^\\circ$ (c) $55^\\circ$ (d) $70^\\circ$",
            commonErrors: [
              "In (d), subtracting from $360^\\circ$ instead of $180^\\circ$.",
            ],
          },
        },
      ],
    },
    {
      id: "m7-u7-angles-polygons",
      title: "Angles in polygons",
      skill:
        "Apply angle sum theorems to triangles, quadrilaterals, and polygons.",
      lesson: {
        sections: [
          {
            heading: "Triangle angle sum",
            body: "The sum of the interior angles of a triangle is $180^\\circ$. If two angles are $50^\\circ$ and $70^\\circ$, the third is $180 - 50 - 70 = 60^\\circ$. For a right triangle, the two acute angles sum to $90^\\circ$.",
          },
          {
            heading: "Quadrilateral angle sum",
            body: "The sum of the interior angles of a quadrilateral is $360^\\circ$. A rectangle has four $90^\\circ$ angles. A parallelogram has opposite angles equal and consecutive angles supplementary (sum to $180^\\circ$).",
          },
          {
            heading: "Polygon angle sum formula",
            body: "For an $n$-sided polygon, the sum of interior angles is $(n - 2) \\times 180^\\circ$. For a pentagon ($n = 5$): $(5-2) \\times 180 = 540^\\circ$. For a hexagon ($n = 6$): $720^\\circ$. For a regular polygon, each interior angle = $\\frac{(n-2) \\times 180}{n}$.",
          },
        ],
        keyFormulas: [
          { name: "Triangle", statement: "Sum = $180^\\circ$" },
          { name: "Quadrilateral", statement: "Sum = $360^\\circ$" },
          { name: "Polygon", statement: "Sum = $(n - 2) \\times 180^\\circ$" },
        ],
        workedExample: {
          problem: "Find the sum of the interior angles of a hexagon.",
          solution:
            "$(6 - 2) \\times 180^\\circ = 4 \\times 180^\\circ = 720^\\circ$.",
        },
      },
      questions: [
        {
          id: "m7-u7-angles-polygons-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two angles of a triangle measure $60^\\circ$ and $80^\\circ$. What is the third angle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$40^\\circ$" },
              { id: "b", text: "$30^\\circ$" },
              { id: "c", text: "$50^\\circ$" },
              { id: "d", text: "$20^\\circ$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "Triangle angle sum",
                statement: "Sum = $180^\\circ$.",
              },
            ],
            steps: [
              {
                reasoning: "Third angle = $180 - 60 - 80 = 40^\\circ$.",
                working: "40^\\circ",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $40^\\circ$",
            commonErrors: [
              "Adding angles instead of subtracting from $180^\\circ$.",
            ],
          },
        },
        {
          id: "m7-u7-angles-polygons-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the sum of the interior angles of a pentagon?",
          response: {
            type: "numeric",
            parts: [{ label: "Sum ($^\\circ$)", answer: 540 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Polygon angle sum",
                statement: "$(n - 2) \\times 180^\\circ$",
              },
            ],
            steps: [
              {
                reasoning: "Pentagon has $n = 5$: $(5 - 2) \\times 180 = 540$.",
                working: "3 \\times 180 = 540",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "540^\\circ",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$540^\\circ$",
            commonErrors: [
              "Using $n \\times 180$ instead of $(n-2) \\times 180$.",
            ],
          },
        },
        {
          id: "m7-u7-angles-polygons-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "In a parallelogram, one angle measures $65^\\circ$. What are the measures of the other three angles?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Parallelogram angles",
                statement:
                  "Opposite angles equal; consecutive angles supplementary.",
              },
            ],
            steps: [
              {
                reasoning: "Opposite angle = $65^\\circ$.",
                working: "65^\\circ",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Adjacent angles = $180 - 65 = 115^\\circ$ each.",
                working: "115^\\circ",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Other three: $115^\\circ$, $65^\\circ$, $115^\\circ$.",
                working: "115, 65, 115",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$115^\\circ$, $65^\\circ$, $115^\\circ$",
            commonErrors: ["Not recognizing opposite angles are equal."],
          },
        },
        {
          id: "m7-u7-angles-polygons-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "Two angles of a triangle are $45^\\circ$ and $x$. The third angle is $75^\\circ$. Find $x$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "What is the sum of the interior angles of a decagon (10 sides)?",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "In a regular hexagon, what is the measure of each interior angle?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "The sum of three angles of a quadrilateral is $290^\\circ$. What is the fourth angle?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) x ($^\\circ$)", answer: 60 },
              { label: "(b) Sum ($^\\circ$)", answer: 1440 },
              { label: "(c) Each angle ($^\\circ$)", answer: 120 },
              { label: "(d) Fourth angle ($^\\circ$)", answer: 70 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "Triangle angle sum",
                statement: "Sum = $180^\\circ$.",
              },
              {
                kind: "formula",
                name: "Polygon angle sum",
                statement: "$(n - 2) \\times 180^\\circ$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$45 + x + 75 = 180$ → $x = 180 - 120 = 60$.",
                working: "x = 60",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$(10 - 2) \\times 180 = 8 \\times 180 = 1440$.",
                working: "1440^\\circ",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Regular hexagon: $\\frac{(6-2) \\times 180}{6} = \\frac{720}{6} = 120^\\circ$.",
                working: "120^\\circ",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State answer.",
                working: "120^\\circ",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Quadrilateral sum = $360^\\circ$; fourth = $360 - 290 = 70^\\circ$.",
                working: "70^\\circ",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $60^\\circ$ (b) $1440^\\circ$ (c) $120^\\circ$ (d) $70^\\circ$",
          },
        },
      ],
    },
    {
      id: "m7-u7-scale-drawings",
      title: "Scale drawings and models",
      skill:
        "Use scale factors to solve problems involving maps, models, and blueprints.",
      lesson: {
        sections: [
          {
            heading: "Scale factor",
            body: "A **scale** is a ratio comparing the drawing to the actual object: $1 \\text{ cm} : 100 \\text{ cm}$ means $1$ cm on the drawing represents $100$ cm in reality. The **scale factor** is the ratio of corresponding lengths: $\\frac{\\text{drawing length}}{\\text{actual length}}$.",
          },
          {
            heading: "Finding actual measurements",
            body: "To find actual length: actual = drawing length $\\times$ scale denominator. If $1$ cm represents $50$ cm and a room is $8$ cm on the plan: actual = $8 \\times 50 = 400$ cm = $4$ m. To find drawing length: drawing = actual $\\div$ scale.",
          },
          {
            heading: "Area and volume scales",
            body: "Area scale = (length scale)². If $1$ cm represents $10$ cm, then $1$ cm² represents $100$ cm². Volume scale = (length scale)³. If $1$ cm represents $10$ cm, then $1$ cm³ represents $1000$ cm³.",
          },
        ],
        keyFormulas: [
          {
            name: "Scale",
            statement: "$1 \\text{ unit on drawing} : n \\text{ units actual}$",
          },
          { name: "Actual length", statement: "Actual = drawing $\\times n$" },
          { name: "Area scale", statement: "Area scale = (length scale)²" },
        ],
        workedExample: {
          problem:
            "A map has scale $1$ cm : $5$ km. Two cities are $12$ cm apart on the map. What is the actual distance?",
          solution: "Actual = $12 \\times 5 = 60$ km.",
        },
      },
      questions: [
        {
          id: "m7-u7-scale-drawings-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a map with scale $1$ cm : $10$ km, two towns are $7$ cm apart. What is the actual distance between them?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$70$ km" },
              { id: "b", text: "$17$ km" },
              { id: "c", text: "$700$ km" },
              { id: "d", text: "$0.7$ km" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Scale",
                statement: "Actual = drawing $\\times$ scale denominator.",
              },
            ],
            steps: [
              {
                reasoning: "Actual = $7 \\times 10 = 70$ km.",
                working: "70\\text{ km}",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $70$ km",
            commonErrors: ["Dividing instead of multiplying."],
          },
        },
        {
          id: "m7-u7-scale-drawings-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A model car is built at scale $1$ : $24$. If the model is $15$ cm long, how long is the actual car?",
          response: {
            type: "numeric",
            parts: [{ label: "Actual length (cm)", answer: 360 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Scale",
                statement: "Actual = model $\\times 24$.",
              },
            ],
            steps: [
              {
                reasoning: "Actual = $15 \\times 24 = 360$ cm.",
                working: "15 \\times 24 = 360",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "360\\text{ cm} = 3.6\\text{ m}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$360$ cm ($3.6$ m)",
            commonErrors: ["Dividing by $24$ instead of multiplying."],
          },
        },
        {
          id: "m7-u7-scale-drawings-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A blueprint uses scale $1$ inch : $8$ feet. If a room is $3.5$ inches wide on the blueprint, what is the actual width?",
          response: {
            type: "numeric",
            parts: [{ label: "Actual width (feet)", answer: 28 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Scale",
                statement: "Actual = drawing $\\times$ scale denominator.",
              },
            ],
            steps: [
              {
                reasoning: "Actual = $3.5 \\times 8 = 28$ feet.",
                working: "3.5 \\times 8 = 28",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer with units.",
                working: "28\\text{ feet}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Verify: $28 \\div 8 = 3.5$ ✓.",
                working: "28 \\div 8 = 3.5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$28$ feet",
            commonErrors: ["Using wrong units (cm instead of feet)."],
          },
        },
        {
          id: "m7-u7-scale-drawings-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "On a map with scale $1$ cm : $25$ km, two cities are $9$ cm apart. What is the actual distance?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "A model building is $1/100$ scale. If the model is $45$ cm tall, how tall is the actual building?",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "A rectangle is $6$ cm by $4$ cm on a drawing with scale $1$ : $50$. What are the actual dimensions?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "If a map has scale $1$ inch : $5$ miles, how many inches represent $35$ miles?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Distance (km)", answer: 225 },
              { label: "(b) Actual height (cm)", answer: 4500 },
              { label: "(c) Actual dimensions (cm)", answer: 0 },
              { label: "(d) Inches", answer: 7 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Scale",
                statement:
                  "Actual = drawing $\\times$ scale; Drawing = actual $\\div$ scale.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Actual = $9 \\times 25 = 225$ km.",
                working: "225\\text{ km}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Actual = $45 \\times 100 = 4500$ cm = $45$ m.",
                working: "4500\\text{ cm}",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Length = $6 \\times 50 = 300$ cm; width = $4 \\times 50 = 200$ cm.",
                working: "300 \\times 200\\text{ cm}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State dimensions.",
                working: "300\\text{ cm} \\times 200\\text{ cm}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Inches = $35 \\div 5 = 7$ inches.",
                working: "7\\text{ inches}",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $225$ km (b) $4500$ cm ($45$ m) (c) $300$ cm $\\times$ $200$ cm (d) $7$ inches",
            commonErrors: ["In (d), multiplying instead of dividing."],
          },
        },
      ],
    },
  ],
};
