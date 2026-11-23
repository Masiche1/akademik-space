import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "sci5-u3-lesson-3-5",
  code: "3-5",
  title: "Cell and Life Cycle Review",
  goal: "I CAN use all cell and life cycle skills.",
  standards: ["LS1.A", "LS1.B", "LS1.C"],
  vocabulary: [
    { term: "Cell", definition: "Basic unit." },
    { term: "Nucleus", definition: "Control center." },
    { term: "Photosynthesis", definition: "Making food." },
    { term: "Respiration", definition: "Energy." },
    { term: "Life cycle", definition: "Stages." },
    { term: "Metamorphosis", definition: "Change." },
    { term: "Stage", definition: "Phase." },
    { term: "Organism", definition: "Living thing." },
  ],
  concepts: [
    {
      id: "sci5-u3-cell-life-review",
      title: "Cell and life cycle review",
      skill: "Combine cell structure, function and life cycles.",
      lesson: {
        sections: [
          {
            heading: "All cell/life skills",
            body: "Describe **cell structure**, **cell function** (respiration, photosynthesis), and **life cycles**.",
          },
          {
            heading: "Put it together",
            body: "Use all cell/life skills for understanding organisms.",
          },
        ],
        keyFormulas: [
          { name: "Cell/life", statement: "Structure + function + life cycle = all skills." },
        ],
        workedExample: {
          problem: "Use all cell and life cycle skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "sci5-u3-cell-life-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Cell/life skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only structure"
                    },
                    {
                              "id": "b",
                              "text": "structure, function, life cycles"
                    },
                    {
                              "id": "c",
                              "text": "only function"
                    },
                    {
                              "id": "d",
                              "text": "only cycles"
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
          "finalAnswer": "structure, function, life cycles",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci5-u3-cell-life-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Label a cell, describe its function, and draw/describe an organism's life cycle.",
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
                                                  "All cell/life",
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
                                                  "All cell/life",
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
                    "**e.g., 'Cell parts labeled; function: respiration; Life cycle: egg->larva->adult.'**"
          ]
},
        },
        {
          id: "sci5-u3-cell-life-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Understanding cells and life cycles helps us...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only memorize"
                    },
                    {
                              "id": "b",
                              "text": "understand how living things work and grow"
                    },
                    {
                              "id": "c",
                              "text": "only test"
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
                              "statement": "Understand living things."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Understand living things.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "understand how living things work and grow",
          "commonErrors": [
                    "Thinks it's useless."
          ]
},
        },
        {
          id: "sci5-u3-cell-life-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Cell\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Control center."
                    },
                    {
                              "id": "b",
                              "text": "Basic unit."
                    },
                    {
                              "id": "c",
                              "text": "Making food."
                    },
                    {
                              "id": "d",
                              "text": "Energy."
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
          id: "sci5-u3-cell-life-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Nucleus\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Making food."
                    },
                    {
                              "id": "b",
                              "text": "Energy."
                    },
                    {
                              "id": "c",
                              "text": "Stages."
                    },
                    {
                              "id": "d",
                              "text": "Control center."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Nucleus\" means Control center."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Nucleus\" means Control center.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Nucleus** = Control center.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u3-cell-life-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Photosynthesis\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Energy."
                    },
                    {
                              "id": "b",
                              "text": "Making food."
                    },
                    {
                              "id": "c",
                              "text": "Stages."
                    },
                    {
                              "id": "d",
                              "text": "Change."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Photosynthesis\" means Making food."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Photosynthesis\" means Making food.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Photosynthesis** = Making food.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u3-cell-life-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Respiration\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Stages."
                    },
                    {
                              "id": "b",
                              "text": "Change."
                    },
                    {
                              "id": "c",
                              "text": "Phase."
                    },
                    {
                              "id": "d",
                              "text": "Energy."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Respiration\" means Energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Respiration\" means Energy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Respiration** = Energy.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u3-cell-life-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Life cycle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Change."
                    },
                    {
                              "id": "b",
                              "text": "Stages."
                    },
                    {
                              "id": "c",
                              "text": "Phase."
                    },
                    {
                              "id": "d",
                              "text": "Living thing."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Life cycle\" means Stages."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Life cycle\" means Stages.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Life cycle** = Stages.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
