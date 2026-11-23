import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "spk-u2-lesson-2-2",
  code: "2-2",
  title: "The Four Seasons",
  goal: "I CAN name the four seasons and what happens in each.",
  standards: ["ELOF-PK.SCI.SEASON.1"],
  vocabulary: [
    { term: "Season", definition: "A part of the year with its own weather." },
    { term: "Spring", definition: "Flowers bloom, baby animals, mild weather." },
    { term: "Summer", definition: "Hot, sunny, long days." },
    { term: "Fall", definition: "Leaves change color and fall, cooler." },
    { term: "Winter", definition: "Cold, snow, bare trees." },
    { term: "Change", definition: "Something becoming different." },
  ],
  concepts: [
    {
      id: "spk-u2-seasons",
      title: "The four seasons",
      skill: "Name the four seasons and describe what happens in each.",
      lesson: {
        sections: [
          {
            heading: "Four seasons",
            body: "The year has **four seasons**: **spring** (flowers bloom), **summer** (hot and sunny), **fall** (leaves change and drop), and **winter** (cold and snowy).",
          },
          {
            heading: "What changes",
            body: "Each season brings different **weather**, different **clothes**, and different things in nature. Trees lose leaves in fall, snow covers ground in winter.",
          },
        ],
        keyFormulas: [
          { name: "Seasons", statement: "Spring, summer, fall, winter — each with its own weather and nature changes." },
        ],
        workedExample: {
          problem: "Leaves turn orange and fall off trees. Which season?",
          solution: "That is **fall** (autumn) — leaves change color and drop.",
        },
      },
      questions: [
        {
          id: "spk-u2-seasons-q1",
          difficulty: "foundation",
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
                              "statement": "Summer is the hottest season."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Summer is the hottest season.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Summer**",
          "commonErrors": [
                    "Picks wrong season."
          ]
},
        },
        {
          id: "spk-u2-seasons-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which season do leaves change color and fall?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "spring"
                    },
                    {
                              "id": "b",
                              "text": "summer"
                    },
                    {
                              "id": "c",
                              "text": "fall"
                    },
                    {
                              "id": "d",
                              "text": "winter"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Fall = leaves change color and drop."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fall = leaves change color and drop.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fall**",
          "commonErrors": [
                    "Picks wrong season."
          ]
},
        },
        {
          id: "spk-u2-seasons-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name your favorite season. What is the weather like? What do you do in that season?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Seasons",
                              "statement": "Name season + weather + activity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names season with weather/activity.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Summer — hot and sunny; I swim and play outside.'**",
          "commonErrors": [
                    "Cannot name season.",
                    "No details."
          ]
},
        },
        {
          id: "spk-u2-seasons-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "In winter, trees often...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "have all their leaves"
                    },
                    {
                              "id": "b",
                              "text": "lose their leaves and may have snow"
                    },
                    {
                              "id": "c",
                              "text": "grow flowers"
                    },
                    {
                              "id": "d",
                              "text": "stay the same"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Winter = cold, trees lose leaves, snow possible."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Winter = cold, trees lose leaves, snow possible.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Lose leaves + snow**",
          "commonErrors": [
                    "Thinks trees keep leaves in winter."
          ]
},
        },
        {
          id: "spk-u2-seasons-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Draw or describe what nature looks like in each of the four seasons. What is the same? What is different?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Seasons",
                              "statement": "Describe nature in each season."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes all 4 seasons.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Notes same and different.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Spring flowers, summer green, fall orange, winter bare; trees are always there.'**",
          "commonErrors": [
                    "Cannot describe all.",
                    "No comparison."
          ]
},
        },
        {
          id: "spk-u2-seasons-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Season\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Flowers bloom, baby animals, mild weather."
                    },
                    {
                              "id": "b",
                              "text": "A part of the year with its own weather."
                    },
                    {
                              "id": "c",
                              "text": "Hot, sunny, long days."
                    },
                    {
                              "id": "d",
                              "text": "Leaves change color and fall, cooler."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Season\" means A part of the year with its own weather."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Season\" means A part of the year with its own weather.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Season** = A part of the year with its own weather.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u2-seasons-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Spring\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hot, sunny, long days."
                    },
                    {
                              "id": "b",
                              "text": "Leaves change color and fall, cooler."
                    },
                    {
                              "id": "c",
                              "text": "Cold, snow, bare trees."
                    },
                    {
                              "id": "d",
                              "text": "Flowers bloom, baby animals, mild weather."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Spring\" means Flowers bloom, baby animals, mild weather."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Spring\" means Flowers bloom, baby animals, mild weather.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Spring** = Flowers bloom, baby animals, mild weather.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u2-seasons-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Summer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Leaves change color and fall, cooler."
                    },
                    {
                              "id": "b",
                              "text": "Hot, sunny, long days."
                    },
                    {
                              "id": "c",
                              "text": "Cold, snow, bare trees."
                    },
                    {
                              "id": "d",
                              "text": "Something becoming different."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Summer\" means Hot, sunny, long days."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Summer\" means Hot, sunny, long days.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Summer** = Hot, sunny, long days.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
