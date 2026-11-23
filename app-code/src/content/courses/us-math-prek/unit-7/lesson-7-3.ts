import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "mpk-u7-lesson-7-3",
  code: "7-3",
  title: "Teen Numbers",
  goal: "I CAN recognize and name teen numbers 13-19.",
  standards: ["ELOF-PK.MATH.TEEN.1"],
  vocabulary: [
    { term: "Thirteen", definition: "10 + 3." },
    { term: "Fourteen", definition: "10 + 4." },
    { term: "Fifteen", definition: "10 + 5." },
    { term: "Sixteen", definition: "10 + 6." },
    { term: "Seventeen", definition: "10 + 7." },
    { term: "Eighteen", definition: "10 + 8." },
    { term: "Nineteen", definition: "10 + 9." },
  ],
  concepts: [
    {
      id: "mpk-u7-teen-numbers",
      title: "Teen numbers",
      skill: "Understand teens as 'ten and some more'.",
      lesson: {
        sections: [
          {
            heading: "Ten and more",
            body: "Teen numbers are **ten plus a few**: 13 = 10 + 3, 17 = 10 + 7, 19 = 10 + 9. This 'ten and...' idea makes teens easier to understand.",
          },
          {
            heading: "Say it",
            body: "Practice saying teens: thirteen, fourteen, fifteen... nineteen. Each ends in '-teen' and means 'ten plus'.",
          },
        ],
        keyFormulas: [
          { name: "Teens", statement: "13=10+3, 14=10+4, ..., 19=10+9" },
        ],
        workedExample: {
          problem: "What is 16 made of?",
          solution: "16 = 10 + 6 — ten and six more.",
        },
      },
      questions: [
        {
          id: "mpk-u7-teen-numbers-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "16 is the same as...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "10 + 5"
                    },
                    {
                              "id": "b",
                              "text": "10 + 6"
                    },
                    {
                              "id": "c",
                              "text": "6 + 6"
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
                              "statement": "16 = 10 + 6."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "16 = 10 + 6.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**10 + 6**",
          "commonErrors": [
                    "Swaps the digits."
          ]
},
        },
        {
          id: "mpk-u7-teen-numbers-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which teen number is 'ten and four'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "13"
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
                              "text": "24"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "10 + 4 = 14."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "10 + 4 = 14.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**14**",
          "commonErrors": [
                    "Counts 10, 11, 12, 13 and stops."
          ]
},
        },
        {
          id: "mpk-u7-teen-numbers-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "19 = 10 + __. What is the missing number?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Missing",
                              "answer": 9
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "19 - 10 = 9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "19 - 10 = 9.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$9$",
          "commonErrors": [
                    "Says 19."
          ]
},
        },
        {
          id: "mpk-u7-teen-numbers-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is NOT a teen number?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "13"
                    },
                    {
                              "id": "b",
                              "text": "17"
                    },
                    {
                              "id": "c",
                              "text": "20"
                    },
                    {
                              "id": "d",
                              "text": "19"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Teens are 13-19; 20 is twenty."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Teens are 13-19; 20 is twenty.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**20**",
          "commonErrors": [
                    "Thinks 20 is a teen."
          ]
},
        },
        {
          id: "mpk-u7-teen-numbers-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Show that 15 can be made two ways: as 10 + 5 and as 7 + 8. Which is easier to see?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Ten and more",
                              "statement": "15 = 10 + 5; also 15 = 7 + 8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Shows both decompositions.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Explains 10+5 shows 'ten and five'.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**15 = 10+5 and 15 = 7+8; 10+5 shows ten-and-five**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Only shows one way.",
                    "Wrong decompositions."
          ]
},
        },
        {
          id: "mpk-u7-teen-numbers-q6",
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
                              "text": "10 + 6."
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
        {
          id: "mpk-u7-teen-numbers-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fourteen\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "10 + 5."
                    },
                    {
                              "id": "b",
                              "text": "10 + 6."
                    },
                    {
                              "id": "c",
                              "text": "10 + 7."
                    },
                    {
                              "id": "d",
                              "text": "10 + 4."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fourteen\" means 10 + 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fourteen\" means 10 + 4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fourteen** = 10 + 4.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u7-teen-numbers-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fifteen\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "10 + 6."
                    },
                    {
                              "id": "b",
                              "text": "10 + 5."
                    },
                    {
                              "id": "c",
                              "text": "10 + 7."
                    },
                    {
                              "id": "d",
                              "text": "10 + 8."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fifteen\" means 10 + 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fifteen\" means 10 + 5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fifteen** = 10 + 5.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
