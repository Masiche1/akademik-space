import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "sci5-u6-lesson-6-2",
  code: "6-2",
  title: "Earth's Layers",
  goal: "I CAN describe the layers of the Earth.",
  standards: ["ESS1.A"],
  vocabulary: [
    { term: "Crust", definition: "Outer layer." },
    { term: "Mantle", definition: "Middle layer." },
    { term: "Core", definition: "Center." },
    { term: "Inner core", definition: "Solid center." },
    { term: "Outer core", definition: "Liquid layer." },
    { term: "Lithosphere", definition: "Crust + upper mantle." },
    { term: "Layer", definition: "Level." },
    { term: "Composition", definition: "What's it's made of." },
  ],
  concepts: [
    {
      id: "sci5-u6-earth-layers",
      title: "Earth's layers",
      skill: "Describe the layers of the Earth.",
      lesson: {
        sections: [
          {
            heading: "Layers",
            body: "Earth has **layers**: **crust** (outer, thin), **mantle** (middle, hot rock), **outer core** (liquid metal), **inner core** (solid metal).",
          },
          {
            heading: "Lithosphere",
            body: "The **lithosphere** = crust + upper mantle — the rigid outer layer where we live.",
          },
        ],
        keyFormulas: [
          { name: "Layers", statement: "Crust + mantle + outer core + inner core = Earth." },
        ],
        workedExample: {
          problem: "Name Earth's layers from outside to inside.",
          solution: "**Crust -> Mantle -> Outer core -> Inner core.**",
        },
      },
      questions: [
        {
          id: "sci5-u6-earth-layers-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'crust' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "center"
                    },
                    {
                              "id": "b",
                              "text": "outermost layer"
                    },
                    {
                              "id": "c",
                              "text": "middle"
                    },
                    {
                              "id": "d",
                              "text": "liquid"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Outermost layer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Outermost layer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "outermost layer",
          "commonErrors": [
                    "Confuses with other layers."
          ]
},
        },
        {
          id: "sci5-u6-earth-layers-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'inner core' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "liquid"
                    },
                    {
                              "id": "b",
                              "text": "solid metal center"
                    },
                    {
                              "id": "c",
                              "text": "rock"
                    },
                    {
                              "id": "d",
                              "text": "outer layer"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Solid metal center."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solid metal center.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "solid metal center",
          "commonErrors": [
                    "Confuses with outer core."
          ]
},
        },
        {
          id: "sci5-u6-earth-layers-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe Earth's four layers from outside to inside.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Layers",
                              "statement": "All four described."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes all four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Crust (outer), Mantle (middle), Outer core (liquid), Inner core (solid).**",
          "commonErrors": [
                    "Missing layers.",
                    "Wrong order."
          ]
},
        },
        {
          id: "sci5-u6-earth-layers-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'lithosphere' includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only crust"
                    },
                    {
                              "id": "b",
                              "text": "crust + upper mantle"
                    },
                    {
                              "id": "c",
                              "text": "core"
                    },
                    {
                              "id": "d",
                              "text": "all layers"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Crust + upper mantle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Crust + upper mantle.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "crust + upper mantle",
          "commonErrors": [
                    "Wrong composition."
          ]
},
        },
        {
          id: "sci5-u6-earth-layers-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how we know about Earth's layers even though we can't see them.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Layers",
                              "statement": "Evidence explained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains evidence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives methods.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Seismic waves, volcanoes, drilling, magnetic field — indirect evidence reveals layers.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No methods."
          ]
},
        },
        {
          id: "sci5-u6-earth-layers-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Crust\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Middle layer."
                    },
                    {
                              "id": "b",
                              "text": "Outer layer."
                    },
                    {
                              "id": "c",
                              "text": "Center."
                    },
                    {
                              "id": "d",
                              "text": "Solid center."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Crust\" means Outer layer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Crust\" means Outer layer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Crust** = Outer layer.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u6-earth-layers-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mantle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Center."
                    },
                    {
                              "id": "b",
                              "text": "Solid center."
                    },
                    {
                              "id": "c",
                              "text": "Liquid layer."
                    },
                    {
                              "id": "d",
                              "text": "Middle layer."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Mantle\" means Middle layer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Mantle\" means Middle layer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Mantle** = Middle layer.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u6-earth-layers-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Core\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Solid center."
                    },
                    {
                              "id": "b",
                              "text": "Center."
                    },
                    {
                              "id": "c",
                              "text": "Liquid layer."
                    },
                    {
                              "id": "d",
                              "text": "Crust + upper mantle."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Core\" means Center."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Core\" means Center.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Core** = Center.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
