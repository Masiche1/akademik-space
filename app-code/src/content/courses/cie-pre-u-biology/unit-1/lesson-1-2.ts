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
              { id: "a", text: "Glycosidic bond" },
              { id: "b", text: "Peptide bond" },
              { id: "c", text: "Ester bond" },
              { id: "d", text: "Hydrogen bond" },
            ],
            correctChoiceId: "b",
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
