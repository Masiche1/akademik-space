import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "ciem-u5-lesson-5-3",
  code: "5-3",
  title: "Mensuration Problem Solving",
  goal: "I CAN solve multi-step problems involving volume, surface area, unit conversion, density and capacity.",
  standards: ["0580 5.5", "0580 5.6"],
  vocabulary: [
    { term: "Density", definition: "$\\rho=\\frac{\\text{mass}}{\\text{volume}}$; units g/cm$^3$ or kg/m$^3$." },
    { term: "Capacity", definition: "The volume a container can hold, often in litres or millilitres." },
    { term: "Unit conversion", definition: "Changing measurements between units, e.g. $1$ m$^3=1000$ litres." },
    { term: "Litre", definition: "A unit of capacity equal to $1000$ cm$^3$ or $0.001$ m$^3$." },
    { term: "Rate of flow", definition: "Volume per unit time, e.g. litres per minute." },
  ],
  concepts: [
    {
      id: "ciem-u5-unit-conversion",
      title: "Units and conversions",
      skill: "Convert between units of length, area, volume and capacity, and use density formulae.",
      lesson: {
        sections: [
          {
            heading: "Key conversions",
            body: "- Length: $1$ m $=100$ cm $=1000$ mm; $1$ km $=1000$ m\n- Area: $1$ m$^2=10\\,000$ cm$^2$\n- Volume/capacity: $1$ m$^3=1\\,000\\,000$ cm$^3=1000$ litres; $1$ litre $=1000$ cm$^3=1000$ ml\n- Density: $1$ g/cm$^3=1000$ kg/m$^3$",
          },
          {
            heading: "Density problems",
            body: "Use $\\rho=\\frac{m}{V}$ rearranged as needed: $m=\\rho V$, $V=\\frac{m}{\\rho}$. Always keep units consistent — convert cm$^3$ to m$^3$ if density is in kg/m$^3$.",
          },
          {
            heading: "Choosing units",
            body: "Small objects → cm and cm$^3$; large containers → m and m$^3$/litres. Convert at the start or end — but not halfway through a calculation where errors creep in.",
          },
        ],
        keyFormulas: [
          { name: "Density", statement: "$\\rho=\\frac{m}{V}$" },
          { name: "Volume from mass", statement: "$V=\\frac{m}{\\rho}$" },
          { name: "Mass from volume", statement: "$m=\\rho V$" },
          { name: "Conversions", statement: "$1$ m$^3=1000$ litres $=10^6$ cm$^3$" },
        ],
        workedExample: {
          problem: "A block of metal has mass $540$ g and density $2.7$ g/cm$^3$. Find its volume.",
          solution: "$V=\\frac{m}{\\rho}=\\frac{540}{2.7}=200$ cm$^3$.",
        },
      },
      questions: [
        {
          id: "ciem-u5-unit-conversion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many litres are in $2.5$ m$^3$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2500$ litres" },
              { id: "b", text: "$250$ litres" },
              { id: "c", text: "$25$ litres" },
              { id: "d", text: "$25\\,000$ litres" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Volume conversion", statement: "$1$ m$^3=1000$ litres." },
            ],
            steps: [
              { reasoning: "Multiply by $1000$.", working: "2.5\\times1000=2500", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $2500$ litres",
            commonErrors: ["Multiplying by $100$ instead of $1000$."],
          },
        },
        {
          id: "ciem-u5-unit-conversion-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A metal block has mass $2.4$ kg and density $8000$ kg/m$^3$. Find its volume in cm$^3$.",
          response: { type: "numeric", parts: [{ label: "Volume", answer: 300, unit: "cm³" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Density", statement: "$V=\\frac{m}{\\rho}$" },
              { kind: "property", name: "Volume conversion", statement: "$1$ m$^3=10^6$ cm$^3$." },
            ],
            steps: [
              { reasoning: "Find volume in m$^3$.", working: "V=\\frac{2.4}{8000}=0.0003 \\text{ m}^3", marks: 1, markCode: "M" },
              { reasoning: "Convert to cm$^3$.", working: "0.0003\\times10^6", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "=300 \\text{ cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$300$ cm$^3$",
            commonErrors: ["Mixing kg and g without converting."],
          },
        },
        {
          id: "ciem-u5-unit-conversion-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A rectangular tank is $120$ cm $\\times$ $60$ cm $\\times$ $50$ cm. It is filled with water at $8$ litres per minute. How long does it take to fill the tank completely?",
          response: { type: "numeric", parts: [{ label: "Time", answer: 45, unit: "minutes" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cuboid volume", statement: "$V=lwh$" },
              { kind: "property", name: "Capacity", statement: "$1$ litre $=1000$ cm$^3$." },
            ],
            steps: [
              { reasoning: "Volume in cm$^3$.", working: "V=120\\times60\\times50=360\\,000 \\text{ cm}^3", marks: 1, markCode: "M" },
              { reasoning: "Convert to litres.", working: "=360 litres", marks: 1, markCode: "M" },
              { reasoning: "Divide by rate.", working: "t=\\frac{360}{8}", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "=45 minutes", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$45$ minutes",
            commonErrors: ["Using cm$^3$ directly with litres/minute."],
          },
        },
        {
          id: "ciem-u5-unit-conversion-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A spherical ball bearing has radius $1.5$ cm and is made of steel with density $7.8$ g/cm$^3$.",
          parts: [
            { label: "a", prompt: "Find the volume of the ball bearing.", marks: 3 },
            { label: "b", prompt: "Find its mass in grams.", marks: 3 },
            { label: "c", prompt: "A box has internal dimensions $10$ cm $\\times$ $8$ cm $\\times$ $6$ cm. How many ball bearings can fit inside?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sphere volume", statement: "$V=\\frac43\\pi r^3$" },
              { kind: "formula", name: "Density", statement: "$m=\\rho V$" },
              { kind: "property", name: "Packing", statement: "Number that fit = box volume $\\div$ sphere volume (lower bound; packing efficiency ignored at this level)." },
            ],
            steps: [
              { part: "a", reasoning: "Apply sphere volume with $r=1.5$.", working: "V=\\frac43\\pi\\times3.375=4.5\\pi", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "\\approx14.14 \\text{ cm}^3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the volume.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Mass = density $\\times$ volume.", working: "m=7.8\\times4.5\\pi=35.1\\pi", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "\\approx110.3 g", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the mass.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Box volume.", working: "V_{\\text{box}}=10\\times8\\times6=480 \\text{ cm}^3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Divide by sphere volume.", working: "\\frac{480}{4.5\\pi}=\\frac{320}{3\\pi}\\approx33.95", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the whole number that fits.", working: "33 bearings", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $4.5\\pi \\approx 14.14$ cm$^3$ (b) $\\approx110.3$ g (c) $33$ bearings",
            commonErrors: ["In (c) rounding up to 34 — only whole bearings fit.", "Using diameter instead of radius for the sphere."],
            examinerNote: "Real packing would be fewer due to gaps; at IGCSE the volume-ratio method is expected, rounded down.",
          },
        },
      ],
    },
    {
      id: "ciem-u5-density-applications",
      title: "Density and displacement problems",
      skill: "Solve problems using density, including objects displacing fluid and finding missing dimensions.",
      lesson: {
        sections: [
          {
            heading: "Density formula triangle",
            body: "Memorise the triangle: cover the quantity you want and the formula appears — $\\rho=\\frac{m}{V}$, $m=\\rho V$, $V=\\frac{m}{\\rho}$.",
          },
          {
            heading: "Displacement",
            body: "When an object is submerged, it displaces its own volume of fluid. The rise in water level $\\times$ container cross-section = object volume. This is how irregular objects' volumes are found.",
          },
          {
            heading: "Finding missing dimensions",
            body: "If mass, density and one dimension are known, find volume first, then solve for the missing dimension using the appropriate volume formula.",
          },
        ],
        keyFormulas: [
          { name: "Density", statement: "$\\rho=\\frac{m}{V}$" },
          { name: "Displaced volume", statement: "$V_{\\text{object}}=\\text{rise}\\times\\text{cross-section area}$" },
          { name: "Rearranged density", statement: "$m=\\rho V$ or $V=\\frac{m}{\\rho}$" },
        ],
        workedExample: {
          problem: "A metal cube has mass $270$ g and density $10.8$ g/cm$^3$. Find its side length.",
          solution: "$V=\\frac{270}{10.8}=25$ cm$^3$; side $=\\sqrt[3]{25}\\approx2.92$ cm.",
        },
      },
      questions: [
        {
          id: "ciem-u5-density-applications-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A substance has mass $48$ g and volume $6$ cm$^3$. What is its density?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8$ g/cm$^3$" },
              { id: "b", text: "$0.125$ g/cm$^3$" },
              { id: "c", text: "$54$ g/cm$^3$" },
              { id: "d", text: "$288$ g/cm$^3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Density", statement: "$\\rho=\\frac{m}{V}$" },
            ],
            steps: [
              { reasoning: "Divide mass by volume.", working: "\\frac{48}{6}=8", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $8$ g/cm$^3$",
            commonErrors: ["Dividing volume by mass."],
          },
        },
        {
          id: "ciem-u5-density-applications-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A cuboid has dimensions $10$ cm $\\times$ $5$ cm $\\times$ $4$ cm and mass $1.2$ kg. Find its density in g/cm$^3$.",
          response: { type: "numeric", parts: [{ label: "Density", answer: 6, unit: "g/cm³" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cuboid volume", statement: "$V=lwh$" },
              { kind: "formula", name: "Density", statement: "$\\rho=\\frac{m}{V}$" },
            ],
            steps: [
              { reasoning: "Volume.", working: "V=10\\times5\\times4=200 \\text{ cm}^3", marks: 1, markCode: "M" },
              { reasoning: "Convert mass to grams.", working: "m=1200 g", marks: 1, markCode: "M" },
              { reasoning: "Density.", working: "\\rho=\\frac{1200}{200}=6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$ g/cm$^3$",
            commonErrors: ["Using $1.2$ kg directly (gives $0.006$)."],
          },
        },
        {
          id: "ciem-u5-density-applications-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A stone of irregular shape is fully submerged in a cylindrical container of base area $50$ cm$^2$. The water level rises by $4$ cm. Find the volume of the stone.",
          response: { type: "numeric", parts: [{ label: "Volume", answer: 200, unit: "cm³" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Displacement", statement: "Submerged object displaces its own volume." },
            ],
            steps: [
              { reasoning: "Volume = rise in level $\\times$ base area.", working: "V=4\\times50=200", marks: 1, markCode: "M" },
              { reasoning: "State with units.", working: "200 \\text{ cm}^3", marks: 3, markCode: "A" },
            ],
            finalAnswer: "$200$ cm$^3$",
            commonErrors: ["Using the density formula — no mass or density is given; displacement is the method for irregular objects."],
          },
        },
        {
          id: "ciem-u5-density-applications-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A hollow metal pipe has outer radius $5$ cm, inner radius $3$ cm and length $2$ m. The metal has density $7.9$ g/cm$^3$.",
          parts: [
            { label: "a", prompt: "Find the volume of metal in the pipe.", marks: 4 },
            { label: "b", prompt: "Find the mass of the pipe in kg.", marks: 3 },
            { label: "c", prompt: "If the pipe is submerged vertically in water, what volume of water does it displace?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Hollow cylinder volume", statement: "$V=\\pi(R^2-r^2)h$ — outer minus inner cylinder." },
              { kind: "formula", name: "Density", statement: "$m=\\rho V$" },
            ],
            steps: [
              { part: "a", reasoning: "Outer cylinder volume.", working: "\\pi\\times25\\times200=5000\\pi \\text{ cm}^3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Inner cylinder volume.", working: "\\pi\\times9\\times200=1800\\pi \\text{ cm}^3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Subtract.", working: "5000\\pi-1800\\pi=3200\\pi", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the volume.", working: "\\approx10\\,053 \\text{ cm}^3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Mass = density $\\times$ volume.", working: "m=7.9\\times3200\\pi=25\\,280\\pi g", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Convert to kg.", working: "=25.28\\pi kg \\approx79.4 kg", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the mass.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A submerged object displaces the volume of the **outer** cylinder (the water fills the bore too if open).", working: "V=5000\\pi \\text{ cm}^3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the displaced volume.", working: "\\approx15\\,708 \\text{ cm}^3 =15.7 litres", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3200\\pi \\approx 10\\,053$ cm$^3$ (b) $\\approx79.4$ kg (c) $5000\\pi \\approx 15.7$ litres",
            commonErrors: ["In (a) adding the cylinders instead of subtracting.", "In (c) using the metal volume instead of the outer volume — displacement equals the outer envelope."],
            examinerNote: "For (c) accept either interpretation if justified: an open pipe displaces outer volume only if water enters the bore; a sealed pipe displaces outer volume. The expected answer is the outer cylinder volume.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u5-problem-solving-notes",
      title: "Mensuration problem solving — revision notes",
      summary: "Unit conversion, density problems, displacement and multi-step volume/surface-area problems.",
      sections: [
        {
          heading: "Conversions",
          body: "$1$ m$^3=1000$ litres $=10^6$ cm$^3$; $1$ litre $=1000$ cm$^3$; $1$ m$^2=10^4$ cm$^2$. Convert at a consistent stage — usually at the start.",
        },
        {
          heading: "Density",
          body: "$\\rho=\\frac{m}{V}$ — rearrange to $m=\\rho V$ or $V=\\frac{m}{\\rho}$. Keep mass and volume units consistent.",
        },
        {
          heading: "Displacement",
          body: "Submerged object displaces its own volume: $V=\\text{water rise}\\times\\text{container base area}$. For hollow objects, displacement equals the **outer** volume.",
        },
        {
          heading: "Exam technique",
          body: "- Write the formula first, then substitute — reduces unit errors.\n- For 'how many fit' questions, divide volumes and round **down**.\n- Hollow solids: volume = outer $-$ inner; surface area needs care about which faces are external.",
        },
      ],
    },
  ],
};
