import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "m0-u8-lesson-8-1",
  code: "8-1",
  title: "Review: Counting and Comparing",
  goal: "I CAN count, compare groups and numbers confidently.",
  standards: ["K.CC.A.1", "K.CC.C.6", "K.CC.C.7"],
  vocabulary: [
    { term: "Count", definition: "Say numbers in order." },
    { term: "Compare", definition: "Decide more/fewer/same." },
    { term: "More", definition: "Greater number." },
    { term: "Fewer", definition: "Smaller number." },
    { term: "Same", definition: "Equal number." },
    { term: "Symbol", definition: ">, <, =." },
  ],
  concepts: [
    {
      id: "m0-u8-review-count-compare",
      title: "Counting and comparing review",
      skill: "Combine counting, comparing groups and numbers.",
      lesson: {
        sections: [
          {
            heading: "Count + compare",
            body: "Counting tells you how many; comparing tells you which group has **more**, **fewer** or the **same**. Use matching or symbols (> < =) to show comparisons.",
          },
          {
            heading: "Put it together",
            body: "Count two groups, compare the totals, and write the comparison.",
          },
        ],
        keyFormulas: [
          { name: "Review", statement: "Count + compare + symbols = number sense." },
        ],
        workedExample: {
          problem: "Count 7 vs 5 objects. Which has more? Write it.",
          solution: "7 > 5 — the first group has **more**.",
        },
      },
      questions: [
        {
          id: "m0-u8-review-count-compare-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 7 dots. Group B has 5 dots. Which group has more?",
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
                              "statement": "Count each group: 7 > 5, so Group A has more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count each group: 7 > 5, so Group A has more.",
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
          id: "m0-u8-review-count-compare-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 7 dots. Group B has 5 dots. How many more does the larger group have?",
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
                              "statement": "7 - 5 = 2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "7 - 5 = 2.",
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
          id: "m0-u8-review-count-compare-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 4 dots. Group B has 9 dots. Which group has more?",
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
                              "statement": "Count each group: 9 > 4, so Group B has more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count each group: 9 > 4, so Group B has more.",
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
          id: "m0-u8-review-count-compare-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 4 dots. Group B has 9 dots. How many more does the larger group have?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "More",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "9 - 4 = 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "9 - 4 = 5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$5$",
          "commonErrors": [
                    "Adds the two groups instead of subtracting."
          ]
},
        },
        {
          id: "m0-u8-review-count-compare-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is greater: 12 or 9?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "9"
                    },
                    {
                              "id": "b",
                              "text": "12"
                    },
                    {
                              "id": "c",
                              "text": "equal"
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
                              "statement": "12 > 9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "12 > 9.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**12**",
          "commonErrors": [
                    "Picks smaller."
          ]
},
        },
        {
          id: "m0-u8-review-count-compare-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Count two groups and compare them using a symbol.",
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
                                                  "Count + compare",
                                                  "Use >, <, =."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Count + compare",
                                                  "Use >, <, =."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Counts and compares correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., '6 > 4'**"
          ]
},
        },
        {
          id: "m0-u8-review-count-compare-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Count\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Decide more/fewer/same."
                    },
                    {
                              "id": "b",
                              "text": "Say numbers in order."
                    },
                    {
                              "id": "c",
                              "text": "Greater number."
                    },
                    {
                              "id": "d",
                              "text": "Smaller number."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Count\" means Say numbers in order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Count\" means Say numbers in order.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Count** = Say numbers in order.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u8-review-count-compare-q8",
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
                              "text": "Smaller number."
                    },
                    {
                              "id": "c",
                              "text": "Equal number."
                    },
                    {
                              "id": "d",
                              "text": "Decide more/fewer/same."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Compare\" means Decide more/fewer/same."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Compare\" means Decide more/fewer/same.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Compare** = Decide more/fewer/same.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u8-review-count-compare-q9",
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
                              "text": "Greater number."
                    },
                    {
                              "id": "c",
                              "text": "Equal number."
                    },
                    {
                              "id": "d",
                              "text": ">, <, =."
                    }
          ],
          "correctChoiceId": "b"
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
        {
          id: "m0-u8-review-count-compare-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fewer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Equal number."
                    },
                    {
                              "id": "b",
                              "text": ">, <, =."
                    },
                    {
                              "id": "c",
                              "text": "Say numbers in order."
                    },
                    {
                              "id": "d",
                              "text": "Smaller number."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fewer\" means Smaller number."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fewer\" means Smaller number.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fewer** = Smaller number.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
