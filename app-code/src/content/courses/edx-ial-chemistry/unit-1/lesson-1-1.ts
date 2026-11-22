import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "edialchem-u1-lesson-1-1",
  code: "1-1",
  title: "Atomic Structure and the Periodic Table",
  goal: "I CAN describe atomic structure, electron configuration, isotopes and periodic trends.",
  standards: ["IC1 Principles of chemistry", "Atomic structure"],
  vocabulary: [
    { term: "Isotope", definition: "Atoms of the same element with the same proton number but different neutron numbers." },
    { term: "Relative atomic mass (Ar)", definition: "Weighted mean mass of an element's isotopes relative to 1/12 of C-12." },
    { term: "Period / group", definition: "Row / column of the periodic table indicating electron shells / valence electrons." },
    { term: "Ionisation energy", definition: "Energy needed to remove one electron from a gaseous atom." },
  ],
  concepts: [
    {
      id: "edialchem-u1-atomic",
      title: "Atomic structure and electron configuration",
      skill: "Describe subatomic particles, isotopes and electron configurations.",
      lesson: {
        sections: [
          {
            heading: "Subatomic particles",
            body: "Protons (p⁺, charge +1, mass ~1) and neutrons (n⁰, neutral, mass ~1) in nucleus; electrons (e⁻, charge −1, negligible mass) in shells. Atomic number Z = protons = electrons in neutral atom. Mass number A = protons + neutrons.",
          },
          {
            heading: "Isotopes and Ar",
            body: "Isotopes have same Z but different N. E.g. C-12 (6p,6n), C-14 (6p,8n). Ar is the weighted average: Ar = Σ(isotope mass × abundance)/100. Isotopes have identical chemical properties (same electrons) but different physical properties (e.g. density).",
          },
          {
            heading: "Electron configuration",
            body: "Electrons fill shells 2,8,8… (first 20 elements). s, p, d orbitals per shell. E.g. Na (Z=11): 2,8,1 or 1s²2s²2p⁶3s¹. Valence electrons = outer shell electrons determine group and reactivity.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "Ar = Σ(mass × %abundance)/100" },
        ],
        workedExample: {
          problem: "Calculate Ar of chlorine given 75% Cl-35 and 25% Cl-37.",
          solution: "Ar = (35×75 + 37×25)/100 = (2625+925)/100 = 35.5",
        },
      },
      questions: [
        {
          id: "edialchem-atom-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the mass number of an atom with 6 protons, 6 neutrons and 6 electrons?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "24" },
              { id: "b", text: "12" },
              { id: "c", text: "18" },
              { id: "d", text: "6" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Mass number", statement: "A = protons + neutrons." }],
            steps: [{ reasoning: "6+6 = 12 (carbon-12).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 12",
          },
        },
        {
          id: "edialchem-atom-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Define isotope and explain why isotopes have identical chemical properties.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Isotope", statement: "Same Z, different N." }],
            steps: [
              { reasoning: "Isotopes: same proton number, different neutron numbers.", marks: 1, markCode: "A" },
              { reasoning: "Chemistry depends on electron arrangement; same Z → same electrons → same reactions.", marks: 1, markCode: "M" },
              { reasoning: "Different N → different mass → different physical properties.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Same electrons → same chemistry; different mass → different physics",
            commonErrors: ["Saying isotopes are different elements."],
          },
        },
        {
          id: "edialchem-atom-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate the relative atomic mass of an element with isotopes X-20 (90% abundance) and X-22 (10% abundance).",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 20.2, tolerance: 0.01 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Ar", statement: "Weighted mean of isotope masses." }],
            steps: [
              { reasoning: "Ar = (20×90 + 22×10)/100 = (1800+220)/100.", marks: 1, markCode: "M" },
              { reasoning: "= 2020/100 = 20.2.", marks: 1, markCode: "M" },
              { reasoning: "State method.", marks: 1, markCode: "A" },
              { reasoning: "Final value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20.2",
            commonErrors: ["Simple mean (21) instead of weighted."],
          },
        },
        {
          id: "edialchem-atom-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe the electronic configuration of elements and explain its link to group number.",
          parts: [
            { label: "a", prompt: "Describe electron shell filling for first 20 elements.", marks: 3 },
            { label: "b", prompt: "Write the configuration of sodium and chlorine.", marks: 3 },
            { label: "c", prompt: "Explain the group link.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Electron config", statement: "2,8,8 filling; group = valence electrons." }],
            steps: [
              { part: "a", reasoning: "Electrons fill shells in order of increasing energy; max 2 in first, 8 in second/third (first 20).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Inner shells filled before outer.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Describe filling.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Na (Z=11): 2,8,1.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cl (Z=17): 2,8,7.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct notation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Group number = number of valence electrons (for groups 1,2,13-18).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Valence electrons determine bonding/reactivity.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Na group 1 (1 valence e⁻), Cl group 7 (7 valence e⁻).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Config 2,8,8; group = valence electrons",
            commonErrors: ["Counting all electrons for group number."],
          },
        },
      ],
    },
    {
      id: "edialchem-u1-trends",
      title: "Periodic trends",
      skill: "Explain trends in atomic radius, ionisation energy and electronegativity across and down groups.",
      lesson: {
        sections: [
          {
            heading: "Atomic radius",
            body: "Decreases across a period (increasing nuclear charge pulls electrons closer); increases down a group (extra electron shell).",
          },
          {
            heading: "Ionisation energy",
            body: "Energy to remove an electron from a gaseous atom. Increases across a period (higher charge, smaller atom); decreases down a group (more shells/shielding). Exceptions occur when removing electrons from stable configurations (e.g. Be vs B, N vs O due to pairing/subshell).",
          },
          {
            heading: "Electronegativity",
            body: "Attracting power of an atom for bonding electrons. Increases across periods, decreases down groups; highest in top-right (F). Explains bond polarity and ionic character.",
          },
        ],
        keyFormulas: [
          { name: "Key formula", statement: "IE₁ < IE₂ < IE₃ … (successive ionisation energies)" },
        ],
        workedExample: {
          problem: "Why does sodium have a lower first ionisation energy than chlorine?",
          solution: "Na has 3 electron shells (more shielding, electron further from nucleus); Cl has only 3 shells but higher nuclear charge and smaller radius → electron held more tightly → higher IE.",
        },
      },
      questions: [
        {
          id: "edialchem-trend-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Across a period, atomic radius generally:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increases" },
              { id: "b", text: "Stays constant" },
              { id: "c", text: "Decreases" },
              { id: "d", text: "Doubles" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Atomic radius", statement: "Decreases across period (↑Z), increases down group." }],
            steps: [{ reasoning: "Increased nuclear charge pulls electrons in.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Decreases",
          },
        },
        {
          id: "edialchem-trend-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why ionisation energy decreases down Group 1.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "IE trend", statement: "Shielding and distance reduce IE down a group." }],
            steps: [
              { reasoning: "Each successive element adds an electron shell.", marks: 1, markCode: "M" },
              { reasoning: "Valence electron is further from nucleus → weaker attraction.", marks: 1, markCode: "M" },
              { reasoning: "Inner shells shield outer electron from nuclear charge → lower IE.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "More shells + shielding → lower IE down group",
            commonErrors: ["Ignoring shielding."],
          },
        },
        {
          id: "edialchem-trend-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why oxygen has a lower first ionisation energy than nitrogen.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Subshell stability", statement: "Half-filled/full subshells are stable." }],
            steps: [
              { reasoning: "N has config 1s²2s²2p³ — half-filled 2p subshell (stable).", marks: 1, markCode: "M" },
              { reasoning: "O has 1s²2s²2p⁴ — the 4th p-electron pairs in an orbital → repulsion makes it easier to remove.", marks: 1, markCode: "M" },
              { reasoning: "Therefore O's first IE < N's despite trend.", marks: 1, markCode: "A" },
              { reasoning: "Exception to general trend.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "O has paired p-electron → easier to remove",
            commonErrors: ["Applying trend without exception."],
          },
        },
        {
          id: "edialchem-trend-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Explain the trends in electronegativity across a period and down a group.",
          parts: [
            { label: "a", prompt: "Define electronegativity.", marks: 2 },
            { label: "b", prompt: "Across a period.", marks: 4 },
            { label: "c", prompt: "Down a group.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Electronegativity", statement: "Attracting power for bonding electrons." }],
            steps: [
              { part: "a", reasoning: "Electronegativity: ability of an atom to attract bonding electrons in a covalent bond.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Measured on Pauling scale; F highest.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Across period: nuclear charge increases, radius decreases.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Same shells but more protons → stronger pull on bonding electrons.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Electronegativity increases left → right.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Example: Na < Cl < F.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Down group: extra shells, greater shielding.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Bonding electrons further from nucleus → weaker attraction.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Electronegativity decreases down groups.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Example: F > Cl > Br > I.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "↑ across period (Z↑), ↓ down group (shells↑)",
            commonErrors: ["Reversing trends."],
          },
        },
      ],
    },
  ],
};
