import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "m5-u8-lesson-8-1",
  code: "8-1",
  title: "Review: Place Value",
  goal: "I CAN use all place value skills to billions.",
  standards: ["5.NBT.A.1"],
  vocabulary: [
    { term: "Place value", definition: "Digit position." },
    { term: "Billion", definition: "1,000,000,000." },
    { term: "Standard", definition: "Digits with commas." },
    { term: "Expanded", definition: "Sum of places." },
    { term: "Word", definition: "Number in words." },
    { term: "Compare", definition: "More or less." },
    { term: "Round", definition: "Make approximate." },
    { term: "Order", definition: "Sort numbers." },
  ],
  concepts: [
    {
      id: "m5-u8-review-place-value",
      title: "Place value review",
      skill: "Combine reading, writing, comparing and rounding numbers to billions.",
      lesson: {
        sections: [
          {
            heading: "All place value",
            body: "Numbers to **billions** have places from ones to billions. We can **read**, **write**, **compare**, and **round** them.",
          },
          {
            heading: "Put it together",
            body: "Use all place value skills together.",
          },
        ],
        keyFormulas: [
          { name: "Place value", statement: "Read + write + compare + round = all skills." },
        ],
        workedExample: {
          problem: "Read, write, compare and round a number to billions.",
          solution: "All place value skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "m5-u8-review-place-value-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Place value skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only reading"
                    },
                    {
                              "id": "b",
                              "text": "read, write, compare, round"
                    },
                    {
                              "id": "c",
                              "text": "only writing"
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
                              "statement": "All place value skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All place value skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "read, write, compare, round",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m5-u8-review-place-value-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write a number to billions in word form, compare it to another, and round it.",
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
                                                  "All place value",
                                                  "Word + compare + round."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All place value",
                                                  "Word + compare + round."
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
                    "**e.g., '456,789,012 in words; < 500,000,000; round to nearest million: 457,000,000'**"
          ]
},
        },
        {
          id: "m5-u8-review-place-value-q3",
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
          id: "m5-u8-review-place-value-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Place value\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1,000,000,000."
                    },
                    {
                              "id": "b",
                              "text": "Digit position."
                    },
                    {
                              "id": "c",
                              "text": "Digits with commas."
                    },
                    {
                              "id": "d",
                              "text": "Sum of places."
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
          id: "m5-u8-review-place-value-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Billion\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Digits with commas."
                    },
                    {
                              "id": "b",
                              "text": "Sum of places."
                    },
                    {
                              "id": "c",
                              "text": "Number in words."
                    },
                    {
                              "id": "d",
                              "text": "1,000,000,000."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Billion\" means 1,000,000,000."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Billion\" means 1,000,000,000.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Billion** = 1,000,000,000.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u8-review-place-value-q6",
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
                              "text": "Digits with commas."
                    },
                    {
                              "id": "c",
                              "text": "Number in words."
                    },
                    {
                              "id": "d",
                              "text": "More or less."
                    }
          ],
          "correctChoiceId": "b"
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
          id: "m5-u8-review-place-value-q7",
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
                              "text": "More or less."
                    },
                    {
                              "id": "c",
                              "text": "Make approximate."
                    },
                    {
                              "id": "d",
                              "text": "Sum of places."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "m5-u8-review-place-value-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Word\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "More or less."
                    },
                    {
                              "id": "b",
                              "text": "Number in words."
                    },
                    {
                              "id": "c",
                              "text": "Make approximate."
                    },
                    {
                              "id": "d",
                              "text": "Sort numbers."
                    }
          ],
          "correctChoiceId": "b"
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
      ],
    },
  ],
};
