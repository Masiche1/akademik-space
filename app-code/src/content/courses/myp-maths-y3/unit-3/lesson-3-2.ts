import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "mypm3-u3-lesson-3-2",
  code: "3-2",
  title: "Measurement Extended",
  goal: "I CAN calculate areas using trigonometric heights, find volumes and surface areas of prisms and cylinders, and convert metric units in multi-step problems.",
  standards: [
    "MYP Maths: Geometry and trigonometry",
    "Criterion A: Knowing and understanding",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "Perpendicular height", definition: "The shortest distance from a vertex to the opposite side, meeting it at right angles." },
    { term: "Prism", definition: "A solid with two identical parallel faces (ends) and rectangular sides." },
    { term: "Cylinder", definition: "A solid with two circular ends joined by a curved surface." },
    { term: "Surface area", definition: "The total area of all faces of a solid." },
    { term: "Metric conversion", definition: "Changing between units like km to m, cm³ to litres, using powers of 10." },
  ],
  concepts: [
    {
      id: "mypm3-u3-areas",
      title: "Areas with trigonometric heights",
      skill: "Find areas of triangles, parallelograms and trapezia using perpendicular heights including trigonometric heights.",
      lesson: {
        sections: [
          {
            heading: "Area formulas",
            body: `The standard formulas need the **perpendicular height**:

$$\\text{Triangle}=\\frac{1}{2}bh,\\quad \\text{Parallelogram}=bh,\\quad \\text{Trapezium}=\\frac{1}{2}(a+b)h$$

where $b$ is the base and $h$ the perpendicular height.`,
          },
          {
            heading: "Finding the height with trig",
            body: "When only a slanted side and an angle are given, use trigonometry to find $h$ first. For a triangle with base 10 cm and a side of 8 cm at $30^\\circ$ to the base: $h=8\\sin30^\\circ=4$ cm, so area $=\\frac{1}{2}\\times10\\times4=20$ cm².",
          },
          {
            heading: "Compound shapes",
            body: "Split compound shapes into simpler parts, find each area, then add or subtract. For a shape made of a rectangle and a triangle on top, calculate each separately.",
          },
        ],
        keyFormulas: [
          { name: "Triangle area", statement: "$A=\\frac{1}{2}bh$" },
          { name: "Parallelogram area", statement: "$A=bh$" },
          { name: "Trapezium area", statement: "$A=\\frac{1}{2}(a+b)h$" },
        ],
        workedExample: {
          problem: "A triangle has base 12 cm and the two equal sides are 10 cm each, meeting at the apex. Find the area.",
          solution: "The height splits the triangle into two right-angled triangles with hypotenuse 10 and base 6. Height $=\\sqrt{10^2-6^2}=\\sqrt{64}=8$. Area $=\\frac{1}{2}\\times12\\times8=48$ cm².",
        },
      },
      questions: [
        {
          id: "mypm3-u3-areas-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A triangle has base 8 cm and perpendicular height 5 cm. What is its area?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$20$ cm²" },
              { id: "b", text: "$40$ cm²" },
              { id: "c", text: "$13$ cm²" },
              { id: "d", text: "$80$ cm²" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Triangle area", statement: "$A=\\frac{1}{2}bh$" },
            ],
            steps: [
              { reasoning: "Apply the formula.", working: "A=\\frac{1}{2}\\times8\\times5=20", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $20$ cm²",
            commonErrors: ["Forgetting the half: $8\\times5=40$."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u3-areas-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A parallelogram has base 9 cm and perpendicular height 4 cm. A triangle is drawn inside it with the same base and height. Find the area of the triangle.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 18, unit: "cm²" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Triangle area", statement: "$A=\\frac{1}{2}bh$" },
            ],
            steps: [
              { reasoning: "Apply triangle area formula with the same base and height.", working: "A=\\frac{1}{2}\\times9\\times4=18", marks: 1, markCode: "M" },
              { reasoning: "State the area.", working: "18\\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$18$ cm²",
            commonErrors: ["Using the parallelogram formula without the half.", "Using the slant side instead of the perpendicular height."],
            examinerNote: "M1 for formula, A1 for 18.",
          },
        },
        {
          id: "mypm3-u3-areas-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A trapezium has parallel sides of length 8 cm and 12 cm, and a perpendicular height of 5 cm. Find its area.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 50, unit: "cm²" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Trapezium area", statement: "$A=\\frac{1}{2}(a+b)h$" },
            ],
            steps: [
              { reasoning: "Apply the trapezium formula.", working: "A=\\frac{1}{2}(8+12)\\times5", marks: 1, markCode: "M" },
              { reasoning: "Simplify inside the brackets.", working: "\\frac{1}{2}\\times20\\times5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "A=50\\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$50$ cm²",
            commonErrors: ["Using $(a+b)h$ without the half.", "Adding the parallel sides incorrectly."],
            examinerNote: "M1 for formula, M1 for simplification, A1 for 50.",
          },
        },
        {
          id: "mypm3-u3-areas-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A triangular garden has a base of 14 m. The two equal sides are each 10 m long and meet at the apex.",
          parts: [
            { label: "a", prompt: "Find the perpendicular height of the triangle from the apex to the base.", marks: 2 },
            { label: "b", prompt: "Find the area of the garden.", marks: 2 },
            { label: "c", prompt: "A path of width 1 m is built along the base inside the garden. Find the area of the path.", marks: 2 },
            { label: "d", prompt: "Find the area of the remaining garden (excluding the path).", marks: 2 },
          ],
          response: { type: "numeric", parts: [{ label: "(a) Height", answer: 7.14, tolerance: 0.01, unit: "m" }, { label: "(b) Area", answer: 50.0, tolerance: 0.1, unit: "m²" }, { label: "(c) Path area", answer: 14, unit: "m²" }, { label: "(d) Remaining area", answer: 36.0, tolerance: 0.1, unit: "m²" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras' theorem", statement: "$a^2+b^2=c^2$" },
              { kind: "formula", name: "Triangle area", statement: "$A=\\frac{1}{2}bh$" },
            ],
            steps: [
              { part: "a", reasoning: "The height splits the triangle into two right-angled triangles with hypotenuse 10 and base 7 (half of 14).", working: "h=\\sqrt{10^2-7^2}=\\sqrt{100-49}=\\sqrt{51}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate the square root.", working: "h=\\sqrt{51}\\approx7.14\\text{ m}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Apply triangle area formula.", working: "A=\\frac{1}{2}\\times14\\times7.14\\approx50.0\\text{ m}^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the area to 3 s.f.", working: "50.0\\text{ m}^2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The path is a rectangle along the base: length 14 m, width 1 m.", working: "A_{path}=14\\times1=14\\text{ m}^2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the area.", working: "14\\text{ m}^2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Subtract the path area from the total.", working: "50.0-14=36.0\\text{ m}^2", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the remaining area.", working: "36.0\\text{ m}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $h\\approx7.14$ m (b) $50.0\\text{ m}^2$ (c) $14\\text{ m}^2$ (d) $36.0\\text{ m}^2$",
            commonErrors: ["Using the full base 14 instead of half-base 7 in Pythagoras.", "Forgetting to subtract the path area."],
            examinerNote: "M1 A1 per part; accept $\\sqrt{51}$ exact form for (a).",
          },
        },
        {
          id: "mypm3-u3-areas-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A triangle has base 10 cm and perpendicular height 6 cm. What is its area?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$30$ cm²" },
              { id: "b", text: "$60$ cm²" },
              { id: "c", text: "$16$ cm²" },
              { id: "d", text: "$600$ cm²" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Triangle area", statement: "$A=\\frac{1}{2}bh$." },
            ],
            steps: [
              { reasoning: "Area = half × base × height.", working: "\\frac{1}{2} \\times 10 \\times 6 = 30", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $30$ cm²",
            commonErrors: ["Forgetting the half factor."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u3-areas-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A parallelogram has base 12 cm and perpendicular height 5 cm. What is its area?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$30$ cm²" },
              { id: "b", text: "$60$ cm²" },
              { id: "c", text: "$17$ cm²" },
              { id: "d", text: "$600$ cm²" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Parallelogram area", statement: "$A=bh$." },
            ],
            steps: [
              { reasoning: "Area = base × perpendicular height.", working: "12 \\times 5 = 60", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $60$ cm²",
            commonErrors: ["Using the triangle formula with a half factor."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u3-areas-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A trapezium has parallel sides 4 cm and 10 cm and perpendicular height 6 cm. What is its area?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$42$ cm²" },
              { id: "b", text: "$84$ cm²" },
              { id: "c", text: "$24$ cm²" },
              { id: "d", text: "$28$ cm²" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Trapezium area", statement: "$A=\\frac{1}{2}(a+b)h$." },
            ],
            steps: [
              { reasoning: "$A=\\frac{1}{2}(4+10) \\times 6 = 42$.", working: "42 cm²", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $42$ cm²",
            commonErrors: ["Forgetting the half factor."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u3-areas-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A triangle has base 8 cm. A side of length 10 cm makes an angle of $30^\\circ$ with the base. What is the perpendicular height?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$ cm" },
              { id: "b", text: "$10$ cm" },
              { id: "c", text: "$8.66$ cm" },
              { id: "d", text: "$20$ cm" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sine ratio", statement: "$h=10\\sin30^\\circ=5$." },
            ],
            steps: [
              { reasoning: "Height is opposite the 30° angle on the 10 cm side.", working: "10 \\times \\frac{1}{2}=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $5$ cm",
            commonErrors: ["Using the slant side 10 cm as the height."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u3-areas-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A shape is a rectangle 6 cm by 4 cm with a triangle on top of base 6 cm and height 3 cm. What is the total area?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$27$ cm²" },
              { id: "b", text: "$33$ cm²" },
              { id: "c", text: "$39$ cm²" },
              { id: "d", text: "$45$ cm²" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Compound shapes", statement: "Split into a rectangle and a triangle, then add areas." },
            ],
            steps: [
              { reasoning: "Rectangle $24$ cm² plus triangle $\\frac{1}{2} \\times 6 \\times 3=9$ cm² gives $33$ cm².", working: "24+9=33", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $33$ cm²",
            commonErrors: ["Forgetting the triangle's half factor."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u3-areas-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A triangle has base 12 cm and a side of length 10 cm making an angle of $30^\\circ$ with the base. Find its area.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 30, unit: "cm²" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Triangle area", statement: "$A=\\frac{1}{2}bh$." },
              { kind: "formula", name: "Sine ratio", statement: "$h=10\\sin30^\\circ=5$." },
            ],
            steps: [
              { reasoning: "Find height first: $h=10\\sin30^\\circ=5$.", working: "h=5 cm", marks: 1, markCode: "M" },
              { reasoning: "Area = $\\frac{1}{2} \\times 12 \\times 5=30$.", working: "30 cm²", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$30$ cm²",
            commonErrors: ["Using 10 cm as the height instead of finding h."],
            examinerNote: "M1 for height, A1 for area.",
          },
        },
        {
          id: "mypm3-u3-areas-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A trapezium has parallel sides 7 cm and 13 cm and perpendicular height 8 cm. Find its area.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 80, unit: "cm²" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Trapezium area", statement: "$A=\\frac{1}{2}(a+b)h$." },
            ],
            steps: [
              { reasoning: "Add parallel sides and halve: $\\frac{1}{2}(7+13)=10$.", working: "10 \\times 8", marks: 1, markCode: "M" },
              { reasoning: "Multiply by height.", working: "80 cm²", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$80$ cm²",
            commonErrors: ["Forgetting the half in the trapezium formula."],
            examinerNote: "M1 for setup, A1 for 80.",
          },
        },
        {
          id: "mypm3-u3-areas-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An isosceles triangle has base 16 cm and equal sides of length 10 cm. Find its area.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 48, unit: "cm²" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras' theorem", statement: "The height splits the triangle into two right triangles with base 8." },
              { kind: "formula", name: "Triangle area", statement: "$A=\\frac{1}{2}bh$." },
            ],
            steps: [
              { reasoning: "$h=\\sqrt{10^2-8^2}=\\sqrt{36}=6$.", working: "h=6 cm", marks: 1, markCode: "M" },
              { reasoning: "Area = $\\frac{1}{2} \\times 16 \\times 6=48$.", working: "48 cm²", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$48$ cm²",
            commonErrors: ["Using the full base 16 in Pythagoras instead of half-base 8."],
            examinerNote: "M1 for height, A1 for area.",
          },
        },
        {
          id: "mypm3-u3-areas-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A shape is made by removing a triangle with base 4 cm and height 3 cm from a rectangle 8 cm by 5 cm. Find the remaining area.",
          response: { type: "numeric", parts: [{ label: "Remaining area", answer: 34, unit: "cm²" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Compound shapes", statement: "Find the rectangle area and subtract the triangle area." },
            ],
            steps: [
              { reasoning: "Rectangle area $40$ cm²; triangle area $\\frac{1}{2} \\times 4 \\times 3=6$ cm².", working: "40-6", marks: 1, markCode: "M" },
              { reasoning: "Subtract.", working: "34 cm²", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$34$ cm²",
            commonErrors: ["Adding the triangle area instead of subtracting."],
            examinerNote: "M1 for both areas, A1 for 34.",
          },
        },
        {
          id: "mypm3-u3-areas-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An isosceles triangle has base 18 cm and equal sides of length 15 cm. Find the perpendicular height from the apex to the base and hence the area.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Pythagoras' theorem", statement: "Half-base is 9, hypotenuse 15." },
              { kind: "formula", name: "Triangle area", statement: "$A=\\frac{1}{2}bh$." },
            ],
            steps: [
              { reasoning: "The height bisects the base, giving half-base 9.", working: "9 cm", marks: 1, markCode: "R" },
              { reasoning: "$h=\\sqrt{15^2-9^2}=\\sqrt{144}=12$.", working: "h=12 cm", marks: 1, markCode: "M" },
              { reasoning: "Area = $\\frac{1}{2} \\times 18 \\times 12=108$ cm².", working: "108 cm²", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$h=12$ cm; area $=108$ cm².",
            commonErrors: ["Using 18 as the half-base in Pythagoras."],
            examinerNote: "R1 for half-base, M1 for height, A1 for area.",
          },
        },
        {
          id: "mypm3-u3-areas-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A courtyard shape is a rectangle 7 m by 4 m with a triangle on top of base 7 m and height 5 m. Find the total area and explain how you split the shape.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Compound shapes", statement: "Split into simpler parts whose areas can be found directly." },
            ],
            steps: [
              { reasoning: "Rectangle area: $7 \\times 4=28$ m².", working: "28 m²", marks: 1, markCode: "M" },
              { reasoning: "Triangle area: $\\frac{1}{2} \\times 7 \\times 5=17.5$ m².", working: "17.5 m²", marks: 1, markCode: "M" },
              { reasoning: "Total = $28+17.5=45.5$ m²; explain the split into rectangle plus triangle.", working: "45.5 m²", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$45.5$ m²; split into rectangle and triangle.",
            commonErrors: ["Treating the triangle as a rectangle."],
            examinerNote: "M1 for each part, R1 for split explanation.",
          },
        },
        {
          id: "mypm3-u3-areas-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A triangle and a parallelogram have the same base 9 cm and perpendicular height 6 cm. Find both areas and explain the relationship between them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Triangle area", statement: "$A=\\frac{1}{2}bh$." },
              { kind: "formula", name: "Parallelogram area", statement: "$A=bh$." },
            ],
            steps: [
              { reasoning: "Triangle area = $\\frac{1}{2} \\times 9 \\times 6=27$ cm².", working: "27 cm²", marks: 1, markCode: "M" },
              { reasoning: "Parallelogram area = $9 \\times 6=54$ cm².", working: "54 cm²", marks: 1, markCode: "M" },
              { reasoning: "The parallelogram area is double the triangle area because it lacks the half factor.", working: "54=2 \\times 27", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Triangle $27$ cm², parallelogram $54$ cm²; parallelogram is double.",
            commonErrors: ["Using the same formula for both shapes."],
            examinerNote: "M1 for each area, R1 for relationship.",
          },
        },
      ],
    },
    {
      id: "mypm3-u3-volume-surface",
      title: "Volume and surface area of prisms and cylinders",
      skill: "Calculate volumes and surface areas of prisms and cylinders, and convert metric units in multi-step problems.",
      lesson: {
        sections: [
          {
            heading: "Prisms",
            body: `A **prism** has two identical ends and rectangular sides. Volume is the area of the end multiplied by the length (depth):

$$V=\\text{area of end}\\times\\text{length}$$

For a cuboid $a\\times b\\times c$: $V=abc$.`,
          },
          {
            heading: "Cylinders",
            body: `A cylinder has circular ends of radius $r$ and height $h$:

$$V=\\pi r^2h$$

Surface area $=2\\pi r^2+2\\pi rh$ (two circles plus the curved surface).`,
          },
          {
            heading: "Metric conversions",
            body: "Convert units **before** calculating. Key conversions: $1\\text{ km}=1000\\text{ m}$, $1\\text{ m}=100\\text{ cm}$, $1\\text{ m}^3=1000\\text{ litres}$, $1\\text{ litre}=1000\\text{ cm}^3$, $1\\text{ kg}=1000\\text{ g}$.",
          },
        ],
        keyFormulas: [
          { name: "Prism volume", statement: "$V=\\text{area of end}\\times\\text{length}$" },
          { name: "Cylinder volume", statement: "$V=\\pi r^2h$" },
          { name: "Cylinder surface area", statement: "$SA=2\\pi r^2+2\\pi rh$" },
        ],
        workedExample: {
          problem: "A cylindrical tank has radius 0.5 m and height 2 m. Find its volume in litres.",
          solution: "$V=\\pi(0.5)^2(2)=\\pi\\times0.25\\times2=0.5\\pi\\approx1.57\\text{ m}^3$. Since $1\\text{ m}^3=1000\\text{ litres}$, $V\\approx1570$ litres.",
        },
      },
      questions: [
        {
          id: "mypm3-u3-volume-surface-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A cuboid measures 3 cm by 4 cm by 5 cm. What is its volume?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$60$ cm³" },
              { id: "b", text: "$12$ cm³" },
              { id: "c", text: "$120$ cm³" },
              { id: "d", text: "$30$ cm³" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cuboid volume", statement: "$V=abc$" },
            ],
            steps: [
              { reasoning: "Multiply the three dimensions.", working: "V=3\\times4\\times5=60", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $60$ cm³",
            commonErrors: ["Adding instead of multiplying."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u3-volume-surface-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cylinder has radius 3 cm and height 10 cm. Find its volume, giving your answer in terms of $\\pi$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cylinder volume", statement: "$V=\\pi r^2h$" },
            ],
            steps: [
              { reasoning: "Apply the formula.", working: "V=\\pi\\times3^2\\times10=\\pi\\times9\\times10", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "V=90\\pi\\text{ cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$90\\pi$ cm³",
            commonErrors: ["Using $2\\pi r$ instead of $\\pi r^2$.", "Forgetting to square the radius."],
            examinerNote: "M1 for formula, A1 for $90\\pi$.",
          },
        },
        {
          id: "mypm3-u3-volume-surface-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A water tank is a cylinder with radius 0.8 m and height 1.5 m. Find its capacity in litres, giving your answer to the nearest litre.",
          response: { type: "numeric", parts: [{ label: "Capacity", answer: 3016, tolerance: 10, unit: "litres" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cylinder volume", statement: "$V=\\pi r^2h$" },
              { kind: "principle", name: "Unit conversion", statement: "$1\\text{ m}^3=1000\\text{ litres}$" },
            ],
            steps: [
              { reasoning: "Calculate volume in cubic metres.", working: "V=\\pi\\times0.8^2\\times1.5=\\pi\\times0.64\\times1.5=0.96\\pi", marks: 1, markCode: "M" },
              { reasoning: "Convert to litres.", working: "0.96\\pi\\times1000=960\\pi\\approx3016\\text{ litres}", marks: 1, markCode: "M" },
              { reasoning: "Round to nearest litre.", working: "3016\\text{ litres}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3016$ litres (accept $3015$-$3017$)",
            commonErrors: ["Forgetting to convert cubic metres to litres.", "Using diameter instead of radius."],
            examinerNote: "M1 for volume, M1 for conversion, A1 for answer.",
          },
        },
        {
          id: "mypm3-u3-volume-surface-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A storage container is a cuboid measuring 2 m by 3 m by 4 m. It is filled with sand to a depth of 1.5 m.",
          parts: [
            { label: "a", prompt: "Find the volume of the container.", marks: 2 },
            { label: "b", prompt: "Find the volume of sand in the container.", marks: 2 },
            { label: "c", prompt: "The sand has a density of 1600 kg per cubic metre. Find the mass of the sand.", marks: 2 },
            { label: "d", prompt: "Explain why the container cannot be filled to the top with this amount of sand, and what this means for storage.", marks: 2 },
          ],
          response: { type: "numeric", parts: [{ label: "(a) Volume", answer: 24, unit: "m³" }, { label: "(b) Sand volume", answer: 9, unit: "m³" }, { label: "(c) Mass", answer: 14400, unit: "kg" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cuboid volume", statement: "$V=abc$" },
              { kind: "formula", name: "Density", statement: "$\\text{density}=\\frac{\\text{mass}}{\\text{volume}}$" },
            ],
            steps: [
              { part: "a", reasoning: "Multiply the three dimensions.", working: "V=2\\times3\\times4=24\\text{ m}^3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the volume.", working: "24\\text{ m}^3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Sand fills to depth 1.5 m, so volume is base area times depth.", working: "V=2\\times3\\times1.5=9\\text{ m}^3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the volume.", working: "9\\text{ m}^3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Mass = density × volume.", working: "m=1600\\times9=14400\\text{ kg}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the mass.", working: "14400\\text{ kg}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The sand volume 9 m³ is less than container volume 24 m³, so there is empty space above.", working: "9<24", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Conclude: the container is only partially filled; more sand could be added or the empty space used for other storage.", working: "\\text{partially filled}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $24\\text{ m}^3$ (b) $9\\text{ m}^3$ (c) $14400\\text{ kg}$ (d) sand fills only part of the container; more could be added",
            commonErrors: ["In (b), using the full height 4 m instead of 1.5 m.", "In (c), dividing by density instead of multiplying."],
            examinerNote: "M1 A1 per calculation, R1 R1 for interpretation.",
          },
        },
        {
          id: "mypm3-u3-volume-surface-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A cuboid measures 4 cm by 5 cm by 6 cm. What is its volume?",
          response: { type: "mcq", choices: [{ id: "a", text: "$120$ cm³" }, { id: "b", text: "$15$ cm³" }, { id: "c", text: "$60$ cm³" }, { id: "d", text: "$24$ cm³" }], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Cuboid volume", statement: "$V=abc$." }], steps: [{ reasoning: "Multiply the three dimensions.", working: "4 \\times 5 \\times 6 = 120", marks: 1, markCode: "B" }], finalAnswer: "**(a)** $120$ cm³", commonErrors: ["Adding dimensions instead of multiplying."], examinerNote: "B1 for (a)." },
        },
        {
          id: "mypm3-u3-volume-surface-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which formula gives the volume of a cylinder with radius $r$ and height $h$?",
          response: { type: "mcq", choices: [{ id: "a", text: "$\\pi r h$" }, { id: "b", text: "$\\pi r^2 h$" }, { id: "c", text: "$2\\pi rh$" }, { id: "d", text: "$\\frac{4}{3}\\pi r^3$" }], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Cylinder volume", statement: "$V=\\pi r^2h$." }], steps: [{ reasoning: "Volume is circle area $\\pi r^2$ times height.", working: "\\pi r^2 h", marks: 1, markCode: "B" }], finalAnswer: "**(b)** $\\pi r^2 h$", commonErrors: ["Using circumference $2\\pi r$ instead of area."], examinerNote: "B1 for (b)." },
        },
        {
          id: "mypm3-u3-volume-surface-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which expression gives the total surface area of a closed cylinder?",
          response: { type: "mcq", choices: [{ id: "a", text: "$\\pi r^2 h$" }, { id: "b", text: "$2\\pi r^2+2\\pi rh$" }, { id: "c", text: "$\\pi rh$" }, { id: "d", text: "$2\\pi r^2$" }], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Cylinder surface area", statement: "Two circular ends plus curved surface $2\\pi rh$." }], steps: [{ reasoning: "Add two circles $2\\pi r^2$ and curved surface $2\\pi rh$.", working: "2\\pi r^2+2\\pi rh", marks: 1, markCode: "B" }], finalAnswer: "**(b)** $2\\pi r^2+2\\pi rh$", commonErrors: ["Omitting one circular end."], examinerNote: "B1 for (b)." },
        },
        {
          id: "mypm3-u3-volume-surface-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A prism has an end area of 15 cm² and length 4 cm. What is its volume?",
          response: { type: "mcq", choices: [{ id: "a", text: "$19$ cm³" }, { id: "b", text: "$60$ cm³" }, { id: "c", text: "$11$ cm³" }, { id: "d", text: "$375$ cm³" }], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Prism volume", statement: "$V=\\text{area of end}\\times\\text{length}$." }], steps: [{ reasoning: "Volume = end area × length.", working: "15 \\times 4 = 60", marks: 1, markCode: "B" }], finalAnswer: "**(b)** $60$ cm³", commonErrors: ["Adding instead of multiplying."], examinerNote: "B1 for (b)." },
        },
        {
          id: "mypm3-u3-volume-surface-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many litres are in $1$ cubic metre?",
          response: { type: "mcq", choices: [{ id: "a", text: "$10$" }, { id: "b", text: "$100$" }, { id: "c", text: "$1000$" }, { id: "d", text: "$10000$" }], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Metric conversion", statement: "$1\\text{ m}^3=1000\\text{ litres}$." }], steps: [{ reasoning: "A cube of side 1 m is 100 cm on each edge.", working: "100^3\\text{ cm}^3=1000000\\text{ cm}^3=1000\\text{ L}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** $1000$ litres", commonErrors: ["Using $1\\text{ m}=100\\text{ cm}$ but forgetting to cube."], examinerNote: "B1 for (c)." },
        },
        {
          id: "mypm3-u3-volume-surface-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the volume of a cuboid measuring 7 cm by 8 cm by 9 cm.",
          response: { type: "numeric", parts: [{ label: "Volume", answer: 504, unit: "cm³" }] },
          markscheme: { principles: [{ kind: "formula", name: "Cuboid volume", statement: "$V=abc$." }], steps: [{ reasoning: "Multiply dimensions.", working: "7 \\times 8 \\times 9", marks: 1, markCode: "M" }, { reasoning: "Evaluate.", working: "504 cm³", marks: 1, markCode: "A" }], finalAnswer: "$504$ cm³", commonErrors: ["Multiplying only two dimensions."], examinerNote: "M1 for product, A1 for 504." },
        },
        {
          id: "mypm3-u3-volume-surface-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cylinder has radius 4 cm and height 10 cm. Find its volume to 1 decimal place.",
          response: { type: "numeric", parts: [{ label: "Volume", answer: 502.7, tolerance: 0.1, unit: "cm³" }] },
          markscheme: { principles: [{ kind: "formula", name: "Cylinder volume", statement: "$V=\\pi r^2h$." }], steps: [{ reasoning: "$V=\\pi \\times 16 \\times 10=160\\pi$.", working: "160\\pi \\approx 502.65", marks: 1, markCode: "M" }, { reasoning: "Round to 1 d.p.", working: "502.7 cm³", marks: 1, markCode: "A" }], finalAnswer: "$502.7$ cm³", commonErrors: ["Using diameter instead of radius."], examinerNote: "M1 for $160\\pi$, A1 for 502.7." },
        },
        {
          id: "mypm3-u3-volume-surface-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A closed cylinder has radius 3 cm and height 5 cm. Find its total surface area to 1 decimal place.",
          response: { type: "numeric", parts: [{ label: "Surface area", answer: 150.8, tolerance: 0.1, unit: "cm²" }] },
          markscheme: { principles: [{ kind: "formula", name: "Cylinder surface area", statement: "$SA=2\\pi r^2+2\\pi rh$." }], steps: [{ reasoning: "$SA=2\\pi(9)+2\\pi(3)(5)=18\\pi+30\\pi=48\\pi$.", working: "48\\pi \\approx 150.80", marks: 1, markCode: "M" }, { reasoning: "Round to 1 d.p.", working: "150.8 cm²", marks: 1, markCode: "A" }], finalAnswer: "$150.8$ cm²", commonErrors: ["Using volume formula instead of surface area."], examinerNote: "M1 for $48\\pi$, A1 for 150.8." },
        },
        {
          id: "mypm3-u3-volume-surface-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Convert $250000$ cm³ to litres.",
          response: { type: "numeric", parts: [{ label: "Litres", answer: 250 }] },
          markscheme: { principles: [{ kind: "definition", name: "Metric conversion", statement: "$1000\\text{ cm}^3=1\\text{ litre}$." }], steps: [{ reasoning: "Divide cubic centimetres by 1000.", working: "250000 \\div 1000", marks: 1, markCode: "M" }, { reasoning: "Evaluate.", working: "250 litres", marks: 1, markCode: "A" }], finalAnswer: "$250$ litres", commonErrors: ["Dividing by 100 instead of 1000."], examinerNote: "M1 for division, A1 for 250." },
        },
        {
          id: "mypm3-u3-volume-surface-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A cylindrical tank has radius 0.6 m and height 1.2 m. Find its capacity in litres, giving your answer to the nearest litre.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Cylinder volume", statement: "$V=\\pi r^2h$." }, { kind: "definition", name: "Metric conversion", statement: "$1\\text{ m}^3=1000\\text{ litres}$." }], steps: [{ reasoning: "Volume in m³: $\\pi \\times 0.36 \\times 1.2=0.432\\pi$.", working: "0.432\\pi \\approx 1.357 m³", marks: 1, markCode: "M" }, { reasoning: "Convert to litres: $1.357 \\times 1000$.", working: "1357 litres", marks: 1, markCode: "M" }, { reasoning: "State nearest litre.", working: "1357 litres", marks: 1, markCode: "A" }], finalAnswer: "$1357$ litres", commonErrors: ["Forgetting to convert m³ to litres."], examinerNote: "M1 for volume, M1 for conversion, A1 for answer." },
        },
        {
          id: "mypm3-u3-volume-surface-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A cuboid container measures 2 m by 3 m by 4 m and is filled with a liquid of density 1500 kg/m³. Find the mass of the liquid.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Cuboid volume", statement: "$V=abc$." }, { kind: "formula", name: "Density", statement: "$\\text{mass}=\\text{density}\\times\\text{volume}$." }], steps: [{ reasoning: "Volume = $2 \\times 3 \\times 4=24$ m³.", working: "24 m³", marks: 1, markCode: "M" }, { reasoning: "Mass = density × volume = $1500 \\times 24$.", working: "36000 kg", marks: 1, markCode: "M" }, { reasoning: "State with units.", working: "36000 kg", marks: 1, markCode: "A" }], finalAnswer: "$36000$ kg", commonErrors: ["Dividing by density instead of multiplying."], examinerNote: "M1 for volume, M1 for product, A1 for mass." },
        },
        {
          id: "mypm3-u3-volume-surface-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A triangular prism has a triangular end of area 12 cm² and length 9 cm. Find its volume and explain why the formula uses the end area.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Prism volume", statement: "$V=\\text{area of end}\\times\\text{length}$." }], steps: [{ reasoning: "Volume = $12 \\times 9$.", working: "108 cm³", marks: 1, markCode: "M" }, { reasoning: "Explain: each slice along the length has the same cross-sectional area, so areas add by multiplication.", working: "constant cross-section", marks: 1, markCode: "R" }, { reasoning: "State the volume.", working: "108 cm³", marks: 1, markCode: "A" }], finalAnswer: "$108$ cm³", commonErrors: ["Using perimeter or slant length instead of end area."], examinerNote: "M1 for product, R1 for explanation, A1 for answer." },
        },
      ],
    },
  ],
};
