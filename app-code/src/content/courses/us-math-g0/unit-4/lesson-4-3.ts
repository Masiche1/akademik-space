import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "m0-u4-lesson-4-3",
  code: "4-3",
  title: "Subtraction Word Problems",
  goal: "I CAN solve subtraction word problems within 10.",
  standards: ["K.OA.A.2", "K.OA.A.3"],
  vocabulary: [
    { term: "Word problem", definition: "A story problem with numbers." },
    { term: "Take away", definition: "Remove objects in a story." },
    { term: "Left", definition: "What remains." },
    { term: "Fewer", definition: "Less after taking away." },
    { term: "Equation", definition: "Write the math sentence." },
  ],
  concepts: [
    {
      id: "m0-u4-sub-word-problems",
      title: "Subtraction word problems",
      skill: "Solve subtraction stories within 10 and write the equation.",
      lesson: {
        sections: [
          {
            heading: "Read for 'take away'",
            body: "A **word problem** with words like 'take away', 'left', 'fewer', 'gone' signals **subtraction** — something is being removed.",
          },
          {
            heading: "Solve and write",
            body: "Start with the total, take away the amount, count what's **left**: '8 cookies, eat 3, 5 left' becomes 8 - 3 = 5.",
          },
        ],
        keyFormulas: [
          { name: "Subtraction problems", statement: "Find starting amount, take away, write a - b = left." },
        ],
        workedExample: {
          problem: "There are 9 balloons. 4 pop. How many are left?",
          solution: "9 - 4 = **5 balloons left**.",
        },
      },
      questions: [
        {
          id: "m0-u4-sub-word-problems-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "There are 9 balloons. 4 balloons leave. How many balloons are left?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Left",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Take away: 9 - 4 = 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Take away: 9 - 4 = 5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$5$",
          "commonErrors": [
                    "Adds instead of subtracts."
          ]
},
        },
        {
          id: "m0-u4-sub-word-problems-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "There are 9 balloons. 4 balloons leave. How many balloons are left?",
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
                              "statement": "9 - 4 = 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "9 - 4 = 5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**5**",
          "commonErrors": [
                    "Counts the ones that left as still there."
          ]
},
        },
        {
          id: "m0-u4-sub-word-problems-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "There are 7 pencils. 3 pencils leave. How many pencils are left?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Left",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Take away: 7 - 3 = 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Take away: 7 - 3 = 4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$4$",
          "commonErrors": [
                    "Adds instead of subtracts."
          ]
},
        },
        {
          id: "m0-u4-sub-word-problems-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "There are 7 pencils. 3 pencils leave. How many pencils are left?",
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
                              "statement": "7 - 3 = 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "7 - 3 = 4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**4**",
          "commonErrors": [
                    "Counts the ones that left as still there."
          ]
},
        },
        {
          id: "m0-u4-sub-word-problems-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Words like 'left' and 'take away' signal...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "addition"
                    },
                    {
                              "id": "b",
                              "text": "subtraction"
                    },
                    {
                              "id": "c",
                              "text": "comparison"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "'Left'/'take away' = subtraction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Left'/'take away' = subtraction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**subtraction**",
          "commonErrors": [
                    "Thinks they signal addition."
          ]
},
        },
        {
          id: "m0-u4-sub-word-problems-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve: 'There are 6 apples. You eat 2. How many apples are left?' Write the equation.",
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
                                                  "Subtraction problem",
                                                  "6 - 2 = 4."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Subtraction problem",
                                                  "6 - 2 = 4."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Solves and writes 6 - 2 = 4.",
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
          id: "m0-u4-sub-word-problems-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which equation matches '10 birds, 3 fly away'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "10 + 3 = 13"
                    },
                    {
                              "id": "b",
                              "text": "10 - 3 = 7"
                    },
                    {
                              "id": "c",
                              "text": "3 - 10 = 7"
                    },
                    {
                              "id": "d",
                              "text": "10 - 3 = 13"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Birds leave = subtraction: 10 - 3 = 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Birds leave = subtraction: 10 - 3 = 7.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**10 - 3 = 7**",
          "commonErrors": [
                    "Uses addition or wrong answer."
          ]
},
        },
        {
          id: "m0-u4-sub-word-problems-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Word problem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Remove objects in a story."
                    },
                    {
                              "id": "b",
                              "text": "A story problem with numbers."
                    },
                    {
                              "id": "c",
                              "text": "What remains."
                    },
                    {
                              "id": "d",
                              "text": "Less after taking away."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Word problem\" means A story problem with numbers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Word problem\" means A story problem with numbers.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Word problem** = A story problem with numbers.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u4-sub-word-problems-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Take away\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What remains."
                    },
                    {
                              "id": "b",
                              "text": "Less after taking away."
                    },
                    {
                              "id": "c",
                              "text": "Write the math sentence."
                    },
                    {
                              "id": "d",
                              "text": "Remove objects in a story."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Take away\" means Remove objects in a story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Take away\" means Remove objects in a story.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Take away** = Remove objects in a story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u4-sub-word-problems-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Left\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Less after taking away."
                    },
                    {
                              "id": "b",
                              "text": "What remains."
                    },
                    {
                              "id": "c",
                              "text": "Write the math sentence."
                    },
                    {
                              "id": "d",
                              "text": "A story problem with numbers."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Left\" means What remains."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Left\" means What remains.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Left** = What remains.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
