import type { Lesson } from "../../../types.ts";

export const lesson44: Lesson = {
  id: "sci6-u4-lesson-4-4",
  code: "4-4",
  title: "Cell Specialization",
  goal: "I CAN explain how cells specialize for different functions.",
  standards: ["LS1.A"],
  vocabulary: [
    { term: "Specialization", definition: "Different jobs." },
    { term: "Differentiation", definition: "Becoming different." },
    { term: "Tissue", definition: "Group of similar cells." },
    { term: "Organ", definition: "Group of tissues." },
    { term: "Muscle cell", definition: "Contracts." },
    { term: "Nerve cell", definition: "Transmits signals." },
    { term: "Red blood cell", definition: "Carries oxygen." },
    { term: "Structure", definition: "Shape for function." },
  ],
  concepts: [
    {
      id: "sci6-u4-cell-specialization",
      title: "Cell specialization",
      skill: "Explain how cells specialize for different functions in the body.",
      lesson: {
        sections: [
          {
            heading: "Specialization",
            body: "Cells **specialize** for specific jobs — **muscle cells** contract, **nerve cells** transmit signals, **red blood cells** carry oxygen.",
          },
          {
            heading: "Structure-function",
            body: "Cell **structure** relates to **function**: nerve cells have long branches for signaling; red blood cells are flat for flexibility.",
          },
        ],
        keyFormulas: [
          { name: "Specialization", statement: "Cells specialize -> tissues -> organs -> systems = body organization." },
        ],
        workedExample: {
          problem: "Why do red blood cells have a biconcave shape?",
          solution: "",
        },
      },
      questions: [
        {
          id: "sci6-u4-cell-specialization-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Cell specialization' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "all cells are same"
                    },
                    {
                              "id": "b",
                              "text": "cells have different jobs"
                    },
                    {
                              "id": "c",
                              "text": "cells don't work"
                    },
                    {
                              "id": "d",
                              "text": "cells are simple"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Different jobs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Different jobs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "cells have different jobs",
          "commonErrors": [
                    "Confuses with unspecialized."
          ]
},
        },
        {
          id: "sci6-u4-cell-specialization-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Red blood cells' specialize in...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "contracting"
                    },
                    {
                              "id": "b",
                              "text": "carrying oxygen"
                    },
                    {
                              "id": "c",
                              "text": "transmitting signals"
                    },
                    {
                              "id": "d",
                              "text": "making energy"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Carrying oxygen."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Carrying oxygen.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "carrying oxygen",
          "commonErrors": [
                    "Wrong function."
          ]
},
        },
        {
          id: "sci6-u4-cell-specialization-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Explain how muscle cells and nerve cells are specialized for their different functions.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Specialization",
                              "statement": "Both explained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains specialization.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Muscle cells: contain contractile proteins for movement; Nerve cells: long branches for transmitting signals quickly.**",
          "commonErrors": [
                    "Cannot explain.",
                    "Wrong functions."
          ]
},
        },
        {
          id: "sci6-u4-cell-specialization-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Tissue' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "one cell"
                    },
                    {
                              "id": "b",
                              "text": "group of similar cells"
                    },
                    {
                              "id": "c",
                              "text": "one organ"
                    },
                    {
                              "id": "d",
                              "text": "whole body"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Group of cells."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Group of cells.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "group of similar cells",
          "commonErrors": [
                    "Confuses with organ."
          ]
},
        },
        {
          id: "sci6-u4-cell-specialization-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe how cell specialization allows the body to perform complex functions, giving two examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Specialization",
                              "statement": "Examples given."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes specialization.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives examples.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Specialization: different cells for different jobs; Examples: muscle cells move, nerve cells signal, blood cells carry oxygen.**",
          "commonErrors": [
                    "Cannot describe.",
                    "No examples."
          ]
},
        },
        {
          id: "sci6-u4-cell-specialization-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Specialization\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Becoming different."
                    },
                    {
                              "id": "b",
                              "text": "Different jobs."
                    },
                    {
                              "id": "c",
                              "text": "Group of similar cells."
                    },
                    {
                              "id": "d",
                              "text": "Group of tissues."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Specialization\" means Different jobs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Specialization\" means Different jobs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Specialization** = Different jobs.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u4-cell-specialization-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Differentiation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Group of similar cells."
                    },
                    {
                              "id": "b",
                              "text": "Group of tissues."
                    },
                    {
                              "id": "c",
                              "text": "Contracts."
                    },
                    {
                              "id": "d",
                              "text": "Becoming different."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Differentiation\" means Becoming different."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Differentiation\" means Becoming different.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Differentiation** = Becoming different.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u4-cell-specialization-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Tissue\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Group of tissues."
                    },
                    {
                              "id": "b",
                              "text": "Group of similar cells."
                    },
                    {
                              "id": "c",
                              "text": "Contracts."
                    },
                    {
                              "id": "d",
                              "text": "Transmits signals."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Tissue\" means Group of similar cells."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Tissue\" means Group of similar cells.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Tissue** = Group of similar cells.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
