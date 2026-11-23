import type { Lesson } from "../../../types.ts";

export const lesson84: Lesson = {
  id: "sci3-u8-lesson-8-4",
  code: "8-4",
  title: "Engineering Design Challenge",
  goal: "I CAN design and test a solution to a problem.",
  standards: ["ETS1.A", "ETS1.B"],
  vocabulary: [
    { term: "Design", definition: "Plan solution." },
    { term: "Build", definition: "Make it." },
    { term: "Test", definition: "Try it." },
    { term: "Measure", definition: "Check results." },
    { term: "Improve", definition: "Make better." },
    { term: "Success", definition: "Meets criteria." },
    { term: "Failure", definition: "Doesn't work." },
    { term: "Iteration", definition: "Try again." },
  ],
  concepts: [
    {
      id: "sci3-u8-design-challenge",
      title: "Design challenge",
      skill: "Design, build, test and improve a solution to a problem.",
      lesson: {
        sections: [
          {
            heading: "The engineering process",
            body: "**Design** a solution, **build** it, **test** it, **measure** results, then **improve**. If it fails, try again — that's **iteration**.",
          },
          {
            heading: "Success criteria",
            body: "Success means meeting the **criteria** — what the solution needs to do. 'The bridge must hold 10 blocks.'",
          },
        ],
        keyFormulas: [
          { name: "Design process", statement: "Design -> build -> test -> measure -> improve = engineering." },
        ],
        workedExample: {
          problem: "Design a paper tower that holds a book. How would you test and improve it?",
          solution: "Build tower -> place book -> if it falls, make base wider -> test again.",
        },
      },
      questions: [
        {
          id: "sci3-u8-design-challenge-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The engineering process is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "build only"
                    },
                    {
                              "id": "b",
                              "text": "design, build, test, measure, improve"
                    },
                    {
                              "id": "c",
                              "text": "test only"
                    },
                    {
                              "id": "d",
                              "text": "design only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Design->build->test->measure->improve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Design->build->test->measure->improve.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "design, build, test, measure, improve",
          "commonErrors": [
                    "Thinks it's just building."
          ]
},
        },
        {
          id: "sci3-u8-design-challenge-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Iteration' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "giving up"
                    },
                    {
                              "id": "b",
                              "text": "trying again and improving"
                    },
                    {
                              "id": "c",
                              "text": "building once"
                    },
                    {
                              "id": "d",
                              "text": "testing never"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Iteration = try again."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Iteration = try again.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "trying again and improving",
          "commonErrors": [
                    "Thinks iteration is giving up."
          ]
},
        },
        {
          id: "sci3-u8-design-challenge-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Design a solution to a simple problem (like a bridge for toy cars). Describe build, test, and improve steps.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Design challenge",
                              "statement": "Design + build + test + improve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Designs solution.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes build/test/improve.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Design: folded paper bridge. Build: fold. Test: push car. Improve: wider folds.'**",
          "commonErrors": [
                    "Cannot design.",
                    "No testing."
          ]
},
        },
        {
          id: "sci3-u8-design-challenge-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Criteria' for success is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a failure"
                    },
                    {
                              "id": "b",
                              "text": "what the solution needs to do"
                    },
                    {
                              "id": "c",
                              "text": "a guess"
                    },
                    {
                              "id": "d",
                              "text": "a constraint"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Criteria = success requirements."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Criteria = success requirements.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "what the solution needs to do",
          "commonErrors": [
                    "Thinks criteria is failure."
          ]
},
        },
        {
          id: "sci3-u8-design-challenge-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Design a solution, build it, test it, and describe how you would improve it based on results.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Design challenge",
                              "statement": "Design + build + test + improve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Designs + builds.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Tests + improves.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Design cup holder -> build with cardboard -> test with cup -> improve if tips.'**",
          "commonErrors": [
                    "Cannot design.",
                    "No test/improve."
          ]
},
        },
        {
          id: "sci3-u8-design-challenge-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Design\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Make it."
                    },
                    {
                              "id": "b",
                              "text": "Plan solution."
                    },
                    {
                              "id": "c",
                              "text": "Try it."
                    },
                    {
                              "id": "d",
                              "text": "Check results."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Design\" means Plan solution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Design\" means Plan solution.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Design** = Plan solution.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u8-design-challenge-q7",
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
                              "text": "Check results."
                    },
                    {
                              "id": "c",
                              "text": "Make better."
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
          id: "sci3-u8-design-challenge-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Test\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Check results."
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
                              "text": "Meets criteria."
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
