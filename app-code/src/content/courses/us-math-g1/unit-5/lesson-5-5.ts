import type { Lesson } from "../../../types.ts";

export const lesson55: Lesson = {
  id: "m1-u5-lesson-5-5",
  code: "5-5",
  title: "Operations within 100 Review",
  goal: "I CAN add and subtract within 100 and solve word problems.",
  standards: ["1.NBT.C.4", "1.NBT.C.6", "1.OA.A.1", "1.NBT.B.2"],
  vocabulary: [
    { term: "Add", definition: "Put together." },
    { term: "Subtract", definition: "Take away." },
    { term: "Within 100", definition: "Up to 100." },
    { term: "Place value", definition: "Tens/ones." },
    { term: "Regroup", definition: "Carry/borrow." },
    { term: "Word problem", definition: "Story problem." },
    { term: "Solve", definition: "Find answer." },
    { term: "Check", definition: "Verify." },
  ],
  concepts: [
    {
      id: "m1-u5-within-100-review",
      title: "Operations within 100 review",
      skill: "Combine all addition/subtraction within 100 skills.",
      lesson: {
        sections: [
          {
            heading: "All operations within 100",
            body: "We can **add** and **subtract** within 100 using **place value**, **regrouping**, and solve **word problems**.",
          },
          {
            heading: "Put it together",
            body: "Use all skills to work with numbers to 100.",
          },
        ],
        keyFormulas: [
          { name: "Within 100", statement: "Add + subtract + place value + regrouping + word problems." },
        ],
        workedExample: {
          problem: "Solve $76 - 48$ and $35 + 47$.",
          solution: "$76-48=28$ (borrow); $35+47=82$ (regroup).",
        },
      },
      questions: [
        {
          id: "m1-u5-within-100-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Operations within 100 include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only adding"
                    },
                    {
                              "id": "b",
                              "text": "add, subtract, place value, regrouping, word problems"
                    },
                    {
                              "id": "c",
                              "text": "only shapes"
                    },
                    {
                              "id": "d",
                              "text": "only counting"
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
          id: "m1-u5-within-100-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $64 - 37$ and $48 + 35$. Show your work for both.",
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
                                                  "64-37=27; 48+35=83."
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
                                                  "64-37=27; 48+35=83."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Solves subtraction.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Solves addition.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "commonErrors": [
                    "**27 and 83**"
          ]
},
        },
        {
          id: "m1-u5-within-100-review-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $89 - 56$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Difference",
                              "answer": 33
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Borrow: 89=8 tens+9 ones... wait 9<6? No: 89-56=33."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Borrow: 89=8 tens+9 ones... wait 9<6? No: 89-56=33.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(33)**",
          "commonErrors": [
                    "Does not borrow."
          ]
},
        },
        {
          id: "m1-u5-within-100-review-q4",
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
                              "text": "Up to 100."
                    },
                    {
                              "id": "d",
                              "text": "Tens/ones."
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
          id: "m1-u5-within-100-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Subtract\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Up to 100."
                    },
                    {
                              "id": "b",
                              "text": "Tens/ones."
                    },
                    {
                              "id": "c",
                              "text": "Carry/borrow."
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
          id: "m1-u5-within-100-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Within 100\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Tens/ones."
                    },
                    {
                              "id": "b",
                              "text": "Up to 100."
                    },
                    {
                              "id": "c",
                              "text": "Carry/borrow."
                    },
                    {
                              "id": "d",
                              "text": "Story problem."
                    }
          ],
          "correctChoiceId": "b"
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
          id: "m1-u5-within-100-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Place value\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Carry/borrow."
                    },
                    {
                              "id": "b",
                              "text": "Story problem."
                    },
                    {
                              "id": "c",
                              "text": "Find answer."
                    },
                    {
                              "id": "d",
                              "text": "Tens/ones."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Place value\" means Tens/ones."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Place value\" means Tens/ones.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Place value** = Tens/ones.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u5-within-100-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Regroup\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Story problem."
                    },
                    {
                              "id": "b",
                              "text": "Carry/borrow."
                    },
                    {
                              "id": "c",
                              "text": "Find answer."
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
                              "statement": "\"Regroup\" means Carry/borrow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Regroup\" means Carry/borrow.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Regroup** = Carry/borrow.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
