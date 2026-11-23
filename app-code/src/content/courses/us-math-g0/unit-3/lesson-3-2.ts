import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "m0-u3-lesson-3-2",
  code: "3-2",
  title: "Addition Facts to 10",
  goal: "I CAN quickly recall addition facts with sums up to 10.",
  standards: ["K.OA.A.1", "K.OA.A.5"],
  vocabulary: [
    { term: "Fact", definition: "A number sentence you should know quickly." },
    { term: "Fluency", definition: "Being fast and accurate." },
    { term: "Sum", definition: "Answer to an addition problem." },
    { term: "Pair", definition: "Two numbers that add to a sum." },
    { term: "Doubles", definition: "Adding a number to itself: 3 + 3 = 6." },
  ],
  concepts: [
    {
      id: "m0-u3-add-facts",
      title: "Addition facts",
      skill: "Recall and use addition facts with sums to 10.",
      lesson: {
        sections: [
          {
            heading: "Know your facts",
            body: "An **addition fact** is a number sentence you should know quickly: 3 + 4 = 7, 5 + 5 = 10. **Fluency** means answering fast and correctly.",
          },
          {
            heading: "Doubles and pairs",
            body: "**Doubles** add a number to itself: 2 + 2 = 4, 3 + 3 = 6. Knowing **pairs** (numbers that make a sum) helps you solve problems faster.",
          },
        ],
        keyFormulas: [
          { name: "Addition facts", statement: "Memorize sums to 10 for fluency." },
        ],
        workedExample: {
          problem: "What is 6 + 4?",
          solution: "6 + 4 = **10** — a fact to know by heart.",
        },
      },
      questions: [
        {
          id: "m0-u3-add-facts-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 4 + 5?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 9
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count on from 4: 5, ..., 9. 4 + 5 = 9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count on from 4: 5, ..., 9. 4 + 5 = 9.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$9$",
          "commonErrors": [
                    "Counts both numbers again instead of counting on."
          ]
},
        },
        {
          id: "m0-u3-add-facts-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 4 + 5?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "9"
                    },
                    {
                              "id": "b",
                              "text": "10"
                    },
                    {
                              "id": "c",
                              "text": "7"
                    },
                    {
                              "id": "d",
                              "text": "12"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Make a ten or count on: 4 + 5 = 9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Make a ten or count on: 4 + 5 = 9.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**9**",
          "commonErrors": [
                    "Adds the digits instead of the quantities."
          ]
},
        },
        {
          id: "m0-u3-add-facts-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 2 + 6?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 8
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count on from 2: 3, ..., 8. 2 + 6 = 8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count on from 2: 3, ..., 8. 2 + 6 = 8.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$8$",
          "commonErrors": [
                    "Counts both numbers again instead of counting on."
          ]
},
        },
        {
          id: "m0-u3-add-facts-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 2 + 6?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "8"
                    },
                    {
                              "id": "b",
                              "text": "9"
                    },
                    {
                              "id": "c",
                              "text": "6"
                    },
                    {
                              "id": "d",
                              "text": "11"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Make a ten or count on: 2 + 6 = 8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Make a ten or count on: 2 + 6 = 8.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**8**",
          "commonErrors": [
                    "Adds the digits instead of the quantities."
          ]
},
        },
        {
          id: "m0-u3-add-facts-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 7 + 3?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "9"
                    },
                    {
                              "id": "b",
                              "text": "10"
                    },
                    {
                              "id": "c",
                              "text": "11"
                    },
                    {
                              "id": "d",
                              "text": "8"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "7 + 3 = 10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "7 + 3 = 10.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**10**",
          "commonErrors": [
                    "Adds wrong."
          ]
},
        },
        {
          id: "m0-u3-add-facts-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'double' is when you add...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "two different numbers"
                    },
                    {
                              "id": "b",
                              "text": "a number to itself"
                    },
                    {
                              "id": "c",
                              "text": "ten to one"
                    },
                    {
                              "id": "d",
                              "text": "zero"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Double = number + itself."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Double = number + itself.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**number to itself**",
          "commonErrors": [
                    "Thinks double means any two numbers."
          ]
},
        },
        {
          id: "m0-u3-add-facts-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name three addition facts with sums to 10. Solve each.",
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
                                                  "Addition facts",
                                                  "Recall sums to 10."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Addition facts",
                                                  "Recall sums to 10."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Solves 3 facts correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 2+3=5, 4+4=8, 6+4=10**"
          ]
},
        },
        {
          id: "m0-u3-add-facts-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fact\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Being fast and accurate."
                    },
                    {
                              "id": "b",
                              "text": "A number sentence you should know quickly."
                    },
                    {
                              "id": "c",
                              "text": "Answer to an addition problem."
                    },
                    {
                              "id": "d",
                              "text": "Two numbers that add to a sum."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fact\" means A number sentence you should know quickly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fact\" means A number sentence you should know quickly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fact** = A number sentence you should know quickly.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u3-add-facts-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fluency\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Answer to an addition problem."
                    },
                    {
                              "id": "b",
                              "text": "Two numbers that add to a sum."
                    },
                    {
                              "id": "c",
                              "text": "Adding a number to itself: 3 + 3 = 6."
                    },
                    {
                              "id": "d",
                              "text": "Being fast and accurate."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fluency\" means Being fast and accurate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fluency\" means Being fast and accurate.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fluency** = Being fast and accurate.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u3-add-facts-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sum\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Two numbers that add to a sum."
                    },
                    {
                              "id": "b",
                              "text": "Answer to an addition problem."
                    },
                    {
                              "id": "c",
                              "text": "Adding a number to itself: 3 + 3 = 6."
                    },
                    {
                              "id": "d",
                              "text": "A number sentence you should know quickly."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sum\" means Answer to an addition problem."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sum\" means Answer to an addition problem.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sum** = Answer to an addition problem.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
