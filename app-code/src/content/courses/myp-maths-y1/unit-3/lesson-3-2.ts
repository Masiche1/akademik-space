import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "mypm1-u3-lesson-3-2",
  code: "3-2",
  title: "Measurement",
  goal: "I CAN find perimeter and area of 2D shapes, find volume and surface area of cuboids, and convert between metric units.",
  standards: [
    "Criterion A: Knowing and understanding",
    "Criterion C: Communicating",
    "Criterion D: Applying mathematics in real-life contexts",
    "MYP Maths: Geometry and trigonometry",
  ],
  vocabulary: [
    { term: "Perimeter", definition: "The total distance around the outside of a 2D shape." },
    { term: "Area", definition: "The amount of flat surface a shape covers, measured in square units such as $\\text{cm}^2$." },
    { term: "Perpendicular height", definition: "The height measured at a right angle to the base." },
    { term: "Compound shape", definition: "A shape made by joining or removing simpler shapes such as rectangles and triangles." },
    { term: "Volume", definition: "The amount of space inside a 3D shape, measured in cubic units such as $\\text{cm}^3$." },
    { term: "Surface area", definition: "The total area of all the faces of a 3D shape." },
    { term: "Capacity", definition: "The amount of liquid a container can hold, measured in litres or millilitres." },
  ],
  concepts: [
    {
      id: "mypm1-u3-perimeter-area",
      title: "Perimeter and area of 2D shapes",
      skill: "Find the perimeter and area of rectangles, triangles, parallelograms, trapezia and compound shapes.",
      lesson: {
        sections: [
          {
            heading: "Area formulae",
            body: "Always use the **perpendicular** height, not a sloping side. Rectangle: $A=l\\times w$. Triangle: $A=\\frac{1}{2}bh$. Parallelogram: $A=bh$. Trapezium: $A=\\frac{1}{2}(a+b)h$, where $a$ and $b$ are the parallel sides. Perimeter is found by adding every side length, and is measured in units of length such as cm.",
          },
          {
            heading: "Compound shapes",
            body: "To find the area of a compound shape, split it into simple shapes and add their areas, or subtract a missing piece from a larger rectangle. Label every part of your working with its units.",
          },
        ],
        keyFormulas: [
          { name: "Triangle", statement: "$A=\\frac{1}{2}bh$" },
          { name: "Parallelogram", statement: "$A=bh$" },
          { name: "Trapezium", statement: "$A=\\frac{1}{2}(a+b)h$" },
        ],
        workedExample: {
          problem: "A parallelogram has base 9 cm and perpendicular height 4 cm. Find its area.",
          solution: "$A=bh=9\\times4=36\\ \\text{cm}^2$.",
        },
      },
      questions: [
        {
          id: "mypm1-u3-perimeter-area-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A triangle has a base of 10 cm and a perpendicular height of 6 cm. What is its area?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$30\\ \\text{cm}^2$" },
              { id: "b", text: "$32\\ \\text{cm}^2$" },
              { id: "c", text: "$16\\ \\text{cm}^2$" },
              { id: "d", text: "$60\\ \\text{cm}^2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a triangle", statement: "$A=\\frac{1}{2}bh$" },
            ],
            steps: [
              { reasoning: "Use half of base times height.", working: "\\tfrac{1}{2}\\times10\\times6=30", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $30\\ \\text{cm}^2$",
            commonErrors: ["Forgetting the half and giving $60\\ \\text{cm}^2$.", "Adding the base and height to get 16."],
          },
        },
        {
          id: "mypm1-u3-perimeter-area-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A trapezium has parallel sides of length 6 cm and 10 cm. The perpendicular distance between them is 4 cm. Work out the area, in $\\text{cm}^2$.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 32, unit: "cm²" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a trapezium", statement: "$A=\\frac{1}{2}(a+b)h$" },
            ],
            steps: [
              { reasoning: "Substitute the parallel sides and the perpendicular height.", working: "\\tfrac{1}{2}(6+10)\\times4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "8\\times4=32", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$32\\ \\text{cm}^2$",
            commonErrors: ["Forgetting the half and giving 64.", "Using the length of a sloping side as the height."],
          },
        },
        {
          id: "mypm1-u3-perimeter-area-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "An L-shaped floor is made from a rectangle 12 m by 8 m with a rectangular corner measuring 5 m by 3 m removed. Work out the area of the floor, in $\\text{m}^2$.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 81, unit: "m²" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Compound shapes", statement: "Area of a compound shape = area of the large shape minus area of the removed piece." },
            ],
            steps: [
              { reasoning: "Find the area of the full rectangle.", working: "12\\times8=96", marks: 1, markCode: "M" },
              { reasoning: "Find the area of the removed corner.", working: "5\\times3=15", marks: 1, markCode: "M" },
              { reasoning: "Subtract.", working: "96-15=81", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$81\\ \\text{m}^2$",
            commonErrors: ["Adding the corner area instead of subtracting it.", "Finding the perimeter instead of the area."],
          },
        },
        {
          id: "mypm1-u3-perimeter-area-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A school is paving a patio. The patio is a rectangle 8 m long and 5 m wide. A right-angled triangle is added along one of the 5 m sides: that 5 m side is the triangle's perpendicular height and the triangle's base, which sticks out from the rectangle, is 4 m. Each paving slab is a square of side 0.5 m and costs 3 euros.",
          parts: [
            { label: "a", prompt: "Work out the area of the rectangle, in $\\text{m}^2$.", marks: 1 },
            { label: "b", prompt: "Work out the area of the triangle, in $\\text{m}^2$.", marks: 2 },
            { label: "c", prompt: "Work out the total area of the patio, in $\\text{m}^2$.", marks: 1 },
            { label: "d", prompt: "Work out how many paving slabs are needed to cover the patio exactly.", marks: 2 },
            { label: "e", prompt: "Work out the total cost of the slabs, in euros.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Area of rectangle", answer: 40, unit: "m²" },
              { label: "(b) Area of triangle", answer: 10, unit: "m²" },
              { label: "(c) Total area", answer: 50, unit: "m²" },
              { label: "(d) Number of slabs", answer: 200 },
              { label: "(e) Total cost", answer: 600, unit: "euros" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a rectangle", statement: "$A=l\\times w$" },
              { kind: "formula", name: "Area of a triangle", statement: "$A=\\frac{1}{2}bh$" },
              { kind: "principle", name: "Counting tiles", statement: "Number of slabs = total area $\\div$ area of one slab." },
            ],
            steps: [
              { part: "a", reasoning: "Multiply length by width.", working: "8\\times5=40", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Use half of base times perpendicular height.", working: "\\tfrac{1}{2}\\times4\\times5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "10", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Add the two areas.", working: "40+10=50", marks: 1, markCode: "B" },
              { part: "d", reasoning: "One slab has area $0.5\\times0.5=0.25\\ \\text{m}^2$. Divide the patio area by this.", working: "50\\div0.25", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "200", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Multiply the number of slabs by the cost of one slab.", working: "200\\times3", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Evaluate.", working: "600", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $40\\ \\text{m}^2$ (b) $10\\ \\text{m}^2$ (c) $50\\ \\text{m}^2$ (d) 200 slabs (e) 600 euros",
            commonErrors: ["Dividing the area by 0.5 instead of by $0.25$, giving 100 slabs.", "Forgetting the half in the triangle area."],
            examinerNote: "Follow through from (c) in (d) and from (d) in (e) (ft).",
          },
        },
        {
          id: "mypm1-u3-perimeter-area-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A rectangle is 9 cm long and 4 cm wide. What is its area?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$36\\ \\text{cm}^2$" },
              { id: "b", text: "$18\\ \\text{cm}^2$" },
              { id: "c", text: "$26\\ \\text{cm}^2$" },
              { id: "d", text: "$13\\ \\text{cm}^2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a rectangle", statement: "$A=l\\times w$" },
            ],
            steps: [
              { reasoning: "Multiply length by width: $9\\times4=36$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $36\\ \\text{cm}^2$",
            commonErrors: ["Adding the sides to get 13 (that is half the perimeter).", "Doubling to get 26, which is the perimeter."],
            examinerNote: "B1 for 36 cm².",
          },
        },
        {
          id: "mypm1-u3-perimeter-area-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A square has side length 7 cm. What is its perimeter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$21\\ \\text{cm}$" },
              { id: "b", text: "$49\\ \\text{cm}$" },
              { id: "c", text: "$28\\ \\text{cm}$" },
              { id: "d", text: "$14\\ \\text{cm}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Perimeter", statement: "The total distance around the outside of a shape." },
            ],
            steps: [
              { reasoning: "A square has 4 equal sides: $4\\times7=28$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $28\\ \\text{cm}$",
            commonErrors: ["Squaring to get 49, which is the area."],
            examinerNote: "B1 for 28 cm.",
          },
        },
        {
          id: "mypm1-u3-perimeter-area-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A parallelogram has base 12 cm and perpendicular height 5 cm. What is its area?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$60\\ \\text{cm}^2$" },
              { id: "b", text: "$34\\ \\text{cm}^2$" },
              { id: "c", text: "$17\\ \\text{cm}^2$" },
              { id: "d", text: "$30\\ \\text{cm}^2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a parallelogram", statement: "$A=bh$ using the perpendicular height." },
            ],
            steps: [
              { reasoning: "$A=12\\times5=60$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $60\\ \\text{cm}^2$",
            commonErrors: ["Halving like a triangle to get 30.", "Adding base and height to get 17."],
            examinerNote: "B1 for 60 cm².",
          },
        },
        {
          id: "mypm1-u3-perimeter-area-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A triangle has a base of 14 cm and a perpendicular height of 9 cm. Work out its area, in $\\text{cm}^2$.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 63, unit: "cm²" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a triangle", statement: "$A=\\frac{1}{2}bh$" },
            ],
            steps: [
              { reasoning: "Use half of base times perpendicular height.", working: "\\tfrac{1}{2}\\times14\\times9=7\\times9", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "63", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$63\\ \\text{cm}^2$",
            commonErrors: ["Forgetting the half and giving 126."],
            examinerNote: "M1 for 7 x 9 or 1/2 x 14 x 9. A1 for 63 cm².",
          },
        },
        {
          id: "mypm1-u3-perimeter-area-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A trapezium has parallel sides of 8 cm and 12 cm, and the perpendicular distance between them is 5 cm. Work out its area, in $\\text{cm}^2$.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 50, unit: "cm²" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a trapezium", statement: "$A=\\frac{1}{2}(a+b)h$" },
            ],
            steps: [
              { reasoning: "Add the parallel sides and halve, then multiply by the height.", working: "\\tfrac{1}{2}(8+12)\\times5=10\\times5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "50", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$50\\ \\text{cm}^2$",
            commonErrors: ["Forgetting the half and giving 100."],
            examinerNote: "M1 for 10 x 5 or equivalent. A1 for 50 cm².",
          },
        },
        {
          id: "mypm1-u3-perimeter-area-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A rectangle has area $48\\ \\text{cm}^2$ and width 6 cm. What is its length?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8\\ \\text{cm}$" },
              { id: "b", text: "$288\\ \\text{cm}$" },
              { id: "c", text: "$42\\ \\text{cm}$" },
              { id: "d", text: "$54\\ \\text{cm}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a rectangle", statement: "$A=l\\times w$, so $l=A\\div w$." },
            ],
            steps: [
              { reasoning: "Divide area by width: $48\\div6=8$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $8\\ \\text{cm}$",
            commonErrors: ["Subtracting to get 42.", "Multiplying to get 288."],
            examinerNote: "B1 for 8 cm.",
          },
        },
        {
          id: "mypm1-u3-perimeter-area-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An L-shaped patio is made from a rectangle 10 m by 6 m with a square corner of side 2 m removed. Work out the area of the patio, in $\\text{m}^2$.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 56, unit: "m²" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Compound shapes", statement: "Area of a compound shape = area of the large shape minus the removed piece." },
            ],
            steps: [
              { reasoning: "Find the area of the full rectangle.", working: "10\\times6=60", marks: 1, markCode: "M" },
              { reasoning: "Find the area of the removed square.", working: "2\\times2=4", marks: 1, markCode: "M" },
              { reasoning: "Subtract.", working: "60-4=56", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$56\\ \\text{m}^2$",
            commonErrors: ["Adding the square area to get 64.", "Finding the perimeter instead of the area."],
            examinerNote: "M1 for 60. M1 for 4. A1 for 56 m².",
          },
        },
        {
          id: "mypm1-u3-perimeter-area-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A triangle has base 18 cm and area $54\\ \\text{cm}^2$. What is its perpendicular height?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3\\ \\text{cm}$" },
              { id: "b", text: "$12\\ \\text{cm}$" },
              { id: "c", text: "$9\\ \\text{cm}$" },
              { id: "d", text: "$6\\ \\text{cm}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a triangle", statement: "$A=\\frac{1}{2}bh$, so $h=2A\\div b$." },
            ],
            steps: [
              { reasoning: "$h=2\\times54\\div18=108\\div18=6$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $6\\ \\text{cm}$",
            commonErrors: ["Computing $54\\div18=3$ and forgetting to double."],
            examinerNote: "B1 for 6 cm.",
          },
        },
        {
          id: "mypm1-u3-perimeter-area-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Kai is finding the area of a triangle with base 10 cm and height 8 cm.",
          parts: [
            { label: "a", prompt: "Write down the formula he should use.", marks: 1 },
            { label: "b", prompt: "Work out the area, in $\\text{cm}^2$.", marks: 1 },
            { label: "c", prompt: "Explain why the height must be measured at right angles to the base.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a triangle", statement: "$A=\\frac{1}{2}bh$ where $h$ is the perpendicular height." },
            ],
            steps: [
              { part: "a", reasoning: "State $A=\\frac{1}{2}bh$.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Evaluate: $\\frac{1}{2}\\times10\\times8=40$.", working: "40", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The formula is derived from a rectangle of base $b$ and height $h$; a sloping side is not the height and would give a wrong area.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $A=\\frac{1}{2}bh$ (b) $40\\ \\text{cm}^2$ (c) the height must be perpendicular to the base",
            commonErrors: ["Using a sloping side as the height."],
            examinerNote: "In (c) the reason must mention perpendicular/right angle (oe).",
          },
        },
        {
          id: "mypm1-u3-perimeter-area-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A rectangle is 11 cm by 5 cm. What is its perimeter?",
          response: { type: "numeric", parts: [{ label: "Perimeter", answer: 32, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Perimeter", statement: "Add all the side lengths: $2(l+w)$." },
            ],
            steps: [
              { reasoning: "$2\\times(11+5)=2\\times16=32$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$32\\ \\text{cm}$",
            commonErrors: ["Giving the area, 55."],
            examinerNote: "B1 for 32 cm.",
          },
        },
        {
          id: "mypm1-u3-perimeter-area-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A field is a rectangle 40 m by 25 m. A rectangular pond measuring 8 m by 6 m is dug inside it and is not part of the field area.",
          parts: [
            { label: "a", prompt: "Work out the area of the field including the pond, in $\\text{m}^2$.", marks: 1 },
            { label: "b", prompt: "Work out the area of the pond, in $\\text{m}^2$.", marks: 1 },
            { label: "c", prompt: "Work out the area of grass in the field, in $\\text{m}^2$.", marks: 1 },
            { label: "d", prompt: "Fencing costs 3 euros per metre. Work out the cost of fencing the whole field boundary, in euros.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Field including pond", answer: 1000, unit: "m²" },
              { label: "(b) Pond area", answer: 48, unit: "m²" },
              { label: "(c) Grass area", answer: 952, unit: "m²" },
              { label: "(d) Fencing cost", answer: 390, unit: "euros" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a rectangle", statement: "$A=l\\times w$" },
              { kind: "principle", name: "Compound shapes", statement: "Grass area = field area minus pond area." },
            ],
            steps: [
              { part: "a", reasoning: "Multiply the field dimensions.", working: "40\\times25=1000", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Multiply the pond dimensions.", working: "8\\times6=48", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Subtract the pond from the field.", working: "1000-48=952", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Perimeter is $2(40+25)=130$ m; cost is $130\\times3$.", working: "390", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1000\\ \\text{m}^2$ (b) $48\\ \\text{m}^2$ (c) $952\\ \\text{m}^2$ (d) 390 euros",
            commonErrors: ["In (d) fencing the pond as well, or using the grass area as a length."],
            examinerNote: "In (d) the perimeter of the field only is required; the pond is inside.",
          },
        },
        {
          id: "mypm1-u3-perimeter-area-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A rectangle has length $x$ cm and width $(x-4)$ cm.",
          parts: [
            { label: "a", prompt: "Write down an expression for the perimeter of the rectangle, in cm.", marks: 1 },
            { label: "b", prompt: "Write down an expression for the area of the rectangle, in $\\text{cm}^2$.", marks: 1 },
            { label: "c", prompt: "Explain why the area expression contains an $x^2$ term but the perimeter does not.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Perimeter and area of a rectangle", statement: "$P=2l+2w$ and $A=lw$." },
            ],
            steps: [
              { part: "a", reasoning: "Perimeter is twice the sum of length and width.", working: "P=2x+2(x-4)=4x-8", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Area is length times width.", working: "A=x(x-4)=x^2-4x", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The perimeter only adds the side lengths, so the terms are all multiples of $x$ with no product of $x$ by $x$.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The area multiplies length by width, and since both contain $x$, the product contains $x\\times x=x^2$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $4x-8$ cm (b) $x^2-4x$ $\\text{cm}^2$ (c) area multiplies the two side lengths, producing $x^2$",
            commonErrors: ["Expanding $x(x-4)$ as $x-4x=-3x$."],
            examinerNote: "In (a) and (b) accept unexpanded forms for partial credit but expanded is expected.",
          },
        },
      ],
    },
    {
      id: "mypm1-u3-volume-units",
      title: "Volume, surface area and metric conversions",
      skill: "Find the volume and surface area of a cuboid and convert between metric units of length, area, capacity and mass.",
      lesson: {
        sections: [
          {
            heading: "Volume and surface area of a cuboid",
            body: "The volume of a cuboid is $V=l\\times w\\times h$. Its surface area is the sum of the areas of its six faces: $SA=2(lw+lh+wh)$. For a cuboid 6 cm by 4 cm by 3 cm, $V=72\\ \\text{cm}^3$ and $SA=2(24+18+12)=108\\ \\text{cm}^2$.",
          },
          {
            heading: "Converting metric units",
            body: "Length: $1\\ \\text{m}=100\\ \\text{cm}$, $1\\ \\text{cm}=10\\ \\text{mm}$, $1\\ \\text{km}=1000\\ \\text{m}$. Mass: $1\\ \\text{kg}=1000\\ \\text{g}$. Capacity: $1\\ \\text{L}=1000\\ \\text{mL}$. Also $1\\ \\text{L}=1000\\ \\text{cm}^3$. Area and volume units are squared and cubed, so $1\\ \\text{m}^2=100\\times100=10\\,000\\ \\text{cm}^2$.",
          },
        ],
        keyFormulas: [
          { name: "Volume of a cuboid", statement: "$V=lwh$" },
          { name: "Surface area of a cuboid", statement: "$SA=2(lw+lh+wh)$" },
          { name: "Capacity", statement: "$1\\ \\text{L}=1000\\ \\text{cm}^3$" },
        ],
        workedExample: {
          problem: "A box measures 10 cm by 5 cm by 4 cm. Find its volume and its capacity in millilitres.",
          solution: "$V=10\\times5\\times4=200\\ \\text{cm}^3$. Since $1\\ \\text{mL}=1\\ \\text{cm}^3$, the capacity is 200 mL.",
        },
      },
      questions: [
        {
          id: "mypm1-u3-volume-units-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Convert 4.5 m to centimetres.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.045\\ \\text{cm}$" },
              { id: "b", text: "$4500\\ \\text{cm}$" },
              { id: "c", text: "$450\\ \\text{cm}$" },
              { id: "d", text: "$45\\ \\text{cm}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Metric length", statement: "$1\\ \\text{m}=100\\ \\text{cm}$, so multiply by 100 to change metres to centimetres." },
            ],
            steps: [
              { reasoning: "Multiply by 100.", working: "4.5\\times100=450", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $450\\ \\text{cm}$",
            commonErrors: ["Multiplying by 10 to get 45.", "Dividing by 100 instead of multiplying."],
          },
        },
        {
          id: "mypm1-u3-volume-units-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cuboid is 8 cm long, 5 cm wide and 3 cm high. Work out its volume, in $\\text{cm}^3$.",
          response: { type: "numeric", parts: [{ label: "Volume", answer: 120, unit: "cm³" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cuboid", statement: "$V=l\\times w\\times h$" },
            ],
            steps: [
              { reasoning: "Multiply the three dimensions.", working: "8\\times5\\times3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "120", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$120\\ \\text{cm}^3$",
            commonErrors: ["Adding the dimensions to get 16.", "Giving the unit as $\\text{cm}^2$."],
          },
        },
        {
          id: "mypm1-u3-volume-units-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Work out the total surface area of a cuboid that measures 6 cm by 4 cm by 3 cm, in $\\text{cm}^2$.",
          response: { type: "numeric", parts: [{ label: "Surface area", answer: 108, unit: "cm²" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Surface area of a cuboid", statement: "$SA=2(lw+lh+wh)$, because the six faces form three pairs of equal rectangles." },
            ],
            steps: [
              { reasoning: "Find the area of one face from each pair.", working: "6\\times4=24,\\quad 6\\times3=18,\\quad 4\\times3=12", marks: 1, markCode: "M" },
              { reasoning: "Add and double, since each face appears twice.", working: "2(24+18+12)=2\\times54", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "108", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$108\\ \\text{cm}^2$",
            commonErrors: ["Adding only three faces and giving 54.", "Calculating the volume (72) instead."],
          },
        },
        {
          id: "mypm1-u3-volume-units-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A fish tank is a cuboid with internal length 50 cm, width 30 cm and height 40 cm. It has no lid. The glass for the base and four sides is being ordered.",
          parts: [
            { label: "a", prompt: "Work out the volume of the tank, in $\\text{cm}^3$.", marks: 2 },
            { label: "b", prompt: "Write the capacity of the tank in litres.", marks: 1 },
            { label: "c", prompt: "The tank is filled with water to a height of 30 cm. Work out the volume of water, in litres.", marks: 2 },
            { label: "d", prompt: "Work out the area of glass needed for the base and four sides, in $\\text{cm}^2$.", marks: 2 },
            { label: "e", prompt: "Write your answer to (d) in $\\text{m}^2$.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Volume", answer: 60000, unit: "cm³" },
              { label: "(b) Capacity", answer: 60, unit: "litres" },
              { label: "(c) Volume of water", answer: 45, unit: "litres" },
              { label: "(d) Area of glass", answer: 7900, unit: "cm²" },
              { label: "(e) Area of glass", answer: 0.79, tolerance: 0.001, unit: "m²" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cuboid", statement: "$V=lwh$" },
              { kind: "principle", name: "Capacity", statement: "$1\\ \\text{L}=1000\\ \\text{cm}^3$." },
              { kind: "principle", name: "Area units", statement: "$1\\ \\text{m}^2=10\\,000\\ \\text{cm}^2$." },
            ],
            steps: [
              { part: "a", reasoning: "Multiply length, width and height.", working: "50\\times30\\times40", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "60\\,000", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide by 1000 to change $\\text{cm}^3$ to litres.", working: "60\\,000\\div1000=60", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Use the water height of 30 cm in place of the tank height.", working: "50\\times30\\times30=45\\,000", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Convert to litres.", working: "45\\,000\\div1000=45", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Base plus two long sides plus two short sides (no top).", working: "50\\times30+2(50\\times40)+2(30\\times40)=1500+4000+2400", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Add.", working: "7900", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Divide by $10\\,000$ since $1\\ \\text{m}^2=10\\,000\\ \\text{cm}^2$.", working: "7900\\div10\\,000=0.79", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $60\\,000\\ \\text{cm}^3$ (b) 60 L (c) 45 L (d) $7900\\ \\text{cm}^2$ (e) $0.79\\ \\text{m}^2$",
            commonErrors: ["Including a top face in (d), giving 9400.", "Dividing by 100 instead of $10\\,000$ in (e).", "Dividing by 100 instead of 1000 to find litres."],
            examinerNote: "Follow through from (d) in (e) (ft).",
          },
        },
        {
          id: "mypm1-u3-volume-units-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Convert 3.2 kg to grams.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.32\\ \\text{g}$" },
              { id: "b", text: "$3200\\ \\text{g}$" },
              { id: "c", text: "$320\\ \\text{g}$" },
              { id: "d", text: "$32\\ \\text{g}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Metric mass", statement: "$1\\ \\text{kg}=1000\\ \\text{g}$, so multiply by 1000." },
            ],
            steps: [
              { reasoning: "Multiply by 1000: $3.2\\times1000=3200$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $3200\\ \\text{g}$",
            commonErrors: ["Multiplying by 100 instead of 1000."],
            examinerNote: "B1 for 3200 g.",
          },
        },
        {
          id: "mypm1-u3-volume-units-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A cuboid is 5 cm long, 4 cm wide and 2 cm high. What is its volume?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$40\\ \\text{cm}^3$" },
              { id: "b", text: "$400\\ \\text{cm}^3$" },
              { id: "c", text: "$20\\ \\text{cm}^3$" },
              { id: "d", text: "$11\\ \\text{cm}^3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cuboid", statement: "$V=l\\times w\\times h$" },
            ],
            steps: [
              { reasoning: "$5\\times4\\times2=40$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $40\\ \\text{cm}^3$",
            commonErrors: ["Adding the dimensions to get 11.", "Multiplying only two dimensions."],
            examinerNote: "B1 for 40 cm³.",
          },
        },
        {
          id: "mypm1-u3-volume-units-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A cube has side length 3 cm. What is its volume?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$18\\ \\text{cm}^3$" },
              { id: "b", text: "$9\\ \\text{cm}^3$" },
              { id: "c", text: "$81\\ \\text{cm}^3$" },
              { id: "d", text: "$27\\ \\text{cm}^3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cube", statement: "$V=s^3$ since all three dimensions equal the side length." },
            ],
            steps: [
              { reasoning: "$3\\times3\\times3=27$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $27\\ \\text{cm}^3$",
            commonErrors: ["Squaring to get 9.", "Multiplying by 6 to get 18 (that is related to surface area)."],
            examinerNote: "B1 for 27 cm³.",
          },
        },
        {
          id: "mypm1-u3-volume-units-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cuboid is 12 cm long, 5 cm wide and 4 cm high. Work out its volume, in $\\text{cm}^3$.",
          response: { type: "numeric", parts: [{ label: "Volume", answer: 240, unit: "cm³" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cuboid", statement: "$V=lwh$" },
            ],
            steps: [
              { reasoning: "Multiply the three dimensions.", working: "12\\times5\\times4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "240", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$240\\ \\text{cm}^3$",
            commonErrors: ["Adding the dimensions to get 21."],
            examinerNote: "M1 for the product. A1 for 240 cm³.",
          },
        },
        {
          id: "mypm1-u3-volume-units-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Convert 2500 millilitres to litres.",
          response: { type: "numeric", parts: [{ label: "Litres", answer: 2.5, unit: "litres" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Metric capacity", statement: "$1\\ \\text{L}=1000\\ \\text{mL}$, so divide by 1000." },
            ],
            steps: [
              { reasoning: "Divide by 1000.", working: "2500\\div1000", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "2.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.5$ litres",
            commonErrors: ["Multiplying by 1000 to get 2,500,000."],
            examinerNote: "M1 for dividing by 1000. A1 for 2.5 L.",
          },
        },
        {
          id: "mypm1-u3-volume-units-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A cuboid is 10 cm by 6 cm by 5 cm. Which is its total surface area?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$300\\ \\text{cm}^3$" },
              { id: "b", text: "$280\\ \\text{cm}^2$" },
              { id: "c", text: "$140\\ \\text{cm}^2$" },
              { id: "d", text: "$155\\ \\text{cm}^2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Surface area of a cuboid", statement: "$SA=2(lw+lh+wh)$" },
            ],
            steps: [
              { reasoning: "Face areas: $10\\times6=60$, $10\\times5=50$, $6\\times5=30$; sum $=140$; double for six faces.", working: "2(60+50+30)=2\\times140=280", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $280\\ \\text{cm}^2$",
            commonErrors: ["Adding only three faces and giving 140.", "Giving the volume, 300, with the wrong unit."],
            examinerNote: "B1 for 280 cm².",
          },
        },
        {
          id: "mypm1-u3-volume-units-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A box is 20 cm long, 15 cm wide and 10 cm high.",
          response: { type: "numeric", parts: [{ label: "Capacity", answer: 3, unit: "litres" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cuboid", statement: "$V=lwh$" },
              { kind: "principle", name: "Capacity", statement: "$1\\ \\text{L}=1000\\ \\text{cm}^3$." },
            ],
            steps: [
              { reasoning: "Find the volume.", working: "20\\times15\\times10=3000", marks: 1, markCode: "M" },
              { reasoning: "Convert $\\text{cm}^3$ to litres by dividing by 1000.", working: "3000\\div1000", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$ litres",
            commonErrors: ["Dividing by 100 instead of 1000 to get 30 litres."],
            examinerNote: "M1 for 3000 cm³. M1 for dividing by 1000. A1 for 3 L.",
          },
        },
        {
          id: "mypm1-u3-volume-units-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the largest volume?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.04\\ \\text{L}$" },
              { id: "b", text: "$450\\ \\text{mL}$" },
              { id: "c", text: "$400\\ \\text{cm}^3$" },
              { id: "d", text: "$0.5\\ \\text{L}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Capacity", statement: "$1\\ \\text{L}=1000\\ \\text{cm}^3=1000\\ \\text{mL}$; convert everything to the same unit." },
            ],
            steps: [
              { reasoning: "Convert: $0.5\\ \\text{L}=500\\ \\text{cm}^3$, $0.04\\ \\text{L}=40\\ \\text{cm}^3$, $450\\ \\text{mL}=450\\ \\text{cm}^3$. The largest is $500\\ \\text{cm}^3$ (0.5 L).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $0.5\\ \\text{L}$",
            commonErrors: ["Comparing the numbers 5, 400, 0.04, 450 without converting units."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm1-u3-volume-units-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Aisha is finding the surface area of a cube of side 5 cm.",
          parts: [
            { label: "a", prompt: "Write down how many faces a cube has and the shape of each face.", marks: 1 },
            { label: "b", prompt: "Work out the area of one face, in $\\text{cm}^2$.", marks: 1 },
            { label: "c", prompt: "Work out the total surface area, in $\\text{cm}^2$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Surface area of a cube", statement: "$SA=6s^2$ because a cube has 6 square faces of side $s$." },
            ],
            steps: [
              { part: "a", reasoning: "A cube has 6 square faces.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Each face is a square of side 5.", working: "5\\times5=25", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Multiply by 6.", working: "6\\times25=150", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 6 square faces (b) $25\\ \\text{cm}^2$ (c) $150\\ \\text{cm}^2$",
            commonErrors: ["Using 5 faces instead of 6."],
            examinerNote: "In (c) the multiplication by 6 must be shown.",
          },
        },
        {
          id: "mypm1-u3-volume-units-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Convert 450 cm to metres.",
          response: { type: "numeric", parts: [{ label: "Metres", answer: 4.5, unit: "m" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Metric length", statement: "$1\\ \\text{m}=100\\ \\text{cm}$, so divide by 100." },
            ],
            steps: [
              { reasoning: "Divide by 100.", working: "450\\div100=4.5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$4.5$ m",
            commonErrors: ["Multiplying by 100 to get 45,000."],
            examinerNote: "B1 for 4.5 m.",
          },
        },
        {
          id: "mypm1-u3-volume-units-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A water bottle is a cuboid measuring 30 cm by 10 cm by 25 cm.",
          parts: [
            { label: "a", prompt: "Work out the volume of the bottle, in $\\text{cm}^3$.", marks: 1 },
            { label: "b", prompt: "Write the capacity of the bottle in litres.", marks: 1 },
            { label: "c", prompt: "A bottle is filled to half its height. Work out the volume of water, in litres.", marks: 1 },
            { label: "d", prompt: "Write $1\\ \\text{m}^2$ in $\\text{cm}^2$ and explain how you know.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Volume", answer: 7500, unit: "cm³" },
              { label: "(b) Capacity", answer: 7.5, unit: "litres" },
              { label: "(c) Water volume", answer: 3.75, unit: "litres" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cuboid", statement: "$V=lwh$" },
              { kind: "principle", name: "Capacity and area units", statement: "$1\\ \\text{L}=1000\\ \\text{cm}^3$; $1\\ \\text{m}^2=10\\,000\\ \\text{cm}^2$." },
            ],
            steps: [
              { part: "a", reasoning: "Multiply the three dimensions.", working: "30\\times10\\times25=7500", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Divide by 1000.", working: "7.5", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Half the height halves the volume: $7500\\div2=3750\\ \\text{cm}^3=3.75$ litres.", working: "3.75", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$1\\ \\text{m}=100\\ \\text{cm}$, so $1\\ \\text{m}^2=100\\times100=10\\,000\\ \\text{cm}^2$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $7500\\ \\text{cm}^3$ (b) 7.5 L (c) 3.75 L (d) $10\\,000\\ \\text{cm}^2$",
            commonErrors: ["In (c) halving only one dimension incorrectly or halving twice."],
            examinerNote: "In (d) the reasoning about squaring the conversion factor is required.",
          },
        },
        {
          id: "mypm1-u3-volume-units-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A closed gift box is a cuboid measuring 12 cm by 8 cm by 6 cm. It is covered completely in wrapping paper.",
          parts: [
            { label: "a", prompt: "Work out the volume of the box, in $\\text{cm}^3$.", marks: 1 },
            { label: "b", prompt: "Work out the total surface area of the box, in $\\text{cm}^2$.", marks: 2 },
            { label: "c", prompt: "Explain why the surface area is measured in $\\text{cm}^2$ while the volume is measured in $\\text{cm}^3$.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Volume", answer: 576, unit: "cm³" },
              { label: "(b) Surface area", answer: 432, unit: "cm²" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cuboid", statement: "$V=lwh$" },
              { kind: "formula", name: "Surface area of a cuboid", statement: "$SA=2(lw+lh+wh)$" },
            ],
            steps: [
              { part: "a", reasoning: "Multiply the three dimensions.", working: "12\\times8\\times6=576", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Find the three face areas.", working: "12\\times8=96,\\ 12\\times6=72,\\ 8\\times6=48", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Add and double for the six faces.", working: "2(96+72+48)=2\\times216=432", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Surface area covers flat faces (two dimensions, so squared units); volume fills space (three dimensions, so cubed units).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $576\\ \\text{cm}^3$ (b) $432\\ \\text{cm}^2$ (c) surface area is flat (squared units); volume is space (cubed units)",
            commonErrors: ["Forgetting to double the face areas, giving 216.", "Computing the volume instead of the surface area."],
            examinerNote: "In (b) the doubling for the six faces is required for both marks.",
          },
        },
      ],
    },
  ],
};
