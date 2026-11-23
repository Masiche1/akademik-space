import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "m4-u3-lesson-3-4",
  code: "3-4",
  title: "Multiplying by Multiples of 10",
  goal: "I CAN multiply by 10, 100 and 1000.",
  standards: ["4.NBT.B.5"],
  vocabulary: [
    { term: "Multiple of 10", definition: "10, 20, 30, etc." },
    { term: "Multiply", definition: "Repeated addition." },
    { term: "Zeros", definition: "Placeholders." },
    { term: "Place value", definition: "Position in number." },
    { term: "Shift", definition: "Move digits left." },
    { term: "Product", definition: "Answer to multiplication." },
    { term: "Estimate", definition: "Check reasonableness." },
    { term: "Pattern", definition: "Rule that repeats." },
  ],
  concepts: [
    {
      id: "m4-u3-multiply-multiples-10",
      title: "Multiplying by multiples of 10",
      skill: "Multiply by 10, 100 and 1000 by shifting place value.",
      lesson: {
        sections: [
          {
            heading: "Times 10, 100, 1000",
            body: "Multiplying by **10** adds a zero; by **100** adds two zeros; by **1000** adds three zeros. $45 \\times 10 = 450$; $45 \\times 100 = 4,500$; $45 \\times 1000 = 45,000$.",
          },
          {
            heading: "Why it works",
            body: "Each zero shifts digits **one place left** in place value.",
          },
        ],
        keyFormulas: [
          { name: "x10", statement: "Add 1 zero." },
          { name: "x100", statement: "Add 2 zeros." },
          { name: "x1000", statement: "Add 3 zeros." },
        ],
        workedExample: {
          problem: "Calculate $67 \\times 100$ and $89 \\times 1000$.",
          solution: "$67 \\times 100 = 6,700$; $89 \\times 1000 = 89,000$.",
        },
      },
      questions: [
        {
          id: "m4-u3-multiply-multiples-10-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $45 \\times 10$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "450"
                    },
                    {
                              "id": "b",
                              "text": "45"
                    },
                    {
                              "id": "c",
                              "text": "4,500"
                    },
                    {
                              "id": "d",
                              "text": "405"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "45 x 10 = 450."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "45 x 10 = 450.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "450",
          "commonErrors": [
                    "Wrong product."
          ]
},
        },
        {
          id: "m4-u3-multiply-multiples-10-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is $67 \\times 100$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "670"
                    },
                    {
                              "id": "b",
                              "text": "6,700"
                    },
                    {
                              "id": "c",
                              "text": "67,000"
                    },
                    {
                              "id": "d",
                              "text": "607"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "67 x 100 = 6,700."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "67 x 100 = 6,700.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "6,700",
          "commonErrors": [
                    "Wrong zeros."
          ]
},
        },
        {
          id: "m4-u3-multiply-multiples-10-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate $89 \\times 1000$ and $34 \\times 100$. Explain the pattern.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Multiples of 10",
                              "statement": "89,000 and 3,400."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Multiplies correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains pattern.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**89 x 1000 = 89,000; 34 x 100 = 3,400; each zero adds a place**",
          "commonErrors": [
                    "Wrong products.",
                    "No explanation."
          ]
},
        },
        {
          id: "m4-u3-multiply-multiples-10-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Multiplying by 100 adds...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1 zero"
                    },
                    {
                              "id": "b",
                              "text": "2 zeros"
                    },
                    {
                              "id": "c",
                              "text": "3 zeros"
                    },
                    {
                              "id": "d",
                              "text": "4 zeros"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "x100 adds 2 zeros."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "x100 adds 2 zeros.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2 zeros",
          "commonErrors": [
                    "Wrong number of zeros."
          ]
},
        },
        {
          id: "m4-u3-multiply-multiples-10-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Calculate $456 \\times 10$, $456 \\times 100$, and $456 \\times 1000$. Describe the pattern.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Multiples of 10",
                              "statement": "4,560; 45,600; 456,000."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Calculates all three.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes pattern.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**4,560; 45,600; 456,000; each step shifts one place left**",
          "commonErrors": [
                    "Wrong products.",
                    "No pattern."
          ]
},
        },
        {
          id: "m4-u3-multiply-multiples-10-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Multiple of 10\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Repeated addition."
                    },
                    {
                              "id": "b",
                              "text": "10, 20, 30, etc."
                    },
                    {
                              "id": "c",
                              "text": "Placeholders."
                    },
                    {
                              "id": "d",
                              "text": "Position in number."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Multiple of 10\" means 10, 20, 30, etc."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Multiple of 10\" means 10, 20, 30, etc.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Multiple of 10** = 10, 20, 30, etc.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u3-multiply-multiples-10-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Multiply\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Placeholders."
                    },
                    {
                              "id": "b",
                              "text": "Position in number."
                    },
                    {
                              "id": "c",
                              "text": "Move digits left."
                    },
                    {
                              "id": "d",
                              "text": "Repeated addition."
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "m4-u3-multiply-multiples-10-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Zeros\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Position in number."
                    },
                    {
                              "id": "b",
                              "text": "Placeholders."
                    },
                    {
                              "id": "c",
                              "text": "Move digits left."
                    },
                    {
                              "id": "d",
                              "text": "Answer to multiplication."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Zeros\" means Placeholders."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Zeros\" means Placeholders.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Zeros** = Placeholders.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
