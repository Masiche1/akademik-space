import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "m1-u3-lesson-3-1",
  code: "3-1",
  title: "Subtracting within 20",
  goal: "I CAN subtract within 20.",
  standards: ["1.OA.A.1", "1.OA.C.6"],
  vocabulary: [
    { term: "Subtract", definition: "Take away to find difference." },
    { term: "Difference", definition: "The answer to subtraction." },
    { term: "Minus", definition: "The - sign." },
    { term: "Take away", definition: "Remove some." },
    { term: "Count back", definition: "Start at first number, count down." },
    { term: "Equation", definition: "Math sentence." },
    { term: "Minuend", definition: "The bigger number." },
    { term: "Subtrahend", definition: "The number taken away." },
  ],
  concepts: [
    {
      id: "m1-u3-subtract-within-20",
      title: "Subtracting within 20",
      skill: "Subtract within 20 using counting back and other strategies.",
      lesson: {
        sections: [
          {
            heading: "What is subtraction?",
            body: "**Subtraction** takes away to find the **difference**. $15 - 7 = 8$ means 15 take away 7 leaves 8.",
          },
          {
            heading: "Count back strategy",
            body: "To subtract, start at the first number and **count back** the second: for $13 - 4$, start at 13 and count back 4: 12, 11, 10, 9 — answer is 9.",
          },
        ],
        keyFormulas: [
          { name: "Subtraction", statement: "a - b = difference" },
          { name: "Count back", statement: "Start at a, count back b." },
        ],
        workedExample: {
          problem: "Solve $16 - 8$ using count back.",
          solution: "Start at 16, count back 8: 15,14,13,12,11,10,9,8 — **$16 - 8 = 8$**.",
        },
      },
      questions: [
        {
          id: "m1-u3-subtract-within-20-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $15 - 6$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Difference",
                              "answer": 9
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "15 - 6 = 9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "15 - 6 = 9.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(9)**",
          "commonErrors": [
                    "Adds instead."
          ]
},
        },
        {
          id: "m1-u3-subtract-within-20-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $14 - 7$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Difference",
                              "answer": 7
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "14 - 7 = 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "14 - 7 = 7.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(7)**",
          "commonErrors": [
                    "Adds instead."
          ]
},
        },
        {
          id: "m1-u3-subtract-within-20-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $18 - 9$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Difference",
                              "answer": 9
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "18 - 9 = 9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "18 - 9 = 9.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(9)**",
          "commonErrors": [
                    "Adds instead."
          ]
},
        },
        {
          id: "m1-u3-subtract-within-20-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 13 - 5?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Difference",
                              "answer": 8
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count back from 13: 12, ..., 8. 13 - 5 = 8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count back from 13: 12, ..., 8. 13 - 5 = 8.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$8$",
          "commonErrors": [
                    "Adds instead of subtracting."
          ]
},
        },
        {
          id: "m1-u3-subtract-within-20-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 13 - 5?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "8"
                    },
                    {
                              "id": "b",
                              "text": "9"
                    },
                    {
                              "id": "c",
                              "text": "6"
                    },
                    {
                              "id": "d",
                              "text": "11"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Take away 5 from 13: 13 - 5 = 8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Take away 5 from 13: 13 - 5 = 8.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**8**",
          "commonErrors": [
                    "Reverses the subtraction."
          ]
},
        },
        {
          id: "m1-u3-subtract-within-20-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 12 - 4?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Difference",
                              "answer": 8
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count back from 12: 11, ..., 8. 12 - 4 = 8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count back from 12: 11, ..., 8. 12 - 4 = 8.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$8$",
          "commonErrors": [
                    "Adds instead of subtracting."
          ]
},
        },
        {
          id: "m1-u3-subtract-within-20-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 12 - 4?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "8"
                    },
                    {
                              "id": "b",
                              "text": "9"
                    },
                    {
                              "id": "c",
                              "text": "6"
                    },
                    {
                              "id": "d",
                              "text": "11"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Take away 4 from 12: 12 - 4 = 8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Take away 4 from 12: 12 - 4 = 8.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**8**",
          "commonErrors": [
                    "Reverses the subtraction."
          ]
},
        },
        {
          id: "m1-u3-subtract-within-20-q8",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve $17 - 8$ using count back. Show your work.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Count back",
                              "statement": "Start at 17, count back 8 = 9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Counts back correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gets 9.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**9**",
          "commonErrors": [
                    "Wrong method.",
                    "Wrong answer."
          ]
},
        },
        {
          id: "m1-u3-subtract-within-20-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Subtract\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The answer to subtraction."
                    },
                    {
                              "id": "b",
                              "text": "Take away to find difference."
                    },
                    {
                              "id": "c",
                              "text": "The - sign."
                    },
                    {
                              "id": "d",
                              "text": "Remove some."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Subtract\" means Take away to find difference."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Subtract\" means Take away to find difference.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Subtract** = Take away to find difference.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u3-subtract-within-20-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Difference\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The - sign."
                    },
                    {
                              "id": "b",
                              "text": "Remove some."
                    },
                    {
                              "id": "c",
                              "text": "Start at first number, count down."
                    },
                    {
                              "id": "d",
                              "text": "The answer to subtraction."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Difference\" means The answer to subtraction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Difference\" means The answer to subtraction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Difference** = The answer to subtraction.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u3-subtract-within-20-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Minus\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Remove some."
                    },
                    {
                              "id": "b",
                              "text": "The - sign."
                    },
                    {
                              "id": "c",
                              "text": "Start at first number, count down."
                    },
                    {
                              "id": "d",
                              "text": "Math sentence."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Minus\" means The - sign."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Minus\" means The - sign.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Minus** = The - sign.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u3-subtract-within-20-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Take away\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Start at first number, count down."
                    },
                    {
                              "id": "b",
                              "text": "Math sentence."
                    },
                    {
                              "id": "c",
                              "text": "The bigger number."
                    },
                    {
                              "id": "d",
                              "text": "Remove some."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Take away\" means Remove some."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Take away\" means Remove some.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Take away** = Remove some.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
