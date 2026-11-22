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
            { id: "a", text: "40 cm²" },
            { id: "b", text: "13 cm²" },
            { id: "c", text: "80 cm²" },
            { id: "d", text: "26 cm²" },
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
        {
          id: "cimg-u5-s1-ba-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The area of a triangle is found using…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$bh$" },
            { id: "b", text: "$lwh$" },
            { id: "c", text: "$2(l+w)$" },
            { id: "d", text: "$\\frac{1}{2}bh$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "formula", name: "Triangle area", statement: "$\\frac{1}{2}bh$." }],
            steps: [{ reasoning: "Triangle area $= \\frac{1}{2} \\times$ base $\\times$ height.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{1}{2}bh$",
          },
        },
        {
          id: "cimg-u5-s1-ba-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the perimeter of a rectangle 9 m by 4 m.",
          response: { type: "numeric", parts: [{ label: "a", answer: 26, unit: "m" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Perimeter", statement: "$2(l+w)$." }],
            steps: [
              { reasoning: "$2(9 + 4) = 26$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 26 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "26 m",
          },
        },
        {
          id: "cimg-u5-s1-ba-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the area of a triangle with base 12 cm and height 5 cm.",
          response: { type: "numeric", parts: [{ label: "a", answer: 30, unit: "cm²" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Triangle area", statement: "$\\frac{1}{2}bh$." }],
            steps: [
              { reasoning: "$A = \\frac{1}{2} \\times 12 \\times 5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 30 cm².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30 cm²",
          },
        },
        {
          id: "cimg-u5-s1-ba-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the circumference of a circle with radius 5 cm. Use $\\pi = 3.14$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 31.4, tolerance: 0.1, unit: "cm" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Circle circumference", statement: "$2\\pi r$." }],
            steps: [
              { reasoning: "$C = 2 \\times 3.14 \\times 5$.", marks: 1, markCode: "M" },
              { reasoning: "$C = 31.4$ cm.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 31.4 cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "31.4 cm",
          },
        },
        {
          id: "cimg-u5-s1-ba-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The area of a parallelogram is calculated using…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Base × perpendicular height" },
            { id: "b", text: "Base + height" },
            { id: "c", text: "Base × sloping side" },
            { id: "d", text: "$\\frac{1}{2}bh$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "Parallelogram", statement: "$A = bh$ with perpendicular $h$." }],
            steps: [{ reasoning: "Use base times the perpendicular height.", marks: 1, markCode: "A" }],
            finalAnswer: "Base × perpendicular height",
          },
        },
        {
          id: "cimg-u5-s1-ba-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the area of a trapezium with parallel sides 6 cm and 10 cm and height 4 cm.",
          response: { type: "numeric", parts: [{ label: "a", answer: 32, unit: "cm²" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Trapezium area", statement: "$\\frac{1}{2}(a+b)h$." }],
            steps: [
              { reasoning: "$A = \\frac{1}{2}(6 + 10) \\times 4$.", marks: 1, markCode: "M" },
              { reasoning: "$A = \\frac{1}{2} \\times 16 \\times 4 = 32$ cm².", marks: 1, markCode: "M" },
              { reasoning: "Answer: 32 cm².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "32 cm²",
          },
        },
        {
          id: "cimg-u5-s1-ba-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the area of a triangle with base 14 m and height 9 m, showing your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Triangle area", statement: "$\\frac{1}{2}bh$." }],
            steps: [
              { reasoning: "$A = \\frac{1}{2} \\times 14 \\times 9$.", marks: 1, markCode: "M" },
              { reasoning: "$A = 7 \\times 9 = 63$ m².", marks: 1, markCode: "M" },
              { reasoning: "Answer: 63 m².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "63 m²",
          },
        },
        {
          id: "cimg-u5-s1-ba-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A rectangle has area 48 cm² and length 12 cm. Find its width and its perimeter.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Rectangle", statement: "$A = lw$, $P = 2(l+w)$." }],
            steps: [
              { reasoning: "Width $= 48 \\div 12 = 4$ cm.", marks: 1, markCode: "M" },
              { reasoning: "Perimeter $= 2(12 + 4) = 32$ cm.", marks: 1, markCode: "M" },
              { reasoning: "Check: $12 \\times 4 = 48$ cm².", marks: 1, markCode: "M" },
              { reasoning: "Answer: width 4 cm, perimeter 32 cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 cm, 32 cm",
          },
        },
        {
          id: "cimg-u5-s1-ba-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A circle has area 78.5 cm² (use $\\pi = 3.14$). What is its radius?",
          response: { type: "mcq", choices: [
            { id: "a", text: "25 cm" },
            { id: "b", text: "7 cm" },
            { id: "c", text: "10 cm" },
            { id: "d", text: "5 cm" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "formula", name: "Circle area", statement: "$\\pi r^2$." }],
            steps: [{ reasoning: "$r^2 = 78.5 \\div 3.14 = 25$ → $r = 5$ cm.", marks: 1, markCode: "A" }],
            finalAnswer: "5 cm",
          },
        },
        {
          id: "cimg-u5-s1-ba-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement about the area of a parallelogram is correct?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It equals base × perpendicular height" },
            { id: "b", text: "It equals 2 × base × height" },
            { id: "c", text: "It equals base × sloping side" },
            { id: "d", text: "It equals half of base × height" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "Parallelogram", statement: "$A = bh$ with perpendicular $h$." }],
            steps: [{ reasoning: "The height must be measured perpendicular to the base.", marks: 1, markCode: "A" }],
            finalAnswer: "Base × perpendicular height",
          },
        },
        {
          id: "cimg-u5-s1-ba-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A rectangular path 2 m wide runs all the way around a garden measuring 10 m by 8 m. Find the area of the path.",
          response: { type: "numeric", parts: [{ label: "a", answer: 88, unit: "m²" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Frame area", statement: "Outer minus inner rectangle." }],
            steps: [
              { reasoning: "Outer rectangle: $(10 + 4) \\times (8 + 4) = 14 \\times 12 = 168$ m²; garden $= 80$ m².", marks: 1, markCode: "M" },
              { reasoning: "Path area $= 168 - 80 = 88$ m².", marks: 1, markCode: "M" },
              { reasoning: "Answer: 88 m².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "88 m²",
          },
        },
        {
          id: "cimg-u5-s1-ba-q16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the area of a semicircle with radius 6 cm, showing your working. Use $\\pi = 3.14$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Circle area", statement: "$\\pi r^2$, halved for semicircle." }],
            steps: [
              { reasoning: "Full circle area $= 3.14 \\times 36 = 113.04$ cm².", marks: 1, markCode: "M" },
              { reasoning: "Semicircle area $= \\frac{1}{2} \\times 113.04 = 56.52$ cm².", marks: 1, markCode: "M" },
              { reasoning: "Answer: 56.52 cm².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "56.52 cm²",
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
            { id: "a", text: "Subtract the areas" },
            { id: "b", text: "Add the perimeters" },
            { id: "c", text: "Multiply the areas" },
            { id: "d", text: "Add the areas" },
          ], correctChoiceId: "d" },
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
        {
          id: "cimg-u5-s1-co-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When finding the surface area of a composite shape, faces where two parts join are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Counted twice" },
            { id: "b", text: "Counted once each" },
            { id: "c", text: "Not counted" },
            { id: "d", text: "Always the largest face" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Compound perimeter", statement: "Internal edges excluded." }],
            steps: [{ reasoning: "Internal faces are not part of the outer surface.", marks: 1, markCode: "A" }],
            finalAnswer: "Not counted",
          },
        },
        {
          id: "cimg-u5-s1-co-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An L-shape is made from a 12×8 rectangle with a 4×3 rectangle removed from one corner. Find the area.",
          response: { type: "numeric", parts: [{ label: "a", answer: 84 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Compound area", statement: "Big minus small." }],
            steps: [
              { reasoning: "$12 \\times 8 = 96$; $96 - 12 = 84$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 84 square units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "84",
          },
        },
        {
          id: "cimg-u5-s1-co-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A house shape is a 10×6 rectangle with a triangular roof of area 15 m² on top. Find the total area.",
          response: { type: "numeric", parts: [{ label: "a", answer: 75, unit: "m²" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Compound area", statement: "Add the parts." }],
            steps: [
              { reasoning: "$10 \\times 6 = 60$; $60 + 15 = 75$ m².", marks: 1, markCode: "M" },
              { reasoning: "Answer: 75 m².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "75 m²",
          },
        },
        {
          id: "cimg-u5-s1-co-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "A badge is a 5 cm by 4 cm rectangle with a semicircle of radius 2.5 cm attached to one of the 5 cm sides. Find the total area. Use $\\pi = 3.14$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 29.81, tolerance: 0.01, unit: "cm²" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Compound area", statement: "Rectangle plus semicircle." }],
            steps: [
              { reasoning: "Rectangle: $5 \\times 4 = 20$ cm²; semicircle: $\\frac{1}{2} \\times 3.14 \\times 6.25 = 9.8125$ cm².", marks: 1, markCode: "M" },
              { reasoning: "Total $= 20 + 9.8125 = 29.8125$ cm².", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\approx 29.81$ cm².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "29.81 cm²",
          },
        },
        {
          id: "cimg-u5-s1-co-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "When a hole is cut out of a shape, the area of the remaining shape is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Larger shape plus the hole" },
            { id: "b", text: "Product of the two areas" },
            { id: "c", text: "Hole minus larger shape" },
            { id: "d", text: "Larger shape minus the hole" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Compound area", statement: "Subtract removed part." }],
            steps: [{ reasoning: "Subtract the area of the removed part.", marks: 1, markCode: "A" }],
            finalAnswer: "Larger shape minus the hole",
          },
        },
        {
          id: "cimg-u5-s1-co-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "The middle section of a running track is a 100 m by 50 m rectangle, and a semicircle of radius 25 m is attached to each of the two 50 m ends. Find the total area. Use $\\pi = 3.14$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6962.5, tolerance: 0.1, unit: "m²" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Compound area", statement: "Rectangle plus circle." }],
            steps: [
              { reasoning: "Rectangle: $100 \\times 50 = 5000$ m²; the two semicircles together form a full circle: $3.14 \\times 25^2 = 1962.5$ m².", marks: 1, markCode: "M" },
              { reasoning: "Total $= 5000 + 1962.5 = 6962.5$ m².", marks: 1, markCode: "M" },
              { reasoning: "Answer: 6962.5 m².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6962.5 m²",
          },
        },
        {
          id: "cimg-u5-s1-co-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "A playground consists of a 30 m by 20 m rectangle and a triangular area of base 20 m and height 10 m attached to one short side. Find the total area.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Compound area", statement: "Rectangle plus triangle." }],
            steps: [
              { reasoning: "Rectangle: $30 \\times 20 = 600$ m².", marks: 1, markCode: "M" },
              { reasoning: "Triangle: $\\frac{1}{2} \\times 20 \\times 10 = 100$ m².", marks: 1, markCode: "M" },
              { reasoning: "Answer: total $= 700$ m².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "700 m²",
          },
        },
        {
          id: "cimg-u5-s1-co-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A rectangular courtyard 16 m by 12 m has a square fountain of side 3 m in the middle. Find the area of the paved (non-fountain) region.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Compound area", statement: "Subtract the hole." }],
            steps: [
              { reasoning: "Courtyard: $16 \\times 12 = 192$ m².", marks: 1, markCode: "M" },
              { reasoning: "Fountain: $3 \\times 3 = 9$ m².", marks: 1, markCode: "M" },
              { reasoning: "Paved area $= 192 - 9 = 183$ m².", marks: 1, markCode: "M" },
              { reasoning: "Answer: 183 m².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "183 m²",
          },
        },
        {
          id: "cimg-u5-s1-co-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A window is a 1.2 m by 1.5 m rectangle with a semicircle of diameter 1.2 m on top. The total area is found by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Adding the rectangle and semicircle areas" },
            { id: "b", text: "Using only the rectangle" },
            { id: "c", text: "Multiplying the two areas" },
            { id: "d", text: "Subtracting the semicircle from the rectangle" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Compound area", statement: "Sum of parts." }],
            steps: [{ reasoning: "The parts join without overlap, so add their areas.", marks: 1, markCode: "A" }],
            finalAnswer: "Add areas",
          },
        },
        {
          id: "cimg-u5-s1-co-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A letter 'T' shape is made from a 8 cm by 2 cm horizontal bar with a 6 cm by 2 cm vertical bar attached directly below its middle (the two bars share only an edge). Find the total area.",
          response: { type: "numeric", parts: [{ label: "a", answer: 28 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Compound area", statement: "Split into rectangles." }],
            steps: [
              { reasoning: "Horizontal bar: $8 \\times 2 = 16$ cm²; vertical bar: $6 \\times 2 = 12$ cm².", marks: 1, markCode: "M" },
              { reasoning: "Total $= 16 + 12 = 28$ cm².", marks: 1, markCode: "M" },
              { reasoning: "Answer: 28 cm².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "28",
          },
        },
        {
          id: "cimg-u5-s1-co-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A garden consists of a 12 m by 9 m rectangle with a quarter-circle of radius 4 m cut into one corner (centred at the corner). Find the remaining area. Use $\\pi = 3.14$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Compound area", statement: "Subtract the cut-out." }],
            steps: [
              { reasoning: "Rectangle: $12 \\times 9 = 108$ m².", marks: 1, markCode: "M" },
              { reasoning: "Quarter circle: $\\frac{1}{4} \\times 3.14 \\times 16 = 12.56$ m².", marks: 1, markCode: "M" },
              { reasoning: "Remaining $= 108 - 12.56 = 95.44$ m².", marks: 1, markCode: "M" },
              { reasoning: "Answer: 95.44 m².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "95.44 m²",
          },
        },
        {
          id: "cimg-u5-s1-co-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two shapes joined together share an edge. When finding the perimeter of the combined shape you should…",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Compound perimeter", statement: "Outer edge only." }],
            steps: [
              { reasoning: "Trace only the outside boundary; the shared edge is internal and is not counted.", marks: 1, markCode: "M" },
              { reasoning: "Answer: measure the outer perimeter only, excluding the joining edge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Outer edge only",
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
