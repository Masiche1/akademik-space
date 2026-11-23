import type { Lesson } from "../../../types.ts";

export const lesson44: Lesson = {
  id: "sci4-u4-lesson-4-4",
  code: "4-4",
  title: "Punnett Squares",
  goal: "I CAN use a Punnett square to predict trait inheritance.",
  standards: ["LS3.B"],
  vocabulary: [
    { term: "Punnett square", definition: "Prediction grid." },
    { term: "Allele", definition: "Gene version." },
    { term: "Dominant", definition: "Stronger trait." },
    { term: "Recessive", definition: "Weaker trait." },
    { term: "Probability", definition: "Chance of outcome." },
    { term: "Homozygous", definition: "Same alleles." },
    { term: "Heterozygous", definition: "Different alleles." },
    { term: "Offspring", definition: "Next generation." },
  ],
  concepts: [
    {
      id: "sci4-u4-punnett-squares",
      title: "Punnett squares",
      skill: "Use a Punnett square to predict possible trait combinations in offspring.",
      lesson: {
        sections: [
          {
            heading: "Predict traits",
            body: "A **Punnett square** shows all possible **offspring** combinations. Each parent contributes one **allele** (gene version) for each trait.",
          },
          {
            heading: "Example",
            body: "Brown eyes (B) dominant, blue (b) recessive. BB x bb -> all Bb (brown). Bb x Bb -> 1 BB, 2 Bb, 1 bb (75% brown, 25% blue).",
          },
        ],
        keyFormulas: [
          { name: "Punnett", statement: "Parent alleles -> possible offspring combinations -> probability." },
        ],
        workedExample: {
          problem: "Two Bb parents have a child. What's the chance of blue eyes (bb)?",
          solution: "Bb x Bb -> BB, Bb, Bb, bb -> 1/4 = 25% chance of bb (blue eyes).",
        },
      },
      questions: [
        {
          id: "sci4-u4-punnett-squares-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'Punnett square' is used to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "count cells"
                    },
                    {
                              "id": "b",
                              "text": "predict trait combinations"
                    },
                    {
                              "id": "c",
                              "text": "draw DNA"
                    },
                    {
                              "id": "d",
                              "text": "name species"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Predict traits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Predict traits.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "predict trait combinations",
          "commonErrors": [
                    "Wrong purpose."
          ]
},
        },
        {
          id: "sci4-u4-punnett-squares-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a Punnett square, each parent contributes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "two alleles"
                    },
                    {
                              "id": "b",
                              "text": "one allele per trait"
                    },
                    {
                              "id": "c",
                              "text": "no alleles"
                    },
                    {
                              "id": "d",
                              "text": "all alleles"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "One allele per trait."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "One allele per trait.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "one allele per trait",
          "commonErrors": [
                    "Wrong contribution."
          ]
},
        },
        {
          id: "sci4-u4-punnett-squares-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Set up a Punnett square for BB x bb. What are all possible offspring genotypes?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Punnett",
                              "statement": "Genotype predictions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sets up square.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Lists genotypes.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**BB x bb -> all Bb (100%).**",
          "commonErrors": [
                    "Wrong genotypes.",
                    "Missing setup."
          ]
},
        },
        {
          id: "sci4-u4-punnett-squares-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Heterozygous' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "same alleles"
                    },
                    {
                              "id": "b",
                              "text": "different alleles"
                    },
                    {
                              "id": "c",
                              "text": "no alleles"
                    },
                    {
                              "id": "d",
                              "text": "recessive only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Heterozygous = different."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Heterozygous = different.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "different alleles",
          "commonErrors": [
                    "Confuses with homozygous."
          ]
},
        },
        {
          id: "sci4-u4-punnett-squares-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Two heterozygous parents (Bb x Bb) have a child. What's the probability of each genotype? Show the Punnett square.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Punnett",
                              "statement": "Probability calculation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Shows square.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives probabilities.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**BB: 1/4; Bb: 2/4; bb: 1/4 (25% each for BB and bb, 50% Bb).**",
          "commonErrors": [
                    "Wrong probabilities.",
                    "No square."
          ]
},
        },
        {
          id: "sci4-u4-punnett-squares-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Punnett square\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Gene version."
                    },
                    {
                              "id": "b",
                              "text": "Prediction grid."
                    },
                    {
                              "id": "c",
                              "text": "Stronger trait."
                    },
                    {
                              "id": "d",
                              "text": "Weaker trait."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Punnett square\" means Prediction grid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Punnett square\" means Prediction grid.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Punnett square** = Prediction grid.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u4-punnett-squares-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Allele\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Stronger trait."
                    },
                    {
                              "id": "b",
                              "text": "Weaker trait."
                    },
                    {
                              "id": "c",
                              "text": "Chance of outcome."
                    },
                    {
                              "id": "d",
                              "text": "Gene version."
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "sci4-u4-punnett-squares-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Dominant\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Weaker trait."
                    },
                    {
                              "id": "b",
                              "text": "Stronger trait."
                    },
                    {
                              "id": "c",
                              "text": "Chance of outcome."
                    },
                    {
                              "id": "d",
                              "text": "Same alleles."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Dominant\" means Stronger trait."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Dominant\" means Stronger trait.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Dominant** = Stronger trait.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
