import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "mpk-u2-lesson-2-4",
  code: "2-4",
  title: "Match Numerals to Quantities",
  goal: "I CAN pick the group that matches a given numeral.",
  standards: ["ELOF-PK.MATH.MATCH.2"],
  vocabulary: [
    { term: "Numeral", definition: "A written number symbol." },
    { term: "Match", definition: "Pair things that belong together." },
    { term: "Quantity", definition: "How many objects there are." },
    { term: "Correspond", definition: "Match one thing to another." },
    { term: "Label", definition: "A tag that names or shows an amount." },
  ],
  concepts: [
    {
      id: "mpk-u2-match-numerals",
      title: "Matching numerals to groups",
      skill: "Given a numeral, find or build the matching group.",
      lesson: {
        sections: [
          {
            heading: "Numeral to objects",
            body: "See the numeral 4 — make a group of 4. Count as you build: 1, 2, 3, 4. Stop when you reach the numeral.",
          },
          {
            heading: "Objects to numeral",
            body: "See 6 buttons — write or point to the numeral 6. The numeral is like a label for the amount.",
          },
        ],
        keyFormulas: [
          { name: "Matching", statement: "Numeral N matches a group of N objects." },
        ],
        workedExample: {
          problem: "Show the numeral 2 with counters.",
          solution: "Place 2 counters: one, two. **2 counters** match the numeral 2.",
        },
      },
      questions: [
        {
          id: "mpk-u2-match-numerals-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which group matches the numeral 6?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "5 dots"
                    },
                    {
                              "id": "b",
                              "text": "6 dots"
                    },
                    {
                              "id": "c",
                              "text": "7 dots"
                    },
                    {
                              "id": "d",
                              "text": "3 dots"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "6 objects for numeral 6."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "6 objects for numeral 6.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**6 dots**",
          "commonErrors": [
                    "Counts the numeral itself as an object."
          ]
},
        },
        {
          id: "mpk-u2-match-numerals-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The numeral 5 matches how many objects?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4"
                    },
                    {
                              "id": "b",
                              "text": "6"
                    },
                    {
                              "id": "c",
                              "text": "5"
                    },
                    {
                              "id": "d",
                              "text": "10"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Numeral 5 = 5 objects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Numeral 5 = 5 objects.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**5**",
          "commonErrors": [
                    "Says 10 because 5 is half of 10."
          ]
},
        },
        {
          id: "mpk-u2-match-numerals-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Build a group for the numeral 8 using dots. How many dots?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Dots",
                              "answer": 8
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count 1 to 8 dots."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count 1 to 8 dots.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$8$",
          "commonErrors": [
                    "Makes 7 or 9 dots."
          ]
},
        },
        {
          id: "mpk-u2-match-numerals-q4",
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
          id: "mpk-u2-match-numerals-q5",
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
          id: "mpk-u2-match-numerals-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A card shows '7'. Which set has 7?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "6 apples"
                    },
                    {
                              "id": "b",
                              "text": "7 apples"
                    },
                    {
                              "id": "c",
                              "text": "8 apples"
                    },
                    {
                              "id": "d",
                              "text": "5 apples"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "7 apples for numeral 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "7 apples for numeral 7.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**7 apples**",
          "commonErrors": [
                    "Counts wrong by one."
          ]
},
        },
        {
          id: "mpk-u2-match-numerals-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Numeral\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Pair things that belong together."
                    },
                    {
                              "id": "b",
                              "text": "A written number symbol."
                    },
                    {
                              "id": "c",
                              "text": "How many objects there are."
                    },
                    {
                              "id": "d",
                              "text": "Match one thing to another."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Numeral\" means A written number symbol."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Numeral\" means A written number symbol.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Numeral** = A written number symbol.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u2-match-numerals-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Match\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How many objects there are."
                    },
                    {
                              "id": "b",
                              "text": "Match one thing to another."
                    },
                    {
                              "id": "c",
                              "text": "A tag that names or shows an amount."
                    },
                    {
                              "id": "d",
                              "text": "Pair things that belong together."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Match\" means Pair things that belong together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Match\" means Pair things that belong together.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Match** = Pair things that belong together.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u2-match-numerals-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Quantity\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Match one thing to another."
                    },
                    {
                              "id": "b",
                              "text": "How many objects there are."
                    },
                    {
                              "id": "c",
                              "text": "A tag that names or shows an amount."
                    },
                    {
                              "id": "d",
                              "text": "A written number symbol."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Quantity\" means How many objects there are."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Quantity\" means How many objects there are.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Quantity** = How many objects there are.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
