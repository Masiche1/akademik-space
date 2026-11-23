import type { Lesson } from "../../../types.ts";

export const lesson75: Lesson = {
  id: "ela0-u7-lesson-7-5",
  code: "7-5",
  title: "Language Review",
  goal: "I CAN use capitals, punctuation, complete sentences and new words.",
  standards: ["L.K.1", "L.K.2", "L.K.4", "L.K.5", "L.K.6"],
  vocabulary: [
    { term: "Capital", definition: "Big letter for start/names/I." },
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
      id: "ela0-u7-language-review",
      title: "Language review",
      skill: "Combine capitalization, punctuation, sentences and vocabulary.",
      lesson: {
        sections: [
          {
            heading: "All the language skills",
            body: "Language includes **capitalization** (start, names, I), **end punctuation** (. ? !), **complete sentences** (subject + verb), and **vocabulary** (learning new words).",
          },
          {
            heading: "Put it together",
            body: "Write sentences with correct capitals, punctuation, complete structure, and new words.",
          },
        ],
        keyFormulas: [
          { name: "Language", statement: "Capitals + punctuation + sentences + vocabulary = strong writing." },
        ],
        workedExample: {
          problem: "Write a complete, correct sentence about your day using a new word.",
          solution: "'I had a **delicious** lunch at school.' — capital I, period, complete, new word.",
        },
      },
      questions: [
        {
          id: "ela0-u7-language-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Correct writing includes which skills?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only spelling"
                    },
                    {
                              "id": "b",
                              "text": "capitals, punctuation, sentences, vocabulary"
                    },
                    {
                              "id": "c",
                              "text": "only capitals"
                    },
                    {
                              "id": "d",
                              "text": "only words"
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
          "finalAnswer": "**all language skills**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela0-u7-language-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write two complete sentences about your day. Use capitals, correct end punctuation, and one new word.",
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
                                                  "Capitals + punctuation + sentences + new word."
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
                                                  "Capitals + punctuation + sentences + new word."
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
          id: "ela0-u7-language-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence is written correctly?",
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
                              "statement": "Capital I + capital start + period = correct."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Capital I + capital start + period = correct.",
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
          id: "ela0-u7-language-review-q4",
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
                              "text": "Big letter for start/names/I."
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
                              "statement": "\"Capital\" means Big letter for start/names/I."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Capital\" means Big letter for start/names/I.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Capital** = Big letter for start/names/I.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u7-language-review-q5",
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
          id: "ela0-u7-language-review-q6",
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
          id: "ela0-u7-language-review-q7",
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
          id: "ela0-u7-language-review-q8",
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
