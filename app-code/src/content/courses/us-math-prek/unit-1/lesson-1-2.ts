import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "mpk-u1-lesson-1-2",
  code: "1-2",
  title: "Match Objects One-to-One",
  goal: "I CAN pair objects so each one has a partner.",
  standards: ["ELOF-PK.MATH.MATCH.1"],
  vocabulary: [
    { term: "Match", definition: "Pair objects so each has one partner." },
    { term: "Partner", definition: "The object paired with another." },
    { term: "Leftover", definition: "An object with no partner." },
    { term: "Pair", definition: "Two objects matched together." },
    { term: "Same number", definition: "When every object has a partner and none are left over." },
  ],
  concepts: [
    {
      id: "mpk-u1-match-objects",
      title: "One-to-one matching",
      skill: "Pair two groups of objects and spot leftovers.",
      lesson: {
        sections: [
          {
            heading: "Pair them up",
            body: "Put one object from Group A next to one from Group B. Keep pairing until you cannot anymore. Objects with no partner are **leftovers**.",
          },
          {
            heading: "What leftovers tell us",
            body: "If Group A has leftovers, it has **more**. If Group B has leftovers, it has **more**. If nobody is left over, the groups have the **same number**.",
          },
        ],
        keyFormulas: [
          { name: "Matching", statement: "Pair one-to-one; leftovers show which group has more." },
        ],
        workedExample: {
          problem: "Match: A = 4 dots   B = 3 dots. Who has more?",
          solution: "Pair 3 with 3; Group A has 1 leftover. **Group A has more.**",
        },
      },
      questions: [
        {
          id: "mpk-u1-match-objects-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Match the shapes. How many are left over? A: 4 triangles   B: 2 triangles",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "0"
                    },
                    {
                              "id": "b",
                              "text": "1"
                    },
                    {
                              "id": "c",
                              "text": "2"
                    },
                    {
                              "id": "d",
                              "text": "4"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Pair 2 Bs with 2 As; 2 As are left over."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pair 2 Bs with 2 As; 2 As are left over.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**2**",
          "commonErrors": [
                    "Counts all objects instead of leftovers."
          ]
},
        },
        {
          id: "mpk-u1-match-objects-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A: 3 apples   B: 5 apples. Which has more?",
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
                              "statement": "B has 5, A has 3; B has more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "B has 5, A has 3; B has more.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Group B**",
          "commonErrors": [
                    "Matches by color instead of counting."
          ]
},
        },
        {
          id: "mpk-u1-match-objects-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 2 dots. Group B has 4 dots. Which group has more?",
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
                              "statement": "Count each group: 4 > 2, so Group B has more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count each group: 4 > 2, so Group B has more.",
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
          id: "mpk-u1-match-objects-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 2 dots. Group B has 4 dots. How many more does the larger group have?",
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
                              "statement": "4 - 2 = 2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4 - 2 = 2.",
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
          id: "mpk-u1-match-objects-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "A has 5 buttons, B has 3 buttons. How many more does A have?",
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
                    "Adds 5 and 3."
          ]
},
        },
        {
          id: "mpk-u1-match-objects-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Match\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The object paired with another."
                    },
                    {
                              "id": "b",
                              "text": "Pair objects so each has one partner."
                    },
                    {
                              "id": "c",
                              "text": "An object with no partner."
                    },
                    {
                              "id": "d",
                              "text": "Two objects matched together."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Match\" means Pair objects so each has one partner."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Match\" means Pair objects so each has one partner.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Match** = Pair objects so each has one partner.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u1-match-objects-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Partner\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "An object with no partner."
                    },
                    {
                              "id": "b",
                              "text": "Two objects matched together."
                    },
                    {
                              "id": "c",
                              "text": "When every object has a partner and none are left over."
                    },
                    {
                              "id": "d",
                              "text": "The object paired with another."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Partner\" means The object paired with another."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Partner\" means The object paired with another.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Partner** = The object paired with another.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u1-match-objects-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Leftover\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Two objects matched together."
                    },
                    {
                              "id": "b",
                              "text": "An object with no partner."
                    },
                    {
                              "id": "c",
                              "text": "When every object has a partner and none are left over."
                    },
                    {
                              "id": "d",
                              "text": "Pair objects so each has one partner."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Leftover\" means An object with no partner."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Leftover\" means An object with no partner.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Leftover** = An object with no partner.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
