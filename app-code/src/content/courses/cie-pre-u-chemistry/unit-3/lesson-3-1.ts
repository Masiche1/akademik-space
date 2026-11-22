import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "cipuc-u3-lesson-3-1",
  code: "3-1",
  title: "Atomic structure and bonding",
  goal: "I CAN explain atomic structure, bonding types, and molecular properties.",
  standards: [
    "Cambridge Pre-U Chemistry 9791",
    "Paper 1: Atomic structure and bonding",
  ],
  vocabulary: [
    {
      term: "Atom",
      definition: "Smallest unit of element — nucleus + electrons.",
    },
    {
      term: "Nucleus",
      definition: "Centre of atom — protons + neutrons.",
    },
    {
      term: "Proton",
      definition: "Positively charged particle in nucleus.",
    },
    {
      term: "Neutron",
      definition: "Neutral particle in nucleus.",
    },
    {
      term: "Electron",
      definition: "Negatively charged particle orbiting nucleus.",
    },
    {
      term: "Isotope",
      definition: "Same element, different neutron number.",
    },
    {
      term: "Ionic bond",
      definition: "Electrostatic attraction between ions.",
    },
    {
      term: "Covalent bond",
      definition: "Shared electron pair between atoms.",
    },
    {
      term: "Metallic bond",
      definition: "Attraction between metal cations and delocalised electrons.",
    },
    {
      term: "Electronegativity",
      definition: "Ability of atom to attract bonding electrons.",
    },
    {
      term: "Polar molecule",
      definition: "Molecule with uneven charge distribution.",
    },
    {
      term: "Hydrogen bond",
      definition: "Weak attraction between H and electronegative atoms.",
    },
  ],
  concepts: [
    {
      id: "cipuc-u3-atomic",
      title: "Atomic structure and isotopes",
      skill:
        "Explain atomic structure, electron configuration, isotopes, and relative atomic mass.",
      lesson: {
        sections: [
          {
            heading: "Atomic structure",
            body: "**Atom**: nucleus (protons + neutrons) surrounded by electrons. **Proton**: positive, mass 1, in nucleus. **Neutron**: neutral, mass 1, in nucleus. **Electron**: negative, mass ~0, in shells. **Atomic number (Z)**: number of protons — defines element. **Mass number (A)**: protons + neutrons.",
          },
          {
            heading: "Electron configuration",
            body: "Electrons fill shells: 2, 8, 8, 18... **Shells**: K(2), L(8), M(8 or 18), N(18 or 32). **Valence electrons**: outer shell — determines chemical properties. **Subshells**: s(2), p(6), d(10), f(14). Configuration written as e.g., Na: 1s² 2s² 2p⁶ 3s¹ or 2,8,1.",
          },
          {
            heading: "Isotopes and relative atomic mass",
            body: "**Isotopes**: same protons, different neutrons — same chemical properties, different mass. **RAM**: weighted average of isotope masses. Calculation: (isotope1% × mass1 + isotope2% × mass2) / 100. Isotopes have same atomic number but different mass numbers.",
          },
        ],
        keyFormulas: [
          {
            name: "Atomic structure",
            statement: "Protons + neutrons in nucleus, electrons orbit",
          },
          {
            name: "Atomic number",
            statement: "Number of protons",
          },
          {
            name: "Mass number",
            statement: "Protons + neutrons",
          },
          {
            name: "Isotopes",
            statement: "Same Z, different A",
          },
        ],
        workedExample: {
          problem: "Calculate RAM of chlorine: 75% ³⁵Cl, 25% ³⁷Cl.",
          solution: "(75 × 35 + 25 × 37) / 100 = (2625 + 925) / 100 = 35.5.",
        },
      },
      questions: [
        {
          id: "cipuc-u3-ato-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An atom consists of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only neutrons" },
              { id: "b", text: "Only protons" },
              { id: "c", text: "Only electrons" },
              { id: "d", text: "Nucleus + electrons" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Atom",
                statement: "Nucleus + electrons.",
              },
            ],
            steps: [
              {
                reasoning: "Atom = nucleus + electrons.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Nucleus + electrons.",
          },
        },
        {
          id: "cipuc-u3-ato-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The nucleus contains:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only protons" },
              { id: "b", text: "Only neutrons" },
              { id: "c", text: "Electrons" },
              { id: "d", text: "Protons and neutrons" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nucleus",
                statement: "Protons + neutrons.",
              },
            ],
            steps: [{ reasoning: "Nucleus = p + n.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Protons and neutrons.",
          },
        },
        {
          id: "cipuc-u3-ato-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Protons have:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No charge" },
              { id: "b", text: "Mass 0" },
              { id: "c", text: "Negative charge" },
              { id: "d", text: "Positive charge, mass 1" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Proton",
                statement: "Positive, mass 1.",
              },
            ],
            steps: [
              { reasoning: "Proton = +1, mass 1.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Positive, mass 1.",
          },
        },
        {
          id: "cipuc-u3-ato-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Neutrons have:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No charge, mass 1" },
              { id: "b", text: "Positive charge" },
              { id: "c", text: "Mass 0" },
              { id: "d", text: "Negative charge" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Neutron",
                statement: "Neutral, mass 1.",
              },
            ],
            steps: [
              { reasoning: "Neutron = 0, mass 1.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) No charge, mass 1.",
          },
        },
        {
          id: "cipuc-u3-ato-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Electrons have:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mass 1" },
              { id: "b", text: "Positive charge" },
              { id: "c", text: "No charge" },
              { id: "d", text: "Negative charge, negligible mass" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Electron",
                statement: "Negative, mass ~0.",
              },
            ],
            steps: [
              { reasoning: "Electron = -1, mass ~0.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Negative, negligible mass.",
          },
        },
        {
          id: "cipuc-u3-ato-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Atomic number (Z) is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Number of electrons" },
              { id: "b", text: "Total mass" },
              { id: "c", text: "Number of neutrons" },
              { id: "d", text: "Number of protons" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Atomic number",
                statement: "Protons.",
              },
            ],
            steps: [{ reasoning: "Z = protons.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Number of protons.",
          },
        },
        {
          id: "cipuc-u3-ato-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Mass number (A) is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only protons" },
              { id: "b", text: "Protons + neutrons" },
              { id: "c", text: "Only neutrons" },
              { id: "d", text: "Electrons" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mass number",
                statement: "Protons + neutrons.",
              },
            ],
            steps: [{ reasoning: "A = p + n.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Protons + neutrons.",
          },
        },
        {
          id: "cipuc-u3-ato-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Isotopes are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Different elements" },
              { id: "b", text: "Same element, different neutrons" },
              { id: "c", text: "No atoms" },
              { id: "d", text: "Same neutrons" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Isotopes",
                statement: "Same Z, different A.",
              },
            ],
            steps: [
              {
                reasoning: "Isotopes = same protons, different neutrons.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Same element, different neutrons.",
          },
        },
        {
          id: "cipuc-u3-ato-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The first shell holds maximum:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8 electrons" },
              { id: "b", text: "32 electrons" },
              { id: "c", text: "18 electrons" },
              { id: "d", text: "2 electrons" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Shell capacity",
                statement: "K shell = 2.",
              },
            ],
            steps: [{ reasoning: "First shell = 2.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) 2 electrons.",
          },
        },
        {
          id: "cipuc-u3-ato-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Valence electrons are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No electrons" },
              { id: "b", text: "Nuclear electrons" },
              { id: "c", text: "Inner shell electrons" },
              { id: "d", text: "Outer shell electrons" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Valence electrons",
                statement: "Outer shell.",
              },
            ],
            steps: [
              { reasoning: "Valence = outer shell.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Outer shell electrons.",
          },
        },
        {
          id: "cipuc-u3-ato-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "An element with atomic number 11 has how many electrons?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10" },
              { id: "b", text: "11" },
              { id: "c", text: "12" },
              { id: "d", text: "1" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Neutral atom",
                statement: "Electrons = protons.",
              },
            ],
            steps: [
              { reasoning: "Neutral = 11 electrons.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) 11.",
          },
        },
        {
          id: "cipuc-u3-ato-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Chlorine has electron configuration:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2,7,7" },
              { id: "b", text: "8,8,7" },
              { id: "c", text: "2,8,8" },
              { id: "d", text: "2,8,7" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Chlorine config",
                statement: "2,8,7.",
              },
            ],
            steps: [
              {
                reasoning: "Cl = 17 electrons = 2,8,7.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 2,8,7.",
          },
        },
        {
          id: "cipuc-u3-ato-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sodium has electron configuration:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8,8,1" },
              { id: "b", text: "2,8,2" },
              { id: "c", text: "2,8,8" },
              { id: "d", text: "2,8,1" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sodium config", statement: "2,8,1." },
            ],
            steps: [
              {
                reasoning: "Na = 11 electrons = 2,8,1.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 2,8,1.",
          },
        },
        {
          id: "cipuc-u3-ato-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Elements in same group have similar properties because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same atomic number" },
              { id: "b", text: "Same neutrons" },
              { id: "c", text: "Same mass" },
              { id: "d", text: "Same number of valence electrons" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Group similarity",
                statement: "Same valence electrons.",
              },
            ],
            steps: [
              { reasoning: "Same valence = similar.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Same valence electrons.",
          },
        },
        {
          id: "cipuc-u3-ato-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Elements in same period have:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same properties" },
              { id: "b", text: "Same mass" },
              { id: "c", text: "Same number of electron shells" },
              { id: "d", text: "Same valence electrons" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Period",
                statement: "Same number of shells.",
              },
            ],
            steps: [
              { reasoning: "Period = same shells.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Same number of electron shells.",
          },
        },
        {
          id: "cipuc-u3-ato-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Alkali metals are in group:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8" },
              { id: "b", text: "1" },
              { id: "c", text: "2" },
              { id: "d", text: "7" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Alkali metals",
                statement: "Group 1.",
              },
            ],
            steps: [
              { reasoning: "Alkali = group 1.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Group 1.",
          },
        },
        {
          id: "cipuc-u3-ato-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "Halogens are in group:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8" },
              { id: "b", text: "1" },
              { id: "c", text: "7" },
              { id: "d", text: "2" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Halogens", statement: "Group 7." },
            ],
            steps: [
              { reasoning: "Halogens = group 7.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Group 7.",
          },
        },
        {
          id: "cipuc-u3-ato-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "Noble gases are in group:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1" },
              { id: "b", text: "7" },
              { id: "c", text: "8" },
              { id: "d", text: "2" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Noble gases", statement: "Group 8." },
            ],
            steps: [
              { reasoning: "Noble gases = group 8.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Group 8.",
          },
        },
        {
          id: "cipuc-u3-ato-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "Transition metals are in groups:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All groups" },
              { id: "b", text: "3-12" },
              { id: "c", text: "1-2" },
              { id: "d", text: "13-18" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Transition metals",
                statement: "Groups 3-12.",
              },
            ],
            steps: [
              { reasoning: "Transition = 3-12.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Groups 3-12.",
          },
        },
        {
          id: "cipuc-u3-ato-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why isotopes have same chemical properties.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Isotope properties",
                statement: "Same electrons.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Isotopes have same number of protons and electrons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Chemical properties depend on electron configuration.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Same electrons → same chemistry.",
          },
        },
        {
          id: "cipuc-u3-ato-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two differences between isotopes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Isotope differences",
                statement: "Neutrons and mass.",
              },
            ],
            steps: [
              {
                reasoning: "Different number of neutrons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Different mass numbers and physical properties.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Neutrons and mass.",
          },
        },
        {
          id: "cipuc-u3-ato-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how electron configuration determines chemical properties.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Electron config",
                statement: "Valence electrons determine reactivity.",
              },
            ],
            steps: [
              {
                reasoning: "Valence electrons participate in bonding.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Number of valence electrons determines reactivity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Elements with same valence electrons have similar properties.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Valence electrons → bonding → properties.",
          },
        },
        {
          id: "cipuc-u3-ato-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate RAM of boron: 20% ¹⁰B, 80% ¹¹B.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "RAM calculation",
                statement: "Weighted average.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Formula: (isotope1% × mass1 + isotope2% × mass2) / 100.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(20 × 10 + 80 × 11) / 100 = (200 + 880) / 100 = 10.8.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "RAM = 10.8.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weighted average of isotope masses.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "RAM = 10.8.",
          },
        },
        {
          id: "cipuc-u3-ato-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "An ion is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Charged atom — gained/lost electrons" },
              { id: "b", text: "Element" },
              { id: "c", text: "Neutral atom" },
              { id: "d", text: "Isotope" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ion", statement: "Charged atom." },
            ],
            steps: [{ reasoning: "Ion = charged.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Charged atom.",
          },
        },
        {
          id: "cipuc-u3-ato-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the electron configuration of neon?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Neon config", statement: "2,8." },
            ],
            steps: [
              {
                reasoning: "Neon has 10 electrons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Configuration: 2,8 — full shells.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2,8.",
          },
        },
        {
          id: "cipuc-u3-ato-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why atoms lose or gain electrons to form ions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ion formation",
                statement: "Achieve stable electron config.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Atoms seek stable electron configuration (noble gas).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Metals lose electrons — form cations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Non-metals gain electrons — form anions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Achieve stability — metals lose, non-metals gain.",
          },
        },
        {
          id: "cipuc-u3-ato-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A cation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Positively charged ion" },
              { id: "b", text: "Negatively charged" },
              { id: "c", text: "Isotope" },
              { id: "d", text: "Neutral" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cation",
                statement: "Positive ion.",
              },
            ],
            steps: [
              { reasoning: "Cation = positive.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Positively charged.",
          },
        },
        {
          id: "cipuc-u3-ato-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is an anion?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Anion", statement: "Negative ion." },
            ],
            steps: [
              {
                reasoning: "Negatively charged ion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Formed by gaining electrons.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Negative ion — gained electrons.",
          },
        },
        {
          id: "cipuc-u3-ato-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write the electron configuration of calcium (Z=20).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Electron config",
                statement: "Fill shells in order.",
              },
            ],
            steps: [
              {
                reasoning: "Ca has 20 electrons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Fill shells: 2 (K), 8 (L), 8 (M partial).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Remaining 2 electrons in N shell.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Configuration: 2,8,8,2.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2,8,8,2.",
          },
        },
        {
          id: "cipuc-u3-ato-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "What determines an element's position in periodic table?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Periodic position",
                statement: "Atomic number + electron config.",
              },
            ],
            steps: [
              {
                reasoning: "Atomic number determines group and period.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Electron configuration determines properties.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Atomic number + electron configuration.",
          },
        },
      ],
    },
    {
      id: "cipuc-u3-bond",
      title: "Chemical bonding",
      skill:
        "Explain ionic, covalent, and metallic bonding and their properties.",
      lesson: {
        sections: [
          {
            heading: "Ionic bonding",
            body: "**Ionic bond**: electrostatic attraction between oppositely charged ions. **Formation**: metal loses electrons (cation), non-metal gains (anion). **Properties**: high melting points, conduct electricity when molten/dissolved, brittle, soluble in water. **Examples**: NaCl, MgO, CaCO₃.",
          },
          {
            heading: "Covalent bonding",
            body: "**Covalent bond**: shared electron pair between atoms. **Types**: single (1 pair), double (2 pairs), triple (3 pairs). **Properties**: low melting points, don't conduct electricity, insoluble in water (mostly), molecular substances. **Examples**: H₂, O₂, N₂, CO₂, CH₄.",
          },
          {
            heading: "Metallic bonding",
            body: "**Metallic bond**: attraction between metal cations and delocalised electrons. **Properties**: conducts electricity/heat, malleable, ductile, high melting points. **Delocalised electrons**: free to move — allow conduction. **Examples**: all metals — Fe, Cu, Al, Na.",
          },
        ],
        keyFormulas: [
          {
            name: "Ionic bond",
            statement: "Ion attraction — high mp, conducts",
          },
          {
            name: "Covalent bond",
            statement: "Shared electrons — low mp, no conduction",
          },
          {
            name: "Metallic bond",
            statement: "Cations + delocalised electrons",
          },
          {
            name: "Electronegativity",
            statement: "Attracts bonding electrons",
          },
        ],
        workedExample: {
          problem:
            "Why does NaCl conduct electricity when dissolved but not solid?",
          solution:
            "Ions can't move in solid — fixed lattice. Dissolved: ions free to move — conduct.",
        },
      },
      questions: [
        {
          id: "cipuc-u3-bon-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An ionic bond is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shared electrons" },
              { id: "b", text: "Electrostatic attraction between ions" },
              { id: "c", text: "Metallic attraction" },
              { id: "d", text: "Hydrogen bond" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ionic bond",
                statement: "Ion attraction.",
              },
            ],
            steps: [
              { reasoning: "Ionic = ion attraction.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Electrostatic attraction.",
          },
        },
        {
          id: "cipuc-u3-bon-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A covalent bond is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No bond" },
              { id: "b", text: "Metallic attraction" },
              { id: "c", text: "Shared electron pair" },
              { id: "d", text: "Ion attraction" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Covalent bond",
                statement: "Shared electrons.",
              },
            ],
            steps: [
              { reasoning: "Covalent = shared.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Shared electron pair.",
          },
        },
        {
          id: "cipuc-u3-bon-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A metallic bond is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No bond" },
              { id: "b", text: "Shared electrons" },
              { id: "c", text: "Ion attraction" },
              { id: "d", text: "Cations + delocalised electrons" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Metallic bond",
                statement: "Cations + electrons.",
              },
            ],
            steps: [
              {
                reasoning: "Metallic = cations + electrons.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Cations + delocalised electrons.",
          },
        },
        {
          id: "cipuc-u3-bon-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Ionic compounds have:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Low melting points" },
              { id: "b", text: "High melting points" },
              { id: "c", text: "Variable mp" },
              { id: "d", text: "No melting point" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ionic mp",
                statement: "High melting.",
              },
            ],
            steps: [{ reasoning: "Ionic = high mp.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) High melting points.",
          },
        },
        {
          id: "cipuc-u3-bon-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Covalent compounds have:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No melting" },
              { id: "b", text: "Low melting points" },
              { id: "c", text: "Variable mp" },
              { id: "d", text: "High melting points" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Covalent mp",
                statement: "Low melting.",
              },
            ],
            steps: [
              { reasoning: "Covalent = low mp.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Low melting points.",
          },
        },
        {
          id: "cipuc-u3-bon-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Ionic compounds conduct electricity when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Solid" },
              { id: "b", text: "Molten or dissolved" },
              { id: "c", text: "Never" },
              { id: "d", text: "Always" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ionic conduction",
                statement: "Molten/dissolved.",
              },
            ],
            steps: [
              {
                reasoning: "Ionic = molten/dissolved.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Molten or dissolved.",
          },
        },
        {
          id: "cipuc-u3-bon-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Covalent compounds conduct electricity:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Always" },
              { id: "b", text: "Never (no free ions/electrons)" },
              { id: "c", text: "When molten" },
              { id: "d", text: "When dissolved" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Covalent conduction",
                statement: "Never conducts.",
              },
            ],
            steps: [
              {
                reasoning: "Covalent = no conduction.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Never.",
          },
        },
        {
          id: "cipuc-u3-bon-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Metals conduct electricity because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Delocalised electrons" },
              { id: "b", text: "Shared electrons" },
              { id: "c", text: "No electrons" },
              { id: "d", text: "Ions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Metal conduction",
                statement: "Delocalised electrons.",
              },
            ],
            steps: [
              {
                reasoning: "Metals = delocalised electrons.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Delocalised electrons.",
          },
        },
        {
          id: "cipuc-u3-bon-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A single covalent bond involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two pairs" },
              { id: "b", text: "Three pairs" },
              { id: "c", text: "No pairs" },
              { id: "d", text: "One shared electron pair" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Single bond",
                statement: "One pair.",
              },
            ],
            steps: [{ reasoning: "Single = 1 pair.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) One shared pair.",
          },
        },
        {
          id: "cipuc-u3-bon-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A double covalent bond involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two shared electron pairs" },
              { id: "b", text: "Three pairs" },
              { id: "c", text: "One pair" },
              { id: "d", text: "No pairs" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Double bond",
                statement: "Two pairs.",
              },
            ],
            steps: [
              { reasoning: "Double = 2 pairs.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Two shared pairs.",
          },
        },
        {
          id: "cipuc-u3-bon-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Electronegativity is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ability to attract bonding electrons" },
              { id: "b", text: "Charge of ion" },
              { id: "c", text: "Mass of atom" },
              { id: "d", text: "Size of atom" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Electronegativity",
                statement: "Attracts electrons.",
              },
            ],
            steps: [
              {
                reasoning: "Electronegativity = attracts electrons.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Attracts bonding electrons.",
          },
        },
        {
          id: "cipuc-u3-bon-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A polar covalent bond has:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Equal sharing" },
              { id: "b", text: "No sharing" },
              { id: "c", text: "Ion transfer" },
              { id: "d", text: "Unequal sharing of electrons" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Polar covalent",
                statement: "Unequal sharing.",
              },
            ],
            steps: [
              {
                reasoning: "Polar = unequal sharing.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Unequal sharing.",
          },
        },
        {
          id: "cipuc-u3-bon-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A non-polar covalent bond has:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unequal sharing" },
              { id: "b", text: "Ion transfer" },
              { id: "c", text: "No sharing" },
              { id: "d", text: "Equal sharing of electrons" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Non-polar covalent",
                statement: "Equal sharing.",
              },
            ],
            steps: [
              {
                reasoning: "Non-polar = equal sharing.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Equal sharing.",
          },
        },
        {
          id: "cipuc-u3-bon-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A polar molecule has:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No charge" },
              { id: "b", text: "Uneven charge distribution" },
              { id: "c", text: "Ions" },
              { id: "d", text: "Even charge" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Polar molecule",
                statement: "Uneven charge.",
              },
            ],
            steps: [
              {
                reasoning: "Polar molecule = uneven charge.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Uneven charge distribution.",
          },
        },
        {
          id: "cipuc-u3-bon-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Hydrogen bonding occurs between:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All atoms" },
              { id: "b", text: "No atoms" },
              { id: "c", text: "Only metals" },
              { id: "d", text: "H and electronegative atoms (N, O, F)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hydrogen bond",
                statement: "H + N/O/F.",
              },
            ],
            steps: [
              { reasoning: "H-bond = H + N/O/F.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) H and electronegative atoms.",
          },
        },
        {
          id: "cipuc-u3-bon-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Water is polar because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No polarity" },
              { id: "b", text: "Equal electronegativity" },
              { id: "c", text: "Ionic bonds" },
              { id: "d", text: "Oxygen more electronegative than hydrogen" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Water polarity",
                statement: "O more electronegative.",
              },
            ],
            steps: [{ reasoning: "Water = polar.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) O more electronegative.",
          },
        },
        {
          id: "cipuc-u3-bon-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "Ionic compounds are typically formed between:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two metals" },
              { id: "b", text: "Metal and non-metal" },
              { id: "c", text: "Noble gases" },
              { id: "d", text: "Two non-metals" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ionic formation",
                statement: "Metal + non-metal.",
              },
            ],
            steps: [
              {
                reasoning: "Ionic = metal + non-metal.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Metal and non-metal.",
          },
        },
        {
          id: "cipuc-u3-bon-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "Covalent compounds are typically formed between:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Metal and non-metal" },
              { id: "b", text: "Two non-metals" },
              { id: "c", text: "Two metals" },
              { id: "d", text: "Noble gases" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Covalent formation",
                statement: "Non-metal + non-metal.",
              },
            ],
            steps: [
              { reasoning: "Covalent = non-metals.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Two non-metals.",
          },
        },
        {
          id: "cipuc-u3-bon-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "Metallic bonding occurs in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All substances" },
              { id: "b", text: "Metals only" },
              { id: "c", text: "Ionic compounds" },
              { id: "d", text: "Non-metals" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Metallic bonding",
                statement: "Metals only.",
              },
            ],
            steps: [
              { reasoning: "Metallic = metals.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Metals only.",
          },
        },
        {
          id: "cipuc-u3-bon-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between ionic and covalent bonding.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ionic vs covalent",
                statement: "Electron transfer vs sharing.",
              },
            ],
            steps: [
              {
                reasoning: "Ionic: electron transfer — metal + non-metal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Covalent: electron sharing — non-metal + non-metal.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Ionic = transfer; covalent = sharing.",
          },
        },
        {
          id: "cipuc-u3-bon-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two properties of ionic compounds.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ionic properties",
                statement: "High mp, conducts.",
              },
            ],
            steps: [
              {
                reasoning: "High melting points.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Conduct electricity when molten/dissolved.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "High mp, conducts when molten/dissolved.",
          },
        },
        {
          id: "cipuc-u3-bon-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why metals are malleable and ductile.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Metal properties",
                statement: "Delocalised electrons allow deformation.",
              },
            ],
            steps: [
              {
                reasoning: "Metallic bond: cations in sea of electrons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Electrons can move — allow layers to slide.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Malleable (hammerable) and ductile (stretchable).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Delocalised electrons → layers slide → malleable/ductile.",
          },
        },
        {
          id: "cipuc-u3-bon-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why NaCl conducts electricity when dissolved but not solid.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ionic conduction",
                statement: "Ions must be mobile.",
              },
            ],
            steps: [
              {
                reasoning: "Solid NaCl: ions fixed in lattice — can't move.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Dissolved NaCl: ions free to move.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Moving ions carry charge — conduct electricity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Fixed ions can't carry charge — no conduction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Mobile ions conduct; fixed ions don't.",
          },
        },
        {
          id: "cipuc-u3-bon-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "A hydrogen bond is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Strong covalent bond" },
              { id: "b", text: "Metallic bond" },
              { id: "c", text: "Ionic bond" },
              {
                id: "d",
                text: "Weak attraction between H and electronegative atoms",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hydrogen bond",
                statement: "Weak H attraction.",
              },
            ],
            steps: [
              {
                reasoning: "H-bond = weak attraction.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Weak H attraction.",
          },
        },
        {
          id: "cipuc-u3-bon-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a dipole moment?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dipole moment",
                statement: "Separation of charge.",
              },
            ],
            steps: [
              {
                reasoning: "Measure of charge separation in molecule.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Non-zero = polar molecule.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Charge separation measure — non-zero = polar.",
          },
        },
        {
          id: "cipuc-u3-bon-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why water has high boiling point compared to similar molecules.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Water bp",
                statement: "Hydrogen bonding.",
              },
            ],
            steps: [
              {
                reasoning: "Water forms hydrogen bonds.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "H-bonds are stronger than van der Waals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "More energy needed to separate molecules.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Hydrogen bonding → higher bp.",
          },
        },
        {
          id: "cipuc-u3-bon-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A triple covalent bond involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Three shared electron pairs" },
              { id: "b", text: "One pair" },
              { id: "c", text: "Two pairs" },
              { id: "d", text: "No pairs" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Triple bond",
                statement: "Three pairs.",
              },
            ],
            steps: [
              { reasoning: "Triple = 3 pairs.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Three shared pairs.",
          },
        },
        {
          id: "cipuc-u3-bon-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a coordinate (dative) bond?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Coordinate bond",
                statement: "Both electrons from one atom.",
              },
            ],
            steps: [
              {
                reasoning: "Both shared electrons come from one atom.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Common in complexes and ammonium ion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Both electrons from one atom.",
          },
        },
        {
          id: "cipuc-u3-bon-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why diamond is hard but graphite is soft, despite both being carbon.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Carbon allotropes",
                statement: "Different structures.",
              },
            ],
            steps: [
              {
                reasoning: "Diamond: each C bonded to 4 others — 3D network.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strong covalent bonds throughout — very hard.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Graphite: layers of hexagonal rings — weak between layers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Layers slide easily — soft and conducts.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Diamond = 3D network; graphite = layered.",
          },
        },
        {
          id: "cipuc-u3-bon-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is van der Waals force?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Van der Waals",
                statement: "Weak intermolecular force.",
              },
            ],
            steps: [
              {
                reasoning: "Weak attraction between molecules.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Caused by temporary dipoles.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Weak intermolecular attraction.",
          },
        },
      ],
    },
  ],
};
