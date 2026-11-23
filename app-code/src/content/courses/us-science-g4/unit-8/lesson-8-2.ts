import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "sci4-u8-lesson-8-2",
  code: "8-2",
  title: "Testing and Improving",
  goal: "I CAN test prototypes and improve designs based on results.",
  standards: ["ETS1.B"],
  vocabulary: [
    { term: "Test", definition: "Try it out." },
    { term: "Results", definition: "What happened." },
    { term: "Improve", definition: "Make better." },
    { term: "Failure", definition: "Didn't work." },
    { term: "Success", definition: "Worked." },
    { term: "Data", definition: "Measurements." },
    { term: "Analyze", definition: "Study results." },
    { term: "Iterate", definition: "Repeat process." },
  ],
  concepts: [
    {
      id: "sci4-u8-testing-improving",
      title: "Testing and improving",
      skill: "Test prototypes, analyze results and improve designs.",
      lesson: {
        sections: [
          {
            heading: "Try and fix",
            body: "**Test** your prototype, collect **data**, **analyze** results, and **improve** the design. **Failure** is part of learning — **iterate** (repeat) until it works.",
          },
          {
            heading: "Example",
            body: "Paper bridge test: does it hold books? If it collapses, add supports and test again.",
          },
        ],
        keyFormulas: [
          { name: "Improve", statement: "Test -> analyze -> improve -> test again = iteration." },
        ],
        workedExample: {
          problem: "Your paper tower falls at 5 books. How do you improve it?",
          solution: "Analyze why (weak base?), add triangular supports, retest with more books.",
        },
      },
      questions: [
        {
          id: "sci4-u8-testing-improving-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Iterate' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "give up"
                    },
                    {
                              "id": "b",
                              "text": "repeat the process"
                    },
                    {
                              "id": "c",
                              "text": "test once"
                    },
                    {
                              "id": "d",
                              "text": "stop improving"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Iterate = repeat."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Iterate = repeat.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "repeat the process",
          "commonErrors": [
                    "Thinks it's giving up."
          ]
},
        },
        {
          id: "sci4-u8-testing-improving-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "When a prototype fails, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "throw it away"
                    },
                    {
                              "id": "b",
                              "text": "analyze and improve"
                    },
                    {
                              "id": "c",
                              "text": "stop"
                    },
                    {
                              "id": "d",
                              "text": "blame the materials"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Analyze + improve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Analyze + improve.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "analyze and improve",
          "commonErrors": [
                    "Gives up."
          ]
},
        },
        {
          id: "sci4-u8-testing-improving-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Your design fails a test. Describe how you would analyze the failure and improve.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Improve",
                              "statement": "Analysis + improvement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Analyzes failure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes improvement.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Bridge collapsed at middle; add support there; retest.'**",
          "commonErrors": [
                    "Gives up.",
                    "No analysis."
          ]
},
        },
        {
          id: "sci4-u8-testing-improving-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Data' in testing is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "guesses"
                    },
                    {
                              "id": "b",
                              "text": "measurements and observations"
                    },
                    {
                              "id": "c",
                              "text": "opinions"
                    },
                    {
                              "id": "d",
                              "text": "plans"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Data = measurements."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Data = measurements.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "measurements and observations",
          "commonErrors": [
                    "Confuses with guesses."
          ]
},
        },
        {
          id: "sci4-u8-testing-improving-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Design a test for a prototype. What data would you collect and how would it help you improve?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Improve",
                              "statement": "Test design + data use."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Designs test.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains data use.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Test bridge with increasing weight; record max load; use to strengthen weak points.'**",
          "commonErrors": [
                    "Cannot design.",
                    "No data use."
          ]
},
        },
        {
          id: "sci4-u8-testing-improving-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Test\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What happened."
                    },
                    {
                              "id": "b",
                              "text": "Try it out."
                    },
                    {
                              "id": "c",
                              "text": "Make better."
                    },
                    {
                              "id": "d",
                              "text": "Didn't work."
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
        {
          id: "sci4-u8-testing-improving-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Results\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Make better."
                    },
                    {
                              "id": "b",
                              "text": "Didn't work."
                    },
                    {
                              "id": "c",
                              "text": "Worked."
                    },
                    {
                              "id": "d",
                              "text": "What happened."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Results\" means What happened."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Results\" means What happened.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Results** = What happened.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u8-testing-improving-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Improve\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Didn't work."
                    },
                    {
                              "id": "b",
                              "text": "Make better."
                    },
                    {
                              "id": "c",
                              "text": "Worked."
                    },
                    {
                              "id": "d",
                              "text": "Measurements."
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
