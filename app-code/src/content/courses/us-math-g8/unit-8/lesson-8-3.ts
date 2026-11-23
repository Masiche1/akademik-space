import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "m8-u8-lesson-8-3",
  code: "8-3",
  title: "Integrated Geometry Applications",
  goal: "I CAN integrate Pythagorean Theorem, volume, and transformations to solve complex geometric problems.",
  standards: [
    "8.G.B.6",
    "8.G.B.7",
    "8.G.B.8",
    "8.G.A.1",
    "8.G.A.2",
    "8.G.A.3",
    "8.G.A.4",
    "8.G.A.5",
  ],
  vocabulary: [
    {
      term: "Composite figure",
      definition: "A figure made of multiple geometric shapes.",
    },
    {
      term: "Inscribed",
      definition: "A figure inside another figure touching its boundaries.",
    },
    {
      term: "Circumscribed",
      definition: "A figure outside another figure touching its boundaries.",
    },
    {
      term: "Diagonal",
      definition: "A line connecting non-adjacent vertices.",
    },
    { term: "Net", definition: "A 2D representation of a 3D solid's surface." },
    { term: "Cross-section", definition: "A 2D slice of a 3D solid." },
  ],
  concepts: [
    {
      id: "m8-u8-composite-geometry",
      title: "Composite geometric figures",
      skill: "Solve problems involving composite figures with multiple shapes.",
      lesson: {
        sections: [
          {
            heading: "Composite area",
            body: "For composite figures, break into simpler shapes: rectangle + triangle, or circle + rectangle. Calculate each area separately and add or subtract.",
          },
          {
            heading: "Composite volume",
            body: "For composite solids, calculate each volume separately and add. For a cylinder with a hemisphere on top: $V = \\pi r^2 h + \\frac{2}{3}\\pi r^3$.",
          },
          {
            heading: "Pythagorean in composites",
            body: "Use Pythagorean Theorem to find missing dimensions in composite figures. For a rectangle with diagonal $d$: $d = \\sqrt{l^2 + w^2}$.",
          },
        ],
        keyFormulas: [
          {
            name: "Composite area",
            statement: "Sum/difference of component areas",
          },
          { name: "Composite volume", statement: "Sum of component volumes" },
          { name: "Pythagorean", statement: "Find missing dimensions" },
        ],
        workedExample: {
          problem:
            "Find area of rectangle ($8 \\times 6$) with triangle ($\\text{base} = 8$, $\\text{height} = 4$) on top.",
          solution: "$48 + \\frac{1}{2}(8)(4) = 48 + 16 = 64$ square units.",
        },
      },
      questions: [
        {
          id: "m8-u8-composite-geometry-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the area of a composite figure made of a rectangle ($10 \\times 4$) and a triangle (base $10$, height $6$)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$70$" },
              { id: "b", text: "$40$" },
              { id: "c", text: "$80$" },
              { id: "d", text: "$100$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Composite area",
                statement: "Sum component areas.",
              },
            ],
            steps: [
              {
                reasoning: "$40 + 30 = 70$.",
                evidence: "70",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $70$",
            commonErrors: ["Forgetting triangle area formula."],
          },
        },
        {
          id: "m8-u8-composite-geometry-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A composite solid is a cylinder ($r = 2$, $h = 5$) topped with a cone ($r = 2$, $h = 3$). Find total volume.",
          response: {
            type: "numeric",
            parts: [{ label: "Volume ($\\pi$)", answer: 28 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cylinder",
                statement: "$V = \\pi r^2 h$",
              },
              {
                kind: "formula",
                name: "Cone",
                statement: "$V = \\frac{1}{3}\\pi r^2 h$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cylinder: $\\pi(4)(5) = 20\\pi$; cone: $\\frac{1}{3}\\pi(4)(3) = 4\\pi$; total = $24\\pi$.",
                working: "24\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "24",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$24\\pi$",
            commonErrors: ["In cone, forgetting $\\frac{1}{3}$ factor."],
          },
        },
        {
          id: "m8-u8-composite-geometry-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "Rectangle $6 \\times 8$ with triangle (base $6$, height $5$) on top; find area",
              marks: 1,
            },
            {
              label: "b",
              prompt:
                "Cylinder ($r=3$, $h=4$) with cone ($r=3$, $h=6$) on top; find volume",
              marks: 1,
            },
            {
              label: "c",
              prompt:
                "Square $5 \\times 5$ with circle ($r=2.5$) inscribed; find area outside circle",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Composite",
                statement: "Sum/difference of component areas/volumes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$48 + 15 = 63$.",
                evidence: "63",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Cylinder: $\\pi(9)(4) = 36\\pi$; cone: $\\frac{1}{3}\\pi(9)(6) = 18\\pi$; total = $54\\pi$.",
                evidence: "54pi",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Square: $25$; circle: $\\pi(6.25) \\approx 19.6$; outside = $25 - 19.6 = 5.4$.",
                evidence: "5.4",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $63$ (b) $54\\pi$ (c) $\\approx 5.4$",
            commonErrors: ["In (c), not subtracting correctly."],
          },
        },
        {
          id: "m8-u8-composite-geometry-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "Rectangle $12 \\times 5$ with semicircle ($r=6$) on top; find area",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Cube $4 \\times 4 \\times 4$ with cylinder ($r=2$, $h=4$) drilled through; find remaining volume",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Triangle with sides $5, 12, 13$; find area",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Rectangle $8 \\times 6$; find diagonal",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Area", answer: 116.55 },
              { label: "(b) Volume", answer: 13.73 },
              { label: "(c) Area", answer: 30 },
              { label: "(d) Diagonal", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Composite",
                statement: "Sum/difference of component areas/volumes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Rectangle: $60$; semicircle: $\\frac{1}{2}\\pi(36) = 18\\pi \\approx 56.5$; total = $116.5$.",
                working: "116.5",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Cube: $64$; cylinder: $\\pi(4)(4) = 16\\pi \\approx 50.27$; remaining = $64 - 50.27 = 13.73$.",
                working: "13.73",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Right triangle: $\\frac{1}{2}(5)(12) = 30$.",
                working: "30",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$d = \\sqrt{64 + 36} = \\sqrt{100} = 10$.",
                working: "10",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $\\approx 116.5$ (b) $\\approx 13.7$ (c) $30$ (d) $10$",
            commonErrors: ["In (b), arithmetic error."],
          },
        },
      ],
    },
    {
      id: "m8-u8-transformation-applications",
      title: "Transformation applications",
      skill:
        "Apply transformations to solve geometric problems and analyze coordinate geometry.",
      lesson: {
        sections: [
          {
            heading: "Coordinate geometry",
            body: "Transformations change coordinates systematically. Use them to find images of points, lines, and figures. For a triangle with vertices $(1,2), (3,2), (1,4)$, reflect over y-axis: $(-1,2), (-3,2), (-1,4)$.",
          },
          {
            heading: "Symmetry",
            body: "Figures with symmetry have transformations that map them to themselves. A square has 4 lines of symmetry and rotational symmetry of 90°.",
          },
          {
            heading: "Real-world applications",
            body: "Transformations are used in computer graphics, architecture (rotations for buildings), engineering (reflections for symmetry), and art (dilations for scale models).",
          },
        ],
        keyFormulas: [
          {
            name: "Coordinate",
            statement: "Apply transformation rules to points",
          },
          {
            name: "Symmetry",
            statement: "Transformations that preserve figure",
          },
          {
            name: "Applications",
            statement: "Graphics, architecture, engineering",
          },
        ],
        workedExample: {
          problem:
            "Find image of point $(2, 3)$ after reflection over line $y = x$.",
          solution: "$(2, 3) \\to (3, 2)$ (swap coordinates).",
        },
      },
      questions: [
        {
          id: "m8-u8-transformation-applications-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Reflect point $(3, 5)$ over line $y = x$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(5, 3)$" },
              { id: "b", text: "$(-3, 5)$" },
              { id: "c", text: "$(3, -5)$" },
              { id: "d", text: "$(-5, -3)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Line $y=x$ reflection",
                statement: "Swap coordinates.",
              },
            ],
            steps: [
              {
                reasoning: "$(3,5) \\to (5,3)$.",
                evidence: "(5,3)",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $(5, 3)$",
            commonErrors: ["Not swapping coordinates."],
          },
        },
        {
          id: "m8-u8-transformation-applications-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many lines of symmetry does a square have?",
          response: { type: "numeric", parts: [{ label: "Lines", answer: 4 }] },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Symmetry",
                statement: "Lines that divide figure into mirror images.",
              },
            ],
            steps: [
              {
                reasoning: "Square has 4 lines of symmetry.",
                working: "4",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "State answer.",
                working: "4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$4$",
            commonErrors: ["Not counting all lines."],
          },
        },
        {
          id: "m8-u8-transformation-applications-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Perform each transformation on points.",
          parts: [
            { label: "a", prompt: "Reflect $(2, 4)$ over x-axis", marks: 1 },
            { label: "b", prompt: "Translate $(1, 1)$ by $(3, 2)$", marks: 1 },
            { label: "c", prompt: "Dilate $(2, 3)$ by $k = 2$", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Transformations",
                statement: "Apply coordinate rules.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$(2,4) \\to (2, -4)$.",
                evidence: "(2,-4)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$(1+3, 1+2) = (4, 3)$.",
                evidence: "(4,3)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$(2,3) \\to (4, 6)$.",
                evidence: "(4,6)",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $(2, -4)$ (b) $(4, 3)$ (c) $(4, 6)$",
            commonErrors: ["In (c), adding instead of multiplying."],
          },
        },
        {
          id: "m8-u8-transformation-applications-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            { label: "a", prompt: "Reflect $(4, -2)$ over y-axis", marks: 2 },
            {
              label: "b",
              prompt: "Rotate $(3, 1)$ 90° CCW about origin",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Dilate $(-2, 5)$ by $k = \\frac{1}{2}$",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "How many rotational symmetries does a regular hexagon have?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Transformations",
                statement: "Apply coordinate rules.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$(4,-2) \\to (-4, -2)$.",
                evidence: "(-4,-2)",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$(3,1) \\to (-1, 3)$.",
                evidence: "(-1,3)",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$(-2,5) \\to (-1, 2.5)$.",
                evidence: "(-1,2.5)",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Regular hexagon has 6 rotational symmetries.",
                evidence: "6",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) $(-4, -2)$ (b) $(-1, 3)$ (c) $(-1, 2.5)$ (d) $6$",
            commonErrors: ["In (d), not recognizing rotational symmetry."],
          },
        },
      ],
    },
    {
      id: "m8-u8-integrated-review",
      title: "Integrated geometry review",
      skill:
        "Combine all geometry skills: Pythagorean Theorem, volume, transformations, and problem solving.",
      lesson: {
        sections: [
          {
            heading: "Multi-step problems",
            body: "Complex problems require multiple steps: find dimensions using Pythagorean Theorem, calculate volume, then apply transformations. Break problems into manageable parts.",
          },
          {
            heading: "Coordinate geometry",
            body: "Use transformations to find images of geometric figures. Apply distance formula to find lengths. Use slope to find equations of lines.",
          },
          {
            heading: "Real-world applications",
            body: "Geometry applies to construction (Pythagorean for corners), engineering (volume for materials), computer graphics (transformations for animation), and architecture (symmetry for design).",
          },
        ],
        keyFormulas: [
          { name: "Multi-step", statement: "Break into smaller problems" },
          {
            name: "Coordinate",
            statement: "Transformations + distance + slope",
          },
          { name: "Applications", statement: "Real-world problem solving" },
        ],
        workedExample: {
          problem:
            "A rectangular garden is $12$ m by $5$ m. Find diagonal length and area.",
          solution: "Diagonal = $\\sqrt{144 + 25} = 13$ m; area = $60$ m².",
        },
      },
      questions: [
        {
          id: "m8-u8-integrated-review-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the diagonal of a rectangle with sides $9$ and $12$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$15$" },
              { id: "b", text: "$21$" },
              { id: "c", text: "$\\sqrt{63}$" },
              { id: "d", text: "$\\sqrt{225}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Pythagorean Theorem",
                statement: "$d = \\sqrt{l^2 + w^2}$",
              },
            ],
            steps: [
              {
                reasoning: "$d = \\sqrt{81 + 144} = \\sqrt{225} = 15$.",
                evidence: "15",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $15$",
            commonErrors: ["Adding sides instead of squares."],
          },
        },
        {
          id: "m8-u8-integrated-review-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cylinder has radius $3$ cm and height $10$ cm. Find its volume.",
          response: {
            type: "numeric",
            parts: [{ label: "Volume ($\\pi$ cm³)", answer: 90 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cylinder volume",
                statement: "$V = \\pi r^2 h$",
              },
            ],
            steps: [
              {
                reasoning: "$V = \\pi(9)(10) = 90\\pi$ cm³.",
                working: "90\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "90",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$90\\pi$ cm³",
            commonErrors: ["Using diameter instead of radius."],
          },
        },
        {
          id: "m8-u8-integrated-review-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt: "Find diagonal of rectangle $7 \\times 24$",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Find volume of sphere with $r = 3$",
              marks: 1,
            },
            { label: "c", prompt: "Reflect $(2, 5)$ over y-axis", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Pythagorean Theorem",
                statement: "$d = \\sqrt{l^2 + w^2}$",
              },
              {
                kind: "formula",
                name: "Sphere volume",
                statement: "$V = \\frac{4}{3}\\pi r^3$",
              },
              {
                kind: "formula",
                name: "Reflections",
                statement: "Negate appropriate coordinate.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$d = \\sqrt{49 + 576} = 25$.",
                evidence: "25",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$V = \\frac{4}{3}\\pi(27) = 36\\pi$.",
                evidence: "36pi",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$(2,5) \\to (-2, 5)$.",
                evidence: "(-2,5)",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $25$ (b) $36\\pi$ (c) $(-2, 5)$",
            commonErrors: ["In (a), arithmetic error."],
          },
        },
        {
          id: "m8-u8-integrated-review-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt: "Find diagonal of rectangle $5 \\times 12$",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Find volume of cone with $r = 4$, $h = 9$",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Rotate $(1, 4)$ 90° CW about origin",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Find distance between $(0,0)$ and $(6,8)$",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Diagonal", answer: 13 },
              { label: "(b) Volume ($\\pi$)", answer: 48 },
              { label: "(c) Image", answer: 0 },
              { label: "(d) Distance", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Pythagorean Theorem",
                statement: "$d = \\sqrt{l^2 + w^2}$",
              },
              {
                kind: "formula",
                name: "Cone volume",
                statement: "$V = \\frac{1}{3}\\pi r^2 h$",
              },
              {
                kind: "formula",
                name: "90° CW",
                statement: "$(x,y) \\to (y,-x)$",
              },
              {
                kind: "formula",
                name: "Distance",
                statement: "$d = \\sqrt{\\Delta x^2 + \\Delta y^2}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$d = \\sqrt{25 + 144} = 13$.",
                working: "13",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$V = \\frac{1}{3}\\pi(16)(9) = 48\\pi$.",
                working: "48\\pi",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$(1,4) \\to (4, -1)$.",
                working: "(4,-1)",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$d = \\sqrt{36 + 64} = 10$.",
                working: "10",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $13$ (b) $48\\pi$ (c) $(4, -1)$ (d) $10$",
            commonErrors: ["In (c), using wrong rotation rule."],
          },
        },
      ],
    },
  ],
};
