import type { Lesson } from "../../../types.ts";

export const lesson85: Lesson = {
  id: "sci4-u8-lesson-8-5",
  code: "8-5",
  title: "Grade 4 Science Final Review",
  goal: "I CAN use all Grade 4 science skills: energy, cells, inheritance, ecosystems, Earth's surface, weather and engineering.",
  standards: ["PS3.A", "PS4.A", "LS1.A", "LS3.A", "LS2.A", "ESS2.A", "ESS2.C", "ETS1.A"],
  vocabulary: [
    { term: "Energy", definition: "Heat and waves." },
    { term: "Cells", definition: "Basic unit." },
    { term: "Inheritance", definition: "Traits passed." },
    { term: "Ecosystems", definition: "Living connections." },
    { term: "Earth's surface", definition: "Rocks/landforms." },
    { term: "Weather", definition: "Water/atmosphere." },
    { term: "Engineering", definition: "Design solutions." },
    { term: "Review", definition: "All skills." },
  ],
  concepts: [
    {
      id: "sci4-u8-grade4-final",
      title: "Grade 4 science final review",
      skill: "Combine all Grade 4 science skills.",
      lesson: {
        sections: [
          {
            heading: "All of Grade 4 science",
            body: "Grade 4 covers **energy** (heat, waves), **cells** (structure, function, organization), **inheritance** (traits, genes, DNA), **ecosystems** (food webs, cycles), **Earth's surface** (rocks, landforms), **weather** (water cycle, patterns), and **engineering** (design process).",
          },
          {
            heading: "You are a Grade 4 scientist and engineer!",
            body: "You understand how energy moves, how living things are organized, how traits are inherited, how ecosystems work, how Earth's surface changes, how weather works, and how engineers solve problems. These are the foundations for Grade 5!",
          },
        ],
        keyFormulas: [
          { name: "Grade 4 science", statement: "Energy + cells + inheritance + ecosystems + surface + weather + engineering = Grade 4 mastery." },
        ],
        workedExample: {
          problem: "Show all skills: explain heat transfer, describe cell parts, trace inheritance, draw a food web, classify rocks, explain water cycle, design a solution.",
          solution: "All skills demonstrated = Grade 4 science mastery.",
        },
      },
      questions: [
        {
          id: "sci4-u8-grade4-final-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Grade 4 science includes which skills?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only energy"
                    },
                    {
                              "id": "b",
                              "text": "energy, cells, inheritance, ecosystems, surface, weather, engineering"
                    },
                    {
                              "id": "c",
                              "text": "only cells"
                    },
                    {
                              "id": "d",
                              "text": "only engineering"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All Grade 4 science skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All Grade 4 science skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "energy, cells, inheritance, ecosystems, surface, weather, engineering",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci4-u8-grade4-final-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Show all your skills: explain heat transfer, name cell parts, explain inheritance, describe a food web, classify rocks, explain the water cycle, and describe the engineering design process.",
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
                    "**e.g., 'Heat: conduction/convection; Cells: nucleus/membrane; Inheritance: genes; Food web: multiple chains; Rocks: igneous/sedimentary/metamorphic; Water: evap-cond-precip; Design: define-test-improve.'**"
          ]
},
        },
        {
          id: "sci4-u8-grade4-final-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "You are ready for Grade 5 science because you can...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "do advanced chemistry"
                    },
                    {
                              "id": "b",
                              "text": "understand energy, cells, inheritance, ecosystems, Earth's systems, and engineering"
                    },
                    {
                              "id": "c",
                              "text": "read chapter books"
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
                              "statement": "Grade 4 skills prepare you for Grade 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Grade 4 skills prepare you for Grade 5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "G4 skills prepare for G5",
          "commonErrors": [
                    "Thinks you need advanced skills."
          ]
},
        },
        {
          id: "sci4-u8-grade4-final-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Energy\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Basic unit."
                    },
                    {
                              "id": "b",
                              "text": "Heat and waves."
                    },
                    {
                              "id": "c",
                              "text": "Traits passed."
                    },
                    {
                              "id": "d",
                              "text": "Living connections."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Energy\" means Heat and waves."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Energy\" means Heat and waves.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Energy** = Heat and waves.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u8-grade4-final-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Cells\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Traits passed."
                    },
                    {
                              "id": "b",
                              "text": "Living connections."
                    },
                    {
                              "id": "c",
                              "text": "Rocks/landforms."
                    },
                    {
                              "id": "d",
                              "text": "Basic unit."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Cells\" means Basic unit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Cells\" means Basic unit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Cells** = Basic unit.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u8-grade4-final-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Inheritance\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Living connections."
                    },
                    {
                              "id": "b",
                              "text": "Traits passed."
                    },
                    {
                              "id": "c",
                              "text": "Rocks/landforms."
                    },
                    {
                              "id": "d",
                              "text": "Water/atmosphere."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Inheritance\" means Traits passed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Inheritance\" means Traits passed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Inheritance** = Traits passed.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u8-grade4-final-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ecosystems\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rocks/landforms."
                    },
                    {
                              "id": "b",
                              "text": "Water/atmosphere."
                    },
                    {
                              "id": "c",
                              "text": "Design solutions."
                    },
                    {
                              "id": "d",
                              "text": "Living connections."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ecosystems\" means Living connections."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ecosystems\" means Living connections.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ecosystems** = Living connections.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u8-grade4-final-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Earth's surface\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Water/atmosphere."
                    },
                    {
                              "id": "b",
                              "text": "Rocks/landforms."
                    },
                    {
                              "id": "c",
                              "text": "Design solutions."
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
                              "statement": "\"Earth's surface\" means Rocks/landforms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Earth's surface\" means Rocks/landforms.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Earth's surface** = Rocks/landforms.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
