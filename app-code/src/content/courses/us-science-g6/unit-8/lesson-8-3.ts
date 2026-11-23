import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "sci6-u8-lesson-8-3",
  code: "8-3",
  title: "Grade 6 Science Review",
  goal: "I CAN use all Grade 6 science skills together.",
  standards: ["MS-PS2-1", "MS-PS3-1", "MS-PS1-1", "LS1.A", "LS2.B", "ESS2.A", "ESS1.A", "ETS1.A"],
  vocabulary: [
    { term: "Motion", definition: "Change in position." },
    { term: "Force", definition: "Push or pull." },
    { term: "Energy", definition: "Ability to do work." },
    { term: "Matter", definition: "Has mass/volume." },
    { term: "Cell", definition: "Basic unit." },
    { term: "Ecosystem", definition: "Community + environment." },
    { term: "Earth systems", definition: "Interconnected." },
    { term: "Engineering", definition: "Design solutions." },
  ],
  concepts: [
    {
      id: "sci6-u8-grade6-science-review",
      title: "Grade 6 science review",
      skill: "Combine all Grade 6 science skills.",
      lesson: {
        sections: [
          {
            heading: "All of Grade 6 science",
            body: "Grade 6 covers **physical science** (motion, forces, energy, matter), **life science** (cells, ecosystems), **earth science** (Earth systems, space), and **engineering design**.",
          },
          {
            heading: "You are a Grade 6 scientist!",
            body: "You can explain motion and forces, energy transformations, matter and atoms, cells and genetics, ecosystems, Earth's systems, space, and engineering design. These skills prepare you for Grade 7!",
          },
        ],
        keyFormulas: [
          { name: "Grade 6 science", statement: "Physical + life + earth + engineering = Grade 6 mastery." },
        ],
        workedExample: {
          problem: "Show all skills: explain a force, describe energy transfer, identify a cell part, construct a food chain, describe Earth's systems, explain moon phases, and design an experiment.",
          solution: "All skills demonstrated = Grade 6 science mastery.",
        },
      },
      questions: [
        {
          id: "sci6-u8-grade6-science-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Grade 6 science includes which skills?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only physics"
                    },
                    {
                              "id": "b",
                              "text": "physical, life, earth science, engineering"
                    },
                    {
                              "id": "c",
                              "text": "only biology"
                    },
                    {
                              "id": "d",
                              "text": "only earth"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All Grade 6 science skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All Grade 6 science skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "physical, life, earth science, engineering",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci6-u8-grade6-science-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Show all your skills: explain a force, describe energy transfer, identify a cell part, construct a food chain, describe Earth's systems, explain moon phases, and design an experiment.",
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
                    "**e.g., 'Friction opposes motion; Conduction transfers heat; Nucleus controls cell; Grass->Rabbit->Fox; Geosphere+hydrosphere; Full moon; Test fertilizer effect.'**"
          ]
},
        },
        {
          id: "sci6-u8-grade6-science-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "You are ready for Grade 7 science because you can...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "do advanced physics"
                    },
                    {
                              "id": "b",
                              "text": "explain motion, energy, matter, life, Earth, and space"
                    },
                    {
                              "id": "c",
                              "text": "read novels"
                    },
                    {
                              "id": "d",
                              "text": "do calculus"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Grade 6 skills prepare for Grade 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Grade 6 skills prepare for Grade 7.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "G6 skills prepare for G7",
          "commonErrors": [
                    "Thinks you need advanced skills."
          ]
},
        },
        {
          id: "sci6-u8-grade6-science-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Motion\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Push or pull."
                    },
                    {
                              "id": "b",
                              "text": "Change in position."
                    },
                    {
                              "id": "c",
                              "text": "Ability to do work."
                    },
                    {
                              "id": "d",
                              "text": "Has mass/volume."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Motion\" means Change in position."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Motion\" means Change in position.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Motion** = Change in position.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u8-grade6-science-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Force\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Ability to do work."
                    },
                    {
                              "id": "b",
                              "text": "Has mass/volume."
                    },
                    {
                              "id": "c",
                              "text": "Basic unit."
                    },
                    {
                              "id": "d",
                              "text": "Push or pull."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Force\" means Push or pull."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Force\" means Push or pull.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Force** = Push or pull.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u8-grade6-science-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Energy\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Has mass/volume."
                    },
                    {
                              "id": "b",
                              "text": "Ability to do work."
                    },
                    {
                              "id": "c",
                              "text": "Basic unit."
                    },
                    {
                              "id": "d",
                              "text": "Community + environment."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Energy\" means Ability to do work."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Energy\" means Ability to do work.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Energy** = Ability to do work.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u8-grade6-science-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Matter\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Basic unit."
                    },
                    {
                              "id": "b",
                              "text": "Community + environment."
                    },
                    {
                              "id": "c",
                              "text": "Interconnected."
                    },
                    {
                              "id": "d",
                              "text": "Has mass/volume."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Matter\" means Has mass/volume."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Matter\" means Has mass/volume.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Matter** = Has mass/volume.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u8-grade6-science-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Cell\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Community + environment."
                    },
                    {
                              "id": "b",
                              "text": "Basic unit."
                    },
                    {
                              "id": "c",
                              "text": "Interconnected."
                    },
                    {
                              "id": "d",
                              "text": "Design solutions."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Cell\" means Basic unit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Cell\" means Basic unit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Cell** = Basic unit.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
