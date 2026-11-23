import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "sci6-u2-lesson-2-2",
  code: "2-2",
  title: "Energy Transfer",
  goal: "I CAN explain how energy is transferred.",
  standards: ["MS-PS3-1"],
  vocabulary: [
    { term: "Transfer", definition: "Move energy." },
    { term: "Conduction", definition: "Direct contact." },
    { term: "Convection", definition: "Fluid movement." },
    { term: "Radiation", definition: "Electromagnetic." },
    { term: "Heat", definition: "Thermal energy." },
    { term: "Work", definition: "Energy transfer by force." },
    { term: "Insulator", definition: "Blocks heat." },
    { term: "Conduct", definition: "Passes heat." },
  ],
  concepts: [
    {
      id: "sci6-u2-energy-transfer",
      title: "Energy transfer",
      skill: "Explain how thermal energy transfers through conduction, convection and radiation.",
      lesson: {
        sections: [
          {
            heading: "Three ways",
            body: "**Conduction**: direct contact (spoon in hot soup). **Convection**: fluid movement (hot air rises). **Radiation**: electromagnetic waves (sunlight).",
          },
          {
            heading: "Insulators/conductors",
            body: "**Insulators** block heat transfer; **conductors** allow it.",
          },
        ],
        keyFormulas: [
          { name: "Transfer", statement: "Conduction + convection + radiation = heat transfer." },
        ],
        workedExample: {
          problem: "Why does a metal spoon get hot in soup but a wooden spoon doesn't?",
          solution: "**Metal is a good conductor (transfers heat); wood is an insulator (blocks heat).**",
        },
      },
      questions: [
        {
          id: "sci6-u2-energy-transfer-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Conduction' is heat transfer through...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "fluid movement"
                    },
                    {
                              "id": "b",
                              "text": "direct contact"
                    },
                    {
                              "id": "c",
                              "text": "radiation"
                    },
                    {
                              "id": "d",
                              "text": "waves"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Direct contact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Direct contact.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "direct contact",
          "commonErrors": [
                    "Wrong method."
          ]
},
        },
        {
          id: "sci6-u2-energy-transfer-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Convection' is heat transfer through...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "direct contact"
                    },
                    {
                              "id": "b",
                              "text": "fluid movement"
                    },
                    {
                              "id": "c",
                              "text": "radiation"
                    },
                    {
                              "id": "d",
                              "text": "waves"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Fluid movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fluid movement.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "fluid movement",
          "commonErrors": [
                    "Wrong method."
          ]
},
        },
        {
          id: "sci6-u2-energy-transfer-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Identify the heat transfer method: (a) Sun warming your face, (b) Hot water rising in a pot, (c) Metal spoon heating in soup.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Transfer",
                              "statement": "All three identified."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies methods.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Sun: radiation; Hot water: convection; Spoon: conduction.**",
          "commonErrors": [
                    "Wrong methods.",
                    "Missing items."
          ]
},
        },
        {
          id: "sci6-u2-energy-transfer-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Insulator' is a material that...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "conducts heat"
                    },
                    {
                              "id": "b",
                              "text": "blocks heat transfer"
                    },
                    {
                              "id": "c",
                              "text": "creates heat"
                    },
                    {
                              "id": "d",
                              "text": "only conducts electricity"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Blocks heat."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Blocks heat.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "blocks heat transfer",
          "commonErrors": [
                    "Confuses with conductor."
          ]
},
        },
        {
          id: "sci6-u2-energy-transfer-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Describe an example of each heat transfer method (conduction, convection, radiation) in daily life.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Transfer",
                              "statement": "Three examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gives examples.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Conduction: spoon in soup; Convection: boiling water; Radiation: sunlight warming skin.**",
          "commonErrors": [
                    "Fewer than three.",
                    "Wrong examples."
          ]
},
        },
        {
          id: "sci6-u2-energy-transfer-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Transfer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Direct contact."
                    },
                    {
                              "id": "b",
                              "text": "Move energy."
                    },
                    {
                              "id": "c",
                              "text": "Fluid movement."
                    },
                    {
                              "id": "d",
                              "text": "Electromagnetic."
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
        {
          id: "sci6-u2-energy-transfer-q7",
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
                              "text": "Electromagnetic."
                    },
                    {
                              "id": "c",
                              "text": "Thermal energy."
                    },
                    {
                              "id": "d",
                              "text": "Direct contact."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "sci6-u2-energy-transfer-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Convection\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Electromagnetic."
                    },
                    {
                              "id": "b",
                              "text": "Fluid movement."
                    },
                    {
                              "id": "c",
                              "text": "Thermal energy."
                    },
                    {
                              "id": "d",
                              "text": "Energy transfer by force."
                    }
          ],
          "correctChoiceId": "b"
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
      ],
    },
  ],
};
