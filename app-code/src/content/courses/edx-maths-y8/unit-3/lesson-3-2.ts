import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "edm8-u3-lesson-3-2",
  code: "3-2",
  title: "Area and Volume",
  goal: "I CAN calculate areas of 2D shapes, circles, and the volume and surface area of cuboids and prisms.",
  standards: ["Y8 Geometry and Measures"],
  vocabulary: [
    { term: "Perpendicular height", definition: "The height of a shape measured at right angles to its base." },
    { term: "Trapezium", definition: "A quadrilateral with exactly one pair of parallel sides." },
    { term: "Circumference", definition: "The distance around the edge of a circle, $C=\\pi d=2\\pi r$." },
    { term: "Prism", definition: "A 3D solid with the same cross-section all the way through its length." },
    { term: "Volume", definition: "The amount of space inside a 3D solid, measured in cubic units such as cm$^3$." },
    { term: "Surface area", definition: "The total area of all the faces of a 3D solid." },
    { term: "Cross-section", definition: "The 2D shape you see when a solid is cut at right angles to its length." },
  ],
  concepts: [
    {
      id: "edm8-u3-area-circles",
      title: "Area of 2D shapes and circles",
      skill: "Calculate the area of triangles, parallelograms, trapezia and circles, and the circumference of circles.",
      lesson: {
        sections: [
          {
            heading: "Straight-sided shapes",
            body: "Area of a triangle $=\\frac12\\times\\text{base}\\times\\text{perpendicular height}$. Area of a parallelogram $=\\text{base}\\times\\text{perpendicular height}$. Area of a trapezium $=\\frac12(a+b)h$ where $a$ and $b$ are the parallel sides and $h$ is the distance between them. Always use the perpendicular height, not the slanting side.",
          },
          {
            heading: "Circles",
            body: "For a circle with radius $r$ and diameter $d=2r$: circumference $C=\\pi d=2\\pi r$ and area $A=\\pi r^2$. Remember to square only the radius, not $\\pi$. If asked for an answer 'in terms of $\\pi$', leave $\\pi$ in your answer.",
          },
          {
            heading: "Compound shapes",
            body: "Split a compound shape into simpler shapes, find each area, then add or subtract. A semicircle has half the area of the full circle. Include units: square units for area.",
          },
        ],
        keyFormulas: [
          { name: "Triangle", statement: "$A=\\frac12bh$" },
          { name: "Trapezium", statement: "$A=\\frac12(a+b)h$" },
          { name: "Circle", statement: "$C=2\\pi r,\\quad A=\\pi r^2$" },
        ],
        workedExample: {
          problem: "A circle has radius $5$ cm. Work out its area in terms of $\\pi$.",
          solution: "$A=\\pi r^2=\\pi\\times5^2=25\\pi$ cm$^2$.",
        },
      },
      questions: [
        {
          id: "edm8-u3-area-circles-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A triangle has a base of $8$ cm and a perpendicular height of $5$ cm. Work out its area.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$26$ cm$^2$" },
              { id: "b", text: "$20$ cm$^2$" },
              { id: "c", text: "$40$ cm$^2$" },
              { id: "d", text: "$13$ cm$^2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Area of a triangle", statement: "$A=\\frac12\\times\\text{base}\\times\\text{height}$" }],
            steps: [
              { reasoning: "Substitute into the formula.", working: "\\tfrac12\\times8\\times5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $20$ cm$^2$",
            commonErrors: ["Forgetting the half, giving $40$ cm$^2$.", "Adding the base and height."],
          },
        },
        {
          id: "edm8-u3-area-circles-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A trapezium has parallel sides of length $7$ cm and $11$ cm. The perpendicular distance between the parallel sides is $6$ cm. Work out the area of the trapezium.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 54, unit: "cm²" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Area of a trapezium", statement: "$A=\\frac12(a+b)h$" }],
            steps: [
              { reasoning: "Substitute the values.", working: "\\tfrac12(7+11)\\times6", marks: 1, markCode: "M" },
              { reasoning: "Add the parallel sides.", working: "\\tfrac12\\times18\\times6", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "54", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$54$ cm$^2$",
            commonErrors: ["Using the slanting side as the height.", "Forgetting to halve."],
          },
        },
        {
          id: "edm8-u3-area-circles-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A shape is made from a rectangle measuring $10$ cm by $6$ cm with a semicircle attached to one of the $6$ cm sides. The diameter of the semicircle is that $6$ cm side. Work out the total area of the shape. Give your answer correct to 1 decimal place.",
          response: { type: "numeric", parts: [{ label: "Total area", answer: 74.1, tolerance: 0.1, unit: "cm²" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a circle", statement: "$A=\\pi r^2$" },
              { kind: "principle", name: "Compound shapes", statement: "Total area is the sum of the areas of the parts." },
            ],
            steps: [
              { reasoning: "Area of the rectangle.", working: "10\\times6=60", marks: 1, markCode: "B" },
              { reasoning: "The semicircle has radius $3$ cm, so its area is half of $\\pi r^2$.", working: "\\tfrac12\\times\\pi\\times3^2=14.137\\ldots", marks: 1, markCode: "M" },
              { reasoning: "Add the two areas.", working: "60+14.137\\ldots", marks: 1, markCode: "M" },
              { reasoning: "Round to 1 decimal place.", working: "74.1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$74.1$ cm$^2$",
            commonErrors: ["Using the diameter $6$ as the radius.", "Forgetting to halve the circle area."],
          },
        },
        {
          id: "edm8-u3-area-circles-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A circular pond has radius $3$ m. It is surrounded by a path of constant width $1$ m, so the outer edge of the path is a circle of radius $4$ m. Give answers to 1 decimal place where rounding is needed.",
          parts: [
            { label: "a", prompt: "Work out the area of the pond.", marks: 2 },
            { label: "b", prompt: "Work out the area of the path.", marks: 3 },
            { label: "c", prompt: "Work out the length of the outer edge of the path.", marks: 2 },
            { label: "d", prompt: "The path is to be covered with paving costing £12 per square metre. Work out the total cost to the nearest pound.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Area of pond (m²)", answer: 28.3, tolerance: 0.1 },
              { label: "(b) Area of path (m²)", answer: 22, tolerance: 0.1 },
              { label: "(c) Outer edge length (m)", answer: 25.1, tolerance: 0.1 },
              { label: "(d) Cost (£)", answer: 264, tolerance: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Circle formulae", statement: "$A=\\pi r^2$ and $C=2\\pi r$" },
              { kind: "principle", name: "Area of a ring", statement: "Area of outer circle minus area of inner circle." },
            ],
            steps: [
              { part: "a", reasoning: "Use $A=\\pi r^2$ with $r=3$.", working: "\\pi\\times3^2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate and round.", working: "28.3\\text{ m}^2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Area of the larger circle with $r=4$.", working: "\\pi\\times4^2=50.265\\ldots", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Subtract the pond area (from $9\\pi=28.274\\ldots$).", working: "16\\pi-9\\pi", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate: $7\\pi=21.99\\ldots$.", working: "22.0\\text{ m}^2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Circumference with $r=4$.", working: "2\\times\\pi\\times4", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate: $8\\pi=25.13\\ldots$.", working: "25.1\\text{ m}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Multiply the unrounded area by the cost per square metre.", working: "7\\pi\\times12", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate: $263.89\\ldots$.", working: "263.89\\ldots", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Round to the nearest pound.", working: "£264", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $28.3$ m$^2$ (b) $22.0$ m$^2$ (c) $25.1$ m (d) £264",
            commonErrors: ["Using the width of the path as the radius.", "Finding the area of a circle of radius $1$.", "Using the diameter in place of the radius."],
            examinerNote: "Accept £264 from rounded intermediate values, 22.0 × 12 = 264 (oe).",
          },
        },
      ],
    },
    {
      id: "edm8-u3-volume-surface-area",
      title: "Volume and surface area of cuboids and prisms",
      skill: "Calculate the volume and surface area of cuboids and prisms.",
      lesson: {
        sections: [
          {
            heading: "Volume",
            body: "The volume of a cuboid is length $\\times$ width $\\times$ height. For any prism, volume $=$ area of cross-section $\\times$ length. Volume is measured in cubic units, for example cm$^3$ or m$^3$. Also $1000$ cm$^3=1$ litre.",
          },
          {
            heading: "Surface area",
            body: "Surface area is the total area of all faces. For a cuboid, add the areas of the three different pairs of faces: $2(lw+lh+wh)$. For a prism, the surface area is $2\\times$ cross-section area plus the perimeter of the cross-section $\\times$ length.",
          },
          {
            heading: "Strategy",
            body: "Sketch the solid and label every face you need. For an open-topped box, leave out the missing face. Check that your final answer has the right units: cm$^2$ for surface area, cm$^3$ for volume.",
          },
        ],
        keyFormulas: [
          { name: "Cuboid volume", statement: "$V=lwh$" },
          { name: "Prism volume", statement: "$V=\\text{cross-section area}\\times\\text{length}$" },
          { name: "Cuboid surface area", statement: "$2(lw+lh+wh)$" },
        ],
        workedExample: {
          problem: "A cuboid measures $5$ cm by $4$ cm by $3$ cm. Work out its surface area.",
          solution: "$2(5\\times4+5\\times3+4\\times3)=2(20+15+12)=2\\times47=94$ cm$^2$.",
        },
      },
      questions: [
        {
          id: "edm8-u3-volume-surface-area-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A cuboid is $5$ cm long, $4$ cm wide and $3$ cm high. Work out its volume.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12$ cm$^3$" },
              { id: "b", text: "$47$ cm$^3$" },
              { id: "c", text: "$94$ cm$^3$" },
              { id: "d", text: "$60$ cm$^3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Volume of a cuboid", statement: "$V=lwh$" }],
            steps: [{ reasoning: "Multiply the three dimensions.", working: "5\\times4\\times3=60", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** $60$ cm$^3$",
            commonErrors: ["Giving the surface area, $94$ cm$^2$.", "Adding the dimensions: $5+4+3=12$."],
          },
        },
        {
          id: "edm8-u3-volume-surface-area-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A cuboid measures $6$ cm by $4$ cm by $3$ cm. Work out its total surface area.",
          response: { type: "numeric", parts: [{ label: "Surface area", answer: 108, unit: "cm²" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Surface area of a cuboid", statement: "$2(lw+lh+wh)$" }],
            steps: [
              { reasoning: "Find the areas of the three different faces.", working: "6\\times4=24,\\; 6\\times3=18,\\; 4\\times3=12", marks: 1, markCode: "M" },
              { reasoning: "Add and double, since each face has a matching opposite.", working: "2\\times(24+18+12)=2\\times54", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "108", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$108$ cm$^2$",
            commonErrors: ["Finding only three faces ($54$).", "Giving the volume ($72$)."],
          },
        },
        {
          id: "edm8-u3-volume-surface-area-q3",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A prism has a cross-section that is a right-angled triangle with sides $6$ cm, $8$ cm and $10$ cm (the $10$ cm side is the hypotenuse). The length of the prism is $12$ cm. Work out (i) the volume and (ii) the total surface area of the prism.",
          response: {
            type: "numeric",
            parts: [
              { label: "(i) Volume (cm³)", answer: 288 },
              { label: "(ii) Surface area (cm²)", answer: 336 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a prism", statement: "$V=\\text{cross-section area}\\times\\text{length}$" },
              { kind: "formula", name: "Surface area of a prism", statement: "$2\\times\\text{cross-section}+\\text{perimeter}\\times\\text{length}$" },
            ],
            steps: [
              { reasoning: "Cross-section area of the right-angled triangle, using the two shorter sides.", working: "\\tfrac12\\times6\\times8=24", marks: 1, markCode: "B" },
              { reasoning: "Volume $=24\\times12$.", working: "288\\text{ cm}^3", marks: 1, markCode: "A" },
              { reasoning: "Perimeter of the cross-section.", working: "6+8+10=24", marks: 1, markCode: "B" },
              { reasoning: "Rectangular faces have total area perimeter $\\times$ length; add the two triangular ends.", working: "24\\times12+2\\times24=288+48", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "336\\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(i) $288$ cm$^3$ (ii) $336$ cm$^2$",
            commonErrors: ["Using the hypotenuse as the height of the triangle.", "Forgetting the two triangular ends."],
          },
        },
        {
          id: "edm8-u3-volume-surface-area-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A fish tank is a cuboid with an open top. Its inside dimensions are length $50$ cm, width $30$ cm and height $40$ cm. The glass is very thin, so ignore its thickness. $1000$ cm$^3=1$ litre.",
          parts: [
            { label: "a", prompt: "Work out the volume of the tank in cm$^3$.", marks: 2 },
            { label: "b", prompt: "The tank is filled with water to a depth of $32$ cm. Work out the volume of water in litres.", marks: 2 },
            { label: "c", prompt: "Work out the area of glass needed to make the tank (a base and four sides, no top).", marks: 3 },
            { label: "d", prompt: "A further $15$ litres of water is poured into the tank. Show that the water overflows and work out how many litres overflow.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Volume (cm³)", answer: 60000 },
              { label: "(b) Water (litres)", answer: 48 },
              { label: "(c) Glass area (cm²)", answer: 7900 },
              { label: "(d) Overflow (litres)", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cuboid", statement: "$V=lwh$" },
              { kind: "principle", name: "Units", statement: "$1000$ cm$^3=1$ litre." },
            ],
            steps: [
              { part: "a", reasoning: "Multiply the dimensions.", working: "50\\times30\\times40", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "60000\\text{ cm}^3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Volume of water: length $\\times$ width $\\times$ depth.", working: "50\\times30\\times32=48000", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Convert to litres.", working: "48000\\div1000=48", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Base area.", working: "50\\times30=1500", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Two long sides and two short sides.", working: "2\\times(50\\times40)+2\\times(30\\times40)=4000+2400", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Add the base.", working: "1500+4000+2400=7900\\text{ cm}^2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Capacity of the tank in litres.", working: "60000\\div1000=60", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Total water would be $48+15$.", working: "63>60", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The tank holds only $60$ litres, so $3$ litres overflow.", working: "63-60=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $60000$ cm$^3$ (b) $48$ litres (c) $7900$ cm$^2$ (d) $63>60$, so $3$ litres overflow",
            commonErrors: ["Including a top face in part (c).", "Dividing by $100$ instead of $1000$ when converting to litres."],
          },
        },
      ],
    },
  ],
};
