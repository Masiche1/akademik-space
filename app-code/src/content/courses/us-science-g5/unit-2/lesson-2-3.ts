import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "sci5-u2-lesson-2-3",
  code: "2-3",
  title: "Heat Energy",
  goal: "I CAN describe heat transfer and temperature.",
  standards: ["PS3.A"],
  vocabulary: [
    { term: "Heat", definition: "Thermal energy." },
    { term: "Temperature", definition: "How hot/cold." },
    { term: "Transfer", definition: "Move heat." },
    { term: "Conduction", definition: "Through direct contact." },
    { term: "Convection", definition: "Through fluid movement." },
    { term: "Radiation", definition: "Through waves/space." },
    { term: "Thermometer", definition: "Measures temperature." },
    { term: "Insulator", definition: "Blocks heat." },
  ],
  concepts: [
    {
      id: "sci5-u2-heat-energy",
      title: "Heat energy",
      skill: "Describe heat transfer methods and temperature.",
      lesson: {
        sections: [
          {
            heading: "Three ways",
            body: "Heat transfers by **conduction** (direct contact, like touching a hot pan), **convection** (fluid movement, like boiling water), and **radiation** (waves, like sunlight).",
          },
          {
            heading: "Temperature",
            body: "**Temperature** measures how hot/cold something is, using a **thermometer**. Heat flows from **hot to cold** until equal.",
          },
        ],
        keyFormulas: [
          { name: "Heat transfer", statement: "Conduction + convection + radiation = ways heat moves." },
        ],
        workedExample: {
          problem: "How does heat transfer in a pot of boiling water?",
          solution: "**Conduction** (pot heats water) + **convection** (hot water rises, cold sinks).",
        },
      },
      questions: [
        {
          id: "sci5-u2-heat-energy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Conduction' is heat transfer through...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "air"
                    },
                    {
                              "id": "b",
                              "text": "direct contact"
                    },
                    {
                              "id": "c",
                              "text": "waves"
                    },
                    {
                              "id": "d",
                              "text": "space"
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
                    "Confuses with convection."
          ]
},
        },
        {
          id: "sci5-u2-heat-energy-q2",
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
                              "text": "solid"
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
                    "Confuses with conduction."
          ]
},
        },
        {
          id: "sci5-u2-heat-energy-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Identify the heat transfer method: touching a hot stove, boiling water, feeling sunlight.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Heat",
                              "statement": "All three identified."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies all three.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Stove: conduction; Boiling water: convection; Sunlight: radiation.**",
          "commonErrors": [
                    "Wrong methods.",
                    "Missing items."
          ]
},
        },
        {
          id: "sci5-u2-heat-energy-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Heat always flows from...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "cold to hot"
                    },
                    {
                              "id": "b",
                              "text": "hot to cold"
                    },
                    {
                              "id": "c",
                              "text": "hot to hot"
                    },
                    {
                              "id": "d",
                              "text": "nowhere"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Hot to cold."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hot to cold.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "hot to cold",
          "commonErrors": [
                    "Wrong direction."
          ]
},
        },
        {
          id: "sci5-u2-heat-energy-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain the three methods of heat transfer with real-world examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Heat",
                              "statement": "All three explained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains conduction.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains convection + radiation.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Conduction: touching hot pan; Convection: boiling water; Radiation: sunlight/warm fire.**",
          "commonErrors": [
                    "Cannot explain.",
                    "Missing methods."
          ]
},
        },
        {
          id: "sci5-u2-heat-energy-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Heat\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How hot/cold."
                    },
                    {
                              "id": "b",
                              "text": "Thermal energy."
                    },
                    {
                              "id": "c",
                              "text": "Move heat."
                    },
                    {
                              "id": "d",
                              "text": "Through direct contact."
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
        {
          id: "sci5-u2-heat-energy-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Temperature\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Move heat."
                    },
                    {
                              "id": "b",
                              "text": "Through direct contact."
                    },
                    {
                              "id": "c",
                              "text": "Through fluid movement."
                    },
                    {
                              "id": "d",
                              "text": "How hot/cold."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Temperature\" means How hot/cold."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Temperature\" means How hot/cold.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Temperature** = How hot/cold.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u2-heat-energy-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Transfer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Through direct contact."
                    },
                    {
                              "id": "b",
                              "text": "Move heat."
                    },
                    {
                              "id": "c",
                              "text": "Through fluid movement."
                    },
                    {
                              "id": "d",
                              "text": "Through waves/space."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Transfer\" means Move heat."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Transfer\" means Move heat.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Transfer** = Move heat.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
