import type { Lesson } from "../../../types.ts";

export const lesson111: Lesson = {
  id: "ciecy-u1-lesson-1-1",
  code: "1-1",
  title: "Particle Model and Changing State",
  goal: "I CAN describe the particle model of matter and explain changes of state and diffusion.",
  standards: ["0654 1.1"],
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
      id: "ciecy-u1-particle-model",
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
          id: "ciecy-u1-particle-model-q1",
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
          id: "ciecy-u1-particle-model-q2",
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
          id: "ciecy-u1-particle-model-q3",
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
          id: "ciecy-u1-particle-model-q4",
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
        {
          id: "ciecy-u1-particle-model-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which state of matter are the particles arranged in a regular, fixed pattern?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Solid" }, { id: "b", text: "Liquid" }, { id: "c", text: "Gas" }, { id: "d", text: "Vapour" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Particle arrangement", statement: "Solid = regular fixed arrangement." }],
            steps: [{ reasoning: "Recall particle model.", working: "\\text{solid}", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Solid",
            commonErrors: ["Liquid particles are close but disordered."],
          },
        },
        {
          id: "ciecy-u1-particle-model-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which state has particles that are far apart and move rapidly in random directions?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Solid" }, { id: "b", text: "Liquid" }, { id: "c", text: "Gas" }, { id: "d", text: "Plasma" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Gas particles", statement: "Far apart, fast random motion." }],
            steps: [{ reasoning: "Recall.", working: "\\text{gas}", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Gas",
            commonErrors: ["Choosing liquid — liquid particles slide but stay close."],
          },
        },
        {
          id: "ciecy-u1-particle-model-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A substance has a fixed shape and volume. Which state is it?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Solid" }, { id: "b", text: "Liquid" }, { id: "c", text: "Gas" }, { id: "d", text: "Cannot tell" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "States", statement: "Fixed shape + volume = solid." }],
            steps: [{ reasoning: "Match properties.", working: "\\text{fixed shape+volume}", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Solid",
            commonErrors: ["Gas has neither fixed shape nor volume."],
          },
        },
        {
          id: "ciecy-u1-particle-model-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two differences between the particles in a gas and a liquid.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Gas vs liquid", statement: "Gas: far apart, fast random. Liquid: close, slide." }],
            steps: [
              { reasoning: "Spacing difference.", working: "\\text{far apart vs close}", marks: 1, markCode: "M" },
              { reasoning: "Movement difference.", working: "\\text{fast random vs slide}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gas particles are far apart and move rapidly in random directions; liquid particles are close together and only slide past each other.",
            commonErrors: ["Repeating the same point twice."],
          },
        },
        {
          id: "ciecy-u1-particle-model-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain, using the particle model, why a gas fills all the space in its container.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Gas behaviour", statement: "Fast random motion + large spaces between particles." }],
            steps: [
              { reasoning: "Particles move randomly in all directions.", marks: 1, markCode: "M" },
              { reasoning: "They spread out and collide with all walls.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gas particles have high energy and move randomly in all directions, colliding with the container walls and spreading to occupy all available space.",
            commonErrors: ["Saying particles 'float' — they move by random motion."],
          },
        },
        {
          id: "ciecy-u1-particle-model-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how the smell of perfume spreads through a room using the particle model.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Diffusion", statement: "Particles move high → low concentration." }],
            steps: [
              { reasoning: "Perfume evaporates into gas particles.", marks: 1, markCode: "M" },
              { reasoning: "Particles move randomly from high to low concentration.", marks: 1, markCode: "M" },
              { reasoning: "Spread through air until uniform.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Perfume molecules evaporate and, being in the gas state, diffuse rapidly from the high concentration near the bottle to the low concentration across the room until evenly spread.",
            commonErrors: ["Saying smell 'travels as a wave' — it's particle diffusion."],
          },
        },
        {
          id: "ciecy-u1-particle-model-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "At constant temperature, a gas has a volume of 100 cm³ and a pressure of 80 kPa. Calculate the pressure when the volume is compressed to 40 cm³.",
          response: { type: "numeric", parts: [{ label: "pressure", answer: 200, unit: "kPa" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Boyle's law", statement: "P₁V₁ = P₂V₂ at constant T." }],
            steps: [
              { reasoning: "Rearrange for P₂.", working: "P_2 = \\frac{P_1V_1}{V_2}", marks: 1, markCode: "M" },
              { reasoning: "Calculate.", working: "P_2 = \\frac{80 \\times 100}{40} = 200", marks: 1, markCode: "A" },
            ],
            finalAnswer: "200 kPa",
            commonErrors: ["Halving the pressure — halving volume doubles pressure."],
          },
        },
        {
          id: "ciecy-u1-particle-model-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "At constant pressure, a gas occupies 150 cm³ at 300 K. State the factor by which the volume will increase when the temperature is raised to 600 K.",
          response: { type: "numeric", parts: [{ label: "factor", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Charles's law", statement: "V ∝ T at constant P." }],
            steps: [
              { reasoning: "V₂/V₁ = T₂/T₁.", working: "\\frac{V_2}{V_1} = \\frac{T_2}{T_1}", marks: 1, markCode: "M" },
              { reasoning: "Factor = 600/300 = 2.", working: "\\frac{600}{300} = 2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 (volume doubles)",
            commonErrors: ["Using °C — temperatures must be in kelvin."],
          },
        },
        {
          id: "ciecy-u1-particle-model-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A gas is heated at constant volume from 300 K to 450 K. State the factor by which its pressure increases.",
          response: { type: "numeric", parts: [{ label: "factor", answer: 1.5 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Pressure–temperature law", statement: "P ∝ T at constant V." }],
            steps: [
              { reasoning: "P₂/P₁ = T₂/T₁.", working: "\\frac{P_2}{P_1} = \\frac{T_2}{T_1}", marks: 1, markCode: "M" },
              { reasoning: "Factor = 450/300 = 1.5.", working: "\\frac{450}{300} = 1.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.5",
            commonErrors: ["Adding 150 K to pressure — it's proportional, not additive."],
          },
        },
        {
          id: "ciecy-u1-particle-model-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many states of matter are described by the particle model in this syllabus?",
          response: { type: "numeric", parts: [{ label: "states", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "property", name: "States", statement: "Solid, liquid, gas." }],
            steps: [{ reasoning: "Count states.", working: "3", marks: 1, markCode: "B" }],
            finalAnswer: "3",
            commonErrors: ["Including plasma — only three states are covered."],
          },
        },
        {
          id: "ciecy-u1-particle-model-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the evidence for the particle model provided by Brownian motion.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Brownian motion", statement: "Visible particles jittered by invisible moving particles." }],
            steps: [
              { reasoning: "Observation: pollen grains move randomly.", marks: 1, markCode: "M" },
              { reasoning: "Cause: collisions with moving water molecules.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: evidence particles exist and move.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pollen grains in water move in a random, jerky way because invisible water molecules constantly collide with them — evidence that matter is made of small, moving particles.",
            commonErrors: ["Saying the pollen moves by itself."],
          },
        },
        {
          id: "ciecy-u1-particle-model-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Use the particle model to explain the properties of the three states of matter.",
          parts: [
            { label: "a", prompt: "Explain why solids keep their shape.", marks: 3 },
            { label: "b", prompt: "Explain why liquids flow but have a fixed volume.", marks: 3 },
            { label: "c", prompt: "Explain why gases expand to fill a container.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Particle model", statement: "Arrangement + movement + energy determine state properties." }],
            steps: [
              { part: "a", reasoning: "Particles in fixed positions.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Only vibrate — cannot slide.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Shape retained.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Particles close but can slide past.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Take shape of container.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Fixed volume — particles stay close.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Particles far apart, high energy.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Random motion → collide with all walls.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Fills all space.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) fixed positions→vibrate only→shape kept (b) close particles slide→flows but fixed volume (c) far apart+random→fills space",
            commonErrors: ["In (b) saying liquids have no fixed volume."],
          },
        },
      ],
    },
    {
      id: "ciecy-u1-changing-state",
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
          id: "ciecy-u1-changing-state-q1",
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
          id: "ciecy-u1-changing-state-q2",
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
          id: "ciecy-u1-changing-state-q3",
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
          id: "ciecy-u1-changing-state-q4",
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
      id: "ciecy-u1-states-notes",
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
