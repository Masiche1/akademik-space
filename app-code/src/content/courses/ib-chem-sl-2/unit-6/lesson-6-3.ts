import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "chemsl-u6-lesson-6-3",
  code: "6-3",
  title: "Organic Chemistry and Chemical Analysis",
  goal: "I CAN describe the structures and isomerism of simple organic compounds, and use chromatography and spectroscopy to identify unknown substances.",
  standards: ["Paper 1", "Paper 2", "Topic 10.1", "Topic 10.2", "Topic 11.1", "Topic 11.2"],
  vocabulary: [
    { term: "Organic compound", definition: "A compound of carbon, usually containing C–C and/or C–H covalent bonds; the study of these compounds is organic chemistry." },
    { term: "Homologous series", definition: "A family of compounds with the same functional group and general formula, differing by $\\mathrm{CH}_2$ units, showing a gradual trend in properties." },
    { term: "Alkane", definition: "A saturated hydrocarbon with the general formula $\\mathrm{C}_n\\mathrm{H}_{2n+2}$, containing only single C–C bonds." },
    { term: "Alkene", definition: "An unsaturated hydrocarbon with the general formula $\\mathrm{C}_n\\mathrm{H}_{2n}$, containing at least one C=C double bond." },
    { term: "Functional group", definition: "The atom or group of atoms responsible for the characteristic chemical reactions of a molecule, e.g. $-\\mathrm{OH}$ (alcohol), $-\\mathrm{COOH}$ (carboxylic acid), $-\\mathrm{X}$ (halogenoalkane)." },
    { term: "Structural isomerism", definition: "Compounds with the same molecular formula but different structural formulae — chain, position or functional group isomers." },
  ],
  concepts: [
    {
      id: "chemsl-u6-organic",
      title: "Hydrocarbons, functional groups and isomerism",
      skill: "Identify homologous series and functional groups, deduce molecular formulae, and recognise structural isomers.",
      lesson: {
        sections: [
          {
            heading: "Hydrocarbons and homologous series",
            body: "**Hydrocarbons** contain only carbon and hydrogen. The **alkanes** are saturated hydrocarbons $\\mathrm{C}_n\\mathrm{H}_{2n+2}$ (methane, ethane, propane...) with only single bonds. The **alkenes** are unsaturated hydrocarbons $\\mathrm{C}_n\\mathrm{H}_{2n}$ containing at least one C=C double bond. Each series is a **homologous series**: members differ by $\\mathrm{CH}_2$ and show a gradual trend in physical properties.",
          },
          {
            heading: "Functional groups",
            body: "Replacing a hydrogen with a functional group changes the chemistry. Key groups: **alcohol** $-\\mathrm{OH}$ (e.g. ethanol $\\mathrm{C}_2\\mathrm{H}_5\\mathrm{OH}$); **carboxylic acid** $-\\mathrm{COOH}$ (e.g. ethanoic acid $\\mathrm{CH}_3\\mathrm{COOH}$); **carbonyl** $\\mathrm{C}=\\mathrm{O}$ (aldehydes and ketones); **halogenoalkane** $-\\mathrm{X}$ where X = Cl, Br, I; **amine** $-\\mathrm{NH}_2$. The functional group determines the reactions the molecule undergoes.",
          },
          {
            heading: "Structural isomerism",
            body: "**Structural isomers** have the same molecular formula but different structural formulae. Types include **chain isomerism** (branched vs straight chain), **position isomerism** (functional group at a different position) and **functional group isomerism** (same formula, different functional group). For example $\\mathrm{C}_4\\mathrm{H}_{10}$ has two isomers — butane and 2-methylpropane — and $\\mathrm{C}_3\\mathrm{H}_8\\mathrm{O}$ alcohols include propan-1-ol and propan-2-ol.",
          },
        ],
        keyFormulas: [
          { name: "Alkane general formula", statement: "$\\mathrm{C}_n\\mathrm{H}_{2n+2}$" },
          { name: "Alkene general formula", statement: "$\\mathrm{C}_n\\mathrm{H}_{2n}$" },
          { name: "Homologous difference", statement: "Consecutive members differ by $\\mathrm{CH}_2$" },
        ],
        workedExample: {
          problem: "A compound has molecular formula $\\mathrm{C}_3\\mathrm{H}_8\\mathrm{O}$ and contains an $-\\mathrm{OH}$ group. Name the two possible alcohol isomers.",
          solution: "The $-\\mathrm{OH}$ group can attach to the terminal carbon (propan-1-ol, $\\mathrm{CH}_3\\mathrm{CH}_2\\mathrm{CH}_2\\mathrm{OH}$) or the middle carbon (propan-2-ol, $\\mathrm{CH}_3\\mathrm{CH(OH)CH}_3$). These are position isomers.",
        },
      },
      questions: [
        {
          id: "chemsl-u6-organic-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What is the general formula of the alkanes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{C}_n\\mathrm{H}_{2n+2}$" },
              { id: "b", text: "$\\mathrm{C}_n\\mathrm{H}_{2n}$" },
              { id: "c", text: "$\\mathrm{C}_n\\mathrm{H}_{2n-2}$" },
              { id: "d", text: "$\\mathrm{C}_n\\mathrm{H}_n$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Alkane", statement: "Saturated hydrocarbon, $\\mathrm{C}_n\\mathrm{H}_{2n+2}$." },
            ],
            steps: [
              { reasoning: "Alkanes are saturated — each carbon forms four single bonds.", working: "\\mathrm{C}_n\\mathrm{H}_{2n+2}", marks: 1, markCode: "M" },
              { reasoning: "Option (b) is the alkene formula; option (c) is the alkyne formula.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** $\\mathrm{C}_n\\mathrm{H}_{2n+2}$",
            commonErrors: ["Confusing the alkane and alkene general formulae."],
          },
        },
        {
          id: "chemsl-u6-organic-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "What is the molecular formula of an alkene containing $5$ carbon atoms?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{C}_5\\mathrm{H}_{10}$" },
              { id: "b", text: "$\\mathrm{C}_5\\mathrm{H}_{12}$" },
              { id: "c", text: "$\\mathrm{C}_5\\mathrm{H}_8$" },
              { id: "d", text: "$\\mathrm{C}_5\\mathrm{H}_{11}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Alkene", statement: "Unsaturated hydrocarbon, $\\mathrm{C}_n\\mathrm{H}_{2n}$." },
            ],
            steps: [
              { reasoning: "Apply the alkene general formula with $n = 5$.", working: "\\mathrm{C}_5\\mathrm{H}_{2 \\times 5} = \\mathrm{C}_5\\mathrm{H}_{10}", marks: 1, markCode: "M" },
              { reasoning: "Option (b) is the alkane formula ($2n+2$); option (c) corresponds to an alkyne.", marks: 1, markCode: "R" },
              { reasoning: "Option (d) has an odd number of hydrogens, impossible for a neutral hydrocarbon.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\mathrm{C}_5\\mathrm{H}_{10}$",
            commonErrors: ["Using the alkane formula $2n+2$ instead of $2n$."],
          },
        },
        {
          id: "chemsl-u6-organic-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "How many structural isomers does $\\mathrm{C}_4\\mathrm{H}_{10}$ have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two — butane and 2-methylpropane" },
              { id: "b", text: "One — butane only" },
              { id: "c", text: "Three — butane, 2-methylpropane and 2-butene" },
              { id: "d", text: "Four — including two position isomers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Structural isomerism", statement: "Same molecular formula, different structural formulae." },
            ],
            steps: [
              { reasoning: "$\\mathrm{C}_4\\mathrm{H}_{10}$ is an alkane ($n=4$, $2n+2=10$), so only single bonds are possible.", working: "\\mathrm{C}_4\\mathrm{H}_{10} = \\text{alkane}", marks: 1, markCode: "M" },
              { reasoning: "The straight chain gives butane; branching one carbon gives 2-methylpropane.", working: "\\mathrm{CH}_3\\mathrm{CH}_2\\mathrm{CH}_2\\mathrm{CH}_3 \\text{ and } (\\mathrm{CH}_3)_3\\mathrm{CH}", marks: 1, markCode: "M" },
              { reasoning: "No further branching is possible with four carbons; 2-butene has formula $\\mathrm{C}_4\\mathrm{H}_8$, not $\\mathrm{C}_4\\mathrm{H}_{10}$ (option c).", working: "\\mathrm{C}_4\\mathrm{H}_{10} \\neq \\mathrm{C}_4\\mathrm{H}_8", marks: 1, markCode: "R" },
              { reasoning: "Exactly two structural isomers exist.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Two — butane and 2-methylpropane",
            commonErrors: ["Counting 2-butene as an isomer of $\\mathrm{C}_4\\mathrm{H}_{10}$ (different molecular formula)."],
          },
        },
        {
          id: "chemsl-u6-organic-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A compound has molecular formula $\\mathrm{C}_3\\mathrm{H}_8\\mathrm{O}$ and contains an $-\\mathrm{OH}$ functional group.",
          parts: [
            { label: "a", prompt: "Name the homologous series to which this compound belongs.", marks: 2 },
            { label: "b", prompt: "Draw or describe the structural formulae of the two alcohol isomers of this formula.", marks: 2 },
            { label: "c", prompt: "Explain what is meant by position isomerism, using these two compounds as examples.", marks: 2 },
            { label: "d", prompt: "Give the name of one functional-group isomer of $\\mathrm{C}_3\\mathrm{H}_8\\mathrm{O}$ that is not an alcohol.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Homologous series", statement: "A family with the same functional group and general formula." },
              { kind: "definition", name: "Position isomerism", statement: "Same functional group at a different position in the carbon chain." },
              { kind: "definition", name: "Functional group isomerism", statement: "Same molecular formula but different functional groups." },
            ],
            steps: [
              { part: "a", reasoning: "The $-\\mathrm{OH}$ group identifies the compound as an alcohol; the series is the alcohols (alkanols).", working: "-\\mathrm{OH} \\Rightarrow \\text{alcohol}", marks: 2, markCode: "R" },
              { part: "b", reasoning: "The $-\\mathrm{OH}$ can be on a terminal carbon or the middle carbon.", working: "\\mathrm{CH}_3\\mathrm{CH}_2\\mathrm{CH}_2\\mathrm{OH} \\text{ (propan-1-ol)};\\ \\mathrm{CH}_3\\mathrm{CH(OH)CH}_3 \\text{ (propan-2-ol)}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Position isomerism means the same functional group attached at a different carbon of the same carbon skeleton.", working: "-\\mathrm{OH} \\text{ on C1 vs C2}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Propan-1-ol and propan-2-ol differ only in the position of the $-\\mathrm{OH}$ group.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Methoxyethane $\\mathrm{CH}_3\\mathrm{OCH}_2\\mathrm{CH}_3$ has an ether linkage instead of $-\\mathrm{OH}$; it is a functional-group isomer.", working: "\\mathrm{CH}_3\\mathrm{OCH}_2\\mathrm{CH}_3 \\text{ (methoxyethane)}", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) alcohols (alkanols) (b) propan-1-ol $\\mathrm{CH}_3\\mathrm{CH}_2\\mathrm{CH}_2\\mathrm{OH}$ and propan-2-ol $\\mathrm{CH}_3\\mathrm{CH(OH)CH}_3$ (c) same group at different positions on the chain (d) methoxyethane",
            commonErrors: ["Drawing propan-1-ol and propan-2-ol as the same structure.", "Suggesting an alkene as a functional-group isomer of $\\mathrm{C}_3\\mathrm{H}_8\\mathrm{O}$ (it contains no oxygen)."],
            examinerNote: "Accept any correct non-alcohol isomer of $\\mathrm{C}_3\\mathrm{H}_8\\mathrm{O}$ in (d), e.g. methoxyethane; award R1 for the definition and R1 for the correct application in (c).",
          },
        },
        {
          id: "chemsl-u6-organic-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which functional group is present in ethanol, $\\mathrm{C}_2\\mathrm{H}_5\\mathrm{OH}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The alcohol group, $-\\mathrm{OH}$" },
              { id: "b", text: "The carboxylic acid group, $-\\mathrm{COOH}$" },
              { id: "c", text: "The carbonyl group, $\\mathrm{C}=\\mathrm{O}$" },
              { id: "d", text: "The halogeno group, $-\\mathrm{Cl}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Functional group", statement: "The atom or group of atoms responsible for the characteristic reactions of a molecule." },
            ],
            steps: [
              { reasoning: "Ethanol contains an $-\\mathrm{OH}$ group attached to a carbon chain.", working: "\\mathrm{C}_2\\mathrm{H}_5\\mathrm{OH} = \\text{alcohol}", marks: 1, markCode: "M" },
              { reasoning: "It has no $-\\mathrm{COOH}$, $\\mathrm{C}=\\mathrm{O}$ or halogen.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** The alcohol group, $-\\mathrm{OH}$",
            commonErrors: ["Confusing $-\\mathrm{OH}$ with $-\\mathrm{COOH}$."],
          },
        },
        {
          id: "chemsl-u6-organic-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What is the general formula of the alkenes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{C}_n\\mathrm{H}_{2n}$" },
              { id: "b", text: "$\\mathrm{C}_n\\mathrm{H}_{2n+2}$" },
              { id: "c", text: "$\\mathrm{C}_n\\mathrm{H}_{2n-2}$" },
              { id: "d", text: "$\\mathrm{C}_n\\mathrm{H}_n$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Alkene", statement: "Unsaturated hydrocarbon containing at least one C=C double bond, $\\mathrm{C}_n\\mathrm{H}_{2n}$." },
            ],
            steps: [
              { reasoning: "Alkenes have one degree of unsaturation (the double bond), so two fewer hydrogens than the corresponding alkane.", working: "\\mathrm{C}_n\\mathrm{H}_{2n+2} - \\mathrm{H}_2 = \\mathrm{C}_n\\mathrm{H}_{2n}", marks: 1, markCode: "M" },
              { reasoning: "Option (b) is the alkane formula; option (c) is the alkyne formula.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $\\mathrm{C}_n\\mathrm{H}_{2n}$",
            commonErrors: ["Confusing the alkene and alkane general formulae."],
          },
        },
        {
          id: "chemsl-u6-organic-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is a chain isomer of butane, $\\mathrm{C}_4\\mathrm{H}_{10}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2-methylpropane, $(\\mathrm{CH}_3)_3\\mathrm{CH}$" },
              { id: "b", text: "Butan-1-ol, $\\mathrm{CH}_3\\mathrm{CH}_2\\mathrm{CH}_2\\mathrm{CH}_2\\mathrm{OH}$" },
              { id: "c", text: "2-butene, $\\mathrm{CH}_3\\mathrm{CH}=\\mathrm{CHCH}_3$" },
              { id: "d", text: "Propanone, $\\mathrm{CH}_3\\mathrm{COCH}_3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Chain isomerism", statement: "Same molecular formula with a branched rather than straight carbon chain." },
            ],
            steps: [
              { reasoning: "A chain isomer must have the same molecular formula $\\mathrm{C}_4\\mathrm{H}_{10}$ and only single C–C bonds.", working: "\\mathrm{C}_4\\mathrm{H}_{10}", marks: 1, markCode: "M" },
              { reasoning: "Only 2-methylpropane has formula $\\mathrm{C}_4\\mathrm{H}_{10}$ with a branched chain; the others have different formulae.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** 2-methylpropane",
            commonErrors: ["Suggesting compounds containing oxygen or double bonds, which have different molecular formulae."],
          },
        },
        {
          id: "chemsl-u6-organic-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Which compound is a functional-group isomer of $\\mathrm{C}_3\\mathrm{H}_8\\mathrm{O}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Methoxyethane, $\\mathrm{CH}_3\\mathrm{OCH}_2\\mathrm{CH}_3$ — an ether" },
              { id: "b", text: "Propanal, $\\mathrm{CH}_3\\mathrm{CH}_2\\mathrm{CHO}$ — an aldehyde, $\\mathrm{C}_3\\mathrm{H}_6\\mathrm{O}$" },
              { id: "c", text: "Propan-1-ene, $\\mathrm{CH}_2=\\mathrm{CHCH}_3$ — an alkene, $\\mathrm{C}_3\\mathrm{H}_6$" },
              { id: "d", text: "Propanone, $\\mathrm{CH}_3\\mathrm{COCH}_3$ — a ketone, $\\mathrm{C}_3\\mathrm{H}_6\\mathrm{O}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Functional group isomerism", statement: "Same molecular formula but a different functional group." },
            ],
            steps: [
              { reasoning: "A functional-group isomer must have exactly the formula $\\mathrm{C}_3\\mathrm{H}_8\\mathrm{O}$ but a different group from $-\\mathrm{OH}$.", working: "\\mathrm{C}_3\\mathrm{H}_8\\mathrm{O}", marks: 1, markCode: "M" },
              { reasoning: "Methoxyethane contains an ether linkage $\\mathrm{C-O-C}$ and has formula $\\mathrm{C}_3\\mathrm{H}_8\\mathrm{O}$.", working: "\\mathrm{CH}_3\\mathrm{OCH}_2\\mathrm{CH}_3 = \\mathrm{C}_3\\mathrm{H}_8\\mathrm{O}", marks: 1, markCode: "M" },
              { reasoning: "Options (b) and (d) are $\\mathrm{C}_3\\mathrm{H}_6\\mathrm{O}$ and option (c) is $\\mathrm{C}_3\\mathrm{H}_6$ — different formulae.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Methoxyethane",
            commonErrors: ["Choosing compounds with different molecular formulae."],
          },
        },
        {
          id: "chemsl-u6-organic-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "An alkane has the molecular formula $\\mathrm{C}_7\\mathrm{H}_n$. Using the general formula $\\mathrm{C}_n\\mathrm{H}_{2n+2}$, calculate the value of $n$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$n$ (number of H atoms)", answer: 16, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Alkane general formula", statement: "$\\mathrm{C}_n\\mathrm{H}_{2n+2}$ with $n = 7$ carbons." },
            ],
            steps: [
              { reasoning: "Substitute $n = 7$ into $2n + 2$.", working: "2 \\times 7 + 2 = 16", marks: 1, markCode: "M" },
              { reasoning: "State the number of hydrogen atoms.", working: "n = 16", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n = 16$ ($\\mathrm{C}_7\\mathrm{H}_{16}$)",
            commonErrors: ["Using $2n$ (alkene formula) to get $14$."],
          },
        },
        {
          id: "chemsl-u6-organic-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "An alkene has the molecular formula $\\mathrm{C}_6\\mathrm{H}_{12}$. Calculate its molar mass in g mol$^{-1}$ (relative atomic masses: C = 12, H = 1).",
          response: {
            type: "numeric",
            parts: [
              { label: "Molar mass (g mol$^{-1}$)", answer: 84, tolerance: 0.001, unit: "g mol$^{-1}$" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Molar mass", statement: "$M_r = \\sum(\\text{number of atoms} \\times \\text{relative atomic mass})$." },
            ],
            steps: [
              { reasoning: "Multiply the number of each atom by its relative atomic mass.", working: "M_r = 6 \\times 12 + 12 \\times 1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "M_r = 72 + 12 = 84", marks: 1, markCode: "M" },
              { reasoning: "State the molar mass with units.", working: "M = 84\\ \\text{g mol}^{-1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$84$ g mol$^{-1}$",
            commonErrors: ["Counting only 10 hydrogens or forgetting the coefficient on carbon."],
          },
        },
        {
          id: "chemsl-u6-organic-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "How many structural isomers does $\\mathrm{C}_5\\mathrm{H}_{12}$ have? (Draw or list them to check.)",
          response: {
            type: "numeric",
            parts: [
              { label: "Number of isomers", answer: 3, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Structural isomerism", statement: "Same molecular formula, different structural formulae (chain isomers here)." },
            ],
            steps: [
              { reasoning: "$\\mathrm{C}_5\\mathrm{H}_{12}$ is an alkane; the possibilities are pentane, 2-methylbutane and 2,2-dimethylpropane.", working: "\\mathrm{CH}_3\\mathrm{CH}_2\\mathrm{CH}_2\\mathrm{CH}_2\\mathrm{CH}_3;\\ (\\mathrm{CH}_3)_2\\mathrm{CHCH}_2\\mathrm{CH}_3;\\ (\\mathrm{CH}_3)_3\\mathrm{CCH}_3", marks: 1, markCode: "M" },
              { reasoning: "No further branching is possible with five carbons.", marks: 1, markCode: "M" },
              { reasoning: "State the count.", working: "3\\ \\text{isomers}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$ structural isomers",
            commonErrors: ["Missing 2,2-dimethylpropane or counting duplicates."],
          },
        },
        {
          id: "chemsl-u6-organic-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Which pair of compounds are position isomers of each other?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Propan-1-ol and propan-2-ol" },
              { id: "b", text: "Butane and 2-methylpropane" },
              { id: "c", text: "Propan-1-ol and methoxyethane" },
              { id: "d", text: "Ethene and ethane" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Position isomerism", statement: "Same functional group attached at a different position on the same carbon skeleton." },
            ],
            steps: [
              { reasoning: "Position isomers share the same functional group and skeleton, differing only in its position.", working: "-\\mathrm{OH} \\text{ on C1 vs C2}", marks: 1, markCode: "M" },
              { reasoning: "Propan-1-ol and propan-2-ol both have formula $\\mathrm{C}_3\\mathrm{H}_8\\mathrm{O}$ and an $-\\mathrm{OH}$ group at different positions.", marks: 1, markCode: "M" },
              { reasoning: "Option (b) is chain isomerism; option (c) is functional-group isomerism; option (d) has different formulae.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Propan-1-ol and propan-2-ol",
            commonErrors: ["Confusing position isomerism with chain or functional-group isomerism."],
          },
        },
        {
          id: "chemsl-u6-organic-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "How many alcohol isomers (compounds containing $-\\mathrm{OH}$) exist with the molecular formula $\\mathrm{C}_4\\mathrm{H}_{10}\\mathrm{O}$?",
          response: {
            type: "numeric",
            parts: [
              { label: "Number of alcohol isomers", answer: 4, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Structural isomerism", statement: "Same molecular formula, different structural formulae." },
            ],
            steps: [
              { reasoning: "The carbon skeletons are butane and 2-methylpropane.", working: "\\mathrm{C}_4 \\text{ skeletons: straight and branched}", marks: 1, markCode: "M" },
              { reasoning: "On butane the $-\\mathrm{OH}$ can be on C1 or C2 (butan-1-ol, butan-2-ol); on 2-methylpropane on the primary or tertiary carbon.", working: "\\text{butan-1-ol, butan-2-ol, 2-methylpropan-1-ol, 2-methylpropan-2-ol}", marks: 1, markCode: "M" },
              { reasoning: "State the count.", working: "4\\ \\text{alcohol isomers}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$ alcohol isomers",
            commonErrors: ["Forgetting 2-methylpropan-2-ol or counting ether isomers as alcohols."],
          },
        },
        {
          id: "chemsl-u6-organic-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Consecutive members of a homologous series differ by a $\\mathrm{CH}_2$ unit. Calculate the difference in molar mass, in g mol$^{-1}$, between consecutive members of the alkane series (relative atomic masses: C = 12, H = 1).",
          response: {
            type: "numeric",
            parts: [
              { label: "Difference in molar mass (g mol$^{-1}$)", answer: 14, tolerance: 0.001, unit: "g mol$^{-1}$" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Homologous series", statement: "Members differ by $\\mathrm{CH}_2$ units." },
            ],
            steps: [
              { reasoning: "A $\\mathrm{CH}_2$ unit has mass $12 + 2 \\times 1$.", working: "12 + 2 = 14", marks: 1, markCode: "M" },
              { reasoning: "State the difference with units.", working: "\\Delta M = 14\\ \\text{g mol}^{-1}", marks: 1, markCode: "M" },
              { reasoning: "This regular increase is a characteristic feature of homologous series.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$14$ g mol$^{-1}$",
            commonErrors: ["Using $\\mathrm{CH}$ or $\\mathrm{CH}_3$ instead of $\\mathrm{CH}_2$."],
          },
        },
        {
          id: "chemsl-u6-organic-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Consider the compound ethanoic acid, $\\mathrm{CH}_3\\mathrm{COOH}$.",
          parts: [
            { label: "a", prompt: "Name the homologous series to which it belongs.", marks: 2 },
            { label: "b", prompt: "Identify its functional group.", marks: 2 },
            { label: "c", prompt: "Name one functional-group isomer of $\\mathrm{C}_2\\mathrm{H}_4\\mathrm{O}_2$ and state its functional group.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Homologous series", statement: "A family of compounds with the same functional group and general formula." },
              { kind: "definition", name: "Functional group", statement: "The atom or group responsible for characteristic reactions." },
            ],
            steps: [
              { part: "a", reasoning: "Ethanoic acid contains a $-\\mathrm{COOH}$ group, so it belongs to the carboxylic acids.", working: "-\\mathrm{COOH} \\Rightarrow \\text{carboxylic acid}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "The functional group is the carboxyl group $-\\mathrm{COOH}$.", working: "-\\mathrm{COOH}", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Methyl methanoate $\\mathrm{HCOOCH}_3$ has formula $\\mathrm{C}_2\\mathrm{H}_4\\mathrm{O}_2$ but an ester group $-\\mathrm{COO}-$ instead of $-\\mathrm{COOH}$.", working: "\\mathrm{HCOOCH}_3:\\ -\\mathrm{COO}^- \\text{ (ester)}", marks: 2, markCode: "M" },
            ],
            finalAnswer: "(a) carboxylic acids (b) $-\\mathrm{COOH}$ (c) e.g. methyl methanoate, an ester ($-\\mathrm{COO}-$)",
            commonErrors: ["Naming the alcohol series instead of carboxylic acids."],
            examinerNote: "Award M1 for identifying $-\\mathrm{COOH}$ in (a) and A1 for the series name; A1 for the functional group in (b); M1 for a correct isomer with formula $\\mathrm{C}_2\\mathrm{H}_4\\mathrm{O}_2$ in (c).",
          },
        },
        {
          id: "chemsl-u6-organic-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A compound has molecular formula $\\mathrm{C}_5\\mathrm{H}_{12}$.",
          parts: [
            { label: "a", prompt: "Name the homologous series and state the general formula.", marks: 2 },
            { label: "b", prompt: "Name the three structural isomers of this formula.", marks: 2 },
            { label: "c", prompt: "Explain what is meant by chain isomerism, giving an example from this formula.", marks: 2 },
            { label: "d", prompt: "State whether any of these isomers can exist as position isomers of each other, justifying your answer.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Alkane", statement: "Saturated hydrocarbon $\\mathrm{C}_n\\mathrm{H}_{2n+2}$ with only single bonds." },
              { kind: "definition", name: "Chain isomerism", statement: "Same molecular formula with a branched carbon chain." },
            ],
            steps: [
              { part: "a", reasoning: "$\\mathrm{C}_5\\mathrm{H}_{12}$ fits $\\mathrm{C}_n\\mathrm{H}_{2n+2}$ with $n = 5$ — it is an alkane.", working: "\\mathrm{C}_5\\mathrm{H}_{12} = \\text{alkane};\\ \\mathrm{C}_n\\mathrm{H}_{2n+2}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "The three isomers are pentane, 2-methylbutane and 2,2-dimethylpropane.", working: "\\text{pentane, 2-methylbutane, 2,2-dimethylpropane}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Chain isomerism means the same molecular formula with a different arrangement of the carbon skeleton — straight vs branched.", working: "\\text{straight vs branched chain}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Pentane and 2-methylbutane are chain isomers.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "No — alkanes have no functional group to place at different positions; only chain isomerism is possible for $\\mathrm{C}_5\\mathrm{H}_{12}$.", working: "\\text{no functional group} \\Rightarrow \\text{no position isomers}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Position isomerism requires a functional group such as $-\\mathrm{OH}$ or a double bond at different positions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) alkanes, $\\mathrm{C}_n\\mathrm{H}_{2n+2}$ (b) pentane, 2-methylbutane, 2,2-dimethylpropane (c) same formula, different carbon skeleton — e.g. pentane vs 2-methylbutane (d) no — alkanes have no functional group to show position isomerism",
            commonErrors: ["Listing 2-methylbutane twice under different names.", "Claiming butane skeletons give position isomers."],
            examinerNote: "Award M1 for the series identification and A1 for the general formula in (a); M1 for each correct isomer name in (b); M1 for the definition and A1 for a correct example in (c); M1 for the 'no functional group' argument and A1 for the conclusion in (d).",
          },
        },
      ],
    },
    {
      id: "chemsl-u6-analysis",
      title: "Chromatography and spectroscopy",
      skill: "Use chromatography (Rf values) and basic spectroscopy (mass spectrometry, IR) to separate and identify unknown substances.",
      lesson: {
        sections: [
          {
            heading: "Chromatography",
            body: "Chromatography separates mixtures because components have different **solubility** in the mobile phase and different **adsorption** to the stationary phase. In **thin-layer chromatography (TLC)** and **paper chromatography**, spots move up the plate/paper; the **retention factor** is $R_f = \\frac{\\text{distance moved by spot}}{\\text{distance moved by solvent front}}$, always between $0$ and $1$. **Gas–liquid chromatography (GLC)** separates volatile compounds by their retention times.",
          },
          {
            heading: "Mass spectrometry",
            body: "In **mass spectrometry**, molecules are ionised and fragmented; the detector records the mass-to-charge ratio $m/z$. The **molecular ion peak** ($M^+$) gives the molar mass of the molecule (if present), and the fragmentation pattern helps deduce the structure. For example, ethanol and dimethyl ether both have $M_r = 46$, so the molecular ion alone cannot distinguish them — the fragment peaks can.",
          },
          {
            heading: "Infrared spectroscopy",
            body: "**IR spectroscopy** measures absorption of infrared radiation. Bonds vibrate at characteristic frequencies, so specific bonds absorb at characteristic wavenumbers: O–H (alcohol) gives a broad peak around $3200$–$3600$ cm$^{-1}$; C=O (carbonyl) gives a strong sharp peak around $1700$ cm$^{-1}$; C≡N around $2250$ cm$^{-1}$; C–H around $2850$–$3100$ cm$^{-1}$. Absence of a peak is as informative as its presence — no broad O–H peak means no alcohol or carboxylic acid group.",
          },
        ],
        keyFormulas: [
          { name: "Retention factor", statement: "$R_f = \\dfrac{\\text{distance moved by spot}}{\\text{distance moved by solvent front}}$" },
          { name: "Molecular ion", statement: "$M^+$ peak at $m/z$ equal to the molar mass of the molecule" },
          { name: "IR identification", statement: "O–H $\\approx 3200$–$3600$ cm$^{-1}$; C=O $\\approx 1700$ cm$^{-1}$; C–H $\\approx 2850$–$3100$ cm$^{-1}$" },
        ],
        workedExample: {
          problem: "In a TLC experiment a spot travels $3.6$ cm while the solvent front travels $6.0$ cm. Calculate the $R_f$ value.",
          solution: "$R_f = \\frac{3.6}{6.0} = 0.60$. Since $0 < R_f < 1$, the value is physically reasonable.",
        },
      },
      questions: [
        {
          id: "chemsl-u6-analysis-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "How is the retention factor $R_f$ defined in thin-layer chromatography?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$R_f = \\dfrac{\\text{distance moved by the spot}}{\\text{distance moved by the solvent front}}$" },
              { id: "b", text: "$R_f = \\dfrac{\\text{distance moved by the solvent front}}{\\text{distance moved by the spot}}$" },
              { id: "c", text: "$R_f = \\text{distance moved by the spot} \\times \\text{time}$" },
              { id: "d", text: "$R_f = \\text{mass of the spot} / \\text{mass of the sample}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Retention factor", statement: "Ratio of spot distance to solvent front distance; always between $0$ and $1$." },
            ],
            steps: [
              { reasoning: "The spot can never travel further than the solvent front, so the ratio is spot distance over front distance.", working: "R_f = \\frac{d_{\\text{spot}}}{d_{\\text{front}}}", marks: 1, markCode: "M" },
              { reasoning: "Option (b) inverts the ratio and would give values $>1$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** $R_f = \\dfrac{\\text{distance moved by the spot}}{\\text{distance moved by the solvent front}}$",
            commonErrors: ["Inverting the ratio."],
          },
        },
        {
          id: "chemsl-u6-analysis-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "In a TLC experiment a component travels $3.6$ cm from the baseline while the solvent front travels $6.0$ cm. Calculate the $R_f$ value of the component.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.60$" },
              { id: "b", text: "$1.67$" },
              { id: "c", text: "$0.40$" },
              { id: "d", text: "$2.4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Retention factor", statement: "$R_f = \\frac{d_{\\text{spot}}}{d_{\\text{front}}}$." },
            ],
            steps: [
              { reasoning: "Substitute the distances into the formula.", working: "R_f = \\frac{3.6}{6.0}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "R_f = 0.60", marks: 1, markCode: "A" },
              { reasoning: "Option (b) inverts the ratio; $R_f$ must lie between $0$ and $1$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** $R_f = 0.60$",
            commonErrors: ["Inverting the distances."],
          },
        },
        {
          id: "chemsl-u6-analysis-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "An unknown organic compound shows a strong, broad IR absorption between $3200$ and $3600$ cm$^{-1}$ and a C=O stretch near $1720$ cm$^{-1}$. Which functional group is most likely present?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A carboxylic acid group, $-\\mathrm{COOH}$" },
              { id: "b", text: "An alcohol group only, $-\\mathrm{OH}$" },
              { id: "c", text: "An alkene, C=C" },
              { id: "d", text: "A halogenoalkane, $-\\mathrm{Cl}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "IR spectroscopy", statement: "O–H absorbs broadly around $3200$–$3600$ cm$^{-1}$; C=O absorbs strongly near $1700$ cm$^{-1}$." },
            ],
            steps: [
              { reasoning: "The broad $3200$–$3600$ cm$^{-1}$ peak indicates an O–H bond (alcohol or carboxylic acid).", working: "\\text{broad O–H peak}", marks: 1, markCode: "M" },
              { reasoning: "The C=O stretch near $1720$ cm$^{-1}$ indicates a carbonyl group.", working: "\\text{C=O at } \\approx 1720\\ \\text{cm}^{-1}", marks: 1, markCode: "M" },
              { reasoning: "Only a carboxylic acid contains both O–H and C=O; an alcohol alone has no C=O and an alkene has neither.", working: "-\\mathrm{COOH} = \\text{O–H} + \\text{C=O}", marks: 1, markCode: "R" },
              { reasoning: "Option (a) is the only group consistent with both peaks.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** A carboxylic acid group, $-\\mathrm{COOH}$",
            commonErrors: ["Identifying only the O–H and missing the C=O."],
          },
        },
        {
          id: "chemsl-u6-analysis-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A student analyses an unknown liquid using TLC, mass spectrometry and IR spectroscopy. The TLC plate shows two spots with $R_f$ values $0.45$ and $0.70$. The mass spectrum shows a molecular ion peak at $m/z = 60$ and a base peak at $m/z = 45$. The IR spectrum shows a strong C=O absorption near $1720$ cm$^{-1}$ and no broad O–H peak.",
          parts: [
            { label: "a", prompt: "Explain how TLC separates the components of a mixture.", marks: 2 },
            { label: "b", prompt: "State what the molecular ion peak at $m/z = 60$ tells you about the compound.", marks: 2 },
            { label: "c", prompt: "What does the absence of a broad O–H peak in the IR spectrum rule out?", marks: 2 },
            { label: "d", prompt: "Suggest a possible identity for the compound, consistent with all the data.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Chromatography", statement: "Separation depends on different solubility in the mobile phase and adsorption to the stationary phase." },
              { kind: "principle", name: "Mass spectrometry", statement: "The $M^+$ peak gives the molar mass; fragments give structural information." },
              { kind: "principle", name: "IR spectroscopy", statement: "Characteristic bond vibrations absorb at characteristic wavenumbers." },
            ],
            steps: [
              { part: "a", reasoning: "Components dissolve differently in the solvent and adsorb differently to the stationary phase, so they move at different rates.", working: "\\text{different } R_f \\Rightarrow \\text{separation}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Each component forms a separate spot; the two spots indicate two compounds in the mixture.", working: "\\text{two spots} = \\text{two components}", marks: 1, markCode: "R" },
              { part: "b", reasoning: "The molecular ion peak corresponds to the intact molecule losing one electron.", working: "M^+ \\text{ at } m/z = 60", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It indicates the molar mass of the molecule is approximately $60$ g mol$^{-1}$.", working: "M_r \\approx 60", marks: 1, markCode: "A" },
              { part: "c", reasoning: "No broad O–H peak means there is no alcohol or carboxylic acid group.", working: "\\text{no O–H} \\Rightarrow \\text{no } -\\mathrm{OH} \\text{ or } -\\mathrm{COOH}", marks: 2, markCode: "R" },
              { part: "d", reasoning: "A carbonyl compound of $M_r = 60$ with no O–H: methyl methanoate $\\mathrm{HCOOCH}_3$ has $M_r = 60$, contains a C=O ester group and no O–H bond; loss of $\\mathrm{CH}_3$ gives the $\\mathrm{HCO}_2^+$ fragment at $m/z = 45$.", working: "\\mathrm{HCOOCH}_3:\\ M_r = 60;\\ \\mathrm{HCO}_2^+ = 45", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) different solubility/adsorption gives different $R_f$ values (b) $M_r \\approx 60$ g mol$^{-1}$ (c) rules out alcohol and carboxylic acid groups (d) methyl methanoate $\\mathrm{HCOOCH}_3$ ($M_r = 60$, C=O present, no O–H, $\\mathrm{HCO}_2^+$ fragment at $m/z = 45$)",
            commonErrors: ["Claiming the molecular ion gives the exact mass to the nearest integer rather than approximately $M_r$."],
            examinerNote: "For (d) accept any reasonable carbonyl/ester consistent with $M_r \\approx 60$ and a $\\mathrm{CH}_3\\mathrm{CO}^+$ ($m/z = 43$) or related fragment; the key marks are recognising a carbonyl (C=O present, no O–H) and $M_r \\approx 60$.",
          },
        },
        {
          id: "chemsl-u6-analysis-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What is the possible range of values for a retention factor $R_f$ in chromatography?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Between $0$ and $1$" },
              { id: "b", text: "Between $0$ and $100$" },
              { id: "c", text: "Any positive number greater than $1$" },
              { id: "d", text: "Between $-1$ and $+1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Retention factor", statement: "$R_f = \\frac{d_{\\text{spot}}}{d_{\\text{front}}}$; the spot can never travel further than the solvent front, so $0 \\leq R_f \\leq 1$." },
            ],
            steps: [
              { reasoning: "The spot distance is always less than or equal to the solvent front distance.", working: "d_{\\text{spot}} \\leq d_{\\text{front}}", marks: 1, markCode: "M" },
              { reasoning: "Therefore $R_f$ lies between $0$ and $1$.", working: "0 \\leq R_f \\leq 1", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Between $0$ and $1$",
            commonErrors: ["Thinking $R_f$ can exceed $1$ if the spot moves far."],
          },
        },
        {
          id: "chemsl-u6-analysis-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In mass spectrometry, what information does the molecular ion peak ($M^+$) provide?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The molar mass of the molecule" },
              { id: "b", text: "The identity of every functional group" },
              { id: "c", text: "The colour of the compound" },
              { id: "d", text: "The boiling point of the compound" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Molecular ion peak", statement: "The $M^+$ peak occurs at $m/z$ equal to the molar mass of the intact molecule." },
            ],
            steps: [
              { reasoning: "The molecular ion is the whole molecule that has lost one electron, so its $m/z$ gives the molar mass.", working: "m/z(M^+) = M_r", marks: 1, markCode: "M" },
              { reasoning: "Fragment peaks give structural information, not functional-group identity directly.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** The molar mass of the molecule",
            commonErrors: ["Thinking the molecular ion peak identifies the exact structure."],
          },
        },
        {
          id: "chemsl-u6-analysis-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In an IR spectrum, a broad absorption between approximately $3200$ and $3600$ cm$^{-1}$ is characteristic of which bond?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The O–H bond of an alcohol or carboxylic acid" },
              { id: "b", text: "The C=O bond of a carbonyl group" },
              { id: "c", text: "The C≡N bond of a nitrile" },
              { id: "d", text: "The C–Cl bond of a halogenoalkane" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "IR spectroscopy", statement: "O–H absorbs broadly around $3200$–$3600$ cm$^{-1}$; C=O near $1700$ cm$^{-1}$." },
            ],
            steps: [
              { reasoning: "The broad peak in the $3200$–$3600$ cm$^{-1}$ region is the signature of O–H stretching.", working: "\\text{O–H}: 3200\\text{–}3600\\ \\text{cm}^{-1}", marks: 1, markCode: "M" },
              { reasoning: "C=O absorbs near $1700$ cm$^{-1}$ and C≡N near $2250$ cm$^{-1}$ — different regions.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** The O–H bond",
            commonErrors: ["Confusing the O–H region with the C=O region."],
          },
        },
        {
          id: "chemsl-u6-analysis-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "An IR spectrum shows no absorption near $1700$ cm$^{-1}$. What can be concluded about the compound?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It does not contain a carbonyl group (C=O), such as in an aldehyde, ketone, carboxylic acid or ester" },
              { id: "b", text: "It cannot contain any oxygen atoms" },
              { id: "c", text: "It must be an alkane" },
              { id: "d", text: "It contains an O–H group" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "IR spectroscopy", statement: "The C=O stretch appears near $1700$ cm$^{-1}$; absence of a peak rules out that bond." },
            ],
            steps: [
              { reasoning: "A strong absorption near $1700$ cm$^{-1}$ is characteristic of the C=O stretch.", working: "\\text{C=O} \\approx 1700\\ \\text{cm}^{-1}", marks: 1, markCode: "M" },
              { reasoning: "No peak there means no C=O bond — ruling out aldehydes, ketones, carboxylic acids and esters.", working: "\\text{no C=O peak} \\Rightarrow \\text{no carbonyl}", marks: 1, markCode: "M" },
              { reasoning: "The compound could still contain oxygen in other groups (e.g. alcohol, ether).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** It does not contain a carbonyl group",
            commonErrors: ["Claiming the compound contains no oxygen at all."],
          },
        },
        {
          id: "chemsl-u6-analysis-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "In a TLC experiment a spot travels $4.2$ cm from the baseline while the solvent front travels $7.0$ cm. Calculate the $R_f$ value.",
          response: {
            type: "numeric",
            parts: [
              { label: "$R_f$", answer: 0.6, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Retention factor", statement: "$R_f = \\dfrac{d_{\\text{spot}}}{d_{\\text{front}}}$." },
            ],
            steps: [
              { reasoning: "Substitute the distances into the formula.", working: "R_f = \\frac{4.2}{7.0}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "R_f = 0.60", marks: 1, markCode: "M" },
              { reasoning: "The value lies between $0$ and $1$, as required.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$R_f = 0.60$",
            commonErrors: ["Inverting the ratio to get $1.67$."],
          },
        },
        {
          id: "chemsl-u6-analysis-q10",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "In a paper chromatogram a component travels $1.8$ cm while the solvent front travels $6.0$ cm. Calculate the $R_f$ value.",
          response: {
            type: "numeric",
            parts: [
              { label: "$R_f$", answer: 0.3, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Retention factor", statement: "$R_f = \\dfrac{d_{\\text{spot}}}{d_{\\text{front}}}$." },
            ],
            steps: [
              { reasoning: "Substitute the distances.", working: "R_f = \\frac{1.8}{6.0} = 0.30", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "R_f = 0.30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$R_f = 0.30$",
            commonErrors: ["Using the solvent front distance in the numerator."],
          },
        },
        {
          id: "chemsl-u6-analysis-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A TLC plate is developed until the solvent front has travelled $6.0$ cm. Two spots are found $3.0$ cm and $4.5$ cm from the baseline.",
          response: {
            type: "numeric",
            parts: [
              { label: "$R_f$ of spot 1", answer: 0.5, tolerance: 0.005 },
              { label: "$R_f$ of spot 2", answer: 0.75, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Retention factor", statement: "$R_f = \\dfrac{d_{\\text{spot}}}{d_{\\text{front}}}$." },
            ],
            steps: [
              { reasoning: "For spot 1, divide its distance by the solvent front distance.", working: "R_f = \\frac{3.0}{6.0}", marks: 1, markCode: "M" },
              { reasoning: "For spot 2, do the same.", working: "R_f = \\frac{4.5}{6.0}", marks: 1, markCode: "M" },
              { reasoning: "State both values.", working: "R_f = 0.50 \\text{ and } 0.75", marks: 1, markCode: "A" },
              { reasoning: "Both values lie between $0$ and $1$, confirming the calculation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$R_f = 0.50$ and $0.75$",
            commonErrors: ["Using different solvent front distances for each spot."],
          },
        },
        {
          id: "chemsl-u6-analysis-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Which technique separates volatile compounds according to their different retention times?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gas–liquid chromatography (GLC)" },
              { id: "b", text: "Thin-layer chromatography only" },
              { id: "c", text: "Filtration" },
              { id: "d", text: "Simple distillation of a single compound" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gas–liquid chromatography", statement: "Separates volatile compounds as they travel through a column at different speeds, giving different retention times." },
            ],
            steps: [
              { reasoning: "GLC separates volatile compounds by their different retention times in the column.", working: "\\text{GLC: different retention times}", marks: 1, markCode: "M" },
              { reasoning: "TLC separates by $R_f$ values on a plate, not retention time; filtration separates by particle size.", marks: 1, markCode: "M" },
              { reasoning: "Only option (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Gas–liquid chromatography (GLC)",
            commonErrors: ["Confusing TLC $R_f$ separation with GLC retention times."],
          },
        },
        {
          id: "chemsl-u6-analysis-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "In the mass spectrum of ethanoic acid, a fragment peak appears at $m/z = 43$. Which fragment ion is this most likely to be? (Relative atomic masses: C = 12, H = 1, O = 16.)",
          response: {
            type: "numeric",
            parts: [
              { label: "$m/z$ of $\\mathrm{CH}_3\\mathrm{CO}^+$", answer: 43, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mass spectrometry fragments", statement: "Fragment peaks correspond to pieces of the molecule; $m/z$ equals the fragment's mass (charge $+1$)." },
            ],
            steps: [
              { reasoning: "The fragment $\\mathrm{CH}_3\\mathrm{CO}^+$ has mass $12 + 3 \\times 1 + 12 + 16$.", working: "12 + 3 + 12 + 16 = 43", marks: 1, markCode: "M" },
              { reasoning: "With charge $+1$, $m/z = 43$.", working: "m/z = 43", marks: 1, markCode: "M" },
              { reasoning: "State the value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$m/z = 43$ ($\\mathrm{CH}_3\\mathrm{CO}^+$)",
            commonErrors: ["Including the oxygen twice or forgetting the charge is $+1$."],
          },
        },
        {
          id: "chemsl-u6-analysis-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "In a chromatogram the solvent front travels $4.5$ cm and an unknown component travels $0.90$ cm. Calculate the $R_f$ value of the component.",
          response: {
            type: "numeric",
            parts: [
              { label: "$R_f$", answer: 0.2, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Retention factor", statement: "$R_f = \\dfrac{d_{\\text{spot}}}{d_{\\text{front}}}$." },
            ],
            steps: [
              { reasoning: "Substitute the distances.", working: "R_f = \\frac{0.90}{4.5}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "R_f = 0.20", marks: 1, markCode: "M" },
              { reasoning: "The value lies between $0$ and $1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$R_f = 0.20$",
            commonErrors: ["Multiplying instead of dividing."],
          },
        },
        {
          id: "chemsl-u6-analysis-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "A student uses mass spectrometry and IR spectroscopy to identify an unknown organic compound.",
          parts: [
            { label: "a", prompt: "Explain how mass spectrometry produces a spectrum and what the molecular ion peak tells you.", marks: 3 },
            { label: "b", prompt: "Explain what a broad IR absorption near $3400$ cm$^{-1}$ indicates about the compound.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mass spectrometry", statement: "Molecules are ionised and fragmented; the detector records $m/z$ of each ion." },
              { kind: "definition", name: "IR spectroscopy", statement: "Bonds absorb IR at characteristic wavenumbers; O–H absorbs broadly around $3200$–$3600$ cm$^{-1}$." },
            ],
            steps: [
              { part: "a", reasoning: "The sample is ionised (often by electron impact), producing a molecular ion and fragments.", working: "M \\rightarrow M^+ + e^-", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The ions are accelerated and separated by mass-to-charge ratio; the detector records the abundance at each $m/z$.", working: "m/z \\text{ separation}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The molecular ion peak $M^+$ gives the molar mass of the molecule.", working: "m/z(M^+) = M_r", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A broad absorption near $3400$ cm$^{-1}$ lies in the O–H stretching region.", working: "\\text{broad peak} \\approx 3400\\ \\text{cm}^{-1}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It indicates the presence of an O–H bond — an alcohol or carboxylic acid group.", working: "\\text{O–H present}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The broadness comes from hydrogen bonding in the O–H group.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) ionisation and fragmentation; detector records $m/z$; $M^+$ peak gives $M_r$ (b) broad peak near $3400$ cm$^{-1}$ indicates an O–H bond (alcohol or carboxylic acid)",
            commonErrors: ["Claiming the molecular ion peak identifies the structure directly."],
            examinerNote: "Award M1 for each correct stage of the MS process in (a) and A1 for the $M_r$ conclusion; M1 for identifying the O–H region and A1 for the group identification in (b).",
          },
        },
        {
          id: "chemsl-u6-analysis-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "An unknown liquid gives the following data: TLC shows a single spot with $R_f = 0.55$; the mass spectrum shows a molecular ion peak at $m/z = 46$ and a base peak at $m/z = 31$; the IR spectrum shows a C–H absorption around $2900$ cm$^{-1}$ and a C–O absorption near $1050$ cm$^{-1}$, but no O–H peak and no C=O peak.",
          parts: [
            { label: "a", prompt: "State what the single TLC spot tells you about the sample.", marks: 2 },
            { label: "b", prompt: "State what the molecular ion peak at $m/z = 46$ indicates.", marks: 2 },
            { label: "c", prompt: "What do the IR data rule out?", marks: 2 },
            { label: "d", prompt: "Suggest a possible identity for the compound, consistent with all the data.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Chromatography", statement: "One spot means one component; $R_f$ is characteristic under fixed conditions." },
              { kind: "principle", name: "Mass spectrometry", statement: "The $M^+$ peak gives the molar mass; fragments give structural clues." },
              { kind: "principle", name: "IR spectroscopy", statement: "Characteristic bond vibrations absorb at characteristic wavenumbers; absence of peaks rules out groups." },
            ],
            steps: [
              { part: "a", reasoning: "A single spot means the sample is a pure compound (or a single component), not a mixture.", working: "\\text{one spot} \\Rightarrow \\text{pure}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "The molecular ion peak corresponds to the intact molecule losing one electron.", working: "M^+ \\text{ at } m/z = 46", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It indicates a molar mass of approximately $46$ g mol$^{-1}$.", working: "M_r \\approx 46", marks: 1, markCode: "A" },
              { part: "c", reasoning: "No O–H peak rules out alcohols and carboxylic acids; no C=O peak rules out carbonyl compounds (aldehydes, ketones, esters, acids).", working: "\\text{no O–H, no C=O}", marks: 2, markCode: "M" },
              { part: "d", reasoning: "An ether of $M_r = 46$: dimethyl ether $\\mathrm{CH}_3\\mathrm{OCH}_3$ has $M_r = 46$, contains C–O and C–H bonds, no O–H and no C=O; loss of $\\mathrm{CH}_3$ gives $\\mathrm{CH}_3\\mathrm{O}^+$ at $m/z = 31$.", working: "\\mathrm{CH}_3\\mathrm{OCH}_3:\\ M_r = 46;\\ \\mathrm{CH}_3\\mathrm{O}^+ = 31", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) pure single component (b) $M_r \\approx 46$ g mol$^{-1}$ (c) rules out alcohols, carboxylic acids and carbonyl compounds (d) dimethyl ether $\\mathrm{CH}_3\\mathrm{OCH}_3$",
            commonErrors: ["Suggesting ethanol, which has an O–H peak and would show $M^+$ at $m/z = 46$ but a different IR."],
            examinerNote: "Award M1 for the purity conclusion in (a); M1 for the molecular-ion explanation and A1 for $M_r \\approx 46$ in (b); M1 for each group ruled out in (c); M1 for recognising an ether/oxygen-containing $M_r = 46$ compound and A1 for a consistent identity in (d).",
          },
        },
      ],
    },
  ],
};
