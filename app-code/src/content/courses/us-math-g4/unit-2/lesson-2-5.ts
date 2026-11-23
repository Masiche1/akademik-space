import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "m4-u2-lesson-2-5",
  code: "2-5",
  title: "Add/Subtract Review",
  goal: "I CAN add and subtract multi-digit numbers with regrouping.",
  standards: ["4.NBT.B.4"],
  vocabulary: [
    { term: "Regroup", definition: "Carry or borrow." },
    { term: "Add", definition: "Combine numbers." },
    { term: "Subtract", definition: "Take away." },
    { term: "Column", definition: "Line up digits." },
    { term: "Estimate", definition: "Check reasonableness." },
    { term: "Word problem", definition: "Story with numbers." },
    { term: "Multi-step", definition: "More than one operation." },
    { term: "Solve", definition: "Find the answer." },
  ],
  concepts: [
    {
      id: "m4-u2-add-subtract-review",
      title: "Add/subtract review",
      skill: "Combine regrouping and word problems.",
      lesson: {
        sections: [
          {
            heading: "All addition/subtraction",
            body: "Add and subtract multi-digit numbers with **regrouping**, solve **word problems**, and **estimate** to check answers.",
          },
          {
            heading: "Put it together",
            body: "Use all addition/subtraction skills together.",
          },
        ],
        keyFormulas: [
          { name: "Add/subtract", statement: "Regroup + word problems + estimate = all skills." },
        ],
        workedExample: {
          problem: "Add, subtract, and solve word problems.",
          solution: "All addition/subtraction skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "m4-u2-add-subtract-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Addition/subtraction skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only adding"
                    },
                    {
                              "id": "b",
                              "text": "regroup, word problems, estimate"
                    },
                    {
                              "id": "c",
                              "text": "only subtracting"
                    },
                    {
                              "id": "d",
                              "text": "only estimating"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All add/subtract skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All add/subtract skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "regroup, word problems, estimate",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m4-u2-add-subtract-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Calculate 7,654 + 3,210 and 9,876 - 4,321. Then solve a word problem using these skills.",
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
                                                  "All add/subtract",
                                                  "Add + subtract + word problem."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All add/subtract",
                                                  "Add + subtract + word problem."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all three.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**7,654+3,210=10,864; 9,876-4,321=5,555; word problem solved correctly**"
          ]
},
        },
        {
          id: "m4-u2-add-subtract-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Regrouping means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "grouping numbers"
                    },
                    {
                              "id": "b",
                              "text": "carrying or borrowing between places"
                    },
                    {
                              "id": "c",
                              "text": "rounding"
                    },
                    {
                              "id": "d",
                              "text": "estimating"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Regroup = carry/borrow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Regroup = carry/borrow.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "carrying or borrowing between places",
          "commonErrors": [
                    "Thinks it's grouping."
          ]
},
        },
        {
          id: "m4-u2-add-subtract-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Regroup\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Combine numbers."
                    },
                    {
                              "id": "b",
                              "text": "Carry or borrow."
                    },
                    {
                              "id": "c",
                              "text": "Take away."
                    },
                    {
                              "id": "d",
                              "text": "Line up digits."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Regroup\" means Carry or borrow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Regroup\" means Carry or borrow.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Regroup** = Carry or borrow.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u2-add-subtract-review-q5",
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
                              "text": "Line up digits."
                    },
                    {
                              "id": "c",
                              "text": "Check reasonableness."
                    },
                    {
                              "id": "d",
                              "text": "Combine numbers."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Add\" means Combine numbers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Add\" means Combine numbers.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Add** = Combine numbers.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u2-add-subtract-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Subtract\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Line up digits."
                    },
                    {
                              "id": "b",
                              "text": "Take away."
                    },
                    {
                              "id": "c",
                              "text": "Check reasonableness."
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
          id: "m4-u2-add-subtract-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Column\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Check reasonableness."
                    },
                    {
                              "id": "b",
                              "text": "Story with numbers."
                    },
                    {
                              "id": "c",
                              "text": "More than one operation."
                    },
                    {
                              "id": "d",
                              "text": "Line up digits."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Column\" means Line up digits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Column\" means Line up digits.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Column** = Line up digits.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u2-add-subtract-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Estimate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Story with numbers."
                    },
                    {
                              "id": "b",
                              "text": "Check reasonableness."
                    },
                    {
                              "id": "c",
                              "text": "More than one operation."
                    },
                    {
                              "id": "d",
                              "text": "Find the answer."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Estimate\" means Check reasonableness."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Estimate\" means Check reasonableness.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Estimate** = Check reasonableness.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
