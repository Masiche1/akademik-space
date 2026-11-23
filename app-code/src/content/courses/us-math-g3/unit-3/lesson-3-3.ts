import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "m3-u3-lesson-3-3",
  code: "3-3",
  title: "Division Strategies",
  goal: "I CAN use strategies to divide larger numbers.",
  standards: ["3.OA.A.2"],
  vocabulary: [
    { term: "Strategy", definition: "Way to solve." },
    { term: "Break apart", definition: "Split into easier parts." },
    { term: "Repeated subtraction", definition: "Subtract divisor repeatedly." },
    { term: "Array", definition: "Rows and columns." },
    { term: "Think multiplication", definition: "Use inverse fact." },
    { term: "Partial quotient", definition: "Part of the answer." },
    { term: "Estimate", definition: "Close guess." },
    { term: "Check", definition: "Verify with multiplication." },
  ],
  concepts: [
    {
      id: "m3-u3-divide-strategies",
      title: "Division strategies",
      skill: "Use break-apart, repeated subtraction and multiplication facts for division.",
      lesson: {
        sections: [
          {
            heading: "Think multiplication",
            body: "The easiest strategy: what times the divisor equals the dividend? $84 \\div 7 = 12$ because $7 \\times 12 = 84$.",
          },
          {
            heading: "Break apart",
            body: "Break the dividend into easier parts: $96 \\div 8 = (80 \\div 8) + (16 \\div 8) = 10 + 2 = 12$.",
          },
        ],
        keyFormulas: [
          { name: "Think multiply", statement: "a \\div b = c when b x c = a." },
          { name: "Break apart", statement: "Split dividend into parts." },
        ],
        workedExample: {
          problem: "Solve $96 \\div 8$ using break-apart.",
          solution: "$96 \\div 8 = (80 \\div 8) + (16 \\div 8) = 10 + 2 = 12$.",
        },
      },
      questions: [
        {
          id: "m3-u3-divide-strategies-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To solve $84 \\div 7$, think...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "84 - 7"
                    },
                    {
                              "id": "b",
                              "text": "what times 7 equals 84"
                    },
                    {
                              "id": "c",
                              "text": "84 + 7"
                    },
                    {
                              "id": "d",
                              "text": "7 x 84"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Think multiplication inverse."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Think multiplication inverse.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "times 7",
          "commonErrors": [
                    "Wrong strategy."
          ]
},
        },
        {
          id: "m3-u3-divide-strategies-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "$96 \\div 8$ using break-apart = ...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "80/8 + 16/8 = 12"
                    },
                    {
                              "id": "b",
                              "text": "96/8 = 12 only"
                    },
                    {
                              "id": "c",
                              "text": "90/8 + 6/8"
                    },
                    {
                              "id": "d",
                              "text": "8 x 96"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "80/8 + 16/8 = 10 + 2 = 12."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "80/8 + 16/8 = 10 + 2 = 12.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "break apart",
          "commonErrors": [
                    "Wrong method."
          ]
},
        },
        {
          id: "m3-u3-divide-strategies-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $84 \\div 7$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 12
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "7 x 12 = 84."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "12",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "12",
          "commonErrors": [
                    "Wrong quotient."
          ]
},
        },
        {
          id: "m3-u3-divide-strategies-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $91 \\div 7$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 13
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "7 x 13 = 91."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "13",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "13",
          "commonErrors": [
                    "Wrong quotient."
          ]
},
        },
        {
          id: "m3-u3-divide-strategies-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve $88 \\div 8$ using break-apart and check with multiplication.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Divide strategies",
                              "statement": "88/8 = 11."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solves with break-apart.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Checks with multiplication.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**11 (8 x 11 = 88)**",
          "commonErrors": [
                    "Wrong answer.",
                    "No check."
          ]
},
        },
        {
          id: "m3-u3-divide-strategies-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Strategy\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Split into easier parts."
                    },
                    {
                              "id": "b",
                              "text": "Way to solve."
                    },
                    {
                              "id": "c",
                              "text": "Subtract divisor repeatedly."
                    },
                    {
                              "id": "d",
                              "text": "Rows and columns."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Strategy\" means Way to solve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Strategy\" means Way to solve.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Strategy** = Way to solve.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u3-divide-strategies-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Break apart\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Subtract divisor repeatedly."
                    },
                    {
                              "id": "b",
                              "text": "Rows and columns."
                    },
                    {
                              "id": "c",
                              "text": "Use inverse fact."
                    },
                    {
                              "id": "d",
                              "text": "Split into easier parts."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Break apart\" means Split into easier parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Break apart\" means Split into easier parts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Break apart** = Split into easier parts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u3-divide-strategies-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Repeated subtraction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rows and columns."
                    },
                    {
                              "id": "b",
                              "text": "Subtract divisor repeatedly."
                    },
                    {
                              "id": "c",
                              "text": "Use inverse fact."
                    },
                    {
                              "id": "d",
                              "text": "Part of the answer."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Repeated subtraction\" means Subtract divisor repeatedly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Repeated subtraction\" means Subtract divisor repeatedly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Repeated subtraction** = Subtract divisor repeatedly.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
