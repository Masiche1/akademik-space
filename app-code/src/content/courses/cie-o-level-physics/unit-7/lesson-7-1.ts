import type { Lesson } from "../../../types.ts";

export const lessonp71: Lesson = {
  id: "olphys-u7-lesson-7-1",
  code: "7-1",
  title: "Radioactivity",
  goal: "I CAN describe radioactive decay, half-life and nuclear processes.",
  standards: ["5054 7.1", "5054 7.2", "5054 7.3"],
  vocabulary: [
    { term: "Radioactivity", definition: "Spontaneous emission of radiation from unstable nuclei." },
    { term: "Alpha", definition: "Helium nucleus (2p+2n); +2 charge; weak penetration, strong ionisation." },
    { term: "Beta", definition: "Fast electron; −1 charge; medium penetration." },
    { term: "Gamma", definition: "Electromagnetic wave; no charge; high penetration, weak ionisation." },
    { term: "Half-life", definition: "Time for half the nuclei to decay." },
    { term: "Fission", definition: "Heavy nucleus splits → energy (nuclear power)." },
    { term: "Fusion", definition: "Light nuclei combine → energy (stars)." },
    { term: "Background radiation", definition: "Natural radiation from rocks, cosmic rays, food." },
  ],
  concepts: [
    {
      id: "olphys-u7-decay",
      title: "Types of decay and half-life",
      skill: "Compare alpha, beta and gamma and calculate half-life.",
      lesson: {
        sections: [
          {
            heading: "Radiation types",
            body: "| | Alpha | Beta | Gamma |\n|---|---|---|---|\n| Nature | He nucleus | electron | EM wave |\n| Charge | +2 | −1 | 0 |\n| Penetration | paper stops | aluminium stops | lead/concrete needed |\n| Ionisation | strong | medium | weak |",
          },
          {
            heading: "Half-life",
            body: "Time for half the unstable nuclei to decay — constant for each isotope. After n half-lives: remaining = initial × (½)ⁿ.",
          },
          {
            heading: "Uses",
            body: "Tracers (medical), dating (carbon-14), smoke detectors (alpha), sterilisation (gamma).",
          },
        ],
        keyFormulas: [
          { name: "Half-life", statement: "$N = N_0 \\times (\\tfrac{1}{2})^n$" },
        ],
        workedExample: {
          problem: "A sample has 800 nuclei, half-life 5 days. How many after 15 days?",
          solution: "15 days = 3 half-lives → 800 × (½)³ = 800/8 = 100 nuclei.",
        },
      },
      questions: [
        {
          id: "olphys-u7-decay-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which radiation is most penetrating?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Alpha" }, { id: "b", text: "Beta" }, { id: "c", text: "Gamma" }, { id: "d", text: "All equal" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Penetration", statement: "Gamma most penetrating." }],
            steps: [{ reasoning: "Recall.", working: "\\gamma", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Gamma",
            commonErrors: ["Alpha is most ionising, not penetrating."],
          },
        },
        {
          id: "olphys-u7-decay-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define half-life.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Half-life", statement: "Time for half nuclei to decay." }],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The time taken for half of the radioactive nuclei in a sample to decay.",
            commonErrors: ["Saying 'half the sample disappears' — nuclei remain, just decay."],
          },
        },
        {
          id: "olphys-u7-decay-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A sample of 400 atoms has half-life 10 days. How many remain after 30 days?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Half-life", statement: "N = N₀(½)ⁿ." }],
            steps: [
              { reasoning: "30 days = 3 half-lives.", marks: 1, markCode: "M" },
              { reasoning: "400 × (½)³.", working: "400 \\times \\frac{1}{8}", marks: 1, markCode: "M" },
              { reasoning: "= 50 atoms.", marks: 1, markCode: "A" },
              { reasoning: "State.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "50 atoms",
            commonErrors: ["Using 30/10=3 but forgetting to halve three times."],
          },
        },
        {
          id: "olphys-u7-decay-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare alpha, beta and gamma radiation.",
          parts: [
            { label: "a", prompt: "Compare penetration.", marks: 3 },
            { label: "b", prompt: "Compare ionising power.", marks: 3 },
            { label: "c", prompt: "State one use of each.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Radiation", statement: "Alpha: strong ionise/weak pen; beta: medium; gamma: weak ionise/strong pen." }],
            steps: [
              { part: "a", reasoning: "Alpha stopped by paper.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Beta by aluminium.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Gamma needs lead/concrete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Alpha strongest ioniser.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Gamma weakest.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete comparison.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Alpha: smoke detector.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Beta: tracers.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Gamma: sterilisation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) α<paper<β<Al<γ<lead (b) α>β>γ ionisation (c) smoke/tracer/sterilise",
            commonErrors: ["Confusing penetration with ionisation — they're inverse."],
          },
        },
      ],
    },
    {
      id: "olphys-u7-nuclear",
      title: "Nuclear fission and fusion",
      skill: "Describe fission and fusion and their energy release.",
      lesson: {
        sections: [
          {
            heading: "Fission",
            body: "Heavy nucleus (U-235) absorbs neutron → splits into lighter nuclei + neutrons + **huge energy**. Chain reaction in nuclear reactors; controlled by moderators/control rods. Used in power stations, atomic bombs.",
          },
          {
            heading: "Fusion",
            body: "Light nuclei (hydrogen isotopes) combine → heavier nucleus + energy. Powers the sun/stars. Requires extremely high temperature/pressure — not yet controlled on Earth.",
          },
          {
            heading: "Comparison",
            body: "| | Fission | Fusion |\n|---|---|---|\n| Nuclei | heavy → light | light → heavy |\n| Conditions | room temp possible | millions of °C |\n| Waste | radioactive | less |\n| Use | reactors/bombs | stars (future power) |",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Which releases more energy per nucleon: fission or fusion?",
          solution: "Fusion — light nuclei have highest binding energy per nucleon; both release energy but fusion is more efficient per nucleon.",
        },
      },
      questions: [
        {
          id: "olphys-u7-nuclear-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is nuclear fission?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Light nuclei combine" }, { id: "b", text: "Heavy nucleus splits" }, { id: "c", text: "Electron emission" }, { id: "d", text: "Chemical reaction" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Fission", statement: "Heavy nucleus splits." }],
            steps: [{ reasoning: "Recall.", working: "\\text{split}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Heavy nucleus splits",
            commonErrors: ["Confusing with fusion."],
          },
        },
        {
          id: "olphys-u7-nuclear-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State where fusion occurs naturally.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Fusion", statement: "Stars/sun." }],
            steps: [
              { reasoning: "Location.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "In stars including the Sun, where extreme temperatures allow light nuclei to fuse.",
            commonErrors: ["Saying 'nuclear reactors' — those use fission."],
          },
        },
        {
          id: "olphys-u7-nuclear-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a nuclear reactor controls the fission chain reaction.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Reactor", statement: "Control rods absorb neutrons; moderator slows them." }],
            steps: [
              { reasoning: "Fission produces neutrons.", marks: 1, markCode: "M" },
              { reasoning: "Control rods absorb excess neutrons.", marks: 1, markCode: "M" },
              { reasoning: "Maintains steady rate.", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Control rods absorb neutrons to keep the chain reaction at a steady controlled rate; moderators slow neutrons to sustain fission.",
            commonErrors: ["Saying 'stops all neutrons' — it's controlled, not stopped."],
          },
        },
        {
          id: "olphys-u7-nuclear-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare fission and fusion.",
          parts: [
            { label: "a", prompt: "Define each process.", marks: 3 },
            { label: "b", prompt: "State conditions required.", marks: 3 },
            { label: "c", prompt: "State current uses.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Fission vs fusion", statement: "Fission: split heavy; fusion: join light." }],
            steps: [
              { part: "a", reasoning: "Fission definition.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Fusion definition.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Fission: neutron+moderate conditions.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Fusion: extreme heat/pressure.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Fission: reactors/bombs.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Fusion: stars/future power.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) split vs join (b) moderate vs extreme (c) reactors vs stars",
            commonErrors: ["In (b) saying fusion at room temp — needs millions of °C."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olphys-u7-radioactivity-notes",
      title: "Radioactivity — revision notes",
      summary: "α/β/γ properties, half-life, fission, fusion.",
      sections: [
        {
          heading: "Key facts",
          body: "Alpha: +2, paper stops, strong ionise. Beta: −1, aluminium stops. Gamma: 0, lead stops, weak ionise. Half-life: N=N₀(½)ⁿ. Fission: heavy→light+energy (reactors). Fusion: light→heavy+energy (stars).",
        },
        {
          heading: "Exam technique",
          body: "- Penetration ↑ = ionisation ↓ (inverse relationship).\n- Half-life constant per isotope.",
        },
      ],
    },
  ],
};
