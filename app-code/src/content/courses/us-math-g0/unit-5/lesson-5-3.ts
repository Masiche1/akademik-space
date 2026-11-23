import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "m0-u5-lesson-5-3",
  code: "5-3",
  title: "Subtract Within 20",
  goal: "I CAN subtract within 20.",
  standards: ["K.OA.A.2", "K.NBT.A.1"],
  vocabulary: [
    { term: "Subtract", definition: "Take away to find left." },
    { term: "Within 20", definition: "Differences up to 20." },
    { term: "Teen number", definition: "11-19 involved." },
    { term: "Count back", definition: "Count backward to subtract." },
    { term: "Ten", definition: "A group of ten helps." },
    { term: "Equation", definition: "a - b = c." },
  ],
  concepts: [
    {
      id: "m0-u5-sub-to-20",
      title: "Subtracting within 20",
      skill: "Subtract numbers within 20 using counting back and ten frames.",
      lesson: {
        sections: [
          {
            heading: "Counting back",
            body: "To subtract, **count back** from the starting number: 15 - 4 = count back 14, 13, 12, 11 = **11**.",
          },
          {
            heading: "Use tens",
            body: "Break numbers into ten and ones to subtract: 15 - 4 = (10 + 5) - 4 = 10 + 1 = 11. This keeps numbers manageable.",
          },
        ],
        keyFormulas: [
          { name: "Subtract to 20", statement: "Count back or use ten and ones to subtract within 20." },
        ],
        workedExample: {
          problem: "Solve 14 - 6.",
          solution: "14 - 4 = 10, then 10 - 2 = **8**. So 14 - 6 = 8.",
        },
      },
      questions: [
        {
          id: "m0-u5-sub-to-20-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 13 - 5?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Difference",
                              "answer": 8
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "13 - 3 = 10, then 10 - 2 = 8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "13 - 3 = 10, then 10 - 2 = 8.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$8$",
          "commonErrors": [
                    "Adds instead of subtracts."
          ]
},
        },
        {
          id: "m0-u5-sub-to-20-q2",
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
                              "statement": "16 - 6 = 10, then 10 - 3 = 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "16 - 6 = 10, then 10 - 3 = 7.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$7$",
          "commonErrors": [
                    "Counts wrong."
          ]
},
        },
        {
          id: "m0-u5-sub-to-20-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 12 - 5?",
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
                              "statement": "Count back from 12: 11, ..., 7. 12 - 5 = 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count back from 12: 11, ..., 7. 12 - 5 = 7.",
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
          id: "m0-u5-sub-to-20-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 12 - 5?",
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
                              "statement": "Take away 5 from 12: 12 - 5 = 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Take away 5 from 12: 12 - 5 = 7.",
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
          id: "m0-u5-sub-to-20-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve 15 - 8 by counting back. Show your steps.",
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
                                                  "Count back",
                                                  "15 - 5 = 10, 10 - 3 = 7."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Count back",
                                                  "15 - 5 = 10, 10 - 3 = 7."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Uses counting back correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**15 -> 14,13,12,11,10,9,8,7 = 8 steps? No: 15 - 8 = 7**"
          ]
},
        },
        {
          id: "m0-u5-sub-to-20-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 20 - 13?",
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
                              "text": "33"
                    },
                    {
                              "id": "d",
                              "text": "13"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "20 - 13 = 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "20 - 13 = 7.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**7**",
          "commonErrors": [
                    "Adds instead of subtracts."
          ]
},
        },
        {
          id: "m0-u5-sub-to-20-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Subtract\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Differences up to 20."
                    },
                    {
                              "id": "b",
                              "text": "Take away to find left."
                    },
                    {
                              "id": "c",
                              "text": "11-19 involved."
                    },
                    {
                              "id": "d",
                              "text": "Count backward to subtract."
                    }
          ],
          "correctChoiceId": "b"
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
          id: "m0-u5-sub-to-20-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Within 20\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "11-19 involved."
                    },
                    {
                              "id": "b",
                              "text": "Count backward to subtract."
                    },
                    {
                              "id": "c",
                              "text": "A group of ten helps."
                    },
                    {
                              "id": "d",
                              "text": "Differences up to 20."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Within 20\" means Differences up to 20."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Within 20\" means Differences up to 20.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Within 20** = Differences up to 20.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u5-sub-to-20-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Teen number\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Count backward to subtract."
                    },
                    {
                              "id": "b",
                              "text": "11-19 involved."
                    },
                    {
                              "id": "c",
                              "text": "A group of ten helps."
                    },
                    {
                              "id": "d",
                              "text": "a - b = c."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Teen number\" means 11-19 involved."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Teen number\" means 11-19 involved.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Teen number** = 11-19 involved.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
