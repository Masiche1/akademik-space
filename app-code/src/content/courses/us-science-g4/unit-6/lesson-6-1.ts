import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "sci4-u6-lesson-6-1",
  code: "6-1",
  title: "Types of Rocks",
  goal: "I CAN identify and classify the three rock types.",
  standards: ["ESS2.A"],
  vocabulary: [
    { term: "Rock", definition: "Solid earth material." },
    { term: "Igneous", definition: "From cooled magma/lava." },
    { term: "Sedimentary", definition: "From compressed sediments." },
    { term: "Metamorphic", definition: "Changed by heat/pressure." },
    { term: "Magma", definition: "Molten rock underground." },
    { term: "Lava", definition: "Molten rock on surface." },
    { term: "Sediment", definition: "Small particles." },
    { term: "Fossil", definition: "Preserved remains." },
  ],
  concepts: [
    {
      id: "sci4-u6-rock-types",
      title: "Types of rocks",
      skill: "Identify igneous, sedimentary and metamorphic rocks and how they form.",
      lesson: {
        sections: [
          {
            heading: "Three types",
            body: "**Igneous** rocks form from cooled **magma/lava**; **sedimentary** from compressed **sediments**; **metamorphic** from rocks changed by **heat/pressure**.",
          },
          {
            heading: "Rock cycle",
            body: "Rocks transform: igneous -> sedimentary (weathering) -> metamorphic (heat/pressure) -> igneous (melting).",
          },
        ],
        keyFormulas: [
          { name: "Rocks", statement: "Igneous + sedimentary + metamorphic = three types." },
        ],
        workedExample: {
          problem: "A rock has visible layers of sand and shells. What type?",
          solution: "**Sedimentary** — formed from compressed sediments.",
        },
      },
      questions: [
        {
          id: "sci4-u6-rock-types-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Igneous rocks form from...",
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
                              "text": "water"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Igneous = cooled magma/lava."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Igneous = cooled magma/lava.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "cooled magma or lava",
          "commonErrors": [
                    "Wrong formation."
          ]
},
        },
        {
          id: "sci4-u6-rock-types-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sedimentary rocks form from...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "magma"
                    },
                    {
                              "id": "b",
                              "text": "compressed sediments"
                    },
                    {
                              "id": "c",
                              "text": "heat only"
                    },
                    {
                              "id": "d",
                              "text": "lava only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Sedimentary = sediments."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sedimentary = sediments.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "compressed sediments",
          "commonErrors": [
                    "Wrong formation."
          ]
},
        },
        {
          id: "sci4-u6-rock-types-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Classify these rocks: basalt (volcanic), sandstone (layers), marble (changed limestone). Explain how each formed.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Rocks",
                              "statement": "Classification + formation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Classifies all three.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains formation.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Basalt=igneous (lava); Sandstone=sedimentary (sediments); Marble=metamorphic (heat/pressure).**",
          "commonErrors": [
                    "Wrong classification.",
                    "No formation."
          ]
},
        },
        {
          id: "sci4-u6-rock-types-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Metamorphic rocks form when...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "magma cools"
                    },
                    {
                              "id": "b",
                              "text": "rocks change from heat/pressure"
                    },
                    {
                              "id": "c",
                              "text": "sediments compress"
                    },
                    {
                              "id": "d",
                              "text": "lava flows"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Metamorphic = heat/pressure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Metamorphic = heat/pressure.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "rocks change from heat/pressure",
          "commonErrors": [
                    "Wrong formation."
          ]
},
        },
        {
          id: "sci4-u6-rock-types-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain the rock cycle: how does an igneous rock become sedimentary, then metamorphic?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Rocks",
                              "statement": "Cycle explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Traces cycle.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains transformations.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Igneous -> weathering -> sediments -> sedimentary -> heat/pressure -> metamorphic -> melting -> igneous.'**",
          "commonErrors": [
                    "Cannot trace.",
                    "Wrong order."
          ]
},
        },
        {
          id: "sci4-u6-rock-types-q6",
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
                              "text": "Solid earth material."
                    },
                    {
                              "id": "c",
                              "text": "From compressed sediments."
                    },
                    {
                              "id": "d",
                              "text": "Changed by heat/pressure."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Rock\" means Solid earth material."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rock\" means Solid earth material.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rock** = Solid earth material.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u6-rock-types-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Igneous\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "From compressed sediments."
                    },
                    {
                              "id": "b",
                              "text": "Changed by heat/pressure."
                    },
                    {
                              "id": "c",
                              "text": "Molten rock underground."
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
          id: "sci4-u6-rock-types-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sedimentary\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Changed by heat/pressure."
                    },
                    {
                              "id": "b",
                              "text": "From compressed sediments."
                    },
                    {
                              "id": "c",
                              "text": "Molten rock underground."
                    },
                    {
                              "id": "d",
                              "text": "Molten rock on surface."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sedimentary\" means From compressed sediments."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sedimentary\" means From compressed sediments.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sedimentary** = From compressed sediments.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
