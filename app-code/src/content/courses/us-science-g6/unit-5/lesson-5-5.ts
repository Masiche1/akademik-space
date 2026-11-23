import type { Lesson } from "../../../types.ts";

export const lesson55: Lesson = {
  id: "sci6-u5-lesson-5-5",
  code: "5-5",
  title: "Ecosystems Review",
  goal: "I CAN use all ecosystem skills.",
  standards: ["LS2.B", "LS2.C"],
  vocabulary: [
    { term: "Food chain", definition: "Who eats whom." },
    { term: "Food web", definition: "Multiple chains." },
    { term: "Producer", definition: "Makes food." },
    { term: "Consumer", definition: "Eats others." },
    { term: "Balance", definition: "Stable." },
    { term: "Carrying capacity", definition: "Max population." },
    { term: "Pollution", definition: "Contamination." },
    { term: "Conservation", definition: "Protecting." },
  ],
  concepts: [
    {
      id: "sci6-u5-ecosystems-review",
      title: "Ecosystems review",
      skill: "Combine food chains/webs, ecosystem balance, and human impact.",
      lesson: {
        sections: [
          {
            heading: "All ecosystem skills",
            body: "Construct **food chains/webs**, explain **balance**, and describe **human impacts/conservation**.",
          },
          {
            heading: "Put it together",
            body: "Use all skills to understand and protect ecosystems.",
          },
        ],
        keyFormulas: [
          { name: "Ecosystems", statement: "Food chains + balance + human impact = all skills." },
        ],
        workedExample: {
          problem: "Use all ecosystem skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "sci6-u5-ecosystems-review-q1",
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
                              "text": "food chains, webs, balance, human impact"
                    },
                    {
                              "id": "c",
                              "text": "only balance"
                    },
                    {
                              "id": "d",
                              "text": "only impact"
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
          "finalAnswer": "food chains, webs, balance, human impact",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci6-u5-ecosystems-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Construct a food chain, describe food web balance, explain carrying capacity, and describe human impact.",
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
                                                  "All ecosystems",
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
                    "**e.g., 'Grass->Rabbit->Fox; Balance via predation; Carrying capacity limits population; Pollution harms ecosystems.'**"
          ]
},
        },
        {
          id: "sci6-u5-ecosystems-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Ecosystems are important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they're just nature"
                    },
                    {
                              "id": "b",
                              "text": "they provide essential services like food, water, and climate regulation"
                    },
                    {
                              "id": "c",
                              "text": "they're only in books"
                    },
                    {
                              "id": "d",
                              "text": "they're optional"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Essential services."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Essential services.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "they provide essential services like food, water, and climate regulation",
          "commonErrors": [
                    "Thinks they're useless."
          ]
},
        },
        {
          id: "sci6-u5-ecosystems-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Food chain\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Multiple chains."
                    },
                    {
                              "id": "b",
                              "text": "Who eats whom."
                    },
                    {
                              "id": "c",
                              "text": "Makes food."
                    },
                    {
                              "id": "d",
                              "text": "Eats others."
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
        {
          id: "sci6-u5-ecosystems-review-q5",
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
                              "text": "Eats others."
                    },
                    {
                              "id": "c",
                              "text": "Stable."
                    },
                    {
                              "id": "d",
                              "text": "Multiple chains."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Food web\" means Multiple chains."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Food web\" means Multiple chains.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Food web** = Multiple chains.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u5-ecosystems-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Producer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Eats others."
                    },
                    {
                              "id": "b",
                              "text": "Makes food."
                    },
                    {
                              "id": "c",
                              "text": "Stable."
                    },
                    {
                              "id": "d",
                              "text": "Max population."
                    }
          ],
          "correctChoiceId": "b"
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
          id: "sci6-u5-ecosystems-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Consumer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Stable."
                    },
                    {
                              "id": "b",
                              "text": "Max population."
                    },
                    {
                              "id": "c",
                              "text": "Contamination."
                    },
                    {
                              "id": "d",
                              "text": "Eats others."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Consumer\" means Eats others."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Consumer\" means Eats others.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Consumer** = Eats others.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u5-ecosystems-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Balance\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Max population."
                    },
                    {
                              "id": "b",
                              "text": "Stable."
                    },
                    {
                              "id": "c",
                              "text": "Contamination."
                    },
                    {
                              "id": "d",
                              "text": "Protecting."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Balance\" means Stable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Balance\" means Stable.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Balance** = Stable.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
