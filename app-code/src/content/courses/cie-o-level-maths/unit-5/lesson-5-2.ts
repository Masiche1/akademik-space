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
            { id: "a", text: "24 cubic units" }, { id: "b", text: "9 cubic units" }, { id: "c", text: "24 square units" }, { id: "d", text: "14 cubic units" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "$\\frac13\\pi r^2h$" }, { id: "b", text: "$\\pi r^2h$" }, { id: "c", text: "$\\frac12\\pi r^2h$" }, { id: "d", text: "$\\frac43\\pi r^3$" },
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
