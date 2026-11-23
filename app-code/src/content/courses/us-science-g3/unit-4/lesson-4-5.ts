import type { Lesson } from "../../../types.ts";

export const lesson45: Lesson = {
  id: "sci3-u4-lesson-4-5",
  code: "4-5",
  title: "Matter Review",
  goal: "I CAN describe states, changes, properties, mixtures and solutions.",
  standards: ["PS1.A", "PS1.B"],
  vocabulary: [
    { term: "State", definition: "Form of matter." },
    { term: "Solid", definition: "Fixed shape/volume." },
    { term: "Liquid", definition: "Fixed volume." },
    { term: "Gas", definition: "No fixed." },
    { term: "Melt", definition: "S->L." },
    { term: "Freeze", definition: "L->S." },
    { term: "Evaporate", definition: "L->G." },
    { term: "Condense", definition: "G->L." },
  ],
  concepts: [
    {
      id: "sci3-u4-matter-review",
      title: "Matter review",
      skill: "Combine states, changes, properties, mixtures and solutions.",
      lesson: {
        sections: [
          {
            heading: "All matter knowledge",
            body: "Matter has **states** (solid/liquid/gas), changes state through **melting/freezing/evaporating/condensing**, has **properties** (rigid, flow, compress), and forms **mixtures/solutions** that can be **separated**.",
          },
          {
            heading: "Put it together",
            body: "Describe states, changes, properties, mixtures and solutions.",
          },
        ],
        keyFormulas: [
          { name: "Matter", statement: "States + changes + properties + mixtures = complete matter knowledge." },
        ],
        workedExample: {
          problem: "Describe matter: name 3 states, 2 changes, 2 properties, 1 mixture.",
          solution: "States: solid/liquid/gas. Changes: melt/freeze. Properties: rigid/flow. Mixture: sand+water.",
        },
      },
      questions: [
        {
          id: "sci3-u4-matter-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Matter knowledge includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only states"
                    },
                    {
                              "id": "b",
                              "text": "states, changes, properties, mixtures"
                    },
                    {
                              "id": "c",
                              "text": "only mixtures"
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
                              "statement": "All matter skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All matter skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "states, changes, properties, mixtures",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci3-u4-matter-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe matter: name 3 states, 2 state changes, 2 properties, and 1 mixture.",
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
                                                  "States + changes + properties + mixture."
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
                                                  "States + changes + properties + mixture."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Names all parts.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'States: S/L/G. Changes: melt/freeze. Properties: rigid/flow. Mixture: sand+water.'**"
          ]
},
        },
        {
          id: "sci3-u4-matter-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Matter is important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it's everything"
                    },
                    {
                              "id": "b",
                              "text": "it's everything around us"
                    },
                    {
                              "id": "c",
                              "text": "it's nothing"
                    },
                    {
                              "id": "d",
                              "text": "it's only water"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Matter = everything around us."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Matter = everything around us.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "it's everything around us",
          "commonErrors": [
                    "Thinks matter is only water."
          ]
},
        },
        {
          id: "sci3-u4-matter-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"State\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fixed shape/volume."
                    },
                    {
                              "id": "b",
                              "text": "Form of matter."
                    },
                    {
                              "id": "c",
                              "text": "Fixed volume."
                    },
                    {
                              "id": "d",
                              "text": "No fixed."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"State\" means Form of matter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"State\" means Form of matter.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**State** = Form of matter.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u4-matter-review-q5",
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
                              "text": "No fixed."
                    },
                    {
                              "id": "c",
                              "text": "S->L."
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
          id: "sci3-u4-matter-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Liquid\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "No fixed."
                    },
                    {
                              "id": "b",
                              "text": "Fixed volume."
                    },
                    {
                              "id": "c",
                              "text": "S->L."
                    },
                    {
                              "id": "d",
                              "text": "L->S."
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
          id: "sci3-u4-matter-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Gas\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "S->L."
                    },
                    {
                              "id": "b",
                              "text": "L->S."
                    },
                    {
                              "id": "c",
                              "text": "L->G."
                    },
                    {
                              "id": "d",
                              "text": "No fixed."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Gas\" means No fixed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Gas\" means No fixed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Gas** = No fixed.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u4-matter-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Melt\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "L->S."
                    },
                    {
                              "id": "b",
                              "text": "S->L."
                    },
                    {
                              "id": "c",
                              "text": "L->G."
                    },
                    {
                              "id": "d",
                              "text": "G->L."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Melt\" means S->L."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Melt\" means S->L.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Melt** = S->L.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
