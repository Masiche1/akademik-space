import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "chemhl-u1-lesson-2-1",
  code: "2-1",
  title: "VSEPR and Molecular Shape",
  goal: "I CAN use VSEPR theory to predict electron-domain and molecular geometries, account for bond-angle deviations caused by lone pairs, and relate molecular shape to polarity.",
  standards: ["Paper 1", "Paper 2", "AHL S2"],
  vocabulary: [
    {
      term: "VSEPR theory",
      definition:
        "Valence Shell Electron Pair Repulsion — electron domains around a central atom arrange themselves to minimise repulsion, determining molecular shape.",
    },
    {
      term: "Electron domain",
      definition:
        "A region of electron density around the central atom: a bonding pair, a lone pair, or a multiple bond counts as one domain.",
    },
    {
      term: "Lone pair",
      definition:
        "A non-bonding pair of valence electrons on the central atom; it occupies more space than a bonding pair and compresses bond angles.",
    },
    {
      term: "Bond angle",
      definition:
        "The angle between two adjacent bonds in a molecule; ideal values are distorted by lone pairs and multiple bonds.",
    },
    {
      term: "Molecular polarity",
      definition:
        "Whether a molecule has a net dipole moment, determined by both bond polarity and molecular geometry.",
    },
    {
      term: "Trigonal bipyramidal",
      definition:
        "The electron-domain geometry of five domains; lone pairs occupy equatorial positions to minimise repulsion.",
    },
  ],
  concepts: [
    {
      id: "chemhl-u2-vsepr-geometries",
      title: "Electron domains and molecular geometries",
      skill:
        "Predict electron-domain and molecular geometries for 2-6 domains, place lone pairs correctly, and explain deviations from ideal bond angles.",
      lesson: {
        sections: [
          {
            heading: "Counting domains",
            body: "Draw the Lewis structure and count electron domains on the central atom: each single, double or triple bond counts as ONE domain, and each lone pair counts as one domain. The number of domains gives the electron-domain geometry: 2 → linear, 3 → trigonal planar, 4 → tetrahedral, 5 → trigonal bipyramidal, 6 → octahedral. The molecular geometry is then found by ignoring the lone pairs — e.g. four domains with one lone pair gives a trigonal pyramidal molecule (like NH$_3$), and three domains with one lone pair gives bent (like H$_2$O).",
          },
          {
            heading: "Lone pairs distort angles",
            body: "Repulsion strength decreases in the order: lone pair–lone pair > lone pair–bond pair > bond pair–bond pair, because a lone pair is held by only one nucleus and spreads out more. Lone pairs therefore compress adjacent bond angles below the ideal values: NH$_3$ has angles of about $107°$ (vs $109.5°$ in CH$_4$) and H$_2$O about $104.5°$. In trigonal bipyramidal molecules lone pairs always occupy equatorial positions where repulsion is minimised.",
          },
          {
            heading: "Multiple bonds and shape",
            body: "Double and triple bonds count as single domains but exert greater repulsion than single bonds, compressing adjacent angles slightly — e.g. in formaldehyde H$_2$CO the H–C–H angle is about $116°$, wider than the H–C=O angles of about $122°$. VSEPR works best for main-group molecules; transition-metal complexes often need crystal field theory instead.",
          },
        ],
        keyFormulas: [
          {
            name: "Domain count → geometry",
            statement:
              "2 linear, 3 trigonal planar, 4 tetrahedral, 5 trigonal bipyramidal, 6 octahedral (electron-domain geometry).",
          },
          {
            name: "Repulsion order",
            statement:
              "Lone pair–lone pair > lone pair–bond pair > bond pair–bond pair.",
          },
          {
            name: "Ideal angles",
            statement:
              "Linear $180°$, trigonal planar $120°$, tetrahedral $109.5°$, octahedral $90°/180°$.",
          },
        ],
        workedExample: {
          problem:
            "Predict the shape and bond angle of SF$_4$ (sulfur has 6 valence electrons).",
          solution:
            "S has 4 bonding domains and 1 lone pair (10 electrons around S: 4 bonds + 1 lone pair = 5 domains). Electron-domain geometry is trigonal bipyramidal; the lone pair takes an equatorial position, giving a seesaw molecular shape. The lone pair compresses the angles to slightly less than $90°$ and $120°$.",
        },
      },
      questions: [
        {
          id: "chemhl-u2-vsepr-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "How many electron domains are there around the central carbon atom in CO$_2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6" },
              { id: "b", text: "3" },
              { id: "c", text: "4" },
              { id: "d", text: "2" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Electron domain",
                statement:
                  "Each bond (single, double or triple) counts as one domain; lone pairs count separately.",
              },
            ],
            steps: [
              {
                reasoning:
                  "CO$_2$ is O=C=O: two double bonds = two electron domains, no lone pairs on carbon.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct — linear molecule.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** 2",
            commonErrors: [
              "Counting four domains because of the double bonds — each bond counts once regardless of order.",
            ],
          },
        },
        {
          id: "chemhl-u2-vsepr-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Predict the molecular shape and approximate H–N–H bond angle of NH$_3$, explaining why the angle differs from the tetrahedral ideal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lone pair repulsion",
                statement:
                  "A lone pair occupies more space than a bond pair and compresses adjacent bond angles.",
              },
            ],
            steps: [
              {
                reasoning:
                  "N has 4 electron domains (3 bonds + 1 lone pair): trigonal pyramidal molecular shape.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The lone pair repels the N–H bond pairs more strongly than they repel each other.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "This compresses the H–N–H angle to about $107°$, less than $109.5°$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Trigonal pyramidal; H–N–H $\\approx 107°$ (compressed by the lone pair).",
            commonErrors: [
              "Giving $109.5°$ — ignoring the lone pair's greater repulsion.",
            ],
          },
        },
        {
          id: "chemhl-u2-vsepr-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Compare the shapes of BF$_3$, NH$_3$ and CH$_4$, and explain why NH$_3$ is polar while BF$_3$ is non-polar despite both having polar bonds.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Shape determines polarity",
                statement:
                  "A molecule is polar only if bond dipoles do not cancel; symmetric shapes cancel them.",
              },
            ],
            steps: [
              {
                reasoning:
                  "BF$_3$: trigonal planar, three bond dipoles cancel at $120°$ — non-polar.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "NH$_3$: trigonal pyramidal, the lone pair gives a net dipole — polar.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "CH$_4$: tetrahedral, four identical C–H dipoles cancel completely — non-polar.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Polarity depends on both bond polarity and whether the geometry allows dipoles to cancel.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "BF$_3$ planar (cancel), NH$_3$ pyramidal (polar), CH$_4$ tetrahedral (cancel); shape decides polarity.",
            commonErrors: [
              "Saying 'polar bonds always make polar molecules' — geometry can cancel them.",
            ],
          },
        },
        {
          id: "chemhl-u2-vsepr-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Consider SF$_4$, ClF$_3$ and XeF$_2$.",
          parts: [
            {
              label: "a",
              prompt:
                "State the electron-domain geometry and molecular shape of each molecule.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "For SF$_4$, explain why the lone pair occupies an equatorial rather than axial position in the trigonal bipyramidal arrangement.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Predict and explain the polarity of each molecule.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "VSEPR domain counting",
                statement:
                  "SF$_4$: 5 domains (4 bonds + 1 lone pair); ClF$_3$: 4 domains (3 bonds + 1 lone pair); XeF$_2$: 5 domains (2 bonds + 3 lone pairs).",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "SF$_4$: trigonal bipyramidal domains → seesaw shape.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "ClF$_3$: tetrahedral domains → T-shaped molecular shape.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "XeF$_2$: trigonal bipyramidal domains with 3 equatorial lone pairs → linear shape.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "An equatorial lone pair has only two neighbouring domains at $90°$ and two at $120°$.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "An axial lone pair would have three neighbours at $90°$, giving greater repulsion — so equatorial is favoured.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "SF$_4$ seesaw: bond dipoles do not cancel — polar.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "ClF$_3$ T-shape: dipoles do not fully cancel — polar.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "XeF$_2$ linear with symmetric F–Xe–F axis: dipoles cancel — non-polar.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) SF$_4$ seesaw, ClF$_3$ T-shaped, XeF$_2$ linear. (b) Equatorial lone pair minimises $90°$ repulsions. (c) SF$_4$ and ClF$_3$ polar; XeF$_2$ non-polar.",
            commonErrors: [
              "Placing the SF$_4$ lone pair axial — it must be equatorial.",
              "Calling XeF$_2$ polar — the linear geometry cancels the dipoles.",
            ],
          },
        },
        {
          id: "chemhl-u2-vsepr-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "How many electron domains surround the central atom in PCl$_5$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3" },
              { id: "b", text: "5" },
              { id: "c", text: "6" },
              { id: "d", text: "4" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Electron domain",
                statement:
                  "Each bond counts as one domain regardless of bond order; lone pairs count separately.",
              },
            ],
            steps: [
              {
                reasoning:
                  "P forms five P–Cl single bonds and has no lone pairs, giving 5 electron domains.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** 5",
            commonErrors: [
              "Counting 10 electrons around phosphorus as 10 domains — domains, not electrons, are counted.",
            ],
          },
        },
        {
          id: "chemhl-u2-vsepr-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "What is the electron-domain geometry around xenon in XeF$_4$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Trigonal bipyramidal" },
              { id: "b", text: "Trigonal planar" },
              { id: "c", text: "Tetrahedral" },
              { id: "d", text: "Octahedral" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Domain counting",
                statement:
                  "6 electron domains → octahedral electron-domain geometry.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Xe has 4 bonding domains and 2 lone pairs = 6 domains total.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Six domains arrange octahedrally; the two lone pairs are opposite, giving a square planar molecule. Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Octahedral (molecular shape: square planar)",
            commonErrors: [
              "Giving the molecular shape (square planar) instead of the electron-domain geometry (octahedral).",
            ],
          },
        },
        {
          id: "chemhl-u2-vsepr-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "State the number of electron domains around the central atom in each molecule.",
          response: {
            type: "numeric",
            parts: [
              { label: "Domains in BF$_3$", answer: 3 },
              { label: "Domains in SF$_4$", answer: 5 },
              { label: "Domains in XeF$_2$", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Electron domain",
                statement:
                  "Bonds count once each; lone pairs count separately.",
              },
            ],
            steps: [
              {
                reasoning:
                  "BF$_3$: 3 B–F bonds, no lone pairs on B → 3 domains.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "SF$_4$: 4 S–F bonds + 1 lone pair on S → 5 domains.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "XeF$_2$: 2 Xe–F bonds + 3 lone pairs on Xe → 5 domains.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "BF$_3$ = 3, SF$_4$ = 5, XeF$_2$ = 5",
            commonErrors: ["Forgetting the lone pairs on S and Xe."],
          },
        },
        {
          id: "chemhl-u2-vsepr-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Give the ideal bond angle for each arrangement.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "H–C–H in CH$_4$ ($^\\circ$)",
                answer: 109.5,
                tolerance: 0.1,
              },
              { label: "F–B–F in BF$_3$ ($^\\circ$)", answer: 120 },
              { label: "F–Xe–F in XeF$_2$ ($^\\circ$)", answer: 180 },
              { label: "Axial–equatorial in PCl$_5$ ($^\\circ$)", answer: 90 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Ideal VSEPR angles",
                statement:
                  "Tetrahedral $109.5°$, trigonal planar $120°$, linear $180°$, octahedral $90°$.",
              },
            ],
            steps: [
              {
                reasoning: "CH$_4$ is tetrahedral → $109.5°$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "BF$_3$ is trigonal planar → $120°$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "XeF$_2$ is linear → $180°$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "PCl$_5$ is trigonal bipyramidal; axial–equatorial angles are $90°$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$109.5°$, $120°$, $180°$, $90°$",
            commonErrors: [
              "Using the molecular shape angle for XeF$_2$ without checking it is linear.",
            ],
          },
        },
        {
          id: "chemhl-u2-vsepr-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "State the number of lone pairs on the central atom in each molecule.",
          response: {
            type: "numeric",
            parts: [
              { label: "Lone pairs on O in H$_2$O", answer: 2 },
              { label: "Lone pairs on N in NH$_3$", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lone pair",
                statement:
                  "A non-bonding pair of valence electrons occupying one electron domain.",
              },
            ],
            steps: [
              {
                reasoning:
                  "O in H$_2$O has 2 bonds and 4 non-bonding electrons → 2 lone pairs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "N in NH$_3$ has 3 bonds and 2 non-bonding electrons → 1 lone pair.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "H$_2$O: 2 lone pairs; NH$_3$: 1 lone pair",
            commonErrors: ["Counting bonding pairs as lone pairs."],
          },
        },
        {
          id: "chemhl-u2-vsepr-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Which species has the smallest bond angle at the central atom?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "H$_2$O" },
              { id: "b", text: "CH$_4$" },
              { id: "c", text: "BF$_3$" },
              { id: "d", text: "NH$_3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lone pair compression",
                statement:
                  "More lone pairs → greater compression of bond angles.",
              },
            ],
            steps: [
              {
                reasoning:
                  "CH$_4$ $109.5°$, NH$_3$ $\\approx 107°$, BF$_3$ $120°$, H$_2$O $\\approx 104.5°$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "H$_2$O has two lone pairs causing the greatest compression → choice (c).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** H$_2$O",
            commonErrors: [
              "Comparing only number of atoms rather than lone pairs.",
            ],
          },
        },
        {
          id: "chemhl-u2-vsepr-q11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The molecular shape of XeF$_4$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tetrahedral" },
              { id: "b", text: "Seesaw" },
              { id: "c", text: "Octahedral" },
              { id: "d", text: "Square planar" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lone pair placement",
                statement:
                  "In an octahedral arrangement, two lone pairs occupy opposite positions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "XeF$_4$ has 6 domains (4 bonds + 2 lone pairs); the lone pairs go trans to each other.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ignoring the lone pairs leaves four F atoms in a plane → square planar. Therefore choice (c).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Square planar",
            commonErrors: [
              "Answering octahedral — that is the electron-domain geometry, not the molecular shape.",
            ],
          },
        },
        {
          id: "chemhl-u2-vsepr-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "For each species, give the requested quantity.",
          response: {
            type: "numeric",
            parts: [
              { label: "Lone pairs in SF$_4$", answer: 1 },
              { label: "Lone pairs in ClF$_3$", answer: 1 },
              { label: "Lone pairs in XeF$_2$", answer: 3 },
              { label: "Electron domains in XeF$_2$", answer: 5 },
              { label: "Axial bonds in PCl$_5$", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Domain counting",
                statement:
                  "Count bonding domains plus lone pairs on the central atom.",
              },
            ],
            steps: [
              {
                reasoning:
                  "SF$_4$: S has 6 valence electrons; 4 bonds + 1 lone pair → 1 lone pair.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "ClF$_3$: Cl has 7 valence electrons; 3 bonds + 1 lone pair → 1 lone pair.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "XeF$_2$: Xe has 8 valence electrons; 2 bonds + 3 lone pairs → 3 lone pairs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "XeF$_2$ domains = 2 bonds + 3 lone pairs = 5.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "PCl$_5$ is trigonal bipyramidal with 2 axial and 3 equatorial bonds → 2 axial.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "1, 1, 3, 5, 2",
            commonErrors: [
              "Drawing ClF$_3$ with a lone pair on F rather than on Cl.",
            ],
          },
        },
        {
          id: "chemhl-u2-vsepr-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Explain why the H–O–H bond angle in water ($104.5°$) is smaller than the H–N–H angle in ammonia ($107°$), and why both are smaller than the ideal tetrahedral angle of $109.5°$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Repulsion order",
                statement:
                  "Lone pair–lone pair > lone pair–bond pair > bond pair–bond pair.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Oxygen in water has 2 lone pairs; nitrogen in ammonia has 1 lone pair.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Lone pairs occupy more space than bond pairs because they are held by only one nucleus.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Lone pair–lone pair repulsion is the strongest, so the two lone pairs in water compress the O–H bonds most.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "This gives H–O–H $\\approx 104.5°$.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Ammonia's single lone pair compresses the angle less, giving $\\approx 107°$.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Both are below $109.5°$ because lone pair repulsion exceeds bond pair–bond pair repulsion.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "More lone pairs → stronger repulsion → smaller angles: H$_2$O $104.5°$ < NH$_3$ $107°$ < CH$_4$ $109.5°$.",
            commonErrors: [
              "Attributing the smaller angle in water only to electronegativity — it is the two lone pairs.",
            ],
          },
        },
        {
          id: "chemhl-u2-vsepr-q14",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Consider PCl$_5$ and SF$_4$.",
          parts: [
            {
              label: "a",
              prompt:
                "State the electron-domain geometry and molecular shape of each molecule.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain why PCl$_5$ is non-polar while SF$_4$ is polar.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Predict the approximate F–S–F bond angles in SF$_4$ and explain why they differ from the ideal trigonal-bipyramidal values.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Polarity",
                statement:
                  "A molecule is polar only if bond dipoles do not cancel by symmetry.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "PCl$_5$: 5 domains → trigonal bipyramidal electron geometry and molecular shape.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "SF$_4$: 5 domains (4 bonds + 1 lone pair) → trigonal bipyramidal domains, seesaw molecular shape.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "In PCl$_5$ the five identical P–Cl dipoles are arranged symmetrically (2 axial, 3 equatorial) and cancel.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "In SF$_4$ the lone pair makes the shape asymmetric, so the S–F dipoles do not fully cancel → net dipole.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Polarity therefore depends on geometry, not just bond polarity.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "The equatorial lone pair repels strongly, compressing angles below $120°$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Angles involving the lone pair's neighbours fall below $90°$ and $120°$ (approximately $101°$–$103°$ for F$_{eq}$–S–F$_{eq}$, $<90°$ axial–equatorial).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Deviation arises because lone pair–bond pair repulsion exceeds bond pair–bond pair repulsion.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) PCl$_5$ trigonal bipyramidal; SF$_4$ seesaw. (b) Symmetric PCl$_5$ cancels dipoles; asymmetric SF$_4$ does not. (c) Angles compressed below $90°$/$120°$ by the equatorial lone pair.",
            commonErrors: [
              "Placing the SF$_4$ lone pair in an axial position.",
            ],
          },
        },
        {
          id: "chemhl-u2-vsepr-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement about lone pairs in VSEPR theory is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lone pairs have no effect on bond angles" },
              {
                id: "b",
                text: "Lone pair–lone pair repulsion is the strongest type",
              },
              { id: "c", text: "Lone pairs always occupy axial positions" },
              {
                id: "d",
                text: "Lone pairs occupy less space than bonding pairs",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Repulsion order",
                statement:
                  "Lone pair–lone pair > lone pair–bond pair > bond pair–bond pair.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A lone pair is held by one nucleus and spreads out, so it repels more strongly than a bond pair.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Therefore choice (b) is correct: lone pair–lone pair repulsion is strongest.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Lone pair–lone pair repulsion is the strongest",
            commonErrors: [
              "Thinking lone pairs take up less space — they take up more.",
            ],
          },
        },
        {
          id: "chemhl-u2-vsepr-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "State the number of bonding domains on the central atom in each molecule.",
          response: {
            type: "numeric",
            parts: [
              { label: "Bonding domains on O in H$_2$O", answer: 2 },
              { label: "Bonding domains on N in NH$_3$", answer: 3 },
              { label: "Bonding domains on C in CH$_4$", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bonding domain",
                statement:
                  "Each bond (single, double or triple) counts as one bonding domain.",
              },
            ],
            steps: [
              {
                reasoning: "O in water forms 2 O–H bonds → 2 bonding domains.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "N in ammonia forms 3 N–H bonds → 3 bonding domains.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "C in methane forms 4 C–H bonds → 4 bonding domains.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "2, 3, 4",
            commonErrors: ["Counting lone pairs as bonding domains."],
          },
        },
      ],
    },
    {
      id: "chemhl-u2-shape-properties",
      title: "Shape, polarity and physical properties",
      skill:
        "Relate molecular geometry and polarity to physical properties such as boiling point, solubility and molecular recognition.",
      lesson: {
        sections: [
          {
            heading: "Polarity and intermolecular forces",
            body: "Molecular shape determines whether a molecule is polar. Polar molecules have permanent dipole–dipole attractions between them; non-polar molecules rely only on weaker London dispersion forces. This is why acetone (polar, bent C=O) boils at $56°$C while propane (non-polar, tetrahedral-ish) boils at $-42°$C despite similar molar masses — the polar molecule has stronger intermolecular attractions.",
          },
          {
            heading: "Shape and solubility",
            body: "'Like dissolves like': polar solvents (water, ethanol) dissolve polar and ionic substances; non-polar solvents (hexane, oils) dissolve non-polar substances. Molecular shape affects polarity — e.g. cis- and trans-dichloroethene have the same atoms but different shapes and different dipole moments. Biological recognition (enzyme–substrate, receptor–ligand binding) depends on precise 3D shape complementarity.",
          },
          {
            heading: "Beyond simple VSEPR",
            body: "VSEPR assumes electron pairs repel and gives correct shapes for most main-group molecules. It does not explain bond energies or why some molecules distort further (Jahn–Teller distortion in Cu$^{2+}$ complexes). For transition metals, crystal field theory and ligand field theory give a better description of geometry and magnetism.",
          },
        ],
        keyFormulas: [
          {
            name: "Polarity rule",
            statement:
              "Polar molecule ⇔ bond dipoles do not cancel by symmetry; geometry decides.",
          },
          {
            name: "Boiling point trend",
            statement:
              "For similar molar masses, polar molecules have higher boiling points due to stronger intermolecular forces.",
          },
          {
            name: "Like dissolves like",
            statement:
              "Polar solvents dissolve polar/ionic solutes; non-polar solvents dissolve non-polar solutes.",
          },
        ],
        workedExample: {
          problem:
            "Explain why H$_2$O (b.p. $100°$C) has a much higher boiling point than H$_2$S (b.p. $-60°$C) despite H$_2$S having a larger molar mass.",
          solution:
            "Both are bent polar molecules, but water forms extensive hydrogen bonds (O is small and highly electronegative). Hydrogen bonding is much stronger than the dipole–dipole and dispersion forces in H$_2$S, so much more energy is needed to separate water molecules.",
        },
      },
      questions: [
        {
          id: "chemhl-u2-spp-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which molecule is polar?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CHCl$_3$" },
              { id: "b", text: "BF$_3$" },
              { id: "c", text: "CCl$_4$" },
              { id: "d", text: "CO$_2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Polarity",
                statement:
                  "A molecule is polar if its bond dipoles do not cancel by symmetry.",
              },
            ],
            steps: [
              {
                reasoning:
                  "CHCl$_3$ is tetrahedral but has three Cl and one H — the dipoles do not cancel.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "CCl$_4$, CO$_2$ and BF$_3$ are all symmetric, so their dipoles cancel.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** CHCl$_3$",
            commonErrors: [
              "Choosing CCl$_4$ — tetrahedral but perfectly symmetric, so non-polar.",
            ],
          },
        },
        {
          id: "chemhl-u2-spp-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why propanone (acetone, CH$_3$COCH$_3$, b.p. $56°$C) has a higher boiling point than butane (C$_4$H$_{10}$, b.p. $-0.5°$C) even though butane has a larger molar mass.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Intermolecular forces",
                statement:
                  "Polar molecules have dipole–dipole attractions in addition to dispersion forces.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Propanone has a polar C=O bond and a bent shape around the carbonyl carbon — net dipole.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Butane is a non-polar hydrocarbon with only dispersion forces.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Dipole–dipole attractions in propanone require more energy to overcome, raising its boiling point.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Propanone is polar (dipole–dipole + dispersion); butane is non-polar (dispersion only) → propanone boils higher.",
            commonErrors: [
              "Attributing the difference only to molar mass — butane is actually heavier yet boils lower.",
            ],
          },
        },
        {
          id: "chemhl-u2-spp-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "cis-1,2-dichloroethene and trans-1,2-dichloroethene have the same molecular formula. Explain why the cis isomer has a higher boiling point and dipole moment than the trans isomer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Geometric isomerism",
                statement:
                  "Restricted rotation about a double bond gives cis/trans isomers with different shapes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In the cis isomer both C–Cl bonds are on the same side; in trans they are opposite.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cis bond dipoles add to a net molecular dipole; trans dipoles cancel by symmetry.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "The cis isomer's dipole–dipole attractions make it boil higher and give it a larger dipole moment.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Both have the same dispersion forces, so the difference is due to polarity alone.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cis is polar (dipoles add), trans is non-polar (dipoles cancel); cis has stronger intermolecular forces → higher b.p.",
            commonErrors: [
              "Saying they have 'different molecules' — they are isomers, same formula, different arrangement.",
            ],
          },
        },
        {
          id: "chemhl-u2-spp-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A student measures the boiling points of three C$_4$H$_{10}$O isomers: butan-1-ol (b.p. $118°$C), methoxypropane (b.p. $39°$C) and 2-methylpropan-2-ol (b.p. $82°$C).",
          parts: [
            {
              label: "a",
              prompt:
                "Identify the functional group in each compound and state whether it can hydrogen bond.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain the boiling-point order using intermolecular forces.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Explain why the branched isomer (2-methylpropan-2-ol) boils lower than the straight-chain isomer (butan-1-ol).",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hydrogen bonding",
                statement:
                  "H bonded to O, N or F gives strong intermolecular hydrogen bonds.",
              },
              {
                kind: "principle",
                name: "Branching reduces surface area",
                statement:
                  "Branched molecules have smaller surface area and weaker dispersion forces.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Butan-1-ol and 2-methylpropan-2-ol are alcohols (–OH); methoxypropane is an ether.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Alcohols hydrogen-bond via O–H; ethers cannot donate H bonds.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "a",
                reasoning:
                  "Methoxypropane has only dipole–dipole and dispersion forces.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Both alcohols hydrogen-bond strongly → highest b.p.; the ether cannot → lowest.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "2-methylpropan-2-ol is branched → weaker dispersion forces → b.p. $82°$C vs $118°$C.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Order: butan-1-ol > 2-methylpropan-2-ol > methoxypropane.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Branching reduces the molecular surface area in contact.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Weaker dispersion forces lower the boiling point.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Alcohols H-bond, ether does not. (b) H-bonding dominates b.p.; branching lowers it. (c) Smaller surface → weaker dispersion → lower b.p.",
            commonErrors: [
              "Forgetting that ethers cannot hydrogen-bond as donors.",
            ],
          },
        },
        {
          id: "chemhl-u2-spp-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following molecules is polar?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CCl$_4$" },
              { id: "b", text: "NH$_3$" },
              { id: "c", text: "CH$_4$" },
              { id: "d", text: "CO$_2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Polarity",
                statement:
                  "A molecule is polar if bond dipoles do not cancel by symmetry.",
              },
            ],
            steps: [
              {
                reasoning:
                  "CH$_4$, CO$_2$ and CCl$_4$ are all symmetric so their dipoles cancel.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "NH$_3$ is trigonal pyramidal with a net dipole → choice (d).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** NH$_3$",
            commonErrors: [
              "Choosing CH$_4$ because C–H bonds are polar — the tetrahedral symmetry cancels them.",
            ],
          },
        },
        {
          id: "chemhl-u2-spp-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which hydride has the highest boiling point?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "H$_2$S ($-60°$C)" },
              { id: "b", text: "HCl ($-85°$C)" },
              { id: "c", text: "PH$_3$ ($-87°$C)" },
              { id: "d", text: "H$_2$O ($100°$C)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hydrogen bonding",
                statement:
                  "H bonded to O, N or F gives strong hydrogen bonds, raising boiling point.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Only water can hydrogen-bond (O–H); the others rely on weaker dipole/dispersion forces.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** H$_2$O",
            commonErrors: [
              "Choosing the heaviest molecule — molar mass alone does not determine boiling point here.",
            ],
          },
        },
        {
          id: "chemhl-u2-spp-q7",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Count the polar bonds in each molecule (C–H bonds are treated as non-polar for this question).",
          response: {
            type: "numeric",
            parts: [
              { label: "Polar bonds in CH$_2$Cl$_2$", answer: 2 },
              { label: "Polar bonds in CHCl$_3$", answer: 3 },
              { label: "Polar bonds in CCl$_4$", answer: 4 },
              { label: "Polar bonds in CO$_2$", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Polar bond",
                statement:
                  "A bond between atoms of different electronegativity has a dipole.",
              },
            ],
            steps: [
              {
                reasoning: "CH$_2$Cl$_2$ has two C–Cl polar bonds.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "CHCl$_3$ has three C–Cl polar bonds.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "CCl$_4$ has four C–Cl polar bonds.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "CO$_2$ has two polar C=O bonds even though the molecule is non-polar.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "2, 3, 4, 2",
            commonErrors: [
              "Confusing number of polar bonds with molecular polarity — CO$_2$ has polar bonds but is non-polar.",
            ],
          },
        },
        {
          id: "chemhl-u2-spp-q8",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The boiling points of three C$_4$H$_{10}$O isomers are: butan-1-ol $118°$C, 2-methylpropan-2-ol $82°$C and methoxypropane $39°$C.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Butan-1-ol minus methoxypropane ($^\\circ$C)",
                answer: 79,
              },
              {
                label: "Butan-1-ol minus 2-methylpropan-2-ol ($^\\circ$C)",
                answer: 36,
              },
              {
                label: "2-Methylpropan-2-ol minus methoxypropane ($^\\circ$C)",
                answer: 43,
              },
              {
                label: "Hydrogen-bond donors per butan-1-ol molecule",
                answer: 1,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Boiling point differences",
                statement:
                  "Differences in b.p. reflect differences in intermolecular forces.",
              },
            ],
            steps: [
              { reasoning: "$118 - 39 = 79°$C.", marks: 1, markCode: "M" },
              { reasoning: "$118 - 82 = 36°$C.", marks: 1, markCode: "M" },
              { reasoning: "$82 - 39 = 43°$C.", marks: 1, markCode: "M" },
              {
                reasoning:
                  "Butan-1-ol has one O–H group, so each molecule can donate one hydrogen bond.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "79, 36, 43, 1",
            commonErrors: [
              "Subtracting in the wrong order or mixing up the isomers.",
            ],
          },
        },
        {
          id: "chemhl-u2-spp-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "State the number of isomers requested in each case.",
          response: {
            type: "numeric",
            parts: [
              { label: "Structural isomers of C$_4$H$_{10}$", answer: 2 },
              { label: "Structural isomers of C$_5$H$_{12}$", answer: 3 },
              {
                label: "Geometric (cis/trans) isomers of but-2-ene",
                answer: 2,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Isomerism",
                statement:
                  "Structural isomers differ in connectivity; geometric isomers differ in spatial arrangement about a rigid bond.",
              },
            ],
            steps: [
              {
                reasoning:
                  "C$_4$H$_{10}$: butane and 2-methylpropane → 2 isomers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "C$_5$H$_{12}$: pentane, 2-methylbutane, 2,2-dimethylpropane → 3 isomers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "But-2-ene has cis and trans forms → 2 isomers.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "2, 3, 2",
            commonErrors: [
              "Forgetting 2,2-dimethylpropane when counting C$_5$H$_{12}$ isomers.",
            ],
          },
        },
        {
          id: "chemhl-u2-spp-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Which substance has the strongest intermolecular forces?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CO$_2$" },
              { id: "b", text: "CH$_4$" },
              { id: "c", text: "H$_2$O" },
              { id: "d", text: "HCl" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Intermolecular force strength",
                statement:
                  "Hydrogen bonding > dipole–dipole > dispersion forces.",
              },
            ],
            steps: [
              {
                reasoning:
                  "CH$_4$ and CO$_2$ have only dispersion forces; HCl has dipole–dipole.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "H$_2$O hydrogen-bonds → strongest forces → choice (d).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** H$_2$O",
            commonErrors: [
              "Choosing HCl because it is polar — hydrogen bonding in water is stronger.",
            ],
          },
        },
        {
          id: "chemhl-u2-spp-q11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The phrase 'like dissolves like' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only water can be a solvent" },
              { id: "b", text: "Larger molecules always dissolve better" },
              {
                id: "c",
                text: "Polar solvents dissolve polar and ionic solutes; non-polar solvents dissolve non-polar solutes",
              },
              {
                id: "d",
                text: "Any solvent dissolves any solute if stirred enough",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Solubility",
                statement:
                  "Solubility depends on matching intermolecular forces between solvent and solute.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Similar intermolecular forces allow solute–solvent attractions to replace solute–solute and solvent–solvent attractions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(c)** Polar dissolves polar/ionic; non-polar dissolves non-polar",
            commonErrors: ["Thinking solubility depends only on temperature."],
          },
        },
        {
          id: "chemhl-u2-spp-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "For butan-1-ol, C$_4$H$_{10}$O, give each requested quantity.",
          response: {
            type: "numeric",
            parts: [
              { label: "Carbon atoms per molecule", answer: 4 },
              { label: "Oxygen atoms per molecule", answer: 1 },
              { label: "Molar mass (g mol$^{-1}$)", answer: 74 },
              { label: "Hydrogen-bond donors per molecule", answer: 1 },
              { label: "Hydrogen-bond acceptors per molecule", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hydrogen bonding",
                statement:
                  "O–H groups can both donate and accept hydrogen bonds.",
              },
            ],
            steps: [
              {
                reasoning: "C$_4$H$_{10}$O contains 4 carbon atoms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "One oxygen atom (the –OH group).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Molar mass = $4(12) + 10(1) + 16 = 74$ g mol$^{-1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The O–H hydrogen can be donated → 1 donor.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The oxygen lone pairs can accept → 1 acceptor site counted per molecule for this question.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4, 1, 74, 1, 1",
            commonErrors: ["Using C$_4$H$_9$OH and double-counting atoms."],
          },
        },
        {
          id: "chemhl-u2-spp-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Explain, using bonding type and intermolecular forces, why NaCl is a solid with a high melting point while HCl is a gas at room temperature.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bonding continuum",
                statement:
                  "NaCl is ionic (large $\\Delta EN$); HCl is polar covalent (moderate $\\Delta EN$).",
              },
              {
                kind: "principle",
                name: "Intermolecular forces",
                statement:
                  "Ionic lattices have strong electrostatic attractions; molecular substances have weaker IMF.",
              },
            ],
            steps: [
              {
                reasoning:
                  "NaCl has $\\Delta EN \\approx 2.2$ → ionic bonding with a giant lattice of Na$^+$ and Cl$^-$ ions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "HCl has $\\Delta EN \\approx 0.9$ → polar covalent molecules.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Separating Na$^+$ from Cl$^-$ requires overcoming strong ionic attractions throughout the lattice.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "HCl molecules interact only through dipole–dipole forces (and weaker dispersion).",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Much less energy is needed to separate HCl molecules, so it is a gas at room temperature.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Thus bonding type on the continuum determines the state at room temperature.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Ionic NaCl has a strong lattice (high mp, solid); polar covalent HCl has weak dipole–dipole IMF (gas).",
            commonErrors: [
              "Treating HCl as ionic — its $\\Delta EN$ is too small for electron transfer.",
            ],
          },
        },
        {
          id: "chemhl-u2-spp-q14",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A student compares three group hydrides: CH$_4$, NH$_3$ and H$_2$O.",
          parts: [
            {
              label: "a",
              prompt:
                "State whether each molecule is polar and name its molecular shape.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain the trend in boiling points: CH$_4$ $-161°$C, NH$_3$ $-33°$C, H$_2$O $100°$C.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Predict and justify the boiling-point trend for the group 16 hydrides H$_2$O, H$_2$S and H$_2$Se.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Intermolecular forces",
                statement:
                  "Hydrogen bonding > dipole–dipole > dispersion; strength increases down a group for dispersion.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "CH$_4$: tetrahedral, non-polar.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "NH$_3$: trigonal pyramidal, polar.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "H$_2$O: bent, polar.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "CH$_4$ has only dispersion forces → lowest b.p.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "NH$_3$ hydrogen-bonds (weaker than water's) → intermediate b.p.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "H$_2$O forms the most hydrogen bonds → highest b.p.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "H$_2$O hydrogen-bonds so it has the highest b.p.; H$_2$S and H$_2$Se cannot.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Between H$_2$S and H$_2$Se, larger size → stronger dispersion forces → H$_2$Se boils higher.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) CH$_4$ non-polar tetrahedral, NH$_3$ polar pyramidal, H$_2$O polar bent. (b) H-bonding strength raises b.p. (c) H$_2$O > H$_2$Se > H$_2$S.",
            commonErrors: [
              "Predicting H$_2$S boils higher than H$_2$O by size alone — hydrogen bonding dominates.",
            ],
          },
        },
        {
          id: "chemhl-u2-spp-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which pair of substances can both donate and accept hydrogen bonds?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CO$_2$ and HCl" },
              { id: "b", text: "BF$_3$ and NH$_3$" },
              { id: "c", text: "H$_2$O and CH$_3$OH" },
              { id: "d", text: "CH$_4$ and C$_2$H$_6$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hydrogen bonding",
                statement:
                  "Requires H bonded to O, N or F (donor) and a lone pair on O, N or F (acceptor).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both water and methanol have O–H bonds and oxygen lone pairs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** H$_2$O and CH$_3$OH",
            commonErrors: [
              "Choosing NH$_3$ pair — NH$_3$ donates but BF$_3$ has no lone pair to accept.",
            ],
          },
        },
        {
          id: "chemhl-u2-spp-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "For hydrogen peroxide, H$_2$O$_2$, give each requested quantity.",
          response: {
            type: "numeric",
            parts: [
              { label: "Polar bonds per molecule", answer: 2 },
              { label: "Total lone pairs on the two O atoms", answer: 4 },
              {
                label: "Maximum hydrogen bonds one molecule can form",
                answer: 4,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hydrogen bonding",
                statement:
                  "Each O–H can donate and each O has two lone pairs to accept.",
              },
            ],
            steps: [
              {
                reasoning:
                  "H$_2$O$_2$ has two polar O–H bonds (and a non-polar O–O bond).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each O has 2 lone pairs → 4 lone pairs total.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Two donors + two acceptor sites → up to 4 hydrogen bonds per molecule.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2, 4, 4",
            commonErrors: ["Ignoring the O–O bond or miscounting lone pairs."],
          },
        },
      ],
    },
  ],
};
