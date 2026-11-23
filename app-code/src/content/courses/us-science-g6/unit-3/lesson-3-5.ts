import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "sci6-u3-lesson-3-5",
  code: "3-5",
  title: "Matter Review",
  goal: "I CAN use all matter skills.",
  standards: ["MS-PS1-1"],
  vocabulary: [
    { term: "Matter", definition: "Has mass/volume." },
    { term: "Solid", definition: "Fixed shape/volume." },
    { term: "Liquid", definition: "Fixed volume." },
    { term: "Gas", definition: "No fixed shape/volume." },
    { term: "Atom", definition: "Basic unit." },
    { term: "Element", definition: "One type atom." },
    { term: "Compound", definition: "Two+ elements." },
    { term: "Physical", definition: "Form change." },
  ],
  concepts: [
    {
      id: "sci6-u3-matter-review",
      title: "Matter review",
      skill: "Combine states of matter, atomic structure, elements/compounds, and changes.",
      lesson: {
        sections: [
          {
            heading: "All matter skills",
            body: "Describe **states of matter**, **atomic structure**, distinguish **elements/compounds**, and identify **physical/chemical changes**.",
          },
          {
            heading: "Put it together",
            body: "Use all matter skills to understand the building blocks of the world.",
          },
        ],
        keyFormulas: [
          { name: "Matter", statement: "States + atoms + elements + changes = all skills." },
        ],
        workedExample: {
          problem: "Use all matter skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "sci6-u3-matter-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Matter skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only states"
                    },
                    {
                              "id": "b",
                              "text": "states, atoms, elements, compounds, changes"
                    },
                    {
                              "id": "c",
                              "text": "only atoms"
                    },
                    {
                              "id": "d",
                              "text": "only changes"
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
          "finalAnswer": "states, atoms, elements, compounds, changes",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci6-u3-matter-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe states of matter, label atom parts, distinguish element/compound, and identify a chemical change.",
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
                                                  "All matter",
                                                  "All four skills."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All matter",
                                                  "All four skills."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Solid/liquid/gas; Protons+neutrons+electrons; Element vs compound; Burning = chemical.'**"
          ]
},
        },
        {
          id: "sci6-u3-matter-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Matter is important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it's just science"
                    },
                    {
                              "id": "b",
                              "text": "it's everything around us"
                    },
                    {
                              "id": "c",
                              "text": "it's only in schools"
                    },
                    {
                              "id": "d",
                              "text": "it's optional"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Everything around us."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Everything around us.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "it's everything around us",
          "commonErrors": [
                    "Thinks it's useless."
          ]
},
        },
        {
          id: "sci6-u3-matter-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Matter\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fixed shape/volume."
                    },
                    {
                              "id": "b",
                              "text": "Has mass/volume."
                    },
                    {
                              "id": "c",
                              "text": "Fixed volume."
                    },
                    {
                              "id": "d",
                              "text": "No fixed shape/volume."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Matter\" means Has mass/volume."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Matter\" means Has mass/volume.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Matter** = Has mass/volume.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u3-matter-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Solid\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fixed volume."
                    },
                    {
                              "id": "b",
                              "text": "No fixed shape/volume."
                    },
                    {
                              "id": "c",
                              "text": "Basic unit."
                    },
                    {
                              "id": "d",
                              "text": "Fixed shape/volume."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Solid\" means Fixed shape/volume."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Solid\" means Fixed shape/volume.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Solid** = Fixed shape/volume.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u3-matter-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Liquid\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "No fixed shape/volume."
                    },
                    {
                              "id": "b",
                              "text": "Fixed volume."
                    },
                    {
                              "id": "c",
                              "text": "Basic unit."
                    },
                    {
                              "id": "d",
                              "text": "One type atom."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Liquid\" means Fixed volume."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Liquid\" means Fixed volume.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Liquid** = Fixed volume.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u3-matter-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Gas\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Basic unit."
                    },
                    {
                              "id": "b",
                              "text": "One type atom."
                    },
                    {
                              "id": "c",
                              "text": "Two+ elements."
                    },
                    {
                              "id": "d",
                              "text": "No fixed shape/volume."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Gas\" means No fixed shape/volume."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Gas\" means No fixed shape/volume.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Gas** = No fixed shape/volume.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u3-matter-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Atom\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "One type atom."
                    },
                    {
                              "id": "b",
                              "text": "Basic unit."
                    },
                    {
                              "id": "c",
                              "text": "Two+ elements."
                    },
                    {
                              "id": "d",
                              "text": "Form change."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Atom\" means Basic unit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Atom\" means Basic unit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Atom** = Basic unit.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
