import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "chemhl-u6-lesson-6-2",
  code: "6-2",
  title: "Stereoisomerism: Chirality and E/Z Isomerism",
  goal: "I CAN identify chiral centres, draw and name enantiomers using Fischer projections, explain optical activity, and distinguish cis/trans (E/Z) isomerism in alkenes.",
  standards: ["Paper 1", "Paper 2", "AHL O2"],
  vocabulary: [
    {
      term: "Chiral centre",
      definition:
        "A carbon atom bonded to four different groups — the source of optical isomerism.",
    },
    {
      term: "Enantiomer",
      definition:
        "Non-superimposable mirror images of a chiral molecule; they rotate plane-polarised light in opposite directions.",
    },
    {
      term: "Optical activity",
      definition:
        "The ability of a chiral substance to rotate plane-polarised light; measured with a polarimeter.",
    },
    {
      term: "Racemic mixture",
      definition:
        "A 50:50 mixture of two enantiomers; optically inactive because rotations cancel.",
    },
    {
      term: "Fischer projection",
      definition:
        "A 2D representation of a 3D molecule with vertical bonds going back and horizontal bonds coming forward.",
    },
    {
      term: "E/Z isomerism",
      definition:
        "Geometric isomerism in alkenes where each double-bond carbon has two different groups; E = higher priority groups opposite, Z = same side.",
    },
  ],
  concepts: [
    {
      id: "chemhl-u6-chirality",
      title: "Optical isomerism and chirality",
      skill:
        "Identify chiral centres, draw enantiomers, explain optical activity, and predict whether molecules are chiral.",
      lesson: {
        sections: [
          {
            heading: "Chiral centres",
            body: "A carbon atom is chiral if it is bonded to four DIFFERENT groups. The four groups must be arranged tetrahedrally — a chiral centre has two non-superimposable mirror images called enantiomers. Example: lactic acid CH$_3$CH(OH)COOH — the central C has H, OH, CH$_3$, and COOH (all different) → chiral. Molecules with multiple chiral centres have multiple stereoisomers (2$^n$ where n = number of chiral centres, unless meso compounds exist).",
          },
          {
            heading: "Optical activity",
            body: "Enantiomers rotate plane-polarised light in opposite directions: one (+) rotates clockwise, the other (−) anticlockwise. A racemic mixture (50:50) is optically inactive — rotations cancel. Optical activity is measured with a polarimeter. Only chiral molecules are optically active; achiral molecules do not rotate plane-polarised light.",
          },
          {
            heading: "Fischer projections",
            body: "Fischer projections show a molecule in 2D: vertical bonds project away from viewer, horizontal bonds project toward viewer. To test chirality: identify the chiral centre, assign priorities (Cahn-Ingold-Prelog rules), trace 1→2→3 — clockwise = R, anticlockwise = S (if lowest priority points away). Fischer projections are particularly useful for sugars and amino acids.",
          },
        ],
        keyFormulas: [
          {
            name: "Chiral centre",
            statement:
              "Carbon with 4 different groups → non-superimposable mirror images.",
          },
          {
            name: "Number of stereoisomers",
            statement:
              "2$^n$ where n = number of chiral centres (minus meso compounds).",
          },
          {
            name: "Fischer projection",
            statement: "Vertical = away, horizontal = toward viewer.",
          },
        ],
        workedExample: {
          problem:
            "Identify whether CH$_3$CH(OH)CH$_2$CH$_3$ (butan-2-ol) is chiral and draw its enantiomers.",
          solution:
            "C2 has H, OH, CH$_3$, C$_2$H$_5$ — all different → chiral. Two enantiomers: (R)-butan-2-ol and (S)-butan-2-ol, non-superimposable mirror images.",
        },
      },
      questions: [
        {
          id: "chemhl-u6-chiral-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which molecule is chiral?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CH$_3$CH$_2$CH$_2$CH$_3$ (butane)" },
              { id: "b", text: "CH$_3$CH(OH)CH$_2$CH$_3$ (butan-2-ol)" },
              { id: "c", text: "CCl$_4$ (tetrachloromethane)" },
              { id: "d", text: "CH$_3$CH$_2$OH (ethanol)" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Chiral centre",
                statement: "Carbon with 4 different groups.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Butan-2-ol C2 has H, OH, CH$_3$, C$_2$H$_5$ — all different → chiral.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Butane, ethanol and CCl$_4$ have no chiral centre.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Butan-2-ol",
            commonErrors: [
              "Choosing butane — no chiral centre (all CH$_3$/CH$_2$ groups identical).",
            ],
          },
        },
        {
          id: "chemhl-u6-chiral-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why a racemic mixture is optically inactive even though its components are chiral.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Racemic mixture",
                statement:
                  "50:50 enantiomers → equal and opposite rotations cancel → optically inactive.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Enantiomers rotate plane-polarised light in equal but opposite directions.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "In a racemic mixture, equal amounts of (+) and (−) enantiomers are present.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The rotations exactly cancel → net rotation = 0 → optically inactive.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Equal and opposite rotations cancel → optically inactive.",
            commonErrors: [
              "Saying 'racemic is achiral' — it contains chiral molecules but the mixture is inactive.",
            ],
          },
        },
        {
          id: "chemhl-u6-chiral-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Determine the number of stereoisomers for: (a) CH$_3$CH(OH)CH(OH)CH$_3$ (butane-2,3-diol); (b) a molecule with 3 chiral centres.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stereoisomer count",
                statement:
                  "2$^n$ stereoisomers where n = chiral centres, minus meso compounds.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Butane-2,3-diol has 2 chiral centres → max 4 stereoisomers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But (2R,3R) and (2S,3S) are enantiomers; (2R,3S) is identical to (2S,3R) — meso compound (internal mirror plane).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "So total = 3 stereoisomers (one pair of enantiomers + one meso).",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "(b) 3 chiral centres → 2$^3$ = 8 stereoisomers (unless meso reduces this).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 3 stereoisomers (2 enantiomeric pairs + 1 meso). (b) 8 stereoisomers.",
            commonErrors: [
              "Saying 4 for butane-2,3-diol — forgetting the meso compound reduces the count.",
            ],
          },
        },
        {
          id: "chemhl-u6-chiral-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Consider the amino acid alanine: CH$_3$CH(NH$_2$)COOH.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify the chiral centre and explain why it is chiral.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Draw the Fischer projection of L-alanine and explain the convention.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain how alanine can be resolved into enantiomers.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Amino acid chirality",
                statement:
                  "Alpha carbon has 4 different groups (H, NH$_2$, CH$_3$, COOH) → chiral.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Alpha C (C2) bonded to H, NH$_2$, CH$_3$, COOH — all different → chiral centre.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "a",
                reasoning:
                  "Tetrahedral arrangement → two non-superimposable mirror images (enantiomers).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Fischer: vertical bonds away, horizontal bonds toward viewer.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "L-alanine: NH$_2$ on left, COOH on top, CH$_3$ on bottom, H on right.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "L-configuration: NH$_2$ on left in Fischer projection (except cysteine).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Enantiomers have same physical properties except optical rotation.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Resolution: react with chiral resolving agent (e.g. tartaric acid) to form diastereomers.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Diastereomers have different physical properties → can be separated by crystallisation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) C2 chiral (4 different groups). (b) L-Ala: NH$_2$ left, COOH top, CH$_3$ bottom, H right. (c) Resolve via diastereomer formation.",
            commonErrors: [
              "Forgetting Fischer vertical = away, horizontal = toward.",
            ],
          },
        },
        {
          id: "chemhl-u6-chiral-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A molecule containing one chiral centre exists as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Four stereoisomers" },
              { id: "b", text: "Two enantiomers" },
              { id: "c", text: "A single compound" },
              { id: "d", text: "No stereoisomers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Enantiomers",
                statement:
                  "A chiral centre gives two non-superimposable mirror images (enantiomers).",
              },
            ],
            steps: [
              {
                reasoning:
                  "One chiral centre → 2$^1$ = 2 stereoisomers, which are a pair of enantiomers.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Two enantiomers",
            commonErrors: [
              "Choosing four — that would need two chiral centres.",
            ],
          },
        },
        {
          id: "chemhl-u6-chiral-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which sample is optically active?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A meso form of tartaric acid" },
              { id: "b", text: "Pure (S)-butan-2-ol" },
              { id: "c", text: "A racemic mixture of butan-2-ol" },
              { id: "d", text: "Butane" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Optical activity",
                statement:
                  "Only a sample with an excess of one enantiomer rotates plane-polarised light.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A racemic mixture and meso compound are optically inactive; butane is achiral.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Pure (S)-butan-2-ol contains only one enantiomer → optically active.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Pure (S)-butan-2-ol",
            commonErrors: [
              "Choosing the racemic mixture — the equal and opposite rotations cancel.",
            ],
          },
        },
        {
          id: "chemhl-u6-chiral-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a Fischer projection, the horizontal bonds project:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In the plane of the paper" },
              { id: "b", text: "Toward the viewer" },
              { id: "c", text: "Away from the viewer" },
              { id: "d", text: "Behind the plane of the paper" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Fischer projection",
                statement:
                  "Vertical bonds go back (away); horizontal bonds come forward (toward viewer).",
              },
            ],
            steps: [
              {
                reasoning:
                  "By convention, horizontal substituents project out of the plane toward the viewer.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Toward the viewer",
            commonErrors: [
              "Reversing the convention — vertical is away, horizontal is toward.",
            ],
          },
        },
        {
          id: "chemhl-u6-chiral-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The maximum number of stereoisomers for a molecule containing 2 chiral centres is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8" },
              { id: "b", text: "3" },
              { id: "c", text: "4" },
              { id: "d", text: "2" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stereoisomer count",
                statement:
                  "Maximum stereoisomers = 2$^n$ where n = number of chiral centres.",
              },
            ],
            steps: [
              {
                reasoning:
                  "2$^2$ = 4 maximum stereoisomers (fewer if a meso compound exists).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 4",
            commonErrors: [
              "Choosing 3 — that is the actual count for butane-2,3-diol because of the meso form, not the maximum.",
            ],
          },
        },
        {
          id: "chemhl-u6-chiral-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is a meso compound?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "(2R,3R)-butane-2,3-diol" },
              { id: "b", text: "(2R,3S)-butane-2,3-diol" },
              { id: "c", text: "(S)-alanine" },
              { id: "d", text: "(R)-lactic acid" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Meso compound",
                statement:
                  "A molecule with chiral centres but an internal mirror plane → achiral and optically inactive.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(2R,3S)-butane-2,3-diol has an internal mirror plane making it identical to its mirror image.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(2R,3R) is chiral; lactic acid and alanine each have only one chiral centre and cannot be meso.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** (2R,3S)-butane-2,3-diol",
            commonErrors: [
              "Choosing (2R,3R) — that is one of the chiral enantiomers, not the meso form.",
            ],
          },
        },
        {
          id: "chemhl-u6-chiral-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Tartaric acid has 2 chiral centres. Including the meso form, the total number of stereoisomers is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "3" },
              { id: "c", text: "8" },
              { id: "d", text: "4" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Meso reduction",
                statement:
                  "2$^n$ gives the maximum; a meso compound reduces the actual count.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Maximum = 2$^2$ = 4, but (2R,3S) and (2S,3R) are identical meso → one less.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Total = 3 stereoisomers: one enantiomeric pair plus one meso form.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** 3",
            commonErrors: [
              "Answering 4 — forgetting the meso compound reduces the count.",
            ],
          },
        },
        {
          id: "chemhl-u6-chiral-q11",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "A molecule contains 3 chiral centres and has no meso form. Calculate the maximum number of stereoisomers.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Stereoisomer count",
                statement: "Maximum stereoisomers = 2$^n$, n = chiral centres.",
              },
            ],
            steps: [
              {
                reasoning: "Apply 2$^n$ with n = 3.",
                working: "2^3 = 8",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the maximum number of stereoisomers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "8 stereoisomers",
            commonErrors: [
              "Adding instead of multiplying — the count is exponential, not n + something.",
            ],
          },
        },
        {
          id: "chemhl-u6-chiral-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A molecule contains 4 chiral centres and no meso form. (a) Calculate the maximum number of stereoisomers. (b) Calculate the number of enantiomeric pairs.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 16 },
              { label: "b", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Stereoisomer count",
                statement:
                  "2$^n$ stereoisomers forming 2$^{n-1}$ enantiomeric pairs.",
              },
            ],
            steps: [
              {
                reasoning: "Maximum stereoisomers = 2$^4$ = 16.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each enantiomeric pair uses 2 stereoisomers → 16 ÷ 2 = 8 pairs.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State both answers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 16; (b) 8",
            commonErrors: [
              "Thinking pairs = stereoisomers — each pair contains two stereoisomers.",
            ],
          },
        },
        {
          id: "chemhl-u6-chiral-q13",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "State the number of different groups that must be attached to a carbon atom for it to be a chiral centre.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Chiral centre",
                statement:
                  "A carbon bonded to four different groups is chiral.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Tetrahedral carbon needs four different substituents to lack any symmetry plane.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer = 4 different groups.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4",
            commonErrors: [
              "Answering 3 — a carbon with three groups is trigonal planar, not chiral.",
            ],
          },
        },
        {
          id: "chemhl-u6-chiral-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Alanine has the structure CH$_3$CH(NH$_2$)COOH. (a) State the number of chiral centres in alanine. (b) State the number of stereoisomers of alanine.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Amino acid chirality",
                statement:
                  "The α-carbon bears H, NH$_2$, CH$_3$ and COOH — four different groups.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Only the α-carbon (C2) has four different groups → 1 chiral centre.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Stereoisomers = 2$^1$ = 2 (the D- and L-enantiomers).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State both answers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1; (b) 2",
            commonErrors: [
              "Counting the carboxyl carbon — it has two equivalent oxygens.",
            ],
          },
        },
        {
          id: "chemhl-u6-chiral-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A pure enantiomer rotates plane-polarised light by +30°. A mixture of its enantiomers rotates the light by +12°. (a) Calculate the enantiomeric excess (%). (b) Calculate the percentage of the (+) enantiomer in the mixture.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 40, unit: "%" },
              { label: "b", answer: 70, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Enantiomeric excess",
                statement:
                  "ee = (observed rotation ÷ rotation of pure enantiomer) × 100; % major = (100 + ee) ÷ 2.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Enantiomeric excess = observed ÷ pure rotation × 100.",
                working: "\\frac{12}{30} \\times 100 = 40%",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "ee = 40%.", marks: 1, markCode: "A" },
              {
                reasoning: "Percentage of (+) enantiomer = (100 + 40) ÷ 2.",
                working: "70%",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State both answers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 40%; (b) 70%",
            commonErrors: [
              "Reporting ee as 12/30 without multiplying by 100, or giving 40% as the (+) percentage.",
            ],
          },
        },
        {
          id: "chemhl-u6-chiral-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "3-methylhexane, CH$_3$CH$_2$CH(CH$_3$)CH$_2$CH$_2$CH$_3$, is considered. (a) State the number of chiral centres. (b) State the number of stereoisomers.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Chiral centre",
                statement:
                  "C3 is bonded to H, CH$_3$, C$_2$H$_5$ and C$_3$H$_7$ — four different groups.",
              },
            ],
            steps: [
              {
                reasoning:
                  "C3 has four different carbon/hydrogen groups → 1 chiral centre.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Stereoisomers = 2$^1$ = 2.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State both answers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1; (b) 2",
            commonErrors: [
              "Missing C3 — it is easy to overlook the branch point in a longer chain.",
            ],
          },
        },
      ],
    },
    {
      id: "chemhl-u6-ez-isomerism",
      title: "Geometric (E/Z) isomerism in alkenes",
      skill:
        "Identify E/Z isomers in alkenes, apply Cahn-Ingold-Prelog priority rules, and explain the physical and chemical differences between geometric isomers.",
      lesson: {
        sections: [
          {
            heading: "Conditions for E/Z isomerism",
            body: "E/Z isomerism (geometric isomerism) occurs in alkenes where each carbon of the C=C double bond has two DIFFERENT groups attached. The restricted rotation about the double bond means the groups can be on the same side (Z — zusammen, together) or opposite sides (E — entgegen, opposite). Example: but-2-ene has E and Z forms; propene does NOT (one carbon has two H atoms).",
          },
          {
            heading: "Cahn-Ingold-Prelog rules",
            body: "To assign E or Z: assign priority to the two groups on each alkene carbon — the group with the higher atomic number at the first point of difference gets higher priority. If the two higher-priority groups are on the SAME side → Z; OPPOSITE sides → E. Example: in 2-bromo-but-2-ene, Br > CH$_3$ on C2; C$_2$H$_5$ > H on C3.",
          },
          {
            heading: "Physical and chemical differences",
            body: "E and Z isomers have different physical properties (melting point, boiling point, density) because of different packing and dipole moments. They also have different chemical reactivity — e.g. in E-but-2-enedioic acid (fumaric acid) vs Z (maleic acid): maleic acid forms an anhydride easily because the two COOH groups are close (cis/Z), while fumaric acid cannot. Cis/trans isomers are diastereomers — not mirror images, different physical properties.",
          },
        ],
        keyFormulas: [
          {
            name: "E/Z condition",
            statement: "Each C=C carbon must have two different groups.",
          },
          {
            name: "Priority rules",
            statement:
              "Higher atomic number at first point of difference → higher priority.",
          },
          {
            name: "E vs Z",
            statement: "E = high priority groups opposite; Z = same side.",
          },
        ],
        workedExample: {
          problem:
            "Assign E/Z to (E)-1-bromo-1-chloroprop-1-ene and draw both isomers.",
          solution:
            "On C1: Br > Cl. On C2: C$_2$H$_5$ > H. E-isomer: Br and C$_2$H$_5$ on opposite sides. Z-isomer: Br and C$_2$H$_5$ on same side.",
        },
      },
      questions: [
        {
          id: "chemhl-u6-ez-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which compound shows E/Z isomerism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CH$_3$CH$_2$CH=CH$_2$ (but-1-ene)" },
              { id: "b", text: "CH$_3$CH=CHCH$_3$ (but-2-ene)" },
              { id: "c", text: "CH$_2$=CH$_2$ (ethene)" },
              { id: "d", text: "CH$_2$=CHCH$_3$ (propene)" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "E/Z condition",
                statement: "Each alkene carbon needs two different groups.",
              },
            ],
            steps: [
              {
                reasoning:
                  "But-2-ene: each C has CH$_3$ and H — different groups → E/Z possible.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Propene, ethene, but-1-ene have at least one C with two identical H's → no E/Z.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** But-2-ene",
            commonErrors: [
              "Choosing propene — C1 has two H atoms, cannot have E/Z.",
            ],
          },
        },
        {
          id: "chemhl-u6-ez-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain the difference between E and Z isomers of but-2-enedioic acid (fumaric vs maleic acid) and why maleic acid forms an anhydride more readily.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Geometric isomerism",
                statement:
                  "E/Z isomers have different spatial arrangements → different chemical reactivity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Maleic acid is Z (cis) — both COOH groups on same side; fumaric acid is E (trans) — opposite sides.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "In maleic acid, the two COOH groups are close together → can react to form cyclic anhydride.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "In fumaric acid, COOH groups are too far apart → cannot form anhydride without breaking double bond.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Maleic (Z) has cis COOH groups → forms anhydride; fumaric (E) has trans → cannot.",
            commonErrors: [
              "Saying 'they are the same compound' — E/Z isomers are different compounds (diastereomers).",
            ],
          },
        },
        {
          id: "chemhl-u6-ez-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Assign E or Z configuration to each of the following: (a) 1-bromo-1-chloroprop-1-ene with Br and C$_2$H$_5$ on opposite sides; (b) 2-butene with two CH$_3$ groups on same side.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cahn-Ingold-Prelog",
                statement:
                  "Assign priorities by atomic number; E = high priority opposite, Z = same side.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) C1: Br > Cl; C2: C$_2$H$_5$ > H. Br and C$_2$H$_5$ opposite → E.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) C2: CH$_3$ > H on each carbon. Two CH$_3$ on same side → Z.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both assignments use CIP priority rules correctly.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "E/Z correctly identified for both compounds.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) E-isomer; (b) Z-isomer (cis-but-2-ene).",
            commonErrors: [
              "Using 'cis/trans' for compounds where it's ambiguous — E/Z is unambiguous.",
            ],
          },
        },
        {
          id: "chemhl-u6-ez-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Consider 1,2-dichloroethene which exists as E and Z isomers.",
          parts: [
            {
              label: "a",
              prompt: "Draw the E and Z isomers and label them.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "State which isomer has a permanent dipole moment and explain why.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Predict which isomer has the higher boiling point and justify your answer.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Explain why E/Z isomers are classified as diastereomers, not enantiomers.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Geometric isomers",
                statement:
                  "E/Z isomers are diastereomers — different physical properties, not mirror images.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "E: Cl atoms on opposite sides; Z: Cl atoms on same side.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Correct drawings with labels.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Z-isomer has dipole — Cl atoms on same side create net dipole moment.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "E-isomer is symmetric → dipole moments cancel → no permanent dipole.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Z-isomer has higher bp — polar molecule has stronger intermolecular forces.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "E-isomer is non-polar → only London forces → lower bp.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Diastereomers are stereoisomers that are NOT mirror images.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "E and Z isomers are not mirror images of each other → diastereomers with different physical properties.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) E/Z drawn correctly. (b) Z has dipole. (c) Z higher bp. (d) Not mirror images → diastereomers.",
            commonErrors: [
              "Saying E/Z are enantiomers — they are diastereomers.",
            ],
          },
        },
        {
          id: "chemhl-u6-ez-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In E/Z isomerism, the label 'E' indicates that the higher-priority groups on each alkene carbon are on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The same side" },
              { id: "b", text: "Either side randomly" },
              { id: "c", text: "Opposite sides" },
              { id: "d", text: "Adjacent carbons" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "E/Z nomenclature",
                statement:
                  "E (entgegen) = high-priority groups opposite; Z (zusammen) = same side.",
              },
            ],
            steps: [
              {
                reasoning:
                  "E stands for 'entgegen' — the higher-priority groups are on opposite sides.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Opposite sides",
            commonErrors: [
              "Confusing E and Z — E is opposite (entgegen), Z is together (zusammen).",
            ],
          },
        },
        {
          id: "chemhl-u6-ez-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following alkenes shows E/Z isomerism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2-methylpropene, (CH$_3$)$_2$C=CH$_2$" },
              { id: "b", text: "Propene, CH$_2$=CHCH$_3$" },
              { id: "c", text: "Pent-2-ene, CH$_3$CH=CHCH$_2$CH$_3$" },
              { id: "d", text: "Ethene, CH$_2$=CH$_2$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "E/Z condition",
                statement: "Each alkene carbon must bear two different groups.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pent-2-ene: each double-bond carbon has H and a different alkyl group.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Propene, ethene and 2-methylpropene each have a carbon bearing two identical H or CH$_3$ groups.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Pent-2-ene",
            commonErrors: [
              "Choosing propene — its terminal carbon has two hydrogen atoms.",
            ],
          },
        },
        {
          id: "chemhl-u6-ez-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The letter 'Z' in E/Z nomenclature comes from the German word 'zusammen', meaning:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Together" },
              { id: "b", text: "Opposite" },
              { id: "c", text: "Low priority" },
              { id: "d", text: "High priority" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "E/Z nomenclature",
                statement:
                  "Z = zusammen (together) — high-priority groups on the same side.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Zusammen' translates as 'together' — the high-priority groups are on the same side.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Together",
            commonErrors: ["Choosing opposite — that is 'entgegen' (E)."],
          },
        },
        {
          id: "chemhl-u6-ez-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "By the Cahn-Ingold-Prelog priority rules, which substituent has the higher priority when attached to an alkene carbon: –Br or –Cl?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "–Br" },
              { id: "b", text: "They have equal priority" },
              { id: "c", text: "–Cl" },
              { id: "d", text: "It depends on the other substituents" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "CIP priority",
                statement:
                  "Higher atomic number at the first point of difference → higher priority.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Br has atomic number 35, Cl has 17 — Br is higher priority.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** –Br",
            commonErrors: [
              "Choosing Cl — priority follows atomic number, not alphabetical order.",
            ],
          },
        },
        {
          id: "chemhl-u6-ez-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "In 1-bromo-1-chloroprop-1-ene (BrClC=CHCH$_3$), the higher-priority substituent on C1 is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "H" },
              { id: "b", text: "Cl" },
              { id: "c", text: "CH$_3$" },
              { id: "d", text: "Br" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "CIP priority",
                statement:
                  "Compare atoms directly attached to the double-bond carbon by atomic number.",
              },
            ],
            steps: [
              {
                reasoning:
                  "On C1 the substituents are Br, Cl and (via the double bond) C — compare Br (Z=35) vs Cl (Z=17).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Br has the higher atomic number → highest priority.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Br",
            commonErrors: [
              "Choosing Cl — forgetting Br has the higher atomic number.",
            ],
          },
        },
        {
          id: "chemhl-u6-ez-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Fumaric acid (trans-butenedioic acid) is which geometric isomer of but-2-enedioic acid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "E (trans)" },
              { id: "b", text: "Chiral" },
              { id: "c", text: "Meso" },
              { id: "d", text: "Z (cis)" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Geometric isomers",
                statement:
                  "Fumaric acid has the COOH groups on opposite sides (E/trans); maleic acid has them on the same side (Z/cis).",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Fumaric' corresponds to the trans arrangement of the COOH groups.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Trans = E configuration — choice (b).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** E (trans)",
            commonErrors: [
              "Confusing fumaric with maleic — maleic is the cis/Z isomer.",
            ],
          },
        },
        {
          id: "chemhl-u6-ez-q11",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "State the number of E/Z isomers possible for each alkene: (a) but-2-ene; (b) propene.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 0 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "E/Z condition",
                statement:
                  "E/Z isomerism needs two different groups on each alkene carbon.",
              },
            ],
            steps: [
              {
                reasoning:
                  "But-2-ene has CH$_3$/H on each carbon → E and Z forms = 2.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Propene has a terminal CH$_2$ carbon with two H atoms → no E/Z isomers = 0.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 2; (b) 0",
            commonErrors: [
              "Giving 2 for propene — a terminal =CH$_2$ group cannot have E/Z isomers.",
            ],
          },
        },
        {
          id: "chemhl-u6-ez-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "State the number of geometric (E/Z) isomers for each alkene: (a) 2-methylbut-2-ene, (CH$_3$)$_2$C=CHCH$_3$; (b) pent-2-ene, CH$_3$CH=CHCH$_2$CH$_3$.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "E/Z condition",
                statement:
                  "Each double-bond carbon needs two different groups.",
              },
            ],
            steps: [
              {
                reasoning:
                  "2-methylbut-2-ene: C2 bears two identical CH$_3$ groups → no E/Z.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Pent-2-ene: each carbon bears H and a different alkyl group → E and Z = 2.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State both answers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0; (b) 2",
            commonErrors: [
              "Missing the two identical methyls on C2 of 2-methylbut-2-ene.",
            ],
          },
        },
        {
          id: "chemhl-u6-ez-q13",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "State the number of geometric isomers of 1,2-dichloroethene, ClCH=CHCl.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "E/Z isomers",
                statement:
                  "Each carbon bears H and Cl (different groups) → E and Z forms exist.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both alkene carbons have two different substituents (H and Cl).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "E and Z isomers = 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
            commonErrors: [
              "Answering 1 — forgetting the E and Z forms are distinct compounds.",
            ],
          },
        },
        {
          id: "chemhl-u6-ez-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "For 1,2-dichloroethene: (a) State the dipole moment of the E isomer in Debye. (b) State the total number of stereoisomers.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0, unit: "D" },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dipole and symmetry",
                statement:
                  "The E isomer is symmetric so bond dipoles cancel → zero net dipole.",
              },
            ],
            steps: [
              {
                reasoning:
                  "E-1,2-dichloroethene has Cl atoms on opposite sides; the molecule has a centre of symmetry.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Dipole moments cancel → 0 D; stereoisomers = E + Z = 2.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State both answers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0 D; (b) 2",
            commonErrors: [
              "Giving a non-zero dipole for the E isomer — its symmetry cancels the bond dipoles.",
            ],
          },
        },
        {
          id: "chemhl-u6-ez-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "But-2-ene exists as E and Z geometric isomers. (a) State the number of chiral centres in each isomer. (b) State the total number of stereoisomers of but-2-ene.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Geometric vs optical",
                statement:
                  "E/Z isomers arise from restricted rotation, not chiral centres; both isomers of but-2-ene are achiral.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Neither alkene carbon is tetrahedral — no chiral centres exist in either isomer.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "E-but-2-ene and Z-but-2-ene are diastereomers → 2 stereoisomers total.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State both answers.", marks: 1, markCode: "A" },
              {
                reasoning:
                  "Recognise that E/Z isomerism does not create chirality.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 0; (b) 2",
            commonErrors: [
              "Counting alkene carbons as chiral centres — sp$^2$ carbons cannot be chiral.",
            ],
          },
        },
        {
          id: "chemhl-u6-ez-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "State the number of geometric isomers possible for each alkene: (a) pent-2-ene; (b) 2-methylpent-2-ene, (CH$_3$)$_2$C=CHCH$_2$CH$_3$.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 0 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "E/Z condition",
                statement:
                  "Two different groups required on EACH alkene carbon.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pent-2-ene has H and alkyl on each carbon → E/Z = 2.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "2-methylpent-2-ene has two identical CH$_3$ groups on C2 → no E/Z = 0.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State both answers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2; (b) 0",
            commonErrors: [
              "Giving 2 for 2-methylpent-2-ene — check both carbons for identical groups.",
            ],
          },
        },
      ],
    },
  ],
};
