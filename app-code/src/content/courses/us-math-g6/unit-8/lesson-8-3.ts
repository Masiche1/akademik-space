import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "m6-u8-lesson-8-3",
  code: "8-3",
  title: "Final: Number System",
  goal: "I CAN combine integer and fraction skills.",
  standards: ["6.NS.C.5", "6.NS.A.1"],
  vocabulary: [
    { term: "Integer", definition: "Whole + negative." },
    { term: "Absolute", definition: "Distance from 0." },
    { term: "Fraction", definition: "Part/whole." },
    { term: "Decimal", definition: "Base-ten." },
    { term: "Divide", definition: "Split." },
    { term: "Multiply", definition: "Repeated addition." },
    { term: "Order", definition: "Sort." },
    { term: "Compute", definition: "Calculate." },
  ],
  concepts: [
    {
      id: "m6-u8-final-number-system",
      title: "Final: number system",
      skill: "Combine integer operations with fraction/decimal division.",
      lesson: {
        sections: [
          {
            heading: "Combined skills",
            body: "Use **integers** (positive/negative) with **fractions/decimals** for complex calculations.",
          },
          {
            heading: "Put it together",
            body: "Use all number system skills.",
          },
        ],
        keyFormulas: [
          { name: "Number system", statement: "Integers + fractions + decimals = all skills." },
        ],
        workedExample: {
          problem: "Calculate -3 + 7 and 3/4 / 1/2.",
          solution: "-3+7 = **4**; 3/4 / 1/2 = 3/4 x 2/1 = **3/2 = 1 1/2**.",
        },
      },
      questions: [
        {
          id: "m6-u8-final-number-system-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "-5 + 8 = ?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "-3"
                    },
                    {
                              "id": "b",
                              "text": "3"
                    },
                    {
                              "id": "c",
                              "text": "13"
                    },
                    {
                              "id": "d",
                              "text": "-13"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3",
          "commonErrors": [
                    "Wrong answer."
          ]
},
        },
        {
          id: "m6-u8-final-number-system-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "2/3 / 4/5 = ?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "8/15"
                    },
                    {
                              "id": "b",
                              "text": "5/6"
                    },
                    {
                              "id": "c",
                              "text": "3/10"
                    },
                    {
                              "id": "d",
                              "text": "10/3"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "2/3 x 5/4 = 10/12 = 5/6."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2/3 x 5/4 = 10/12 = 5/6.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "5/6",
          "commonErrors": [
                    "Wrong answer."
          ]
},
        },
        {
          id: "m6-u8-final-number-system-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Calculate: -7 + 12; -4 x -3; 5/6 / 2/3; 7.2 / 0.8.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Number system",
                              "statement": "5, 12, 5/4, 9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Computes all four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**-7+12=5; -4x-3=12; 5/6 x 3/2 = 15/12 = 5/4; 7.2/0.8=9.**",
          "commonErrors": [
                    "Wrong answers.",
                    "Missing problems."
          ]
},
        },
        {
          id: "m6-u8-final-number-system-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Integers and fractions are both...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only positive"
                    },
                    {
                              "id": "b",
                              "text": "rational numbers"
                    },
                    {
                              "id": "c",
                              "text": "only negative"
                    },
                    {
                              "id": "d",
                              "text": "decimals"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Both rational."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both rational.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "rational numbers",
          "commonErrors": [
                    "Thinks they're different types."
          ]
},
        },
        {
          id: "m6-u8-final-number-system-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Calculate with both integers and fractions, then explain how they relate.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Number system",
                              "statement": "Both computed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Computes both.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains relation.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., '-3+5=2; 1/2+1/4=3/4; both are rational numbers.'**",
          "commonErrors": [
                    "Cannot compute.",
                    "No relation."
          ]
},
        },
        {
          id: "m6-u8-final-number-system-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Integer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Distance from 0."
                    },
                    {
                              "id": "b",
                              "text": "Whole + negative."
                    },
                    {
                              "id": "c",
                              "text": "Part/whole."
                    },
                    {
                              "id": "d",
                              "text": "Base-ten."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Integer\" means Whole + negative."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Integer\" means Whole + negative.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Integer** = Whole + negative.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u8-final-number-system-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Absolute\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Part/whole."
                    },
                    {
                              "id": "b",
                              "text": "Base-ten."
                    },
                    {
                              "id": "c",
                              "text": "Split."
                    },
                    {
                              "id": "d",
                              "text": "Distance from 0."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Absolute\" means Distance from 0."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Absolute\" means Distance from 0.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Absolute** = Distance from 0.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u8-final-number-system-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fraction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Base-ten."
                    },
                    {
                              "id": "b",
                              "text": "Part/whole."
                    },
                    {
                              "id": "c",
                              "text": "Split."
                    },
                    {
                              "id": "d",
                              "text": "Repeated addition."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fraction\" means Part/whole."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fraction\" means Part/whole.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fraction** = Part/whole.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
