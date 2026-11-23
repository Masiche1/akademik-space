import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "sci2-u8-lesson-8-2",
  code: "8-2",
  title: "Engineering Design Process",
  goal: "I CAN follow the steps of the engineering design process.",
  standards: ["NGSS K-2-ETS1-1", "NGSS K-2-ETS1-2"],
  vocabulary: [
    { term: "Process", definition: "Steps to follow." },
    { term: "Ask", definition: "Define the problem." },
    { term: "Imagine", definition: "Brainstorm solutions." },
    { term: "Plan", definition: "Choose a solution." },
    { term: "Create", definition: "Build prototype." },
    { term: "Improve", definition: "Test and fix." },
    { term: "Test", definition: "Try it out." },
    { term: "Evaluate", definition: "Check if it works." },
    { term: "Iterate", definition: "Repeat to improve." },
    { term: "Solution", definition: "Final answer." },
  ],
  concepts: [
    {
      id: "sci2-u8-design-process",
      title: "Engineering design process",
      skill: "Follow the steps: ask, imagine, plan, create, improve.",
      lesson: {
        sections: [
          {
            heading: "Design process steps",
            body: "The **engineering design process** has steps: **Ask** (define problem), **Imagine** (brainstorm), **Plan** (choose solution), **Create** (build prototype), **Improve** (test and fix).",
          },
          {
            heading: "Iterate",
            body: "You may need to **iterate** — repeat the process to make your solution better based on testing.",
          },
        ],
        keyFormulas: [
          { name: "Design process", statement: "Ask -> imagine -> plan -> create -> improve (iterate)." },
        ],
        workedExample: {
          problem: "You want to build a bridge from blocks that holds a toy car. What are the steps?",
          solution: "Ask: how to hold car. Imagine: arch, flat, tower. Plan: choose design. Create: build. Improve: test and fix.",
        },
      },
      questions: [
        {
          id: "sci2-u8-design-process-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The first step in engineering design is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "build"
                    },
                    {
                              "id": "b",
                              "text": "ask/define the problem"
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
                              "statement": "Ask = define problem."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ask = define problem.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**ask**",
          "commonErrors": [
                    "Picks later step."
          ]
},
        },
        {
          id: "sci2-u8-design-process-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Iterate' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "stop"
                    },
                    {
                              "id": "b",
                              "text": "repeat the process to improve"
                    },
                    {
                              "id": "c",
                              "text": "give up"
                    },
                    {
                              "id": "d",
                              "text": "build once"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Iterate = repeat to improve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Iterate = repeat to improve.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**repeat to improve**",
          "commonErrors": [
                    "Confuses with stopping."
          ]
},
        },
        {
          id: "sci2-u8-design-process-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "List the steps of the engineering design process in order.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Design process",
                              "statement": "Ask -> imagine -> plan -> create -> improve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lists steps in order.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**Ask -> imagine -> plan -> create -> improve.**",
          "commonErrors": [
                    "Wrong order.",
                    "Missing steps."
          ]
},
        },
        {
          id: "sci2-u8-design-process-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'prototype' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the final product"
                    },
                    {
                              "id": "b",
                              "text": "a first version to test"
                    },
                    {
                              "id": "c",
                              "text": "a problem"
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
                              "statement": "Prototype = first version."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Prototype = first version.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**first version**",
          "commonErrors": [
                    "Confuses with final."
          ]
},
        },
        {
          id: "sci2-u8-design-process-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Follow the design process for a simple problem. Describe each step.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Design process",
                              "statement": "All steps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Follows ask-imagine.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Follows plan-create-improve.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Ask: hold books. Imagine: box. Plan: build. Create: make box. Improve: test.'**",
          "commonErrors": [
                    "Cannot follow.",
                    "Missing steps."
          ]
},
        },
        {
          id: "sci2-u8-design-process-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Process\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Define the problem."
                    },
                    {
                              "id": "b",
                              "text": "Steps to follow."
                    },
                    {
                              "id": "c",
                              "text": "Brainstorm solutions."
                    },
                    {
                              "id": "d",
                              "text": "Choose a solution."
                    }
          ],
          "correctChoiceId": "b"
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
          id: "sci2-u8-design-process-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ask\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Brainstorm solutions."
                    },
                    {
                              "id": "b",
                              "text": "Choose a solution."
                    },
                    {
                              "id": "c",
                              "text": "Build prototype."
                    },
                    {
                              "id": "d",
                              "text": "Define the problem."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ask\" means Define the problem."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ask\" means Define the problem.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ask** = Define the problem.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u8-design-process-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Imagine\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Choose a solution."
                    },
                    {
                              "id": "b",
                              "text": "Brainstorm solutions."
                    },
                    {
                              "id": "c",
                              "text": "Build prototype."
                    },
                    {
                              "id": "d",
                              "text": "Test and fix."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Imagine\" means Brainstorm solutions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Imagine\" means Brainstorm solutions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Imagine** = Brainstorm solutions.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
