import type { Lesson } from "../../../types.ts";

export const lesson64: Lesson = {
  id: "sci5-u6-lesson-6-4",
  code: "6-4",
  title: "Natural Selection",
  goal: "I CAN describe natural selection and adaptation.",
  standards: ["LS4.B"],
  vocabulary: [
    { term: "Natural selection", definition: "Survival of best adapted." },
    { term: "Adaptation", definition: "Feature that helps survival." },
    { term: "Variation", definition: "Differences in population." },
    { term: "Fitness", definition: "Reproductive success." },
    { term: "Inherited", definition: "Passed to offspring." },
    { term: "Selective pressure", definition: "Environmental factor." },
    { term: "Evolution", definition: "Change over time." },
    { term: "Species", definition: "Group of organisms." },
  ],
  concepts: [
    {
      id: "sci5-u6-natural-selection",
      title: "Natural selection",
      skill: "Describe natural selection and adaptation.",
      lesson: {
        sections: [
          {
            heading: "Selection",
            body: "**Natural selection**: organisms with **adaptations** (helpful features) survive and reproduce better, passing traits to **offspring**. Over time, populations **evolve**.",
          },
          {
            heading: "Key ideas",
            body: "**Variation** exists in populations; **selective pressure** (environment) favors some traits; **fitness** = reproductive success.",
          },
        ],
        keyFormulas: [
          { name: "Natural selection", statement: "Variation + selective pressure + fitness = evolution." },
        ],
        workedExample: {
          problem: "How did giraffes get long necks?",
          solution: "**Variation in neck length; longer necks reached food better -> survived/reproduced -> trait became common.**",
        },
      },
      questions: [
        {
          id: "sci5-u6-natural-selection-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Natural selection' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "random"
                    },
                    {
                              "id": "b",
                              "text": "survival of best adapted organisms"
                    },
                    {
                              "id": "c",
                              "text": "artificial"
                    },
                    {
                              "id": "d",
                              "text": "instant"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Best adapted survive."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Best adapted survive.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "survival of best adapted organisms",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "sci5-u6-natural-selection-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "An 'adaptation' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "random feature"
                    },
                    {
                              "id": "b",
                              "text": "feature that helps survival"
                    },
                    {
                              "id": "c",
                              "text": "weakness"
                    },
                    {
                              "id": "d",
                              "text": "mutation"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Helps survival."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Helps survival.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "feature that helps survival",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "sci5-u6-natural-selection-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe natural selection with an example of adaptation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Selection",
                              "statement": "Process + example."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes process.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives example.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Variation + selective pressure -> best adapted survive -> traits inherited -> population changes. Example: giraffe necks.**",
          "commonErrors": [
                    "Cannot describe.",
                    "No example."
          ]
},
        },
        {
          id: "sci5-u6-natural-selection-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Fitness' in natural selection means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "strength"
                    },
                    {
                              "id": "b",
                              "text": "reproductive success"
                    },
                    {
                              "id": "c",
                              "text": "size"
                    },
                    {
                              "id": "d",
                              "text": "speed"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Reproductive success."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reproductive success.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "reproductive success",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "sci5-u6-natural-selection-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how natural selection leads to evolution over time.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Selection",
                              "statement": "Evolution explained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains selection.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains evolution.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Variation -> selection favors traits -> traits spread -> population changes over generations = evolution.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No evolution."
          ]
},
        },
        {
          id: "sci5-u6-natural-selection-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Natural selection\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Feature that helps survival."
                    },
                    {
                              "id": "b",
                              "text": "Survival of best adapted."
                    },
                    {
                              "id": "c",
                              "text": "Differences in population."
                    },
                    {
                              "id": "d",
                              "text": "Reproductive success."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Natural selection\" means Survival of best adapted."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Natural selection\" means Survival of best adapted.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Natural selection** = Survival of best adapted.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u6-natural-selection-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Adaptation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Differences in population."
                    },
                    {
                              "id": "b",
                              "text": "Reproductive success."
                    },
                    {
                              "id": "c",
                              "text": "Passed to offspring."
                    },
                    {
                              "id": "d",
                              "text": "Feature that helps survival."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Adaptation\" means Feature that helps survival."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Adaptation\" means Feature that helps survival.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Adaptation** = Feature that helps survival.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u6-natural-selection-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Variation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Reproductive success."
                    },
                    {
                              "id": "b",
                              "text": "Differences in population."
                    },
                    {
                              "id": "c",
                              "text": "Passed to offspring."
                    },
                    {
                              "id": "d",
                              "text": "Environmental factor."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Variation\" means Differences in population."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Variation\" means Differences in population.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Variation** = Differences in population.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
