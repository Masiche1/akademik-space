import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "m6-u2-lesson-2-4",
  code: "2-4",
  title: "Number System Review",
  goal: "I CAN use all number system skills.",
  standards: ["6.NS.C.5", "6.NS.C.6"],
  vocabulary: [
    { term: "Integer", definition: "Whole + negative." },
    { term: "Rational", definition: "a/b." },
    { term: "Absolute", definition: "Distance from 0." },
    { term: "Order", definition: "Sort." },
    { term: "Add", definition: "Combine." },
    { term: "Subtract", definition: "Take away." },
    { term: "Multiply", definition: "Repeated addition." },
    { term: "Divide", definition: "Split." },
  ],
  concepts: [
    {
      id: "m6-u2-number-system-review",
      title: "Number system review",
      skill: "Combine integers and rational numbers.",
      lesson: {
        sections: [
          {
            heading: "All number system skills",
            body: "Compare/order **integers**, compute with them, and identify/compare **rational numbers**.",
          },
          {
            heading: "Put it together",
            body: "Use all number system skills.",
          },
        ],
        keyFormulas: [
          { name: "Number system", statement: "Integers + rational + operations = all skills." },
        ],
        workedExample: {
          problem: "Use all number system skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "m6-u2-number-system-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Number system skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only integers"
                    },
                    {
                              "id": "b",
                              "text": "integers, rational numbers, operations"
                    },
                    {
                              "id": "c",
                              "text": "only rational"
                    },
                    {
                              "id": "d",
                              "text": "only order"
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
          "finalAnswer": "integers, rational numbers, operations",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m6-u2-number-system-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Order integers, compute with them, classify rational numbers, and compare two rationals.",
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
                                                  "All number system",
                                                  "All four skills."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All number system",
                                                  "All four skills."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., '-5<-2<0<3; -7+3=-4; 0.5 rational; 2/3<0.7.'**"
          ]
},
        },
        {
          id: "m6-u2-number-system-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The number system is important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it's math"
                    },
                    {
                              "id": "b",
                              "text": "it describes all numbers we use"
                    },
                    {
                              "id": "c",
                              "text": "it's required"
                    },
                    {
                              "id": "d",
                              "text": "it's easy"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Describes all numbers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes all numbers.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "it describes all numbers we use",
          "commonErrors": [
                    "Thinks it's just math."
          ]
},
        },
        {
          id: "m6-u2-number-system-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Integer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a/b."
                    },
                    {
                              "id": "b",
                              "text": "Whole + negative."
                    },
                    {
                              "id": "c",
                              "text": "Distance from 0."
                    },
                    {
                              "id": "d",
                              "text": "Sort."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Integer\" means Whole + negative."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Integer\" means Whole + negative.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Integer** = Whole + negative.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u2-number-system-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rational\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Distance from 0."
                    },
                    {
                              "id": "b",
                              "text": "Sort."
                    },
                    {
                              "id": "c",
                              "text": "Combine."
                    },
                    {
                              "id": "d",
                              "text": "a/b."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Rational\" means a/b."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rational\" means a/b.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rational** = a/b.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u2-number-system-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Absolute\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sort."
                    },
                    {
                              "id": "b",
                              "text": "Distance from 0."
                    },
                    {
                              "id": "c",
                              "text": "Combine."
                    },
                    {
                              "id": "d",
                              "text": "Take away."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Absolute\" means Distance from 0."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Absolute\" means Distance from 0.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Absolute** = Distance from 0.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u2-number-system-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Order\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Combine."
                    },
                    {
                              "id": "b",
                              "text": "Take away."
                    },
                    {
                              "id": "c",
                              "text": "Repeated addition."
                    },
                    {
                              "id": "d",
                              "text": "Sort."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Order\" means Sort."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Order\" means Sort.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Order** = Sort.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u2-number-system-review-q8",
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
                              "text": "Combine."
                    },
                    {
                              "id": "c",
                              "text": "Repeated addition."
                    },
                    {
                              "id": "d",
                              "text": "Split."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Add\" means Combine."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Add\" means Combine.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Add** = Combine.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
