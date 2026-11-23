import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "m0-u3-lesson-3-1",
  code: "3-1",
  title: "Add with Objects",
  goal: "I CAN show addition by joining groups of objects.",
  standards: ["K.OA.A.1", "K.OA.A.2"],
  vocabulary: [
    { term: "Add", definition: "Join two groups together to find how many." },
    { term: "Plus", definition: "The symbol + means add." },
    { term: "Sum", definition: "The total when you add." },
    { term: "Join", definition: "Put groups together." },
    { term: "Equation", definition: "A math sentence like 3 + 2 = 5." },
  ],
  concepts: [
    {
      id: "m0-u3-add-objects",
      title: "Adding with objects",
      skill: "Model addition by joining two groups and counting the total.",
      lesson: {
        sections: [
          {
            heading: "Joining groups",
            body: "**Addition** means putting two groups together. 3 blocks + 2 blocks = join them and count all: **5 blocks**.",
          },
          {
            heading: "The plus sign",
            body: "We write addition with **+** (plus) and **=** (equals): 3 + 2 = 5. This is an **equation** — a math sentence that is true.",
          },
        ],
        keyFormulas: [
          { name: "Addition", statement: "a + b = sum. Join groups, count total." },
          { name: "Equation", statement: "3 + 2 = 5 means three plus two equals five." },
        ],
        workedExample: {
          problem: "Show 4 + 3 with objects.",
          solution: "4 objects + 3 objects = join them = **7 objects**. Equation: 4 + 3 = 7.",
        },
      },
      questions: [
        {
          id: "m0-u3-add-objects-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 3 + 4?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 7
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count on from 3: 4, ..., 7. 3 + 4 = 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count on from 3: 4, ..., 7. 3 + 4 = 7.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$7$",
          "commonErrors": [
                    "Counts both numbers again instead of counting on."
          ]
},
        },
        {
          id: "m0-u3-add-objects-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 3 + 4?",
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
                              "statement": "Make a ten or count on: 3 + 4 = 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Make a ten or count on: 3 + 4 = 7.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**7**",
          "commonErrors": [
                    "Adds the digits instead of the quantities."
          ]
},
        },
        {
          id: "m0-u3-add-objects-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "There are 2 red counters and 3 blue counters. How many counters in all?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "In all",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Join the groups: 2 + 3 = 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Join the groups: 2 + 3 = 5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$5$",
          "commonErrors": [
                    "Counts only one color."
          ]
},
        },
        {
          id: "m0-u3-add-objects-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "There are 2 red counters and 3 blue counters. How many counters in all?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "5"
                    },
                    {
                              "id": "b",
                              "text": "6"
                    },
                    {
                              "id": "c",
                              "text": "3"
                    },
                    {
                              "id": "d",
                              "text": "8"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "2 + 3 = 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2 + 3 = 5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**5**",
          "commonErrors": [
                    "Subtracts instead of adds."
          ]
},
        },
        {
          id: "m0-u3-add-objects-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In 2 + 3 = 5, what does the + sign mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "subtract"
                    },
                    {
                              "id": "b",
                              "text": "add/put together"
                    },
                    {
                              "id": "c",
                              "text": "multiply"
                    },
                    {
                              "id": "d",
                              "text": "equals"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "+ means add — put together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "+ means add — put together.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**add**",
          "commonErrors": [
                    "Confuses + with -."
          ]
},
        },
        {
          id: "m0-u3-add-objects-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Show 5 + 2 with objects or fingers. Write the equation.",
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
                                                  "Add",
                                                  "Join groups, write a + b = sum."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Add",
                                                  "Join groups, write a + b = sum."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Models 5 + 2 = 7.",
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
          id: "m0-u3-add-objects-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Add\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The symbol + means add."
                    },
                    {
                              "id": "b",
                              "text": "Join two groups together to find how many."
                    },
                    {
                              "id": "c",
                              "text": "The total when you add."
                    },
                    {
                              "id": "d",
                              "text": "Put groups together."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Add\" means Join two groups together to find how many."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Add\" means Join two groups together to find how many.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Add** = Join two groups together to find how many.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u3-add-objects-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Plus\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The total when you add."
                    },
                    {
                              "id": "b",
                              "text": "Put groups together."
                    },
                    {
                              "id": "c",
                              "text": "A math sentence like 3 + 2 = 5."
                    },
                    {
                              "id": "d",
                              "text": "The symbol + means add."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Plus\" means The symbol + means add."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Plus\" means The symbol + means add.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Plus** = The symbol + means add.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u3-add-objects-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sum\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Put groups together."
                    },
                    {
                              "id": "b",
                              "text": "The total when you add."
                    },
                    {
                              "id": "c",
                              "text": "A math sentence like 3 + 2 = 5."
                    },
                    {
                              "id": "d",
                              "text": "Join two groups together to find how many."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sum\" means The total when you add."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sum\" means The total when you add.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sum** = The total when you add.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
