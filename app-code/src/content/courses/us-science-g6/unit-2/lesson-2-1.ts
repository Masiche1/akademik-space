import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "sci6-u2-lesson-2-1",
  code: "2-1",
  title: "Forms of Energy",
  goal: "I CAN identify different forms of energy.",
  standards: ["MS-PS3-1"],
  vocabulary: [
    { term: "Energy", definition: "Ability to do work." },
    { term: "Kinetic", definition: "Motion energy." },
    { term: "Potential", definition: "Stored energy." },
    { term: "Thermal", definition: "Heat energy." },
    { term: "Chemical", definition: "In bonds." },
    { term: "Electrical", definition: "Electricity." },
    { term: "Light", definition: "Visible energy." },
    { term: "Sound", definition: "Vibration energy." },
  ],
  concepts: [
    {
      id: "sci6-u2-energy-forms",
      title: "Forms of energy",
      skill: "Identify and describe different forms of energy.",
      lesson: {
        sections: [
          {
            heading: "Energy types",
            body: "**Kinetic** = energy of motion. **Potential** = stored energy. **Thermal** = heat. **Chemical** = in bonds. **Electrical** = electricity. **Light** = visible. **Sound** = vibrations.",
          },
          {
            heading: "Transformations",
            body: "Energy can **transform** from one form to another: chemical -> electrical -> light (battery powering light).",
          },
        ],
        keyFormulas: [
          { name: "Energy forms", statement: "Kinetic + potential + thermal + chemical + electrical + light + sound = types." },
        ],
        workedExample: {
          problem: "A battery powers a flashlight. Trace the energy transformations.",
          solution: "**Chemical (battery) -> Electrical (circuit) -> Light + Thermal (bulb).**",
        },
      },
      questions: [
        {
          id: "sci6-u2-energy-forms-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Kinetic energy' is energy of...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "position"
                    },
                    {
                              "id": "b",
                              "text": "motion"
                    },
                    {
                              "id": "c",
                              "text": "heat"
                    },
                    {
                              "id": "d",
                              "text": "electricity"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Motion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Motion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "motion",
          "commonErrors": [
                    "Confuses with potential."
          ]
},
        },
        {
          id: "sci6-u2-energy-forms-q2",
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
                              "text": "heat energy"
                    },
                    {
                              "id": "d",
                              "text": "light energy"
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
          id: "sci6-u2-energy-forms-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Identify the energy forms in these: a moving car, a stretched rubber band, a hot stove, a battery.",
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
                              "reasoning": "Identifies forms.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Car: kinetic + chemical (fuel); Rubber band: elastic potential; Stove: thermal + chemical; Battery: chemical.**",
          "commonErrors": [
                    "Wrong forms.",
                    "Missing items."
          ]
},
        },
        {
          id: "sci6-u2-energy-forms-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Energy can transform from one form to another because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it can't"
                    },
                    {
                              "id": "b",
                              "text": "energy is conserved"
                    },
                    {
                              "id": "c",
                              "text": "it's destroyed"
                    },
                    {
                              "id": "d",
                              "text": "it's created"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Conserved."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Conserved.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "energy is conserved",
          "commonErrors": [
                    "Violates conservation."
          ]
},
        },
        {
          id: "sci6-u2-energy-forms-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe an energy transformation chain in a real-world device and identify each form.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Energy",
                              "statement": "Chain + forms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes chain.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Identifies forms.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Hydroelectric dam: gravitational potential -> kinetic (water) -> mechanical (turbine) -> electrical (generator).'**",
          "commonErrors": [
                    "Cannot describe.",
                    "No forms identified."
          ]
},
        },
        {
          id: "sci6-u2-energy-forms-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Energy\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Motion energy."
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
                              "text": "Heat energy."
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
          id: "sci6-u2-energy-forms-q7",
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
                              "text": "Heat energy."
                    },
                    {
                              "id": "c",
                              "text": "In bonds."
                    },
                    {
                              "id": "d",
                              "text": "Motion energy."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Kinetic\" means Motion energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Kinetic\" means Motion energy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Kinetic** = Motion energy.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u2-energy-forms-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Potential\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Heat energy."
                    },
                    {
                              "id": "b",
                              "text": "Stored energy."
                    },
                    {
                              "id": "c",
                              "text": "In bonds."
                    },
                    {
                              "id": "d",
                              "text": "Electricity."
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
