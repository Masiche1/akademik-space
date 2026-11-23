import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "sci6-u6-lesson-6-2",
  code: "6-2",
  title: "Water Cycle",
  goal: "I CAN explain the water cycle and its importance.",
  standards: ["ESS2.C"],
  vocabulary: [
    { term: "Water cycle", definition: "Continuous process." },
    { term: "Evaporation", definition: "Liquid to gas." },
    { term: "Condensation", definition: "Gas to liquid." },
    { term: "Precipitation", definition: "Rain/snow." },
    { term: "Collection", definition: "Gathering." },
    { term: "Transpiration", definition: "Plant water loss." },
    { term: "Runoff", definition: "Surface flow." },
    { term: "Groundwater", definition: "Underground water." },
  ],
  concepts: [
    {
      id: "sci6-u6-water-cycle",
      title: "Water cycle",
      skill: "Explain the stages of the water cycle and its importance to life.",
      lesson: {
        sections: [
          {
            heading: "Stages",
            body: "**Evaporation** (water -> vapor) -> **Condensation** (vapor -> clouds) -> **Precipitation** (rain/snow) -> **Collection** (rivers, lakes, oceans).",
          },
          {
            heading: "Importance",
            body: "The water cycle **distributes fresh water** and is essential for all life on Earth.",
          },
        ],
        keyFormulas: [
          { name: "Water cycle", statement: "Evaporation -> condensation -> precipitation -> collection = continuous." },
        ],
        workedExample: {
          problem: "Why is the water cycle important?",
          solution: "**It distributes fresh water, supports all life, and regulates climate.**",
        },
      },
      questions: [
        {
          id: "sci6-u6-water-cycle-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Evaporation' is the process of...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "gas to liquid"
                    },
                    {
                              "id": "b",
                              "text": "liquid to gas"
                    },
                    {
                              "id": "c",
                              "text": "rain falling"
                    },
                    {
                              "id": "d",
                              "text": "water collecting"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Liquid to gas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Liquid to gas.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "liquid to gas",
          "commonErrors": [
                    "Wrong process."
          ]
},
        },
        {
          id: "sci6-u6-water-cycle-q2",
          difficulty: "core",
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
                              "text": "rain, snow, sleet, hail"
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
                              "statement": "Rain/snow/etc."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rain/snow/etc.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "rain, snow, sleet, hail",
          "commonErrors": [
                    "Wrong process."
          ]
},
        },
        {
          id: "sci6-u6-water-cycle-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe the four main stages of the water cycle in order.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Water cycle",
                              "statement": "Four stages."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes stages.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Evaporation -> Condensation -> Precipitation -> Collection.**",
          "commonErrors": [
                    "Wrong order.",
                    "Missing stages."
          ]
},
        },
        {
          id: "sci6-u6-water-cycle-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Transpiration' is water loss from...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "animals"
                    },
                    {
                              "id": "b",
                              "text": "plants"
                    },
                    {
                              "id": "c",
                              "text": "oceans"
                    },
                    {
                              "id": "d",
                              "text": "rivers"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Plants."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plants.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "plants",
          "commonErrors": [
                    "Wrong source."
          ]
},
        },
        {
          id: "sci6-u6-water-cycle-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how the water cycle distributes fresh water and why it's essential for life.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Water cycle",
                              "statement": "Distribution + importance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains distribution.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains importance.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Cycle moves water from oceans to land as rain/snow; essential for drinking, agriculture, ecosystems.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No importance."
          ]
},
        },
        {
          id: "sci6-u6-water-cycle-q6",
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
                              "text": "Continuous process."
                    },
                    {
                              "id": "c",
                              "text": "Gas to liquid."
                    },
                    {
                              "id": "d",
                              "text": "Rain/snow."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Water cycle\" means Continuous process."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Water cycle\" means Continuous process.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Water cycle** = Continuous process.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u6-water-cycle-q7",
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
                              "text": "Rain/snow."
                    },
                    {
                              "id": "c",
                              "text": "Gathering."
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
          id: "sci6-u6-water-cycle-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Condensation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rain/snow."
                    },
                    {
                              "id": "b",
                              "text": "Gas to liquid."
                    },
                    {
                              "id": "c",
                              "text": "Gathering."
                    },
                    {
                              "id": "d",
                              "text": "Plant water loss."
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
