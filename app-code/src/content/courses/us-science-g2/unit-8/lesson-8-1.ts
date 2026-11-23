import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "sci2-u8-lesson-8-1",
  code: "8-1",
  title: "Designing Solutions",
  goal: "I CAN identify a problem and design a solution.",
  standards: ["NGSS K-2-ETS1-1"],
  vocabulary: [
    { term: "Engineer", definition: "Person who designs solutions." },
    { term: "Design", definition: "Plan a solution." },
    { term: "Problem", definition: "Something to solve." },
    { term: "Solution", definition: "How to fix it." },
    { term: "Need", definition: "What we require." },
    { term: "Criteria", definition: "What solution must do." },
    { term: "Constraint", definition: "Limit on solution." },
    { term: "Test", definition: "Try it out." },
    { term: "Improve", definition: "Make better." },
    { term: "Prototype", definition: "First version." },
  ],
  concepts: [
    {
      id: "sci2-u8-design-problem",
      title: "Designing solutions",
      skill: "Identify a problem and design a solution that meets criteria and constraints.",
      lesson: {
        sections: [
          {
            heading: "What is engineering?",
            body: "**Engineering** is designing **solutions** to **problems**. An engineer identifies what needs fixing, designs a solution, tests it, and **improves** it.",
          },
          {
            heading: "Criteria and constraints",
            body: "A good solution meets **criteria** (what it must do) within **constraints** (limits like materials or time).",
          },
        ],
        keyFormulas: [
          { name: "Engineering", statement: "Problem -> criteria + constraints -> design -> test -> improve." },
        ],
        workedExample: {
          problem: "Design a solution: your pencil keeps rolling off the desk.",
          solution: "Add a pencil holder or tray — meets criteria (holds pencil) within constraints (uses available materials).",
        },
      },
      questions: [
        {
          id: "sci2-u8-design-problem-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'engineer' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a doctor"
                    },
                    {
                              "id": "b",
                              "text": "a person who designs solutions"
                    },
                    {
                              "id": "c",
                              "text": "a teacher"
                    },
                    {
                              "id": "d",
                              "text": "a pilot"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Engineer designs solutions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Engineer designs solutions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**designs solutions**",
          "commonErrors": [
                    "Picks wrong profession."
          ]
},
        },
        {
          id: "sci2-u8-design-problem-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Criteria' are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "problems"
                    },
                    {
                              "id": "b",
                              "text": "what a solution must do"
                    },
                    {
                              "id": "c",
                              "text": "materials"
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
                              "statement": "Criteria = what solution must do."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Criteria = what solution must do.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**must do**",
          "commonErrors": [
                    "Confuses with constraints."
          ]
},
        },
        {
          id: "sci2-u8-design-problem-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Identify a problem in your classroom and design a simple solution.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Design",
                              "statement": "Problem + solution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names problem + solution.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Problem: books fall. Solution: shelf or bin.'**",
          "commonErrors": [
                    "No problem.",
                    "No solution."
          ]
},
        },
        {
          id: "sci2-u8-design-problem-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Constraints' are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "goals"
                    },
                    {
                              "id": "b",
                              "text": "limits on a solution"
                    },
                    {
                              "id": "c",
                              "text": "materials only"
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
                              "statement": "Constraints = limits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Constraints = limits.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**limits**",
          "commonErrors": [
                    "Confuses with criteria."
          ]
},
        },
        {
          id: "sci2-u8-design-problem-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Design a solution for a problem. List its criteria and constraints.",
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
                              "reasoning": "Names problem.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Lists criteria + constraints.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Problem: wet shoes. Criteria: dry them. Constraint: only use towel.'**",
          "commonErrors": [
                    "No problem.",
                    "No criteria/constraints."
          ]
},
        },
        {
          id: "sci2-u8-design-problem-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Engineer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Plan a solution."
                    },
                    {
                              "id": "b",
                              "text": "Person who designs solutions."
                    },
                    {
                              "id": "c",
                              "text": "Something to solve."
                    },
                    {
                              "id": "d",
                              "text": "How to fix it."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Engineer\" means Person who designs solutions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Engineer\" means Person who designs solutions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Engineer** = Person who designs solutions.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u8-design-problem-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Design\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Something to solve."
                    },
                    {
                              "id": "b",
                              "text": "How to fix it."
                    },
                    {
                              "id": "c",
                              "text": "What we require."
                    },
                    {
                              "id": "d",
                              "text": "Plan a solution."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Design\" means Plan a solution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Design\" means Plan a solution.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Design** = Plan a solution.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u8-design-problem-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Problem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How to fix it."
                    },
                    {
                              "id": "b",
                              "text": "Something to solve."
                    },
                    {
                              "id": "c",
                              "text": "What we require."
                    },
                    {
                              "id": "d",
                              "text": "What solution must do."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Problem\" means Something to solve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Problem\" means Something to solve.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Problem** = Something to solve.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
