import type { Lesson } from "../../../types.ts";

export const lesson45: Lesson = {
  id: "sci5-u4-lesson-4-5",
  code: "4-5",
  title: "Ecosystem Review",
  goal: "I CAN use all ecosystem skills.",
  standards: ["LS2.A", "LS2.B", "LS2.C"],
  vocabulary: [
    { term: "Ecosystem", definition: "Community + environment." },
    { term: "Food chain", definition: "Who eats whom." },
    { term: "Food web", definition: "Connected chains." },
    { term: "Energy pyramid", definition: "Energy levels." },
    { term: "Predator", definition: "Hunts." },
    { term: "Prey", definition: "Hunted." },
    { term: "Symbiosis", definition: "Close relationship." },
    { term: "Decomposer", definition: "Recycles." },
  ],
  concepts: [
    {
      id: "sci5-u4-ecosystem-review",
      title: "Ecosystem review",
      skill: "Combine ecosystem components, food chains/webs, energy flow and interactions.",
      lesson: {
        sections: [
          {
            heading: "All ecosystem skills",
            body: "Describe **ecosystem components**, **food chains/webs**, **energy flow**, and **organism interactions**.",
          },
          {
            heading: "Put it together",
            body: "Use all ecosystem skills to analyze ecosystems.",
          },
        ],
        keyFormulas: [
          { name: "Ecosystem", statement: "Components + food + energy + interactions = all skills." },
        ],
        workedExample: {
          problem: "Use all ecosystem skills.",
          solution: "All skills = complete ecosystem understanding.",
        },
      },
      questions: [
        {
          id: "sci5-u4-ecosystem-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Ecosystem skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only food chains"
                    },
                    {
                              "id": "b",
                              "text": "components, food chains/webs, energy, interactions"
                    },
                    {
                              "id": "c",
                              "text": "only interactions"
                    },
                    {
                              "id": "d",
                              "text": "only energy"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All ecosystem skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All ecosystem skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "components, food chains/webs, energy, interactions",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci5-u4-ecosystem-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe an ecosystem's components, draw a food chain, explain energy flow, and identify an interaction.",
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
                                                  "All ecosystem",
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
                                                  "All ecosystem",
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
                    "**e.g., 'Forest: trees/animals/soil; Chain: grass->rabbit->fox; Energy: 10% rule; Interaction: mutualism.'**"
          ]
},
        },
        {
          id: "sci5-u4-ecosystem-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Ecosystems are important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they're pretty"
                    },
                    {
                              "id": "b",
                              "text": "they support all life and recycle resources"
                    },
                    {
                              "id": "c",
                              "text": "they're math"
                    },
                    {
                              "id": "d",
                              "text": "they're simple"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Support life/recycle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Support life/recycle.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "they support all life and recycle resources",
          "commonErrors": [
                    "Thinks they're just pretty."
          ]
},
        },
        {
          id: "sci5-u4-ecosystem-review-q4",
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
                              "text": "Community + environment."
                    },
                    {
                              "id": "c",
                              "text": "Connected chains."
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
          id: "sci5-u4-ecosystem-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Food chain\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Connected chains."
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
                              "text": "Who eats whom."
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "sci5-u4-ecosystem-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Food web\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Energy levels."
                    },
                    {
                              "id": "b",
                              "text": "Connected chains."
                    },
                    {
                              "id": "c",
                              "text": "Hunts."
                    },
                    {
                              "id": "d",
                              "text": "Hunted."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Food web\" means Connected chains."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Food web\" means Connected chains.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Food web** = Connected chains.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u4-ecosystem-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Energy pyramid\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hunts."
                    },
                    {
                              "id": "b",
                              "text": "Hunted."
                    },
                    {
                              "id": "c",
                              "text": "Close relationship."
                    },
                    {
                              "id": "d",
                              "text": "Energy levels."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Energy pyramid\" means Energy levels."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Energy pyramid\" means Energy levels.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Energy pyramid** = Energy levels.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u4-ecosystem-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Predator\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hunted."
                    },
                    {
                              "id": "b",
                              "text": "Hunts."
                    },
                    {
                              "id": "c",
                              "text": "Close relationship."
                    },
                    {
                              "id": "d",
                              "text": "Recycles."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Predator\" means Hunts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Predator\" means Hunts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Predator** = Hunts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
