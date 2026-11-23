import type { Lesson } from "../../../types.ts";

export const lesson64: Lesson = {
  id: "s1-u6-lesson-6-4",
  code: "6-4",
  title: "Sun, Moon and Stars Patterns",
  goal: "I CAN describe patterns of sun, moon and stars.",
  standards: ["1-ESS1-1"],
  vocabulary: [
    { term: "Pattern", definition: "Regular change." },
    { term: "Sun", definition: "Day light source." },
    { term: "Moon", definition: "Night light." },
    { term: "Stars", definition: "Night sky lights." },
    { term: "Rise", definition: "Come up." },
    { term: "Set", definition: "Go down." },
    { term: "Phase", definition: "Moon shape." },
    { term: "Cycle", definition: "Repeating." },
  ],
  concepts: [
    {
      id: "s1-u6-sun-moon-stars",
      title: "Patterns of sun, moon and stars",
      skill: "Sun, moon and stars follow repeating patterns: sun rises/sets daily, moon phases monthly, stars appear at night.",
      lesson: {
        sections: [
          {
            heading: "All have patterns",
            body: "The **sun** rises and sets daily. The **moon** goes through phases monthly. **Stars** appear at night. All follow repeating **patterns**.",
          },
          {
            heading: "Patterns help predict",
            body: "Knowing these **patterns** helps us predict — when the sun will rise, what moon phase to expect, when stars are visible.",
          },
        ],
        keyFormulas: [
          { name: "Patterns", statement: "Sun=daily, Moon=monthly phases, Stars=nightly — all repeat." },
        ],
        workedExample: {
          problem: "What patterns do the sun, moon and stars follow?",
          solution: "Sun: daily rise/set. Moon: monthly phases. Stars: appear at night.",
        },
      },
      questions: [
        {
          id: "s1-u6-sun-moon-stars-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The sun's daily pattern is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "never changes"
                    },
                    {
                              "id": "b",
                              "text": "rises and sets each day"
                    },
                    {
                              "id": "c",
                              "text": "only at night"
                    },
                    {
                              "id": "d",
                              "text": "monthly"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Sun rises/sets daily."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sun rises/sets daily.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**daily rise/set**",
          "commonErrors": [
                    "Picks wrong pattern."
          ]
},
        },
        {
          id: "s1-u6-sun-moon-stars-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The moon's pattern is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "daily"
                    },
                    {
                              "id": "b",
                              "text": "monthly phases"
                    },
                    {
                              "id": "c",
                              "text": "yearly only"
                    },
                    {
                              "id": "d",
                              "text": "never changes"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Moon phases monthly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Moon phases monthly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**monthly phases**",
          "commonErrors": [
                    "Picks daily/yearly."
          ]
},
        },
        {
          id: "s1-u6-sun-moon-stars-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe the pattern of the sun, moon and stars over time.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Patterns",
                              "statement": "Sun+moon+stars patterns."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes all three patterns.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Sun daily, moon monthly phases, stars at night.'**",
          "commonErrors": [
                    "Fewer than 3 patterns.",
                    "Cannot describe."
          ]
},
        },
        {
          id: "s1-u6-sun-moon-stars-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Stars are most visible...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "during day"
                    },
                    {
                              "id": "b",
                              "text": "at night"
                    },
                    {
                              "id": "c",
                              "text": "at noon"
                    },
                    {
                              "id": "d",
                              "text": "never"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Stars visible at night."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stars visible at night.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**at night**",
          "commonErrors": [
                    "Picks day."
          ]
},
        },
        {
          id: "s1-u6-sun-moon-stars-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Create a chart showing patterns of sun, moon and stars over a week. What patterns do you notice?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Patterns",
                              "statement": "Chart + patterns."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Creates chart.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Identifies patterns.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Sun rises daily; moon phases slowly change; stars appear nightly.'**",
          "commonErrors": [
                    "No chart.",
                    "No patterns."
          ]
},
        },
        {
          id: "s1-u6-sun-moon-stars-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Pattern\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Day light source."
                    },
                    {
                              "id": "b",
                              "text": "Regular change."
                    },
                    {
                              "id": "c",
                              "text": "Night light."
                    },
                    {
                              "id": "d",
                              "text": "Night sky lights."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Pattern\" means Regular change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Pattern\" means Regular change.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Pattern** = Regular change.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u6-sun-moon-stars-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sun\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Night light."
                    },
                    {
                              "id": "b",
                              "text": "Night sky lights."
                    },
                    {
                              "id": "c",
                              "text": "Come up."
                    },
                    {
                              "id": "d",
                              "text": "Day light source."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sun\" means Day light source."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sun\" means Day light source.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sun** = Day light source.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u6-sun-moon-stars-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Moon\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Night sky lights."
                    },
                    {
                              "id": "b",
                              "text": "Night light."
                    },
                    {
                              "id": "c",
                              "text": "Come up."
                    },
                    {
                              "id": "d",
                              "text": "Go down."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Moon\" means Night light."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Moon\" means Night light.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Moon** = Night light.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
