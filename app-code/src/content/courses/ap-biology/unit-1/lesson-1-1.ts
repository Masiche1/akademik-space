import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "apbio-u1-lesson-1-1",
  code: "1-1",
  title: "Macromolecules",
  goal: "I CAN identify the four classes of biological macromolecules and their building blocks.",
  standards: ["BIOCH-1"],
  vocabulary: [
    { term: "Monomer", definition: "A single building-block molecule, e.g., a monosaccharide or amino acid." },
    { term: "Polymer", definition: "A chain of many monomers linked by dehydration synthesis." },
    { term: "Dehydration synthesis", definition: "Joining monomers by removing a water molecule." },
    { term: "Hydrolysis", definition: "Breaking polymers apart by adding water." },
    { term: "Functional group", definition: "A specific atom arrangement (e.g., $-OH$, $-COOH$) that determines chemical reactivity." },
  ],
  concepts: [
    {
      id: "apbio-u1-macromolecules",
      title: "The four macromolecules",
      skill: "Classify macromolecules by structure, monomers, and function.",
      lesson: {
        sections: [
          {
            heading: "Carbohydrates",
            body: "Sugars and starches built from monosaccharides ($C_6H_{12}O_6$ glucose). Monosaccharides join by glycosidic bonds into disaccharides (sucrose) and polysaccharides (starch, glycogen, cellulose). Functions: quick energy (glucose), energy storage (glycogen/starch), structure (cellulose).",
          },
          {
            heading: "Proteins, lipids, nucleic acids",
            body: "Proteins are amino-acid polymers folded into shapes that determine function (enzymes, structure, transport). Lipids (fats, phospholipids, steroids) are hydrophobic energy stores and membrane components. Nucleic acids (DNA, RNA) are nucleotide polymers storing genetic information.",
          },
        ],
        keyFormulas: [
          { name: "Dehydration synthesis", statement: "Monomers $+$ remove $H_2O \\to$ polymer" },
          { name: "Hydrolysis", statement: "Polymer $+ H_2O \\to$ monomers" },
        ],
        workedExample: {
          problem: "A polymer breaks into monomers when water is added. What process is this and what class of molecule is likely involved?",
          solution: "Adding water to split a polymer is **hydrolysis**. Any of the four macromolecule classes could undergo it, but the reaction itself is defined by water breaking bonds.",
        },
      },
      questions: [
        {
          id: "apbio-u1-macromolecules-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The monomer of a protein is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a monosaccharide"
                    },
                    {
                              "id": "b",
                              "text": "an amino acid"
                    },
                    {
                              "id": "c",
                              "text": "a nucleotide"
                    },
                    {
                              "id": "d",
                              "text": "a fatty acid"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Protein structure",
                              "statement": "Proteins are polymers of amino acids."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Amino acids link by peptide bonds to form polypeptides/proteins.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Amino acid",
          "commonErrors": [
                    "Confusing protein monomers with nucleotide or sugar monomers."
          ]
},
        },
        {
          id: "apbio-u1-macromolecules-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Cellulose is a polysaccharide made of glucose monomers. Its primary biological role is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "energy storage"
                    },
                    {
                              "id": "b",
                              "text": "structural support in plant cell walls"
                    },
                    {
                              "id": "c",
                              "text": "genetic information"
                    },
                    {
                              "id": "d",
                              "text": "enzymatic catalysis"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Polysaccharide function",
                              "statement": "Cellulose's $\\beta$-linkages make it rigid and indigestible to most animals."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cellulose provides structural rigidity in plant cell walls.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Structural support",
          "commonErrors": [
                    "Assuming all glucose polymers serve as energy storage."
          ]
},
        },
        {
          id: "apbio-u1-macromolecules-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A disaccharide forms when two monosaccharides join. How many water molecules are released per disaccharide formed? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Water molecules",
                              "answer": 1
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Dehydration synthesis",
                              "statement": "Each bond formation releases one $H_2O$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two monomers $\\to$ one disaccharide releases exactly $1$ water molecule.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: $1$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$1$",
          "commonErrors": [
                    "Thinking two waters are released (one per monomer)."
          ]
},
        },
        {
          id: "apbio-u1-macromolecules-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why lipids are hydrophobic and describe two biological roles of phospholipids in cells.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Hydrophobicity",
                              "statement": "Nonpolar hydrocarbon tails repel water."
                    },
                    {
                              "kind": "structure",
                              "name": "Phospholipid bilayer",
                              "statement": "Amphipathic molecules self-assemble with heads out, tails in."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lipids' long hydrocarbon chains are nonpolar, so they do not dissolve in water — hydrophobic.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Phospholipids form the bilayer of cell membranes (barrier + fluid mosaic) and create compartments like organelle boundaries.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Two distinct roles stated clearly.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Hydrophobic tails; membrane bilayer and compartmentalization",
          "commonErrors": [
                    "Saying lipids are hydrophilic or ignoring the amphipathic structure."
          ]
},
        },
      ],
    },
  ],
};
