import type { Lesson } from "../../../types.ts";

export const lessonp31: Lesson = {
  id: "olphys-u3-lesson-3-1",
  code: "3-1",
  title: "Energy, Work and Power",
  goal: "I CAN calculate work, energy changes, power and efficiency.",
  standards: ["5054 3.1", "5054 3.2", "5054 3.3"],
  vocabulary: [
    { term: "Work", definition: "Energy transferred by a force: W = Fd (J)." },
    { term: "Energy", definition: "Capacity to do work; measured in joules (J)." },
    { term: "Kinetic energy", definition: "Energy of motion: KE = ½mv²." },
    { term: "Gravitational PE", definition: "Energy due to height: GPE = mgh." },
    { term: "Power", definition: "Rate of energy transfer: P = W/t (W)." },
    { term: "Efficiency", definition: "Useful output ÷ total input × 100%." },
    { term: "Conservation of energy", definition: "Energy can't be created/destroyed, only transferred." },
    { term: "Elastic PE", definition: "Energy stored in stretched/compressed objects (springs)." },
  ],
  concepts: [
    {
      id: "olphys-u3-work-energy",
      title: "Work, energy and power",
      skill: "Calculate work done, kinetic/potential energy, power and efficiency.",
      lesson: {
        sections: [
          {
            heading: "Work and energy",
            body: "**W = Fd** (J) — only when force moves object in its direction.\n**KE = ½mv²**\n**GPE = mgh**\n**P = W/t** (W = J/s)\n\nEnergy transfers: kinetic ↔ potential; some always lost as heat/sound.",
          },
          {
            heading: "Efficiency",
            body: "**Efficiency = (useful output ÷ total input) × 100%**\n\nNo machine is 100% efficient — energy lost as heat/friction. Example: motor 80% efficient → 20% lost.",
          },
          {
            heading: "Conservation of energy",
            body: "Total energy of universe constant — energy changes form but isn't created/destroyed. Falling object: GPE → KE (ignoring air resistance).",
          },
        ],
        keyFormulas: [
          { name: "Work", statement: "$W = Fd$" },
          { name: "Kinetic energy", statement: "$KE = \\tfrac{1}{2}mv^2$" },
          { name: "Gravitational PE", statement: "$GPE = mgh$" },
          { name: "Power", statement: "$P = \\dfrac{W}{t}$" },
          { name: "Efficiency", statement: "$\\eta = \\dfrac{\\text{useful}}{\\text{total}} \\times 100\\%$" },
        ],
        workedExample: {
          problem: "A 2 kg mass is lifted 5 m. Calculate GPE gained (g = 10).",
          solution: "GPE = mgh = 2 × 10 × 5 = 100 J.",
        },
      },
      questions: [
        {
          id: "olphys-u3-work-energy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the SI unit of energy?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Watt" }, { id: "b", text: "Joule" }, { id: "c", text: "Newton" }, { id: "d", text: "Pascal" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Energy unit", statement: "Joule (J)." }],
            steps: [{ reasoning: "Recall.", working: "\\text{J}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Joule",
            commonErrors: ["Watt = power."],
          },
        },
        {
          id: "olphys-u3-work-energy-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 10 N force moves an object 3 m in its direction. Calculate work done.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Work", statement: "W = Fd = 10×3 = 30 J." }],
            steps: [
              { reasoning: "Apply formula.", working: "W = 10 \\times 3", marks: 1, markCode: "M" },
              { reasoning: "Answer.", working: "30 \\text{J}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30 J",
            commonErrors: ["Work only if force moves object in its direction."],
          },
        },
        {
          id: "olphys-u3-work-energy-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A 0.5 kg ball is thrown upward at 4 m/s. Calculate its kinetic energy.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "KE", statement: "KE = ½mv²." }],
            steps: [
              { reasoning: "Identify m=0.5, v=4.", marks: 1, markCode: "M" },
              { reasoning: "KE = ½×0.5×16.", working: "KE = \\frac{1}{2} \\times 0.5 \\times 4^2", marks: 1, markCode: "M" },
              { reasoning: "= 4 J.", marks: 1, markCode: "A" },
              { reasoning: "State.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4 J",
            commonErrors: ["Forgetting the ½ or squaring v."],
          },
        },
        {
          id: "olphys-u3-work-energy-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A machine uses 1000 J of energy to lift a load, delivering 800 J of useful work. Calculate efficiency and energy lost.",
          parts: [
            { label: "a", prompt: "Calculate efficiency.", marks: 4 },
            { label: "b", prompt: "Calculate energy lost.", marks: 2 },
            { label: "c", prompt: "Explain where the lost energy goes.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Efficiency", statement: "η = useful/total × 100%." }],
            steps: [
              { part: "a", reasoning: "η = 800/1000 × 100.", working: "\\frac{800}{1000} \\times 100", marks: 1, markCode: "M" },
              { part: "a", reasoning: "= 80%.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "With %.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Lost = 1000−800 = 200 J.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Heat/friction/sound.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Not destroyed — transferred.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 80% (b) 200 J (c) heat/friction",
            commonErrors: ["In (b) inverting — lost = input − output."],
          },
        },
      ],
    },
    {
      id: "olphys-u3-energy-transfers",
      title: "Energy transfers and conservation",
      skill: "Describe energy transformations and apply conservation of energy.",
      lesson: {
        sections: [
          {
            heading: "Energy transformations",
            body: "- Falling object: GPE → KE (speed increases).\n- Pendulum: KE ↔ GPE continuously.\n- Car engine: chemical → kinetic + heat/sound.\n- Power station: chemical/mechanical → electrical.",
          },
          {
            heading: "Conservation in practice",
            body: "At any point: total energy before = total after. Some always 'lost' as heat to surroundings — can't recover.",
          },
          {
            heading: "Renewable vs non-renewable",
            body: "Renewable: solar, wind, hydro, biomass (sustainable).\nNon-renewable: fossil fuels, nuclear (finite, pollution).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A pendulum at its highest point has maximum what? Minimum what?",
          solution: "Max GPE, min KE (momentarily stationary). At bottom: max KE, min GPE.",
        },
      },
      questions: [
        {
          id: "olphys-u3-energy-transfers-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens to GPE as an object falls?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Increases" }, { id: "b", text: "Decreases, converts to KE" }, { id: "c", text: "Stays same" }, { id: "d", text: "Becomes heat" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Falling object", statement: "GPE→KE." }],
            steps: [{ reasoning: "Recall.", working: "GPE \\to KE", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Decreases, converts to KE",
            commonErrors: ["GPE doesn't disappear — transfers to KE."],
          },
        },
        {
          id: "olphys-u3-energy-transfers-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the principle of conservation of energy.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Conservation", statement: "Energy can't be created/destroyed, only transferred." }],
            steps: [
              { reasoning: "State principle.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Energy cannot be created or destroyed — it can only be transferred from one form to another or one place to another.",
            commonErrors: ["Saying 'energy is lost' — it's dissipated, not destroyed."],
          },
        },
        {
          id: "olphys-u3-energy-transfers-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the energy transfers in a swinging pendulum.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Pendulum", statement: "GPE↔KE continuously." }],
            steps: [
              { reasoning: "At top: max GPE, min KE.", marks: 1, markCode: "M" },
              { reasoning: "At bottom: max KE, min GPE.", marks: 1, markCode: "M" },
              { reasoning: "Between: continuous transfer.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "At highest points GPE is maximum and KE minimum; at lowest point KE maximum and GPE minimum — energy continuously transfers between the two.",
            commonErrors: ["Saying 'energy is used up' — it's conserved (minus small losses)."],
          },
        },
        {
          id: "olphys-u3-energy-transfers-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare renewable and non-renewable energy sources.",
          parts: [
            { label: "a", prompt: "Define each type.", marks: 3 },
            { label: "b", prompt: "Give two examples of each.", marks: 2 },
            { label: "c", prompt: "State one advantage of renewable sources.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Energy sources", statement: "Renewable: replenished naturally. Non-renewable: finite." }],
            steps: [
              { part: "a", reasoning: "Renewable definition.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Non-renewable definition.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Solar/wind/hydro.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Fossil fuels/nuclear.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Sustainable/inexhaustible.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Less pollution.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Any valid advantage.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) renewable=replenished, non=finite (b) solar/wind vs fossil/nuclear (c) sustainable/clean",
            commonErrors: ["In (c) only one advantage."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olphys-u3-energy-notes",
      title: "Energy, work and power — revision notes",
      summary: "W=Fd, KE=½mv², GPE=mgh, P=W/t, efficiency, conservation.",
      sections: [
        {
          heading: "Key facts",
          body: "W=Fd, KE=½mv², GPE=mgh, P=W/t. Efficiency=useful/total×100%. Energy conserved — transfers GPE↔KE etc., some lost as heat.",
        },
        {
          heading: "Exam technique",
          body: "- Always check units (J, W, N).\n- Efficiency always <100% — rest lost as heat.",
        },
      ],
    },
  ],
};
