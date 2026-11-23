import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "sci4-u3-lesson-3-5",
  code: "3-5",
  title: "Cells and Living Things Review",
  goal: "I CAN use all cell and organism skills.",
  standards: ["LS1.A"],
  vocabulary: [
    { term: "Cell", definition: "Basic unit." },
    { term: "Nucleus", definition: "Control center." },
    { term: "Membrane", definition: "Boundary." },
    { term: "Mitochondria", definition: "Energy." },
    { term: "Tissue", definition: "Group of cells." },
    { term: "Organ", definition: "Group of tissues." },
    { term: "System", definition: "Group of organs." },
    { term: "Organism", definition: "Living thing." },
  ],
  concepts: [
    {
      id: "sci4-u3-cell-review",
      title: "Cells and living things review",
      skill: "Combine cell basics, functions and organization levels.",
      lesson: {
        sections: [
          {
            heading: "All cell skills",
            body: "Explain **cells**, their **parts and functions**, and how they organize into **tissues -> organs -> systems -> organisms**.",
          },
          {
            heading: "Put it together",
            body: "Use all cell skills to understand living things.",
          },
        ],
        keyFormulas: [
          { name: "Cells", statement: "Basics + functions + organization = complete understanding." },
        ],
        workedExample: {
          problem: "Use all cell skills.",
          solution: "All skills = complete cell understanding.",
        },
      },
      questions: [
        {
          id: "sci4-u3-cell-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Cell skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only cells"
                    },
                    {
                              "id": "b",
                              "text": "cells, functions, organization"
                    },
                    {
                              "id": "c",
                              "text": "only organization"
                    },
                    {
                              "id": "d",
                              "text": "only functions"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All cell skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All cell skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "cells, functions, organization",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci4-u3-cell-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Explain cells, name three cell parts with functions, and trace organization to organism.",
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
                    "**e.g., 'Cells=basic unit; Nucleus/Membrane/Mitochondria; Cells->tissues->organs->systems->organism.'**"
          ]
},
        },
        {
          id: "sci4-u3-cell-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Cells are important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they're small"
                    },
                    {
                              "id": "b",
                              "text": "they're the basic unit of all living things"
                    },
                    {
                              "id": "c",
                              "text": "they're fast"
                    },
                    {
                              "id": "d",
                              "text": "they're pretty"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Basic unit of life."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Basic unit of life.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "they're the basic unit of all living things",
          "commonErrors": [
                    "Thinks they're just small."
          ]
},
        },
        {
          id: "sci4-u3-cell-review-q4",
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
                              "text": "Boundary."
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
          id: "sci4-u3-cell-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Nucleus\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Boundary."
                    },
                    {
                              "id": "b",
                              "text": "Energy."
                    },
                    {
                              "id": "c",
                              "text": "Group of cells."
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
          id: "sci4-u3-cell-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Membrane\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Energy."
                    },
                    {
                              "id": "b",
                              "text": "Boundary."
                    },
                    {
                              "id": "c",
                              "text": "Group of cells."
                    },
                    {
                              "id": "d",
                              "text": "Group of tissues."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Membrane\" means Boundary."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Membrane\" means Boundary.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Membrane** = Boundary.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u3-cell-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mitochondria\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Group of cells."
                    },
                    {
                              "id": "b",
                              "text": "Group of tissues."
                    },
                    {
                              "id": "c",
                              "text": "Group of organs."
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
                              "statement": "\"Mitochondria\" means Energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Mitochondria\" means Energy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Mitochondria** = Energy.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u3-cell-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Tissue\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Group of tissues."
                    },
                    {
                              "id": "b",
                              "text": "Group of cells."
                    },
                    {
                              "id": "c",
                              "text": "Group of organs."
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
                              "statement": "\"Tissue\" means Group of cells."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Tissue\" means Group of cells.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Tissue** = Group of cells.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
