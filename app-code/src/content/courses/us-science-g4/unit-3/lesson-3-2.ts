import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "sci4-u3-lesson-3-2",
  code: "3-2",
  title: "Cell Functions",
  goal: "I CAN explain what different cell parts do.",
  standards: ["LS1.A"],
  vocabulary: [
    { term: "Function", definition: "Job of a part." },
    { term: "Nucleus", definition: "Control center." },
    { term: "Membrane", definition: "Controls what enters/exits." },
    { term: "Cytoplasm", definition: "Where reactions happen." },
    { term: "Mitochondria", definition: "Energy factory." },
    { term: "Ribosome", definition: "Makes proteins." },
    { term: "Vacuole", definition: "Stores materials." },
    { term: "Chloroplast", definition: "Photosynthesis in plants." },
  ],
  concepts: [
    {
      id: "sci4-u3-cell-functions",
      title: "Cell functions",
      skill: "Explain the functions of different cell parts.",
      lesson: {
        sections: [
          {
            heading: "Each part has a job",
            body: "**Nucleus** controls the cell; **membrane** controls what enters/exits; **cytoplasm** is where chemical reactions happen; **mitochondria** make energy.",
          },
          {
            heading: "Special parts",
            body: "Plant cells have **chloroplasts** (make food via photosynthesis) and **cell walls** (support). Animal cells don't.",
          },
        ],
        keyFormulas: [
          { name: "Cell parts", statement: "Nucleus + membrane + cytoplasm + mitochondria = cell works." },
        ],
        workedExample: {
          problem: "What happens if the nucleus is damaged?",
          solution: "The cell loses its **control center** — it can't function properly or reproduce.",
        },
      },
      questions: [
        {
          id: "sci4-u3-cell-functions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'membrane' controls...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the nucleus"
                    },
                    {
                              "id": "b",
                              "text": "what enters and exits the cell"
                    },
                    {
                              "id": "c",
                              "text": "energy"
                    },
                    {
                              "id": "d",
                              "text": "proteins"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Membrane = gatekeeper."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Membrane = gatekeeper.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "what enters and exits the cell",
          "commonErrors": [
                    "Wrong function."
          ]
},
        },
        {
          id: "sci4-u3-cell-functions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Mitochondria' are called...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "control centers"
                    },
                    {
                              "id": "b",
                              "text": "energy factories"
                    },
                    {
                              "id": "c",
                              "text": "storage"
                    },
                    {
                              "id": "d",
                              "text": "walls"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Mitochondria = energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mitochondria = energy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "energy factories",
          "commonErrors": [
                    "Wrong function."
          ]
},
        },
        {
          id: "sci4-u3-cell-functions-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name three cell parts and explain what each does.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Cell functions",
                              "statement": "Three parts + functions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names three + functions.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Nucleus: controls; Membrane: gatekeeper; Mitochondria: energy.'**",
          "commonErrors": [
                    "Fewer than three.",
                    "Wrong functions."
          ]
},
        },
        {
          id: "sci4-u3-cell-functions-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Plant cells have...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "no special parts"
                    },
                    {
                              "id": "b",
                              "text": "chloroplasts and cell walls"
                    },
                    {
                              "id": "c",
                              "text": "nuclei"
                    },
                    {
                              "id": "d",
                              "text": "membranes only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Plants have chloroplasts + walls."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plants have chloroplasts + walls.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "chloroplasts and cell walls",
          "commonErrors": [
                    "Thinks plants are same as animals."
          ]
},
        },
        {
          id: "sci4-u3-cell-functions-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare plant and animal cells. What parts do they share and what's different?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Cell functions",
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
                              "reasoning": "Identifies differences.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Both have nucleus/membrane/cytoplasm; plants have chloroplasts + walls, animals don't.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "Wrong facts."
          ]
},
        },
        {
          id: "sci4-u3-cell-functions-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Function\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Control center."
                    },
                    {
                              "id": "b",
                              "text": "Job of a part."
                    },
                    {
                              "id": "c",
                              "text": "Controls what enters/exits."
                    },
                    {
                              "id": "d",
                              "text": "Where reactions happen."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Function\" means Job of a part."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Function\" means Job of a part.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Function** = Job of a part.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u3-cell-functions-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Nucleus\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Controls what enters/exits."
                    },
                    {
                              "id": "b",
                              "text": "Where reactions happen."
                    },
                    {
                              "id": "c",
                              "text": "Energy factory."
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
          id: "sci4-u3-cell-functions-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Membrane\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where reactions happen."
                    },
                    {
                              "id": "b",
                              "text": "Controls what enters/exits."
                    },
                    {
                              "id": "c",
                              "text": "Energy factory."
                    },
                    {
                              "id": "d",
                              "text": "Makes proteins."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Membrane\" means Controls what enters/exits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Membrane\" means Controls what enters/exits.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Membrane** = Controls what enters/exits.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
