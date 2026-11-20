import type { Lesson } from "../../../types.ts";

export const lesson213: Lesson = {
  id: "cial-p-u2-lesson-2-3",
  code: "2-3",
  title: "Density, pressure and fluids",
  goal: "I CAN apply density, pressure and Archimedes' principle.",
  standards: ["9702 5: density, pressure, fluids"],
  vocabulary: [
    { term: "Density", definition: "Mass per unit volume — $\\rho = m/V$ (kg/m³)." },
    { term: "Pressure", definition: "Force per unit area — $P = F/A$ (Pa = N/m²)." },
    { term: "Hydrostatic pressure", definition: "$P = \\rho gh$ — pressure increases with depth." },
    { term: "Upthrust", definition: "Upward force on object in fluid — equals weight of displaced fluid." },
    { term: "Buoyancy", definition: "Ability to float — upthrust vs weight." },
    { term: "Atmospheric pressure", definition: "Pressure due to air column — ~101 kPa at sea level." },
  ],
  concepts: [
    {
      id: "cial-p-u2-density-pressure",
      title: "Density and pressure",
      skill: "Calculate density, pressure and pressure variation with depth.",
      lesson: {
        sections: [
          {
            heading: "Density",
            body: "$\\rho = m/V$. Objects float if $\\rho_{object} < \\rho_{fluid}$; sink if greater. For floating object: fraction submerged = $\\rho_{object}/\\rho_{fluid}$.",
          },
          {
            heading: "Pressure",
            body: "$P = F/A$ — force per unit area. In fluids: $P = \\rho gh$ (gauge pressure) plus atmospheric. Pressure acts equally in all directions at a point. Units: Pa = N/m².",
          },
          {
            heading: "Manometers and applications",
            body: "Manometer measures pressure difference via liquid column height: $\\Delta P = \\rho gh$. Hydraulic systems: pressure transmitted equally (Pascal's principle) — small force on small area → large force on large area.",
          },
        ],
        keyFormulas: [
          { name: "Density", statement: "$\\rho = m/V$" },
          { name: "Pressure", statement: "$P = F/A = \\rho gh$" },
          { name: "Floating", statement: "Fraction submerged = $\\rho_o/\\rho_f$" },
        ],
        workedExample: {
          problem: "A block of volume 0.01 m³ and density 800 kg/m³ is placed in water (1000 kg/m³). What fraction is submerged?",
          solution: "Fraction = $800/1000 = 0.8$ — 80% submerged.",
        },
      },
      questions: [
        {
          id: "cial-p-u2-dp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the density of a 2 kg object with volume 0.5 m³?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4\\ kg\\ m^{-3}$" },
              { id: "b", text: "$1\\ kg\\ m^{-3}$" },
              { id: "c", text: "$0.25\\ kg\\ m^{-3}$" },
              { id: "d", text: "$2\\ kg\\ m^{-3}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Density", statement: "$\\rho = m/V$." }],
            steps: [{ reasoning: "$\\rho = 2/0.5 = 4\\ kg\\ m^{-3}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\rho = 4\\ kg\\ m^{-3}$",
          },
        },
        {
          id: "cial-p-u2-dp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate pressure at 10 m depth in water ($\\rho = 1000\\ kg\\ m^{-3}$, $g = 9.81$).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Hydrostatic pressure", statement: "$P = \\rho gh$." }],
            steps: [
              { reasoning: "$P = 1000 \\times 9.81 \\times 10$.", marks: 1, markCode: "M" },
              { reasoning: "$P = 98,100\\ Pa = 98.1\\ kPa$.", marks: 1, markCode: "M" },
              { reasoning: "Gauge pressure (excluding atmospheric).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$P = 98.1\\ kPa$",
          },
        },
        {
          id: "cial-p-u2-dp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A wooden block (density 600 kg/m³) floats in water (1000 kg/m³). What fraction is submerged?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Buoyancy", statement: "Fraction submerged = $\\rho_o/\\rho_f$." }],
            steps: [
              { reasoning: "Fraction = $600/1000 = 0.6$.", marks: 1, markCode: "M" },
              { reasoning: "60% submerged, 40% above water.", marks: 1, markCode: "A" },
              { reasoning: "Upthrust = weight of displaced water = weight of block.", marks: 1, markCode: "B" },
              { reasoning: "Floats because density < water.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$0.6$ or 60%",
          },
        },
        {
          id: "cial-p-u2-dp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Density and pressure.",
          parts: [
            { label: "a", prompt: "Define density and give its unit.", marks: 2 },
            { label: "b", prompt: "Define pressure and give its unit.", marks: 2 },
            { label: "c", prompt: "How does pressure vary with depth in a fluid?", marks: 2 },
            { label: "d", prompt: "Why does a ship float despite being made of steel?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Fluids", statement: "$\\rho=m/V$; $P=F/A=\\rho gh$; buoyancy." }],
            steps: [
              { part: "a", reasoning: "$\\rho = m/V$; kg/m³.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "$P = F/A$; Pa = N/m².", marks: 2, markCode: "A" },
              { part: "c", reasoning: "$P = \\rho gh$ — increases linearly with depth.", marks: 2, markCode: "M" },
              { part: "d", reasoning: "Hollow shape → low average density.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Displaces water weighing more than ship.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Upthrust = weight → floats (Archimedes).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) ρ=m/V (b) P=F/A (c) P=ρgh (d) low density+hollow",
          },
        },
      ],
    },
    {
      id: "cial-p-u2-buoyancy",
      title: "Buoyancy and Archimedes' principle",
      skill: "Apply Archimedes' principle to floating and submerged objects.",
      lesson: {
        sections: [
          {
            heading: "Archimedes' principle",
            body: "Upthrust on object in fluid = weight of fluid displaced. Object floats when upthrust = weight. Sinks when weight > upthrust. For fully submerged: upthrust $= \\rho_f V g$.",
          },
          {
            heading: "Floating objects",
            body: "Fraction submerged = $\\rho_o/\\rho_f$. Weight of displaced fluid = weight of object. Apparent weight = true weight − upthrust. In salt water (higher density) objects float higher.",
          },
          {
            heading: "Applications",
            body: "Hydrometers measure density. Submarines: ballast tanks control buoyancy. Ships: hull displaces water. Hot air balloons: air density difference creates upthrust.",
          },
        ],
        keyFormulas: [
          { name: "Upthrust", statement: "$U = \\rho_f V g$" },
          { name: "Floating", statement: "$\\rho_o V_{sub} = \\rho_f V$" },
          { name: "Apparent weight", statement: "$W_{app} = W - U$" },
        ],
        workedExample: {
          problem: "A 0.1 m³ block of density 500 kg/m³ floats in water. What is upthrust?",
          solution: "Submerged volume = 0.06 m³ (60% of 0.1). $U = 1000 \\times 0.06 \\times 9.81 = 588\\ N$.",
        },
      },
      questions: [
        {
          id: "cial-p-u2-bu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does Archimedes' principle state?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Upthrust equals weight of displaced fluid" },
              { id: "b", text: "Pressure increases with depth" },
              { id: "c", text: "Density is mass per volume" },
              { id: "d", text: "Force equals mass times acceleration" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Archimedes", statement: "$U = $ weight of displaced fluid." }],
            steps: [{ reasoning: "Upthrust = weight of displaced fluid.", marks: 1, markCode: "A" }],
            finalAnswer: "Upthrust = weight of displaced fluid",
          },
        },
        {
          id: "cial-p-u2-bu-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A 0.02 m³ object is fully submerged in water. Find upthrust ($g = 9.81$).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Upthrust", statement: "$U = \\rho_f V g$." }],
            steps: [
              { reasoning: "$U = 1000 \\times 0.02 \\times 9.81$.", marks: 1, markCode: "M" },
              { reasoning: "$U = 196\\ N$.", marks: 1, markCode: "M" },
              { reasoning: "Independent of object density.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$U = 196\\ N$",
          },
        },
        {
          id: "cial-p-u2-bu-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does an object float higher in salt water than fresh water?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Density", statement: "Salt water denser → less volume needed for same upthrust." }],
            steps: [
              { reasoning: "Salt water has higher density than fresh.", marks: 1, markCode: "M" },
              { reasoning: "Upthrust = weight of displaced fluid — denser fluid gives more upthrust per volume.", marks: 1, markCode: "M" },
              { reasoning: "Less volume needs to be displaced to support same weight.", marks: 1, markCode: "M" },
              { reasoning: "Object floats higher (less submerged).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Denser fluid → less submerged",
          },
        },
        {
          id: "cial-p-u2-bu-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Buoyancy.",
          parts: [
            { label: "a", prompt: "State Archimedes' principle.", marks: 2 },
            { label: "b", prompt: "A 0.05 m³ object floats with 60% submerged. Find upthrust.", marks: 3 },
            { label: "c", prompt: "What is apparent weight?", marks: 2 },
            { label: "d", prompt: "How do submarines control buoyancy?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Buoyancy", statement: "$U=\\rho_f Vg$; apparent weight = W−U." }],
            steps: [
              { part: "a", reasoning: "Upthrust = weight of displaced fluid.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "$V_{sub} = 0.6 \\times 0.05 = 0.03\\ m^3$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$U = 1000 \\times 0.03 \\times 9.81 = 294\\ N$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$U = 294\\ N$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$W_{app} = W - U$ — weight in fluid.", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Ballast tanks filled/emptied.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Control displaced water volume → control buoyancy.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Archimedes (b) 294 N (c) W−U (d) ballast tanks",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-p-u2-density-buoyancy-notes",
      title: "Density, pressure and buoyancy — revision notes",
      summary: "Density, hydrostatic pressure, Archimedes' principle.",
      sections: [
        {
          heading: "Density & pressure",
          body: "$\\rho = m/V$; $P = F/A = \\rho gh$. Pressure increases with depth. Fraction submerged = $\\rho_o/\\rho_f$.",
        },
        {
          heading: "Buoyancy",
          body: "Upthrust = weight of displaced fluid ($U = \\rho_f Vg$). Floats when U = W. Salt water denser → floats higher. Submarines use ballast tanks.",
        },
        {
          heading: "Exam checklist",
          body: "For floating objects use $\\rho_o V_{sub} = \\rho_f V_{total}$. Upthrust independent of object density — depends on displaced volume.",
        },
      ],
    },
  ],
};
