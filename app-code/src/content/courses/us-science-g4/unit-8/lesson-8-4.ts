import type { Lesson } from "../../../types.ts";

export const lesson84: Lesson = {
  id: "sci4-u8-lesson-8-4",
  code: "8-4",
  title: "Engineering Constraints",
  goal: "I CAN identify constraints that limit engineering solutions.",
  standards: ["ETS1.A"],
  vocabulary: [
    { term: "Constraint", definition: "Limit on solution." },
    { term: "Criteria", definition: "Requirements." },
    { term: "Material", definition: "What it's made of." },
    { term: "Cost", definition: "Money limit." },
    { term: "Time", definition: "Deadline." },
    { term: "Size", definition: "Dimensions." },
    { term: "Safety", definition: "Must be safe." },
    { term: "Trade-off", definition: "Give up one for another." },
  ],
  concepts: [
    {
      id: "sci4-u8-engineering-constraints",
      title: "Engineering constraints",
      skill: "Identify constraints (materials, cost, time, size) that limit engineering solutions.",
      lesson: {
        sections: [
          {
            heading: "Limits exist",
            body: "**Constraints** are limits: **materials** available, **cost** budget, **time** deadline, **size** requirements, **safety** needs. Engineers must work within these.",
          },
          {
            heading: "Trade-offs",
            body: "A **trade-off** means giving up one thing for another — stronger materials cost more; faster design takes more time.",
          },
        ],
        keyFormulas: [
          { name: "Constraints", statement: "Materials + cost + time + size + safety = limits." },
        ],
        workedExample: {
          problem: "Design a lunchbox. List three constraints.",
          solution: "Must fit standard bag (size), <$10 (cost), keep food cold 4 hours (function/safety).",
        },
      },
      questions: [
        {
          id: "sci4-u8-engineering-constraints-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'constraint' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a requirement"
                    },
                    {
                              "id": "b",
                              "text": "a limit on the solution"
                    },
                    {
                              "id": "c",
                              "text": "a material"
                    },
                    {
                              "id": "d",
                              "text": "a goal"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Constraint = limit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Constraint = limit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a limit on the solution",
          "commonErrors": [
                    "Confuses with criteria."
          ]
},
        },
        {
          id: "sci4-u8-engineering-constraints-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Trade-off' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "winning everything"
                    },
                    {
                              "id": "b",
                              "text": "giving up one thing for another"
                    },
                    {
                              "id": "c",
                              "text": "no limits"
                    },
                    {
                              "id": "d",
                              "text": "failing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Trade-off = compromise."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Trade-off = compromise.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "giving up one thing for another",
          "commonErrors": [
                    "Thinks it's winning."
          ]
},
        },
        {
          id: "sci4-u8-engineering-constraints-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "List three constraints for designing a school lunchbox. Explain why each matters.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Constraints",
                              "statement": "Three constraints + reasons."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lists three + reasons.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Size (fits bag), Cost (<$15), Function (keeps food cold).**",
          "commonErrors": [
                    "Fewer than three.",
                    "No reasons."
          ]
},
        },
        {
          id: "sci4-u8-engineering-constraints-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Criteria' vs 'constraints': criteria are...",
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
          id: "sci4-u8-engineering-constraints-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Design a solution to a problem. Identify two constraints and explain how they affect your design choices.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Constraints",
                              "statement": "Two constraints + design impact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies constraints.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains design impact.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Cost <$10 -> use cheaper materials; Time 1 hour -> simpler design.'**",
          "commonErrors": [
                    "Cannot identify.",
                    "No impact."
          ]
},
        },
        {
          id: "sci4-u8-engineering-constraints-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Constraint\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Requirements."
                    },
                    {
                              "id": "b",
                              "text": "Limit on solution."
                    },
                    {
                              "id": "c",
                              "text": "What it's made of."
                    },
                    {
                              "id": "d",
                              "text": "Money limit."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Constraint\" means Limit on solution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Constraint\" means Limit on solution.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Constraint** = Limit on solution.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u8-engineering-constraints-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Criteria\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What it's made of."
                    },
                    {
                              "id": "b",
                              "text": "Money limit."
                    },
                    {
                              "id": "c",
                              "text": "Deadline."
                    },
                    {
                              "id": "d",
                              "text": "Requirements."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Criteria\" means Requirements."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Criteria\" means Requirements.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Criteria** = Requirements.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u8-engineering-constraints-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Material\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Money limit."
                    },
                    {
                              "id": "b",
                              "text": "What it's made of."
                    },
                    {
                              "id": "c",
                              "text": "Deadline."
                    },
                    {
                              "id": "d",
                              "text": "Dimensions."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Material\" means What it's made of."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Material\" means What it's made of.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Material** = What it's made of.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
