import type { Lesson } from "../../../types.ts";

export const lesson75: Lesson = {
  id: "sci2-u7-lesson-7-5",
  code: "7-5",
  title: "Earth's Resources Review",
  goal: "I CAN identify resources, conservation and human use.",
  standards: ["NGSS 2-ESS2-1"],
  vocabulary: [
    { term: "Resource", definition: "From nature." },
    { term: "Renewable", definition: "Replaced naturally." },
    { term: "Nonrenewable", definition: "Limited." },
    { term: "Conserve", definition: "Save/protect." },
    { term: "Reduce", definition: "Use less." },
    { term: "Reuse", definition: "Use again." },
    { term: "Recycle", definition: "Make new." },
    { term: "Use", definition: "How we use it." },
  ],
  concepts: [
    {
      id: "sci2-u7-resources-review",
      title: "Earth's resources review",
      skill: "Combine resource identification, conservation and human use.",
      lesson: {
        sections: [
          {
            heading: "All resource skills",
            body: "Earth's **resources** are **renewable** or **nonrenewable**; we **conserve** them by reducing, reusing, recycling; and humans **use** them for food, shelter, energy.",
          },
          {
            heading: "Put it together",
            body: "Identify resources, explain conservation, describe human use.",
          },
        ],
        keyFormulas: [
          { name: "Resources review", statement: "Identify + conserve + use = all resource skills." },
        ],
        workedExample: {
          problem: "Describe Earth's resources, conservation methods, and human uses.",
          solution: "All resource skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "sci2-u7-resources-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Resource skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only water"
                    },
                    {
                              "id": "b",
                              "text": "identify, conserve, use"
                    },
                    {
                              "id": "c",
                              "text": "only conserve"
                    },
                    {
                              "id": "d",
                              "text": "only use"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All resource skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All resource skills.",
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
          id: "sci2-u7-resources-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name three resources, describe conservation for each, and how humans use them.",
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
                                                  "All resources",
                                                  "Identify + conserve + use."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All resources",
                                                  "Identify + conserve + use."
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
                    "**e.g., 'Water: conserve by turning off tap; use for drinking. Trees: plant more; use for wood.'**"
          ]
},
        },
        {
          id: "sci2-u7-resources-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "We should conserve resources because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they are infinite"
                    },
                    {
                              "id": "b",
                              "text": "some are limited and we need them to last"
                    },
                    {
                              "id": "c",
                              "text": "they are free"
                    },
                    {
                              "id": "d",
                              "text": "we don't need them"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Limited resources need conservation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Limited resources need conservation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**need to last**",
          "commonErrors": [
                    "Thinks resources infinite."
          ]
},
        },
        {
          id: "sci2-u7-resources-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Resource\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Replaced naturally."
                    },
                    {
                              "id": "b",
                              "text": "From nature."
                    },
                    {
                              "id": "c",
                              "text": "Limited."
                    },
                    {
                              "id": "d",
                              "text": "Save/protect."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Resource\" means From nature."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Resource\" means From nature.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Resource** = From nature.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u7-resources-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Renewable\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Limited."
                    },
                    {
                              "id": "b",
                              "text": "Save/protect."
                    },
                    {
                              "id": "c",
                              "text": "Use less."
                    },
                    {
                              "id": "d",
                              "text": "Replaced naturally."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Renewable\" means Replaced naturally."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Renewable\" means Replaced naturally.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Renewable** = Replaced naturally.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u7-resources-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Nonrenewable\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Save/protect."
                    },
                    {
                              "id": "b",
                              "text": "Limited."
                    },
                    {
                              "id": "c",
                              "text": "Use less."
                    },
                    {
                              "id": "d",
                              "text": "Use again."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Nonrenewable\" means Limited."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Nonrenewable\" means Limited.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Nonrenewable** = Limited.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u7-resources-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Conserve\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Use less."
                    },
                    {
                              "id": "b",
                              "text": "Use again."
                    },
                    {
                              "id": "c",
                              "text": "Make new."
                    },
                    {
                              "id": "d",
                              "text": "Save/protect."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Conserve\" means Save/protect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Conserve\" means Save/protect.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Conserve** = Save/protect.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u7-resources-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Reduce\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Use again."
                    },
                    {
                              "id": "b",
                              "text": "Use less."
                    },
                    {
                              "id": "c",
                              "text": "Make new."
                    },
                    {
                              "id": "d",
                              "text": "How we use it."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Reduce\" means Use less."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Reduce\" means Use less.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Reduce** = Use less.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
