import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "myps3-u1-lesson-1-1",
  code: "1-1",
  title: "Atomic Structure and the Periodic Table",
  goal: "I CAN describe the structure of atoms, use atomic and mass numbers, draw electron arrangements, and describe trends in the periodic table.",
  standards: [
    "Key concept: Systems",
    "MYP Sciences: Matter",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Proton", definition: "A positively charged particle in the nucleus of an atom; its number defines the element." },
    { term: "Neutron", definition: "A neutral particle in the nucleus; it has almost the same mass as a proton." },
    { term: "Electron", definition: "A negatively charged particle that occupies shells (energy levels) around the nucleus." },
    { term: "Atomic number", definition: "The number of protons in an atom's nucleus; it is unique to each element." },
    { term: "Mass number", definition: "The total number of protons and neutrons in the nucleus." },
    { term: "Electron shell", definition: "An energy level around the nucleus that can hold a limited number of electrons (2 in the first shell, up to 8 in outer shells)." },
  ],
  concepts: [
    {
      id: "myps3-u1-atomic-structure",
      title: "Atomic structure and electron arrangement",
      skill: "Describe protons, neutrons and electrons, use atomic and mass numbers, and draw electron arrangements.",
      lesson: {
        sections: [
          {
            heading: "Inside the atom",
            body: "An atom has a tiny **nucleus** containing protons (positive) and neutrons (neutral), surrounded by electrons (negative) in shells. The nucleus contains almost all the mass but is extremely small compared with the whole atom.",
          },
          {
            heading: "Atomic number and mass number",
            body: "The **atomic number** is the number of protons — it identifies the element. The **mass number** is protons + neutrons. For an atom with atomic number 11 and mass number 23: 11 protons, 11 electrons (neutral atom), and $23-11=12$ neutrons.",
          },
          {
            heading: "Electron arrangement",
            body: "Electrons fill shells from the inside out. The first shell holds up to 2 electrons, the second and third up to 8 each. Sodium (atomic number 11) has arrangement 2, 8, 1: two electrons in shell 1, eight in shell 2, one in shell 3. The electrons in the outermost shell are the **valence electrons** and determine chemical behaviour.",
          },
        ],
        keyFormulas: [
          { name: "Neutrons", statement: "$\\text{neutrons}=\\text{mass number}-\\text{atomic number}$" },
          { name: "Neutral atom", statement: "$\\text{electrons}=\\text{protons}=\\text{atomic number}$" },
          { name: "Shell capacities", statement: "First shell: 2; second and third shells: up to 8 each" },
        ],
        workedExample: {
          problem: "An atom of chlorine has atomic number 17 and mass number 35. State the numbers of protons, neutrons and electrons, and draw its electron arrangement.",
          solution: "Protons = 17 (atomic number), neutrons = $35-17=18$, electrons = 17 (neutral). Arrangement: 2, 8, 7.",
        },
      },
      questions: [
        {
          id: "myps3-u1-atomic-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which particle has a positive charge?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neutron" },
              { id: "b", text: "Electron" },
              { id: "c", text: "Proton" },
              { id: "d", text: "Nucleus" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Subatomic particles", statement: "Protons are positive, electrons negative, neutrons neutral." },
            ],
            steps: [
              { reasoning: "Protons carry a positive charge; the nucleus is positive overall but is not a particle.", working: "\\text{proton}=+1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Proton",
            commonErrors: ["Choosing the nucleus — it is positive but contains protons and neutrons."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "myps3-u1-atomic-structure-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "An atom of magnesium has atomic number 12 and mass number 24. State the numbers of protons, neutrons and electrons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Atomic number", statement: "Number of protons; equals electrons in a neutral atom." },
              { kind: "definition", name: "Mass number", statement: "Protons + neutrons." },
            ],
            steps: [
              { reasoning: "Protons = atomic number = 12; electrons = 12 (neutral).", working: "p=12,\\ e=12", marks: 1, markCode: "M" },
              { reasoning: "Neutrons = mass number − atomic number.", working: "n=24-12=12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12 protons, 12 neutrons, 12 electrons",
            commonErrors: ["Using mass number for electrons.", "Forgetting the atom is neutral."],
            examinerNote: "M1 for protons/electrons, A1 for neutrons.",
          },
        },
        {
          id: "myps3-u1-atomic-structure-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Draw the electron arrangement of an atom with atomic number 15, and state how many electrons are in its outermost shell.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Electron shells", statement: "First shell holds 2, second and third hold up to 8 each." },
            ],
            steps: [
              { reasoning: "Fill shells in order: 2 in shell 1, 8 in shell 2.", working: "2+8=10", marks: 1, markCode: "M" },
              { reasoning: "Remaining 5 electrons go in shell 3.", working: "15-10=5", marks: 1, markCode: "M" },
              { reasoning: "State arrangement and valence electrons.", working: "2,8,5;\\ 5\\text{ valence electrons}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Arrangement 2, 8, 5; 5 electrons in the outermost shell",
            commonErrors: ["Putting 8 in the first shell.", "Writing 2,8,5 but miscounting valence electrons."],
            examinerNote: "M1 for correct filling, M1 for remaining count, A1 for valence count.",
          },
        },
        {
          id: "myps3-u1-atomic-structure-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two atoms are described below.",
          parts: [
            { label: "a", prompt: "Atom P: atomic number 8, mass number 16. State the numbers of protons, neutrons and electrons.", marks: 2 },
            { label: "b", prompt: "Atom Q: atomic number 8, mass number 18. State the numbers of protons, neutrons and electrons.", marks: 2 },
            { label: "c", prompt: "Explain why atoms P and Q are the same element but are different isotopes.", marks: 2 },
            { label: "d", prompt: "Draw the electron arrangement of atom P.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Isotope", statement: "Atoms of the same element with different numbers of neutrons." },
              { kind: "definition", name: "Electron shells", statement: "First shell holds 2, second holds up to 8." },
            ],
            steps: [
              { part: "a", reasoning: "Protons = 8, electrons = 8 (neutral), neutrons = 16−8 = 8.", working: "p=8,\\ n=8,\\ e=8", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State all three.", working: "8\\text{ each}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Protons = 8, electrons = 8, neutrons = 18−8 = 10.", working: "p=8,\\ n=10,\\ e=8", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State all three.", working: "8\\text{ protons},\\ 10\\text{ neutrons},\\ 8\\text{ electrons}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Both have 8 protons, so both are oxygen; they differ only in neutron number.", working: "8\\text{ protons each, different neutrons}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclude they are isotopes.", working: "\\text{isotopes of oxygen}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Fill shells: 2 then 6.", working: "2,6", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the arrangement.", working: "2,6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 8 protons, 8 neutrons, 8 electrons (b) 8 protons, 10 neutrons, 8 electrons (c) same protons (oxygen) but different neutrons — isotopes (d) 2, 6",
            commonErrors: ["Thinking different mass numbers mean different elements.", "In (d), writing 2,8 instead of 2,6."],
            examinerNote: "M1 A1 per part; R1 R1 for isotope explanation.",
          },
        },
        {
          id: "myps3-u1-atomic-structure-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which subatomic particle has no electric charge?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neutron" },
              { id: "b", text: "Electron" },
              { id: "c", text: "Proton" },
              { id: "d", text: "Nucleus" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Subatomic particles", statement: "Protons are positive, electrons negative and neutrons neutral." },
            ],
            steps: [
              { reasoning: "Neutrons carry no charge; protons and electrons are charged.", working: "\\text{neutron}=0", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Neutron",
            commonErrors: ["Choosing the nucleus — it is a region containing charged particles, not a particle."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u1-atomic-structure-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The mass number of an atom equals the total number of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neutrons only" },
              { id: "b", text: "Protons only" },
              { id: "c", text: "Protons and electrons" },
              { id: "d", text: "Protons and neutrons" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mass number", statement: "Total number of protons and neutrons in the nucleus." },
            ],
            steps: [
              { reasoning: "Mass number counts the nucleons: protons plus neutrons.", working: "\\text{mass number}=p+n", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Protons and neutrons",
            commonErrors: ["Including electrons — they have negligible mass."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u1-atomic-structure-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An atom has atomic number 6 and mass number 12. Calculate the number of neutrons in its nucleus.",
          response: { type: "numeric", parts: [{ label: "Neutrons", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Neutrons", statement: "Neutrons = mass number − atomic number" },
            ],
            steps: [
              { reasoning: "Subtract atomic number from mass number.", working: "n=12-6=6", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "6\\text{ neutrons}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$ neutrons",
            commonErrors: ["Adding instead of subtracting."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-atomic-structure-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "An atom of aluminium has atomic number 13 and mass number 27. Calculate the numbers of protons and neutrons.",
          response: { type: "numeric", parts: [{ label: "Protons", answer: 13 }, { label: "Neutrons", answer: 14 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Atomic number", statement: "Number of protons in the nucleus." },
              { kind: "formula", name: "Neutrons", statement: "Neutrons = mass number − atomic number" },
            ],
            steps: [
              { reasoning: "Protons equal the atomic number: 13.", working: "p=13", marks: 1, markCode: "M" },
              { reasoning: "Neutrons = 27 − 13 = 14.", working: "n=27-13=14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$13$ protons and $14$ neutrons",
            commonErrors: ["Using mass number for the proton count."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-atomic-structure-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the electron arrangement of a sodium atom (atomic number 11)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2, 7, 2" },
              { id: "b", text: "8, 2, 1" },
              { id: "c", text: "2, 8, 1" },
              { id: "d", text: "2, 8, 2" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electron shells", statement: "Shells fill from the inside out: 2, then up to 8, then up to 8." },
            ],
            steps: [
              { reasoning: "11 electrons fill 2, then 8, leaving 1 for the third shell.", working: "2+8+1=11", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 2, 8, 1",
            commonErrors: ["Putting 8 electrons in the first shell."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "myps3-u1-atomic-structure-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "An atom has atomic number 19. How many electron shells does it have, and how many electrons are in its outermost shell?",
          response: { type: "numeric", parts: [{ label: "Shells", answer: 4 }, { label: "Valence electrons", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electron shells", statement: "First shell holds 2; second and third hold up to 8 each." },
            ],
            steps: [
              { reasoning: "Fill shells in order: 2, then 8, then 8 — that accounts for 18 electrons.", working: "2+8+8=18", marks: 1, markCode: "M" },
              { reasoning: "The 19th electron goes in a fourth shell: arrangement 2, 8, 8, 1 — 4 shells and 1 valence electron.", working: "2,8,8,1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$ shells; $1$ electron in the outermost shell",
            commonErrors: ["Answering 3 shells — that is sodium, not potassium."],
            examinerNote: "M1 for shell filling, A1 for both answers.",
          },
        },
        {
          id: "myps3-u1-atomic-structure-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "An isotope of chlorine has atomic number 17 and mass number 37. Calculate its number of neutrons and state how it differs from chlorine-35, which has 18 neutrons.",
          response: { type: "numeric", parts: [{ label: "Neutrons", answer: 20 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Neutrons", statement: "Neutrons = mass number − atomic number" },
            ],
            steps: [
              { reasoning: "Neutrons = 37 − 17 = 20.", working: "n=37-17=20", marks: 1, markCode: "M" },
              { reasoning: "It has 2 more neutrons than chlorine-35 (20 vs 18) but the same 17 protons.", working: "20-18=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20$ neutrons — two more than chlorine-35",
            commonErrors: ["Thinking different neutron numbers make a different element."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-atomic-structure-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Atoms X and Y have the same number of protons but different numbers of neutrons. What are X and Y?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Compounds" },
              { id: "b", text: "Allotropes" },
              { id: "c", text: "Isotopes" },
              { id: "d", text: "Ions" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Isotope", statement: "Atoms of the same element with different numbers of neutrons." },
            ],
            steps: [
              { reasoning: "Same protons → same element; different neutrons → isotopes.", working: "\\text{same }Z,\\ \\text{different }N", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Isotopes",
            commonErrors: ["Choosing ions — those differ in electron number, not neutrons."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "myps3-u1-atomic-structure-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Magnesium (atomic number 12) has electron arrangement 2, 8, 2. How many electrons are in its outermost shell?",
          response: { type: "numeric", parts: [{ label: "Valence electrons", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Valence electrons", statement: "Electrons in the outermost shell determine chemical behaviour." },
            ],
            steps: [
              { reasoning: "The outermost shell is the third shell; the arrangement ends in 2.", working: "2,8,2", marks: 1, markCode: "M" },
              { reasoning: "So there are 2 electrons in the outermost shell.", working: "2\\text{ valence electrons}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$ electrons",
            commonErrors: ["Adding all the electrons instead of reading the last shell."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-atomic-structure-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An element has electron arrangement 2, 8, 7. Determine its atomic number and the number of electrons in its outermost shell.",
          response: { type: "numeric", parts: [{ label: "Atomic number", answer: 17 }, { label: "Valence electrons", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Atomic number", statement: "Number of protons, equal to the number of electrons in a neutral atom." },
            ],
            steps: [
              { reasoning: "Total electrons = 2 + 8 + 7 = 17, so the atomic number is 17.", working: "2+8+7=17", marks: 1, markCode: "M" },
              { reasoning: "The outermost shell contains 7 electrons.", working: "7\\text{ valence electrons}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Atomic number $17$; $7$ valence electrons",
            commonErrors: ["Counting shells instead of electrons for the atomic number."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-atomic-structure-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which part of an atom contains almost all of its mass?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Electron shells" },
              { id: "b", text: "The electron cloud" },
              { id: "c", text: "The nucleus" },
              { id: "d", text: "The outer shell" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Nucleus", statement: "Tiny central region containing protons and neutrons; holds almost all the atom's mass." },
            ],
            steps: [
              { reasoning: "Protons and neutrons are heavy; electrons have negligible mass.", working: "\\text{nucleus}=\\text{almost all mass}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** The nucleus",
            commonErrors: ["Choosing electron shells — electrons are very light."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u1-atomic-structure-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Carbon-12 and carbon-14 are isotopes of carbon. Explain two ways in which their atoms are similar and one way in which they differ.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Isotope", statement: "Atoms of the same element with different numbers of neutrons." },
            ],
            steps: [
              { reasoning: "Both have 6 protons, so both are carbon.", working: "6\\text{ protons each}", marks: 1, markCode: "R" },
              { reasoning: "Both neutral atoms have 6 electrons, giving identical chemical properties.", working: "6\\text{ electrons each}", marks: 1, markCode: "R" },
              { reasoning: "They differ in neutron number: carbon-12 has 6 neutrons, carbon-14 has 8.", working: "6\\text{ vs }8\\text{ neutrons}", marks: 1, markCode: "R" },
              { reasoning: "Conclude they are isotopes with different mass numbers (12 and 14).", working: "\\text{isotopes}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Similar: same 6 protons and 6 electrons. Different: neutron number (6 vs 8) and mass number",
            commonErrors: ["Saying they are different elements because of different mass numbers."],
            examinerNote: "R1 R1 R1 A1.",
          },
        },
      ],
    },
    {
      id: "myps3-u1-periodic-table",
      title: "The periodic table: groups and periods",
      skill: "Describe the layout of the periodic table, groups and periods, and trends in metals, non-metals and reactivity.",
      lesson: {
        sections: [
          {
            heading: "Layout",
            body: "The **periodic table** arranges elements by atomic number. **Periods** are rows (left to right); **groups** are columns (top to bottom). Elements in the same group have the same number of valence electrons, so they have similar chemical properties.",
          },
          {
            heading: "Metals and non-metals",
            body: "Most elements are **metals** (left and centre of the table). **Non-metals** are on the right. A diagonal line of **metalloids** (e.g. silicon, germanium) separates them and shows properties of both.",
          },
          {
            heading: "Reactivity trends",
            body: "In **Group 1** (alkali metals), reactivity **increases** down the group as atoms get larger and lose their single valence electron more easily. In **Group 7** (halogens), reactivity **decreases** down the group as atoms get larger and it is harder to gain an electron. **Group 0** (noble gases) are unreactive because their outer shell is full.",
          },
        ],
        keyFormulas: [
          { name: "Group and valence electrons", statement: "Elements in the same group have the same number of valence electrons" },
          { name: "Group 1 reactivity", statement: "Increases down the group" },
          { name: "Group 7 reactivity", statement: "Decreases down the group" },
        ],
        workedExample: {
          problem: "Why is sodium more reactive than lithium?",
          solution: "Both are in Group 1 with one valence electron. Sodium's outer electron is further from the nucleus and more shielded, so it is lost more easily — sodium is more reactive.",
        },
      },
      questions: [
        {
          id: "myps3-u1-periodic-table-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Elements in the same group of the periodic table have the same number of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neutrons" },
              { id: "b", text: "Protons" },
              { id: "c", text: "Valence electrons" },
              { id: "d", text: "Shells" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Group", statement: "Elements in the same group have the same number of valence electrons." },
            ],
            steps: [
              { reasoning: "Same group → same valence electrons → similar chemical properties.", working: "\\text{valence electrons}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Valence electrons",
            commonErrors: ["Choosing protons — atomic number varies within a group."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "myps3-u1-periodic-table-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Predict whether potassium (Group 1) is more or less reactive than sodium (Group 1), and explain your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Group 1 reactivity trend", statement: "Reactivity increases down Group 1." },
            ],
            steps: [
              { reasoning: "Potassium is below sodium in Group 1.", working: "\\text{K below Na}", marks: 1, markCode: "M" },
              { reasoning: "Reactivity increases down the group; potassium's valence electron is easier to lose.", working: "\\text{K more reactive than Na}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Potassium is more reactive than sodium",
            commonErrors: ["Saying potassium is less reactive because it is heavier."],
            examinerNote: "M1 for trend, A1 for conclusion.",
          },
        },
        {
          id: "myps3-u1-periodic-table-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Noble gases (Group 0) are very unreactive. Explain why, using electron arrangement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Noble gases", statement: "Group 0 elements have a full outer electron shell." },
            ],
            steps: [
              { reasoning: "Noble gases have complete outer shells (2 for helium, 8 for others).", working: "\\text{full outer shell}", marks: 1, markCode: "M" },
              { reasoning: "A full outer shell is stable, so they do not need to gain, lose or share electrons.", working: "\\text{stable configuration}", marks: 1, markCode: "R" },
              { reasoning: "Conclude they are unreactive.", working: "\\text{unreactive}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Noble gases have full outer shells, making them stable and unreactive",
            commonErrors: ["Saying they have no electrons."],
            examinerNote: "M1 for full shell, R1 for stability, A1 for conclusion.",
          },
        },
        {
          id: "myps3-u1-periodic-table-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Consider the elements lithium (Li, Z=3), sodium (Na, Z=11) and potassium (K, Z=19), all in Group 1.",
          parts: [
            { label: "a", prompt: "Write the electron arrangement of each element.", marks: 3 },
            { label: "b", prompt: "Explain why they are all in the same group.", marks: 2 },
            { label: "c", prompt: "Predict the order of reactivity from most to least reactive, and justify your answer.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Electron arrangement", statement: "Shells fill 2, then 8, then remaining." },
              { kind: "principle", name: "Group 1 reactivity trend", statement: "Reactivity increases down Group 1." },
            ],
            steps: [
              { part: "a", reasoning: "Li: 2,1. Na: 2,8,1. K: 2,8,8,1.", working: "Li=2,1;\\ Na=2,8,1;\\ K=2,8,8,1", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State each correctly.", working: "Li:2,1\\ Na:2,8,1\\ K:2,8,8,1", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Check potassium's arrangement: 19 electrons → 2,8,8,1.", working: "K=2,8,8,1", marks: 1, markCode: "A" },
              { part: "b", reasoning: "All have exactly one valence electron.", working: "1\\text{ valence electron each}", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Same group because same valence electron count.", working: "\\text{same group}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reactivity increases down Group 1: K > Na > Li.", working: "K>Na>Li", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Justify: outer electron is further from nucleus and more shielded down the group.", working: "\\text{easier to lose valence electron}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "State the order clearly.", working: "\\text{K most reactive, Li least}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Li: 2,1; Na: 2,8,1; K: 2,8,8,1 (b) all have 1 valence electron (c) K > Na > Li; reactivity increases down Group 1",
            commonErrors: ["Writing potassium as 2,8,1 (wrong — that's sodium).", "Reversing the reactivity trend."],
            examinerNote: "M1 A1 A1 for arrangements, R1 R1 for group explanation, M1 R1 A1 for reactivity.",
          },
        },
        {
          id: "myps3-u1-periodic-table-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the periodic table, groups are arranged:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In columns, from top to bottom" },
              { id: "b", text: "In diagonal lines" },
              { id: "c", text: "In rows, from left to right" },
              { id: "d", text: "Randomly by mass" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Group", statement: "A vertical column of elements in the periodic table." },
            ],
            steps: [
              { reasoning: "Groups are the vertical columns; periods are the horizontal rows.", working: "\\text{groups}=\\text{columns}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** In columns, from top to bottom",
            commonErrors: ["Confusing groups with periods — periods are rows."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "myps3-u1-periodic-table-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Most of the non-metals in the periodic table are found:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In the centre" },
              { id: "b", text: "At the bottom" },
              { id: "c", text: "On the right side" },
              { id: "d", text: "On the left side" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Non-metals", statement: "Non-metals are located on the right side of the periodic table." },
            ],
            steps: [
              { reasoning: "Metals occupy the left and centre; non-metals the right.", working: "\\text{non-metals on right}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** On the right side",
            commonErrors: ["Thinking non-metals are scattered throughout."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "myps3-u1-periodic-table-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which element is in the same group as sodium?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Calcium" },
              { id: "b", text: "Neon" },
              { id: "c", text: "Lithium" },
              { id: "d", text: "Argon" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Group", statement: "Elements in the same group have the same number of valence electrons." },
            ],
            steps: [
              { reasoning: "Lithium, sodium and potassium are all in Group 1 with one valence electron.", working: "\\text{Li, Na, K in Group 1}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Lithium",
            commonErrors: ["Choosing calcium — it is in Group 2."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "myps3-u1-periodic-table-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "An element is in period 3 of the periodic table. How many electron shells does a neutral atom of this element have?",
          response: { type: "numeric", parts: [{ label: "Shells", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Period and shells", statement: "The period number equals the number of occupied electron shells." },
            ],
            steps: [
              { reasoning: "Period 3 means electrons occupy three shells.", working: "\\text{period}=\\text{number of shells}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "3\\text{ shells}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$ shells",
            commonErrors: ["Counting valence electrons instead of shells."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-periodic-table-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many valence electrons does an element in Group 1 have?",
          response: { type: "numeric", parts: [{ label: "Valence electrons", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Group and valence electrons", statement: "Group 1 elements have one valence electron." },
            ],
            steps: [
              { reasoning: "Group 1 elements each have a single outermost electron.", working: "1\\text{ valence }e^-", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1$",
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-periodic-table-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "How does reactivity change as you move down Group 7 (the halogens)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It doubles at each step" },
              { id: "b", text: "It stays the same" },
              { id: "c", text: "It decreases" },
              { id: "d", text: "It increases" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Group 7 reactivity trend", statement: "Reactivity decreases down Group 7." },
            ],
            steps: [
              { reasoning: "Larger atoms down the group find it harder to gain an electron.", working: "\\text{reactivity decreases}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** It decreases",
            commonErrors: ["Applying the Group 1 trend to Group 7."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u1-periodic-table-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calcium has atomic number 20. Determine its group in the periodic table.",
          response: { type: "numeric", parts: [{ label: "Group", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Group and valence electrons", statement: "Group number (for Groups 1 and 2) equals the number of valence electrons." },
            ],
            steps: [
              { reasoning: "Electron arrangement of calcium (Z=20) is 2, 8, 8, 2 — two valence electrons.", working: "2,8,8,2", marks: 1, markCode: "M" },
              { reasoning: "Two valence electrons places it in Group 2.", working: "\\text{Group }2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Group $2$",
            commonErrors: ["Reading the period (4) instead of the group."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-periodic-table-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Compare the reactivity of chlorine, bromine and iodine, and explain the trend down Group 7.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Group 7 reactivity trend", statement: "Reactivity decreases down Group 7." },
            ],
            steps: [
              { reasoning: "Reactivity order: chlorine > bromine > iodine.", working: "Cl>Br>I", marks: 1, markCode: "R" },
              { reasoning: "Atoms get larger down the group; the outer shell is further from the nucleus and more shielded.", working: "\\text{larger atoms, more shielding}", marks: 1, markCode: "R" },
              { reasoning: "It is harder to attract and gain an electron, so reactivity decreases.", working: "\\text{harder to gain }e^-", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Chlorine > bromine > iodine; reactivity decreases down Group 7 because larger atoms find it harder to gain an electron",
            commonErrors: ["Reversing the trend by applying the Group 1 rule."],
            examinerNote: "R1 R1 A1.",
          },
        },
        {
          id: "myps3-u1-periodic-table-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Silicon lies on the diagonal boundary between metals and non-metals. How is it classified?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Metal" },
              { id: "b", text: "Metalloid" },
              { id: "c", text: "Non-metal" },
              { id: "d", text: "Noble gas" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Metalloid", statement: "Elements on the diagonal line showing properties of both metals and non-metals." },
            ],
            steps: [
              { reasoning: "The diagonal line contains metalloids such as silicon and germanium.", working: "\\text{metalloid}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Metalloid",
            commonErrors: ["Choosing non-metal — silicon shows some metallic properties."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "myps3-u1-periodic-table-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many elements are in period 2 of the periodic table?",
          response: { type: "numeric", parts: [{ label: "Elements", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Period layout", statement: "Period 2 runs from lithium (Z=3) to neon (Z=10)." },
            ],
            steps: [
              { reasoning: "Period 2 spans atomic numbers 3 to 10.", working: "10-3+1", marks: 1, markCode: "M" },
              { reasoning: "That is 8 elements.", working: "8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$",
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-periodic-table-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Chlorine has atomic number 17. Determine its period and its group.",
          response: { type: "numeric", parts: [{ label: "Period", answer: 3 }, { label: "Group", answer: 17 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electron arrangement", statement: "Period = number of shells; valence electrons give the group for Groups 1, 2 and 7." },
            ],
            steps: [
              { reasoning: "Electron arrangement of chlorine (Z=17) is 2, 8, 7 — three shells.", working: "2,8,7", marks: 1, markCode: "M" },
              { reasoning: "Three shells → period 3; seven valence electrons → Group 7 (group 17).", working: "\\text{period 3, group 17}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Period $3$, Group $17$ (Group 7)",
            commonErrors: ["Saying period 7 because the group number is 17."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u1-periodic-table-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An element is in Group 6 of the periodic table. How many electrons are in its outermost shell?",
          response: { type: "numeric", parts: [{ label: "Valence electrons", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Group and valence electrons", statement: "For Groups 1, 2, 6 and 7, the group number indicates the valence electrons." },
            ],
            steps: [
              { reasoning: "Elements in Group 6 have six electrons in their outermost shell.", working: "\\text{Group 6}\\Rightarrow 6\\text{ valence }e^-", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "6\\text{ electrons}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$ electrons",
            commonErrors: ["Using the period number instead of the group number."],
            examinerNote: "M1 A1.",
          },
        },
      ],
    },
  ],
};
