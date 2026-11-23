import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "apbio-u2-lesson-2-2",
  code: "2-2",
  title: "Molecular Genetics: DNA to Protein",
  goal: "I CAN explain DNA replication, transcription, translation, and gene regulation.",
  standards: ["GEN-2"],
  vocabulary: [
    { term: "DNA", definition: "Double helix of nucleotides (A-T, G-C) storing genetic information." },
    { term: "Replication", definition: "Semiconservative copying of DNA before cell division." },
    { term: "Transcription", definition: "RNA polymerase makes mRNA from a DNA template." },
    { term: "Translation", definition: "Ribosomes read mRNA codons to assemble amino acids into protein." },
    { term: "Codon", definition: "Three-nucleotide mRNA sequence specifying one amino acid." },
    { term: "Gene regulation", definition: "Control of when and how much a gene is expressed, e.g., the lac operon." },
  ],
  concepts: [
    {
      id: "apbio-u2-molecular-genetics",
      title: "From DNA to protein",
      skill: "Trace the flow of genetic information and its regulation.",
      lesson: {
        sections: [
          {
            heading: "Central dogma",
            body: "DNA $\\to$ RNA $\\to$ protein. **Replication** copies DNA semiconservatively (each strand templates a new one). **Transcription** uses RNA polymerase to make mRNA complementary to a gene's template strand. **Translation** at ribosomes reads mRNA codons via tRNA anticodons, building polypeptides.",
          },
          {
            heading: "Gene regulation",
            body: "Cells express only needed genes. In prokaryotes, **operons** like the lac operon use repressors/inducers: lactose present removes the repressor, turning genes ON. In eukaryotes, regulation is more complex — transcription factors, enhancers, and epigenetic marks control expression.",
          },
        ],
        keyFormulas: [
          { name: "Codon", statement: "3 mRNA nucleotides = 1 amino acid" },
          { name: "Start/stop", statement: "AUG = start (Met); UAA/UAG/UGA = stop" },
        ],
        workedExample: {
          problem: "mRNA codon sequence: AUG CCU GAC UAA. How many amino acids are coded (ignoring stop)?",
          solution: "AUG = Met (start), CCU = Pro, GAC = Asp, UAA = stop. Three amino acids coded before the stop codon.",
        },
      },
      questions: [
        {
          id: "apbio-u2-molecular-genetics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The enzyme that synthesizes mRNA during transcription is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "DNA polymerase"
                    },
                    {
                              "id": "b",
                              "text": "RNA polymerase"
                    },
                    {
                              "id": "c",
                              "text": "Ribosome"
                    },
                    {
                              "id": "d",
                              "text": "Helicase"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Transcription",
                              "statement": "RNA polymerase builds mRNA from the DNA template."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "RNA polymerase catalyzes transcription; DNA polymerase handles replication.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "RNA polymerase",
          "commonErrors": [
                    "Mixing up the polymerases' roles."
          ]
},
        },
        {
          id: "apbio-u2-molecular-genetics-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the lac operon, lactose acts as ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a repressor"
                    },
                    {
                              "id": "b",
                              "text": "an inducer that removes the repressor"
                    },
                    {
                              "id": "c",
                              "text": "a promoter"
                    },
                    {
                              "id": "d",
                              "text": "a terminator"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Lac operon",
                              "statement": "Lactose binds the repressor, freeing the operator so genes transcribe."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lactose is the inducer — its presence turns the operon ON by disabling the repressor.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Inducer",
          "commonErrors": [
                    "Thinking lactose directly activates RNA polymerase."
          ]
},
        },
        {
          id: "apbio-u2-molecular-genetics-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A gene has 300 nucleotides in its coding region. Ignoring start/stop, how many amino acids does it code for? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Amino acids",
                              "answer": 100
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Codon counting",
                              "statement": "3 nucleotides per codon."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$300 / 3 = 100$ codons $=$ up to $100$ amino acids (minus start/stop adjustments in reality).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$100$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$100$",
          "commonErrors": [
                    "Dividing by $2$ or $4$ instead of $3$."
          ]
},
        },
        {
          id: "apbio-u2-molecular-genetics-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Compare DNA replication and transcription in terms of template, product, enzyme, and when they occur.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Replication",
                              "statement": "Whole DNA, two strands, DNA polymerase, before division."
                    },
                    {
                              "kind": "comparison",
                              "name": "Transcription",
                              "statement": "One gene, mRNA, RNA polymerase, for protein synthesis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Replication: entire DNA molecule, both strands template, DNA polymerase, semiconservative, occurs in S phase.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Transcription: single gene, DNA template strand, RNA polymerase, produces mRNA, occurs continuously as needed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "All four aspects correctly contrasted.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Replication = DNA/DNA pol/S phase; transcription = gene/mRNA/RNA pol",
          "commonErrors": [
                    "Saying transcription uses DNA polymerase."
          ]
},
        },
      ],
    },
  ],
};
