import type { Lesson } from "../../../types.ts";

export const lesson312: Lesson = {
  id: "cial-p-u3-lesson-3-2",
  code: "3-2",
  title: "Thermodynamics",
  goal: "I CAN apply first law of thermodynamics and interpret p–V diagrams.",
  standards: ["9702 17: thermodynamics"],
  vocabulary: [
    { term: "Internal energy", definition: "Total KE + PE of particles — $U$ (J)." },
    { term: "First law", definition: "$\\Delta U = Q + W$ — energy conservation." },
    { term: "Work done by gas", definition: "$W = P\\Delta V$ — expansion/compression." },
    { term: "Isothermal", definition: "Constant temperature process." },
    { term: "Adiabatic", definition: "No heat exchange with surroundings." },
    { term: "Isobaric", definition: "Constant pressure process." },
  ],
  concepts: [
    {
      id: "cial-p-u3-first-law",
      title: "First law of thermodynamics",
      skill: "Apply $\\Delta U = Q + W$ to gas processes.",
      lesson: {
        sections: [
          {
            heading: "First law",
            body: "$\\Delta U = Q + W$ where $Q$ = heat supplied to gas, $W$ = work done ON gas ($W = -P\\Delta V$ for expansion). Sign convention: $Q > 0$ = heat in; $W > 0$ = work done on gas (compression). Alternatively $\\Delta U = Q - W_{by}$ where $W_{by} = P\\Delta V$.",
          },
          {
            heading: "p–V diagrams",
            body: "Area under curve = work done by gas. Isothermal: $PV = $ const (hyperbola). Adiabatic: steeper than isothermal. Isobaric: horizontal line. Isochoric: vertical line (no work done).",
          },
          {
            heading: "Processes",
            body: "Isothermal: $\\Delta U = 0$, $Q = W$. Adiabatic: $Q = 0$, $\\Delta U = -W$. Isobaric: $W = P\\Delta V$. Free expansion: $W = 0$, $Q = 0$, $\\Delta U = 0$ (ideal gas).",
          },
        ],
        keyFormulas: [
          { name: "First law", statement: "$\\Delta U = Q + W$" },
          { name: "Work", statement: "$W = P\\Delta V$" },
        ],
        workedExample: {
          problem: "A gas expands at constant pressure 100 kPa from 2 m³ to 3 m³. Work done by gas?",
          solution: "$W = P\\Delta V = 100,000 \\times 1 = 100,000\\ J = 100\\ kJ$.",
        },
      },
      questions: [
        {
          id: "cial-p-u3-1l-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the first law of thermodynamics state?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Energy is conserved — $\\Delta U = Q + W$" },
              { id: "b", text: "Heat flows from hot to cold" },
              { id: "c", text: "Entropy always increases" },
              { id: "d", text: "Absolute zero is unreachable" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "First law", statement: "$\\Delta U = Q + W$." }],
            steps: [{ reasoning: "First law = energy conservation.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\Delta U = Q + W$",
          },
        },
        {
          id: "cial-p-u3-1l-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A gas expands from 1 m³ to 3 m³ at constant pressure 200 kPa. Calculate work done by gas.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Work", statement: "$W = P\\Delta V$." }],
            steps: [
              { reasoning: "$\\Delta V = 3 - 1 = 2\\ m^3$.", marks: 1, markCode: "M" },
              { reasoning: "$W = 200,000 \\times 2 = 400,000\\ J$.", marks: 1, markCode: "M" },
              { reasoning: "$W = 400\\ kJ$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$W = 400\\ kJ$",
          },
        },
        {
          id: "cial-p-u3-1l-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In an isothermal process, what is $\\Delta U$ and why?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Isothermal", statement: "Constant T → constant average KE → $\\Delta U = 0$." }],
            steps: [
              { reasoning: "Isothermal = constant temperature.", marks: 1, markCode: "M" },
              { reasoning: "Temperature ∝ average KE → internal energy unchanged.", marks: 1, markCode: "M" },
              { reasoning: "$\\Delta U = 0$ for ideal gas.", marks: 1, markCode: "M" },
              { reasoning: "All heat in = work out ($Q = W$).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$\\Delta U = 0$ — constant temperature",
          },
        },
        {
          id: "cial-p-u3-1l-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "First law of thermodynamics.",
          parts: [
            { label: "a", prompt: "State the first law.", marks: 2 },
            { label: "b", prompt: "What is work done by a gas?", marks: 2 },
            { label: "c", prompt: "In an adiabatic process, what is Q?", marks: 1 },
            { label: "d", prompt: "A gas has 500 J heat supplied and does 300 J work. Find $\\Delta U$.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Thermodynamics", statement: "$\\Delta U = Q + W$; adiabatic Q=0." }],
            steps: [
              { part: "a", reasoning: "$\\Delta U = Q + W$ — energy conservation.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "$W = P\\Delta V$ — expansion work.", marks: 2, markCode: "A" },
              { part: "c", reasoning: "$Q = 0$ — no heat exchange.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$\\Delta U = Q - W_{by} = 500 - 300$.", marks: 2, markCode: "M" },
              { part: "d", reasoning: "$\\Delta U = 200\\ J$.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) ΔU=Q+W (b) PΔV (c) Q=0 (d) 200 J",
          },
        },
      ],
    },
    {
      id: "cial-p-u3-pv",
      title: "p–V diagrams",
      skill: "Interpret p–V diagrams for different thermodynamic processes.",
      lesson: {
        sections: [
          {
            heading: "Reading p–V diagrams",
            body: "p (y-axis) vs V (x-axis). Area under curve = work done by gas. Isobaric: horizontal line. Isochoric: vertical line (W=0). Isothermal: hyperbola ($PV$ = const). Adiabatic: steeper curve.",
          },
          {
            heading: "Cycles",
            body: "Closed cycle: net work = area enclosed. Clockwise cycle: net work done BY gas (heat engine). Anticlockwise: work done ON gas (refrigerator/heat pump). Efficiency = useful work/heat input.",
          },
          {
            heading: "Processes on p–V",
            body: "Expansion: V increases, work done by gas positive. Compression: V decreases, work done on gas positive. Isothermal expansion: gas absorbs heat, does work, $\\Delta U = 0$. Adiabatic expansion: gas cools, does work, $\\Delta U < 0$.",
          },
        ],
        keyFormulas: [
          { name: "Work", statement: "Area under p–V curve = work done" },
          { name: "Cycle", statement: "Net W = area enclosed" },
        ],
        workedExample: {
          problem: "A gas expands isobarically from 1 m³ to 4 m³ at 150 kPa then compresses isochorically back. Sketch p–V and find work.",
          solution: "Rectangle: $W = P\\Delta V = 150,000 \\times 3 = 450,000\\ J$.",
        },
      },
      questions: [
        {
          id: "cial-p-u3-pv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the area under a p–V diagram represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Work done" },
              { id: "b", text: "Heat transferred" },
              { id: "c", text: "Internal energy" },
              { id: "d", text: "Temperature" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "p–V diagram", statement: "Area = work done." }],
            steps: [{ reasoning: "Area under p–V = work.", marks: 1, markCode: "A" }],
            finalAnswer: "Work done",
          },
        },
        {
          id: "cial-p-u3-pv-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A gas expands isobarically at 100 kPa from 2 m³ to 5 m³. Find work done.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Isobaric work", statement: "$W = P\\Delta V$." }],
            steps: [
              { reasoning: "$W = 100,000 \\times (5-2)$.", marks: 1, markCode: "M" },
              { reasoning: "$W = 300,000\\ J$.", marks: 1, markCode: "M" },
              { reasoning: "$W = 300\\ kJ$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$W = 300\\ kJ$",
          },
        },
        {
          id: "cial-p-u3-pv-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is an isothermal curve steeper than an adiabatic curve on a p–V diagram?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "p–V curves", statement: "Adiabatic steeper — no heat exchange." }],
            steps: [
              { reasoning: "Isothermal: heat enters to maintain T.", marks: 1, markCode: "M" },
              { reasoning: "Adiabatic: no heat exchange — gas cools on expansion.", marks: 1, markCode: "M" },
              { reasoning: "Cooling → pressure drops faster → steeper curve.", marks: 1, markCode: "M" },
              { reasoning: "Adiabatic always steeper than isothermal from same point.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Adiabatic steeper — no heat input",
          },
        },
        {
          id: "cial-p-u3-pv-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "p–V diagrams.",
          parts: [
            { label: "a", prompt: "What does area under p–V represent?", marks: 1 },
            { label: "b", prompt: "Sketch/describe an isobaric process on p–V.", marks: 2 },
            { label: "c", prompt: "What is a clockwise cycle?", marks: 2 },
            { label: "d", prompt: "A gas does 600 J work expanding isobarically at 200 kPa. Find volume change.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "p–V", statement: "Area=W; clockwise=heat engine." }],
            steps: [
              { part: "a", reasoning: "Work done by gas.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Horizontal line at constant p.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "V changes, p constant.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Net work done by gas (heat engine).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Area enclosed = net work.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "$\\Delta V = W/P = 600,000/200,000$.", marks: 2, markCode: "M" },
              { part: "d", reasoning: "$\\Delta V = 3\\ m^3$.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) work (b) horizontal (c) heat engine (d) 3 m³",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-p-u3-thermo-notes",
      title: "Thermodynamics — revision notes",
      summary: "First law, work done, p–V diagrams and processes.",
      sections: [
        {
          heading: "First law",
          body: "$\\Delta U = Q + W$ ($W$ = work done ON gas). $W = P\\Delta V$. Isothermal: $\\Delta U = 0$; adiabatic: $Q = 0$; isobaric: constant P.",
        },
        {
          heading: "p–V diagrams",
          body: "Area under curve = work. Isobaric = horizontal; isochoric = vertical; isothermal = hyperbola; adiabatic = steeper. Clockwise cycle = heat engine.",
        },
        {
          heading: "Exam checklist",
          body: "Watch sign conventions — work done BY gas vs ON gas. For cycles find enclosed area.",
        },
      ],
    },
  ],
};
