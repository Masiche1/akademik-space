import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "m7-u7-lesson-7-2",
  code: "7-2",
  title: "Surface Area and Volume",
  goal: "I CAN calculate surface area and volume of prisms, pyramids, cylinders, cones, and spheres.",
  standards: ["7.G.A.1", "7.G.A.2", "7.G.A.3", "7.G.B.4", "7.G.B.5", "7.G.B.6"],
  vocabulary: [
    {
      term: "Surface area",
      definition:
        "The total area of all surfaces of a three-dimensional figure, measured in square units.",
    },
    {
      term: "Volume",
      definition:
        "The amount of space inside a three-dimensional figure, measured in cubic units.",
    },
    {
      term: "Prism",
      definition:
        "A solid with two congruent parallel faces (bases) connected by rectangular faces.",
    },
    {
      term: "Pyramid",
      definition:
        "A solid with a polygonal base and triangular faces meeting at a point.",
    },
    {
      term: "Cylinder",
      definition:
        "A solid with two congruent circular bases connected by a curved surface.",
    },
    {
      term: "Cone",
      definition:
        "A solid with a circular base and a curved surface tapering to a point.",
    },
  ],
  concepts: [
    {
      id: "m7-u7-prisms-volume",
      title: "Prisms: volume and surface area",
      skill:
        "Calculate volume and surface area of rectangular and triangular prisms.",
      lesson: {
        sections: [
          {
            heading: "Volume of a prism",
            body: "Volume of a prism = area of base $\\times$ height: $V = Bh$. For a rectangular prism with length $l$, width $w$, height $h$: $V = lwh$. For a triangular prism, $B = \\frac{1}{2}bh_{triangle}$, so $V = \\frac{1}{2}bh_{triangle} \\times h_{prism}$.",
          },
          {
            heading: "Surface area of a prism",
            body: "Surface area = 2 $\\times$ (area of base) + (perimeter of base) $\\times$ height. For a rectangular prism: $SA = 2(lw + lh + wh)$. For a triangular prism: $SA = 2B + ph$ where $B$ = base area, $p$ = perimeter of base, $h$ = height.",
          },
          {
            heading: "Examples",
            body: "Rectangular prism $4 \\times 3 \\times 2$: $V = 24$ cm³, $SA = 2(12 + 8 + 6) = 52$ cm². Triangular prism with base area $6$ cm², perimeter $12$ cm, height $5$ cm: $V = 30$ cm³, $SA = 2(6) + 12(5) = 72$ cm².",
          },
        ],
        keyFormulas: [
          { name: "Prism volume", statement: "$V = Bh$" },
          { name: "Rectangular prism SA", statement: "$SA = 2(lw + lh + wh)$" },
          { name: "General prism SA", statement: "$SA = 2B + ph$" },
        ],
        workedExample: {
          problem:
            "Find the volume and surface area of a rectangular prism with $l = 5$, $w = 3$, $h = 2$.",
          solution:
            "$V = 5 \\times 3 \\times 2 = 30$. $SA = 2(15 + 10 + 6) = 62$.",
        },
      },
      questions: [
        {
          id: "m7-u7-prisms-volume-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the volume of a rectangular prism with length $6$ cm, width $4$ cm, and height $3$ cm?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$72$ cm³" },
              { id: "b", text: "$13$ cm³" },
              { id: "c", text: "$24$ cm³" },
              { id: "d", text: "$36$ cm³" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rectangular prism volume",
                statement: "$V = lwh$.",
              },
            ],
            steps: [
              {
                reasoning: "$V = 6 \\times 4 \\times 3 = 72$ cm³.",
                working: "6 \\times 4 \\times 3 = 72",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $72$ cm³",
            commonErrors: ["Adding dimensions instead of multiplying."],
          },
        },
        {
          id: "m7-u7-prisms-volume-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the surface area of a cube with edge length $5$ cm?",
          response: {
            type: "numeric",
            parts: [{ label: "SA (cm²)", answer: 150 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cube surface area",
                statement: "$SA = 6s^2$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A cube has 6 congruent square faces: $SA = 6 \\times 5^2 = 6 \\times 25 = 150$.",
                working: "6 \\times 25 = 150",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "150\\text{ cm}^2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$150$ cm²",
            commonErrors: ["Using $6s$ instead of $6s^2$."],
          },
        },
        {
          id: "m7-u7-prisms-volume-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A triangular prism has a base that is a right triangle with legs $3$ cm and $4$ cm, and height $10$ cm. Find its volume.",
          response: {
            type: "numeric",
            parts: [{ label: "Volume (cm³)", answer: 60 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Prism volume",
                statement: "$V = Bh$; $B = \\frac{1}{2}bh$ for triangle.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Base area = $\\frac{1}{2} \\times 3 \\times 4 = 6$ cm².",
                working: "B = 6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Volume = $6 \\times 10 = 60$ cm³.",
                working: "V = 60",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "60\\text{ cm}^3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$60$ cm³",
            commonErrors: [
              "Using $bh$ instead of $\\frac{1}{2}bh$ for triangle area.",
            ],
          },
        },
        {
          id: "m7-u7-prisms-volume-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "Find the volume of a rectangular prism with $l = 8$, $w = 5$, $h = 3$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Find the surface area of a rectangular prism with $l = 4$, $w = 3$, $h = 2$.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "A cube has volume $64$ cm³. What is its surface area?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "A triangular prism has base area $12$ cm² and height $7$ cm. Find its volume.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Volume (cm³)", answer: 120 },
              { label: "(b) SA (cm²)", answer: 52 },
              { label: "(c) SA (cm²)", answer: 96 },
              { label: "(d) Volume (cm³)", answer: 84 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Prism volume", statement: "$V = Bh$" },
              {
                kind: "formula",
                name: "Surface area",
                statement: "$SA = 2(lw + lh + wh)$ for rectangular prism.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$V = 8 \\times 5 \\times 3 = 120$ cm³.",
                working: "120",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$SA = 2(12 + 8 + 6) = 52$ cm².",
                working: "52",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Edge = $\\sqrt[3]{64} = 4$ cm; $SA = 6 \\times 16 = 96$ cm².",
                working: "96",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State answer.",
                working: "96\\text{ cm}^2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "$V = 12 \\times 7 = 84$ cm³.",
                working: "84",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $120$ cm³ (b) $52$ cm² (c) $96$ cm² (d) $84$ cm³",
          },
        },
      ],
    },
    {
      id: "m7-u7-cylinders-cones",
      title: "Cylinders and cones",
      skill: "Calculate volume and surface area of cylinders and cones.",
      lesson: {
        sections: [
          {
            heading: "Cylinder volume and surface area",
            body: "Cylinder volume: $V = \\pi r^2 h$. Surface area: $SA = 2\\pi r^2 + 2\\pi rh = 2\\pi r(r + h)$. For $r = 3$, $h = 5$: $V = \\pi(9)(5) = 45\\pi$ cm³; $SA = 2\\pi(3)(3+5) = 48\\pi$ cm².",
          },
          {
            heading: "Cone volume and surface area",
            body: "Cone volume: $V = \\frac{1}{3}\\pi r^2 h$. Surface area: $SA = \\pi r^2 + \\pi rl$ where $l$ = slant height, $l = \\sqrt{r^2 + h^2}$. For $r = 3$, $h = 4$: $l = 5$; $V = \\frac{1}{3}\\pi(9)(4) = 12\\pi$ cm³; $SA = \\pi(9) + \\pi(3)(5) = 24\\pi$ cm².",
          },
          {
            heading: "Key differences",
            body: "A cone's volume is $\\frac{1}{3}$ that of a cylinder with the same base and height. A cylinder has two circular bases; a cone has one circular base and a point. The slant height is the distance from the base edge to the apex along the curved surface.",
          },
        ],
        keyFormulas: [
          { name: "Cylinder volume", statement: "$V = \\pi r^2 h$" },
          { name: "Cylinder SA", statement: "$SA = 2\\pi r^2 + 2\\pi rh$" },
          { name: "Cone volume", statement: "$V = \\frac{1}{3}\\pi r^2 h$" },
          { name: "Cone SA", statement: "$SA = \\pi r^2 + \\pi rl$" },
        ],
        workedExample: {
          problem:
            "Find the volume of a cone with radius $6$ cm and height $10$ cm.",
          solution:
            "$V = \\frac{1}{3}\\pi(36)(10) = 120\\pi \\approx 377$ cm³.",
        },
      },
      questions: [
        {
          id: "m7-u7-cylinders-cones-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the volume of a cylinder with radius $4$ cm and height $10$ cm?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$40\\pi$ cm³" },
              { id: "b", text: "$160\\pi$ cm³" },
              { id: "c", text: "$80\\pi$ cm³" },
              { id: "d", text: "$400\\pi$ cm³" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cylinder volume",
                statement: "$V = \\pi r^2 h$.",
              },
            ],
            steps: [
              {
                reasoning: "$V = \\pi(16)(10) = 160\\pi$ cm³.",
                working: "160\\pi",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** $160\\pi$ cm³",
            commonErrors: ["Using $2\\pi r h$ instead of $\\pi r^2 h$."],
          },
        },
        {
          id: "m7-u7-cylinders-cones-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the volume of a cone with radius $5$ cm and height $12$ cm?",
          response: {
            type: "numeric",
            parts: [{ label: "Volume ($\\pi$ cm³)", answer: 100 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cone volume",
                statement: "$V = \\frac{1}{3}\\pi r^2 h$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$V = \\frac{1}{3}\\pi(25)(12) = \\frac{300}{3}\\pi = 100\\pi$ cm³.",
                working: "100\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "100\\pi\\text{ cm}^3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$100\\pi$ cm³",
            commonErrors: ["Forgetting the $\\frac{1}{3}$ factor."],
          },
        },
        {
          id: "m7-u7-cylinders-cones-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A cylinder has radius $3$ cm and height $8$ cm. What is its surface area?",
          response: {
            type: "numeric",
            parts: [{ label: "SA ($\\pi$ cm²)", answer: 66 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cylinder surface area",
                statement: "$SA = 2\\pi r^2 + 2\\pi rh$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$SA = 2\\pi(9) + 2\\pi(3)(8) = 18\\pi + 48\\pi = 66\\pi$ cm².",
                working: "66\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "66\\pi\\text{ cm}^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Verify: $18 + 48 = 66$ ✓.",
                working: "66",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$66\\pi$ cm²",
            commonErrors: [
              "Using $\\pi r^2$ for lateral surface instead of $2\\pi rh$.",
            ],
          },
        },
        {
          id: "m7-u7-cylinders-cones-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "Find the volume of a cylinder with $r = 7$ cm and $h = 4$ cm.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Find the volume of a cone with $r = 6$ cm and $h = 9$ cm.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "A cylinder and a cone have the same base and height. If the cylinder's volume is $180\\pi$ cm³, what is the cone's volume?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Find the surface area of a cylinder with $r = 5$ cm and $h = 10$ cm.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Volume ($\\pi$ cm³)", answer: 196 },
              { label: "(b) Volume ($\\pi$ cm³)", answer: 108 },
              { label: "(c) Cone volume ($\\pi$ cm³)", answer: 60 },
              { label: "(d) SA ($\\pi$ cm²)", answer: 150 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cylinder volume",
                statement: "$V = \\pi r^2 h$.",
              },
              {
                kind: "formula",
                name: "Cone volume",
                statement: "$V = \\frac{1}{3}\\pi r^2 h$.",
              },
              {
                kind: "property",
                name: "Cone-cylinder ratio",
                statement:
                  "Cone volume = $\\frac{1}{3}$ cylinder volume with same base and height.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$V = \\pi(49)(4) = 196\\pi$ cm³.",
                working: "196\\pi",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$V = \\frac{1}{3}\\pi(36)(9) = \\frac{324}{3}\\pi = 108\\pi$ cm³.",
                working: "108\\pi",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Cone = $\\frac{1}{3} \\times 180\\pi = 60\\pi$ cm³.",
                working: "60\\pi",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "$SA = 2\\pi(25) + 2\\pi(5)(10) = 50\\pi + 100\\pi = 150\\pi$ cm².",
                working: "150\\pi",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $196\\pi$ cm³ (b) $108\\pi$ cm³ (c) $60\\pi$ cm³ (d) $150\\pi$ cm²",
          },
        },
      ],
    },
    {
      id: "m7-u7-spheres",
      title: "Spheres",
      skill: "Calculate volume and surface area of spheres.",
      lesson: {
        sections: [
          {
            heading: "Sphere volume and surface area",
            body: "Sphere volume: $V = \\frac{4}{3}\\pi r^3$. Surface area: $SA = 4\\pi r^2$. For $r = 3$: $V = \\frac{4}{3}\\pi(27) = 36\\pi$ cm³; $SA = 4\\pi(9) = 36\\pi$ cm². Note that for $r = 3$, volume and surface area have the same numerical coefficient but different units.",
          },
          {
            heading: "Hemisphere",
            body: "A hemisphere is half a sphere. Volume = $\\frac{1}{2} \\times \\frac{4}{3}\\pi r^3 = \\frac{2}{3}\\pi r^3$. Surface area includes the curved surface plus the circular base: $SA = 2\\pi r^2 + \\pi r^2 = 3\\pi r^2$.",
          },
          {
            heading: "Applications",
            body: "Spheres model balls, planets, and bubbles. To find the volume of a sphere given diameter, divide by $2$ first: diameter $12$ cm → radius $6$ cm → $V = \\frac{4}{3}\\pi(216) = 288\\pi$ cm³.",
          },
        ],
        keyFormulas: [
          { name: "Sphere volume", statement: "$V = \\frac{4}{3}\\pi r^3$" },
          { name: "Sphere surface area", statement: "$SA = 4\\pi r^2$" },
          {
            name: "Hemisphere volume",
            statement: "$V = \\frac{2}{3}\\pi r^3$",
          },
        ],
        workedExample: {
          problem: "Find the surface area of a sphere with radius $7$ cm.",
          solution: "$SA = 4\\pi(49) = 196\\pi \\approx 615.8$ cm².",
        },
      },
      questions: [
        {
          id: "m7-u7-spheres-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the volume of a sphere with radius $3$ cm?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$36\\pi$ cm³" },
              { id: "b", text: "$27\\pi$ cm³" },
              { id: "c", text: "$\\frac{4}{3}\\pi$ cm³" },
              { id: "d", text: "$108\\pi$ cm³" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Sphere volume",
                statement: "$V = \\frac{4}{3}\\pi r^3$.",
              },
            ],
            steps: [
              {
                reasoning: "$V = \\frac{4}{3}\\pi(27) = 36\\pi$ cm³.",
                working: "36\\pi",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $36\\pi$ cm³",
            commonErrors: ["Using $r^2$ instead of $r^3$."],
          },
        },
        {
          id: "m7-u7-spheres-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the surface area of a sphere with radius $5$ cm?",
          response: {
            type: "numeric",
            parts: [{ label: "SA ($\\pi$ cm²)", answer: 100 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Sphere surface area",
                statement: "$SA = 4\\pi r^2$.",
              },
            ],
            steps: [
              {
                reasoning: "$SA = 4\\pi(25) = 100\\pi$ cm².",
                working: "100\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "100\\pi\\text{ cm}^2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$100\\pi$ cm²",
            commonErrors: [
              "Using $\\frac{4}{3}\\pi r^3$ instead of $4\\pi r^2$.",
            ],
          },
        },
        {
          id: "m7-u7-spheres-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A hemisphere has radius $6$ cm. Find its volume.",
          response: {
            type: "numeric",
            parts: [{ label: "Volume ($\\pi$ cm³)", answer: 144 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Hemisphere volume",
                statement: "$V = \\frac{2}{3}\\pi r^3$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$V = \\frac{2}{3}\\pi(216) = \\frac{432}{3}\\pi = 144\\pi$ cm³.",
                working: "144\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "144\\pi\\text{ cm}^3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Verify: $\\frac{2}{3} \\times 216 = 144$ ✓.",
                working: "144",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$144\\pi$ cm³",
            commonErrors: [
              "Using $\\frac{4}{3}\\pi r^3$ (full sphere) instead of $\\frac{2}{3}\\pi r^3$.",
            ],
          },
        },
        {
          id: "m7-u7-spheres-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt: "Find the volume of a sphere with radius $9$ cm.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Find the surface area of a sphere with diameter $14$ cm.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "A sphere has volume $\\frac{4}{3}\\pi$ cm³. What is its radius?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "What is the surface area of a hemisphere with radius $4$ cm? (Include the base.)",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Volume ($\\pi$ cm³)", answer: 972 },
              { label: "(b) SA ($\\pi$ cm²)", answer: 196 },
              { label: "c) Radius (cm)", answer: 1 },
              { label: "(d) SA ($\\pi$ cm²)", answer: 48 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Sphere volume",
                statement: "$V = \\frac{4}{3}\\pi r^3$.",
              },
              {
                kind: "formula",
                name: "Sphere surface area",
                statement: "$SA = 4\\pi r^2$.",
              },
              {
                kind: "formula",
                name: "Hemisphere SA",
                statement: "$SA = 3\\pi r^2$ (curved + base).",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$V = \\frac{4}{3}\\pi(729) = 972\\pi$ cm³.",
                working: "972\\pi",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Radius = $7$ cm; $SA = 4\\pi(49) = 196\\pi$ cm².",
                working: "196\\pi",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "$\\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi$ → $r^3 = 1$ → $r = 1$ cm.",
                working: "r = 1",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$SA = 2\\pi(16) + \\pi(16) = 48\\pi$ cm².",
                working: "48\\pi",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $972\\pi$ cm³ (b) $196\\pi$ cm² (c) $1$ cm (d) $48\\pi$ cm²",
          },
        },
      ],
    },
    {
      id: "m7-u7-composite-solids",
      title: "Composite solids",
      skill:
        "Decompose complex figures into simpler solids to find volume and surface area.",
      lesson: {
        sections: [
          {
            heading: "Decomposition strategy",
            body: "For composite solids, break the figure into simpler shapes (prisms, cylinders, cones, spheres) whose volumes you can calculate. Volume = sum of individual volumes. For surface area, identify all exposed surfaces — faces that are internal (where solids join) are not counted.",
          },
          {
            heading: "Volume of composite figures",
            body: "Example: a cylinder with a cone on top. Volume = cylinder volume + cone volume = $\\pi r^2 h_1 + \\frac{1}{3}\\pi r^2 h_2$. Example: a rectangular prism with a smaller prism removed: Volume = large prism - small prism.",
          },
          {
            heading: "Surface area considerations",
            body: "For surface area, only count exposed surfaces. If a cone sits on a cylinder, the cone's base is internal and not counted. Draw the figure and label each face to ensure accuracy.",
          },
        ],
        keyFormulas: [
          { name: "Volume", statement: "Sum of individual volumes" },
          {
            name: "Surface area",
            statement: "Sum of exposed surface areas only",
          },
          { name: "Decomposition", statement: "Break into simpler shapes" },
        ],
        workedExample: {
          problem:
            "A silo consists of a cylinder (radius $3$ m, height $10$ m) topped by a cone (height $4$ m). Find the total volume.",
          solution:
            "Cylinder: $\\pi(9)(10) = 90\\pi$. Cone: $\\frac{1}{3}\\pi(9)(4) = 12\\pi$. Total: $102\\pi \\approx 320.4$ m³.",
        },
      },
      questions: [
        {
          id: "m7-u7-composite-solids-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A figure is made of two cubes, each with edge $4$ cm. What is the total volume?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$128$ cm³" },
              { id: "b", text: "$64$ cm³" },
              { id: "c", text: "$32$ cm³" },
              { id: "d", text: "$256$ cm³" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Composite volume",
                statement: "Sum of individual volumes.",
              },
            ],
            steps: [
              {
                reasoning: "Each cube: $4^3 = 64$ cm³; two cubes: $128$ cm³.",
                working: "2 \\times 64 = 128",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $128$ cm³",
            commonErrors: ["Adding edge lengths instead of volumes."],
          },
        },
        {
          id: "m7-u7-composite-solids-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A rectangular prism ($8 \\times 4 \\times 3$) has a smaller prism ($4 \\times 2 \\times 1$) removed from one corner. What is the remaining volume?",
          response: {
            type: "numeric",
            parts: [{ label: "Volume (cm³)", answer: 88 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Composite volume",
                statement: "Large volume - small volume.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Large: $8 \\times 4 \\times 3 = 96$; small: $4 \\times 2 \\times 1 = 8$.",
                working: "96 - 8",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Remaining = $96 - 8 = 88$ cm³.",
                working: "88",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$88$ cm³",
            commonErrors: ["Adding volumes instead of subtracting."],
          },
        },
        {
          id: "m7-u7-composite-solids-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A cylinder (radius $4$ cm, height $6$ cm) has a hemisphere (radius $4$ cm) on top. Find the total volume.",
          response: {
            type: "numeric",
            parts: [{ label: "Volume ($\\pi$ cm³)", answer: 128 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cylinder volume",
                statement: "$V = \\pi r^2 h$.",
              },
              {
                kind: "formula",
                name: "Hemisphere volume",
                statement: "$V = \\frac{2}{3}\\pi r^3$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cylinder: $\\pi(16)(6) = 96\\pi$; hemisphere: $\\frac{2}{3}\\pi(64) = \\frac{128}{3}\\pi$.",
                working: "96\\pi + \\frac{128}{3}\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Total = $\\frac{288\\pi + 128\\pi}{3} = \\frac{416\\pi}{3}$? Wait, recheck: $96 = \\frac{288}{3}$, so total = $\\frac{288 + 128}{3}\\pi = \\frac{416}{3}\\pi$. Hmm, let me recompute: $96\\pi + \\frac{128}{3}\\pi = \\frac{288\\pi}{3} + \\frac{128\\pi}{3} = \\frac{416\\pi}{3} \\approx 435.7\\pi$? No: $\\frac{416}{3} \\approx 138.7$, so total = $138.7\\pi$. Let me recheck: $96\\pi = \\frac{288\\pi}{3}$. $\\frac{288 + 128}{3} = \\frac{416}{3}$. So answer = $\\frac{416}{3}\\pi \\approx 435.7$ cm³? Wait, $\\frac{416}{3} \\approx 138.67$, times $\\pi \\approx 435.7$. So total = $\\frac{416\\pi}{3}$ cm³ or approximately $435.7$ cm³.",
                working: "\\frac{416\\pi}{3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "\\frac{416\\pi}{3} \\approx 435.7\\text{ cm}^3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{416\\pi}{3} \\approx 435.7$ cm³",
            commonErrors: ["Using full sphere instead of hemisphere."],
            examinerNote: "Accept $\\frac{416}{3}\\pi$ or $435.7$.",
          },
        },
        {
          id: "m7-u7-composite-solids-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "A silo consists of a cylinder ($r = 3$ m, $h = 10$ m) topped by a cone ($h = 4$ m). Find the total volume.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "A rectangular prism ($10 \\times 6 \\times 4$) has a cylinder ($r = 2$, $h = 4$) removed from the center. Find the remaining volume.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Two spheres each have radius $3$ cm. What is the total volume?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "A cone ($r = 5$, $h = 12$) is placed on top of a cylinder ($r = 5$, $h = 8$). Find the total surface area of the exposed surfaces.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Volume ($\\pi$ m³)", answer: 102 },
              { label: "(b) Volume (cm³)", answer: 189.73 },
              { label: "(c) Volume ($\\pi$ cm³)", answer: 72 },
              { label: "(d) SA ($\\pi$ cm²)", answer: 170 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Composite volume",
                statement: "Sum or difference of individual volumes.",
              },
              {
                kind: "formula",
                name: "Surface area",
                statement: "Only exposed surfaces.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Cylinder: $\\pi(9)(10) = 90\\pi$; cone: $\\frac{1}{3}\\pi(9)(4) = 12\\pi$; total = $102\\pi$ m³.",
                working: "102\\pi",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Prism: $10 \\times 6 \\times 4 = 240$; cylinder: $\\pi(4)(4) = 16\\pi \\approx 50.27$; remaining = $240 - 16\\pi \\approx 189.73$ cm³.",
                working: "240 - 16\\pi \\approx 189.73",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State answer.",
                working: "189.73\\text{ cm}^3",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Each sphere: $\\frac{4}{3}\\pi(27) = 36\\pi$; two spheres: $72\\pi$ cm³.",
                working: "72\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State answer.",
                working: "72\\pi\\text{ cm}^3",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Cylinder lateral = $2\\pi(5)(8) = 80\\pi$; cone lateral = $\\pi(5)(13) = 65\\pi$; cylinder base = $\\pi(25) = 25\\pi$; total exposed = $170\\pi$ cm².",
                working: "170\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "State answer.",
                working: "170\\pi\\text{ cm}^2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $102\\pi$ m³ (b) $240 - 16\\pi \\approx 189.73$ cm³ (c) $72\\pi$ cm³ (d) $170\\pi$ cm²",
            commonErrors: ["In (d), counting the shared base twice."],
          },
        },
      ],
    },
  ],
};
