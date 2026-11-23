import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "sci3-u6-lesson-6-2",
  code: "6-2",
  title: "Shadows",
  goal: "I CAN explain how shadows form when light is blocked.",
  standards: ["PS3.B", "PS4.A"],
  vocabulary: [
    { term: "Shadow", definition: "Dark area where light blocked." },
    { term: "Block", definition: "Stop light from passing." },
    { term: "Opaque", definition: "Blocks light completely." },
    { term: "Transparent", definition: "Lets light through." },
    { term: "Translucent", definition: "Some light through." },
    { term: "Light source", definition: "Where light comes from." },
    { term: "Position", definition: "Where object is." },
    { term: "Time", definition: "When shadow appears." },
  ],
  concepts: [
    {
      id: "sci3-u6-shadows",
      title: "Shadows",
      skill: "Explain that shadows form when opaque objects block light.",
      lesson: {
        sections: [
          {
            heading: "How shadows form",
            body: "A **shadow** forms when an **opaque** object **blocks** light from a **source**. The shadow appears on the surface behind the object.",
          },
          {
            heading: "Materials matter",
            body: "**Opaque** materials block all light (wood, metal); **transparent** let all through (glass); **translucent** let some through (frosted glass, wax paper).",
          },
        ],
        keyFormulas: [
          { name: "Shadow", statement: "Light source -> opaque object -> blocks light -> shadow on surface." },
        ],
        workedExample: {
          problem: "Why does a tree cast a shadow on the ground?",
          solution: "The tree is **opaque** — it **blocks** sunlight, creating a **shadow** on the ground.",
        },
      },
      questions: [
        {
          id: "sci3-u6-shadows-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A shadow forms when...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "light passes through"
                    },
                    {
                              "id": "b",
                              "text": "an opaque object blocks light"
                    },
                    {
                              "id": "c",
                              "text": "there's no light"
                    },
                    {
                              "id": "d",
                              "text": "it's nighttime"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Shadow = light blocked by opaque object."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Shadow = light blocked by opaque object.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "an opaque object blocks light",
          "commonErrors": [
                    "Thinks shadows need no light."
          ]
},
        },
        {
          id: "sci3-u6-shadows-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which material is opaque?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "glass"
                    },
                    {
                              "id": "b",
                              "text": "wood"
                    },
                    {
                              "id": "c",
                              "text": "water"
                    },
                    {
                              "id": "d",
                              "text": "air"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Wood blocks all light = opaque."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Wood blocks all light = opaque.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "wood",
          "commonErrors": [
                    "Thinks glass is opaque."
          ]
},
        },
        {
          id: "sci3-u6-shadows-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Explain why a shadow is darker on a sunny day than a cloudy day.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Shadows",
                              "statement": "More light = darker shadow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains sunny = darker shadow.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Sunny day = more light blocked = darker shadow; cloudy = less light = lighter shadow.'**",
          "commonErrors": [
                    "Says same shadow.",
                    "Cannot explain."
          ]
},
        },
        {
          id: "sci3-u6-shadows-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Opaque' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "lets all light through"
                    },
                    {
                              "id": "b",
                              "text": "blocks all light"
                    },
                    {
                              "id": "c",
                              "text": "lets some light through"
                    },
                    {
                              "id": "d",
                              "text": "is clear"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Opaque = blocks all light."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Opaque = blocks all light.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "blocks all light",
          "commonErrors": [
                    "Thinks opaque is transparent."
          ]
},
        },
        {
          id: "sci3-u6-shadows-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Design an experiment to test which materials are opaque, translucent, or transparent.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Shadows",
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
                              "reasoning": "Predicts results.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Shine light through materials; measure light on other side.'**",
          "commonErrors": [
                    "Cannot design.",
                    "No prediction."
          ]
},
        },
        {
          id: "sci3-u6-shadows-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Shadow\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Stop light from passing."
                    },
                    {
                              "id": "b",
                              "text": "Dark area where light blocked."
                    },
                    {
                              "id": "c",
                              "text": "Blocks light completely."
                    },
                    {
                              "id": "d",
                              "text": "Lets light through."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Shadow\" means Dark area where light blocked."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Shadow\" means Dark area where light blocked.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Shadow** = Dark area where light blocked.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u6-shadows-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Block\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Blocks light completely."
                    },
                    {
                              "id": "b",
                              "text": "Lets light through."
                    },
                    {
                              "id": "c",
                              "text": "Some light through."
                    },
                    {
                              "id": "d",
                              "text": "Stop light from passing."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Block\" means Stop light from passing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Block\" means Stop light from passing.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Block** = Stop light from passing.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u6-shadows-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Opaque\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Lets light through."
                    },
                    {
                              "id": "b",
                              "text": "Blocks light completely."
                    },
                    {
                              "id": "c",
                              "text": "Some light through."
                    },
                    {
                              "id": "d",
                              "text": "Where light comes from."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Opaque\" means Blocks light completely."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Opaque\" means Blocks light completely.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Opaque** = Blocks light completely.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
