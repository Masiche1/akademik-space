import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "sci2-u6-lesson-6-2",
  code: "6-2",
  title: "Seasons",
  goal: "I CAN describe the four seasons and how they change.",
  standards: ["NGSS 2-ESS1-1"],
  vocabulary: [
    { term: "Season", definition: "Time of year." },
    { term: "Spring", definition: "Flowers bloom, warming." },
    { term: "Summer", definition: "Hot, long days." },
    { term: "Fall", definition: "Leaves change, cooling." },
    { term: "Winter", definition: "Cold, snow." },
    { term: "Change", definition: "Different weather." },
    { term: "Temperature", definition: "Hot or cold." },
    { term: "Pattern", definition: "Repeats yearly." },
    { term: "Day", definition: "Hours of sunlight." },
    { term: "Night", definition: "Dark hours." },
  ],
  concepts: [
    {
      id: "sci2-u6-seasons",
      title: "Seasons",
      skill: "Describe the four seasons and how weather changes throughout the year.",
      lesson: {
        sections: [
          {
            heading: "Four seasons",
            body: "The year has four **seasons**: **spring** (warming, flowers), **summer** (hot, long days), **fall** (cooling, leaves change), **winter** (cold, snow). They follow a **pattern** that **repeats**.",
          },
          {
            heading: "What changes?",
            body: "**Temperature**, **daylight**, and **weather** change with seasons. Summer has more **sunlight hours**; winter has fewer.",
          },
        ],
        keyFormulas: [
          { name: "Seasons", statement: "Spring -> summer -> fall -> winter; temperature and daylight change." },
        ],
        workedExample: {
          problem: "Which season has the most sunlight?",
          solution: "**Summer** — days are longest and hottest.",
        },
      },
      questions: [
        {
          id: "sci2-u6-seasons-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The four seasons are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "spring, summer, fall, winter"
                    },
                    {
                              "id": "b",
                              "text": "Monday, Tuesday, Wednesday, Thursday"
                    },
                    {
                              "id": "c",
                              "text": "January, February, March, April"
                    },
                    {
                              "id": "d",
                              "text": "rain, snow, wind, sun"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Spring, summer, fall, winter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Spring, summer, fall, winter.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**all four**",
          "commonErrors": [
                    "Picks wrong categories."
          ]
},
        },
        {
          id: "sci2-u6-seasons-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which season is typically hottest?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "winter"
                    },
                    {
                              "id": "b",
                              "text": "summer"
                    },
                    {
                              "id": "c",
                              "text": "spring"
                    },
                    {
                              "id": "d",
                              "text": "fall"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Summer is hottest."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Summer is hottest.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**summer**",
          "commonErrors": [
                    "Picks wrong season."
          ]
},
        },
        {
          id: "sci2-u6-seasons-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe each season: what happens to weather, plants, animals?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Seasons",
                              "statement": "Spring, summer, fall, winter changes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes all four.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Spring: flowers. Summer: hot. Fall: leaves change. Winter: cold/snow.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "Fewer than 4."
          ]
},
        },
        {
          id: "sci2-u6-seasons-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In winter, days are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "longest"
                    },
                    {
                              "id": "b",
                              "text": "shortest"
                    },
                    {
                              "id": "c",
                              "text": "same as summer"
                    },
                    {
                              "id": "d",
                              "text": "medium"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Winter days are shortest."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Winter days are shortest.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**shortest**",
          "commonErrors": [
                    "Picks wrong season."
          ]
},
        },
        {
          id: "sci2-u6-seasons-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare summer and winter: temperature, daylight, what animals/plants do.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Seasons",
                              "statement": "Summer vs winter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes summer.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Describes winter.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Summer: hot, long days, plants grow. Winter: cold, short days, dormant.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "Same description."
          ]
},
        },
        {
          id: "sci2-u6-seasons-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Season\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Flowers bloom, warming."
                    },
                    {
                              "id": "b",
                              "text": "Time of year."
                    },
                    {
                              "id": "c",
                              "text": "Hot, long days."
                    },
                    {
                              "id": "d",
                              "text": "Leaves change, cooling."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Season\" means Time of year."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Season\" means Time of year.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Season** = Time of year.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u6-seasons-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Spring\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hot, long days."
                    },
                    {
                              "id": "b",
                              "text": "Leaves change, cooling."
                    },
                    {
                              "id": "c",
                              "text": "Cold, snow."
                    },
                    {
                              "id": "d",
                              "text": "Flowers bloom, warming."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Spring\" means Flowers bloom, warming."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Spring\" means Flowers bloom, warming.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Spring** = Flowers bloom, warming.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u6-seasons-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Summer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Leaves change, cooling."
                    },
                    {
                              "id": "b",
                              "text": "Hot, long days."
                    },
                    {
                              "id": "c",
                              "text": "Cold, snow."
                    },
                    {
                              "id": "d",
                              "text": "Different weather."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Summer\" means Hot, long days."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Summer\" means Hot, long days.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Summer** = Hot, long days.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
