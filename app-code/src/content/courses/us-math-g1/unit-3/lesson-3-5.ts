import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "m1-u3-lesson-3-5",
  code: "3-5",
  title: "Subtraction Challenge",
  goal: "I CAN solve harder subtraction problems within 20.",
  standards: ["1.OA.A.1", "1.OA.C.6", "1.OA.B.4"],
  vocabulary: [
    { term: "Subtract", definition: "Take away." },
    { term: "Challenge", definition: "Harder problem." },
    { term: "Count back", definition: "Count down." },
    { term: "Fact family", definition: "Related facts." },
    { term: "Missing", definition: "Unknown number." },
    { term: "Equation", definition: "Math sentence." },
    { term: "Solve", definition: "Find answer." },
    { term: "Check", definition: "Verify." },
  ],
  concepts: [
    {
      id: "m1-u3-subtract-challenge",
      title: "Subtraction challenge",
      skill: "Solve harder subtraction problems including missing numbers.",
      lesson: {
        sections: [
          {
            heading: "Harder subtraction",
            body: "Some subtraction problems are **challenging** — they may have **missing numbers** or require multiple steps. Use **fact families** and **inverse operations** to solve.",
          },
          {
            heading: "Think backwards",
            body: "If $15 - ? = 9$, think $9 + ? = 15$, so missing = 6. Working **backwards** helps solve harder problems.",
          },
        ],
        keyFormulas: [
          { name: "Challenge", statement: "Missing numbers + multiple steps = harder subtraction." },
        ],
        workedExample: {
          problem: "Solve $? - 7 = 8$ and $18 - ? = 9$.",
          solution: "$? - 7 = 8$: $8 + 7 = 15$, missing = 15. $18 - ? = 9$: $9 + ? = 18$, missing = 9.",
        },
      },
      questions: [
        {
          id: "m1-u3-subtract-challenge-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $? - 7 = 8$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Missing",
                              "answer": 15
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "$8 + 7 = 15$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$8 + 7 = 15$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(15)**",
          "commonErrors": [
                    "Subtracts wrong."
          ]
},
        },
        {
          id: "m1-u3-subtract-challenge-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $18 - ? = 9$.",
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
                              "statement": "$9 + 9 = 18$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$9 + 9 = 18$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(9)**",
          "commonErrors": [
                    "Adds wrong."
          ]
},
        },
        {
          id: "m1-u3-subtract-challenge-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $? - 6 = 11$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Missing",
                              "answer": 17
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "$11 + 6 = 17$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$11 + 6 = 17$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(17)**",
          "commonErrors": [
                    "Subtracts wrong."
          ]
},
        },
        {
          id: "m1-u3-subtract-challenge-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve $? - 8 = 7$ and $? - 5 = 12$. Show how you used inverse operations.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Missing minuend",
                              "statement": "$7+8=15; $12+5=17$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solves first.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Solves second + explains inverse.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**15 and 17**",
          "commonErrors": [
                    "Wrong answers.",
                    "No inverse."
          ]
},
        },
        {
          id: "m1-u3-subtract-challenge-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Subtract\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Harder problem."
                    },
                    {
                              "id": "b",
                              "text": "Take away."
                    },
                    {
                              "id": "c",
                              "text": "Count down."
                    },
                    {
                              "id": "d",
                              "text": "Related facts."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Subtract\" means Take away."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Subtract\" means Take away.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Subtract** = Take away.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u3-subtract-challenge-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Challenge\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Count down."
                    },
                    {
                              "id": "b",
                              "text": "Related facts."
                    },
                    {
                              "id": "c",
                              "text": "Unknown number."
                    },
                    {
                              "id": "d",
                              "text": "Harder problem."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Challenge\" means Harder problem."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Challenge\" means Harder problem.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Challenge** = Harder problem.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u3-subtract-challenge-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Count back\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Related facts."
                    },
                    {
                              "id": "b",
                              "text": "Count down."
                    },
                    {
                              "id": "c",
                              "text": "Unknown number."
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
                              "statement": "\"Count back\" means Count down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Count back\" means Count down.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Count back** = Count down.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u3-subtract-challenge-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fact family\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Unknown number."
                    },
                    {
                              "id": "b",
                              "text": "Math sentence."
                    },
                    {
                              "id": "c",
                              "text": "Find answer."
                    },
                    {
                              "id": "d",
                              "text": "Related facts."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fact family\" means Related facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fact family\" means Related facts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fact family** = Related facts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
