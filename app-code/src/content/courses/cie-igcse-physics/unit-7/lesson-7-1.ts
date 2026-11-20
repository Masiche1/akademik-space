import type { Lesson } from "../../../types.ts";

export const lessonp71: Lesson = {
  id: "ciep-u7-lesson-7-1",
  code: "7-1",
  title: "Radioactivity",
  goal: "I CAN describe radioactive decay, half-life and nuclear processes.",
  standards: ["0655 7.1", "0655 7.2", "0655 7.3"],
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
      id: "ciep-u7-decay",
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
          id: "ciep-u7-decay-q1",
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
          id: "ciep-u7-decay-q2",
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
          id: "ciep-u7-decay-q3",
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
          id: "ciep-u7-decay-q4",
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
        {
          id: "ciep-u7-decay-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of radiation is stopped by a sheet of paper?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Alpha" }, { id: "b", text: "Beta" }, { id: "c", text: "Gamma" }, { id: "d", text: "All equally" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "property", name: "Penetration", statement: "Paper stops alpha; aluminium stops beta; lead stops gamma." }],
            steps: [{ reasoning: "Recall.", working: "\\alpha", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Alpha",
            commonErrors: ["Beta needs aluminium, gamma needs thick lead."],
          },
        },
        {
          id: "ciep-u7-decay-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Beta radiation consists of...",
          response: { type: "mcq", choices: [
            { id: "a", text: "Helium nuclei" }, { id: "b", text: "Fast electrons" }, { id: "c", text: "Electromagnetic waves" }, { id: "d", text: "Neutrons" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Beta", statement: "Fast electron, charge −1." }],
            steps: [{ reasoning: "Recall.", working: "e^-", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Fast electrons",
            commonErrors: ["Confusing beta with alpha (helium nucleus)."],
          },
        },
        {
          id: "ciep-u7-decay-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A radioactive sample has a half-life of 8 hours. What fraction of the original nuclei remain undecayed after 24 hours?",
          response: { type: "mcq", choices: [
            { id: "a", text: "1/2" }, { id: "b", text: "1/4" }, { id: "c", text: "1/8" }, { id: "d", text: "1/16" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "formula", name: "Half-life", statement: "$N = N_0 \\times (\\tfrac{1}{2})^n$" }],
            steps: [{ reasoning: "24 h = 3 half-lives.", working: "\\left(\\tfrac{1}{2}\\right)^3 = \\tfrac{1}{8}", marks: 1, markCode: "M" }],
            finalAnswer: "**(c)** 1/8",
            commonErrors: ["Using 24/8 = 3 but forgetting to halve three times."],
          },
        },
        {
          id: "ciep-u7-decay-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a use of gamma radiation?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Smoke detector" }, { id: "b", text: "Sterilising medical equipment" }, { id: "c", text: "Carbon dating" }, { id: "d", text: "Paper thickness gauging" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "property", name: "Gamma uses", statement: "Penetrating — sterilisation, radiotherapy." }],
            steps: [{ reasoning: "Recall.", working: "\\gamma \\text{ sterilise}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Sterilising medical equipment",
            commonErrors: ["Smoke detectors use alpha; dating uses beta emitters."],
          },
        },
        {
          id: "ciep-u7-decay-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is gamma radiation used in radiotherapy rather than alpha radiation?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Gamma is cheaper to produce" }, { id: "b", text: "Gamma is more ionising so kills cells faster" }, { id: "c", text: "Gamma penetrates deep into the body to reach the tumour" }, { id: "d", text: "Alpha cannot be produced artificially" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Penetration", statement: "Only gamma reaches deep tissue." }],
            steps: [{ reasoning: "Recall.", working: "\\gamma \\text{ penetrates}", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Gamma penetrates deep into the body to reach the tumour",
            commonErrors: ["Alpha is more ionising but cannot reach deep tumours."],
          },
        },
        {
          id: "ciep-u7-decay-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "During alpha decay, the unstable nucleus loses...",
          response: { type: "mcq", choices: [
            { id: "a", text: "2 protons and 2 neutrons" }, { id: "b", text: "1 proton only" }, { id: "c", text: "1 neutron only" }, { id: "d", text: "1 electron" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Alpha decay", statement: "Emits a helium nucleus: 2p + 2n." }],
            steps: [{ reasoning: "Recall.", working: "{}^4_2\\text{He}", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 2 protons and 2 neutrons",
            commonErrors: ["Beta decay involves a neutron changing to a proton + electron."],
          },
        },
        {
          id: "ciep-u7-decay-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An isotope has a half-life of 5 days. A sample initially contains 640 undecayed nuclei. How many undecayed nuclei remain after 20 days?",
          response: { type: "numeric", parts: [{ label: "Nuclei remaining", answer: 40, unit: "nuclei" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Half-life", statement: "$N = N_0 \\times (\\tfrac{1}{2})^n$" }],
            steps: [
              { reasoning: "20 days = 4 half-lives.", working: "\\frac{20}{5} = 4", marks: 1, markCode: "M" },
              { reasoning: "640 × (1/2)⁴ = 640/16 = 40.", working: "640 \\times \\left(\\tfrac{1}{2}\\right)^4 = 40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "40 nuclei",
            commonErrors: ["Halving only three times instead of four."],
          },
        },
        {
          id: "ciep-u7-decay-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "A sample has an initial activity of 320 Bq and the isotope has a half-life of 6 hours. Calculate the activity of the sample after 18 hours.",
          response: { type: "numeric", parts: [{ label: "Activity", answer: 40, unit: "Bq" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Half-life", statement: "Activity halves every half-life." }],
            steps: [
              { reasoning: "18/6 = 3 half-lives.", working: "\\frac{18}{6} = 3", marks: 1, markCode: "M" },
              { reasoning: "320 × (1/2)³ = 320/8 = 40.", working: "320 \\times \\left(\\tfrac{1}{2}\\right)^3 = 40", marks: 1, markCode: "M" },
              { reasoning: "Activity after 18 h is 40 Bq.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "40 Bq",
            commonErrors: ["Using 18/6 = 3 but applying it to nuclei instead of activity — result is the same halving."],
          },
        },
        {
          id: "ciep-u7-decay-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Carbon-14 has a half-life of 5700 years. A sample had an initial activity of 120 Bq when the organism died. What is its activity after 11 400 years?",
          response: { type: "numeric", parts: [{ label: "Activity", answer: 30, unit: "Bq" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Half-life", statement: "Activity halves each half-life." }],
            steps: [
              { reasoning: "11 400/5700 = 2 half-lives.", working: "\\frac{11400}{5700} = 2", marks: 1, markCode: "M" },
              { reasoning: "120 → 60 → 30 Bq.", working: "120 \\times \\left(\\tfrac{1}{2}\\right)^2 = 30", marks: 1, markCode: "M" },
              { reasoning: "Activity is 30 Bq.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30 Bq",
            commonErrors: ["Using 5700/11400 instead of 11400/5700 for the number of half-lives."],
          },
        },
        {
          id: "ciep-u7-decay-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A sample initially contains 8000 radioactive nuclei and has a half-life of 3 days. Determine the time taken for the number of undecayed nuclei to fall to 500.",
          response: { type: "numeric", parts: [{ label: "Time", answer: 12, unit: "days" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Half-life", statement: "$N = N_0 \\times (\\tfrac{1}{2})^n$" }],
            steps: [
              { reasoning: "8000/500 = 16 = 2⁴, so 4 half-lives.", working: "\\frac{8000}{500} = 16 = 2^4", marks: 1, markCode: "M" },
              { reasoning: "4 half-lives needed.", marks: 1, markCode: "M" },
              { reasoning: "4 × 3 = 12 days.", working: "4 \\times 3 = 12", marks: 1, markCode: "A" },
              { reasoning: "State the time in days.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "12 days",
            commonErrors: ["Finding 16 as the answer instead of using it as 2⁴."],
          },
        },
        {
          id: "ciep-u7-decay-q15",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two differences between alpha and beta radiation.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "comparison", name: "Alpha vs beta", statement: "Alpha: He nucleus, +2, strong ionisation, weak penetration. Beta: electron, −1, medium both." }],
            steps: [
              { reasoning: "Nature/charge: alpha is a helium nucleus (+2); beta is a fast electron (−1).", marks: 1, markCode: "M" },
              { reasoning: "Penetration/ionisation: alpha is stopped by paper and ionises strongly; beta is stopped by aluminium and ionises less.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Alpha is a helium nucleus of charge +2 with strong ionisation and weak penetration; beta is a fast electron of charge −1 with medium ionisation and penetration.",
            commonErrors: ["Giving only charge without comparing penetration."],
          },
        },
        {
          id: "ciep-u7-decay-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how carbon-14 dating is used to estimate the age of an archaeological artefact.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Carbon dating", statement: "Living matter absorbs C-14 at a steady rate; after death it decays with a 5700-year half-life." }],
            steps: [
              { reasoning: "While alive the organism absorbs carbon-14 at a constant rate.", marks: 1, markCode: "M" },
              { reasoning: "After death, absorption stops and C-14 decays.", marks: 1, markCode: "M" },
              { reasoning: "The remaining fraction of C-14 is measured.", marks: 1, markCode: "M" },
              { reasoning: "Comparison with the known half-life gives the age of the artefact.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Living material absorbs carbon-14 at a steady rate; after death the carbon-14 decays with a half-life of 5700 years. Measuring the fraction of C-14 remaining and comparing it with the initial living level allows the age to be estimated.",
            commonErrors: ["Ignoring that the measured fraction must be compared with the level in living matter."],
          },
        },
      ],
    },
    {
      id: "ciep-u7-nuclear",
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
          id: "ciep-u7-nuclear-q1",
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
          id: "ciep-u7-nuclear-q2",
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
          id: "ciep-u7-nuclear-q3",
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
          id: "ciep-u7-nuclear-q4",
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
      id: "ciep-u7-radioactivity-notes",
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
