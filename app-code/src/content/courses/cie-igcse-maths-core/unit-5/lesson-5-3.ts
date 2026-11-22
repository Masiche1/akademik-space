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
            { id: "a", text: "Multiplying volumes" },
            { id: "b", text: "Adding surface areas" },
            { id: "c", text: "Averaging volumes" },
            { id: "d", text: "Adding volumes" },
          ], correctChoiceId: "d" },
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
        {
          id: "cimg-u5-s3-co-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When finding the surface area of a composite solid, faces where two parts join are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Counted twice" },
            { id: "b", text: "Always the largest faces" },
            { id: "c", text: "Counted once each" },
            { id: "d", text: "Not part of the outer surface" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Composite surface area", statement: "Outer faces only." }],
            steps: [{ reasoning: "Joined faces are internal and not on the surface.", marks: 1, markCode: "A" }],
            finalAnswer: "Not part of the outer surface",
          },
        },
        {
          id: "cimg-u5-s3-co-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A solid is made by joining a cuboid measuring 4×3×2 to a cube of side 2. Find the total volume.",
          response: { type: "numeric", parts: [{ label: "a", answer: 32 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Composite volume", statement: "Sum volumes." }],
            steps: [
              { reasoning: "Cuboid $= 24$, cube $= 8$; total $= 32$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 32 cubic units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "32",
          },
        },
        {
          id: "cimg-u5-s3-co-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When a hole is cut from a solid shape, its volume is found by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Averaging the volumes" },
            { id: "b", text: "Adding the two volumes" },
            { id: "c", text: "Larger volume minus the hole's volume" },
            { id: "d", text: "Multiplying the volumes" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Composite volume", statement: "Subtract removed part." }],
            steps: [{ reasoning: "Subtract the volume of the removed part.", marks: 1, markCode: "A" }],
            finalAnswer: "Larger minus hole",
          },
        },
        {
          id: "cimg-u5-s3-co-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "A solid is made of a cylinder of radius 3 cm and height 4 cm joined to a cuboid measuring 3 cm × 3 cm × 2 cm. Find the total volume. Use $\\pi = 3.14$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 131.04, tolerance: 0.01, unit: "cm³" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Composite volume", statement: "Sum volumes." }],
            steps: [
              { reasoning: "Cylinder: $3.14 \\times 9 \\times 4 = 113.04$ cm³; cuboid: $3 \\times 3 \\times 2 = 18$ cm³.", marks: 1, markCode: "M" },
              { reasoning: "Total $= 113.04 + 18 = 131.04$ cm³.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 131.04 cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "131.04 cm³",
          },
        },
        {
          id: "cimg-u5-s3-co-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A shape consists of a cylinder with a hemisphere on top. Its volume is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cylinder volume only" },
            { id: "b", text: "Cylinder volume − hemisphere volume" },
            { id: "c", text: "Product of the two volumes" },
            { id: "d", text: "Cylinder volume + hemisphere volume" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Composite volume", statement: "Sum volumes." }],
            steps: [{ reasoning: "Add the volumes of the parts.", marks: 1, markCode: "A" }],
            finalAnswer: "Cylinder + hemisphere",
          },
        },
        {
          id: "cimg-u5-s3-co-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A fish tank measures 2 m × 1 m × 0.5 m. Find its capacity in litres. (1 m³ = 1000 litres)",
          response: { type: "numeric", parts: [{ label: "a", answer: 1000, unit: "litres" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Capacity", statement: "Volume then convert." }],
            steps: [
              { reasoning: "$V = 2 \\times 1 \\times 0.5 = 1$ m³.", marks: 1, markCode: "M" },
              { reasoning: "$1 \\times 1000 = 1000$ litres.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1000 litres.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1000 litres",
          },
        },
        {
          id: "cimg-u5-s3-co-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "A pipe fills a tank at 0.2 m³ per minute. The tank measures 5 m × 4 m × 3 m. How long does it take to fill the tank?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Filling rate", statement: "Volume ÷ rate." }],
            steps: [
              { reasoning: "$V = 5 \\times 4 \\times 3 = 60$ m³.", marks: 1, markCode: "M" },
              { reasoning: "Time $= 60 \\div 0.2 = 300$ minutes.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 300 minutes (5 hours).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "300 minutes",
          },
        },
        {
          id: "cimg-u5-s3-co-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A cylindrical tank has radius 1 m and height 3 m. Water is pumped in at 0.5 m³ per minute. How long does it take to fill the tank? Use $\\pi = 3.14$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 18.84, tolerance: 0.01, unit: "minutes" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Filling rate", statement: "Volume ÷ rate." }],
            steps: [
              { reasoning: "$V = 3.14 \\times 1 \\times 3 = 9.42$ m³.", marks: 1, markCode: "M" },
              { reasoning: "Time $= 9.42 \\div 0.5$.", marks: 1, markCode: "M" },
              { reasoning: "$= 18.84$ minutes.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 18.84 minutes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "18.84 minutes",
          },
        },
        {
          id: "cimg-u5-s3-co-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two cubes each of side 3 cm are glued together face to face. Find the total surface area of the resulting solid.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Composite surface area", statement: "Exclude joined faces." }],
            steps: [
              { reasoning: "Each cube has surface area $6 \\times 9 = 54$ cm²; two cubes: $108$ cm².", marks: 1, markCode: "M" },
              { reasoning: "The joined faces ($2 \\times 9 = 18$ cm²) are no longer on the surface.", marks: 1, markCode: "M" },
              { reasoning: "Total surface area $= 108 - 18 = 90$ cm².", marks: 1, markCode: "M" },
              { reasoning: "Answer: 90 cm².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "90 cm²",
          },
        },
        {
          id: "cimg-u5-s3-co-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A container is a cube with a smaller cube removed from inside it. To find the volume of material used you should…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Add the two volumes" },
            { id: "b", text: "Use only the inner cube's volume" },
            { id: "c", text: "Subtract the inner cube's volume from the outer cube's" },
            { id: "d", text: "Multiply the two volumes" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Composite volume", statement: "Subtract removed part." }],
            steps: [{ reasoning: "Material volume = outer minus inner.", marks: 1, markCode: "A" }],
            finalAnswer: "Outer minus inner",
          },
        },
        {
          id: "cimg-u5-s3-co-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A solid is made of a cuboid measuring 6 cm × 6 cm × 2 cm with a cone of radius 3 cm and height 4 cm placed on top (base fitting exactly on the cuboid top). Find the total volume. Use $\\pi = 3.14$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 109.68, tolerance: 0.01, unit: "cm³" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Composite volume", statement: "Sum volumes." }],
            steps: [
              { reasoning: "Cuboid: $6 \\times 6 \\times 2 = 72$ cm³; cone: $\\frac{1}{3} \\times 3.14 \\times 9 \\times 4 = 37.68$ cm³.", marks: 1, markCode: "M" },
              { reasoning: "Total $= 72 + 37.68 = 109.68$ cm³.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 109.68 cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "109.68 cm³",
          },
        },
        {
          id: "cimg-u5-s3-co-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "A rectangular storage container measures 3 m × 2 m × 2.5 m. Find its capacity in litres, showing your working. (1 m³ = 1000 litres)",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Capacity", statement: "Volume then convert." }],
            steps: [
              { reasoning: "$V = 3 \\times 2 \\times 2.5 = 15$ m³.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $15 \\times 1000 = 15000$ litres.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15000 litres",
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
            { id: "a", text: "Mass × volume" },
            { id: "b", text: "Volume ÷ mass" },
            { id: "c", text: "Mass + volume" },
            { id: "d", text: "Mass ÷ volume" },
          ], correctChoiceId: "d" },
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
        {
          id: "cimg-u5-s3-de-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To find the mass of an object when you know its density and volume, you calculate…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Volume ÷ density" },
            { id: "b", text: "Density + volume" },
            { id: "c", text: "Density ÷ volume" },
            { id: "d", text: "Density × volume" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "formula", name: "Density", statement: "$m = \\rho V$." }],
            steps: [{ reasoning: "Mass $=$ density $\\times$ volume.", marks: 1, markCode: "A" }],
            finalAnswer: "Density × volume",
          },
        },
        {
          id: "cimg-u5-s3-de-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A material has density 8 g/cm³. Find the mass of a piece with volume 10 cm³.",
          response: { type: "numeric", parts: [{ label: "a", answer: 80, unit: "g" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Density rearranged", statement: "$m = \\rho V$." }],
            steps: [
              { reasoning: "$m = 8 \\times 10 = 80$ g.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 80 g.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "80 g",
          },
        },
        {
          id: "cimg-u5-s3-de-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An object has mass 60 g and density 4 g/cm³. What is its volume?",
          response: { type: "mcq", choices: [
            { id: "a", text: "240 cm³" },
            { id: "b", text: "15 cm³" },
            { id: "c", text: "20 cm³" },
            { id: "d", text: "64 cm³" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Density rearranged", statement: "$V = m/\\rho$." }],
            steps: [{ reasoning: "$V = 60 \\div 4 = 15$ cm³.", marks: 1, markCode: "A" }],
            finalAnswer: "15 cm³",
          },
        },
        {
          id: "cimg-u5-s3-de-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A car travels 150 km in 2.5 hours. Its average speed is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "100 km/h" },
            { id: "b", text: "150 km/h" },
            { id: "c", text: "60 km/h" },
            { id: "d", text: "37.5 km/h" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Speed", statement: "Distance ÷ time." }],
            steps: [{ reasoning: "$150 \\div 2.5 = 60$ km/h.", marks: 1, markCode: "A" }],
            finalAnswer: "60 km/h",
          },
        },
        {
          id: "cimg-u5-s3-de-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The density of water is approximately…",
          response: { type: "mcq", choices: [
            { id: "a", text: "100 g/cm³" },
            { id: "b", text: "1 g/cm³" },
            { id: "c", text: "0.1 g/cm³" },
            { id: "d", text: "10 g/cm³" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Density of water", statement: "$\\approx 1$ g/cm³." }],
            steps: [{ reasoning: "Water has density about $1$ g/cm³.", marks: 1, markCode: "A" }],
            finalAnswer: "1 g/cm³",
          },
        },
        {
          id: "cimg-u5-s3-de-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A metal block has mass 450 g and volume 50 cm³. Find its density.",
          response: { type: "numeric", parts: [{ label: "a", answer: 9, unit: "g/cm³" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Density", statement: "$\\rho = m/V$." }],
            steps: [
              { reasoning: "$\\rho = 450 \\div 50$.", marks: 1, markCode: "M" },
              { reasoning: "$\\rho = 9$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 9 g/cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9 g/cm³",
          },
        },
        {
          id: "cimg-u5-s3-de-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "A cube has side 4 cm and mass 256 g. Find its density, showing your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Density", statement: "Find volume first." }],
            steps: [
              { reasoning: "Volume $= 4^3 = 64$ cm³.", marks: 1, markCode: "M" },
              { reasoning: "$\\rho = 256 \\div 64 = 4$ g/cm³.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 4 g/cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 g/cm³",
          },
        },
        {
          id: "cimg-u5-s3-de-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A metal bar measures 2 m × 0.5 m × 0.1 m and has density 7850 kg/m³. Find its mass.",
          response: { type: "numeric", parts: [{ label: "a", answer: 785, unit: "kg" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Density", statement: "$m = \\rho V$." }],
            steps: [
              { reasoning: "$V = 2 \\times 0.5 \\times 0.1 = 0.1$ m³.", marks: 1, markCode: "M" },
              { reasoning: "$m = 7850 \\times 0.1$.", marks: 1, markCode: "M" },
              { reasoning: "$m = 785$ kg.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 785 kg.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "785 kg",
          },
        },
        {
          id: "cimg-u5-s3-de-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A car uses 8 litres of fuel per 100 km. A journey is 350 km. Calculate the fuel needed and the cost if fuel costs 1.20 dollars per litre.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rate problems", statement: "Quantity per unit × units." }],
            steps: [
              { reasoning: "Fuel $= 8 \\times (350 \\div 100) = 8 \\times 3.5 = 28$ litres.", marks: 1, markCode: "M" },
              { reasoning: "Cost $= 28 \\times 1.20 = 33.60$ dollars.", marks: 1, markCode: "M" },
              { reasoning: "Check units: litres and dollars.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 28 litres, 33.60 dollars.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "28 litres, 33.60 dollars",
          },
        },
        {
          id: "cimg-u5-s3-de-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "For a material of constant density, the mass is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Independent of the volume" },
            { id: "b", text: "Inversely proportional to the volume" },
            { id: "c", text: "Proportional to the volume" },
            { id: "d", text: "Equal to the volume" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Density", statement: "$m = \\rho V$." }],
            steps: [{ reasoning: "With $\\rho$ fixed, $m$ is directly proportional to $V$.", marks: 1, markCode: "A" }],
            finalAnswer: "Proportional to volume",
          },
        },
        {
          id: "cimg-u5-s3-de-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two blocks have the same volume of 20 cm³. Their densities are 3 g/cm³ and 5 g/cm³. Find the difference between their masses.",
          response: { type: "numeric", parts: [{ label: "a", answer: 40, unit: "g" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Density", statement: "$m = \\rho V$." }],
            steps: [
              { reasoning: "Masses: $3 \\times 20 = 60$ g and $5 \\times 20 = 100$ g.", marks: 1, markCode: "M" },
              { reasoning: "Difference $= 100 - 60 = 40$ g.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 40 g.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "40 g",
          },
        },
        {
          id: "cimg-u5-s3-de-q16",
          difficulty: "core",
          totalMarks: 3,
          stem: "A liquid has mass 500 g and density 0.8 g/cm³. Find its volume, showing your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Density rearranged", statement: "$V = m/\\rho$." }],
            steps: [
              { reasoning: "$V = \\frac{m}{\\rho} = \\frac{500}{0.8}$.", marks: 1, markCode: "M" },
              { reasoning: "$V = 625$ cm³.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 625 cm³.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "625 cm³",
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
