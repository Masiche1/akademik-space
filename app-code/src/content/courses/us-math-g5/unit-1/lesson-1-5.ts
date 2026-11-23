import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "m5-u1-lesson-1-5",
  code: "1-5",
  title: "Place Value and Operations Review",
  goal: "I CAN use all place value and operations skills.",
  standards: ["5.NBT.A.1", "5.NBT.B.5", "5.NBT.B.6"],
  vocabulary: [
    { term: "Place value", definition: "Digit position." },
    { term: "Standard", definition: "Digits with commas." },
    { term: "Expanded", definition: "Sum of places." },
    { term: "Word", definition: "Number in words." },
    { term: "Multiply", definition: "Repeated addition." },
    { term: "Divide", definition: "Split into parts." },
    { term: "Quotient", definition: "Division answer." },
    { term: "Product", definition: "Multiplication answer." },
  ],
  concepts: [
    {
      id: "m5-u1-place-value-review",
      title: "Place value and operations review",
      skill: "Combine place value, multiplication and division.",
      lesson: {
        sections: [
          {
            heading: "All skills",
            body: "Read/write numbers to **billions**, multiply and divide **multi-digit** numbers, solve **word problems**.",
          },
          {
            heading: "Put it together",
            body: "Use all skills for large-number operations.",
          },
        ],
        keyFormulas: [
          { name: "Operations", statement: "Place value + multiply + divide + problems = all skills." },
        ],
        workedExample: {
          problem: "Use all place value and operations skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "m5-u1-place-value-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Place value/operations skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only place value"
                    },
                    {
                              "id": "b",
                              "text": "place value, multiply, divide, problems"
                    },
                    {
                              "id": "c",
                              "text": "only multiply"
                    },
                    {
                              "id": "d",
                              "text": "only divide"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "place value, multiply, divide, problems",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m5-u1-place-value-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write a number to billions in word form, multiply two multi-digit numbers, and divide a multi-digit number.",
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
                                                  "All ops",
                                                  "All three skills."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All ops",
                                                  "All three skills."
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
                    "**e.g., '456,789,012 in words; 234x56=13,104; 8,976/24=374'**"
          ]
},
        },
        {
          id: "m5-u1-place-value-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Numbers to billions have places from...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "ones to millions"
                    },
                    {
                              "id": "b",
                              "text": "ones to billions"
                    },
                    {
                              "id": "c",
                              "text": "tens to trillions"
                    },
                    {
                              "id": "d",
                              "text": "hundreds to millions"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Ones to billions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ones to billions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "ones to billions",
          "commonErrors": [
                    "Wrong range."
          ]
},
        },
        {
          id: "m5-u1-place-value-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Place value\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Digits with commas."
                    },
                    {
                              "id": "b",
                              "text": "Digit position."
                    },
                    {
                              "id": "c",
                              "text": "Sum of places."
                    },
                    {
                              "id": "d",
                              "text": "Number in words."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Place value\" means Digit position."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Place value\" means Digit position.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Place value** = Digit position.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u1-place-value-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Standard\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sum of places."
                    },
                    {
                              "id": "b",
                              "text": "Number in words."
                    },
                    {
                              "id": "c",
                              "text": "Repeated addition."
                    },
                    {
                              "id": "d",
                              "text": "Digits with commas."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Standard\" means Digits with commas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Standard\" means Digits with commas.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Standard** = Digits with commas.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u1-place-value-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Expanded\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Number in words."
                    },
                    {
                              "id": "b",
                              "text": "Sum of places."
                    },
                    {
                              "id": "c",
                              "text": "Repeated addition."
                    },
                    {
                              "id": "d",
                              "text": "Split into parts."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Expanded\" means Sum of places."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Expanded\" means Sum of places.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Expanded** = Sum of places.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u1-place-value-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Word\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Repeated addition."
                    },
                    {
                              "id": "b",
                              "text": "Split into parts."
                    },
                    {
                              "id": "c",
                              "text": "Division answer."
                    },
                    {
                              "id": "d",
                              "text": "Number in words."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Word\" means Number in words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Word\" means Number in words.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Word** = Number in words.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u1-place-value-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Multiply\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Split into parts."
                    },
                    {
                              "id": "b",
                              "text": "Repeated addition."
                    },
                    {
                              "id": "c",
                              "text": "Division answer."
                    },
                    {
                              "id": "d",
                              "text": "Multiplication answer."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Multiply\" means Repeated addition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Multiply\" means Repeated addition.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Multiply** = Repeated addition.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
