import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "esc9-u2-lesson-2-1",
  code: "2-1",
  title: "Atomic Structure",
  goal: "I CAN describe the particles in an atom, use atomic number and mass number to work out numbers of protons, neutrons and electrons, and write electron arrangements for the first 20 elements.",
  standards: ["KS3 Chemistry", "KS3 Working Scientifically"],
  vocabulary: [
    { term: "Nucleus", definition: "The tiny, dense, positively charged centre of an atom, containing the protons and neutrons." },
    { term: "Proton", definition: "A particle in the nucleus with a relative mass of 1 and a relative charge of $+1$." },
    { term: "Neutron", definition: "A particle in the nucleus with a relative mass of 1 and no charge (relative charge 0)." },
    { term: "Electron", definition: "A very light particle with a relative charge of $-1$ that moves in shells around the nucleus." },
    { term: "Atomic number", definition: "The number of protons in the nucleus of an atom. It identifies the element." },
    { term: "Mass number", definition: "The total number of protons and neutrons in the nucleus of an atom." },
    { term: "Electron shell", definition: "An energy level around the nucleus that can hold a limited number of electrons: 2 in the first shell, then 8 in each of the next two." },
  ],
  concepts: [
    {
      id: "esc9-u2-atomic-particles",
      title: "Protons, neutrons and electrons",
      skill: "State the relative mass and charge of the subatomic particles and use atomic number and mass number to find the number of each particle in an atom.",
      lesson: {
        sections: [
          {
            heading: "Inside the atom",
            body: "An atom has a tiny **nucleus** at its centre, surrounded by electrons. The nucleus contains **protons** and **neutrons**. Almost all of the mass of the atom is in the nucleus, because protons and neutrons are far heavier than electrons.\n\n- Proton: relative mass 1, relative charge $+1$\n- Neutron: relative mass 1, relative charge 0\n- Electron: relative mass very small (about $\\frac{1}{1836}$), relative charge $-1$\n\nAn atom has no overall charge because it contains equal numbers of protons and electrons, so the positive and negative charges cancel.",
          },
          {
            heading: "Atomic number and mass number",
            body: "The **atomic number** is the number of protons. It is different for every element. In a neutral atom the number of electrons equals the number of protons.\n\nThe **mass number** is the number of protons plus the number of neutrons. To find the number of neutrons, subtract the atomic number from the mass number.\n\nAn atom is written as ${}^{23}_{11}\\text{Na}$: the top number (23) is the mass number and the bottom number (11) is the atomic number.",
          },
        ],
        keyFormulas: [
          { name: "Number of protons", statement: "protons = atomic number" },
          { name: "Number of electrons (neutral atom)", statement: "electrons = protons = atomic number" },
          { name: "Number of neutrons", statement: "neutrons = mass number $-$ atomic number" },
        ],
        workedExample: {
          problem: "A neutral atom of potassium has atomic number 19 and mass number 39. State the number of protons, electrons and neutrons.",
          solution: "Protons = atomic number = 19. A neutral atom has equal numbers of protons and electrons, so electrons = 19. Neutrons = mass number $-$ atomic number $= 39 - 19 = 20$.",
        },
      },
      questions: [
        {
          id: "esc9-u2-atomic-particles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which particle in an atom has a relative charge of $-1$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nucleus" },
              { id: "b", text: "Proton" },
              { id: "c", text: "Neutron" },
              { id: "d", text: "Electron" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Relative charges", statement: "Proton $+1$, neutron 0, electron $-1$." },
            ],
            steps: [
              { reasoning: "Electrons carry the negative charge in an atom.", working: "\\text{electron: relative charge } -1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Electron",
            commonErrors: ["Choosing the neutron because it is thought of as 'negative' or 'neutral-negative'.", "Choosing the nucleus, which is positive overall because it contains protons."],
            examinerNote: "B1 for electron.",
          },
        },
        {
          id: "esc9-u2-atomic-particles-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "An atom of sodium has atomic number 11 and mass number 23. Calculate the number of neutrons in the atom.",
          response: { type: "numeric", parts: [{ label: "Number of neutrons", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Neutrons", statement: "neutrons = mass number $-$ atomic number" },
            ],
            steps: [
              { reasoning: "The mass number is the number of protons plus neutrons, so subtract the number of protons (the atomic number).", working: "\\text{neutrons} = 23 - 11", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$ neutrons",
            commonErrors: ["Adding the two numbers to get 34.", "Giving 11, the number of protons, or 23, the mass number."],
            examinerNote: "M1 for 23 $-$ 11. A1 for 12 cao.",
          },
        },
        {
          id: "esc9-u2-atomic-particles-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A neutral atom has a mass number of 40 and contains 22 neutrons. Determine the number of electrons in the atom and use the periodic table to name the element.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Protons", statement: "protons = mass number $-$ neutrons" },
              { kind: "definition", name: "Neutral atom", statement: "A neutral atom has equal numbers of protons and electrons." },
            ],
            steps: [
              { reasoning: "The mass number is protons plus neutrons, so subtract the neutrons to find the protons.", working: "\\text{protons} = 40 - 22 = 18", marks: 1, markCode: "M" },
              { reasoning: "The atom is neutral, so the number of electrons equals the number of protons.", working: "\\text{electrons} = 18", marks: 1, markCode: "A" },
              { reasoning: "The element with atomic number 18 is argon.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "18 electrons; the element is argon.",
            commonErrors: ["Using 40 as the number of protons.", "Giving calcium, which has mass number 40 but atomic number 20 (and so 20 neutrons)."],
            examinerNote: "Allow ecf for the element if the number of protons is calculated incorrectly but the correct element for that number is named.",
          },
        },
        {
          id: "esc9-u2-atomic-particles-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A lithium atom can be written as ${}^{7}_{3}\\text{Li}$.",
          parts: [
            { label: "a", prompt: "Give the relative mass and the relative charge of an electron.", marks: 2 },
            { label: "b", prompt: "Calculate the number of neutrons in this lithium atom.", marks: 2 },
            { label: "c", prompt: "Work out the relative charge of the nucleus of this atom.", marks: 2 },
            { label: "d", prompt: "Explain why a lithium atom has no overall charge.", marks: 2 },
            { label: "e", prompt: "Explain why almost all of the mass of the atom is in the nucleus.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Relative mass and charge", statement: "Proton: mass 1, charge $+1$. Neutron: mass 1, charge 0. Electron: mass about $\\frac{1}{1836}$, charge $-1$." },
              { kind: "formula", name: "Neutrons", statement: "neutrons = mass number $-$ atomic number" },
              { kind: "principle", name: "Neutral atoms", statement: "In a neutral atom, number of protons = number of electrons." },
            ],
            steps: [
              { part: "a", reasoning: "State the relative mass of an electron.", working: "\\text{very small (about } \\tfrac{1}{1836}\\text{)}", marks: 1, markCode: "B" },
              { part: "a", reasoning: "State the relative charge.", working: "-1", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Subtract the atomic number from the mass number.", working: "7 - 3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "= 4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Only the protons are charged in the nucleus (neutrons have no charge), and there are 3 protons each of charge $+1$.", working: "3 \\times (+1)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "= +3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The atom has equal numbers of protons and electrons (3 of each).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The $+1$ charges of the protons cancel the $-1$ charges of the electrons.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Protons and neutrons each have a relative mass of 1 and are both in the nucleus.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Electrons have a negligible mass compared with protons and neutrons.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) very small (about $\\frac{1}{1836}$); $-1$ (b) 4 (c) $+3$ (d) equal numbers of protons and electrons, so charges cancel (e) protons and neutrons are in the nucleus and each have mass 1; electrons have negligible mass.",
            commonErrors: ["Giving the relative mass of an electron as 1.", "Including the neutrons as charged in (c) to give a nucleus charge of $+7$.", "Saying in (d) that the neutrons cancel the protons."],
            examinerNote: "(a) Allow 0 or negligible for the mass. (c) Allow 3+ and ecf from an incorrect number of protons. (d) Reject 'the number of protons equals the number of neutrons'.",
          },
        },
      ],
    },
    {
      id: "esc9-u2-electron-arrangement",
      title: "Electron arrangement",
      skill: "Write the electron arrangement of the first 20 elements and link it to the group and period of an element.",
      lesson: {
        sections: [
          {
            heading: "Filling the shells",
            body: "Electrons occupy **shells** around the nucleus. They fill the shell closest to the nucleus first.\n\n- First shell: up to 2 electrons\n- Second shell: up to 8 electrons\n- Third shell: up to 8 electrons (for the first 20 elements)\n\nThe electron arrangement is written as numbers separated by full stops. Chlorine has 17 electrons, so its arrangement is 2.8.7. Calcium has 20 electrons, so its arrangement is 2.8.8.2.",
          },
          {
            heading: "Links to the periodic table",
            body: "The number of occupied shells is the **period** number. The number of electrons in the outer shell is the **group** number (for Groups 1 to 7). Sodium, 2.8.1, has three shells and one outer electron, so it is in Period 3, Group 1.\n\nElements in the same group have the same number of outer electrons, which is why they react in similar ways. Group 0 elements have a full outer shell, so they are very unreactive.",
          },
        ],
        keyFormulas: [
          { name: "Shell capacity", statement: "2, 8, 8 for the first three shells (first 20 elements)" },
          { name: "Group number", statement: "group = number of electrons in the outer shell (Groups 1 to 7)" },
          { name: "Period number", statement: "period = number of occupied shells" },
        ],
        workedExample: {
          problem: "Write the electron arrangement of sulfur (atomic number 16) and state its group and period.",
          solution: "Sulfur has 16 electrons. Fill the shells in order: 2 + 8 + 6 = 16, so the arrangement is 2.8.6. There are three shells, so it is in Period 3. There are 6 outer electrons, so it is in Group 6.",
        },
      },
      questions: [
        {
          id: "esc9-u2-electron-arrangement-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the maximum number of electrons that the first shell of an atom can hold?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "1" },
              { id: "c", text: "8" },
              { id: "d", text: "18" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Shell capacity", statement: "The first shell holds a maximum of 2 electrons; the second and third hold up to 8 (first 20 elements)." },
            ],
            steps: [
              { reasoning: "The shell nearest the nucleus is filled first and holds only 2 electrons.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 2",
            commonErrors: ["Choosing 8, which is the capacity of the second shell.", "Choosing 18, a number used for larger shells at higher levels."],
            examinerNote: "B1 for 2.",
          },
        },
        {
          id: "esc9-u2-electron-arrangement-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Phosphorus has atomic number 15. Work out the number of electrons in the outer shell of a phosphorus atom.",
          response: { type: "numeric", parts: [{ label: "Electrons in outer shell", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Filling shells", statement: "Fill the first shell with 2 electrons, then the second with 8, then the third." },
            ],
            steps: [
              { reasoning: "A neutral phosphorus atom has 15 electrons. Fill 2, then 8, and place the remainder in the third shell.", working: "2.8.5 \\quad (15 - 2 - 8 = 5)", marks: 1, markCode: "M" },
              { reasoning: "The outer shell is the last one filled.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$ electrons (arrangement 2.8.5)",
            commonErrors: ["Giving 15, the total number of electrons.", "Giving 3, the number of shells (the period number)."],
            examinerNote: "M1 for 2.8.5 seen. A1 for 5.",
          },
        },
        {
          id: "esc9-u2-electron-arrangement-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calcium has atomic number 20. Use the electron arrangement of calcium to explain why it is in Group 2 and Period 4 of the periodic table.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Group number", statement: "For Groups 1 to 7, the group number equals the number of outer-shell electrons." },
              { kind: "principle", name: "Period number", statement: "The period number equals the number of occupied electron shells." },
            ],
            steps: [
              { reasoning: "Work out the electron arrangement by filling the shells in order.", working: "20 = 2 + 8 + 8 + 2 \\;\\Rightarrow\\; 2.8.8.2", marks: 1, markCode: "B" },
              { reasoning: "Calcium has 2 electrons in its outer shell.", marks: 1, markCode: "B" },
              { reasoning: "The number of outer electrons gives the group, so calcium is in Group 2.", marks: 1, markCode: "R" },
              { reasoning: "Calcium has four occupied shells, so it is in Period 4.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Arrangement 2.8.8.2: 2 outer electrons so Group 2; 4 shells so Period 4.",
            commonErrors: ["Writing 2.8.10 because the third shell is filled beyond 8 at this level.", "Mixing up the rules: using the number of shells for the group and the outer electrons for the period."],
            examinerNote: "Allow 'outer shell' for 'highest energy level'. Allow ecf for the group and period from an incorrect arrangement if the rules are applied correctly.",
          },
        },
        {
          id: "esc9-u2-electron-arrangement-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The table gives the atomic numbers of some elements.\n\n- Oxygen: 8\n- Lithium: 3\n- Sodium: 11\n- Argon: 18\n- Aluminium: 13",
          parts: [
            { label: "a", prompt: "Write the electron arrangement of an oxygen atom.", marks: 1 },
            { label: "b", prompt: "State the group and the period of oxygen in the periodic table.", marks: 2 },
            { label: "c", prompt: "Argon is a very unreactive gas. Write the electron arrangement of argon and explain why it is unreactive.", marks: 3 },
            { label: "d", prompt: "An atom of element X has the electron arrangement 2.8.3. Work out the atomic number of X and name the element.", marks: 2 },
            { label: "e", prompt: "Lithium has the electron arrangement 2.1 and sodium has the electron arrangement 2.8.1. Explain why lithium and sodium have similar chemical properties.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Filling shells", statement: "Fill shells in order: 2, 8, 8." },
              { kind: "principle", name: "Group and period", statement: "Group = outer electrons (Groups 1 to 7); period = number of shells." },
              { kind: "principle", name: "Full outer shell", statement: "Atoms with a full outer shell are stable and unreactive." },
            ],
            steps: [
              { part: "a", reasoning: "Oxygen has 8 electrons: 2 in the first shell and 6 in the second.", working: "2.6", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Six outer electrons gives the group.", working: "\\text{Group 6}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Two occupied shells gives the period.", working: "\\text{Period 2}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Argon has 18 electrons.", working: "2.8.8", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Its outer shell is full.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "So argon atoms do not need to gain, lose or share electrons, making argon unreactive.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The atomic number is the total number of electrons in a neutral atom.", working: "2 + 8 + 3 = 13", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The element with atomic number 13 is aluminium.", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Both atoms have one electron in their outer shell.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Chemical properties depend on the number of outer-shell electrons, so elements in the same group (Group 1) react in similar ways.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 2.6 (b) Group 6, Period 2 (c) 2.8.8; full outer shell so does not gain, lose or share electrons (d) 13, aluminium (e) both have one outer electron (Group 1).",
            commonErrors: ["Writing 2.8 for oxygen or putting all 8 electrons in the second shell.", "Saying argon is unreactive because it has 8 protons.", "Saying lithium and sodium are similar because they have the same number of shells."],
            examinerNote: "(a) Accept 2,6. (c) Allow 'stable' or 'complete outer shell' for 'full outer shell'. Reject 'argon has 8 electrons' as an explanation without reference to the outer shell.",
          },
        },
      ],
    },
  ],
};
