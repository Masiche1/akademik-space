import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "m0-u8-lesson-8-3",
  code: "8-3",
  title: "Review: Teen Numbers",
  goal: "I CAN decompose and compose teen numbers confidently.",
  standards: ["K.NBT.A.1", "K.OA.A.4"],
  vocabulary: [
    { term: "Decompose", definition: "Break into ten + ones." },
    { term: "Compose", definition: "Put parts together." },
    { term: "Teen", definition: "11-19." },
    { term: "Ten", definition: "Group of ten." },
    { term: "Ones", definition: "Single items." },
    { term: "Twenty", definition: "Two tens." },
  ],
  concepts: [
    {
      id: "m0-u8-review-teens",
      title: "Teen numbers review",
      skill: "Break apart and recompose teen numbers fluently.",
      lesson: {
        sections: [
          {
            heading: "Teen = ten + ones",
            body: "Every teen number is a ten plus ones: 11 = 10 + 1, 15 = 10 + 5, 19 = 10 + 9. Practice both breaking apart and putting together.",
          },
          {
            heading: "Use for addition",
            body: "Decomposition helps addition: 13 + 5 = (10 + 3) + 5 = 10 + 8 = 18.",
          },
        ],
        keyFormulas: [
          { name: "Teen numbers", statement: "Teen = 10 + ones; use for add/sub within 20." },
        ],
        workedExample: {
          problem: "Decompose 16, then solve 16 - 7.",
          solution: "16 = 10 + 6; 16 - 7 = **9**.",
        },
      },
      questions: [
        {
          id: "m0-u8-review-teens-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The number 14 decomposes to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "10 + 5"
                    },
                    {
                              "id": "b",
                              "text": "10 + 4"
                    },
                    {
                              "id": "c",
                              "text": "4 + 10 only"
                    },
                    {
                              "id": "d",
                              "text": "14 + 0"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "14 = 10 + 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "14 = 10 + 4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**10 + 4**",
          "commonErrors": [
                    "Picks wrong ones."
          ]
},
        },
        {
          id: "m0-u8-review-teens-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 10 + 9?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 19
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "10 + 9 = 19."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "10 + 9 = 19.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$19$",
          "commonErrors": [
                    "Adds wrong."
          ]
},
        },
        {
          id: "m0-u8-review-teens-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Decompose three teen numbers and recompose one back.",
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
                                                  "Decompose/compose",
                                                  "Teen = 10 + ones."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Decompose/compose",
                                                  "Teen = 10 + ones."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Decomposes 3 + recomposes 1.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., '13=10+3, 17=10+7, 19=10+9; 10+5=15'**"
          ]
},
        },
        {
          id: "m0-u8-review-teens-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 20 - 10?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "10"
                    },
                    {
                              "id": "b",
                              "text": "30"
                    },
                    {
                              "id": "c",
                              "text": "200"
                    },
                    {
                              "id": "d",
                              "text": "100"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "20 - 10 = 10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "20 - 10 = 10.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**10**",
          "commonErrors": [
                    "Adds instead of subtracts."
          ]
},
        },
        {
          id: "m0-u8-review-teens-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Decompose\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Put parts together."
                    },
                    {
                              "id": "b",
                              "text": "Break into ten + ones."
                    },
                    {
                              "id": "c",
                              "text": "11-19."
                    },
                    {
                              "id": "d",
                              "text": "Group of ten."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Decompose\" means Break into ten + ones."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Decompose\" means Break into ten + ones.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Decompose** = Break into ten + ones.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u8-review-teens-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compose\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "11-19."
                    },
                    {
                              "id": "b",
                              "text": "Group of ten."
                    },
                    {
                              "id": "c",
                              "text": "Single items."
                    },
                    {
                              "id": "d",
                              "text": "Put parts together."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Compose\" means Put parts together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Compose\" means Put parts together.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Compose** = Put parts together.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u8-review-teens-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Teen\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Group of ten."
                    },
                    {
                              "id": "b",
                              "text": "11-19."
                    },
                    {
                              "id": "c",
                              "text": "Single items."
                    },
                    {
                              "id": "d",
                              "text": "Two tens."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Teen\" means 11-19."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Teen\" means 11-19.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Teen** = 11-19.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u8-review-teens-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ten\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Single items."
                    },
                    {
                              "id": "b",
                              "text": "Two tens."
                    },
                    {
                              "id": "c",
                              "text": "Break into ten + ones."
                    },
                    {
                              "id": "d",
                              "text": "Group of ten."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ten\" means Group of ten."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ten\" means Group of ten.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ten** = Group of ten.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
