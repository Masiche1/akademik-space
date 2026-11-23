import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "m3-u2-lesson-2-3",
  code: "2-3",
  title: "Multiplication Strategies",
  goal: "I CAN use strategies to multiply larger numbers.",
  standards: ["3.OA.A.1", "3.OA.A.2"],
  vocabulary: [
    { term: "Strategy", definition: "Way to solve." },
    { term: "Break apart", definition: "Split into easier parts." },
    { term: "Distributive", definition: "a x (b+c) = ab + ac." },
    { term: "Array", definition: "Rows and columns." },
    { term: "Skip count", definition: "Count by factor." },
    { term: "Partial product", definition: "Part of the answer." },
    { term: "Decompose", definition: "Break into parts." },
    { term: "Estimate", definition: "Close guess." },
  ],
  concepts: [
    {
      id: "m3-u2-multiply-strategies",
      title: "Multiplication strategies",
      skill: "Use break-apart, distributive and array strategies for multiplication.",
      lesson: {
        sections: [
          {
            heading: "Break it apart",
            body: "Break a factor into easier parts: $7 \\times 8 = 7 \\times 5 + 7 \\times 3 = 35 + 21 = 56$.",
          },
          {
            heading: "Distributive property",
            body: "$a \\times (b + c) = a \\times b + a \\times c$. This helps with larger numbers: $4 \\times 23 = 4 \\times 20 + 4 \\times 3 = 80 + 12 = 92$.",
          },
        ],
        keyFormulas: [
          { name: "Break apart", statement: "a x b = a x (parts) summed." },
          { name: "Distributive", statement: "a x (b+c) = ab + ac." },
        ],
        workedExample: {
          problem: "Solve $6 \\times 14$ using break-apart.",
          solution: "$6 \\times 14 = 6 \\times 10 + 6 \\times 4 = 60 + 24 = 84$.",
        },
      },
      questions: [
        {
          id: "m3-u2-multiply-strategies-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To solve $7 \\times 8$, you can break it as...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "7 x 4 + 7 x 4"
                    },
                    {
                              "id": "b",
                              "text": "7 x 5 + 7 x 3"
                    },
                    {
                              "id": "c",
                              "text": "7 x 10 - 7 x 2"
                    },
                    {
                              "id": "d",
                              "text": "7 + 8"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "7 x 5 + 7 x 3 = 35 + 21 = 56."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "7 x 5 + 7 x 3 = 35 + 21 = 56.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "7 x 5 + 7 x 3",
          "commonErrors": [
                    "Wrong break."
          ]
},
        },
        {
          id: "m3-u2-multiply-strategies-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "$4 \\times 23$ using distributive = ...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4 x 20 + 4 x 3 = 92"
                    },
                    {
                              "id": "b",
                              "text": "4 x 23 = 92 only"
                    },
                    {
                              "id": "c",
                              "text": "20 x 23 = 460"
                    },
                    {
                              "id": "d",
                              "text": "4 + 23 = 27"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "4 x 20 + 4 x 3 = 80 + 12 = 92."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4 x 20 + 4 x 3 = 80 + 12 = 92.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "distributive",
          "commonErrors": [
                    "Wrong method."
          ]
},
        },
        {
          id: "m3-u2-multiply-strategies-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $6 \\times 14$ using break-apart.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 84
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "6 x 10 + 6 x 4 = 60 + 24 = 84."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "84",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "84",
          "commonErrors": [
                    "Wrong product."
          ]
},
        },
        {
          id: "m3-u2-multiply-strategies-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $8 \\times 15$ using break-apart.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 120
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "8 x 10 + 8 x 5 = 80 + 40 = 120."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "120",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "120",
          "commonErrors": [
                    "Wrong product."
          ]
},
        },
        {
          id: "m3-u2-multiply-strategies-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve $9 \\times 12$ two ways: break-apart and array.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Strategies",
                              "statement": "9 x 12 = 108."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solves with break-apart.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Solves with array.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**108 both ways**",
          "commonErrors": [
                    "Wrong answer.",
                    "Only one method."
          ]
},
        },
        {
          id: "m3-u2-multiply-strategies-q6",
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
                              "text": "a x (b+c) = ab + ac."
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
          id: "m3-u2-multiply-strategies-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Break apart\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a x (b+c) = ab + ac."
                    },
                    {
                              "id": "b",
                              "text": "Rows and columns."
                    },
                    {
                              "id": "c",
                              "text": "Count by factor."
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
          id: "m3-u2-multiply-strategies-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Distributive\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rows and columns."
                    },
                    {
                              "id": "b",
                              "text": "a x (b+c) = ab + ac."
                    },
                    {
                              "id": "c",
                              "text": "Count by factor."
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
                              "statement": "\"Distributive\" means a x (b+c) = ab + ac."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Distributive\" means a x (b+c) = ab + ac.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Distributive** = a x (b+c) = ab + ac.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
