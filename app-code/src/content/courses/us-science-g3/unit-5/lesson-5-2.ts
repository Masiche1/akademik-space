import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "sci3-u5-lesson-5-2",
  code: "5-2",
  title: "Gravity",
  goal: "I CAN explain how gravity pulls objects toward Earth.",
  standards: ["PS2.B"],
  vocabulary: [
    { term: "Gravity", definition: "Force pulling toward Earth." },
    { term: "Weight", definition: "Gravity's pull on mass." },
    { term: "Fall", definition: "Move down due to gravity." },
    { term: "Drop", definition: "Let go and fall." },
    { term: "Earth", definition: "Planet we live on." },
    { term: "Mass", definition: "Amount of matter." },
    { term: "Heavier", definition: "More mass." },
    { term: "Lighter", definition: "Less mass." },
  ],
  concepts: [
    {
      id: "sci3-u5-gravity",
      title: "Gravity",
      skill: "Explain that gravity pulls objects toward Earth's center.",
      lesson: {
        sections: [
          {
            heading: "What is gravity?",
            body: "**Gravity** is a force that pulls objects **toward Earth**. That's why things **fall** when you drop them.",
          },
          {
            heading: "Heavier vs lighter",
            body: "Heavier objects have more **mass** — gravity pulls them harder, but they also have more mass to move. In a vacuum, all objects fall at the same rate.",
          },
        ],
        keyFormulas: [
          { name: "Gravity", statement: "Gravity pulls all objects toward Earth -> things fall." },
        ],
        workedExample: {
          problem: "Why does a ball fall when you drop it?",
          solution: "**Gravity** pulls it toward Earth.",
        },
      },
      questions: [
        {
          id: "sci3-u5-gravity-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Gravity is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a push"
                    },
                    {
                              "id": "b",
                              "text": "a force pulling objects toward Earth"
                    },
                    {
                              "id": "c",
                              "text": "a pull sideways"
                    },
                    {
                              "id": "d",
                              "text": "a magnet"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Gravity = pull toward Earth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gravity = pull toward Earth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a force pulling objects toward Earth",
          "commonErrors": [
                    "Thinks gravity pushes."
          ]
},
        },
        {
          id: "sci3-u5-gravity-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why do things fall when dropped?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they're pushed"
                    },
                    {
                              "id": "b",
                              "text": "gravity pulls them down"
                    },
                    {
                              "id": "c",
                              "text": "they're light"
                    },
                    {
                              "id": "d",
                              "text": "the air pushes them"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Gravity pulls down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gravity pulls down.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "gravity pulls them down",
          "commonErrors": [
                    "Thinks it's wind."
          ]
},
        },
        {
          id: "sci3-u5-gravity-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Explain why objects fall to the ground. Use the word 'gravity'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Gravity",
                              "statement": "Gravity pulls toward Earth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains gravity correctly.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Gravity pulls all objects toward Earth, so they fall.'**",
          "commonErrors": [
                    "Says they float.",
                    "Cannot explain."
          ]
},
        },
        {
          id: "sci3-u5-gravity-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Weight' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "how big something is"
                    },
                    {
                              "id": "b",
                              "text": "gravity's pull on an object's mass"
                    },
                    {
                              "id": "c",
                              "text": "how heavy it looks"
                    },
                    {
                              "id": "d",
                              "text": "a color"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Weight = gravity's pull on mass."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Weight = gravity's pull on mass.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "gravity's pull on an object's mass",
          "commonErrors": [
                    "Thinks weight is just size."
          ]
},
        },
        {
          id: "sci3-u5-gravity-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Predict: what happens if you drop a feather and a rock in a vacuum (no air)? Explain.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Gravity",
                              "statement": "Both fall same rate in vacuum."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Predicts both fall.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains same rate.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Both fall at same rate — gravity pulls equally; air resistance normally slows feather.'**",
          "commonErrors": [
                    "Says feather floats.",
                    "Cannot explain."
          ]
},
        },
        {
          id: "sci3-u5-gravity-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Gravity\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Gravity's pull on mass."
                    },
                    {
                              "id": "b",
                              "text": "Force pulling toward Earth."
                    },
                    {
                              "id": "c",
                              "text": "Move down due to gravity."
                    },
                    {
                              "id": "d",
                              "text": "Let go and fall."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Gravity\" means Force pulling toward Earth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Gravity\" means Force pulling toward Earth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Gravity** = Force pulling toward Earth.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u5-gravity-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Weight\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Move down due to gravity."
                    },
                    {
                              "id": "b",
                              "text": "Let go and fall."
                    },
                    {
                              "id": "c",
                              "text": "Planet we live on."
                    },
                    {
                              "id": "d",
                              "text": "Gravity's pull on mass."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Weight\" means Gravity's pull on mass."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Weight\" means Gravity's pull on mass.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Weight** = Gravity's pull on mass.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u5-gravity-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fall\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Let go and fall."
                    },
                    {
                              "id": "b",
                              "text": "Move down due to gravity."
                    },
                    {
                              "id": "c",
                              "text": "Planet we live on."
                    },
                    {
                              "id": "d",
                              "text": "Amount of matter."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fall\" means Move down due to gravity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fall\" means Move down due to gravity.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fall** = Move down due to gravity.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
