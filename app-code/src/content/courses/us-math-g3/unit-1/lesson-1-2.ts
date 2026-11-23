import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "m3-u1-lesson-1-2",
  code: "1-2",
  title: "Rounding to the Nearest Ten",
  goal: "I CAN round numbers to the nearest ten.",
  standards: ["3.NBT.A.1"],
  vocabulary: [
    { term: "Round", definition: "Change to nearest value." },
    { term: "Nearest ten", definition: "Closest multiple of 10." },
    { term: "Ones digit", definition: "The last digit." },
    { term: "Five or more", definition: "Round up." },
    { term: "Less than five", definition: "Round down." },
    { term: "Benchmark", definition: "Nearby easy number." },
    { term: "Estimate", definition: "Close guess." },
    { term: "Number line", definition: "Shows numbers in order." },
  ],
  concepts: [
    {
      id: "m3-u1-rounding-tens",
      title: "Rounding to nearest ten",
      skill: "Round numbers to the nearest ten using the ones digit.",
      lesson: {
        sections: [
          {
            heading: "How to round",
            body: "Look at the **ones digit**: if it's **5 or more**, round **up**; if **less than 5**, round **down**. 463 -> 460 (3 < 5, down); 468 -> 470 (8 >= 5, up).",
          },
          {
            heading: "Using a number line",
            body: "A **number line** helps: 463 is between 460 and 470, closer to 460. Rounding finds the **nearest** ten.",
          },
        ],
        keyFormulas: [
          { name: "Nearest ten", statement: "Ones digit >= 5 -> up; < 5 -> down." },
        ],
        workedExample: {
          problem: "Round 463 to the nearest ten.",
          solution: "Ones digit 3 < 5, so round down to **460**.",
        },
      },
      questions: [
        {
          id: "m3-u1-rounding-tens-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Round 463 to the nearest ten.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "460"
                    },
                    {
                              "id": "b",
                              "text": "470"
                    },
                    {
                              "id": "c",
                              "text": "500"
                    },
                    {
                              "id": "d",
                              "text": "400"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Ones digit 3 < 5, round down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ones digit 3 < 5, round down.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "460",
          "commonErrors": [
                    "Rounds up."
          ]
},
        },
        {
          id: "m3-u1-rounding-tens-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Round 468 to the nearest ten.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "460"
                    },
                    {
                              "id": "b",
                              "text": "470"
                    },
                    {
                              "id": "c",
                              "text": "500"
                    },
                    {
                              "id": "d",
                              "text": "480"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Ones digit 8 >= 5, round up."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ones digit 8 >= 5, round up.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "470",
          "commonErrors": [
                    "Rounds down."
          ]
},
        },
        {
          id: "m3-u1-rounding-tens-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Round 275 to the nearest ten.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 280
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "Ones digit 5 -> round up."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "280",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "280",
          "commonErrors": [
                    "Rounds down."
          ]
},
        },
        {
          id: "m3-u1-rounding-tens-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Round 291 to the nearest ten.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 290
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "Ones digit 1 < 5, round down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "290",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "290",
          "commonErrors": [
                    "Rounds up."
          ]
},
        },
        {
          id: "m3-u1-rounding-tens-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Round 345 and 352 to the nearest ten. Explain how they round differently.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Rounding",
                              "statement": "345->350, 352->350."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rounds both correctly.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Explains ones digit rule.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**345->350, 352->350 (both ones >= 5)**",
          "commonErrors": [
                    "Wrong rounding.",
                    "No explanation."
          ]
},
        },
        {
          id: "m3-u1-rounding-tens-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Round\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Closest multiple of 10."
                    },
                    {
                              "id": "b",
                              "text": "Change to nearest value."
                    },
                    {
                              "id": "c",
                              "text": "The last digit."
                    },
                    {
                              "id": "d",
                              "text": "Round up."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Round\" means Change to nearest value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Round\" means Change to nearest value.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Round** = Change to nearest value.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u1-rounding-tens-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Nearest ten\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The last digit."
                    },
                    {
                              "id": "b",
                              "text": "Round up."
                    },
                    {
                              "id": "c",
                              "text": "Round down."
                    },
                    {
                              "id": "d",
                              "text": "Closest multiple of 10."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Nearest ten\" means Closest multiple of 10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Nearest ten\" means Closest multiple of 10.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Nearest ten** = Closest multiple of 10.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u1-rounding-tens-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ones digit\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Round up."
                    },
                    {
                              "id": "b",
                              "text": "The last digit."
                    },
                    {
                              "id": "c",
                              "text": "Round down."
                    },
                    {
                              "id": "d",
                              "text": "Nearby easy number."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ones digit\" means The last digit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ones digit\" means The last digit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ones digit** = The last digit.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
