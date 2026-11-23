import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "sci6-u7-lesson-7-2",
  code: "7-2",
  title: "Earth's Motion",
  goal: "I CAN explain Earth's rotation and revolution.",
  standards: ["ESS1.A"],
  vocabulary: [
    { term: "Rotation", definition: "Spin on axis." },
    { term: "Revolution", definition: "Orbit Sun." },
    { term: "Day", definition: "24 hours." },
    { term: "Year", definition: "365 days." },
    { term: "Axis", definition: "Imaginary line." },
    { term: "Tilt", definition: "23.5 degrees." },
    { term: "Seasons", definition: "Caused by tilt." },
    { term: "Day/night", definition: "Rotation effect." },
  ],
  concepts: [
    {
      id: "sci6-u7-earths-motion",
      title: "Earth's motion",
      skill: "Explain how Earth's rotation and revolution cause day/night and seasons.",
      lesson: {
        sections: [
          {
            heading: "Rotation",
            body: "Earth **rotates** (spins) on its **axis** every 24 hours -> **day and night**. The side facing Sun has day; away has night.",
          },
          {
            heading: "Revolution",
            body: "Earth **revolves** (orbits) Sun every 365 days -> **year**. **Tilt** of axis (23.5°) causes **seasons** as different parts get more/less direct sunlight.",
          },
        ],
        keyFormulas: [
          { name: "Rotation", statement: "Spin on axis = 24 hours = day/night." },
          { name: "Revolution", statement: "Orbit Sun = 365 days = year + seasons." },
        ],
        workedExample: {
          problem: "Why do we have seasons?",
          solution: "**Earth's axis is tilted 23.5°; as Earth orbits Sun, different hemispheres get more/less direct sunlight -> seasons.**",
        },
      },
      questions: [
        {
          id: "sci6-u7-earths-motion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Rotation' refers to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "orbiting Sun"
                    },
                    {
                              "id": "b",
                              "text": "spinning on axis"
                    },
                    {
                              "id": "c",
                              "text": "moving through space"
                    },
                    {
                              "id": "d",
                              "text": "only seasons"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Spinning on axis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Spinning on axis.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "spinning on axis",
          "commonErrors": [
                    "Confuses with revolution."
          ]
},
        },
        {
          id: "sci6-u7-earths-motion-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Revolution' refers to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "spinning"
                    },
                    {
                              "id": "b",
                              "text": "orbiting the Sun"
                    },
                    {
                              "id": "c",
                              "text": "day/night"
                    },
                    {
                              "id": "d",
                              "text": "only rotation"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Orbiting Sun."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Orbiting Sun.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "orbiting the Sun",
          "commonErrors": [
                    "Confuses with rotation."
          ]
},
        },
        {
          id: "sci6-u7-earths-motion-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how Earth's rotation causes day and night, and how revolution + tilt causes seasons.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Motion",
                              "statement": "Day/night + seasons."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains rotation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains seasons.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Rotation: spin on axis -> day/night; Revolution+tilt: orbit Sun with 23.5° tilt -> different sunlight -> seasons.**",
          "commonErrors": [
                    "Cannot explain.",
                    "Wrong causes."
          ]
},
        },
        {
          id: "sci6-u7-earths-motion-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Seasons' are caused by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "distance from Sun"
                    },
                    {
                              "id": "b",
                              "text": "Earth's axial tilt"
                    },
                    {
                              "id": "c",
                              "text": "rotation only"
                    },
                    {
                              "id": "d",
                              "text": "Moon's orbit"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Axial tilt."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Axial tilt.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Earth's axial tilt",
          "commonErrors": [
                    "Wrong cause."
          ]
},
        },
        {
          id: "sci6-u7-earths-motion-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe Earth's rotation and revolution, explaining what each causes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Motion",
                              "statement": "Both motions + effects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes rotation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes revolution.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Rotation: spin on axis = 24h = day/night; Revolution: orbit Sun = 365d = year + seasons (due to tilt).**",
          "commonErrors": [
                    "Missing one.",
                    "Wrong effects."
          ]
},
        },
        {
          id: "sci6-u7-earths-motion-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rotation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Orbit Sun."
                    },
                    {
                              "id": "b",
                              "text": "Spin on axis."
                    },
                    {
                              "id": "c",
                              "text": "24 hours."
                    },
                    {
                              "id": "d",
                              "text": "365 days."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Rotation\" means Spin on axis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rotation\" means Spin on axis.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rotation** = Spin on axis.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u7-earths-motion-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Revolution\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "24 hours."
                    },
                    {
                              "id": "b",
                              "text": "365 days."
                    },
                    {
                              "id": "c",
                              "text": "Imaginary line."
                    },
                    {
                              "id": "d",
                              "text": "Orbit Sun."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Revolution\" means Orbit Sun."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Revolution\" means Orbit Sun.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Revolution** = Orbit Sun.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u7-earths-motion-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Day\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "365 days."
                    },
                    {
                              "id": "b",
                              "text": "24 hours."
                    },
                    {
                              "id": "c",
                              "text": "Imaginary line."
                    },
                    {
                              "id": "d",
                              "text": "23.5 degrees."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Day\" means 24 hours."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Day\" means 24 hours.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Day** = 24 hours.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
