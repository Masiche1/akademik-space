import type { Lesson } from "../../../types.ts";

export const lesson75: Lesson = {
  id: "ela6-u7-lesson-7-5",
  code: "7-5",
  title: "Language Review",
  goal: "I CAN use all language skills.",
  standards: ["L.6.1", "L.6.4", "L.6.5"],
  vocabulary: [
    { term: "Convention", definition: "Grammar rule." },
    { term: "Pronoun", definition: "Replaces noun." },
    { term: "Context", definition: "Surrounding words." },
    { term: "Clue", definition: "Hint." },
    { term: "Figurative", definition: "Not literal." },
    { term: "Metaphor", definition: "Is/are." },
    { term: "Simile", definition: "Like/as." },
    { term: "Vocabulary", definition: "Word meanings." },
  ],
  concepts: [
    {
      id: "ela6-u7-language-review",
      title: "Language review",
      skill: "Combine grammar conventions, vocabulary in context, and figurative language.",
      lesson: {
        sections: [
          {
            heading: "All language skills",
            body: "Use **grammar conventions**, determine **vocabulary** from context, and analyze **figurative language**.",
          },
          {
            heading: "Put it together",
            body: "Use all language skills to understand and use English effectively.",
          },
        ],
        keyFormulas: [
          { name: "Language", statement: "Conventions + vocabulary + figurative = all skills." },
        ],
        workedExample: {
          problem: "Use all language skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "ela6-u7-language-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Language skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only grammar"
                    },
                    {
                              "id": "b",
                              "text": "conventions, vocabulary, figurative language"
                    },
                    {
                              "id": "c",
                              "text": "only vocabulary"
                    },
                    {
                              "id": "d",
                              "text": "only figurative"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "conventions, vocabulary, figurative language",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela6-u7-language-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Fix a grammar error, determine a word's meaning from context, and identify a figurative device.",
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
                                                  "All language",
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
                                                  "All language",
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
                    "**e.g., 'Fix: Each student their book -> his/her; Context: 'frigid' = cold; Figurative: 'Time is money' = metaphor.'**"
          ]
},
        },
        {
          id: "ela6-u7-language-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Language skills help us...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only test"
                    },
                    {
                              "id": "b",
                              "text": "communicate clearly and understand deeply"
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
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Communicate/understand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Communicate/understand.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "communicate clearly and understand deeply",
          "commonErrors": [
                    "Thinks it's useless."
          ]
},
        },
        {
          id: "ela6-u7-language-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Convention\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Replaces noun."
                    },
                    {
                              "id": "b",
                              "text": "Grammar rule."
                    },
                    {
                              "id": "c",
                              "text": "Surrounding words."
                    },
                    {
                              "id": "d",
                              "text": "Hint."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Convention\" means Grammar rule."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Convention\" means Grammar rule.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Convention** = Grammar rule.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u7-language-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Pronoun\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Surrounding words."
                    },
                    {
                              "id": "b",
                              "text": "Hint."
                    },
                    {
                              "id": "c",
                              "text": "Not literal."
                    },
                    {
                              "id": "d",
                              "text": "Replaces noun."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Pronoun\" means Replaces noun."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Pronoun\" means Replaces noun.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Pronoun** = Replaces noun.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u7-language-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Context\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hint."
                    },
                    {
                              "id": "b",
                              "text": "Surrounding words."
                    },
                    {
                              "id": "c",
                              "text": "Not literal."
                    },
                    {
                              "id": "d",
                              "text": "Is/are."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Context\" means Surrounding words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Context\" means Surrounding words.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Context** = Surrounding words.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u7-language-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Clue\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Not literal."
                    },
                    {
                              "id": "b",
                              "text": "Is/are."
                    },
                    {
                              "id": "c",
                              "text": "Like/as."
                    },
                    {
                              "id": "d",
                              "text": "Hint."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Clue\" means Hint."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Clue\" means Hint.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Clue** = Hint.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u7-language-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Figurative\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Is/are."
                    },
                    {
                              "id": "b",
                              "text": "Not literal."
                    },
                    {
                              "id": "c",
                              "text": "Like/as."
                    },
                    {
                              "id": "d",
                              "text": "Word meanings."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Figurative\" means Not literal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Figurative\" means Not literal.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Figurative** = Not literal.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
