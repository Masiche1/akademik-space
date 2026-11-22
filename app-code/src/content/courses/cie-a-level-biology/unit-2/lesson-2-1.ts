import type { Lesson } from "../../../types.ts";

export const lesson221b: Lesson = {
  id: "cial-b-u2-lesson-2-1",
  code: "2-1",
  title: "Carbohydrates and lipids",
  goal: "I CAN describe the structure and functions of carbohydrates and lipids.",
  standards: ["9700 Unit 2: biological molecules"],
  vocabulary: [
    {
      term: "Monosaccharide",
      definition: "Simple sugar: glucose, fructose, galactose — C₆H₁₂O₆.",
    },
    {
      term: "Disaccharide",
      definition:
        "Two monosaccharides joined by glycosidic bond, e.g. sucrose, lactose.",
    },
    {
      term: "Polysaccharide",
      definition: "Long chain of monosaccharides: starch, glycogen, cellulose.",
    },
    {
      term: "Glycosidic bond",
      definition:
        "Covalent bond joining monosaccharides; formed by condensation.",
    },
    {
      term: "Triglyceride",
      definition:
        "Lipid: glycerol + three fatty acids; energy store and insulation.",
    },
    {
      term: "Phospholipid",
      definition: "Lipid with phosphate head — membrane component.",
    },
  ],
  concepts: [
    {
      id: "cial-b-u2-carbohydrates",
      title: "Carbohydrates",
      skill:
        "Describe monosaccharides, disaccharides and polysaccharides and their roles.",
      lesson: {
        sections: [
          {
            heading: "Monosaccharides and disaccharides",
            body: "Monosaccharides (glucose, fructose) are single sugars. Disaccharides form by condensation: sucrose = glucose + fructose; lactose = glucose + galactose; maltose = glucose + glucose. Hydrolysis breaks them back down.",
          },
          {
            heading: "Polysaccharides",
            body: "Starch (plants): amylose (unbranched helix) + amylopectin (branched) — glucose store. Glycogen (animals): highly branched glucose store. Cellulose (plants): β-glucose chains forming straight fibres — structural, indigestible.",
          },
          {
            heading: "Structure determines function",
            body: "α-glucose → starch/glycogen (helical, branched — storage). β-glucose → cellulose (linear H-bonded fibres — strength). Branching = more ends = faster hydrolysis for energy release.",
          },
        ],
        keyFormulas: [
          {
            name: "Carbohydrates",
            statement: "Condensation→glycosidic bonds; α→storage, β→structure.",
          },
        ],
        workedExample: {
          problem: "Why is glycogen more branched than amylose?",
          solution:
            "Animals need rapid glucose release — more branch ends = more sites for simultaneous hydrolysis.",
        },
      },
      questions: [
        {
          id: "cial-b-u2-cb-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What bond joins monosaccharides to form disaccharides?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ionic bond" },
              { id: "b", text: "Peptide bond" },
              { id: "c", text: "Hydrogen bond" },
              { id: "d", text: "Glycosidic bond" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Glycosidic bond",
                statement:
                  "Covalent bond joining sugars; formed in condensation.",
              },
            ],
            steps: [
              {
                reasoning: "Glycosidic = sugar-sugar bond.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Glycosidic bond",
            commonErrors: ["Confusing with peptide (protein) bonds."],
          },
        },
        {
          id: "cial-b-u2-cb-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are the monomers of starch and cellulose?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Polysaccharides",
                statement:
                  "Both are glucose polymers; α vs β isomer determines function.",
              },
            ],
            steps: [
              {
                reasoning: "Both are glucose polymers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "α vs β isomer difference.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Glucose — α-glucose for starch, β-glucose for cellulose.",
            commonErrors: [
              "Saying different monomers — same glucose, different isomer.",
            ],
          },
        },
        {
          id: "cial-b-u2-cb-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why cellulose is indigestible to humans but provides structural strength in plants.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cellulose",
                statement:
                  "β-glucose chains, straight fibres, H-bonded — structural, no human enzyme breaks β-linkages.",
              },
            ],
            steps: [
              {
                reasoning: "β-glucose forms straight chains.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "H-bonds between chains = strong fibres.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Humans lack cellulase for β-linkages.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Structure→function clear.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "β-glucose chains form H-bonded fibres; humans lack enzyme to digest them.",
            commonErrors: ["Confusing starch and cellulose structure."],
          },
        },
        {
          id: "cial-b-u2-cb-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Carbohydrates.",
          parts: [
            { label: "a", prompt: "What joins monosaccharides?", marks: 1 },
            { label: "b", prompt: "Starch vs cellulose monomers?", marks: 2 },
            { label: "c", prompt: "Why is glycogen branched?", marks: 3 },
            {
              label: "d",
              prompt: "Explain condensation vs hydrolysis.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Carbohydrates",
                statement: "Glycosidic+glucose isomers+branching+condensation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Glycosidic bond.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Both glucose; α vs β.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Isomer determines function.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "More ends = more hydrolysis sites.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Rapid glucose release needed.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Condensation joins (water out).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Hydrolysis breaks (water in).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Both explained.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) glycosidic (b) α vs β glucose (c) rapid release (d) condensation vs hydrolysis",
          },
        },
        {
          id: "cial-b-u2-cb-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which disaccharide is formed from glucose and fructose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Maltose" },
              { id: "b", text: "Lactose" },
              { id: "c", text: "Sucrose" },
              { id: "d", text: "Cellobiose" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Disaccharides",
                statement: "Sucrose = glucose + fructose; lactose = glucose + galactose; maltose = glucose + glucose.",
              },
            ],
            steps: [
              { reasoning: "Sucrose contains glucose and fructose.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Sucrose",
            commonErrors: ["Confusing sucrose with lactose or maltose."],
          },
        },
        {
          id: "cial-b-u2-cb-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which polysaccharide is the main carbohydrate storage molecule in plant cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Starch" },
              { id: "b", text: "Chitin" },
              { id: "c", text: "Cellulose" },
              { id: "d", text: "Glycogen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Starch",
                statement: "Plant storage polysaccharide made from amylose and amylopectin.",
              },
            ],
            steps: [
              { reasoning: "Starch stores glucose in plants.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Starch",
            commonErrors: ["Choosing cellulose, which is structural."],
          },
        },
        {
          id: "cial-b-u2-cb-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which feature is most responsible for the strength of cellulose fibres?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hydrogen bonds between adjacent chains" },
              { id: "b", text: "The presence of phosphate groups" },
              { id: "c", text: "A large number of glycosidic bonds only" },
              { id: "d", text: "Branching of the glucose chains" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cellulose structure",
                statement: "Straight β-glucose chains are held together by hydrogen bonds to form strong fibres.",
              },
            ],
            steps: [
              { reasoning: "Inter-chain hydrogen bonds give cellulose its strength.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Hydrogen bonds between adjacent chains",
            commonErrors: ["Attributing strength only to glycosidic bonds."],
          },
        },
        {
          id: "cial-b-u2-cb-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is released when two monosaccharides join by condensation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A carbon dioxide molecule" },
              { id: "b", text: "A phosphate group" },
              { id: "c", text: "An oxygen molecule" },
              { id: "d", text: "A water molecule" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Condensation",
                statement: "Joining monomers by condensation releases water and forms a glycosidic bond.",
              },
            ],
            steps: [
              { reasoning: "Condensation removes water.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A water molecule",
            commonErrors: ["Confusing condensation with hydrolysis."],
          },
        },
        {
          id: "cial-b-u2-cb-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which carbohydrate is made from β-glucose and forms straight fibres in plant cell walls?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glycogen" },
              { id: "b", text: "Amylose" },
              { id: "c", text: "Cellulose" },
              { id: "d", text: "Sucrose" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cellulose",
                statement: "β-glucose polymer forming structural fibres in plant cell walls.",
              },
            ],
            steps: [
              { reasoning: "Cellulose is the β-glucose structural polysaccharide.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Cellulose",
            commonErrors: ["Choosing amylose, an α-glucose storage polymer."],
          },
        },
        {
          id: "cial-b-u2-cb-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is glycogen more suitable than amylose for rapid glucose release in animals?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is insoluble in water" },
              { id: "b", text: "It is more highly branched, providing more chain ends" },
              { id: "c", text: "It contains β-glucose units" },
              { id: "d", text: "It has no glycosidic bonds" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Branching",
                statement: "More branch ends provide more sites for simultaneous hydrolysis.",
              },
            ],
            steps: [
              { reasoning: "Glycogen branching increases hydrolysis sites.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** More highly branched with more chain ends",
            commonErrors: ["Confusing storage branching with cellulose structure."],
          },
        },
        {
          id: "cial-b-u2-cb-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A tetrasaccharide is formed by condensation from four monosaccharides. How many water molecules are released?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Condensation",
                statement: "Joining $n$ monosaccharides forms $n-1$ glycosidic bonds and releases $n-1$ water molecules.",
              },
            ],
            steps: [
              { reasoning: "Four monosaccharides require three condensation reactions.", marks: 1, markCode: "M" },
              { reasoning: "Each condensation releases one water molecule, so $4-1=3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 water molecules",
            commonErrors: ["Using four water molecules instead of three bonds."],
          },
        },
        {
          id: "cial-b-u2-cb-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A starch sample has mass $250\\ \\text{g}$. If $60\\%$ is amylopectin and $40\\%$ is amylose, calculate the mass of amylopectin in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 150 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage composition",
                statement: "Part mass $=$ total mass $\\times$ percentage as a decimal.",
              },
            ],
            steps: [
              { reasoning: "$250 \\times 0.60 = 150$ g amylopectin.", marks: 1, markCode: "M" },
              { reasoning: "The amylopectin mass is 150 g.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "150 g",
            commonErrors: ["Calculating the amylose mass instead."],
          },
        },
        {
          id: "cial-b-u2-cb-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Monosaccharides have formula $C_6H_{12}O_6$. A disaccharide forms by condensation, releasing one water molecule. How many oxygen atoms are present in the disaccharide?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 11 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Molecular formula",
                statement: "Two $C_6H_{12}O_6$ units lose $H_2O$, giving $C_{12}H_{22}O_{11}$.",
              },
            ],
            steps: [
              { reasoning: "$6+6=12$ oxygen atoms before condensation.", marks: 1, markCode: "M" },
              { reasoning: "Water contains one oxygen atom, so $12-1=11$ oxygen atoms remain.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "11 oxygen atoms",
            commonErrors: ["Forgetting that the released water contains oxygen."],
          },
        },
        {
          id: "cial-b-u2-cb-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A linear cellulose molecule contains 12 glucose monomers joined by glycosidic bonds. How many glycosidic bonds are present?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 11 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Chain bonds",
                statement: "A linear chain of $n$ monomers contains $n-1$ glycosidic bonds.",
              },
            ],
            steps: [
              { reasoning: "Twelve glucose units require bonds between neighbouring units.", marks: 1, markCode: "M" },
              { reasoning: "$12-1=11$ glycosidic bonds.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "11 glycosidic bonds",
            commonErrors: ["Counting twelve bonds as though the chain were circular."],
          },
        },
        {
          id: "cial-b-u2-cb-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A plant cell stores glucose mainly as starch. In a sample, glycogen contains three times as many branch points as amylopectin contains per unit mass. If amylopectin has 20 branch points, how many branch points does the glycogen sample have?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 60 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Ratio calculation",
                statement: "Glycogen branch points $=$ amylopectin branch points $\\times 3$.",
              },
            ],
            steps: [
              { reasoning: "The ratio is three glycogen branch points to one amylopectin branch point.", marks: 1, markCode: "M" },
              { reasoning: "$20 \\times 3 = 60$ branch points.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "60 branch points",
            commonErrors: ["Adding three instead of multiplying by three."],
          },
        },
        {
          id: "cial-b-u2-cb-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how the branched structure of glycogen is related to its role as an energy store in animals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structure-function",
                statement: "Branching increases the number of non-reducing ends available for rapid hydrolysis.",
              },
            ],
            steps: [
              { reasoning: "Glycogen is highly branched, unlike linear amylose.", marks: 1, markCode: "M" },
              { reasoning: "Each branch creates additional chain ends that enzymes can attack.", marks: 1, markCode: "M" },
              { reasoning: "More simultaneous hydrolysis sites allow rapid glucose release when needed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Branching provides many ends for rapid simultaneous hydrolysis and glucose release.",
            commonErrors: ["Saying branching makes glucose harder to digest."],
          },
        },
      ],
    },
    {
      id: "cial-b-u2-lipids",
      title: "Lipids",
      skill: "Describe triglycerides and phospholipids and their functions.",
      lesson: {
        sections: [
          {
            heading: "Triglycerides",
            body: "Glycerol + three fatty acids joined by ester bonds (condensation). Saturated (no C=C) = solid at room temp; unsaturated (C=C) = liquid. Functions: energy store (9 kcal/g vs 4 for carbs), insulation, protection of organs.",
          },
          {
            heading: "Phospholipids",
            body: "Glycerol + two fatty acids + phosphate group. Hydrophilic phosphate head, hydrophobic fatty acid tails — amphipathic. Form bilayers in water: basis of cell membranes (fluid mosaic model).",
          },
          {
            heading: "Lipid test",
            body: "Emulsion test: shake with ethanol, add water — cloudy white emulsion = lipid present. Lipids don't dissolve in water (non-polar) but dissolve in ethanol (polar).",
          },
        ],
        keyFormulas: [
          {
            name: "Lipids",
            statement:
              "Triglyceride=3 FA+glycerol; phospholipid=amphipathic membrane component.",
          },
        ],
        workedExample: {
          problem: "Why are phospholipids ideal for membranes?",
          solution:
            "Amphipathic — hydrophilic heads face water, hydrophobic tails face inward — self-assembling bilayer barrier.",
        },
      },
      questions: [
        {
          id: "cial-b-u2-lp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the components of a triglyceride?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glucose + fatty acid" },
              { id: "b", text: "Amino acids + glycerol" },
              { id: "c", text: "Phosphate + fatty acids" },
              { id: "d", text: "Glycerol + three fatty acids" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Triglyceride",
                statement: "Glycerol + three fatty acids via ester bonds.",
              },
            ],
            steps: [
              {
                reasoning: "Triglyceride = glycerol + 3 FA.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Glycerol + three fatty acids",
            commonErrors: ["Confusing with phospholipid (has phosphate)."],
          },
        },
        {
          id: "cial-b-u2-lp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why are unsaturated fats liquid at room temperature while saturated fats are solid?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Saturated vs unsaturated",
                statement:
                  "C=C kinks prevent packing → liquid; straight chains pack → solid.",
              },
            ],
            steps: [
              {
                reasoning: "C=C kinks prevent tight packing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Packed straight chains = solid.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Kinks from C=C prevent packing — unsaturated stays liquid.",
            commonErrors: [
              "Saying temperature causes it — it's molecular packing.",
            ],
          },
        },
        {
          id: "cial-b-u2-lp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why phospholipids form bilayers in water.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phospholipid",
                statement:
                  "Amphipathic — hydrophilic head, hydrophobic tails → bilayer in water.",
              },
            ],
            steps: [
              {
                reasoning: "Hydrophilic heads face water.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Hydrophobic tails face each other inside.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Energy-minimising arrangement = bilayer.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Amphipathic nature → self-assembling bilayer.",
            commonErrors: ["Describing only one side of the molecule."],
          },
        },
        {
          id: "cial-b-u2-lp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Lipids.",
          parts: [
            { label: "a", prompt: "Triglyceride components?", marks: 1 },
            {
              label: "b",
              prompt: "Saturated vs unsaturated at room temp?",
              marks: 2,
            },
            { label: "c", prompt: "Why phospholipid bilayer?", marks: 3 },
            { label: "d", prompt: "Describe the emulsion test.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lipids",
                statement: "Components+saturation+bilayer+test.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Glycerol + 3 fatty acids.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Unsaturated=liquid, saturated=solid.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "C=C kinks prevent packing.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Heads face water.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Tails face inward.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Amphipathic → bilayer.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Shake with ethanol.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Add water → cloudy emulsion.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Positive result described.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) glycerol+3FA (b) liquid vs solid (c) amphipathic (d) ethanol+water→cloudy",
          },
        },
        {
          id: "cial-b-u2-lp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which bond links each fatty acid to glycerol in a triglyceride?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Peptide bond" },
              { id: "b", text: "Hydrogen bond" },
              { id: "c", text: "Ester bond" },
              { id: "d", text: "Glycosidic bond" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Triglyceride",
                statement: "Glycerol and fatty acids are joined by ester bonds formed in condensation.",
              },
            ],
            steps: [
              { reasoning: "Fatty acid-glycerol bonds are ester bonds.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Ester bond",
            commonErrors: ["Confusing ester bonds with peptide or glycosidic bonds."],
          },
        },
        {
          id: "cial-b-u2-lp-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement correctly defines a saturated fatty acid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It contains no carbon-carbon double bonds" },
              { id: "b", text: "It is always liquid at room temperature" },
              { id: "c", text: "It contains one or more C=C double bonds" },
              { id: "d", text: "It contains a phosphate group" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Saturated fatty acid",
                statement: "A fatty acid chain with no carbon-carbon double bonds.",
              },
            ],
            steps: [
              { reasoning: "Saturated chains have no C=C bonds.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** No carbon-carbon double bonds",
            commonErrors: ["Reversing the meanings of saturated and unsaturated."],
          },
        },
        {
          id: "cial-b-u2-lp-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is a phospholipid described as amphipathic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It has a hydrophilic phosphate head and hydrophobic fatty acid tails" },
              { id: "b", text: "It contains only hydrophilic groups" },
              { id: "c", text: "It has three hydrophobic fatty acid tails" },
              { id: "d", text: "It dissolves completely in water" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phospholipid",
                statement: "Phosphate head is hydrophilic; two fatty acid tails are hydrophobic.",
              },
            ],
            steps: [
              { reasoning: "Amphipathic means having both hydrophilic and hydrophobic regions.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Hydrophilic head and hydrophobic tails",
            commonErrors: ["Saying the whole molecule is hydrophobic."],
          },
        },
        {
          id: "cial-b-u2-lp-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the emulsion test, what positive result indicates that lipid is present?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A brick-red precipitate forms" },
              { id: "b", text: "The solution remains clear blue" },
              { id: "c", text: "A cloudy white emulsion forms after water is added" },
              { id: "d", text: "The mixture turns purple" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Emulsion test",
                statement: "Lipid dissolved in ethanol forms a cloudy white emulsion when water is added.",
              },
            ],
            steps: [
              { reasoning: "Cloudy white emulsion is the positive lipid result.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Cloudy white emulsion",
            commonErrors: ["Confusing the emulsion test with Biuret or Benedict tests."],
          },
        },
        {
          id: "cial-b-u2-lp-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why are lipids more efficient energy stores than carbohydrates?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are always polar" },
              { id: "b", text: "They provide about $9\\ \\text{kcal g}^{-1}$ compared with about $4\\ \\text{kcal g}^{-1}$ for carbohydrate" },
              { id: "c", text: "They cannot be hydrolysed" },
              { id: "d", text: "They contain no carbon atoms" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Energy value",
                statement: "Lipid provides about 9 kcal/g; carbohydrate about 4 kcal/g.",
              },
            ],
            steps: [
              { reasoning: "Higher energy per gram makes lipids efficient stores.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Higher energy value per gram",
            commonErrors: ["Claiming lipids contain no energy."],
          },
        },
        {
          id: "cial-b-u2-lp-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In a phospholipid bilayer in water, where are the fatty acid tails located?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alternating between two leaflets" },
              { id: "b", text: "Facing each other in the hydrophobic interior" },
              { id: "c", text: "Outside the bilayer entirely" },
              { id: "d", text: "Facing the surrounding water" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bilayer arrangement",
                statement: "Hydrophilic heads face water; hydrophobic tails are shielded inside.",
              },
            ],
            steps: [
              { reasoning: "Hydrophobic tails avoid water by facing inward.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** In the hydrophobic interior",
            commonErrors: ["Reversing heads and tails."],
          },
        },
        {
          id: "cial-b-u2-lp-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Using $9\\ \\text{kcal g}^{-1}$ for lipid, calculate the energy provided by $20\\ \\text{g}$ of lipid.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 180 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Energy calculation",
                statement: "Energy $=$ mass $\\times$ energy value per gram.",
              },
            ],
            steps: [
              { reasoning: "$20 \\times 9 = 180$ kcal.", marks: 1, markCode: "M" },
              { reasoning: "The energy value is 180 kcal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "180 kcal",
            commonErrors: ["Using the carbohydrate value of 4 kcal/g."],
          },
        },
        {
          id: "cial-b-u2-lp-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A triglyceride forms when glycerol condenses with three fatty acids. How many water molecules are released?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Triglyceride formation",
                statement: "Three ester bonds form by condensation, releasing three water molecules.",
              },
            ],
            steps: [
              { reasoning: "Each fatty acid joins glycerol in a separate condensation reaction.", marks: 1, markCode: "M" },
              { reasoning: "Three condensations release three water molecules.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 water molecules",
            commonErrors: ["Counting glycerol's own atoms as an extra condensation."],
          },
        },
        {
          id: "cial-b-u2-lp-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A lipid mixture has mass $250\\ \\text{g}$. If $80\\%$ of the mass is saturated fat, calculate the saturated fat mass in grams.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 200 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage composition",
                statement: "Part mass $=$ total mass $\\times$ percentage as a decimal.",
              },
            ],
            steps: [
              { reasoning: "$250 \\times 0.80 = 200$ g.", marks: 1, markCode: "M" },
              { reasoning: "The saturated fat mass is 200 g.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "200 g",
            commonErrors: ["Calculating the unsaturated fraction instead."],
          },
        },
        {
          id: "cial-b-u2-lp-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A meal contains $15\\ \\text{g}$ carbohydrate and $10\\ \\text{g}$ lipid. Using $4\\ \\text{kcal g}^{-1}$ for carbohydrate and $9\\ \\text{kcal g}^{-1}$ for lipid, calculate the total energy in kcal.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 150 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Energy values",
                statement: "Carbohydrate $=4\\ \\text{kcal g}^{-1}$; lipid $=9\\ \\text{kcal g}^{-1}$.",
              },
            ],
            steps: [
              { reasoning: "Carbohydrate gives $15 \\times 4 = 60$ kcal and lipid gives $10 \\times 9 = 90$ kcal.", marks: 1, markCode: "M" },
              { reasoning: "Total energy $=60+90=150$ kcal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "150 kcal",
            commonErrors: ["Adding masses before applying different energy values."],
          },
        },
        {
          id: "cial-b-u2-lp-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A phospholipid contains glycerol, two fatty acids and a phosphate-containing group. How many ester bonds link fatty acids to glycerol?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phospholipid",
                statement: "A phospholipid has two fatty acid chains attached to glycerol by ester bonds.",
              },
            ],
            steps: [
              { reasoning: "Each of the two fatty acids forms one ester bond with glycerol.", marks: 1, markCode: "M" },
              { reasoning: "Therefore there are 2 ester bonds.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 ester bonds",
            commonErrors: ["Assuming three fatty acids as in a triglyceride."],
          },
        },
        {
          id: "cial-b-u2-lp-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why phospholipids spontaneously form a bilayer when placed in water.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Amphipathic self-assembly",
                statement: "Hydrophilic heads interact with water while hydrophobic tails avoid it.",
              },
            ],
            steps: [
              { reasoning: "The phosphate-containing heads are hydrophilic and orient towards water.", marks: 1, markCode: "M" },
              { reasoning: "The fatty acid tails are hydrophobic and are excluded from water.", marks: 1, markCode: "M" },
              { reasoning: "Two layers form so tails face each other inside, minimising exposure to water.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hydrophilic heads face water and hydrophobic tails face inward in a bilayer.",
            commonErrors: ["Describing a single layer or putting tails towards water."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u2-molecules-notes",
      title: "Biological molecules — revision notes",
      summary: "Carbohydrates, lipids and their structures and functions.",
      sections: [
        {
          heading: "Carbohydrates",
          body: "Monosaccharides → disaccharides (glycosidic bond) → polysaccharides. α-glucose = storage (starch, glycogen); β-glucose = structure (cellulose). Condensation forms bonds; hydrolysis breaks them.",
        },
        {
          heading: "Lipids",
          body: "Triglycerides = glycerol + 3 fatty acids — energy store, insulation. Phospholipids = amphipathic — membrane bilayer. Saturated=solid, unsaturated=liquid. Emulsion test for lipids.",
        },
        {
          heading: "Exam checklist",
          body: "Can you draw glycosidic/ester bonds? Explain α vs β glucose? Describe emulsion test? Explain membrane bilayer formation?",
        },
      ],
    },
  ],
};
