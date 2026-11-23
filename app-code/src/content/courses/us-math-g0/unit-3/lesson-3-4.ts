import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "m0-u3-lesson-3-4",
  code: "3-4",
  title: "Addition Review",
  goal: "I CAN add within 10 fluently and solve word problems.",
  standards: ["K.OA.A.1", "K.OA.A.2", "K.OA.A.5"],
  vocabulary: [
    { term: "Add", definition: "Join groups to find total." },
    { term: "Fact", definition: "Memorized number sentence." },
    { term: "Fluency", definition: "Fast and accurate." },
    { term: "Equation", definition: "Math sentence a + b = c." },
    { term: "Word problem", definition: "Story problem to solve." },
    { term: "Sum", definition: "The answer to addition." },
  ],
  concepts: [
    {
      id: "m0-u3-add-review",
      title: "Addition review",
      skill: "Combine addition facts, modeling and word problems within 10.",
      lesson: {
        sections: [
          {
            heading: "All of addition",
            body: "Addition within 10 means: knowing **facts** (3 + 4 = 7), modeling with **objects** (join groups), and solving **word problems** (stories with numbers).",
          },
          {
            heading: "Put it together",
            body: "Read a problem, decide if it's addition, solve it, and check your answer makes sense.",
          },
        ],
        keyFormulas: [
          { name: "Addition review", statement: "Facts + modeling + word problems = fluency within 10." },
        ],
        workedExample: {
          problem: "6 + 3 = ? Then write a word problem for it.",
          solution: "6 + 3 = **9**. Word problem: 'I have 6 stickers and get 3 more. How many in all?'",
        },
      },
      questions: [
        {
          id: "m0-u3-add-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 6 + 3?",
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
                              "statement": "Count on from 6: 7, ..., 9. 6 + 3 = 9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count on from 6: 7, ..., 9. 6 + 3 = 9.",
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
          id: "m0-u3-add-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 6 + 3?",
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
                              "statement": "Make a ten or count on: 6 + 3 = 9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Make a ten or count on: 6 + 3 = 9.",
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
          id: "m0-u3-add-review-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 4 + 4?",
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
                              "statement": "Count on from 4: 5, ..., 8. 4 + 4 = 8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count on from 4: 5, ..., 8. 4 + 4 = 8.",
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
          id: "m0-u3-add-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 4 + 4?",
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
                              "statement": "Make a ten or count on: 4 + 4 = 8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Make a ten or count on: 4 + 4 = 8.",
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
          id: "m0-u3-add-review-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 8 + 2?",
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
                              "text": "12"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "8 + 2 = 10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8 + 2 = 10.",
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
          id: "m0-u3-add-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve this word problem and write the equation: 'There are 7 ducks. 3 ducks swim away... ' — wait, is this addition or subtraction?",
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
                                                  "Choose operation",
                                                  "'Swim away' = take away = subtraction."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Choose operation",
                                                  "'Swim away' = take away = subtraction."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Recognizes subtraction, not addition.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**Subtraction — ducks leave, so 7 - 3 = 4**"
          ]
},
        },
        {
          id: "m0-u3-add-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "To check an addition answer, you can...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "add again"
                    },
                    {
                              "id": "b",
                              "text": "count the objects or use the reverse fact"
                    },
                    {
                              "id": "c",
                              "text": "guess"
                    },
                    {
                              "id": "d",
                              "text": "ignore it"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Verify by counting objects or using related facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Verify by counting objects or using related facts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**count or reverse fact**",
          "commonErrors": [
                    "Does not check work."
          ]
},
        },
        {
          id: "m0-u3-add-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Add\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Memorized number sentence."
                    },
                    {
                              "id": "b",
                              "text": "Join groups to find total."
                    },
                    {
                              "id": "c",
                              "text": "Fast and accurate."
                    },
                    {
                              "id": "d",
                              "text": "Math sentence a + b = c."
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
          id: "m0-u3-add-review-q9",
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
                              "text": "Math sentence a + b = c."
                    },
                    {
                              "id": "c",
                              "text": "Story problem to solve."
                    },
                    {
                              "id": "d",
                              "text": "Memorized number sentence."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fact\" means Memorized number sentence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fact\" means Memorized number sentence.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fact** = Memorized number sentence.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u3-add-review-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fluency\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Math sentence a + b = c."
                    },
                    {
                              "id": "b",
                              "text": "Fast and accurate."
                    },
                    {
                              "id": "c",
                              "text": "Story problem to solve."
                    },
                    {
                              "id": "d",
                              "text": "The answer to addition."
                    }
          ],
          "correctChoiceId": "b"
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
