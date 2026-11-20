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
              { id: "a", text: "Solid" },
              { id: "b", text: "Liquid" },
              { id: "c", text: "Gas" },
              { id: "d", text: "Plasma" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Solid", statement: "Particles tightly packed, vibrate in place." },
            ],
            steps: [
              { reasoning: "Only solids have fixed particle positions.", working: "solid", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Solid",
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
              { id: "b", text: "Pure gold" },
              { id: "c", text: "Distilled water" },
              { id: "d", text: "Oxygen gas" },
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
              { id: "a", text: "Oxygen (O₂)" },
              { id: "b", text: "Water (H₂O)" },
              { id: "c", text: "Salt (NaCl)" },
              { id: "d", text: "CO₂" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Element", statement: "One type of atom — O₂ is two oxygen atoms." },
            ],
            steps: [
              { reasoning: "O₂ = oxygen element; others are compounds.", working: "O₂", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Oxygen (O₂)",
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
