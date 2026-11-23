import type { Lesson } from "../../../types.ts";

export const lesson45: Lesson = {
  id: "m1-u4-lesson-4-5",
  code: "4-5",
  title: "Mixed Operations Review",
  goal: "I CAN solve mixed addition/subtraction and find missing numbers.",
  standards: ["1.OA.A.1", "1.OA.B.4", "1.OA.D.7", "1.OA.C.6"],
  vocabulary: [
    { term: "Add", definition: "Put together." },
    { term: "Subtract", definition: "Take away." },
    { term: "Mixed", definition: "Both operations." },
    { term: "Missing", definition: "Unknown number." },
    { term: "True/False", definition: "Check equation." },
    { term: "Solve", definition: "Find answer." },
    { term: "Equation", definition: "Math sentence." },
    { term: "Check", definition: "Verify." },
  ],
  concepts: [
    {
      id: "m1-u4-mixed-review",
      title: "Mixed operations review",
      skill: "Combine all addition/subtraction skills within 20.",
      lesson: {
        sections: [
          {
            heading: "All operations skills",
            body: "We can **add**, **subtract**, solve **mixed** problems, find **missing numbers**, and check if equations are **true or false** — all within 20.",
          },
          {
            heading: "Put it together",
            body: "Use all skills to solve problems and check equations.",
          },
        ],
        keyFormulas: [
          { name: "Operations", statement: "Add + subtract + mixed + missing + true/false = operations within 20." },
        ],
        workedExample: {
          problem: "Solve $15 - 6 + 4$ and check if $9 + 5 = 14$ is true.",
          solution: "$15-6=9, 9+4=13$. $9+5=14$ is **true**.",
        },
      },
      questions: [
        {
          id: "m1-u4-mixed-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Operations skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only adding"
                    },
                    {
                              "id": "b",
                              "text": "add, subtract, mixed, missing, true/false"
                    },
                    {
                              "id": "c",
                              "text": "only subtracting"
                    },
                    {
                              "id": "d",
                              "text": "only shapes"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All operations skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All operations skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**all skills**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m1-u4-mixed-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $13 + 5 - 8$ step by step, then check if $7 + 6 = 13$ is true.",
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
                                                  "Mixed + check",
                                                  "$13+5=18, 18-8=10$; $7+6=13$ true."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "method",
                                                  "Mixed + check",
                                                  "$13+5=18, 18-8=10$; $7+6=13$ true."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Solves mixed problem.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Checks equation.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "commonErrors": [
                    "**10; true**"
          ]
},
        },
        {
          id: "m1-u4-mixed-review-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find missing: $? - 8 = 5$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Missing",
                              "answer": 13
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "$13 - 8 = 5$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$13 - 8 = 5$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(13)**",
          "commonErrors": [
                    "Adds wrong."
          ]
},
        },
        {
          id: "m1-u4-mixed-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Add\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Take away."
                    },
                    {
                              "id": "b",
                              "text": "Put together."
                    },
                    {
                              "id": "c",
                              "text": "Both operations."
                    },
                    {
                              "id": "d",
                              "text": "Unknown number."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Add\" means Put together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Add\" means Put together.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Add** = Put together.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u4-mixed-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Subtract\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Both operations."
                    },
                    {
                              "id": "b",
                              "text": "Unknown number."
                    },
                    {
                              "id": "c",
                              "text": "Check equation."
                    },
                    {
                              "id": "d",
                              "text": "Take away."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Subtract\" means Take away."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Subtract\" means Take away.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Subtract** = Take away.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u4-mixed-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mixed\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Unknown number."
                    },
                    {
                              "id": "b",
                              "text": "Both operations."
                    },
                    {
                              "id": "c",
                              "text": "Check equation."
                    },
                    {
                              "id": "d",
                              "text": "Find answer."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Mixed\" means Both operations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Mixed\" means Both operations.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Mixed** = Both operations.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u4-mixed-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Missing\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Check equation."
                    },
                    {
                              "id": "b",
                              "text": "Find answer."
                    },
                    {
                              "id": "c",
                              "text": "Math sentence."
                    },
                    {
                              "id": "d",
                              "text": "Unknown number."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Missing\" means Unknown number."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Missing\" means Unknown number.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Missing** = Unknown number.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u4-mixed-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"True/False\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Find answer."
                    },
                    {
                              "id": "b",
                              "text": "Check equation."
                    },
                    {
                              "id": "c",
                              "text": "Math sentence."
                    },
                    {
                              "id": "d",
                              "text": "Verify."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"True/False\" means Check equation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"True/False\" means Check equation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**True/False** = Check equation.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
