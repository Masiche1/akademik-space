import type { Lesson } from "../../../types.ts";

export const lesson66: Lesson = {
  id: "m6-u6-lesson-6-6",
  code: "6-6",
  title: "Multi-Digit Fluency",
  goal: "I CAN perform multi-digit operations fluently.",
  standards: ["6.NS.B.2"],
  vocabulary: [
    { term: "Fluency", definition: "Quick accuracy." },
    { term: "Add", definition: "Combine." },
    { term: "Subtract", definition: "Take away." },
    { term: "Multiply", definition: "Repeated addition." },
    { term: "Divide", definition: "Split." },
    { term: "Multi-digit", definition: "Many places." },
    { term: "Algorithm", definition: "Step-by-step." },
    { term: "Check", definition: "Verify." },
  ],
  concepts: [
    {
      id: "m6-u6-multi-digit-fluency",
      title: "Multi-digit fluency",
      skill: "Perform multi-digit operations quickly and accurately.",
      lesson: {
        sections: [
          {
            heading: "Fluency",
            body: "**Fluency** means doing operations quickly and accurately without a calculator.",
          },
          {
            heading: "Strategies",
            body: "Use **standard algorithms** for multi-digit operations; estimate to check reasonableness.",
          },
        ],
        keyFormulas: [
          { name: "Fluency", statement: "Fast + accurate = fluency." },
        ],
        workedExample: {
          problem: "Calculate 347 + 589 and 624 - 187.",
          solution: "347+589 = **936**; 624-187 = **437**.",
        },
      },
      questions: [
        {
          id: "m6-u6-multi-digit-fluency-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "347 + 589 = ?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "926"
                    },
                    {
                              "id": "b",
                              "text": "936"
                    },
                    {
                              "id": "c",
                              "text": "946"
                    },
                    {
                              "id": "d",
                              "text": "956"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "936."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "936.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "936",
          "commonErrors": [
                    "Wrong sum."
          ]
},
        },
        {
          id: "m6-u6-multi-digit-fluency-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "624 - 187 = ?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "437"
                    },
                    {
                              "id": "b",
                              "text": "447"
                    },
                    {
                              "id": "c",
                              "text": "457"
                    },
                    {
                              "id": "d",
                              "text": "467"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "437."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "437.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "437",
          "commonErrors": [
                    "Wrong difference."
          ]
},
        },
        {
          id: "m6-u6-multi-digit-fluency-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Calculate: 456 + 789; 1000 - 347; 34 x 12; 144 / 12.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Fluency",
                              "statement": "1245, 653, 408, 12."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Computes all four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**456+789=1245; 1000-347=653; 34x12=408; 144/12=12.**",
          "commonErrors": [
                    "Wrong answers.",
                    "Missing operations."
          ]
},
        },
        {
          id: "m6-u6-multi-digit-fluency-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Fluency' in math means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "using calculator"
                    },
                    {
                              "id": "b",
                              "text": "quick and accurate"
                    },
                    {
                              "id": "c",
                              "text": "guessing"
                    },
                    {
                              "id": "d",
                              "text": "slow and careful"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Quick and accurate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Quick and accurate.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "quick and accurate",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "m6-u6-multi-digit-fluency-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Calculate a multi-digit multiplication and explain your algorithm steps.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Fluency",
                              "statement": "Product + steps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Calculates correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains steps.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., '23 x 45 = 23x40 + 23x5 = 920+115 = 1035; partial products.'**",
          "commonErrors": [
                    "Wrong product.",
                    "No steps."
          ]
},
        },
        {
          id: "m6-u6-multi-digit-fluency-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fluency\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Combine."
                    },
                    {
                              "id": "b",
                              "text": "Quick accuracy."
                    },
                    {
                              "id": "c",
                              "text": "Take away."
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
                              "statement": "\"Fluency\" means Quick accuracy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fluency\" means Quick accuracy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fluency** = Quick accuracy.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u6-multi-digit-fluency-q7",
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
                              "text": "Repeated addition."
                    },
                    {
                              "id": "c",
                              "text": "Split."
                    },
                    {
                              "id": "d",
                              "text": "Combine."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "m6-u6-multi-digit-fluency-q8",
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
                              "text": "Take away."
                    },
                    {
                              "id": "c",
                              "text": "Split."
                    },
                    {
                              "id": "d",
                              "text": "Many places."
                    }
          ],
          "correctChoiceId": "b"
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
      ],
    },
  ],
};
