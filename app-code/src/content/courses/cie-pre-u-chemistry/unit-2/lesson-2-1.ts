import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "cipuc-u2-lesson-2-1",
  code: "2-1",
  title: "Organic Chemistry: Hydrocarbons and Functional Groups",
  goal: "I CAN classify organic compounds, explain isomerism and describe characteristic reactions at Pre-U standard.",
  standards: ["Cambridge Pre-U Chemistry 9791", "Organic chemistry"],
  vocabulary: [
    {
      term: "Homologous series",
      definition:
        "Family of compounds with same functional group and general formula — differing by CH₂ units.",
    },
    {
      term: "Isomerism",
      definition:
        "Same molecular formula, different structures — structural (chain, positional, functional) or stereoisomerism (E/Z, optical).",
    },
    {
      term: "Unsaturation",
      definition:
        "C=C or C≡C bonds or rings — decolourises bromine water (addition reactions).",
    },
    {
      term: "Nucleophile",
      definition:
        "Electron-pair donor attacking δ+ carbon — e.g. OH⁻, NH₃, CN⁻ in substitution reactions.",
    },
    {
      term: "Functional group",
      definition:
        "Atom/group responsible for characteristic chemical properties — –OH, –COOH, –CHO, –NH₂.",
    },
    {
      term: "Addition reaction",
      definition:
        "Two reactants combine into one product across a π bond — typical of alkenes and alkynes.",
    },
  ],
  concepts: [
    {
      id: "cipuc-u2-s1-organic",
      title: "Organic structure and reactions",
      skill:
        "Name compounds, identify functional groups and predict reaction products.",
      lesson: {
        sections: [
          {
            heading: "Classification and isomerism",
            body: "Organic compounds are classified by functional group: **alkanes** (C–C single bonds, general formula CₙH₂ₙ₊₂ — unreactive, free-radical substitution with halogens in UV), **alkenes** (C=C, CₙH₂ₙ — addition reactions: bromine water decolourises, hydrogenation, hydration), **alcohols** (–OH), **carboxylic acids** (–COOH), **esters** (–COO–), **aldehydes/ketones** (C=O), **amines** (–NH₂). Isomerism: structural (different connectivity — butane vs 2-methylpropane), positional (functional group position differs — propan-1-ol vs propan-2-ol), E/Z (restricted C=C rotation), optical (chiral centres — non-superimposable mirror images).",
          },
          {
            heading: "Characteristic reactions",
            body: "Alkenes: electrophilic addition — Br₂ adds across C=C (bromine water test), H₂/Ni → alkane, steam/H₃PO₄ → alcohol. Alcohols: primary → aldehyde → carboxylic acid on oxidation (K₂Cr₂O₇/H₂SO₄); secondary → ketone; tertiary resistant. Carboxylic acids: react with carbonates → CO₂, with alcohols → esters (conc. H₂SO₄ catalyst), with bases → salts. Aldehydes: reduce to primary alcohols (NaBH₄), oxidise to acids; Tollens' and Fehling's tests distinguish aldehydes from ketones. Amines: basic — react with acids to form salts.",
          },
          {
            heading: "Reaction mechanisms",
            body: "Electrophilic addition (alkenes): electrophile (δ+ end of H–Br or Br₂) attacks π bond → carbocation intermediate → nucleophile attacks → product. Markovnikov's rule: H adds to carbon with more H's, giving more stable carbocation. Nucleophilic substitution (halogenoalkanes): OH⁻/NH₃ attack δ+ carbon, displacing halide — SN1 (via carbocation, tertiary favoured) vs SN2 (concerted backside attack, primary favoured). Elimination competes with substitution with alcoholic KOH.",
          },
        ],
        keyFormulas: [
          {
            name: "Alkane general formula",
            statement:
              "$C_nH_{2n+2}$; alkene $C_nH_{2n}$; alcohol $C_nH_{2n+1}OH$",
          },
          {
            name: "Esterification",
            statement:
              "$\\text{acid} + \\text{alcohol} \\xrightarrow{\\text{conc. } H_2SO_4} \\text{ester} + \\text{water}$",
          },
        ],
        workedExample: {
          problem: "What happens when propene reacts with bromine water?",
          solution:
            "Electrophilic addition: Br₂ adds across the C=C → 1,2-dibromopropane; orange bromine water is decolourised.",
        },
      },
      questions: [
        {
          id: "cipuc-u2-org-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which compound decolourises bromine water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Propane" },
              { id: "b", text: "Cyclohexane" },
              { id: "c", text: "Propene" },
              { id: "d", text: "Butane" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Unsaturation test",
                statement:
                  "Only C=C/C≡C bonds react with Br₂ — alkanes and cycloalkanes do not.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Propene has C=C → addition reaction decolourises bromine water.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "c",
          },
        },
        {
          id: "cipuc-u2-org-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the following: (a) CH₃CH(OH)CH₃ (b) CH₃COOH",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "IUPAC naming",
                statement:
                  "Longest chain containing functional group; number to give lowest locant.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Propan-2-ol — 3-carbon chain, –OH on C2.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "(b) Ethanoic acid — 2-carbon carboxylic acid.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Propan-2-ol; ethanoic acid",
          },
        },
        {
          id: "cipuc-u2-org-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why propan-1-ol and propan-2-ol are functional group isomers... and instead are positional isomers — clarify the distinction and give one example of a functional group isomer pair.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Isomer types",
                statement:
                  "Positional: same functional group, different position. Functional group: different functional groups entirely.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Propan-1-ol vs propan-2-ol: same –OH group at different positions → positional isomers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They have different physical properties (bp, solubility) and different oxidation products.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Functional group example: ethanol (CH₃CH₂OH) vs dimethyl ether (CH₃OCH₃) — same formula C₂H₆O.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Positional vs functional group isomers distinguished with example.",
          },
        },
        {
          id: "cipuc-u2-org-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the mechanism of the reaction between propene and HBr, naming the product.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Electrophilic addition",
                statement:
                  "H⁺ (electrophile) adds first to give more stable carbocation, then Br⁻ attacks.",
              },
            ],
            steps: [
              {
                reasoning: "HBr polarises: H is δ+, Br is δ−.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "H⁺ adds to C1 (the CH₂ end) → secondary carbocation at C2 — more stable than primary.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Br⁻ attacks the carbocation → 2-bromopropane (Markovnikov product).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Overall: electrophilic addition across C=C; major product 2-bromopropane.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2-bromopropane via carbocation.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipuc-u2-organic-notes",
      title: "Organic chemistry — revision notes",
      summary:
        "Homologous series, isomerism, characteristic reactions, mechanisms.",
      sections: [
        {
          heading: "Key skills",
          body: "Learn the oxidation ladder for alcohols: primary → aldehyde → acid; secondary → ketone; tertiary → resistant. Bromine water test = unsaturation only.",
        },
        {
          heading: "Exam tips",
          body: "Markovnikov's rule applies to unsymmetrical alkenes — H goes where there are more H's. Distinguish SN1 (3° favoured, two steps) from SN2 (1° favoured, one step).",
        },
      ],
    },
  ],
};
