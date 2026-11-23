import type { Lesson } from "../../../types.ts";

export const lesson16: Lesson = {
  id: "ela2-u1-lesson-1-6",
  code: "1-6",
  title: "Literature Review",
  goal: "I CAN ask questions, retell, compare, find problem/solution and purpose.",
  standards: ["RL.2.1", "RL.2.2", "RL.2.3", "RL.2.5", "RL.2.6", "RL.2.9"],
  vocabulary: [
    { term: "Question", definition: "Ask to learn." },
    { term: "Detail", definition: "Small fact." },
    { term: "Retell", definition: "Tell story again." },
    { term: "Compare", definition: "Same/different." },
    { term: "Problem", definition: "Challenge." },
    { term: "Solution", definition: "Fix." },
    { term: "Purpose", definition: "Why written." },
    { term: "Story", definition: "A tale." },
  ],
  concepts: [
    {
      id: "ela2-u1-literature-review",
      title: "Literature review",
      skill: "Combine all literature reading skills.",
      lesson: {
        sections: [
          {
            heading: "All literature skills",
            body: "Reading literature includes **asking/answering questions**, **retelling** stories, **comparing** stories, finding **problem/solution**, and identifying **author's purpose**.",
          },
          {
            heading: "Put it together",
            body: "Read a story, ask questions, retell it, compare it, find problem/solution, identify purpose.",
          },
        ],
        keyFormulas: [
          { name: "Literature", statement: "Questions + retell + compare + problem/solution + purpose = all reading skills." },
        ],
        workedExample: {
          problem: "Read a story: ask a question, retell it, compare to another, find problem/solution, identify purpose.",
          solution: "All skills demonstrated = literature mastery.",
        },
      },
      questions: [
        {
          id: "ela2-u1-literature-review-q1",
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
                              "text": "questions, retell, compare, problem/solution, purpose"
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
          id: "ela2-u1-literature-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read a story. Ask a question, retell it, name its problem and solution, and identify the author's purpose.",
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
                                                  "Question + retell + problem/solution + purpose."
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
                                                  "Question + retell + problem/solution + purpose."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all four.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Q: Who? A: Mia. Retell: began X, then Y. Problem: lost; Solution: found. Purpose: entertain.'**"
          ]
},
        },
        {
          id: "ela2-u1-literature-review-q3",
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
          id: "ela2-u1-literature-review-q4",
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
          id: "ela2-u1-literature-review-q5",
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
          id: "ela2-u1-literature-review-q6",
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
          id: "ela2-u1-literature-review-q7",
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
                              "text": "Why written."
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
          id: "ela2-u1-literature-review-q8",
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
                              "text": "Why written."
                    },
                    {
                              "id": "d",
                              "text": "A tale."
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
