import type { Lesson } from "../../../types.ts";

export const lessonp31: Lesson = {
  id: "ciep-u3-lesson-3-1",
  code: "3-1",
  title: "Energy, Work and Power",
  goal: "I CAN calculate work, energy changes, power and efficiency.",
  standards: ["0655 3.1", "0655 3.2", "0655 3.3"],
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
      id: "ciep-u3-work-energy",
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
          id: "ciep-u3-work-energy-q1",
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
          id: "ciep-u3-work-energy-q2",
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
          id: "ciep-u3-work-energy-q3",
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
          id: "ciep-u3-work-energy-q4",
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
        {
          id: "ciep-u3-work-energy-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the SI unit of power?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Joule" }, { id: "b", text: "Watt" }, { id: "c", text: "Newton" }, { id: "d", text: "Pascal" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Power unit", statement: "Watt (W) = J/s." }],
            steps: [{ reasoning: "Recall.", working: "1\\ \\text{W} = 1\\ \\text{J/s}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Watt",
            commonErrors: ["Confusing energy (J) with power (W)."],
          },
        },
        {
          id: "ciep-u3-work-energy-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A $30\\ \\text{N}$ force moves a box $5\\ \\text{m}$ in the direction of the force. Calculate the work done.",
          response: { type: "numeric", parts: [{ label: "Work done", answer: 150, unit: "J" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Work", statement: "W = Fd." }],
            steps: [
              { reasoning: "W = Fd.", working: "W = 30 \\times 5", marks: 1, markCode: "M" },
              { reasoning: "= 150 J.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "150 J",
            commonErrors: ["Dividing instead of multiplying."],
          },
        },
        {
          id: "ciep-u3-work-energy-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Work is done on an object only when…",
          response: { type: "mcq", choices: [
            { id: "a", text: "a force is applied to it" },
            { id: "b", text: "the force causes the object to move in its direction" },
            { id: "c", text: "the object has a large mass" },
            { id: "d", text: "heat is transferred to the surroundings" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "principle", name: "Work", statement: "W = Fd — displacement in force direction needed." }],
            steps: [{ reasoning: "Recall condition.", working: "W = Fd \\Rightarrow d \\neq 0", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** the force causes the object to move in its direction",
            commonErrors: ["Thinking any applied force does work."],
          },
        },
        {
          id: "ciep-u3-work-energy-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "A $3\\ \\text{kg}$ mass moves at $4\\ \\text{m/s}$. Calculate its kinetic energy.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "KE", statement: "KE = ½mv²." }],
            steps: [
              { reasoning: "Identify m = 3, v = 4.", marks: 1, markCode: "M" },
              { reasoning: "KE = ½ × 3 × 4² = ½ × 3 × 16.", working: "KE = \\frac{1}{2} \\times 3 \\times 4^2", marks: 1, markCode: "M" },
              { reasoning: "= 24 J.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "24 J",
            commonErrors: ["Forgetting to square v."],
          },
        },
        {
          id: "ciep-u3-work-energy-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A $4\\ \\text{kg}$ ball is dropped from rest $5\\ \\text{m}$ above the ground ($g = 10\\ \\text{m/s}^2$, ignore air resistance). (a) Calculate its gravitational potential energy at the top. (b) Calculate its kinetic energy just before it lands.",
          response: { type: "numeric", parts: [
            { label: "(a) GPE at top", answer: 200, unit: "J" },
            { label: "(b) KE at bottom", answer: 200, unit: "J" },
          ] },
          markscheme: {
            principles: [{ kind: "principle", name: "Energy conservation", statement: "GPE lost = KE gained." }],
            steps: [
              { reasoning: "GPE = mgh = 4 × 10 × 5.", working: "GPE = 4 \\times 10 \\times 5", marks: 1, markCode: "M" },
              { reasoning: "GPE = 200 J.", marks: 1, markCode: "A" },
              { reasoning: "By conservation, KE at bottom = GPE lost = 200 J.", marks: 1, markCode: "M" },
              { reasoning: "KE = 200 J.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 200 J (b) 200 J",
            commonErrors: ["Calculating KE = 0 because the ball 'starts at rest'."],
          },
        },
        {
          id: "ciep-u3-work-energy-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A machine uses $800\\ \\text{J}$ of energy to do $600\\ \\text{J}$ of useful work. What is its efficiency?",
          response: { type: "mcq", choices: [
            { id: "a", text: "60%" }, { id: "b", text: "75%" }, { id: "c", text: "80%" }, { id: "d", text: "133%" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "Efficiency", statement: "η = useful ÷ total × 100%." }],
            steps: [{ reasoning: "η = 600/800 × 100 = 75%.", working: "\\eta = \\frac{600}{800} \\times 100", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 75%",
            commonErrors: ["Inverting the ratio to get 133%."],
          },
        },
        {
          id: "ciep-u3-work-energy-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the energy transfers that take place when a car engine burns petrol to move the car.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Energy transfers", statement: "Chemical → kinetic + heat/sound." }],
            steps: [
              { reasoning: "Petrol stores chemical energy.", marks: 1, markCode: "M" },
              { reasoning: "Burning releases thermal energy which does work.", marks: 1, markCode: "M" },
              { reasoning: "Kinetic energy of the car increases.", marks: 1, markCode: "M" },
              { reasoning: "Some energy wasted as heat and sound.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Chemical energy in petrol → thermal energy in engine → kinetic energy of car, with some energy dissipated as heat and sound.",
            commonErrors: ["Omitting the wasted energy."],
          },
        },
        {
          id: "ciep-u3-work-energy-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A motor does $480\\ \\text{J}$ of work in $24\\ \\text{s}$. Calculate its power.",
          response: { type: "numeric", parts: [{ label: "Power", answer: 20, unit: "W" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Power", statement: "P = W/t." }],
            steps: [
              { reasoning: "P = W/t = 480/24.", working: "P = \\frac{480}{24}", marks: 1, markCode: "M" },
              { reasoning: "= 20 W.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 W",
            commonErrors: ["Inverting to t/W."],
          },
        },
        {
          id: "ciep-u3-work-energy-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "One watt is equivalent to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$1\\ \\text{J} \\times 1\\ \\text{s}$" },
            { id: "b", text: "$1\\ \\text{J} \\div 1\\ \\text{s}$" },
            { id: "c", text: "$1\\ \\text{N} \\times 1\\ \\text{m}$" },
            { id: "d", text: "$1\\ \\text{J} \\times 1\\ \\text{h}$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Watt", statement: "1 W = 1 J/s." }],
            steps: [{ reasoning: "Recall definition.", working: "1\\ \\text{W} = 1\\ \\text{J/s}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** $1\\ \\text{J} \\div 1\\ \\text{s}$",
            commonErrors: ["Confusing J/s with J×s."],
          },
        },
        {
          id: "ciep-u3-work-energy-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A $5\\ \\text{kg}$ mass is lifted vertically through $2.5\\ \\text{m}$ ($g = 10\\ \\text{m/s}^2$). Calculate the gravitational potential energy gained.",
          response: { type: "numeric", parts: [{ label: "GPE gained", answer: 125, unit: "J" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "GPE", statement: "GPE = mgh." }],
            steps: [
              { reasoning: "GPE = mgh = 5 × 10 × 2.5.", working: "GPE = 5 \\times 10 \\times 2.5", marks: 1, markCode: "M" },
              { reasoning: "= 125 J.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "125 J",
            commonErrors: ["Using mass in grams or forgetting g."],
          },
        },
        {
          id: "ciep-u3-work-energy-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A ball is thrown vertically upwards. Explain, using energy ideas, why its speed decreases as it rises and why it returns to the thrower's hand.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Energy transfer", statement: "KE → GPE going up; GPE → KE coming down." }],
            steps: [
              { reasoning: "KE decreases as GPE increases.", marks: 1, markCode: "M" },
              { reasoning: "At highest point KE = 0 momentarily.", marks: 1, markCode: "M" },
              { reasoning: "GPE converts back to KE on the way down.", marks: 1, markCode: "M" },
              { reasoning: "Returns with (approximately) same speed — energy conserved.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Going up, kinetic energy transfers to gravitational potential energy so speed falls; at the top all is GPE. Coming down, GPE transfers back to KE so the ball returns to the hand.",
            commonErrors: ["Saying energy is 'used up' on the way up."],
          },
        },
        {
          id: "ciep-u3-work-energy-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "An electric motor is 80% efficient. If $2500\\ \\text{J}$ of electrical energy is supplied, how much useful energy is produced?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$1500\\ \\text{J}$" }, { id: "b", text: "$2000\\ \\text{J}$" }, { id: "c", text: "$2500\\ \\text{J}$" }, { id: "d", text: "$3125\\ \\text{J}$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "Efficiency", statement: "Useful = efficiency × input." }],
            steps: [{ reasoning: "0.80 × 2500 = 2000 J.", working: "0.8 \\times 2500", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** $2000\\ \\text{J}$",
            commonErrors: ["Calculating the wasted energy instead."],
          },
        },
      ],
    },
    {
      id: "ciep-u3-energy-transfers",
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
          id: "ciep-u3-energy-transfers-q1",
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
          id: "ciep-u3-energy-transfers-q2",
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
          id: "ciep-u3-energy-transfers-q3",
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
          id: "ciep-u3-energy-transfers-q4",
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
      id: "ciep-u3-energy-notes",
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
