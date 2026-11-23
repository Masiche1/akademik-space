import type { Lesson } from "../../../types.ts";

export const lesson45: Lesson = {
  id: "sci6-u4-lesson-4-5",
  code: "4-5",
  title: "Cells Review",
  goal: "I CAN use all cell and genetics skills.",
  standards: ["LS1.A", "LS1.B", "LS3.A"],
  vocabulary: [
    { term: "Cell", definition: "Basic unit." },
    { term: "Nucleus", definition: "Control." },
    { term: "Mitosis", definition: "Identical cells." },
    { term: "Meiosis", definition: "Sex cells." },
    { term: "Gene", definition: "DNA segment." },
    { term: "Trait", definition: "Characteristic." },
    { term: "Dominant", definition: "Masks." },
    { term: "Recessive", definition: "Hidden." },
  ],
  concepts: [
    {
      id: "sci6-u4-cells-review",
      title: "Cells review",
      skill: "Combine cell structure, division and genetics.",
      lesson: {
        sections: [
          {
            heading: "All cell skills",
            body: "Identify **cell parts**, explain **cell division** (mitosis/meiosis), and understand **genes/inheritance**.",
          },
          {
            heading: "Put it together",
            body: "Use all cell skills to understand life at the microscopic level.",
          },
        ],
        keyFormulas: [
          { name: "Cells", statement: "Structure + division + genetics = all skills." },
        ],
        workedExample: {
          problem: "Use all cell skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "sci6-u4-cells-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Cell skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only structure"
                    },
                    {
                              "id": "b",
                              "text": "structure, division, genetics"
                    },
                    {
                              "id": "c",
                              "text": "only division"
                    },
                    {
                              "id": "d",
                              "text": "only genetics"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "structure, division, genetics",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci6-u4-cells-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Label a cell, explain mitosis vs meiosis, and describe how a trait is inherited.",
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
                                                  "All cells",
                                                  "All three skills."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All cells",
                                                  "All three skills."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all three.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Nucleus/membrane/mitochondria; Mitosis=identical, Meiosis=sex cells; Dominant trait inherited from parent.'**"
          ]
},
        },
        {
          id: "sci6-u4-cells-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Cells are important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they're just science"
                    },
                    {
                              "id": "b",
                              "text": "they are the basic units of all living things"
                    },
                    {
                              "id": "c",
                              "text": "they're only in textbooks"
                    },
                    {
                              "id": "d",
                              "text": "they're optional"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Basic units of life."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Basic units of life.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "they are the basic units of all living things",
          "commonErrors": [
                    "Thinks they're useless."
          ]
},
        },
        {
          id: "sci6-u4-cells-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Cell\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Control."
                    },
                    {
                              "id": "b",
                              "text": "Basic unit."
                    },
                    {
                              "id": "c",
                              "text": "Identical cells."
                    },
                    {
                              "id": "d",
                              "text": "Sex cells."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Cell\" means Basic unit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Cell\" means Basic unit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Cell** = Basic unit.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u4-cells-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Nucleus\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Identical cells."
                    },
                    {
                              "id": "b",
                              "text": "Sex cells."
                    },
                    {
                              "id": "c",
                              "text": "DNA segment."
                    },
                    {
                              "id": "d",
                              "text": "Control."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Nucleus\" means Control."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Nucleus\" means Control.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Nucleus** = Control.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u4-cells-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mitosis\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sex cells."
                    },
                    {
                              "id": "b",
                              "text": "Identical cells."
                    },
                    {
                              "id": "c",
                              "text": "DNA segment."
                    },
                    {
                              "id": "d",
                              "text": "Characteristic."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Mitosis\" means Identical cells."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Mitosis\" means Identical cells.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Mitosis** = Identical cells.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u4-cells-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Meiosis\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "DNA segment."
                    },
                    {
                              "id": "b",
                              "text": "Characteristic."
                    },
                    {
                              "id": "c",
                              "text": "Masks."
                    },
                    {
                              "id": "d",
                              "text": "Sex cells."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Meiosis\" means Sex cells."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Meiosis\" means Sex cells.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Meiosis** = Sex cells.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u4-cells-review-q8",
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
                              "text": "Masks."
                    },
                    {
                              "id": "d",
                              "text": "Hidden."
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
      ],
    },
  ],
};
