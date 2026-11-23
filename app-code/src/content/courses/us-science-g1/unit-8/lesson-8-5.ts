import type { Lesson } from "../../../types.ts";

export const lesson85: Lesson = {
  id: "s1-u8-lesson-8-5",
  code: "8-5",
  title: "Grade 1 Science Final Review",
  goal: "I CAN use all Grade 1 science skills together.",
  standards: ["1-LS1-1", "1-LS1-2", "1-PS1-1", "1-PS1-2", "1-ESS1-1", "1-ESS1-2", "1-ETS1-1", "1-ETS1-2", "1-ETS1-3"],
  vocabulary: [
    { term: "Plants", definition: "Need sun/water/air/soil." },
    { term: "Animals", definition: "Need food/water/air/shelter." },
    { term: "Matter", definition: "Solid/liquid/gas." },
    { term: "Push", definition: "Force away." },
    { term: "Weather", definition: "Sky conditions." },
    { term: "Pattern", definition: "Regular change." },
    { term: "Problem", definition: "Needs solving." },
    { term: "Design", definition: "Plan solution." },
  ],
  concepts: [
    {
      id: "s1-u8-grade1-final",
      title: "Grade 1 science final review",
      skill: "Combine all Grade 1 science: life, physical, earth and engineering.",
      lesson: {
        sections: [
          {
            heading: "All of Grade 1 science",
            body: "Grade 1 science covers **life science** (plants/animals), **physical science** (forces/matter), **earth science** (weather/sky), and **engineering** (design process).",
          },
          {
            heading: "You are a Grade 1 scientist!",
            body: "You can investigate plant/animal needs, describe forces and matter, observe weather and sky patterns, and solve problems through engineering. These are the foundations for Grade 2!",
          },
        ],
        keyFormulas: [
          { name: "Grade 1 science", statement: "Life + physical + earth + engineering = all science." },
        ],
        workedExample: {
          problem: "Show all skills: investigate plants/animals, describe forces/matter, observe weather/sky, solve a problem.",
          solution: "All skills demonstrated = Grade 1 science mastery.",
        },
      },
      questions: [
        {
          id: "s1-u8-grade1-final-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Grade 1 science includes which areas?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only plants"
                    },
                    {
                              "id": "b",
                              "text": "life, physical, earth, engineering"
                    },
                    {
                              "id": "c",
                              "text": "only weather"
                    },
                    {
                              "id": "d",
                              "text": "only matter"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All science areas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All science areas.",
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
          id: "s1-u8-grade1-final-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Show all your skills: investigate a plant or animal need, describe a push/pull or state of matter, observe weather or sky pattern, and solve a problem using design process.",
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
                                                  "Life + physical + earth + engineering."
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
                                                  "Life + physical + earth + engineering."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Demonstrates all skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Plant needs sun; push ball; rain is weather; designed holder.'**"
          ]
},
        },
        {
          id: "s1-u8-grade1-final-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "You are ready for Grade 2 science because you can...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "do chemistry"
                    },
                    {
                              "id": "b",
                              "text": "investigate life/physical/earth/engineering"
                    },
                    {
                              "id": "c",
                              "text": "read textbooks"
                    },
                    {
                              "id": "d",
                              "text": "do algebra"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Grade 1 science prepares you for Grade 2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Grade 1 science prepares you for Grade 2.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**G1 science skills**",
          "commonErrors": [
                    "Thinks you need advanced skills."
          ]
},
        },
        {
          id: "s1-u8-grade1-final-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Plants\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Need food/water/air/shelter."
                    },
                    {
                              "id": "b",
                              "text": "Need sun/water/air/soil."
                    },
                    {
                              "id": "c",
                              "text": "Solid/liquid/gas."
                    },
                    {
                              "id": "d",
                              "text": "Force away."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Plants\" means Need sun/water/air/soil."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Plants\" means Need sun/water/air/soil.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Plants** = Need sun/water/air/soil.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u8-grade1-final-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Animals\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Solid/liquid/gas."
                    },
                    {
                              "id": "b",
                              "text": "Force away."
                    },
                    {
                              "id": "c",
                              "text": "Sky conditions."
                    },
                    {
                              "id": "d",
                              "text": "Need food/water/air/shelter."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Animals\" means Need food/water/air/shelter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Animals\" means Need food/water/air/shelter.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Animals** = Need food/water/air/shelter.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u8-grade1-final-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Matter\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Force away."
                    },
                    {
                              "id": "b",
                              "text": "Solid/liquid/gas."
                    },
                    {
                              "id": "c",
                              "text": "Sky conditions."
                    },
                    {
                              "id": "d",
                              "text": "Regular change."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Matter\" means Solid/liquid/gas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Matter\" means Solid/liquid/gas.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Matter** = Solid/liquid/gas.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u8-grade1-final-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Push\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sky conditions."
                    },
                    {
                              "id": "b",
                              "text": "Regular change."
                    },
                    {
                              "id": "c",
                              "text": "Needs solving."
                    },
                    {
                              "id": "d",
                              "text": "Force away."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Push\" means Force away."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Push\" means Force away.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Push** = Force away.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u8-grade1-final-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Weather\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Regular change."
                    },
                    {
                              "id": "b",
                              "text": "Sky conditions."
                    },
                    {
                              "id": "c",
                              "text": "Needs solving."
                    },
                    {
                              "id": "d",
                              "text": "Plan solution."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Weather\" means Sky conditions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Weather\" means Sky conditions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Weather** = Sky conditions.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
