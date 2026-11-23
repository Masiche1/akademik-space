import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "m1-u5-lesson-5-4",
  code: "5-4",
  title: "Rounding to Ten",
  goal: "I CAN round numbers to the nearest ten.",
  standards: ["1.NBT.C.4", "1.NBT.A.1"],
  vocabulary: [
    { term: "Round", definition: "Make a number easier to work with." },
    { term: "Nearest ten", definition: "The closest multiple of 10." },
    { term: "Benchmark", definition: "A friendly number like 10, 20, 30." },
    { term: "Estimate", definition: "A close guess." },
    { term: "Tens", definition: "Groups of 10." },
    { term: "Ones", definition: "Units." },
    { term: "Up", definition: "To the next ten." },
    { term: "Down", definition: "To the previous ten." },
  ],
  concepts: [
    {
      id: "m1-u5-round-to-ten",
      title: "Rounding to ten",
      skill: "Round numbers to the nearest ten for easier addition and subtraction.",
      lesson: {
        sections: [
          {
            heading: "Why round?",
            body: "Rounding makes numbers **easier to work with**. We round to the **nearest ten** — a **benchmark** like 10, 20, 30 — to estimate or simplify.",
          },
          {
            heading: "How to round",
            body: "Look at the **ones** digit: if it is 5 or more, round **up** to the next ten; if less than 5, round **down**. 47 rounds to 50 (7 >= 5); 42 rounds to 40 (2 < 5).",
          },
        ],
        keyFormulas: [
          { name: "Round", statement: "Ones >= 5 -> up; Ones < 5 -> down." },
        ],
        workedExample: {
          problem: "Round 63 to the nearest ten.",
          solution: "Ones digit is 3 (< 5), so round **down** to **60**.",
        },
      },
      questions: [
        {
          id: "m1-u5-round-to-ten-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Round 47 to the nearest ten.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Rounded",
                              "answer": 50
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Ones=7 >= 5, round up to 50."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ones=7 >= 5, round up to 50.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(50)**",
          "commonErrors": [
                    "Rounds down."
          ]
},
        },
        {
          id: "m1-u5-round-to-ten-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Round 32 to the nearest ten.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Rounded",
                              "answer": 30
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Ones=2 < 5, round down to 30."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ones=2 < 5, round down to 30.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(30)**",
          "commonErrors": [
                    "Rounds up."
          ]
},
        },
        {
          id: "m1-u5-round-to-ten-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Round 58 to the nearest ten.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Rounded",
                              "answer": 60
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Ones=8 >= 5, round up to 60."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ones=8 >= 5, round up to 60.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(60)**",
          "commonErrors": [
                    "Rounds down."
          ]
},
        },
        {
          id: "m1-u5-round-to-ten-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To round, look at the...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "tens digit"
                    },
                    {
                              "id": "b",
                              "text": "ones digit"
                    },
                    {
                              "id": "c",
                              "text": "hundreds digit"
                    },
                    {
                              "id": "d",
                              "text": "decimal"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Look at ones digit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Look at ones digit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**ones digit**",
          "commonErrors": [
                    "Looks at wrong digit."
          ]
},
        },
        {
          id: "m1-u5-round-to-ten-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Round 76 and 24 to the nearest ten. Explain your reasoning for each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Round to ten",
                              "statement": "76->80 (6>=5); 24->20 (4<5)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rounds both.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains reasoning.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**80 and 20**",
          "commonErrors": [
                    "Wrong rounding.",
                    "No reasoning."
          ]
},
        },
        {
          id: "m1-u5-round-to-ten-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Round\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The closest multiple of 10."
                    },
                    {
                              "id": "b",
                              "text": "Make a number easier to work with."
                    },
                    {
                              "id": "c",
                              "text": "A friendly number like 10, 20, 30."
                    },
                    {
                              "id": "d",
                              "text": "A close guess."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Round\" means Make a number easier to work with."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Round\" means Make a number easier to work with.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Round** = Make a number easier to work with.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u5-round-to-ten-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Nearest ten\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A friendly number like 10, 20, 30."
                    },
                    {
                              "id": "b",
                              "text": "A close guess."
                    },
                    {
                              "id": "c",
                              "text": "Groups of 10."
                    },
                    {
                              "id": "d",
                              "text": "The closest multiple of 10."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Nearest ten\" means The closest multiple of 10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Nearest ten\" means The closest multiple of 10.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Nearest ten** = The closest multiple of 10.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u5-round-to-ten-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Benchmark\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A close guess."
                    },
                    {
                              "id": "b",
                              "text": "A friendly number like 10, 20, 30."
                    },
                    {
                              "id": "c",
                              "text": "Groups of 10."
                    },
                    {
                              "id": "d",
                              "text": "Units."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Benchmark\" means A friendly number like 10, 20, 30."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Benchmark\" means A friendly number like 10, 20, 30.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Benchmark** = A friendly number like 10, 20, 30.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u5-round-to-ten-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Estimate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Groups of 10."
                    },
                    {
                              "id": "b",
                              "text": "Units."
                    },
                    {
                              "id": "c",
                              "text": "To the next ten."
                    },
                    {
                              "id": "d",
                              "text": "A close guess."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Estimate\" means A close guess."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Estimate\" means A close guess.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Estimate** = A close guess.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
