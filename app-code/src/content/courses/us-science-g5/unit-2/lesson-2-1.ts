import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "sci5-u2-lesson-2-1",
  code: "2-1",
  title: "Energy Basics",
  goal: "I CAN identify and describe different forms of energy.",
  standards: ["PS3.A"],
  vocabulary: [
    { term: "Energy", definition: "Ability to do work." },
    { term: "Kinetic", definition: "Energy of motion." },
    { term: "Potential", definition: "Stored energy." },
    { term: "Heat", definition: "Thermal energy." },
    { term: "Light", definition: "Visible energy." },
    { term: "Sound", definition: "Vibration energy." },
    { term: "Electricity", definition: "Electrical energy." },
    { term: "Motion", definition: "Movement." },
  ],
  concepts: [
    {
      id: "sci5-u2-energy-basics",
      title: "Energy basics",
      skill: "Identify and describe forms of energy.",
      lesson: {
        sections: [
          {
            heading: "Forms",
            body: "**Energy** comes in forms: **kinetic** (motion), **potential** (stored), **heat** (thermal), **light**, **sound**, **electricity**. It can **transfer** between forms.",
          },
          {
            heading: "Transfer",
            body: "Energy **moves** from one object to another: a moving ball has kinetic energy; a stretched rubber band has potential energy.",
          },
        ],
        keyFormulas: [
          { name: "Energy", statement: "Kinetic + potential + heat + light + sound + electricity = forms." },
        ],
        workedExample: {
          problem: "What type of energy does a moving car have?",
          solution: "**Kinetic energy** (energy of motion) plus potential (height).",
        },
      },
      questions: [
        {
          id: "sci5-u2-energy-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Kinetic energy' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "stored energy"
                    },
                    {
                              "id": "b",
                              "text": "energy of motion"
                    },
                    {
                              "id": "c",
                              "text": "heat"
                    },
                    {
                              "id": "d",
                              "text": "light"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Energy of motion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Energy of motion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "energy of motion",
          "commonErrors": [
                    "Confuses with potential."
          ]
},
        },
        {
          id: "sci5-u2-energy-basics-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Potential energy' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "energy of motion"
                    },
                    {
                              "id": "b",
                              "text": "stored energy"
                    },
                    {
                              "id": "c",
                              "text": "heat"
                    },
                    {
                              "id": "d",
                              "text": "sound"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Stored energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Stored energy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "stored energy",
          "commonErrors": [
                    "Confuses with kinetic."
          ]
},
        },
        {
          id: "sci5-u2-energy-basics-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Identify the form of energy in: a moving ball, a stretched rubber band, a light bulb, a hot stove.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Energy",
                              "statement": "All four identified."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies all four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Moving ball: kinetic; Rubber band: potential; Light bulb: light+electricity; Hot stove: heat.**",
          "commonErrors": [
                    "Wrong forms.",
                    "Missing items."
          ]
},
        },
        {
          id: "sci5-u2-energy-basics-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Energy can...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "be created"
                    },
                    {
                              "id": "b",
                              "text": "transfer between forms"
                    },
                    {
                              "id": "c",
                              "text": "disappear"
                    },
                    {
                              "id": "d",
                              "text": "only be heat"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Transfer between forms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Transfer between forms.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "transfer between forms",
          "commonErrors": [
                    "Thinks it disappears."
          ]
},
        },
        {
          id: "sci5-u2-energy-basics-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how energy transfers in a simple system (e.g., a falling ball or a battery-powered toy).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Energy",
                              "statement": "Transfer explained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies energy forms.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains transfer.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Battery: chemical -> electrical -> light/sound/motion.'**",
          "commonErrors": [
                    "Cannot explain.",
                    "No transfer."
          ]
},
        },
        {
          id: "sci5-u2-energy-basics-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Energy\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Energy of motion."
                    },
                    {
                              "id": "b",
                              "text": "Ability to do work."
                    },
                    {
                              "id": "c",
                              "text": "Stored energy."
                    },
                    {
                              "id": "d",
                              "text": "Thermal energy."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Energy\" means Ability to do work."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Energy\" means Ability to do work.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Energy** = Ability to do work.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u2-energy-basics-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Kinetic\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Stored energy."
                    },
                    {
                              "id": "b",
                              "text": "Thermal energy."
                    },
                    {
                              "id": "c",
                              "text": "Visible energy."
                    },
                    {
                              "id": "d",
                              "text": "Energy of motion."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Kinetic\" means Energy of motion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Kinetic\" means Energy of motion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Kinetic** = Energy of motion.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci5-u2-energy-basics-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Potential\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Thermal energy."
                    },
                    {
                              "id": "b",
                              "text": "Stored energy."
                    },
                    {
                              "id": "c",
                              "text": "Visible energy."
                    },
                    {
                              "id": "d",
                              "text": "Vibration energy."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Potential\" means Stored energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Potential\" means Stored energy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Potential** = Stored energy.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
