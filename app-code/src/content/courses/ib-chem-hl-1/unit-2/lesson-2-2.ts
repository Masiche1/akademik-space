import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "chemhl-u2-lesson-2-2",
  code: "2-2",
  title: "Hybridization and Sigma/Pi Bonding",
  goal: "I CAN assign sp, sp2 and sp3 hybridization from molecular geometry, distinguish sigma and pi bonds, and relate hybridization to bond angles and molecular shape.",
  standards: ["Paper 1", "Paper 2", "AHL S2"],
  vocabulary: [
    {
      term: "Hybridization",
      definition:
        "The mixing of atomic orbitals on a central atom to form equivalent hybrid orbitals that overlap to make sigma bonds; e.g. one $s$ + three $p$ → four $sp^3$ orbitals.",
    },
    {
      term: "sp$^3$ hybridization",
      definition:
        "Mixing of one $s$ and three $p$ orbitals to give four equivalent tetrahedral orbitals at $109.5°$; seen in CH$_4$, NH$_3$, H$_2$O.",
    },
    {
      term: "sp$^2$ hybridization",
      definition:
        "Mixing of one $s$ and two $p$ orbitals to give three trigonal-planar orbitals at $120°$, leaving one unhybridized $p$ orbital for a $\\pi$ bond; seen in BF$_3$, ethene.",
    },
    {
      term: "sp hybridization",
      definition:
        "Mixing of one $s$ and one $p$ orbital to give two linear orbitals at $180°$, leaving two $p$ orbitals for $\\pi$ bonds; seen in BeCl$_2$, ethyne.",
    },
    {
      term: "Sigma bond ($\\sigma$)",
      definition:
        "A covalent bond formed by end-on overlap of orbitals along the internuclear axis; every single bond contains one $\\sigma$ bond.",
    },
    {
      term: "Pi bond ($\\pi$)",
      definition:
        "A covalent bond formed by sideways overlap of parallel $p$ orbitals above and below the bond axis; present in double and triple bonds.",
    },
  ],
  concepts: [
    {
      id: "chemhl-u2-hybrid-types",
      title: "sp, sp2 and sp3 hybridization",
      skill:
        "Determine the hybridization of a central atom from its electron-domain geometry and explain the resulting bond angles and shapes.",
      lesson: {
        sections: [
          {
            heading: "What hybridization means",
            body: "Atomic orbitals on the central atom mix (hybridize) to produce orbitals of equal energy that point in the directions needed for bonding. The number of hybrid orbitals equals the number of electron domains. $sp^3$ gives tetrahedral ($109.5°$), $sp^2$ gives trigonal planar ($120°$), and $sp$ gives linear ($180°$). Hybridization explains why VSEPR shapes occur — it is the orbital-level description behind the geometry.",
          },
          {
            heading: "Unhybridized p orbitals make pi bonds",
            body: "When an atom is $sp^2$ or $sp$ hybridized it has leftover unhybridized $p$ orbitals. In ethene each carbon is $sp^2$: three $sp^2$ orbitals form three $\\sigma$ bonds (two C–H and one C–C $\\sigma$), and the unhybridized $p$ orbitals overlap sideways to form the $\\pi$ bond of the double bond. In ethyne each carbon is $sp$: two $sp$ orbitals form $\\sigma$ bonds, and two pairs of $p$ orbitals form two $\\pi$ bonds for the triple bond.",
          },
          {
            heading: "Recognising hybridization",
            body: "Use the steric number (bonding domains + lone pairs on the central atom): steric number 4 → $sp^3$, 3 → $sp^2$, 2 → $sp$. Examples: CH$_4$ $sp^3$, BF$_3$ $sp^2$, BeCl$_2$ $sp$, NH$_3$ $sp^3$ (the lone pair counts), ethene carbons $sp^2$, ethyne carbons $sp$.",
          },
        ],
        keyFormulas: [
          {
            name: "Steric number → hybridization",
            statement:
              "4 → $sp^3$ (tetrahedral), 3 → $sp^2$ (trigonal planar), 2 → $sp$ (linear).",
          },
          {
            name: "Hybrid orbital count",
            statement:
              "Number of hybrid orbitals = number of electron domains on the central atom.",
          },
          {
            name: "Unhybridized p orbitals",
            statement:
              "$sp^2$ leaves 1 $p$ orbital (one $\\pi$ bond); $sp$ leaves 2 $p$ orbitals (two $\\pi$ bonds).",
          },
        ],
        workedExample: {
          problem:
            "Determine the hybridization of the carbon atoms in ethene (CH$_2$=CH$_2$) and describe the bonding.",
          solution:
            "Each carbon has 3 electron domains (2 C–H bonds + 1 C=C bond counted once) → $sp^2$ hybridized. Three $sp^2$ orbitals form $\\sigma$ bonds at $120°$; the unhybridized $p$ orbitals overlap sideways to form one $\\pi$ bond, giving the double bond. The molecule is planar.",
        },
      },
      questions: [
        {
          id: "chemhl-u2-hyb-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The carbon atom in methane (CH$_4$) is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$sp^3$ hybridized" },
              { id: "b", text: "$sp^2$ hybridized" },
              { id: "c", text: "$sp$ hybridized" },
              { id: "d", text: "Not hybridized" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Steric number rule",
                statement:
                  "4 electron domains → $sp^3$ hybridization with tetrahedral geometry.",
              },
            ],
            steps: [
              {
                reasoning: "Carbon in CH$_4$ has 4 bonding domains → $sp^3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $sp^3$",
            commonErrors: [
              "Choosing $sp^2$ — that requires 3 domains, e.g. trigonal planar.",
            ],
          },
        },
        {
          id: "chemhl-u2-hyb-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why the carbon atoms in ethene are planar, using hybridization.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "sp2 planarity",
                statement:
                  "$sp^2$ hybrid orbitals lie in one plane at $120°$; the unhybridized $p$ orbitals are perpendicular.",
              },
            ],
            steps: [
              {
                reasoning: "Each carbon has 3 domains → $sp^2$ hybridized.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The three $sp^2$ orbitals are coplanar at $120°$, forcing all six atoms into one plane.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "The remaining $p$ orbitals overlap sideways above and below the plane to form the $\\pi$ bond.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$sp^2$ carbons are trigonal planar; the molecule is planar with a $\\pi$ bond above and below.",
            commonErrors: [
              "Saying 'double bond forces planarity' without the orbital explanation.",
            ],
          },
        },
        {
          id: "chemhl-u2-hyb-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A molecule has a carbon atom forming a triple bond to nitrogen and a single bond to hydrogen (HC≡N). Determine the hybridization of both atoms and describe all the bonds.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "sp hybridization",
                statement:
                  "2 electron domains → $sp$ hybridization, linear $180°$, two unhybridized $p$ orbitals.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both C and N have 2 electron domains (the triple bond counts as one domain) → $sp$ hybridized.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each forms two $sp$ orbitals at $180°$ giving the linear H–C≡N shape.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "One $sp$–$sp$ overlap forms the C–H $\\sigma$ bond and one forms the C–N $\\sigma$ bond.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Two pairs of unhybridized $p$ orbitals overlap sideways to form two $\\pi$ bonds, completing the triple bond.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Both $sp$ hybridized; one $\\sigma$ + two $\\pi$ bonds in C≡N, one $\\sigma$ in C–H; linear molecule.",
            commonErrors: [
              "Counting the triple bond as three domains — it is one domain for VSEPR/hybridization.",
            ],
          },
        },
        {
          id: "chemhl-u2-hyb-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Ethene (C$_2$H$_4$) and ethyne (C$_2$H$_2$) are compared.",
          parts: [
            {
              label: "a",
              prompt:
                "State the hybridization of each carbon atom in both molecules.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "For each molecule, state how many $\\sigma$ and $\\pi$ bonds are present.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Explain why ethyne is linear while ethene is planar but not linear.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sigma vs pi",
                statement:
                  "$\\sigma$ bonds form by end-on overlap along the axis; $\\pi$ bonds by sideways overlap of parallel $p$ orbitals.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Ethene carbons: 3 domains each → $sp^2$; ethyne carbons: 2 domains each → $sp$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Correct assignment of both hybridizations scores the second mark.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Ethene: 5 $\\sigma$ bonds (4 C–H + 1 C–C) and 1 $\\pi$ bond.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Ethyne: 3 $\\sigma$ bonds (2 C–H + 1 C–C) and 2 $\\pi$ bonds.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Total bond order checks: C=C has 1$\\sigma$+1$\\pi$; C≡C has 1$\\sigma$+2$\\pi$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Ethyne's $sp$ orbitals are linear at $180°$.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Ethene's $sp^2$ orbitals are trigonal planar at $120°$, so the molecule is flat but bent at each carbon.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Hybridization geometry determines the molecular shape.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Ethene $sp^2$, ethyne $sp$. (b) Ethene 5$\\sigma$/1$\\pi$; ethyne 3$\\sigma$/2$\\pi$. (c) $sp$ linear, $sp^2$ planar.",
            commonErrors: [
              "Counting $\\pi$ bonds as part of $\\sigma$ framework — they are separate sideways overlaps.",
            ],
          },
        },
        {
          id: "chemhl-u2-hyb-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The boron atom in BF$_3$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$sp^3$ hybridized" },
              { id: "b", text: "$sp^2$ hybridized" },
              { id: "c", text: "$sp$ hybridized" },
              { id: "d", text: "Not hybridized" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Steric number rule",
                statement:
                  "3 electron domains → $sp^2$ hybridization, trigonal planar.",
              },
            ],
            steps: [
              {
                reasoning:
                  "B in BF$_3$ has 3 bonding domains and no lone pairs → $sp^2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $sp^2$",
            commonErrors: [
              "Counting three bonds plus thinking boron has a lone pair — it does not.",
            ],
          },
        },
        {
          id: "chemhl-u2-hyb-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which species contains an sp-hybridized central atom?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "BeCl$_2$" },
              { id: "b", text: "CH$_4$" },
              { id: "c", text: "BF$_3$" },
              { id: "d", text: "NH$_3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "sp hybridization",
                statement: "2 electron domains → $sp$ hybridization, linear.",
              },
            ],
            steps: [
              {
                reasoning: "Be in BeCl$_2$ has 2 domains → $sp$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "CH$_4$ and NH$_3$ are $sp^3$; BF$_3$ is $sp^2$. Therefore choice (a).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** BeCl$_2$",
            commonErrors: [
              "Choosing CO$_2$-like reasoning for NH$_3$ — the lone pair still counts as a domain.",
            ],
          },
        },
        {
          id: "chemhl-u2-hyb-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "State the steric number (total electron domains) of the central atom in each species.",
          response: {
            type: "numeric",
            parts: [
              { label: "Steric number of C in CH$_4$", answer: 4 },
              { label: "Steric number of B in BF$_3$", answer: 3 },
              { label: "Steric number of Be in BeCl$_2$", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Steric number",
                statement:
                  "Steric number = bonding domains + lone pairs on the central atom.",
              },
            ],
            steps: [
              {
                reasoning: "C in CH$_4$: 4 bonds, 0 lone pairs → 4.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "B in BF$_3$: 3 bonds, 0 lone pairs → 3.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Be in BeCl$_2$: 2 bonds, 0 lone pairs → 2.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "4, 3, 2",
            commonErrors: [
              "Forgetting that lone pairs count toward the steric number (not relevant here but commonly missed elsewhere).",
            ],
          },
        },
        {
          id: "chemhl-u2-hyb-q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "State the number of hybrid orbitals formed on the central atom in each species.",
          response: {
            type: "numeric",
            parts: [
              { label: "Hybrid orbitals on C in CH$_4$", answer: 4 },
              { label: "Hybrid orbitals on each C in ethene", answer: 3 },
              { label: "Hybrid orbitals on each C in ethyne", answer: 2 },
              { label: "Hybrid orbitals on N in NH$_3$", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hybrid orbital count",
                statement:
                  "The number of hybrid orbitals equals the number of electron domains.",
              },
            ],
            steps: [
              {
                reasoning: "CH$_4$ carbon: 4 domains → 4 $sp^3$ orbitals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ethene carbon: 3 domains → 3 $sp^2$ orbitals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ethyne carbon: 2 domains → 2 $sp$ orbitals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "NH$_3$ nitrogen: 3 bonds + 1 lone pair = 4 domains → 4 $sp^3$ orbitals.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "4, 3, 2, 4",
            commonErrors: [
              "Counting the lone pair in NH$_3$ as producing extra orbitals beyond four.",
            ],
          },
        },
        {
          id: "chemhl-u2-hyb-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "State the number of unhybridized p orbitals remaining on the central atom.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Unhybridized p orbitals on an $sp^2$ carbon",
                answer: 1,
              },
              { label: "Unhybridized p orbitals on an $sp$ carbon", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Unhybridized p orbitals",
                statement:
                  "$sp^2$ uses one $s$ + two $p$ (leaves 1 $p$); $sp$ uses one $s$ + one $p$ (leaves 2 $p$).",
              },
            ],
            steps: [
              {
                reasoning:
                  "$sp^2$ hybridization mixes 3 of the 4 valence orbitals → 1 unhybridized $p$ remains.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$sp$ hybridization mixes 2 of the 4 valence orbitals → 2 unhybridized $p$ orbitals remain.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "1, 2",
            commonErrors: [
              "Forgetting that $sp^3$ uses all four orbitals (0 unhybridized).",
            ],
          },
        },
        {
          id: "chemhl-u2-hyb-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement about the nitrogen atom in NH$_3$ is correct?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It is $sp^3$ hybridized and the lone pair occupies a hybrid orbital",
              },
              {
                id: "b",
                text: "It is $sp^2$ hybridized with the lone pair in a $p$ orbital",
              },
              { id: "c", text: "It is $sp$ hybridized" },
              {
                id: "d",
                text: "It is not hybridized because it has a lone pair",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lone pairs and hybridization",
                statement:
                  "Lone pairs count as electron domains and occupy hybrid orbitals.",
              },
            ],
            steps: [
              {
                reasoning:
                  "N has 4 domains (3 bonds + 1 lone pair) → $sp^3$; the lone pair sits in an $sp^3$ orbital.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $sp^3$ with lone pair in a hybrid orbital",
            commonErrors: [
              "Excluding the lone pair from the domain count and choosing $sp^2$.",
            ],
          },
        },
        {
          id: "chemhl-u2-hyb-q11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The carbon atoms in ethyne (CH≡CH) are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$sp$ hybridized" },
              { id: "b", text: "$sp^2$ hybridized" },
              { id: "c", text: "$sp^3$ hybridized" },
              { id: "d", text: "Not hybridized" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Steric number rule",
                statement: "2 electron domains → $sp$ hybridization.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each carbon has 2 domains (1 C–H bond + the triple bond counted once) → $sp$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $sp$",
            commonErrors: ["Counting the triple bond as three domains."],
          },
        },
        {
          id: "chemhl-u2-hyb-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Give the approximate bond angle for each arrangement.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "H–C–H in CH$_4$ ($^\\circ$)",
                answer: 109.5,
                tolerance: 0.1,
              },
              {
                label: "H–C–H in ethene ($^\\circ$)",
                answer: 120,
                tolerance: 1,
              },
              { label: "H–C–C in ethyne ($^\\circ$)", answer: 180 },
              { label: "F–B–F in BF$_3$ ($^\\circ$)", answer: 120 },
              { label: "Cl–Be–Cl in BeCl$_2$ ($^\\circ$)", answer: 180 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Hybridization angles",
                statement: "$sp^3$ → $109.5°$, $sp^2$ → $120°$, $sp$ → $180°$.",
              },
            ],
            steps: [
              {
                reasoning: "CH$_4$ carbon is $sp^3$ → tetrahedral $109.5°$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ethene carbon is $sp^2$ → trigonal planar $120°$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ethyne carbon is $sp$ → linear $180°$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "BF$_3$ boron is $sp^2$ → $120°$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "BeCl$_2$ beryllium is $sp$ → $180°$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$109.5°$, $120°$, $180°$, $120°$, $180°$",
            commonErrors: [
              "Assigning $109.5°$ to ethene — its carbons are $sp^2$, not $sp^3$.",
            ],
          },
        },
        {
          id: "chemhl-u2-hyb-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Explain, using hybridization, why the H–C–H bond angle in ethene ($\\approx 120°$) is larger than in methane ($\\approx 109.5°$), while the H–C–C angle in ethyne is $180°$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hybridization geometry",
                statement:
                  "$sp^3$ orbitals point tetrahedrally, $sp^2$ trigonal-planar, $sp$ linear.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Carbon in methane has 4 domains → $sp^3$ hybridization.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The four $sp^3$ orbitals point to the corners of a tetrahedron → $109.5°$.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Carbon in ethene has 3 domains → $sp^2$ hybridization.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The three $sp^2$ orbitals lie in a plane at $120°$ → larger H–C–H angle.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Carbon in ethyne has 2 domains → $sp$ hybridization.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The two $sp$ orbitals point in opposite directions → linear $180°$.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "$sp^3$ → $109.5°$; $sp^2$ → $120°$; $sp$ → $180°$.",
            commonErrors: [
              "Explaining angles by VSEPR alone without referencing the hybrid orbitals.",
            ],
          },
        },
        {
          id: "chemhl-u2-hyb-q14",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Consider methane (CH$_4$), ethene (C$_2$H$_4$) and ethyne (C$_2$H$_2$).",
          parts: [
            {
              label: "a",
              prompt:
                "State the hybridization of every carbon atom in each molecule.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "State the number of unhybridized p orbitals on each carbon atom.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Explain how hybridization determines the bond angles in each molecule.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Steric number rule",
                statement: "4 domains → $sp^3$, 3 → $sp^2$, 2 → $sp$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "CH$_4$ carbon: $sp^3$; ethene carbons: $sp^2$; ethyne carbons: $sp$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "All four carbons correctly assigned → second mark.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$sp^3$ carbon has 0 unhybridized $p$ orbitals.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$sp^2$ carbons each have 1 unhybridized $p$ orbital (used for the $\\pi$ bond).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$sp$ carbons each have 2 unhybridized $p$ orbitals (used for two $\\pi$ bonds).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "$sp^3$ orbitals point tetrahedrally → $109.5°$ angles.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "$sp^2$ orbitals are trigonal planar → $120°$ angles; $sp$ orbitals are linear → $180°$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Hybrid orbital geometry therefore fixes the molecular bond angles.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) $sp^3$/$sp^2$/$sp$. (b) 0, 1, 2 unhybridized $p$ orbitals per carbon. (c) $109.5°$/$120°$/$180°$.",
            commonErrors: [
              "Assigning $sp^3$ to ethene carbon — it has only 3 domains.",
            ],
          },
        },
        {
          id: "chemhl-u2-hyb-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The carbon atom in CO$_2$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$sp$ hybridized" },
              { id: "b", text: "$sp^2$ hybridized" },
              { id: "c", text: "$sp^3$ hybridized" },
              { id: "d", text: "Not hybridized" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Steric number rule",
                statement: "2 electron domains → $sp$ hybridization, linear.",
              },
            ],
            steps: [
              {
                reasoning:
                  "C in CO$_2$ has 2 domains (two double bonds each count once) → $sp$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $sp$",
            commonErrors: ["Counting each C=O as two domains."],
          },
        },
        {
          id: "chemhl-u2-hyb-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "State the number of electron domains on the central atom in each molecule.",
          response: {
            type: "numeric",
            parts: [
              { label: "Domains on C in CO$_2$", answer: 2 },
              { label: "Domains on each C in C$_2$H$_4$", answer: 3 },
              { label: "Domains on C in CH$_4$", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Electron domain",
                statement: "Multiple bonds count as one domain.",
              },
            ],
            steps: [
              {
                reasoning: "CO$_2$: two C=O bonds count as 2 domains.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ethene carbon: 2 C–H + 1 C=C (counted once) → 3 domains.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "CH$_4$: 4 C–H bonds → 4 domains.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "2, 3, 4",
            commonErrors: ["Counting the C=C double bond as two domains."],
          },
        },
      ],
    },
    {
      id: "chemhl-u2-sigma-pi",
      title: "Sigma and pi bonds in detail",
      skill:
        "Distinguish sigma and pi bonds by their orbital overlap, explain bond order, and relate pi bonds to restricted rotation and isomerism.",
      lesson: {
        sections: [
          {
            heading: "How sigma and pi bonds form",
            body: "A $\\sigma$ bond is formed by end-on (head-on) overlap of orbitals along the internuclear axis — this can be $s$–$s$, $s$–$p$, $p$–$p$, or hybrid–hybrid overlap. A $\\pi$ bond is formed by sideways overlap of two parallel $p$ orbitals, one above and one below the bond axis (or two lobes above and two below). Every covalent bond contains exactly one $\\sigma$ bond; additional bonds in double and triple bonds are $\\pi$ bonds.",
          },
          {
            heading: "Bond order and strength",
            body: "Bond order = number of bonding electron pairs shared. A single bond has order 1 (one $\\sigma$), a double bond order 2 (one $\\sigma$ + one $\\pi$), a triple bond order 3 (one $\\sigma$ + two $\\pi$). Higher bond order means shorter, stronger bonds — the $\\pi$ bonds add sideways overlap but are weaker individually than $\\sigma$ bonds because overlap is less effective. Bond length decreases and bond enthalpy increases with bond order.",
          },
          {
            heading: "Pi bonds and restricted rotation",
            body: "A $\\pi$ bond requires the $p$ orbitals to stay parallel; rotating around the bond axis would break the sideways overlap. This restricted rotation is why double bonds give rise to geometric (cis/trans) isomerism — groups can be on the same or opposite sides of the rigid double bond. Single bonds, with only $\\sigma$ bonds, rotate freely.",
          },
        ],
        keyFormulas: [
          {
            name: "Bond composition",
            statement:
              "Single = 1$\\sigma$; double = 1$\\sigma$ + 1$\\pi$; triple = 1$\\sigma$ + 2$\\pi$.",
          },
          {
            name: "Bond order",
            statement:
              "Bond order = number of shared electron pairs; higher order → shorter, stronger bond.",
          },
          {
            name: "Rotation",
            statement:
              "$\\sigma$ bonds allow free rotation; $\\pi$ bonds restrict rotation about the bond axis.",
          },
        ],
        workedExample: {
          problem:
            "The C–C bond length in ethane is $154$ pm, in ethene $134$ pm and in ethyne $120$ pm. Explain the trend.",
          solution:
            "Bond order increases from single (1) to double (2) to triple (3). Higher bond order means more shared electron pairs and stronger attraction, pulling the nuclei closer — so bond length decreases.",
        },
      },
      questions: [
        {
          id: "chemhl-u2-sp-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A double bond consists of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One $\\sigma$ bond and one $\\pi$ bond" },
              { id: "b", text: "Two $\\sigma$ bonds" },
              { id: "c", text: "Two $\\pi$ bonds" },
              { id: "d", text: "One $\\sigma$ bond only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Double bond",
                statement:
                  "One $\\sigma$ bond (end-on) plus one $\\pi$ bond (sideways).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Every bond has one $\\sigma$; the second bond in a double bond is $\\pi$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** 1$\\sigma$ + 1$\\pi$",
            commonErrors: [
              "Saying two $\\sigma$ bonds — the second bond is always $\\pi$.",
            ],
          },
        },
        {
          id: "chemhl-u2-sp-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why rotation about a C=C double bond is restricted while rotation about a C–C single bond is free.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pi bond restriction",
                statement:
                  "A $\\pi$ bond requires parallel $p$ orbitals; rotation would break the sideways overlap.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A single bond has only a $\\sigma$ bond formed by end-on overlap — rotation does not break it.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "A double bond has a $\\pi$ bond from sideways $p$ orbital overlap.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Rotating would misalign the $p$ orbitals and destroy the $\\pi$ overlap, so rotation is restricted.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$\\pi$ bonds need parallel $p$ orbitals; rotation breaks them. $\\sigma$-only bonds rotate freely.",
            commonErrors: [
              "Attributing restriction to 'bond strength' alone — it is specifically the $\\pi$ overlap geometry.",
            ],
          },
        },
        {
          id: "chemhl-u2-sp-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The bond enthalpies of C–C, C=C and C≡C are $347$, $614$ and $839$ kJ mol$^{-1}$. Explain why the increases are not equal for each additional bond.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pi bond weakness",
                statement:
                  "$\\pi$ bonds are weaker than $\\sigma$ bonds because sideways overlap is less effective.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Going from single to double adds one $\\pi$ bond: $614 - 347 = 267$ kJ mol$^{-1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Going from double to triple adds a second $\\pi$ bond: $839 - 614 = 225$ kJ mol$^{-1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each $\\pi$ bond contributes less than the $\\sigma$ bond ($347$ kJ mol$^{-1}$) because sideways overlap is poorer.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Also, adding $\\pi$ bonds shortens the bond and changes hybridization, affecting the $\\sigma$ framework too.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Each added $\\pi$ bond contributes less energy than a $\\sigma$ bond because sideways overlap is weaker.",
            commonErrors: [
              "Expecting equal increments — $\\pi$ bonds are individually weaker than $\\sigma$ bonds.",
            ],
          },
        },
        {
          id: "chemhl-u2-sp-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Consider the molecules ethane (CH$_3$CH$_3$), ethene (CH$_2$CH$_2$) and ethyne (CHCH).",
          parts: [
            {
              label: "a",
              prompt:
                "State the number of $\\sigma$ and $\\pi$ bonds in each molecule.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain the trend in C–C bond length (154, 134, 120 pm) and bond enthalpy (347, 614, 839 kJ mol$^{-1}$).",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Explain which molecules show geometric isomerism and why.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bond order effect",
                statement: "Higher bond order → shorter, stronger bonds.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Ethane: 7 $\\sigma$, 0 $\\pi$. Ethene: 5 $\\sigma$, 1 $\\pi$. Ethyne: 3 $\\sigma$, 2 $\\pi$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "All C–H bonds are $\\sigma$; the C–C framework contributes the rest.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Bond orders: C–C = 1, C=C = 2, C≡C = 3.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Higher bond order means more shared pairs pull nuclei closer → shorter bond.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "More shared pairs also mean stronger attraction → higher bond enthalpy.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "So length decreases and enthalpy increases with bond order.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Only ethene can show cis/trans isomerism because it has a rigid double bond.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Ethane rotates freely; ethyne is linear so no cis/trans possible.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Ethane 7$\\sigma$/0$\\pi$, ethene 5$\\sigma$/1$\\pi$, ethyne 3$\\sigma$/2$\\pi$. (b) Higher bond order → shorter & stronger. (c) Only ethene (restricted rotation).",
            commonErrors: [
              "Counting C–H bonds incorrectly — each is one $\\sigma$ bond.",
            ],
          },
        },
        {
          id: "chemhl-u2-sp-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A triple bond consists of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One $\\sigma$ bond and two $\\pi$ bonds" },
              { id: "b", text: "Three $\\sigma$ bonds" },
              { id: "c", text: "Three $\\pi$ bonds" },
              { id: "d", text: "One $\\sigma$ bond and one $\\pi$ bond" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Triple bond",
                statement: "Bond order 3 = 1 $\\sigma$ + 2 $\\pi$ bonds.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Every bond contains one $\\sigma$; the additional two bonds of a triple bond are $\\pi$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** 1$\\sigma$ + 2$\\pi$",
            commonErrors: [
              "Saying three $\\sigma$ bonds — only the first bond is $\\sigma$.",
            ],
          },
        },
        {
          id: "chemhl-u2-sp-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which has the shortest carbon–carbon bond?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ethane (C–C single bond)" },
              { id: "b", text: "Ethene (C=C double bond)" },
              { id: "c", text: "Ethyne (C≡C triple bond)" },
              { id: "d", text: "Propane (two C–C single bonds)" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bond order effect",
                statement: "Higher bond order → shorter, stronger bond.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ethyne has bond order 3, ethene 2, ethane and propane 1.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Highest bond order → shortest bond → choice (c).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Ethyne",
            commonErrors: [
              "Thinking more atoms makes a shorter bond — bond order is what matters.",
            ],
          },
        },
        {
          id: "chemhl-u2-sp-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "State the bond order of the carbon–carbon bond in each hydrocarbon.",
          response: {
            type: "numeric",
            parts: [
              { label: "Bond order in ethane", answer: 1 },
              { label: "Bond order in ethene", answer: 2 },
              { label: "Bond order in ethyne", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bond order",
                statement:
                  "Bond order = number of shared electron pairs between two atoms.",
              },
            ],
            steps: [
              {
                reasoning: "Ethane C–C is a single bond → order 1.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ethene C=C is a double bond → order 2.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ethyne C≡C is a triple bond → order 3.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "1, 2, 3",
            commonErrors: [
              "Counting each line of a displayed formula incorrectly.",
            ],
          },
        },
        {
          id: "chemhl-u2-sp-q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Count the $\\sigma$ and $\\pi$ bonds in each molecule.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\sigma$ bonds in ethene", answer: 5 },
              { label: "$\\pi$ bonds in ethene", answer: 1 },
              { label: "$\\sigma$ bonds in ethyne", answer: 3 },
              { label: "$\\pi$ bonds in ethyne", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bond composition",
                statement:
                  "All C–H bonds are $\\sigma$; C–C contributes 1 $\\sigma$ plus $\\pi$ bonds for multiple bonds.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ethene: 4 C–H $\\sigma$ + 1 C–C $\\sigma$ = 5 $\\sigma$ bonds.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The C=C double bond adds 1 $\\pi$ bond.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ethyne: 2 C–H $\\sigma$ + 1 C–C $\\sigma$ = 3 $\\sigma$ bonds.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The C≡C triple bond adds 2 $\\pi$ bonds.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Ethene 5$\\sigma$/1$\\pi$; ethyne 3$\\sigma$/2$\\pi$",
            commonErrors: [
              "Counting the C=C or C≡C as multiple $\\sigma$ bonds.",
            ],
          },
        },
        {
          id: "chemhl-u2-sp-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "State the number of $\\pi$ bonds in each multiple bond.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\pi$ bonds in a C=O double bond", answer: 1 },
              { label: "$\\pi$ bonds in a C≡N triple bond", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pi bond",
                statement:
                  "Sideways overlap of parallel $p$ orbitals; one $\\pi$ per bond order above 1.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A double bond = 1 $\\sigma$ + 1 $\\pi$ → 1 $\\pi$ bond.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A triple bond = 1 $\\sigma$ + 2 $\\pi$ → 2 $\\pi$ bonds.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "1, 2",
            commonErrors: ["Counting the $\\sigma$ bond as a $\\pi$ bond."],
          },
        },
        {
          id: "chemhl-u2-sp-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Why are $\\pi$ bonds weaker than $\\sigma$ bonds?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Sideways overlap of $p$ orbitals is less effective than end-on overlap",
              },
              { id: "b", text: "$\\pi$ bonds contain fewer electrons" },
              {
                id: "c",
                text: "$\\pi$ bonds only form between identical atoms",
              },
              { id: "d", text: "$\\pi$ bonds are always ionic" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Overlap effectiveness",
                statement:
                  "End-on ($\\sigma$) overlap is greater than sideways ($\\pi$) overlap.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sideways $p$–$p$ overlap has poorer orbital overlap than head-on overlap.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Sideways overlap is less effective",
            commonErrors: [
              "Claiming $\\pi$ bonds have fewer electrons — each bond pair is the same.",
            ],
          },
        },
        {
          id: "chemhl-u2-sp-q11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A $\\sigma$ bond can be formed by the overlap of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only $s$–$s$ orbitals" },
              { id: "b", text: "Only $p$–$p$ orbitals" },
              {
                id: "c",
                text: "Any of $s$–$s$, $s$–$p$, $p$–$p$ or hybrid–hybrid orbitals",
              },
              { id: "d", text: "Only unhybridized orbitals" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sigma bond",
                statement:
                  "End-on overlap along the internuclear axis; many orbital combinations possible.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\sigma$ overlap is defined by geometry (end-on), not by orbital type.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(c)** Any of $s$–$s$, $s$–$p$, $p$–$p$ or hybrid–hybrid",
            commonErrors: ["Restricting $\\sigma$ bonds to $s$ orbitals only."],
          },
        },
        {
          id: "chemhl-u2-sp-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "The C–C bond lengths in ethane, ethene and ethyne are $154$, $134$ and $120$ pm, and the bond enthalpies are $347$, $614$ and $839$ kJ mol$^{-1}$ respectively.",
          response: {
            type: "numeric",
            parts: [
              { label: "Length decrease single to double (pm)", answer: 20 },
              { label: "Length decrease double to triple (pm)", answer: 14 },
              {
                label: "Total length decrease single to triple (pm)",
                answer: 34,
              },
              {
                label: "Enthalpy gain single to double (kJ mol$^{-1}$)",
                answer: 267,
              },
              {
                label: "Enthalpy gain double to triple (kJ mol$^{-1}$)",
                answer: 225,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bond order effect",
                statement:
                  "Higher bond order → shorter bond and higher bond enthalpy.",
              },
            ],
            steps: [
              { reasoning: "$154 - 134 = 20$ pm.", marks: 1, markCode: "M" },
              { reasoning: "$134 - 120 = 14$ pm.", marks: 1, markCode: "M" },
              { reasoning: "$154 - 120 = 34$ pm.", marks: 1, markCode: "M" },
              {
                reasoning: "$614 - 347 = 267$ kJ mol$^{-1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$839 - 614 = 225$ kJ mol$^{-1}$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "20, 14, 34 pm; 267, 225 kJ mol$^{-1}$",
            commonErrors: ["Subtracting enthalpies in the wrong direction."],
          },
        },
        {
          id: "chemhl-u2-sp-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Explain why rotation about a C=C double bond is restricted and how this restriction leads to cis–trans (geometric) isomerism in but-2-ene.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pi bond restriction",
                statement:
                  "A $\\pi$ bond requires parallel $p$ orbitals; rotation would break the sideways overlap.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A double bond contains one $\\sigma$ and one $\\pi$ bond.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The $\\pi$ bond forms by sideways overlap of parallel $p$ orbitals above and below the bond axis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Rotating about the C=C axis would misalign the $p$ orbitals and destroy the $\\pi$ overlap, so rotation is restricted.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "In but-2-ene each double-bonded carbon carries one H and one CH$_3$ group.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The rigid double bond allows the two CH$_3$ groups to be on the same side (cis) or opposite sides (trans).",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "These are geometric isomers — same connectivity, different spatial arrangement.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "$\\pi$ bonds need parallel $p$ orbitals → restricted rotation → cis/trans isomers in but-2-ene.",
            commonErrors: [
              "Saying rotation is 'impossible' — it is restricted but requires breaking the $\\pi$ bond.",
            ],
          },
        },
        {
          id: "chemhl-u2-sp-q14",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Consider propene, CH$_2$=CHCH$_3$.",
          parts: [
            {
              label: "a",
              prompt:
                "State the number of $\\sigma$ and $\\pi$ bonds in the molecule.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain why rotation about the C=C bond is restricted.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Explain whether propene can exhibit cis–trans (geometric) isomerism.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bond composition",
                statement:
                  "Single = 1$\\sigma$; double = 1$\\sigma$ + 1$\\pi$; triple = 1$\\sigma$ + 2$\\pi$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Propene has 6 C–H bonds, 1 C–C single bond and 1 C=C double bond.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Total: 8 $\\sigma$ bonds and 1 $\\pi$ bond.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The C=C contains a $\\pi$ bond formed by sideways overlap of parallel $p$ orbitals.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Rotation about the bond axis would twist the $p$ orbitals out of alignment.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The $\\pi$ overlap would be lost, so rotation is restricted.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "One double-bonded carbon (CH$_2$) carries two identical H atoms.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Geometric isomerism requires each double-bonded carbon to carry two different groups.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Propene cannot show cis–trans isomerism because swapping the two H atoms gives the same molecule.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) 8$\\sigma$, 1$\\pi$. (b) $\\pi$ overlap requires parallel $p$ orbitals. (c) No — terminal CH$_2$ has two identical H atoms.",
            commonErrors: [
              "Claiming propene has cis/trans isomers — it does not.",
            ],
          },
        },
        {
          id: "chemhl-u2-sp-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which molecule can exhibit cis–trans (geometric) isomerism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "But-2-ene" },
              { id: "b", text: "Propene" },
              { id: "c", text: "Ethene" },
              { id: "d", text: "2-Methylpropene" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Geometric isomerism",
                statement:
                  "Requires a rigid double bond with two different groups on each double-bonded carbon.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Only but-2-ene has a C=C where each carbon bears two different substituents (H and CH$_3$).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** But-2-ene",
            commonErrors: [
              "Choosing propene — its terminal CH$_2$ has two identical H atoms.",
            ],
          },
        },
        {
          id: "chemhl-u2-sp-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Count the bonds in each molecule as indicated.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\sigma$ bonds in CO$_2$", answer: 2 },
              { label: "$\\pi$ bonds in CO$_2$", answer: 2 },
              { label: "$\\sigma$ bonds in N$_2$", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bond composition",
                statement:
                  "Each double/triple bond contains exactly one $\\sigma$ bond plus $\\pi$ bonds.",
              },
            ],
            steps: [
              {
                reasoning:
                  "CO$_2$ has two C=O double bonds → 2 $\\sigma$ bonds.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each C=O contributes one $\\pi$ bond → 2 $\\pi$ bonds.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "N$_2$ has a triple bond → 1 $\\sigma$ bond (and 2 $\\pi$).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "2, 2, 1",
            commonErrors: [
              "Counting each line of the displayed formula as a separate $\\sigma$ bond.",
            ],
          },
        },
      ],
    },
  ],
};
