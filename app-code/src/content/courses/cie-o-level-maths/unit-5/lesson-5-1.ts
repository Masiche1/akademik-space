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
            { id: "a", text: "$5\\pi$ cm²" },
            { id: "b", text: "$25\\pi$ cm²" },
            { id: "c", text: "$10\\pi$ cm²" },
            { id: "d", text: "$\\pi$ cm²" },
          ], correctChoiceId: "b" },
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
        {
          id: "olm-u5-s1-fo-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The perimeter of a square of side 9 cm is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "27 cm" },
            { id: "b", text: "81 cm" },
            { id: "c", text: "18 cm" },
            { id: "d", text: "36 cm" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Square perimeter", statement: "$4s$." }], steps: [{ reasoning: "$P=4\\times9=36$ cm.", marks: 1, markCode: "A" }], finalAnswer: "36 cm" },
        },
        {
          id: "olm-u5-s1-fo-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the area of a parallelogram with base 12 m and perpendicular height 7 m.",
          response: { type: "numeric", parts: [{ label: "a", answer: 84, unit: "m²" }] },
          markscheme: { principles: [{ kind: "formula", name: "Parallelogram", statement: "$A=bh$." }], steps: [
            { reasoning: "$A=12\\times7=84$ m².", marks: 1, markCode: "M" },
            { reasoning: "Answer: 84 m².", marks: 1, markCode: "A" },
          ], finalAnswer: "84 m²" },
        },
        {
          id: "olm-u5-s1-fo-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Find the perimeter of a rectangle 15 cm by 6 cm.",
          response: { type: "numeric", parts: [{ label: "a", answer: 42, unit: "cm" }] },
          markscheme: { principles: [{ kind: "formula", name: "Perimeter", statement: "$2(l+w)$." }], steps: [
            { reasoning: "$P=2(15+6)=42$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 42 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "42 cm" },
        },
        {
          id: "olm-u5-s1-fo-q8", difficulty: "core", totalMarks: 2,
          stem: "The area of a trapezium with parallel sides 6 cm and 10 cm and height 4 cm is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "40 cm²" },
            { id: "b", text: "16 cm²" },
            { id: "c", text: "64 cm²" },
            { id: "d", text: "32 cm²" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Trapezium", statement: "$\\frac12(a+b)h$." }], steps: [
            { reasoning: "$A=\\frac12(6+10)\\times4=\\frac12\\times16\\times4=32$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: 32 cm².", marks: 1, markCode: "A" },
          ], finalAnswer: "32 cm²" },
        },
        {
          id: "olm-u5-s1-fo-q9", difficulty: "core", totalMarks: 3,
          stem: "Find the circumference of a circle of diameter 10 cm. Give your answer correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 31.42, tolerance: 0.01, unit: "cm" }] },
          markscheme: { principles: [{ kind: "formula", name: "Circumference", statement: "$\\pi d$ or $2\\pi r$." }], steps: [
            { reasoning: "$C=\\pi\\times10=10\\pi$ cm.", marks: 1, markCode: "M" },
            { reasoning: "$\\approx31.42$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 31.42 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "31.42 cm" },
        },
        {
          id: "olm-u5-s1-fo-q10", difficulty: "core", totalMarks: 3,
          stem: "Find the area of a sector of radius 9 cm with angle $80°$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Sector area", statement: "Fraction of circle." }], steps: [
            { reasoning: "Sector area $=\\frac{80}{360}\\times\\pi\\times81=\\frac{81\\pi}{4.5}=18\\pi$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Answer: $18\\pi$ cm² ($\\approx56.5$ cm²).", marks: 1, markCode: "M" },
            { reasoning: "Check: $\\frac{80}{360}=\\frac29$ of $81\\pi$ → $18\\pi$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$18\\pi$ cm²" },
        },
        {
          id: "olm-u5-s1-fo-q11", difficulty: "core", totalMarks: 2,
          stem: "Find the area of a triangle with base 16 m and height 11 m.",
          response: { type: "numeric", parts: [{ label: "a", answer: 88, unit: "m²" }] },
          markscheme: { principles: [{ kind: "formula", name: "Triangle", statement: "$\\frac12bh$." }], steps: [
            { reasoning: "$A=\\frac12\\times16\\times11=88$ m².", marks: 1, markCode: "M" },
            { reasoning: "Answer: 88 m².", marks: 1, markCode: "A" },
          ], finalAnswer: "88 m²" },
        },
        {
          id: "olm-u5-s1-fo-q12", difficulty: "challenge", totalMarks: 2,
          stem: "A circle has circumference $20\\pi$ cm. What is its area?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$400\\pi$ cm²" },
            { id: "b", text: "$10\\pi$ cm²" },
            { id: "c", text: "$100\\pi$ cm²" },
            { id: "d", text: "$20\\pi$ cm²" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Reverse formula", statement: "Find $r$ first." }], steps: [
            { reasoning: "$2\\pi r=20\\pi \\Rightarrow r=10$ cm.", marks: 1, markCode: "M" },
            { reasoning: "$A=\\pi\\times100=100\\pi$ cm².", marks: 1, markCode: "A" },
          ], finalAnswer: "$100\\pi$ cm²" },
        },
        {
          id: "olm-u5-s1-fo-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Find the perimeter of a semicircle of radius 10 cm, including the straight edge.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Semicircle perimeter", statement: "Half circumference + diameter." }], steps: [
            { reasoning: "Curved part $=\\frac12\\times2\\pi\\times10=10\\pi$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Straight edge $=$ diameter $=20$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Total $=10\\pi+20\\approx51.4$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $(10\\pi+20)$ cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(10\\pi+20)$ cm" },
        },
        {
          id: "olm-u5-s1-fo-q14", difficulty: "challenge", totalMarks: 2,
          stem: "Circle A has radius 3 cm and circle B has radius 5 cm. How much bigger is the area of B than the area of A?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$25\\pi$ cm²" },
            { id: "b", text: "$34\\pi$ cm²" },
            { id: "c", text: "$16\\pi$ cm²" },
            { id: "d", text: "$8\\pi$ cm²" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Circle area", statement: "$\\pi r^2$." }], steps: [
            { reasoning: "$A_B-A_A=\\pi(25-9)=16\\pi$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: $16\\pi$ cm².", marks: 1, markCode: "A" },
          ], finalAnswer: "$16\\pi$ cm²" },
        },
        {
          id: "olm-u5-s1-fo-q15", difficulty: "challenge", totalMarks: 1,
          stem: "Which expression gives the area of a sector of radius $r$ and angle $\\theta$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{\\theta}{360}\\pi r^2$" },
            { id: "b", text: "$\\theta\\pi r^2$" },
            { id: "c", text: "$\\frac{\\theta}{180}\\pi r^2$" },
            { id: "d", text: "$\\frac{360}{\\theta}\\pi r^2$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Sector", statement: "Fraction $\\frac{\\theta}{360}$ of circle." }], steps: [{ reasoning: "Standard formula.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{\\theta}{360}\\pi r^2$" },
        },
        {
          id: "olm-u5-s1-fo-q16", difficulty: "challenge", totalMarks: 4,
          stem: "A rectangle has area 50 cm² and its length is twice its width. Find its perimeter.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Solve then perimeter", statement: "Form equation from area." }], steps: [
            { reasoning: "Let width $=w$, length $=2w$: $2w^2=50 \\Rightarrow w^2=25 \\Rightarrow w=5$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Length $=10$ cm.", marks: 1, markCode: "M" },
            { reasoning: "$P=2(10+5)=30$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 30 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "30 cm" },
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
            { id: "a", text: "Split it into standard shapes" },
            { id: "b", text: "Add all side lengths" },
            { id: "c", text: "Use one formula" },
            { id: "d", text: "Estimate" },
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
        {
          id: "olm-u5-s1-co-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The area of a compound shape is best found by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Multiplying all side lengths" },
            { id: "b", text: "Squaring the longest side" },
            { id: "c", text: "Splitting it into standard shapes" },
            { id: "d", text: "Using the perimeter formula" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Decomposition", statement: "Standard approach." }], steps: [{ reasoning: "Split into rectangles/triangles etc.", marks: 1, markCode: "A" }], finalAnswer: "Splitting it into standard shapes" },
        },
        {
          id: "olm-u5-s1-co-q6", difficulty: "foundation", totalMarks: 2,
          stem: "A rectangle 9 cm by 5 cm has a square 2 cm by 2 cm removed from a corner. Find the remaining area.",
          response: { type: "numeric", parts: [{ label: "a", answer: 41, unit: "cm²" }] },
          markscheme: { principles: [{ kind: "technique", name: "Subtraction", statement: "Area = total − hole." }], steps: [
            { reasoning: "$45-4=41$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Answer: 41 cm².", marks: 1, markCode: "A" },
          ], finalAnswer: "41 cm²" },
        },
        {
          id: "olm-u5-s1-co-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Two rectangles of area 12 cm² and 10 cm² are joined with no overlap. The total area is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "102 cm²" },
            { id: "b", text: "22 cm²" },
            { id: "c", text: "120 cm²" },
            { id: "d", text: "12 cm²" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Additive area", statement: "Areas add." }], steps: [{ reasoning: "$12+10=22$ cm².", marks: 1, markCode: "A" }], finalAnswer: "22 cm²" },
        },
        {
          id: "olm-u5-s1-co-q8", difficulty: "core", totalMarks: 2,
          stem: "A shape is a 10 cm by 4 cm rectangle with a triangle of base 4 cm and height 3 cm on top. Find the total area.",
          response: { type: "mcq", choices: [
            { id: "a", text: "40 cm²" },
            { id: "b", text: "6 cm²" },
            { id: "c", text: "52 cm²" },
            { id: "d", text: "46 cm²" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Compound area", statement: "Rectangle + triangle." }], steps: [
            { reasoning: "$40+\\frac12\\times4\\times3=40+6=46$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: 46 cm².", marks: 1, markCode: "A" },
          ], finalAnswer: "46 cm²" },
        },
        {
          id: "olm-u5-s1-co-q9", difficulty: "core", totalMarks: 3,
          stem: "A square plate 12 cm by 12 cm has a circular hole of radius 2 cm drilled through it. Find the area of the plate (the material remaining).",
          response: { type: "numeric", parts: [{ label: "a", answer: 116.43, tolerance: 0.01, unit: "cm²" }] },
          markscheme: { principles: [{ kind: "technique", name: "Hole", statement: "Subtract circle area." }], steps: [
            { reasoning: "$144-\\pi\\times4=144-4\\pi$ cm².", marks: 1, markCode: "M" },
            { reasoning: "$\\approx116.43$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Answer: $144-4\\pi$ cm² ($\\approx116.43$).", marks: 1, markCode: "A" },
          ], finalAnswer: "$144-4\\pi$ cm²" },
        },
        {
          id: "olm-u5-s1-co-q10", difficulty: "core", totalMarks: 3,
          stem: "A field is a rectangle 50 m by 30 m with a triangular corner removed (base 30 m along the width, height 10 m). Find the area of the field.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Subtraction", statement: "Rectangle − triangle." }], steps: [
            { reasoning: "Rectangle $=50\\times30=1500$ m².", marks: 1, markCode: "M" },
            { reasoning: "Triangle $=\\frac12\\times30\\times10=150$ m².", marks: 1, markCode: "M" },
            { reasoning: "Area $=1500-150=1350$ m².", marks: 1, markCode: "A" },
          ], finalAnswer: "1350 m²" },
        },
        {
          id: "olm-u5-s1-co-q11", difficulty: "core", totalMarks: 2,
          stem: "A badge is a 7 cm by 5 cm rectangle with a triangle of base 7 cm and height 4 cm attached on top. What is its total area?",
          response: { type: "mcq", choices: [
            { id: "a", text: "35 cm²" },
            { id: "b", text: "21 cm²" },
            { id: "c", text: "49 cm²" },
            { id: "d", text: "56 cm²" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Compound area", statement: "Rectangle + triangle." }], steps: [
            { reasoning: "$35+\\frac12\\times7\\times4=35+14=49$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: 49 cm².", marks: 1, markCode: "A" },
          ], finalAnswer: "49 cm²" },
        },
        {
          id: "olm-u5-s1-co-q12", difficulty: "challenge", totalMarks: 4,
          stem: "A window has a rectangular base 2 m wide and 1.5 m high, topped by a semicircle of diameter 2 m. Find the perimeter of the window frame.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Compound perimeter", statement: "Outer edges + arc only." }], steps: [
            { reasoning: "Straight edges: $1.5+1.5+2=5$ m.", marks: 1, markCode: "M" },
            { reasoning: "Semicircle arc $=\\frac12\\times\\pi\\times2=\\pi$ m.", marks: 1, markCode: "M" },
            { reasoning: "Total $=5+\\pi\\approx8.14$ m.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $(5+\\pi)$ m.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(5+\\pi)$ m" },
        },
        {
          id: "olm-u5-s1-co-q13", difficulty: "challenge", totalMarks: 2,
          stem: "When finding the perimeter of a compound shape made of joined rectangles, you should…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Multiply the areas" },
            { id: "b", text: "Trace only the outer edges" },
            { id: "c", text: "Use the diagonal" },
            { id: "d", text: "Add all internal edges" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Perimeter", statement: "Outer boundary only." }], steps: [
            { reasoning: "Internal joins are not part of the perimeter.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: trace outer edges.", marks: 1, markCode: "A" },
          ], finalAnswer: "Trace only the outer edges" },
        },
        {
          id: "olm-u5-s1-co-q14", difficulty: "challenge", totalMarks: 4,
          stem: "A rectangle 16 cm by 9 cm has a semicircle of radius 4 cm cut from the middle of one of its 9 cm sides. Find the area of the remaining shape.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Subtraction", statement: "Rectangle − semicircle." }], steps: [
            { reasoning: "Rectangle $=16\\times9=144$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Semicircle $=\\frac12\\pi\\times16=8\\pi$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Area $=144-8\\pi\\approx118.9$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Answer: $(144-8\\pi)$ cm².", marks: 1, markCode: "A" },
          ], finalAnswer: "$(144-8\\pi)$ cm²" },
        },
        {
          id: "olm-u5-s1-co-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A logo is a 10 cm by 6 cm rectangle with a triangle of base 10 cm and height 5 cm attached below. Find its total area.",
          response: { type: "numeric", parts: [{ label: "a", answer: 85, unit: "cm²" }] },
          markscheme: { principles: [{ kind: "technique", name: "Compound area", statement: "Rectangle + triangle." }], steps: [
            { reasoning: "$60+\\frac12\\times10\\times5=60+25=85$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Answer: 85 cm².", marks: 1, markCode: "M" },
            { reasoning: "Check: $\\frac12bh=25$ added to 60 ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "85 cm²" },
        },
        {
          id: "olm-u5-s1-co-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Two rectangles, 8 cm by 5 cm and 5 cm by 3 cm, are joined along their common edge of length 5 cm to make an L-shape. Find its area and perimeter.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Joined shapes", statement: "Area adds; perimeter loses shared edge twice." }], steps: [
            { reasoning: "Area $=8\\times5+5\\times3=40+15=55$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Perimeters $26$ and $16$; shared edge counted twice → subtract $2\\times5=10$.", marks: 1, markCode: "M" },
            { reasoning: "Perimeter $=26+16-10=32$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: area 55 cm², perimeter 32 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "Area 55 cm², perimeter 32 cm" },
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
