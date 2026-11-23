import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "m0-u4-lesson-4-1",
  code: "4-1",
  title: "Subtract with Objects",
  goal: "I CAN show subtraction by taking away objects.",
  standards: ["K.OA.A.1", "K.OA.A.3"],
  vocabulary: [
    { term: "Subtract", definition: "Take away objects to find how many are left." },
    { term: "Minus", definition: "The symbol - means take away." },
    { term: "Difference", definition: "The answer to a subtraction problem." },
    { term: "Take away", definition: "Remove objects from a group." },
    { term: "Left", definition: "What remains after taking away." },
  ],
  concepts: [
    {
      id: "m0-u4-sub-objects",
      title: "Subtracting with objects",
      skill: "Model subtraction by removing objects and counting what's left.",
      lesson: {
        sections: [
          {
            heading: "Taking away",
            body: "**Subtraction** means taking objects away. Start with 7 objects, take away 3, count what's **left**: 4 objects.",
          },
          {
            heading: "The minus sign",
            body: "We write subtraction with **-** (minus): 7 - 3 = 4. This means seven take away three equals four.",
          },
        ],
        keyFormulas: [
          { name: "Subtraction", statement: "a - b = difference. Take away b from a, count left." },
          { name: "Equation", statement: "7 - 3 = 4 means seven minus three equals four." },
        ],
        workedExample: {
          problem: "Show 8 - 5 with objects.",
          solution: "8 objects - take away 5 = **3 objects left**. Equation: 8 - 5 = 3.",
        },
      },
      questions: [
        {
          id: "m0-u4-sub-objects-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 7 - 3?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Difference",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count back from 7: 6, ..., 4. 7 - 3 = 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count back from 7: 6, ..., 4. 7 - 3 = 4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$4$",
          "commonErrors": [
                    "Adds instead of subtracting."
          ]
},
        },
        {
          id: "m0-u4-sub-objects-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 7 - 3?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4"
                    },
                    {
                              "id": "b",
                              "text": "5"
                    },
                    {
                              "id": "c",
                              "text": "2"
                    },
                    {
                              "id": "d",
                              "text": "7"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Take away 3 from 7: 7 - 3 = 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Take away 3 from 7: 7 - 3 = 4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**4**",
          "commonErrors": [
                    "Reverses the subtraction."
          ]
},
        },
        {
          id: "m0-u4-sub-objects-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 9 - 4?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Difference",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count back from 9: 8, ..., 5. 9 - 4 = 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count back from 9: 8, ..., 5. 9 - 4 = 5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$5$",
          "commonErrors": [
                    "Adds instead of subtracting."
          ]
},
        },
        {
          id: "m0-u4-sub-objects-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 9 - 4?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "5"
                    },
                    {
                              "id": "b",
                              "text": "6"
                    },
                    {
                              "id": "c",
                              "text": "3"
                    },
                    {
                              "id": "d",
                              "text": "8"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Take away 4 from 9: 9 - 4 = 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Take away 4 from 9: 9 - 4 = 5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**5**",
          "commonErrors": [
                    "Reverses the subtraction."
          ]
},
        },
        {
          id: "m0-u4-sub-objects-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In 9 - 2 = 7, what does the - sign mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "add"
                    },
                    {
                              "id": "b",
                              "text": "take away/subtract"
                    },
                    {
                              "id": "c",
                              "text": "equals"
                    },
                    {
                              "id": "d",
                              "text": "multiply"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "- means take away."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "- means take away.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**take away**",
          "commonErrors": [
                    "Confuses - with +."
          ]
},
        },
        {
          id: "m0-u4-sub-objects-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Show 6 - 2 with objects or fingers. Write the equation.",
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
                                                  "Subtract",
                                                  "Take away, write a - b = difference."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Subtract",
                                                  "Take away, write a - b = difference."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Models 6 - 2 = 4.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**6 - 2 = 4**"
          ]
},
        },
        {
          id: "m0-u4-sub-objects-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 10 - 6?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4"
                    },
                    {
                              "id": "b",
                              "text": "5"
                    },
                    {
                              "id": "c",
                              "text": "6"
                    },
                    {
                              "id": "d",
                              "text": "16"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "10 - 6 = 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "10 - 6 = 4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**4**",
          "commonErrors": [
                    "Adds instead of subtracts."
          ]
},
        },
        {
          id: "m0-u4-sub-objects-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Subtract\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The symbol - means take away."
                    },
                    {
                              "id": "b",
                              "text": "Take away objects to find how many are left."
                    },
                    {
                              "id": "c",
                              "text": "The answer to a subtraction problem."
                    },
                    {
                              "id": "d",
                              "text": "Remove objects from a group."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Subtract\" means Take away objects to find how many are left."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Subtract\" means Take away objects to find how many are left.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Subtract** = Take away objects to find how many are left.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u4-sub-objects-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Minus\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The answer to a subtraction problem."
                    },
                    {
                              "id": "b",
                              "text": "Remove objects from a group."
                    },
                    {
                              "id": "c",
                              "text": "What remains after taking away."
                    },
                    {
                              "id": "d",
                              "text": "The symbol - means take away."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Minus\" means The symbol - means take away."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Minus\" means The symbol - means take away.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Minus** = The symbol - means take away.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u4-sub-objects-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Difference\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Remove objects from a group."
                    },
                    {
                              "id": "b",
                              "text": "The answer to a subtraction problem."
                    },
                    {
                              "id": "c",
                              "text": "What remains after taking away."
                    },
                    {
                              "id": "d",
                              "text": "Take away objects to find how many are left."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Difference\" means The answer to a subtraction problem."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Difference\" means The answer to a subtraction problem.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Difference** = The answer to a subtraction problem.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
