import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "sci5-u7-lesson-7-2",
  code: "7-2",
  title: "Criteria and Constraints",
  goal: "I CAN identify criteria and constraints in design problems.",
  standards: ["ETS1.A"],
  vocabulary: [
    { term: "Criteria", definition: "What it must do." },
    { term: "Constraint", definition: "Limitation." },
    { term: "Requirement", definition: "Must have." },
    { term: "Limit", definition: "Boundary." },
    { term: "Material", definition: "What it's made of." },
    { term: "Cost", definition: "How much." },
    { term: "Time", definition: "How long." },
    { term: "Function", definition: "What it does." },
  ],
  concepts: [
    {
      id: "sci5-u7-criteria-constraints",
      title: "Criteria and constraints",
      skill: "Identify criteria (requirements) and constraints (limitations) in design problems.",
      lesson: {
        sections: [
          {
            heading: "Two key ideas",
            body: "**Criteria** = what the design **must do** (requirements). **Constraints** = **limitations** (materials, cost, time, size). Both shape the solution.",
          },
          {
            heading: "Example",
            body: "Design a lunchbox: **criteria** = keep food cool, easy to carry; **constraints** = must use recyclable materials, under $5.",
          },
        ],
        keyFormulas: [
          { name: "Criteria/constraints", statement: "Criteria = must do; Constraints = limitations." },
        ],
        workedExample: {
          problem: "Identify criteria and constraints for designing a birdhouse.",
          solution: "**Criteria: keep birds dry, easy entry; Constraints: use wood only, under 20cm tall.**",
        },
      },
      questions: [
        {
          id: "sci5-u7-criteria-constraints-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Criteria' are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "limitations"
                    },
                    {
                              "id": "b",
                              "text": "requirements the design must meet"
                    },
                    {
                              "id": "c",
                              "text": "tests"
                    },
                    {
                              "id": "d",
                              "text": "materials"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Requirements."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Requirements.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "requirements the design must meet",
          "commonErrors": [
                    "Confuses with constraints."
          ]
},
        },
        {
          id: "sci5-u7-criteria-constraints-q2",
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
                              "text": "functions"
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
          id: "sci5-u7-criteria-constraints-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "For a design problem (e.g., build a bridge), list 2 criteria and 2 constraints.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Criteria",
                              "statement": "2 criteria + 2 constraints."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lists criteria.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Lists constraints.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Criteria: hold weight, span gap; Constraints: limited materials, time limit.**",
          "commonErrors": [
                    "Confuses criteria/constraints.",
                    "Missing items."
          ]
},
        },
        {
          id: "sci5-u7-criteria-constraints-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Constraints help engineers by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "making it harder"
                    },
                    {
                              "id": "b",
                              "text": "defining realistic limits"
                    },
                    {
                              "id": "c",
                              "text": "adding work"
                    },
                    {
                              "id": "d",
                              "text": "confusing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Define realistic limits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Define realistic limits.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "defining realistic limits",
          "commonErrors": [
                    "Thinks they hinder."
          ]
},
        },
        {
          id: "sci5-u7-criteria-constraints-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how criteria and constraints work together in a design problem.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Criteria",
                              "statement": "How they work."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains criteria.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains constraints.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Criteria define what it must do; constraints limit how — together guide the design.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No connection."
          ]
},
        },
        {
          id: "sci5-u7-criteria-constraints-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Criteria\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Limitation."
                    },
                    {
                              "id": "b",
                              "text": "What it must do."
                    },
                    {
                              "id": "c",
                              "text": "Must have."
                    },
                    {
                              "id": "d",
                              "text": "Boundary."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Criteria\" means What it must do."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Criteria\" means What it must do.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Criteria** = What it must do.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u7-criteria-constraints-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Constraint\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Must have."
                    },
                    {
                              "id": "b",
                              "text": "Boundary."
                    },
                    {
                              "id": "c",
                              "text": "What it's made of."
                    },
                    {
                              "id": "d",
                              "text": "Limitation."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Constraint\" means Limitation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Constraint\" means Limitation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Constraint** = Limitation.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u7-criteria-constraints-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Requirement\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Boundary."
                    },
                    {
                              "id": "b",
                              "text": "Must have."
                    },
                    {
                              "id": "c",
                              "text": "What it's made of."
                    },
                    {
                              "id": "d",
                              "text": "How much."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Requirement\" means Must have."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Requirement\" means Must have.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Requirement** = Must have.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
