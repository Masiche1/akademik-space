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
              { id: "a", text: "Peptide bond" },
              { id: "b", text: "Glycosidic bond" },
              { id: "c", text: "Hydrogen bond" },
              { id: "d", text: "Ionic bond" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "The linear amino acid sequence" },
              { id: "b", text: "The 3D folding" },
              { id: "c", text: "Multiple chains" },
              { id: "d", text: "Hydrogen bonding" },
            ],
            correctChoiceId: "a",
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
