import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "sci2-u7-lesson-7-3",
  code: "7-3",
  title: "How Humans Use Earth's Resources",
  goal: "I CAN describe how humans use natural resources.",
  standards: ["NGSS 2-ESS2-1"],
  vocabulary: [
    { term: "Use", definition: "How we use something." },
    { term: "Build", definition: "Make structures." },
    { term: "Energy", definition: "Power for machines." },
    { term: "Food", definition: "What we eat." },
    { term: "Water", definition: "For drinking, farming." },
    { term: "Trees", definition: "For wood, paper." },
    { term: "Soil", definition: "For growing food." },
    { term: "Rock", definition: "For building." },
    { term: "Depend", definition: "Need for survival." },
    { term: "Impact", definition: "Effect on Earth." },
  ],
  concepts: [
    {
      id: "sci2-u7-human-use",
      title: "How humans use Earth's resources",
      skill: "Describe how humans use natural resources for food, shelter, energy and more.",
      lesson: {
        sections: [
          {
            heading: "We depend on resources",
            body: "Humans **depend** on natural resources: **water** (drink, farm), **soil** (grow food), **trees** (wood, paper), **rocks** (build), **coal/oil** (energy).",
          },
          {
            heading: "Impact on Earth",
            body: "Our **use** of resources **impacts** Earth — we must use them wisely so they last and the environment stays healthy.",
          },
        ],
        keyFormulas: [
          { name: "Human use", statement: "Water + soil + trees + rock + coal = resources for food, shelter, energy." },
        ],
        workedExample: {
          problem: "How do we use trees? Give two examples.",
          solution: "**Wood** for building/furniture; **paper** for books/writing.",
        },
      },
      questions: [
        {
          id: "sci2-u7-human-use-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Humans use natural resources for...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "nothing"
                    },
                    {
                              "id": "b",
                              "text": "food, shelter, energy"
                    },
                    {
                              "id": "c",
                              "text": "only food"
                    },
                    {
                              "id": "d",
                              "text": "only energy"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Food, shelter, energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Food, shelter, energy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**all three**",
          "commonErrors": [
                    "Picks one use."
          ]
},
        },
        {
          id: "sci2-u7-human-use-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Soil is important because it...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "makes rocks"
                    },
                    {
                              "id": "b",
                              "text": "grows our food"
                    },
                    {
                              "id": "c",
                              "text": "makes water"
                    },
                    {
                              "id": "d",
                              "text": "makes air"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Soil grows food."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Soil grows food.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**grows food**",
          "commonErrors": [
                    "Picks wrong use."
          ]
},
        },
        {
          id: "sci2-u7-human-use-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe three ways humans use natural resources.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Human use",
                              "statement": "Food, shelter, energy uses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes 3 uses.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Water for drinking, trees for wood, coal for energy.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "Fewer than 3."
          ]
},
        },
        {
          id: "sci2-u7-human-use-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Impact' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a resource"
                    },
                    {
                              "id": "b",
                              "text": "the effect something has"
                    },
                    {
                              "id": "c",
                              "text": "a tool"
                    },
                    {
                              "id": "d",
                              "text": "a building"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Impact = effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Impact = effect.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**effect**",
          "commonErrors": [
                    "Confuses with resource."
          ]
},
        },
        {
          id: "sci2-u7-human-use-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe how your home uses three natural resources.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Human use",
                              "statement": "Home resource uses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes first resource.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Describes second + third.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Wood: furniture. Water: drinking. Electricity: lights (from coal).'**",
          "commonErrors": [
                    "Cannot describe.",
                    "Fewer than 3."
          ]
},
        },
        {
          id: "sci2-u7-human-use-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Use\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Make structures."
                    },
                    {
                              "id": "b",
                              "text": "How we use something."
                    },
                    {
                              "id": "c",
                              "text": "Power for machines."
                    },
                    {
                              "id": "d",
                              "text": "What we eat."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Use\" means How we use something."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Use\" means How we use something.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Use** = How we use something.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u7-human-use-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Build\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Power for machines."
                    },
                    {
                              "id": "b",
                              "text": "What we eat."
                    },
                    {
                              "id": "c",
                              "text": "For drinking, farming."
                    },
                    {
                              "id": "d",
                              "text": "Make structures."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Build\" means Make structures."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Build\" means Make structures.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Build** = Make structures.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u7-human-use-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Energy\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What we eat."
                    },
                    {
                              "id": "b",
                              "text": "Power for machines."
                    },
                    {
                              "id": "c",
                              "text": "For drinking, farming."
                    },
                    {
                              "id": "d",
                              "text": "For wood, paper."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Energy\" means Power for machines."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Energy\" means Power for machines.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Energy** = Power for machines.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
