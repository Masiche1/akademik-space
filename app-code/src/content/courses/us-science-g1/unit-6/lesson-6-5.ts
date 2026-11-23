import type { Lesson } from "../../../types.ts";

export const lesson65: Lesson = {
  id: "s1-u6-lesson-6-5",
  code: "6-5",
  title: "Sky Review",
  goal: "I CAN describe sun, moon, stars and their patterns.",
  standards: ["1-ESS1-1"],
  vocabulary: [
    { term: "Sun", definition: "Gives light/heat." },
    { term: "Moon", definition: "Phases monthly." },
    { term: "Star", definition: "Distant sun." },
    { term: "Constellation", definition: "Star pattern." },
    { term: "Pattern", definition: "Regular change." },
    { term: "Rise", definition: "Come up." },
    { term: "Set", definition: "Go down." },
    { term: "Night", definition: "When stars/moon visible." },
  ],
  concepts: [
    {
      id: "s1-u6-sky-review",
      title: "Sky review",
      skill: "Combine sun, moon, stars and patterns.",
      lesson: {
        sections: [
          {
            heading: "All sky knowledge",
            body: "The **sun** gives light/heat daily. The **moon** has monthly **phases**. **Stars** twinkle at night in **constellation** patterns. All follow repeating **patterns**.",
          },
          {
            heading: "Put it together",
            body: "Observe and describe patterns of sun, moon and stars.",
          },
        ],
        keyFormulas: [
          { name: "Sky", statement: "Sun daily + moon monthly + stars nightly = sky patterns." },
        ],
        workedExample: {
          problem: "Describe everything about the sky: sun, moon, stars, patterns.",
          solution: "Sun daily rise/set; moon monthly phases; stars nightly constellations.",
        },
      },
      questions: [
        {
          id: "s1-u6-sky-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sky science includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only sun"
                    },
                    {
                              "id": "b",
                              "text": "sun, moon, stars, constellations, patterns"
                    },
                    {
                              "id": "c",
                              "text": "only moon"
                    },
                    {
                              "id": "d",
                              "text": "only stars"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All sky topics."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All sky topics.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**all topics**",
          "commonErrors": [
                    "Lists one topic."
          ]
},
        },
        {
          id: "s1-u6-sky-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Observe the sky. Describe the sun, moon (if visible) and stars, plus their patterns.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": [
                                        [
                                                  "skill",
                                                  "Sky",
                                                  "Sun+moon+stars+patterns."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Sky",
                                                  "Sun+moon+stars+patterns."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Covers all aspects.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Sun high; moon crescent; stars twinkle — daily/monthly patterns.'**"
          ]
},
        },
        {
          id: "s1-u6-sky-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The moon's phases repeat about...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "daily"
                    },
                    {
                              "id": "b",
                              "text": "monthly"
                    },
                    {
                              "id": "c",
                              "text": "yearly"
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
                              "statement": "Monthly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Monthly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**monthly**",
          "commonErrors": [
                    "Picks daily/yearly."
          ]
},
        },
        {
          id: "s1-u6-sky-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sun\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Phases monthly."
                    },
                    {
                              "id": "b",
                              "text": "Gives light/heat."
                    },
                    {
                              "id": "c",
                              "text": "Distant sun."
                    },
                    {
                              "id": "d",
                              "text": "Star pattern."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sun\" means Gives light/heat."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sun\" means Gives light/heat.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sun** = Gives light/heat.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u6-sky-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Moon\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Distant sun."
                    },
                    {
                              "id": "b",
                              "text": "Star pattern."
                    },
                    {
                              "id": "c",
                              "text": "Regular change."
                    },
                    {
                              "id": "d",
                              "text": "Phases monthly."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Moon\" means Phases monthly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Moon\" means Phases monthly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Moon** = Phases monthly.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u6-sky-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Star\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Star pattern."
                    },
                    {
                              "id": "b",
                              "text": "Distant sun."
                    },
                    {
                              "id": "c",
                              "text": "Regular change."
                    },
                    {
                              "id": "d",
                              "text": "Come up."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Star\" means Distant sun."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Star\" means Distant sun.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Star** = Distant sun.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u6-sky-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Constellation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Regular change."
                    },
                    {
                              "id": "b",
                              "text": "Come up."
                    },
                    {
                              "id": "c",
                              "text": "Go down."
                    },
                    {
                              "id": "d",
                              "text": "Star pattern."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Constellation\" means Star pattern."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Constellation\" means Star pattern.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Constellation** = Star pattern.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u6-sky-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Pattern\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Come up."
                    },
                    {
                              "id": "b",
                              "text": "Regular change."
                    },
                    {
                              "id": "c",
                              "text": "Go down."
                    },
                    {
                              "id": "d",
                              "text": "When stars/moon visible."
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
      ],
    },
  ],
};
