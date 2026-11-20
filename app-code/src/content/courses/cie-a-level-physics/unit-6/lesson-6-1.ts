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
              { id: "a", text: "Helium nucleus ($^4_2\\alpha$)" },
              { id: "b", text: "Electron ($^0_{-1}\\beta$)" },
              { id: "c", text: "Photon ($^0_0\\gamma$)" },
              { id: "d", text: "Neutron" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "Time for half the nuclei to decay" },
              { id: "b", text: "Time for all nuclei to decay" },
              { id: "c", text: "Maximum decay rate" },
              { id: "d", text: "Time for activity to double" },
            ],
            correctChoiceId: "a",
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
