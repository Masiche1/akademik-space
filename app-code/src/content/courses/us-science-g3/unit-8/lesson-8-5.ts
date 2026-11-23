import type { Lesson } from "../../../types.ts";

export const lesson85: Lesson = {
  id: "sci3-u8-lesson-8-5",
  code: "8-5",
  title: "Engineering Review",
  goal: "I CAN describe engineering and the design process.",
  standards: ["ETS1.A", "ETS1.B"],
  vocabulary: [
    { term: "Engineer", definition: "Designs solutions." },
    { term: "Problem", definition: "Something to solve." },
    { term: "Solution", definition: "How to fix it." },
    { term: "Constraint", definition: "Limit to work within." },
    { term: "Test", definition: "Try it out." },
    { term: "Improve", definition: "Make better." },
    { term: "Criteria", definition: "Success requirements." },
    { term: "Iteration", definition: "Try again." },
  ],
  concepts: [
    {
      id: "sci3-u8-engineering-review",
      title: "Engineering review",
      skill: "Combine engineering concepts and design process.",
      lesson: {
        sections: [
          {
            heading: "All engineering",
            body: "**Engineers** solve **problems** by designing **solutions** within **constraints**, testing against **criteria**, and **improving** through **iteration**.",
          },
          {
            heading: "Put it together",
            body: "Describe the engineering process and apply it to a problem.",
          },
        ],
        keyFormulas: [
          { name: "Engineering", statement: "Problem + solution + constraints + test + improve = engineering." },
        ],
        workedExample: {
          problem: "Describe how an engineer would solve a problem from start to finish.",
          solution: "Define problem -> design solution -> build -> test -> measure -> improve.",
        },
      },
      questions: [
        {
          id: "sci3-u8-engineering-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Engineering includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only building"
                    },
                    {
                              "id": "b",
                              "text": "problem, solution, constraints, test, improve"
                    },
                    {
                              "id": "c",
                              "text": "only designing"
                    },
                    {
                              "id": "d",
                              "text": "only testing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All engineering skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All engineering skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "problem, solution, constraints, test, improve",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci3-u8-engineering-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe the engineering process and apply it to a real-world problem.",
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
                                                  "Process + application."
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
                                                  "Process + application."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Describes process.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Applies to problem.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Problem: bridge falls. Process: define, design, test, improve.'**"
          ]
},
        },
        {
          id: "sci3-u8-engineering-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Engineers are important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they build toys"
                    },
                    {
                              "id": "b",
                              "text": "they solve problems that help people"
                    },
                    {
                              "id": "c",
                              "text": "they only draw"
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
                              "statement": "Engineers solve problems for people."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Engineers solve problems for people.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "they solve problems that help people",
          "commonErrors": [
                    "Thinks engineers are useless."
          ]
},
        },
        {
          id: "sci3-u8-engineering-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Engineer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Something to solve."
                    },
                    {
                              "id": "b",
                              "text": "Designs solutions."
                    },
                    {
                              "id": "c",
                              "text": "How to fix it."
                    },
                    {
                              "id": "d",
                              "text": "Limit to work within."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Engineer\" means Designs solutions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Engineer\" means Designs solutions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Engineer** = Designs solutions.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u8-engineering-review-q5",
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
                              "text": "Limit to work within."
                    },
                    {
                              "id": "c",
                              "text": "Try it out."
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
          id: "sci3-u8-engineering-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Solution\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Limit to work within."
                    },
                    {
                              "id": "b",
                              "text": "How to fix it."
                    },
                    {
                              "id": "c",
                              "text": "Try it out."
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
                              "statement": "\"Solution\" means How to fix it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Solution\" means How to fix it.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Solution** = How to fix it.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u8-engineering-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Constraint\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Try it out."
                    },
                    {
                              "id": "b",
                              "text": "Make better."
                    },
                    {
                              "id": "c",
                              "text": "Success requirements."
                    },
                    {
                              "id": "d",
                              "text": "Limit to work within."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Constraint\" means Limit to work within."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Constraint\" means Limit to work within.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Constraint** = Limit to work within.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u8-engineering-review-q8",
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
                              "text": "Try it out."
                    },
                    {
                              "id": "c",
                              "text": "Success requirements."
                    },
                    {
                              "id": "d",
                              "text": "Try again."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Test\" means Try it out."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Test\" means Try it out.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Test** = Try it out.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
