import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "olm-u5-lesson-5-2",
  code: "5-2",
  title: "Volume and Surface Area",
  goal: "I CAN calculate volumes and surface areas of 3D solids.",
  standards: ["4024: mensuration"],
  vocabulary: [
    { term: "Volume", definition: "Space occupied by 3D solid, in cubic units." },
    { term: "Surface area", definition: "Total area of all faces." },
    { term: "Prism", definition: "Solid with constant cross-section." },
    { term: "Cylinder", definition: "Prism with circular cross-section." },
  ],
  concepts: [
    {
      id: "olm-u5-s2-prism",
      title: "Prisms and cylinders",
      skill: "Calculate volumes and surface areas of prisms and cylinders at O Level.",
      lesson: {
        sections: [
          { heading: "Prism volume", body: "Any prism's volume is cross-sectional area × length: $V=Ah$. For a cuboid $V=lwh$; triangular prism $V=\\frac12bh\\times\\text{length}$. This works for any uniform cross-section — the shape of the end face doesn't matter as long as it's constant." },
          { heading: "Cylinder", body: "A cylinder is a circular prism: $V=\\pi r^2h$. Curved surface area $=2\\pi rh$ (unrolls to a rectangle); total surface area $=2\\pi r^2+2\\pi rh=2\\pi r(r+h)$. For hollow cylinders subtract inner volume/surface. Density problems use $\\text{density}=\\frac{\\text{mass}}{\\text{volume}}$ — find volume from dimensions then density, or find missing dimension from mass and density." },
        ],
        keyFormulas: [
          { name: "Prism", statement: "$V=\\text{cross-section area}\\times h$" },
          { name: "Cylinder", statement: "$V=\\pi r^2h$; $SA=2\\pi r(r+h)$" },
        ],
        workedExample: { problem: "Find the volume of a cylinder radius 3 cm, height 10 cm.", solution: "$V=\\pi\\times9\\times10=90\\pi\\approx282.7$ cm³." },
      },
      questions: [
        {
          id: "olm-u5-s2-pr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The volume of a cuboid 4×3×2 is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "9 cubic units" },
            { id: "b", text: "24 square units" },
            { id: "c", text: "14 cubic units" },
            { id: "d", text: "24 cubic units" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Cuboid", statement: "$lwh$." }], steps: [{ reasoning: "$4\\times3\\times2=24$.", marks: 1, markCode: "A" }], finalAnswer: "24" },
        },
        {
          id: "olm-u5-s2-pr-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the volume of a triangular prism with cross-section area 15 cm² and length 8 cm.",
          response: { type: "numeric", parts: [{ label: "a", answer: 120 }] },
          markscheme: { principles: [{ kind: "formula", name: "Prism", statement: "A × length." }], steps: [
            { reasoning: "$V=15\\times8=120$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 120 cm³.", marks: 1, markCode: "A" },
          ], finalAnswer: "120 cm³" },
        },
        {
          id: "olm-u5-s2-pr-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the volume of a cylinder radius 7 cm, height 4 cm. Leave in terms of $\\pi$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Cylinder volume", statement: "$\\pi r^2h$." }], steps: [
            { reasoning: "$V=\\pi\\times49\\times4=196\\pi$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $196\\pi$ cm³ ($\\approx615.8$).", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$196\\pi$ cm³" },
        },
        {
          id: "olm-u5-s2-pr-q4", difficulty: "core", totalMarks: 4,
          stem: "A metal block has mass 240 g and density 8 g/cm³. Find its volume.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Density", statement: "$\\rho=m/V$." }], steps: [
            { reasoning: "$V=\\frac{m}{\\rho}=\\frac{240}{8}=30$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 30 cm³.", marks: 1, markCode: "M" },
            { reasoning: "Check: $8\\times30=240$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "30 cm³" },
        },
        {
          id: "olm-u5-s2-pr-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The volume of a cylinder is given by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\pi r h$" },
            { id: "b", text: "$\\pi r^2h$" },
            { id: "c", text: "$2\\pi rh$" },
            { id: "d", text: "$\\frac13\\pi r^2h$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Cylinder", statement: "$\\pi r^2h$." }], steps: [{ reasoning: "Standard formula.", marks: 1, markCode: "A" }], finalAnswer: "$\\pi r^2h$" },
        },
        {
          id: "olm-u5-s2-pr-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the volume of a cuboid 5 cm by 4 cm by 3 cm.",
          response: { type: "numeric", parts: [{ label: "a", answer: 60, unit: "cm³" }] },
          markscheme: { principles: [{ kind: "formula", name: "Cuboid", statement: "$lwh$." }], steps: [
            { reasoning: "$V=5\\times4\\times3=60$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 60 cm³.", marks: 1, markCode: "A" },
          ], finalAnswer: "60 cm³" },
        },
        {
          id: "olm-u5-s2-pr-q7", difficulty: "foundation", totalMarks: 2,
          stem: "A triangular prism has cross-sectional area 20 cm² and length 6 cm. Find its volume.",
          response: { type: "numeric", parts: [{ label: "a", answer: 120, unit: "cm³" }] },
          markscheme: { principles: [{ kind: "formula", name: "Prism", statement: "Area × length." }], steps: [
            { reasoning: "$V=20\\times6=120$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 120 cm³.", marks: 1, markCode: "A" },
          ], finalAnswer: "120 cm³" },
        },
        {
          id: "olm-u5-s2-pr-q8", difficulty: "core", totalMarks: 2,
          stem: "The curved surface area of a cylinder of radius $r$ and height $h$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\pi r^2h$" },
            { id: "b", text: "$2\\pi rh$" },
            { id: "c", text: "$\\pi rh$" },
            { id: "d", text: "$2\\pi r^2+2\\pi rh$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Curved SA", statement: "Rectangle unroll: $2\\pi r \\times h$." }], steps: [
            { reasoning: "Curved surface unrolls to a rectangle of width $2\\pi r$.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: $2\\pi rh$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$2\\pi rh$" },
        },
        {
          id: "olm-u5-s2-pr-q9", difficulty: "core", totalMarks: 3,
          stem: "Find the volume of a cylinder of radius 4 cm and height 9 cm, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 452.39, tolerance: 0.01, unit: "cm³" }] },
          markscheme: { principles: [{ kind: "formula", name: "Cylinder", statement: "$\\pi r^2h$." }], steps: [
            { reasoning: "$V=\\pi\\times16\\times9=144\\pi$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "$\\approx452.39$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $144\\pi\\approx452.39$ cm³.", marks: 1, markCode: "A" },
          ], finalAnswer: "$144\\pi$ cm³" },
        },
        {
          id: "olm-u5-s2-pr-q10", difficulty: "core", totalMarks: 3,
          stem: "Find the total surface area of a cylinder of radius 3 cm and height 10 cm.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Cylinder SA", statement: "$2\\pi r(r+h)$." }], steps: [
            { reasoning: "$SA=2\\pi\\times3\\times(3+10)=78\\pi$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Answer: $78\\pi$ cm² ($\\approx245$).", marks: 1, markCode: "M" },
            { reasoning: "Includes both circular ends ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$78\\pi$ cm²" },
        },
        {
          id: "olm-u5-s2-pr-q11", difficulty: "core", totalMarks: 2,
          stem: "A metal has density 8 g/cm³. What is the mass of a piece with volume 45 cm³?",
          response: { type: "mcq", choices: [
            { id: "a", text: "8 g" },
            { id: "b", text: "53 g" },
            { id: "c", text: "360 g" },
            { id: "d", text: "5.6 g" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Density", statement: "$m=\\rho V$." }], steps: [
            { reasoning: "$m=8\\times45=360$ g.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: 360 g.", marks: 1, markCode: "A" },
          ], finalAnswer: "360 g" },
        },
        {
          id: "olm-u5-s2-pr-q12", difficulty: "challenge", totalMarks: 2,
          stem: "A cylinder has volume $98\\pi$ cm³ and height 2 cm. What is its radius?",
          response: { type: "mcq", choices: [
            { id: "a", text: "49 cm" },
            { id: "b", text: "7 cm" },
            { id: "c", text: "14 cm" },
            { id: "d", text: "2 cm" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Reverse formula", statement: "Solve for $r$." }], steps: [
            { reasoning: "$\\pi r^2\\times2=98\\pi \\Rightarrow r^2=49 \\Rightarrow r=7$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: 7 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "7 cm" },
        },
        {
          id: "olm-u5-s2-pr-q13", difficulty: "challenge", totalMarks: 4,
          stem: "A triangular prism has a cross-section that is a triangle with base 6 cm and height 4 cm, and the prism is 10 cm long. Find its volume.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Prism volume", statement: "Find cross-section first." }], steps: [
            { reasoning: "Cross-section $=\\frac12\\times6\\times4=12$ cm².", marks: 1, markCode: "M" },
            { reasoning: "$V=12\\times10=120$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 120 cm³.", marks: 1, markCode: "M" },
            { reasoning: "Used perpendicular height of triangle ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "120 cm³" },
        },
        {
          id: "olm-u5-s2-pr-q14", difficulty: "challenge", totalMarks: 4,
          stem: "A hollow pipe has outer radius 5 cm, inner radius 3 cm and length 20 cm. Find the volume of the material.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Hollow cylinder", statement: "Outer − inner volume." }], steps: [
            { reasoning: "Outer $=\\pi\\times25\\times20=500\\pi$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Inner $=\\pi\\times9\\times20=180\\pi$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Material $=500\\pi-180\\pi=320\\pi$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $320\\pi$ cm³ ($\\approx1005$).", marks: 1, markCode: "A" },
          ], finalAnswer: "$320\\pi$ cm³" },
        },
        {
          id: "olm-u5-s2-pr-q15", difficulty: "challenge", totalMarks: 3,
          stem: "Find the total surface area of a cube of side 7 cm.",
          response: { type: "numeric", parts: [{ label: "a", answer: 294, unit: "cm²" }] },
          markscheme: { principles: [{ kind: "formula", name: "Cube SA", statement: "$6s^2$." }], steps: [
            { reasoning: "$SA=6\\times49=294$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Answer: 294 cm².", marks: 1, markCode: "M" },
            { reasoning: "Six faces counted ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "294 cm²" },
        },
        {
          id: "olm-u5-s2-pr-q16", difficulty: "challenge", totalMarks: 4,
          stem: "A metal cylinder of radius 2 cm and height 10 cm has mass 880 g. Find its density, correct to 2 decimal places.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Density", statement: "$\\rho=m/V$ with cylinder volume." }], steps: [
            { reasoning: "$V=\\pi\\times4\\times10=40\\pi$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "$\\rho=\\frac{880}{40\\pi}=\\frac{22}{\\pi}$ g/cm³.", marks: 1, markCode: "M" },
            { reasoning: "$\\approx7.00$ g/cm³.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac{22}{\\pi}\\approx7.00$ g/cm³.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{22}{\\pi}$ g/cm³" },
        },
      ],
    },
    {
      id: "olm-u5-s2-pyramid",
      title: "Pyramids and cones",
      skill: "Calculate volumes of pyramids, cones and spheres at O Level.",
      lesson: {
        sections: [
          { heading: "Volume formulas", body: "Pyramid: $V=\\frac13\\times\\text{base area}\\times\\text{perpendicular height}$ — note the $\\frac13$, unlike a prism. Cone: $V=\\frac13\\pi r^2h$ (a pyramid with circular base). Sphere: $V=\\frac43\\pi r^3$. Hemisphere: $V=\\frac23\\pi r^3$. These fractions appear constantly — forgetting $\\frac13$ is the most common error." },
          { heading: "Surface area", body: "Total surface area of pyramid = base area + sum of triangular faces. Cone curved surface $=\\pi r l$ where $l$ is slant height (not perpendicular height); total $=\\pi r l+\\pi r^2$. Sphere surface $=4\\pi r^2$. For slant height use Pythagoras: $l=\\sqrt{r^2+h^2}$. Always distinguish perpendicular height from slant height." },
        ],
        keyFormulas: [
          { name: "Pyramid", statement: "$V=\\frac13Bh$" },
          { name: "Cone", statement: "$V=\\frac13\\pi r^2h$; $SA=\\pi r(l+r)$" },
          { name: "Sphere", statement: "$V=\\frac43\\pi r^3$; $SA=4\\pi r^2$" },
        ],
        workedExample: { problem: "Find the volume of a cone radius 6 cm, height 10 cm.", solution: "$V=\\frac13\\pi\\times36\\times10=120\\pi\\approx377$ cm³." },
      },
      questions: [
        {
          id: "olm-u5-s2-py-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The volume of a cone is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac13\\pi r^2h$" },
            { id: "b", text: "$\\frac43\\pi r^3$" },
            { id: "c", text: "$\\pi r^2h$" },
            { id: "d", text: "$\\frac12\\pi r^2h$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Cone", statement: "⅓ cylinder." }], steps: [{ reasoning: "Standard formula.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac13\\pi r^2h$" },
        },
        {
          id: "olm-u5-s2-py-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the volume of a sphere radius 3 cm.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Sphere", statement: "$\\frac43\\pi r^3$." }], steps: [
            { reasoning: "$V=\\frac43\\pi\\times27=36\\pi$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $36\\pi$ cm³ ($\\approx113$).", marks: 1, markCode: "A" },
          ], finalAnswer: "$36\\pi$ cm³" },
        },
        {
          id: "olm-u5-s2-py-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the volume of a pyramid with base area 24 cm² and perpendicular height 9 cm.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Pyramid", statement: "$\\frac13Bh$." }], steps: [
            { reasoning: "$V=\\frac13\\times24\\times9=72$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 72 cm³.", marks: 1, markCode: "M" },
            { reasoning: "Check: prism would be 216; pyramid is ⅓ → 72 ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "72 cm³" },
        },
        {
          id: "olm-u5-s2-py-q4", difficulty: "core", totalMarks: 4,
          stem: "A cone has radius 5 cm and slant height 13 cm. Find its volume.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Slant height", statement: "Find perpendicular height first." }], steps: [
            { reasoning: "Perpendicular height $h=\\sqrt{13^2-5^2}=\\sqrt{144}=12$ cm.", marks: 1, markCode: "M" },
            { reasoning: "$V=\\frac13\\pi\\times25\\times12=100\\pi$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $100\\pi$ cm³ ($\\approx314$).", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$100\\pi$ cm³" },
        },
        {
          id: "olm-u5-s2-py-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The volume of a sphere of radius $r$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\pi r^3$" },
            { id: "b", text: "$4\\pi r^2$" },
            { id: "c", text: "$\\frac43\\pi r^3$" },
            { id: "d", text: "$\\frac43\\pi r^2$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Sphere", statement: "$\\frac43\\pi r^3$." }], steps: [{ reasoning: "Standard formula.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac43\\pi r^3$" },
        },
        {
          id: "olm-u5-s2-py-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the volume of a hemisphere of radius 3 cm, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 56.55, tolerance: 0.01, unit: "cm³" }] },
          markscheme: { principles: [{ kind: "formula", name: "Hemisphere", statement: "$\\frac23\\pi r^3$." }], steps: [
            { reasoning: "$V=\\frac23\\pi\\times27=18\\pi$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "$\\approx56.55$ cm³.", marks: 1, markCode: "A" },
          ], finalAnswer: "$18\\pi$ cm³" },
        },
        {
          id: "olm-u5-s2-py-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Find the volume of a cone of radius 3 cm and height 4 cm, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 37.7, tolerance: 0.01, unit: "cm³" }] },
          markscheme: { principles: [{ kind: "formula", name: "Cone", statement: "$\\frac13\\pi r^2h$." }], steps: [
            { reasoning: "$V=\\frac13\\pi\\times9\\times4=12\\pi$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "$\\approx37.70$ cm³.", marks: 1, markCode: "A" },
          ], finalAnswer: "$12\\pi$ cm³" },
        },
        {
          id: "olm-u5-s2-py-q8", difficulty: "core", totalMarks: 2,
          stem: "The curved surface area of a cone of radius $r$ and slant height $l$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\pi rl$" },
            { id: "b", text: "$\\pi r^2$" },
            { id: "c", text: "$2\\pi rh$" },
            { id: "d", text: "$\\frac12\\pi rl$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Cone CSA", statement: "$\\pi rl$ — slant height." }], steps: [
            { reasoning: "Curved surface uses slant height $l$, not perpendicular height.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: $\\pi rl$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\pi rl$" },
        },
        {
          id: "olm-u5-s2-py-q9", difficulty: "core", totalMarks: 3,
          stem: "Find the volume of a pyramid with base area 30 cm² and perpendicular height 12 cm.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Pyramid", statement: "$\\frac13Bh$." }], steps: [
            { reasoning: "$V=\\frac13\\times30\\times12=120$ cm³.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 120 cm³.", marks: 1, markCode: "M" },
            { reasoning: "One-third factor applied ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "120 cm³" },
        },
        {
          id: "olm-u5-s2-py-q10", difficulty: "core", totalMarks: 2,
          stem: "The surface area of a sphere of radius 5 cm is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$50\\pi$ cm²" },
            { id: "b", text: "$20\\pi$ cm²" },
            { id: "c", text: "$25\\pi$ cm²" },
            { id: "d", text: "$100\\pi$ cm²" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Sphere SA", statement: "$4\\pi r^2$." }], steps: [
            { reasoning: "$SA=4\\pi\\times25=100\\pi$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: $100\\pi$ cm².", marks: 1, markCode: "A" },
          ], finalAnswer: "$100\\pi$ cm²" },
        },
        {
          id: "olm-u5-s2-py-q11", difficulty: "core", totalMarks: 3,
          stem: "A cone has radius 6 cm and perpendicular height 8 cm. Find its curved surface area, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "a", answer: 188.5, tolerance: 0.01, unit: "cm²" }] },
          markscheme: { principles: [{ kind: "technique", name: "Slant height", statement: "$l=\\sqrt{r^2+h^2}$." }], steps: [
            { reasoning: "$l=\\sqrt{36+64}=10$ cm.", marks: 1, markCode: "M" },
            { reasoning: "CSA $=\\pi\\times6\\times10=60\\pi\\approx188.50$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Answer: $60\\pi$ cm² ($\\approx188.50$).", marks: 1, markCode: "A" },
          ], finalAnswer: "$60\\pi$ cm²" },
        },
        {
          id: "olm-u5-s2-py-q12", difficulty: "challenge", totalMarks: 2,
          stem: "A cone and a cylinder have the same radius and the same perpendicular height. The ratio of the cone's volume to the cylinder's volume is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "3 : 1" },
            { id: "b", text: "1 : 2" },
            { id: "c", text: "1 : 1" },
            { id: "d", text: "1 : 3" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Cone vs cylinder", statement: "Cone is $\\frac13$ of cylinder." }], steps: [
            { reasoning: "$\\frac13\\pi r^2h : \\pi r^2h = 1:3$.", marks: 1, markCode: "M" },
            { reasoning: "Correct choice: 1 : 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "1 : 3" },
        },
        {
          id: "olm-u5-s2-py-q13", difficulty: "challenge", totalMarks: 4,
          stem: "A cone has volume $96\\pi$ cm³ and radius 6 cm. Find its perpendicular height.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Reverse formula", statement: "Solve for $h$." }], steps: [
            { reasoning: "$\\frac13\\pi\\times36\\times h=96\\pi \\Rightarrow 12\\pi h=96\\pi$.", marks: 1, markCode: "M" },
            { reasoning: "$h=8$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Check: $\\frac13\\times36\\times8=96$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 8 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "8 cm" },
        },
        {
          id: "olm-u5-s2-py-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Find the total surface area of a cone of radius 9 cm and slant height 15 cm.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Cone total SA", statement: "$\\pi r l+\\pi r^2$." }], steps: [
            { reasoning: "Curved $=\\pi\\times9\\times15=135\\pi$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Base $=\\pi\\times81=81\\pi$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Total $=216\\pi$ cm² ($\\approx678$).", marks: 1, markCode: "M" },
            { reasoning: "Answer: $216\\pi$ cm².", marks: 1, markCode: "A" },
          ], finalAnswer: "$216\\pi$ cm²" },
        },
        {
          id: "olm-u5-s2-py-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A sphere has volume $36\\pi$ cm³. Find its radius.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3, unit: "cm" }] },
          markscheme: { principles: [{ kind: "technique", name: "Reverse formula", statement: "Solve for $r$." }], steps: [
            { reasoning: "$\\frac43\\pi r^3=36\\pi \\Rightarrow r^3=27$.", marks: 1, markCode: "M" },
            { reasoning: "$r=3$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3 cm.", marks: 1, markCode: "A" },
          ], finalAnswer: "3 cm" },
        },
        {
          id: "olm-u5-s2-py-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Two spheres have radii 3 cm and 6 cm. Find the ratio of the smaller sphere's surface area to the larger sphere's surface area.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Sphere SA", statement: "$4\\pi r^2$ — ratio is $r^2$ ratio." }], steps: [
            { reasoning: "Small SA $=4\\pi\\times9=36\\pi$ cm²; large SA $=4\\pi\\times36=144\\pi$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Ratio $=36\\pi : 144\\pi = 1:4$.", marks: 1, markCode: "M" },
            { reasoning: "Or directly $3^2:6^2=9:36=1:4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 1 : 4.", marks: 1, markCode: "A" },
          ], finalAnswer: "1 : 4" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u5-s2-vol-notes", title: "Volume & surface area — notes", summary: "Prisms, cylinders, pyramids, cones, spheres.",
      sections: [
        { heading: "Volumes", body: "Prism $Ah$; cylinder $\\pi r^2h$; pyramid/cone $\\frac13$; sphere $\\frac43\\pi r^3$." },
        { heading: "Pitfalls", body: "Slant vs perpendicular height; curved surface of cone is $\\pi rl$; density $=m/V$." },
      ] },
  ],
};
