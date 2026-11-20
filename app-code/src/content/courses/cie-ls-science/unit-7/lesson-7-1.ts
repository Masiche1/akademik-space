import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "cils-u7-lesson-7-1",
  code: "7-1",
  title: "Electric circuits and current",
  goal: "I CAN describe electric circuits, current, voltage and resistance.",
  standards: ["0893 Physics: electricity"],
  vocabulary: [
    { term: "Circuit", definition: "Complete path for electric current to flow." },
    { term: "Current", definition: "Flow of electric charge — measured in amps (A)." },
    { term: "Voltage", definition: "Electrical potential difference — measured in volts (V)." },
    { term: "Resistance", definition: "Opposition to current flow — measured in ohms (Ω)." },
    { term: "Series circuit", definition: "Components in single path — same current everywhere." },
    { term: "Parallel circuit", definition: "Components on separate branches — same voltage." },
  ],
  concepts: [
    {
      id: "cils-u7-circuits",
      title: "Circuits and current",
      skill: "Describe circuit components, current flow and series vs parallel.",
      lesson: {
        sections: [
          {
            heading: "Circuit components",
            body: "- **Cell/battery**: provides voltage\n- **Wire**: conducts current\n- **Bulb/resistor**: uses energy, produces heat/light\n- **Switch**: opens/closes circuit\n- **Ammeter**: measures current (in series)\n- **Voltmeter**: measures voltage (in parallel)",
          },
          {
            heading: "Current flow",
            body: "Conventional current flows positive→negative (opposite to electron flow). Needs complete circuit — break anywhere and current stops.",
          },
          {
            heading: "Series vs parallel",
            body: "Series: one path, same current, voltage shared. Parallel: multiple paths, same voltage, current shared.",
          },
        ],
        keyFormulas: [
          { name: "Ohm's law", statement: "V = I × R (voltage = current × resistance)" },
        ],
        workedExample: {
          problem: "A bulb has resistance 6 Ω and current 2 A. What's the voltage?",
          solution: "V = I × R = 2 × 6 = 12 V.",
        },
      },
      questions: [
        {
          id: "cils-u7-circ-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is needed for current to flow?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Complete circuit" },
              { id: "b", text: "Open switch" },
              { id: "c", text: "Insulator" },
              { id: "d", text: "High resistance" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Circuit", statement: "Complete path needed for current flow." },
            ],
            steps: [
              { reasoning: "Current needs unbroken path.", working: "complete", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Complete circuit",
            commonErrors: ["Choosing (b) — open switch breaks circuit."],
          },
        },
        {
          id: "cils-u7-circ-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the unit of current?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Current unit", statement: "Amps (A)." },
            ],
            steps: [
              { reasoning: "Current = amps.", working: "A", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Amps (A)",
            commonErrors: ["Saying volts — that's voltage."],
          },
        },
        {
          id: "cils-u7-circ-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare series and parallel circuits.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Series vs parallel", statement: "Series: one path, same current, voltage shared. Parallel: branches, same voltage, current shared." },
            ],
            steps: [
              { reasoning: "Series: single path — same current through all.", working: "series", marks: 1, markCode: "M" },
              { reasoning: "Parallel: multiple paths — same voltage across all.", working: "parallel", marks: 1, markCode: "M" },
              { reasoning: "If one fails in series, all stop; parallel keeps others working.", working: "reliability", marks: 1, markCode: "M" },
              { reasoning: "Clear comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Series: same current, voltage shared; parallel: same voltage, current shared.",
            commonErrors: ["Confusing which quantity is shared — series=current, parallel=voltage."],
          },
        },
        {
          id: "cils-u7-circ-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Analyse an electric circuit.",
          parts: [
            { label: "a", prompt: "Name three circuit components and their roles.", marks: 2 },
            { label: "b", prompt: "Where is ammeter placed and why?", marks: 2 },
            { label: "c", prompt: "Where is voltmeter placed and why?", marks: 2 },
            { label: "d", prompt: "What happens if switch opens?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Circuits", statement: "Components provide voltage/resistance; meters measure; open circuit stops current." },
            ],
            steps: [
              { part: "a", reasoning: "Battery (voltage), bulb (resistance), wire (conducts), switch (control).", working: "components", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Three+ correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "In series — measures current through component.", working: "series", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "In parallel across component — measures voltage difference.", working: "parallel", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Circuit broken → current stops → bulb goes out.", working: "break", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Explanation correct.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) battery/bulb/wire/switch (b) ammeter in series (c) voltmeter in parallel (d) current stops, bulb off",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Components correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Incomplete.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-3", descriptor: "Explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Voltmeter in series — must be parallel."],
          },
        },
      ],
    },
    {
      id: "cils-u7-ohms",
      title: "Ohm's law and resistance",
      skill: "Apply Ohm's law and describe factors affecting resistance.",
      lesson: {
        sections: [
          {
            heading: "Ohm's law",
            body: "V = I × R — voltage = current × resistance. Rearrange: I = V ÷ R, R = V ÷ I.",
          },
          {
            heading: "Resistance factors",
            body: "- **Length**: longer wire = more resistance\n- **Thickness**: thinner = more resistance\n- **Material**: different materials resist differently\n- **Temperature**: heating increases resistance (usually)",
          },
          {
            heading: "Ohmic vs non-ohmic",
            body: "Ohmic: V/I constant (resistor, wire at constant temp). Non-ohmic: resistance changes (bulb filament heats up, diode).",
          },
        ],
        keyFormulas: [
          { name: "Ohm's law", statement: "V = I × R; I = V ÷ R; R = V ÷ I" },
        ],
        workedExample: {
          problem: "A 12 V battery drives 3 A through a resistor. What's R?",
          solution: "R = V ÷ I = 12 ÷ 3 = 4 Ω.",
        },
      },
      questions: [
        {
          id: "cils-u7-ohm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is Ohm's law?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "V = I × R" },
              { id: "b", text: "V = I ÷ R" },
              { id: "c", text: "R = V × I" },
              { id: "d", text: "I = V + R" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Ohm's law", statement: "V = IR." },
            ],
            steps: [
              { reasoning: "Ohm's law: V = I × R.", working: "IR", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** V = I × R",
            commonErrors: ["Inverting — V=IR not V/R."],
          },
        },
        {
          id: "cils-u7-ohm-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A resistor has V=6 V, I=2 A. Calculate R.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Ohm's law", statement: "R = V ÷ I = 6 ÷ 2 = 3 Ω" },
            ],
            steps: [
              { reasoning: "R = V ÷ I.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "= 3 Ω.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 Ω",
            commonErrors: ["Using V×I — rearrange correctly."],
          },
        },
        {
          id: "cils-u7-ohm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how wire length and thickness affect resistance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Resistance factors", statement: "Longer = more resistance; thinner = more resistance." },
            ],
            steps: [
              { reasoning: "Longer wire = more collisions → higher resistance.", working: "length", marks: 1, markCode: "M" },
              { reasoning: "Thinner wire = fewer electrons can flow → higher resistance.", working: "thickness", marks: 1, markCode: "M" },
              { reasoning: "Both increase resistance — used in variable resistors.", working: "both", marks: 1, markCode: "M" },
              { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Longer and thinner wires have higher resistance.",
            commonErrors: ["Thinking thicker = more resistance — opposite is true."],
          },
        },
        {
          id: "cils-u7-ohm-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Investigate Ohm's law.",
          parts: [
            { label: "a", prompt: "State Ohm's law.", marks: 1 },
            { label: "b", prompt: "Describe an experiment to test it.", marks: 3 },
            { label: "c", prompt: "What graph would you plot?", marks: 2 },
            { label: "d", prompt: "When does Ohm's law not apply?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ohm's law", statement: "V=IR constant for ohmic conductors; fails when temperature/resistance changes." },
            ],
            steps: [
              { part: "a", reasoning: "V = I × R — voltage proportional to current at constant resistance.", working: "law", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Vary voltage, measure current for fixed resistor; plot V vs I.", working: "experiment", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Method valid.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Controlled.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "V vs I — straight line through origin, gradient = R.", working: "graph", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Non-ohmic: filament bulb (heats up), diode, thermistor — resistance changes.", working: "non-ohmic", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Examples correct.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) V=IR (b) vary V measure I (c) V-I graph straight line (d) filament/diode/thermistor",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Experiment good.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Examples good.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Ohm's law assumes constant temperature/resistance."],
          },
        },
      ],
    },
    {
      id: "cils-u7-power",
      title: "Electrical power and energy",
      skill: "Calculate electrical power and energy, describe safety.",
      lesson: {
        sections: [
          {
            heading: "Power",
            body: "Power = rate of energy transfer = voltage × current = P = V × I. Unit: watt (W).",
          },
          {
            heading: "Energy",
            body: "Energy = power × time = E = P × t. Unit: joule (J) or kilowatt-hour (kWh) for electricity bills.",
          },
          {
            heading: "Safety",
            body: "Fuses/circuit breakers protect against overload. Earth wire diverts fault current. Don't touch live wires.",
          },
        ],
        keyFormulas: [
          { name: "Power", statement: "P = V × I (watts)" },
          { name: "Energy", statement: "E = P × t (joules)" },
        ],
        workedExample: {
          problem: "A 60 W bulb runs for 2 hours. Energy used?",
          solution: "E = P × t = 60 × 2 = 120 Wh = 0.12 kWh.",
        },
      },
      questions: [
        {
          id: "cils-u7-power-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the formula for electrical power?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "P = V × I" },
              { id: "b", text: "P = V ÷ I" },
              { id: "c", text: "P = I ÷ V" },
              { id: "d", text: "P = V + I" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Power", statement: "P = VI." },
            ],
            steps: [
              { reasoning: "Power = voltage × current.", working: "VI", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** P = V × I",
            commonErrors: ["Using wrong formula — power = V × I."],
          },
        },
        {
          id: "cils-u7-power-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A device uses 12 V and 2 A. Calculate power.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Power", statement: "P = VI = 12 × 2 = 24 W" },
            ],
            steps: [
              { reasoning: "P = 12 × 2.", working: "24", marks: 1, markCode: "M" },
              { reasoning: "= 24 W.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "24 W",
            commonErrors: ["Adding instead of multiplying."],
          },
        },
        {
          id: "cils-u7-power-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a 100 W bulb uses more energy than a 40 W bulb over same time.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Energy consumption", statement: "E = P × t — higher power = more energy for same time." },
            ],
            steps: [
              { reasoning: "Energy = power × time — same time, different power.", working: "E=Pt", marks: 1, markCode: "M" },
              { reasoning: "100 W uses 2.5× energy of 40 W over same period.", working: "comparison", marks: 1, markCode: "M" },
              { reasoning: "Higher power = more energy transferred per second.", working: "rate", marks: 1, markCode: "M" },
              { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Higher power = more energy per unit time — 100 W uses more than 40 W.",
            commonErrors: ["Saying 'brighter only' — it's about energy consumption."],
          },
        },
        {
          id: "cils-u7-power-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Calculate electricity costs and describe safety.",
          parts: [
            { label: "a", prompt: "What is electrical power? Give formula.", marks: 1 },
            { label: "b", prompt: "A 2 kW heater runs for 3 hours. Energy used?", marks: 2 },
            { label: "c", prompt: "At 20p/kWh, what's the cost?", marks: 2 },
            { label: "d", prompt: "Describe two electrical safety features.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Power & safety", statement: "P=VI; E=Pt; fuses/earth wires protect against faults." },
            ],
            steps: [
              { part: "a", reasoning: "Rate of energy transfer = V × I.", working: "definition", marks: 1, markCode: "M" },
              { part: "b", reasoning: "E = 2 × 3 = 6 kWh.", working: "6", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "6 × 20p = 120p = £1.20.", working: "£1.20", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Fuse melts on overload; earth wire diverts fault current; circuit breaker trips.", working: "safety", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Two+ features.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct explanation.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) P=VI (b) 6 kWh (c) £1.20 (d) fuse/earth wire/breaker",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 3", marks: "3-4", descriptor: "Multiple features.", part: "d" },
              { level: "Level 2", marks: "1-2", descriptor: "One-two.", part: "d" },
            ],
            commonErrors: ["Confusing kWh with kW — kWh = power × time."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u7-electricity-notes",
      title: "Electricity — revision notes",
      summary: "Circuits, Ohm's law, power, energy, safety.",
      sections: [
        {
          heading: "Circuits",
          body: "Complete circuit needed. Series=same current; parallel=same voltage. Ammeter in series, voltmeter in parallel.",
        },
        {
          heading: "Calculations & safety",
          body: "V=IR; P=VI; E=Pt. Fuses/breakers prevent overload; earth wire safety. kWh for electricity bills.",
        },
      ],
    },
  ],
};
