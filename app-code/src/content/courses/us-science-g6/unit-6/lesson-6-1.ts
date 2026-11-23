import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "sci6-u6-lesson-6-1",
  code: "6-1",
  title: "Earth's Systems",
  goal: "I CAN describe Earth's major systems.",
  standards: ["ESS2.A"],
  vocabulary: [
    { term: "Earth", definition: "Our planet." },
    { term: "Geosphere", definition: "Solid Earth." },
    { term: "Hydrosphere", definition: "Water." },
    { term: "Atmosphere", definition: "Air." },
    { term: "Biosphere", definition: "Life." },
    { term: "System", definition: "Interconnected parts." },
    { term: "Interaction", definition: "How they connect." },
    { term: "Cycle", definition: "Continuous process." },
  ],
  concepts: [
    {
      id: "sci6-u6-earth-systems",
      title: "Earth's systems",
      skill: "Describe Earth's four major systems and how they interact.",
      lesson: {
        sections: [
          {
            heading: "Four systems",
            body: "**Geosphere** (solid Earth), **Hydrosphere** (water), **Atmosphere** (air), **Biosphere** (life). They are interconnected.",
          },
          {
            heading: "Interactions",
            body: "Systems interact constantly: water evaporates (hydrosphere -> atmosphere), rain falls on land (atmosphere -> geosphere), plants absorb water (hydrosphere -> biosphere).",
          },
        ],
        keyFormulas: [
          { name: "Earth systems", statement: "Geosphere + hydrosphere + atmosphere + biosphere = interconnected Earth." },
        ],
        workedExample: {
          problem: "How does the water cycle connect Earth's systems?",
          solution: "**Water evaporates from oceans (hydrosphere), forms clouds (atmosphere), falls as rain on land (geosphere), absorbed by plants (biosphere).**",
        },
      },
      questions: [
        {
          id: "sci6-u6-earth-systems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'hydrosphere' includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "rocks"
                    },
                    {
                              "id": "b",
                              "text": "all water on Earth"
                    },
                    {
                              "id": "c",
                              "text": "air"
                    },
                    {
                              "id": "d",
                              "text": "life"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All water.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "all water on Earth",
          "commonErrors": [
                    "Confuses with other systems."
          ]
},
        },
        {
          id: "sci6-u6-earth-systems-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'geosphere' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "water"
                    },
                    {
                              "id": "b",
                              "text": "the solid Earth"
                    },
                    {
                              "id": "c",
                              "text": "air"
                    },
                    {
                              "id": "d",
                              "text": "life"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Solid Earth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solid Earth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "the solid Earth",
          "commonErrors": [
                    "Confuses with other systems."
          ]
},
        },
        {
          id: "sci6-u6-earth-systems-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe how the water cycle connects all four of Earth's systems.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Systems",
                              "statement": "Cycle described."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes connections.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Evaporation (hydrosphere->atmosphere), condensation (atmosphere), precipitation (atmosphere->geosphere), absorption (geosphere->biosphere).**",
          "commonErrors": [
                    "Cannot describe.",
                    "Missing connections."
          ]
},
        },
        {
          id: "sci6-u6-earth-systems-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Biosphere' refers to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "rocks"
                    },
                    {
                              "id": "b",
                              "text": "all living things"
                    },
                    {
                              "id": "c",
                              "text": "water"
                    },
                    {
                              "id": "d",
                              "text": "air"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All living things."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All living things.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "all living things",
          "commonErrors": [
                    "Confuses with other systems."
          ]
},
        },
        {
          id: "sci6-u6-earth-systems-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe each of Earth's four systems and give an example of how two of them interact.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Systems",
                              "statement": "Four systems + interaction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes systems.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives interaction.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Geosphere: rocks; Hydrosphere: oceans; Atmosphere: air; Biosphere: life; Interaction: rain (atmosphere) falls on land (geosphere) absorbed by plants (biosphere).**",
          "commonErrors": [
                    "Missing systems.",
                    "No interaction."
          ]
},
        },
        {
          id: "sci6-u6-earth-systems-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Earth\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Solid Earth."
                    },
                    {
                              "id": "b",
                              "text": "Our planet."
                    },
                    {
                              "id": "c",
                              "text": "Water."
                    },
                    {
                              "id": "d",
                              "text": "Air."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Earth\" means Our planet."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Earth\" means Our planet.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Earth** = Our planet.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u6-earth-systems-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Geosphere\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Water."
                    },
                    {
                              "id": "b",
                              "text": "Air."
                    },
                    {
                              "id": "c",
                              "text": "Life."
                    },
                    {
                              "id": "d",
                              "text": "Solid Earth."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Geosphere\" means Solid Earth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Geosphere\" means Solid Earth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Geosphere** = Solid Earth.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u6-earth-systems-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Hydrosphere\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Air."
                    },
                    {
                              "id": "b",
                              "text": "Water."
                    },
                    {
                              "id": "c",
                              "text": "Life."
                    },
                    {
                              "id": "d",
                              "text": "Interconnected parts."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Hydrosphere\" means Water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Hydrosphere\" means Water.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Hydrosphere** = Water.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
