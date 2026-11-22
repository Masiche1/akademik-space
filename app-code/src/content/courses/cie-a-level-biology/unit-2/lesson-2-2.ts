import type { Lesson } from "../../../types.ts";

export const lesson222b: Lesson = {
  id: "cial-b-u2-lesson-2-2",
  code: "2-2",
  title: "Proteins and amino acids",
  goal: "I CAN describe amino acid structure, peptide bonds and protein structure levels.",
  standards: ["9700 Unit 2: biological molecules"],
  vocabulary: [
    {
      term: "Amino acid",
      definition:
        "Molecule with amino group, carboxyl group and variable R-group.",
    },
    {
      term: "Peptide bond",
      definition: "Covalent bond joining amino acids; formed by condensation.",
    },
    {
      term: "Primary structure",
      definition: "Linear sequence of amino acids in a polypeptide chain.",
    },
    {
      term: "Secondary structure",
      definition: "Local folding: α-helix or β-pleated sheet via H-bonds.",
    },
    {
      term: "Tertiary structure",
      definition:
        "3D folding of a single polypeptide via bonds between R-groups.",
    },
    {
      term: "Quaternary structure",
      definition: "Multiple polypeptide chains assembled, e.g. haemoglobin.",
    },
  ],
  concepts: [
    {
      id: "cial-b-u2-amino-acids",
      title: "Amino acids and peptide bonds",
      skill: "Describe amino acid structure and how polypeptides form.",
      lesson: {
        sections: [
          {
            heading: "Amino acid structure",
            body: "Each amino acid has: an amino group (–NH₂), a carboxyl group (–COOH), a hydrogen atom, and a variable R-group — all attached to a central carbon. 20 standard amino acids differ only in R-group. R-group properties determine behaviour.",
          },
          {
            heading: "Polypeptide formation",
            body: "Condensation joins the carboxyl of one amino acid to the amino of the next, releasing water — forming a peptide bond. Hydrolysis reverses this. Chains of amino acids = polypeptides; folded polypeptides = proteins.",
          },
          {
            heading: "Protein test",
            body: "Biuret test: add Biuret reagent (NaOH + CuSO₄). Purple/violet colour = protein present (peptide bonds chelate copper). Blue = negative.",
          },
        ],
        keyFormulas: [
          {
            name: "Proteins",
            statement:
              "Condensation→peptide bonds→polypeptide; 20 amino acids differ in R-group.",
          },
        ],
        workedExample: {
          problem: "Two amino acids join. What forms and what's released?",
          solution: "Peptide bond forms; water released (condensation).",
        },
      },
      questions: [
        {
          id: "cial-b-u2-aa-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What bond joins amino acids in a polypeptide?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hydrogen bond" },
              { id: "b", text: "Glycosidic bond" },
              { id: "c", text: "Ionic bond" },
              { id: "d", text: "Peptide bond" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Peptide bond",
                statement:
                  "Covalent bond between amino and carboxyl groups; formed by condensation.",
              },
            ],
            steps: [
              {
                reasoning: "Peptide = amino acid bond.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Peptide bond",
            commonErrors: ["Confusing with glycosidic (sugar) bonds."],
          },
        },
        {
          id: "cial-b-u2-aa-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What parts of an amino acid are the same across all 20 standard types?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Amino acid",
                statement:
                  "Amino group, carboxyl group, H, central C same; R-group varies.",
              },
            ],
            steps: [
              {
                reasoning: "Amino, carboxyl, hydrogen, central carbon same.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "R-group is the only variable part.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Amino, carboxyl, H and central carbon same; R-group varies.",
            commonErrors: ["Saying all parts differ."],
          },
        },
        {
          id: "cial-b-u2-aa-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe condensation and hydrolysis of peptide bonds.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Peptide formation",
                statement:
                  "Condensation=water out, bond forms; hydrolysis=water in, bond breaks.",
              },
            ],
            steps: [
              {
                reasoning: "Condensation: carboxyl+amino join, water released.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Hydrolysis: water added, bond broken.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Reversible pair.", marks: 1, markCode: "M" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Condensation forms peptide bonds (water out); hydrolysis breaks them (water in).",
            commonErrors: ["Reversing which reaction releases water."],
          },
        },
        {
          id: "cial-b-u2-aa-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Amino acids and proteins.",
          parts: [
            { label: "a", prompt: "What joins amino acids?", marks: 1 },
            { label: "b", prompt: "Same parts across amino acids?", marks: 2 },
            { label: "c", prompt: "Condensation vs hydrolysis?", marks: 3 },
            { label: "d", prompt: "Biuret test result for protein?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Proteins",
                statement: "Peptide bond+amino acid parts+condensation+test.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Peptide bond.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Amino/carboxyl/H/carbon same.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "R-group varies.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Condensation=water out.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Hydrolysis=water in.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Reversible.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Biuret reagent added.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Purple/violet=positive.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "(a) peptide (b) parts+R-group (c) condense/hydrolyse (d) Biuret→purple",
          },
        },
        {
          id: "cial-b-u2-aa-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which group varies between the 20 standard amino acids?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The central carbon atom" },
              { id: "b", text: "The R-group" },
              { id: "c", text: "The amino group" },
              { id: "d", text: "The carboxyl group" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Amino acid",
                statement: "All standard amino acids share amino, carboxyl, hydrogen and central carbon; only R-groups differ.",
              },
            ],
            steps: [
              { reasoning: "The R-group is the variable side chain.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The R-group",
            commonErrors: ["Thinking the amino or carboxyl groups differ."],
          },
        },
        {
          id: "cial-b-u2-aa-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Between which two groups is a peptide bond formed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The carboxyl group of one amino acid and the amino group of the next" },
              { id: "b", text: "Two phosphate groups" },
              { id: "c", text: "Two R-groups" },
              { id: "d", text: "The amino groups of two amino acids" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Peptide bond",
                statement: "Condensation joins a carboxyl group to an amino group, releasing water.",
              },
            ],
            steps: [
              { reasoning: "Peptide bonds form between carboxyl and amino groups.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Carboxyl and amino groups",
            commonErrors: ["Saying two amino groups join."],
          },
        },
        {
          id: "cial-b-u2-aa-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does a positive Biuret test indicate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Starch is present" },
              { id: "b", text: "Peptide bonds are present and the colour becomes purple" },
              { id: "c", text: "Lipid is present" },
              { id: "d", text: "Reducing sugar is present" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Biuret test",
                statement: "Biuret reagent gives a purple/violet colour when peptide bonds are present.",
              },
            ],
            steps: [
              { reasoning: "Purple colour indicates protein/peptide bonds.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Peptide bonds present; purple colour",
            commonErrors: ["Confusing Biuret with Benedict's test."],
          },
        },
        {
          id: "cial-b-u2-aa-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is required for hydrolysis of a peptide bond?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water" },
              { id: "b", text: "Oxygen" },
              { id: "c", text: "Light energy" },
              { id: "d", text: "Carbon dioxide" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hydrolysis",
                statement: "Hydrolysis uses water to break bonds; condensation releases water.",
              },
            ],
            steps: [
              { reasoning: "Hydrolysis adds water across the peptide bond.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Water",
            commonErrors: ["Reversing condensation and hydrolysis."],
          },
        },
        {
          id: "cial-b-u2-aa-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A polypeptide is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A lipid bilayer" },
              { id: "b", text: "A single amino acid" },
              { id: "c", text: "A chain of amino acids joined by peptide bonds" },
              { id: "d", text: "A chain of monosaccharides" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Polypeptide",
                statement: "A linear chain of amino acids linked by peptide bonds.",
              },
            ],
            steps: [
              { reasoning: "Polypeptide = many amino acids joined by peptide bonds.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Chain of amino acids",
            commonErrors: ["Confusing polypeptide with a single amino acid."],
          },
        },
        {
          id: "cial-b-u2-aa-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many water molecules are released when three amino acids condense to form a tripeptide?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0" },
              { id: "b", text: "1" },
              { id: "c", text: "2" },
              { id: "d", text: "3" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Condensation",
                statement: "Joining $n$ amino acids releases $n-1$ water molecules.",
              },
            ],
            steps: [
              { reasoning: "Three amino acids form two peptide bonds, releasing two water molecules.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 2",
            commonErrors: ["Thinking three amino acids release three water molecules."],
          },
        },
        {
          id: "cial-b-u2-aa-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A hexapeptide contains six amino acid residues. Calculate the number of peptide bonds and the number of water molecules released when it formed by condensation.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Polypeptide chain",
                statement: "A chain of $n$ amino acids has $n-1$ peptide bonds and releases $n-1$ water molecules.",
              },
            ],
            steps: [
              { reasoning: "Peptide bonds $=6-1=5$.", marks: 1, markCode: "M" },
              { reasoning: "Water released is also $6-1=5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 peptide bonds and 5 water molecules",
            commonErrors: ["Using six instead of five bonds."],
          },
        },
        {
          id: "cial-b-u2-aa-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the number of standard amino acids and the number of chemical groups directly attached to the central carbon of each amino acid.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 20 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Amino acid structure",
                statement: "There are 20 standard amino acids; the central carbon carries amino, carboxyl, hydrogen and R-group.",
              },
            ],
            steps: [
              { reasoning: "There are 20 standard amino acids.", marks: 1, markCode: "M" },
              { reasoning: "Four groups are attached to the central carbon.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 amino acids; 4 groups",
            commonErrors: ["Counting the central carbon itself as a group."],
          },
        },
        {
          id: "cial-b-u2-aa-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A pentapeptide is hydrolysed completely. How many peptide bonds are broken and how many water molecules are consumed?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hydrolysis",
                statement: "Complete hydrolysis of $n$ residues breaks $n-1$ peptide bonds using $n-1$ water molecules.",
              },
            ],
            steps: [
              { reasoning: "Five residues contain four peptide bonds.", marks: 1, markCode: "M" },
              { reasoning: "Each bond broken consumes one water molecule.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 peptide bonds and 4 water molecules",
            commonErrors: ["Counting five bonds in a five-residue chain."],
          },
        },
        {
          id: "cial-b-u2-aa-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A protein chain has 30 amino acid residues. How many peptide bonds join the residues in one chain?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 29 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Peptide bonds",
                statement: "Number of peptide bonds $=n-1$ for $n$ residues.",
              },
            ],
            steps: [
              { reasoning: "Thirty residues are joined in a linear chain.", marks: 1, markCode: "M" },
              { reasoning: "$30-1=29$ peptide bonds.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "29 peptide bonds",
            commonErrors: ["Answering 30 by counting residues instead of bonds."],
          },
        },
        {
          id: "cial-b-u2-aa-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The Biuret test uses two reagents: sodium hydroxide and copper(II) sulfate. How many reagent solutions are added in a standard Biuret test?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Biuret reagent",
                statement: "Biuret reagent contains sodium hydroxide and copper(II) sulfate.",
              },
            ],
            steps: [
              { reasoning: "The reagent is made from two components.", marks: 1, markCode: "M" },
              { reasoning: "Therefore 2 reagent solutions are used.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 reagent solutions",
            commonErrors: ["Counting the sample as a reagent."],
          },
        },
        {
          id: "cial-b-u2-aa-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why the R-groups of amino acids are important in determining the properties of a protein.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "R-group properties",
                statement: "Different R-groups have different charges, polarity and bonding ability, affecting folding and interactions.",
              },
            ],
            steps: [
              { reasoning: "The sequence of R-groups determines how the polypeptide folds.", marks: 1, markCode: "M" },
              { reasoning: "R-group interactions such as ionic, hydrophobic and disulfide bonds stabilise tertiary structure.", marks: 1, markCode: "M" },
              { reasoning: "The final 3D shape therefore depends on the amino acid sequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "R-groups control folding interactions and hence protein shape and function.",
            commonErrors: ["Saying all amino acids have identical properties."],
          },
        },
      ],
    },
    {
      id: "cial-b-u2-protein-structure",
      title: "Protein structure levels",
      skill:
        "Describe primary to quaternary structure and link structure to function.",
      lesson: {
        sections: [
          {
            heading: "Primary and secondary",
            body: "Primary = amino acid sequence (peptide bonds). Secondary = local folding: α-helix (coiled, H-bonds along chain) or β-pleated sheet (zigzag, H-bonds between strands).",
          },
          {
            heading: "Tertiary and quaternary",
            body: "Tertiary = 3D fold of one polypeptide — bonds between R-groups: disulfide bridges, ionic, hydrophobic interactions, H-bonds. Quaternary = multiple polypeptides assemble (e.g. haemoglobin = 4 chains).",
          },
          {
            heading: "Structure determines function",
            body: "Enzyme shape = active site fits substrate. Haemoglobin shape = binds oxygen. Denaturation (heat, pH) breaks tertiary/quaternary bonds — shape lost, function lost. Renaturation possible for some proteins.",
          },
        ],
        keyFormulas: [
          {
            name: "Protein structure",
            statement: "Primary→secondary→tertiary→quaternary; shape=function.",
          },
        ],
        workedExample: {
          problem: "What happens when an enzyme is denatured?",
          solution:
            "Heat/pH breaks bonds → tertiary structure unfolds → active site deforms → substrate can't bind → function lost.",
        },
      },
      questions: [
        {
          id: "cial-b-u2-ps-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What defines primary protein structure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hydrogen bonding" },
              { id: "b", text: "The linear amino acid sequence" },
              { id: "c", text: "The 3D folding" },
              { id: "d", text: "Multiple chains" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary structure",
                statement: "Linear sequence of amino acids.",
              },
            ],
            steps: [
              { reasoning: "Primary = sequence.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Linear amino acid sequence",
            commonErrors: ["Confusing with tertiary 3D shape."],
          },
        },
        {
          id: "cial-b-u2-ps-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What bonds stabilise tertiary protein structure?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tertiary bonds",
                statement:
                  "Disulfide bridges, ionic bonds, hydrophobic interactions, H-bonds between R-groups.",
              },
            ],
            steps: [
              {
                reasoning: "Any two of disulfide, ionic, hydrophobic, H-bonds.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct pair.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Disulfide bridges, ionic bonds, hydrophobic interactions, H-bonds.",
            commonErrors: ["Listing only peptide bonds — those are primary."],
          },
        },
        {
          id: "cial-b-u2-ps-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how denaturation affects protein function.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Denaturation",
                statement:
                  "Heat/pH disrupts bonds → 3D shape lost → function lost.",
              },
            ],
            steps: [
              {
                reasoning: "Heat/pH breaks tertiary bonds.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "3D shape unfolds.", marks: 1, markCode: "M" },
              {
                reasoning: "Active site deforms → can't bind substrate.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Function lost.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bonds break → shape lost → function lost.",
            commonErrors: ["Saying amino acid sequence changes."],
          },
        },
        {
          id: "cial-b-u2-ps-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Protein structure.",
          parts: [
            { label: "a", prompt: "Primary structure definition?", marks: 1 },
            { label: "b", prompt: "Tertiary stabilising bonds?", marks: 2 },
            { label: "c", prompt: "Denaturation effect?", marks: 3 },
            { label: "d", prompt: "Quaternary example?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Protein structure",
                statement: "Levels+structure=function+denaturation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Linear amino acid sequence.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Any two of disulfide/ionic/hydrophobic/H-bonds.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct pair.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Bonds break→shape lost.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Active site deforms.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Function lost.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Haemoglobin named.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Multiple chains explained.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "(a) sequence (b) bonds (c) denature→lose function (d) haemoglobin",
          },
        },
        {
          id: "cial-b-u2-ps-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which level of protein structure is the linear order of amino acids?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quaternary" },
              { id: "b", text: "Primary" },
              { id: "c", text: "Secondary" },
              { id: "d", text: "Tertiary" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary structure",
                statement: "Primary structure is the amino acid sequence of a polypeptide.",
              },
            ],
            steps: [
              { reasoning: "The sequence is primary structure.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Primary",
            commonErrors: ["Confusing sequence with 3D folding."],
          },
        },
        {
          id: "cial-b-u2-ps-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which structures are examples of secondary protein structure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The amino acid sequence" },
              { id: "b", text: "Multiple polypeptide chains" },
              { id: "c", text: "Disulfide bridges and ionic bonds" },
              { id: "d", text: "$\\alpha$-helix and $\\beta$-pleated sheet" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Secondary structure",
                statement: "Local folding into alpha-helices or beta-pleated sheets stabilised by hydrogen bonds.",
              },
            ],
            steps: [
              { reasoning: "Alpha-helix and beta-sheet are secondary structures.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\alpha$-helix and $\\beta$-pleated sheet",
            commonErrors: ["Naming tertiary bonds as secondary structure."],
          },
        },
        {
          id: "cial-b-u2-ps-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What defines quaternary protein structure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The order of amino acids" },
              { id: "b", text: "A single alpha-helical region" },
              { id: "c", text: "Several polypeptide chains assembled together" },
              { id: "d", text: "Hydrogen bonding within one chain" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quaternary structure",
                statement: "Quaternary structure involves association of two or more polypeptide chains.",
              },
            ],
            steps: [
              { reasoning: "Quaternary requires multiple chains.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Several polypeptide chains",
            commonErrors: ["Confusing quaternary with tertiary folding."],
          },
        },
        {
          id: "cial-b-u2-ps-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which change most directly causes an enzyme to lose its function through denaturation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increase in substrate concentration" },
              { id: "b", text: "Increase in amino acid sequence length" },
              { id: "c", text: "Formation of additional peptide bonds" },
              { id: "d", text: "Loss of tertiary shape so the active site deforms" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Denaturation",
                statement: "Denaturation disrupts bonds maintaining tertiary/quaternary shape, altering the active site.",
              },
            ],
            steps: [
              { reasoning: "Function depends on intact 3D shape.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Loss of tertiary shape",
            commonErrors: ["Saying the amino acid sequence changes."],
          },
        },
        {
          id: "cial-b-u2-ps-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which protein is a standard example of quaternary structure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Haemoglobin" },
              { id: "b", text: "Cellulose" },
              { id: "c", text: "A single polypeptide enzyme" },
              { id: "d", text: "Insulin only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Haemoglobin",
                statement: "Haemoglobin consists of four associated polypeptide chains.",
              },
            ],
            steps: [
              { reasoning: "Haemoglobin is the classic quaternary protein.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Haemoglobin",
            commonErrors: ["Choosing a single-chain protein."],
          },
        },
        {
          id: "cial-b-u2-ps-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why can two proteins have similar amino acid compositions but different functions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All proteins have identical shapes" },
              { id: "b", text: "Proteins never fold" },
              { id: "c", text: "Amino acid order is irrelevant" },
              { id: "d", text: "Different sequences produce different 3D shapes" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sequence-shape-function",
                statement: "Amino acid sequence determines folding and therefore function.",
              },
            ],
            steps: [
              { reasoning: "Sequence differences alter tertiary/quaternary shape.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Different sequences produce different shapes",
            commonErrors: ["Ignoring the role of folding."],
          },
        },
        {
          id: "cial-b-u2-ps-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many levels of protein structure are described from primary to quaternary?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Protein structure levels",
                statement: "Primary, secondary, tertiary and quaternary are the four levels.",
              },
            ],
            steps: [
              { reasoning: "List primary, secondary, tertiary, quaternary.", marks: 1, markCode: "M" },
              { reasoning: "There are four levels.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 levels",
            commonErrors: ["Counting only three levels."],
          },
        },
        {
          id: "cial-b-u2-ps-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A polypeptide has 14 amino acid residues. Calculate the number of peptide bonds in the chain.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 13 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Peptide bonds",
                statement: "Number of peptide bonds $=n-1$ for $n$ residues.",
              },
            ],
            steps: [
              { reasoning: "There are 14 residues in one chain.", marks: 1, markCode: "M" },
              { reasoning: "$14-1=13$ peptide bonds.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "13 peptide bonds",
            commonErrors: ["Answering 14."],
          },
        },
        {
          id: "cial-b-u2-ps-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Haemoglobin has four polypeptide chains. How many polypeptide chains are present in two haemoglobin molecules?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Haemoglobin",
                statement: "Each haemoglobin molecule contains four polypeptide chains.",
              },
            ],
            steps: [
              { reasoning: "One haemoglobin molecule has four chains.", marks: 1, markCode: "M" },
              { reasoning: "$4 \\times 2 = 8$ chains.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8 polypeptide chains",
            commonErrors: ["Counting haem groups instead of polypeptide chains."],
          },
        },
        {
          id: "cial-b-u2-ps-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Tertiary structure is stabilised by four main types of interaction between R-groups. How many types of interaction are named in the standard list?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tertiary stabilising interactions",
                statement: "Disulfide bridges, ionic bonds, hydrophobic interactions and hydrogen bonds stabilise tertiary structure.",
              },
            ],
            steps: [
              { reasoning: "List disulfide, ionic, hydrophobic and hydrogen-bond interactions.", marks: 1, markCode: "M" },
              { reasoning: "The standard list contains four interaction types.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 interaction types",
            commonErrors: ["Including peptide bonds, which determine primary structure."],
          },
        },
        {
          id: "cial-b-u2-ps-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An enzyme has an optimum temperature of $40^\\circ\\text{C}$. If the temperature rises to $70^\\circ\\text{C}$, how many degrees above the optimum is the temperature?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 30 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Temperature difference",
                statement: "Difference $=$ final temperature $-$ optimum temperature.",
              },
            ],
            steps: [
              { reasoning: "The optimum is $40^\\circ\\text{C}$ and the final temperature is $70^\\circ\\text{C}$.", marks: 1, markCode: "M" },
              { reasoning: "$70-40=30$ degrees above optimum.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30 degrees above optimum",
            commonErrors: ["Adding temperatures instead of subtracting."],
          },
        },
        {
          id: "cial-b-u2-ps-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how the three-dimensional shape of an enzyme is related to its function.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structure determines function",
                statement: "The active site shape complements the substrate, enabling specific binding and catalysis.",
              },
            ],
            steps: [
              { reasoning: "Folding creates a specific active site on the enzyme surface.", marks: 1, markCode: "M" },
              { reasoning: "The substrate fits the active site because their shapes are complementary.", marks: 1, markCode: "M" },
              { reasoning: "Correct binding allows formation of the enzyme-substrate complex and catalysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The 3D shape forms a complementary active site for substrate binding and catalysis.",
            commonErrors: ["Saying enzymes work with any substrate."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u2-proteins-notes",
      title: "Proteins — revision notes",
      summary:
        "Amino acids, peptide bonds, protein structure levels and denaturation.",
      sections: [
        {
          heading: "Amino acids",
          body: "20 standard types, differ in R-group. Condensation forms peptide bonds (water out). Biuret test → purple for protein.",
        },
        {
          heading: "Structure levels",
          body: "Primary=sequence; secondary=α-helix/β-sheet; tertiary=3D fold via R-group bonds; quaternary=multiple chains (haemoglobin).",
        },
        {
          heading: "Exam checklist",
          body: "Can you draw amino acid? Explain peptide bond formation? Name all four structure levels? Explain denaturation?",
        },
      ],
    },
  ],
};
