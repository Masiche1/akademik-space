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
              { id: "a", text: "11 p, 11 n, 12 e" },
              { id: "b", text: "11 p, 12 n, 11 e" },
              { id: "c", text: "12 p, 11 n, 11 e" },
              { id: "d", text: "11 p, 12 n, 12 e" },
            ],
            correctChoiceId: "b",
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
            finalAnswer: "**(b)** 11p, 12n, 11e",
          },
        },
        {
          id: "cial-c-u2-sa-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate $A_r$ of chlorine given $^{35}$Cl is 75% abundant and $^{37}$Cl is 25% abundant.",
          response: { type: "numeric", parts: [{ label: "Ar", answer: 35.5 }] },
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
        {
          id: "cial-c-u2-sa-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many electrons are in a neutral atom with atomic number $20$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$22$" },
              { id: "b", text: "$20$" },
              { id: "c", text: "$10$" },
              { id: "d", text: "$18$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Neutral atom", statement: "electrons = protons = Z." }],
            steps: [{ reasoning: "A neutral atom has 20 electrons.", marks: 1, markCode: "A" }],
            finalAnswer: "$20$",
          },
        },
        {
          id: "cial-c-u2-sa-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate $A_r$ of an element with isotopes $^{24}$Mg (60%) and $^{26}$Mg (40%).",
          response: { type: "numeric", parts: [{ label: "Ar", answer: 24.8 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Relative atomic mass", statement: "Weighted mean by abundance." }],
            steps: [
              { reasoning: "Ar=(24*60+26*40)/100.", working: "(24*60+26*40)/100", marks: 1, markCode: "M" },
              { reasoning: "Ar=(1440+1040)/100=24.8.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$24.8$",
          },
        },
        {
          id: "cial-c-u2-sa-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many electrons are in $^{40}_{20}Ca^{2+}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$20$" },
              { id: "b", text: "$18$" },
              { id: "c", text: "$40$" },
              { id: "d", text: "$22$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Ion composition", statement: "Charge changes electron count only." }],
            steps: [{ reasoning: "Ca has 20 electrons and Ca2+ loses two, giving 18.", marks: 1, markCode: "A" }],
            finalAnswer: "$18$ electrons",
          },
        },
        {
          id: "cial-c-u2-sa-q8",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An element has isotopes $^{10}$B (20%) and $^{11}$B (80%). Calculate its $A_r$.",
          response: { type: "numeric", parts: [{ label: "Ar", answer: 10.8 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Ar", statement: "Weighted average of mass numbers." }],
            steps: [
              { reasoning: "Ar=(10*20+11*80)/100=(200+880)/100.", working: "1080/100", marks: 1, markCode: "M" },
              { reasoning: "Ar=10.8.", marks: 1, markCode: "A" },
              { reasoning: "$^{11}$B is more abundant at 80%.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$A_r=10.8$; $^{11}$B more abundant",
          },
        },
        {
          id: "cial-c-u2-sa-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement defines isotopes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same proton number, different neutron numbers" },
              { id: "b", text: "Different elements with same mass" },
              { id: "c", text: "Same neutron number, different proton numbers" },
              { id: "d", text: "Same mass number, different proton numbers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Isotopes", statement: "Same Z, different A." }],
            steps: [{ reasoning: "Isotopes differ only in neutron number.", marks: 1, markCode: "A" }],
            finalAnswer: "Same Z, different neutrons",
          },
        },
        {
          id: "cial-c-u2-sa-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why do isotopes have the same chemical properties?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They have the same mass number" },
              { id: "b", text: "They have the same electron configuration" },
              { id: "c", text: "Neutrons control chemical bonding" },
              { id: "d", text: "They have the same neutron number" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Chemical behaviour", statement: "Electrons determine chemistry." }],
            steps: [{ reasoning: "Same protons and electrons give identical electron configuration.", marks: 1, markCode: "A" }],
            finalAnswer: "Same electron arrangement",
          },
        },
        {
          id: "cial-c-u2-sa-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many electrons are in $^{35}_{17}Cl^-$?",
          response: { type: "numeric", parts: [{ label: "electrons", answer: 18, unit: "e" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Anion", statement: "Charge -1 adds one electron." }],
            steps: [
              { reasoning: "Neutral Cl has 17 electrons; Cl- gains one.", working: "17+1", marks: 1, markCode: "M" },
              { reasoning: "Electrons = 18.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$18$",
          },
        },
        {
          id: "cial-c-u2-sa-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An ion has 16 protons, 18 neutrons and 18 electrons. Give its mass number, atomic number and charge.",
          response: { type: "numeric", parts: [{ label: "mass number", answer: 34 }, { label: "atomic number", answer: 16 }, { label: "charge", answer: -2 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Nuclear notation", statement: "A=p+n; charge=e-p." }],
            steps: [
              { reasoning: "Mass number A=16+18=34.", working: "16+18=34", marks: 1, markCode: "M" },
              { reasoning: "Atomic number Z=16.", marks: 1, markCode: "M" },
              { reasoning: "Electrons exceed protons by 2, so the charge is -2.", working: "18-16=2, charge=-2", marks: 1, markCode: "M" },
              { reasoning: "Notation $^{34}_{16}S^{2-}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$^{34}_{16}S^{2-}$",
            commonErrors: ["Giving +2 because 18>16 without checking electron excess."],
          },
        },
        {
          id: "cial-c-u2-sa-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the mass number represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Electrons plus protons" },
              { id: "b", text: "Protons plus neutrons" },
              { id: "c", text: "Neutrons only" },
              { id: "d", text: "Protons only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Mass number", statement: "A = p + n." }],
            steps: [{ reasoning: "Mass number counts nucleons.", marks: 1, markCode: "A" }],
            finalAnswer: "Protons + neutrons",
          },
        },
        {
          id: "cial-c-u2-sa-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate $A_r$ of chlorine if $^{35}$Cl is 70% abundant and $^{37}$Cl is 30% abundant.",
          response: { type: "numeric", parts: [{ label: "Ar", answer: 35.6 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Ar", statement: "Weighted mean." }],
            steps: [
              { reasoning: "Ar=(35*70+37*30)/100=(2450+1110)/100.", working: "3560/100", marks: 1, markCode: "M" },
              { reasoning: "Ar=35.6.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$35.6$",
          },
        },
        {
          id: "cial-c-u2-sa-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An element has atomic number 8 and mass number 18. Give the numbers of protons, neutrons and electrons in its neutral atom.",
          response: { type: "numeric", parts: [{ label: "protons", answer: 8 }, { label: "neutrons", answer: 10 }, { label: "electrons", answer: 8 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Element identification", statement: "Z identifies the element." }],
            steps: [
              { reasoning: "Z=8 is oxygen.", marks: 1, markCode: "M" },
              { reasoning: "p=8 and n=18-8=10.", working: "8p,10n", marks: 1, markCode: "M" },
              { reasoning: "Neutral atom has 8 electrons.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Oxygen; 8p, 10n, 8e",
          },
        },
        {
          id: "cial-c-u2-sa-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Atomic structure problem.",
          parts: [
            { label: "a", prompt: "State the numbers of protons, neutrons and electrons in neutral $^{39}_{19}K$.", marks: 2 },
            { label: "b", prompt: "How many electrons are in $K^+$?", marks: 1 },
            { label: "c", prompt: "Calculate $A_r$ for isotopes $^{79}$Br (50%) and $^{81}$Br (50%).", marks: 3 },
            { label: "d", prompt: "Explain why the two bromine isotopes have identical chemical properties.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Isotopes", statement: "Same Z, different neutrons." }],
            steps: [
              { part: "a", reasoning: "p=19, n=39-19=20, e=19.", working: "19,20,19", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three values correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "K+ has 18 electrons.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Ar=(79*50+81*50)/100=(3950+4050)/100.", working: "8000/100", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Ar=80.0.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct value stated.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Same protons and electron configuration.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Chemistry depends on electrons, not neutrons.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 19p 20n 19e (b) 18e (c) 80.0 (d) same electron config",
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
              { id: "a", text: "$14$" },
              { id: "b", text: "$2$" },
              { id: "c", text: "$6$" },
              { id: "d", text: "$10$" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cial-c-u2-ec-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which subshell is filled immediately after $3p$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4s$" },
              { id: "b", text: "$5s$" },
              { id: "c", text: "$4p$" },
              { id: "d", text: "$3d$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Filling order", statement: "1s 2s 2p 3s 3p 4s 3d 4p." }],
            steps: [{ reasoning: "4s fills before 3d.", marks: 1, markCode: "A" }],
            finalAnswer: "$4s$",
          },
        },
        {
          id: "cial-c-u2-ec-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the electron configuration of oxygen (Z=8)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1s^22s^12p^5$" },
              { id: "b", text: "$1s^22s^23s^2$" },
              { id: "c", text: "$1s^22s^22p^4$" },
              { id: "d", text: "$1s^22s^22p^6$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Electron configuration", statement: "Fill subshells in order." }],
            steps: [{ reasoning: "Eight electrons fill 1s2 2s2 2p4.", marks: 1, markCode: "A" }],
            finalAnswer: "$1s^22s^22p^4$",
          },
        },
        {
          id: "cial-c-u2-ec-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "State the group and period of an element with configuration $[Ne]3s^23p^4$.",
          response: { type: "numeric", parts: [{ label: "group", answer: 16 }, { label: "period", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Group and period", statement: "Group = outer electrons; period = highest shell." }],
            steps: [
              { reasoning: "Outer shell has 3s2+3p4 = 6 electrons, so group 16/6A.", marks: 1, markCode: "M" },
              { reasoning: "Highest shell is n=3, so period 3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Group 16, period 3",
          },
        },
        {
          id: "cial-c-u2-ec-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "An element has configuration $[Ar]4s^23d^7$. Is it a transition metal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yes, because all elements with $d$ electrons are transition metals" },
              { id: "b", text: "No, because it is in period 4" },
              { id: "c", text: "Yes, because $3d$ is partially filled" },
              { id: "d", text: "No, because it has a filled $4s$ subshell" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Transition metal", statement: "Partially filled d subshell." }],
            steps: [{ reasoning: "$3d^7$ is partially filled, so it is a transition metal.", marks: 1, markCode: "A" }],
            finalAnswer: "Yes",
          },
        },
        {
          id: "cial-c-u2-ec-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the maximum number of electrons in a $p$ subshell?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "$10$" },
              { id: "c", text: "$14$" },
              { id: "d", text: "$6$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Subshell capacity", statement: "s=2, p=6, d=10." }],
            steps: [{ reasoning: "p subshell holds 6 electrons.", marks: 1, markCode: "A" }],
            finalAnswer: "$6$",
          },
        },
        {
          id: "cial-c-u2-ec-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the electron configuration of $Na^+$ (Z=11)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$[Ne]3s^1$" },
              { id: "b", text: "$[Ne]$" },
              { id: "c", text: "$[Ar]$" },
              { id: "d", text: "$1s^22s^22p^63s^1$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Ion configuration", statement: "Remove outer electrons for cations." }],
            steps: [{ reasoning: "Na+ has 10 electrons, the same configuration as neon.", marks: 1, markCode: "A" }],
            finalAnswer: "$[Ne]$",
          },
        },
        {
          id: "cial-c-u2-ec-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the atomic number of an element with configuration $1s^22s^22p^63s^23p^6$?",
          response: { type: "numeric", parts: [{ label: "Z", answer: 18 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Configuration", statement: "Number of electrons equals Z for neutral atom." }],
            steps: [
              { reasoning: "Total electrons = 2+2+6+2+6 = 18.", working: "18", marks: 1, markCode: "M" },
              { reasoning: "Z = 18 (argon).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$18$",
          },
        },
        {
          id: "cial-c-u2-ec-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write the configuration of $Fe^{2+}$ (Z=26) and explain which electrons are lost first.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Transition ion", statement: "4s electrons are removed before 3d." }],
            steps: [
              { reasoning: "Fe is $[Ar]4s^23d^6$.", marks: 1, markCode: "M" },
              { reasoning: "Fe2+ loses the two 4s electrons.", marks: 1, markCode: "M" },
              { reasoning: "Configuration is $[Ar]3d^6$.", marks: 1, markCode: "M" },
              { reasoning: "4s electrons are lost first because they are higher in energy once 3d begins filling.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$[Ar]3d^6$; 4s electrons removed first",
          },
        },
        {
          id: "cial-c-u2-ec-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is $4s$ filled before $3d$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because $4s$ has lower energy than $3d$ at that point" },
              { id: "b", text: "Because $4s$ holds more electrons" },
              { id: "c", text: "Because $3d$ is filled first" },
              { id: "d", text: "Because $3d$ cannot hold electrons" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Orbital energy", statement: "Filling order follows energy." }],
            steps: [{ reasoning: "4s is lower in energy than 3d during filling.", marks: 1, markCode: "A" }],
            finalAnswer: "$4s$ has lower energy",
          },
        },
        {
          id: "cial-c-u2-ec-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many electrons are in the configuration $[Ar]4s^23d^6$?",
          response: { type: "numeric", parts: [{ label: "electrons", answer: 26 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Electron count", statement: "[Ar]=18 plus outer electrons." }],
            steps: [
              { reasoning: "18 + 2 + 6 = 26 electrons.", working: "18+2+6=26", marks: 1, markCode: "M" },
              { reasoning: "Atomic number is 26 (iron).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$26$",
          },
        },
        {
          id: "cial-c-u2-ec-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which electrons are removed first when forming transition metal cations?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4s$ electrons" },
              { id: "b", text: "$3p$ electrons" },
              { id: "c", text: "Core electrons" },
              { id: "d", text: "$3d$ electrons" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Ion formation", statement: "Remove highest-energy electrons first." }],
            steps: [{ reasoning: "Once 3d starts filling, 4s is higher in energy and lost first.", marks: 1, markCode: "A" }],
            finalAnswer: "$4s$ electrons",
          },
        },
        {
          id: "cial-c-u2-ec-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Electron configuration problem.",
          parts: [
            { label: "a", prompt: "Write the full configuration of calcium (Z=20).", marks: 2 },
            { label: "b", prompt: "State its group and period.", marks: 2 },
            { label: "c", prompt: "Write the configuration of Ca2+.", marks: 2 },
            { label: "d", prompt: "Explain why calcium is reactive.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Configuration", statement: "Use filling order and noble-gas shorthand." }],
            steps: [
              { part: "a", reasoning: "$1s^22s^22p^63s^23p^64s^2$ or $[Ar]4s^2$.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Correct total of 20 electrons.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Group 2 because two outer electrons.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Period 4 because highest shell n=4.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Ca2+ is $[Ar]$ after losing both 4s electrons.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct configuration stated.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Losing two electrons gives a stable noble-gas configuration.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Low ionisation energy and large atomic radius make this easy.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) [Ar]4s2 (b) G2 P4 (c) [Ar] (d) stable config",
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
