import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "s0-u8-lesson-8-3",
  code: "8-3",
  title: "Build and Test",
  goal: "I CAN build a design and test whether it works.",
  standards: ["K-2-ETS1-2", "K-2-ETS1-3"],
  vocabulary: [
    { term: "Build", definition: "Make the design." },
    { term: "Test", definition: "Try it." },
    { term: "Works", definition: "Does its job." },
    { term: "Fail", definition: "Does not work." },
    { term: "Materials", definition: "What you build with." },
    { term: "Strong", definition: "Does not break easily." },
    { term: "Stable", definition: "Does not tip over." },
    { term: "Improve", definition: "Make better." },
  ],
  concepts: [
    {
      id: "s0-u8-build-test",
      title: "Build and test",
      skill: "Build a design using materials and test whether it works.",
      lesson: {
        sections: [
          {
            heading: "Build with materials",
            body: "To **build** a design, choose **materials** — blocks, paper, sticks, string. Think about which are **strong** and **stable** for your purpose.",
          },
          {
            heading: "Test it",
            body: "After building, **test** it — does it **work**? Does it **fail**? If it fails, figure out why and **improve** it.",
          },
        ],
        keyFormulas: [
          { name: "Build/test", statement: "Choose materials -> build -> test -> works or improve." },
        ],
        workedExample: {
          problem: "Build a tower that stands tall. What materials would you choose? How would you test it?",
          solution: "Choose **blocks** (strong, stable). Build tower. Test: does it stand? Add more blocks carefully.",
        },
      },
      questions: [
        {
          id: "s0-u8-build-test-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When building a design, you should choose materials that are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "weak"
                    },
                    {
                              "id": "b",
                              "text": "strong and suitable for the purpose"
                    },
                    {
                              "id": "c",
                              "text": "any random thing"
                    },
                    {
                              "id": "d",
                              "text": "only soft"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Strong + suitable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Strong + suitable.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**strong + suitable**",
          "commonErrors": [
                    "Picks weak materials."
          ]
},
        },
        {
          id: "s0-u8-build-test-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "After building, the next step is to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "throw it away"
                    },
                    {
                              "id": "b",
                              "text": "test it"
                    },
                    {
                              "id": "c",
                              "text": "ignore it"
                    },
                    {
                              "id": "d",
                              "text": "hide it"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Test after building."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Test after building.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**test it**",
          "commonErrors": [
                    "Skips testing."
          ]
},
        },
        {
          id: "s0-u8-build-test-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Build something simple (a tower, a bridge, a container). Describe what materials you used and how you tested it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Build/test",
                              "statement": "Materials + build + test."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes build + test.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Built tower with blocks; tested by adding weight; it stood.'**",
          "commonErrors": [
                    "No build.",
                    "No test."
          ]
},
        },
        {
          id: "s0-u8-build-test-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A design 'works' when...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it breaks"
                    },
                    {
                              "id": "b",
                              "text": "it does its job correctly"
                    },
                    {
                              "id": "c",
                              "text": "it falls over"
                    },
                    {
                              "id": "d",
                              "text": "it is pretty only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Works = does its job."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Works = does its job.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**does its job**",
          "commonErrors": [
                    "Thinks breaking is working."
          ]
},
        },
        {
          id: "s0-u8-build-test-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Build a simple design. Test it. If it fails, describe how you would improve it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Build/test",
                              "statement": "Build + test + improve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Builds + tests.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes improvement if needed.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Built bridge; it sagged; improve by adding support.'**",
          "commonErrors": [
                    "No test.",
                    "No improvement."
          ]
},
        },
        {
          id: "s0-u8-build-test-q6",
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
                              "text": "Make the design."
                    },
                    {
                              "id": "c",
                              "text": "Does its job."
                    },
                    {
                              "id": "d",
                              "text": "Does not work."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Build\" means Make the design."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Build\" means Make the design.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Build** = Make the design.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u8-build-test-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Test\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Does its job."
                    },
                    {
                              "id": "b",
                              "text": "Does not work."
                    },
                    {
                              "id": "c",
                              "text": "What you build with."
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
          id: "s0-u8-build-test-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Works\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Does not work."
                    },
                    {
                              "id": "b",
                              "text": "Does its job."
                    },
                    {
                              "id": "c",
                              "text": "What you build with."
                    },
                    {
                              "id": "d",
                              "text": "Does not break easily."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Works\" means Does its job."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Works\" means Does its job.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Works** = Does its job.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
