import type { Lesson } from "../../../types.ts";

export const lessonp91: Lesson = {
  id: "ciep-u9-lesson-9-1",
  code: "9-1",
  title: "Solids, Liquids and Gases",
  goal: "I CAN describe the particle model of solids, liquids and gases and explain their properties.",
  standards: ["0655 9.1", "0655 9.2"],
  vocabulary: [
    { term: "Particle model", definition: "Matter made of particles in motion; arrangement determines state." },
    { term: "Brownian motion", definition: "Random movement of particles in fluid." },
    { term: "Diffusion", definition: "Net movement from high to low concentration." },
    { term: "Evaporation", definition: "Liquid → gas at surface below boiling point." },
    { term: "Sublimation", definition: "Solid → gas directly." },
    { term: "Pressure", definition: "Force per unit area; gas pressure from particle collisions." },
    { term: "Absolute zero", definition: "−273°C / 0 K — minimum possible temperature." },
    { term: "Melting point", definition: "Temperature where solid ↔ liquid at constant T." },
  ],
  concepts: [
    {
      id: "ciep-u9-states",
      title: "States of matter",
      skill: "Describe particle arrangement, movement and energy in three states.",
      lesson: {
        sections: [
          {
            heading: "Particle model",
            body: "| State | Arrangement | Movement | Energy |\n|---|---|---|---|\n| Solid | regular, close | vibrate fixed | lowest |\n| Liquid | close, disordered | slide past | medium |\n| Gas | far apart | fast random | highest |",
          },
          {
            heading: "Changes of state",
            body: "Melting/freezing at fixed T; boiling at fixed T; evaporation any T at surface; condensation reverse; sublimation solid→gas.",
          },
          {
            heading: "Evidence",
            body: "Diffusion, Brownian motion, gases filling containers, compressibility — all show particles exist and move.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does a gas fill its container?",
          solution: "Gas particles move randomly with high energy, colliding with walls and spreading throughout available space.",
        },
      },
      questions: [
        {
          id: "ciep-u9-states-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which state do particles have most energy?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Solid" }, { id: "b", text: "Liquid" }, { id: "c", text: "Gas" }, { id: "d", text: "All equal" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Energy", statement: "Gas > liquid > solid." }],
            steps: [{ reasoning: "Recall.", working: "\\text{gas}", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Gas",
            commonErrors: ["Solids have most order, not energy."],
          },
        },
        {
          id: "ciep-u9-states-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish evaporation from boiling.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Evap vs boil", statement: "Evap: surface, any T. Boil: throughout, fixed T." }],
            steps: [
              { reasoning: "Where.", marks: 1, markCode: "M" },
              { reasoning: "Temperature.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaporation occurs at the surface at any temperature; boiling occurs throughout at a fixed temperature.",
            commonErrors: ["Saying evaporation needs 100°C."],
          },
        },
        {
          id: "ciep-u9-states-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why gases are easily compressed but solids are not.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Compressibility", statement: "Gas particles far apart → space to compress." }],
            steps: [
              { reasoning: "Gas particles far apart.", marks: 1, markCode: "M" },
              { reasoning: "Large empty spaces.", marks: 1, markCode: "M" },
              { reasoning: "Solid particles close-packed.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gas particles are far apart with large empty spaces between them, so they can be pushed closer together; solid particles are already close-packed with no room.",
            commonErrors: ["Saying 'gas particles are soft' — it's spacing."],
          },
        },
        {
          id: "ciep-u9-states-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the particle model of solids, liquids and gases.",
          parts: [
            { label: "a", prompt: "Compare arrangement.", marks: 3 },
            { label: "b", prompt: "Compare movement.", marks: 3 },
            { label: "c", prompt: "Explain why temperature stays constant during state change.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "States", statement: "Arrangement: regular→disordered→random; movement: vibrate→slide→fast." }],
            steps: [
              { part: "a", reasoning: "Solid regular close.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Liquid disordered; gas far apart.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Solid vibrates.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Liquid slides; gas fast random.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Energy used to break attractions.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Not raising KE.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) regular→disordered→random (b) vibrate→slide→fast (c) energy breaks bonds not raises T",
            commonErrors: ["In (c) saying temperature rises during melting — it stays constant."],
          },
        },
      ],
    },
    {
      id: "ciep-u9-gas-pressure",
      title: "Gas pressure and kinetic theory",
      skill: "Explain gas pressure using particle collisions and absolute zero.",
      lesson: {
        sections: [
          {
            heading: "Gas pressure",
            body: "Pressure = force per unit area from particle collisions with container walls. More particles/faster particles → more collisions → higher pressure.",
          },
          {
            heading: "Absolute zero",
            body: "−273°C (0 K) — particles have minimum kinetic energy. Temperature in Kelvin: K = °C + 273.",
          },
          {
            heading: "Temperature and pressure",
            body: "Higher temperature → faster particles → more forceful collisions → higher pressure (at constant volume).",
          },
        ],
        keyFormulas: [
          { name: "Kelvin", statement: "$K = \\text{°C} + 273$" },
        ],
        workedExample: {
          problem: "Convert 27°C to Kelvin.",
          solution: "K = 27 + 273 = 300 K.",
        },
      },
      questions: [
        {
          id: "ciep-u9-gas-pressure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is absolute zero in Celsius?",
          response: { type: "mcq", choices: [
            { id: "a", text: "0°C" }, { id: "b", text: "−273°C" }, { id: "c", text: "−100°C" }, { id: "d", text: "100°C" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Absolute zero", statement: "−273°C / 0 K." }],
            steps: [{ reasoning: "Recall.", working: "-273^\\circ\\text{C}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** −273°C",
            commonErrors: ["0°C is ice point, not absolute zero."],
          },
        },
        {
          id: "ciep-u9-gas-pressure-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain what causes gas pressure.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Gas pressure", statement: "Particle collisions with walls." }],
            steps: [
              { reasoning: "Particles collide with walls.", marks: 1, markCode: "M" },
              { reasoning: "Each collision = force → pressure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gas pressure is caused by particles colliding with the container walls — each collision exerts a force, and many collisions create pressure.",
            commonErrors: ["Saying 'gas pushes on walls' without collision explanation."],
          },
        },
        {
          id: "ciep-u9-gas-pressure-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why gas pressure increases when temperature rises at constant volume.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "P-T relation", statement: "Higher T → faster particles → more forceful collisions." }],
            steps: [
              { reasoning: "Temperature ↑ → KE ↑.", marks: 1, markCode: "M" },
              { reasoning: "Particles move faster.", marks: 1, markCode: "M" },
              { reasoning: "More forceful + more frequent collisions.", marks: 1, markCode: "M" },
              { reasoning: "Pressure rises.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Higher temperature gives particles more kinetic energy, so they move faster and collide more forcefully and frequently with walls — increasing pressure.",
            commonErrors: ["Saying 'particles expand' — they move faster."],
          },
        },
        {
          id: "ciep-u9-gas-pressure-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain gas pressure using the kinetic particle model.",
          parts: [
            { label: "a", prompt: "Describe what gas particles do.", marks: 3 },
            { label: "b", prompt: "Explain how collisions create pressure.", marks: 3 },
            { label: "c", prompt: "Explain effect of temperature on pressure.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Gas model", statement: "Fast random particles → wall collisions → pressure." }],
            steps: [
              { part: "a", reasoning: "Far apart, fast random motion.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Collide with walls and each other.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Each collision exerts force.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Many collisions = continuous force.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Force/area = pressure.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Higher T → faster particles.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "More forceful collisions.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Pressure increases.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) fast random, collide walls (b) force/area=P (c) faster→higher P",
            commonErrors: ["In (b) forgetting force per area definition."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciep-u9-states-gases-notes",
      title: "States of matter and gas pressure — revision notes",
      summary: "Particle model, changes of state, gas pressure, absolute zero.",
      sections: [
        {
          heading: "Key facts",
          body: "Solid: vibrate; liquid: slide; gas: fast random. Evap=surface any T; boil=throughout fixed T. Gas pressure from wall collisions. Absolute zero = −273°C/0K. K = °C+273.",
        },
        {
          heading: "Exam technique",
          body: "- Temperature constant during state change (energy breaks bonds).\n- Gas compressible: far apart particles.",
        },
      ],
    },
  ],
};
