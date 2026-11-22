import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "edm11-u2-lesson-2-3",
  code: "2-3",
  title: "Similarity and Loci",
  goal: "I CAN use area and volume scale factors for similar shapes, and draw loci and constructions accurately.",
  standards: ["4MA1 4.4", "4MA1 4.6", "4MA1 4.1H", "4MA1 4.5H"],
  vocabulary: [
    { term: "Similar shapes", definition: "Shapes that have equal corresponding angles and corresponding lengths in the same ratio." },
    { term: "Linear scale factor", definition: "The ratio $k$ of corresponding lengths in two similar shapes." },
    { term: "Area scale factor", definition: "The ratio of corresponding areas of similar shapes, equal to $k^2$." },
    { term: "Volume scale factor", definition: "The ratio of corresponding volumes of similar solids, equal to $k^3$." },
    { term: "Locus", definition: "The set of all points that satisfy a given condition. The plural is loci." },
    { term: "Perpendicular bisector", definition: "The line that cuts a line segment in half at right angles. Every point on it is equidistant from the two ends." },
    { term: "Angle bisector", definition: "The line that cuts an angle in half. Every point on it is equidistant from the two arms of the angle." },
  ],
  concepts: [
    {
      id: "edm11-u2-similar-shapes",
      title: "Area and volume scale factors",
      skill: "Use the relationships between length, area and volume scale factors for similar shapes.",
      lesson: {
        sections: [
          {
            heading: "Scale factors",
            body: "If two shapes are similar with linear scale factor $k$, then lengths are in the ratio $1:k$, areas are in the ratio $1:k^2$ and volumes are in the ratio $1:k^3$. To go from areas to lengths take a square root, and from volumes to lengths take a cube root.",
          },
          {
            heading: "Method",
            body: "First find the linear scale factor from a pair of corresponding lengths, or from the area or volume ratio. Then raise it to the power you need. Always check that you are comparing corresponding quantities, and decide which shape is bigger.",
          },
          {
            heading: "Context problems",
            body: "Many problems involve two similar containers or models. Mass and capacity are proportional to volume; the amount of paint or material for a surface is proportional to area.",
          },
        ],
        keyFormulas: [
          { name: "Scale factors", statement: "Length $\\times k$, area $\\times k^2$, volume $\\times k^3$" },
        ],
        workedExample: {
          problem: "Two similar cones have heights 6 cm and 9 cm. The smaller has volume 80 cm$^3$. Find the volume of the larger.",
          solution: "Linear scale factor $\\frac96=1.5$. Volume scale factor $1.5^3=3.375$. Volume $=80\\times3.375=270$ cm$^3$.",
        },
      },
      questions: [
        {
          id: "edm11-u2-similar-shapes-q1",
          difficulty: "foundation",
          tier: "higher",
          totalMarks: 1,
          stem: "Two similar shapes have lengths in the ratio $1:3$.\n\nWhat is the ratio of their areas?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1:27$" },
              { id: "b", text: "$1:6$" },
              { id: "c", text: "$1:3$" },
              { id: "d", text: "$1:9$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Area scale factor", statement: "Area scale factor $=k^2$" }],
            steps: [{ reasoning: "Square the length ratio: $3^2=9$.", working: "1:9", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $1:9$",
            commonErrors: ["Using the length ratio for areas.", "Cubing instead of squaring (option d)."],
          },
        },
        {
          id: "edm11-u2-similar-shapes-q2",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "Two similar triangles have corresponding sides of length 4 cm and 10 cm. The area of the smaller triangle is 12 cm$^2$.\n\nWork out the area of the larger triangle.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 75, unit: "cm²" }] },
          markscheme: {
            principles: [{ kind: "property", name: "Area scale factor", statement: "Area scale factor $=k^2$" }],
            steps: [
              { reasoning: "Linear scale factor.", working: "k=\\frac{10}{4}=2.5", marks: 1, markCode: "M" },
              { reasoning: "Area scale factor.", working: "2.5^2=6.25", marks: 1, markCode: "M" },
              { reasoning: "Multiply.", working: "12\\times6.25=75", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$75$ cm$^2$",
            commonErrors: ["Multiplying the area by 2.5 to get 30.", "Dividing by the scale factor."],
          },
        },
        {
          id: "edm11-u2-similar-shapes-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "Two similar solid statues have volumes 250 cm$^3$ and 2000 cm$^3$. The surface area of the smaller statue is 150 cm$^2$.\n\nWork out the surface area of the larger statue.",
          response: { type: "numeric", parts: [{ label: "Surface area", answer: 600, unit: "cm²" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Volume scale factor", statement: "Volume scale factor $=k^3$" },
              { kind: "property", name: "Area scale factor", statement: "Area scale factor $=k^2$" },
            ],
            steps: [
              { reasoning: "Volume scale factor.", working: "\\frac{2000}{250}=8", marks: 1, markCode: "M" },
              { reasoning: "Linear scale factor is the cube root.", working: "k=\\sqrt[3]{8}=2", marks: 1, markCode: "M" },
              { reasoning: "Area scale factor.", working: "2^2=4", marks: 1, markCode: "M" },
              { reasoning: "Multiply.", working: "150\\times4=600", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$600$ cm$^2$",
            commonErrors: ["Using 8 as the area scale factor to get 1200.", "Using 2 as the area scale factor to get 300."],
          },
        },
        {
          id: "edm11-u2-similar-shapes-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 9,
          stem: "Two bottles, A and B, are mathematically similar. Bottle A has height 12 cm and capacity 300 ml. Bottle B has height 18 cm. The label on bottle A has area 60 cm$^2$.",
          parts: [
            { label: "a", prompt: "Work out the capacity of bottle B.", marks: 3 },
            { label: "b", prompt: "The label on bottle B is similar to the label on bottle A. Work out the area of the label on bottle B.", marks: 2 },
            { label: "c", prompt: "A third similar bottle C has capacity 2.4 litres. Work out the height of bottle C.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Scale factors", statement: "Length $\\times k$, area $\\times k^2$, volume $\\times k^3$." },
            ],
            steps: [
              { part: "a", reasoning: "Linear scale factor.", working: "k=\\frac{18}{12}=1.5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Volume scale factor.", working: "1.5^3=3.375", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Multiply.", working: "300\\times3.375=1012.5\\text{ ml}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Area scale factor.", working: "1.5^2=2.25", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Multiply the label area.", working: "60\\times2.25=135\\text{ cm}^2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Convert to ml: 2.4 litres $=2400$ ml. Volume scale factor from A.", working: "\\frac{2400}{300}=8", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Cube root for the linear scale factor.", working: "k=\\sqrt[3]{8}=2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Multiply the height of A.", working: "12\\times2=24", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State with units.", working: "24\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1012.5 ml (b) 135 cm$^2$ (c) 24 cm",
            commonErrors: ["Not converting litres to millilitres.", "Using the volume ratio as the height ratio."],
            examinerNote: "In (b) a common error is to use 1.5 as the area scale factor, giving 90 cm$^2$.",
          },
        },
      ],
    },
    {
      id: "edm11-u2-loci",
      title: "Loci and constructions",
      skill: "Construct perpendicular bisectors, angle bisectors and circles, and use them to define regions.",
      lesson: {
        sections: [
          {
            heading: "Standard loci",
            body: "The locus of points a fixed distance $r$ from a point is a circle of radius $r$. The locus of points equidistant from two points $A$ and $B$ is the perpendicular bisector of $AB$. The locus of points equidistant from two intersecting lines is the angle bisector. The locus of points a fixed distance from a line is a pair of parallel lines with semicircular ends.",
          },
          {
            heading: "Constructions",
            body: "Use compasses and a ruler and leave all construction arcs visible. For a perpendicular bisector, draw arcs of equal radius (more than half of $AB$) from each end so they cross above and below, then join the crossing points. For an angle bisector, draw an arc across both arms from the vertex, then equal arcs from those two points.",
          },
          {
            heading: "Regions",
            body: "Describe a region using conditions such as 'closer to A than to B' (one side of the perpendicular bisector) or 'less than 4 cm from C' (inside a circle). Shade the region where all the conditions are true together.",
          },
        ],
        keyFormulas: [
          { name: "Equidistant from two points", statement: "Perpendicular bisector of the line joining them" },
          { name: "Equidistant from two lines", statement: "Bisector of the angle between them" },
        ],
        workedExample: {
          problem: "Points A and B are 8 cm apart. Describe the region of points less than 5 cm from A and closer to A than to B.",
          solution: "Draw a circle of radius 5 cm centred at A, and the perpendicular bisector of AB (4 cm from A). Shade the part inside the circle on A's side of the bisector.",
        },
      },
      questions: [
        {
          id: "edm11-u2-loci-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 1,
          stem: "A and B are two points 6 cm apart.\n\nWhat is the locus of points that are the same distance from A as from B?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The bisector of angle A" },
              { id: "b", text: "A circle with centre A and radius 3 cm" },
              { id: "c", text: "The line AB" },
              { id: "d", text: "The perpendicular bisector of AB" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Perpendicular bisector", statement: "Every point on it is equidistant from both ends of the segment." }],
            steps: [{ reasoning: "Equidistant from two points gives their perpendicular bisector.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** The perpendicular bisector of AB",
            commonErrors: ["Choosing the line AB itself.", "Confusing with a circle locus."],
          },
        },
        {
          id: "edm11-u2-loci-q2",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 3,
          stem: "A and B are two points 8 cm apart. Draw the line AB. Using ruler and compasses only, construct the perpendicular bisector of AB.\n\nLeave in all your construction lines. Write down how far from A the bisector crosses AB.",
          response: { type: "numeric", parts: [{ label: "Distance from A", answer: 4, unit: "cm" }] },
          markscheme: {
            principles: [{ kind: "property", name: "Perpendicular bisector", statement: "It crosses AB at its midpoint at right angles." }],
            steps: [
              { reasoning: "With compasses at A and then B, draw arcs of the same radius (greater than 4 cm) that intersect above and below AB.", marks: 1, markCode: "M" },
              { reasoning: "Join the two intersection points with a straight line.", marks: 1, markCode: "A" },
              { reasoning: "The bisector meets AB at the midpoint, which is half of 8 cm from A.", working: "8\\div2=4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4 cm",
            commonErrors: ["Using different radii for the two arcs.", "Using a radius smaller than half of AB so the arcs do not cross."],
            examinerNote: "Construction arcs must be visible. Accept arcs with radius within 2 mm of the correct size (oe).",
          },
        },
        {
          id: "edm11-u2-loci-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "A and B are points 10 cm apart. Point P is such that P is closer to A than to B, and P is less than 7 cm from B.\n\nThe boundary of the region meets AB at two points: the midpoint of AB, and the point on AB 7 cm from B.\n\nWork out the distance between these two points along AB.",
          response: { type: "numeric", parts: [{ label: "Distance", answer: 2, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Region boundaries", statement: "'Closer to A than B' is bounded by the perpendicular bisector; 'less than 7 cm from B' is the inside of a circle centre B." },
            ],
            steps: [
              { reasoning: "The perpendicular bisector crosses AB at 5 cm from B.", working: "10\\div2=5", marks: 1, markCode: "B" },
              { reasoning: "The circle of radius 7 cm about B meets line AB 7 cm from B, on the side of A.", working: "7", marks: 1, markCode: "B" },
              { reasoning: "Both points are on AB measured from B; subtract.", working: "7-5", marks: 1, markCode: "M" },
              { reasoning: "State the distance.", working: "2\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 cm",
            commonErrors: ["Measuring from A (giving 3 cm and 5 cm incorrectly).", "Using the radius 7 as the distance from A."],
          },
        },
        {
          id: "edm11-u2-loci-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 8,
          stem: "A rectangular garden ABCD has AB = 12 m and BC = 8 m, with A at the bottom left, B at the bottom right, C at the top right and D at the top left. A tree is to be planted so that it is:\n- closer to AB than to AD, and\n- more than 5 m from corner C, and\n- inside the garden.\nA scale drawing uses 1 cm to represent 2 m.",
          parts: [
            { label: "a", prompt: "Write down the lengths of AB and BC on the scale drawing.", marks: 2 },
            { label: "b", prompt: "Describe the line that is the boundary of the region 'closer to AB than to AD'.", marks: 2 },
            { label: "c", prompt: "Describe the boundary of the region 'more than 5 m from C', and give its radius on the scale drawing.", marks: 2 },
            { label: "d", prompt: "Point T lies on the diagonal AC of the garden, 5 m from C. Work out the distance AT in metres, correct to 3 significant figures.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Angle bisector", statement: "Points equidistant from two lines meeting at A lie on the bisector of the angle between them." },
              { kind: "theorem", name: "Pythagoras", statement: "$AC^2=AB^2+BC^2$" },
            ],
            steps: [
              { part: "a", reasoning: "Divide the real lengths by 2.", working: "12\\div2=6,\\quad 8\\div2=4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both.", working: "AB=6\\text{ cm},\\; BC=4\\text{ cm}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Points equidistant from AB and AD lie on the bisector of angle DAB, which is $90^\\circ$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "So the boundary is the line from A at $45^\\circ$ to AB, and the region is below it.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "More than 5 m from C is outside a circle centre C. The scale radius is $5\\div2$.", working: "2.5\\text{ cm}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the boundary.", working: "\\text{circle, centre } C, \\text{ radius } 2.5\\text{ cm}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Find AC by Pythagoras.", working: "AC=\\sqrt{12^2+8^2}=\\sqrt{208}=14.42\\ldots", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Subtract 5 m.", working: "AT=14.42-5=9.42\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 6 cm and 4 cm (b) the $45^\\circ$ line from A (bisector of angle DAB) (c) circle centre C, radius 2.5 cm (d) 9.42 m",
            commonErrors: ["Drawing the perpendicular bisector of AB instead of the angle bisector at A.", "Not converting 5 m to the scale drawing."],
            examinerNote: "$\\sqrt{208}=14.4222$, so $AT=9.4222$, i.e. 9.42 m to 3 s.f.",
          },
        },
      ],
    },
  ],
};
