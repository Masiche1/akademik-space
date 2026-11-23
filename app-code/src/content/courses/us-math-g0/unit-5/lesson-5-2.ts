import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "m0-u5-lesson-5-2",
  code: "5-2",
  title: "Add Within 20",
  goal: "I CAN add numbers with sums up to 20.",
  standards: ["K.OA.A.2", "K.NBT.A.1"],
  vocabulary: [
    { term: "Add", definition: "Join groups to find total." },
    { term: "Within 20", definition: "Sums that stay at or under 20." },
    { term: "Teen number", definition: "11-19 result." },
    { term: "Ten", definition: "A group of ten helps." },
    { term: "Ones", definition: "Single items." },
    { term: "Equation", definition: "a + b = c." },
  ],
  concepts: [
    {
      id: "m0-u5-add-to-20",
      title: "Adding within 20",
      skill: "Add numbers with sums up to 20 using ten frames and counting on.",
      lesson: {
        sections: [
          {
            heading: "Making tens",
            body: "When adding within 20, look for ways to **make a ten** first: 8 + 5 = (8 + 2) + 3 = 10 + 3 = 13. This makes bigger sums easier.",
          },
          {
            heading: "Count on",
            body: "Start with the bigger number and **count on** the smaller: 9 + 4 = start at 9, count 10, 11, 12, 13 = **13**.",
          },
        ],
        keyFormulas: [
          { name: "Add to 20", statement: "Make a ten or count on to find sums up to 20." },
        ],
        workedExample: {
          problem: "Solve 8 + 6.",
          solution: "8 + 2 = 10, then 10 + 4 = **14**. So 8 + 6 = 14.",
        },
      },
      questions: [
        {
          id: "m0-u5-add-to-20-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 9 + 5?",
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
                              "statement": "9 + 1 = 10, then 10 + 4 = 14."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "9 + 1 = 10, then 10 + 4 = 14.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$14$",
          "commonErrors": [
                    "Adds digits instead of quantities."
          ]
},
        },
        {
          id: "m0-u5-add-to-20-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 7 + 8?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 15
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "7 + 3 = 10, then 10 + 5 = 15."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "7 + 3 = 10, then 10 + 5 = 15.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$15$",
          "commonErrors": [
                    "Counts wrong."
          ]
},
        },
        {
          id: "m0-u5-add-to-20-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 6 + 7?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 13
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count on from 6: 7, ..., 13. 6 + 7 = 13."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count on from 6: 7, ..., 13. 6 + 7 = 13.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$13$",
          "commonErrors": [
                    "Counts both numbers again instead of counting on."
          ]
},
        },
        {
          id: "m0-u5-add-to-20-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 6 + 7?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "13"
                    },
                    {
                              "id": "b",
                              "text": "14"
                    },
                    {
                              "id": "c",
                              "text": "11"
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
                              "statement": "Make a ten or count on: 6 + 7 = 13."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Make a ten or count on: 6 + 7 = 13.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**13**",
          "commonErrors": [
                    "Adds the digits instead of the quantities."
          ]
},
        },
        {
          id: "m0-u5-add-to-20-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve 8 + 7 by making a ten. Show your steps.",
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
                                                  "Make a ten",
                                                  "8 + 2 = 10, then 10 + 5 = 15."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Make a ten",
                                                  "8 + 2 = 10, then 10 + 5 = 15."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Uses make-a-ten strategy.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**8 + 2 = 10, 10 + 5 = 15, so 15**"
          ]
},
        },
        {
          id: "m0-u5-add-to-20-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 11 + 4?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "14"
                    },
                    {
                              "id": "b",
                              "text": "15"
                    },
                    {
                              "id": "c",
                              "text": "110"
                    },
                    {
                              "id": "d",
                              "text": "5"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "11 + 4 = 15."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "11 + 4 = 15.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**15**",
          "commonErrors": [
                    "Adds wrong."
          ]
},
        },
        {
          id: "m0-u5-add-to-20-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Add\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sums that stay at or under 20."
                    },
                    {
                              "id": "b",
                              "text": "Join groups to find total."
                    },
                    {
                              "id": "c",
                              "text": "11-19 result."
                    },
                    {
                              "id": "d",
                              "text": "A group of ten helps."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Add\" means Join groups to find total."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Add\" means Join groups to find total.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Add** = Join groups to find total.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u5-add-to-20-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Within 20\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "11-19 result."
                    },
                    {
                              "id": "b",
                              "text": "A group of ten helps."
                    },
                    {
                              "id": "c",
                              "text": "Single items."
                    },
                    {
                              "id": "d",
                              "text": "Sums that stay at or under 20."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Within 20\" means Sums that stay at or under 20."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Within 20\" means Sums that stay at or under 20.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Within 20** = Sums that stay at or under 20.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u5-add-to-20-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Teen number\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A group of ten helps."
                    },
                    {
                              "id": "b",
                              "text": "11-19 result."
                    },
                    {
                              "id": "c",
                              "text": "Single items."
                    },
                    {
                              "id": "d",
                              "text": "a + b = c."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Teen number\" means 11-19 result."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Teen number\" means 11-19 result.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Teen number** = 11-19 result.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
