import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "sci3-u8-lesson-8-3",
  code: "8-3",
  title: "What Is Engineering?",
  goal: "I CAN describe what engineers do and how they solve problems.",
  standards: ["ETS1.A", "ETS1.B"],
  vocabulary: [
    { term: "Engineer", definition: "Person who designs solutions." },
    { term: "Design", definition: "Plan how to build." },
    { term: "Problem", definition: "Something to solve." },
    { term: "Solution", definition: "How to fix it." },
    { term: "Constraint", definition: "Limit to work within." },
    { term: "Test", definition: "Try it out." },
    { term: "Improve", definition: "Make better." },
    { term: "Criteria", definition: "What success looks like." },
  ],
  concepts: [
    {
      id: "sci3-u8-engineering-intro",
      title: "What is engineering?",
      skill: "Describe engineering as designing solutions to problems within constraints.",
      lesson: {
        sections: [
          {
            heading: "Engineers solve problems",
            body: "**Engineers** design **solutions** to **problems**. They follow a process: define the problem, design, **test**, and **improve**.",
          },
          {
            heading: "Constraints and criteria",
            body: "Engineers work within **constraints** (limits like cost, materials) and meet **criteria** (what success looks like).",
          },
        ],
        keyFormulas: [
          { name: "Engineering", statement: "Problem -> design -> test -> improve = engineering process." },
        ],
        workedExample: {
          problem: "A bridge keeps falling down. What would an engineer do?",
          solution: "**Define** the problem (bridge collapses), **design** a stronger bridge, **test** it, **improve** if needed.",
        },
      },
      questions: [
        {
          id: "sci3-u8-engineering-intro-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'engineer' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a teacher"
                    },
                    {
                              "id": "b",
                              "text": "a person who designs solutions to problems"
                    },
                    {
                              "id": "c",
                              "text": "a doctor"
                    },
                    {
                              "id": "d",
                              "text": "a cook"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Engineer = designs solutions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Engineer = designs solutions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a person who designs solutions to problems",
          "commonErrors": [
                    "Thinks engineer is a doctor."
          ]
},
        },
        {
          id: "sci3-u8-engineering-intro-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The engineering process includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only building"
                    },
                    {
                              "id": "b",
                              "text": "define problem, design, test, improve"
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
                              "statement": "Define->design->test->improve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Define->design->test->improve.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "define problem, design, test, improve",
          "commonErrors": [
                    "Thinks engineering is just building."
          ]
},
        },
        {
          id: "sci3-u8-engineering-intro-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe the engineering process in order.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Engineering",
                              "statement": "Problem->design->test->improve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes process in order.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Define problem -> design solution -> test it -> improve if needed.'**",
          "commonErrors": [
                    "Wrong order.",
                    "Cannot describe."
          ]
},
        },
        {
          id: "sci3-u8-engineering-intro-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'constraint' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a goal"
                    },
                    {
                              "id": "b",
                              "text": "a limit engineers must work within"
                    },
                    {
                              "id": "c",
                              "text": "a solution"
                    },
                    {
                              "id": "d",
                              "text": "a problem"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Constraint = a limit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Constraint = a limit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a limit engineers must work within",
          "commonErrors": [
                    "Thinks constraint is a goal."
          ]
},
        },
        {
          id: "sci3-u8-engineering-intro-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Think of a problem you could solve with engineering. Describe the problem, a solution, and how you'd test it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Engineering",
                              "statement": "Problem + solution + test."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names problem.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives solution + test.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Problem: cup tips over. Solution: wider base. Test: push it.'**",
          "commonErrors": [
                    "Cannot identify problem.",
                    "No solution/test."
          ]
},
        },
        {
          id: "sci3-u8-engineering-intro-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Engineer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Plan how to build."
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
          id: "sci3-u8-engineering-intro-q7",
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
                              "text": "Limit to work within."
                    },
                    {
                              "id": "d",
                              "text": "Plan how to build."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Design\" means Plan how to build."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Design\" means Plan how to build.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Design** = Plan how to build.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u8-engineering-intro-q8",
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
                              "text": "Limit to work within."
                    },
                    {
                              "id": "d",
                              "text": "Try it out."
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
