import type { Lesson } from "../../../types.ts";

export const lesson16: Lesson = {
  id: "ela0-u1-lesson-1-6",
  code: "1-6",
  title: "Reading Literature Review",
  goal: "I CAN ask questions, retell, use picture clues and find details.",
  standards: ["RL.K.1", "RL.K.2", "RL.K.3", "RL.K.7"],
  vocabulary: [
    { term: "Question", definition: "Ask to learn." },
    { term: "Answer", definition: "What we say back." },
    { term: "Retell", definition: "Tell story again." },
    { term: "Picture clue", definition: "Picture that helps." },
    { term: "Detail", definition: "Small fact." },
    { term: "Key detail", definition: "Important detail." },
    { term: "Evidence", definition: "Detail supporting answer." },
  ],
  concepts: [
    {
      id: "ela0-u1-literature-review",
      title: "Reading literature review",
      skill: "Combine questions, retelling, picture clues and details.",
      lesson: {
        sections: [
          {
            heading: "All the reading skills",
            body: "Reading literature includes: **asking and answering questions**, **retelling** stories, using **picture clues**, and finding **key details** as **evidence**.",
          },
          {
            heading: "Put it together",
            body: "Read a story, ask questions, retell it, use pictures, and point to details that prove your answers.",
          },
        ],
        keyFormulas: [
          { name: "Reading lit", statement: "Questions + retell + picture clues + details = understanding stories." },
        ],
        workedExample: {
          problem: "Read a story, ask one question, retell it, and point to a detail.",
          solution: "Ask 'What happened?', retell beginning-middle-end, point to key detail.",
        },
      },
      questions: [
        {
          id: "ela0-u1-literature-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Reading literature skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only spelling"
                    },
                    {
                              "id": "b",
                              "text": "questions, retelling, picture clues, details"
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
                              "statement": "All literature reading skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All literature reading skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**all reading skills**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela0-u1-literature-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read a story. Ask a question, retell the story, and point to one key detail.",
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
                                                  "All reading",
                                                  "Question + retell + detail."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All reading",
                                                  "Question + retell + detail."
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
                    "**e.g., 'Q: Who? A: Mia. Retell: began X, then Y, ended Z. Detail: red kite.'**"
          ]
},
        },
        {
          id: "ela0-u1-literature-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'picture clue' helps us...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "count"
                    },
                    {
                              "id": "b",
                              "text": "understand the story"
                    },
                    {
                              "id": "c",
                              "text": "spell"
                    },
                    {
                              "id": "d",
                              "text": "add"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Picture clues help us understand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Picture clues help us understand.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**understand story**",
          "commonErrors": [
                    "Thinks pictures are unrelated."
          ]
},
        },
        {
          id: "ela0-u1-literature-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Question\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What we say back."
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
                              "text": "Picture that helps."
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
          id: "ela0-u1-literature-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Answer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Tell story again."
                    },
                    {
                              "id": "b",
                              "text": "Picture that helps."
                    },
                    {
                              "id": "c",
                              "text": "Small fact."
                    },
                    {
                              "id": "d",
                              "text": "What we say back."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Answer\" means What we say back."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Answer\" means What we say back.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Answer** = What we say back.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u1-literature-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Retell\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Picture that helps."
                    },
                    {
                              "id": "b",
                              "text": "Tell story again."
                    },
                    {
                              "id": "c",
                              "text": "Small fact."
                    },
                    {
                              "id": "d",
                              "text": "Important detail."
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
          id: "ela0-u1-literature-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Picture clue\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Small fact."
                    },
                    {
                              "id": "b",
                              "text": "Important detail."
                    },
                    {
                              "id": "c",
                              "text": "Detail supporting answer."
                    },
                    {
                              "id": "d",
                              "text": "Picture that helps."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Picture clue\" means Picture that helps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Picture clue\" means Picture that helps.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Picture clue** = Picture that helps.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u1-literature-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Detail\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Important detail."
                    },
                    {
                              "id": "b",
                              "text": "Small fact."
                    },
                    {
                              "id": "c",
                              "text": "Detail supporting answer."
                    },
                    {
                              "id": "d",
                              "text": "Ask to learn."
                    }
          ],
          "correctChoiceId": "b"
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
      ],
    },
  ],
};
