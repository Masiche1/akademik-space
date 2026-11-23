import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "m1-u8-lesson-8-2",
  code: "8-2",
  title: "Review: Operations",
  goal: "I CAN add and subtract within 20 and 100.",
  standards: ["1.OA.A.1", "1.NBT.C.4", "1.NBT.C.6", "1.OA.C.6"],
  vocabulary: [
    { term: "Add", definition: "Put together." },
    { term: "Subtract", definition: "Take away." },
    { term: "Within 20", definition: "Up to 20." },
    { term: "Within 100", definition: "Up to 100." },
    { term: "Count on/back", definition: "Strategy." },
    { term: "Make ten", definition: "Strategy." },
    { term: "Regroup", definition: "Carry/borrow." },
    { term: "Word problem", definition: "Story problem." },
  ],
  concepts: [
    {
      id: "m1-u8-review-operations",
      title: "Operations review",
      skill: "Combine all addition/subtraction skills.",
      lesson: {
        sections: [
          {
            heading: "All operations",
            body: "We can **add** and **subtract** within 20 and 100 using **count on/back**, **make ten**, **fact families**, **regrouping**, and solve **word problems**.",
          },
          {
            heading: "Put it together",
            body: "Use all operations skills.",
          },
        ],
        keyFormulas: [
          { name: "Operations", statement: "Add + subtract + strategies + word problems = operations." },
        ],
        workedExample: {
          problem: "Solve $9 + 7$, $16 - 8$, $45 + 38$, $72 - 35$.",
          solution: "16, 8, 83, 37.",
        },
      },
      questions: [
        {
          id: "m1-u8-review-operations-q1",
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
                              "text": "add, subtract, strategies, word problems"
                    },
                    {
                              "id": "c",
                              "text": "only shapes"
                    },
                    {
                              "id": "d",
                              "text": "only time"
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
          id: "m1-u8-review-operations-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $8 + 6$ and $54 - 27$. Show your work for both.",
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
                                                  "Two problems",
                                                  "8+6=14; 54-27=27."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "method",
                                                  "Two problems",
                                                  "8+6=14; 54-27=27."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Solves addition.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Solves subtraction.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "commonErrors": [
                    "**14 and 27**"
          ]
},
        },
        {
          id: "m1-u8-review-operations-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $67 + 25$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 92
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "60+20=80, 7+5=12=1 ten+2, 80+10+2=92."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "60+20=80, 7+5=12=1 ten+2, 80+10+2=92.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(92)**",
          "commonErrors": [
                    "Does not regroup."
          ]
},
        },
        {
          id: "m1-u8-review-operations-q4",
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
                              "text": "Up to 20."
                    },
                    {
                              "id": "d",
                              "text": "Up to 100."
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
          id: "m1-u8-review-operations-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Subtract\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Up to 20."
                    },
                    {
                              "id": "b",
                              "text": "Up to 100."
                    },
                    {
                              "id": "c",
                              "text": "Strategy."
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
          id: "m1-u8-review-operations-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Within 20\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Up to 100."
                    },
                    {
                              "id": "b",
                              "text": "Up to 20."
                    },
                    {
                              "id": "c",
                              "text": "Strategy."
                    },
                    {
                              "id": "d",
                              "text": "Carry/borrow."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Within 20\" means Up to 20."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Within 20\" means Up to 20.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Within 20** = Up to 20.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u8-review-operations-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Within 100\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Strategy."
                    },
                    {
                              "id": "b",
                              "text": "Carry/borrow."
                    },
                    {
                              "id": "c",
                              "text": "Story problem."
                    },
                    {
                              "id": "d",
                              "text": "Up to 100."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Within 100\" means Up to 100."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Within 100\" means Up to 100.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Within 100** = Up to 100.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u8-review-operations-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Count on/back\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Carry/borrow."
                    },
                    {
                              "id": "b",
                              "text": "Strategy."
                    },
                    {
                              "id": "c",
                              "text": "Story problem."
                    },
                    {
                              "id": "d",
                              "text": "Put together."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Count on/back\" means Strategy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Count on/back\" means Strategy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Count on/back** = Strategy.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
