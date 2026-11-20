import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "edialphys-u4-lesson-4-3",
  code: "4-3",
  title: "Magnetic Fields and Particle Physics",
  goal: "I CAN describe magnetic fields and the force on moving charges, and classify particles using the standard model.",
  standards: [
    "WPH14 Further Mechanics, Fields and Particles",
    "Magnetic fields",
    "Nuclear and particle physics",
  ],
  vocabulary: [
    {
      term: "Magnetic flux density",
      definition: "Strength of a magnetic field, measured in tesla (T).",
    },
    {
      term: "Fleming's left-hand rule",
      definition:
        "Hand rule giving the direction of force on a current in a magnetic field.",
    },
    {
      term: "Lepton",
      definition:
        "Fundamental particle such as the electron, muon, tau or their neutrinos.",
    },
    {
      term: "Quark",
      definition:
        "Fundamental constituent of hadrons; protons and neutrons are made of quarks.",
    },
    {
      term: "Antiparticle",
      definition:
        "Particle with the same mass but opposite charge and other quantum numbers.",
    },
  ],
  concepts: [
    {
      id: "edialphys-u4-magnetic",
      title: "Magnetic fields",
      skill:
        "Describe magnetic field patterns and calculate the force on moving charges and current-carrying conductors.",
      lesson: {
        sections: [
          {
            heading: "Magnetic field patterns",
            body: "A bar magnet produces field lines that loop from north to south outside the magnet; inside they continue south to north, forming closed loops. Field direction is defined as the direction of force on a north pole. A current-carrying solenoid produces a uniform field inside, like a bar magnet; the direction follows the right-hand grip rule. The Earth's magnetic field has a north-seeking pole near geographic north.",
          },
          {
            heading: "Force on a moving charge",
            body: "A charge q moving with velocity v in a magnetic field of flux density B experiences F = Bqv sinθ, where θ is the angle between v and B. Maximum force occurs when the motion is perpendicular to the field; no force acts when the charge moves parallel to it. Fleming's left-hand rule gives the direction: first finger Field, seCond finger Current (conventional), thuMb Motion — or for a positive charge, motion, field and force are mutually perpendicular.",
          },
          {
            heading: "Motion in a magnetic field",
            body: "When a charged particle moves perpendicular to a uniform B field, the magnetic force is always perpendicular to its velocity, so it acts as a centripetal force and the particle follows a circle of radius r = mv/(Bq). The period T = 2πm/(Bq) is independent of speed.",
          },
        ],
        keyFormulas: [
          { name: "Force on a moving charge", statement: "F = Bqv sinθ" },
          { name: "Radius of circular path", statement: "r = mv/(Bq)" },
          { name: "Force on a conductor", statement: "F = BIL" },
        ],
        workedExample: {
          problem:
            "A proton (q = 1.6 × 10⁻¹⁹ C, m = 1.7 × 10⁻²⁷ kg) moves at 2.0 × 10⁶ m/s perpendicular to a 0.50 T magnetic field. Find the radius of its circular path.",
          solution:
            "r = mv/(Bq) = (1.7 × 10⁻²⁷ × 2.0 × 10⁶)/(0.50 × 1.6 × 10⁻¹⁹) = 3.4 × 10⁻²¹/8.0 × 10⁻²⁰ = 0.0425 m.",
        },
      },
      questions: [
        {
          id: "edialphys-u4-magnetic-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A positive charge moves parallel to a uniform magnetic field. What force does it experience?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Maximum force" },
              { id: "b", text: "Half the maximum force" },
              { id: "c", text: "No force" },
              { id: "d", text: "Force opposite to its motion" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "F = Bqv sinθ",
                statement: "θ = 0° gives sinθ = 0.",
              },
            ],
            steps: [
              {
                reasoning: "F = Bqv sinθ; for parallel motion θ = 0 so F = 0.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** No force",
            commonErrors: ["Thinking any motion in a field produces a force."],
          },
        },
        {
          id: "edialphys-u4-magnetic-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A charge of 2.0 × 10⁻⁶ C moves at 5.0 × 10⁵ m/s perpendicular to a magnetic field of flux density 0.40 T. Calculate the force on the charge.",
          response: {
            type: "numeric",
            parts: [
              { label: "Force", answer: 0.4, tolerance: 0.001, unit: "N" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "F = Bqv",
                statement: "Maximum force when sinθ = 1.",
              },
            ],
            steps: [
              {
                reasoning: "Motion is perpendicular so F = Bqv.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "F = 0.40 × 2.0 × 10⁻⁶ × 5.0 × 10⁵.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "F = 0.40 N.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.40 N",
            commonErrors: ["Squaring v or misplacing powers of ten."],
          },
        },
        {
          id: "edialphys-u4-magnetic-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a charged particle moving perpendicular to a uniform magnetic field follows a circular path.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Magnetic force",
                statement: "F = Bqv is always perpendicular to velocity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The magnetic force on the charge is always perpendicular to its velocity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A force perpendicular to velocity changes direction but not speed — no work is done.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Constant speed plus always-towards-centre force produces uniform circular motion.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Radius r = mv/(Bq) is fixed because m, v, B and q are constant.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Force is always perpendicular to velocity → constant-speed circle",
            commonErrors: ["Claiming the field does work on the particle."],
          },
        },
        {
          id: "edialphys-u4-magnetic-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A straight wire of length 0.50 m carrying a current of 2.5 A is placed perpendicular to a uniform magnetic field of flux density 0.30 T.",
          parts: [
            {
              label: "a",
              prompt:
                "Describe the magnetic field pattern around a bar magnet and state the direction of field lines outside it.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Calculate the force on the wire and state how its direction is found.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Explain why a current-carrying solenoid behaves like a bar magnet.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Magnetic fields",
                statement: "F = BIL; solenoid field is uniform inside.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Field lines emerge from the north pole and enter the south pole outside the magnet.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "a",
                reasoning:
                  "They form closed loops, continuing inside from south to north.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning:
                  "Field direction is the direction of force on a north pole; lines are closer where field is stronger.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "F = BIL = 0.30 × 2.5 × 0.50.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "F = 0.375 N ≈ 0.38 N.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Direction found with Fleming's left-hand rule.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Force is perpendicular to both current and field.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Each loop of the solenoid produces a circular field like a ring of current.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Inside a long solenoid the fields add to give a uniform field along the axis.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Outside the field is weak and the ends act as north and south poles.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "F ≈ 0.38 N via Fleming's left-hand rule; solenoid has uniform internal field like a bar magnet",
            commonErrors: [
              "Describing field lines that start and end outside the magnet.",
            ],
          },
        },
      ],
    },
    {
      id: "edialphys-u4-particles",
      title: "The standard model of particle physics",
      skill:
        "Classify fundamental particles, describe decays and apply conservation laws.",
      lesson: {
        sections: [
          {
            heading: "Matter particles",
            body: "Quarks are fundamental constituents of hadrons: up (charge +2/3 e), down (−1/3 e), strange, charm, bottom and top. Protons are uud and neutrons udd. Leptons are the electron, muon, tau and their neutrinos — they do not feel the strong force. Hadrons are particles made of quarks: baryons (three quarks, e.g. proton, neutron) and mesons (quark–antiquark pairs, e.g. pions).",
          },
          {
            heading: "Force carriers and interactions",
            body: "Each fundamental force has carrier particles: photon for electromagnetism, W and Z bosons for the weak force, gluons for the strong force. The graviton is hypothesised for gravity but not yet detected. The strong force binds quarks into hadrons and holds nuclei together; the weak force is responsible for radioactive beta decay.",
          },
          {
            heading: "Antiparticles, decay and conservation",
            body: "Every particle has an antiparticle with opposite charge and quantum numbers but the same mass. Particle–antiparticle pairs can be created from energy (E = mc²) and annihilate into photons. In decays, charge, baryon number and lepton number are conserved. Beta-minus decay converts a down quark to an up quark, emitting an electron and an electron antineutrino: n → p + e⁻ + ν̄ₑ.",
          },
        ],
        keyFormulas: [
          { name: "Rest energy", statement: "E = mc²" },
          { name: "Beta-minus decay", statement: "n → p + e⁻ + ν̄ₑ" },
        ],
        workedExample: {
          problem: "Show that a proton (uud) has charge +1e.",
          solution: "Charge = 2(+2/3 e) + (−1/3 e) = 4/3 e − 1/3 e = +1 e.",
        },
      },
      questions: [
        {
          id: "edialphys-u4-particles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a lepton?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Proton" },
              { id: "b", text: "Pion" },
              { id: "c", text: "Muon" },
              { id: "d", text: "Neutron" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lepton",
                statement: "Electron, muon, tau and neutrinos.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The muon is a lepton; proton and neutron are baryons, pion is a meson.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Muon",
            commonErrors: ["Confusing hadrons with leptons."],
          },
        },
        {
          id: "edialphys-u4-particles-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "State the quark composition of a proton and use it to show that its charge is +1e.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quarks",
                statement: "u = +2/3 e, d = −1/3 e.",
              },
            ],
            steps: [
              {
                reasoning: "Proton = uud (two up, one down quark).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Charge = 2(+2/3) + (−1/3) = +4/3 − 1/3 e.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Charge = +1e.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "uud; charge = +1e",
            commonErrors: ["Writing uuu for the proton."],
          },
        },
        {
          id: "edialphys-u4-particles-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe beta-minus decay at the quark level and state which conservation laws allow it to occur.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Conservation laws",
                statement:
                  "Charge, baryon number and lepton number are conserved in decays.",
              },
            ],
            steps: [
              {
                reasoning: "A down quark changes into an up quark: d → u.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A W⁻ boson is emitted and decays into an electron and an electron antineutrino.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Overall: neutron → proton + electron + antineutrino.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Charge (+0 → +1 −1 +0), baryon number (1 → 1) and lepton number (0 → 1 − 1 = 0) are all conserved.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "d → u + W⁻ → p + e⁻ + ν̄ₑ; charge, baryon and lepton numbers conserved",
            commonErrors: [
              "Omitting the antineutrino or calling it a neutrino.",
            ],
          },
        },
        {
          id: "edialphys-u4-particles-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "An electron–positron pair is produced when a photon interacts near a nucleus.",
          parts: [
            {
              label: "a",
              prompt:
                "Name the force-carrier particle for each of the electromagnetic, weak and strong forces.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain why the photon must have at least 1.02 MeV of energy for pair production.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Describe what happens when an electron and positron later meet (annihilation).",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Standard model",
                statement: "Photon (EM), W/Z bosons (weak), gluons (strong).",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Electromagnetic force: photon.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "a",
                reasoning: "Weak force: W⁺, W⁻ and Z bosons.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Strong force: gluons.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Pair production creates an electron and a positron, each of rest energy 0.511 MeV.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Total rest energy needed = 2 × 0.511 = 1.022 MeV ≈ 1.02 MeV.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "By E = mc² this energy must come from the photon's energy E = hf.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Any extra energy appears as kinetic energy of the pair.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The electron and positron are antiparticles of each other.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "They annihilate, their mass–energy converting into photons (usually two gamma photons).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Charge, energy and momentum are conserved in the process.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Photon/W/Z/gluon; threshold 1.02 MeV = 2 × 0.511 MeV rest energies; annihilation produces gamma photons",
            commonErrors: ["Using 0.511 MeV as the pair-production threshold."],
          },
        },
      ],
    },
  ],
};
