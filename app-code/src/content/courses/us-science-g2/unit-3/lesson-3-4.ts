import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "sci2-u3-lesson-3-4",
  code: "3-4",
  title: "Using Light and Sound",
  goal: "I CAN describe how we use light and sound.",
  standards: ["NGSS 2-PS4-2", "NGSS 2-PS4-3"],
  vocabulary: [
    { term: "Use", definition: "How we use something." },
    { term: "See", definition: "Use eyes to look." },
    { term: "Hear", definition: "Use ears to listen." },
    { term: "Light up", definition: "Make visible." },
    { term: "Signal", definition: "Message with light/sound." },
    { term: "Alarm", definition: "Warning sound/light." },
    { term: "Echo", definition: "Sound bouncing back." },
    { term: "Communicate", definition: "Send messages." },
    { term: "Tool", definition: "Something we use." },
    { term: "Safe", definition: "Not dangerous." },
  ],
  concepts: [
    {
      id: "sci2-u3-light-sound-use",
      title: "Using light and sound",
      skill: "Describe how we use light and sound for communication and safety.",
      lesson: {
        sections: [
          {
            heading: "Light and sound are useful",
            body: "We use **light** to **see** and to **signal** (flashlights, traffic lights). We use **sound** to **hear**, **warn** (alarms), and **communicate** (talking, music).",
          },
          {
            heading: "Safety uses",
            body: "**Alarms** warn us of danger. **Traffic lights** use light to tell drivers when to stop. **Echoes** help us locate things (like bats and dolphins).",
          },
        ],
        keyFormulas: [
          { name: "Light/sound use", statement: "See/hear + signal/warn + communicate = useful applications." },
        ],
        workedExample: {
          problem: "How do traffic lights use light to keep us safe?",
          solution: "They use **red** (stop), **yellow** (caution), **green** (go) light to control traffic.",
        },
      },
      questions: [
        {
          id: "sci2-u3-light-sound-use-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Traffic lights use light to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "make music"
                    },
                    {
                              "id": "b",
                              "text": "tell drivers when to stop or go"
                    },
                    {
                              "id": "c",
                              "text": "heat buildings"
                    },
                    {
                              "id": "d",
                              "text": "charge phones"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Traffic lights control traffic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Traffic lights control traffic.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**control traffic**",
          "commonErrors": [
                    "Picks unrelated use."
          ]
},
        },
        {
          id: "sci2-u3-light-sound-use-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "An 'alarm' uses...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "light only"
                    },
                    {
                              "id": "b",
                              "text": "sound or light to warn us"
                    },
                    {
                              "id": "c",
                              "text": "heat"
                    },
                    {
                              "id": "d",
                              "text": "gravity"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Alarm warns with sound/light."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Alarm warns with sound/light.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**warns**",
          "commonErrors": [
                    "Picks wrong use."
          ]
},
        },
        {
          id: "sci2-u3-light-sound-use-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Give two ways we use light and two ways we use sound.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Light/sound use",
                              "statement": "See/hear + signal/warn."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gives 2 light + 2 sound uses.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Light: flashlight, traffic light. Sound: alarm, talking.'**",
          "commonErrors": [
                    "Only one type.",
                    "Cannot give uses."
          ]
},
        },
        {
          id: "sci2-u3-light-sound-use-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'echo' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a light"
                    },
                    {
                              "id": "b",
                              "text": "sound bouncing back"
                    },
                    {
                              "id": "c",
                              "text": "a color"
                    },
                    {
                              "id": "d",
                              "text": "a vibration"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Echo = sound bouncing back."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Echo = sound bouncing back.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**sound bouncing**",
          "commonErrors": [
                    "Confuses with vibration."
          ]
},
        },
        {
          id: "sci2-u3-light-sound-use-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe how a flashlight and an alarm clock each use light or sound.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Light/sound use",
                              "statement": "Flashlight=light, alarm=sound."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes flashlight.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Describes alarm clock.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Flashlight: makes light to see in dark. Alarm: makes sound to wake us.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "Wrong tools."
          ]
},
        },
        {
          id: "sci2-u3-light-sound-use-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Use\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Use eyes to look."
                    },
                    {
                              "id": "b",
                              "text": "How we use something."
                    },
                    {
                              "id": "c",
                              "text": "Use ears to listen."
                    },
                    {
                              "id": "d",
                              "text": "Make visible."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Use\" means How we use something."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Use\" means How we use something.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Use** = How we use something.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u3-light-sound-use-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"See\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Use ears to listen."
                    },
                    {
                              "id": "b",
                              "text": "Make visible."
                    },
                    {
                              "id": "c",
                              "text": "Message with light/sound."
                    },
                    {
                              "id": "d",
                              "text": "Use eyes to look."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"See\" means Use eyes to look."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"See\" means Use eyes to look.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**See** = Use eyes to look.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u3-light-sound-use-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Hear\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Make visible."
                    },
                    {
                              "id": "b",
                              "text": "Use ears to listen."
                    },
                    {
                              "id": "c",
                              "text": "Message with light/sound."
                    },
                    {
                              "id": "d",
                              "text": "Warning sound/light."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Hear\" means Use ears to listen."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Hear\" means Use ears to listen.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Hear** = Use ears to listen.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
