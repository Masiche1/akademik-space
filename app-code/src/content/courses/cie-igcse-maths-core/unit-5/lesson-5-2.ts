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
            { id: "a", text: "24" }, { id: "b", text: "9" }, { id: "c", text: "12" }, { id: "d", text: "48" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "One-third of the cylinder" }, { id: "b", text: "Half the cylinder" }, { id: "c", text: "Same as cylinder" }, { id: "d", text: "Twice the cylinder" },
          ], correctChoiceId: "a" },
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
