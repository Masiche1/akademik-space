import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "chemhl-u1-lesson-1-2",
  code: "1-2",
  title: "Ionization Energy and Electron Affinity",
  goal: "I CAN explain trends in first and successive ionization energies across periods and down groups, account for anomalies, and relate electron affinity to periodic trends and reactivity.",
  standards: ["Paper 1", "Paper 2", "AHL S1", "AHL S3"],
  vocabulary: [
    {
      term: "First ionization energy",
      definition:
        "The energy required to remove one mole of electrons from one mole of gaseous atoms to form one mole of gaseous $+1$ ions.",
    },
    {
      term: "Successive ionization energy",
      definition:
        "The energy required to remove each successive electron from an already-ionized atom; values rise steeply once a stable configuration is breached.",
    },
    {
      term: "Electron affinity",
      definition:
        "The energy change when one mole of gaseous atoms gains one mole of electrons to form one mole of gaseous $-1$ ions; often exothermic.",
    },
    {
      term: "Shielding effect",
      definition:
        "The reduction in the effective nuclear charge felt by outer electrons caused by inner electrons screening the nucleus.",
    },
    {
      term: "Period discontinuity",
      definition:
        "The drop in first ionization energy between the end of one period (a $p$-block element) and the start of the next (an $s$-block element), caused by the new electron entering a higher shell.",
    },
    {
      term: "Subshell jump",
      definition:
        "The sharp rise in successive ionization energies when the next electron must come from a lower-energy, inner subshell.",
    },
  ],
  concepts: [
    {
      id: "chemhl-u1-ie-trends",
      title: "Ionization energy trends",
      skill:
        "Explain first and successive ionization energy trends across periods and down groups, and account for anomalies using shielding, atomic radius and subshell effects.",
      lesson: {
        sections: [
          {
            heading: "Across a period",
            body: "First ionization energy generally increases across a period because nuclear charge increases while electrons are added to the same shell, so shielding stays roughly constant. Two anomalies occur: between Group 2 and Group 13, the $p$ electron is slightly shielded by the paired $s$ electrons and is easier to remove; between Group 15 and Group 16, the $p^4$ configuration contains a paired electron whose mutual repulsion makes it easier to remove than expected.",
          },
          {
            heading: "Down a group",
            body: "First ionization energy decreases down a group because each element adds a new electron shell. Although nuclear charge increases, the outer electrons are farther from the nucleus and more shielded, and these effects dominate. The same reasoning explains why cesium is the most reactive Group 1 metal — its outer electron is the easiest to remove.",
          },
          {
            heading: "Successive ionization energies",
            body: "Removing a second, third or further electron requires progressively more energy because the ion has a higher charge-to-size ratio, pulling remaining electrons closer. A very large jump signals that the next electron comes from a new, inner shell — for example, magnesium's second IE is small but its third is huge because after losing both $3s$ electrons the next electron must come from the $2p$ shell.",
          },
        ],
        keyFormulas: [
          {
            name: "Ionization energy factors",
            statement:
              "IE increases with nuclear charge and decreases with atomic radius and shielding; across a period charge wins, down a group radius and shielding win.",
          },
          {
            name: "Group 2→13 dip",
            statement:
              "The $np$ electron in Group 13 is shielded by the $ns^2$ pair, so IE is slightly lower than the Group 2 value.",
          },
          {
            name: "Group 15→16 dip",
            statement:
              "The $np^4$ paired electron experiences electron-electron repulsion, so IE of Group 16 is slightly lower than Group 15.",
          },
        ],
        workedExample: {
          problem:
            "The first three successive ionization energies of aluminium are $578$, $1817$ and $2745$ kJ mol$^{-1}$, while the fourth is $11580$ kJ mol$^{-1}$. Explain the large jump.",
          solution:
            "Aluminium is $[Ne]\\,3s^2 3p^1$. The first three electrons come from the $n=3$ shell ($3s^2 3p^1$). After removing all three, the next electron must come from the $n=2$ shell ($2p^6$), which is much closer to the nucleus — hence the huge jump.",
        },
      },
      questions: [
        {
          id: "chemhl-u1-ie-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "First ionization energy generally DECREASES down Group 1 (Li to Cs). The best explanation is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Outer electrons occupy higher shells, farther from the nucleus and more shielded",
              },
              { id: "b", text: "Nuclear charge decreases down the group" },
              { id: "c", text: "Atoms become smaller down the group" },
              { id: "d", text: "Electron pairing increases down the group" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "IE factors",
                statement:
                  "Ionization energy falls as atomic radius increases and shielding increases, even though nuclear charge rises.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each successive element adds a shell, so the outer electron is farther away and better shielded.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Greater radius and shielding outweigh the increased nuclear charge.",
            commonErrors: [
              "Claiming nuclear charge decreases — it increases but is outweighed.",
            ],
          },
        },
        {
          id: "chemhl-u1-ie-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The first ionization energies of Mg, Al and Si are $738$, $578$ and $787$ kJ mol$^{-1}$ respectively. Explain why aluminium's value is lower than both its neighbours'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Group 2→13 anomaly",
                statement:
                  "The $3p$ electron of Al is shielded by the $3s^2$ pair and is slightly easier to remove.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mg ends a period with a stable $3s^2$ configuration — both electrons are tightly held.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Al's outer electron is a $3p$ electron, which is shielded by the paired $3s$ electrons.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Si's $3p$ electron experiences less shielding relative to its higher nuclear charge, so its IE is higher again.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Al's $3p$ electron is shielded by the $3s^2$ pair, making it easier to remove than Mg's paired $3s$ electrons or Si's higher-charge $3p$ electron.",
            commonErrors: [
              "Attributing the dip to aluminium having 'one electron' — the key is subshell shielding.",
            ],
          },
        },
        {
          id: "chemhl-u1-ie-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The successive ionization energies of phosphorus (kJ mol$^{-1}$) are $1012$, $1907$, $2914$, $4964$, $6274$ and $21270$. Explain the pattern, identifying which electrons are removed at each stage and why the sixth value is so large.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Successive IE pattern",
                statement:
                  "IEs rise as positive charge increases; a large jump marks removal from a new inner shell.",
              },
            ],
            steps: [
              {
                reasoning:
                  "P is $[Ne]\\,3s^2 3p^3$: the first five electrons removed are the five $n=3$ valence electrons ($3s^2 3p^3$).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each successive removal increases nuclear attraction on the remaining electrons, so IEs climb steadily.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "After five removals the atom has the stable $[Ne]$ configuration; the sixth electron must come from the $n=2$ shell.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "The $2p$ electrons are far more tightly bound, producing the huge jump to $21270$ kJ mol$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Five $n=3$ electrons are removed with steadily rising IEs; the sixth comes from the tightly bound $n=2$ shell, causing the large jump.",
            commonErrors: [
              "Counting six valence electrons — phosphorus has five ($3s^2 3p^3$).",
              "Saying the jump is 'random' rather than a shell change.",
            ],
          },
        },
        {
          id: "chemhl-u1-ie-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "An element in Period 3 has first ionization energy lower than the element immediately before it in the period.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify which pair of adjacent elements this could describe and explain the electronic reason for the anomaly.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "A second anomaly in the same period involves a $p^4$ configuration. Name the two elements involved and explain the dip.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Explain why the first ionization energy of argon is higher than that of chlorine.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Period anomalies",
                statement:
                  "Group 2→13 dip: $p$ electron shielded by $s^2$ pair. Group 15→16 dip: $p^4$ paired-electron repulsion.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The pair is Mg and Al: Al's $3p^1$ electron is shielded by the $3s^2$ electrons.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "The $p$ subshell is also slightly higher in energy than $s$ at the same shell.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "a",
                reasoning:
                  "So Al's outer electron is easier to remove despite higher nuclear charge.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "The pair is P and S ($3p^3$ vs $3p^4$).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "In S the fourth $p$ electron is paired in an already-occupied orbital.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Electron-electron repulsion in the pair makes it easier to remove than P's half-filled, exchange-stabilised $p^3$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Ar has a stable, completely filled $3p^6$ shell.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Its electron is extremely tightly held, giving a much higher IE than Cl's $3p^5$ electron.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Mg→Al: $3p$ electron shielded by $3s^2$. (b) P→S: paired $3p$ electron repulsion. (c) Ar's filled shell is exceptionally stable.",
            commonErrors: [
              "Mixing up which group is higher — the dip is at Group 13 and Group 16, not at the group before them.",
            ],
          },
        },
        {
          id: "chemhl-u1-ie-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "First ionization energy generally increases across a period mainly because:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Nuclear charge increases while electrons are added to the same shell, so shielding stays roughly constant",
              },
              { id: "b", text: "Atoms become larger across the period" },
              { id: "c", text: "Electrons pair up across the period" },
              { id: "d", text: "Nuclear charge decreases across the period" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "IE factors across a period",
                statement:
                  "Across a period, increasing nuclear charge with constant shielding raises the effective nuclear charge felt by outer electrons.",
              },
            ],
            steps: [
              {
                reasoning:
                  "More protons and the same shell means outer electrons are held more tightly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Increasing nuclear charge with constant shielding",
            commonErrors: [
              "Claiming atoms get larger across a period — radius actually decreases.",
            ],
          },
        },
        {
          id: "chemhl-u1-ie-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The first ionization energy of sulfur is slightly LOWER than that of phosphorus. The best explanation is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Sulfur's fourth $3p$ electron is paired in an occupied orbital, so electron-electron repulsion makes it easier to remove",
              },
              { id: "b", text: "Sulfur has a smaller atomic radius than phosphorus" },
              { id: "c", text: "Phosphorus has no $3p$ electrons" },
              { id: "d", text: "Sulfur has a lower nuclear charge than phosphorus" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Group 15→16 anomaly",
                statement:
                  "The $p^4$ paired electron experiences repulsion, lowering the IE relative to the half-filled $p^3$ configuration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "P has $3p^3$ (half-filled, stable); S has $3p^4$ with one paired orbital.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Paired-electron repulsion in S's $3p^4$ configuration",
            commonErrors: [
              "Saying sulfur's IE is higher because of greater nuclear charge — the pairing effect outweighs it.",
            ],
          },
        },
        {
          id: "chemhl-u1-ie-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Aluminium's first ionization energy is lower than magnesium's. This is because:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Al's outer electron is a $3p$ electron shielded by the $3s^2$ pair, making it easier to remove",
              },
              { id: "b", text: "Aluminium has fewer electrons than magnesium" },
              { id: "c", text: "Magnesium's electrons are unpaired" },
              { id: "d", text: "Aluminium is a noble gas" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Group 2→13 anomaly",
                statement:
                  "The $np$ electron in Group 13 is shielded by the $ns^2$ pair and is slightly easier to remove.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mg's outer electrons are the tightly held $3s^2$ pair; Al's outer electron is a shielded $3p$ electron.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Shielding of the $3p$ electron by the $3s^2$ pair",
            commonErrors: [
              "Attributing the dip to atomic size alone without the subshell-shielding argument.",
            ],
          },
        },
        {
          id: "chemhl-u1-ie-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An element has first ionization energy $520$ kJ mol$^{-1}$ and second ionization energy $7300$ kJ mol$^{-1}$. How many electrons occupy its outermost shell?",
          response: {
            type: "numeric",
            parts: [
              { label: "Outer-shell electrons", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Successive IE jump",
                statement:
                  "The large jump between IE1 and IE2 shows only one electron was in the outermost shell.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Only the first electron comes from the outer shell; the second must come from an inner shell.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer is $1$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1$ electron",
            commonErrors: [
              "Counting total electrons rather than outer-shell electrons.",
            ],
          },
        },
        {
          id: "chemhl-u1-ie-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The first four successive ionization energies of aluminium (kJ mol$^{-1}$) are $578$, $1817$, $2745$ and $11580$. How many electrons are removed from the $n = 3$ shell before the large jump?",
          response: {
            type: "numeric",
            parts: [
              { label: "Electrons removed", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Successive IE jump",
                statement:
                  "Al is $[Ne]\\,3s^2 3p^1$; three $n=3$ electrons are removed before the $n=2$ shell is breached.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The jump occurs between the third and fourth ionization energies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Three electrons ($3s^2 3p^1$) come from the $n = 3$ shell.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer is $3$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$3$ electrons",
            commonErrors: [
              "Answering 4 — the fourth electron comes from the $n=2$ shell, after the jump.",
            ],
          },
        },
        {
          id: "chemhl-u1-ie-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "The first three successive ionization energies of element Y are $590$, $1145$ and $7733$ kJ mol$^{-1}$. Identify the number of valence electrons and suggest the identity of Y.",
          response: {
            type: "numeric",
            parts: [
              { label: "Valence electrons", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Successive IE pattern",
                statement:
                  "Two small IEs followed by a jump indicate an $ns^2$ valence configuration (Group 2).",
              },
            ],
            steps: [
              {
                part: "Valence electrons",
                reasoning:
                  "The jump after the second ionization shows two electrons occupied the outermost shell.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "Valence electrons",
                reasoning:
                  "The $ns^2$ configuration is characteristic of Group 2 — Y is magnesium.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "Valence electrons",
                reasoning:
                  "The data are consistent with Mg: $738$, $1451$, $7733$ kJ mol$^{-1}$ for successive IEs.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "Valence electrons",
                reasoning: "Answer is $2$ valence electrons (magnesium).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2$ valence electrons; magnesium.",
            commonErrors: [
              "Identifying the element as Group 1 because 'one electron is lost easily' — the jump position defines the count.",
            ],
          },
        },
        {
          id: "chemhl-u1-ie-q11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "How many electrons are in the outermost shell of a phosphorus atom ($[Ne]\\,3s^2 3p^3$)?",
          response: {
            type: "numeric",
            parts: [
              { label: "Outermost-shell electrons", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Valence electrons",
                statement:
                  "Valence electrons are those in the outermost shell: $3s^2 3p^3$ gives $5$.",
              },
            ],
            steps: [
              {
                reasoning: "Count the $n = 3$ electrons: $2 + 3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer is $5$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$5$ electrons",
            commonErrors: [
              "Counting all electrons since neon ($15$) rather than just the $n=3$ shell.",
            ],
          },
        },
        {
          id: "chemhl-u1-ie-q12",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 5,
          stem: "Explain why the first ionization energy decreases down Group 1 from lithium to cesium.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Down-group IE trend",
                statement:
                  "Each element down the group adds a shell, so outer electrons are farther from the nucleus and more shielded.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Descending the group adds a new principal shell for the valence electron.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The outer electron is farther from the nucleus, so electrostatic attraction is weaker.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "More inner electrons also increase shielding of the nuclear charge.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "These effects outweigh the increase in nuclear charge down the group.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Hence the outer electron is easiest to remove in cesium, making it the most reactive Group 1 metal.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Radius and shielding increase down the group, so the outer electron is less tightly held and IE falls.",
            commonErrors: [
              "Claiming nuclear charge decreases down the group — it increases but is outweighed.",
            ],
          },
        },
        {
          id: "chemhl-u1-ie-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Explain both anomalies in Period 3 ionization energies: why aluminium's IE is lower than magnesium's, and why sulfur's IE is lower than phosphorus's.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Period anomalies",
                statement:
                  "Group 2→13 dip from $p$-electron shielding by $s^2$; Group 15→16 dip from $p^4$ pairing repulsion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mg ends the $s$-block with $3s^2$; Al begins the $p$-block with $3s^2 3p^1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Al's $3p$ electron is shielded by the paired $3s$ electrons, so it is easier to remove than Mg's $3s$ electron.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "P has $3p^3$ (half-filled, exchange-stabilised); S has $3p^4$ with a paired electron.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The paired $3p$ electron in S experiences electron-electron repulsion, so it is removed more easily than P's unpaired electrons.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Both dips are small departures from the general upward trend across the period.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Both anomalies arise from subshell effects, not from failures of the general nuclear-charge trend.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Al's $3p$ electron is shielded by $3s^2$; S's paired $3p$ electron suffers repulsion — both lower IE relative to neighbours.",
            commonErrors: [
              "Explaining only one anomaly, or attributing both to the same cause.",
            ],
          },
        },
        {
          id: "chemhl-u1-ie-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "The successive ionization energies of magnesium (kJ mol$^{-1}$) are $738$, $1451$, $7733$, $10540$, $13630$ and $18020$. Explain the pattern in terms of electron configuration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Successive IE pattern",
                statement:
                  "Mg is $[Ne]\\,3s^2$: two $n=3$ electrons are removed, then the $n=2$ shell is breached.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The first two electrons removed are the $3s^2$ valence electrons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "IE rises from $738$ to $1451$ because Mg$^+$ has a higher charge-to-size ratio, holding the second electron more strongly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "After both $3s$ electrons are gone, Mg$^{2+}$ has the stable $[Ne]$ configuration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The third electron must come from the $2p$ subshell of the $n = 2$ shell, which is far more tightly bound.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "This produces the huge jump to $7733$ kJ mol$^{-1}$ and the continuing high values.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The pattern of two low values then a jump identifies magnesium as a Group 2 element.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
                  "Two $3s$ electrons are removed with rising IEs; the third comes from the tightly bound $n=2$ shell, causing the large jump.",
            commonErrors: [
              "Saying all twelve electrons are removed from the same shell.",
            ],
          },
        },
        {
          id: "chemhl-u1-ie-q15",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 9,
          stem: "An examiner asks students to explain periodic trends in first ionization energy across Period 3.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain the general increase in first IE from Na to Ar across Period 3.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain the dip between Mg and Al, and the dip between P and S.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Explain why the first IE of argon is the highest in the period.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "IE trends across a period",
                statement:
                  "Nuclear charge rises across the period while shielding is roughly constant; anomalies arise at Group 13 and Group 16.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Across the period, each element adds one proton and one electron to the same $n = 3$ shell.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Nuclear charge increases while shielding stays roughly constant, so effective nuclear charge rises.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Outer electrons are therefore held more tightly and IE increases overall from Na to Ar.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Al's outer electron is a $3p$ electron shielded by the $3s^2$ pair, so it is easier to remove than Mg's $3s$ electron.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "S has a paired $3p$ electron whose mutual repulsion makes it easier to remove than P's half-filled $3p^3$ electrons.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Both dips are small reversals of the general upward trend caused by subshell effects.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Argon has a completely filled $3p^6$ subshell and a stable noble-gas configuration.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Its outer electrons experience the highest effective nuclear charge of the period with no tendency to lose an electron.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Removing an electron would break a stable filled shell, so Ar's IE is the highest in Period 3.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Rising nuclear charge with constant shielding increases IE. (b) Al: $3p$ shielded by $3s^2$; S: paired $3p$ repulsion. (c) Ar's filled shell is exceptionally stable.",
            commonErrors: [
              "Saying IE rises smoothly with no exceptions — the two dips must be explained.",
            ],
          },
        },
        {
          id: "chemhl-u1-ie-q16",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 5,
          stem: "Explain why argon, rather than chlorine, has the higher first ionization energy in Period 3, in terms of electron configuration and stability.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Noble gas stability",
                statement:
                  "A completely filled valence shell is exceptionally stable, so its electrons are very hard to remove.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cl is $[Ne]\\,3s^2 3p^5$; its outer electron occupies a partly filled $p$ subshell.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ar is $[Ne]\\,3s^2 3p^6$ with a complete octet and symmetric electron distribution.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ar's electrons experience high effective nuclear charge and removing one would disrupt a stable filled shell.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Therefore Ar's first IE ($\\approx 1520$ kJ mol$^{-1}$) is far higher than Cl's ($\\approx 1250$ kJ mol$^{-1}$).",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "This is why noble gases are generally unreactive — their electrons are extremely difficult to remove.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Ar's completely filled shell is exceptionally stable, giving it the highest IE in the period.",
            commonErrors: [
              "Saying chlorine's IE is higher because it 'wants' to gain an electron — IE concerns losing electrons.",
            ],
          },
        },
      ],
    },
    {
      id: "chemhl-u1-electron-affinity",
      title: "Electron affinity and periodic reactivity",
      skill:
        "Describe electron affinity trends, relate them to metallic and non-metallic character, and connect ionization energy and electron affinity to an element's reactivity.",
      lesson: {
        sections: [
          {
            heading: "What electron affinity measures",
            body: "Electron affinity is the enthalpy change when a gaseous atom gains an electron: $X(g) + e^- \\to X^-(g)$. For most non-metals this is exothermic (energy released as the added electron is attracted to the nucleus). Halogens have the most exothermic electron affinities because they are one electron short of a stable noble-gas configuration. Adding a second electron is always endothermic — the extra electron is repelled by the negative ion already formed.",
          },
          {
            heading: "Trends",
            body: "Across a period electron affinity generally becomes more exothermic (left to right) as nuclear charge increases and atoms approach a stable configuration. Down a group it becomes less exothermic as the added electron enters a higher, more shielded shell — though fluorine is anomalously less exothermic than chlorine because its small size causes strong electron-electron repulsion in the crowded $2p$ subshell.",
          },
          {
            heading: "Reactivity links",
            body: "An element's chemical reactivity depends on how easily it loses or gains electrons. Low first ionization energy plus low electron affinity (endothermic) → strong reducing metal (Group 1). High electron affinity plus high ionization energy → strong oxidising non-metal (Group 17). The combination of IE and EA determines whether an element forms cations or anions, and hence ionic vs covalent bonding character.",
          },
        ],
        keyFormulas: [
          {
            name: "Electron affinity sign",
            statement:
              "Exothermic $EA < 0$ for most non-metals; adding a second electron is always endothermic.",
          },
          {
            name: "Reactivity rule",
            statement:
              "Low IE → easy cation formation (metal); high EA → easy anion formation (non-metal).",
          },
          {
            name: "Fluorine anomaly",
            statement:
              "F has lower EA magnitude than Cl because the small atom repels the added electron strongly.",
          },
        ],
        workedExample: {
          problem:
            "Explain why sodium reacts violently with chlorine but magnesium reacts only moderately with oxygen, in terms of ionization energy and electron affinity.",
          solution:
            "Na has a very low first IE (easy to form Na$^+$) and Cl has a very high EA (easy to form Cl$^-$), so electron transfer is extremely favourable — a violent redox reaction. Mg has a higher IE (two electrons to remove) so it is a weaker reducing agent and reacts more moderately.",
        },
      },
      questions: [
        {
          id: "chemhl-u1-ea-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which element has the MOST exothermic first electron affinity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fluorine" },
              { id: "b", text: "Chlorine" },
              { id: "c", text: "Oxygen" },
              { id: "d", text: "Sodium" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Electron affinity trend",
                statement:
                  "Halogens have the most exothermic EA; Cl exceeds F because F's small size causes electron-electron repulsion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Chlorine is a halogen one electron short of a stable shell, with less repulsion than fluorine.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Chlorine",
            commonErrors: [
              "Choosing fluorine — it is the classic anomaly because its small radius increases repulsion.",
            ],
          },
        },
        {
          id: "chemhl-u1-ea-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "The first electron affinity of oxygen is $-141$ kJ mol$^{-1}$, but adding a SECOND electron to form O$^{2-}$ requires $+844$ kJ mol$^{-1}$. Explain this dramatic difference.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Second EA endothermic",
                statement:
                  "Adding an electron to a negative ion is always endothermic because of electrostatic repulsion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The first electron is attracted to the neutral nucleus — energy is released.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "O$^-$ already carries a negative charge, so the second electron is repelled.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Overcoming this repulsion requires energy input, making the second EA strongly endothermic.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "First EA is exothermic (attraction to nucleus); second is endothermic (repulsion by the negative ion).",
            commonErrors: [
              "Thinking oxygen 'wants' two electrons equally — the second is energetically very costly.",
            ],
          },
        },
        {
          id: "chemhl-u1-ea-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Predict, with justification, the sign (exothermic or endothermic) of the first electron affinity for each of: sodium, chlorine, neon.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "EA sign depends on stability",
                statement:
                  "Atoms close to a noble-gas configuration release energy on gaining an electron; atoms with stable or nearly-full shells may not.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Na is a metal with low IE; adding an electron to form Na$^-$ is endothermic because Na$^-$ is unstable.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Cl is one electron short of Ar; gaining it completes the shell, so EA is strongly exothermic.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ne already has a complete octet; adding an electron enters a new shell with strong repulsion, so EA is endothermic.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Only non-metals near a stable configuration have exothermic first EA.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Na: endothermic; Cl: exothermic; Ne: endothermic.",
            commonErrors: [
              "Assuming every atom releases energy gaining an electron — only those approaching a stable configuration do.",
            ],
          },
        },
        {
          id: "chemhl-u1-ea-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Compare the reactivity of the Group 1 metals and the Group 17 halogens in terms of ionization energy and electron affinity.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain why Group 1 metals become MORE reactive down the group.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain why Group 17 halogens become LESS reactive down the group (F > Cl > Br > I in oxidising power).",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Use ionization energy and electron affinity to explain why NaCl forms an ionic lattice while Cl$_2$ is a covalent molecule.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reactivity = IE + EA",
                statement:
                  "Metals react by losing electrons (low IE favours); halogens react by gaining electrons (high EA favours).",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Down Group 1, atomic radius increases and the outer electron is more shielded.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "a",
                reasoning:
                  "First IE decreases down the group, so the metal loses its electron more easily.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "More vigorous reactions with water/oxygen result — reactivity increases.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Down Group 17, the added electron enters a higher, more shielded shell.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Electron affinity magnitude decreases, so the halogen attracts an electron less strongly.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Oxidising power decreases down the group.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Na has very low IE (easily forms Na$^+$) and Cl has very high EA (easily forms Cl$^-$).",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Complete electron transfer gives ions that pack into an ionic lattice; two Cl atoms share electrons equally instead.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Group 1 reactivity rises as IE falls; halogen oxidising power falls as EA weakens; Na→Na$^+$ + Cl→Cl$^-$ enables ionic NaCl.",
            commonErrors: [
              "Claiming halogens get MORE reactive down the group — the trend is opposite to Group 1.",
            ],
          },
        },
        {
          id: "chemhl-u1-ea-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For most non-metals, the first electron affinity is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Endothermic, requiring energy input" },
              {
                id: "b",
                text: "Exothermic, releasing energy as the added electron is attracted to the nucleus",
              },
              { id: "c", text: "Always zero" },
              { id: "d", text: "Positive and increasing down each group" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Electron affinity",
                statement:
                  "$X(g) + e^- \\to X^-(g)$; for most non-metals this is exothermic.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The added electron is attracted to the nucleus of a neutral atom, releasing energy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Exothermic",
            commonErrors: [
              "Thinking gaining an electron always costs energy — only the second electron does.",
            ],
          },
        },
        {
          id: "chemhl-u1-ea-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Fluorine's first electron affinity is LESS exothermic than chlorine's, even though fluorine is higher in Group 17. The best explanation is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Fluorine's small atomic radius causes strong electron-electron repulsion in the crowded $2p$ subshell",
              },
              { id: "b", text: "Fluorine has a lower nuclear charge than chlorine" },
              { id: "c", text: "Chlorine has more electrons than fluorine" },
              { id: "d", text: "Fluorine cannot form negative ions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fluorine anomaly",
                statement:
                  "F's tiny size means the added electron is strongly repelled by the existing $2p$ electrons, reducing the energy released.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In F the incoming electron enters an already-crowded, small $2p$ subshell.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Electron-electron repulsion in the small fluorine atom",
            commonErrors: [
              "Assuming the trend down a group is perfectly smooth — fluorine is the classic exception.",
            ],
          },
        },
        {
          id: "chemhl-u1-ea-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The SECOND electron affinity of any element is always endothermic because:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The second electron is repelled by the negative charge already on the ion",
              },
              { id: "b", text: "The nucleus has no charge left" },
              { id: "c", text: "The second electron enters a completely empty shell" },
              { id: "d", text: "Electron affinity only applies to the first electron" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Second EA endothermic",
                statement:
                  "Adding an electron to a negative ion is opposed by electrostatic repulsion, so energy must be supplied.",
              },
            ],
            steps: [
              {
                reasoning:
                  "X$^-$ already carries a negative charge that repels the incoming electron.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Repulsion by the negatively charged ion",
            commonErrors: [
              "Thinking the second EA could be exothermic for very electronegative elements — it never is.",
            ],
          },
        },
        {
          id: "chemhl-u1-ea-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "The first electron affinity of chlorine is $-349$ kJ mol$^{-1}$. Calculate the energy released, in kJ, when $2.0$ mol of gaseous chlorine atoms each gain one electron.",
          response: {
            type: "numeric",
            parts: [
              { label: "Energy released", answer: 698 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Electron affinity enthalpy",
                statement:
                  "$EA = -349$ kJ mol$^{-1}$ means $349$ kJ is released per mole of Cl atoms gaining one electron each.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Scale the molar energy change by the amount of substance.",
                working: "349 \\times 2.0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Energy released is positive in magnitude: $698$ kJ.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer is $698$ kJ released.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$698$ kJ released",
            commonErrors: [
              "Reporting $-698$ kJ as 'released' — the sign convention gives a negative enthalpy change but the energy released is positive.",
            ],
          },
        },
        {
          id: "chemhl-u1-ea-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "The first electron affinity of oxygen is $-141$ kJ mol$^{-1}$ and the second is $+844$ kJ mol$^{-1}$. Calculate the overall enthalpy change for $O(g) + 2e^- \\to O^{2-}(g)$ per mole of oxygen atoms.",
          response: {
            type: "numeric",
            parts: [
              { label: "Overall enthalpy change", answer: 703 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Summing electron affinities",
                statement:
                  "Overall enthalpy change is the sum of the first and second electron affinities.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Add the exothermic first EA and the endothermic second EA.",
                working: "-141 + 844",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The net change is endothermic.",
                working: "+703 \\text{ kJ mol}^{-1}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This explains why O$^{2-}$ does not form in simple ionic compounds without a large lattice-energy compensation.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Answer is $+703$ kJ mol$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$+703$ kJ mol$^{-1}$ (endothermic overall)",
            commonErrors: [
              "Subtracting the second EA from the first instead of adding the signed values.",
            ],
          },
        },
        {
          id: "chemhl-u1-ea-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The electron affinity of element Z is $+120$ kJ mol$^{-1}$ (endothermic). Calculate the enthalpy change, in kJ, when $0.25$ mol of gaseous Z atoms each gain one electron.",
          response: {
            type: "numeric",
            parts: [
              { label: "Enthalpy change", answer: 30 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Scaling EA by amount",
                statement: "Enthalpy change $= EA \\times n$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Multiply the molar electron affinity by the amount of substance.",
                working: "120 \\times 0.25",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The positive sign indicates endothermic — energy is required.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer is $+30$ kJ.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$+30$ kJ (endothermic)",
            commonErrors: [
              "Dropping the sign — a positive EA means energy must be supplied.",
            ],
          },
        },
        {
          id: "chemhl-u1-ea-q11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "How many electrons must a chlorine atom gain to achieve a stable noble-gas electron configuration?",
          response: {
            type: "numeric",
            parts: [
              { label: "Electrons gained", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Halogen electron gain",
                statement:
                  "Halogens are one electron short of a noble-gas octet, so they gain exactly one electron.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cl is $[Ne]\\,3s^2 3p^5$; one more electron completes the $3p$ subshell.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer is $1$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1$ electron",
            commonErrors: [
              "Answering 8 — that is the octet size, not the number needed.",
            ],
          },
        },
        {
          id: "chemhl-u1-ea-q12",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 5,
          stem: "Explain how ionization energy and electron affinity together determine whether an element forms cations or anions, and hence its metallic or non-metallic character.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reactivity rule",
                statement:
                  "Low IE favours cation formation (metallic); high EA favours anion formation (non-metallic).",
              },
            ],
            steps: [
              {
                reasoning:
                  "An element with a low first IE loses electrons easily, forming a positive ion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Low EA (endothermic or weakly exothermic) means gaining electrons is unfavourable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Together these properties make the element a reducing agent — a metal.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Conversely, a high EA means electrons are gained easily, forming a negative ion; a high IE prevents electron loss.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Such elements are oxidising agents — non-metals — and the pair of values predicts bonding type (ionic vs covalent).",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Low IE + low EA → metal (cation former); high IE + high EA → non-metal (anion former).",
            commonErrors: [
              "Considering only ionization energy and ignoring electron affinity.",
            ],
          },
        },
        {
          id: "chemhl-u1-ea-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Explain why chlorine has a more exothermic first electron affinity than fluorine, despite fluorine's higher position in Group 17 and higher electronegativity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fluorine anomaly",
                statement:
                  "F's small radius packs eight $2p$ electrons tightly, so the added electron experiences strong repulsion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both atoms are one electron short of a noble-gas configuration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Fluorine's $2p$ subshell is much smaller and more crowded than chlorine's $3p$ subshell.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The incoming electron in F is repelled strongly by the existing $2p$ electrons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "In Cl the larger $3p$ subshell accommodates the extra electron with less repulsion.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "So although F attracts the electron strongly overall, the net energy released is smaller than for Cl.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "This is the classic exception to the otherwise smooth down-group trend in electron affinity.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Fluorine's small size causes greater electron-electron repulsion, so Cl has the more exothermic EA.",
            commonErrors: [
              "Ignoring the repulsion term and citing only nuclear attraction.",
            ],
          },
        },
        {
          id: "chemhl-u1-ea-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Predict and explain the sign of the first electron affinity for sodium, sulfur and argon.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "EA sign depends on stability",
                statement:
                  "Atoms approaching a stable configuration gain energy on adding an electron; stable or nearly-full shells resist it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Na is a metal far from a noble-gas configuration as an anion; Na$^-$ is unstable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Adding an electron to Na requires energy — the first EA is endothermic (or only very weakly exothermic).",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "S is two electrons short of an octet; gaining one electron moves it toward stability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "S's first EA is exothermic — energy is released.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Ar already has a complete octet; the added electron would enter a new shell with strong repulsion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ar's first EA is endothermic.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Na: endothermic; S: exothermic; Ar: endothermic.",
            commonErrors: [
              "Assuming every atom releases energy on gaining an electron.",
            ],
          },
        },
        {
          id: "chemhl-u1-ea-q15",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 9,
          stem: "A student compares the reactivity of sodium and chlorine using ionization energy and electron affinity data.",
          parts: [
            {
              label: "a",
              prompt:
                "Na has IE $= 496$ kJ mol$^{-1}$ and EA $= -53$ kJ mol$^{-1}$; Cl has IE $= 1251$ kJ mol$^{-1}$ and EA $= -349$ kJ mol$^{-1}$. Explain, using these values, why Na loses electrons easily while Cl gains them easily.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain why the reaction $2Na + Cl_2 \\to 2NaCl$ is so exothermic in terms of the ionization energy and electron affinity of the two elements.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Explain why NaCl forms an ionic lattice whereas $Cl_2$ is a simple covalent molecule.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "IE and EA determine bonding",
                statement:
                  "Low IE + high EA between two elements makes complete electron transfer favourable, giving ionic bonding.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Na's low IE ($496$ kJ mol$^{-1}$) means its $3s$ electron is cheap to remove.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Cl's very negative EA ($-349$ kJ mol$^{-1}$) means it releases lots of energy gaining an electron.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Cl's high IE ($1251$) means it will not lose electrons — only gain them.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Forming Na$^+$ costs only $496$ kJ mol$^{-1}$ while forming Cl$^-$ releases $349$ kJ mol$^{-1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The lattice energy released when Na$^+$ and Cl$^-$ pack together is huge and more than compensates the remaining cost.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The overall reaction is therefore strongly exothermic.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Na readily forms Na$^+$ and Cl readily forms Cl$^-$ — complete electron transfer is favourable.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "The resulting ions are held by strong electrostatic attractions in a giant ionic lattice.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "In $Cl_2$ both atoms are identical with equal electronegativity, so electrons are shared equally — covalent, not ionic.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Na: low IE loses $e^-$; Cl: high EA gains $e^-$, high IE prevents loss. (b) Cheap ionization + favourable EA + huge lattice energy → exothermic. (c) NaCl: ions in lattice; $Cl_2$: equal sharing between identical atoms.",
            commonErrors: [
              "Ignoring lattice energy — it is what makes the overall reaction exothermic despite the IE cost.",
            ],
          },
        },
        {
          id: "chemhl-u1-ea-q16",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 5,
          stem: "Explain why the oxidising power of the halogens decreases down Group 17 (F $>$ Cl $>$ Br $>$ I).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Halogen oxidising trend",
                statement:
                  "Oxidising power depends on the energy released when the halogen gains an electron (electron affinity).",
              },
            ],
            steps: [
              {
                reasoning:
                  "An oxidising agent gains electrons; halogens gain one electron to complete their octet.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Down the group the added electron enters a higher, more shielded shell, farther from the nucleus.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The attraction between the nucleus and the added electron weakens, so electron affinity becomes less exothermic.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Less energy released on gaining an electron means less driving force to oxidise other substances.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Fluorine is the strongest oxidiser, with oxidising power decreasing F $>$ Cl $>$ Br $>$ I.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "EA weakens down the group as the added electron is farther and more shielded, so oxidising power decreases F $>$ Cl $>$ Br $>$ I.",
            commonErrors: [
              "Confusing oxidising power with reactivity of metals — halogens are non-metals that gain electrons.",
            ],
          },
        },
      ],
    },
  ],
};
