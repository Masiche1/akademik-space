import type { Lesson } from "../../../types.ts";

export const lesson313: Lesson = {
  id: "cial-p-u3-lesson-3-3",
  code: "3-3",
  title: "Thermal radiation and heat engines",
  goal: "I CAN explain black-body radiation, Stefan–Boltzmann law and heat engine efficiency.",
  standards: ["9702 17: thermal radiation, heat engines"],
  vocabulary: [
    { term: "Thermal radiation", definition: "EM radiation emitted by all objects due to temperature." },
    { term: "Black body", definition: "Perfect emitter and absorber of all wavelengths." },
    { term: "Stefan–Boltzmann law", definition: "Power radiated $P = \\sigma A T^4$ — proportional to $T^4$." },
    { term: "Wien's law", definition: "$\\lambda_{max} T = \\text{constant}$ — peak wavelength shifts with T." },
    { term: "Heat engine", definition: "Device converting heat to mechanical work." },
    { term: "Efficiency", definition: "$\\eta = \\frac{W}{Q_{in}} = \\frac{T_h - T_c}{T_h}$ (Carnot)." },
  ],
  concepts: [
    {
      id: "cial-p-u3-radiation",
      title: "Thermal radiation",
      skill: "Apply Stefan–Boltzmann and Wien's laws.",
      lesson: {
        sections: [
          {
            heading: "Black-body radiation",
            body: "All objects emit EM radiation. Hotter objects emit more (∝ T⁴) and peak at shorter wavelengths (Wien's law). Black body = ideal absorber/emitter. Spectrum: infrared → visible → UV as temperature rises.",
          },
          {
            heading: "Stefan–Boltzmann law",
            body: "$P = \\sigma A T^4$ where $\\sigma = 5.67 \\times 10^{-8}\\ W\\ m^{-2}\\ K^{-4}$, $A$ = surface area, $T$ = absolute temperature (K). Net radiated power = emitted − absorbed.",
          },
          {
            heading: "Wien's law and applications",
            body: "$\\lambda_{max} T = 2.9 \\times 10^{-3}\\ m\\ K$. Sun (5800 K): peak ~500 nm (visible). Cool objects: peak in infrared. Applications: thermal imaging, star temperature estimation.",
          },
        ],
        keyFormulas: [
          { name: "Stefan–Boltzmann", statement: "$P = \\sigma A T^4$" },
          { name: "Wien's law", statement: "$\\lambda_{max} T = 2.9 \\times 10^{-3}\\ m\\ K$" },
        ],
        workedExample: {
          problem: "Find peak wavelength of Sun at 5800 K.",
          solution: "$\\lambda_{max} = 2.9\\times10^{-3}/5800 = 5.0 \\times 10^{-7}\\ m = 500\\ nm$ (green visible).",
        },
      },
      questions: [
        {
          id: "cial-p-u3-rad-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does Stefan–Boltzmann law describe?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Radiated power proportional to T⁴" },
              { id: "b", text: "Peak wavelength proportional to T" },
              { id: "c", text: "Heat capacity of materials" },
              { id: "d", text: "Gas pressure and volume" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Stefan–Boltzmann", statement: "$P = \\sigma A T^4$." }],
            steps: [{ reasoning: "P ∝ T⁴ for black body.", marks: 1, markCode: "A" }],
            finalAnswer: "$P = \\sigma A T^4$",
          },
        },
        {
          id: "cial-p-u3-rad-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "An object at 300 K has surface area 0.1 m². Estimate radiated power ($\\sigma = 5.67\\times10^{-8}$).",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Stefan–Boltzmann", statement: "$P = \\sigma A T^4$." }],
            steps: [
              { reasoning: "$P = 5.67\\times10^{-8} \\times 0.1 \\times 300^4$.", marks: 1, markCode: "M" },
              { reasoning: "$300^4 = 8.1\\times10^9$; $P = 5.67\\times10^{-8} \\times 0.1 \\times 8.1\\times10^9$.", marks: 1, markCode: "M" },
              { reasoning: "$P \\approx 46\\ W$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$P \\approx 46\\ W$",
          },
        },
        {
          id: "cial-p-u3-rad-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why do hotter objects appear different colours?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Wien's law", statement: "$\\lambda_{max} \\propto 1/T$ — peak shifts to shorter λ." }],
            steps: [
              { reasoning: "Wien's law: $\\lambda_{max} T = $ const.", marks: 1, markCode: "M" },
              { reasoning: "Higher T → shorter peak wavelength.", marks: 1, markCode: "M" },
              { reasoning: "Cool objects peak in infrared (invisible); hot objects peak in visible.", marks: 1, markCode: "M" },
              { reasoning: "Very hot → UV/blue; explains star colours.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Peak wavelength shifts with temperature",
          },
        },
        {
          id: "cial-p-u3-rad-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Thermal radiation.",
          parts: [
            { label: "a", prompt: "State Stefan–Boltzmann law.", marks: 2 },
            { label: "b", prompt: "State Wien's law.", marks: 2 },
            { label: "c", prompt: "What is a black body?", marks: 2 },
            { label: "d", prompt: "An object at 600 K radiates 16 times more power than at 300 K. Verify using Stefan–Boltzmann.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Radiation", statement: "$P=\\sigma AT^4$; $\\lambda_{max}T=$const." }],
            steps: [
              { part: "a", reasoning: "$P = \\sigma A T^4$ — power ∝ T⁴.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "$\\lambda_{max} T = 2.9\\times10^{-3}\\ m\\ K$.", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Perfect emitter/absorber of all wavelengths.", marks: 2, markCode: "A" },
              { part: "d", reasoning: "$(600/300)^4 = 2^4 = 16$.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Power ratio = 16.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Confirmed — T⁴ relationship.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) P=σAT⁴ (b) λT=const (c) perfect emitter (d) 16×",
          },
        },
      ],
    },
    {
      id: "cial-p-u3-engines",
      title: "Heat engines",
      skill: "Calculate heat engine efficiency and apply Carnot limit.",
      lesson: {
        sections: [
          {
            heading: "Heat engine operation",
            body: "Heat engine: absorbs heat $Q_h$ from hot reservoir at $T_h$, does work $W$, rejects heat $Q_c$ to cold reservoir at $T_c$. Energy conservation: $Q_h = W + Q_c$. Efficiency $\\eta = W/Q_h = (Q_h - Q_c)/Q_h$.",
          },
          {
            heading: "Carnot efficiency",
            body: "Maximum possible efficiency (reversible engine): $\\eta_{max} = \\frac{T_h - T_c}{T_h}$ where temperatures in Kelvin. Real engines always less efficient. Higher $T_h$ or lower $T_c$ → higher efficiency.",
          },
          {
            heading: "Applications",
            body: "Car engines, power stations, refrigerators (reversed cycle). Refrigerators: work input moves heat from cold to hot. Heat pumps: same principle for heating. All limited by Carnot efficiency.",
          },
        ],
        keyFormulas: [
          { name: "Efficiency", statement: "$\\eta = \\frac{W}{Q_h} = \\frac{Q_h - Q_c}{Q_h}$" },
          { name: "Carnot", statement: "$\\eta_{max} = \\frac{T_h - T_c}{T_h}$" },
        ],
        workedExample: {
          problem: "A heat engine absorbs 1000 J at 500 K and rejects 600 J at 300 K. Find efficiency.",
          solution: "$W = 1000 - 600 = 400\\ J$; $\\eta = 400/1000 = 0.4 = 40\\%$. Carnot max: $(500-300)/500 = 40\\%$.",
        },
      },
      questions: [
        {
          id: "cial-p-u3-he-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the maximum efficiency of a heat engine between 600 K and 300 K?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$50\\%$" },
              { id: "b", text: "$100\\%$" },
              { id: "c", text: "$33\\%$" },
              { id: "d", text: "$75\\%$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Carnot", statement: "$\\eta = (T_h-T_c)/T_h$." }],
            steps: [{ reasoning: "$\\eta = (600-300)/600 = 0.5 = 50\\%$.", marks: 1, markCode: "A" }],
            finalAnswer: "$50\\%$",
          },
        },
        {
          id: "cial-p-u3-he-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A heat engine absorbs 800 J and does 200 J work. Find heat rejected and efficiency.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Heat engine", statement: "$Q_h = W + Q_c$; $\\eta = W/Q_h$." }],
            steps: [
              { reasoning: "$Q_c = 800 - 200 = 600\\ J$.", marks: 1, markCode: "M" },
              { reasoning: "$\\eta = 200/800 = 0.25 = 25\\%$.", marks: 1, markCode: "M" },
              { reasoning: "Both correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$Q_c = 600\\ J$, $\\eta = 25\\%$",
          },
        },
        {
          id: "cial-p-u3-he-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why can't a heat engine be 100% efficient?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Carnot", statement: "Some heat must be rejected to cold reservoir." }],
            steps: [
              { reasoning: "Second law: heat cannot all convert to work.", marks: 1, markCode: "M" },
              { reasoning: "Engine needs temperature difference to operate.", marks: 1, markCode: "M" },
              { reasoning: "Heat rejected to cold reservoir is unavoidable.", marks: 1, markCode: "M" },
              { reasoning: "100% efficiency would violate second law.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Must reject heat — 2nd law",
          },
        },
        {
          id: "cial-p-u3-he-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Heat engines.",
          parts: [
            { label: "a", prompt: "Define heat engine and state energy conservation.", marks: 3 },
            { label: "b", prompt: "What is Carnot efficiency?", marks: 2 },
            { label: "c", prompt: "A heat engine absorbs 2000 J at 800 K, rejects at 400 K. Max work?", marks: 2 },
            { label: "d", prompt: "How could efficiency be improved?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Heat engine", statement: "$Q_h=W+Q_c$; $\\eta_{max}=(T_h-T_c)/T_h$." }],
            steps: [
              { part: "a", reasoning: "Converts heat to work.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$Q_h = W + Q_c$.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Absorbs hot, rejects cold.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\eta_{max} = (T_h-T_c)/T_h$.", marks: 2, markCode: "A" },
              { part: "c", reasoning: "$\\eta = 0.5$; $W = 0.5 \\times 2000 = 1000\\ J$.", marks: 2, markCode: "M" },
              { part: "d", reasoning: "Increase $T_h$ or decrease $T_c$.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Larger temperature difference → higher efficiency.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Qh=W+Qc (b) Carnot (c) 1000 J (d) bigger ΔT",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-p-u3-radiation-engines-notes",
      title: "Thermal radiation and heat engines — revision notes",
      summary: "Black-body radiation, Stefan–Boltzmann, Wien's law, Carnot efficiency.",
      sections: [
        {
          heading: "Radiation",
          body: "$P = \\sigma A T^4$; $\\lambda_{max} T = 2.9\\times10^{-3}\\ m\\ K$. Hotter = more radiation + shorter peak wavelength. Black body = perfect emitter/absorber.",
        },
        {
          heading: "Heat engines",
          body: "$Q_h = W + Q_c$; $\\eta = W/Q_h$; Carnot max $= (T_h-T_c)/T_h$. Must reject heat — never 100% efficient.",
        },
        {
          heading: "Exam checklist",
          body: "Use Kelvin for all thermal calculations. For efficiency compare actual vs Carnot maximum.",
        },
      ],
    },
  ],
};
