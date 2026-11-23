import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "mpk-u1-lesson-1-3",
  code: "1-3",
  title: "More, Fewer and the Same",
  goal: "I CAN say which group has more, fewer or the same number.",
  standards: ["ELOF-PK.MATH.COMPARE.1"],
  vocabulary: [
    { term: "More", definition: "A greater number of objects." },
    { term: "Fewer", definition: "A smaller number of objects." },
    { term: "Same as", definition: "An equal number of objects." },
    { term: "Compare", definition: "Look at two groups and decide how they are different." },
    { term: "Greater", definition: "More than another amount." },
  ],
  concepts: [
    {
      id: "mpk-u1-more-fewer-same",
      title: "Comparing groups",
      skill: "Use counting or matching to compare two groups.",
      lesson: {
        sections: [
          {
            heading: "Two ways to compare",
            body: "You can **match** the objects one-to-one, or **count** each group and compare the numbers. Both ways work — pick the one that feels easier.",
          },
          {
            heading: "Say it clearly",
            body: "Use the words **more**, **fewer** and **the same as**. 'Group A has more than Group B' or 'They have the same number.'",
          },
        ],
        keyFormulas: [
          { name: "Compare", statement: "More / fewer / same — decided by matching or counting." },
        ],
        workedExample: {
          problem: "A = 6 bears, B = 4 bears. Compare.",
          solution: "Count: 6 > 4, so **Group A has more**.",
        },
      },
      questions: [
        {
          id: "mpk-u1-more-fewer-same-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 4 dots. Group B has 6 dots. Which group has more?",
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
                              "statement": "Count each group: 6 > 4, so Group B has more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count each group: 6 > 4, so Group B has more.",
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
          id: "mpk-u1-more-fewer-same-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 4 dots. Group B has 6 dots. How many more does the larger group have?",
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
                              "statement": "6 - 4 = 2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "6 - 4 = 2.",
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
          id: "mpk-u1-more-fewer-same-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which has fewer? A: 6 dots   B: 3 dots",
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
                              "text": "The same"
                    },
                    {
                              "id": "d",
                              "text": "Cannot tell"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "B has 3, A has 6; fewer means smaller number."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "B has 3, A has 6; fewer means smaller number.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Group B**",
          "commonErrors": [
                    "Thinks 'fewer' means 'more'."
          ]
},
        },
        {
          id: "mpk-u1-more-fewer-same-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A: 3 stars   B: 3 stars. The groups are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A has more"
                    },
                    {
                              "id": "b",
                              "text": "B has more"
                    },
                    {
                              "id": "c",
                              "text": "The same"
                    },
                    {
                              "id": "d",
                              "text": "Cannot tell"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "3 and 3 match exactly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3 and 3 match exactly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**The same**",
          "commonErrors": [
                    "Assumes groups always differ."
          ]
},
        },
        {
          id: "mpk-u1-more-fewer-same-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "A has 7 shells, B has 5 shells. How many more does A have?",
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
                    "Adds 7 + 5 = 12."
          ]
},
        },
        {
          id: "mpk-u1-more-fewer-same-q6",
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
                              "text": "Look at two groups and decide how they are different."
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
          id: "mpk-u1-more-fewer-same-q7",
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
                              "text": "Look at two groups and decide how they are different."
                    },
                    {
                              "id": "c",
                              "text": "More than another amount."
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
          id: "mpk-u1-more-fewer-same-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Same as\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Look at two groups and decide how they are different."
                    },
                    {
                              "id": "b",
                              "text": "An equal number of objects."
                    },
                    {
                              "id": "c",
                              "text": "More than another amount."
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
                              "statement": "\"Same as\" means An equal number of objects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Same as\" means An equal number of objects.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Same as** = An equal number of objects.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
