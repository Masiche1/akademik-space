import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "bio11-u2-lesson-2-1",
  code: "2-1",
  title: "DNA and Genes",
  goal: "I CAN explain DNA structure, genes and protein synthesis.",
  standards: ["HS-LS1-1", "HS-LS3-1"],
  vocabulary: [
    { term: "DNA", definition: "Genetic material: double helix." },
    { term: "Gene", definition: "DNA segment coding for trait." },
    { term: "Allele", definition: "Gene variant." },
    { term: "Chromosome", definition: "DNA + protein package." },
    { term: "Mutation", definition: "DNA sequence change." },
  ],
  concepts: [
    {
      id: "bio11-u2-dna-genes",
      title: "DNA and genes",
      skill: "Explain DNA structure and gene function.",
      lesson: {
        sections: [
          {
            heading: "DNA structure",
            body: "DNA is a double helix of nucleotides (A-T, G-C base pairs). Genes are DNA segments coding for proteins. Chromosomes package DNA; humans have 23 pairs. Mutations are changes in DNA sequence — some harmful, some neutral, rarely beneficial.",
          },
          {
            heading: "Protein synthesis",
            body: "DNA → RNA (transcription in nucleus) → protein (translation at ribosome). The sequence of nucleotide bases determines the amino acid sequence of the protein.",
          },
        ],
        keyFormulas: [
          { name: "Base pairs", statement: "A-T, G-C." },
          { name: "Gene", statement: "Protein-coding DNA." },
          { name: "Mutation", statement: "Sequence change." },
        ],
        workedExample: {
          problem: "What does a gene actually code for?",
          solution: "A protein — the gene's nucleotide sequence determines the protein's amino acid sequence.",
        },
      },
      questions: [
        {
          id: "bio11-u2-dna-genes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "DNA's shape is a ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "single strand"
                    },
                    {
                              "id": "b",
                              "text": "double helix"
                    },
                    {
                              "id": "c",
                              "text": "triangle"
                    },
                    {
                              "id": "d",
                              "text": "flat sheet"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "DNA",
                              "statement": "Double helix structure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "DNA forms a double helix with base-paired strands.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** double helix",
          "commonErrors": [
                    "Thinking it's single-stranded."
          ]
},
        },
        {
          id: "bio11-u2-dna-genes-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A gene codes for ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a chromosome"
                    },
                    {
                              "id": "b",
                              "text": "a protein"
                    },
                    {
                              "id": "c",
                              "text": "a cell"
                    },
                    {
                              "id": "d",
                              "text": "an organ"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Gene",
                              "statement": "Codes for protein via RNA."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Genes code for proteins — the DNA sequence determines amino acids.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** a protein",
          "commonErrors": [
                    "Thinking genes code for traits directly."
          ]
},
        },
        {
          id: "bio11-u2-dna-genes-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Humans have 23 pairs of chromosomes. How many total chromosomes?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Chromosomes",
                              "answer": 46
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Chromosomes",
                              "statement": "$23 \\times 2 = 46$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$23 \\times 2 = 46$ chromosomes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$46$",
          "commonErrors": [
                    "Answering 23 instead of 46."
          ]
},
        },
        {
          id: "bio11-u2-dna-genes-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain the flow of genetic information from DNA to protein.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Protein synthesis",
                              "statement": "DNA → RNA → protein."
                    },
                    {
                              "kind": "technique",
                              "name": "Sequence",
                              "statement": "Transcription then translation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "In the nucleus, DNA is transcribed into mRNA (transcription). The mRNA travels to a ribosome where codons are translated into amino acids, building a protein.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both steps named and located correctly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**DNA →(transcription)→ RNA →(translation)→ protein.**",
          "commonErrors": [
                    "Reversing transcription and translation."
          ]
},
        },
      ],
    },
  ],
};
