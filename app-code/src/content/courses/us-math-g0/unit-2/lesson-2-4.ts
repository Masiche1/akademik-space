import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "m0-u2-lesson-2-4",
  code: "2-4",
  title: "Comparing Review",
  goal: "I CAN compare groups, numbers and quantities confidently.",
  standards: ["K.CC.C.6", "K.CC.C.7"],
  vocabulary: [
    { term: "Compare", definition: "Decide which is more, fewer or same." },
    { term: "More", definition: "Greater number." },
    { term: "Fewer", definition: "Smaller number." },
    { term: "Same", definition: "Equal number." },
    { term: "Symbol", definition: ">, < or = used to compare." },
    { term: "Count", definition: "Say numbers in order to find total." },
  ],
  concepts: [
    {
      id: "m0-u2-compare-review",
      title: "Comparing review",
      skill: "Combine comparing groups and numbers using matching and symbols.",
      lesson: {
        sections: [
          {
            heading: "All ways to compare",
            body: "Compare **groups** (match objects one-to-one), compare **numbers** (which is greater/less), and use **symbols** (>, <, =) to show the relationship.",
          },
          {
            heading: "Put it together",
            body: "Count two groups, compare the totals, and write the comparison with the correct symbol.",
          },
        ],
        keyFormulas: [
          { name: "Comparing", statement: "Match objects or compare numbers; use >, <, = to record." },
        ],
        workedExample: {
          problem: "Group A=6, Group B=4. Write the comparison.",
          solution: "6 > 4 — Group A has **more**.",
        },
      },
      questions: [
        {
          id: "m0-u2-compare-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 8 dots. Group B has 5 dots. Which group has more?",
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
                              "statement": "Count each group: 8 > 5, so Group A has more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count each group: 8 > 5, so Group A has more.",
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
          id: "m0-u2-compare-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 8 dots. Group B has 5 dots. How many more does the larger group have?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "More",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "8 - 5 = 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8 - 5 = 3.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Adds the two groups instead of subtracting."
          ]
},
        },
        {
          id: "m0-u2-compare-review-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 5 dots. Group B has 8 dots. Which group has more?",
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
                              "statement": "Count each group: 8 > 5, so Group B has more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count each group: 8 > 5, so Group B has more.",
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
          id: "m0-u2-compare-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 5 dots. Group B has 8 dots. How many more does the larger group have?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "More",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "8 - 5 = 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8 - 5 = 3.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Adds the two groups instead of subtracting."
          ]
},
        },
        {
          id: "m0-u2-compare-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 6 dots. Group B has 6 dots. Which group has more?",
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
                              "statement": "Both groups have 6 objects, so they match one-to-one."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both groups have 6 objects, so they match one-to-one.",
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
          id: "m0-u2-compare-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 6 dots. Group B has 6 dots. How many more does the larger group have?",
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
                              "statement": "The groups are equal: 6 - 6 = 0."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The groups are equal: 6 - 6 = 0.",
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
          id: "m0-u2-compare-review-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which symbol shows 'less than'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": ">"
                    },
                    {
                              "id": "b",
                              "text": "<"
                    },
                    {
                              "id": "c",
                              "text": "="
                    },
                    {
                              "id": "d",
                              "text": "+"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "< means less than."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "< means less than.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**<**",
          "commonErrors": [
                    "Confuses with >."
          ]
},
        },
        {
          id: "m0-u2-compare-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Compare two numbers of your choice. Write the comparison with the correct symbol.",
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
                                                  "Compare + symbols",
                                                  "Use >, <, = correctly."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Compare + symbols",
                                                  "Use >, <, = correctly."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Writes correct comparison.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., '9 > 4'**"
          ]
},
        },
        {
          id: "m0-u2-compare-review-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compare\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Greater number."
                    },
                    {
                              "id": "b",
                              "text": "Decide which is more, fewer or same."
                    },
                    {
                              "id": "c",
                              "text": "Smaller number."
                    },
                    {
                              "id": "d",
                              "text": "Equal number."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Compare\" means Decide which is more, fewer or same."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Compare\" means Decide which is more, fewer or same.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Compare** = Decide which is more, fewer or same.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u2-compare-review-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"More\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Smaller number."
                    },
                    {
                              "id": "b",
                              "text": "Equal number."
                    },
                    {
                              "id": "c",
                              "text": ">, < or = used to compare."
                    },
                    {
                              "id": "d",
                              "text": "Greater number."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"More\" means Greater number."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"More\" means Greater number.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**More** = Greater number.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
