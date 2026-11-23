import type { Lesson } from "../../../types.ts";

export const lesson84: Lesson = {
  id: "s0-u8-lesson-8-4",
  code: "8-4",
  title: "Engineering Review",
  goal: "I CAN use the design process to solve problems.",
  standards: ["K-2-ETS1-1", "K-2-ETS1-2", "K-2-ETS1-3"],
  vocabulary: [
    { term: "Design", definition: "Plan + make." },
    { term: "Problem", definition: "Something to solve." },
    { term: "Idea", definition: "Solution plan." },
    { term: "Build", definition: "Make it." },
    { term: "Test", definition: "Try it." },
    { term: "Improve", definition: "Make better." },
    { term: "Engineer", definition: "Designer." },
    { term: "Solution", definition: "Fix." },
  ],
  concepts: [
    {
      id: "s0-u8-engineering-review",
      title: "Engineering review",
      skill: "Combine design process steps to solve problems.",
      lesson: {
        sections: [
          {
            heading: "All about design",
            body: "The **design process** helps solve problems: find a **problem**, think of an **idea**, **build** it, **test** it, and **improve** it. Engineers use this to create **solutions**.",
          },
          {
            heading: "Put it together",
            body: "Use all steps to design something that solves a problem.",
          },
        ],
        keyFormulas: [
          { name: "Engineering", statement: "Problem -> idea -> build -> test -> improve = design solutions." },
        ],
        workedExample: {
          problem: "Design a solution for a problem. Go through all steps.",
          solution: "Problem -> idea -> build -> test -> improve (repeat until it works).",
        },
      },
      questions: [
        {
          id: "s0-u8-engineering-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "The design process steps are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "build, test, done"
                    },
                    {
                              "id": "b",
                              "text": "problem, idea, build, test, improve"
                    },
                    {
                              "id": "c",
                              "text": "test, build, problem"
                    },
                    {
                              "id": "d",
                              "text": "improve, idea, problem"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Problem -> idea -> build -> test -> improve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Problem -> idea -> build -> test -> improve.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**all steps**",
          "commonErrors": [
                    "Wrong order."
          ]
},
        },
        {
          id: "s0-u8-engineering-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose a problem. Describe your design solution through all steps: problem, idea, build, test, improve.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": [
                                        [
                                                  "skill",
                                                  "All design",
                                                  "All steps for a problem."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All design",
                                                  "All steps for a problem."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Describes all steps.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Problem: spills; Idea: lid; Build: cover; Test: pour; Improve: seal.'**"
          ]
},
        },
        {
          id: "s0-u8-engineering-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'engineer' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a builder only"
                    },
                    {
                              "id": "b",
                              "text": "someone who designs solutions"
                    },
                    {
                              "id": "c",
                              "text": "a tester only"
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
          "finalAnswer": "**designs solutions**",
          "commonErrors": [
                    "Confuses with builder."
          ]
},
        },
        {
          id: "s0-u8-engineering-review-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The design process helps us...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "avoid problems"
                    },
                    {
                              "id": "b",
                              "text": "solve problems systematically"
                    },
                    {
                              "id": "c",
                              "text": "make problems worse"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Solve problems systematically."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solve problems systematically.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**solve problems**",
          "commonErrors": [
                    "Thinks it avoids problems."
          ]
},
        },
        {
          id: "s0-u8-engineering-review-q5",
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
                              "text": "Plan + make."
                    },
                    {
                              "id": "c",
                              "text": "Solution plan."
                    },
                    {
                              "id": "d",
                              "text": "Make it."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Design\" means Plan + make."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Design\" means Plan + make.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Design** = Plan + make.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u8-engineering-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Problem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Solution plan."
                    },
                    {
                              "id": "b",
                              "text": "Make it."
                    },
                    {
                              "id": "c",
                              "text": "Try it."
                    },
                    {
                              "id": "d",
                              "text": "Something to solve."
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "s0-u8-engineering-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Idea\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Make it."
                    },
                    {
                              "id": "b",
                              "text": "Solution plan."
                    },
                    {
                              "id": "c",
                              "text": "Try it."
                    },
                    {
                              "id": "d",
                              "text": "Make better."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Idea\" means Solution plan."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Idea\" means Solution plan.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Idea** = Solution plan.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u8-engineering-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Build\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Try it."
                    },
                    {
                              "id": "b",
                              "text": "Make better."
                    },
                    {
                              "id": "c",
                              "text": "Designer."
                    },
                    {
                              "id": "d",
                              "text": "Make it."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Build\" means Make it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Build\" means Make it.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Build** = Make it.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
