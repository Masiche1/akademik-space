import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "sci4-u2-lesson-2-3",
  code: "2-3",
  title: "Sound Waves",
  goal: "I CAN explain how sound is produced and travels.",
  standards: ["PS4.A"],
  vocabulary: [
    { term: "Sound", definition: "Vibrations we hear." },
    { term: "Vibration", definition: "Back-and-forth motion." },
    { term: "Medium", definition: "What sound travels through." },
    { term: "Pitch", definition: "High or low sound." },
    { term: "Volume", definition: "Loud or quiet." },
    { term: "Frequency", definition: "Vibration rate." },
    { term: "Echo", definition: "Sound bouncing back." },
    { term: "Vibrate", definition: "Move back and forth." },
  ],
  concepts: [
    {
      id: "sci4-u2-sound-waves",
      title: "Sound waves",
      skill: "Explain how sound is produced by vibrations and travels through a medium.",
      lesson: {
        sections: [
          {
            heading: "Sound is vibration",
            body: "**Sound** is produced by **vibrations**. When something vibrates, it pushes air particles, creating **sound waves** that travel through a **medium** (air, water, solids).",
          },
          {
            heading: "Pitch and volume",
            body: "**Pitch** = how high/low (frequency); **volume** = how loud/quiet (amplitude). Faster vibration = higher pitch.",
          },
        ],
        keyFormulas: [
          { name: "Sound", statement: "Vibration + medium = sound waves." },
        ],
        workedExample: {
          problem: "Why can't you hear a sound in space?",
          solution: "Sound needs a **medium** (air, water, solid) to travel. Space is a vacuum — no particles to vibrate.",
        },
      },
      questions: [
        {
          id: "sci4-u2-sound-waves-q1",
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
                              "text": "heat"
                    },
                    {
                              "id": "d",
                              "text": "magnetism"
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
                    "Wrong source."
          ]
},
        },
        {
          id: "sci4-u2-sound-waves-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sound travels through...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "space"
                    },
                    {
                              "id": "b",
                              "text": "a medium like air"
                    },
                    {
                              "id": "c",
                              "text": "nothing"
                    },
                    {
                              "id": "d",
                              "text": "only light"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Sound needs medium."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sound needs medium.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a medium like air",
          "commonErrors": [
                    "Thinks it travels in vacuum."
          ]
},
        },
        {
          id: "sci4-u2-sound-waves-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why a guitar string makes sound. What is vibrating?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sound",
                              "statement": "Vibration explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies vibration source.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains sound production.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'String vibrates when plucked, pushing air particles to create sound waves.'**",
          "commonErrors": [
                    "Cannot explain.",
                    "Wrong source."
          ]
},
        },
        {
          id: "sci4-u2-sound-waves-q4",
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
                              "text": "duration"
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
                    "Confuses with volume."
          ]
},
        },
        {
          id: "sci4-u2-sound-waves-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare two sounds: a whisper and a shout. How do they differ in terms of amplitude and volume?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sound",
                              "statement": "Amplitude comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares amplitudes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Relates to volume.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Whisper = small amplitude = quiet; Shout = large amplitude = loud.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "No amplitude link."
          ]
},
        },
        {
          id: "sci4-u2-sound-waves-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sound\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Back-and-forth motion."
                    },
                    {
                              "id": "b",
                              "text": "Vibrations we hear."
                    },
                    {
                              "id": "c",
                              "text": "What sound travels through."
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
                              "statement": "\"Sound\" means Vibrations we hear."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sound\" means Vibrations we hear.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sound** = Vibrations we hear.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u2-sound-waves-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Vibration\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What sound travels through."
                    },
                    {
                              "id": "b",
                              "text": "High or low sound."
                    },
                    {
                              "id": "c",
                              "text": "Loud or quiet."
                    },
                    {
                              "id": "d",
                              "text": "Back-and-forth motion."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Vibration\" means Back-and-forth motion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Vibration\" means Back-and-forth motion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Vibration** = Back-and-forth motion.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci4-u2-sound-waves-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Medium\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "High or low sound."
                    },
                    {
                              "id": "b",
                              "text": "What sound travels through."
                    },
                    {
                              "id": "c",
                              "text": "Loud or quiet."
                    },
                    {
                              "id": "d",
                              "text": "Vibration rate."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Medium\" means What sound travels through."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Medium\" means What sound travels through.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Medium** = What sound travels through.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
