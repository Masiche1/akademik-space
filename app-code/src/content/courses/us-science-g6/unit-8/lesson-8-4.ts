import type { Lesson } from "../../../types.ts";

export const lesson84: Lesson = {
  id: "sci6-u8-lesson-8-4",
  code: "8-4",
  title: "Grade 6 Final Review",
  goal: "I CAN demonstrate Grade 6 science mastery.",
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
      id: "sci6-u8-grade6-final",
      title: "Grade 6 final review",
      skill: "Demonstrate mastery of all Grade 6 science skills.",
      lesson: {
        sections: [
          {
            heading: "Mastery check",
            body: "This assessment covers **all Grade 6 science skills**: physical science, life science, earth science, and engineering.",
          },
          {
            heading: "You did it!",
            body: "If you can explain these concepts, you have mastered Grade 6 science and are ready for Grade 7!",
          },
        ],
        keyFormulas: [
          { name: "Mastery", statement: "All skills demonstrated = Grade 6 mastery." },
        ],
        workedExample: {
          problem: "Complete assessment: motion, forces, energy, matter, cells, ecosystems, Earth systems, space, engineering.",
          solution: "All concepts explained = Grade 6 science mastery.",
        },
      },
      questions: [
        {
          id: "sci6-u8-grade6-final-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Grade 6 science assessment covers...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only physics"
                    },
                    {
                              "id": "b",
                              "text": "all Grade 6 science skills"
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
          "finalAnswer": "all Grade 6 science skills",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci6-u8-grade6-final-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Demonstrate mastery: explain a force, describe energy transfer, identify a cell part, construct a food chain, describe Earth's systems, explain moon phases, and design an experiment.",
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
                                                  "Mastery",
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
                                                  "Mastery",
                                                  "All skills demonstrated."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Demonstrates mastery.",
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
          id: "sci6-u8-grade6-final-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Grade 6 science mastery means you can...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "do advanced physics"
                    },
                    {
                              "id": "b",
                              "text": "explain all Grade 6 science concepts"
                    },
                    {
                              "id": "c",
                              "text": "write novels"
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
                              "statement": "Explain all concepts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explain all concepts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "explain all Grade 6 science concepts",
          "commonErrors": [
                    "Thinks mastery is advanced."
          ]
},
        },
        {
          id: "sci6-u8-grade6-final-q4",
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
          id: "sci6-u8-grade6-final-q5",
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
          id: "sci6-u8-grade6-final-q6",
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
          id: "sci6-u8-grade6-final-q7",
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
          id: "sci6-u8-grade6-final-q8",
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
