import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "olm-u5-lesson-5-1",
  code: "5-1",
  title: "Area and Perimeter",
  goal: "I CAN calculate areas and perimeters of 2D shapes including compound shapes.",
  standards: ["4024: mensuration"],
  vocabulary: [
    { term: "Perimeter", definition: "Total distance around a shape." },
    { term: "Area", definition: "Surface covered by a 2D shape, in square units." },
    { term: "Compound shape", definition: "Shape made of simpler shapes combined." },
    { term: "Trapezium", definition: "Quadrilateral with one pair of parallel sides." },
  ],
  concepts: [
    {
      id: "olm-u5-s1-formulas",
      title: "Area and perimeter formulas",
      skill: "Apply area and perimeter formulas at O Level.",
      lesson: {
        sections: [
          { heading: "Standard shapes", body: "Rectangle: $A=lw$, $P=2(l+w)$. Triangle: $A=\\frac12bh$. Parallelogram: $A=bh$ (perpendicular height, not slant). Trapezium: $A=\\frac12(a+b)h$. Circle: $A=\\pi r^2$, $C=2\\pi r$ or $\\pi d$. Sector: fraction of circle — area $=\\frac{\\theta}{360}\\pi r^2$, arc length $=\\frac{\\theta}{360}\\times2\\pi r$." },
          { heading: "Choosing the right formula", body: "Always check which height: for triangles and parallelograms use the perpendicular height, not the slanted side. For circles, radius vs diameter matters — $A=\\pi r^2$ uses radius. For compound shapes, decompose into standard pieces, compute each area, and sum (or subtract for holes). Keep units consistent — area in cm², perimeter in cm." },
        ],
        keyFormulas: [
          { name: "Rectangle", statement: "$A=lw$, $P=2(l+w)$" },
          { name: "Triangle", statement: "$A=\\frac12bh$" },
          { name: "Circle", statement: "$A=\\pi r^2$, $C=2\\pi r$" },
        ],
        workedExample: { problem: "Find the area of a triangle with base 10 cm and height 6 cm.", solution: "$A=\\frac12\\times10\\times6=30$ cm²." },
      },
      questions: [
        {
          id: "olm-u5-s1-fo-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The area of a circle of radius 5 cm is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$25\\pi$ cm²" }, { id: "b", text: "$10\\pi$ cm²" }, { id: "c", text: "$5\\pi$ cm²" }, { id: "d", text: "$\\pi$ cm²" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Circle area", statement: "$\\pi r^2$." }], steps: [{ reasoning: "$\\pi\\times25=25\\pi$.", marks: 1, markCode: "A" }], finalAnswer: "$25\\pi$ cm²" },
        },
        {
          id: "olm-u5-s1-fo-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the area of a triangle with base 8 m and perpendicular height 5 m.",
          response: { type: "numeric", parts: [{ label: "a", answer: 20 }] },
          markscheme: { principles: [{ kind: "formula", name: "Triangle area", statement: "½bh." }], steps: [
            { reasoning: "$A=\\frac12\\times8\\times5=20$ m².", marks: 1, markCode: "M" },
            { reasoning: "Answer: 20 m².", marks: 1, markCode: "A" },
          ], finalAnswer: "20 m²" },
        },
        {
          id: "olm-u5-s1-fo-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the perimeter of a rectangle 7 cm by 4 cm.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Perimeter", statement: "$2(l+w)$." }], steps: [
            { reasoning: "$P=2(7+4)=22$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 22 cm.", marks: 1, markCode: "M" },
            { reasoning: "Check: $7+4+7+4=22$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "22 cm" },
        },
        {
          id: "olm-u5-s1-fo-q4", difficulty: "core", totalMarks: 4,
          stem: "Find the area of a sector of radius 6 cm with angle $60°$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Sector area", statement: "Fraction of circle." }], steps: [
            { reasoning: "Sector area $=\\frac{60}{360}\\times\\pi\\times36=\\frac{36\\pi}{6}=6\\pi$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Answer: $6\\pi$ cm² ($\\approx18.85$ cm²).", marks: 1, markCode: "M" },
            { reasoning: "Check: $\\frac16$ of full circle $\\pi\\times36=36\\pi$ → $6\\pi$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$6\\pi$ cm²" },
        },
      ],
    },
    {
      id: "olm-u5-s1-compound",
      title: "Compound shapes",
      skill: "Solve area problems on compound shapes at O Level.",
      lesson: {
        sections: [
          { heading: "Decomposition strategy", body: "Split the shape into rectangles, triangles, circles you can handle, or subtract a hole from a larger shape. Label every dimension — missing sides are often found via Pythagoras or by adding known lengths. Work with exact values ($\\pi$) as long as possible; round only at the end. Draw the split lines on the diagram before calculating." },
          { heading: "Common pitfalls", body: "Don't mix perimeter and area — perimeter is a length, area is surface. For L-shapes, find the outer perimeter carefully (it may not be sum of parts). For shaded regions, identify whether you're adding or subtracting areas. When a shape has curves, check if arc lengths are needed for perimeter vs sector areas for area." },
        ],
        keyFormulas: [
          { name: "Strategy", statement: "Decompose → label → compute → sum/subtract" },
        ],
        workedExample: { problem: "An L-shape is made of a 10×6 rectangle with a 4×4 square removed from one corner. Find its area.", solution: "Total $10\\times6=60$; removed $4\\times4=16$; area $=60-16=44$ units²." },
      },
      questions: [
        {
          id: "olm-u5-s1-co-q1", difficulty: "foundation", totalMarks: 1,
          stem: "To find the area of a compound shape you should…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Split it into standard shapes" }, { id: "b", text: "Use one formula" }, { id: "c", text: "Add all side lengths" }, { id: "d", text: "Estimate" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Decomposition", statement: "Standard approach." }], steps: [{ reasoning: "Split into rectangles/triangles etc.", marks: 1, markCode: "A" }], finalAnswer: "Split into standard shapes" },
        },
        {
          id: "olm-u5-s1-co-q2", difficulty: "foundation", totalMarks: 2,
          stem: "A shape is a 8×5 rectangle with a 3×2 rectangle removed. Find the area.",
          response: { type: "numeric", parts: [{ label: "a", answer: 34 }] },
          markscheme: { principles: [{ kind: "technique", name: "Subtraction", statement: "Area = total - hole." }], steps: [
            { reasoning: "$40-6=34$ units².", marks: 1, markCode: "M" },
            { reasoning: "Answer: 34 units².", marks: 1, markCode: "A" },
          ], finalAnswer: "34" },
        },
        {
          id: "olm-u5-s1-co-q3", difficulty: "core", totalMarks: 3,
          stem: "A semicircle of radius 4 cm sits on top of a rectangle 8 cm by 4 cm. Find the total area.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Compound area", statement: "Rectangle + half circle." }], steps: [
            { reasoning: "Rectangle $=32$ cm²; semicircle $=\\frac12\\pi\\times16=8\\pi$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Total $=32+8\\pi\\approx57.1$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$32+8\\pi$ cm²" },
        },
        {
          id: "olm-u5-s1-co-q4", difficulty: "core", totalMarks: 4,
          stem: "A window is a rectangle 3 m × 2 m with a semicircular top of diameter 3 m. Find the area of glass needed.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Compound shape", statement: "Rectangle + semicircle." }], steps: [
            { reasoning: "Rectangle $=3\\times2=6$ m².", marks: 1, markCode: "M" },
            { reasoning: "Semicircle: $r=1.5$ → $\\frac12\\pi\\times2.25=1.125\\pi$ m².", marks: 1, markCode: "M" },
            { reasoning: "Total $=6+1.125\\pi\\approx9.53$ m².", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$6+1.125\\pi$ m²" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u5-s1-area-notes", title: "Area & perimeter — notes", summary: "Formulas and compound shapes.",
      sections: [
        { heading: "Formulas", body: "Triangle $\\frac12bh$; circle $\\pi r^2$; sector $\\frac{\\theta}{360}\\pi r^2$." },
        { heading: "Compound", body: "Decompose, label all sides, sum/subtract; keep $\\pi$ exact until final." },
      ] },
  ],
};
