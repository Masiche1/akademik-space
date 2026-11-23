import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "sci5-u1-lesson-1-5",
  code: "1-5",
  title: "Matter Review",
  goal: "I CAN use all matter properties and changes skills.",
  standards: ["PS1.A", "PS1.B"],
  vocabulary: [
    { term: "Matter", definition: "Has mass/space." },
    { term: "Physical property", definition: "Observable." },
    { term: "Physical change", definition: "Same substance." },
    { term: "Chemical change", definition: "New substance." },
    { term: "State", definition: "Solid/liquid/gas." },
    { term: "Reversible", definition: "Can undo." },
    { term: "Permanent", definition: "Cannot undo." },
    { term: "Evidence", definition: "Signs of change." },
  ],
  concepts: [
    {
      id: "sci5-u1-matter-review",
      title: "Matter review",
      skill: "Combine physical/chemical properties and changes.",
      lesson: {
        sections: [
          {
            heading: "All matter skills",
            body: "Identify **physical/chemical properties**, **states of matter**, and **physical/chemical changes**.",
          },
          {
            heading: "Put it together",
            body: "Use all matter skills to classify changes.",
          },
        ],
        keyFormulas: [
          { name: "Matter", statement: "Properties + states + changes = all skills." },
        ],
        workedExample: {
          problem: "Use all matter skills.",
          solution: "All skills = complete matter understanding.",
        },
      },
      questions: [
        {
          id: "sci5-u1-matter-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Matter skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only properties"
                    },
                    {
                              "id": "b",
                              "text": "properties, states, physical/chemical changes"
                    },
                    {
                              "id": "c",
                              "text": "only changes"
                    },
                    {
                              "id": "d",
                              "text": "only states"
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
          "finalAnswer": "properties, states, physical/chemical changes",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci5-u1-matter-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Classify 3 changes as physical or chemical, and describe the states of matter for ice, water, steam.",
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
                                                  "Classifications + states."
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
                                                  "Classifications + states."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Melting=physical, burning=chemical; ice=solid, water=liquid, steam=gas.'**"
          ]
},
        },
        {
          id: "sci5-u1-matter-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Distinguishing physical vs chemical changes is important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it's required"
                    },
                    {
                              "id": "b",
                              "text": "it tells us whether a new substance formed"
                    },
                    {
                              "id": "c",
                              "text": "it's easy"
                    },
                    {
                              "id": "d",
                              "text": "it's fast"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Tells if new substance formed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tells if new substance formed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "it tells us whether a new substance formed",
          "commonErrors": [
                    "Thinks it's just required."
          ]
},
        },
        {
          id: "sci5-u1-matter-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Matter\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Observable."
                    },
                    {
                              "id": "b",
                              "text": "Has mass/space."
                    },
                    {
                              "id": "c",
                              "text": "Same substance."
                    },
                    {
                              "id": "d",
                              "text": "New substance."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Matter\" means Has mass/space."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Matter\" means Has mass/space.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Matter** = Has mass/space.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u1-matter-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Physical property\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Same substance."
                    },
                    {
                              "id": "b",
                              "text": "New substance."
                    },
                    {
                              "id": "c",
                              "text": "Solid/liquid/gas."
                    },
                    {
                              "id": "d",
                              "text": "Observable."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Physical property\" means Observable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Physical property\" means Observable.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Physical property** = Observable.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u1-matter-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Physical change\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "New substance."
                    },
                    {
                              "id": "b",
                              "text": "Same substance."
                    },
                    {
                              "id": "c",
                              "text": "Solid/liquid/gas."
                    },
                    {
                              "id": "d",
                              "text": "Can undo."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Physical change\" means Same substance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Physical change\" means Same substance.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Physical change** = Same substance.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u1-matter-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Chemical change\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Solid/liquid/gas."
                    },
                    {
                              "id": "b",
                              "text": "Can undo."
                    },
                    {
                              "id": "c",
                              "text": "Cannot undo."
                    },
                    {
                              "id": "d",
                              "text": "New substance."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Chemical change\" means New substance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Chemical change\" means New substance.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Chemical change** = New substance.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u1-matter-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"State\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Can undo."
                    },
                    {
                              "id": "b",
                              "text": "Solid/liquid/gas."
                    },
                    {
                              "id": "c",
                              "text": "Cannot undo."
                    },
                    {
                              "id": "d",
                              "text": "Signs of change."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"State\" means Solid/liquid/gas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"State\" means Solid/liquid/gas.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**State** = Solid/liquid/gas.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
