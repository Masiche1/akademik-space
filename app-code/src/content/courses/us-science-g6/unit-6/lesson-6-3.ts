import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "sci6-u6-lesson-6-3",
  code: "6-3",
  title: "Rock Cycle",
  goal: "I CAN explain the rock cycle.",
  standards: ["ESS2.A"],
  vocabulary: [
    { term: "Rock", definition: "Solid mineral mass." },
    { term: "Igneous", definition: "From cooled magma/lava." },
    { term: "Sedimentary", definition: "From sediments." },
    { term: "Metamorphic", definition: "From heat/pressure." },
    { term: "Magma", definition: "Molten rock." },
    { term: "Lava", definition: "Magma on surface." },
    { term: "Weathering", definition: "Breaking down." },
    { term: "Erosion", definition: "Moving material." },
  ],
  concepts: [
    {
      id: "sci6-u6-rock-cycle",
      title: "Rock cycle",
      skill: "Explain how rocks change between igneous, sedimentary and metamorphic forms.",
      lesson: {
        sections: [
          {
            heading: "Three types",
            body: "**Igneous**: cooled magma/lava. **Sedimentary**: compacted sediments. **Metamorphic**: heat/pressure changed.",
          },
          {
            heading: "Cycle",
            body: "Rocks cycle through forms: magma -> igneous -> weathering -> sediments -> sedimentary -> heat/pressure -> metamorphic -> melting -> magma.",
          },
        ],
        keyFormulas: [
          { name: "Rock cycle", statement: "Igneous + sedimentary + metamorphic = continuous cycle." },
        ],
        workedExample: {
          problem: "How does granite (igneous) become sedimentary rock?",
          solution: "**Weathering breaks granite into sediments; sediments compact/cement into sedimentary rock.**",
        },
      },
      questions: [
        {
          id: "sci6-u6-rock-cycle-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Igneous rock' forms from...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "sediments"
                    },
                    {
                              "id": "b",
                              "text": "cooled magma or lava"
                    },
                    {
                              "id": "c",
                              "text": "heat/pressure"
                    },
                    {
                              "id": "d",
                              "text": "weathering"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Cooled magma/lava."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cooled magma/lava.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "cooled magma or lava",
          "commonErrors": [
                    "Wrong source."
          ]
},
        },
        {
          id: "sci6-u6-rock-cycle-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Sedimentary rock' forms from...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "magma"
                    },
                    {
                              "id": "b",
                              "text": "compacted sediments"
                    },
                    {
                              "id": "c",
                              "text": "heat/pressure"
                    },
                    {
                              "id": "d",
                              "text": "lava"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Compacted sediments."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compacted sediments.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "compacted sediments",
          "commonErrors": [
                    "Wrong source."
          ]
},
        },
        {
          id: "sci6-u6-rock-cycle-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe the rock cycle, naming all three rock types and how they transform.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Rock cycle",
                              "statement": "All three + transformations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes cycle.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Magma -> igneous -> weathering/erosion -> sediments -> sedimentary -> heat/pressure -> metamorphic -> melting -> magma.**",
          "commonErrors": [
                    "Missing types.",
                    "Wrong cycle."
          ]
},
        },
        {
          id: "sci6-u6-rock-cycle-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Metamorphic rock' forms from...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "magma"
                    },
                    {
                              "id": "b",
                              "text": "sediments"
                    },
                    {
                              "id": "c",
                              "text": "heat and pressure"
                    },
                    {
                              "id": "d",
                              "text": "lava"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Heat/pressure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Heat/pressure.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "heat and pressure",
          "commonErrors": [
                    "Wrong source."
          ]
},
        },
        {
          id: "sci6-u6-rock-cycle-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how rocks change over time, giving an example of one complete cycle.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Rock cycle",
                              "statement": "Changes + example."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains changes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives example.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Rocks change through melting, weathering, compaction, heat/pressure; Example: basalt -> sediments -> sandstone -> gneiss -> magma.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No example."
          ]
},
        },
        {
          id: "sci6-u6-rock-cycle-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rock\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "From cooled magma/lava."
                    },
                    {
                              "id": "b",
                              "text": "Solid mineral mass."
                    },
                    {
                              "id": "c",
                              "text": "From sediments."
                    },
                    {
                              "id": "d",
                              "text": "From heat/pressure."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Rock\" means Solid mineral mass."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rock\" means Solid mineral mass.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rock** = Solid mineral mass.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u6-rock-cycle-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Igneous\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "From sediments."
                    },
                    {
                              "id": "b",
                              "text": "From heat/pressure."
                    },
                    {
                              "id": "c",
                              "text": "Molten rock."
                    },
                    {
                              "id": "d",
                              "text": "From cooled magma/lava."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Igneous\" means From cooled magma/lava."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Igneous\" means From cooled magma/lava.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Igneous** = From cooled magma/lava.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u6-rock-cycle-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sedimentary\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "From heat/pressure."
                    },
                    {
                              "id": "b",
                              "text": "From sediments."
                    },
                    {
                              "id": "c",
                              "text": "Molten rock."
                    },
                    {
                              "id": "d",
                              "text": "Magma on surface."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sedimentary\" means From sediments."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sedimentary\" means From sediments.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sedimentary** = From sediments.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
