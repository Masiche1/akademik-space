import type { Lesson } from "../../../types.ts";

export const lesson85: Lesson = {
  id: "mpk-u8-lesson-8-5",
  code: "8-5",
  title: "Math in the Real World",
  goal: "I CAN use math to solve everyday problems.",
  standards: ["ELOF-PK.MATH.APPLY.1"],
  vocabulary: [
    { term: "Real world", definition: "Everyday situations outside school." },
    { term: "Problem", definition: "Something to solve." },
    { term: "Solve", definition: "Find the answer." },
    { term: "Apply", definition: "Use math in real situations." },
    { term: "Everyday", definition: "Happening every day." },
  ],
  concepts: [
    {
      id: "mpk-u8-review-real-world",
      title: "Math everywhere",
      skill: "Apply counting, comparing, adding and patterns to real situations.",
      lesson: {
        sections: [
          {
            heading: "Math is everywhere",
            body: "Counting toys, sharing snacks, comparing heights, spotting patterns in tiles — math is in **everyday life**. Pre-K math builds the foundation for all of it.",
          },
          {
            heading: "Solve real problems",
            body: "Ask: 'How many?' (count), 'Which has more?' (compare), 'How many in all?' (add), 'How many left?' (subtract). Then act it out or count.",
          },
        ],
        keyFormulas: [
          { name: "Apply", statement: "Identify the question type: count, compare, add, subtract, pattern." },
        ],
        workedExample: {
          problem: "You have 4 grapes. You eat 1. How many grapes are left?",
          solution: "4 - 1 = **3 grapes left**.",
        },
      },
      questions: [
        {
          id: "mpk-u8-review-real-world-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "There are 5 birds on a fence. 2 fly away. How many birds are left?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "7"
                    },
                    {
                              "id": "b",
                              "text": "3"
                    },
                    {
                              "id": "c",
                              "text": "2"
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
                              "statement": "Take away: 5 - 2 = 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Take away: 5 - 2 = 3.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**3**",
          "commonErrors": [
                    "Adds instead of subtracts."
          ]
},
        },
        {
          id: "mpk-u8-review-real-world-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "You want to know if you have more crayons than your friend. What should you do?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Guess"
                    },
                    {
                              "id": "b",
                              "text": "Count or match both sets"
                    },
                    {
                              "id": "c",
                              "text": "Ask your friend"
                    },
                    {
                              "id": "d",
                              "text": "Look at colors"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count or match to compare fairly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count or match to compare fairly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Count or match**",
          "commonErrors": [
                    "Guesses instead of counting."
          ]
},
        },
        {
          id: "mpk-u8-review-real-world-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "3 red balls + 2 blue balls = ? balls in all",
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
                              "statement": "Join: 3 + 2 = 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Join: 3 + 2 = 5.",
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
          id: "mpk-u8-review-real-world-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Tiles on the floor go: square, triangle, square, triangle... What comes next?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "square"
                    },
                    {
                              "id": "b",
                              "text": "triangle"
                    },
                    {
                              "id": "c",
                              "text": "circle"
                    },
                    {
                              "id": "d",
                              "text": "rectangle"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "AB pattern: after triangle comes square."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "AB pattern: after triangle comes square.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Square**",
          "commonErrors": [
                    "Repeats triangle."
          ]
},
        },
        {
          id: "mpk-u8-review-real-world-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe a real situation where you would use counting, comparing, adding or subtracting. Solve it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Identify question type",
                              "statement": "Count/compare/add/subtract based on the situation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Describes a real situation.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Solves it correctly with reasoning.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**e.g., 'I have 3 cookies and get 2 more: 3 + 2 = 5.'**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Situation is not real.",
                    "Wrong operation or answer."
          ]
},
        },
        {
          id: "mpk-u8-review-real-world-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Real world\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Something to solve."
                    },
                    {
                              "id": "b",
                              "text": "Everyday situations outside school."
                    },
                    {
                              "id": "c",
                              "text": "Find the answer."
                    },
                    {
                              "id": "d",
                              "text": "Use math in real situations."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Real world\" means Everyday situations outside school."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Real world\" means Everyday situations outside school.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Real world** = Everyday situations outside school.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u8-review-real-world-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Problem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Find the answer."
                    },
                    {
                              "id": "b",
                              "text": "Use math in real situations."
                    },
                    {
                              "id": "c",
                              "text": "Happening every day."
                    },
                    {
                              "id": "d",
                              "text": "Something to solve."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Problem\" means Something to solve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Problem\" means Something to solve.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Problem** = Something to solve.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u8-review-real-world-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Solve\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Use math in real situations."
                    },
                    {
                              "id": "b",
                              "text": "Find the answer."
                    },
                    {
                              "id": "c",
                              "text": "Happening every day."
                    },
                    {
                              "id": "d",
                              "text": "Everyday situations outside school."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Solve\" means Find the answer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Solve\" means Find the answer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Solve** = Find the answer.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
