import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "m6-u2-lesson-2-2",
  code: "2-2",
  title: "Integer Operations",
  goal: "I CAN add, subtract, multiply and divide integers.",
  standards: ["6.NS.C.5"],
  vocabulary: [
    { term: "Add", definition: "Combine." },
    { term: "Subtract", definition: "Take away." },
    { term: "Multiply", definition: "Repeated addition." },
    { term: "Divide", definition: "Split." },
    { term: "Negative", definition: "< 0." },
    { term: "Positive", definition: "> 0." },
    { term: "Rule", definition: "Sign rules." },
    { term: "Zero", definition: "Neither." },
  ],
  concepts: [
    {
      id: "m6-u2-integer-operations",
      title: "Integer operations",
      skill: "Compute with positive and negative integers.",
      lesson: {
        sections: [
          {
            heading: "Sign rules",
            body: "**Add**: same sign -> add, keep sign; different -> subtract, keep larger sign. **Multiply/Divide**: same signs -> positive; different -> negative.",
          },
          {
            heading: "Examples",
            body: "$-3 + 5 = 2$; $-4 \\times -2 = 8$; $-6 \\div 2 = -3$.",
          },
        ],
        keyFormulas: [
          { name: "Add", statement: "Same sign add, diff subtract." },
          { name: "Multiply", statement: "Same signs positive, diff negative." },
        ],
        workedExample: {
          problem: "Calculate -7 + 3 and -4 x -5.",
          solution: "-7+3 = **-4**; -4x-5 = **20**.",
        },
      },
      questions: [
        {
          id: "m6-u2-integer-operations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "-7 + 3 = ?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "-4"
                    },
                    {
                              "id": "b",
                              "text": "10"
                    },
                    {
                              "id": "c",
                              "text": "-10"
                    },
                    {
                              "id": "d",
                              "text": "4"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Different signs: subtract, keep larger sign = -4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Different signs: subtract, keep larger sign = -4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "-4",
          "commonErrors": [
                    "Wrong sign."
          ]
},
        },
        {
          id: "m6-u2-integer-operations-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "-4 x -5 = ?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "-20"
                    },
                    {
                              "id": "b",
                              "text": "20"
                    },
                    {
                              "id": "c",
                              "text": "-9"
                    },
                    {
                              "id": "d",
                              "text": "9"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Same signs = positive 20."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Same signs = positive 20.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "20",
          "commonErrors": [
                    "Wrong sign."
          ]
},
        },
        {
          id: "m6-u2-integer-operations-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Calculate: -8 + 5, -3 - (-2), -6 x 4, -12 / -3.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Integer ops",
                              "statement": "-3, -1, -24, 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Computes all four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**-8+5=-3; -3-(-2)=-1; -6x4=-24; -12/-3=4.**",
          "commonErrors": [
                    "Wrong answers.",
                    "Missing operations."
          ]
},
        },
        {
          id: "m6-u2-integer-operations-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When multiplying integers with different signs, the answer is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "positive"
                    },
                    {
                              "id": "b",
                              "text": "negative"
                    },
                    {
                              "id": "c",
                              "text": "zero"
                    },
                    {
                              "id": "d",
                              "text": "same"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Different signs = negative."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Different signs = negative.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "negative",
          "commonErrors": [
                    "Wrong sign rule."
          ]
},
        },
        {
          id: "m6-u2-integer-operations-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Calculate -15 + (-7) and explain the sign rule you used.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Integer ops",
                              "statement": "-22."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Calculates correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains rule.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**-15 + (-7) = -22; same signs -> add magnitudes, keep negative sign.**",
          "commonErrors": [
                    "Wrong answer.",
                    "No explanation."
          ]
},
        },
        {
          id: "m6-u2-integer-operations-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Add\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Take away."
                    },
                    {
                              "id": "b",
                              "text": "Combine."
                    },
                    {
                              "id": "c",
                              "text": "Repeated addition."
                    },
                    {
                              "id": "d",
                              "text": "Split."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Add\" means Combine."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Add\" means Combine.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Add** = Combine.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u2-integer-operations-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Subtract\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Repeated addition."
                    },
                    {
                              "id": "b",
                              "text": "Split."
                    },
                    {
                              "id": "c",
                              "text": "< 0."
                    },
                    {
                              "id": "d",
                              "text": "Take away."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Subtract\" means Take away."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Subtract\" means Take away.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Subtract** = Take away.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u2-integer-operations-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Multiply\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Split."
                    },
                    {
                              "id": "b",
                              "text": "Repeated addition."
                    },
                    {
                              "id": "c",
                              "text": "< 0."
                    },
                    {
                              "id": "d",
                              "text": "> 0."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Multiply\" means Repeated addition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Multiply\" means Repeated addition.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Multiply** = Repeated addition.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
