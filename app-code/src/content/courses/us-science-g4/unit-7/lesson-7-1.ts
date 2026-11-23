import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "sci4-u7-lesson-7-1",
  code: "7-1",
  title: "The Water Cycle",
  goal: "I CAN explain the stages of the water cycle.",
  standards: ["ESS2.C"],
  vocabulary: [
    { term: "Water cycle", definition: "Water movement." },
    { term: "Evaporation", definition: "Water -> vapor." },
    { term: "Condensation", definition: "Vapor -> droplets." },
    { term: "Precipitation", definition: "Water falls." },
    { term: "Collection", definition: "Water gathers." },
    { term: "Runoff", definition: "Water flows." },
    { term: "Cloud", definition: "Visible vapor." },
    { term: "Ocean", definition: "Main water source." },
  ],
  concepts: [
    {
      id: "sci4-u7-water-cycle",
      title: "The water cycle",
      skill: "Explain evaporation, condensation, precipitation and collection.",
      lesson: {
        sections: [
          {
            heading: "Water moves",
            body: "The **water cycle**: **evaporation** (water -> vapor) -> **condensation** (vapor -> clouds) -> **precipitation** (rain/snow) -> **collection** (oceans, lakes) -> repeat.",
          },
          {
            heading: "Continuous",
            body: "The cycle is **continuous** — water is **reused** and doesn't disappear.",
          },
        ],
        keyFormulas: [
          { name: "Water cycle", statement: "Evaporation -> condensation -> precipitation -> collection -> repeat." },
        ],
        workedExample: {
          problem: "Where does rain come from?",
          solution: "Water **evaporates** from oceans, **condenses** into clouds, then **precipitates** as rain.",
        },
      },
      questions: [
        {
          id: "sci4-u7-water-cycle-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Evaporation' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "rain falling"
                    },
                    {
                              "id": "b",
                              "text": "water turning to vapor"
                    },
                    {
                              "id": "c",
                              "text": "clouds forming"
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
                              "statement": "Evaporation = water -> vapor."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Evaporation = water -> vapor.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "water turning to vapor",
          "commonErrors": [
                    "Confuses with precipitation."
          ]
},
        },
        {
          id: "sci4-u7-water-cycle-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Condensation' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "water falling"
                    },
                    {
                              "id": "b",
                              "text": "vapor turning to droplets/clouds"
                    },
                    {
                              "id": "c",
                              "text": "evaporation"
                    },
                    {
                              "id": "d",
                              "text": "runoff"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Condensation = vapor -> droplets."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Condensation = vapor -> droplets.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "vapor turning to droplets/clouds",
          "commonErrors": [
                    "Confuses with evaporation."
          ]
},
        },
        {
          id: "sci4-u7-water-cycle-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Trace the water cycle: where does water go after it evaporates? Describe all stages.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Water cycle",
                              "statement": "All stages in order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Traces all stages.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Evaporate -> condense (clouds) -> precipitate (rain/snow) -> collect (oceans) -> repeat.**",
          "commonErrors": [
                    "Missing stages.",
                    "Wrong order."
          ]
},
        },
        {
          id: "sci4-u7-water-cycle-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Precipitation' includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only rain"
                    },
                    {
                              "id": "b",
                              "text": "rain, snow, sleet, hail"
                    },
                    {
                              "id": "c",
                              "text": "only snow"
                    },
                    {
                              "id": "d",
                              "text": "only clouds"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All forms of falling water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All forms of falling water.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "rain, snow, sleet, hail",
          "commonErrors": [
                    "Only one form."
          ]
},
        },
        {
          id: "sci4-u7-water-cycle-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain why the water cycle is important for life on Earth. What would happen without it?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Water cycle",
                              "statement": "Importance explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains importance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Predicts without cycle.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Provides fresh water for drinking/growing; without it, no rain -> drought -> no life.'**",
          "commonErrors": [
                    "Cannot explain.",
                    "No prediction."
          ]
},
        },
        {
          id: "sci4-u7-water-cycle-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Water cycle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Water -> vapor."
                    },
                    {
                              "id": "b",
                              "text": "Water movement."
                    },
                    {
                              "id": "c",
                              "text": "Vapor -> droplets."
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
                              "statement": "\"Water cycle\" means Water movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Water cycle\" means Water movement.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Water cycle** = Water movement.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u7-water-cycle-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Evaporation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Vapor -> droplets."
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
                              "text": "Water -> vapor."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Evaporation\" means Water -> vapor."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Evaporation\" means Water -> vapor.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Evaporation** = Water -> vapor.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u7-water-cycle-q8",
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
                              "text": "Vapor -> droplets."
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
                              "statement": "\"Condensation\" means Vapor -> droplets."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Condensation\" means Vapor -> droplets.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Condensation** = Vapor -> droplets.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
