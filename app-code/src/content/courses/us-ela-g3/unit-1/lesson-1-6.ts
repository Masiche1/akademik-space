import type { Lesson } from "../../../types.ts";

export const lesson16: Lesson = {
  id: "ela3-u1-lesson-1-6",
  code: "1-6",
  title: "Literature Review",
  goal: "I CAN ask questions, retell, describe characters and feelings.",
  standards: ["RL.3.1", "RL.3.2", "RL.3.3"],
  vocabulary: [
    { term: "Question", definition: "Ask to learn." },
    { term: "Detail", definition: "Small fact." },
    { term: "Retell", definition: "Tell story again." },
    { term: "Character", definition: "Who is in story." },
    { term: "Trait", definition: "Quality." },
    { term: "Feeling", definition: "Emotion." },
    { term: "Because", definition: "Gives reason." },
    { term: "Change", definition: "Becomes different." },
  ],
  concepts: [
    {
      id: "ela3-u1-literature-review",
      title: "Literature review",
      skill: "Combine questions, retelling and character skills.",
      lesson: {
        sections: [
          {
            heading: "All literature skills",
            body: "Reading literature includes **asking/answering questions**, **retelling** stories, and describing **characters** (traits, feelings, changes).",
          },
          {
            heading: "Put it together",
            body: "Read a story, ask questions, retell it, describe characters.",
          },
        ],
        keyFormulas: [
          { name: "Literature", statement: "Questions + retell + characters = all reading skills." },
        ],
        workedExample: {
          problem: "Read a story: ask a question, retell it, describe a character's traits and feelings.",
          solution: "All skills demonstrated = literature mastery.",
        },
      },
      questions: [
        {
          id: "ela3-u1-literature-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Literature reading skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only spelling"
                    },
                    {
                              "id": "b",
                              "text": "questions, retell, characters"
                    },
                    {
                              "id": "c",
                              "text": "only writing"
                    },
                    {
                              "id": "d",
                              "text": "only math"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All literature skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All literature skills.",
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
          id: "ela3-u1-literature-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read a story. Ask a question, retell it, and describe one character's traits and feelings.",
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
                                                  "All literature",
                                                  "Question + retell + character."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All literature",
                                                  "Question + retell + character."
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
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Q: Who? A: Mia. Retell: began X. Character: kind, happy.'**"
          ]
},
        },
        {
          id: "ela3-u1-literature-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'trait' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a feeling"
                    },
                    {
                              "id": "b",
                              "text": "a quality of a character"
                    },
                    {
                              "id": "c",
                              "text": "a place"
                    },
                    {
                              "id": "d",
                              "text": "a thing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Trait = character quality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Trait = character quality.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**character quality**",
          "commonErrors": [
                    "Confuses with feeling."
          ]
},
        },
        {
          id: "ela3-u1-literature-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Question\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Small fact."
                    },
                    {
                              "id": "b",
                              "text": "Ask to learn."
                    },
                    {
                              "id": "c",
                              "text": "Tell story again."
                    },
                    {
                              "id": "d",
                              "text": "Who is in story."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Question\" means Ask to learn."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Question\" means Ask to learn.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Question** = Ask to learn.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela3-u1-literature-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Detail\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Tell story again."
                    },
                    {
                              "id": "b",
                              "text": "Who is in story."
                    },
                    {
                              "id": "c",
                              "text": "Quality."
                    },
                    {
                              "id": "d",
                              "text": "Small fact."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Detail\" means Small fact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Detail\" means Small fact.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Detail** = Small fact.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela3-u1-literature-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Retell\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Who is in story."
                    },
                    {
                              "id": "b",
                              "text": "Tell story again."
                    },
                    {
                              "id": "c",
                              "text": "Quality."
                    },
                    {
                              "id": "d",
                              "text": "Emotion."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Retell\" means Tell story again."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Retell\" means Tell story again.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Retell** = Tell story again.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela3-u1-literature-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Character\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Quality."
                    },
                    {
                              "id": "b",
                              "text": "Emotion."
                    },
                    {
                              "id": "c",
                              "text": "Gives reason."
                    },
                    {
                              "id": "d",
                              "text": "Who is in story."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Character\" means Who is in story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Character\" means Who is in story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Character** = Who is in story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela3-u1-literature-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Trait\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Emotion."
                    },
                    {
                              "id": "b",
                              "text": "Quality."
                    },
                    {
                              "id": "c",
                              "text": "Gives reason."
                    },
                    {
                              "id": "d",
                              "text": "Becomes different."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Trait\" means Quality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Trait\" means Quality.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Trait** = Quality.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
