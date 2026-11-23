import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "sci5-u3-lesson-3-4",
  code: "3-4",
  title: "Plant and Animal Cells",
  goal: "I CAN compare plant and animal cells.",
  standards: ["LS1.A"],
  vocabulary: [
    { term: "Cell", definition: "Basic unit of life." },
    { term: "Nucleus", definition: "Control center." },
    { term: "Membrane", definition: "Boundary." },
    { term: "Cytoplasm", definition: "Inside material." },
    { term: "Cell wall", definition: "Plant only." },
    { term: "Chloroplast", definition: "Photosynthesis." },
    { term: "Vacuole", definition: "Storage." },
    { term: "Organelle", definition: "Cell part." },
  ],
  concepts: [
    {
      id: "sci5-u3-plant-animal-cells",
      title: "Plant and Animal Cells",
      skill: "Compare plant and animal cell structures.",
      lesson: {
        sections: [
          {
            heading: "Plant",
            body: "Has cell wall + chloroplasts.",
          },
          {
            heading: "Animal",
            body: "No wall/chloroplasts.",
          },
        ],
        keyFormulas: [
          { name: "Cells", statement: "Plant vs animal = comparison" },
        ],
        workedExample: {
          problem: "Compare a plant cell and an animal cell: what parts are different?",
          solution: "Plant: cell wall, chloroplasts, large vacuole. Animal: no wall/chloroplasts, smaller vacuole.",
        },
      },
      questions: [
        {
          id: "sci5-u3-plant-animal-cells-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Plant cells have...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "no cell wall"
                    },
                    {
                              "id": "b",
                              "text": "cell wall and chloroplasts"
                    },
                    {
                              "id": "c",
                              "text": "no nucleus"
                    },
                    {
                              "id": "d",
                              "text": "no membrane"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Cell wall + chloroplasts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cell wall + chloroplasts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "cell wall and chloroplasts",
          "commonErrors": [
                    "Confuses with animal."
          ]
},
        },
        {
          id: "sci5-u3-plant-animal-cells-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Animal cells lack...",
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
                              "statement": "No wall/chloroplasts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "No wall/chloroplasts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "cell wall and chloroplasts",
          "commonErrors": [
                    "Confuses with plant."
          ]
},
        },
        {
          id: "sci5-u3-plant-animal-cells-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Compare plant and animal cells. List 3 parts they share and 2 parts that differ.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Cells",
                              "statement": "Shared + different parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lists shared.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Lists differences.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Shared: nucleus, membrane, cytoplasm; Different: plant has cell wall/chloroplasts, animal does not.**",
          "commonErrors": [
                    "Cannot compare.",
                    "Missing parts."
          ]
},
        },
        {
          id: "sci5-u3-plant-animal-cells-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Chloroplasts are important because they...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "store water"
                    },
                    {
                              "id": "b",
                              "text": "perform photosynthesis"
                    },
                    {
                              "id": "c",
                              "text": "control cell"
                    },
                    {
                              "id": "d",
                              "text": "make protein"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Photosynthesis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Photosynthesis.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "perform photosynthesis",
          "commonErrors": [
                    "Wrong function."
          ]
},
        },
        {
          id: "sci5-u3-plant-animal-cells-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain why plant cells need chloroplasts but animal cells do not.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Cells",
                              "statement": "Why chloroplasts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains chloroplasts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains animal difference.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Plants make own food via photosynthesis; animals eat food — no chloroplasts needed.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No difference."
          ]
},
        },
        {
          id: "sci5-u3-plant-animal-cells-q6",
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
          id: "sci5-u3-plant-animal-cells-q7",
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
                              "text": "Plant only."
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
          id: "sci5-u3-plant-animal-cells-q8",
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
                              "text": "Plant only."
                    },
                    {
                              "id": "d",
                              "text": "Photosynthesis."
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
