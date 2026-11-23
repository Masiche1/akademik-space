module.exports = [
  {
    file: "lesson-6-1.ts", exportName: "lesson61",
    lesson: {
      id: "edm10-u6-lesson-6-1", code: "6-1",
      title: "Areas and Volumes of Solids",
      goal: "I CAN calculate the volumes and surface areas of prisms, cylinders and composite solids.",
      standards: ["4MA1 3.3", "4MA1 3.4H"],
      vocabulary: [
        { term: "Prism", definition: "A solid with a constant cross-section along its length." },
        { term: "Cross-sectional area", definition: "The area of the face cut at right angles to the length of a prism." },
        { term: "Cylinder", definition: "A prism whose cross-section is a circle." },
        { term: "Curved surface area", definition: "The area of the curved part of a cylinder, $2\\pi rh$." },
        { term: "Surface area", definition: "The total area of all faces of a solid." },
        { term: "Composite solid", definition: "A solid made by joining or cutting shapes together." },
      ],
      concepts: [
        {
          id: "edm10-u6-prisms-cylinders",
          title: "Prisms and cylinders",
          skill: "Calculate volumes of prisms and cylinders, and solve capacity problems.",
          sections: [
            { heading: "Volume of a prism", body: "A prism has the same cross-section all the way along its length. Its volume is $V=(\\text{area of cross-section})\\times(\\text{length})$. For a cuboid the cross-section is a rectangle, giving $V=lwh$; for a triangular prism the cross-section is a triangle, so first find $\\frac12\\times\\text{base}\\times\\text{height}$ of the triangle." },
            { heading: "Volume of a cylinder", body: "A cylinder is a prism with a circular cross-section, so $V=\\pi r^2h$ where $r$ is the radius and $h$ is the height. Always use the radius, not the diameter. Keep $\\pi$ exact until the final step, then round sensibly." },
            { heading: "Capacity problems", body: "$1\\text{ m}^3=1000\\text{ litres}$, so multiply a volume in cubic metres by 1000 to get litres. For filling problems, divide the volume by the flow rate to get the time. Remember $1\\text{ cm}^3=1\\text{ ml}$." },
          ],
          keyFormulas: [
            { name: "Prism volume", statement: "$V=A\\times l$" },
            { name: "Cylinder volume", statement: "$V=\\pi r^2h$" },
            { name: "Unit conversions", statement: "$1\\text{ m}^3=1000\\text{ litres}=10^6\\text{ cm}^3$" },
          ],
          workedExample: {
            problem: "A cylinder has radius 3 cm and height 10 cm. Find its volume in terms of $\\pi$.",
            solution: "$V=\\pi r^2h=\\pi\\times9\\times10=90\\pi\\text{ cm}^3\\approx282.7\\text{ cm}^3$.",
          },
          questions: [
            {
              id: "edm10-u6-prismcyl-q1", difficulty: "foundation", tier: "foundation", totalMarks: 1,
              stem: "A prism has a cross-sectional area of $15\\text{ cm}^2$ and a length of $8\\text{ cm}$. What is its volume?",
              response: { type: "mcq", choices: [
                { id: "a", text: "$23\\text{ cm}^3$" }, { id: "b", text: "$120\\text{ cm}^3$" }, { id: "c", text: "$1200\\text{ cm}^3$" }, { id: "d", text: "$13\\text{ cm}^3$" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "formula", name: "Prism volume", statement: "$V=A\\times l$." }],
                steps: [{ reasoning: "$15\\times8=120$.", working: "15\\times8=120", marks: 1, markCode: "B" }],
                finalAnswer: "**(b)** $120\\text{ cm}^3$",
                commonErrors: ["Adding instead of multiplying.", "Multiplying by the square of the length."],
              },
            },
            {
              id: "edm10-u6-prismcyl-q2", difficulty: "foundation", tier: "higher", totalMarks: 2,
              stem: "A cylinder has radius $4\\text{ cm}$ and height $5\\text{ cm}$. Calculate its volume. Give your answer correct to 1 decimal place.",
              response: { type: "numeric", parts: [{ label: "Volume", answer: 251.3, tolerance: 0.1, unit: "cm³" }] },
              markscheme: {
                principles: [{ kind: "formula", name: "Cylinder volume", statement: "$V=\\pi r^2h$." }],
                steps: [
                  { reasoning: "Substitute into the formula.", working: "V=\\pi\\times4^2\\times5=80\\pi", marks: 1, markCode: "M" },
                  { reasoning: "Evaluate.", working: "80\\pi=251.3", marks: 1, markCode: "A" },
                ],
                finalAnswer: "$251.3\\text{ cm}^3$",
                commonErrors: ["Using the diameter 8 instead of the radius 4, giving a volume 4 times too large.", "Using $2\\pi r$ instead of $\\pi r^2$."],
              },
            },
            {
              id: "edm10-u6-prismcyl-q3", difficulty: "core", tier: "higher", totalMarks: 3,
              stem: "A cylindrical water tank has radius $7\\text{ m}$ and height $12\\text{ m}$. Calculate its capacity in cubic metres, giving your answer correct to 1 decimal place.",
              response: { type: "numeric", parts: [{ label: "Volume", answer: 1847.3, tolerance: 0.5, unit: "m³" }] },
              markscheme: {
                principles: [{ kind: "formula", name: "Cylinder volume", statement: "$V=\\pi r^2h$." }],
                steps: [
                  { reasoning: "Substitute the radius and height.", working: "V=\\pi\\times7^2\\times12", marks: 1, markCode: "M" },
                  { reasoning: "Simplify.", working: "V=588\\pi", marks: 1, markCode: "M" },
                  { reasoning: "Evaluate.", working: "588\\pi=1847.3", marks: 1, markCode: "A" },
                ],
                finalAnswer: "$1847.3\\text{ m}^3$",
                commonErrors: ["Using $14$ (diameter) as the radius."],
              },
            },
            {
              id: "edm10-u6-prismcyl-q4", difficulty: "challenge", tier: "higher", totalMarks: 5,
              stem: "A right triangular prism has a cross-section which is a right-angled triangle with legs $6\\text{ cm}$ and $8\\text{ cm}$, and a length of $15\\text{ cm}$.",
              parts: [
                { label: "a", prompt: "Calculate the area of the triangular cross-section.", marks: 2 },
                { label: "b", prompt: "Calculate the volume of the prism.", marks: 2 },
                { label: "c", prompt: "State the units of your answer to part (b).", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Prism volume", statement: "$V=(\\text{cross-sectional area})\\times(\\text{length})$." }],
                steps: [
                  { part: "a", reasoning: "Area of a right-angled triangle is half the product of the legs.", working: "\\frac12\\times6\\times8", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Evaluate.", working: "24\\text{ cm}^2", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Multiply by the length.", working: "24\\times15", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Evaluate.", working: "360\\text{ cm}^3", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Volume units are cubic centimetres.", working: "\\text{cm}^3", marks: 1, markCode: "B" },
                ],
                finalAnswer: "(a) $24\\text{ cm}^2$ (b) $360\\text{ cm}^3$ (c) cubic centimetres",
                commonErrors: ["Using $6\\times8=48$ without halving for the triangle area.", "Using the hypotenuse 10 instead of the legs for the cross-section."],
              },
            },
            {
              id: "edm10-u6-prismcyl-q5", difficulty: "challenge", tier: "higher", totalMarks: 7,
              stem: "A cylindrical tank has radius $0.5\\text{ m}$ and height $1.2\\text{ m}$. Water is pumped into the tank at a rate of $2\\text{ litres per second}$.",
              parts: [
                { label: "a", prompt: "Calculate the volume of the tank in cubic metres, giving your answer in terms of $\\pi$.", marks: 3 },
                { label: "b", prompt: "Calculate the capacity of the tank in litres, correct to the nearest litre.", marks: 2 },
                { label: "c", prompt: "Calculate the time taken to fill the tank completely, in seconds.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Cylinder volume", statement: "$V=\\pi r^2h$." },
                  { kind: "definition", name: "Capacity conversion", statement: "$1\\text{ m}^3=1000\\text{ litres}$." },
                ],
                steps: [
                  { part: "a", reasoning: "Substitute into $V=\\pi r^2h$.", working: "V=\\pi\\times0.5^2\\times1.2", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Simplify: $0.5^2=0.25$ and $0.25\\times1.2=0.3$.", working: "V=0.3\\pi\\text{ m}^3", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "State the answer.", working: "0.3\\pi\\text{ m}^3", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Convert using $1\\text{ m}^3=1000\\text{ litres}$.", working: "0.3\\pi\\times1000=300\\pi", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Evaluate.", working: "942\\text{ litres (3 s.f.)}", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Divide capacity by flow rate.", working: "\\frac{300\\pi}{2}", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Evaluate.", working: "471\\text{ seconds (3 s.f.)}", marks: 1, markCode: "A" },
                ],
                finalAnswer: "(a) $0.3\\pi\\text{ m}^3$ (b) $942\\text{ litres}$ (c) $471\\text{ seconds}$",
                commonErrors: ["Converting litres to cubic metres the wrong way.", "Forgetting that the tank volume uses radius, not diameter."],
                examinerNote: "Accept $942.5$ litres and $471.2$ seconds (3 s.f. from $300\\pi$).",
              },
            },
            {
              id: "edm10-u6-prismcyl-q6", difficulty: "challenge", tier: "higher", totalMarks: 10,
              stem: "A cylindrical storage drum has radius $8\\text{ cm}$ and height $15\\text{ cm}$.",
              parts: [
                { label: "a", prompt: "Write down the formula for the volume of a cylinder.", marks: 1 },
                { label: "b", prompt: "Calculate the volume of the drum, giving your answer in terms of $\\pi$ and as a decimal correct to 1 decimal place.", marks: 3 },
                { label: "c", prompt: "Calculate the curved surface area of the drum, in terms of $\\pi$.", marks: 3 },
                { label: "d", prompt: "Calculate the total surface area of the drum, including both circular ends, as a decimal correct to 1 decimal place.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Cylinder volume", statement: "$V=\\pi r^2h$." },
                  { kind: "formula", name: "Cylinder surface area", statement: "Curved $=2\\pi rh$; total $=2\\pi rh+2\\pi r^2$." },
                ],
                steps: [
                  { part: "a", reasoning: "State the formula.", working: "V=\\pi r^2h", marks: 1, markCode: "B" },
                  { part: "b", reasoning: "Substitute.", working: "V=\\pi\\times8^2\\times15=960\\pi", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "State in terms of $\\pi$.", working: "960\\pi\\text{ cm}^3", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Evaluate as a decimal.", working: "3015.9\\text{ cm}^3", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Use $2\\pi rh$.", working: "2\\pi\\times8\\times15", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Simplify.", working: "240\\pi\\text{ cm}^2", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "State the answer.", working: "240\\pi\\text{ cm}^2", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "Add the two circular ends $2\\pi r^2=2\\pi\\times64=128\\pi$.", working: "240\\pi+128\\pi=368\\pi", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Simplify.", working: "368\\pi\\text{ cm}^2", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Evaluate.", working: "1156.1\\text{ cm}^2", marks: 1, markCode: "A" },
                ],
                finalAnswer: "(b) $960\\pi\\approx3015.9\\text{ cm}^3$ (c) $240\\pi\\text{ cm}^2$ (d) $368\\pi\\approx1156.1\\text{ cm}^2$",
                commonErrors: ["Using $\\pi r^2$ for the curved surface area instead of $2\\pi rh$.", "Forgetting one of the two ends in (d)."],
              },
            },
          ],
        },
        {
          id: "edm10-u6-surface-areas",
          title: "Surface areas and composite solids",
          skill: "Calculate surface areas of cuboids, cylinders and composite solids.",
          sections: [
            { heading: "Surface area of cuboids and cubes", body: "A cuboid has 6 rectangular faces. Pair the opposite faces: $A=2(lw+lh+wh)$. A cube of side $s$ has $A=6s^2$. Always check whether the solid is open or closed — an open-top box has no top face." },
            { heading: "Surface area of a cylinder", body: "Unroll the curved surface into a rectangle of width $2\\pi r$ and height $h$: curved area $=2\\pi rh$. Add the two circular ends $\\pi r^2$ each for a closed cylinder: total $=2\\pi rh+2\\pi r^2$. For a cylinder open at one end, add only one $\\pi r^2$." },
            { heading: "Composite solids", body: "For solids made by joining shapes, add the surface areas of the parts and subtract twice the area of each joining face (once for each solid). For a solid with a part removed, subtract the removed surface. Work out each piece separately and keep track of which faces are hidden." },
          ],
          keyFormulas: [
            { name: "Cuboid surface area", statement: "$A=2(lw+lh+wh)$" },
            { name: "Cube surface area", statement: "$A=6s^2$" },
            { name: "Cylinder surface area", statement: "Curved $=2\\pi rh$; total $=2\\pi rh+2\\pi r^2$" },
          ],
          workedExample: {
            problem: "Find the total surface area of a closed cuboid measuring $3\\text{ cm} \\times 4\\text{ cm} \\times 5\\text{ cm}$.",
            solution: "$A=2(3\\times4+3\\times5+4\\times5)=2(12+15+20)=2\\times47=94\\text{ cm}^2$.",
          },
          questions: [
            {
              id: "edm10-u6-surfaces-q1", difficulty: "foundation", tier: "foundation", totalMarks: 1,
              stem: "A cube has side length $4\\text{ cm}$. What is its total surface area?",
              response: { type: "mcq", choices: [
                { id: "a", text: "$64\\text{ cm}^2$" }, { id: "b", text: "$96\\text{ cm}^2$" }, { id: "c", text: "$24\\text{ cm}^2$" }, { id: "d", text: "$48\\text{ cm}^2$" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "formula", name: "Cube surface area", statement: "$A=6s^2$." }],
                steps: [{ reasoning: "$6\\times4^2=6\\times16=96$.", working: "6\\times16=96", marks: 1, markCode: "B" }],
                finalAnswer: "**(b)** $96\\text{ cm}^2$",
                commonErrors: ["Using $s^3=64$ (that is the volume).", "Counting only 4 faces."],
              },
            },
            {
              id: "edm10-u6-surfaces-q2", difficulty: "foundation", tier: "foundation", totalMarks: 2,
              stem: "A cuboid measures $2\\text{ cm} \\times 3\\text{ cm} \\times 4\\text{ cm}$. Calculate its total surface area.",
              response: { type: "numeric", parts: [{ label: "Surface area", answer: 52, unit: "cm²" }] },
              markscheme: {
                principles: [{ kind: "formula", name: "Cuboid surface area", statement: "$A=2(lw+lh+wh)$." }],
                steps: [
                  { reasoning: "Compute the three face areas.", working: "2\\times3=6,\\ 2\\times4=8,\\ 3\\times4=12", marks: 1, markCode: "M" },
                  { reasoning: "Double the sum.", working: "2(6+8+12)=52", marks: 1, markCode: "A" },
                ],
                finalAnswer: "$52\\text{ cm}^2$",
                commonErrors: ["Forgetting to double, giving 26.", "Adding all six faces separately but making an arithmetic slip."],
              },
            },
            {
              id: "edm10-u6-surfaces-q3", difficulty: "core", tier: "higher", totalMarks: 3,
              stem: "A closed cylindrical can has radius $3\\text{ cm}$ and height $10\\text{ cm}$. Calculate its total surface area, giving your answer correct to 1 decimal place.",
              response: { type: "numeric", parts: [{ label: "Surface area", answer: 245.0, tolerance: 0.5, unit: "cm²" }] },
              markscheme: {
                principles: [{ kind: "formula", name: "Cylinder surface area", statement: "$A=2\\pi rh+2\\pi r^2$." }],
                steps: [
                  { reasoning: "Curved area: $2\\pi\\times3\\times10=60\\pi$; ends: $2\\pi\\times9=18\\pi$.", working: "60\\pi+18\\pi=78\\pi", marks: 1, markCode: "M" },
                  { reasoning: "Simplify.", working: "A=78\\pi\\text{ cm}^2", marks: 1, markCode: "M" },
                  { reasoning: "Evaluate.", working: "78\\pi=245.0", marks: 1, markCode: "A" },
                ],
                finalAnswer: "$245.0\\text{ cm}^2$",
                commonErrors: ["Using only the curved area $60\\pi$.", "Using diameter instead of radius for the ends."],
              },
            },
            {
              id: "edm10-u6-surfaces-q4", difficulty: "challenge", tier: "higher", totalMarks: 5,
              stem: "A capsule-shaped container consists of a cylinder of radius $3\\text{ cm}$ and length $8\\text{ cm}$ with a hemisphere of radius $3\\text{ cm}$ attached at each end.",
              parts: [
                { label: "a", prompt: "Calculate the curved surface area of the cylindrical part.", marks: 2 },
                { label: "b", prompt: "Calculate the total curved surface area of the whole capsule (cylinder plus both hemispheres).", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Cylinder curved area", statement: "$2\\pi rh$." },
                  { kind: "formula", name: "Hemisphere area", statement: "Two hemispheres make one sphere: $4\\pi r^2$." },
                ],
                steps: [
                  { part: "a", reasoning: "Use $2\\pi rh$.", working: "2\\pi\\times3\\times8=48\\pi", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "State the answer.", working: "48\\pi\\text{ cm}^2", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Two hemispheres of radius 3 together form a sphere of surface area $4\\pi r^2$.", working: "4\\pi\\times3^2=36\\pi", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Add to the cylinder's curved area.", working: "48\\pi+36\\pi=84\\pi", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "State the total.", working: "84\\pi\\text{ cm}^2\\approx263.9\\text{ cm}^2", marks: 1, markCode: "A" },
                ],
                finalAnswer: "(a) $48\\pi\\text{ cm}^2$ (b) $84\\pi\\approx263.9\\text{ cm}^2$",
                commonErrors: ["Using the full sphere area $4\\pi r^2$ for each hemisphere (double counting).", "Adding the flat circular ends — a capsule has none."],
              },
            },
            {
              id: "edm10-u6-surfaces-q5", difficulty: "challenge", tier: "higher", totalMarks: 6,
              stem: "An open-top cylindrical water trough has radius $5\\text{ m}$ and height $12\\text{ m}$.",
              parts: [
                { label: "a", prompt: "Calculate the curved surface area of the trough.", marks: 2 },
                { label: "b", prompt: "Calculate the area of the base.", marks: 2 },
                { label: "c", prompt: "Calculate the total surface area of the trough, correct to 1 decimal place.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Cylinder curved area", statement: "$2\\pi rh$." },
                  { kind: "formula", name: "Circle area", statement: "$\\pi r^2$." },
                ],
                steps: [
                  { part: "a", reasoning: "Curved area is $2\\pi rh$.", working: "2\\pi\\times5\\times12=120\\pi", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "State the answer.", working: "120\\pi\\text{ m}^2", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Base is a circle of radius 5.", working: "\\pi\\times5^2=25\\pi", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "State the answer.", working: "25\\pi\\text{ m}^2", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Add curved area and base only — the trough is open at the top.", working: "120\\pi+25\\pi=145\\pi", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Evaluate.", working: "145\\pi=455.5\\text{ m}^2", marks: 1, markCode: "A" },
                ],
                finalAnswer: "(a) $120\\pi\\text{ m}^2$ (b) $25\\pi\\text{ m}^2$ (c) $455.5\\text{ m}^2$",
                commonErrors: ["Including a top face for an open trough.", "Using $2\\pi r^2$ for the base instead of $\\pi r^2$."],
              },
            },
            {
              id: "edm10-u6-surfaces-q6", difficulty: "challenge", tier: "higher", totalMarks: 10,
              stem: "A grain silo consists of a cylinder of radius $3\\text{ m}$ and height $10\\text{ m}$ with a hemisphere of radius $3\\text{ m}$ on top. The silo stands on its flat circular base.",
              parts: [
                { label: "a", prompt: "Calculate the volume of the cylindrical part, as a multiple of $\\pi$.", marks: 2 },
                { label: "b", prompt: "Calculate the volume of the hemispherical part, as a multiple of $\\pi$.", marks: 2 },
                { label: "c", prompt: "Calculate the total volume of the silo as a decimal correct to 1 decimal place.", marks: 2 },
                { label: "d", prompt: "Calculate the total surface area of the silo, including the base, as a decimal correct to 1 decimal place.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Cylinder volume", statement: "$V=\\pi r^2h$." },
                  { kind: "formula", name: "Hemisphere volume", statement: "$V=\\frac{2}{3}\\pi r^3$." },
                  { kind: "formula", name: "Surface areas", statement: "Cylinder curved $2\\pi rh$; hemisphere curved $2\\pi r^2$; base $\\pi r^2$." },
                ],
                steps: [
                  { part: "a", reasoning: "Use $\\pi r^2h$.", working: "\\pi\\times9\\times10=90\\pi\\text{ m}^3", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "State the answer.", working: "90\\pi\\text{ m}^3", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Hemisphere is half a sphere: $\\frac{1}{2}\\times\\frac{4}{3}\\pi r^3$.", working: "\\frac{2}{3}\\pi\\times27=18\\pi\\text{ m}^3", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "State the answer.", working: "18\\pi\\text{ m}^3", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Add the volumes.", working: "90\\pi+18\\pi=108\\pi", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Evaluate.", working: "339.3\\text{ m}^3", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "Curved cylinder area $2\\pi rh=60\\pi$; curved hemisphere $2\\pi r^2=18\\pi$; base $\\pi r^2=9\\pi$.", working: "60\\pi+18\\pi+9\\pi=87\\pi", marks: 2, markCode: "M" },
                  { part: "d", reasoning: "Simplify.", working: "87\\pi\\text{ m}^2", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Evaluate.", working: "273.3\\text{ m}^2", marks: 1, markCode: "A" },
                ],
                finalAnswer: "(a) $90\\pi\\text{ m}^3$ (b) $18\\pi\\text{ m}^3$ (c) $339.3\\text{ m}^3$ (d) $273.3\\text{ m}^2$",
                commonErrors: ["Using the full sphere area for the hemisphere.", "Forgetting the flat base or double-counting the joining circle."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edm10-u6-solids-notes", title: "Areas and volumes of solids — notes",
      summary: "Prism volume = cross-section × length; cylinder V=πr²h; surface areas of cuboids and cylinders; composite solids.",
      sections: [
        { heading: "Key idea", body: "A cylinder is a circular prism: use $\\pi r^2$ for its cross-section and $2\\pi rh$ for its curved surface." },
        { heading: "Composite solids", body: "Add parts, subtract joining faces (twice) and removed parts; track which faces are hidden." },
        { heading: "Units", body: "$1\\text{ m}^3=1000\\text{ litres}$; keep $\\pi$ until the final step." },
      ],
    },
  },
  {
    file: "lesson-6-2.ts", exportName: "lesson62",
    lesson: {
      id: "edm10-u6-lesson-6-2", code: "6-2",
      title: "Coordinate Geometry",
      goal: "I CAN find midpoints, distances and gradients, and write the equation of a straight line, including parallel and perpendicular lines.",
      standards: ["4MA1 3.5H"],
      vocabulary: [
        { term: "Coordinates", definition: "The position of a point written as $(x,y)$." },
        { term: "Midpoint", definition: "The point halfway between two points: $\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$." },
        { term: "Distance", definition: "Length between two points, found with Pythagoras: $\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$." },
        { term: "Gradient", definition: "The steepness of a line: $m=\\frac{y_2-y_1}{x_2-x_1}$." },
        { term: "Parallel lines", definition: "Lines with the same gradient." },
        { term: "Perpendicular lines", definition: "Lines whose gradients multiply to $-1$ (negative reciprocals)." },
      ],
      concepts: [
        {
          id: "edm10-u6-midpoint-distance-gradient",
          title: "Midpoints, distances and gradients",
          skill: "Calculate the midpoint, length and gradient of a line segment joining two points.",
          sections: [
            { heading: "Midpoint", body: "The midpoint of $A(x_1,y_1)$ and $B(x_2,y_2)$ is $\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$ — average the $x$-coordinates and average the $y$-coordinates." },
            { heading: "Distance", body: "The horizontal and vertical changes between two points form a right-angled triangle, so Pythagoras gives the distance: $d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$. Keep the answer exact (surd) if it does not simplify to a whole number or simple decimal." },
            { heading: "Gradient", body: "Gradient $m=\\frac{\\text{change in }y}{\\text{change in }x}=\\frac{y_2-y_1}{x_2-x_1}$. It must be computed in the same order for both coordinates. A vertical line has undefined gradient; a horizontal line has gradient 0. Positive gradient rises left to right, negative falls." },
          ],
          keyFormulas: [
            { name: "Midpoint", statement: "$\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$" },
            { name: "Distance", statement: "$\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
            { name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$" },
          ],
          workedExample: {
            problem: "Find the midpoint and length of the line segment joining $A(1,2)$ and $B(7,10)$.",
            solution: "Midpoint: $\\left(\\frac{1+7}{2},\\frac{2+10}{2}\\right)=(4,6)$. Length: $\\sqrt{(7-1)^2+(10-2)^2}=\\sqrt{36+64}=\\sqrt{100}=10$.",
          },
          questions: [
            {
              id: "edm10-u6-midgrad-q1", difficulty: "core", tier: "higher", totalMarks: 1,
              stem: "What are the coordinates of the midpoint of the line segment joining $(2,4)$ and $(6,10)$?",
              response: { type: "mcq", choices: [
                { id: "a", text: "$(4,\\ 7)$" }, { id: "b", text: "$(8,\\ 14)$" }, { id: "c", text: "$(4,\\ 6)$" }, { id: "d", text: "$(3,\\ 5)$" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "formula", name: "Midpoint", statement: "Average the coordinates." }],
                steps: [{ reasoning: "$\\left(\\frac{2+6}{2},\\frac{4+10}{2}\\right)=(4,7)$.", working: "(4,\\ 7)", marks: 1, markCode: "B" }],
                finalAnswer: "**(a)** $(4,7)$",
                commonErrors: ["Adding coordinates without halving, giving $(8,14)$.", "Averaging incorrectly to get $(4,6)$."],
              },
            },
            {
              id: "edm10-u6-midgrad-q2", difficulty: "core", tier: "higher", totalMarks: 2,
              stem: "Calculate the distance between the points $(1,2)$ and $(4,6)$.",
              response: { type: "numeric", parts: [{ label: "Distance", answer: 5 }] },
              markscheme: {
                principles: [{ kind: "theorem", name: "Pythagoras", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$." }],
                steps: [
                  { reasoning: "Find the coordinate differences.", working: "\\Delta x=3,\\ \\Delta y=4", marks: 1, markCode: "M" },
                  { reasoning: "Apply Pythagoras.", working: "\\sqrt{9+16}=5", marks: 1, markCode: "A" },
                ],
                finalAnswer: "$5$",
                commonErrors: ["Adding the differences $3+4=7$.", "Squaring the sum instead of the squares."],
              },
            },
            {
              id: "edm10-u6-midgrad-q3", difficulty: "core", tier: "higher", totalMarks: 3,
              stem: "Find the gradient of the line that passes through the points $(2,3)$ and $(6,11)$.",
              response: { type: "numeric", parts: [{ label: "Gradient", answer: 2 }] },
              markscheme: {
                principles: [{ kind: "formula", name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$." }],
                steps: [
                  { reasoning: "Compute the differences in the same order.", working: "\\Delta y=11-3=8,\\ \\Delta x=6-2=4", marks: 1, markCode: "M" },
                  { reasoning: "Divide.", working: "m=\\frac{8}{4}", marks: 1, markCode: "M" },
                  { reasoning: "State the gradient.", working: "m=2", marks: 1, markCode: "A" },
                ],
                finalAnswer: "$2$",
                commonErrors: ["Reversing the ratio to get $\\frac{4}{8}=\\frac{1}{2}$.", "Subtracting coordinates in mixed order."],
              },
            },
            {
              id: "edm10-u6-midgrad-q4", difficulty: "challenge", tier: "higher", totalMarks: 4,
              stem: "The points $A(1,2)$ and $B(7,10)$ are joined by a straight line.",
              parts: [
                { label: "a", prompt: "Write down the coordinates of the midpoint of $AB$.", marks: 1 },
                { label: "b", prompt: "Find the gradient of $AB$.", marks: 2 },
                { label: "c", prompt: "Find the length of $AB$.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Midpoint", statement: "Average the coordinates." },
                  { kind: "formula", name: "Gradient and distance", statement: "$m=\\frac{\\Delta y}{\\Delta x}$; $d=\\sqrt{\\Delta x^2+\\Delta y^2}$." },
                ],
                steps: [
                  { part: "a", reasoning: "Average the coordinates.", working: "\\left(\\frac{1+7}{2},\\frac{2+10}{2}\\right)=(4,6)", marks: 1, markCode: "B" },
                  { part: "b", reasoning: "Compute $\\Delta y$ and $\\Delta x$.", working: "\\Delta y=8,\\ \\Delta x=6", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Divide.", working: "m=\\frac{8}{6}=\\frac{4}{3}", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Apply Pythagoras.", working: "\\sqrt{36+64}=10", marks: 1, markCode: "A" },
                ],
                finalAnswer: "(a) $(4,6)$ (b) $\\frac{4}{3}$ (c) $10$",
                commonErrors: ["In (b) giving $\\frac{6}{8}=\\frac{3}{4}$ (inverted gradient)."],
              },
            },
            {
              id: "edm10-u6-midgrad-q5", difficulty: "challenge", tier: "higher", totalMarks: 6,
              stem: "The points $C(-2,1)$ and $D(4,-7)$ are joined by a straight line.",
              parts: [
                { label: "a", prompt: "Find the coordinates of the midpoint of $CD$.", marks: 2 },
                { label: "b", prompt: "Find the gradient of $CD$.", marks: 2 },
                { label: "c", prompt: "Find the length of $CD$.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Midpoint", statement: "Average the coordinates." },
                  { kind: "formula", name: "Gradient and distance", statement: "$m=\\frac{\\Delta y}{\\Delta x}$; $d=\\sqrt{\\Delta x^2+\\Delta y^2}$." },
                ],
                steps: [
                  { part: "a", reasoning: "Average the coordinates.", working: "\\left(\\frac{-2+4}{2},\\frac{1+(-7)}{2}\\right)", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Evaluate.", working: "(1,\\ -3)", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Compute the differences: $\\Delta y=-7-1=-8$, $\\Delta x=4-(-2)=6$.", working: "m=\\frac{-8}{6}", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Simplify.", working: "m=-\\frac{4}{3}", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Apply Pythagoras: $\\sqrt{6^2+(-8)^2}=\\sqrt{100}$.", working: "\\sqrt{36+64}=10", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "State the length.", working: "10", marks: 1, markCode: "A" },
                ],
                finalAnswer: "(a) $(1,-3)$ (b) $-\\frac{4}{3}$ (c) $10$",
                commonErrors: ["Sign errors with the negative coordinates."],
              },
            },
            {
              id: "edm10-u6-midgrad-q6", difficulty: "challenge", tier: "higher", totalMarks: 10,
              stem: "Three points are $A(1,2)$, $B(5,6)$ and $C(9,2)$.",
              parts: [
                { label: "a", prompt: "Find the midpoint of $AB$ and the gradient of $AB$.", marks: 3 },
                { label: "b", prompt: "Find the equation of the line $BC$.", marks: 3 },
                { label: "c", prompt: "Show that $AB$ is perpendicular to $BC$.", marks: 2 },
                { label: "d", prompt: "Calculate the area of triangle $ABC$.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Midpoint and gradient", statement: "Average coordinates; $m=\\frac{\\Delta y}{\\Delta x}$." },
                  { kind: "formula", name: "Equation of a line", statement: "$y-y_1=m(x-x_1)$." },
                  { kind: "theorem", name: "Perpendicular gradients", statement: "$m_1m_2=-1$." },
                  { kind: "formula", name: "Triangle area", statement: "$A=\\frac12\\times\\text{base}\\times\\text{height}$." },
                ],
                steps: [
                  { part: "a", reasoning: "Midpoint of $AB$.", working: "\\left(\\frac{1+5}{2},\\frac{2+6}{2}\\right)=(3,4)", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Gradient of $AB$.", working: "m=\\frac{6-2}{5-1}=1", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "State both answers.", working: "(3,4),\\ m=1", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Gradient of $BC$: $\\frac{2-6}{9-5}=\\frac{-4}{4}=-1$.", working: "m=-1", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Use point $B(5,6)$: $y-6=-(x-5)$.", working: "y-6=-(x-5)", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Simplify and check with $C$.", working: "y=-x+11\\quad(9,2):\\ -9+11=2\\checkmark", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Multiply the gradients.", working: "1\\times(-1)=-1", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Conclude.", working: "AB\\perp BC", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "Take $AC$ as the base: it is horizontal with length $9-1=8$; the height is the vertical distance from $B$ to $y=2$, which is $6-2=4$.", working: "\\text{base}=8,\\ \\text{height}=4", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Compute the area.", working: "\\frac12\\times8\\times4=16", marks: 1, markCode: "A" },
                ],
                finalAnswer: "(a) $(3,4)$, $m=1$ (b) $y=-x+11$ (c) shown (d) $16$ square units",
                commonErrors: ["In (c) forgetting to compare gradients of both lines."],
                examinerNote: "Area can also be found as $\\frac12\\times AB\\times BC=\\frac12\\times\\sqrt{32}\\times\\sqrt{32}=16$."
              },
            },
          ],
        },
        {
          id: "edm10-u6-equations-of-lines",
          title: "Equations of lines",
          skill: "Write the equation of a straight line and use parallel and perpendicular gradient rules.",
          sections: [
            { heading: "Forms of the equation", body: "$y=mx+c$ gives gradient $m$ and $y$-intercept $c$. Given a point $(x_1,y_1)$ and gradient $m$, use $y-y_1=m(x-x_1)$. To find the equation through two points, first compute the gradient, then substitute one point to find $c$." },
            { heading: "Parallel and perpendicular lines", body: "Parallel lines have equal gradients. Perpendicular gradients are negative reciprocals: if $m_1m_2=-1$ the lines are perpendicular. A horizontal line ($m=0$) is perpendicular to a vertical line (undefined gradient)." },
            { heading: "Checking whether a point lies on a line", body: "Substitute the $x$-coordinate into the equation and see if the resulting $y$ matches. Alternatively check whether the gradient between the point and a known point on the line equals $m$." },
          ],
          keyFormulas: [
            { name: "Gradient-intercept form", statement: "$y=mx+c$" },
            { name: "Point-gradient form", statement: "$y-y_1=m(x-x_1)$" },
            { name: "Perpendicular condition", statement: "$m_1m_2=-1$" },
          ],
          workedExample: {
            problem: "Find the equation of the line through $(2,3)$ parallel to $y=4x-1$.",
            solution: "Parallel lines have the same gradient, $m=4$. Using $y-y_1=m(x-x_1)$: $y-3=4(x-2)$, so $y=4x-5$.",
          },
          questions: [
            {
              id: "edm10-u6-eqline-q1", difficulty: "core", tier: "higher", totalMarks: 1,
              stem: "What is the gradient of the line $y=3x-2$?",
              response: { type: "mcq", choices: [
                { id: "a", text: "$3$" }, { id: "b", text: "$-2$" }, { id: "c", text: "$\\frac{1}{3}$" }, { id: "d", text: "$x$" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "y = mx + c", statement: "$m$ is the gradient, $c$ the $y$-intercept." }],
                steps: [{ reasoning: "In $y=3x-2$ the coefficient of $x$ is 3.", working: "m=3", marks: 1, markCode: "B" }],
                finalAnswer: "**(a)** $3$",
                commonErrors: ["Answering $-2$ (that is the $y$-intercept)."],
              },
            },
            {
              id: "edm10-u6-eqline-q2", difficulty: "core", tier: "higher", totalMarks: 2,
              stem: "Write down the equation of the line that has gradient $2$ and passes through the point $(0,5)$.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "y = mx + c", statement: "Use the gradient and the $y$-intercept." }],
                steps: [
                  { reasoning: "The point $(0,5)$ gives $c=5$.", working: "c=5", marks: 1, markCode: "M" },
                  { reasoning: "Write the equation.", working: "y=2x+5", marks: 1, markCode: "A" },
                ],
                finalAnswer: "$y=2x+5$",
                commonErrors: ["Writing $y=2x-5$ (sign of intercept)."],
              },
            },
            {
              id: "edm10-u6-eqline-q3", difficulty: "core", tier: "higher", totalMarks: 3,
              stem: "Find the equation of the line that passes through $(2,3)$ and is parallel to $y=4x-1$.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "property", name: "Parallel lines", statement: "Parallel lines have equal gradients." },
                  { kind: "formula", name: "Point-gradient form", statement: "$y-y_1=m(x-x_1)$." },
                ],
                steps: [
                  { reasoning: "Parallel to $y=4x-1$ means $m=4$.", working: "m=4", marks: 1, markCode: "M" },
                  { reasoning: "Substitute the point into $y-y_1=m(x-x_1)$.", working: "y-3=4(x-2)", marks: 1, markCode: "M" },
                  { reasoning: "Expand and simplify.", working: "y=4x-5", marks: 1, markCode: "A" },
                ],
                finalAnswer: "$y=4x-5$",
                commonErrors: ["Using gradient $-\\frac{1}{4}$ (that is perpendicular, not parallel).", "Arithmetic slip expanding $4(x-2)$."],
              },
            },
            {
              id: "edm10-u6-eqline-q4", difficulty: "challenge", tier: "higher", totalMarks: 4,
              stem: "Find the equation of the line that passes through $(4,1)$ and is perpendicular to $y=2x+3$.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "property", name: "Perpendicular gradients", statement: "$m_1m_2=-1$, so the perpendicular gradient is $-\\frac{1}{2}$." },
                  { kind: "formula", name: "Point-gradient form", statement: "$y-y_1=m(x-x_1)$." },
                ],
                steps: [
                  { reasoning: "Find the negative reciprocal of 2.", working: "m=-\\frac{1}{2}", marks: 1, markCode: "M" },
                  { reasoning: "Substitute the point.", working: "y-1=-\\frac{1}{2}(x-4)", marks: 1, markCode: "M" },
                  { reasoning: "Expand.", working: "y=-\\frac{1}{2}x+2+1", marks: 1, markCode: "M" },
                  { reasoning: "Simplify.", working: "y=-\\frac{1}{2}x+3", marks: 1, markCode: "A" },
                ],
                finalAnswer: "$y=-\\frac{1}{2}x+3$",
                commonErrors: ["Using $m=-2$ instead of the negative reciprocal.", "Sign error when expanding $-\\frac{1}{2}(x-4)$."],
              },
            },
            {
              id: "edm10-u6-eqline-q5", difficulty: "challenge", tier: "higher", totalMarks: 6,
              stem: "A straight line passes through the points $(1,2)$ and $(5,10)$.",
              parts: [
                { label: "a", prompt: "Find the gradient of the line.", marks: 2 },
                { label: "b", prompt: "Find the equation of the line.", marks: 2 },
                { label: "c", prompt: "Determine whether the point $(7,13)$ lies on the line.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$." },
                  { kind: "formula", name: "Equation of a line", statement: "$y=mx+c$ or $y-y_1=m(x-x_1)$." },
                ],
                steps: [
                  { part: "a", reasoning: "Compute the differences.", working: "\\Delta y=8,\\ \\Delta x=4", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Divide.", working: "m=2", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Use $y-y_1=m(x-x_1)$ with $(1,2)$.", working: "y-2=2(x-1)", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Simplify.", working: "y=2x", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Substitute $x=7$.", working: "y=2(7)=14", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Compare with 13 and conclude.", working: "14\\neq13\\Rightarrow\\text{the point does not lie on the line}", marks: 1, markCode: "A" },
                ],
                finalAnswer: "(a) $m=2$ (b) $y=2x$ (c) No, $(7,13)$ is not on the line",
                commonErrors: ["In (c) checking the gradient from $(7,13)$ to only one of the given points."],
              },
            },
            {
              id: "edm10-u6-eqline-q6", difficulty: "challenge", tier: "higher", totalMarks: 10,
              stem: "Three points are $A(1,3)$, $B(5,11)$ and $C(9,9)$.",
              parts: [
                { label: "a", prompt: "Find the equation of the line $AB$.", marks: 3 },
                { label: "b", prompt: "Find the coordinates of the midpoint of $AB$.", marks: 2 },
                { label: "c", prompt: "Find the equation of the line $BC$.", marks: 3 },
                { label: "d", prompt: "Show that $AB$ is perpendicular to $BC$.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Gradient and equation", statement: "$m=\\frac{\\Delta y}{\\Delta x}$; $y-y_1=m(x-x_1)$." },
                  { kind: "theorem", name: "Perpendicular gradients", statement: "$m_1m_2=-1$." },
                ],
                steps: [
                  { part: "a", reasoning: "Gradient of $AB$: $\\frac{11-3}{5-1}=\\frac{8}{4}=2$.", working: "m=2", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Use point $A(1,3)$: $y-3=2(x-1)$.", working: "y-3=2(x-1)", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Simplify.", working: "y=2x+1", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Average the coordinates.", working: "\\left(\\frac{1+5}{2},\\frac{3+11}{2}\\right)=(3,7)", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "State the midpoint.", working: "(3,\\ 7)", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Gradient of $BC$: $\\frac{9-11}{9-5}=\\frac{-2}{4}=-\\frac{1}{2}$.", working: "m=-\\frac{1}{2}", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Use point $B(5,11)$: $y-11=-\\frac{1}{2}(x-5)$.", working: "y-11=-\\frac{1}{2}(x-5)", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Simplify: $y=-\\frac{1}{2}x+\\frac{5}{2}+11$.", working: "y=-\\frac{1}{2}x+13.5", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "Multiply the gradients.", working: "2\\times\\left(-\\frac{1}{2}\\right)=-1", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Conclude.", working: "AB\\perp BC", marks: 1, markCode: "A" },
                ],
                finalAnswer: "(a) $y=2x+1$ (b) $(3,7)$ (c) $y=-\\frac{1}{2}x+13.5$ (d) shown",
                commonErrors: ["In (c) using point $C$ and making a sign slip — any point on the line gives the same equation."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edm10-u6-coordgeom-notes", title: "Coordinate geometry — notes",
      summary: "Midpoint, distance and gradient formulas; equations of lines; parallel and perpendicular conditions.",
      sections: [
        { heading: "Key idea", body: "Gradient $m=\\frac{\\Delta y}{\\Delta x}$; keep the subtraction order consistent for both coordinates." },
        { heading: "Equations", body: "$y=mx+c$ or point-gradient form $y-y_1=m(x-x_1)$; find $c$ by substituting a known point." },
        { heading: "Perpendicular", body: "$m_1m_2=-1$; a horizontal line is perpendicular to a vertical line." },
      ],
    },
  },
  {
    file: "lesson-6-3.ts", exportName: "lesson63",
    lesson: {
      id: "edm10-u6-lesson-6-3", code: "6-3",
      title: "Similarity and Enlargement",
      goal: "I CAN work with similar shapes and enlargements, including scale factors for lengths, areas and volumes.",
      standards: ["4MA1 3.6", "4MA1 3.7H"],
      vocabulary: [
        { term: "Similar shapes", definition: "Shapes that are the same shape but different sizes: corresponding angles equal, corresponding sides proportional." },
        { term: "Scale factor", definition: "The ratio of a length in the image to the corresponding length in the original." },
        { term: "Enlargement", definition: "A transformation that multiplies all distances from a fixed centre by the scale factor." },
        { term: "Centre of enlargement", definition: "The fixed point that stays in the same position during an enlargement." },
        { term: "Area scale factor", definition: "The square of the length scale factor." },
        { term: "Volume scale factor", definition: "The cube of the length scale factor." },
      ],
      concepts: [
        {
          id: "edm10-u6-similar-shapes",
          title: "Similar shapes and enlargements",
          skill: "Find scale factors, corresponding lengths and describe enlargements.",
          sections: [
            { heading: "Similar shapes", body: "Two shapes are similar if corresponding angles are equal and corresponding sides are in the same ratio. The scale factor $k$ is found from any pair of corresponding sides: $k=\\frac{\\text{new length}}{\\text{old length}}$. To find a missing side, multiply or divide by $k$." },
            { heading: "Enlargements", body: "An enlargement has a centre and a scale factor. Each point maps to a point $k$ times as far from the centre in the same direction. With centre $(a,b)$, scale factor $k$ and point $(x,y)$, the image is $(a+k(x-a),\\ b+k(y-b))$. A negative scale factor gives an enlargement on the opposite side of the centre combined with a rotation of 180° about the centre (for a half-turn description at IGCSE level, describe it as enlargement with negative scale factor)." },
            { heading: "Finding the centre", body: "Given a shape and its image, the scale factor is the ratio of corresponding lengths. The centre lies at the intersection of lines joining corresponding vertices, or can be found by solving $(a+k(x-a),b+k(y-b))=(x',y')$ for one vertex." },
          ],
          keyFormulas: [
            { name: "Scale factor", statement: "$k=\\frac{\\text{image length}}{\\text{object length}}$" },
            { name: "Image under enlargement", statement: "$(x,y)\\mapsto(a+k(x-a),\\,b+k(y-b))$" },
            { name: "Centre from a point pair", statement: "Solve $x'=a+k(x-a)$ for $a$" },
          ],
          workedExample: {
            problem: "A triangle with vertices $(1,1)$, $(3,1)$, $(1,4)$ is enlarged with scale factor 2 and centre $(0,0)$. Find the image vertices.",
            solution: "Multiply each coordinate by 2: $(2,2)$, $(6,2)$, $(2,8)$.",
          },
          questions: [
            {
              id: "edm10-u6-similar-q1", difficulty: "foundation", tier: "foundation", totalMarks: 2,
              stem: "Two triangles are similar. The sides of the smaller triangle are $3\\text{ cm}$, $4\\text{ cm}$ and $5\\text{ cm}$. The corresponding shortest side of the larger triangle is $6\\text{ cm}$. What is the scale factor from the smaller to the larger triangle?",
              response: { type: "mcq", choices: [
                { id: "a", text: "$2$" }, { id: "b", text: "$3$" }, { id: "c", text: "$6$" }, { id: "d", text: "$\\frac{1}{2}$" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Scale factor", statement: "$k=\\frac{\\text{image}}{\\text{object}}$." }],
                steps: [
                  { reasoning: "Divide the corresponding sides.", working: "k=\\frac{6}{3}", marks: 1, markCode: "M" },
                  { reasoning: "Evaluate.", working: "k=2", marks: 1, markCode: "A" },
                ],
                finalAnswer: "**(a)** $2$",
                commonErrors: ["Dividing in the wrong order to get $\\frac{1}{2}$."],
              },
            },
            {
              id: "edm10-u6-similar-q2", difficulty: "foundation", tier: "foundation", totalMarks: 2,
              stem: "Two rectangles measure $4\\text{ cm} \\times 6\\text{ cm}$ and $10\\text{ cm} \\times 15\\text{ cm}$. Are they similar? If so, write down the scale factor from the smaller to the larger.",
              response: { type: "numeric", parts: [{ label: "Scale factor", answer: 2.5 }] },
              markscheme: {
                principles: [{ kind: "definition", name: "Similarity", statement: "Corresponding sides must be in the same ratio." }],
                steps: [
                  { reasoning: "Check both ratios: $\\frac{10}{4}=2.5$ and $\\frac{15}{6}=2.5$ — equal, so similar.", working: "\\frac{10}{4}=\\frac{15}{6}=2.5", marks: 1, markCode: "M" },
                  { reasoning: "State the scale factor.", working: "k=2.5", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Similar; $k=2.5$",
                commonErrors: ["Comparing $10$ with $6$ instead of corresponding sides."],
              },
            },
            {
              id: "edm10-u6-similar-q3", difficulty: "core", tier: "higher", totalMarks: 3,
              stem: "Two triangles are similar. The sides of the first triangle are $5\\text{ cm}$, $7\\text{ cm}$ and $9\\text{ cm}$. The two shorter sides of the second triangle are $15\\text{ cm}$ and $21\\text{ cm}$. Calculate the length of the third side of the second triangle.",
              response: { type: "numeric", parts: [{ label: "Third side", answer: 27, unit: "cm" }] },
              markscheme: {
                principles: [{ kind: "property", name: "Similar triangles", statement: "Corresponding sides are in the same ratio." }],
                steps: [
                  { reasoning: "Find the scale factor from a pair of corresponding sides.", working: "k=\\frac{15}{5}=3", marks: 1, markCode: "M" },
                  { reasoning: "Apply it to the third side: $9\\times3$.", working: "9\\times3=27", marks: 1, markCode: "M" },
                  { reasoning: "State the answer with units.", working: "27\\text{ cm}", marks: 1, markCode: "A" },
                ],
                finalAnswer: "$27\\text{ cm}$",
                commonErrors: ["Using $\\frac{21}{7}=3$ inconsistently or pairing the wrong sides."],
              },
            },
            {
              id: "edm10-u6-similar-q4", difficulty: "challenge", tier: "higher", totalMarks: 4,
              stem: "A triangle has vertices $A(1,1)$, $B(3,1)$ and $C(1,4)$. It is mapped onto a new triangle by an enlargement of scale factor $2$ with centre $(0,0)$.",
              parts: [
                { label: "a", prompt: "Write down the coordinates of the three image vertices.", marks: 3 },
                { label: "b", prompt: "Describe fully the single transformation that maps the triangle onto its image.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Enlargement", statement: "With centre $(0,0)$, multiply each coordinate by the scale factor." }],
                steps: [
                  { part: "a", reasoning: "Multiply each coordinate by 2.", working: "A'=(2,2),\\ B'=(6,2),\\ C'=(2,8)", marks: 2, markCode: "M" },
                  { part: "a", reasoning: "All three images correct.", working: "(2,2),(6,2),(2,8)", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "State the transformation.", working: "\\text{Enlargement, scale factor }2\\text{, centre }(0,0)", marks: 1, markCode: "B" },
                ],
                finalAnswer: "(a) $(2,2)$, $(6,2)$, $(2,8)$ (b) enlargement SF 2 centre $(0,0)$",
                commonErrors: ["Doubling only one coordinate."],
              },
            },
            {
              id: "edm10-u6-similar-q5", difficulty: "challenge", tier: "higher", totalMarks: 6,
              stem: "An enlargement has centre $(1,1)$ and scale factor $3$.",
              parts: [
                { label: "a", prompt: "Find the image of the point $P(2,3)$.", marks: 3 },
                { label: "b", prompt: "Find the image of the point $Q(0,1)$.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Enlargement formula", statement: "$(x,y)\\mapsto(a+k(x-a),\\,b+k(y-b))$." }],
                steps: [
                  { part: "a", reasoning: "Apply the formula with $a=1$, $b=1$, $k=3$, $(x,y)=(2,3)$.", working: "x'=1+3(2-1)=4,\\ y'=1+3(3-1)=7", marks: 2, markCode: "M" },
                  { part: "a", reasoning: "State the image.", working: "P'=(4,7)", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Apply the formula with $(x,y)=(0,1)$.", working: "x'=1+3(0-1)=-2,\\ y'=1+3(1-1)=1", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "State the image.", working: "Q'=(-2,1)", marks: 1, markCode: "A" },
                ],
                finalAnswer: "(a) $(4,7)$ (b) $(-2,1)$",
                commonErrors: ["Multiplying coordinates by 3 directly, ignoring the centre.", "Sign error in $1+3(0-1)$ giving 4 instead of $-2$."],
              },
            },
            {
              id: "edm10-u6-similar-q6", difficulty: "challenge", tier: "higher", totalMarks: 8,
              stem: "A triangle with vertices $(2,1)$, $(4,1)$ and $(2,3)$ is mapped onto a triangle with vertices $(6,4)$, $(10,4)$ and $(6,8)$ by an enlargement.",
              parts: [
                { label: "a", prompt: "Find the scale factor of the enlargement.", marks: 3 },
                { label: "b", prompt: "Find the centre of the enlargement.", marks: 4 },
                { label: "c", prompt: "Verify your centre using a second vertex.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Scale factor", statement: "$k=\\frac{\\text{image length}}{\\text{object length}}$." },
                  { kind: "method", name: "Finding the centre", statement: "Solve $x'=a+k(x-a)$ for $a$ using one vertex pair." },
                ],
                steps: [
                  { part: "a", reasoning: "Corresponding horizontal sides: $10-6=4$ and $4-2=2$.", working: "k=\\frac{4}{2}", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Evaluate.", working: "k=2", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "State the scale factor.", working: "k=2", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Use $(2,1)\\mapsto(6,4)$: $6=a+2(2-a)$.", working: "6=4-a", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Solve for $a$.", working: "a=-2", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Use the $y$-coordinates: $4=b+2(1-b)$.", working: "4=2-b\\Rightarrow b=-2", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "State the centre.", working: "(-2,\\ -2)", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Check $(4,1)\\mapsto(10,4)$: $-2+2(4-(-2))=-2+12=10$ and $-2+2(1-(-2))=4$. Correct.", working: "(-2)+2(4+2)=10,\\ (-2)+2(1+2)=4", marks: 1, markCode: "A" },
                ],
                finalAnswer: "(a) $k=2$ (b) centre $(-2,-2)$ (c) verified",
                commonErrors: ["Using $k=\\frac{1}{2}$ (object over image).", "Forgetting the centre coordinates appear in both equations."],
              },
            },
          ],
        },
        {
          id: "edm10-u6-scale-factors",
          title: "Area and volume scale factors",
          skill: "Use scale factors to relate lengths, areas and volumes of similar shapes.",
          sections: [
            { heading: "Lengths, areas and volumes", body: "If the length scale factor is $k$, then areas scale by $k^2$ and volumes by $k^3$. For example, doubling every length multiplies areas by 4 and volumes by 8." },
            { heading: "Working backwards", body: "Given an area or volume ratio, take the square root or cube root to find the length scale factor. If volumes are in ratio $27:8$, the length scale factor is $\\sqrt[3]{27}:\\sqrt[3]{8}=3:2$, and areas are in ratio $9:4$." },
            { heading: "Maps and models", body: "A map scale $1\\text{ cm}:5\\text{ km}$ means lengths multiply by 500000 in reality, so areas on the map multiply by $500000^2$ — in practice convert carefully: $1\\text{ cm}^2$ on the map represents $(5\\text{ km})^2=25\\text{ km}^2$. Similarly a model at scale $1:50$ has volumes $50^3=125000$ times smaller than the real object." },
          ],
          keyFormulas: [
            { name: "Area scale factor", statement: "$k^2$" },
            { name: "Volume scale factor", statement: "$k^3$" },
            { name: "Reverse", statement: "$k=\\sqrt{\\text{area ratio}}=\\sqrt[3]{\\text{volume ratio}}$" },
          ],
          workedExample: {
            problem: "Two similar solids have volumes in the ratio $8:1$. Find the ratio of their surface areas.",
            solution: "Length scale factor $=\\sqrt[3]{8}=2$. Area scale factor $=2^2=4$, so surface areas are in ratio $4:1$.",
          },
          questions: [
            {
              id: "edm10-u6-scalefac-q1", difficulty: "core", tier: "higher", totalMarks: 1,
              stem: "Two similar shapes have length scale factor $3$. What is the ratio of their areas?",
              response: { type: "mcq", choices: [
                { id: "a", text: "$3:1$" }, { id: "b", text: "$6:1$" }, { id: "c", text: "$9:1$" }, { id: "d", text: "$27:1$" },
              ], correctChoiceId: "c" },
              markscheme: {
                principles: [{ kind: "property", name: "Area scale factor", statement: "Areas scale by $k^2$." }],
                steps: [{ reasoning: "$3^2=9$.", working: "3^2=9", marks: 1, markCode: "B" }],
                finalAnswer: "**(c)** $9:1$",
                commonErrors: ["Answering $27:1$ (that is the volume factor)."],
              },
            },
            {
              id: "edm10-u6-scalefac-q2", difficulty: "core", tier: "higher", totalMarks: 2,
              stem: "Two similar solids have volumes in the ratio $8:1$. Find the length scale factor from the smaller to the larger solid.",
              response: { type: "numeric", parts: [{ label: "Length scale factor", answer: 2 }] },
              markscheme: {
                principles: [{ kind: "property", name: "Volume scale factor", statement: "Volumes scale by $k^3$, so $k=\\sqrt[3]{\\text{volume ratio}}$." }],
                steps: [
                  { reasoning: "Take the cube root of the volume ratio.", working: "k=\\sqrt[3]{8}", marks: 1, markCode: "M" },
                  { reasoning: "Evaluate.", working: "k=2", marks: 1, markCode: "A" },
                ],
                finalAnswer: "$2$",
                commonErrors: ["Using $\\sqrt{8}$ instead of $\\sqrt[3]{8}$."],
              },
            },
            {
              id: "edm10-u6-scalefac-q3", difficulty: "core", tier: "higher", totalMarks: 3,
              stem: "Two similar solids have volumes in the ratio $27:8$. Find the ratio of their surface areas, giving your answer in its simplest form.",
              response: { type: "numeric", parts: [{ label: "Area ratio", answer: 2.25 }] },
              markscheme: {
                principles: [{ kind: "property", name: "Scale factors", statement: "$k=\\sqrt[3]{\\text{volume ratio}}$; areas scale by $k^2$." }],
                steps: [
                  { reasoning: "Length scale factor.", working: "k=\\sqrt[3]{\\frac{27}{8}}=\\frac{3}{2}", marks: 1, markCode: "M" },
                  { reasoning: "Square it for areas.", working: "k^2=\\frac{9}{4}", marks: 1, markCode: "M" },
                  { reasoning: "State the ratio.", working: "9:4=2.25", marks: 1, markCode: "A" },
                ],
                finalAnswer: "$9:4$ (i.e. $2.25$)",
                commonErrors: ["Answering $27:8$ or $9:8$ instead of squaring $\\frac32$."],
              },
            },
            {
              id: "edm10-u6-scalefac-q4", difficulty: "challenge", tier: "higher", totalMarks: 5,
              stem: "A model car is made to a scale of $1:20$. The model is $24\\text{ cm}$ long and $15\\text{ cm}$ wide.",
              parts: [
                { label: "a", prompt: "Calculate the length of the real car, in metres.", marks: 3 },
                { label: "b", prompt: "Calculate the width of the real car, in metres.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Scale", statement: "Multiply model lengths by 20 to get real lengths; convert cm to m at the end." }],
                steps: [
                  { part: "a", reasoning: "Multiply by the scale factor.", working: "24\\times20=480\\text{ cm}", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Convert to metres.", working: "480\\text{ cm}=4.8\\text{ m}", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "State the answer.", working: "4.8\\text{ m}", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Multiply by 20.", working: "15\\times20=300\\text{ cm}", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Convert and state.", working: "3\\text{ m}", marks: 1, markCode: "A" },
                ],
                finalAnswer: "(a) $4.8\\text{ m}$ (b) $3\\text{ m}$",
                commonErrors: ["Forgetting to convert cm to m.", "Dividing by 20 instead of multiplying."],
              },
            },
            {
              id: "edm10-u6-scalefac-q5", difficulty: "challenge", tier: "higher", totalMarks: 6,
              stem: "Two similar solids have volumes $125\\text{ cm}^3$ and $64\\text{ cm}^3$. The height of the smaller solid is $8\\text{ cm}$.",
              parts: [
                { label: "a", prompt: "Find the length scale factor from the smaller to the larger solid.", marks: 2 },
                { label: "b", prompt: "Find the ratio of their surface areas.", marks: 2 },
                { label: "c", prompt: "Find the height of the larger solid.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "property", name: "Scale factors", statement: "$k=\\sqrt[3]{\\text{volume ratio}}$; areas scale by $k^2$." }],
                steps: [
                  { part: "a", reasoning: "Volume ratio $125:64$, take cube roots.", working: "k=\\frac{5}{4}=1.25", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "State the scale factor.", working: "1.25", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Square the length scale factor.", working: "\\left(\\frac{5}{4}\\right)^2=\\frac{25}{16}", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "State the ratio.", working: "25:16", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Multiply the height by $k$.", working: "8\\times\\frac{5}{4}", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Evaluate.", working: "10\\text{ cm}", marks: 1, markCode: "A" },
                ],
                finalAnswer: "(a) $\\frac{5}{4}$ (b) $25:16$ (c) $10\\text{ cm}$",
                commonErrors: ["Using $\\sqrt{\\frac{125}{64}}$ instead of the cube root."],
              },
            },
            {
              id: "edm10-u6-scalefac-q6", difficulty: "challenge", tier: "higher", totalMarks: 10,
              stem: "A map uses a scale of $1\\text{ cm}:5\\text{ km}$. A region on the map has area $12\\text{ cm}^2$.",
              parts: [
                { label: "a", prompt: "Write down the area scale factor from the map to the real region.", marks: 2 },
                { label: "b", prompt: "Calculate the real area of the region, in $\\text{km}^2$.", marks: 3 },
                { label: "c", prompt: "Two similar solids have volumes in the ratio $216:27$. Find the length scale factor.", marks: 2 },
                { label: "d", prompt: "For the solids in part (c), find the ratio of their surface areas.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "property", name: "Area scale factor", statement: "$1\\text{ cm}^2$ on the map $=25\\text{ km}^2$ real." },
                  { kind: "property", name: "Scale factors", statement: "$k=\\sqrt[3]{\\text{volume ratio}}$; areas scale by $k^2$." },
                ],
                steps: [
                  { part: "a", reasoning: "$1\\text{ cm}$ represents $5\\text{ km}$, so $1\\text{ cm}^2$ represents $25\\text{ km}^2$.", working: "25", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "State the factor.", working: "25", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Multiply the map area by 25.", working: "12\\times25=300", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "State the units.", working: "300\\text{ km}^2", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Justify: each linear dimension is multiplied by 5 km per cm, so areas by $5^2=25$.", working: "5^2=25\\Rightarrow 12\\times25", marks: 1, markCode: "R" },
                  { part: "c", reasoning: "Take cube roots of $216$ and $27$.", working: "k=\\frac{6}{3}=2", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "State the scale factor.", working: "k=2", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "Square the length scale factor.", working: "k^2=4", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "State the ratio.", working: "4:1", marks: 1, markCode: "A" },
                  { part: "d", reasoning: "Check: $216:27=8:1$ volumes, consistent with $k=2$." , working: "216\\div27=8=2^3", marks: 1, markCode: "R" },
                ],
                finalAnswer: "(a) $25$ (b) $300\\text{ km}^2$ (c) $k=2$ (d) $4:1$",
                commonErrors: ["Multiplying map area by 5 instead of 25.", "Answering $8:1$ (the volume ratio) for surface areas."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edm10-u6-similarity-notes", title: "Similarity and enlargement — notes",
      summary: "Scale factor k for lengths, k² for areas, k³ for volumes; enlargement formula and finding the centre.",
      sections: [
        { heading: "Key idea", body: "Length scale factor $k$ multiplies all lengths; areas scale by $k^2$, volumes by $k^3$." },
        { heading: "Enlargements", body: "Image $=(a+k(x-a),\\,b+k(y-b))$; the centre can be found by solving for $a$ and $b$ from one vertex pair." },
        { heading: "Maps and models", body: "Area scale = square of length scale; convert units carefully." },
      ],
    },
  },
];
