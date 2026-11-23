import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "sci4-u1-lesson-1-2",
  code: "1-2",
  title: "Heat Transfer",
  goal: "I CAN explain conduction, convection and radiation.",
  standards: ["PS3.A"],
  vocabulary: [
    { term: "Conduction", definition: "Heat through direct contact." },
    { term: "Convection", definition: "Heat through fluid movement." },
    { term: "Radiation", definition: "Heat through waves." },
    { term: "Conductor", definition: "Material that transfers heat." },
    { term: "Insulator", definition: "Material that blocks heat." },
    { term: "Contact", definition: "Touching." },
    { term: "Current", definition: "Moving fluid." },
    { term: "Wave", definition: "Energy through space." },
  ],
  concepts: [
    {
      id: "sci4-u1-heat-transfer",
      title: "Heat transfer",
      skill: "Explain the three ways heat transfers: conduction, convection and radiation.",
      lesson: {
        sections: [
          {
            heading: "Three ways",
            body: "Heat moves by **conduction** (direct contact, like a spoon in soup), **convection** (fluid movement, like boiling water), and **radiation** (waves through space, like sunlight).",
          },
          {
            heading: "Conductors vs insulators",
            body: "**Conductors** (metal) transfer heat well; **insulators** (wood, cloth) block heat.",
          },
        ],
        keyFormulas: [
          { name: "Transfer", statement: "Conduction + convection + radiation = all heat movement." },
        ],
        workedExample: {
          problem: "Why does a metal spoon get hot but a wooden spoon doesn't?",
          solution: "Metal is a **conductor** — it transfers heat quickly by **conduction**. Wood is an **insulator**.",
        },
      },
      questions: [
        {
          id: "sci4-u1-heat-transfer-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Heat transfer through direct contact is called...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "convection"
                    },
                    {
                              "id": "b",
                              "text": "conduction"
                    },
                    {
                              "id": "c",
                              "text": "radiation"
                    },
                    {
                              "id": "d",
                              "text": "insulation"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Conduction = direct contact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Conduction = direct contact.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "conduction",
          "commonErrors": [
                    "Wrong method."
          ]
},
        },
        {
          id: "sci4-u1-heat-transfer-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Boiling water heating the pot is an example of...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "conduction"
                    },
                    {
                              "id": "b",
                              "text": "convection"
                    },
                    {
                              "id": "c",
                              "text": "radiation"
                    },
                    {
                              "id": "d",
                              "text": "insulation"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Moving fluid = convection."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Moving fluid = convection.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "convection",
          "commonErrors": [
                    "Wrong method."
          ]
},
        },
        {
          id: "sci4-u1-heat-transfer-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name all three ways heat transfers and give an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Heat transfer",
                              "statement": "Three methods + examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names all three + examples.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Conduction: spoon; Convection: boiling; Radiation: sunlight.'**",
          "commonErrors": [
                    "Only one method.",
                    "No examples."
          ]
},
        },
        {
          id: "sci4-u1-heat-transfer-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'conductor' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "blocks heat"
                    },
                    {
                              "id": "b",
                              "text": "transfers heat well"
                    },
                    {
                              "id": "c",
                              "text": "is cold"
                    },
                    {
                              "id": "d",
                              "text": "is liquid"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Conductor = transfers heat."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Conductor = transfers heat.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "transfers heat well",
          "commonErrors": [
                    "Confuses with insulator."
          ]
},
        },
        {
          id: "sci4-u1-heat-transfer-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why do we wear coats in winter? Explain using heat transfer concepts.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Heat transfer",
                              "statement": "Insulation explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains insulation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Connects to body heat.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Coats are insulators that trap body heat, slowing conduction/convection.'**",
          "commonErrors": [
                    "No explanation.",
                    "Wrong concept."
          ]
},
        },
        {
          id: "sci4-u1-heat-transfer-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Conduction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Heat through fluid movement."
                    },
                    {
                              "id": "b",
                              "text": "Heat through direct contact."
                    },
                    {
                              "id": "c",
                              "text": "Heat through waves."
                    },
                    {
                              "id": "d",
                              "text": "Material that transfers heat."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Conduction\" means Heat through direct contact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Conduction\" means Heat through direct contact.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Conduction** = Heat through direct contact.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u1-heat-transfer-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Convection\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Heat through waves."
                    },
                    {
                              "id": "b",
                              "text": "Material that transfers heat."
                    },
                    {
                              "id": "c",
                              "text": "Material that blocks heat."
                    },
                    {
                              "id": "d",
                              "text": "Heat through fluid movement."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Convection\" means Heat through fluid movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Convection\" means Heat through fluid movement.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Convection** = Heat through fluid movement.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u1-heat-transfer-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Radiation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Material that transfers heat."
                    },
                    {
                              "id": "b",
                              "text": "Heat through waves."
                    },
                    {
                              "id": "c",
                              "text": "Material that blocks heat."
                    },
                    {
                              "id": "d",
                              "text": "Touching."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Radiation\" means Heat through waves."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Radiation\" means Heat through waves.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Radiation** = Heat through waves.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
