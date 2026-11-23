import type { Lesson } from "../../../types.ts";

export const lesson65: Lesson = {
  id: "m4-u6-lesson-6-5",
  code: "6-5",
  title: "Measurement Review",
  goal: "I CAN use all measurement skills: length, perimeter and area.",
  standards: ["4.MD.A.1", "4.MD.A.3"],
  vocabulary: [
    { term: "Length", definition: "How long." },
    { term: "Perimeter", definition: "Distance around." },
    { term: "Area", definition: "Space inside." },
    { term: "Convert", definition: "Change units." },
    { term: "Rectangle", definition: "4-sided shape." },
    { term: "Formula", definition: "Rule for calculating." },
    { term: "Unit", definition: "Measurement unit." },
    { term: "Square", definition: "Equal sides." },
  ],
  concepts: [
    {
      id: "m4-u6-measurement-review",
      title: "Measurement review",
      skill: "Combine length units, perimeter and area.",
      lesson: {
        sections: [
          {
            heading: "All measurement",
            body: "Convert **length units**, find **perimeter** (around) and **area** (inside) of rectangles and irregular shapes.",
          },
          {
            heading: "Put it together",
            body: "Use all measurement skills together.",
          },
        ],
        keyFormulas: [
          { name: "Measurement", statement: "Length + perimeter + area = all skills." },
        ],
        workedExample: {
          problem: "Convert units, find perimeter and area.",
          solution: "All measurement skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "m4-u6-measurement-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Measurement skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only length"
                    },
                    {
                              "id": "b",
                              "text": "length, perimeter, area"
                    },
                    {
                              "id": "c",
                              "text": "only perimeter"
                    },
                    {
                              "id": "d",
                              "text": "only area"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All measurement skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All measurement skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "length, perimeter, area",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m4-u6-measurement-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Convert 5 feet to inches, find the perimeter of a 4x3 rectangle, and find its area.",
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
                                                  "All measurement",
                                                  "60 in, 14 units, 12 units²."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All measurement",
                                                  "60 in, 14 units, 12 units²."
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
                    "**5 ft = 60 in; perimeter = 2(4+3) = 14; area = 4 x 3 = 12**"
          ]
},
        },
        {
          id: "m4-u6-measurement-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Perimeter and area are different because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they're the same"
                    },
                    {
                              "id": "b",
                              "text": "perimeter is around, area is inside"
                    },
                    {
                              "id": "c",
                              "text": "area is bigger"
                    },
                    {
                              "id": "d",
                              "text": "perimeter is inside"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Perimeter=around, area=inside."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Perimeter=around, area=inside.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "perimeter is around, area is inside",
          "commonErrors": [
                    "Thinks they're the same."
          ]
},
        },
        {
          id: "m4-u6-measurement-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Length\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Distance around."
                    },
                    {
                              "id": "b",
                              "text": "How long."
                    },
                    {
                              "id": "c",
                              "text": "Space inside."
                    },
                    {
                              "id": "d",
                              "text": "Change units."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Length\" means How long."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Length\" means How long.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Length** = How long.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u6-measurement-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Perimeter\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Space inside."
                    },
                    {
                              "id": "b",
                              "text": "Change units."
                    },
                    {
                              "id": "c",
                              "text": "4-sided shape."
                    },
                    {
                              "id": "d",
                              "text": "Distance around."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Perimeter\" means Distance around."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Perimeter\" means Distance around.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Perimeter** = Distance around.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u6-measurement-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Area\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Change units."
                    },
                    {
                              "id": "b",
                              "text": "Space inside."
                    },
                    {
                              "id": "c",
                              "text": "4-sided shape."
                    },
                    {
                              "id": "d",
                              "text": "Rule for calculating."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Area\" means Space inside."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Area\" means Space inside.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Area** = Space inside.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u6-measurement-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Convert\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4-sided shape."
                    },
                    {
                              "id": "b",
                              "text": "Rule for calculating."
                    },
                    {
                              "id": "c",
                              "text": "Measurement unit."
                    },
                    {
                              "id": "d",
                              "text": "Change units."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Convert\" means Change units."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Convert\" means Change units.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Convert** = Change units.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u6-measurement-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rectangle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rule for calculating."
                    },
                    {
                              "id": "b",
                              "text": "4-sided shape."
                    },
                    {
                              "id": "c",
                              "text": "Measurement unit."
                    },
                    {
                              "id": "d",
                              "text": "Equal sides."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Rectangle\" means 4-sided shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rectangle\" means 4-sided shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rectangle** = 4-sided shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
