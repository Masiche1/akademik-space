import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "s0-u8-lesson-8-1",
  code: "8-1",
  title: "The Design Process",
  goal: "I CAN describe the steps of designing and building something.",
  standards: ["K-2-ETS1-1", "K-2-ETS1-2", "K-2-ETS1-3"],
  vocabulary: [
    { term: "Design", definition: "Plan and make something." },
    { term: "Problem", definition: "Something to solve." },
    { term: "Idea", definition: "A way to solve it." },
    { term: "Build", definition: "Make the design." },
    { term: "Test", definition: "Try it to see if it works." },
    { term: "Improve", definition: "Make it better." },
    { term: "Engineer", definition: "Someone who designs solutions." },
    { term: "Solution", definition: "A way to solve a problem." },
  ],
  concepts: [
    {
      id: "s0-u8-design-process",
      title: "The design process",
      skill: "Describe the steps: problem -> idea -> build -> test -> improve.",
      lesson: {
        sections: [
          {
            heading: "Design steps",
            body: "To **design** something: find a **problem**, think of an **idea** (a **solution**), **build** it, **test** it, and **improve** it if needed. This is the **design process**.",
          },
          {
            heading: "Iterate",
            body: "Designers often **improve** — they test, find problems, and make the design **better**. Good designs go through this cycle.",
          },
        ],
        keyFormulas: [
          { name: "Design process", statement: "Problem -> idea -> build -> test -> improve (repeat)." },
        ],
        workedExample: {
          problem: "You want to build a bridge for toy cars. What are the design steps?",
          solution: "Problem: cars fall. Idea: build a bridge. Build: make it. Test: drive cars. Improve: fix problems.",
        },
      },
      questions: [
        {
          id: "s0-u8-design-process-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The first step of design is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "build"
                    },
                    {
                              "id": "b",
                              "text": "find a problem"
                    },
                    {
                              "id": "c",
                              "text": "test"
                    },
                    {
                              "id": "d",
                              "text": "improve"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Start with a problem."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Start with a problem.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**find a problem**",
          "commonErrors": [
                    "Picks wrong step."
          ]
},
        },
        {
          id: "s0-u8-design-process-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "After building a design, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "stop"
                    },
                    {
                              "id": "b",
                              "text": "test it to see if it works"
                    },
                    {
                              "id": "c",
                              "text": "throw it away"
                    },
                    {
                              "id": "d",
                              "text": "ignore it"
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
          id: "s0-u8-design-process-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose a problem (like a toy that falls). Describe your design idea, what you would build, and how you would test it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Design process",
                              "statement": "Problem + idea + build + test."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes all steps.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Problem: car falls; Idea: ramp; Build: blocks; Test: roll car.'**",
          "commonErrors": [
                    "Missing steps.",
                    "No problem."
          ]
},
        },
        {
          id: "s0-u8-design-process-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Improve' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "break it"
                    },
                    {
                              "id": "b",
                              "text": "make the design better"
                    },
                    {
                              "id": "c",
                              "text": "throw it away"
                    },
                    {
                              "id": "d",
                              "text": "ignore it"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Improve = make better."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Improve = make better.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**make better**",
          "commonErrors": [
                    "Confuses with break."
          ]
},
        },
        {
          id: "s0-u8-design-process-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Design something to solve a problem. List the steps: problem, idea, build, test, improve.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Design process",
                              "statement": "All design steps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lists problem + idea.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Lists build + test + improve.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Problem: water spills; Idea: lid; Build: cover; Test: pour; Improve: seal better.'**",
          "commonErrors": [
                    "Missing steps.",
                    "No problem."
          ]
},
        },
        {
          id: "s0-u8-design-process-q6",
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
                              "text": "Plan and make something."
                    },
                    {
                              "id": "c",
                              "text": "A way to solve it."
                    },
                    {
                              "id": "d",
                              "text": "Make the design."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Design\" means Plan and make something."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Design\" means Plan and make something.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Design** = Plan and make something.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u8-design-process-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Problem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A way to solve it."
                    },
                    {
                              "id": "b",
                              "text": "Make the design."
                    },
                    {
                              "id": "c",
                              "text": "Try it to see if it works."
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
          id: "s0-u8-design-process-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Idea\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Make the design."
                    },
                    {
                              "id": "b",
                              "text": "A way to solve it."
                    },
                    {
                              "id": "c",
                              "text": "Try it to see if it works."
                    },
                    {
                              "id": "d",
                              "text": "Make it better."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Idea\" means A way to solve it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Idea\" means A way to solve it.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Idea** = A way to solve it.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
