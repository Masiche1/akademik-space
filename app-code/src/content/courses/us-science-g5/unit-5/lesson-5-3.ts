import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "sci5-u5-lesson-5-3",
  code: "5-3",
  title: "Earth's Systems",
  goal: "I CAN describe Earth's interacting systems.",
  standards: ["ESS2.E"],
  vocabulary: [
    { term: "System", definition: "Interacting parts." },
    { term: "Atmosphere", definition: "Air layer." },
    { term: "Hydrosphere", definition: "Water." },
    { term: "Lithosphere", definition: "Rock/soil." },
    { term: "Biosphere", definition: "Living things." },
    { term: "Geosphere", definition: "Solid Earth." },
    { term: "Interaction", definition: "How systems affect each other." },
    { term: "Cycle", definition: "Continuous process." },
  ],
  concepts: [
    {
      id: "sci5-u5-earth-systems",
      title: "Earth's systems",
      skill: "Describe Earth's interacting systems.",
      lesson: {
        sections: [
          {
            heading: "Four systems",
            body: "**Atmosphere** (air), **hydrosphere** (water), **lithosphere/geosphere** (rock/soil), **biosphere** (living things). They **interact** — each affects the others.",
          },
          {
            heading: "Interactions",
            body: "Water cycle connects atmosphere and hydrosphere; plants (biosphere) need water and air; weather affects all systems.",
          },
        ],
        keyFormulas: [
          { name: "Earth systems", statement: "Atmosphere + hydrosphere + lithosphere + biosphere = Earth." },
        ],
        workedExample: {
          problem: "How do Earth's systems interact during a rainstorm?",
          solution: "**Atmosphere (clouds) -> Hydrosphere (rain) -> Lithosphere (soil) -> Biosphere (plants absorb water).**",
        },
      },
      questions: [
        {
          id: "sci5-u5-earth-systems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'hydrosphere' includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "air"
                    },
                    {
                              "id": "b",
                              "text": "all water"
                    },
                    {
                              "id": "c",
                              "text": "rock"
                    },
                    {
                              "id": "d",
                              "text": "living things"
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
          "finalAnswer": "all water",
          "commonErrors": [
                    "Confuses with other spheres."
          ]
},
        },
        {
          id: "sci5-u5-earth-systems-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'biosphere' includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "air"
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
                              "text": "rock"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Living things."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Living things.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "all living things",
          "commonErrors": [
                    "Confuses with other spheres."
          ]
},
        },
        {
          id: "sci5-u5-earth-systems-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe Earth's four systems and give one example of how they interact.",
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
                              "reasoning": "Describes four.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives interaction.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Atmosphere (air), Hydrosphere (water), Lithosphere (rock), Biosphere (life); e.g., water cycle connects all.**",
          "commonErrors": [
                    "Missing systems.",
                    "No interaction."
          ]
},
        },
        {
          id: "sci5-u5-earth-systems-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Earth's systems interact through...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "nothing"
                    },
                    {
                              "id": "b",
                              "text": "cycles and processes like water cycle"
                    },
                    {
                              "id": "c",
                              "text": "only weather"
                    },
                    {
                              "id": "d",
                              "text": "only life"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Cycles/processes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cycles/processes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "cycles and processes like water cycle",
          "commonErrors": [
                    "Thinks they don't interact."
          ]
},
        },
        {
          id: "sci5-u5-earth-systems-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how human activities affect Earth's systems. Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Systems",
                              "statement": "Effects explained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes systems.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives human impact example.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Burning fossil fuels adds CO₂ to atmosphere, warming climate, affecting weather and ecosystems.'**",
          "commonErrors": [
                    "Cannot explain.",
                    "No example."
          ]
},
        },
        {
          id: "sci5-u5-earth-systems-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"System\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Air layer."
                    },
                    {
                              "id": "b",
                              "text": "Interacting parts."
                    },
                    {
                              "id": "c",
                              "text": "Water."
                    },
                    {
                              "id": "d",
                              "text": "Rock/soil."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"System\" means Interacting parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"System\" means Interacting parts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**System** = Interacting parts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u5-earth-systems-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Atmosphere\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Water."
                    },
                    {
                              "id": "b",
                              "text": "Rock/soil."
                    },
                    {
                              "id": "c",
                              "text": "Living things."
                    },
                    {
                              "id": "d",
                              "text": "Air layer."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Atmosphere\" means Air layer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Atmosphere\" means Air layer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Atmosphere** = Air layer.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u5-earth-systems-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Hydrosphere\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rock/soil."
                    },
                    {
                              "id": "b",
                              "text": "Water."
                    },
                    {
                              "id": "c",
                              "text": "Living things."
                    },
                    {
                              "id": "d",
                              "text": "Solid Earth."
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
