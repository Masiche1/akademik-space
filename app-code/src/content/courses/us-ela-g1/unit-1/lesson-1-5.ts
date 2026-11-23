import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "ela1-u1-lesson-1-5",
  code: "1-5",
  title: "Literature Review",
  goal: "I CAN ask questions, retell, compare and find problem/solution.",
  standards: ["RL.1.1", "RL.1.2", "RL.1.3", "RL.1.9"],
  vocabulary: [
    { term: "Question", definition: "Ask to learn." },
    { term: "Detail", definition: "Small fact." },
    { term: "Retell", definition: "Tell story again." },
    { term: "Compare", definition: "Same/different." },
    { term: "Problem", definition: "Challenge." },
    { term: "Solution", definition: "Fix." },
    { term: "Story", definition: "A tale." },
    { term: "Character", definition: "Who is in it." },
  ],
  concepts: [
    {
      id: "ela1-u1-literature-review",
      title: "Literature review",
      skill: "Combine all literature reading skills.",
      lesson: {
        sections: [
          {
            heading: "All literature skills",
            body: "Reading literature includes **asking/answering questions**, **retelling** stories, **comparing** stories, and finding **problem/solution**.",
          },
          {
            heading: "Put it together",
            body: "Read a story, ask questions, retell it, compare it, and find its problem/solution.",
          },
        ],
        keyFormulas: [
          { name: "Literature", statement: "Questions + retell + compare + problem/solution = all reading skills." },
        ],
        workedExample: {
          problem: "Read a story: ask a question, retell it, compare to another, find problem/solution.",
          solution: "All skills demonstrated = literature mastery.",
        },
      },
      questions: [
        {
          id: "ela1-u1-literature-review-q1",
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
                              "text": "questions, retell, compare, problem/solution"
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
          id: "ela1-u1-literature-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read a story. Ask a question, retell it, and name its problem and solution.",
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
                                                  "Question + retell + problem/solution."
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
                                                  "Question + retell + problem/solution."
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
                    "**e.g., 'Q: Who? A: Mia. Retell: began X, then Y, ended Z. Problem: lost; Solution: found.'**"
          ]
},
        },
        {
          id: "ela1-u1-literature-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A story's 'problem' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the ending"
                    },
                    {
                              "id": "b",
                              "text": "a challenge"
                    },
                    {
                              "id": "c",
                              "text": "the setting"
                    },
                    {
                              "id": "d",
                              "text": "a character"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Problem = challenge."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Problem = challenge.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**a challenge**",
          "commonErrors": [
                    "Confuses with solution."
          ]
},
        },
        {
          id: "ela1-u1-literature-review-q4",
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
                              "text": "Same/different."
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
          id: "ela1-u1-literature-review-q5",
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
                              "text": "Same/different."
                    },
                    {
                              "id": "c",
                              "text": "Challenge."
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
          id: "ela1-u1-literature-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Retell\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Same/different."
                    },
                    {
                              "id": "b",
                              "text": "Tell story again."
                    },
                    {
                              "id": "c",
                              "text": "Challenge."
                    },
                    {
                              "id": "d",
                              "text": "Fix."
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
          id: "ela1-u1-literature-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compare\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Challenge."
                    },
                    {
                              "id": "b",
                              "text": "Fix."
                    },
                    {
                              "id": "c",
                              "text": "A tale."
                    },
                    {
                              "id": "d",
                              "text": "Same/different."
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "ela1-u1-literature-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Problem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fix."
                    },
                    {
                              "id": "b",
                              "text": "Challenge."
                    },
                    {
                              "id": "c",
                              "text": "A tale."
                    },
                    {
                              "id": "d",
                              "text": "Who is in it."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Problem\" means Challenge."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Problem\" means Challenge.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Problem** = Challenge.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
