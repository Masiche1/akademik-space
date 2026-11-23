import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "spk-u2-lesson-2-5",
  code: "2-5",
  title: "Weather and Seasons Review",
  goal: "I CAN describe weather, name seasons and explain animal adaptations.",
  standards: ["ELOF-PK.SCI.WEATHER.4"],
  vocabulary: [
    { term: "Weather", definition: "Current sky and air conditions." },
    { term: "Season", definition: "Part of year." },
    { term: "Spring", definition: "Flowers bloom." },
    { term: "Summer", definition: "Hot and sunny." },
    { term: "Fall", definition: "Leaves drop." },
    { term: "Winter", definition: "Cold and snow." },
    { term: "Adapt", definition: "Change to fit." },
  ],
  concepts: [
    {
      id: "spk-u2-weather-review",
      title: "Weather review",
      skill: "Combine weather description, seasons and animal adaptations.",
      lesson: {
        sections: [
          {
            heading: "Weather + seasons + animals",
            body: "Weather is what is happening now; seasons are the four parts of the year; animals adapt to seasonal weather by migrating, hibernating or changing fur.",
          },
          {
            heading: "Put it together",
            body: "Describe today's weather, name the season, and explain how an animal adapts to it.",
          },
        ],
        keyFormulas: [
          { name: "Review", statement: "Weather + seasons + adaptations = understanding Earth's patterns." },
        ],
        workedExample: {
          problem: "It is cold and snowy. What season? How do animals adapt?",
          solution: "**Winter** — bears hibernate, birds migrate south, some grow thick fur.",
        },
      },
      questions: [
        {
          id: "spk-u2-weather-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which season has flowers blooming and baby animals?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "winter"
                    },
                    {
                              "id": "b",
                              "text": "spring"
                    },
                    {
                              "id": "c",
                              "text": "summer"
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
                              "statement": "Spring = flowers bloom, baby animals."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Spring = flowers bloom, baby animals.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Spring**",
          "commonErrors": [
                    "Picks wrong season."
          ]
},
        },
        {
          id: "spk-u2-weather-review-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If it is hot and sunny with long days, the season is...",
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
                              "text": "fall"
                    },
                    {
                              "id": "d",
                              "text": "spring"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Hot, sunny, long days = summer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hot, sunny, long days = summer.",
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
          id: "spk-u2-weather-review-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe today's weather, name the current season, and say how one animal adapts to it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Weather review",
                              "statement": "Weather + season + adaptation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes all three correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Cold and snowy = winter; bears hibernate.'**",
          "commonErrors": [
                    "Missing parts.",
                    "Wrong season/adaptation."
          ]
},
        },
        {
          id: "spk-u2-weather-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Weather tools help us...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "make weather"
                    },
                    {
                              "id": "b",
                              "text": "measure and predict weather"
                    },
                    {
                              "id": "c",
                              "text": "stop rain"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Tools measure weather to help predict it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tools measure weather to help predict it.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Measure + predict**",
          "commonErrors": [
                    "Thinks tools control weather."
          ]
},
        },
        {
          id: "spk-u2-weather-review-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Keep a week-long weather journal: each day note weather, season, and one animal adaptation. What patterns do you see?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Weather journal",
                              "statement": "Daily weather + season + adaptation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Records 5+ days.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Identifies patterns.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Cooler temps each week = approaching fall; animals growing fur.'**",
          "commonErrors": [
                    "Cannot record.",
                    "No patterns."
          ]
},
        },
        {
          id: "spk-u2-weather-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Weather\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Part of year."
                    },
                    {
                              "id": "b",
                              "text": "Current sky and air conditions."
                    },
                    {
                              "id": "c",
                              "text": "Flowers bloom."
                    },
                    {
                              "id": "d",
                              "text": "Hot and sunny."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Weather\" means Current sky and air conditions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Weather\" means Current sky and air conditions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Weather** = Current sky and air conditions.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u2-weather-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Season\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Flowers bloom."
                    },
                    {
                              "id": "b",
                              "text": "Hot and sunny."
                    },
                    {
                              "id": "c",
                              "text": "Leaves drop."
                    },
                    {
                              "id": "d",
                              "text": "Part of year."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Season\" means Part of year."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Season\" means Part of year.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Season** = Part of year.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u2-weather-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Spring\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hot and sunny."
                    },
                    {
                              "id": "b",
                              "text": "Flowers bloom."
                    },
                    {
                              "id": "c",
                              "text": "Leaves drop."
                    },
                    {
                              "id": "d",
                              "text": "Cold and snow."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Spring\" means Flowers bloom."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Spring\" means Flowers bloom.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Spring** = Flowers bloom.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
