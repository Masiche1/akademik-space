import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "mypc4-u3-lesson-3-2",
  code: "3-2",
  title: "Organic Chemistry: Hydrocarbons and Fuels",
  goal: "I CAN describe hydrocarbons, distinguish saturated/unsaturated compounds, and explain combustion of fuels.",
  standards: [
    "MYP Sciences: Matter",
    "Key concept: Systems",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Hydrocarbon", definition: "Compound of only carbon and hydrogen; e.g. CH₄, C₂H₆, C₃H₈." },
    { term: "Alkane", definition: "Saturated hydrocarbon with single C-C bonds only; formula CnH2n+2." },
    { term: "Alkene", definition: "Unsaturated hydrocarbon with at least one C=C double bond; formula CnH2n." },
    { term: "Saturated", definition: "All carbon bonds single; maximum hydrogens; doesn't decolorise bromine water." },
    { term: "Unsaturated", definition: "Contains C=C or C≡C; decolorises bromine water (addition reaction)." },
    { term: "Cracking", definition: "Breaking large hydrocarbons into smaller ones using heat/catalyst; produces alkenes." },
  ],
  concepts: [
    {
      id: "mypc4-u3-hydrocarbons",
      title: "Hydrocarbons: alkanes and alkenes",
      skill: "Distinguish saturated and unsaturated hydrocarbons using formulas and tests.",
      lesson: {
        sections: [
          {
            heading: "Alkanes (saturated)",
            body: "General formula **CnH₂n+2**: methane CH₄, ethane C₂H₆, propane C₃H₈, butane C₄H₁₀. Only single C-C bonds → saturated. Combust completely → CO₂ + H₂O. Test: no reaction with bromine water.",
          },
          {
            heading: "Alkenes (unsaturated)",
            body: "General formula **CnH₂n**: ethene C₂H₄, propene C₃H₆. At least one C=C double bond → unsaturated. Test: **decolorise bromine water** (orange→colorless) via addition reaction. Can undergo addition reactions (e.g. +Br₂, +H₂, +H₂O).",
          },
          {
            heading: "Naming and structure",
            body: "Prefix = carbon count (meth-=1, eth-=2, prop-=3, but-=4); suffix -ane (alkane) or -ene (alkene). Structural formulae show bonds: ethane CH₃-CH₃, ethene CH₂=CH₂.",
          },
        ],
        keyFormulas: [
          { name: "Alkane", statement: "CnH₂n+2; single bonds; saturated" },
          { name: "Alkene", statement: "CnH₂n; C=C bond; unsaturated" },
          { name: "Bromine test", statement: "Alkene decolorises Br₂ water; alkane doesn't" },
        ],
        workedExample: {
          problem: "A gas decolorises bromine water. Is it an alkane or alkene?",
          solution: "Alkene — C=C bond adds Br₂, decolorising orange bromine water.",
        },
      },
      questions: [
        {
          id: "mypc4-u3-hc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the general formula of alkanes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CnHn" },
              { id: "b", text: "CnH₂n-2" },
              { id: "c", text: "CnH₂n+2" },
              { id: "d", text: "CnH₂n" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Alkane formula", statement: "CnH₂n+2 — saturated single bonds." },
            ],
            steps: [
              { reasoning: "Alkanes have formula CnH₂n+2.", working: "C_nH_{2n+2}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** CnH₂n+2",
            commonErrors: ["Confusing with alkene CnH₂n."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u3-hc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How can you distinguish ethene from ethane?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are identical" },
              { id: "b", text: "Ethane is a gas" },
              { id: "c", text: "Ethene decolorises bromine water; ethane doesn't" },
              { id: "d", text: "Ethene is heavier" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Bromine test", statement: "Alkene C=C adds Br₂ → decolorises; alkane no reaction." },
            ],
            steps: [
              { reasoning: "Ethene (alkene) reacts with Br₂ → colorless.", working: "\\text{ethene}", marks: 1, markCode: "M" },
              { reasoning: "Ethane (alkane) no reaction.", working: "\\text{ethane}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bromine water test",
            commonErrors: ["Using litmus instead of bromine water."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-hc-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain what 'unsaturated' means for a hydrocarbon.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is always a gas" },
              { id: "b", text: "Contains at least one C=C or C≡C double/triple bond — can add more atoms" },
              { id: "c", text: "Cannot burn" },
              { id: "d", text: "Has no hydrogens" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Unsaturation", statement: "C=C/C≡C allows addition reactions." },
            ],
            steps: [
              { reasoning: "Unsaturated = has double/triple bonds.", working: "C=C", marks: 1, markCode: "M" },
              { reasoning: "Can undergo addition of atoms across bond.", working: "\\text{addition}", marks: 1, markCode: "M" },
              { reasoning: "State meaning.", working: "\\text{unsaturated}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Has C=C/C≡C bonds",
            commonErrors: ["Saying unsaturated means no hydrogen."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u3-hc-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Crude oil is separated by fractional distillation.",
          parts: [
            { label: "a", prompt: "Name the fractions from top to bottom.", marks: 2 },
            { label: "b", prompt: "Explain why fractions separate by boiling point.", marks: 2 },
            { label: "c", prompt: "Explain why cracking is used.", marks: 2 },
            { label: "d", prompt: "Write equation for complete combustion of methane.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Petroleum", statement: "Fractions by size/boiling point; cracking makes useful products." },
            ],
            steps: [
              { part: "a", reasoning: "Refinery gas, petrol, kerosene, diesel, fuel oil, bitumen.", working: "\\text{fractions}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct order top→bottom.", working: "\\text{order}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Smaller molecules have lower boiling points.", working: "\\text{low bp}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "They condense higher in the fractionating column.", working: "\\text{condense high}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Cracking breaks large hydrocarbon molecules into smaller ones.", working: "\\text{C-C break}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Produces more useful fuels and alkenes for plastics.", working: "\\text{useful}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "CH₄ + 2O₂ → CO₂ + 2H₂O.", working: "CH_4+2O_2\\to CO_2+2H_2O", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Balanced correctly.", working: "\\text{balanced}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) gas,petrol,kerosene,diesel,fuel oil,bitumen (b) boiling point separation (c) large→small useful (d) CH₄+2O₂→CO₂+2H₂O",
            commonErrors: ["In (d), forgetting water coefficient 2."],
            examinerNote: "M1 A1 for (a),(b); M1 A1 for (c); M1 A1 for (d).",
          },
        },
        {
          id: "mypc4-u3-hc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The general formula of alkenes is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CnH₂n" },
              { id: "b", text: "CnHn" },
              { id: "c", text: "CnH₂n−2" },
              { id: "d", text: "CnH₂n+2" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Alkene formula", statement: "CnH₂n — contains at least one C=C." },
            ],
            steps: [
              { reasoning: "Alkenes have formula CnH₂n.", working: "C_nH_{2n}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** CnH₂n",
            commonErrors: ["Choosing alkane formula."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u3-hc-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the molecular formula of butane?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "C₄H₆" },
              { id: "b", text: "C₄H₁₀" },
              { id: "c", text: "C₄H₈" },
              { id: "d", text: "C₃H₈" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Alkane formula", statement: "CnH₂n+2; butane n=4 → C₄H₁₀." },
            ],
            steps: [
              { reasoning: "But- = 4 carbons; alkane H = 2n+2 = 10.", working: "C_4H_{10}", marks: 1, markCode: "M" },
              { reasoning: "State formula.", working: "\\text{C}_4\\text{H}_{10}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "C₄H₁₀",
            commonErrors: ["Using alkene formula C₄H₈."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-hc-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many carbon atoms are in one molecule of propane?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Naming", statement: "Prop- prefix = 3 carbon atoms." },
            ],
            steps: [
              { reasoning: "Propane = C₃H₈ → 3 carbons.", working: "C_3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 8 (H count)."],
            examinerNote: "B1 for 3.",
          },
        },
        {
          id: "mypc4-u3-hc-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "An alkene has the formula CnH₂n. If n = 4, what is the molecular formula?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Alkene formula", statement: "CnH₂n; n=4 → C₄H₈." },
            ],
            steps: [
              { reasoning: "H count = 2n = 8; C count = 4 → C₄H₈.", working: "C_4H_8", marks: 1, markCode: "M" },
              { reasoning: "State hydrogen count answer 8.", working: "8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "C₄H₈ (8 H atoms)",
            commonErrors: ["Using alkane formula → C₄H₁₀."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-hc-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "What happens when an alkene is shaken with bromine water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No change occurs" },
              { id: "b", text: "A precipitate forms" },
              { id: "c", text: "The orange bromine water is decolorised" },
              { id: "d", text: "It turns blue" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Bromine test", statement: "Alkene C=C adds Br₂ → orange → colourless." },
            ],
            steps: [
              { reasoning: "C=C bond undergoes addition with Br₂.", working: "C=C+Br_2", marks: 1, markCode: "M" },
              { reasoning: "Bromine colour disappears.", working: "\\text{decolourise}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Decolorises bromine water",
            commonErrors: ["Saying no reaction — that's alkanes."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-hc-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Ethene (C₂H₄) has one C=C double bond and four C-H single bonds. How many shared electron pairs does the molecule contain in total?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Bond counting", statement: "C=C = 2 shared pairs; each C-H = 1 pair." },
            ],
            steps: [
              { reasoning: "C=C double bond = 2 shared pairs; 4 C-H bonds = 4 pairs.", working: "2+4=6", marks: 1, markCode: "M" },
              { reasoning: "Total = 6 shared pairs (12 bonding electrons = valence electrons).", working: "\\text{6 pairs}", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6",
            commonErrors: ["Counting C=C as 1 pair instead of 2."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u3-hc-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why is ethene described as 'unsaturated'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It cannot burn" },
              { id: "b", text: "It has no carbon atoms" },
              { id: "c", text: "It is a gas" },
              { id: "d", text: "It contains a C=C double bond that can undergo addition reactions" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Unsaturated", statement: "C=C/C≡C bonds allow addition of atoms." },
            ],
            steps: [
              { reasoning: "Ethene has C=C double bond.", working: "C=C", marks: 1, markCode: "M" },
              { reasoning: "Double bond can open for addition reactions.", working: "\\text{addition}", marks: 1, markCode: "M" },
              { reasoning: "State meaning.", working: "\\text{unsaturated}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Has C=C bond → can add atoms",
            commonErrors: ["Saying unsaturated means no hydrogen."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u3-hc-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For C₃H₈ + 5O₂ → 3CO₂ + 4H₂O, how many moles of O₂ are needed to burn 2 mol of propane?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10, unit: "mol" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Stoichiometry", statement: "1 C₃H₈ : 5 O₂ ratio." },
            ],
            steps: [
              { reasoning: "2 × 5 = 10 mol O₂.", working: "2\\times5=10", marks: 1, markCode: "M" },
              { reasoning: "Apply ratio.", working: "\\text{5:1}", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "10\\text{ mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10 mol",
            commonErrors: ["Answering 2."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u3-hc-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many hydrogen atoms are in one molecule of methane (CH₄)?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Formula", statement: "CH₄ has 4 H atoms." },
            ],
            steps: [
              { reasoning: "CH₄ → 4 hydrogen atoms.", working: "4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4",
            commonErrors: ["Answering 1."],
            examinerNote: "B1 for 4.",
          },
        },
        {
          id: "mypc4-u3-hc-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "An alkane has formula CnH₂n+2. For n = 5, how many hydrogen atoms does it have?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 12 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Alkane formula", statement: "CnH₂n+2; n=5 → H = 12." },
            ],
            steps: [
              { reasoning: "H = 2(5)+2 = 12.", working: "12", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12",
            commonErrors: ["Using 2n = 10 (forgetting +2)."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-hc-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Alkanes and alkenes.",
          parts: [
            { label: "a", prompt: "Define 'saturated' for a hydrocarbon.", marks: 1 },
            { label: "b", prompt: "Compare the general formulas of alkanes and alkenes.", marks: 2 },
            { label: "c", prompt: "Describe the bromine water test for unsaturation.", marks: 2 },
            { label: "d", prompt: "Name the compound C₃H₆.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hydrocarbons", statement: "Alkane CnH₂n+2 saturated; alkene CnH₂n unsaturated." },
            ],
            steps: [
              { part: "a", reasoning: "Only single C-C bonds; maximum hydrogens.", working: "\\text{saturated}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Alkane CnH₂n+2; alkene CnH₂n.", working: "\\text{formulas}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Alkene has 2 fewer H per C due to C=C.", working: "\\text{compare}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Shake with bromine water; alkene decolorises it.", working: "\\text{Br}_2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Orange → colourless = positive test.", working: "\\text{result}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Propene (C₃H₆, alkene).", working: "\\text{propene}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) single bonds only (b) CnH₂n+2 vs CnH₂n (c) Br₂ decolourised (d) propene",
            commonErrors: ["In (d), calling it propane."],
            examinerNote: "A1 for (a), M1 A1 for (b), M1 A1 for (c), A1 for (d).",
          },
        },
        {
          id: "mypc4-u3-hc-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Four hydrocarbons: methane CH₄, ethene C₂H₄, propane C₃H₈, butene C₄H₈.",
          parts: [
            { label: "a", prompt: "Classify each as alkane or alkene.", marks: 4 },
            { label: "b", prompt: "Predict which decolorise bromine water.", marks: 2 },
            { label: "c", prompt: "Write the balanced equation for complete combustion of ethene.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Hydrocarbon classification", statement: "CnH₂n+2=alkane; CnH₂n=alkene; Br₂ test distinguishes." },
            ],
            steps: [
              { part: "a", reasoning: "CH₄, C₃H₈ alkanes; C₂H₄, C₄H₈ alkenes.", working: "\\text{4 answers}", marks: 2, markCode: "M" },
              { part: "a", reasoning: "All four correct.", working: "\\text{correct}", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Only alkenes (C₂H₄, C₄H₈) decolorise bromine water.", working: "\\text{alkenes}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct prediction.", working: "\\text{2 of 4}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "C₂H₄ + 3O₂ → 2CO₂ + 2H₂O.", working: "C_2H_4+3O_2\\to2CO_2+2H_2O", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Balanced correctly.", working: "\\text{balanced}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) alkanes CH₄,C₃H₈; alkenes C₂H₄,C₄H₈ (b) the two alkenes (c) C₂H₄+3O₂→2CO₂+2H₂O",
            commonErrors: ["In (a), misclassifying butene."],
            examinerNote: "M2 A2 for (a), M1 A1 for (b), M1 A1 for (c).",
          },
        },
      ],
    },
    {
      id: "mypc4-u3-fuels",
      title: "Fuels and Combustion",
      skill: "Describe fuel combustion, compare fuels, and explain environmental impacts.",
      lesson: {
        sections: [
          {
            heading: "Combustion of fuels",
            body: "Complete combustion (enough O₂): hydrocarbon + O₂ → CO₂ + H₂O + energy. Incomplete combustion (limited O₂): → CO + H₂O or soot (C). Methane: CH₄ + 2O₂ → CO₂ + 2H₂O. Releases energy for heating/transport.",
          },
          {
            heading: "Comparing fuels",
            body: "Natural gas (methane): clean, efficient. Petrol/diesel: liquid, transportable, but polluting. Coal: cheap but dirty (SO₂, CO₂). Hydrogen: clean (only H₂O product) but hard to store/produce.",
          },
          {
            heading: "Environmental impact",
            body: "CO₂ → greenhouse effect/global warming. SO₂ → acid rain. CO → toxic, incomplete combustion. Particulates → smog/respiratory. Catalytic converters reduce CO/NOx in cars.",
          },
        ],
        keyFormulas: [
          { name: "Complete", statement: "Hydrocarbon + O₂ → CO₂ + H₂O + energy" },
          { name: "Incomplete", statement: "Limited O₂ → CO or C (soot)" },
          { name: "Impacts", statement: "CO₂ warming, SO₂ acid rain, CO toxic" },
        ],
        workedExample: {
          problem: "Why does a gas stove flame turn yellow sometimes?",
          solution: "Incomplete combustion → soot particles glow yellow; complete combustion = blue flame.",
        },
      },
      questions: [
        {
          id: "mypc4-u3-fuel-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the products of complete combustion of a hydrocarbon?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Soot and water" },
              { id: "b", text: "Carbon dioxide and water" },
              { id: "c", text: "Carbon monoxide and water" },
              { id: "d", text: "Oxygen and nitrogen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Complete combustion", statement: "Sufficient O₂ → CO₂ + H₂O only." },
            ],
            steps: [
              { reasoning: "Complete combustion gives CO₂ + H₂O.", working: "CO_2+H_2O", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** CO₂ and water",
            commonErrors: ["Including CO — that's incomplete."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u3-fuel-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is natural gas considered cleaner than coal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gas is free" },
              { id: "b", text: "Methane combustion produces only CO₂ and water; coal produces SO₂, particulates and more CO₂" },
              { id: "c", text: "Gas produces no energy" },
              { id: "d", text: "Coal doesn't burn" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fuel comparison", statement: "Gas = fewer pollutants than coal." },
            ],
            steps: [
              { reasoning: "CH₄ → CO₂ + H₂O only; no sulfur/particulates.", working: "\\text{cleaner}", marks: 1, markCode: "M" },
              { reasoning: "Coal has impurities → SO₂, soot.", working: "\\text{coal dirty}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gas produces fewer pollutants",
            commonErrors: ["Saying gas produces no CO₂."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-fuel-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A car engine produces carbon monoxide. Explain why this is dangerous and how it forms.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Incomplete combustion (limited O₂) produces CO which binds hemoglobin preventing oxygen transport" },
              { id: "b", text: "CO only forms at high altitude" },
              { id: "c", text: "CO is produced by complete combustion" },
              { id: "d", text: "CO is harmless" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "CO hazard", statement: "Incomplete combustion → toxic CO binds hemoglobin." },
            ],
            steps: [
              { reasoning: "Limited O₂ → incomplete combustion → CO.", working: "\\text{incomplete}", marks: 1, markCode: "M" },
              { reasoning: "CO binds hemoglobin → prevents O₂ transport.", working: "\\text{hemoglobin}", marks: 1, markCode: "M" },
              { reasoning: "State danger.", working: "\\text{toxic}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Incomplete combustion → toxic CO",
            commonErrors: ["Saying CO is from complete combustion."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u3-fuel-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate fuels for domestic heating: natural gas vs coal.",
          parts: [
            { label: "a", prompt: "Compare environmental impact of gas vs coal.", marks: 2 },
            { label: "b", prompt: "Explain acid rain formation from coal.", marks: 2 },
            { label: "c", prompt: "Suggest why natural gas is preferred despite higher cost.", marks: 2 },
            { label: "d", prompt: "Mention one renewable alternative.", marks: 1 },
            { label: "e", prompt: "Write the equation for complete combustion of methane.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fuel evaluation", statement: "Compare pollutants, efficiency, cost, renewability." },
            ],
            steps: [
              { part: "a", reasoning: "Gas produces fewer pollutants (no SO₂/soot); coal dirtier; both emit CO₂.", working: "\\text{comparison}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the comparison.", working: "\\text{cleaner}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Coal contains sulfur → SO₂ released on burning.", working: "SO_2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "SO₂ + water → sulfuric acid → acid rain.", working: "\\text{acid rain}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Cleaner, more efficient, less maintenance; health benefits outweigh cost.", working: "\\text{benefits}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State reason.", working: "\\text{preferred}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Solar, wind, biomass, geothermal (any renewable).", working: "\\text{renewable}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "CH₄ + 2O₂ → CO₂ + 2H₂O.", working: "CH_4+2O_2\\to CO_2+2H_2O", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) gas cleaner, coal dirtier (b) S→SO₂→acid rain (c) efficiency+health (d) solar/wind (e) CH₄+2O₂→CO₂+2H₂O",
            commonErrors: ["In (b), saying CO₂ causes acid rain — it's SO₂."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), A1 for (d), M1 for (e).",
          },
        },
        {
          id: "mypc4-u3-fuel-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Incomplete combustion of a hydrocarbon produces...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen" },
              { id: "b", text: "Nitrogen" },
              { id: "c", text: "Only carbon dioxide and water" },
              { id: "d", text: "Carbon monoxide and/or soot" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Incomplete combustion", statement: "Limited O₂ → CO or C (soot) instead of CO₂." },
            ],
            steps: [
              { reasoning: "Limited oxygen → CO or soot formed.", working: "CO/C", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** CO and/or soot",
            commonErrors: ["Listing CO₂ as product of incomplete combustion."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u3-fuel-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A blue flame on a gas stove indicates...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The gas is burning slowly" },
              { id: "b", text: "Incomplete combustion" },
              { id: "c", text: "Sulfur is present" },
              { id: "d", text: "Complete combustion with sufficient oxygen" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Flame colour", statement: "Blue = complete combustion; yellow = incomplete (soot)." },
            ],
            steps: [
              { reasoning: "Blue flame = enough O₂ → complete combustion.", working: "\\text{blue}", marks: 1, markCode: "M" },
              { reasoning: "State meaning.", working: "\\text{complete}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Complete combustion",
            commonErrors: ["Associating blue with incomplete."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-fuel-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For CH₄ + 2O₂ → CO₂ + 2H₂O, how many moles of O₂ react with 1 mol of methane?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2, unit: "mol" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Mole ratio", statement: "1 CH₄ : 2 O₂." },
            ],
            steps: [
              { reasoning: "Coefficient 2 on O₂ → 2 mol.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2 mol",
            commonErrors: ["Answering 1."],
            examinerNote: "B1 for 2 mol.",
          },
        },
        {
          id: "mypc4-u3-fuel-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "In the equation C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O, how many moles of O₂ are needed for 0.50 mol of ethanol?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1.5, unit: "mol" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Mole ratio", statement: "1 ethanol : 3 O₂." },
            ],
            steps: [
              { reasoning: "0.50 × 3 = 1.5 mol O₂.", working: "1.5", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "1.5\\text{ mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.5 mol",
            commonErrors: ["Answering 0.50."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-fuel-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A catalytic converter in a car reduces emissions of...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen" },
              { id: "b", text: "Carbon monoxide and nitrogen oxides" },
              { id: "c", text: "Carbon dioxide only" },
              { id: "d", text: "Water vapour" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Catalytic converter", statement: "Converts CO → CO₂ and NOx → N₂." },
            ],
            steps: [
              { reasoning: "Converter reduces toxic CO and NOx.", working: "CO,NO_x", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "\\text{CO,NOx}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "CO and NOx",
            commonErrors: ["Saying it removes CO₂."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-fuel-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Sulfur dioxide released from burning coal forms acid rain via which reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "SO₂ + O₂ → SO₃ only, no acid" },
              { id: "b", text: "No reaction occurs" },
              { id: "c", text: "CO₂ causes acid rain" },
              { id: "d", text: "SO₂ + H₂O → sulfurous/sulfuric acid" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Acid rain", statement: "SO₂ dissolves in water → acid; CO₂ is not the main cause." },
            ],
            steps: [
              { reasoning: "SO₂ + water → acid (then oxidised to sulfuric acid).", working: "SO_2+H_2O", marks: 1, markCode: "M" },
              { reasoning: "State process.", working: "\\text{acid rain}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "SO₂ + H₂O → acid",
            commonErrors: ["Blaming CO₂ for acid rain."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-fuel-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why is carbon monoxide dangerous in a closed room with a faulty heater?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CO dissolves in walls" },
              { id: "b", text: "CO is harmless" },
              { id: "c", text: "CO makes the flame brighter" },
              { id: "d", text: "CO is produced by incomplete combustion and binds hemoglobin, preventing oxygen transport" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "CO hazard", statement: "Incomplete combustion → CO binds hemoglobin → oxygen deprivation." },
            ],
            steps: [
              { reasoning: "Limited O₂ → incomplete combustion → CO.", working: "\\text{incomplete}", marks: 1, markCode: "M" },
              { reasoning: "CO binds hemoglobin → blocks O₂ transport.", working: "\\text{hemoglobin}", marks: 1, markCode: "M" },
              { reasoning: "State danger.", working: "\\text{toxic}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Toxic CO blocks oxygen transport",
            commonErrors: ["Saying CO comes from complete combustion."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u3-fuel-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "If 2.0 mol of SO₂ reacts with water to form sulfurous acid (SO₂ + H₂O → H₂SO₃), how many moles of acid are formed?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2.0, unit: "mol" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Stoichiometry", statement: "1:1 ratio SO₂:H₂SO₃." },
            ],
            steps: [
              { reasoning: "Ratio 1:1 → 2.0 mol H₂SO₃.", working: "2.0", marks: 1, markCode: "M" },
              { reasoning: "Apply ratio.", working: "\\text{1:1}", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "2.0\\text{ mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2.0 mol",
            commonErrors: ["Answering 4.0."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u3-fuel-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Complete combustion of a hydrocarbon produces how many different products?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Complete combustion", statement: "CO₂ + H₂O = 2 products." },
            ],
            steps: [
              { reasoning: "CO₂ and H₂O = 2 products.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting oxygen."],
            examinerNote: "B1 for 2.",
          },
        },
        {
          id: "mypc4-u3-fuel-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Of these energy sources — coal, natural gas, solar, oil — how many are fossil fuels?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fossil fuels", statement: "Coal, natural gas and oil are fossil; solar is renewable." },
            ],
            steps: [
              { reasoning: "Coal, gas, oil = 3 fossil fuels; solar is not.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
            commonErrors: ["Including solar."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u3-fuel-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Combustion of fuels.",
          parts: [
            { label: "a", prompt: "State the products of complete and incomplete combustion of methane.", marks: 2 },
            { label: "b", prompt: "Explain why a yellow flame indicates a problem.", marks: 2 },
            { label: "c", prompt: "State one environmental impact of CO₂ emissions.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Combustion", statement: "Complete → CO₂+H₂O; incomplete → CO/soot." },
            ],
            steps: [
              { part: "a", reasoning: "Complete: CO₂ + H₂O; incomplete: CO or C (soot).", working: "\\text{products}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both stated correctly.", working: "\\text{both}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Yellow = soot particles glow; indicates incomplete combustion.", working: "\\text{yellow}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Problem = CO/soot produced (wasteful, polluting).", working: "\\text{incomplete}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Greenhouse effect / global warming.", working: "\\text{CO}_2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Impact explained.", working: "\\text{warming}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) complete CO₂+H₂O, incomplete CO/soot (b) incomplete combustion (c) greenhouse effect",
            commonErrors: ["In (b), thinking yellow means more energy."],
            examinerNote: "M1 A1 for each part.",
          },
        },
        {
          id: "mypc4-u3-fuel-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate natural gas versus coal for home heating.",
          parts: [
            { label: "a", prompt: "Write and balance the equation for complete combustion of methane.", marks: 2 },
            { label: "b", prompt: "Explain three environmental impacts of burning coal.", marks: 3 },
            { label: "c", prompt: "Suggest why natural gas is preferred despite higher cost.", marks: 2 },
            { label: "d", prompt: "Name one renewable alternative energy source.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fuel evaluation", statement: "Compare pollutants, efficiency, cost, renewability." },
            ],
            steps: [
              { part: "a", reasoning: "CH₄ + 2O₂ → CO₂ + 2H₂O.", working: "CH_4+2O_2\\to CO_2+2H_2O", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Balanced correctly.", working: "\\text{balanced}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "SO₂ → acid rain; particulates → smog; CO₂ → greenhouse effect.", working: "\\text{3 impacts}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Second impact.", working: "\\text{2}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Third impact.", working: "\\text{3}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Cleaner burning, more efficient, less maintenance; health benefits outweigh cost.", working: "\\text{benefits}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reasoned conclusion.", working: "\\text{preferred}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "e.g. solar, wind, biomass, geothermal.", working: "\\text{renewable}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) CH₄+2O₂→CO₂+2H₂O (b) SO₂/acid rain, particulates/smog, CO₂/warming (c) cleaner+efficient (d) solar",
            commonErrors: ["In (b), listing only CO₂."],
            examinerNote: "M1 A1 for (a), M1 M1 A1 for (b), M1 A1 for (c), A1 for (d).",
          },
        },
      ],
    },
  ],
};
