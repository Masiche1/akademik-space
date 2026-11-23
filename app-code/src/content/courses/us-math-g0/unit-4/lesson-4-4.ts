import type { Lesson } from "../../../types.ts";

export const lesson44: Lesson = {
  id: "m0-u4-lesson-4-4",
  code: "4-4",
  title: "Add and Subtract Review",
  goal: "I CAN add and subtract within 10 and solve problems.",
  standards: ["K.OA.A.1", "K.OA.A.2", "K.OA.A.3", "K.OA.A.5"],
  vocabulary: [
    { term: "Add", definition: "Join to find total." },
    { term: "Subtract", definition: "Take away to find left." },
    { term: "Fact", definition: "Memorized sentence." },
    { term: "Fluency", definition: "Fast and accurate." },
    { term: "Word problem", definition: "Story to solve." },
    { term: "Equation", definition: "Math sentence." },
  ],
  concepts: [
    {
      id: "m0-u4-add-sub-review",
      title: "Add and subtract review",
      skill: "Combine addition and subtraction facts and word problems within 10.",
      lesson: {
        sections: [
          {
            heading: "Both operations",
            body: "**Addition** joins groups (find total); **subtraction** takes away (find left). Both have facts to memorize and word problems to solve.",
          },
          {
            heading: "Decide the operation",
            body: "Read the story: does it say 'in all'/'more' (add) or 'left'/'take away'/'fewer' (subtract)? Then solve and write the equation.",
          },
        ],
        keyFormulas: [
          { name: "Add/sub review", statement: "Addition=join, subtraction=take away; solve facts and word problems." },
        ],
        workedExample: {
          problem: "5 + 4 = ? and 9 - 4 = ?",
          solution: "5 + 4 = **9**; 9 - 4 = **5** (related facts).",
        },
      },
      questions: [
        {
          id: "m0-u4-add-sub-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 5 + 4?",
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
                              "statement": "Count on from 5: 6, ..., 9. 5 + 4 = 9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count on from 5: 6, ..., 9. 5 + 4 = 9.",
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
          id: "m0-u4-add-sub-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 5 + 4?",
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
                              "statement": "Make a ten or count on: 5 + 4 = 9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Make a ten or count on: 5 + 4 = 9.",
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
          id: "m0-u4-add-sub-review-q3",
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
          id: "m0-u4-add-sub-review-q4",
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
          id: "m0-u4-add-sub-review-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 10 - 8?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2"
                    },
                    {
                              "id": "b",
                              "text": "3"
                    },
                    {
                              "id": "c",
                              "text": "18"
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
                              "statement": "10 - 8 = 2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "10 - 8 = 2.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**2**",
          "commonErrors": [
                    "Adds instead of subtracts."
          ]
},
        },
        {
          id: "m0-u4-add-sub-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve this word problem: 'There are 8 fish. 5 swim away. How many are left?' Is it addition or subtraction?",
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
                                                  "Swim away = take away = subtraction."
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
                                                  "Swim away = take away = subtraction."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Says subtraction and solves 8 - 5 = 3.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**Subtraction: 8 - 5 = 3**"
          ]
},
        },
        {
          id: "m0-u4-add-sub-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which pair are related facts?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3 + 4 = 7 and 7 - 3 = 4"
                    },
                    {
                              "id": "b",
                              "text": "3 + 4 = 7 and 3 + 4 = 8"
                    },
                    {
                              "id": "c",
                              "text": "7 - 3 = 4 and 7 + 3 = 10"
                    },
                    {
                              "id": "d",
                              "text": "None"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "3 + 4 = 7 relates to 7 - 3 = 4 and 7 - 4 = 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3 + 4 = 7 relates to 7 - 3 = 4 and 7 - 4 = 3.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**3 + 4 = 7 and 7 - 3 = 4**",
          "commonErrors": [
                    "Picks unrelated facts."
          ]
},
        },
        {
          id: "m0-u4-add-sub-review-q8",
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
          id: "m0-u4-add-sub-review-q9",
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
                              "text": "Story to solve."
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
          id: "m0-u4-add-sub-review-q10",
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
                              "text": "Story to solve."
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
      ],
    },
  ],
};
