import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "sci2-u7-lesson-7-2",
  code: "7-2",
  title: "Conservation",
  goal: "I CAN describe ways to conserve Earth's resources.",
  standards: ["NGSS 2-ESS2-1"],
  vocabulary: [
    { term: "Conserve", definition: "Save or protect." },
    { term: "Reduce", definition: "Use less." },
    { term: "Reuse", definition: "Use again." },
    { term: "Recycle", definition: "Turn into new things." },
    { term: "Waste", definition: "Throw away." },
    { term: "Pollution", definition: "Harmful substances." },
    { term: "Protect", definition: "Keep safe." },
    { term: "Care", definition: "Look after." },
    { term: "Environment", definition: "The world around us." },
    { term: "Sustainable", definition: "Can continue forever." },
  ],
  concepts: [
    {
      id: "sci2-u7-conservation",
      title: "Conservation",
      skill: "Describe ways to conserve Earth's resources: reduce, reuse, recycle, protect.",
      lesson: {
        sections: [
          {
            heading: "Why conserve?",
            body: "We must **conserve** resources so they last. **Reduce** waste, **reuse** items, **recycle** materials, and **protect** the environment from **pollution**.",
          },
          {
            heading: "Three R's",
            body: "**Reduce** (use less), **Reuse** (use again), **Recycle** (turn into new things). These help conserve resources and reduce waste.",
          },
        ],
        keyFormulas: [
          { name: "Conservation", statement: "Reduce + reuse + recycle + protect = conserve resources." },
        ],
        workedExample: {
          problem: "How can you conserve water at home?",
          solution: "Turn off tap while brushing teeth, fix leaks, take shorter showers.",
        },
      },
      questions: [
        {
          id: "sci2-u7-conservation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'three R's' of conservation are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "read, write, run"
                    },
                    {
                              "id": "b",
                              "text": "reduce, reuse, recycle"
                    },
                    {
                              "id": "c",
                              "text": "red, yellow, green"
                    },
                    {
                              "id": "d",
                              "text": "rain, snow, wind"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Reduce, reuse, recycle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reduce, reuse, recycle.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**3 R's**",
          "commonErrors": [
                    "Picks wrong words."
          ]
},
        },
        {
          id: "sci2-u7-conservation-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Recycle' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "throw away"
                    },
                    {
                              "id": "b",
                              "text": "turn used materials into new things"
                    },
                    {
                              "id": "c",
                              "text": "use less"
                    },
                    {
                              "id": "d",
                              "text": "reuse once"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Recycle = make new from old."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Recycle = make new from old.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**make new**",
          "commonErrors": [
                    "Confuses with reduce."
          ]
},
        },
        {
          id: "sci2-u7-conservation-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe three ways to conserve Earth's resources.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Conservation",
                              "statement": "Reduce, reuse, recycle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes 3 ways.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Reduce plastic use, reuse bags, recycle paper.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "Fewer than 3."
          ]
},
        },
        {
          id: "sci2-u7-conservation-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Pollution' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "clean air"
                    },
                    {
                              "id": "b",
                              "text": "harmful substances in the environment"
                    },
                    {
                              "id": "c",
                              "text": "recycling"
                    },
                    {
                              "id": "d",
                              "text": "conservation"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Pollution = harmful substances."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pollution = harmful substances.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**harmful substances**",
          "commonErrors": [
                    "Confuses with conservation."
          ]
},
        },
        {
          id: "sci2-u7-conservation-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Design a conservation plan for your classroom or home. Include reduce, reuse, recycle.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Conservation",
                              "statement": "Plan with 3 R's."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Includes reduce.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Includes reuse + recycle.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Reduce paper, reuse containers, recycle bottles.'**",
          "commonErrors": [
                    "Missing R's.",
                    "Cannot plan."
          ]
},
        },
        {
          id: "sci2-u7-conservation-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Conserve\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Use less."
                    },
                    {
                              "id": "b",
                              "text": "Save or protect."
                    },
                    {
                              "id": "c",
                              "text": "Use again."
                    },
                    {
                              "id": "d",
                              "text": "Turn into new things."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Conserve\" means Save or protect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Conserve\" means Save or protect.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Conserve** = Save or protect.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u7-conservation-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Reduce\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Use again."
                    },
                    {
                              "id": "b",
                              "text": "Turn into new things."
                    },
                    {
                              "id": "c",
                              "text": "Throw away."
                    },
                    {
                              "id": "d",
                              "text": "Use less."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Reduce\" means Use less."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Reduce\" means Use less.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Reduce** = Use less.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u7-conservation-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Reuse\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Turn into new things."
                    },
                    {
                              "id": "b",
                              "text": "Use again."
                    },
                    {
                              "id": "c",
                              "text": "Throw away."
                    },
                    {
                              "id": "d",
                              "text": "Harmful substances."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Reuse\" means Use again."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Reuse\" means Use again.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Reuse** = Use again.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
