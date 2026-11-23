import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "sci4-u2-lesson-2-2",
  code: "2-2",
  title: "Light Waves",
  goal: "I CAN explain how light travels and interacts with matter.",
  standards: ["PS4.B"],
  vocabulary: [
    { term: "Light", definition: "Visible energy." },
    { term: "Wave", definition: "Energy moving." },
    { term: "Reflect", definition: "Bounce back." },
    { term: "Refract", definition: "Bend through." },
    { term: "Absorb", definition: "Take in." },
    { term: "Transmit", definition: "Pass through." },
    { term: "Transparent", definition: "Lets light through." },
    { term: "Opaque", definition: "Blocks light." },
  ],
  concepts: [
    {
      id: "sci4-u2-light-waves",
      title: "Light waves",
      skill: "Explain how light travels and interacts with materials.",
      lesson: {
        sections: [
          {
            heading: "Light travels",
            body: "**Light** is a **wave** of **energy** that travels through space. It can **reflect** (bounce), **refract** (bend), **absorb** (take in), or **transmit** (pass through) depending on the material.",
          },
          {
            heading: "Materials",
            body: "**Transparent** materials let light through (glass); **opaque** materials block it (wood); **translucent** materials scatter it (wax paper).",
          },
        ],
        keyFormulas: [
          { name: "Light", statement: "Reflect + refract + absorb + transmit = light interactions." },
        ],
        workedExample: {
          problem: "Why can you see through a window but not a wall?",
          solution: "Glass is **transparent** — light **transmits** through it. Wood is **opaque** — it **absorbs/reflects** light.",
        },
      },
      questions: [
        {
          id: "sci4-u2-light-waves-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Light is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a substance"
                    },
                    {
                              "id": "b",
                              "text": "a wave of energy"
                    },
                    {
                              "id": "c",
                              "text": "a particle only"
                    },
                    {
                              "id": "d",
                              "text": "heat"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Light = energy wave."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Light = energy wave.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a wave of energy",
          "commonErrors": [
                    "Thinks it's a substance."
          ]
},
        },
        {
          id: "sci4-u2-light-waves-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Transparent' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "blocks light"
                    },
                    {
                              "id": "b",
                              "text": "lets light through"
                    },
                    {
                              "id": "c",
                              "text": "reflects light"
                    },
                    {
                              "id": "d",
                              "text": "is dark"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Transparent = light passes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Transparent = light passes.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "lets light through",
          "commonErrors": [
                    "Confuses with opaque."
          ]
},
        },
        {
          id: "sci4-u2-light-waves-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Explain what happens to light when it hits a mirror, glass, and wood.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Light",
                              "statement": "Reflect + transmit + absorb."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains all three.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Mirror: reflects; Glass: transmits; Wood: absorbs/reflects.'**",
          "commonErrors": [
                    "Only one material.",
                    "Wrong interactions."
          ]
},
        },
        {
          id: "sci4-u2-light-waves-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Refraction' is when light...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "bounces back"
                    },
                    {
                              "id": "b",
                              "text": "bends as it passes through"
                    },
                    {
                              "id": "c",
                              "text": "disappears"
                    },
                    {
                              "id": "d",
                              "text": "speeds up only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Refraction = bending."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Refraction = bending.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "bends as it passes through",
          "commonErrors": [
                    "Confuses with reflection."
          ]
},
        },
        {
          id: "sci4-u2-light-waves-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Design an experiment to test which materials are transparent, translucent and opaque. What would you measure?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Light",
                              "statement": "Experiment design."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Designs experiment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Identifies measurement.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Shine light through materials; observe how much light passes vs scatters vs blocks.'**",
          "commonErrors": [
                    "Cannot design.",
                    "No measurement."
          ]
},
        },
        {
          id: "sci4-u2-light-waves-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Light\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Energy moving."
                    },
                    {
                              "id": "b",
                              "text": "Visible energy."
                    },
                    {
                              "id": "c",
                              "text": "Bounce back."
                    },
                    {
                              "id": "d",
                              "text": "Bend through."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Light\" means Visible energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Light\" means Visible energy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Light** = Visible energy.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u2-light-waves-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Wave\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bounce back."
                    },
                    {
                              "id": "b",
                              "text": "Bend through."
                    },
                    {
                              "id": "c",
                              "text": "Take in."
                    },
                    {
                              "id": "d",
                              "text": "Energy moving."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Wave\" means Energy moving."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Wave\" means Energy moving.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Wave** = Energy moving.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u2-light-waves-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Reflect\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Bend through."
                    },
                    {
                              "id": "b",
                              "text": "Bounce back."
                    },
                    {
                              "id": "c",
                              "text": "Take in."
                    },
                    {
                              "id": "d",
                              "text": "Pass through."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Reflect\" means Bounce back."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Reflect\" means Bounce back.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Reflect** = Bounce back.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
