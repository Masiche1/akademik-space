import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "sci5-u5-lesson-5-2",
  code: "5-2",
  title: "Water Cycle",
  goal: "I CAN describe the stages of the water cycle.",
  standards: ["ESS2.C"],
  vocabulary: [
    { term: "Water cycle", definition: "Continuous water movement." },
    { term: "Evaporation", definition: "Liquid to gas." },
    { term: "Condensation", definition: "Gas to liquid." },
    { term: "Precipitation", definition: "Water falls." },
    { term: "Collection", definition: "Water gathers." },
    { term: "Runoff", definition: "Water flows." },
    { term: "Transpiration", definition: "Plant water loss." },
    { term: "Groundwater", definition: "Underground water." },
  ],
  concepts: [
    {
      id: "sci5-u5-water-cycle",
      title: "Water cycle",
      skill: "Describe the stages of the water cycle.",
      lesson: {
        sections: [
          {
            heading: "Stages",
            body: "**Evaporation** (water -> vapor), **condensation** (vapor -> clouds), **precipitation** (rain/snow), **collection** (gathers in oceans/lakes), **runoff** (flows to rivers).",
          },
          {
            heading: "Continuous",
            body: "The **water cycle** is **continuous** — water is **recycled** and never created or destroyed.",
          },
        ],
        keyFormulas: [
          { name: "Water cycle", statement: "Evaporation -> condensation -> precipitation -> collection = cycle." },
        ],
        workedExample: {
          problem: "Describe the water cycle in order.",
          solution: "**Evaporation -> Condensation -> Precipitation -> Collection/Runoff -> repeat.**",
        },
      },
      questions: [
        {
          id: "sci5-u5-water-cycle-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Evaporation' is when...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "water falls"
                    },
                    {
                              "id": "b",
                              "text": "liquid water becomes vapor"
                    },
                    {
                              "id": "c",
                              "text": "clouds form"
                    },
                    {
                              "id": "d",
                              "text": "water collects"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Liquid -> vapor."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Liquid -> vapor.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "liquid water becomes vapor",
          "commonErrors": [
                    "Confuses with condensation."
          ]
},
        },
        {
          id: "sci5-u5-water-cycle-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Condensation' is when...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "water evaporates"
                    },
                    {
                              "id": "b",
                              "text": "vapor becomes liquid (clouds)"
                    },
                    {
                              "id": "c",
                              "text": "rain falls"
                    },
                    {
                              "id": "d",
                              "text": "water collects"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Vapor -> liquid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Vapor -> liquid.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "vapor becomes liquid (clouds)",
          "commonErrors": [
                    "Confuses with evaporation."
          ]
},
        },
        {
          id: "sci5-u5-water-cycle-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe the water cycle stages in order and explain how water is recycled.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Water cycle",
                              "statement": "Stages + recycling."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes stages.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains recycling.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Evaporation -> Condensation -> Precipitation -> Collection -> Runoff; water is continuously recycled.**",
          "commonErrors": [
                    "Missing stages.",
                    "No recycling."
          ]
},
        },
        {
          id: "sci5-u5-water-cycle-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Precipitation' refers to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "evaporation"
                    },
                    {
                              "id": "b",
                              "text": "water falling from clouds (rain, snow)"
                    },
                    {
                              "id": "c",
                              "text": "condensation"
                    },
                    {
                              "id": "d",
                              "text": "collection"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Water falling."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Water falling.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "water falling from clouds (rain, snow)",
          "commonErrors": [
                    "Wrong stage."
          ]
},
        },
        {
          id: "sci5-u5-water-cycle-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how the water cycle connects Earth's systems (atmosphere, hydrosphere, biosphere).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Water cycle",
                              "statement": "Systems connected."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes cycle.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains connections.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Water moves between air (atmosphere), water bodies (hydrosphere), and plants/animals (biosphere) — connecting all systems.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No connections."
          ]
},
        },
        {
          id: "sci5-u5-water-cycle-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Water cycle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Liquid to gas."
                    },
                    {
                              "id": "b",
                              "text": "Continuous water movement."
                    },
                    {
                              "id": "c",
                              "text": "Gas to liquid."
                    },
                    {
                              "id": "d",
                              "text": "Water falls."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Water cycle\" means Continuous water movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Water cycle\" means Continuous water movement.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Water cycle** = Continuous water movement.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u5-water-cycle-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Evaporation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Gas to liquid."
                    },
                    {
                              "id": "b",
                              "text": "Water falls."
                    },
                    {
                              "id": "c",
                              "text": "Water gathers."
                    },
                    {
                              "id": "d",
                              "text": "Liquid to gas."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Evaporation\" means Liquid to gas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Evaporation\" means Liquid to gas.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Evaporation** = Liquid to gas.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u5-water-cycle-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Condensation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Water falls."
                    },
                    {
                              "id": "b",
                              "text": "Gas to liquid."
                    },
                    {
                              "id": "c",
                              "text": "Water gathers."
                    },
                    {
                              "id": "d",
                              "text": "Water flows."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Condensation\" means Gas to liquid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Condensation\" means Gas to liquid.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Condensation** = Gas to liquid.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
