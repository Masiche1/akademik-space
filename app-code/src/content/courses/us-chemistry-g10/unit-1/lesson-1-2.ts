import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "chem10-u1-lesson-1-2",
  code: "1-2",
  title: "Periodic Trends",
  goal: "I CAN use electron configurations to place elements in the periodic table and explain trends in atomic radius, ionization energy, electronegativity and reactivity.",
  standards: ["HS-PS1-1", "HS-PS1-2", "SEP: Analyzing and Interpreting Data", "CCC: Patterns"],
  vocabulary: [
    { term: "Group", definition: "A vertical column of the periodic table; elements in a group have the same number of valence electrons." },
    { term: "Period", definition: "A horizontal row of the periodic table; the period number equals the highest occupied energy level." },
    { term: "Atomic radius", definition: "Half the distance between the nuclei of two bonded atoms of the same element; a measure of atomic size." },
    { term: "Ionization energy", definition: "The energy needed to remove the outermost electron from a gaseous atom." },
    { term: "Electronegativity", definition: "A measure of how strongly an atom attracts the shared electrons in a chemical bond." },
    { term: "Effective nuclear charge", definition: "The net positive pull felt by valence electrons after the shielding by inner electrons is accounted for." },
    { term: "Shielding", definition: "The reduction in the nucleus's pull on valence electrons caused by repulsion from inner-shell electrons." },
  ],
  concepts: [
    {
      id: "chem10-u1-periodic-organization",
      title: "Organization of the periodic table",
      skill: "Use electron configuration to find an element's group, period and likely properties.",
      lesson: {
        sections: [
          {
            heading: "Rows, columns and blocks",
            body: "The modern periodic table orders elements by increasing **atomic number**. Elements with similar properties line up in vertical **groups** (columns 1-18) because they have the same number of valence electrons. The **period** (row) number equals the highest occupied energy level.\n\n- Group 1: alkali metals (1 valence electron), very reactive.\n- Group 2: alkaline earth metals (2 valence electrons).\n- Group 17: halogens (7 valence electrons), reactive nonmetals.\n- Group 18: noble gases (full outer level), very unreactive.\n\nThe table is also divided into blocks by the last subshell filled: $s$-block (groups 1-2), $p$-block (groups 13-18) and $d$-block (transition metals).",
          },
          {
            heading: "Metals, nonmetals and metalloids",
            body: "Most elements are **metals**: on the left and center, shiny, malleable, good conductors that tend to lose electrons to form positive ions. **Nonmetals** on the right tend to gain electrons to form negative ions and are poor conductors. **Metalloids** (such as Si and Ge) lie along the staircase between them and have in-between properties; they are semiconductors.\n\nTo place an element from its configuration: the highest $n$ gives the period, and the number of valence electrons gives the group for main-group elements. For example, $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^5$ has highest $n = 3$ and 7 valence electrons, so it is in period 3, group 17 (chlorine).",
          },
        ],
        keyFormulas: [
          { name: "Period", statement: "period number $=$ highest occupied energy level $n$" },
          { name: "Main-group number", statement: "groups 1-2: valence electrons $=$ group number; groups 13-18: valence electrons $=$ group number $- 10$" },
          { name: "Same group", statement: "same number of valence electrons, so similar chemical properties" },
        ],
        workedExample: {
          problem: "An element has the electron configuration $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6\\,4s^2$. Identify its period, group and type.",
          solution: "The highest energy level is $n = 4$, so it is in period 4. It has 2 valence electrons ($4s^2$), so it is in group 2. Total electrons are $2+2+6+2+6+2 = 20$, so it is calcium, an alkaline earth metal.",
        },
      },
      questions: [
        {
          id: "chem10-u1-periodic-organization-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Elements in the same group of the periodic table have similar chemical properties because they have the same",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "number of valence electrons" },
              { id: "b", text: "number of energy levels" },
              { id: "c", text: "mass number" },
              { id: "d", text: "number of neutrons" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Group and valence electrons", statement: "Elements in a group have the same number of valence electrons, which controls their bonding." },
            ],
            steps: [
              { reasoning: "Chemical behavior depends on valence electrons, and each group shares the same valence electron count.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** number of valence electrons",
            commonErrors: ["Choosing (b); the number of energy levels is shared by a period, not a group."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "chem10-u1-periodic-organization-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "An atom has the electron configuration $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^4$.\n\nState its period, its group, and the name of the element.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Placing an element", statement: "Highest $n$ gives the period; valence electrons give the group for main-group elements." },
            ],
            steps: [
              { reasoning: "The highest occupied energy level is $n = 3$.", working: "\\text{period } 3", marks: 1, markCode: "B" },
              { reasoning: "Valence electrons are $3s^2\\,3p^4$, which is 6, so the group is $10 + 6 = 16$.", working: "\\text{group } 16", marks: 1, markCode: "B" },
              { reasoning: "The configuration holds 16 electrons, which is atomic number 16.", working: "\\text{sulfur}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Period 3, group 16, sulfur",
            commonErrors: ["Giving group 6 without adding 10 for groups 13-18.", "Stating period 4 by counting subshells instead of the highest $n$."],
            examinerNote: "B1 period 3. B1 group 16 (allow 'group 6A / VIA' or '6 valence electrons'). B1 sulfur / S.",
          },
        },
        {
          id: "chem10-u1-periodic-organization-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Sodium (Na) and potassium (K) are both in group 1. Sodium reacts with water to make hydrogen gas and a basic solution.\n\nPredict how potassium will behave in water compared with sodium, and justify your prediction using the electron configurations $\\text{Na}$: $1s^2\\,2s^2\\,2p^6\\,3s^1$ and $\\text{K}$: $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6\\,4s^1$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Group similarity", statement: "Elements in a group react in similar ways because they have the same number of valence electrons." },
              { kind: "principle", name: "Metal reactivity trend", statement: "Metals become more reactive down a group as the valence electron is easier to remove." },
            ],
            steps: [
              { reasoning: "Both have one valence electron ($3s^1$ and $4s^1$), so potassium also produces hydrogen and a basic solution.", marks: 1, markCode: "B" },
              { reasoning: "Potassium's valence electron is in a higher energy level (n = 4 compared with n = 3), so it is farther from the nucleus.", marks: 1, markCode: "B" },
              { reasoning: "It is also more shielded by inner electrons, so it is lost more easily.", marks: 1, markCode: "B" },
              { reasoning: "Conclusion: potassium reacts more vigorously than sodium.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Potassium reacts in the same way (hydrogen and a basic solution) but more vigorously, because its single valence electron is farther from the nucleus and more shielded, so it is lost more easily.",
            commonErrors: ["Saying potassium is less reactive because it is larger and heavier.", "Not linking the prediction to the valence electron."],
            examinerNote: "B1 same valence electrons / similar reaction. B1 higher energy level or larger atom. B1 more shielding or weaker attraction, easier to lose. R1 more reactive. Allow 'K reacts more violently' oe.",
          },
        },
        {
          id: "chem10-u1-periodic-organization-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student studies three elements, each described only by its electron configuration:\n\n- Element X: $1s^2\\,2s^2\\,2p^6\\,3s^2$\n- Element Y: $1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6$\n- Element Z: $1s^2\\,2s^2\\,2p^5$",
          parts: [
            { label: "a", prompt: "Identify the group and period of each of X, Y and Z.", marks: 3 },
            { label: "b", prompt: "State which element is a noble gas and explain why it is unreactive.", marks: 2 },
            { label: "c", prompt: "Z is in the same group as chlorine. State the name of this group and predict the charge on the ion that Z forms.", marks: 2 },
            { label: "d", prompt: "Element X forms a $2+$ ion. State the number of electrons in this ion.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Placing an element", statement: "Highest $n$ gives the period; valence electrons give the group." },
              { kind: "principle", name: "Octet", statement: "A full outer energy level is stable, so noble gases are unreactive; atoms gain or lose electrons to reach it." },
            ],
            steps: [
              { part: "a", reasoning: "X has 2 valence electrons, $n = 3$: group 2, period 3 (magnesium).", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Y has 8 valence electrons, $n = 3$: group 18, period 3 (argon).", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Z has 7 valence electrons, $n = 2$: group 17, period 2 (fluorine).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Y (argon) is the noble gas.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Its outer energy level is full (8 valence electrons), so it has no tendency to gain, lose or share electrons.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The group is the halogens.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Z gains one electron to fill its outer level, forming $\\text{F}^-$ with charge $1-$.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "X has 12 electrons; the $2+$ ion has lost two.", working: "12 - 2 = 10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) X: group 2, period 3; Y: group 18, period 3; Z: group 17, period 2 (b) Y; full outer level (c) halogens; $1-$ (d) 10",
            commonErrors: ["Reporting the number of subshells instead of the highest energy level as the period.", "Predicting a $1+$ charge for a halogen.", "Giving 14 electrons for the ion by adding."],
            examinerNote: "(a) One mark per element with both group and period correct. (c) Allow 'seven valence electrons' with group name. (d) Allow ecf.",
          },
        },
      ],
    },
    {
      id: "chem10-u1-trends-explained",
      title: "Trends in radius, ionization energy, electronegativity and reactivity",
      skill: "Describe periodic trends and explain them using nuclear charge, energy levels and shielding.",
      lesson: {
        sections: [
          {
            heading: "The trends",
            body: "Three ideas explain every trend: the **effective nuclear charge** felt by valence electrons, the **distance** of those electrons from the nucleus (energy level), and **shielding** by inner electrons.\n\n**Across a period (left to right):** protons increase but the valence electrons are added to the same energy level, so shielding is about constant. The effective nuclear charge increases, pulling electrons in. Atomic radius **decreases**, ionization energy **increases** and electronegativity **increases**.\n\n**Down a group:** each new period adds an energy level, so valence electrons are farther away and more shielded. Atomic radius **increases**, ionization energy **decreases** and electronegativity **decreases**.",
          },
          {
            heading: "Reactivity and exceptions",
            body: "Metals react by losing electrons, so metal reactivity **increases down a group** (lower ionization energy) and decreases across a period. Nonmetals react by gaining electrons, so nonmetal reactivity **decreases down a group** (weaker pull on an incoming electron) and increases across a period up to group 17. Noble gases are the exception because their outer level is full.\n\nSmall dips occur in period 3 ionization energy: Al is lower than Mg because Al's outermost electron is in a $3p$ subshell, which is higher in energy and slightly shielded by the $3s$ electrons.\n\nWhen explaining, always use the pattern: **trend, then cause** (nuclear charge, distance, shielding).",
          },
        ],
        keyFormulas: [
          { name: "Across a period", statement: "radius decreases; ionization energy and electronegativity increase" },
          { name: "Down a group", statement: "radius increases; ionization energy and electronegativity decrease" },
          { name: "Percent change", statement: "$\\dfrac{\\text{old} - \\text{new}}{\\text{old}}\\times100$" },
        ],
        workedExample: {
          problem: "Explain why the first ionization energy of lithium (520 kJ/mol) is higher than that of potassium (419 kJ/mol).",
          solution: "Both have one valence electron, but in lithium it is in the $n = 2$ level and in potassium it is in the $n = 4$ level. The potassium valence electron is farther from the nucleus and is shielded by more inner electrons, so the attraction is weaker and less energy is needed to remove it.",
        },
      },
      questions: [
        {
          id: "chem10-u1-trends-explained-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which element has the largest atomic radius?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sodium (Na)" },
              { id: "b", text: "Magnesium (Mg)" },
              { id: "c", text: "Aluminum (Al)" },
              { id: "d", text: "Chlorine (Cl)" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Radius across a period", statement: "Atomic radius decreases from left to right across a period." },
            ],
            steps: [
              { reasoning: "All four are in period 3. Sodium is farthest left, so it has the fewest protons pulling the same energy level and the largest radius.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Sodium (Na)",
            commonErrors: ["Choosing chlorine because it has the most electrons and protons; more protons in the same level pull the electrons in more strongly."],
            examinerNote: "B1 for sodium.",
          },
        },
        {
          id: "chem10-u1-trends-explained-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the atomic radius increases down group 17 from fluorine to iodine.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Radius down a group", statement: "Each period adds an energy level, so valence electrons are farther from the nucleus." },
            ],
            steps: [
              { reasoning: "Each element down the group has one more occupied energy level than the one above.", marks: 1, markCode: "B" },
              { reasoning: "The valence electrons are therefore farther from the nucleus.", marks: 1, markCode: "B" },
              { reasoning: "Inner electrons shield the valence electrons, so the increase in nuclear charge does not pull the outer level in; the radius increases.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "More energy levels, so valence electrons are farther from the nucleus and more shielded; the larger number of protons does not cancel this effect.",
            commonErrors: ["Saying atoms get bigger only because they have more electrons.", "Ignoring the added energy level."],
            examinerNote: "B1 more energy levels / shells. B1 valence electrons farther away. R1 shielding offsets increased nuclear charge. Reject 'more electrons' without reference to energy levels.",
          },
        },
        {
          id: "chem10-u1-trends-explained-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The first ionization energies of period 3 elements in kJ/mol are: Na 496, Mg 738, Al 578, Si 786, P 1012, S 1000, Cl 1251, Ar 1521.\n\nThe general trend is an increase across the period. Describe the trend and explain it. Then explain why aluminum (578) is lower than magnesium (738).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ionization energy across a period", statement: "Increasing nuclear charge with similar shielding makes valence electrons harder to remove." },
              { kind: "principle", name: "Subshell energy", statement: "A $3p$ electron is higher in energy than a $3s$ electron, and is partly shielded by the $3s$ electrons." },
            ],
            steps: [
              { reasoning: "Ionization energy generally increases from Na (496) to Ar (1521) across the period.", marks: 1, markCode: "B" },
              { reasoning: "Nuclear charge increases while valence electrons are in the same energy level with similar shielding, so the attraction is stronger.", marks: 1, markCode: "B" },
              { reasoning: "Mg has the configuration ending $3s^2$ while Al ends $3s^2\\,3p^1$; Al's outermost electron is in a $3p$ subshell.", marks: 1, markCode: "B" },
              { reasoning: "The $3p$ electron is higher in energy and is shielded by the $3s^2$ electrons, so it is removed more easily despite Al's extra proton.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Ionization energy increases because nuclear charge increases with similar shielding. Al is lower than Mg because its outer electron is in the higher-energy, shielded $3p$ subshell.",
            commonErrors: ["Explaining the dip by saying Al has fewer protons than Mg.", "Failing to mention the $3p$ subshell."],
            examinerNote: "B1 trend described with data. B1 increasing nuclear charge (same level). B1 3p vs 3s. R1 higher energy / shielded, easier to remove. Allow 'sublevel' for 'subshell'.",
          },
        },
        {
          id: "chem10-u1-trends-explained-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The atomic radii of the period 3 elements are in picometers (pm): Na 186, Mg 160, Al 143, Si 118, P 110, S 103, Cl 99. The electronegativity values (Pauling scale) of the halogens are: F 3.98, Cl 3.16, Br 2.96, I 2.66.",
          parts: [
            { label: "a", prompt: "Calculate the percent decrease in atomic radius from Na to Cl. Give your answer to 3 significant figures.", marks: 3 },
            { label: "b", prompt: "Explain why the radius decreases across period 3.", marks: 2 },
            { label: "c", prompt: "Describe the trend in electronegativity down group 17 and explain it.", marks: 3 },
            { label: "d", prompt: "Predict which halogen is the most reactive nonmetal, and justify your answer.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percent decrease", statement: "$\\dfrac{\\text{old} - \\text{new}}{\\text{old}}\\times100$" },
              { kind: "principle", name: "Effective nuclear charge", statement: "More protons with the same shielding pull valence electrons closer." },
              { kind: "principle", name: "Electronegativity down a group", statement: "Larger atoms with more shielding attract bonding electrons less strongly." },
            ],
            steps: [
              { part: "a", reasoning: "Find the decrease in radius.", working: "186 - 99 = 87\\text{ pm}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Divide by the original radius and multiply by 100.", working: "\\frac{87}{186}\\times100", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate to 3 significant figures.", working: "= 46.8\\%", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Across the period, protons increase while electrons are added to the same energy level with similar shielding.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The effective nuclear charge increases, so the electrons are pulled closer to the nucleus.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Electronegativity decreases down the group, from 3.98 (F) to 2.66 (I).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Going down, bonding electrons are in higher energy levels, farther from the nucleus.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "More shielding means a weaker attraction for shared electrons.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Fluorine is the most reactive nonmetal.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "It is the smallest halogen with the least shielding and the highest electronegativity, so it attracts an extra electron most strongly.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $46.8\\%$ (b) Increasing effective nuclear charge in the same energy level (c) Decreases down the group because of greater distance and shielding (d) Fluorine, because it attracts electrons most strongly.",
            commonErrors: ["In (a) dividing by 99 (the new value) to get 87.9%.", "In (b) saying electrons are lost across the period.", "In (d) choosing iodine because it is largest."],
            examinerNote: "(a) Allow 47% only if the working is shown; A1 requires 46.8. (b) Reject 'more shells'. (c) Allow 'F to I' data. (d) Allow ecf for a justified choice in line with the stated trend.",
          },
        },
      ],
    },
  ],
};
