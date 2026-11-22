import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "ciem-u5-lesson-5-1",
  code: "5-1",
  title: "Area of 2D Shapes",
  goal: "I CAN calculate the area of rectangles, triangles, parallelograms, trapezia, circles and compound shapes, and solve problems involving rearrangement.",
  standards: ["0580 5.1", "0580 5.2"],
  vocabulary: [
    { term: "Area", definition: "The amount of surface covered by a 2D shape, measured in square units." },
    { term: "Compound shape", definition: "A shape made by joining two or more basic shapes; its area is found by adding or subtracting parts." },
    { term: "Trapezium", definition: "A quadrilateral with one pair of parallel sides (the bases)." },
    { term: "Radius", definition: "The distance from the centre of a circle to any point on the circumference." },
    { term: "Diameter", definition: "A chord through the centre; twice the radius." },
  ],
  concepts: [
    {
      id: "ciem-u5-areas-basic",
      title: "Areas of basic shapes",
      skill: "Calculate areas of rectangles, triangles, parallelograms and trapezia.",
      lesson: {
        sections: [
          {
            heading: "Standard formulas",
            body: "- Rectangle: $A=\\text{length}\\times\\text{width}$\n- Triangle: $A=\\frac12\\times\\text{base}\\times\\text{height}$\n- Parallelogram: $A=\\text{base}\\times\\text{perpendicular height}$\n- Trapezium: $A=\\frac12\\times(\\text{sum of parallel sides})\\times\\text{height}$",
          },
          {
            heading: "Choosing the right formula",
            body: "For a parallelogram the height must be the **perpendicular** distance between the parallel sides — not the slant side. For a trapezium, add the two parallel sides first, then multiply by half the height. If the shape is rotated, identify base and height relative to the parallel sides.",
          },
          {
            heading: "Units",
            body: "Area is measured in square units: cm$^2$, m$^2$, mm$^2$. If dimensions are in cm, the answer is in cm$^2$ — do **not** convert to m$^2$ unless asked.",
          },
        ],
        keyFormulas: [
          { name: "Rectangle", statement: "$l\\times w$" },
          { name: "Triangle", statement: "$\\frac12bh$" },
          { name: "Parallelogram", statement: "$bh$ (perpendicular height)" },
          { name: "Trapezium", statement: "$\\frac12(a+b)h$" },
        ],
        workedExample: {
          problem: "A trapezium has parallel sides $8$ cm and $14$ cm, and height $5$ cm. Find its area.",
          solution: "$A=\\frac12(8+14)\\times5=\\frac12\\times22\\times5=55$ cm$^2$.",
        },
      },
      questions: [
        {
          id: "ciem-u5-areas-basic-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A rectangle is $12$ cm by $7$ cm. What is its area?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$84$ cm$^2$" },
              { id: "b", text: "$38$ cm$^2$" },
              { id: "c", text: "$168$ cm$^2$" },
              { id: "d", text: "$19$ cm$^2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rectangle area", statement: "$A=l\\times w$" },
            ],
            steps: [
              { reasoning: "Multiply the dimensions.", working: "12\\times7=84", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $84$ cm$^2$",
            commonErrors: ["Adding instead of multiplying (perimeter confusion)."],
          },
        },
        {
          id: "ciem-u5-areas-basic-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A triangle has base $14$ cm and perpendicular height $9$ cm. Find its area.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 63, unit: "cm²" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Triangle area", statement: "$A=\\frac12bh$" },
            ],
            steps: [
              { reasoning: "Apply the formula.", working: "A=\\frac12\\times14\\times9", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "=63", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$63$ cm$^2$",
            commonErrors: ["Forgetting the $\\frac12$."],
          },
        },
        {
          id: "ciem-u5-areas-basic-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A parallelogram has base $11$ cm and perpendicular height $6$ cm. Its slant side is $8$ cm. Find its area.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 66, unit: "cm²" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Parallelogram area", statement: "$A=bh$ using the **perpendicular** height." },
            ],
            steps: [
              { reasoning: "Identify the correct height — perpendicular, not the slant side.", working: "h=6\\text{ (perpendicular)}", marks: 1, markCode: "M" },
              { reasoning: "Apply the formula.", working: "A=11\\times6", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "=66", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$66$ cm$^2$",
            commonErrors: ["Using the slant side $8$ cm as the height (gives $88$)."],
          },
        },
        {
          id: "ciem-u5-areas-basic-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A garden is L-shaped: a rectangle $15$ m by $10$ m with a rectangular flower bed $6$ m by $4$ m removed from one corner.",
          parts: [
            { label: "a", prompt: "Find the area of the remaining garden.", marks: 4 },
            { label: "b", prompt: "Grass seed costs $\\$2.50$ per m$^2$. Find the cost to seed the remaining garden.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compound area", statement: "Area of L-shape = large rectangle $-$ removed rectangle." },
            ],
            steps: [
              { part: "a", reasoning: "Area of the large rectangle.", working: "15\\times10=150", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Area of the removed flower bed.", working: "6\\times4=24", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Subtract.", working: "150-24", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the area.", working: "=126\\text{ m}^2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Multiply area by cost per m$^2$.", working: "126\\times2.50", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Compute.", working: "=315", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State with currency symbol.", working: "\\$315", marks: 1, markCode: "A" },
              { part: "b", reasoning: "State the total cost.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $126$ m$^2$ (b) $\\$315$",
            commonErrors: ["Adding the flower bed instead of subtracting.", "Using perimeter instead of area for cost."],
          },
        },
        {
          id: "ciem-u5-areas-basic-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A rectangle is $18$ cm by $6$ cm. What is its area?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$108$ cm$^2$" },
            { id: "b", text: "$216$ cm$^2$" },
            { id: "c", text: "$24$ cm$^2$" },
            { id: "d", text: "$54$ cm$^2$" }
 ],
            correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "formula", name: "Rectangle area", statement: "$A=l\\times w$" } ],
            steps: [ { reasoning: "Multiply the dimensions.", working: "18\\times6=108", marks: 1, markCode: "M" } ],
            finalAnswer: "**(a)** $108$ cm$^2$", commonErrors: ["Adding the dimensions."] },
        },
        {
          id: "ciem-u5-areas-basic-q6", difficulty: "core", totalMarks: 1,
          stem: "A triangle has base $20$ cm and perpendicular height $11$ cm. What is its area?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$110$ cm$^2$" },
            { id: "b", text: "$220$ cm$^2$" },
            { id: "c", text: "$60$ cm$^2$" },
            { id: "d", text: "$200$ cm$^2$" }
 ],
            correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "formula", name: "Triangle area", statement: "$A=\\frac12bh$" } ],
            steps: [ { reasoning: "Use half the base times the height.", working: "\\frac12\\times20\\times11=110", marks: 1, markCode: "M" } ],
            finalAnswer: "**(b)** $110$ cm$^2$", commonErrors: ["Forgetting the $\\frac12$."] },
        },
        {
          id: "ciem-u5-areas-basic-q7", difficulty: "core", totalMarks: 3,
          stem: "A parallelogram has base $15$ cm and perpendicular height $8$ cm. Its slant side is $10$ cm. Find its area.",
          response: { type: "numeric", parts: [ { label: "Area", answer: 120, unit: "cm²" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Parallelogram area", statement: "$A=bh$ using the perpendicular height." } ],
            steps: [
              { reasoning: "Use the perpendicular height, not the slant side.", working: "h=8", marks: 1, markCode: "M" },
              { reasoning: "Apply the formula.", working: "A=15\\times8", marks: 1, markCode: "M" },
              { reasoning: "Compute and state the area.", marks: 1, markCode: "A" } ],
            finalAnswer: "$120$ cm$^2$", commonErrors: ["Using the slant side $10$ cm."] },
        },
        {
          id: "ciem-u5-areas-basic-q8", difficulty: "challenge", totalMarks: 1,
          stem: "A trapezium has parallel sides $12$ cm and $9$ cm and height $7$ cm. What is its area?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$73.5$ cm$^2$" },
            { id: "b", text: "$63$ cm$^2$" },
            { id: "c", text: "$84$ cm$^2$" },
            { id: "d", text: "$147$ cm$^2$" }
 ],
            aorrectChoiceId: "c" },
          markscheme: { principles: [ { kind: "formula", name: "Trapezium area", statement: "$A=\\frac12(a+b)h$" } ],
            steps: [ { reasoning: "Add the parallel sides, halve, then multiply by the height.", working: "\\frac12(12+9)\\times7=73.5", marks: 1, markCode: "M" } ],
            finalAnswer: "**(c)** $73.5$ cm$^2$", commonErrors: ["Multiplying by $h$ before adding the parallel sides."] },
        },
        {
          id: "ciem-u5-areas-basic-q9", difficulty: "core", totalMarks: 3,
          stem: "A trapezium has area $96$ cm$^2$ and height $8$ cm. One parallel side is $9$ cm. Find the other parallel side.",
          response: { type: "numeric", parts: [ { label: "Side", answer: 15, unit: "cm" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Trapezium area", statement: "$A=\\frac12(a+b)h$" } ],
            steps: [
              { reasoning: "Substitute into the area formula.", working: "96=\\frac12(9+b)\\times8", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "24=9+b", marks: 1, markCode: "M" },
              { reasoning: "Solve for $b$.", working: "b=15", marks: 1, markCode: "A" } ],
            finalAnswer: "$15$ cm", commonErrors: ["Forgetting to halve the sum of the parallel sides."] },
        },
        {
          id: "ciem-u5-areas-basic-q10", difficulty: "foundation", totalMarks: 2,
          stem: "A rectangle has length $7.5$ m and width $4$ m. Find its area.",
          response: { type: "numeric", parts: [ { label: "Area", answer: 30, unit: "m²" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Rectangle area", statement: "$A=l\\times w$" } ],
            steps: [
              { reasoning: "Multiply length by width.", working: "7.5\\times4=30", marks: 1, markCode: "M" },
              { reasoning: "State the area with units.", marks: 1, markCode: "A" } ],
            finalAnswer: "$30$ m$^2$", commonErrors: ["Adding $7.5$ and $4$."] },
        },
        {
          id: "ciem-u5-areas-basic-q11", difficulty: "challenge", totalMarks: 1,
          stem: "Which expression gives the area of a parallelogram with base $b$ and perpendicular height $h$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2bh$" },
            { id: "b", text: "$bh$" },
            { id: "c", text: "$\\frac12bh$" },
            { id: "d", text: "$b+h$" }
 ],
            correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "definition", name: "Parallelogram area", statement: "Base times perpendicular height." } ],
            steps: [ { reasoning: "Recall the parallelogram formula.", working: "A=bh", marks: 1, markCode: "B" } ],
            finalAnswer: "**(b)** $bh$", commonErrors: ["Using the triangle formula."] },
        },
        {
          id: "ciem-u5-areas-basic-q12", difficulty: "core", totalMarks: 3,
          stem: "A trapezium has parallel sides $14$ cm and $8$ cm and height $6$ cm. Show that its area is $66$ cm$^2$.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Trapezium area", statement: "$A=\\frac12(a+b)h$" } ],
            steps: [
              { reasoning: "Write the formula.", working: "A=\\frac12(14+8)\\times6", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=\\frac12\\times22\\times6=66", marks: 1, markCode: "M" },
              { reasoning: "State the area.", marks: 1, markCode: "A" } ],
            finalAnswer: "$66$ cm$^2$", commonErrors: ["Adding the parallel sides after multiplying by the height."] },
        },
        {
          id: "ciem-u5-areas-basic-q13", difficulty: "challenge", totalMarks: 4,
          stem: "A rectangular card is $18$ cm by $12$ cm. A triangular corner is cut off with base $6$ cm and height $4$ cm. Find the area of the remaining card.",
          response: { type: "numeric", parts: [ { label: "Area", answer: 204, unit: "cm²" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Compound area", statement: "Remaining area = rectangle $-$ triangle." } ],
            steps: [
              { reasoning: "Area of the rectangle.", working: "18\\times12=216", marks: 1, markCode: "M" },
              { reasoning: "Area of the removed triangle.", working: "\\frac12\\times6\\times4=12", marks: 1, markCode: "M" },
              { reasoning: "Subtract.", working: "216-12=204", marks: 1, markCode: "M" },
              { reasoning: "State the area.", marks: 1, markCode: "A" } ],
            finalAnswer: "$204$ cm$^2$", commonErrors: ["Adding the triangle area instead of subtracting."] },
        },
        {
          id: "ciem-u5-areas-basic-q14", difficulty: "foundation", totalMarks: 3,
          stem: "A right-angled triangle has legs $9$ cm and $12$ cm. Show that its area is $54$ cm$^2$.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Triangle area", statement: "$A=\\frac12bh$" } ],
            steps: [
              { reasoning: "Use the two legs as base and height.", working: "A=\\frac12\\times9\\times12", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=54", marks: 1, markCode: "M" },
              { reasoning: "State the area with units.", marks: 1, markCode: "A" } ],
            finalAnswer: "$54$ cm$^2$", commonErrors: ["Using $9\\times12$ without the $\\frac12$."] },
        },
        {
          id: "ciem-u5-areas-basic-q15", difficulty: "core", totalMarks: 1,
          stem: "A parallelogram has base $13$ cm and perpendicular height $7$ cm. Its slant side is $9$ cm. What is its area?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$45.5$ cm$^2$" },
            { id: "b", text: "$20$ cm$^2$" },
            { id: "c", text: "$117$ cm$^2$" },
            { id: "d", text: "$91$ cm$^2$" }
 ],
            correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "formula", name: "Parallelogram area", statement: "$A=bh$" } ],
            steps: [ { reasoning: "Use base times perpendicular height.", working: "13\\times7=91", marks: 1, markCode: "M" } ],
            finalAnswer: "**(b)** $91$ cm$^2$", commonErrors: ["Using the slant side $9$ cm as the height."] },
        },
        {
          id: "ciem-u5-areas-basic-q16", difficulty: "challenge", totalMarks: 6,
          stem: "A field is made of a rectangle $30$ m by $18$ m joined to a triangular end with base $18$ m and perpendicular height $10$ m.",
          parts: [
            { label: "a", prompt: "Find the area of the rectangular part.", marks: 2 },
            { label: "b", prompt: "Find the area of the triangular part.", marks: 2 },
            { label: "c", prompt: "Find the total area of the field.", marks: 2 } ],
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Rectangle and triangle areas", statement: "$lw$ and $\\frac12bh$." } ],
            steps: [
              { part: "a", reasoning: "Multiply the rectangle dimensions.", working: "30\\times18=540", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the rectangular area.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use half base times height for the triangle.", working: "\\frac12\\times18\\times10=90", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the triangular area.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Add the two areas.", working: "540+90=630", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the total area.", marks: 1, markCode: "A" } ],
            finalAnswer: "(a) $540$ m$^2$ (b) $90$ m$^2$ (c) $630$ m$^2$",
            commonErrors: ["Using $18\\times10$ for the triangle without halving."] },
        },
      ],
    },
    {
      id: "ciem-u5-circles-sectors",
      title: "Circles, sectors and segments",
      skill: "Calculate areas and arc lengths of circles, sectors and segments.",
      lesson: {
        sections: [
          {
            heading: "Circle formulas",
            body: "- Circumference: $C=2\\pi r$ or $\\pi d$\n- Area: $A=\\pi r^2$\n\nUse $\\pi$ on your calculator; leave answers in terms of $\\pi$ only if asked.",
          },
          {
            heading: "Sectors",
            body: "A sector is a 'slice' of a circle defined by a central angle $\\theta$ (in degrees). Fraction of the circle $=\\frac{\\theta}{360}$.\n\n- Arc length $=\\frac{\\theta}{360}\\times2\\pi r$\n- Sector area $=\\frac{\\theta}{360}\\times\\pi r^2$",
          },
          {
            heading: "Segments",
            body: "A segment is the region between a chord and the arc. Its area = sector area $-$ triangle area, where the triangle is formed by the two radii and the chord.",
          },
        ],
        keyFormulas: [
          { name: "Circle area", statement: "$\\pi r^2$" },
          { name: "Circumference", statement: "$2\\pi r$" },
          { name: "Arc length", statement: "$\\frac{\\theta}{360}\\times2\\pi r$" },
          { name: "Sector area", statement: "$\\frac{\\theta}{360}\\times\\pi r^2$" },
          { name: "Segment area", statement: "Sector $-$ triangle" },
        ],
        workedExample: {
          problem: "A sector has radius $10$ cm and angle $72^\\circ$. Find its area.",
          solution: "$A=\\frac{72}{360}\\times\\pi\\times10^2=\\frac{1}{5}\\times100\\pi=20\\pi\\approx62.8$ cm$^2$.",
        },
      },
      questions: [
        {
          id: "ciem-u5-circles-sectors-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A circle has radius $5$ cm. What is its area?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5\\pi$ cm$^2$" },
              { id: "b", text: "$25\\pi$ cm$^2$" },
              { id: "c", text: "$50\\pi$ cm$^2$" },
              { id: "d", text: "$10\\pi$ cm$^2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Circle area", statement: "$A=\\pi r^2$" },
            ],
            steps: [
              { reasoning: "Apply the formula.", working: "\\pi\\times5^2=25\\pi", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $25\\pi$ cm$^2$",
            commonErrors: ["Using $2\\pi r$ (circumference) instead of $\\pi r^2$."],
          },
        },
        {
          id: "ciem-u5-circles-sectors-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the area of a sector with radius $12$ cm and angle $150^\\circ$. Give your answer in terms of $\\pi$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sector area", statement: "$\\frac{\\theta}{360}\\times\\pi r^2$" },
            ],
            steps: [
              { reasoning: "Apply the formula.", working: "\\frac{150}{360}\\times\\pi\\times144", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "=60\\pi \\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$60\\pi$ cm$^2$",
            commonErrors: ["Using $\\theta=150$ as a fraction of $180$ instead of $360$."],
          },
        },
        {
          id: "ciem-u5-circles-sectors-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A circular plate of radius $14$ cm has a sector of angle $90^\\circ$ removed. Find the area of the remaining plate.",
          response: { type: "numeric", parts: [{ label: "Remaining area", answer: 461.8, tolerance: 0.5, unit: "cm²" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Circle and sector areas", statement: "$\\pi r^2$ and $\\frac{\\theta}{360}\\pi r^2$" },
            ],
            steps: [
              { reasoning: "Area of the full circle.", working: "\\pi\\times14^2=196\\pi", marks: 1, markCode: "M" },
              { reasoning: "Area of the removed sector ($90^\\circ$ is a quarter).", working: "\\frac{90}{360}\\times196\\pi=49\\pi", marks: 1, markCode: "M" },
              { reasoning: "Subtract.", working: "196\\pi-49\\pi=147\\pi", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "147\\pi\\approx462.2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$147\\pi \\approx 462$ cm$^2$",
            commonErrors: ["Using diameter instead of radius."],
            examinerNote: "Accept $147\\pi$ or $462$ (2 d.p.) — ensure consistency.",
          },
        },
        {
          id: "ciem-u5-circles-sectors-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A circle has centre $O$ and radius $10$ cm. Points $A$ and $B$ on the circumference form a sector $AOB$ with angle $AOB=60^\\circ$.",
          parts: [
            { label: "a", prompt: "Find the length of arc $AB$.", marks: 2 },
            { label: "b", prompt: "Find the area of sector $AOB$.", marks: 3 },
            { label: "c", prompt: "Find the area of triangle $AOB$.", marks: 2 },
            { label: "d", prompt: "Hence find the area of the minor segment cut off by chord $AB$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Arc length", statement: "$\\frac{\\theta}{360}\\times2\\pi r$" },
              { kind: "formula", name: "Sector area", statement: "$\\frac{\\theta}{360}\\times\\pi r^2$" },
              { kind: "formula", name: "Triangle area", statement: "$\\frac12ab\\sin C$ or $\\frac12\\times\\text{base}\\times\\text{height}$" },
            ],
            steps: [
              { part: "a", reasoning: "Apply arc length formula with $\\theta=60$, $r=10$.", working: "\\frac{60}{360}\\times2\\pi\\times10", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify.", working: "=\\frac{10\\pi}{3} cm \\approx10.5 cm", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Apply sector area formula.", working: "\\frac{60}{360}\\times\\pi\\times100", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify fraction.", working: "=\\frac{100\\pi}{6}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the area.", working: "=\\frac{50\\pi}{3} \\text{ cm}^2 \\approx52.4 \\text{ cm}^2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Triangle $AOB$ is equilateral ($OA=OB=10$, angle $60^\\circ$), so $AB=10$; area $=\\frac12\\times10\\times10\\times\\sin60^\\circ$ or $\\frac{\\sqrt3}{4}\\times10^2$.", working: "\\frac{\\sqrt3}{4}\\times100=25\\sqrt3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the area.", working: "\\approx43.3 \\text{ cm}^2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Segment = sector $-$ triangle.", working: "\\frac{50\\pi}{3}-25\\sqrt3", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "\\approx52.36-43.30\\approx9.06 \\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac{10\\pi}{3}$ cm (b) $\\frac{50\\pi}{3}$ cm$^2$ (c) $25\\sqrt3$ cm$^2$ (d) $\\approx9.06$ cm$^2$",
            commonErrors: ["In (d) adding instead of subtracting.", "Using $180^\\circ$ instead of $360^\\circ$ in the sector fraction."],
          },
        },
        {
          id: "ciem-u5-circles-sectors-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A circle has radius $6$ cm. What is its area?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$72\\pi$ cm$^2$" },
            { id: "b", text: "$12\\pi$ cm$^2$" },
            { id: "c", text: "$18\\pi$ cm$^2$" },
            { id: "d", text: "$36\\pi$ cm$^2$" }
 ],
            correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "formula", name: "Circle area", statement: "$A=\\pi r^2$" } ],
            steps: [ { reasoning: "Square the radius and multiply by $\\pi$.", working: "\\pi\\times6^2=36\\pi", marks: 1, markCode: "M" } ],
            finalAnswer: "**(a)** $36\\pi$ cm$^2$", commonErrors: ["Using $2\\pi r$ for area."] },
        },
        {
          id: "ciem-u5-circles-sectors-q6", difficulty: "core", totalMarks: 1,
          stem: "A circle has radius $7$ cm. What is its circumference?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$28\\pi$ cm" },
            { id: "b", text: "$14\\pi$ cm" },
            { id: "c", text: "$7\\pi$ cm" },
            { id: "d", text: "$49\\pi$ cm" }
 ],
            correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "formula", name: "Circumference", statement: "$C=2\\pi r$" } ],
            steps: [ { reasoning: "Use twice the radius times $\\pi$.", working: "2\\pi\\times7=14\\pi", marks: 1, markCode: "M" } ],
            finalAnswer: "**(b)** $14\\pi$ cm", commonErrors: ["Using $\\pi r^2$."] },
        },
        {
          id: "ciem-u5-circles-sectors-q7", difficulty: "core", totalMarks: 3,
          stem: "Find the area of a sector with radius $10$ cm and angle $90^\\circ$.",
          response: { type: "numeric", parts: [ { label: "Area", answer: 78.5, tolerance: 0.1, unit: "cm²" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Sector area", statement: "$\\frac{\\theta}{360}\\pi r^2$" } ],
            steps: [
              { reasoning: "Use the sector fraction of the full circle.", working: "\\frac{90}{360}\\times\\pi\\times10^2", marks: 1, markCode: "M" },
              { reasoning: "Simplify to $25\\pi$.", working: "25\\pi", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and state the area.", marks: 1, markCode: "A" } ],
            finalAnswer: "$25\\pi \\approx 78.5$ cm$^2$", commonErrors: ["Using $180^\\circ$ as the denominator."] },
        },
        {
          id: "ciem-u5-circles-sectors-q8", difficulty: "challenge", totalMarks: 1,
          stem: "A sector has radius $12$ cm and angle $60^\\circ$. What is the length of its arc?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$4\\pi$ cm" },
            { id: "b", text: "$8\\pi$ cm" },
            { id: "c", text: "$2\\pi$ cm" },
            { id: "d", text: "$16\\pi$ cm" }
 ],
            correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "formula", name: "Arc length", statement: "$\\frac{\\theta}{360}\\times2\\pi r$" } ],
            steps: [ { reasoning: "Take the fraction of the circumference.", working: "\\frac{60}{360}\\times2\\pi\\times12=4\\pi", marks: 1, markCode: "M" } ],
            finalAnswer: "**(b)** $4\\pi$ cm", commonErrors: ["Using the sector area formula."] },
        },
        {
          id: "ciem-u5-circles-sectors-q9", difficulty: "core", totalMarks: 3,
          stem: "A circle has area $144\\pi$ cm$^2$. Find its radius.",
          response: { type: "numeric", parts: [ { label: "Radius", answer: 12, unit: "cm" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Circle area", statement: "$A=\\pi r^2$" } ],
            steps: [
              { reasoning: "Set $\\pi r^2=144\\pi$.", working: "r^2=144", marks: 1, markCode: "M" },
              { reasoning: "Take the positive square root.", working: "r=12", marks: 1, markCode: "M" },
              { reasoning: "State the radius.", marks: 1, markCode: "A" } ],
            finalAnswer: "$12$ cm", commonErrors: ["Giving $r^2=144$ as the radius."] },
        },
        {
          id: "ciem-u5-circles-sectors-q10", difficulty: "foundation", totalMarks: 3,
          stem: "A sector has radius $5$ cm and angle $120^\\circ$. Find its arc length.",
          response: { type: "numeric", parts: [ { label: "Arc length", answer: 10.5, tolerance: 0.1, unit: "cm" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Arc length", statement: "$\\frac{\\theta}{360}\\times2\\pi r$" } ],
            steps: [
              { reasoning: "Substitute the angle and radius.", working: "\\frac{120}{360}\\times2\\pi\\times5", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "=\\frac{10\\pi}{3}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and state the length.", marks: 1, markCode: "A" } ],
            finalAnswer: "$\\frac{10\\pi}{3} \\approx 10.5$ cm", commonErrors: ["Using $\\pi r^2$ instead of $2\\pi r$."] },
        },
        {
          id: "ciem-u5-circles-sectors-q11", difficulty: "challenge", totalMarks: 1,
          stem: "The area of a segment of a circle is found by subtracting which area from the sector area?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The area of the major sector" },
            { id: "b", text: "The circumference of the circle" },
            { id: "c", text: "The area of the whole circle" },
            { id: "d", text: "The area of the triangle formed by the two radii and the chord" }
 ],
            correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "definition", name: "Segment", statement: "Segment = sector $-$ triangle." } ],
            steps: [ { reasoning: "Recall the segment formula.", working: "\\text{sector}-\\text{triangle}", marks: 1, markCode: "B" } ],
            finalAnswer: "**(b)** The triangle formed by the two radii and chord", commonErrors: ["Subtracting the whole circle area."] },
        },
        {
          id: "ciem-u5-circles-sectors-q12", difficulty: "core", totalMarks: 3,
          stem: "Find the area of a sector with radius $8$ cm and angle $135^\\circ$, leaving your answer in terms of $\\pi$.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Sector area", statement: "$\\frac{\\theta}{360}\\pi r^2$" } ],
            steps: [
              { reasoning: "Substitute into the sector formula.", working: "\\frac{135}{360}\\times\\pi\\times8^2", marks: 1, markCode: "M" },
              { reasoning: "Simplify the fraction and product.", working: "=\\frac38\\times64\\pi=24\\pi", marks: 1, markCode: "M" },
              { reasoning: "State the area.", marks: 1, markCode: "A" } ],
            finalAnswer: "$24\\pi$ cm$^2$", commonErrors: ["Not simplifying $\\frac{135}{360}$ to $\\frac38$."] },
        },
        {
          id: "ciem-u5-circles-sectors-q13", difficulty: "challenge", totalMarks: 3,
          stem: "A circular pizza has radius $12$ cm and is cut into $8$ equal slices. Find the area of one slice.",
          response: { type: "numeric", parts: [ { label: "Area", answer: 56.5, tolerance: 0.1, unit: "cm²" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Sector area", statement: "Each slice is $\\frac18$ of the circle." } ],
            steps: [
              { reasoning: "Area of the whole pizza.", working: "\\pi\\times12^2=144\\pi", marks: 1, markCode: "M" },
              { reasoning: "Divide by 8.", working: "\\frac{144\\pi}{8}=18\\pi", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and state the area.", marks: 1, markCode: "A" } ],
            finalAnswer: "$18\\pi \\approx 56.5$ cm$^2$", commonErrors: ["Using the circumference instead of the area."] },
        },
        {
          id: "ciem-u5-circles-sectors-q14", difficulty: "foundation", totalMarks: 3,
          stem: "Find the area of a circle with diameter $10$ cm.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Circle area", statement: "$A=\\pi r^2$" } ],
            steps: [
              { reasoning: "Halve the diameter to get the radius.", working: "r=5", marks: 1, markCode: "M" },
              { reasoning: "Apply the area formula.", working: "A=\\pi\\times5^2=25\\pi", marks: 1, markCode: "M" },
              { reasoning: "State the area.", marks: 1, markCode: "A" } ],
            finalAnswer: "$25\\pi \\approx 78.5$ cm$^2$", commonErrors: ["Using $10$ as the radius."] },
        },
        {
          id: "ciem-u5-circles-sectors-q15", difficulty: "core", totalMarks: 1,
          stem: "A sector has angle $45^\\circ$ and radius $8$ cm. What fraction of the whole circle is the sector area?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac12$" },
            { id: "b", text: "$\\frac14$" },
            { id: "c", text: "$\\frac16$" },
            { id: "d", text: "$\\frac18$" }
 ],
            correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "formula", name: "Sector fraction", statement: "$\\frac{\\theta}{360}$" } ],
            steps: [ { reasoning: "Use the angle as a fraction of $360^\\circ$.", working: "\\frac{45}{360}=\\frac18", marks: 1, markCode: "M" } ],
            finalAnswer: "**(b)** $\\frac18$", commonErrors: ["Using $180^\\circ$ as the denominator."] },
        },
        {
          id: "ciem-u5-circles-sectors-q16", difficulty: "challenge", totalMarks: 8,
          stem: "A circle has centre $O$ and radius $12$ cm. Points $A$ and $B$ on the circumference form a sector $AOB$ with angle $120^\\circ$.",
          parts: [
            { label: "a", prompt: "Find the length of arc $AB$.", marks: 2 },
            { label: "b", prompt: "Find the area of sector $AOB$.", marks: 3 },
            { label: "c", prompt: "Find the area of the minor segment cut off by chord $AB$.", marks: 3 } ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "formula", name: "Arc length", statement: "$\\frac{\\theta}{360}\\times2\\pi r$" },
            { kind: "formula", name: "Sector area", statement: "$\\frac{\\theta}{360}\\pi r^2$" },
            { kind: "formula", name: "Segment", statement: "Sector area $-$ triangle area." } ],
            steps: [
              { part: "a", reasoning: "Apply the arc length formula.", working: "\\frac{120}{360}\\times2\\pi\\times12=8\\pi", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the arc length.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Apply the sector area formula.", working: "\\frac{120}{360}\\times\\pi\\times12^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify.", working: "=48\\pi", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the sector area.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Triangle $AOB$ has area $\\frac12\\times12\\times12\\times\\sin120^\\circ$.", working: "=36\\sqrt3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Subtract the triangle from the sector.", working: "48\\pi-36\\sqrt3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the segment area.", marks: 1, markCode: "A" } ],
            finalAnswer: "(a) $8\\pi$ cm (b) $48\\pi$ cm$^2$ (c) $48\\pi-36\\sqrt3 \\approx 88.4$ cm$^2$",
            commonErrors: ["In (c) adding the triangle instead of subtracting.", "Using $\\sin60^\\circ$ for the $120^\\circ$ triangle incorrectly."] },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u5-areas-notes",
      title: "Area of 2D shapes — revision notes",
      summary: "Areas of rectangles, triangles, parallelograms, trapezia, circles, sectors and segments.",
      sections: [
        {
          heading: "Basic shapes",
          body: "- Rectangle: $l\\times w$\n- Triangle: $\\frac12bh$\n- Parallelogram: $bh$ (perpendicular height only)\n- Trapezium: $\\frac12(a+b)h$ where $a,b$ are the parallel sides\n\n**Worked example.** Trapezium $a=8$, $b=14$, $h=5$: $A=\\frac12(22)(5)=55$ cm$^2$.",
        },
        {
          heading: "Circles and sectors",
          body: "- Circle: $A=\\pi r^2$, $C=2\\pi r$\n- Arc: $\\frac{\\theta}{360}\\times2\\pi r$\n- Sector: $\\frac{\\theta}{360}\\times\\pi r^2$\n- Segment = sector $-$ triangle\n\n**Worked example.** $r=10$, $\\theta=60^\\circ$: arc $=\\frac{10\\pi}{3}$ cm, sector $=\\frac{50\\pi}{3}$ cm$^2$.",
        },
        {
          heading: "Exam technique",
          body: "- Parallelogram height must be perpendicular — the slant side is a distractor.\n- Sector/arc formulas use $\\frac{\\theta}{360}$, not $\\frac{\\theta}{180}$.\n- Compound shapes: split or subtract; draw the split lines on the diagram.",
        },
      ],
    },
  ],
};
