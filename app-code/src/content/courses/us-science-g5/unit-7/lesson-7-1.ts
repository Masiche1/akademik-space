import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "sci5-u7-lesson-7-1",
  code: "7-1",
  title: "Design Process",
  goal: "I CAN follow the engineering design process.",
  standards: ["ETS1.A"],
  vocabulary: [
    { term: "Engineering", definition: "Applying science to solve problems." },
    { term: "Design process", definition: "Steps to solve." },
    { term: "Problem", definition: "What needs solving." },
    { term: "Criteria", definition: "Requirements." },
    { term: "Constraints", definition: "Limitations." },
    { term: "Prototype", definition: "First model." },
    { term: "Test", definition: "Try it out." },
    { term: "Iterate", definition: "Improve and repeat." },
  ],
  concepts: [
    {
      id: "sci5-u7-design-process",
      title: "Design process",
      skill: "Follow the engineering design process to solve problems.",
      lesson: {
        sections: [
          {
            heading: "Steps",
            body: "Engineering uses a **design process**: define **problem** -> identify **criteria** and **constraints** -> **design** -> **prototype** -> **test** -> **iterate** (improve and repeat).",
          },
          {
            heading: "Key ideas",
            body: "**Criteria** = what it must do; **constraints** = limits (cost, materials, time). Testing reveals what works and what needs improvement.",
          },
        ],
        keyFormulas: [
          { name: "Design process", statement: "Problem -> criteria -> design -> prototype -> test -> iterate." },
        ],
        workedExample: {
          problem: "Design a bridge that holds weight using limited materials.",
          solution: "**Define: hold 100g; Constraints: 10 sticks + tape; Design triangle shape; Prototype; Test; Improve.**",
        },
      },
      questions: [
        {
          id: "sci5-u7-design-process-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The engineering design process includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only building"
                    },
                    {
                              "id": "b",
                              "text": "define, design, prototype, test, iterate"
                    },
                    {
                              "id": "c",
                              "text": "only testing"
                    },
                    {
                              "id": "d",
                              "text": "only designing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All steps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All steps.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "define, design, prototype, test, iterate",
          "commonErrors": [
                    "Missing steps."
          ]
},
        },
        {
          id: "sci5-u7-design-process-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Constraints' are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "requirements"
                    },
                    {
                              "id": "b",
                              "text": "limitations or restrictions"
                    },
                    {
                              "id": "c",
                              "text": "goals"
                    },
                    {
                              "id": "d",
                              "text": "tests"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Limitations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Limitations.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "limitations or restrictions",
          "commonErrors": [
                    "Confuses with criteria."
          ]
},
        },
        {
          id: "sci5-u7-design-process-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Follow the design process for a simple problem (e.g., build a tower). Describe each step.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Design",
                              "statement": "All steps followed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Follows all steps.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Problem -> Criteria -> Constraints -> Design -> Prototype -> Test -> Iterate.**",
          "commonErrors": [
                    "Missing steps.",
                    "Wrong order."
          ]
},
        },
        {
          id: "sci5-u7-design-process-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Iterate' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "stop"
                    },
                    {
                              "id": "b",
                              "text": "improve and repeat the process"
                    },
                    {
                              "id": "c",
                              "text": "test once"
                    },
                    {
                              "id": "d",
                              "text": "design once"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Improve and repeat."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Improve and repeat.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "improve and repeat the process",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "sci5-u7-design-process-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain why testing and iterating are important in engineering design.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Design",
                              "statement": "Testing explained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains testing.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains iterating.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Testing reveals problems; iterating improves design until it meets criteria.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No importance."
          ]
},
        },
        {
          id: "sci5-u7-design-process-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Engineering\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Steps to solve."
                    },
                    {
                              "id": "b",
                              "text": "Applying science to solve problems."
                    },
                    {
                              "id": "c",
                              "text": "What needs solving."
                    },
                    {
                              "id": "d",
                              "text": "Requirements."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Engineering\" means Applying science to solve problems."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Engineering\" means Applying science to solve problems.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Engineering** = Applying science to solve problems.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u7-design-process-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Design process\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What needs solving."
                    },
                    {
                              "id": "b",
                              "text": "Requirements."
                    },
                    {
                              "id": "c",
                              "text": "Limitations."
                    },
                    {
                              "id": "d",
                              "text": "Steps to solve."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Design process\" means Steps to solve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Design process\" means Steps to solve.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Design process** = Steps to solve.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u7-design-process-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Problem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Requirements."
                    },
                    {
                              "id": "b",
                              "text": "What needs solving."
                    },
                    {
                              "id": "c",
                              "text": "Limitations."
                    },
                    {
                              "id": "d",
                              "text": "First model."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Problem\" means What needs solving."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Problem\" means What needs solving.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Problem** = What needs solving.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
