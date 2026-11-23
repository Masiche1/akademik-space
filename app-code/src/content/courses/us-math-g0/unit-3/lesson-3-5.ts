import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "m0-u3-lesson-3-5",
  code: "3-5",
  title: "Missing Addends",
  goal: "I CAN find the missing number in an addition equation.",
  standards: ["K.OA.A.1", "K.OA.A.4", "K.OA.A.5"],
  vocabulary: [
    { term: "Missing addend", definition: "The unknown number in an addition problem." },
    { term: "Addend", definition: "A number being added." },
    { term: "Sum", definition: "The total." },
    { term: "Equation", definition: "Math sentence with a blank." },
    { term: "Count on", definition: "Count up to find the missing number." },
    { term: "Fact family", definition: "Related add/sub facts." },
    { term: "Unknown", definition: "The number we don't know yet." },
  ],
  concepts: [
    {
      id: "m0-u3-missing-addend",
      title: "Missing addends",
      skill: "Find the missing number in equations like 3 + __ = 7.",
      lesson: {
        sections: [
          {
            heading: "Find the blank",
            body: "In an equation like **3 + __ = 7**, one number is missing. To find it, think: what added to 3 makes 7? Count on from 3 to 7: 4, 5, 6, 7 — that's 4 steps, so the missing number is **4**.",
          },
          {
            heading: "Use related facts",
            body: "You can also use **subtraction**: 7 - 3 = 4. The missing addend is the difference between the sum and the known addend.",
          },
        ],
        keyFormulas: [
          { name: "Missing addend", statement: "a + __ = c means __ = c - a." },
          { name: "Count on", statement: "Count from known addend to sum; steps = missing number." },
        ],
        workedExample: {
          problem: "Solve: 5 + __ = 9.",
          solution: "9 - 5 = 4, so **5 + 4 = 9** — missing addend is 4.",
        },
      },
      questions: [
        {
          id: "m0-u3-missing-addend-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve: 4 + __ = 8. What is the missing number?",
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
                              "statement": "8 - 4 = 4; count on from 4 to 8 is 4 steps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8 - 4 = 4; count on from 4 to 8 is 4 steps.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$4$",
          "commonErrors": [
                    "Answers 8 instead of 4."
          ]
},
        },
        {
          id: "m0-u3-missing-addend-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve: __ + 3 = 10. What is the missing number?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Missing",
                              "answer": 7
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "10 - 3 = 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "10 - 3 = 7.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$7$",
          "commonErrors": [
                    "Adds 3 + 10 instead of subtracting."
          ]
},
        },
        {
          id: "m0-u3-missing-addend-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "2 + __ = 7. What is the missing number?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Missing addend",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count on from 2 to 7: that is 5 steps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count on from 2 to 7: that is 5 steps.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$5$",
          "commonErrors": [
                    "Subtracts the wrong way round."
          ]
},
        },
        {
          id: "m0-u3-missing-addend-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "2 + __ = 7. What is the missing number?",
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
                              "statement": "2 + 5 = 7, so the missing number is 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2 + 5 = 7, so the missing number is 5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**5**",
          "commonErrors": [
                    "Answers ${c} instead of the missing part."
          ]
},
        },
        {
          id: "m0-u3-missing-addend-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "5 + __ = 9. What is the missing number?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Missing addend",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count on from 5 to 9: that is 4 steps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count on from 5 to 9: that is 4 steps.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$4$",
          "commonErrors": [
                    "Subtracts the wrong way round."
          ]
},
        },
        {
          id: "m0-u3-missing-addend-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "5 + __ = 9. What is the missing number?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4"
                    },
                    {
                              "id": "b",
                              "text": "5"
                    },
                    {
                              "id": "c",
                              "text": "2"
                    },
                    {
                              "id": "d",
                              "text": "7"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "5 + 4 = 9, so the missing number is 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5 + 4 = 9, so the missing number is 4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**4**",
          "commonErrors": [
                    "Answers ${c} instead of the missing part."
          ]
},
        },
        {
          id: "m0-u3-missing-addend-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In 6 + __ = 10, the missing number is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4"
                    },
                    {
                              "id": "b",
                              "text": "6"
                    },
                    {
                              "id": "c",
                              "text": "10"
                    },
                    {
                              "id": "d",
                              "text": "16"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "10 - 6 = 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "10 - 6 = 4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**4**",
          "commonErrors": [
                    "Picks the sum or wrong number."
          ]
},
        },
        {
          id: "m0-u3-missing-addend-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve two missing-addend problems of your choice and explain how you found each.",
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
                                                  "Missing addend",
                                                  "Use c - a or count on."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Missing addend",
                                                  "Use c - a or count on."
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
                    "**e.g., '3 + 5 = 8 -> missing 5; 7 + 2 = 9 -> missing 2.'**"
          ]
},
        },
        {
          id: "m0-u3-missing-addend-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Missing addend\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A number being added."
                    },
                    {
                              "id": "b",
                              "text": "The unknown number in an addition problem."
                    },
                    {
                              "id": "c",
                              "text": "The total."
                    },
                    {
                              "id": "d",
                              "text": "Math sentence with a blank."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Missing addend\" means The unknown number in an addition problem."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Missing addend\" means The unknown number in an addition problem.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Missing addend** = The unknown number in an addition problem.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u3-missing-addend-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Addend\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The total."
                    },
                    {
                              "id": "b",
                              "text": "Math sentence with a blank."
                    },
                    {
                              "id": "c",
                              "text": "Count up to find the missing number."
                    },
                    {
                              "id": "d",
                              "text": "A number being added."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Addend\" means A number being added."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Addend\" means A number being added.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Addend** = A number being added.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
