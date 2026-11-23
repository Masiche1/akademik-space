import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "m0-u2-lesson-2-1",
  code: "2-1",
  title: "More, Fewer and the Same",
  goal: "I CAN compare two groups and say which has more, fewer or the same number.",
  standards: ["K.CC.C.6", "K.CC.C.7"],
  vocabulary: [
    { term: "More", definition: "A greater number of objects." },
    { term: "Fewer", definition: "A smaller number of objects." },
    { term: "Same", definition: "An equal number of objects." },
    { term: "Compare", definition: "Look at two groups and decide." },
    { term: "Match", definition: "Pair objects one-to-one to compare." },
  ],
  concepts: [
    {
      id: "m0-u2-more-fewer-same",
      title: "More, fewer and the same",
      skill: "Compare two groups of objects to determine more, fewer or equal.",
      lesson: {
        sections: [
          {
            heading: "Comparing groups",
            body: "To **compare**, look at two groups. One may have **more** objects, one **fewer**, or they may have the **same** number.",
          },
          {
            heading: "Match to check",
            body: "Line up the objects one-to-one. If every object has a partner, the groups are the **same**. If one group has objects left over, it has **more**.",
          },
        ],
        keyFormulas: [
          { name: "Compare", statement: "Match objects one-to-one; leftover objects mean that group has more." },
        ],
        workedExample: {
          problem: "Group A: 5 dots. Group B: 3 dots. Which has more?",
          solution: "Match one-to-one: A has 2 dots left over. **Group A has more.**",
        },
      },
      questions: [
        {
          id: "m0-u2-more-fewer-same-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 5 dots. Group B has 3 dots. Which group has more?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Group A"
                    },
                    {
                              "id": "b",
                              "text": "Group B"
                    },
                    {
                              "id": "c",
                              "text": "They are the same"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count each group: 5 > 3, so Group A has more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count each group: 5 > 3, so Group A has more.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Group A**",
          "commonErrors": [
                    "Picks the group that looks bigger without counting."
          ]
},
        },
        {
          id: "m0-u2-more-fewer-same-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 5 dots. Group B has 3 dots. How many more does the larger group have?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "More",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "5 - 3 = 2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5 - 3 = 2.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$2$",
          "commonErrors": [
                    "Adds the two groups instead of subtracting."
          ]
},
        },
        {
          id: "m0-u2-more-fewer-same-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 4 dots. Group B has 4 dots. Which group has more?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "They are the same"
                    },
                    {
                              "id": "b",
                              "text": "Group A"
                    },
                    {
                              "id": "c",
                              "text": "Group B"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Both groups have 4 objects, so they match one-to-one."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both groups have 4 objects, so they match one-to-one.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**The same**",
          "commonErrors": [
                    "Assumes the bigger-looking group has more without counting."
          ]
},
        },
        {
          id: "m0-u2-more-fewer-same-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 4 dots. Group B has 4 dots. How many more does the larger group have?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "More",
                              "answer": 0
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "The groups are equal: 4 - 4 = 0."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The groups are equal: 4 - 4 = 0.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$0$",
          "commonErrors": [
                    "Subtracts in the wrong order and reports a negative."
          ]
},
        },
        {
          id: "m0-u2-more-fewer-same-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 2 dots. Group B has 6 dots. Which group has more?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Group A"
                    },
                    {
                              "id": "b",
                              "text": "Group B"
                    },
                    {
                              "id": "c",
                              "text": "They are the same"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count each group: 6 > 2, so Group B has more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count each group: 6 > 2, so Group B has more.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Group B**",
          "commonErrors": [
                    "Picks the group that looks bigger without counting."
          ]
},
        },
        {
          id: "m0-u2-more-fewer-same-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 2 dots. Group B has 6 dots. How many more does the larger group have?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "More",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "6 - 2 = 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "6 - 2 = 4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$4$",
          "commonErrors": [
                    "Adds the two groups instead of subtracting."
          ]
},
        },
        {
          id: "m0-u2-more-fewer-same-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "If two groups have the same number of objects, they are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "different"
                    },
                    {
                              "id": "b",
                              "text": "the same"
                    },
                    {
                              "id": "c",
                              "text": "one has more always"
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
                              "statement": "Same number = equal groups."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Same number = equal groups.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**the same**",
          "commonErrors": [
                    "Thinks same means different."
          ]
},
        },
        {
          id: "m0-u2-more-fewer-same-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Draw or point to two groups of objects. Which has more? How do you know?",
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
                                                  "Compare",
                                                  "Match one-to-one, leftover = more."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Compare",
                                                  "Match one-to-one, leftover = more."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Compares two groups correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'This group has more because 2 are left over after matching.'**"
          ]
},
        },
        {
          id: "m0-u2-more-fewer-same-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"More\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A smaller number of objects."
                    },
                    {
                              "id": "b",
                              "text": "A greater number of objects."
                    },
                    {
                              "id": "c",
                              "text": "An equal number of objects."
                    },
                    {
                              "id": "d",
                              "text": "Look at two groups and decide."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"More\" means A greater number of objects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"More\" means A greater number of objects.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**More** = A greater number of objects.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u2-more-fewer-same-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fewer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "An equal number of objects."
                    },
                    {
                              "id": "b",
                              "text": "Look at two groups and decide."
                    },
                    {
                              "id": "c",
                              "text": "Pair objects one-to-one to compare."
                    },
                    {
                              "id": "d",
                              "text": "A smaller number of objects."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fewer\" means A smaller number of objects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fewer\" means A smaller number of objects.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fewer** = A smaller number of objects.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u2-more-fewer-same-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Same\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Look at two groups and decide."
                    },
                    {
                              "id": "b",
                              "text": "An equal number of objects."
                    },
                    {
                              "id": "c",
                              "text": "Pair objects one-to-one to compare."
                    },
                    {
                              "id": "d",
                              "text": "A greater number of objects."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Same\" means An equal number of objects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Same\" means An equal number of objects.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Same** = An equal number of objects.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
