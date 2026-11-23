import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "sci6-u4-lesson-4-1",
  code: "4-1",
  title: "Cell Structure",
  goal: "I CAN identify parts of a cell.",
  standards: ["LS1.A"],
  vocabulary: [
    { term: "Cell", definition: "Basic unit of life." },
    { term: "Nucleus", definition: "Control center." },
    { term: "Membrane", definition: "Boundary." },
    { term: "Cytoplasm", definition: "Inside material." },
    { term: "Mitochondria", definition: "Powerhouse." },
    { term: "Ribosome", definition: "Protein maker." },
    { term: "Chloroplast", definition: "Photosynthesis." },
    { term: "Wall", definition: "Plant support." },
  ],
  concepts: [
    {
      id: "sci6-u4-cell-structure",
      title: "Cell structure",
      skill: "Identify and describe the main parts of plant and animal cells.",
      lesson: {
        sections: [
          {
            heading: "Cell parts",
            body: "**Nucleus** controls cell. **Membrane** controls what enters/exits. **Cytoplasm** is the jelly-like inside. **Mitochondria** make energy. **Ribosomes** make proteins. **Chloroplasts** (plants only) do photosynthesis. **Cell wall** (plants only) provides support.",
          },
          {
            heading: "Plant vs animal",
            body: "Plant cells have **cell wall** and **chloroplasts**; animal cells don't.",
          },
        ],
        keyFormulas: [
          { name: "Cell", statement: "Nucleus + membrane + cytoplasm + organelles = cell." },
        ],
        workedExample: {
          problem: "Which organelle makes energy for the cell?",
          solution: "**Mitochondria** — often called the 'powerhouse'.",
        },
      },
      questions: [
        {
          id: "sci6-u4-cell-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'nucleus' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "boundary"
                    },
                    {
                              "id": "b",
                              "text": "control center of cell"
                    },
                    {
                              "id": "c",
                              "text": "energy maker"
                    },
                    {
                              "id": "d",
                              "text": "protein maker"
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
          "finalAnswer": "control center of cell",
          "commonErrors": [
                    "Confuses with other parts."
          ]
},
        },
        {
          id: "sci6-u4-cell-structure-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Mitochondria' are known as the...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "control center"
                    },
                    {
                              "id": "b",
                              "text": "powerhouse"
                    },
                    {
                              "id": "c",
                              "text": "boundary"
                    },
                    {
                              "id": "d",
                              "text": "protein maker"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Powerhouse."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Powerhouse.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "powerhouse",
          "commonErrors": [
                    "Confuses with nucleus."
          ]
},
        },
        {
          id: "sci6-u4-cell-structure-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Label these cell parts and state their function: nucleus, mitochondria, cell membrane, chloroplast.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Cell",
                              "statement": "All four labeled."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Labels parts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "States functions.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Nucleus: control; Mitochondria: energy; Membrane: boundary; Chloroplast: photosynthesis (plants).**",
          "commonErrors": [
                    "Wrong labels.",
                    "Missing functions."
          ]
},
        },
        {
          id: "sci6-u4-cell-structure-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Plant cells have but animal cells don't have...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "nucleus"
                    },
                    {
                              "id": "b",
                              "text": "cell wall and chloroplasts"
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
                              "statement": "Wall + chloroplasts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Wall + chloroplasts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "cell wall and chloroplasts",
          "commonErrors": [
                    "Confuses with shared parts."
          ]
},
        },
        {
          id: "sci6-u4-cell-structure-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Draw and label a plant cell and an animal cell, noting the differences.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Cell",
                              "statement": "Both cells labeled."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Labels plant cell.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Labels animal cell.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Plant: wall, chloroplasts, large vacuole; Animal: no wall/chloroplasts, smaller vacuole.**",
          "commonErrors": [
                    "Only one cell.",
                    "Missing differences."
          ]
},
        },
        {
          id: "sci6-u4-cell-structure-q6",
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
                              "text": "Boundary."
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
          id: "sci6-u4-cell-structure-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Nucleus\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Boundary."
                    },
                    {
                              "id": "b",
                              "text": "Inside material."
                    },
                    {
                              "id": "c",
                              "text": "Powerhouse."
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
          id: "sci6-u4-cell-structure-q8",
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
                              "text": "Boundary."
                    },
                    {
                              "id": "c",
                              "text": "Powerhouse."
                    },
                    {
                              "id": "d",
                              "text": "Protein maker."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Membrane\" means Boundary."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Membrane\" means Boundary.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Membrane** = Boundary.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
