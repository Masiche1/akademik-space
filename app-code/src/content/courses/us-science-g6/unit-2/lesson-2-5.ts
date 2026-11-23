import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "sci6-u2-lesson-2-5",
  code: "2-5",
  title: "Energy Review",
  goal: "I CAN use all energy skills.",
  standards: ["MS-PS3-1"],
  vocabulary: [
    { term: "Energy", definition: "Ability to do work." },
    { term: "Kinetic", definition: "Motion." },
    { term: "Potential", definition: "Stored." },
    { term: "Thermal", definition: "Heat." },
    { term: "Transfer", definition: "Move energy." },
    { term: "Conduction", definition: "Contact." },
    { term: "Convection", definition: "Fluid." },
    { term: "Conservation", definition: "Never destroyed." },
  ],
  concepts: [
    {
      id: "sci6-u2-energy-review",
      title: "Energy review",
      skill: "Combine energy forms, transfer methods and conservation.",
      lesson: {
        sections: [
          {
            heading: "All energy skills",
            body: "Identify **forms of energy**, explain **transfer** (conduction/convection/radiation), and apply **conservation**.",
          },
          {
            heading: "Put it together",
            body: "Use all energy skills to understand energy in the world.",
          },
        ],
        keyFormulas: [
          { name: "Energy", statement: "Forms + transfer + conservation = all skills." },
        ],
        workedExample: {
          problem: "Use all energy skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "sci6-u2-energy-review-q1",
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
                              "text": "forms, transfer, conservation"
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
                              "statement": "All skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "forms, transfer, conservation",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci6-u2-energy-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Identify energy forms, explain transfer methods, and apply conservation law.",
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
                                                  "All energy",
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
                    "**e.g., 'Kinetic + potential; Conduction through metal; Energy conserved in transformation.'**"
          ]
},
        },
        {
          id: "sci6-u2-energy-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Energy is important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it's just science"
                    },
                    {
                              "id": "b",
                              "text": "it powers everything in the universe"
                    },
                    {
                              "id": "c",
                              "text": "it's only in schools"
                    },
                    {
                              "id": "d",
                              "text": "it's optional"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Powers everything."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Powers everything.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "it powers everything in the universe",
          "commonErrors": [
                    "Thinks it's useless."
          ]
},
        },
        {
          id: "sci6-u2-energy-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Energy\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Motion."
                    },
                    {
                              "id": "b",
                              "text": "Ability to do work."
                    },
                    {
                              "id": "c",
                              "text": "Stored."
                    },
                    {
                              "id": "d",
                              "text": "Heat."
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
          id: "sci6-u2-energy-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Kinetic\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Stored."
                    },
                    {
                              "id": "b",
                              "text": "Heat."
                    },
                    {
                              "id": "c",
                              "text": "Move energy."
                    },
                    {
                              "id": "d",
                              "text": "Motion."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Kinetic\" means Motion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Kinetic\" means Motion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Kinetic** = Motion.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u2-energy-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Potential\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Heat."
                    },
                    {
                              "id": "b",
                              "text": "Stored."
                    },
                    {
                              "id": "c",
                              "text": "Move energy."
                    },
                    {
                              "id": "d",
                              "text": "Contact."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Potential\" means Stored."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Potential\" means Stored.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Potential** = Stored.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u2-energy-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Thermal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Move energy."
                    },
                    {
                              "id": "b",
                              "text": "Contact."
                    },
                    {
                              "id": "c",
                              "text": "Fluid."
                    },
                    {
                              "id": "d",
                              "text": "Heat."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Thermal\" means Heat."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Thermal\" means Heat.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Thermal** = Heat.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u2-energy-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Transfer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Contact."
                    },
                    {
                              "id": "b",
                              "text": "Move energy."
                    },
                    {
                              "id": "c",
                              "text": "Fluid."
                    },
                    {
                              "id": "d",
                              "text": "Never destroyed."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Transfer\" means Move energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Transfer\" means Move energy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Transfer** = Move energy.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
