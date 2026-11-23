import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "spk-u8-lesson-8-3",
  code: "8-3",
  title: "Review: Materials and Forces",
  goal: "I CAN describe materials and forces that help us.",
  standards: ["ELOF-PK.SCI.REVIEW.3"],
  vocabulary: [
    { term: "Material", definition: "What something is made of." },
    { term: "Property", definition: "Hard/soft/rough/smooth." },
    { term: "Waterproof", definition: "Keeps water out." },
    { term: "Force", definition: "Push or pull." },
    { term: "Gravity", definition: "Pulls down." },
    { term: "Simple machine", definition: "Tool making work easier." },
    { term: "Lever", definition: "Pivoting bar." },
  ],
  concepts: [
    {
      id: "spk-u8-review-materials-forces",
      title: "Materials and forces review",
      skill: "Combine material properties and force/machine concepts.",
      lesson: {
        sections: [
          {
            heading: "Materials + forces",
            body: "Materials have properties (hard/soft, waterproof/durable) suited to jobs. Forces (push/pull/gravity) move things. Simple machines (levers, wheels, ramps, pulleys) make work easier.",
          },
          {
            heading: "Put it together",
            body: "Choose the right material for a job (waterproof for raincoat), use forces to move things (push a cart), and use machines to make work easier (ramp for heavy box).",
          },
        ],
        keyFormulas: [
          { name: "Review", statement: "Materials + forces + machines = practical science." },
        ],
        workedExample: {
          problem: "Why is a wheel useful for moving a heavy box?",
          solution: "A **wheel** rolls instead of sliding — reduces friction, making it easier to move the heavy box.",
        },
      },
      questions: [
        {
          id: "spk-u8-review-materials-forces-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Materials + forces + machines work together because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they are unrelated"
                    },
                    {
                              "id": "b",
                              "text": "right material + right force + right machine = easier work"
                    },
                    {
                              "id": "c",
                              "text": "machines replace materials"
                    },
                    {
                              "id": "d",
                              "text": "forces replace machines"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All three combine for practical solutions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All three combine for practical solutions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Combine for easier work**",
          "commonErrors": [
                    "Thinks they're unrelated."
          ]
},
        },
        {
          id: "spk-u8-review-materials-forces-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'simple machine' that helps lift is a...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "ramp"
                    },
                    {
                              "id": "b",
                              "text": "lever or pulley"
                    },
                    {
                              "id": "c",
                              "text": "rock"
                    },
                    {
                              "id": "d",
                              "text": "cloth"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Lever/pulley lift things."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lever/pulley lift things.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**lever or pulley**",
          "commonErrors": [
                    "Picks wrong machine."
          ]
},
        },
        {
          id: "spk-u8-review-materials-forces-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Choose a material for a job and explain which property matters. Then name a force or machine that helps.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Materials + forces",
                              "statement": "Material + property + force/machine."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Chooses material + property.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Names force/machine.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Raincoat=plastic (waterproof); wheel helps move it.'**",
          "commonErrors": [
                    "Only material.",
                    "Cannot connect."
          ]
},
        },
        {
          id: "spk-u8-review-materials-forces-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Gravity is a force that...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "pushes things up"
                    },
                    {
                              "id": "b",
                              "text": "pulls things down"
                    },
                    {
                              "id": "c",
                              "text": "moves sideways"
                    },
                    {
                              "id": "d",
                              "text": "stops motion"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Gravity pulls things down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gravity pulls things down.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**pulls down**",
          "commonErrors": [
                    "Thinks gravity pushes up."
          ]
},
        },
        {
          id: "spk-u8-review-materials-forces-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Design a simple tool to help someone (open a jar, move a box, carry water). Choose materials, identify the machine type, and explain how it reduces effort.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Materials + machines",
                              "statement": "Design + materials + machine."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Designs tool with materials.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Identifies machine + explains.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Jar opener: metal lever (durable) — lever multiplies force.'**",
          "commonErrors": [
                    "No design.",
                    "Cannot explain."
          ]
},
        },
        {
          id: "spk-u8-review-materials-forces-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Material\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hard/soft/rough/smooth."
                    },
                    {
                              "id": "b",
                              "text": "What something is made of."
                    },
                    {
                              "id": "c",
                              "text": "Keeps water out."
                    },
                    {
                              "id": "d",
                              "text": "Push or pull."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Material\" means What something is made of."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Material\" means What something is made of.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Material** = What something is made of.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u8-review-materials-forces-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Property\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Keeps water out."
                    },
                    {
                              "id": "b",
                              "text": "Push or pull."
                    },
                    {
                              "id": "c",
                              "text": "Pulls down."
                    },
                    {
                              "id": "d",
                              "text": "Hard/soft/rough/smooth."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Property\" means Hard/soft/rough/smooth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Property\" means Hard/soft/rough/smooth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Property** = Hard/soft/rough/smooth.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u8-review-materials-forces-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Waterproof\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Push or pull."
                    },
                    {
                              "id": "b",
                              "text": "Keeps water out."
                    },
                    {
                              "id": "c",
                              "text": "Pulls down."
                    },
                    {
                              "id": "d",
                              "text": "Tool making work easier."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Waterproof\" means Keeps water out."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Waterproof\" means Keeps water out.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Waterproof** = Keeps water out.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
