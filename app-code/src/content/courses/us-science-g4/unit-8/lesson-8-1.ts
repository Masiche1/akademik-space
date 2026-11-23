import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "sci4-u8-lesson-8-1",
  code: "8-1",
  title: "The Engineering Design Process",
  goal: "I CAN use the engineering design process to solve problems.",
  standards: ["ETS1.A"],
  vocabulary: [
    { term: "Engineering", definition: "Designing solutions." },
    { term: "Design process", definition: "Steps to solve." },
    { term: "Problem", definition: "What needs solving." },
    { term: "Criteria", definition: "Requirements." },
    { term: "Constraints", definition: "Limits." },
    { term: "Prototype", definition: "Test version." },
    { term: "Test", definition: "Try it out." },
    { term: "Improve", definition: "Make better." },
  ],
  concepts: [
    {
      id: "sci4-u8-engineering-design",
      title: "The engineering design process",
      skill: "Use the engineering design process: define, brainstorm, design, test, improve.",
      lesson: {
        sections: [
          {
            heading: "Steps",
            body: "**Define** the problem -> **brainstorm** solutions -> **design** a prototype -> **test** it -> **improve** based on results.",
          },
          {
            heading: "Criteria and constraints",
            body: "**Criteria** = what it must do; **constraints** = limits (materials, cost, time).",
          },
        ],
        keyFormulas: [
          { name: "Design", statement: "Define -> brainstorm -> design -> test -> improve = process." },
        ],
        workedExample: {
          problem: "Design a bridge to hold 10 books. What are criteria and constraints?",
          solution: "Criteria: hold 10 books, span 20cm; Constraints: use only paper and tape, build in 30 min.",
        },
      },
      questions: [
        {
          id: "sci4-u8-engineering-design-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The engineering design process includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only testing"
                    },
                    {
                              "id": "b",
                              "text": "define, brainstorm, design, test, improve"
                    },
                    {
                              "id": "c",
                              "text": "only building"
                    },
                    {
                              "id": "d",
                              "text": "only thinking"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All five steps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All five steps.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "define, brainstorm, design, test, improve",
          "commonErrors": [
                    "Missing steps."
          ]
},
        },
        {
          id: "sci4-u8-engineering-design-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Criteria' are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "limits"
                    },
                    {
                              "id": "b",
                              "text": "requirements the solution must meet"
                    },
                    {
                              "id": "c",
                              "text": "materials"
                    },
                    {
                              "id": "d",
                              "text": "costs"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Criteria = requirements."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Criteria = requirements.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "requirements the solution must meet",
          "commonErrors": [
                    "Confuses with constraints."
          ]
},
        },
        {
          id: "sci4-u8-engineering-design-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Define a problem and list two criteria and two constraints for a solution.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Design",
                              "statement": "Problem + criteria + constraints."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Defines all.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Problem: need to carry books; Criteria: hold 10 lbs, last 1 year; Constraints: <$20, portable.**",
          "commonErrors": [
                    "Missing parts.",
                    "Wrong categories."
          ]
},
        },
        {
          id: "sci4-u8-engineering-design-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'prototype' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the final product"
                    },
                    {
                              "id": "b",
                              "text": "a test version"
                    },
                    {
                              "id": "c",
                              "text": "a plan"
                    },
                    {
                              "id": "d",
                              "text": "a constraint"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Prototype = test version."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Prototype = test version.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a test version",
          "commonErrors": [
                    "Confuses with final."
          ]
},
        },
        {
          id: "sci4-u8-engineering-design-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Design a solution to a simple problem using the engineering design process. Describe each step.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Design",
                              "statement": "All steps described."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes all steps.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Follows process.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Problem: water bottle leaks; Define: stop leak; Brainstorm: tape/patch; Design: wrap tape; Test: fill; Improve: better seal.'**",
          "commonErrors": [
                    "Missing steps.",
                    "Wrong order."
          ]
},
        },
        {
          id: "sci4-u8-engineering-design-q6",
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
                              "text": "Designing solutions."
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
                              "statement": "\"Engineering\" means Designing solutions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Engineering\" means Designing solutions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Engineering** = Designing solutions.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u8-engineering-design-q7",
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
                              "text": "Limits."
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
          id: "sci4-u8-engineering-design-q8",
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
                              "text": "Limits."
                    },
                    {
                              "id": "d",
                              "text": "Test version."
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
