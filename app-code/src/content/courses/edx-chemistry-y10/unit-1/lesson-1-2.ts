import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "ech10-u1-lesson-1-2",
  code: "1-2",
  title: "Atomic Structure and the Periodic Table",
  goal: "I CAN describe the structure of atoms and isotopes, calculate relative atomic mass, and use electron configurations to link an element to its place in the periodic table.",
  standards: ["4CH1 1.8", "4CH1 1.9", "4CH1 1.10", "4CH1 1.11", "4CH1 1.12", "4CH1 1.13", "4CH1 1.14"],
  vocabulary: [
    { term: "Atomic number", definition: "The number of protons in the nucleus of an atom. It identifies the element." },
    { term: "Mass number", definition: "The total number of protons and neutrons in the nucleus of an atom." },
    { term: "Isotopes", definition: "Atoms of the same element with the same number of protons but different numbers of neutrons." },
    { term: "Relative atomic mass", definition: "The average mass of the atoms of an element, taking account of the abundance of its isotopes, compared with one-twelfth of the mass of a carbon-12 atom." },
    { term: "Electron shell", definition: "An energy level around the nucleus that can hold a limited number of electrons: 2 in the first shell and up to 8 in the second and third." },
    { term: "Group", definition: "A vertical column of the periodic table. Elements in a group have the same number of outer-shell electrons." },
    { term: "Period", definition: "A horizontal row of the periodic table. The period number equals the number of occupied electron shells." },
  ],
  concepts: [
    {
      id: "ech10-u1-atomic-structure-isotopes",
      title: "Atomic structure, isotopes and relative atomic mass",
      skill: "State the particles in an atom, work out numbers of protons, neutrons and electrons, and calculate relative atomic mass from isotope abundances.",
      lesson: {
        sections: [
          {
            heading: "Protons, neutrons and electrons",
            body: "An atom has a small, dense, positively charged **nucleus** containing protons and neutrons, surrounded by electrons in shells.\n\n| Particle | Relative mass | Relative charge |\n| --- | --- | --- |\n| Proton | 1 | $+1$ |\n| Neutron | 1 | 0 |\n| Electron | very small (about $\\frac{1}{1840}$) | $-1$ |\n\nAn atom is neutral because it has equal numbers of protons and electrons. The **atomic number** is the number of protons. The **mass number** is the number of protons plus neutrons, so\n\n$$\\text{number of neutrons} = \\text{mass number} - \\text{atomic number}$$\n\nAn ion has gained or lost electrons, so the numbers of protons and electrons are different.",
          },
          {
            heading: "Isotopes",
            body: "**Isotopes** are atoms of the same element with the same atomic number but different mass numbers, because they have different numbers of neutrons. For example carbon-12 has 6 protons and 6 neutrons, and carbon-14 has 6 protons and 8 neutrons.\n\nIsotopes have the same chemical properties because chemical reactions depend on the electrons, and isotopes of an element have the same electron arrangement. They have different physical properties such as mass and density.",
          },
          {
            heading: "Relative atomic mass",
            body: "The **relative atomic mass**, $A_r$, of an element is the average mass of its atoms compared with one-twelfth of a carbon-12 atom. It is usually not a whole number because it is a weighted average of the isotopes.\n\n$$A_r = \\frac{\\sum(\\text{isotope mass} \\times \\text{abundance})}{\\sum \\text{abundances}}$$\n\nFor chlorine, with $75\\%$ chlorine-35 and $25\\%$ chlorine-37: $A_r = \\frac{(35 \\times 75) + (37 \\times 25)}{100} = \\frac{2625 + 925}{100} = 35.5$.",
          },
        ],
        keyFormulas: [
          { name: "Neutrons", statement: "$\\text{neutrons} = \\text{mass number} - \\text{atomic number}$" },
          { name: "Relative atomic mass", statement: "$A_r = \\frac{\\sum(\\text{isotope mass} \\times \\text{abundance})}{\\sum \\text{abundances}}$" },
          { name: "Isotopes", statement: "Same number of protons, different number of neutrons" },
        ],
        workedExample: {
          problem: "Lithium has two isotopes: $^{6}\\text{Li}$ ($7.5\\%$) and $^{7}\\text{Li}$ ($92.5\\%$). Calculate the relative atomic mass of lithium to 2 decimal places.",
          solution: "$A_r = \\frac{(6 \\times 7.5) + (7 \\times 92.5)}{100} = \\frac{45 + 647.5}{100} = \\frac{692.5}{100} = 6.93$ (to 2 decimal places, 6.925 rounds to 6.93).",
        },
      },
      questions: [
        {
          id: "ech10-u1-atomic-structure-isotopes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which row gives the relative charge and relative mass of a neutron?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Relative charge $+1$, relative mass $1$" },
              { id: "b", text: "Relative charge $0$, relative mass $1$" },
              { id: "c", text: "Relative charge $0$, relative mass very small" },
              { id: "d", text: "Relative charge $-1$, relative mass $1$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Subatomic particles", statement: "A neutron has relative mass 1 and relative charge 0." },
            ],
            steps: [
              { reasoning: "Neutrons are uncharged and have the same relative mass as protons.", working: "\\text{charge } 0,\\ \\text{mass } 1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)**",
            commonErrors: ["Choosing (b), which is a proton.", "Choosing (c), which describes the mass of an electron but with the neutron's charge."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "ech10-u1-atomic-structure-isotopes-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "An aluminium ion is represented as $^{27}_{13}\\text{Al}^{3+}$. Give the number of protons, neutrons and electrons in this ion.",
          response: {
            type: "numeric",
            parts: [
              { label: "Number of protons", answer: 13 },
              { label: "Number of neutrons", answer: 14 },
              { label: "Number of electrons", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Neutrons", statement: "$\\text{neutrons} = \\text{mass number} - \\text{atomic number}$" },
              { kind: "definition", name: "Ion", statement: "An ion with charge $3+$ has lost three electrons, so electrons = protons $- 3$." },
            ],
            steps: [
              { reasoning: "The atomic number is the number of protons.", working: "13", marks: 1, markCode: "B" },
              { reasoning: "Neutrons = mass number $-$ atomic number.", working: "27 - 13 = 14", marks: 1, markCode: "B" },
              { reasoning: "The $3+$ charge means three electrons have been lost from the 13 in the atom.", working: "13 - 3 = 10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "13 protons, 14 neutrons, 10 electrons",
            commonErrors: ["Giving 13 electrons, forgetting the ion has lost electrons.", "Giving 16 electrons by adding the charge."],
            examinerNote: "B1 for each correct number.",
          },
        },
        {
          id: "ech10-u1-atomic-structure-isotopes-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Boron has two isotopes: boron-10 with an abundance of $20\\%$ and boron-11 with an abundance of $80\\%$. Calculate the relative atomic mass of boron. Give your answer to 1 decimal place.",
          response: { type: "numeric", parts: [{ label: "Relative atomic mass of boron", answer: 10.8, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Relative atomic mass", statement: "$A_r = \\frac{\\sum(\\text{isotope mass} \\times \\text{abundance})}{\\sum \\text{abundances}}$" },
            ],
            steps: [
              { reasoning: "Multiply each isotope mass by its abundance.", working: "(10 \\times 20) + (11 \\times 80) = 200 + 880", marks: 1, markCode: "M" },
              { reasoning: "Divide by the total abundance (100).", working: "\\frac{1080}{100}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "A_r = 10.8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$A_r = 10.8$",
            commonErrors: ["Taking the simple mean of 10 and 11 to get 10.5.", "Forgetting to divide by 100."],
            examinerNote: "M1 for the sum of mass $\\times$ abundance (1080). M1 for dividing by 100. A1 for 10.8. Reject 10.5 without working.",
          },
        },
        {
          id: "ech10-u1-atomic-structure-isotopes-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Copper has two stable isotopes, $^{63}_{29}\\text{Cu}$ and $^{65}_{29}\\text{Cu}$. In a sample of copper, $69\\%$ of the atoms are copper-63 and $31\\%$ are copper-65.",
          parts: [
            { label: "a", prompt: "Give the number of protons, neutrons and electrons in a neutral atom of $^{63}_{29}\\text{Cu}$.", marks: 3 },
            { label: "b", prompt: "State what is meant by the term isotopes.", marks: 2 },
            { label: "c", prompt: "Calculate the relative atomic mass of copper in this sample. Give your answer to 1 decimal place.", marks: 3 },
            { label: "d", prompt: "Explain why the two isotopes of copper have the same chemical properties.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Isotopes", statement: "Atoms of the same element with the same number of protons but different numbers of neutrons." },
              { kind: "formula", name: "Relative atomic mass", statement: "$A_r = \\frac{\\sum(\\text{isotope mass} \\times \\text{abundance})}{\\sum \\text{abundances}}$" },
              { kind: "principle", name: "Chemical properties", statement: "Chemical properties depend on the electron arrangement, which depends on the number of protons." },
            ],
            steps: [
              { part: "a", reasoning: "Protons equal the atomic number and a neutral atom has the same number of electrons.", working: "29\\text{ protons},\\ 29\\text{ electrons}", marks: 2, markCode: "B" },
              { part: "a", reasoning: "Neutrons = mass number $-$ atomic number.", working: "63 - 29 = 34", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Isotopes are atoms of the same element (same number of protons / same atomic number).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "They have different numbers of neutrons (different mass numbers).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Multiply each mass by its abundance and add.", working: "(63 \\times 69) + (65 \\times 31) = 4347 + 2015 = 6362", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Divide by 100.", working: "\\frac{6362}{100} = 63.62", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Round to 1 decimal place.", working: "A_r = 63.6", marks: 1, markCode: "A" },
              { part: "d", reasoning: "They have the same number of electrons (same electron configuration) and chemical reactions involve electrons.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 29 protons, 34 neutrons, 29 electrons (b) same protons, different neutrons (c) $63.6$ (d) same electron arrangement.",
            commonErrors: ["Giving 63 neutrons.", "Giving the mean of 63 and 65 as 64.", "Saying the isotopes have the same chemical properties because they have the same mass."],
            examinerNote: "In (a) the first two marks are one each for protons and electrons, i.e. award 1 for each of 29 protons and 29 electrons. Reject 63 for neutrons. In (c) allow 63.62 or 63.6; reject 64 without working. In (d) allow 'same number of outer electrons'.",
          },
        },
      ],
    },
    {
      id: "ech10-u1-periodic-table-electron-configuration",
      title: "The periodic table and electron configuration",
      skill: "Write electron configurations for the first 20 elements and use them to find an element's group and period.",
      lesson: {
        sections: [
          {
            heading: "Electron shells",
            body: "Electrons are arranged in shells around the nucleus. The first shell holds a maximum of 2 electrons, the second shell holds up to 8 and the third shell holds up to 8 for the first 20 elements. Electrons fill the lowest shell first.\n\nThe electron configuration is written as the numbers in each shell, for example sodium (atomic number 11) is $2,8,1$ and chlorine (atomic number 17) is $2,8,7$. Argon (18) is $2,8,8$ and potassium (19) is $2,8,8,1$.",
          },
          {
            heading: "Groups and periods",
            body: "The periodic table arranges elements in order of increasing atomic number.\n\n- The **group number** equals the number of electrons in the outer shell (for Groups 1 to 7). Group 0 elements (the noble gases) have full outer shells.\n- The **period number** equals the number of occupied shells.\n\nSo an element with configuration $2,8,3$ has 3 outer electrons (Group 3) and 3 shells (Period 3). It is aluminium. Elements in the same group have similar chemical properties because they have the same number of outer electrons.",
          },
          {
            heading: "Metals, non-metals and ions",
            body: "Metals are on the left and in the centre of the table. They lose outer electrons to form positive ions. Non-metals are on the right (apart from hydrogen) and gain electrons to form negative ions, or share electrons.\n\nAtoms form ions to get a full outer shell, like a noble gas. Sodium ($2,8,1$) loses one electron to form $\\text{Na}^+$ ($2,8$). Chlorine ($2,8,7$) gains one electron to form $\\text{Cl}^-$ ($2,8,8$).",
          },
        ],
        keyFormulas: [
          { name: "Shell capacity", statement: "2 electrons in the first shell, up to 8 in the second and third" },
          { name: "Group number", statement: "Group number = number of outer-shell electrons" },
          { name: "Period number", statement: "Period number = number of electron shells" },
        ],
        workedExample: {
          problem: "Write the electron configuration of sulfur (atomic number 16) and state its group and period.",
          solution: "16 electrons: 2 in the first shell, 8 in the second, 6 in the third, so $2,8,6$. It has 6 outer electrons so it is in Group 6, and 3 shells so it is in Period 3.",
        },
      },
      questions: [
        {
          id: "ech10-u1-periodic-table-electron-configuration-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the electron configuration of a chlorine atom (atomic number 17)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2,7,8$" },
              { id: "b", text: "$2,8,7$" },
              { id: "c", text: "$2,8,8$" },
              { id: "d", text: "$2,8,6,1$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Filling shells", statement: "Shells fill from the nucleus outwards: 2 in the first, 8 in the second, then the remainder in the third." },
            ],
            steps: [
              { reasoning: "17 electrons: 2 + 8 = 10 in the first two shells, leaving 7 in the third.", working: "17 - 10 = 7 \\Rightarrow 2,8,7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $2,8,7$",
            commonErrors: ["Choosing (a), which has 18 electrons and is argon.", "Choosing (c), which fills the third shell before the second."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ech10-u1-periodic-table-electron-configuration-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "An element has the electron configuration $2,8,3$. State the group and the period of the element in the periodic table.",
          response: { type: "numeric", parts: [{ label: "Group number", answer: 3 }, { label: "Period number", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Group and period", statement: "Group number = number of outer-shell electrons. Period number = number of occupied shells." },
            ],
            steps: [
              { reasoning: "There are 3 electrons in the outer shell.", working: "\\text{Group } 3", marks: 1, markCode: "B" },
              { reasoning: "Three shells are occupied (2, 8 and 3).", working: "\\text{Period } 3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Group 3, Period 3",
            commonErrors: ["Giving the group as 13 or the period as 8 by adding the electrons.", "Swapping group and period."],
            examinerNote: "B1 for each. Allow 'Group III'.",
          },
        },
        {
          id: "ech10-u1-periodic-table-electron-configuration-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Sodium (atomic number 11) and potassium (atomic number 19) are both in Group 1 and have similar chemical properties. Explain, using their electron configurations, why they are in the same group but different periods, and describe the ion each forms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Group and period", statement: "Group number = outer electrons; period number = number of shells." },
            ],
            steps: [
              { reasoning: "Sodium is $2,8,1$ and potassium is $2,8,8,1$.", working: "\\text{Na } 2,8,1;\\quad \\text{K } 2,8,8,1", marks: 1, markCode: "B" },
              { reasoning: "Both have one electron in the outer shell, so they are in Group 1 and react in similar ways.", marks: 1, markCode: "B" },
              { reasoning: "Sodium has 3 shells (Period 3) and potassium has 4 shells (Period 4).", marks: 1, markCode: "B" },
              { reasoning: "Each loses its outer electron to form a $1+$ ion with a full outer shell, $\\text{Na}^+$ and $\\text{K}^+$.", working: "\\text{Na}^+\\ (2,8);\\quad \\text{K}^+\\ (2,8,8)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Both have 1 outer electron (Group 1); Na has 3 shells, K has 4; both form $1+$ ions.",
            commonErrors: ["Saying the group number equals the number of shells.", "Saying they form negative ions because they gain an electron."],
            examinerNote: "Allow ecf from an incorrect configuration only if the number of outer electrons is still the same. Allow $\\text{K}^+$ as 2,8,8.",
          },
        },
        {
          id: "ech10-u1-periodic-table-electron-configuration-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Element X has atomic number 16 and element Y has atomic number 12.",
          parts: [
            { label: "a", prompt: "Write the electron configuration of X and of Y.", marks: 2 },
            { label: "b", prompt: "State the group and period of X.", marks: 2 },
            { label: "c", prompt: "Y reacts with X to form an ionic compound. State the charge on the ion formed by Y and the charge on the ion formed by X.", marks: 2 },
            { label: "d", prompt: "Explain, in terms of electrons, how an atom of Y forms its ion.", marks: 2 },
            { label: "e", prompt: "Elements with atomic numbers 10 and 18 are very unreactive. Suggest why, using their electron configurations.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electron configuration", statement: "Shells fill 2, 8, then 8 for the first 20 elements." },
              { kind: "principle", name: "Ion formation", statement: "Atoms lose or gain electrons to gain a full outer shell." },
            ],
            steps: [
              { part: "a", reasoning: "X has 16 electrons: 2 + 8 + 6.", working: "\\text{X: } 2,8,6", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Y has 12 electrons: 2 + 8 + 2.", working: "\\text{Y: } 2,8,2", marks: 1, markCode: "B" },
              { part: "b", reasoning: "X has 6 outer electrons so it is in Group 6.", working: "\\text{Group } 6", marks: 1, markCode: "B" },
              { part: "b", reasoning: "X has three occupied shells so it is in Period 3.", working: "\\text{Period } 3", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Y loses two electrons to reach $2,8$.", working: "\\text{Y}^{2+}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "X gains two electrons to reach $2,8,8$.", working: "\\text{X}^{2-}", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Y has two electrons in its outer shell and loses both of them (to the other atom).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "This leaves a full outer shell of 8 electrons, and 12 protons but only 10 electrons, so the ion has a charge of $2+$.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Their configurations ($2,8$ and $2,8,8$) have full outer shells, so they do not need to lose, gain or share electrons.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) X 2,8,6; Y 2,8,2 (b) Group 6, Period 3 (c) $\\text{Y}^{2+}$, $\\text{X}^{2-}$ (d) Y loses 2 outer electrons to get a full shell (e) full outer shells are stable.",
            commonErrors: ["Writing Y as 2,10.", "Saying X forms a $6-$ ion.", "Saying Y gains two electrons."],
            examinerNote: "In (c) allow charge written as 2+ and 2-. Reject 'Y gains electrons'. Elements 10 and 18 are neon and argon. Allow 'stable' for 'full outer shell' only if the shell is mentioned.",
          },
        },
      ],
    },
  ],
};
