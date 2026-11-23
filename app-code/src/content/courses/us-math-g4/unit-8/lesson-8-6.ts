import type { Lesson } from "../../../types.ts";

export const lesson86: Lesson = {
  id: "m4-u8-lesson-8-6",
  code: "8-6",
  title: "Grade 4 Final Review",
  goal: "I CAN use all Grade 4 math skills together.",
  standards: ["4.NBT.A.1", "4.NBT.B.4", "4.NBT.B.5", "4.NBT.B.6", "4.NF.A.1", "4.NF.C.6", "4.MD.A.3", "4.G.A.1"],
  vocabulary: [
    { term: "Place value", definition: "Digit position value." },
    { term: "Operations", definition: "Add, subtract, multiply, divide." },
    { term: "Fractions", definition: "Parts of a whole." },
    { term: "Decimals", definition: "Base-ten fractions." },
    { term: "Measurement", definition: "Length, perimeter, area." },
    { term: "Data", definition: "Line plots." },
    { term: "Geometry", definition: "Angles, lines, shapes." },
    { term: "Review", definition: "All skills together." },
  ],
  concepts: [
    {
      id: "m4-u8-grade4-final",
      title: "Grade 4 final review",
      skill: "Combine all Grade 4 math skills.",
      lesson: {
        sections: [
          {
            heading: "All of Grade 4 math",
            body: "Grade 4 covers **place value** to 1,000,000, **operations** (add/subtract/multiply/divide), **fractions and decimals**, **measurement** (length/perimeter/area), **data** (line plots), and **geometry** (angles/lines/shapes).",
          },
          {
            heading: "You are a Grade 4 mathematician!",
            body: "You can work with large numbers, all four operations, fractions and decimals, measurement, data and geometry. These are the foundations for Grade 5!",
          },
        ],
        keyFormulas: [
          { name: "Grade 4 math", statement: "Place value + operations + fractions + measurement + data + geometry = Grade 4 mastery." },
        ],
        workedExample: {
          problem: "Show all skills: place value, operations, fractions, measurement, data, geometry.",
          solution: "All skills demonstrated = Grade 4 math mastery.",
        },
      },
      questions: [
        {
          id: "m4-u8-grade4-final-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Grade 4 math includes which skills?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only place value"
                    },
                    {
                              "id": "b",
                              "text": "place value, operations, fractions, measurement, data, geometry"
                    },
                    {
                              "id": "c",
                              "text": "only operations"
                    },
                    {
                              "id": "d",
                              "text": "only fractions"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All Grade 4 math skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All Grade 4 math skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "place value, operations, fractions, measurement, data, geometry",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m4-u8-grade4-final-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Show all your skills: write a large number in word form, calculate a multiplication, convert a fraction to decimal, find perimeter and area, and identify an angle type.",
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
                    "**e.g., '4,567,890 in words; 34x25=850; 1/2=0.5; perimeter=14; area=12; 45°=acute'**"
          ]
},
        },
        {
          id: "m4-u8-grade4-final-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "You are ready for Grade 5 math because you can...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "do algebra"
                    },
                    {
                              "id": "b",
                              "text": "work with large numbers, all operations, fractions, decimals, measurement, data, geometry"
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
          id: "m4-u8-grade4-final-q4",
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
                              "text": "Digit position value."
                    },
                    {
                              "id": "c",
                              "text": "Parts of a whole."
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
                              "statement": "\"Place value\" means Digit position value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Place value\" means Digit position value.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Place value** = Digit position value.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u8-grade4-final-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Operations\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Parts of a whole."
                    },
                    {
                              "id": "b",
                              "text": "Base-ten fractions."
                    },
                    {
                              "id": "c",
                              "text": "Length, perimeter, area."
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
          id: "m4-u8-grade4-final-q6",
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
                              "text": "Parts of a whole."
                    },
                    {
                              "id": "c",
                              "text": "Length, perimeter, area."
                    },
                    {
                              "id": "d",
                              "text": "Line plots."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fractions\" means Parts of a whole."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fractions\" means Parts of a whole.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fractions** = Parts of a whole.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u8-grade4-final-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Decimals\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Length, perimeter, area."
                    },
                    {
                              "id": "b",
                              "text": "Line plots."
                    },
                    {
                              "id": "c",
                              "text": "Angles, lines, shapes."
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
          id: "m4-u8-grade4-final-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Measurement\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Line plots."
                    },
                    {
                              "id": "b",
                              "text": "Length, perimeter, area."
                    },
                    {
                              "id": "c",
                              "text": "Angles, lines, shapes."
                    },
                    {
                              "id": "d",
                              "text": "All skills together."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Measurement\" means Length, perimeter, area."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Measurement\" means Length, perimeter, area.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Measurement** = Length, perimeter, area.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
