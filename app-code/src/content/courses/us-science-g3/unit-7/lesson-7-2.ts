import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "sci3-u7-lesson-7-2",
  code: "7-2",
  title: "Rocks",
  goal: "I CAN describe types of rocks and the rock cycle.",
  standards: ["ESS2.A", "ESS2.B"],
  vocabulary: [
    { term: "Rock", definition: "Hard material from Earth." },
    { term: "Igneous", definition: "Formed from melted rock." },
    { term: "Sedimentary", definition: "Formed from layers of sediment." },
    { term: "Metamorphic", definition: "Formed by heat/pressure." },
    { term: "Magma", definition: "Melted rock underground." },
    { term: "Sediment", definition: "Small pieces of rock." },
    { term: "Cycle", definition: "Rocks change types." },
    { term: "Mineral", definition: "Natural substance in rocks." },
  ],
  concepts: [
    {
      id: "sci3-u7-rocks",
      title: "Rocks",
      skill: "Describe igneous, sedimentary, metamorphic rocks and the rock cycle.",
      lesson: {
        sections: [
          {
            heading: "Three types of rocks",
            body: "**Igneous** rocks form from cooled **magma** (like granite). **Sedimentary** rocks form from layers of **sediment** (like sandstone). **Metamorphic** rocks form from heat and pressure (like marble).",
          },
          {
            heading: "The rock cycle",
            body: "Rocks change over time: **igneous -> sedimentary -> metamorphic -> melted -> igneous** again. This is the **rock cycle**.",
          },
        ],
        keyFormulas: [
          { name: "Rock types", statement: "Igneous (magma) + Sedimentary (sediment) + Metamorphic (heat/pressure) = 3 types." },
          { name: "Rock cycle", statement: "Igneous->sedimentary->metamorphic->melt->igneous (repeat)." },
        ],
        workedExample: {
          problem: "A rock formed from cooled lava. What type is it?",
          solution: "**Igneous** — formed from cooled magma/lava.",
        },
      },
      questions: [
        {
          id: "sci3-u7-rocks-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'igneous' rock forms from...",
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
                              "text": "heat and pressure"
                    },
                    {
                              "id": "d",
                              "text": "plants"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Igneous = cooled magma."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Igneous = cooled magma.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "cooled magma",
          "commonErrors": [
                    "Thinks sedimentary is igneous."
          ]
},
        },
        {
          id: "sci3-u7-rocks-q2",
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
                              "text": "layers of sediment"
                    },
                    {
                              "id": "c",
                              "text": "heat only"
                    },
                    {
                              "id": "d",
                              "text": "water only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Sedimentary = sediment layers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sedimentary = sediment layers.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "layers of sediment",
          "commonErrors": [
                    "Thinks igneous is sedimentary."
          ]
},
        },
        {
          id: "sci3-u7-rocks-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the three types of rocks and how each forms.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Rocks",
                              "statement": "Igneous+sedimentary+metamorphic + formation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 3 types.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains formation.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Igneous=magma, sedimentary=sediment, metamorphic=heat/pressure.'**",
          "commonErrors": [
                    "Cannot name types.",
                    "No formation."
          ]
},
        },
        {
          id: "sci3-u7-rocks-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Metamorphic' rocks form from...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "magma"
                    },
                    {
                              "id": "b",
                              "text": "heat and pressure on existing rocks"
                    },
                    {
                              "id": "c",
                              "text": "sediment"
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
          "finalAnswer": "heat and pressure on existing rocks",
          "commonErrors": [
                    "Thinks sedimentary is metamorphic."
          ]
},
        },
        {
          id: "sci3-u7-rocks-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain the rock cycle in your own words.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Rock cycle",
                              "statement": "Igneous->sedimentary->metamorphic->melt->igneous."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes cycle.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Mentions it repeats.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Igneous rocks weather to sediment -> sedimentary -> heat/pressure -> metamorphic -> melt -> igneous again.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "Wrong order."
          ]
},
        },
        {
          id: "sci3-u7-rocks-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rock\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Formed from melted rock."
                    },
                    {
                              "id": "b",
                              "text": "Hard material from Earth."
                    },
                    {
                              "id": "c",
                              "text": "Formed from layers of sediment."
                    },
                    {
                              "id": "d",
                              "text": "Formed by heat/pressure."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Rock\" means Hard material from Earth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rock\" means Hard material from Earth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rock** = Hard material from Earth.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u7-rocks-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Igneous\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Formed from layers of sediment."
                    },
                    {
                              "id": "b",
                              "text": "Formed by heat/pressure."
                    },
                    {
                              "id": "c",
                              "text": "Melted rock underground."
                    },
                    {
                              "id": "d",
                              "text": "Formed from melted rock."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Igneous\" means Formed from melted rock."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Igneous\" means Formed from melted rock.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Igneous** = Formed from melted rock.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u7-rocks-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sedimentary\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Formed by heat/pressure."
                    },
                    {
                              "id": "b",
                              "text": "Formed from layers of sediment."
                    },
                    {
                              "id": "c",
                              "text": "Melted rock underground."
                    },
                    {
                              "id": "d",
                              "text": "Small pieces of rock."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sedimentary\" means Formed from layers of sediment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sedimentary\" means Formed from layers of sediment.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sedimentary** = Formed from layers of sediment.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
