import type { Lesson } from "../../../types.ts";

export const lesson85: Lesson = {
  id: "m2-u8-lesson-8-5",
  code: "8-5",
  title: "Grade 2 Final Review",
  goal: "I CAN use all Grade 2 math skills together.",
  standards: ["2.NBT.A.1", "2.NBT.A.2", "2.NBT.A.4", "2.NBT.B.7", "2.OA.A.1", "2.MD.A.1", "2.MD.C.7", "2.MD.C.8", "2.MD.D.10", "2.G.A.1", "2.G.A.3"],
  vocabulary: [
    { term: "Numbers", definition: "Place value, add, subtract." },
    { term: "Measurement", definition: "Length, time, money." },
    { term: "Data", definition: "Collect and graph." },
    { term: "Geometry", definition: "Shapes and partition." },
    { term: "Compare", definition: "See which is more." },
    { term: "Add", definition: "Combine amounts." },
    { term: "Subtract", definition: "Take away." },
    { term: "Shape", definition: "Closed figure." },
  ],
  concepts: [
    {
      id: "m2-u8-grade2-final",
      title: "Grade 2 final review",
      skill: "Combine all Grade 2 math: numbers, measurement, data and geometry.",
      lesson: {
        sections: [
          {
            heading: "All of Grade 2 math",
            body: "Grade 2 math covers **numbers** (place value, add/subtract to 1000), **measurement** (length, time, money), **data** (collect and graph), and **geometry** (shapes and partitioning).",
          },
          {
            heading: "You are a Grade 2 mathematician!",
            body: "You can work with numbers to 1000, measure, graph data, and explore shapes. These are the foundations for Grade 3!",
          },
        ],
        keyFormulas: [
          { name: "Grade 2 math", statement: "Numbers + measurement + data + geometry = Grade 2 mastery." },
        ],
        workedExample: {
          problem: "Show all skills: add/subtract within 1000, measure, graph, identify shapes.",
          solution: "All skills demonstrated = Grade 2 math mastery.",
        },
      },
      questions: [
        {
          id: "m2-u8-grade2-final-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Grade 2 math includes which topics?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only numbers"
                    },
                    {
                              "id": "b",
                              "text": "numbers, measurement, data, geometry"
                    },
                    {
                              "id": "c",
                              "text": "only measurement"
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
                              "statement": "All Grade 2 topics."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All Grade 2 topics.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "All Grade 2 topics.",
          "commonErrors": [
                    "Lists one topic."
          ]
},
        },
        {
          id: "m2-u8-grade2-final-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Show all your skills: solve an addition problem, measure an object, make a graph, and identify a shape.",
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
                                                  "math",
                                                  "All skills",
                                                  "Numbers + measurement + data + geometry."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "math",
                                                  "All skills",
                                                  "Numbers + measurement + data + geometry."
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
                              "markCode": "A"
                    }
          ],
          "commonErrors": [
                    "e.g., 456+345=801; 7 inches; bar graph; cube (6 faces)"
          ]
},
        },
        {
          id: "m2-u8-grade2-final-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "You are ready for Grade 3 math because you can...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "do fractions"
                    },
                    {
                              "id": "b",
                              "text": "work with numbers to 1000, measure, graph, explore shapes"
                    },
                    {
                              "id": "c",
                              "text": "do algebra"
                    },
                    {
                              "id": "d",
                              "text": "read textbooks"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Grade 2 math prepares you for Grade 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Grade 2 math prepares you for Grade 3.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "G2 math skills",
          "commonErrors": [
                    "Thinks you need advanced skills."
          ]
},
        },
        {
          id: "m2-u8-grade2-final-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Numbers\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Length, time, money."
                    },
                    {
                              "id": "b",
                              "text": "Place value, add, subtract."
                    },
                    {
                              "id": "c",
                              "text": "Collect and graph."
                    },
                    {
                              "id": "d",
                              "text": "Shapes and partition."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Numbers\" means Place value, add, subtract."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Numbers\" means Place value, add, subtract.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Numbers** = Place value, add, subtract.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u8-grade2-final-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Measurement\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Collect and graph."
                    },
                    {
                              "id": "b",
                              "text": "Shapes and partition."
                    },
                    {
                              "id": "c",
                              "text": "See which is more."
                    },
                    {
                              "id": "d",
                              "text": "Length, time, money."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Measurement\" means Length, time, money."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Measurement\" means Length, time, money.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Measurement** = Length, time, money.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u8-grade2-final-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Data\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Shapes and partition."
                    },
                    {
                              "id": "b",
                              "text": "Collect and graph."
                    },
                    {
                              "id": "c",
                              "text": "See which is more."
                    },
                    {
                              "id": "d",
                              "text": "Combine amounts."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Data\" means Collect and graph."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Data\" means Collect and graph.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Data** = Collect and graph.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u8-grade2-final-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Geometry\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "See which is more."
                    },
                    {
                              "id": "b",
                              "text": "Combine amounts."
                    },
                    {
                              "id": "c",
                              "text": "Take away."
                    },
                    {
                              "id": "d",
                              "text": "Shapes and partition."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Geometry\" means Shapes and partition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Geometry\" means Shapes and partition.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Geometry** = Shapes and partition.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u8-grade2-final-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compare\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Combine amounts."
                    },
                    {
                              "id": "b",
                              "text": "See which is more."
                    },
                    {
                              "id": "c",
                              "text": "Take away."
                    },
                    {
                              "id": "d",
                              "text": "Closed figure."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Compare\" means See which is more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Compare\" means See which is more.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Compare** = See which is more.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
