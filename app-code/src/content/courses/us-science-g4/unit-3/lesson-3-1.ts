import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "sci4-u3-lesson-3-1",
  code: "3-1",
  title: "What is a Cell?",
  goal: "I CAN explain what cells are and why they're important.",
  standards: ["LS1.A"],
  vocabulary: [
    { term: "Cell", definition: "Basic unit of life." },
    { term: "Living thing", definition: "Something alive." },
    { term: "Organism", definition: "Living thing." },
    { term: "Nucleus", definition: "Control center." },
    { term: "Membrane", definition: "Outer boundary." },
    { term: "Cytoplasm", definition: "Inside fluid." },
    { term: "Organ", definition: "Body part." },
    { term: "Tissue", definition: "Group of cells." },
  ],
  concepts: [
    {
      id: "sci4-u3-cell-basics",
      title: "What is a cell?",
      skill: "Explain that cells are the basic unit of all living things.",
      lesson: {
        sections: [
          {
            heading: "Building blocks of life",
            body: "A **cell** is the **basic unit** of all **living things**. Every organism — from bacteria to humans — is made of cells.",
          },
          {
            heading: "Cell parts",
            body: "Key parts: **nucleus** (control center), **membrane** (outer boundary), **cytoplasm** (inside fluid). Cells group into **tissues** -> **organs** -> **organ systems**.",
          },
        ],
        keyFormulas: [
          { name: "Cell", statement: "Cells -> tissues -> organs -> systems -> organism." },
        ],
        workedExample: {
          problem: "Why can't you see cells with your eyes?",
          solution: "Cells are **microscopic** — too small to see without a microscope.",
        },
      },
      questions: [
        {
          id: "sci4-u3-cell-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'cell' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a tissue"
                    },
                    {
                              "id": "b",
                              "text": "the basic unit of life"
                    },
                    {
                              "id": "c",
                              "text": "an organ"
                    },
                    {
                              "id": "d",
                              "text": "a system"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Cell = basic unit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cell = basic unit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "the basic unit of life",
          "commonErrors": [
                    "Confuses with larger structures."
          ]
},
        },
        {
          id: "sci4-u3-cell-basics-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'nucleus' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the boundary"
                    },
                    {
                              "id": "b",
                              "text": "the control center"
                    },
                    {
                              "id": "c",
                              "text": "the fluid"
                    },
                    {
                              "id": "d",
                              "text": "the wall"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Nucleus = control center."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nucleus = control center.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "the control center",
          "commonErrors": [
                    "Wrong part."
          ]
},
        },
        {
          id: "sci4-u3-cell-basics-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Explain how cells are organized from smallest to largest unit.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Cells",
                              "statement": "Organization order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Orders correctly.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Cells -> tissues -> organs -> organ systems -> organism.**",
          "commonErrors": [
                    "Wrong order.",
                    "Missing levels."
          ]
},
        },
        {
          id: "sci4-u3-cell-basics-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "All living things are made of...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "rocks"
                    },
                    {
                              "id": "b",
                              "text": "cells"
                    },
                    {
                              "id": "c",
                              "text": "water"
                    },
                    {
                              "id": "d",
                              "text": "air"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All living things = cells."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All living things = cells.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "cells",
          "commonErrors": [
                    "Thinks non-living parts."
          ]
},
        },
        {
          id: "sci4-u3-cell-basics-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare a single-celled organism (bacteria) to a multi-celled organism (human). How are they similar and different?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Cells",
                              "statement": "Comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares organisms.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Identifies similarities/differences.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Both made of cells; bacteria = 1 cell, humans = trillions of cells.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "Wrong facts."
          ]
},
        },
        {
          id: "sci4-u3-cell-basics-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Cell\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Something alive."
                    },
                    {
                              "id": "b",
                              "text": "Basic unit of life."
                    },
                    {
                              "id": "c",
                              "text": "Living thing."
                    },
                    {
                              "id": "d",
                              "text": "Control center."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Cell\" means Basic unit of life."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Cell\" means Basic unit of life.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Cell** = Basic unit of life.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u3-cell-basics-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Living thing\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Living thing."
                    },
                    {
                              "id": "b",
                              "text": "Control center."
                    },
                    {
                              "id": "c",
                              "text": "Outer boundary."
                    },
                    {
                              "id": "d",
                              "text": "Something alive."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Living thing\" means Something alive."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Living thing\" means Something alive.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Living thing** = Something alive.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u3-cell-basics-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Organism\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Control center."
                    },
                    {
                              "id": "b",
                              "text": "Living thing."
                    },
                    {
                              "id": "c",
                              "text": "Outer boundary."
                    },
                    {
                              "id": "d",
                              "text": "Inside fluid."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Organism\" means Living thing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Organism\" means Living thing.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Organism** = Living thing.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
