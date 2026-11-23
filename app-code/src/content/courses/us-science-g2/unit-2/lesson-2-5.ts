import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "sci2-u2-lesson-2-5",
  code: "2-5",
  title: "Matter Review",
  goal: "I CAN identify states, properties and uses of matter.",
  standards: ["NGSS 2-PS1-1", "NGSS 2-PS1-2"],
  vocabulary: [
    { term: "Matter", definition: "Everything that takes up space." },
    { term: "Solid", definition: "Fixed shape." },
    { term: "Liquid", definition: "Takes container shape." },
    { term: "Gas", definition: "Fills space." },
    { term: "Property", definition: "Characteristic." },
    { term: "Material", definition: "What made of." },
    { term: "Purpose", definition: "What it's for." },
    { term: "Change", definition: "Different state." },
  ],
  concepts: [
    {
      id: "sci2-u2-matter-review",
      title: "Matter review",
      skill: "Combine states, properties and material uses.",
      lesson: {
        sections: [
          {
            heading: "All matter skills",
            body: "Matter has **states** (solid/liquid/gas), **properties** (color, texture, hardness), and **materials** chosen for **purposes**.",
          },
          {
            heading: "Put it together",
            body: "Identify states, describe properties, explain material choices.",
          },
        ],
        keyFormulas: [
          { name: "Matter review", statement: "States + properties + materials = all matter skills." },
        ],
        workedExample: {
          problem: "Describe water: its state, properties, and why it's used for drinking.",
          solution: "Liquid; transparent, tasteless; used because it's safe to drink and hydrates us.",
        },
      },
      questions: [
        {
          id: "sci2-u2-matter-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Matter skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only colors"
                    },
                    {
                              "id": "b",
                              "text": "states, properties, materials"
                    },
                    {
                              "id": "c",
                              "text": "only sizes"
                    },
                    {
                              "id": "d",
                              "text": "only shapes"
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
          "finalAnswer": "**all skills**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci2-u2-matter-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe a material you use daily: its state, properties, and purpose.",
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
                                                  "State + properties + purpose."
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
                                                  "State + properties + purpose."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Describes all three.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Plastic bottle: solid, flexible, waterproof; used for carrying water.'**"
          ]
},
        },
        {
          id: "sci2-u2-matter-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Ice is a...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "liquid"
                    },
                    {
                              "id": "b",
                              "text": "solid"
                    },
                    {
                              "id": "c",
                              "text": "gas"
                    },
                    {
                              "id": "d",
                              "text": "plasma"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Ice = solid water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ice = solid water.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**solid**",
          "commonErrors": [
                    "Confuses with liquid."
          ]
},
        },
        {
          id: "sci2-u2-matter-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Matter\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fixed shape."
                    },
                    {
                              "id": "b",
                              "text": "Everything that takes up space."
                    },
                    {
                              "id": "c",
                              "text": "Takes container shape."
                    },
                    {
                              "id": "d",
                              "text": "Fills space."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Matter\" means Everything that takes up space."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Matter\" means Everything that takes up space.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Matter** = Everything that takes up space.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u2-matter-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Solid\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Takes container shape."
                    },
                    {
                              "id": "b",
                              "text": "Fills space."
                    },
                    {
                              "id": "c",
                              "text": "Characteristic."
                    },
                    {
                              "id": "d",
                              "text": "Fixed shape."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Solid\" means Fixed shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Solid\" means Fixed shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Solid** = Fixed shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u2-matter-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Liquid\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fills space."
                    },
                    {
                              "id": "b",
                              "text": "Takes container shape."
                    },
                    {
                              "id": "c",
                              "text": "Characteristic."
                    },
                    {
                              "id": "d",
                              "text": "What made of."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Liquid\" means Takes container shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Liquid\" means Takes container shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Liquid** = Takes container shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u2-matter-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Gas\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Characteristic."
                    },
                    {
                              "id": "b",
                              "text": "What made of."
                    },
                    {
                              "id": "c",
                              "text": "What it's for."
                    },
                    {
                              "id": "d",
                              "text": "Fills space."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Gas\" means Fills space."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Gas\" means Fills space.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Gas** = Fills space.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u2-matter-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Property\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What made of."
                    },
                    {
                              "id": "b",
                              "text": "Characteristic."
                    },
                    {
                              "id": "c",
                              "text": "What it's for."
                    },
                    {
                              "id": "d",
                              "text": "Different state."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Property\" means Characteristic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Property\" means Characteristic.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Property** = Characteristic.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
