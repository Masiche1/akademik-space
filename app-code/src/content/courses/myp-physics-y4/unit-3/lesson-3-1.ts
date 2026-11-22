import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "mypp4-u3-lesson-3-1",
  code: "3-1",
  title: "Circuits, Ohm's Law and Resistance",
  goal: "I CAN calculate voltage, current and resistance in circuits and compare series and parallel circuits.",
  standards: [
    "Key concept: Relationships",
    "MYP Sciences: Electricity",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Current", definition: "Flow of charge; measured in amperes (A). $I = Q/t$." },
    { term: "Voltage", definition: "Energy per unit charge; measured in volts (V)." },
    { term: "Resistance", definition: "Opposition to current; $R = V/I$, measured in ohms (Ω)." },
    { term: "Ohm's law", definition: "$V = IR$ — current proportional to voltage for ohmic conductors." },
    { term: "Series circuit", definition: "Single path; same current everywhere; voltages add." },
    { term: "Parallel circuit", definition: "Multiple paths; same voltage across each branch; currents add." },
  ],
  concepts: [
    {
      id: "mypp4-u3-ohm",
      title: "Ohm's law and resistance",
      skill: "Use $V = IR$ to calculate circuit quantities and identify ohmic conductors.",
      lesson: {
        sections: [
          {
            heading: "Ohm's law",
            body: "$V = IR$. Voltage (V) = current (A) × resistance (Ω). A 4 Ω resistor with 12 V across it carries $I = 12/4 = 3$ A.",
          },
          {
            heading: "I–V graphs",
            body: "Ohmic conductor: straight line through origin (R constant). Filament bulb: curve flattening — resistance rises with temperature. Diode: conducts one way only.",
          },
          {
            heading: "Series resistance",
            body: "Resistors in series add: $R_{total} = R_1 + R_2 + ...$. The same current flows through all. Total voltage divides across resistors proportionally to resistance.",
          },
        ],
        keyFormulas: [
          { name: "Ohm's law", statement: "$V = IR$" },
          { name: "Series R", statement: "$R_T = R_1 + R_2 + ...$" },
          { name: "Power", statement: "$P = VI = I^2R = V^2/R$" },
        ],
        workedExample: {
          problem: "A 6 Ω resistor is connected to a 24 V battery. Find the current.",
          solution: "$I = V/R = 24/6 = 4$ A.",
        },
      },
      questions: [
        {
          id: "mypp4-u3-ohm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the unit of resistance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ampere" },
              { id: "b", text: "Volt" },
              { id: "c", text: "Watt" },
              { id: "d", text: "Ohm" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Resistance", statement: "$R = V/I$, unit Ω." }],
            steps: [
              { reasoning: "Resistance measured in ohms (Ω).", working: "\\Omega", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Ohm",
            commonErrors: ["Confusing with volt/ampere."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mypp4-u3-ohm-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 12 V battery is connected to a 3 Ω resistor. What current flows?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "36 A" },
              { id: "b", text: "4 A" },
              { id: "c", text: "0.25 A" },
              { id: "d", text: "9 A" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "I = V/R", statement: "$I = 12/3$" }],
            steps: [
              { reasoning: "Rearrange Ohm's law.", working: "I=\\frac{V}{R}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "4\\ \\text{A}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 A",
            commonErrors: ["Multiplying V×R instead of dividing."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-ohm-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two resistors of 4 Ω and 6 Ω are connected in series across a 20 V supply. What is the total resistance and current?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "24 Ω and 0.83 A" },
              { id: "b", text: "10 Ω and 2 A" },
              { id: "c", text: "10 Ω and 0.5 A" },
              { id: "d", text: "2.4 Ω and 8.3 A" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Series R", statement: "$R_T = 4 + 6 = 10$ Ω" }],
            steps: [
              { reasoning: "Series resistances add.", working: "4+6=10\\ \\Omega", marks: 1, markCode: "M" },
              { reasoning: "Current = $V/R_T = 20/10$.", working: "\\frac{20}{10}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: 2 A.", working: "2\\ \\text{A}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10 Ω and 2 A",
            commonErrors: ["Using parallel formula for series."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u3-ohm-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A 12 V battery powers two bulbs: bulb A is 4 Ω, bulb B is 6 Ω. First connected in series, then in parallel.",
          parts: [
            { label: "a", prompt: "Calculate total resistance in series.", marks: 1 },
            { label: "b", prompt: "Calculate current through each bulb in series.", marks: 2 },
            { label: "c", prompt: "Calculate total resistance in parallel.", marks: 2 },
            { label: "d", prompt: "Explain why bulbs are brighter in parallel.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Series/parallel", statement: "Series adds; parallel: $1/R_T = 1/R_1 + 1/R_2$." },
              { kind: "principle", name: "Brightness", statement: "Brighter = more power = higher voltage/current." },
            ],
            steps: [
              { part: "a", reasoning: "$R_T = 4 + 6 = 10$ Ω.", working: "10\\ \\Omega", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Same current in series: $I = 12/10 = 1.2$ A through both.", working: "\\frac{12}{10}=1.2\\ \\text{A}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State current.", working: "1.2\\ \\text{A}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$1/R_T = 1/4 + 1/6 = 5/12$ → $R_T = 2.4$ Ω.", working: "\\frac{1}{4}+\\frac{1}{6}=\\frac{5}{12}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Invert to get 2.4 Ω.", working: "2.4\\ \\Omega", marks: 1, markCode: "A" },
              { part: "d", reasoning: "In parallel each bulb gets full 12 V; in series voltage splits.", working: "\\text{full V each}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Higher voltage → more power $P = V^2/R$ → brighter.", working: "P=\\frac{V^2}{R}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Conclusion: bulbs brighter in parallel.", working: "\\text{brighter}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 10 Ω (b) 1.2 A each (c) 2.4 Ω (d) full voltage each → more power → brighter",
            commonErrors: ["Using series formula for parallel resistance."],
            examinerNote: "A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 M1 A1 for (d).",
          },
        },
        {
          id: "mypp4-u3-ohm-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Ohm's law states that for an ohmic conductor:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$V = IR$" },
              { id: "b", text: "$V = I/R$" },
              { id: "c", text: "$I = VR$" },
              { id: "d", text: "$R = VI$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Ohm's law", statement: "Voltage = current × resistance." }],
            steps: [
              { reasoning: "$V = IR$ is Ohm's law.", working: "V=IR", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $V = IR$",
            commonErrors: ["Rearranging incorrectly."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u3-ohm-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 6 Ω resistor is connected across a 18 V battery. Calculate the current.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 3, unit: "A" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "I = V/R", statement: "Rearrange Ohm's law." }],
            steps: [
              { reasoning: "Apply $I = V/R$.", working: "\\frac{18}{6}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "3\\ \\text{A}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 A",
            commonErrors: ["Multiplying V × R."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-ohm-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A current of 2 A flows through a resistor with 15 V across it. Calculate the resistance.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 7.5, unit: "Ω" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "R = V/I", statement: "Rearrange Ohm's law." }],
            steps: [
              { reasoning: "Apply $R = V/I$.", working: "\\frac{15}{2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "7.5\\ \\Omega", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7.5 Ω",
            commonErrors: ["Using I/V instead of V/I."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-ohm-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "On an I–V graph, which component shows a straight line through the origin?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Filament bulb" },
              { id: "b", text: "Thermistor" },
              { id: "c", text: "Diode" },
              { id: "d", text: "Ohmic conductor (e.g. fixed resistor)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "I–V graphs", statement: "Ohmic conductor: constant R → straight line through origin." }],
            steps: [
              { reasoning: "Constant resistance gives linear I–V.", working: "\\text{linear}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** ohmic conductor",
            commonErrors: ["Thinking all components give straight lines."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-ohm-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Three resistors of 3 Ω, 5 Ω and 7 Ω are connected in series. What is the total resistance?",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 15, unit: "Ω" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Series R", statement: "$R_T = R_1 + R_2 + R_3$" }],
            steps: [
              { reasoning: "Add resistances in series.", working: "3+5+7", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "15\\ \\Omega", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15 Ω",
            commonErrors: ["Using the parallel formula."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-ohm-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A 24 V battery is connected across a 8 Ω resistor. Calculate the power dissipated by the resistor using $P = I^2R$ or $P = V^2/R$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 72, unit: "W" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "P = VI", statement: "Power = voltage × current." },
              { kind: "formula", name: "I = V/R", statement: "$I = 24/8 = 3$ A, then $P = VI = 24 \\times 3$." },
            ],
            steps: [
              { reasoning: "Find current: $I = 24/8 = 3$ A.", working: "\\frac{24}{8}=3\\ \\text{A}", marks: 1, markCode: "M" },
              { reasoning: "Apply $P = VI = 24 \\times 3$ (or $V^2/R = 576/8$).", working: "24\\times3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: 72 W.", working: "72\\ \\text{W}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "72 W",
            commonErrors: ["Using $P = VI$ with wrong units or forgetting step."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u3-ohm-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A filament bulb's I–V graph curves and flattens as voltage increases. What does this tell you about its resistance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Resistance decreases to zero" },
              { id: "b", text: "The bulb obeys Ohm's law perfectly" },
              { id: "c", text: "Resistance increases as the bulb heats up" },
              { id: "d", text: "Resistance stays constant" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Non-ohmic", statement: "Filament resistance rises with temperature → I–V curve flattens." }],
            steps: [
              { reasoning: "Flattening curve means current rises slower than voltage.", working: "\\text{curve flattens}", marks: 1, markCode: "M" },
              { reasoning: "Heating filament → resistance increases.", working: "R\\ \\text{increases}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** resistance increases with temperature",
            commonErrors: ["Expecting all components to obey Ohm's law."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u3-ohm-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A diode allows current to flow:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "in both directions equally" },
              { id: "b", text: "only when cold" },
              { id: "c", text: "never" },
              { id: "d", text: "in one direction only" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Diode", statement: "Non-ohmic component conducting in one direction only." }],
            steps: [
              { reasoning: "Diode = one-way conductor.", working: "\\text{one-way}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** one direction only",
            commonErrors: ["Thinking diodes are ohmic."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u3-ohm-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two resistors of 10 Ω and 20 Ω are connected in series across a 60 V supply. What is the current in the circuit?",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 2, unit: "A" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Series R + Ohm", statement: "$R_T = 30$ Ω; $I = 60/30$" }],
            steps: [
              { reasoning: "Total resistance = $10 + 20 = 30$ Ω; $I = 60/30$.", working: "\\frac{60}{30}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "2\\ \\text{A}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 A",
            commonErrors: ["Using individual resistances instead of total."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-ohm-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain what an ohmic conductor is and why its I–V graph is a straight line through the origin.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ohmic conductor", statement: "Obeys Ohm's law: $V = IR$ with constant $R$." },
              { kind: "principle", name: "I–V graph", statement: "Constant resistance → current proportional to voltage." },
            ],
            steps: [
              { reasoning: "An ohmic conductor obeys Ohm's law — resistance stays constant.", working: "V=IR", marks: 1, markCode: "M" },
              { reasoning: "Examples: fixed resistors, constantan wire (at constant temperature).", working: "\\text{examples}", marks: 1, markCode: "A" },
              { reasoning: "Since $I = V/R$ with fixed $R$, $I \\propto V$ → straight line.", working: "I\\propto V", marks: 1, markCode: "M" },
              { reasoning: "Line passes through origin because zero voltage → zero current.", working: "\\text{origin}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Constant R → I ∝ V → straight line through origin",
            commonErrors: ["Claiming all conductors are ohmic."],
            examinerNote: "M1 A1 M1 A1.",
          },
        },
        {
          id: "mypp4-u3-ohm-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A 12 V battery is connected across two resistors in series: $R_1 = 4$ Ω and $R_2 = 8$ Ω.",
          parts: [
            { label: "a", prompt: "Calculate the total resistance and circuit current.", marks: 2 },
            { label: "b", prompt: "Calculate the voltage across each resistor.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Series R", statement: "$R_T = 4 + 8 = 12$ Ω." },
              { kind: "principle", name: "Voltage division", statement: "Voltage splits in proportion to resistance." },
            ],
            steps: [
              { part: "a", reasoning: "$R_T = 12$ Ω; $I = 12/12 = 1$ A.", working: "R_T=12\\ \\Omega,\\ I=1\\ \\text{A}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State values.", working: "12\\ \\Omega,\\ 1\\ \\text{A}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$V_1 = IR_1 = 1 \\times 4 = 4$ V; $V_2 = 1 \\times 8 = 8$ V.", working: "V_1=4\\ \\text{V},\\ V_2=8\\ \\text{V}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Check: $4 + 8 = 12$ V = supply.", working: "4+8=12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 12 Ω, 1 A (b) 4 V and 8 V",
            commonErrors: ["Giving each resistor the full 12 V."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b).",
          },
        },
        {
          id: "mypp4-u3-ohm-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two identical bulbs are connected first in series, then in parallel, across the same 12 V supply. In which arrangement does each bulb dissipate more power, and why?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Parallel — each bulb receives the full 12 V" },
              { id: "b", text: "Both arrangements give equal power" },
              { id: "c", text: "Neither — bulbs don't dissipate power" },
              { id: "d", text: "Series — current is higher" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Voltage in parallel", statement: "Each parallel branch gets full supply voltage." },
              { kind: "formula", name: "P = V²/R", statement: "Higher voltage → more power for same R." },
            ],
            steps: [
              { reasoning: "In parallel each bulb has 12 V across it; in series voltage splits.", working: "\\text{full }V", marks: 1, markCode: "M" },
              { reasoning: "$P = V^2/R$ → higher V gives more power.", working: "P=\\frac{V^2}{R}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (b).", working: "\\text{(b)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** parallel — full voltage each",
            commonErrors: ["Thinking series gives more power."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypp4-u3-circuits",
      title: "Series and parallel circuits",
      skill: "Compare circuit arrangements and analyse their effects on current and voltage.",
      lesson: {
        sections: [
          {
            heading: "Series circuits",
            body: "One path — if one bulb breaks, all go out. Same current everywhere; voltages add to supply. Used in fairy lights, simple circuits.",
          },
          {
            heading: "Parallel circuits",
            body: "Multiple paths — each branch independent. Same voltage across each branch; currents add. Household wiring is parallel so appliances work independently.",
          },
          {
            heading: "Domestic circuits",
            body: "Fuses and circuit breakers protect against overload; earth wire safety; plugs have live, neutral, earth. Power $P = VI$; a 230 V, 10 A socket can supply up to 2300 W.",
          },
        ],
        keyFormulas: [
          { name: "Series", statement: "Same I; voltages add; R adds" },
          { name: "Parallel", statement: "Same V; currents add; 1/R adds" },
          { name: "Power", statement: "$P = VI$ watts" },
        ],
        workedExample: {
          problem: "Two 100 W bulbs in parallel on 230 V — what is total power?",
          solution: "Each draws 100 W; total 200 W (assuming same voltage).",
        },
      },
      questions: [
        {
          id: "mypp4-u3-circ-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a series circuit, what is the same through every component?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Voltage" },
              { id: "b", text: "Power" },
              { id: "c", text: "Current" },
              { id: "d", text: "Resistance" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Series", statement: "Single path → same current." }],
            steps: [
              { reasoning: "Charge has only one path — same current everywhere.", working: "\\text{current}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Current",
            commonErrors: ["Thinking voltage is same in series."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u3-circ-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why are household appliances wired in parallel?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To reduce current" },
              { id: "b", text: "To use less wire" },
              { id: "c", text: "To save energy" },
              { id: "d", text: "So each appliance gets full mains voltage and works independently" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Parallel", statement: "Each branch gets full voltage; independent operation." }],
            steps: [
              { reasoning: "Parallel gives full mains voltage to each appliance.", working: "\\text{full V}", marks: 1, markCode: "M" },
              { reasoning: "Independent — one can be off without affecting others.", working: "\\text{independent}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Full voltage + independent operation",
            commonErrors: ["Thinking series saves energy."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-circ-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A 60 W bulb and a 100 W bulb are connected in series across 230 V. Which is brighter and why?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both equally bright" },
              { id: "b", text: "The 100 W bulb — higher rated power" },
              { id: "c", text: "The 60 W bulb — it has higher resistance so takes more voltage" },
              { id: "d", text: "The 100 W bulb — more current flows through it" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Series bulbs", statement: "Lower-wattage bulb has higher R → larger share of voltage → brighter." }],
            steps: [
              { reasoning: "In series same current; lower wattage = higher resistance.", working: "\\text{higher }R", marks: 1, markCode: "M" },
              { reasoning: "$P = I^2R$ — higher R dissipates more power.", working: "P=I^2R", marks: 1, markCode: "M" },
              { reasoning: "So the 60 W bulb is brighter in series.", working: "\\text{60W brighter}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(b) — counterintuitive series result",
            commonErrors: ["Assuming higher rated wattage = brighter in series."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u3-circ-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A domestic circuit has a 13 A fuse and 230 V mains. A kettle (2200 W), fridge (150 W) and TV (100 W) are plugged in.",
          parts: [
            { label: "a", prompt: "Calculate total power used.", marks: 1 },
            { label: "b", prompt: "Calculate total current drawn.", marks: 2 },
            { label: "c", prompt: "Explain why the fuse is 13 A.", marks: 2 },
            { label: "d", prompt: "What happens if a faulty appliance draws 4000 W? Explain the role of the fuse.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "P = VI", statement: "$I = P/V$; fuse protects against overload." },
              { kind: "principle", name: "Fuse", statement: "Melts when current exceeds rating → breaks circuit." },
            ],
            steps: [
              { part: "a", reasoning: "Total = 2200 + 150 + 100 = 2450 W.", working: "2450\\ \\text{W}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$I = P/V = 2450/230 ≈ 10.7$ A.", working: "\\frac{2450}{230}=10.7\\ \\text{A}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct value.", working: "10.7\\ \\text{A}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "13 A is above normal 10.7 A but below dangerous levels.", working: "\\text{above normal}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Protects wiring from overheating/fire if current spikes.", working: "\\text{fire protection}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Current = $4000/230 ≈ 17.4$ A > 13 A → fuse melts.", working: "17.4>13\\ \\text{A}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Fuse wire heats and melts, breaking the circuit.", working: "\\text{fuse melts}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Prevents overheating, fire and electric shock.", working: "\\text{safety}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2450 W (b) 10.7 A (c) 13 A allows normal use, protects against overload (d) 17.4 A > 13 A → fuse melts, circuit breaks",
            commonErrors: ["Not converting W to A via $I = P/V`."],
            examinerNote: "A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 M1 A1 for (d).",
          },
        },
        {
          id: "mypp4-u3-circ-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a parallel circuit, what is the same across each branch?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Current" },
              { id: "b", text: "Resistance" },
              { id: "c", text: "Voltage" },
              { id: "d", text: "Power" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Parallel", statement: "Each branch connects directly across the supply → same voltage." }],
            steps: [
              { reasoning: "All branches span the same two points → same voltage.", working: "\\text{same }V", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Voltage",
            commonErrors: ["Confusing with series (same current)."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u3-circ-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Two resistors of 4 Ω and 6 Ω are connected in parallel. Calculate the total resistance.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 2.4, unit: "Ω" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Parallel R", statement: "$1/R_T = 1/4 + 1/6 = 5/12$ → $R_T = 2.4$ Ω." }],
            steps: [
              { reasoning: "Apply $1/R_T = 1/R_1 + 1/R_2$.", working: "\\frac{1}{4}+\\frac{1}{6}=\\frac{5}{12}", marks: 1, markCode: "M" },
              { reasoning: "Invert: $R_T = 12/5 = 2.4$ Ω.", working: "2.4\\ \\Omega", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2.4 Ω",
            commonErrors: ["Adding resistances as in series."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-circ-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a series circuit with a 12 V supply and two resistors, the voltage across one resistor is 5 V. What is the voltage across the other?",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 7, unit: "V" },
            ],
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Series voltage", statement: "Voltages add to supply voltage." }],
            steps: [
              { reasoning: "Apply $V_1 + V_2 = V_{supply}$.", working: "12-5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "7\\ \\text{V}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7 V",
            commonErrors: ["Giving each resistor 12 V."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-circ-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does one broken bulb cause all bulbs in a series circuit to go out, but not in a parallel circuit?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Parallel bulbs have no current" },
              { id: "b", text: "Series bulbs share the same current path — a break stops all current" },
              { id: "c", text: "Parallel bulbs are wired backwards" },
              { id: "d", text: "Series bulbs are brighter" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Circuit paths", statement: "Series = single path; break stops everything. Parallel = independent paths." }],
            steps: [
              { reasoning: "Series has only one path — a break interrupts all current.", working: "\\text{one path}", marks: 1, markCode: "M" },
              { reasoning: "Parallel branches are independent — others still complete.", working: "\\text{independent}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** single path interrupted",
            commonErrors: ["Not realising parallel branches are independent."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-circ-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 60 W bulb operates at 230 V. Calculate the current it draws.",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 0.26, tolerance: 0.01, unit: "A" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "I = P/V", statement: "Current = power ÷ voltage." }],
            steps: [
              { reasoning: "Apply $I = P/V = 60/230$.", working: "\\frac{60}{230}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: ≈0.26 A.", working: "0.26\\ \\text{A}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.26 A",
            commonErrors: ["Multiplying P × V instead of dividing."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-circ-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A 100 W bulb and a 60 W bulb are connected in parallel across 230 V. What is the total power drawn?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "160 W" },
              { id: "b", text: "40 W" },
              { id: "c", text: "100 W" },
              { id: "d", text: "60 W" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Parallel power", statement: "Powers add in parallel — each bulb gets full voltage." }],
            steps: [
              { reasoning: "Each bulb operates at its rated power in parallel.", working: "P_1=100,P_2=60", marks: 1, markCode: "M" },
              { reasoning: "Total = $100 + 60 = 160$ W.", working: "160\\ \\text{W}", marks: 1, markCode: "M" },
              { reasoning: "Match choice (a).", working: "\\text{(a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** 160 W",
            commonErrors: ["Thinking only the larger bulb's power counts."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypp4-u3-circ-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A 13 A fuse protects a circuit on 230 V mains. What is the maximum power it can safely carry?",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 2990, unit: "W" },
            ],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "P = VI", statement: "Max power = voltage × fuse rating." }],
            steps: [
              { reasoning: "Apply $P = VI = 230 \\times 13$.", working: "230\\times13", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "2990\\ \\text{W}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2990 W",
            commonErrors: ["Multiplying wrong values."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-circ-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The earth wire in a plug is there to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "provide a safe path for fault current to earth" },
              { id: "b", text: "increase the voltage" },
              { id: "c", text: "save energy" },
              { id: "d", text: "carry the main current" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Earth wire", statement: "Safety wire conducting fault current to ground, triggering fuse/breaker." }],
            steps: [
              { reasoning: "Earth wire = safety path for faults.", working: "\\text{safety}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** safe path for fault current",
            commonErrors: ["Thinking earth wire carries normal current."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypp4-u3-circ-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A circuit has three branches in parallel carrying currents of 2 A, 3 A and 5 A. What is the total current from the supply?",
          response: {
            type: "numeric",
            parts: [
              { label: "Answer", answer: 10, unit: "A" },
            ],
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Parallel current", statement: "Branch currents add to give total current." }],
            steps: [
              { reasoning: "Add branch currents: $2 + 3 + 5$.", working: "2+3+5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "10\\ \\text{A}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10 A",
            commonErrors: ["Averaging instead of adding."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypp4-u3-circ-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a fuse or circuit breaker is essential in a domestic electrical circuit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Overload", statement: "Excessive current overheats wires → fire risk." },
              { kind: "principle", name: "Fuse/breaker", statement: "Melts or trips when current exceeds rating → breaks circuit." },
            ],
            steps: [
              { reasoning: "Faults or overloads can cause dangerously high current.", working: "\\text{high }I", marks: 1, markCode: "M" },
              { reasoning: "High current heats wires ($I^2R$) → fire risk.", working: "I^2R\\ \\text{heating}", marks: 1, markCode: "M" },
              { reasoning: "Fuse melts / breaker trips at rated current, cutting supply.", working: "\\text{breaks circuit}", marks: 1, markCode: "A" },
              { reasoning: "Protects wiring and prevents electric shock/fire.", working: "\\text{safety}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cuts circuit when current exceeds safe level → prevents overheating/fire",
            commonErrors: ["Thinking fuses increase current or are optional."],
            examinerNote: "M1 M1 A1 A1.",
          },
        },
        {
          id: "mypp4-u3-circ-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A kettle rated 2200 W and a toaster rated 800 W are both connected to 230 V mains.",
          parts: [
            { label: "a", prompt: "Calculate the current drawn by each appliance.", marks: 2 },
            { label: "b", prompt: "Explain whether both can safely run on a 13 A fuse simultaneously.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "I = P/V", statement: "Current = power ÷ voltage for each appliance." },
              { kind: "principle", name: "Fuse rating", statement: "Total current must stay below fuse rating." },
            ],
            steps: [
              { part: "a", reasoning: "Kettle: $2200/230 ≈ 9.6$ A; toaster: $800/230 ≈ 3.5$ A.", working: "9.6\\ \\text{A and }3.5\\ \\text{A}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both values correct.", working: "9.6,\\ 3.5\\ \\text{A}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Total ≈ 13.1 A — marginally exceeds 13 A fuse.", working: "13.1>13", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Risky — fuse may melt; safer to use different sockets/circuit.", working: "\\text{risky}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) ≈9.6 A and ≈3.5 A (b) total ≈13.1 A exceeds 13 A — unsafe",
            commonErrors: ["Not summing currents for the fuse check."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b).",
          },
        },
        {
          id: "mypp4-u3-circ-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two bulbs are connected in series across a 230 V supply. One bulb is unscrewed slightly. What happens to the brightness of the other bulb?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It goes out completely" },
              { id: "b", text: "It stays the same" },
              { id: "c", text: "It gets brighter" },
              { id: "d", text: "It gets dimmer" },
            ],
            correctChoiceIa: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Series", statement: "Single path — any break stops all current." }],
            steps: [
              { reasoning: "Unscrewing breaks the circuit — current stops.", working: "\\text{circuit open}", marks: 1, markCode: "M" },
              { reasoning: "No current → both bulbs go out.", working: "I=0", marks: 1, markCode: "M" },
              { reasoning: "Match choice (d).", working: "\\text{(d)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** goes out completely",
            commonErrors: ["Thinking the other bulb stays lit."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
  ],
};
