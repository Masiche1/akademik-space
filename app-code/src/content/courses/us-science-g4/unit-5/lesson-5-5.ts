import type { Lesson } from "../../../types.ts";

export const lesson55: Lesson = {
  id: "sci4-u5-lesson-5-5",
  code: "5-5",
  title: "Ecosystems Review",
  goal: "I CAN use all ecosystem skills.",
  standards: ["LS2.A", "LS2.B", "LS2.C"],
  vocabulary: [
    { term: "Ecosystem", definition: "Community + environment." },
    { term: "Food chain", definition: "Energy flow." },
    { term: "Food web", definition: "Interconnected." },
    { term: "Producer", definition: "Makes food." },
    { term: "Consumer", definition: "Eats." },
    { term: "Decomposer", definition: "Breaks down." },
    { term: "Cycle", definition: "Repeated process." },
    { term: "Nutrient", definition: "Needed substance." },
  ],
  concepts: [
    {
      id: "sci4-u5-ecosystems-review",
      title: "Ecosystems review",
      skill: "Combine ecosystem basics, food chains/webs and cycles.",
      lesson: {
        sections: [
          {
            heading: "All ecosystem skills",
            body: "Explain **ecosystems**, **food chains/webs**, **energy flow**, and **nutrient cycles**.",
          },
          {
            heading: "Put it together",
            body: "Use all ecosystem skills to understand life connections.",
          },
        ],
        keyFormulas: [
          { name: "Ecosystems", statement: "Basics + food + cycles = complete understanding." },
        ],
        workedExample: {
          problem: "Use all ecosystem skills.",
          solution: "All skills = complete ecosystem understanding.",
        },
      },
      questions: [
        {
          id: "sci4-u5-ecosystems-review-q1",
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
                              "text": "ecosystem, food, cycles"
                    },
                    {
                              "id": "c",
                              "text": "only cycles"
                    },
                    {
                              "id": "d",
                              "text": "only food webs"
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
          "finalAnswer": "ecosystem, food, cycles",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci4-u5-ecosystems-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Explain ecosystems, draw a food web, and describe a nutrient cycle.",
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
                                                  "All ecosystems",
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
                                                  "All ecosystems",
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
                    "**e.g., 'Ecosystem=biotic+abiotic; Web=multiple chains; Cycle=decomposers return nutrients.'**"
          ]
},
        },
        {
          id: "sci4-u5-ecosystems-review-q3",
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
                              "text": "they show how all living things connect"
                    },
                    {
                              "id": "c",
                              "text": "they're math"
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
                              "statement": "Show connections."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Show connections.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "they show how all living things connect",
          "commonErrors": [
                    "Thinks they're useless."
          ]
},
        },
        {
          id: "sci4-u5-ecosystems-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ecosystem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Energy flow."
                    },
                    {
                              "id": "b",
                              "text": "Community + environment."
                    },
                    {
                              "id": "c",
                              "text": "Interconnected."
                    },
                    {
                              "id": "d",
                              "text": "Makes food."
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
          id: "sci4-u5-ecosystems-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Food chain\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Interconnected."
                    },
                    {
                              "id": "b",
                              "text": "Makes food."
                    },
                    {
                              "id": "c",
                              "text": "Eats."
                    },
                    {
                              "id": "d",
                              "text": "Energy flow."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Food chain\" means Energy flow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Food chain\" means Energy flow.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Food chain** = Energy flow.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u5-ecosystems-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Food web\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Makes food."
                    },
                    {
                              "id": "b",
                              "text": "Interconnected."
                    },
                    {
                              "id": "c",
                              "text": "Eats."
                    },
                    {
                              "id": "d",
                              "text": "Breaks down."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Food web\" means Interconnected."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Food web\" means Interconnected.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Food web** = Interconnected.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u5-ecosystems-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Producer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Eats."
                    },
                    {
                              "id": "b",
                              "text": "Breaks down."
                    },
                    {
                              "id": "c",
                              "text": "Repeated process."
                    },
                    {
                              "id": "d",
                              "text": "Makes food."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Producer\" means Makes food."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Producer\" means Makes food.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Producer** = Makes food.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u5-ecosystems-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Consumer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Breaks down."
                    },
                    {
                              "id": "b",
                              "text": "Eats."
                    },
                    {
                              "id": "c",
                              "text": "Repeated process."
                    },
                    {
                              "id": "d",
                              "text": "Needed substance."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Consumer\" means Eats."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Consumer\" means Eats.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Consumer** = Eats.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
