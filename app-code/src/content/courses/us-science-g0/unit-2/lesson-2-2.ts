import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "s0-u2-lesson-2-2",
  code: "2-2",
  title: "Sun, Moon and Stars",
  goal: "I CAN identify the sun, moon and stars and describe them.",
  standards: ["K-ESS1-1"],
  vocabulary: [
    { term: "Sun", definition: "Our closest star, gives light/warmth." },
    { term: "Moon", definition: "Orbits Earth, reflects sunlight." },
    { term: "Star", definition: "A distant ball of hot gas giving light." },
    { term: "Planet", definition: "A large object orbiting a star." },
    { term: "Sky", definition: "Space above Earth." },
    { term: "Light", definition: "Energy we see." },
    { term: "Warmth", definition: "Heat energy." },
    { term: "Orbit", definition: "The path an object travels around." },
  ],
  concepts: [
    {
      id: "s0-u2-sun-moon-stars",
      title: "Sun, moon and stars",
      skill: "Identify and describe the sun, moon, stars and planets.",
      lesson: {
        sections: [
          {
            heading: "The sun",
            body: "The **sun** is a **star** — a ball of hot gas that gives Earth **light** and **warmth**. It is our closest star.",
          },
          {
            heading: "Moon and stars",
            body: "The **moon** orbits Earth and reflects sunlight. **Stars** are distant balls of hot gas we see as points of light in the night sky. **Planets** orbit stars.",
          },
        ],
        keyFormulas: [
          { name: "Sun/Moon/Stars", statement: "Sun=star (light+warmth); Moon=orbits Earth; Stars=distant light points; Planets=orbit stars." },
        ],
        workedExample: {
          problem: "Is the moon a star? Why or why not?",
          solution: "No — the **moon** is not a star; it **orbits Earth** and **reflects sunlight** (it does not make its own light).",
        },
      },
      questions: [
        {
          id: "s0-u2-sun-moon-stars-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The sun is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a planet"
                    },
                    {
                              "id": "b",
                              "text": "a star"
                    },
                    {
                              "id": "c",
                              "text": "the moon"
                    },
                    {
                              "id": "d",
                              "text": "a cloud"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Sun = a star."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sun = a star.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**a star**",
          "commonErrors": [
                    "Confuses with planet."
          ]
},
        },
        {
          id: "s0-u2-sun-moon-stars-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The moon...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "makes its own light"
                    },
                    {
                              "id": "b",
                              "text": "orbits Earth and reflects sunlight"
                    },
                    {
                              "id": "c",
                              "text": "is a star"
                    },
                    {
                              "id": "d",
                              "text": "is the sun"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Moon orbits Earth + reflects sunlight."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Moon orbits Earth + reflects sunlight.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**orbits + reflects**",
          "commonErrors": [
                    "Thinks moon makes light."
          ]
},
        },
        {
          id: "s0-u2-sun-moon-stars-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe the sun, moon and stars: what each is and where we see it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sun/moon/stars",
                              "statement": "Describe each object."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes sun, moon, stars.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Sun=star giving light; Moon=orbits Earth; Stars=night sky points.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "Confuses objects."
          ]
},
        },
        {
          id: "s0-u2-sun-moon-stars-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Stars are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "planets"
                    },
                    {
                              "id": "b",
                              "text": "distant balls of hot gas that give light"
                    },
                    {
                              "id": "c",
                              "text": "moons"
                    },
                    {
                              "id": "d",
                              "text": "clouds"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Stars = distant hot gas balls giving light."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stars = distant hot gas balls giving light.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**hot gas balls**",
          "commonErrors": [
                    "Confuses with planets."
          ]
},
        },
        {
          id: "s0-u2-sun-moon-stars-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare the sun and the moon. How are they different? How are they similar?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sun vs moon",
                              "statement": "Differences + similarities."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names differences.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Names similarities.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Sun=star makes light; Moon=orbits Earth reflects light. Both appear in sky.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "Only differences."
          ]
},
        },
        {
          id: "s0-u2-sun-moon-stars-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sun\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Orbits Earth, reflects sunlight."
                    },
                    {
                              "id": "b",
                              "text": "Our closest star, gives light/warmth."
                    },
                    {
                              "id": "c",
                              "text": "A distant ball of hot gas giving light."
                    },
                    {
                              "id": "d",
                              "text": "A large object orbiting a star."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sun\" means Our closest star, gives light/warmth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sun\" means Our closest star, gives light/warmth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sun** = Our closest star, gives light/warmth.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u2-sun-moon-stars-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Moon\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A distant ball of hot gas giving light."
                    },
                    {
                              "id": "b",
                              "text": "A large object orbiting a star."
                    },
                    {
                              "id": "c",
                              "text": "Space above Earth."
                    },
                    {
                              "id": "d",
                              "text": "Orbits Earth, reflects sunlight."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Moon\" means Orbits Earth, reflects sunlight."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Moon\" means Orbits Earth, reflects sunlight.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Moon** = Orbits Earth, reflects sunlight.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u2-sun-moon-stars-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Star\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A large object orbiting a star."
                    },
                    {
                              "id": "b",
                              "text": "A distant ball of hot gas giving light."
                    },
                    {
                              "id": "c",
                              "text": "Space above Earth."
                    },
                    {
                              "id": "d",
                              "text": "Energy we see."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Star\" means A distant ball of hot gas giving light."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Star\" means A distant ball of hot gas giving light.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Star** = A distant ball of hot gas giving light.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
