import type { Lesson } from "../../../types.ts";

export const lesson74: Lesson = {
  id: "sci6-u7-lesson-7-4",
  code: "7-4",
  title: "Space Exploration",
  goal: "I CAN describe space exploration and its importance.",
  standards: ["ESS1.A"],
  vocabulary: [
    { term: "Exploration", definition: "Traveling to space." },
    { term: "Astronaut", definition: "Space traveler." },
    { term: "Satellite", definition: "Orbits Earth." },
    { term: "Telescope", definition: "Sees far." },
    { term: "Rocket", definition: "Launches to space." },
    { term: "Station", definition: "Orbiting lab." },
    { term: "Probe", definition: "Unmanned spacecraft." },
    { term: "Mission", definition: "Space goal." },
  ],
  concepts: [
    {
      id: "sci6-u7-space-exploration",
      title: "Space exploration",
      skill: "Describe how humans explore space and why it's important.",
      lesson: {
        sections: [
          {
            heading: "How we explore",
            body: "**Rockets** launch **satellites**, **space stations**, and **probes** into space. **Astronauts** travel to space stations. **Telescopes** observe distant objects.",
          },
          {
            heading: "Why explore?",
            body: "Space exploration advances **science** (understanding universe), **technology** (spin-offs like GPS), and **human curiosity**.",
          },
        ],
        keyFormulas: [
          { name: "Exploration", statement: "Rockets + satellites + telescopes + astronauts = space exploration." },
        ],
        workedExample: {
          problem: "What are two ways humans explore space?",
          solution: "**1. Crewed missions (astronauts to ISS); 2. Uncrewed missions (satellites, probes, telescopes).**",
        },
      },
      questions: [
        {
          id: "sci6-u7-space-exploration-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'satellite' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a star"
                    },
                    {
                              "id": "b",
                              "text": "object orbiting Earth or other body"
                    },
                    {
                              "id": "c",
                              "text": "a planet"
                    },
                    {
                              "id": "d",
                              "text": "a rocket"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Orbiting object."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Orbiting object.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "object orbiting Earth or other body",
          "commonErrors": [
                    "Confuses with other objects."
          ]
},
        },
        {
          id: "sci6-u7-space-exploration-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Space exploration' benefits humanity by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only entertainment"
                    },
                    {
                              "id": "b",
                              "text": "advancing science and technology"
                    },
                    {
                              "id": "c",
                              "text": "only military"
                    },
                    {
                              "id": "d",
                              "text": "only tourism"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Science + technology."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Science + technology.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "advancing science and technology",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "sci6-u7-space-exploration-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe two ways humans explore space and explain one benefit of space exploration.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Exploration",
                              "statement": "Two ways + benefit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes ways.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains benefit.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Ways: astronauts to ISS, satellites/telescopes; Benefit: advances science (understanding universe) and technology (GPS, materials).**",
          "commonErrors": [
                    "Cannot describe.",
                    "No benefit."
          ]
},
        },
        {
          id: "sci6-u7-space-exploration-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Astronaut' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a satellite"
                    },
                    {
                              "id": "b",
                              "text": "a person who travels to space"
                    },
                    {
                              "id": "c",
                              "text": "a telescope"
                    },
                    {
                              "id": "d",
                              "text": "a rocket"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Space traveler."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Space traveler.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a person who travels to space",
          "commonErrors": [
                    "Confuses with equipment."
          ]
},
        },
        {
          id: "sci6-u7-space-exploration-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how humans explore space and why it's important for our future.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Exploration",
                              "statement": "How + why."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains how.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains importance.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**How: rockets, satellites, telescopes, astronauts; Why: science, technology, resource discovery, human curiosity.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No importance."
          ]
},
        },
        {
          id: "sci6-u7-space-exploration-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Exploration\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Space traveler."
                    },
                    {
                              "id": "b",
                              "text": "Traveling to space."
                    },
                    {
                              "id": "c",
                              "text": "Orbits Earth."
                    },
                    {
                              "id": "d",
                              "text": "Sees far."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Exploration\" means Traveling to space."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Exploration\" means Traveling to space.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Exploration** = Traveling to space.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u7-space-exploration-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Astronaut\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Orbits Earth."
                    },
                    {
                              "id": "b",
                              "text": "Sees far."
                    },
                    {
                              "id": "c",
                              "text": "Launches to space."
                    },
                    {
                              "id": "d",
                              "text": "Space traveler."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Astronaut\" means Space traveler."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Astronaut\" means Space traveler.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Astronaut** = Space traveler.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u7-space-exploration-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Satellite\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sees far."
                    },
                    {
                              "id": "b",
                              "text": "Orbits Earth."
                    },
                    {
                              "id": "c",
                              "text": "Launches to space."
                    },
                    {
                              "id": "d",
                              "text": "Orbiting lab."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Satellite\" means Orbits Earth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Satellite\" means Orbits Earth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Satellite** = Orbits Earth.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
