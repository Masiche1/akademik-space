import type { Lesson } from "../../../types.ts";

export const lesson211: Lesson = {
  id: "cial-c-u2-lesson-2-1",
  code: "2-1",
  title: "Atomic structure and electron arrangement",
  goal: "I CAN describe subatomic particles, isotopes and electron configurations.",
  standards: ["9701 2.1: atomic structure"],
  vocabulary: [
    {
      term: "Nucleon",
      definition: "Proton or neutron in the nucleus.",
    },
    {
      term: "Isotope",
      definition:
        "Atoms of the same element with the same proton number but different neutron numbers.",
    },
    {
      term: "Relative atomic mass",
      definition:
        "Weighted mean mass of an atom compared with $\\frac{1}{12}$ of a $^{12}$C atom.",
    },
    {
      term: "Orbital",
      definition: "Region of space where an electron is most likely to be found.",
    },
    {
      term: "Electron configuration",
      definition:
        "Arrangement of electrons in shells and subshells, e.g. $1s^22s^22p^6$.",
    },
    {
      term: "Valence electrons",
      definition: "Electrons in the outermost shell; determine chemical behaviour.",
    },
  ],
  concepts: [
    {
      id: "cial-c-u2-subatomic",
      title: "Subatomic particles and isotopes",
      skill: "Relate proton, neutron and electron numbers to atomic and mass numbers.",
      lesson: {
        sections: [
          {
            heading: "The atom",
            body: "Nucleus contains protons ($+1$, $A_r=1$) and neutrons ($0$, $A_r=1$). Electrons ($-1$, $\\approx 1/1836$) occupy shells outside. Atomic number $Z$ = protons = electrons in a neutral atom; mass number $A$ = protons + neutrons.",
          },
          {
            heading: "Isotopes and $A_r$",
            body: "Isotopes have the same $Z$ but different $A$. $A_r$ is the weighted average: $A_r = \\frac{\\sum(\\text{mass number} \\times \\text{abundance})}{\\sum\\text{abundance}}$. E.g. chlorine: $\\frac{35 \\times 75 + 37 \\times 25}{100} = 35.5$.",
          },
          {
            heading: "Ions",
            body: "Cations have fewer electrons than protons ($Na^+$: 11p, 10e); anions have more ($Cl^-$: 17p, 18e). Electron configuration of ions may differ from the neutral atom — $Fe^{2+}$ is $3d^6$, not $3d^6 4s^2$... actually $4s$ empties first.",
          },
        ],
        keyFormulas: [
          {
            name: "Mass number",
            statement: "$A = p + n$; $Z = p$; neutral atom $e = p$.",
          },
          {
            name: "Relative atomic mass",
            statement:
              "$A_r = \\dfrac{\\sum (A_i \\times \\text{abundance}_i)}{100}$",
          },
        ],
        workedExample: {
          problem:
            "An element has isotopes $^{24}$Mg (79%) and $^{26}$Mg (21%). Calculate $A_r$.",
          solution:
            "$A_r = \\frac{24 \\times 79 + 26 \\times 21}{100} = \\frac{1896 + 546}{100} = 24.4$.",
        },
      },
      questions: [
        {
          id: "cial-c-u2-sa-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many protons, neutrons and electrons are in a neutral $^{23}_{11}Na$ atom?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "11 p, 12 n, 11 e" },
              { id: "b", text: "11 p, 11 n, 12 e" },
              { id: "c", text: "12 p, 11 n, 11 e" },
              { id: "d", text: "11 p, 12 n, 12 e" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Atomic notation",
                statement: "$Z$=protons, $A$=protons+neutrons, $e=p$ if neutral.",
              },
            ],
            steps: [
              {
                reasoning: "p=11, n=$23-11=12$, e=11 (neutral).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** 11p, 12n, 11e",
          },
        },
        {
          id: "cial-c-u2-sa-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate $A_r$ of chlorine given $^{35}$Cl is 75% abundant and $^{37}$Cl is 25% abundant.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Relative atomic mass",
                statement:
                  "$A_r=\\frac{\\sum A_i \\times \\text{abundance}_i}{100}$.",
              },
            ],
            steps: [
              {
                reasoning: "$A_r=\\frac{35 \\times 75 + 37 \\times 25}{100}$.",
                working: "\\frac{35 \\times 75 + 37 \\times 25}{100}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$=\\frac{2625 + 925}{100}=\\frac{3550}{100}$.",
                working: "3550/100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$A_r=35.5$.",
                working: "35.5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$35.5$",
          },
        },
        {
          id: "cial-c-u2-sa-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How many protons, neutrons and electrons are in $^{79}_{35}Br^-$?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ion composition",
                statement:
                  "Charge $-1$ means one extra electron; $n=A-Z$.",
              },
            ],
            steps: [
              {
                reasoning: "Protons $=Z=35$.",
                working: "p=35",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Neutrons $=A-Z=79-35=44$.",
                working: "n=44",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Electrons $=p+1=36$ (extra electron for $-1$ charge).",
                working: "e=36",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All three stated: 35p, 44n, 36e.",
                working: "35,44,36",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "35 p, 44 n, 36 e",
            commonErrors: ["Giving 35 electrons — forgetting the extra electron in $Br^-$."],
          },
        },
        {
          id: "cial-c-u2-sa-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Atomic structure.",
          parts: [
            {
              label: "a",
              prompt: "State the number of protons, neutrons and electrons in $^{23}_{11}Na$.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "How many protons, neutrons and electrons are in $Na^+$?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Calculate $A_r$ of an element with isotopes $^{10}$B (20%) and $^{11}$B (80%).",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Explain why isotopes have identical chemical properties.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Isotopes",
                statement:
                  "Same $Z$ and electron arrangement; differ only in neutrons.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "11 p, 12 n, 11 e.",
                working: "11,12,11",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Protons 11, neutrons 12 unchanged.",
                working: "11p,12n",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Electrons $=10$ (one lost).",
                working: "e=10",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$A_r=\\frac{10 \\times 20 + 11 \\times 80}{100}$.",
                working: "\\frac{200+880}{100}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$=\\frac{1080}{100}=10.8$.",
                working: "10.8",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct value stated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Same number of protons and electrons.",
                working: "\\text{same } Z, e",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Identical electron configuration governs chemistry.",
                working: "\\text{same electron config}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Neutrons do not affect chemical bonding.",
                working: "\\text{neutrons irrelevant}",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) 11p 12n 11e (b) 11p 12n 10e (c) 10.8 (d) same electron config",
          },
        },
      ],
    },
    {
      id: "cial-c-u2-electron-config",
      title: "Electron configuration",
      skill: "Write electron configurations and relate them to group and period.",
      lesson: {
        sections: [
          {
            heading: "Shells and subshells",
            body: "Order of filling: $1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, \\ldots$ Write as $1s^22s^22p^6$ etc. Capacity: $s$ holds 2, $p$ holds 6, $d$ holds 10 electrons.",
          },
          {
            heading: "Group and period",
            body: "For main-group elements, group number = number of outer-shell electrons; period = number of shells. $Na$ $[Ne]3s^1$: group 1, period 3. Transition metals: group by $d$-electrons + outer $s$ electrons.",
          },
          {
            heading: "Ions",
            body: "Form cations by losing outer electrons ($Na \\to Na^+ + e^-$); anions by gaining ($Cl + e^- \\to Cl^-$). For transition metals, $4s$ electrons are lost before $3d$.",
          },
        ],
        keyFormulas: [
          {
            name: "Filling order",
            statement:
              "$1s\\ 2s\\ 2p\\ 3s\\ 3p\\ 4s\\ 3d\\ 4p\\ 5s\\ 4d\\ 5p\\ \\ldots$",
          },
          {
            name: "Group/period",
            statement:
              "Group = outer electrons (main group); period = shell count.",
          },
        ],
        workedExample: {
          problem: "Write the electron configuration of calcium (Z=20).",
          solution:
            "$1s^22s^22p^63s^23p^64s^2$ — or $[Ar]4s^2$. Group 2, period 4.",
        },
      },
      questions: [
        {
          id: "cial-c-u2-ec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the maximum number of electrons in a $d$ subshell?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$10$" },
              { id: "b", text: "$6$" },
              { id: "c", text: "$2$" },
              { id: "d", text: "$14$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subshell capacity",
                statement: "$s=2, p=6, d=10, f=14$.",
              },
            ],
            steps: [
              {
                reasoning: "$d$ subshell holds 10 electrons.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$10$",
          },
        },
        {
          id: "cial-c-u2-ec-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the electron configuration of chlorine (Z=17).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Electron configuration",
                statement:
                  "Fill in order $1s,2s,2p,3s,3p,\\ldots$ up to $Z$ electrons.",
              },
            ],
            steps: [
              {
                reasoning: "$1s^22s^22p^63s^23p^5$ or $[Ne]3s^23p^5$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct total of 17 electrons.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1s^22s^22p^63s^23p^5$",
          },
        },
        {
          id: "cial-c-u2-ec-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An element has configuration $[Ar]4s^23d^6$. State its group, period and whether it is a transition metal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Group and period",
                statement:
                  "Period = highest shell (4); transition metals have partially filled $d$.",
              },
            ],
            steps: [
              {
                reasoning: "Highest shell is $n=4$, so period 4.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$3d^6$ is partially filled — transition metal (iron).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Group: $3d$ electrons + $4s$ electrons $=8$ for Fe... group 8.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answers: period 4, group 8, yes transition metal.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Period 4, group 8, transition metal",
            commonErrors: ["Counting only $4s$ electrons for the group."],
          },
        },
        {
          id: "cial-c-u2-ec-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Electron configuration.",
          parts: [
            {
              label: "a",
              prompt: "Write the full configuration of potassium (Z=19).",
              marks: 2,
            },
            {
              label: "b",
              prompt: "State its group and period.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Write the configuration of $K^+$.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Why does $K$ lose its outer electron so readily?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Electron configuration",
                statement:
                  "Fill order and noble-gas shorthand; ions lose outer electrons first.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$1s^22s^22p^63s^23p^64s^1$ or $[Ar]4s^1$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Correct notation accepted.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "One outer electron $\\Rightarrow$ group 1.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Four shells $\\Rightarrow$ period 4.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$K^+$ loses the $4s$ electron: $[Ar]$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct configuration stated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Losing one electron gives stable noble-gas config.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Large atomic radius / low ionisation energy.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Low energy needed to remove outer electron.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) [Ar]4s1 (b) G1 P4 (c) [Ar] (d) stable config + low IE",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-c-u2-atomic-structure-notes",
      title: "Atomic structure and electron arrangement — revision notes",
      summary:
        "Subatomic particles, isotopes, $A_r$ calculations and electron configurations.",
      sections: [
        {
          heading: "Particles and isotopes",
          body: "$Z$ = protons = electrons (neutral); $A$ = p + n. Isotopes: same $Z$, different neutrons. $A_r=\\frac{\\sum A_i \\times \\%_i}{100}$. Ions: adjust electron count by charge; $4s$ electrons are removed before $3d$ in transition metals.",
        },
        {
          heading: "Configurations",
          body: "Fill order $1s\\ 2s\\ 2p\\ 3s\\ 3p\\ 4s\\ 3d\\ 4p$. Capacities $s=2,p=6,d=10$. Group = outer electrons (main group) or $d+s$ electrons (transition); period = highest shell number.",
        },
        {
          heading: "Exam checklist",
          body: "In $A_r$ calculations divide by total abundance (usually 100). For ions, recalculate electrons from charge — don't just copy the atom's configuration.",
        },
      ],
    },
  ],
};
