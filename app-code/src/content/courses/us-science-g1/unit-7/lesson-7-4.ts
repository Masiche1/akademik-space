import type { Lesson } from "../../../types.ts";

export const lesson74: Lesson = {
  id: "s1-u7-lesson-7-4",
  code: "7-4",
  title: "Design a Solution",
  goal: "I CAN go through the full engineering design process.",
  standards: ["1-ETS1-1", "1-ETS1-2", "1-ETS1-3"],
  vocabulary: [
    { term: "Problem", definition: "Needs solving." },
    { term: "Plan", definition: "Decide approach." },
    { term: "Material", definition: "What to build with." },
    { term: "Build", definition: "Make it." },
    { term: "Test", definition: "Try it." },
    { term: "Improve", definition: "Make better." },
    { term: "Design process", definition: "Problem->plan->build->test->improve." },
    { term: "Solution", definition: "Answer to problem." },
  ],
  concepts: [
    {
      id: "s1-u7-engineering-design",
      title: "The engineering design process",
      skill: "Engineering follows a process: identify problem, plan, build, test, improve.",
      lesson: {
        sections: [
          {
            heading: "The design process",
            body: "Engineering follows steps: **identify problem** -> **plan** -> **build** -> **test** -> **improve**. Repeat until the solution works well.",
          },
          {
            heading: "Test and improve",
            body: "Always **test** your design and **improve** it based on results. Good engineers iterate until they have a strong solution.",
          },
        ],
        keyFormulas: [
          { name: "Design process", statement: "Problem -> plan -> build -> test -> improve -> repeat." },
        ],
        workedExample: {
          problem: "Solve 'pencil rolls off desk' using the full design process.",
          solution: "Problem: pencil rolls. Plan: cup holder. Build: place cup. Test: does pencil stay? Improve if needed.",
        },
      },
      questions: [
        {
          id: "s1-u7-engineering-design-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "The engineering design process is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "build first"
                    },
                    {
                              "id": "b",
                              "text": "problem -> plan -> build -> test -> improve"
                    },
                    {
                              "id": "c",
                              "text": "test only"
                    },
                    {
                              "id": "d",
                              "text": "throw away"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Problem -> plan -> build -> test -> improve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Problem -> plan -> build -> test -> improve.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**full process**",
          "commonErrors": [
                    "Picks wrong order."
          ]
},
        },
        {
          id: "s1-u7-engineering-design-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Go through the design process for a simple problem. Identify problem, plan, build, test, improve.",
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
                                                  "Design process",
                                                  "All steps."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Design process",
                                                  "All steps."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Follows all steps.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Problem: X; plan: Y; build: Z; test: result; improve: change.'**"
          ]
},
        },
        {
          id: "s1-u7-engineering-design-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why do engineers test and improve?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "to waste time"
                    },
                    {
                              "id": "b",
                              "text": "to make solutions work better"
                    },
                    {
                              "id": "c",
                              "text": "to avoid building"
                    },
                    {
                              "id": "d",
                              "text": "to make it harder"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Test+improve = better solutions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Test+improve = better solutions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**better solutions**",
          "commonErrors": [
                    "Picks wrong reason."
          ]
},
        },
        {
          id: "s1-u7-engineering-design-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Problem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Decide approach."
                    },
                    {
                              "id": "b",
                              "text": "Needs solving."
                    },
                    {
                              "id": "c",
                              "text": "What to build with."
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
                              "statement": "\"Problem\" means Needs solving."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Problem\" means Needs solving.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Problem** = Needs solving.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u7-engineering-design-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Plan\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What to build with."
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
                              "text": "Decide approach."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Plan\" means Decide approach."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Plan\" means Decide approach.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Plan** = Decide approach.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u7-engineering-design-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Material\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Make it."
                    },
                    {
                              "id": "b",
                              "text": "What to build with."
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
                              "statement": "\"Material\" means What to build with."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Material\" means What to build with.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Material** = What to build with.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u7-engineering-design-q7",
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
                              "text": "Problem->plan->build->test->improve."
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
        {
          id: "s1-u7-engineering-design-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Test\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Make better."
                    },
                    {
                              "id": "b",
                              "text": "Try it."
                    },
                    {
                              "id": "c",
                              "text": "Problem->plan->build->test->improve."
                    },
                    {
                              "id": "d",
                              "text": "Answer to problem."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Test\" means Try it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Test\" means Try it.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Test** = Try it.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
