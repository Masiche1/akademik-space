import type { Lesson } from "../../../types.ts";

export const lesson45: Lesson = {
  id: "m2-u4-lesson-4-5",
  code: "4-5",
  title: "Mixed Operations Review",
  goal: "I CAN solve all mixed addition/subtraction problems.",
  standards: ["2.OA.A.1", "2.NBT.B.7"],
  vocabulary: [
    { term: "Add", definition: "Combine amounts." },
    { term: "Subtract", definition: "Take away." },
    { term: "Mixed", definition: "Both operations." },
    { term: "Missing", definition: "Unknown number." },
    { term: "True/False", definition: "Check equation." },
    { term: "Word problem", definition: "Story with numbers." },
    { term: "Equation", definition: "Math sentence." },
    { term: "Strategy", definition: "Method to solve." },
  ],
  concepts: [
    {
      id: "m2-u4-mixed-review",
      title: "Mixed operations review",
      skill: "Combine addition, subtraction, missing numbers and true/false equations.",
      lesson: {
        sections: [
          {
            heading: "All mixed skills",
            body: "We **add**, **subtract**, find **missing numbers**, and check **true/false** equations within 1000.",
          },
          {
            heading: "Put it together",
            body: "Use all mixed operation skills to solve problems.",
          },
        ],
        keyFormulas: [
          { name: "Mixed review", statement: "Add + subtract + missing + true/false = mixed mastery." },
        ],
        workedExample: {
          problem: "Solve: 567 + ? = 801 and ? - 234 = 333.",
          solution: "801 - 567 = 234; 333 + 234 = 567.",
        },
      },
      questions: [
        {
          id: "m2-u4-mixed-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Mixed operation skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only adding"
                    },
                    {
                              "id": "b",
                              "text": "add, subtract, missing numbers, true/false"
                    },
                    {
                              "id": "c",
                              "text": "only subtracting"
                    },
                    {
                              "id": "d",
                              "text": "only comparing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All mixed skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All mixed skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "All mixed skills.",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m2-u4-mixed-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve: 456 + 389 = ? and ? - 234 = 345. Then check if 567 + 234 = 801 is true.",
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
                                                  "mixed",
                                                  "All skills",
                                                  "Add + missing + true/false."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "mixed",
                                                  "All skills",
                                                  "Add + missing + true/false."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "456 + 389 = 845.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "345 + 234 = 579.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "567 + 234 = 801 -> true.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "commonErrors": [
                    "845; 579; true"
          ]
},
        },
        {
          id: "m2-u4-mixed-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The missing number in 234 + ? = 567 is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "333"
                    },
                    {
                              "id": "b",
                              "text": "801"
                    },
                    {
                              "id": "c",
                              "text": "234"
                    },
                    {
                              "id": "d",
                              "text": "111"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "567 - 234 = 333."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "567 - 234 = 333.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "333",
          "commonErrors": [
                    "Adds instead."
          ]
},
        },
        {
          id: "m2-u4-mixed-review-q4",
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
                              "text": "Combine amounts."
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
                              "statement": "\"Add\" means Combine amounts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Add\" means Combine amounts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Add** = Combine amounts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u4-mixed-review-q5",
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
          id: "m2-u4-mixed-review-q6",
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
                              "text": "Story with numbers."
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
          id: "m2-u4-mixed-review-q7",
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
                              "text": "Story with numbers."
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
          id: "m2-u4-mixed-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"True/False\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Story with numbers."
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
                              "text": "Method to solve."
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
