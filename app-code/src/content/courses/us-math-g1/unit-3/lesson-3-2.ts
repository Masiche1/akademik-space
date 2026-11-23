import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "m1-u3-lesson-3-2",
  code: "3-2",
  title: "Subtraction Fact Families",
  goal: "I CAN use fact families to solve subtraction problems.",
  standards: ["1.OA.B.3", "1.OA.C.6", "1.OA.A.1"],
  vocabulary: [
    { term: "Fact family", definition: "Related add/sub facts." },
    { term: "Inverse", definition: "Opposite operation." },
    { term: "Missing subtrahend", definition: "The number taken away (unknown)." },
    { term: "Missing minuend", definition: "The bigger number (unknown)." },
    { term: "Equation", definition: "Math sentence." },
    { term: "Related", definition: "Connected facts." },
    { term: "True", definition: "Correct equation." },
    { term: "Check", definition: "Verify answer." },
  ],
  concepts: [
    {
      id: "m1-u3-sub-fact-families",
      title: "Subtraction fact families",
      skill: "Use related facts to solve subtraction with missing numbers.",
      lesson: {
        sections: [
          {
            heading: "Subtraction fact families",
            body: "Fact families work for subtraction too. If $8 + 5 = 13$, then $13 - 5 = 8$ and $13 - 8 = 5$.",
          },
          {
            heading: "Find missing numbers",
            body: "If $13 - ? = 8$, think: $8 + ? = 13$, so missing = 5. Fact families help find **missing subtrahends** and **missing minuends**.",
          },
        ],
        keyFormulas: [
          { name: "Sub fact family", statement: "8 + 5 = 13, so 13 - 5 = 8 and 13 - 8 = 5." },
        ],
        workedExample: {
          problem: "If $15 - ? = 9$, what is the missing subtrahend?",
          solution: "Think $9 + ? = 15$, so **missing = 6**.",
        },
      },
      questions: [
        {
          id: "m1-u3-sub-fact-families-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "If $14 - ? = 8$, what is missing?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Missing",
                              "answer": 6
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "$8 + 6 = 14$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$8 + 6 = 14$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(6)**",
          "commonErrors": [
                    "Adds wrong."
          ]
},
        },
        {
          id: "m1-u3-sub-fact-families-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "If $16 - ? = 7$, what is missing?",
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
                              "statement": "$7 + 9 = 16$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$7 + 9 = 16$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(9)**",
          "commonErrors": [
                    "Adds wrong."
          ]
},
        },
        {
          id: "m1-u3-sub-fact-families-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "If $10 + 4 = 14$, then $14 - 4 = ?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "10"
                    },
                    {
                              "id": "b",
                              "text": "4"
                    },
                    {
                              "id": "c",
                              "text": "14"
                    },
                    {
                              "id": "d",
                              "text": "Cannot tell"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Fact family: 14 - 4 = 10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fact family: 14 - 4 = 10.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**10**",
          "commonErrors": [
                    "Wrong fact."
          ]
},
        },
        {
          id: "m1-u3-sub-fact-families-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write the subtraction fact family for 7, 6, 13.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Fact family",
                              "statement": "13-7=6, 13-6=7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes first fact.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Writes second fact.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**13-7=6, 13-6=7**",
          "commonErrors": [
                    "Wrong facts.",
                    "Missing facts."
          ]
},
        },
        {
          id: "m1-u3-sub-fact-families-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fact family\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Opposite operation."
                    },
                    {
                              "id": "b",
                              "text": "Related add/sub facts."
                    },
                    {
                              "id": "c",
                              "text": "The number taken away (unknown)."
                    },
                    {
                              "id": "d",
                              "text": "The bigger number (unknown)."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fact family\" means Related add/sub facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fact family\" means Related add/sub facts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fact family** = Related add/sub facts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u3-sub-fact-families-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Inverse\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The number taken away (unknown)."
                    },
                    {
                              "id": "b",
                              "text": "The bigger number (unknown)."
                    },
                    {
                              "id": "c",
                              "text": "Math sentence."
                    },
                    {
                              "id": "d",
                              "text": "Opposite operation."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Inverse\" means Opposite operation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Inverse\" means Opposite operation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Inverse** = Opposite operation.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u3-sub-fact-families-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Missing subtrahend\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The bigger number (unknown)."
                    },
                    {
                              "id": "b",
                              "text": "The number taken away (unknown)."
                    },
                    {
                              "id": "c",
                              "text": "Math sentence."
                    },
                    {
                              "id": "d",
                              "text": "Connected facts."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Missing subtrahend\" means The number taken away (unknown)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Missing subtrahend\" means The number taken away (unknown).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Missing subtrahend** = The number taken away (unknown).",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u3-sub-fact-families-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Missing minuend\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Math sentence."
                    },
                    {
                              "id": "b",
                              "text": "Connected facts."
                    },
                    {
                              "id": "c",
                              "text": "Correct equation."
                    },
                    {
                              "id": "d",
                              "text": "The bigger number (unknown)."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Missing minuend\" means The bigger number (unknown)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Missing minuend\" means The bigger number (unknown).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Missing minuend** = The bigger number (unknown).",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
