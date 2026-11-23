import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "mpk-u8-lesson-8-1",
  code: "8-1",
  title: "Review: Counting and Comparing",
  goal: "I CAN count, match and compare groups confidently.",
  standards: ["ELOF-PK.MATH.REVIEW.1"],
  vocabulary: [
    { term: "Review", definition: "Practice what you learned." },
    { term: "Mixed", definition: "Different kinds together." },
    { term: "Confident", definition: "Sure of yourself." },
    { term: "Master", definition: "Know it well." },
    { term: "Practice", definition: "Do again to get better." },
  ],
  concepts: [
    {
      id: "mpk-u8-review-counting",
      title: "Counting review",
      skill: "Apply counting and comparing in mixed situations.",
      lesson: {
        sections: [
          {
            heading: "Put it together",
            body: "Counting, matching and comparing all use the same idea: **one-to-one**. Touch each object once, say one number name, and the last number is the total.",
          },
          {
            heading: "Compare two ways",
            body: "You can compare by matching (leftovers show more) or by counting (bigger number wins). Use whichever is easier.",
          },
        ],
        keyFormulas: [
          { name: "Review", statement: "Count -> match -> compare; one-to-one is the key." },
        ],
        workedExample: {
          problem: "A has 7 dots, B has 5 dots. How many more does A have?",
          solution: "7 - 5 = **2 more**.",
        },
      },
      questions: [
        {
          id: "mpk-u8-review-counting-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 6 dots. Group B has 9 dots. Which group has more?",
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
                              "statement": "Count each group: 9 > 6, so Group B has more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count each group: 9 > 6, so Group B has more.",
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
          id: "mpk-u8-review-counting-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 6 dots. Group B has 9 dots. How many more does the larger group have?",
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
                              "statement": "9 - 6 = 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "9 - 6 = 3.",
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
          id: "mpk-u8-review-counting-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "A: 5 dots   B: 7 dots. Which has fewer?",
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
                              "statement": "A has 5, B has 7; A has fewer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A has 5, B has 7; A has fewer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Group A**",
          "commonErrors": [
                    "Picks the bigger group."
          ]
},
        },
        {
          id: "mpk-u8-review-counting-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Count: 15 stars. How many?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Stars",
                              "answer": 15
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count to 15."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count to 15.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$15$",
          "commonErrors": [
                    "Loses count in teens."
          ]
},
        },
        {
          id: "mpk-u8-review-counting-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Match A: 3 triangles   B: 4 triangles. Leftovers are in...",
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
                              "text": "Neither"
                    },
                    {
                              "id": "d",
                              "text": "Both"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "B has 4, A has 3; B has 1 leftover."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "B has 4, A has 3; B has 1 leftover.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Group B**",
          "commonErrors": [
                    "Thinks leftovers are always in A."
          ]
},
        },
        {
          id: "mpk-u8-review-counting-q6",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "You have two groups of objects. Describe two different ways to find which group has more.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Match or count",
                              "statement": "Matching: leftovers show more. Counting: bigger number wins."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Describes matching method.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Describes counting method.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**Match one-to-one OR count each group and compare numbers.**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Only describes one way.",
                    "Gives wrong methods."
          ]
},
        },
        {
          id: "mpk-u8-review-counting-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Review\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Different kinds together."
                    },
                    {
                              "id": "b",
                              "text": "Practice what you learned."
                    },
                    {
                              "id": "c",
                              "text": "Sure of yourself."
                    },
                    {
                              "id": "d",
                              "text": "Know it well."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Review\" means Practice what you learned."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Review\" means Practice what you learned.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Review** = Practice what you learned.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u8-review-counting-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mixed\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sure of yourself."
                    },
                    {
                              "id": "b",
                              "text": "Know it well."
                    },
                    {
                              "id": "c",
                              "text": "Do again to get better."
                    },
                    {
                              "id": "d",
                              "text": "Different kinds together."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Mixed\" means Different kinds together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Mixed\" means Different kinds together.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Mixed** = Different kinds together.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
