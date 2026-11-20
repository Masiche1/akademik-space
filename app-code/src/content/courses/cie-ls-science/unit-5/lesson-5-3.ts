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
              { id: "a", text: "Kinetic energy" },
              { id: "b", text: "Potential energy" },
              { id: "c", text: "Heat energy" },
              { id: "d", text: "Sound energy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Kinetic energy", statement: "Energy of movement." },
            ],
            steps: [
              { reasoning: "Moving = kinetic.", working: "kinetic", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Kinetic energy",
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
              { id: "c", text: "Boiling water" },
              { id: "d", text: "Holding a hot cup" },
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
              { id: "a", text: "Wind" },
              { id: "b", text: "Coal" },
              { id: "c", text: "Oil" },
              { id: "d", text: "Natural gas" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Renewable", statement: "Won't run out — wind, solar, hydro, geothermal." },
            ],
            steps: [
              { reasoning: "Wind is renewable; fossil fuels are not.", working: "wind", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Wind",
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
