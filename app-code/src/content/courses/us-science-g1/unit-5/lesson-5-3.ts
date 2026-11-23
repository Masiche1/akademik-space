import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "s1-u5-lesson-5-3",
  code: "5-3",
  title: "Seasons",
  goal: "I CAN describe how seasons change.",
  standards: ["1-ESS1-1"],
  vocabulary: [
    { term: "Season", definition: "Time of year." },
    { term: "Spring", definition: "Flowers bloom, warmer." },
    { term: "Summer", definition: "Hot, long days." },
    { term: "Fall", definition: "Leaves change, cooler." },
    { term: "Winter", definition: "Cold, snow." },
    { term: "Change", definition: "Becomes different." },
    { term: "Temperature", definition: "How hot or cold." },
    { term: "Cycle", definition: "Repeating pattern." },
  ],
  concepts: [
    {
      id: "s1-u5-seasons",
      title: "Seasons",
      skill: "The year has four seasons — spring, summer, fall, winter — each with different weather and daylight.",
      lesson: {
        sections: [
          {
            heading: "Four seasons",
            body: "The year has four **seasons**: **spring** (flowers bloom), **summer** (hot, long days), **fall** (leaves change color), **winter** (cold, snow). Seasons **change** in a repeating **cycle**.",
          },
          {
            heading: "What changes",
            body: "**Temperature** and daylight change with seasons. Summer is hot with long days; winter is cold with short days.",
          },
        ],
        keyFormulas: [
          { name: "Seasons", statement: "Spring -> summer -> fall -> winter, repeating cycle." },
        ],
        workedExample: {
          problem: "Which season has snow and cold temperatures?",
          solution: "**Winter** — cold temperatures and snow.",
        },
      },
      questions: [
        {
          id: "s1-u5-seasons-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many seasons are there?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2"
                    },
                    {
                              "id": "b",
                              "text": "4"
                    },
                    {
                              "id": "c",
                              "text": "7"
                    },
                    {
                              "id": "d",
                              "text": "12"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Four seasons."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Four seasons.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**4**",
          "commonErrors": [
                    "Picks wrong number."
          ]
},
        },
        {
          id: "s1-u5-seasons-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which season is the hottest?",
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
                    "Picks winter/spring."
          ]
},
        },
        {
          id: "s1-u5-seasons-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name all four seasons. Describe one way each is different.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Seasons",
                              "statement": "4 seasons + differences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 4 seasons.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes differences.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Spring blooms, summer hot, fall leaves change, winter snow.'**",
          "commonErrors": [
                    "Fewer than 4 seasons.",
                    "No differences."
          ]
},
        },
        {
          id: "s1-u5-seasons-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which season do leaves change color?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "summer"
                    },
                    {
                              "id": "b",
                              "text": "fall"
                    },
                    {
                              "id": "c",
                              "text": "spring"
                    },
                    {
                              "id": "d",
                              "text": "winter"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Fall = leaves change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fall = leaves change.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**fall**",
          "commonErrors": [
                    "Picks summer/spring."
          ]
},
        },
        {
          id: "s1-u5-seasons-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Draw or describe what you see outside in each of the four seasons.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Seasons",
                              "statement": "4 seasonal descriptions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes 4 seasons.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Spring flowers, summer sun, fall leaves, winter snow.'**",
          "commonErrors": [
                    "Fewer than 4 seasons.",
                    "Cannot describe."
          ]
},
        },
        {
          id: "s1-u5-seasons-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Season\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Flowers bloom, warmer."
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
                              "text": "Leaves change, cooler."
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
          id: "s1-u5-seasons-q7",
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
                              "text": "Leaves change, cooler."
                    },
                    {
                              "id": "c",
                              "text": "Cold, snow."
                    },
                    {
                              "id": "d",
                              "text": "Flowers bloom, warmer."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Spring\" means Flowers bloom, warmer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Spring\" means Flowers bloom, warmer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Spring** = Flowers bloom, warmer.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u5-seasons-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Summer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Leaves change, cooler."
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
                              "text": "Becomes different."
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
