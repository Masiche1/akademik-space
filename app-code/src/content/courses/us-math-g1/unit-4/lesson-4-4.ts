import type { Lesson } from "../../../types.ts";

export const lesson44: Lesson = {
  id: "m1-u4-lesson-4-4",
  code: "4-4",
  title: "Comparing Sums and Differences",
  goal: "I CAN compare addition and subtraction results.",
  standards: ["1.OA.A.1", "1.OA.A.2", "1.OA.C.6"],
  vocabulary: [
    { term: "Compare", definition: "See which is more/less." },
    { term: "Sum", definition: "Addition answer." },
    { term: "Difference", definition: "Subtraction answer." },
    { term: "More", definition: "Greater than." },
    { term: "Less", definition: "Smaller than." },
    { term: "Equal", definition: "Same." },
    { term: "Evaluate", definition: "Find the value." },
    { term: "Compare expressions", definition: "See which expression is greater." },
  ],
  concepts: [
    {
      id: "m1-u4-compare-add-sub",
      title: "Comparing sums and differences",
      skill: "Compare the results of addition and subtraction expressions.",
      lesson: {
        sections: [
          {
            heading: "Compare expressions",
            body: "We can **compare** expressions like $8 + 5$ and $12 - 3$ by finding each **sum** or **difference** and seeing which is **more**, **less**, or **equal**.",
          },
          {
            heading: "Evaluate first",
            body: "First **evaluate** (find the value of) each expression, then **compare** the results.",
          },
        ],
        keyFormulas: [
          { name: "Compare", statement: "Evaluate each -> compare results." },
        ],
        workedExample: {
          problem: "Compare $9 + 6$ and $18 - 4$. Which is greater?",
          solution: "$9+6=15$, $18-4=14$. **$9+6$ is greater** (15 > 14).",
        },
      },
      questions: [
        {
          id: "m1-u4-compare-add-sub-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Compare $8 + 5$ and $14 - 2$. Which is greater?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$8+5$"
                    },
                    {
                              "id": "b",
                              "text": "$14-2$"
                    },
                    {
                              "id": "c",
                              "text": "Equal"
                    },
                    {
                              "id": "d",
                              "text": "Cannot tell"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "$8+5=13$, $14-2=12$, so $8+5$ is greater."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$8+5=13$, $14-2=12$, so $8+5$ is greater.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**$8+5$**",
          "commonErrors": [
                    "Compares without evaluating."
          ]
},
        },
        {
          id: "m1-u4-compare-add-sub-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Compare $7 + 8$ and $20 - 6$. Which is greater?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$7+8$"
                    },
                    {
                              "id": "b",
                              "text": "$20-6$"
                    },
                    {
                              "id": "c",
                              "text": "Equal"
                    },
                    {
                              "id": "d",
                              "text": "Cannot tell"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "$7+8=15$, $20-6=14$, so $7+8$ is greater."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$7+8=15$, $20-6=14$, so $7+8$ is greater.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**$7+8$**",
          "commonErrors": [
                    "Compares without evaluating."
          ]
},
        },
        {
          id: "m1-u4-compare-add-sub-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Compare $12 + 7$ and $19 - 3$. Show your work and say which is greater.",
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
                                                  "method",
                                                  "Compare expressions",
                                                  "Evaluate both, compare."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "method",
                                                  "Compare expressions",
                                                  "Evaluate both, compare."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Evaluates both.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Compares correctly.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "commonErrors": [
                    "**$12+7=19$, $19-3=16$, so $12+7$ is greater**"
          ]
},
        },
        {
          id: "m1-u4-compare-add-sub-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To compare expressions, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "guess"
                    },
                    {
                              "id": "b",
                              "text": "evaluate each first"
                    },
                    {
                              "id": "c",
                              "text": "pick the bigger numbers"
                    },
                    {
                              "id": "d",
                              "text": "ignore them"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Evaluate first, then compare."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Evaluate first, then compare.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**evaluate first**",
          "commonErrors": [
                    "Thinks guessing works."
          ]
},
        },
        {
          id: "m1-u4-compare-add-sub-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare $15 - 6$ and $8 + 4$. Which is greater? Show both evaluations.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Compare",
                              "statement": "15-6=9, 8+4=12, 8+4 greater."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Evaluates both.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Compares correctly.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**$8+4$ is greater (12 > 9)**",
          "commonErrors": [
                    "Wrong evaluation.",
                    "Wrong comparison."
          ]
},
        },
        {
          id: "m1-u4-compare-add-sub-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compare\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Addition answer."
                    },
                    {
                              "id": "b",
                              "text": "See which is more/less."
                    },
                    {
                              "id": "c",
                              "text": "Subtraction answer."
                    },
                    {
                              "id": "d",
                              "text": "Greater than."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Compare\" means See which is more/less."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Compare\" means See which is more/less.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Compare** = See which is more/less.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u4-compare-add-sub-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sum\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Subtraction answer."
                    },
                    {
                              "id": "b",
                              "text": "Greater than."
                    },
                    {
                              "id": "c",
                              "text": "Smaller than."
                    },
                    {
                              "id": "d",
                              "text": "Addition answer."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sum\" means Addition answer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sum\" means Addition answer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sum** = Addition answer.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u4-compare-add-sub-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Difference\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Greater than."
                    },
                    {
                              "id": "b",
                              "text": "Subtraction answer."
                    },
                    {
                              "id": "c",
                              "text": "Smaller than."
                    },
                    {
                              "id": "d",
                              "text": "Same."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Difference\" means Subtraction answer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Difference\" means Subtraction answer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Difference** = Subtraction answer.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u4-compare-add-sub-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"More\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Smaller than."
                    },
                    {
                              "id": "b",
                              "text": "Same."
                    },
                    {
                              "id": "c",
                              "text": "Find the value."
                    },
                    {
                              "id": "d",
                              "text": "Greater than."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"More\" means Greater than."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"More\" means Greater than.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**More** = Greater than.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
