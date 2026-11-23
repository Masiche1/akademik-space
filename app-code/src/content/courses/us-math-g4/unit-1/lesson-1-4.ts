import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "m4-u1-lesson-1-4",
  code: "1-4",
  title: "Number Forms",
  goal: "I CAN convert between standard, expanded and word forms.",
  standards: ["4.NBT.A.2"],
  vocabulary: [
    { term: "Standard form", definition: "Digits with commas." },
    { term: "Expanded form", definition: "Sum of place values." },
    { term: "Word form", definition: "Number in words." },
    { term: "Convert", definition: "Change between forms." },
    { term: "Commas", definition: "Separate thousands." },
    { term: "Millions", definition: "1,000,000." },
    { term: "Thousands", definition: "1,000." },
    { term: "Ones", definition: "Single digits." },
  ],
  concepts: [
    {
      id: "m4-u1-number-forms",
      title: "Number forms",
      skill: "Convert between standard, expanded and word forms of large numbers.",
      lesson: {
        sections: [
          {
            heading: "Three ways to write",
            body: "**Standard form**: 4,567,890. **Expanded form**: 4,000,000 + 500,000 + 60,000 + 7,000 + 800 + 90. **Word form**: four million five hundred sixty-seven thousand eight hundred ninety.",
          },
          {
            heading: "Converting",
            body: "To convert, identify each place value and write it in the target form.",
          },
        ],
        keyFormulas: [
          { name: "Forms", statement: "Standard <-> expanded <-> word = convert between forms." },
        ],
        workedExample: {
          problem: "Convert 6,543,210 to expanded form.",
          solution: "6,000,000 + 500,000 + 40,000 + 3,000 + 200 + 10.",
        },
      },
      questions: [
        {
          id: "m4-u1-number-forms-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 4,567,890 in expanded form?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4,000,000 + 500,000 + 60,000 + 7,000 + 800 + 90"
                    },
                    {
                              "id": "b",
                              "text": "400,000 + 50,000 + 6,000 + 700 + 80 + 9"
                    },
                    {
                              "id": "c",
                              "text": "4,000 + 500 + 60 + 7 + 8 + 9"
                    },
                    {
                              "id": "d",
                              "text": "4 million + 567 thousand + 890"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Each digit at its place value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Each digit at its place value.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4,000,000 + 500,000 + 60,000 + 7,000 + 800 + 90",
          "commonErrors": [
                    "Wrong places."
          ]
},
        },
        {
          id: "m4-u1-number-forms-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write 'seven million eight hundred ninety thousand twelve' in standard form.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "7,890,012"
                    },
                    {
                              "id": "b",
                              "text": "7,809,012"
                    },
                    {
                              "id": "c",
                              "text": "7,890,120"
                    },
                    {
                              "id": "d",
                              "text": "7,098,012"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "7M + 890K + 12 = 7,890,012."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "7M + 890K + 12 = 7,890,012.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "7,890,012",
          "commonErrors": [
                    "Wrong digits."
          ]
},
        },
        {
          id: "m4-u1-number-forms-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Convert 3,456,789 to word form.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Number forms",
                              "statement": "Three million four hundred fifty-six thousand seven hundred eighty-nine."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes word form correctly.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Three million four hundred fifty-six thousand seven hundred eighty-nine**",
          "commonErrors": [
                    "Wrong word form.",
                    "Missing words."
          ]
},
        },
        {
          id: "m4-u1-number-forms-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 8,765,432 in expanded form?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "8,000,000 + 700,000 + 60,000 + 5,000 + 400 + 30 + 2"
                    },
                    {
                              "id": "b",
                              "text": "800,000 + 70,000 + 6,000 + 500 + 40 + 3 + 2"
                    },
                    {
                              "id": "c",
                              "text": "8,000 + 700 + 60 + 5 + 4 + 3 + 2"
                    },
                    {
                              "id": "d",
                              "text": "8 million + 765 thousand + 432"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Each digit at its place value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Each digit at its place value.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "8,000,000 + 700,000 + 60,000 + 5,000 + 400 + 30 + 2",
          "commonErrors": [
                    "Wrong places."
          ]
},
        },
        {
          id: "m4-u1-number-forms-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Convert 9,876,543 to expanded form AND word form.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Number forms",
                              "statement": "Expanded + word forms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes expanded form.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Writes word form.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**9,000,000 + 800,000 + 70,000 + 6,000 + 500 + 40 + 3; Nine million eight hundred seventy-six thousand five hundred forty-three**",
          "commonErrors": [
                    "Wrong forms.",
                    "Missing parts."
          ]
},
        },
        {
          id: "m4-u1-number-forms-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Standard form\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sum of place values."
                    },
                    {
                              "id": "b",
                              "text": "Digits with commas."
                    },
                    {
                              "id": "c",
                              "text": "Number in words."
                    },
                    {
                              "id": "d",
                              "text": "Change between forms."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Standard form\" means Digits with commas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Standard form\" means Digits with commas.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Standard form** = Digits with commas.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u1-number-forms-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Expanded form\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Number in words."
                    },
                    {
                              "id": "b",
                              "text": "Change between forms."
                    },
                    {
                              "id": "c",
                              "text": "Separate thousands."
                    },
                    {
                              "id": "d",
                              "text": "Sum of place values."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Expanded form\" means Sum of place values."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Expanded form\" means Sum of place values.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Expanded form** = Sum of place values.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u1-number-forms-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Word form\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Change between forms."
                    },
                    {
                              "id": "b",
                              "text": "Number in words."
                    },
                    {
                              "id": "c",
                              "text": "Separate thousands."
                    },
                    {
                              "id": "d",
                              "text": "1,000,000."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Word form\" means Number in words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Word form\" means Number in words.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Word form** = Number in words.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
