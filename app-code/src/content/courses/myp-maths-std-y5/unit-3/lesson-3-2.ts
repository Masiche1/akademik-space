import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "mypms5-u3-lesson-3-2",
  code: "3-2",
  title: "Mensuration and Similarity",
  goal: "I CAN calculate volumes and surface areas of 3D solids, use similarity ratios, and solve problems involving scale factors.",
  standards: [
    "MYP Maths: Geometry & Trigonometry",
    "Criterion A: Knowing and understanding",
    "Criterion C: Communicating",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "Surface area", definition: "Total area of all faces of a 3D solid." },
    { term: "Volume", definition: "Space occupied by a solid; for prisms: cross-sectional area × length." },
    { term: "Similarity", definition: "Same shape, different size; corresponding sides proportional, angles equal." },
    { term: "Scale factor", definition: "Ratio of corresponding lengths in similar figures; areas scale by $k^2$, volumes by $k^3$." },
    { term: "Frustum", definition: "The portion of a cone or pyramid remaining after the top is cut off parallel to the base." },
  ],
  concepts: [
    {
      id: "mypms5-u3-mensuration",
      title: "Volumes and surface areas",
      skill: "Calculate volumes and surface areas of prisms, cylinders, cones, spheres, and composite solids.",
      lesson: {
        sections: [
          {
            heading: "Standard formulas",
            body: "Prism: $V=\\text{area of cross-section}\\times\\text{length}$. Cylinder: $V=\\pi r^2 h$, $SA=2\\pi r^2+2\\pi rh$. Cone: $V=\\frac{1}{3}\\pi r^2 h$. Sphere: $V=\\frac{4}{3}\\pi r^3$, $SA=4\\pi r^2$. Pyramid: $V=\\frac{1}{3}\\times\\text{base area}\\times\\text{height}$.",
          },
          {
            heading: "Composite solids",
            body: "For combined shapes, split into known solids, calculate each volume/surface area, then add or subtract as needed. For surface area, be careful not to count internal faces.",
          },
          {
            heading: "Displacement method",
            body: "Volume of irregular object = volume of water displaced = final volume - initial volume. Measure water rise in a cylinder: $\\Delta V=\\pi r^2\\Delta h$.",
          },
        ],
        keyFormulas: [
          { name: "Cylinder volume", statement: "$V=\\pi r^2 h$" },
          { name: "Cone volume", statement: "$V=\\frac{1}{3}\\pi r^2 h$" },
          { name: "Sphere volume", statement: "$V=\\frac{4}{3}\\pi r^3$" },
          { name: "Prism volume", statement: "$V=\\text{cross-section area}\\times\\text{length}$" },
        ],
        workedExample: {
          problem: "A cylinder has radius 5 cm and height 12 cm. Find volume and curved surface area.",
          solution: "$V=\\pi(5^2)(12)=300\\pi\\approx942$ cm³; curved SA $=2\\pi(5)(12)=120\\pi\\approx377$ cm².",
        },
      },
      questions: [
        {
          id: "mypms5-u3-mens-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the volume of a cube with side 4 cm.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "48 cm³" },
              { id: "b", text: "64 cm³" },
              { id: "c", text: "32 cm³" },
              { id: "d", text: "16 cm³" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cube volume", statement: "$V=s^3=4^3=64$ cm³." },
            ],
            steps: [
              { reasoning: "$V=4^3=64$ cm³.", working: "64\\text{ cm}^3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 64 cm³",
            commonErrors: ["Computing surface area instead of volume."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms5-u3-mens-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cone has radius 3 cm and height 8 cm. Find its volume.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$72\\pi$ cm³" },
              { id: "b", text: "$24\\pi$ cm³" },
              { id: "c", text: "$8\\pi$ cm³" },
              { id: "d", text: "$216\\pi$ cm³" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cone volume", statement: "$V=\\frac{1}{3}\\pi(3^2)(8)=\\frac{1}{3}\\pi(72)=24\\pi$ cm³." },
            ],
            steps: [
              { reasoning: "$V=\\frac{1}{3}\\pi\\times9\\times8=24\\pi$ cm³.", working: "24\\pi", marks: 1, markCode: "M" },
              { reasoning: "State the volume.", working: "24\\pi\\text{ cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$24\\pi$ cm³",
            commonErrors: ["Forgetting the $\\frac{1}{3}$ factor."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms5-u3-mens-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A hemispherical bowl has radius 10 cm. Find its volume and total surface area (including base).",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{2000\\pi}{3}$ cm³ and $300\\pi$ cm²" },
              { id: "b", text: "$\\frac{4000\\pi}{3}$ cm³ and $200\\pi$ cm²" },
              { id: "c", text: "$2000\\pi$ cm³ and $300\\pi$ cm²" },
              { id: "d", text: "$\\frac{2000\\pi}{3}$ cm³ and $200\\pi$ cm²" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Hemisphere", statement: "Half sphere volume + base circle area." },
            ],
            steps: [
              { reasoning: "$V=\\frac{1}{2}\\times\\frac{4}{3}\\pi(10^3)=\\frac{2000\\pi}{3}$ cm³.", working: "\\frac{2000\\pi}{3}", marks: 1, markCode: "M" },
              { reasoning: "$SA=\\frac{1}{2}(4\\pi r^2)+\\pi r^2=2\\pi(100)+\\pi(100)=300\\pi$ cm².", working: "300\\pi", marks: 1, markCode: "M" },
              { reasoning: "State both.", working: "\\frac{2000\\pi}{3}\\text{ cm}^3,\\ 300\\pi\\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{2000\\pi}{3}$ cm³, $300\\pi$ cm²",
            commonErrors: ["Using full sphere surface area without adding base."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms5-u3-mens-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A metal cylinder (radius 4 cm, height 10 cm) is melted and recast into spheres of radius 2 cm.",
          parts: [
            { label: "a", prompt: "Find the volume of the cylinder.", marks: 1 },
            { label: "b", prompt: "Find the volume of one sphere.", marks: 1 },
            { label: "c", prompt: "Find the maximum number of spheres that can be made.", marks: 2 },
            { label: "d", prompt: "If the spheres are packed in a cubic box of side 12 cm, what percentage of the box volume is filled?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conservation of volume", statement: "Total volume preserved when recasting." },
            ],
            steps: [
              { part: "a", reasoning: "$V_{cyl}=\\pi(16)(10)=160\\pi\\approx502.7$ cm³.", working: "160\\pi", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$V_{sph}=\\frac{4}{3}\\pi(8)=\\frac{32\\pi}{3}\\approx33.5$ cm³.", working: "\\frac{32\\pi}{3}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$n=\\frac{160\\pi}{32\\pi/3}=160\\times\\frac{3}{32}=15$ spheres.", working: "15", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the number.", working: "15", marks: 1, markCode: "A" },
              { part: "d", reasoning: "15 spheres volume $=15\\times\\frac{32\\pi}{3}=160\\pi\\approx502.7$ cm³; box $=12^3=1728$ cm³.", working: "502.7\\text{ and }1728", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Percentage $=\\frac{502.7}{1728}\\times100\\approx29.1\\%$.", working: "29.1\\%", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Compute percentage.", working: "\\frac{160\\pi}{1728}\\times100", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the percentage.", working: "29.1\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $160\\pi$ cm³ (b) $\\frac{32\\pi}{3}$ cm³ (c) 15 (d) ~29.1%",
            commonErrors: ["In (c), rounding down instead of exact division."],
            examinerNote: "A1 for (a), A1 for (b), M1 A1 for (c), M1 M1 M1 A1 for (d).",
          },
        },
        { id: "mypms5-u3-mens-q5", difficulty: "foundation", totalMarks: 1, stem: "Which formula gives the volume of a cylinder?", response: { type: "mcq", choices: [ { id: "a", text: "$V=4\\pi r^3$" }, { id: "b", text: "$V=\\frac13\\pi r^2h$" }, { id: "c", text: "$V=\\pi r^2h$" }, { id: "d", text: "$V=2\\pi rh$" } ], correctChoiceId: "c" }, markscheme: { principles: [{ kind: "formula", name: "Cylinder volume", statement: "Base area times height." }], steps: [{ reasoning: "Choose $V=\\pi r^2h$.", working: "\\pi r^2h", marks: 1, markCode: "B" }], finalAnswer: "$V=\\pi r^2h$" } },
        { id: "mypms5-u3-mens-q6", difficulty: "foundation", totalMarks: 1, stem: "Find the surface area of a cube with side 3 cm.", response: { type: "numeric", parts: [{ label: "SA", answer: 54, unit: "cm²" }] }, markscheme: { principles: [{ kind: "formula", name: "Cube surface area", statement: "$SA=6s^2$." }], steps: [{ reasoning: "$6(3^2)=54$.", working: "54", marks: 1, markCode: "B" }], finalAnswer: "$54$ cm²" } },
        { id: "mypms5-u3-mens-q7", difficulty: "core", totalMarks: 2, stem: "A cone and cylinder have the same radius and height. What is the ratio of the cone's volume to the cylinder's?", response: { type: "mcq", choices: [ { id: "a", text: "$3:1$" }, { id: "b", text: "$1:9$" }, { id: "c", text: "$1:3$" }, { id: "d", text: "$1:1$" } ], correctChoiceId: "c" }, markscheme: { principles: [{ kind: "formula", name: "Cone vs cylinder", statement: "Cone volume is one third of cylinder." }], steps: [ { reasoning: "$V_{cone}=\\frac13\\pi r^2h$.", working: "\\frac13", marks: 1, markCode: "M" }, { reasoning: "Ratio is $1:3$.", working: "1:3", marks: 1, markCode: "A" } ], finalAnswer: "$1:3$" } },
        { id: "mypms5-u3-mens-q8", difficulty: "core", totalMarks: 2, stem: "Find the approximate volume of a sphere of radius 3 cm (use $\\pi\\approx3.14$).", response: { type: "numeric", parts: [{ label: "$V$", answer: 113.1, tolerance: 0.1, unit: "cm³" }] }, markscheme: { principles: [{ kind: "formula", name: "Sphere volume", statement: "$V=\\frac43\\pi r^3$." }], steps: [ { reasoning: "$\\frac43\\pi(27)=36\\pi\\approx113.1$.", working: "36\\pi", marks: 1, markCode: "M" }, { reasoning: "State the approximation.", working: "113.1", marks: 1, markCode: "A" } ], finalAnswer: "$\\approx113.1$ cm³" } },
        { id: "mypms5-u3-mens-q9", difficulty: "core", totalMarks: 2, stem: "Find the volume of a cylinder with radius 2 cm and height 5 cm, in terms of $\\pi$.", response: { type: "mcq", choices: [ { id: "a", text: "$20\\pi$ cm³" }, { id: "b", text: "$4\\pi$ cm³" }, { id: "c", text: "$10\\pi$ cm³" }, { id: "d", text: "$40\\pi$ cm³" } ], correctChoiceId: "a" }, markscheme: { principles: [{ kind: "formula", name: "Cylinder volume", statement: "$V=\\pi(4)(5)=20\\pi$." }], steps: [ { reasoning: "Compute $r^2h=4\\times5=20$.", working: "20", marks: 1, markCode: "M" }, { reasoning: "State the volume.", working: "20\\pi", marks: 1, markCode: "A" } ], finalAnswer: "$20\\pi$ cm³" } },
        { id: "mypms5-u3-mens-q10", difficulty: "challenge", totalMarks: 3, stem: "A prism has a triangular cross-section of area 12 cm² and length 9 cm. What is its volume?", response: { type: "numeric", parts: [{ label: "$V$", answer: 108, unit: "cm³" }] }, markscheme: { principles: [{ kind: "formula", name: "Prism volume", statement: "$V=\\text{cross-section area}\\times\\text{length}$." }], steps: [ { reasoning: "Multiply area by length.", working: "12\\times9", marks: 1, markCode: "M" }, { reasoning: "$V=108$ cm³.", working: "108", marks: 1, markCode: "M" }, { reasoning: "State the volume.", working: "108", marks: 1, markCode: "A" } ], finalAnswer: "$108$ cm³" } },
        { id: "mypms5-u3-mens-q11", difficulty: "challenge", totalMarks: 3, stem: "Water is poured into a cylindrical container of radius 5 cm and the level rises by 2 cm. Find the volume of water added, in terms of $\\pi$.", response: { type: "mcq", choices: [ { id: "a", text: "$100\\pi$ cm³" }, { id: "b", text: "$50\\pi$ cm³" }, { id: "c", text: "$10\\pi$ cm³" }, { id: "d", text: "$25\\pi$ cm³" } ], correctChoiceId: "b" }, markscheme: { principles: [{ kind: "formula", name: "Displacement", statement: "$\\Delta V=\\pi r^2\\Delta h$." }], steps: [ { reasoning: "Compute $\\pi(25)(2)$.", working: "50\\pi", marks: 1, markCode: "M" }, { reasoning: "State the volume.", working: "50\\pi", marks: 1, markCode: "M" }, { reasoning: "Confirm units cm³.", working: "cm^3", marks: 1, markCode: "A" } ], finalAnswer: "$50\\pi$ cm³" } },
        { id: "mypms5-u3-mens-q12", difficulty: "core", totalMarks: 5, stem: "Calculate volumes and surface areas.", parts: [ { label: "a", prompt: "Find the volume of a sphere of radius 6 cm in terms of $\\pi$.", marks: 2 }, { label: "b", prompt: "Find the curved surface area of a cylinder radius 3 cm height 8 cm.", marks: 2 }, { label: "c", prompt: "State which formula you used for the cylinder.", marks: 1 } ], response: { type: "open" }, markscheme: { principles: [{ kind: "formula", name: "Mensuration", statement: "Use standard volume and surface area formulas." }], steps: [ { part: "a", reasoning: "$V=\\frac43\\pi(216)=288\\pi$.", working: "288\\pi", marks: 1, markCode: "M" }, { part: "a", reasoning: "State the volume.", working: "288\\pi", marks: 1, markCode: "A" }, { part: "b", reasoning: "Curved SA $=2\\pi(3)(8)=48\\pi$.", working: "48\\pi", marks: 1, markCode: "M" }, { part: "b", reasoning: "State the area.", working: "48\\pi", marks: 1, markCode: "A" }, { part: "c", reasoning: "Used $2\\pi rh$ for curved surface area.", working: "2\\pi rh", marks: 1, markCode: "A" } ], finalAnswer: "(a) $288\\pi$ cm³ (b) $48\\pi$ cm² (c) $2\\pi rh$" } },
        { id: "mypms5-u3-mens-q13", difficulty: "foundation", totalMarks: 1, stem: "Find the volume of a rectangular prism measuring 3 cm by 4 cm by 5 cm.", response: { type: "numeric", parts: [{ label: "$V$", answer: 60, unit: "cm³" }] }, markscheme: { principles: [{ kind: "formula", name: "Rectangular prism", statement: "$V=lwh$." }], steps: [{ reasoning: "$3\\times4\\times5=60$.", working: "60", marks: 1, markCode: "B" }], finalAnswer: "$60$ cm³" } },
        { id: "mypms5-u3-mens-q14", difficulty: "core", totalMarks: 2, stem: "Which formula gives the volume of a pyramid?", response: { type: "mcq", choices: [ { id: "a", text: "$\\frac13\\times\\text{base area}\\times\\text{height}$" }, { id: "b", text: "$4\\pi r^2$" }, { id: "c", text: "$\\text{base area}\\times\\text{height}$" }, { id: "d", text: "$\\frac12\\times\\text{base}\\times\\text{height}$" } ], correctChoiceId: "a" }, markscheme: { principles: [{ kind: "formula", name: "Pyramid volume", statement: "One third of prism with same base and height." }], steps: [ { reasoning: "Pyramid volume is one third of base×height.", working: "\\frac13bh", marks: 1, markCode: "M" }, { reasoning: "State the formula.", working: "\\frac13", marks: 1, markCode: "A" } ], finalAnswer: "$\\frac13\\times\\text{base area}\\times\\text{height}$" } },
        { id: "mypms5-u3-mens-q15", difficulty: "core", totalMarks: 2, stem: "Find the approximate volume of a cone with radius 3 cm and height 9 cm (use $\\pi\\approx3.14$).", response: { type: "numeric", parts: [{ label: "$V$", answer: 84.82, tolerance: 0.1, unit: "cm³" }] }, markscheme: { principles: [{ kind: "formula", name: "Cone volume", statement: "$V=\\frac13\\pi r^2h$." }], steps: [ { reasoning: "$\\frac13\\pi(9)(9)=27\\pi\\approx84.82$.", working: "27\\pi", marks: 1, markCode: "M" }, { reasoning: "State the approximation.", working: "84.82", marks: 1, markCode: "A" } ], finalAnswer: "$\\approx84.82$ cm³" } },
        { id: "mypms5-u3-mens-q16", difficulty: "challenge", totalMarks: 3, stem: "Explain how the displacement method finds the volume of an irregular object, and why the container must be cylindrical for a simple calculation.", response: { type: "open" }, markscheme: { principles: [{ kind: "principle", name: "Displacement", statement: "Volume equals water displaced." }], steps: [ { reasoning: "Measure water rise before and after immersion.", working: "\\Delta h", marks: 1, markCode: "M" }, { reasoning: "For a cylinder, $\\Delta V=\\pi r^2\\Delta h$.", working: "\\pi r^2\\Delta h", marks: 1, markCode: "M" }, { reasoning: "State why a cylinder simplifies it.", working: "\\text{constant cross-section}", marks: 1, markCode: "A" } ], finalAnswer: "$\\Delta V=\\pi r^2\\Delta h$" } },
      ],
    },
    {
      id: "mypms5-u3-similarity",
      title: "Similarity and Transformations",
      skill: "Use similarity ratios for lengths, areas, and volumes; apply transformations and tessellations.",
      lesson: {
        sections: [
          {
            heading: "Similarity ratios",
            body: "For similar figures with scale factor $k$: corresponding lengths $\\times k$; areas $\\times k^2$; volumes $\\times k^3$. Use to find unknown lengths or scale factors from areas/volumes.",
          },
          {
            heading: "Transformations",
            body: "**Translation**: slide. **Reflection**: mirror in a line. **Rotation**: turn about a point. **Enlargement**: scale by factor $k$ from a centre. Composite transformations combine these.",
          },
          {
            heading: "Tessellations",
            body: "A tessellation tiles a plane with no gaps or overlaps. Regular tessellations use one regular polygon: triangles (60°), squares (90°), hexagons (120°). For any polygon to tessellate, interior angles must divide 360°.",
          },
        ],
        keyFormulas: [
          { name: "Length ratio", statement: "$k$" },
          { name: "Area ratio", statement: "$k^2$" },
          { name: "Volume ratio", statement: "$k^3$" },
          { name: "Tessellation condition", statement: "Interior angles sum at vertex = 360°" },
        ],
        workedExample: {
          problem: "Two similar triangles have areas 9 cm² and 36 cm². Find the ratio of corresponding sides.",
          solution: "Area ratio = 4 = $k^2$ → $k=2$; sides ratio 1:2.",
        },
      },
      questions: [
        {
          id: "mypms5-u3-sim-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two similar shapes have scale factor 3. What is the ratio of their volumes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9:1" },
              { id: "b", text: "3:1" },
              { id: "c", text: "6:1" },
              { id: "d", text: "27:1" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume ratio", statement: "Volumes scale by $k^3=3^3=27$." },
            ],
            steps: [
              { reasoning: "$k^3=27$ → ratio 27:1.", working: "27:1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** 27:1",
            commonErrors: ["Using $k^2$ for volumes."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms5-u3-sim-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A model car is 1:24 scale. The real car is 4.8 m long. How long is the model?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2 cm" },
              { id: "b", text: "20 cm" },
              { id: "c", text: "200 cm" },
              { id: "d", text: "24 cm" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Scale", statement: "Model length = $\\frac{480}{24}=20$ cm." },
            ],
            steps: [
              { reasoning: "$4.8\\text{ m}=480\\text{ cm}$; $480/24=20$ cm.", working: "20\\text{ cm}", marks: 1, markCode: "M" },
              { reasoning: "State the length.", working: "20\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 cm",
            commonErrors: ["Forgetting to convert metres to centimetres."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms5-u3-sim-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which regular polygons can tessellate on their own?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Triangle and square only" },
              { id: "b", text: "Square and pentagon" },
              { id: "c", text: "Triangle, square, hexagon" },
              { id: "d", text: "All regular polygons" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Tessellation", statement: "Interior angle must divide 360°: 60°(6), 90°(4), 120°(3) work; 108°(pentagon) does not." },
            ],
            steps: [
              { reasoning: "Triangle 60° (360/60=6), square 90° (4), hexagon 120° (3); pentagon 108° doesn't divide 360.", working: "60,90,120", marks: 1, markCode: "M" },
              { reasoning: "Check which angles divide 360 evenly.", working: "\\text{divisors}", marks: 1, markCode: "M" },
              { reasoning: "Only triangle, square, hexagon tessellate alone.", working: "\\text{3 shapes}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Triangle, square, hexagon",
            commonErrors: ["Thinking pentagon works because it's 'regular'."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms5-u3-sim-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two similar cones have heights 10 cm and 25 cm. The smaller has volume $500\\pi$ cm³.",
          parts: [
            { label: "a", prompt: "Find the scale factor between the cones.", marks: 1 },
            { label: "b", prompt: "Find the volume of the larger cone.", marks: 2 },
            { label: "c", prompt: "Find the radius of the smaller cone.", marks: 2 },
            { label: "d", prompt: "A sphere is inscribed in the smaller cone. Find the maximum possible radius of the sphere.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Similarity", statement: "Lengths $\\times k$, volumes $\\times k^3$." },
            ],
            steps: [
              { part: "a", reasoning: "$k=\\frac{25}{10}=2.5$.", working: "2.5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$V_{large}=500\\pi\\times2.5^3=500\\pi\\times15.625=7812.5\\pi$ cm³.", working: "7812.5\\pi", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the volume.", working: "7812.5\\pi\\text{ cm}^3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$500\\pi=\\frac{1}{3}\\pi r^2(10)$ → $r^2=150$ → $r=\\sqrt{150}=5\\sqrt{6}$ cm.", working: "5\\sqrt{6}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve for radius.", working: "r=5\\sqrt{6}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "For a cone, the inscribed-sphere radius is $r_{sph}=\\frac{rh}{r+l}$ where $l=\\sqrt{r^2+h^2}$ is the slant height. Here $l=\\sqrt{150+100}=\\sqrt{250}=5\\sqrt{10}$, so $r_{sph}=\\frac{5\\sqrt{6}\\times10}{5\\sqrt{6}+5\\sqrt{10}}=\\frac{10\\sqrt{6}}{\\sqrt{6}+\\sqrt{10}}$.", working: "r_{sph}=\\frac{10\\sqrt{6}}{\\sqrt{6}+\\sqrt{10}}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Simplify: $\\approx\\frac{24.5}{2.45+3.16}=\\frac{24.5}{5.61}\\approx4.37$ cm.", working: "4.37\\text{ cm}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the radius.", working: "4.37\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2.5 (b) $7812.5\\pi$ cm³ (c) $5\\sqrt{6}$ cm (d) ~4.37 cm",
            commonErrors: ["In (b), multiplying volume by 2.5 instead of $2.5^3$."],
            examinerNote: "A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 M1 A1 for (d).",
          },
        },
        { id: "mypms5-u3-sim-q5", difficulty: "foundation", totalMarks: 1, stem: "Two similar shapes have a length scale factor of 2. What is the area scale factor?", response: { type: "mcq", choices: [ { id: "a", text: "4" }, { id: "b", text: "8" }, { id: "c", text: "2" }, { id: "d", text: "16" } ], correctChoiceId: "a" }, markscheme: { principles: [{ kind: "formula", name: "Area scale", statement: "Area scales by $k^2$." }], steps: [{ reasoning: "$2^2=4$.", working: "4", marks: 1, markCode: "B" }], finalAnswer: "4" } },
        { id: "mypms5-u3-sim-q6", difficulty: "foundation", totalMarks: 1, stem: "Similar triangles have sides 3, 4, 5 and 6, 8, x. Find x.", response: { type: "numeric", parts: [{ label: "$x$", answer: 10 }] }, markscheme: { principles: [{ kind: "formula", name: "Length scale", statement: "Corresponding sides are proportional." }], steps: [{ reasoning: "$6/3=2$, so $x=5\\times2=10$.", working: "10", marks: 1, markCode: "B" }], finalAnswer: "$10$" } },
        { id: "mypms5-u3-sim-q7", difficulty: "core", totalMarks: 1, stem: "If the length scale factor is 3, what is the volume scale factor?", response: { type: "mcq", choices: [ { id: "a", text: "81" }, { id: "b", text: "27" }, { id: "c", text: "9" }, { id: "d", text: "3" } ], correctChoiceId: "b" }, markscheme: { principles: [{ kind: "formula", name: "Volume scale", statement: "Volume scales by $k^3$." }], steps: [{ reasoning: "$3^3=27$.", working: "27", marks: 1, markCode: "B" }], finalAnswer: "27" } },
        { id: "mypms5-u3-sim-q8", difficulty: "core", totalMarks: 1, stem: "Similar triangles have sides 5, 7, 9 and corresponding sides 10, 14, x. Find x.", response: { type: "numeric", parts: [{ label: "$x$", answer: 18 }] }, markscheme: { principles: [{ kind: "formula", name: "Length scale", statement: "Scale factor $=10/5=2$." }], steps: [{ reasoning: "$x=9\\times2=18$.", working: "18", marks: 1, markCode: "B" }], finalAnswer: "$18$" } },
        { id: "mypms5-u3-sim-q9", difficulty: "core", totalMarks: 2, stem: "Which statement is always true for two similar triangles?", response: { type: "mcq", choices: [ { id: "a", text: "Perimeters are equal" }, { id: "b", text: "Corresponding angles are equal" }, { id: "c", text: "Corresponding sides are equal" }, { id: "d", text: "Areas are equal" } ], correctChoiceId: "b" }, markscheme: { principles: [{ kind: "definition", name: "Similarity", statement: "Same shape: angles equal, sides proportional." }], steps: [ { reasoning: "Similarity preserves angles.", working: "\\text{angles equal}", marks: 1, markCode: "M" }, { reasoning: "Sides are proportional, not necessarily equal.", working: "\\text{proportional}", marks: 1, markCode: "A" } ], finalAnswer: "Corresponding angles are equal" } },
        { id: "mypms5-u3-sim-q10", difficulty: "core", totalMarks: 2, stem: "Two similar cubes have edges 4 cm and 6 cm. Find the ratio of the larger volume to the smaller volume.", response: { type: "numeric", parts: [{ label: "ratio", answer: 3.375 }] }, markscheme: { principles: [{ kind: "formula", name: "Volume scale", statement: "$k=6/4=1.5$, volume factor $=1.5^3=3.375$." }], steps: [ { reasoning: "Compute $(1.5)^3$.", working: "3.375", marks: 1, markCode: "M" }, { reasoning: "State the ratio.", working: "3.375", marks: 1, markCode: "A" } ], finalAnswer: "3.375" } },
        { id: "mypms5-u3-sim-q11", difficulty: "challenge", totalMarks: 2, stem: "On a map with scale 1:5000, a road is 8 cm long. What is the real length in metres?", response: { type: "numeric", parts: [{ label: "real length", answer: 400, unit: "m" }] }, markscheme: { principles: [{ kind: "formula", name: "Scale", statement: "$8\\text{ cm}\\times5000=40000\\text{ cm}=400\\text{ m}$." }], steps: [ { reasoning: "Multiply by scale factor.", working: "8\\times5000", marks: 1, markCode: "M" }, { reasoning: "Convert cm to m: 400 m.", working: "400", marks: 1, markCode: "A" } ], finalAnswer: "$400$ m" } },
        { id: "mypms5-u3-sim-q12", difficulty: "core", totalMarks: 1, stem: "A photo is enlarged so its width changes from 12 cm to 18 cm. If the original height is 8 cm, find the new height.", response: { type: "numeric", parts: [{ label: "new height", answer: 12, unit: "cm" }] }, markscheme: { principles: [{ kind: "formula", name: "Enlargement", statement: "Scale factor $18/12=1.5$." }], steps: [{ reasoning: "$8\\times1.5=12$.", working: "12", marks: 1, markCode: "B" }], finalAnswer: "$12$ cm" } },
        { id: "mypms5-u3-sim-q13", difficulty: "core", totalMarks: 5, stem: "Use similarity to solve problems.", parts: [ { label: "a", prompt: "Find the scale factor from lengths 4 cm and 10 cm.", marks: 1 }, { label: "b", prompt: "Find the area scale factor for that scale factor.", marks: 2 }, { label: "c", prompt: "If the smaller area is 20 cm², find the larger area.", marks: 2 } ], response: { type: "open" }, markscheme: { principles: [{ kind: "formula", name: "Similarity", statement: "Lengths scale by $k$, areas by $k^2$, volumes by $k^3$." }], steps: [ { part: "a", reasoning: "$k=10/4=2.5$.", working: "2.5", marks: 1, markCode: "A" }, { part: "b", reasoning: "Area factor $=2.5^2=6.25$.", working: "6.25", marks: 1, markCode: "M" }, { part: "b", reasoning: "State the factor.", working: "6.25", marks: 1, markCode: "A" }, { part: "c", reasoning: "$20\\times6.25=125$.", working: "125", marks: 1, markCode: "M" }, { part: "c", reasoning: "State the area.", working: "125", marks: 1, markCode: "A" } ], finalAnswer: "(a) 2.5 (b) 6.25 (c) 125 cm²" } },
        { id: "mypms5-u3-sim-q14", difficulty: "foundation", totalMarks: 1, stem: "A triangle similar to one with angles 40° and 60° has a third angle of what measure?", response: { type: "numeric", parts: [{ label: "angle", answer: 80, unit: "degrees" }] }, markscheme: { principles: [{ kind: "theorem", name: "Angle sum", statement: "Third angle $=180-40-60=80$." }], steps: [{ reasoning: "Corresponding angles are equal; third angle is 80°.", working: "80", marks: 1, markCode: "B" }], finalAnswer: "$80°$" } },
        { id: "mypms5-u3-sim-q15", difficulty: "challenge", totalMarks: 2, stem: "Two similar shapes have areas in the ratio 9:4. What is the ratio of corresponding lengths?", response: { type: "mcq", choices: [ { id: "a", text: "1:2" }, { id: "b", text: "81:16" }, { id: "c", text: "9:4" }, { id: "d", text: "3:2" } ], correctChoiceId: "d" }, markscheme: { principles: [{ kind: "formula", name: "Area to length", statement: "Length ratio is square root of area ratio." }], steps: [ { reasoning: "$\\sqrt{9/4}=3/2$.", working: "3/2", marks: 1, markCode: "M" }, { reasoning: "State the ratio.", working: "3:2", marks: 1, markCode: "A" } ], finalAnswer: "$3:2$" } },
        { id: "mypms5-u3-sim-q16", difficulty: "challenge", totalMarks: 3, stem: "Explain how similar triangles can be used to estimate the height of a tall object using shadows.", response: { type: "open" }, markscheme: { principles: [{ kind: "principle", name: "Shadow method", statement: "Sun creates similar right triangles." }], steps: [ { reasoning: "Measure the object's shadow and a known object's shadow.", working: "\\text{shadows}", marks: 1, markCode: "M" }, { reasoning: "Form a proportion using corresponding sides.", working: "\\frac{h}{\\text{shadow}}", marks: 1, markCode: "M" }, { reasoning: "Solve for the unknown height.", working: "\\text{height}", marks: 1, markCode: "A" } ], finalAnswer: "Use proportional corresponding sides" } },
      ],
    },
  ],
};
