import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "m0-u3-lesson-3-3",
  code: "3-3",
  title: "Addition Word Problems",
  goal: "I CAN solve addition word problems within 10.",
  standards: ["K.OA.A.2"],
  vocabulary: [
    { term: "Word problem", definition: "A story problem with numbers." },
    { term: "Join", definition: "Put groups together in a story." },
    { term: "In all", definition: "The total after joining." },
    { term: "Total", definition: "The whole amount." },
    { term: "Equation", definition: "Write the math sentence for the story." },
  ],
  concepts: [
    {
      id: "m0-u3-add-word-problems",
      title: "Addition word problems",
      skill: "Solve addition stories within 10 and write the equation.",
      lesson: {
        sections: [
          {
            heading: "Read the story",
            body: "A **word problem** tells a story with numbers. Look for words like 'and', 'more', 'in all' — they signal **addition** (joining groups).",
          },
          {
            heading: "Solve and write",
            body: "Figure out the two groups, add them, and write the **equation**: '3 apples and 2 apples = 5 apples' becomes 3 + 2 = 5.",
          },
        ],
        keyFormulas: [
          { name: "Word problems", statement: "Find the groups, add them, write a + b = total." },
        ],
        workedExample: {
          problem: "Tom has 4 marbles. He gets 3 more. How many in all?",
          solution: "Join: 4 + 3 = **7 marbles in all**.",
        },
      },
      questions: [
        {
          id: "m0-u3-add-word-problems-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "There are 4 red marbles and 3 blue marbles. How many marbles in all?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "In all",
                              "answer": 7
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Join the groups: 4 + 3 = 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Join the groups: 4 + 3 = 7.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$7$",
          "commonErrors": [
                    "Counts only one color."
          ]
},
        },
        {
          id: "m0-u3-add-word-problems-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "There are 4 red marbles and 3 blue marbles. How many marbles in all?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "7"
                    },
                    {
                              "id": "b",
                              "text": "8"
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
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "4 + 3 = 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4 + 3 = 7.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**7**",
          "commonErrors": [
                    "Subtracts instead of adds."
          ]
},
        },
        {
          id: "m0-u3-add-word-problems-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "There are 2 red crayons and 5 blue crayons. How many crayons in all?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "In all",
                              "answer": 7
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Join the groups: 2 + 5 = 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Join the groups: 2 + 5 = 7.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$7$",
          "commonErrors": [
                    "Counts only one color."
          ]
},
        },
        {
          id: "m0-u3-add-word-problems-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "There are 2 red crayons and 5 blue crayons. How many crayons in all?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "7"
                    },
                    {
                              "id": "b",
                              "text": "8"
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
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "2 + 5 = 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2 + 5 = 7.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**7**",
          "commonErrors": [
                    "Subtracts instead of adds."
          ]
},
        },
        {
          id: "m0-u3-add-word-problems-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'In all' in a word problem usually means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "subtract"
                    },
                    {
                              "id": "b",
                              "text": "add/find total"
                    },
                    {
                              "id": "c",
                              "text": "compare"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "'In all' signals addition — find the total."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'In all' signals addition — find the total.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**add**",
          "commonErrors": [
                    "Thinks 'in all' means subtract."
          ]
},
        },
        {
          id: "m0-u3-add-word-problems-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve: 'There are 5 birds. 2 more birds come. How many birds in all?' Write the equation.",
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
                                                  "Word problem",
                                                  "5 + 2 = 7."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Word problem",
                                                  "5 + 2 = 7."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Solves and writes 5 + 2 = 7.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**5 + 2 = 7**"
          ]
},
        },
        {
          id: "m0-u3-add-word-problems-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which equation matches '3 cats and 4 dogs' in all?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3 - 4 = 7"
                    },
                    {
                              "id": "b",
                              "text": "3 + 4 = 7"
                    },
                    {
                              "id": "c",
                              "text": "4 + 3 = 8"
                    },
                    {
                              "id": "d",
                              "text": "7 + 3 = 4"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Joining groups = addition: 3 + 4 = 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Joining groups = addition: 3 + 4 = 7.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**3 + 4 = 7**",
          "commonErrors": [
                    "Uses subtraction or wrong numbers."
          ]
},
        },
        {
          id: "m0-u3-add-word-problems-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Word problem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Put groups together in a story."
                    },
                    {
                              "id": "b",
                              "text": "A story problem with numbers."
                    },
                    {
                              "id": "c",
                              "text": "The total after joining."
                    },
                    {
                              "id": "d",
                              "text": "The whole amount."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Word problem\" means A story problem with numbers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Word problem\" means A story problem with numbers.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Word problem** = A story problem with numbers.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u3-add-word-problems-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Join\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The total after joining."
                    },
                    {
                              "id": "b",
                              "text": "The whole amount."
                    },
                    {
                              "id": "c",
                              "text": "Write the math sentence for the story."
                    },
                    {
                              "id": "d",
                              "text": "Put groups together in a story."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Join\" means Put groups together in a story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Join\" means Put groups together in a story.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Join** = Put groups together in a story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u3-add-word-problems-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"In all\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The whole amount."
                    },
                    {
                              "id": "b",
                              "text": "The total after joining."
                    },
                    {
                              "id": "c",
                              "text": "Write the math sentence for the story."
                    },
                    {
                              "id": "d",
                              "text": "A story problem with numbers."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"In all\" means The total after joining."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"In all\" means The total after joining.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**In all** = The total after joining.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
