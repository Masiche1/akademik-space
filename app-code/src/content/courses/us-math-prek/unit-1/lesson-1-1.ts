import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "mpk-u1-lesson-1-1",
  code: "1-1",
  title: "Count Objects to 5",
  goal: "I CAN count a small group of objects and say how many there are.",
  standards: ["ELOF-PK.MATH.COUNT.1"],
  vocabulary: [
    { term: "Count", definition: "Say one number name for each object." },
    { term: "How many", definition: "The number that tells the total." },
    { term: "One-to-one", definition: "Touch or point to each object once." },
    { term: "Total", definition: "The last number you say when counting." },
    { term: "Set", definition: "A group of objects put together." },
  ],
  concepts: [
    {
      id: "mpk-u1-count-objects-5",
      title: "Counting a small group",
      skill: "Count objects to 5 using one-to-one matching.",
      lesson: {
        sections: [
          {
            heading: "Touch and count",
            body: "Point to each object once and say one number name: 1, 2, 3, 4, 5. The last number you say tells **how many** there are.",
          },
          {
            heading: "Keep track",
            body: "Move each object to a 'counted' pile or touch and lift so you do not count it twice. If you lose your place, start the group again slowly.",
          },
        ],
        keyFormulas: [
          { name: "Counting rule", statement: "One number name for each object; the last number is the total." },
        ],
        workedExample: {
          problem: "Count the apples: apple apple apple. How many apples?",
          solution: "Touch each apple and count: 1, 2, 3. There are **3 apples**.",
        },
      },
      questions: [
        {
          id: "mpk-u1-count-objects-5-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many dots? (4 dots)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "How many",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count each dot once: 1, 2, 3, 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count each dot once: 1, 2, 3, 4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$4$",
          "commonErrors": [
                    "Counts the same dot twice."
          ]
},
        },
        {
          id: "mpk-u1-count-objects-5-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many stars? (5 stars)",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4"
                    },
                    {
                              "id": "b",
                              "text": "5"
                    },
                    {
                              "id": "c",
                              "text": "6"
                    },
                    {
                              "id": "d",
                              "text": "3"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count: 1, 2, 3, 4, 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count: 1, 2, 3, 4, 5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**5**",
          "commonErrors": [
                    "Stops counting before the last star."
          ]
},
        },
        {
          id: "mpk-u1-count-objects-5-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 3 dots. Group B has 5 dots. Which group has more?",
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
                              "statement": "Count each group: 5 > 3, so Group B has more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count each group: 5 > 3, so Group B has more.",
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
          id: "mpk-u1-count-objects-5-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 3 dots. Group B has 5 dots. How many more does the larger group have?",
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
          id: "mpk-u1-count-objects-5-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which group has fewer? A: 3 dots   B: 5 dots",
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
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "A has 3, B has 5; 3 is fewer than 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A has 3, B has 5; 3 is fewer than 5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Group A**",
          "commonErrors": [
                    "Picks the bigger-looking group."
          ]
},
        },
        {
          id: "mpk-u1-count-objects-5-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Count\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The number that tells the total."
                    },
                    {
                              "id": "b",
                              "text": "Say one number name for each object."
                    },
                    {
                              "id": "c",
                              "text": "Touch or point to each object once."
                    },
                    {
                              "id": "d",
                              "text": "The last number you say when counting."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Count\" means Say one number name for each object."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Count\" means Say one number name for each object.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Count** = Say one number name for each object.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u1-count-objects-5-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"How many\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Touch or point to each object once."
                    },
                    {
                              "id": "b",
                              "text": "The last number you say when counting."
                    },
                    {
                              "id": "c",
                              "text": "A group of objects put together."
                    },
                    {
                              "id": "d",
                              "text": "The number that tells the total."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"How many\" means The number that tells the total."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"How many\" means The number that tells the total.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**How many** = The number that tells the total.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u1-count-objects-5-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"One-to-one\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The last number you say when counting."
                    },
                    {
                              "id": "b",
                              "text": "Touch or point to each object once."
                    },
                    {
                              "id": "c",
                              "text": "A group of objects put together."
                    },
                    {
                              "id": "d",
                              "text": "Say one number name for each object."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"One-to-one\" means Touch or point to each object once."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"One-to-one\" means Touch or point to each object once.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**One-to-one** = Touch or point to each object once.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
