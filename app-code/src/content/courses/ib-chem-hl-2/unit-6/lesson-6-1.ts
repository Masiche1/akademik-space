import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "chemhl-u6-lesson-6-1",
  code: "6-1",
  title: "Organic Reaction Types and Mechanisms",
  goal: "I CAN classify organic reactions as substitution, addition, elimination or rearrangement, and explain the mechanisms of nucleophilic substitution, electrophilic addition and elimination reactions.",
  standards: ["Paper 1", "Paper 2", "AHL O2"],
  vocabulary: [
    {
      term: "Nucleophile",
      definition:
        "A species that donates an electron pair to form a bond — e.g. OH$^-$, CN$^-$, NH$_3$, H$_2$O.",
    },
    {
      term: "Electrophile",
      definition:
        "A species that accepts an electron pair — e.g. H$^+$, carbocations, polarised carbon atoms.",
    },
    {
      term: "SN1 mechanism",
      definition:
        "Two-step nucleophilic substitution: leaving group leaves first forming a carbocation, then nucleophile attacks. Rate depends only on substrate concentration.",
    },
    {
      term: "SN2 mechanism",
      definition:
        "One-step nucleophilic substitution: nucleophile attacks from opposite side as leaving group departs. Rate depends on both substrate and nucleophile.",
    },
    {
      term: "Markovnikov's rule",
      definition:
        "In electrophilic addition to alkenes, the hydrogen adds to the carbon with more hydrogens; the electrophile adds to the carbon with fewer hydrogens.",
    },
    {
      term: "Elimination reaction",
      definition:
        "A reaction where two groups are removed from adjacent carbons to form a double bond — typically requires a strong base.",
    },
  ],
  concepts: [
    {
      id: "chemhl-u6-substitution",
      title: "Nucleophilic substitution: SN1 and SN2",
      skill:
        "Distinguish SN1 and SN2 mechanisms, predict products of nucleophilic substitution, and explain the effect of substrate structure on mechanism.",
      lesson: {
        sections: [
          {
            heading: "SN2 — concerted",
            body: "In SN2, the nucleophile attacks the carbon from the opposite side to the leaving group in a single step. The transition state has five groups around carbon (trigonal bipyramidal). Rate = k[substrate][nucleophile] — depends on both. Favoured by primary substrates (less steric hindrance), strong nucleophiles, and polar aprotic solvents. The product undergoes inversion of configuration (Walden inversion).",
          },
          {
            heading: "SN1 — stepwise",
            body: "In SN1, the leaving group departs first to form a planar carbocation intermediate, then the nucleophile attacks. Rate = k[substrate] — depends only on substrate. Favoured by tertiary substrates (stable carbocation), weak nucleophiles, and polar protic solvents. Because the carbocation is planar, attack can occur from either face → racemisation (mixture of enantiomers).",
          },
          {
            heading: "Comparing",
            body: "Primary halides → SN2. Tertiary halides → SN1. Secondary → either, depends on conditions. Strong nucleophile (CN$^-$, I$^-$) → SN2. Weak nucleophile (H$_2$O, ROH) → SN1. Polar aprotic solvent (acetone, DMSO) → SN2. Polar protic solvent (water, alcohol) → SN1.",
          },
        ],
        keyFormulas: [
          {
            name: "SN2 rate",
            statement: "Rate = k[R–X][Nu] — bimolecular, concerted, inversion.",
          },
          {
            name: "SN1 rate",
            statement: "Rate = k[R–X] — unimolecular, two-step, racemisation.",
          },
          {
            name: "Substrate preference",
            statement: "Primary → SN2; Tertiary → SN1; Secondary → depends.",
          },
        ],
        workedExample: {
          problem:
            "Predict whether 2-bromo-2-methylpropane reacts by SN1 or SN2 with water.",
          solution:
            "Tertiary substrate → stable carbocation → SN1. Water is a weak nucleophile → also favours SN1. Product: 2-methylpropan-2-ol (racemic if chiral).",
        },
      },
      questions: [
        {
          id: "chemhl-u6-sub-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An SN2 reaction proceeds with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Formation of a carbocation intermediate" },
              { id: "b", text: "Inversion of configuration at the carbon" },
              { id: "c", text: "Two-step mechanism" },
              { id: "d", text: "Racemisation of product" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SN2 mechanism",
                statement:
                  "Concerted backside attack → inversion of configuration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "SN2 is a single concerted step with nucleophile attacking from opposite side.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "This causes inversion (Walden inversion) — not racemisation or carbocation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Inversion of configuration",
            commonErrors: ["Choosing carbocation — that is SN1, not SN2."],
          },
        },
        {
          id: "chemhl-u6-sub-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why tertiary halides react by SN1 while primary halides react by SN2.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Substrate structure",
                statement:
                  "Tertiary carbocations are stable → SN1; primary substrates have less steric hindrance → SN2.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Tertiary halides form stable carbocations (hyperconjugation, +I effect) → SN1 favoured.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Primary halides cannot form stable carbocations and have little steric hindrance → SN2 favoured.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Steric hindrance around tertiary carbon blocks backside attack needed for SN2.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Tertiary → stable carbocation → SN1; primary → SN2 (less hindrance, no stable carbocation).",
            commonErrors: [
              "Saying 'tertiary is more reactive' without explaining WHY (carbocation stability vs steric hindrance).",
            ],
          },
        },
        {
          id: "chemhl-u6-sub-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Predict the major product and mechanism when 1-bromobutane reacts with: (a) NaCN in acetone; (b) water (weak nucleophile).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SN2 vs SN1 conditions",
                statement:
                  "Strong nucleophile + polar aprotic → SN2; weak nucleophile + polar protic → SN1.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) NaCN: CN$^-$ is strong nucleophile; acetone is polar aprotic → SN2.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "(a) Product: pentanenitrile (CH$_3$CH$_2$CH$_2$CH$_2$CN) via backside attack.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Water: weak nucleophile; polar protic → SN1 (though primary, may be slow).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "(b) Product: butan-1-ol (or butanal if oxidation considered — but SN1 gives alcohol).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) SN2 → pentanenitrile. (b) SN1 → butan-1-ol.",
            commonErrors: [
              "Thinking primary always SN1 — mechanism depends on nucleophile strength AND substrate.",
            ],
          },
        },
        {
          id: "chemhl-u6-sub-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Consider the reaction of 2-bromo-2-methylpropane with sodium hydroxide solution.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify the mechanism (SN1 or SN2) and justify your choice.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Write the mechanism showing all steps and intermediates.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Explain why the product is a racemic mixture (or achiral).",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SN1 mechanism",
                statement:
                  "Tertiary substrate → stable carbocation → planar intermediate → attack from either face.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "SN1 — tertiary substrate forms stable carbocation; OH$^-$ is relatively weak nucleophile.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "a",
                reasoning: "Two-step mechanism with carbocation intermediate.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Step 1: (CH$_3$)$_3$C–Br $\\to$ (CH$_3$)$_3$C$^+$ + Br$^-$ (leaving group departs).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Step 2: (CH$_3$)$_3$C$^+$ + OH$^- \\to$ (CH$_3$)$_3$COH (nucleophile attacks).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Carbocation is planar → OH$^-$ can attack from either face.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Product (CH$_3$)$_3$COH has no chiral centre — central C has two identical CH$_3$ groups.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Therefore no enantiomers possible — product is achiral (not racemic).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "If substrate were chiral secondary, SN1 would give racemisation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) SN1. (b) Carbocation intermediate, then OH$^-$ attack. (c) Product achiral (no chiral centre).",
            commonErrors: [
              "Calling the product 'racemic' — it has no chiral centre so cannot be racemic.",
            ],
          },
        },
        {
          id: "chemhl-u6-sub-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For an SN2 reaction, rate = k[RX][Nu$^-$]. Which statement about the rate is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rate depends only on [Nu$^-$]" },
              { id: "b", text: "Rate depends on both [RX] and [Nu$^-$]" },
              { id: "c", text: "Rate depends only on [RX]" },
              { id: "d", text: "Rate is independent of concentration" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SN2 rate law",
                statement:
                  "Rate = k[substrate][nucleophile] — bimolecular, depends on both concentrations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "SN2 is a single concerted step involving both substrate and nucleophile.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Therefore rate depends on both [RX] and [Nu$^-$] — choice (c).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Rate depends on both [RX] and [Nu$^-$]",
            commonErrors: ["Choosing (a) — that describes the SN1 rate law."],
          },
        },
        {
          id: "chemhl-u6-sub-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which combination of conditions most favours an SN2 mechanism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Secondary halide, weak nucleophile, water" },
              { id: "b", text: "Tertiary halide, weak nucleophile, water" },
              { id: "c", text: "Tertiary halide, strong nucleophile, ethanol" },
              { id: "d", text: "Primary halide, strong nucleophile, acetone" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SN2 conditions",
                statement:
                  "SN2 favoured by unhindered primary substrate, strong nucleophile, polar aprotic solvent.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Primary halide has little steric hindrance for backside attack; strong nucleophile and polar aprotic solvent accelerate SN2.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Only option (b) satisfies all three favourable conditions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Primary halide, strong nucleophile, acetone",
            commonErrors: [
              "Choosing a tertiary halide — steric hindrance blocks the SN2 backside attack.",
            ],
          },
        },
        {
          id: "chemhl-u6-sub-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A chiral secondary halide undergoes an SN1 reaction. The stereochemical outcome of the product is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A single enantiomer with retention of configuration",
              },
              { id: "b", text: "An achiral product" },
              {
                id: "c",
                text: "A single enantiomer with inversion of configuration",
              },
              { id: "d", text: "A racemic mixture of enantiomers" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SN1 stereochemistry",
                statement:
                  "Planar carbocation intermediate allows attack from either face → racemisation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "SN1 forms a planar carbocation that can be attacked from either side.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Attack from both faces gives equal amounts of both enantiomers — a racemic mixture.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** A racemic mixture of enantiomers",
            commonErrors: [
              "Choosing inversion — that is the SN2 outcome, not SN1.",
            ],
          },
        },
        {
          id: "chemhl-u6-sub-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Rank the halides in order of leaving-group ability in nucleophilic substitution:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Br$^-$ > I$^-$ > Cl$^-$ > F$^-$" },
              { id: "b", text: "Cl$^-$ > I$^-$ > Br$^-$ > F$^-$" },
              { id: "c", text: "I$^-$ > Br$^-$ > Cl$^-$ > F$^-$" },
              { id: "d", text: "F$^-$ > Cl$^-$ > Br$^-$ > I$^-$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Leaving group ability",
                statement:
                  "Larger, more polarisable halide ions are more stable → better leaving groups: I$^-$ > Br$^-$ > Cl$^-$ > F$^-$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Down the group, the halide ion is larger and better able to delocalise charge, so it leaves more easily.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Iodide is the best leaving group and fluoride the worst — choice (b).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** I$^-$ > Br$^-$ > Cl$^-$ > F$^-$",
            commonErrors: [
              "Choosing F$^-$ as best — F$^-$ is a very poor leaving group.",
            ],
          },
        },
        {
          id: "chemhl-u6-sub-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "(CH$_3$)$_3$C–Br reacts with CN$^-$ in ethanol. Despite CN$^-$ being a strong nucleophile, the substitution proceeds mainly by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "SN1" },
              { id: "b", text: "SN2" },
              { id: "c", text: "E2" },
              { id: "d", text: "Free-radical substitution" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Substrate control",
                statement:
                  "Tertiary substrates cannot undergo SN2 (no backside access) and instead form stable carbocations → SN1.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The tertiary carbon is sterically blocked, so the concerted SN2 attack is impossible.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Br$^-$ leaves to give a stable tertiary carbocation, which CN$^-$ then attacks — SN1.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** SN1",
            commonErrors: [
              "Assuming a strong nucleophile always gives SN2 — substrate structure can override nucleophile strength.",
            ],
          },
        },
        {
          id: "chemhl-u6-sub-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "1-bromopropane reacts with OH$^-$ in aqueous solution. The mechanism is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "E1" },
              { id: "b", text: "SN1" },
              { id: "c", text: "E2" },
              { id: "d", text: "SN2" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SN2 conditions",
                statement:
                  "Primary substrate + OH$^-$ nucleophile → SN2 substitution.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A primary halide has little steric hindrance and cannot form a stable carbocation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "OH$^-$ acts as a nucleophile in a concerted backside attack — SN2.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** SN2",
            commonErrors: [
              "Choosing SN1 — primary carbocations are too unstable.",
            ],
          },
        },
        {
          id: "chemhl-u6-sub-q11",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 3,
          stem: "For an SN2 reaction, rate = k[CH$_3$CH$_2$Br][OH$^-$]. Given k = 0.050 dm$^3$ mol$^{-1}$ s$^{-1}$, [CH$_3$CH$_2$Br] = 0.20 mol dm$^{-3}$ and [OH$^-$] = 0.10 mol dm$^{-3}$, calculate the rate of reaction in mol dm$^{-3}$ s$^{-1}$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.001, tolerance: 0.000001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "SN2 rate law",
                statement: "rate = k[RX][Nu$^-$]",
              },
            ],
            steps: [
              {
                reasoning: "Substitute the concentrations into the rate law.",
                working: "rate = 0.050 \\times 0.20 \\times 0.10",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply the values together.",
                working: "rate = 1.0 \\times 10^{-3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the rate with correct units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "rate = $1.0 \\times 10^{-3}$ mol dm$^{-3}$ s$^{-1}$",
            commonErrors: ["Forgetting to multiply by k, or omitting units."],
          },
        },
        {
          id: "chemhl-u6-sub-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "An SN1 reaction follows rate = k[RX]. If k = 4.0 × 10$^{-3}$ s$^{-1}$ and [RX] = 0.025 mol dm$^{-3}$, calculate the rate of reaction.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.0001, tolerance: 0.000001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "SN1 rate law",
                statement: "rate = k[RX] — first order in substrate only.",
              },
            ],
            steps: [
              {
                reasoning: "Substitute k and [RX] into the rate law.",
                working: "rate = 4.0 \\times 10^{-3} \\times 0.025",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply to obtain the rate.",
                working: "rate = 1.0 \\times 10^{-4}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "State the answer with units mol dm$^{-3}$ s$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "rate = $1.0 \\times 10^{-4}$ mol dm$^{-3}$ s$^{-1}$",
            commonErrors: [
              "Using the SN2 rate law and including [Nu] — SN1 does not depend on nucleophile.",
            ],
          },
        },
        {
          id: "chemhl-u6-sub-q13",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "For the SN2 reaction CH$_3$Br + OH$^-$ → CH$_3$OH + Br$^-$: (a) state the order of reaction with respect to CH$_3$Br; (b) state the overall order of reaction.",
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
                name: "Rate law orders",
                statement:
                  "rate = k[CH$_3$Br][OH$^-$] — first order in each reactant, second order overall.",
              },
            ],
            steps: [
              {
                reasoning:
                  "CH$_3$Br appears to the first power in the rate law.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Overall order = 1 + 1 = 2.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 1; (b) 2",
            commonErrors: [
              "Answering 2 for part (a) — the order in CH$_3$Br alone is 1.",
            ],
          },
        },
        {
          id: "chemhl-u6-sub-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "0.40 mol of 2-bromo-2-methylpropane reacts with excess NaOH(aq) to form 2-methylpropan-2-ol in 85% yield. Calculate the moles of product formed.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.34, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stoichiometry and yield",
                statement:
                  "1:1 mole ratio; actual yield = theoretical × percentage yield.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The substitution is 1:1, so theoretical product = 0.40 mol.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply the percentage yield.",
                working: "0.40 \\times 0.85 = 0.34",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State moles of product.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.34 mol of 2-methylpropan-2-ol",
            commonErrors: ["Multiplying by 85 instead of 0.85."],
          },
        },
        {
          id: "chemhl-u6-sub-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A primary halide RX at 0.10 mol dm$^{-3}$ reacts with CN$^-$ at 0.20 mol dm$^{-3}$; k = 0.020 dm$^3$ mol$^{-1}$ s$^{-1}$. (a) Calculate the initial rate. (b) Calculate the new rate if [CN$^-$] is tripled while [RX] stays constant.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.0004, tolerance: 0.000001 },
              { label: "b", answer: 0.0012, tolerance: 0.000001 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "SN2 rate law",
                statement:
                  "rate = k[RX][Nu$^-$] — first order in each reactant.",
              },
            ],
            steps: [
              {
                reasoning: "Substitute values into rate = k[RX][Nu$^-$].",
                working: "rate = 0.020 \\times 0.10 \\times 0.20",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Calculate the initial rate.",
                working:
                  "rate = 4.0 \\times 10^{-4}\\ \\mathrm{mol\\,dm^{-3}\\,s^{-1}}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Rate is first order in [Nu$^-$], so tripling [CN$^-$] triples the rate.",
                working:
                  "new\\ rate = 3 \\times 4.0 \\times 10^{-4} = 1.2 \\times 10^{-3}",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State both answers.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "(a) $4.0 \\times 10^{-4}$ mol dm$^{-3}$ s$^{-1}$; (b) $1.2 \\times 10^{-3}$ mol dm$^{-3}$ s$^{-1}$",
            commonErrors: [
              "Tripling the rate incorrectly — first order means rate ×3, not ×9.",
            ],
          },
        },
        {
          id: "chemhl-u6-sub-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "2-bromobutane, CH$_3$CHBrCH$_2$CH$_3$, undergoes SN2 with OH$^-$. (a) State the number of chiral centres in 2-bromobutane. (b) State the number of stereoisomers of 2-bromobutane.",
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
                name: "Chirality",
                statement:
                  "A carbon with four different groups is chiral; n chiral centres give up to 2$^n$ stereoisomers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "C2 is bonded to Br, H, CH$_3$ and C$_2$H$_5$ — four different groups → 1 chiral centre.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Number of stereoisomers = 2$^1$ = 2.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State both answers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1; (b) 2",
            commonErrors: [
              "Counting the CH$_2$ carbon as chiral — it has two H atoms.",
            ],
          },
        },
      ],
    },
    {
      id: "chemhl-u6-addition-elimination",
      title: "Addition and elimination reactions",
      skill:
        "Explain electrophilic addition to alkenes, Markovnikov's rule, elimination mechanisms (E1/E2), and predict products of these reactions.",
      lesson: {
        sections: [
          {
            heading: "Electrophilic addition",
            body: "Alkenes undergo electrophilic addition where the $\\pi$ bond breaks and two new $\\sigma$ bonds form. Mechanism: the alkene $\\pi$ electrons attack an electrophile (e.g. H$^+$ from HBr) forming a carbocation; then the nucleophile attacks the carbocation. Markovnikov's rule: the electrophile (H) adds to the carbon with more hydrogens, generating the more stable carbocation. Example: propene + HBr → 2-bromopropane (not 1-bromopropane).",
          },
          {
            heading: "Elimination reactions",
            body: "Elimination removes two groups from adjacent carbons to form a double bond. E2: concerted — base removes H$^+$ as leaving group departs (anti-periplanar required). E1: stepwise — leaving group leaves first forming carbocation, then base removes H$^+$. Zaitsev's rule: the more substituted (more stable) alkene is the major product. Example: 2-bromobutane + ethanolic KOH → but-2-ene (major) + but-1-ene (minor).",
          },
          {
            heading: "Addition vs elimination",
            body: "Addition: alkene + electrophile → single product with new $\\sigma$ bonds. Elimination: alkyl halide + base → alkene + HX. Conditions matter: aqueous KOH → substitution (alcohol); ethanolic KOH → elimination (alkene). Strong bulky base → elimination favoured over substitution.",
          },
        ],
        keyFormulas: [
          {
            name: "Markovnikov",
            statement:
              "H adds to C with more H's; electrophile adds to C with fewer H's (more stable carbocation).",
          },
          {
            name: "Zaitsev's rule",
            statement:
              "Most substituted alkene is the major elimination product.",
          },
          {
            name: "E2 vs E1",
            statement:
              "E2: concerted, strong base, anti-periplanar. E1: stepwise, carbocation, weak base.",
          },
        ],
        workedExample: {
          problem: "Predict the major product of propene reacting with HBr.",
          solution:
            "Markovnikov: H adds to C1 (more H's), Br adds to C2 → 2-bromopropane. Carbocation intermediate is secondary (more stable) at C2.",
        },
      },
      questions: [
        {
          id: "chemhl-u6-add-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "According to Markovnikov's rule, in the addition of HBr to propene, the Br atom adds to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "C1 (the terminal carbon)" },
              { id: "b", text: "Both carbons equally" },
              { id: "c", text: "C2 (the middle carbon)" },
              { id: "d", text: "No carbon — Br$_2$ forms instead" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Markovnikov's rule",
                statement:
                  "Electrophile adds to carbon with fewer hydrogens → more stable carbocation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "H adds to C1 (terminal, more H's); Br adds to C2 (more substituted carbon).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "This gives 2-bromopropane — the major product.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** C2 — the middle carbon",
            commonErrors: [
              "Reversing Markovnikov — H goes to C with MORE hydrogens.",
            ],
          },
        },
        {
          id: "chemhl-u6-add-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain the difference between E1 and E2 elimination mechanisms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "E1 vs E2",
                statement:
                  "E1: stepwise with carbocation; E2: concerted, anti-periplanar.",
              },
            ],
            steps: [
              {
                reasoning:
                  "E1: leaving group leaves first forming carbocation, then base removes H$^+$ — two steps.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "E2: base removes H$^+$ and leaving group departs simultaneously — one step, anti-periplanar geometry required.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "E2 favoured by strong bases (OH$^-$, RO$^-$); E1 by weak bases and stable carbocations (tertiary).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "E1: stepwise carbocation. E2: concerted anti-periplanar.",
            commonErrors: [
              "Saying E1 and E2 are the same — E1 has a carbocation intermediate, E2 does not.",
            ],
          },
        },
        {
          id: "chemhl-u6-add-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Predict the products when 2-bromobutane reacts with: (a) aqueous KOH; (b) ethanolic KOH. Explain the difference.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Substitution vs elimination",
                statement:
                  "Aqueous conditions → substitution; ethanolic conditions → elimination.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Aqueous KOH: OH$^-$ acts as nucleophile → SN2 → butan-2-ol.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Ethanolic KOH: OH$^-$ acts as base → E2 → but-2-ene (major) + but-1-ene (minor).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Same reagent, different solvent — solvent determines whether OH$^-$ acts as nucleophile or base.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Ethanol is less polar → favours elimination; water is more polar → favours substitution.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) butan-2-ol; (b) but-2-ene + but-1-ene — solvent controls mechanism.",
            commonErrors: [
              "Thinking KOH always gives alcohol — ethanolic KOH gives alkene.",
            ],
          },
        },
        {
          id: "chemhl-u6-add-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Consider the reaction of but-2-ene with bromine water.",
          parts: [
            {
              label: "a",
              prompt: "Write the equation for the reaction.",
              marks: 1,
            },
            {
              label: "b",
              prompt:
                "Describe the mechanism of bromine addition to an alkene.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain why the product is a racemic mixture.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "State what happens if but-1-ene is used instead — predict the product.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bromine addition",
                statement:
                  "Bromonium ion intermediate → anti addition → racemic product from symmetric alkene.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "CH$_3$CH=CHCH$_3$ + Br$_2$ $\\to$ CH$_3$CHBrCHBrCH$_3$ (2,3-dibromobutane).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Br$_2$ polarises → Br$^\\delta+$ attacks $\\pi$ bond forming cyclic bromonium ion.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Br$^-$ attacks bromonium ion from opposite side → anti addition.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Both C–Br bonds form on opposite faces → anti stereochemistry.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Bromonium ion can form on either face of the planar alkene.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Attack from either face gives enantiomers → racemic mixture.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "But-1-ene is unsymmetrical → Markovnikov-type addition gives 1,2-dibromobutane.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Actually Br$_2$ addition to terminal alkene gives 1,2-dibromobutane (no regioselectivity issue for Br$_2$ unlike HBr).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 2,3-dibromobutane. (b) Bromonium ion, anti addition. (c) Attack from either face → racemic. (d) 1,2-dibromobutane.",
            commonErrors: [
              "Saying syn addition — bromine adds anti via bromonium ion.",
            ],
          },
        },
        {
          id: "chemhl-u6-add-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The major product of the addition of HBr to propene is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Propanal" },
              { id: "b", text: "1-bromopropane" },
              { id: "c", text: "2-bromopropane" },
              { id: "d", text: "Propane" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Markovnikov's rule",
                statement:
                  "H adds to the carbon with more hydrogens; Br adds to the more substituted carbon.",
              },
            ],
            steps: [
              {
                reasoning:
                  "H$^+$ adds to C1 giving the more stable secondary carbocation at C2.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Br$^-$ attacks C2 → 2-bromopropane is the major product.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** 2-bromopropane",
            commonErrors: [
              "Choosing 1-bromopropane — that would come from the less stable primary carbocation.",
            ],
          },
        },
        {
          id: "chemhl-u6-add-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "According to Zaitsev's rule, the major product of eliminating HBr from 2-bromobutane is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Butan-2-ol" },
              { id: "b", text: "But-1-ene" },
              { id: "c", text: "But-2-ene" },
              { id: "d", text: "Butane" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Zaitsev's rule",
                statement:
                  "The more substituted (more stable) alkene is the major elimination product.",
              },
            ],
            steps: [
              {
                reasoning:
                  "But-2-ene is disubstituted; but-1-ene is monosubstituted.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The more substituted alkene but-2-ene is the major product — choice (b).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** But-2-ene",
            commonErrors: [
              "Choosing but-1-ene — that is the Hofmann (minor) product.",
            ],
          },
        },
        {
          id: "chemhl-u6-add-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An E2 elimination mechanism requires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A polar protic solvent" },
              { id: "b", text: "A weak nucleophile" },
              { id: "c", text: "A carbocation intermediate" },
              { id: "d", text: "A strong base and anti-periplanar geometry" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "E2 mechanism",
                statement:
                  "Concerted removal of H$^+$ and leaving group; requires strong base and anti-periplanar arrangement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "E2 is a single concerted step — no carbocation intermediate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A strong base removes the β-hydrogen while the leaving group departs from the anti-periplanar position.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** A strong base and anti-periplanar geometry",
            commonErrors: [
              "Choosing a carbocation — that describes E1, not E2.",
            ],
          },
        },
        {
          id: "chemhl-u6-add-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Propene reacts with HCl. The organic product is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1-chloropropane" },
              { id: "b", text: "Propanone" },
              { id: "c", text: "Cyclopropane" },
              { id: "d", text: "2-chloropropane" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Markovnikov addition",
                statement:
                  "H adds to the carbon with more H atoms → secondary carbocation → 2-chloropropane.",
              },
            ],
            steps: [
              {
                reasoning:
                  "H$^+$ adds to C1 of propene giving the more stable secondary carbocation at C2.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cl$^-$ attacks C2 → 2-chloropropane.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** 2-chloropropane",
            commonErrors: [
              "Choosing 1-chloropropane — anti-Markovnikov would need peroxides for HBr only, not HCl.",
            ],
          },
        },
        {
          id: "chemhl-u6-add-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "But-2-ene reacts with Br$_2$. The stereochemistry of the 2,3-dibromobutane product is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cis addition only" },
              { id: "b", text: "No stereochemistry — product is achiral" },
              { id: "c", text: "Syn addition" },
              { id: "d", text: "Anti addition" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bromonium ion mechanism",
                statement:
                  "Br$_2$ adds via a cyclic bromonium ion; Br$^-$ attacks from the opposite face → anti addition.",
              },
            ],
            steps: [
              {
                reasoning: "The bromonium ion blocks one face of the alkene.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Bromide attacks from the opposite face → the two C–Br bonds end up anti.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Anti addition",
            commonErrors: [
              "Choosing syn — bromine addition proceeds through a bromonium ion giving anti stereochemistry.",
            ],
          },
        },
        {
          id: "chemhl-u6-add-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which set of reagents converts 2-bromobutane into but-2-ene?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ethanolic KOH" },
              { id: "b", text: "Sodium cyanide" },
              { id: "c", text: "Aqueous KOH" },
              { id: "d", text: "Bromine water" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Solvent control",
                statement:
                  "Aqueous KOH → substitution (alcohol); ethanolic KOH → elimination (alkene).",
              },
            ],
            steps: [
              {
                reasoning:
                  "In ethanol, OH$^-$ acts as a base removing a β-hydrogen → E2 elimination.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Aqueous KOH would give substitution to butan-2-ol instead — choice (b).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Ethanolic KOH",
            commonErrors: [
              "Choosing aqueous KOH — that gives the alcohol, not the alkene.",
            ],
          },
        },
        {
          id: "chemhl-u6-add-q11",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "0.50 mol of propene reacts completely with HBr. Calculate the moles of HBr consumed.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Addition stoichiometry",
                statement: "Electrophilic addition of HX to an alkene is 1:1.",
              },
            ],
            steps: [
              {
                reasoning: "One mole of alkene consumes one mole of HBr.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Moles of HBr = 0.50 mol.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "0.50 mol HBr",
            commonErrors: [
              "Using a 2:1 ratio — addition across C=C consumes only one equivalent of HX.",
            ],
          },
        },
        {
          id: "chemhl-u6-add-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Elimination of HBr from 2-bromobutane gives but-2-ene and but-1-ene in a 3:1 ratio. From 0.40 mol of 2-bromobutane, calculate the moles of but-2-ene formed.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.3, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Product distribution",
                statement:
                  "Total alkene = moles of halide consumed; major product fraction = ratio share.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Total moles of alkene products = 0.40 mol (1:1 elimination).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But-2-ene is 3 parts out of 4: $\\frac{3}{4} \\times 0.40$.",
                working: "0.75 \\times 0.40 = 0.30",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State moles of but-2-ene.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "0.30 mol but-2-ene",
            commonErrors: [
              "Using the 3:1 ratio on only part of the mixture or dividing instead of multiplying.",
            ],
          },
        },
        {
          id: "chemhl-u6-add-q13",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "State the number of steps in each elimination mechanism: (a) E1; (b) E2.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "E1 vs E2 steps",
                statement:
                  "E1 is stepwise (leaving group leaves, then H$^+$ removed); E2 is concerted (one step).",
              },
            ],
            steps: [
              {
                reasoning:
                  "E1 has two steps: ionisation to carbocation, then deprotonation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "E2 is a single concerted step.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 2; (b) 1",
            commonErrors: [
              "Reversing the answers — E1 is the stepwise mechanism.",
            ],
          },
        },
        {
          id: "chemhl-u6-add-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Propene reacts with Br$_2$ to give 1,2-dibromopropane, CH$_3$CHBrCH$_2$Br. (a) State the number of chiral centres in the product. (b) State the number of stereoisomers of 1,2-dibromopropane.",
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
                name: "Chirality count",
                statement:
                  "C2 bears Br, H, CH$_3$ and CH$_2$Br — four different groups → chiral.",
              },
            ],
            steps: [
              {
                reasoning:
                  "C2 has four different groups → 1 chiral centre; CH$_2$Br carbon has two H atoms and is not chiral.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Number of stereoisomers = 2$^1$ = 2.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State both answers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1; (b) 2",
            commonErrors: ["Counting the CH$_2$Br carbon as chiral."],
          },
        },
        {
          id: "chemhl-u6-add-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Markovnikov addition of HBr to but-1-ene gives 2-bromobutane. If 0.20 mol of but-1-ene produces 0.15 mol of 2-bromobutane, calculate the percentage yield.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 75 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Percentage yield",
                statement:
                  "Percentage yield = (actual yield ÷ theoretical yield) × 100.",
              },
            ],
            steps: [
              {
                reasoning: "Addition is 1:1, so theoretical yield = 0.20 mol.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply the yield formula.",
                working: "\\frac{0.15}{0.20} \\times 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Calculate the percentage.",
                working: "75%",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "State the answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "75%",
            commonErrors: [
              "Inverting the ratio — actual must be in the numerator.",
            ],
          },
        },
        {
          id: "chemhl-u6-add-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "In 2-bromobutane, CH$_3$CHBrCH$_2$CH$_3$, the carbon bearing Br is C2. (a) State the total number of β-hydrogens available for elimination. (b) State the number of distinct alkene products possible.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "β-elimination",
                statement:
                  "β-hydrogens sit on carbons adjacent to C–Br; each β-carbon can give a different alkene.",
              },
            ],
            steps: [
              {
                reasoning:
                  "C1 (CH$_3$) has 3 β-H and C3 (CH$_2$) has 2 β-H → 5 total.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Removal from C1 gives but-1-ene; from C3 gives but-2-ene → 2 products.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "State both answers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 5; (b) 2",
            commonErrors: [
              "Counting hydrogens on C2 itself — only β-carbons (C1 and C3) count.",
            ],
          },
        },
      ],
    },
  ],
};
