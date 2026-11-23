import type { Lesson } from "../../../types.ts";

export const lesson64: Lesson = {
  id: "m1-u6-lesson-6-4",
  code: "6-4",
  title: "Comparing Lengths",
  goal: "I CAN compare lengths using measurement.",
  standards: ["1.MD.A.1", "1.MD.A.2"],
  vocabulary: [
    { term: "Compare", definition: "See which is longer/shorter." },
    { term: "Length", definition: "How long." },
    { term: "Longer", definition: "More length." },
    { term: "Shorter", definition: "Less length." },
    { term: "Same", definition: "Equal length." },
    { term: "Measure", definition: "Find length." },
    { term: "Unit", definition: "What you measure with." },
    { term: "Order", definition: "Arrange by length." },
  ],
  concepts: [
    {
      id: "m1-u6-compare-lengths",
      title: "Comparing lengths",
      skill: "Compare lengths by measuring and ordering objects.",
      lesson: {
        sections: [
          {
            heading: "Compare by measuring",
            body: "To **compare** lengths, **measure** each object and compare the measurements. More units = **longer**; fewer = **shorter**; equal = **same** length.",
          },
          {
            heading: "Order by length",
            body: "You can also **order** objects from shortest to longest (or longest to shortest) by comparing their lengths.",
          },
        ],
        keyFormulas: [
          { name: "Compare", statement: "Measure each -> more=longer, fewer=shorter, equal=same." },
        ],
        workedExample: {
          problem: "Rope A is 9 units long, Rope B is 7 units long, Rope C is 9 units long. Order them shortest to longest.",
          solution: "**B (7), A (9), C (9)** — B shortest, A and C tied longest.",
        },
      },
      questions: [
        {
          id: "m1-u6-compare-lengths-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Object A is 8 units long, Object B is 5 units long. Which is longer?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A"
                    },
                    {
                              "id": "b",
                              "text": "B"
                    },
                    {
                              "id": "c",
                              "text": "Same"
                    },
                    {
                              "id": "d",
                              "text": "Cannot tell"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "8 > 5, so A is longer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8 > 5, so A is longer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**A**",
          "commonErrors": [
                    "Compares wrong."
          ]
},
        },
        {
          id: "m1-u6-compare-lengths-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A is 12 units, B is 9 units. How many units longer is A?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Difference",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "$12 - 9 = 3$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$12 - 9 = 3$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(3)**",
          "commonErrors": [
                    "Adds instead."
          ]
},
        },
        {
          id: "m1-u6-compare-lengths-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Measure three objects. Order them from shortest to longest and explain how you know.",
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
                                                  "Compare lengths",
                                                  "Measure + order."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "method",
                                                  "Compare lengths",
                                                  "Measure + order."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Measures all three.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Orders correctly + explains.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Short=4, Medium=7, Long=10 units'**"
          ]
},
        },
        {
          id: "m1-u6-compare-lengths-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To compare lengths, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "guess"
                    },
                    {
                              "id": "b",
                              "text": "measure each object"
                    },
                    {
                              "id": "c",
                              "text": "look at color"
                    },
                    {
                              "id": "d",
                              "text": "ignore size"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Measure to compare."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Measure to compare.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**measure**",
          "commonErrors": [
                    "Thinks guessing works."
          ]
},
        },
        {
          id: "m1-u6-compare-lengths-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare two objects' lengths. Which is longer? How do you know?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Compare lengths",
                              "statement": "Measure both + compare."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Measures both.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Compares correctly.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Pencil=6in, crayon=4in; pencil longer'**",
          "commonErrors": [
                    "Cannot measure.",
                    "Wrong comparison."
          ]
},
        },
        {
          id: "m1-u6-compare-lengths-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compare\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How long."
                    },
                    {
                              "id": "b",
                              "text": "See which is longer/shorter."
                    },
                    {
                              "id": "c",
                              "text": "More length."
                    },
                    {
                              "id": "d",
                              "text": "Less length."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Compare\" means See which is longer/shorter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Compare\" means See which is longer/shorter.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Compare** = See which is longer/shorter.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u6-compare-lengths-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Length\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "More length."
                    },
                    {
                              "id": "b",
                              "text": "Less length."
                    },
                    {
                              "id": "c",
                              "text": "Equal length."
                    },
                    {
                              "id": "d",
                              "text": "How long."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "m1-u6-compare-lengths-q8",
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
                              "text": "More length."
                    },
                    {
                              "id": "c",
                              "text": "Equal length."
                    },
                    {
                              "id": "d",
                              "text": "Find length."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Longer\" means More length."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Longer\" means More length.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Longer** = More length.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u6-compare-lengths-q9",
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
                              "text": "Find length."
                    },
                    {
                              "id": "c",
                              "text": "What you measure with."
                    },
                    {
                              "id": "d",
                              "text": "Less length."
                    }
          ],
          "correctChoiceId": "d"
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
