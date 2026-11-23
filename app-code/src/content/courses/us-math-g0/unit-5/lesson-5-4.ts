import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "m0-u5-lesson-5-4",
  code: "5-4",
  title: "Numbers to 20 Review",
  goal: "I CAN decompose teen numbers and add/subtract within 20.",
  standards: ["K.NBT.A.1", "K.OA.A.2"],
  vocabulary: [
    { term: "Decompose", definition: "Break into ten + ones." },
    { term: "Teen", definition: "11-19." },
    { term: "Add", definition: "Join to find total." },
    { term: "Subtract", definition: "Take away to find left." },
    { term: "Within 20", definition: "Sums/differences up to 20." },
    { term: "Ten frame", definition: "Tool showing ten + ones." },
  ],
  concepts: [
    {
      id: "m0-u5-numbers-20-review",
      title: "Numbers to 20 review",
      skill: "Combine teen decomposition with addition and subtraction within 20.",
      lesson: {
        sections: [
          {
            heading: "Teen numbers help",
            body: "Knowing teen numbers are **ten plus ones** helps with adding and subtracting: 13 + 4 = (10 + 3) + 4 = 10 + 7 = 17.",
          },
          {
            heading: "Put it together",
            body: "Decompose, add or subtract, and check that your answer is a teen number or 20.",
          },
        ],
        keyFormulas: [
          { name: "Review", statement: "Decompose teen = 10 + ones; add/sub within 20 using tens." },
        ],
        workedExample: {
          problem: "Solve 12 + 7 using decomposition.",
          solution: "12 = 10 + 2; 10 + 2 + 7 = 10 + 9 = **19**.",
        },
      },
      questions: [
        {
          id: "m0-u5-numbers-20-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 12 + 6?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 18
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "12 = 10+2; 10 + 8 = 18."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "12 = 10+2; 10 + 8 = 18.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$18$",
          "commonErrors": [
                    "Adds digits."
          ]
},
        },
        {
          id: "m0-u5-numbers-20-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 18 - 9?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Difference",
                              "answer": 9
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "18 = 10+8; 10+8-9 = 10-1 = 9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "18 = 10+8; 10+8-9 = 10-1 = 9.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$9$",
          "commonErrors": [
                    "Counts wrong."
          ]
},
        },
        {
          id: "m0-u5-numbers-20-review-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 9 + 8?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 17
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count on from 9: 10, ..., 17. 9 + 8 = 17."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count on from 9: 10, ..., 17. 9 + 8 = 17.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$17$",
          "commonErrors": [
                    "Counts both numbers again instead of counting on."
          ]
},
        },
        {
          id: "m0-u5-numbers-20-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 9 + 8?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "17"
                    },
                    {
                              "id": "b",
                              "text": "18"
                    },
                    {
                              "id": "c",
                              "text": "15"
                    },
                    {
                              "id": "d",
                              "text": "20"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Make a ten or count on: 9 + 8 = 17."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Make a ten or count on: 9 + 8 = 17.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**17**",
          "commonErrors": [
                    "Adds the digits instead of the quantities."
          ]
},
        },
        {
          id: "m0-u5-numbers-20-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve 14 - 5 using decomposition. Show steps.",
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
                                                  "Decompose + subtract",
                                                  "14=10+4; 10+4-5=10-1=9."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Decompose + subtract",
                                                  "14=10+4; 10+4-5=10-1=9."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Uses decomposition correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**14 - 5 = 9**"
          ]
},
        },
        {
          id: "m0-u5-numbers-20-review-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 10 + 10?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "20"
                    },
                    {
                              "id": "b",
                              "text": "100"
                    },
                    {
                              "id": "c",
                              "text": "11"
                    },
                    {
                              "id": "d",
                              "text": "200"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "10 + 10 = 20."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "10 + 10 = 20.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**20**",
          "commonErrors": [
                    "Adds wrong."
          ]
},
        },
        {
          id: "m0-u5-numbers-20-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Decompose\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "11-19."
                    },
                    {
                              "id": "b",
                              "text": "Break into ten + ones."
                    },
                    {
                              "id": "c",
                              "text": "Join to find total."
                    },
                    {
                              "id": "d",
                              "text": "Take away to find left."
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
          id: "m0-u5-numbers-20-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Teen\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Join to find total."
                    },
                    {
                              "id": "b",
                              "text": "Take away to find left."
                    },
                    {
                              "id": "c",
                              "text": "Sums/differences up to 20."
                    },
                    {
                              "id": "d",
                              "text": "11-19."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "m0-u5-numbers-20-review-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Add\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Take away to find left."
                    },
                    {
                              "id": "b",
                              "text": "Join to find total."
                    },
                    {
                              "id": "c",
                              "text": "Sums/differences up to 20."
                    },
                    {
                              "id": "d",
                              "text": "Tool showing ten + ones."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Add\" means Join to find total."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Add\" means Join to find total.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Add** = Join to find total.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
