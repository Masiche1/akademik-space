import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "m3-u3-lesson-3-2",
  code: "3-2",
  title: "Division Facts to 10",
  goal: "I CAN recall division facts to 100.",
  standards: ["3.OA.A.2", "3.OA.C.7"],
  vocabulary: [
    { term: "Fact", definition: "Division equation." },
    { term: "Quotient", definition: "Answer." },
    { term: "Dividend", definition: "Number divided." },
    { term: "Divisor", definition: "Number divided by." },
    { term: "Inverse", definition: "Opposite of multiply." },
    { term: "Fluency", definition: "Fast recall." },
    { term: "Zero", definition: "0 divided by anything = 0." },
    { term: "One", definition: "Anything divided by 1 = itself." },
  ],
  concepts: [
    {
      id: "m3-u3-divide-facts",
      title: "Division facts",
      skill: "Recall division facts within 100 quickly.",
      lesson: {
        sections: [
          {
            heading: "Facts to know",
            body: "Know division facts through **100 \\div 10**. Special facts: **0** divided by anything = 0; anything divided by **1** = itself.",
          },
          {
            heading: "Use multiplication",
            body: "To solve $a \\div b$, think: what times $b$ equals $a$? $56 \\div 8 = 7$ because $8 \\times 7 = 56$.",
          },
        ],
        keyFormulas: [
          { name: "Divide facts", statement: "a \\div b = c when b x c = a." },
          { name: "Zero", statement: "0 \\div a = 0." },
          { name: "One", statement: "a \\div 1 = a." },
        ],
        workedExample: {
          problem: "What is $81 \\div 9$?",
          solution: "$9 \\times 9 = 81$, so $81 \\div 9 = 9$.",
        },
      },
      questions: [
        {
          id: "m3-u3-divide-facts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$81 \\div 9$ equals...",
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
                              "text": "10"
                    },
                    {
                              "id": "d",
                              "text": "11"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "9 x 9 = 81."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "9 x 9 = 81.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "9",
          "commonErrors": [
                    "Wrong quotient."
          ]
},
        },
        {
          id: "m3-u3-divide-facts-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "$45 \\div 5$ equals...",
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
                              "text": "10"
                    },
                    {
                              "id": "d",
                              "text": "11"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "5 x 9 = 45."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5 x 9 = 45.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "9",
          "commonErrors": [
                    "Wrong quotient."
          ]
},
        },
        {
          id: "m3-u3-divide-facts-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $96 \\div 8$.",
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
                              "statement": "8 x 12 = 96."
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
          id: "m3-u3-divide-facts-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $100 \\div 10$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 10
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "10 x 10 = 100."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "10",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "10",
          "commonErrors": [
                    "Wrong quotient."
          ]
},
        },
        {
          id: "m3-u3-divide-facts-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve $64 \\div 8$ and $72 \\div 8$. Explain the pattern.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Divide facts",
                              "statement": "64/8=8, 72/8=9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solves both.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Explains pattern.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**8 and 9; quotients differ by 1**",
          "commonErrors": [
                    "Wrong answers.",
                    "No pattern."
          ]
},
        },
        {
          id: "m3-u3-divide-facts-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fact\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Answer."
                    },
                    {
                              "id": "b",
                              "text": "Division equation."
                    },
                    {
                              "id": "c",
                              "text": "Number divided."
                    },
                    {
                              "id": "d",
                              "text": "Number divided by."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fact\" means Division equation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fact\" means Division equation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fact** = Division equation.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u3-divide-facts-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Quotient\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Number divided."
                    },
                    {
                              "id": "b",
                              "text": "Number divided by."
                    },
                    {
                              "id": "c",
                              "text": "Opposite of multiply."
                    },
                    {
                              "id": "d",
                              "text": "Answer."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Quotient\" means Answer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Quotient\" means Answer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Quotient** = Answer.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u3-divide-facts-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Dividend\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Number divided by."
                    },
                    {
                              "id": "b",
                              "text": "Number divided."
                    },
                    {
                              "id": "c",
                              "text": "Opposite of multiply."
                    },
                    {
                              "id": "d",
                              "text": "Fast recall."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Dividend\" means Number divided."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Dividend\" means Number divided.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Dividend** = Number divided.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
