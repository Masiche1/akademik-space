import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "sci4-u4-lesson-4-2",
  code: "4-2",
  title: "Genes and DNA",
  goal: "I CAN explain what genes and DNA are and how they work.",
  standards: ["LS3.A"],
  vocabulary: [
    { term: "Gene", definition: "Unit of inheritance." },
    { term: "DNA", definition: "Genetic material." },
    { term: "Chromosome", definition: "DNA package." },
    { term: "Nucleus", definition: "Where DNA is." },
    { term: "Code", definition: "Instructions for traits." },
    { term: "Sequence", definition: "Order of bases." },
    { term: "Copy", definition: "Duplicate DNA." },
    { term: "Mutation", definition: "Change in DNA." },
  ],
  concepts: [
    {
      id: "sci4-u4-genes-dna",
      title: "Genes and DNA",
      skill: "Explain that genes are made of DNA and carry instructions for traits.",
      lesson: {
        sections: [
          {
            heading: "DNA is the code",
            body: "**DNA** is the **genetic material** inside the **nucleus**. **Genes** are segments of DNA that carry **instructions** (codes) for **traits**.",
          },
          {
            heading: "Chromosomes",
            body: "DNA is packaged into **chromosomes**. Humans have 46 chromosomes (23 pairs). Each gene has a specific location.",
          },
        ],
        keyFormulas: [
          { name: "DNA", statement: "Genes on chromosomes = instructions for traits." },
        ],
        workedExample: {
          problem: "Where is DNA found and what does it do?",
          solution: "DNA is in the **nucleus**, packaged in **chromosomes**. It carries **genes** that code for traits.",
        },
      },
      questions: [
        {
          id: "sci4-u4-genes-dna-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "DNA is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a cell part"
                    },
                    {
                              "id": "b",
                              "text": "genetic material carrying instructions"
                    },
                    {
                              "id": "c",
                              "text": "a protein"
                    },
                    {
                              "id": "d",
                              "text": "a trait"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "DNA = genetic material."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "DNA = genetic material.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "genetic material carrying instructions",
          "commonErrors": [
                    "Confuses with other parts."
          ]
},
        },
        {
          id: "sci4-u4-genes-dna-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Chromosomes' are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "genes"
                    },
                    {
                              "id": "b",
                              "text": "packages of DNA"
                    },
                    {
                              "id": "c",
                              "text": "cells"
                    },
                    {
                              "id": "d",
                              "text": "proteins"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Chromosomes = DNA packages."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Chromosomes = DNA packages.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "packages of DNA",
          "commonErrors": [
                    "Confuses with genes."
          ]
},
        },
        {
          id: "sci4-u4-genes-dna-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Explain the relationship between DNA, genes and chromosomes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Genes/DNA",
                              "statement": "Hierarchy explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains hierarchy.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'DNA is packaged into chromosomes; genes are segments of DNA coding for traits.'**",
          "commonErrors": [
                    "Cannot explain.",
                    "Wrong relationships."
          ]
},
        },
        {
          id: "sci4-u4-genes-dna-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'mutation' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "normal DNA"
                    },
                    {
                              "id": "b",
                              "text": "a change in DNA sequence"
                    },
                    {
                              "id": "c",
                              "text": "a gene"
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
                              "statement": "Mutation = DNA change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mutation = DNA change.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a change in DNA sequence",
          "commonErrors": [
                    "Confuses with normal DNA."
          ]
},
        },
        {
          id: "sci4-u4-genes-dna-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how DNA codes for a trait. Use eye color as an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Genes/DNA",
                              "statement": "DNA -> gene -> trait."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains coding.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Uses example.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'DNA gene for eye color has instructions; different versions (alleles) produce brown vs blue.'**",
          "commonErrors": [
                    "Cannot explain.",
                    "No example."
          ]
},
        },
        {
          id: "sci4-u4-genes-dna-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Gene\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Genetic material."
                    },
                    {
                              "id": "b",
                              "text": "Unit of inheritance."
                    },
                    {
                              "id": "c",
                              "text": "DNA package."
                    },
                    {
                              "id": "d",
                              "text": "Where DNA is."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Gene\" means Unit of inheritance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Gene\" means Unit of inheritance.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Gene** = Unit of inheritance.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u4-genes-dna-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"DNA\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "DNA package."
                    },
                    {
                              "id": "b",
                              "text": "Where DNA is."
                    },
                    {
                              "id": "c",
                              "text": "Instructions for traits."
                    },
                    {
                              "id": "d",
                              "text": "Genetic material."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"DNA\" means Genetic material."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"DNA\" means Genetic material.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**DNA** = Genetic material.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u4-genes-dna-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Chromosome\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where DNA is."
                    },
                    {
                              "id": "b",
                              "text": "DNA package."
                    },
                    {
                              "id": "c",
                              "text": "Instructions for traits."
                    },
                    {
                              "id": "d",
                              "text": "Order of bases."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Chromosome\" means DNA package."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Chromosome\" means DNA package.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Chromosome** = DNA package.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
