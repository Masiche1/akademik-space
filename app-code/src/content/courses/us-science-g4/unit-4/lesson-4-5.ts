import type { Lesson } from "../../../types.ts";

export const lesson45: Lesson = {
  id: "sci4-u4-lesson-4-5",
  code: "4-5",
  title: "Inheritance Review",
  goal: "I CAN use all inheritance skills.",
  standards: ["LS3.A", "LS3.B"],
  vocabulary: [
    { term: "Trait", definition: "Characteristic." },
    { term: "Gene", definition: "Inheritance unit." },
    { term: "DNA", definition: "Genetic material." },
    { term: "Chromosome", definition: "DNA package." },
    { term: "Dominant", definition: "Stronger." },
    { term: "Recessive", definition: "Weaker." },
    { term: "Variation", definition: "Differences." },
    { term: "Adaptation", definition: "Helpful trait." },
  ],
  concepts: [
    {
      id: "sci4-u4-inheritance-review",
      title: "Inheritance review",
      skill: "Combine traits, genes, DNA and variation.",
      lesson: {
        sections: [
          {
            heading: "All inheritance skills",
            body: "Explain **traits**, **genes**, **DNA**, **dominant/recessive**, and **variation/adaptation**.",
          },
          {
            heading: "Put it together",
            body: "Use all inheritance skills to understand heredity.",
          },
        ],
        keyFormulas: [
          { name: "Inheritance", statement: "Traits + genes + DNA + variation = complete understanding." },
        ],
        workedExample: {
          problem: "Use all inheritance skills.",
          solution: "All skills = complete inheritance understanding.",
        },
      },
      questions: [
        {
          id: "sci4-u4-inheritance-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Inheritance skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only traits"
                    },
                    {
                              "id": "b",
                              "text": "traits, genes, DNA, variation"
                    },
                    {
                              "id": "c",
                              "text": "only genes"
                    },
                    {
                              "id": "d",
                              "text": "only DNA"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All inheritance skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All inheritance skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "traits, genes, DNA, variation",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci4-u4-inheritance-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Explain traits, genes, DNA, dominant/recessive, and variation with examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": [
                                        [
                                                  "skill",
                                                  "All inheritance",
                                                  "All skills."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All inheritance",
                                                  "All skills."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all skills.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Traits=characteristics; Genes=DNA segments; DNA=code; Dominant=shown; Variation=differences.'**"
          ]
},
        },
        {
          id: "sci4-u4-inheritance-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Inheritance is important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it's interesting"
                    },
                    {
                              "id": "b",
                              "text": "it explains how traits pass between generations"
                    },
                    {
                              "id": "c",
                              "text": "it's required"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Explains trait inheritance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains trait inheritance.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "it explains how traits pass between generations",
          "commonErrors": [
                    "Thinks it's just interesting."
          ]
},
        },
        {
          id: "sci4-u4-inheritance-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Trait\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Inheritance unit."
                    },
                    {
                              "id": "b",
                              "text": "Characteristic."
                    },
                    {
                              "id": "c",
                              "text": "Genetic material."
                    },
                    {
                              "id": "d",
                              "text": "DNA package."
                    }
          ],
          "correctChoiceId": "b"
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
          id: "sci4-u4-inheritance-review-q5",
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
                              "text": "DNA package."
                    },
                    {
                              "id": "c",
                              "text": "Stronger."
                    },
                    {
                              "id": "d",
                              "text": "Inheritance unit."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Gene\" means Inheritance unit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Gene\" means Inheritance unit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Gene** = Inheritance unit.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u4-inheritance-review-q6",
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
                              "text": "Genetic material."
                    },
                    {
                              "id": "c",
                              "text": "Stronger."
                    },
                    {
                              "id": "d",
                              "text": "Weaker."
                    }
          ],
          "correctChoiceId": "b"
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
          id: "sci4-u4-inheritance-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Chromosome\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Stronger."
                    },
                    {
                              "id": "b",
                              "text": "Weaker."
                    },
                    {
                              "id": "c",
                              "text": "Differences."
                    },
                    {
                              "id": "d",
                              "text": "DNA package."
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "sci4-u4-inheritance-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Dominant\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Weaker."
                    },
                    {
                              "id": "b",
                              "text": "Stronger."
                    },
                    {
                              "id": "c",
                              "text": "Differences."
                    },
                    {
                              "id": "d",
                              "text": "Helpful trait."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Dominant\" means Stronger."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Dominant\" means Stronger.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Dominant** = Stronger.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
