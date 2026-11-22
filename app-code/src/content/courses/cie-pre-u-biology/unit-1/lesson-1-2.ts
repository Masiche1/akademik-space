import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "cipub-u1-lesson-1-2",
  code: "1-2",
  title: "Biological Molecules: Carbohydrates, Lipids and Proteins",
  goal: "I CAN describe the structure and functions of the major biological molecules at Pre-U standard.",
  standards: ["Cambridge Pre-U Biology 9769", "Biological molecules"],
  vocabulary: [
    { term: "Monosaccharide", definition: "Simplest carbohydrate — single sugar unit, e.g. glucose, fructose." },
    { term: "Glycosidic bond", definition: "Bond joining monosaccharides in disaccharides and polysaccharides." },
    { term: "Condensation reaction", definition: "Reaction joining two molecules with loss of water — builds polymers." },
    { term: "Hydrolysis", definition: "Reaction breaking bonds using water — digests polymers." },
    { term: "Triglyceride", definition: "Lipid of glycerol + three fatty acids — energy store." },
    { term: "Peptide bond", definition: "Amide bond joining amino acids in proteins." },
  ],
  concepts: [
    {
      id: "cipub-u1-s1-molecules",
      title: "Biological molecules",
      skill: "Relate molecular structure to function for carbohydrates, lipids and proteins.",
      lesson: {
        sections: [
          {
            heading: "Carbohydrates",
            body: "Monosaccharides (glucose, fructose) are the monomers. Disaccharides (sucrose = glucose + fructose; maltose = 2 glucose; lactose = glucose + galactose) form via condensation. Polysaccharides: **starch** (amylose helix + amylopectin branches, plant storage), **glycogen** (highly branched animal storage), **cellulose** (β-glucose chains with hydrogen bonds — structural, indigestible). Glucose is the universal respiratory substrate; fructose is sweeter; galactose feeds lactose.",
          },
          {
            heading: "Lipids",
            body: "Triglycerides: glycerol + 3 fatty acids via ester bonds (condensation). Saturated fatty acids have no C=C — solid at room temp, associated with cardiovascular risk; unsaturated have C=C — liquid oils. Phospholipids replace one fatty acid with phosphate — form bilayers (membranes). Cholesterol stabilises membranes and is a steroid hormone precursor. Lipids are hydrophobic — insoluble in water, excellent long-term energy stores (~2× carbohydrates per gram) and insulation.",
          },
          {
            heading: "Proteins",
            body: "20 amino acids join via peptide bonds (condensation) into polypeptides that fold into primary → secondary (α-helix, β-sheet via H-bonds) → tertiary (3D shape via R-group interactions: H-bonds, ionic, disulfide, hydrophobic) → quaternary (multiple chains, e.g. haemoglobin). Structure determines function: enzymes, antibodies, structural proteins, carriers. Denaturation breaks bonds above optimum pH/temperature — shape lost, function lost.",
          },
        ],
        keyFormulas: [
          {
            name: "Condensation/hydrolysis",
            statement: "monomers → polymer + H₂O (condensation); polymer + H₂O → monomers (hydrolysis)",
          },
          {
            name: "Triglyceride",
            statement: "glycerol + 3 fatty acids → triglyceride + 3 H₂O",
          },
        ],
        workedExample: {
          problem: "Explain why cellulose provides structural support in plant cell walls but humans cannot digest it.",
          solution:
            "Cellulose is β-glucose chains linked β-1,4 with hydrogen bonds between chains — rigid fibres ideal for support. Humans lack cellulase to hydrolyse β-glycosidic bonds (we digest α-glucose in starch).",
        },
      },
      questions: [
        {
          id: "cipub-u1-mol-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which bond joins amino acids in a protein?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Peptide bond" },
              { id: "b", text: "Ester bond" },
              { id: "c", text: "Hydrogen bond" },
              { id: "d", text: "Glycosidic bond" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Peptide bond",
                statement: "Amide bond formed by condensation between amino and carboxyl groups.",
              },
            ],
            steps: [{ reasoning: "Amino acids join by peptide bonds.", marks: 1, markCode: "A" }],
            finalAnswer: "Peptide bond",
          },
        },
        {
          id: "cipub-u1-mol-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between starch and cellulose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Polysaccharides",
                statement: "Starch = α-glucose storage polymer; cellulose = β-glucose structural polymer.",
              },
            ],
            steps: [
              {
                reasoning: "Starch: α-glucose, branched/helix, energy storage, digestible.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cellulose: β-glucose, straight chains + H-bonds, structural, indigestible.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "α vs β glucose; storage vs structure.",
          },
        },
        {
          id: "cipub-u1-mol-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between saturated and unsaturated fatty acids and their effects on health.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fatty acids",
                statement: "Saturated = no C=C, solid; unsaturated = C=C, liquid.",
              },
            ],
            steps: [
              {
                reasoning: "Saturated: single bonds only, straight chains pack tightly, solid at room temp.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Unsaturated: C=C kinks prevent packing, liquid oils.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "High saturated fat intake raises LDL cholesterol → cardiovascular disease risk.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Saturated solid/LDL risk; unsaturated liquid/healthier.",
          },
        },
        {
          id: "cipub-u1-mol-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the four levels of protein structure and explain why tertiary structure is crucial for enzyme function.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Protein structure",
                statement: "Primary sequence → secondary folding → tertiary 3D → quaternary multi-chain.",
              },
            ],
            steps: [
              {
                reasoning: "Primary: amino acid sequence; secondary: α-helix/β-sheet via H-bonds.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Tertiary: 3D shape from R-group interactions (H-bonds, ionic, disulfide, hydrophobic).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Quaternary: multiple polypeptide chains (e.g. haemoglobin 4 chains).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Active site shape in tertiary structure determines substrate binding — denaturation destroys it.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4 levels; tertiary shape = active site = function.",
          },
        },
        {
          id: "cipub-u1-mol-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which polysaccharide is the main carbohydrate storage molecule in animal liver and muscle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glycogen" },
              { id: "b", text: "Starch" },
              { id: "c", text: "Sucrose" },
              { id: "d", text: "Cellulose" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Glycogen",
                statement: "Highly branched $\\alpha$-glucose polymer — the animal storage carbohydrate.",
              },
            ],
            steps: [{ reasoning: "Glycogen is stored in animal liver and muscle; starch is the plant equivalent.", marks: 1, markCode: "A" }],
            finalAnswer: "Glycogen",
          },
        },
        {
          id: "cipub-u1-mol-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A triglyceride is formed from one glycerol molecule and three fatty acid molecules by condensation. How many water molecules are released?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3, unit: "molecules" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Triglyceride formation",
                statement: "glycerol + 3 fatty acids $\\rightarrow$ triglyceride + 3$H_2O$",
              },
            ],
            steps: [
              {
                reasoning: "Three ester bonds form, each releasing one water molecule.",
                working: "3\\ fatty\\ acids\\ \\rightarrow\\ 3\\ ester\\ bonds\\ \\rightarrow\\ 3\\ H_2O",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "3 molecules of water",
          },
        },
        {
          id: "cipub-u1-mol-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which disaccharide is made from one glucose molecule and one fructose molecule?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cellobiose" },
              { id: "b", text: "Maltose" },
              { id: "c", text: "Lactose" },
              { id: "d", text: "Sucrose" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sucrose",
                statement: "Sucrose = glucose + fructose; maltose = 2 glucose; lactose = glucose + galactose.",
              },
            ],
            steps: [{ reasoning: "Sucrose is the glucose-fructose disaccharide.", marks: 1, markCode: "A" }],
            finalAnswer: "Sucrose",
          },
        },
        {
          id: "cipub-u1-mol-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between condensation and hydrolysis reactions as they apply to biological molecules.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Condensation vs hydrolysis",
                statement: "Condensation builds polymers by losing water; hydrolysis breaks them using water.",
              },
            ],
            steps: [
              {
                reasoning: "Condensation: two monomers join with loss of a water molecule — forms glycosidic, peptide and ester bonds.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Hydrolysis: water is used to break bonds, splitting polymers back into monomers — e.g. digestion of starch.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "They are essentially the same reaction in opposite directions — synthesis vs breakdown.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Condensation = join + lose H2O; hydrolysis = break + use H2O.",
          },
        },
        {
          id: "cipub-u1-mol-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Carbohydrates yield about 17 kJ of energy per gram when respired, and lipids yield roughly twice this amount per gram. Calculate the energy yield per gram of lipid in kJ.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 34, unit: "kJ" }],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Energy density of lipids",
                statement: "Lipids store about twice the energy per gram of carbohydrates.",
              },
            ],
            steps: [
              {
                reasoning: "Twice the carbohydrate yield: $2 \\times 17 = 34$ kJ per gram.",
                working: "2 \\times 17 = 34\\ \\text{kJ g}^{-1}",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "34 kJ per gram",
          },
        },
        {
          id: "cipub-u1-mol-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the primary role of phospholipids in cells?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Long-term energy storage" },
              { id: "b", text: "Transporting oxygen in blood" },
              { id: "c", text: "Forming the bilayer of cell membranes" },
              { id: "d", text: "Providing rigidity to plant cell walls" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phospholipids",
                statement: "Glycerol + 2 fatty acids + phosphate; amphipathic — self-assemble into bilayers.",
              },
            ],
            steps: [{ reasoning: "Phospholipids form membrane bilayers; triglycerides are the energy stores.", marks: 1, markCode: "A" }],
            finalAnswer: "Forming the bilayer of cell membranes",
          },
        },
        {
          id: "cipub-u1-mol-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens to a protein enzyme when it is denatured?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Its tertiary structure unfolds so the active site is lost" },
              { id: "b", text: "Its activation energy increases permanently" },
              { id: "c", text: "It is converted into a triglyceride" },
              { id: "d", text: "It is hydrolysed into its amino acid monomers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Denaturation",
                statement: "Loss of 3D shape (tertiary structure) due to extreme pH or temperature — function lost, primary structure intact.",
              },
            ],
            steps: [{ reasoning: "Denaturation disrupts the bonds holding tertiary/quaternary structure; the peptide backbone remains.", marks: 1, markCode: "A" }],
            finalAnswer: "Tertiary structure unfolds — active site lost",
          },
        },
        {
          id: "cipub-u1-mol-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the molecular structure of cellulose makes it suitable for supporting plant cell walls, and why humans cannot use it as an energy source.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Cellulose structure",
                statement: "$\\beta$-glucose chains joined $\\beta$-1,4 with hydrogen bonds between chains — rigid fibres.",
              },
            ],
            steps: [
              {
                reasoning: "Cellulose is made of $\\beta$-glucose monomers in straight, unbranched chains.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Hydrogen bonds form between adjacent chains, producing strong, rigid microfibrils ideal for structural support.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Humans lack the enzyme cellulase needed to hydrolyse $\\beta$-1,4 glycosidic bonds.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "We digest $\\alpha$-glucose polymers (starch/glycogen) but not cellulose — so it passes through undigested as fibre.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Rigid $\\beta$-glucose fibres for support; no cellulase so indigestible.",
          },
        },
        {
          id: "cipub-u1-mol-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Five amino acids join together in a condensation reaction to form a polypeptide. How many peptide bonds are formed?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Peptide bonds",
                statement: "n amino acids $\\rightarrow$ (n $-$ 1) peptide bonds and (n $-$ 1) water molecules.",
              },
            ],
            steps: [
              {
                reasoning: "Each new amino acid added forms one bond to the growing chain: $5 - 1 = 4$.",
                working: "5 - 1 = 4\\ \\text{peptide bonds}",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "4 peptide bonds",
          },
        },
        {
          id: "cipub-u1-mol-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which carbohydrate is a disaccharide?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lactose" },
              { id: "b", text: "Glucose" },
              { id: "c", text: "Cellulose" },
              { id: "d", text: "Glycogen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Disaccharides",
                statement: "Two monosaccharide units joined by a glycosidic bond — sucrose, maltose, lactose.",
              },
            ],
            steps: [{ reasoning: "Lactose (glucose + galactose) is a disaccharide; glycogen and cellulose are polysaccharides, glucose a monosaccharide.", marks: 1, markCode: "A" }],
            finalAnswer: "Lactose",
          },
        },
        {
          id: "cipub-u1-mol-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between triglycerides and phospholipids in terms of structure and function.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Triglycerides vs phospholipids",
                statement: "Triglyceride = glycerol + 3 fatty acids (storage); phospholipid = glycerol + 2 fatty acids + phosphate (membranes).",
              },
            ],
            steps: [
              {
                reasoning: "Triglycerides: glycerol + three fatty acids joined by ester bonds — hydrophobic energy store.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Phospholipids: one fatty acid replaced by a phosphate group — amphipathic, forms bilayers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Function follows structure: triglycerides store energy; phospholipids build membranes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Storage lipid vs membrane lipid.",
          },
        },
        {
          id: "cipub-u1-mol-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the properties of the twenty different amino acids allow proteins to perform such a wide range of functions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Protein diversity",
                statement: "Different R-groups give different chemical properties; sequence determines 3D shape and hence function.",
              },
            ],
            steps: [
              {
                reasoning: "Amino acids differ in their R-groups — charged, polar, non-polar, sulphur-containing — giving a chemical toolkit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The sequence of amino acids (primary structure) determines how the chain folds into secondary and tertiary structures.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "R-group interactions (H-bonds, ionic, disulfide, hydrophobic) create precise 3D shapes — e.g. active sites, binding pockets.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Almost unlimited sequence combinations give enormous structural variety and diverse functions (enzymes, antibodies, hormones, structural proteins).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "R-group chemistry, then sequence, then shape, then function.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipub-u1-molecules-notes",
      title: "Biological molecules — revision notes",
      summary: "Carbohydrates, lipids, proteins: structure, bonds, functions.",
      sections: [
        {
          heading: "Key skills",
          body: "Always link structure → function. Know which bonds form/break in condensation vs hydrolysis. Compare α vs β glucose for starch/cellulose/glycogen.",
        },
        {
          heading: "Exam tips",
          body: "For lipids, distinguish triglycerides (storage) from phospholipids (membranes). For proteins, be precise about which interactions stabilise each structural level.",
        },
      ],
    },
  ],
};
