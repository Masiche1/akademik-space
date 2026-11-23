import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "sci4-u4-lesson-4-3",
  code: "4-3",
  title: "Variation in Traits",
  goal: "I CAN explain how variation occurs within populations.",
  standards: ["LS3.B"],
  vocabulary: [
    { term: "Variation", definition: "Differences between individuals." },
    { term: "Population", definition: "Group of same species." },
    { term: "Allele", definition: "Gene version." },
    { term: "Combination", definition: "Mix of genes." },
    { term: "Random", definition: "By chance." },
    { term: "Environment", definition: "Surroundings." },
    { term: "Adaptation", definition: "Helpful trait." },
    { term: "Survival", definition: "Staying alive." },
  ],
  concepts: [
    {
      id: "sci4-u4-variation",
      title: "Variation in traits",
      skill: "Explain how genetic and environmental factors create variation.",
      lesson: {
        sections: [
          {
            heading: "Why we're different",
            body: "**Variation** comes from **random** combinations of genes from parents plus **environmental** influences. No two people (except identical twins) have the same genes.",
          },
          {
            heading: "Adaptation",
            body: "Some variations are **adaptations** — traits that help survival. Natural selection favors helpful variations over generations.",
          },
        ],
        keyFormulas: [
          { name: "Variation", statement: "Gene combinations + environment = individual differences." },
        ],
        workedExample: {
          problem: "Why do siblings look different even with same parents?",
          solution: "They get **random combinations** of genes from both parents — each gets a different mix.",
        },
      },
      questions: [
        {
          id: "sci4-u4-variation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Variation' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "all the same"
                    },
                    {
                              "id": "b",
                              "text": "differences between individuals"
                    },
                    {
                              "id": "c",
                              "text": "copying"
                    },
                    {
                              "id": "d",
                              "text": "mutation only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Variation = differences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Variation = differences.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "differences between individuals",
          "commonErrors": [
                    "Thinks they're identical."
          ]
},
        },
        {
          id: "sci4-u4-variation-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Variation comes from...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only environment"
                    },
                    {
                              "id": "b",
                              "text": "gene combinations + environment"
                    },
                    {
                              "id": "c",
                              "text": "only genes"
                    },
                    {
                              "id": "d",
                              "text": "only chance"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Genes + environment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Genes + environment.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "gene combinations + environment",
          "commonErrors": [
                    "Attributes to one cause."
          ]
},
        },
        {
          id: "sci4-u4-variation-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Explain why identical twins can have different fingerprints even though they share genes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Variation",
                              "statement": "Gene + environment explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains both factors.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Same genes but environment in womb affects development -> different fingerprints.'**",
          "commonErrors": [
                    "Only genes.",
                    "Only environment."
          ]
},
        },
        {
          id: "sci4-u4-variation-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'adaptation' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "any trait"
                    },
                    {
                              "id": "b",
                              "text": "a trait that helps survival"
                    },
                    {
                              "id": "c",
                              "text": "a mutation"
                    },
                    {
                              "id": "d",
                              "text": "a gene"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Adaptation = helps survival."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Adaptation = helps survival.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a trait that helps survival",
          "commonErrors": [
                    "Confuses with any trait."
          ]
},
        },
        {
          id: "sci4-u4-variation-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe how variation helps a species survive in changing environments. Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Variation",
                              "statement": "Survival explanation + example."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains survival benefit.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives example.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Some beetles are darker; in polluted areas dark beetles survive better (camouflage).'**",
          "commonErrors": [
                    "No survival link.",
                    "No example."
          ]
},
        },
        {
          id: "sci4-u4-variation-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Variation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Group of same species."
                    },
                    {
                              "id": "b",
                              "text": "Differences between individuals."
                    },
                    {
                              "id": "c",
                              "text": "Gene version."
                    },
                    {
                              "id": "d",
                              "text": "Mix of genes."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Variation\" means Differences between individuals."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Variation\" means Differences between individuals.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Variation** = Differences between individuals.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u4-variation-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Population\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Gene version."
                    },
                    {
                              "id": "b",
                              "text": "Mix of genes."
                    },
                    {
                              "id": "c",
                              "text": "By chance."
                    },
                    {
                              "id": "d",
                              "text": "Group of same species."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Population\" means Group of same species."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Population\" means Group of same species.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Population** = Group of same species.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u4-variation-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Allele\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Mix of genes."
                    },
                    {
                              "id": "b",
                              "text": "Gene version."
                    },
                    {
                              "id": "c",
                              "text": "By chance."
                    },
                    {
                              "id": "d",
                              "text": "Surroundings."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Allele\" means Gene version."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Allele\" means Gene version.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Allele** = Gene version.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
