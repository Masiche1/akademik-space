import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "m4-u3-lesson-3-2",
  code: "3-2",
  title: "Multiplying 2-Digit by 2-Digit",
  goal: "I CAN multiply 2-digit numbers using area models and standard algorithm.",
  standards: ["4.NBT.B.5"],
  vocabulary: [
    { term: "Area model", definition: "Grid for multiplication." },
    { term: "Partial product", definition: "Part of answer." },
    { term: "Standard algorithm", definition: "Step-by-step." },
    { term: "Ones", definition: "Rightmost digit." },
    { term: "Tens", definition: "Second from right." },
    { term: "Regroup", definition: "Carry to next place." },
    { term: "Estimate", definition: "Check reasonableness." },
    { term: "Product", definition: "Answer to multiplication." },
  ],
  concepts: [
    {
      id: "m4-u3-multiply-2digit",
      title: "Multiplying 2-digit by 2-digit",
      skill: "Multiply 2-digit x 2-digit using area models and standard algorithm.",
      lesson: {
        sections: [
          {
            heading: "Two methods",
            body: "Use an **area model** (grid) or **standard algorithm** (line up and multiply). Both give the same answer.",
          },
          {
            heading: "Example",
            body: "$23 \\times 45$: area model gives $23 \\times 40 = 920$ and $23 \\times 5 = 115$; total **1,035**.",
          },
        ],
        keyFormulas: [
          { name: "Area model", statement: "(a+b)(c+d) = ac + ad + bc + bd." },
          { name: "Standard", statement: "Ones x ones, ones x tens, tens x ones, tens x tens; add all." },
        ],
        workedExample: {
          problem: "Calculate $34 \\times 25$ using the standard algorithm.",
          solution: "4x5=20 (write 0, carry 2), 4x2=8+2=10 (write 0, carry 1), 3x5=15+1=16 (write 6, carry 1), 3x2=6+1=7. **Answer: 850.**",
        },
      },
      questions: [
        {
          id: "m4-u3-multiply-2digit-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $34 \\times 25$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "850"
                    },
                    {
                              "id": "b",
                              "text": "800"
                    },
                    {
                              "id": "c",
                              "text": "900"
                    },
                    {
                              "id": "d",
                              "text": "750"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "34 x 25 = 850."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "34 x 25 = 850.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "850",
          "commonErrors": [
                    "Wrong product."
          ]
},
        },
        {
          id: "m4-u3-multiply-2digit-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is $45 \\times 67$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3,015"
                    },
                    {
                              "id": "b",
                              "text": "2,915"
                    },
                    {
                              "id": "c",
                              "text": "3,115"
                    },
                    {
                              "id": "d",
                              "text": "2,815"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "45 x 67 = 3,015."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "45 x 67 = 3,015.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3,015",
          "commonErrors": [
                    "Wrong product."
          ]
},
        },
        {
          id: "m4-u3-multiply-2digit-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate $56 \\times 78$ using the standard algorithm. Show each partial product.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Multiply 2x2",
                              "statement": "56 x 78 = 4,368."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Shows partial products.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gets correct answer.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**56 x 78 = 4,368; partials: 448 + 3920 + 168 + 0 = 4,368**",
          "commonErrors": [
                    "Wrong answer.",
                    "Missing partials."
          ]
},
        },
        {
          id: "m4-u3-multiply-2digit-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Estimate: $45 \\times 67$ is about...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2,000"
                    },
                    {
                              "id": "b",
                              "text": "3,000"
                    },
                    {
                              "id": "c",
                              "text": "4,000"
                    },
                    {
                              "id": "d",
                              "text": "5,000"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "45 x 67 ≈ 50 x 70 = 3,500... actually ≈ 3,000."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "45 x 67 ≈ 50 x 70 = 3,500... actually ≈ 3,000.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3,000",
          "commonErrors": [
                    "Poor estimate."
          ]
},
        },
        {
          id: "m4-u3-multiply-2digit-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Use an area model to calculate $23 \\times 45$. Show your partial products.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Area model",
                              "statement": "23 x 45 = 1,035."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Shows area model.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gets correct total.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**23 x 45 = 1,035; partials: 23x40=920, 23x5=115; total 1,035**",
          "commonErrors": [
                    "Wrong total.",
                    "Missing partials."
          ]
},
        },
        {
          id: "m4-u3-multiply-2digit-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Area model\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Part of answer."
                    },
                    {
                              "id": "b",
                              "text": "Grid for multiplication."
                    },
                    {
                              "id": "c",
                              "text": "Step-by-step."
                    },
                    {
                              "id": "d",
                              "text": "Rightmost digit."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Area model\" means Grid for multiplication."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Area model\" means Grid for multiplication.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Area model** = Grid for multiplication.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u3-multiply-2digit-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Partial product\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Step-by-step."
                    },
                    {
                              "id": "b",
                              "text": "Rightmost digit."
                    },
                    {
                              "id": "c",
                              "text": "Second from right."
                    },
                    {
                              "id": "d",
                              "text": "Part of answer."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Partial product\" means Part of answer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Partial product\" means Part of answer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Partial product** = Part of answer.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u3-multiply-2digit-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Standard algorithm\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rightmost digit."
                    },
                    {
                              "id": "b",
                              "text": "Step-by-step."
                    },
                    {
                              "id": "c",
                              "text": "Second from right."
                    },
                    {
                              "id": "d",
                              "text": "Carry to next place."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Standard algorithm\" means Step-by-step."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Standard algorithm\" means Step-by-step.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Standard algorithm** = Step-by-step.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
