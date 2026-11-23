import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "s0-u1-lesson-1-4",
  code: "1-4",
  title: "Weather Patterns",
  goal: "I CAN notice that weather follows patterns over time.",
  standards: ["K-ESS2-1", "K-ESS2-2"],
  vocabulary: [
    { term: "Pattern", definition: "Something that repeats." },
    { term: "Weather pattern", definition: "Weather that repeats over time." },
    { term: "Daily", definition: "Every day." },
    { term: "Seasonal", definition: "Changes with seasons." },
    { term: "Record", definition: "Write down what you observe." },
    { term: "Predict", definition: "Guess what will happen." },
    { term: "Change", definition: "Something different." },
  ],
  concepts: [
    {
      id: "s0-u1-weather-patterns",
      title: "Weather patterns",
      skill: "Notice that weather follows repeating patterns and record observations.",
      lesson: {
        sections: [
          {
            heading: "Patterns repeat",
            body: "Weather follows **patterns** — it might be sunny in the morning and cooler at night, or rainy in spring and snowy in winter. Patterns **repeat** over time.",
          },
          {
            heading: "Record and predict",
            body: "**Record** what you observe each day. Over time, you can **predict** patterns — 'It rained a lot last spring, so it might rain again.'",
          },
        ],
        keyFormulas: [
          { name: "Weather patterns", statement: "Observe -> record -> notice patterns -> predict." },
        ],
        workedExample: {
          problem: "You record sunny mornings and rainy afternoons for a week. What pattern do you see?",
          solution: "**Pattern:** mornings are often sunny, afternoons often rainy.",
        },
      },
      questions: [
        {
          id: "s0-u1-weather-patterns-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'pattern' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "something random"
                    },
                    {
                              "id": "b",
                              "text": "something that repeats"
                    },
                    {
                              "id": "c",
                              "text": "a one-time event"
                    },
                    {
                              "id": "d",
                              "text": "a mistake"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Pattern = repeats."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pattern = repeats.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**repeats**",
          "commonErrors": [
                    "Thinks pattern is random."
          ]
},
        },
        {
          id: "s0-u1-weather-patterns-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "To find weather patterns, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "guess once"
                    },
                    {
                              "id": "b",
                              "text": "record observations over time"
                    },
                    {
                              "id": "c",
                              "text": "ignore the weather"
                    },
                    {
                              "id": "d",
                              "text": "only look once"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Record over time to see patterns."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Record over time to see patterns.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**record over time**",
          "commonErrors": [
                    "Thinks one observation is enough."
          ]
},
        },
        {
          id: "s0-u1-weather-patterns-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Think of a weather pattern you have noticed (like rainy afternoons). Describe it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Weather patterns",
                              "statement": "Describe a repeating pattern."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes a real pattern.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'It rains every afternoon in summer.'**",
          "commonErrors": [
                    "Not a pattern.",
                    "Cannot describe."
          ]
},
        },
        {
          id: "s0-u1-weather-patterns-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Predict' weather means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "describe today only"
                    },
                    {
                              "id": "b",
                              "text": "guess what weather will be based on patterns"
                    },
                    {
                              "id": "c",
                              "text": "ignore weather"
                    },
                    {
                              "id": "d",
                              "text": "change the weather"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Predict = guess from patterns."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Predict = guess from patterns.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**guess from patterns**",
          "commonErrors": [
                    "Confuses with describe."
          ]
},
        },
        {
          id: "s0-u1-weather-patterns-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Keep a weather record for a few days. What pattern do you notice? Can you predict tomorrow's weather?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Weather patterns",
                              "statement": "Record + pattern + prediction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Keeps a record.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Names pattern + prediction.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Recorded sunny mornings; predict tomorrow sunny.'**",
          "commonErrors": [
                    "No record.",
                    "Cannot predict."
          ]
},
        },
        {
          id: "s0-u1-weather-patterns-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Pattern\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Weather that repeats over time."
                    },
                    {
                              "id": "b",
                              "text": "Something that repeats."
                    },
                    {
                              "id": "c",
                              "text": "Every day."
                    },
                    {
                              "id": "d",
                              "text": "Changes with seasons."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Pattern\" means Something that repeats."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Pattern\" means Something that repeats.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Pattern** = Something that repeats.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u1-weather-patterns-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Weather pattern\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Every day."
                    },
                    {
                              "id": "b",
                              "text": "Changes with seasons."
                    },
                    {
                              "id": "c",
                              "text": "Write down what you observe."
                    },
                    {
                              "id": "d",
                              "text": "Weather that repeats over time."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Weather pattern\" means Weather that repeats over time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Weather pattern\" means Weather that repeats over time.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Weather pattern** = Weather that repeats over time.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u1-weather-patterns-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Daily\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Changes with seasons."
                    },
                    {
                              "id": "b",
                              "text": "Every day."
                    },
                    {
                              "id": "c",
                              "text": "Write down what you observe."
                    },
                    {
                              "id": "d",
                              "text": "Guess what will happen."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Daily\" means Every day."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Daily\" means Every day.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Daily** = Every day.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
