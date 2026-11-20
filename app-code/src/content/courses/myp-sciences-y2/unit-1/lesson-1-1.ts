import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "myps2-u1-lesson-1-1",
  code: "1-1",
  title: "Atoms, Elements and the Periodic Table",
  goal: "I CAN describe the structure of an atom, use the periodic table to find the group, period and type of an element, and write formulae and word equations for molecules and compounds.",
  standards: [
    "Criterion A: Knowing and understanding",
    "Criterion D: Reflecting on the impacts of science",
    "Key concept: Systems",
    "Related concept: Models",
  ],
  vocabulary: [
    { term: "Atom", definition: "The smallest particle of an element that still has the properties of that element." },
    { term: "Proton", definition: "A particle in the nucleus of an atom with a relative charge of +1 and a relative mass of 1." },
    { term: "Neutron", definition: "A particle in the nucleus of an atom with no charge and a relative mass of 1." },
    { term: "Electron", definition: "A very light particle with a relative charge of -1 that moves around the nucleus." },
    { term: "Atomic number", definition: "The number of protons in the nucleus of an atom. It identifies the element." },
    { term: "Compound", definition: "A pure substance made of two or more different elements chemically joined in a fixed ratio." },
    { term: "Molecule", definition: "A group of two or more atoms joined together by chemical bonds." },
  ],
  concepts: [
    {
      id: "myps2-u1-atomic-structure",
      title: "Atomic structure and the periodic table",
      skill: "Describe the particles in an atom, work out their numbers from the atomic number and mass number, and use groups, periods and the metal/non-metal divide.",
      lesson: {
        sections: [
          {
            heading: "Inside the atom",
            body: "Every atom has a tiny central **nucleus** containing **protons** and **neutrons**. **Electrons** move around the nucleus.\n\n| Particle | Relative charge | Relative mass |\n| --- | --- | --- |\n| Proton | +1 | 1 |\n| Neutron | 0 | 1 |\n| Electron | -1 | almost 0 |\n\nAn atom has no overall charge because it has **equal numbers of protons and electrons**, so the positive and negative charges cancel.",
          },
          {
            heading: "Atomic number and mass number",
            body: "The **atomic number** is the number of protons. It decides which element the atom is. The **mass number** is the total number of protons and neutrons.\n\n$$\\text{neutrons} = \\text{mass number} - \\text{atomic number}$$\n\nEach element has a symbol of one or two letters, such as H, C, Na and Cl. The first letter is always a capital.",
          },
          {
            heading: "The periodic table",
            body: "The periodic table arranges the elements in order of atomic number. A vertical column is a **group** and a horizontal row is a **period**. Elements in the same group have similar chemical properties.\n\nMost elements are **metals**: they are shiny, good conductors of heat and electricity, and can be bent into shape (malleable). **Non-metals** are usually dull and brittle when solid, are poor conductors and often have low melting points. Metals are found on the left and centre of the table, non-metals on the right.\n\nOur model of the atom has changed as scientists have gathered new evidence, which is why models are always open to revision.",
          },
        ],
        keyFormulas: [
          { name: "Atomic number", statement: "Number of protons (= number of electrons in a neutral atom)" },
          { name: "Mass number", statement: "Protons + neutrons" },
          { name: "Neutrons", statement: "$\\text{neutrons} = \\text{mass number} - \\text{atomic number}$" },
        ],
        workedExample: {
          problem: "A chlorine atom has atomic number 17 and mass number 35. State the number of protons, neutrons and electrons.",
          solution: "Protons = atomic number = 17. Electrons = protons in a neutral atom = 17. Neutrons = mass number - atomic number = $35 - 17 = 18$.",
        },
      },
      questions: [
        {
          id: "myps2-u1-atomic-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which particle has a negative charge and moves around the nucleus of an atom?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Proton" },
              { id: "b", text: "Neutron" },
              { id: "c", text: "Electron" },
              { id: "d", text: "Nucleus" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Electrons", statement: "Electrons have a relative charge of -1 and move around the nucleus." },
            ],
            steps: [
              { reasoning: "Only electrons are negative and found outside the nucleus. Protons are positive and neutrons are neutral; both are inside the nucleus.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Electron",
            commonErrors: ["Choosing neutron because the word sounds like 'negative'.", "Choosing nucleus, which is a region of the atom, not a particle."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "myps2-u1-atomic-structure-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A sodium atom has atomic number 11 and mass number 23.\n\nCalculate the number of electrons and the number of neutrons in one sodium atom.",
          response: {
            type: "numeric",
            parts: [
              { label: "Number of electrons", answer: 11, tolerance: 0 },
              { label: "Number of neutrons", answer: 12, tolerance: 0 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Neutral atoms", statement: "In a neutral atom the number of electrons equals the number of protons, which is the atomic number." },
              { kind: "formula", name: "Neutrons", statement: "$\\text{neutrons} = \\text{mass number} - \\text{atomic number}$" },
            ],
            steps: [
              { reasoning: "The atom is neutral, so electrons = protons = atomic number.", working: "\\text{electrons} = 11", marks: 1, markCode: "B" },
              { reasoning: "Subtract the atomic number from the mass number.", working: "\\text{neutrons} = 23 - 11 = 12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "11 electrons and 12 neutrons",
            commonErrors: ["Giving 23 as the number of neutrons (the mass number).", "Giving 34 by adding the atomic number and mass number."],
            examinerNote: "B1 for 11 electrons. A1 for 12 neutrons (allow 23 - 11 shown).",
          },
        },
        {
          id: "myps2-u1-atomic-structure-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An aluminium atom has atomic number 13 and mass number 27. A student says: \"The atom has 13 protons, so it has an overall charge of +13.\"\n\nExplain why the student is wrong and calculate the number of neutrons in the atom.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Neutral atoms", statement: "An atom has equal numbers of protons (+1) and electrons (-1), so it has no overall charge." },
              { kind: "formula", name: "Neutrons", statement: "$\\text{neutrons} = \\text{mass number} - \\text{atomic number}$" },
            ],
            steps: [
              { reasoning: "The atom also contains 13 electrons, equal to the number of protons.", marks: 1, markCode: "B" },
              { reasoning: "The charge of +13 from the protons is cancelled by the charge of -13 from the electrons, so the atom is neutral.", marks: 1, markCode: "R" },
              { reasoning: "Neutrons = mass number - atomic number.", working: "27 - 13", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "14\\text{ neutrons}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The atom has 13 electrons whose negative charge cancels the positive charge of the 13 protons, so the atom is neutral. It has 14 neutrons.",
            commonErrors: ["Forgetting that electrons have a negative charge.", "Thinking neutrons add charge.", "Giving 27 or 40 as the number of neutrons."],
            examinerNote: "B1 13 electrons oe. R1 charges cancel / equal numbers of positive and negative. M1 27 - 13. A1 14.",
          },
        },
        {
          id: "myps2-u1-atomic-structure-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A sulfur atom has atomic number 16 and mass number 32. Sodium (Na) is the element with atomic number 11. In the periodic table, sodium is in Group 1 and Period 3.",
          parts: [
            { label: "a", prompt: "Name the two types of particle found in the nucleus of an atom.", marks: 2 },
            { label: "b", prompt: "Calculate the number of protons, neutrons and electrons in the sulfur atom.", marks: 2 },
            { label: "c", prompt: "Explain what 'Group 1' and 'Period 3' tell you about where sodium is in the periodic table, and give one physical property of sodium as a metal.", marks: 2 },
            { label: "d", prompt: "Early models showed atoms as solid spheres. Later experiments showed that atoms have a small dense nucleus. Suggest why scientists change a model when new evidence is found.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Nucleus", statement: "The nucleus contains the protons and the neutrons of the atom." },
              { kind: "formula", name: "Neutrons", statement: "$\\text{neutrons} = \\text{mass number} - \\text{atomic number}$" },
              { kind: "principle", name: "Models", statement: "A scientific model is a simplified explanation that is revised when evidence does not fit it." },
            ],
            steps: [
              { part: "a", reasoning: "Protons.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Neutrons.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Protons = electrons = atomic number; neutrons = mass number - atomic number.", working: "\\text{neutrons} = 32 - 16 = 16", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State all three numbers.", working: "16\\text{ protons},\\ 16\\text{ neutrons},\\ 16\\text{ electrons}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Group 1 is the first vertical column and Period 3 is the third horizontal row.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "A metal property, for example shiny, good conductor of electricity or heat, or malleable.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The old model could not explain the new experimental results (evidence).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A better model explains all the evidence, so scientists revise the model to make it more accurate; models are not final truths.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Protons and neutrons (b) 16 protons, 16 neutrons, 16 electrons (c) Group 1 is a vertical column, Period 3 is the third row; metals conduct electricity (d) New evidence the old model cannot explain means the model must be revised to fit all the evidence.",
            commonErrors: ["In (a) including electrons, which are outside the nucleus.", "In (b) giving 32 neutrons.", "In (c) mixing up groups (columns) and periods (rows)."],
            examinerNote: "(a) Ignore 'nucleons'. (c) Allow 'it is on the left of the table' for the position mark only if column and row are not given. (d) Allow oe.",
          },
        },
        {
          id: "myps2-u1-atomic-structure-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the mass number of an atom tell you?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The number of protons in the nucleus" },
              { id: "b", text: "The total number of protons and neutrons in the nucleus" },
              { id: "c", text: "The number of electrons in the atom" },
              { id: "d", text: "The overall charge of the atom" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mass number", statement: "The mass number is the total number of protons and neutrons in the nucleus." },
            ],
            steps: [
              { reasoning: "The mass number counts protons plus neutrons; the atomic number counts protons only.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The total number of protons and neutrons in the nucleus",
            commonErrors: ["Confusing the mass number with the atomic number (protons only)."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u1-atomic-structure-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which set of properties best describes a non-metal such as sulfur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shiny, malleable and a good conductor of electricity" },
              { id: "b", text: "Dull, brittle and a poor conductor of electricity" },
              { id: "c", text: "Shiny, malleable and a poor conductor of electricity" },
              { id: "d", text: "Dull, malleable and a good conductor of heat" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Non-metals", statement: "Non-metals are usually dull and brittle when solid and are poor conductors of heat and electricity." },
            ],
            steps: [
              { reasoning: "Non-metals are dull, brittle and poor conductors; metals are shiny, malleable and good conductors.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Dull, brittle and a poor conductor of electricity",
            commonErrors: ["Mixing up the properties of metals and non-metals."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u1-atomic-structure-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "An atom has 6 protons and 6 neutrons. What is its mass number?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6" },
              { id: "b", text: "12" },
              { id: "c", text: "18" },
              { id: "d", text: "36" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mass number", statement: "mass number = protons + neutrons" },
            ],
            steps: [
              { reasoning: "Add the protons and neutrons: $6 + 6 = 12$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 12",
            commonErrors: ["Giving 6, which is only the number of protons (the atomic number)."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u1-atomic-structure-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "A potassium atom has atomic number 19 and mass number 39.\n\nFind the number of protons, neutrons and electrons in one potassium atom.",
          response: {
            type: "numeric",
            parts: [
              { label: "Number of protons", answer: 19, tolerance: 0 },
              { label: "Number of neutrons", answer: 20, tolerance: 0 },
              { label: "Number of electrons", answer: 19, tolerance: 0 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Neutral atoms", statement: "In a neutral atom the number of electrons equals the number of protons, which is the atomic number." },
              { kind: "formula", name: "Neutrons", statement: "$\\text{neutrons} = \\text{mass number} - \\text{atomic number}$" },
            ],
            steps: [
              { reasoning: "Protons equal the atomic number.", working: "19\\text{ protons}", marks: 1, markCode: "B" },
              { reasoning: "Neutrons are the mass number minus the atomic number.", working: "39 - 19 = 20\\text{ neutrons}", marks: 1, markCode: "B" },
              { reasoning: "The atom is neutral, so electrons equal protons.", working: "19\\text{ electrons}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "19 protons, 20 neutrons, 19 electrons",
            commonErrors: ["Giving 39 as the number of neutrons.", "Forgetting that a neutral atom has the same number of electrons as protons."],
            examinerNote: "B1 for each correct number.",
          },
        },
        {
          id: "myps2-u1-atomic-structure-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A nitrogen atom has atomic number 7 and mass number 14.\n\nCalculate the number of neutrons in one nitrogen atom.",
          response: {
            type: "numeric",
            parts: [{ label: "Number of neutrons", answer: 7, tolerance: 0, unit: "neutrons" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Neutrons", statement: "$\\text{neutrons} = \\text{mass number} - \\text{atomic number}$" },
            ],
            steps: [
              { reasoning: "Subtract the atomic number from the mass number.", working: "14 - 7", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 7\\text{ neutrons}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7 neutrons",
            commonErrors: ["Adding 14 and 7 to give 21.", "Giving 14, the mass number."],
            examinerNote: "M1 for 14 - 7 oe. A1 for 7.",
          },
        },
        {
          id: "myps2-u1-atomic-structure-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A calcium atom has atomic number 20 and mass number 40. A chlorine atom has atomic number 17 and mass number 35.\n\nCalculate the number of neutrons in one atom of calcium and in one atom of chlorine.",
          response: {
            type: "numeric",
            parts: [
              { label: "Neutrons in calcium", answer: 20, tolerance: 0 },
              { label: "Neutrons in chlorine", answer: 18, tolerance: 0 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Neutrons", statement: "$\\text{neutrons} = \\text{mass number} - \\text{atomic number}$" },
            ],
            steps: [
              { reasoning: "Calcium neutrons = mass number - atomic number.", working: "40 - 20 = 20", marks: 1, markCode: "B" },
              { reasoning: "Chlorine neutrons = mass number - atomic number.", working: "35 - 17 = 18", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Calcium: 20 neutrons; chlorine: 18 neutrons",
            commonErrors: ["Subtracting the numbers the wrong way round for chlorine (17 - 35).", "Giving the mass numbers as the answers."],
            examinerNote: "B1 for each correct number with working.",
          },
        },
        {
          id: "myps2-u1-atomic-structure-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A neutral atom has 22 protons and 26 neutrons.\n\nFind the atomic number, the mass number and the number of electrons in this atom.",
          response: {
            type: "numeric",
            parts: [
              { label: "Atomic number", answer: 22, tolerance: 0 },
              { label: "Mass number", answer: 48, tolerance: 0 },
              { label: "Number of electrons", answer: 22, tolerance: 0 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Atomic number", statement: "The atomic number is the number of protons in the nucleus." },
              { kind: "formula", name: "Mass number", statement: "mass number = protons + neutrons" },
              { kind: "property", name: "Neutral atoms", statement: "A neutral atom has equal numbers of protons and electrons." },
            ],
            steps: [
              { reasoning: "The atomic number equals the number of protons.", working: "22", marks: 1, markCode: "B" },
              { reasoning: "Add protons and neutrons for the mass number.", working: "22 + 26 = 48", marks: 1, markCode: "B" },
              { reasoning: "The atom is neutral, so electrons equal protons.", working: "22\\text{ electrons}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Atomic number 22, mass number 48, 22 electrons",
            commonErrors: ["Giving 26 as the atomic number.", "Giving 48 electrons instead of 22."],
            examinerNote: "B1 for each correct value.",
          },
        },
        {
          id: "myps2-u1-atomic-structure-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "A student is learning to use the periodic table.\n\nExplain what a group and a period are, and describe **two** differences between metals and non-metals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Groups and periods", statement: "A group is a vertical column and a period is a horizontal row of the periodic table." },
              { kind: "property", name: "Metals and non-metals", statement: "Metals are shiny, malleable and good conductors; non-metals are dull, brittle and poor conductors." },
            ],
            steps: [
              { reasoning: "A group is a vertical column; elements in the same group have similar chemical properties.", marks: 1, markCode: "B" },
              { reasoning: "A period is a horizontal row; elements are arranged in order of increasing atomic number across and down the table.", marks: 1, markCode: "B" },
              { reasoning: "One metal property: shiny, good conductor of heat or electricity, or malleable.", marks: 1, markCode: "B" },
              { reasoning: "One non-metal property: dull, brittle when solid, or poor conductor.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "A group is a vertical column (similar properties) and a period is a horizontal row. Metals are shiny, malleable and good conductors; non-metals are dull, brittle and poor conductors.",
            commonErrors: ["Swapping the definitions of group and period.", "Giving the same property for both metals and non-metals."],
            examinerNote: "B1 for each definition. B1 for each valid contrasting property; ignore 'hardness' alone.",
          },
        },
        {
          id: "myps2-u1-atomic-structure-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Scientists once pictured the atom as a solid sphere. Later experiments suggested a small dense nucleus with electrons around it, and our understanding has kept changing since.\n\nExplain why scientists are willing to change a model when new evidence is found, and suggest one reason why a model is never a final 'truth'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Models", statement: "A scientific model is a simplified explanation that must fit all the evidence; it is revised when new evidence does not fit." },
            ],
            steps: [
              { reasoning: "A model is a simplified explanation, not a complete description of reality.", marks: 1, markCode: "B" },
              { reasoning: "New experiments can produce evidence that the old model cannot explain.", marks: 1, markCode: "B" },
              { reasoning: "When this happens, scientists revise the model so it explains all the evidence, making it a better, more accurate model.", marks: 1, markCode: "R" },
              { reasoning: "New evidence may appear again later, so the model may need further revision; science is always open to improvement.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Models are simplified explanations that must fit the evidence. New evidence that does not fit forces a revision, making the model more accurate. Models can always be improved, so they are never final truths.",
            commonErrors: ["Saying the old model was 'wrong' and useless, rather than a useful simplification.", "Saying scientists never change their minds."],
            examinerNote: "B1 model = simplified explanation oe. B1 new evidence. R1 revision improves accuracy / explains evidence. R1 future revision possible oe. Allow oe.",
          },
        },
        {
          id: "myps2-u1-atomic-structure-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement about the periodic table is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Groups are horizontal rows and periods are vertical columns." },
              { id: "b", text: "Elements in the same group have similar chemical properties." },
              { id: "c", text: "The elements are arranged in order of decreasing atomic number." },
              { id: "d", text: "All non-metals are found on the left of the table." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Periodic table", statement: "Groups are vertical columns with similar properties; periods are horizontal rows; elements are ordered by atomic number; non-metals are on the right." },
            ],
            steps: [
              { reasoning: "The other statements reverse groups and periods, reverse the order of atomic number, or misplace non-metals.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Elements in the same group have similar chemical properties.",
            commonErrors: ["Choosing (a) because rows sound like groups."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u1-atomic-structure-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A fluorine atom has atomic number 9 and mass number 19. How many neutrons does it contain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9" },
              { id: "b", text: "10" },
              { id: "c", text: "19" },
              { id: "d", text: "28" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Neutrons", statement: "$\\text{neutrons} = \\text{mass number} - \\text{atomic number}$" },
            ],
            steps: [
              { reasoning: "Neutrons = $19 - 9 = 10$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 10",
            commonErrors: ["Choosing 9, the atomic number (protons).", "Choosing 28 by adding 19 and 9."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u1-atomic-structure-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Calcium has atomic number 20 and mass number 40. Magnesium is in Group 2 and Period 3 of the periodic table. A student draws a model of the calcium atom as a solid sphere with no internal structure.",
          parts: [
            { label: "a", prompt: "State the number of protons, neutrons and electrons in a neutral calcium atom.", marks: 2 },
            { label: "b", prompt: "Calculate the mass of one calcium atom's nucleus in terms of relative mass units, and state the relative mass of its electrons.", marks: 2 },
            { label: "c", prompt: "Give **two** reasons why the student's solid-sphere model is incomplete.", marks: 2 },
            { label: "d", prompt: "Suggest one advantage of drawing a model of the atom instead of trying to picture it exactly.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Nucleus", statement: "The nucleus contains the protons and neutrons; electrons move around it." },
              { kind: "formula", name: "Mass number", statement: "mass number = protons + neutrons; each has relative mass 1" },
              { kind: "principle", name: "Models", statement: "Models simplify reality to explain and predict; they are revised as evidence improves." },
            ],
            steps: [
              { part: "a", reasoning: "Protons and electrons equal the atomic number (20); neutrons = mass number - atomic number.", working: "20\\text{ protons},\\ 40 - 20 = 20\\text{ neutrons},\\ 20\\text{ electrons}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State all three numbers.", working: "20\\text{ p},\\ 20\\text{ n},\\ 20\\text{ e}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The nucleus contains 20 protons and 20 neutrons, each of relative mass 1.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Relative mass of the nucleus = $20 + 20 = 40$; electrons have almost zero relative mass.", working: "40\\text{ u};\\ \\text{electrons} \\approx 0", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The atom has a nucleus containing protons and neutrons, with electrons outside it.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The atom is mostly empty space and has no overall charge (equal protons and electrons); a solid sphere cannot show this.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "A model is simple enough to understand and use, and it can be changed when new evidence appears.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "It helps predict behaviour (for example chemical properties) and communicates ideas without needing the full complexity.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 20 protons, 20 neutrons, 20 electrons (b) Nucleus relative mass 40; electrons almost zero (c) Atom has a nucleus and electrons outside it, and is mostly empty space / neutral (d) Models are simple, useful for prediction and can be revised.",
            commonErrors: ["In (a) giving 40 neutrons.", "In (b) including electron mass in the nucleus.", "In (c) only saying the model is 'old'."],
            examinerNote: "(b) Allow '40 u' or 'relative mass 40'. (d) Allow any valid advantage, for example simplicity or testability.",
          },
        },
      ],
    },
    {
      id: "myps2-u1-compounds-formulae",
      title: "Molecules, compounds and formulae",
      skill: "Distinguish elements, molecules and compounds, count atoms in a formula and write word equations.",
      lesson: {
        sections: [
          {
            heading: "Elements, molecules and compounds",
            body: "An **element** contains only one type of atom. Some elements exist as molecules, such as oxygen $\\text{O}_2$ and nitrogen $\\text{N}_2$.\n\nA **compound** contains two or more different elements chemically joined in a fixed ratio. Water, $\\text{H}_2\\text{O}$, is a compound; its properties are very different from hydrogen and oxygen. A compound can only be separated into its elements by a chemical reaction. Many compounds, such as water and carbon dioxide, are molecules.",
          },
          {
            heading: "Chemical formulae",
            body: "A formula shows which elements are in a substance and how many atoms of each. A small number written below and after a symbol applies to that symbol only. A big number in front applies to the whole formula.\n\n- $\\text{H}_2\\text{O}$: 2 hydrogen atoms and 1 oxygen atom, 3 atoms in total.\n- $\\text{CO}_2$: 1 carbon atom and 2 oxygen atoms.\n- $3\\text{CO}_2$: three molecules, so 3 carbon atoms and 6 oxygen atoms, 9 atoms in total.",
          },
          {
            heading: "Word equations",
            body: "A word equation shows the **reactants** (starting substances) on the left and the **products** (new substances) on the right, joined by an arrow.\n\n$$\\text{magnesium} + \\text{oxygen} \\rightarrow \\text{magnesium oxide}$$\n\nNames often help: a metal and oxygen make an **oxide**; the ending '-ide' usually shows a compound of two elements.",
          },
        ],
        keyFormulas: [
          { name: "Subscript", statement: "A small number after a symbol multiplies that atom only" },
          { name: "Large number in front", statement: "Multiplies every atom in the formula" },
          { name: "Word equation", statement: "$\\text{reactants} \\rightarrow \\text{products}$" },
        ],
        workedExample: {
          problem: "Count the atoms of each element in $\\text{C}_2\\text{H}_5\\text{OH}$ (ethanol).",
          solution: "Carbon: 2. Hydrogen: 5 + 1 = 6 (the H after the O counts too). Oxygen: 1. Total = 2 + 6 + 1 = 9 atoms.",
        },
      },
      questions: [
        {
          id: "myps2-u1-compounds-formulae-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following substances is a compound?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen, $\\text{O}_2$" },
              { id: "b", text: "Water, $\\text{H}_2\\text{O}$" },
              { id: "c", text: "Iron, Fe" },
              { id: "d", text: "Nitrogen, $\\text{N}_2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Compound", statement: "A compound contains two or more different elements chemically joined." },
            ],
            steps: [
              { reasoning: "Water contains two different elements, hydrogen and oxygen, joined together.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Water, $\\text{H}_2\\text{O}$",
            commonErrors: ["Choosing oxygen or nitrogen because they are molecules; they contain only one type of atom, so they are elements."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u1-compounds-formulae-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Glucose has the formula $\\text{C}_6\\text{H}_{12}\\text{O}_6$.\n\nCalculate the total number of atoms in one molecule of glucose.",
          response: {
            type: "numeric",
            parts: [{ label: "Total number of atoms", answer: 24, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reading formulae", statement: "Each subscript gives the number of atoms of the symbol before it; add them for the total." },
            ],
            steps: [
              { reasoning: "Add the numbers of carbon, hydrogen and oxygen atoms.", working: "6 + 12 + 6", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 24\\text{ atoms}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "24 atoms",
            commonErrors: ["Counting the three elements and giving 3.", "Multiplying the subscripts instead of adding them."],
            examinerNote: "M1 for 6 + 12 + 6 oe. A1 for 24.",
          },
        },
        {
          id: "myps2-u1-compounds-formulae-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Magnesium burns in oxygen with a bright white flame to form a white powder, magnesium oxide.\n\nWrite the word equation for the reaction and explain why magnesium oxide is a compound and not a mixture of magnesium and oxygen.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Compound", statement: "A compound has atoms of different elements chemically joined in a fixed ratio, and its properties differ from the elements in it." },
            ],
            steps: [
              { reasoning: "Reactants on the left: magnesium and oxygen.", working: "\\text{magnesium} + \\text{oxygen}", marks: 1, markCode: "B" },
              { reasoning: "Product on the right.", working: "\\rightarrow \\text{magnesium oxide}", marks: 1, markCode: "B" },
              { reasoning: "In magnesium oxide the magnesium and oxygen atoms are chemically joined (bonded), not just mixed together.", marks: 1, markCode: "B" },
              { reasoning: "It has different properties from the elements and a fixed ratio of atoms, and it cannot be separated by physical methods.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$\\text{magnesium} + \\text{oxygen} \\rightarrow \\text{magnesium oxide}$. It is a compound because the atoms are chemically bonded in a fixed ratio and the properties are different from the elements.",
            commonErrors: ["Writing the arrow the wrong way round.", "Saying a compound is 'two elements mixed together'; they are chemically joined."],
            examinerNote: "B1 both reactants. B1 product. B1 chemically joined / bonded oe. R1 different properties / fixed ratio / cannot be separated physically oe.",
          },
        },
        {
          id: "myps2-u1-compounds-formulae-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Methane, $\\text{CH}_4$, is the main gas in natural gas used for cooking and heating. When methane burns in oxygen it forms carbon dioxide and water.",
          parts: [
            { label: "a", prompt: "State the number of atoms of each element in one molecule of methane.", marks: 2 },
            { label: "b", prompt: "Write a word equation for the combustion of methane in oxygen.", marks: 2 },
            { label: "c", prompt: "Calculate the total number of atoms in 3 molecules of methane, $3\\text{CH}_4$.", marks: 2 },
            { label: "d", prompt: "Natural gas is burned in many homes and power stations. Explain why burning it affects the atmosphere.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reading formulae", statement: "Subscripts give atoms of the preceding symbol; a number in front multiplies the whole formula." },
              { kind: "principle", name: "Word equations", statement: "Reactants are written on the left, products on the right of the arrow." },
            ],
            steps: [
              { part: "a", reasoning: "One carbon atom (no subscript means 1).", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Four hydrogen atoms.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Both reactants correct: methane and oxygen.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Both products correct: carbon dioxide and water.", working: "\\text{methane} + \\text{oxygen} \\rightarrow \\text{carbon dioxide} + \\text{water}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "One molecule has 1 + 4 = 5 atoms; multiply by 3.", working: "3 \\times 5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "= 15\\text{ atoms}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Burning the methane (fuel) produces carbon dioxide, which is released into the air.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Carbon dioxide is a greenhouse gas that traps heat, so more of it contributes to global warming and climate change.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 1 carbon atom, 4 hydrogen atoms (b) methane + oxygen -> carbon dioxide + water (c) 15 atoms (d) Burning methane releases carbon dioxide, a greenhouse gas that contributes to climate change.",
            commonErrors: ["In (a) giving 4 atoms in total or forgetting the carbon.", "In (c) giving 12 by multiplying only the hydrogen, or 5 by forgetting the 3.", "In (d) confusing global warming with damage to the ozone layer."],
            examinerNote: "(b) Allow products in either order. Reject 'carbon monoxide'. (d) Allow oe for greenhouse effect; reject 'acid rain' for the carbon dioxide mark.",
          },
        },
        {
          id: "myps2-u1-compounds-formulae-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a molecule of an element rather than a compound?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\text{CO}_2$" },
              { id: "b", text: "$\\text{H}_2\\text{O}$" },
              { id: "c", text: "$\\text{N}_2$" },
              { id: "d", text: "$\\text{NaCl}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Element and molecule", statement: "An element contains only one type of atom; a molecule of an element, such as $\\text{N}_2$, contains atoms of only that element." },
            ],
            steps: [
              { reasoning: "Nitrogen $\\text{N}_2$ contains only nitrogen atoms. The others contain two different elements, so they are compounds.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $\\text{N}_2$",
            commonErrors: ["Thinking any molecule with two atoms must be a compound."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "myps2-u1-compounds-formulae-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the formula $2\\text{H}_2\\text{O}$ represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two hydrogen atoms and one oxygen atom" },
              { id: "b", text: "Two molecules of water" },
              { id: "c", text: "One molecule of hydrogen and one of oxygen" },
              { id: "d", text: "Two atoms of hydrogen and two atoms of oxygen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reading formulae", statement: "A large number in front of a formula multiplies every atom in that formula." },
            ],
            steps: [
              { reasoning: "The 2 in front multiplies the whole $\\text{H}_2\\text{O}$ unit, giving two water molecules (4 hydrogen and 2 oxygen atoms).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Two molecules of water",
            commonErrors: ["Reading only the subscript and ignoring the large 2."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u1-compounds-formulae-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many hydrogen atoms are there in 3 molecules of water, $3\\text{H}_2\\text{O}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "3" },
              { id: "c", text: "6" },
              { id: "d", text: "9" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reading formulae", statement: "Each $\\text{H}_2\\text{O}$ has 2 hydrogen atoms; the 3 in front multiplies the whole formula." },
            ],
            steps: [
              { reasoning: "Hydrogen atoms = $3 \\times 2 = 6$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 6",
            commonErrors: ["Giving 3 (only the multiplier) or 2 (only the subscript)."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "myps2-u1-compounds-formulae-q8",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Propane has the formula $\\text{C}_3\\text{H}_8$ (used in camping gas).\n\nFind the number of carbon atoms, the number of hydrogen atoms and the total number of atoms in one molecule of propane.",
          response: {
            type: "numeric",
            parts: [
              { label: "Carbon atoms", answer: 3, tolerance: 0 },
              { label: "Hydrogen atoms", answer: 8, tolerance: 0 },
              { label: "Total atoms", answer: 11, tolerance: 0 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reading formulae", statement: "Subscripts give the atoms of the preceding symbol; add them for the total." },
            ],
            steps: [
              { reasoning: "Carbon: the subscript after C.", working: "3\\text{ carbon}", marks: 1, markCode: "B" },
              { reasoning: "Hydrogen: the subscript after H.", working: "8\\text{ hydrogen}", marks: 1, markCode: "B" },
              { reasoning: "Add for the total.", working: "3 + 8 = 11\\text{ atoms}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3 carbon, 8 hydrogen, 11 atoms in total",
            commonErrors: ["Giving 38 by multiplying the subscripts.", "Counting the two elements and giving 2."],
            examinerNote: "B1 for each correct value.",
          },
        },
        {
          id: "myps2-u1-compounds-formulae-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Carbon dioxide has the formula $\\text{CO}_2$.\n\nFind the number of carbon atoms, the number of oxygen atoms and the total number of atoms in $4\\text{CO}_2$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Carbon atoms", answer: 4, tolerance: 0 },
              { label: "Oxygen atoms", answer: 8, tolerance: 0 },
              { label: "Total atoms", answer: 12, tolerance: 0 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reading formulae", statement: "The 4 multiplies the whole formula: each $\\text{CO}_2$ has 1 carbon and 2 oxygen atoms." },
            ],
            steps: [
              { reasoning: "Carbon atoms = $4 \\times 1$.", working: "4\\text{ carbon}", marks: 1, markCode: "B" },
              { reasoning: "Oxygen atoms = $4 \\times 2$.", working: "8\\text{ oxygen}", marks: 1, markCode: "B" },
              { reasoning: "Add for the total.", working: "4 + 8 = 12\\text{ atoms}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4 carbon, 8 oxygen, 12 atoms in total",
            commonErrors: ["Giving 6 atoms (only one $\\text{CO}_2$).", "Giving 2 oxygen atoms by ignoring the 4."],
            examinerNote: "B1 for each correct value.",
          },
        },
        {
          id: "myps2-u1-compounds-formulae-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A sample contains 5 molecules of water, $5\\text{H}_2\\text{O}$.\n\nCalculate the total number of atoms in the sample.",
          response: {
            type: "numeric",
            parts: [{ label: "Total number of atoms", answer: 15, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reading formulae", statement: "One $\\text{H}_2\\text{O}$ has 3 atoms; multiply by the number of molecules." },
            ],
            steps: [
              { reasoning: "Atoms per molecule = $2 + 1 = 3$; multiply by 5.", working: "3 \\times 5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 15\\text{ atoms}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15 atoms",
            commonErrors: ["Giving 5 by counting only the molecules.", "Giving 10 by counting only hydrogen atoms."],
            examinerNote: "M1 for $3 \\times 5$ oe. A1 for 15.",
          },
        },
        {
          id: "myps2-u1-compounds-formulae-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Ethanol has the formula $\\text{C}_2\\text{H}_5\\text{OH}$.\n\nCalculate the number of hydrogen atoms in 6 molecules of ethanol.",
          response: {
            type: "numeric",
            parts: [{ label: "Hydrogen atoms", answer: 36, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reading formulae", statement: "In $\\text{C}_2\\text{H}_5\\text{OH}$ the hydrogen total is $5 + 1 = 6$ per molecule; multiply by the number of molecules." },
            ],
            steps: [
              { reasoning: "Hydrogen per molecule = $5 + 1 = 6$; multiply by 6 molecules.", working: "6 \\times 6", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 36\\text{ hydrogen atoms}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "36 hydrogen atoms",
            commonErrors: ["Using only 5 hydrogen per molecule and giving 30.", "Counting the oxygen as hydrogen."],
            examinerNote: "M1 for $6 \\times 6$ oe (allow 5+1 identified). A1 for 36.",
          },
        },
        {
          id: "myps2-u1-compounds-formulae-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "A student is sorting substances into elements, molecules of elements, compounds and mixtures.\n\nFor each of the following — iron (Fe), oxygen ($\\text{O}_2$), water ($\\text{H}_2\\text{O}$) and salty water — state which category it belongs to and give a reason.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Element, molecule and compound", statement: "An element has one type of atom; a molecule groups bonded atoms; a compound has two or more different elements chemically joined in a fixed ratio." },
            ],
            steps: [
              { reasoning: "Iron is an element: it contains only iron atoms.", marks: 1, markCode: "B" },
              { reasoning: "Oxygen $\\text{O}_2$ is a molecule of an element: two oxygen atoms bonded together.", marks: 1, markCode: "B" },
              { reasoning: "Water is a compound: hydrogen and oxygen atoms chemically joined in a fixed ratio.", marks: 1, markCode: "B" },
              { reasoning: "Salty water is a mixture: salt and water are physically mixed and can be separated by evaporation.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Iron: element. Oxygen $\\text{O}_2$: molecule of an element. Water: compound. Salty water: mixture.",
            commonErrors: ["Calling $\\text{O}_2$ a compound because it has two atoms.", "Calling salty water a compound because it contains dissolved salt."],
            examinerNote: "B1 for each correct category with reason; R1 for the mixture explanation.",
          },
        },
        {
          id: "myps2-u1-compounds-formulae-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A strip of iron is left in damp air. After a week it is heavier and has a reddish-brown coating. A student says: \"The iron must have gained mass from nothing — that breaks conservation of mass.\"\n\nExplain what actually happened, name the type of reaction, and write a word equation for it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Oxidation", statement: "Oxidation is a reaction in which a substance gains oxygen; rusting of iron is slow oxidation needing oxygen and water." },
              { kind: "law", name: "Conservation of mass", statement: "The total mass of reactants equals the total mass of products." },
            ],
            steps: [
              { reasoning: "The iron reacted with oxygen from the air (and water) to form iron oxide, rust.", marks: 1, markCode: "B" },
              { reasoning: "This is oxidation / slow oxidation.", marks: 1, markCode: "B" },
              { reasoning: "The product has the mass of the iron plus the oxygen that joined it, so the solid is heavier. The mass came from the oxygen in the air; no mass was created.", marks: 1, markCode: "R" },
              { reasoning: "Word equation: iron + oxygen (+ water) -> iron oxide.", working: "\\text{iron} + \\text{oxygen} \\rightarrow \\text{iron oxide}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "The iron was oxidised by oxygen (and water) in the air to form iron oxide, rust. The extra mass is the oxygen that joined the iron. iron + oxygen -> iron oxide.",
            commonErrors: ["Saying mass was created or destroyed.", "Writing the equation with hydrogen or 'rust' as a reactant."],
            examinerNote: "B1 oxidation. R1 mass of oxygen added / from air. B1 equation with iron, oxygen and iron oxide; allow '+ water' in reactants.",
          },
        },
        {
          id: "myps2-u1-compounds-formulae-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a word equation, what does the arrow ($\\rightarrow$) show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The substances are mixed together" },
              { id: "b", text: "The reactants change into the products" },
              { id: "c", text: "The products are heavier than the reactants" },
              { id: "d", text: "The reaction goes backwards" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Word equations", statement: "Reactants are written on the left of the arrow and products on the right; the arrow shows the change." },
            ],
            steps: [
              { reasoning: "The arrow separates reactants (left) from products (right) and shows that reactants change into products.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The reactants change into the products",
            commonErrors: ["Thinking the arrow means 'plus'."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u1-compounds-formulae-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "When methane, $\\text{CH}_4$, burns completely in oxygen, which word equation is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "methane + oxygen -> carbon dioxide + hydrogen" },
              { id: "b", text: "methane + oxygen -> carbon monoxide + water" },
              { id: "c", text: "methane + oxygen -> carbon dioxide + water" },
              { id: "d", text: "methane + carbon dioxide -> oxygen + water" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Complete combustion", statement: "When a hydrocarbon burns completely in oxygen, the products are carbon dioxide and water." },
            ],
            steps: [
              { reasoning: "Complete combustion of a hydrocarbon gives carbon dioxide and water; the reactants are methane and oxygen.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** methane + oxygen -> carbon dioxide + water",
            commonErrors: ["Choosing (b), which is incomplete combustion producing toxic carbon monoxide."],
            examinerNote: "B1 for choice (c). Reject carbon monoxide as the product of complete combustion.",
          },
        },
        {
          id: "myps2-u1-compounds-formulae-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Ethanol, $\\text{C}_2\\text{H}_5\\text{OH}$, is used as a fuel in some countries. When it burns completely in oxygen it forms carbon dioxide and water.",
          parts: [
            { label: "a", prompt: "State the number of atoms of each element in one molecule of ethanol.", marks: 2 },
            { label: "b", prompt: "Write a word equation for the complete combustion of ethanol.", marks: 2 },
            { label: "c", prompt: "Calculate the total number of atoms in 4 molecules of ethanol.", marks: 2 },
            { label: "d", prompt: "Ethanol is sometimes described as a 'carbon-neutral' fuel because the plants it is made from absorb carbon dioxide as they grow. Evaluate this claim for a developing country that is replacing firewood with ethanol.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reading formulae", statement: "Subscripts give atoms of the preceding symbol; add the H in OH to the $\\text{H}_5$." },
              { kind: "property", name: "Complete combustion", statement: "Hydrocarbons burning completely give carbon dioxide and water." },
            ],
            steps: [
              { part: "a", reasoning: "Carbon: 2; oxygen: 1 (the O in OH).", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Hydrogen: $5 + 1 = 6$.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Both reactants correct: ethanol and oxygen.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Both products correct: carbon dioxide and water.", working: "\\text{ethanol} + \\text{oxygen} \\rightarrow \\text{carbon dioxide} + \\text{water}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "One molecule has $2 + 6 + 1 = 9$ atoms; multiply by 4.", working: "9 \\times 4 = 36\\text{ atoms}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "36\\text{ atoms}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Benefit: burning ethanol releases carbon dioxide that was recently absorbed by the plants, and it can reduce deforestation from firewood.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Limit/judgement: growing and processing the crop still needs land, water, fertiliser and energy, so it is only partly carbon-neutral; land used for fuel may compete with food crops.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 2 carbon, 6 hydrogen, 1 oxygen (b) ethanol + oxygen -> carbon dioxide + water (c) 36 atoms (d) Carbon-neutral in part because plants absorb the CO2, but growing and processing still needs resources and land.",
            commonErrors: ["In (a) giving 5 hydrogen (forgetting the H after O).", "In (c) giving 9 atoms (one molecule) or 18 (two).", "In (d) accepting 'carbon-neutral' without any evaluation of limits."],
            examinerNote: "(c) M1 for 9 x 4 or 36 seen. A1 for 36. (d) Allow any balanced evaluation with at least one benefit and one limit.",
          },
        },
      ],
    },
  ],
};
