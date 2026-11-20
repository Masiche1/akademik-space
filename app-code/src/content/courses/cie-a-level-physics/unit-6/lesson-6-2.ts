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
              { id: "a", text: "Heavy nucleus splits into lighter nuclei + energy" },
              { id: "b", text: "Light nuclei combine + energy" },
              { id: "c", text: "Electron emission" },
              { id: "d", text: "Photon emission" },
            ],
            correctChoiceId: "a",
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
              { id: "b", text: "Heavy nucleus splits" },
              { id: "c", text: "Electron emission" },
              { id: "d", text: "Photon absorption" },
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
