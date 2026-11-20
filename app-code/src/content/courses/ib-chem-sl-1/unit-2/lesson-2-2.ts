import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "chemsl-u2-lesson-2-2",
  code: "2-2",
  title: "Electron Configuration",
  goal: "I CAN write electron configurations in shell and orbital notation, identify elements from them, and describe the valence electrons that determine chemical behaviour.",
  standards: ["Topic 2.2", "Paper 1", "Paper 2"],
  vocabulary: [
    { term: "Electron shell", definition: "An energy level (shell) around the nucleus that can hold electrons; labelled $n=1,2,3,\\dots$ from the nucleus outwards." },
    { term: "Subshell", definition: "A division of a shell labelled $s$, $p$, $d$ or $f$; an $s$ subshell holds 2 electrons, a $p$ subshell holds 6." },
    { term: "Electron configuration", definition: "The arrangement of electrons in shells and subshells of an atom, e.g. $1s^22s^22p^63s^1$ for sodium." },
    { term: "Aufbau principle", definition: "Electrons fill the lowest available energy levels first, in the order $1s,2s,2p,3s,3p,4s,\\dots$" },
    { term: "Valence electrons", definition: "The electrons in the outermost shell of an atom; they determine the chemical properties of the element." },
    { term: "Octet", definition: "A stable arrangement of eight electrons in the outermost shell, achieved by many atoms through ion or covalent bond formation." },
  ],
  concepts: [
    {
      id: "chemsl-u2-electron-configuration",
      title: "Shells, subshells and electron configuration",
      skill: "Write electron configurations in shell notation ($2.8.7$) and orbital notation ($1s^22s^2\\dots$) for elements up to krypton.",
      lesson: {
        sections: [
          {
            heading: "Shell notation",
            body: "Electrons occupy shells around the nucleus. For the first 20 elements the maximum occupancy is $2,8,8$ for shells $1,2,3$ (the third shell can hold up to $18$, but for these elements it fills only to $8$ before the fourth shell starts). Sodium, $Z=11$, is written $2.8.1$: two electrons in shell 1, eight in shell 2, one in shell 3.",
          },
          {
            heading: "Orbital notation",
            body: "Each shell contains subshells $s$ and $p$ (and $d$ for heavier elements). An $s$ subshell holds 2 electrons, a $p$ subshell holds 6. Subshells fill in the order $1s\\to2s\\to2p\\to3s\\to3p\\to4s\\to3d\\dots$. For elements up to calcium, $Z=20$, the configuration of calcium is $1s^22s^22p^63s^23p^64s^2$, equivalent to shell notation $2.8.8.2$.",
          },
          {
            heading: "Reading a configuration",
            body: "The atomic number equals the total number of electrons. Given a configuration such as $2.8.7$, add the digits: $2+8+7=17$, so the element is chlorine. The period number equals the number of occupied shells (3 for chlorine), and the last digit gives the number of outer-shell electrons.",
          },
        ],
        keyFormulas: [
          { name: "Shell capacities (first 20 elements)", statement: "$2,8,8$ for shells $1,2,3$" },
          { name: "Subshell capacities", statement: "$s=2,\\ p=6$ electrons" },
          { name: "Filling order", statement: "$1s,2s,2p,3s,3p,4s,3d,\\dots$" },
          { name: "Atomic number", statement: "$Z=\\text{total electrons}$" },
        ],
        workedExample: {
          problem: "Write the electron configuration of phosphorus ($Z=15$) in both shell notation and orbital notation.",
          solution: "Shell notation: $2.8.5$. Orbital notation: $1s^22s^22p^63s^23p^3$ — the third shell holds $3+5=8$ electrons, consistent with $2+8+5=15$.",
        },
      },
      questions: [
        {
          id: "chemsl-u2-electron-configuration-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What is the electron configuration (shell notation) of chlorine, $Z=17$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2.8.7$" },
              { id: "b", text: "$2.8.8$" },
              { id: "c", text: "$2.7.8$" },
              { id: "d", text: "$8.8.1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Shell capacities", statement: "Shells fill as $2$, then $8$, then $8$ for the first 20 elements." },
            ],
            steps: [
              { reasoning: "Fill shell 1 with 2 electrons, shell 2 with 8, leaving $17-10=7$ for shell 3.", working: "2+8=10,\\ 17-10=7", marks: 1, markCode: "M" },
              { reasoning: "Write the configuration.", working: "2.8.7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $2.8.7$",
            commonErrors: ["Writing $2.8.8$ and forgetting the element has only 17 electrons.", "Putting 7 in the second shell."],
          },
        },
        {
          id: "chemsl-u2-electron-configuration-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "An atom has electron configuration $2.8.18.1$. (a) State its atomic number. (b) State the number of electrons in the third shell. (c) State the number of electrons in the outermost shell.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $Z$", answer: 29 },
              { label: "(b) electrons in shell 3", answer: 18 },
              { label: "(c) outermost shell electrons", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Shell configuration", statement: "Each digit is the number of electrons in that shell; the third shell can hold up to 18." },
            ],
            steps: [
              { reasoning: "Sum the digits for the atomic number.", working: "Z=2+8+18+1=29", marks: 1, markCode: "M" },
              { reasoning: "Read the third-shell digit directly.", working: "18", marks: 1, markCode: "A" },
              { reasoning: "The outermost (fourth) shell digit is 1.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $Z=29$ (b) $18$ (c) $1$",
            commonErrors: ["Assuming shell 3 can hold only 8 and rejecting the configuration.", "Answering $2+8+18=28$ for (a), omitting the fourth shell."],
            examinerNote: "The element is copper; transition-metal configurations are acceptable at this level.",
          },
        },
        {
          id: "chemsl-u2-electron-configuration-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Write the full electron configuration, in orbital notation, of calcium ($Z=20$), and hence identify which subshells contain its valence electrons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Filling order", statement: "$1s,2s,2p,3s,3p,4s,3d,\\dots$" },
              { kind: "definition", name: "Subshell capacities", statement: "$s=2,\\ p=6$ electrons" },
            ],
            steps: [
              { reasoning: "Fill subshells in order until 20 electrons are placed: $1s^2,2s^2,2p^6,3s^2,3p^6,4s^2$.", working: "1s^22s^22p^63s^23p^64s^2", marks: 1, markCode: "M" },
              { reasoning: "Check the total: $2+2+6+2+6+2=20$.", working: "20\\ \\mathrm{electrons}", marks: 1, markCode: "A" },
              { reasoning: "Valence electrons are in the highest occupied shell, $n=4$.", working: "\\text{shell }n=4", marks: 1, markCode: "R" },
              { reasoning: "Within shell 4 only the $4s$ subshell is occupied, so the valence electrons are $4s^2$.", working: "4s^2\\ \\mathrm{valence}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1s^22s^22p^63s^23p^64s^2$; valence electrons are the two $4s$ electrons",
            commonErrors: ["Writing $3d$ before $4s$ (the order is $4s$ then $3d$).", "Listing valence electrons as all electrons in shells 3 and 4."],
            examinerNote: "Accept shell notation $2.8.8.2$ as an alternative representation.",
          },
        },
        {
          id: "chemsl-u2-electron-configuration-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "An atom of element Y contains 18 electrons.",
          parts: [
            { label: "a", prompt: "Write the electron configuration of Y in shell notation.", marks: 2 },
            { label: "b", prompt: "Identify element Y.", marks: 1 },
            { label: "c", prompt: "Write its configuration in full orbital notation.", marks: 2 },
            { label: "d", prompt: "Explain why element Y is chemically unreactive.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Shell capacities", statement: "$2,8,8$ for the first three shells." },
              { kind: "principle", name: "Noble gas stability", statement: "A full outer shell (octet) is energetically stable." },
            ],
            steps: [
              { part: "a", reasoning: "Fill shells in order: 2 in shell 1, 8 in shell 2, leaving $18-10=8$ for shell 3.", working: "2.8.8", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the configuration.", working: "2.8.8", marks: 1, markCode: "A" },
              { part: "b", reasoning: "18 electrons corresponds to argon, $Z=18$.", working: "\\mathrm{Ar}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Write subshells in filling order: $1s^22s^22p^63s^23p^6$.", working: "1s^22s^22p^63s^23p^6", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Verify the total is 18.", working: "2+2+6+2+6=18", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The outermost shell (n=3) is completely full with 8 electrons — a stable octet.", working: "\\text{full outer shell}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Gaining or losing electrons would require energy and produce an unstable ion; covalent bonding would need unpaired electrons which are absent.", working: "\\text{octet stability}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Therefore argon does not readily form compounds.", working: "\\text{unreactive}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2.8.8$ (b) argon, $\\mathrm{Ar}$ (c) $1s^22s^22p^63s^23p^6$ (d) full outer shell (octet) is stable; no tendency to gain, lose or share electrons",
            commonErrors: ["In (a) writing $2.8.9$ by miscounting.", "In (d) saying argon has 'no electrons' rather than a full shell."],
          },
        },
        {
          id: "chemsl-u2-electron-configuration-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What is the electron configuration (shell notation) of sodium, $Z=11$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2.8.1$" },
              { id: "b", text: "$2.8.2$" },
              { id: "c", text: "$2.9$" },
              { id: "d", text: "$8.2.1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Shell capacities", statement: "Shells fill as 2, then 8, then 8 for the first 20 elements." },
            ],
            steps: [
              { reasoning: "Fill shell 1 with 2 electrons and shell 2 with 8, leaving $11-10=1$ for shell 3.", working: "2+8=10,\\ 11-10=1", marks: 1, markCode: "M" },
              { reasoning: "Write the configuration.", working: "2.8.1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $2.8.1$",
            commonErrors: ["Writing $2.9$ (filling shell 2 beyond 8).", "Writing $2.8.2$ (that is magnesium, $Z=12$)."],
          },
        },
        {
          id: "chemsl-u2-electron-configuration-q6",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "An atom has electron configuration $2.8.8.2$. Determine (a) its atomic number, (b) its period number, and (c) its number of valence electrons.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) atomic number", answer: 20 },
              { label: "(b) period number", answer: 4 },
              { label: "(c) valence electrons", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Shell configuration", statement: "Each digit gives the electrons in that shell; $Z$ equals the total." },
            ],
            steps: [
              { reasoning: "Sum the digits for the atomic number.", working: "Z=2+8+8+2=20", marks: 1, markCode: "M" },
              { reasoning: "The period equals the number of occupied shells.", working: "\\text{4 shells}\\Rightarrow\\text{Period 4}", marks: 1, markCode: "A" },
              { reasoning: "Valence electrons are those in the outermost shell.", working: "\\text{last digit}=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $Z=20$ (b) Period 4 (c) 2 valence electrons",
            commonErrors: ["Counting only three shells because the third holds 8.", "Answering 10 valence electrons (summing shells 3 and 4)."],
          },
        },
        {
          id: "chemsl-u2-electron-configuration-q7",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "An atom has the orbital configuration $1s^22s^22p^63s^23p^6$. Determine (a) the total number of electrons, (b) the number of occupied shells, and (c) the number of valence electrons.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) total electrons", answer: 18 },
              { label: "(b) occupied shells", answer: 3 },
              { label: "(c) valence electrons", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Subshell notation", statement: "The superscript gives the number of electrons in each subshell." },
            ],
            steps: [
              { reasoning: "Add all the superscripts: $2+2+6+2+6=18$.", working: "2+2+6+2+6=18", marks: 1, markCode: "M" },
              { reasoning: "The principal quantum numbers used are $n=1,2,3$.", working: "n=1,2,3", marks: 1, markCode: "A" },
              { reasoning: "The outermost shell is $n=3$, containing $3s^23p^6=8$ electrons.", working: "3s^23p^6=8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 18 electrons (b) 3 shells (c) 8 valence electrons",
            commonErrors: ["Counting subshells instead of shells for (b).", "Answering 6 valence electrons (only the $3p$ electrons)."],
          },
        },
        {
          id: "chemsl-u2-electron-configuration-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which element has the electron configuration $2.8.8.1$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sodium" },
              { id: "b", text: "Potassium" },
              { id: "c", text: "Argon" },
              { id: "d", text: "Calcium" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reading a configuration", statement: "$Z$ equals the total number of electrons: $2+8+8+1=19$." },
            ],
            steps: [
              { reasoning: "Total the electrons to find $Z$.", working: "2+8+8+1=19", marks: 1, markCode: "M" },
              { reasoning: "$Z=19$ is potassium.", working: "\\mathrm{K}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Potassium",
            commonErrors: ["Answering argon ($Z=18$, configuration $2.8.8$).", "Answering calcium ($Z=20$, configuration $2.8.8.2$)."],
          },
        },
        {
          id: "chemsl-u2-electron-configuration-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which element has the electron configuration $2.8.3$ in shell notation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Aluminium" },
              { id: "b", text: "Silicon" },
              { id: "c", text: "Phosphorus" },
              { id: "d", text: "Magnesium" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reading a configuration", statement: "Total electrons $=Z$; the last digit gives valence electrons." },
            ],
            steps: [
              { reasoning: "Total the electrons: $2+8+3=13$, so $Z=13$.", working: "2+8+3=13", marks: 1, markCode: "M" },
              { reasoning: "$Z=13$ is aluminium.", working: "\\mathrm{Al}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Aluminium",
            commonErrors: ["Answering silicon ($Z=14$, $2.8.4$).", "Answering phosphorus ($Z=15$, $2.8.5$)."],
          },
        },
        {
          id: "chemsl-u2-electron-configuration-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What is the maximum number of electrons a $p$ subshell can hold?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "$6$" },
              { id: "c", text: "$8$" },
              { id: "d", text: "$10$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Subshell capacity", statement: "A $p$ subshell contains three orbitals, each holding 2 electrons, for a maximum of 6." },
            ],
            steps: [
              { reasoning: "Recall the capacity of each subshell type.", working: "s=2,\\ p=6", marks: 1, markCode: "M" },
              { reasoning: "Select the correct capacity.", working: "p=6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $6$",
            commonErrors: ["Confusing subshell capacity with shell capacity (8).", "Answering 2 (the $s$ subshell capacity)."],
          },
        },
        {
          id: "chemsl-u2-electron-configuration-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Chlorine ($Z=17$) has the orbital configuration $1s^22s^22p^63s^23p^5$. How many electrons occupy the $3p$ subshell?",
          response: { type: "numeric", parts: [{ label: "$3p$ electrons", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Subshell notation", statement: "The superscript after a subshell symbol gives its electron count." },
            ],
            steps: [
              { reasoning: "Locate the $3p$ term in the configuration.", working: "\\ldots 3s^23p^5", marks: 1, markCode: "M" },
              { reasoning: "Read the superscript of $3p$.", working: "3p^5", marks: 1, markCode: "A" },
              { reasoning: "Verify: the third shell holds $3s^2+3p^5=7$ electrons, matching shell notation $2.8.7$.", working: "2+6=8\\ \\text{in shell 2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$ electrons in the $3p$ subshell",
            commonErrors: ["Answering 7 (all valence electrons, including $3s^2$).", "Answering 6 (the full $p$ subshell capacity)."],
          },
        },
        {
          id: "chemsl-u2-electron-configuration-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "According to the Aufbau principle, why does the $4s$ subshell fill before the $3d$ subshell?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The $4s$ subshell has lower energy than the $3d$ subshell" },
              { id: "b", text: "The $3d$ subshell cannot hold electrons" },
              { id: "c", text: "Electrons always fill the largest available shell first" },
              { id: "d", text: "The $4s$ subshell is closer to the nucleus" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Aufbau principle", statement: "Electrons occupy the lowest available energy levels first." },
            ],
            steps: [
              { reasoning: "The filling order follows increasing energy, and $4s$ lies below $3d$ in energy despite the higher principal quantum number.", working: "4s < 3d\\ \\text{in energy}", marks: 1, markCode: "M" },
              { reasoning: "Select the correct explanation.", working: "\\text{lower energy}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The $4s$ subshell has lower energy than the $3d$ subshell",
            commonErrors: ["Thinking subshells fill strictly in order of $n$.", "Claiming $3d$ cannot hold electrons."],
          },
        },
        {
          id: "chemsl-u2-electron-configuration-q13",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "An atom has electron configuration $2.6$ in shell notation. What is its atomic number?",
          response: { type: "numeric", parts: [{ label: "$Z$", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Atomic number", statement: "$Z$ equals the total number of electrons in a neutral atom." },
            ],
            steps: [
              { reasoning: "Add the digits of the configuration.", working: "Z=2+6=8", marks: 1, markCode: "M" },
              { reasoning: "State the atomic number.", working: "Z=8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$Z=8$",
            commonErrors: ["Multiplying the digits instead of adding them.", "Answering 6 (only the outer-shell electrons)."],
          },
        },
        {
          id: "chemsl-u2-electron-configuration-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Scandium has $Z=21$ and orbital configuration $1s^22s^22p^63s^23p^64s^23d^1$. Determine (a) the number of electrons in the $3d$ subshell, (b) the number of electrons in the $4s$ subshell, (c) the period number, and (d) the group number.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $3d$ electrons", answer: 1 },
              { label: "(b) $4s$ electrons", answer: 2 },
              { label: "(c) period", answer: 4 },
              { label: "(d) group", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Subshell notation", statement: "Superscripts give electron counts per subshell." },
              { kind: "definition", name: "Period and group", statement: "Period = number of occupied shells; the group reflects the block position." },
            ],
            steps: [
              { reasoning: "Read the $3d$ superscript.", working: "3d^1\\Rightarrow 1", marks: 1, markCode: "M" },
              { reasoning: "Read the $4s$ superscript.", working: "4s^2\\Rightarrow 2", marks: 1, markCode: "M" },
              { reasoning: "The highest occupied shell is $n=4$.", working: "\\text{Period 4}", marks: 1, markCode: "A" },
              { reasoning: "Scandium is the first $d$-block element, Group 3.", working: "\\text{Group 3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1 (b) 2 (c) Period 4 (d) Group 3",
            commonErrors: ["Saying the period is 3 because $3d$ is written last.", "Counting only $4s$ electrons for the group."],
          },
        },
        {
          id: "chemsl-u2-electron-configuration-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Write the electron configuration of the chloride ion $\\mathrm{Cl^-}$ ($Z=17$) in both shell notation and orbital notation, and explain how it differs from the neutral chlorine atom.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ion formation", statement: "Anions gain electrons into the outermost shell until the octet is complete." },
              { kind: "principle", name: "Octet stability", statement: "A full outer shell of 8 electrons is energetically stable." },
            ],
            steps: [
              { reasoning: "Neutral chlorine is $2.8.7$; the $-$ charge means one extra electron enters the outer shell.", working: "2.8.7+e^-", marks: 1, markCode: "M" },
              { reasoning: "Write the shell notation of $\\mathrm{Cl^-}$.", working: "2.8.8", marks: 1, markCode: "A" },
              { reasoning: "Write the orbital notation: $1s^22s^22p^63s^23p^6$.", working: "1s^22s^22p^63s^23p^6", marks: 1, markCode: "M" },
              { reasoning: "The difference from neutral Cl is one additional electron in the $3p$ subshell; the number of protons (17) is unchanged.", working: "p=17,\\ e^-=18", marks: 1, markCode: "R" },
              { reasoning: "The resulting configuration equals that of argon, a noble-gas octet.", working: "\\text{same as Ar}", marks: 1, markCode: "A" },
              { reasoning: "Conclusion: $\\mathrm{Cl^-}$ is stable because its outer shell is complete.", working: "\\text{octet complete}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mathrm{Cl^-}$: $2.8.8$ / $1s^22s^22p^63s^23p^6$ — one extra electron gives a full outer shell like argon",
            commonErrors: ["Adding the electron to the wrong shell.", "Changing the proton number (the element is still chlorine)."],
          },
        },
        {
          id: "chemsl-u2-electron-configuration-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Sodium ($Z=11$) forms the ion $\\mathrm{Na^+}$.",
          parts: [
            { label: "a", prompt: "Write the electron configuration of a neutral Na atom in both shell notation and orbital notation.", marks: 2 },
            { label: "b", prompt: "Write the electron configuration of $\\mathrm{Na^+}$ in both notations.", marks: 2 },
            { label: "c", prompt: "State which noble gas $\\mathrm{Na^+}$ resembles and explain why this makes the ion stable.", marks: 2 },
            { label: "d", prompt: "A classmate says $\\mathrm{Na^+}$ and a neon atom are 'identical particles'. Evaluate this claim.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cation formation", statement: "Metals lose valence electrons to form positive ions with noble-gas configurations." },
              { kind: "principle", name: "Octet stability", statement: "A full outer shell is energetically stable." },
            ],
            steps: [
              { part: "a", reasoning: "Fill shells in order for $Z=11$.", working: "2.8.1", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Convert to orbital notation.", working: "1s^22s^22p^63s^1", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The $+$ ion has lost the single $3s$ electron.", working: "2.8", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Write the orbital notation of the ion.", working: "1s^22s^22p^6", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\mathrm{Na^+}$ has the same configuration as neon ($2.8$).", working: "\\text{neon configuration}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A complete outer shell (octet) is stable, so the ion resists further electron loss or gain.", working: "\\text{octet stability}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The claim is false: $\\mathrm{Na^+}$ has 11 protons while Ne has 10, so the nuclear charges differ.", working: "p=11\\ \\text{vs}\\ 10", marks: 1, markCode: "R" },
              { part: "d", reasoning: "They are isoelectronic — same electron arrangement — but different species with different chemical behaviour.", working: "\\text{isoelectronic, not identical}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Na $2.8.1$ / $1s^22s^22p^63s^1$ (b) $\\mathrm{Na^+}$ $2.8$ / $1s^22s^22p^6$ (c) neon — full outer shell is stable (d) false — same electrons but different proton number, so different particles",
            commonErrors: ["In (d) agreeing that isoelectronic species are identical.", "In (b) keeping the $3s$ electron."],
          },
        },
      ],
    },
    {
      id: "chemsl-u2-valence-electrons",
      title: "Valence electrons and ion formation",
      skill: "Use the outer-shell electron count to predict group number, ion charge and noble-gas configuration of ions.",
      lesson: {
        sections: [
          {
            heading: "Valence electrons and the group number",
            body: "For main-group elements the number of valence electrons equals the group number for Groups 1, 2 and 13-18: sodium $2.8.1$ has 1 valence electron (Group 1), magnesium $2.8.2$ has 2 (Group 2), chlorine $2.8.7$ has 7 (Group 17). Elements in the same group have the same number of valence electrons and therefore similar chemical behaviour.",
          },
          {
            heading: "Forming ions",
            body: "Metals lose their valence electrons to form positive ions with a noble-gas configuration: sodium loses its one $3s$ electron to become $\\mathrm{Na^+}$ ($2.8$, like neon); magnesium loses two to become $\\mathrm{Mg^{2+}}$ ($2.8$, like neon). Non-metals gain electrons to complete an octet: oxygen gains two to become $\\mathrm{O^{2-}}$ ($2.8$, like neon); chlorine gains one to become $\\mathrm{Cl^-}$ ($2.8.8$, like argon).",
          },
          {
            heading: "Checking ion configurations",
            body: "To write the configuration of an ion, start from the neutral atom and add or remove electrons from the outermost shell. For cations remove electrons from the highest shell first; for anions add electrons to the outermost shell until the octet is complete. The number of protons is unchanged, so the nuclear charge stays the same while the electron count changes.",
          },
        ],
        keyFormulas: [
          { name: "Valence electrons", statement: "$=\\text{group number}$ for Groups 1, 2, 13-18" },
          { name: "Cation charge", statement: "$=+\\text{number of electrons lost}$" },
          { name: "Anion charge", statement: "$=-\\text{number of electrons gained}$" },
        ],
        workedExample: {
          problem: "Write the electron configuration of the oxide ion $\\mathrm{O^{2-}}$ and state which noble gas it resembles.",
          solution: "Oxygen is $2.6$; gaining two electrons completes the outer shell: $\\mathrm{O^{2-}}$ is $2.8$, the same configuration as neon.",
        },
      },
      questions: [
        {
          id: "chemsl-u2-valence-electrons-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "How many valence electrons does a neutral sulfur atom have? (S: $Z=16$, configuration $2.8.6$)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "$6$" },
              { id: "c", text: "$8$" },
              { id: "d", text: "$16$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Valence electrons", statement: "The electrons in the outermost shell." },
            ],
            steps: [
              { reasoning: "The outermost shell is $n=3$, which contains 6 electrons.", working: "2.8.6", marks: 1, markCode: "M" },
              { reasoning: "State the valence count.", working: "6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $6$ valence electrons",
            commonErrors: ["Counting all electrons (16).", "Counting only the $s$ electrons."],
          },
        },
        {
          id: "chemsl-u2-valence-electrons-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Aluminium has atomic number $Z=13$. How many electrons does the ion $\\mathrm{Al^{3+}}$ contain?",
          response: { type: "numeric", parts: [{ label: "electrons", answer: 10 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ion charge", statement: "A $3+$ ion has lost three electrons, so electrons $=Z-3$." },
            ],
            steps: [
              { reasoning: "A neutral Al atom has 13 electrons; the $3+$ charge means three were lost.", working: "13-3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "10\\ \\mathrm{electrons}", marks: 1, markCode: "A" },
              { reasoning: "Check: the configuration becomes $2.8$, like neon.", working: "2.8=\\text{Ne config}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$ electrons",
            commonErrors: ["Adding to get 16 electrons.", "Answering 13 (neutral atom count)."],
          },
        },
        {
          id: "chemsl-u2-valence-electrons-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Compare the electron configurations and chemical behaviour of sodium ($Z=11$) and magnesium ($Z=12$), explaining why magnesium forms $\\mathrm{Mg^{2+}}$ rather than $\\mathrm{Mg^+}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Valence electrons", statement: "Na $2.8.1$ has 1 valence electron; Mg $2.8.2$ has 2." },
              { kind: "principle", name: "Octet stability", statement: "Ions form to achieve a noble-gas (full outer shell) configuration." },
            ],
            steps: [
              { reasoning: "Write both configurations.", working: "\\mathrm{Na}=2.8.1,\\ \\mathrm{Mg}=2.8.2", marks: 1, markCode: "M" },
              { reasoning: "Both lose their valence electrons to achieve the neon configuration $2.8$: sodium loses 1 electron, magnesium loses 2.", working: "\\mathrm{Na^+}=2.8,\\ \\mathrm{Mg^{2+}}=2.8", marks: 1, markCode: "R" },
              { reasoning: "$\\mathrm{Mg^+}$ would have configuration $2.8.1$, still with an incomplete outer shell, so it is less stable than the full-shell $\\mathrm{Mg^{2+}}$.", working: "\\mathrm{Mg^+}=2.8.1\\ \\text{incomplete}", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: magnesium loses both valence electrons to complete the octet.", working: "\\mathrm{Mg^{2+}}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Na $2.8.1$ and Mg $2.8.2$ both lose valence electrons to reach the neon configuration $2.8$; $\\mathrm{Mg^+}$ would leave an incomplete outer shell, so $\\mathrm{Mg^{2+}}$ is preferred.",
            commonErrors: ["Claiming $\\mathrm{Mg^+}$ does not exist at all (it can exist transiently, but the stable ion is $\\mathrm{Mg^{2+}}$).", "Saying magnesium loses one electron because it is 'in Group 2'."],
            examinerNote: "The key idea is that removing the second electron completes the octet, releasing more energy than is needed.",
          },
        },
        {
          id: "chemsl-u2-valence-electrons-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Sodium ($Z=11$) reacts with chlorine ($Z=17$) to form sodium chloride, $\\mathrm{NaCl}$.",
          parts: [
            { label: "a", prompt: "Write the electron configurations of the sodium and chlorine atoms in shell notation.", marks: 2 },
            { label: "b", prompt: "State the electron configuration and charge of each ion formed.", marks: 2 },
            { label: "c", prompt: "Explain why the ions formed have the electron configurations of noble gases.", marks: 2 },
            { label: "d", prompt: "Evaluate the statement 'the transfer of an electron is a complete explanation of why NaCl is ionic'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Valence electrons", statement: "Na $2.8.1$ has 1 valence electron; Cl $2.8.7$ has 7." },
              { kind: "principle", name: "Octet stability", statement: "Ions achieve noble-gas configurations by losing or gaining electrons." },
            ],
            steps: [
              { part: "a", reasoning: "Fill shells in order for $Z=11$ and $Z=17$.", working: "\\mathrm{Na}=2.8.1,\\ \\mathrm{Cl}=2.8.7", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both configurations correct.", working: "2.8.1\\ \\text{and}\\ 2.8.7", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Na loses its one valence electron to become $\\mathrm{Na^+}$ ($2.8$, like neon); Cl gains one electron to become $\\mathrm{Cl^-}$ ($2.8.8$, like argon).", working: "\\mathrm{Na^+}=2.8,\\ \\mathrm{Cl^-}=2.8.8", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Charges stated correctly.", working: "+1\\ \\text{and}\\ -1", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Na$^+$ has the full-shell neon configuration $2.8$ and Cl$^-$ has the argon configuration $2.8.8$, both stable octets.", working: "\\text{noble-gas configs}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The driving force is the large energy released when both ions reach a full outer shell.", working: "\\text{energy released}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Electron transfer explains the formation of ions but not the bonding itself: the ionic bond exists because of the strong electrostatic attraction between the oppositely charged ions in the lattice.", working: "\\text{electrostatic attraction}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "A complete explanation also requires the lattice structure holding the ions together.", working: "\\text{lattice}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Na $2.8.1$, Cl $2.8.7$ (b) $\\mathrm{Na^+}=2.8$, $\\mathrm{Cl^-}=2.8.8$ (c) both achieve noble-gas octets, releasing energy (d) incomplete — the ionic bond is the electrostatic attraction in the lattice, not just the transfer",
            commonErrors: ["In (d) agreeing fully with the statement without mentioning electrostatic attraction/lattice."],
          },
        },
        {
          id: "chemsl-u2-valence-electrons-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "How many valence electrons does a neutral potassium atom have? (K: configuration $2.8.8.1$)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$" },
              { id: "b", text: "$8$" },
              { id: "c", text: "$9$" },
              { id: "d", text: "$19$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Valence electrons", statement: "The electrons in the outermost shell." },
            ],
            steps: [
              { reasoning: "Identify the outermost shell and its electron count.", working: "2.8.8.1\\Rightarrow\\text{shell 4 has 1}", marks: 1, markCode: "M" },
              { reasoning: "State the valence count.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $1$ valence electron",
            commonErrors: ["Answering 8 (a full inner shell).", "Answering 19 (the atomic number)."],
          },
        },
        {
          id: "chemsl-u2-valence-electrons-q6",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Potassium has $Z=19$. Determine the number of electrons in the ion $\\mathrm{K^+}$.",
          response: { type: "numeric", parts: [{ label: "electrons in $\\mathrm{K^+}$", answer: 18 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ion charge", statement: "A $+$ ion has fewer electrons than protons; electrons $=Z-(\\text{charge})$." },
            ],
            steps: [
              { reasoning: "A neutral K atom has 19 electrons; $\\mathrm{K^+}$ has lost one.", working: "19-1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "18\\ \\mathrm{electrons}", marks: 1, markCode: "A" },
              { reasoning: "Check: the configuration becomes $2.8.8$, like argon.", working: "2.8.8=\\text{Ar config}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$18$ electrons",
            commonErrors: ["Answering 19 (neutral atom count).", "Answering 17 (subtracting two electrons)."],
          },
        },
        {
          id: "chemsl-u2-valence-electrons-q7",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Sulfur has $Z=16$ and configuration $2.8.6$. Determine (a) the number of electrons in $\\mathrm{S^{2-}}$, and (b) the number of electrons a neutral S atom must gain to achieve a noble-gas configuration.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) electrons in $\\mathrm{S^{2-}}$", answer: 18 },
              { label: "(b) electrons gained", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ion charge", statement: "A $2-$ ion has two more electrons than protons." },
              { kind: "principle", name: "Octet stability", statement: "Non-metals gain electrons to complete the outer shell." },
            ],
            steps: [
              { reasoning: "A neutral S atom has 16 electrons; $\\mathrm{S^{2-}}$ has gained two.", working: "16+2=18", marks: 1, markCode: "M" },
              { reasoning: "State the electron count.", working: "18", marks: 1, markCode: "A" },
              { reasoning: "The outer shell needs 8 electrons and has 6, so 2 must be gained.", working: "8-6=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 18 electrons (b) 2 electrons",
            commonErrors: ["Answering 14 for (a) (losing electrons).", "Answering 6 for (b) (all valence electrons)."],
          },
        },
        {
          id: "chemsl-u2-valence-electrons-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "What is the electron configuration of the nitride ion $\\mathrm{N^{3-}}$? (N: $Z=7$, configuration $2.5$)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2.8$" },
              { id: "b", text: "$2.8.8$" },
              { id: "c", text: "$2.5$" },
              { id: "d", text: "$2.6$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Octet stability", statement: "N gains three electrons to complete its outer shell." },
            ],
            steps: [
              { reasoning: "Neutral N is $2.5$; gaining three electrons fills the second shell to 8.", working: "2.5+3e^-=2.8", marks: 1, markCode: "M" },
              { reasoning: "Select the correct configuration.", working: "2.8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $2.8$",
            commonErrors: ["Choosing $2.8.8$ (that would require eight gained electrons).", "Ignoring the $3-$ charge."],
          },
        },
        {
          id: "chemsl-u2-valence-electrons-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement best explains why chlorine forms $\\mathrm{Cl^-}$ rather than $\\mathrm{Cl^{7+}}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gaining one electron completes the octet, whereas losing seven electrons would require enormous energy" },
              { id: "b", text: "Chlorine cannot form positive ions under any circumstances" },
              { id: "c", text: "A $7+$ charge is too small to be stable" },
              { id: "d", text: "Chlorine has only one electron available to lose" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Octet stability", statement: "Atoms gain or lose electrons to achieve a full outer shell." },
              { kind: "principle", name: "Ionisation energy", statement: "Removing core electrons requires far more energy than gaining one electron." },
            ],
            steps: [
              { reasoning: "Cl has 7 valence electrons; gaining 1 completes the octet with a large energy release.", working: "7+1=8", marks: 1, markCode: "M" },
              { reasoning: "Losing all 7 valence electrons would cost huge ionisation energy and still leave an unstable ion.", working: "\\text{gain 1} \\ll \\text{lose 7}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Gaining one electron completes the octet at low energy cost; losing seven would be energetically prohibitive",
            commonErrors: ["Saying chlorine 'cannot' form positive ions (it can in exotic species, but $\\mathrm{Cl^-}$ is the stable ion)."],
          },
        },
        {
          id: "chemsl-u2-valence-electrons-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An element has 5 valence electrons. In which group of the periodic table is it found?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Group 15" },
              { id: "b", text: "Group 5" },
              { id: "c", text: "Group 13" },
              { id: "d", text: "Group 17" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Group number", statement: "For main-group elements the group number equals the number of valence electrons." },
            ],
            steps: [
              { reasoning: "Five valence electrons correspond to group number 15 (the nitrogen family).", working: "5\\ \\text{valence}\\Rightarrow\\text{Group 15}", marks: 1, markCode: "M" },
              { reasoning: "Select the correct group.", working: "\\text{Group 15}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Group 15",
            commonErrors: ["Choosing Group 5 (a transition-metal group, not main-group)."],
          },
        },
        {
          id: "chemsl-u2-valence-electrons-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Magnesium forms the ion $\\mathrm{Mg^{2+}}$. How many electrons occupy its second electron shell in this ion?",
          response: { type: "numeric", parts: [{ label: "electrons in shell 2", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cation formation", statement: "Cations lose electrons from the outermost shell first; inner shells are unchanged." },
            ],
            steps: [
              { reasoning: "Neutral Mg is $2.8.2$; the $2+$ charge removes both outer-shell electrons.", working: "2.8.2-2e^-=2.8", marks: 1, markCode: "M" },
              { reasoning: "The second shell still contains 8 electrons.", working: "2.8\\Rightarrow\\text{shell 2}=8", marks: 1, markCode: "A" },
              { reasoning: "Inner shells are unaffected by ion formation.", working: "\\text{inner shells unchanged}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$ electrons",
            commonErrors: ["Answering 2 (counting only the remaining valence shell).", "Answering 10 (forgetting electrons were lost)."],
          },
        },
        {
          id: "chemsl-u2-valence-electrons-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "An ion has a charge of $+3$ and contains 10 electrons.",
          parts: [
            { label: "a", prompt: "Determine the number of protons in the ion.", marks: 2 },
            { label: "b", prompt: "State the group number of the element.", marks: 1 },
            { label: "c", prompt: "State the number of valence electrons in the neutral atom.", marks: 1 },
          ],
          response: { type: "numeric", parts: [
            { label: "(a) protons", answer: 13 },
            { label: "(b) group", answer: 13 },
            { label: "(c) valence electrons", answer: 3 },
          ] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ion charge", statement: "Charge $=\\text{protons}-\\text{electrons}$, so protons $=\\text{charge}+\\text{electrons}$." },
              { kind: "definition", name: "Group number", statement: "Group number equals the number of valence electrons for main-group elements." },
            ],
            steps: [
              { part: "a", reasoning: "Protons equal charge plus electrons: $3+10=13$.", working: "3+10=13", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the proton number (the element is aluminium).", working: "Z=13\\ \\text{(Al)}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Aluminium is in Group 13.", working: "\\text{Group 13}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The neutral atom lost 3 electrons, so it had 3 valence electrons ($2.8.3$).", working: "3\\ \\text{valence}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 13 protons (b) Group 13 (c) 3 valence electrons",
            commonErrors: ["Subtracting to get 7 protons.", "Confusing the ion's electron count with the atom's valence electrons."],
          },
        },
        {
          id: "chemsl-u2-valence-electrons-q13",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Why do metals generally form positive ions rather than negative ions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They have few valence electrons that are easily lost at relatively low ionisation energy" },
              { id: "b", text: "They have many valence electrons to gain" },
              { id: "c", text: "They are located in Group 18 of the table" },
              { id: "d", text: "They gain electrons more readily than they lose them" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Metallic character", statement: "Metals have low ionisation energies and few valence electrons, so they lose electrons to form cations." },
            ],
            steps: [
              { reasoning: "Metals have 1-3 valence electrons held relatively loosely.", working: "\\text{few valence }e^-", marks: 1, markCode: "M" },
              { reasoning: "Losing them achieves a noble-gas configuration at low energy cost, so cations form.", working: "\\text{cation formation favoured}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** They have few valence electrons that are easily lost at relatively low ionisation energy",
            commonErrors: ["Saying metals gain electrons (that is non-metal behaviour)."],
          },
        },
        {
          id: "chemsl-u2-valence-electrons-q14",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "How many valence electrons does the chloride ion $\\mathrm{Cl^-}$ have? (Cl: configuration $2.8.7$)",
          response: { type: "numeric", parts: [{ label: "valence electrons", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Valence electrons", statement: "Electrons in the outermost shell; for $\\mathrm{Cl^-}$ this is shell $n=3$." },
            ],
            steps: [
              { reasoning: "$\\mathrm{Cl^-}$ gains one electron to become $2.8.8$.", working: "2.8.7+e^-=2.8.8", marks: 1, markCode: "M" },
              { reasoning: "The outermost shell now contains 8 electrons.", working: "8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$ valence electrons",
            commonErrors: ["Answering 7 (the neutral atom count).", "Answering 18 (total electrons)."],
          },
        },
        {
          id: "chemsl-u2-valence-electrons-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Magnesium ($Z=12$) reacts with oxygen ($Z=8$) to form magnesium oxide, $\\mathrm{MgO}$.",
          parts: [
            { label: "a", prompt: "Write the electron configurations of the Mg and O atoms in shell notation.", marks: 2 },
            { label: "b", prompt: "State the electron configuration and charge of each ion formed.", marks: 2 },
            { label: "c", prompt: "Explain how the charges on the ions give the formula $\\mathrm{MgO}$.", marks: 2 },
            { label: "d", prompt: "Explain why the bonding in MgO is ionic rather than covalent.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Valence electrons", statement: "Mg $2.8.2$ has 2 valence electrons; O $2.6$ has 6." },
              { kind: "principle", name: "Octet stability", statement: "Ions form to achieve noble-gas configurations." },
            ],
            steps: [
              { part: "a", reasoning: "Fill shells in order for $Z=12$ and $Z=8$.", working: "\\mathrm{Mg}=2.8.2,\\ \\mathrm{O}=2.6", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both configurations correct.", working: "2.8.2\\ \\text{and}\\ 2.6", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Mg loses its two valence electrons to become $\\mathrm{Mg^{2+}}$ ($2.8$); O gains two electrons to become $\\mathrm{O^{2-}}$ ($2.8$).", working: "\\mathrm{Mg^{2+}}=2.8,\\ \\mathrm{O^{2-}}=2.8", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Charges stated correctly: $+2$ and $-2$.", working: "+2\\ \\text{and}\\ -2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The $+2$ and $-2$ charges cancel in a 1:1 ratio, giving the empirical formula $\\mathrm{MgO}$.", working: "1\\ \\mathrm{Mg^{2+}} : 1\\ \\mathrm{O^{2-}}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Two $\\mathrm{Mg^{2+}}$ would be needed per $\\mathrm{O^{2-}}$ only if charges differed; here they are equal so the ratio is 1:1.", working: "\\text{charges balance 1:1}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Mg is a metal and O a non-metal; the large electronegativity difference causes complete electron transfer, producing ions.", working: "\\text{electron transfer}\\Rightarrow\\text{ions}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The bonding is the electrostatic attraction between $\\mathrm{Mg^{2+}}$ and $\\mathrm{O^{2-}}$ in a lattice — ionic, not shared-electron covalent.", working: "\\text{ionic lattice}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Mg $2.8.2$, O $2.6$ (b) $\\mathrm{Mg^{2+}}=2.8$ ($+2$), $\\mathrm{O^{2-}}=2.8$ ($-2$) (c) equal and opposite charges give a 1:1 ratio, $\\mathrm{MgO}$ (d) electron transfer between metal and non-metal gives an ionic lattice",
            commonErrors: ["Writing the formula as $\\mathrm{MgO_2}$ or $\\mathrm{Mg_2O}$.", "Suggesting the bonding is covalent because both ions have 8 electrons."],
          },
        },
        {
          id: "chemsl-u2-valence-electrons-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Both $\\mathrm{Na^+}$ and $\\mathrm{Mg^{2+}}$ have the electron configuration $2.8$. Explain why $\\mathrm{Mg^{2+}}$ has a smaller ionic radius than $\\mathrm{Na^+}$ despite having the same electron configuration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Isoelectronic species", statement: "Ions with the same electron configuration but different nuclear charges." },
              { kind: "principle", name: "Nuclear attraction", statement: "A greater positive charge pulls the same electron cloud more strongly." },
            ],
            steps: [
              { reasoning: "Both ions have 10 electrons arranged as $1s^22s^22p^6$, so their electron clouds are identical in size and shape.", working: "\\text{same electron cloud}", marks: 1, markCode: "M" },
              { reasoning: "$\\mathrm{Mg^{2+}}$ has 12 protons while $\\mathrm{Na^+}$ has 11.", working: "p=12\\ \\text{vs}\\ 11", marks: 1, markCode: "M" },
              { reasoning: "The extra proton gives $\\mathrm{Mg^{2+}}$ a greater positive nuclear charge.", working: "+12\\ \\text{vs}\\ +11", marks: 1, markCode: "R" },
              { reasoning: "The stronger attraction pulls the same electron cloud closer to the nucleus.", working: "\\text{stronger pull}\\Rightarrow\\text{smaller radius}", marks: 1, markCode: "R" },
              { reasoning: "Therefore $\\mathrm{Mg^{2+}}$ is smaller than $\\mathrm{Na^+}$ even though they are isoelectronic.", working: "r(\\mathrm{Mg^{2+}})<r(\\mathrm{Na^+})", marks: 1, markCode: "A" },
              { reasoning: "Conclusion: ionic radius depends on nuclear charge when electron configurations are identical.", working: "\\text{nuclear charge decides}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mathrm{Mg^{2+}}$ is smaller because its greater nuclear charge (12 vs 11 protons) pulls the same electron configuration closer to the nucleus.",
            commonErrors: ["Claiming the ion with more electrons is larger (both have 10).", "Saying $\\mathrm{Na^+}$ is smaller because sodium is 'lighter'."],
          },
        },
      ],
    },
  ],
};
