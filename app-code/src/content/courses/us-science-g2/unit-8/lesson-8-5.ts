import type { Lesson } from "../../../types.ts";

export const lesson85: Lesson = {
  id: "sci2-u8-lesson-8-5",
  code: "8-5",
  title: "Engineering Review",
  goal: "I CAN design, test and improve solutions to problems.",
  standards: ["NGSS K-2-ETS1-1", "NGSS K-2-ETS1-2", "NGSS K-2-ETS1-3"],
  vocabulary: [
    { term: "Engineer", definition: "Designs solutions." },
    { term: "Problem", definition: "Something to solve." },
    { term: "Solution", definition: "How to fix it." },
    { term: "Process", definition: "Steps to follow." },
    { term: "Test", definition: "Try it out." },
    { term: "Improve", definition: "Make better." },
    { term: "Material", definition: "What made of." },
    { term: "Criteria", definition: "What it must do." },
  ],
  concepts: [
    {
      id: "sci2-u8-engineering-review",
      title: "Engineering review",
      skill: "Combine design, process, testing and material selection.",
      lesson: {
        sections: [
          {
            heading: "All engineering skills",
            body: "Engineering involves **defining problems**, **designing solutions**, following the **design process**, **testing** and **improving**, and **choosing materials** wisely.",
          },
          {
            heading: "Put it together",
            body: "Solve a problem using the full engineering design process.",
          },
        ],
        keyFormulas: [
          { name: "Engineering review", statement: "Problem + design + process + test + materials = all engineering skills." },
        ],
        workedExample: {
          problem: "Solve a problem using the full engineering process: define, design, build, test, improve.",
          solution: "All engineering skills = complete solution.",
        },
      },
      questions: [
        {
          id: "sci2-u8-engineering-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Engineering skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only building"
                    },
                    {
                              "id": "b",
                              "text": "define, design, process, test, materials"
                    },
                    {
                              "id": "c",
                              "text": "only testing"
                    },
                    {
                              "id": "d",
                              "text": "only materials"
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
          "finalAnswer": "**all skills**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci2-u8-engineering-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve a problem using the engineering design process: define problem, brainstorm, plan, build, test, improve.",
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
                                                  "Full process."
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
                                                  "Full process."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Follows full process.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Problem: pencil rolls. Design: holder. Build: box. Test: works. Improve: wider.'**"
          ]
},
        },
        {
          id: "sci2-u8-engineering-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The engineering design process helps us...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "guess"
                    },
                    {
                              "id": "b",
                              "text": "solve problems systematically"
                    },
                    {
                              "id": "c",
                              "text": "avoid thinking"
                    },
                    {
                              "id": "d",
                              "text": "make mistakes"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Systematic problem-solving."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Systematic problem-solving.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**systematic**",
          "commonErrors": [
                    "Thinks it's guessing."
          ]
},
        },
        {
          id: "sci2-u8-engineering-review-q4",
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
                              "text": "Steps to follow."
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
          id: "sci2-u8-engineering-review-q5",
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
                              "text": "Steps to follow."
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
          id: "sci2-u8-engineering-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Solution\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Steps to follow."
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
          id: "sci2-u8-engineering-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Process\" mean?",
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
                              "text": "What made of."
                    },
                    {
                              "id": "d",
                              "text": "Steps to follow."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Process\" means Steps to follow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Process\" means Steps to follow.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Process** = Steps to follow.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u8-engineering-review-q8",
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
                              "text": "What made of."
                    },
                    {
                              "id": "d",
                              "text": "What it must do."
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
