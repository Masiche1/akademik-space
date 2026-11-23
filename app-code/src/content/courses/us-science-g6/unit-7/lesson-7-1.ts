import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "sci6-u7-lesson-7-1",
  code: "7-1",
  title: "Solar System",
  goal: "I CAN describe the solar system and its objects.",
  standards: ["ESS1.A"],
  vocabulary: [
    { term: "Solar system", definition: "Sun + planets." },
    { term: "Sun", definition: "Star at center." },
    { term: "Planet", definition: "Orbits Sun." },
    { term: "Moon", definition: "Orbits planet." },
    { term: "Asteroid", definition: "Rocky body." },
    { term: "Comet", definition: "Icy body." },
    { term: "Orbit", definition: "Path around." },
    { term: "Gravity", definition: "Pulling force." },
  ],
  concepts: [
    {
      id: "sci6-u7-solar-system",
      title: "Solar system",
      skill: "Describe the solar system's major objects and how they orbit.",
      lesson: {
        sections: [
          {
            heading: "Objects",
            body: "The **solar system** includes the **Sun** (star), **8 planets**, **moons**, **asteroids**, **comets**, and other objects.",
          },
          {
            heading: "Orbits",
            body: "Objects **orbit** due to **gravity** — planets orbit Sun, moons orbit planets. Order from Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.",
          },
        ],
        keyFormulas: [
          { name: "Solar system", statement: "Sun + 8 planets + moons + asteroids + comets = solar system." },
        ],
        workedExample: {
          problem: "What keeps planets in orbit around the Sun?",
          solution: "**Gravity** — the Sun's gravitational pull keeps planets in orbit.",
        },
      },
      questions: [
        {
          id: "sci6-u7-solar-system-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'solar system' includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only planets"
                    },
                    {
                              "id": "b",
                              "text": "Sun, planets, moons, asteroids, comets"
                    },
                    {
                              "id": "c",
                              "text": "only stars"
                    },
                    {
                              "id": "d",
                              "text": "only Earth"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All objects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All objects.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Sun, planets, moons, asteroids, comets",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "sci6-u7-solar-system-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Orbit' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "moving in straight line"
                    },
                    {
                              "id": "b",
                              "text": "path around another object"
                    },
                    {
                              "id": "c",
                              "text": "staying still"
                    },
                    {
                              "id": "d",
                              "text": "only spinning"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Path around."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Path around.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "path around another object",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "sci6-u7-solar-system-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "List the planets in order from the Sun and explain what keeps them in orbit.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solar system",
                              "statement": "Order + gravity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lists planets.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains orbit.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune; Gravity from Sun keeps them in orbit.**",
          "commonErrors": [
                    "Wrong order.",
                    "No gravity explained."
          ]
},
        },
        {
          id: "sci6-u7-solar-system-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Comets' are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "rocky planets"
                    },
                    {
                              "id": "b",
                              "text": "icy bodies that orbit Sun"
                    },
                    {
                              "id": "c",
                              "text": "stars"
                    },
                    {
                              "id": "d",
                              "text": "moons"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Icy bodies."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Icy bodies.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "icy bodies that orbit Sun",
          "commonErrors": [
                    "Confuses with planets."
          ]
},
        },
        {
          id: "sci6-u7-solar-system-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe the solar system and explain how gravity keeps objects in orbit.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solar system",
                              "statement": "System + gravity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes system.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains gravity.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Sun + 8 planets + moons/asteroids/comets; Gravity pulls objects toward Sun, creating orbit.**",
          "commonErrors": [
                    "Cannot describe.",
                    "No gravity explained."
          ]
},
        },
        {
          id: "sci6-u7-solar-system-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Solar system\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Star at center."
                    },
                    {
                              "id": "b",
                              "text": "Sun + planets."
                    },
                    {
                              "id": "c",
                              "text": "Orbits Sun."
                    },
                    {
                              "id": "d",
                              "text": "Orbits planet."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Solar system\" means Sun + planets."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Solar system\" means Sun + planets.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Solar system** = Sun + planets.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u7-solar-system-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sun\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Orbits Sun."
                    },
                    {
                              "id": "b",
                              "text": "Orbits planet."
                    },
                    {
                              "id": "c",
                              "text": "Rocky body."
                    },
                    {
                              "id": "d",
                              "text": "Star at center."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sun\" means Star at center."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sun\" means Star at center.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sun** = Star at center.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u7-solar-system-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Planet\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Orbits planet."
                    },
                    {
                              "id": "b",
                              "text": "Orbits Sun."
                    },
                    {
                              "id": "c",
                              "text": "Rocky body."
                    },
                    {
                              "id": "d",
                              "text": "Icy body."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Planet\" means Orbits Sun."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Planet\" means Orbits Sun.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Planet** = Orbits Sun.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
