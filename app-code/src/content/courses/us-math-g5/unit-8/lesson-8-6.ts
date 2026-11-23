import type { Lesson } from "../../../types.ts";

export const lesson86: Lesson = {
  id: "m5-u8-lesson-8-6",
  code: "8-6",
  title: "Grade 5 Final Review",
  goal: "I CAN use all Grade 5 math skills together.",
  standards: ["5.NBT.A.1", "5.NBT.B.5", "5.NF.A.1", "5.NF.B.4", "5.NBT.B.7", "5.MD.C.4", "5.G.A.1", "5.MD.B.2"],
  vocabulary: [
    { term: "Place value", definition: "Digit position." },
    { term: "Operations", definition: "Add, subtract, multiply, divide." },
    { term: "Fractions", definition: "Parts of whole." },
    { term: "Decimals", definition: "Base-ten fractions." },
    { term: "Measurement", definition: "Volume, coordinate." },
    { term: "Geometry", definition: "Shapes, symmetry." },
    { term: "Data", definition: "Graphs, plots." },
    { term: "Review", definition: "All skills." },
  ],
  concepts: [
    {
      id: "m5-u8-grade5-final",
      title: "Grade 5 final review",
      skill: "Combine all Grade 5 math skills.",
      lesson: {
        sections: [
          {
            heading: "All of Grade 5 math",
            body: "Grade 5 covers **place value** to billions, **operations** (all four), **fractions** (all operations), **decimals**, **measurement** (volume, coordinate), **geometry** (classify, symmetry), and **data** (line plots, graphs).",
          },
          {
            heading: "You are a Grade 5 mathematician!",
            body: "You can work with large numbers, all operations on fractions and decimals, volume and coordinate geometry, shape classification, and data analysis. These are the foundations for Grade 6!",
          },
        ],
        keyFormulas: [
          { name: "Grade 5 math", statement: "Place value + operations + fractions + decimals + measurement + geometry + data = Grade 5 mastery." },
        ],
        workedExample: {
          problem: "Show all skills: place value, operations, fractions, decimals, measurement, geometry, data.",
          solution: "All skills demonstrated = Grade 5 math mastery.",
        },
      },
      questions: [
        {
          id: "m5-u8-grade5-final-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Grade 5 math includes which skills?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only place value"
                    },
                    {
                              "id": "b",
                              "text": "place value, operations, fractions, decimals, measurement, geometry, data"
                    },
                    {
                              "id": "c",
                              "text": "only fractions"
                    },
                    {
                              "id": "d",
                              "text": "only geometry"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All Grade 5 math skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All Grade 5 math skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "place value, operations, fractions, decimals, measurement, geometry, data",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m5-u8-grade5-final-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Show all your skills: write a number to billions, calculate a fraction operation, add decimals, find volume, classify a shape, and interpret a graph.",
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
                                                  "All math",
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
                                                  "All math",
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
                    "**e.g., '456,789,012 in words; 2/3+1/4=11/12; 3.4+2.7=6.1; V=30cm³; rectangle=parallelogram; graph trend=increasing.'**"
          ]
},
        },
        {
          id: "m5-u8-grade5-final-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "You are ready for Grade 6 math because you can...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "do algebra"
                    },
                    {
                              "id": "b",
                              "text": "work with large numbers, all fraction/decimal operations, volume, coordinate geometry, shape classification, and data"
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
                              "statement": "Grade 5 skills prepare you for Grade 6."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Grade 5 skills prepare you for Grade 6.",
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
          id: "m5-u8-grade5-final-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Place value\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Add, subtract, multiply, divide."
                    },
                    {
                              "id": "b",
                              "text": "Digit position."
                    },
                    {
                              "id": "c",
                              "text": "Parts of whole."
                    },
                    {
                              "id": "d",
                              "text": "Base-ten fractions."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Place value\" means Digit position."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Place value\" means Digit position.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Place value** = Digit position.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u8-grade5-final-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Operations\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Parts of whole."
                    },
                    {
                              "id": "b",
                              "text": "Base-ten fractions."
                    },
                    {
                              "id": "c",
                              "text": "Volume, coordinate."
                    },
                    {
                              "id": "d",
                              "text": "Add, subtract, multiply, divide."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Operations\" means Add, subtract, multiply, divide."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Operations\" means Add, subtract, multiply, divide.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Operations** = Add, subtract, multiply, divide.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u8-grade5-final-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fractions\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Base-ten fractions."
                    },
                    {
                              "id": "b",
                              "text": "Parts of whole."
                    },
                    {
                              "id": "c",
                              "text": "Volume, coordinate."
                    },
                    {
                              "id": "d",
                              "text": "Shapes, symmetry."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fractions\" means Parts of whole."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fractions\" means Parts of whole.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fractions** = Parts of whole.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u8-grade5-final-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Decimals\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Volume, coordinate."
                    },
                    {
                              "id": "b",
                              "text": "Shapes, symmetry."
                    },
                    {
                              "id": "c",
                              "text": "Graphs, plots."
                    },
                    {
                              "id": "d",
                              "text": "Base-ten fractions."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Decimals\" means Base-ten fractions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Decimals\" means Base-ten fractions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Decimals** = Base-ten fractions.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u8-grade5-final-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Measurement\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Shapes, symmetry."
                    },
                    {
                              "id": "b",
                              "text": "Volume, coordinate."
                    },
                    {
                              "id": "c",
                              "text": "Graphs, plots."
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
                              "statement": "\"Measurement\" means Volume, coordinate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Measurement\" means Volume, coordinate.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Measurement** = Volume, coordinate.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
