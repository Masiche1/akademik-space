import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "cimg-u5-lesson-5-2",
  code: "5-2",
  title: "Surface Area and Volume",
  goal: "I CAN calculate surface area and volume of 3D shapes.",
  standards: ["Cambridge IGCSE Mathematics 0580 Core: mensuration"],
  vocabulary: [
    { term: "Volume", definition: "Space inside a 3D shape, in cubic units." },
    { term: "Surface area", definition: "Total area of all faces." },
    { term: "Prism", definition: "Solid with constant cross-section." },
    { term: "Cylinder", definition: "Prism with circular cross-section." },
    { term: "Pyramid", definition: "Solid with triangular faces meeting at apex." },
  ],
  concepts: [
    {
      id: "cimg-u5-s2-prisms",
      title: "Prisms and cylinders",
      skill: "Calculate volume and surface area of prisms at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Prisms",
            body: "Volume of any prism $= $ cross-sectional area $\\times$ length. Cuboid: $V = lwh$. Surface area: sum of all faces.",
          },
          {
            heading: "Cylinders",
            body: "$V = \\pi r^2 h$. Surface area $= 2\\pi r^2 + 2\\pi r h$ (two circles + curved surface).",
          },
        ],
        keyFormulas: [
          { name: "Cuboid", statement: "$V = lwh$" },
          { name: "Cylinder", statement: "$V = \\pi r^2 h$" },
          { name: "Cylinder SA", statement: "$2\\pi r^2 + 2\\pi r h$" },
        ],
        workedExample: {
          problem: "Find the volume of a cylinder radius 3 cm, height 10 cm.",
          solution: "$V = \\pi \\times 9 \\times 10 = 90\\pi \\approx 282.7$ cm³.",
        },
      },
      questions: [
        {
          id: "cimg-u5-s2-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the volume of a cuboid 4×3×2.",
          response: { type: "mcq", choices: [
            { id: "a", text: "9" },
            { id: "b", text: "24" },
            { id: "c", text: "48" },
            { id: "d", text: "12" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "Cuboid volume", statement: "$lwh$." }],
            steps: [{ reasoning: "$4 \\times 3 \\times 2 = 24$.", marks: 1, markCode: "A" }],
            finalAnswer: "24",
          },
        },
        {
          id: "cimg-u5-s2-pr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the surface area of a cube with side 3.",
          response: { type: "numeric", parts: [{ label: "a", answer: 54 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Cube SA", statement: "$6 \\times$ face area." }],
            steps: [
              { reasoning: "Each face $= 9$; total $= 6 \\times 9 = 54$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 54 square units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "54",
          },
        },
        {
          id: "cimg-u5-s2-pr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the volume of a cylinder radius 2 cm and height 5 cm. Use $\\pi = 3.14$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 62.8, tolerance: 0.1, unit: "cm³" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Cylinder volume", statement: "$\\pi r^2 h$." }],
            steps: [
              { reasoning: "$V = 3.14 \\times 4 \\times 5$.", marks: 1, markCode: "M" },
              { reasoning: "$V = 62.8$ cm³.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 62.8 cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "62.8 cm³",
          },
        },
        {
          id: "cimg-u5-s2-pr-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: ". Find its capacity in litres (1 m³ = 1000 litres).",
          response: { type: "numeric", parts: [{ label: "a", answer: 3000, unit: "litres" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Volume conversion", statement: "Calculate then convert." }],
            steps: [
              { reasoning: "$V = 2 \\times 1.5 \\times 1 = 3$ m³.", marks: 1, markCode: "M" },
              { reasoning: "$3 \\times 1000 = 3000$ litres.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3000 litres.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3000 litres",
          },
        },
        {
          id: "cimg-u5-s2-pr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The volume of any prism equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Surface area × length" },
            { id: "b", text: "$\\frac{1}{3} \\times$ base area $\\times$ height" },
            { id: "c", text: "Base × height" },
            { id: "d", text: "Cross-sectional area × length" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "formula", name: "Prism volume", statement: "Cross-section × length." }],
            steps: [{ reasoning: "Volume of a prism = cross-sectional area times length.", marks: 1, markCode: "A" }],
            finalAnswer: "Cross-sectional area × length",
          },
        },
        {
          id: "cimg-u5-s2-pr-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the volume of a cuboid measuring 5 cm by 4 cm by 3 cm.",
          response: { type: "numeric", parts: [{ label: "a", answer: 60, unit: "cm³" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Cuboid volume", statement: "$lwh$." }],
            steps: [
              { reasoning: "$V = 5 \\times 4 \\times 3 = 60$ cm³.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 60 cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60 cm³",
          },
        },
        {
          id: "cimg-u5-s2-pr-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the volume of a cube with side 5 cm?",
          response: { type: "mcq", choices: [
            { id: "a", text: "25 cm³" },
            { id: "b", text: "15 cm³" },
            { id: "c", text: "125 cm³" },
            { id: "d", text: "100 cm³" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "formula", name: "Cuboid volume", statement: "$lwh$ with $l=w=h$." }],
            steps: [{ reasoning: "$V = 5^3 = 125$ cm³.", marks: 1, markCode: "A" }],
            finalAnswer: "125 cm³",
          },
        },
        {
          id: "cimg-u5-s2-pr-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the volume of a cylinder with radius 3 cm and height 4 cm. Use $\\pi = 3.14$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 113.04, tolerance: 0.01, unit: "cm³" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Cylinder volume", statement: "$\\pi r^2 h$." }],
            steps: [
              { reasoning: "$V = 3.14 \\times 9 \\times 4$.", marks: 1, markCode: "M" },
              { reasoning: "$V = 113.04$ cm³.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 113.04 cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "113.04 cm³",
          },
        },
        {
          id: "cimg-u5-s2-pr-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The total surface area of a cuboid is found by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Multiplying length × width × height" },
            { id: "b", text: "Halving the volume" },
            { id: "c", text: "Adding the areas of all six faces" },
            { id: "d", text: "Adding length, width and height" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Surface area", statement: "Sum of all faces." }],
            steps: [{ reasoning: "Surface area is the sum of the areas of all faces.", marks: 1, markCode: "A" }],
            finalAnswer: "Sum of all six faces",
          },
        },
        {
          id: "cimg-u5-s2-pr-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the total surface area of a cylinder with radius 2 cm and height 5 cm. Use $\\pi = 3.14$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 87.92, tolerance: 0.01, unit: "cm²" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Cylinder SA", statement: "$2\\pi r^2 + 2\\pi r h$." }],
            steps: [
              { reasoning: "Ends: $2 \\times 3.14 \\times 4 = 25.12$; curved: $2 \\times 3.14 \\times 2 \\times 5 = 62.8$.", marks: 1, markCode: "M" },
              { reasoning: "Total $= 25.12 + 62.8 = 87.92$ cm².", marks: 1, markCode: "M" },
              { reasoning: "Answer: 87.92 cm².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "87.92 cm²",
          },
        },
        {
          id: "cimg-u5-s2-pr-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "A triangular prism has cross-sectional area 12 cm² and length 10 cm. Find its volume.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Prism volume", statement: "Cross-section × length." }],
            steps: [
              { reasoning: "Volume of any prism $= $ cross-sectional area $\\times$ length.", marks: 1, markCode: "M" },
              { reasoning: "$V = 12 \\times 10 = 120$ cm³.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 120 cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "120 cm³",
          },
        },
        {
          id: "cimg-u5-s2-pr-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the volume of a cylinder with radius 7 cm and height 10 cm. Give your answer in terms of $\\pi$ and then evaluate it using $\\pi = 3.14$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1538.6, tolerance: 0.1, unit: "cm³" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Cylinder volume", statement: "$\\pi r^2 h$." }],
            steps: [
              { reasoning: "$V = \\pi \\times 49 \\times 10 = 490\\pi$ cm³.", marks: 1, markCode: "M" },
              { reasoning: "$V = 490 \\times 3.14$.", marks: 1, markCode: "M" },
              { reasoning: "$V = 1538.6$ cm³.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $1538.6$ cm³ (or $490\\pi$ cm³).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1538.6 cm³",
          },
        },
        {
          id: "cimg-u5-s2-pr-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the total surface area of a cuboid measuring 6 cm by 4 cm by 2 cm, showing all your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cuboid SA", statement: "Sum of three pairs of faces." }],
            steps: [
              { reasoning: "Faces: $6 \\times 4 = 24$ (×2), $6 \\times 2 = 12$ (×2), $4 \\times 2 = 8$ (×2).", marks: 1, markCode: "M" },
              { reasoning: "Total $= 2(24 + 12 + 8) = 2 \\times 44$.", marks: 1, markCode: "M" },
              { reasoning: "$= 88$ cm².", marks: 1, markCode: "M" },
              { reasoning: "Answer: 88 cm².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "88 cm²",
          },
        },
        {
          id: "cimg-u5-s2-pr-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "The formula for the volume of a cylinder is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2\\pi r h$" },
            { id: "b", text: "$\\pi r h$" },
            { id: "c", text: "$\\frac{1}{3}\\pi r^2 h$" },
            { id: "d", text: "$\\pi r^2 h$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "formula", name: "Cylinder volume", statement: "$\\pi r^2 h$." }],
            steps: [{ reasoning: "Cylinder volume $= \\pi r^2 h$ (circle area times height).", marks: 1, markCode: "A" }],
            finalAnswer: "$\\pi r^2 h$",
          },
        },
        {
          id: "cimg-u5-s2-pr-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A cylindrical pipe has radius 0.1 m and length 50 m. Find its volume. Use $\\pi = 3.14$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Cylinder volume", statement: "$\\pi r^2 h$." }],
            steps: [
              { reasoning: "$V = 3.14 \\times 0.01 \\times 50$.", marks: 1, markCode: "M" },
              { reasoning: "$V = 1.57$ m³.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1.57 m³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.57 m³",
          },
        },
        {
          id: "cimg-u5-s2-pr-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the surface area of a cube with side 4 cm?",
          response: { type: "mcq", choices: [
            { id: "a", text: "96 cm²" },
            { id: "b", text: "32 cm²" },
            { id: "c", text: "64 cm²" },
            { id: "d", text: "48 cm²" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cube SA", statement: "$6 \\times$ face area." }],
            steps: [{ reasoning: "$6 \\times 4^2 = 6 \\times 16 = 96$ cm².", marks: 1, markCode: "A" }],
            finalAnswer: "96 cm²",
          },
        },
      ],
    },
    {
      id: "cimg-u5-s2-pyramids",
      title: "Pyramids and cones",
      skill: "Calculate volume of pyramids and cones at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Pyramid",
            body: "$V = \\frac{1}{3} \\times$ base area $\\times$ perpendicular height. A square pyramid: $V = \\frac{1}{3} \\times s^2 \\times h$.",
          },
          {
            heading: "Cone",
            body: "$V = \\frac{1}{3} \\pi r^2 h$ — one-third of the cylinder with same base and height.",
          },
        ],
        keyFormulas: [
          { name: "Pyramid", statement: "$V = \\frac{1}{3} \\times$ base area $\\times h$" },
          { name: "Cone", statement: "$V = \\frac{1}{3} \\pi r^2 h$" },
        ],
        workedExample: {
          problem: "Find the volume of a cone radius 3, height 4 (use $\\pi = 3.14$).",
          solution: "$V = \\frac{1}{3} \\times 3.14 \\times 9 \\times 4 = 37.68$.",
        },
      },
      questions: [
        {
          id: "cimg-u5-s2-py-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A cone has the same base and height as a cylinder. The cone's volume is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Twice the cylinder" },
            { id: "b", text: "One-third of the cylinder" },
            { id: "c", text: "Half the cylinder" },
            { id: "d", text: "Same as cylinder" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Cone vs cylinder", statement: "$\\frac{1}{3}$ factor." }],
            steps: [{ reasoning: "$V_{cone} = \\frac{1}{3} V_{cylinder}$.", marks: 1, markCode: "A" }],
            finalAnswer: "One-third",
          },
        },
        {
          id: "cimg-u5-s2-py-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the volume of a square pyramid with base side 6 and height 5.",
          response: { type: "numeric", parts: [{ label: "a", answer: 60 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Pyramid", statement: "$\\frac{1}{3}bh$." }],
            steps: [
              { reasoning: "$V = \\frac{1}{3} \\times 36 \\times 5 = 60$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 60 cubic units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60",
          },
        },
        {
          id: "cimg-u5-s2-py-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the volume of a cone radius 6 cm, height 10 cm. Use $\\pi = 3.14$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 376.8, tolerance: 0.1, unit: "cm³" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Cone volume", statement: "$\\frac{1}{3}\\pi r^2 h$." }],
            steps: [
              { reasoning: "$V = \\frac{1}{3} \\times 3.14 \\times 36 \\times 10$.", marks: 1, markCode: "M" },
              { reasoning: "$V = 376.8$ cm³.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 376.8 cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "376.8 cm³",
          },
        },
        {
          id: "cimg-u5-s2-py-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: " (cone) is filled with ice cream. Cone radius 3 cm, height 10 cm. Find the ice cream volume (use $\\pi = 3.14$).",
          response: { type: "numeric", parts: [{ label: "a", answer: 94.2, tolerance: 0.1, unit: "cm³" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Cone in context", statement: "Apply cone formula." }],
            steps: [
              { reasoning: "$V = \\frac{1}{3} \\times 3.14 \\times 9 \\times 10$.", marks: 1, markCode: "M" },
              { reasoning: "$V = 94.2$ cm³.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 94.2 cm³ of ice cream.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "94.2 cm³",
          },
        },
        {
          id: "cimg-u5-s2-py-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The volume of a pyramid is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{1}{3} \\times$ base area $\\times$ perpendicular height" },
            { id: "b", text: "$\\frac{1}{2} \\times$ base $\\times$ height" },
            { id: "c", text: "Base area $+$ height" },
            { id: "d", text: "Base area $\\times$ height" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "Pyramid", statement: "$V = \\frac{1}{3} \\times$ base area $\\times h$." }],
            steps: [{ reasoning: "Pyramid volume has the $\\frac{1}{3}$ factor.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{1}{3} \\times$ base area $\\times$ height",
          },
        },
        {
          id: "cimg-u5-s2-py-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the volume of a square-based pyramid with base side 4 cm and perpendicular height 9 cm.",
          response: { type: "numeric", parts: [{ label: "a", answer: 48, unit: "cm³" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Pyramid", statement: "$\\frac{1}{3}bh$." }],
            steps: [
              { reasoning: "$V = \\frac{1}{3} \\times 16 \\times 9 = 48$ cm³.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 48 cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "48 cm³",
          },
        },
        {
          id: "cimg-u5-s2-py-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A cone has radius 3 cm and height 7 cm. Using $\\pi = 3.14$, its volume is approximately…",
          response: { type: "mcq", choices: [
            { id: "a", text: "197.82 cm³" },
            { id: "b", text: "21.98 cm³" },
            { id: "c", text: "92.36 cm³" },
            { id: "d", text: "65.94 cm³" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "formula", name: "Cone volume", statement: "$\\frac{1}{3}\\pi r^2 h$." }],
            steps: [{ reasoning: "$V = \\frac{1}{3} \\times 3.14 \\times 9 \\times 7 = 65.94$ cm³.", marks: 1, markCode: "A" }],
            finalAnswer: "65.94 cm³",
          },
        },
        {
          id: "cimg-u5-s2-py-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the volume of a cone with radius 5 cm and height 12 cm. Use $\\pi = 3.14$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 314, tolerance: 0.1, unit: "cm³" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Cone volume", statement: "$\\frac{1}{3}\\pi r^2 h$." }],
            steps: [
              { reasoning: "$V = \\frac{1}{3} \\times 3.14 \\times 25 \\times 12$.", marks: 1, markCode: "M" },
              { reasoning: "$V = 314$ cm³.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 314 cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "314 cm³",
          },
        },
        {
          id: "cimg-u5-s2-py-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A pyramid and a prism have the same base area and the same perpendicular height. The pyramid's volume is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "One-third of the prism's volume" },
            { id: "b", text: "Three times the prism's volume" },
            { id: "c", text: "Half the prism's volume" },
            { id: "d", text: "Equal to the prism's volume" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Pyramid vs prism", statement: "$\\frac{1}{3}$ factor." }],
            steps: [{ reasoning: "Pyramid volume $= \\frac{1}{3} \\times$ base area $\\times$ height; prism has no $\\frac{1}{3}$.", marks: 1, markCode: "A" }],
            finalAnswer: "One-third",
          },
        },
        {
          id: "cimg-u5-s2-py-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the volume of a square-based pyramid with base side 10 cm and perpendicular height 6 cm, showing your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Pyramid", statement: "$V = \\frac{1}{3} \\times$ base area $\\times h$." }],
            steps: [
              { reasoning: "Base area $= 10^2 = 100$ cm².", marks: 1, markCode: "M" },
              { reasoning: "$V = \\frac{1}{3} \\times 100 \\times 6 = 200$ cm³.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 200 cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "200 cm³",
          },
        },
        {
          id: "cimg-u5-s2-py-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "A cone has volume 94.2 cm³ and radius 3 cm. Find its perpendicular height. Use $\\pi = 3.14$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 10, unit: "cm" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Rearranging cone", statement: "Solve for $h$." }],
            steps: [
              { reasoning: "$94.2 = \\frac{1}{3} \\times 3.14 \\times 9 \\times h$ → $94.2 = 9.42h$.", marks: 1, markCode: "M" },
              { reasoning: "$h = 94.2 \\div 9.42$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $h = 10$ cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10 cm",
          },
        },
        {
          id: "cimg-u5-s2-py-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A conical flask has radius 4 cm and is filled with water to a perpendicular height of 6 cm. Find the volume of water. Use $\\pi = 3.14$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 100.48, tolerance: 0.01, unit: "cm³" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Cone volume", statement: "$\\frac{1}{3}\\pi r^2 h$." }],
            steps: [
              { reasoning: "Cylinder with same base and height: $3.14 \\times 16 \\times 6 = 301.44$ cm³.", marks: 1, markCode: "M" },
              { reasoning: "Cone is one-third: $301.44 \\div 3$.", marks: 1, markCode: "M" },
              { reasoning: "$= 100.48$ cm³ (check: $\\frac{1}{3} \\times 3.14 \\times 16 \\times 6 = 100.48$).", marks: 1, markCode: "M" },
              { reasoning: "Answer: 100.48 cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100.48 cm³",
          },
        },
        {
          id: "cimg-u5-s2-py-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A pyramid has volume 60 cm³ and base area 18 cm². Find its perpendicular height.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rearranging pyramid", statement: "Solve for $h$." }],
            steps: [
              { reasoning: "$60 = \\frac{1}{3} \\times 18 \\times h$ → $60 = 6h$.", marks: 1, markCode: "M" },
              { reasoning: "$h = 60 \\div 6$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $h = 10$ cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10 cm",
          },
        },
        {
          id: "cimg-u5-s2-py-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the formula $V = \\frac{1}{3}\\pi r^2 h$ for a cone, the height $h$ is measured…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Along the slant" },
            { id: "b", text: "Along the curved surface" },
            { id: "c", text: "From the apex to the rim" },
            { id: "d", text: "Perpendicular to the base" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Perpendicular height", statement: "At right angles to the base." }],
            steps: [{ reasoning: "The height is the perpendicular distance from apex to base.", marks: 1, markCode: "A" }],
            finalAnswer: "Perpendicular to the base",
          },
        },
        {
          id: "cimg-u5-s2-py-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A model cone is an enlargement of a small cone by scale factor 2. The small cone has volume 20 cm³. Find the volume of the model.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Enlargement of volume", statement: "Volume scales by $k^3$." }],
            steps: [
              { reasoning: "Linear scale factor 2, so volume factor $= 2^3 = 8$.", marks: 1, markCode: "M" },
              { reasoning: "$V = 20 \\times 8 = 160$ cm³.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 160 cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "160 cm³",
          },
        },
        {
          id: "cimg-u5-s2-py-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "A square-based pyramid has base side 3 cm and perpendicular height 8 cm. What is its volume?",
          response: { type: "mcq", choices: [
            { id: "a", text: "72 cm³" },
            { id: "b", text: "12 cm³" },
            { id: "c", text: "36 cm³" },
            { id: "d", text: "24 cm³" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "formula", name: "Pyramid", statement: "$V = \\frac{1}{3}bh$." }],
            steps: [{ reasoning: "$V = \\frac{1}{3} \\times 9 \\times 8 = 24$ cm³.", marks: 1, markCode: "A" }],
            finalAnswer: "24 cm³",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cimg-u5-s2-3d-notes",
      title: "Surface area and volume — revision notes",
      summary: "Prisms, cylinders, pyramids, cones.",
      sections: [
        { heading: "Prisms", body: "Volume = cross-section × length. Cuboid lwh; cylinder πr²h." },
        { heading: "Pyramids/cones", body: "Both have $\\frac{1}{3}$ factor. Cone: $\\frac{1}{3}\\pi r^2 h$." },
      ],
    },
  ],
};
