import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "sci3-u6-lesson-6-3",
  code: "6-3",
  title: "Sound Energy",
  goal: "I CAN describe sound as energy that travels through vibrations.",
  standards: ["PS4.A", "PS4.B"],
  vocabulary: [
    { term: "Sound", definition: "Energy we hear." },
    { term: "Vibration", definition: "Back-and-forth movement." },
    { term: "Source", definition: "Where sound comes from." },
    { term: "Travel", definition: "Move through." },
    { term: "Medium", definition: "Material sound travels through." },
    { term: "Pitch", definition: "High or low sound." },
    { term: "Loud", definition: "Strong sound." },
    { term: "Quiet", definition: "Weak sound." },
  ],
  concepts: [
    {
      id: "sci3-u6-sound-energy",
      title: "Sound energy",
      skill: "Describe sound as energy produced by vibrations that travels through a medium.",
      lesson: {
        sections: [
          {
            heading: "Sound is energy",
            body: "**Sound** is a form of **energy** we **hear**. It is produced by **vibrations** — back-and-forth movements — and **travels** through a **medium** (air, water, solid).",
          },
          {
            heading: "Pitch and loudness",
            body: "**Pitch** is how high or low a sound is; **loudness** is how strong it is. Tight strings = high pitch; loose = low pitch.",
          },
        ],
        keyFormulas: [
          { name: "Sound", statement: "Vibration -> travels through medium -> we hear." },
        ],
        workedExample: {
          problem: "How does a guitar make sound?",
          solution: "Plucking strings makes them **vibrate** — vibrations travel through air to our ears.",
        },
      },
      questions: [
        {
          id: "sci3-u6-sound-energy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Sound is produced by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "light"
                    },
                    {
                              "id": "b",
                              "text": "vibrations"
                    },
                    {
                              "id": "c",
                              "text": "color"
                    },
                    {
                              "id": "d",
                              "text": "smell"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Sound = vibrations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sound = vibrations.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "vibrations",
          "commonErrors": [
                    "Thinks sound is light."
          ]
},
        },
        {
          id: "sci3-u6-sound-energy-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sound travels through...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only air"
                    },
                    {
                              "id": "b",
                              "text": "air, water, and solids"
                    },
                    {
                              "id": "c",
                              "text": "only water"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Sound travels through media."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sound travels through media.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "air, water, and solids",
          "commonErrors": [
                    "Thinks sound needs no medium."
          ]
},
        },
        {
          id: "sci3-u6-sound-energy-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Explain how sound reaches your ears when someone speaks.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sound",
                              "statement": "Vibration -> air -> ears."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains vibration -> air -> ears.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Vocal cords vibrate -> sound waves travel through air -> reach ears.'**",
          "commonErrors": [
                    "Cannot explain.",
                    "No vibration."
          ]
},
        },
        {
          id: "sci3-u6-sound-energy-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Pitch' refers to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "loudness"
                    },
                    {
                              "id": "b",
                              "text": "how high or low a sound is"
                    },
                    {
                              "id": "c",
                              "text": "speed"
                    },
                    {
                              "id": "d",
                              "text": "color"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Pitch = high/low."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pitch = high/low.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "how high or low a sound is",
          "commonErrors": [
                    "Thinks pitch is loudness."
          ]
},
        },
        {
          id: "sci3-u6-sound-energy-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Predict: can you hear a sound underwater? Explain using sound and medium.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sound",
                              "statement": "Sound travels through water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Predicts yes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains sound travels through water.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Yes — sound travels through water (medium), so you can hear underwater.'**",
          "commonErrors": [
                    "Says no.",
                    "Cannot explain."
          ]
},
        },
        {
          id: "sci3-u6-sound-energy-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sound\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Back-and-forth movement."
                    },
                    {
                              "id": "b",
                              "text": "Energy we hear."
                    },
                    {
                              "id": "c",
                              "text": "Where sound comes from."
                    },
                    {
                              "id": "d",
                              "text": "Move through."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sound\" means Energy we hear."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sound\" means Energy we hear.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sound** = Energy we hear.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u6-sound-energy-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Vibration\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where sound comes from."
                    },
                    {
                              "id": "b",
                              "text": "Move through."
                    },
                    {
                              "id": "c",
                              "text": "Material sound travels through."
                    },
                    {
                              "id": "d",
                              "text": "Back-and-forth movement."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Vibration\" means Back-and-forth movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Vibration\" means Back-and-forth movement.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Vibration** = Back-and-forth movement.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u6-sound-energy-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Source\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Move through."
                    },
                    {
                              "id": "b",
                              "text": "Where sound comes from."
                    },
                    {
                              "id": "c",
                              "text": "Material sound travels through."
                    },
                    {
                              "id": "d",
                              "text": "High or low sound."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Source\" means Where sound comes from."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Source\" means Where sound comes from.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Source** = Where sound comes from.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
