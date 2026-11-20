import type { Lesson } from "../../../types.ts";

export const lessonp92: Lesson = {
  id: "olphys-u9-lesson-9-2",
  code: "9-2",
  title: "Gas Laws and Kinetic Theory",
  goal: "I CAN apply gas laws and explain gas behaviour using kinetic theory.",
  standards: ["5054 9.2"],
  vocabulary: [
    { term: "Pressure", definition: "Force per unit area (Pa = N/m²)." },
    { term: "Boyle's law", definition: "P ∝ 1/V at constant temperature." },
    { term: "Charles's law", definition: "V ∝ T at constant pressure." },
    { term: "Pressure law", definition: "P ∝ T at constant volume." },
    { term: "Kinetic theory", definition: "Gas particles in random motion, collisions cause pressure." },
    { term: "Absolute zero", definition: "-273°C (0 K) — particles have minimum energy." },
    { term: "Ideal gas", definition: "Perfect gas obeying all gas laws exactly." },
    { term: "Diffusion", definition: "Particles spreading from high to low concentration." },
  ],
  concepts: [
    {
      id: "olphys-u9-gas-laws",
      title: "Gas laws",
      skill: "Apply Boyle's, Charles's and pressure laws to gas problems.",
      lesson: {
        sections: [
          {
            heading: "Boyle's law",
            body: "At constant temperature: **P₁V₁ = P₂V₂**\n\n- Compress gas (V↓) → pressure↑\n- Example: syringe, bicycle pump",
          },
          {
            heading: "Charles's law",
            body: "At constant pressure: **V₁/T₁ = V₂/T₂**\n\n- Heat gas → expands\n- T in kelvin (K = °C + 273)",
          },
          {
            heading: "Pressure law",
            body: "At constant volume: **P₁/T₁ = P₂/T₂**\n\n- Heat sealed container → pressure↑\n- Combined with Boyle → P₁V₁/T₁ = P₂V₂/T₂",
          },
        ],
        keyFormulas: [
          { name: "Boyle", statement: "$P_1V_1 = P_2V_2$" },
          { name: "Charles", statement: "$\\dfrac{V_1}{T_1} = \\dfrac{V_2}{T_2}$" },
          { name: "Combined", statement: "$\\dfrac{P_1V_1}{T_1} = \\dfrac{P_2V_2}{T_2}$" },
        ],
        workedExample: {
          problem: "Gas at 200 kPa, 0.5 m³ compressed to 0.2 m³ (constant T). New pressure?",
          solution: "P₂ = P₁V₁/V₂ = 200×0.5/0.2 = 500 kPa.",
        },
      },
      questions: [
        {
          id: "olphys-u9-gas-laws-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does Boyle's law state?",
          response: { type: "mcq", choices: [
            { id: "a", text: "P ∝ V" }, { id: "b", text: "P ∝ 1/V at constant T" }, { id: "c", text: "V ∝ T" }, { id: "d", text: "P ∝ T" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "law", name: "Boyle", statement: "P∝1/V constant T." }],
            steps: [{ reasoning: "Recall.", working: "P \\propto \\frac{1}{V}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** P ∝ 1/V at constant T",
            commonErrors: ["Direct not inverse relationship."],
          },
        },
        {
          id: "olphys-u9-gas-laws-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Convert 27°C to kelvin.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Kelvin", statement: "K = °C + 273." }],
            steps: [
              { reasoning: "27 + 273 = 300 K.", working: "27 + 273", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "300 K",
            commonErrors: ["Using °C in gas laws."],
          },
        },
        {
          id: "olphys-u9-gas-laws-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Gas at 100 kPa occupies 2 m³. Compressed to 1 m³ at same T. Find new pressure.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Boyle", statement: "P₁V₁ = P₂V₂." }],
            steps: [
              { reasoning: "P₂ = 100 × 2/1.", marks: 1, markCode: "M" },
              { reasoning: "= 200 kPa.", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
              { reasoning: "Unit kPa.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "200 kPa",
            commonErrors: ["Halving instead of doubling."],
          },
        },
        {
          id: "olphys-u9-gas-laws-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply gas laws to a compression problem.",
          parts: [
            { label: "a", prompt: "State Boyle's law.", marks: 2 },
            { label: "b", prompt: "State Charles's law.", marks: 3 },
            { label: "c", prompt: "Calculate combined change.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Gas laws", statement: "Boyle P∝1/V; Charles V∝T; combined PV/T const." }],
            steps: [
              { part: "a", reasoning: "P₁V₁=P₂V₂.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Constant T.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "V₁/T₁=V₂/T₂.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Constant P.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use combined formula.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Convert to kelvin.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct answer.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Units.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) P₁V₁=P₂V₂ (b) V₁/T₁=V₂/T₂ (c) calc",
            commonErrors: ["Using °C not K."],
          },
        },
      ],
    },
    {
      id: "olphys-u9-kinetic-theory",
      title: "Kinetic theory of gases",
      skill: "Explain gas behaviour using particle theory.",
      lesson: {
        sections: [
          {
            heading: "Particle model",
            body: "Gas particles: tiny, far apart, random motion, collide elastically.\n\n- Temperature = average kinetic energy\n- Pressure = force of collisions on walls\n- More particles/faster → higher pressure",
          },
          {
            heading: "Explaining gas laws",
            body: "- Boyle: compress → more collisions per area → higher P\n- Charles: heat → faster → more force per collision → expands\n- Pressure law: heat sealed → faster collisions → higher P",
          },
          {
            heading: "Absolute zero",
            body: "-273°C (0 K): particles have minimum possible kinetic energy.\n\nExtrapolation of Charles's law — V→0 at 0 K.",
          },
        ],
        keyFormulas: [
          { name: "Kelvin", statement: "$T(K) = T(^\\circ C) + 273$" },
        ],
        workedExample: {
          problem: "Why does pressure increase when gas is heated at constant volume?",
          solution: "Particles move faster → collide harder/more often with walls → higher pressure.",
        },
      },
      questions: [
        {
          id: "olphys-u9-kinetic-theory-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What causes gas pressure?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Weight of gas" }, { id: "b", text: "Particle collisions with walls" }, { id: "c", text: "Gravity" }, { id: "d", text: "Static charge" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "principle", name: "Pressure", statement: "Collisions cause pressure." }],
            steps: [{ reasoning: "Recall.", working: "\\text{collisions}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Particle collisions with walls",
            commonErrors: ["Not particle motion."],
          },
        },
        {
          id: "olphys-u9-kinetic-theory-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is absolute zero in Celsius?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Absolute zero", statement: "-273°C." }],
            steps: [
              { reasoning: "-273°C.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "-273°C (0 K) — minimum possible temperature.",
            commonErrors: ["-273.15 vs -273 acceptable."],
          },
        },
        {
          id: "olphys-u9-kinetic-theory-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why gas pressure increases when heated at constant volume.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Kinetic", statement: "Faster particles → more collisions." }],
            steps: [
              { reasoning: "Heat → faster particles.", marks: 1, markCode: "M" },
              { reasoning: "More frequent/harder collisions.", marks: 1, markCode: "M" },
              { reasoning: "Higher pressure.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Heating increases particle speed — more frequent and harder collisions with container walls produce higher pressure.",
            commonErrors: ["Not mentioning collision rate."],
          },
        },
        {
          id: "olphys-u9-kinetic-theory-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain gas behaviour using kinetic theory.",
          parts: [
            { label: "a", prompt: "Particle model.", marks: 3 },
            { label: "b", prompt: "Explain pressure.", marks: 3 },
            { label: "c", prompt: "Explain one gas law.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Kinetic", statement: "Random motion; collisions; explains laws." }],
            steps: [
              { part: "a", reasoning: "Tiny far apart random.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Elastic collisions.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Collisions with walls.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Force per area.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Any law explained.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Particle reasoning.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) random motion (b) collisions→pressure (c) law explanation",
            commonErrors: ["In (b) saying weight causes pressure."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olphys-u9-gas-notes",
      title: "Gas laws and kinetic theory — revision notes",
      summary: "Boyle/Charles/pressure laws, kinetic theory, absolute zero.",
      sections: [
        {
          heading: "Key facts",
          body: "Boyle: P∝1/V const T. Charles: V∝T const P. Pressure: P∝T const V. K=°C+273. Pressure=collisions.",
        },
        {
          heading: "Exam technique",
          body: "- Always convert to kelvin.\n- Kinetic theory explains laws.\n- Absolute zero=-273°C.",
        },
      ],
    },
  ],
};
