import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "cipuc-u1-lesson-1-1",
  code: "1-1",
  title: "Atomic Structure, Bonding and Periodicity",
  goal: "I CAN explain atomic structure, chemical bonding and periodic trends at Pre-U standard.",
  standards: [
    "Cambridge Pre-U Chemistry 9791",
    "Physical chemistry: structure",
  ],
  vocabulary: [
    {
      term: "Isotope",
      definition:
        "Atoms of the same element with different numbers of neutrons — same proton number, different nucleon number.",
    },
    {
      term: "First ionisation energy",
      definition:
        "Energy required to remove one mole of electrons from one mole of gaseous atoms.",
    },
    {
      term: "Electronegativity",
      definition:
        "Ability of an atom to attract bonding electrons — increases across a period, decreases down a group.",
    },
    {
      term: "Hydrogen bonding",
      definition:
        "Strong dipole-dipole attraction between H bonded to N/O/F and a lone pair on another N/O/F.",
    },
    {
      term: "Metallic bonding",
      definition:
        "Delocalised electrons in a lattice of positive ions — explains conductivity and malleability.",
    },
    {
      term: "Polar molecule",
      definition:
        "Molecule with an overall dipole — bond dipoles do not cancel (e.g. H₂O, NH₃).",
    },
  ],
  concepts: [
    {
      id: "cipuc-u1-s1-structure",
      title: "Atomic structure and bonding",
      skill: "Explain isotopes, bonding types, shapes and periodic trends.",
      lesson: {
        sections: [
          {
            heading: "Atomic structure and isotopes",
            body: "Atoms contain protons and neutrons in the nucleus and electrons in shells. **Isotopes** have the same proton number but different neutron numbers — e.g. ¹²C and ¹⁴C. Relative atomic mass is the weighted mean of isotopic masses. Electron configuration determines chemical behaviour: e.g. Na (2,8,1) loses one electron to form Na⁺ (2,8). Ions form by losing electrons (cations, positive) or gaining electrons (anions, negative) to achieve noble gas configuration.",
          },
          {
            heading: "Chemical bonding",
            body: "**Ionic bonding**: complete electron transfer from metal to non-metal — forms giant lattices with high melting points, conducts when molten/aqueous. **Covalent bonding**: shared electron pairs — simple molecules (low mp) or giant covalent structures like diamond/graphite (very high mp). **Coordinate (dative) bonding**: both electrons come from one atom — e.g. NH₄⁺. **Metallic bonding**: delocalised electrons. **Hydrogen bonding**: the strongest intermolecular force — explains water's high bp, ice floating, DNA structure. Molecular shape is predicted by VSEPR: 2 pairs linear, 3 trigonal planar, 4 tetrahedral, 5 trigonal bipyramidal, 6 octahedral; lone pairs compress bond angles.",
          },
          {
            heading: "Periodic trends",
            body: "Across a period: atomic radius decreases (more protons pull electrons closer), first ionisation energy generally increases (easier to lose electrons on the left, harder on the right), electronegativity increases, metallic character decreases. Down a group: radius increases (extra shells), ionisation energy decreases (outer electron further from nucleus, more shielding), electronegativity decreases. Exceptions: Be→B and N→O drops in ionisation energy due to sub-shell effects; O→F small increase due to electron-electron repulsion in p⁴→p⁵.",
          },
        ],
        keyFormulas: [
          {
            name: "Relative atomic mass",
            statement:
              "$A_r = \\frac{\\sum(\\text{isotope mass} \\times \\text{abundance})}{100}$",
          },
          {
            name: "Ionic radius",
            statement:
              "Cations smaller than parent atoms (lost shell); anions larger (same protons, more electrons)",
          },
        ],
        workedExample: {
          problem:
            "Chlorine has two isotopes: ³⁵Cl (75%) and ³⁷Cl (25%). Calculate its relative atomic mass.",
          solution:
            "$A_r = \\frac{35 \\times 75 + 37 \\times 25}{100} = \\frac{2625 + 925}{100} = 35.5$.",
        },
      },
      questions: [
        {
          id: "cipuc-u1-struct-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the electron configuration of a chloride ion, Cl⁻?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2,8" },
              { id: "b", text: "2,8,7" },
              { id: "c", text: "2,8,8" },
              { id: "d", text: "2,8,9" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Electron configuration",
                statement:
                  "Cl is 2,8,7; Cl⁻ gains one electron → 2,8,8 (noble gas config).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Chlorine (Z=17) is 2,8,7; the anion gains one electron to reach 2,8,8.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2,8,8",
          },
        },
        {
          id: "cipuc-u1-struct-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why the first ionisation energy of magnesium is higher than that of sodium.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ionisation energy trend",
                statement:
                  "Across a period, increasing nuclear charge makes electron removal harder.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mg has one more proton than Na, so greater nuclear charge.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Similar shielding and same outer shell → outer electron held more tightly → more energy needed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Higher nuclear charge across the period.",
          },
        },
        {
          id: "cipuc-u1-struct-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Predict the shape and bond angle of NH₃ and explain your reasoning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "VSEPR",
                statement:
                  "Electron pairs repel — lone pairs compress bond angles below ideal values.",
              },
            ],
            steps: [
              {
                reasoning:
                  "N has 5 valence electrons; 3 bond to H, leaving one lone pair → 4 electron domains.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "4 domains → trigonal bipyramidal electron geometry → trigonal pyramidal molecular shape.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Lone pair repels more strongly than bonding pairs → H–N–H angle ≈ 107°, less than 109.5°.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Trigonal pyramidal, ~107°.",
          },
        },
        {
          id: "cipuc-u1-struct-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare the melting points of NaCl, diamond and iodine, explaining the bonding in each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structure–property",
                statement:
                  "Giant structures have high mp; simple molecular substances have low mp.",
              },
            ],
            steps: [
              {
                reasoning:
                  "NaCl: ionic lattice — strong electrostatic forces throughout → high mp (~800°C).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Diamond: giant covalent network — every C bonded to 4 others → extremely high mp (~3550°C).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "I₂: simple molecular solid — only weak van der Waals between I₂ molecules → low mp (~114°C).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ranking: diamond > NaCl > I₂; giant structures beat molecular ones regardless of bond type.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Diamond > NaCl > I₂.",
          },
        },
        {
          id: "cipuc-u1-struct-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement correctly describes isotopes?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Atoms of the same element with the same number of protons but different numbers of neutrons",
              },
              {
                id: "b",
                text: "Atoms of the same element with different numbers of protons",
              },
              { id: "c", text: "Ions formed from the same neutral atom" },
              { id: "d", text: "Atoms with different numbers of electrons" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Isotope",
                statement:
                  "Same proton number, different neutron number — e.g. ¹²C and ¹⁴C.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Isotopes differ only in neutron number; proton number defines the element.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a",
          },
        },
        {
          id: "cipuc-u1-struct-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An element has two isotopes: ²⁴Mg (79%) and ²⁶Mg (21%). Calculate its relative atomic mass. (A_r values: 24.0 and 26.0)",
          response: {
            type: "numeric",
            parts: [{ label: "Relative atomic mass", answer: 24.42 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Relative atomic mass",
                statement:
                  "$A_r = \\frac{\\sum(\\text{isotope mass} \\times \\text{abundance})}{100}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$A_r = \\frac{24.0 \\times 79 + 26.0 \\times 21}{100} = \\frac{1896 + 546}{100} = 24.42$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weighted mean of the two isotopic masses gives 24.42.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "24.42",
          },
        },
        {
          id: "cipuc-u1-struct-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why the Na⁺ ion is smaller than the Na atom it came from.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ionic radius",
                statement:
                  "Losing an electron shell reduces radius; remaining electrons feel greater effective nuclear charge.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Na (2,8,1) loses its outer electron to form Na⁺ (2,8) — one whole shell removed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The 8 remaining electrons are pulled closer by the same nuclear charge → smaller radius.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Na⁺ loses the n=3 shell, so it is smaller.",
          },
        },
        {
          id: "cipuc-u1-struct-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Predict the shape and bond angle of BF₃, explaining your reasoning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "VSEPR",
                statement:
                  "Bonding and lone pairs arrange to minimise repulsion; 3 domains → trigonal planar.",
              },
            ],
            steps: [
              {
                reasoning:
                  "B has 3 valence electrons; each bonds to one F → 3 bonding pairs, no lone pairs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "3 electron domains → trigonal planar molecular shape.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "No lone pairs to compress the angle → F–B–F = 120° exactly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Trigonal planar, 120°.",
          },
        },
        {
          id: "cipuc-u1-struct-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following substances has hydrogen bonding between its molecules?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CH₄" },
              { id: "b", text: "CO₂" },
              { id: "c", text: "H₂O" },
              { id: "d", text: "CCl₄" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hydrogen bonding",
                statement:
                  "Requires H bonded to N, O or F plus a lone pair on another N/O/F.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Only H₂O has O–H bonds with lone pairs on oxygen → hydrogen bonding.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "c",
          },
        },
        {
          id: "cipuc-u1-struct-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the first ionisation energy decreases down Group 1 (Li → Cs).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ionisation energy trend",
                statement:
                  "Down a group, outer electrons are further from the nucleus and more shielded.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each successive element adds a whole electron shell → outer electron in higher energy level.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Greater distance from nucleus and more inner-shell shielding reduce attraction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Less energy needed to remove the outer electron → IE decreases down the group.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Shielding and distance make removal easier down the group.",
          },
        },
        {
          id: "cipuc-u1-struct-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why fluorine has the highest electronegativity of all elements, and why HF has a much higher boiling point than HCl despite F being more electronegative.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Electronegativity and intermolecular forces",
                statement:
                  "EN increases across a period; hydrogen bonding dominates bp comparisons.",
              },
            ],
            steps: [
              {
                reasoning:
                  "F is smallest and most tightly holds bonding electrons in period 2 → highest EN.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Across the period EN increases because nuclear charge rises faster than shielding.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "HF forms hydrogen bonds (H–F···F–H) — a much stronger intermolecular force than the van der Waals forces in HCl.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "More energy needed to separate HF molecules → higher bp (19.5 °C vs −85 °C).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Highest EN in period 2; HF hydrogen-bonds, HCl does not.",
          },
        },
        {
          id: "cipuc-u1-struct-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Use metallic bonding to explain why metals conduct electricity, are malleable and have high melting points.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Metallic bonding",
                statement:
                  "Positive ions in a sea of delocalised electrons — strong, non-directional attraction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Delocalised electrons are free to move through the lattice → carry charge → conductivity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ions can slide past each other without breaking the bonding → malleability/ductility.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strong electrostatic attraction between ions and electron sea throughout the giant structure → high mp.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Bonding is non-directional, so layers can deform and reform — unlike directional covalent networks.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Delocalised electrons explain all three properties.",
          },
        },
        {
          id: "cipuc-u1-struct-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "State the shape and bond angles of PCl₅.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "VSEPR",
                statement:
                  "5 bonding domains with no lone pairs → trigonal bipyramidal arrangement.",
              },
            ],
            steps: [
              {
                reasoning: "P has 5 valence electrons; 5 bond to Cl → 5 bonding pairs, 0 lone pairs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Shape is trigonal bipyramidal: 3 equatorial + 2 axial Cl atoms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Angles: 120° between equatorial pairs, 90° between axial and equatorial.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Trigonal bipyramidal; 120° and 90°.",
          },
        },
        {
          id: "cipuc-u1-struct-q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Identify the type of bonding in each of: (a) NaCl (b) Cl₂ (c) diamond.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bonding types",
                statement:
                  "Metal + non-metal → ionic; non-metals sharing pairs → covalent (simple or giant).",
              },
            ],
            steps: [
              {
                reasoning: "(a) NaCl: ionic — Na donates electron to Cl.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "(b) Cl₂: covalent (simple molecular); (c) diamond: covalent (giant network).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Ionic; covalent; covalent (giant).",
          },
        },
        {
          id: "cipuc-u1-struct-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the electron configurations of Ca²⁺ and O²⁻, and explain how each ion is formed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ion formation",
                statement:
                  "Cations lose electrons to reach noble gas config; anions gain electrons.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ca (2,8,8,2) loses 2 electrons → Ca²⁺ (2,8,8) — argon configuration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "O (2,6) gains 2 electrons → O²⁻ (2,8) — also argon configuration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both achieve noble gas configuration — Ca by losing, O by gaining.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Ca²⁺: 2,8,8; O²⁻: 2,8.",
          },
        },
        {
          id: "cipuc-u1-struct-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the two anomalies in first ionisation energy across Period 2: the drop from Be to B and from N to O.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sub-shell effects",
                statement:
                  "p orbitals are higher in energy and less penetrating than s — removal can be easier.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Be is 1s²2s² — the electron removed comes from a stable, fully filled 2s subshell.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "B is 1s²2s²2p¹ — the 2p electron is higher in energy, less penetrating and shielded by the 2s pair → easier to remove.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "N is 2p³ with one electron in each p orbital (parallel spins, minimum repulsion); O is 2p⁴ — the fourth p electron must pair, causing repulsion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The paired electron in O is easier to remove → small IE increase N→O instead of the expected large jump.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sub-shell stability (Be→B) and p⁴ pairing repulsion (N→O).",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipuc-u1-structure-notes",
      title: "Atomic structure and bonding — revision notes",
      summary: "Isotopes, bonding types, VSEPR shapes, periodic trends.",
      sections: [
        {
          heading: "Key skills",
          body: "Write electron configurations for atoms and ions. For shape questions, count bonding pairs AND lone pairs — lone pairs compress angles.",
        },
        {
          heading: "Exam tips",
          body: "Know the ionisation-energy anomalies (Be→B, N→O). Distinguish intermolecular forces from covalent/ionic bonds — hydrogen bonding is intermolecular.",
        },
      ],
    },
  ],
};
