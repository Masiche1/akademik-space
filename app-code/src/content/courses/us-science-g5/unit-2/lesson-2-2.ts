import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "sci5-u2-lesson-2-2",
  code: "2-2",
  title: "Energy Conservation",
  goal: "I CAN explain that energy is conserved (not created or destroyed).",
  standards: ["PS3.A"],
  vocabulary: [
    { term: "Conservation", definition: "Energy stays same total." },
    { term: "Transfer", definition: "Move between forms." },
    { term: "Transform", definition: "Change form." },
    { term: "System", definition: "Object + surroundings." },
    { term: "Before", definition: "Starting state." },
    { term: "After", definition: "Ending state." },
    { term: "Equal", definition: "Same amount." },
    { term: "Account", definition: "Track energy." },
  ],
  concepts: [
    {
      id: "sci5-u2-energy-conservation",
      title: "Energy conservation",
      skill: "Explain that energy is conserved — it transfers and transforms but isn't created or destroyed.",
      lesson: {
        sections: [
          {
            heading: "Never disappears",
            body: "**Energy conservation** means energy is **never created or destroyed** — it only **transfers** (moves) or **transforms** (changes form). Total energy stays the same.",
          },
          {
            heading: "Example",
            body: "A falling ball: **potential** energy -> **kinetic** energy. The total stays the same, just changes form.",
          },
        ],
        keyFormulas: [
          { name: "Conservation", statement: "Energy before = energy after (total)." },
        ],
        workedExample: {
          problem: "Does energy disappear when a ball hits the ground?",
          solution: "**No** — it transforms to sound, heat, and deformation.",
        },
      },
      questions: [
        {
          id: "sci5-u2-energy-conservation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Energy conservation means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "energy is created"
                    },
                    {
                              "id": "b",
                              "text": "energy is never created or destroyed"
                    },
                    {
                              "id": "c",
                              "text": "energy disappears"
                    },
                    {
                              "id": "d",
                              "text": "energy is infinite"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Never created/destroyed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Never created/destroyed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "energy is never created or destroyed",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "sci5-u2-energy-conservation-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "When a ball falls, its energy...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "disappears"
                    },
                    {
                              "id": "b",
                              "text": "transforms from potential to kinetic"
                    },
                    {
                              "id": "c",
                              "text": "increases"
                    },
                    {
                              "id": "d",
                              "text": "stays the same form"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Potential -> kinetic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Potential -> kinetic.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "transforms from potential to kinetic",
          "commonErrors": [
                    "Wrong transformation."
          ]
},
        },
        {
          id: "sci5-u2-energy-conservation-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Trace energy in a simple system (e.g., a falling ball, a battery, a swinging pendulum). Show before/after.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Conservation",
                              "statement": "Trace shown."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Traces energy.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Falling ball: PE (high) -> KE (fast) -> PE (ground) -> heat/sound on impact.'**",
          "commonErrors": [
                    "Cannot trace.",
                    "Wrong energy."
          ]
},
        },
        {
          id: "sci5-u2-energy-conservation-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When a battery powers a toy, energy...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "is created"
                    },
                    {
                              "id": "b",
                              "text": "transforms from chemical to electrical to motion/light"
                    },
                    {
                              "id": "c",
                              "text": "disappears"
                    },
                    {
                              "id": "d",
                              "text": "stays chemical"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Chemical -> electrical -> motion/light."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Chemical -> electrical -> motion/light.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "transforms from chemical to electrical to motion/light",
          "commonErrors": [
                    "Wrong transformation."
          ]
},
        },
        {
          id: "sci5-u2-energy-conservation-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain energy conservation with an example. How does energy transform but total stay same?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Conservation",
                              "statement": "Example + explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gives example.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains conservation.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Swinging pendulum: PE at top -> KE at bottom -> PE at top; total energy conserved.'**",
          "commonErrors": [
                    "Cannot explain.",
                    "No example."
          ]
},
        },
        {
          id: "sci5-u2-energy-conservation-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Conservation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Move between forms."
                    },
                    {
                              "id": "b",
                              "text": "Energy stays same total."
                    },
                    {
                              "id": "c",
                              "text": "Change form."
                    },
                    {
                              "id": "d",
                              "text": "Object + surroundings."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Conservation\" means Energy stays same total."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Conservation\" means Energy stays same total.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Conservation** = Energy stays same total.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u2-energy-conservation-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Transfer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Change form."
                    },
                    {
                              "id": "b",
                              "text": "Object + surroundings."
                    },
                    {
                              "id": "c",
                              "text": "Starting state."
                    },
                    {
                              "id": "d",
                              "text": "Move between forms."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Transfer\" means Move between forms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Transfer\" means Move between forms.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Transfer** = Move between forms.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u2-energy-conservation-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Transform\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Object + surroundings."
                    },
                    {
                              "id": "b",
                              "text": "Change form."
                    },
                    {
                              "id": "c",
                              "text": "Starting state."
                    },
                    {
                              "id": "d",
                              "text": "Ending state."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Transform\" means Change form."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Transform\" means Change form.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Transform** = Change form.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
