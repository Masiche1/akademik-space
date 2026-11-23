import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "m3-u1-lesson-1-3",
  code: "1-3",
  title: "Rounding to the Nearest Hundred",
  goal: "I CAN round numbers to the nearest hundred.",
  standards: ["3.NBT.A.1"],
  vocabulary: [
    { term: "Nearest hundred", definition: "Closest multiple of 100." },
    { term: "Tens digit", definition: "The middle digit." },
    { term: "Hundreds digit", definition: "The first digit." },
    { term: "Five or more", definition: "Round up." },
    { term: "Less than five", definition: "Round down." },
    { term: "Estimate", definition: "Close guess." },
    { term: "Benchmark", definition: "Nearby easy number." },
    { term: "Round", definition: "Change to nearest value." },
  ],
  concepts: [
    {
      id: "m3-u1-rounding-hundreds",
      title: "Rounding to nearest hundred",
      skill: "Round numbers to the nearest hundred using the tens digit.",
      lesson: {
        sections: [
          {
            heading: "How to round",
            body: "Look at the **tens digit**: if it's **5 or more**, round **up**; if **less than 5**, round **down**. 528 -> 500 (2 < 5); 572 -> 600 (7 >= 5).",
          },
          {
            heading: "Both at once",
            body: "You can round to **both** tens and hundreds: 463 -> 460 (nearest ten) and 500 (nearest hundred).",
          },
        ],
        keyFormulas: [
          { name: "Nearest hundred", statement: "Tens digit >= 5 -> up; < 5 -> down." },
        ],
        workedExample: {
          problem: "Round 528 to the nearest hundred.",
          solution: "Tens digit 2 < 5, round down to **500**.",
        },
      },
      questions: [
        {
          id: "m3-u1-rounding-hundreds-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Round 528 to the nearest hundred.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "500"
                    },
                    {
                              "id": "b",
                              "text": "600"
                    },
                    {
                              "id": "c",
                              "text": "530"
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
                              "statement": "Tens digit 2 < 5, round down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tens digit 2 < 5, round down.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "500",
          "commonErrors": [
                    "Rounds up."
          ]
},
        },
        {
          id: "m3-u1-rounding-hundreds-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Round 572 to the nearest hundred.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "500"
                    },
                    {
                              "id": "b",
                              "text": "600"
                    },
                    {
                              "id": "c",
                              "text": "570"
                    },
                    {
                              "id": "d",
                              "text": "700"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Tens digit 7 >= 5, round up."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tens digit 7 >= 5, round up.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "600",
          "commonErrors": [
                    "Rounds down."
          ]
},
        },
        {
          id: "m3-u1-rounding-hundreds-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Round 386 to the nearest hundred.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 400
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "Tens digit 8 >= 5, round up."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "400",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "400",
          "commonErrors": [
                    "Rounds down."
          ]
},
        },
        {
          id: "m3-u1-rounding-hundreds-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Round 249 to the nearest hundred.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 200
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "Tens digit 4 < 5, round down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "200",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "200",
          "commonErrors": [
                    "Rounds up."
          ]
},
        },
        {
          id: "m3-u1-rounding-hundreds-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Round 463 to the nearest ten AND nearest hundred. Explain which digits you look at.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Rounding",
                              "statement": "463->460 (tens), 463->500 (hundreds)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rounds both correctly.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Explains different digits used.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**460 (nearest ten), 500 (nearest hundred)**",
          "commonErrors": [
                    "Wrong rounding.",
                    "Same digit used."
          ]
},
        },
        {
          id: "m3-u1-rounding-hundreds-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Nearest hundred\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The middle digit."
                    },
                    {
                              "id": "b",
                              "text": "Closest multiple of 100."
                    },
                    {
                              "id": "c",
                              "text": "The first digit."
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
                              "statement": "\"Nearest hundred\" means Closest multiple of 100."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Nearest hundred\" means Closest multiple of 100.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Nearest hundred** = Closest multiple of 100.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u1-rounding-hundreds-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Tens digit\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The first digit."
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
                              "text": "The middle digit."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Tens digit\" means The middle digit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Tens digit\" means The middle digit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Tens digit** = The middle digit.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u1-rounding-hundreds-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Hundreds digit\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Round up."
                    },
                    {
                              "id": "b",
                              "text": "The first digit."
                    },
                    {
                              "id": "c",
                              "text": "Round down."
                    },
                    {
                              "id": "d",
                              "text": "Close guess."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Hundreds digit\" means The first digit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Hundreds digit\" means The first digit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Hundreds digit** = The first digit.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
