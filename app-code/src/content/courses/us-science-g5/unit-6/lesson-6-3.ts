import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "sci5-u6-lesson-6-3",
  code: "6-3",
  title: "Rocks and Minerals",
  goal: "I CAN classify rocks and identify minerals.",
  standards: ["ESS1.A"],
  vocabulary: [
    { term: "Rock", definition: "Solid Earth material." },
    { term: "Mineral", definition: "Natural substance." },
    { term: "Igneous", definition: "Formed from magma." },
    { term: "Sedimentary", definition: "Formed from sediment." },
    { term: "Metamorphic", definition: "Changed by heat/pressure." },
    { term: "Crystal", definition: "Ordered structure." },
    { term: "Hardness", definition: "Resistance to scratch." },
    { term: "Luster", definition: "How it shines." },
  ],
  concepts: [
    {
      id: "sci5-u6-rocks-minerals",
      title: "Rocks and minerals",
      skill: "Classify rocks and identify minerals by properties.",
      lesson: {
        sections: [
          {
            heading: "Three rock types",
            body: "**Igneous** (from cooled magma), **sedimentary** (from compressed sediment), **metamorphic** (changed by heat/pressure).",
          },
          {
            heading: "Minerals",
            body: "**Minerals** are natural substances with specific properties: **hardness**, **luster** (shine), **color**, **crystal structure**.",
          },
        ],
        keyFormulas: [
          { name: "Rocks", statement: "Igneous + sedimentary + metamorphic = rock types." },
        ],
        workedExample: {
          problem: "Classify: granite (igneous), sandstone (sedimentary), marble (metamorphic).",
          solution: "**Granite: igneous; Sandstone: sedimentary; Marble: metamorphic.**",
        },
      },
      questions: [
        {
          id: "sci5-u6-rocks-minerals-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Igneous' rocks form from...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "sediment"
                    },
                    {
                              "id": "b",
                              "text": "cooled magma"
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
                              "statement": "Cooled magma."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cooled magma.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "cooled magma",
          "commonErrors": [
                    "Confuses with other types."
          ]
},
        },
        {
          id: "sci5-u6-rocks-minerals-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Sedimentary' rocks form from...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "magma"
                    },
                    {
                              "id": "b",
                              "text": "compressed sediment"
                    },
                    {
                              "id": "c",
                              "text": "heat"
                    },
                    {
                              "id": "d",
                              "text": "pressure only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Compressed sediment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compressed sediment.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "compressed sediment",
          "commonErrors": [
                    "Confuses with igneous."
          ]
},
        },
        {
          id: "sci5-u6-rocks-minerals-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Classify these rocks: granite, sandstone, marble, basalt. Explain how each formed.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Rocks",
                              "statement": "All four classified."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Classifies all four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Granite/basalt: igneous (magma); Sandstone: sedimentary (sediment); Marble: metamorphic (limestone + heat).**",
          "commonErrors": [
                    "Wrong classifications.",
                    "Missing rocks."
          ]
},
        },
        {
          id: "sci5-u6-rocks-minerals-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'mineral' is identified by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "color only"
                    },
                    {
                              "id": "b",
                              "text": "hardness, luster, crystal structure"
                    },
                    {
                              "id": "c",
                              "text": "size only"
                    },
                    {
                              "id": "d",
                              "text": "weight"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Hardness, luster, crystal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hardness, luster, crystal.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "hardness, luster, crystal structure",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "sci5-u6-rocks-minerals-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain the rock cycle: how rocks change from one type to another.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Rocks",
                              "statement": "Cycle explained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes cycle.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains changes.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Igneous -> weathering -> sediment -> sedimentary -> heat/pressure -> metamorphic -> melt -> igneous.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No cycle."
          ]
},
        },
        {
          id: "sci5-u6-rocks-minerals-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rock\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Natural substance."
                    },
                    {
                              "id": "b",
                              "text": "Solid Earth material."
                    },
                    {
                              "id": "c",
                              "text": "Formed from magma."
                    },
                    {
                              "id": "d",
                              "text": "Formed from sediment."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Rock\" means Solid Earth material."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rock\" means Solid Earth material.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rock** = Solid Earth material.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u6-rocks-minerals-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mineral\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Formed from magma."
                    },
                    {
                              "id": "b",
                              "text": "Formed from sediment."
                    },
                    {
                              "id": "c",
                              "text": "Changed by heat/pressure."
                    },
                    {
                              "id": "d",
                              "text": "Natural substance."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Mineral\" means Natural substance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Mineral\" means Natural substance.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Mineral** = Natural substance.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u6-rocks-minerals-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Igneous\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Formed from sediment."
                    },
                    {
                              "id": "b",
                              "text": "Formed from magma."
                    },
                    {
                              "id": "c",
                              "text": "Changed by heat/pressure."
                    },
                    {
                              "id": "d",
                              "text": "Ordered structure."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Igneous\" means Formed from magma."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Igneous\" means Formed from magma.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Igneous** = Formed from magma.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
