import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "m2-u4-lesson-4-2",
  code: "4-2",
  title: "Missing Numbers",
  goal: "I CAN find missing numbers in equations.",
  standards: ["2.OA.A.1", "2.NBT.B.7"],
  vocabulary: [
    { term: "Missing number", definition: "Unknown in equation." },
    { term: "Equation", definition: "Math sentence." },
    { term: "Solve", definition: "Find the answer." },
    { term: "Inverse", definition: "Opposite operation." },
    { term: "Check", definition: "Verify answer." },
    { term: "True", definition: "Correct." },
    { term: "False", definition: "Incorrect." },
    { term: "Balance", definition: "Equal on both sides." },
  ],
  concepts: [
    {
      id: "m2-u4-missing-numbers",
      title: "Missing numbers",
      skill: "Find missing numbers in addition and subtraction equations.",
      lesson: {
        sections: [
          {
            heading: "Missing addend",
            body: "For 45 + ? = 72, subtract: 72 - 45 = 27. The missing number is 27.",
          },
          {
            heading: "Missing subtrahend/minuend",
            body: "For 72 - ? = 45, subtract: 72 - 45 = 27. For ? - 45 = 27, add: 45 + 27 = 72.",
          },
        ],
        keyFormulas: [
          { name: "Missing addend", statement: "45 + ? = 72 -> 72 - 45 = 27." },
          { name: "Missing subtrahend", statement: "72 - ? = 45 -> 72 - 45 = 27." },
          { name: "Missing minuend", statement: "? - 45 = 27 -> 45 + 27 = 72" },
        ],
        workedExample: {
          problem: "Find the missing number: 156 + ? = 289.",
          solution: "289 - 156 = 133. Missing number is 133.",
        },
      },
      questions: [
        {
          id: "m2-u4-missing-numbers-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "45 + ? = 72. What is ?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "27"
                    },
                    {
                              "id": "b",
                              "text": "117"
                    },
                    {
                              "id": "c",
                              "text": "17"
                    },
                    {
                              "id": "d",
                              "text": "37"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "72 - 45 = 27."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "72 - 45 = 27.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "27",
          "commonErrors": [
                    "Adds instead of subtracts."
          ]
},
        },
        {
          id: "m2-u4-missing-numbers-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "72 - ? = 45. What is ?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "117"
                    },
                    {
                              "id": "b",
                              "text": "27"
                    },
                    {
                              "id": "c",
                              "text": "37"
                    },
                    {
                              "id": "d",
                              "text": "17"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "72 - 45 = 27."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "72 - 45 = 27.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "27",
          "commonErrors": [
                    "Adds instead."
          ]
},
        },
        {
          id: "m2-u4-missing-numbers-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the missing number: 234 + ? = 567.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "missing",
                              "name": "Find unknown",
                              "statement": "Subtract: 567 - 234."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "567 - 234 = 333.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Missing number is 333.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "333",
          "commonErrors": "Wrong missing number."
},
        },
        {
          id: "m2-u4-missing-numbers-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "? - 156 = 234. What is ?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 390
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "156 + 234 = 390."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "390",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "390",
          "commonErrors": [
                    "Wrong missing number."
          ]
},
        },
        {
          id: "m2-u4-missing-numbers-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find missing numbers: 345 + ? = 567 and ? - 234 = 156.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "missing",
                              "name": "Two equations",
                              "statement": "Solve both."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "567 - 345 = 222.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "156 + 234 = 390.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "222 and 390",
          "commonErrors": "Wrong missing numbers."
},
        },
        {
          id: "m2-u4-missing-numbers-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Missing number\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Math sentence."
                    },
                    {
                              "id": "b",
                              "text": "Unknown in equation."
                    },
                    {
                              "id": "c",
                              "text": "Find the answer."
                    },
                    {
                              "id": "d",
                              "text": "Opposite operation."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Missing number\" means Unknown in equation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Missing number\" means Unknown in equation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Missing number** = Unknown in equation.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u4-missing-numbers-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Equation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Find the answer."
                    },
                    {
                              "id": "b",
                              "text": "Opposite operation."
                    },
                    {
                              "id": "c",
                              "text": "Verify answer."
                    },
                    {
                              "id": "d",
                              "text": "Math sentence."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Equation\" means Math sentence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Equation\" means Math sentence.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Equation** = Math sentence.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u4-missing-numbers-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Solve\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Opposite operation."
                    },
                    {
                              "id": "b",
                              "text": "Find the answer."
                    },
                    {
                              "id": "c",
                              "text": "Verify answer."
                    },
                    {
                              "id": "d",
                              "text": "Correct."
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
