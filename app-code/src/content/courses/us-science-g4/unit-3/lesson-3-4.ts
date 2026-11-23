import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "sci4-u3-lesson-3-4",
  code: "3-4",
  title: "Specialized Cells",
  goal: "I CAN explain how cells specialize for specific functions.",
  standards: ["LS1.A"],
  vocabulary: [
    { term: "Specialize", definition: "Have specific job." },
    { term: "Nerve cell", definition: "Sends signals." },
    { term: "Muscle cell", definition: "Contracts." },
    { term: "Red blood cell", definition: "Carries oxygen." },
    { term: "Skin cell", definition: "Protects." },
    { term: "Structure", definition: "Shape for job." },
    { term: "Function", definition: "What it does." },
    { term: "Adapt", definition: "Fit the role." },
  ],
  concepts: [
    {
      id: "sci4-u3-specialized-cells",
      title: "Specialized cells",
      skill: "Explain how different cell types have structures suited to their functions.",
      lesson: {
        sections: [
          {
            heading: "Cells have jobs",
            body: "**Specialized cells** have structures suited to their jobs: **nerve cells** are long to send signals far; **red blood cells** are disc-shaped to carry more oxygen; **muscle cells** are elongated to contract.",
          },
          {
            heading: "Structure = function",
            body: "A cell's **shape** and **parts** match its **function** — that's why specialization works.",
          },
        ],
        keyFormulas: [
          { name: "Specialization", statement: "Structure matches function." },
        ],
        workedExample: {
          problem: "Why are red blood cells disc-shaped?",
          solution: "The flat disc shape gives them more **surface area** to carry oxygen efficiently.",
        },
      },
      questions: [
        {
          id: "sci4-u3-specialized-cells-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Specialized cells' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "all the same"
                    },
                    {
                              "id": "b",
                              "text": "cells with specific jobs"
                    },
                    {
                              "id": "c",
                              "text": "dead cells"
                    },
                    {
                              "id": "d",
                              "text": "plant cells only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Specialized = specific jobs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Specialized = specific jobs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "cells with specific jobs",
          "commonErrors": [
                    "Thinks they're identical."
          ]
},
        },
        {
          id: "sci4-u3-specialized-cells-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Nerve cells are long because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they're pretty"
                    },
                    {
                              "id": "b",
                              "text": "they need to send signals far"
                    },
                    {
                              "id": "c",
                              "text": "they're weak"
                    },
                    {
                              "id": "d",
                              "text": "they're fast"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Long = send signals far."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Long = send signals far.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "they need to send signals far",
          "commonErrors": [
                    "Wrong reason."
          ]
},
        },
        {
          id: "sci4-u3-specialized-cells-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Pick a cell type. Explain how its structure helps its function.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Specialized",
                              "statement": "Structure-function link."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Links structure to function.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Red blood cells are flat discs -> more surface area -> carry more oxygen.'**",
          "commonErrors": [
                    "Cannot link.",
                    "Wrong cell."
          ]
},
        },
        {
          id: "sci4-u3-specialized-cells-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Red blood cells are disc-shaped to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "look nice"
                    },
                    {
                              "id": "b",
                              "text": "carry more oxygen"
                    },
                    {
                              "id": "c",
                              "text": "move faster"
                    },
                    {
                              "id": "d",
                              "text": "divide faster"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Disc shape = more oxygen."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Disc shape = more oxygen.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "carry more oxygen",
          "commonErrors": [
                    "Wrong reason."
          ]
},
        },
        {
          id: "sci4-u3-specialized-cells-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare two specialized cell types. How does each structure match its function?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Specialized",
                              "statement": "Comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares cells.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Links structure to function.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Nerve: long for distance; Muscle: elongated for contraction; both match jobs.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "No structure link."
          ]
},
        },
        {
          id: "sci4-u3-specialized-cells-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Specialize\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sends signals."
                    },
                    {
                              "id": "b",
                              "text": "Have specific job."
                    },
                    {
                              "id": "c",
                              "text": "Contracts."
                    },
                    {
                              "id": "d",
                              "text": "Carries oxygen."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Specialize\" means Have specific job."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Specialize\" means Have specific job.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Specialize** = Have specific job.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u3-specialized-cells-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Nerve cell\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Contracts."
                    },
                    {
                              "id": "b",
                              "text": "Carries oxygen."
                    },
                    {
                              "id": "c",
                              "text": "Protects."
                    },
                    {
                              "id": "d",
                              "text": "Sends signals."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Nerve cell\" means Sends signals."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Nerve cell\" means Sends signals.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Nerve cell** = Sends signals.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u3-specialized-cells-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Muscle cell\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Carries oxygen."
                    },
                    {
                              "id": "b",
                              "text": "Contracts."
                    },
                    {
                              "id": "c",
                              "text": "Protects."
                    },
                    {
                              "id": "d",
                              "text": "Shape for job."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Muscle cell\" means Contracts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Muscle cell\" means Contracts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Muscle cell** = Contracts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
