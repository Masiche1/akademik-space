import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "chemsl-u2-lesson-2-3",
  code: "2-3",
  title: "The Periodic Table and Trends",
  goal: "I CAN describe the organisation of the periodic table and explain trends in atomic radius, ionisation energy and electronegativity across periods and down groups.",
  standards: ["Topic 3.1", "Topic 3.2", "Paper 1", "Paper 2"],
  vocabulary: [
    { term: "Group", definition: "A vertical column of the periodic table; elements in the same group have the same number of valence electrons and similar chemical properties." },
    { term: "Period", definition: "A horizontal row of the periodic table; elements in the same period have the same number of occupied electron shells." },
    { term: "Metal", definition: "An element that is malleable, conducts heat and electricity, and typically forms positive ions; most elements are metals." },
    { term: "Non-metal", definition: "An element that is brittle (if solid), does not conduct electricity, and typically forms negative ions or covalent molecules." },
    { term: "Metalloid", definition: "An element with properties intermediate between metals and non-metals, e.g. silicon and germanium, lying along the diagonal staircase of the table." },
    { term: "Ionisation energy", definition: "The energy required to remove one mole of electrons from one mole of gaseous atoms to form one mole of gaseous $1+$ ions." },
  ],
  concepts: [
    {
      id: "chemsl-u2-periodic-organisation",
      title: "Organisation of the periodic table",
      skill: "Use electron configuration to locate an element in a group and period and classify it as metal, non-metal or metalloid.",
      lesson: {
        sections: [
          {
            heading: "Groups and periods",
            body: "The periodic table arranges elements by increasing atomic number. A period is a horizontal row: all elements in Period $n$ have $n$ occupied electron shells. A group is a vertical column: for main-group elements, the group number (1, 2, 13-18) equals the number of valence electrons, so members of a group share similar chemical properties.",
          },
          {
            heading: "Blocks and families",
            body: "Groups 1 and 2 are the alkali and alkaline earth metals; Group 17 is the halogens; Group 18 is the noble gases. Group 1 metals react vigorously with water, Group 17 non-metals form $-1$ ions and diatomic molecules, and Group 18 gases are unreactive because their outer shells are full. The $s$ block (Groups 1-2), $p$ block (Groups 13-18) and $d$ block (transition metals) reflect which subshell the valence electrons occupy.",
          },
          {
            heading: "Metals, non-metals and metalloids",
            body: "Most elements are metals (left and centre of the table, plus the transition block). Non-metals occupy the top-right region. A diagonal band of metalloids — boron, silicon, germanium, arsenic, antimony, tellurium — separates them, with properties intermediate between the two. The position of an element predicts whether it will form ionic or covalent compounds.",
          },
        ],
        keyFormulas: [
          { name: "Period number", statement: "$=\\text{number of occupied electron shells}$" },
          { name: "Group number (main group)", statement: "$=\\text{number of valence electrons}$" },
          { name: "Family trends", statement: "Group 1: react with water; Group 17: form $-1$ ions; Group 18: unreactive" },
        ],
        workedExample: {
          problem: "Element X has electron configuration $2.8.7$. State its group, period, family and classification.",
          solution: "Three occupied shells $\\Rightarrow$ Period 3. Seven valence electrons $\\Rightarrow$ Group 17 (halogens). It is a reactive non-metal that forms $\\mathrm{X^-}$ ions and diatomic molecules.",
        },
      },
      questions: [
        {
          id: "chemsl-u2-periodic-organisation-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which group of the periodic table contains the noble gases?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Group 1" },
              { id: "b", text: "Group 17" },
              { id: "c", text: "Group 18" },
              { id: "d", text: "Group 2" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Noble gases", statement: "Group 18 elements have full outer shells and are unreactive." },
            ],
            steps: [
              { reasoning: "Noble gases have 8 valence electrons (except He, 2) and are in the rightmost group.", working: "\\text{Group 18}", marks: 1, markCode: "M" },
              { reasoning: "Select the correct group.", working: "\\text{Group 18}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Group 18",
            commonErrors: ["Confusing Group 17 (halogens) with Group 18.", "Choosing Group 1 (alkali metals)."],
          },
        },
        {
          id: "chemsl-u2-periodic-organisation-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Why do elements in the same group of the periodic table have similar chemical properties?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They have the same number of electron shells" },
              { id: "b", text: "They have the same number of valence electrons" },
              { id: "c", text: "They have the same atomic mass" },
              { id: "d", text: "They are all metals" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Periodic law", statement: "Chemical properties are determined by the electron configuration, especially the valence electrons." },
            ],
            steps: [
              { reasoning: "Group members share the same number of valence electrons because the group number equals that count.", working: "\\text{same valence count}", marks: 1, markCode: "M" },
              { reasoning: "Valence electrons control bonding, so reactivity patterns repeat down the group.", working: "\\text{similar chemistry}", marks: 1, markCode: "R" },
              { reasoning: "Select the correct reason.", working: "\\text{same valence electrons}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** They have the same number of valence electrons",
            commonErrors: ["Choosing (a): same period means same shells, not same group.", "Choosing (c): isotopes differ in mass but not element."],
          },
        },
        {
          id: "chemsl-u2-periodic-organisation-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "An element Y has electron configuration $2.8.6$. (a) State its period and group. (b) State its family name. (c) Predict whether it is a metal or non-metal and justify your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Period and group", statement: "Period = number of occupied shells; group = number of valence electrons." },
            ],
            steps: [
              { reasoning: "Three occupied shells gives Period 3.", working: "\\text{Period 3}", marks: 1, markCode: "M" },
              { reasoning: "Six valence electrons gives Group 16.", working: "\\text{Group 16}", marks: 1, markCode: "A" },
              { reasoning: "Group 16 elements are the chalcogens (oxygen family), non-metals.", working: "\\text{Group 16 / chalcogen}", marks: 1, markCode: "A" },
              { reasoning: "Non-metal justification: it gains electrons to complete an octet, forming negative ions and covalent molecules; it lies on the right side of the table.", working: "\\text{gains }e^-\\Rightarrow\\text{non-metal}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Period 3, Group 16 (chalcogen family); non-metal because it gains electrons to complete its octet",
            commonErrors: ["Calling Group 16 'Group VI' inconsistently or confusing with Group 6 transition metals.", "Classifying it as a metalloid without justification."],
          },
        },
        {
          id: "chemsl-u2-periodic-organisation-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Calcium has atomic number $Z=20$ and electron configuration $2.8.8.2$.",
          parts: [
            { label: "a", prompt: "State its group, period and classification.", marks: 2 },
            { label: "b", prompt: "State the charge on the ion it forms and explain why.", marks: 2 },
            { label: "c", prompt: "Compare the reactivity of calcium with beryllium ($Z=4$, configuration $2.2$), both Group 2 metals.", marks: 2 },
            { label: "d", prompt: "Evaluate the claim that 'all Group 2 metals react with cold water at the same rate'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Group and period", statement: "Group = valence electrons; period = occupied shells." },
              { kind: "principle", name: "Group reactivity trend", statement: "Down a group, outer electrons are further from the nucleus and shielded, so they are lost more easily and reactivity increases." },
            ],
            steps: [
              { part: "a", reasoning: "Four occupied shells gives Period 4; two valence electrons gives Group 2; it is a metal.", working: "\\text{Group 2, Period 4, metal}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State all three correctly.", working: "\\text{Group 2 / Period 4 / metal}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Calcium loses its two valence electrons to achieve the argon configuration, forming $\\mathrm{Ca^{2+}}$.", working: "\\mathrm{Ca^{2+}}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explain: losing 2 electrons completes the octet and releases energy.", working: "\\text{octet completion}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Both have 2 valence electrons, so similar chemistry (both form $+2$ ions), but calcium is larger with more shielding, so its valence electrons are lost more easily.", working: "\\text{Ca more reactive than Be}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Calcium reacts more vigorously with water than beryllium.", working: "\\text{reactivity increases down group}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The claim is false: reactivity increases down the group because the outer electrons are progressively further from the nucleus and more shielded, so they are easier to remove.", working: "\\text{shielding and distance}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Thus beryllium reacts slowly (or not at all with cold water) while calcium and strontium react progressively faster.", working: "\\text{rate increases down group}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Group 2, Period 4, metal (b) $\\mathrm{Ca^{2+}}$ — loses 2 electrons to complete the octet (c) same valence count but Ca reacts more vigorously due to shielding and distance (d) false — reactivity increases down the group",
            commonErrors: ["In (d) agreeing that all Group 2 metals react at the same rate because they have the same valence electrons."],
            examinerNote: "Credit mention of increasing metallic character down the group in (c) or (d).",
          },
        },
        {
          id: "chemsl-u2-periodic-organisation-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An element has 7 valence electrons. In which group of the periodic table is it found?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Group 17" },
              { id: "b", text: "Group 7" },
              { id: "c", text: "Group 18" },
              { id: "d", text: "Group 2" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Group number", statement: "For main-group elements the group number equals the number of valence electrons." },
            ],
            steps: [
              { reasoning: "Seven valence electrons correspond to the halogen group.", working: "7\\Rightarrow\\text{Group 17}", marks: 1, markCode: "M" },
              { reasoning: "Select the correct group.", working: "\\text{Group 17}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Group 17",
            commonErrors: ["Choosing Group 7 (a transition-metal group).", "Choosing Group 18 (noble gases have 8 valence electrons)."],
          },
        },
        {
          id: "chemsl-u2-periodic-organisation-q6",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "An atom has electron configuration $2.8.6$. Determine (a) its atomic number, (b) its number of occupied shells, and (c) its number of valence electrons.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) atomic number", answer: 16 },
              { label: "(b) occupied shells", answer: 3 },
              { label: "(c) valence electrons", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Shell configuration", statement: "Each digit is the electron count of that shell; the total equals $Z$." },
            ],
            steps: [
              { reasoning: "Sum the digits for the atomic number.", working: "Z=2+8+6=16", marks: 1, markCode: "M" },
              { reasoning: "Count the digits to find occupied shells.", working: "2.8.6\\Rightarrow 3\\ \\text{shells}", marks: 1, markCode: "A" },
              { reasoning: "Valence electrons are those in the outermost shell.", working: "6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $Z=16$ (b) 3 shells (c) 6 valence electrons",
            commonErrors: ["Answering 14 for (a) (subtracting instead of adding).", "Counting subshells rather than shells for (b)."],
          },
        },
        {
          id: "chemsl-u2-periodic-organisation-q7",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Element Z is located in Period 3 and Group 17 of the periodic table. Determine (a) its atomic number, (b) its number of valence electrons, and (c) the number of electrons it gains to form a stable ion.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) atomic number", answer: 17 },
              { label: "(b) valence electrons", answer: 7 },
              { label: "(c) electrons gained", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Period and group", statement: "Group number equals valence electrons; Period 3 elements have three occupied shells." },
            ],
            steps: [
              { reasoning: "Period 3 Group 17 is chlorine, $Z=17$.", working: "Z=17\\ \\text{(Cl)}", marks: 1, markCode: "M" },
              { reasoning: "Group 17 elements have 7 valence electrons.", working: "7", marks: 1, markCode: "A" },
              { reasoning: "One electron completes the octet: $7+1=8$.", working: "8-7=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $Z=17$ (b) 7 valence electrons (c) gains 1 electron",
            commonErrors: ["Answering 18 for (a) (counting argon).", "Saying it loses 7 electrons instead of gaining 1."],
          },
        },
        {
          id: "chemsl-u2-periodic-organisation-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which family name corresponds to Group 1 of the periodic table?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alkali metals" },
              { id: "b", text: "Halogens" },
              { id: "c", text: "Noble gases" },
              { id: "d", text: "Alkaline earth metals" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Periodic families", statement: "Group 1 = alkali metals; Group 2 = alkaline earth metals; Group 17 = halogens; Group 18 = noble gases." },
            ],
            steps: [
              { reasoning: "Recall the family names for each group.", working: "G1=alkali,\\ G17=halogens,\\ G18=noble gases", marks: 1, markCode: "M" },
              { reasoning: "Select the correct family.", working: "\\text{alkali metals}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Alkali metals",
            commonErrors: ["Confusing Group 1 with Group 2 (alkaline earth metals).", "Confusing Group 1 with Group 17 (halogens)."],
          },
        },
        {
          id: "chemsl-u2-periodic-organisation-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "An element has electron configuration $2.8.6$. In which period and group is it located?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Period 3, Group 16" },
              { id: "b", text: "Period 2, Group 6" },
              { id: "c", text: "Period 3, Group 6" },
              { id: "d", text: "Period 4, Group 16" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Period and group", statement: "Period = number of occupied shells; group = number of valence electrons." },
            ],
            steps: [
              { reasoning: "Three occupied shells gives Period 3; six valence electrons gives Group 16.", working: "3\\ \\text{shells},\\ 6\\ \\text{valence}", marks: 1, markCode: "M" },
              { reasoning: "Select the matching period and group.", working: "\\text{Period 3, Group 16}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Period 3, Group 16",
            commonErrors: ["Choosing Group 6 (confusing valence count with group number for main-group elements).", "Choosing Period 2 (miscounting shells)."],
          },
        },
        {
          id: "chemsl-u2-periodic-organisation-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The period number of an element equals...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The number of occupied electron shells" },
              { id: "b", text: "The number of valence electrons" },
              { id: "c", text: "The group number of the element" },
              { id: "d", text: "The number of neutrons in the nucleus" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Period", statement: "A period is a horizontal row; elements in Period $n$ have $n$ occupied electron shells." },
            ],
            steps: [
              { reasoning: "Recall the definition linking period number to shell count.", working: "\\text{period}=\\text{occupied shells}", marks: 1, markCode: "M" },
              { reasoning: "Select the correct statement.", working: "\\text{choice (a)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The number of occupied electron shells",
            commonErrors: ["Confusing period with group (valence electrons)."],
          },
        },
        {
          id: "chemsl-u2-periodic-organisation-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "An atom has electron configuration $2.8.3$. Determine (a) its atomic number, (b) its period, (c) its group, and (d) its number of valence electrons.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) atomic number", answer: 13 },
              { label: "(b) period", answer: 3 },
              { label: "(c) group", answer: 13 },
              { label: "(d) valence electrons", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reading a configuration", statement: "Total electrons $=Z$; shells count gives period; last digit gives valence electrons." },
            ],
            steps: [
              { reasoning: "Sum the digits for $Z$.", working: "Z=2+8+3=13", marks: 1, markCode: "M" },
              { reasoning: "Three occupied shells gives Period 3.", working: "\\text{Period 3}", marks: 1, markCode: "A" },
              { reasoning: "Three valence electrons gives Group 13.", working: "\\text{Group 13}", marks: 1, markCode: "A" },
              { reasoning: "The outermost shell contains 3 electrons.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $Z=13$ (b) Period 3 (c) Group 13 (d) 3 valence electrons",
            commonErrors: ["Answering Group 3 for (c) (the element is aluminium, Group 13)."],
          },
        },
        {
          id: "chemsl-u2-periodic-organisation-q12",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "A noble gas atom has electron configuration $2.8.8$. What is its atomic number?",
          response: { type: "numeric", parts: [{ label: "$Z$", answer: 18 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Noble gas configuration", statement: "Group 18 elements have full outer shells: $2.8.8$ is argon." },
            ],
            steps: [
              { reasoning: "Sum the digits: $2+8+8=18$.", working: "2+8+8=18", marks: 1, markCode: "M" },
              { reasoning: "State the atomic number.", working: "Z=18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$Z=18$ (argon)",
            commonErrors: ["Answering 8 (only the outer shell).", "Answering 16 (adding 2+8+6 by mistake)."],
          },
        },
        {
          id: "chemsl-u2-periodic-organisation-q13",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Why do all Group 1 elements (Li, Na, K, Rb) show very similar chemical reactions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They each have one valence electron that is easily lost" },
              { id: "b", text: "They have the same number of electron shells" },
              { id: "c", text: "They have identical atomic masses" },
              { id: "d", text: "They are all liquids at room temperature" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Periodic law", statement: "Elements in the same group have the same number of valence electrons and similar chemical properties." },
            ],
            steps: [
              { reasoning: "Group 1 members each have 1 valence electron, so they all lose one electron to form $+1$ ions.", working: "1\\ \\text{valence}\\Rightarrow\\text{similar chemistry}", marks: 1, markCode: "M" },
              { reasoning: "Select the correct reason.", working: "\\text{same valence count}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** They each have one valence electron that is easily lost",
            commonErrors: ["Choosing (b): same period would give same shells, not same group."],
          },
        },
        {
          id: "chemsl-u2-periodic-organisation-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "An element has electron configuration $2.8.8.3$. Determine (a) its atomic number, (b) its period, (c) its group, and (d) its number of valence electrons.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) atomic number", answer: 21 },
              { label: "(b) period", answer: 4 },
              { label: "(c) group", answer: 3 },
              { label: "(d) valence electrons", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reading a configuration", statement: "Total $=Z$; occupied shells give period; valence electrons give group." },
            ],
            steps: [
              { reasoning: "Sum the digits.", working: "Z=2+8+8+3=21", marks: 1, markCode: "M" },
              { reasoning: "Four occupied shells gives Period 4.", working: "\\text{Period 4}", marks: 1, markCode: "A" },
              { reasoning: "Scandium is the first $d$-block element, Group 3.", working: "\\text{Group 3}", marks: 1, markCode: "A" },
              { reasoning: "The outermost shell holds 3 electrons ($4s^2$ plus one $3d$ electron).", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $Z=21$ (b) Period 4 (c) Group 3 (d) 3 valence electrons",
            commonErrors: ["Placing scandium in Group 13 (that is the boron family; Sc is the first transition metal, Group 3)."],
          },
        },
        {
          id: "chemsl-u2-periodic-organisation-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Phosphorus has electron configuration $2.8.5$.",
          parts: [
            { label: "a", prompt: "State its group and period.", marks: 2 },
            { label: "b", prompt: "Name the family to which it belongs.", marks: 1 },
            { label: "c", prompt: "State the charge on the ion it forms and write its electron configuration.", marks: 2 },
            { label: "d", prompt: "Compare the reactivity of phosphorus with nitrogen (same group): explain why nitrogen is much less reactive.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Group and period", statement: "Group = valence electrons; period = occupied shells." },
              { kind: "principle", name: "Group trends", statement: "Reactivity within a group changes with atomic size and bond strengths down the group." },
            ],
            steps: [
              { part: "a", reasoning: "Three occupied shells gives Period 3; five valence electrons gives Group 15.", working: "\\text{Period 3, Group 15}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both correctly.", working: "\\text{Period 3 / Group 15}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Group 15 is the nitrogen (pnictogen) family.", working: "\\text{nitrogen family}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Phosphorus gains 3 electrons to complete its octet, forming $\\mathrm{P^{3-}}$.", working: "\\mathrm{P^{3-}}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The ion's configuration is $2.8.8$.", working: "2.8.8", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Both have 5 valence electrons, but nitrogen is much smaller with higher charge density.", working: "\\text{N smaller, higher charge density}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The $\\mathrm{N\\equiv N}$ triple bond is exceptionally strong, so nitrogen resists reaction; phosphorus forms weaker $\\mathrm{P_4}$ bonds and reacts more readily.", working: "\\mathrm{N\\equiv N}\\ \\text{very strong}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Conclusion: same group but nitrogen's strong triple bond and small size make it far less reactive.", working: "\\text{N less reactive}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Period 3, Group 15 (b) nitrogen family (c) $\\mathrm{P^{3-}}$, configuration $2.8.8$ (d) nitrogen is less reactive due to its strong triple bond and small atomic size",
            commonErrors: ["In (c) writing $\\mathrm{P^{5+}}$ or $\\mathrm{P^{3+}}$.", "In (d) claiming reactivity is identical because the group is the same."],
          },
        },
        {
          id: "chemsl-u2-periodic-organisation-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Explain why the elements of Period 3 show a gradual change from metallic to non-metallic character, using sodium and chlorine as examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Periodic trends in character", statement: "Across a period, metallic character decreases and non-metallic character increases." },
              { kind: "definition", name: "Metal and non-metal", statement: "Metals lose electrons to form cations; non-metals gain electrons or share electrons." },
            ],
            steps: [
              { reasoning: "Across Period 3 the number of valence electrons rises from 1 (Na) to 7 (Cl) while shells stay the same.", working: "Na:1\\ \\text{valence}\\ldots Cl:7", marks: 1, markCode: "M" },
              { reasoning: "With more valence electrons, atoms increasingly attract electrons rather than lose them.", working: "\\text{gain/share}e^-\\text{ favoured}", marks: 1, markCode: "R" },
              { reasoning: "Sodium, with 1 valence electron and low ionisation energy, loses its electron to form $\\mathrm{Na^+}$ — metallic behaviour.", working: "\\mathrm{Na^+}\\text{ forms}", marks: 1, markCode: "R" },
              { reasoning: "Chlorine, with 7 valence electrons and high electronegativity, gains an electron to form $\\mathrm{Cl^-}$ — non-metallic behaviour.", working: "\\mathrm{Cl^-}\\text{ forms}", marks: 1, markCode: "R" },
              { reasoning: "Between them (e.g. silicon) elements show intermediate metalloid character.", working: "\\text{metalloid in between}", marks: 1, markCode: "A" },
              { reasoning: "Conclusion: the increasing nuclear charge across the period drives the metal-to-non-metal transition.", working: "\\text{nuclear charge drives trend}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Across Period 3 valence electrons increase from 1 to 7, so elements shift from losing electrons (Na $\\to \\mathrm{Na^+}$, metal) to gaining electrons (Cl $\\to \\mathrm{Cl^-}$, non-metal), with metalloids in between.",
            commonErrors: ["Saying metallic character increases across the period.", "Ignoring the role of valence electron count."],
          },
        },
      ],
    },
    {
      id: "chemsl-u2-periodic-trends",
      title: "Periodic trends",
      skill: "Explain and apply trends in atomic radius, first ionisation energy and electronegativity across periods and down groups.",
      lesson: {
        sections: [
          {
            heading: "Atomic radius",
            body: "Atomic radius decreases across a period because the nuclear charge increases while electrons are added to the same shell — the stronger pull draws the electron cloud closer. Down a group, radius increases because each element adds a new electron shell, placing the outer electrons further from the nucleus despite the greater nuclear charge.",
          },
          {
            heading: "Ionisation energy",
            body: "First ionisation energy is the energy to remove one mole of electrons from one mole of gaseous atoms. It generally increases across a period (greater nuclear charge, same shell) and decreases down a group (outer electrons further away and more shielded). Small dips occur where a $p$ subshell begins (e.g. B after Be) or a stable half/full subshell is disrupted (e.g. O after N), because removing an electron from a slightly higher-energy or paired orbital is easier.",
          },
          {
            heading: "Electronegativity",
            body: "Electronegativity is the ability of an atom to attract bonding electrons. It increases across a period and decreases down a group, tracking the same nuclear-charge-versus-distance balance. Fluorine is the most electronegative element; francium (excluding some radioactive exceptions) the least. The trend explains why ionic bonding dominates on the left and covalent bonding on the right.",
          },
        ],
        keyFormulas: [
          { name: "Across a period", statement: "Radius $\\downarrow$, ionisation energy $\\uparrow$, electronegativity $\\uparrow$" },
          { name: "Down a group", statement: "Radius $\\uparrow$, ionisation energy $\\downarrow$, electronegativity $\\downarrow$" },
          { name: "First ionisation energy", statement: "$X(g)\\to X^+(g)+e^-$" },
        ],
        workedExample: {
          problem: "Place these elements in order of increasing first ionisation energy: Na, Mg, Al (all Period 3).",
          solution: "Na $<$ Mg $<$ Al. Across the period nuclear charge increases while electrons fill the same shells, so more energy is needed to remove an electron.",
        },
      },
      questions: [
        {
          id: "chemsl-u2-periodic-trends-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What happens to atomic radius across a period from left to right?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It increases because more electrons are added" },
              { id: "b", text: "It decreases because nuclear charge increases within the same shells" },
              { id: "c", text: "It stays constant" },
              { id: "d", text: "It increases then decreases" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Atomic radius trend", statement: "Across a period, radius decreases as nuclear charge increases with no extra shell." },
            ],
            steps: [
              { reasoning: "Identify the correct trend direction.", working: "\\text{decreases}", marks: 1, markCode: "M" },
              { reasoning: "State the reason.", working: "\\text{nuclear charge up, same shells}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It decreases because nuclear charge increases within the same shells",
            commonErrors: ["Choosing (a): more electrons but also more protons — the pull wins."],
          },
        },
        {
          id: "chemsl-u2-periodic-trends-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Which of Li, Na and K has the highest first ionisation energy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "K" },
              { id: "b", text: "Na" },
              { id: "c", text: "Li" },
              { id: "d", text: "They are equal" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ionisation energy trend", statement: "Down a group, ionisation energy decreases because outer electrons are further away and more shielded." },
            ],
            steps: [
              { reasoning: "Li, Na and K are all Group 1; ionisation energy decreases down the group.", working: "\\text{Li} > \\text{Na} > \\text{K}", marks: 1, markCode: "M" },
              { reasoning: "The highest value is the topmost element.", working: "\\text{Li}", marks: 1, markCode: "A" },
              { reasoning: "Reason: Li's outer electron is closest to the nucleus with least shielding.", working: "\\text{least shielding}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(c)** Li",
            commonErrors: ["Choosing K because it has the most protons (ignoring distance and shielding)."],
          },
        },
        {
          id: "chemsl-u2-periodic-trends-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why the first ionisation energy generally increases across Period 3 from sodium to chlorine.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ionisation energy", statement: "Energy to remove one mole of electrons from one mole of gaseous atoms." },
              { kind: "principle", name: "Nuclear charge and shielding", statement: "Across a period, protons increase while electrons fill the same shells, so the nucleus holds electrons more strongly." },
            ],
            steps: [
              { reasoning: "Across the period each element adds one proton, increasing the positive nuclear charge.", working: "\\text{nuclear charge increases}", marks: 1, markCode: "M" },
              { reasoning: "Electrons enter the same shells (n=3 valence shell), so shielding between shells does not increase.", working: "\\text{same shells, shielding constant}", marks: 1, markCode: "R" },
              { reasoning: "The stronger nuclear attraction makes each successive electron harder to remove.", working: "\\text{stronger attraction}", marks: 1, markCode: "R" },
              { reasoning: "Therefore first ionisation energy increases from Na to Cl (with small deviations at Al and S explained by subshell stability).", working: "\\text{IE increases}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ionisation energy increases because nuclear charge rises while electrons fill the same shells, so valence electrons are held more strongly.",
            commonErrors: ["Saying shielding increases across the period (it stays roughly constant within a shell).", "Claiming atom size increases across the period."],
          },
        },
        {
          id: "chemsl-u2-periodic-trends-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Three Period 3 elements are compared: sodium (Na), magnesium (Mg) and chlorine (Cl).",
          parts: [
            { label: "a", prompt: "Predict the order of atomic radius from largest to smallest.", marks: 2 },
            { label: "b", prompt: "Predict the order of first ionisation energy from lowest to highest.", marks: 2 },
            { label: "c", prompt: "Predict the order of electronegativity from lowest to highest.", marks: 2 },
            { label: "d", prompt: "Explain, in terms of nuclear charge and electron shells, why all three trends have the directions you predicted.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Across-period trends", statement: "Radius decreases; ionisation energy and electronegativity increase." },
              { kind: "principle", name: "Nuclear charge vs shielding", statement: "Protons increase across the period while shielding stays constant." },
            ],
            steps: [
              { part: "a", reasoning: "Radius decreases across the period, so Na (leftmost) is largest and Cl (rightmost) smallest.", working: "Na>Mg>Cl", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the correct order.", working: "\\mathrm{Na}>\\mathrm{Mg}>\\mathrm{Cl}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ionisation energy increases across the period, so Na is lowest and Cl highest.", working: "Na<Mg<Cl", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the correct order.", working: "\\mathrm{Na}<\\mathrm{Mg}<\\mathrm{Cl}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Electronegativity also increases across the period.", working: "Na<Mg<Cl", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the correct order.", working: "\\mathrm{Na}<\\mathrm{Mg}<\\mathrm{Cl}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "From Na to Cl the nucleus gains 11 protons while valence electrons remain in shell $n=3$, so the pull on the electron cloud strengthens and the radius shrinks.", working: "\\text{protons }+11,\\ \\text{same shell}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The stronger attraction makes electrons harder to remove (higher IE) and more strongly attracted to the atom (higher EN).", working: "\\text{stronger attraction}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Na $>$ Mg $>$ Cl (b) Na $<$ Mg $<$ Cl (c) Na $<$ Mg $<$ Cl (d) nuclear charge increases while electrons stay in the same shell, strengthening attraction to the nucleus",
            commonErrors: ["Reversing the radius trend (thinking more electrons means bigger atoms).", "Claiming shielding increases significantly across the period."],
            examinerNote: "Accept either direction stated clearly in (a)-(c) as long as consistent with (d).",
          },
        },
        {
          id: "chemsl-u2-periodic-trends-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "How does electronegativity change across a period from left to right?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It increases" },
              { id: "b", text: "It decreases" },
              { id: "c", text: "It stays constant" },
              { id: "d", text: "It increases then decreases" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electronegativity trend", statement: "Electronegativity increases across a period as nuclear charge rises within the same shells." },
            ],
            steps: [
              { reasoning: "Identify the correct trend direction.", working: "\\text{increases}", marks: 1, markCode: "M" },
              { reasoning: "Reason: greater nuclear charge attracts bonding electrons more strongly.", working: "\\text{nuclear charge up}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** It increases",
            commonErrors: ["Reversing the trend (decreases across a period)."],
          },
        },
        {
          id: "chemsl-u2-periodic-trends-q6",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Of the Period 3 elements Na, Mg and Cl, sodium has the largest atomic radius. Determine (a) the atomic number of sodium, (b) its group number, and (c) its number of valence electrons.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) atomic number", answer: 11 },
              { label: "(b) group", answer: 1 },
              { label: "(c) valence electrons", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Periodic position", statement: "Sodium is a Period 3 Group 1 metal with configuration $2.8.1$." },
            ],
            steps: [
              { reasoning: "Sodium has $Z=11$.", working: "Z=11", marks: 1, markCode: "M" },
              { reasoning: "Sodium is in Group 1 (alkali metals).", working: "\\text{Group 1}", marks: 1, markCode: "A" },
              { reasoning: "Its configuration $2.8.1$ shows 1 valence electron.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $Z=11$ (b) Group 1 (c) 1 valence electron",
            commonErrors: ["Answering Group 3 for (b) (confusing with the third period)."],
          },
        },
        {
          id: "chemsl-u2-periodic-trends-q7",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Argon has the highest first ionisation energy of any Period 3 element. Determine (a) its atomic number, (b) its group number, and (c) its number of valence electrons.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) atomic number", answer: 18 },
              { label: "(b) group", answer: 18 },
              { label: "(c) valence electrons", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ionisation energy trend", statement: "Ionisation energy increases across a period; the noble gas at the end of the period has the highest value." },
            ],
            steps: [
              { reasoning: "Argon has $Z=18$.", working: "Z=18", marks: 1, markCode: "M" },
              { reasoning: "Argon is in Group 18.", working: "\\text{Group 18}", marks: 1, markCode: "A" },
              { reasoning: "Its outer shell is full with 8 valence electrons.", working: "8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $Z=18$ (b) Group 18 (c) 8 valence electrons",
            commonErrors: ["Answering chlorine ($Z=17$) as having the highest IE — chlorine is highest among the reactive elements, but argon is higher overall."],
          },
        },
        {
          id: "chemsl-u2-periodic-trends-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which is the most electronegative element?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fluorine" },
              { id: "b", text: "Oxygen" },
              { id: "c", text: "Chlorine" },
              { id: "d", text: "Nitrogen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electronegativity", statement: "Electronegativity increases across a period and up a group; fluorine is the maximum." },
            ],
            steps: [
              { reasoning: "Fluorine is the topmost and rightmost reactive element, combining both trend directions.", working: "\\text{top of Group 17}", marks: 1, markCode: "M" },
              { reasoning: "Select fluorine.", working: "\\mathrm{F}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Fluorine",
            commonErrors: ["Choosing oxygen (second highest) or chlorine (below fluorine in the group)."],
          },
        },
        {
          id: "chemsl-u2-periodic-trends-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement correctly describes the trend in first ionisation energy down Group 1?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It decreases because the outer electron is further from the nucleus and more shielded" },
              { id: "b", text: "It increases because nuclear charge increases down the group" },
              { id: "c", text: "It stays constant because all have one valence electron" },
              { id: "d", text: "It increases then decreases down the group" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ionisation energy trend", statement: "Down a group, ionisation energy decreases as outer electrons are further away and more shielded." },
            ],
            steps: [
              { reasoning: "Each step down adds a shell, increasing distance and shielding of the outer electron.", working: "\\text{distance}\\uparrow,\\ \\text{shielding}\\uparrow", marks: 1, markCode: "M" },
              { reasoning: "The outer electron is therefore easier to remove, so IE decreases.", working: "\\text{IE decreases}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** It decreases because the outer electron is further from the nucleus and more shielded",
            commonErrors: ["Choosing (b): nuclear charge does increase, but distance and shielding dominate."],
          },
        },
        {
          id: "chemsl-u2-periodic-trends-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Down a group of the periodic table, atomic radius increases mainly because...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Each successive element adds a new electron shell, placing outer electrons further from the nucleus" },
              { id: "b", text: "The nuclear charge decreases down the group" },
              { id: "c", text: "Electrons are progressively lost down the group" },
              { id: "d", text: "Shielding between shells decreases" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Atomic radius trend", statement: "Down a group radius increases because a new shell is added each period." },
            ],
            steps: [
              { reasoning: "Each element down a group occupies one more shell than the one above.", working: "\\text{new shell added}", marks: 1, markCode: "M" },
              { reasoning: "Outer electrons sit further from the nucleus, so the atom is larger despite greater nuclear charge.", working: "\\text{radius}\\uparrow", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Each successive element adds a new electron shell, placing outer electrons further from the nucleus",
            commonErrors: ["Claiming nuclear charge decreases (it increases but is outweighed by the extra shell)."],
          },
        },
        {
          id: "chemsl-u2-periodic-trends-q11",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "An atom has electron configuration $2.8.8.1$. In which period is this element located?",
          response: { type: "numeric", parts: [{ label: "period number", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Period", statement: "The period number equals the number of occupied electron shells." },
            ],
            steps: [
              { reasoning: "Count the occupied shells in $2.8.8.1$.", working: "4\\ \\text{shells}", marks: 1, markCode: "M" },
              { reasoning: "State the period.", working: "\\text{Period 4}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Period 4",
            commonErrors: ["Answering Period 3 (ignoring the fourth shell)."],
          },
        },
        {
          id: "chemsl-u2-periodic-trends-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The first ionisation energies of Na, Mg and Al are $496$, $738$ and $578\\ \\mathrm{kJ\\,mol^{-1}}$ respectively.",
          parts: [
            { label: "a", prompt: "Calculate the difference between the first ionisation energies of Mg and Na.", marks: 2 },
            { label: "b", prompt: "Calculate the difference between the first ionisation energies of Mg and Al, and state which is higher.", marks: 2 },
          ],
          response: { type: "numeric", parts: [
            { label: "(a) Mg $-$ Na", answer: 242 },
            { label: "(b) Mg $-$ Al", answer: 160 },
          ] },
          markscheme: {
            principles: [
              { kind: "definition", name: "First ionisation energy", statement: "Energy to remove one mole of electrons from one mole of gaseous atoms." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract the sodium value from the magnesium value.", working: "738-496", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate the difference.", working: "242\\ \\mathrm{kJ\\,mol^{-1}}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Subtract the aluminium value from the magnesium value.", working: "738-578", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate; Mg is higher than Al despite aluminium having more protons — a consequence of the filled $3s$ subshell in Mg.", working: "160\\ \\mathrm{kJ\\,mol^{-1}}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $242\\ \\mathrm{kJ\\,mol^{-1}}$ (b) $160\\ \\mathrm{kJ\\,mol^{-1}}$; Mg is higher than Al",
            commonErrors: ["Subtracting in the wrong order and quoting a negative value.", "Assuming Al must have a higher IE simply because it has more protons."],
          },
        },
        {
          id: "chemsl-u2-periodic-trends-q13",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Why is the first ionisation energy of oxygen lower than that of nitrogen?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen's $2p$ subshell contains a pair of electrons, and separating a pair costs less energy than disrupting nitrogen's stable half-filled subshell" },
              { id: "b", text: "Oxygen has fewer protons than nitrogen" },
              { id: "c", text: "Nitrogen is a gas at room temperature" },
              { id: "d", text: "Oxygen is more electronegative than nitrogen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Subshell stability", statement: "Half-filled and fully filled subshells are unusually stable, raising ionisation energy." },
            ],
            steps: [
              { reasoning: "N has $2p^3$ (half-filled, stable); O has $2p^4$ with a paired electron that is easier to remove.", working: "N:2p^3\\ \\text{stable},\\ O:2p^4\\ \\text{paired}", marks: 1, markCode: "M" },
              { reasoning: "Select the correct explanation.", working: "\\text{paired electron easier to remove}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Oxygen's $2p$ subshell contains a pair of electrons, and separating a pair costs less energy than disrupting nitrogen's stable half-filled subshell",
            commonErrors: ["Saying oxygen simply has fewer protons (it has one more).", "Ignoring subshell stability effects on the general trend."],
          },
        },
        {
          id: "chemsl-u2-periodic-trends-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Among the halogens F, Cl, Br and I, iodine is the least electronegative. Determine (a) the period of iodine, (b) its group number, and (c) its number of valence electrons.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) period", answer: 5 },
              { label: "(b) group", answer: 17 },
              { label: "(c) valence electrons", answer: 7 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electronegativity trend", statement: "Electronegativity decreases down a group." },
              { kind: "definition", name: "Group number", statement: "Group 17 elements have 7 valence electrons." },
            ],
            steps: [
              { reasoning: "Iodine is the fourth halogen, in Period 5.", working: "\\text{Period 5}", marks: 1, markCode: "M" },
              { reasoning: "All halogens are in Group 17.", working: "\\text{Group 17}", marks: 1, markCode: "A" },
              { reasoning: "Group 17 elements have 7 valence electrons.", working: "7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Period 5 (b) Group 17 (c) 7 valence electrons",
            commonErrors: ["Answering Period 4 (that is bromine).", "Confusing Group 17 with Group 7."],
          },
        },
        {
          id: "chemsl-u2-periodic-trends-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Lithium, sodium and potassium are all Group 1 metals.",
          parts: [
            { label: "a", prompt: "Predict the order of atomic radius from smallest to largest.", marks: 2 },
            { label: "b", prompt: "Predict the order of first ionisation energy from highest to lowest.", marks: 2 },
            { label: "c", prompt: "Explain why potassium reacts more vigorously with water than lithium.", marks: 2 },
            { label: "d", prompt: "Evaluate the claim that potassium has a smaller radius than lithium because it has more protons.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Group trends", statement: "Down a group: radius increases, ionisation energy and electronegativity decrease, metallic reactivity increases." },
            ],
            steps: [
              { part: "a", reasoning: "Radius increases down the group, so Li is smallest and K largest.", working: "\\mathrm{Li}<\\mathrm{Na}<\\mathrm{K}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the order.", working: "\\mathrm{Li}<\\mathrm{Na}<\\mathrm{K}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ionisation energy decreases down the group, so Li is highest and K lowest.", working: "\\mathrm{Li}>\\mathrm{Na}>\\mathrm{K}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the order.", working: "\\mathrm{Li}>\\mathrm{Na}>\\mathrm{K}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "K's outer electron is further from the nucleus and more shielded, so it is lost more easily.", working: "\\text{easier to lose }e^-", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Easier electron loss means faster, more vigorous reaction with water.", working: "\\mathrm{K}\\text{ most vigorous}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The claim is false: although K has more protons, each element down the group adds an electron shell.", working: "\\text{extra shell dominates}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The outer electrons are further from the nucleus, so K is actually larger than Li.", working: "r(\\mathrm{K})>r(\\mathrm{Li})", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Li $<$ Na $<$ K (b) Li $>$ Na $>$ K (c) K loses its outer electron more easily due to distance and shielding (d) false — the added shell makes K larger despite more protons",
            commonErrors: ["In (d) agreeing that more protons means smaller radius without considering the extra shell."],
          },
        },
        {
          id: "chemsl-u2-periodic-trends-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Fluorine is the most electronegative element. Explain why, and compare the polarity of the bonds in HF and HCl.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Electronegativity", statement: "The ability of an atom to attract bonding electrons; it increases across periods and up groups." },
            ],
            steps: [
              { reasoning: "Fluorine is the topmost element of Group 17 and the rightmost reactive element of Period 2, combining both favourable directions of the trend.", working: "\\text{top of G17, right of P2}", marks: 1, markCode: "M" },
              { reasoning: "It is small with high nuclear charge and needs only one electron to complete its octet, so it attracts bonding electrons strongly.", working: "\\text{small, high }Z^*,\\ 1e^-\\text{ short}", marks: 1, markCode: "R" },
              { reasoning: "Chlorine is below fluorine in the same group, so it is larger and its bonding electrons are further from the nucleus.", working: "\\mathrm{Cl}\\text{ below }\\mathrm{F}", marks: 1, markCode: "R" },
              { reasoning: "Therefore $\\mathrm{EN(F)}>\\mathrm{EN(Cl)}$.", working: "\\mathrm{EN}(\\mathrm{F})>\\mathrm{EN}(\\mathrm{Cl})", marks: 1, markCode: "A" },
              { reasoning: "Bond polarity depends on the electronegativity difference; $\\Delta\\mathrm{EN}(\\mathrm{H-F})>\\Delta\\mathrm{EN}(\\mathrm{H-Cl})$.", working: "\\Delta\\mathrm{EN}_{HF}>\\Delta\\mathrm{EN}_{HCl}", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the H–F bond is more polar than the H–Cl bond.", working: "\\mathrm{HF}\\text{ more polar}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fluorine has the highest electronegativity (small size, high nuclear charge, one electron short of an octet); since $\\mathrm{EN(F)}>\\mathrm{EN(Cl)}$, the H–F bond is more polar than H–Cl.",
            commonErrors: ["Claiming chlorine is more electronegative because it is 'heavier'.", "Ignoring that polarity depends on the difference, not the absolute value."],
          },
        },
      ],
    },
  ],
};
