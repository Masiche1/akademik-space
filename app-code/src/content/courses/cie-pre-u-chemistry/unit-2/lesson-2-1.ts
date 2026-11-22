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
              { id: "a", text: "Propene" },
              { id: "b", text: "Propane" },
              { id: "c", text: "Butane" },
              { id: "d", text: "Cyclohexane" },
            ],
            correctChoiceId: "a",
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
        {
          id: "cipuc-u2-org-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which functional group is present in CH₃COOCH₂CH₃?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alcohol" },
              { id: "b", text: "Ester" },
              { id: "c", text: "Ketone" },
              { id: "d", text: "Aldehyde" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Functional groups",
                statement:
                  "Esters contain the –COO– group, formed from a carboxylic acid and an alcohol.",
              },
            ],
            steps: [
              {
                reasoning:
                  "CH₃COO– is the ethanoate (ester) group bonded to an ethyl group → ethyl ethanoate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "b",
          },
        },
        {
          id: "cipuc-u2-org-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Calculate the relative molecular mass, $M_r$, of propene, C₃H₆. ($A_r$: C = 12, H = 1)",
          response: {
            type: "numeric",
            parts: [{ label: "$M_r$", answer: 42 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Relative molecular mass",
                statement:
                  "$M_r = \\sum (A_r \\times \\text{atom count})$.",
              },
            ],
            steps: [
              {
                reasoning: "$M_r = 3(12) + 6(1) = 42$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "42",
          },
        },
        {
          id: "cipuc-u2-org-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the products formed when (a) propan-1-ol and (b) propan-2-ol are oxidised with acidified potassium dichromate(VI).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Alcohol oxidation",
                statement:
                  "Primary alcohols → aldehyde → carboxylic acid; secondary alcohols → ketone; tertiary alcohols resist oxidation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Propan-1-ol is primary → propanal first, then propanoic acid with excess oxidant.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Propan-2-ol is secondary → propanone (a ketone) only; no further oxidation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The distinction arises because secondary alcohols have no H on the carbinol carbon to be removed for further oxidation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Propan-1-ol → propanoic acid (via propanal); propan-2-ol → propanone.",
          },
        },
        {
          id: "cipuc-u2-org-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the major product when propene reacts with hydrogen bromide?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1-bromopropane" },
              { id: "b", text: "Propane" },
              { id: "c", text: "1,2-dibromopropane" },
              { id: "d", text: "2-bromopropane" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Markovnikov's rule",
                statement:
                  "H adds to the carbon with more hydrogens, forming the more stable carbocation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "H⁺ adds to the CH₂ end → secondary carbocation → Br⁻ gives 2-bromopropane.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "b",
          },
        },
        {
          id: "cipuc-u2-org-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many structural isomers have the molecular formula C₄H₁₀?",
          response: {
            type: "numeric",
            parts: [{ label: "Isomers", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Structural isomerism",
                statement:
                  "Same formula, different connectivity — for C₄H₁₀ the chain can be straight or branched.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Butane (straight chain) and 2-methylpropane (branched) — total 2 isomers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cipuc-u2-org-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between SN1 and SN2 mechanisms for nucleophilic substitution in halogenoalkanes, including which substrate type each favours.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SN1 vs SN2",
                statement:
                  "SN2 is concerted backside attack (primary favoured); SN1 proceeds via a carbocation intermediate (tertiary favoured).",
              },
            ],
            steps: [
              {
                reasoning:
                  "SN2: single concerted step — nucleophile attacks from the opposite side to the leaving group, causing inversion of configuration; rate depends on both [RX] and [Nu⁻].",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "SN1: two steps — the C–X bond breaks first to form a planar carbocation, then the nucleophile attacks from either face giving racemisation; rate depends only on [RX].",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Steric hindrance decides the pathway: primary halogenoalkanes favour SN2; tertiary halogenoalkanes favour SN1 because the carbocation is stabilised.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "With alcoholic KOH, elimination competes with substitution, forming an alkene instead.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "SN2 concerted/inversion, primary favoured; SN1 via carbocation, tertiary favoured.",
          },
        },
        {
          id: "cipuc-u2-org-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which test distinguishes ethanal from propanone?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bromine water" },
              { id: "b", text: "Sodium metal" },
              { id: "c", text: "Fehling's solution" },
              { id: "d", text: "Litmus paper" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Aldehyde tests",
                statement:
                  "Aldehydes are oxidised by Fehling's solution (brick-red precipitate) and Tollens' reagent (silver mirror); ketones are not.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fehling's solution oxidises ethanal (aldehyde) but not propanone (ketone).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "b",
          },
        },
        {
          id: "cipuc-u2-org-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "0.10 mol of ethene reacts completely with bromine to form 1,2-dibromoethane, C₂H₄Br₂. Calculate the mass of product formed. ($M_r(C_2H_4Br_2) = 188$)",
          response: {
            type: "numeric",
            parts: [{ label: "Mass", answer: 18.8, unit: "g" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Mass from moles",
                statement: "$m = nM_r$; addition is 1:1 across the C=C bond.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ethene : product = 1 : 1, so $n(C_2H_4Br_2) = 0.10$ mol.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$m = 0.10 \\times 188 = 18.8$ g.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "18.8 g",
          },
        },
        {
          id: "cipuc-u2-org-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which pair of reactants produces ethyl ethanoate in an esterification reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Propanoic acid and ethanol" },
              { id: "b", text: "Ethanol and water" },
              { id: "c", text: "Ethanoic acid and ethanol" },
              { id: "d", text: "Ethanoic acid and methanol" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Esterification",
                statement:
                  "Carboxylic acid + alcohol $\\xrightarrow{\\text{conc. } H_2SO_4}$ ester + water; the acid supplies the acyl part, the alcohol the alkyl part.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ethanoic acid gives the ethanoate part and ethanol gives the ethyl part → ethyl ethanoate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a",
          },
        },
        {
          id: "cipuc-u2-org-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which condition must be met for an alkene to show E/Z (geometrical) isomerism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The molecule must contain an –OH group" },
              { id: "b", text: "The molecule must have a branched carbon chain" },
              {
                id: "c",
                text: "The molecule must contain at least one C–C single bond",
              },
              {
                id: "d",
                text: "Rotation about the C=C is restricted and each carbon of the double bond bears two different groups",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "E/Z isomerism",
                statement:
                  "Restricted C=C rotation plus two different substituents on each alkene carbon allows cis/trans (E/Z) isomers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "If each double-bond carbon carries identical groups, the two arrangements are identical — no E/Z isomerism.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a",
          },
        },
        {
          id: "cipuc-u2-org-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Calculate the relative molecular mass, $M_r$, of ethanol, C₂H₅OH. ($A_r$: C = 12, H = 1, O = 16)",
          response: {
            type: "numeric",
            parts: [{ label: "$M_r$", answer: 46 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Relative molecular mass",
                statement:
                  "$M_r = 2(12) + 6(1) + 16 = 46$ for C$_2$H$_6$O.",
              },
            ],
            steps: [
              {
                reasoning: "$M_r = 2(12) + 6(1) + 16 = 46$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "46",
          },
        },
        {
          id: "cipuc-u2-org-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "16 g of methane, CH₄, undergoes complete combustion. Calculate the mass of carbon dioxide produced. ($M_r$: CH₄ = 16, CO₂ = 44)",
          response: {
            type: "numeric",
            parts: [{ label: "Mass of CO₂", answer: 44, unit: "g" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Combustion stoichiometry",
                statement:
                  "$CH_4 + 2O_2 \\rightarrow CO_2 + 2H_2O$; 1 mol CH₄ gives 1 mol CO₂.",
              },
            ],
            steps: [
              {
                reasoning: "$n(CH_4) = 16/16 = 1.0$ mol → $n(CO_2) = 1.0$ mol.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$m(CO_2) = 1.0 \\times 44 = 44$ g.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "44 g",
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
