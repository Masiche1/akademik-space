import type { Lesson } from "../../../types.ts";

export const lesson75: Lesson = {
  id: "sci5-u7-lesson-7-5",
  code: "7-5",
  title: "Engineering Review",
  goal: "I CAN use all engineering design skills.",
  standards: ["ETS1.A", "ETS1.B"],
  vocabulary: [
    { term: "Design process", definition: "Steps to solve." },
    { term: "Criteria", definition: "Requirements." },
    { term: "Constraints", definition: "Limitations." },
    { term: "Prototype", definition: "First model." },
    { term: "Test", definition: "Try it." },
    { term: "Data", definition: "Results." },
    { term: "Iterate", definition: "Improve." },
    { term: "Problem", definition: "What needs solving." },
  ],
  concepts: [
    {
      id: "sci5-u7-engineering-review",
      title: "Engineering review",
      skill: "Combine design process, criteria/constraints and testing.",
      lesson: {
        sections: [
          {
            heading: "All engineering skills",
            body: "Follow **design process**, identify **criteria/constraints**, **prototype**, **test**, and **iterate**.",
          },
          {
            heading: "Put it together",
            body: "Use all engineering skills to solve problems.",
          },
        ],
        keyFormulas: [
          { name: "Engineering", statement: "Process + criteria + test + iterate = all skills." },
        ],
        workedExample: {
          problem: "Use all engineering skills.",
          solution: "All skills = complete engineering understanding.",
        },
      },
      questions: [
        {
          id: "sci5-u7-engineering-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Engineering skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only design"
                    },
                    {
                              "id": "b",
                              "text": "design process, criteria, testing, iterating"
                    },
                    {
                              "id": "c",
                              "text": "only testing"
                    },
                    {
                              "id": "d",
                              "text": "only criteria"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "design process, criteria, testing, iterating",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci5-u7-engineering-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Follow the design process for a problem: define, identify criteria/constraints, prototype, test, iterate.",
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
                                                  "All engineering",
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
                                                  "All engineering",
                                                  "All steps."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all steps.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**Problem -> Criteria -> Constraints -> Prototype -> Test -> Iterate.**"
          ]
},
        },
        {
          id: "sci5-u7-engineering-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Engineering is important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it's math"
                    },
                    {
                              "id": "b",
                              "text": "it solves real-world problems"
                    },
                    {
                              "id": "c",
                              "text": "it's required"
                    },
                    {
                              "id": "d",
                              "text": "it's easy"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Solves real problems."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solves real problems.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "it solves real-world problems",
          "commonErrors": [
                    "Thinks it's just required."
          ]
},
        },
        {
          id: "sci5-u7-engineering-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Design process\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Requirements."
                    },
                    {
                              "id": "b",
                              "text": "Steps to solve."
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
          id: "sci5-u7-engineering-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Criteria\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Limitations."
                    },
                    {
                              "id": "b",
                              "text": "First model."
                    },
                    {
                              "id": "c",
                              "text": "Try it."
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
          id: "sci5-u7-engineering-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Constraints\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "First model."
                    },
                    {
                              "id": "b",
                              "text": "Limitations."
                    },
                    {
                              "id": "c",
                              "text": "Try it."
                    },
                    {
                              "id": "d",
                              "text": "Results."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Constraints\" means Limitations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Constraints\" means Limitations.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Constraints** = Limitations.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u7-engineering-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Prototype\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Try it."
                    },
                    {
                              "id": "b",
                              "text": "Results."
                    },
                    {
                              "id": "c",
                              "text": "Improve."
                    },
                    {
                              "id": "d",
                              "text": "First model."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Prototype\" means First model."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Prototype\" means First model.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Prototype** = First model.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u7-engineering-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Test\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Results."
                    },
                    {
                              "id": "b",
                              "text": "Try it."
                    },
                    {
                              "id": "c",
                              "text": "Improve."
                    },
                    {
                              "id": "d",
                              "text": "What needs solving."
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
