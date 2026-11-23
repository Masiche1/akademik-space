import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "sci5-u3-lesson-3-2",
  code: "3-2",
  title: "Cell Function",
  goal: "I CAN explain how cells carry out life processes.",
  standards: ["LS1.B"],
  vocabulary: [
    { term: "Function", definition: "What it does." },
    { term: "Respiration", definition: "Energy production." },
    { term: "Photosynthesis", definition: "Making food." },
    { term: "Reproduction", definition: "Making new cells." },
    { term: "Growth", definition: "Getting bigger." },
    { term: "Response", definition: "React to environment." },
    { term: "Homeostasis", definition: "Maintaining balance." },
    { term: "Metabolism", definition: "Chemical processes." },
  ],
  concepts: [
    {
      id: "sci5-u3-cell-function",
      title: "Cell function",
      skill: "Explain how cells carry out life processes like respiration, photosynthesis and reproduction.",
      lesson: {
        sections: [
          {
            heading: "Life processes",
            body: "Cells **respire** (make energy), **photosynthesize** (plants make food), **reproduce** (make new cells), **grow**, and **respond** to their environment.",
          },
          {
            heading: "Maintaining life",
            body: "Cells maintain **homeostasis** — internal balance — through **metabolism** (chemical processes).",
          },
        ],
        keyFormulas: [
          { name: "Cell function", statement: "Respire + photosynthesize + reproduce + grow + respond = life." },
        ],
        workedExample: {
          problem: "What does a plant cell do that an animal cell doesn't?",
          solution: "**Photosynthesis** — converts sunlight to food.",
        },
      },
      questions: [
        {
          id: "sci5-u3-cell-function-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Photosynthesis' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "breathing"
                    },
                    {
                              "id": "b",
                              "text": "making food from sunlight"
                    },
                    {
                              "id": "c",
                              "text": "reproduction"
                    },
                    {
                              "id": "d",
                              "text": "growth"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Making food from sunlight."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Making food from sunlight.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "making food from sunlight",
          "commonErrors": [
                    "Confuses with respiration."
          ]
},
        },
        {
          id: "sci5-u3-cell-function-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Respiration' in cells means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "making food"
                    },
                    {
                              "id": "b",
                              "text": "producing energy"
                    },
                    {
                              "id": "c",
                              "text": "reproducing"
                    },
                    {
                              "id": "d",
                              "text": "growing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Producing energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Producing energy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "producing energy",
          "commonErrors": [
                    "Confuses with photosynthesis."
          ]
},
        },
        {
          id: "sci5-u3-cell-function-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe two life processes cells carry out and how they contribute to life.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Cell function",
                              "statement": "Two processes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes two.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Respiration: makes energy; Photosynthesis: makes food (plants).'**",
          "commonErrors": [
                    "Fewer than two.",
                    "Wrong processes."
          ]
},
        },
        {
          id: "sci5-u3-cell-function-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Homeostasis' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "growth"
                    },
                    {
                              "id": "b",
                              "text": "maintaining internal balance"
                    },
                    {
                              "id": "c",
                              "text": "reproduction"
                    },
                    {
                              "id": "d",
                              "text": "response"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Maintaining balance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Maintaining balance.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "maintaining internal balance",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "sci5-u3-cell-function-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how cells maintain homeostasis. Why is it important?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Cell function",
                              "statement": "Homeostasis explained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains homeostasis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains importance.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Homeostasis = stable internal conditions; important because cells need stable environment to function.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No importance."
          ]
},
        },
        {
          id: "sci5-u3-cell-function-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Function\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Energy production."
                    },
                    {
                              "id": "b",
                              "text": "What it does."
                    },
                    {
                              "id": "c",
                              "text": "Making food."
                    },
                    {
                              "id": "d",
                              "text": "Making new cells."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Function\" means What it does."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Function\" means What it does.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Function** = What it does.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u3-cell-function-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Respiration\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Making food."
                    },
                    {
                              "id": "b",
                              "text": "Making new cells."
                    },
                    {
                              "id": "c",
                              "text": "Getting bigger."
                    },
                    {
                              "id": "d",
                              "text": "Energy production."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Respiration\" means Energy production."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Respiration\" means Energy production.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Respiration** = Energy production.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u3-cell-function-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Photosynthesis\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Making new cells."
                    },
                    {
                              "id": "b",
                              "text": "Making food."
                    },
                    {
                              "id": "c",
                              "text": "Getting bigger."
                    },
                    {
                              "id": "d",
                              "text": "React to environment."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Photosynthesis\" means Making food."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Photosynthesis\" means Making food.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Photosynthesis** = Making food.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
