import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "s1-u7-lesson-7-2",
  code: "7-2",
  title: "Planning a Design",
  goal: "I CAN plan a solution using materials.",
  standards: ["1-ETS1-2"],
  vocabulary: [
    { term: "Design", definition: "Plan a solution." },
    { term: "Plan", definition: "Decide what to do." },
    { term: "Material", definition: "What to build with." },
    { term: "Build", definition: "Make the solution." },
    { term: "Test", definition: "Try it out." },
    { term: "Improve", definition: "Make better." },
    { term: "Idea", definition: "Possible solution." },
    { term: "Sketch", definition: "Quick drawing." },
  ],
  concepts: [
    {
      id: "s1-u7-design-plan",
      title: "Planning a design",
      skill: "Plan a solution: choose materials, sketch ideas, decide how to build.",
      lesson: {
        sections: [
          {
            heading: "Plan before building",
            body: "To **design** a solution, **plan** first: choose **materials**, **sketch** your idea, decide how to **build** it.",
          },
          {
            heading: "Iterate",
            body: "Engineering is **iterative** — you **build**, **test** it, and **improve** it. First designs often need changes.",
          },
        ],
        keyFormulas: [
          { name: "Design", statement: "Plan -> choose materials -> sketch -> build -> test -> improve." },
        ],
        workedExample: {
          problem: "Plan a solution for 'pencil rolls off desk'.",
          solution: "Materials: cup or box. Sketch: pencil holder. Build: put cup on desk. Test: does pencil stay? Improve if needed.",
        },
      },
      questions: [
        {
          id: "s1-u7-design-plan-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The first step in engineering design is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "build immediately"
                    },
                    {
                              "id": "b",
                              "text": "identify the problem and plan"
                    },
                    {
                              "id": "c",
                              "text": "throw it away"
                    },
                    {
                              "id": "d",
                              "text": "test it"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Identify problem + plan first."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identify problem + plan first.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**problem + plan**",
          "commonErrors": [
                    "Picks build/test first."
          ]
},
        },
        {
          id: "s1-u7-design-plan-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Iterative' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "do it once"
                    },
                    {
                              "id": "b",
                              "text": "build, test, improve repeatedly"
                    },
                    {
                              "id": "c",
                              "text": "never change"
                    },
                    {
                              "id": "d",
                              "text": "only plan"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Iterative = repeat improve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Iterative = repeat improve.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**repeat improve**",
          "commonErrors": [
                    "Picks one-time."
          ]
},
        },
        {
          id: "s1-u7-design-plan-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Plan a solution to a problem. Choose materials, sketch your idea, and describe how you'll build it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Design",
                              "statement": "Materials + sketch + build plan."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plans solution fully.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Materials: cardboard. Sketch: bridge. Build: fold cardboard.'**",
          "commonErrors": [
                    "No plan.",
                    "Missing materials."
          ]
},
        },
        {
          id: "s1-u7-design-plan-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Improve' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "make worse"
                    },
                    {
                              "id": "b",
                              "text": "make better after testing"
                    },
                    {
                              "id": "c",
                              "text": "throw away"
                    },
                    {
                              "id": "d",
                              "text": "never change"
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
                    "Confuses with worsen."
          ]
},
        },
        {
          id: "s1-u7-design-plan-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Design a solution to a simple problem. Sketch it, list materials, and explain how you'd test it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Design",
                              "statement": "Sketch + materials + test."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sketches design.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Lists materials + test plan.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Sketch pencil holder; materials: cup; test: roll pencil near it.'**",
          "commonErrors": [
                    "No sketch.",
                    "No test plan."
          ]
},
        },
        {
          id: "s1-u7-design-plan-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Design\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Decide what to do."
                    },
                    {
                              "id": "b",
                              "text": "Plan a solution."
                    },
                    {
                              "id": "c",
                              "text": "What to build with."
                    },
                    {
                              "id": "d",
                              "text": "Make the solution."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Design\" means Plan a solution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Design\" means Plan a solution.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Design** = Plan a solution.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u7-design-plan-q7",
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
                              "text": "Make the solution."
                    },
                    {
                              "id": "c",
                              "text": "Try it out."
                    },
                    {
                              "id": "d",
                              "text": "Decide what to do."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Plan\" means Decide what to do."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Plan\" means Decide what to do.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Plan** = Decide what to do.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u7-design-plan-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Material\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Make the solution."
                    },
                    {
                              "id": "b",
                              "text": "What to build with."
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
      ],
    },
  ],
};
