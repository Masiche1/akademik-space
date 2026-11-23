import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "sci5-u2-lesson-2-5",
  code: "2-5",
  title: "Energy Review",
  goal: "I CAN use all energy skills.",
  standards: ["PS3.A", "PS3.B", "PS4.A"],
  vocabulary: [
    { term: "Energy", definition: "Ability to do work." },
    { term: "Kinetic", definition: "Motion energy." },
    { term: "Potential", definition: "Stored energy." },
    { term: "Conservation", definition: "Never created/destroyed." },
    { term: "Heat", definition: "Thermal energy." },
    { term: "Sound", definition: "Vibration." },
    { term: "Light", definition: "Visible." },
    { term: "Transfer", definition: "Move between forms." },
  ],
  concepts: [
    {
      id: "sci5-u2-energy-review",
      title: "Energy review",
      skill: "Combine energy forms, conservation, heat and sound/light.",
      lesson: {
        sections: [
          {
            heading: "All energy skills",
            body: "Identify **energy forms**, **conservation**, **heat transfer**, and **sound/light waves**.",
          },
          {
            heading: "Put it together",
            body: "Use all energy skills to trace energy.",
          },
        ],
        keyFormulas: [
          { name: "Energy", statement: "Forms + conservation + heat + sound/light = all skills." },
        ],
        workedExample: {
          problem: "Use all energy skills.",
          solution: "All skills = complete energy understanding.",
        },
      },
      questions: [
        {
          id: "sci5-u2-energy-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Energy skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only forms"
                    },
                    {
                              "id": "b",
                              "text": "forms, conservation, heat, sound/light"
                    },
                    {
                              "id": "c",
                              "text": "only heat"
                    },
                    {
                              "id": "d",
                              "text": "only sound"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All energy skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All energy skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "forms, conservation, heat, sound/light",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci5-u2-energy-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Identify energy forms in a system, trace energy conservation, describe heat transfer, and explain how sound travels.",
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
                                                  "All energy",
                                                  "All four skills."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All energy",
                                                  "All four skills."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Ball: KE+PE; Conservation: transforms; Heat: conduction; Sound: vibration through air.'**"
          ]
},
        },
        {
          id: "sci5-u2-energy-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Energy is important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it's required"
                    },
                    {
                              "id": "b",
                              "text": "it powers everything and explains how things work"
                    },
                    {
                              "id": "c",
                              "text": "it's math"
                    },
                    {
                              "id": "d",
                              "text": "it's easy"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Powers everything/explains."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Powers everything/explains.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "it powers everything and explains how things work",
          "commonErrors": [
                    "Thinks it's just required."
          ]
},
        },
        {
          id: "sci5-u2-energy-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Energy\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Motion energy."
                    },
                    {
                              "id": "b",
                              "text": "Ability to do work."
                    },
                    {
                              "id": "c",
                              "text": "Stored energy."
                    },
                    {
                              "id": "d",
                              "text": "Never created/destroyed."
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
          id: "sci5-u2-energy-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Kinetic\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Stored energy."
                    },
                    {
                              "id": "b",
                              "text": "Never created/destroyed."
                    },
                    {
                              "id": "c",
                              "text": "Thermal energy."
                    },
                    {
                              "id": "d",
                              "text": "Motion energy."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Kinetic\" means Motion energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Kinetic\" means Motion energy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Kinetic** = Motion energy.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u2-energy-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Potential\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Never created/destroyed."
                    },
                    {
                              "id": "b",
                              "text": "Stored energy."
                    },
                    {
                              "id": "c",
                              "text": "Thermal energy."
                    },
                    {
                              "id": "d",
                              "text": "Vibration."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Potential\" means Stored energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Potential\" means Stored energy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Potential** = Stored energy.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u2-energy-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Conservation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Thermal energy."
                    },
                    {
                              "id": "b",
                              "text": "Vibration."
                    },
                    {
                              "id": "c",
                              "text": "Visible."
                    },
                    {
                              "id": "d",
                              "text": "Never created/destroyed."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Conservation\" means Never created/destroyed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Conservation\" means Never created/destroyed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Conservation** = Never created/destroyed.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u2-energy-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Heat\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Vibration."
                    },
                    {
                              "id": "b",
                              "text": "Thermal energy."
                    },
                    {
                              "id": "c",
                              "text": "Visible."
                    },
                    {
                              "id": "d",
                              "text": "Move between forms."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Heat\" means Thermal energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Heat\" means Thermal energy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Heat** = Thermal energy.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
