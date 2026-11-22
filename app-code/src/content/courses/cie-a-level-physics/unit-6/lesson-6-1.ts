import type { Lesson } from "../../../types.ts";

export const lesson611: Lesson = {
  id: "cial-p-u6-lesson-6-1",
  code: "6-1",
  title: "Radioactive decay",
  goal: "I CAN describe alpha, beta and gamma decay and half-life.",
  standards: ["9702 14: radioactivity"],
  vocabulary: [
    { term: "Radioactivity", definition: "Spontaneous emission of radiation from unstable nucleus." },
    { term: "Alpha decay", definition: "Emission of helium nucleus ($^4_2\\alpha$) — heavy nuclei." },
    { term: "Beta decay", definition: "Neutron → proton + electron ($^0_{-1}\\beta$)." },
    { term: "Gamma decay", definition: "Emission of high-energy photon — no mass/charge change." },
    { term: "Half-life", definition: "Time for half the nuclei to decay — $T_{1/2}$." },
    { term: "Decay constant", definition: "Probability of decay per unit time — $\\lambda$." },
  ],
  concepts: [
    {
      id: "cial-p-u6-decay",
      title: "Types of decay",
      skill: "Identify decay types and write nuclear equations.",
      lesson: {
        sections: [
          {
            heading: "Alpha decay",
            body: "Heavy nuclei emit alpha particle ($^4_2\\alpha$ = He nucleus). Mass number −4, atomic number −2. Example: $^{238}_{92}U \\to ^{234}_{90}Th + ^4_2\\alpha$. Stopped by paper/skin; ionising; least penetrating.",
          },
          {
            heading: "Beta decay",
            body: "Neutron → proton + electron + antineutrino. Mass number unchanged, atomic number +1. Example: $^{14}_{6}C \\to ^{14}_{7}N + ^0_{-1}\\beta$. Stopped by thin aluminium; more penetrating than alpha.",
          },
          {
            heading: "Gamma decay",
            body: "Excited nucleus emits gamma photon ($^0_0\\gamma$). No change in mass/atomic number. Accompanies alpha/beta when nucleus left in excited state. Most penetrating — needs lead/concrete.",
          },
        ],
        keyFormulas: [
          { name: "Alpha", statement: "$^{A}_{Z}X \\to ^{A-4}_{Z-2}Y + ^4_2\\alpha$" },
          { name: "Beta", statement: "$^{A}_{Z}X \\to ^{A}_{Z+1}Y + ^0_{-1}\\beta$" },
          { name: "Gamma", statement: "No change in A or Z" },
        ],
        workedExample: {
          problem: "Write equation for alpha decay of $^{226}_{88}Ra$.",
          solution: "$^{226}_{88}Ra \\to ^{222}_{86}Rn + ^4_2\\alpha$.",
        },
      },
      questions: [
        {
          id: "cial-p-u6-dc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is emitted in alpha decay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Photon ($^0_0\\gamma$)" },
              { id: "b", text: "Helium nucleus ($^4_2\\alpha$)" },
              { id: "c", text: "Electron ($^0_{-1}\\beta$)" },
              { id: "d", text: "Neutron" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Alpha", statement: "Helium nucleus emission." }],
            steps: [{ reasoning: "Alpha = $^4_2\\alpha$ = He nucleus.", marks: 1, markCode: "A" }],
            finalAnswer: "Helium nucleus",
          },
        },
        {
          id: "cial-p-u6-dc-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write nuclear equation for beta decay of $^{14}_{6}C$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Beta", statement: "$^{A}_{Z}X \\to ^{A}_{Z+1}Y + ^0_{-1}\\beta$." }],
            steps: [
              { reasoning: "Mass number stays 14.", marks: 1, markCode: "M" },
              { reasoning: "Atomic number increases by 1: 6→7.", marks: 1, markCode: "M" },
              { reasoning: "$^{14}_{6}C \\to ^{14}_{7}N + ^0_{-1}\\beta$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$^{14}_{7}N$ + β",
          },
        },
        {
          id: "cial-p-u6-dc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is gamma radiation more penetrating than alpha?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Penetration", statement: "Gamma = high-energy photon, no charge/mass." }],
            steps: [
              { reasoning: "Alpha = heavy charged particle — easily stopped.", marks: 1, markCode: "M" },
              { reasoning: "Gamma = photon — no charge, interacts weakly.", marks: 1, markCode: "M" },
              { reasoning: "Gamma has very high energy → penetrates deeply.", marks: 1, markCode: "M" },
              { reasoning: "Needs thick lead/concrete to stop.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Photon — no charge, high energy",
          },
        },
        {
          id: "cial-p-u6-dc-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Radioactive decay.",
          parts: [
            { label: "a", prompt: "Describe alpha decay.", marks: 3 },
            { label: "b", prompt: "Describe beta decay.", marks: 3 },
            { label: "c", prompt: "Describe gamma decay.", marks: 2 },
            { label: "d", prompt: "Which is most penetrating and why?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Decay", statement: "Alpha=He nucleus; beta=electron; gamma=photon." }],
            steps: [
              { part: "a", reasoning: "Emits $^4_2\\alpha$; A−4, Z−2.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Heavy nuclei only.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Stopped by paper/skin.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Neutron→proton+electron; A same, Z+1.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Stopped by thin aluminium.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "More penetrating than alpha.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Emits photon; no change in A or Z.", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Gamma — photon, no charge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) He nucleus (b) electron (c) photon (d) gamma",
          },
        },
        {
          id: "cial-p-u6-dc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which equation correctly represents beta-minus decay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$^{A}_{Z}X \\to ^{A}_{Z+1}Y + ^0_{-1}\\beta$" },
              { id: "b", text: "$^{A}_{Z}X \\to ^{A-4}_{Z-2}Y + ^4_2\\alpha$" },
              { id: "c", text: "$^{A}_{Z}X \\to ^{A-1}_{Z-1}Y + ^1_0n$" },
              { id: "d", text: "$^{A}_{Z}X \\to ^{A}_{Z}Y + ^0_0\\gamma$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Beta decay", statement: "$^{A}_{Z}X \\to ^{A}_{Z+1}Y + ^0_{-1}\\beta$ (+ antineutrino)." }],
            steps: [{ reasoning: "Beta-minus: A unchanged, Z increases by 1.", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** $^{A}_{Z}X \\to ^{A}_{Z+1}Y + ^0_{-1}\\beta$",
          },
        },
        {
          id: "cial-p-u6-dc-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "An alpha particle is emitted with an energy of $5.5\\ MeV$. Convert this energy into joules. ($1\\ eV = 1.60 \\times 10^{-19}\\ J$)",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 8.8e-13, tolerance: 0.05e-13, unit: "J" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Energy conversion", statement: "$1\\ eV = 1.60\\times10^{-19}\\ J$." }],
            steps: [
              { reasoning: "$E = 5.5\\times10^{6} \\times 1.60\\times10^{-19}$.", marks: 1, markCode: "M" },
              { reasoning: "$E = 8.8\\times10^{-13}\\ J$.", marks: 1, markCode: "M" },
              { reasoning: "$E \\approx 8.8 \\times 10^{-13}\\ J$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E = 8.8 \\times 10^{-13}\\ J$",
          },
        },
        {
          id: "cial-p-u6-dc-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of radiation is stopped by a sheet of paper?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "alpha" },
              { id: "b", text: "gamma" },
              { id: "c", text: "beta" },
              { id: "d", text: "all three equally" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Penetration", statement: "Alpha: stopped by paper/skin; beta: thin aluminium; gamma: lead/concrete." }],
            steps: [{ reasoning: "Alpha is the least penetrating — stopped by paper.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** alpha",
          },
        },
        {
          id: "cial-p-u6-dc-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Polonium-210 ($^{210}_{84}Po$) undergoes alpha decay. Calculate (a) the mass number and (b) the atomic number of the daughter nucleus.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 206, tolerance: 0.5, unit: "" },
              { label: "b", answer: 82, tolerance: 0.5, unit: "" },
            ],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Alpha decay", statement: "Alpha decay: $A \\to A-4$, $Z \\to Z-2$." }],
            steps: [
              { reasoning: "Mass number: $210 - 4 = 206$.", marks: 1, markCode: "M" },
              { reasoning: "Atomic number: $84 - 2 = 82$ (lead).", marks: 1, markCode: "M" },
              { reasoning: "Daughter is $^{206}_{82}Pb$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$A = 206$, $Z = 82$ ($^{206}_{82}Pb$)",
          },
        },
        {
          id: "cial-p-u6-dc-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why gamma rays are often emitted immediately after an alpha or beta decay.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Gamma emission", statement: "Daughter nucleus may be left in an excited state; it de-excites by emitting a gamma photon." }],
            steps: [
              { reasoning: "Alpha/beta decay changes the nucleus, often leaving it in an excited state.", marks: 1, markCode: "M" },
              { reasoning: "The excited nucleus is unstable and must lose energy.", marks: 1, markCode: "M" },
              { reasoning: "It drops to a lower energy level by emitting a high-energy photon — gamma ray.", marks: 1, markCode: "M" },
              { reasoning: "Gamma emission involves no change in mass number or atomic number.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Daughter nucleus de-excites by gamma emission",
          },
        },
        {
          id: "cial-p-u6-dc-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "In any radioactive decay, which quantities are always conserved?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "kinetic energy only" },
              { id: "b", text: "binding energy only" },
              { id: "c", text: "mass number and atomic number" },
              { id: "d", text: "number of neutrons only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Conservation", statement: "Total mass number A and atomic number Z are conserved in nuclear equations." }],
            steps: [{ reasoning: "A and Z balance on both sides of every decay equation.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** mass number and atomic number",
          },
        },
        {
          id: "cial-p-u6-dc-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A gamma photon has an energy of $1.2\\ MeV$. Calculate its energy in joules. ($1\\ eV = 1.60 \\times 10^{-19}\\ J$)",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1.92e-13, tolerance: 0.05e-13, unit: "J" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Energy conversion", statement: "$E(J) = E(eV) \\times 1.60\\times10^{-19}$." }],
            steps: [
              { reasoning: "$E = 1.2\\times10^{6} \\times 1.60\\times10^{-19}$.", marks: 1, markCode: "M" },
              { reasoning: "$E = 1.92\\times10^{-13}\\ J$.", marks: 1, markCode: "M" },
              { reasoning: "$E \\approx 1.9 \\times 10^{-13}\\ J$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E = 1.92 \\times 10^{-13}\\ J$",
          },
        },
        {
          id: "cial-p-u6-dc-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "In beta-minus decay, a neutron inside the nucleus changes into",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a pion and a neutrino only" },
              { id: "b", text: "a proton, an electron and an antineutrino" },
              { id: "c", text: "two protons" },
              { id: "d", text: "a proton and an alpha particle" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Beta decay", statement: "$n \\to p + e^- + \\bar{\\nu}_e$." }],
            steps: [{ reasoning: "Neutron → proton + electron (β⁻) + antineutrino.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** proton + electron + antineutrino",
          },
        },
        {
          id: "cial-p-u6-dc-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A radioactive sample has a decay constant $\\lambda = 0.010\\ s^{-1}$ and contains $5.0 \\times 10^{6}$ undecayed nuclei. Calculate its activity.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50000, tolerance: 100, unit: "Bq" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Activity", statement: "$A = \\lambda N$; $1\\ Bq = 1$ decay per second." }],
            steps: [
              { reasoning: "$A = \\lambda N = 0.010 \\times 5.0\\times10^{6}$.", marks: 1, markCode: "M" },
              { reasoning: "$A = 5.0\\times10^{4}\\ s^{-1}$.", marks: 1, markCode: "M" },
              { reasoning: "$A = 50\\,000\\ Bq$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$A = 5.0 \\times 10^{4}\\ Bq$",
          },
        },
        {
          id: "cial-p-u6-dc-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a balanced nuclear equation for the alpha decay of uranium-238, $^{238}_{92}U$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Alpha decay", statement: "$^{A}_{Z}X \\to ^{A-4}_{Z-2}Y + ^4_2\\alpha$." }],
            steps: [
              { reasoning: "Mass number: $238 - 4 = 234$.", marks: 1, markCode: "M" },
              { reasoning: "Atomic number: $92 - 2 = 90$ (thorium).", marks: 1, markCode: "M" },
              { reasoning: "Equation: $^{238}_{92}U \\to ^{234}_{90}Th + ^4_2\\alpha$.", marks: 1, markCode: "M" },
              { reasoning: "Check: $A$ and $Z$ balance on both sides.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$^{238}_{92}U \\to ^{234}_{90}Th + ^4_2\\alpha$",
          },
        },
        {
          id: "cial-p-u6-dc-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which type of radiation is the most strongly ionising?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "all equal" },
              { id: "b", text: "alpha" },
              { id: "c", text: "gamma" },
              { id: "d", text: "beta" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Ionisation", statement: "Alpha: most ionising, least penetrating; gamma: least ionising, most penetrating." }],
            steps: [{ reasoning: "Alpha's large mass and charge make it strongly ionising.", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** alpha",
          },
        },
        {
          id: "cial-p-u6-dc-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Strontium-90 ($^{90}_{38}Sr$) undergoes beta-minus decay. Calculate (a) the mass number and (b) the atomic number of the daughter nucleus.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 90, tolerance: 0.5, unit: "" },
              { label: "b", answer: 39, tolerance: 0.5, unit: "" },
            ],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Beta decay", statement: "Beta-minus: $A$ unchanged, $Z \\to Z+1$." }],
            steps: [
              { reasoning: "Mass number stays $90$.", marks: 1, markCode: "M" },
              { reasoning: "Atomic number: $38 + 1 = 39$ (yttrium).", marks: 1, markCode: "M" },
              { reasoning: "Daughter is $^{90}_{39}Y$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$A = 90$, $Z = 39$ ($^{90}_{39}Y$)",
          },
        },
      ],
    },
    {
      id: "cial-p-u6-half-life",
      title: "Half-life",
      skill: "Calculate decay using half-life and exponential decay.",
      lesson: {
        sections: [
          {
            heading: "Half-life concept",
            body: "Half-life $T_{1/2}$ = time for half the undecayed nuclei to decay. After n half-lives: $N = N_0 \\times (1/2)^n$. Constant for each isotope — independent of temperature, pressure, amount.",
          },
          {
            heading: "Decay equation",
            body: "$N = N_0 e^{-\\lambda t}$ where $\\lambda = \\ln 2 / T_{1/2}$. Activity $A = \\lambda N$ — decays/sec (becquerel). Activity proportional to number of undecayed nuclei.",
          },
          {
            heading: "Applications",
            body: "Radiometric dating (carbon-14, uranium-lead), medical tracers, cancer treatment (radiotherapy), smoke detectors (americium). Half-life varies hugely: seconds to billions of years.",
          },
        ],
        keyFormulas: [
          { name: "Half-life", statement: "$N = N_0 (1/2)^{t/T_{1/2}}$" },
          { name: "Decay constant", statement: "$\\lambda = \\ln 2 / T_{1/2}$" },
          { name: "Activity", statement: "$A = \\lambda N$" },
        ],
        workedExample: {
          problem: "A sample has 8 g of radioactive isotope with half-life 10 years. How much remains after 30 years?",
          solution: "3 half-lives: $8 \\times (1/2)^3 = 8 \\times 1/8 = 1\\ g$.",
        },
      },
      questions: [
        {
          id: "cial-p-u6-hl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is half-life?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Maximum decay rate" },
              { id: "b", text: "Time for half the nuclei to decay" },
              { id: "c", text: "Time for activity to double" },
              { id: "d", text: "Time for all nuclei to decay" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Half-life", statement: "Time for half to decay." }],
            steps: [{ reasoning: "Half-life = 50% decay time.", marks: 1, markCode: "A" }],
            finalAnswer: "Time for half to decay",
          },
        },
        {
          id: "cial-p-u6-hl-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A radioactive sample has half-life 5 years. What fraction remains after 15 years?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Half-life", statement: "$N = N_0(1/2)^{t/T_{1/2}}$." }],
            steps: [
              { reasoning: "15/5 = 3 half-lives.", marks: 1, markCode: "M" },
              { reasoning: "Fraction = $(1/2)^3 = 1/8 = 0.125$.", marks: 1, markCode: "M" },
              { reasoning: "$12.5\\%$ remains.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1/8$ or $12.5\\%$",
          },
        },
        {
          id: "cial-p-u6-hl-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is half-life constant regardless of temperature or amount?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Radioactivity", statement: "Decay is random nuclear process — probability per nucleus." }],
            steps: [
              { reasoning: "Decay is spontaneous nuclear process.", marks: 1, markCode: "M" },
              { reasoning: "Each nucleus has fixed probability of decay.", marks: 1, markCode: "M" },
              { reasoning: "Not affected by external conditions.", marks: 1, markCode: "M" },
              { reasoning: "Half-life is statistical property of isotope.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Random nuclear process — fixed probability",
          },
        },
        {
          id: "cial-p-u6-hl-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Half-life.",
          parts: [
            { label: "a", prompt: "Define half-life.", marks: 2 },
            { label: "b", prompt: "A sample has 16 g after 3 half-lives. Find initial mass.", marks: 3 },
            { label: "c", prompt: "What is activity? Give unit.", marks: 2 },
            { label: "d", prompt: "Name one application of radioactivity.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Half-life", statement: "$N=N_0(1/2)^{t/T_{1/2}}$; $A=\\lambda N$." }],
            steps: [
              { part: "a", reasoning: "Time for half nuclei to decay.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "$16 = N_0 \\times (1/2)^3 = N_0/8$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$N_0 = 128\\ g$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$N_0 = 128\\ g$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$A = \\lambda N$ — decays/sec.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Unit: becquerel (Bq).", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Any: radiometric dating, medical tracer, radiotherapy, smoke detector.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) half decay (b) 128 g (c) A=λN, Bq (d) dating/medical",
          },
        },
        {
          id: "cial-p-u6-hl-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "After two half-lives, the fraction of the original undecayed nuclei remaining is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1/2$" },
              { id: "b", text: "$1/8$" },
              { id: "c", text: "$1/4$" },
              { id: "d", text: "zero" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Half-life", statement: "$N = N_0 (1/2)^{t/T_{1/2}}$." }],
            steps: [{ reasoning: "$(1/2)^2 = 1/4$ remains after 2 half-lives.", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** $1/4$",
          },
        },
        {
          id: "cial-p-u6-hl-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "A radioactive isotope has a half-life of $5.0$ years. A sample initially contains some nuclei and $3.0\\ g$ remains after $20$ years. Calculate the initial mass.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 48, tolerance: 0.5, unit: "g" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Half-life", statement: "$N = N_0(1/2)^n$ where $n = t/T_{1/2}$." }],
            steps: [
              { reasoning: "Number of half-lives: $20/5 = 4$.", marks: 1, markCode: "M" },
              { reasoning: "$3.0 = N_0 \\times (1/2)^4 = N_0/16$.", marks: 1, markCode: "M" },
              { reasoning: "$N_0 = 48\\ g$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$N_0 = 48\\ g$",
          },
        },
        {
          id: "cial-p-u6-hl-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The decay constant $\\lambda$ of a radioactive isotope is related to its half-life by",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\lambda = 1/T_{1/2}$" },
              { id: "b", text: "$\\lambda = \\ln 2 / T_{1/2}$" },
              { id: "c", text: "$\\lambda = \\ln 2 \\times T_{1/2}$" },
              { id: "d", text: "$\\lambda = T_{1/2}/\\ln 2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Decay constant", statement: "$\\lambda = \\ln 2 / T_{1/2}$." }],
            steps: [{ reasoning: "$\\lambda = \\ln 2/T_{1/2}$.", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** $\\lambda = \\ln 2 / T_{1/2}$",
          },
        },
        {
          id: "cial-p-u6-hl-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "A sample has an initial activity of $800\\ Bq$ and a half-life of $10\\ min$. Calculate its activity after $30\\ min$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100, tolerance: 1, unit: "Bq" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Activity decay", statement: "Activity follows the same exponential decay as $N$: $A = A_0(1/2)^n$." }],
            steps: [
              { reasoning: "Half-lives elapsed: $30/10 = 3$.", marks: 1, markCode: "M" },
              { reasoning: "$A = 800 \\times (1/2)^3 = 800/8$.", marks: 1, markCode: "M" },
              { reasoning: "$A = 100\\ Bq$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$A = 100\\ Bq$",
          },
        },
        {
          id: "cial-p-u6-hl-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the activity of a radioactive sample is proportional to the number of undecayed nuclei it contains.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Activity", statement: "$A = \\lambda N$ — each nucleus has the same decay probability per unit time." }],
            steps: [
              { reasoning: "Each undecayed nucleus has a fixed probability $\\lambda$ of decaying per unit time.", marks: 1, markCode: "M" },
              { reasoning: "With $N$ nuclei, expected decays per second $= \\lambda N$.", marks: 1, markCode: "M" },
              { reasoning: "Hence activity $A = \\lambda N$ — proportional to $N$.", marks: 1, markCode: "M" },
              { reasoning: "As nuclei decay, $N$ falls → activity falls exponentially.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$A = \\lambda N$ — proportional to undecayed nuclei",
          },
        },
        {
          id: "cial-p-u6-hl-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "If the temperature of a radioactive sample is increased, its half-life will",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "increase" },
              { id: "b", text: "decrease" },
              { id: "c", text: "become zero" },
              { id: "d", text: "remain unchanged" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Half-life constancy", statement: "Half-life is a nuclear property — independent of temperature, pressure and amount." }],
            steps: [{ reasoning: "Decay is a spontaneous nuclear process; temperature does not affect it.", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** remain unchanged",
          },
        },
        {
          id: "cial-p-u6-hl-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "An isotope has a half-life of $8.0\\ s$. Calculate its decay constant $\\lambda$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.0866, tolerance: 0.002, unit: "s^{-1}" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Decay constant", statement: "$\\lambda = \\ln 2 / T_{1/2} = 0.693/T_{1/2}$." }],
            steps: [
              { reasoning: "$\\lambda = 0.693/8.0$.", marks: 1, markCode: "M" },
              { reasoning: "$\\lambda = 0.0866\\ s^{-1}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\lambda \\approx 0.087\\ s^{-1}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\lambda = 0.087\\ s^{-1}$",
          },
        },
        {
          id: "cial-p-u6-hl-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Radiocarbon dating works because the ratio of $^{14}C$ to $^{12}C$ in a once-living sample",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "increases steadily with time" },
              { id: "b", text: "doubles every year" },
              { id: "c", text: "decreases steadily with time" },
              { id: "d", text: "remains constant forever" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "application", name: "Carbon dating", statement: "$^{14}C$ decays (T½ ≈ 5730 y) after death; ratio falls exponentially." }],
            steps: [{ reasoning: "No new $^{14}C$ is absorbed after death → ratio decreases.", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** decreases steadily with time",
          },
        },
        {
          id: "cial-p-u6-hl-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A radioactive sample has a half-life of $3.0$ years. Calculate (a) the mass remaining from an initial $8.0\\ g$ after $9.0$ years and (b) the fraction of the sample that has decayed.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1, tolerance: 0.05, unit: "g" },
              { label: "b", answer: 0.875, tolerance: 0.01, unit: "" },
            ],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Half-life", statement: "$N = N_0(1/2)^{t/T_{1/2}}$; decayed fraction $= 1 - (1/2)^n$." }],
            steps: [
              { reasoning: "Half-lives: $9/3 = 3$; remaining $= 8 \\times (1/2)^3 = 1.0\\ g$.", marks: 1, markCode: "M" },
              { reasoning: "Fraction remaining $= 1/8 = 0.125$; decayed $= 1 - 0.125 = 0.875$.", marks: 1, markCode: "M" },
              { reasoning: "$1.0\\ g$ remains; $87.5\\%$ decayed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.0\\ g$ remains; $87.5\\%$ decayed",
          },
        },
        {
          id: "cial-p-u6-hl-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the half-life of carbon-14 is used to estimate the age of archaeological remains.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "application", name: "Carbon dating", statement: "Living organisms maintain a constant $^{14}C$ ratio; after death it decays with T½ ≈ 5730 y." }],
            steps: [
              { reasoning: "While alive, the organism exchanges carbon with the atmosphere, keeping a constant $^{14}C/^{12}C$ ratio.", marks: 1, markCode: "M" },
              { reasoning: "After death no new $^{14}C$ is taken in, so the ratio falls as $^{14}C$ decays.", marks: 1, markCode: "M" },
              { reasoning: "Measuring the current ratio and comparing with the living ratio gives the number of half-lives elapsed.", marks: 1, markCode: "M" },
              { reasoning: "Age $= n \\times T_{1/2}$ — reliable up to ~50 000 years.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Decay of ¹⁴C/¹²C ratio after death dates the sample",
          },
        },
        {
          id: "cial-p-u6-hl-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "One becquerel (Bq) is equivalent to",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "one decay per minute" },
              { id: "b", text: "one nucleus remaining" },
              { id: "c", text: "one decay per second" },
              { id: "d", text: "one joule of energy released" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Becquerel", statement: "$1\\ Bq = 1$ nuclear decay per second." }],
            steps: [{ reasoning: "Becquerel = decays per second.", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** one decay per second",
          },
        },
        {
          id: "cial-p-u6-hl-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The number of undecayed nuclei in a sample falls from $1.0 \\times 10^{8}$ to $1.25 \\times 10^{7}$ in $30\\ s$. Calculate the half-life of the isotope.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, tolerance: 0.5, unit: "s" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Half-life", statement: "Each half-life halves N; count the halvings." }],
            steps: [
              { reasoning: "$1.0\\times10^{8} \\to 5.0\\times10^{7} \\to 2.5\\times10^{7} \\to 1.25\\times10^{7}$: three halvings.", marks: 1, markCode: "M" },
              { reasoning: "$3$ half-lives $= 30\\ s$.", marks: 1, markCode: "M" },
              { reasoning: "$T_{1/2} = 10\\ s$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$T_{1/2} = 10\\ s$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-p-u6-decay-half-life-notes",
      title: "Radioactive decay and half-life — revision notes",
      summary: "Alpha/beta/gamma decay, half-life, activity.",
      sections: [
        {
          heading: "Decay types",
          body: "Alpha: $^4_2\\alpha$ (He nucleus), A−4/Z−2, stopped by paper. Beta: $^0_{-1}\\beta$ (electron), A same/Z+1, stopped by Al. Gamma: photon, no change, most penetrating.",
        },
        {
          heading: "Half-life",
          body: "$N = N_0(1/2)^{t/T_{1/2}}$; $\\lambda = \\ln2/T_{1/2}$; $A = \\lambda N$. Constant regardless of conditions. Applications: dating, tracers, radiotherapy.",
        },
        {
          heading: "Exam checklist",
          body: "Balance mass and atomic numbers in decay equations. Count half-lives first for decay problems.",
        },
      ],
    },
  ],
};
