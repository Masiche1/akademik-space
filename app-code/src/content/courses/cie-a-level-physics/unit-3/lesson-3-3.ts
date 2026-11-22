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
              { id: "a", text: "Gas pressure and volume" },
              { id: "b", text: "Radiated power proportional to T⁴" },
              { id: "c", text: "Heat capacity of materials" },
              { id: "d", text: "Peak wavelength proportional to T" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cial-p-u3-rad-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which equation is the Stefan–Boltzmann law for a black body?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$P = \\sigma A T^4$" },
              { id: "b", text: "$P = \\sigma A T$" },
              { id: "c", text: "$P = \\sigma A/T^4$" },
              { id: "d", text: "$P = \\sigma T^4/A$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Stefan–Boltzmann", statement: "$P=\\sigma AT^4$." }],
            steps: [{ reasoning: "Radiated power is proportional to surface area and the fourth power of absolute temperature.", marks: 1, markCode: "A" }],
            finalAnswer: "$P=\\sigma AT^4$",
          },
        },
        {
          id: "cial-p-u3-rad-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "A black body has surface area $0.20\\ m^2$ and temperature $400\\ K$. Estimate its radiated power. Take $\\sigma = 5.67 \\times 10^{-8}\\ W\\ m^{-2}\\ K^{-4}$.",
          response: { type: "numeric", parts: [{ label: "radiated power", answer: 290.3, unit: "W", tolerance: 0.1 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Stefan–Boltzmann", statement: "$P=\\sigma AT^4$." }],
            steps: [
              { reasoning: "$P = 5.67\\times10^{-8} \\times 0.20 \\times 400^4$.", marks: 1, markCode: "M" },
              { reasoning: "$400^4 = 2.56\\times10^{10}$, so $P = 5.67\\times10^{-8} \\times 0.20 \\times 2.56\\times10^{10}$.", marks: 1, markCode: "M" },
              { reasoning: "$P = 290.3\\ W$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$P = 290.3\\ W$",
          },
        },
        {
          id: "cial-p-u3-rad-q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why a star that is hotter than the Sun appears bluer, using Wien's law.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Wien's law", statement: "$\\lambda_{max}T=\\text{constant}$." }],
            steps: [
              { reasoning: "Wien's law shows peak wavelength is inversely proportional to temperature.", marks: 1, markCode: "M" },
              { reasoning: "A hotter star therefore has a shorter peak wavelength.", marks: 1, markCode: "M" },
              { reasoning: "Shorter wavelengths correspond to blue/violet rather than red/orange light.", marks: 1, markCode: "M" },
              { reasoning: "Thus hotter stars appear bluer.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Higher T → shorter λmax → bluer appearance",
          },
        },
        {
          id: "cial-p-u3-rad-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Wien's displacement law states that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\lambda_{max} = T$" },
              { id: "b", text: "$\\lambda_{max} = \\sigma T$" },
              { id: "c", text: "$\\lambda_{max}T^4 = \\text{constant}$" },
              { id: "d", text: "$\\lambda_{max}T = \\text{constant}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Wien's law", statement: "$\\lambda_{max}T=2.9\\times10^{-3}\\ m\\ K$." }],
            steps: [{ reasoning: "The product of peak wavelength and absolute temperature is constant.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\lambda_{max}T=\\text{constant}$",
          },
        },
        {
          id: "cial-p-u3-rad-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "An object has temperature $2000\\ K$. What is its approximate peak wavelength? Use $\\lambda_{max}T = 2.9 \\times 10^{-3}\\ m\\ K$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2.9 \\times 10^{-6}\\ m$" },
              { id: "b", text: "$1.45 \\times 10^{-3}\\ m$" },
              { id: "c", text: "$5.8 \\times 10^{-7}\\ m$" },
              { id: "d", text: "$1.45 \\times 10^{-6}\\ m$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Wien's law", statement: "$\\lambda_{max}=2.9\\times10^{-3}/T$." }],
            steps: [{ reasoning: "$\\lambda_{max}=2.9\\times10^{-3}/2000=1.45\\times10^{-6}\\ m$.", marks: 1, markCode: "A" }],
            finalAnswer: "$1.45\\times10^{-6}\\ m$",
          },
        },
        {
          id: "cial-p-u3-rad-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain what is meant by a black body and why it is an ideal emitter.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Black body", statement: "A perfect absorber and emitter of all wavelengths." }],
            steps: [
              { reasoning: "A black body absorbs all incident electromagnetic radiation.", marks: 1, markCode: "M" },
              { reasoning: "It also emits radiation at all wavelengths according to its temperature.", marks: 1, markCode: "M" },
              { reasoning: "No real surface is perfectly black, but it is used as an ideal model.", marks: 1, markCode: "M" },
              { reasoning: "Its emitted spectrum depends only on temperature, making it useful for Stefan–Boltzmann and Wien's laws.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Perfect absorber/emitter at all wavelengths",
          },
        },
        {
          id: "cial-p-u3-rad-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If the absolute temperature of an object doubles, its radiated power becomes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$ times larger" },
              { id: "b", text: "$8$ times larger" },
              { id: "c", text: "$16$ times larger" },
              { id: "d", text: "$4$ times larger" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Stefan–Boltzmann", statement: "$P \\propto T^4$." }],
            steps: [{ reasoning: "Doubling $T$ multiplies power by $2^4=16$.", marks: 1, markCode: "A" }],
            finalAnswer: "$16$ times",
          },
        },
        {
          id: "cial-p-u3-rad-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "A black body radiates $20\\ W$ at $300\\ K$. Assuming surface area is unchanged, calculate its radiated power at $600\\ K$.",
          response: { type: "numeric", parts: [{ label: "radiated power", answer: 320, unit: "W" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Stefan–Boltzmann", statement: "$P \\propto T^4$ for fixed area." }],
            steps: [
              { reasoning: "Temperature doubles, so power ratio $=(600/300)^4=2^4=16$.", marks: 1, markCode: "M" },
              { reasoning: "$P_{new}=16 \\times 20$.", marks: 1, markCode: "M" },
              { reasoning: "$P_{new}=320\\ W$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$320\\ W$",
          },
        },
        {
          id: "cial-p-u3-rad-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the SI units of the Stefan–Boltzmann constant $\\sigma$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$J\\ m^{-2}\\ K^{-4}$" },
              { id: "b", text: "$W\\ m^{-2}\\ K^{-4}$" },
              { id: "c", text: "$W\\ m^{-2}\\ K^{-1}$" },
              { id: "d", text: "$W\\ m^{-1}\\ K^{-4}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Stefan–Boltzmann constant", statement: "$\\sigma = 5.67\\times10^{-8}\\ W\\ m^{-2}\\ K^{-4}$." }],
            steps: [{ reasoning: "From $P=\\sigma AT^4$, units must give watts when multiplied by $m^2K^4$.", marks: 1, markCode: "A" }],
            finalAnswer: "$W\\ m^{-2}\\ K^{-4}$",
          },
        },
        {
          id: "cial-p-u3-rad-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The Sun has surface temperature about $5800\\ K$ and another star has temperature $11\\,600\\ K$. Use $\\lambda_{max}T=2.9\\times10^{-3}\\ m\\ K$ to calculate the peak wavelengths of the two stars.",
          response: { type: "numeric", parts: [{ label: "Sun peak wavelength", answer: 500, unit: "nm" }, { label: "hotter star peak wavelength", answer: 250, unit: "nm" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Wien's law", statement: "$\\lambda_{max}T=2.9\\times10^{-3}\\ m\\ K$." }],
            steps: [
              { reasoning: "For the Sun, $\\lambda_{max}=2.9\\times10^{-3}/5800=5.0\\times10^{-7}\\ m$.", marks: 1, markCode: "M" },
              { reasoning: "Sun peak wavelength = $500\\ nm$.", marks: 1, markCode: "A" },
              { reasoning: "For the hotter star, $\\lambda_{max}=2.9\\times10^{-3}/11\\,600=2.5\\times10^{-7}\\ m$.", marks: 1, markCode: "M" },
              { reasoning: "Hotter star peak wavelength = $250\\ nm$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sun: $500\\ nm$; hotter star: $250\\ nm$",
          },
        },
        {
          id: "cial-p-u3-rad-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Thermal radiation.",
          parts: [
            { label: "a", prompt: "State the Stefan–Boltzmann law.", marks: 2 },
            { label: "b", prompt: "State Wien's displacement law.", marks: 2 },
            { label: "c", prompt: "What is a black body?", marks: 2 },
            { label: "d", prompt: "An object of surface area $0.10\\ m^2$ at $500\\ K$ radiates power $P$. Find $P$ using $\\sigma=5.67\\times10^{-8}$. Then state how $P$ changes if temperature doubles.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Thermal radiation", statement: "$P=\\sigma AT^4$; $\\lambda_{max}T=\\text{constant}$." }],
            steps: [
              { part: "a", reasoning: "$P=\\sigma AT^4$, with $T$ in kelvin.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "$\\lambda_{max}T=2.9\\times10^{-3}\\ m\\ K$.", marks: 2, markCode: "A" },
              { part: "c", reasoning: "A perfect absorber and emitter of all wavelengths.", marks: 2, markCode: "A" },
              { part: "d", reasoning: "$P=5.67\\times10^{-8} \\times 0.10 \\times 500^4$.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$500^4=6.25\\times10^{10}$, so $P \\approx 354\\ W$.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Doubling temperature increases power by $2^4=16$ times.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) P=σAT⁴ (b) λmaxT=const (c) perfect emitter (d) 354 W, ×16",
          },
        },
        {
          id: "cial-p-u3-rad-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A black body has surface area $0.50\\ m^2$ and temperature $300\\ K$. Calculate its radiated power and its power if the temperature rises to $600\\ K$. Take $\\sigma=5.67\\times10^{-8}\\ W\\ m^{-2}\\ K^{-4}$.",
          response: { type: "numeric", parts: [{ label: "power at 300 K", answer: 229.6, unit: "W", tolerance: 0.1 }, { label: "power at 600 K", answer: 3674.2, unit: "W", tolerance: 0.1 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Stefan–Boltzmann", statement: "$P=\\sigma AT^4$; doubling $T$ multiplies $P$ by 16." }],
            steps: [
              { reasoning: "$P_{300}=5.67\\times10^{-8} \\times 0.50 \\times 300^4$.", marks: 1, markCode: "M" },
              { reasoning: "$P_{300}=229.6\\ W$.", marks: 1, markCode: "A" },
              { reasoning: "At $600\\ K$, $P=16 \\times 229.6 = 3674.2\\ W$.", marks: 1, markCode: "M" },
              { reasoning: "Power at $600\\ K$ = $3674\\ W$ approximately.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$P_{300}=229.6\\ W$; $P_{600}=3674.2\\ W$",
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
              { id: "a", text: "$75\\%$" },
              { id: "b", text: "$50\\%$" },
              { id: "c", text: "$100\\%$" },
              { id: "d", text: "$33\\%$" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cial-p-u3-he-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a heat engine, the efficiency $\\eta$ is given by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\eta = W/Q_c$" },
              { id: "b", text: "$\\eta = Q_c/Q_h$" },
              { id: "c", text: "$\\eta = Q_h/W$" },
              { id: "d", text: "$\\eta = W/Q_h$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Efficiency", statement: "$\\eta = W/Q_h$." }],
            steps: [{ reasoning: "Efficiency = work output / heat input.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\eta = W/Q_h$",
          },
        },
        {
          id: "cial-p-u3-he-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which change would increase the maximum (Carnot) efficiency of a heat engine?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increase $T_c$ and decrease $T_h$" },
              { id: "b", text: "Increase $T_c$" },
              { id: "c", text: "Increase $T_h$" },
              { id: "d", text: "Decrease both temperatures equally" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Carnot", statement: "$\\eta_{max} = (T_h-T_c)/T_h$ — larger $\\Delta T$ gives higher efficiency." }],
            steps: [{ reasoning: "Raising $T_h$ increases the temperature difference and efficiency.", marks: 1, markCode: "A" }],
            finalAnswer: "Increase $T_h$",
          },
        },
        {
          id: "cial-p-u3-he-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A heat engine absorbs $1200\\ J$ of heat and does $300\\ J$ of work. Calculate its efficiency.",
          response: { type: "numeric", parts: [{ label: "efficiency", answer: 25, unit: "%" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Efficiency", statement: "$\\eta = W/Q_h$." }],
            steps: [
              { reasoning: "$\\eta = 300/1200$.", marks: 1, markCode: "M" },
              { reasoning: "$\\eta = 0.25 = 25\\%$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\eta = 25\\%$",
          },
        },
        {
          id: "cial-p-u3-he-q8",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find the maximum possible efficiency of a heat engine operating between $900\\ K$ and $300\\ K$.",
          response: { type: "numeric", parts: [{ label: "efficiency", answer: 66.7, unit: "%" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Carnot", statement: "$\\eta_{max} = (T_h-T_c)/T_h$." }],
            steps: [
              { reasoning: "$\\eta = (900-300)/900 = 600/900$.", marks: 1, markCode: "M" },
              { reasoning: "$\\eta = 0.667 = 66.7\\%$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\eta_{max} = 66.7\\%$",
          },
        },
        {
          id: "cial-p-u3-he-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A heat engine absorbs $2000\\ J$ of heat and rejects $1400\\ J$ to the cold reservoir. Calculate the work done by the engine.",
          response: { type: "numeric", parts: [{ label: "work done", answer: 600, unit: "J" }] },
          markscheme: {
            principles: [{ kind: "law", name: "Heat engine", statement: "$Q_h = W + Q_c$ so $W = Q_h - Q_c$." }],
            steps: [
              { reasoning: "$W = 2000 - 1400$.", marks: 1, markCode: "M" },
              { reasoning: "$W = 600\\ J$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$W = 600\\ J$",
          },
        },
        {
          id: "cial-p-u3-he-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A heat engine has an efficiency of $35\\%$ and absorbs $2400\\ J$ of heat. Calculate the work output and the heat rejected.",
          response: {
            type: "numeric",
            parts: [
              { label: "work output", answer: 840, unit: "J" },
              { label: "heat rejected", answer: 1560, unit: "J" },
            ],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Heat engine", statement: "$W = \\eta Q_h$; $Q_c = Q_h - W$." }],
            steps: [
              { reasoning: "$W = 0.35 \\times 2400 = 840\\ J$.", marks: 1, markCode: "M" },
              { reasoning: "$Q_c = 2400 - 840$.", marks: 1, markCode: "M" },
              { reasoning: "$Q_c = 1560\\ J$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$W = 840\\ J$, $Q_c = 1560\\ J$",
          },
        },
        {
          id: "cial-p-u3-he-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Carnot efficiency of a reversible heat engine is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\eta = W/Q_h$" },
              { id: "b", text: "$\\eta_{max} = \\frac{T_c}{T_h}$" },
              { id: "c", text: "$\\eta = Q_c/Q_h$" },
              { id: "d", text: "$\\eta_{max} = \\frac{T_h - T_c}{T_h}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Carnot", statement: "$\\eta_{max} = (T_h-T_c)/T_h$." }],
            steps: [{ reasoning: "Carnot limit uses absolute temperatures only.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\eta_{max} = \\frac{T_h - T_c}{T_h}$",
          },
        },
        {
          id: "cial-p-u3-he-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement about heat engines is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All absorbed heat is converted to work" },
              { id: "b", text: "Efficiency can exceed the Carnot limit" },
              { id: "c", text: "Some heat must be rejected to a cold reservoir" },
              { id: "d", text: "A heat engine can be 100% efficient" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Second law", statement: "Heat cannot be completely converted to work in a cycle." }],
            steps: [{ reasoning: "Rejection of heat to a cold reservoir is unavoidable.", marks: 1, markCode: "A" }],
            finalAnswer: "Heat must be rejected",
          },
        },
        {
          id: "cial-p-u3-he-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is a real heat engine always less efficient than the Carnot limit?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Real engines have no cold reservoir" },
              { id: "b", text: "Real engines operate reversibly and slowly" },
              { id: "c", text: "The Carnot formula uses Celsius instead of kelvin" },
              { id: "d", text: "Friction and irreversible processes dissipate energy as heat" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Irreversibility", statement: "Real processes involve friction and finite-rate heat transfer." }],
            steps: [{ reasoning: "Irreversibilities mean actual efficiency < Carnot maximum.", marks: 1, markCode: "A" }],
            finalAnswer: "Irreversible losses reduce efficiency",
          },
        },
        {
          id: "cial-p-u3-he-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Temperatures used in the Carnot efficiency formula must be expressed in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "kelvin" },
              { id: "b", text: "degrees Fahrenheit" },
              { id: "c", text: "any consistent unit" },
              { id: "d", text: "degrees Celsius" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Absolute temperature", statement: "Thermodynamic temperature ratios require kelvin." }],
            steps: [{ reasoning: "T_h and T_c must be in kelvin (absolute temperature).", marks: 1, markCode: "A" }],
            finalAnswer: "Kelvin",
          },
        },
        {
          id: "cial-p-u3-he-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two heat engines operate between the same hot and cold reservoirs. Engine A has an efficiency of $30\\%$ and engine B has an efficiency of $45\\%$. Explain which engine is closer to the Carnot limit and why neither can reach $100\\%$ efficiency.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Carnot", statement: "$\\eta_{max} = (T_h-T_c)/T_h$ is the same for both engines." }],
            steps: [
              { reasoning: "Same reservoirs → same Carnot maximum for both.", marks: 1, markCode: "M" },
              { reasoning: "Engine B (45%) is closer to the limit than A (30%).", marks: 1, markCode: "M" },
              { reasoning: "Heat must always be rejected to the cold reservoir.", marks: 1, markCode: "A" },
              { reasoning: "100% efficiency would violate the second law of thermodynamics.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "B closer to Carnot; 100% impossible (2nd law)",
          },
        },
        {
          id: "cial-p-u3-he-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a refrigerator can be regarded as a heat engine working in reverse, describing the energy transfers involved.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Reversed cycle", statement: "Work input moves heat from cold to hot reservoir." }],
            steps: [
              { reasoning: "External work is done on the working substance.", marks: 1, markCode: "M" },
              { reasoning: "Heat $Q_c$ is extracted from the cold interior.", marks: 1, markCode: "M" },
              { reasoning: "Heat $Q_h = Q_c + W$ is rejected to the warmer surroundings.", marks: 1, markCode: "A" },
              { reasoning: "Heat flows cold→hot only because work is supplied — not spontaneous.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Work input pumps heat cold→hot",
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
