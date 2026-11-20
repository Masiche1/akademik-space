import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "pypm-u2-lesson-2-2",
  code: "2-2",
  title: "Measuring Length, Area and Perimeter",
  goal: "I CAN measure length with standard units, and find the perimeter and area of simple rectangles.",
  standards: [
    "PYP Mathematics: Geometry and measurement",
    "PYP transdisciplinary theme: Where We Are in Place and Time",
    "PYP transdisciplinary theme: How the World Works",
  ],
  vocabulary: [
    { term: "Length", definition: "How long something is — measured in centimetres (cm) or metres (m)." },
    { term: "Centimetre / Metre", definition: "Units of length: $100$ cm $= 1$ m; use cm for small things, m for big things." },
    { term: "Ruler", definition: "A tool marked in centimetres used to measure length." },
    { term: "Perimeter", definition: "The distance around the outside edge of a shape — add all the side lengths." },
    { term: "Area", definition: "The space inside a shape, measured in square units (like square centimetres)." },
    { term: "Unit square", definition: "A square of side $1$ unit; counting unit squares gives the area." },
  ],
  concepts: [
    {
      id: "pypm-u2l2-c1-length-units",
      title: "Measuring length",
      skill: "Choose sensible units and measure length in centimetres and metres.",
      lesson: {
        sections: [
          {
            heading: "Units of length",
            body: "We measure length with standard units. A **centimetre (cm)** is small — about the width of a fingernail; use it for pencils, books and hands. A **metre (m)** is big — about an adult's stride; use it for rooms, playgrounds and trees. $100$ cm make $1$ m. Always start measuring at the $0$ mark on a ruler, not at the end of the ruler.",
          },
          {
            heading: "Measuring accurately",
            body: "Line up the object with the ruler so one end is at $0$. Read the number where the other end reaches. Measure **to the nearest cm** for rough estimates, or to the nearest mm for precision. Compare lengths by lining objects up at one end — the one that sticks out further is longer.",
          },
        ],
        keyFormulas: [
          { name: "Unit conversion", statement: "$100\\ \\text{cm} = 1\\ \\text{m}$" },
          { name: "Ruler rule", statement: "Start at $0$, read where the end reaches" },
        ],
        workedExample: {
          problem: "A pencil is $14$ cm long. How long is it in metres?",
          solution: "Since $100$ cm $= 1$ m, $14$ cm is less than a metre — about $0.14$ m. For PYP level: it is $14$ cm, which is less than half a metre.",
        },
      },
      questions: [
        {
          id: "pypm-q-u2l2c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which unit is best for measuring the length of a classroom?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Centimetres" },
              { id: "b", text: "Metres" },
              { id: "c", text: "Millimetres" },
              { id: "d", text: "Kilograms" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Choosing units", statement: "Use metres for large lengths, centimetres for small ones." },
            ],
            steps: [
              { reasoning: "A classroom is large, so metres are the sensible unit.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Metres",
            commonErrors: ["Choosing centimetres — a classroom would be about $800$ cm, which is awkward."],
          },
        },
        {
          id: "pypm-q-u2l2c1-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A ribbon is $45$ cm long. How many centimetres longer is it than a $30$ cm ribbon?",
          response: { type: "numeric", parts: [{ label: "Difference", answer: 15, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Comparing lengths", statement: "Difference in length = longer − shorter." },
            ],
            steps: [
              { reasoning: "Subtract: $45 - 30$.", working: "45-30", marks: 1, markCode: "M" },
              { reasoning: "The ribbon is $15$ cm longer.", working: "45-30=15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15$ cm",
            commonErrors: ["Adding instead of subtracting: $45+30=75$."],
          },
        },
        {
          id: "pypm-q-u2l2c1-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Three sticks measure $28$ cm, $35$ cm and $19$ cm. If you join them end to end, how long is the total?",
          response: { type: "numeric", parts: [{ label: "Total length", answer: 82, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Adding lengths", statement: "Lengths joined end to end add together." },
            ],
            steps: [
              { reasoning: "Add the three lengths: $28 + 35 + 19$.", working: "28+35+19", marks: 1, markCode: "M" },
              { reasoning: "$28+35=63$; $63+19=82$.", working: "63+19=82", marks: 1, markCode: "M" },
              { reasoning: "Total length is $82$ cm.", working: "82", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$82$ cm",
            commonErrors: ["Forgetting to add all three sticks — giving $63$ or $57$."],
          },
        },
        {
          id: "pypm-q-u2l2c1-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A class measures four objects: pencil $14$ cm, book $24$ cm, desk $60$ cm, playground $40$ m.",
          parts: [
            { label: "a", prompt: "Which unit is best for measuring the playground?", marks: 1 },
            { label: "b", prompt: "How much longer is the book than the pencil?", marks: 1 },
            { label: "c", prompt: "What is the total length of the pencil and the book together?", marks: 2 },
            { label: "d", prompt: "The playground is $40$ m. How many centimetres is that?", marks: 2 },
            { label: "e", prompt: "Which object is about half a metre long?", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) Book minus pencil", answer: 10, unit: "cm" },
              { label: "(c) Pencil + book", answer: 38, unit: "cm" },
              { label: "(d) 40 m in cm", answer: 4000, unit: "cm" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Units of length", statement: "Metres for large lengths, centimetres for small; $100$ cm $= 1$ m." },
            ],
            steps: [
              { part: "a", reasoning: "Metres — the playground is large.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$24 - 14 = 10$ cm.", working: "24-14=10", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$14 + 24 = 38$ cm.", working: "14+24=38", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Answer $38$ cm.", working: "38", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$40 \\times 100 = 4000$ cm.", working: "40\\times100=4000", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Answer $4000$ cm.", working: "4000", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Half a metre is $50$ cm; the desk at $60$ cm is closest.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) metres (b) $10$ cm (c) $38$ cm (d) $4000$ cm (e) desk ($60$ cm ≈ half metre)",
            commonErrors: ["In (d), multiplying by $10$ instead of $100$: $400$ cm."],
          },
        },
        {
          id: "pypm-q-u2l2c1-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which unit is best for measuring the length of a pencil?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Metres" },
              { id: "b", text: "Centimetres" },
              { id: "c", text: "Kilometres" },
              { id: "d", text: "Kilograms" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Choosing units", statement: "Use centimetres for small lengths like pencils." },
            ],
            steps: [
              { reasoning: "A pencil is about $15$ cm — small, so centimetres are sensible.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Centimetres",
            commonErrors: ["Choosing metres — a pencil is much less than a metre."],
          },
        },
        {
          id: "pypm-q-u2l2c1-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many centimetres are in $2$ metres?",
          response: { type: "numeric", parts: [{ label: "Centimetres", answer: 200, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Unit conversion", statement: "$100$ cm $= 1$ m, so $2$ m $= 200$ cm." },
            ],
            steps: [
              { reasoning: "$2 \\times 100 = 200$ cm.", working: "2\\times100=200", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$200$ cm",
            commonErrors: ["Answering $20$ — multiplying by $10$ instead of $100$."],
          },
        },
        {
          id: "pypm-q-u2l2c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Ribbon A is $45$ cm long and ribbon B is $54$ cm long. Which ribbon is longer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ribbon A" },
              { id: "b", text: "Ribbon B" },
              { id: "c", text: "They are the same" },
              { id: "d", text: "Cannot tell" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Comparing lengths", statement: "Bigger number in the same unit means longer." },
            ],
            steps: [
              { reasoning: "$54 > 45$, so ribbon B is longer.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Ribbon B",
            commonErrors: ["Comparing digit by digit wrongly — $45$ and $54$ are both two-digit numbers; compare tens first."],
          },
        },
        {
          id: "pypm-q-u2l2c1-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A book is $24$ cm long and a pencil is $14$ cm long. How much longer is the book?",
          response: { type: "numeric", parts: [{ label: "Difference", answer: 10, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Comparing lengths", statement: "Difference = longer − shorter." },
            ],
            steps: [
              { reasoning: "$24 - 14 = 10$ cm.", working: "24-14=10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$10$ cm",
            commonErrors: ["Adding: $24+14=38$ — 'how much longer' needs subtraction."],
          },
        },
        {
          id: "pypm-q-u2l2c1-9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many centimetres are in $3$ metres?",
          response: { type: "numeric", parts: [{ label: "Centimetres", answer: 300, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Unit conversion", statement: "$1$ m $= 100$ cm, so multiply metres by $100$." },
            ],
            steps: [
              { reasoning: "$3 \\times 100 = 300$.", working: "3\\times100=300", marks: 1, markCode: "M" },
              { reasoning: "Answer: $300$ cm.", working: "300", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$300$ cm",
            commonErrors: ["Answering $30$ — off by a factor of ten."],
          },
        },
        {
          id: "pypm-q-u2l2c1-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is a sensible estimate for the length of a classroom?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8$ m" },
              { id: "b", text: "$8$ cm" },
              { id: "c", text: "$800$ m" },
              { id: "d", text: "$80$ cm" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Estimating lengths", statement: "A classroom is several metres long, not centimetres." },
            ],
            steps: [
              { reasoning: "A classroom is about $8$ metres — you could walk across it in a few paces.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $8$ m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $8$ m",
            commonErrors: ["Choosing $8$ cm — that is about the width of a hand, far too small."],
          },
        },
        {
          id: "pypm-q-u2l2c1-11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A rope is $90$ cm long. You cut off $35$ cm. How long is the rope now?",
          response: { type: "numeric", parts: [{ label: "Length left", answer: 55, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Length problems", statement: "Length remaining = original − cut off." },
            ],
            steps: [
              { reasoning: "$90 - 35 = 55$ cm.", working: "90-35=55", marks: 1, markCode: "M" },
              { reasoning: "Answer: $55$ cm.", working: "55", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$55$ cm",
            commonErrors: ["Adding: $90+35=125$ — cutting removes length."],
          },
        },
        {
          id: "pypm-q-u2l2c1-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why you must start measuring at the $0$ mark on a ruler, not at the end of the ruler.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Using a ruler", statement: "The $0$ mark is where measurement begins; the end of the ruler is not zero." },
            ],
            steps: [
              { reasoning: "Rulers are marked with numbers starting at $0$.", marks: 1, markCode: "R" },
              { reasoning: "If you start at the end (before $0$), you would read a number that is too big.", marks: 1, markCode: "M" },
              { reasoning: "Aligning one end with $0$ makes the reading equal the true length.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Start at 0 so the reading equals the true length.",
            commonErrors: ["Starting at the ruler's end — that adds extra unmarked length."],
          },
        },
        {
          id: "pypm-q-u2l2c1-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain when you would choose centimetres and when you would choose metres for measuring length.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Choosing units", statement: "Centimetres for small objects; metres for large distances." },
            ],
            steps: [
              { reasoning: "Centimetres: pencils, books, hands, toys — things smaller than a metre.", marks: 1, markCode: "M" },
              { reasoning: "Metres: classrooms, playgrounds, trees, rooms — things bigger than a metre.", marks: 1, markCode: "M" },
              { reasoning: "Rule of thumb: if the answer would be a huge number of cm, use m instead.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "cm for small things, m for big things.",
            commonErrors: ["Using metres for a pencil — $0.15$ m is awkward; $15$ cm is clearer."],
          },
        },
        {
          id: "pypm-q-u2l2c1-14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which is the longest: $2$ m, $150$ cm or $300$ cm?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$ m" },
              { id: "b", text: "$150$ cm" },
              { id: "c", text: "$300$ cm" },
              { id: "d", text: "$2$ m and $300$ cm are equal" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Unit conversion", statement: "Convert to the same unit first: $2$ m $= 200$ cm." },
            ],
            steps: [
              { reasoning: "Convert: $2$ m $= 200$ cm; compare $200$, $150$, $300$ cm.", working: "2\\times100=200", marks: 1, markCode: "M" },
              { reasoning: "$300 > 200 > 150$ — so $300$ cm is longest.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $300$ cm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $300$ cm",
            commonErrors: ["Choosing $2$ m — $200$ cm is less than $300$ cm; always convert first."],
          },
        },
        {
          id: "pypm-q-u2l2c1-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two ribbons are joined end to end: one is $120$ cm and the other is $80$ cm. What is the total length in centimetres?",
          response: { type: "numeric", parts: [{ label: "Total length", answer: 200, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Adding lengths", statement: "Lengths joined end to end add together." },
            ],
            steps: [
              { reasoning: "$120 + 80 = 200$ cm.", working: "120+80=200", marks: 1, markCode: "M" },
              { reasoning: "Check: $200$ cm is exactly $2$ m — sensible.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $200$ cm.", working: "200", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$200$ cm ($2$ m)",
            commonErrors: ["Answering $20$ — place value slip when adding."],
          },
        },
        {
          id: "pypm-q-u2l2c1-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A door is $2$ m tall and a desk is $60$ cm tall. How much taller is the door than the desk? Give your answer in centimetres and explain how you converted.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Unit conversion", statement: "Convert both to the same unit: $2$ m $= 200$ cm." },
            ],
            steps: [
              { reasoning: "Convert the door: $2 \\times 100 = 200$ cm.", working: "2\\times100=200", marks: 1, markCode: "M" },
              { reasoning: "Subtract: $200 - 60 = 140$ cm.", working: "200-60=140", marks: 1, markCode: "M" },
              { reasoning: "Units must match before subtracting — both are now in cm.", marks: 1, markCode: "R" },
              { reasoning: "The door is $140$ cm taller than the desk.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$140$ cm",
            commonErrors: ["Subtracting $2 - 60$ — must convert metres to centimetres first."],
          },
        },
      ],
    },
    {
      id: "pypm-u2l2-c2-perimeter-area",
      title: "Perimeter and area",
      skill: "Find the perimeter of a shape and count square units for area.",
      lesson: {
        sections: [
          {
            heading: "Perimeter — the outside edge",
            body: "**Perimeter** is the distance around the outside of a shape. For a rectangle, add all four sides: a rectangle $5$ cm long and $3$ cm wide has perimeter $5+3+5+3 = 16$ cm. For any polygon, add every side length. Perimeter is measured in ordinary units (cm, m) — it is a length, not an area.",
          },
          {
            heading: "Area — the inside space",
            body: "**Area** is the space inside a shape, measured in **square units** (square cm, written $\\text{cm}^2$). Cover the shape with unit squares and count them. For a rectangle, area $=$ length $\\times$ width: a $5 \\times 3$ rectangle has area $15$ square cm. Two shapes can have the same perimeter but different areas — a long thin rectangle has more perimeter for its area than a square.",
          },
        ],
        keyFormulas: [
          { name: "Perimeter of rectangle", statement: "$P = 2 \\times (\\text{length} + \\text{width})$ or add all sides" },
          { name: "Area of rectangle", statement: "$A = \\text{length} \\times \\text{width}$ (in square units)" },
        ],
        workedExample: {
          problem: "A rectangle is $6$ cm long and $4$ cm wide. Find its perimeter and area.",
          solution: "Perimeter: $6+4+6+4 = 20$ cm. Area: $6 \\times 4 = 24$ cm$^2$.",
        },
      },
      questions: [
        {
          id: "pypm-q-u2l2c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A rectangle is $5$ cm long and $2$ cm wide. What is its perimeter?",
          response: { type: "numeric", parts: [{ label: "Perimeter", answer: 14, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Perimeter of rectangle", statement: "Add all four sides: $5+2+5+2$." },
            ],
            steps: [
              { reasoning: "$5+2+5+2=14$ cm.", working: "5+2+5+2=14", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$14$ cm",
            commonErrors: ["Multiplying instead of adding: $5 \\times 2 = 10$ — that is not perimeter."],
          },
        },
        {
          id: "pypm-q-u2l2c2-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A square has sides of $7$ cm. What is its perimeter?",
          response: { type: "numeric", parts: [{ label: "Perimeter", answer: 28, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Perimeter of square", statement: "All four sides equal: $4 \\times \\text{side}$." },
            ],
            steps: [
              { reasoning: "Perimeter $= 4 \\times 7$.", working: "4\\times7", marks: 1, markCode: "M" },
              { reasoning: "Perimeter is $28$ cm.", working: "4\\times7=28", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$28$ cm",
            commonErrors: ["Doubling instead of quadrupling: $7 \\times 2 = 14$."],
          },
        },
        {
          id: "pypm-q-u2l2c2-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A rectangle is $8$ cm long and $3$ cm wide. What is its area?",
          response: { type: "numeric", parts: [{ label: "Area", answer: 24, unit: "cm²" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of rectangle", statement: "Area = length $\\times$ width, in square units." },
            ],
            steps: [
              { reasoning: "Area $= 8 \\times 3$.", working: "8\\times3", marks: 1, markCode: "M" },
              { reasoning: "$8 \\times 3 = 24$ square cm.", working: "8\\times3=24", marks: 1, markCode: "M" },
              { reasoning: "Answer: $24$ cm$^2$ (square centimetres).", working: "24\\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$24$ cm$^2$",
            commonErrors: ["Adding the sides for area: $8+3=11$ — that is not area."],
          },
        },
        {
          id: "pypm-q-u2l2c2-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A garden bed is shaped like a rectangle $9$ m long and $4$ m wide. A path runs all the way around it.",
          parts: [
            { label: "a", prompt: "What is the perimeter of the garden bed?", marks: 2 },
            { label: "b", prompt: "What is the area of the garden bed?", marks: 2 },
            { label: "c", prompt: "The path is $1$ m wide all around. What is the perimeter of the outer edge of the path?", marks: 2 },
            { label: "d", prompt: "Explain why perimeter is measured in metres but area in square metres.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Perimeter of garden bed", answer: 26, unit: "m" },
              { label: "(b) Area of garden bed", answer: 36, unit: "m²" },
              { label: "(c) Perimeter of outer path edge", answer: 34, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Perimeter and area", statement: "Perimeter adds side lengths (m); area multiplies length $\\times$ width (m$^2$)." },
            ],
            steps: [
              { part: "a", reasoning: "Perimeter $= 9+4+9+4 = 26$ m.", working: "9+4+9+4=26", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Answer $26$ m.", working: "26", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Area $= 9 \\times 4 = 36$ m$^2$.", working: "9\\times4=36", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Answer $36$ m$^2$.", working: "36", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Path adds $1$ m each side: new length $11$ m, width $6$ m; perimeter $= 11+6+11+6 = 34$ m.", working: "11+6+11+6=34", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Answer $34$ m.", working: "34", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Perimeter measures a length around the edge (m); area measures surface (m$^2$).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $26$ m (b) $36$ m$^2$ (c) $34$ m (d) perimeter=length unit, area=square unit",
            commonErrors: ["In (c), forgetting the path adds to BOTH length and width."],
          },
        },
        {
          id: "pypm-q-u2l2c2-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does perimeter mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The space inside a shape" },
              { id: "b", text: "The distance around the outside edge of a shape" },
              { id: "c", text: "The number of sides" },
              { id: "d", text: "The longest side" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Perimeter", statement: "Perimeter is the distance around the outside of a shape." },
            ],
            steps: [
              { reasoning: "Perimeter = distance around the edge.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Distance around the outside edge",
            commonErrors: ["Choosing (a) — that describes area, not perimeter."],
          },
        },
        {
          id: "pypm-q-u2l2c2-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A rectangle is $4$ cm long and $3$ cm wide. What is its perimeter?",
          response: { type: "numeric", parts: [{ label: "Perimeter", answer: 14, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Perimeter of rectangle", statement: "Add all four sides: $4+3+4+3$." },
            ],
            steps: [
              { reasoning: "$4+3+4+3 = 14$ cm.", working: "4+3+4+3=14", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$14$ cm",
            commonErrors: ["Multiplying: $4 \\times 3 = 12$ — that is area, not perimeter."],
          },
        },
        {
          id: "pypm-q-u2l2c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What unit do we use to measure area?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Centimetres (cm)" },
              { id: "b", text: "Square centimetres (cm$^2$)" },
              { id: "c", text: "Grams (g)" },
              { id: "d", text: "Litres (L)" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Area units", statement: "Area is measured in square units like cm$^2$ — unit squares covering the shape." },
            ],
            steps: [
              { reasoning: "Area covers a surface with squares, so the unit is square cm.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Square centimetres",
            commonErrors: ["Choosing cm — that measures length (perimeter), not area."],
          },
        },
        {
          id: "pypm-q-u2l2c2-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A square has sides of $5$ cm. What is its perimeter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$10$ cm" },
              { id: "b", text: "$20$ cm" },
              { id: "c", text: "$25$ cm" },
              { id: "d", text: "$15$ cm" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Perimeter of square", statement: "All four sides equal: $4 \\times \\text{side} = 4 \\times 5$." },
            ],
            steps: [
              { reasoning: "$4 \\times 5 = 20$ cm.", working: "4\\times5=20", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $20$ cm",
            commonErrors: ["Choosing $25$ — that is $5 \\times 5$, the area, not the perimeter."],
          },
        },
        {
          id: "pypm-q-u2l2c2-9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How do we find the area of a rectangle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Add all four sides" },
              { id: "b", text: "Multiply length by width" },
              { id: "c", text: "Count the corners" },
              { id: "d", text: "Subtract the sides" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of rectangle", statement: "Area = length $\\times$ width, in square units." },
            ],
            steps: [
              { reasoning: "Each row has length squares and there are width rows — multiply.", marks: 1, markCode: "M" },
              { reasoning: "Answer: length $\\times$ width.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Multiply length by width",
            commonErrors: ["Choosing (a) — adding sides gives perimeter, not area."],
          },
        },
        {
          id: "pypm-q-u2l2c2-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Shape A is $5 \\times 5$ and shape B is $4 \\times 6$ (in cm). Which has the bigger area?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shape A — $25$ cm$^2$" },
              { id: "b", text: "Shape B — $24$ cm$^2$" },
              { id: "c", text: "They are equal" },
              { id: "d", text: "Cannot tell" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of rectangle", statement: "Area = length $\\times$ width." },
            ],
            steps: [
              { reasoning: "A: $5 \\times 5 = 25$ cm$^2$; B: $4 \\times 6 = 24$ cm$^2$.", working: "25>24", marks: 1, markCode: "M" },
              { reasoning: "Answer: shape A has the bigger area.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Shape A",
            commonErrors: ["Thinking same perimeter means same area — $5+5+5+5=20$ and $4+6+4+6=20$, same perimeter but different area."],
          },
        },
        {
          id: "pypm-q-u2l2c2-11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A square has sides of $9$ cm. What is its perimeter?",
          response: { type: "numeric", parts: [{ label: "Perimeter", answer: 36, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Perimeter of square", statement: "Perimeter $= 4 \\times \\text{side}$." },
            ],
            steps: [
              { reasoning: "$4 \\times 9 = 36$ cm.", working: "4\\times9=36", marks: 1, markCode: "M" },
              { reasoning: "Answer: $36$ cm.", working: "36", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$36$ cm",
            commonErrors: ["Answering $81$ — that is the area $9 \\times 9$."],
          },
        },
        {
          id: "pypm-q-u2l2c2-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between perimeter and area, including the units used for each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Perimeter vs area", statement: "Perimeter measures the edge (length units like cm); area measures the inside (square units like cm$^2$)." },
            ],
            steps: [
              { reasoning: "Perimeter is the distance around the outside — found by adding side lengths.", marks: 1, markCode: "M" },
              { reasoning: "Area is the space inside — found by multiplying length $\\times$ width or counting unit squares.", marks: 1, markCode: "M" },
              { reasoning: "Perimeter uses cm/m; area uses cm$^2$/m$^2$ because it counts squares.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Perimeter = around the edge (cm); area = inside space (cm$^2$).",
            commonErrors: ["Saying both are measured in cm — area needs square units."],
          },
        },
        {
          id: "pypm-q-u2l2c2-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A rectangle is $3$ cm long and $7$ cm wide. What is its area? Explain how you found it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of rectangle", statement: "Area = length $\\times$ width = $3 \\times 7$." },
            ],
            steps: [
              { reasoning: "Area $= 3 \\times 7$.", working: "3\\times7", marks: 1, markCode: "M" },
              { reasoning: "$3 \\times 7 = 21$ square centimetres.", working: "3\\times7=21", marks: 1, markCode: "M" },
              { reasoning: "Answer: $21$ cm$^2$ — it covers $21$ unit squares.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$21$ cm$^2$",
            commonErrors: ["Adding: $3+7=10$ — that is not area."],
          },
        },
        {
          id: "pypm-q-u2l2c2-14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two rectangles both have perimeter $20$ cm: one is $6 \\times 4$ and the other is $7 \\times 3$. Do they have the same area? Explain.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yes — same perimeter means same area" },
              { id: "b", text: "No — $24$ cm$^2$ vs $21$ cm$^2$" },
              { id: "c", text: "Yes — both are rectangles" },
              { id: "d", text: "Cannot tell" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Perimeter vs area", statement: "Same perimeter does not guarantee same area." },
            ],
            steps: [
              { reasoning: "Areas: $6 \\times 4 = 24$ and $7 \\times 3 = 21$ cm$^2$.", working: "24\\ne21", marks: 1, markCode: "M" },
              { reasoning: "Both perimeters are $20$ cm but areas differ.", marks: 1, markCode: "M" },
              { reasoning: "Answer: different areas.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** No — $24$ vs $21$ cm$^2$",
            commonErrors: ["Assuming equal perimeter means equal area."],
          },
        },
        {
          id: "pypm-q-u2l2c2-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A rectangle has perimeter $20$ cm and length $6$ cm. What is its width? Explain how you found it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Perimeter of rectangle", statement: "$P = 2 \\times (\\text{length} + \\text{width})$, so width $= \\frac{P}{2} - \\text{length}$." },
            ],
            steps: [
              { reasoning: "Two lengths plus two widths make $20$: $6+6=12$, leaving $20-12=8$ for two widths.", working: "20-12=8", marks: 1, markCode: "M" },
              { reasoning: "Each width $= 8 \\div 2 = 4$ cm.", working: "8\\div2=4", marks: 1, markCode: "M" },
              { reasoning: "Check: $6+4+6+4=20$ cm — correct.", working: "6+4+6+4=20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Width $= 4$ cm",
            commonErrors: ["Answering $8$ — that is both widths together, not one."],
          },
        },
        {
          id: "pypm-q-u2l2c2-16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two shapes have the same perimeter: a square with side $5$ cm and a long thin rectangle $8 \\times 2$ cm. Which has the bigger area?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The square — $25$ cm$^2$" },
              { id: "b", text: "The rectangle — $16$ cm$^2$" },
              { id: "c", text: "They are equal" },
              { id: "d", text: "Cannot tell" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Area efficiency", statement: "For the same perimeter, a shape closer to a square has more area." },
            ],
            steps: [
              { reasoning: "Square area: $5 \\times 5 = 25$ cm$^2$; rectangle: $8 \\times 2 = 16$ cm$^2$.", working: "25>16", marks: 1, markCode: "M" },
              { reasoning: "Both perimeters are $20$ cm but the square encloses more space.", marks: 1, markCode: "M" },
              { reasoning: "Answer: the square has the bigger area.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The square",
            commonErrors: ["Choosing the longer rectangle — longer and thinner gives less area for the same perimeter."],
          },
        },
      ],
    },
  ],
};
