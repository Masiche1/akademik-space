import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "sci5-u8-lesson-8-2",
  code: "8-2",
  title: "Review: Life and Ecosystems",
  goal: "I CAN use all life and ecosystem skills.",
  standards: ["LS1.A", "LS1.B", "LS1.C", "LS2.A", "LS2.B", "LS2.C"],
  vocabulary: [
    { term: "Cell", definition: "Basic unit." },
    { term: "Photosynthesis", definition: "Making food." },
    { term: "Life cycle", definition: "Stages." },
    { term: "Ecosystem", definition: "Community + environment." },
    { term: "Food chain", definition: "Who eats whom." },
    { term: "Energy pyramid", definition: "Energy levels." },
    { term: "Predator", definition: "Hunts." },
    { term: "Symbiosis", definition: "Close relationship." },
  ],
  concepts: [
    {
      id: "sci5-u8-review-life-ecosystems",
      title: "Life and ecosystems review",
      skill: "Combine cells, life cycles and ecosystems.",
      lesson: {
        sections: [
          {
            heading: "All life/ecosystem skills",
            body: "Describe **cells**, **life cycles**, **ecosystems**, **food chains**, **energy flow**, and **interactions**.",
          },
          {
            heading: "Put it together",
            body: "Use all life/ecosystem skills.",
          },
        ],
        keyFormulas: [
          { name: "Life/ecosystems", statement: "Cells + cycles + ecosystems + food + interactions = all skills." },
        ],
        workedExample: {
          problem: "Use all life and ecosystem skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "sci5-u8-review-life-ecosystems-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Life/ecosystem skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only cells"
                    },
                    {
                              "id": "b",
                              "text": "cells, cycles, ecosystems, food, interactions"
                    },
                    {
                              "id": "c",
                              "text": "only ecosystems"
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
          "finalAnswer": "cells, cycles, ecosystems, food, interactions",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci5-u8-review-life-ecosystems-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe a cell, name a life cycle, draw a food chain, explain energy flow, and identify an interaction.",
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
                                                  "All life/ecosystem",
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
                                                  "All life/ecosystem",
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
                    "**e.g., 'Cell: nucleus/membrane; Cycle: egg->adult; Chain: grass->rabbit->fox; Energy: 10% rule; Interaction: mutualism.'**"
          ]
},
        },
        {
          id: "sci5-u8-review-life-ecosystems-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Understanding life and ecosystems helps us...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only test"
                    },
                    {
                              "id": "b",
                              "text": "understand living things and their relationships"
                    },
                    {
                              "id": "c",
                              "text": "only memorize"
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
                              "statement": "Understand life/relationships."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Understand life/relationships.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "understand living things and their relationships",
          "commonErrors": [
                    "Thinks it's useless."
          ]
},
        },
        {
          id: "sci5-u8-review-life-ecosystems-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Cell\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Making food."
                    },
                    {
                              "id": "b",
                              "text": "Basic unit."
                    },
                    {
                              "id": "c",
                              "text": "Stages."
                    },
                    {
                              "id": "d",
                              "text": "Community + environment."
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
          id: "sci5-u8-review-life-ecosystems-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Photosynthesis\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Stages."
                    },
                    {
                              "id": "b",
                              "text": "Community + environment."
                    },
                    {
                              "id": "c",
                              "text": "Who eats whom."
                    },
                    {
                              "id": "d",
                              "text": "Making food."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "sci5-u8-review-life-ecosystems-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Life cycle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Community + environment."
                    },
                    {
                              "id": "b",
                              "text": "Stages."
                    },
                    {
                              "id": "c",
                              "text": "Who eats whom."
                    },
                    {
                              "id": "d",
                              "text": "Energy levels."
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
        {
          id: "sci5-u8-review-life-ecosystems-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ecosystem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Who eats whom."
                    },
                    {
                              "id": "b",
                              "text": "Energy levels."
                    },
                    {
                              "id": "c",
                              "text": "Hunts."
                    },
                    {
                              "id": "d",
                              "text": "Community + environment."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ecosystem\" means Community + environment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ecosystem\" means Community + environment.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ecosystem** = Community + environment.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u8-review-life-ecosystems-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Food chain\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Energy levels."
                    },
                    {
                              "id": "b",
                              "text": "Who eats whom."
                    },
                    {
                              "id": "c",
                              "text": "Hunts."
                    },
                    {
                              "id": "d",
                              "text": "Close relationship."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Food chain\" means Who eats whom."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Food chain\" means Who eats whom.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Food chain** = Who eats whom.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
