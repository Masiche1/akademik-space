import type { Lesson } from "../../../types.ts";

export const lesson45: Lesson = {
  id: "m0-u4-lesson-4-5",
  code: "4-5",
  title: "Missing Subtrahends",
  goal: "I CAN find the missing number in a subtraction equation.",
  standards: ["K.OA.A.1", "K.OA.A.4", "K.OA.A.5"],
  vocabulary: [
    { term: "Missing subtrahend", definition: "The unknown number being taken away." },
    { term: "Subtrahend", definition: "The number subtracted." },
    { term: "Difference", definition: "The answer to subtraction." },
    { term: "Minuend", definition: "The starting number." },
    { term: "Count back", definition: "Count backward to find missing." },
    { term: "Fact family", definition: "Related add/sub facts." },
    { term: "Unknown", definition: "The number we don't know." },
  ],
  concepts: [
    {
      id: "m0-u4-missing-subtrahend",
      title: "Missing subtrahends",
      skill: "Find the missing number in equations like 9 - __ = 4.",
      lesson: {
        sections: [
          {
            heading: "Find the blank",
            body: "In **9 - __ = 4**, one number is missing. Think: 9 take away what equals 4? Count back from 9 to 4: 8, 7, 6, 5, 4 — that's 5 steps, so the missing number is **5**.",
          },
          {
            heading: "Use related facts",
            body: "Or use **addition**: 4 + 5 = 9. The missing subtrahend plus the difference equals the minuend: __ + 4 = 9, so __ = 5.",
          },
        ],
        keyFormulas: [
          { name: "Missing subtrahend", statement: "a - __ = c means __ = a - c." },
          { name: "Related fact", statement: "If a - b = c, then c + b = a." },
        ],
        workedExample: {
          problem: "Solve: 10 - __ = 6.",
          solution: "6 + __ = 10, so __ = **4**. Check: 10 - 4 = 6.",
        },
      },
      questions: [
        {
          id: "m0-u4-missing-subtrahend-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve: 9 - __ = 5. What is the missing number?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Missing",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "9 - 5 = 4; count back from 9 to 5 is 4 steps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "9 - 5 = 4; count back from 9 to 5 is 4 steps.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$4$",
          "commonErrors": [
                    "Answers 9 or 5."
          ]
},
        },
        {
          id: "m0-u4-missing-subtrahend-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve: __ - 3 = 6. What is the missing number?",
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
                              "statement": "6 + 3 = 9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "6 + 3 = 9.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$9$",
          "commonErrors": [
                    "Subtracts 6 - 3 instead of adding."
          ]
},
        },
        {
          id: "m0-u4-missing-subtrahend-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In 8 - __ = 3, the missing number is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "5"
                    },
                    {
                              "id": "b",
                              "text": "3"
                    },
                    {
                              "id": "c",
                              "text": "8"
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
                              "statement": "8 - 3 = 5; check 8 - 5 = 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8 - 3 = 5; check 8 - 5 = 3.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**5**",
          "commonErrors": [
                    "Picks wrong number."
          ]
},
        },
        {
          id: "m0-u4-missing-subtrahend-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve two missing-subtrahend problems and explain how you found each.",
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
                                                  "Missing subtrahend",
                                                  "Use a - c or related addition."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Missing subtrahend",
                                                  "Use a - c or related addition."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Solves 2 problems correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., '9 - 4 = 5 -> missing 4; 7 - 2 = 5 -> missing 2.'**"
          ]
},
        },
        {
          id: "m0-u4-missing-subtrahend-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "To check 10 - __ = 7, you can...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "add 10 + 7"
                    },
                    {
                              "id": "b",
                              "text": "check if 7 + missing = 10"
                    },
                    {
                              "id": "c",
                              "text": "guess"
                    },
                    {
                              "id": "d",
                              "text": "ignore"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Check: missing + 7 should equal 10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Check: missing + 7 should equal 10.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**7 + missing = 10**",
          "commonErrors": [
                    "Uses wrong check."
          ]
},
        },
        {
          id: "m0-u4-missing-subtrahend-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Missing subtrahend\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The number subtracted."
                    },
                    {
                              "id": "b",
                              "text": "The unknown number being taken away."
                    },
                    {
                              "id": "c",
                              "text": "The answer to subtraction."
                    },
                    {
                              "id": "d",
                              "text": "The starting number."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Missing subtrahend\" means The unknown number being taken away."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Missing subtrahend\" means The unknown number being taken away.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Missing subtrahend** = The unknown number being taken away.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u4-missing-subtrahend-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Subtrahend\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The answer to subtraction."
                    },
                    {
                              "id": "b",
                              "text": "The starting number."
                    },
                    {
                              "id": "c",
                              "text": "Count backward to find missing."
                    },
                    {
                              "id": "d",
                              "text": "The number subtracted."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Subtrahend\" means The number subtracted."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Subtrahend\" means The number subtracted.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Subtrahend** = The number subtracted.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u4-missing-subtrahend-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Difference\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The starting number."
                    },
                    {
                              "id": "b",
                              "text": "The answer to subtraction."
                    },
                    {
                              "id": "c",
                              "text": "Count backward to find missing."
                    },
                    {
                              "id": "d",
                              "text": "Related add/sub facts."
                    }
          ],
          "correctChoiceId": "b"
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
      ],
    },
  ],
};
