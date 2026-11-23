import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "sci4-u1-lesson-1-5",
  code: "1-5",
  title: "Heat and Energy Review",
  goal: "I CAN use all heat and energy skills.",
  standards: ["PS3.A"],
  vocabulary: [
    { term: "Heat", definition: "Energy transfer." },
    { term: "Temperature", definition: "Hot/cold." },
    { term: "Conduction", definition: "Direct contact." },
    { term: "Convection", definition: "Fluid movement." },
    { term: "Radiation", definition: "Waves." },
    { term: "Conductor", definition: "Transfers heat." },
    { term: "Insulator", definition: "Blocks heat." },
    { term: "Conservation", definition: "Energy stays same." },
  ],
  concepts: [
    {
      id: "sci4-u1-heat-review",
      title: "Heat and energy review",
      skill: "Combine heat basics, transfer methods and conservation.",
      lesson: {
        sections: [
          {
            heading: "All heat skills",
            body: "Explain **heat** and **temperature**, the three **transfer methods** (conduction, convection, radiation), and **energy conservation**.",
          },
          {
            heading: "Put it together",
            body: "Use all heat skills to understand energy movement.",
          },
        ],
        keyFormulas: [
          { name: "Heat", statement: "Basics + transfer + conservation = complete understanding." },
        ],
        workedExample: {
          problem: "Use all heat skills.",
          solution: "All skills = complete heat understanding.",
        },
      },
      questions: [
        {
          id: "sci4-u1-heat-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Heat skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only temperature"
                    },
                    {
                              "id": "b",
                              "text": "heat, transfer, conservation"
                    },
                    {
                              "id": "c",
                              "text": "only transfer"
                    },
                    {
                              "id": "d",
                              "text": "only conservation"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All heat skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All heat skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "heat, transfer, conservation",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci4-u1-heat-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Explain heat transfer, name all three methods, and explain energy conservation.",
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
                                                  "All heat",
                                                  "All three skills."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All heat",
                                                  "All three skills."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all three.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Heat flows hot->cold; conduction/convection/radiation; energy conserved.'**"
          ]
},
        },
        {
          id: "sci4-u1-heat-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Understanding heat helps us...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "nothing"
                    },
                    {
                              "id": "b",
                              "text": "design better insulation and cooking"
                    },
                    {
                              "id": "c",
                              "text": "only science"
                    },
                    {
                              "id": "d",
                              "text": "only school"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Practical applications."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Practical applications.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "design better insulation and cooking",
          "commonErrors": [
                    "Thinks it's useless."
          ]
},
        },
        {
          id: "sci4-u1-heat-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Heat\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hot/cold."
                    },
                    {
                              "id": "b",
                              "text": "Energy transfer."
                    },
                    {
                              "id": "c",
                              "text": "Direct contact."
                    },
                    {
                              "id": "d",
                              "text": "Fluid movement."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Heat\" means Energy transfer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Heat\" means Energy transfer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Heat** = Energy transfer.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u1-heat-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Temperature\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Direct contact."
                    },
                    {
                              "id": "b",
                              "text": "Fluid movement."
                    },
                    {
                              "id": "c",
                              "text": "Waves."
                    },
                    {
                              "id": "d",
                              "text": "Hot/cold."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Temperature\" means Hot/cold."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Temperature\" means Hot/cold.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Temperature** = Hot/cold.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u1-heat-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Conduction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fluid movement."
                    },
                    {
                              "id": "b",
                              "text": "Direct contact."
                    },
                    {
                              "id": "c",
                              "text": "Waves."
                    },
                    {
                              "id": "d",
                              "text": "Transfers heat."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Conduction\" means Direct contact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Conduction\" means Direct contact.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Conduction** = Direct contact.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u1-heat-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Convection\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Waves."
                    },
                    {
                              "id": "b",
                              "text": "Transfers heat."
                    },
                    {
                              "id": "c",
                              "text": "Blocks heat."
                    },
                    {
                              "id": "d",
                              "text": "Fluid movement."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Convection\" means Fluid movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Convection\" means Fluid movement.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Convection** = Fluid movement.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u1-heat-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Radiation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Transfers heat."
                    },
                    {
                              "id": "b",
                              "text": "Waves."
                    },
                    {
                              "id": "c",
                              "text": "Blocks heat."
                    },
                    {
                              "id": "d",
                              "text": "Energy stays same."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Radiation\" means Waves."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Radiation\" means Waves.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Radiation** = Waves.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
