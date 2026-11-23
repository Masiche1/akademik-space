import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "ela0-u8-lesson-8-1",
  code: "8-1",
  title: "Review: Reading",
  goal: "I CAN use all reading skills: questions, retelling, details, comparing, informational texts.",
  standards: ["RL.K.1", "RL.K.2", "RL.K.9", "RI.K.1", "RI.K.2", "RI.K.5"],
  vocabulary: [
    { term: "Question", definition: "Ask to learn." },
    { term: "Answer", definition: "What we say." },
    { term: "Retell", definition: "Tell story again." },
    { term: "Detail", definition: "Small fact." },
    { term: "Compare", definition: "Same/different." },
    { term: "Informational", definition: "Teaches facts." },
    { term: "Main topic", definition: "What it's about." },
    { term: "Text feature", definition: "Part that helps." },
  ],
  concepts: [
    {
      id: "ela0-u8-review-reading",
      title: "Reading review",
      skill: "Combine all reading skills: literature and informational text.",
      lesson: {
        sections: [
          {
            heading: "All the reading skills",
            body: "Reading includes **questions and answers**, **retelling**, **key details**, **comparing characters**, and **informational text** skills (topic, details, features).",
          },
          {
            heading: "Put it together",
            body: "Read a story or info text, ask questions, retell or find topic, use details and features.",
          },
        ],
        keyFormulas: [
          { name: "Reading review", statement: "Questions + retell + details + compare + info text = all reading skills." },
        ],
        workedExample: {
          problem: "Read a text. Ask a question, find a detail, and (if info) find the topic.",
          solution: "Ask Q, answer with detail; if story retell, if info find topic.",
        },
      },
      questions: [
        {
          id: "ela0-u8-review-reading-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Reading skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only spelling"
                    },
                    {
                              "id": "b",
                              "text": "questions, retell, details, compare, info text"
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
                              "statement": "All reading skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All reading skills.",
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
          id: "ela0-u8-review-reading-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read a text. Ask a question, answer with a detail, and tell whether it's a story or informational text.",
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
                                                  "Question + detail + classify."
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
                                                  "Question + detail + classify."
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
                    "**e.g., 'Q: Who? A: Mia (detail). It's a story.'**"
          ]
},
        },
        {
          id: "ela0-u8-review-reading-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Informational text teaches...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "made-up stories"
                    },
                    {
                              "id": "b",
                              "text": "real facts"
                    },
                    {
                              "id": "c",
                              "text": "jokes"
                    },
                    {
                              "id": "d",
                              "text": "poems only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Info text teaches facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Info text teaches facts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**real facts**",
          "commonErrors": [
                    "Thinks it's fiction."
          ]
},
        },
        {
          id: "ela0-u8-review-reading-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Question\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What we say."
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
                              "text": "Small fact."
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
          id: "ela0-u8-review-reading-q5",
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
                              "text": "Small fact."
                    },
                    {
                              "id": "c",
                              "text": "Same/different."
                    },
                    {
                              "id": "d",
                              "text": "What we say."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Answer\" means What we say."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Answer\" means What we say.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Answer** = What we say.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u8-review-reading-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Retell\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Small fact."
                    },
                    {
                              "id": "b",
                              "text": "Tell story again."
                    },
                    {
                              "id": "c",
                              "text": "Same/different."
                    },
                    {
                              "id": "d",
                              "text": "Teaches facts."
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
          id: "ela0-u8-review-reading-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Detail\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Same/different."
                    },
                    {
                              "id": "b",
                              "text": "Teaches facts."
                    },
                    {
                              "id": "c",
                              "text": "What it's about."
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
          id: "ela0-u8-review-reading-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compare\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Teaches facts."
                    },
                    {
                              "id": "b",
                              "text": "Same/different."
                    },
                    {
                              "id": "c",
                              "text": "What it's about."
                    },
                    {
                              "id": "d",
                              "text": "Part that helps."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Compare\" means Same/different."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Compare\" means Same/different.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Compare** = Same/different.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
