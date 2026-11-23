import type { Lesson } from "../../../types.ts";

export const lesson75: Lesson = {
  id: "s1-u7-lesson-7-5",
  code: "7-5",
  title: "Engineering Review",
  goal: "I CAN solve problems using the engineering design process.",
  standards: ["1-ETS1-1", "1-ETS1-2", "1-ETS1-3"],
  vocabulary: [
    { term: "Problem", definition: "Needs solving." },
    { term: "Plan", definition: "Decide approach." },
    { term: "Build", definition: "Make solution." },
    { term: "Test", definition: "Try it." },
    { term: "Improve", definition: "Make better." },
    { term: "Material", definition: "What to build with." },
    { term: "Design", definition: "Plan solution." },
    { term: "Process", definition: "Steps followed." },
  ],
  concepts: [
    {
      id: "s1-u7-engineering-review",
      title: "Engineering review",
      skill: "Combine problem identification, planning, building, testing and improving.",
      lesson: {
        sections: [
          {
            heading: "All engineering skills",
            body: "Engineering solves **problems** through **design process**: identify problem, plan, build, test, improve. **Materials** are chosen for their properties.",
          },
          {
            heading: "Put it together",
            body: "Identify a problem and solve it using the full design process.",
          },
        ],
        keyFormulas: [
          { name: "Engineering", statement: "Problem -> plan -> build -> test -> improve = design process." },
        ],
        workedExample: {
          problem: "Solve a real problem using the full design process.",
          solution: "All steps followed = engineering solution.",
        },
      },
      questions: [
        {
          id: "s1-u7-engineering-review-q1",
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
                              "text": "problem, plan, build, test, improve"
                    },
                    {
                              "id": "c",
                              "text": "only planning"
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
                              "statement": "All engineering steps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All engineering steps.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**all steps**",
          "commonErrors": [
                    "Lists one step."
          ]
},
        },
        {
          id: "s1-u7-engineering-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Identify a problem and solve it using the full engineering design process.",
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
                                                  "Engineering",
                                                  "All design process steps."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Engineering",
                                                  "All design process steps."
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
                              "markCode": "A"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Problem: X; plan with materials; build; test; improve.'**"
          ]
},
        },
        {
          id: "s1-u7-engineering-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Materials are chosen for...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "color only"
                    },
                    {
                              "id": "b",
                              "text": "their properties that fit the use"
                    },
                    {
                              "id": "c",
                              "text": "size only"
                    },
                    {
                              "id": "d",
                              "text": "price only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Properties determine material choice."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Properties determine material choice.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**properties fit use**",
          "commonErrors": [
                    "Picks color/size only."
          ]
},
        },
        {
          id: "s1-u7-engineering-review-q4",
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
                              "text": "Make solution."
                    },
                    {
                              "id": "d",
                              "text": "Try it."
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
          id: "s1-u7-engineering-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Plan\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Make solution."
                    },
                    {
                              "id": "b",
                              "text": "Try it."
                    },
                    {
                              "id": "c",
                              "text": "Make better."
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
          id: "s1-u7-engineering-review-q6",
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
                              "text": "Make solution."
                    },
                    {
                              "id": "c",
                              "text": "Make better."
                    },
                    {
                              "id": "d",
                              "text": "What to build with."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Build\" means Make solution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Build\" means Make solution.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Build** = Make solution.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u7-engineering-review-q7",
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
                              "text": "What to build with."
                    },
                    {
                              "id": "c",
                              "text": "Plan solution."
                    },
                    {
                              "id": "d",
                              "text": "Try it."
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "s1-u7-engineering-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Improve\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What to build with."
                    },
                    {
                              "id": "b",
                              "text": "Make better."
                    },
                    {
                              "id": "c",
                              "text": "Plan solution."
                    },
                    {
                              "id": "d",
                              "text": "Steps followed."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Improve\" means Make better."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Improve\" means Make better.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Improve** = Make better.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
