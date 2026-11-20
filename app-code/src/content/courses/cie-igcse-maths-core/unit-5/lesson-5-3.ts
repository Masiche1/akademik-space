import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "cimg-u5-lesson-5-3",
  code: "5-3",
  title: "Mensuration Problems",
  goal: "I CAN solve multi-step mensuration problems.",
  standards: ["Cambridge IGCSE Mathematics 0580 Core: mensuration"],
  vocabulary: [
    { term: "Composite solid", definition: "A 3D shape made from simpler solids." },
    { term: "Net", definition: "Flat pattern that folds into a 3D shape." },
    { term: "Capacity", definition: "Maximum volume a container holds." },
    { term: "Filling rate", definition: "Volume filled per unit time." },
    { term: "Density", definition: "Mass per unit volume." },
  ],
  concepts: [
    {
      id: "cimg-u5-s3-composite",
      title: "Composite solids",
      skill: "Find volume and surface area of composite solids at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Composite volume",
            body: "Split into simple solids, find each volume, add. If a smaller solid is removed, subtract it.",
          },
          {
            heading: "Composite surface area",
            body: "Careful: faces where two solids join are NOT on the surface. Calculate outer surface only.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A cylinder (r=2, h=5) sits on a cuboid (4×4×1). Find total volume.",
          solution: "Cylinder: $\\pi \\times 4 \\times 5 \\approx 62.8$; cuboid: 16. Total $\\approx 78.8$.",
        },
      },
      questions: [
        {
          id: "cimg-u5-s3-co-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A solid is made of a cube and a cylinder joined together. Volume is found by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Adding volumes" }, { id: "b", text: "Adding surface areas" }, { id: "c", text: "Multiplying volumes" }, { id: "d", text: "Averaging volumes" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Composite volume", statement: "Sum volumes." }],
            steps: [{ reasoning: "Volumes add.", marks: 1, markCode: "A" }],
            finalAnswer: "Add volumes",
          },
        },
        {
          id: "cimg-u5-s3-co-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Two cubes of side 2 are glued together. Find the total volume.",
          response: { type: "numeric", parts: [{ label: "a", answer: 16 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Composite volume", statement: "Each cube $= 8$." }],
            steps: [
              { reasoning: "$2 \\times 8 = 16$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 16 cubic units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "16",
          },
        },
        {
          id: "cimg-u5-s3-co-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A swimming pool is 25 m × 10 m × 2 m deep. How many litres does it hold? (1 m³ = 1000 L)",
          response: { type: "numeric", parts: [{ label: "a", answer: 500000, unit: "litres" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Capacity", statement: "Volume then convert." }],
            steps: [
              { reasoning: "$V = 25 \\times 10 \\times 2 = 500$ m³.", marks: 1, markCode: "M" },
              { reasoning: "$500 \\times 1000 = 500000$ litres.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 500,000 litres.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "500000 litres",
          },
        },
        {
          id: "cimg-u5-s3-co-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "A pipe fills a tank at 0.5 m³/min. The tank is 4 m × 3 m × 2 m. How long to fill it?",
          response: { type: "numeric", parts: [{ label: "a", answer: 48, unit: "minutes" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Filling rate", statement: "Volume ÷ rate." }],
            steps: [
              { reasoning: "$V = 4 \\times 3 \\times 2 = 24$ m³.", marks: 1, markCode: "M" },
              { reasoning: "Time $= 24 \\div 0.5 = 48$ min.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 48 minutes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "48 minutes",
          },
        },
      ],
    },
    {
      id: "cimg-u5-s3-density",
      title: "Density and rates",
      skill: "Calculate density, mass and rate problems at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Density",
            body: "Density $= \\frac{\\text{mass}}{\\text{volume}}$, usually g/cm³. Rearrange: mass $= $ density $\\times$ volume; volume $= \\frac{\\text{mass}}{\\text{density}}$.",
          },
          {
            heading: "Rates",
            body: "Rate $= \\frac{\\text{quantity}}{\\text{time}}$. Speed $= \\frac{\\text{distance}}{\\text{time}}$. Density is a type of rate (mass per volume).",
          },
        ],
        keyFormulas: [
          { name: "Density", statement: "$\\rho = \\frac{m}{V}$" },
        ],
        workedExample: {
          problem: "A block has mass 120 g and volume 15 cm³. Find its density.",
          solution: "$\\rho = \\frac{120}{15} = 8$ g/cm³.",
        },
      },
      questions: [
        {
          id: "cimg-u5-s3-de-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Density equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Mass ÷ volume" }, { id: "b", text: "Volume ÷ mass" }, { id: "c", text: "Mass × volume" }, { id: "d", text: "Mass + volume" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "formula", name: "Density", statement: "$m/V$." }],
            steps: [{ reasoning: "Density $= \\frac{m}{V}$.", marks: 1, markCode: "A" }],
            finalAnswer: "Mass ÷ volume",
          },
        },
        {
          id: "cimg-u5-s3-de-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A metal block has mass 250 g and density 5 g/cm³. Find its volume.",
          response: { type: "numeric", parts: [{ label: "a", answer: 50, unit: "cm³" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Density rearranged", statement: "$V = m/\\rho$." }],
            steps: [
              { reasoning: "$V = 250 \\div 5 = 50$ cm³.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 50 cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50 cm³",
          },
        },
        {
          id: "cimg-u5-s3-de-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A car travels 180 km in 3 hours. What is its average speed?",
          response: { type: "numeric", parts: [{ label: "a", answer: 60, unit: "km/h" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Speed", statement: "Distance ÷ time." }],
            steps: [
              { reasoning: "$180 \\div 3 = 60$ km/h.", marks: 1, markCode: "M" },
              { reasoning: "Units: km/h.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 60 km/h.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60 km/h",
          },
        },
        {
          id: "cimg-u5-s3-de-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "A piece of wood has mass 90 g and density 0.6 g/cm³. Find its volume.",
          response: { type: "numeric", parts: [{ label: "a", answer: 150, unit: "cm³" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Density", statement: "Rearrange formula." }],
            steps: [
              { reasoning: "$V = \\frac{m}{\\rho} = \\frac{90}{0.6}$.", marks: 1, markCode: "M" },
              { reasoning: "$V = 150$ cm³.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 150 cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "150 cm³",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cimg-u5-s3-mens-notes",
      title: "Mensuration problems — revision notes",
      summary: "Composite solids, capacity, density.",
      sections: [
        { heading: "Composite", body: "Add/subtract volumes. Surface area: only outer faces count." },
        { heading: "Density", body: "$\\rho = m/V$. Rearrange for mass or volume. Rates: quantity ÷ time." },
      ],
    },
  ],
};
