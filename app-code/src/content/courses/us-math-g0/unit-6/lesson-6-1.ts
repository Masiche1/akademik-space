import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "m0-u6-lesson-6-1",
  code: "6-1",
  title: "Compare Lengths",
  goal: "I CAN compare two objects by length using words and symbols.",
  standards: ["K.MD.A.1", "K.MD.A.2"],
  vocabulary: [
    { term: "Length", definition: "How long something is." },
    { term: "Longer", definition: "Greater length." },
    { term: "Shorter", definition: "Less length." },
    { term: "Same length", definition: "Equal length." },
    { term: "Compare", definition: "Decide which is longer or shorter." },
    { term: "Measure", definition: "Find out how long." },
  ],
  concepts: [
    {
      id: "m0-u6-compare-length",
      title: "Comparing lengths",
      skill: "Compare two objects by length directly and with comparison words.",
      lesson: {
        sections: [
          {
            heading: "Longer and shorter",
            body: "To compare **length**, line up two objects at one end. The one that extends farther is **longer**; the one that stops first is **shorter**.",
          },
          {
            heading: "Comparison words",
            body: "Use words like **longer, shorter, taller, same length** to describe how objects compare. You can also use symbols: > for longer, < for shorter.",
          },
        ],
        keyFormulas: [
          { name: "Compare length", statement: "Line up ends; farther end = longer, closer = shorter." },
        ],
        workedExample: {
          problem: "A pencil is longer than a crayon. Which is shorter?",
          solution: "The **crayon** is shorter.",
        },
      },
      questions: [
        {
          id: "m0-u6-compare-length-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word means 'greater length'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "shorter"
                    },
                    {
                              "id": "b",
                              "text": "longer"
                    },
                    {
                              "id": "c",
                              "text": "smaller"
                    },
                    {
                              "id": "d",
                              "text": "same"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Longer = greater length."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Longer = greater length.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**longer**",
          "commonErrors": [
                    "Picks 'shorter'."
          ]
},
        },
        {
          id: "m0-u6-compare-length-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "To compare lengths fairly, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "guess"
                    },
                    {
                              "id": "b",
                              "text": "line up one end of both objects"
                    },
                    {
                              "id": "c",
                              "text": "measure with hands only"
                    },
                    {
                              "id": "d",
                              "text": "close your eyes"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Line up one end to compare length fairly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Line up one end to compare length fairly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**line up one end**",
          "commonErrors": [
                    "Doesn't align objects."
          ]
},
        },
        {
          id: "m0-u6-compare-length-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Compare two objects near you (a pencil and a crayon, two ribbons). Which is longer? Which is shorter?",
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
                                                  "Compare length",
                                                  "Align ends, identify longer/shorter."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Compare length",
                                                  "Align ends, identify longer/shorter."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Compares two objects correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Pencil is longer, crayon is shorter.'**"
          ]
},
        },
        {
          id: "m0-u6-compare-length-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If two ribbons are the same length, they are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "different"
                    },
                    {
                              "id": "b",
                              "text": "the same length"
                    },
                    {
                              "id": "c",
                              "text": "one longer always"
                    },
                    {
                              "id": "d",
                              "text": "cannot tell"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Same length = equal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Same length = equal.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**same length**",
          "commonErrors": [
                    "Thinks they must differ."
          ]
},
        },
        {
          id: "m0-u6-compare-length-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare three objects by length. Order them from shortest to longest.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Compare length",
                              "statement": "Order by length."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Compares all three.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Orders shortest to longest.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**e.g., 'crayon < pencil < ruler'**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Wrong order.",
                    "Cannot compare."
          ]
},
        },
        {
          id: "m0-u6-compare-length-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Length\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Greater length."
                    },
                    {
                              "id": "b",
                              "text": "How long something is."
                    },
                    {
                              "id": "c",
                              "text": "Less length."
                    },
                    {
                              "id": "d",
                              "text": "Equal length."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Length\" means How long something is."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Length\" means How long something is.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Length** = How long something is.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u6-compare-length-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Longer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Less length."
                    },
                    {
                              "id": "b",
                              "text": "Equal length."
                    },
                    {
                              "id": "c",
                              "text": "Decide which is longer or shorter."
                    },
                    {
                              "id": "d",
                              "text": "Greater length."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "m0-u6-compare-length-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Shorter\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Equal length."
                    },
                    {
                              "id": "b",
                              "text": "Less length."
                    },
                    {
                              "id": "c",
                              "text": "Decide which is longer or shorter."
                    },
                    {
                              "id": "d",
                              "text": "Find out how long."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Shorter\" means Less length."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Shorter\" means Less length.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Shorter** = Less length.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
