import type { Lesson } from "../../../types.ts";

export const lesson84: Lesson = {
  id: "ela3-u8-lesson-8-4",
  code: "8-4",
  title: "Review: Language",
  goal: "I CAN use capitals, punctuation, complete sentences and new words.",
  standards: ["L.3.1", "L.3.2", "L.3.4", "L.3.5", "L.3.6"],
  vocabulary: [
    { term: "Capital", definition: "Big letter." },
    { term: "Period", definition: ". for statement." },
    { term: "Question mark", definition: "? for question." },
    { term: "Exclamation", definition: "! for excited." },
    { term: "Sentence", definition: "Complete thought." },
    { term: "Subject", definition: "Who/what." },
    { term: "Verb", definition: "Action." },
    { term: "New word", definition: "Word we learned." },
  ],
  concepts: [
    {
      id: "ela3-u8-review-language",
      title: "Language review",
      skill: "Combine capitalization, punctuation, sentences and vocabulary.",
      lesson: {
        sections: [
          {
            heading: "All language skills",
            body: "Language includes **capitalization**, **end punctuation**, **complete sentences** (subject + verb), and **vocabulary**.",
          },
          {
            heading: "Put it together",
            body: "Write correct sentences using all language skills.",
          },
        ],
        keyFormulas: [
          { name: "Language review", statement: "Capitals + punctuation + sentences + vocabulary = correct writing." },
        ],
        workedExample: {
          problem: "Write a correct sentence using a new word.",
          solution: "'I had a delicious lunch.'",
        },
      },
      questions: [
        {
          id: "ela3-u8-review-language-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Correct writing uses which skills?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only capitals"
                    },
                    {
                              "id": "b",
                              "text": "capitals, punctuation, sentences, vocabulary"
                    },
                    {
                              "id": "c",
                              "text": "only words"
                    },
                    {
                              "id": "d",
                              "text": "only spelling"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All language skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All language skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**all skills**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela3-u8-review-language-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write two complete, correct sentences about your day using capitals, punctuation, and one new word.",
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
                                                  "All skills together."
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
                                                  "All skills together."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Writes 2 correct sentences.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'I played outside. The sun was warm.'**"
          ]
},
        },
        {
          id: "ela3-u8-review-language-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is written correctly?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "i like dogs"
                    },
                    {
                              "id": "b",
                              "text": "I like dogs."
                    },
                    {
                              "id": "c",
                              "text": "i Like Dogs"
                    },
                    {
                              "id": "d",
                              "text": "I like dogs?"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Capital I + start + period = correct."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Capital I + start + period = correct.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**I like dogs.**",
          "commonErrors": [
                    "Missing capitals or wrong mark."
          ]
},
        },
        {
          id: "ela3-u8-review-language-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Capital\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": ". for statement."
                    },
                    {
                              "id": "b",
                              "text": "Big letter."
                    },
                    {
                              "id": "c",
                              "text": "? for question."
                    },
                    {
                              "id": "d",
                              "text": "! for excited."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Capital\" means Big letter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Capital\" means Big letter.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Capital** = Big letter.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela3-u8-review-language-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Period\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "? for question."
                    },
                    {
                              "id": "b",
                              "text": "! for excited."
                    },
                    {
                              "id": "c",
                              "text": "Complete thought."
                    },
                    {
                              "id": "d",
                              "text": ". for statement."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Period\" means . for statement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Period\" means . for statement.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Period** = . for statement.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela3-u8-review-language-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Question mark\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "! for excited."
                    },
                    {
                              "id": "b",
                              "text": "? for question."
                    },
                    {
                              "id": "c",
                              "text": "Complete thought."
                    },
                    {
                              "id": "d",
                              "text": "Who/what."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Question mark\" means ? for question."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Question mark\" means ? for question.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Question mark** = ? for question.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela3-u8-review-language-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Exclamation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Complete thought."
                    },
                    {
                              "id": "b",
                              "text": "Who/what."
                    },
                    {
                              "id": "c",
                              "text": "Action."
                    },
                    {
                              "id": "d",
                              "text": "! for excited."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Exclamation\" means ! for excited."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Exclamation\" means ! for excited.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Exclamation** = ! for excited.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela3-u8-review-language-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sentence\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Who/what."
                    },
                    {
                              "id": "b",
                              "text": "Complete thought."
                    },
                    {
                              "id": "c",
                              "text": "Action."
                    },
                    {
                              "id": "d",
                              "text": "Word we learned."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Sentence\" means Complete thought."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sentence\" means Complete thought.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Sentence** = Complete thought.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
