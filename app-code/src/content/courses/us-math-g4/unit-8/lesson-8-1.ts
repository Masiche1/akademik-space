import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "m4-u8-lesson-8-1",
  code: "8-1",
  title: "Review: Place Value",
  goal: "I CAN use all place value skills to 1,000,000.",
  standards: ["4.NBT.A.1", "4.NBT.A.2", "4.NBT.A.3"],
  vocabulary: [
    { term: "Place value", definition: "Digit position value." },
    { term: "Standard", definition: "Digits with commas." },
    { term: "Expanded", definition: "Sum of places." },
    { term: "Word", definition: "Number in words." },
    { term: "Compare", definition: "More or less." },
    { term: "Round", definition: "Make approximate." },
    { term: "Order", definition: "Sort numbers." },
    { term: "Million", definition: "1,000,000." },
  ],
  concepts: [
    {
      id: "m4-u8-review-place-value",
      title: "Place value review",
      skill: "Combine reading, writing, comparing and rounding large numbers.",
      lesson: {
        sections: [
          {
            heading: "All place value",
            body: "Numbers to **1,000,000** have places from ones to millions. We can **read**, **write**, **compare**, and **round** them.",
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
          problem: "Read, write, compare and round a large number.",
          solution: "All place value skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "m4-u8-review-place-value-q1",
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
          id: "m4-u8-review-place-value-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Take a number like 4,567,890. Write it in word form, compare it to 4,576,890, and round it to the nearest thousand.",
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
                    "**Word: four million...; 4,567,890 < 4,576,890; nearest thousand: 4,568,000**"
          ]
},
        },
        {
          id: "m4-u8-review-place-value-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Numbers to 1,000,000 have places from...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "ones to thousands"
                    },
                    {
                              "id": "b",
                              "text": "ones to millions"
                    },
                    {
                              "id": "c",
                              "text": "tens to billions"
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
                              "statement": "Ones to millions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ones to millions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "ones to millions",
          "commonErrors": [
                    "Wrong range."
          ]
},
        },
        {
          id: "m4-u8-review-place-value-q4",
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
                              "text": "Digit position value."
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
                              "statement": "\"Place value\" means Digit position value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Place value\" means Digit position value.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Place value** = Digit position value.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u8-review-place-value-q5",
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
                              "text": "More or less."
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
          id: "m4-u8-review-place-value-q6",
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
                              "text": "More or less."
                    },
                    {
                              "id": "d",
                              "text": "Make approximate."
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
          id: "m4-u8-review-place-value-q7",
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
                              "text": "Make approximate."
                    },
                    {
                              "id": "c",
                              "text": "Sort numbers."
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
          id: "m4-u8-review-place-value-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compare\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Make approximate."
                    },
                    {
                              "id": "b",
                              "text": "More or less."
                    },
                    {
                              "id": "c",
                              "text": "Sort numbers."
                    },
                    {
                              "id": "d",
                              "text": "1,000,000."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Compare\" means More or less."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Compare\" means More or less.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Compare** = More or less.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
