import type { Lesson } from "../../../types.ts";

export const lesson112: Lesson = {
  id: "ciecy-u1-lesson-1-2",
  code: "1-2",
  title: "Gases and Gas Laws",
  goal: "I CAN apply Boyle's, Charles's and pressure–temperature laws to gases using the particle model.",
  standards: ["0654 1.2"],
  vocabulary: [
    { term: "Boyle's law", definition: "At constant temperature, pressure × volume = constant (P ∝ 1/V)." },
    { term: "Charles's law", definition: "At constant pressure, volume/T = constant (V ∝ T in kelvin)." },
    { term: "Pressure law", definition: "At constant volume, pressure/T = constant (P ∝ T in kelvin)." },
    { term: "Absolute zero", definition: "−273 °C / 0 K — temperature at which gas particles have minimum kinetic energy." },
    { term: "Kelvin", definition: "SI temperature scale: K = °C + 273." },
    { term: "Kinetic theory", definition: "Gas pressure results from particle collisions with container walls." },
    { term: "Manometer", definition: "Device measuring gas pressure using a liquid column." },
    { term: "Syringe experiment", definition: "Standard practical for testing gas laws by varying volume/pressure." },
  ],
  concepts: [
    {
      id: "ciecy-u1-gas-laws",
      title: "Boyle's and Charles's laws",
      skill: "State and apply Boyle's and Charles's laws with the particle model.",
      lesson: {
        sections: [
          {
            heading: "Boyle's law",
            body: "At constant temperature: **P₁V₁ = P₂V₂** — pressure is inversely proportional to volume. Halve the volume → double the pressure.\n\nParticle explanation: same number of particles in half the space collide with walls twice as often → twice the pressure.",
          },
          {
            heading: "Charles's law",
            body: "At constant pressure: **V₁/T₁ = V₂/T₂** with temperature in **kelvin**. Heat a gas → particles move faster → volume increases to keep pressure constant.\n\nConvert first: K = °C + 273. Never use °C in Charles's law.",
          },
          {
            heading: "Pressure–temperature law",
            body: "At constant volume: **P₁/T₁ = P₂/T₂** — heating a gas in a fixed container raises pressure because particles collide more forcefully and frequently.",
          },
        ],
        keyFormulas: [
          { name: "Boyle's law", statement: "$P_1V_1 = P_2V_2$ (constant $T$)" },
          { name: "Charles's law", statement: "$\\dfrac{V_1}{T_1} = \\dfrac{V_2}{T_2}$ (constant $P$, $T$ in K)" },
          { name: "Kelvin", statement: "$K = \\text{°C} + 273$" },
        ],
        workedExample: {
          problem: "A gas occupies 200 cm³ at 100 kPa. What is its volume at 50 kPa (constant temperature)?",
          solution: "Boyle's law: P₁V₁ = P₂V₂ → V₂ = (100 × 200)/50 = 400 cm³.",
        },
      },
      questions: [
        {
          id: "ciecy-u1-gas-laws-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "State Boyle's law.",
          response: { type: "mcq", choices: [
            { id: "a", text: "P ∝ V at constant T" }, { id: "b", text: "P ∝ 1/V at constant T" }, { id: "c", text: "V ∝ T at constant P" }, { id: "d", text: "P ∝ T at constant V" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "law", name: "Boyle's law", statement: "P ∝ 1/V at constant T." }],
            steps: [{ reasoning: "Recall.", working: "P \\propto \\frac{1}{V}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** P ∝ 1/V at constant temperature",
            commonErrors: ["Confusing Boyle's with Charles's law."],
          },
        },
        {
          id: "ciecy-u1-gas-laws-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Convert 27 °C to kelvin.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Kelvin", statement: "K = °C + 273." }],
            steps: [
              { reasoning: "Apply conversion.", working: "27 + 273", marks: 1, markCode: "M" },
              { reasoning: "State answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "300 K",
            commonErrors: ["Writing 27 K or forgetting +273."],
          },
        },
        {
          id: "ciecy-u1-gas-laws-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A gas at 300 cm³ and 120 kPa is compressed to 150 cm³ at constant temperature. Calculate the new pressure.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Boyle's law", statement: "P₁V₁ = P₂V₂." }],
            steps: [
              { reasoning: "Rearrange for P₂.", working: "P_2 = \\frac{P_1V_1}{V_2}", marks: 1, markCode: "M" },
              { reasoning: "Substitute values.", working: "P_2 = \\frac{120 \\times 300}{150}", marks: 1, markCode: "M" },
              { reasoning: "Calculate.", working: "P_2 = 240", marks: 1, markCode: "A" },
              { reasoning: "State with unit.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "240 kPa",
            commonErrors: ["Halving pressure instead of doubling — volume halved so pressure doubles."],
          },
        },
        {
          id: "ciecy-u1-gas-laws-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe an experiment to verify Boyle's law and explain the result using the particle model.",
          parts: [
            { label: "a", prompt: "Describe the apparatus and method.", marks: 4 },
            { label: "b", prompt: "State what is measured and how results are checked.", marks: 2 },
            { label: "c", prompt: "Explain Boyle's law using particles.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Boyle's law", statement: "P₁V₁ = P₂V₂; smaller volume → more frequent wall collisions." }],
            steps: [
              { part: "a", reasoning: "Gas in syringe/sealed container with pressure sensor or manometer.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Vary volume slowly.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Record P at each V.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Keep temperature constant (slow changes/thermostat).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Plot P vs 1/V — straight line through origin, or check P×V constant.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Repeat for reliability.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Same particles in smaller space.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Collide with walls more often.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Higher pressure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) syringe+manometer, vary V, record P (b) P vs 1/V linear / PV constant (c) less space→more collisions→higher P",
            commonErrors: ["In (a) not stating constant temperature."],
          },
        },
      ],
    },
    {
      id: "ciecy-u1-charles",
      title: "Charles's law and temperature",
      skill: "Apply Charles's law and convert between °C and kelvin.",
      lesson: {
        sections: [
          {
            heading: "Charles's law",
            body: "At constant pressure: **V ∝ T** (absolute temperature). If T doubles, V doubles.\n\nThe law only works in kelvin because volume is proportional to absolute temperature — at 0 K a gas would have zero volume in the ideal model.",
          },
          {
            heading: "Kelvin scale",
            body: "Absolute zero = −273 °C = 0 K. The kelvin is the same size as the degree Celsius.\n\n**K = °C + 273** and **°C = K − 273**.",
          },
          {
            heading: "Worked pattern",
            body: "Gas at 27 °C (300 K), 100 cm³, heated to 127 °C (400 K):\nV₂ = V₁ × T₂/T₁ = 100 × 400/300 = 133 cm³.",
          },
        ],
        keyFormulas: [
          { name: "Charles's law", statement: "$\\dfrac{V_1}{T_1} = \\dfrac{V_2}{T_2}$" },
          { name: "Kelvin conversion", statement: "$K = \\text{°C} + 273$" },
        ],
        workedExample: {
          problem: "A gas at 27 °C occupies 150 cm³. Find its volume at 127 °C (constant pressure).",
          solution: "T₁ = 300 K, T₂ = 400 K. V₂ = 150 × 400/300 = 200 cm³.",
        },
      },
      questions: [
        {
          id: "ciecy-u1-charles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "At what temperature does a gas have minimum particle energy (absolute zero)?",
          response: { type: "mcq", choices: [
            { id: "a", text: "0 °C" }, { id: "b", text: "−100 °C" }, { id: "c", text: "−273 °C" }, { id: "d", text: "100 °C" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Absolute zero", statement: "−273 °C / 0 K." }],
            steps: [{ reasoning: "Recall.", working: "-273^\\circ\\text{C}", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** −273 °C",
            commonErrors: ["0 °C is the ice point, not absolute zero."],
          },
        },
        {
          id: "ciecy-u1-charles-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State Charles's law.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Charles's law", statement: "V ∝ T at constant P (T in kelvin)." }],
            steps: [
              { reasoning: "State the law.", marks: 1, markCode: "M" },
              { reasoning: "Mention kelvin.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "At constant pressure, volume is proportional to absolute temperature (V ∝ T); temperature must be in kelvin.",
            commonErrors: ["Omitting that T must be in kelvin."],
          },
        },
        {
          id: "ciecy-u1-charles-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A gas occupies 250 cm³ at 27 °C. Calculate its volume at 127 °C at constant pressure.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Charles's law", statement: "V₁/T₁ = V₂/T₂ with T in kelvin." }],
            steps: [
              { reasoning: "Convert temperatures.", working: "T_1=300\\text{ K},\\ T_2=400\\text{ K}", marks: 1, markCode: "M" },
              { reasoning: "Apply Charles's law.", working: "V_2 = \\frac{V_1T_2}{T_1}", marks: 1, markCode: "M" },
              { reasoning: "Calculate.", working: "V_2 = \\frac{250 \\times 400}{300} = 333", marks: 1, markCode: "A" },
              { reasoning: "State with unit.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "333 cm³ (accept 333.3 cm³)",
            commonErrors: ["Using °C directly — 27/127 gives nonsense."],
          },
        },
        {
          id: "ciecy-u1-charles-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain why gas laws must be expressed in kelvin and describe the pressure–temperature relationship.",
          parts: [
            { label: "a", prompt: "Explain why °C cannot be used in Charles's law.", marks: 4 },
            { label: "b", prompt: "State the pressure–temperature law.", marks: 2 },
            { label: "c", prompt: "Explain it with the particle model.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Absolute temperature", statement: "Gas laws proportional to absolute (kelvin) temperature." }],
            steps: [
              { part: "a", reasoning: "Volume proportional to absolute T.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "°C is relative scale — 0 °C ≠ zero particle energy.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "At 0 K particles have minimum energy.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Using °C gives wrong proportionality.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "P ∝ T at constant V.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Higher T → faster particles.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "More forceful + frequent collisions.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Pressure increases.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) °C is relative; laws need absolute T (b) P∝T at const V (c) faster→more forceful collisions→higher P",
            commonErrors: ["In (a) saying '°C has negatives' only — the real reason is zero point."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecy-u1-gas-laws-notes",
      title: "Gases and gas laws — revision notes",
      summary: "Boyle's, Charles's and pressure–temperature laws; kelvin conversions.",
      sections: [
        {
          heading: "Key facts",
          body: "Boyle: P₁V₁=P₂V₂ (const T). Charles: V₁/T₁=V₂/T₂ (const P, T in K). Pressure law: P₁/T₁=P₂/T₂ (const V). K = °C + 273. Absolute zero = −273 °C.",
        },
        {
          heading: "Exam technique",
          body: "- Always convert to kelvin before Charles's law.\n- Boyle's law problems: check temperature is stated constant.\n- Explain with particles: less space → more collisions; more heat → faster particles.",
        },
      ],
    },
  ],
};
