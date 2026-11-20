import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "m7-u3-lesson-3-2",
  code: "3-2",
  title: "Area, Surface Area and Volume",
  goal: "I CAN find area, surface area and volume of figures and right prisms, draw triangles from given conditions, and describe cross-sections of solids.",
  standards: ["7.G.B.6", "7.G.A.2", "7.G.A.3"],
  vocabulary: [
    { term: "Composite figure", definition: "A figure made up of two or more simpler shapes, such as rectangles, triangles and semicircles." },
    { term: "Right prism", definition: "A solid with two parallel, congruent bases and rectangular lateral faces that are perpendicular to the bases." },
    { term: "Surface area", definition: "The total area of all the faces of a solid, measured in square units." },
    { term: "Volume", definition: "The amount of space inside a solid, measured in cubic units. For a prism, $V = Bh$." },
    { term: "Triangle inequality", definition: "The sum of any two side lengths of a triangle must be greater than the third side length." },
    { term: "Cross-section", definition: "The two-dimensional shape formed when a plane slices through a solid." },
  ],
  concepts: [
    {
      id: "m7-u3-prism-measures",
      title: "Composite area, surface area and volume of prisms",
      skill: "Find the area of composite figures and the surface area and volume of right prisms.",
      lesson: {
        sections: [
          {
            heading: "Composite figures",
            body: "Split a composite figure into rectangles, triangles and other shapes you know. Find each area and add them, or subtract a removed piece from a larger shape. A triangle has area $\\frac{1}{2}bh$ where $h$ is perpendicular to the base $b$.",
          },
          {
            heading: "Volume of a right prism",
            body: "A right prism has the same cross-section all the way along its length. Its volume is the area of the base $B$ (the shape of the cross-section) multiplied by the height $h$ (the distance between the two bases): $V = Bh$. Units are cubic units.",
          },
          {
            heading: "Surface area",
            body: "Surface area is the sum of the areas of every face. For a prism, add the areas of the two bases and the areas of the rectangular lateral faces. Picture the net of the prism to avoid missing a face. Units are square units.",
          },
        ],
        keyFormulas: [
          { name: "Area of a triangle", statement: "$A = \\frac{1}{2}bh$" },
          { name: "Volume of a right prism", statement: "$V = Bh$" },
          { name: "Surface area of a prism", statement: "$SA = 2B + (\\text{perimeter of base}) \\times h$" },
        ],
        workedExample: {
          problem: "A box has length $8$ cm, width $5$ cm and height $3$ cm. Find its volume and surface area.",
          solution: "Volume: $V = 8 \\times 5 \\times 3 = 120\\ \\text{cm}^3$. Surface area: the faces are $8 \\times 5$ (top and bottom), $8 \\times 3$ (front and back) and $5 \\times 3$ (two sides). $SA = 2(40) + 2(24) + 2(15) = 80 + 48 + 30 = 158\\ \\text{cm}^2$.",
        },
      },
      questions: [
        {
          id: "m7-u3-prism-measures-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A rectangular prism has length $5$ in., width $4$ in. and height $3$ in. What is its volume?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12\\ \\text{in.}^3$" },
              { id: "b", text: "$47\\ \\text{in.}^3$" },
              { id: "c", text: "$60\\ \\text{in.}^3$" },
              { id: "d", text: "$94\\ \\text{in.}^3$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a prism", statement: "$V = Bh$, so for a rectangular prism $V = lwh$." },
            ],
            steps: [
              { reasoning: "Multiply length, width and height.", working: "V = 5 \\times 4 \\times 3 = 60", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $60\\ \\text{in.}^3$",
            commonErrors: ["Adding the dimensions, $5 + 4 + 3 = 12$.", "Finding the surface area, $94\\ \\text{in.}^2$, instead of the volume."],
          },
        },
        {
          id: "m7-u3-prism-measures-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A triangular prism has a base that is a triangle with base $6$ cm and height $4$ cm. The prism is $10$ cm long. Find its volume in cubic centimeters.",
          response: { type: "numeric", parts: [{ label: "Volume", answer: 120, unit: "cm³" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a prism", statement: "$V = Bh$, where $B$ is the area of the base." },
              { kind: "formula", name: "Area of a triangle", statement: "$A = \\frac{1}{2}bh$" },
            ],
            steps: [
              { reasoning: "Find the area of the triangular base.", working: "B = \\frac{1}{2} \\times 6 \\times 4 = 12", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the length of the prism.", working: "V = 12 \\times 10", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "V = 120", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$120\\ \\text{cm}^3$",
            commonErrors: ["Forgetting the factor $\\frac{1}{2}$ and getting $240$.", "Multiplying only $6 \\times 4 \\times 10$ without halving."],
            examinerNote: "M1 for triangle area $12$. M1 for $B \\times 10$. A1 cao.",
          },
        },
        {
          id: "m7-u3-prism-measures-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A figure is made from a rectangle $12$ ft wide and $8$ ft tall with a triangle on top. The triangle has a base of $12$ ft (the top side of the rectangle) and a height of $5$ ft. Find the total area of the figure, in square feet.",
          response: { type: "numeric", parts: [{ label: "Total area", answer: 126, unit: "ft²" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Composite area", statement: "The area of a composite figure is the sum of the areas of its parts." },
              { kind: "formula", name: "Area of a triangle", statement: "$A = \\frac{1}{2}bh$" },
            ],
            steps: [
              { reasoning: "Area of the rectangle.", working: "12 \\times 8 = 96", marks: 1, markCode: "M" },
              { reasoning: "Area of the triangle.", working: "\\frac{1}{2} \\times 12 \\times 5 = 30", marks: 2, markCode: "M" },
              { reasoning: "Add the two areas.", working: "96 + 30 = 126", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$126\\ \\text{ft}^2$",
            commonErrors: ["Using $12 \\times 5 = 60$ for the triangle.", "Subtracting the triangle instead of adding it."],
            examinerNote: "M1 for $96$. M2 for $30$ (M1 for $12 \\times 5$ seen or $\\frac{1}{2}$ error). A1 cao.",
          },
        },
        {
          id: "m7-u3-prism-measures-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A tent is shaped like a triangular prism lying on one of its rectangular faces. The triangular ends have base $6$ m and height $4$ m, and the two slanted sides of each triangle are $5$ m long. The tent is $10$ m long.",
          parts: [
            { label: "a", prompt: "Find the area of one triangular end, in square meters.", marks: 2 },
            { label: "b", prompt: "Find the volume of the tent, in cubic meters.", marks: 2 },
            { label: "c", prompt: "Find the total surface area of the prism, including the floor, in square meters.", marks: 3 },
            { label: "d", prompt: "Fabric for the tent covers every face except the floor and costs $\\$3$ per square meter. Find the cost of the fabric, in dollars.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Area of one end", answer: 12, unit: "m²" },
              { label: "(b) Volume", answer: 120, unit: "m³" },
              { label: "(c) Total surface area", answer: 184, unit: "m²" },
              { label: "(d) Cost of fabric", answer: 372, unit: "dollars" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a triangle", statement: "$A = \\frac{1}{2}bh$" },
              { kind: "formula", name: "Volume of a prism", statement: "$V = Bh$" },
              { kind: "principle", name: "Surface area of a prism", statement: "Add the areas of the two bases and all the rectangular faces." },
            ],
            steps: [
              { part: "a", reasoning: "Use the base and the perpendicular height, not the slanted side.", working: "\\frac{1}{2} \\times 6 \\times 4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "12", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Multiply the base area by the length of the tent.", working: "V = 12 \\times 10", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "120", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The two triangular ends have total area $2 \\times 12 = 24$. The floor is $6 \\times 10 = 60$ and the two slanted rectangles are each $5 \\times 10 = 50$.", working: "24 + 60 + 2(50)", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Add all the faces.", working: "24 + 60 + 100 = 184", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Remove the floor from the surface area, then multiply by the price.", working: "(184 - 60) \\times 3 = 124 \\times 3", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "372", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $12\\ \\text{m}^2$ (b) $120\\ \\text{m}^3$ (c) $184\\ \\text{m}^2$ (d) $\\$372$",
            commonErrors: ["Using the slanted side $5$ as the triangle height.", "Forgetting one of the two triangular ends or one slanted face.", "Charging for the floor in (d)."],
            examinerNote: "In (c) M2 for all five faces seen with correct areas (M1 for one rectangle area error). In (d) follow through from (c) (ft).",
          },
        },
      ],
    },
    {
      id: "m7-u3-triangles-cross-sections",
      title: "Drawing triangles and cross-sections of solids",
      skill: "Decide whether given conditions determine a triangle, and describe the cross-sections of solids.",
      lesson: {
        sections: [
          {
            heading: "When can you build a triangle?",
            body: "Three side lengths make a triangle only if the two shorter sides add to **more** than the longest side (the triangle inequality). Three angles make a triangle only if they add to $180^\\circ$. Given conditions can produce **no** triangle, **exactly one** triangle, or **more than one** triangle.",
          },
          {
            heading: "Unique triangles",
            body: "Three side lengths that satisfy the triangle inequality give exactly one triangle shape. Two sides and the angle between them give exactly one triangle. Three angles alone give many triangles: they have the same shape but different sizes.",
          },
          {
            heading: "Cross-sections",
            body: "A cross-section is the shape you see when a plane slices a solid. Slicing a right rectangular prism parallel to a face gives a rectangle congruent to that face. Slicing a cube parallel to a face gives a square. Slicing a rectangular pyramid parallel to its base gives a rectangle, and slicing through its apex perpendicular to the base gives a triangle.",
          },
        ],
        keyFormulas: [
          { name: "Triangle inequality", statement: "$a + b > c$ for every choice of the three sides" },
          { name: "Angle sum of a triangle", statement: "$A + B + C = 180^\\circ$" },
        ],
        workedExample: {
          problem: "Can a triangle have side lengths $4$ cm, $7$ cm and $10$ cm?",
          solution: "Check that the two shorter sides add to more than the longest side: $4 + 7 = 11 > 10$. The condition holds, so exactly one triangle shape exists with these side lengths.",
        },
      },
      questions: [
        {
          id: "m7-u3-triangles-cross-sections-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which set of side lengths can be used to draw a triangle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$ cm, $4$ cm, $8$ cm" },
              { id: "b", text: "$5$ cm, $7$ cm, $10$ cm" },
              { id: "c", text: "$2$ cm, $3$ cm, $5$ cm" },
              { id: "d", text: "$6$ cm, $6$ cm, $13$ cm" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Triangle inequality", statement: "The two shorter sides must add to more than the longest side." },
            ],
            steps: [
              { reasoning: "Only $5 + 7 = 12 > 10$ works. The others fail: $3 + 4 = 7 < 8$, $2 + 3 = 5$ is not greater than $5$, and $6 + 6 = 12 < 13$.", working: "5 + 7 > 10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $5$ cm, $7$ cm, $10$ cm",
            commonErrors: ["Accepting $2, 3, 5$ because the sum equals the third side. The sides would lie flat on a line."],
          },
        },
        {
          id: "m7-u3-triangles-cross-sections-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two sides of a triangle measure $5$ cm and $9$ cm. The third side is a whole number of centimeters. What is the greatest possible length of the third side, in centimeters?",
          response: { type: "numeric", parts: [{ label: "Greatest third side", answer: 13, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Triangle inequality", statement: "The third side must be less than the sum of the other two sides." },
            ],
            steps: [
              { reasoning: "The third side $s$ must be less than the sum of the other two.", working: "s < 5 + 9 = 14", marks: 1, markCode: "M" },
              { reasoning: "The greatest whole number less than $14$ is $13$.", working: "s = 13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$13$ cm",
            commonErrors: ["Giving $14$, which makes a flat figure and not a triangle.", "Giving $4$ (the difference), which is the least-side boundary."],
          },
        },
        {
          id: "m7-u3-triangles-cross-sections-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A right rectangular prism has a base $8$ cm by $5$ cm and a height of $3$ cm. A plane slices the prism perpendicular to the base and parallel to the $8$ cm edge. The slice is a rectangle with sides $8$ cm and $3$ cm. Find the area of this cross-section, in square centimeters.",
          response: { type: "numeric", parts: [{ label: "Area of cross-section", answer: 24, unit: "cm²" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cross-section", statement: "The shape formed where a plane meets a solid." },
              { kind: "formula", name: "Area of a rectangle", statement: "$A = lw$" },
            ],
            steps: [
              { reasoning: "A slice perpendicular to the base and parallel to an edge of the prism is a rectangle.", marks: 1, markCode: "R" },
              { reasoning: "Use the two dimensions given for the slice.", working: "A = 8 \\times 3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "A = 24", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rectangle, area $24\\ \\text{cm}^2$",
            commonErrors: ["Using the base area $8 \\times 5 = 40$.", "Using $5 \\times 3 = 15$ for a slice parallel to the wrong face."],
          },
        },
        {
          id: "m7-u3-triangles-cross-sections-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Lena is studying when conditions make a triangle, and what happens when solids are sliced.",
          parts: [
            { label: "a", prompt: "Lena tries to draw a triangle with side lengths $4$ cm, $6$ cm and $11$ cm. Explain why she cannot.", marks: 2 },
            { label: "b", prompt: "Lena draws a triangle with angles $50^\\circ$, $60^\\circ$ and $70^\\circ$. Explain why more than one triangle can have these angles.", marks: 2 },
            { label: "c", prompt: "Lena draws a triangle with two sides of $5$ cm and $7$ cm and the angle between them $40^\\circ$. Does this give no triangle, one triangle, or more than one? Explain.", marks: 2 },
            { label: "d", prompt: "Lena slices a cube with edge length $6$ cm by a plane parallel to one face. Name the shape of the cross-section and find its area in square centimeters.", marks: 3 },
          ],
          response: { type: "numeric", parts: [{ label: "(d) Area of cross-section", answer: 36, unit: "cm²" }] },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Triangle inequality", statement: "The sum of any two sides must exceed the third side." },
              { kind: "property", name: "Similar triangles", statement: "Triangles with the same angles have the same shape but can be different sizes." },
              { kind: "definition", name: "Cross-section", statement: "The shape formed where a plane meets a solid." },
            ],
            steps: [
              { part: "a", reasoning: "Add the two shorter sides.", working: "4 + 6 = 10", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Since $10 < 11$, the two shorter sides cannot meet, so no triangle exists.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "The angles add to $50 + 60 + 70 = 180$, so a triangle exists.", working: "50 + 60 + 70 = 180", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Angles fix only the shape, not the size. A larger or smaller copy has the same angles, so there are infinitely many triangles.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Two sides and the included angle fix the third side and the other angles, so exactly one triangle can be drawn.", marks: 2, markCode: "R" },
              { part: "d", reasoning: "A cut parallel to a face of a cube gives a square congruent to that face.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The side length is the edge of the cube.", working: "\\text{side} = 6", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Area of a square.", working: "A = 6^2 = 36", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $4 + 6 < 11$ so no triangle (b) same angles, different sizes, so many triangles (c) exactly one triangle (SAS) (d) a square, $36\\ \\text{cm}^2$",
            commonErrors: ["Saying $4 + 6 = 10$ is enough without comparing to $11$.", "Claiming that equal angles force equal side lengths.", "Giving the cross-section as a rectangle with area $6 \\times 12$."],
            examinerNote: "In (c) the reasoning must mention two sides and the included angle (or SAS).",
          },
        },
      ],
    },
  ],
};
