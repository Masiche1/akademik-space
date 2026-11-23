import type { Lesson } from "../../../types.ts";

export const lesson85: Lesson = {
  id: "s0-u8-lesson-8-5",
  code: "8-5",
  title: "Science Review",
  goal: "I CAN use all kindergarten science skills together.",
  standards: ["K-ESS1-1", "K-ESS2-1", "K-ESS2-2", "K-PS1-1", "K-PS2-1", "K-LS1-1", "K-LS1-2", "K-2-ETS1-1"],
  vocabulary: [
    { term: "Weather", definition: "Sky/air conditions." },
    { term: "Sun/Moon/Stars", definition: "Sky objects." },
    { term: "Push/Pull", definition: "Forces." },
    { term: "Material", definition: "What it's made of." },
    { term: "Plant", definition: "Needs water/sun/soil." },
    { term: "Animal", definition: "Needs food/water/shelter." },
    { term: "Habitat", definition: "Living place." },
    { term: "Design", definition: "Problem-solving process." },
  ],
  concepts: [
    {
      id: "s0-u8-science-review",
      title: "Science review",
      skill: "Combine all kindergarten science: earth, physical, life science and engineering.",
      lesson: {
        sections: [
          {
            heading: "All of kindergarten science",
            body: "Kindergarten science covers **Earth** (weather, day/night, sun/moon/stars), **Physical** (pushes/pulls, materials), **Life** (plants, animals, habitats), and **Engineering** (design process).",
          },
          {
            heading: "Put it together",
            body: "Observe, ask questions, test ideas, and use the design process — these are the foundations of science!",
          },
        ],
        keyFormulas: [
          { name: "Kindergarten science", statement: "Earth + Physical + Life + Engineering = science foundation." },
        ],
        workedExample: {
          problem: "Show all science skills: observe weather, describe a material, name a plant need, describe an animal need, and solve a problem with design.",
          solution: "Observe + describe + name + describe + design = all science skills.",
        },
      },
      questions: [
        {
          id: "s0-u8-science-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Kindergarten science includes which areas?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only weather"
                    },
                    {
                              "id": "b",
                              "text": "Earth, Physical, Life, Engineering"
                    },
                    {
                              "id": "c",
                              "text": "only plants"
                    },
                    {
                              "id": "d",
                              "text": "only animals"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All four science areas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All four science areas.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**all areas**",
          "commonErrors": [
                    "Lists one area."
          ]
},
        },
        {
          id: "s0-u8-science-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Show all your science skills: observe the weather, describe a material, name a plant need, describe an animal need, and solve a problem using design.",
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
                                                  "All science",
                                                  "All areas together."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All science",
                                                  "All areas together."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Demonstrates all areas.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Sunny weather; wood is hard; plants need water; dogs need food; designed a solution.'**"
          ]
},
        },
        {
          id: "s0-u8-science-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The four areas of kindergarten science are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "math, reading, writing, art"
                    },
                    {
                              "id": "b",
                              "text": "Earth, Physical, Life, Engineering"
                    },
                    {
                              "id": "c",
                              "text": "only weather"
                    },
                    {
                              "id": "d",
                              "text": "only plants"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Earth, Physical, Life, Engineering."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Earth, Physical, Life, Engineering.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**four areas**",
          "commonErrors": [
                    "Picks wrong areas."
          ]
},
        },
        {
          id: "s0-u8-science-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Weather\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sky objects."
                    },
                    {
                              "id": "b",
                              "text": "Sky/air conditions."
                    },
                    {
                              "id": "c",
                              "text": "Forces."
                    },
                    {
                              "id": "d",
                              "text": "What it's made of."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Weather\" means Sky/air conditions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Weather\" means Sky/air conditions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Weather** = Sky/air conditions.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u8-science-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sun/Moon/Stars\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Forces."
                    },
                    {
                              "id": "b",
                              "text": "What it's made of."
                    },
                    {
                              "id": "c",
                              "text": "Needs water/sun/soil."
                    },
                    {
                              "id": "d",
                              "text": "Sky objects."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sun/Moon/Stars\" means Sky objects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sun/Moon/Stars\" means Sky objects.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sun/Moon/Stars** = Sky objects.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u8-science-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Push/Pull\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What it's made of."
                    },
                    {
                              "id": "b",
                              "text": "Forces."
                    },
                    {
                              "id": "c",
                              "text": "Needs water/sun/soil."
                    },
                    {
                              "id": "d",
                              "text": "Needs food/water/shelter."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Push/Pull\" means Forces."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Push/Pull\" means Forces.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Push/Pull** = Forces.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u8-science-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Material\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Needs water/sun/soil."
                    },
                    {
                              "id": "b",
                              "text": "Needs food/water/shelter."
                    },
                    {
                              "id": "c",
                              "text": "Living place."
                    },
                    {
                              "id": "d",
                              "text": "What it's made of."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Material\" means What it's made of."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Material\" means What it's made of.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Material** = What it's made of.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u8-science-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Plant\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Needs food/water/shelter."
                    },
                    {
                              "id": "b",
                              "text": "Needs water/sun/soil."
                    },
                    {
                              "id": "c",
                              "text": "Living place."
                    },
                    {
                              "id": "d",
                              "text": "Problem-solving process."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Plant\" means Needs water/sun/soil."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Plant\" means Needs water/sun/soil.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Plant** = Needs water/sun/soil.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
