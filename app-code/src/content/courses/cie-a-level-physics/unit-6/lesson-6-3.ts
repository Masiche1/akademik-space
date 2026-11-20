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
              { id: "a", text: "Fundamental particle — electron, muon, tau, neutrinos" },
              { id: "b", text: "Particle made of quarks" },
              { id: "c", text: "Nuclear particle" },
              { id: "d", text: "Force carrier" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "Charged particle tracks via ionisation" },
              { id: "b", text: "Neutral particles only" },
              { id: "c", text: "Sound waves" },
              { id: "d", text: "Light intensity" },
            ],
            correctChoiceId: "a",
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
