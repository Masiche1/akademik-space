import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "sci6-u4-lesson-4-3",
  code: "4-3",
  title: "Genes and Inheritance",
  goal: "I CAN explain basic genetics and inheritance.",
  standards: ["LS3.A"],
  vocabulary: [
    { term: "Gene", definition: "DNA segment." },
    { term: "Trait", definition: "Characteristic." },
    { term: "Dominant", definition: "Masks other." },
    { term: "Recessive", definition: "Hidden by dominant." },
    { term: "Allele", definition: "Gene version." },
    { term: "Genotype", definition: "Gene combo." },
    { term: "Phenotype", definition: "Visible trait." },
    { term: "Heredity", definition: "Passing traits." },
  ],
  concepts: [
    {
      id: "sci6-u4-genes-inheritance",
      title: "Genes and inheritance",
      skill: "Explain how traits are inherited through genes and alleles.",
      lesson: {
        sections: [
          {
            heading: "Genes",
            body: "A **gene** is a segment of DNA that codes for a trait. **Alleles** are versions of a gene. **Dominant** alleles mask **recessive** ones.",
          },
          {
            heading: "Inheritance",
            body: "Traits are **inherited** from parents. **Genotype** = gene combination (e.g., Bb); **phenotype** = visible trait (e.g., brown eyes).",
          },
        ],
        keyFormulas: [
          { name: "Inheritance", statement: "Genes + alleles + dominant/recessive = traits passed down." },
        ],
        workedExample: {
          problem: "Brown eyes (B) is dominant, blue eyes (b) is recessive. If both parents are Bb, what are possible offspring genotypes?",
          solution: "**BB, Bb, bb — 75% chance brown eyes (BB or Bb), 25% blue eyes (bb).**",
        },
      },
      questions: [
        {
          id: "sci6-u4-genes-inheritance-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'gene' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a trait"
                    },
                    {
                              "id": "b",
                              "text": "a segment of DNA"
                    },
                    {
                              "id": "c",
                              "text": "an allele"
                    },
                    {
                              "id": "d",
                              "text": "a chromosome"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "DNA segment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "DNA segment.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a segment of DNA",
          "commonErrors": [
                    "Confuses with trait."
          ]
},
        },
        {
          id: "sci6-u4-genes-inheritance-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Dominant' allele means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "hidden"
                    },
                    {
                              "id": "b",
                              "text": "masks other alleles"
                    },
                    {
                              "id": "c",
                              "text": "weaker"
                    },
                    {
                              "id": "d",
                              "text": "recessive"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Masks others."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Masks others.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "masks other alleles",
          "commonErrors": [
                    "Confuses with recessive."
          ]
},
        },
        {
          id: "sci6-u4-genes-inheritance-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Explain how a dominant trait (like brown eyes) is inherited. If two parents both carry the recessive allele, what are the chances of a recessive trait appearing?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Genes",
                              "statement": "Inheritance explained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains inheritance.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Dominant masks recessive; if both parents are carriers (Bb), 25% chance of recessive trait (bb).**",
          "commonErrors": [
                    "Cannot explain.",
                    "Wrong chance."
          ]
},
        },
        {
          id: "sci6-u4-genes-inheritance-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Genotype' refers to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "visible trait"
                    },
                    {
                              "id": "b",
                              "text": "gene combination"
                    },
                    {
                              "id": "c",
                              "text": "physical appearance"
                    },
                    {
                              "id": "d",
                              "text": "eye color"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Gene combination."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gene combination.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "gene combination",
          "commonErrors": [
                    "Confuses with phenotype."
          ]
},
        },
        {
          id: "sci6-u4-genes-inheritance-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain the difference between genotype and phenotype, giving an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Genes",
                              "statement": "Difference + example."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains difference.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives example.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Genotype: gene combo (Bb); Phenotype: visible trait (brown eyes); Example: Bb genotype -> brown eyes phenotype.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No example."
          ]
},
        },
        {
          id: "sci6-u4-genes-inheritance-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Gene\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Characteristic."
                    },
                    {
                              "id": "b",
                              "text": "DNA segment."
                    },
                    {
                              "id": "c",
                              "text": "Masks other."
                    },
                    {
                              "id": "d",
                              "text": "Hidden by dominant."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Gene\" means DNA segment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Gene\" means DNA segment.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Gene** = DNA segment.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u4-genes-inheritance-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Trait\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Masks other."
                    },
                    {
                              "id": "b",
                              "text": "Hidden by dominant."
                    },
                    {
                              "id": "c",
                              "text": "Gene version."
                    },
                    {
                              "id": "d",
                              "text": "Characteristic."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Trait\" means Characteristic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Trait\" means Characteristic.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Trait** = Characteristic.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u4-genes-inheritance-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Dominant\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hidden by dominant."
                    },
                    {
                              "id": "b",
                              "text": "Masks other."
                    },
                    {
                              "id": "c",
                              "text": "Gene version."
                    },
                    {
                              "id": "d",
                              "text": "Gene combo."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Dominant\" means Masks other."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Dominant\" means Masks other.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Dominant** = Masks other.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
