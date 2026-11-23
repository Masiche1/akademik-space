import type { Lesson } from "../../../types.ts";

export const lesson44: Lesson = {
  id: "sci3-u4-lesson-4-4",
  code: "4-4",
  title: "Mixtures and Solutions",
  goal: "I CAN describe mixtures and solutions and how to separate them.",
  standards: ["PS1.B"],
  vocabulary: [
    { term: "Mixture", definition: "Two or more things mixed." },
    { term: "Solution", definition: "Mixture that looks like one." },
    { term: "Dissolve", definition: "Mix into liquid." },
    { term: "Separate", definition: "Split apart." },
    { term: "Filter", definition: "Use filter to separate." },
    { term: "Evaporate", definition: "Remove liquid." },
    { term: "Sand", definition: "Solid that doesn't dissolve." },
    { term: "Salt", definition: "Solid that dissolves." },
  ],
  concepts: [
    {
      id: "sci3-u4-mixtures",
      title: "Mixtures and solutions",
      skill: "Describe mixtures (sand+water) and solutions (salt+water), and how to separate them.",
      lesson: {
        sections: [
          {
            heading: "Mixing things",
            body: "A **mixture** is two or more things mixed together. If one **dissolves** (disappears into liquid), it makes a **solution** — like salt in water. Sand in water stays a mixture.",
          },
          {
            heading: "Separating mixtures",
            body: "We can **separate** mixtures: **filter** to remove solids (sand), **evaporate** to remove liquid (leave salt behind).",
          },
        ],
        keyFormulas: [
          { name: "Mixture", statement: "Sand+water = mixture; Salt+water = solution (dissolves)." },
          { name: "Separate", statement: "Filter (remove solid) + evaporate (remove liquid) = separate." },
        ],
        workedExample: {
          problem: "How do you separate sand from water?",
          solution: "**Filter** it — pour through filter paper; sand stays, water passes through.",
        },
      },
      questions: [
        {
          id: "sci3-u4-mixtures-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'mixture' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "one pure substance"
                    },
                    {
                              "id": "b",
                              "text": "two or more things mixed"
                    },
                    {
                              "id": "c",
                              "text": "a solution only"
                    },
                    {
                              "id": "d",
                              "text": "a gas"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Mixture = two or more things mixed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mixture = two or more things mixed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "two or more things mixed",
          "commonErrors": [
                    "Thinks mixture is one substance."
          ]
},
        },
        {
          id: "sci3-u4-mixtures-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Salt dissolved in water is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a mixture"
                    },
                    {
                              "id": "b",
                              "text": "a solution"
                    },
                    {
                              "id": "c",
                              "text": "a solid"
                    },
                    {
                              "id": "d",
                              "text": "a gas"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Dissolved = solution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dissolved = solution.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a solution",
          "commonErrors": [
                    "Thinks dissolved is a mixture."
          ]
},
        },
        {
          id: "sci3-u4-mixtures-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe a mixture and a solution. How would you separate each?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Mixture/solution",
                              "statement": "Mixture+solution+separation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes both.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains separation.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Mixture: sand+water (filter). Solution: salt+water (evaporate).'**",
          "commonErrors": [
                    "Cannot distinguish.",
                    "No separation."
          ]
},
        },
        {
          id: "sci3-u4-mixtures-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To separate sand from water, you would...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "evaporate"
                    },
                    {
                              "id": "b",
                              "text": "filter"
                    },
                    {
                              "id": "c",
                              "text": "freeze"
                    },
                    {
                              "id": "d",
                              "text": "boil"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Filter removes sand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Filter removes sand.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "filter",
          "commonErrors": [
                    "Thinks evaporation removes sand."
          ]
},
        },
        {
          id: "sci3-u4-mixtures-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Design a method to separate a mixture of sand, salt and water.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Separation",
                              "statement": "Filter + evaporate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Filters sand.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evaporates water to get salt.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Filter out sand, then evaporate water to leave salt.'**",
          "commonErrors": [
                    "Cannot separate.",
                    "Wrong order."
          ]
},
        },
        {
          id: "sci3-u4-mixtures-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mixture\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Mixture that looks like one."
                    },
                    {
                              "id": "b",
                              "text": "Two or more things mixed."
                    },
                    {
                              "id": "c",
                              "text": "Mix into liquid."
                    },
                    {
                              "id": "d",
                              "text": "Split apart."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Mixture\" means Two or more things mixed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Mixture\" means Two or more things mixed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Mixture** = Two or more things mixed.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u4-mixtures-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Solution\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Mix into liquid."
                    },
                    {
                              "id": "b",
                              "text": "Split apart."
                    },
                    {
                              "id": "c",
                              "text": "Use filter to separate."
                    },
                    {
                              "id": "d",
                              "text": "Mixture that looks like one."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Solution\" means Mixture that looks like one."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Solution\" means Mixture that looks like one.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Solution** = Mixture that looks like one.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u4-mixtures-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Dissolve\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Split apart."
                    },
                    {
                              "id": "b",
                              "text": "Mix into liquid."
                    },
                    {
                              "id": "c",
                              "text": "Use filter to separate."
                    },
                    {
                              "id": "d",
                              "text": "Remove liquid."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Dissolve\" means Mix into liquid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Dissolve\" means Mix into liquid.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Dissolve** = Mix into liquid.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
