import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "cimg-u5-lesson-5-1",
  code: "5-1",
  title: "Area and Perimeter",
  goal: "I CAN calculate area and perimeter of 2D shapes.",
  standards: ["Cambridge IGCSE Mathematics 0580 Core: mensuration"],
  vocabulary: [
    { term: "Perimeter", definition: "Distance around the edge of a shape." },
    { term: "Area", definition: "Space inside a shape, measured in square units." },
    { term: "Compound shape", definition: "A shape made from simpler shapes joined together." },
    { term: "Parallelogram", definition: "Quadrilateral with two pairs of parallel sides." },
    { term: "Trapezium", definition: "Quadrilateral with one pair of parallel sides." },
  ],
  concepts: [
    {
      id: "cimg-u5-s1-basic",
      title: "Area and perimeter of basic shapes",
      skill: "Calculate area and perimeter at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Formulas",
            body: "Rectangle: $A = lw$, $P = 2(l+w)$. Triangle: $A = \\frac{1}{2}bh$. Parallelogram: $A = bh$ (base × perpendicular height). Circle: $A = \\pi r^2$, $C = 2\\pi r$.",
          },
          {
            heading: "Trapezium",
            body: "$A = \\frac{1}{2}(a + b)h$ where $a, b$ are parallel sides and $h$ is the height.",
          },
        ],
        keyFormulas: [
          { name: "Rectangle", statement: "$A = lw$" },
          { name: "Triangle", statement: "$A = \\frac{1}{2}bh$" },
          { name: "Circle", statement: "$A = \\pi r^2$, $C = 2\\pi r$" },
        ],
        workedExample: {
          problem: "Find the area of a triangle with base 10 cm and height 6 cm.",
          solution: "$A = \\frac{1}{2} \\times 10 \\times 6 = 30$ cm².",
        },
      },
      questions: [
        {
          id: "cimg-u5-s1-ba-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the area of a rectangle 8 cm by 5 cm.",
          response: { type: "mcq", choices: [
            { id: "a", text: "40 cm²" }, { id: "b", text: "26 cm²" }, { id: "c", text: "13 cm²" }, { id: "d", text: "80 cm²" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "Rectangle area", statement: "$lw$." }],
            steps: [{ reasoning: "$8 \\times 5 = 40$ cm².", marks: 1, markCode: "A" }],
            finalAnswer: "40 cm²",
          },
        },
        {
          id: "cimg-u5-s1-ba-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the perimeter of a rectangle 12 m by 7 m.",
          response: { type: "numeric", parts: [{ label: "a", answer: 38, unit: "m" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Perimeter", statement: "$2(l+w)$." }],
            steps: [
              { reasoning: "$2(12 + 7) = 38$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 38 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "38 m",
          },
        },
        {
          id: "cimg-u5-s1-ba-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the area of a circle with radius 7 cm (use $\\pi = 3.14$).",
          response: { type: "numeric", parts: [{ label: "a", answer: 153.86, tolerance: 0.1, unit: "cm²" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Circle area", statement: "$\\pi r^2$." }],
            steps: [
              { reasoning: "$A = 3.14 \\times 49$.", marks: 1, markCode: "M" },
              { reasoning: "$A = 153.86$ cm².", marks: 1, markCode: "M" },
              { reasoning: "Answer: $153.86$ cm².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "153.86 cm²",
          },
        },
        {
          id: "cimg-u5-s1-ba-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: ", height 5 cm.",
          response: { type: "numeric", parts: [{ label: "a", answer: 50, unit: "cm²" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Trapezium area", statement: "$\\frac{1}{2}(a+b)h$." }],
            steps: [
              { reasoning: "$A = \\frac{1}{2}(8 + 12) \\times 5$.", marks: 1, markCode: "M" },
              { reasoning: "$A = \\frac{1}{2} \\times 20 \\times 5 = 50$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 50 cm².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50 cm²",
          },
        },
      ],
    },
    {
      id: "cimg-u5-s1-compound",
      title: "Compound shapes",
      skill: "Find area and perimeter of compound shapes at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Method",
            body: "Break compound shapes into rectangles, triangles and circles. Find each part's area, add them. For perimeter, trace the outer edge carefully — don't include internal lines.",
          },
          {
            heading: "Careful with perimeter",
            body: "Perimeter is only the outside boundary. Internal edges where shapes join are NOT part of the perimeter.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A shape is a 10×6 rectangle with a semicircle of radius 3 on top. Find total area.",
          solution: "Rectangle: 60. Semicircle: $\\frac{1}{2}\\pi \\times 9 \\approx 14.1$. Total $\\approx 74.1$.",
        },
      },
      questions: [
        {
          id: "cimg-u5-s1-co-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A compound shape is made of two rectangles. To find total area you…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Add the areas" }, { id: "b", text: "Add the perimeters" }, { id: "c", text: "Subtract the areas" }, { id: "d", text: "Multiply the areas" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Compound area", statement: "Sum of parts." }],
            steps: [{ reasoning: "Areas add.", marks: 1, markCode: "A" }],
            finalAnswer: "Add areas",
          },
        },
        {
          id: "cimg-u5-s1-co-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An L-shape is a 10×10 square with a 4×4 square removed from a corner. Find the area.",
          response: { type: "numeric", parts: [{ label: "a", answer: 84 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Compound area", statement: "Big minus small." }],
            steps: [
              { reasoning: "$100 - 16 = 84$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 84 square units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "84",
          },
        },
        {
          id: "cimg-u5-s1-co-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A garden is a 20×15 rectangle with a circular pond of radius 4 m removed. Find the grass area (use $\\pi = 3.14$).",
          response: { type: "numeric", parts: [{ label: "a", answer: 249.76, tolerance: 0.1, unit: "m²" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Compound area", statement: "Rectangle minus circle." }],
            steps: [
              { reasoning: "Rectangle: $20 \\times 15 = 300$; pond: $3.14 \\times 16 = 50.24$.", marks: 1, markCode: "M" },
              { reasoning: "$300 - 50.24 = 249.76$ m².", marks: 1, markCode: "M" },
              { reasoning: "Answer: 249.76 m².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "249.76 m²",
          },
        },
        {
          id: "cimg-u5-s1-co-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: " on top with base 6 and height 3. Find the total area.",
          response: { type: "numeric", parts: [{ label: "a", answer: 33, unit: "units²" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Compound area", statement: "Rectangle + triangle." }],
            steps: [
              { reasoning: "Rectangle: $6 \\times 4 = 24$.", marks: 1, markCode: "M" },
              { reasoning: "Triangle: $\\frac{1}{2} \\times 6 \\times 3 = 9$.", marks: 1, markCode: "M" },
              { reasoning: "Total: $24 + 9 = 33$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "33 units²",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cimg-u5-s1-area-notes",
      title: "Area and perimeter — revision notes",
      summary: "Formulas for common shapes, compound shapes.",
      sections: [
        { heading: "Formulas", body: "Rectangle lw; triangle ½bh; circle πr², 2πr; trapezium ½(a+b)h." },
        { heading: "Compound", body: "Split into simple shapes. Add areas; perimeter is outer edge only." },
      ],
    },
  ],
};
