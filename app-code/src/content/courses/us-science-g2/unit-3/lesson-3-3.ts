import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "sci2-u3-lesson-3-3",
  code: "3-3",
  title: "Sound and Vibration",
  goal: "I CAN describe how vibrations create sound.",
  standards: ["NGSS 2-PS4-1"],
  vocabulary: [
    { term: "Sound", definition: "What we hear." },
    { term: "Vibration", definition: "Back-and-forth movement." },
    { term: "Vibrate", definition: "Move back and forth quickly." },
    { term: "String", definition: "Stretched cord that vibrates." },
    { term: "Drum", definition: "Instrument made by hitting." },
    { term: "Voice", definition: "Sound from our throat." },
    { term: "Hear", definition: "Perceive sound." },
    { term: "Loud", definition: "Strong sound." },
    { term: "Quiet", definition: "Soft sound." },
    { term: "Pitch", definition: "High or low sound." },
  ],
  concepts: [
    {
      id: "sci2-u3-sound-vibration",
      title: "Sound and vibration",
      skill: "Describe how vibrations create sound and how we hear it.",
      lesson: {
        sections: [
          {
            heading: "Vibrations make sound",
            body: "**Sound** is created by **vibrations** — things moving back and forth quickly. A **string** on a guitar vibrates to make sound; our **voice** box vibrates when we talk.",
          },
          {
            heading: "Loud and quiet",
            body: "The **louder** the sound, the **stronger** the vibration. The **pitch** (high or low) depends on how fast it vibrates — faster = higher pitch.",
          },
        ],
        keyFormulas: [
          { name: "Sound", statement: "Vibration -> sound waves -> we hear." },
        ],
        workedExample: {
          problem: "Why does a drum make sound when you hit it?",
          solution: "Hitting makes the drumhead **vibrate**, which creates **sound**.",
        },
      },
      questions: [
        {
          id: "sci2-u3-sound-vibration-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Sound is created by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "color"
                    },
                    {
                              "id": "b",
                              "text": "vibrations"
                    },
                    {
                              "id": "c",
                              "text": "light"
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
                              "statement": "Vibrations create sound."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Vibrations create sound.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**vibrations**",
          "commonErrors": [
                    "Thinks sound is light."
          ]
},
        },
        {
          id: "sci2-u3-sound-vibration-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A guitar string makes sound by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "being painted"
                    },
                    {
                              "id": "b",
                              "text": "vibrating"
                    },
                    {
                              "id": "c",
                              "text": "being hit with a hammer"
                    },
                    {
                              "id": "d",
                              "text": "being tuned"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "String vibrates to make sound."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "String vibrates to make sound.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**vibrating**",
          "commonErrors": [
                    "Picks wrong cause."
          ]
},
        },
        {
          id: "sci2-u3-sound-vibration-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Make a sound louder. What happens to the vibration?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Vibration",
                              "statement": "Louder = stronger vibration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Says vibration gets stronger.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'The vibration gets stronger/faster, making it louder.'**",
          "commonErrors": [
                    "Says vibration weakens.",
                    "Cannot explain."
          ]
},
        },
        {
          id: "sci2-u3-sound-vibration-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Pitch' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "how loud"
                    },
                    {
                              "id": "b",
                              "text": "how high or low a sound is"
                    },
                    {
                              "id": "c",
                              "text": "a color"
                    },
                    {
                              "id": "d",
                              "text": "a size"
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
          "finalAnswer": "**high or low**",
          "commonErrors": [
                    "Confuses with loudness."
          ]
},
        },
        {
          id: "sci2-u3-sound-vibration-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find two things that make sound by vibrating. Describe how each vibrates.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Vibration",
                              "statement": "Find vibrating objects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds first example.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Finds second example.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Drum: hit makes it vibrate. Voice: throat vibrates.'**",
          "commonErrors": [
                    "Cannot find.",
                    "Only one example."
          ]
},
        },
        {
          id: "sci2-u3-sound-vibration-q6",
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
                              "text": "What we hear."
                    },
                    {
                              "id": "c",
                              "text": "Move back and forth quickly."
                    },
                    {
                              "id": "d",
                              "text": "Stretched cord that vibrates."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sound\" means What we hear."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sound\" means What we hear.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sound** = What we hear.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u3-sound-vibration-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Vibration\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Move back and forth quickly."
                    },
                    {
                              "id": "b",
                              "text": "Stretched cord that vibrates."
                    },
                    {
                              "id": "c",
                              "text": "Instrument made by hitting."
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
          id: "sci2-u3-sound-vibration-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Vibrate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Stretched cord that vibrates."
                    },
                    {
                              "id": "b",
                              "text": "Move back and forth quickly."
                    },
                    {
                              "id": "c",
                              "text": "Instrument made by hitting."
                    },
                    {
                              "id": "d",
                              "text": "Sound from our throat."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Vibrate\" means Move back and forth quickly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Vibrate\" means Move back and forth quickly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Vibrate** = Move back and forth quickly.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
