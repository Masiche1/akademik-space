import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "cils-u5-lesson-5-3",
  code: "5-3",
  title: "Energy transfer and conservation",
  goal: "I CAN describe energy transfers, conservation and efficiency in energy systems.",
  standards: ["0893 Physics: energy"],
  vocabulary: [
    { term: "Energy", definition: "Capacity to do work — measured in joules (J)." },
    { term: "Kinetic energy", definition: "Energy of movement — depends on mass and speed." },
    { term: "Potential energy", definition: "Stored energy due to position or state." },
    { term: "Heat energy", definition: "Energy transferred due to temperature difference." },
    { term: "Energy conservation", definition: "Energy can't be created or destroyed — only transferred." },
    { term: "Efficiency", definition: "Useful energy output ÷ total energy input × 100%." },
  ],
  concepts: [
    {
      id: "cils-u5-energy",
      title: "Energy types and transfer",
      skill: "Describe energy types and how energy transfers between forms.",
      lesson: {
        sections: [
          {
            heading: "Forms of energy",
            body: "- **Kinetic**: movement\n- **Potential**: stored (height, elastic, chemical)\n- **Heat**: temperature difference\n- **Light**: visible radiation\n- **Sound**: vibrations\n- **Electrical**: current",
          },
          {
            heading: "Energy transfer",
            body: "Energy changes form but total stays same (conservation). Example: falling object — potential→kinetic. Boiling kettle — electrical→heat+light+sound.",
          },
          {
            heading: "Useful vs wasted energy",
            body: "Most energy becomes wasted heat — only useful portion does the job. Efficiency measures this.",
          },
        ],
        keyFormulas: [
          { name: "Energy conservation", statement: "Energy can't be created/destroyed — only transferred between forms." },
        ],
        workedExample: {
          problem: "A ball falls from a height. What happens to its energy?",
          solution: "Potential energy decreases → kinetic energy increases as it speeds up — total energy conserved.",
        },
      },
      questions: [
        {
          id: "cils-u5-energy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What energy does a moving object have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sound energy" },
              { id: "b", text: "Kinetic energy" },
              { id: "c", text: "Heat energy" },
              { id: "d", text: "Potential energy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Kinetic energy", statement: "Energy of movement." },
            ],
            steps: [
              { reasoning: "Moving = kinetic.", working: "kinetic", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Kinetic energy",
            commonErrors: ["Choosing (b) — potential is stored, not moving."],
          },
        },
        {
          id: "cils-u5-energy-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two forms of energy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Energy forms", statement: "Kinetic, potential, heat, light, sound, electrical." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "forms", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Kinetic, potential, heat, light, sound, electrical (any two)",
            commonErrors: ["Saying 'energy' only — need specific forms."],
          },
        },
        {
          id: "cils-u5-energy-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain energy conservation with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Conservation", statement: "Energy transforms but total stays constant." },
            ],
            steps: [
              { reasoning: "Energy can't be created or destroyed — only transferred.", working: "conservation", marks: 1, markCode: "M" },
              { reasoning: "Example: falling ball — potential→kinetic as it speeds up.", working: "example", marks: 1, markCode: "M" },
              { reasoning: "Total energy constant — just changing form.", working: "constant", marks: 1, markCode: "M" },
              { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Energy transforms but isn't lost — e.g. falling ball: potential→kinetic.",
            commonErrors: ["Saying 'energy is used up' — it transforms to other forms."],
          },
        },
        {
          id: "cils-u5-energy-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Analyse energy transfer in a device.",
          parts: [
            { label: "a", prompt: "Describe energy input and output in a torch.", marks: 2 },
            { label: "b", prompt: "Explain why efficiency is never 100%.", marks: 3 },
            { label: "c", prompt: "Calculate efficiency if 20J input gives 10J useful output.", marks: 2 },
            { label: "d", prompt: "Suggest ways to improve efficiency.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Efficiency", statement: "Useful output ÷ total input × 100%; waste is usually heat." },
            ],
            steps: [
              { part: "a", reasoning: "Input: chemical (battery); output: light + heat + sound.", working: "transfer", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Some energy always lost as heat/sound — can't eliminate waste.", working: "waste", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explanation correct.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Clear.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "(10 ÷ 20) × 100 = 50%.", working: "50%", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct calculation.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Better insulation, more efficient design, reduce friction.", working: "improve", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Valid suggestions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) chemical→light+heat (b) waste heat inevitable (c) 50% (d) insulation/efficiency",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Explained.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Valid.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Efficiency = output/input × 100 — not input/output."],
          },
        },
        {
          id: "cils-u5-energy-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What type of energy is stored in a stretched elastic band?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Elastic potential energy" },
              { id: "b", text: "Heat energy" },
              { id: "c", text: "Sound energy" },
              { id: "d", text: "Kinetic energy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Elastic potential energy", statement: "Stored energy due to deformation — e.g. stretched band, coiled spring." },
            ],
            steps: [
              { reasoning: "Stretched band stores elastic potential energy.", working: "elastic PE", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Elastic potential energy",
            commonErrors: ["Choosing (b) — the band is not moving, so no kinetic energy."],
          },
        },
        {
          id: "cils-u5-energy-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An electric torch converts electrical energy mainly into:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Kinetic energy only" },
              { id: "b", text: "Sound only" },
              { id: "c", text: "Light and heat" },
              { id: "d", text: "Chemical energy" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Energy transfer", statement: "Electrical energy → light (useful) + heat (wasted) in a torch." },
            ],
            steps: [
              { reasoning: "A torch produces light and some heat.", working: "light + heat", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Light and heat",
            commonErrors: ["Choosing (c) — energy is not converted back to chemical in a torch."],
          },
        },
        {
          id: "cils-u5-energy-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a hydroelectric power station, the main energy transfer is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chemical → electrical" },
              { id: "b", text: "Nuclear → electrical" },
              { id: "c", text: "Gravitational potential → kinetic → electrical" },
              { id: "d", text: "Heat → light" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Energy transfer", statement: "Water at height has GPE → falls gaining KE → spins turbine → electrical." },
            ],
            steps: [
              { reasoning: "Stored water energy becomes motion then electricity.", working: "GPE→KE→E", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** GPE → kinetic → electrical",
            commonErrors: ["Choosing (b) — no fuel is burned in hydro."],
          },
        },
        {
          id: "cils-u5-energy-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement is the law of conservation of energy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Energy can be created by machines" },
              { id: "b", text: "Energy disappears when work is done" },
              { id: "c", text: "Energy is always lost as heat" },
              { id: "d", text: "Energy cannot be created or destroyed, only transferred between forms" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of energy", statement: "Energy transforms between forms; total energy stays constant." },
            ],
            steps: [
              { reasoning: "Energy is never created or destroyed — only transferred.", working: "conserved", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Cannot be created or destroyed",
            commonErrors: ["Choosing (c) — heat is still energy; it is not 'lost'."],
          },
        },
        {
          id: "cils-u5-energy-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A ball is thrown vertically upwards. At the highest point it has maximum:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sound energy" },
              { id: "b", text: "Heat energy" },
              { id: "c", text: "Kinetic energy" },
              { id: "d", text: "Gravitational potential energy" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Energy exchange", statement: "KE converts to GPE as the ball rises; at max height KE ≈ 0, GPE maximum." },
            ],
            steps: [
              { reasoning: "At max height the ball is momentarily stationary — all energy is potential.", working: "GPE max", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Gravitational potential energy",
            commonErrors: ["Choosing (b) — kinetic energy is zero at the top."],
          },
        },
        {
          id: "cils-u5-energy-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which device converts electrical energy into light energy most directly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A loudspeaker" },
              { id: "b", text: "A heater" },
              { id: "c", text: "A light bulb" },
              { id: "d", text: "An electric fan" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Energy transfer", statement: "Bulb: electrical → light (+heat). Speaker → sound; heater → heat; fan → kinetic." },
            ],
            steps: [
              { reasoning: "Light bulb's useful output is light.", working: "light", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** A light bulb",
            commonErrors: ["Choosing (c) — heater produces heat, not light."],
          },
        },
        {
          id: "cils-u5-energy-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In most energy transfers, the 'wasted' energy is mainly released as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chemical energy" },
              { id: "b", text: "Sound" },
              { id: "c", text: "Light" },
              { id: "d", text: "Heat" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Wasted energy", statement: "Unwanted energy is almost always heat — due to friction and resistance." },
            ],
            steps: [
              { reasoning: "Friction and resistance dissipate energy as heat.", working: "heat", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Heat",
            commonErrors: ["Choosing (c) — sound waste is usually minor compared to heat."],
          },
        },
        {
          id: "cils-u5-energy-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A device receives $100\\ \\text{J}$ of energy and produces $40\\ \\text{J}$ of useful output. What is its efficiency as a percentage? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Efficiency", answer: 40, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "Efficiency = useful output ÷ total input × 100%" },
            ],
            steps: [
              { reasoning: "Efficiency = $\\frac{40}{100} \\times 100$.", working: "40/100 × 100", marks: 1, markCode: "M" },
              { reasoning: "$40\\%$.", working: "40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40\\%$",
          },
        },
        {
          id: "cils-u5-energy-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A machine uses $200\\ \\text{J}$ of input energy and gives $50\\ \\text{J}$ of useful output. What is its efficiency? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Efficiency", answer: 25, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "Efficiency = useful output ÷ total input × 100%" },
            ],
            steps: [
              { reasoning: "$\\frac{50}{200} \\times 100 = 25\\%$.", working: "50/200 × 100", marks: 1, markCode: "M" },
              { reasoning: "Efficiency = $25\\%$.", working: "25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$25\\%$",
          },
        },
        {
          id: "cils-u5-energy-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A device receives $120\\ \\text{J}$ of input energy and wastes $30\\ \\text{J}$ as heat. How much useful energy is produced? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Useful energy", answer: 90, unit: "J" }],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Conservation of energy", statement: "Useful output = input − wasted energy." },
            ],
            steps: [
              { reasoning: "Useful = $120 - 30$.", working: "120 - 30", marks: 1, markCode: "M" },
              { reasoning: "$90\\ \\text{J}$.", working: "90", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$90\\ \\text{J}$",
          },
        },
        {
          id: "cils-u5-energy-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How many different forms of energy are listed in this lesson: kinetic, potential, heat, light, sound, electrical? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Forms", answer: 6 }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Forms of energy", statement: "Kinetic, potential, heat, light, sound and electrical." },
            ],
            steps: [
              { reasoning: "Count the listed forms.", working: "6", marks: 1, markCode: "M" },
              { reasoning: "Six forms.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$",
          },
        },
        {
          id: "cils-u5-energy-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the energy transfers that occur when a candle burns, identifying the input and all the outputs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Energy transfer", statement: "Chemical energy in wax → heat + light (+ a little sound)." },
            ],
            steps: [
              { reasoning: "Input: chemical energy stored in the wax.", working: "chemical", marks: 1, markCode: "M" },
              { reasoning: "Output: heat and light (main); small amount of sound.", working: "heat + light", marks: 1, markCode: "M" },
              { reasoning: "Combustion reaction provides the energy transfer.", working: "combustion", marks: 1, markCode: "M" },
              { reasoning: "Input and outputs all identified.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Chemical (wax) → heat + light (+sound) via combustion.",
            commonErrors: ["Forgetting heat — light is the useful output, heat is the waste."],
          },
        },
      ],
    },
    {
      id: "cils-u5-thermal",
      title: "Thermal energy and temperature",
      skill: "Describe temperature, heat transfer and thermal conductivity.",
      lesson: {
        sections: [
          {
            heading: "Temperature and heat",
            body: "Temperature measures hotness (°C or K). Heat flows from hot to cold — never the reverse spontaneously.",
          },
          {
            heading: "Heat transfer methods",
            body: "- **Conduction**: through solids (metal spoon in hot water)\n- **Convection**: fluid movement (boiling water)\n- **Radiation**: electromagnetic waves (sun warming Earth)",
          },
          {
            heading: "Conductors and insulators",
            body: "Conductors: metals (copper, aluminium) — transfer heat well. Insulators: wood, plastic, wool, air — reduce heat loss.",
          },
        ],
        keyFormulas: [
          { name: "Heat transfer", statement: "Conduction (solids), convection (fluids), radiation (waves) — always hot→cold." },
        ],
        workedExample: {
          problem: "Why does a metal spoon feel hotter than a wooden one in hot soup?",
          solution: "Metal conducts heat to your hand faster — wood insulates, so less heat transfers.",
        },
      },
      questions: [
        {
          id: "cils-u5-therm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which transfers heat by radiation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sun warming Earth" },
              { id: "b", text: "Metal spoon in soup" },
              { id: "c", text: "Holding a hot cup" },
              { id: "d", text: "Boiling water" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Radiation", statement: "Heat transfer by electromagnetic waves — no medium needed." },
            ],
            steps: [
              { reasoning: "Sun→Earth = radiation through space.", working: "radiation", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Sun warming Earth",
            commonErrors: ["Choosing (b) — that's conduction."],
          },
        },
        {
          id: "cils-u5-therm-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two heat transfer methods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Heat transfer", statement: "Conduction, convection, radiation." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "methods", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Conduction, convection, radiation (any two)",
            commonErrors: ["Only naming conduction — need variety."],
          },
        },
        {
          id: "cils-u5-therm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why metals feel colder than wood at room temperature.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Thermal conductivity", statement: "Metals conduct heat away from hand faster — feel colder." },
            ],
            steps: [
              { reasoning: "Metal is good conductor — draws heat from your hand quickly.", working: "conductor", marks: 1, markCode: "M" },
              { reasoning: "Wood insulates — heat stays in hand, feels warmer.", working: "insulator", marks: 1, markCode: "M" },
              { reasoning: "Same temperature — different heat transfer rates.", working: "rate", marks: 1, markCode: "M" },
              { reasoning: "Explanation clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Metal conducts heat away faster — same temp, different transfer rate.",
            commonErrors: ["Saying 'metal is colder' — same temperature, feels colder due to conductivity."],
          },
        },
        {
          id: "cils-u5-therm-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Design a flask to keep drinks hot.",
          parts: [
            { label: "a", prompt: "What material for outer casing?", marks: 2 },
            { label: "b", prompt: "How to prevent conduction?", marks: 2 },
            { label: "c", prompt: "How to prevent convection?", marks: 2 },
            { label: "d", prompt: "How to prevent radiation?", marks: 2 },
            { label: "e", prompt: "Explain why vacuum helps.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Insulation", statement: "Insulator casing + vacuum gap reduces all three heat transfer methods." },
            ],
            steps: [
              { part: "a", reasoning: "Plastic/wood outer — poor conductor, doesn't transfer heat.", working: "insulator", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Double wall with insulating material between — blocks conduction.", working: "double wall", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Vacuum between walls — no fluid for convection.", working: "vacuum", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Silvered/reflective inner surface — reflects radiation back.", working: "reflective", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Vacuum = no particles — eliminates conduction AND convection.", working: "vacuum", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) insulator (b) double wall (c) vacuum gap (d) reflective surface (e) vacuum removes particles",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "e" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "e" },
            ],
            commonErrors: ["Only one insulation method — need all three addressed."],
          },
        },
        {
          id: "cils-u5-therm-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Heat energy always flows spontaneously:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only through metals" },
              { id: "b", text: "From a hotter object to a colder object" },
              { id: "c", text: "From a colder object to a hotter object" },
              { id: "d", text: "In both directions equally" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Heat flow", statement: "Heat flows from hot to cold until temperatures equalise." },
            ],
            steps: [
              { reasoning: "Heat always moves down the temperature gradient.", working: "hot→cold", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Hot to cold",
            commonErrors: ["Choosing (b) — that would require work input (e.g. a fridge)."],
          },
        },
        {
          id: "cils-u5-therm-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Convection is heat transfer by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Touching only" },
              { id: "b", text: "Electromagnetic waves" },
              { id: "c", text: "Vibration of particles in a solid" },
              { id: "d", text: "Movement of a heated fluid (liquid or gas)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Convection", statement: "Heat carried by circulating currents in fluids." },
            ],
            steps: [
              { reasoning: "Convection = bulk movement of heated fluid.", working: "fluid movement", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Movement of heated fluid",
            commonErrors: ["Choosing (b) — that describes conduction."],
          },
        },
        {
          id: "cils-u5-therm-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is an example of conduction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hot water circulating in a kettle" },
              { id: "b", text: "A metal spoon heating up in hot soup" },
              { id: "c", text: "Warm air rising above a radiator" },
              { id: "d", text: "The Sun warming the Earth" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conduction", statement: "Heat transfer through a solid by particle vibration — no bulk movement." },
            ],
            steps: [
              { reasoning: "Metal spoon transfers heat through the solid metal.", working: "conduction", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Metal spoon in hot soup",
            commonErrors: ["Choosing (c) — that is radiation."],
          },
        },
        {
          id: "cils-u5-therm-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Woollen clothes keep you warm mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wool generates heat" },
              { id: "b", text: "Wool and trapped air are poor conductors — they reduce heat loss" },
              { id: "c", text: "Wool reflects all radiation" },
              { id: "d", text: "Wool is a good conductor" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Insulation", statement: "Trapped air pockets in wool insulate — slow heat loss from the body." },
            ],
            steps: [
              { reasoning: "Wool traps air — air is a poor conductor, slowing heat escape.", working: "trapped air", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Trapped air insulates",
            commonErrors: ["Choosing (c) — wool insulates; it does not conduct."],
          },
        },
        {
          id: "cils-u5-therm-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A vacuum between the walls of a flask reduces heat loss because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vacuum creates heat" },
              { id: "b", text: "Vacuum is a good conductor" },
              { id: "c", text: "There are no particles to transfer heat by conduction or convection" },
              { id: "d", text: "Vacuum reflects all heat" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Vacuum insulation", statement: "No particles = no conduction and no convection." },
            ],
            steps: [
              { reasoning: "Conduction needs particles; convection needs fluid — vacuum has neither.", working: "no particles", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** No particles for conduction or convection",
            commonErrors: ["Choosing (c) — vacuum does not reflect; it removes the medium."],
          },
        },
        {
          id: "cils-u5-therm-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A shiny silvered surface inside a vacuum flask helps keep drinks hot by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conducting heat faster" },
              { id: "b", text: "Creating convection currents" },
              { id: "c", text: "Absorbing all radiation" },
              { id: "d", text: "Reflecting heat radiation back inside" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Reflective surfaces", statement: "Shiny surfaces reflect infrared radiation — reduces radiative heat loss." },
            ],
            steps: [
              { reasoning: "Silvering reflects heat radiation back into the flask.", working: "reflects radiation", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Reflects heat radiation",
            commonErrors: ["Choosing (d) — absorbing would lose heat, not keep it."],
          },
        },
        {
          id: "cils-u5-therm-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the best insulator against heat loss?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Iron" },
              { id: "b", text: "Still air trapped in a fibre" },
              { id: "c", text: "Copper" },
              { id: "d", text: "Aluminium" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Insulators", statement: "Air and fibrous materials are poor conductors — good insulators." },
            ],
            steps: [
              { reasoning: "Trapped still air is one of the best insulators; metals are conductors.", working: "air", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Still air",
            commonErrors: ["Choosing (b)/(c)/(d) — metals are all conductors."],
          },
        },
        {
          id: "cils-u5-therm-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The temperature of a liquid falls from $40\\ ^\\circ\\text{C}$ to $15\\ ^\\circ\\text{C}$. What is the temperature drop? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Drop", answer: 25, unit: "°C" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Temperature change", statement: "Change = initial − final (for a drop)." },
            ],
            steps: [
              { reasoning: "Drop = $40 - 15$.", working: "40 - 15", marks: 1, markCode: "M" },
              { reasoning: "$25\\ ^\\circ\\text{C}$.", working: "25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$25\\ ^\\circ\\text{C}$",
          },
        },
        {
          id: "cils-u5-therm-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Convert $0\\ ^\\circ\\text{C}$ to kelvin. Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Temperature", answer: 273, unit: "K" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Celsius to kelvin", statement: "$T/\\text{K} = T/^\\circ\\text{C} + 273$" },
            ],
            steps: [
              { reasoning: "$0 + 273$.", working: "0 + 273", marks: 1, markCode: "M" },
              { reasoning: "$273\\ \\text{K}$.", working: "273", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$273\\ \\text{K}$",
          },
        },
        {
          id: "cils-u5-therm-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many methods of heat transfer are there: conduction, convection and radiation? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Methods", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Heat transfer", statement: "Conduction, convection and radiation — three methods." },
            ],
            steps: [
              { reasoning: "Count the methods.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Three methods.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
          },
        },
        {
          id: "cils-u5-therm-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A metal block cools from $-5\\ ^\\circ\\text{C}$ to $-18\\ ^\\circ\\text{C}$. What is the temperature change? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Change", answer: -13, unit: "°C" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Temperature change", statement: "Change = final − initial; negative means cooling." },
            ],
            steps: [
              { reasoning: "Change = $-18 - (-5) = -18 + 5$.", working: "-18 + 5", marks: 1, markCode: "M" },
              { reasoning: "$-13\\ ^\\circ\\text{C}$ (a drop of 13 °C).", working: "-13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-13\\ ^\\circ\\text{C}$",
          },
        },
        {
          id: "cils-u5-therm-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the three methods of heat transfer, giving one example of each and stating where it occurs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Heat transfer", statement: "Conduction (solids), convection (fluids), radiation (no medium needed)." },
            ],
            steps: [
              { reasoning: "Conduction: through solids, e.g. metal spoon in hot water — particles pass energy by vibration.", working: "conduction", marks: 1, markCode: "M" },
              { reasoning: "Convection: in liquids/gases, e.g. boiling water — warm fluid rises, cold sinks.", working: "convection", marks: 1, markCode: "M" },
              { reasoning: "Radiation: electromagnetic waves, e.g. Sun warming Earth — works through vacuum.", working: "radiation", marks: 1, markCode: "M" },
              { reasoning: "All three described with examples.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Conduction (solids), convection (fluids), radiation (waves through space) — each with example.",
            commonErrors: ["Confusing conduction and convection — solids vs fluids."],
          },
        },
      ],
    },
    {
      id: "cils-u5-renewable",
      title: "Energy sources",
      skill: "Compare renewable and non-renewable energy sources and their impacts.",
      lesson: {
        sections: [
          {
            heading: "Non-renewable sources",
            body: "Fossil fuels (coal, oil, gas) + nuclear — finite, will run out, produce pollution/CO₂. Reliable and established.",
          },
          {
            heading: "Renewable sources",
            body: "Solar (photovoltaic), wind turbines, hydroelectric, geothermal, biomass. Unlimited supply, low pollution — but intermittent/expensive.",
          },
          {
            heading: "Trade-offs",
            body: "Renewables: clean but unreliable (weather-dependent). Fossil: reliable but polluting. Nuclear: powerful but waste issues.",
          },
        ],
        keyFormulas: [
          { name: "Energy sources", statement: "Renewable=unlimited/clean but intermittent; non-renewable=finite/polluting but reliable." },
        ],
        workedExample: {
          problem: "Why can't we rely solely on solar power?",
          solution: "Solar needs sunlight — doesn't work at night or on cloudy days. Need backup or storage.",
        },
      },
      questions: [
        {
          id: "cils-u5-renew-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a renewable energy source?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Natural gas" },
              { id: "b", text: "Oil" },
              { id: "c", text: "Wind" },
              { id: "d", text: "Coal" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Renewable", statement: "Won't run out — wind, solar, hydro, geothermal." },
            ],
            steps: [
              { reasoning: "Wind is renewable; fossil fuels are not.", working: "wind", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Wind",
            commonErrors: ["Choosing (b) — coal is finite fossil fuel."],
          },
        },
        {
          id: "cils-u5-renew-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name one advantage and one disadvantage of renewable energy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Renewables", statement: "Advantage: clean/unlimited; disadvantage: intermittent/expensive." },
            ],
            steps: [
              { reasoning: "Advantage: doesn't run out / low pollution.", working: "advantage", marks: 1, markCode: "M" },
              { reasoning: "Disadvantage: weather-dependent / costly.", working: "disadvantage", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Advantage: unlimited/clean; disadvantage: intermittent or expensive.",
            commonErrors: ["Only giving one side."],
          },
        },
        {
          id: "cils-u5-renew-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why fossil fuels are called 'non-renewable'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Non-renewable", statement: "Formed over millions of years — finite supply, can't be replaced quickly." },
            ],
            steps: [
              { reasoning: "Fossil fuels formed from ancient organisms over millions of years.", working: "formation", marks: 1, markCode: "M" },
              { reasoning: "Consumption faster than formation — will run out.", working: "finite", marks: 1, markCode: "M" },
              { reasoning: "Can't be replaced on human timescales.", working: "timescale", marks: 1, markCode: "M" },
              { reasoning: "Explanation clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Formed over millions of years — finite, can't replace at rate we use them.",
            commonErrors: ["Saying 'they're dirty' — that's pollution, not renewability."],
          },
        },
        {
          id: "cils-u5-renew-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Evaluate energy source choices for a country.",
          parts: [
            { label: "a", prompt: "List two renewable and two non-renewable sources.", marks: 2 },
            { label: "b", prompt: "Compare their environmental impacts.", marks: 3 },
            { label: "c", prompt: "Explain why a mix might be best.", marks: 2 },
            { label: "d", prompt: "Suggest one challenge for renewables.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Energy policy", statement: "Renewables clean but intermittent; fossil reliable but polluting — mix balances." },
            ],
            steps: [
              { part: "a", reasoning: "Renewable: solar, wind; non-renewable: coal, gas.", working: "sources", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Renewables: minimal pollution, land use; fossil: CO₂, pollution, finite.", working: "impacts", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Comparison clear.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Balanced.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Renewables for clean base load + fossil/nuclear backup for reliability.", working: "mix", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reasoned.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Intermittency — need storage or backup; or cost/land requirements.", working: "challenge", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) solar/wind vs coal/gas (b) clean vs polluting (c) mix balances reliability+cleanliness (d) intermittency/storage",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Comparison good.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Reasoned.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Valid.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Saying 'renewables are always better' — they have trade-offs."],
          },
        },
        {
          id: "cils-u5-renew-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solar panels convert which form of energy into electrical energy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Light (solar radiation)" },
              { id: "b", text: "Chemical energy from fuel" },
              { id: "c", text: "Sound" },
              { id: "d", text: "Nuclear energy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Solar energy", statement: "Photovoltaic cells convert sunlight directly into electricity." },
            ],
            steps: [
              { reasoning: "Solar panels use light energy from the Sun.", working: "light", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Light (solar radiation)",
            commonErrors: ["Choosing (c) — no fuel is burned in solar panels."],
          },
        },
        {
          id: "cils-u5-renew-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a non-renewable energy source?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hydroelectric" },
              { id: "b", text: "Wind" },
              { id: "c", text: "Geothermal" },
              { id: "d", text: "Natural gas" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Non-renewable", statement: "Fossil fuels (coal, oil, gas) are finite — cannot be replaced quickly." },
            ],
            steps: [
              { reasoning: "Natural gas is a fossil fuel — non-renewable.", working: "gas", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Natural gas",
            commonErrors: ["Choosing (b) — wind never runs out."],
          },
        },
        {
          id: "cils-u5-renew-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A wind turbine mainly converts:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chemical energy into electrical energy" },
              { id: "b", text: "Nuclear energy into heat" },
              { id: "c", text: "Heat into light" },
              { id: "d", text: "Kinetic energy of wind into electrical energy" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Wind energy", statement: "Moving air (kinetic) spins blades → generator → electricity." },
            ],
            steps: [
              { reasoning: "Wind's kinetic energy becomes electrical energy.", working: "KE→E", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Kinetic → electrical",
            commonErrors: ["Choosing (b) — no fuel burned in wind turbines."],
          },
        },
        {
          id: "cils-u5-renew-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which renewable source depends on water flowing downhill or through dams?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Geothermal" },
              { id: "b", text: "Solar" },
              { id: "c", text: "Wind" },
              { id: "d", text: "Hydroelectric" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hydroelectric", statement: "Falling water spins turbines — uses gravitational potential energy of water." },
            ],
            steps: [
              { reasoning: "Hydro uses moving water's energy.", working: "hydro", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Hydroelectric",
            commonErrors: ["Choosing (c) — wind uses air movement, not water."],
          },
        },
        {
          id: "cils-u5-renew-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why can a country not rely entirely on solar power?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Solar panels cannot be built cheaply" },
              { id: "b", text: "Solar energy pollutes heavily" },
              { id: "c", text: "Solar only works when the Sun is shining — it is intermittent" },
              { id: "d", text: "Solar panels produce too much energy" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Intermittency", statement: "Solar and wind depend on weather — need backup or storage." },
            ],
            steps: [
              { reasoning: "No sunlight at night/clouds — supply is unreliable.", working: "intermittent", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Intermittent — needs sunlight",
            commonErrors: ["Choosing (c) — solar is one of the cleanest sources."],
          },
        },
        {
          id: "cils-u5-renew-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Nuclear power is classed as non-renewable mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It produces large amounts of CO₂" },
              { id: "b", text: "It only works during daylight" },
              { id: "c", text: "The uranium fuel is finite and takes millions of years to form" },
              { id: "d", text: "It cannot generate electricity" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Nuclear fuel", statement: "Uranium is finite; nuclear gives high power with low CO₂ but waste issues." },
            ],
            steps: [
              { reasoning: "Fuel supply is limited — classified non-renewable despite low pollution.", working: "uranium finite", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Uranium fuel is finite",
            commonErrors: ["Choosing (b) — nuclear produces almost no CO₂."],
          },
        },
        {
          id: "cils-u5-renew-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Geothermal energy is produced using:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Solar panels underground" },
              { id: "b", text: "Wind blowing underground" },
              { id: "c", text: "Heat from inside the Earth" },
              { id: "d", text: "Burning coal underground" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Geothermal", statement: "Uses Earth's internal heat — hot water/steam drives turbines." },
            ],
            steps: [
              { reasoning: "Geothermal = Earth's internal heat.", working: "Earth heat", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Heat from inside the Earth",
            commonErrors: ["Choosing (b) — no burning involved."],
          },
        },
        {
          id: "cils-u5-renew-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A wind farm generates electricity at an average power of $500\\ \\text{MW}$ for $6$ hours. How much energy is generated in $\\text{MWh}$? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Energy", answer: 3000, unit: "MWh" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy", statement: "Energy = power × time." },
            ],
            steps: [
              { reasoning: "$E = 500 \\times 6$.", working: "500 × 6", marks: 1, markCode: "M" },
              { reasoning: "$3000\\ \\text{MWh}$.", working: "3000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3000\\ \\text{MWh}$",
          },
        },
        {
          id: "cils-u5-renew-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A solar panel receives $200\\ \\text{W}$ of sunlight and is $20\\%$ efficient. How much electrical power does it produce? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Power", answer: 40, unit: "W" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "Useful output = efficiency × input." },
            ],
            steps: [
              { reasoning: "$0.20 \\times 200 = 40$.", working: "0.2 × 200", marks: 1, markCode: "M" },
              { reasoning: "$40\\ \\text{W}$.", working: "40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40\\ \\text{W}$",
          },
        },
        {
          id: "cils-u5-renew-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A country uses 5 energy sources: coal, oil, solar, wind and gas. What percentage of its sources are renewable? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage", answer: 40, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Renewable sources", statement: "Solar and wind are renewable; coal, oil and gas are not." },
            ],
            steps: [
              { reasoning: "Renewable = solar + wind = 2 of 5.", working: "2/5", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{2}{5} \\times 100 = 40\\%$.", working: "40%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40\\%$",
          },
        },
        {
          id: "cils-u5-renew-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Burning coal releases about $900\\ \\text{g}$ of $\\text{CO}_2$ per kWh. How much $\\text{CO}_2$ is released generating $4\\ \\text{kWh}$? Enter the number only.",
          response: {
            type: "numeric",
            parts: [{ label: "CO₂", answer: 3600, unit: "g" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Emission calculation", statement: "Total emissions = rate × energy used." },
            ],
            steps: [
              { reasoning: "$900 \\times 4$.", working: "900 × 4", marks: 1, markCode: "M" },
              { reasoning: "$3600\\ \\text{g}$.", working: "3600", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3600\\ \\text{g}$",
          },
        },
        {
          id: "cils-u5-renew-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the statement: 'A country should rely only on solar and wind power.' Give advantages, disadvantages and a conclusion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Energy policy", statement: "Renewables are clean and unlimited but intermittent — a balanced mix is safer." },
            ],
            steps: [
              { reasoning: "Advantages: no fuel cost, no CO₂/pollution, sustainable supply.", working: "advantages", marks: 1, markCode: "M" },
              { reasoning: "Disadvantages: intermittent (weather/night), need storage or backup, land/cost issues.", working: "disadvantages", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: a mix with storage/backup is more reliable than renewables alone.", working: "conclusion", marks: 1, markCode: "M" },
              { reasoning: "Balanced evaluation with evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Clean + unlimited but intermittent — a balanced energy mix with backup is best.",
            commonErrors: ["One-sided answer — must give both advantages and disadvantages."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u5-energy-notes",
      title: "Energy and materials — revision notes",
      summary: "Energy forms, conservation, efficiency, heat transfer, energy sources.",
      sections: [
        {
          heading: "Energy",
          body: "Forms: kinetic, potential, heat, light, sound, electrical. Conservation: transforms, doesn't disappear. Efficiency = useful/total × 100%.",
        },
        {
          heading: "Heat & sources",
          body: "Heat transfer: conduction (solids), convection (fluids), radiation (waves). Renewable: solar, wind, hydro. Non-renewable: fossil fuels.",
        },
      ],
    },
  ],
};
