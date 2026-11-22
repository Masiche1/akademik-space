import type { Lesson } from "../../../types.ts";

export const lesson613: Lesson = {
  id: "cial-p-u6-lesson-6-3",
  code: "6-3",
  title: "Particle physics",
  goal: "I CAN describe fundamental particles, forces and particle detectors.",
  standards: ["9702 14: particle physics"],
  vocabulary: [
    { term: "Lepton", definition: "Light particle — electron, muon, tau, neutrinos." },
    { term: "Hadron", definition: "Particle made of quarks — protons, neutrons, mesons." },
    { term: "Quark", definition: "Fundamental constituent of hadrons — up, down, strange, charm, top, bottom." },
    { term: "Baryon", definition: "Hadron made of three quarks — proton (uud), neutron (udd)." },
    { term: "Meson", definition: "Hadron made of quark–antiquark pair." },
    { term: "Antiparticle", definition: "Particle with same mass, opposite charge." },
  ],
  concepts: [
    {
      id: "cial-p-u6-particles",
      title: "Fundamental particles",
      skill: "Classify particles and describe quark structure.",
      lesson: {
        sections: [
          {
            heading: "Leptons and hadrons",
            body: "Leptons: electron, muon, tau + neutrinos — fundamental, no quark structure. Hadrons: composite of quarks — baryons (3 quarks) and mesons (quark–antiquark). Protons/neutrons are baryons.",
          },
          {
            heading: "Quarks",
            body: "Six quark flavours: up (u, +2/3e), down (d, −1/3e), strange, charm, top, bottom. Proton = uud (+1 charge); neutron = udd (0). Mesons = quark + antiquark. Quarks confined — never observed alone.",
          },
          {
            heading: "Antiparticles",
            body: "Every particle has antiparticle: same mass, opposite charge. Electron ↔ positron; proton ↔ antiproton; quark ↔ antiquark. Annihilation: particle + antiparticle → energy (photons).",
          },
        ],
        keyFormulas: [
          { name: "Proton", statement: "$uud$ — charge +1" },
          { name: "Neutron", statement: "$udd$ — charge 0" },
          { name: "Meson", statement: "Quark + antiquark" },
        ],
        workedExample: {
          problem: "What is the quark composition of a proton?",
          solution: "Proton = uud — two up quarks (+2/3 each) + one down (−1/3) = net +1.",
        },
      },
      questions: [
        {
          id: "cial-p-u6-pt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a lepton?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nuclear particle" },
              { id: "b", text: "Particle made of quarks" },
              { id: "c", text: "Fundamental particle — electron, muon, tau, neutrinos" },
              { id: "d", text: "Force carrier" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Lepton", statement: "Fundamental — no quark structure." }],
            steps: [{ reasoning: "Leptons = electron, muon, tau, neutrinos.", marks: 1, markCode: "A" }],
            finalAnswer: "Fundamental particle",
          },
        },
        {
          id: "cial-p-u6-pt-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the quark composition of a proton?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Proton", statement: "uud — two up + one down quark." }],
            steps: [
              { reasoning: "Proton = uud.", marks: 1, markCode: "M" },
              { reasoning: "Charge: 2(+2/3) + (−1/3) = +1.", marks: 1, markCode: "M" },
              { reasoning: "Three quarks = baryon.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "uud",
          },
        },
        {
          id: "cial-p-u6-pt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What happens when a particle meets its antiparticle?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Annihilation", statement: "Particle + antiparticle → energy (photons)." }],
            steps: [
              { reasoning: "Matter and antimatter annihilate.", marks: 1, markCode: "M" },
              { reasoning: "Mass converted to energy ($E = mc^2$).", marks: 1, markCode: "M" },
              { reasoning: "Produces gamma photons/pions.", marks: 1, markCode: "M" },
              { reasoning: "Equal masses → equal energies.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Annihilation → energy",
          },
        },
        {
          id: "cial-p-u6-pt-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Particle physics.",
          parts: [
            { label: "a", prompt: "Distinguish leptons from hadrons.", marks: 3 },
            { label: "b", prompt: "What is a baryon? Give example.", marks: 2 },
            { label: "c", prompt: "What is a meson?", marks: 2 },
            { label: "d", prompt: "What is annihilation?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Particles", statement: "Leptons fundamental; hadrons=quark composites." }],
            steps: [
              { part: "a", reasoning: "Leptons: fundamental (electron, neutrino).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Hadrons: composite of quarks.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Leptons don't feel strong force; hadrons do.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Three quarks — proton (uud), neutron (udd).", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Quark + antiquark pair.", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Particle + antiparticle → energy.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) leptons vs hadrons (b) 3 quarks (c) q+q̄ (d) annihilation",
          },
        },
        {
          id: "cial-p-u6-pt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The quark composition of a neutron is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$uuu$" },
              { id: "b", text: "$uud$" },
              { id: "c", text: "$udd$" },
              { id: "d", text: "$u\\bar{d}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Neutron", statement: "Neutron = udd — one up + two down quarks; charge 0." }],
            steps: [{ reasoning: "udd gives charge $2/3 - 1/3 - 1/3 = 0$.", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** $udd$",
          },
        },
        {
          id: "cial-p-u6-pt-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "A positive pion consists of an up quark and an anti-down quark ($u\\bar{d}$). Given $u = +\\frac{2}{3}e$ and $d = -\\frac{1}{3}e$, calculate the pion's charge in units of $e$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1, tolerance: 0.01, unit: "e" }],
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Quark charges", statement: "$u = +\\frac23 e$, $d = -\\frac13 e$; antiquark has opposite charge." }],
            steps: [
              { reasoning: "Anti-down quark charge $= +\\frac13 e$.", marks: 1, markCode: "M" },
              { reasoning: "Total $= \\frac23 + \\frac13 = +1e$.", marks: 1, markCode: "M" },
              { reasoning: "Pion charge $= +e$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$+1e$",
          },
        },
        {
          id: "cial-p-u6-pt-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A meson is a hadron composed of",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a quark–antiquark pair" },
              { id: "b", text: "two leptons" },
              { id: "c", text: "three quarks" },
              { id: "d", text: "a single quark" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Meson", statement: "Meson = quark + antiquark (e.g. pion)." }],
            steps: [{ reasoning: "Mesons are quark–antiquark pairs.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** quark–antiquark pair",
          },
        },
        {
          id: "cial-p-u6-pt-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "A hypothetical baryon consists of one up, one down and one strange quark ($uds$). Given charges $u = +\\frac{2}{3}e$, $d = -\\frac{1}{3}e$, $s = -\\frac{1}{3}e$, calculate its total charge in units of $e$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0, tolerance: 0.01, unit: "e" }],
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Quark charges", statement: "$u=+\\frac23e$, $d=s=-\\frac13e$." }],
            steps: [
              { reasoning: "Charge $= \\frac23 - \\frac13 - \\frac13$.", marks: 1, markCode: "M" },
              { reasoning: "$= 0e$.", marks: 1, markCode: "M" },
              { reasoning: "Neutral baryon (e.g. lambda).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0e$",
          },
        },
        {
          id: "cial-p-u6-pt-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why quarks are never observed as isolated particles.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Confinement", statement: "The strong force between quarks increases with separation — quarks are confined within hadrons." }],
            steps: [
              { reasoning: "Quarks carry colour charge and are bound by the strong (colour) force.", marks: 1, markCode: "M" },
              { reasoning: "Unlike gravity/electricity, the strong force does not weaken with distance — it grows.", marks: 1, markCode: "M" },
              { reasoning: "Attempting to separate quarks requires so much energy that new quark–antiquark pairs form instead (hadronisation).", marks: 1, markCode: "M" },
              { reasoning: "Hence only colour-neutral hadrons (baryons, mesons) are observed.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Colour confinement — strong force grows with separation",
          },
        },
        {
          id: "cial-p-u6-pt-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is a lepton?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "proton" },
              { id: "b", text: "neutron" },
              { id: "c", text: "pion" },
              { id: "d", text: "muon" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Lepton", statement: "Leptons: electron, muon, tau, neutrinos — fundamental particles." }],
            steps: [{ reasoning: "Muon is a lepton; proton/neutron are baryons, pion is a meson.", marks: 1, markCode: "A" }],
            finalAnswer: "**(d)** muon",
          },
        },
        {
          id: "cial-p-u6-pt-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Calculate the charge of an anti-up quark ($\\bar{u}$) in units of the elementary charge $e$. ($u = +\\frac{2}{3}e$)",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: -0.667, tolerance: 0.01, unit: "e" }],
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Antiquark", statement: "Antiparticle has same mass, opposite charge." }],
            steps: [
              { reasoning: "Anti-up quark charge $= -\\frac{2}{3}e$.", marks: 1, markCode: "M" },
              { reasoning: "$= -0.667e$.", marks: 1, markCode: "M" },
              { reasoning: "Opposite sign to the up quark.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-\\frac{2}{3}e$",
          },
        },
        {
          id: "cial-p-u6-pt-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A positron is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a type of meson" },
              { id: "b", text: "the antiparticle of the electron, with charge $+e$" },
              { id: "c", text: "a heavier form of electron" },
              { id: "d", text: "the antiparticle of the proton" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Positron", statement: "Positron $= e^+$ — antiparticle of electron; same mass, charge $+e$." }],
            steps: [{ reasoning: "Positron is the electron's antiparticle.", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** antiparticle of electron, charge $+e$",
          },
        },
        {
          id: "cial-p-u6-pt-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "An electron and a positron annihilate at rest, producing two gamma photons of equal energy. The rest energy of an electron is $0.511\\ MeV$. Calculate the energy of each photon.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.511, tolerance: 0.005, unit: "MeV" }],
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Annihilation", statement: "Total rest energy $2 \\times 0.511 = 1.022\\ MeV$ shared equally by two photons." }],
            steps: [
              { reasoning: "Total energy $= 2 \\times 0.511 = 1.022\\ MeV$.", marks: 1, markCode: "M" },
              { reasoning: "Each photon gets half: $1.022/2$.", marks: 1, markCode: "M" },
              { reasoning: "$E_\\gamma = 0.511\\ MeV$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E_\\gamma = 0.511\\ MeV$",
          },
        },
        {
          id: "cial-p-u6-pt-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Classify each of the following particles as a lepton or a hadron: electron, proton, neutrino, pion.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Lepton vs hadron", statement: "Leptons are fundamental; hadrons are quark composites." }],
            steps: [
              { reasoning: "Electron: lepton (fundamental).", marks: 1, markCode: "M" },
              { reasoning: "Proton: hadron (baryon, uud).", marks: 1, markCode: "M" },
              { reasoning: "Neutrino: lepton.", marks: 1, markCode: "M" },
              { reasoning: "Pion: hadron (meson, quark–antiquark).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Leptons: electron, neutrino; hadrons: proton, pion",
          },
        },
        {
          id: "cial-p-u6-pt-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "The force responsible for binding quarks together inside hadrons is",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the strong nuclear (colour) force" },
              { id: "b", text: "gravity" },
              { id: "c", text: "the electromagnetic force" },
              { id: "d", text: "the weak nuclear force" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Strong force", statement: "Colour force binds quarks; strongest of the four fundamental forces." }],
            steps: [{ reasoning: "Strong (colour) force binds quarks.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** strong nuclear (colour) force",
          },
        },
        {
          id: "cial-p-u6-pt-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A baryon is made of three up quarks ($uuu$). Given $u = +\\frac{2}{3}e$, calculate its charge in units of $e$ and identify a real particle with this composition.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2, tolerance: 0.01, unit: "e" }],
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Quark charges", statement: "$u = +\\frac23 e$; three ups → charge $+2e$." }],
            steps: [
              { reasoning: "Charge $= 3 \\times \\frac23 = +2e$.", marks: 1, markCode: "M" },
              { reasoning: "$= +2e$.", marks: 1, markCode: "M" },
              { reasoning: "This is the $\\Delta^{++}$ (delta-plus-plus) baryon.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$+2e$ — the $\\Delta^{++}$ baryon",
          },
        },
      ],
    },
    {
      id: "cial-p-u6-detectors",
      title: "Particle detectors",
      skill: "Describe cloud chamber, bubble chamber and modern detectors.",
      lesson: {
        sections: [
          {
            heading: "Cloud chamber",
            body: "Supersaturated alcohol vapour; charged particles ionise → droplets condense → visible tracks. Shows curvature in magnetic field → charge/momentum. Historical: Anderson discovered positron (1932).",
          },
          {
            heading: "Bubble chamber",
            body: "Superheated liquid hydrogen; charged particles leave trails of bubbles. Bubble chamber at CERN discovered many particles. Tracks show particle paths and interactions.",
          },
          {
            heading: "Modern detectors",
            body: "Wire chambers, silicon trackers, calorimeters (measure energy), muon detectors. Large Hadron Collider: 27 km ring, protons at 99.99% c. Detects Higgs boson (2012).",
          },
        ],
        keyFormulas: [
          { name: "Track curvature", statement: "$r = mv/qB$ — charge/momentum" },
          { name: "LHC", statement: "27 km ring, protons ~c" },
        ],
        workedExample: {
          problem: "Why do particle tracks curve in a magnetic field?",
          solution: "Charged particles experience force $F = qvB$ perpendicular to motion → circular path; radius reveals momentum.",
        },
      },
      questions: [
        {
          id: "cial-p-u6-det-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a cloud chamber detect?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sound waves" },
              { id: "b", text: "Charged particle tracks via ionisation" },
              { id: "c", text: "Neutral particles only" },
              { id: "d", text: "Light intensity" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Cloud chamber", statement: "Ionisation → droplet tracks." }],
            steps: [{ reasoning: "Charged particles leave visible tracks.", marks: 1, markCode: "A" }],
            finalAnswer: "Charged particle tracks",
          },
        },
        {
          id: "cial-p-u6-det-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do particle tracks curve in a magnetic field?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Magnetic force", statement: "$F = qvB$ → circular motion." }],
            steps: [
              { reasoning: "Charged particle moving in B field feels force.", marks: 1, markCode: "M" },
              { reasoning: "Force perpendicular to velocity → circular path.", marks: 1, markCode: "M" },
              { reasoning: "Radius $r = mv/qB$ reveals momentum/charge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$F=qvB$ → circular track",
          },
        },
        {
          id: "cial-p-u6-det-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What was the significance of the Large Hadron Collider?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "LHC", statement: "27 km ring, protons ~c, discovered Higgs." }],
            steps: [
              { reasoning: "Accelerates protons to ~99.99% light speed.", marks: 1, markCode: "M" },
              { reasoning: "Collisions recreate early universe conditions.", marks: 1, markCode: "M" },
              { reasoning: "Detected Higgs boson (2012).", marks: 1, markCode: "M" },
              { reasoning: "Confirms Standard Model.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Proton collider — found Higgs",
          },
        },
        {
          id: "cial-p-u6-det-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Particle detectors.",
          parts: [
            { label: "a", prompt: "How does a cloud chamber work?", marks: 3 },
            { label: "b", prompt: "How does a bubble chamber differ?", marks: 2 },
            { label: "c", prompt: "Why do tracks curve in B field?", marks: 2 },
            { label: "d", prompt: "What is the LHC?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Detectors", statement: "Ionisation → tracks; B field → curvature." }],
            steps: [
              { part: "a", reasoning: "Supersaturated vapour; particles ionise → droplets.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Visible tracks show path.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Used historically — Anderson positron.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Superheated liquid → bubble trails.", marks: 2, markCode: "A" },
              { part: "c", reasoning: "$F = qvB$ perpendicular → circle.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Radius reveals momentum.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "27 km proton collider at CERN.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Found Higgs boson 2012.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) vapour tracks (b) bubbles (c) qvB (d) LHC=Higgs",
          },
        },
        {
          id: "cial-p-u6-det-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A bubble chamber detects charged particles using",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "silicon wafers" },
              { id: "b", text: "photographic film only" },
              { id: "c", text: "supersaturated alcohol vapour" },
              { id: "d", text: "superheated liquid hydrogen" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Bubble chamber", statement: "Charged particles ionise superheated liquid → trails of bubbles." }],
            steps: [{ reasoning: "Bubble chamber uses superheated liquid hydrogen.", marks: 1, markCode: "A" }],
            finalAnswer: "**(d)** superheated liquid hydrogen",
          },
        },
        {
          id: "cial-p-u6-det-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "A proton moving at $1.0 \\times 10^{7}\\ m\\,s^{-1}$ enters a region of uniform magnetic field $0.50\\ T$ perpendicular to its motion. Calculate the radius of its path. ($m_p = 1.67 \\times 10^{-27}\\ kg$, $e = 1.60 \\times 10^{-19}\\ C$)",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.209, tolerance: 0.005, unit: "m" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Circular motion", statement: "$qvB = mv^2/r$ → $r = mv/qB$." }],
            steps: [
              { reasoning: "$r = (1.67\\times10^{-27} \\times 1.0\\times10^{7})/(1.60\\times10^{-19} \\times 0.50)$.", marks: 1, markCode: "M" },
              { reasoning: "$r = 1.67\\times10^{-20}/8.0\\times10^{-20}$.", marks: 1, markCode: "M" },
              { reasoning: "$r = 0.21\\ m$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$r = 0.21\\ m$",
          },
        },
        {
          id: "cial-p-u6-det-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Particle tracks curve in a magnetic field because",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the particles are radioactive" },
              { id: "b", text: "moving charges experience a force $F = qvB$ perpendicular to their velocity" },
              { id: "c", text: "the field slows the particles down" },
              { id: "d", text: "the field attracts neutral particles" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Magnetic force", statement: "$F = qvB$ perpendicular to $v$ → circular motion." }],
            steps: [{ reasoning: "Perpendicular force → centripetal acceleration → curved track.", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** $F = qvB$ perpendicular to velocity",
          },
        },
        {
          id: "cial-p-u6-det-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "A proton follows a circular path of radius $0.10\\ m$ in a $0.20\\ T$ magnetic field. Calculate its momentum. ($e = 1.60 \\times 10^{-19}\\ C$)",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3.2e-21, tolerance: 0.05e-21, unit: "kg m s^{-1}" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Momentum", statement: "$p = qBr$ (from $qvB = mv^2/r$)." }],
            steps: [
              { reasoning: "$p = qBr = 1.60\\times10^{-19} \\times 0.20 \\times 0.10$.", marks: 1, markCode: "M" },
              { reasoning: "$p = 3.2\\times10^{-21}\\ kg\\,m\\,s^{-1}$.", marks: 1, markCode: "M" },
              { reasoning: "$p \\approx 3.2 \\times 10^{-21}\\ kg\\,m\\,s^{-1}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$p = 3.2 \\times 10^{-21}\\ kg\\,m\\,s^{-1}$",
          },
        },
        {
          id: "cial-p-u6-det-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a cloud chamber allows the charge and momentum of a particle to be determined from its track.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cloud chamber", statement: "Ionisation → droplets; track curvature in B field → charge/momentum." }],
            steps: [
              { reasoning: "Charged particle ionises supersaturated alcohol vapour → droplets condense on ions → visible track.", marks: 1, markCode: "M" },
              { reasoning: "Track shows the path; density/thickness relates to ionisation.", marks: 1, markCode: "M" },
              { reasoning: "In a magnetic field the track curves: $r = mv/qB$.", marks: 1, markCode: "M" },
              { reasoning: "Direction of curvature reveals sign of charge; radius (with known B) gives momentum/charge ratio.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Ionisation track + curvature in B field → charge & momentum",
          },
        },
        {
          id: "cial-p-u6-det-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "The Large Hadron Collider accelerates protons to energies of approximately",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1\\ keV$" },
              { id: "b", text: "$13\\ TeV$" },
              { id: "c", text: "$17.6\\ MeV$" },
              { id: "d", text: "$230\\ V$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "context", name: "LHC", statement: "LHC collides proton beams at up to ~13 TeV centre-of-mass energy." }],
            steps: [{ reasoning: "LHC proton energy ~6.5 TeV each → ~13 TeV collisions.", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** $13\\ TeV$",
          },
        },
        {
          id: "cial-p-u6-det-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Protons in the LHC travel at about $0.9999$ of the speed of light. Calculate their speed in $m\\,s^{-1}$. ($c = 3.0 \\times 10^{8}\\ m\\,s^{-1}$)",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3e8, tolerance: 5e5, unit: "m s^{-1}" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Relativity", statement: "$v = 0.9999c$ is extremely close to $c$." }],
            steps: [
              { reasoning: "$v = 0.9999 \\times 3.0\\times10^{8}$.", marks: 1, markCode: "M" },
              { reasoning: "$v = 2.9997\\times10^{8}\\ m\\,s^{-1}$.", marks: 1, markCode: "M" },
              { reasoning: "$v \\approx 3.0 \\times 10^{8}\\ m\\,s^{-1}$ — essentially $c$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$v \\approx 3.0 \\times 10^{8}\\ m\\,s^{-1}$",
          },
        },
        {
          id: "cial-p-u6-det-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "In modern particle detectors, the component that measures the energy of particles is the",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "muon chamber" },
              { id: "b", text: "beam pipe" },
              { id: "c", text: "calorimeter" },
              { id: "d", text: "silicon tracker" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Calorimeter", statement: "Calorimeters absorb particles and measure deposited energy." }],
            steps: [{ reasoning: "Calorimeter measures energy.", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** calorimeter",
          },
        },
        {
          id: "cial-p-u6-det-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A particle track has radius $0.050\\ m$ in a $0.40\\ T$ magnetic field. Calculate the quantity $p/q$ (momentum per unit charge) of the particle.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.02, tolerance: 0.001, unit: "T m" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Track curvature", statement: "$r = p/qB$ → $p/q = Br$." }],
            steps: [
              { reasoning: "$p/q = Br = 0.40 \\times 0.050$.", marks: 1, markCode: "M" },
              { reasoning: "$p/q = 0.020\\ T\\,m$ (kg m s⁻¹ C⁻¹).", marks: 1, markCode: "M" },
              { reasoning: "$p/q = 0.020\\ kg\\,m\\,s^{-1}\\,C^{-1}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$p/q = 0.020\\ T\\,m$",
          },
        },
        {
          id: "cial-p-u6-det-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how a modern collider detector such as those at the LHC combines tracking, calorimetry and muon detection to identify particles produced in collisions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Collider detectors", statement: "Layers measure position, energy and penetration to reconstruct events." }],
            steps: [
              { reasoning: "Silicon trackers record precise positions of charged-particle tracks close to the collision point.", marks: 1, markCode: "M" },
              { reasoning: "Calorimeters absorb electrons/photons/hadrons and measure their energy.", marks: 1, markCode: "M" },
              { reasoning: "Muons penetrate further → dedicated muon chambers outside the calorimeters detect them.", marks: 1, markCode: "M" },
              { reasoning: "Combining track curvature (momentum), energy deposits and penetration identifies each particle.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Trackers + calorimeters + muon chambers reconstruct each particle",
          },
        },
        {
          id: "cial-p-u6-det-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Neutrinos are difficult to detect directly because they",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "are positively charged" },
              { id: "b", text: "travel faster than light" },
              { id: "c", text: "are made of quarks" },
              { id: "d", text: "interact only via the weak force and have almost no mass" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "property", name: "Neutrino", statement: "Neutrinos interact extremely weakly → huge detectors needed." }],
            steps: [{ reasoning: "Weak interaction only → rarely interact with matter.", marks: 1, markCode: "A" }],
            finalAnswer: "**(d)** interact only via the weak force",
          },
        },
        {
          id: "cial-p-u6-det-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In a bubble chamber, a particle track curves with radius $0.20\\ m$ in a magnetic field of $0.10\\ T$. Calculate the value of $p/q$ for this particle.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.02, tolerance: 0.001, unit: "T m" }],
          },
          markscheme: {
            principles: [{ kind: "law", name: "Track curvature", statement: "$p/q = Br$." }],
            steps: [
              { reasoning: "$p/q = Br = 0.10 \\times 0.20$.", marks: 1, markCode: "M" },
              { reasoning: "$p/q = 0.020\\ T\\,m$.", marks: 1, markCode: "M" },
              { reasoning: "Smaller radius or larger B gives smaller $p/q$; sign of curvature gives charge sign.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$p/q = 0.020\\ T\\,m$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-p-u6-particles-detectors-notes",
      title: "Particle physics and detectors — revision notes",
      summary: "Fundamental particles, quarks, antiparticles, detectors.",
      sections: [
        {
          heading: "Particles",
          body: "Leptons: fundamental (electron, muon, tau, neutrinos). Hadrons: quark composites — baryons (3q: proton uud, neutron udd), mesons (q+q̄). Antiparticles: same mass, opposite charge → annihilation.",
        },
        {
          heading: "Detectors",
          body: "Cloud chamber: ionisation → droplet tracks. Bubble chamber: bubble trails. B field curves tracks ($r=mv/qB$). LHC: 27 km, protons ~c, found Higgs (2012).",
        },
        {
          heading: "Exam checklist",
          body: "For quark questions balance charge: u=+2/3, d=−1/3. Track curvature reveals charge sign and momentum.",
        },
      ],
    },
  ],
};
