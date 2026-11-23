import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "m0-u8-lesson-8-2",
  code: "8-2",
  title: "Review: Add and Subtract",
  goal: "I CAN add and subtract within 20 fluently.",
  standards: ["K.OA.A.1", "K.OA.A.2", "K.OA.A.3", "K.NBT.A.1"],
  vocabulary: [
    { term: "Add", definition: "Join to find total." },
    { term: "Subtract", definition: "Take away to find left." },
    { term: "Fact", definition: "Memorized sentence." },
    { term: "Fluency", definition: "Fast and accurate." },
    { term: "Within 20", definition: "Sums/differences to 20." },
    { term: "Equation", definition: "Math sentence." },
  ],
  concepts: [
    {
      id: "m0-u8-review-add-sub",
      title: "Add and subtract review",
      skill: "Combine addition and subtraction facts and problems within 20.",
      lesson: {
        sections: [
          {
            heading: "Add + subtract to 20",
            body: "Addition joins groups; subtraction takes away. Both work within 20 using teen decomposition and counting strategies.",
          },
          {
            heading: "Put it together",
            body: "Solve facts, word problems and equations within 20.",
          },
        ],
        keyFormulas: [
          { name: "Review", statement: "Add + subtract within 20 = fluency." },
        ],
        workedExample: {
          problem: "Solve 9 + 7 and 16 - 9.",
          solution: "9 + 7 = **16**; 16 - 9 = **7** (related facts).",
        },
      },
      questions: [
        {
          id: "m0-u8-review-add-sub-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 9 + 7?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 16
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count on from 9: 10, ..., 16. 9 + 7 = 16."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count on from 9: 10, ..., 16. 9 + 7 = 16.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$16$",
          "commonErrors": [
                    "Counts both numbers again instead of counting on."
          ]
},
        },
        {
          id: "m0-u8-review-add-sub-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 9 + 7?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "16"
                    },
                    {
                              "id": "b",
                              "text": "17"
                    },
                    {
                              "id": "c",
                              "text": "14"
                    },
                    {
                              "id": "d",
                              "text": "19"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Make a ten or count on: 9 + 7 = 16."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Make a ten or count on: 9 + 7 = 16.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**16**",
          "commonErrors": [
                    "Adds the digits instead of the quantities."
          ]
},
        },
        {
          id: "m0-u8-review-add-sub-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 16 - 9?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Difference",
                              "answer": 7
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count back from 16: 15, ..., 7. 16 - 9 = 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count back from 16: 15, ..., 7. 16 - 9 = 7.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$7$",
          "commonErrors": [
                    "Adds instead of subtracting."
          ]
},
        },
        {
          id: "m0-u8-review-add-sub-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 16 - 9?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "7"
                    },
                    {
                              "id": "b",
                              "text": "8"
                    },
                    {
                              "id": "c",
                              "text": "5"
                    },
                    {
                              "id": "d",
                              "text": "10"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Take away 9 from 16: 16 - 9 = 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Take away 9 from 16: 16 - 9 = 7.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**7**",
          "commonErrors": [
                    "Reverses the subtraction."
          ]
},
        },
        {
          id: "m0-u8-review-add-sub-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 8 + 6?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 14
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "8 + 2 = 10, 10 + 4 = 14."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8 + 2 = 10, 10 + 4 = 14.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$14$",
          "commonErrors": [
                    "Adds wrong."
          ]
},
        },
        {
          id: "m0-u8-review-add-sub-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve a word problem with addition within 20 and write the equation.",
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
                                                  "Word problem",
                                                  "Add within 20."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Word problem",
                                                  "Add within 20."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Solves and writes equation.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., '7 + 8 = 15'**"
          ]
},
        },
        {
          id: "m0-u8-review-add-sub-q7",
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
                              "text": "Memorized sentence."
                    },
                    {
                              "id": "d",
                              "text": "Fast and accurate."
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
        {
          id: "m0-u8-review-add-sub-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Subtract\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Memorized sentence."
                    },
                    {
                              "id": "b",
                              "text": "Fast and accurate."
                    },
                    {
                              "id": "c",
                              "text": "Sums/differences to 20."
                    },
                    {
                              "id": "d",
                              "text": "Take away to find left."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Subtract\" means Take away to find left."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Subtract\" means Take away to find left.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Subtract** = Take away to find left.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u8-review-add-sub-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fact\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fast and accurate."
                    },
                    {
                              "id": "b",
                              "text": "Memorized sentence."
                    },
                    {
                              "id": "c",
                              "text": "Sums/differences to 20."
                    },
                    {
                              "id": "d",
                              "text": "Math sentence."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fact\" means Memorized sentence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fact\" means Memorized sentence.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fact** = Memorized sentence.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u8-review-add-sub-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fluency\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sums/differences to 20."
                    },
                    {
                              "id": "b",
                              "text": "Math sentence."
                    },
                    {
                              "id": "c",
                              "text": "Join to find total."
                    },
                    {
                              "id": "d",
                              "text": "Fast and accurate."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fluency\" means Fast and accurate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fluency\" means Fast and accurate.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fluency** = Fast and accurate.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
