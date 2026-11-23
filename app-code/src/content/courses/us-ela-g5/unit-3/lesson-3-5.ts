import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "ela5-u3-lesson-3-5",
  code: "3-5",
  title: "Integration Review",
  goal: "I CAN integrate knowledge from multiple texts and media.",
  standards: ["RL.5.7", "RL.5.9"],
  vocabulary: [
    { term: "Compare", definition: "Find similarities." },
    { term: "Contrast", definition: "Find differences." },
    { term: "Integrate", definition: "Combine information." },
    { term: "Media", definition: "Films, images." },
    { term: "Text", definition: "Written work." },
    { term: "Theme", definition: "Main message." },
    { term: "Genre", definition: "Category." },
    { term: "Evidence", definition: "Supporting details." },
  ],
  concepts: [
    {
      id: "ela5-u3-integration-review",
      title: "Integration review",
      skill: "Combine comparing texts, integrating media and comparing themes across genres.",
      lesson: {
        sections: [
          {
            heading: "All integration skills",
            body: "**Compare texts**, **integrate media**, and **compare themes across genres**.",
          },
          {
            heading: "Put it together",
            body: "Use all integration skills for deep analysis.",
          },
        ],
        keyFormulas: [
          { name: "Integration", statement: "Compare + media + themes = all skills." },
        ],
        workedExample: {
          problem: "Use all integration skills.",
          solution: "All skills = complete integration understanding.",
        },
      },
      questions: [
        {
          id: "ela5-u3-integration-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Integration skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only comparing"
                    },
                    {
                              "id": "b",
                              "text": "compare texts, integrate media, compare themes"
                    },
                    {
                              "id": "c",
                              "text": "only media"
                    },
                    {
                              "id": "d",
                              "text": "only themes"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All integration skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All integration skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "compare texts, integrate media, compare themes",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela5-u3-integration-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Compare two texts, integrate media with text, and compare themes across genres.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": [
                                        [
                                                  "skill",
                                                  "All integration",
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
                                                  "All integration",
                                                  "All three skills."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "AO1"
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
                    "**e.g., 'Compare story vs article; integrate film scene; compare themes in fiction vs poetry.'**"
          ]
},
        },
        {
          id: "ela5-u3-integration-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Integrating multiple sources helps you...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "confuse yourself"
                    },
                    {
                              "id": "b",
                              "text": "get a complete picture"
                    },
                    {
                              "id": "c",
                              "text": "read faster"
                    },
                    {
                              "id": "d",
                              "text": "skip details"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Complete picture."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Complete picture.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "get a complete picture",
          "commonErrors": [
                    "Thinks it confuses."
          ]
},
        },
        {
          id: "ela5-u3-integration-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compare\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Find differences."
                    },
                    {
                              "id": "b",
                              "text": "Find similarities."
                    },
                    {
                              "id": "c",
                              "text": "Combine information."
                    },
                    {
                              "id": "d",
                              "text": "Films, images."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Compare\" means Find similarities."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Compare\" means Find similarities.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Compare** = Find similarities.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u3-integration-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Contrast\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Combine information."
                    },
                    {
                              "id": "b",
                              "text": "Films, images."
                    },
                    {
                              "id": "c",
                              "text": "Written work."
                    },
                    {
                              "id": "d",
                              "text": "Find differences."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Contrast\" means Find differences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Contrast\" means Find differences.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Contrast** = Find differences.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u3-integration-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Integrate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Films, images."
                    },
                    {
                              "id": "b",
                              "text": "Combine information."
                    },
                    {
                              "id": "c",
                              "text": "Written work."
                    },
                    {
                              "id": "d",
                              "text": "Main message."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Integrate\" means Combine information."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Integrate\" means Combine information.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Integrate** = Combine information.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u3-integration-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Media\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Written work."
                    },
                    {
                              "id": "b",
                              "text": "Main message."
                    },
                    {
                              "id": "c",
                              "text": "Category."
                    },
                    {
                              "id": "d",
                              "text": "Films, images."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Media\" means Films, images."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Media\" means Films, images.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Media** = Films, images.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u3-integration-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Text\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Main message."
                    },
                    {
                              "id": "b",
                              "text": "Written work."
                    },
                    {
                              "id": "c",
                              "text": "Category."
                    },
                    {
                              "id": "d",
                              "text": "Supporting details."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Text\" means Written work."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Text\" means Written work.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Text** = Written work.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
