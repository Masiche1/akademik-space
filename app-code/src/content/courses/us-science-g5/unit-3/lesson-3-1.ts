import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "sci5-u3-lesson-3-1",
  code: "3-1",
  title: "Cell Structure",
  goal: "I CAN describe the basic structure of a cell.",
  standards: ["LS1.A"],
  vocabulary: [
    { term: "Cell", definition: "Basic unit of life." },
    { term: "Nucleus", definition: "Control center." },
    { term: "Membrane", definition: "Outer boundary." },
    { term: "Cytoplasm", definition: "Inside material." },
    { term: "Organelles", definition: "Cell parts." },
    { term: "Mitochondria", definition: "Energy producer." },
    { term: "Ribosome", definition: "Protein maker." },
    { term: "Vacuole", definition: "Storage." },
  ],
  concepts: [
    {
      id: "sci5-u3-cell-structure",
      title: "Cell structure",
      skill: "Describe the basic parts of a cell and their functions.",
      lesson: {
        sections: [
          {
            heading: "Cell parts",
            body: "Every **cell** has a **nucleus** (control center), **membrane** (boundary), **cytoplasm** (inside material), and **organelles** (specialized parts) like **mitochondria** (energy) and **ribosomes** (protein).",
          },
          {
            heading: "Plant vs animal",
            body: "Plant cells have **cell wall** and **chloroplasts** (for photosynthesis); animal cells don't.",
          },
        ],
        keyFormulas: [
          { name: "Cell", statement: "Nucleus + membrane + cytoplasm + organelles = cell." },
        ],
        workedExample: {
          problem: "What does the nucleus do?",
          solution: "**Controls cell activities** — it's the control center containing DNA.",
        },
      },
      questions: [
        {
          id: "sci5-u3-cell-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'nucleus' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "energy producer"
                    },
                    {
                              "id": "b",
                              "text": "control center of the cell"
                    },
                    {
                              "id": "c",
                              "text": "boundary"
                    },
                    {
                              "id": "d",
                              "text": "storage"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Control center."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Control center.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "control center of the cell",
          "commonErrors": [
                    "Confuses with mitochondria."
          ]
},
        },
        {
          id: "sci5-u3-cell-structure-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is found in plant cells but not animal cells?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "nucleus"
                    },
                    {
                              "id": "b",
                              "text": "cell wall"
                    },
                    {
                              "id": "c",
                              "text": "membrane"
                    },
                    {
                              "id": "d",
                              "text": "cytoplasm"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Cell wall."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cell wall.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "cell wall",
          "commonErrors": [
                    "Confuses with other parts."
          ]
},
        },
        {
          id: "sci5-u3-cell-structure-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Label the parts of a cell: nucleus, membrane, cytoplasm, mitochondria, ribosome. Describe each function.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Cell",
                              "statement": "All parts labeled."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Labels all parts.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Nucleus: control; Membrane: boundary; Cytoplasm: material; Mitochondria: energy; Ribosome: protein.**",
          "commonErrors": [
                    "Missing parts.",
                    "Wrong functions."
          ]
},
        },
        {
          id: "sci5-u3-cell-structure-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Mitochondria' produce...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "protein"
                    },
                    {
                              "id": "b",
                              "text": "energy"
                    },
                    {
                              "id": "c",
                              "text": "DNA"
                    },
                    {
                              "id": "d",
                              "text": "waste"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Energy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "energy",
          "commonErrors": [
                    "Confuses with ribosome."
          ]
},
        },
        {
          id: "sci5-u3-cell-structure-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare plant and animal cells. What parts are different and why?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Cell",
                              "statement": "Comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes both.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains differences.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Plant: cell wall + chloroplasts (photosynthesis); Animal: no wall/chloroplasts. Both have nucleus, membrane, cytoplasm.**",
          "commonErrors": [
                    "Cannot compare.",
                    "Missing differences."
          ]
},
        },
        {
          id: "sci5-u3-cell-structure-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Cell\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Control center."
                    },
                    {
                              "id": "b",
                              "text": "Basic unit of life."
                    },
                    {
                              "id": "c",
                              "text": "Outer boundary."
                    },
                    {
                              "id": "d",
                              "text": "Inside material."
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
          id: "sci5-u3-cell-structure-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Nucleus\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Outer boundary."
                    },
                    {
                              "id": "b",
                              "text": "Inside material."
                    },
                    {
                              "id": "c",
                              "text": "Cell parts."
                    },
                    {
                              "id": "d",
                              "text": "Control center."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Nucleus\" means Control center."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Nucleus\" means Control center.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Nucleus** = Control center.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u3-cell-structure-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Membrane\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Inside material."
                    },
                    {
                              "id": "b",
                              "text": "Outer boundary."
                    },
                    {
                              "id": "c",
                              "text": "Cell parts."
                    },
                    {
                              "id": "d",
                              "text": "Energy producer."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Membrane\" means Outer boundary."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Membrane\" means Outer boundary.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Membrane** = Outer boundary.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
