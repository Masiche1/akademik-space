import type { Lesson } from "../../../types.ts";

export const lesson65: Lesson = {
  id: "m0-u6-lesson-6-5",
  code: "6-5",
  title: "Measurement and Data Review",
  goal: "I CAN compare lengths/weights, classify and use data.",
  standards: ["K.MD.A.1", "K.MD.A.2", "K.MD.B.3"],
  vocabulary: [
    { term: "Length", definition: "How long." },
    { term: "Weight", definition: "How heavy." },
    { term: "Longer", definition: "Greater length." },
    { term: "Heavier", definition: "Weighs more." },
    { term: "Classify", definition: "Sort by feature." },
    { term: "Data", definition: "Collected information." },
    { term: "Category", definition: "A counted group." },
  ],
  concepts: [
    {
      id: "m0-u6-measure-review",
      title: "Measurement and data review",
      skill: "Combine length/weight comparison, classification and data collection.",
      lesson: {
        sections: [
          {
            heading: "Measure + classify + data",
            body: "**Measurement** compares length and weight; **classification** sorts by features; **data** is what we get by counting categories. These work together to describe the world.",
          },
          {
            heading: "Put it together",
            body: "Compare objects, sort them into groups, count each group, and answer questions about your data.",
          },
        ],
        keyFormulas: [
          { name: "Review", statement: "Compare length/weight + classify + count data = measurement and data skills." },
        ],
        workedExample: {
          problem: "Compare two ribbons by length, then sort buttons by color and count.",
          solution: "Ribbons: one longer. Buttons: red=4, blue=3, total=7.",
        },
      },
      questions: [
        {
          id: "m0-u6-measure-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Measurement in kindergarten includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only counting"
                    },
                    {
                              "id": "b",
                              "text": "comparing length and weight"
                    },
                    {
                              "id": "c",
                              "text": "only shapes"
                    },
                    {
                              "id": "d",
                              "text": "only data"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "K measurement = compare length and weight."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "K measurement = compare length and weight.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**length + weight**",
          "commonErrors": [
                    "Lists wrong skills."
          ]
},
        },
        {
          id: "m0-u6-measure-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Compare two objects by length AND by weight. Then sort a group into categories and count.",
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
                                                  "Measure + classify + data",
                                                  "Compare, sort, count."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Measure + classify + data",
                                                  "Compare, sort, count."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all three tasks.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Pencil longer, book heavier; red=3, blue=5, total=8'**"
          ]
},
        },
        {
          id: "m0-u6-measure-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A balance scale compares...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "length"
                    },
                    {
                              "id": "b",
                              "text": "weight"
                    },
                    {
                              "id": "c",
                              "text": "color"
                    },
                    {
                              "id": "d",
                              "text": "shape"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Balance scale compares weight."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Balance scale compares weight.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**weight**",
          "commonErrors": [
                    "Confuses with length."
          ]
},
        },
        {
          id: "m0-u6-measure-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "When classifying objects, you sort them by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "random"
                    },
                    {
                              "id": "b",
                              "text": "a shared feature like color or shape"
                    },
                    {
                              "id": "c",
                              "text": "size only"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Classify = sort by shared feature."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Classify = sort by shared feature.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**shared feature**",
          "commonErrors": [
                    "Thinks sorting is random."
          ]
},
        },
        {
          id: "m0-u6-measure-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Length\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How heavy."
                    },
                    {
                              "id": "b",
                              "text": "How long."
                    },
                    {
                              "id": "c",
                              "text": "Greater length."
                    },
                    {
                              "id": "d",
                              "text": "Weighs more."
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
          id: "m0-u6-measure-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Weight\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Greater length."
                    },
                    {
                              "id": "b",
                              "text": "Weighs more."
                    },
                    {
                              "id": "c",
                              "text": "Sort by feature."
                    },
                    {
                              "id": "d",
                              "text": "How heavy."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Weight\" means How heavy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Weight\" means How heavy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Weight** = How heavy.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u6-measure-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Longer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Weighs more."
                    },
                    {
                              "id": "b",
                              "text": "Greater length."
                    },
                    {
                              "id": "c",
                              "text": "Sort by feature."
                    },
                    {
                              "id": "d",
                              "text": "Collected information."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Longer\" means Greater length."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Longer\" means Greater length.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Longer** = Greater length.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u6-measure-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Heavier\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sort by feature."
                    },
                    {
                              "id": "b",
                              "text": "Collected information."
                    },
                    {
                              "id": "c",
                              "text": "A counted group."
                    },
                    {
                              "id": "d",
                              "text": "Weighs more."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Heavier\" means Weighs more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Heavier\" means Weighs more.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Heavier** = Weighs more.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
