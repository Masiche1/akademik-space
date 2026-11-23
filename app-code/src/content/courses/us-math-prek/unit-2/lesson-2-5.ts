import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "mpk-u2-lesson-2-5",
  code: "2-5",
  title: "Numbers 11 to 15",
  goal: "I CAN count and recognize quantities from 11 to 15.",
  standards: ["ELOF-PK.MATH.NUM.3"],
  vocabulary: [
    { term: "Eleven", definition: "10 + 1." },
    { term: "Twelve", definition: "10 + 2." },
    { term: "Thirteen", definition: "10 + 3." },
    { term: "Fourteen", definition: "10 + 4." },
    { term: "Fifteen", definition: "10 + 5." },
  ],
  concepts: [
    {
      id: "mpk-u2-numbers-11-15",
      title: "Numbers 11 to 15",
      skill: "Count groups of 11-15 objects.",
      lesson: {
        sections: [
          {
            heading: "Past ten",
            body: "After 10 comes 11, 12, 13, 14, 15. These are called **teens**. Count slowly and touch each object once.",
          },
          {
            heading: "Ten and more",
            body: "11 = 10 + 1, 15 = 10 + 5. Think 'ten and some more' to make teens easier.",
          },
        ],
        keyFormulas: [
          { name: "Teens", statement: "11=10+1, 12=10+2, 13=10+3, 14=10+4, 15=10+5" },
        ],
        workedExample: {
          problem: "Show 13 with counters.",
          solution: "10 counters + 3 more = **13**.",
        },
      },
      questions: [
        {
          id: "mpk-u2-numbers-11-15-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many dots? (12 dots)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "How many",
                              "answer": 12
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count to 12."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count to 12.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$12$",
          "commonErrors": [
                    "Loses count past 10."
          ]
},
        },
        {
          id: "mpk-u2-numbers-11-15-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What comes after 13?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "12"
                    },
                    {
                              "id": "b",
                              "text": "14"
                    },
                    {
                              "id": "c",
                              "text": "15"
                    },
                    {
                              "id": "d",
                              "text": "11"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Order: 13, 14, 15."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Order: 13, 14, 15.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**14**",
          "commonErrors": [
                    "Skips or repeats numbers."
          ]
},
        },
        {
          id: "mpk-u2-numbers-11-15-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "15 is the same as...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "10 + 4"
                    },
                    {
                              "id": "b",
                              "text": "10 + 5"
                    },
                    {
                              "id": "c",
                              "text": "5 + 5"
                    },
                    {
                              "id": "d",
                              "text": "10 + 10"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "15 = 10 + 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "15 = 10 + 5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**10 + 5**",
          "commonErrors": [
                    "Swaps the digits."
          ]
},
        },
        {
          id: "mpk-u2-numbers-11-15-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 11 dots. Group B has 14 dots. Which group has more?",
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
                              "statement": "Count each group: 14 > 11, so Group B has more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count each group: 14 > 11, so Group B has more.",
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
          id: "mpk-u2-numbers-11-15-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 11 dots. Group B has 14 dots. How many more does the larger group have?",
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
                              "statement": "14 - 11 = 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "14 - 11 = 3.",
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
          id: "mpk-u2-numbers-11-15-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a 'teen' number?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "12"
                    },
                    {
                              "id": "b",
                              "text": "15"
                    },
                    {
                              "id": "c",
                              "text": "20"
                    },
                    {
                              "id": "d",
                              "text": "10"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Teens are 13-19; 15 is a teen."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Teens are 13-19; 15 is a teen.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**15**",
          "commonErrors": [
                    "Thinks 12 or 20 is a teen."
          ]
},
        },
        {
          id: "mpk-u2-numbers-11-15-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Eleven\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "10 + 2."
                    },
                    {
                              "id": "b",
                              "text": "10 + 1."
                    },
                    {
                              "id": "c",
                              "text": "10 + 3."
                    },
                    {
                              "id": "d",
                              "text": "10 + 4."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Eleven\" means 10 + 1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Eleven\" means 10 + 1.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Eleven** = 10 + 1.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u2-numbers-11-15-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Twelve\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "10 + 3."
                    },
                    {
                              "id": "b",
                              "text": "10 + 4."
                    },
                    {
                              "id": "c",
                              "text": "10 + 5."
                    },
                    {
                              "id": "d",
                              "text": "10 + 2."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Twelve\" means 10 + 2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Twelve\" means 10 + 2.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Twelve** = 10 + 2.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u2-numbers-11-15-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Thirteen\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "10 + 4."
                    },
                    {
                              "id": "b",
                              "text": "10 + 3."
                    },
                    {
                              "id": "c",
                              "text": "10 + 5."
                    },
                    {
                              "id": "d",
                              "text": "10 + 1."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Thirteen\" means 10 + 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Thirteen\" means 10 + 3.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Thirteen** = 10 + 3.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
