import type { Lesson } from "../../../types.ts";

export const lesson612: Lesson = {
  id: "cial-p-u6-lesson-6-2",
  code: "6-2",
  title: "Nuclear fission and fusion",
  goal: "I CAN explain fission, fusion, mass defect and binding energy.",
  standards: ["9702 14: nuclear physics"],
  vocabulary: [
    { term: "Fission", definition: "Heavy nucleus splits into lighter nuclei + neutrons + energy." },
    { term: "Fusion", definition: "Light nuclei combine to form heavier nucleus + energy." },
    { term: "Mass defect", definition: "Difference between nucleon masses and nucleus mass." },
    { term: "Binding energy", definition: "Energy needed to separate nucleus into nucleons — $E = \\Delta m c^2$." },
    { term: "Critical mass", definition: "Minimum mass for sustained chain reaction." },
    { term: "Chain reaction", definition: "Neutrons from fission cause further fissions." },
  ],
  concepts: [
    {
      id: "cial-p-u6-fission",
      title: "Nuclear fission",
      skill: "Explain fission process, chain reaction and energy release.",
      lesson: {
        sections: [
          {
            heading: "Fission process",
            body: "Heavy nucleus (U-235, Pu-239) absorbs neutron → unstable → splits into two lighter nuclei + 2-3 neutrons + ~200 MeV energy. Example: $^{235}_{92}U + ^1_0n \\to ^{141}_{56}Ba + ^{92}_{36}Kr + 3^1_0n + \\text{energy}$.",
          },
          {
            heading: "Chain reaction",
            body: "Each fission produces neutrons that can cause further fissions → chain reaction. Controlled: moderator slows neutrons, control rods absorb excess. Uncontrolled: supercritical → explosion (atomic bomb). Critical mass: minimum for self-sustaining reaction.",
          },
          {
            heading: "Fission reactors",
            body: "Nuclear power: moderator (water/graphite) slows neutrons; control rods (cadmium/boron) absorb; coolant removes heat; steam turbine generates electricity. Breeder reactors produce more fuel than consumed.",
          },
        ],
        keyFormulas: [
          { name: "Fission", statement: "$^{235}U + n \\to$ lighter nuclei + neutrons + energy" },
          { name: "Energy", statement: "~200 MeV per fission" },
          { name: "Critical mass", statement: "Minimum for chain reaction" },
        ],
        workedExample: {
          problem: "How much energy is released if 1 g of U-235 undergoes complete fission? (~200 MeV per nucleus)",
          solution: "Number of nuclei ≈ $6\\times10^{23}$; energy ≈ $200\\times10^6 \\times 1.6\\times10^{-19} \\times 6\\times10^{23} \\approx 2\\times10^{13}\\ J$.",
        },
      },
      questions: [
        {
          id: "cial-p-u6-fi-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is nuclear fission?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Light nuclei combine + energy" },
              { id: "b", text: "Photon emission" },
              { id: "c", text: "Heavy nucleus splits into lighter nuclei + energy" },
              { id: "d", text: "Electron emission" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Fission", statement: "Heavy nucleus splits." }],
            steps: [{ reasoning: "Fission = heavy → light + energy.", marks: 1, markCode: "A" }],
            finalAnswer: "Heavy nucleus splits",
          },
        },
        {
          id: "cial-p-u6-fi-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is a chain reaction?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Chain reaction", statement: "Neutrons from fission cause further fissions." }],
            steps: [
              { reasoning: "Each fission produces 2-3 neutrons.", marks: 1, markCode: "M" },
              { reasoning: "Neutrons cause further fissions.", marks: 1, markCode: "M" },
              { reasoning: "Self-sustaining if enough fuel (critical mass).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Neutrons → more fissions",
          },
        },
        {
          id: "cial-p-u6-fi-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do control rods prevent a nuclear reactor from exploding?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Reactor control", statement: "Control rods absorb neutrons → control rate." }],
            steps: [
              { reasoning: "Control rods made of neutron absorbers (cadmium/boron).", marks: 1, markCode: "M" },
              { reasoning: "Inserted → absorb neutrons → fewer fissions.", marks: 1, markCode: "M" },
              { reasoning: "Withdrawn → more neutrons → faster reaction.", marks: 1, markCode: "M" },
              { reasoning: "Maintains controlled chain reaction.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Absorb neutrons → control rate",
          },
        },
        {
          id: "cial-p-u6-fi-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Nuclear fission.",
          parts: [
            { label: "a", prompt: "Define fission.", marks: 2 },
            { label: "b", prompt: "What is a chain reaction?", marks: 2 },
            { label: "c", prompt: "What is critical mass?", marks: 2 },
            { label: "d", prompt: "How does a moderator work in a reactor?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Fission", statement: "Heavy→light+energy; chain reaction; moderator slows neutrons." }],
            steps: [
              { part: "a", reasoning: "Heavy nucleus splits into lighter + neutrons + energy.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Neutrons from fission cause more fissions.", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Minimum mass for self-sustaining reaction.", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Slows fast neutrons to thermal energies.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Water/graphite absorbs KE without absorbing neutron.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Thermal neutrons more likely to cause fission.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) split (b) chain (c) critical mass (d) slows neutrons",
          },
        },
        {
          id: "cial-p-u6-fi-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Approximately how much energy is released in each uranium-235 fission?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$200\\ MeV$" },
              { id: "b", text: "$2\\ MeV$" },
              { id: "c", text: "$200\\ eV$" },
              { id: "d", text: "$200\\ GeV$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Fission energy", statement: "Each U-235 fission releases ~200 MeV." }],
            steps: [{ reasoning: "~200 MeV per fission.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** $200\\ MeV$",
          },
        },
        {
          id: "cial-p-u6-fi-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Each fission of a U-235 nucleus releases $200\\ MeV$. Calculate the energy released by a single fission in joules. ($1\\ eV = 1.60 \\times 10^{-19}\\ J$)",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3.2e-11, tolerance: 0.05e-11, unit: "J" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Energy conversion", statement: "$E(J) = E(eV) \\times 1.60\\times10^{-19}$." }],
            steps: [
              { reasoning: "$E = 200\\times10^{6} \\times 1.60\\times10^{-19}$.", marks: 1, markCode: "M" },
              { reasoning: "$E = 3.2\\times10^{-11}\\ J$.", marks: 1, markCode: "M" },
              { reasoning: "$E \\approx 3.2 \\times 10^{-11}\\ J$ per fission.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E = 3.2 \\times 10^{-11}\\ J$",
          },
        },
        {
          id: "cial-p-u6-fi-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a thermal nuclear reactor, the moderator is used to",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "absorb the fission neutrons" },
              { id: "b", text: "reflect neutrons back into the core" },
              { id: "c", text: "cool the reactor core directly" },
              { id: "d", text: "slow the fast neutrons to thermal energies" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Moderator", statement: "Moderator (water/graphite) slows neutrons without absorbing them." }],
            steps: [{ reasoning: "Moderator reduces neutron KE → thermal neutrons → more likely to cause fission.", marks: 1, markCode: "A" }],
            finalAnswer: "**(d)** slow neutrons to thermal energies",
          },
        },
        {
          id: "cial-p-u6-fi-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "In the fission reaction $^{235}_{92}U + ^1_0n \\to ^{141}_{56}Ba + ? + 3^1_0n$, calculate (a) the mass number and (b) the atomic number of the other product nucleus.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 92, tolerance: 0.5, unit: "" },
              { label: "b", answer: 36, tolerance: 0.5, unit: "" },
            ],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Conservation", statement: "Total A and Z conserved in fission." }],
            steps: [
              { reasoning: "Mass number: $235 + 1 - 141 - 3 = 92$.", marks: 1, markCode: "M" },
              { reasoning: "Atomic number: $92 + 0 - 56 - 0 = 36$ (krypton).", marks: 1, markCode: "M" },
              { reasoning: "Other product is $^{92}_{36}Kr$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$A = 92$, $Z = 36$ ($^{92}_{36}Kr$)",
          },
        },
        {
          id: "cial-p-u6-fi-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a moderator is needed in a thermal nuclear reactor.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Moderator", statement: "Fast neutrons are less likely to cause fission; thermal neutrons have a much higher fission probability." }],
            steps: [
              { reasoning: "Fission produces fast neutrons (~2 MeV).", marks: 1, markCode: "M" },
              { reasoning: "U-235 fissions most readily with slow (thermal) neutrons.", marks: 1, markCode: "M" },
              { reasoning: "Moderator atoms collide with neutrons and reduce their kinetic energy without absorbing them.", marks: 1, markCode: "M" },
              { reasoning: "Water/graphite is used; control rods still absorb excess neutrons.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Moderator slows neutrons → higher fission probability",
          },
        },
        {
          id: "cial-p-u6-fi-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Control rods in a nuclear reactor are typically made of",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "cadmium or boron" },
              { id: "b", text: "copper" },
              { id: "c", text: "graphite" },
              { id: "d", text: "lead" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Control rods", statement: "Neutron absorbers (Cd, B) regulate the chain reaction." }],
            steps: [{ reasoning: "Cadmium/boron absorb neutrons strongly.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** cadmium or boron",
          },
        },
        {
          id: "cial-p-u6-fi-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate the energy released by $1.0 \\times 10^{20}$ fissions of U-235, each releasing $3.2 \\times 10^{-11}\\ J$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3.2e9, tolerance: 0.1e9, unit: "J" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Fission energy", statement: "$E_{total} = N \\times E_{fission}$." }],
            steps: [
              { reasoning: "$E = 1.0\\times10^{20} \\times 3.2\\times10^{-11}$.", marks: 1, markCode: "M" },
              { reasoning: "$E = 3.2\\times10^{9}\\ J$.", marks: 1, markCode: "M" },
              { reasoning: "$E = 3.2\\ GJ$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E = 3.2 \\times 10^{9}\\ J$",
          },
        },
        {
          id: "cial-p-u6-fi-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Critical mass is defined as",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the maximum safe mass of fuel" },
              { id: "b", text: "the mass of one uranium nucleus" },
              { id: "c", text: "the minimum mass of fissile material needed for a self-sustaining chain reaction" },
              { id: "d", text: "the mass of fuel in a reactor at full power" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Critical mass", statement: "Minimum fuel mass for self-sustaining chain reaction." }],
            steps: [{ reasoning: "Critical mass → enough neutrons retained to sustain reaction.", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** minimum mass for self-sustaining chain reaction",
          },
        },
        {
          id: "cial-p-u6-fi-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A nuclear reactor releases energy at a rate of $8.0 \\times 10^{8}\\ J\\,s^{-1}$. If each fission releases $3.2 \\times 10^{-11}\\ J$, calculate the number of fissions per second.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2.5e19, tolerance: 0.1e19, unit: "s^{-1}" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Fission rate", statement: "Rate $= P/E_{fission}$." }],
            steps: [
              { reasoning: "$\\text{rate} = 8.0\\times10^{8}/3.2\\times10^{-11}$.", marks: 1, markCode: "M" },
              { reasoning: "$= 2.5\\times10^{19}\\ s^{-1}$.", marks: 1, markCode: "M" },
              { reasoning: "$2.5 \\times 10^{19}$ fissions per second.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.5 \\times 10^{19}\\ s^{-1}$",
          },
        },
        {
          id: "cial-p-u6-fi-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the main components of a thermal nuclear power reactor and state the role of each.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Reactor", statement: "Fuel, moderator, control rods, coolant, heat exchanger/steam turbine." }],
            steps: [
              { reasoning: "Fuel (enriched U-235) undergoes fission releasing energy.", marks: 1, markCode: "M" },
              { reasoning: "Moderator slows neutrons to sustain chain reaction.", marks: 1, markCode: "M" },
              { reasoning: "Control rods absorb neutrons to regulate reaction rate.", marks: 1, markCode: "M" },
              { reasoning: "Coolant removes heat → steam turbine → generator produces electricity.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Fuel, moderator, control rods, coolant, turbine",
          },
        },
        {
          id: "cial-p-u6-fi-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A breeder reactor is described as one that",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "produces more fissile fuel than it consumes" },
              { id: "b", text: "uses only natural uranium with no enrichment" },
              { id: "c", text: "operates without a moderator" },
              { id: "d", text: "cannot sustain a chain reaction" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Breeder reactor", statement: "Converts fertile material (e.g. U-238) into fissile fuel." }],
            steps: [{ reasoning: "Breeder produces more fuel than consumed.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** produces more fissile fuel than it consumes",
          },
        },
        {
          id: "cial-p-u6-fi-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In the fission reaction $^{235}_{92}U + ^1_0n \\to ^{144}_{56}Ba + ? + 3^1_0n$, calculate (a) the mass number and (b) the atomic number of the other product nucleus.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 89, tolerance: 0.5, unit: "" },
              { label: "b", answer: 36, tolerance: 0.5, unit: "" },
            ],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Conservation", statement: "Total A and Z conserved in fission." }],
            steps: [
              { reasoning: "Mass number: $235 + 1 - 144 - 3 = 89$.", marks: 1, markCode: "M" },
              { reasoning: "Atomic number: $92 - 56 = 36$ (krypton).", marks: 1, markCode: "M" },
              { reasoning: "Other product is $^{89}_{36}Kr$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$A = 89$, $Z = 36$ ($^{89}_{36}Kr$)",
          },
        },
      ],
    },
    {
      id: "cial-p-u6-fusion",
      title: "Nuclear fusion and binding energy",
      skill: "Explain fusion, mass defect and binding energy.",
      lesson: {
        sections: [
          {
            heading: "Fusion process",
            body: "Light nuclei combine to form heavier nucleus + energy. Requires extreme temperature/pressure to overcome electrostatic repulsion. Example: $^2_1H + ^3_1H \\to ^4_2He + ^1_0n + 17.6\\ MeV$. Powers the Sun.",
          },
          {
            heading: "Mass defect and binding energy",
            body: "Nucleus mass < sum of nucleon masses — difference = mass defect $\\Delta m$. Binding energy $E = \\Delta m c^2$ — energy released when nucleus formed. Higher binding energy per nucleon = more stable. Iron-56 most stable.",
          },
          {
            heading: "Fission vs fusion",
            body: "Fission: heavy → light (U, Pu) — used in reactors/bombs. Fusion: light → heavy (H isotopes) — powers stars, potential clean energy. Both release energy because products have higher binding energy per nucleon.",
          },
        ],
        keyFormulas: [
          { name: "Binding energy", statement: "$E = \\Delta m c^2$" },
          { name: "Mass defect", statement: "$\\Delta m = $ nucleons − nucleus" },
          { name: "Fusion", statement: "Light nuclei → heavier + energy" },
        ],
        workedExample: {
          problem: "Deuterium-tritium fusion releases 17.6 MeV. Convert to joules.",
          solution: "$17.6 \\times 10^6 \\times 1.6 \\times 10^{-19} = 2.82 \\times 10^{-12}\\ J$ per reaction.",
        },
      },
      questions: [
        {
          id: "cial-p-u6-fu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is nuclear fusion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Light nuclei combine to form heavier nucleus + energy" },
              { id: "b", text: "Electron emission" },
              { id: "c", text: "Photon absorption" },
              { id: "d", text: "Heavy nucleus splits" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Fusion", statement: "Light→heavy+energy." }],
            steps: [{ reasoning: "Fusion = light nuclei combine.", marks: 1, markCode: "A" }],
            finalAnswer: "Light nuclei combine",
          },
        },
        {
          id: "cial-p-u6-fu-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is binding energy?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Binding energy", statement: "$E = \\Delta m c^2$ — energy to separate nucleus." }],
            steps: [
              { reasoning: "Energy needed to separate nucleus into nucleons.", marks: 1, markCode: "M" },
              { reasoning: "$E = \\Delta m c^2$ where $\\Delta m$ = mass defect.", marks: 1, markCode: "M" },
              { reasoning: "Higher binding energy = more stable nucleus.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E = \\Delta m c^2$",
          },
        },
        {
          id: "cial-p-u6-fu-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does fusion require extremely high temperatures?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Fusion conditions", statement: "Need to overcome electrostatic repulsion between nuclei." }],
            steps: [
              { reasoning: "Nuclei positively charged — repel each other.", marks: 1, markCode: "M" },
              { reasoning: "Need high KE to overcome Coulomb barrier.", marks: 1, markCode: "M" },
              { reasoning: "High T → high particle speeds → closer approach.", marks: 1, markCode: "M" },
              { reasoning: "Also need confinement (gravity in stars, magnetic in tokamaks).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Overcome electrostatic repulsion",
          },
        },
        {
          id: "cial-p-u6-fu-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Fusion and binding energy.",
          parts: [
            { label: "a", prompt: "Define fusion.", marks: 2 },
            { label: "b", prompt: "What is mass defect?", marks: 2 },
            { label: "c", prompt: "What is binding energy? Give formula.", marks: 2 },
            { label: "d", prompt: "Why is iron-56 the most stable nucleus?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Nuclear physics", statement: "$E=\\Delta mc^2$; Fe-56 peak binding energy." }],
            steps: [
              { part: "a", reasoning: "Light nuclei combine → heavier + energy.", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Nucleon mass sum − nucleus mass.", marks: 2, markCode: "A" },
              { part: "c", reasoning: "$E = \\Delta m c^2$.", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Highest binding energy per nucleon.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Most stable — minimum energy state.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Both fission and fusion move toward Fe.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) light→heavy (b) mass diff (c) Δmc² (d) max binding/nucleon",
          },
        },
        {
          id: "cial-p-u6-fu-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The deuterium–tritium fusion reaction $^{2}_{1}H + ^{3}_{1}H \\to ^{4}_{2}He + ^{1}_{0}n$ releases approximately",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1.6\\ MeV$" },
              { id: "b", text: "$17.6\\ GeV$" },
              { id: "c", text: "$17.6\\ MeV$" },
              { id: "d", text: "$200\\ MeV$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Fusion energy", statement: "D–T fusion releases ~17.6 MeV per reaction." }],
            steps: [{ reasoning: "17.6 MeV per D–T fusion.", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** $17.6\\ MeV$",
          },
        },
        {
          id: "cial-p-u6-fu-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "A single D–T fusion releases $17.6\\ MeV$. Calculate this energy in joules. ($1\\ eV = 1.60 \\times 10^{-19}\\ J$)",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2.82e-12, tolerance: 0.05e-12, unit: "J" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Energy conversion", statement: "$E(J) = E(eV) \\times 1.60\\times10^{-19}$." }],
            steps: [
              { reasoning: "$E = 17.6\\times10^{6} \\times 1.60\\times10^{-19}$.", marks: 1, markCode: "M" },
              { reasoning: "$E = 2.82\\times10^{-12}\\ J$.", marks: 1, markCode: "M" },
              { reasoning: "$E \\approx 2.8 \\times 10^{-12}\\ J$ per reaction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E = 2.82 \\times 10^{-12}\\ J$",
          },
        },
        {
          id: "cial-p-u6-fu-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The principal site of natural nuclear fusion in the universe is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the cores of stars such as the Sun" },
              { id: "b", text: "nuclear power stations" },
              { id: "c", text: "the Earth's core" },
              { id: "d", text: "radioactive waste" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Stellar fusion", statement: "Stars fuse hydrogen into helium, releasing the energy that powers them." }],
            steps: [{ reasoning: "Fusion powers stars — gravitational confinement provides the extreme conditions.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** cores of stars",
          },
        },
        {
          id: "cial-p-u6-fu-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "The D–T fusion releases $17.6\\ MeV$. Calculate the mass defect $\\Delta m$ corresponding to this energy, using $E = \\Delta m c^2$ with $c = 3.0 \\times 10^{8}\\ m\\,s^{-1}$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3.13e-29, tolerance: 0.05e-29, unit: "kg" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Mass-energy", statement: "$\\Delta m = E/c^2$." }],
            steps: [
              { reasoning: "$E = 17.6\\times10^{6} \\times 1.60\\times10^{-19} = 2.82\\times10^{-12}\\ J$.", marks: 1, markCode: "M" },
              { reasoning: "$\\Delta m = E/c^2 = 2.82\\times10^{-12}/(9.0\\times10^{16})$.", marks: 1, markCode: "M" },
              { reasoning: "$\\Delta m = 3.1 \\times 10^{-29}\\ kg$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\Delta m = 3.1 \\times 10^{-29}\\ kg$",
          },
        },
        {
          id: "cial-p-u6-fu-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain, in terms of binding energy per nucleon, why light nuclei release energy when they fuse.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Binding energy", statement: "Energy released when product has greater binding energy per nucleon than reactants." }],
            steps: [
              { reasoning: "Light nuclei (H isotopes) have low binding energy per nucleon.", marks: 1, markCode: "M" },
              { reasoning: "Fusion product (e.g. helium) has higher binding energy per nucleon → more stable.", marks: 1, markCode: "M" },
              { reasoning: "The increase in binding energy appears as released energy ($E = \\Delta m c^2$).", marks: 1, markCode: "M" },
              { reasoning: "Binding energy per nucleon rises towards iron-56 — fusion of light nuclei moves up this curve.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Products closer to Fe peak → higher BE/nucleon → energy released",
          },
        },
        {
          id: "cial-p-u6-fu-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "The nucleus with the greatest binding energy per nucleon, and hence the most stable, is approximately",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "helium-4" },
              { id: "b", text: "iron-56" },
              { id: "c", text: "hydrogen-1" },
              { id: "d", text: "uranium-235" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Stability", statement: "Fe-56 sits at the peak of the binding-energy-per-nucleon curve." }],
            steps: [{ reasoning: "Iron-56 has maximum binding energy per nucleon.", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** iron-56",
          },
        },
        {
          id: "cial-p-u6-fu-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "One U-235 fission releases about $200\\ MeV$, while one D–T fusion releases about $17.6\\ MeV$. Calculate approximately how many D–T fusion reactions release the same energy as one fission.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 11.4, tolerance: 0.2, unit: "" }],
          },
          markscheme: {
            principles: [{ kind: "comparison", name: "Fission vs fusion", statement: "Energy ratio $= 200/17.6 \\approx 11.4$." }],
            steps: [
              { reasoning: "$n = 200/17.6$.", marks: 1, markCode: "M" },
              { reasoning: "$n \\approx 11.4$ reactions.", marks: 1, markCode: "M" },
              { reasoning: "About 11 fusion reactions ≈ 1 fission in energy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 11$ fusion reactions",
          },
        },
        {
          id: "cial-p-u6-fu-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The mass of a nucleus is always",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "less than the sum of its nucleon masses" },
              { id: "b", text: "equal to the mass of its electrons" },
              { id: "c", text: "greater than the sum of its nucleon masses" },
              { id: "d", text: "equal to the sum of its nucleon masses" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Mass defect", statement: "Nucleus mass < sum of free nucleon masses; difference = mass defect." }],
            steps: [{ reasoning: "Missing mass = binding energy ($E = \\Delta m c^2$).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** less than the sum of nucleon masses",
          },
        },
        {
          id: "cial-p-u6-fu-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A nucleus has a binding energy of $492\\ MeV$ and contains $56$ nucleons. Calculate the binding energy per nucleon.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 8.79, tolerance: 0.05, unit: "MeV" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Binding energy", statement: "Binding energy per nucleon $= E_b/A$." }],
            steps: [
              { reasoning: "$E_b/A = 492/56$.", marks: 1, markCode: "M" },
              { reasoning: "$= 8.79\\ MeV$ per nucleon.", marks: 1, markCode: "M" },
              { reasoning: "$\\approx 8.8\\ MeV$ — close to the Fe-56 peak.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8.8\\ MeV$ per nucleon",
          },
        },
        {
          id: "cial-p-u6-fu-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare nuclear fission and fusion, referring to the nuclei involved, the conditions required and the energy released per event.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "comparison", name: "Fission vs fusion", statement: "Fission: heavy→light (~200 MeV, reactors); fusion: light→heavy (~17.6 MeV D–T, stars)." }],
            steps: [
              { reasoning: "Fission: heavy nucleus (U-235) splits into lighter fragments + neutrons.", marks: 1, markCode: "M" },
              { reasoning: "Fusion: light nuclei (D, T) combine into heavier nucleus + neutron.", marks: 1, markCode: "M" },
              { reasoning: "Fission needs critical mass + moderator; fusion needs extreme T/P to overcome Coulomb repulsion.", marks: 1, markCode: "M" },
              { reasoning: "Both release energy because products have higher binding energy per nucleon; fission ~200 MeV vs fusion ~17.6 MeV per event.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Heavy→light vs light→heavy; different conditions; ~200 vs ~18 MeV",
          },
        },
        {
          id: "cial-p-u6-fu-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Fusing two light nuclei releases energy because the product nucleus has",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "no neutrons" },
              { id: "b", text: "a lower atomic number" },
              { id: "c", text: "more nucleons" },
              { id: "d", text: "a higher binding energy per nucleon" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Binding energy", statement: "Energy released = increase in binding energy ($\\Delta m c^2$)." }],
            steps: [{ reasoning: "Higher binding energy per nucleon → more stable → energy released.", marks: 1, markCode: "A" }],
            finalAnswer: "**(d)** higher binding energy per nucleon",
          },
        },
        {
          id: "cial-p-u6-fu-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "If $2.0 \\times 10^{18}$ D–T fusion reactions occur, each releasing $2.82 \\times 10^{-12}\\ J$, calculate the total energy released.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5.64e6, tolerance: 0.1e6, unit: "J" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Fusion energy", statement: "$E_{total} = N \\times E_{reaction}$." }],
            steps: [
              { reasoning: "$E = 2.0\\times10^{18} \\times 2.82\\times10^{-12}$.", marks: 1, markCode: "M" },
              { reasoning: "$E = 5.64\\times10^{6}\\ J$.", marks: 1, markCode: "M" },
              { reasoning: "$E = 5.6\\ MJ$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E = 5.6 \\times 10^{6}\\ J$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-p-u6-fission-fusion-notes",
      title: "Fission and fusion — revision notes",
      summary: "Fission process, chain reactions, fusion, binding energy.",
      sections: [
        {
          heading: "Fission",
          body: "Heavy nucleus + neutron → lighter nuclei + neutrons + ~200 MeV. Chain reaction needs critical mass. Moderators slow neutrons; control rods absorb. Powers reactors.",
        },
        {
          heading: "Fusion & binding",
          body: "Light nuclei combine → heavier + energy. Needs extreme T/P to overcome repulsion. $E = \\Delta m c^2$; Fe-56 most stable (max binding energy/nucleon).",
        },
        {
          heading: "Exam checklist",
          body: "For fission balance nucleon numbers. Fusion needs high temperature — explain why (Coulomb repulsion).",
        },
      ],
    },
  ],
};
