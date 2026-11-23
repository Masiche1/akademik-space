import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "m1-u2-lesson-2-2",
  code: "2-2",
  title: "Making Ten",
  goal: "I CAN use make-ten strategy to add.",
  standards: ["1.OA.C.6", "1.OA.A.1"],
  vocabulary: [
    { term: "Make ten", definition: "Break a number to make 10 + something." },
    { term: "Ten", definition: "The number 10." },
    { term: "Decompose", definition: "Break into parts." },
    { term: "Strategy", definition: "A way to solve." },
    { term: "Friend", definition: "A number that makes 10 (like 8 and 2)." },
    { term: "Split", definition: "Break apart." },
    { term: "Combine", definition: "Put together." },
    { term: "Efficient", definition: "Fast and easy way." },
  ],
  concepts: [
    {
      id: "m1-u2-make-ten",
      title: "Making ten",
      skill: "Use make-ten strategy: break a number to make 10, then add the rest.",
      lesson: {
        sections: [
          {
            heading: "Make ten strategy",
            body: "To add numbers like $8 + 5$, **make ten** first: break 5 into 2 and 3, so $8 + 2 = 10$, then $10 + 3 = 13$.",
          },
          {
            heading: "Ten is special",
            body: "**10** is easy to work with. Making ten first makes the rest of the addition simple.",
          },
        ],
        keyFormulas: [
          { name: "Make ten", statement: "8 + 5 = 8 + 2 + 3 = 10 + 3 = 13" },
        ],
        workedExample: {
          problem: "Solve $9 + 4$ using make ten.",
          solution: "Break 4 into 1 and 3: $9 + 1 = 10$, then $10 + 3 = 13$. **Answer: 13**.",
        },
      },
      questions: [
        {
          id: "m1-u2-make-ten-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $8 + 5$ using make ten.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 13
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "8 + 2 = 10, +3 = 13."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8 + 2 = 10, +3 = 13.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(13)**",
          "commonErrors": [
                    "Does not make ten."
          ]
},
        },
        {
          id: "m1-u2-make-ten-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $7 + 6$ using make ten.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 13
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "7 + 3 = 10, +3 = 13."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "7 + 3 = 10, +3 = 13.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(13)**",
          "commonErrors": [
                    "Wrong split."
          ]
},
        },
        {
          id: "m1-u2-make-ten-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $9 + 6$ using make ten.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 15
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "9 + 1 = 10, +5 = 15."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "9 + 1 = 10, +5 = 15.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(15)**",
          "commonErrors": [
                    "Wrong split."
          ]
},
        },
        {
          id: "m1-u2-make-ten-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In make-ten, you break a number to make...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "20"
                    },
                    {
                              "id": "b",
                              "text": "10"
                    },
                    {
                              "id": "c",
                              "text": "5"
                    },
                    {
                              "id": "d",
                              "text": "100"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Make ten first."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Make ten first.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**10**",
          "commonErrors": [
                    "Picks wrong target."
          ]
},
        },
        {
          id: "m1-u2-make-ten-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve $8 + 7$ using make ten. Show the steps.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Make ten",
                              "statement": "Break 7 into 2+5: 8+2=10, +5=15."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Breaks correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gets 15.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**15**",
          "commonErrors": [
                    "Wrong method.",
                    "Wrong answer."
          ]
},
        },
        {
          id: "m1-u2-make-ten-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Make ten\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The number 10."
                    },
                    {
                              "id": "b",
                              "text": "Break a number to make 10 + something."
                    },
                    {
                              "id": "c",
                              "text": "Break into parts."
                    },
                    {
                              "id": "d",
                              "text": "A way to solve."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Make ten\" means Break a number to make 10 + something."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Make ten\" means Break a number to make 10 + something.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Make ten** = Break a number to make 10 + something.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u2-make-ten-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ten\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Break into parts."
                    },
                    {
                              "id": "b",
                              "text": "A way to solve."
                    },
                    {
                              "id": "c",
                              "text": "A number that makes 10 (like 8 and 2)."
                    },
                    {
                              "id": "d",
                              "text": "The number 10."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ten\" means The number 10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ten\" means The number 10.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ten** = The number 10.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u2-make-ten-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Decompose\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A way to solve."
                    },
                    {
                              "id": "b",
                              "text": "Break into parts."
                    },
                    {
                              "id": "c",
                              "text": "A number that makes 10 (like 8 and 2)."
                    },
                    {
                              "id": "d",
                              "text": "Break apart."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Decompose\" means Break into parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Decompose\" means Break into parts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Decompose** = Break into parts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u2-make-ten-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Strategy\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A number that makes 10 (like 8 and 2)."
                    },
                    {
                              "id": "b",
                              "text": "Break apart."
                    },
                    {
                              "id": "c",
                              "text": "Put together."
                    },
                    {
                              "id": "d",
                              "text": "A way to solve."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Strategy\" means A way to solve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Strategy\" means A way to solve.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Strategy** = A way to solve.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
