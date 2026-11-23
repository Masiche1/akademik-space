import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "m7-u4-lesson-4-3",
  code: "4-3",
  title: "Capstone: Geometry, Measurement, and Review",
  goal: "I CAN apply geometric reasoning and measurement to real problems and review key concepts from across the course.",
  standards: ["7.G.A.1", "7.G.A.2", "7.G.B.4", "7.G.B.6", "MP1", "MP6"],
  vocabulary: [
    { term: "Area", definition: "The amount of surface covered by a 2D shape, measured in square units." },
    { term: "Perimeter", definition: "The distance around the edge of a shape, measured in linear units." },
    { term: "Surface area", definition: "The total area of all surfaces of a 3D object." },
    { term: "Volume", definition: "The amount of space inside a 3D object, measured in cubic units." },
    { term: "Composite figure", definition: "A shape made by combining simpler shapes." },
    { term: "Net", definition: "A 2D pattern that folds into a 3D shape." },
    { term: "Scale drawing", definition: "A drawing where measurements are proportional to actual sizes." },
    { term: "Reasonableness check", definition: "Verifying an answer makes sense given the context." },
  ],
  concepts: [
    {
      id: "m7-u4-geometry",
      title: "Composite figures and measurement",
      skill: "Calculate area, perimeter, and volume of complex shapes by decomposing them.",
      lesson: {
        sections: [
          {
            heading: "Decomposing shapes",
            body: "Break composite figures into simpler shapes (rectangles, triangles, circles). Calculate each part's area separately, then add or subtract as needed. For perimeter, trace the outer edge — internal lines don't count.",
          },
          {
            heading: "Surface area and volume",
            body: "**Surface area**: sum of all face areas. **Volume**: space inside. For prisms: $V = Bh$ (base area $\\times$ height). For cylinders: $V = \\pi r^2 h$.",
          },
          {
            heading: "Real applications",
            body: "Paint needed = wall area ÷ coverage per gallon. Soil needed = garden area × depth. Wrapping paper = surface area. Always check units: square feet for area, cubic feet for volume.",
          },
        ],
        keyFormulas: [
          { name: "Composite area", statement: "Sum areas of parts" },
          { name: "Cylinder volume", statement: "$V = \\pi r^2 h$" },
        ],
        workedExample: {
          problem: "An L-shaped room has two rectangles: 10 ft × 8 ft and 6 ft × 4 ft. Find total floor area.",
          solution: "$80 + 24 = 104$ square feet.",
        },
      },
      questions: [
        {
          id: "m7-u4-geometry-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the area of a rectangle 8 cm by 5 cm?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$13$ cm²" },
              { id: "b", text: "$26$ cm²" },
              { id: "c", text: "$40$ cm²" },
              { id: "d", text: "$80$ cm²" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Rectangle area", statement: "$A = lw$" }],
            steps: [{ reasoning: "$8 \\times 5 = 40$ cm².", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** 40 cm²",
            commonErrors: ["Adding instead of multiplying."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "m7-u4-geometry-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the volume of a cylinder with radius 3 cm and height 10 cm. Use $\\pi \\approx 3.14$.",
          response: { type: "numeric", parts: [{ label: "Volume", answer: 282.6, tolerance: 0.1, unit: "cm³" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Cylinder volume", statement: "$V = \\pi r^2 h$" }],
            steps: [
              { reasoning: "$V = 3.14 \\times 3^2 \\times 10 = 3.14 \\times 9 \\times 10$.", marks: 1, markCode: "M" },
              { reasoning: "$= 3.14 \\times 90 = 282.6$ cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$282.6$ cm³",
            commonErrors: ["Using diameter instead of radius; forgetting to square."],
            examinerNote: "M1, A1.",
          },
        },
        {
          id: "m7-u4-geometry-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A garden is a rectangle 20 ft by 15 ft with a circular pond of radius 4 ft in the middle. How much area is available for planting?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Composite area", statement: "Total area minus pond area." },
              { kind: "formula", name: "Circle area", statement: "$A = \\pi r^2$" },
            ],
            steps: [
              { reasoning: "Garden area: $20 \\times 15 = 300$ ft².", marks: 1, markCode: "M" },
              { reasoning: "Pond area: $3.14 \\times 4^2 = 3.14 \\times 16 = 50.24$ ft².", marks: 1, markCode: "M" },
              { reasoning: "Planting area: $300 - 50.24 = 249.76$ ft².", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\approx 249.76$ ft².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 249.76$ ft²",
            commonErrors: ["Adding pond area instead of subtracting."],
            examinerNote: "M3, A1.",
          },
        },
        {
          id: "m7-u4-geometry-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "You're painting a room 12 ft long, 10 ft wide, with 8 ft ceilings. Paint covers 350 ft² per gallon.",
          parts: [
            { label: "a", prompt: "Calculate total wall area (ignore doors/windows).", marks: 3 },
            { label: "b", prompt: "Calculate ceiling area.", marks: 2 },
            { label: "c", prompt: "How many gallons of paint needed for walls and ceiling?", marks: 3 },
            { label: "d", prompt: "If paint costs $\\$35$/gallon, what is total cost?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Surface area", statement: "Walls = perimeter $\\times$ height." },
              { kind: "formula", name: "Coverage", statement: "Gallons = area / coverage per gallon." },
            ],
            steps: [
              { reasoning: "Wall perimeter: $2(12+10) = 44$ ft; area $= 44 \\times 8 = 352$ ft².", working: "44*8", marks: 2, markCode: "M", part: "a" },
              { reasoning: "Wall area: $352$ ft².", marks: 1, markCode: "A", part: "a" },
              { reasoning: "Ceiling: $12 \\times 10 = 120$ ft².", marks: 2, markCode: "M", part: "b" },
              { reasoning: "Total area: $352 + 120 = 472$ ft².", marks: 1, markCode: "M", part: "c" },
              { reasoning: "Gallons: $472/350 \\approx 1.35$ — need 2 gallons.", marks: 1, markCode: "M", part: "c" },
              { reasoning: "Must round up to whole gallons.", marks: 1, markCode: "A", part: "c" },
              { reasoning: "Cost: $2 \\times 35 = \\text{\\$}70$.", marks: 2, markCode: "M", part: "d" },
            ],
            finalAnswer: "(a) 352 ft² (b) 120 ft² (c) 2 gallons (d) $70.",
            commonErrors: ["Not rounding up gallons; forgetting ceiling."],
            examinerNote: "3+2+3+2 = 10.",
          },
        },
      ],
    },
    {
      id: "m7-u4-review",
      title: "Course review and problem-solving",
      skill: "Integrate all grade 7 concepts to solve unfamiliar problems confidently.",
      lesson: {
        sections: [
          {
            heading: "Key concepts review",
            body: "- **Ratios & rates**: proportional relationships, unit rates, scale factors\n- **Percents**: discounts, tax, interest, percent change\n- **Rational numbers**: operations with integers, fractions, decimals\n- **Expressions**: writing and solving equations in context\n- **Geometry**: area, volume, surface area, angles\n- **Statistics**: mean, median, mode, spread\n- **Probability**: theoretical and experimental, compound events",
          },
          {
            heading: "Problem-solving habits",
            body: "Read twice. Identify what's given and what's asked. Estimate before calculating. Show work. Check units. Ask: does the answer make sense?",
          },
          {
            heading: "Math in the real world",
            body: "Everyday decisions use these concepts: shopping (percents), cooking (ratios), budgeting (rates), sports stats (probability), home projects (geometry). Math isn't abstract — it's a tool for understanding the world.",
          },
        ],
        keyFormulas: [
          { name: "Percent", statement: "$\\frac{\\text{part}}{\\text{whole}} \\times 100$" },
          { name: "Probability", statement: "$P = \\frac{\\text{favorable}}{\\text{total}}$" },
        ],
        workedExample: {
          problem: "Review: A $\\$60$ item is 25% off, then 8% tax added. Final price?",
          solution: "$60 \\times 0.75 = 45$; $45 \\times 1.08 = 48.60$.",
        },
      },
      questions: [
        {
          id: "m7-u4-review-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the best first step for any math problem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Start calculating" },
              { id: "b", text: "Read carefully and identify what's asked" },
              { id: "c", text: "Guess an answer" },
              { id: "d", text: "Skip to the end" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Problem solving", statement: "Understanding before calculation." }],
            steps: [{ reasoning: "Always read and understand the problem before solving.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Read carefully first",
            commonErrors: ["Rushing to calculation."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "m7-u4-review-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve: $\\frac{2}{3}x + 4 = 10$. Show your work.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Two-step equation", statement: "Isolate variable term then divide." },
              { kind: "skill", name: "Fraction operations", statement: "Subtract then multiply by reciprocal." },
            ],
            steps: [
              { reasoning: "$\\frac{2}{3}x = 10 - 4 = 6$.", marks: 1, markCode: "M" },
              { reasoning: "$x = 6 \\times \\frac{3}{2} = 9$.", marks: 1, markCode: "M" },
              { reasoning: "Check: $\\frac{2}{3}(9) + 4 = 6 + 4 = 10$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 9$",
            commonErrors: ["Dividing before subtracting; wrong reciprocal."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "m7-u4-review-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A rectangular garden is 12 m by 8 m. A path 1 m wide surrounds it. Find the area of the path.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Composite area", statement: "Outer rectangle minus inner rectangle." },
              { kind: "formula", name: "Rectangle area", statement: "$A = lw$" },
            ],
            steps: [
              { reasoning: "Outer dimensions: $(12+2) \\times (8+2) = 14 \\times 10 = 140$ m².", marks: 1, markCode: "M" },
              { reasoning: "Inner area: $12 \\times 8 = 96$ m².", marks: 1, markCode: "M" },
              { reasoning: "Path area: $140 - 96 = 44$ m².", marks: 1, markCode: "M" },
              { reasoning: "Answer: $44$ m².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$44$ m²",
            commonErrors: ["Forgetting to add path width to both sides."],
            examinerNote: "M3, A1.",
          },
        },
        {
          id: "m7-u4-review-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Final comprehensive problem: You earn $\\$120$/week. You spend $40\\%$ on rent, $25\\%$ on food, and save the rest. A new game costs $\\$45$.",
          parts: [
            { label: "a", prompt: "Calculate weekly spending on rent and food.", marks: 2 },
            { label: "b", prompt: "How much do you save per week?", marks: 2 },
            { label: "c", prompt: "After how many weeks can you buy the game?", marks: 3 },
            { label: "d", prompt: "If you get a $10\\%$ raise, recalculate weekly savings.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percent of quantity", statement: "Part = percent $\\times$ whole." },
              { kind: "principle", name: "Rate problems", statement: "Time = amount / rate." },
            ],
            steps: [
              { reasoning: "Rent: $120 \\times 0.40 = \\text{\\$}48$; food: $120 \\times 0.25 = \\text{\\$}30$.", marks: 2, markCode: "M", part: "a" },
              { reasoning: "Total spent: $48 + 30 = 78$; saved: $120 - 78 = \\text{\\$}42$/week.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "Savings: $42$/week.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "$45/42 \\approx 1.07$ weeks — need 2 weeks.", marks: 2, markCode: "M", part: "c" },
              { reasoning: "Answer: 2 weeks.", marks: 1, markCode: "A", part: "c" },
              { reasoning: "New salary: $120 \\times 1.10 = \\text{\\$}132$.", marks: 1, markCode: "M", part: "d" },
              { reasoning: "Rent: $132 \\times 0.4 = 52.80$; food: $132 \\times 0.25 = 33$; total $85.80$.", marks: 1, markCode: "M", part: "d" },
              { reasoning: "New savings: $132 - 85.80 = \\text{\\$}46.20$/week.", marks: 1, markCode: "A", part: "d" },
            ],
            finalAnswer: "(a) $48 rent, $30 food (b) $42 saved (c) 2 weeks (d) $46.20 saved.",
            commonErrors: ["Not updating all amounts after raise."],
            examinerNote: "2+2+3+3 = 10.",
          },
        },
      ],
    },
  ],
};
