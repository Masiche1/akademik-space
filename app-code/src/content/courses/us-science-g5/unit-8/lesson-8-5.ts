import type { Lesson } from "../../../types.ts";

export const lesson85: Lesson = {
  id: "sci5-u8-lesson-8-5",
  code: "8-5",
  title: "Grade 5 Final Review",
  goal: "I CAN use all Grade 5 science skills together.",
  standards: ["PS1.A", "PS1.B", "PS3.A", "PS4.A", "LS1.A", "LS2.A", "LS2.B", "LS2.C", "ESS1.A", "ESS2.C", "ESS2.D", "ETS1.A", "ETS1.B"],
  vocabulary: [
    { term: "Matter", definition: "Properties/changes." },
    { term: "Energy", definition: "Forms/conservation." },
    { term: "Cells", definition: "Structure/function." },
    { term: "Ecosystems", definition: "Food/energy/interactions." },
    { term: "Earth", definition: "Systems/water cycle." },
    { term: "History", definition: "Fossils/layers." },
    { term: "Engineering", definition: "Design process." },
    { term: "Review", definition: "All skills." },
  ],
  concepts: [
    {
      id: "sci5-u8-grade5-final",
      title: "Grade 5 final review",
      skill: "Combine all Grade 5 science skills.",
      lesson: {
        sections: [
          {
            heading: "All of Grade 5 science",
            body: "Grade 5 covers **matter** (properties, changes), **energy** (forms, conservation, heat, sound/light), **cells** (structure, function, life cycles), **ecosystems** (food chains, energy, interactions), **Earth's systems** (weather, water cycle, climate), **Earth's history** (fossils, layers, selection), and **engineering** (design process).",
          },
          {
            heading: "You are a Grade 5 scientist!",
            body: "You can investigate matter and energy, understand living things and ecosystems, explore Earth's systems and history, and apply engineering design. These skills prepare you for Grade 6!",
          },
        ],
        keyFormulas: [
          { name: "Grade 5 science", statement: "Matter + energy + life + ecosystems + Earth + history + engineering = Grade 5 mastery." },
        ],
        workedExample: {
          problem: "Show all skills: classify a change, trace energy, describe a cell, draw a food chain, explain the water cycle, name Earth's layers, and follow the design process.",
          solution: "All skills demonstrated = Grade 5 science mastery.",
        },
      },
      questions: [
        {
          id: "sci5-u8-grade5-final-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Grade 5 science includes which topics?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only matter"
                    },
                    {
                              "id": "b",
                              "text": "matter, energy, cells, ecosystems, Earth systems, history, engineering"
                    },
                    {
                              "id": "c",
                              "text": "only life"
                    },
                    {
                              "id": "d",
                              "text": "only Earth"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All Grade 5 science topics."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All Grade 5 science topics.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "matter, energy, cells, ecosystems, Earth systems, history, engineering",
          "commonErrors": [
                    "Lists one topic."
          ]
},
        },
        {
          id: "sci5-u8-grade5-final-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Show all your skills: classify a physical/chemical change, trace energy conservation, label a cell, construct a food chain, describe the water cycle, name Earth's layers, and follow the design process.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": [
                                        [
                                                  "skill",
                                                  "All science",
                                                  "All skills demonstrated."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All science",
                                                  "All skills demonstrated."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Demonstrates all skills.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Melting=physical; KE->PE conservation; Cell: nucleus; Chain: grass->rabbit->fox; Water: evap->precip; Layers: crust/mantle/core; Design: problem->test->iterate.'**"
          ]
},
        },
        {
          id: "sci5-u8-grade5-final-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "You are ready for Grade 6 science because you can...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only memorize"
                    },
                    {
                              "id": "b",
                              "text": "investigate matter/energy, understand life/ecosystems, explore Earth, and apply engineering"
                    },
                    {
                              "id": "c",
                              "text": "only read"
                    },
                    {
                              "id": "d",
                              "text": "only test"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Grade 5 skills prepare for Grade 6."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Grade 5 skills prepare for Grade 6.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "G5 skills prepare for G6",
          "commonErrors": [
                    "Thinks you need advanced skills."
          ]
},
        },
        {
          id: "sci5-u8-grade5-final-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Matter\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Forms/conservation."
                    },
                    {
                              "id": "b",
                              "text": "Properties/changes."
                    },
                    {
                              "id": "c",
                              "text": "Structure/function."
                    },
                    {
                              "id": "d",
                              "text": "Food/energy/interactions."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Matter\" means Properties/changes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Matter\" means Properties/changes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Matter** = Properties/changes.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u8-grade5-final-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Energy\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Structure/function."
                    },
                    {
                              "id": "b",
                              "text": "Food/energy/interactions."
                    },
                    {
                              "id": "c",
                              "text": "Systems/water cycle."
                    },
                    {
                              "id": "d",
                              "text": "Forms/conservation."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Energy\" means Forms/conservation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Energy\" means Forms/conservation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Energy** = Forms/conservation.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u8-grade5-final-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Cells\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Food/energy/interactions."
                    },
                    {
                              "id": "b",
                              "text": "Structure/function."
                    },
                    {
                              "id": "c",
                              "text": "Systems/water cycle."
                    },
                    {
                              "id": "d",
                              "text": "Fossils/layers."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Cells\" means Structure/function."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Cells\" means Structure/function.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Cells** = Structure/function.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u8-grade5-final-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ecosystems\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Systems/water cycle."
                    },
                    {
                              "id": "b",
                              "text": "Fossils/layers."
                    },
                    {
                              "id": "c",
                              "text": "Design process."
                    },
                    {
                              "id": "d",
                              "text": "Food/energy/interactions."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ecosystems\" means Food/energy/interactions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ecosystems\" means Food/energy/interactions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ecosystems** = Food/energy/interactions.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u8-grade5-final-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Earth\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fossils/layers."
                    },
                    {
                              "id": "b",
                              "text": "Systems/water cycle."
                    },
                    {
                              "id": "c",
                              "text": "Design process."
                    },
                    {
                              "id": "d",
                              "text": "All skills."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Earth\" means Systems/water cycle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Earth\" means Systems/water cycle.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Earth** = Systems/water cycle.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
