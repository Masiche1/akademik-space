import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "mpk-u7-lesson-7-1",
  code: "7-1",
  title: "Count to 15",
  goal: "I CAN count objects and number names up to 15.",
  standards: ["ELOF-PK.MATH.COUNT.4"],
  vocabulary: [
    { term: "Fifteen", definition: "The number after 14." },
    { term: "Teens", definition: "Numbers 13-19 that have 'teen' in the name." },
    { term: "Count on", definition: "Keep counting from where you left off." },
    { term: "Sequence", definition: "Numbers in order." },
    { term: "Twenty", definition: "The number after 19; two hands of ten." },
  ],
  concepts: [
    {
      id: "mpk-u7-count-to-15",
      title: "Counting to 15",
      skill: "Count groups up to 15 objects.",
      lesson: {
        sections: [
          {
            heading: "Past 10",
            body: "After 10 comes 11, 12, 13, 14, 15. The **teens** (13-19) have special names. Count slowly and touch each object once.",
          },
          {
            heading: "Keep track",
            body: "For bigger groups, move counted objects aside or use a number line to keep your place.",
          },
        ],
        keyFormulas: [
          { name: "Count to 15", statement: "10, 11, 12, 13, 14, 15 — one name per object." },
        ],
        workedExample: {
          problem: "Count 13 objects. How many?",
          solution: "Count slowly to **13**.",
        },
      },
      questions: [
        {
          id: "mpk-u7-count-to-15-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many objects? (12 objects)",
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
          id: "mpk-u7-count-to-15-q2",
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
          id: "mpk-u7-count-to-15-q3",
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
          id: "mpk-u7-count-to-15-q4",
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
          id: "mpk-u7-count-to-15-q5",
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
          id: "mpk-u7-count-to-15-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Count the stars: 14 stars. How many?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Stars",
                              "answer": 14
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count to 14."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count to 14.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$14$",
          "commonErrors": [
                    "Stops at 10 or 13."
          ]
},
        },
        {
          id: "mpk-u7-count-to-15-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Start at 10 and count on 5. Where do you stop?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "14"
                    },
                    {
                              "id": "b",
                              "text": "15"
                    },
                    {
                              "id": "c",
                              "text": "16"
                    },
                    {
                              "id": "d",
                              "text": "5"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "10, 11, 12, 13, 14, 15 — five steps lands on 15."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "10, 11, 12, 13, 14, 15 — five steps lands on 15.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**15**",
          "commonErrors": [
                    "Counts the 10 as a step."
          ]
},
        },
        {
          id: "mpk-u7-count-to-15-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fifteen\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Numbers 13-19 that have 'teen' in the name."
                    },
                    {
                              "id": "b",
                              "text": "The number after 14."
                    },
                    {
                              "id": "c",
                              "text": "Keep counting from where you left off."
                    },
                    {
                              "id": "d",
                              "text": "Numbers in order."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fifteen\" means The number after 14."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fifteen\" means The number after 14.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fifteen** = The number after 14.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u7-count-to-15-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Teens\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Keep counting from where you left off."
                    },
                    {
                              "id": "b",
                              "text": "Numbers in order."
                    },
                    {
                              "id": "c",
                              "text": "The number after 19; two hands of ten."
                    },
                    {
                              "id": "d",
                              "text": "Numbers 13-19 that have 'teen' in the name."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Teens\" means Numbers 13-19 that have 'teen' in the name."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Teens\" means Numbers 13-19 that have 'teen' in the name.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Teens** = Numbers 13-19 that have 'teen' in the name.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
