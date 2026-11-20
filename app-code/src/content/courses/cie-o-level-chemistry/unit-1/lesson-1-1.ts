import type { Lesson } from "../../../types.ts";

export const lesson111: Lesson = {
  id: "olchem-u1-lesson-1-1",
  code: "1-1",
  title: "Particle Model and Changing State",
  goal: "I CAN describe the particle model of matter and explain changes of state and diffusion.",
  standards: ["5070 1.1"],
  vocabulary: [
    { term: "Particle model", definition: "Matter made of tiny particles in constant motion; arrangement/energy determines state." },
    { term: "Diffusion", definition: "Net movement of particles from high to low concentration." },
    { term: "Sublimation", definition: "Solid changes directly to gas without becoming liquid." },
    { term: "Evaporation", definition: "Liquid → gas at the surface, below boiling point." },
    { term: "Condensation", definition: "Gas → liquid." },
    { term: "Melting/Freezing", definition: "Solid ↔ liquid at melting point." },
    { term: "Boiling", definition: "Liquid → gas throughout, at boiling point." },
    { term: "Brownian motion", definition: "Random motion of particles in a fluid." },
  ],
  concepts: [
    {
      id: "olchem-u1-particle-model",
      title: "The particle model",
      skill: "Describe solids, liquids and gases in terms of particle arrangement, movement and energy.",
      lesson: {
        sections: [
          {
            heading: "Three states",
            body: "| State | Arrangement | Movement | Energy |\n|---|---|---|---|\n| Solid | regular, close-packed | vibrate in fixed positions | lowest |\n| Liquid | close, disordered | slide past each other | medium |\n| Gas | far apart, random | fast, random motion | highest |",
          },
          {
            heading: "Evidence for particles",
            body: "- **Diffusion**: particles spread out (e.g. smell travels).\n- **Brownian motion**: pollen grains jittered by invisible water molecules.\n- Solids keep shape, liquids flow, gases fill containers — all explained by particle model.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Explain why a gas fills its container completely.",
          solution: "Gas particles are far apart with high energy, moving randomly in all directions — they collide with walls and spread to occupy all available space.",
        },
      },
      questions: [
        {
          id: "olchem-u1-particle-model-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which state do particles have the most energy?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Solid" }, { id: "b", text: "Liquid" }, { id: "c", text: "Gas" }, { id: "d", text: "All equal" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Particle energy", statement: "Gas > liquid > solid." }],
            steps: [{ reasoning: "Gas particles move fastest.", working: "\\text{gas}", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Gas",
            commonErrors: ["Thinking solids have more energy because they're 'hard'."],
          },
        },
        {
          id: "olchem-u1-particle-model-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two differences between the particles in a solid and a liquid.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "States comparison", statement: "Solid: fixed positions, vibrate. Liquid: slide past, no fixed positions." }],
            steps: [
              { reasoning: "Arrangement difference.", working: "\\text{regular vs disordered}", marks: 1, markCode: "M" },
              { reasoning: "Movement difference.", working: "\\text{vibrate vs slide}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Solid particles are regularly arranged and only vibrate; liquid particles are disordered and slide past each other.",
            commonErrors: ["Saying liquids have 'no movement' — they flow."],
          },
        },
        {
          id: "olchem-u1-particle-model-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how Brownian motion provides evidence for the particle model.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Brownian motion", statement: "Visible particles jittered by invisible moving particles." }],
            steps: [
              { reasoning: "Describe observation.", working: "\\text{random jitter}", marks: 1, markCode: "M" },
              { reasoning: "Invisible particles cause it.", marks: 1, markCode: "M" },
              { reasoning: "Conclude evidence for particles.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pollen grains in water move randomly because they are bombarded by invisible, constantly moving water molecules — direct evidence that matter is made of moving particles.",
            commonErrors: ["Saying pollen moves by itself — it's caused by water molecules."],
          },
        },
        {
          id: "olchem-u1-particle-model-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe the particle model of the three states of matter.",
          parts: [
            { label: "a", prompt: "Compare particle arrangement in solid, liquid and gas.", marks: 3 },
            { label: "b", prompt: "Compare particle movement in each state.", marks: 3 },
            { label: "c", prompt: "Explain why gases are easily compressed.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "States", statement: "Arrangement: regular→disordered→random; movement: vibrate→slide→fast random." }],
            steps: [
              { part: "a", reasoning: "Solid regular close-packed.", working: "\\text{solid}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Liquid close disordered; gas far apart.", working: "\\text{liquid/gas}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete arrangement.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Solid vibrates only.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Liquid slides; gas moves fast randomly.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete movement.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Gas particles far apart → space to compress.", working: "\\text{empty space}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) regular close → disordered close → far apart (b) vibrate → slide → fast random (c) large empty spaces between particles",
            commonErrors: ["In (c) saying 'gas particles are small' — it's the space between them."],
          },
        },
      ],
    },
    {
      id: "olchem-u1-changing-state",
      title: "Changing state and diffusion",
      skill: "Explain melting, boiling, sublimation, evaporation and diffusion.",
      lesson: {
        sections: [
          {
            heading: "Changes of state",
            body: "- **Melting** solid→liquid; **freezing** reverse — at fixed melting point.\n- **Boiling** liquid→gas throughout — at fixed boiling point.\n- **Evaporation** liquid→gas at surface only, any temperature.\n- **Condensation** gas→liquid.\n- **Sublimation** solid→gas directly (e.g. dry ice, iodine).",
          },
          {
            heading: "Diffusion",
            body: "Particles move from **high to low concentration** due to random motion — faster in gases (more space), slower in liquids, negligible in solids. Rate increases with temperature (more kinetic energy).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does a puddle disappear on a warm day without boiling?",
          solution: "Evaporation: surface water molecules gain enough energy to escape as gas below the boiling point.",
        },
      },
      questions: [
        {
          id: "olchem-u1-changing-state-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is sublimation?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Solid changes directly to gas" }, { id: "b", text: "Liquid to gas" }, { id: "c", text: "Gas to solid" }, { id: "d", text: "Solid to liquid" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Sublimation", statement: "Solid → gas directly." }],
            steps: [{ reasoning: "Recall definition.", working: "\\text{sublimation}", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Solid changes directly to gas",
            commonErrors: ["Including a liquid stage — sublimation skips it."],
          },
        },
        {
          id: "olchem-u1-changing-state-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish evaporation from boiling.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Evaporation vs boiling", statement: "Evap: surface only, any temp. Boiling: throughout, fixed temp." }],
            steps: [
              { reasoning: "Where it occurs.", working: "\\text{surface vs throughout}", marks: 1, markCode: "M" },
              { reasoning: "Temperature condition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaporation happens at the surface at any temperature; boiling happens throughout the liquid at a fixed boiling point.",
            commonErrors: ["Saying evaporation needs 100°C."],
          },
        },
        {
          id: "olchem-u1-changing-state-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why diffusion is faster in gases than in liquids.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Diffusion rate", statement: "Faster where particles have more space and energy." }],
            steps: [
              { reasoning: "Gas particles farther apart → move freely.", marks: 1, markCode: "M" },
              { reasoning: "Gas particles have more kinetic energy.", marks: 1, markCode: "M" },
              { reasoning: "Liquid particles closer → more collisions.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gas particles are far apart with high kinetic energy, so they mix rapidly; liquid particles are close together and collide frequently, slowing diffusion.",
            commonErrors: ["Only citing temperature — it's about particle spacing and energy."],
          },
        },
        {
          id: "olchem-u1-changing-state-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe how the particle model explains changes of state.",
          parts: [
            { label: "a", prompt: "Explain melting using particle energy.", marks: 3 },
            { label: "b", prompt: "Explain boiling using particle energy.", marks: 3 },
            { label: "c", prompt: "Explain why temperature stays constant during a change of state.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Changes of state", statement: "Energy breaks/overcomes particle attractions; temperature constant while state changes." }],
            steps: [
              { part: "a", reasoning: "Heating gives particles energy to overcome attractions.", working: "\\text{energy input}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Particles move from fixed positions → slide.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Conclude liquid formed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "More energy → particles escape as gas.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Throughout liquid, not just surface.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Conclude.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Energy used to break attractions, not raise temperature.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) energy overcomes attractions → particles slide (b) more energy → escape as gas throughout (c) energy breaks bonds not raises KE",
            commonErrors: ["In (c) saying 'temperature rises during boiling' — it stays constant."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olchem-u1-states-notes",
      title: "Particle model and changing state — revision notes",
      summary: "Particle arrangement/movement in three states, diffusion, evaporation vs boiling, sublimation.",
      sections: [
        {
          heading: "Key facts",
          body: "Solid: regular, vibrate. Liquid: disordered, slide. Gas: far apart, fast random. Diffusion: high→low concentration, fastest in gases. Evaporation = surface only any temp; boiling = throughout at fixed temp. Sublimation = solid→gas directly.",
        },
        {
          heading: "Exam technique",
          body: "- Always link state properties to particle arrangement AND movement.\n- 'Evidence for particles': diffusion, Brownian motion, gases filling containers.",
        },
      ],
    },
  ],
};
