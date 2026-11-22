import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "cils-u5-lesson-5-1",
  code: "5-1",
  title: "States of matter and particle theory",
  goal: "I CAN describe the three states of matter and explain them using particle theory.",
  standards: ["0893 Physics: states of matter"],
  vocabulary: [
    { term: "Solid", definition: "Fixed shape and volume — particles tightly packed, vibrate in place." },
    { term: "Liquid", definition: "Fixed volume, takes container shape — particles slide past each other." },
    { term: "Gas", definition: "No fixed shape or volume — particles far apart, move freely." },
    { term: "Diffusion", definition: "Spread of particles from high to low concentration." },
    { term: "Melting", definition: "Solid → liquid when heated." },
    { term: "Evaporation", definition: "Liquid → gas at surface below boiling point." },
  ],
  concepts: [
    {
      id: "cils-u5-states",
      title: "States of matter",
      skill: "Describe solids, liquids and gases using particle theory.",
      lesson: {
        sections: [
          {
            heading: "Particle model",
            body: "All matter made of tiny particles. In solids: tightly packed, vibrate only. Liquids: close but can slide. Gases: far apart, move fast in all directions.",
          },
          {
            heading: "Properties comparison",
            body: "| Property | Solid | Liquid | Gas |\n|---|---|---|---|\n| Shape | Fixed | Container | Fills space |\n| Volume | Fixed | Fixed | Fills container |\n| Compressible | No | Slightly | Yes |",
          },
          {
            heading: "Phase changes",
            body: "Heating: solid→liquid (melting)→gas (boiling/evaporation). Cooling reverses: condensation, freezing.",
          },
        ],
        keyFormulas: [
          { name: "States", statement: "Solid: fixed; liquid: fixed volume; gas: fills container. Heating → more energetic particles." },
        ],
        workedExample: {
          problem: "Why can you compress a gas but not a solid?",
          solution: "Gas particles are far apart with empty space between — can be pushed closer. Solid particles are already touching.",
        },
      },
      questions: [
        {
          id: "cils-u5-states-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which state has particles that vibrate in fixed positions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plasma" },
              { id: "b", text: "Solid" },
              { id: "c", text: "Gas" },
              { id: "d", text: "Liquid" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Solid", statement: "Particles tightly packed, vibrate in place." },
            ],
            steps: [
              { reasoning: "Only solids have fixed particle positions.", working: "solid", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Solid",
            commonErrors: ["Choosing (b) — liquid particles slide past each other."],
          },
        },
        {
          id: "cils-u5-states-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the three states of matter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "States", statement: "Solid, liquid, gas." },
            ],
            steps: [
              { reasoning: "Three states.", working: "states", marks: 1, markCode: "M" },
              { reasoning: "All named correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Solid, liquid, gas.",
            commonErrors: ["Adding 'plasma' — not required at this level."],
          },
        },
        {
          id: "cils-u5-states-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why gases fill their containers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Gas behaviour", statement: "Particles move freely in all directions until they hit container walls." },
            ],
            steps: [
              { reasoning: "Gas particles have high energy — move randomly in all directions.", working: "random motion", marks: 1, markCode: "M" },
              { reasoning: "No fixed positions — spread throughout available space.", working: "spread", marks: 1, markCode: "M" },
              { reasoning: "Collide with walls — exert pressure.", working: "pressure", marks: 1, markCode: "M" },
              { reasoning: "Explanation complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gas particles move freely in all directions — spread to fill all available space.",
            commonErrors: ["Saying 'gas expands' — particles move until constrained by container."],
          },
        },
        {
          id: "cils-u5-states-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Explain changes of state using particle theory.",
          parts: [
            { label: "a", prompt: "Describe melting at particle level.", marks: 3 },
            { label: "b", prompt: "Describe evaporation at particle level.", marks: 3 },
            { label: "c", prompt: "Why does temperature stay constant during melting?", marks: 2 },
            { label: "d", prompt: "What is deposition?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Phase changes", statement: "Heating adds energy — particles overcome attractions; temp constant during change." },
            ],
            steps: [
              { part: "a", reasoning: "Heat energy breaks bonds between particles — they gain energy to slide past each other.", working: "bonds break", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Solid→liquid; particles now free to move.", working: "free", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Clear.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Surface particles gain enough energy to escape as gas — below boiling point.", working: "escape", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Only surface particles — highest energy ones.", working: "surface", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Energy goes into breaking bonds, not raising temperature — latent heat.", working: "latent", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Gas→solid directly, skipping liquid (e.g. frost formation).", working: "deposition", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) heat breaks bonds (b) surface particles escape (c) energy→bonds not temp (d) gas→solid",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Particle explanation.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Particle explanation.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
            ],
            commonErrors: ["In (c) saying 'temperature rises' — it stays constant during phase change."],
          },
        },
        {
          id: "cils-u5-states-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which state of matter has a fixed volume but takes the shape of its container?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plasma" },
              { id: "b", text: "Liquid" },
              { id: "c", text: "Gas" },
              { id: "d", text: "Solid" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Liquid", statement: "Fixed volume, takes container shape — particles slide past each other." },
            ],
            steps: [
              { reasoning: "Only liquids have fixed volume but no fixed shape.", working: "liquid", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Liquid",
            commonErrors: ["Choosing (b) — solids also have fixed shape."],
          },
        },
        {
          id: "cils-u5-states-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which state are the particles farthest apart?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gas" },
              { id: "b", text: "Liquid" },
              { id: "c", text: "All the same" },
              { id: "d", text: "Solid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Particle spacing", statement: "Gas particles are far apart with empty space between them." },
            ],
            steps: [
              { reasoning: "Gases have the largest separation between particles.", working: "gas", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Gas",
            commonErrors: ["Choosing (d) — spacing differs greatly between states."],
          },
        },
        {
          id: "cils-u5-states-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Evaporation is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A solid changing directly to a gas" },
              { id: "b", text: "A liquid changing to a gas throughout at the boiling point" },
              { id: "c", text: "A liquid changing to a gas at its surface below the boiling point" },
              { id: "d", text: "A gas changing to a liquid" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Evaporation", statement: "Liquid → gas at the surface, below boiling point." },
            ],
            steps: [
              { reasoning: "Evaporation happens at the surface and below boiling point.", working: "surface, below bp", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Liquid → gas at surface below boiling point",
            commonErrors: ["Choosing (b) — that describes boiling."],
          },
        },
        {
          id: "cils-u5-states-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why can gases be compressed much more easily than solids?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gas particles vibrate faster than solid particles" },
              { id: "b", text: "Gas particles are far apart with empty space between them" },
              { id: "c", text: "Solids contain no particles at all" },
              { id: "d", text: "Gas particles are much heavier than solid particles" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Compressibility", statement: "Compression works by reducing the space between particles." },
            ],
            steps: [
              { reasoning: "Large empty spaces between gas particles can be reduced.", working: "empty space", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Gas particles are far apart with empty space between them",
            commonErrors: ["Choosing (c) — vibration speed does not affect compressibility."],
          },
        },
        {
          id: "cils-u5-states-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "While a pure substance is melting, its temperature:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rises steadily throughout" },
              { id: "b", text: "Rises and then falls" },
              { id: "c", text: "Stays constant while solid and liquid coexist" },
              { id: "d", text: "Falls steadily throughout" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Latent heat", statement: "During a change of state, energy goes into separating particles — temperature stays constant." },
            ],
            steps: [
              { reasoning: "Energy is used to break bonds, not raise temperature.", working: "latent heat", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Stays constant while solid and liquid coexist",
            commonErrors: ["Choosing (b) — temperature only rises before and after the change."],
          },
        },
        {
          id: "cils-u5-states-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Diffusion is the movement of particles:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Always upwards against gravity" },
              { id: "b", text: "Only in solids, never in gases" },
              { id: "c", text: "From a region of low concentration to a region of high concentration" },
              { id: "d", text: "From a region of high concentration to a region of low concentration" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Diffusion", statement: "Spread of particles from high to low concentration." },
            ],
            steps: [
              { reasoning: "Diffusion is down the concentration gradient.", working: "high to low", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** High to low concentration",
            commonErrors: ["Choosing (b) — particles spread out, they do not clump together."],
          },
        },
        {
          id: "cils-u5-states-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A solid keeps its own fixed shape mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is always colder than its surroundings" },
              { id: "b", text: "Its particles move freely in all directions" },
              { id: "c", text: "It contains no particles" },
              { id: "d", text: "Its particles are tightly packed and only vibrate in fixed positions" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solid structure", statement: "Solid particles are locked in position — they vibrate but do not move past each other." },
            ],
            steps: [
              { reasoning: "Fixed particle positions give a fixed shape.", working: "vibrate in place", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Particles vibrate in fixed positions",
            commonErrors: ["Choosing (b) — free movement describes gases."],
          },
        },
        {
          id: "cils-u5-states-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these substances is a gas at room temperature?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water" },
              { id: "b", text: "Wood" },
              { id: "c", text: "Iron" },
              { id: "d", text: "Oxygen" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "States at room temperature", statement: "Oxygen is a gas; iron and wood are solids; water is a liquid." },
            ],
            steps: [
              { reasoning: "Only oxygen is a gas at room temperature.", working: "oxygen", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Oxygen",
            commonErrors: ["Choosing (c) — water is a liquid at room temperature."],
          },
        },
        {
          id: "cils-u5-states-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Water freezes at $0\\ ^\\circ\\text{C}$. At what temperature does liquid water freeze? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Freezing point", answer: 0, unit: "°C" }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Freezing point", statement: "Freezing and melting occur at the same temperature for a pure substance." },
            ],
            steps: [
              { reasoning: "Freezing point equals melting point.", working: "0", marks: 1, markCode: "M" },
              { reasoning: "Water freezes at 0 °C.", working: "0 °C", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0\\ ^\\circ\\text{C}$",
          },
        },
        {
          id: "cils-u5-states-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Water boils at $100\\ ^\\circ\\text{C}$ at sea level. What is this temperature in kelvin? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Temperature", answer: 373, unit: "K" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Celsius to kelvin", statement: "$T/\\text{K} = T/^\\circ\\text{C} + 273$" },
            ],
            steps: [
              { reasoning: "Add 273 to the Celsius value.", working: "100 + 273", marks: 1, markCode: "M" },
              { reasoning: "$100 + 273 = 373\\ \\text{K}$.", working: "373", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$373\\ \\text{K}$",
          },
        },
        {
          id: "cils-u5-states-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A gas is cooled and changes into a liquid. How many changes of state occur if it then freezes? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Changes of state", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Phase changes", statement: "Gas→liquid is condensation; liquid→solid is freezing." },
            ],
            steps: [
              { reasoning: "Condensation (gas→liquid) and freezing (liquid→solid) — two changes.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "Both changes named and counted correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
          },
        },
        {
          id: "cils-u5-states-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A block of ice at $-10\\ ^\\circ\\text{C}$ is heated until it becomes steam at $110\\ ^\\circ\\text{C}$. Describe the sequence of changes of state using particle theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Phase sequence", statement: "Heating: melting → boiling; particles gain energy at each stage." },
            ],
            steps: [
              { reasoning: "Ice warms to melting point, then melts — particles gain energy to slide past each other.", working: "melting", marks: 1, markCode: "M" },
              { reasoning: "Water warms to boiling point, then boils — particles escape as gas.", working: "boiling", marks: 1, markCode: "M" },
              { reasoning: "Temperature constant during each change; rises between changes.", working: "constant during change", marks: 1, markCode: "M" },
              { reasoning: "Sequence complete and accurate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Solid→liquid (melting)→gas (boiling); temp constant during each change, rising between them.",
            commonErrors: ["Forgetting that temperature stays constant during melting and boiling."],
          },
        },
      ],
    },
    {
      id: "cils-u5-mixtures",
      title: "Mixtures, solutions and separation",
      skill: "Describe mixtures, solutions and methods of separating substances.",
      lesson: {
        sections: [
          {
            heading: "Mixtures vs pure substances",
            body: "Mixture: two+ substances not chemically joined — can be separated physically. Pure substance: single element or compound.",
          },
          {
            heading: "Types of mixtures",
            body: "- **Solution**: dissolved (salt in water) — homogeneous\n- **Suspension**: particles visible, settle out (muddy water)\n- **Colloid**: particles intermediate (milk, fog)",
          },
          {
            heading: "Separation methods",
            body: "Filtration (insoluble solid), evaporation/crystallisation (dissolved solid), distillation (liquid from liquid), chromatography (coloured dyes).",
          },
        ],
        keyFormulas: [
          { name: "Separation", statement: "Filter insoluble; evaporate dissolved; distil liquids; chromatograph dyes." },
        ],
        workedExample: {
          problem: "How would you separate salt from sand?",
          solution: "Dissolve in water → filter out sand → evaporate water → salt crystals remain.",
        },
      },
      questions: [
        {
          id: "cils-u5-mix-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a mixture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Salt water" },
              { id: "b", text: "Oxygen gas" },
              { id: "c", text: "Distilled water" },
              { id: "d", text: "Pure gold" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mixture", statement: "Two+ substances physically combined, separable." },
            ],
            steps: [
              { reasoning: "Salt water = salt dissolved in water — mixture.", working: "salt water", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Salt water",
            commonErrors: ["Choosing (c) — pure water is a pure substance."],
          },
        },
        {
          id: "cils-u5-mix-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two methods of separating mixtures.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Separation", statement: "Filtration, evaporation, distillation, chromatography." },
            ],
            steps: [
              { reasoning: "Any two valid methods.", working: "methods", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Filtration, evaporation, distillation, chromatography (any two)",
            commonErrors: ["Saying 'freezing' — that's not standard separation."],
          },
        },
        {
          id: "cils-u5-mix-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how distillation separates a liquid mixture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Distillation", statement: "Different boiling points — heat, vapourise one, condense separately." },
            ],
            steps: [
              { reasoning: "Mixture heated — component with lower boiling point vapourises first.", working: "boiling point", marks: 1, markCode: "M" },
              { reasoning: "Vapour cooled in condenser → collected as pure liquid.", working: "condense", marks: 1, markCode: "M" },
              { reasoning: "Used for separating e.g. ethanol/water or desalination.", working: "application", marks: 1, markCode: "M" },
              { reasoning: "Process clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Heat → lower-boiling component vapourises → condense separately — based on different boiling points.",
            commonErrors: ["Confusing with evaporation — distillation collects vapour, evaporation just removes water."],
          },
        },
        {
          id: "cils-u5-mix-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Separate a mixture of salt, sand and iron filings.",
          parts: [
            { label: "a", prompt: "How to remove iron filings?", marks: 2 },
            { label: "b", prompt: "How to separate salt from sand?", marks: 3 },
            { label: "c", prompt: "Explain the principle behind each step.", marks: 2 },
            { label: "d", prompt: "How would you check purity?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Separation", statement: "Magnet for iron; dissolve-filter-evaporate for salt/sand." },
            ],
            steps: [
              { part: "a", reasoning: "Use magnet — iron is magnetic, others aren't.", working: "magnet", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Dissolve in water → salt dissolves, sand doesn't → filter sand → evaporate → salt crystals.", working: "dissolve-filter-evaporate", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Steps correct.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Magnetic property; solubility difference; evaporation removes solvent.", working: "principles", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Check melting point — pure substance has sharp melting point; or test solubility.", working: "purity test", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Valid method.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) magnet (b) dissolve-filter-evaporate (c) magnetic/solubility/evaporation (d) melting point test",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Steps correct.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Valid.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Invalid.", part: "d" },
            ],
            commonErrors: ["Trying to filter before dissolving — sand won't separate from salt that way."],
          },
        },
        {
          id: "cils-u5-mix-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which separation method removes an insoluble solid from a liquid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chromatography" },
              { id: "b", text: "Filtration" },
              { id: "c", text: "Distillation" },
              { id: "d", text: "Evaporation alone" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Filtration", statement: "Filter paper traps insoluble solids; the liquid (filtrate) passes through." },
            ],
            steps: [
              { reasoning: "Filtration separates insoluble solids from liquids.", working: "filtration", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Filtration",
            commonErrors: ["Choosing (d) — evaporation removes the solvent, not the insoluble solid."],
          },
        },
        {
          id: "cils-u5-mix-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a pure substance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Soil" },
              { id: "b", text: "Salt water" },
              { id: "c", text: "Distilled water" },
              { id: "d", text: "Air" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pure substance", statement: "A single element or compound — not a mixture." },
            ],
            steps: [
              { reasoning: "Distilled water is pure H₂O; the others are mixtures.", working: "H₂O", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Distilled water",
            commonErrors: ["Choosing (c) — air is a mixture of gases."],
          },
        },
        {
          id: "cils-u5-mix-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which separation technique is used to separate coloured dyes in ink?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Evaporation" },
              { id: "b", text: "Chromatography" },
              { id: "c", text: "Magnetic separation" },
              { id: "d", text: "Filtration" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Chromatography", statement: "Separates dissolved coloured substances by how far each travels up the paper." },
            ],
            steps: [
              { reasoning: "Chromatography separates coloured dyes/solutes.", working: "chromatography", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Chromatography",
            commonErrors: ["Choosing (b) — filtration only works for insoluble solids."],
          },
        },
        {
          id: "cils-u5-mix-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "To recover dissolved salt from salt water, the best method is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Filtration" },
              { id: "b", text: "Magnetic separation" },
              { id: "c", text: "Evaporation of the water" },
              { id: "d", text: "Decanting only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Evaporation", statement: "Heating evaporates the solvent, leaving the dissolved solid behind." },
            ],
            steps: [
              { reasoning: "Salt is dissolved so filtration cannot remove it — evaporate the water instead.", working: "evaporation", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Evaporation of the water",
            commonErrors: ["Choosing (b) — dissolved salt passes through filter paper."],
          },
        },
        {
          id: "cils-u5-mix-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A suspension differs from a solution because in a suspension:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The mixture is always clear" },
              { id: "b", text: "Particles are dissolved invisibly" },
              { id: "c", text: "No solid is present" },
              { id: "d", text: "Particles are visible and eventually settle out" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Suspension", statement: "Particles large enough to be seen and to settle out (e.g. muddy water)." },
            ],
            steps: [
              { reasoning: "Suspension particles are visible and settle; solution particles do not.", working: "settles out", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Particles visible and settle out",
            commonErrors: ["Choosing (b) — that describes a solution."],
          },
        },
        {
          id: "cils-u5-mix-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is fractional distillation needed to separate crude oil?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Its components have different colours" },
              { id: "b", text: "It contains only one substance" },
              { id: "c", text: "Its components have different boiling points" },
              { id: "d", text: "It cannot be heated safely" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fractional distillation", statement: "Mixture of liquids separated by boiling-point differences in a fractionating column." },
            ],
            steps: [
              { reasoning: "Crude oil fractions boil at different temperatures.", working: "boiling points", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Different boiling points",
            commonErrors: ["Choosing (b) — crude oil components are not separated by colour."],
          },
        },
        {
          id: "cils-u5-mix-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A mixture of iron filings and sulphur powder can be separated using:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Evaporation" },
              { id: "b", text: "A magnet" },
              { id: "c", text: "Universal indicator" },
              { id: "d", text: "Litmus paper" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Magnetism", statement: "Iron is magnetic; sulphur is not — so a magnet removes the iron." },
            ],
            steps: [
              { reasoning: "Magnetic property separates iron from sulphur.", working: "magnet", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A magnet",
            commonErrors: ["Choosing (b) — neither component dissolves or evaporates selectively."],
          },
        },
        {
          id: "cils-u5-mix-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an example of a colloid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Iron filings" },
              { id: "b", text: "Milk" },
              { id: "c", text: "Salt water" },
              { id: "d", text: "Distilled water" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Colloid", statement: "Particles intermediate between solution and suspension (e.g. milk, fog)." },
            ],
            steps: [
              { reasoning: "Milk is a colloid; salt water is a solution.", working: "milk", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Milk",
            commonErrors: ["Choosing (b) — salt water is a solution, not a colloid."],
          },
        },
        {
          id: "cils-u5-mix-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A student separates 40 g of sand from a mixture containing 60 g of salt and 40 g of sand. What percentage of the original mixture was sand? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage", answer: 40, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage composition", statement: "Percentage = part ÷ total × 100." },
            ],
            steps: [
              { reasoning: "Total mass = $40 + 60 = 100\\ \\text{g}$.", working: "100 g", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{40}{100} \\times 100 = 40\\%$.", working: "40%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40\\%$",
          },
        },
        {
          id: "cils-u5-mix-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A solution is made by dissolving 15 g of sugar in 85 g of water. What is the total mass of the solution in grams? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Total mass", answer: 100, unit: "g" }],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of mass", statement: "Mass of solution = mass of solute + mass of solvent." },
            ],
            steps: [
              { reasoning: "Add solute and solvent masses.", working: "15 + 85", marks: 1, markCode: "M" },
              { reasoning: "$15 + 85 = 100\\ \\text{g}$.", working: "100", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$100\\ \\text{g}$",
          },
        },
        {
          id: "cils-u5-mix-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many of these separation methods exist for mixtures: filtration, evaporation, distillation, chromatography? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Methods", answer: 4 }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Separation methods", statement: "Filtration, evaporation, distillation and chromatography are the four standard methods." },
            ],
            steps: [
              { reasoning: "Count the listed methods.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "Four methods named.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$",
          },
        },
        {
          id: "cils-u5-mix-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how you would separate a mixture of salt, sand and iron filings, giving the method and reason for each step.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Separation sequence", statement: "Use magnetic property first, then dissolve-filter-evaporate." },
            ],
            steps: [
              { reasoning: "Pass a magnet over the mixture — iron filings stick to it.", working: "magnet", marks: 1, markCode: "M" },
              { reasoning: "Dissolve the salt/sand in water — salt dissolves, sand does not.", working: "dissolve", marks: 1, markCode: "M" },
              { reasoning: "Filter to remove sand; evaporate the water to recover salt crystals.", working: "filter+evaporate", marks: 1, markCode: "M" },
              { reasoning: "All three components recovered with reasons.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Magnet removes iron → dissolve in water → filter sand → evaporate to get salt.",
            commonErrors: ["Filtering before dissolving — sand and salt would stay mixed."],
          },
        },
      ],
    },
    {
      id: "cils-u5-elements-compounds",
      title: "Elements, compounds and chemical symbols",
      skill: "Distinguish elements, compounds and mixtures; use chemical symbols.",
      lesson: {
        sections: [
          {
            heading: "Elements and compounds",
            body: "Element: one type of atom (H, O, Fe). Compound: two+ elements chemically joined (H₂O, CO₂, NaCl). Mixture: physically combined, separable.",
          },
          {
            heading: "Chemical symbols",
            body: "Each element has symbol: H=hydrogen, O=oxygen, C=carbon, N=nitrogen, Na=sodium, Cl=chlorine, Ca=calcium.",
          },
          {
            heading: "Formulas",
            body: "H₂O = 2 hydrogen + 1 oxygen. CO₂ = 1 carbon + 2 oxygen. NaCl = 1 sodium + 1 chlorine. Subscript numbers show atom counts.",
          },
        ],
        keyFormulas: [
          { name: "Symbols", statement: "H=hydrogen, O=oxygen, C=carbon, N=nitrogen, Na=sodium, Cl=chlorine." },
        ],
        workedExample: {
          problem: "What does CO₂ represent?",
          solution: "One carbon atom + two oxygen atoms — carbon dioxide compound.",
        },
      },
      questions: [
        {
          id: "cils-u5-elem-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an element?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water (H₂O)" },
              { id: "b", text: "Oxygen (O₂)" },
              { id: "c", text: "Salt (NaCl)" },
              { id: "d", text: "CO₂" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Element", statement: "One type of atom — O₂ is two oxygen atoms." },
            ],
            steps: [
              { reasoning: "O₂ = oxygen element; others are compounds.", working: "O₂", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Oxygen (O₂)",
            commonErrors: ["Choosing (b) — water is a compound of H and O."],
          },
        },
        {
          id: "cils-u5-elem-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does the formula NaCl represent?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "NaCl", statement: "Sodium chloride — one sodium + one chlorine atom." },
            ],
            steps: [
              { reasoning: "Na = sodium, Cl = chlorine — 1:1 ratio.", working: "Na+Cl", marks: 1, markCode: "M" },
              { reasoning: "Common salt compound.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sodium chloride — one sodium atom and one chlorine atom.",
            commonErrors: ["Reading as 'NACL' — Na is sodium, Cl is chlorine."],
          },
        },
        {
          id: "cils-u5-elem-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Distinguish between elements, compounds and mixtures with examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Classification", statement: "Element=one atom type; compound=chemically joined; mixture=physically combined." },
            ],
            steps: [
              { reasoning: "Element: O₂, Fe — one type of atom.", working: "element", marks: 1, markCode: "M" },
              { reasoning: "Compound: H₂O, CO₂ — elements chemically combined.", working: "compound", marks: 1, markCode: "M" },
              { reasoning: "Mixture: salt water, air — physically combined, separable.", working: "mixture", marks: 1, markCode: "M" },
              { reasoning: "Clear distinctions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Element=one atom type (O₂); compound=chemical join (H₂O); mixture=physical mix (salt water).",
            commonErrors: ["Confusing compound and mixture — compounds are chemically bonded."],
          },
        },
        {
          id: "cils-u5-elem-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Use chemical symbols and formulas.",
          parts: [
            { label: "a", prompt: "Write symbols for hydrogen, oxygen, carbon, nitrogen, sodium, chlorine.", marks: 3 },
            { label: "b", prompt: "What does H₂O represent?", marks: 1 },
            { label: "c", prompt: "What does CO₂ represent?", marks: 1 },
            { label: "d", prompt: "Write formula for a compound with 2 hydrogen and 1 oxygen atom.", marks: 2 },
            { label: "e", prompt: "Explain subscripts in formulas.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Symbols", statement: "H, O, C, N, Na, Cl; subscripts show atom counts." },
            ],
            steps: [
              { part: "a", reasoning: "H, O, C, N, Na, Cl — all correct.", working: "symbols", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Five+ correct.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All six.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Water — 2 hydrogen + 1 oxygen.", working: "H₂O", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Carbon dioxide — 1 carbon + 2 oxygen.", working: "CO₂", marks: 1, markCode: "M" },
              { part: "d", reasoning: "H₂O — 2H + 1O.", working: "H₂O", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Subscript number = number of atoms of that element.", working: "subscript", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) H,O,C,N,Na,Cl (b) water (c) CO₂ (d) H₂O (e) subscript=atom count",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "All correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Most.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "e" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "e" },
            ],
            commonErrors: ["Na vs N + a — sodium symbol is Na not NaCl."],
          },
        },
        {
          id: "cils-u5-elem-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a compound?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Iron ($\\text{Fe}$)" },
              { id: "b", text: "Helium ($\\text{He}$)" },
              { id: "c", text: "Carbon dioxide ($\\text{CO}_2$)" },
              { id: "d", text: "Oxygen ($\\text{O}_2$)" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Compound", statement: "Two or more elements chemically joined — e.g. CO₂." },
            ],
            steps: [
              { reasoning: "CO₂ contains carbon and oxygen chemically joined; the others are elements.", working: "CO₂", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Carbon dioxide ($\\text{CO}_2$)",
            commonErrors: ["Choosing (b) — O₂ is one element only."],
          },
        },
        {
          id: "cils-u5-elem-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the chemical symbol for sodium?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\text{N}$" },
              { id: "b", text: "$\\text{So}$" },
              { id: "c", text: "$\\text{Na}$" },
              { id: "d", text: "$\\text{S}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Symbols", statement: "Sodium = Na; nitrogen = N; sulphur = S." },
            ],
            steps: [
              { reasoning: "Sodium's symbol is Na (from Latin natrium).", working: "Na", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $\\text{Na}$",
            commonErrors: ["Choosing (b) or (c) — S and So are not sodium."],
          },
        },
        {
          id: "cils-u5-elem-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many oxygen atoms are in one molecule of $\\text{CO}_2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "4" },
              { id: "c", text: "3" },
              { id: "d", text: "1" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Subscripts", statement: "The subscript shows the number of atoms — CO₂ has 2 oxygen atoms." },
            ],
            steps: [
              { reasoning: "Subscript 2 after O means two oxygen atoms.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 2",
            commonErrors: ["Choosing (b) — ignoring the subscript."],
          },
        },
        {
          id: "cils-u5-elem-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which formula represents water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\text{H}_2\\text{O}$" },
              { id: "b", text: "$\\text{H}_3\\text{O}$" },
              { id: "c", text: "$\\text{H}_2\\text{O}_2$" },
              { id: "d", text: "$\\text{HO}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Water formula", statement: "Water = H₂O — two hydrogen atoms and one oxygen atom." },
            ],
            steps: [
              { reasoning: "H₂O is the correct formula for water.", working: "H₂O", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\text{H}_2\\text{O}$",
            commonErrors: ["Choosing (c) — H₂O₂ is hydrogen peroxide."],
          },
        },
        {
          id: "cils-u5-elem-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A mixture of salt and water can be separated because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water cannot dissolve salt" },
              { id: "b", text: "Mixtures can never be separated" },
              { id: "c", text: "Salt and water are the same substance" },
              { id: "d", text: "The substances are only physically combined, not chemically joined" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mixture", statement: "Components are physically combined and can be separated by physical means." },
            ],
            steps: [
              { reasoning: "No chemical bonds between salt and water — physical separation possible.", working: "physical", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Only physically combined",
            commonErrors: ["Choosing (d) — mixtures are precisely what can be separated."],
          },
        },
        {
          id: "cils-u5-elem-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which statement about compounds is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A compound always contains two or more different elements chemically joined" },
              { id: "b", text: "A compound is the same as a mixture" },
              { id: "c", text: "A compound can be separated into its elements by filtration" },
              { id: "d", text: "A compound contains only one type of atom" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Compound", statement: "Chemically joined elements — fixed ratio, separable only by chemical means." },
            ],
            steps: [
              { reasoning: "Compounds contain 2+ elements in fixed ratios; need chemical change to separate.", working: "chemical join", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Two+ elements chemically joined",
            commonErrors: ["Choosing (b) — compounds need chemical, not physical, separation."],
          },
        },
        {
          id: "cils-u5-elem-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which symbol represents chlorine?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\text{C}$" },
              { id: "b", text: "$\\text{Cl}$" },
              { id: "c", text: "$\\text{Ca}$" },
              { id: "d", text: "$\\text{Ch}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Symbols", statement: "Chlorine = Cl; carbon = C; calcium = Ca." },
            ],
            steps: [
              { reasoning: "Chlorine's symbol is Cl.", working: "Cl", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\text{Cl}$",
            commonErrors: ["Choosing (c) — Ca is calcium."],
          },
        },
        {
          id: "cils-u5-elem-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is air classified as a mixture rather than a compound?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It contains only one gas" },
              { id: "b", text: "Its gases are not chemically joined and can be separated physically" },
              { id: "c", text: "It cannot be separated at all" },
              { id: "d", text: "It is a pure substance" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Classification", statement: "Air = nitrogen + oxygen + others, physically mixed and separable." },
            ],
            steps: [
              { reasoning: "Air's components are not chemically bonded — it is a mixture.", working: "mixture", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Not chemically joined, physically separable",
            commonErrors: ["Choosing (c) — air CAN be separated (e.g. fractional distillation of liquid air)."],
          },
        },
        {
          id: "cils-u5-elem-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many hydrogen atoms are in two molecules of water ($\\text{H}_2\\text{O}$)? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Hydrogen atoms", answer: 4 }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Subscripts", statement: "Each H₂O has 2 hydrogen atoms; two molecules have 4." },
            ],
            steps: [
              { reasoning: "Each water molecule has 2 H atoms.", working: "2 per molecule", marks: 1, markCode: "M" },
              { reasoning: "$2 \\times 2 = 4$ hydrogen atoms.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$",
          },
        },
        {
          id: "cils-u5-elem-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many elements are chemically joined in the compound $\\text{NaCl}$? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Elements", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Compound", statement: "NaCl contains sodium and chlorine — two different elements." },
            ],
            steps: [
              { reasoning: "Na = sodium, Cl = chlorine — two elements.", working: "Na + Cl", marks: 1, markCode: "M" },
              { reasoning: "Two different elements joined.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
          },
        },
        {
          id: "cils-u5-elem-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A sample contains 30 g of oxygen gas and 70 g of nitrogen gas. What percentage by mass is nitrogen? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage", answer: 70, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage by mass", statement: "Percentage = mass of part ÷ total mass × 100." },
            ],
            steps: [
              { reasoning: "Total = $30 + 70 = 100\\ \\text{g}$.", working: "100 g", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{70}{100} \\times 100 = 70\\%$.", working: "70%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$70\\%$",
          },
        },
        {
          id: "cils-u5-elem-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between a compound and a mixture, using $\\text{H}_2\\text{O}$ and salt water as examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Compound vs mixture", statement: "Compound = chemically joined fixed ratio; mixture = physically combined, variable, separable." },
            ],
            steps: [
              { reasoning: "H₂O is a compound — hydrogen and oxygen chemically bonded in fixed 2:1 ratio.", working: "H₂O compound", marks: 1, markCode: "M" },
              { reasoning: "Salt water is a mixture — salt dissolved in water, proportions can vary.", working: "salt water mixture", marks: 1, markCode: "M" },
              { reasoning: "Compound needs chemical change to separate; mixture separates physically.", working: "separation", marks: 1, markCode: "M" },
              { reasoning: "Clear distinction with examples.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "H₂O = compound (chemical join, fixed ratio); salt water = mixture (physical, separable, variable).",
            commonErrors: ["Saying both are 'mixed together' — compounds are chemically bonded."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u5-states-notes",
      title: "States of matter and mixtures — revision notes",
      summary: "Particle theory, phase changes, separation methods, symbols.",
      sections: [
        {
          heading: "States & mixtures",
          body: "Solid/liquid/gas particle behaviour. Heating → melting → boiling. Separating: filter, evaporate, distil, chromatograph. Elements vs compounds vs mixtures.",
        },
      ],
    },
  ],
};
